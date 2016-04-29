// Compiled by ClojureScript 1.7.170 {}
goog.provide('accountant.core');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('secretary.core');
goog.require('goog.history.Html5History');
goog.require('goog.history.EventType');
goog.require('cljs.core.async');
goog.require('goog.events');
goog.require('clojure.string');
if(typeof accountant.core.history !== 'undefined'){
} else {
accountant.core.history = (new goog.history.Html5History());
}
accountant.core.listen = (function accountant$core$listen(el,type){
var out = cljs.core.async.chan.call(null);
goog.events.listen(el,type,((function (out){
return (function (e){
return cljs.core.async.put_BANG_.call(null,out,e);
});})(out))
);

return out;
});
accountant.core.dispatch_on_navigate = (function accountant$core$dispatch_on_navigate(history){
var navigation = accountant.core.listen.call(null,history,goog.history.EventType.NAVIGATE);
var c__24367__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24367__auto__,navigation){
return (function (){
var f__24368__auto__ = (function (){var switch__24255__auto__ = ((function (c__24367__auto__,navigation){
return (function (state_28428){
var state_val_28429 = (state_28428[(1)]);
if((state_val_28429 === (1))){
var state_28428__$1 = state_28428;
var statearr_28430_28444 = state_28428__$1;
(statearr_28430_28444[(2)] = null);

(statearr_28430_28444[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28429 === (2))){
var state_28428__$1 = state_28428;
var statearr_28431_28445 = state_28428__$1;
(statearr_28431_28445[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28429 === (3))){
var inst_28426 = (state_28428[(2)]);
var state_28428__$1 = state_28428;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28428__$1,inst_28426);
} else {
if((state_val_28429 === (4))){
var state_28428__$1 = state_28428;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28428__$1,(7),navigation);
} else {
if((state_val_28429 === (5))){
var state_28428__$1 = state_28428;
var statearr_28433_28446 = state_28428__$1;
(statearr_28433_28446[(2)] = null);

(statearr_28433_28446[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28429 === (6))){
var inst_28424 = (state_28428[(2)]);
var state_28428__$1 = state_28428;
var statearr_28434_28447 = state_28428__$1;
(statearr_28434_28447[(2)] = inst_28424);

(statearr_28434_28447[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28429 === (7))){
var inst_28418 = (state_28428[(2)]);
var inst_28419 = inst_28418.token;
var inst_28420 = secretary.core.dispatch_BANG_.call(null,inst_28419);
var state_28428__$1 = (function (){var statearr_28435 = state_28428;
(statearr_28435[(7)] = inst_28420);

return statearr_28435;
})();
var statearr_28436_28448 = state_28428__$1;
(statearr_28436_28448[(2)] = null);

(statearr_28436_28448[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__24367__auto__,navigation))
;
return ((function (switch__24255__auto__,c__24367__auto__,navigation){
return (function() {
var accountant$core$dispatch_on_navigate_$_state_machine__24256__auto__ = null;
var accountant$core$dispatch_on_navigate_$_state_machine__24256__auto____0 = (function (){
var statearr_28440 = [null,null,null,null,null,null,null,null];
(statearr_28440[(0)] = accountant$core$dispatch_on_navigate_$_state_machine__24256__auto__);

(statearr_28440[(1)] = (1));

return statearr_28440;
});
var accountant$core$dispatch_on_navigate_$_state_machine__24256__auto____1 = (function (state_28428){
while(true){
var ret_value__24257__auto__ = (function (){try{while(true){
var result__24258__auto__ = switch__24255__auto__.call(null,state_28428);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24258__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24258__auto__;
}
break;
}
}catch (e28441){if((e28441 instanceof Object)){
var ex__24259__auto__ = e28441;
var statearr_28442_28449 = state_28428;
(statearr_28442_28449[(5)] = ex__24259__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28428);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28441;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24257__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28450 = state_28428;
state_28428 = G__28450;
continue;
} else {
return ret_value__24257__auto__;
}
break;
}
});
accountant$core$dispatch_on_navigate_$_state_machine__24256__auto__ = function(state_28428){
switch(arguments.length){
case 0:
return accountant$core$dispatch_on_navigate_$_state_machine__24256__auto____0.call(this);
case 1:
return accountant$core$dispatch_on_navigate_$_state_machine__24256__auto____1.call(this,state_28428);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
accountant$core$dispatch_on_navigate_$_state_machine__24256__auto__.cljs$core$IFn$_invoke$arity$0 = accountant$core$dispatch_on_navigate_$_state_machine__24256__auto____0;
accountant$core$dispatch_on_navigate_$_state_machine__24256__auto__.cljs$core$IFn$_invoke$arity$1 = accountant$core$dispatch_on_navigate_$_state_machine__24256__auto____1;
return accountant$core$dispatch_on_navigate_$_state_machine__24256__auto__;
})()
;})(switch__24255__auto__,c__24367__auto__,navigation))
})();
var state__24369__auto__ = (function (){var statearr_28443 = f__24368__auto__.call(null);
(statearr_28443[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24367__auto__);

return statearr_28443;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24369__auto__);
});})(c__24367__auto__,navigation))
);

return c__24367__auto__;
});
/**
 * Given a DOM element that may or may not be a link, traverse up the DOM tree
 *   to see if any of its parents are links. If so, return the href content.
 */
accountant.core.find_href = (function accountant$core$find_href(e){
while(true){
var temp__4423__auto__ = e.href;
if(cljs.core.truth_(temp__4423__auto__)){
var href = temp__4423__auto__;
return href;
} else {
var temp__4425__auto__ = e.parentNode;
if(cljs.core.truth_(temp__4425__auto__)){
var parent = temp__4425__auto__;
var G__28451 = parent;
e = G__28451;
continue;
} else {
return null;
}
}
break;
}
});
/**
 * Create a click handler that blocks page reloads for known routes in
 *   Secretary.
 */
accountant.core.prevent_reload_on_known_path = (function accountant$core$prevent_reload_on_known_path(history){
return goog.events.listen(document,"click",(function (e){
var target = e.target;
var button = e.button;
var meta_key = e.metaKey;
var alt_key = e.altKey;
var ctrl_key = e.ctrlKey;
var shift_key = e.shiftKey;
var any_key = (function (){var or__20493__auto__ = meta_key;
if(cljs.core.truth_(or__20493__auto__)){
return or__20493__auto__;
} else {
var or__20493__auto____$1 = alt_key;
if(cljs.core.truth_(or__20493__auto____$1)){
return or__20493__auto____$1;
} else {
var or__20493__auto____$2 = ctrl_key;
if(cljs.core.truth_(or__20493__auto____$2)){
return or__20493__auto____$2;
} else {
return shift_key;
}
}
}
})();
var href = accountant.core.find_href.call(null,target);
var path = goog.Uri.parse(href).getPath();
var title = target.title;
if(cljs.core.truth_((function (){var and__20481__auto__ = cljs.core.not.call(null,any_key);
if(and__20481__auto__){
var and__20481__auto____$1 = cljs.core._EQ_.call(null,button,(0));
if(and__20481__auto____$1){
return secretary.core.locate_route.call(null,path);
} else {
return and__20481__auto____$1;
}
} else {
return and__20481__auto__;
}
})())){
history.setToken(path,title);

return e.preventDefault();
} else {
return null;
}
}));
});
/**
 * Create and configure HTML5 history navigation.
 */
accountant.core.configure_navigation_BANG_ = (function accountant$core$configure_navigation_BANG_(){
accountant.core.history.setUseFragment(false);

accountant.core.history.setPathPrefix("");

accountant.core.history.setEnabled(true);

accountant.core.dispatch_on_navigate.call(null,accountant.core.history);

return accountant.core.prevent_reload_on_known_path.call(null,accountant.core.history);
});
accountant.core.map__GT_params = (function accountant$core$map__GT_params(query){
var params = cljs.core.map.call(null,(function (p1__28452_SHARP_){
return cljs.core.name.call(null,p1__28452_SHARP_);
}),cljs.core.keys.call(null,query));
var values = cljs.core.vals.call(null,query);
var pairs = cljs.core.partition.call(null,(2),cljs.core.interleave.call(null,params,values));
return clojure.string.join.call(null,"&",cljs.core.map.call(null,((function (params,values,pairs){
return (function (p1__28453_SHARP_){
return clojure.string.join.call(null,"=",p1__28453_SHARP_);
});})(params,values,pairs))
,pairs));
});
/**
 * add a browser history entry. updates window/location
 */
accountant.core.navigate_BANG_ = (function accountant$core$navigate_BANG_(var_args){
var args28454 = [];
var len__21551__auto___28457 = arguments.length;
var i__21552__auto___28458 = (0);
while(true){
if((i__21552__auto___28458 < len__21551__auto___28457)){
args28454.push((arguments[i__21552__auto___28458]));

var G__28459 = (i__21552__auto___28458 + (1));
i__21552__auto___28458 = G__28459;
continue;
} else {
}
break;
}

var G__28456 = args28454.length;
switch (G__28456) {
case 1:
return accountant.core.navigate_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return accountant.core.navigate_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28454.length)].join('')));

}
});

accountant.core.navigate_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (route){
return accountant.core.navigate_BANG_.call(null,route,cljs.core.PersistentArrayMap.EMPTY);
});

accountant.core.navigate_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (route,query){
var token = accountant.core.history.getToken();
var old_route = cljs.core.first.call(null,clojure.string.split.call(null,token,"?"));
var query_string = accountant.core.map__GT_params.call(null,cljs.core.reduce_kv.call(null,((function (token,old_route){
return (function (valid,k,v){
if(cljs.core.truth_(v)){
return cljs.core.assoc.call(null,valid,k,v);
} else {
return valid;
}
});})(token,old_route))
,cljs.core.PersistentArrayMap.EMPTY,query));
var with_params = ((cljs.core.empty_QMARK_.call(null,query_string))?route:[cljs.core.str(route),cljs.core.str("?"),cljs.core.str(query_string)].join(''));
if(cljs.core._EQ_.call(null,old_route,route)){
return accountant.core.history.replaceToken(with_params);
} else {
return accountant.core.history.setToken(with_params);
}
});

accountant.core.navigate_BANG_.cljs$lang$maxFixedArity = 2;
accountant.core.dispatch_current_BANG_ = (function accountant$core$dispatch_current_BANG_(){

var path = window.location.pathname;
var query = window.location.search;
return secretary.core.dispatch_BANG_.call(null,[cljs.core.str(path),cljs.core.str(query)].join(''));
});

//# sourceMappingURL=core.js.map