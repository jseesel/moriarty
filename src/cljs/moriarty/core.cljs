(ns moriarty.core
  (:require [reagent.core :as reagent :refer [atom]]
            [reagent.session :as session]
            [material-ui.core :as ui :include-macros true]
            [moriarty.pages.home :as join]
            [moriarty.pages.groups :as groups]
            [moriarty.pages.games :as games]
            [moriarty.pages.play :as play]
            [secretary.core :as secretary :include-macros true]
            [accountant.core :as accountant]))

;; -------------------------
;; Views

(defn base-layout [& children]
  [:div
   [ui/AppBar {:title              "Moriarty's Machinations"
               :onTitleTouchTap    #(accountant/navigate! "/")
               :zDepth             0
               :showMenuIconButton false}]
   [:div.container-fluid
    children]])

(defn home-page []
  [base-layout [join/home-page]])

(defn play-page []
  [base-layout [play/play-page]])

(defn group-page []
  [base-layout [groups/group]])

(defn current-page []
  [:div [(session/get :current-page)]])

;; -------------------------
;; Handlers



;; -------------------------
;; Routes

(defn set-page!
  ([current]
   (set-page! current {}))
  ([current kws]
   (session/put! :current-page current)
   (session/put! :route-params kws)))

(secretary/defroute "/" []
                    (set-page! #'home-page))

(secretary/defroute "/games/:id/play/:person-id" [id person-id]
                    (games/get-game! id)
                    (games/get-info! id person-id)
                    (set-page! #'play-page {:id id :person-id person-id}))

(secretary/defroute "/groups/:id" [id]
                    (set-page! #'group-page {:id id}))

;; -------------------------
;; Initialize app

(defn mount-root []
  (reagent/render [current-page] (.getElementById js/document "app")))

(defn init! []
  (accountant/configure-navigation!)
  (accountant/dispatch-current!)
  (mount-root))
