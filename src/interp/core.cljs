(ns interp.core
  (:require-macros [interp.macros :refer [generate-functions
                                          generate-instructions
                                          def-instruction]])
  (:require
   [reagent.core :as r]
   [reagent.dom :as d]
   [cljs.tools.reader :refer [read-string]]
   [cljs.js :as cljs-js]
   [interp.globals :as globals]
   [interp.utils :as utils]
   [interp.state :as state]
   [interp.instructions]
   [propeller.push.interpreter :as pinterpreter]
   [propeller.push.state :as pstate]))

(def step-limit (r/atom 100))

(def current-step (r/atom 0))

(def error-exists (r/atom false))

(def cache (r/atom [{:exec    '()
                     :integer '()
                     :string  '()
                     :boolean '()}]))

(def blank-state
  {:exec    '()
   :integer '()
   :string  '()
   :boolean '()})

(def error-output (r/atom ""))

(def test-push-code (r/atom "(:exec_dupitems 1 :boolean_shove  2 :boolean_xor \"three\"
:integer_gte \"four\" :integer_mod \"five\" :string_concat true false
:boolean_rot 1 :integer_lte 3 :integer_add \"seven\" :integer_shove \"hello\"
:string_drop true :integer_rot :boolean_dupitems :string_dupitems :integer_max :string_eq
:integer_stackdepth :boolean_dup true true :string_take :exec_eq :string_swap :integer_yank \"hello\"
:integer_fromchar :string_stackdepth :integer_min \"1\" :exec_swap \"hello\" :string_pop :integer_quot :exec_if
:boolean_invert_first_then_and :boolean_eq :integer_fromboolean :boolean_frominteger :integer_gt :boolean_not
:integer_duptimes :exec_pop :string_yankdup :boolean_duptimes :string_yank :integer_lt :integer_subtract :string_rot
:integer_swap :integer_dup :string_includes? :string_duptimes :exec_yank :integer_pop :integer_empty :integer_dec
:exec_stackdepth :boolean_and :string_length :boolean_invert_second_then_and :string_dup :boolean_yankdup :integer_inc
:boolean_stackdepth :boolean_pop :integer_mult :exec_yankdup :integer_yankdup :boolean_swap :exec_shove :exec_duptimes
:boolean_yank :integer_eq :boolean_or 12 :integer_dupitems :string_shove :integer_fromstring :string_= :exec_rot :string_reverse
:exec_dup )"))

(def push-code (r/atom "(:exec_dup (1 2 :integer_add) \"hello\" (:integer_yank 5 6) :integer_gte :exec_if (5 6) false :integer_add)"))

(def anFrame (r/atom {}))

(def push-state-history (r/atom [nil]))

(defn abs
  "Returns the absolute value of a number."
  [x]
  (if (neg? x) (- x) x))

(defn cos
  "Returns the cosine of an angle (specified in radians)."
  [x]
  ;; #?(:clj  (cos x)
  ;;    :cljs (js/Math.cos x))
  (js/Math.cos x))

(defn sin
  "Returns the sine of an angle (specified in radians)."
  [x]
  ;; #?(:clj  (sin x)
  ;;    :cljs (js/Math.sin x))
  (js/Math.sin x))

(defn tan
  "Returns the tangent of an angle (specified in radians)."
  [x]
  ;; #?(:clj  (tan x)
  ;;    :cljs (js/Math.tan x))
  (js/Math.tan x))

;; Number of blocks opened by instructions (default = 0)
(def opens {:exec_dup 1
            :exec_if  2})

;; Set of all stacks used by the Push interpreter
(defonce stacks #{;:auxiliary
                  :boolean
                  ; :char
                  ; :code
                  ; :environment
                  :exec
                  ;:float
                  ;:genome
                  ; :gtm
                  ; :input
                  :integer
                  ;:output
                  ;:return
                  :string
                  ; :tag
                  ;:vector_boolean
                  ;:vector_float
                  ;:vector_integer
                  ; :vector_string
                  ; :zip
                  })

(def push-state
  (r/atom {:exec    '()
           :integer '()
           :string  '()
           :boolean '()}))

(defn empty-stack?
  "Returns true if the stack is empty."
  [state stack]
  (empty? (get state stack)))

(defn peek-stack
  "Returns top item on a stack."
  [state stack]
  (let [working-stack (get state stack)]
    (if (empty? working-stack)
      :no-stack-item
      (first working-stack))))

(defn pop-stack
  "Removes top item of stack."
  [state stack]
  (update state stack rest))

(defn push-to-stack
  "Pushes item(s) onto stack."
  [state stack items]
  (let [items-list (if (coll? items) items (list items))
        items-list-no-nil (filter #(not (nil? %)) items-list)]
    (update state stack into items-list-no-nil)))

(defn get-args-from-stacks
  "Takes a state and a collection of stacks to take args from. If there are
  enough args on each of the desired stacks, returns a map with keys
  {:state :args}, where :state is the new state and :args is a list of args
  popped from the stacks. If there aren't enough args on the stacks, returns
  :not-enough-args without popping anything."
  [state stacks]
  (loop [state state
         stacks (reverse stacks)
         args '()]
    (if (empty? stacks)
      {:state state :args args}
      (let [current-stack (first stacks)]
        (if (empty-stack? state current-stack)
          :not-enough-args
          (recur (pop-stack state current-stack)
                 (rest stacks)
                 (conj args (peek-stack state current-stack))))))))


;; A utility function for making Push instructions. Takes a state, a function
;; to apply to the args, the stacks to take the args from, and the stack to
;; return the result to. Applies the function to the args (popped from the
;; given stacks), and pushes the result onto the return-stack
(defn make-instruction
  [state function arg-stacks return-stack]
  (let [popped-args (get-args-from-stacks state arg-stacks)]
    (if (= popped-args :not-enough-args)
      state
      (let [result (apply function (:args popped-args))
            new-state (:state popped-args)]
        (push-to-stack new-state return-stack result)))))

;; Given a sequence of stacks, e.g. [:float :integer], and a sequence of suffix
;; function strings, e.g. [_+, _*, _=], automates the generation of all possible
;; combination instructions, which here would be :float_+, :float_*, :float_=,
;; :integer_+, :integer_*, and :integer_=

;; Pretty-prints a Push state, for logging or debugging purposes
(defn print-state
  [state]
  (doseq [stack stacks]
    ;(printf "%-15s = " stack)
    (prn (if (get state stack) (get state stack) '()))
    (flush)))

;; =============================================================================
;; STRING Instructions
;; =============================================================================

(def-instruction
  :string_=
  ^{:stacks #{:boolean :string}}
  (fn [state]
    (make-instruction state = [:string :string] :boolean)))

(def-instruction
  :string_concat
  ^{:stacks #{:string}}
  (fn [state]
    (make-instruction state #(apply str (concat %1 %2)) [:string :string] :string)))

(def-instruction
  :string_drop
  ^{:stacks #{:integer :string}}
  (fn [state]
    (make-instruction state #(apply str (drop %1 %2)) [:integer :string] :string)))

(def-instruction
  :string_includes?
  ^{:stacks #{:boolean :string}}
  (fn [state]
    (make-instruction state clojure.string/includes? [:string :string] :boolean)))

(def-instruction
  :string_length
  ^{:stacks #{:integer :string}}
  (fn [state]
    (make-instruction state count [:string] :integer)))

(def-instruction
  :string_reverse
  ^{:stacks #{:string}}
  (fn [state]
    (make-instruction state #(apply str (reverse %)) [:string] :string)))

(def-instruction
  :string_take
  ^{:stacks #{:integer :string}}
  (fn [state]
    (make-instruction state #(apply str (take %1 %2)) [:integer :string] :string)))

;; =============================================================================
;; FLOAT and INTEGER Instructions (polymorphic)
;; =============================================================================

;; Pushes TRUE onto the BOOLEAN stack if the second item is greater than the top
;; item, and FALSE otherwise
(def _gt
  ^{:stacks #{:boolean}}
  (fn [stack state]
    (make-instruction state > [stack stack] :boolean)))

;; Pushes TRUE onto the BOOLEAN stack if the second item is greater than or
;; equal to the top item, and FALSE otherwise
(def _gte
  ^{:stacks #{:boolean}}
  (fn [stack state]
    (make-instruction state >= [stack stack] :boolean)))

;; Pushes TRUE onto the BOOLEAN stack if the second item is less than the top
;; item, and FALSE otherwise
(def _lt
  ^{:stacks #{:boolean}}
  (fn [stack state]
    (make-instruction state < [stack stack] :boolean)))

;; Pushes TRUE onto the BOOLEAN stack if the second item is less than or equal
;; to the top item, and FALSE otherwise
(def _lte
  ^{:stacks #{:boolean}}
  (fn [stack state]
    (make-instruction state <= [stack stack] :boolean)))

;; Pushes the sum of the top two items onto the same stack
(def _add
  ^{:stacks #{}}
  (fn [stack state]
    (make-instruction state + [stack stack] stack)))

;; Pushes the difference of the top two items (i.e. the second item minus the
;; top item) onto the same stack
(def _subtract
  ^{:stacks #{}}
  (fn [stack state]
    (make-instruction state - [stack stack] stack)))

;; Pushes the product of the top two items onto the same stack
(def _mult
  ^{:stacks #{}}
  (fn [stack state]
    (make-instruction state * [stack stack] stack)))

;; Pushes the quotient of the top two items (i.e. the second item divided by the
;; top item) onto the same stack. If the top item is zero, pushes 1
(def _quot
  ^{:stacks #{}}
  (fn [stack state]
    (make-instruction state #(if (zero? %2) 1 (quot %1 %2)) [stack stack] stack)))

;; Pushes the second item modulo the top item onto the same stack. If the top
;; item is zero, pushes 1. The modulus is computed as the remainder of the
;; quotient, where the quotient has first been truncated towards negative
;; infinity.
(def _mod
  ^{:stacks #{}}
  (fn [stack state]
    (make-instruction state #(if (zero? %2) 1 (mod %1 %2)) [stack stack] stack)))

;; Pushes the maximum of the top two items
(def _max
  ^{:stacks #{}}
  (fn [stack state]
    (make-instruction state max [stack stack] stack)))

;; Pushes the minimum of the top two items
(def _min
  ^{:stacks #{}}
  (fn [stack state]
    (make-instruction state min [stack stack] stack)))

;; Pushes 1 / 1.0 if the top BOOLEAN is TRUE, or 0 / 0.0 if FALSE
(def _fromboolean
  ^{:stacks #{:boolean}}
  (fn [stack state]
    (make-instruction state
                      #((if (= stack :integer) int float) (if % 1 0))
                      [:boolean]
                      stack)))

;; Pushes the ASCII value of the top CHAR
(def _fromchar
  ^{:stacks #{:char}}
  (fn [stack state]
    (make-instruction state (if (= stack :integer) int float) [:char] stack)))

;; Pushes the value of the top STRING, if it can be parsed as a number.
;; Otherwise, acts as a NOOP
(def _fromstring
  ^{:stacks #{:string}}
  (fn [stack state]
    (make-instruction state
                      #(try ((if (= stack :integer) int float) (read-string %))
                            (catch js/Error e))
                      [:string]
                      stack)))

;; Pushes the increment (i.e. +1) of the top item of the stack
(def _inc
  ^{:stacks #{}}
  (fn [stack state]
    (make-instruction state inc [stack] stack)))

;; Pushes the decrement (i.e. -1) of the top item of the stack
(def _dec
  ^{:stacks #{}}
  (fn [stack state]
    (make-instruction state dec [stack] stack)))

;; 2 types x 16 functions = 32 instructions
(generate-instructions
  [:integer]
  [_gt _gte _lt _lte _add _subtract _mult _quot _mod _max _min _inc _dec
   _fromboolean _fromchar _fromstring])


;; =============================================================================
;; CODE and EXEC Instructions
;; =============================================================================

(def-instruction
  :exec_if
  (fn [state]
    (make-instruction state #(if %1 %3 %2) [:boolean :exec :exec] :exec)))

;; =============================================================================
;; BOOLEAN Instructions
;; =============================================================================

;; Pushes the logical AND of the top two BOOLEANs
(def-instruction
  :boolean_and
  ^{:stacks #{:boolean}}
  (fn [state]
    (make-instruction state #(and %1 %2) [:boolean :boolean] :boolean)))

;; Pushes the logical OR of the top two BOOLEANs
(def-instruction
  :boolean_or
  ^{:stacks #{:boolean}}
  (fn [state]
    (make-instruction state #(or %1 %2) [:boolean :boolean] :boolean)))

;; Pushes the logical NOT of the top BOOLEAN
(def-instruction
  :boolean_not
  ^{:stacks #{:boolean}}
  (fn [state]
    (make-instruction state not [:boolean] :boolean)))

;; Pushes the logical XOR of the top two BOOLEAN
(def-instruction
  :boolean_xor
  ^{:stacks #{:boolean}}
  (fn [state]
    (make-instruction state #(or (and %1 (not %2))
                                 (and (not %1) %2))
                      [:boolean :boolean]
                      :boolean)))

;; Pushes the logical AND of the top two BOOLEANs, after applying NOT to the
;; first one
(def-instruction
  :boolean_invert_first_then_and
  ^{:stacks #{:boolean}}
  (fn [state]
    (make-instruction state #(and %1 (not %2)) [:boolean :boolean] :boolean)))

;; Pushes the logical AND of the top two BOOLEANs, after applying NOT to the
;; second one
(def-instruction
  :boolean_invert_second_then_and
  ^{:stacks #{:boolean}}
  (fn [state]
    (make-instruction state #(and (not %1) %2) [:boolean :boolean] :boolean)))

;; Pushes FALSE if the top FLOAT is 0.0, and TRUE otherwise

;; Pushes FALSE if the top INTEGER is 0, and TRUE otherwise
(def-instruction
  :boolean_frominteger
  ^{:stacks #{:boolean :integer}}
  (fn [state]
    (make-instruction state #(not (zero? %)) [:integer] :boolean)))

;; =============================================================================
;; Polymorphic Instructions
;;
;; (for all stacks, with the exception of non-data ones like auxiliary, input,
;; and output)
;; =============================================================================

;; Duplicates the top item of the stack. Does not pop its argument (since that
;; would negate the effect of the duplication)
(def _dup
  ^{:stacks #{}}
  (fn [stack state]
    (let [top-item (state/peek-stack state stack)]
      (if (state/empty-stack? state stack)
        state
        (state/push-to-stack state stack top-item)))))

;; Duplicates n copies of the top item (i.e leaves n copies there). Does not pop
;; its argument (since that would negate the effect of the duplication). The
;; number n is determined by the top INTEGER. For n = 0, equivalent to POP.
;; For n = 1, equivalent to NOOP. For n = 2, equivalent to DUP. Negative values
;; of n are treated as 0
(def _duptimes
  ^{:stacks #{:integer}}
  (fn [stack state]
    (if (or (and (= stack :integer)
                 (<= 2 (count (:integer state))))
            (and (not= stack :integer)
                 (not (state/empty-stack? state :integer))
                 (not (state/empty-stack? state stack))))
      (let [n (state/peek-stack state :integer)
            popped-state (state/pop-stack state :integer)
            top-item (state/peek-stack popped-state stack)
            top-item-dup (take (- n 1) (repeat top-item))]
        (cond
          (< 0 n) (state/push-to-stack-multiple popped-state stack top-item-dup)
          :else (state/pop-stack popped-state stack)))
      state)))

;; Duplicates the top n items on the stack, one time each. The number n is
;; determined by the top INTEGER. If n <= 0, no items will be duplicated. If
;; fewer than n items are on the stack, the entire stack will be duplicated.
(def _dupitems
  ^{:stacks #{:integer}}
  (fn [stack state]
    (if (state/empty-stack? state :integer)
      state
      (let [n (state/peek-stack state :integer)
            popped-state (state/pop-stack state :integer)
            top-items (take n (get popped-state stack))]
        (state/push-to-stack-multiple popped-state stack top-items)))))

;; Pushes TRUE onto the BOOLEAN stack if the stack is empty. Otherwise FALSE
(def _empty
  ^{:stacks #{:boolean}}
  (fn [stack state]
    (state/push-to-stack state :boolean (state/empty-stack? state stack))))

;; Pushes TRUE onto the BOOLEAN stack if the top two items are equal.
;; Otherwise FALSE
(def _eq
  ^{:stacks #{:boolean}}
  (fn [stack state]
    (make-instruction state = [stack stack] :boolean)))

;; Empties the given stack
(def _flush
  ^{:stacks #{}}
  (fn [stack state]
    (assoc state stack '())))

;; Pops the given stack
(def _pop
  ^{:stacks #{}}
  (fn [stack state]
    (state/pop-stack state stack)))

;; Rotates the top three items on the stack (i.e. pulls the third item out and
;; pushes it on top). Equivalent to (yank state stack-type 2)
(def _rot
  ^{:stacks #{}}
  (fn [stack state]
    (if (<= 3 (count (get state stack)))
      (let [top-three (state/peek-stack-multiple state stack 3)
            popped-state (state/pop-stack-multiple state stack 3)
            top-three-rot (take 3 (conj top-three (last top-three)))]
        (state/push-to-stack-multiple popped-state stack top-three-rot))
      state)))

;; Inserts the top item deeper into the stack, using the top INTEGER to
;; determine how deep
(def _shove
  ^{:stacks #{:integer}}
  (fn [stack state]
    (if (or (and (= stack :integer)
                 (<= 2 (count (:integer state))))
            (and (not= stack :integer)
                 (not (state/empty-stack? state :integer))
                 (not (state/empty-stack? state stack))))
      (let [index-raw (state/peek-stack state :integer)
            popped-state (state/pop-stack state :integer)
            top-item (state/peek-stack popped-state stack)
            popped-state (state/pop-stack popped-state stack)
            index (max 0 (min index-raw (dec (count (get popped-state stack)))))]
        (update popped-state stack #(utils/not-lazy (concat (take index %)
                                                            (list top-item)
                                                            (drop index %)))))
      state)))

;; Pushes the given stack's depth onto the INTEGER stack
(def _stackdepth
  ^{:stacks #{:integer}}
  (fn [stack state]
    (let [stack-depth (count (get state stack))]
      (state/push-to-stack state :integer stack-depth))))

;; Swaps the top two items on the stack
(def _swap
  ^{:stacks #{}}
  (fn [stack state]
    (if (<= 2 (count (get state stack)))
      (let [top-two (state/peek-stack-multiple state stack 2)
            popped-state (state/pop-stack-multiple state stack 2)]
        (state/push-to-stack-multiple popped-state stack (reverse top-two)))
      state)))

;; Pushes an indexed item from deep in the stack, removing it. The top INTEGER
;; is used to determine how deep to yank from
(def _yank
  ^{:stacks #{:integer}}
  (fn [stack state]
    (if (or (and (= stack :integer)
                 (<= 2 (count (:integer state))))
            (and (not= stack :integer)
                 (not (state/empty-stack? state :integer))
                 (not (state/empty-stack? state stack))))
      (let [index-raw (state/peek-stack state :integer)
            popped-state (state/pop-stack state :integer)
            index (max 0 (min index-raw (dec (count (get popped-state stack)))))
            indexed-item (nth (get popped-state stack) index)]
        (update popped-state stack #(utils/not-lazy
                                      (concat (list indexed-item)
                                              (take index %)
                                              (rest (drop index %))))))
      state)))

;; Pushes a copy of an indexed item from deep in the stack, without removing it.
;; The top INTEGER is used to determine how deep to yankdup from
(def _yankdup
  ^{:stacks #{:integer}}
  (fn [stack state]
    (if (or (and (= stack :integer)
                 (<= 2 (count (:integer state))))
            (and (not= stack :integer)
                 (not (state/empty-stack? state :integer))
                 (not (state/empty-stack? state stack))))
      (let [index-raw (state/peek-stack state :integer)
            popped-state (state/pop-stack state :integer)
            index (max 0 (min index-raw (dec (count (get popped-state stack)))))
            indexed-item (nth (get popped-state stack) index)]
        (state/push-to-stack popped-state stack indexed-item))
      state)))

;; 11 types x 13 functions = 143 instructions
(generate-instructions
  [:boolean :exec :integer :string]
  [_dup _duptimes _dupitems _empty _eq _flush _pop _rot _shove
   _stackdepth _swap _yank _yankdup])

(defn input-error []
  (reset! error-exists true))

;;;;;;;;;
;; Interpreter

;; (defn interpret-one-step
;;   "Takes a Push state and executes the next instruction on the exec stack."
;;   [state]
;;   (let [popped-state (pop-stack state :exec)
;;         first-instruction-raw (first (:exec state))
;;         first-instruction (cond
;;                             (nil? first-instruction-raw) nil
;;                             (keyword? first-instruction-raw) (first-instruction-raw @globals/instruction-table)
;;                             :else first-instruction-raw)]
;;     (println (type first-instruction) first-instruction)
;;     (cond
;;       (empty? (:exec state))
;;       (swap! current-step dec)
;;       ;
;;       (fn? first-instruction)
;;       (reset! push-state (first-instruction popped-state))
;;       ;
;;       (number? first-instruction)
;;       (reset! push-state (push-to-stack popped-state :integer (int first-instruction)))
;;       ;
;;       (integer? first-instruction)
;;       (reset! push-state (push-to-stack popped-state :integer first-instruction))
;;       ;
;;       (string? first-instruction)
;;       (reset! push-state (push-to-stack popped-state :string first-instruction))
;;       ;
;;       (seq? first-instruction)
;;       (reset! push-state (update popped-state :exec #(concat %2 %1) first-instruction))
;;       ;
;;       (or (= first-instruction true) (= first-instruction false))
;;       (reset! push-state (push-to-stack popped-state :boolean first-instruction))
;;       ;
;;       :else
;;       ; (throw (Exception.
;;       (do (reset! error-output (str "Unrecognized Push instruction in program: "
;;                                     first-instruction-raw))
;;           (input-error))))
;;   (swap! current-step inc)
;;   (if (< (count @cache) (int @current-step)) (swap! cache conj @push-state)))

;; (defn nth-state
;;   [state-history index]
;;   (nth (:history state-history) index))

;; (defn interpret-one-step 
;;   [state-history]
;;   (swap! current-step inc)
;;   (reset! push-state 
;;           (nth-state state-history @current-step)))

(defn interpret-one-step []
  (if (= (count @push-state-history) (inc @current-step))
    ()
    (swap! current-step inc)))

;; cut
(defn interpret-push []
  (let [sl (int @step-limit)
        state @push-state]
    (if (or (<= sl (int @current-step)) (empty? (:exec state)) (true? @error-exists))
      ()
      (do (interpret-one-step)
          (reset! anFrame (.requestAnimationFrame js/window interpret-push))))))

;; possibly cut
(defn stop-interpret []
  (.cancelAnimationFrame js/window @anFrame))

;; cut
(def output-stacks (r/atom "Test Output"))

(defn add-final-state
  [state-history]
  (let [final-state (dissoc state-history :history)]
    (conj (:history state-history) final-state)))

;; cut
(defn load-state 
  [push-code]
  (let [push-code
        (cond (and (= (count push-code) 1) (list? (first push-code))) (first push-code)
              :else push-code)]
    (reset! current-step 0)
    (reset! error-exists false)
    (reset! error-output "")
    (let [stacks {:exec    (list push-code)
                  :integer '()
                  :string  '()
                  :boolean '()}]
      (reset! push-state stacks)
      (reset! cache (vec (hash-map @push-state))))))


(defn load-state-history [push-code]
  (let [push-code
        (cond (and (= (count push-code) 1) (list? (first push-code))) (first push-code)
              :else push-code)]
    (reset! current-step 0)
    (reset! error-exists false)
    (reset! error-output "")
    (reset! push-state-history 
            (add-final-state (pinterpreter/interpret-program push-code 
                                    (assoc pstate/empty-state :keep-history true) 
                                    @step-limit)))))

(defn step-back []
  (if (> 1 @current-step)
    ()
    (do
      (reset! error-exists false)
      (reset! error-output "")
      (swap! current-step dec))))

(defn load-button []
  ;; [:span.left-spacing.button-spacing [:input {:type "button" :value "Load Push Code" :on-click #(load-state (read-string (str "(" @push-code ")))))))")))}]])
  [:span.left-spacing.button-spacing [:input {:type "button" :value "Load Push Code" :on-click #(load-state-history (read-string @push-code))}]])


(defn interpret-one-step-button []
  ;; [:span.button-spacing [:input {:type "button" :value  "Interpret One Step" :on-click #(interpret-one-step @push-state-history)}]])
  [:span.button-spacing [:input {:type "button" :value  "Interpret One Step" :on-click #(interpret-one-step)}]])

(defn interpret-button []
  [:span.button-spacing [:input {:type "button" :value "Interpret" :on-click #(interpret-push)}]])

(defn step-back-button []
  [:span.button-spacing [:input {:type "button" :value "Previous Step" :on-click #(step-back)}]])

(defn stop-button []
  [:span [:input {:type "button" :value "Pause" :on-click #(stop-interpret)}]])

(defn int-text []
  [:div [:textarea.textbox {:value @push-code :on-change #(reset! push-code (-> % .-target .-value))}]])

(defn divvy-stack [stack]
  (for [items stack]
    (str items " ")))

(defn drop-outers [s]
  "drops parantheses from the string output"
  (drop 1 (drop-last s)))

(defn esp [stacks]
  [:div [:p "Exec Stack: " (drop-outers (str (:exec stacks)))]])

(defn isp [stacks]
  [:div [:p "Integer Stack: " (drop-outers (str (:integer stacks)))]])

(defn ssp [stacks]
  [:div [:p "String Stack: " (drop-outers (str (:string stacks)))]])

(defn bsp [stacks]
  [:div [:p "Boolean Stack: " (drop-outers (str (:boolean stacks)))]])

(defn insp [stacks]
  [:div [:p "Input Stack: " (drop-outers (str (:input stacks)))]])


(defn output-component []
  (let [state
        (nth @push-state-history @current-step)]
    [:div.outputbox
     [:div (esp state)]
     [:div (isp state)]
     [:div (ssp state)]
     [:div (bsp state)]]))


;; -------------------------
;; Views

(defn home-page []
  [:div.app [:div.main [:div.title "Push Interpreter"]
             [int-text]
             [:div.bottom-spacing "Current Step: " (if (true? @error-exists) [:span.error "Error"] @current-step) ". Step-limit: "
              [:input {:type      "number" :value @step-limit :max 100000
                       :on-change #(reset! step-limit (-> % .-target .-value))}]]
             [load-button]
             [interpret-one-step-button]
             [step-back-button]
             [interpret-button]
             [stop-button]
             [:p.error (str @error-output)]
             [output-component]]
   [:div.instruction-list [:p "Instruction List:"]
    [:div.instructions (str (keys @globals/instruction-table))]]]

  )

;; -------------------------
;; Initialize app

(defn mount-root []
  (d/render [home-page] (.getElementById js/document "app")))

(defn init! []
  (mount-root))

(def hello-world "hello world")