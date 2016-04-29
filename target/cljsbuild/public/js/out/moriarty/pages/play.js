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
var name = moriarty.utils.capitalize.call(null,cljs.core.name.call(null,role));
if(cljs.core._EQ_.call(null,role,"sherlock")){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"You are the great detective, ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"Sherlock Holmes"], null),"."], null);
} else {
if(cljs.core._EQ_.call(null,role,"moriarty")){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"You are the mastermind ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"Professor Moriarty"], null),"."], null);
} else {
if(cljs.core._EQ_.call(null,role,"lestrade")){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"You are ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"Inspector Lestrade"], null)], null);
} else {
if(cljs.core._EQ_.call(null,role,"moran")){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"You are the bodyguard ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"Colonel Moran"], null),"."], null);
} else {
if(cljs.core._EQ_.call(null,role,"judge")){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"You are the corrupt magistrate ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"Judge Grede"], null),"."], null);
} else {
if(cljs.core._EQ_.call(null,role,"ripper")){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"You are the killer ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"Jack the Ripper"], null),"."], null);
} else {
if(cljs.core._EQ_.call(null,role,"irene")){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"You are the love interest ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"Irene Adler"], null),"."], null);
} else {
if(cljs.core._EQ_.call(null,role,"watson")){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"You are the loyal friend ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"Doctor Watson"], null),"."], null);
} else {
if(cljs.core._EQ_.call(null,role,"brutus")){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"You are the thug ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"Brutus"], null),"."], null);
} else {
if(cljs.core._EQ_.call(null,role,"mycroft")){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"You are the government agent ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"Mycroft Holmes"], null),"."], null);
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"Your role is ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),name], null),"."], null);

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
moriarty.pages.play.backstory = (function moriarty$pages$play$backstory(role){
var name = moriarty.utils.capitalize.call(null,cljs.core.name.call(null,role));
if(cljs.core._EQ_.call(null,role,"sherlock")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"You are a loyal servant of Arthur."], null);
} else {
if(cljs.core._EQ_.call(null,role,"moriarty")){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"You are the great and powerful wizard ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),name], null),"."], null);
} else {
if(cljs.core._EQ_.call(null,role,"lestrade")){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"You are ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),name], null)], null);
} else {
if(cljs.core._EQ_.call(null,role,"moran")){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"You are the dark lord ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),name], null),"."], null);
} else {
if(cljs.core._EQ_.call(null,role,"judge")){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"You are the cop witch ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),name], null),"."], null);
} else {
if(cljs.core._EQ_.call(null,role,"ripper")){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"You are the cop force ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),name], null),"."], null);
} else {
if(cljs.core._EQ_.call(null,role,"irene")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"You are a minion of Mordred."], null);
} else {
if(cljs.core._EQ_.call(null,role,"watson")){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"You are the ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),name], null)," and a minion of Mordred."], null);
} else {
if(cljs.core._EQ_.call(null,role,"brutus")){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"You are one of the ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"Twins"], null)," and a loyal servant of Arthur."], null);
} else {
if(cljs.core._EQ_.call(null,role,"mycroft")){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"You are ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"Evil Lancelot"], null)," and a minion of Mordred."], null);
} else {
if(cljs.core._EQ_.call(null,role,"good")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h6","h6",557293780),"You are a simple servant with no knowledge of the others players. Who do you choose to trust?"], null);
} else {
if(cljs.core._EQ_.call(null,role,"merlin")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h6","h6",557293780),"You have knowledge of all the bad players except Mordred. Find a way to make Percival trust you if you hope to win."], null);
} else {
if(cljs.core._EQ_.call(null,role,"percival")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h6","h6",557293780),"You know two players: one is the cop witch, the other is the great wizard Merlin. You must decide which one to trust. Choose wisely."], null);
} else {
if(cljs.core._EQ_.call(null,role,"mordred")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h6","h6",557293780),"You are a bad who is hidden to all good, including Merlin. Take care not to expose yourself and your bad intentions."], null);
} else {
if(cljs.core._EQ_.call(null,role,"morgana")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h6","h6",557293780),"Merlin and your sinister teammates may know your intentions, but you can still fool Percival. How do you convince Percival that you are Merlin?"], null);
} else {
if(cljs.core._EQ_.call(null,role,"oberon")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h6","h6",557293780),"You are a bad that is unknown to the rest of your team. Only Merlin knows you to be bad."], null);
} else {
if(cljs.core._EQ_.call(null,role,"bad")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h6","h6",557293780),"You are an cop minion of Mordred. Merlin knows your true identity."], null);
} else {
if(cljs.core._EQ_.call(null,role,"assassin")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h6","h6",557293780),"You are an cop minion of Mordred. Merlin knows your true identity."], null);
} else {
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["twin1",null,"twin2",null], null), null).call(null,role))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h6","h6",557293780),"You are one of the twins. You two know yourselves to be good. Do you share your knowledge with the world?"], null);
} else {
if(cljs.core._EQ_.call(null,role,"cop-lancelot")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h6","h6",557293780),"You know the identity of good Lancelot, but he and Merlin know how bad you really are. How do you use this knowledge to win?"], null);
} else {
if(cljs.core._EQ_.call(null,role,"good-lancelot")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h6","h6",557293780),"You know the identity of bad Lancelot. How do you use this knowledge to win?"], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h6","h6",557293780),"You have been cast out of Avalon, unwanted by either Merlin or Mordred."], null);

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
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),((cljs.core._EQ_.call(null,role,"merlin"))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5","h5",-1829156625),"The following are the minions of Mordred:"], null):((cljs.core._EQ_.call(null,role,"percival"))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5","h5",-1829156625),"Merlin is one of the following:"], null):((cljs.core._EQ_.call(null,role,"mordred"))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5","h5",-1829156625),"The following are your minions:"], null):((cljs.core._EQ_.call(null,role,"good-lancelot"))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5","h5",-1829156625),"The following is Evil Lancelot:"], null):(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["twin1",null,"twin2",null], null), null).call(null,role))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5","h5",-1829156625),"The following is your twin and fellow good:"], null):(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, ["morgana",null,"assassin",null,"cop-lancelot",null,"bad",null], null), null).call(null,role))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5","h5",-1829156625),"The following are Mordred and his other minions:"], null):null)))))),(function (){var iter__21273__auto__ = ((function (role){
return (function moriarty$pages$play$view_list_$_iter__24311(s__24312){
return (new cljs.core.LazySeq(null,((function (role){
return (function (){
var s__24312__$1 = s__24312;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__24312__$1);
if(temp__4425__auto__){
var s__24312__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__24312__$2)){
var c__21271__auto__ = cljs.core.chunk_first.call(null,s__24312__$2);
var size__21272__auto__ = cljs.core.count.call(null,c__21271__auto__);
var b__24314 = cljs.core.chunk_buffer.call(null,size__21272__auto__);
if((function (){var i__24313 = (0);
while(true){
if((i__24313 < size__21272__auto__)){
var player = cljs.core._nth.call(null,c__21271__auto__,i__24313);
cljs.core.chunk_append.call(null,b__24314,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.player","div.player",8830217),player], null));

var G__24315 = (i__24313 + (1));
i__24313 = G__24315;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24314),moriarty$pages$play$view_list_$_iter__24311.call(null,cljs.core.chunk_rest.call(null,s__24312__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24314),null);
}
} else {
var player = cljs.core.first.call(null,s__24312__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.player","div.player",8830217),player], null),moriarty$pages$play$view_list_$_iter__24311.call(null,cljs.core.rest.call(null,s__24312__$2)));
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
})()], null),(((cljs.core._EQ_.call(null,role,"sherlock")) && ((new cljs.core.Keyword(null,"player-count","player-count",-1323180409).cljs$core$IFn$_invoke$arity$1(info) > (6))))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding-top","padding-top",1929675955),"10px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5","h5",-1829156625),"The following is Brutus:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.player","div.player",8830217),cljs.core.first.call(null,cljs.core.second.call(null,new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(info)))], null)], null):null)], null);
});
moriarty.pages.play.info_view = (function moriarty$pages$play$info_view(){
var info = reagent.session.get.call(null,new cljs.core.Keyword(null,"info","info",-317069002));
if(cljs.core.truth_(info)){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [moriarty.utils.row,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [moriarty.utils.col,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [moriarty.pages.play.description,new cljs.core.Keyword(null,"role","role",-736691072).cljs$core$IFn$_invoke$arity$1(info)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [moriarty.utils.row,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [moriarty.utils.col,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [moriarty.pages.play.backstory,new cljs.core.Keyword(null,"role","role",-736691072).cljs$core$IFn$_invoke$arity$1(info)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [moriarty.utils.row,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [moriarty.utils.col,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding-bottom","padding-bottom",-1899795591),"20px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [moriarty.pages.play.view_list,info], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [moriarty.utils.row,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [moriarty.utils.col,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [moriarty.pages.play.goodbad,new cljs.core.Keyword(null,"player-count","player-count",-1323180409).cljs$core$IFn$_invoke$arity$1(info)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [moriarty.utils.row,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [moriarty.utils.col,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5","h5",-1829156625),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),new cljs.core.Keyword(null,"first","first",-644103046).cljs$core$IFn$_invoke$arity$1(info)], null)," is the first player. The player to his/her right is the Lady of the Lake."], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [moriarty.utils.row,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [moriarty.utils.col,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [moriarty.utils.row,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-xs-8.col-xs-offset-2.start-btn","div.col-xs-8.col-xs-offset-2.start-btn",-1166384136),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [material_ui.core.RaisedButton,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),"Leave Game",new cljs.core.Keyword(null,"fullWidth","fullWidth",-1436357554),true,new cljs.core.Keyword(null,"onTouchTap","onTouchTap",1973229336),((function (info){
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