// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__29700_29714 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__29701_29715 = null;
var count__29702_29716 = (0);
var i__29703_29717 = (0);
while(true){
if((i__29703_29717 < count__29702_29716)){
var f_29718 = cljs.core._nth.call(null,chunk__29701_29715,i__29703_29717);
cljs.core.println.call(null,"  ",f_29718);

var G__29719 = seq__29700_29714;
var G__29720 = chunk__29701_29715;
var G__29721 = count__29702_29716;
var G__29722 = (i__29703_29717 + (1));
seq__29700_29714 = G__29719;
chunk__29701_29715 = G__29720;
count__29702_29716 = G__29721;
i__29703_29717 = G__29722;
continue;
} else {
var temp__4425__auto___29723 = cljs.core.seq.call(null,seq__29700_29714);
if(temp__4425__auto___29723){
var seq__29700_29724__$1 = temp__4425__auto___29723;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29700_29724__$1)){
var c__21296__auto___29725 = cljs.core.chunk_first.call(null,seq__29700_29724__$1);
var G__29726 = cljs.core.chunk_rest.call(null,seq__29700_29724__$1);
var G__29727 = c__21296__auto___29725;
var G__29728 = cljs.core.count.call(null,c__21296__auto___29725);
var G__29729 = (0);
seq__29700_29714 = G__29726;
chunk__29701_29715 = G__29727;
count__29702_29716 = G__29728;
i__29703_29717 = G__29729;
continue;
} else {
var f_29730 = cljs.core.first.call(null,seq__29700_29724__$1);
cljs.core.println.call(null,"  ",f_29730);

var G__29731 = cljs.core.next.call(null,seq__29700_29724__$1);
var G__29732 = null;
var G__29733 = (0);
var G__29734 = (0);
seq__29700_29714 = G__29731;
chunk__29701_29715 = G__29732;
count__29702_29716 = G__29733;
i__29703_29717 = G__29734;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_29735 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__20493__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__20493__auto__)){
return or__20493__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_29735);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_29735)))?cljs.core.second.call(null,arglists_29735):arglists_29735));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__29704 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__29705 = null;
var count__29706 = (0);
var i__29707 = (0);
while(true){
if((i__29707 < count__29706)){
var vec__29708 = cljs.core._nth.call(null,chunk__29705,i__29707);
var name = cljs.core.nth.call(null,vec__29708,(0),null);
var map__29709 = cljs.core.nth.call(null,vec__29708,(1),null);
var map__29709__$1 = ((((!((map__29709 == null)))?((((map__29709.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29709.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29709):map__29709);
var doc = cljs.core.get.call(null,map__29709__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__29709__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__29736 = seq__29704;
var G__29737 = chunk__29705;
var G__29738 = count__29706;
var G__29739 = (i__29707 + (1));
seq__29704 = G__29736;
chunk__29705 = G__29737;
count__29706 = G__29738;
i__29707 = G__29739;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__29704);
if(temp__4425__auto__){
var seq__29704__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29704__$1)){
var c__21296__auto__ = cljs.core.chunk_first.call(null,seq__29704__$1);
var G__29740 = cljs.core.chunk_rest.call(null,seq__29704__$1);
var G__29741 = c__21296__auto__;
var G__29742 = cljs.core.count.call(null,c__21296__auto__);
var G__29743 = (0);
seq__29704 = G__29740;
chunk__29705 = G__29741;
count__29706 = G__29742;
i__29707 = G__29743;
continue;
} else {
var vec__29711 = cljs.core.first.call(null,seq__29704__$1);
var name = cljs.core.nth.call(null,vec__29711,(0),null);
var map__29712 = cljs.core.nth.call(null,vec__29711,(1),null);
var map__29712__$1 = ((((!((map__29712 == null)))?((((map__29712.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29712.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29712):map__29712);
var doc = cljs.core.get.call(null,map__29712__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__29712__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__29744 = cljs.core.next.call(null,seq__29704__$1);
var G__29745 = null;
var G__29746 = (0);
var G__29747 = (0);
seq__29704 = G__29744;
chunk__29705 = G__29745;
count__29706 = G__29746;
i__29707 = G__29747;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map