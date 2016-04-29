// Compiled by ClojureScript 1.7.170 {}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null).call(null,e.target.readyState);
});
XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__22053,handler){
var map__22054 = p__22053;
var map__22054__$1 = ((((!((map__22054 == null)))?((((map__22054.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22054.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22054):map__22054);
var uri = cljs.core.get.call(null,map__22054__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__22054__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__22054__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__22054__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__22054__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__22054__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__22054__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__22054,map__22054__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__22052_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__22052_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
});})(this$__$1,map__22054,map__22054__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__4425__auto___22062 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__4425__auto___22062)){
var response_type_22063 = temp__4425__auto___22062;
this$__$1.responseType = cljs.core.name.call(null,response_type_22063);
} else {
}

var seq__22056_22064 = cljs.core.seq.call(null,headers);
var chunk__22057_22065 = null;
var count__22058_22066 = (0);
var i__22059_22067 = (0);
while(true){
if((i__22059_22067 < count__22058_22066)){
var vec__22060_22068 = cljs.core._nth.call(null,chunk__22057_22065,i__22059_22067);
var k_22069 = cljs.core.nth.call(null,vec__22060_22068,(0),null);
var v_22070 = cljs.core.nth.call(null,vec__22060_22068,(1),null);
this$__$1.setRequestHeader(k_22069,v_22070);

var G__22071 = seq__22056_22064;
var G__22072 = chunk__22057_22065;
var G__22073 = count__22058_22066;
var G__22074 = (i__22059_22067 + (1));
seq__22056_22064 = G__22071;
chunk__22057_22065 = G__22072;
count__22058_22066 = G__22073;
i__22059_22067 = G__22074;
continue;
} else {
var temp__4425__auto___22075 = cljs.core.seq.call(null,seq__22056_22064);
if(temp__4425__auto___22075){
var seq__22056_22076__$1 = temp__4425__auto___22075;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22056_22076__$1)){
var c__21296__auto___22077 = cljs.core.chunk_first.call(null,seq__22056_22076__$1);
var G__22078 = cljs.core.chunk_rest.call(null,seq__22056_22076__$1);
var G__22079 = c__21296__auto___22077;
var G__22080 = cljs.core.count.call(null,c__21296__auto___22077);
var G__22081 = (0);
seq__22056_22064 = G__22078;
chunk__22057_22065 = G__22079;
count__22058_22066 = G__22080;
i__22059_22067 = G__22081;
continue;
} else {
var vec__22061_22082 = cljs.core.first.call(null,seq__22056_22076__$1);
var k_22083 = cljs.core.nth.call(null,vec__22061_22082,(0),null);
var v_22084 = cljs.core.nth.call(null,vec__22061_22082,(1),null);
this$__$1.setRequestHeader(k_22083,v_22084);

var G__22085 = cljs.core.next.call(null,seq__22056_22076__$1);
var G__22086 = null;
var G__22087 = (0);
var G__22088 = (0);
seq__22056_22064 = G__22085;
chunk__22057_22065 = G__22086;
count__22058_22066 = G__22087;
i__22059_22067 = G__22088;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__20493__auto__ = body;
if(cljs.core.truth_(or__20493__auto__)){
return or__20493__auto__;
} else {
return "";
}
})());

return this$__$1;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxRequest$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.call(null,(0),this$__$1.readyState);
});

//# sourceMappingURL=xml_http_request.js.map