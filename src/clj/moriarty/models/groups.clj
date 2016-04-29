(ns moriarty.models.groups
  (:require [moriarty.models.people :as people]
            [moriarty.models.crud :as crud]
            [moriarty.models.memdb :as db]))

(defonce groups (db/create-db))

(defrecord Group [name code people])

(defn create-group [name code]
  (let [group (->Group name code #{})]
    (crud/create! groups group)))

(defn add-person [id person]
  (crud/relate! groups id :people (:id person)))

(defn display-group [group]
    (-> group
        (dissoc :code)
        (assoc :people (map (partial crud/get people/people) (:people group)))))

(defn display-all []
  (mapv display-group (crud/all groups)))
