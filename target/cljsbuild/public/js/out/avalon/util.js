// Compiled by ClojureScript 1.7.170 {}
goog.provide('avalon.util');
goog.require('cljs.core');
avalon.util.set_prop = (function avalon$util$set_prop(state,key){
return (function (event){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,key,event.target.value);
});
});

//# sourceMappingURL=util.js.map