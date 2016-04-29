// Compiled by ClojureScript 1.7.170 {}
goog.provide('avalon.core');
goog.require('cljs.core');
goog.require('avalon.pages.play');
goog.require('reagent.core');
goog.require('avalon.pages.groups');
goog.require('secretary.core');
goog.require('avalon.pages.home');
goog.require('avalon.pages.games');
goog.require('reagent.session');
goog.require('accountant.core');
goog.require('material_ui.core');
avalon.core.base_layout = (function avalon$core$base_layout(var_args){
var args__21564__auto__ = [];
var len__21557__auto___28976 = arguments.length;
var i__21558__auto___28977 = (0);
while(true){
if((i__21558__auto___28977 < len__21557__auto___28976)){
args__21564__auto__.push((arguments[i__21558__auto___28977]));

var G__28978 = (i__21558__auto___28977 + (1));
i__21558__auto___28977 = G__28978;
continue;
} else {
}
break;
}

var argseq__21565__auto__ = ((((0) < args__21564__auto__.length))?(new cljs.core.IndexedSeq(args__21564__auto__.slice((0)),(0))):null);
return avalon.core.base_layout.cljs$core$IFn$_invoke$arity$variadic(argseq__21565__auto__);
});

avalon.core.base_layout.cljs$core$IFn$_invoke$arity$variadic = (function (children){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [material_ui.core.AppBar,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",636505583),"Avalon",new cljs.core.Keyword(null,"onTitleTouchTap","onTitleTouchTap",-670065901),(function (){
return accountant.core.navigate_BANG_.call(null,"/");
}),new cljs.core.Keyword(null,"zDepth","zDepth",1069399109),(0),new cljs.core.Keyword(null,"showMenuIconButton","showMenuIconButton",-1404568682),false], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container-fluid","div.container-fluid",3929737),children], null)], null);
});

avalon.core.base_layout.cljs$lang$maxFixedArity = (0);

avalon.core.base_layout.cljs$lang$applyTo = (function (seq28975){
return avalon.core.base_layout.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28975));
});
avalon.core.home_page = (function avalon$core$home_page(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [avalon.core.base_layout,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [avalon.pages.home.home_page], null)], null);
});
avalon.core.play_page = (function avalon$core$play_page(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [avalon.core.base_layout,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [avalon.pages.play.play_page], null)], null);
});
avalon.core.group_page = (function avalon$core$group_page(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [avalon.core.base_layout,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [avalon.pages.groups.group], null)], null);
});
avalon.core.current_page = (function avalon$core$current_page(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.session.get.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180))], null)], null);
});
avalon.core.set_page_BANG_ = (function avalon$core$set_page_BANG_(var_args){
var args28979 = [];
var len__21557__auto___28982 = arguments.length;
var i__21558__auto___28983 = (0);
while(true){
if((i__21558__auto___28983 < len__21557__auto___28982)){
args28979.push((arguments[i__21558__auto___28983]));

var G__28984 = (i__21558__auto___28983 + (1));
i__21558__auto___28983 = G__28984;
continue;
} else {
}
break;
}

var G__28981 = args28979.length;
switch (G__28981) {
case 1:
return avalon.core.set_page_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return avalon.core.set_page_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28979.length)].join('')));

}
});

avalon.core.set_page_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (current){
return avalon.core.set_page_BANG_.call(null,current,cljs.core.PersistentArrayMap.EMPTY);
});

avalon.core.set_page_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (current,kws){
reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),current);

return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"route-params","route-params",2111411055),kws);
});

avalon.core.set_page_BANG_.cljs$lang$maxFixedArity = 2;
var action__23141__auto___28989 = (function (params__23142__auto__){
if(cljs.core.map_QMARK_.call(null,params__23142__auto__)){
var map__28986 = params__23142__auto__;
var map__28986__$1 = ((((!((map__28986 == null)))?((((map__28986.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28986.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28986):map__28986);
return avalon.core.set_page_BANG_.call(null,new cljs.core.Var(function(){return avalon.core.home_page;},new cljs.core.Symbol("avalon.core","home-page","avalon.core/home-page",-1635731433,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"avalon.core","avalon.core",-519356548,null),new cljs.core.Symbol(null,"home-page","home-page",-850279575,null),"src/cljs/avalon/core.cljs",16,1,24,24,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(avalon.core.home_page)?avalon.core.home_page.cljs$lang$test:null)])));
} else {
if(cljs.core.vector_QMARK_.call(null,params__23142__auto__)){
var vec__28988 = params__23142__auto__;
return avalon.core.set_page_BANG_.call(null,new cljs.core.Var(function(){return avalon.core.home_page;},new cljs.core.Symbol("avalon.core","home-page","avalon.core/home-page",-1635731433,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"avalon.core","avalon.core",-519356548,null),new cljs.core.Symbol(null,"home-page","home-page",-850279575,null),"src/cljs/avalon/core.cljs",16,1,24,24,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(avalon.core.home_page)?avalon.core.home_page.cljs$lang$test:null)])));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__23141__auto___28989);

var action__23141__auto___28993 = (function (params__23142__auto__){
if(cljs.core.map_QMARK_.call(null,params__23142__auto__)){
var map__28990 = params__23142__auto__;
var map__28990__$1 = ((((!((map__28990 == null)))?((((map__28990.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28990.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28990):map__28990);
var id = cljs.core.get.call(null,map__28990__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var person_id = cljs.core.get.call(null,map__28990__$1,new cljs.core.Keyword(null,"person-id","person-id",1251942696));
avalon.pages.games.get_game_BANG_.call(null,id);

avalon.pages.games.get_info_BANG_.call(null,id,person_id);

return avalon.core.set_page_BANG_.call(null,new cljs.core.Var(function(){return avalon.core.play_page;},new cljs.core.Symbol("avalon.core","play-page","avalon.core/play-page",-1758524133,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"avalon.core","avalon.core",-519356548,null),new cljs.core.Symbol(null,"play-page","play-page",1256035909,null),"src/cljs/avalon/core.cljs",16,1,27,27,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(avalon.core.play_page)?avalon.core.play_page.cljs$lang$test:null)])),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"person-id","person-id",1251942696),person_id], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__23142__auto__)){
var vec__28992 = params__23142__auto__;
var id = cljs.core.nth.call(null,vec__28992,(0),null);
var person_id = cljs.core.nth.call(null,vec__28992,(1),null);
avalon.pages.games.get_game_BANG_.call(null,id);

avalon.pages.games.get_info_BANG_.call(null,id,person_id);

return avalon.core.set_page_BANG_.call(null,new cljs.core.Var(function(){return avalon.core.play_page;},new cljs.core.Symbol("avalon.core","play-page","avalon.core/play-page",-1758524133,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"avalon.core","avalon.core",-519356548,null),new cljs.core.Symbol(null,"play-page","play-page",1256035909,null),"src/cljs/avalon/core.cljs",16,1,27,27,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(avalon.core.play_page)?avalon.core.play_page.cljs$lang$test:null)])),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"person-id","person-id",1251942696),person_id], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/games/:id/play/:person-id",action__23141__auto___28993);

var action__23141__auto___28997 = (function (params__23142__auto__){
if(cljs.core.map_QMARK_.call(null,params__23142__auto__)){
var map__28994 = params__23142__auto__;
var map__28994__$1 = ((((!((map__28994 == null)))?((((map__28994.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28994.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28994):map__28994);
var id = cljs.core.get.call(null,map__28994__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return avalon.core.set_page_BANG_.call(null,new cljs.core.Var(function(){return avalon.core.group_page;},new cljs.core.Symbol("avalon.core","group-page","avalon.core/group-page",958800838,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"avalon.core","avalon.core",-519356548,null),new cljs.core.Symbol(null,"group-page","group-page",-1921665228,null),"src/cljs/avalon/core.cljs",17,1,30,30,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(avalon.core.group_page)?avalon.core.group_page.cljs$lang$test:null)])),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__23142__auto__)){
var vec__28996 = params__23142__auto__;
var id = cljs.core.nth.call(null,vec__28996,(0),null);
return avalon.core.set_page_BANG_.call(null,new cljs.core.Var(function(){return avalon.core.group_page;},new cljs.core.Symbol("avalon.core","group-page","avalon.core/group-page",958800838,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"avalon.core","avalon.core",-519356548,null),new cljs.core.Symbol(null,"group-page","group-page",-1921665228,null),"src/cljs/avalon/core.cljs",17,1,30,30,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(avalon.core.group_page)?avalon.core.group_page.cljs$lang$test:null)])),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/groups/:id",action__23141__auto___28997);

avalon.core.mount_root = (function avalon$core$mount_root(){
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [avalon.core.current_page], null),document.getElementById("app"));
});
avalon.core.init_BANG_ = (function avalon$core$init_BANG_(){
accountant.core.configure_navigation_BANG_.call(null);

accountant.core.dispatch_current_BANG_.call(null);

return avalon.core.mount_root.call(null);
});

//# sourceMappingURL=core.js.map