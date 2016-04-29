// Compiled by ClojureScript 1.7.170 {}
goog.provide('cognitect.transit');
goog.require('cljs.core');
goog.require('com.cognitect.transit');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit.eq');
goog.require('goog.math.Long');
cljs.core.UUID.prototype.cljs$core$IEquiv$ = true;

cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return (this$__$1.uuid === other.uuid);
} else {
if((other instanceof com.cognitect.transit.types.UUID)){
return (this$__$1.uuid === other.toString());
} else {
return false;

}
}
});
cljs.core.UUID.prototype.cljs$core$IComparable$ = true;

cljs.core.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});
goog.math.Long.prototype.cljs$core$IEquiv$ = true;

goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return cljs.core._equiv.call(null,other,this$__$1);
} else {
return this$__$1.equiv(other);
}
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});
goog.math.Long.prototype.cljs$core$IHash$ = true;

goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.hash.call(null,this$__$1.toString());
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (uuid,writer,_){
var uuid__$1 = this;
return cljs.core._write.call(null,writer,[cljs.core.str("#uuid \""),cljs.core.str(uuid__$1.toString()),cljs.core.str("\"")].join(''));
});
cognitect.transit.opts_merge = (function cognitect$transit$opts_merge(a,b){
var seq__22095_22099 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__22096_22100 = null;
var count__22097_22101 = (0);
var i__22098_22102 = (0);
while(true){
if((i__22098_22102 < count__22097_22101)){
var k_22103 = cljs.core._nth.call(null,chunk__22096_22100,i__22098_22102);
var v_22104 = (b[k_22103]);
(a[k_22103] = v_22104);

var G__22105 = seq__22095_22099;
var G__22106 = chunk__22096_22100;
var G__22107 = count__22097_22101;
var G__22108 = (i__22098_22102 + (1));
seq__22095_22099 = G__22105;
chunk__22096_22100 = G__22106;
count__22097_22101 = G__22107;
i__22098_22102 = G__22108;
continue;
} else {
var temp__4425__auto___22109 = cljs.core.seq.call(null,seq__22095_22099);
if(temp__4425__auto___22109){
var seq__22095_22110__$1 = temp__4425__auto___22109;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22095_22110__$1)){
var c__21296__auto___22111 = cljs.core.chunk_first.call(null,seq__22095_22110__$1);
var G__22112 = cljs.core.chunk_rest.call(null,seq__22095_22110__$1);
var G__22113 = c__21296__auto___22111;
var G__22114 = cljs.core.count.call(null,c__21296__auto___22111);
var G__22115 = (0);
seq__22095_22099 = G__22112;
chunk__22096_22100 = G__22113;
count__22097_22101 = G__22114;
i__22098_22102 = G__22115;
continue;
} else {
var k_22116 = cljs.core.first.call(null,seq__22095_22110__$1);
var v_22117 = (b[k_22116]);
(a[k_22116] = v_22117);

var G__22118 = cljs.core.next.call(null,seq__22095_22110__$1);
var G__22119 = null;
var G__22120 = (0);
var G__22121 = (0);
seq__22095_22099 = G__22118;
chunk__22096_22100 = G__22119;
count__22097_22101 = G__22120;
i__22098_22102 = G__22121;
continue;
}
} else {
}
}
break;
}

return a;
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapBuilder = (function (){
})
cognitect.transit.MapBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){
var self__ = this;
var _ = this;
return cljs.core.assoc_BANG_.call(null,m,k,v);
});

cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,m);
});

cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentArrayMap.fromArray.call(null,arr,true,true);
});

cognitect.transit.MapBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapBuilder.cljs$lang$type = true;

cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder";

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__21091__auto__,writer__21092__auto__,opt__21093__auto__){
return cljs.core._write.call(null,writer__21092__auto__,"cognitect.transit/MapBuilder");
});

cognitect.transit.__GT_MapBuilder = (function cognitect$transit$__GT_MapBuilder(){
return (new cognitect.transit.MapBuilder());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorBuilder = (function (){
})
cognitect.transit.VectorBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
});

cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){
var self__ = this;
var _ = this;
return cljs.core.conj_BANG_.call(null,v,x);
});

cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,v);
});

cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentVector.fromArray.call(null,arr,true);
});

cognitect.transit.VectorBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorBuilder.cljs$lang$type = true;

cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder";

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__21091__auto__,writer__21092__auto__,opt__21093__auto__){
return cljs.core._write.call(null,writer__21092__auto__,"cognitect.transit/VectorBuilder");
});

cognitect.transit.__GT_VectorBuilder = (function cognitect$transit$__GT_VectorBuilder(){
return (new cognitect.transit.VectorBuilder());
});

/**
 * Return a transit reader. type may be either :json or :json-verbose.
 * opts may be a map optionally containing a :handlers entry. The value
 * of :handlers should be map from tag to a decoder function which returns
 * then in-memory representation of the semantic transit value.
 */
cognitect.transit.reader = (function cognitect$transit$reader(var_args){
var args22122 = [];
var len__21551__auto___22125 = arguments.length;
var i__21552__auto___22126 = (0);
while(true){
if((i__21552__auto___22126 < len__21551__auto___22125)){
args22122.push((arguments[i__21552__auto___22126]));

var G__22127 = (i__21552__auto___22126 + (1));
i__21552__auto___22126 = G__22127;
continue;
} else {
}
break;
}

var G__22124 = args22122.length;
switch (G__22124) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22122.length)].join('')));

}
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.reader.call(null,type,null);
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
return com.cognitect.transit.reader.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"handlers": cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, ["$",(function (v){
return cljs.core.symbol.call(null,v);
}),":",(function (v){
return cljs.core.keyword.call(null,v);
}),"set",(function (v){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,v);
}),"list",(function (v){
return cljs.core.into.call(null,cljs.core.List.EMPTY,v.reverse());
}),"cmap",(function (v){
var i = (0);
var ret = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < v.length)){
var G__22129 = (i + (2));
var G__22130 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__22129;
ret = G__22130;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,ret);
}
break;
}
})], null),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts))), "mapBuilder": (new cognitect.transit.MapBuilder()), "arrayBuilder": (new cognitect.transit.VectorBuilder()), "prefersStrings": false},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.reader.cljs$lang$maxFixedArity = 2;
/**
 * Read a transit encoded string into ClojureScript values given a 
 * transit reader.
 */
cognitect.transit.read = (function cognitect$transit$read(r,str){
return r.read(str);
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.KeywordHandler = (function (){
})
cognitect.transit.KeywordHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return ":";
});

cognitect.transit.KeywordHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.KeywordHandler.cljs$lang$type = true;

cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "cognitect.transit/KeywordHandler";

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__21091__auto__,writer__21092__auto__,opt__21093__auto__){
return cljs.core._write.call(null,writer__21092__auto__,"cognitect.transit/KeywordHandler");
});

cognitect.transit.__GT_KeywordHandler = (function cognitect$transit$__GT_KeywordHandler(){
return (new cognitect.transit.KeywordHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SymbolHandler = (function (){
})
cognitect.transit.SymbolHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "$";
});

cognitect.transit.SymbolHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SymbolHandler.cljs$lang$type = true;

cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "cognitect.transit/SymbolHandler";

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__21091__auto__,writer__21092__auto__,opt__21093__auto__){
return cljs.core._write.call(null,writer__21092__auto__,"cognitect.transit/SymbolHandler");
});

cognitect.transit.__GT_SymbolHandler = (function cognitect$transit$__GT_SymbolHandler(){
return (new cognitect.transit.SymbolHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.ListHandler = (function (){
})
cognitect.transit.ListHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "list";
});

cognitect.transit.ListHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__22131_22135 = cljs.core.seq.call(null,v);
var chunk__22132_22136 = null;
var count__22133_22137 = (0);
var i__22134_22138 = (0);
while(true){
if((i__22134_22138 < count__22133_22137)){
var x_22139 = cljs.core._nth.call(null,chunk__22132_22136,i__22134_22138);
ret.push(x_22139);

var G__22140 = seq__22131_22135;
var G__22141 = chunk__22132_22136;
var G__22142 = count__22133_22137;
var G__22143 = (i__22134_22138 + (1));
seq__22131_22135 = G__22140;
chunk__22132_22136 = G__22141;
count__22133_22137 = G__22142;
i__22134_22138 = G__22143;
continue;
} else {
var temp__4425__auto___22144 = cljs.core.seq.call(null,seq__22131_22135);
if(temp__4425__auto___22144){
var seq__22131_22145__$1 = temp__4425__auto___22144;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22131_22145__$1)){
var c__21296__auto___22146 = cljs.core.chunk_first.call(null,seq__22131_22145__$1);
var G__22147 = cljs.core.chunk_rest.call(null,seq__22131_22145__$1);
var G__22148 = c__21296__auto___22146;
var G__22149 = cljs.core.count.call(null,c__21296__auto___22146);
var G__22150 = (0);
seq__22131_22135 = G__22147;
chunk__22132_22136 = G__22148;
count__22133_22137 = G__22149;
i__22134_22138 = G__22150;
continue;
} else {
var x_22151 = cljs.core.first.call(null,seq__22131_22145__$1);
ret.push(x_22151);

var G__22152 = cljs.core.next.call(null,seq__22131_22145__$1);
var G__22153 = null;
var G__22154 = (0);
var G__22155 = (0);
seq__22131_22135 = G__22152;
chunk__22132_22136 = G__22153;
count__22133_22137 = G__22154;
i__22134_22138 = G__22155;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.ListHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.ListHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.ListHandler.cljs$lang$type = true;

cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler";

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__21091__auto__,writer__21092__auto__,opt__21093__auto__){
return cljs.core._write.call(null,writer__21092__auto__,"cognitect.transit/ListHandler");
});

cognitect.transit.__GT_ListHandler = (function cognitect$transit$__GT_ListHandler(){
return (new cognitect.transit.ListHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapHandler = (function (){
})
cognitect.transit.MapHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "map";
});

cognitect.transit.MapHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v;
});

cognitect.transit.MapHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.MapHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapHandler.cljs$lang$type = true;

cognitect.transit.MapHandler.cljs$lang$ctorStr = "cognitect.transit/MapHandler";

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__21091__auto__,writer__21092__auto__,opt__21093__auto__){
return cljs.core._write.call(null,writer__21092__auto__,"cognitect.transit/MapHandler");
});

cognitect.transit.__GT_MapHandler = (function cognitect$transit$__GT_MapHandler(){
return (new cognitect.transit.MapHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SetHandler = (function (){
})
cognitect.transit.SetHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "set";
});

cognitect.transit.SetHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__22156_22160 = cljs.core.seq.call(null,v);
var chunk__22157_22161 = null;
var count__22158_22162 = (0);
var i__22159_22163 = (0);
while(true){
if((i__22159_22163 < count__22158_22162)){
var x_22164 = cljs.core._nth.call(null,chunk__22157_22161,i__22159_22163);
ret.push(x_22164);

var G__22165 = seq__22156_22160;
var G__22166 = chunk__22157_22161;
var G__22167 = count__22158_22162;
var G__22168 = (i__22159_22163 + (1));
seq__22156_22160 = G__22165;
chunk__22157_22161 = G__22166;
count__22158_22162 = G__22167;
i__22159_22163 = G__22168;
continue;
} else {
var temp__4425__auto___22169 = cljs.core.seq.call(null,seq__22156_22160);
if(temp__4425__auto___22169){
var seq__22156_22170__$1 = temp__4425__auto___22169;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22156_22170__$1)){
var c__21296__auto___22171 = cljs.core.chunk_first.call(null,seq__22156_22170__$1);
var G__22172 = cljs.core.chunk_rest.call(null,seq__22156_22170__$1);
var G__22173 = c__21296__auto___22171;
var G__22174 = cljs.core.count.call(null,c__21296__auto___22171);
var G__22175 = (0);
seq__22156_22160 = G__22172;
chunk__22157_22161 = G__22173;
count__22158_22162 = G__22174;
i__22159_22163 = G__22175;
continue;
} else {
var x_22176 = cljs.core.first.call(null,seq__22156_22170__$1);
ret.push(x_22176);

var G__22177 = cljs.core.next.call(null,seq__22156_22170__$1);
var G__22178 = null;
var G__22179 = (0);
var G__22180 = (0);
seq__22156_22160 = G__22177;
chunk__22157_22161 = G__22178;
count__22158_22162 = G__22179;
i__22159_22163 = G__22180;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.SetHandler.prototype.stringRep = (function (){
var self__ = this;
var v = this;
return null;
});

cognitect.transit.SetHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SetHandler.cljs$lang$type = true;

cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler";

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__21091__auto__,writer__21092__auto__,opt__21093__auto__){
return cljs.core._write.call(null,writer__21092__auto__,"cognitect.transit/SetHandler");
});

cognitect.transit.__GT_SetHandler = (function cognitect$transit$__GT_SetHandler(){
return (new cognitect.transit.SetHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorHandler = (function (){
})
cognitect.transit.VectorHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "array";
});

cognitect.transit.VectorHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__22181_22185 = cljs.core.seq.call(null,v);
var chunk__22182_22186 = null;
var count__22183_22187 = (0);
var i__22184_22188 = (0);
while(true){
if((i__22184_22188 < count__22183_22187)){
var x_22189 = cljs.core._nth.call(null,chunk__22182_22186,i__22184_22188);
ret.push(x_22189);

var G__22190 = seq__22181_22185;
var G__22191 = chunk__22182_22186;
var G__22192 = count__22183_22187;
var G__22193 = (i__22184_22188 + (1));
seq__22181_22185 = G__22190;
chunk__22182_22186 = G__22191;
count__22183_22187 = G__22192;
i__22184_22188 = G__22193;
continue;
} else {
var temp__4425__auto___22194 = cljs.core.seq.call(null,seq__22181_22185);
if(temp__4425__auto___22194){
var seq__22181_22195__$1 = temp__4425__auto___22194;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22181_22195__$1)){
var c__21296__auto___22196 = cljs.core.chunk_first.call(null,seq__22181_22195__$1);
var G__22197 = cljs.core.chunk_rest.call(null,seq__22181_22195__$1);
var G__22198 = c__21296__auto___22196;
var G__22199 = cljs.core.count.call(null,c__21296__auto___22196);
var G__22200 = (0);
seq__22181_22185 = G__22197;
chunk__22182_22186 = G__22198;
count__22183_22187 = G__22199;
i__22184_22188 = G__22200;
continue;
} else {
var x_22201 = cljs.core.first.call(null,seq__22181_22195__$1);
ret.push(x_22201);

var G__22202 = cljs.core.next.call(null,seq__22181_22195__$1);
var G__22203 = null;
var G__22204 = (0);
var G__22205 = (0);
seq__22181_22185 = G__22202;
chunk__22182_22186 = G__22203;
count__22183_22187 = G__22204;
i__22184_22188 = G__22205;
continue;
}
} else {
}
}
break;
}

return ret;
});

cognitect.transit.VectorHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.VectorHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorHandler.cljs$lang$type = true;

cognitect.transit.VectorHandler.cljs$lang$ctorStr = "cognitect.transit/VectorHandler";

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__21091__auto__,writer__21092__auto__,opt__21093__auto__){
return cljs.core._write.call(null,writer__21092__auto__,"cognitect.transit/VectorHandler");
});

cognitect.transit.__GT_VectorHandler = (function cognitect$transit$__GT_VectorHandler(){
return (new cognitect.transit.VectorHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.UUIDHandler = (function (){
})
cognitect.transit.UUIDHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "u";
});

cognitect.transit.UUIDHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.uuid;
});

cognitect.transit.UUIDHandler.prototype.stringRep = (function (v){
var self__ = this;
var this$ = this;
return this$.rep(v);
});

cognitect.transit.UUIDHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.UUIDHandler.cljs$lang$type = true;

cognitect.transit.UUIDHandler.cljs$lang$ctorStr = "cognitect.transit/UUIDHandler";

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__21091__auto__,writer__21092__auto__,opt__21093__auto__){
return cljs.core._write.call(null,writer__21092__auto__,"cognitect.transit/UUIDHandler");
});

cognitect.transit.__GT_UUIDHandler = (function cognitect$transit$__GT_UUIDHandler(){
return (new cognitect.transit.UUIDHandler());
});

/**
 * Return a transit writer. type maybe either :json or :json-verbose.
 *   opts is a map containing a :handlers entry. :handlers is a map of
 *   type constructors to handler instances.
 */
cognitect.transit.writer = (function cognitect$transit$writer(var_args){
var args22206 = [];
var len__21551__auto___22217 = arguments.length;
var i__21552__auto___22218 = (0);
while(true){
if((i__21552__auto___22218 < len__21551__auto___22217)){
args22206.push((arguments[i__21552__auto___22218]));

var G__22219 = (i__21552__auto___22218 + (1));
i__21552__auto___22218 = G__22219;
continue;
} else {
}
break;
}

var G__22208 = args22206.length;
switch (G__22208) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22206.length)].join('')));

}
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.writer.call(null,type,null);
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
var keyword_handler = (new cognitect.transit.KeywordHandler());
var symbol_handler = (new cognitect.transit.SymbolHandler());
var list_handler = (new cognitect.transit.ListHandler());
var map_handler = (new cognitect.transit.MapHandler());
var set_handler = (new cognitect.transit.SetHandler());
var vector_handler = (new cognitect.transit.VectorHandler());
var uuid_handler = (new cognitect.transit.UUIDHandler());
var handlers = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.UUID,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,uuid_handler,list_handler,list_handler]),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts));
return com.cognitect.transit.writer.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){
return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){
var G__22209 = obj;
G__22209.push(kfn.call(null,k),vfn.call(null,v));

return G__22209;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x22210 = cljs.core.clone.call(null,handlers);
x22210.forEach = ((function (x22210,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__22211 = cljs.core.seq.call(null,coll);
var chunk__22212 = null;
var count__22213 = (0);
var i__22214 = (0);
while(true){
if((i__22214 < count__22213)){
var vec__22215 = cljs.core._nth.call(null,chunk__22212,i__22214);
var k = cljs.core.nth.call(null,vec__22215,(0),null);
var v = cljs.core.nth.call(null,vec__22215,(1),null);
f.call(null,v,k);

var G__22221 = seq__22211;
var G__22222 = chunk__22212;
var G__22223 = count__22213;
var G__22224 = (i__22214 + (1));
seq__22211 = G__22221;
chunk__22212 = G__22222;
count__22213 = G__22223;
i__22214 = G__22224;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__22211);
if(temp__4425__auto__){
var seq__22211__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22211__$1)){
var c__21296__auto__ = cljs.core.chunk_first.call(null,seq__22211__$1);
var G__22225 = cljs.core.chunk_rest.call(null,seq__22211__$1);
var G__22226 = c__21296__auto__;
var G__22227 = cljs.core.count.call(null,c__21296__auto__);
var G__22228 = (0);
seq__22211 = G__22225;
chunk__22212 = G__22226;
count__22213 = G__22227;
i__22214 = G__22228;
continue;
} else {
var vec__22216 = cljs.core.first.call(null,seq__22211__$1);
var k = cljs.core.nth.call(null,vec__22216,(0),null);
var v = cljs.core.nth.call(null,vec__22216,(1),null);
f.call(null,v,k);

var G__22229 = cljs.core.next.call(null,seq__22211__$1);
var G__22230 = null;
var G__22231 = (0);
var G__22232 = (0);
seq__22211 = G__22229;
chunk__22212 = G__22230;
count__22213 = G__22231;
i__22214 = G__22232;
continue;
}
} else {
return null;
}
}
break;
}
});})(x22210,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x22210;
})(), "unpack": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (x){
if((x instanceof cljs.core.PersistentArrayMap)){
return x.arr;
} else {
return false;
}
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.writer.cljs$lang$maxFixedArity = 2;
/**
 * Encode an object into a transit string given a transit writer.
 */
cognitect.transit.write = (function cognitect$transit$write(w,o){
return w.write(o);
});
/**
 * Construct a read handler. Implemented as identity, exists primarily
 * for API compatiblity with transit-clj
 */
cognitect.transit.read_handler = (function cognitect$transit$read_handler(from_rep){
return from_rep;
});
/**
 * Creates a transit write handler whose tag, rep,
 * stringRep, and verboseWriteHandler methods
 * invoke the provided fns.
 */
cognitect.transit.write_handler = (function cognitect$transit$write_handler(var_args){
var args22233 = [];
var len__21551__auto___22239 = arguments.length;
var i__21552__auto___22240 = (0);
while(true){
if((i__21552__auto___22240 < len__21551__auto___22239)){
args22233.push((arguments[i__21552__auto___22240]));

var G__22241 = (i__21552__auto___22240 + (1));
i__21552__auto___22240 = G__22241;
continue;
} else {
}
break;
}

var G__22235 = args22233.length;
switch (G__22235) {
case 2:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22233.length)].join('')));

}
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,null,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t_cognitect$transit22236 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cognitect.transit.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cognitect.transit.t_cognitect$transit22236 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta22237){
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
this.meta22237 = meta22237;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cognitect.transit.t_cognitect$transit22236.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22238,meta22237__$1){
var self__ = this;
var _22238__$1 = this;
return (new cognitect.transit.t_cognitect$transit22236(self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta22237__$1));
});

cognitect.transit.t_cognitect$transit22236.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22238){
var self__ = this;
var _22238__$1 = this;
return self__.meta22237;
});

cognitect.transit.t_cognitect$transit22236.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit22236.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit22236.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit22236.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit22236.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag-fn","tag-fn",242055482,null),new cljs.core.Symbol(null,"rep-fn","rep-fn",-1724891035,null),new cljs.core.Symbol(null,"str-rep-fn","str-rep-fn",-1179615016,null),new cljs.core.Symbol(null,"verbose-handler-fn","verbose-handler-fn",547340594,null),new cljs.core.Symbol(null,"meta22237","meta22237",-837814181,null)], null);
});

cognitect.transit.t_cognitect$transit22236.cljs$lang$type = true;

cognitect.transit.t_cognitect$transit22236.cljs$lang$ctorStr = "cognitect.transit/t_cognitect$transit22236";

cognitect.transit.t_cognitect$transit22236.cljs$lang$ctorPrWriter = (function (this__21091__auto__,writer__21092__auto__,opt__21093__auto__){
return cljs.core._write.call(null,writer__21092__auto__,"cognitect.transit/t_cognitect$transit22236");
});

cognitect.transit.__GT_t_cognitect$transit22236 = (function cognitect$transit$__GT_t_cognitect$transit22236(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta22237){
return (new cognitect.transit.t_cognitect$transit22236(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta22237));
});

}

return (new cognitect.transit.t_cognitect$transit22236(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,cljs.core.PersistentArrayMap.EMPTY));
});

cognitect.transit.write_handler.cljs$lang$maxFixedArity = 4;
/**
 * Construct a tagged value. tag must be a string and rep can
 * be any transit encodeable value.
 */
cognitect.transit.tagged_value = (function cognitect$transit$tagged_value(tag,rep){
return com.cognitect.transit.types.taggedValue.call(null,tag,rep);
});
/**
 * Returns true if x is a transit tagged value, false otherwise.
 */
cognitect.transit.tagged_value_QMARK_ = (function cognitect$transit$tagged_value_QMARK_(x){
return com.cognitect.transit.types.isTaggedValue.call(null,x);
});
/**
 * Construct a transit integer value. Returns JavaScript number if
 *   in the 53bit integer range, a goog.math.Long instance if above. s
 *   may be a string or a JavaScript number.
 */
cognitect.transit.integer = (function cognitect$transit$integer(s){
return com.cognitect.transit.types.intValue.call(null,s);
});
/**
 * Returns true if x is an integer value between the 53bit and 64bit
 *   range, false otherwise.
 */
cognitect.transit.integer_QMARK_ = (function cognitect$transit$integer_QMARK_(x){
return com.cognitect.transit.types.isInteger.call(null,x);
});
/**
 * Construct a big integer from a string.
 */
cognitect.transit.bigint = (function cognitect$transit$bigint(s){
return com.cognitect.transit.types.bigInteger.call(null,s);
});
/**
 * Returns true if x is a transit big integer value, false otherwise.
 */
cognitect.transit.bigint_QMARK_ = (function cognitect$transit$bigint_QMARK_(x){
return com.cognitect.transit.types.isBigInteger.call(null,x);
});
/**
 * Construct a big decimal from a string.
 */
cognitect.transit.bigdec = (function cognitect$transit$bigdec(s){
return com.cognitect.transit.types.bigDecimalValue.call(null,s);
});
/**
 * Returns true if x is a transit big decimal value, false otherwise.
 */
cognitect.transit.bigdec_QMARK_ = (function cognitect$transit$bigdec_QMARK_(x){
return com.cognitect.transit.types.isBigDecimal.call(null,x);
});
/**
 * Construct a URI from a string.
 */
cognitect.transit.uri = (function cognitect$transit$uri(s){
return com.cognitect.transit.types.uri.call(null,s);
});
/**
 * Returns true if x is a transit URI value, false otherwise.
 */
cognitect.transit.uri_QMARK_ = (function cognitect$transit$uri_QMARK_(x){
return com.cognitect.transit.types.isURI.call(null,x);
});
/**
 * Construct a UUID from a string.
 */
cognitect.transit.uuid = (function cognitect$transit$uuid(s){
return com.cognitect.transit.types.uuid.call(null,s);
});
/**
 * Returns true if x is a transit UUID value, false otherwise.
 */
cognitect.transit.uuid_QMARK_ = (function cognitect$transit$uuid_QMARK_(x){
var or__20493__auto__ = com.cognitect.transit.types.isUUID.call(null,x);
if(cljs.core.truth_(or__20493__auto__)){
return or__20493__auto__;
} else {
return (x instanceof cljs.core.UUID);
}
});
/**
 * Construct a transit binary value. s should be base64 encoded
 * string.
 */
cognitect.transit.binary = (function cognitect$transit$binary(s){
return com.cognitect.transit.types.binary.call(null,s);
});
/**
 * Returns true if x is a transit binary value, false otherwise.
 */
cognitect.transit.binary_QMARK_ = (function cognitect$transit$binary_QMARK_(x){
return com.cognitect.transit.types.isBinary.call(null,x);
});
/**
 * Construct a quoted transit value. x should be a transit
 * encodeable value.
 */
cognitect.transit.quoted = (function cognitect$transit$quoted(x){
return com.cognitect.transit.types.quoted.call(null,x);
});
/**
 * Returns true if x is a transit quoted value, false otherwise.
 */
cognitect.transit.quoted_QMARK_ = (function cognitect$transit$quoted_QMARK_(x){
return com.cognitect.transit.types.isQuoted.call(null,x);
});
/**
 * Construct a transit link value. x should be an IMap instance
 * containing at a minimum the following keys: :href, :rel. It
 * may optionall include :name, :render, and :prompt. :href must
 * be a transit URI, all other values are strings, and :render must
 * be either :image or :link.
 */
cognitect.transit.link = (function cognitect$transit$link(x){
return com.cognitect.transit.types.link.call(null,x);
});
/**
 * Returns true if x a transit link value, false if otherwise.
 */
cognitect.transit.link_QMARK_ = (function cognitect$transit$link_QMARK_(x){
return com.cognitect.transit.types.isLink.call(null,x);
});

//# sourceMappingURL=transit.js.map