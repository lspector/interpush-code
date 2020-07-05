(ns interp.macros
  (:require [interp.globals :as globals]))

(defmacro def-instruction
  [instruction definition]
  `(swap! globals/instruction-table assoc '~instruction ~definition))

(defmacro generate-functions [stacks functions]
  `(do ~@(for [stack stacks
               function functions
               :let [instruction-name (keyword (str (name stack) function))]]
           `(def-instruction ~instruction-name (partial ~function ~stack)))))

(defmacro generate-instructions [stacks functions]
  `(do ~@(for [stack stacks
               func functions
               :let [instruction-name (keyword (str (name stack) func))
                     metadata `(update-in (meta ~func) [:stacks] #(conj % ~stack))
                     new-func `(with-meta (partial ~func ~stack) ~metadata)]]
           `(def-instruction ~instruction-name ~new-func))))
