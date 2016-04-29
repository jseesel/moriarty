// Compiled by ClojureScript 1.7.170 {}
goog.provide('moriarty.pages.home');
goog.require('cljs.core');
goog.require('moriarty.utils');
goog.require('ajax.core');
goog.require('moriarty.pages.games');
goog.require('reagent.session');
goog.require('reagent.core');
goog.require('accountant.core');
goog.require('material_ui.core');
moriarty.pages.home.join_game_BANG_ = (function moriarty$pages$home$join_game_BANG_(id,name){
return ajax.core.POST.call(null,[cljs.core.str("/api/games/"),cljs.core.str(id),cljs.core.str("/people")].join(''),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),name], null),new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true,new cljs.core.Keyword(null,"handler","handler",-195596612),(function (resp){
reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"person-id","person-id",1251942696),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(resp));

moriarty.pages.games.get_game_BANG_.call(null,id,new cljs.core.Keyword(null,"force","force",781957286),true);

return accountant.core.navigate_BANG_.call(null,[cljs.core.str("/games/"),cljs.core.str(id),cljs.core.str("/play/"),cljs.core.str(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(resp))].join(''));
})], null));
});
moriarty.pages.home.button = (function moriarty$pages$home$button(label,opts){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-xs-8.col-xs-offset-2.start-btn","div.col-xs-8.col-xs-offset-2.start-btn",-1166384136),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [material_ui.core.RaisedButton,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),label,new cljs.core.Keyword(null,"primary","primary",817773892),true,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null)], null),opts)], null)], null);
});
moriarty.pages.home.home_page = (function moriarty$pages$home$home_page(){
var state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"joining","joining",-1465537833),false], null));
var create_BANG_ = ((function (state){
return (function (_){
return ajax.core.POST.call(null,"/api/games",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true,new cljs.core.Keyword(null,"handler","handler",-195596612),((function (state){
return (function (resp){
reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"game","game",-441523833),resp);

return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"joining","joining",-1465537833),true,new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(resp));
});})(state))
], null));
});})(state))
;
return ((function (state,create_BANG_){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-center","div.text-center",921869624),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [moriarty.utils.row,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [moriarty.utils.col,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Welcome to Avalon!"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [moriarty.utils.row,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [moriarty.utils.col,((cljs.core.not.call(null,new cljs.core.Keyword(null,"joining","joining",-1465537833).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [moriarty.utils.row,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [moriarty.pages.home.button,"Create Game",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onTouchTap","onTouchTap",1973229336),create_BANG_], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [moriarty.pages.home.button,"Join Game",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onTouchTap","onTouchTap",1973229336),((function (state,create_BANG_){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"joining","joining",-1465537833),true);
});})(state,create_BANG_))
], null)], null)], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [moriarty.utils.row,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-xs-8.col-xs-offset-2","div.col-xs-8.col-xs-offset-2",-1164166434),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [material_ui.core.TextField,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"hintText","hintText",-1810446561),"Enter an access code",new cljs.core.Keyword(null,"floatingLabelText","floatingLabelText",-431719650),"Access Code",new cljs.core.Keyword(null,"fullWidth","fullWidth",-1436357554),true,new cljs.core.Keyword(null,"autoCapitalize","autoCapitalize",438011742),"none",new cljs.core.Keyword(null,"autoCorrect","autoCorrect",448626584),"off",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (state,create_BANG_){
return (function (p1__24517_SHARP_){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"code","code",1586293142),p1__24517_SHARP_.target.value);
});})(state,create_BANG_))
], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-xs-8.col-xs-offset-2","div.col-xs-8.col-xs-offset-2",-1164166434),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [material_ui.core.TextField,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"hintText","hintText",-1810446561),"Enter your name",new cljs.core.Keyword(null,"floatingLabelText","floatingLabelText",-431719650),"Your Name",new cljs.core.Keyword(null,"fullWidth","fullWidth",-1436357554),true,new cljs.core.Keyword(null,"autoCorrect","autoCorrect",448626584),"off",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (state,create_BANG_){
return (function (p1__24518_SHARP_){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"name","name",1843675177),p1__24518_SHARP_.target.value);
});})(state,create_BANG_))
], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [moriarty.utils.row,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [moriarty.pages.home.button,"Join",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"onTouchTap","onTouchTap",1973229336),((function (state,create_BANG_){
return (function (){
return moriarty.pages.home.join_game_BANG_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)));
});})(state,create_BANG_))
,new cljs.core.Keyword(null,"fullWidth","fullWidth",-1436357554),true], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [moriarty.pages.home.button,"Back",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"onTouchTap","onTouchTap",1973229336),((function (state,create_BANG_){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"joining","joining",-1465537833),false);
});})(state,create_BANG_))
,new cljs.core.Keyword(null,"primary","primary",817773892),false,new cljs.core.Keyword(null,"fullWidth","fullWidth",-1436357554),true], null)], null)], null)], null))], null)], null)], null);
});
;})(state,create_BANG_))
});

//# sourceMappingURL=home.js.map
