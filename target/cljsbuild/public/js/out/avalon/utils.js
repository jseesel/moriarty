// Compiled by ClojureScript 1.7.170 {}
goog.provide('avalon.utils');
goog.require('cljs.core');
avalon.utils.row = (function avalon$utils$row(var_args){
var args__21558__auto__ = [];
var len__21551__auto___21982 = arguments.length;
var i__21552__auto___21983 = (0);
while(true){
if((i__21552__auto___21983 < len__21551__auto___21982)){
args__21558__auto__.push((arguments[i__21552__auto___21983]));

var G__21984 = (i__21552__auto___21983 + (1));
i__21552__auto___21983 = G__21984;
continue;
} else {
}
break;
}

var argseq__21559__auto__ = ((((0) < args__21558__auto__.length))?(new cljs.core.IndexedSeq(args__21558__auto__.slice((0)),(0))):null);
return avalon.utils.row.cljs$core$IFn$_invoke$arity$variadic(argseq__21559__auto__);
});

avalon.utils.row.cljs$core$IFn$_invoke$arity$variadic = (function (children){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),children], null);
});

avalon.utils.row.cljs$lang$maxFixedArity = (0);

avalon.utils.row.cljs$lang$applyTo = (function (seq21981){
return avalon.utils.row.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21981));
});
avalon.utils.col = (function avalon$utils$col(var_args){
var args__21558__auto__ = [];
var len__21551__auto___21986 = arguments.length;
var i__21552__auto___21987 = (0);
while(true){
if((i__21552__auto___21987 < len__21551__auto___21986)){
args__21558__auto__.push((arguments[i__21552__auto___21987]));

var G__21988 = (i__21552__auto___21987 + (1));
i__21552__auto___21987 = G__21988;
continue;
} else {
}
break;
}

var argseq__21559__auto__ = ((((0) < args__21558__auto__.length))?(new cljs.core.IndexedSeq(args__21558__auto__.slice((0)),(0))):null);
return avalon.utils.col.cljs$core$IFn$_invoke$arity$variadic(argseq__21559__auto__);
});

avalon.utils.col.cljs$core$IFn$_invoke$arity$variadic = (function (children){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-xs-12.col-sm-4","div.col-xs-12.col-sm-4",-125047828),children], null);
});

avalon.utils.col.cljs$lang$maxFixedArity = (0);

avalon.utils.col.cljs$lang$applyTo = (function (seq21985){
return avalon.utils.col.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21985));
});
avalon.utils.capitalize = (function avalon$utils$capitalize(s){
var letter = s.charAt(cljs.core.name,(0)).toUpperCase();
return [cljs.core.str(letter),cljs.core.str(s.slice((1)))].join('');
});

//# sourceMappingURL=utils.js.map