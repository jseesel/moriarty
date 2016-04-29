(ns moriarty.api.people
  (:require [liberator.core :refer [defresource resource]]
            [compojure.core :refer [defroutes ANY]]
            [clojure.pprint :refer [pprint]]
            [moriarty.api.util :as util]
            [moriarty.models.crud :as crud]
            [moriarty.models.groups :as groups]
            [moriarty.models.people :as people]
            [moriarty.models.games :as games]
            [moriarty.rules.people :as rules]))

(defn gen-endpoint [id db create-fn delete-fn]
  (resource :available-media-types ["application/json"]
            :allowed-methods [:post :delete]
            :exists? (crud/exists? db id)
            :can-post-to-missing? false
            :malformed? (util/malformed? ::data)
            :processable? (rules/valid-person? ::data ::errors)
            :handle-unprocessable-entity ::errors
            :post! (fn [ctx]
                     (let [data (::data ctx)
                           person (people/create-person (:name data))]
                       (create-fn id person)
                       {::id (:id person)}))
            :handle-created #(identity {:id (::id %)})
            :respond-with-entity? true
            :delete! (fn [ctx]
                       (let [name (:name (::data ctx))]
                         (delete-fn id name)))
            :handle-ok (fn [_] (games/display-game (crud/get games/games id)))))

(defn group-add-person [id] (gen-endpoint id groups/groups groups/add-person nil))
(defn game-add-person [id] (gen-endpoint id games/games games/add-person games/delete-person))

(defn get-people [sees teams]
  [(into #{} (for [[person-id role] teams :when (sees role)]
              (:name (crud/get people/people person-id))))])

(defn get-info [game role person-id]
  (let [teams (dissoc (:teams game) person-id)
        cop-roles #{:sherlock :lestrade :watson :mycroft}
        cop (get-people cop-roles teams)]
    (condp = role
      :sherlock (concat (get-people #{:lestrade :watson} teams) (get-people #{:brutus} teams))
      :moriarty (get-people #{:lestrade :watson} teams)
      :lestrade #{}
      :moran (get-people #{:moriarty} teams)
      :judge (get-people #{:brutus} teams)
      :ripper #{}
      :irene (get-people #{:sherlock} teams)
      :watson (get-people #{:watson} teams)
      :brutus #{}
      :mycroft (get-people #{:brutus} teams))))

(defresource get-person-info [id person-id]
             :available-media-types ["application/json"]
             :allowed-methods [:get]
             :exists? (crud/exists? games/games id)
             :processable? (rules/valid-info? (crud/get games/games id) ::errors)
             :handle-unprocessable-entity ::errors
             :handle-ok (fn [_]
                          (let [game (crud/get games/games id)
                                role ((:teams game) person-id)]
                            {:role role
                             :first (:name (crud/get people/people (:first game)))
                             :player-count (:player-count game)
                             :info (get-info game role person-id)})))

(defroutes routes
  (ANY "/groups/:id/people" [id] (group-add-person (.toLowerCase id)))
  (ANY "/games/:id/people" [id] (game-add-person (.toLowerCase id)))
  (ANY "/games/:id/people/:person-id/info" [id person-id] (get-person-info (.toLowerCase id) (.toLowerCase person-id))))
