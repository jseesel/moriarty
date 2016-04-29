// Compiled by ClojureScript 1.7.170 {}
goog.provide('moriarty.util');
goog.require('cljs.core');
moriarty.util.set_prop = (function moriarty$util$set_prop(state,key){
return (function (event){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,key,event.target.value);
});
});

//# sourceMappingURL=util.js.map
