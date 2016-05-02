(ns moriarty.pages.play
  (:require [ajax.core :refer [GET]]
            [reagent.session :as session]
            [moriarty.utils :refer [row col capitalize]]
            [moriarty.pages.games :as games]
            [material-ui.core :as ui :include-macros true]
            [accountant.core :as route]))

(defn description [role]
  (cond
    (= role "sherlock") [:h4 "You are the great detective, " [:strong "Sherlock Holmes"] "."]
    (= role "moriarty") [:h4 "You are the criminal mastermind, " [:strong "Professor Moriarty"] "."]
    (= role "lestrade") [:h4 "You are " [:strong "Inspector Lestrade"]]
    (= role "moran") [:h4 "You are the bodyguard, " [:strong "Colonel Moran"] "."]
    (= role "judge") [:h4 "You are the corrupt magistrate, " [:strong "Judge Grede"] "."]
    (= role "ripper") [:h4 "You are the killer, " [:strong "Jack the Ripper"] "."]
    (= role "irene") [:h4 "You are the love interest, " [:strong "Irene Adler"] "."]
    (= role "watson") [:h4 "You are the loyal friend, " [:strong "Doctor Watson"] "."]
    (= role "brutus") [:h4 "You are the thug, " [:strong "Brutus"] "."]
    (= role "mycroft") [:h4 "You are the government agent, " [:strong "Mycroft Holmes"] "."]
    :else [:h4 "Your role is " [:strong name] "."])
  )

  (defn knownby [role]
    (cond
      (= role "sherlock") [:h5 "Your identity is known by Watson and Adler."]
      (= role "moriarty") [:h5 "Your identity is known by Moran."]
      (= role "lestrade") [:h5 "Your identity is known by Sherlock. Moriarty suspects you."]
      (= role "watson") [:h5 "Your identity is known by Sherlock. Moriarty suspects you."]
      (= role "brutus") [:h5 "Your identity is known by Sherlock, the Judge, and Mycroft."]
      (#{"moran" "judge" "ripper" "irene" "mycroft"} role)[:h5 "Your identity is known by no one."]
      :else [:h6 "You have been cast out of Avalon, unwanted by either Merlin or Mordred."])
    )

    (defn win-condition [role]
      (cond
        (#{"sherlock" "watson" "lestrade" "mycroft"} role) [:h5 "Wins if either Lestrade correctly arrests Moriarty, or Accusers tie and the Cops have more points."]
        (#{"moriarty" "moran" "judge" "ripper" "brutus"} role) [:h5 "Wins if either Jack The Ripper correctly murders Sherlock, or Accusers tie and the Robbers have more points."]
        (= role "irene") [:h5 "Wins if Lestrade arrests Moriarty, and Sherlock remains alive; Also wins if neither Moriarty nor Sherlock are accused, and the Robbers have more points."]
        :else [:h6 "You have no role so you can't win. Sorry."])
      )

  (defn goodbad [total]
    (cond
      (#{6 8 10} total) [:h5 "There are " [:strong (get [3 3 4 4 5 5] (- total 5))] " robbers and " [:strong (get [2 2 3 3 4 4] (- total 5))] " cops and "[:strong "1"]" Irene Adler in this game."]
      :else [:h5 "There are " [:strong (get [3 3 4 4 5 5] (- total 5))] " robbers and " [:strong (get [2 2 3 3 4 4] (- total 5))] " cops in this game."])
  )

(defn view-list [info]
  (let [role (:role info)]
    [:div
     [:div
      (cond
        (= role "sherlock") [:h5 "This player is Doctor Watson:"]
        (= role "moriarty") [:h5 "This player are Lestrade and Watson:"]
        (= role "moran") [:h5 "This player is Moriarty:"]
        (#{"judge" "mycroft"} role) [:h5 "This player is Brutus:"]
        (#{"irene" "watson"} role) [:h5 "This player is Sherlock Holmes:"])
      (for [player (first (:info info))]
        [:div.player player])]
     (if (and (= role "sherlock")
              (> (:player-count info) 6))
       [:div {:style {:padding-top "10px"}}
        [:h5 "This player is Inspector Lestrade:"]
        [:div.player (first (second (:info info)))]
        [:h5 "This player is Brutus:"]
        [:div.player (first (nth (:info info) 2))]])]))

(defn info-view []
  (let [info (session/get :info)]
    (if info
      [:div
       [row
        [col
         [description (:role info)]]]
      [row
       [col
         [knownby (:role info)]]]
      [row
       [col
         [win-condition (:role info)]]]
       [row
        [col
         [:div {:style {:padding-bottom "20px"}}
          [view-list info]]]]
      [row
       [col
        [goodbad (:player-count info)]]]
      [row
        [col
         [:h5 [:strong (:first info)] " selects the first heist."]]]
       [row
        [col
         [row
          [:div.col-xs-8.col-xs-offset-2.start-btn
           [ui/RaisedButton {:label      "Leave Game"
                             :fullWidth  true
                             :onTouchTap #(route/navigate! "/")}]]]]]]
      [row [col [:div.text-center [ui/CircularProgress]]]])))

(defn play-page []
  (let [game (session/get :game)]
    (if (= (:status game) "playing")
      [info-view]
      [games/game-page])))
