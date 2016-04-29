// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args24412 = [];
var len__21551__auto___24418 = arguments.length;
var i__21552__auto___24419 = (0);
while(true){
if((i__21552__auto___24419 < len__21551__auto___24418)){
args24412.push((arguments[i__21552__auto___24419]));

var G__24420 = (i__21552__auto___24419 + (1));
i__21552__auto___24419 = G__24420;
continue;
} else {
}
break;
}

var G__24414 = args24412.length;
switch (G__24414) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24412.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async24415 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24415 = (function (f,blockable,meta24416){
this.f = f;
this.blockable = blockable;
this.meta24416 = meta24416;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24415.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24417,meta24416__$1){
var self__ = this;
var _24417__$1 = this;
return (new cljs.core.async.t_cljs$core$async24415(self__.f,self__.blockable,meta24416__$1));
});

cljs.core.async.t_cljs$core$async24415.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24417){
var self__ = this;
var _24417__$1 = this;
return self__.meta24416;
});

cljs.core.async.t_cljs$core$async24415.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async24415.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async24415.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async24415.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async24415.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta24416","meta24416",132717088,null)], null);
});

cljs.core.async.t_cljs$core$async24415.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24415.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24415";

cljs.core.async.t_cljs$core$async24415.cljs$lang$ctorPrWriter = (function (this__21091__auto__,writer__21092__auto__,opt__21093__auto__){
return cljs.core._write.call(null,writer__21092__auto__,"cljs.core.async/t_cljs$core$async24415");
});

cljs.core.async.__GT_t_cljs$core$async24415 = (function cljs$core$async$__GT_t_cljs$core$async24415(f__$1,blockable__$1,meta24416){
return (new cljs.core.async.t_cljs$core$async24415(f__$1,blockable__$1,meta24416));
});

}

return (new cljs.core.async.t_cljs$core$async24415(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args24424 = [];
var len__21551__auto___24427 = arguments.length;
var i__21552__auto___24428 = (0);
while(true){
if((i__21552__auto___24428 < len__21551__auto___24427)){
args24424.push((arguments[i__21552__auto___24428]));

var G__24429 = (i__21552__auto___24428 + (1));
i__21552__auto___24428 = G__24429;
continue;
} else {
}
break;
}

var G__24426 = args24424.length;
switch (G__24426) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24424.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args24431 = [];
var len__21551__auto___24434 = arguments.length;
var i__21552__auto___24435 = (0);
while(true){
if((i__21552__auto___24435 < len__21551__auto___24434)){
args24431.push((arguments[i__21552__auto___24435]));

var G__24436 = (i__21552__auto___24435 + (1));
i__21552__auto___24435 = G__24436;
continue;
} else {
}
break;
}

var G__24433 = args24431.length;
switch (G__24433) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24431.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args24438 = [];
var len__21551__auto___24441 = arguments.length;
var i__21552__auto___24442 = (0);
while(true){
if((i__21552__auto___24442 < len__21551__auto___24441)){
args24438.push((arguments[i__21552__auto___24442]));

var G__24443 = (i__21552__auto___24442 + (1));
i__21552__auto___24442 = G__24443;
continue;
} else {
}
break;
}

var G__24440 = args24438.length;
switch (G__24440) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24438.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_24445 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_24445);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_24445,ret){
return (function (){
return fn1.call(null,val_24445);
});})(val_24445,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args24446 = [];
var len__21551__auto___24449 = arguments.length;
var i__21552__auto___24450 = (0);
while(true){
if((i__21552__auto___24450 < len__21551__auto___24449)){
args24446.push((arguments[i__21552__auto___24450]));

var G__24451 = (i__21552__auto___24450 + (1));
i__21552__auto___24450 = G__24451;
continue;
} else {
}
break;
}

var G__24448 = args24446.length;
switch (G__24448) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24446.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4423__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__21396__auto___24453 = n;
var x_24454 = (0);
while(true){
if((x_24454 < n__21396__auto___24453)){
(a[x_24454] = (0));

var G__24455 = (x_24454 + (1));
x_24454 = G__24455;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__24456 = (i + (1));
i = G__24456;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async24460 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24460 = (function (alt_flag,flag,meta24461){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta24461 = meta24461;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24460.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_24462,meta24461__$1){
var self__ = this;
var _24462__$1 = this;
return (new cljs.core.async.t_cljs$core$async24460(self__.alt_flag,self__.flag,meta24461__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async24460.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_24462){
var self__ = this;
var _24462__$1 = this;
return self__.meta24461;
});})(flag))
;

cljs.core.async.t_cljs$core$async24460.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async24460.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async24460.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async24460.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async24460.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta24461","meta24461",-1300306985,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async24460.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24460.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24460";

cljs.core.async.t_cljs$core$async24460.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__21091__auto__,writer__21092__auto__,opt__21093__auto__){
return cljs.core._write.call(null,writer__21092__auto__,"cljs.core.async/t_cljs$core$async24460");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async24460 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async24460(alt_flag__$1,flag__$1,meta24461){
return (new cljs.core.async.t_cljs$core$async24460(alt_flag__$1,flag__$1,meta24461));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async24460(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async24466 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24466 = (function (alt_handler,flag,cb,meta24467){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta24467 = meta24467;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24466.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24468,meta24467__$1){
var self__ = this;
var _24468__$1 = this;
return (new cljs.core.async.t_cljs$core$async24466(self__.alt_handler,self__.flag,self__.cb,meta24467__$1));
});

cljs.core.async.t_cljs$core$async24466.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24468){
var self__ = this;
var _24468__$1 = this;
return self__.meta24467;
});

cljs.core.async.t_cljs$core$async24466.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async24466.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async24466.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async24466.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async24466.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta24467","meta24467",566246805,null)], null);
});

cljs.core.async.t_cljs$core$async24466.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24466.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24466";

cljs.core.async.t_cljs$core$async24466.cljs$lang$ctorPrWriter = (function (this__21091__auto__,writer__21092__auto__,opt__21093__auto__){
return cljs.core._write.call(null,writer__21092__auto__,"cljs.core.async/t_cljs$core$async24466");
});

cljs.core.async.__GT_t_cljs$core$async24466 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async24466(alt_handler__$1,flag__$1,cb__$1,meta24467){
return (new cljs.core.async.t_cljs$core$async24466(alt_handler__$1,flag__$1,cb__$1,meta24467));
});

}

return (new cljs.core.async.t_cljs$core$async24466(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__24469_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24469_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__24470_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24470_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__20493__auto__ = wport;
if(cljs.core.truth_(or__20493__auto__)){
return or__20493__auto__;
} else {
return port;
}
})()], null));
} else {
var G__24471 = (i + (1));
i = G__24471;
continue;
}
} else {
return null;
}
break;
}
})();
var or__20493__auto__ = ret;
if(cljs.core.truth_(or__20493__auto__)){
return or__20493__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__20481__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__20481__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__20481__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__21558__auto__ = [];
var len__21551__auto___24477 = arguments.length;
var i__21552__auto___24478 = (0);
while(true){
if((i__21552__auto___24478 < len__21551__auto___24477)){
args__21558__auto__.push((arguments[i__21552__auto___24478]));

var G__24479 = (i__21552__auto___24478 + (1));
i__21552__auto___24478 = G__24479;
continue;
} else {
}
break;
}

var argseq__21559__auto__ = ((((1) < args__21558__auto__.length))?(new cljs.core.IndexedSeq(args__21558__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21559__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__24474){
var map__24475 = p__24474;
var map__24475__$1 = ((((!((map__24475 == null)))?((((map__24475.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24475.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24475):map__24475);
var opts = map__24475__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq24472){
var G__24473 = cljs.core.first.call(null,seq24472);
var seq24472__$1 = cljs.core.next.call(null,seq24472);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__24473,seq24472__$1);
});
/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args24480 = [];
var len__21551__auto___24530 = arguments.length;
var i__21552__auto___24531 = (0);
while(true){
if((i__21552__auto___24531 < len__21551__auto___24530)){
args24480.push((arguments[i__21552__auto___24531]));

var G__24532 = (i__21552__auto___24531 + (1));
i__21552__auto___24531 = G__24532;
continue;
} else {
}
break;
}

var G__24482 = args24480.length;
switch (G__24482) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24480.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__24367__auto___24534 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24367__auto___24534){
return (function (){
var f__24368__auto__ = (function (){var switch__24255__auto__ = ((function (c__24367__auto___24534){
return (function (state_24506){
var state_val_24507 = (state_24506[(1)]);
if((state_val_24507 === (7))){
var inst_24502 = (state_24506[(2)]);
var state_24506__$1 = state_24506;
var statearr_24508_24535 = state_24506__$1;
(statearr_24508_24535[(2)] = inst_24502);

(statearr_24508_24535[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24507 === (1))){
var state_24506__$1 = state_24506;
var statearr_24509_24536 = state_24506__$1;
(statearr_24509_24536[(2)] = null);

(statearr_24509_24536[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24507 === (4))){
var inst_24485 = (state_24506[(7)]);
var inst_24485__$1 = (state_24506[(2)]);
var inst_24486 = (inst_24485__$1 == null);
var state_24506__$1 = (function (){var statearr_24510 = state_24506;
(statearr_24510[(7)] = inst_24485__$1);

return statearr_24510;
})();
if(cljs.core.truth_(inst_24486)){
var statearr_24511_24537 = state_24506__$1;
(statearr_24511_24537[(1)] = (5));

} else {
var statearr_24512_24538 = state_24506__$1;
(statearr_24512_24538[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24507 === (13))){
var state_24506__$1 = state_24506;
var statearr_24513_24539 = state_24506__$1;
(statearr_24513_24539[(2)] = null);

(statearr_24513_24539[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24507 === (6))){
var inst_24485 = (state_24506[(7)]);
var state_24506__$1 = state_24506;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24506__$1,(11),to,inst_24485);
} else {
if((state_val_24507 === (3))){
var inst_24504 = (state_24506[(2)]);
var state_24506__$1 = state_24506;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24506__$1,inst_24504);
} else {
if((state_val_24507 === (12))){
var state_24506__$1 = state_24506;
var statearr_24514_24540 = state_24506__$1;
(statearr_24514_24540[(2)] = null);

(statearr_24514_24540[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24507 === (2))){
var state_24506__$1 = state_24506;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24506__$1,(4),from);
} else {
if((state_val_24507 === (11))){
var inst_24495 = (state_24506[(2)]);
var state_24506__$1 = state_24506;
if(cljs.core.truth_(inst_24495)){
var statearr_24515_24541 = state_24506__$1;
(statearr_24515_24541[(1)] = (12));

} else {
var statearr_24516_24542 = state_24506__$1;
(statearr_24516_24542[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24507 === (9))){
var state_24506__$1 = state_24506;
var statearr_24517_24543 = state_24506__$1;
(statearr_24517_24543[(2)] = null);

(statearr_24517_24543[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24507 === (5))){
var state_24506__$1 = state_24506;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24518_24544 = state_24506__$1;
(statearr_24518_24544[(1)] = (8));

} else {
var statearr_24519_24545 = state_24506__$1;
(statearr_24519_24545[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24507 === (14))){
var inst_24500 = (state_24506[(2)]);
var state_24506__$1 = state_24506;
var statearr_24520_24546 = state_24506__$1;
(statearr_24520_24546[(2)] = inst_24500);

(statearr_24520_24546[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24507 === (10))){
var inst_24492 = (state_24506[(2)]);
var state_24506__$1 = state_24506;
var statearr_24521_24547 = state_24506__$1;
(statearr_24521_24547[(2)] = inst_24492);

(statearr_24521_24547[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24507 === (8))){
var inst_24489 = cljs.core.async.close_BANG_.call(null,to);
var state_24506__$1 = state_24506;
var statearr_24522_24548 = state_24506__$1;
(statearr_24522_24548[(2)] = inst_24489);

(statearr_24522_24548[(1)] = (10));


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
});})(c__24367__auto___24534))
;
return ((function (switch__24255__auto__,c__24367__auto___24534){
return (function() {
var cljs$core$async$state_machine__24256__auto__ = null;
var cljs$core$async$state_machine__24256__auto____0 = (function (){
var statearr_24526 = [null,null,null,null,null,null,null,null];
(statearr_24526[(0)] = cljs$core$async$state_machine__24256__auto__);

(statearr_24526[(1)] = (1));

return statearr_24526;
});
var cljs$core$async$state_machine__24256__auto____1 = (function (state_24506){
while(true){
var ret_value__24257__auto__ = (function (){try{while(true){
var result__24258__auto__ = switch__24255__auto__.call(null,state_24506);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24258__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24258__auto__;
}
break;
}
}catch (e24527){if((e24527 instanceof Object)){
var ex__24259__auto__ = e24527;
var statearr_24528_24549 = state_24506;
(statearr_24528_24549[(5)] = ex__24259__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24506);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24527;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24257__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24550 = state_24506;
state_24506 = G__24550;
continue;
} else {
return ret_value__24257__auto__;
}
break;
}
});
cljs$core$async$state_machine__24256__auto__ = function(state_24506){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24256__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24256__auto____1.call(this,state_24506);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24256__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24256__auto____0;
cljs$core$async$state_machine__24256__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24256__auto____1;
return cljs$core$async$state_machine__24256__auto__;
})()
;})(switch__24255__auto__,c__24367__auto___24534))
})();
var state__24369__auto__ = (function (){var statearr_24529 = f__24368__auto__.call(null);
(statearr_24529[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24367__auto___24534);

return statearr_24529;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24369__auto__);
});})(c__24367__auto___24534))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__24734){
var vec__24735 = p__24734;
var v = cljs.core.nth.call(null,vec__24735,(0),null);
var p = cljs.core.nth.call(null,vec__24735,(1),null);
var job = vec__24735;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__24367__auto___24917 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24367__auto___24917,res,vec__24735,v,p,job,jobs,results){
return (function (){
var f__24368__auto__ = (function (){var switch__24255__auto__ = ((function (c__24367__auto___24917,res,vec__24735,v,p,job,jobs,results){
return (function (state_24740){
var state_val_24741 = (state_24740[(1)]);
if((state_val_24741 === (1))){
var state_24740__$1 = state_24740;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24740__$1,(2),res,v);
} else {
if((state_val_24741 === (2))){
var inst_24737 = (state_24740[(2)]);
var inst_24738 = cljs.core.async.close_BANG_.call(null,res);
var state_24740__$1 = (function (){var statearr_24742 = state_24740;
(statearr_24742[(7)] = inst_24737);

return statearr_24742;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24740__$1,inst_24738);
} else {
return null;
}
}
});})(c__24367__auto___24917,res,vec__24735,v,p,job,jobs,results))
;
return ((function (switch__24255__auto__,c__24367__auto___24917,res,vec__24735,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24256__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24256__auto____0 = (function (){
var statearr_24746 = [null,null,null,null,null,null,null,null];
(statearr_24746[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24256__auto__);

(statearr_24746[(1)] = (1));

return statearr_24746;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24256__auto____1 = (function (state_24740){
while(true){
var ret_value__24257__auto__ = (function (){try{while(true){
var result__24258__auto__ = switch__24255__auto__.call(null,state_24740);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24258__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24258__auto__;
}
break;
}
}catch (e24747){if((e24747 instanceof Object)){
var ex__24259__auto__ = e24747;
var statearr_24748_24918 = state_24740;
(statearr_24748_24918[(5)] = ex__24259__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24740);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24747;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24257__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24919 = state_24740;
state_24740 = G__24919;
continue;
} else {
return ret_value__24257__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24256__auto__ = function(state_24740){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24256__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24256__auto____1.call(this,state_24740);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24256__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24256__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24256__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24256__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24256__auto__;
})()
;})(switch__24255__auto__,c__24367__auto___24917,res,vec__24735,v,p,job,jobs,results))
})();
var state__24369__auto__ = (function (){var statearr_24749 = f__24368__auto__.call(null);
(statearr_24749[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24367__auto___24917);

return statearr_24749;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24369__auto__);
});})(c__24367__auto___24917,res,vec__24735,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__24750){
var vec__24751 = p__24750;
var v = cljs.core.nth.call(null,vec__24751,(0),null);
var p = cljs.core.nth.call(null,vec__24751,(1),null);
var job = vec__24751;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__21396__auto___24920 = n;
var __24921 = (0);
while(true){
if((__24921 < n__21396__auto___24920)){
var G__24752_24922 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__24752_24922) {
case "compute":
var c__24367__auto___24924 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__24921,c__24367__auto___24924,G__24752_24922,n__21396__auto___24920,jobs,results,process,async){
return (function (){
var f__24368__auto__ = (function (){var switch__24255__auto__ = ((function (__24921,c__24367__auto___24924,G__24752_24922,n__21396__auto___24920,jobs,results,process,async){
return (function (state_24765){
var state_val_24766 = (state_24765[(1)]);
if((state_val_24766 === (1))){
var state_24765__$1 = state_24765;
var statearr_24767_24925 = state_24765__$1;
(statearr_24767_24925[(2)] = null);

(statearr_24767_24925[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24766 === (2))){
var state_24765__$1 = state_24765;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24765__$1,(4),jobs);
} else {
if((state_val_24766 === (3))){
var inst_24763 = (state_24765[(2)]);
var state_24765__$1 = state_24765;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24765__$1,inst_24763);
} else {
if((state_val_24766 === (4))){
var inst_24755 = (state_24765[(2)]);
var inst_24756 = process.call(null,inst_24755);
var state_24765__$1 = state_24765;
if(cljs.core.truth_(inst_24756)){
var statearr_24768_24926 = state_24765__$1;
(statearr_24768_24926[(1)] = (5));

} else {
var statearr_24769_24927 = state_24765__$1;
(statearr_24769_24927[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24766 === (5))){
var state_24765__$1 = state_24765;
var statearr_24770_24928 = state_24765__$1;
(statearr_24770_24928[(2)] = null);

(statearr_24770_24928[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24766 === (6))){
var state_24765__$1 = state_24765;
var statearr_24771_24929 = state_24765__$1;
(statearr_24771_24929[(2)] = null);

(statearr_24771_24929[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24766 === (7))){
var inst_24761 = (state_24765[(2)]);
var state_24765__$1 = state_24765;
var statearr_24772_24930 = state_24765__$1;
(statearr_24772_24930[(2)] = inst_24761);

(statearr_24772_24930[(1)] = (3));


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
});})(__24921,c__24367__auto___24924,G__24752_24922,n__21396__auto___24920,jobs,results,process,async))
;
return ((function (__24921,switch__24255__auto__,c__24367__auto___24924,G__24752_24922,n__21396__auto___24920,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24256__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24256__auto____0 = (function (){
var statearr_24776 = [null,null,null,null,null,null,null];
(statearr_24776[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24256__auto__);

(statearr_24776[(1)] = (1));

return statearr_24776;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24256__auto____1 = (function (state_24765){
while(true){
var ret_value__24257__auto__ = (function (){try{while(true){
var result__24258__auto__ = switch__24255__auto__.call(null,state_24765);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24258__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24258__auto__;
}
break;
}
}catch (e24777){if((e24777 instanceof Object)){
var ex__24259__auto__ = e24777;
var statearr_24778_24931 = state_24765;
(statearr_24778_24931[(5)] = ex__24259__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24765);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24777;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24257__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24932 = state_24765;
state_24765 = G__24932;
continue;
} else {
return ret_value__24257__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24256__auto__ = function(state_24765){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24256__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24256__auto____1.call(this,state_24765);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24256__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24256__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24256__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24256__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24256__auto__;
})()
;})(__24921,switch__24255__auto__,c__24367__auto___24924,G__24752_24922,n__21396__auto___24920,jobs,results,process,async))
})();
var state__24369__auto__ = (function (){var statearr_24779 = f__24368__auto__.call(null);
(statearr_24779[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24367__auto___24924);

return statearr_24779;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24369__auto__);
});})(__24921,c__24367__auto___24924,G__24752_24922,n__21396__auto___24920,jobs,results,process,async))
);


break;
case "async":
var c__24367__auto___24933 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__24921,c__24367__auto___24933,G__24752_24922,n__21396__auto___24920,jobs,results,process,async){
return (function (){
var f__24368__auto__ = (function (){var switch__24255__auto__ = ((function (__24921,c__24367__auto___24933,G__24752_24922,n__21396__auto___24920,jobs,results,process,async){
return (function (state_24792){
var state_val_24793 = (state_24792[(1)]);
if((state_val_24793 === (1))){
var state_24792__$1 = state_24792;
var statearr_24794_24934 = state_24792__$1;
(statearr_24794_24934[(2)] = null);

(statearr_24794_24934[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24793 === (2))){
var state_24792__$1 = state_24792;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24792__$1,(4),jobs);
} else {
if((state_val_24793 === (3))){
var inst_24790 = (state_24792[(2)]);
var state_24792__$1 = state_24792;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24792__$1,inst_24790);
} else {
if((state_val_24793 === (4))){
var inst_24782 = (state_24792[(2)]);
var inst_24783 = async.call(null,inst_24782);
var state_24792__$1 = state_24792;
if(cljs.core.truth_(inst_24783)){
var statearr_24795_24935 = state_24792__$1;
(statearr_24795_24935[(1)] = (5));

} else {
var statearr_24796_24936 = state_24792__$1;
(statearr_24796_24936[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24793 === (5))){
var state_24792__$1 = state_24792;
var statearr_24797_24937 = state_24792__$1;
(statearr_24797_24937[(2)] = null);

(statearr_24797_24937[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24793 === (6))){
var state_24792__$1 = state_24792;
var statearr_24798_24938 = state_24792__$1;
(statearr_24798_24938[(2)] = null);

(statearr_24798_24938[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24793 === (7))){
var inst_24788 = (state_24792[(2)]);
var state_24792__$1 = state_24792;
var statearr_24799_24939 = state_24792__$1;
(statearr_24799_24939[(2)] = inst_24788);

(statearr_24799_24939[(1)] = (3));


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
});})(__24921,c__24367__auto___24933,G__24752_24922,n__21396__auto___24920,jobs,results,process,async))
;
return ((function (__24921,switch__24255__auto__,c__24367__auto___24933,G__24752_24922,n__21396__auto___24920,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24256__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24256__auto____0 = (function (){
var statearr_24803 = [null,null,null,null,null,null,null];
(statearr_24803[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24256__auto__);

(statearr_24803[(1)] = (1));

return statearr_24803;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24256__auto____1 = (function (state_24792){
while(true){
var ret_value__24257__auto__ = (function (){try{while(true){
var result__24258__auto__ = switch__24255__auto__.call(null,state_24792);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24258__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24258__auto__;
}
break;
}
}catch (e24804){if((e24804 instanceof Object)){
var ex__24259__auto__ = e24804;
var statearr_24805_24940 = state_24792;
(statearr_24805_24940[(5)] = ex__24259__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24792);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24804;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24257__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24941 = state_24792;
state_24792 = G__24941;
continue;
} else {
return ret_value__24257__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24256__auto__ = function(state_24792){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24256__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24256__auto____1.call(this,state_24792);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24256__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24256__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24256__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24256__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24256__auto__;
})()
;})(__24921,switch__24255__auto__,c__24367__auto___24933,G__24752_24922,n__21396__auto___24920,jobs,results,process,async))
})();
var state__24369__auto__ = (function (){var statearr_24806 = f__24368__auto__.call(null);
(statearr_24806[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24367__auto___24933);

return statearr_24806;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24369__auto__);
});})(__24921,c__24367__auto___24933,G__24752_24922,n__21396__auto___24920,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__24942 = (__24921 + (1));
__24921 = G__24942;
continue;
} else {
}
break;
}

var c__24367__auto___24943 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24367__auto___24943,jobs,results,process,async){
return (function (){
var f__24368__auto__ = (function (){var switch__24255__auto__ = ((function (c__24367__auto___24943,jobs,results,process,async){
return (function (state_24828){
var state_val_24829 = (state_24828[(1)]);
if((state_val_24829 === (1))){
var state_24828__$1 = state_24828;
var statearr_24830_24944 = state_24828__$1;
(statearr_24830_24944[(2)] = null);

(statearr_24830_24944[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24829 === (2))){
var state_24828__$1 = state_24828;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24828__$1,(4),from);
} else {
if((state_val_24829 === (3))){
var inst_24826 = (state_24828[(2)]);
var state_24828__$1 = state_24828;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24828__$1,inst_24826);
} else {
if((state_val_24829 === (4))){
var inst_24809 = (state_24828[(7)]);
var inst_24809__$1 = (state_24828[(2)]);
var inst_24810 = (inst_24809__$1 == null);
var state_24828__$1 = (function (){var statearr_24831 = state_24828;
(statearr_24831[(7)] = inst_24809__$1);

return statearr_24831;
})();
if(cljs.core.truth_(inst_24810)){
var statearr_24832_24945 = state_24828__$1;
(statearr_24832_24945[(1)] = (5));

} else {
var statearr_24833_24946 = state_24828__$1;
(statearr_24833_24946[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24829 === (5))){
var inst_24812 = cljs.core.async.close_BANG_.call(null,jobs);
var state_24828__$1 = state_24828;
var statearr_24834_24947 = state_24828__$1;
(statearr_24834_24947[(2)] = inst_24812);

(statearr_24834_24947[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24829 === (6))){
var inst_24814 = (state_24828[(8)]);
var inst_24809 = (state_24828[(7)]);
var inst_24814__$1 = cljs.core.async.chan.call(null,(1));
var inst_24815 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_24816 = [inst_24809,inst_24814__$1];
var inst_24817 = (new cljs.core.PersistentVector(null,2,(5),inst_24815,inst_24816,null));
var state_24828__$1 = (function (){var statearr_24835 = state_24828;
(statearr_24835[(8)] = inst_24814__$1);

return statearr_24835;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24828__$1,(8),jobs,inst_24817);
} else {
if((state_val_24829 === (7))){
var inst_24824 = (state_24828[(2)]);
var state_24828__$1 = state_24828;
var statearr_24836_24948 = state_24828__$1;
(statearr_24836_24948[(2)] = inst_24824);

(statearr_24836_24948[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24829 === (8))){
var inst_24814 = (state_24828[(8)]);
var inst_24819 = (state_24828[(2)]);
var state_24828__$1 = (function (){var statearr_24837 = state_24828;
(statearr_24837[(9)] = inst_24819);

return statearr_24837;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24828__$1,(9),results,inst_24814);
} else {
if((state_val_24829 === (9))){
var inst_24821 = (state_24828[(2)]);
var state_24828__$1 = (function (){var statearr_24838 = state_24828;
(statearr_24838[(10)] = inst_24821);

return statearr_24838;
})();
var statearr_24839_24949 = state_24828__$1;
(statearr_24839_24949[(2)] = null);

(statearr_24839_24949[(1)] = (2));


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
});})(c__24367__auto___24943,jobs,results,process,async))
;
return ((function (switch__24255__auto__,c__24367__auto___24943,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24256__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24256__auto____0 = (function (){
var statearr_24843 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24843[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24256__auto__);

(statearr_24843[(1)] = (1));

return statearr_24843;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24256__auto____1 = (function (state_24828){
while(true){
var ret_value__24257__auto__ = (function (){try{while(true){
var result__24258__auto__ = switch__24255__auto__.call(null,state_24828);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24258__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24258__auto__;
}
break;
}
}catch (e24844){if((e24844 instanceof Object)){
var ex__24259__auto__ = e24844;
var statearr_24845_24950 = state_24828;
(statearr_24845_24950[(5)] = ex__24259__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24828);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24844;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24257__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24951 = state_24828;
state_24828 = G__24951;
continue;
} else {
return ret_value__24257__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24256__auto__ = function(state_24828){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24256__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24256__auto____1.call(this,state_24828);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24256__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24256__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24256__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24256__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24256__auto__;
})()
;})(switch__24255__auto__,c__24367__auto___24943,jobs,results,process,async))
})();
var state__24369__auto__ = (function (){var statearr_24846 = f__24368__auto__.call(null);
(statearr_24846[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24367__auto___24943);

return statearr_24846;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24369__auto__);
});})(c__24367__auto___24943,jobs,results,process,async))
);


var c__24367__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24367__auto__,jobs,results,process,async){
return (function (){
var f__24368__auto__ = (function (){var switch__24255__auto__ = ((function (c__24367__auto__,jobs,results,process,async){
return (function (state_24884){
var state_val_24885 = (state_24884[(1)]);
if((state_val_24885 === (7))){
var inst_24880 = (state_24884[(2)]);
var state_24884__$1 = state_24884;
var statearr_24886_24952 = state_24884__$1;
(statearr_24886_24952[(2)] = inst_24880);

(statearr_24886_24952[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24885 === (20))){
var state_24884__$1 = state_24884;
var statearr_24887_24953 = state_24884__$1;
(statearr_24887_24953[(2)] = null);

(statearr_24887_24953[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24885 === (1))){
var state_24884__$1 = state_24884;
var statearr_24888_24954 = state_24884__$1;
(statearr_24888_24954[(2)] = null);

(statearr_24888_24954[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24885 === (4))){
var inst_24849 = (state_24884[(7)]);
var inst_24849__$1 = (state_24884[(2)]);
var inst_24850 = (inst_24849__$1 == null);
var state_24884__$1 = (function (){var statearr_24889 = state_24884;
(statearr_24889[(7)] = inst_24849__$1);

return statearr_24889;
})();
if(cljs.core.truth_(inst_24850)){
var statearr_24890_24955 = state_24884__$1;
(statearr_24890_24955[(1)] = (5));

} else {
var statearr_24891_24956 = state_24884__$1;
(statearr_24891_24956[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24885 === (15))){
var inst_24862 = (state_24884[(8)]);
var state_24884__$1 = state_24884;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24884__$1,(18),to,inst_24862);
} else {
if((state_val_24885 === (21))){
var inst_24875 = (state_24884[(2)]);
var state_24884__$1 = state_24884;
var statearr_24892_24957 = state_24884__$1;
(statearr_24892_24957[(2)] = inst_24875);

(statearr_24892_24957[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24885 === (13))){
var inst_24877 = (state_24884[(2)]);
var state_24884__$1 = (function (){var statearr_24893 = state_24884;
(statearr_24893[(9)] = inst_24877);

return statearr_24893;
})();
var statearr_24894_24958 = state_24884__$1;
(statearr_24894_24958[(2)] = null);

(statearr_24894_24958[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24885 === (6))){
var inst_24849 = (state_24884[(7)]);
var state_24884__$1 = state_24884;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24884__$1,(11),inst_24849);
} else {
if((state_val_24885 === (17))){
var inst_24870 = (state_24884[(2)]);
var state_24884__$1 = state_24884;
if(cljs.core.truth_(inst_24870)){
var statearr_24895_24959 = state_24884__$1;
(statearr_24895_24959[(1)] = (19));

} else {
var statearr_24896_24960 = state_24884__$1;
(statearr_24896_24960[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24885 === (3))){
var inst_24882 = (state_24884[(2)]);
var state_24884__$1 = state_24884;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24884__$1,inst_24882);
} else {
if((state_val_24885 === (12))){
var inst_24859 = (state_24884[(10)]);
var state_24884__$1 = state_24884;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24884__$1,(14),inst_24859);
} else {
if((state_val_24885 === (2))){
var state_24884__$1 = state_24884;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24884__$1,(4),results);
} else {
if((state_val_24885 === (19))){
var state_24884__$1 = state_24884;
var statearr_24897_24961 = state_24884__$1;
(statearr_24897_24961[(2)] = null);

(statearr_24897_24961[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24885 === (11))){
var inst_24859 = (state_24884[(2)]);
var state_24884__$1 = (function (){var statearr_24898 = state_24884;
(statearr_24898[(10)] = inst_24859);

return statearr_24898;
})();
var statearr_24899_24962 = state_24884__$1;
(statearr_24899_24962[(2)] = null);

(statearr_24899_24962[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24885 === (9))){
var state_24884__$1 = state_24884;
var statearr_24900_24963 = state_24884__$1;
(statearr_24900_24963[(2)] = null);

(statearr_24900_24963[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24885 === (5))){
var state_24884__$1 = state_24884;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24901_24964 = state_24884__$1;
(statearr_24901_24964[(1)] = (8));

} else {
var statearr_24902_24965 = state_24884__$1;
(statearr_24902_24965[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24885 === (14))){
var inst_24864 = (state_24884[(11)]);
var inst_24862 = (state_24884[(8)]);
var inst_24862__$1 = (state_24884[(2)]);
var inst_24863 = (inst_24862__$1 == null);
var inst_24864__$1 = cljs.core.not.call(null,inst_24863);
var state_24884__$1 = (function (){var statearr_24903 = state_24884;
(statearr_24903[(11)] = inst_24864__$1);

(statearr_24903[(8)] = inst_24862__$1);

return statearr_24903;
})();
if(inst_24864__$1){
var statearr_24904_24966 = state_24884__$1;
(statearr_24904_24966[(1)] = (15));

} else {
var statearr_24905_24967 = state_24884__$1;
(statearr_24905_24967[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24885 === (16))){
var inst_24864 = (state_24884[(11)]);
var state_24884__$1 = state_24884;
var statearr_24906_24968 = state_24884__$1;
(statearr_24906_24968[(2)] = inst_24864);

(statearr_24906_24968[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24885 === (10))){
var inst_24856 = (state_24884[(2)]);
var state_24884__$1 = state_24884;
var statearr_24907_24969 = state_24884__$1;
(statearr_24907_24969[(2)] = inst_24856);

(statearr_24907_24969[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24885 === (18))){
var inst_24867 = (state_24884[(2)]);
var state_24884__$1 = state_24884;
var statearr_24908_24970 = state_24884__$1;
(statearr_24908_24970[(2)] = inst_24867);

(statearr_24908_24970[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24885 === (8))){
var inst_24853 = cljs.core.async.close_BANG_.call(null,to);
var state_24884__$1 = state_24884;
var statearr_24909_24971 = state_24884__$1;
(statearr_24909_24971[(2)] = inst_24853);

(statearr_24909_24971[(1)] = (10));


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
});})(c__24367__auto__,jobs,results,process,async))
;
return ((function (switch__24255__auto__,c__24367__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24256__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24256__auto____0 = (function (){
var statearr_24913 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24913[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24256__auto__);

(statearr_24913[(1)] = (1));

return statearr_24913;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24256__auto____1 = (function (state_24884){
while(true){
var ret_value__24257__auto__ = (function (){try{while(true){
var result__24258__auto__ = switch__24255__auto__.call(null,state_24884);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24258__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24258__auto__;
}
break;
}
}catch (e24914){if((e24914 instanceof Object)){
var ex__24259__auto__ = e24914;
var statearr_24915_24972 = state_24884;
(statearr_24915_24972[(5)] = ex__24259__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24884);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24914;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24257__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24973 = state_24884;
state_24884 = G__24973;
continue;
} else {
return ret_value__24257__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24256__auto__ = function(state_24884){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24256__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24256__auto____1.call(this,state_24884);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24256__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24256__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24256__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24256__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24256__auto__;
})()
;})(switch__24255__auto__,c__24367__auto__,jobs,results,process,async))
})();
var state__24369__auto__ = (function (){var statearr_24916 = f__24368__auto__.call(null);
(statearr_24916[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24367__auto__);

return statearr_24916;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24369__auto__);
});})(c__24367__auto__,jobs,results,process,async))
);

return c__24367__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args24974 = [];
var len__21551__auto___24977 = arguments.length;
var i__21552__auto___24978 = (0);
while(true){
if((i__21552__auto___24978 < len__21551__auto___24977)){
args24974.push((arguments[i__21552__auto___24978]));

var G__24979 = (i__21552__auto___24978 + (1));
i__21552__auto___24978 = G__24979;
continue;
} else {
}
break;
}

var G__24976 = args24974.length;
switch (G__24976) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24974.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args24981 = [];
var len__21551__auto___24984 = arguments.length;
var i__21552__auto___24985 = (0);
while(true){
if((i__21552__auto___24985 < len__21551__auto___24984)){
args24981.push((arguments[i__21552__auto___24985]));

var G__24986 = (i__21552__auto___24985 + (1));
i__21552__auto___24985 = G__24986;
continue;
} else {
}
break;
}

var G__24983 = args24981.length;
switch (G__24983) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24981.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args24988 = [];
var len__21551__auto___25041 = arguments.length;
var i__21552__auto___25042 = (0);
while(true){
if((i__21552__auto___25042 < len__21551__auto___25041)){
args24988.push((arguments[i__21552__auto___25042]));

var G__25043 = (i__21552__auto___25042 + (1));
i__21552__auto___25042 = G__25043;
continue;
} else {
}
break;
}

var G__24990 = args24988.length;
switch (G__24990) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24988.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__24367__auto___25045 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24367__auto___25045,tc,fc){
return (function (){
var f__24368__auto__ = (function (){var switch__24255__auto__ = ((function (c__24367__auto___25045,tc,fc){
return (function (state_25016){
var state_val_25017 = (state_25016[(1)]);
if((state_val_25017 === (7))){
var inst_25012 = (state_25016[(2)]);
var state_25016__$1 = state_25016;
var statearr_25018_25046 = state_25016__$1;
(statearr_25018_25046[(2)] = inst_25012);

(statearr_25018_25046[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25017 === (1))){
var state_25016__$1 = state_25016;
var statearr_25019_25047 = state_25016__$1;
(statearr_25019_25047[(2)] = null);

(statearr_25019_25047[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25017 === (4))){
var inst_24993 = (state_25016[(7)]);
var inst_24993__$1 = (state_25016[(2)]);
var inst_24994 = (inst_24993__$1 == null);
var state_25016__$1 = (function (){var statearr_25020 = state_25016;
(statearr_25020[(7)] = inst_24993__$1);

return statearr_25020;
})();
if(cljs.core.truth_(inst_24994)){
var statearr_25021_25048 = state_25016__$1;
(statearr_25021_25048[(1)] = (5));

} else {
var statearr_25022_25049 = state_25016__$1;
(statearr_25022_25049[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25017 === (13))){
var state_25016__$1 = state_25016;
var statearr_25023_25050 = state_25016__$1;
(statearr_25023_25050[(2)] = null);

(statearr_25023_25050[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25017 === (6))){
var inst_24993 = (state_25016[(7)]);
var inst_24999 = p.call(null,inst_24993);
var state_25016__$1 = state_25016;
if(cljs.core.truth_(inst_24999)){
var statearr_25024_25051 = state_25016__$1;
(statearr_25024_25051[(1)] = (9));

} else {
var statearr_25025_25052 = state_25016__$1;
(statearr_25025_25052[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25017 === (3))){
var inst_25014 = (state_25016[(2)]);
var state_25016__$1 = state_25016;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25016__$1,inst_25014);
} else {
if((state_val_25017 === (12))){
var state_25016__$1 = state_25016;
var statearr_25026_25053 = state_25016__$1;
(statearr_25026_25053[(2)] = null);

(statearr_25026_25053[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25017 === (2))){
var state_25016__$1 = state_25016;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25016__$1,(4),ch);
} else {
if((state_val_25017 === (11))){
var inst_24993 = (state_25016[(7)]);
var inst_25003 = (state_25016[(2)]);
var state_25016__$1 = state_25016;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25016__$1,(8),inst_25003,inst_24993);
} else {
if((state_val_25017 === (9))){
var state_25016__$1 = state_25016;
var statearr_25027_25054 = state_25016__$1;
(statearr_25027_25054[(2)] = tc);

(statearr_25027_25054[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25017 === (5))){
var inst_24996 = cljs.core.async.close_BANG_.call(null,tc);
var inst_24997 = cljs.core.async.close_BANG_.call(null,fc);
var state_25016__$1 = (function (){var statearr_25028 = state_25016;
(statearr_25028[(8)] = inst_24996);

return statearr_25028;
})();
var statearr_25029_25055 = state_25016__$1;
(statearr_25029_25055[(2)] = inst_24997);

(statearr_25029_25055[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25017 === (14))){
var inst_25010 = (state_25016[(2)]);
var state_25016__$1 = state_25016;
var statearr_25030_25056 = state_25016__$1;
(statearr_25030_25056[(2)] = inst_25010);

(statearr_25030_25056[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25017 === (10))){
var state_25016__$1 = state_25016;
var statearr_25031_25057 = state_25016__$1;
(statearr_25031_25057[(2)] = fc);

(statearr_25031_25057[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25017 === (8))){
var inst_25005 = (state_25016[(2)]);
var state_25016__$1 = state_25016;
if(cljs.core.truth_(inst_25005)){
var statearr_25032_25058 = state_25016__$1;
(statearr_25032_25058[(1)] = (12));

} else {
var statearr_25033_25059 = state_25016__$1;
(statearr_25033_25059[(1)] = (13));

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
});})(c__24367__auto___25045,tc,fc))
;
return ((function (switch__24255__auto__,c__24367__auto___25045,tc,fc){
return (function() {
var cljs$core$async$state_machine__24256__auto__ = null;
var cljs$core$async$state_machine__24256__auto____0 = (function (){
var statearr_25037 = [null,null,null,null,null,null,null,null,null];
(statearr_25037[(0)] = cljs$core$async$state_machine__24256__auto__);

(statearr_25037[(1)] = (1));

return statearr_25037;
});
var cljs$core$async$state_machine__24256__auto____1 = (function (state_25016){
while(true){
var ret_value__24257__auto__ = (function (){try{while(true){
var result__24258__auto__ = switch__24255__auto__.call(null,state_25016);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24258__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24258__auto__;
}
break;
}
}catch (e25038){if((e25038 instanceof Object)){
var ex__24259__auto__ = e25038;
var statearr_25039_25060 = state_25016;
(statearr_25039_25060[(5)] = ex__24259__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25016);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25038;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24257__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25061 = state_25016;
state_25016 = G__25061;
continue;
} else {
return ret_value__24257__auto__;
}
break;
}
});
cljs$core$async$state_machine__24256__auto__ = function(state_25016){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24256__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24256__auto____1.call(this,state_25016);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24256__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24256__auto____0;
cljs$core$async$state_machine__24256__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24256__auto____1;
return cljs$core$async$state_machine__24256__auto__;
})()
;})(switch__24255__auto__,c__24367__auto___25045,tc,fc))
})();
var state__24369__auto__ = (function (){var statearr_25040 = f__24368__auto__.call(null);
(statearr_25040[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24367__auto___25045);

return statearr_25040;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24369__auto__);
});})(c__24367__auto___25045,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__24367__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24367__auto__){
return (function (){
var f__24368__auto__ = (function (){var switch__24255__auto__ = ((function (c__24367__auto__){
return (function (state_25125){
var state_val_25126 = (state_25125[(1)]);
if((state_val_25126 === (7))){
var inst_25121 = (state_25125[(2)]);
var state_25125__$1 = state_25125;
var statearr_25127_25148 = state_25125__$1;
(statearr_25127_25148[(2)] = inst_25121);

(statearr_25127_25148[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25126 === (1))){
var inst_25105 = init;
var state_25125__$1 = (function (){var statearr_25128 = state_25125;
(statearr_25128[(7)] = inst_25105);

return statearr_25128;
})();
var statearr_25129_25149 = state_25125__$1;
(statearr_25129_25149[(2)] = null);

(statearr_25129_25149[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25126 === (4))){
var inst_25108 = (state_25125[(8)]);
var inst_25108__$1 = (state_25125[(2)]);
var inst_25109 = (inst_25108__$1 == null);
var state_25125__$1 = (function (){var statearr_25130 = state_25125;
(statearr_25130[(8)] = inst_25108__$1);

return statearr_25130;
})();
if(cljs.core.truth_(inst_25109)){
var statearr_25131_25150 = state_25125__$1;
(statearr_25131_25150[(1)] = (5));

} else {
var statearr_25132_25151 = state_25125__$1;
(statearr_25132_25151[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25126 === (6))){
var inst_25112 = (state_25125[(9)]);
var inst_25108 = (state_25125[(8)]);
var inst_25105 = (state_25125[(7)]);
var inst_25112__$1 = f.call(null,inst_25105,inst_25108);
var inst_25113 = cljs.core.reduced_QMARK_.call(null,inst_25112__$1);
var state_25125__$1 = (function (){var statearr_25133 = state_25125;
(statearr_25133[(9)] = inst_25112__$1);

return statearr_25133;
})();
if(inst_25113){
var statearr_25134_25152 = state_25125__$1;
(statearr_25134_25152[(1)] = (8));

} else {
var statearr_25135_25153 = state_25125__$1;
(statearr_25135_25153[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25126 === (3))){
var inst_25123 = (state_25125[(2)]);
var state_25125__$1 = state_25125;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25125__$1,inst_25123);
} else {
if((state_val_25126 === (2))){
var state_25125__$1 = state_25125;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25125__$1,(4),ch);
} else {
if((state_val_25126 === (9))){
var inst_25112 = (state_25125[(9)]);
var inst_25105 = inst_25112;
var state_25125__$1 = (function (){var statearr_25136 = state_25125;
(statearr_25136[(7)] = inst_25105);

return statearr_25136;
})();
var statearr_25137_25154 = state_25125__$1;
(statearr_25137_25154[(2)] = null);

(statearr_25137_25154[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25126 === (5))){
var inst_25105 = (state_25125[(7)]);
var state_25125__$1 = state_25125;
var statearr_25138_25155 = state_25125__$1;
(statearr_25138_25155[(2)] = inst_25105);

(statearr_25138_25155[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25126 === (10))){
var inst_25119 = (state_25125[(2)]);
var state_25125__$1 = state_25125;
var statearr_25139_25156 = state_25125__$1;
(statearr_25139_25156[(2)] = inst_25119);

(statearr_25139_25156[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25126 === (8))){
var inst_25112 = (state_25125[(9)]);
var inst_25115 = cljs.core.deref.call(null,inst_25112);
var state_25125__$1 = state_25125;
var statearr_25140_25157 = state_25125__$1;
(statearr_25140_25157[(2)] = inst_25115);

(statearr_25140_25157[(1)] = (10));


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
});})(c__24367__auto__))
;
return ((function (switch__24255__auto__,c__24367__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__24256__auto__ = null;
var cljs$core$async$reduce_$_state_machine__24256__auto____0 = (function (){
var statearr_25144 = [null,null,null,null,null,null,null,null,null,null];
(statearr_25144[(0)] = cljs$core$async$reduce_$_state_machine__24256__auto__);

(statearr_25144[(1)] = (1));

return statearr_25144;
});
var cljs$core$async$reduce_$_state_machine__24256__auto____1 = (function (state_25125){
while(true){
var ret_value__24257__auto__ = (function (){try{while(true){
var result__24258__auto__ = switch__24255__auto__.call(null,state_25125);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24258__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24258__auto__;
}
break;
}
}catch (e25145){if((e25145 instanceof Object)){
var ex__24259__auto__ = e25145;
var statearr_25146_25158 = state_25125;
(statearr_25146_25158[(5)] = ex__24259__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25125);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25145;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24257__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25159 = state_25125;
state_25125 = G__25159;
continue;
} else {
return ret_value__24257__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__24256__auto__ = function(state_25125){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__24256__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__24256__auto____1.call(this,state_25125);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__24256__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__24256__auto____0;
cljs$core$async$reduce_$_state_machine__24256__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__24256__auto____1;
return cljs$core$async$reduce_$_state_machine__24256__auto__;
})()
;})(switch__24255__auto__,c__24367__auto__))
})();
var state__24369__auto__ = (function (){var statearr_25147 = f__24368__auto__.call(null);
(statearr_25147[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24367__auto__);

return statearr_25147;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24369__auto__);
});})(c__24367__auto__))
);

return c__24367__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args25160 = [];
var len__21551__auto___25212 = arguments.length;
var i__21552__auto___25213 = (0);
while(true){
if((i__21552__auto___25213 < len__21551__auto___25212)){
args25160.push((arguments[i__21552__auto___25213]));

var G__25214 = (i__21552__auto___25213 + (1));
i__21552__auto___25213 = G__25214;
continue;
} else {
}
break;
}

var G__25162 = args25160.length;
switch (G__25162) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25160.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__24367__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24367__auto__){
return (function (){
var f__24368__auto__ = (function (){var switch__24255__auto__ = ((function (c__24367__auto__){
return (function (state_25187){
var state_val_25188 = (state_25187[(1)]);
if((state_val_25188 === (7))){
var inst_25169 = (state_25187[(2)]);
var state_25187__$1 = state_25187;
var statearr_25189_25216 = state_25187__$1;
(statearr_25189_25216[(2)] = inst_25169);

(statearr_25189_25216[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25188 === (1))){
var inst_25163 = cljs.core.seq.call(null,coll);
var inst_25164 = inst_25163;
var state_25187__$1 = (function (){var statearr_25190 = state_25187;
(statearr_25190[(7)] = inst_25164);

return statearr_25190;
})();
var statearr_25191_25217 = state_25187__$1;
(statearr_25191_25217[(2)] = null);

(statearr_25191_25217[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25188 === (4))){
var inst_25164 = (state_25187[(7)]);
var inst_25167 = cljs.core.first.call(null,inst_25164);
var state_25187__$1 = state_25187;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25187__$1,(7),ch,inst_25167);
} else {
if((state_val_25188 === (13))){
var inst_25181 = (state_25187[(2)]);
var state_25187__$1 = state_25187;
var statearr_25192_25218 = state_25187__$1;
(statearr_25192_25218[(2)] = inst_25181);

(statearr_25192_25218[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25188 === (6))){
var inst_25172 = (state_25187[(2)]);
var state_25187__$1 = state_25187;
if(cljs.core.truth_(inst_25172)){
var statearr_25193_25219 = state_25187__$1;
(statearr_25193_25219[(1)] = (8));

} else {
var statearr_25194_25220 = state_25187__$1;
(statearr_25194_25220[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25188 === (3))){
var inst_25185 = (state_25187[(2)]);
var state_25187__$1 = state_25187;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25187__$1,inst_25185);
} else {
if((state_val_25188 === (12))){
var state_25187__$1 = state_25187;
var statearr_25195_25221 = state_25187__$1;
(statearr_25195_25221[(2)] = null);

(statearr_25195_25221[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25188 === (2))){
var inst_25164 = (state_25187[(7)]);
var state_25187__$1 = state_25187;
if(cljs.core.truth_(inst_25164)){
var statearr_25196_25222 = state_25187__$1;
(statearr_25196_25222[(1)] = (4));

} else {
var statearr_25197_25223 = state_25187__$1;
(statearr_25197_25223[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25188 === (11))){
var inst_25178 = cljs.core.async.close_BANG_.call(null,ch);
var state_25187__$1 = state_25187;
var statearr_25198_25224 = state_25187__$1;
(statearr_25198_25224[(2)] = inst_25178);

(statearr_25198_25224[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25188 === (9))){
var state_25187__$1 = state_25187;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25199_25225 = state_25187__$1;
(statearr_25199_25225[(1)] = (11));

} else {
var statearr_25200_25226 = state_25187__$1;
(statearr_25200_25226[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25188 === (5))){
var inst_25164 = (state_25187[(7)]);
var state_25187__$1 = state_25187;
var statearr_25201_25227 = state_25187__$1;
(statearr_25201_25227[(2)] = inst_25164);

(statearr_25201_25227[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25188 === (10))){
var inst_25183 = (state_25187[(2)]);
var state_25187__$1 = state_25187;
var statearr_25202_25228 = state_25187__$1;
(statearr_25202_25228[(2)] = inst_25183);

(statearr_25202_25228[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25188 === (8))){
var inst_25164 = (state_25187[(7)]);
var inst_25174 = cljs.core.next.call(null,inst_25164);
var inst_25164__$1 = inst_25174;
var state_25187__$1 = (function (){var statearr_25203 = state_25187;
(statearr_25203[(7)] = inst_25164__$1);

return statearr_25203;
})();
var statearr_25204_25229 = state_25187__$1;
(statearr_25204_25229[(2)] = null);

(statearr_25204_25229[(1)] = (2));


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
});})(c__24367__auto__))
;
return ((function (switch__24255__auto__,c__24367__auto__){
return (function() {
var cljs$core$async$state_machine__24256__auto__ = null;
var cljs$core$async$state_machine__24256__auto____0 = (function (){
var statearr_25208 = [null,null,null,null,null,null,null,null];
(statearr_25208[(0)] = cljs$core$async$state_machine__24256__auto__);

(statearr_25208[(1)] = (1));

return statearr_25208;
});
var cljs$core$async$state_machine__24256__auto____1 = (function (state_25187){
while(true){
var ret_value__24257__auto__ = (function (){try{while(true){
var result__24258__auto__ = switch__24255__auto__.call(null,state_25187);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24258__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24258__auto__;
}
break;
}
}catch (e25209){if((e25209 instanceof Object)){
var ex__24259__auto__ = e25209;
var statearr_25210_25230 = state_25187;
(statearr_25210_25230[(5)] = ex__24259__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25187);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25209;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24257__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25231 = state_25187;
state_25187 = G__25231;
continue;
} else {
return ret_value__24257__auto__;
}
break;
}
});
cljs$core$async$state_machine__24256__auto__ = function(state_25187){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24256__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24256__auto____1.call(this,state_25187);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24256__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24256__auto____0;
cljs$core$async$state_machine__24256__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24256__auto____1;
return cljs$core$async$state_machine__24256__auto__;
})()
;})(switch__24255__auto__,c__24367__auto__))
})();
var state__24369__auto__ = (function (){var statearr_25211 = f__24368__auto__.call(null);
(statearr_25211[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24367__auto__);

return statearr_25211;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24369__auto__);
});})(c__24367__auto__))
);

return c__24367__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__21148__auto__ = (((_ == null))?null:_);
var m__21149__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__21148__auto__)]);
if(!((m__21149__auto__ == null))){
return m__21149__auto__.call(null,_);
} else {
var m__21149__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__21149__auto____$1 == null))){
return m__21149__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__21148__auto__ = (((m == null))?null:m);
var m__21149__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__21148__auto__)]);
if(!((m__21149__auto__ == null))){
return m__21149__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__21149__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__21149__auto____$1 == null))){
return m__21149__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__21148__auto__ = (((m == null))?null:m);
var m__21149__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__21148__auto__)]);
if(!((m__21149__auto__ == null))){
return m__21149__auto__.call(null,m,ch);
} else {
var m__21149__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__21149__auto____$1 == null))){
return m__21149__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__21148__auto__ = (((m == null))?null:m);
var m__21149__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__21148__auto__)]);
if(!((m__21149__auto__ == null))){
return m__21149__auto__.call(null,m);
} else {
var m__21149__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__21149__auto____$1 == null))){
return m__21149__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async25453 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25453 = (function (mult,ch,cs,meta25454){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta25454 = meta25454;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25453.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_25455,meta25454__$1){
var self__ = this;
var _25455__$1 = this;
return (new cljs.core.async.t_cljs$core$async25453(self__.mult,self__.ch,self__.cs,meta25454__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async25453.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_25455){
var self__ = this;
var _25455__$1 = this;
return self__.meta25454;
});})(cs))
;

cljs.core.async.t_cljs$core$async25453.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async25453.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async25453.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async25453.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async25453.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async25453.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async25453.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta25454","meta25454",625888105,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async25453.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25453.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25453";

cljs.core.async.t_cljs$core$async25453.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__21091__auto__,writer__21092__auto__,opt__21093__auto__){
return cljs.core._write.call(null,writer__21092__auto__,"cljs.core.async/t_cljs$core$async25453");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async25453 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async25453(mult__$1,ch__$1,cs__$1,meta25454){
return (new cljs.core.async.t_cljs$core$async25453(mult__$1,ch__$1,cs__$1,meta25454));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async25453(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__24367__auto___25674 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24367__auto___25674,cs,m,dchan,dctr,done){
return (function (){
var f__24368__auto__ = (function (){var switch__24255__auto__ = ((function (c__24367__auto___25674,cs,m,dchan,dctr,done){
return (function (state_25586){
var state_val_25587 = (state_25586[(1)]);
if((state_val_25587 === (7))){
var inst_25582 = (state_25586[(2)]);
var state_25586__$1 = state_25586;
var statearr_25588_25675 = state_25586__$1;
(statearr_25588_25675[(2)] = inst_25582);

(statearr_25588_25675[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25587 === (20))){
var inst_25487 = (state_25586[(7)]);
var inst_25497 = cljs.core.first.call(null,inst_25487);
var inst_25498 = cljs.core.nth.call(null,inst_25497,(0),null);
var inst_25499 = cljs.core.nth.call(null,inst_25497,(1),null);
var state_25586__$1 = (function (){var statearr_25589 = state_25586;
(statearr_25589[(8)] = inst_25498);

return statearr_25589;
})();
if(cljs.core.truth_(inst_25499)){
var statearr_25590_25676 = state_25586__$1;
(statearr_25590_25676[(1)] = (22));

} else {
var statearr_25591_25677 = state_25586__$1;
(statearr_25591_25677[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25587 === (27))){
var inst_25458 = (state_25586[(9)]);
var inst_25534 = (state_25586[(10)]);
var inst_25529 = (state_25586[(11)]);
var inst_25527 = (state_25586[(12)]);
var inst_25534__$1 = cljs.core._nth.call(null,inst_25527,inst_25529);
var inst_25535 = cljs.core.async.put_BANG_.call(null,inst_25534__$1,inst_25458,done);
var state_25586__$1 = (function (){var statearr_25592 = state_25586;
(statearr_25592[(10)] = inst_25534__$1);

return statearr_25592;
})();
if(cljs.core.truth_(inst_25535)){
var statearr_25593_25678 = state_25586__$1;
(statearr_25593_25678[(1)] = (30));

} else {
var statearr_25594_25679 = state_25586__$1;
(statearr_25594_25679[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25587 === (1))){
var state_25586__$1 = state_25586;
var statearr_25595_25680 = state_25586__$1;
(statearr_25595_25680[(2)] = null);

(statearr_25595_25680[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25587 === (24))){
var inst_25487 = (state_25586[(7)]);
var inst_25504 = (state_25586[(2)]);
var inst_25505 = cljs.core.next.call(null,inst_25487);
var inst_25467 = inst_25505;
var inst_25468 = null;
var inst_25469 = (0);
var inst_25470 = (0);
var state_25586__$1 = (function (){var statearr_25596 = state_25586;
(statearr_25596[(13)] = inst_25470);

(statearr_25596[(14)] = inst_25469);

(statearr_25596[(15)] = inst_25468);

(statearr_25596[(16)] = inst_25467);

(statearr_25596[(17)] = inst_25504);

return statearr_25596;
})();
var statearr_25597_25681 = state_25586__$1;
(statearr_25597_25681[(2)] = null);

(statearr_25597_25681[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25587 === (39))){
var state_25586__$1 = state_25586;
var statearr_25601_25682 = state_25586__$1;
(statearr_25601_25682[(2)] = null);

(statearr_25601_25682[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25587 === (4))){
var inst_25458 = (state_25586[(9)]);
var inst_25458__$1 = (state_25586[(2)]);
var inst_25459 = (inst_25458__$1 == null);
var state_25586__$1 = (function (){var statearr_25602 = state_25586;
(statearr_25602[(9)] = inst_25458__$1);

return statearr_25602;
})();
if(cljs.core.truth_(inst_25459)){
var statearr_25603_25683 = state_25586__$1;
(statearr_25603_25683[(1)] = (5));

} else {
var statearr_25604_25684 = state_25586__$1;
(statearr_25604_25684[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25587 === (15))){
var inst_25470 = (state_25586[(13)]);
var inst_25469 = (state_25586[(14)]);
var inst_25468 = (state_25586[(15)]);
var inst_25467 = (state_25586[(16)]);
var inst_25483 = (state_25586[(2)]);
var inst_25484 = (inst_25470 + (1));
var tmp25598 = inst_25469;
var tmp25599 = inst_25468;
var tmp25600 = inst_25467;
var inst_25467__$1 = tmp25600;
var inst_25468__$1 = tmp25599;
var inst_25469__$1 = tmp25598;
var inst_25470__$1 = inst_25484;
var state_25586__$1 = (function (){var statearr_25605 = state_25586;
(statearr_25605[(13)] = inst_25470__$1);

(statearr_25605[(14)] = inst_25469__$1);

(statearr_25605[(15)] = inst_25468__$1);

(statearr_25605[(18)] = inst_25483);

(statearr_25605[(16)] = inst_25467__$1);

return statearr_25605;
})();
var statearr_25606_25685 = state_25586__$1;
(statearr_25606_25685[(2)] = null);

(statearr_25606_25685[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25587 === (21))){
var inst_25508 = (state_25586[(2)]);
var state_25586__$1 = state_25586;
var statearr_25610_25686 = state_25586__$1;
(statearr_25610_25686[(2)] = inst_25508);

(statearr_25610_25686[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25587 === (31))){
var inst_25534 = (state_25586[(10)]);
var inst_25538 = done.call(null,null);
var inst_25539 = cljs.core.async.untap_STAR_.call(null,m,inst_25534);
var state_25586__$1 = (function (){var statearr_25611 = state_25586;
(statearr_25611[(19)] = inst_25538);

return statearr_25611;
})();
var statearr_25612_25687 = state_25586__$1;
(statearr_25612_25687[(2)] = inst_25539);

(statearr_25612_25687[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25587 === (32))){
var inst_25526 = (state_25586[(20)]);
var inst_25528 = (state_25586[(21)]);
var inst_25529 = (state_25586[(11)]);
var inst_25527 = (state_25586[(12)]);
var inst_25541 = (state_25586[(2)]);
var inst_25542 = (inst_25529 + (1));
var tmp25607 = inst_25526;
var tmp25608 = inst_25528;
var tmp25609 = inst_25527;
var inst_25526__$1 = tmp25607;
var inst_25527__$1 = tmp25609;
var inst_25528__$1 = tmp25608;
var inst_25529__$1 = inst_25542;
var state_25586__$1 = (function (){var statearr_25613 = state_25586;
(statearr_25613[(22)] = inst_25541);

(statearr_25613[(20)] = inst_25526__$1);

(statearr_25613[(21)] = inst_25528__$1);

(statearr_25613[(11)] = inst_25529__$1);

(statearr_25613[(12)] = inst_25527__$1);

return statearr_25613;
})();
var statearr_25614_25688 = state_25586__$1;
(statearr_25614_25688[(2)] = null);

(statearr_25614_25688[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25587 === (40))){
var inst_25554 = (state_25586[(23)]);
var inst_25558 = done.call(null,null);
var inst_25559 = cljs.core.async.untap_STAR_.call(null,m,inst_25554);
var state_25586__$1 = (function (){var statearr_25615 = state_25586;
(statearr_25615[(24)] = inst_25558);

return statearr_25615;
})();
var statearr_25616_25689 = state_25586__$1;
(statearr_25616_25689[(2)] = inst_25559);

(statearr_25616_25689[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25587 === (33))){
var inst_25545 = (state_25586[(25)]);
var inst_25547 = cljs.core.chunked_seq_QMARK_.call(null,inst_25545);
var state_25586__$1 = state_25586;
if(inst_25547){
var statearr_25617_25690 = state_25586__$1;
(statearr_25617_25690[(1)] = (36));

} else {
var statearr_25618_25691 = state_25586__$1;
(statearr_25618_25691[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25587 === (13))){
var inst_25477 = (state_25586[(26)]);
var inst_25480 = cljs.core.async.close_BANG_.call(null,inst_25477);
var state_25586__$1 = state_25586;
var statearr_25619_25692 = state_25586__$1;
(statearr_25619_25692[(2)] = inst_25480);

(statearr_25619_25692[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25587 === (22))){
var inst_25498 = (state_25586[(8)]);
var inst_25501 = cljs.core.async.close_BANG_.call(null,inst_25498);
var state_25586__$1 = state_25586;
var statearr_25620_25693 = state_25586__$1;
(statearr_25620_25693[(2)] = inst_25501);

(statearr_25620_25693[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25587 === (36))){
var inst_25545 = (state_25586[(25)]);
var inst_25549 = cljs.core.chunk_first.call(null,inst_25545);
var inst_25550 = cljs.core.chunk_rest.call(null,inst_25545);
var inst_25551 = cljs.core.count.call(null,inst_25549);
var inst_25526 = inst_25550;
var inst_25527 = inst_25549;
var inst_25528 = inst_25551;
var inst_25529 = (0);
var state_25586__$1 = (function (){var statearr_25621 = state_25586;
(statearr_25621[(20)] = inst_25526);

(statearr_25621[(21)] = inst_25528);

(statearr_25621[(11)] = inst_25529);

(statearr_25621[(12)] = inst_25527);

return statearr_25621;
})();
var statearr_25622_25694 = state_25586__$1;
(statearr_25622_25694[(2)] = null);

(statearr_25622_25694[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25587 === (41))){
var inst_25545 = (state_25586[(25)]);
var inst_25561 = (state_25586[(2)]);
var inst_25562 = cljs.core.next.call(null,inst_25545);
var inst_25526 = inst_25562;
var inst_25527 = null;
var inst_25528 = (0);
var inst_25529 = (0);
var state_25586__$1 = (function (){var statearr_25623 = state_25586;
(statearr_25623[(20)] = inst_25526);

(statearr_25623[(21)] = inst_25528);

(statearr_25623[(11)] = inst_25529);

(statearr_25623[(27)] = inst_25561);

(statearr_25623[(12)] = inst_25527);

return statearr_25623;
})();
var statearr_25624_25695 = state_25586__$1;
(statearr_25624_25695[(2)] = null);

(statearr_25624_25695[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25587 === (43))){
var state_25586__$1 = state_25586;
var statearr_25625_25696 = state_25586__$1;
(statearr_25625_25696[(2)] = null);

(statearr_25625_25696[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25587 === (29))){
var inst_25570 = (state_25586[(2)]);
var state_25586__$1 = state_25586;
var statearr_25626_25697 = state_25586__$1;
(statearr_25626_25697[(2)] = inst_25570);

(statearr_25626_25697[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25587 === (44))){
var inst_25579 = (state_25586[(2)]);
var state_25586__$1 = (function (){var statearr_25627 = state_25586;
(statearr_25627[(28)] = inst_25579);

return statearr_25627;
})();
var statearr_25628_25698 = state_25586__$1;
(statearr_25628_25698[(2)] = null);

(statearr_25628_25698[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25587 === (6))){
var inst_25518 = (state_25586[(29)]);
var inst_25517 = cljs.core.deref.call(null,cs);
var inst_25518__$1 = cljs.core.keys.call(null,inst_25517);
var inst_25519 = cljs.core.count.call(null,inst_25518__$1);
var inst_25520 = cljs.core.reset_BANG_.call(null,dctr,inst_25519);
var inst_25525 = cljs.core.seq.call(null,inst_25518__$1);
var inst_25526 = inst_25525;
var inst_25527 = null;
var inst_25528 = (0);
var inst_25529 = (0);
var state_25586__$1 = (function (){var statearr_25629 = state_25586;
(statearr_25629[(29)] = inst_25518__$1);

(statearr_25629[(30)] = inst_25520);

(statearr_25629[(20)] = inst_25526);

(statearr_25629[(21)] = inst_25528);

(statearr_25629[(11)] = inst_25529);

(statearr_25629[(12)] = inst_25527);

return statearr_25629;
})();
var statearr_25630_25699 = state_25586__$1;
(statearr_25630_25699[(2)] = null);

(statearr_25630_25699[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25587 === (28))){
var inst_25545 = (state_25586[(25)]);
var inst_25526 = (state_25586[(20)]);
var inst_25545__$1 = cljs.core.seq.call(null,inst_25526);
var state_25586__$1 = (function (){var statearr_25631 = state_25586;
(statearr_25631[(25)] = inst_25545__$1);

return statearr_25631;
})();
if(inst_25545__$1){
var statearr_25632_25700 = state_25586__$1;
(statearr_25632_25700[(1)] = (33));

} else {
var statearr_25633_25701 = state_25586__$1;
(statearr_25633_25701[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25587 === (25))){
var inst_25528 = (state_25586[(21)]);
var inst_25529 = (state_25586[(11)]);
var inst_25531 = (inst_25529 < inst_25528);
var inst_25532 = inst_25531;
var state_25586__$1 = state_25586;
if(cljs.core.truth_(inst_25532)){
var statearr_25634_25702 = state_25586__$1;
(statearr_25634_25702[(1)] = (27));

} else {
var statearr_25635_25703 = state_25586__$1;
(statearr_25635_25703[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25587 === (34))){
var state_25586__$1 = state_25586;
var statearr_25636_25704 = state_25586__$1;
(statearr_25636_25704[(2)] = null);

(statearr_25636_25704[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25587 === (17))){
var state_25586__$1 = state_25586;
var statearr_25637_25705 = state_25586__$1;
(statearr_25637_25705[(2)] = null);

(statearr_25637_25705[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25587 === (3))){
var inst_25584 = (state_25586[(2)]);
var state_25586__$1 = state_25586;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25586__$1,inst_25584);
} else {
if((state_val_25587 === (12))){
var inst_25513 = (state_25586[(2)]);
var state_25586__$1 = state_25586;
var statearr_25638_25706 = state_25586__$1;
(statearr_25638_25706[(2)] = inst_25513);

(statearr_25638_25706[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25587 === (2))){
var state_25586__$1 = state_25586;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25586__$1,(4),ch);
} else {
if((state_val_25587 === (23))){
var state_25586__$1 = state_25586;
var statearr_25639_25707 = state_25586__$1;
(statearr_25639_25707[(2)] = null);

(statearr_25639_25707[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25587 === (35))){
var inst_25568 = (state_25586[(2)]);
var state_25586__$1 = state_25586;
var statearr_25640_25708 = state_25586__$1;
(statearr_25640_25708[(2)] = inst_25568);

(statearr_25640_25708[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25587 === (19))){
var inst_25487 = (state_25586[(7)]);
var inst_25491 = cljs.core.chunk_first.call(null,inst_25487);
var inst_25492 = cljs.core.chunk_rest.call(null,inst_25487);
var inst_25493 = cljs.core.count.call(null,inst_25491);
var inst_25467 = inst_25492;
var inst_25468 = inst_25491;
var inst_25469 = inst_25493;
var inst_25470 = (0);
var state_25586__$1 = (function (){var statearr_25641 = state_25586;
(statearr_25641[(13)] = inst_25470);

(statearr_25641[(14)] = inst_25469);

(statearr_25641[(15)] = inst_25468);

(statearr_25641[(16)] = inst_25467);

return statearr_25641;
})();
var statearr_25642_25709 = state_25586__$1;
(statearr_25642_25709[(2)] = null);

(statearr_25642_25709[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25587 === (11))){
var inst_25467 = (state_25586[(16)]);
var inst_25487 = (state_25586[(7)]);
var inst_25487__$1 = cljs.core.seq.call(null,inst_25467);
var state_25586__$1 = (function (){var statearr_25643 = state_25586;
(statearr_25643[(7)] = inst_25487__$1);

return statearr_25643;
})();
if(inst_25487__$1){
var statearr_25644_25710 = state_25586__$1;
(statearr_25644_25710[(1)] = (16));

} else {
var statearr_25645_25711 = state_25586__$1;
(statearr_25645_25711[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25587 === (9))){
var inst_25515 = (state_25586[(2)]);
var state_25586__$1 = state_25586;
var statearr_25646_25712 = state_25586__$1;
(statearr_25646_25712[(2)] = inst_25515);

(statearr_25646_25712[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25587 === (5))){
var inst_25465 = cljs.core.deref.call(null,cs);
var inst_25466 = cljs.core.seq.call(null,inst_25465);
var inst_25467 = inst_25466;
var inst_25468 = null;
var inst_25469 = (0);
var inst_25470 = (0);
var state_25586__$1 = (function (){var statearr_25647 = state_25586;
(statearr_25647[(13)] = inst_25470);

(statearr_25647[(14)] = inst_25469);

(statearr_25647[(15)] = inst_25468);

(statearr_25647[(16)] = inst_25467);

return statearr_25647;
})();
var statearr_25648_25713 = state_25586__$1;
(statearr_25648_25713[(2)] = null);

(statearr_25648_25713[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25587 === (14))){
var state_25586__$1 = state_25586;
var statearr_25649_25714 = state_25586__$1;
(statearr_25649_25714[(2)] = null);

(statearr_25649_25714[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25587 === (45))){
var inst_25576 = (state_25586[(2)]);
var state_25586__$1 = state_25586;
var statearr_25650_25715 = state_25586__$1;
(statearr_25650_25715[(2)] = inst_25576);

(statearr_25650_25715[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25587 === (26))){
var inst_25518 = (state_25586[(29)]);
var inst_25572 = (state_25586[(2)]);
var inst_25573 = cljs.core.seq.call(null,inst_25518);
var state_25586__$1 = (function (){var statearr_25651 = state_25586;
(statearr_25651[(31)] = inst_25572);

return statearr_25651;
})();
if(inst_25573){
var statearr_25652_25716 = state_25586__$1;
(statearr_25652_25716[(1)] = (42));

} else {
var statearr_25653_25717 = state_25586__$1;
(statearr_25653_25717[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25587 === (16))){
var inst_25487 = (state_25586[(7)]);
var inst_25489 = cljs.core.chunked_seq_QMARK_.call(null,inst_25487);
var state_25586__$1 = state_25586;
if(inst_25489){
var statearr_25654_25718 = state_25586__$1;
(statearr_25654_25718[(1)] = (19));

} else {
var statearr_25655_25719 = state_25586__$1;
(statearr_25655_25719[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25587 === (38))){
var inst_25565 = (state_25586[(2)]);
var state_25586__$1 = state_25586;
var statearr_25656_25720 = state_25586__$1;
(statearr_25656_25720[(2)] = inst_25565);

(statearr_25656_25720[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25587 === (30))){
var state_25586__$1 = state_25586;
var statearr_25657_25721 = state_25586__$1;
(statearr_25657_25721[(2)] = null);

(statearr_25657_25721[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25587 === (10))){
var inst_25470 = (state_25586[(13)]);
var inst_25468 = (state_25586[(15)]);
var inst_25476 = cljs.core._nth.call(null,inst_25468,inst_25470);
var inst_25477 = cljs.core.nth.call(null,inst_25476,(0),null);
var inst_25478 = cljs.core.nth.call(null,inst_25476,(1),null);
var state_25586__$1 = (function (){var statearr_25658 = state_25586;
(statearr_25658[(26)] = inst_25477);

return statearr_25658;
})();
if(cljs.core.truth_(inst_25478)){
var statearr_25659_25722 = state_25586__$1;
(statearr_25659_25722[(1)] = (13));

} else {
var statearr_25660_25723 = state_25586__$1;
(statearr_25660_25723[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25587 === (18))){
var inst_25511 = (state_25586[(2)]);
var state_25586__$1 = state_25586;
var statearr_25661_25724 = state_25586__$1;
(statearr_25661_25724[(2)] = inst_25511);

(statearr_25661_25724[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25587 === (42))){
var state_25586__$1 = state_25586;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25586__$1,(45),dchan);
} else {
if((state_val_25587 === (37))){
var inst_25458 = (state_25586[(9)]);
var inst_25545 = (state_25586[(25)]);
var inst_25554 = (state_25586[(23)]);
var inst_25554__$1 = cljs.core.first.call(null,inst_25545);
var inst_25555 = cljs.core.async.put_BANG_.call(null,inst_25554__$1,inst_25458,done);
var state_25586__$1 = (function (){var statearr_25662 = state_25586;
(statearr_25662[(23)] = inst_25554__$1);

return statearr_25662;
})();
if(cljs.core.truth_(inst_25555)){
var statearr_25663_25725 = state_25586__$1;
(statearr_25663_25725[(1)] = (39));

} else {
var statearr_25664_25726 = state_25586__$1;
(statearr_25664_25726[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25587 === (8))){
var inst_25470 = (state_25586[(13)]);
var inst_25469 = (state_25586[(14)]);
var inst_25472 = (inst_25470 < inst_25469);
var inst_25473 = inst_25472;
var state_25586__$1 = state_25586;
if(cljs.core.truth_(inst_25473)){
var statearr_25665_25727 = state_25586__$1;
(statearr_25665_25727[(1)] = (10));

} else {
var statearr_25666_25728 = state_25586__$1;
(statearr_25666_25728[(1)] = (11));

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
});})(c__24367__auto___25674,cs,m,dchan,dctr,done))
;
return ((function (switch__24255__auto__,c__24367__auto___25674,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__24256__auto__ = null;
var cljs$core$async$mult_$_state_machine__24256__auto____0 = (function (){
var statearr_25670 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25670[(0)] = cljs$core$async$mult_$_state_machine__24256__auto__);

(statearr_25670[(1)] = (1));

return statearr_25670;
});
var cljs$core$async$mult_$_state_machine__24256__auto____1 = (function (state_25586){
while(true){
var ret_value__24257__auto__ = (function (){try{while(true){
var result__24258__auto__ = switch__24255__auto__.call(null,state_25586);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24258__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24258__auto__;
}
break;
}
}catch (e25671){if((e25671 instanceof Object)){
var ex__24259__auto__ = e25671;
var statearr_25672_25729 = state_25586;
(statearr_25672_25729[(5)] = ex__24259__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25586);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25671;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24257__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25730 = state_25586;
state_25586 = G__25730;
continue;
} else {
return ret_value__24257__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__24256__auto__ = function(state_25586){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__24256__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__24256__auto____1.call(this,state_25586);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__24256__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__24256__auto____0;
cljs$core$async$mult_$_state_machine__24256__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__24256__auto____1;
return cljs$core$async$mult_$_state_machine__24256__auto__;
})()
;})(switch__24255__auto__,c__24367__auto___25674,cs,m,dchan,dctr,done))
})();
var state__24369__auto__ = (function (){var statearr_25673 = f__24368__auto__.call(null);
(statearr_25673[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24367__auto___25674);

return statearr_25673;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24369__auto__);
});})(c__24367__auto___25674,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args25731 = [];
var len__21551__auto___25734 = arguments.length;
var i__21552__auto___25735 = (0);
while(true){
if((i__21552__auto___25735 < len__21551__auto___25734)){
args25731.push((arguments[i__21552__auto___25735]));

var G__25736 = (i__21552__auto___25735 + (1));
i__21552__auto___25735 = G__25736;
continue;
} else {
}
break;
}

var G__25733 = args25731.length;
switch (G__25733) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25731.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__21148__auto__ = (((m == null))?null:m);
var m__21149__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__21148__auto__)]);
if(!((m__21149__auto__ == null))){
return m__21149__auto__.call(null,m,ch);
} else {
var m__21149__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__21149__auto____$1 == null))){
return m__21149__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__21148__auto__ = (((m == null))?null:m);
var m__21149__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__21148__auto__)]);
if(!((m__21149__auto__ == null))){
return m__21149__auto__.call(null,m,ch);
} else {
var m__21149__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__21149__auto____$1 == null))){
return m__21149__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__21148__auto__ = (((m == null))?null:m);
var m__21149__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__21148__auto__)]);
if(!((m__21149__auto__ == null))){
return m__21149__auto__.call(null,m);
} else {
var m__21149__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__21149__auto____$1 == null))){
return m__21149__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__21148__auto__ = (((m == null))?null:m);
var m__21149__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__21148__auto__)]);
if(!((m__21149__auto__ == null))){
return m__21149__auto__.call(null,m,state_map);
} else {
var m__21149__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__21149__auto____$1 == null))){
return m__21149__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__21148__auto__ = (((m == null))?null:m);
var m__21149__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__21148__auto__)]);
if(!((m__21149__auto__ == null))){
return m__21149__auto__.call(null,m,mode);
} else {
var m__21149__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__21149__auto____$1 == null))){
return m__21149__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__21558__auto__ = [];
var len__21551__auto___25748 = arguments.length;
var i__21552__auto___25749 = (0);
while(true){
if((i__21552__auto___25749 < len__21551__auto___25748)){
args__21558__auto__.push((arguments[i__21552__auto___25749]));

var G__25750 = (i__21552__auto___25749 + (1));
i__21552__auto___25749 = G__25750;
continue;
} else {
}
break;
}

var argseq__21559__auto__ = ((((3) < args__21558__auto__.length))?(new cljs.core.IndexedSeq(args__21558__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__21559__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__25742){
var map__25743 = p__25742;
var map__25743__$1 = ((((!((map__25743 == null)))?((((map__25743.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25743.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25743):map__25743);
var opts = map__25743__$1;
var statearr_25745_25751 = state;
(statearr_25745_25751[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__25743,map__25743__$1,opts){
return (function (val){
var statearr_25746_25752 = state;
(statearr_25746_25752[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__25743,map__25743__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_25747_25753 = state;
(statearr_25747_25753[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq25738){
var G__25739 = cljs.core.first.call(null,seq25738);
var seq25738__$1 = cljs.core.next.call(null,seq25738);
var G__25740 = cljs.core.first.call(null,seq25738__$1);
var seq25738__$2 = cljs.core.next.call(null,seq25738__$1);
var G__25741 = cljs.core.first.call(null,seq25738__$2);
var seq25738__$3 = cljs.core.next.call(null,seq25738__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__25739,G__25740,G__25741,seq25738__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async25917 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25917 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta25918){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta25918 = meta25918;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25917.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25919,meta25918__$1){
var self__ = this;
var _25919__$1 = this;
return (new cljs.core.async.t_cljs$core$async25917(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta25918__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25917.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25919){
var self__ = this;
var _25919__$1 = this;
return self__.meta25918;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25917.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async25917.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25917.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async25917.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25917.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25917.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25917.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25917.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25917.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta25918","meta25918",768935356,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25917.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25917.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25917";

cljs.core.async.t_cljs$core$async25917.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__21091__auto__,writer__21092__auto__,opt__21093__auto__){
return cljs.core._write.call(null,writer__21092__auto__,"cljs.core.async/t_cljs$core$async25917");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async25917 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async25917(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25918){
return (new cljs.core.async.t_cljs$core$async25917(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25918));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async25917(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__24367__auto___26080 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24367__auto___26080,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__24368__auto__ = (function (){var switch__24255__auto__ = ((function (c__24367__auto___26080,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_26017){
var state_val_26018 = (state_26017[(1)]);
if((state_val_26018 === (7))){
var inst_25935 = (state_26017[(2)]);
var state_26017__$1 = state_26017;
var statearr_26019_26081 = state_26017__$1;
(statearr_26019_26081[(2)] = inst_25935);

(statearr_26019_26081[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26018 === (20))){
var inst_25947 = (state_26017[(7)]);
var state_26017__$1 = state_26017;
var statearr_26020_26082 = state_26017__$1;
(statearr_26020_26082[(2)] = inst_25947);

(statearr_26020_26082[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26018 === (27))){
var state_26017__$1 = state_26017;
var statearr_26021_26083 = state_26017__$1;
(statearr_26021_26083[(2)] = null);

(statearr_26021_26083[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26018 === (1))){
var inst_25923 = (state_26017[(8)]);
var inst_25923__$1 = calc_state.call(null);
var inst_25925 = (inst_25923__$1 == null);
var inst_25926 = cljs.core.not.call(null,inst_25925);
var state_26017__$1 = (function (){var statearr_26022 = state_26017;
(statearr_26022[(8)] = inst_25923__$1);

return statearr_26022;
})();
if(inst_25926){
var statearr_26023_26084 = state_26017__$1;
(statearr_26023_26084[(1)] = (2));

} else {
var statearr_26024_26085 = state_26017__$1;
(statearr_26024_26085[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26018 === (24))){
var inst_25991 = (state_26017[(9)]);
var inst_25970 = (state_26017[(10)]);
var inst_25977 = (state_26017[(11)]);
var inst_25991__$1 = inst_25970.call(null,inst_25977);
var state_26017__$1 = (function (){var statearr_26025 = state_26017;
(statearr_26025[(9)] = inst_25991__$1);

return statearr_26025;
})();
if(cljs.core.truth_(inst_25991__$1)){
var statearr_26026_26086 = state_26017__$1;
(statearr_26026_26086[(1)] = (29));

} else {
var statearr_26027_26087 = state_26017__$1;
(statearr_26027_26087[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26018 === (4))){
var inst_25938 = (state_26017[(2)]);
var state_26017__$1 = state_26017;
if(cljs.core.truth_(inst_25938)){
var statearr_26028_26088 = state_26017__$1;
(statearr_26028_26088[(1)] = (8));

} else {
var statearr_26029_26089 = state_26017__$1;
(statearr_26029_26089[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26018 === (15))){
var inst_25964 = (state_26017[(2)]);
var state_26017__$1 = state_26017;
if(cljs.core.truth_(inst_25964)){
var statearr_26030_26090 = state_26017__$1;
(statearr_26030_26090[(1)] = (19));

} else {
var statearr_26031_26091 = state_26017__$1;
(statearr_26031_26091[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26018 === (21))){
var inst_25969 = (state_26017[(12)]);
var inst_25969__$1 = (state_26017[(2)]);
var inst_25970 = cljs.core.get.call(null,inst_25969__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_25971 = cljs.core.get.call(null,inst_25969__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_25972 = cljs.core.get.call(null,inst_25969__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_26017__$1 = (function (){var statearr_26032 = state_26017;
(statearr_26032[(12)] = inst_25969__$1);

(statearr_26032[(10)] = inst_25970);

(statearr_26032[(13)] = inst_25971);

return statearr_26032;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_26017__$1,(22),inst_25972);
} else {
if((state_val_26018 === (31))){
var inst_25999 = (state_26017[(2)]);
var state_26017__$1 = state_26017;
if(cljs.core.truth_(inst_25999)){
var statearr_26033_26092 = state_26017__$1;
(statearr_26033_26092[(1)] = (32));

} else {
var statearr_26034_26093 = state_26017__$1;
(statearr_26034_26093[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26018 === (32))){
var inst_25976 = (state_26017[(14)]);
var state_26017__$1 = state_26017;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26017__$1,(35),out,inst_25976);
} else {
if((state_val_26018 === (33))){
var inst_25969 = (state_26017[(12)]);
var inst_25947 = inst_25969;
var state_26017__$1 = (function (){var statearr_26035 = state_26017;
(statearr_26035[(7)] = inst_25947);

return statearr_26035;
})();
var statearr_26036_26094 = state_26017__$1;
(statearr_26036_26094[(2)] = null);

(statearr_26036_26094[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26018 === (13))){
var inst_25947 = (state_26017[(7)]);
var inst_25954 = inst_25947.cljs$lang$protocol_mask$partition0$;
var inst_25955 = (inst_25954 & (64));
var inst_25956 = inst_25947.cljs$core$ISeq$;
var inst_25957 = (inst_25955) || (inst_25956);
var state_26017__$1 = state_26017;
if(cljs.core.truth_(inst_25957)){
var statearr_26037_26095 = state_26017__$1;
(statearr_26037_26095[(1)] = (16));

} else {
var statearr_26038_26096 = state_26017__$1;
(statearr_26038_26096[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26018 === (22))){
var inst_25976 = (state_26017[(14)]);
var inst_25977 = (state_26017[(11)]);
var inst_25975 = (state_26017[(2)]);
var inst_25976__$1 = cljs.core.nth.call(null,inst_25975,(0),null);
var inst_25977__$1 = cljs.core.nth.call(null,inst_25975,(1),null);
var inst_25978 = (inst_25976__$1 == null);
var inst_25979 = cljs.core._EQ_.call(null,inst_25977__$1,change);
var inst_25980 = (inst_25978) || (inst_25979);
var state_26017__$1 = (function (){var statearr_26039 = state_26017;
(statearr_26039[(14)] = inst_25976__$1);

(statearr_26039[(11)] = inst_25977__$1);

return statearr_26039;
})();
if(cljs.core.truth_(inst_25980)){
var statearr_26040_26097 = state_26017__$1;
(statearr_26040_26097[(1)] = (23));

} else {
var statearr_26041_26098 = state_26017__$1;
(statearr_26041_26098[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26018 === (36))){
var inst_25969 = (state_26017[(12)]);
var inst_25947 = inst_25969;
var state_26017__$1 = (function (){var statearr_26042 = state_26017;
(statearr_26042[(7)] = inst_25947);

return statearr_26042;
})();
var statearr_26043_26099 = state_26017__$1;
(statearr_26043_26099[(2)] = null);

(statearr_26043_26099[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26018 === (29))){
var inst_25991 = (state_26017[(9)]);
var state_26017__$1 = state_26017;
var statearr_26044_26100 = state_26017__$1;
(statearr_26044_26100[(2)] = inst_25991);

(statearr_26044_26100[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26018 === (6))){
var state_26017__$1 = state_26017;
var statearr_26045_26101 = state_26017__$1;
(statearr_26045_26101[(2)] = false);

(statearr_26045_26101[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26018 === (28))){
var inst_25987 = (state_26017[(2)]);
var inst_25988 = calc_state.call(null);
var inst_25947 = inst_25988;
var state_26017__$1 = (function (){var statearr_26046 = state_26017;
(statearr_26046[(7)] = inst_25947);

(statearr_26046[(15)] = inst_25987);

return statearr_26046;
})();
var statearr_26047_26102 = state_26017__$1;
(statearr_26047_26102[(2)] = null);

(statearr_26047_26102[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26018 === (25))){
var inst_26013 = (state_26017[(2)]);
var state_26017__$1 = state_26017;
var statearr_26048_26103 = state_26017__$1;
(statearr_26048_26103[(2)] = inst_26013);

(statearr_26048_26103[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26018 === (34))){
var inst_26011 = (state_26017[(2)]);
var state_26017__$1 = state_26017;
var statearr_26049_26104 = state_26017__$1;
(statearr_26049_26104[(2)] = inst_26011);

(statearr_26049_26104[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26018 === (17))){
var state_26017__$1 = state_26017;
var statearr_26050_26105 = state_26017__$1;
(statearr_26050_26105[(2)] = false);

(statearr_26050_26105[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26018 === (3))){
var state_26017__$1 = state_26017;
var statearr_26051_26106 = state_26017__$1;
(statearr_26051_26106[(2)] = false);

(statearr_26051_26106[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26018 === (12))){
var inst_26015 = (state_26017[(2)]);
var state_26017__$1 = state_26017;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26017__$1,inst_26015);
} else {
if((state_val_26018 === (2))){
var inst_25923 = (state_26017[(8)]);
var inst_25928 = inst_25923.cljs$lang$protocol_mask$partition0$;
var inst_25929 = (inst_25928 & (64));
var inst_25930 = inst_25923.cljs$core$ISeq$;
var inst_25931 = (inst_25929) || (inst_25930);
var state_26017__$1 = state_26017;
if(cljs.core.truth_(inst_25931)){
var statearr_26052_26107 = state_26017__$1;
(statearr_26052_26107[(1)] = (5));

} else {
var statearr_26053_26108 = state_26017__$1;
(statearr_26053_26108[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26018 === (23))){
var inst_25976 = (state_26017[(14)]);
var inst_25982 = (inst_25976 == null);
var state_26017__$1 = state_26017;
if(cljs.core.truth_(inst_25982)){
var statearr_26054_26109 = state_26017__$1;
(statearr_26054_26109[(1)] = (26));

} else {
var statearr_26055_26110 = state_26017__$1;
(statearr_26055_26110[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26018 === (35))){
var inst_26002 = (state_26017[(2)]);
var state_26017__$1 = state_26017;
if(cljs.core.truth_(inst_26002)){
var statearr_26056_26111 = state_26017__$1;
(statearr_26056_26111[(1)] = (36));

} else {
var statearr_26057_26112 = state_26017__$1;
(statearr_26057_26112[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26018 === (19))){
var inst_25947 = (state_26017[(7)]);
var inst_25966 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25947);
var state_26017__$1 = state_26017;
var statearr_26058_26113 = state_26017__$1;
(statearr_26058_26113[(2)] = inst_25966);

(statearr_26058_26113[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26018 === (11))){
var inst_25947 = (state_26017[(7)]);
var inst_25951 = (inst_25947 == null);
var inst_25952 = cljs.core.not.call(null,inst_25951);
var state_26017__$1 = state_26017;
if(inst_25952){
var statearr_26059_26114 = state_26017__$1;
(statearr_26059_26114[(1)] = (13));

} else {
var statearr_26060_26115 = state_26017__$1;
(statearr_26060_26115[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26018 === (9))){
var inst_25923 = (state_26017[(8)]);
var state_26017__$1 = state_26017;
var statearr_26061_26116 = state_26017__$1;
(statearr_26061_26116[(2)] = inst_25923);

(statearr_26061_26116[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26018 === (5))){
var state_26017__$1 = state_26017;
var statearr_26062_26117 = state_26017__$1;
(statearr_26062_26117[(2)] = true);

(statearr_26062_26117[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26018 === (14))){
var state_26017__$1 = state_26017;
var statearr_26063_26118 = state_26017__$1;
(statearr_26063_26118[(2)] = false);

(statearr_26063_26118[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26018 === (26))){
var inst_25977 = (state_26017[(11)]);
var inst_25984 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_25977);
var state_26017__$1 = state_26017;
var statearr_26064_26119 = state_26017__$1;
(statearr_26064_26119[(2)] = inst_25984);

(statearr_26064_26119[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26018 === (16))){
var state_26017__$1 = state_26017;
var statearr_26065_26120 = state_26017__$1;
(statearr_26065_26120[(2)] = true);

(statearr_26065_26120[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26018 === (38))){
var inst_26007 = (state_26017[(2)]);
var state_26017__$1 = state_26017;
var statearr_26066_26121 = state_26017__$1;
(statearr_26066_26121[(2)] = inst_26007);

(statearr_26066_26121[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26018 === (30))){
var inst_25970 = (state_26017[(10)]);
var inst_25971 = (state_26017[(13)]);
var inst_25977 = (state_26017[(11)]);
var inst_25994 = cljs.core.empty_QMARK_.call(null,inst_25970);
var inst_25995 = inst_25971.call(null,inst_25977);
var inst_25996 = cljs.core.not.call(null,inst_25995);
var inst_25997 = (inst_25994) && (inst_25996);
var state_26017__$1 = state_26017;
var statearr_26067_26122 = state_26017__$1;
(statearr_26067_26122[(2)] = inst_25997);

(statearr_26067_26122[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26018 === (10))){
var inst_25923 = (state_26017[(8)]);
var inst_25943 = (state_26017[(2)]);
var inst_25944 = cljs.core.get.call(null,inst_25943,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_25945 = cljs.core.get.call(null,inst_25943,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_25946 = cljs.core.get.call(null,inst_25943,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_25947 = inst_25923;
var state_26017__$1 = (function (){var statearr_26068 = state_26017;
(statearr_26068[(7)] = inst_25947);

(statearr_26068[(16)] = inst_25946);

(statearr_26068[(17)] = inst_25944);

(statearr_26068[(18)] = inst_25945);

return statearr_26068;
})();
var statearr_26069_26123 = state_26017__$1;
(statearr_26069_26123[(2)] = null);

(statearr_26069_26123[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26018 === (18))){
var inst_25961 = (state_26017[(2)]);
var state_26017__$1 = state_26017;
var statearr_26070_26124 = state_26017__$1;
(statearr_26070_26124[(2)] = inst_25961);

(statearr_26070_26124[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26018 === (37))){
var state_26017__$1 = state_26017;
var statearr_26071_26125 = state_26017__$1;
(statearr_26071_26125[(2)] = null);

(statearr_26071_26125[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26018 === (8))){
var inst_25923 = (state_26017[(8)]);
var inst_25940 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25923);
var state_26017__$1 = state_26017;
var statearr_26072_26126 = state_26017__$1;
(statearr_26072_26126[(2)] = inst_25940);

(statearr_26072_26126[(1)] = (10));


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
});})(c__24367__auto___26080,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__24255__auto__,c__24367__auto___26080,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__24256__auto__ = null;
var cljs$core$async$mix_$_state_machine__24256__auto____0 = (function (){
var statearr_26076 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26076[(0)] = cljs$core$async$mix_$_state_machine__24256__auto__);

(statearr_26076[(1)] = (1));

return statearr_26076;
});
var cljs$core$async$mix_$_state_machine__24256__auto____1 = (function (state_26017){
while(true){
var ret_value__24257__auto__ = (function (){try{while(true){
var result__24258__auto__ = switch__24255__auto__.call(null,state_26017);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24258__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24258__auto__;
}
break;
}
}catch (e26077){if((e26077 instanceof Object)){
var ex__24259__auto__ = e26077;
var statearr_26078_26127 = state_26017;
(statearr_26078_26127[(5)] = ex__24259__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26017);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26077;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24257__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26128 = state_26017;
state_26017 = G__26128;
continue;
} else {
return ret_value__24257__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__24256__auto__ = function(state_26017){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__24256__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__24256__auto____1.call(this,state_26017);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__24256__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__24256__auto____0;
cljs$core$async$mix_$_state_machine__24256__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__24256__auto____1;
return cljs$core$async$mix_$_state_machine__24256__auto__;
})()
;})(switch__24255__auto__,c__24367__auto___26080,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__24369__auto__ = (function (){var statearr_26079 = f__24368__auto__.call(null);
(statearr_26079[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24367__auto___26080);

return statearr_26079;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24369__auto__);
});})(c__24367__auto___26080,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__21148__auto__ = (((p == null))?null:p);
var m__21149__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__21148__auto__)]);
if(!((m__21149__auto__ == null))){
return m__21149__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__21149__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__21149__auto____$1 == null))){
return m__21149__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__21148__auto__ = (((p == null))?null:p);
var m__21149__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__21148__auto__)]);
if(!((m__21149__auto__ == null))){
return m__21149__auto__.call(null,p,v,ch);
} else {
var m__21149__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__21149__auto____$1 == null))){
return m__21149__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args26129 = [];
var len__21551__auto___26132 = arguments.length;
var i__21552__auto___26133 = (0);
while(true){
if((i__21552__auto___26133 < len__21551__auto___26132)){
args26129.push((arguments[i__21552__auto___26133]));

var G__26134 = (i__21552__auto___26133 + (1));
i__21552__auto___26133 = G__26134;
continue;
} else {
}
break;
}

var G__26131 = args26129.length;
switch (G__26131) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26129.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__21148__auto__ = (((p == null))?null:p);
var m__21149__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__21148__auto__)]);
if(!((m__21149__auto__ == null))){
return m__21149__auto__.call(null,p);
} else {
var m__21149__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__21149__auto____$1 == null))){
return m__21149__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__21148__auto__ = (((p == null))?null:p);
var m__21149__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__21148__auto__)]);
if(!((m__21149__auto__ == null))){
return m__21149__auto__.call(null,p,v);
} else {
var m__21149__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__21149__auto____$1 == null))){
return m__21149__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args26137 = [];
var len__21551__auto___26262 = arguments.length;
var i__21552__auto___26263 = (0);
while(true){
if((i__21552__auto___26263 < len__21551__auto___26262)){
args26137.push((arguments[i__21552__auto___26263]));

var G__26264 = (i__21552__auto___26263 + (1));
i__21552__auto___26263 = G__26264;
continue;
} else {
}
break;
}

var G__26139 = args26137.length;
switch (G__26139) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26137.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__20493__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__20493__auto__)){
return or__20493__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__20493__auto__,mults){
return (function (p1__26136_SHARP_){
if(cljs.core.truth_(p1__26136_SHARP_.call(null,topic))){
return p1__26136_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__26136_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__20493__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async26140 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26140 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta26141){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta26141 = meta26141;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26140.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_26142,meta26141__$1){
var self__ = this;
var _26142__$1 = this;
return (new cljs.core.async.t_cljs$core$async26140(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta26141__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26140.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_26142){
var self__ = this;
var _26142__$1 = this;
return self__.meta26141;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26140.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async26140.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26140.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async26140.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26140.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26140.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26140.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26140.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta26141","meta26141",756686170,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26140.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26140.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26140";

cljs.core.async.t_cljs$core$async26140.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__21091__auto__,writer__21092__auto__,opt__21093__auto__){
return cljs.core._write.call(null,writer__21092__auto__,"cljs.core.async/t_cljs$core$async26140");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async26140 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async26140(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta26141){
return (new cljs.core.async.t_cljs$core$async26140(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta26141));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async26140(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__24367__auto___26266 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24367__auto___26266,mults,ensure_mult,p){
return (function (){
var f__24368__auto__ = (function (){var switch__24255__auto__ = ((function (c__24367__auto___26266,mults,ensure_mult,p){
return (function (state_26214){
var state_val_26215 = (state_26214[(1)]);
if((state_val_26215 === (7))){
var inst_26210 = (state_26214[(2)]);
var state_26214__$1 = state_26214;
var statearr_26216_26267 = state_26214__$1;
(statearr_26216_26267[(2)] = inst_26210);

(statearr_26216_26267[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26215 === (20))){
var state_26214__$1 = state_26214;
var statearr_26217_26268 = state_26214__$1;
(statearr_26217_26268[(2)] = null);

(statearr_26217_26268[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26215 === (1))){
var state_26214__$1 = state_26214;
var statearr_26218_26269 = state_26214__$1;
(statearr_26218_26269[(2)] = null);

(statearr_26218_26269[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26215 === (24))){
var inst_26193 = (state_26214[(7)]);
var inst_26202 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_26193);
var state_26214__$1 = state_26214;
var statearr_26219_26270 = state_26214__$1;
(statearr_26219_26270[(2)] = inst_26202);

(statearr_26219_26270[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26215 === (4))){
var inst_26145 = (state_26214[(8)]);
var inst_26145__$1 = (state_26214[(2)]);
var inst_26146 = (inst_26145__$1 == null);
var state_26214__$1 = (function (){var statearr_26220 = state_26214;
(statearr_26220[(8)] = inst_26145__$1);

return statearr_26220;
})();
if(cljs.core.truth_(inst_26146)){
var statearr_26221_26271 = state_26214__$1;
(statearr_26221_26271[(1)] = (5));

} else {
var statearr_26222_26272 = state_26214__$1;
(statearr_26222_26272[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26215 === (15))){
var inst_26187 = (state_26214[(2)]);
var state_26214__$1 = state_26214;
var statearr_26223_26273 = state_26214__$1;
(statearr_26223_26273[(2)] = inst_26187);

(statearr_26223_26273[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26215 === (21))){
var inst_26207 = (state_26214[(2)]);
var state_26214__$1 = (function (){var statearr_26224 = state_26214;
(statearr_26224[(9)] = inst_26207);

return statearr_26224;
})();
var statearr_26225_26274 = state_26214__$1;
(statearr_26225_26274[(2)] = null);

(statearr_26225_26274[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26215 === (13))){
var inst_26169 = (state_26214[(10)]);
var inst_26171 = cljs.core.chunked_seq_QMARK_.call(null,inst_26169);
var state_26214__$1 = state_26214;
if(inst_26171){
var statearr_26226_26275 = state_26214__$1;
(statearr_26226_26275[(1)] = (16));

} else {
var statearr_26227_26276 = state_26214__$1;
(statearr_26227_26276[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26215 === (22))){
var inst_26199 = (state_26214[(2)]);
var state_26214__$1 = state_26214;
if(cljs.core.truth_(inst_26199)){
var statearr_26228_26277 = state_26214__$1;
(statearr_26228_26277[(1)] = (23));

} else {
var statearr_26229_26278 = state_26214__$1;
(statearr_26229_26278[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26215 === (6))){
var inst_26195 = (state_26214[(11)]);
var inst_26193 = (state_26214[(7)]);
var inst_26145 = (state_26214[(8)]);
var inst_26193__$1 = topic_fn.call(null,inst_26145);
var inst_26194 = cljs.core.deref.call(null,mults);
var inst_26195__$1 = cljs.core.get.call(null,inst_26194,inst_26193__$1);
var state_26214__$1 = (function (){var statearr_26230 = state_26214;
(statearr_26230[(11)] = inst_26195__$1);

(statearr_26230[(7)] = inst_26193__$1);

return statearr_26230;
})();
if(cljs.core.truth_(inst_26195__$1)){
var statearr_26231_26279 = state_26214__$1;
(statearr_26231_26279[(1)] = (19));

} else {
var statearr_26232_26280 = state_26214__$1;
(statearr_26232_26280[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26215 === (25))){
var inst_26204 = (state_26214[(2)]);
var state_26214__$1 = state_26214;
var statearr_26233_26281 = state_26214__$1;
(statearr_26233_26281[(2)] = inst_26204);

(statearr_26233_26281[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26215 === (17))){
var inst_26169 = (state_26214[(10)]);
var inst_26178 = cljs.core.first.call(null,inst_26169);
var inst_26179 = cljs.core.async.muxch_STAR_.call(null,inst_26178);
var inst_26180 = cljs.core.async.close_BANG_.call(null,inst_26179);
var inst_26181 = cljs.core.next.call(null,inst_26169);
var inst_26155 = inst_26181;
var inst_26156 = null;
var inst_26157 = (0);
var inst_26158 = (0);
var state_26214__$1 = (function (){var statearr_26234 = state_26214;
(statearr_26234[(12)] = inst_26180);

(statearr_26234[(13)] = inst_26157);

(statearr_26234[(14)] = inst_26158);

(statearr_26234[(15)] = inst_26155);

(statearr_26234[(16)] = inst_26156);

return statearr_26234;
})();
var statearr_26235_26282 = state_26214__$1;
(statearr_26235_26282[(2)] = null);

(statearr_26235_26282[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26215 === (3))){
var inst_26212 = (state_26214[(2)]);
var state_26214__$1 = state_26214;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26214__$1,inst_26212);
} else {
if((state_val_26215 === (12))){
var inst_26189 = (state_26214[(2)]);
var state_26214__$1 = state_26214;
var statearr_26236_26283 = state_26214__$1;
(statearr_26236_26283[(2)] = inst_26189);

(statearr_26236_26283[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26215 === (2))){
var state_26214__$1 = state_26214;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26214__$1,(4),ch);
} else {
if((state_val_26215 === (23))){
var state_26214__$1 = state_26214;
var statearr_26237_26284 = state_26214__$1;
(statearr_26237_26284[(2)] = null);

(statearr_26237_26284[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26215 === (19))){
var inst_26195 = (state_26214[(11)]);
var inst_26145 = (state_26214[(8)]);
var inst_26197 = cljs.core.async.muxch_STAR_.call(null,inst_26195);
var state_26214__$1 = state_26214;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26214__$1,(22),inst_26197,inst_26145);
} else {
if((state_val_26215 === (11))){
var inst_26169 = (state_26214[(10)]);
var inst_26155 = (state_26214[(15)]);
var inst_26169__$1 = cljs.core.seq.call(null,inst_26155);
var state_26214__$1 = (function (){var statearr_26238 = state_26214;
(statearr_26238[(10)] = inst_26169__$1);

return statearr_26238;
})();
if(inst_26169__$1){
var statearr_26239_26285 = state_26214__$1;
(statearr_26239_26285[(1)] = (13));

} else {
var statearr_26240_26286 = state_26214__$1;
(statearr_26240_26286[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26215 === (9))){
var inst_26191 = (state_26214[(2)]);
var state_26214__$1 = state_26214;
var statearr_26241_26287 = state_26214__$1;
(statearr_26241_26287[(2)] = inst_26191);

(statearr_26241_26287[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26215 === (5))){
var inst_26152 = cljs.core.deref.call(null,mults);
var inst_26153 = cljs.core.vals.call(null,inst_26152);
var inst_26154 = cljs.core.seq.call(null,inst_26153);
var inst_26155 = inst_26154;
var inst_26156 = null;
var inst_26157 = (0);
var inst_26158 = (0);
var state_26214__$1 = (function (){var statearr_26242 = state_26214;
(statearr_26242[(13)] = inst_26157);

(statearr_26242[(14)] = inst_26158);

(statearr_26242[(15)] = inst_26155);

(statearr_26242[(16)] = inst_26156);

return statearr_26242;
})();
var statearr_26243_26288 = state_26214__$1;
(statearr_26243_26288[(2)] = null);

(statearr_26243_26288[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26215 === (14))){
var state_26214__$1 = state_26214;
var statearr_26247_26289 = state_26214__$1;
(statearr_26247_26289[(2)] = null);

(statearr_26247_26289[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26215 === (16))){
var inst_26169 = (state_26214[(10)]);
var inst_26173 = cljs.core.chunk_first.call(null,inst_26169);
var inst_26174 = cljs.core.chunk_rest.call(null,inst_26169);
var inst_26175 = cljs.core.count.call(null,inst_26173);
var inst_26155 = inst_26174;
var inst_26156 = inst_26173;
var inst_26157 = inst_26175;
var inst_26158 = (0);
var state_26214__$1 = (function (){var statearr_26248 = state_26214;
(statearr_26248[(13)] = inst_26157);

(statearr_26248[(14)] = inst_26158);

(statearr_26248[(15)] = inst_26155);

(statearr_26248[(16)] = inst_26156);

return statearr_26248;
})();
var statearr_26249_26290 = state_26214__$1;
(statearr_26249_26290[(2)] = null);

(statearr_26249_26290[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26215 === (10))){
var inst_26157 = (state_26214[(13)]);
var inst_26158 = (state_26214[(14)]);
var inst_26155 = (state_26214[(15)]);
var inst_26156 = (state_26214[(16)]);
var inst_26163 = cljs.core._nth.call(null,inst_26156,inst_26158);
var inst_26164 = cljs.core.async.muxch_STAR_.call(null,inst_26163);
var inst_26165 = cljs.core.async.close_BANG_.call(null,inst_26164);
var inst_26166 = (inst_26158 + (1));
var tmp26244 = inst_26157;
var tmp26245 = inst_26155;
var tmp26246 = inst_26156;
var inst_26155__$1 = tmp26245;
var inst_26156__$1 = tmp26246;
var inst_26157__$1 = tmp26244;
var inst_26158__$1 = inst_26166;
var state_26214__$1 = (function (){var statearr_26250 = state_26214;
(statearr_26250[(13)] = inst_26157__$1);

(statearr_26250[(14)] = inst_26158__$1);

(statearr_26250[(15)] = inst_26155__$1);

(statearr_26250[(17)] = inst_26165);

(statearr_26250[(16)] = inst_26156__$1);

return statearr_26250;
})();
var statearr_26251_26291 = state_26214__$1;
(statearr_26251_26291[(2)] = null);

(statearr_26251_26291[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26215 === (18))){
var inst_26184 = (state_26214[(2)]);
var state_26214__$1 = state_26214;
var statearr_26252_26292 = state_26214__$1;
(statearr_26252_26292[(2)] = inst_26184);

(statearr_26252_26292[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26215 === (8))){
var inst_26157 = (state_26214[(13)]);
var inst_26158 = (state_26214[(14)]);
var inst_26160 = (inst_26158 < inst_26157);
var inst_26161 = inst_26160;
var state_26214__$1 = state_26214;
if(cljs.core.truth_(inst_26161)){
var statearr_26253_26293 = state_26214__$1;
(statearr_26253_26293[(1)] = (10));

} else {
var statearr_26254_26294 = state_26214__$1;
(statearr_26254_26294[(1)] = (11));

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
});})(c__24367__auto___26266,mults,ensure_mult,p))
;
return ((function (switch__24255__auto__,c__24367__auto___26266,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__24256__auto__ = null;
var cljs$core$async$state_machine__24256__auto____0 = (function (){
var statearr_26258 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26258[(0)] = cljs$core$async$state_machine__24256__auto__);

(statearr_26258[(1)] = (1));

return statearr_26258;
});
var cljs$core$async$state_machine__24256__auto____1 = (function (state_26214){
while(true){
var ret_value__24257__auto__ = (function (){try{while(true){
var result__24258__auto__ = switch__24255__auto__.call(null,state_26214);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24258__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24258__auto__;
}
break;
}
}catch (e26259){if((e26259 instanceof Object)){
var ex__24259__auto__ = e26259;
var statearr_26260_26295 = state_26214;
(statearr_26260_26295[(5)] = ex__24259__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26214);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26259;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24257__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26296 = state_26214;
state_26214 = G__26296;
continue;
} else {
return ret_value__24257__auto__;
}
break;
}
});
cljs$core$async$state_machine__24256__auto__ = function(state_26214){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24256__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24256__auto____1.call(this,state_26214);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24256__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24256__auto____0;
cljs$core$async$state_machine__24256__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24256__auto____1;
return cljs$core$async$state_machine__24256__auto__;
})()
;})(switch__24255__auto__,c__24367__auto___26266,mults,ensure_mult,p))
})();
var state__24369__auto__ = (function (){var statearr_26261 = f__24368__auto__.call(null);
(statearr_26261[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24367__auto___26266);

return statearr_26261;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24369__auto__);
});})(c__24367__auto___26266,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args26297 = [];
var len__21551__auto___26300 = arguments.length;
var i__21552__auto___26301 = (0);
while(true){
if((i__21552__auto___26301 < len__21551__auto___26300)){
args26297.push((arguments[i__21552__auto___26301]));

var G__26302 = (i__21552__auto___26301 + (1));
i__21552__auto___26301 = G__26302;
continue;
} else {
}
break;
}

var G__26299 = args26297.length;
switch (G__26299) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26297.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args26304 = [];
var len__21551__auto___26307 = arguments.length;
var i__21552__auto___26308 = (0);
while(true){
if((i__21552__auto___26308 < len__21551__auto___26307)){
args26304.push((arguments[i__21552__auto___26308]));

var G__26309 = (i__21552__auto___26308 + (1));
i__21552__auto___26308 = G__26309;
continue;
} else {
}
break;
}

var G__26306 = args26304.length;
switch (G__26306) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26304.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args26311 = [];
var len__21551__auto___26382 = arguments.length;
var i__21552__auto___26383 = (0);
while(true){
if((i__21552__auto___26383 < len__21551__auto___26382)){
args26311.push((arguments[i__21552__auto___26383]));

var G__26384 = (i__21552__auto___26383 + (1));
i__21552__auto___26383 = G__26384;
continue;
} else {
}
break;
}

var G__26313 = args26311.length;
switch (G__26313) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26311.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__24367__auto___26386 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24367__auto___26386,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__24368__auto__ = (function (){var switch__24255__auto__ = ((function (c__24367__auto___26386,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_26352){
var state_val_26353 = (state_26352[(1)]);
if((state_val_26353 === (7))){
var state_26352__$1 = state_26352;
var statearr_26354_26387 = state_26352__$1;
(statearr_26354_26387[(2)] = null);

(statearr_26354_26387[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26353 === (1))){
var state_26352__$1 = state_26352;
var statearr_26355_26388 = state_26352__$1;
(statearr_26355_26388[(2)] = null);

(statearr_26355_26388[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26353 === (4))){
var inst_26316 = (state_26352[(7)]);
var inst_26318 = (inst_26316 < cnt);
var state_26352__$1 = state_26352;
if(cljs.core.truth_(inst_26318)){
var statearr_26356_26389 = state_26352__$1;
(statearr_26356_26389[(1)] = (6));

} else {
var statearr_26357_26390 = state_26352__$1;
(statearr_26357_26390[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26353 === (15))){
var inst_26348 = (state_26352[(2)]);
var state_26352__$1 = state_26352;
var statearr_26358_26391 = state_26352__$1;
(statearr_26358_26391[(2)] = inst_26348);

(statearr_26358_26391[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26353 === (13))){
var inst_26341 = cljs.core.async.close_BANG_.call(null,out);
var state_26352__$1 = state_26352;
var statearr_26359_26392 = state_26352__$1;
(statearr_26359_26392[(2)] = inst_26341);

(statearr_26359_26392[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26353 === (6))){
var state_26352__$1 = state_26352;
var statearr_26360_26393 = state_26352__$1;
(statearr_26360_26393[(2)] = null);

(statearr_26360_26393[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26353 === (3))){
var inst_26350 = (state_26352[(2)]);
var state_26352__$1 = state_26352;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26352__$1,inst_26350);
} else {
if((state_val_26353 === (12))){
var inst_26338 = (state_26352[(8)]);
var inst_26338__$1 = (state_26352[(2)]);
var inst_26339 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_26338__$1);
var state_26352__$1 = (function (){var statearr_26361 = state_26352;
(statearr_26361[(8)] = inst_26338__$1);

return statearr_26361;
})();
if(cljs.core.truth_(inst_26339)){
var statearr_26362_26394 = state_26352__$1;
(statearr_26362_26394[(1)] = (13));

} else {
var statearr_26363_26395 = state_26352__$1;
(statearr_26363_26395[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26353 === (2))){
var inst_26315 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_26316 = (0);
var state_26352__$1 = (function (){var statearr_26364 = state_26352;
(statearr_26364[(9)] = inst_26315);

(statearr_26364[(7)] = inst_26316);

return statearr_26364;
})();
var statearr_26365_26396 = state_26352__$1;
(statearr_26365_26396[(2)] = null);

(statearr_26365_26396[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26353 === (11))){
var inst_26316 = (state_26352[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_26352,(10),Object,null,(9));
var inst_26325 = chs__$1.call(null,inst_26316);
var inst_26326 = done.call(null,inst_26316);
var inst_26327 = cljs.core.async.take_BANG_.call(null,inst_26325,inst_26326);
var state_26352__$1 = state_26352;
var statearr_26366_26397 = state_26352__$1;
(statearr_26366_26397[(2)] = inst_26327);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26352__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26353 === (9))){
var inst_26316 = (state_26352[(7)]);
var inst_26329 = (state_26352[(2)]);
var inst_26330 = (inst_26316 + (1));
var inst_26316__$1 = inst_26330;
var state_26352__$1 = (function (){var statearr_26367 = state_26352;
(statearr_26367[(7)] = inst_26316__$1);

(statearr_26367[(10)] = inst_26329);

return statearr_26367;
})();
var statearr_26368_26398 = state_26352__$1;
(statearr_26368_26398[(2)] = null);

(statearr_26368_26398[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26353 === (5))){
var inst_26336 = (state_26352[(2)]);
var state_26352__$1 = (function (){var statearr_26369 = state_26352;
(statearr_26369[(11)] = inst_26336);

return statearr_26369;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26352__$1,(12),dchan);
} else {
if((state_val_26353 === (14))){
var inst_26338 = (state_26352[(8)]);
var inst_26343 = cljs.core.apply.call(null,f,inst_26338);
var state_26352__$1 = state_26352;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26352__$1,(16),out,inst_26343);
} else {
if((state_val_26353 === (16))){
var inst_26345 = (state_26352[(2)]);
var state_26352__$1 = (function (){var statearr_26370 = state_26352;
(statearr_26370[(12)] = inst_26345);

return statearr_26370;
})();
var statearr_26371_26399 = state_26352__$1;
(statearr_26371_26399[(2)] = null);

(statearr_26371_26399[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26353 === (10))){
var inst_26320 = (state_26352[(2)]);
var inst_26321 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_26352__$1 = (function (){var statearr_26372 = state_26352;
(statearr_26372[(13)] = inst_26320);

return statearr_26372;
})();
var statearr_26373_26400 = state_26352__$1;
(statearr_26373_26400[(2)] = inst_26321);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26352__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26353 === (8))){
var inst_26334 = (state_26352[(2)]);
var state_26352__$1 = state_26352;
var statearr_26374_26401 = state_26352__$1;
(statearr_26374_26401[(2)] = inst_26334);

(statearr_26374_26401[(1)] = (5));


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
});})(c__24367__auto___26386,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__24255__auto__,c__24367__auto___26386,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__24256__auto__ = null;
var cljs$core$async$state_machine__24256__auto____0 = (function (){
var statearr_26378 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26378[(0)] = cljs$core$async$state_machine__24256__auto__);

(statearr_26378[(1)] = (1));

return statearr_26378;
});
var cljs$core$async$state_machine__24256__auto____1 = (function (state_26352){
while(true){
var ret_value__24257__auto__ = (function (){try{while(true){
var result__24258__auto__ = switch__24255__auto__.call(null,state_26352);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24258__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24258__auto__;
}
break;
}
}catch (e26379){if((e26379 instanceof Object)){
var ex__24259__auto__ = e26379;
var statearr_26380_26402 = state_26352;
(statearr_26380_26402[(5)] = ex__24259__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26352);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26379;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24257__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26403 = state_26352;
state_26352 = G__26403;
continue;
} else {
return ret_value__24257__auto__;
}
break;
}
});
cljs$core$async$state_machine__24256__auto__ = function(state_26352){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24256__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24256__auto____1.call(this,state_26352);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24256__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24256__auto____0;
cljs$core$async$state_machine__24256__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24256__auto____1;
return cljs$core$async$state_machine__24256__auto__;
})()
;})(switch__24255__auto__,c__24367__auto___26386,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__24369__auto__ = (function (){var statearr_26381 = f__24368__auto__.call(null);
(statearr_26381[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24367__auto___26386);

return statearr_26381;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24369__auto__);
});})(c__24367__auto___26386,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args26405 = [];
var len__21551__auto___26461 = arguments.length;
var i__21552__auto___26462 = (0);
while(true){
if((i__21552__auto___26462 < len__21551__auto___26461)){
args26405.push((arguments[i__21552__auto___26462]));

var G__26463 = (i__21552__auto___26462 + (1));
i__21552__auto___26462 = G__26463;
continue;
} else {
}
break;
}

var G__26407 = args26405.length;
switch (G__26407) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26405.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24367__auto___26465 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24367__auto___26465,out){
return (function (){
var f__24368__auto__ = (function (){var switch__24255__auto__ = ((function (c__24367__auto___26465,out){
return (function (state_26437){
var state_val_26438 = (state_26437[(1)]);
if((state_val_26438 === (7))){
var inst_26416 = (state_26437[(7)]);
var inst_26417 = (state_26437[(8)]);
var inst_26416__$1 = (state_26437[(2)]);
var inst_26417__$1 = cljs.core.nth.call(null,inst_26416__$1,(0),null);
var inst_26418 = cljs.core.nth.call(null,inst_26416__$1,(1),null);
var inst_26419 = (inst_26417__$1 == null);
var state_26437__$1 = (function (){var statearr_26439 = state_26437;
(statearr_26439[(9)] = inst_26418);

(statearr_26439[(7)] = inst_26416__$1);

(statearr_26439[(8)] = inst_26417__$1);

return statearr_26439;
})();
if(cljs.core.truth_(inst_26419)){
var statearr_26440_26466 = state_26437__$1;
(statearr_26440_26466[(1)] = (8));

} else {
var statearr_26441_26467 = state_26437__$1;
(statearr_26441_26467[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26438 === (1))){
var inst_26408 = cljs.core.vec.call(null,chs);
var inst_26409 = inst_26408;
var state_26437__$1 = (function (){var statearr_26442 = state_26437;
(statearr_26442[(10)] = inst_26409);

return statearr_26442;
})();
var statearr_26443_26468 = state_26437__$1;
(statearr_26443_26468[(2)] = null);

(statearr_26443_26468[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26438 === (4))){
var inst_26409 = (state_26437[(10)]);
var state_26437__$1 = state_26437;
return cljs.core.async.ioc_alts_BANG_.call(null,state_26437__$1,(7),inst_26409);
} else {
if((state_val_26438 === (6))){
var inst_26433 = (state_26437[(2)]);
var state_26437__$1 = state_26437;
var statearr_26444_26469 = state_26437__$1;
(statearr_26444_26469[(2)] = inst_26433);

(statearr_26444_26469[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26438 === (3))){
var inst_26435 = (state_26437[(2)]);
var state_26437__$1 = state_26437;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26437__$1,inst_26435);
} else {
if((state_val_26438 === (2))){
var inst_26409 = (state_26437[(10)]);
var inst_26411 = cljs.core.count.call(null,inst_26409);
var inst_26412 = (inst_26411 > (0));
var state_26437__$1 = state_26437;
if(cljs.core.truth_(inst_26412)){
var statearr_26446_26470 = state_26437__$1;
(statearr_26446_26470[(1)] = (4));

} else {
var statearr_26447_26471 = state_26437__$1;
(statearr_26447_26471[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26438 === (11))){
var inst_26409 = (state_26437[(10)]);
var inst_26426 = (state_26437[(2)]);
var tmp26445 = inst_26409;
var inst_26409__$1 = tmp26445;
var state_26437__$1 = (function (){var statearr_26448 = state_26437;
(statearr_26448[(11)] = inst_26426);

(statearr_26448[(10)] = inst_26409__$1);

return statearr_26448;
})();
var statearr_26449_26472 = state_26437__$1;
(statearr_26449_26472[(2)] = null);

(statearr_26449_26472[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26438 === (9))){
var inst_26417 = (state_26437[(8)]);
var state_26437__$1 = state_26437;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26437__$1,(11),out,inst_26417);
} else {
if((state_val_26438 === (5))){
var inst_26431 = cljs.core.async.close_BANG_.call(null,out);
var state_26437__$1 = state_26437;
var statearr_26450_26473 = state_26437__$1;
(statearr_26450_26473[(2)] = inst_26431);

(statearr_26450_26473[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26438 === (10))){
var inst_26429 = (state_26437[(2)]);
var state_26437__$1 = state_26437;
var statearr_26451_26474 = state_26437__$1;
(statearr_26451_26474[(2)] = inst_26429);

(statearr_26451_26474[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26438 === (8))){
var inst_26418 = (state_26437[(9)]);
var inst_26416 = (state_26437[(7)]);
var inst_26409 = (state_26437[(10)]);
var inst_26417 = (state_26437[(8)]);
var inst_26421 = (function (){var cs = inst_26409;
var vec__26414 = inst_26416;
var v = inst_26417;
var c = inst_26418;
return ((function (cs,vec__26414,v,c,inst_26418,inst_26416,inst_26409,inst_26417,state_val_26438,c__24367__auto___26465,out){
return (function (p1__26404_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__26404_SHARP_);
});
;})(cs,vec__26414,v,c,inst_26418,inst_26416,inst_26409,inst_26417,state_val_26438,c__24367__auto___26465,out))
})();
var inst_26422 = cljs.core.filterv.call(null,inst_26421,inst_26409);
var inst_26409__$1 = inst_26422;
var state_26437__$1 = (function (){var statearr_26452 = state_26437;
(statearr_26452[(10)] = inst_26409__$1);

return statearr_26452;
})();
var statearr_26453_26475 = state_26437__$1;
(statearr_26453_26475[(2)] = null);

(statearr_26453_26475[(1)] = (2));


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
});})(c__24367__auto___26465,out))
;
return ((function (switch__24255__auto__,c__24367__auto___26465,out){
return (function() {
var cljs$core$async$state_machine__24256__auto__ = null;
var cljs$core$async$state_machine__24256__auto____0 = (function (){
var statearr_26457 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26457[(0)] = cljs$core$async$state_machine__24256__auto__);

(statearr_26457[(1)] = (1));

return statearr_26457;
});
var cljs$core$async$state_machine__24256__auto____1 = (function (state_26437){
while(true){
var ret_value__24257__auto__ = (function (){try{while(true){
var result__24258__auto__ = switch__24255__auto__.call(null,state_26437);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24258__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24258__auto__;
}
break;
}
}catch (e26458){if((e26458 instanceof Object)){
var ex__24259__auto__ = e26458;
var statearr_26459_26476 = state_26437;
(statearr_26459_26476[(5)] = ex__24259__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26437);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26458;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24257__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26477 = state_26437;
state_26437 = G__26477;
continue;
} else {
return ret_value__24257__auto__;
}
break;
}
});
cljs$core$async$state_machine__24256__auto__ = function(state_26437){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24256__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24256__auto____1.call(this,state_26437);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24256__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24256__auto____0;
cljs$core$async$state_machine__24256__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24256__auto____1;
return cljs$core$async$state_machine__24256__auto__;
})()
;})(switch__24255__auto__,c__24367__auto___26465,out))
})();
var state__24369__auto__ = (function (){var statearr_26460 = f__24368__auto__.call(null);
(statearr_26460[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24367__auto___26465);

return statearr_26460;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24369__auto__);
});})(c__24367__auto___26465,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args26478 = [];
var len__21551__auto___26527 = arguments.length;
var i__21552__auto___26528 = (0);
while(true){
if((i__21552__auto___26528 < len__21551__auto___26527)){
args26478.push((arguments[i__21552__auto___26528]));

var G__26529 = (i__21552__auto___26528 + (1));
i__21552__auto___26528 = G__26529;
continue;
} else {
}
break;
}

var G__26480 = args26478.length;
switch (G__26480) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26478.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24367__auto___26531 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24367__auto___26531,out){
return (function (){
var f__24368__auto__ = (function (){var switch__24255__auto__ = ((function (c__24367__auto___26531,out){
return (function (state_26504){
var state_val_26505 = (state_26504[(1)]);
if((state_val_26505 === (7))){
var inst_26486 = (state_26504[(7)]);
var inst_26486__$1 = (state_26504[(2)]);
var inst_26487 = (inst_26486__$1 == null);
var inst_26488 = cljs.core.not.call(null,inst_26487);
var state_26504__$1 = (function (){var statearr_26506 = state_26504;
(statearr_26506[(7)] = inst_26486__$1);

return statearr_26506;
})();
if(inst_26488){
var statearr_26507_26532 = state_26504__$1;
(statearr_26507_26532[(1)] = (8));

} else {
var statearr_26508_26533 = state_26504__$1;
(statearr_26508_26533[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26505 === (1))){
var inst_26481 = (0);
var state_26504__$1 = (function (){var statearr_26509 = state_26504;
(statearr_26509[(8)] = inst_26481);

return statearr_26509;
})();
var statearr_26510_26534 = state_26504__$1;
(statearr_26510_26534[(2)] = null);

(statearr_26510_26534[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26505 === (4))){
var state_26504__$1 = state_26504;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26504__$1,(7),ch);
} else {
if((state_val_26505 === (6))){
var inst_26499 = (state_26504[(2)]);
var state_26504__$1 = state_26504;
var statearr_26511_26535 = state_26504__$1;
(statearr_26511_26535[(2)] = inst_26499);

(statearr_26511_26535[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26505 === (3))){
var inst_26501 = (state_26504[(2)]);
var inst_26502 = cljs.core.async.close_BANG_.call(null,out);
var state_26504__$1 = (function (){var statearr_26512 = state_26504;
(statearr_26512[(9)] = inst_26501);

return statearr_26512;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26504__$1,inst_26502);
} else {
if((state_val_26505 === (2))){
var inst_26481 = (state_26504[(8)]);
var inst_26483 = (inst_26481 < n);
var state_26504__$1 = state_26504;
if(cljs.core.truth_(inst_26483)){
var statearr_26513_26536 = state_26504__$1;
(statearr_26513_26536[(1)] = (4));

} else {
var statearr_26514_26537 = state_26504__$1;
(statearr_26514_26537[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26505 === (11))){
var inst_26481 = (state_26504[(8)]);
var inst_26491 = (state_26504[(2)]);
var inst_26492 = (inst_26481 + (1));
var inst_26481__$1 = inst_26492;
var state_26504__$1 = (function (){var statearr_26515 = state_26504;
(statearr_26515[(8)] = inst_26481__$1);

(statearr_26515[(10)] = inst_26491);

return statearr_26515;
})();
var statearr_26516_26538 = state_26504__$1;
(statearr_26516_26538[(2)] = null);

(statearr_26516_26538[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26505 === (9))){
var state_26504__$1 = state_26504;
var statearr_26517_26539 = state_26504__$1;
(statearr_26517_26539[(2)] = null);

(statearr_26517_26539[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26505 === (5))){
var state_26504__$1 = state_26504;
var statearr_26518_26540 = state_26504__$1;
(statearr_26518_26540[(2)] = null);

(statearr_26518_26540[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26505 === (10))){
var inst_26496 = (state_26504[(2)]);
var state_26504__$1 = state_26504;
var statearr_26519_26541 = state_26504__$1;
(statearr_26519_26541[(2)] = inst_26496);

(statearr_26519_26541[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26505 === (8))){
var inst_26486 = (state_26504[(7)]);
var state_26504__$1 = state_26504;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26504__$1,(11),out,inst_26486);
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
});})(c__24367__auto___26531,out))
;
return ((function (switch__24255__auto__,c__24367__auto___26531,out){
return (function() {
var cljs$core$async$state_machine__24256__auto__ = null;
var cljs$core$async$state_machine__24256__auto____0 = (function (){
var statearr_26523 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26523[(0)] = cljs$core$async$state_machine__24256__auto__);

(statearr_26523[(1)] = (1));

return statearr_26523;
});
var cljs$core$async$state_machine__24256__auto____1 = (function (state_26504){
while(true){
var ret_value__24257__auto__ = (function (){try{while(true){
var result__24258__auto__ = switch__24255__auto__.call(null,state_26504);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24258__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24258__auto__;
}
break;
}
}catch (e26524){if((e26524 instanceof Object)){
var ex__24259__auto__ = e26524;
var statearr_26525_26542 = state_26504;
(statearr_26525_26542[(5)] = ex__24259__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26504);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26524;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24257__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26543 = state_26504;
state_26504 = G__26543;
continue;
} else {
return ret_value__24257__auto__;
}
break;
}
});
cljs$core$async$state_machine__24256__auto__ = function(state_26504){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24256__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24256__auto____1.call(this,state_26504);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24256__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24256__auto____0;
cljs$core$async$state_machine__24256__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24256__auto____1;
return cljs$core$async$state_machine__24256__auto__;
})()
;})(switch__24255__auto__,c__24367__auto___26531,out))
})();
var state__24369__auto__ = (function (){var statearr_26526 = f__24368__auto__.call(null);
(statearr_26526[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24367__auto___26531);

return statearr_26526;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24369__auto__);
});})(c__24367__auto___26531,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async26551 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26551 = (function (map_LT_,f,ch,meta26552){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta26552 = meta26552;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26551.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26553,meta26552__$1){
var self__ = this;
var _26553__$1 = this;
return (new cljs.core.async.t_cljs$core$async26551(self__.map_LT_,self__.f,self__.ch,meta26552__$1));
});

cljs.core.async.t_cljs$core$async26551.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26553){
var self__ = this;
var _26553__$1 = this;
return self__.meta26552;
});

cljs.core.async.t_cljs$core$async26551.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async26551.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26551.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26551.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async26551.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async26554 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26554 = (function (map_LT_,f,ch,meta26552,_,fn1,meta26555){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta26552 = meta26552;
this._ = _;
this.fn1 = fn1;
this.meta26555 = meta26555;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26554.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_26556,meta26555__$1){
var self__ = this;
var _26556__$1 = this;
return (new cljs.core.async.t_cljs$core$async26554(self__.map_LT_,self__.f,self__.ch,self__.meta26552,self__._,self__.fn1,meta26555__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async26554.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_26556){
var self__ = this;
var _26556__$1 = this;
return self__.meta26555;
});})(___$1))
;

cljs.core.async.t_cljs$core$async26554.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async26554.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async26554.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async26554.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__26544_SHARP_){
return f1.call(null,(((p1__26544_SHARP_ == null))?null:self__.f.call(null,p1__26544_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async26554.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26552","meta26552",-786871888,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async26551","cljs.core.async/t_cljs$core$async26551",359345110,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta26555","meta26555",2101342023,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async26554.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26554.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26554";

cljs.core.async.t_cljs$core$async26554.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__21091__auto__,writer__21092__auto__,opt__21093__auto__){
return cljs.core._write.call(null,writer__21092__auto__,"cljs.core.async/t_cljs$core$async26554");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async26554 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async26554(map_LT___$1,f__$1,ch__$1,meta26552__$1,___$2,fn1__$1,meta26555){
return (new cljs.core.async.t_cljs$core$async26554(map_LT___$1,f__$1,ch__$1,meta26552__$1,___$2,fn1__$1,meta26555));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async26554(self__.map_LT_,self__.f,self__.ch,self__.meta26552,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__20481__auto__ = ret;
if(cljs.core.truth_(and__20481__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__20481__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async26551.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async26551.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async26551.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26552","meta26552",-786871888,null)], null);
});

cljs.core.async.t_cljs$core$async26551.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26551.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26551";

cljs.core.async.t_cljs$core$async26551.cljs$lang$ctorPrWriter = (function (this__21091__auto__,writer__21092__auto__,opt__21093__auto__){
return cljs.core._write.call(null,writer__21092__auto__,"cljs.core.async/t_cljs$core$async26551");
});

cljs.core.async.__GT_t_cljs$core$async26551 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async26551(map_LT___$1,f__$1,ch__$1,meta26552){
return (new cljs.core.async.t_cljs$core$async26551(map_LT___$1,f__$1,ch__$1,meta26552));
});

}

return (new cljs.core.async.t_cljs$core$async26551(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async26560 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26560 = (function (map_GT_,f,ch,meta26561){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta26561 = meta26561;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26560.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26562,meta26561__$1){
var self__ = this;
var _26562__$1 = this;
return (new cljs.core.async.t_cljs$core$async26560(self__.map_GT_,self__.f,self__.ch,meta26561__$1));
});

cljs.core.async.t_cljs$core$async26560.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26562){
var self__ = this;
var _26562__$1 = this;
return self__.meta26561;
});

cljs.core.async.t_cljs$core$async26560.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async26560.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26560.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async26560.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async26560.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async26560.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async26560.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26561","meta26561",-1366486332,null)], null);
});

cljs.core.async.t_cljs$core$async26560.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26560.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26560";

cljs.core.async.t_cljs$core$async26560.cljs$lang$ctorPrWriter = (function (this__21091__auto__,writer__21092__auto__,opt__21093__auto__){
return cljs.core._write.call(null,writer__21092__auto__,"cljs.core.async/t_cljs$core$async26560");
});

cljs.core.async.__GT_t_cljs$core$async26560 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async26560(map_GT___$1,f__$1,ch__$1,meta26561){
return (new cljs.core.async.t_cljs$core$async26560(map_GT___$1,f__$1,ch__$1,meta26561));
});

}

return (new cljs.core.async.t_cljs$core$async26560(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async26566 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26566 = (function (filter_GT_,p,ch,meta26567){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta26567 = meta26567;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26566.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26568,meta26567__$1){
var self__ = this;
var _26568__$1 = this;
return (new cljs.core.async.t_cljs$core$async26566(self__.filter_GT_,self__.p,self__.ch,meta26567__$1));
});

cljs.core.async.t_cljs$core$async26566.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26568){
var self__ = this;
var _26568__$1 = this;
return self__.meta26567;
});

cljs.core.async.t_cljs$core$async26566.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async26566.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26566.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26566.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async26566.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async26566.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async26566.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async26566.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26567","meta26567",-1525770078,null)], null);
});

cljs.core.async.t_cljs$core$async26566.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26566.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26566";

cljs.core.async.t_cljs$core$async26566.cljs$lang$ctorPrWriter = (function (this__21091__auto__,writer__21092__auto__,opt__21093__auto__){
return cljs.core._write.call(null,writer__21092__auto__,"cljs.core.async/t_cljs$core$async26566");
});

cljs.core.async.__GT_t_cljs$core$async26566 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async26566(filter_GT___$1,p__$1,ch__$1,meta26567){
return (new cljs.core.async.t_cljs$core$async26566(filter_GT___$1,p__$1,ch__$1,meta26567));
});

}

return (new cljs.core.async.t_cljs$core$async26566(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args26569 = [];
var len__21551__auto___26613 = arguments.length;
var i__21552__auto___26614 = (0);
while(true){
if((i__21552__auto___26614 < len__21551__auto___26613)){
args26569.push((arguments[i__21552__auto___26614]));

var G__26615 = (i__21552__auto___26614 + (1));
i__21552__auto___26614 = G__26615;
continue;
} else {
}
break;
}

var G__26571 = args26569.length;
switch (G__26571) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26569.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24367__auto___26617 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24367__auto___26617,out){
return (function (){
var f__24368__auto__ = (function (){var switch__24255__auto__ = ((function (c__24367__auto___26617,out){
return (function (state_26592){
var state_val_26593 = (state_26592[(1)]);
if((state_val_26593 === (7))){
var inst_26588 = (state_26592[(2)]);
var state_26592__$1 = state_26592;
var statearr_26594_26618 = state_26592__$1;
(statearr_26594_26618[(2)] = inst_26588);

(statearr_26594_26618[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26593 === (1))){
var state_26592__$1 = state_26592;
var statearr_26595_26619 = state_26592__$1;
(statearr_26595_26619[(2)] = null);

(statearr_26595_26619[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26593 === (4))){
var inst_26574 = (state_26592[(7)]);
var inst_26574__$1 = (state_26592[(2)]);
var inst_26575 = (inst_26574__$1 == null);
var state_26592__$1 = (function (){var statearr_26596 = state_26592;
(statearr_26596[(7)] = inst_26574__$1);

return statearr_26596;
})();
if(cljs.core.truth_(inst_26575)){
var statearr_26597_26620 = state_26592__$1;
(statearr_26597_26620[(1)] = (5));

} else {
var statearr_26598_26621 = state_26592__$1;
(statearr_26598_26621[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26593 === (6))){
var inst_26574 = (state_26592[(7)]);
var inst_26579 = p.call(null,inst_26574);
var state_26592__$1 = state_26592;
if(cljs.core.truth_(inst_26579)){
var statearr_26599_26622 = state_26592__$1;
(statearr_26599_26622[(1)] = (8));

} else {
var statearr_26600_26623 = state_26592__$1;
(statearr_26600_26623[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26593 === (3))){
var inst_26590 = (state_26592[(2)]);
var state_26592__$1 = state_26592;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26592__$1,inst_26590);
} else {
if((state_val_26593 === (2))){
var state_26592__$1 = state_26592;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26592__$1,(4),ch);
} else {
if((state_val_26593 === (11))){
var inst_26582 = (state_26592[(2)]);
var state_26592__$1 = state_26592;
var statearr_26601_26624 = state_26592__$1;
(statearr_26601_26624[(2)] = inst_26582);

(statearr_26601_26624[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26593 === (9))){
var state_26592__$1 = state_26592;
var statearr_26602_26625 = state_26592__$1;
(statearr_26602_26625[(2)] = null);

(statearr_26602_26625[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26593 === (5))){
var inst_26577 = cljs.core.async.close_BANG_.call(null,out);
var state_26592__$1 = state_26592;
var statearr_26603_26626 = state_26592__$1;
(statearr_26603_26626[(2)] = inst_26577);

(statearr_26603_26626[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26593 === (10))){
var inst_26585 = (state_26592[(2)]);
var state_26592__$1 = (function (){var statearr_26604 = state_26592;
(statearr_26604[(8)] = inst_26585);

return statearr_26604;
})();
var statearr_26605_26627 = state_26592__$1;
(statearr_26605_26627[(2)] = null);

(statearr_26605_26627[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26593 === (8))){
var inst_26574 = (state_26592[(7)]);
var state_26592__$1 = state_26592;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26592__$1,(11),out,inst_26574);
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
});})(c__24367__auto___26617,out))
;
return ((function (switch__24255__auto__,c__24367__auto___26617,out){
return (function() {
var cljs$core$async$state_machine__24256__auto__ = null;
var cljs$core$async$state_machine__24256__auto____0 = (function (){
var statearr_26609 = [null,null,null,null,null,null,null,null,null];
(statearr_26609[(0)] = cljs$core$async$state_machine__24256__auto__);

(statearr_26609[(1)] = (1));

return statearr_26609;
});
var cljs$core$async$state_machine__24256__auto____1 = (function (state_26592){
while(true){
var ret_value__24257__auto__ = (function (){try{while(true){
var result__24258__auto__ = switch__24255__auto__.call(null,state_26592);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24258__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24258__auto__;
}
break;
}
}catch (e26610){if((e26610 instanceof Object)){
var ex__24259__auto__ = e26610;
var statearr_26611_26628 = state_26592;
(statearr_26611_26628[(5)] = ex__24259__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26592);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26610;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24257__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26629 = state_26592;
state_26592 = G__26629;
continue;
} else {
return ret_value__24257__auto__;
}
break;
}
});
cljs$core$async$state_machine__24256__auto__ = function(state_26592){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24256__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24256__auto____1.call(this,state_26592);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24256__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24256__auto____0;
cljs$core$async$state_machine__24256__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24256__auto____1;
return cljs$core$async$state_machine__24256__auto__;
})()
;})(switch__24255__auto__,c__24367__auto___26617,out))
})();
var state__24369__auto__ = (function (){var statearr_26612 = f__24368__auto__.call(null);
(statearr_26612[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24367__auto___26617);

return statearr_26612;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24369__auto__);
});})(c__24367__auto___26617,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args26630 = [];
var len__21551__auto___26633 = arguments.length;
var i__21552__auto___26634 = (0);
while(true){
if((i__21552__auto___26634 < len__21551__auto___26633)){
args26630.push((arguments[i__21552__auto___26634]));

var G__26635 = (i__21552__auto___26634 + (1));
i__21552__auto___26634 = G__26635;
continue;
} else {
}
break;
}

var G__26632 = args26630.length;
switch (G__26632) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26630.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__24367__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24367__auto__){
return (function (){
var f__24368__auto__ = (function (){var switch__24255__auto__ = ((function (c__24367__auto__){
return (function (state_26802){
var state_val_26803 = (state_26802[(1)]);
if((state_val_26803 === (7))){
var inst_26798 = (state_26802[(2)]);
var state_26802__$1 = state_26802;
var statearr_26804_26845 = state_26802__$1;
(statearr_26804_26845[(2)] = inst_26798);

(statearr_26804_26845[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26803 === (20))){
var inst_26768 = (state_26802[(7)]);
var inst_26779 = (state_26802[(2)]);
var inst_26780 = cljs.core.next.call(null,inst_26768);
var inst_26754 = inst_26780;
var inst_26755 = null;
var inst_26756 = (0);
var inst_26757 = (0);
var state_26802__$1 = (function (){var statearr_26805 = state_26802;
(statearr_26805[(8)] = inst_26754);

(statearr_26805[(9)] = inst_26755);

(statearr_26805[(10)] = inst_26756);

(statearr_26805[(11)] = inst_26757);

(statearr_26805[(12)] = inst_26779);

return statearr_26805;
})();
var statearr_26806_26846 = state_26802__$1;
(statearr_26806_26846[(2)] = null);

(statearr_26806_26846[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26803 === (1))){
var state_26802__$1 = state_26802;
var statearr_26807_26847 = state_26802__$1;
(statearr_26807_26847[(2)] = null);

(statearr_26807_26847[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26803 === (4))){
var inst_26743 = (state_26802[(13)]);
var inst_26743__$1 = (state_26802[(2)]);
var inst_26744 = (inst_26743__$1 == null);
var state_26802__$1 = (function (){var statearr_26808 = state_26802;
(statearr_26808[(13)] = inst_26743__$1);

return statearr_26808;
})();
if(cljs.core.truth_(inst_26744)){
var statearr_26809_26848 = state_26802__$1;
(statearr_26809_26848[(1)] = (5));

} else {
var statearr_26810_26849 = state_26802__$1;
(statearr_26810_26849[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26803 === (15))){
var state_26802__$1 = state_26802;
var statearr_26814_26850 = state_26802__$1;
(statearr_26814_26850[(2)] = null);

(statearr_26814_26850[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26803 === (21))){
var state_26802__$1 = state_26802;
var statearr_26815_26851 = state_26802__$1;
(statearr_26815_26851[(2)] = null);

(statearr_26815_26851[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26803 === (13))){
var inst_26754 = (state_26802[(8)]);
var inst_26755 = (state_26802[(9)]);
var inst_26756 = (state_26802[(10)]);
var inst_26757 = (state_26802[(11)]);
var inst_26764 = (state_26802[(2)]);
var inst_26765 = (inst_26757 + (1));
var tmp26811 = inst_26754;
var tmp26812 = inst_26755;
var tmp26813 = inst_26756;
var inst_26754__$1 = tmp26811;
var inst_26755__$1 = tmp26812;
var inst_26756__$1 = tmp26813;
var inst_26757__$1 = inst_26765;
var state_26802__$1 = (function (){var statearr_26816 = state_26802;
(statearr_26816[(8)] = inst_26754__$1);

(statearr_26816[(9)] = inst_26755__$1);

(statearr_26816[(14)] = inst_26764);

(statearr_26816[(10)] = inst_26756__$1);

(statearr_26816[(11)] = inst_26757__$1);

return statearr_26816;
})();
var statearr_26817_26852 = state_26802__$1;
(statearr_26817_26852[(2)] = null);

(statearr_26817_26852[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26803 === (22))){
var state_26802__$1 = state_26802;
var statearr_26818_26853 = state_26802__$1;
(statearr_26818_26853[(2)] = null);

(statearr_26818_26853[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26803 === (6))){
var inst_26743 = (state_26802[(13)]);
var inst_26752 = f.call(null,inst_26743);
var inst_26753 = cljs.core.seq.call(null,inst_26752);
var inst_26754 = inst_26753;
var inst_26755 = null;
var inst_26756 = (0);
var inst_26757 = (0);
var state_26802__$1 = (function (){var statearr_26819 = state_26802;
(statearr_26819[(8)] = inst_26754);

(statearr_26819[(9)] = inst_26755);

(statearr_26819[(10)] = inst_26756);

(statearr_26819[(11)] = inst_26757);

return statearr_26819;
})();
var statearr_26820_26854 = state_26802__$1;
(statearr_26820_26854[(2)] = null);

(statearr_26820_26854[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26803 === (17))){
var inst_26768 = (state_26802[(7)]);
var inst_26772 = cljs.core.chunk_first.call(null,inst_26768);
var inst_26773 = cljs.core.chunk_rest.call(null,inst_26768);
var inst_26774 = cljs.core.count.call(null,inst_26772);
var inst_26754 = inst_26773;
var inst_26755 = inst_26772;
var inst_26756 = inst_26774;
var inst_26757 = (0);
var state_26802__$1 = (function (){var statearr_26821 = state_26802;
(statearr_26821[(8)] = inst_26754);

(statearr_26821[(9)] = inst_26755);

(statearr_26821[(10)] = inst_26756);

(statearr_26821[(11)] = inst_26757);

return statearr_26821;
})();
var statearr_26822_26855 = state_26802__$1;
(statearr_26822_26855[(2)] = null);

(statearr_26822_26855[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26803 === (3))){
var inst_26800 = (state_26802[(2)]);
var state_26802__$1 = state_26802;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26802__$1,inst_26800);
} else {
if((state_val_26803 === (12))){
var inst_26788 = (state_26802[(2)]);
var state_26802__$1 = state_26802;
var statearr_26823_26856 = state_26802__$1;
(statearr_26823_26856[(2)] = inst_26788);

(statearr_26823_26856[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26803 === (2))){
var state_26802__$1 = state_26802;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26802__$1,(4),in$);
} else {
if((state_val_26803 === (23))){
var inst_26796 = (state_26802[(2)]);
var state_26802__$1 = state_26802;
var statearr_26824_26857 = state_26802__$1;
(statearr_26824_26857[(2)] = inst_26796);

(statearr_26824_26857[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26803 === (19))){
var inst_26783 = (state_26802[(2)]);
var state_26802__$1 = state_26802;
var statearr_26825_26858 = state_26802__$1;
(statearr_26825_26858[(2)] = inst_26783);

(statearr_26825_26858[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26803 === (11))){
var inst_26754 = (state_26802[(8)]);
var inst_26768 = (state_26802[(7)]);
var inst_26768__$1 = cljs.core.seq.call(null,inst_26754);
var state_26802__$1 = (function (){var statearr_26826 = state_26802;
(statearr_26826[(7)] = inst_26768__$1);

return statearr_26826;
})();
if(inst_26768__$1){
var statearr_26827_26859 = state_26802__$1;
(statearr_26827_26859[(1)] = (14));

} else {
var statearr_26828_26860 = state_26802__$1;
(statearr_26828_26860[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26803 === (9))){
var inst_26790 = (state_26802[(2)]);
var inst_26791 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_26802__$1 = (function (){var statearr_26829 = state_26802;
(statearr_26829[(15)] = inst_26790);

return statearr_26829;
})();
if(cljs.core.truth_(inst_26791)){
var statearr_26830_26861 = state_26802__$1;
(statearr_26830_26861[(1)] = (21));

} else {
var statearr_26831_26862 = state_26802__$1;
(statearr_26831_26862[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26803 === (5))){
var inst_26746 = cljs.core.async.close_BANG_.call(null,out);
var state_26802__$1 = state_26802;
var statearr_26832_26863 = state_26802__$1;
(statearr_26832_26863[(2)] = inst_26746);

(statearr_26832_26863[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26803 === (14))){
var inst_26768 = (state_26802[(7)]);
var inst_26770 = cljs.core.chunked_seq_QMARK_.call(null,inst_26768);
var state_26802__$1 = state_26802;
if(inst_26770){
var statearr_26833_26864 = state_26802__$1;
(statearr_26833_26864[(1)] = (17));

} else {
var statearr_26834_26865 = state_26802__$1;
(statearr_26834_26865[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26803 === (16))){
var inst_26786 = (state_26802[(2)]);
var state_26802__$1 = state_26802;
var statearr_26835_26866 = state_26802__$1;
(statearr_26835_26866[(2)] = inst_26786);

(statearr_26835_26866[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26803 === (10))){
var inst_26755 = (state_26802[(9)]);
var inst_26757 = (state_26802[(11)]);
var inst_26762 = cljs.core._nth.call(null,inst_26755,inst_26757);
var state_26802__$1 = state_26802;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26802__$1,(13),out,inst_26762);
} else {
if((state_val_26803 === (18))){
var inst_26768 = (state_26802[(7)]);
var inst_26777 = cljs.core.first.call(null,inst_26768);
var state_26802__$1 = state_26802;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26802__$1,(20),out,inst_26777);
} else {
if((state_val_26803 === (8))){
var inst_26756 = (state_26802[(10)]);
var inst_26757 = (state_26802[(11)]);
var inst_26759 = (inst_26757 < inst_26756);
var inst_26760 = inst_26759;
var state_26802__$1 = state_26802;
if(cljs.core.truth_(inst_26760)){
var statearr_26836_26867 = state_26802__$1;
(statearr_26836_26867[(1)] = (10));

} else {
var statearr_26837_26868 = state_26802__$1;
(statearr_26837_26868[(1)] = (11));

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
});})(c__24367__auto__))
;
return ((function (switch__24255__auto__,c__24367__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__24256__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__24256__auto____0 = (function (){
var statearr_26841 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26841[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__24256__auto__);

(statearr_26841[(1)] = (1));

return statearr_26841;
});
var cljs$core$async$mapcat_STAR__$_state_machine__24256__auto____1 = (function (state_26802){
while(true){
var ret_value__24257__auto__ = (function (){try{while(true){
var result__24258__auto__ = switch__24255__auto__.call(null,state_26802);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24258__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24258__auto__;
}
break;
}
}catch (e26842){if((e26842 instanceof Object)){
var ex__24259__auto__ = e26842;
var statearr_26843_26869 = state_26802;
(statearr_26843_26869[(5)] = ex__24259__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26802);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26842;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24257__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26870 = state_26802;
state_26802 = G__26870;
continue;
} else {
return ret_value__24257__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__24256__auto__ = function(state_26802){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__24256__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__24256__auto____1.call(this,state_26802);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__24256__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__24256__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__24256__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__24256__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__24256__auto__;
})()
;})(switch__24255__auto__,c__24367__auto__))
})();
var state__24369__auto__ = (function (){var statearr_26844 = f__24368__auto__.call(null);
(statearr_26844[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24367__auto__);

return statearr_26844;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24369__auto__);
});})(c__24367__auto__))
);

return c__24367__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args26871 = [];
var len__21551__auto___26874 = arguments.length;
var i__21552__auto___26875 = (0);
while(true){
if((i__21552__auto___26875 < len__21551__auto___26874)){
args26871.push((arguments[i__21552__auto___26875]));

var G__26876 = (i__21552__auto___26875 + (1));
i__21552__auto___26875 = G__26876;
continue;
} else {
}
break;
}

var G__26873 = args26871.length;
switch (G__26873) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26871.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args26878 = [];
var len__21551__auto___26881 = arguments.length;
var i__21552__auto___26882 = (0);
while(true){
if((i__21552__auto___26882 < len__21551__auto___26881)){
args26878.push((arguments[i__21552__auto___26882]));

var G__26883 = (i__21552__auto___26882 + (1));
i__21552__auto___26882 = G__26883;
continue;
} else {
}
break;
}

var G__26880 = args26878.length;
switch (G__26880) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26878.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args26885 = [];
var len__21551__auto___26936 = arguments.length;
var i__21552__auto___26937 = (0);
while(true){
if((i__21552__auto___26937 < len__21551__auto___26936)){
args26885.push((arguments[i__21552__auto___26937]));

var G__26938 = (i__21552__auto___26937 + (1));
i__21552__auto___26937 = G__26938;
continue;
} else {
}
break;
}

var G__26887 = args26885.length;
switch (G__26887) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26885.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24367__auto___26940 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24367__auto___26940,out){
return (function (){
var f__24368__auto__ = (function (){var switch__24255__auto__ = ((function (c__24367__auto___26940,out){
return (function (state_26911){
var state_val_26912 = (state_26911[(1)]);
if((state_val_26912 === (7))){
var inst_26906 = (state_26911[(2)]);
var state_26911__$1 = state_26911;
var statearr_26913_26941 = state_26911__$1;
(statearr_26913_26941[(2)] = inst_26906);

(statearr_26913_26941[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26912 === (1))){
var inst_26888 = null;
var state_26911__$1 = (function (){var statearr_26914 = state_26911;
(statearr_26914[(7)] = inst_26888);

return statearr_26914;
})();
var statearr_26915_26942 = state_26911__$1;
(statearr_26915_26942[(2)] = null);

(statearr_26915_26942[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26912 === (4))){
var inst_26891 = (state_26911[(8)]);
var inst_26891__$1 = (state_26911[(2)]);
var inst_26892 = (inst_26891__$1 == null);
var inst_26893 = cljs.core.not.call(null,inst_26892);
var state_26911__$1 = (function (){var statearr_26916 = state_26911;
(statearr_26916[(8)] = inst_26891__$1);

return statearr_26916;
})();
if(inst_26893){
var statearr_26917_26943 = state_26911__$1;
(statearr_26917_26943[(1)] = (5));

} else {
var statearr_26918_26944 = state_26911__$1;
(statearr_26918_26944[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26912 === (6))){
var state_26911__$1 = state_26911;
var statearr_26919_26945 = state_26911__$1;
(statearr_26919_26945[(2)] = null);

(statearr_26919_26945[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26912 === (3))){
var inst_26908 = (state_26911[(2)]);
var inst_26909 = cljs.core.async.close_BANG_.call(null,out);
var state_26911__$1 = (function (){var statearr_26920 = state_26911;
(statearr_26920[(9)] = inst_26908);

return statearr_26920;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26911__$1,inst_26909);
} else {
if((state_val_26912 === (2))){
var state_26911__$1 = state_26911;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26911__$1,(4),ch);
} else {
if((state_val_26912 === (11))){
var inst_26891 = (state_26911[(8)]);
var inst_26900 = (state_26911[(2)]);
var inst_26888 = inst_26891;
var state_26911__$1 = (function (){var statearr_26921 = state_26911;
(statearr_26921[(7)] = inst_26888);

(statearr_26921[(10)] = inst_26900);

return statearr_26921;
})();
var statearr_26922_26946 = state_26911__$1;
(statearr_26922_26946[(2)] = null);

(statearr_26922_26946[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26912 === (9))){
var inst_26891 = (state_26911[(8)]);
var state_26911__$1 = state_26911;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26911__$1,(11),out,inst_26891);
} else {
if((state_val_26912 === (5))){
var inst_26888 = (state_26911[(7)]);
var inst_26891 = (state_26911[(8)]);
var inst_26895 = cljs.core._EQ_.call(null,inst_26891,inst_26888);
var state_26911__$1 = state_26911;
if(inst_26895){
var statearr_26924_26947 = state_26911__$1;
(statearr_26924_26947[(1)] = (8));

} else {
var statearr_26925_26948 = state_26911__$1;
(statearr_26925_26948[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26912 === (10))){
var inst_26903 = (state_26911[(2)]);
var state_26911__$1 = state_26911;
var statearr_26926_26949 = state_26911__$1;
(statearr_26926_26949[(2)] = inst_26903);

(statearr_26926_26949[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26912 === (8))){
var inst_26888 = (state_26911[(7)]);
var tmp26923 = inst_26888;
var inst_26888__$1 = tmp26923;
var state_26911__$1 = (function (){var statearr_26927 = state_26911;
(statearr_26927[(7)] = inst_26888__$1);

return statearr_26927;
})();
var statearr_26928_26950 = state_26911__$1;
(statearr_26928_26950[(2)] = null);

(statearr_26928_26950[(1)] = (2));


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
});})(c__24367__auto___26940,out))
;
return ((function (switch__24255__auto__,c__24367__auto___26940,out){
return (function() {
var cljs$core$async$state_machine__24256__auto__ = null;
var cljs$core$async$state_machine__24256__auto____0 = (function (){
var statearr_26932 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26932[(0)] = cljs$core$async$state_machine__24256__auto__);

(statearr_26932[(1)] = (1));

return statearr_26932;
});
var cljs$core$async$state_machine__24256__auto____1 = (function (state_26911){
while(true){
var ret_value__24257__auto__ = (function (){try{while(true){
var result__24258__auto__ = switch__24255__auto__.call(null,state_26911);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24258__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24258__auto__;
}
break;
}
}catch (e26933){if((e26933 instanceof Object)){
var ex__24259__auto__ = e26933;
var statearr_26934_26951 = state_26911;
(statearr_26934_26951[(5)] = ex__24259__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26911);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26933;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24257__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26952 = state_26911;
state_26911 = G__26952;
continue;
} else {
return ret_value__24257__auto__;
}
break;
}
});
cljs$core$async$state_machine__24256__auto__ = function(state_26911){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24256__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24256__auto____1.call(this,state_26911);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24256__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24256__auto____0;
cljs$core$async$state_machine__24256__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24256__auto____1;
return cljs$core$async$state_machine__24256__auto__;
})()
;})(switch__24255__auto__,c__24367__auto___26940,out))
})();
var state__24369__auto__ = (function (){var statearr_26935 = f__24368__auto__.call(null);
(statearr_26935[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24367__auto___26940);

return statearr_26935;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24369__auto__);
});})(c__24367__auto___26940,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args26953 = [];
var len__21551__auto___27023 = arguments.length;
var i__21552__auto___27024 = (0);
while(true){
if((i__21552__auto___27024 < len__21551__auto___27023)){
args26953.push((arguments[i__21552__auto___27024]));

var G__27025 = (i__21552__auto___27024 + (1));
i__21552__auto___27024 = G__27025;
continue;
} else {
}
break;
}

var G__26955 = args26953.length;
switch (G__26955) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26953.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24367__auto___27027 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24367__auto___27027,out){
return (function (){
var f__24368__auto__ = (function (){var switch__24255__auto__ = ((function (c__24367__auto___27027,out){
return (function (state_26993){
var state_val_26994 = (state_26993[(1)]);
if((state_val_26994 === (7))){
var inst_26989 = (state_26993[(2)]);
var state_26993__$1 = state_26993;
var statearr_26995_27028 = state_26993__$1;
(statearr_26995_27028[(2)] = inst_26989);

(statearr_26995_27028[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26994 === (1))){
var inst_26956 = (new Array(n));
var inst_26957 = inst_26956;
var inst_26958 = (0);
var state_26993__$1 = (function (){var statearr_26996 = state_26993;
(statearr_26996[(7)] = inst_26958);

(statearr_26996[(8)] = inst_26957);

return statearr_26996;
})();
var statearr_26997_27029 = state_26993__$1;
(statearr_26997_27029[(2)] = null);

(statearr_26997_27029[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26994 === (4))){
var inst_26961 = (state_26993[(9)]);
var inst_26961__$1 = (state_26993[(2)]);
var inst_26962 = (inst_26961__$1 == null);
var inst_26963 = cljs.core.not.call(null,inst_26962);
var state_26993__$1 = (function (){var statearr_26998 = state_26993;
(statearr_26998[(9)] = inst_26961__$1);

return statearr_26998;
})();
if(inst_26963){
var statearr_26999_27030 = state_26993__$1;
(statearr_26999_27030[(1)] = (5));

} else {
var statearr_27000_27031 = state_26993__$1;
(statearr_27000_27031[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26994 === (15))){
var inst_26983 = (state_26993[(2)]);
var state_26993__$1 = state_26993;
var statearr_27001_27032 = state_26993__$1;
(statearr_27001_27032[(2)] = inst_26983);

(statearr_27001_27032[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26994 === (13))){
var state_26993__$1 = state_26993;
var statearr_27002_27033 = state_26993__$1;
(statearr_27002_27033[(2)] = null);

(statearr_27002_27033[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26994 === (6))){
var inst_26958 = (state_26993[(7)]);
var inst_26979 = (inst_26958 > (0));
var state_26993__$1 = state_26993;
if(cljs.core.truth_(inst_26979)){
var statearr_27003_27034 = state_26993__$1;
(statearr_27003_27034[(1)] = (12));

} else {
var statearr_27004_27035 = state_26993__$1;
(statearr_27004_27035[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26994 === (3))){
var inst_26991 = (state_26993[(2)]);
var state_26993__$1 = state_26993;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26993__$1,inst_26991);
} else {
if((state_val_26994 === (12))){
var inst_26957 = (state_26993[(8)]);
var inst_26981 = cljs.core.vec.call(null,inst_26957);
var state_26993__$1 = state_26993;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26993__$1,(15),out,inst_26981);
} else {
if((state_val_26994 === (2))){
var state_26993__$1 = state_26993;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26993__$1,(4),ch);
} else {
if((state_val_26994 === (11))){
var inst_26973 = (state_26993[(2)]);
var inst_26974 = (new Array(n));
var inst_26957 = inst_26974;
var inst_26958 = (0);
var state_26993__$1 = (function (){var statearr_27005 = state_26993;
(statearr_27005[(7)] = inst_26958);

(statearr_27005[(10)] = inst_26973);

(statearr_27005[(8)] = inst_26957);

return statearr_27005;
})();
var statearr_27006_27036 = state_26993__$1;
(statearr_27006_27036[(2)] = null);

(statearr_27006_27036[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26994 === (9))){
var inst_26957 = (state_26993[(8)]);
var inst_26971 = cljs.core.vec.call(null,inst_26957);
var state_26993__$1 = state_26993;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26993__$1,(11),out,inst_26971);
} else {
if((state_val_26994 === (5))){
var inst_26958 = (state_26993[(7)]);
var inst_26966 = (state_26993[(11)]);
var inst_26957 = (state_26993[(8)]);
var inst_26961 = (state_26993[(9)]);
var inst_26965 = (inst_26957[inst_26958] = inst_26961);
var inst_26966__$1 = (inst_26958 + (1));
var inst_26967 = (inst_26966__$1 < n);
var state_26993__$1 = (function (){var statearr_27007 = state_26993;
(statearr_27007[(12)] = inst_26965);

(statearr_27007[(11)] = inst_26966__$1);

return statearr_27007;
})();
if(cljs.core.truth_(inst_26967)){
var statearr_27008_27037 = state_26993__$1;
(statearr_27008_27037[(1)] = (8));

} else {
var statearr_27009_27038 = state_26993__$1;
(statearr_27009_27038[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26994 === (14))){
var inst_26986 = (state_26993[(2)]);
var inst_26987 = cljs.core.async.close_BANG_.call(null,out);
var state_26993__$1 = (function (){var statearr_27011 = state_26993;
(statearr_27011[(13)] = inst_26986);

return statearr_27011;
})();
var statearr_27012_27039 = state_26993__$1;
(statearr_27012_27039[(2)] = inst_26987);

(statearr_27012_27039[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26994 === (10))){
var inst_26977 = (state_26993[(2)]);
var state_26993__$1 = state_26993;
var statearr_27013_27040 = state_26993__$1;
(statearr_27013_27040[(2)] = inst_26977);

(statearr_27013_27040[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26994 === (8))){
var inst_26966 = (state_26993[(11)]);
var inst_26957 = (state_26993[(8)]);
var tmp27010 = inst_26957;
var inst_26957__$1 = tmp27010;
var inst_26958 = inst_26966;
var state_26993__$1 = (function (){var statearr_27014 = state_26993;
(statearr_27014[(7)] = inst_26958);

(statearr_27014[(8)] = inst_26957__$1);

return statearr_27014;
})();
var statearr_27015_27041 = state_26993__$1;
(statearr_27015_27041[(2)] = null);

(statearr_27015_27041[(1)] = (2));


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
});})(c__24367__auto___27027,out))
;
return ((function (switch__24255__auto__,c__24367__auto___27027,out){
return (function() {
var cljs$core$async$state_machine__24256__auto__ = null;
var cljs$core$async$state_machine__24256__auto____0 = (function (){
var statearr_27019 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27019[(0)] = cljs$core$async$state_machine__24256__auto__);

(statearr_27019[(1)] = (1));

return statearr_27019;
});
var cljs$core$async$state_machine__24256__auto____1 = (function (state_26993){
while(true){
var ret_value__24257__auto__ = (function (){try{while(true){
var result__24258__auto__ = switch__24255__auto__.call(null,state_26993);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24258__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24258__auto__;
}
break;
}
}catch (e27020){if((e27020 instanceof Object)){
var ex__24259__auto__ = e27020;
var statearr_27021_27042 = state_26993;
(statearr_27021_27042[(5)] = ex__24259__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26993);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27020;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24257__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27043 = state_26993;
state_26993 = G__27043;
continue;
} else {
return ret_value__24257__auto__;
}
break;
}
});
cljs$core$async$state_machine__24256__auto__ = function(state_26993){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24256__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24256__auto____1.call(this,state_26993);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24256__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24256__auto____0;
cljs$core$async$state_machine__24256__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24256__auto____1;
return cljs$core$async$state_machine__24256__auto__;
})()
;})(switch__24255__auto__,c__24367__auto___27027,out))
})();
var state__24369__auto__ = (function (){var statearr_27022 = f__24368__auto__.call(null);
(statearr_27022[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24367__auto___27027);

return statearr_27022;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24369__auto__);
});})(c__24367__auto___27027,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args27044 = [];
var len__21551__auto___27118 = arguments.length;
var i__21552__auto___27119 = (0);
while(true){
if((i__21552__auto___27119 < len__21551__auto___27118)){
args27044.push((arguments[i__21552__auto___27119]));

var G__27120 = (i__21552__auto___27119 + (1));
i__21552__auto___27119 = G__27120;
continue;
} else {
}
break;
}

var G__27046 = args27044.length;
switch (G__27046) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27044.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24367__auto___27122 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24367__auto___27122,out){
return (function (){
var f__24368__auto__ = (function (){var switch__24255__auto__ = ((function (c__24367__auto___27122,out){
return (function (state_27088){
var state_val_27089 = (state_27088[(1)]);
if((state_val_27089 === (7))){
var inst_27084 = (state_27088[(2)]);
var state_27088__$1 = state_27088;
var statearr_27090_27123 = state_27088__$1;
(statearr_27090_27123[(2)] = inst_27084);

(statearr_27090_27123[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27089 === (1))){
var inst_27047 = [];
var inst_27048 = inst_27047;
var inst_27049 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_27088__$1 = (function (){var statearr_27091 = state_27088;
(statearr_27091[(7)] = inst_27048);

(statearr_27091[(8)] = inst_27049);

return statearr_27091;
})();
var statearr_27092_27124 = state_27088__$1;
(statearr_27092_27124[(2)] = null);

(statearr_27092_27124[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27089 === (4))){
var inst_27052 = (state_27088[(9)]);
var inst_27052__$1 = (state_27088[(2)]);
var inst_27053 = (inst_27052__$1 == null);
var inst_27054 = cljs.core.not.call(null,inst_27053);
var state_27088__$1 = (function (){var statearr_27093 = state_27088;
(statearr_27093[(9)] = inst_27052__$1);

return statearr_27093;
})();
if(inst_27054){
var statearr_27094_27125 = state_27088__$1;
(statearr_27094_27125[(1)] = (5));

} else {
var statearr_27095_27126 = state_27088__$1;
(statearr_27095_27126[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27089 === (15))){
var inst_27078 = (state_27088[(2)]);
var state_27088__$1 = state_27088;
var statearr_27096_27127 = state_27088__$1;
(statearr_27096_27127[(2)] = inst_27078);

(statearr_27096_27127[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27089 === (13))){
var state_27088__$1 = state_27088;
var statearr_27097_27128 = state_27088__$1;
(statearr_27097_27128[(2)] = null);

(statearr_27097_27128[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27089 === (6))){
var inst_27048 = (state_27088[(7)]);
var inst_27073 = inst_27048.length;
var inst_27074 = (inst_27073 > (0));
var state_27088__$1 = state_27088;
if(cljs.core.truth_(inst_27074)){
var statearr_27098_27129 = state_27088__$1;
(statearr_27098_27129[(1)] = (12));

} else {
var statearr_27099_27130 = state_27088__$1;
(statearr_27099_27130[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27089 === (3))){
var inst_27086 = (state_27088[(2)]);
var state_27088__$1 = state_27088;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27088__$1,inst_27086);
} else {
if((state_val_27089 === (12))){
var inst_27048 = (state_27088[(7)]);
var inst_27076 = cljs.core.vec.call(null,inst_27048);
var state_27088__$1 = state_27088;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27088__$1,(15),out,inst_27076);
} else {
if((state_val_27089 === (2))){
var state_27088__$1 = state_27088;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27088__$1,(4),ch);
} else {
if((state_val_27089 === (11))){
var inst_27052 = (state_27088[(9)]);
var inst_27056 = (state_27088[(10)]);
var inst_27066 = (state_27088[(2)]);
var inst_27067 = [];
var inst_27068 = inst_27067.push(inst_27052);
var inst_27048 = inst_27067;
var inst_27049 = inst_27056;
var state_27088__$1 = (function (){var statearr_27100 = state_27088;
(statearr_27100[(11)] = inst_27066);

(statearr_27100[(7)] = inst_27048);

(statearr_27100[(12)] = inst_27068);

(statearr_27100[(8)] = inst_27049);

return statearr_27100;
})();
var statearr_27101_27131 = state_27088__$1;
(statearr_27101_27131[(2)] = null);

(statearr_27101_27131[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27089 === (9))){
var inst_27048 = (state_27088[(7)]);
var inst_27064 = cljs.core.vec.call(null,inst_27048);
var state_27088__$1 = state_27088;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27088__$1,(11),out,inst_27064);
} else {
if((state_val_27089 === (5))){
var inst_27052 = (state_27088[(9)]);
var inst_27056 = (state_27088[(10)]);
var inst_27049 = (state_27088[(8)]);
var inst_27056__$1 = f.call(null,inst_27052);
var inst_27057 = cljs.core._EQ_.call(null,inst_27056__$1,inst_27049);
var inst_27058 = cljs.core.keyword_identical_QMARK_.call(null,inst_27049,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_27059 = (inst_27057) || (inst_27058);
var state_27088__$1 = (function (){var statearr_27102 = state_27088;
(statearr_27102[(10)] = inst_27056__$1);

return statearr_27102;
})();
if(cljs.core.truth_(inst_27059)){
var statearr_27103_27132 = state_27088__$1;
(statearr_27103_27132[(1)] = (8));

} else {
var statearr_27104_27133 = state_27088__$1;
(statearr_27104_27133[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27089 === (14))){
var inst_27081 = (state_27088[(2)]);
var inst_27082 = cljs.core.async.close_BANG_.call(null,out);
var state_27088__$1 = (function (){var statearr_27106 = state_27088;
(statearr_27106[(13)] = inst_27081);

return statearr_27106;
})();
var statearr_27107_27134 = state_27088__$1;
(statearr_27107_27134[(2)] = inst_27082);

(statearr_27107_27134[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27089 === (10))){
var inst_27071 = (state_27088[(2)]);
var state_27088__$1 = state_27088;
var statearr_27108_27135 = state_27088__$1;
(statearr_27108_27135[(2)] = inst_27071);

(statearr_27108_27135[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27089 === (8))){
var inst_27052 = (state_27088[(9)]);
var inst_27048 = (state_27088[(7)]);
var inst_27056 = (state_27088[(10)]);
var inst_27061 = inst_27048.push(inst_27052);
var tmp27105 = inst_27048;
var inst_27048__$1 = tmp27105;
var inst_27049 = inst_27056;
var state_27088__$1 = (function (){var statearr_27109 = state_27088;
(statearr_27109[(14)] = inst_27061);

(statearr_27109[(7)] = inst_27048__$1);

(statearr_27109[(8)] = inst_27049);

return statearr_27109;
})();
var statearr_27110_27136 = state_27088__$1;
(statearr_27110_27136[(2)] = null);

(statearr_27110_27136[(1)] = (2));


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
});})(c__24367__auto___27122,out))
;
return ((function (switch__24255__auto__,c__24367__auto___27122,out){
return (function() {
var cljs$core$async$state_machine__24256__auto__ = null;
var cljs$core$async$state_machine__24256__auto____0 = (function (){
var statearr_27114 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27114[(0)] = cljs$core$async$state_machine__24256__auto__);

(statearr_27114[(1)] = (1));

return statearr_27114;
});
var cljs$core$async$state_machine__24256__auto____1 = (function (state_27088){
while(true){
var ret_value__24257__auto__ = (function (){try{while(true){
var result__24258__auto__ = switch__24255__auto__.call(null,state_27088);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24258__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24258__auto__;
}
break;
}
}catch (e27115){if((e27115 instanceof Object)){
var ex__24259__auto__ = e27115;
var statearr_27116_27137 = state_27088;
(statearr_27116_27137[(5)] = ex__24259__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27088);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27115;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24257__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27138 = state_27088;
state_27088 = G__27138;
continue;
} else {
return ret_value__24257__auto__;
}
break;
}
});
cljs$core$async$state_machine__24256__auto__ = function(state_27088){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24256__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24256__auto____1.call(this,state_27088);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24256__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24256__auto____0;
cljs$core$async$state_machine__24256__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24256__auto____1;
return cljs$core$async$state_machine__24256__auto__;
})()
;})(switch__24255__auto__,c__24367__auto___27122,out))
})();
var state__24369__auto__ = (function (){var statearr_27117 = f__24368__auto__.call(null);
(statearr_27117[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24367__auto___27122);

return statearr_27117;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24369__auto__);
});})(c__24367__auto___27122,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map