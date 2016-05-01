// Compiled by ClojureScript 1.7.170 {}
goog.provide('moriarty.pages.play');
goog.require('cljs.core');
goog.require('ajax.core');
goog.require('moriarty.utils');
goog.require('moriarty.pages.games');
goog.require('reagent.session');
goog.require('accountant.core');
goog.require('material_ui.core');
moriarty.pages.play.description = (function moriarty$pages$play$description(role){
if(cljs.core._EQ_.call(null,role,"sherlock")){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"You are the great detective, ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"Sherlock Holmes"], null),"."], null);
} else {
if(cljs.core._EQ_.call(null,role,"moriarty")){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"You are the criminal mastermind, ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"Professor Moriarty"], null),"."], null);
} else {
if(cljs.core._EQ_.call(null,role,"lestrade")){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"You are ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"Inspector Lestrade"], null)], null);
} else {
if(cljs.core._EQ_.call(null,role,"moran")){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"You are the bodyguard, ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"Colonel Moran"], null),"."], null);
} else {
if(cljs.core._EQ_.call(null,role,"judge")){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"You are the corrupt magistrate, ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"Judge Grede"], null),"."], null);
} else {
if(cljs.core._EQ_.call(null,role,"ripper")){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"You are the killer, ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"Jack the Ripper"], null),"."], null);
} else {
if(cljs.core._EQ_.call(null,role,"irene")){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"You are the love interest, ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"Irene Adler"], null),"."], null);
} else {
if(cljs.core._EQ_.call(null,role,"watson")){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"You are the loyal friend, ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"Doctor Watson"], null),"."], null);
} else {
if(cljs.core._EQ_.call(null,role,"brutus")){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"You are the thug, ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"Brutus"], null),"."], null);
} else {
if(cljs.core._EQ_.call(null,role,"mycroft")){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"You are the government agent, ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"Mycroft Holmes"], null),"."], null);
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"Your role is ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.name], null),"."], null);

}
}
}
}
}
}
}
}
}
}
});
moriarty.pages.play.knownby = (function moriarty$pages$play$knownby(role){
if(cljs.core._EQ_.call(null,role,"sherlock")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5","h5",-1829156625),"Your identity is known by Watson and Adler."], null);
} else {
if(cljs.core._EQ_.call(null,role,"moriarty")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5","h5",-1829156625),"Your identity is known by Moran."], null);
} else {
if(cljs.core._EQ_.call(null,role,"lestrade")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5","h5",-1829156625),"Your identity is known by Sherlock. Moriarty suspects you."], null);
} else {
if(cljs.core._EQ_.call(null,role,"watson")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5","h5",-1829156625),"Your identity is known by Sherlock. Moriarty suspects you."], null);
} else {
if(cljs.core._EQ_.call(null,role,"brutus")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5","h5",-1829156625),"Your identity is known by Sherlock, the Judge, and Mycroft."], null);
} else {
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, ["ripper",null,"irene",null,"judge",null,"mycroft",null,"moran",null], null), null).call(null,role))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5","h5",-1829156625),"Your identity is known by no one."], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h6","h6",557293780),"You have been cast out of Avalon, unwanted by either Merlin or Mordred."], null);

}
}
}
}
}
}
});
moriarty.pages.play.win_condition = (function moriarty$pages$play$win_condition(role){
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, ["lestrade",null,"sherlock",null,"mycroft",null,"watson",null], null), null).call(null,role))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5","h5",-1829156625),"Wins if either Lestrade correctly arrests Moriarty, or Accusers tie and the Cops have more points."], null);
} else {
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, ["ripper",null,"moriarty",null,"judge",null,"brutus",null,"moran",null], null), null).call(null,role))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5","h5",-1829156625),"Wins if either Jack The Ripper correctly murders Sherlock, or Accusers tie and the Robbers have more points."], null);
} else {
if(cljs.core._EQ_.call(null,role,"irene")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5","h5",-1829156625),"Wins if Lestrade arrests Moriarty, and Sherlock remains alive; Also wins if neither Moriarty nor Sherlock are accused, and the Robbers have more points."], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h6","h6",557293780),"You have no role so you can't win. Sorry."], null);

}
}
}
});
moriarty.pages.play.goodbad = (function moriarty$pages$play$goodbad(total){
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [(6),null,(10),null,(8),null], null), null).call(null,total))){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5","h5",-1829156625),"There are ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.get.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(3),(4),(4),(5),(5)], null),(total - (5)))], null)," robbers and ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.get.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2),(3),(4),(4),(4)], null),(total - (5)))], null)," cops and ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"1"], null)," Irene Adler in this game."], null);
} else {
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5","h5",-1829156625),"There are ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.get.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(3),(4),(4),(5),(5)], null),(total - (5)))], null)," robbers and ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.get.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2),(3),(4),(4),(4)], null),(total - (5)))], null)," cops in this game."], null);

}
});
moriarty.pages.play.view_list = (function moriarty$pages$play$view_list(info){
var role = new cljs.core.Keyword(null,"role","role",-736691072).cljs$core$IFn$_invoke$arity$1(info);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),((cljs.core._EQ_.call(null,role,"sherlock"))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5","h5",-1829156625),"This player is Inspector Lestrade:"], null):((cljs.core._EQ_.call(null,role,"moriarty"))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5","h5",-1829156625),"This player are Lestrade and Watson:"], null):((cljs.core._EQ_.call(null,role,"moran"))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5","h5",-1829156625),"This player is Moriarty:"], null):(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["judge",null,"mycroft",null], null), null).call(null,role))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5","h5",-1829156625),"This player is Brutus:"], null):(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["irene",null,"watson",null], null), null).call(null,role))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5","h5",-1829156625),"This player is Sherlock Holmes:"], null):null))))),(function (){var iter__21273__auto__ = ((function (role){
return (function moriarty$pages$play$view_list_$_iter__26367(s__26368){
return (new cljs.core.LazySeq(null,((function (role){
return (function (){
var s__26368__$1 = s__26368;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__26368__$1);
if(temp__4425__auto__){
var s__26368__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26368__$2)){
var c__21271__auto__ = cljs.core.chunk_first.call(null,s__26368__$2);
var size__21272__auto__ = cljs.core.count.call(null,c__21271__auto__);
var b__26370 = cljs.core.chunk_buffer.call(null,size__21272__auto__);
if((function (){var i__26369 = (0);
while(true){
if((i__26369 < size__21272__auto__)){
var player = cljs.core._nth.call(null,c__21271__auto__,i__26369);
cljs.core.chunk_append.call(null,b__26370,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.player","div.player",8830217),player], null));

var G__26371 = (i__26369 + (1));
i__26369 = G__26371;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26370),moriarty$pages$play$view_list_$_iter__26367.call(null,cljs.core.chunk_rest.call(null,s__26368__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26370),null);
}
} else {
var player = cljs.core.first.call(null,s__26368__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.player","div.player",8830217),player], null),moriarty$pages$play$view_list_$_iter__26367.call(null,cljs.core.rest.call(null,s__26368__$2)));
}
} else {
return null;
}
break;
}
});})(role))
,null,null));
});})(role))
;
return iter__21273__auto__.call(null,cljs.core.first.call(null,new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(info)));
})()], null),(((cljs.core._EQ_.call(null,role,"sherlock")) && ((new cljs.core.Keyword(null,"player-count","player-count",-1323180409).cljs$core$IFn$_invoke$arity$1(info) > (6))))?new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding-top","padding-top",1929675955),"10px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5","h5",-1829156625),"This player is Doctor Watson:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.player","div.player",8830217),cljs.core.first.call(null,cljs.core.second.call(null,new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(info)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5","h5",-1829156625),"This player is Brutus:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.player","div.player",8830217),cljs.core.first.call(null,cljs.core.nth.call(null,new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(info),(2)))], null)], null):null)], null);
});
moriarty.pages.play.info_view = (function moriarty$pages$play$info_view(){
var info = reagent.session.get.call(null,new cljs.core.Keyword(null,"info","info",-317069002));
if(cljs.core.truth_(info)){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [moriarty.utils.row,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [moriarty.utils.col,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [moriarty.pages.play.description,new cljs.core.Keyword(null,"role","role",-736691072).cljs$core$IFn$_invoke$arity$1(info)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [moriarty.utils.row,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [moriarty.utils.col,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [moriarty.pages.play.knownby,new cljs.core.Keyword(null,"role","role",-736691072).cljs$core$IFn$_invoke$arity$1(info)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [moriarty.utils.row,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [moriarty.utils.col,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [moriarty.pages.play.win_condition,new cljs.core.Keyword(null,"role","role",-736691072).cljs$core$IFn$_invoke$arity$1(info)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [moriarty.utils.row,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [moriarty.utils.col,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding-bottom","padding-bottom",-1899795591),"20px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [moriarty.pages.play.view_list,info], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [moriarty.utils.row,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [moriarty.utils.col,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [moriarty.pages.play.goodbad,new cljs.core.Keyword(null,"player-count","player-count",-1323180409).cljs$core$IFn$_invoke$arity$1(info)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [moriarty.utils.row,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [moriarty.utils.col,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5","h5",-1829156625),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),new cljs.core.Keyword(null,"first","first",-644103046).cljs$core$IFn$_invoke$arity$1(info)], null)," selects the first heist."], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [moriarty.utils.row,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [moriarty.utils.col,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [moriarty.utils.row,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-xs-8.col-xs-offset-2.start-btn","div.col-xs-8.col-xs-offset-2.start-btn",-1166384136),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [material_ui.core.RaisedButton,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),"Leave Game",new cljs.core.Keyword(null,"fullWidth","fullWidth",-1436357554),true,new cljs.core.Keyword(null,"onTouchTap","onTouchTap",1973229336),((function (info){
return (function (){
return accountant.core.navigate_BANG_.call(null,"/");
});})(info))
], null)], null)], null)], null)], null)], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [moriarty.utils.row,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [moriarty.utils.col,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-center","div.text-center",921869624),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [material_ui.core.CircularProgress], null)], null)], null)], null);
}
});
moriarty.pages.play.play_page = (function moriarty$pages$play$play_page(){
var game = reagent.session.get.call(null,new cljs.core.Keyword(null,"game","game",-441523833));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(game),"playing")){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [moriarty.pages.play.info_view], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [moriarty.pages.games.game_page], null);
}
});

//# sourceMappingURL=play.js.map