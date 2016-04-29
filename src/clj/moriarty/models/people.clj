(ns moriarty.models.people
  (:require [moriarty.models.crud :as crud]
            [moriarty.models.memdb :as db]))

(defonce people (db/create-db))

(defrecord Person [name])

(defn create-person [name]
  (let [person (->Person name)]
    (crud/create! people person)))
