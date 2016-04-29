// Compiled by ClojureScript 1.7.170 {}
goog.provide('moriarty.pages.groups');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent.session');
goog.require('material_ui.core');
goog.require('accountant.core');
moriarty.pages.groups.group = (function moriarty$pages$groups$group(){
var group__$1 = reagent.session.get.call(null,new cljs.core.Keyword(null,"group","group",582596132));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row>div.col-xs-12.col-sm-4","div.row>div.col-xs-12.col-sm-4",-31615665),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(group__$1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"Players"], null),(function (){var iter__21265__auto__ = ((function (group__$1){
return (function moriarty$pages$groups$group_$_iter__30854(s__30855){
return (new cljs.core.LazySeq(null,((function (group__$1){
return (function (){
var s__30855__$1 = s__30855;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__30855__$1);
if(temp__4425__auto__){
var s__30855__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__30855__$2)){
var c__21263__auto__ = cljs.core.chunk_first.call(null,s__30855__$2);
var size__21264__auto__ = cljs.core.count.call(null,c__21263__auto__);
var b__30857 = cljs.core.chunk_buffer.call(null,size__21264__auto__);
if((function (){var i__30856 = (0);
while(true){
if((i__30856 < size__21264__auto__)){
var person = cljs.core._nth.call(null,c__21263__auto__,i__30856);
cljs.core.chunk_append.call(null,b__30857,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.player","div.player",8830217),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(person)], null));

var G__30858 = (i__30856 + (1));
i__30856 = G__30858;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30857),moriarty$pages$groups$group_$_iter__30854.call(null,cljs.core.chunk_rest.call(null,s__30855__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30857),null);
}
} else {
var person = cljs.core.first.call(null,s__30855__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.player","div.player",8830217),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(person)], null),moriarty$pages$groups$group_$_iter__30854.call(null,cljs.core.rest.call(null,s__30855__$2)));
}
} else {
return null;
}
break;
}
});})(group__$1))
,null,null));
});})(group__$1))
;
return iter__21265__auto__.call(null,new cljs.core.Keyword(null,"people","people",1443537404).cljs$core$IFn$_invoke$arity$1(group__$1));
})()], null);
});

//# sourceMappingURL=groups.js.map
