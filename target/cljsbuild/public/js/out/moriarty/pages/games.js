// Compiled by ClojureScript 1.7.170 {}
goog.provide('moriarty.pages.games');
goog.require('cljs.core');
goog.require('ajax.core');
goog.require('moriarty.utils');
goog.require('reagent.session');
goog.require('reagent.core');
goog.require('cljs.pprint');
goog.require('accountant.core');
goog.require('material_ui.core');
moriarty.pages.games.handle_error = (function moriarty$pages$games$handle_error(p__24163){
var map__24169 = p__24163;
var map__24169__$1 = ((((!((map__24169 == null)))?((((map__24169.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24169.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24169):map__24169);
var status = cljs.core.get.call(null,map__24169__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var response = cljs.core.get.call(null,map__24169__$1,new cljs.core.Keyword(null,"response","response",-1068424192));
var pred__24171 = cljs.core._EQ_;
var expr__24172 = status;
if(cljs.core.truth_(pred__24171.call(null,(422),expr__24172))){
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"error","error",-978969032),moriarty.utils.capitalize.call(null,cljs.core.first.call(null,cljs.core.val.call(null,cljs.core.first.call(null,response)))));
} else {
if(cljs.core.truth_(pred__24171.call(null,status,expr__24172))){
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Unexpected error, please try again");
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__24172)].join('')));
}
}
});
moriarty.pages.games.get_game_BANG_ = (function moriarty$pages$games$get_game_BANG_(var_args){
var args__21564__auto__ = [];
var len__21557__auto___24180 = arguments.length;
var i__21558__auto___24181 = (0);
while(true){
if((i__21558__auto___24181 < len__21557__auto___24180)){
args__21564__auto__.push((arguments[i__21558__auto___24181]));

var G__24182 = (i__21558__auto___24181 + (1));
i__21558__auto___24181 = G__24182;
continue;
} else {
}
break;
}

var argseq__21565__auto__ = ((((1) < args__21564__auto__.length))?(new cljs.core.IndexedSeq(args__21564__auto__.slice((1)),(0))):null);
return moriarty.pages.games.get_game_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21565__auto__);
});

moriarty.pages.games.get_game_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (id,p__24177){
var map__24178 = p__24177;
var map__24178__$1 = ((((!((map__24178 == null)))?((((map__24178.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24178.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24178):map__24178);
var force = cljs.core.get.call(null,map__24178__$1,new cljs.core.Keyword(null,"force","force",781957286),false);
var game = reagent.session.get.call(null,new cljs.core.Keyword(null,"game","game",-441523833));
if(cljs.core.truth_((function (){var or__20499__auto__ = force;
if(cljs.core.truth_(or__20499__auto__)){
return or__20499__auto__;
} else {
return cljs.core.not_EQ_.call(null,id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(game));
}
})())){
return ajax.core.GET.call(null,[cljs.core.str("/api/games/"),cljs.core.str(id)].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true,new cljs.core.Keyword(null,"handler","handler",-195596612),((function (game,map__24178,map__24178__$1,force){
return (function (p1__24174_SHARP_){
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"game","game",-441523833),p1__24174_SHARP_);
});})(game,map__24178,map__24178__$1,force))
], null));
} else {
return null;
}
});

moriarty.pages.games.get_game_BANG_.cljs$lang$maxFixedArity = (1);

moriarty.pages.games.get_game_BANG_.cljs$lang$applyTo = (function (seq24175){
var G__24176 = cljs.core.first.call(null,seq24175);
var seq24175__$1 = cljs.core.next.call(null,seq24175);
return moriarty.pages.games.get_game_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__24176,seq24175__$1);
});
moriarty.pages.games.get_info_BANG_ = (function moriarty$pages$games$get_info_BANG_(id,person_id){
return ajax.core.GET.call(null,[cljs.core.str("/api/games/"),cljs.core.str(id),cljs.core.str("/people/"),cljs.core.str(person_id),cljs.core.str("/info")].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true,new cljs.core.Keyword(null,"handler","handler",-195596612),(function (p1__24183_SHARP_){
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"info","info",-317069002),p1__24183_SHARP_);
})], null));
});
moriarty.pages.games.delete_player_BANG_ = (function moriarty$pages$games$delete_player_BANG_(id,name){
return ajax.core.DELETE.call(null,[cljs.core.str("/api/games/"),cljs.core.str(id),cljs.core.str("/people")].join(''),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),name], null),new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true,new cljs.core.Keyword(null,"handler","handler",-195596612),(function (p1__24184_SHARP_){
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"game","game",-441523833),p1__24184_SHARP_);
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),moriarty.pages.games.handle_error], null));
});
moriarty.pages.games.toggle_role_BANG_ = (function moriarty$pages$games$toggle_role_BANG_(id,role,on){
var verb = (cljs.core.truth_(on)?ajax.core.POST:ajax.core.DELETE);
return verb.call(null,[cljs.core.str("/api/games/"),cljs.core.str(id),cljs.core.str("/roles/"),cljs.core.str(role.toLowerCase())].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true,new cljs.core.Keyword(null,"handler","handler",-195596612),((function (verb){
return (function (p1__24185_SHARP_){
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"game","game",-441523833),p1__24185_SHARP_);
});})(verb))
], null));
});
moriarty.pages.games.role_toggle = (function moriarty$pages$games$role_toggle(id,roles,role){
var on = typeof cljs.core.set.call(null,roles).call(null,role.toLowerCase()) === 'string';
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [material_ui.core.Toggle,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"label","label",1718410804),role,new cljs.core.Keyword(null,"labelPosition","labelPosition",2087759106),"left",new cljs.core.Keyword(null,"toggled","toggled",1679391819),on,new cljs.core.Keyword(null,"labelStyle","labelStyle",-1942994391),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"normal"], null),new cljs.core.Keyword(null,"onToggle","onToggle",1288160565),((function (on){
return (function (){
return moriarty.pages.games.toggle_role_BANG_.call(null,id,role,!(on));
});})(on))
], null)], null);
});
moriarty.pages.games.start_game_BANG_ = (function moriarty$pages$games$start_game_BANG_(id){
return ajax.core.POST.call(null,[cljs.core.str("/api/games/"),cljs.core.str(id),cljs.core.str("/play")].join(''),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true,new cljs.core.Keyword(null,"handler","handler",-195596612),(function (resp){
reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"game","game",-441523833),resp);

return accountant.core.navigate_BANG_.call(null,[cljs.core.str("/games/"),cljs.core.str(id),cljs.core.str("/play/"),cljs.core.str(reagent.session.get.call(null,new cljs.core.Keyword(null,"person-id","person-id",1251942696)))].join(''));
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),moriarty.pages.games.handle_error], null));
});
moriarty.pages.games.refresh_game = (function moriarty$pages$games$refresh_game(){
var params = reagent.session.get.call(null,new cljs.core.Keyword(null,"route-params","route-params",2111411055));
moriarty.pages.games.get_game_BANG_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(params),new cljs.core.Keyword(null,"force","force",781957286),true);

return moriarty.pages.games.get_info_BANG_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(params),new cljs.core.Keyword(null,"person-id","person-id",1251942696).cljs$core$IFn$_invoke$arity$1(params));
});
moriarty.pages.games.game_page = (function (){var timer = reagent.core.atom.call(null,null);
return cljs.core.with_meta.call(null,((function (timer){
return (function (){
var game = reagent.session.get.call(null,new cljs.core.Keyword(null,"game","game",-441523833));
var map__24186 = game;
var map__24186__$1 = ((((!((map__24186 == null)))?((((map__24186.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24186.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24186):map__24186);
var id = cljs.core.get.call(null,map__24186__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var people = cljs.core.get.call(null,map__24186__$1,new cljs.core.Keyword(null,"people","people",1443537404));
var roles = cljs.core.get.call(null,map__24186__$1,new cljs.core.Keyword(null,"roles","roles",143379530));
var error = reagent.session.get.call(null,new cljs.core.Keyword(null,"error","error",-978969032));
if(cljs.core.truth_(game)){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [moriarty.utils.row,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [moriarty.utils.col,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-center","div.text-center",921869624),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3.status","h3.status",175479490),"Waiting for players..."], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4.code","h4.code",-1602370412),"Access code: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),id], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [moriarty.utils.row,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [moriarty.utils.col,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [material_ui.core.List,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"subheader","subheader",-1028810273),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Players - ",cljs.core.count.call(null,people)], null)], null),(function (){var iter__21271__auto__ = ((function (game,map__24186,map__24186__$1,id,people,roles,error,timer){
return (function moriarty$pages$games$iter__24188(s__24189){
return (new cljs.core.LazySeq(null,((function (game,map__24186,map__24186__$1,id,people,roles,error,timer){
return (function (){
var s__24189__$1 = s__24189;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__24189__$1);
if(temp__4425__auto__){
var s__24189__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__24189__$2)){
var c__21269__auto__ = cljs.core.chunk_first.call(null,s__24189__$2);
var size__21270__auto__ = cljs.core.count.call(null,c__21269__auto__);
var b__24191 = cljs.core.chunk_buffer.call(null,size__21270__auto__);
if((function (){var i__24190 = (0);
while(true){
if((i__24190 < size__21270__auto__)){
var player = cljs.core._nth.call(null,c__21269__auto__,i__24190);
cljs.core.chunk_append.call(null,b__24191,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [material_ui.core.ListItem,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.player","div.player",8830217),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [material_ui.core.IconButton,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"iconClassName","iconClassName",1821763512),"mdfi_action_delete",new cljs.core.Keyword(null,"onTouchTap","onTouchTap",1973229336),((function (i__24190,player,c__21269__auto__,size__21270__auto__,b__24191,s__24189__$2,temp__4425__auto__,game,map__24186,map__24186__$1,id,people,roles,error,timer){
return (function (){
return moriarty.pages.games.delete_player_BANG_.call(null,id,player);
});})(i__24190,player,c__21269__auto__,size__21270__auto__,b__24191,s__24189__$2,temp__4425__auto__,game,map__24186,map__24186__$1,id,people,roles,error,timer))
], null)], null),player], null)], null));

var G__24192 = (i__24190 + (1));
i__24190 = G__24192;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24191),moriarty$pages$games$iter__24188.call(null,cljs.core.chunk_rest.call(null,s__24189__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24191),null);
}
} else {
var player = cljs.core.first.call(null,s__24189__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [material_ui.core.ListItem,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.player","div.player",8830217),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [material_ui.core.IconButton,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"iconClassName","iconClassName",1821763512),"mdfi_action_delete",new cljs.core.Keyword(null,"onTouchTap","onTouchTap",1973229336),((function (player,s__24189__$2,temp__4425__auto__,game,map__24186,map__24186__$1,id,people,roles,error,timer){
return (function (){
return moriarty.pages.games.delete_player_BANG_.call(null,id,player);
});})(player,s__24189__$2,temp__4425__auto__,game,map__24186,map__24186__$1,id,people,roles,error,timer))
], null)], null),player], null)], null),moriarty$pages$games$iter__24188.call(null,cljs.core.rest.call(null,s__24189__$2)));
}
} else {
return null;
}
break;
}
});})(game,map__24186,map__24186__$1,id,people,roles,error,timer))
,null,null));
});})(game,map__24186,map__24186__$1,id,people,roles,error,timer))
;
return iter__21271__auto__.call(null,people);
})()], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [material_ui.core.ListDivider], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [moriarty.utils.row,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-xs-8.col-xs-offset-2.start-btn","div.col-xs-8.col-xs-offset-2.start-btn",-1166384136),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"40px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [material_ui.core.RaisedButton,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"primary","primary",817773892),true,new cljs.core.Keyword(null,"label","label",1718410804),"Start",new cljs.core.Keyword(null,"fullWidth","fullWidth",-1436357554),true,new cljs.core.Keyword(null,"onTouchTap","onTouchTap",1973229336),((function (game,map__24186,map__24186__$1,id,people,roles,error,timer){
return (function (){
return moriarty.pages.games.start_game_BANG_.call(null,id);
});})(game,map__24186,map__24186__$1,id,people,roles,error,timer))
], null)], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [material_ui.core.Dialog,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"Unable to Start Game",new cljs.core.Keyword(null,"open","open",-1763596448),error,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"500px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),error], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [material_ui.core.FlatButton,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"label","label",1718410804),"OK",new cljs.core.Keyword(null,"primary","primary",817773892),true,new cljs.core.Keyword(null,"onTouchTap","onTouchTap",1973229336),((function (game,map__24186,map__24186__$1,id,people,roles,error,timer){
return (function (){
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"error","error",-978969032),null);
});})(game,map__24186,map__24186__$1,id,people,roles,error,timer))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"float","float",-1732389368),"right"], null)], null)], null)], null)], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [moriarty.utils.row,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [moriarty.utils.col,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-center","div.text-center",921869624),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [material_ui.core.CircularProgress], null)], null)], null)], null);
}
});})(timer))
,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),((function (timer){
return (function (){
return cljs.core.reset_BANG_.call(null,timer,setInterval(moriarty.pages.games.refresh_game,(5000)));
});})(timer))
,new cljs.core.Keyword(null,"component-will-unmount","component-will-unmount",-2058314698),((function (timer){
return (function (){
return clearInterval(cljs.core.deref.call(null,timer));
});})(timer))
], null));
})();

//# sourceMappingURL=games.js.map