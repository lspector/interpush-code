(ns interp.core
  (:require-macros [interp.macros :refer [generate-functions
                                          def-instruction]])
  (:require
    [reagent.core :as r]
    [reagent.dom :as d]
    [cljs.tools.reader :refer [read-string]]
    [cljs.js :as cljs-js]
    [interp.globals :as globals]))

(def step-limit (r/atom 100))

(def current-step (r/atom 0))

(def push-code (r/atom "(:exec_dup 3 4 :integer_add :integer_gt)"))

(def anFrame (r/atom {}))

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

; (defn is-letter
;   "Returns true if the given character is a letter, A-Z or a-z."
;   [c]
;   (<= (int \A) (int c) (int \z)))

; (defn is-digit
;   "Returns true if the given character is a digit, 0-9."
;   [c]
;   (<= (int \0) (int c) (int \9)))

; (defn is-whitespace
;   "Returns true if the given character is whitespace (newline, space, tab)."
;   [c]
;   (contains? #{(int \newline) (int \tab) (int \space)} (int c)))

;; =============================================================================
;; PushGP Instructions
;;
;; Instructions are represented as keywords, and stored in an atom.
;;
;; Instructions must all be either functions that take one Push state and
;; return another, or constant literals.
;;
;; TMH: ERCs?
;; =============================================================================

;; Set of original propel instructions

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

;; Record-based states for performance

;; Empty push state - each stack type is nil
;(defonce empty-state (map->State {}))

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
;; INPUT and OUTPUT Instructions
;; =============================================================================

;; Pushes the input labeled :in1 on the inputs map onto the :exec stack
(def-instruction
  :in1
  (fn [state]
    (push-to-stack state :exec (:in1 (:input state)))))

;; =============================================================================
;; FLOAT and INTEGER Instructions (polymorphic)
;; =============================================================================

;; Pushes TRUE onto the BOOLEAN stack if the second item is greater than the top
;; item, and FALSE otherwise
(defn- _gt
  [stack state]
  (make-instruction state > [stack stack] :boolean))

;; Pushes TRUE onto the BOOLEAN stack if the second item is greater than or
;; equal to the top item, and FALSE otherwise
(defn- _gte
  [stack state]
  (make-instruction state >= [stack stack] :boolean))

;; Pushes TRUE onto the BOOLEAN stack if the second item is less than the top
;; item, and FALSE otherwise
(defn- _lt
  [stack state]
  (make-instruction state < [stack stack] :boolean))

;; Pushes TRUE onto the BOOLEAN stack if the second item is less than or equal
;; to the top item, and FALSE otherwise
(defn- _lte
  [stack state]
  (make-instruction state <= [stack stack] :boolean))

;; Pushes the sum of the top two items onto the same stack
(defn- _add
  [stack state]
  (make-instruction state + [stack stack] stack))

;; Pushes the difference of the top two items (i.e. the second item minus the
;; top item) onto the same stack
(defn- _subtract
  [stack state]
  (make-instruction state - [stack stack] stack))

;; Pushes the product of the top two items onto the same stack
(defn- _mult
  [stack state]
  (make-instruction state * [stack stack] stack))

;; Pushes the quotient of the top two items (i.e. the second item divided by the
;; top item) onto the same stack. If the top item is zero, pushes 1
(defn- _quot
  [stack state]
  (make-instruction state #(if (zero? %2) 1 (quot %1 %2)) [stack stack] stack))

;; Pushes the second item modulo the top item onto the same stack. If the top
;; item is zero, pushes 1. The modulus is computed as the remainder of the
;; quotient, where the quotient has first been truncated towards negative
;; infinity.
(defn- _mod
  [stack state]
  (make-instruction state #(if (zero? %2) 1 (mod %1 %2)) [stack stack] stack))

;; Pushes the maximum of the top two items
(defn- _max
  [stack state]
  (make-instruction state max [stack stack] stack))

;; Pushes the minimum of the top two items
(defn- _min
  [stack state]
  (make-instruction state min [stack stack] stack))

;; Pushes 1 / 1.0 if the top BOOLEAN is TRUE, or 0 / 0.0 if FALSE
(defn- _fromboolean
  [stack state]
  (make-instruction state
                    #((if (= stack :integer) int float) (if % 1 0))
                    [:boolean]
                    stack))

;; Pushes the ASCII value of the top CHAR
(defn- _fromchar
  [stack state]
  (make-instruction state (if (= stack :integer) int float) [:char] stack))

;; Pushes the value of the top STRING, if it can be parsed as a number.
;; Otherwise, acts as a NOOP
(defn- _fromstring
  [stack state]
  (make-instruction state
                    #(try ((if (= stack :integer) int float) (js/Number %))
                          ;(catch Exception e))
                          (catch js/Error e))
                    [:string]
                    stack))

;; Pushes the increment (i.e. +1) of the top item of the stack
(defn- _inc
  [stack state]
  (make-instruction state inc [stack] stack))

;; Pushes the decrement (i.e. -1) of the top item of the stack
(defn- _dec
  [stack state]
  (make-instruction state dec [stack] stack))

;; 2 types x 16 functions = 32 instructions
(generate-functions
  [:float :integer]
  [_gt _gte _lt _lte _add _subtract _mult _quot _mod _max _min _inc _dec
   _fromboolean _fromchar _fromstring])

;; =============================================================================
;; FLOAT Instructions only
;; =============================================================================

;; Pushes the cosine of the top FLOAT
(def-instruction
  :float_cos
  (fn [state]
    (make-instruction state cos [:float] :float)))

;; Pushes the sine of the top FLOAT
(def-instruction
  :float_sin
  (fn [state]
    (make-instruction state sin [:float] :float)))

;; Pushes the tangent of the top FLOAT
(def-instruction
  :float_tan
  (fn [state]
    (make-instruction state tan [:float] :float)))

;; Pushes the floating point version of the top INTEGER
(def-instruction
  :float_frominteger
  (fn [state]
    (make-instruction state float [:integer] :float)))

;; =============================================================================
;; INTEGER Instructions only
;; =============================================================================

;; Pushes the result of truncating the top FLOAT towards negative infinity
(def-instruction
  :integer_fromfloat
  (fn [state]
    (make-instruction state int [:float] :integer)))

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
  (fn [state]
    (make-instruction state #(and %1 %2) [:boolean :boolean] :boolean)))

;; Pushes the logical OR of the top two BOOLEANs
(def-instruction
  :boolean_or
  (fn [state]
    (make-instruction state #(or %1 %2) [:boolean :boolean] :boolean)))

;; Pushes the logical NOT of the top BOOLEAN
(def-instruction
  :boolean_not
  (fn [state]
    (make-instruction state not [:boolean] :boolean)))

;; Pushes the logical XOR of the top two BOOLEAN
(def-instruction
  :boolean_xor
  (fn [state]
    (make-instruction state #(or (and %1 (not %2))
                                 (and (not %1) %2))
                      [:boolean :boolean]
                      :boolean)))

;; Pushes the logical AND of the top two BOOLEANs, after applying NOT to the
;; first one
(def-instruction
  :boolean_invert_first_then_and
  (fn [state]
    (make-instruction state #(and %1 (not %2)) [:boolean :boolean] :boolean)))

;; Pushes the logical AND of the top two BOOLEANs, after applying NOT to the
;; second one
(def-instruction
  :boolean_invert_second_then_and
  (fn [state]
    (make-instruction state #(and (not %1) %2) [:boolean :boolean] :boolean)))

;; Pushes FALSE if the top FLOAT is 0.0, and TRUE otherwise
(def-instruction
  :boolean_fromfloat
  (fn [state]
    (make-instruction state #(not (zero? %)) [:float] :boolean)))

;; Pushes FALSE if the top INTEGER is 0, and TRUE otherwise
(def-instruction
  :boolean_frominteger
  (fn [state]
    (make-instruction state #(not (zero? %)) [:integer] :boolean)))

;; =============================================================================
;; CHAR Instructions
;; =============================================================================

; ;; Pushes TRUE onto the BOOLEAN stack if the popped character is a letter
; (def-instruction
;   :char_isletter
;   (fn [state]
;     (make-instruction state is-letter [:char] :boolean)))

; ;; Pushes TRUE onto the BOOLEAN stack if the popped character is a digit
; (def-instruction
;   :char_isdigit
;   (fn [state]
;     (make-instruction state is-digit [:char] :boolean)))

; ;; Pushes TRUE onto the BOOLEAN stack if the popped character is whitespace
; ;; (newline, space, or tab)
; (def-instruction
;   :char_iswhitespace
;   (fn [state]
;     (make-instruction state is-whitespace [:char] :boolean)))

;; Pops the FLOAT stack, converts the top item to a whole number, and pushes
;; its corresponding ASCII value onto the CHAR stack. Whole numbers larger than
;; 128 will be reduced modulo 128. For instance, 248.45 will result in x being
;; pushed.
(def-instruction
  :char_fromfloat
  (fn [state]
    (make-instruction state #(char (mod (long %) 128)) [:float] :char)))

;; Pops the INTEGER stack and pushes the top element's corresponding ASCII
;; value onto the CHAR stack. Integers larger than 128 will be reduced modulo
;; 128. For instance, 248 will result in x being pushed
(def-instruction
  :char_frominteger
  (fn [state]
    (make-instruction state #(char (mod % 128)) [:integer] :char)))

;; Pops the STRING stack and pushes the top element's constituent characters
;; onto the CHAR stack, in order. For instance, "hello" will result in the
;; top of the CHAR stack being o l l e h
(def-instruction
  :char_allfromstring
  (fn [state]
    (make-instruction state #(map char %) [:string] :char)))

;; =============================================================================
;; STRING Instructions
;; =============================================================================

(def-instruction
  :string_=
  (fn [state]
    (make-instruction state = [:string :string] :boolean)))

(def-instruction
  :string_concat
  (fn [state]
    (make-instruction state #(apply str (concat %1 %2)) [:string :string] :string)))

(def-instruction
  :string_drop
  (fn [state]
    (make-instruction state #(apply str (drop %1 %2)) [:integer :string] :string)))

(def-instruction
  :string_includes?
  (fn [state]
    (make-instruction state clojure.string/includes? [:string :string] :boolean)))

(def-instruction
  :string_length
  (fn [state]
    (make-instruction state count [:string] :integer)))

(def-instruction
  :string_reverse
  (fn [state]
    (make-instruction state #(apply str (reverse %)) [:string] :string)))

(def-instruction
  :string_take
  (fn [state]
    (make-instruction state #(apply str (take %1 %2)) [:integer :string] :string)))

;; =============================================================================
;; Polymorphic Instructions
;;
;; (for all types, with the exception of non-data  stacks like auxiliary, tag,
;; input, and output)
;; =============================================================================

;; Pushes TRUE onto the BOOLEAN stack if the top two items are equal.
;; Otherwise FALSE
(defn- _eq
  [stack state]
  (make-instruction state = [stack stack] :boolean))

;; Duplicates the top item of the stack. Does not pop its argument (since that
;; would negate the effect of the duplication)
(defn- _dup
  [stack state]
  (let [top-item (peek-stack state stack)]
    (if (empty-stack? state stack)
      state
      (push-to-stack state stack top-item))))

;; Duplicates n copies of the top item (i.e leaves n copies there). Does not pop
;; its argument (since that would negate the effect of the duplication). The
;; number n is determined by the top INTEGER. For n = 0, equivalent to POP.
;; For n = 1, equivalent to NOOP. For n = 2, equivalent to DUP. Negative values
;; of n are treated as 0.
(defn- _duptimes
  [stack state]
  (if (or (and (= stack :integer)
               (>= (count (:integer state)) 2))
          (and (not= stack :integer)
               (not (empty-stack? state :integer))
               (not (empty-stack? state stack))))
    (let [n (peek-stack state :integer)
          item-to-duplicate (peek-stack state stack)]
      nil)
    state))

(defn- _dupitems
  [stack state]
  ())

;; Pushes TRUE onto the BOOLEAN stack if the stack is empty. Otherwise FALSE
(defn- _empty
  [stack state]
  (push-to-stack state :boolean (empty-stack? state stack)))

;; Empties the given stack
(defn- _flush
  [stack state]
  ())

;; Pops the given stack
(defn- _pop
  [stack state]
  (pop-stack state stack))

;; Rotates the top three items on the stack (i.e. pulls the third item out and
;; pushes it on top). Equivalent to (yank state stack-type 2)
(defn- _rot
  [stack state]
  ())

;; Inserts the top item deeper into the stack, using the top INTEGER to
;; determine how deep
(defn- _shove
  [stack state]
  ())

;; Pushes the given stack's depth onto the INTEGER stack
(defn- _stackdepth
  [stack state]
  ())

;; Swaps the top two items on the stack
(defn- _swap
  [stack state]
  ())

;; Removes an indexed item from deep in the stack. The top INTEGER is used to
;; determine how deep to yank from
(defn- _yank
  [stack state]
  ())

;; Pushes a copy of an indexed item deep in the stack, without removing it.
;; The top INTEGER is used to determine how deep to yankdup from
(defn- _yankdup
  [stack state]
  ())

;; 5 types x 1 function = 5 instructions
(generate-functions [:boolean :char :float :integer :string] [_eq])

;; 8 types x 12 function = 96 instructions
(generate-functions
  [:boolean :char :code :exec :float :integer :string]
  [_dup _duptimes _dupitems _empty _flush _pop _rot _shove _stackdepth
   _swap _yank _yankdup])

(def-instruction
  :exec_dup
  (fn [state]
    (if (empty-stack? state :exec)
      state
      (push-to-stack state :exec (list (first (:exec state)))))))


;;;;;;;;;
;; Interpreter

(defn interpret-one-step
  "Takes a Push state and executes the next instruction on the exec stack."
  [state]
  (let [popped-state (pop-stack state :exec)
        first-instruction-raw (first (:exec state))
        first-instruction (if (keyword? first-instruction-raw)
                            (first-instruction-raw @globals/instruction-table)
                            first-instruction-raw)]
    (println (type first-instruction) first-instruction)
    (cond
      (fn? first-instruction)
      (reset! push-state (first-instruction popped-state))
      ;
      (number? first-instruction)
      (reset! push-state (push-to-stack popped-state :integer (int first-instruction)))
      ;
      (integer? first-instruction)
      (reset! push-state (push-to-stack popped-state :integer first-instruction))
      ;
      (string? first-instruction)
      (reset! push-state (push-to-stack popped-state :string first-instruction))
      ;
      (seq? first-instruction)
      (reset! push-state (update popped-state :exec #(concat %2 %1) first-instruction))
      ;
      (or (= first-instruction true) (= first-instruction false))
      (reset! push-state (push-to-stack popped-state :boolean first-instruction))
      ;
      :else
      ; (throw (Exception.
      (throw (js/Error. (str "Unrecognized Push instruction in program: "
                             (name first-instruction-raw))))))
  (swap! current-step inc))



(defn interpret-push []
  (let [sl (int @step-limit)
        state @push-state]
    (if (or (<= sl (int @current-step)) (empty? (:exec state)))
      ()
      (do (interpret-one-step @push-state)
          (reset! anFrame (.requestAnimationFrame js/window interpret-push))))))



(def output-stacks (r/atom "Test Output"))



(defn load-state [push-code]
  (reset! current-step 0)
  (let [stacks {:exec    (list push-code)
                :integer '()
                :string  '()
                :boolean '()}]
    (reset! push-state stacks)))

(defn load-button []
  [:div [:input {:type "button" :value "Load Push Code" :on-click #(load-state (read-string @push-code))}]]
  )

(defn interpret-one-step-button []
  [:div [:input {:type "button" :value "Interpret One Step" :on-click #(interpret-one-step @push-state)}]])

(defn interpret-button []
  [:div [:input {:type "button" :value "Interpret" :on-click #(interpret-push)}]])

(defn int-text []
  [:div [:input.textbox {:type "text" :value @push-code :on-change #(reset! push-code (-> % .-target .-value))}]])

(defn divvy-stack [stack]
  (for [items stack]
    (str items " ")))

(defn esp [stacks]
  [:div [:p "Exec Stack: " (divvy-stack (:exec stacks))]])

(defn isp [stacks]
  [:div [:p "Integer Stack: " (divvy-stack (:integer stacks))]])

(defn ssp [stacks]
  [:div [:p "String Stack: " (divvy-stack (:string stacks))]])

(defn bsp [stacks]
  [:div [:p "Boolean Stack: " (divvy-stack (:boolean stacks))]])

(defn insp [stacks]
  [:div [:p "Input Stack: " (divvy-stack (:input stacks))]])


(defn output-component []
  [:div.outputbox
   [:div (esp @push-state)]
   [:div (isp @push-state)]
   [:div (ssp @push-state)]
   [:div (bsp @push-state)]])


;; -------------------------
;; Views

(defn home-page []
  [:div.grid-container [:div.main "Push Interpreter"
                        [int-text]
                        [:div (str "Current Step: " @current-step ". Step-limit: ")
                         [:input {:type "number" :value @step-limit
                                  :on-change #(reset! step-limit (-> % .-target .-value))}]]
                        [load-button]
                        [interpret-one-step-button]
                        [interpret-button]
                        [output-component]]
   [:div.instruction-list [:p "Instruction List:"]
    [:div.instructions " :integer_add | :integer_mult | :integer_subtract | :integer_quot | :integer_gt | :integer_gte
    | :integer_lt | :integer_lte |  :integer_mod | :integer_max | :integer_min | :integer_fromboolean | :integer_fromstring
     | :integer_inc | :integer_dec | :boolean_and | :boolean_or | :boolean_not | :boolean_xor |
      :boolean_invert_first_then_and | :boolean_frominteger | :string_= | :string_concat | :string_drop | :string_includes? |
      :string_length | :string_reverse | :string_take | :[any]_dup | :[any]_duptimes | :[any]_dupitems | :[any]_empty |
      :[any]_flush | :[any]_pop | :[any]_rot | :[any]_shove | :[any]_anydepth | :[any]_swap | :[any]_yank | :[any]_yankdup "]]]
  )

;; -------------------------
;; Initialize app

(defn mount-root []
  (d/render [home-page] (.getElementById js/document "app")))

(defn init! []
  (mount-root))
