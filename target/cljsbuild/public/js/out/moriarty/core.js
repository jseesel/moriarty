// Compiled by ClojureScript 1.7.170 {}
goog.provide('moriarty.core');
goog.require('cljs.core');
goog.require('moriarty.pages.play');
goog.require('reagent.core');
goog.require('moriarty.pages.groups');
goog.require('secretary.core');
goog.require('moriarty.pages.home');
goog.require('moriarty.pages.games');
goog.require('reagent.session');
goog.require('accountant.core');
goog.require('material_ui.core');
moriarty.core.base_layout = (function moriarty$core$base_layout(var_args){
var args__21566__auto__ = [];
var len__21559__auto___26375 = arguments.length;
var i__21560__auto___26376 = (0);
while(true){
if((i__21560__auto___26376 < len__21559__auto___26375)){
args__21566__auto__.push((arguments[i__21560__auto___26376]));

var G__26377 = (i__21560__auto___26376 + (1));
i__21560__auto___26376 = G__26377;
continue;
} else {
}
break;
}

var argseq__21567__auto__ = ((((0) < args__21566__auto__.length))?(new cljs.core.IndexedSeq(args__21566__auto__.slice((0)),(0))):null);
return moriarty.core.base_layout.cljs$core$IFn$_invoke$arity$variadic(argseq__21567__auto__);
});

moriarty.core.base_layout.cljs$core$IFn$_invoke$arity$variadic = (function (children){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [material_ui.core.AppBar,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",636505583),"Moriarty's Machinations",new cljs.core.Keyword(null,"onTitleTouchTap","onTitleTouchTap",-670065901),(function (){
return accountant.core.navigate_BANG_.call(null,"/");
}),new cljs.core.Keyword(null,"zDepth","zDepth",1069399109),(0),new cljs.core.Keyword(null,"showMenuIconButton","showMenuIconButton",-1404568682),false], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container-fluid","div.container-fluid",3929737),children], null)], null);
});

moriarty.core.base_layout.cljs$lang$maxFixedArity = (0);

moriarty.core.base_layout.cljs$lang$applyTo = (function (seq26374){
return moriarty.core.base_layout.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26374));
});
moriarty.core.home_page = (function moriarty$core$home_page(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [moriarty.core.base_layout,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [moriarty.pages.home.home_page], null)], null);
});
moriarty.core.play_page = (function moriarty$core$play_page(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [moriarty.core.base_layout,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [moriarty.pages.play.play_page], null)], null);
});
moriarty.core.group_page = (function moriarty$core$group_page(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [moriarty.core.base_layout,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [moriarty.pages.groups.group], null)], null);
});
moriarty.core.current_page = (function moriarty$core$current_page(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.session.get.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180))], null)], null);
});
moriarty.core.set_page_BANG_ = (function moriarty$core$set_page_BANG_(var_args){
var args26378 = [];
var len__21559__auto___26381 = arguments.length;
var i__21560__auto___26382 = (0);
while(true){
if((i__21560__auto___26382 < len__21559__auto___26381)){
args26378.push((arguments[i__21560__auto___26382]));

var G__26383 = (i__21560__auto___26382 + (1));
i__21560__auto___26382 = G__26383;
continue;
} else {
}
break;
}

var G__26380 = args26378.length;
switch (G__26380) {
case 1:
return moriarty.core.set_page_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return moriarty.core.set_page_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26378.length)].join('')));

}
});

moriarty.core.set_page_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (current){
return moriarty.core.set_page_BANG_.call(null,current,cljs.core.PersistentArrayMap.EMPTY);
});

moriarty.core.set_page_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (current,kws){
reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),current);

return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"route-params","route-params",2111411055),kws);
});

moriarty.core.set_page_BANG_.cljs$lang$maxFixedArity = 2;
var action__23142__auto___26388 = (function (params__23143__auto__){
if(cljs.core.map_QMARK_.call(null,params__23143__auto__)){
var map__26385 = params__23143__auto__;
var map__26385__$1 = ((((!((map__26385 == null)))?((((map__26385.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26385.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26385):map__26385);
return moriarty.core.set_page_BANG_.call(null,new cljs.core.Var(function(){return moriarty.core.home_page;},new cljs.core.Symbol("moriarty.core","home-page","moriarty.core/home-page",-1462658489,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"moriarty.core","moriarty.core",1853059161,null),new cljs.core.Symbol(null,"home-page","home-page",-850279575,null),"src/cljs/moriarty/core.cljs",16,1,24,24,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(moriarty.core.home_page)?moriarty.core.home_page.cljs$lang$test:null)])));
} else {
if(cljs.core.vector_QMARK_.call(null,params__23143__auto__)){
var vec__26387 = params__23143__auto__;
return moriarty.core.set_page_BANG_.call(null,new cljs.core.Var(function(){return moriarty.core.home_page;},new cljs.core.Symbol("moriarty.core","home-page","moriarty.core/home-page",-1462658489,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"moriarty.core","moriarty.core",1853059161,null),new cljs.core.Symbol(null,"home-page","home-page",-850279575,null),"src/cljs/moriarty/core.cljs",16,1,24,24,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(moriarty.core.home_page)?moriarty.core.home_page.cljs$lang$test:null)])));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__23142__auto___26388);

var action__23142__auto___26392 = (function (params__23143__auto__){
if(cljs.core.map_QMARK_.call(null,params__23143__auto__)){
var map__26389 = params__23143__auto__;
var map__26389__$1 = ((((!((map__26389 == null)))?((((map__26389.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26389.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26389):map__26389);
var id = cljs.core.get.call(null,map__26389__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var person_id = cljs.core.get.call(null,map__26389__$1,new cljs.core.Keyword(null,"person-id","person-id",1251942696));
moriarty.pages.games.get_game_BANG_.call(null,id);

moriarty.pages.games.get_info_BANG_.call(null,id,person_id);

return moriarty.core.set_page_BANG_.call(null,new cljs.core.Var(function(){return moriarty.core.play_page;},new cljs.core.Symbol("moriarty.core","play-page","moriarty.core/play-page",-312578197,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"moriarty.core","moriarty.core",1853059161,null),new cljs.core.Symbol(null,"play-page","play-page",1256035909,null),"src/cljs/moriarty/core.cljs",16,1,27,27,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(moriarty.core.play_page)?moriarty.core.play_page.cljs$lang$test:null)])),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"person-id","person-id",1251942696),person_id], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__23143__auto__)){
var vec__26391 = params__23143__auto__;
var id = cljs.core.nth.call(null,vec__26391,(0),null);
var person_id = cljs.core.nth.call(null,vec__26391,(1),null);
moriarty.pages.games.get_game_BANG_.call(null,id);

moriarty.pages.games.get_info_BANG_.call(null,id,person_id);

return moriarty.core.set_page_BANG_.call(null,new cljs.core.Var(function(){return moriarty.core.play_page;},new cljs.core.Symbol("moriarty.core","play-page","moriarty.core/play-page",-312578197,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"moriarty.core","moriarty.core",1853059161,null),new cljs.core.Symbol(null,"play-page","play-page",1256035909,null),"src/cljs/moriarty/core.cljs",16,1,27,27,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(moriarty.core.play_page)?moriarty.core.play_page.cljs$lang$test:null)])),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"person-id","person-id",1251942696),person_id], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/games/:id/play/:person-id",action__23142__auto___26392);

var action__23142__auto___26396 = (function (params__23143__auto__){
if(cljs.core.map_QMARK_.call(null,params__23143__auto__)){
var map__26393 = params__23143__auto__;
var map__26393__$1 = ((((!((map__26393 == null)))?((((map__26393.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26393.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26393):map__26393);
var id = cljs.core.get.call(null,map__26393__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return moriarty.core.set_page_BANG_.call(null,new cljs.core.Var(function(){return moriarty.core.group_page;},new cljs.core.Symbol("moriarty.core","group-page","moriarty.core/group-page",804589078,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"moriarty.core","moriarty.core",1853059161,null),new cljs.core.Symbol(null,"group-page","group-page",-1921665228,null),"src/cljs/moriarty/core.cljs",17,1,30,30,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(moriarty.core.group_page)?moriarty.core.group_page.cljs$lang$test:null)])),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__23143__auto__)){
var vec__26395 = params__23143__auto__;
var id = cljs.core.nth.call(null,vec__26395,(0),null);
return moriarty.core.set_page_BANG_.call(null,new cljs.core.Var(function(){return moriarty.core.group_page;},new cljs.core.Symbol("moriarty.core","group-page","moriarty.core/group-page",804589078,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"moriarty.core","moriarty.core",1853059161,null),new cljs.core.Symbol(null,"group-page","group-page",-1921665228,null),"src/cljs/moriarty/core.cljs",17,1,30,30,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(moriarty.core.group_page)?moriarty.core.group_page.cljs$lang$test:null)])),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/groups/:id",action__23142__auto___26396);

moriarty.core.mount_root = (function moriarty$core$mount_root(){
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [moriarty.core.current_page], null),document.getElementById("app"));
});
moriarty.core.init_BANG_ = (function moriarty$core$init_BANG_(){
accountant.core.configure_navigation_BANG_.call(null);

accountant.core.dispatch_current_BANG_.call(null);

return moriarty.core.mount_root.call(null);
});

//# sourceMappingURL=core.js.map