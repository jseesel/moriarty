(ns moriarty.pages.play
  (:require [ajax.core :refer [GET]]
            [reagent.session :as session]
            [moriarty.utils :refer [row col capitalize]]
            [moriarty.pages.games :as games]
            [material-ui.core :as ui :include-macros true]
            [accountant.core :as route]))

(defn description [role]
  (let [name (capitalize (name role))]
    (cond
      (= role "sherlock") [:h4 "You are the great detective, " [:strong "Sherlock Holmes"] "."]
      (= role "moriarty") [:h4 "You are the mastermind " [:strong "Professor Moriarty"] "."]
      (= role "lestrade") [:h4 "You are " [:strong "Inspector Lestrade"]]
      (= role "moran") [:h4 "You are the bodyguard " [:strong "Colonel Moran"] "."]
      (= role "judge") [:h4 "You are the corrupt magistrate " [:strong "Judge Grede"] "."]
      (= role "ripper") [:h4 "You are the killer " [:strong "Jack the Ripper"] "."]
      (= role "irene") [:h4 "You are the love interest " [:strong "Irene Adler"] "."]
      (= role "watson") [:h4 "You are the loyal friend " [:strong "Doctor Watson"] "."]
      (= role "brutus") [:h4 "You are the thug " [:strong "Brutus"] "."]
      (= role "mycroft") [:h4 "You are the government agent " [:strong "Mycroft Holmes"] "."]
      :else [:h4 "Your role is " [:strong name] "."])
    ))

  (defn backstory [role]
    (let [name (capitalize (name role))]
      (cond
        (= role "sherlock") [:h4 "You are a loyal servant of Arthur."]
        (= role "moriarty") [:h4 "You are the great and powerful wizard " [:strong name] "."]
        (= role "lestrade") [:h4 "You are " [:strong name]]
        (= role "moran") [:h4 "You are the dark lord " [:strong name] "."]
        (= role "judge") [:h4 "You are the cop witch " [:strong name] "."]
        (= role "ripper") [:h4 "You are the cop force " [:strong name] "."]
        (= role "irene") [:h4 "You are a minion of Mordred."]
        (= role "watson") [:h4 "You are the " [:strong name] " and a minion of Mordred."]
        (= role "brutus") [:h4 "You are one of the " [:strong "Twins"] " and a loyal servant of Arthur."]
        (= role "mycroft") [:h4 "You are " [:strong "Evil Lancelot"] " and a minion of Mordred."]

        (= role "good") [:h6 "You are a simple servant with no knowledge of the others players. Who do you choose to trust?"]
        (= role "merlin") [:h6 "You have knowledge of all the bad players except Mordred. Find a way to make Percival trust you if you hope to win."]
        (= role "percival") [:h6 "You know two players: one is the cop witch, the other is the great wizard Merlin. You must decide which one to trust. Choose wisely." ]
        (= role "mordred") [:h6 "You are a bad who is hidden to all good, including Merlin. Take care not to expose yourself and your bad intentions."]
        (= role "morgana") [:h6 "Merlin and your sinister teammates may know your intentions, but you can still fool Percival. How do you convince Percival that you are Merlin?"]
        (= role "oberon") [:h6 "You are a bad that is unknown to the rest of your team. Only Merlin knows you to be bad."]
        (= role "bad") [:h6 "You are an cop minion of Mordred. Merlin knows your true identity."]
        (= role "assassin") [:h6 "You are an cop minion of Mordred. Merlin knows your true identity."]
        (#{"twin1" "twin2"} role) [:h6 "You are one of the twins. You two know yourselves to be good. Do you share your knowledge with the world?"]
        (= role "cop-lancelot") [:h6 "You know the identity of good Lancelot, but he and Merlin know how bad you really are. How do you use this knowledge to win?"]
        (= role "good-lancelot") [:h6 "You know the identity of bad Lancelot. How do you use this knowledge to win?"]
        :else [:h6 "You have been cast out of Avalon, unwanted by either Merlin or Mordred."])
      ))

  (defn goodbad [total]
    (cond
      (#{6 8 10} total) [:h5 "There are " [:strong (get [3 3 4 4 5 5] (- total 5))] " robbers and " [:strong (get [2 2 3 4 4 4] (- total 5))] " cops and "[:strong "1"]" Irene Adler in this game."]
      :else [:h5 "There are " [:strong (get [3 3 4 4 5 5] (- total 5))] " robbers and " [:strong (get [2 2 3 4 4 4] (- total 5))] " cops in this game."])

  )

(defn view-list [info]
  (let [role (:role info)]
    [:div
     [:div
      (cond
        (= role "merlin") [:h5 "The following are the minions of Mordred:"]
        (= role "percival") [:h5 "Merlin is one of the following:"]
        (= role "mordred") [:h5 "The following are your minions:"]
        (= role "good-lancelot") [:h5 "The following is Evil Lancelot:"]
        (#{"twin1" "twin2"} role) [:h5 "The following is your twin and fellow good:"]
        (#{"morgana" "assassin" "bad" "cop-lancelot"} role) [:h5 "The following are Mordred and his other minions:"])
      (for [player (first (:info info))]
        [:div.player player])]
     (if (and (= role "sherlock")
              (> (:player-count info) 6))
       [:div {:style {:padding-top "10px"}}
        [:h5 "The following is Brutus:"]
        [:div.player (first (second (:info info)))]])]))

(defn info-view []
  (let [info (session/get :info)]
    (if info
      [:div
       [row
        [col
         [description (:role info)]]]
      [row
       [col
         [backstory (:role info)]]]
       [row
        [col
         [:div {:style {:padding-bottom "20px"}}
          [view-list info]]]]
      [row
       [col
        [goodbad (:player-count info)]]]
      [row
        [col
         [:h5 [:strong (:first info)] " is the first player. The player to his/her right is the Lady of the Lake."]]]
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
