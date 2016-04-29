// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('cljs.core.async');
goog.require('goog.string');
figwheel.client.heads_up.clear;

figwheel.client.heads_up.cljs_logo_svg;
figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(var_args){
var args__21558__auto__ = [];
var len__21551__auto___29885 = arguments.length;
var i__21552__auto___29886 = (0);
while(true){
if((i__21552__auto___29886 < len__21551__auto___29885)){
args__21558__auto__.push((arguments[i__21552__auto___29886]));

var G__29887 = (i__21552__auto___29886 + (1));
i__21552__auto___29886 = G__29887;
continue;
} else {
}
break;
}

var argseq__21559__auto__ = ((((2) < args__21558__auto__.length))?(new cljs.core.IndexedSeq(args__21558__auto__.slice((2)),(0))):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__21559__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__29877_29888 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__29878_29889 = null;
var count__29879_29890 = (0);
var i__29880_29891 = (0);
while(true){
if((i__29880_29891 < count__29879_29890)){
var k_29892 = cljs.core._nth.call(null,chunk__29878_29889,i__29880_29891);
e.setAttribute(cljs.core.name.call(null,k_29892),cljs.core.get.call(null,attrs,k_29892));

var G__29893 = seq__29877_29888;
var G__29894 = chunk__29878_29889;
var G__29895 = count__29879_29890;
var G__29896 = (i__29880_29891 + (1));
seq__29877_29888 = G__29893;
chunk__29878_29889 = G__29894;
count__29879_29890 = G__29895;
i__29880_29891 = G__29896;
continue;
} else {
var temp__4425__auto___29897 = cljs.core.seq.call(null,seq__29877_29888);
if(temp__4425__auto___29897){
var seq__29877_29898__$1 = temp__4425__auto___29897;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29877_29898__$1)){
var c__21296__auto___29899 = cljs.core.chunk_first.call(null,seq__29877_29898__$1);
var G__29900 = cljs.core.chunk_rest.call(null,seq__29877_29898__$1);
var G__29901 = c__21296__auto___29899;
var G__29902 = cljs.core.count.call(null,c__21296__auto___29899);
var G__29903 = (0);
seq__29877_29888 = G__29900;
chunk__29878_29889 = G__29901;
count__29879_29890 = G__29902;
i__29880_29891 = G__29903;
continue;
} else {
var k_29904 = cljs.core.first.call(null,seq__29877_29898__$1);
e.setAttribute(cljs.core.name.call(null,k_29904),cljs.core.get.call(null,attrs,k_29904));

var G__29905 = cljs.core.next.call(null,seq__29877_29898__$1);
var G__29906 = null;
var G__29907 = (0);
var G__29908 = (0);
seq__29877_29888 = G__29905;
chunk__29878_29889 = G__29906;
count__29879_29890 = G__29907;
i__29880_29891 = G__29908;
continue;
}
} else {
}
}
break;
}

var seq__29881_29909 = cljs.core.seq.call(null,children);
var chunk__29882_29910 = null;
var count__29883_29911 = (0);
var i__29884_29912 = (0);
while(true){
if((i__29884_29912 < count__29883_29911)){
var ch_29913 = cljs.core._nth.call(null,chunk__29882_29910,i__29884_29912);
e.appendChild(ch_29913);

var G__29914 = seq__29881_29909;
var G__29915 = chunk__29882_29910;
var G__29916 = count__29883_29911;
var G__29917 = (i__29884_29912 + (1));
seq__29881_29909 = G__29914;
chunk__29882_29910 = G__29915;
count__29883_29911 = G__29916;
i__29884_29912 = G__29917;
continue;
} else {
var temp__4425__auto___29918 = cljs.core.seq.call(null,seq__29881_29909);
if(temp__4425__auto___29918){
var seq__29881_29919__$1 = temp__4425__auto___29918;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29881_29919__$1)){
var c__21296__auto___29920 = cljs.core.chunk_first.call(null,seq__29881_29919__$1);
var G__29921 = cljs.core.chunk_rest.call(null,seq__29881_29919__$1);
var G__29922 = c__21296__auto___29920;
var G__29923 = cljs.core.count.call(null,c__21296__auto___29920);
var G__29924 = (0);
seq__29881_29909 = G__29921;
chunk__29882_29910 = G__29922;
count__29883_29911 = G__29923;
i__29884_29912 = G__29924;
continue;
} else {
var ch_29925 = cljs.core.first.call(null,seq__29881_29919__$1);
e.appendChild(ch_29925);

var G__29926 = cljs.core.next.call(null,seq__29881_29919__$1);
var G__29927 = null;
var G__29928 = (0);
var G__29929 = (0);
seq__29881_29909 = G__29926;
chunk__29882_29910 = G__29927;
count__29883_29911 = G__29928;
i__29884_29912 = G__29929;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq29874){
var G__29875 = cljs.core.first.call(null,seq29874);
var seq29874__$1 = cljs.core.next.call(null,seq29874);
var G__29876 = cljs.core.first.call(null,seq29874__$1);
var seq29874__$2 = cljs.core.next.call(null,seq29874__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__29875,G__29876,seq29874__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__21406__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__21407__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__21408__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__21409__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__21410__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__21406__auto__,prefer_table__21407__auto__,method_cache__21408__auto__,cached_hierarchy__21409__auto__,hierarchy__21410__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__21406__auto__,prefer_table__21407__auto__,method_cache__21408__auto__,cached_hierarchy__21409__auto__,hierarchy__21410__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__21410__auto__,method_table__21406__auto__,prefer_table__21407__auto__,method_cache__21408__auto__,cached_hierarchy__21409__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_29930 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_29930.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_29930.innerHTML = figwheel.client.heads_up.cljs_logo_svg;

el_29930.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_29930);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__29931,st_map){
var map__29936 = p__29931;
var map__29936__$1 = ((((!((map__29936 == null)))?((((map__29936.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29936.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29936):map__29936);
var container_el = cljs.core.get.call(null,map__29936__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__29936,map__29936__$1,container_el){
return (function (p__29938){
var vec__29939 = p__29938;
var k = cljs.core.nth.call(null,vec__29939,(0),null);
var v = cljs.core.nth.call(null,vec__29939,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__29936,map__29936__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__29940,dom_str){
var map__29943 = p__29940;
var map__29943__$1 = ((((!((map__29943 == null)))?((((map__29943.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29943.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29943):map__29943);
var c = map__29943__$1;
var content_area_el = cljs.core.get.call(null,map__29943__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__29945){
var map__29948 = p__29945;
var map__29948__$1 = ((((!((map__29948 == null)))?((((map__29948.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29948.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29948):map__29948);
var content_area_el = cljs.core.get.call(null,map__29948__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__24367__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24367__auto__){
return (function (){
var f__24368__auto__ = (function (){var switch__24255__auto__ = ((function (c__24367__auto__){
return (function (state_29991){
var state_val_29992 = (state_29991[(1)]);
if((state_val_29992 === (1))){
var inst_29976 = (state_29991[(7)]);
var inst_29976__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_29977 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_29978 = ["10px","10px","100%","68px","1.0"];
var inst_29979 = cljs.core.PersistentHashMap.fromArrays(inst_29977,inst_29978);
var inst_29980 = cljs.core.merge.call(null,inst_29979,style);
var inst_29981 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_29976__$1,inst_29980);
var inst_29982 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_29976__$1,msg);
var inst_29983 = cljs.core.async.timeout.call(null,(300));
var state_29991__$1 = (function (){var statearr_29993 = state_29991;
(statearr_29993[(8)] = inst_29982);

(statearr_29993[(7)] = inst_29976__$1);

(statearr_29993[(9)] = inst_29981);

return statearr_29993;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29991__$1,(2),inst_29983);
} else {
if((state_val_29992 === (2))){
var inst_29976 = (state_29991[(7)]);
var inst_29985 = (state_29991[(2)]);
var inst_29986 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_29987 = ["auto"];
var inst_29988 = cljs.core.PersistentHashMap.fromArrays(inst_29986,inst_29987);
var inst_29989 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_29976,inst_29988);
var state_29991__$1 = (function (){var statearr_29994 = state_29991;
(statearr_29994[(10)] = inst_29985);

return statearr_29994;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29991__$1,inst_29989);
} else {
return null;
}
}
});})(c__24367__auto__))
;
return ((function (switch__24255__auto__,c__24367__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__24256__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__24256__auto____0 = (function (){
var statearr_29998 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29998[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__24256__auto__);

(statearr_29998[(1)] = (1));

return statearr_29998;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__24256__auto____1 = (function (state_29991){
while(true){
var ret_value__24257__auto__ = (function (){try{while(true){
var result__24258__auto__ = switch__24255__auto__.call(null,state_29991);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24258__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24258__auto__;
}
break;
}
}catch (e29999){if((e29999 instanceof Object)){
var ex__24259__auto__ = e29999;
var statearr_30000_30002 = state_29991;
(statearr_30000_30002[(5)] = ex__24259__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29991);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29999;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24257__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30003 = state_29991;
state_29991 = G__30003;
continue;
} else {
return ret_value__24257__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__24256__auto__ = function(state_29991){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__24256__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__24256__auto____1.call(this,state_29991);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__24256__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__24256__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__24256__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__24256__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__24256__auto__;
})()
;})(switch__24255__auto__,c__24367__auto__))
})();
var state__24369__auto__ = (function (){var statearr_30001 = f__24368__auto__.call(null);
(statearr_30001[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24367__auto__);

return statearr_30001;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24369__auto__);
});})(c__24367__auto__))
);

return c__24367__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function figwheel$client$heads_up$file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg){
var msg__$1 = goog.string.htmlEscape(msg);
var temp__4423__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg__$1);
if(cljs.core.truth_(temp__4423__auto__)){
var vec__30005 = temp__4423__auto__;
var f = cljs.core.nth.call(null,vec__30005,(0),null);
var ln = cljs.core.nth.call(null,vec__30005,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg__$1);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg__$1),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__30008 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__30008,(0),null);
var file_line = cljs.core.nth.call(null,vec__30008,(1),null);
var file_column = cljs.core.nth.call(null,vec__30008,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__30008,file_name,file_line,file_column){
return (function (p1__30006_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(goog.string.htmlEscape(p1__30006_SHARP_)),cljs.core.str("</div>")].join('');
});})(vec__30008,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__20493__auto__ = file_line;
if(cljs.core.truth_(or__20493__auto__)){
return or__20493__auto__;
} else {
var and__20481__auto__ = cause;
if(cljs.core.truth_(and__20481__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__20481__auto__;
}
}
})(),[cljs.core.str(msg),cljs.core.str((cljs.core.truth_(cause)?[cljs.core.str("Error on file "),cljs.core.str(goog.string.htmlEscape(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause))),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''):""))].join('')))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function figwheel$client$heads_up$append_message(message){
var map__30011 = figwheel.client.heads_up.ensure_container.call(null);
var map__30011__$1 = ((((!((map__30011 == null)))?((((map__30011.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30011.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30011):map__30011);
var content_area_el = cljs.core.get.call(null,map__30011__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__24367__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24367__auto__){
return (function (){
var f__24368__auto__ = (function (){var switch__24255__auto__ = ((function (c__24367__auto__){
return (function (state_30059){
var state_val_30060 = (state_30059[(1)]);
if((state_val_30060 === (1))){
var inst_30042 = (state_30059[(7)]);
var inst_30042__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_30043 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_30044 = ["0.0"];
var inst_30045 = cljs.core.PersistentHashMap.fromArrays(inst_30043,inst_30044);
var inst_30046 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_30042__$1,inst_30045);
var inst_30047 = cljs.core.async.timeout.call(null,(300));
var state_30059__$1 = (function (){var statearr_30061 = state_30059;
(statearr_30061[(8)] = inst_30046);

(statearr_30061[(7)] = inst_30042__$1);

return statearr_30061;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30059__$1,(2),inst_30047);
} else {
if((state_val_30060 === (2))){
var inst_30042 = (state_30059[(7)]);
var inst_30049 = (state_30059[(2)]);
var inst_30050 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_30051 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_30052 = cljs.core.PersistentHashMap.fromArrays(inst_30050,inst_30051);
var inst_30053 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_30042,inst_30052);
var inst_30054 = cljs.core.async.timeout.call(null,(200));
var state_30059__$1 = (function (){var statearr_30062 = state_30059;
(statearr_30062[(9)] = inst_30053);

(statearr_30062[(10)] = inst_30049);

return statearr_30062;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30059__$1,(3),inst_30054);
} else {
if((state_val_30060 === (3))){
var inst_30042 = (state_30059[(7)]);
var inst_30056 = (state_30059[(2)]);
var inst_30057 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_30042,"");
var state_30059__$1 = (function (){var statearr_30063 = state_30059;
(statearr_30063[(11)] = inst_30056);

return statearr_30063;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30059__$1,inst_30057);
} else {
return null;
}
}
}
});})(c__24367__auto__))
;
return ((function (switch__24255__auto__,c__24367__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__24256__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__24256__auto____0 = (function (){
var statearr_30067 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30067[(0)] = figwheel$client$heads_up$clear_$_state_machine__24256__auto__);

(statearr_30067[(1)] = (1));

return statearr_30067;
});
var figwheel$client$heads_up$clear_$_state_machine__24256__auto____1 = (function (state_30059){
while(true){
var ret_value__24257__auto__ = (function (){try{while(true){
var result__24258__auto__ = switch__24255__auto__.call(null,state_30059);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24258__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24258__auto__;
}
break;
}
}catch (e30068){if((e30068 instanceof Object)){
var ex__24259__auto__ = e30068;
var statearr_30069_30071 = state_30059;
(statearr_30069_30071[(5)] = ex__24259__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30059);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30068;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24257__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30072 = state_30059;
state_30059 = G__30072;
continue;
} else {
return ret_value__24257__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__24256__auto__ = function(state_30059){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__24256__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__24256__auto____1.call(this,state_30059);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__24256__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__24256__auto____0;
figwheel$client$heads_up$clear_$_state_machine__24256__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__24256__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__24256__auto__;
})()
;})(switch__24255__auto__,c__24367__auto__))
})();
var state__24369__auto__ = (function (){var statearr_30070 = f__24368__auto__.call(null);
(statearr_30070[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24367__auto__);

return statearr_30070;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24369__auto__);
});})(c__24367__auto__))
);

return c__24367__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__24367__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24367__auto__){
return (function (){
var f__24368__auto__ = (function (){var switch__24255__auto__ = ((function (c__24367__auto__){
return (function (state_30104){
var state_val_30105 = (state_30104[(1)]);
if((state_val_30105 === (1))){
var inst_30094 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_30104__$1 = state_30104;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30104__$1,(2),inst_30094);
} else {
if((state_val_30105 === (2))){
var inst_30096 = (state_30104[(2)]);
var inst_30097 = cljs.core.async.timeout.call(null,(400));
var state_30104__$1 = (function (){var statearr_30106 = state_30104;
(statearr_30106[(7)] = inst_30096);

return statearr_30106;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30104__$1,(3),inst_30097);
} else {
if((state_val_30105 === (3))){
var inst_30099 = (state_30104[(2)]);
var inst_30100 = figwheel.client.heads_up.clear.call(null);
var state_30104__$1 = (function (){var statearr_30107 = state_30104;
(statearr_30107[(8)] = inst_30099);

return statearr_30107;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30104__$1,(4),inst_30100);
} else {
if((state_val_30105 === (4))){
var inst_30102 = (state_30104[(2)]);
var state_30104__$1 = state_30104;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30104__$1,inst_30102);
} else {
return null;
}
}
}
}
});})(c__24367__auto__))
;
return ((function (switch__24255__auto__,c__24367__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__24256__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__24256__auto____0 = (function (){
var statearr_30111 = [null,null,null,null,null,null,null,null,null];
(statearr_30111[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__24256__auto__);

(statearr_30111[(1)] = (1));

return statearr_30111;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__24256__auto____1 = (function (state_30104){
while(true){
var ret_value__24257__auto__ = (function (){try{while(true){
var result__24258__auto__ = switch__24255__auto__.call(null,state_30104);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24258__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24258__auto__;
}
break;
}
}catch (e30112){if((e30112 instanceof Object)){
var ex__24259__auto__ = e30112;
var statearr_30113_30115 = state_30104;
(statearr_30113_30115[(5)] = ex__24259__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30104);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30112;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24257__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30116 = state_30104;
state_30104 = G__30116;
continue;
} else {
return ret_value__24257__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__24256__auto__ = function(state_30104){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__24256__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__24256__auto____1.call(this,state_30104);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__24256__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__24256__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__24256__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__24256__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__24256__auto__;
})()
;})(switch__24255__auto__,c__24367__auto__))
})();
var state__24369__auto__ = (function (){var statearr_30114 = f__24368__auto__.call(null);
(statearr_30114[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24367__auto__);

return statearr_30114;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24369__auto__);
});})(c__24367__auto__))
);

return c__24367__auto__;
});
figwheel.client.heads_up.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' style='position:absolute; top:9px; left: 10px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";

//# sourceMappingURL=heads_up.js.map