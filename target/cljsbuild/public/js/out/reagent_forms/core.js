// Compiled by ClojureScript 1.7.170 {}
goog.provide('reagent_forms.core');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('goog.string.format');
goog.require('reagent.core');
goog.require('reagent_forms.datepicker');
reagent_forms.core.value_of = (function reagent_forms$core$value_of(element){
return element.target.value;
});
reagent_forms.core.id__GT_path = cljs.core.memoize.call(null,(function (id){
if(cljs.core.sequential_QMARK_.call(null,id)){
return id;
} else {
var segments = clojure.string.split.call(null,cljs.core.subs.call(null,[cljs.core.str(id)].join(''),(1)),/\./);
return cljs.core.map.call(null,cljs.core.keyword,segments);
}
}));
reagent_forms.core.set_doc_value = (function reagent_forms$core$set_doc_value(doc,id,value,events){
var path = reagent_forms.core.id__GT_path.call(null,id);
return cljs.core.reduce.call(null,((function (path){
return (function (p1__23151_SHARP_,p2__23150_SHARP_){
var or__20493__auto__ = p2__23150_SHARP_.call(null,path,value,p1__23151_SHARP_);
if(cljs.core.truth_(or__20493__auto__)){
return or__20493__auto__;
} else {
return p1__23151_SHARP_;
}
});})(path))
,cljs.core.assoc_in.call(null,doc,path,value),events);
});
reagent_forms.core.mk_save_fn = (function reagent_forms$core$mk_save_fn(doc,events){
return (function (id,value){
return cljs.core.swap_BANG_.call(null,doc,reagent_forms.core.set_doc_value,id,value,events);
});
});
reagent_forms.core.wrap_get_fn = (function reagent_forms$core$wrap_get_fn(get,wrapper){
return (function (id){
return wrapper.call(null,get.call(null,id));
});
});
reagent_forms.core.wrap_save_fn = (function reagent_forms$core$wrap_save_fn(save_BANG_,wrapper){
return (function (id,value){
return save_BANG_.call(null,id,wrapper.call(null,value));
});
});
reagent_forms.core.wrap_fns = (function reagent_forms$core$wrap_fns(opts,node){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"get","get",1683182755),(function (){var temp__4423__auto__ = new cljs.core.Keyword(null,"in-fn","in-fn",-1938980694).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,node));
if(cljs.core.truth_(temp__4423__auto__)){
var in_fn = temp__4423__auto__;
return reagent_forms.core.wrap_get_fn.call(null,new cljs.core.Keyword(null,"get","get",1683182755).cljs$core$IFn$_invoke$arity$1(opts),in_fn);
} else {
return new cljs.core.Keyword(null,"get","get",1683182755).cljs$core$IFn$_invoke$arity$1(opts);
}
})(),new cljs.core.Keyword(null,"save!","save!",-1137373803),(function (){var temp__4423__auto__ = new cljs.core.Keyword(null,"out-fn","out-fn",747295447).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,node));
if(cljs.core.truth_(temp__4423__auto__)){
var out_fn = temp__4423__auto__;
return reagent_forms.core.wrap_save_fn.call(null,new cljs.core.Keyword(null,"save!","save!",-1137373803).cljs$core$IFn$_invoke$arity$1(opts),out_fn);
} else {
return new cljs.core.Keyword(null,"save!","save!",-1137373803).cljs$core$IFn$_invoke$arity$1(opts);
}
})()], null);
});
if(typeof reagent_forms.core.format_type !== 'undefined'){
} else {
reagent_forms.core.format_type = (function (){var method_table__21406__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__21407__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__21408__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__21409__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__21410__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"reagent-forms.core","format-type"),((function (method_table__21406__auto__,prefer_table__21407__auto__,method_cache__21408__auto__,cached_hierarchy__21409__auto__,hierarchy__21410__auto__){
return (function (field_type,_){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([field_type], true),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.Keyword(null,"numeric","numeric",-1495594714)], null)))){
return new cljs.core.Keyword(null,"numeric","numeric",-1495594714);
} else {
return field_type;
}
});})(method_table__21406__auto__,prefer_table__21407__auto__,method_cache__21408__auto__,cached_hierarchy__21409__auto__,hierarchy__21410__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__21410__auto__,method_table__21406__auto__,prefer_table__21407__auto__,method_cache__21408__auto__,cached_hierarchy__21409__auto__));
})();
}
reagent_forms.core.valid_number_ending_QMARK_ = (function reagent_forms$core$valid_number_ending_QMARK_(n){
return ((cljs.core.not_EQ_.call(null,".",cljs.core.last.call(null,cljs.core.butlast.call(null,n)))) && (cljs.core._EQ_.call(null,".",cljs.core.last.call(null,n)))) || (cljs.core._EQ_.call(null,"0",cljs.core.last.call(null,n)));
});
reagent_forms.core.format_value = (function reagent_forms$core$format_value(fmt,value){
if(cljs.core.truth_((function (){var and__20481__auto__ = cljs.core.not.call(null,isNaN(parseFloat(value)));
if(and__20481__auto__){
return fmt;
} else {
return and__20481__auto__;
}
})())){
return goog.string.format(fmt,value);
} else {
return value;
}
});
cljs.core._add_method.call(null,reagent_forms.core.format_type,new cljs.core.Keyword(null,"numeric","numeric",-1495594714),(function (_,n){
if(cljs.core.truth_(cljs.core.not_empty.call(null,n))){
var parsed = parseFloat(n);
if(cljs.core.truth_(isNaN(parsed))){
return null;
} else {
return parsed;
}
} else {
return null;
}
}));
cljs.core._add_method.call(null,reagent_forms.core.format_type,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_,value){
return value;
}));
if(typeof reagent_forms.core.bind !== 'undefined'){
} else {
reagent_forms.core.bind = (function (){var method_table__21406__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__21407__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__21408__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__21409__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__21410__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"reagent-forms.core","bind"),((function (method_table__21406__auto__,prefer_table__21407__auto__,method_cache__21408__auto__,cached_hierarchy__21409__auto__,hierarchy__21410__auto__){
return (function (p__23152,_){
var map__23153 = p__23152;
var map__23153__$1 = ((((!((map__23153 == null)))?((((map__23153.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23153.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23153):map__23153);
var field = cljs.core.get.call(null,map__23153__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([field], true),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"numeric","numeric",-1495594714),new cljs.core.Keyword(null,"password","password",417022471),new cljs.core.Keyword(null,"email","email",1415816706),new cljs.core.Keyword(null,"tel","tel",224138159),new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.Keyword(null,"textarea","textarea",-650375824)], null)))){
return new cljs.core.Keyword(null,"input-field","input-field",289353943);
} else {
return field;
}
});})(method_table__21406__auto__,prefer_table__21407__auto__,method_cache__21408__auto__,cached_hierarchy__21409__auto__,hierarchy__21410__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__21410__auto__,method_table__21406__auto__,prefer_table__21407__auto__,method_cache__21408__auto__,cached_hierarchy__21409__auto__));
})();
}
cljs.core._add_method.call(null,reagent_forms.core.bind,new cljs.core.Keyword(null,"input-field","input-field",289353943),(function (p__23156,p__23157){
var map__23158 = p__23156;
var map__23158__$1 = ((((!((map__23158 == null)))?((((map__23158.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23158.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23158):map__23158);
var field = cljs.core.get.call(null,map__23158__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var id = cljs.core.get.call(null,map__23158__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var fmt = cljs.core.get.call(null,map__23158__$1,new cljs.core.Keyword(null,"fmt","fmt",332300772));
var map__23159 = p__23157;
var map__23159__$1 = ((((!((map__23159 == null)))?((((map__23159.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23159.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23159):map__23159);
var get = cljs.core.get.call(null,map__23159__$1,new cljs.core.Keyword(null,"get","get",1683182755));
var save_BANG_ = cljs.core.get.call(null,map__23159__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
var doc = cljs.core.get.call(null,map__23159__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),(function (){var value = (function (){var or__20493__auto__ = get.call(null,id);
if(cljs.core.truth_(or__20493__auto__)){
return or__20493__auto__;
} else {
return "";
}
})();
return reagent_forms.core.format_value.call(null,fmt,value);
})(),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (map__23158,map__23158__$1,field,id,fmt,map__23159,map__23159__$1,get,save_BANG_,doc){
return (function (p1__23155_SHARP_){
return save_BANG_.call(null,id,reagent_forms.core.format_type.call(null,field,reagent_forms.core.value_of.call(null,p1__23155_SHARP_)));
});})(map__23158,map__23158__$1,field,id,fmt,map__23159,map__23159__$1,get,save_BANG_,doc))
], null);
}));
cljs.core._add_method.call(null,reagent_forms.core.bind,new cljs.core.Keyword(null,"checkbox","checkbox",1612615655),(function (p__23162,p__23163){
var map__23164 = p__23162;
var map__23164__$1 = ((((!((map__23164 == null)))?((((map__23164.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23164.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23164):map__23164);
var id = cljs.core.get.call(null,map__23164__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var map__23165 = p__23163;
var map__23165__$1 = ((((!((map__23165 == null)))?((((map__23165.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23165.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23165):map__23165);
var get = cljs.core.get.call(null,map__23165__$1,new cljs.core.Keyword(null,"get","get",1683182755));
var save_BANG_ = cljs.core.get.call(null,map__23165__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"default-checked","default-checked",1039965863),get.call(null,id),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (map__23164,map__23164__$1,id,map__23165,map__23165__$1,get,save_BANG_){
return (function (){
return save_BANG_.call(null,id,cljs.core.not.call(null,get.call(null,id)));
});})(map__23164,map__23164__$1,id,map__23165,map__23165__$1,get,save_BANG_))
], null);
}));
cljs.core._add_method.call(null,reagent_forms.core.bind,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_,___$1){
return null;
}));
reagent_forms.core.set_attrs = (function reagent_forms$core$set_attrs(var_args){
var args__21558__auto__ = [];
var len__21551__auto___23175 = arguments.length;
var i__21552__auto___23176 = (0);
while(true){
if((i__21552__auto___23176 < len__21551__auto___23175)){
args__21558__auto__.push((arguments[i__21552__auto___23176]));

var G__23177 = (i__21552__auto___23176 + (1));
i__21552__auto___23176 = G__23177;
continue;
} else {
}
break;
}

var argseq__21559__auto__ = ((((2) < args__21558__auto__.length))?(new cljs.core.IndexedSeq(args__21558__auto__.slice((2)),(0))):null);
return reagent_forms.core.set_attrs.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__21559__auto__);
});

reagent_forms.core.set_attrs.cljs$core$IFn$_invoke$arity$variadic = (function (p__23171,opts,p__23172){
var vec__23173 = p__23171;
var type = cljs.core.nth.call(null,vec__23173,(0),null);
var attrs = cljs.core.nth.call(null,vec__23173,(1),null);
var body = cljs.core.nthnext.call(null,vec__23173,(2));
var vec__23174 = p__23172;
var default_attrs = cljs.core.nth.call(null,vec__23174,(0),null);
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.call(null,default_attrs,reagent_forms.core.bind.call(null,attrs,opts),attrs)], null),body);
});

reagent_forms.core.set_attrs.cljs$lang$maxFixedArity = (2);

reagent_forms.core.set_attrs.cljs$lang$applyTo = (function (seq23168){
var G__23169 = cljs.core.first.call(null,seq23168);
var seq23168__$1 = cljs.core.next.call(null,seq23168);
var G__23170 = cljs.core.first.call(null,seq23168__$1);
var seq23168__$2 = cljs.core.next.call(null,seq23168__$1);
return reagent_forms.core.set_attrs.cljs$core$IFn$_invoke$arity$variadic(G__23169,G__23170,seq23168__$2);
});
if(typeof reagent_forms.core.init_field !== 'undefined'){
} else {
reagent_forms.core.init_field = (function (){var method_table__21406__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__21407__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__21408__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__21409__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__21410__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"reagent-forms.core","init-field"),((function (method_table__21406__auto__,prefer_table__21407__auto__,method_cache__21408__auto__,cached_hierarchy__21409__auto__,hierarchy__21410__auto__){
return (function (p__23178,_){
var vec__23179 = p__23178;
var ___$1 = cljs.core.nth.call(null,vec__23179,(0),null);
var map__23180 = cljs.core.nth.call(null,vec__23179,(1),null);
var map__23180__$1 = ((((!((map__23180 == null)))?((((map__23180.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23180.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23180):map__23180);
var field = cljs.core.get.call(null,map__23180__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var field__$1 = cljs.core.keyword.call(null,field);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([field__$1], true),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"password","password",417022471),new cljs.core.Keyword(null,"email","email",1415816706),new cljs.core.Keyword(null,"tel","tel",224138159),new cljs.core.Keyword(null,"textarea","textarea",-650375824)], null)))){
return new cljs.core.Keyword(null,"input-field","input-field",289353943);
} else {
return field__$1;
}
});})(method_table__21406__auto__,prefer_table__21407__auto__,method_cache__21408__auto__,cached_hierarchy__21409__auto__,hierarchy__21410__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__21410__auto__,method_table__21406__auto__,prefer_table__21407__auto__,method_cache__21408__auto__,cached_hierarchy__21409__auto__));
})();
}
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"container","container",-1736937707),(function (p__23183,p__23184){
var vec__23185 = p__23183;
var type = cljs.core.nth.call(null,vec__23185,(0),null);
var map__23186 = cljs.core.nth.call(null,vec__23185,(1),null);
var map__23186__$1 = ((((!((map__23186 == null)))?((((map__23186.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23186.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23186):map__23186);
var attrs = map__23186__$1;
var valid_QMARK_ = cljs.core.get.call(null,map__23186__$1,new cljs.core.Keyword(null,"valid?","valid?",-212412379));
var body = cljs.core.nthnext.call(null,vec__23185,(2));
var map__23187 = p__23184;
var map__23187__$1 = ((((!((map__23187 == null)))?((((map__23187.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23187.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23187):map__23187);
var doc = cljs.core.get.call(null,map__23187__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
return ((function (vec__23185,type,map__23186,map__23186__$1,attrs,valid_QMARK_,body,map__23187,map__23187__$1,doc){
return (function (){
var temp__4423__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4423__auto__)){
var visible__23142__auto__ = temp__4423__auto__;
if(cljs.core.truth_(visible__23142__auto__.call(null,cljs.core.deref.call(null,doc)))){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,(function (){var temp__4423__auto____$1 = (cljs.core.truth_(valid_QMARK_)?valid_QMARK_.call(null,cljs.core.deref.call(null,doc)):null);
if(cljs.core.truth_(temp__4423__auto____$1)){
var valid_class = temp__4423__auto____$1;
return cljs.core.update_in.call(null,attrs,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class","class",-2030961996)], null),((function (valid_class,temp__4423__auto____$1,visible__23142__auto__,temp__4423__auto__,vec__23185,type,map__23186,map__23186__$1,attrs,valid_QMARK_,body,map__23187,map__23187__$1,doc){
return (function (p1__23182_SHARP_){
if(!(cljs.core.empty_QMARK_.call(null,p1__23182_SHARP_))){
return [cljs.core.str(p1__23182_SHARP_),cljs.core.str(" "),cljs.core.str(valid_class)].join('');
} else {
return valid_class;
}
});})(valid_class,temp__4423__auto____$1,visible__23142__auto__,temp__4423__auto__,vec__23185,type,map__23186,map__23186__$1,attrs,valid_QMARK_,body,map__23187,map__23187__$1,doc))
);
} else {
return attrs;
}
})()], null),body);
} else {
return null;
}
} else {
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,(function (){var temp__4423__auto____$1 = (cljs.core.truth_(valid_QMARK_)?valid_QMARK_.call(null,cljs.core.deref.call(null,doc)):null);
if(cljs.core.truth_(temp__4423__auto____$1)){
var valid_class = temp__4423__auto____$1;
return cljs.core.update_in.call(null,attrs,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class","class",-2030961996)], null),((function (valid_class,temp__4423__auto____$1,temp__4423__auto__,vec__23185,type,map__23186,map__23186__$1,attrs,valid_QMARK_,body,map__23187,map__23187__$1,doc){
return (function (p1__23182_SHARP_){
if(!(cljs.core.empty_QMARK_.call(null,p1__23182_SHARP_))){
return [cljs.core.str(p1__23182_SHARP_),cljs.core.str(" "),cljs.core.str(valid_class)].join('');
} else {
return valid_class;
}
});})(valid_class,temp__4423__auto____$1,temp__4423__auto__,vec__23185,type,map__23186,map__23186__$1,attrs,valid_QMARK_,body,map__23187,map__23187__$1,doc))
);
} else {
return attrs;
}
})()], null),body);
}
});
;})(vec__23185,type,map__23186,map__23186__$1,attrs,valid_QMARK_,body,map__23187,map__23187__$1,doc))
}));
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"input-field","input-field",289353943),(function (p__23190,p__23191){
var vec__23192 = p__23190;
var _ = cljs.core.nth.call(null,vec__23192,(0),null);
var map__23193 = cljs.core.nth.call(null,vec__23192,(1),null);
var map__23193__$1 = ((((!((map__23193 == null)))?((((map__23193.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23193.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23193):map__23193);
var attrs = map__23193__$1;
var field = cljs.core.get.call(null,map__23193__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var component = vec__23192;
var map__23194 = p__23191;
var map__23194__$1 = ((((!((map__23194 == null)))?((((map__23194.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23194.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23194):map__23194);
var opts = map__23194__$1;
var doc = cljs.core.get.call(null,map__23194__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
return ((function (vec__23192,_,map__23193,map__23193__$1,attrs,field,component,map__23194,map__23194__$1,opts,doc){
return (function (){
var temp__4423__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4423__auto__)){
var visible__23142__auto__ = temp__4423__auto__;
if(cljs.core.truth_(visible__23142__auto__.call(null,cljs.core.deref.call(null,doc)))){
return reagent_forms.core.set_attrs.call(null,component,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),field], null));
} else {
return null;
}
} else {
return reagent_forms.core.set_attrs.call(null,component,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),field], null));
}
});
;})(vec__23192,_,map__23193,map__23193__$1,attrs,field,component,map__23194,map__23194__$1,opts,doc))
}));
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"numeric","numeric",-1495594714),(function (p__23199,p__23200){
var vec__23201 = p__23199;
var type = cljs.core.nth.call(null,vec__23201,(0),null);
var map__23202 = cljs.core.nth.call(null,vec__23201,(1),null);
var map__23202__$1 = ((((!((map__23202 == null)))?((((map__23202.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23202.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23202):map__23202);
var attrs = map__23202__$1;
var id = cljs.core.get.call(null,map__23202__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var fmt = cljs.core.get.call(null,map__23202__$1,new cljs.core.Keyword(null,"fmt","fmt",332300772));
var map__23203 = p__23200;
var map__23203__$1 = ((((!((map__23203 == null)))?((((map__23203.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23203.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23203):map__23203);
var doc = cljs.core.get.call(null,map__23203__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var get = cljs.core.get.call(null,map__23203__$1,new cljs.core.Keyword(null,"get","get",1683182755));
var save_BANG_ = cljs.core.get.call(null,map__23203__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
var input_value = reagent.core.atom.call(null,null);
return ((function (input_value,vec__23201,type,map__23202,map__23202__$1,attrs,id,fmt,map__23203,map__23203__$1,doc,get,save_BANG_){
return (function (){
var temp__4423__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4423__auto__)){
var visible__23142__auto__ = temp__4423__auto__;
if(cljs.core.truth_(visible__23142__auto__.call(null,cljs.core.deref.call(null,doc)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__20493__auto__ = cljs.core.deref.call(null,input_value);
if(cljs.core.truth_(or__20493__auto__)){
return or__20493__auto__;
} else {
return get.call(null,id,"");
}
})(),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (visible__23142__auto__,temp__4423__auto__,input_value,vec__23201,type,map__23202,map__23202__$1,attrs,id,fmt,map__23203,map__23203__$1,doc,get,save_BANG_){
return (function (p1__23197_SHARP_){
return cljs.core.reset_BANG_.call(null,input_value,reagent_forms.core.value_of.call(null,p1__23197_SHARP_));
});})(visible__23142__auto__,temp__4423__auto__,input_value,vec__23201,type,map__23202,map__23202__$1,attrs,id,fmt,map__23203,map__23203__$1,doc,get,save_BANG_))
,new cljs.core.Keyword(null,"on-blur","on-blur",814300747),((function (visible__23142__auto__,temp__4423__auto__,input_value,vec__23201,type,map__23202,map__23202__$1,attrs,id,fmt,map__23203,map__23203__$1,doc,get,save_BANG_){
return (function (p1__23198_SHARP_){
cljs.core.reset_BANG_.call(null,input_value,null);

return save_BANG_.call(null,id,reagent_forms.core.format_type.call(null,new cljs.core.Keyword(null,"numeric","numeric",-1495594714),reagent_forms.core.format_value.call(null,fmt,reagent_forms.core.value_of.call(null,p1__23198_SHARP_))));
});})(visible__23142__auto__,temp__4423__auto__,input_value,vec__23201,type,map__23202,map__23202__$1,attrs,id,fmt,map__23203,map__23203__$1,doc,get,save_BANG_))
], null),attrs)], null);
} else {
return null;
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__20493__auto__ = cljs.core.deref.call(null,input_value);
if(cljs.core.truth_(or__20493__auto__)){
return or__20493__auto__;
} else {
return get.call(null,id,"");
}
})(),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (temp__4423__auto__,input_value,vec__23201,type,map__23202,map__23202__$1,attrs,id,fmt,map__23203,map__23203__$1,doc,get,save_BANG_){
return (function (p1__23197_SHARP_){
return cljs.core.reset_BANG_.call(null,input_value,reagent_forms.core.value_of.call(null,p1__23197_SHARP_));
});})(temp__4423__auto__,input_value,vec__23201,type,map__23202,map__23202__$1,attrs,id,fmt,map__23203,map__23203__$1,doc,get,save_BANG_))
,new cljs.core.Keyword(null,"on-blur","on-blur",814300747),((function (temp__4423__auto__,input_value,vec__23201,type,map__23202,map__23202__$1,attrs,id,fmt,map__23203,map__23203__$1,doc,get,save_BANG_){
return (function (p1__23198_SHARP_){
cljs.core.reset_BANG_.call(null,input_value,null);

return save_BANG_.call(null,id,reagent_forms.core.format_type.call(null,new cljs.core.Keyword(null,"numeric","numeric",-1495594714),reagent_forms.core.format_value.call(null,fmt,reagent_forms.core.value_of.call(null,p1__23198_SHARP_))));
});})(temp__4423__auto__,input_value,vec__23201,type,map__23202,map__23202__$1,attrs,id,fmt,map__23203,map__23203__$1,doc,get,save_BANG_))
], null),attrs)], null);
}
});
;})(input_value,vec__23201,type,map__23202,map__23202__$1,attrs,id,fmt,map__23203,map__23203__$1,doc,get,save_BANG_))
}));
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"datepicker","datepicker",821741450),(function (p__23207,p__23208){
var vec__23209 = p__23207;
var _ = cljs.core.nth.call(null,vec__23209,(0),null);
var map__23210 = cljs.core.nth.call(null,vec__23209,(1),null);
var map__23210__$1 = ((((!((map__23210 == null)))?((((map__23210.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23210.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23210):map__23210);
var attrs = map__23210__$1;
var id = cljs.core.get.call(null,map__23210__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var date_format = cljs.core.get.call(null,map__23210__$1,new cljs.core.Keyword(null,"date-format","date-format",-557196721));
var inline = cljs.core.get.call(null,map__23210__$1,new cljs.core.Keyword(null,"inline","inline",1399884222));
var auto_close_QMARK_ = cljs.core.get.call(null,map__23210__$1,new cljs.core.Keyword(null,"auto-close?","auto-close?",-1675434568));
var map__23211 = p__23208;
var map__23211__$1 = ((((!((map__23211 == null)))?((((map__23211.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23211.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23211):map__23211);
var doc = cljs.core.get.call(null,map__23211__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var get = cljs.core.get.call(null,map__23211__$1,new cljs.core.Keyword(null,"get","get",1683182755));
var save_BANG_ = cljs.core.get.call(null,map__23211__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
var fmt = reagent_forms.datepicker.parse_format.call(null,date_format);
var today = (new Date());
var expanded_QMARK_ = reagent.core.atom.call(null,false);
return ((function (fmt,today,expanded_QMARK_,vec__23209,_,map__23210,map__23210__$1,attrs,id,date_format,inline,auto_close_QMARK_,map__23211,map__23211__$1,doc,get,save_BANG_){
return (function (){
var temp__4423__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4423__auto__)){
var visible__23142__auto__ = temp__4423__auto__;
if(cljs.core.truth_(visible__23142__auto__.call(null,cljs.core.deref.call(null,doc)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.datepicker-wrapper","div.datepicker-wrapper",2036556212),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.input-group.date","div.input-group.date",-987970676),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-control","input.form-control",-1123419636),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"read-only","read-only",-191706886),true,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (visible__23142__auto__,temp__4423__auto__,fmt,today,expanded_QMARK_,vec__23209,_,map__23210,map__23210__$1,attrs,id,date_format,inline,auto_close_QMARK_,map__23211,map__23211__$1,doc,get,save_BANG_){
return (function (){
return cljs.core.swap_BANG_.call(null,expanded_QMARK_,cljs.core.not);
});})(visible__23142__auto__,temp__4423__auto__,fmt,today,expanded_QMARK_,vec__23209,_,map__23210,map__23210__$1,attrs,id,date_format,inline,auto_close_QMARK_,map__23211,map__23211__$1,doc,get,save_BANG_))
,new cljs.core.Keyword(null,"value","value",305978217),(function (){var temp__4425__auto__ = get.call(null,id);
if(cljs.core.truth_(temp__4425__auto__)){
var date = temp__4425__auto__;
return reagent_forms.datepicker.format_date.call(null,date,fmt);
} else {
return null;
}
})()], null),attrs)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.input-group-addon","span.input-group-addon",-1300181023),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (visible__23142__auto__,temp__4423__auto__,fmt,today,expanded_QMARK_,vec__23209,_,map__23210,map__23210__$1,attrs,id,date_format,inline,auto_close_QMARK_,map__23211,map__23211__$1,doc,get,save_BANG_){
return (function (){
return cljs.core.swap_BANG_.call(null,expanded_QMARK_,cljs.core.not);
});})(visible__23142__auto__,temp__4423__auto__,fmt,today,expanded_QMARK_,vec__23209,_,map__23210,map__23210__$1,attrs,id,date_format,inline,auto_close_QMARK_,map__23211,map__23211__$1,doc,get,save_BANG_))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.glyphicon.glyphicon-calendar","i.glyphicon.glyphicon-calendar",-1048928069)], null)], null)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.datepicker.datepicker,today.getFullYear(),today.getMonth(),today.getDate(),expanded_QMARK_,auto_close_QMARK_,((function (visible__23142__auto__,temp__4423__auto__,fmt,today,expanded_QMARK_,vec__23209,_,map__23210,map__23210__$1,attrs,id,date_format,inline,auto_close_QMARK_,map__23211,map__23211__$1,doc,get,save_BANG_){
return (function (){
return get.call(null,id);
});})(visible__23142__auto__,temp__4423__auto__,fmt,today,expanded_QMARK_,vec__23209,_,map__23210,map__23210__$1,attrs,id,date_format,inline,auto_close_QMARK_,map__23211,map__23211__$1,doc,get,save_BANG_))
,((function (visible__23142__auto__,temp__4423__auto__,fmt,today,expanded_QMARK_,vec__23209,_,map__23210,map__23210__$1,attrs,id,date_format,inline,auto_close_QMARK_,map__23211,map__23211__$1,doc,get,save_BANG_){
return (function (p1__23206_SHARP_){
return save_BANG_.call(null,id,p1__23206_SHARP_);
});})(visible__23142__auto__,temp__4423__auto__,fmt,today,expanded_QMARK_,vec__23209,_,map__23210,map__23210__$1,attrs,id,date_format,inline,auto_close_QMARK_,map__23211,map__23211__$1,doc,get,save_BANG_))
,inline], null)], null);
} else {
return null;
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.datepicker-wrapper","div.datepicker-wrapper",2036556212),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.input-group.date","div.input-group.date",-987970676),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-control","input.form-control",-1123419636),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"read-only","read-only",-191706886),true,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (temp__4423__auto__,fmt,today,expanded_QMARK_,vec__23209,_,map__23210,map__23210__$1,attrs,id,date_format,inline,auto_close_QMARK_,map__23211,map__23211__$1,doc,get,save_BANG_){
return (function (){
return cljs.core.swap_BANG_.call(null,expanded_QMARK_,cljs.core.not);
});})(temp__4423__auto__,fmt,today,expanded_QMARK_,vec__23209,_,map__23210,map__23210__$1,attrs,id,date_format,inline,auto_close_QMARK_,map__23211,map__23211__$1,doc,get,save_BANG_))
,new cljs.core.Keyword(null,"value","value",305978217),(function (){var temp__4425__auto__ = get.call(null,id);
if(cljs.core.truth_(temp__4425__auto__)){
var date = temp__4425__auto__;
return reagent_forms.datepicker.format_date.call(null,date,fmt);
} else {
return null;
}
})()], null),attrs)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.input-group-addon","span.input-group-addon",-1300181023),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (temp__4423__auto__,fmt,today,expanded_QMARK_,vec__23209,_,map__23210,map__23210__$1,attrs,id,date_format,inline,auto_close_QMARK_,map__23211,map__23211__$1,doc,get,save_BANG_){
return (function (){
return cljs.core.swap_BANG_.call(null,expanded_QMARK_,cljs.core.not);
});})(temp__4423__auto__,fmt,today,expanded_QMARK_,vec__23209,_,map__23210,map__23210__$1,attrs,id,date_format,inline,auto_close_QMARK_,map__23211,map__23211__$1,doc,get,save_BANG_))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.glyphicon.glyphicon-calendar","i.glyphicon.glyphicon-calendar",-1048928069)], null)], null)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.datepicker.datepicker,today.getFullYear(),today.getMonth(),today.getDate(),expanded_QMARK_,auto_close_QMARK_,((function (temp__4423__auto__,fmt,today,expanded_QMARK_,vec__23209,_,map__23210,map__23210__$1,attrs,id,date_format,inline,auto_close_QMARK_,map__23211,map__23211__$1,doc,get,save_BANG_){
return (function (){
return get.call(null,id);
});})(temp__4423__auto__,fmt,today,expanded_QMARK_,vec__23209,_,map__23210,map__23210__$1,attrs,id,date_format,inline,auto_close_QMARK_,map__23211,map__23211__$1,doc,get,save_BANG_))
,((function (temp__4423__auto__,fmt,today,expanded_QMARK_,vec__23209,_,map__23210,map__23210__$1,attrs,id,date_format,inline,auto_close_QMARK_,map__23211,map__23211__$1,doc,get,save_BANG_){
return (function (p1__23206_SHARP_){
return save_BANG_.call(null,id,p1__23206_SHARP_);
});})(temp__4423__auto__,fmt,today,expanded_QMARK_,vec__23209,_,map__23210,map__23210__$1,attrs,id,date_format,inline,auto_close_QMARK_,map__23211,map__23211__$1,doc,get,save_BANG_))
,inline], null)], null);
}
});
;})(fmt,today,expanded_QMARK_,vec__23209,_,map__23210,map__23210__$1,attrs,id,date_format,inline,auto_close_QMARK_,map__23211,map__23211__$1,doc,get,save_BANG_))
}));
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"checkbox","checkbox",1612615655),(function (p__23214,p__23215){
var vec__23216 = p__23214;
var _ = cljs.core.nth.call(null,vec__23216,(0),null);
var map__23217 = cljs.core.nth.call(null,vec__23216,(1),null);
var map__23217__$1 = ((((!((map__23217 == null)))?((((map__23217.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23217.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23217):map__23217);
var attrs = map__23217__$1;
var id = cljs.core.get.call(null,map__23217__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var field = cljs.core.get.call(null,map__23217__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var checked = cljs.core.get.call(null,map__23217__$1,new cljs.core.Keyword(null,"checked","checked",-50955819));
var default_checked = cljs.core.get.call(null,map__23217__$1,new cljs.core.Keyword(null,"default-checked","default-checked",1039965863));
var component = vec__23216;
var map__23218 = p__23215;
var map__23218__$1 = ((((!((map__23218 == null)))?((((map__23218.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23218.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23218):map__23218);
var opts = map__23218__$1;
var doc = cljs.core.get.call(null,map__23218__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var get = cljs.core.get.call(null,map__23218__$1,new cljs.core.Keyword(null,"get","get",1683182755));
var save_BANG_ = cljs.core.get.call(null,map__23218__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
if(cljs.core.truth_((function (){var or__20493__auto__ = checked;
if(cljs.core.truth_(or__20493__auto__)){
return or__20493__auto__;
} else {
return default_checked;
}
})())){
save_BANG_.call(null,id,true);
} else {
}

return ((function (vec__23216,_,map__23217,map__23217__$1,attrs,id,field,checked,default_checked,component,map__23218,map__23218__$1,opts,doc,get,save_BANG_){
return (function (){
var temp__4423__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4423__auto__)){
var visible__23142__auto__ = temp__4423__auto__;
if(cljs.core.truth_(visible__23142__auto__.call(null,cljs.core.deref.call(null,doc)))){
return reagent_forms.core.set_attrs.call(null,component,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),field], null));
} else {
return null;
}
} else {
return reagent_forms.core.set_attrs.call(null,component,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),field], null));
}
});
;})(vec__23216,_,map__23217,map__23217__$1,attrs,id,field,checked,default_checked,component,map__23218,map__23218__$1,opts,doc,get,save_BANG_))
}));
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"label","label",1718410804),(function (p__23221,p__23222){
var vec__23223 = p__23221;
var type = cljs.core.nth.call(null,vec__23223,(0),null);
var map__23224 = cljs.core.nth.call(null,vec__23223,(1),null);
var map__23224__$1 = ((((!((map__23224 == null)))?((((map__23224.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23224.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23224):map__23224);
var attrs = map__23224__$1;
var id = cljs.core.get.call(null,map__23224__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var preamble = cljs.core.get.call(null,map__23224__$1,new cljs.core.Keyword(null,"preamble","preamble",1641040241));
var postamble = cljs.core.get.call(null,map__23224__$1,new cljs.core.Keyword(null,"postamble","postamble",-500033366));
var placeholder = cljs.core.get.call(null,map__23224__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
var map__23225 = p__23222;
var map__23225__$1 = ((((!((map__23225 == null)))?((((map__23225.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23225.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23225):map__23225);
var doc = cljs.core.get.call(null,map__23225__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var get = cljs.core.get.call(null,map__23225__$1,new cljs.core.Keyword(null,"get","get",1683182755));
return ((function (vec__23223,type,map__23224,map__23224__$1,attrs,id,preamble,postamble,placeholder,map__23225,map__23225__$1,doc,get){
return (function (){
var temp__4423__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4423__auto__)){
var visible__23142__auto__ = temp__4423__auto__;
if(cljs.core.truth_(visible__23142__auto__.call(null,cljs.core.deref.call(null,doc)))){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,attrs,preamble,(function (){var temp__4423__auto____$1 = get.call(null,id);
if(cljs.core.truth_(temp__4423__auto____$1)){
var value = temp__4423__auto____$1;
return [cljs.core.str(value),cljs.core.str(postamble)].join('');
} else {
return placeholder;
}
})()], null);
} else {
return null;
}
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,attrs,preamble,(function (){var temp__4423__auto____$1 = get.call(null,id);
if(cljs.core.truth_(temp__4423__auto____$1)){
var value = temp__4423__auto____$1;
return [cljs.core.str(value),cljs.core.str(postamble)].join('');
} else {
return placeholder;
}
})()], null);
}
});
;})(vec__23223,type,map__23224,map__23224__$1,attrs,id,preamble,postamble,placeholder,map__23225,map__23225__$1,doc,get))
}));
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"alert","alert",-571950580),(function (p__23228,p__23229){
var vec__23230 = p__23228;
var type = cljs.core.nth.call(null,vec__23230,(0),null);
var map__23231 = cljs.core.nth.call(null,vec__23230,(1),null);
var map__23231__$1 = ((((!((map__23231 == null)))?((((map__23231.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23231.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23231):map__23231);
var attrs = map__23231__$1;
var id = cljs.core.get.call(null,map__23231__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var event = cljs.core.get.call(null,map__23231__$1,new cljs.core.Keyword(null,"event","event",301435442));
var touch_event = cljs.core.get.call(null,map__23231__$1,new cljs.core.Keyword(null,"touch-event","touch-event",-1071581783));
var body = cljs.core.nthnext.call(null,vec__23230,(2));
var map__23232 = p__23229;
var map__23232__$1 = ((((!((map__23232 == null)))?((((map__23232.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23232.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23232):map__23232);
var opts = map__23232__$1;
var doc = cljs.core.get.call(null,map__23232__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var get = cljs.core.get.call(null,map__23232__$1,new cljs.core.Keyword(null,"get","get",1683182755));
var save_BANG_ = cljs.core.get.call(null,map__23232__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
return ((function (vec__23230,type,map__23231,map__23231__$1,attrs,id,event,touch_event,body,map__23232,map__23232__$1,opts,doc,get,save_BANG_){
return (function (){
var temp__4423__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4423__auto__)){
var visible__23142__auto__ = temp__4423__auto__;
if(cljs.core.truth_(visible__23142__auto__.call(null,cljs.core.deref.call(null,doc)))){
if(cljs.core.truth_(event)){
if(cljs.core.truth_(event.call(null,get.call(null,id)))){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.dissoc.call(null,attrs,event)], null),body);
} else {
return null;
}
} else {
var temp__4423__auto____$1 = cljs.core.not_empty.call(null,get.call(null,id));
if(cljs.core.truth_(temp__4423__auto____$1)){
var message = temp__4423__auto____$1;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,attrs,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.close","button.close",-1545560743),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"aria-hidden","aria-hidden",399337029),true,(function (){var or__20493__auto__ = touch_event;
if(cljs.core.truth_(or__20493__auto__)){
return or__20493__auto__;
} else {
return new cljs.core.Keyword(null,"on-click","on-click",1632826543);
}
})(),((function (message,temp__4423__auto____$1,visible__23142__auto__,temp__4423__auto__,vec__23230,type,map__23231,map__23231__$1,attrs,id,event,touch_event,body,map__23232,map__23232__$1,opts,doc,get,save_BANG_){
return (function (){
return save_BANG_.call(null,id,null);
});})(message,temp__4423__auto____$1,visible__23142__auto__,temp__4423__auto__,vec__23230,type,map__23231,map__23231__$1,attrs,id,event,touch_event,body,map__23232,map__23232__$1,opts,doc,get,save_BANG_))
], true, false),"X"], null),message], null);
} else {
return null;
}
}
} else {
return null;
}
} else {
if(cljs.core.truth_(event)){
if(cljs.core.truth_(event.call(null,get.call(null,id)))){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.dissoc.call(null,attrs,event)], null),body);
} else {
return null;
}
} else {
var temp__4423__auto____$1 = cljs.core.not_empty.call(null,get.call(null,id));
if(cljs.core.truth_(temp__4423__auto____$1)){
var message = temp__4423__auto____$1;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,attrs,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.close","button.close",-1545560743),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"aria-hidden","aria-hidden",399337029),true,(function (){var or__20493__auto__ = touch_event;
if(cljs.core.truth_(or__20493__auto__)){
return or__20493__auto__;
} else {
return new cljs.core.Keyword(null,"on-click","on-click",1632826543);
}
})(),((function (message,temp__4423__auto____$1,temp__4423__auto__,vec__23230,type,map__23231,map__23231__$1,attrs,id,event,touch_event,body,map__23232,map__23232__$1,opts,doc,get,save_BANG_){
return (function (){
return save_BANG_.call(null,id,null);
});})(message,temp__4423__auto____$1,temp__4423__auto__,vec__23230,type,map__23231,map__23231__$1,attrs,id,event,touch_event,body,map__23232,map__23232__$1,opts,doc,get,save_BANG_))
], true, false),"X"], null),message], null);
} else {
return null;
}
}
}
});
;})(vec__23230,type,map__23231,map__23231__$1,attrs,id,event,touch_event,body,map__23232,map__23232__$1,opts,doc,get,save_BANG_))
}));
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"radio","radio",1323726374),(function (p__23235,p__23236){
var vec__23237 = p__23235;
var type = cljs.core.nth.call(null,vec__23237,(0),null);
var map__23238 = cljs.core.nth.call(null,vec__23237,(1),null);
var map__23238__$1 = ((((!((map__23238 == null)))?((((map__23238.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23238.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23238):map__23238);
var attrs = map__23238__$1;
var field = cljs.core.get.call(null,map__23238__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var name = cljs.core.get.call(null,map__23238__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var value = cljs.core.get.call(null,map__23238__$1,new cljs.core.Keyword(null,"value","value",305978217));
var checked = cljs.core.get.call(null,map__23238__$1,new cljs.core.Keyword(null,"checked","checked",-50955819));
var default_checked = cljs.core.get.call(null,map__23238__$1,new cljs.core.Keyword(null,"default-checked","default-checked",1039965863));
var body = cljs.core.nthnext.call(null,vec__23237,(2));
var map__23239 = p__23236;
var map__23239__$1 = ((((!((map__23239 == null)))?((((map__23239.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23239.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23239):map__23239);
var doc = cljs.core.get.call(null,map__23239__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var get = cljs.core.get.call(null,map__23239__$1,new cljs.core.Keyword(null,"get","get",1683182755));
var save_BANG_ = cljs.core.get.call(null,map__23239__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
if(cljs.core.truth_((function (){var or__20493__auto__ = checked;
if(cljs.core.truth_(or__20493__auto__)){
return or__20493__auto__;
} else {
return default_checked;
}
})())){
save_BANG_.call(null,name,value);
} else {
}

return ((function (vec__23237,type,map__23238,map__23238__$1,attrs,field,name,value,checked,default_checked,body,map__23239,map__23239__$1,doc,get,save_BANG_){
return (function (){
var temp__4423__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4423__auto__)){
var visible__23142__auto__ = temp__4423__auto__;
if(cljs.core.truth_(visible__23142__auto__.call(null,cljs.core.deref.call(null,doc)))){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"radio","radio",1323726374),new cljs.core.Keyword(null,"default-checked","default-checked",1039965863),cljs.core._EQ_.call(null,value,get.call(null,name)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (visible__23142__auto__,temp__4423__auto__,vec__23237,type,map__23238,map__23238__$1,attrs,field,name,value,checked,default_checked,body,map__23239,map__23239__$1,doc,get,save_BANG_){
return (function (){
return save_BANG_.call(null,name,value);
});})(visible__23142__auto__,temp__4423__auto__,vec__23237,type,map__23238,map__23238__$1,attrs,field,name,value,checked,default_checked,body,map__23239,map__23239__$1,doc,get,save_BANG_))
], null),attrs)], null),body);
} else {
return null;
}
} else {
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"radio","radio",1323726374),new cljs.core.Keyword(null,"default-checked","default-checked",1039965863),cljs.core._EQ_.call(null,value,get.call(null,name)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (temp__4423__auto__,vec__23237,type,map__23238,map__23238__$1,attrs,field,name,value,checked,default_checked,body,map__23239,map__23239__$1,doc,get,save_BANG_){
return (function (){
return save_BANG_.call(null,name,value);
});})(temp__4423__auto__,vec__23237,type,map__23238,map__23238__$1,attrs,field,name,value,checked,default_checked,body,map__23239,map__23239__$1,doc,get,save_BANG_))
], null),attrs)], null),body);
}
});
;})(vec__23237,type,map__23238,map__23238__$1,attrs,field,name,value,checked,default_checked,body,map__23239,map__23239__$1,doc,get,save_BANG_))
}));
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"typeahead","typeahead",-1364611797),(function (p__23245,p__23246){
var vec__23247 = p__23245;
var type = cljs.core.nth.call(null,vec__23247,(0),null);
var map__23248 = cljs.core.nth.call(null,vec__23247,(1),null);
var map__23248__$1 = ((((!((map__23248 == null)))?((((map__23248.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23248.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23248):map__23248);
var attrs = map__23248__$1;
var result_fn = cljs.core.get.call(null,map__23248__$1,new cljs.core.Keyword(null,"result-fn","result-fn",-726333573),cljs.core.identity);
var item_class = cljs.core.get.call(null,map__23248__$1,new cljs.core.Keyword(null,"item-class","item-class",1277553858));
var input_placeholder = cljs.core.get.call(null,map__23248__$1,new cljs.core.Keyword(null,"input-placeholder","input-placeholder",-965612860));
var highlight_class = cljs.core.get.call(null,map__23248__$1,new cljs.core.Keyword(null,"highlight-class","highlight-class",1738202282));
var list_class = cljs.core.get.call(null,map__23248__$1,new cljs.core.Keyword(null,"list-class","list-class",1412758252));
var data_source = cljs.core.get.call(null,map__23248__$1,new cljs.core.Keyword(null,"data-source","data-source",-658934676));
var input_class = cljs.core.get.call(null,map__23248__$1,new cljs.core.Keyword(null,"input-class","input-class",-62053138));
var clear_on_focus_QMARK_ = cljs.core.get.call(null,map__23248__$1,new cljs.core.Keyword(null,"clear-on-focus?","clear-on-focus?",330213424),true);
var id = cljs.core.get.call(null,map__23248__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var choice_fn = cljs.core.get.call(null,map__23248__$1,new cljs.core.Keyword(null,"choice-fn","choice-fn",-1053191627),cljs.core.identity);
var map__23249 = p__23246;
var map__23249__$1 = ((((!((map__23249 == null)))?((((map__23249.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23249.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23249):map__23249);
var doc = cljs.core.get.call(null,map__23249__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var get = cljs.core.get.call(null,map__23249__$1,new cljs.core.Keyword(null,"get","get",1683182755));
var save_BANG_ = cljs.core.get.call(null,map__23249__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
var typeahead_hidden_QMARK_ = reagent.core.atom.call(null,true);
var mouse_on_list_QMARK_ = reagent.core.atom.call(null,false);
var selected_index = reagent.core.atom.call(null,(-1));
var selections = reagent.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
var choose_selected = ((function (typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,vec__23247,type,map__23248,map__23248__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__23249,map__23249__$1,doc,get,save_BANG_){
return (function (){
if(cljs.core.truth_((function (){var and__20481__auto__ = cljs.core.not_empty.call(null,cljs.core.deref.call(null,selections));
if(cljs.core.truth_(and__20481__auto__)){
return (cljs.core.deref.call(null,selected_index) > (-1));
} else {
return and__20481__auto__;
}
})())){
var choice = cljs.core.nth.call(null,cljs.core.deref.call(null,selections),cljs.core.deref.call(null,selected_index));
save_BANG_.call(null,id,choice);

choice_fn.call(null,choice);

return cljs.core.reset_BANG_.call(null,typeahead_hidden_QMARK_,true);
} else {
return null;
}
});})(typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,vec__23247,type,map__23248,map__23248__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__23249,map__23249__$1,doc,get,save_BANG_))
;
return ((function (typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__23247,type,map__23248,map__23248__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__23249,map__23249__$1,doc,get,save_BANG_){
return (function (){
var temp__4423__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4423__auto__)){
var visible__23142__auto__ = temp__4423__auto__;
if(cljs.core.truth_(visible__23142__auto__.call(null,cljs.core.deref.call(null,doc)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),input_placeholder,new cljs.core.Keyword(null,"class","class",-2030961996),input_class,new cljs.core.Keyword(null,"value","value",305978217),(function (){var v = get.call(null,id);
if(cljs.core.not.call(null,cljs.core.iterable_QMARK_.call(null,v))){
return v;
} else {
return cljs.core.first.call(null,v);
}
})(),new cljs.core.Keyword(null,"on-focus","on-focus",-13737624),((function (visible__23142__auto__,temp__4423__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__23247,type,map__23248,map__23248__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__23249,map__23249__$1,doc,get,save_BANG_){
return (function (){
if(cljs.core.truth_(clear_on_focus_QMARK_)){
return save_BANG_.call(null,id,null);
} else {
return null;
}
});})(visible__23142__auto__,temp__4423__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__23247,type,map__23248,map__23248__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__23249,map__23249__$1,doc,get,save_BANG_))
,new cljs.core.Keyword(null,"on-blur","on-blur",814300747),((function (visible__23142__auto__,temp__4423__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__23247,type,map__23248,map__23248__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__23249,map__23249__$1,doc,get,save_BANG_){
return (function (){
if(cljs.core.truth_(cljs.core.deref.call(null,mouse_on_list_QMARK_))){
return null;
} else {
cljs.core.reset_BANG_.call(null,typeahead_hidden_QMARK_,true);

return cljs.core.reset_BANG_.call(null,selected_index,(-1));
}
});})(visible__23142__auto__,temp__4423__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__23247,type,map__23248,map__23248__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__23249,map__23249__$1,doc,get,save_BANG_))
,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (visible__23142__auto__,temp__4423__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__23247,type,map__23248,map__23248__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__23249,map__23249__$1,doc,get,save_BANG_){
return (function (p1__23242_SHARP_){
var temp__4425__auto__ = clojure.string.trim.call(null,reagent_forms.core.value_of.call(null,p1__23242_SHARP_));
if(cljs.core.truth_(temp__4425__auto__)){
var value = temp__4425__auto__;
cljs.core.reset_BANG_.call(null,selections,data_source.call(null,value.toLowerCase()));

save_BANG_.call(null,id,reagent_forms.core.value_of.call(null,p1__23242_SHARP_));

cljs.core.reset_BANG_.call(null,typeahead_hidden_QMARK_,false);

return cljs.core.reset_BANG_.call(null,selected_index,(-1));
} else {
return null;
}
});})(visible__23142__auto__,temp__4423__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__23247,type,map__23248,map__23248__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__23249,map__23249__$1,doc,get,save_BANG_))
,new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),((function (visible__23142__auto__,temp__4423__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__23247,type,map__23248,map__23248__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__23249,map__23249__$1,doc,get,save_BANG_){
return (function (p1__23243_SHARP_){
var G__23252 = p1__23243_SHARP_.which;
switch (G__23252) {
case (38):
p1__23243_SHARP_.preventDefault();

if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,selected_index),(0))){
return null;
} else {
return cljs.core.swap_BANG_.call(null,selected_index,cljs.core.dec);
}

break;
case (40):
p1__23243_SHARP_.preventDefault();

if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,selected_index),(cljs.core.count.call(null,cljs.core.deref.call(null,selections)) - (1)))){
return null;
} else {
save_BANG_.call(null,id,reagent_forms.core.value_of.call(null,p1__23243_SHARP_));

return cljs.core.swap_BANG_.call(null,selected_index,cljs.core.inc);
}

break;
case (9):
return choose_selected.call(null);

break;
case (13):
return choose_selected.call(null);

break;
case (27):
cljs.core.reset_BANG_.call(null,typeahead_hidden_QMARK_,true);

return cljs.core.reset_BANG_.call(null,selected_index,(0));

break;
default:
return "default";

}
});})(visible__23142__auto__,temp__4423__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__23247,type,map__23248,map__23248__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__23249,map__23249__$1,doc,get,save_BANG_))
], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),(cljs.core.truth_((function (){var or__20493__auto__ = cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,selections));
if(or__20493__auto__){
return or__20493__auto__;
} else {
return cljs.core.deref.call(null,typeahead_hidden_QMARK_);
}
})())?new cljs.core.Keyword(null,"none","none",1333468478):new cljs.core.Keyword(null,"block","block",664686210))], null),new cljs.core.Keyword(null,"class","class",-2030961996),list_class,new cljs.core.Keyword(null,"on-mouse-enter","on-mouse-enter",-1664921661),((function (visible__23142__auto__,temp__4423__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__23247,type,map__23248,map__23248__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__23249,map__23249__$1,doc,get,save_BANG_){
return (function (){
return cljs.core.reset_BANG_.call(null,mouse_on_list_QMARK_,true);
});})(visible__23142__auto__,temp__4423__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__23247,type,map__23248,map__23248__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__23249,map__23249__$1,doc,get,save_BANG_))
,new cljs.core.Keyword(null,"on-mouse-leave","on-mouse-leave",-1864319528),((function (visible__23142__auto__,temp__4423__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__23247,type,map__23248,map__23248__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__23249,map__23249__$1,doc,get,save_BANG_){
return (function (){
return cljs.core.reset_BANG_.call(null,mouse_on_list_QMARK_,false);
});})(visible__23142__auto__,temp__4423__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__23247,type,map__23248,map__23248__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__23249,map__23249__$1,doc,get,save_BANG_))
], null),cljs.core.doall.call(null,cljs.core.map_indexed.call(null,((function (visible__23142__auto__,temp__4423__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__23247,type,map__23248,map__23248__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__23249,map__23249__$1,doc,get,save_BANG_){
return (function (index,result){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"tab-index","tab-index",895755393),index,new cljs.core.Keyword(null,"key","key",-1516042587),index,new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,cljs.core.deref.call(null,selected_index),index))?highlight_class:item_class),new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (visible__23142__auto__,temp__4423__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__23247,type,map__23248,map__23248__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__23249,map__23249__$1,doc,get,save_BANG_){
return (function (p1__23244_SHARP_){
return cljs.core.reset_BANG_.call(null,selected_index,parseInt(p1__23244_SHARP_.target.getAttribute("tabIndex")));
});})(visible__23142__auto__,temp__4423__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__23247,type,map__23248,map__23248__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__23249,map__23249__$1,doc,get,save_BANG_))
,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (visible__23142__auto__,temp__4423__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__23247,type,map__23248,map__23248__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__23249,map__23249__$1,doc,get,save_BANG_){
return (function (){
cljs.core.reset_BANG_.call(null,typeahead_hidden_QMARK_,true);

save_BANG_.call(null,id,result);

return choice_fn.call(null,result);
});})(visible__23142__auto__,temp__4423__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__23247,type,map__23248,map__23248__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__23249,map__23249__$1,doc,get,save_BANG_))
], null),result_fn.call(null,result)], null);
});})(visible__23142__auto__,temp__4423__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__23247,type,map__23248,map__23248__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__23249,map__23249__$1,doc,get,save_BANG_))
,cljs.core.deref.call(null,selections)))], null)], null);
} else {
return null;
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),input_placeholder,new cljs.core.Keyword(null,"class","class",-2030961996),input_class,new cljs.core.Keyword(null,"value","value",305978217),(function (){var v = get.call(null,id);
if(cljs.core.not.call(null,cljs.core.iterable_QMARK_.call(null,v))){
return v;
} else {
return cljs.core.first.call(null,v);
}
})(),new cljs.core.Keyword(null,"on-focus","on-focus",-13737624),((function (temp__4423__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__23247,type,map__23248,map__23248__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__23249,map__23249__$1,doc,get,save_BANG_){
return (function (){
if(cljs.core.truth_(clear_on_focus_QMARK_)){
return save_BANG_.call(null,id,null);
} else {
return null;
}
});})(temp__4423__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__23247,type,map__23248,map__23248__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__23249,map__23249__$1,doc,get,save_BANG_))
,new cljs.core.Keyword(null,"on-blur","on-blur",814300747),((function (temp__4423__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__23247,type,map__23248,map__23248__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__23249,map__23249__$1,doc,get,save_BANG_){
return (function (){
if(cljs.core.truth_(cljs.core.deref.call(null,mouse_on_list_QMARK_))){
return null;
} else {
cljs.core.reset_BANG_.call(null,typeahead_hidden_QMARK_,true);

return cljs.core.reset_BANG_.call(null,selected_index,(-1));
}
});})(temp__4423__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__23247,type,map__23248,map__23248__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__23249,map__23249__$1,doc,get,save_BANG_))
,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (temp__4423__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__23247,type,map__23248,map__23248__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__23249,map__23249__$1,doc,get,save_BANG_){
return (function (p1__23242_SHARP_){
var temp__4425__auto__ = clojure.string.trim.call(null,reagent_forms.core.value_of.call(null,p1__23242_SHARP_));
if(cljs.core.truth_(temp__4425__auto__)){
var value = temp__4425__auto__;
cljs.core.reset_BANG_.call(null,selections,data_source.call(null,value.toLowerCase()));

save_BANG_.call(null,id,reagent_forms.core.value_of.call(null,p1__23242_SHARP_));

cljs.core.reset_BANG_.call(null,typeahead_hidden_QMARK_,false);

return cljs.core.reset_BANG_.call(null,selected_index,(-1));
} else {
return null;
}
});})(temp__4423__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__23247,type,map__23248,map__23248__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__23249,map__23249__$1,doc,get,save_BANG_))
,new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),((function (temp__4423__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__23247,type,map__23248,map__23248__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__23249,map__23249__$1,doc,get,save_BANG_){
return (function (p1__23243_SHARP_){
var G__23253 = p1__23243_SHARP_.which;
switch (G__23253) {
case (38):
p1__23243_SHARP_.preventDefault();

if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,selected_index),(0))){
return null;
} else {
return cljs.core.swap_BANG_.call(null,selected_index,cljs.core.dec);
}

break;
case (40):
p1__23243_SHARP_.preventDefault();

if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,selected_index),(cljs.core.count.call(null,cljs.core.deref.call(null,selections)) - (1)))){
return null;
} else {
save_BANG_.call(null,id,reagent_forms.core.value_of.call(null,p1__23243_SHARP_));

return cljs.core.swap_BANG_.call(null,selected_index,cljs.core.inc);
}

break;
case (9):
return choose_selected.call(null);

break;
case (13):
return choose_selected.call(null);

break;
case (27):
cljs.core.reset_BANG_.call(null,typeahead_hidden_QMARK_,true);

return cljs.core.reset_BANG_.call(null,selected_index,(0));

break;
default:
return "default";

}
});})(temp__4423__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__23247,type,map__23248,map__23248__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__23249,map__23249__$1,doc,get,save_BANG_))
], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),(cljs.core.truth_((function (){var or__20493__auto__ = cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,selections));
if(or__20493__auto__){
return or__20493__auto__;
} else {
return cljs.core.deref.call(null,typeahead_hidden_QMARK_);
}
})())?new cljs.core.Keyword(null,"none","none",1333468478):new cljs.core.Keyword(null,"block","block",664686210))], null),new cljs.core.Keyword(null,"class","class",-2030961996),list_class,new cljs.core.Keyword(null,"on-mouse-enter","on-mouse-enter",-1664921661),((function (temp__4423__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__23247,type,map__23248,map__23248__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__23249,map__23249__$1,doc,get,save_BANG_){
return (function (){
return cljs.core.reset_BANG_.call(null,mouse_on_list_QMARK_,true);
});})(temp__4423__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__23247,type,map__23248,map__23248__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__23249,map__23249__$1,doc,get,save_BANG_))
,new cljs.core.Keyword(null,"on-mouse-leave","on-mouse-leave",-1864319528),((function (temp__4423__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__23247,type,map__23248,map__23248__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__23249,map__23249__$1,doc,get,save_BANG_){
return (function (){
return cljs.core.reset_BANG_.call(null,mouse_on_list_QMARK_,false);
});})(temp__4423__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__23247,type,map__23248,map__23248__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__23249,map__23249__$1,doc,get,save_BANG_))
], null),cljs.core.doall.call(null,cljs.core.map_indexed.call(null,((function (temp__4423__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__23247,type,map__23248,map__23248__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__23249,map__23249__$1,doc,get,save_BANG_){
return (function (index,result){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"tab-index","tab-index",895755393),index,new cljs.core.Keyword(null,"key","key",-1516042587),index,new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,cljs.core.deref.call(null,selected_index),index))?highlight_class:item_class),new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (temp__4423__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__23247,type,map__23248,map__23248__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__23249,map__23249__$1,doc,get,save_BANG_){
return (function (p1__23244_SHARP_){
return cljs.core.reset_BANG_.call(null,selected_index,parseInt(p1__23244_SHARP_.target.getAttribute("tabIndex")));
});})(temp__4423__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__23247,type,map__23248,map__23248__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__23249,map__23249__$1,doc,get,save_BANG_))
,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (temp__4423__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__23247,type,map__23248,map__23248__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__23249,map__23249__$1,doc,get,save_BANG_){
return (function (){
cljs.core.reset_BANG_.call(null,typeahead_hidden_QMARK_,true);

save_BANG_.call(null,id,result);

return choice_fn.call(null,result);
});})(temp__4423__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__23247,type,map__23248,map__23248__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__23249,map__23249__$1,doc,get,save_BANG_))
], null),result_fn.call(null,result)], null);
});})(temp__4423__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__23247,type,map__23248,map__23248__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__23249,map__23249__$1,doc,get,save_BANG_))
,cljs.core.deref.call(null,selections)))], null)], null);
}
});
;})(typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__23247,type,map__23248,map__23248__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__23249,map__23249__$1,doc,get,save_BANG_))
}));
reagent_forms.core.group_item = (function reagent_forms$core$group_item(p__23256,p__23257,selections,field,id){
var vec__23263 = p__23256;
var type = cljs.core.nth.call(null,vec__23263,(0),null);
var map__23264 = cljs.core.nth.call(null,vec__23263,(1),null);
var map__23264__$1 = ((((!((map__23264 == null)))?((((map__23264.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23264.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23264):map__23264);
var attrs = map__23264__$1;
var key = cljs.core.get.call(null,map__23264__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var touch_event = cljs.core.get.call(null,map__23264__$1,new cljs.core.Keyword(null,"touch-event","touch-event",-1071581783));
var body = cljs.core.nthnext.call(null,vec__23263,(2));
var map__23265 = p__23257;
var map__23265__$1 = ((((!((map__23265 == null)))?((((map__23265.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23265.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23265):map__23265);
var save_BANG_ = cljs.core.get.call(null,map__23265__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
var multi_select = cljs.core.get.call(null,map__23265__$1,new cljs.core.Keyword(null,"multi-select","multi-select",-1298511287));
var handle_click_BANG_ = ((function (vec__23263,type,map__23264,map__23264__$1,attrs,key,touch_event,body,map__23265,map__23265__$1,save_BANG_,multi_select){
return (function reagent_forms$core$group_item_$_handle_click_BANG_(){
if(cljs.core.truth_(multi_select)){
cljs.core.swap_BANG_.call(null,selections,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null),cljs.core.not);

return save_BANG_.call(null,id,cljs.core.map.call(null,cljs.core.first,cljs.core.filter.call(null,cljs.core.second,cljs.core.deref.call(null,selections))));
} else {
var value = cljs.core.get.call(null,cljs.core.deref.call(null,selections),key);
cljs.core.reset_BANG_.call(null,selections,cljs.core.PersistentArrayMap.fromArray([key,cljs.core.not.call(null,value)], true, false));

return save_BANG_.call(null,id,(cljs.core.truth_(cljs.core.get.call(null,cljs.core.deref.call(null,selections),key))?key:null));
}
});})(vec__23263,type,map__23264,map__23264__$1,attrs,key,touch_event,body,map__23265,map__23265__$1,save_BANG_,multi_select))
;
return ((function (vec__23263,type,map__23264,map__23264__$1,attrs,key,touch_event,body,map__23265,map__23265__$1,save_BANG_,multi_select){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(cljs.core.get.call(null,cljs.core.deref.call(null,selections),key))?"active":null),(function (){var or__20493__auto__ = touch_event;
if(cljs.core.truth_(or__20493__auto__)){
return or__20493__auto__;
} else {
return new cljs.core.Keyword(null,"on-click","on-click",1632826543);
}
})(),handle_click_BANG_], true, false),attrs),body], null);
});
;})(vec__23263,type,map__23264,map__23264__$1,attrs,key,touch_event,body,map__23265,map__23265__$1,save_BANG_,multi_select))
});
reagent_forms.core.mk_selections = (function reagent_forms$core$mk_selections(id,selectors,p__23268){
var map__23275 = p__23268;
var map__23275__$1 = ((((!((map__23275 == null)))?((((map__23275.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23275.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23275):map__23275);
var get = cljs.core.get.call(null,map__23275__$1,new cljs.core.Keyword(null,"get","get",1683182755));
var multi_select = cljs.core.get.call(null,map__23275__$1,new cljs.core.Keyword(null,"multi-select","multi-select",-1298511287));
var value = get.call(null,id);
return cljs.core.reduce.call(null,((function (value,map__23275,map__23275__$1,get,multi_select){
return (function (m,p__23277){
var vec__23278 = p__23277;
var _ = cljs.core.nth.call(null,vec__23278,(0),null);
var map__23279 = cljs.core.nth.call(null,vec__23278,(1),null);
var map__23279__$1 = ((((!((map__23279 == null)))?((((map__23279.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23279.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23279):map__23279);
var key = cljs.core.get.call(null,map__23279__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
return cljs.core.assoc.call(null,m,key,cljs.core.boolean$.call(null,cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([key], true),(cljs.core.truth_(multi_select)?value:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [value], null)))));
});})(value,map__23275,map__23275__$1,get,multi_select))
,cljs.core.PersistentArrayMap.EMPTY,selectors);
});
/**
 * selectors might be passed in inline or as a collection
 */
reagent_forms.core.extract_selectors = (function reagent_forms$core$extract_selectors(selectors){
if((cljs.core.ffirst.call(null,selectors) instanceof cljs.core.Keyword)){
return selectors;
} else {
return cljs.core.first.call(null,selectors);
}
});
reagent_forms.core.selection_group = (function reagent_forms$core$selection_group(p__23283,p__23284){
var vec__23292 = p__23283;
var type = cljs.core.nth.call(null,vec__23292,(0),null);
var map__23293 = cljs.core.nth.call(null,vec__23292,(1),null);
var map__23293__$1 = ((((!((map__23293 == null)))?((((map__23293.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23293.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23293):map__23293);
var attrs = map__23293__$1;
var field = cljs.core.get.call(null,map__23293__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var id = cljs.core.get.call(null,map__23293__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var selection_items = cljs.core.nthnext.call(null,vec__23292,(2));
var map__23294 = p__23284;
var map__23294__$1 = ((((!((map__23294 == null)))?((((map__23294.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23294.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23294):map__23294);
var opts = map__23294__$1;
var get = cljs.core.get.call(null,map__23294__$1,new cljs.core.Keyword(null,"get","get",1683182755));
var selection_items__$1 = reagent_forms.core.extract_selectors.call(null,selection_items);
var selections = reagent.core.atom.call(null,reagent_forms.core.mk_selections.call(null,id,selection_items__$1,opts));
var selectors = cljs.core.map.call(null,((function (selection_items__$1,selections,vec__23292,type,map__23293,map__23293__$1,attrs,field,id,selection_items,map__23294,map__23294__$1,opts,get){
return (function (item){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"visible?","visible?",2129863715),new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,item)),new cljs.core.Keyword(null,"selector","selector",762528866),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.core.group_item.call(null,item,opts,selections,field,id)], null)], null);
});})(selection_items__$1,selections,vec__23292,type,map__23293,map__23293__$1,attrs,field,id,selection_items,map__23294,map__23294__$1,opts,get))
,selection_items__$1);
return ((function (selection_items__$1,selections,selectors,vec__23292,type,map__23293,map__23293__$1,attrs,field,id,selection_items,map__23294,map__23294__$1,opts,get){
return (function (){
if(cljs.core.truth_(get.call(null,id))){
} else {
cljs.core.swap_BANG_.call(null,selections,((function (selection_items__$1,selections,selectors,vec__23292,type,map__23293,map__23293__$1,attrs,field,id,selection_items,map__23294,map__23294__$1,opts,get){
return (function (p1__23281_SHARP_){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (selection_items__$1,selections,selectors,vec__23292,type,map__23293,map__23293__$1,attrs,field,id,selection_items,map__23294,map__23294__$1,opts,get){
return (function (p__23297){
var vec__23298 = p__23297;
var k = cljs.core.nth.call(null,vec__23298,(0),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,false], null);
});})(selection_items__$1,selections,selectors,vec__23292,type,map__23293,map__23293__$1,attrs,field,id,selection_items,map__23294,map__23294__$1,opts,get))
,p1__23281_SHARP_));
});})(selection_items__$1,selections,selectors,vec__23292,type,map__23293,map__23293__$1,attrs,field,id,selection_items,map__23294,map__23294__$1,opts,get))
);
}

return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,attrs], null),cljs.core.map.call(null,new cljs.core.Keyword(null,"selector","selector",762528866),cljs.core.filter.call(null,((function (selection_items__$1,selections,selectors,vec__23292,type,map__23293,map__23293__$1,attrs,field,id,selection_items,map__23294,map__23294__$1,opts,get){
return (function (p1__23282_SHARP_){
var temp__4423__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(p1__23282_SHARP_);
if(cljs.core.truth_(temp__4423__auto__)){
var visible_QMARK_ = temp__4423__auto__;
return visible_QMARK_.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(opts)));
} else {
return true;
}
});})(selection_items__$1,selections,selectors,vec__23292,type,map__23293,map__23293__$1,attrs,field,id,selection_items,map__23294,map__23294__$1,opts,get))
,selectors)));
});
;})(selection_items__$1,selections,selectors,vec__23292,type,map__23293,map__23293__$1,attrs,field,id,selection_items,map__23294,map__23294__$1,opts,get))
});
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"single-select","single-select",1327691774),(function (p__23299,p__23300){
var vec__23301 = p__23299;
var _ = cljs.core.nth.call(null,vec__23301,(0),null);
var attrs = cljs.core.nth.call(null,vec__23301,(1),null);
var field = vec__23301;
var map__23302 = p__23300;
var map__23302__$1 = ((((!((map__23302 == null)))?((((map__23302.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23302.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23302):map__23302);
var opts = map__23302__$1;
var doc = cljs.core.get.call(null,map__23302__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
return ((function (vec__23301,_,attrs,field,map__23302,map__23302__$1,opts,doc){
return (function (){
var temp__4423__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4423__auto__)){
var visible__23142__auto__ = temp__4423__auto__;
if(cljs.core.truth_(visible__23142__auto__.call(null,cljs.core.deref.call(null,doc)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.core.selection_group,field,opts], null);
} else {
return null;
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.core.selection_group,field,opts], null);
}
});
;})(vec__23301,_,attrs,field,map__23302,map__23302__$1,opts,doc))
}));
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"multi-select","multi-select",-1298511287),(function (p__23304,p__23305){
var vec__23306 = p__23304;
var _ = cljs.core.nth.call(null,vec__23306,(0),null);
var attrs = cljs.core.nth.call(null,vec__23306,(1),null);
var field = vec__23306;
var map__23307 = p__23305;
var map__23307__$1 = ((((!((map__23307 == null)))?((((map__23307.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23307.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23307):map__23307);
var opts = map__23307__$1;
var doc = cljs.core.get.call(null,map__23307__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
return ((function (vec__23306,_,attrs,field,map__23307,map__23307__$1,opts,doc){
return (function (){
var temp__4423__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4423__auto__)){
var visible__23142__auto__ = temp__4423__auto__;
if(cljs.core.truth_(visible__23142__auto__.call(null,cljs.core.deref.call(null,doc)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.core.selection_group,field,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"multi-select","multi-select",-1298511287),true)], null);
} else {
return null;
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.core.selection_group,field,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"multi-select","multi-select",-1298511287),true)], null);
}
});
;})(vec__23306,_,attrs,field,map__23307,map__23307__$1,opts,doc))
}));
reagent_forms.core.map_options = (function reagent_forms$core$map_options(options){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__21265__auto__ = (function reagent_forms$core$map_options_$_iter__23325(s__23326){
return (new cljs.core.LazySeq(null,(function (){
var s__23326__$1 = s__23326;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__23326__$1);
if(temp__4425__auto__){
var s__23326__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23326__$2)){
var c__21263__auto__ = cljs.core.chunk_first.call(null,s__23326__$2);
var size__21264__auto__ = cljs.core.count.call(null,c__21263__auto__);
var b__23328 = cljs.core.chunk_buffer.call(null,size__21264__auto__);
if((function (){var i__23327 = (0);
while(true){
if((i__23327 < size__21264__auto__)){
var vec__23335 = cljs.core._nth.call(null,c__21263__auto__,i__23327);
var _ = cljs.core.nth.call(null,vec__23335,(0),null);
var map__23336 = cljs.core.nth.call(null,vec__23335,(1),null);
var map__23336__$1 = ((((!((map__23336 == null)))?((((map__23336.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23336.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23336):map__23336);
var key = cljs.core.get.call(null,map__23336__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var label = cljs.core.nth.call(null,vec__23335,(2),null);
cljs.core.chunk_append.call(null,b__23328,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(label)].join(''),key], null));

var G__23341 = (i__23327 + (1));
i__23327 = G__23341;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23328),reagent_forms$core$map_options_$_iter__23325.call(null,cljs.core.chunk_rest.call(null,s__23326__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23328),null);
}
} else {
var vec__23338 = cljs.core.first.call(null,s__23326__$2);
var _ = cljs.core.nth.call(null,vec__23338,(0),null);
var map__23339 = cljs.core.nth.call(null,vec__23338,(1),null);
var map__23339__$1 = ((((!((map__23339 == null)))?((((map__23339.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23339.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23339):map__23339);
var key = cljs.core.get.call(null,map__23339__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var label = cljs.core.nth.call(null,vec__23338,(2),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(label)].join(''),key], null),reagent_forms$core$map_options_$_iter__23325.call(null,cljs.core.rest.call(null,s__23326__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__21265__auto__.call(null,options);
})());
});
reagent_forms.core.default_selection = (function reagent_forms$core$default_selection(options,v){
return cljs.core.last.call(null,cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__23342_SHARP_){
return cljs.core._EQ_.call(null,v,cljs.core.get_in.call(null,p1__23342_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),new cljs.core.Keyword(null,"key","key",-1516042587)], null)));
}),options)));
});
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"list","list",765357683),(function (p__23345,p__23346){
var vec__23347 = p__23345;
var type = cljs.core.nth.call(null,vec__23347,(0),null);
var map__23348 = cljs.core.nth.call(null,vec__23347,(1),null);
var map__23348__$1 = ((((!((map__23348 == null)))?((((map__23348.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23348.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23348):map__23348);
var attrs = map__23348__$1;
var field = cljs.core.get.call(null,map__23348__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var id = cljs.core.get.call(null,map__23348__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var options = cljs.core.nthnext.call(null,vec__23347,(2));
var map__23349 = p__23346;
var map__23349__$1 = ((((!((map__23349 == null)))?((((map__23349.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23349.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23349):map__23349);
var doc = cljs.core.get.call(null,map__23349__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var get = cljs.core.get.call(null,map__23349__$1,new cljs.core.Keyword(null,"get","get",1683182755));
var save_BANG_ = cljs.core.get.call(null,map__23349__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
var options__$1 = reagent_forms.core.extract_selectors.call(null,options);
var options_lookup = reagent_forms.core.map_options.call(null,options__$1);
var selection = reagent.core.atom.call(null,(function (){var or__20493__auto__ = get.call(null,id);
if(cljs.core.truth_(or__20493__auto__)){
return or__20493__auto__;
} else {
return cljs.core.get_in.call(null,cljs.core.first.call(null,options__$1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),new cljs.core.Keyword(null,"key","key",-1516042587)], null));
}
})());
save_BANG_.call(null,id,cljs.core.deref.call(null,selection));

return ((function (options__$1,options_lookup,selection,vec__23347,type,map__23348,map__23348__$1,attrs,field,id,options,map__23349,map__23349__$1,doc,get,save_BANG_){
return (function (){
var temp__4423__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4423__auto__)){
var visible__23142__auto__ = temp__4423__auto__;
if(cljs.core.truth_(visible__23142__auto__.call(null,cljs.core.deref.call(null,doc)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.call(null,attrs,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"default-value","default-value",232220170),reagent_forms.core.default_selection.call(null,options__$1,cljs.core.deref.call(null,selection)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (visible__23142__auto__,temp__4423__auto__,options__$1,options_lookup,selection,vec__23347,type,map__23348,map__23348__$1,attrs,field,id,options,map__23349,map__23349__$1,doc,get,save_BANG_){
return (function (p1__23343_SHARP_){
return save_BANG_.call(null,id,cljs.core.get.call(null,options_lookup,reagent_forms.core.value_of.call(null,p1__23343_SHARP_)));
});})(visible__23142__auto__,temp__4423__auto__,options__$1,options_lookup,selection,vec__23347,type,map__23348,map__23348__$1,attrs,field,id,options,map__23349,map__23349__$1,doc,get,save_BANG_))
], null)),cljs.core.doall.call(null,cljs.core.filter.call(null,((function (visible__23142__auto__,temp__4423__auto__,options__$1,options_lookup,selection,vec__23347,type,map__23348,map__23348__$1,attrs,field,id,options,map__23349,map__23349__$1,doc,get,save_BANG_){
return (function (p1__23344_SHARP_){
var temp__4423__auto____$1 = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__23344_SHARP_));
if(cljs.core.truth_(temp__4423__auto____$1)){
var visible_QMARK_ = temp__4423__auto____$1;
return visible_QMARK_.call(null,cljs.core.deref.call(null,doc));
} else {
return true;
}
});})(visible__23142__auto__,temp__4423__auto__,options__$1,options_lookup,selection,vec__23347,type,map__23348,map__23348__$1,attrs,field,id,options,map__23349,map__23349__$1,doc,get,save_BANG_))
,options__$1))], null);
} else {
return null;
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.call(null,attrs,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"default-value","default-value",232220170),reagent_forms.core.default_selection.call(null,options__$1,cljs.core.deref.call(null,selection)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (temp__4423__auto__,options__$1,options_lookup,selection,vec__23347,type,map__23348,map__23348__$1,attrs,field,id,options,map__23349,map__23349__$1,doc,get,save_BANG_){
return (function (p1__23343_SHARP_){
return save_BANG_.call(null,id,cljs.core.get.call(null,options_lookup,reagent_forms.core.value_of.call(null,p1__23343_SHARP_)));
});})(temp__4423__auto__,options__$1,options_lookup,selection,vec__23347,type,map__23348,map__23348__$1,attrs,field,id,options,map__23349,map__23349__$1,doc,get,save_BANG_))
], null)),cljs.core.doall.call(null,cljs.core.filter.call(null,((function (temp__4423__auto__,options__$1,options_lookup,selection,vec__23347,type,map__23348,map__23348__$1,attrs,field,id,options,map__23349,map__23349__$1,doc,get,save_BANG_){
return (function (p1__23344_SHARP_){
var temp__4423__auto____$1 = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__23344_SHARP_));
if(cljs.core.truth_(temp__4423__auto____$1)){
var visible_QMARK_ = temp__4423__auto____$1;
return visible_QMARK_.call(null,cljs.core.deref.call(null,doc));
} else {
return true;
}
});})(temp__4423__auto__,options__$1,options_lookup,selection,vec__23347,type,map__23348,map__23348__$1,attrs,field,id,options,map__23349,map__23349__$1,doc,get,save_BANG_))
,options__$1))], null);
}
});
;})(options__$1,options_lookup,selection,vec__23347,type,map__23348,map__23348__$1,attrs,field,id,options,map__23349,map__23349__$1,doc,get,save_BANG_))
}));
reagent_forms.core.field_QMARK_ = (function reagent_forms$core$field_QMARK_(node){
return (cljs.core.coll_QMARK_.call(null,node)) && (cljs.core.map_QMARK_.call(null,cljs.core.second.call(null,node))) && (cljs.core.contains_QMARK_.call(null,cljs.core.second.call(null,node),new cljs.core.Keyword(null,"field","field",-1302436500)));
});
/**
 * creates data bindings between the form fields and the supplied atom
 * form - the form template with the fields
 * doc - the document that the fields will be bound to
 * events - any events that should be triggered when the document state changes
 */
reagent_forms.core.bind_fields = (function reagent_forms$core$bind_fields(var_args){
var args__21558__auto__ = [];
var len__21551__auto___23356 = arguments.length;
var i__21552__auto___23357 = (0);
while(true){
if((i__21552__auto___23357 < len__21551__auto___23356)){
args__21558__auto__.push((arguments[i__21552__auto___23357]));

var G__23358 = (i__21552__auto___23357 + (1));
i__21552__auto___23357 = G__23358;
continue;
} else {
}
break;
}

var argseq__21559__auto__ = ((((2) < args__21558__auto__.length))?(new cljs.core.IndexedSeq(args__21558__auto__.slice((2)),(0))):null);
return reagent_forms.core.bind_fields.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__21559__auto__);
});

reagent_forms.core.bind_fields.cljs$core$IFn$_invoke$arity$variadic = (function (form,doc,events){
var opts = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"doc","doc",1913296891),doc,new cljs.core.Keyword(null,"get","get",1683182755),(function (p1__23352_SHARP_){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,doc),reagent_forms.core.id__GT_path.call(null,p1__23352_SHARP_));
}),new cljs.core.Keyword(null,"save!","save!",-1137373803),reagent_forms.core.mk_save_fn.call(null,doc,events)], null);
var form__$1 = clojure.walk.postwalk.call(null,((function (opts){
return (function (node){
if(cljs.core.truth_(reagent_forms.core.field_QMARK_.call(null,node))){
var opts__$1 = reagent_forms.core.wrap_fns.call(null,opts,node);
var field = reagent_forms.core.init_field.call(null,node,opts__$1);
if(cljs.core.fn_QMARK_.call(null,field)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [field], null);
} else {
return field;
}
} else {
return node;
}
});})(opts))
,form);
return ((function (opts,form__$1){
return (function (){
return form__$1;
});
;})(opts,form__$1))
});

reagent_forms.core.bind_fields.cljs$lang$maxFixedArity = (2);

reagent_forms.core.bind_fields.cljs$lang$applyTo = (function (seq23353){
var G__23354 = cljs.core.first.call(null,seq23353);
var seq23353__$1 = cljs.core.next.call(null,seq23353);
var G__23355 = cljs.core.first.call(null,seq23353__$1);
var seq23353__$2 = cljs.core.next.call(null,seq23353__$1);
return reagent_forms.core.bind_fields.cljs$core$IFn$_invoke$arity$variadic(G__23354,G__23355,seq23353__$2);
});

//# sourceMappingURL=core.js.map