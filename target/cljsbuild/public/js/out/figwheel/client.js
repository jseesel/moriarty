// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__30119 = cljs.core._EQ_;
var expr__30120 = (function (){var or__20493__auto__ = localStorage.getItem("figwheel_autoload");
if(cljs.core.truth_(or__20493__auto__)){
return or__20493__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__30119.call(null,"true",expr__30120))){
return true;
} else {
if(cljs.core.truth_(pred__30119.call(null,"false",expr__30120))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__30120)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.repl_print_fn = (function figwheel$client$repl_print_fn(var_args){
var args__21558__auto__ = [];
var len__21551__auto___30123 = arguments.length;
var i__21552__auto___30124 = (0);
while(true){
if((i__21552__auto___30124 < len__21551__auto___30123)){
args__21558__auto__.push((arguments[i__21552__auto___30124]));

var G__30125 = (i__21552__auto___30124 + (1));
i__21552__auto___30124 = G__30125;
continue;
} else {
}
break;
}

var argseq__21559__auto__ = ((((0) < args__21558__auto__.length))?(new cljs.core.IndexedSeq(args__21558__auto__.slice((0)),(0))):null);
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__21559__auto__);
});

figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));

return null;
});

figwheel.client.repl_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_print_fn.cljs$lang$applyTo = (function (seq30122){
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30122));
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__30126){
var map__30129 = p__30126;
var map__30129__$1 = ((((!((map__30129 == null)))?((((map__30129.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30129.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30129):map__30129);
var message = cljs.core.get.call(null,map__30129__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__30129__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__20493__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__20493__auto__)){
return or__20493__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__20481__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__20481__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__20481__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__24367__auto___30291 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24367__auto___30291,ch){
return (function (){
var f__24368__auto__ = (function (){var switch__24255__auto__ = ((function (c__24367__auto___30291,ch){
return (function (state_30260){
var state_val_30261 = (state_30260[(1)]);
if((state_val_30261 === (7))){
var inst_30256 = (state_30260[(2)]);
var state_30260__$1 = state_30260;
var statearr_30262_30292 = state_30260__$1;
(statearr_30262_30292[(2)] = inst_30256);

(statearr_30262_30292[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30261 === (1))){
var state_30260__$1 = state_30260;
var statearr_30263_30293 = state_30260__$1;
(statearr_30263_30293[(2)] = null);

(statearr_30263_30293[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30261 === (4))){
var inst_30213 = (state_30260[(7)]);
var inst_30213__$1 = (state_30260[(2)]);
var state_30260__$1 = (function (){var statearr_30264 = state_30260;
(statearr_30264[(7)] = inst_30213__$1);

return statearr_30264;
})();
if(cljs.core.truth_(inst_30213__$1)){
var statearr_30265_30294 = state_30260__$1;
(statearr_30265_30294[(1)] = (5));

} else {
var statearr_30266_30295 = state_30260__$1;
(statearr_30266_30295[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30261 === (15))){
var inst_30220 = (state_30260[(8)]);
var inst_30235 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_30220);
var inst_30236 = cljs.core.first.call(null,inst_30235);
var inst_30237 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_30236);
var inst_30238 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_30237)].join('');
var inst_30239 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_30238);
var state_30260__$1 = state_30260;
var statearr_30267_30296 = state_30260__$1;
(statearr_30267_30296[(2)] = inst_30239);

(statearr_30267_30296[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30261 === (13))){
var inst_30244 = (state_30260[(2)]);
var state_30260__$1 = state_30260;
var statearr_30268_30297 = state_30260__$1;
(statearr_30268_30297[(2)] = inst_30244);

(statearr_30268_30297[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30261 === (6))){
var state_30260__$1 = state_30260;
var statearr_30269_30298 = state_30260__$1;
(statearr_30269_30298[(2)] = null);

(statearr_30269_30298[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30261 === (17))){
var inst_30242 = (state_30260[(2)]);
var state_30260__$1 = state_30260;
var statearr_30270_30299 = state_30260__$1;
(statearr_30270_30299[(2)] = inst_30242);

(statearr_30270_30299[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30261 === (3))){
var inst_30258 = (state_30260[(2)]);
var state_30260__$1 = state_30260;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30260__$1,inst_30258);
} else {
if((state_val_30261 === (12))){
var inst_30219 = (state_30260[(9)]);
var inst_30233 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_30219,opts);
var state_30260__$1 = state_30260;
if(cljs.core.truth_(inst_30233)){
var statearr_30271_30300 = state_30260__$1;
(statearr_30271_30300[(1)] = (15));

} else {
var statearr_30272_30301 = state_30260__$1;
(statearr_30272_30301[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30261 === (2))){
var state_30260__$1 = state_30260;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30260__$1,(4),ch);
} else {
if((state_val_30261 === (11))){
var inst_30220 = (state_30260[(8)]);
var inst_30225 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30226 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_30220);
var inst_30227 = cljs.core.async.timeout.call(null,(1000));
var inst_30228 = [inst_30226,inst_30227];
var inst_30229 = (new cljs.core.PersistentVector(null,2,(5),inst_30225,inst_30228,null));
var state_30260__$1 = state_30260;
return cljs.core.async.ioc_alts_BANG_.call(null,state_30260__$1,(14),inst_30229);
} else {
if((state_val_30261 === (9))){
var inst_30220 = (state_30260[(8)]);
var inst_30246 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_30247 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_30220);
var inst_30248 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_30247);
var inst_30249 = [cljs.core.str("Not loading: "),cljs.core.str(inst_30248)].join('');
var inst_30250 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_30249);
var state_30260__$1 = (function (){var statearr_30273 = state_30260;
(statearr_30273[(10)] = inst_30246);

return statearr_30273;
})();
var statearr_30274_30302 = state_30260__$1;
(statearr_30274_30302[(2)] = inst_30250);

(statearr_30274_30302[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30261 === (5))){
var inst_30213 = (state_30260[(7)]);
var inst_30215 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_30216 = (new cljs.core.PersistentArrayMap(null,2,inst_30215,null));
var inst_30217 = (new cljs.core.PersistentHashSet(null,inst_30216,null));
var inst_30218 = figwheel.client.focus_msgs.call(null,inst_30217,inst_30213);
var inst_30219 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_30218);
var inst_30220 = cljs.core.first.call(null,inst_30218);
var inst_30221 = figwheel.client.autoload_QMARK_.call(null);
var state_30260__$1 = (function (){var statearr_30275 = state_30260;
(statearr_30275[(9)] = inst_30219);

(statearr_30275[(8)] = inst_30220);

return statearr_30275;
})();
if(cljs.core.truth_(inst_30221)){
var statearr_30276_30303 = state_30260__$1;
(statearr_30276_30303[(1)] = (8));

} else {
var statearr_30277_30304 = state_30260__$1;
(statearr_30277_30304[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30261 === (14))){
var inst_30231 = (state_30260[(2)]);
var state_30260__$1 = state_30260;
var statearr_30278_30305 = state_30260__$1;
(statearr_30278_30305[(2)] = inst_30231);

(statearr_30278_30305[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30261 === (16))){
var state_30260__$1 = state_30260;
var statearr_30279_30306 = state_30260__$1;
(statearr_30279_30306[(2)] = null);

(statearr_30279_30306[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30261 === (10))){
var inst_30252 = (state_30260[(2)]);
var state_30260__$1 = (function (){var statearr_30280 = state_30260;
(statearr_30280[(11)] = inst_30252);

return statearr_30280;
})();
var statearr_30281_30307 = state_30260__$1;
(statearr_30281_30307[(2)] = null);

(statearr_30281_30307[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30261 === (8))){
var inst_30219 = (state_30260[(9)]);
var inst_30223 = figwheel.client.reload_file_state_QMARK_.call(null,inst_30219,opts);
var state_30260__$1 = state_30260;
if(cljs.core.truth_(inst_30223)){
var statearr_30282_30308 = state_30260__$1;
(statearr_30282_30308[(1)] = (11));

} else {
var statearr_30283_30309 = state_30260__$1;
(statearr_30283_30309[(1)] = (12));

}

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
});})(c__24367__auto___30291,ch))
;
return ((function (switch__24255__auto__,c__24367__auto___30291,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__24256__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__24256__auto____0 = (function (){
var statearr_30287 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30287[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__24256__auto__);

(statearr_30287[(1)] = (1));

return statearr_30287;
});
var figwheel$client$file_reloader_plugin_$_state_machine__24256__auto____1 = (function (state_30260){
while(true){
var ret_value__24257__auto__ = (function (){try{while(true){
var result__24258__auto__ = switch__24255__auto__.call(null,state_30260);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24258__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24258__auto__;
}
break;
}
}catch (e30288){if((e30288 instanceof Object)){
var ex__24259__auto__ = e30288;
var statearr_30289_30310 = state_30260;
(statearr_30289_30310[(5)] = ex__24259__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30260);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30288;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24257__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30311 = state_30260;
state_30260 = G__30311;
continue;
} else {
return ret_value__24257__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__24256__auto__ = function(state_30260){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__24256__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__24256__auto____1.call(this,state_30260);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__24256__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__24256__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__24256__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__24256__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__24256__auto__;
})()
;})(switch__24255__auto__,c__24367__auto___30291,ch))
})();
var state__24369__auto__ = (function (){var statearr_30290 = f__24368__auto__.call(null);
(statearr_30290[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24367__auto___30291);

return statearr_30290;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24369__auto__);
});})(c__24367__auto___30291,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__30312_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__30312_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_30319 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_30319){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_30317 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_30318 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),figwheel.client.utils.eval_helper.call(null,code,opts)], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_30318;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_30317;
}}catch (e30316){if((e30316 instanceof Error)){
var e = e30316;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_30319], null));
} else {
var e = e30316;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_30319))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__30320){
var map__30327 = p__30320;
var map__30327__$1 = ((((!((map__30327 == null)))?((((map__30327.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30327.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30327):map__30327);
var opts = map__30327__$1;
var build_id = cljs.core.get.call(null,map__30327__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__30327,map__30327__$1,opts,build_id){
return (function (p__30329){
var vec__30330 = p__30329;
var map__30331 = cljs.core.nth.call(null,vec__30330,(0),null);
var map__30331__$1 = ((((!((map__30331 == null)))?((((map__30331.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30331.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30331):map__30331);
var msg = map__30331__$1;
var msg_name = cljs.core.get.call(null,map__30331__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__30330,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__30330,map__30331,map__30331__$1,msg,msg_name,_,map__30327,map__30327__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__30330,map__30331,map__30331__$1,msg,msg_name,_,map__30327,map__30327__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__30327,map__30327__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__30337){
var vec__30338 = p__30337;
var map__30339 = cljs.core.nth.call(null,vec__30338,(0),null);
var map__30339__$1 = ((((!((map__30339 == null)))?((((map__30339.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30339.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30339):map__30339);
var msg = map__30339__$1;
var msg_name = cljs.core.get.call(null,map__30339__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__30338,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__30341){
var map__30351 = p__30341;
var map__30351__$1 = ((((!((map__30351 == null)))?((((map__30351.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30351.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30351):map__30351);
var on_compile_warning = cljs.core.get.call(null,map__30351__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__30351__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__30351,map__30351__$1,on_compile_warning,on_compile_fail){
return (function (p__30353){
var vec__30354 = p__30353;
var map__30355 = cljs.core.nth.call(null,vec__30354,(0),null);
var map__30355__$1 = ((((!((map__30355 == null)))?((((map__30355.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30355.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30355):map__30355);
var msg = map__30355__$1;
var msg_name = cljs.core.get.call(null,map__30355__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__30354,(1));
var pred__30357 = cljs.core._EQ_;
var expr__30358 = msg_name;
if(cljs.core.truth_(pred__30357.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__30358))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__30357.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__30358))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__30351,map__30351__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__24367__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24367__auto__,msg_hist,msg_names,msg){
return (function (){
var f__24368__auto__ = (function (){var switch__24255__auto__ = ((function (c__24367__auto__,msg_hist,msg_names,msg){
return (function (state_30574){
var state_val_30575 = (state_30574[(1)]);
if((state_val_30575 === (7))){
var inst_30498 = (state_30574[(2)]);
var state_30574__$1 = state_30574;
if(cljs.core.truth_(inst_30498)){
var statearr_30576_30622 = state_30574__$1;
(statearr_30576_30622[(1)] = (8));

} else {
var statearr_30577_30623 = state_30574__$1;
(statearr_30577_30623[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30575 === (20))){
var inst_30568 = (state_30574[(2)]);
var state_30574__$1 = state_30574;
var statearr_30578_30624 = state_30574__$1;
(statearr_30578_30624[(2)] = inst_30568);

(statearr_30578_30624[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30575 === (27))){
var inst_30564 = (state_30574[(2)]);
var state_30574__$1 = state_30574;
var statearr_30579_30625 = state_30574__$1;
(statearr_30579_30625[(2)] = inst_30564);

(statearr_30579_30625[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30575 === (1))){
var inst_30491 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_30574__$1 = state_30574;
if(cljs.core.truth_(inst_30491)){
var statearr_30580_30626 = state_30574__$1;
(statearr_30580_30626[(1)] = (2));

} else {
var statearr_30581_30627 = state_30574__$1;
(statearr_30581_30627[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30575 === (24))){
var inst_30566 = (state_30574[(2)]);
var state_30574__$1 = state_30574;
var statearr_30582_30628 = state_30574__$1;
(statearr_30582_30628[(2)] = inst_30566);

(statearr_30582_30628[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30575 === (4))){
var inst_30572 = (state_30574[(2)]);
var state_30574__$1 = state_30574;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30574__$1,inst_30572);
} else {
if((state_val_30575 === (15))){
var inst_30570 = (state_30574[(2)]);
var state_30574__$1 = state_30574;
var statearr_30583_30629 = state_30574__$1;
(statearr_30583_30629[(2)] = inst_30570);

(statearr_30583_30629[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30575 === (21))){
var inst_30529 = (state_30574[(2)]);
var state_30574__$1 = state_30574;
var statearr_30584_30630 = state_30574__$1;
(statearr_30584_30630[(2)] = inst_30529);

(statearr_30584_30630[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30575 === (31))){
var inst_30553 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_30574__$1 = state_30574;
if(cljs.core.truth_(inst_30553)){
var statearr_30585_30631 = state_30574__$1;
(statearr_30585_30631[(1)] = (34));

} else {
var statearr_30586_30632 = state_30574__$1;
(statearr_30586_30632[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30575 === (32))){
var inst_30562 = (state_30574[(2)]);
var state_30574__$1 = state_30574;
var statearr_30587_30633 = state_30574__$1;
(statearr_30587_30633[(2)] = inst_30562);

(statearr_30587_30633[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30575 === (33))){
var inst_30551 = (state_30574[(2)]);
var state_30574__$1 = state_30574;
var statearr_30588_30634 = state_30574__$1;
(statearr_30588_30634[(2)] = inst_30551);

(statearr_30588_30634[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30575 === (13))){
var inst_30512 = figwheel.client.heads_up.clear.call(null);
var state_30574__$1 = state_30574;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30574__$1,(16),inst_30512);
} else {
if((state_val_30575 === (22))){
var inst_30533 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30534 = figwheel.client.heads_up.append_message.call(null,inst_30533);
var state_30574__$1 = state_30574;
var statearr_30589_30635 = state_30574__$1;
(statearr_30589_30635[(2)] = inst_30534);

(statearr_30589_30635[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30575 === (36))){
var inst_30560 = (state_30574[(2)]);
var state_30574__$1 = state_30574;
var statearr_30590_30636 = state_30574__$1;
(statearr_30590_30636[(2)] = inst_30560);

(statearr_30590_30636[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30575 === (29))){
var inst_30544 = (state_30574[(2)]);
var state_30574__$1 = state_30574;
var statearr_30591_30637 = state_30574__$1;
(statearr_30591_30637[(2)] = inst_30544);

(statearr_30591_30637[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30575 === (6))){
var inst_30493 = (state_30574[(7)]);
var state_30574__$1 = state_30574;
var statearr_30592_30638 = state_30574__$1;
(statearr_30592_30638[(2)] = inst_30493);

(statearr_30592_30638[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30575 === (28))){
var inst_30540 = (state_30574[(2)]);
var inst_30541 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30542 = figwheel.client.heads_up.display_warning.call(null,inst_30541);
var state_30574__$1 = (function (){var statearr_30593 = state_30574;
(statearr_30593[(8)] = inst_30540);

return statearr_30593;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30574__$1,(29),inst_30542);
} else {
if((state_val_30575 === (25))){
var inst_30538 = figwheel.client.heads_up.clear.call(null);
var state_30574__$1 = state_30574;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30574__$1,(28),inst_30538);
} else {
if((state_val_30575 === (34))){
var inst_30555 = figwheel.client.heads_up.flash_loaded.call(null);
var state_30574__$1 = state_30574;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30574__$1,(37),inst_30555);
} else {
if((state_val_30575 === (17))){
var inst_30520 = (state_30574[(2)]);
var state_30574__$1 = state_30574;
var statearr_30594_30639 = state_30574__$1;
(statearr_30594_30639[(2)] = inst_30520);

(statearr_30594_30639[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30575 === (3))){
var inst_30510 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_30574__$1 = state_30574;
if(cljs.core.truth_(inst_30510)){
var statearr_30595_30640 = state_30574__$1;
(statearr_30595_30640[(1)] = (13));

} else {
var statearr_30596_30641 = state_30574__$1;
(statearr_30596_30641[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30575 === (12))){
var inst_30506 = (state_30574[(2)]);
var state_30574__$1 = state_30574;
var statearr_30597_30642 = state_30574__$1;
(statearr_30597_30642[(2)] = inst_30506);

(statearr_30597_30642[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30575 === (2))){
var inst_30493 = (state_30574[(7)]);
var inst_30493__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_30574__$1 = (function (){var statearr_30598 = state_30574;
(statearr_30598[(7)] = inst_30493__$1);

return statearr_30598;
})();
if(cljs.core.truth_(inst_30493__$1)){
var statearr_30599_30643 = state_30574__$1;
(statearr_30599_30643[(1)] = (5));

} else {
var statearr_30600_30644 = state_30574__$1;
(statearr_30600_30644[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30575 === (23))){
var inst_30536 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_30574__$1 = state_30574;
if(cljs.core.truth_(inst_30536)){
var statearr_30601_30645 = state_30574__$1;
(statearr_30601_30645[(1)] = (25));

} else {
var statearr_30602_30646 = state_30574__$1;
(statearr_30602_30646[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30575 === (35))){
var state_30574__$1 = state_30574;
var statearr_30603_30647 = state_30574__$1;
(statearr_30603_30647[(2)] = null);

(statearr_30603_30647[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30575 === (19))){
var inst_30531 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_30574__$1 = state_30574;
if(cljs.core.truth_(inst_30531)){
var statearr_30604_30648 = state_30574__$1;
(statearr_30604_30648[(1)] = (22));

} else {
var statearr_30605_30649 = state_30574__$1;
(statearr_30605_30649[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30575 === (11))){
var inst_30502 = (state_30574[(2)]);
var state_30574__$1 = state_30574;
var statearr_30606_30650 = state_30574__$1;
(statearr_30606_30650[(2)] = inst_30502);

(statearr_30606_30650[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30575 === (9))){
var inst_30504 = figwheel.client.heads_up.clear.call(null);
var state_30574__$1 = state_30574;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30574__$1,(12),inst_30504);
} else {
if((state_val_30575 === (5))){
var inst_30495 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_30574__$1 = state_30574;
var statearr_30607_30651 = state_30574__$1;
(statearr_30607_30651[(2)] = inst_30495);

(statearr_30607_30651[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30575 === (14))){
var inst_30522 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_30574__$1 = state_30574;
if(cljs.core.truth_(inst_30522)){
var statearr_30608_30652 = state_30574__$1;
(statearr_30608_30652[(1)] = (18));

} else {
var statearr_30609_30653 = state_30574__$1;
(statearr_30609_30653[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30575 === (26))){
var inst_30546 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_30574__$1 = state_30574;
if(cljs.core.truth_(inst_30546)){
var statearr_30610_30654 = state_30574__$1;
(statearr_30610_30654[(1)] = (30));

} else {
var statearr_30611_30655 = state_30574__$1;
(statearr_30611_30655[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30575 === (16))){
var inst_30514 = (state_30574[(2)]);
var inst_30515 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30516 = figwheel.client.format_messages.call(null,inst_30515);
var inst_30517 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30518 = figwheel.client.heads_up.display_error.call(null,inst_30516,inst_30517);
var state_30574__$1 = (function (){var statearr_30612 = state_30574;
(statearr_30612[(9)] = inst_30514);

return statearr_30612;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30574__$1,(17),inst_30518);
} else {
if((state_val_30575 === (30))){
var inst_30548 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30549 = figwheel.client.heads_up.display_warning.call(null,inst_30548);
var state_30574__$1 = state_30574;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30574__$1,(33),inst_30549);
} else {
if((state_val_30575 === (10))){
var inst_30508 = (state_30574[(2)]);
var state_30574__$1 = state_30574;
var statearr_30613_30656 = state_30574__$1;
(statearr_30613_30656[(2)] = inst_30508);

(statearr_30613_30656[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30575 === (18))){
var inst_30524 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30525 = figwheel.client.format_messages.call(null,inst_30524);
var inst_30526 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30527 = figwheel.client.heads_up.display_error.call(null,inst_30525,inst_30526);
var state_30574__$1 = state_30574;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30574__$1,(21),inst_30527);
} else {
if((state_val_30575 === (37))){
var inst_30557 = (state_30574[(2)]);
var state_30574__$1 = state_30574;
var statearr_30614_30657 = state_30574__$1;
(statearr_30614_30657[(2)] = inst_30557);

(statearr_30614_30657[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30575 === (8))){
var inst_30500 = figwheel.client.heads_up.flash_loaded.call(null);
var state_30574__$1 = state_30574;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30574__$1,(11),inst_30500);
} else {
return null;
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
});})(c__24367__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__24255__auto__,c__24367__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24256__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24256__auto____0 = (function (){
var statearr_30618 = [null,null,null,null,null,null,null,null,null,null];
(statearr_30618[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24256__auto__);

(statearr_30618[(1)] = (1));

return statearr_30618;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24256__auto____1 = (function (state_30574){
while(true){
var ret_value__24257__auto__ = (function (){try{while(true){
var result__24258__auto__ = switch__24255__auto__.call(null,state_30574);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24258__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24258__auto__;
}
break;
}
}catch (e30619){if((e30619 instanceof Object)){
var ex__24259__auto__ = e30619;
var statearr_30620_30658 = state_30574;
(statearr_30620_30658[(5)] = ex__24259__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30574);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30619;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24257__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30659 = state_30574;
state_30574 = G__30659;
continue;
} else {
return ret_value__24257__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24256__auto__ = function(state_30574){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24256__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24256__auto____1.call(this,state_30574);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24256__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24256__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24256__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24256__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24256__auto__;
})()
;})(switch__24255__auto__,c__24367__auto__,msg_hist,msg_names,msg))
})();
var state__24369__auto__ = (function (){var statearr_30621 = f__24368__auto__.call(null);
(statearr_30621[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24367__auto__);

return statearr_30621;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24369__auto__);
});})(c__24367__auto__,msg_hist,msg_names,msg))
);

return c__24367__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__24367__auto___30722 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24367__auto___30722,ch){
return (function (){
var f__24368__auto__ = (function (){var switch__24255__auto__ = ((function (c__24367__auto___30722,ch){
return (function (state_30705){
var state_val_30706 = (state_30705[(1)]);
if((state_val_30706 === (1))){
var state_30705__$1 = state_30705;
var statearr_30707_30723 = state_30705__$1;
(statearr_30707_30723[(2)] = null);

(statearr_30707_30723[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30706 === (2))){
var state_30705__$1 = state_30705;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30705__$1,(4),ch);
} else {
if((state_val_30706 === (3))){
var inst_30703 = (state_30705[(2)]);
var state_30705__$1 = state_30705;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30705__$1,inst_30703);
} else {
if((state_val_30706 === (4))){
var inst_30693 = (state_30705[(7)]);
var inst_30693__$1 = (state_30705[(2)]);
var state_30705__$1 = (function (){var statearr_30708 = state_30705;
(statearr_30708[(7)] = inst_30693__$1);

return statearr_30708;
})();
if(cljs.core.truth_(inst_30693__$1)){
var statearr_30709_30724 = state_30705__$1;
(statearr_30709_30724[(1)] = (5));

} else {
var statearr_30710_30725 = state_30705__$1;
(statearr_30710_30725[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30706 === (5))){
var inst_30693 = (state_30705[(7)]);
var inst_30695 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_30693);
var state_30705__$1 = state_30705;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30705__$1,(8),inst_30695);
} else {
if((state_val_30706 === (6))){
var state_30705__$1 = state_30705;
var statearr_30711_30726 = state_30705__$1;
(statearr_30711_30726[(2)] = null);

(statearr_30711_30726[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30706 === (7))){
var inst_30701 = (state_30705[(2)]);
var state_30705__$1 = state_30705;
var statearr_30712_30727 = state_30705__$1;
(statearr_30712_30727[(2)] = inst_30701);

(statearr_30712_30727[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30706 === (8))){
var inst_30697 = (state_30705[(2)]);
var state_30705__$1 = (function (){var statearr_30713 = state_30705;
(statearr_30713[(8)] = inst_30697);

return statearr_30713;
})();
var statearr_30714_30728 = state_30705__$1;
(statearr_30714_30728[(2)] = null);

(statearr_30714_30728[(1)] = (2));


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
}
});})(c__24367__auto___30722,ch))
;
return ((function (switch__24255__auto__,c__24367__auto___30722,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__24256__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__24256__auto____0 = (function (){
var statearr_30718 = [null,null,null,null,null,null,null,null,null];
(statearr_30718[(0)] = figwheel$client$heads_up_plugin_$_state_machine__24256__auto__);

(statearr_30718[(1)] = (1));

return statearr_30718;
});
var figwheel$client$heads_up_plugin_$_state_machine__24256__auto____1 = (function (state_30705){
while(true){
var ret_value__24257__auto__ = (function (){try{while(true){
var result__24258__auto__ = switch__24255__auto__.call(null,state_30705);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24258__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24258__auto__;
}
break;
}
}catch (e30719){if((e30719 instanceof Object)){
var ex__24259__auto__ = e30719;
var statearr_30720_30729 = state_30705;
(statearr_30720_30729[(5)] = ex__24259__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30705);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30719;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24257__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30730 = state_30705;
state_30705 = G__30730;
continue;
} else {
return ret_value__24257__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__24256__auto__ = function(state_30705){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__24256__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__24256__auto____1.call(this,state_30705);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__24256__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__24256__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__24256__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__24256__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__24256__auto__;
})()
;})(switch__24255__auto__,c__24367__auto___30722,ch))
})();
var state__24369__auto__ = (function (){var statearr_30721 = f__24368__auto__.call(null);
(statearr_30721[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24367__auto___30722);

return statearr_30721;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24369__auto__);
});})(c__24367__auto___30722,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__24367__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24367__auto__){
return (function (){
var f__24368__auto__ = (function (){var switch__24255__auto__ = ((function (c__24367__auto__){
return (function (state_30751){
var state_val_30752 = (state_30751[(1)]);
if((state_val_30752 === (1))){
var inst_30746 = cljs.core.async.timeout.call(null,(3000));
var state_30751__$1 = state_30751;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30751__$1,(2),inst_30746);
} else {
if((state_val_30752 === (2))){
var inst_30748 = (state_30751[(2)]);
var inst_30749 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_30751__$1 = (function (){var statearr_30753 = state_30751;
(statearr_30753[(7)] = inst_30748);

return statearr_30753;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30751__$1,inst_30749);
} else {
return null;
}
}
});})(c__24367__auto__))
;
return ((function (switch__24255__auto__,c__24367__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__24256__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__24256__auto____0 = (function (){
var statearr_30757 = [null,null,null,null,null,null,null,null];
(statearr_30757[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__24256__auto__);

(statearr_30757[(1)] = (1));

return statearr_30757;
});
var figwheel$client$enforce_project_plugin_$_state_machine__24256__auto____1 = (function (state_30751){
while(true){
var ret_value__24257__auto__ = (function (){try{while(true){
var result__24258__auto__ = switch__24255__auto__.call(null,state_30751);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24258__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24258__auto__;
}
break;
}
}catch (e30758){if((e30758 instanceof Object)){
var ex__24259__auto__ = e30758;
var statearr_30759_30761 = state_30751;
(statearr_30759_30761[(5)] = ex__24259__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30751);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30758;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24257__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30762 = state_30751;
state_30751 = G__30762;
continue;
} else {
return ret_value__24257__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__24256__auto__ = function(state_30751){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__24256__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__24256__auto____1.call(this,state_30751);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__24256__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__24256__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__24256__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__24256__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__24256__auto__;
})()
;})(switch__24255__auto__,c__24367__auto__))
})();
var state__24369__auto__ = (function (){var statearr_30760 = f__24368__auto__.call(null);
(statearr_30760[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24367__auto__);

return statearr_30760;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24369__auto__);
});})(c__24367__auto__))
);

return c__24367__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__30763){
var map__30770 = p__30763;
var map__30770__$1 = ((((!((map__30770 == null)))?((((map__30770.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30770.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30770):map__30770);
var ed = map__30770__$1;
var formatted_exception = cljs.core.get.call(null,map__30770__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__30770__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__30770__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__30772_30776 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__30773_30777 = null;
var count__30774_30778 = (0);
var i__30775_30779 = (0);
while(true){
if((i__30775_30779 < count__30774_30778)){
var msg_30780 = cljs.core._nth.call(null,chunk__30773_30777,i__30775_30779);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_30780);

var G__30781 = seq__30772_30776;
var G__30782 = chunk__30773_30777;
var G__30783 = count__30774_30778;
var G__30784 = (i__30775_30779 + (1));
seq__30772_30776 = G__30781;
chunk__30773_30777 = G__30782;
count__30774_30778 = G__30783;
i__30775_30779 = G__30784;
continue;
} else {
var temp__4425__auto___30785 = cljs.core.seq.call(null,seq__30772_30776);
if(temp__4425__auto___30785){
var seq__30772_30786__$1 = temp__4425__auto___30785;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30772_30786__$1)){
var c__21296__auto___30787 = cljs.core.chunk_first.call(null,seq__30772_30786__$1);
var G__30788 = cljs.core.chunk_rest.call(null,seq__30772_30786__$1);
var G__30789 = c__21296__auto___30787;
var G__30790 = cljs.core.count.call(null,c__21296__auto___30787);
var G__30791 = (0);
seq__30772_30776 = G__30788;
chunk__30773_30777 = G__30789;
count__30774_30778 = G__30790;
i__30775_30779 = G__30791;
continue;
} else {
var msg_30792 = cljs.core.first.call(null,seq__30772_30786__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_30792);

var G__30793 = cljs.core.next.call(null,seq__30772_30786__$1);
var G__30794 = null;
var G__30795 = (0);
var G__30796 = (0);
seq__30772_30776 = G__30793;
chunk__30773_30777 = G__30794;
count__30774_30778 = G__30795;
i__30775_30779 = G__30796;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__30797){
var map__30800 = p__30797;
var map__30800__$1 = ((((!((map__30800 == null)))?((((map__30800.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30800.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30800):map__30800);
var w = map__30800__$1;
var message = cljs.core.get.call(null,map__30800__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,true,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__20481__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__20481__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__20481__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__30808 = cljs.core.seq.call(null,plugins);
var chunk__30809 = null;
var count__30810 = (0);
var i__30811 = (0);
while(true){
if((i__30811 < count__30810)){
var vec__30812 = cljs.core._nth.call(null,chunk__30809,i__30811);
var k = cljs.core.nth.call(null,vec__30812,(0),null);
var plugin = cljs.core.nth.call(null,vec__30812,(1),null);
if(cljs.core.truth_(plugin)){
var pl_30814 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__30808,chunk__30809,count__30810,i__30811,pl_30814,vec__30812,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_30814.call(null,msg_hist);
});})(seq__30808,chunk__30809,count__30810,i__30811,pl_30814,vec__30812,k,plugin))
);
} else {
}

var G__30815 = seq__30808;
var G__30816 = chunk__30809;
var G__30817 = count__30810;
var G__30818 = (i__30811 + (1));
seq__30808 = G__30815;
chunk__30809 = G__30816;
count__30810 = G__30817;
i__30811 = G__30818;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__30808);
if(temp__4425__auto__){
var seq__30808__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30808__$1)){
var c__21296__auto__ = cljs.core.chunk_first.call(null,seq__30808__$1);
var G__30819 = cljs.core.chunk_rest.call(null,seq__30808__$1);
var G__30820 = c__21296__auto__;
var G__30821 = cljs.core.count.call(null,c__21296__auto__);
var G__30822 = (0);
seq__30808 = G__30819;
chunk__30809 = G__30820;
count__30810 = G__30821;
i__30811 = G__30822;
continue;
} else {
var vec__30813 = cljs.core.first.call(null,seq__30808__$1);
var k = cljs.core.nth.call(null,vec__30813,(0),null);
var plugin = cljs.core.nth.call(null,vec__30813,(1),null);
if(cljs.core.truth_(plugin)){
var pl_30823 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__30808,chunk__30809,count__30810,i__30811,pl_30823,vec__30813,k,plugin,seq__30808__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_30823.call(null,msg_hist);
});})(seq__30808,chunk__30809,count__30810,i__30811,pl_30823,vec__30813,k,plugin,seq__30808__$1,temp__4425__auto__))
);
} else {
}

var G__30824 = cljs.core.next.call(null,seq__30808__$1);
var G__30825 = null;
var G__30826 = (0);
var G__30827 = (0);
seq__30808 = G__30824;
chunk__30809 = G__30825;
count__30810 = G__30826;
i__30811 = G__30827;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args30828 = [];
var len__21551__auto___30831 = arguments.length;
var i__21552__auto___30832 = (0);
while(true){
if((i__21552__auto___30832 < len__21551__auto___30831)){
args30828.push((arguments[i__21552__auto___30832]));

var G__30833 = (i__21552__auto___30832 + (1));
i__21552__auto___30832 = G__30833;
continue;
} else {
}
break;
}

var G__30830 = args30828.length;
switch (G__30830) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30828.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__21558__auto__ = [];
var len__21551__auto___30839 = arguments.length;
var i__21552__auto___30840 = (0);
while(true){
if((i__21552__auto___30840 < len__21551__auto___30839)){
args__21558__auto__.push((arguments[i__21552__auto___30840]));

var G__30841 = (i__21552__auto___30840 + (1));
i__21552__auto___30840 = G__30841;
continue;
} else {
}
break;
}

var argseq__21559__auto__ = ((((0) < args__21558__auto__.length))?(new cljs.core.IndexedSeq(args__21558__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__21559__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__30836){
var map__30837 = p__30836;
var map__30837__$1 = ((((!((map__30837 == null)))?((((map__30837.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30837.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30837):map__30837);
var opts = map__30837__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq30835){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30835));
});

//# sourceMappingURL=client.js.map