// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
figwheel.client.file_reloading.queued_file_reload;
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__20493__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__20493__auto__){
return or__20493__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__20493__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__20493__auto__)){
return or__20493__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__27261_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__27261_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__27266 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__27267 = null;
var count__27268 = (0);
var i__27269 = (0);
while(true){
if((i__27269 < count__27268)){
var n = cljs.core._nth.call(null,chunk__27267,i__27269);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__27270 = seq__27266;
var G__27271 = chunk__27267;
var G__27272 = count__27268;
var G__27273 = (i__27269 + (1));
seq__27266 = G__27270;
chunk__27267 = G__27271;
count__27268 = G__27272;
i__27269 = G__27273;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__27266);
if(temp__4425__auto__){
var seq__27266__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27266__$1)){
var c__21296__auto__ = cljs.core.chunk_first.call(null,seq__27266__$1);
var G__27274 = cljs.core.chunk_rest.call(null,seq__27266__$1);
var G__27275 = c__21296__auto__;
var G__27276 = cljs.core.count.call(null,c__21296__auto__);
var G__27277 = (0);
seq__27266 = G__27274;
chunk__27267 = G__27275;
count__27268 = G__27276;
i__27269 = G__27277;
continue;
} else {
var n = cljs.core.first.call(null,seq__27266__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__27278 = cljs.core.next.call(null,seq__27266__$1);
var G__27279 = null;
var G__27280 = (0);
var G__27281 = (0);
seq__27266 = G__27278;
chunk__27267 = G__27279;
count__27268 = G__27280;
i__27269 = G__27281;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__27320_27327 = cljs.core.seq.call(null,deps);
var chunk__27321_27328 = null;
var count__27322_27329 = (0);
var i__27323_27330 = (0);
while(true){
if((i__27323_27330 < count__27322_27329)){
var dep_27331 = cljs.core._nth.call(null,chunk__27321_27328,i__27323_27330);
topo_sort_helper_STAR_.call(null,dep_27331,(depth + (1)),state);

var G__27332 = seq__27320_27327;
var G__27333 = chunk__27321_27328;
var G__27334 = count__27322_27329;
var G__27335 = (i__27323_27330 + (1));
seq__27320_27327 = G__27332;
chunk__27321_27328 = G__27333;
count__27322_27329 = G__27334;
i__27323_27330 = G__27335;
continue;
} else {
var temp__4425__auto___27336 = cljs.core.seq.call(null,seq__27320_27327);
if(temp__4425__auto___27336){
var seq__27320_27337__$1 = temp__4425__auto___27336;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27320_27337__$1)){
var c__21296__auto___27338 = cljs.core.chunk_first.call(null,seq__27320_27337__$1);
var G__27339 = cljs.core.chunk_rest.call(null,seq__27320_27337__$1);
var G__27340 = c__21296__auto___27338;
var G__27341 = cljs.core.count.call(null,c__21296__auto___27338);
var G__27342 = (0);
seq__27320_27327 = G__27339;
chunk__27321_27328 = G__27340;
count__27322_27329 = G__27341;
i__27323_27330 = G__27342;
continue;
} else {
var dep_27343 = cljs.core.first.call(null,seq__27320_27337__$1);
topo_sort_helper_STAR_.call(null,dep_27343,(depth + (1)),state);

var G__27344 = cljs.core.next.call(null,seq__27320_27337__$1);
var G__27345 = null;
var G__27346 = (0);
var G__27347 = (0);
seq__27320_27327 = G__27344;
chunk__27321_27328 = G__27345;
count__27322_27329 = G__27346;
i__27323_27330 = G__27347;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__27324){
var vec__27326 = p__27324;
var x = cljs.core.nth.call(null,vec__27326,(0),null);
var xs = cljs.core.nthnext.call(null,vec__27326,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__27326,x,xs,get_deps__$1){
return (function (p1__27282_SHARP_){
return clojure.set.difference.call(null,p1__27282_SHARP_,x);
});})(vec__27326,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__27360 = cljs.core.seq.call(null,provides);
var chunk__27361 = null;
var count__27362 = (0);
var i__27363 = (0);
while(true){
if((i__27363 < count__27362)){
var prov = cljs.core._nth.call(null,chunk__27361,i__27363);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__27364_27372 = cljs.core.seq.call(null,requires);
var chunk__27365_27373 = null;
var count__27366_27374 = (0);
var i__27367_27375 = (0);
while(true){
if((i__27367_27375 < count__27366_27374)){
var req_27376 = cljs.core._nth.call(null,chunk__27365_27373,i__27367_27375);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27376,prov);

var G__27377 = seq__27364_27372;
var G__27378 = chunk__27365_27373;
var G__27379 = count__27366_27374;
var G__27380 = (i__27367_27375 + (1));
seq__27364_27372 = G__27377;
chunk__27365_27373 = G__27378;
count__27366_27374 = G__27379;
i__27367_27375 = G__27380;
continue;
} else {
var temp__4425__auto___27381 = cljs.core.seq.call(null,seq__27364_27372);
if(temp__4425__auto___27381){
var seq__27364_27382__$1 = temp__4425__auto___27381;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27364_27382__$1)){
var c__21296__auto___27383 = cljs.core.chunk_first.call(null,seq__27364_27382__$1);
var G__27384 = cljs.core.chunk_rest.call(null,seq__27364_27382__$1);
var G__27385 = c__21296__auto___27383;
var G__27386 = cljs.core.count.call(null,c__21296__auto___27383);
var G__27387 = (0);
seq__27364_27372 = G__27384;
chunk__27365_27373 = G__27385;
count__27366_27374 = G__27386;
i__27367_27375 = G__27387;
continue;
} else {
var req_27388 = cljs.core.first.call(null,seq__27364_27382__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27388,prov);

var G__27389 = cljs.core.next.call(null,seq__27364_27382__$1);
var G__27390 = null;
var G__27391 = (0);
var G__27392 = (0);
seq__27364_27372 = G__27389;
chunk__27365_27373 = G__27390;
count__27366_27374 = G__27391;
i__27367_27375 = G__27392;
continue;
}
} else {
}
}
break;
}

var G__27393 = seq__27360;
var G__27394 = chunk__27361;
var G__27395 = count__27362;
var G__27396 = (i__27363 + (1));
seq__27360 = G__27393;
chunk__27361 = G__27394;
count__27362 = G__27395;
i__27363 = G__27396;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__27360);
if(temp__4425__auto__){
var seq__27360__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27360__$1)){
var c__21296__auto__ = cljs.core.chunk_first.call(null,seq__27360__$1);
var G__27397 = cljs.core.chunk_rest.call(null,seq__27360__$1);
var G__27398 = c__21296__auto__;
var G__27399 = cljs.core.count.call(null,c__21296__auto__);
var G__27400 = (0);
seq__27360 = G__27397;
chunk__27361 = G__27398;
count__27362 = G__27399;
i__27363 = G__27400;
continue;
} else {
var prov = cljs.core.first.call(null,seq__27360__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__27368_27401 = cljs.core.seq.call(null,requires);
var chunk__27369_27402 = null;
var count__27370_27403 = (0);
var i__27371_27404 = (0);
while(true){
if((i__27371_27404 < count__27370_27403)){
var req_27405 = cljs.core._nth.call(null,chunk__27369_27402,i__27371_27404);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27405,prov);

var G__27406 = seq__27368_27401;
var G__27407 = chunk__27369_27402;
var G__27408 = count__27370_27403;
var G__27409 = (i__27371_27404 + (1));
seq__27368_27401 = G__27406;
chunk__27369_27402 = G__27407;
count__27370_27403 = G__27408;
i__27371_27404 = G__27409;
continue;
} else {
var temp__4425__auto___27410__$1 = cljs.core.seq.call(null,seq__27368_27401);
if(temp__4425__auto___27410__$1){
var seq__27368_27411__$1 = temp__4425__auto___27410__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27368_27411__$1)){
var c__21296__auto___27412 = cljs.core.chunk_first.call(null,seq__27368_27411__$1);
var G__27413 = cljs.core.chunk_rest.call(null,seq__27368_27411__$1);
var G__27414 = c__21296__auto___27412;
var G__27415 = cljs.core.count.call(null,c__21296__auto___27412);
var G__27416 = (0);
seq__27368_27401 = G__27413;
chunk__27369_27402 = G__27414;
count__27370_27403 = G__27415;
i__27371_27404 = G__27416;
continue;
} else {
var req_27417 = cljs.core.first.call(null,seq__27368_27411__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27417,prov);

var G__27418 = cljs.core.next.call(null,seq__27368_27411__$1);
var G__27419 = null;
var G__27420 = (0);
var G__27421 = (0);
seq__27368_27401 = G__27418;
chunk__27369_27402 = G__27419;
count__27370_27403 = G__27420;
i__27371_27404 = G__27421;
continue;
}
} else {
}
}
break;
}

var G__27422 = cljs.core.next.call(null,seq__27360__$1);
var G__27423 = null;
var G__27424 = (0);
var G__27425 = (0);
seq__27360 = G__27422;
chunk__27361 = G__27423;
count__27362 = G__27424;
i__27363 = G__27425;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__27430_27434 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__27431_27435 = null;
var count__27432_27436 = (0);
var i__27433_27437 = (0);
while(true){
if((i__27433_27437 < count__27432_27436)){
var ns_27438 = cljs.core._nth.call(null,chunk__27431_27435,i__27433_27437);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_27438);

var G__27439 = seq__27430_27434;
var G__27440 = chunk__27431_27435;
var G__27441 = count__27432_27436;
var G__27442 = (i__27433_27437 + (1));
seq__27430_27434 = G__27439;
chunk__27431_27435 = G__27440;
count__27432_27436 = G__27441;
i__27433_27437 = G__27442;
continue;
} else {
var temp__4425__auto___27443 = cljs.core.seq.call(null,seq__27430_27434);
if(temp__4425__auto___27443){
var seq__27430_27444__$1 = temp__4425__auto___27443;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27430_27444__$1)){
var c__21296__auto___27445 = cljs.core.chunk_first.call(null,seq__27430_27444__$1);
var G__27446 = cljs.core.chunk_rest.call(null,seq__27430_27444__$1);
var G__27447 = c__21296__auto___27445;
var G__27448 = cljs.core.count.call(null,c__21296__auto___27445);
var G__27449 = (0);
seq__27430_27434 = G__27446;
chunk__27431_27435 = G__27447;
count__27432_27436 = G__27448;
i__27433_27437 = G__27449;
continue;
} else {
var ns_27450 = cljs.core.first.call(null,seq__27430_27444__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_27450);

var G__27451 = cljs.core.next.call(null,seq__27430_27444__$1);
var G__27452 = null;
var G__27453 = (0);
var G__27454 = (0);
seq__27430_27434 = G__27451;
chunk__27431_27435 = G__27452;
count__27432_27436 = G__27453;
i__27433_27437 = G__27454;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__20493__auto__ = goog.require__;
if(cljs.core.truth_(or__20493__auto__)){
return or__20493__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__27455__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__27455 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27456__i = 0, G__27456__a = new Array(arguments.length -  0);
while (G__27456__i < G__27456__a.length) {G__27456__a[G__27456__i] = arguments[G__27456__i + 0]; ++G__27456__i;}
  args = new cljs.core.IndexedSeq(G__27456__a,0);
} 
return G__27455__delegate.call(this,args);};
G__27455.cljs$lang$maxFixedArity = 0;
G__27455.cljs$lang$applyTo = (function (arglist__27457){
var args = cljs.core.seq(arglist__27457);
return G__27455__delegate(args);
});
G__27455.cljs$core$IFn$_invoke$arity$variadic = G__27455__delegate;
return G__27455;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__27459 = cljs.core._EQ_;
var expr__27460 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__27459.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__27460))){
var path_parts = ((function (pred__27459,expr__27460){
return (function (p1__27458_SHARP_){
return clojure.string.split.call(null,p1__27458_SHARP_,/[\/\\]/);
});})(pred__27459,expr__27460))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__27459,expr__27460){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e27462){if((e27462 instanceof Error)){
var e = e27462;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e27462;

}
}})());
});
;})(path_parts,sep,root,pred__27459,expr__27460))
} else {
if(cljs.core.truth_(pred__27459.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__27460))){
return ((function (pred__27459,expr__27460){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__27459,expr__27460){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__27459,expr__27460))
);

return deferred.addErrback(((function (deferred,pred__27459,expr__27460){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__27459,expr__27460))
);
});
;})(pred__27459,expr__27460))
} else {
return ((function (pred__27459,expr__27460){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__27459,expr__27460))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__27463,callback){
var map__27466 = p__27463;
var map__27466__$1 = ((((!((map__27466 == null)))?((((map__27466.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27466.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27466):map__27466);
var file_msg = map__27466__$1;
var request_url = cljs.core.get.call(null,map__27466__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__27466,map__27466__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__27466,map__27466__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__24367__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24367__auto__){
return (function (){
var f__24368__auto__ = (function (){var switch__24255__auto__ = ((function (c__24367__auto__){
return (function (state_27490){
var state_val_27491 = (state_27490[(1)]);
if((state_val_27491 === (7))){
var inst_27486 = (state_27490[(2)]);
var state_27490__$1 = state_27490;
var statearr_27492_27512 = state_27490__$1;
(statearr_27492_27512[(2)] = inst_27486);

(statearr_27492_27512[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27491 === (1))){
var state_27490__$1 = state_27490;
var statearr_27493_27513 = state_27490__$1;
(statearr_27493_27513[(2)] = null);

(statearr_27493_27513[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27491 === (4))){
var inst_27470 = (state_27490[(7)]);
var inst_27470__$1 = (state_27490[(2)]);
var state_27490__$1 = (function (){var statearr_27494 = state_27490;
(statearr_27494[(7)] = inst_27470__$1);

return statearr_27494;
})();
if(cljs.core.truth_(inst_27470__$1)){
var statearr_27495_27514 = state_27490__$1;
(statearr_27495_27514[(1)] = (5));

} else {
var statearr_27496_27515 = state_27490__$1;
(statearr_27496_27515[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27491 === (6))){
var state_27490__$1 = state_27490;
var statearr_27497_27516 = state_27490__$1;
(statearr_27497_27516[(2)] = null);

(statearr_27497_27516[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27491 === (3))){
var inst_27488 = (state_27490[(2)]);
var state_27490__$1 = state_27490;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27490__$1,inst_27488);
} else {
if((state_val_27491 === (2))){
var state_27490__$1 = state_27490;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27490__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_27491 === (11))){
var inst_27482 = (state_27490[(2)]);
var state_27490__$1 = (function (){var statearr_27498 = state_27490;
(statearr_27498[(8)] = inst_27482);

return statearr_27498;
})();
var statearr_27499_27517 = state_27490__$1;
(statearr_27499_27517[(2)] = null);

(statearr_27499_27517[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27491 === (9))){
var inst_27474 = (state_27490[(9)]);
var inst_27476 = (state_27490[(10)]);
var inst_27478 = inst_27476.call(null,inst_27474);
var state_27490__$1 = state_27490;
var statearr_27500_27518 = state_27490__$1;
(statearr_27500_27518[(2)] = inst_27478);

(statearr_27500_27518[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27491 === (5))){
var inst_27470 = (state_27490[(7)]);
var inst_27472 = figwheel.client.file_reloading.blocking_load.call(null,inst_27470);
var state_27490__$1 = state_27490;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27490__$1,(8),inst_27472);
} else {
if((state_val_27491 === (10))){
var inst_27474 = (state_27490[(9)]);
var inst_27480 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_27474);
var state_27490__$1 = state_27490;
var statearr_27501_27519 = state_27490__$1;
(statearr_27501_27519[(2)] = inst_27480);

(statearr_27501_27519[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27491 === (8))){
var inst_27476 = (state_27490[(10)]);
var inst_27470 = (state_27490[(7)]);
var inst_27474 = (state_27490[(2)]);
var inst_27475 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_27476__$1 = cljs.core.get.call(null,inst_27475,inst_27470);
var state_27490__$1 = (function (){var statearr_27502 = state_27490;
(statearr_27502[(9)] = inst_27474);

(statearr_27502[(10)] = inst_27476__$1);

return statearr_27502;
})();
if(cljs.core.truth_(inst_27476__$1)){
var statearr_27503_27520 = state_27490__$1;
(statearr_27503_27520[(1)] = (9));

} else {
var statearr_27504_27521 = state_27490__$1;
(statearr_27504_27521[(1)] = (10));

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
});})(c__24367__auto__))
;
return ((function (switch__24255__auto__,c__24367__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__24256__auto__ = null;
var figwheel$client$file_reloading$state_machine__24256__auto____0 = (function (){
var statearr_27508 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27508[(0)] = figwheel$client$file_reloading$state_machine__24256__auto__);

(statearr_27508[(1)] = (1));

return statearr_27508;
});
var figwheel$client$file_reloading$state_machine__24256__auto____1 = (function (state_27490){
while(true){
var ret_value__24257__auto__ = (function (){try{while(true){
var result__24258__auto__ = switch__24255__auto__.call(null,state_27490);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24258__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24258__auto__;
}
break;
}
}catch (e27509){if((e27509 instanceof Object)){
var ex__24259__auto__ = e27509;
var statearr_27510_27522 = state_27490;
(statearr_27510_27522[(5)] = ex__24259__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27490);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27509;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24257__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27523 = state_27490;
state_27490 = G__27523;
continue;
} else {
return ret_value__24257__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__24256__auto__ = function(state_27490){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__24256__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__24256__auto____1.call(this,state_27490);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__24256__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__24256__auto____0;
figwheel$client$file_reloading$state_machine__24256__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__24256__auto____1;
return figwheel$client$file_reloading$state_machine__24256__auto__;
})()
;})(switch__24255__auto__,c__24367__auto__))
})();
var state__24369__auto__ = (function (){var statearr_27511 = f__24368__auto__.call(null);
(statearr_27511[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24367__auto__);

return statearr_27511;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24369__auto__);
});})(c__24367__auto__))
);

return c__24367__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__27524,callback){
var map__27527 = p__27524;
var map__27527__$1 = ((((!((map__27527 == null)))?((((map__27527.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27527.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27527):map__27527);
var file_msg = map__27527__$1;
var namespace = cljs.core.get.call(null,map__27527__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__27527,map__27527__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__27527,map__27527__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__27529){
var map__27532 = p__27529;
var map__27532__$1 = ((((!((map__27532 == null)))?((((map__27532.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27532.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27532):map__27532);
var file_msg = map__27532__$1;
var namespace = cljs.core.get.call(null,map__27532__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__20481__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__20481__auto__){
var or__20493__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__20493__auto__)){
return or__20493__auto__;
} else {
var or__20493__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__20493__auto____$1)){
return or__20493__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__20481__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__27534,callback){
var map__27537 = p__27534;
var map__27537__$1 = ((((!((map__27537 == null)))?((((map__27537.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27537.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27537):map__27537);
var file_msg = map__27537__$1;
var request_url = cljs.core.get.call(null,map__27537__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__27537__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__24367__auto___27625 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24367__auto___27625,out){
return (function (){
var f__24368__auto__ = (function (){var switch__24255__auto__ = ((function (c__24367__auto___27625,out){
return (function (state_27607){
var state_val_27608 = (state_27607[(1)]);
if((state_val_27608 === (1))){
var inst_27585 = cljs.core.nth.call(null,files,(0),null);
var inst_27586 = cljs.core.nthnext.call(null,files,(1));
var inst_27587 = files;
var state_27607__$1 = (function (){var statearr_27609 = state_27607;
(statearr_27609[(7)] = inst_27587);

(statearr_27609[(8)] = inst_27586);

(statearr_27609[(9)] = inst_27585);

return statearr_27609;
})();
var statearr_27610_27626 = state_27607__$1;
(statearr_27610_27626[(2)] = null);

(statearr_27610_27626[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27608 === (2))){
var inst_27587 = (state_27607[(7)]);
var inst_27590 = (state_27607[(10)]);
var inst_27590__$1 = cljs.core.nth.call(null,inst_27587,(0),null);
var inst_27591 = cljs.core.nthnext.call(null,inst_27587,(1));
var inst_27592 = (inst_27590__$1 == null);
var inst_27593 = cljs.core.not.call(null,inst_27592);
var state_27607__$1 = (function (){var statearr_27611 = state_27607;
(statearr_27611[(10)] = inst_27590__$1);

(statearr_27611[(11)] = inst_27591);

return statearr_27611;
})();
if(inst_27593){
var statearr_27612_27627 = state_27607__$1;
(statearr_27612_27627[(1)] = (4));

} else {
var statearr_27613_27628 = state_27607__$1;
(statearr_27613_27628[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27608 === (3))){
var inst_27605 = (state_27607[(2)]);
var state_27607__$1 = state_27607;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27607__$1,inst_27605);
} else {
if((state_val_27608 === (4))){
var inst_27590 = (state_27607[(10)]);
var inst_27595 = figwheel.client.file_reloading.reload_js_file.call(null,inst_27590);
var state_27607__$1 = state_27607;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27607__$1,(7),inst_27595);
} else {
if((state_val_27608 === (5))){
var inst_27601 = cljs.core.async.close_BANG_.call(null,out);
var state_27607__$1 = state_27607;
var statearr_27614_27629 = state_27607__$1;
(statearr_27614_27629[(2)] = inst_27601);

(statearr_27614_27629[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27608 === (6))){
var inst_27603 = (state_27607[(2)]);
var state_27607__$1 = state_27607;
var statearr_27615_27630 = state_27607__$1;
(statearr_27615_27630[(2)] = inst_27603);

(statearr_27615_27630[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27608 === (7))){
var inst_27591 = (state_27607[(11)]);
var inst_27597 = (state_27607[(2)]);
var inst_27598 = cljs.core.async.put_BANG_.call(null,out,inst_27597);
var inst_27587 = inst_27591;
var state_27607__$1 = (function (){var statearr_27616 = state_27607;
(statearr_27616[(7)] = inst_27587);

(statearr_27616[(12)] = inst_27598);

return statearr_27616;
})();
var statearr_27617_27631 = state_27607__$1;
(statearr_27617_27631[(2)] = null);

(statearr_27617_27631[(1)] = (2));


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
});})(c__24367__auto___27625,out))
;
return ((function (switch__24255__auto__,c__24367__auto___27625,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__24256__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__24256__auto____0 = (function (){
var statearr_27621 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27621[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__24256__auto__);

(statearr_27621[(1)] = (1));

return statearr_27621;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__24256__auto____1 = (function (state_27607){
while(true){
var ret_value__24257__auto__ = (function (){try{while(true){
var result__24258__auto__ = switch__24255__auto__.call(null,state_27607);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24258__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24258__auto__;
}
break;
}
}catch (e27622){if((e27622 instanceof Object)){
var ex__24259__auto__ = e27622;
var statearr_27623_27632 = state_27607;
(statearr_27623_27632[(5)] = ex__24259__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27607);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27622;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24257__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27633 = state_27607;
state_27607 = G__27633;
continue;
} else {
return ret_value__24257__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__24256__auto__ = function(state_27607){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__24256__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__24256__auto____1.call(this,state_27607);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__24256__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__24256__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__24256__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__24256__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__24256__auto__;
})()
;})(switch__24255__auto__,c__24367__auto___27625,out))
})();
var state__24369__auto__ = (function (){var statearr_27624 = f__24368__auto__.call(null);
(statearr_27624[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24367__auto___27625);

return statearr_27624;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24369__auto__);
});})(c__24367__auto___27625,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__27634,opts){
var map__27638 = p__27634;
var map__27638__$1 = ((((!((map__27638 == null)))?((((map__27638.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27638.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27638):map__27638);
var eval_body__$1 = cljs.core.get.call(null,map__27638__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__27638__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__20481__auto__ = eval_body__$1;
if(cljs.core.truth_(and__20481__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__20481__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e27640){var e = e27640;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4423__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__27641_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__27641_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4423__auto__)){
var file_msg = temp__4423__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__27646){
var vec__27647 = p__27646;
var k = cljs.core.nth.call(null,vec__27647,(0),null);
var v = cljs.core.nth.call(null,vec__27647,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__27648){
var vec__27649 = p__27648;
var k = cljs.core.nth.call(null,vec__27649,(0),null);
var v = cljs.core.nth.call(null,vec__27649,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__27653,p__27654){
var map__27901 = p__27653;
var map__27901__$1 = ((((!((map__27901 == null)))?((((map__27901.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27901.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27901):map__27901);
var opts = map__27901__$1;
var before_jsload = cljs.core.get.call(null,map__27901__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__27901__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__27901__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__27902 = p__27654;
var map__27902__$1 = ((((!((map__27902 == null)))?((((map__27902.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27902.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27902):map__27902);
var msg = map__27902__$1;
var files = cljs.core.get.call(null,map__27902__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__27902__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__27902__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__24367__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24367__auto__,map__27901,map__27901__$1,opts,before_jsload,on_jsload,reload_dependents,map__27902,map__27902__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__24368__auto__ = (function (){var switch__24255__auto__ = ((function (c__24367__auto__,map__27901,map__27901__$1,opts,before_jsload,on_jsload,reload_dependents,map__27902,map__27902__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_28055){
var state_val_28056 = (state_28055[(1)]);
if((state_val_28056 === (7))){
var inst_27917 = (state_28055[(7)]);
var inst_27916 = (state_28055[(8)]);
var inst_27919 = (state_28055[(9)]);
var inst_27918 = (state_28055[(10)]);
var inst_27924 = cljs.core._nth.call(null,inst_27917,inst_27919);
var inst_27925 = figwheel.client.file_reloading.eval_body.call(null,inst_27924,opts);
var inst_27926 = (inst_27919 + (1));
var tmp28057 = inst_27917;
var tmp28058 = inst_27916;
var tmp28059 = inst_27918;
var inst_27916__$1 = tmp28058;
var inst_27917__$1 = tmp28057;
var inst_27918__$1 = tmp28059;
var inst_27919__$1 = inst_27926;
var state_28055__$1 = (function (){var statearr_28060 = state_28055;
(statearr_28060[(7)] = inst_27917__$1);

(statearr_28060[(11)] = inst_27925);

(statearr_28060[(8)] = inst_27916__$1);

(statearr_28060[(9)] = inst_27919__$1);

(statearr_28060[(10)] = inst_27918__$1);

return statearr_28060;
})();
var statearr_28061_28147 = state_28055__$1;
(statearr_28061_28147[(2)] = null);

(statearr_28061_28147[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28056 === (20))){
var inst_27959 = (state_28055[(12)]);
var inst_27967 = figwheel.client.file_reloading.sort_files.call(null,inst_27959);
var state_28055__$1 = state_28055;
var statearr_28062_28148 = state_28055__$1;
(statearr_28062_28148[(2)] = inst_27967);

(statearr_28062_28148[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28056 === (27))){
var state_28055__$1 = state_28055;
var statearr_28063_28149 = state_28055__$1;
(statearr_28063_28149[(2)] = null);

(statearr_28063_28149[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28056 === (1))){
var inst_27908 = (state_28055[(13)]);
var inst_27905 = before_jsload.call(null,files);
var inst_27906 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_27907 = (function (){return ((function (inst_27908,inst_27905,inst_27906,state_val_28056,c__24367__auto__,map__27901,map__27901__$1,opts,before_jsload,on_jsload,reload_dependents,map__27902,map__27902__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27650_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__27650_SHARP_);
});
;})(inst_27908,inst_27905,inst_27906,state_val_28056,c__24367__auto__,map__27901,map__27901__$1,opts,before_jsload,on_jsload,reload_dependents,map__27902,map__27902__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27908__$1 = cljs.core.filter.call(null,inst_27907,files);
var inst_27909 = cljs.core.not_empty.call(null,inst_27908__$1);
var state_28055__$1 = (function (){var statearr_28064 = state_28055;
(statearr_28064[(13)] = inst_27908__$1);

(statearr_28064[(14)] = inst_27905);

(statearr_28064[(15)] = inst_27906);

return statearr_28064;
})();
if(cljs.core.truth_(inst_27909)){
var statearr_28065_28150 = state_28055__$1;
(statearr_28065_28150[(1)] = (2));

} else {
var statearr_28066_28151 = state_28055__$1;
(statearr_28066_28151[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28056 === (24))){
var state_28055__$1 = state_28055;
var statearr_28067_28152 = state_28055__$1;
(statearr_28067_28152[(2)] = null);

(statearr_28067_28152[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28056 === (39))){
var inst_28009 = (state_28055[(16)]);
var state_28055__$1 = state_28055;
var statearr_28068_28153 = state_28055__$1;
(statearr_28068_28153[(2)] = inst_28009);

(statearr_28068_28153[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28056 === (46))){
var inst_28050 = (state_28055[(2)]);
var state_28055__$1 = state_28055;
var statearr_28069_28154 = state_28055__$1;
(statearr_28069_28154[(2)] = inst_28050);

(statearr_28069_28154[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28056 === (4))){
var inst_27953 = (state_28055[(2)]);
var inst_27954 = cljs.core.List.EMPTY;
var inst_27955 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_27954);
var inst_27956 = (function (){return ((function (inst_27953,inst_27954,inst_27955,state_val_28056,c__24367__auto__,map__27901,map__27901__$1,opts,before_jsload,on_jsload,reload_dependents,map__27902,map__27902__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27651_SHARP_){
var and__20481__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__27651_SHARP_);
if(cljs.core.truth_(and__20481__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__27651_SHARP_));
} else {
return and__20481__auto__;
}
});
;})(inst_27953,inst_27954,inst_27955,state_val_28056,c__24367__auto__,map__27901,map__27901__$1,opts,before_jsload,on_jsload,reload_dependents,map__27902,map__27902__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27957 = cljs.core.filter.call(null,inst_27956,files);
var inst_27958 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_27959 = cljs.core.concat.call(null,inst_27957,inst_27958);
var state_28055__$1 = (function (){var statearr_28070 = state_28055;
(statearr_28070[(17)] = inst_27955);

(statearr_28070[(12)] = inst_27959);

(statearr_28070[(18)] = inst_27953);

return statearr_28070;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_28071_28155 = state_28055__$1;
(statearr_28071_28155[(1)] = (16));

} else {
var statearr_28072_28156 = state_28055__$1;
(statearr_28072_28156[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28056 === (15))){
var inst_27943 = (state_28055[(2)]);
var state_28055__$1 = state_28055;
var statearr_28073_28157 = state_28055__$1;
(statearr_28073_28157[(2)] = inst_27943);

(statearr_28073_28157[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28056 === (21))){
var inst_27969 = (state_28055[(19)]);
var inst_27969__$1 = (state_28055[(2)]);
var inst_27970 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_27969__$1);
var state_28055__$1 = (function (){var statearr_28074 = state_28055;
(statearr_28074[(19)] = inst_27969__$1);

return statearr_28074;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28055__$1,(22),inst_27970);
} else {
if((state_val_28056 === (31))){
var inst_28053 = (state_28055[(2)]);
var state_28055__$1 = state_28055;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28055__$1,inst_28053);
} else {
if((state_val_28056 === (32))){
var inst_28009 = (state_28055[(16)]);
var inst_28014 = inst_28009.cljs$lang$protocol_mask$partition0$;
var inst_28015 = (inst_28014 & (64));
var inst_28016 = inst_28009.cljs$core$ISeq$;
var inst_28017 = (inst_28015) || (inst_28016);
var state_28055__$1 = state_28055;
if(cljs.core.truth_(inst_28017)){
var statearr_28075_28158 = state_28055__$1;
(statearr_28075_28158[(1)] = (35));

} else {
var statearr_28076_28159 = state_28055__$1;
(statearr_28076_28159[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28056 === (40))){
var inst_28030 = (state_28055[(20)]);
var inst_28029 = (state_28055[(2)]);
var inst_28030__$1 = cljs.core.get.call(null,inst_28029,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_28031 = cljs.core.get.call(null,inst_28029,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_28032 = cljs.core.not_empty.call(null,inst_28030__$1);
var state_28055__$1 = (function (){var statearr_28077 = state_28055;
(statearr_28077[(20)] = inst_28030__$1);

(statearr_28077[(21)] = inst_28031);

return statearr_28077;
})();
if(cljs.core.truth_(inst_28032)){
var statearr_28078_28160 = state_28055__$1;
(statearr_28078_28160[(1)] = (41));

} else {
var statearr_28079_28161 = state_28055__$1;
(statearr_28079_28161[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28056 === (33))){
var state_28055__$1 = state_28055;
var statearr_28080_28162 = state_28055__$1;
(statearr_28080_28162[(2)] = false);

(statearr_28080_28162[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28056 === (13))){
var inst_27929 = (state_28055[(22)]);
var inst_27933 = cljs.core.chunk_first.call(null,inst_27929);
var inst_27934 = cljs.core.chunk_rest.call(null,inst_27929);
var inst_27935 = cljs.core.count.call(null,inst_27933);
var inst_27916 = inst_27934;
var inst_27917 = inst_27933;
var inst_27918 = inst_27935;
var inst_27919 = (0);
var state_28055__$1 = (function (){var statearr_28081 = state_28055;
(statearr_28081[(7)] = inst_27917);

(statearr_28081[(8)] = inst_27916);

(statearr_28081[(9)] = inst_27919);

(statearr_28081[(10)] = inst_27918);

return statearr_28081;
})();
var statearr_28082_28163 = state_28055__$1;
(statearr_28082_28163[(2)] = null);

(statearr_28082_28163[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28056 === (22))){
var inst_27969 = (state_28055[(19)]);
var inst_27973 = (state_28055[(23)]);
var inst_27972 = (state_28055[(24)]);
var inst_27977 = (state_28055[(25)]);
var inst_27972__$1 = (state_28055[(2)]);
var inst_27973__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_27972__$1);
var inst_27974 = (function (){var all_files = inst_27969;
var res_SINGLEQUOTE_ = inst_27972__$1;
var res = inst_27973__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_27969,inst_27973,inst_27972,inst_27977,inst_27972__$1,inst_27973__$1,state_val_28056,c__24367__auto__,map__27901,map__27901__$1,opts,before_jsload,on_jsload,reload_dependents,map__27902,map__27902__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27652_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__27652_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_27969,inst_27973,inst_27972,inst_27977,inst_27972__$1,inst_27973__$1,state_val_28056,c__24367__auto__,map__27901,map__27901__$1,opts,before_jsload,on_jsload,reload_dependents,map__27902,map__27902__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27975 = cljs.core.filter.call(null,inst_27974,inst_27972__$1);
var inst_27976 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_27977__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_27976);
var inst_27978 = cljs.core.not_empty.call(null,inst_27977__$1);
var state_28055__$1 = (function (){var statearr_28083 = state_28055;
(statearr_28083[(23)] = inst_27973__$1);

(statearr_28083[(24)] = inst_27972__$1);

(statearr_28083[(25)] = inst_27977__$1);

(statearr_28083[(26)] = inst_27975);

return statearr_28083;
})();
if(cljs.core.truth_(inst_27978)){
var statearr_28084_28164 = state_28055__$1;
(statearr_28084_28164[(1)] = (23));

} else {
var statearr_28085_28165 = state_28055__$1;
(statearr_28085_28165[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28056 === (36))){
var state_28055__$1 = state_28055;
var statearr_28086_28166 = state_28055__$1;
(statearr_28086_28166[(2)] = false);

(statearr_28086_28166[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28056 === (41))){
var inst_28030 = (state_28055[(20)]);
var inst_28034 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_28035 = cljs.core.map.call(null,inst_28034,inst_28030);
var inst_28036 = cljs.core.pr_str.call(null,inst_28035);
var inst_28037 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_28036)].join('');
var inst_28038 = figwheel.client.utils.log.call(null,inst_28037);
var state_28055__$1 = state_28055;
var statearr_28087_28167 = state_28055__$1;
(statearr_28087_28167[(2)] = inst_28038);

(statearr_28087_28167[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28056 === (43))){
var inst_28031 = (state_28055[(21)]);
var inst_28041 = (state_28055[(2)]);
var inst_28042 = cljs.core.not_empty.call(null,inst_28031);
var state_28055__$1 = (function (){var statearr_28088 = state_28055;
(statearr_28088[(27)] = inst_28041);

return statearr_28088;
})();
if(cljs.core.truth_(inst_28042)){
var statearr_28089_28168 = state_28055__$1;
(statearr_28089_28168[(1)] = (44));

} else {
var statearr_28090_28169 = state_28055__$1;
(statearr_28090_28169[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28056 === (29))){
var inst_27969 = (state_28055[(19)]);
var inst_28009 = (state_28055[(16)]);
var inst_27973 = (state_28055[(23)]);
var inst_27972 = (state_28055[(24)]);
var inst_27977 = (state_28055[(25)]);
var inst_27975 = (state_28055[(26)]);
var inst_28005 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_28008 = (function (){var all_files = inst_27969;
var res_SINGLEQUOTE_ = inst_27972;
var res = inst_27973;
var files_not_loaded = inst_27975;
var dependencies_that_loaded = inst_27977;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27969,inst_28009,inst_27973,inst_27972,inst_27977,inst_27975,inst_28005,state_val_28056,c__24367__auto__,map__27901,map__27901__$1,opts,before_jsload,on_jsload,reload_dependents,map__27902,map__27902__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__28007){
var map__28091 = p__28007;
var map__28091__$1 = ((((!((map__28091 == null)))?((((map__28091.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28091.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28091):map__28091);
var namespace = cljs.core.get.call(null,map__28091__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27969,inst_28009,inst_27973,inst_27972,inst_27977,inst_27975,inst_28005,state_val_28056,c__24367__auto__,map__27901,map__27901__$1,opts,before_jsload,on_jsload,reload_dependents,map__27902,map__27902__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28009__$1 = cljs.core.group_by.call(null,inst_28008,inst_27975);
var inst_28011 = (inst_28009__$1 == null);
var inst_28012 = cljs.core.not.call(null,inst_28011);
var state_28055__$1 = (function (){var statearr_28093 = state_28055;
(statearr_28093[(16)] = inst_28009__$1);

(statearr_28093[(28)] = inst_28005);

return statearr_28093;
})();
if(inst_28012){
var statearr_28094_28170 = state_28055__$1;
(statearr_28094_28170[(1)] = (32));

} else {
var statearr_28095_28171 = state_28055__$1;
(statearr_28095_28171[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28056 === (44))){
var inst_28031 = (state_28055[(21)]);
var inst_28044 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_28031);
var inst_28045 = cljs.core.pr_str.call(null,inst_28044);
var inst_28046 = [cljs.core.str("not required: "),cljs.core.str(inst_28045)].join('');
var inst_28047 = figwheel.client.utils.log.call(null,inst_28046);
var state_28055__$1 = state_28055;
var statearr_28096_28172 = state_28055__$1;
(statearr_28096_28172[(2)] = inst_28047);

(statearr_28096_28172[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28056 === (6))){
var inst_27950 = (state_28055[(2)]);
var state_28055__$1 = state_28055;
var statearr_28097_28173 = state_28055__$1;
(statearr_28097_28173[(2)] = inst_27950);

(statearr_28097_28173[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28056 === (28))){
var inst_27975 = (state_28055[(26)]);
var inst_28002 = (state_28055[(2)]);
var inst_28003 = cljs.core.not_empty.call(null,inst_27975);
var state_28055__$1 = (function (){var statearr_28098 = state_28055;
(statearr_28098[(29)] = inst_28002);

return statearr_28098;
})();
if(cljs.core.truth_(inst_28003)){
var statearr_28099_28174 = state_28055__$1;
(statearr_28099_28174[(1)] = (29));

} else {
var statearr_28100_28175 = state_28055__$1;
(statearr_28100_28175[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28056 === (25))){
var inst_27973 = (state_28055[(23)]);
var inst_27989 = (state_28055[(2)]);
var inst_27990 = cljs.core.not_empty.call(null,inst_27973);
var state_28055__$1 = (function (){var statearr_28101 = state_28055;
(statearr_28101[(30)] = inst_27989);

return statearr_28101;
})();
if(cljs.core.truth_(inst_27990)){
var statearr_28102_28176 = state_28055__$1;
(statearr_28102_28176[(1)] = (26));

} else {
var statearr_28103_28177 = state_28055__$1;
(statearr_28103_28177[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28056 === (34))){
var inst_28024 = (state_28055[(2)]);
var state_28055__$1 = state_28055;
if(cljs.core.truth_(inst_28024)){
var statearr_28104_28178 = state_28055__$1;
(statearr_28104_28178[(1)] = (38));

} else {
var statearr_28105_28179 = state_28055__$1;
(statearr_28105_28179[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28056 === (17))){
var state_28055__$1 = state_28055;
var statearr_28106_28180 = state_28055__$1;
(statearr_28106_28180[(2)] = recompile_dependents);

(statearr_28106_28180[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28056 === (3))){
var state_28055__$1 = state_28055;
var statearr_28107_28181 = state_28055__$1;
(statearr_28107_28181[(2)] = null);

(statearr_28107_28181[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28056 === (12))){
var inst_27946 = (state_28055[(2)]);
var state_28055__$1 = state_28055;
var statearr_28108_28182 = state_28055__$1;
(statearr_28108_28182[(2)] = inst_27946);

(statearr_28108_28182[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28056 === (2))){
var inst_27908 = (state_28055[(13)]);
var inst_27915 = cljs.core.seq.call(null,inst_27908);
var inst_27916 = inst_27915;
var inst_27917 = null;
var inst_27918 = (0);
var inst_27919 = (0);
var state_28055__$1 = (function (){var statearr_28109 = state_28055;
(statearr_28109[(7)] = inst_27917);

(statearr_28109[(8)] = inst_27916);

(statearr_28109[(9)] = inst_27919);

(statearr_28109[(10)] = inst_27918);

return statearr_28109;
})();
var statearr_28110_28183 = state_28055__$1;
(statearr_28110_28183[(2)] = null);

(statearr_28110_28183[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28056 === (23))){
var inst_27969 = (state_28055[(19)]);
var inst_27973 = (state_28055[(23)]);
var inst_27972 = (state_28055[(24)]);
var inst_27977 = (state_28055[(25)]);
var inst_27975 = (state_28055[(26)]);
var inst_27980 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_27982 = (function (){var all_files = inst_27969;
var res_SINGLEQUOTE_ = inst_27972;
var res = inst_27973;
var files_not_loaded = inst_27975;
var dependencies_that_loaded = inst_27977;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27969,inst_27973,inst_27972,inst_27977,inst_27975,inst_27980,state_val_28056,c__24367__auto__,map__27901,map__27901__$1,opts,before_jsload,on_jsload,reload_dependents,map__27902,map__27902__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27981){
var map__28111 = p__27981;
var map__28111__$1 = ((((!((map__28111 == null)))?((((map__28111.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28111.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28111):map__28111);
var request_url = cljs.core.get.call(null,map__28111__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27969,inst_27973,inst_27972,inst_27977,inst_27975,inst_27980,state_val_28056,c__24367__auto__,map__27901,map__27901__$1,opts,before_jsload,on_jsload,reload_dependents,map__27902,map__27902__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27983 = cljs.core.reverse.call(null,inst_27977);
var inst_27984 = cljs.core.map.call(null,inst_27982,inst_27983);
var inst_27985 = cljs.core.pr_str.call(null,inst_27984);
var inst_27986 = figwheel.client.utils.log.call(null,inst_27985);
var state_28055__$1 = (function (){var statearr_28113 = state_28055;
(statearr_28113[(31)] = inst_27980);

return statearr_28113;
})();
var statearr_28114_28184 = state_28055__$1;
(statearr_28114_28184[(2)] = inst_27986);

(statearr_28114_28184[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28056 === (35))){
var state_28055__$1 = state_28055;
var statearr_28115_28185 = state_28055__$1;
(statearr_28115_28185[(2)] = true);

(statearr_28115_28185[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28056 === (19))){
var inst_27959 = (state_28055[(12)]);
var inst_27965 = figwheel.client.file_reloading.expand_files.call(null,inst_27959);
var state_28055__$1 = state_28055;
var statearr_28116_28186 = state_28055__$1;
(statearr_28116_28186[(2)] = inst_27965);

(statearr_28116_28186[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28056 === (11))){
var state_28055__$1 = state_28055;
var statearr_28117_28187 = state_28055__$1;
(statearr_28117_28187[(2)] = null);

(statearr_28117_28187[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28056 === (9))){
var inst_27948 = (state_28055[(2)]);
var state_28055__$1 = state_28055;
var statearr_28118_28188 = state_28055__$1;
(statearr_28118_28188[(2)] = inst_27948);

(statearr_28118_28188[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28056 === (5))){
var inst_27919 = (state_28055[(9)]);
var inst_27918 = (state_28055[(10)]);
var inst_27921 = (inst_27919 < inst_27918);
var inst_27922 = inst_27921;
var state_28055__$1 = state_28055;
if(cljs.core.truth_(inst_27922)){
var statearr_28119_28189 = state_28055__$1;
(statearr_28119_28189[(1)] = (7));

} else {
var statearr_28120_28190 = state_28055__$1;
(statearr_28120_28190[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28056 === (14))){
var inst_27929 = (state_28055[(22)]);
var inst_27938 = cljs.core.first.call(null,inst_27929);
var inst_27939 = figwheel.client.file_reloading.eval_body.call(null,inst_27938,opts);
var inst_27940 = cljs.core.next.call(null,inst_27929);
var inst_27916 = inst_27940;
var inst_27917 = null;
var inst_27918 = (0);
var inst_27919 = (0);
var state_28055__$1 = (function (){var statearr_28121 = state_28055;
(statearr_28121[(32)] = inst_27939);

(statearr_28121[(7)] = inst_27917);

(statearr_28121[(8)] = inst_27916);

(statearr_28121[(9)] = inst_27919);

(statearr_28121[(10)] = inst_27918);

return statearr_28121;
})();
var statearr_28122_28191 = state_28055__$1;
(statearr_28122_28191[(2)] = null);

(statearr_28122_28191[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28056 === (45))){
var state_28055__$1 = state_28055;
var statearr_28123_28192 = state_28055__$1;
(statearr_28123_28192[(2)] = null);

(statearr_28123_28192[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28056 === (26))){
var inst_27969 = (state_28055[(19)]);
var inst_27973 = (state_28055[(23)]);
var inst_27972 = (state_28055[(24)]);
var inst_27977 = (state_28055[(25)]);
var inst_27975 = (state_28055[(26)]);
var inst_27992 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_27994 = (function (){var all_files = inst_27969;
var res_SINGLEQUOTE_ = inst_27972;
var res = inst_27973;
var files_not_loaded = inst_27975;
var dependencies_that_loaded = inst_27977;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27969,inst_27973,inst_27972,inst_27977,inst_27975,inst_27992,state_val_28056,c__24367__auto__,map__27901,map__27901__$1,opts,before_jsload,on_jsload,reload_dependents,map__27902,map__27902__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27993){
var map__28124 = p__27993;
var map__28124__$1 = ((((!((map__28124 == null)))?((((map__28124.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28124.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28124):map__28124);
var namespace = cljs.core.get.call(null,map__28124__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__28124__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27969,inst_27973,inst_27972,inst_27977,inst_27975,inst_27992,state_val_28056,c__24367__auto__,map__27901,map__27901__$1,opts,before_jsload,on_jsload,reload_dependents,map__27902,map__27902__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27995 = cljs.core.map.call(null,inst_27994,inst_27973);
var inst_27996 = cljs.core.pr_str.call(null,inst_27995);
var inst_27997 = figwheel.client.utils.log.call(null,inst_27996);
var inst_27998 = (function (){var all_files = inst_27969;
var res_SINGLEQUOTE_ = inst_27972;
var res = inst_27973;
var files_not_loaded = inst_27975;
var dependencies_that_loaded = inst_27977;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27969,inst_27973,inst_27972,inst_27977,inst_27975,inst_27992,inst_27994,inst_27995,inst_27996,inst_27997,state_val_28056,c__24367__auto__,map__27901,map__27901__$1,opts,before_jsload,on_jsload,reload_dependents,map__27902,map__27902__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27969,inst_27973,inst_27972,inst_27977,inst_27975,inst_27992,inst_27994,inst_27995,inst_27996,inst_27997,state_val_28056,c__24367__auto__,map__27901,map__27901__$1,opts,before_jsload,on_jsload,reload_dependents,map__27902,map__27902__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27999 = setTimeout(inst_27998,(10));
var state_28055__$1 = (function (){var statearr_28126 = state_28055;
(statearr_28126[(33)] = inst_27997);

(statearr_28126[(34)] = inst_27992);

return statearr_28126;
})();
var statearr_28127_28193 = state_28055__$1;
(statearr_28127_28193[(2)] = inst_27999);

(statearr_28127_28193[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28056 === (16))){
var state_28055__$1 = state_28055;
var statearr_28128_28194 = state_28055__$1;
(statearr_28128_28194[(2)] = reload_dependents);

(statearr_28128_28194[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28056 === (38))){
var inst_28009 = (state_28055[(16)]);
var inst_28026 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28009);
var state_28055__$1 = state_28055;
var statearr_28129_28195 = state_28055__$1;
(statearr_28129_28195[(2)] = inst_28026);

(statearr_28129_28195[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28056 === (30))){
var state_28055__$1 = state_28055;
var statearr_28130_28196 = state_28055__$1;
(statearr_28130_28196[(2)] = null);

(statearr_28130_28196[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28056 === (10))){
var inst_27929 = (state_28055[(22)]);
var inst_27931 = cljs.core.chunked_seq_QMARK_.call(null,inst_27929);
var state_28055__$1 = state_28055;
if(inst_27931){
var statearr_28131_28197 = state_28055__$1;
(statearr_28131_28197[(1)] = (13));

} else {
var statearr_28132_28198 = state_28055__$1;
(statearr_28132_28198[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28056 === (18))){
var inst_27963 = (state_28055[(2)]);
var state_28055__$1 = state_28055;
if(cljs.core.truth_(inst_27963)){
var statearr_28133_28199 = state_28055__$1;
(statearr_28133_28199[(1)] = (19));

} else {
var statearr_28134_28200 = state_28055__$1;
(statearr_28134_28200[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28056 === (42))){
var state_28055__$1 = state_28055;
var statearr_28135_28201 = state_28055__$1;
(statearr_28135_28201[(2)] = null);

(statearr_28135_28201[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28056 === (37))){
var inst_28021 = (state_28055[(2)]);
var state_28055__$1 = state_28055;
var statearr_28136_28202 = state_28055__$1;
(statearr_28136_28202[(2)] = inst_28021);

(statearr_28136_28202[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28056 === (8))){
var inst_27929 = (state_28055[(22)]);
var inst_27916 = (state_28055[(8)]);
var inst_27929__$1 = cljs.core.seq.call(null,inst_27916);
var state_28055__$1 = (function (){var statearr_28137 = state_28055;
(statearr_28137[(22)] = inst_27929__$1);

return statearr_28137;
})();
if(inst_27929__$1){
var statearr_28138_28203 = state_28055__$1;
(statearr_28138_28203[(1)] = (10));

} else {
var statearr_28139_28204 = state_28055__$1;
(statearr_28139_28204[(1)] = (11));

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
});})(c__24367__auto__,map__27901,map__27901__$1,opts,before_jsload,on_jsload,reload_dependents,map__27902,map__27902__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__24255__auto__,c__24367__auto__,map__27901,map__27901__$1,opts,before_jsload,on_jsload,reload_dependents,map__27902,map__27902__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__24256__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__24256__auto____0 = (function (){
var statearr_28143 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28143[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__24256__auto__);

(statearr_28143[(1)] = (1));

return statearr_28143;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__24256__auto____1 = (function (state_28055){
while(true){
var ret_value__24257__auto__ = (function (){try{while(true){
var result__24258__auto__ = switch__24255__auto__.call(null,state_28055);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24258__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24258__auto__;
}
break;
}
}catch (e28144){if((e28144 instanceof Object)){
var ex__24259__auto__ = e28144;
var statearr_28145_28205 = state_28055;
(statearr_28145_28205[(5)] = ex__24259__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28055);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28144;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24257__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28206 = state_28055;
state_28055 = G__28206;
continue;
} else {
return ret_value__24257__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__24256__auto__ = function(state_28055){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__24256__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__24256__auto____1.call(this,state_28055);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__24256__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__24256__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__24256__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__24256__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__24256__auto__;
})()
;})(switch__24255__auto__,c__24367__auto__,map__27901,map__27901__$1,opts,before_jsload,on_jsload,reload_dependents,map__27902,map__27902__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__24369__auto__ = (function (){var statearr_28146 = f__24368__auto__.call(null);
(statearr_28146[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24367__auto__);

return statearr_28146;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24369__auto__);
});})(c__24367__auto__,map__27901,map__27901__$1,opts,before_jsload,on_jsload,reload_dependents,map__27902,map__27902__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__24367__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__28209,link){
var map__28212 = p__28209;
var map__28212__$1 = ((((!((map__28212 == null)))?((((map__28212.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28212.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28212):map__28212);
var file = cljs.core.get.call(null,map__28212__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__28212,map__28212__$1,file){
return (function (p1__28207_SHARP_,p2__28208_SHARP_){
if(cljs.core._EQ_.call(null,p1__28207_SHARP_,p2__28208_SHARP_)){
return p1__28207_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__28212,map__28212__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__28218){
var map__28219 = p__28218;
var map__28219__$1 = ((((!((map__28219 == null)))?((((map__28219.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28219.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28219):map__28219);
var match_length = cljs.core.get.call(null,map__28219__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__28219__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__28214_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__28214_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4425__auto__)){
var res = temp__4425__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args28221 = [];
var len__21551__auto___28224 = arguments.length;
var i__21552__auto___28225 = (0);
while(true){
if((i__21552__auto___28225 < len__21551__auto___28224)){
args28221.push((arguments[i__21552__auto___28225]));

var G__28226 = (i__21552__auto___28225 + (1));
i__21552__auto___28225 = G__28226;
continue;
} else {
}
break;
}

var G__28223 = args28221.length;
switch (G__28223) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28221.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__28228_SHARP_,p2__28229_SHARP_){
return cljs.core.assoc.call(null,p1__28228_SHARP_,cljs.core.get.call(null,p2__28229_SHARP_,key),p2__28229_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__28230){
var map__28233 = p__28230;
var map__28233__$1 = ((((!((map__28233 == null)))?((((map__28233.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28233.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28233):map__28233);
var f_data = map__28233__$1;
var file = cljs.core.get.call(null,map__28233__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__28235,files_msg){
var map__28242 = p__28235;
var map__28242__$1 = ((((!((map__28242 == null)))?((((map__28242.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28242.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28242):map__28242);
var opts = map__28242__$1;
var on_cssload = cljs.core.get.call(null,map__28242__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__28244_28248 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__28245_28249 = null;
var count__28246_28250 = (0);
var i__28247_28251 = (0);
while(true){
if((i__28247_28251 < count__28246_28250)){
var f_28252 = cljs.core._nth.call(null,chunk__28245_28249,i__28247_28251);
figwheel.client.file_reloading.reload_css_file.call(null,f_28252);

var G__28253 = seq__28244_28248;
var G__28254 = chunk__28245_28249;
var G__28255 = count__28246_28250;
var G__28256 = (i__28247_28251 + (1));
seq__28244_28248 = G__28253;
chunk__28245_28249 = G__28254;
count__28246_28250 = G__28255;
i__28247_28251 = G__28256;
continue;
} else {
var temp__4425__auto___28257 = cljs.core.seq.call(null,seq__28244_28248);
if(temp__4425__auto___28257){
var seq__28244_28258__$1 = temp__4425__auto___28257;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28244_28258__$1)){
var c__21296__auto___28259 = cljs.core.chunk_first.call(null,seq__28244_28258__$1);
var G__28260 = cljs.core.chunk_rest.call(null,seq__28244_28258__$1);
var G__28261 = c__21296__auto___28259;
var G__28262 = cljs.core.count.call(null,c__21296__auto___28259);
var G__28263 = (0);
seq__28244_28248 = G__28260;
chunk__28245_28249 = G__28261;
count__28246_28250 = G__28262;
i__28247_28251 = G__28263;
continue;
} else {
var f_28264 = cljs.core.first.call(null,seq__28244_28258__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_28264);

var G__28265 = cljs.core.next.call(null,seq__28244_28258__$1);
var G__28266 = null;
var G__28267 = (0);
var G__28268 = (0);
seq__28244_28248 = G__28265;
chunk__28245_28249 = G__28266;
count__28246_28250 = G__28267;
i__28247_28251 = G__28268;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__28242,map__28242__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__28242,map__28242__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map