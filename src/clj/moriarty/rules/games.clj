(ns moriarty.rules.games
  (:require [bouncer.core :as b]
            [bouncer.validators :as v]
            [moriarty.models.games :as games]
            [moriarty.models.crud :as crud]))
(def good {:specials #{:merlin :percival :good-lancelot :twin1 :twin2}
           :counts   [3 4 4 5 6 6]})

(def bad {:specials #{:mordred :morgana :oberon :cop-lancelot}
          :counts   [2 2 3 3 3 4]})

(defn- add-doubles [single one two]
  (fn [roles]
    (if (roles single)
      (disj (conj roles one two) single)
      roles)))

(def add-lancelot (add-doubles :lancelot :good-lancelot :cop-lancelot))
(def add-twins (add-doubles :twins :twin1 :twin2))


(defn play-game-rules [game]
  {:people [[v/min-count 5]
            [v/max-count 10]]
   :status [[#{:waiting} :message "Game already started"]]})

(defn- create-validator [rules-fn]
  (fn [id key]
    (let [game (crud/get games/games id)
          rules (rules-fn game)
          valid (b/valid? game rules)
          errors (first (b/validate game rules))]
      [valid {key errors}])))

(def valid-play? (create-validator play-game-rules))

(def update-roles-rules
  {:name   [[v/member #{}]]
   :status [[#{:waiting} :message "Roles cannot be updated after game is started"]]})

(defn valid-role? [id name key]
  (let [game (crud/get games/games id)
        to-validate {:name name :status (.status game)}
        valid (b/valid? to-validate update-roles-rules)
        errors (first (b/validate to-validate update-roles-rules))]
    [valid {key errors}]))

(defn get-cops [count]
  (condp = count
    5 #{:lestrade :watson}
    6 #{:lestrade :sherlock}
    7 #{:lestrade :sherlock :watson}
    8 #{:lestrade :sherlock :watson}
    9 #{:lestrade :sherlock :watson}
    10 #{:lestrade :sherlock :watson :mycroft})
  )

(defn get-robbers [count]
    (condp = count
      ; moriarty 5+, moran 6+, judge 5,9+ ripper 5+, irene 6,8,10 brutus 7+
      5 #{:moriarty :judge :ripper}
      6 #{:moriarty :moran :ripper :irene}
      7 #{:moriarty :moran :ripper :brutus}
      8 #{:moriarty :moran :ripper :brutus :irene}
      9 #{:moriarty :moran :judge :ripper :brutus}
      10 #{:moriarty :moran :judge :ripper :brutus :irene})
    )

(defn assign-roles [game]
  (let [people (.people game)
        green (get-robbers (count people))
        blue (get-cops (count people))]
    (zipmap people (shuffle (concat green blue)))))
