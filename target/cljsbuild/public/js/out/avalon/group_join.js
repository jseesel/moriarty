// Compiled by ClojureScript 1.7.170 {}
goog.provide('avalon.group_join');
goog.require('cljs.core');
goog.require('ajax.core');
goog.require('reagent.session');
goog.require('reagent.core');
goog.require('reagent_forms.core');
goog.require('accountant.core');
goog.require('material_ui.core');
avalon.group_join.join_handler = (function avalon$group_join$join_handler(response){
reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"group","group",582596132),response);

return accountant.core.navigate_BANG_.call(null,[cljs.core.str("/groups/"),cljs.core.str(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(response))].join(''));
});
avalon.group_join.join_error = (function avalon$group_join$join_error(p__29677){
var map__29680 = p__29677;
var map__29680__$1 = ((((!((map__29680 == null)))?((((map__29680.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29680.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29680):map__29680);
var status = cljs.core.get.call(null,map__29680__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__29680__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return console.log([cljs.core.str("something bad happened: "),cljs.core.str(status),cljs.core.str(" "),cljs.core.str(status_text)].join(''));
});
avalon.group_join.join_group = (function avalon$group_join$join_group(name,code){
return ajax.core.POST.call(null,"/api/groups/join",new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"code","code",1586293142),code], null),new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true,new cljs.core.Keyword(null,"handler","handler",-195596612),avalon.group_join.join_handler,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),avalon.group_join.join_error], null));
});
avalon.group_join.join_form = (function avalon$group_join$join_form(){
var state = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
return ((function (state){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-xs-12.col-sm-4","div.col-xs-12.col-sm-4",-125047828),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.form-group","div.form-group",-1721134770),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [material_ui.core.TextField,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"hintText","hintText",-1810446561),"Please enter a group name",new cljs.core.Keyword(null,"floatingLabelText","floatingLabelText",-431719650),"Group Name",new cljs.core.Keyword(null,"fullWidth","fullWidth",-1436357554),true,new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"group-name","group-name",-232140110).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (state){
return (function (p1__29682_SHARP_){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"group-name","group-name",-232140110),p1__29682_SHARP_.target.value);
});})(state))
], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [material_ui.core.TextField,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"hintText","hintText",-1810446561),"Please enter a passcode",new cljs.core.Keyword(null,"floatingLabelText","floatingLabelText",-431719650),"Password",new cljs.core.Keyword(null,"fullWidth","fullWidth",-1436357554),true,new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"group-code","group-code",538359099).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)),new cljs.core.Keyword(null,"type","type",1174270348),"password",new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (state){
return (function (p1__29683_SHARP_){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"group-code","group-code",538359099),p1__29683_SHARP_.target.value);
});})(state))
], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [material_ui.core.RaisedButton,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"primary","primary",817773892),true,new cljs.core.Keyword(null,"label","label",1718410804),"Join",new cljs.core.Keyword(null,"onTouchTap","onTouchTap",1973229336),((function (state){
return (function (){
return avalon.group_join.join_group.call(null,new cljs.core.Keyword(null,"group-name","group-name",-232140110).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)),new cljs.core.Keyword(null,"group-code","group-code",538359099).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)));
});})(state))
], null)], null)], null)], null)], null);
});
;})(state))
});

//# sourceMappingURL=group_join.js.map