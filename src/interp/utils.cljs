(ns interp.utils)

(defn get-vector-literal-type
  "Returns the literal stack corresponding to some vector stack."
  [vector-stack]
  (keyword (clojure.string/replace (str vector-stack) ":vector_" "")))

(defn indexof
  "Returns the first index of an element in a collection. If the element is not
  present in the collection, returns -1."
  [element coll]
  (or (first (keep-indexed #(if (= element %2) %1) coll)) -1))

(defn not-lazy
  "Returns lst if it is not a seq, or a non-lazy version of lst if it is."
  [lst]
  (if (seq? lst)
    (apply list lst)
    lst))

(defn ensure-list
  "Returns a non-lazy list if passed a seq argument. Othwrwise, returns a list
  containing the argument."
  [thing]
  (if (seq? thing)
    (not-lazy thing)
    (list thing)))

(defn random-instruction
  "Returns a random instruction from a supplied pool of instructions, evaluating
  ERC-producing functions to a constant literal."
  [instructions]
  (let [instruction (rand-nth instructions)]
    (if (fn? instruction)
      (instruction)
      instruction)))

(defn balanced? 
  "Code found on:
   https://commandercoriander.net/blog/2015/01/17/testing-for-balanced-brackets-in-clojure/"
  [s]
  (->> s
        ;; remove non-bracket characters
       (filter #{\[ \] \( \) \{ \}})

        ;; reduce down to an empty or non-empty vector
       (reduce
        (fn [stack item]
          (cond
            (#{\( \{ \[} item) (conj stack item)

            (and (#{\( \{ \[} (last stack))
                 (= ({\) \(, \} \{, \] \[} item) (last stack)))
            (pop stack)

            :else (conj stack item)))
        [])

        ;; return whether we have any unbalanced brackets
       empty?))