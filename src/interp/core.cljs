(ns interp.core
  (:require
   [reagent.core :as r]
   [reagent.dom :as d]
   [cljs.tools.reader :refer [read-string]]
   [clojure.string :refer [split]]
   [interp.utils :as utils]
   [interp.instructions]
   [propeller.push.interpreter :as pinterpreter]
   [propeller.push.state :as pstate]
   [propeller.push.core :as pcore]
   [propeller.push.utils.helpers :as phelpers]
   [clojure.set]
   [propeller.problems.simple-regression :as regression]
   [propeller.gp :as gp]
   [propeller.genome :as genome]
   [propeller.variation :as variation]))

(def step-limit (r/atom 100))

(def current-step (r/atom 0))

(def error-exists (r/atom false))

(def error-output (r/atom ""))

(def push-code (r/atom "(:exec_dup (1 2 :integer_add) \"hello\" (:integer_yank 5 6) :integer_gte :exec_if (5 6) false :integer_add)"))

(def current-gen-info (r/atom ""))

(def push-state-history (r/atom []))

(def population (r/atom ()))

(def generation (r/atom 0))

(defn input-error []
  (reset! error-exists true))

(defn surrounding-parentheses?
  [push-code]
(and 
 (= (first push-code) "(")
 (= (last push-code) ")")))

(defn last-instruction?
  "Written specifically for the unrecognized instruction error
   thrown by pinterpret/interpret-program, where the unrecognized instruction
   is the last word in the error string."
  [err-msg]
  (= ":" (first (last (split err-msg #" ")))))

;; -------------------------
;; Interpreter

(defn interpret-one-step []
  (if (or (= (count @push-state-history) (inc @current-step)) 
          (zero? (count @push-state-history)))
    ()
    (swap! current-step inc)))

(defn interpret-push []
  (if (zero? (count @push-state-history))
    ()
    (reset! current-step
          ;; note that the :step keyword in each state map of @push-state-history = @current-step + 1
          (dec (:step (last @push-state-history))))))

(defn add-final-state
  "Returns a vector of push-states at every step of a program's interpretation
   in order, including the final state"
  [state-history]
  (let [final-state (dissoc state-history :history)]
    (conj (:history state-history) final-state)))

(defn load-state-history 
  [program]
  (let [program
        (cond (and (= (count program) 1) (list? (first program))) (first program)
              :else program)]
    (try
      (reset! push-state-history
              (add-final-state (pinterpreter/interpret-program program
                                                               (assoc pstate/empty-state :keep-history true)
                                                               @step-limit)))
      (reset! current-step 0)
      (reset! error-exists false)
      (reset! error-output "")
      (catch js/Error. e
        ;; unrecognized instrucions
        (if (last-instruction? (str e))
          (reset! error-output (str e))
          (reset! error-output (str e " (all instructions must begin with the : character).")))
        (input-error)))))

(defn load-code
  [push-code]
  (cond 
    (not (utils/balanced? push-code)) (do (reset! error-output (str "Check for unmatched parentheses!"))
                                        (input-error))
    (not (surrounding-parentheses? push-code)) (do (reset! error-output (str "Missing surrounding parentheses!"))
                                     (input-error))
    :else (load-state-history (read-string push-code))))

(defn step-back []
  (if (> 1 @current-step)
    ()
    (do
      (reset! error-exists false)
      (reset! error-output "")
      (swap! current-step dec))))


;; -------------------------
;; GP

(def regression-argmap
  {:instructions            regression/instructions
   :error-function          regression/error-function
   :training-data           (:train regression/train-and-test-data)
   :testing-data            (:test regression/train-and-test-data)
   :max-generations         50
   :population-size         500
   :max-initial-plushy-size 100
   :step-limit              200
   :parent-selection        :lexicase
   :tournament-size         5
   :umad-rate               0.1
   :variation               {:umad 0.5 :crossover 0.5}
   :elitism                 false})

(defn report
  [pop generation argmap]
  (let [best (first pop)
        gen-info {:generation            generation
                  :best-plushy           (:plushy best)
                  :best-program          (genome/plushy->push (:plushy best) argmap)
                  :best-total-error      (:total-error best)
                  :best-errors           (:errors best)
                  :best-behaviors        (:behaviors best)
                  }]
    (reset! current-gen-info gen-info)))

(defn generate-pop
  [population-size instructions max-initial-plushy-size]
  (repeatedly
   population-size
   #(hash-map :plushy (genome/make-random-plushy
                       instructions
                       max-initial-plushy-size))))

(defn next-gen-pop
  [population-size evaluated-pop argmap]
  (repeatedly population-size
              #(variation/new-individual evaluated-pop argmap)))


(defn regression-gp
  [{:keys [population-size max-generations error-function instructions
           max-initial-plushy-size]
    :as   argmap}]
  ;;
  (when (zero? @generation)
    (reset! population (generate-pop population-size instructions max-initial-plushy-size)))
  (let [evaluated-pop (sort-by :total-error
                               (map
                                (partial error-function argmap (:training-data argmap))
                                @population))
        best-individual (first evaluated-pop)]
    (cond
        ;; Success on training cases is verified on testing cases
      (zero? (:total-error best-individual))
      (do (prn {:success-generation @generation})
          (prn {:total-test-error
                (:total-error (error-function argmap (:testing-data argmap) best-individual))}))
        ;;
      (>= @generation max-generations)
      nil
        ;;
      :else
      (do
        (swap! generation inc)
        (reset! population (next-gen-pop population-size evaluated-pop argmap))))
    (if (:custom-report argmap)
      ((:custom-report argmap) evaluated-pop @generation argmap)
      (report evaluated-pop @generation argmap))))

;; -------------------------
;; Buttons and Components

(defn load-button []
  [:span.left-spacing.button-spacing [:input {:type "button" :value "Load Push Code" :on-click #(load-code @push-code)}]])

(defn interpret-one-step-button []
  [:span.button-spacing [:input {:type "button" :value  "Interpret One Step" :on-click #(interpret-one-step)}]])

(defn interpret-button []
  [:span.button-spacing [:input {:type "button" :value "Interpret" :on-click #(interpret-push)}]])

(defn step-back-button []
  [:span.button-spacing [:input {:type "button" :value "Previous Step" :on-click #(step-back)}]])

(defn int-text []
  [:div [:textarea.textbox {:value @push-code :on-change #(reset! push-code (-> % .-target .-value))}]])

(defn next-gen-button []
  [:span.button-spacing [:input {:type "button" :value "Next Generation" :on-click #(regression-gp regression-argmap)}]])

(defn divvy-stack [stack]
  (for [items stack]
    (str items " ")))

(defn drop-outers 
  "drops parantheses from the string output"
  [s]
  (drop 1 (drop-last s)))

;; -------------------------
;; Push Output

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

;; -------------------------
;; GP Output

(defn gen-out [gen-info]
  [:div [:p "Generation:  " (str (:generation gen-info))]])

(defn program-out [gen-info]
  [:div [:p "Best push program:  " (str (:best-program gen-info))]])

(defn total-error-out [gen-info]
  [:div [:p "Best total error:  " (str (:best-total-error gen-info))]])

(defn errors-out [gen-info]
  [:div [:p "Best errors:  "(drop-outers (str (:best-errors gen-info)))]])


(defn push-output-component []
  (let [state
        (if (empty? @push-state-history)
          nil
          (nth @push-state-history @current-step))]
    [:div.outputbox
     [:div (esp state)]
     [:div (isp state)]
     [:div (ssp state)]
     [:div (bsp state)]]))

(defn gp-output-component []
  [:div.outputbox
   [:div (gen-out @current-gen-info)]
   [:div (program-out @current-gen-info)]
   [:div (total-error-out @current-gen-info)]
   [:div (errors-out @current-gen-info)]])

;; -------------------------
;; Views

(defn home-page []
  [:div.app [:div.main
             [:div.title "Interpush"]
             [:div.h1 "Push Interpreter"]
             [int-text]
             [:div.bottom-spacing "Current Step: " (if (true? @error-exists) [:span.error "Error"] @current-step) ". Step-limit: "
              [:input {:type      "number" :value @step-limit :max 100000
                       :on-change #(reset! step-limit (-> % .-target .-value))}]]
             [load-button]
             [interpret-one-step-button]
             [step-back-button]
             [interpret-button]
             [:p.error (str @error-output)]
             [push-output-component]
             [:div.h1 "Genetic Programming: Simple Regression"]
             [next-gen-button]
             [gp-output-component]]
   [:div.instruction-list [:p "Push Instruction List:"]
    [:div.instructions (str (sort (phelpers/get-stack-instructions #{:exec :integer :string :boolean})))]]])

;; -------------------------
;; Initialize app

(defn mount-root []
  (d/render [home-page] (.getElementById js/document "app")))

(defn init! []
  (mount-root))