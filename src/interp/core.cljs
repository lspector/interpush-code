(ns interp.core
  (:require
   [reagent.core :as r]
   [reagent.dom :as d]
   [cljs.tools.reader :refer [read-string]]
   [interp.utils :as utils]
   [interp.instructions]
   [propeller.push.interpreter :as pinterpreter]
   [propeller.push.state :as pstate]
   [propeller.push.core :as pcore]
   [propeller.push.utils.helpers :as phelpers]
   [clojure.set]))

(def step-limit (r/atom 100))

(def current-step (r/atom 0))

(def error-exists (r/atom false))

(def error-output (r/atom ""))

;; (def test-push-code (r/atom "(:exec_dupitems 1 :boolean_shove  2 :boolean_xor \"three\"
;; :integer_gte \"four\" :integer_mod \"five\" :string_concat true false
;; :boolean_rot 1 :integer_lte 3 :integer_add \"seven\" :integer_shove \"hello\"
;; :string_drop true :integer_rot :boolean_dupitems :string_dupitems :integer_max :string_eq
;; :integer_stackdepth :boolean_dup true true :string_take :exec_eq :string_swap :integer_yank \"hello\"
;; :integer_fromchar :string_stackdepth :integer_min \"1\" :exec_swap \"hello\" :string_pop :integer_quot :exec_if
;; :boolean_invert_first_then_and :boolean_eq :integer_fromboolean :boolean_frominteger :integer_gt :boolean_not
;; :integer_duptimes :exec_pop :string_yankdup :boolean_duptimes :string_yank :integer_lt :integer_subtract :string_rot
;; :integer_swap :integer_dup :string_includes? :string_duptimes :exec_yank :integer_pop :integer_empty :integer_dec
;; :exec_stackdepth :boolean_and :string_length :boolean_invert_second_then_and :string_dup :boolean_yankdup :integer_inc
;; :boolean_stackdepth :boolean_pop :integer_mult :exec_yankdup :integer_yankdup :boolean_swap :exec_shove :exec_duptimes
;; :boolean_yank :integer_eq :boolean_or 12 :integer_dupitems :string_shove :integer_fromstring :string_= :exec_rot :string_reverse
;; :exec_dup )"))

(def push-code (r/atom "(:exec_dup (1 2 :integer_add) \"hello\" (:integer_yank 5 6) :integer_gte :exec_if (5 6) false :integer_add)"))

(def push-state-history (r/atom []))

(defn input-error []
  (reset! error-exists true))

;;;;;;;;;
;; Interpreter

(defn valid-program?
  [push-code]
  (clojure.set/subset? 
   (set (filter keyword? (flatten push-code)))
   (set (phelpers/get-stack-instructions #{:exec :integer :string :boolean}))))

(defn invalid-instruction
  [push-code]
  (vec (clojure.set/difference
   (set (filter keyword? (flatten push-code)))
   (set (phelpers/get-stack-instructions #{:exec :integer :string :boolean})))))

(defn interpret-one-step []
  (if (or (= (count @push-state-history) (inc @current-step)) 
          (zero? (count @push-state-history)))
    ()
    (swap! current-step inc)))

(defn interpret-push []
  (if (zero? (count @push-state-history))
    ()
    (reset! current-step
          (dec (:step (last @push-state-history))))))

(defn add-final-state
  [state-history]
  (let [final-state (dissoc state-history :history)]
    (conj (:history state-history) final-state)))

(defn load-state-history 
  [push-code]
  (let [push-code
        (cond (and (= (count push-code) 1) (list? (first push-code))) (first push-code)
              :else push-code)]
    (try 
      (if (valid-program? push-code)
      (do
        (reset! push-state-history
                (add-final-state (pinterpreter/interpret-program push-code
                                                                 (assoc pstate/empty-state :keep-history true)
                                                                 @step-limit)))
        (reset! current-step 0)
        (reset! error-exists false)
        (reset! error-output ""))
      (do (reset! error-output (str "Unrecognized Push instruction in program: " (invalid-instruction push-code)))
          (input-error)))
      (catch js/Error. e
        (reset! error-output (str e))
        (input-error)))))

(defn step-back []
  (if (> 1 @current-step)
    ()
    (do
      (reset! error-exists false)
      (reset! error-output "")
      (swap! current-step dec))))

(defn load-button []
  [:span.left-spacing.button-spacing [:input {:type "button" :value "Load Push Code" :on-click #(load-state-history (read-string @push-code))}]])

(defn interpret-one-step-button []
  [:span.button-spacing [:input {:type "button" :value  "Interpret One Step" :on-click #(interpret-one-step)}]])

(defn interpret-button []
  [:span.button-spacing [:input {:type "button" :value "Interpret" :on-click #(interpret-push)}]])

(defn step-back-button []
  [:span.button-spacing [:input {:type "button" :value "Previous Step" :on-click #(step-back)}]])

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
        (if (empty? @push-state-history)
          nil
          (nth @push-state-history @current-step))]
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
             [:p.error (str @error-output)]
             [output-component]]
   [:div.instruction-list [:p "Instruction List:"]
    [:div.instructions (str (phelpers/get-stack-instructions #{:exec :integer :string :boolean}))]]]

  )

;; -------------------------
;; Initialize app

(defn mount-root []
  (d/render [home-page] (.getElementById js/document "app")))

(defn init! []
  (mount-root))

(def hello-world "hello world")