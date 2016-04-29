// Compiled by ClojureScript 1.7.170 {}
goog.provide('reagent.session');
goog.require('cljs.core');
goog.require('reagent.core');
reagent.session.state = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
/**
 * Get the key's value from the session, returns nil if it doesn't exist.
 */
reagent.session.get = (function reagent$session$get(var_args){
var args__21558__auto__ = [];
var len__21551__auto___22805 = arguments.length;
var i__21552__auto___22806 = (0);
while(true){
if((i__21552__auto___22806 < len__21551__auto___22805)){
args__21558__auto__.push((arguments[i__21552__auto___22806]));

var G__22807 = (i__21552__auto___22806 + (1));
i__21552__auto___22806 = G__22807;
continue;
} else {
}
break;
}

var argseq__21559__auto__ = ((((1) < args__21558__auto__.length))?(new cljs.core.IndexedSeq(args__21558__auto__.slice((1)),(0))):null);
return reagent.session.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21559__auto__);
});

reagent.session.get.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__22803){
var vec__22804 = p__22803;
var default$ = cljs.core.nth.call(null,vec__22804,(0),null);
return cljs.core.get.call(null,cljs.core.deref.call(null,reagent.session.state),k,default$);
});

reagent.session.get.cljs$lang$maxFixedArity = (1);

reagent.session.get.cljs$lang$applyTo = (function (seq22801){
var G__22802 = cljs.core.first.call(null,seq22801);
var seq22801__$1 = cljs.core.next.call(null,seq22801);
return reagent.session.get.cljs$core$IFn$_invoke$arity$variadic(G__22802,seq22801__$1);
});
reagent.session.put_BANG_ = (function reagent$session$put_BANG_(k,v){
return cljs.core.swap_BANG_.call(null,reagent.session.state,cljs.core.assoc,k,v);
});
/**
 * Gets the value at the path specified by the vector ks from the session,
 *   returns nil if it doesn't exist.
 */
reagent.session.get_in = (function reagent$session$get_in(var_args){
var args__21558__auto__ = [];
var len__21551__auto___22812 = arguments.length;
var i__21552__auto___22813 = (0);
while(true){
if((i__21552__auto___22813 < len__21551__auto___22812)){
args__21558__auto__.push((arguments[i__21552__auto___22813]));

var G__22814 = (i__21552__auto___22813 + (1));
i__21552__auto___22813 = G__22814;
continue;
} else {
}
break;
}

var argseq__21559__auto__ = ((((1) < args__21558__auto__.length))?(new cljs.core.IndexedSeq(args__21558__auto__.slice((1)),(0))):null);
return reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21559__auto__);
});

reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__22810){
var vec__22811 = p__22810;
var default$ = cljs.core.nth.call(null,vec__22811,(0),null);
return cljs.core.get_in.call(null,cljs.core.deref.call(null,reagent.session.state),ks,default$);
});

reagent.session.get_in.cljs$lang$maxFixedArity = (1);

reagent.session.get_in.cljs$lang$applyTo = (function (seq22808){
var G__22809 = cljs.core.first.call(null,seq22808);
var seq22808__$1 = cljs.core.next.call(null,seq22808);
return reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic(G__22809,seq22808__$1);
});
/**
 * Replace the current session's value with the result of executing f with
 *   the current value and args.
 */
reagent.session.swap_BANG_ = (function reagent$session$swap_BANG_(var_args){
var args__21558__auto__ = [];
var len__21551__auto___22817 = arguments.length;
var i__21552__auto___22818 = (0);
while(true){
if((i__21552__auto___22818 < len__21551__auto___22817)){
args__21558__auto__.push((arguments[i__21552__auto___22818]));

var G__22819 = (i__21552__auto___22818 + (1));
i__21552__auto___22818 = G__22819;
continue;
} else {
}
break;
}

var argseq__21559__auto__ = ((((1) < args__21558__auto__.length))?(new cljs.core.IndexedSeq(args__21558__auto__.slice((1)),(0))):null);
return reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21559__auto__);
});

reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return cljs.core.apply.call(null,cljs.core.swap_BANG_,reagent.session.state,f,args);
});

reagent.session.swap_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.swap_BANG_.cljs$lang$applyTo = (function (seq22815){
var G__22816 = cljs.core.first.call(null,seq22815);
var seq22815__$1 = cljs.core.next.call(null,seq22815);
return reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__22816,seq22815__$1);
});
/**
 * Remove all data from the session and start over cleanly.
 */
reagent.session.clear_BANG_ = (function reagent$session$clear_BANG_(){
return cljs.core.reset_BANG_.call(null,reagent.session.state,cljs.core.PersistentArrayMap.EMPTY);
});
reagent.session.reset_BANG_ = (function reagent$session$reset_BANG_(m){
return cljs.core.reset_BANG_.call(null,reagent.session.state,m);
});
/**
 * Remove a key from the session
 */
reagent.session.remove_BANG_ = (function reagent$session$remove_BANG_(k){
return cljs.core.swap_BANG_.call(null,reagent.session.state,cljs.core.dissoc,k);
});
/**
 * Associates a value in the session, where ks is a
 * sequence of keys and v is the new value and returns
 * a new nested structure. If any levels do not exist,
 * hash-maps will be created.
 */
reagent.session.assoc_in_BANG_ = (function reagent$session$assoc_in_BANG_(ks,v){
return cljs.core.swap_BANG_.call(null,reagent.session.state,(function (p1__22820_SHARP_){
return cljs.core.assoc_in.call(null,p1__22820_SHARP_,ks,v);
}));
});
/**
 * Destructive get from the session. This returns the current value of the key
 *   and then removes it from the session.
 */
reagent.session.get_BANG_ = (function reagent$session$get_BANG_(var_args){
var args__21558__auto__ = [];
var len__21551__auto___22825 = arguments.length;
var i__21552__auto___22826 = (0);
while(true){
if((i__21552__auto___22826 < len__21551__auto___22825)){
args__21558__auto__.push((arguments[i__21552__auto___22826]));

var G__22827 = (i__21552__auto___22826 + (1));
i__21552__auto___22826 = G__22827;
continue;
} else {
}
break;
}

var argseq__21559__auto__ = ((((1) < args__21558__auto__.length))?(new cljs.core.IndexedSeq(args__21558__auto__.slice((1)),(0))):null);
return reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21559__auto__);
});

reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__22823){
var vec__22824 = p__22823;
var default$ = cljs.core.nth.call(null,vec__22824,(0),null);
var cur = reagent.session.get.call(null,k,default$);
reagent.session.remove_BANG_.call(null,k);

return cur;
});

reagent.session.get_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.get_BANG_.cljs$lang$applyTo = (function (seq22821){
var G__22822 = cljs.core.first.call(null,seq22821);
var seq22821__$1 = cljs.core.next.call(null,seq22821);
return reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__22822,seq22821__$1);
});
/**
 * Destructive get from the session. This returns the current value of the path
 *   specified by the vector ks and then removes it from the session.
 */
reagent.session.get_in_BANG_ = (function reagent$session$get_in_BANG_(var_args){
var args__21558__auto__ = [];
var len__21551__auto___22832 = arguments.length;
var i__21552__auto___22833 = (0);
while(true){
if((i__21552__auto___22833 < len__21551__auto___22832)){
args__21558__auto__.push((arguments[i__21552__auto___22833]));

var G__22834 = (i__21552__auto___22833 + (1));
i__21552__auto___22833 = G__22834;
continue;
} else {
}
break;
}

var argseq__21559__auto__ = ((((1) < args__21558__auto__.length))?(new cljs.core.IndexedSeq(args__21558__auto__.slice((1)),(0))):null);
return reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21559__auto__);
});

reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__22830){
var vec__22831 = p__22830;
var default$ = cljs.core.nth.call(null,vec__22831,(0),null);
var cur = cljs.core.get_in.call(null,cljs.core.deref.call(null,reagent.session.state),ks,default$);
reagent.session.assoc_in_BANG_.call(null,ks,null);

return cur;
});

reagent.session.get_in_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.get_in_BANG_.cljs$lang$applyTo = (function (seq22828){
var G__22829 = cljs.core.first.call(null,seq22828);
var seq22828__$1 = cljs.core.next.call(null,seq22828);
return reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__22829,seq22828__$1);
});
/**
 * 'Updates' a value in the session, where ks is a
 * sequence of keys and f is a function that will
 * take the old value along with any supplied args and return
 * the new value. If any levels do not exist, hash-maps
 * will be created.
 */
reagent.session.update_in_BANG_ = (function reagent$session$update_in_BANG_(var_args){
var args__21558__auto__ = [];
var len__21551__auto___22839 = arguments.length;
var i__21552__auto___22840 = (0);
while(true){
if((i__21552__auto___22840 < len__21551__auto___22839)){
args__21558__auto__.push((arguments[i__21552__auto___22840]));

var G__22841 = (i__21552__auto___22840 + (1));
i__21552__auto___22840 = G__22841;
continue;
} else {
}
break;
}

var argseq__21559__auto__ = ((((2) < args__21558__auto__.length))?(new cljs.core.IndexedSeq(args__21558__auto__.slice((2)),(0))):null);
return reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__21559__auto__);
});

reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,f,args){
return cljs.core.swap_BANG_.call(null,reagent.session.state,(function (p1__22835_SHARP_){
return cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.update_in,p1__22835_SHARP_,ks,f),args);
}));
});

reagent.session.update_in_BANG_.cljs$lang$maxFixedArity = (2);

reagent.session.update_in_BANG_.cljs$lang$applyTo = (function (seq22836){
var G__22837 = cljs.core.first.call(null,seq22836);
var seq22836__$1 = cljs.core.next.call(null,seq22836);
var G__22838 = cljs.core.first.call(null,seq22836__$1);
var seq22836__$2 = cljs.core.next.call(null,seq22836__$1);
return reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__22837,G__22838,seq22836__$2);
});

//# sourceMappingURL=session.js.map