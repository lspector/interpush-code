// Compiled by ClojureScript 1.10.764 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__28364 = arguments.length;
switch (G__28364) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28365 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28365 = (function (f,blockable,meta28366){
this.f = f;
this.blockable = blockable;
this.meta28366 = meta28366;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28365.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28367,meta28366__$1){
var self__ = this;
var _28367__$1 = this;
return (new cljs.core.async.t_cljs$core$async28365(self__.f,self__.blockable,meta28366__$1));
}));

(cljs.core.async.t_cljs$core$async28365.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28367){
var self__ = this;
var _28367__$1 = this;
return self__.meta28366;
}));

(cljs.core.async.t_cljs$core$async28365.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28365.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async28365.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async28365.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async28365.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta28366","meta28366",-127160344,null)], null);
}));

(cljs.core.async.t_cljs$core$async28365.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28365.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28365");

(cljs.core.async.t_cljs$core$async28365.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async28365");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28365.
 */
cljs.core.async.__GT_t_cljs$core$async28365 = (function cljs$core$async$__GT_t_cljs$core$async28365(f__$1,blockable__$1,meta28366){
return (new cljs.core.async.t_cljs$core$async28365(f__$1,blockable__$1,meta28366));
});

}

return (new cljs.core.async.t_cljs$core$async28365(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

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
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
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
var G__28371 = arguments.length;
switch (G__28371) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__28374 = arguments.length;
switch (G__28374) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

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
var G__28377 = arguments.length;
switch (G__28377) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_28379 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_28379);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,val_28379);
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

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
var G__28381 = arguments.length;
switch (G__28381) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,ret);
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4613__auto___28383 = n;
var x_28384 = (0);
while(true){
if((x_28384 < n__4613__auto___28383)){
(a[x_28384] = (0));

var G__28385 = (x_28384 + (1));
x_28384 = G__28385;
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

var G__28386 = (i + (1));
i = G__28386;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28387 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28387 = (function (flag,meta28388){
this.flag = flag;
this.meta28388 = meta28388;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28387.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28389,meta28388__$1){
var self__ = this;
var _28389__$1 = this;
return (new cljs.core.async.t_cljs$core$async28387(self__.flag,meta28388__$1));
}));

(cljs.core.async.t_cljs$core$async28387.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28389){
var self__ = this;
var _28389__$1 = this;
return self__.meta28388;
}));

(cljs.core.async.t_cljs$core$async28387.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28387.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async28387.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async28387.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async28387.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta28388","meta28388",-1052404652,null)], null);
}));

(cljs.core.async.t_cljs$core$async28387.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28387.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28387");

(cljs.core.async.t_cljs$core$async28387.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async28387");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28387.
 */
cljs.core.async.__GT_t_cljs$core$async28387 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async28387(flag__$1,meta28388){
return (new cljs.core.async.t_cljs$core$async28387(flag__$1,meta28388));
});

}

return (new cljs.core.async.t_cljs$core$async28387(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28390 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28390 = (function (flag,cb,meta28391){
this.flag = flag;
this.cb = cb;
this.meta28391 = meta28391;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28390.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28392,meta28391__$1){
var self__ = this;
var _28392__$1 = this;
return (new cljs.core.async.t_cljs$core$async28390(self__.flag,self__.cb,meta28391__$1));
}));

(cljs.core.async.t_cljs$core$async28390.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28392){
var self__ = this;
var _28392__$1 = this;
return self__.meta28391;
}));

(cljs.core.async.t_cljs$core$async28390.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28390.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async28390.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async28390.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async28390.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta28391","meta28391",-1266027561,null)], null);
}));

(cljs.core.async.t_cljs$core$async28390.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28390.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28390");

(cljs.core.async.t_cljs$core$async28390.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async28390");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28390.
 */
cljs.core.async.__GT_t_cljs$core$async28390 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async28390(flag__$1,cb__$1,meta28391){
return (new cljs.core.async.t_cljs$core$async28390(flag__$1,cb__$1,meta28391));
});

}

return (new cljs.core.async.t_cljs$core$async28390(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__28393_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28393_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__28394_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28394_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4126__auto__ = wport;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return port;
}
})()], null));
} else {
var G__28395 = (i + (1));
i = G__28395;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4126__auto__ = ret;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4115__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
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
var args__4742__auto__ = [];
var len__4736__auto___28401 = arguments.length;
var i__4737__auto___28402 = (0);
while(true){
if((i__4737__auto___28402 < len__4736__auto___28401)){
args__4742__auto__.push((arguments[i__4737__auto___28402]));

var G__28403 = (i__4737__auto___28402 + (1));
i__4737__auto___28402 = G__28403;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__28398){
var map__28399 = p__28398;
var map__28399__$1 = (((((!((map__28399 == null))))?(((((map__28399.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28399.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28399):map__28399);
var opts = map__28399__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq28396){
var G__28397 = cljs.core.first.call(null,seq28396);
var seq28396__$1 = cljs.core.next.call(null,seq28396);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28397,seq28396__$1);
}));

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
var G__28405 = arguments.length;
switch (G__28405) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__28304__auto___28451 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__28305__auto__ = (function (){var switch__28209__auto__ = (function (state_28429){
var state_val_28430 = (state_28429[(1)]);
if((state_val_28430 === (7))){
var inst_28425 = (state_28429[(2)]);
var state_28429__$1 = state_28429;
var statearr_28431_28452 = state_28429__$1;
(statearr_28431_28452[(2)] = inst_28425);

(statearr_28431_28452[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28430 === (1))){
var state_28429__$1 = state_28429;
var statearr_28432_28453 = state_28429__$1;
(statearr_28432_28453[(2)] = null);

(statearr_28432_28453[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28430 === (4))){
var inst_28408 = (state_28429[(7)]);
var inst_28408__$1 = (state_28429[(2)]);
var inst_28409 = (inst_28408__$1 == null);
var state_28429__$1 = (function (){var statearr_28433 = state_28429;
(statearr_28433[(7)] = inst_28408__$1);

return statearr_28433;
})();
if(cljs.core.truth_(inst_28409)){
var statearr_28434_28454 = state_28429__$1;
(statearr_28434_28454[(1)] = (5));

} else {
var statearr_28435_28455 = state_28429__$1;
(statearr_28435_28455[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28430 === (13))){
var state_28429__$1 = state_28429;
var statearr_28436_28456 = state_28429__$1;
(statearr_28436_28456[(2)] = null);

(statearr_28436_28456[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28430 === (6))){
var inst_28408 = (state_28429[(7)]);
var state_28429__$1 = state_28429;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28429__$1,(11),to,inst_28408);
} else {
if((state_val_28430 === (3))){
var inst_28427 = (state_28429[(2)]);
var state_28429__$1 = state_28429;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28429__$1,inst_28427);
} else {
if((state_val_28430 === (12))){
var state_28429__$1 = state_28429;
var statearr_28437_28457 = state_28429__$1;
(statearr_28437_28457[(2)] = null);

(statearr_28437_28457[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28430 === (2))){
var state_28429__$1 = state_28429;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28429__$1,(4),from);
} else {
if((state_val_28430 === (11))){
var inst_28418 = (state_28429[(2)]);
var state_28429__$1 = state_28429;
if(cljs.core.truth_(inst_28418)){
var statearr_28438_28458 = state_28429__$1;
(statearr_28438_28458[(1)] = (12));

} else {
var statearr_28439_28459 = state_28429__$1;
(statearr_28439_28459[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28430 === (9))){
var state_28429__$1 = state_28429;
var statearr_28440_28460 = state_28429__$1;
(statearr_28440_28460[(2)] = null);

(statearr_28440_28460[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28430 === (5))){
var state_28429__$1 = state_28429;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28441_28461 = state_28429__$1;
(statearr_28441_28461[(1)] = (8));

} else {
var statearr_28442_28462 = state_28429__$1;
(statearr_28442_28462[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28430 === (14))){
var inst_28423 = (state_28429[(2)]);
var state_28429__$1 = state_28429;
var statearr_28443_28463 = state_28429__$1;
(statearr_28443_28463[(2)] = inst_28423);

(statearr_28443_28463[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28430 === (10))){
var inst_28415 = (state_28429[(2)]);
var state_28429__$1 = state_28429;
var statearr_28444_28464 = state_28429__$1;
(statearr_28444_28464[(2)] = inst_28415);

(statearr_28444_28464[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28430 === (8))){
var inst_28412 = cljs.core.async.close_BANG_.call(null,to);
var state_28429__$1 = state_28429;
var statearr_28445_28465 = state_28429__$1;
(statearr_28445_28465[(2)] = inst_28412);

(statearr_28445_28465[(1)] = (10));


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
});
return (function() {
var cljs$core$async$state_machine__28210__auto__ = null;
var cljs$core$async$state_machine__28210__auto____0 = (function (){
var statearr_28446 = [null,null,null,null,null,null,null,null];
(statearr_28446[(0)] = cljs$core$async$state_machine__28210__auto__);

(statearr_28446[(1)] = (1));

return statearr_28446;
});
var cljs$core$async$state_machine__28210__auto____1 = (function (state_28429){
while(true){
var ret_value__28211__auto__ = (function (){try{while(true){
var result__28212__auto__ = switch__28209__auto__.call(null,state_28429);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28212__auto__;
}
break;
}
}catch (e28447){if((e28447 instanceof Object)){
var ex__28213__auto__ = e28447;
var statearr_28448_28466 = state_28429;
(statearr_28448_28466[(5)] = ex__28213__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28429);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28447;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28467 = state_28429;
state_28429 = G__28467;
continue;
} else {
return ret_value__28211__auto__;
}
break;
}
});
cljs$core$async$state_machine__28210__auto__ = function(state_28429){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28210__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28210__auto____1.call(this,state_28429);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28210__auto____0;
cljs$core$async$state_machine__28210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28210__auto____1;
return cljs$core$async$state_machine__28210__auto__;
})()
})();
var state__28306__auto__ = (function (){var statearr_28449 = f__28305__auto__.call(null);
(statearr_28449[(6)] = c__28304__auto___28451);

return statearr_28449;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28306__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = (function (p__28468){
var vec__28469 = p__28468;
var v = cljs.core.nth.call(null,vec__28469,(0),null);
var p = cljs.core.nth.call(null,vec__28469,(1),null);
var job = vec__28469;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__28304__auto___28640 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__28305__auto__ = (function (){var switch__28209__auto__ = (function (state_28476){
var state_val_28477 = (state_28476[(1)]);
if((state_val_28477 === (1))){
var state_28476__$1 = state_28476;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28476__$1,(2),res,v);
} else {
if((state_val_28477 === (2))){
var inst_28473 = (state_28476[(2)]);
var inst_28474 = cljs.core.async.close_BANG_.call(null,res);
var state_28476__$1 = (function (){var statearr_28478 = state_28476;
(statearr_28478[(7)] = inst_28473);

return statearr_28478;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28476__$1,inst_28474);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28210__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28210__auto____0 = (function (){
var statearr_28479 = [null,null,null,null,null,null,null,null];
(statearr_28479[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28210__auto__);

(statearr_28479[(1)] = (1));

return statearr_28479;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28210__auto____1 = (function (state_28476){
while(true){
var ret_value__28211__auto__ = (function (){try{while(true){
var result__28212__auto__ = switch__28209__auto__.call(null,state_28476);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28212__auto__;
}
break;
}
}catch (e28480){if((e28480 instanceof Object)){
var ex__28213__auto__ = e28480;
var statearr_28481_28641 = state_28476;
(statearr_28481_28641[(5)] = ex__28213__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28476);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28480;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28642 = state_28476;
state_28476 = G__28642;
continue;
} else {
return ret_value__28211__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28210__auto__ = function(state_28476){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28210__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28210__auto____1.call(this,state_28476);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28210__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28210__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28210__auto__;
})()
})();
var state__28306__auto__ = (function (){var statearr_28482 = f__28305__auto__.call(null);
(statearr_28482[(6)] = c__28304__auto___28640);

return statearr_28482;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28306__auto__);
}));


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var async = (function (p__28483){
var vec__28484 = p__28483;
var v = cljs.core.nth.call(null,vec__28484,(0),null);
var p = cljs.core.nth.call(null,vec__28484,(1),null);
var job = vec__28484;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var n__4613__auto___28643 = n;
var __28644 = (0);
while(true){
if((__28644 < n__4613__auto___28643)){
var G__28487_28645 = type;
var G__28487_28646__$1 = (((G__28487_28645 instanceof cljs.core.Keyword))?G__28487_28645.fqn:null);
switch (G__28487_28646__$1) {
case "compute":
var c__28304__auto___28648 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__28644,c__28304__auto___28648,G__28487_28645,G__28487_28646__$1,n__4613__auto___28643,jobs,results,process,async){
return (function (){
var f__28305__auto__ = (function (){var switch__28209__auto__ = ((function (__28644,c__28304__auto___28648,G__28487_28645,G__28487_28646__$1,n__4613__auto___28643,jobs,results,process,async){
return (function (state_28500){
var state_val_28501 = (state_28500[(1)]);
if((state_val_28501 === (1))){
var state_28500__$1 = state_28500;
var statearr_28502_28649 = state_28500__$1;
(statearr_28502_28649[(2)] = null);

(statearr_28502_28649[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28501 === (2))){
var state_28500__$1 = state_28500;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28500__$1,(4),jobs);
} else {
if((state_val_28501 === (3))){
var inst_28498 = (state_28500[(2)]);
var state_28500__$1 = state_28500;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28500__$1,inst_28498);
} else {
if((state_val_28501 === (4))){
var inst_28490 = (state_28500[(2)]);
var inst_28491 = process.call(null,inst_28490);
var state_28500__$1 = state_28500;
if(cljs.core.truth_(inst_28491)){
var statearr_28503_28650 = state_28500__$1;
(statearr_28503_28650[(1)] = (5));

} else {
var statearr_28504_28651 = state_28500__$1;
(statearr_28504_28651[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28501 === (5))){
var state_28500__$1 = state_28500;
var statearr_28505_28652 = state_28500__$1;
(statearr_28505_28652[(2)] = null);

(statearr_28505_28652[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28501 === (6))){
var state_28500__$1 = state_28500;
var statearr_28506_28653 = state_28500__$1;
(statearr_28506_28653[(2)] = null);

(statearr_28506_28653[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28501 === (7))){
var inst_28496 = (state_28500[(2)]);
var state_28500__$1 = state_28500;
var statearr_28507_28654 = state_28500__$1;
(statearr_28507_28654[(2)] = inst_28496);

(statearr_28507_28654[(1)] = (3));


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
});})(__28644,c__28304__auto___28648,G__28487_28645,G__28487_28646__$1,n__4613__auto___28643,jobs,results,process,async))
;
return ((function (__28644,switch__28209__auto__,c__28304__auto___28648,G__28487_28645,G__28487_28646__$1,n__4613__auto___28643,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28210__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28210__auto____0 = (function (){
var statearr_28508 = [null,null,null,null,null,null,null];
(statearr_28508[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28210__auto__);

(statearr_28508[(1)] = (1));

return statearr_28508;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28210__auto____1 = (function (state_28500){
while(true){
var ret_value__28211__auto__ = (function (){try{while(true){
var result__28212__auto__ = switch__28209__auto__.call(null,state_28500);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28212__auto__;
}
break;
}
}catch (e28509){if((e28509 instanceof Object)){
var ex__28213__auto__ = e28509;
var statearr_28510_28655 = state_28500;
(statearr_28510_28655[(5)] = ex__28213__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28500);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28509;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28656 = state_28500;
state_28500 = G__28656;
continue;
} else {
return ret_value__28211__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28210__auto__ = function(state_28500){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28210__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28210__auto____1.call(this,state_28500);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28210__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28210__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28210__auto__;
})()
;})(__28644,switch__28209__auto__,c__28304__auto___28648,G__28487_28645,G__28487_28646__$1,n__4613__auto___28643,jobs,results,process,async))
})();
var state__28306__auto__ = (function (){var statearr_28511 = f__28305__auto__.call(null);
(statearr_28511[(6)] = c__28304__auto___28648);

return statearr_28511;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28306__auto__);
});})(__28644,c__28304__auto___28648,G__28487_28645,G__28487_28646__$1,n__4613__auto___28643,jobs,results,process,async))
);


break;
case "async":
var c__28304__auto___28657 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__28644,c__28304__auto___28657,G__28487_28645,G__28487_28646__$1,n__4613__auto___28643,jobs,results,process,async){
return (function (){
var f__28305__auto__ = (function (){var switch__28209__auto__ = ((function (__28644,c__28304__auto___28657,G__28487_28645,G__28487_28646__$1,n__4613__auto___28643,jobs,results,process,async){
return (function (state_28524){
var state_val_28525 = (state_28524[(1)]);
if((state_val_28525 === (1))){
var state_28524__$1 = state_28524;
var statearr_28526_28658 = state_28524__$1;
(statearr_28526_28658[(2)] = null);

(statearr_28526_28658[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28525 === (2))){
var state_28524__$1 = state_28524;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28524__$1,(4),jobs);
} else {
if((state_val_28525 === (3))){
var inst_28522 = (state_28524[(2)]);
var state_28524__$1 = state_28524;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28524__$1,inst_28522);
} else {
if((state_val_28525 === (4))){
var inst_28514 = (state_28524[(2)]);
var inst_28515 = async.call(null,inst_28514);
var state_28524__$1 = state_28524;
if(cljs.core.truth_(inst_28515)){
var statearr_28527_28659 = state_28524__$1;
(statearr_28527_28659[(1)] = (5));

} else {
var statearr_28528_28660 = state_28524__$1;
(statearr_28528_28660[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28525 === (5))){
var state_28524__$1 = state_28524;
var statearr_28529_28661 = state_28524__$1;
(statearr_28529_28661[(2)] = null);

(statearr_28529_28661[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28525 === (6))){
var state_28524__$1 = state_28524;
var statearr_28530_28662 = state_28524__$1;
(statearr_28530_28662[(2)] = null);

(statearr_28530_28662[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28525 === (7))){
var inst_28520 = (state_28524[(2)]);
var state_28524__$1 = state_28524;
var statearr_28531_28663 = state_28524__$1;
(statearr_28531_28663[(2)] = inst_28520);

(statearr_28531_28663[(1)] = (3));


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
});})(__28644,c__28304__auto___28657,G__28487_28645,G__28487_28646__$1,n__4613__auto___28643,jobs,results,process,async))
;
return ((function (__28644,switch__28209__auto__,c__28304__auto___28657,G__28487_28645,G__28487_28646__$1,n__4613__auto___28643,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28210__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28210__auto____0 = (function (){
var statearr_28532 = [null,null,null,null,null,null,null];
(statearr_28532[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28210__auto__);

(statearr_28532[(1)] = (1));

return statearr_28532;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28210__auto____1 = (function (state_28524){
while(true){
var ret_value__28211__auto__ = (function (){try{while(true){
var result__28212__auto__ = switch__28209__auto__.call(null,state_28524);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28212__auto__;
}
break;
}
}catch (e28533){if((e28533 instanceof Object)){
var ex__28213__auto__ = e28533;
var statearr_28534_28664 = state_28524;
(statearr_28534_28664[(5)] = ex__28213__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28524);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28533;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28665 = state_28524;
state_28524 = G__28665;
continue;
} else {
return ret_value__28211__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28210__auto__ = function(state_28524){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28210__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28210__auto____1.call(this,state_28524);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28210__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28210__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28210__auto__;
})()
;})(__28644,switch__28209__auto__,c__28304__auto___28657,G__28487_28645,G__28487_28646__$1,n__4613__auto___28643,jobs,results,process,async))
})();
var state__28306__auto__ = (function (){var statearr_28535 = f__28305__auto__.call(null);
(statearr_28535[(6)] = c__28304__auto___28657);

return statearr_28535;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28306__auto__);
});})(__28644,c__28304__auto___28657,G__28487_28645,G__28487_28646__$1,n__4613__auto___28643,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28487_28646__$1)].join('')));

}

var G__28666 = (__28644 + (1));
__28644 = G__28666;
continue;
} else {
}
break;
}

var c__28304__auto___28667 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__28305__auto__ = (function (){var switch__28209__auto__ = (function (state_28557){
var state_val_28558 = (state_28557[(1)]);
if((state_val_28558 === (7))){
var inst_28553 = (state_28557[(2)]);
var state_28557__$1 = state_28557;
var statearr_28559_28668 = state_28557__$1;
(statearr_28559_28668[(2)] = inst_28553);

(statearr_28559_28668[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28558 === (1))){
var state_28557__$1 = state_28557;
var statearr_28560_28669 = state_28557__$1;
(statearr_28560_28669[(2)] = null);

(statearr_28560_28669[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28558 === (4))){
var inst_28538 = (state_28557[(7)]);
var inst_28538__$1 = (state_28557[(2)]);
var inst_28539 = (inst_28538__$1 == null);
var state_28557__$1 = (function (){var statearr_28561 = state_28557;
(statearr_28561[(7)] = inst_28538__$1);

return statearr_28561;
})();
if(cljs.core.truth_(inst_28539)){
var statearr_28562_28670 = state_28557__$1;
(statearr_28562_28670[(1)] = (5));

} else {
var statearr_28563_28671 = state_28557__$1;
(statearr_28563_28671[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28558 === (6))){
var inst_28538 = (state_28557[(7)]);
var inst_28543 = (state_28557[(8)]);
var inst_28543__$1 = cljs.core.async.chan.call(null,(1));
var inst_28544 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28545 = [inst_28538,inst_28543__$1];
var inst_28546 = (new cljs.core.PersistentVector(null,2,(5),inst_28544,inst_28545,null));
var state_28557__$1 = (function (){var statearr_28564 = state_28557;
(statearr_28564[(8)] = inst_28543__$1);

return statearr_28564;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28557__$1,(8),jobs,inst_28546);
} else {
if((state_val_28558 === (3))){
var inst_28555 = (state_28557[(2)]);
var state_28557__$1 = state_28557;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28557__$1,inst_28555);
} else {
if((state_val_28558 === (2))){
var state_28557__$1 = state_28557;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28557__$1,(4),from);
} else {
if((state_val_28558 === (9))){
var inst_28550 = (state_28557[(2)]);
var state_28557__$1 = (function (){var statearr_28565 = state_28557;
(statearr_28565[(9)] = inst_28550);

return statearr_28565;
})();
var statearr_28566_28672 = state_28557__$1;
(statearr_28566_28672[(2)] = null);

(statearr_28566_28672[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28558 === (5))){
var inst_28541 = cljs.core.async.close_BANG_.call(null,jobs);
var state_28557__$1 = state_28557;
var statearr_28567_28673 = state_28557__$1;
(statearr_28567_28673[(2)] = inst_28541);

(statearr_28567_28673[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28558 === (8))){
var inst_28543 = (state_28557[(8)]);
var inst_28548 = (state_28557[(2)]);
var state_28557__$1 = (function (){var statearr_28568 = state_28557;
(statearr_28568[(10)] = inst_28548);

return statearr_28568;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28557__$1,(9),results,inst_28543);
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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28210__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28210__auto____0 = (function (){
var statearr_28569 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28569[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28210__auto__);

(statearr_28569[(1)] = (1));

return statearr_28569;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28210__auto____1 = (function (state_28557){
while(true){
var ret_value__28211__auto__ = (function (){try{while(true){
var result__28212__auto__ = switch__28209__auto__.call(null,state_28557);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28212__auto__;
}
break;
}
}catch (e28570){if((e28570 instanceof Object)){
var ex__28213__auto__ = e28570;
var statearr_28571_28674 = state_28557;
(statearr_28571_28674[(5)] = ex__28213__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28557);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28570;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28675 = state_28557;
state_28557 = G__28675;
continue;
} else {
return ret_value__28211__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28210__auto__ = function(state_28557){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28210__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28210__auto____1.call(this,state_28557);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28210__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28210__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28210__auto__;
})()
})();
var state__28306__auto__ = (function (){var statearr_28572 = f__28305__auto__.call(null);
(statearr_28572[(6)] = c__28304__auto___28667);

return statearr_28572;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28306__auto__);
}));


var c__28304__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__28305__auto__ = (function (){var switch__28209__auto__ = (function (state_28610){
var state_val_28611 = (state_28610[(1)]);
if((state_val_28611 === (7))){
var inst_28606 = (state_28610[(2)]);
var state_28610__$1 = state_28610;
var statearr_28612_28676 = state_28610__$1;
(statearr_28612_28676[(2)] = inst_28606);

(statearr_28612_28676[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28611 === (20))){
var state_28610__$1 = state_28610;
var statearr_28613_28677 = state_28610__$1;
(statearr_28613_28677[(2)] = null);

(statearr_28613_28677[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28611 === (1))){
var state_28610__$1 = state_28610;
var statearr_28614_28678 = state_28610__$1;
(statearr_28614_28678[(2)] = null);

(statearr_28614_28678[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28611 === (4))){
var inst_28575 = (state_28610[(7)]);
var inst_28575__$1 = (state_28610[(2)]);
var inst_28576 = (inst_28575__$1 == null);
var state_28610__$1 = (function (){var statearr_28615 = state_28610;
(statearr_28615[(7)] = inst_28575__$1);

return statearr_28615;
})();
if(cljs.core.truth_(inst_28576)){
var statearr_28616_28679 = state_28610__$1;
(statearr_28616_28679[(1)] = (5));

} else {
var statearr_28617_28680 = state_28610__$1;
(statearr_28617_28680[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28611 === (15))){
var inst_28588 = (state_28610[(8)]);
var state_28610__$1 = state_28610;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28610__$1,(18),to,inst_28588);
} else {
if((state_val_28611 === (21))){
var inst_28601 = (state_28610[(2)]);
var state_28610__$1 = state_28610;
var statearr_28618_28681 = state_28610__$1;
(statearr_28618_28681[(2)] = inst_28601);

(statearr_28618_28681[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28611 === (13))){
var inst_28603 = (state_28610[(2)]);
var state_28610__$1 = (function (){var statearr_28619 = state_28610;
(statearr_28619[(9)] = inst_28603);

return statearr_28619;
})();
var statearr_28620_28682 = state_28610__$1;
(statearr_28620_28682[(2)] = null);

(statearr_28620_28682[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28611 === (6))){
var inst_28575 = (state_28610[(7)]);
var state_28610__$1 = state_28610;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28610__$1,(11),inst_28575);
} else {
if((state_val_28611 === (17))){
var inst_28596 = (state_28610[(2)]);
var state_28610__$1 = state_28610;
if(cljs.core.truth_(inst_28596)){
var statearr_28621_28683 = state_28610__$1;
(statearr_28621_28683[(1)] = (19));

} else {
var statearr_28622_28684 = state_28610__$1;
(statearr_28622_28684[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28611 === (3))){
var inst_28608 = (state_28610[(2)]);
var state_28610__$1 = state_28610;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28610__$1,inst_28608);
} else {
if((state_val_28611 === (12))){
var inst_28585 = (state_28610[(10)]);
var state_28610__$1 = state_28610;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28610__$1,(14),inst_28585);
} else {
if((state_val_28611 === (2))){
var state_28610__$1 = state_28610;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28610__$1,(4),results);
} else {
if((state_val_28611 === (19))){
var state_28610__$1 = state_28610;
var statearr_28623_28685 = state_28610__$1;
(statearr_28623_28685[(2)] = null);

(statearr_28623_28685[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28611 === (11))){
var inst_28585 = (state_28610[(2)]);
var state_28610__$1 = (function (){var statearr_28624 = state_28610;
(statearr_28624[(10)] = inst_28585);

return statearr_28624;
})();
var statearr_28625_28686 = state_28610__$1;
(statearr_28625_28686[(2)] = null);

(statearr_28625_28686[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28611 === (9))){
var state_28610__$1 = state_28610;
var statearr_28626_28687 = state_28610__$1;
(statearr_28626_28687[(2)] = null);

(statearr_28626_28687[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28611 === (5))){
var state_28610__$1 = state_28610;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28627_28688 = state_28610__$1;
(statearr_28627_28688[(1)] = (8));

} else {
var statearr_28628_28689 = state_28610__$1;
(statearr_28628_28689[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28611 === (14))){
var inst_28588 = (state_28610[(8)]);
var inst_28588__$1 = (state_28610[(2)]);
var inst_28589 = (inst_28588__$1 == null);
var inst_28590 = cljs.core.not.call(null,inst_28589);
var state_28610__$1 = (function (){var statearr_28629 = state_28610;
(statearr_28629[(8)] = inst_28588__$1);

return statearr_28629;
})();
if(inst_28590){
var statearr_28630_28690 = state_28610__$1;
(statearr_28630_28690[(1)] = (15));

} else {
var statearr_28631_28691 = state_28610__$1;
(statearr_28631_28691[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28611 === (16))){
var state_28610__$1 = state_28610;
var statearr_28632_28692 = state_28610__$1;
(statearr_28632_28692[(2)] = false);

(statearr_28632_28692[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28611 === (10))){
var inst_28582 = (state_28610[(2)]);
var state_28610__$1 = state_28610;
var statearr_28633_28693 = state_28610__$1;
(statearr_28633_28693[(2)] = inst_28582);

(statearr_28633_28693[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28611 === (18))){
var inst_28593 = (state_28610[(2)]);
var state_28610__$1 = state_28610;
var statearr_28634_28694 = state_28610__$1;
(statearr_28634_28694[(2)] = inst_28593);

(statearr_28634_28694[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28611 === (8))){
var inst_28579 = cljs.core.async.close_BANG_.call(null,to);
var state_28610__$1 = state_28610;
var statearr_28635_28695 = state_28610__$1;
(statearr_28635_28695[(2)] = inst_28579);

(statearr_28635_28695[(1)] = (10));


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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28210__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28210__auto____0 = (function (){
var statearr_28636 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28636[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28210__auto__);

(statearr_28636[(1)] = (1));

return statearr_28636;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28210__auto____1 = (function (state_28610){
while(true){
var ret_value__28211__auto__ = (function (){try{while(true){
var result__28212__auto__ = switch__28209__auto__.call(null,state_28610);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28212__auto__;
}
break;
}
}catch (e28637){if((e28637 instanceof Object)){
var ex__28213__auto__ = e28637;
var statearr_28638_28696 = state_28610;
(statearr_28638_28696[(5)] = ex__28213__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28610);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28637;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28697 = state_28610;
state_28610 = G__28697;
continue;
} else {
return ret_value__28211__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28210__auto__ = function(state_28610){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28210__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28210__auto____1.call(this,state_28610);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28210__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28210__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28210__auto__;
})()
})();
var state__28306__auto__ = (function (){var statearr_28639 = f__28305__auto__.call(null);
(statearr_28639[(6)] = c__28304__auto__);

return statearr_28639;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28306__auto__);
}));

return c__28304__auto__;
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
var G__28699 = arguments.length;
switch (G__28699) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

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
var G__28702 = arguments.length;
switch (G__28702) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

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
var G__28705 = arguments.length;
switch (G__28705) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__28304__auto___28754 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__28305__auto__ = (function (){var switch__28209__auto__ = (function (state_28731){
var state_val_28732 = (state_28731[(1)]);
if((state_val_28732 === (7))){
var inst_28727 = (state_28731[(2)]);
var state_28731__$1 = state_28731;
var statearr_28733_28755 = state_28731__$1;
(statearr_28733_28755[(2)] = inst_28727);

(statearr_28733_28755[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28732 === (1))){
var state_28731__$1 = state_28731;
var statearr_28734_28756 = state_28731__$1;
(statearr_28734_28756[(2)] = null);

(statearr_28734_28756[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28732 === (4))){
var inst_28708 = (state_28731[(7)]);
var inst_28708__$1 = (state_28731[(2)]);
var inst_28709 = (inst_28708__$1 == null);
var state_28731__$1 = (function (){var statearr_28735 = state_28731;
(statearr_28735[(7)] = inst_28708__$1);

return statearr_28735;
})();
if(cljs.core.truth_(inst_28709)){
var statearr_28736_28757 = state_28731__$1;
(statearr_28736_28757[(1)] = (5));

} else {
var statearr_28737_28758 = state_28731__$1;
(statearr_28737_28758[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28732 === (13))){
var state_28731__$1 = state_28731;
var statearr_28738_28759 = state_28731__$1;
(statearr_28738_28759[(2)] = null);

(statearr_28738_28759[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28732 === (6))){
var inst_28708 = (state_28731[(7)]);
var inst_28714 = p.call(null,inst_28708);
var state_28731__$1 = state_28731;
if(cljs.core.truth_(inst_28714)){
var statearr_28739_28760 = state_28731__$1;
(statearr_28739_28760[(1)] = (9));

} else {
var statearr_28740_28761 = state_28731__$1;
(statearr_28740_28761[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28732 === (3))){
var inst_28729 = (state_28731[(2)]);
var state_28731__$1 = state_28731;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28731__$1,inst_28729);
} else {
if((state_val_28732 === (12))){
var state_28731__$1 = state_28731;
var statearr_28741_28762 = state_28731__$1;
(statearr_28741_28762[(2)] = null);

(statearr_28741_28762[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28732 === (2))){
var state_28731__$1 = state_28731;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28731__$1,(4),ch);
} else {
if((state_val_28732 === (11))){
var inst_28708 = (state_28731[(7)]);
var inst_28718 = (state_28731[(2)]);
var state_28731__$1 = state_28731;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28731__$1,(8),inst_28718,inst_28708);
} else {
if((state_val_28732 === (9))){
var state_28731__$1 = state_28731;
var statearr_28742_28763 = state_28731__$1;
(statearr_28742_28763[(2)] = tc);

(statearr_28742_28763[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28732 === (5))){
var inst_28711 = cljs.core.async.close_BANG_.call(null,tc);
var inst_28712 = cljs.core.async.close_BANG_.call(null,fc);
var state_28731__$1 = (function (){var statearr_28743 = state_28731;
(statearr_28743[(8)] = inst_28711);

return statearr_28743;
})();
var statearr_28744_28764 = state_28731__$1;
(statearr_28744_28764[(2)] = inst_28712);

(statearr_28744_28764[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28732 === (14))){
var inst_28725 = (state_28731[(2)]);
var state_28731__$1 = state_28731;
var statearr_28745_28765 = state_28731__$1;
(statearr_28745_28765[(2)] = inst_28725);

(statearr_28745_28765[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28732 === (10))){
var state_28731__$1 = state_28731;
var statearr_28746_28766 = state_28731__$1;
(statearr_28746_28766[(2)] = fc);

(statearr_28746_28766[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28732 === (8))){
var inst_28720 = (state_28731[(2)]);
var state_28731__$1 = state_28731;
if(cljs.core.truth_(inst_28720)){
var statearr_28747_28767 = state_28731__$1;
(statearr_28747_28767[(1)] = (12));

} else {
var statearr_28748_28768 = state_28731__$1;
(statearr_28748_28768[(1)] = (13));

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
});
return (function() {
var cljs$core$async$state_machine__28210__auto__ = null;
var cljs$core$async$state_machine__28210__auto____0 = (function (){
var statearr_28749 = [null,null,null,null,null,null,null,null,null];
(statearr_28749[(0)] = cljs$core$async$state_machine__28210__auto__);

(statearr_28749[(1)] = (1));

return statearr_28749;
});
var cljs$core$async$state_machine__28210__auto____1 = (function (state_28731){
while(true){
var ret_value__28211__auto__ = (function (){try{while(true){
var result__28212__auto__ = switch__28209__auto__.call(null,state_28731);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28212__auto__;
}
break;
}
}catch (e28750){if((e28750 instanceof Object)){
var ex__28213__auto__ = e28750;
var statearr_28751_28769 = state_28731;
(statearr_28751_28769[(5)] = ex__28213__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28731);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28750;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28770 = state_28731;
state_28731 = G__28770;
continue;
} else {
return ret_value__28211__auto__;
}
break;
}
});
cljs$core$async$state_machine__28210__auto__ = function(state_28731){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28210__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28210__auto____1.call(this,state_28731);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28210__auto____0;
cljs$core$async$state_machine__28210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28210__auto____1;
return cljs$core$async$state_machine__28210__auto__;
})()
})();
var state__28306__auto__ = (function (){var statearr_28752 = f__28305__auto__.call(null);
(statearr_28752[(6)] = c__28304__auto___28754);

return statearr_28752;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28306__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__28304__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__28305__auto__ = (function (){var switch__28209__auto__ = (function (state_28791){
var state_val_28792 = (state_28791[(1)]);
if((state_val_28792 === (7))){
var inst_28787 = (state_28791[(2)]);
var state_28791__$1 = state_28791;
var statearr_28793_28811 = state_28791__$1;
(statearr_28793_28811[(2)] = inst_28787);

(statearr_28793_28811[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28792 === (1))){
var inst_28771 = init;
var state_28791__$1 = (function (){var statearr_28794 = state_28791;
(statearr_28794[(7)] = inst_28771);

return statearr_28794;
})();
var statearr_28795_28812 = state_28791__$1;
(statearr_28795_28812[(2)] = null);

(statearr_28795_28812[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28792 === (4))){
var inst_28774 = (state_28791[(8)]);
var inst_28774__$1 = (state_28791[(2)]);
var inst_28775 = (inst_28774__$1 == null);
var state_28791__$1 = (function (){var statearr_28796 = state_28791;
(statearr_28796[(8)] = inst_28774__$1);

return statearr_28796;
})();
if(cljs.core.truth_(inst_28775)){
var statearr_28797_28813 = state_28791__$1;
(statearr_28797_28813[(1)] = (5));

} else {
var statearr_28798_28814 = state_28791__$1;
(statearr_28798_28814[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28792 === (6))){
var inst_28771 = (state_28791[(7)]);
var inst_28774 = (state_28791[(8)]);
var inst_28778 = (state_28791[(9)]);
var inst_28778__$1 = f.call(null,inst_28771,inst_28774);
var inst_28779 = cljs.core.reduced_QMARK_.call(null,inst_28778__$1);
var state_28791__$1 = (function (){var statearr_28799 = state_28791;
(statearr_28799[(9)] = inst_28778__$1);

return statearr_28799;
})();
if(inst_28779){
var statearr_28800_28815 = state_28791__$1;
(statearr_28800_28815[(1)] = (8));

} else {
var statearr_28801_28816 = state_28791__$1;
(statearr_28801_28816[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28792 === (3))){
var inst_28789 = (state_28791[(2)]);
var state_28791__$1 = state_28791;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28791__$1,inst_28789);
} else {
if((state_val_28792 === (2))){
var state_28791__$1 = state_28791;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28791__$1,(4),ch);
} else {
if((state_val_28792 === (9))){
var inst_28778 = (state_28791[(9)]);
var inst_28771 = inst_28778;
var state_28791__$1 = (function (){var statearr_28802 = state_28791;
(statearr_28802[(7)] = inst_28771);

return statearr_28802;
})();
var statearr_28803_28817 = state_28791__$1;
(statearr_28803_28817[(2)] = null);

(statearr_28803_28817[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28792 === (5))){
var inst_28771 = (state_28791[(7)]);
var state_28791__$1 = state_28791;
var statearr_28804_28818 = state_28791__$1;
(statearr_28804_28818[(2)] = inst_28771);

(statearr_28804_28818[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28792 === (10))){
var inst_28785 = (state_28791[(2)]);
var state_28791__$1 = state_28791;
var statearr_28805_28819 = state_28791__$1;
(statearr_28805_28819[(2)] = inst_28785);

(statearr_28805_28819[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28792 === (8))){
var inst_28778 = (state_28791[(9)]);
var inst_28781 = cljs.core.deref.call(null,inst_28778);
var state_28791__$1 = state_28791;
var statearr_28806_28820 = state_28791__$1;
(statearr_28806_28820[(2)] = inst_28781);

(statearr_28806_28820[(1)] = (10));


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
});
return (function() {
var cljs$core$async$reduce_$_state_machine__28210__auto__ = null;
var cljs$core$async$reduce_$_state_machine__28210__auto____0 = (function (){
var statearr_28807 = [null,null,null,null,null,null,null,null,null,null];
(statearr_28807[(0)] = cljs$core$async$reduce_$_state_machine__28210__auto__);

(statearr_28807[(1)] = (1));

return statearr_28807;
});
var cljs$core$async$reduce_$_state_machine__28210__auto____1 = (function (state_28791){
while(true){
var ret_value__28211__auto__ = (function (){try{while(true){
var result__28212__auto__ = switch__28209__auto__.call(null,state_28791);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28212__auto__;
}
break;
}
}catch (e28808){if((e28808 instanceof Object)){
var ex__28213__auto__ = e28808;
var statearr_28809_28821 = state_28791;
(statearr_28809_28821[(5)] = ex__28213__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28791);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28808;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28822 = state_28791;
state_28791 = G__28822;
continue;
} else {
return ret_value__28211__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__28210__auto__ = function(state_28791){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__28210__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__28210__auto____1.call(this,state_28791);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__28210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__28210__auto____0;
cljs$core$async$reduce_$_state_machine__28210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__28210__auto____1;
return cljs$core$async$reduce_$_state_machine__28210__auto__;
})()
})();
var state__28306__auto__ = (function (){var statearr_28810 = f__28305__auto__.call(null);
(statearr_28810[(6)] = c__28304__auto__);

return statearr_28810;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28306__auto__);
}));

return c__28304__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__28304__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__28305__auto__ = (function (){var switch__28209__auto__ = (function (state_28828){
var state_val_28829 = (state_28828[(1)]);
if((state_val_28829 === (1))){
var inst_28823 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_28828__$1 = state_28828;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28828__$1,(2),inst_28823);
} else {
if((state_val_28829 === (2))){
var inst_28825 = (state_28828[(2)]);
var inst_28826 = f__$1.call(null,inst_28825);
var state_28828__$1 = state_28828;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28828__$1,inst_28826);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__28210__auto__ = null;
var cljs$core$async$transduce_$_state_machine__28210__auto____0 = (function (){
var statearr_28830 = [null,null,null,null,null,null,null];
(statearr_28830[(0)] = cljs$core$async$transduce_$_state_machine__28210__auto__);

(statearr_28830[(1)] = (1));

return statearr_28830;
});
var cljs$core$async$transduce_$_state_machine__28210__auto____1 = (function (state_28828){
while(true){
var ret_value__28211__auto__ = (function (){try{while(true){
var result__28212__auto__ = switch__28209__auto__.call(null,state_28828);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28212__auto__;
}
break;
}
}catch (e28831){if((e28831 instanceof Object)){
var ex__28213__auto__ = e28831;
var statearr_28832_28834 = state_28828;
(statearr_28832_28834[(5)] = ex__28213__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28828);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28831;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28835 = state_28828;
state_28828 = G__28835;
continue;
} else {
return ret_value__28211__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__28210__auto__ = function(state_28828){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__28210__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__28210__auto____1.call(this,state_28828);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__28210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__28210__auto____0;
cljs$core$async$transduce_$_state_machine__28210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__28210__auto____1;
return cljs$core$async$transduce_$_state_machine__28210__auto__;
})()
})();
var state__28306__auto__ = (function (){var statearr_28833 = f__28305__auto__.call(null);
(statearr_28833[(6)] = c__28304__auto__);

return statearr_28833;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28306__auto__);
}));

return c__28304__auto__;
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
var G__28837 = arguments.length;
switch (G__28837) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__28304__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__28305__auto__ = (function (){var switch__28209__auto__ = (function (state_28862){
var state_val_28863 = (state_28862[(1)]);
if((state_val_28863 === (7))){
var inst_28844 = (state_28862[(2)]);
var state_28862__$1 = state_28862;
var statearr_28864_28885 = state_28862__$1;
(statearr_28864_28885[(2)] = inst_28844);

(statearr_28864_28885[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28863 === (1))){
var inst_28838 = cljs.core.seq.call(null,coll);
var inst_28839 = inst_28838;
var state_28862__$1 = (function (){var statearr_28865 = state_28862;
(statearr_28865[(7)] = inst_28839);

return statearr_28865;
})();
var statearr_28866_28886 = state_28862__$1;
(statearr_28866_28886[(2)] = null);

(statearr_28866_28886[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28863 === (4))){
var inst_28839 = (state_28862[(7)]);
var inst_28842 = cljs.core.first.call(null,inst_28839);
var state_28862__$1 = state_28862;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28862__$1,(7),ch,inst_28842);
} else {
if((state_val_28863 === (13))){
var inst_28856 = (state_28862[(2)]);
var state_28862__$1 = state_28862;
var statearr_28867_28887 = state_28862__$1;
(statearr_28867_28887[(2)] = inst_28856);

(statearr_28867_28887[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28863 === (6))){
var inst_28847 = (state_28862[(2)]);
var state_28862__$1 = state_28862;
if(cljs.core.truth_(inst_28847)){
var statearr_28868_28888 = state_28862__$1;
(statearr_28868_28888[(1)] = (8));

} else {
var statearr_28869_28889 = state_28862__$1;
(statearr_28869_28889[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28863 === (3))){
var inst_28860 = (state_28862[(2)]);
var state_28862__$1 = state_28862;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28862__$1,inst_28860);
} else {
if((state_val_28863 === (12))){
var state_28862__$1 = state_28862;
var statearr_28870_28890 = state_28862__$1;
(statearr_28870_28890[(2)] = null);

(statearr_28870_28890[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28863 === (2))){
var inst_28839 = (state_28862[(7)]);
var state_28862__$1 = state_28862;
if(cljs.core.truth_(inst_28839)){
var statearr_28871_28891 = state_28862__$1;
(statearr_28871_28891[(1)] = (4));

} else {
var statearr_28872_28892 = state_28862__$1;
(statearr_28872_28892[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28863 === (11))){
var inst_28853 = cljs.core.async.close_BANG_.call(null,ch);
var state_28862__$1 = state_28862;
var statearr_28873_28893 = state_28862__$1;
(statearr_28873_28893[(2)] = inst_28853);

(statearr_28873_28893[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28863 === (9))){
var state_28862__$1 = state_28862;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28874_28894 = state_28862__$1;
(statearr_28874_28894[(1)] = (11));

} else {
var statearr_28875_28895 = state_28862__$1;
(statearr_28875_28895[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28863 === (5))){
var inst_28839 = (state_28862[(7)]);
var state_28862__$1 = state_28862;
var statearr_28876_28896 = state_28862__$1;
(statearr_28876_28896[(2)] = inst_28839);

(statearr_28876_28896[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28863 === (10))){
var inst_28858 = (state_28862[(2)]);
var state_28862__$1 = state_28862;
var statearr_28877_28897 = state_28862__$1;
(statearr_28877_28897[(2)] = inst_28858);

(statearr_28877_28897[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28863 === (8))){
var inst_28839 = (state_28862[(7)]);
var inst_28849 = cljs.core.next.call(null,inst_28839);
var inst_28839__$1 = inst_28849;
var state_28862__$1 = (function (){var statearr_28878 = state_28862;
(statearr_28878[(7)] = inst_28839__$1);

return statearr_28878;
})();
var statearr_28879_28898 = state_28862__$1;
(statearr_28879_28898[(2)] = null);

(statearr_28879_28898[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__28210__auto__ = null;
var cljs$core$async$state_machine__28210__auto____0 = (function (){
var statearr_28880 = [null,null,null,null,null,null,null,null];
(statearr_28880[(0)] = cljs$core$async$state_machine__28210__auto__);

(statearr_28880[(1)] = (1));

return statearr_28880;
});
var cljs$core$async$state_machine__28210__auto____1 = (function (state_28862){
while(true){
var ret_value__28211__auto__ = (function (){try{while(true){
var result__28212__auto__ = switch__28209__auto__.call(null,state_28862);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28212__auto__;
}
break;
}
}catch (e28881){if((e28881 instanceof Object)){
var ex__28213__auto__ = e28881;
var statearr_28882_28899 = state_28862;
(statearr_28882_28899[(5)] = ex__28213__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28862);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28881;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28900 = state_28862;
state_28862 = G__28900;
continue;
} else {
return ret_value__28211__auto__;
}
break;
}
});
cljs$core$async$state_machine__28210__auto__ = function(state_28862){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28210__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28210__auto____1.call(this,state_28862);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28210__auto____0;
cljs$core$async$state_machine__28210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28210__auto____1;
return cljs$core$async$state_machine__28210__auto__;
})()
})();
var state__28306__auto__ = (function (){var statearr_28883 = f__28305__auto__.call(null);
(statearr_28883[(6)] = c__28304__auto__);

return statearr_28883;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28306__auto__);
}));

return c__28304__auto__;
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

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

var cljs$core$async$Mux$muxch_STAR_$dyn_28901 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,_);
} else {
var m__4426__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_28901.call(null,_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_28902 = (function (m,ch,close_QMARK_){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4426__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_28902.call(null,m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_28903 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,ch);
} else {
var m__4426__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_28903.call(null,m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_28904 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m);
} else {
var m__4426__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_28904.call(null,m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28905 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28905 = (function (ch,cs,meta28906){
this.ch = ch;
this.cs = cs;
this.meta28906 = meta28906;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28905.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28907,meta28906__$1){
var self__ = this;
var _28907__$1 = this;
return (new cljs.core.async.t_cljs$core$async28905(self__.ch,self__.cs,meta28906__$1));
}));

(cljs.core.async.t_cljs$core$async28905.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28907){
var self__ = this;
var _28907__$1 = this;
return self__.meta28906;
}));

(cljs.core.async.t_cljs$core$async28905.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28905.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async28905.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28905.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async28905.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async28905.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async28905.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta28906","meta28906",-537923642,null)], null);
}));

(cljs.core.async.t_cljs$core$async28905.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28905.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28905");

(cljs.core.async.t_cljs$core$async28905.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async28905");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28905.
 */
cljs.core.async.__GT_t_cljs$core$async28905 = (function cljs$core$async$mult_$___GT_t_cljs$core$async28905(ch__$1,cs__$1,meta28906){
return (new cljs.core.async.t_cljs$core$async28905(ch__$1,cs__$1,meta28906));
});

}

return (new cljs.core.async.t_cljs$core$async28905(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});
var c__28304__auto___29127 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__28305__auto__ = (function (){var switch__28209__auto__ = (function (state_29042){
var state_val_29043 = (state_29042[(1)]);
if((state_val_29043 === (7))){
var inst_29038 = (state_29042[(2)]);
var state_29042__$1 = state_29042;
var statearr_29044_29128 = state_29042__$1;
(statearr_29044_29128[(2)] = inst_29038);

(statearr_29044_29128[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29043 === (20))){
var inst_28941 = (state_29042[(7)]);
var inst_28953 = cljs.core.first.call(null,inst_28941);
var inst_28954 = cljs.core.nth.call(null,inst_28953,(0),null);
var inst_28955 = cljs.core.nth.call(null,inst_28953,(1),null);
var state_29042__$1 = (function (){var statearr_29045 = state_29042;
(statearr_29045[(8)] = inst_28954);

return statearr_29045;
})();
if(cljs.core.truth_(inst_28955)){
var statearr_29046_29129 = state_29042__$1;
(statearr_29046_29129[(1)] = (22));

} else {
var statearr_29047_29130 = state_29042__$1;
(statearr_29047_29130[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29043 === (27))){
var inst_28983 = (state_29042[(9)]);
var inst_28910 = (state_29042[(10)]);
var inst_28990 = (state_29042[(11)]);
var inst_28985 = (state_29042[(12)]);
var inst_28990__$1 = cljs.core._nth.call(null,inst_28983,inst_28985);
var inst_28991 = cljs.core.async.put_BANG_.call(null,inst_28990__$1,inst_28910,done);
var state_29042__$1 = (function (){var statearr_29048 = state_29042;
(statearr_29048[(11)] = inst_28990__$1);

return statearr_29048;
})();
if(cljs.core.truth_(inst_28991)){
var statearr_29049_29131 = state_29042__$1;
(statearr_29049_29131[(1)] = (30));

} else {
var statearr_29050_29132 = state_29042__$1;
(statearr_29050_29132[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29043 === (1))){
var state_29042__$1 = state_29042;
var statearr_29051_29133 = state_29042__$1;
(statearr_29051_29133[(2)] = null);

(statearr_29051_29133[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29043 === (24))){
var inst_28941 = (state_29042[(7)]);
var inst_28960 = (state_29042[(2)]);
var inst_28961 = cljs.core.next.call(null,inst_28941);
var inst_28919 = inst_28961;
var inst_28920 = null;
var inst_28921 = (0);
var inst_28922 = (0);
var state_29042__$1 = (function (){var statearr_29052 = state_29042;
(statearr_29052[(13)] = inst_28960);

(statearr_29052[(14)] = inst_28921);

(statearr_29052[(15)] = inst_28920);

(statearr_29052[(16)] = inst_28919);

(statearr_29052[(17)] = inst_28922);

return statearr_29052;
})();
var statearr_29053_29134 = state_29042__$1;
(statearr_29053_29134[(2)] = null);

(statearr_29053_29134[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29043 === (39))){
var state_29042__$1 = state_29042;
var statearr_29057_29135 = state_29042__$1;
(statearr_29057_29135[(2)] = null);

(statearr_29057_29135[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29043 === (4))){
var inst_28910 = (state_29042[(10)]);
var inst_28910__$1 = (state_29042[(2)]);
var inst_28911 = (inst_28910__$1 == null);
var state_29042__$1 = (function (){var statearr_29058 = state_29042;
(statearr_29058[(10)] = inst_28910__$1);

return statearr_29058;
})();
if(cljs.core.truth_(inst_28911)){
var statearr_29059_29136 = state_29042__$1;
(statearr_29059_29136[(1)] = (5));

} else {
var statearr_29060_29137 = state_29042__$1;
(statearr_29060_29137[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29043 === (15))){
var inst_28921 = (state_29042[(14)]);
var inst_28920 = (state_29042[(15)]);
var inst_28919 = (state_29042[(16)]);
var inst_28922 = (state_29042[(17)]);
var inst_28937 = (state_29042[(2)]);
var inst_28938 = (inst_28922 + (1));
var tmp29054 = inst_28921;
var tmp29055 = inst_28920;
var tmp29056 = inst_28919;
var inst_28919__$1 = tmp29056;
var inst_28920__$1 = tmp29055;
var inst_28921__$1 = tmp29054;
var inst_28922__$1 = inst_28938;
var state_29042__$1 = (function (){var statearr_29061 = state_29042;
(statearr_29061[(14)] = inst_28921__$1);

(statearr_29061[(15)] = inst_28920__$1);

(statearr_29061[(16)] = inst_28919__$1);

(statearr_29061[(17)] = inst_28922__$1);

(statearr_29061[(18)] = inst_28937);

return statearr_29061;
})();
var statearr_29062_29138 = state_29042__$1;
(statearr_29062_29138[(2)] = null);

(statearr_29062_29138[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29043 === (21))){
var inst_28964 = (state_29042[(2)]);
var state_29042__$1 = state_29042;
var statearr_29066_29139 = state_29042__$1;
(statearr_29066_29139[(2)] = inst_28964);

(statearr_29066_29139[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29043 === (31))){
var inst_28990 = (state_29042[(11)]);
var inst_28994 = done.call(null,null);
var inst_28995 = cljs.core.async.untap_STAR_.call(null,m,inst_28990);
var state_29042__$1 = (function (){var statearr_29067 = state_29042;
(statearr_29067[(19)] = inst_28994);

return statearr_29067;
})();
var statearr_29068_29140 = state_29042__$1;
(statearr_29068_29140[(2)] = inst_28995);

(statearr_29068_29140[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29043 === (32))){
var inst_28983 = (state_29042[(9)]);
var inst_28982 = (state_29042[(20)]);
var inst_28984 = (state_29042[(21)]);
var inst_28985 = (state_29042[(12)]);
var inst_28997 = (state_29042[(2)]);
var inst_28998 = (inst_28985 + (1));
var tmp29063 = inst_28983;
var tmp29064 = inst_28982;
var tmp29065 = inst_28984;
var inst_28982__$1 = tmp29064;
var inst_28983__$1 = tmp29063;
var inst_28984__$1 = tmp29065;
var inst_28985__$1 = inst_28998;
var state_29042__$1 = (function (){var statearr_29069 = state_29042;
(statearr_29069[(9)] = inst_28983__$1);

(statearr_29069[(20)] = inst_28982__$1);

(statearr_29069[(22)] = inst_28997);

(statearr_29069[(21)] = inst_28984__$1);

(statearr_29069[(12)] = inst_28985__$1);

return statearr_29069;
})();
var statearr_29070_29141 = state_29042__$1;
(statearr_29070_29141[(2)] = null);

(statearr_29070_29141[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29043 === (40))){
var inst_29010 = (state_29042[(23)]);
var inst_29014 = done.call(null,null);
var inst_29015 = cljs.core.async.untap_STAR_.call(null,m,inst_29010);
var state_29042__$1 = (function (){var statearr_29071 = state_29042;
(statearr_29071[(24)] = inst_29014);

return statearr_29071;
})();
var statearr_29072_29142 = state_29042__$1;
(statearr_29072_29142[(2)] = inst_29015);

(statearr_29072_29142[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29043 === (33))){
var inst_29001 = (state_29042[(25)]);
var inst_29003 = cljs.core.chunked_seq_QMARK_.call(null,inst_29001);
var state_29042__$1 = state_29042;
if(inst_29003){
var statearr_29073_29143 = state_29042__$1;
(statearr_29073_29143[(1)] = (36));

} else {
var statearr_29074_29144 = state_29042__$1;
(statearr_29074_29144[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29043 === (13))){
var inst_28931 = (state_29042[(26)]);
var inst_28934 = cljs.core.async.close_BANG_.call(null,inst_28931);
var state_29042__$1 = state_29042;
var statearr_29075_29145 = state_29042__$1;
(statearr_29075_29145[(2)] = inst_28934);

(statearr_29075_29145[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29043 === (22))){
var inst_28954 = (state_29042[(8)]);
var inst_28957 = cljs.core.async.close_BANG_.call(null,inst_28954);
var state_29042__$1 = state_29042;
var statearr_29076_29146 = state_29042__$1;
(statearr_29076_29146[(2)] = inst_28957);

(statearr_29076_29146[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29043 === (36))){
var inst_29001 = (state_29042[(25)]);
var inst_29005 = cljs.core.chunk_first.call(null,inst_29001);
var inst_29006 = cljs.core.chunk_rest.call(null,inst_29001);
var inst_29007 = cljs.core.count.call(null,inst_29005);
var inst_28982 = inst_29006;
var inst_28983 = inst_29005;
var inst_28984 = inst_29007;
var inst_28985 = (0);
var state_29042__$1 = (function (){var statearr_29077 = state_29042;
(statearr_29077[(9)] = inst_28983);

(statearr_29077[(20)] = inst_28982);

(statearr_29077[(21)] = inst_28984);

(statearr_29077[(12)] = inst_28985);

return statearr_29077;
})();
var statearr_29078_29147 = state_29042__$1;
(statearr_29078_29147[(2)] = null);

(statearr_29078_29147[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29043 === (41))){
var inst_29001 = (state_29042[(25)]);
var inst_29017 = (state_29042[(2)]);
var inst_29018 = cljs.core.next.call(null,inst_29001);
var inst_28982 = inst_29018;
var inst_28983 = null;
var inst_28984 = (0);
var inst_28985 = (0);
var state_29042__$1 = (function (){var statearr_29079 = state_29042;
(statearr_29079[(9)] = inst_28983);

(statearr_29079[(20)] = inst_28982);

(statearr_29079[(27)] = inst_29017);

(statearr_29079[(21)] = inst_28984);

(statearr_29079[(12)] = inst_28985);

return statearr_29079;
})();
var statearr_29080_29148 = state_29042__$1;
(statearr_29080_29148[(2)] = null);

(statearr_29080_29148[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29043 === (43))){
var state_29042__$1 = state_29042;
var statearr_29081_29149 = state_29042__$1;
(statearr_29081_29149[(2)] = null);

(statearr_29081_29149[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29043 === (29))){
var inst_29026 = (state_29042[(2)]);
var state_29042__$1 = state_29042;
var statearr_29082_29150 = state_29042__$1;
(statearr_29082_29150[(2)] = inst_29026);

(statearr_29082_29150[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29043 === (44))){
var inst_29035 = (state_29042[(2)]);
var state_29042__$1 = (function (){var statearr_29083 = state_29042;
(statearr_29083[(28)] = inst_29035);

return statearr_29083;
})();
var statearr_29084_29151 = state_29042__$1;
(statearr_29084_29151[(2)] = null);

(statearr_29084_29151[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29043 === (6))){
var inst_28974 = (state_29042[(29)]);
var inst_28973 = cljs.core.deref.call(null,cs);
var inst_28974__$1 = cljs.core.keys.call(null,inst_28973);
var inst_28975 = cljs.core.count.call(null,inst_28974__$1);
var inst_28976 = cljs.core.reset_BANG_.call(null,dctr,inst_28975);
var inst_28981 = cljs.core.seq.call(null,inst_28974__$1);
var inst_28982 = inst_28981;
var inst_28983 = null;
var inst_28984 = (0);
var inst_28985 = (0);
var state_29042__$1 = (function (){var statearr_29085 = state_29042;
(statearr_29085[(9)] = inst_28983);

(statearr_29085[(20)] = inst_28982);

(statearr_29085[(30)] = inst_28976);

(statearr_29085[(29)] = inst_28974__$1);

(statearr_29085[(21)] = inst_28984);

(statearr_29085[(12)] = inst_28985);

return statearr_29085;
})();
var statearr_29086_29152 = state_29042__$1;
(statearr_29086_29152[(2)] = null);

(statearr_29086_29152[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29043 === (28))){
var inst_29001 = (state_29042[(25)]);
var inst_28982 = (state_29042[(20)]);
var inst_29001__$1 = cljs.core.seq.call(null,inst_28982);
var state_29042__$1 = (function (){var statearr_29087 = state_29042;
(statearr_29087[(25)] = inst_29001__$1);

return statearr_29087;
})();
if(inst_29001__$1){
var statearr_29088_29153 = state_29042__$1;
(statearr_29088_29153[(1)] = (33));

} else {
var statearr_29089_29154 = state_29042__$1;
(statearr_29089_29154[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29043 === (25))){
var inst_28984 = (state_29042[(21)]);
var inst_28985 = (state_29042[(12)]);
var inst_28987 = (inst_28985 < inst_28984);
var inst_28988 = inst_28987;
var state_29042__$1 = state_29042;
if(cljs.core.truth_(inst_28988)){
var statearr_29090_29155 = state_29042__$1;
(statearr_29090_29155[(1)] = (27));

} else {
var statearr_29091_29156 = state_29042__$1;
(statearr_29091_29156[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29043 === (34))){
var state_29042__$1 = state_29042;
var statearr_29092_29157 = state_29042__$1;
(statearr_29092_29157[(2)] = null);

(statearr_29092_29157[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29043 === (17))){
var state_29042__$1 = state_29042;
var statearr_29093_29158 = state_29042__$1;
(statearr_29093_29158[(2)] = null);

(statearr_29093_29158[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29043 === (3))){
var inst_29040 = (state_29042[(2)]);
var state_29042__$1 = state_29042;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29042__$1,inst_29040);
} else {
if((state_val_29043 === (12))){
var inst_28969 = (state_29042[(2)]);
var state_29042__$1 = state_29042;
var statearr_29094_29159 = state_29042__$1;
(statearr_29094_29159[(2)] = inst_28969);

(statearr_29094_29159[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29043 === (2))){
var state_29042__$1 = state_29042;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29042__$1,(4),ch);
} else {
if((state_val_29043 === (23))){
var state_29042__$1 = state_29042;
var statearr_29095_29160 = state_29042__$1;
(statearr_29095_29160[(2)] = null);

(statearr_29095_29160[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29043 === (35))){
var inst_29024 = (state_29042[(2)]);
var state_29042__$1 = state_29042;
var statearr_29096_29161 = state_29042__$1;
(statearr_29096_29161[(2)] = inst_29024);

(statearr_29096_29161[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29043 === (19))){
var inst_28941 = (state_29042[(7)]);
var inst_28945 = cljs.core.chunk_first.call(null,inst_28941);
var inst_28946 = cljs.core.chunk_rest.call(null,inst_28941);
var inst_28947 = cljs.core.count.call(null,inst_28945);
var inst_28919 = inst_28946;
var inst_28920 = inst_28945;
var inst_28921 = inst_28947;
var inst_28922 = (0);
var state_29042__$1 = (function (){var statearr_29097 = state_29042;
(statearr_29097[(14)] = inst_28921);

(statearr_29097[(15)] = inst_28920);

(statearr_29097[(16)] = inst_28919);

(statearr_29097[(17)] = inst_28922);

return statearr_29097;
})();
var statearr_29098_29162 = state_29042__$1;
(statearr_29098_29162[(2)] = null);

(statearr_29098_29162[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29043 === (11))){
var inst_28941 = (state_29042[(7)]);
var inst_28919 = (state_29042[(16)]);
var inst_28941__$1 = cljs.core.seq.call(null,inst_28919);
var state_29042__$1 = (function (){var statearr_29099 = state_29042;
(statearr_29099[(7)] = inst_28941__$1);

return statearr_29099;
})();
if(inst_28941__$1){
var statearr_29100_29163 = state_29042__$1;
(statearr_29100_29163[(1)] = (16));

} else {
var statearr_29101_29164 = state_29042__$1;
(statearr_29101_29164[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29043 === (9))){
var inst_28971 = (state_29042[(2)]);
var state_29042__$1 = state_29042;
var statearr_29102_29165 = state_29042__$1;
(statearr_29102_29165[(2)] = inst_28971);

(statearr_29102_29165[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29043 === (5))){
var inst_28917 = cljs.core.deref.call(null,cs);
var inst_28918 = cljs.core.seq.call(null,inst_28917);
var inst_28919 = inst_28918;
var inst_28920 = null;
var inst_28921 = (0);
var inst_28922 = (0);
var state_29042__$1 = (function (){var statearr_29103 = state_29042;
(statearr_29103[(14)] = inst_28921);

(statearr_29103[(15)] = inst_28920);

(statearr_29103[(16)] = inst_28919);

(statearr_29103[(17)] = inst_28922);

return statearr_29103;
})();
var statearr_29104_29166 = state_29042__$1;
(statearr_29104_29166[(2)] = null);

(statearr_29104_29166[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29043 === (14))){
var state_29042__$1 = state_29042;
var statearr_29105_29167 = state_29042__$1;
(statearr_29105_29167[(2)] = null);

(statearr_29105_29167[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29043 === (45))){
var inst_29032 = (state_29042[(2)]);
var state_29042__$1 = state_29042;
var statearr_29106_29168 = state_29042__$1;
(statearr_29106_29168[(2)] = inst_29032);

(statearr_29106_29168[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29043 === (26))){
var inst_28974 = (state_29042[(29)]);
var inst_29028 = (state_29042[(2)]);
var inst_29029 = cljs.core.seq.call(null,inst_28974);
var state_29042__$1 = (function (){var statearr_29107 = state_29042;
(statearr_29107[(31)] = inst_29028);

return statearr_29107;
})();
if(inst_29029){
var statearr_29108_29169 = state_29042__$1;
(statearr_29108_29169[(1)] = (42));

} else {
var statearr_29109_29170 = state_29042__$1;
(statearr_29109_29170[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29043 === (16))){
var inst_28941 = (state_29042[(7)]);
var inst_28943 = cljs.core.chunked_seq_QMARK_.call(null,inst_28941);
var state_29042__$1 = state_29042;
if(inst_28943){
var statearr_29110_29171 = state_29042__$1;
(statearr_29110_29171[(1)] = (19));

} else {
var statearr_29111_29172 = state_29042__$1;
(statearr_29111_29172[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29043 === (38))){
var inst_29021 = (state_29042[(2)]);
var state_29042__$1 = state_29042;
var statearr_29112_29173 = state_29042__$1;
(statearr_29112_29173[(2)] = inst_29021);

(statearr_29112_29173[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29043 === (30))){
var state_29042__$1 = state_29042;
var statearr_29113_29174 = state_29042__$1;
(statearr_29113_29174[(2)] = null);

(statearr_29113_29174[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29043 === (10))){
var inst_28920 = (state_29042[(15)]);
var inst_28922 = (state_29042[(17)]);
var inst_28930 = cljs.core._nth.call(null,inst_28920,inst_28922);
var inst_28931 = cljs.core.nth.call(null,inst_28930,(0),null);
var inst_28932 = cljs.core.nth.call(null,inst_28930,(1),null);
var state_29042__$1 = (function (){var statearr_29114 = state_29042;
(statearr_29114[(26)] = inst_28931);

return statearr_29114;
})();
if(cljs.core.truth_(inst_28932)){
var statearr_29115_29175 = state_29042__$1;
(statearr_29115_29175[(1)] = (13));

} else {
var statearr_29116_29176 = state_29042__$1;
(statearr_29116_29176[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29043 === (18))){
var inst_28967 = (state_29042[(2)]);
var state_29042__$1 = state_29042;
var statearr_29117_29177 = state_29042__$1;
(statearr_29117_29177[(2)] = inst_28967);

(statearr_29117_29177[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29043 === (42))){
var state_29042__$1 = state_29042;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29042__$1,(45),dchan);
} else {
if((state_val_29043 === (37))){
var inst_29001 = (state_29042[(25)]);
var inst_29010 = (state_29042[(23)]);
var inst_28910 = (state_29042[(10)]);
var inst_29010__$1 = cljs.core.first.call(null,inst_29001);
var inst_29011 = cljs.core.async.put_BANG_.call(null,inst_29010__$1,inst_28910,done);
var state_29042__$1 = (function (){var statearr_29118 = state_29042;
(statearr_29118[(23)] = inst_29010__$1);

return statearr_29118;
})();
if(cljs.core.truth_(inst_29011)){
var statearr_29119_29178 = state_29042__$1;
(statearr_29119_29178[(1)] = (39));

} else {
var statearr_29120_29179 = state_29042__$1;
(statearr_29120_29179[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29043 === (8))){
var inst_28921 = (state_29042[(14)]);
var inst_28922 = (state_29042[(17)]);
var inst_28924 = (inst_28922 < inst_28921);
var inst_28925 = inst_28924;
var state_29042__$1 = state_29042;
if(cljs.core.truth_(inst_28925)){
var statearr_29121_29180 = state_29042__$1;
(statearr_29121_29180[(1)] = (10));

} else {
var statearr_29122_29181 = state_29042__$1;
(statearr_29122_29181[(1)] = (11));

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
});
return (function() {
var cljs$core$async$mult_$_state_machine__28210__auto__ = null;
var cljs$core$async$mult_$_state_machine__28210__auto____0 = (function (){
var statearr_29123 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29123[(0)] = cljs$core$async$mult_$_state_machine__28210__auto__);

(statearr_29123[(1)] = (1));

return statearr_29123;
});
var cljs$core$async$mult_$_state_machine__28210__auto____1 = (function (state_29042){
while(true){
var ret_value__28211__auto__ = (function (){try{while(true){
var result__28212__auto__ = switch__28209__auto__.call(null,state_29042);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28212__auto__;
}
break;
}
}catch (e29124){if((e29124 instanceof Object)){
var ex__28213__auto__ = e29124;
var statearr_29125_29182 = state_29042;
(statearr_29125_29182[(5)] = ex__28213__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29042);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29124;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29183 = state_29042;
state_29042 = G__29183;
continue;
} else {
return ret_value__28211__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__28210__auto__ = function(state_29042){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__28210__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__28210__auto____1.call(this,state_29042);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__28210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__28210__auto____0;
cljs$core$async$mult_$_state_machine__28210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__28210__auto____1;
return cljs$core$async$mult_$_state_machine__28210__auto__;
})()
})();
var state__28306__auto__ = (function (){var statearr_29126 = f__28305__auto__.call(null);
(statearr_29126[(6)] = c__28304__auto___29127);

return statearr_29126;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28306__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__29185 = arguments.length;
switch (G__29185) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

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

var cljs$core$async$Mix$admix_STAR_$dyn_29187 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,ch);
} else {
var m__4426__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_29187.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_29188 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,ch);
} else {
var m__4426__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_29188.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_29189 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m);
} else {
var m__4426__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_29189.call(null,m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_29190 = (function (m,state_map){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,state_map);
} else {
var m__4426__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_29190.call(null,m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_29191 = (function (m,mode){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,mode);
} else {
var m__4426__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_29191.call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29202 = arguments.length;
var i__4737__auto___29203 = (0);
while(true){
if((i__4737__auto___29203 < len__4736__auto___29202)){
args__4742__auto__.push((arguments[i__4737__auto___29203]));

var G__29204 = (i__4737__auto___29203 + (1));
i__4737__auto___29203 = G__29204;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__29196){
var map__29197 = p__29196;
var map__29197__$1 = (((((!((map__29197 == null))))?(((((map__29197.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29197.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29197):map__29197);
var opts = map__29197__$1;
var statearr_29199_29205 = state;
(statearr_29199_29205[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts.call(null,(function (val){
var statearr_29200_29206 = state;
(statearr_29200_29206[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_29201_29207 = state;
(statearr_29201_29207[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq29192){
var G__29193 = cljs.core.first.call(null,seq29192);
var seq29192__$1 = cljs.core.next.call(null,seq29192);
var G__29194 = cljs.core.first.call(null,seq29192__$1);
var seq29192__$2 = cljs.core.next.call(null,seq29192__$1);
var G__29195 = cljs.core.first.call(null,seq29192__$2);
var seq29192__$3 = cljs.core.next.call(null,seq29192__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29193,G__29194,G__29195,seq29192__$3);
}));

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
var changed = (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv.call(null,(function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_.call(null,solos))))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29208 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29208 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta29209){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta29209 = meta29209;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29208.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29210,meta29209__$1){
var self__ = this;
var _29210__$1 = this;
return (new cljs.core.async.t_cljs$core$async29208(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta29209__$1));
}));

(cljs.core.async.t_cljs$core$async29208.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29210){
var self__ = this;
var _29210__$1 = this;
return self__.meta29209;
}));

(cljs.core.async.t_cljs$core$async29208.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29208.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async29208.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29208.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async29208.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async29208.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async29208.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async29208.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async29208.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta29209","meta29209",-775147423,null)], null);
}));

(cljs.core.async.t_cljs$core$async29208.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29208.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29208");

(cljs.core.async.t_cljs$core$async29208.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async29208");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29208.
 */
cljs.core.async.__GT_t_cljs$core$async29208 = (function cljs$core$async$mix_$___GT_t_cljs$core$async29208(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta29209){
return (new cljs.core.async.t_cljs$core$async29208(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta29209));
});

}

return (new cljs.core.async.t_cljs$core$async29208(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28304__auto___29372 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__28305__auto__ = (function (){var switch__28209__auto__ = (function (state_29312){
var state_val_29313 = (state_29312[(1)]);
if((state_val_29313 === (7))){
var inst_29227 = (state_29312[(2)]);
var state_29312__$1 = state_29312;
var statearr_29314_29373 = state_29312__$1;
(statearr_29314_29373[(2)] = inst_29227);

(statearr_29314_29373[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29313 === (20))){
var inst_29239 = (state_29312[(7)]);
var state_29312__$1 = state_29312;
var statearr_29315_29374 = state_29312__$1;
(statearr_29315_29374[(2)] = inst_29239);

(statearr_29315_29374[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29313 === (27))){
var state_29312__$1 = state_29312;
var statearr_29316_29375 = state_29312__$1;
(statearr_29316_29375[(2)] = null);

(statearr_29316_29375[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29313 === (1))){
var inst_29214 = (state_29312[(8)]);
var inst_29214__$1 = calc_state.call(null);
var inst_29216 = (inst_29214__$1 == null);
var inst_29217 = cljs.core.not.call(null,inst_29216);
var state_29312__$1 = (function (){var statearr_29317 = state_29312;
(statearr_29317[(8)] = inst_29214__$1);

return statearr_29317;
})();
if(inst_29217){
var statearr_29318_29376 = state_29312__$1;
(statearr_29318_29376[(1)] = (2));

} else {
var statearr_29319_29377 = state_29312__$1;
(statearr_29319_29377[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29313 === (24))){
var inst_29263 = (state_29312[(9)]);
var inst_29272 = (state_29312[(10)]);
var inst_29286 = (state_29312[(11)]);
var inst_29286__$1 = inst_29263.call(null,inst_29272);
var state_29312__$1 = (function (){var statearr_29320 = state_29312;
(statearr_29320[(11)] = inst_29286__$1);

return statearr_29320;
})();
if(cljs.core.truth_(inst_29286__$1)){
var statearr_29321_29378 = state_29312__$1;
(statearr_29321_29378[(1)] = (29));

} else {
var statearr_29322_29379 = state_29312__$1;
(statearr_29322_29379[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29313 === (4))){
var inst_29230 = (state_29312[(2)]);
var state_29312__$1 = state_29312;
if(cljs.core.truth_(inst_29230)){
var statearr_29323_29380 = state_29312__$1;
(statearr_29323_29380[(1)] = (8));

} else {
var statearr_29324_29381 = state_29312__$1;
(statearr_29324_29381[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29313 === (15))){
var inst_29257 = (state_29312[(2)]);
var state_29312__$1 = state_29312;
if(cljs.core.truth_(inst_29257)){
var statearr_29325_29382 = state_29312__$1;
(statearr_29325_29382[(1)] = (19));

} else {
var statearr_29326_29383 = state_29312__$1;
(statearr_29326_29383[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29313 === (21))){
var inst_29262 = (state_29312[(12)]);
var inst_29262__$1 = (state_29312[(2)]);
var inst_29263 = cljs.core.get.call(null,inst_29262__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_29264 = cljs.core.get.call(null,inst_29262__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_29265 = cljs.core.get.call(null,inst_29262__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_29312__$1 = (function (){var statearr_29327 = state_29312;
(statearr_29327[(12)] = inst_29262__$1);

(statearr_29327[(9)] = inst_29263);

(statearr_29327[(13)] = inst_29264);

return statearr_29327;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_29312__$1,(22),inst_29265);
} else {
if((state_val_29313 === (31))){
var inst_29294 = (state_29312[(2)]);
var state_29312__$1 = state_29312;
if(cljs.core.truth_(inst_29294)){
var statearr_29328_29384 = state_29312__$1;
(statearr_29328_29384[(1)] = (32));

} else {
var statearr_29329_29385 = state_29312__$1;
(statearr_29329_29385[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29313 === (32))){
var inst_29271 = (state_29312[(14)]);
var state_29312__$1 = state_29312;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29312__$1,(35),out,inst_29271);
} else {
if((state_val_29313 === (33))){
var inst_29262 = (state_29312[(12)]);
var inst_29239 = inst_29262;
var state_29312__$1 = (function (){var statearr_29330 = state_29312;
(statearr_29330[(7)] = inst_29239);

return statearr_29330;
})();
var statearr_29331_29386 = state_29312__$1;
(statearr_29331_29386[(2)] = null);

(statearr_29331_29386[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29313 === (13))){
var inst_29239 = (state_29312[(7)]);
var inst_29246 = inst_29239.cljs$lang$protocol_mask$partition0$;
var inst_29247 = (inst_29246 & (64));
var inst_29248 = inst_29239.cljs$core$ISeq$;
var inst_29249 = (cljs.core.PROTOCOL_SENTINEL === inst_29248);
var inst_29250 = ((inst_29247) || (inst_29249));
var state_29312__$1 = state_29312;
if(cljs.core.truth_(inst_29250)){
var statearr_29332_29387 = state_29312__$1;
(statearr_29332_29387[(1)] = (16));

} else {
var statearr_29333_29388 = state_29312__$1;
(statearr_29333_29388[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29313 === (22))){
var inst_29271 = (state_29312[(14)]);
var inst_29272 = (state_29312[(10)]);
var inst_29270 = (state_29312[(2)]);
var inst_29271__$1 = cljs.core.nth.call(null,inst_29270,(0),null);
var inst_29272__$1 = cljs.core.nth.call(null,inst_29270,(1),null);
var inst_29273 = (inst_29271__$1 == null);
var inst_29274 = cljs.core._EQ_.call(null,inst_29272__$1,change);
var inst_29275 = ((inst_29273) || (inst_29274));
var state_29312__$1 = (function (){var statearr_29334 = state_29312;
(statearr_29334[(14)] = inst_29271__$1);

(statearr_29334[(10)] = inst_29272__$1);

return statearr_29334;
})();
if(cljs.core.truth_(inst_29275)){
var statearr_29335_29389 = state_29312__$1;
(statearr_29335_29389[(1)] = (23));

} else {
var statearr_29336_29390 = state_29312__$1;
(statearr_29336_29390[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29313 === (36))){
var inst_29262 = (state_29312[(12)]);
var inst_29239 = inst_29262;
var state_29312__$1 = (function (){var statearr_29337 = state_29312;
(statearr_29337[(7)] = inst_29239);

return statearr_29337;
})();
var statearr_29338_29391 = state_29312__$1;
(statearr_29338_29391[(2)] = null);

(statearr_29338_29391[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29313 === (29))){
var inst_29286 = (state_29312[(11)]);
var state_29312__$1 = state_29312;
var statearr_29339_29392 = state_29312__$1;
(statearr_29339_29392[(2)] = inst_29286);

(statearr_29339_29392[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29313 === (6))){
var state_29312__$1 = state_29312;
var statearr_29340_29393 = state_29312__$1;
(statearr_29340_29393[(2)] = false);

(statearr_29340_29393[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29313 === (28))){
var inst_29282 = (state_29312[(2)]);
var inst_29283 = calc_state.call(null);
var inst_29239 = inst_29283;
var state_29312__$1 = (function (){var statearr_29341 = state_29312;
(statearr_29341[(15)] = inst_29282);

(statearr_29341[(7)] = inst_29239);

return statearr_29341;
})();
var statearr_29342_29394 = state_29312__$1;
(statearr_29342_29394[(2)] = null);

(statearr_29342_29394[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29313 === (25))){
var inst_29308 = (state_29312[(2)]);
var state_29312__$1 = state_29312;
var statearr_29343_29395 = state_29312__$1;
(statearr_29343_29395[(2)] = inst_29308);

(statearr_29343_29395[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29313 === (34))){
var inst_29306 = (state_29312[(2)]);
var state_29312__$1 = state_29312;
var statearr_29344_29396 = state_29312__$1;
(statearr_29344_29396[(2)] = inst_29306);

(statearr_29344_29396[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29313 === (17))){
var state_29312__$1 = state_29312;
var statearr_29345_29397 = state_29312__$1;
(statearr_29345_29397[(2)] = false);

(statearr_29345_29397[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29313 === (3))){
var state_29312__$1 = state_29312;
var statearr_29346_29398 = state_29312__$1;
(statearr_29346_29398[(2)] = false);

(statearr_29346_29398[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29313 === (12))){
var inst_29310 = (state_29312[(2)]);
var state_29312__$1 = state_29312;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29312__$1,inst_29310);
} else {
if((state_val_29313 === (2))){
var inst_29214 = (state_29312[(8)]);
var inst_29219 = inst_29214.cljs$lang$protocol_mask$partition0$;
var inst_29220 = (inst_29219 & (64));
var inst_29221 = inst_29214.cljs$core$ISeq$;
var inst_29222 = (cljs.core.PROTOCOL_SENTINEL === inst_29221);
var inst_29223 = ((inst_29220) || (inst_29222));
var state_29312__$1 = state_29312;
if(cljs.core.truth_(inst_29223)){
var statearr_29347_29399 = state_29312__$1;
(statearr_29347_29399[(1)] = (5));

} else {
var statearr_29348_29400 = state_29312__$1;
(statearr_29348_29400[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29313 === (23))){
var inst_29271 = (state_29312[(14)]);
var inst_29277 = (inst_29271 == null);
var state_29312__$1 = state_29312;
if(cljs.core.truth_(inst_29277)){
var statearr_29349_29401 = state_29312__$1;
(statearr_29349_29401[(1)] = (26));

} else {
var statearr_29350_29402 = state_29312__$1;
(statearr_29350_29402[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29313 === (35))){
var inst_29297 = (state_29312[(2)]);
var state_29312__$1 = state_29312;
if(cljs.core.truth_(inst_29297)){
var statearr_29351_29403 = state_29312__$1;
(statearr_29351_29403[(1)] = (36));

} else {
var statearr_29352_29404 = state_29312__$1;
(statearr_29352_29404[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29313 === (19))){
var inst_29239 = (state_29312[(7)]);
var inst_29259 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29239);
var state_29312__$1 = state_29312;
var statearr_29353_29405 = state_29312__$1;
(statearr_29353_29405[(2)] = inst_29259);

(statearr_29353_29405[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29313 === (11))){
var inst_29239 = (state_29312[(7)]);
var inst_29243 = (inst_29239 == null);
var inst_29244 = cljs.core.not.call(null,inst_29243);
var state_29312__$1 = state_29312;
if(inst_29244){
var statearr_29354_29406 = state_29312__$1;
(statearr_29354_29406[(1)] = (13));

} else {
var statearr_29355_29407 = state_29312__$1;
(statearr_29355_29407[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29313 === (9))){
var inst_29214 = (state_29312[(8)]);
var state_29312__$1 = state_29312;
var statearr_29356_29408 = state_29312__$1;
(statearr_29356_29408[(2)] = inst_29214);

(statearr_29356_29408[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29313 === (5))){
var state_29312__$1 = state_29312;
var statearr_29357_29409 = state_29312__$1;
(statearr_29357_29409[(2)] = true);

(statearr_29357_29409[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29313 === (14))){
var state_29312__$1 = state_29312;
var statearr_29358_29410 = state_29312__$1;
(statearr_29358_29410[(2)] = false);

(statearr_29358_29410[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29313 === (26))){
var inst_29272 = (state_29312[(10)]);
var inst_29279 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_29272);
var state_29312__$1 = state_29312;
var statearr_29359_29411 = state_29312__$1;
(statearr_29359_29411[(2)] = inst_29279);

(statearr_29359_29411[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29313 === (16))){
var state_29312__$1 = state_29312;
var statearr_29360_29412 = state_29312__$1;
(statearr_29360_29412[(2)] = true);

(statearr_29360_29412[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29313 === (38))){
var inst_29302 = (state_29312[(2)]);
var state_29312__$1 = state_29312;
var statearr_29361_29413 = state_29312__$1;
(statearr_29361_29413[(2)] = inst_29302);

(statearr_29361_29413[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29313 === (30))){
var inst_29263 = (state_29312[(9)]);
var inst_29264 = (state_29312[(13)]);
var inst_29272 = (state_29312[(10)]);
var inst_29289 = cljs.core.empty_QMARK_.call(null,inst_29263);
var inst_29290 = inst_29264.call(null,inst_29272);
var inst_29291 = cljs.core.not.call(null,inst_29290);
var inst_29292 = ((inst_29289) && (inst_29291));
var state_29312__$1 = state_29312;
var statearr_29362_29414 = state_29312__$1;
(statearr_29362_29414[(2)] = inst_29292);

(statearr_29362_29414[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29313 === (10))){
var inst_29214 = (state_29312[(8)]);
var inst_29235 = (state_29312[(2)]);
var inst_29236 = cljs.core.get.call(null,inst_29235,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_29237 = cljs.core.get.call(null,inst_29235,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_29238 = cljs.core.get.call(null,inst_29235,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_29239 = inst_29214;
var state_29312__$1 = (function (){var statearr_29363 = state_29312;
(statearr_29363[(7)] = inst_29239);

(statearr_29363[(16)] = inst_29237);

(statearr_29363[(17)] = inst_29236);

(statearr_29363[(18)] = inst_29238);

return statearr_29363;
})();
var statearr_29364_29415 = state_29312__$1;
(statearr_29364_29415[(2)] = null);

(statearr_29364_29415[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29313 === (18))){
var inst_29254 = (state_29312[(2)]);
var state_29312__$1 = state_29312;
var statearr_29365_29416 = state_29312__$1;
(statearr_29365_29416[(2)] = inst_29254);

(statearr_29365_29416[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29313 === (37))){
var state_29312__$1 = state_29312;
var statearr_29366_29417 = state_29312__$1;
(statearr_29366_29417[(2)] = null);

(statearr_29366_29417[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29313 === (8))){
var inst_29214 = (state_29312[(8)]);
var inst_29232 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29214);
var state_29312__$1 = state_29312;
var statearr_29367_29418 = state_29312__$1;
(statearr_29367_29418[(2)] = inst_29232);

(statearr_29367_29418[(1)] = (10));


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
});
return (function() {
var cljs$core$async$mix_$_state_machine__28210__auto__ = null;
var cljs$core$async$mix_$_state_machine__28210__auto____0 = (function (){
var statearr_29368 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29368[(0)] = cljs$core$async$mix_$_state_machine__28210__auto__);

(statearr_29368[(1)] = (1));

return statearr_29368;
});
var cljs$core$async$mix_$_state_machine__28210__auto____1 = (function (state_29312){
while(true){
var ret_value__28211__auto__ = (function (){try{while(true){
var result__28212__auto__ = switch__28209__auto__.call(null,state_29312);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28212__auto__;
}
break;
}
}catch (e29369){if((e29369 instanceof Object)){
var ex__28213__auto__ = e29369;
var statearr_29370_29419 = state_29312;
(statearr_29370_29419[(5)] = ex__28213__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29312);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29369;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29420 = state_29312;
state_29312 = G__29420;
continue;
} else {
return ret_value__28211__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__28210__auto__ = function(state_29312){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__28210__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__28210__auto____1.call(this,state_29312);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__28210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__28210__auto____0;
cljs$core$async$mix_$_state_machine__28210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__28210__auto____1;
return cljs$core$async$mix_$_state_machine__28210__auto__;
})()
})();
var state__28306__auto__ = (function (){var statearr_29371 = f__28305__auto__.call(null);
(statearr_29371[(6)] = c__28304__auto___29372);

return statearr_29371;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28306__auto__);
}));


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

var cljs$core$async$Pub$sub_STAR_$dyn_29423 = (function (p,v,ch,close_QMARK_){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4426__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_29423.call(null,p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_29424 = (function (p,v,ch){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,p,v,ch);
} else {
var m__4426__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_29424.call(null,p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_29425 = (function() {
var G__29426 = null;
var G__29426__1 = (function (p){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,p);
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
});
var G__29426__2 = (function (p,v){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,p,v);
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
});
G__29426 = function(p,v){
switch(arguments.length){
case 1:
return G__29426__1.call(this,p);
case 2:
return G__29426__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__29426.cljs$core$IFn$_invoke$arity$1 = G__29426__1;
G__29426.cljs$core$IFn$_invoke$arity$2 = G__29426__2;
return G__29426;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__29422 = arguments.length;
switch (G__29422) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_29425.call(null,p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_29425.call(null,p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


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
var G__29430 = arguments.length;
switch (G__29430) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,(function (p1__29428_SHARP_){
if(cljs.core.truth_(p1__29428_SHARP_.call(null,topic))){
return p1__29428_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__29428_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29431 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29431 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta29432){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta29432 = meta29432;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29431.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29433,meta29432__$1){
var self__ = this;
var _29433__$1 = this;
return (new cljs.core.async.t_cljs$core$async29431(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta29432__$1));
}));

(cljs.core.async.t_cljs$core$async29431.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29433){
var self__ = this;
var _29433__$1 = this;
return self__.meta29432;
}));

(cljs.core.async.t_cljs$core$async29431.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29431.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async29431.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29431.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async29431.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async29431.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async29431.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async29431.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta29432","meta29432",-235848317,null)], null);
}));

(cljs.core.async.t_cljs$core$async29431.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29431.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29431");

(cljs.core.async.t_cljs$core$async29431.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async29431");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29431.
 */
cljs.core.async.__GT_t_cljs$core$async29431 = (function cljs$core$async$__GT_t_cljs$core$async29431(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta29432){
return (new cljs.core.async.t_cljs$core$async29431(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta29432));
});

}

return (new cljs.core.async.t_cljs$core$async29431(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28304__auto___29551 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__28305__auto__ = (function (){var switch__28209__auto__ = (function (state_29505){
var state_val_29506 = (state_29505[(1)]);
if((state_val_29506 === (7))){
var inst_29501 = (state_29505[(2)]);
var state_29505__$1 = state_29505;
var statearr_29507_29552 = state_29505__$1;
(statearr_29507_29552[(2)] = inst_29501);

(statearr_29507_29552[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29506 === (20))){
var state_29505__$1 = state_29505;
var statearr_29508_29553 = state_29505__$1;
(statearr_29508_29553[(2)] = null);

(statearr_29508_29553[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29506 === (1))){
var state_29505__$1 = state_29505;
var statearr_29509_29554 = state_29505__$1;
(statearr_29509_29554[(2)] = null);

(statearr_29509_29554[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29506 === (24))){
var inst_29484 = (state_29505[(7)]);
var inst_29493 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_29484);
var state_29505__$1 = state_29505;
var statearr_29510_29555 = state_29505__$1;
(statearr_29510_29555[(2)] = inst_29493);

(statearr_29510_29555[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29506 === (4))){
var inst_29436 = (state_29505[(8)]);
var inst_29436__$1 = (state_29505[(2)]);
var inst_29437 = (inst_29436__$1 == null);
var state_29505__$1 = (function (){var statearr_29511 = state_29505;
(statearr_29511[(8)] = inst_29436__$1);

return statearr_29511;
})();
if(cljs.core.truth_(inst_29437)){
var statearr_29512_29556 = state_29505__$1;
(statearr_29512_29556[(1)] = (5));

} else {
var statearr_29513_29557 = state_29505__$1;
(statearr_29513_29557[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29506 === (15))){
var inst_29478 = (state_29505[(2)]);
var state_29505__$1 = state_29505;
var statearr_29514_29558 = state_29505__$1;
(statearr_29514_29558[(2)] = inst_29478);

(statearr_29514_29558[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29506 === (21))){
var inst_29498 = (state_29505[(2)]);
var state_29505__$1 = (function (){var statearr_29515 = state_29505;
(statearr_29515[(9)] = inst_29498);

return statearr_29515;
})();
var statearr_29516_29559 = state_29505__$1;
(statearr_29516_29559[(2)] = null);

(statearr_29516_29559[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29506 === (13))){
var inst_29460 = (state_29505[(10)]);
var inst_29462 = cljs.core.chunked_seq_QMARK_.call(null,inst_29460);
var state_29505__$1 = state_29505;
if(inst_29462){
var statearr_29517_29560 = state_29505__$1;
(statearr_29517_29560[(1)] = (16));

} else {
var statearr_29518_29561 = state_29505__$1;
(statearr_29518_29561[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29506 === (22))){
var inst_29490 = (state_29505[(2)]);
var state_29505__$1 = state_29505;
if(cljs.core.truth_(inst_29490)){
var statearr_29519_29562 = state_29505__$1;
(statearr_29519_29562[(1)] = (23));

} else {
var statearr_29520_29563 = state_29505__$1;
(statearr_29520_29563[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29506 === (6))){
var inst_29486 = (state_29505[(11)]);
var inst_29484 = (state_29505[(7)]);
var inst_29436 = (state_29505[(8)]);
var inst_29484__$1 = topic_fn.call(null,inst_29436);
var inst_29485 = cljs.core.deref.call(null,mults);
var inst_29486__$1 = cljs.core.get.call(null,inst_29485,inst_29484__$1);
var state_29505__$1 = (function (){var statearr_29521 = state_29505;
(statearr_29521[(11)] = inst_29486__$1);

(statearr_29521[(7)] = inst_29484__$1);

return statearr_29521;
})();
if(cljs.core.truth_(inst_29486__$1)){
var statearr_29522_29564 = state_29505__$1;
(statearr_29522_29564[(1)] = (19));

} else {
var statearr_29523_29565 = state_29505__$1;
(statearr_29523_29565[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29506 === (25))){
var inst_29495 = (state_29505[(2)]);
var state_29505__$1 = state_29505;
var statearr_29524_29566 = state_29505__$1;
(statearr_29524_29566[(2)] = inst_29495);

(statearr_29524_29566[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29506 === (17))){
var inst_29460 = (state_29505[(10)]);
var inst_29469 = cljs.core.first.call(null,inst_29460);
var inst_29470 = cljs.core.async.muxch_STAR_.call(null,inst_29469);
var inst_29471 = cljs.core.async.close_BANG_.call(null,inst_29470);
var inst_29472 = cljs.core.next.call(null,inst_29460);
var inst_29446 = inst_29472;
var inst_29447 = null;
var inst_29448 = (0);
var inst_29449 = (0);
var state_29505__$1 = (function (){var statearr_29525 = state_29505;
(statearr_29525[(12)] = inst_29449);

(statearr_29525[(13)] = inst_29446);

(statearr_29525[(14)] = inst_29447);

(statearr_29525[(15)] = inst_29448);

(statearr_29525[(16)] = inst_29471);

return statearr_29525;
})();
var statearr_29526_29567 = state_29505__$1;
(statearr_29526_29567[(2)] = null);

(statearr_29526_29567[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29506 === (3))){
var inst_29503 = (state_29505[(2)]);
var state_29505__$1 = state_29505;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29505__$1,inst_29503);
} else {
if((state_val_29506 === (12))){
var inst_29480 = (state_29505[(2)]);
var state_29505__$1 = state_29505;
var statearr_29527_29568 = state_29505__$1;
(statearr_29527_29568[(2)] = inst_29480);

(statearr_29527_29568[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29506 === (2))){
var state_29505__$1 = state_29505;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29505__$1,(4),ch);
} else {
if((state_val_29506 === (23))){
var state_29505__$1 = state_29505;
var statearr_29528_29569 = state_29505__$1;
(statearr_29528_29569[(2)] = null);

(statearr_29528_29569[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29506 === (19))){
var inst_29486 = (state_29505[(11)]);
var inst_29436 = (state_29505[(8)]);
var inst_29488 = cljs.core.async.muxch_STAR_.call(null,inst_29486);
var state_29505__$1 = state_29505;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29505__$1,(22),inst_29488,inst_29436);
} else {
if((state_val_29506 === (11))){
var inst_29446 = (state_29505[(13)]);
var inst_29460 = (state_29505[(10)]);
var inst_29460__$1 = cljs.core.seq.call(null,inst_29446);
var state_29505__$1 = (function (){var statearr_29529 = state_29505;
(statearr_29529[(10)] = inst_29460__$1);

return statearr_29529;
})();
if(inst_29460__$1){
var statearr_29530_29570 = state_29505__$1;
(statearr_29530_29570[(1)] = (13));

} else {
var statearr_29531_29571 = state_29505__$1;
(statearr_29531_29571[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29506 === (9))){
var inst_29482 = (state_29505[(2)]);
var state_29505__$1 = state_29505;
var statearr_29532_29572 = state_29505__$1;
(statearr_29532_29572[(2)] = inst_29482);

(statearr_29532_29572[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29506 === (5))){
var inst_29443 = cljs.core.deref.call(null,mults);
var inst_29444 = cljs.core.vals.call(null,inst_29443);
var inst_29445 = cljs.core.seq.call(null,inst_29444);
var inst_29446 = inst_29445;
var inst_29447 = null;
var inst_29448 = (0);
var inst_29449 = (0);
var state_29505__$1 = (function (){var statearr_29533 = state_29505;
(statearr_29533[(12)] = inst_29449);

(statearr_29533[(13)] = inst_29446);

(statearr_29533[(14)] = inst_29447);

(statearr_29533[(15)] = inst_29448);

return statearr_29533;
})();
var statearr_29534_29573 = state_29505__$1;
(statearr_29534_29573[(2)] = null);

(statearr_29534_29573[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29506 === (14))){
var state_29505__$1 = state_29505;
var statearr_29538_29574 = state_29505__$1;
(statearr_29538_29574[(2)] = null);

(statearr_29538_29574[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29506 === (16))){
var inst_29460 = (state_29505[(10)]);
var inst_29464 = cljs.core.chunk_first.call(null,inst_29460);
var inst_29465 = cljs.core.chunk_rest.call(null,inst_29460);
var inst_29466 = cljs.core.count.call(null,inst_29464);
var inst_29446 = inst_29465;
var inst_29447 = inst_29464;
var inst_29448 = inst_29466;
var inst_29449 = (0);
var state_29505__$1 = (function (){var statearr_29539 = state_29505;
(statearr_29539[(12)] = inst_29449);

(statearr_29539[(13)] = inst_29446);

(statearr_29539[(14)] = inst_29447);

(statearr_29539[(15)] = inst_29448);

return statearr_29539;
})();
var statearr_29540_29575 = state_29505__$1;
(statearr_29540_29575[(2)] = null);

(statearr_29540_29575[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29506 === (10))){
var inst_29449 = (state_29505[(12)]);
var inst_29446 = (state_29505[(13)]);
var inst_29447 = (state_29505[(14)]);
var inst_29448 = (state_29505[(15)]);
var inst_29454 = cljs.core._nth.call(null,inst_29447,inst_29449);
var inst_29455 = cljs.core.async.muxch_STAR_.call(null,inst_29454);
var inst_29456 = cljs.core.async.close_BANG_.call(null,inst_29455);
var inst_29457 = (inst_29449 + (1));
var tmp29535 = inst_29446;
var tmp29536 = inst_29447;
var tmp29537 = inst_29448;
var inst_29446__$1 = tmp29535;
var inst_29447__$1 = tmp29536;
var inst_29448__$1 = tmp29537;
var inst_29449__$1 = inst_29457;
var state_29505__$1 = (function (){var statearr_29541 = state_29505;
(statearr_29541[(12)] = inst_29449__$1);

(statearr_29541[(13)] = inst_29446__$1);

(statearr_29541[(14)] = inst_29447__$1);

(statearr_29541[(17)] = inst_29456);

(statearr_29541[(15)] = inst_29448__$1);

return statearr_29541;
})();
var statearr_29542_29576 = state_29505__$1;
(statearr_29542_29576[(2)] = null);

(statearr_29542_29576[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29506 === (18))){
var inst_29475 = (state_29505[(2)]);
var state_29505__$1 = state_29505;
var statearr_29543_29577 = state_29505__$1;
(statearr_29543_29577[(2)] = inst_29475);

(statearr_29543_29577[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29506 === (8))){
var inst_29449 = (state_29505[(12)]);
var inst_29448 = (state_29505[(15)]);
var inst_29451 = (inst_29449 < inst_29448);
var inst_29452 = inst_29451;
var state_29505__$1 = state_29505;
if(cljs.core.truth_(inst_29452)){
var statearr_29544_29578 = state_29505__$1;
(statearr_29544_29578[(1)] = (10));

} else {
var statearr_29545_29579 = state_29505__$1;
(statearr_29545_29579[(1)] = (11));

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
});
return (function() {
var cljs$core$async$state_machine__28210__auto__ = null;
var cljs$core$async$state_machine__28210__auto____0 = (function (){
var statearr_29546 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29546[(0)] = cljs$core$async$state_machine__28210__auto__);

(statearr_29546[(1)] = (1));

return statearr_29546;
});
var cljs$core$async$state_machine__28210__auto____1 = (function (state_29505){
while(true){
var ret_value__28211__auto__ = (function (){try{while(true){
var result__28212__auto__ = switch__28209__auto__.call(null,state_29505);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28212__auto__;
}
break;
}
}catch (e29547){if((e29547 instanceof Object)){
var ex__28213__auto__ = e29547;
var statearr_29548_29580 = state_29505;
(statearr_29548_29580[(5)] = ex__28213__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29505);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29547;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29581 = state_29505;
state_29505 = G__29581;
continue;
} else {
return ret_value__28211__auto__;
}
break;
}
});
cljs$core$async$state_machine__28210__auto__ = function(state_29505){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28210__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28210__auto____1.call(this,state_29505);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28210__auto____0;
cljs$core$async$state_machine__28210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28210__auto____1;
return cljs$core$async$state_machine__28210__auto__;
})()
})();
var state__28306__auto__ = (function (){var statearr_29549 = f__28305__auto__.call(null);
(statearr_29549[(6)] = c__28304__auto___29551);

return statearr_29549;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28306__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__29583 = arguments.length;
switch (G__29583) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

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
var G__29586 = arguments.length;
switch (G__29586) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

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
var G__29589 = arguments.length;
switch (G__29589) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,(function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.call(null,cnt));
var c__28304__auto___29656 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__28305__auto__ = (function (){var switch__28209__auto__ = (function (state_29628){
var state_val_29629 = (state_29628[(1)]);
if((state_val_29629 === (7))){
var state_29628__$1 = state_29628;
var statearr_29630_29657 = state_29628__$1;
(statearr_29630_29657[(2)] = null);

(statearr_29630_29657[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29629 === (1))){
var state_29628__$1 = state_29628;
var statearr_29631_29658 = state_29628__$1;
(statearr_29631_29658[(2)] = null);

(statearr_29631_29658[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29629 === (4))){
var inst_29592 = (state_29628[(7)]);
var inst_29594 = (inst_29592 < cnt);
var state_29628__$1 = state_29628;
if(cljs.core.truth_(inst_29594)){
var statearr_29632_29659 = state_29628__$1;
(statearr_29632_29659[(1)] = (6));

} else {
var statearr_29633_29660 = state_29628__$1;
(statearr_29633_29660[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29629 === (15))){
var inst_29624 = (state_29628[(2)]);
var state_29628__$1 = state_29628;
var statearr_29634_29661 = state_29628__$1;
(statearr_29634_29661[(2)] = inst_29624);

(statearr_29634_29661[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29629 === (13))){
var inst_29617 = cljs.core.async.close_BANG_.call(null,out);
var state_29628__$1 = state_29628;
var statearr_29635_29662 = state_29628__$1;
(statearr_29635_29662[(2)] = inst_29617);

(statearr_29635_29662[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29629 === (6))){
var state_29628__$1 = state_29628;
var statearr_29636_29663 = state_29628__$1;
(statearr_29636_29663[(2)] = null);

(statearr_29636_29663[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29629 === (3))){
var inst_29626 = (state_29628[(2)]);
var state_29628__$1 = state_29628;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29628__$1,inst_29626);
} else {
if((state_val_29629 === (12))){
var inst_29614 = (state_29628[(8)]);
var inst_29614__$1 = (state_29628[(2)]);
var inst_29615 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_29614__$1);
var state_29628__$1 = (function (){var statearr_29637 = state_29628;
(statearr_29637[(8)] = inst_29614__$1);

return statearr_29637;
})();
if(cljs.core.truth_(inst_29615)){
var statearr_29638_29664 = state_29628__$1;
(statearr_29638_29664[(1)] = (13));

} else {
var statearr_29639_29665 = state_29628__$1;
(statearr_29639_29665[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29629 === (2))){
var inst_29591 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_29592 = (0);
var state_29628__$1 = (function (){var statearr_29640 = state_29628;
(statearr_29640[(7)] = inst_29592);

(statearr_29640[(9)] = inst_29591);

return statearr_29640;
})();
var statearr_29641_29666 = state_29628__$1;
(statearr_29641_29666[(2)] = null);

(statearr_29641_29666[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29629 === (11))){
var inst_29592 = (state_29628[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_29628,(10),Object,null,(9));
var inst_29601 = chs__$1.call(null,inst_29592);
var inst_29602 = done.call(null,inst_29592);
var inst_29603 = cljs.core.async.take_BANG_.call(null,inst_29601,inst_29602);
var state_29628__$1 = state_29628;
var statearr_29642_29667 = state_29628__$1;
(statearr_29642_29667[(2)] = inst_29603);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29628__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29629 === (9))){
var inst_29592 = (state_29628[(7)]);
var inst_29605 = (state_29628[(2)]);
var inst_29606 = (inst_29592 + (1));
var inst_29592__$1 = inst_29606;
var state_29628__$1 = (function (){var statearr_29643 = state_29628;
(statearr_29643[(10)] = inst_29605);

(statearr_29643[(7)] = inst_29592__$1);

return statearr_29643;
})();
var statearr_29644_29668 = state_29628__$1;
(statearr_29644_29668[(2)] = null);

(statearr_29644_29668[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29629 === (5))){
var inst_29612 = (state_29628[(2)]);
var state_29628__$1 = (function (){var statearr_29645 = state_29628;
(statearr_29645[(11)] = inst_29612);

return statearr_29645;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29628__$1,(12),dchan);
} else {
if((state_val_29629 === (14))){
var inst_29614 = (state_29628[(8)]);
var inst_29619 = cljs.core.apply.call(null,f,inst_29614);
var state_29628__$1 = state_29628;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29628__$1,(16),out,inst_29619);
} else {
if((state_val_29629 === (16))){
var inst_29621 = (state_29628[(2)]);
var state_29628__$1 = (function (){var statearr_29646 = state_29628;
(statearr_29646[(12)] = inst_29621);

return statearr_29646;
})();
var statearr_29647_29669 = state_29628__$1;
(statearr_29647_29669[(2)] = null);

(statearr_29647_29669[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29629 === (10))){
var inst_29596 = (state_29628[(2)]);
var inst_29597 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_29628__$1 = (function (){var statearr_29648 = state_29628;
(statearr_29648[(13)] = inst_29596);

return statearr_29648;
})();
var statearr_29649_29670 = state_29628__$1;
(statearr_29649_29670[(2)] = inst_29597);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29628__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29629 === (8))){
var inst_29610 = (state_29628[(2)]);
var state_29628__$1 = state_29628;
var statearr_29650_29671 = state_29628__$1;
(statearr_29650_29671[(2)] = inst_29610);

(statearr_29650_29671[(1)] = (5));


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
});
return (function() {
var cljs$core$async$state_machine__28210__auto__ = null;
var cljs$core$async$state_machine__28210__auto____0 = (function (){
var statearr_29651 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29651[(0)] = cljs$core$async$state_machine__28210__auto__);

(statearr_29651[(1)] = (1));

return statearr_29651;
});
var cljs$core$async$state_machine__28210__auto____1 = (function (state_29628){
while(true){
var ret_value__28211__auto__ = (function (){try{while(true){
var result__28212__auto__ = switch__28209__auto__.call(null,state_29628);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28212__auto__;
}
break;
}
}catch (e29652){if((e29652 instanceof Object)){
var ex__28213__auto__ = e29652;
var statearr_29653_29672 = state_29628;
(statearr_29653_29672[(5)] = ex__28213__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29628);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29652;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29673 = state_29628;
state_29628 = G__29673;
continue;
} else {
return ret_value__28211__auto__;
}
break;
}
});
cljs$core$async$state_machine__28210__auto__ = function(state_29628){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28210__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28210__auto____1.call(this,state_29628);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28210__auto____0;
cljs$core$async$state_machine__28210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28210__auto____1;
return cljs$core$async$state_machine__28210__auto__;
})()
})();
var state__28306__auto__ = (function (){var statearr_29654 = f__28305__auto__.call(null);
(statearr_29654[(6)] = c__28304__auto___29656);

return statearr_29654;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28306__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__29676 = arguments.length;
switch (G__29676) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28304__auto___29730 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__28305__auto__ = (function (){var switch__28209__auto__ = (function (state_29708){
var state_val_29709 = (state_29708[(1)]);
if((state_val_29709 === (7))){
var inst_29687 = (state_29708[(7)]);
var inst_29688 = (state_29708[(8)]);
var inst_29687__$1 = (state_29708[(2)]);
var inst_29688__$1 = cljs.core.nth.call(null,inst_29687__$1,(0),null);
var inst_29689 = cljs.core.nth.call(null,inst_29687__$1,(1),null);
var inst_29690 = (inst_29688__$1 == null);
var state_29708__$1 = (function (){var statearr_29710 = state_29708;
(statearr_29710[(7)] = inst_29687__$1);

(statearr_29710[(8)] = inst_29688__$1);

(statearr_29710[(9)] = inst_29689);

return statearr_29710;
})();
if(cljs.core.truth_(inst_29690)){
var statearr_29711_29731 = state_29708__$1;
(statearr_29711_29731[(1)] = (8));

} else {
var statearr_29712_29732 = state_29708__$1;
(statearr_29712_29732[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29709 === (1))){
var inst_29677 = cljs.core.vec.call(null,chs);
var inst_29678 = inst_29677;
var state_29708__$1 = (function (){var statearr_29713 = state_29708;
(statearr_29713[(10)] = inst_29678);

return statearr_29713;
})();
var statearr_29714_29733 = state_29708__$1;
(statearr_29714_29733[(2)] = null);

(statearr_29714_29733[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29709 === (4))){
var inst_29678 = (state_29708[(10)]);
var state_29708__$1 = state_29708;
return cljs.core.async.ioc_alts_BANG_.call(null,state_29708__$1,(7),inst_29678);
} else {
if((state_val_29709 === (6))){
var inst_29704 = (state_29708[(2)]);
var state_29708__$1 = state_29708;
var statearr_29715_29734 = state_29708__$1;
(statearr_29715_29734[(2)] = inst_29704);

(statearr_29715_29734[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29709 === (3))){
var inst_29706 = (state_29708[(2)]);
var state_29708__$1 = state_29708;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29708__$1,inst_29706);
} else {
if((state_val_29709 === (2))){
var inst_29678 = (state_29708[(10)]);
var inst_29680 = cljs.core.count.call(null,inst_29678);
var inst_29681 = (inst_29680 > (0));
var state_29708__$1 = state_29708;
if(cljs.core.truth_(inst_29681)){
var statearr_29717_29735 = state_29708__$1;
(statearr_29717_29735[(1)] = (4));

} else {
var statearr_29718_29736 = state_29708__$1;
(statearr_29718_29736[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29709 === (11))){
var inst_29678 = (state_29708[(10)]);
var inst_29697 = (state_29708[(2)]);
var tmp29716 = inst_29678;
var inst_29678__$1 = tmp29716;
var state_29708__$1 = (function (){var statearr_29719 = state_29708;
(statearr_29719[(11)] = inst_29697);

(statearr_29719[(10)] = inst_29678__$1);

return statearr_29719;
})();
var statearr_29720_29737 = state_29708__$1;
(statearr_29720_29737[(2)] = null);

(statearr_29720_29737[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29709 === (9))){
var inst_29688 = (state_29708[(8)]);
var state_29708__$1 = state_29708;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29708__$1,(11),out,inst_29688);
} else {
if((state_val_29709 === (5))){
var inst_29702 = cljs.core.async.close_BANG_.call(null,out);
var state_29708__$1 = state_29708;
var statearr_29721_29738 = state_29708__$1;
(statearr_29721_29738[(2)] = inst_29702);

(statearr_29721_29738[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29709 === (10))){
var inst_29700 = (state_29708[(2)]);
var state_29708__$1 = state_29708;
var statearr_29722_29739 = state_29708__$1;
(statearr_29722_29739[(2)] = inst_29700);

(statearr_29722_29739[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29709 === (8))){
var inst_29687 = (state_29708[(7)]);
var inst_29678 = (state_29708[(10)]);
var inst_29688 = (state_29708[(8)]);
var inst_29689 = (state_29708[(9)]);
var inst_29692 = (function (){var cs = inst_29678;
var vec__29683 = inst_29687;
var v = inst_29688;
var c = inst_29689;
return (function (p1__29674_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__29674_SHARP_);
});
})();
var inst_29693 = cljs.core.filterv.call(null,inst_29692,inst_29678);
var inst_29678__$1 = inst_29693;
var state_29708__$1 = (function (){var statearr_29723 = state_29708;
(statearr_29723[(10)] = inst_29678__$1);

return statearr_29723;
})();
var statearr_29724_29740 = state_29708__$1;
(statearr_29724_29740[(2)] = null);

(statearr_29724_29740[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__28210__auto__ = null;
var cljs$core$async$state_machine__28210__auto____0 = (function (){
var statearr_29725 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29725[(0)] = cljs$core$async$state_machine__28210__auto__);

(statearr_29725[(1)] = (1));

return statearr_29725;
});
var cljs$core$async$state_machine__28210__auto____1 = (function (state_29708){
while(true){
var ret_value__28211__auto__ = (function (){try{while(true){
var result__28212__auto__ = switch__28209__auto__.call(null,state_29708);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28212__auto__;
}
break;
}
}catch (e29726){if((e29726 instanceof Object)){
var ex__28213__auto__ = e29726;
var statearr_29727_29741 = state_29708;
(statearr_29727_29741[(5)] = ex__28213__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29708);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29726;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29742 = state_29708;
state_29708 = G__29742;
continue;
} else {
return ret_value__28211__auto__;
}
break;
}
});
cljs$core$async$state_machine__28210__auto__ = function(state_29708){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28210__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28210__auto____1.call(this,state_29708);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28210__auto____0;
cljs$core$async$state_machine__28210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28210__auto____1;
return cljs$core$async$state_machine__28210__auto__;
})()
})();
var state__28306__auto__ = (function (){var statearr_29728 = f__28305__auto__.call(null);
(statearr_29728[(6)] = c__28304__auto___29730);

return statearr_29728;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28306__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

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
var G__29744 = arguments.length;
switch (G__29744) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28304__auto___29789 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__28305__auto__ = (function (){var switch__28209__auto__ = (function (state_29768){
var state_val_29769 = (state_29768[(1)]);
if((state_val_29769 === (7))){
var inst_29750 = (state_29768[(7)]);
var inst_29750__$1 = (state_29768[(2)]);
var inst_29751 = (inst_29750__$1 == null);
var inst_29752 = cljs.core.not.call(null,inst_29751);
var state_29768__$1 = (function (){var statearr_29770 = state_29768;
(statearr_29770[(7)] = inst_29750__$1);

return statearr_29770;
})();
if(inst_29752){
var statearr_29771_29790 = state_29768__$1;
(statearr_29771_29790[(1)] = (8));

} else {
var statearr_29772_29791 = state_29768__$1;
(statearr_29772_29791[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29769 === (1))){
var inst_29745 = (0);
var state_29768__$1 = (function (){var statearr_29773 = state_29768;
(statearr_29773[(8)] = inst_29745);

return statearr_29773;
})();
var statearr_29774_29792 = state_29768__$1;
(statearr_29774_29792[(2)] = null);

(statearr_29774_29792[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29769 === (4))){
var state_29768__$1 = state_29768;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29768__$1,(7),ch);
} else {
if((state_val_29769 === (6))){
var inst_29763 = (state_29768[(2)]);
var state_29768__$1 = state_29768;
var statearr_29775_29793 = state_29768__$1;
(statearr_29775_29793[(2)] = inst_29763);

(statearr_29775_29793[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29769 === (3))){
var inst_29765 = (state_29768[(2)]);
var inst_29766 = cljs.core.async.close_BANG_.call(null,out);
var state_29768__$1 = (function (){var statearr_29776 = state_29768;
(statearr_29776[(9)] = inst_29765);

return statearr_29776;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29768__$1,inst_29766);
} else {
if((state_val_29769 === (2))){
var inst_29745 = (state_29768[(8)]);
var inst_29747 = (inst_29745 < n);
var state_29768__$1 = state_29768;
if(cljs.core.truth_(inst_29747)){
var statearr_29777_29794 = state_29768__$1;
(statearr_29777_29794[(1)] = (4));

} else {
var statearr_29778_29795 = state_29768__$1;
(statearr_29778_29795[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29769 === (11))){
var inst_29745 = (state_29768[(8)]);
var inst_29755 = (state_29768[(2)]);
var inst_29756 = (inst_29745 + (1));
var inst_29745__$1 = inst_29756;
var state_29768__$1 = (function (){var statearr_29779 = state_29768;
(statearr_29779[(10)] = inst_29755);

(statearr_29779[(8)] = inst_29745__$1);

return statearr_29779;
})();
var statearr_29780_29796 = state_29768__$1;
(statearr_29780_29796[(2)] = null);

(statearr_29780_29796[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29769 === (9))){
var state_29768__$1 = state_29768;
var statearr_29781_29797 = state_29768__$1;
(statearr_29781_29797[(2)] = null);

(statearr_29781_29797[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29769 === (5))){
var state_29768__$1 = state_29768;
var statearr_29782_29798 = state_29768__$1;
(statearr_29782_29798[(2)] = null);

(statearr_29782_29798[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29769 === (10))){
var inst_29760 = (state_29768[(2)]);
var state_29768__$1 = state_29768;
var statearr_29783_29799 = state_29768__$1;
(statearr_29783_29799[(2)] = inst_29760);

(statearr_29783_29799[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29769 === (8))){
var inst_29750 = (state_29768[(7)]);
var state_29768__$1 = state_29768;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29768__$1,(11),out,inst_29750);
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
});
return (function() {
var cljs$core$async$state_machine__28210__auto__ = null;
var cljs$core$async$state_machine__28210__auto____0 = (function (){
var statearr_29784 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29784[(0)] = cljs$core$async$state_machine__28210__auto__);

(statearr_29784[(1)] = (1));

return statearr_29784;
});
var cljs$core$async$state_machine__28210__auto____1 = (function (state_29768){
while(true){
var ret_value__28211__auto__ = (function (){try{while(true){
var result__28212__auto__ = switch__28209__auto__.call(null,state_29768);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28212__auto__;
}
break;
}
}catch (e29785){if((e29785 instanceof Object)){
var ex__28213__auto__ = e29785;
var statearr_29786_29800 = state_29768;
(statearr_29786_29800[(5)] = ex__28213__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29768);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29785;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29801 = state_29768;
state_29768 = G__29801;
continue;
} else {
return ret_value__28211__auto__;
}
break;
}
});
cljs$core$async$state_machine__28210__auto__ = function(state_29768){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28210__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28210__auto____1.call(this,state_29768);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28210__auto____0;
cljs$core$async$state_machine__28210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28210__auto____1;
return cljs$core$async$state_machine__28210__auto__;
})()
})();
var state__28306__auto__ = (function (){var statearr_29787 = f__28305__auto__.call(null);
(statearr_29787[(6)] = c__28304__auto___29789);

return statearr_29787;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28306__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29803 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29803 = (function (f,ch,meta29804){
this.f = f;
this.ch = ch;
this.meta29804 = meta29804;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29803.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29805,meta29804__$1){
var self__ = this;
var _29805__$1 = this;
return (new cljs.core.async.t_cljs$core$async29803(self__.f,self__.ch,meta29804__$1));
}));

(cljs.core.async.t_cljs$core$async29803.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29805){
var self__ = this;
var _29805__$1 = this;
return self__.meta29804;
}));

(cljs.core.async.t_cljs$core$async29803.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29803.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async29803.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async29803.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29803.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29806 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29806 = (function (f,ch,meta29804,_,fn1,meta29807){
this.f = f;
this.ch = ch;
this.meta29804 = meta29804;
this._ = _;
this.fn1 = fn1;
this.meta29807 = meta29807;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29806.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29808,meta29807__$1){
var self__ = this;
var _29808__$1 = this;
return (new cljs.core.async.t_cljs$core$async29806(self__.f,self__.ch,self__.meta29804,self__._,self__.fn1,meta29807__$1));
}));

(cljs.core.async.t_cljs$core$async29806.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29808){
var self__ = this;
var _29808__$1 = this;
return self__.meta29807;
}));

(cljs.core.async.t_cljs$core$async29806.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29806.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
}));

(cljs.core.async.t_cljs$core$async29806.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async29806.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return (function (p1__29802_SHARP_){
return f1.call(null,(((p1__29802_SHARP_ == null))?null:self__.f.call(null,p1__29802_SHARP_)));
});
}));

(cljs.core.async.t_cljs$core$async29806.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29804","meta29804",464996029,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async29803","cljs.core.async/t_cljs$core$async29803",-2062801982,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta29807","meta29807",2068052358,null)], null);
}));

(cljs.core.async.t_cljs$core$async29806.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29806.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29806");

(cljs.core.async.t_cljs$core$async29806.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async29806");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29806.
 */
cljs.core.async.__GT_t_cljs$core$async29806 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async29806(f__$1,ch__$1,meta29804__$1,___$2,fn1__$1,meta29807){
return (new cljs.core.async.t_cljs$core$async29806(f__$1,ch__$1,meta29804__$1,___$2,fn1__$1,meta29807));
});

}

return (new cljs.core.async.t_cljs$core$async29806(self__.f,self__.ch,self__.meta29804,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref.call(null,ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async29803.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29803.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async29803.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29804","meta29804",464996029,null)], null);
}));

(cljs.core.async.t_cljs$core$async29803.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29803.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29803");

(cljs.core.async.t_cljs$core$async29803.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async29803");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29803.
 */
cljs.core.async.__GT_t_cljs$core$async29803 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async29803(f__$1,ch__$1,meta29804){
return (new cljs.core.async.t_cljs$core$async29803(f__$1,ch__$1,meta29804));
});

}

return (new cljs.core.async.t_cljs$core$async29803(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29809 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29809 = (function (f,ch,meta29810){
this.f = f;
this.ch = ch;
this.meta29810 = meta29810;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29809.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29811,meta29810__$1){
var self__ = this;
var _29811__$1 = this;
return (new cljs.core.async.t_cljs$core$async29809(self__.f,self__.ch,meta29810__$1));
}));

(cljs.core.async.t_cljs$core$async29809.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29811){
var self__ = this;
var _29811__$1 = this;
return self__.meta29810;
}));

(cljs.core.async.t_cljs$core$async29809.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29809.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async29809.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29809.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async29809.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29809.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
}));

(cljs.core.async.t_cljs$core$async29809.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29810","meta29810",-777469527,null)], null);
}));

(cljs.core.async.t_cljs$core$async29809.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29809.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29809");

(cljs.core.async.t_cljs$core$async29809.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async29809");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29809.
 */
cljs.core.async.__GT_t_cljs$core$async29809 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async29809(f__$1,ch__$1,meta29810){
return (new cljs.core.async.t_cljs$core$async29809(f__$1,ch__$1,meta29810));
});

}

return (new cljs.core.async.t_cljs$core$async29809(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29812 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29812 = (function (p,ch,meta29813){
this.p = p;
this.ch = ch;
this.meta29813 = meta29813;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29812.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29814,meta29813__$1){
var self__ = this;
var _29814__$1 = this;
return (new cljs.core.async.t_cljs$core$async29812(self__.p,self__.ch,meta29813__$1));
}));

(cljs.core.async.t_cljs$core$async29812.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29814){
var self__ = this;
var _29814__$1 = this;
return self__.meta29813;
}));

(cljs.core.async.t_cljs$core$async29812.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29812.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async29812.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async29812.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29812.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async29812.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29812.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async29812.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29813","meta29813",-1173617856,null)], null);
}));

(cljs.core.async.t_cljs$core$async29812.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29812.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29812");

(cljs.core.async.t_cljs$core$async29812.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async29812");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29812.
 */
cljs.core.async.__GT_t_cljs$core$async29812 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async29812(p__$1,ch__$1,meta29813){
return (new cljs.core.async.t_cljs$core$async29812(p__$1,ch__$1,meta29813));
});

}

return (new cljs.core.async.t_cljs$core$async29812(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__29816 = arguments.length;
switch (G__29816) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28304__auto___29856 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__28305__auto__ = (function (){var switch__28209__auto__ = (function (state_29837){
var state_val_29838 = (state_29837[(1)]);
if((state_val_29838 === (7))){
var inst_29833 = (state_29837[(2)]);
var state_29837__$1 = state_29837;
var statearr_29839_29857 = state_29837__$1;
(statearr_29839_29857[(2)] = inst_29833);

(statearr_29839_29857[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29838 === (1))){
var state_29837__$1 = state_29837;
var statearr_29840_29858 = state_29837__$1;
(statearr_29840_29858[(2)] = null);

(statearr_29840_29858[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29838 === (4))){
var inst_29819 = (state_29837[(7)]);
var inst_29819__$1 = (state_29837[(2)]);
var inst_29820 = (inst_29819__$1 == null);
var state_29837__$1 = (function (){var statearr_29841 = state_29837;
(statearr_29841[(7)] = inst_29819__$1);

return statearr_29841;
})();
if(cljs.core.truth_(inst_29820)){
var statearr_29842_29859 = state_29837__$1;
(statearr_29842_29859[(1)] = (5));

} else {
var statearr_29843_29860 = state_29837__$1;
(statearr_29843_29860[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29838 === (6))){
var inst_29819 = (state_29837[(7)]);
var inst_29824 = p.call(null,inst_29819);
var state_29837__$1 = state_29837;
if(cljs.core.truth_(inst_29824)){
var statearr_29844_29861 = state_29837__$1;
(statearr_29844_29861[(1)] = (8));

} else {
var statearr_29845_29862 = state_29837__$1;
(statearr_29845_29862[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29838 === (3))){
var inst_29835 = (state_29837[(2)]);
var state_29837__$1 = state_29837;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29837__$1,inst_29835);
} else {
if((state_val_29838 === (2))){
var state_29837__$1 = state_29837;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29837__$1,(4),ch);
} else {
if((state_val_29838 === (11))){
var inst_29827 = (state_29837[(2)]);
var state_29837__$1 = state_29837;
var statearr_29846_29863 = state_29837__$1;
(statearr_29846_29863[(2)] = inst_29827);

(statearr_29846_29863[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29838 === (9))){
var state_29837__$1 = state_29837;
var statearr_29847_29864 = state_29837__$1;
(statearr_29847_29864[(2)] = null);

(statearr_29847_29864[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29838 === (5))){
var inst_29822 = cljs.core.async.close_BANG_.call(null,out);
var state_29837__$1 = state_29837;
var statearr_29848_29865 = state_29837__$1;
(statearr_29848_29865[(2)] = inst_29822);

(statearr_29848_29865[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29838 === (10))){
var inst_29830 = (state_29837[(2)]);
var state_29837__$1 = (function (){var statearr_29849 = state_29837;
(statearr_29849[(8)] = inst_29830);

return statearr_29849;
})();
var statearr_29850_29866 = state_29837__$1;
(statearr_29850_29866[(2)] = null);

(statearr_29850_29866[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29838 === (8))){
var inst_29819 = (state_29837[(7)]);
var state_29837__$1 = state_29837;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29837__$1,(11),out,inst_29819);
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
});
return (function() {
var cljs$core$async$state_machine__28210__auto__ = null;
var cljs$core$async$state_machine__28210__auto____0 = (function (){
var statearr_29851 = [null,null,null,null,null,null,null,null,null];
(statearr_29851[(0)] = cljs$core$async$state_machine__28210__auto__);

(statearr_29851[(1)] = (1));

return statearr_29851;
});
var cljs$core$async$state_machine__28210__auto____1 = (function (state_29837){
while(true){
var ret_value__28211__auto__ = (function (){try{while(true){
var result__28212__auto__ = switch__28209__auto__.call(null,state_29837);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28212__auto__;
}
break;
}
}catch (e29852){if((e29852 instanceof Object)){
var ex__28213__auto__ = e29852;
var statearr_29853_29867 = state_29837;
(statearr_29853_29867[(5)] = ex__28213__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29837);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29852;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29868 = state_29837;
state_29837 = G__29868;
continue;
} else {
return ret_value__28211__auto__;
}
break;
}
});
cljs$core$async$state_machine__28210__auto__ = function(state_29837){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28210__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28210__auto____1.call(this,state_29837);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28210__auto____0;
cljs$core$async$state_machine__28210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28210__auto____1;
return cljs$core$async$state_machine__28210__auto__;
})()
})();
var state__28306__auto__ = (function (){var statearr_29854 = f__28305__auto__.call(null);
(statearr_29854[(6)] = c__28304__auto___29856);

return statearr_29854;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28306__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__29870 = arguments.length;
switch (G__29870) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__28304__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__28305__auto__ = (function (){var switch__28209__auto__ = (function (state_29933){
var state_val_29934 = (state_29933[(1)]);
if((state_val_29934 === (7))){
var inst_29929 = (state_29933[(2)]);
var state_29933__$1 = state_29933;
var statearr_29935_29973 = state_29933__$1;
(statearr_29935_29973[(2)] = inst_29929);

(statearr_29935_29973[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29934 === (20))){
var inst_29899 = (state_29933[(7)]);
var inst_29910 = (state_29933[(2)]);
var inst_29911 = cljs.core.next.call(null,inst_29899);
var inst_29885 = inst_29911;
var inst_29886 = null;
var inst_29887 = (0);
var inst_29888 = (0);
var state_29933__$1 = (function (){var statearr_29936 = state_29933;
(statearr_29936[(8)] = inst_29888);

(statearr_29936[(9)] = inst_29887);

(statearr_29936[(10)] = inst_29885);

(statearr_29936[(11)] = inst_29910);

(statearr_29936[(12)] = inst_29886);

return statearr_29936;
})();
var statearr_29937_29974 = state_29933__$1;
(statearr_29937_29974[(2)] = null);

(statearr_29937_29974[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29934 === (1))){
var state_29933__$1 = state_29933;
var statearr_29938_29975 = state_29933__$1;
(statearr_29938_29975[(2)] = null);

(statearr_29938_29975[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29934 === (4))){
var inst_29874 = (state_29933[(13)]);
var inst_29874__$1 = (state_29933[(2)]);
var inst_29875 = (inst_29874__$1 == null);
var state_29933__$1 = (function (){var statearr_29939 = state_29933;
(statearr_29939[(13)] = inst_29874__$1);

return statearr_29939;
})();
if(cljs.core.truth_(inst_29875)){
var statearr_29940_29976 = state_29933__$1;
(statearr_29940_29976[(1)] = (5));

} else {
var statearr_29941_29977 = state_29933__$1;
(statearr_29941_29977[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29934 === (15))){
var state_29933__$1 = state_29933;
var statearr_29945_29978 = state_29933__$1;
(statearr_29945_29978[(2)] = null);

(statearr_29945_29978[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29934 === (21))){
var state_29933__$1 = state_29933;
var statearr_29946_29979 = state_29933__$1;
(statearr_29946_29979[(2)] = null);

(statearr_29946_29979[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29934 === (13))){
var inst_29888 = (state_29933[(8)]);
var inst_29887 = (state_29933[(9)]);
var inst_29885 = (state_29933[(10)]);
var inst_29886 = (state_29933[(12)]);
var inst_29895 = (state_29933[(2)]);
var inst_29896 = (inst_29888 + (1));
var tmp29942 = inst_29887;
var tmp29943 = inst_29885;
var tmp29944 = inst_29886;
var inst_29885__$1 = tmp29943;
var inst_29886__$1 = tmp29944;
var inst_29887__$1 = tmp29942;
var inst_29888__$1 = inst_29896;
var state_29933__$1 = (function (){var statearr_29947 = state_29933;
(statearr_29947[(8)] = inst_29888__$1);

(statearr_29947[(9)] = inst_29887__$1);

(statearr_29947[(10)] = inst_29885__$1);

(statearr_29947[(14)] = inst_29895);

(statearr_29947[(12)] = inst_29886__$1);

return statearr_29947;
})();
var statearr_29948_29980 = state_29933__$1;
(statearr_29948_29980[(2)] = null);

(statearr_29948_29980[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29934 === (22))){
var state_29933__$1 = state_29933;
var statearr_29949_29981 = state_29933__$1;
(statearr_29949_29981[(2)] = null);

(statearr_29949_29981[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29934 === (6))){
var inst_29874 = (state_29933[(13)]);
var inst_29883 = f.call(null,inst_29874);
var inst_29884 = cljs.core.seq.call(null,inst_29883);
var inst_29885 = inst_29884;
var inst_29886 = null;
var inst_29887 = (0);
var inst_29888 = (0);
var state_29933__$1 = (function (){var statearr_29950 = state_29933;
(statearr_29950[(8)] = inst_29888);

(statearr_29950[(9)] = inst_29887);

(statearr_29950[(10)] = inst_29885);

(statearr_29950[(12)] = inst_29886);

return statearr_29950;
})();
var statearr_29951_29982 = state_29933__$1;
(statearr_29951_29982[(2)] = null);

(statearr_29951_29982[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29934 === (17))){
var inst_29899 = (state_29933[(7)]);
var inst_29903 = cljs.core.chunk_first.call(null,inst_29899);
var inst_29904 = cljs.core.chunk_rest.call(null,inst_29899);
var inst_29905 = cljs.core.count.call(null,inst_29903);
var inst_29885 = inst_29904;
var inst_29886 = inst_29903;
var inst_29887 = inst_29905;
var inst_29888 = (0);
var state_29933__$1 = (function (){var statearr_29952 = state_29933;
(statearr_29952[(8)] = inst_29888);

(statearr_29952[(9)] = inst_29887);

(statearr_29952[(10)] = inst_29885);

(statearr_29952[(12)] = inst_29886);

return statearr_29952;
})();
var statearr_29953_29983 = state_29933__$1;
(statearr_29953_29983[(2)] = null);

(statearr_29953_29983[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29934 === (3))){
var inst_29931 = (state_29933[(2)]);
var state_29933__$1 = state_29933;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29933__$1,inst_29931);
} else {
if((state_val_29934 === (12))){
var inst_29919 = (state_29933[(2)]);
var state_29933__$1 = state_29933;
var statearr_29954_29984 = state_29933__$1;
(statearr_29954_29984[(2)] = inst_29919);

(statearr_29954_29984[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29934 === (2))){
var state_29933__$1 = state_29933;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29933__$1,(4),in$);
} else {
if((state_val_29934 === (23))){
var inst_29927 = (state_29933[(2)]);
var state_29933__$1 = state_29933;
var statearr_29955_29985 = state_29933__$1;
(statearr_29955_29985[(2)] = inst_29927);

(statearr_29955_29985[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29934 === (19))){
var inst_29914 = (state_29933[(2)]);
var state_29933__$1 = state_29933;
var statearr_29956_29986 = state_29933__$1;
(statearr_29956_29986[(2)] = inst_29914);

(statearr_29956_29986[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29934 === (11))){
var inst_29885 = (state_29933[(10)]);
var inst_29899 = (state_29933[(7)]);
var inst_29899__$1 = cljs.core.seq.call(null,inst_29885);
var state_29933__$1 = (function (){var statearr_29957 = state_29933;
(statearr_29957[(7)] = inst_29899__$1);

return statearr_29957;
})();
if(inst_29899__$1){
var statearr_29958_29987 = state_29933__$1;
(statearr_29958_29987[(1)] = (14));

} else {
var statearr_29959_29988 = state_29933__$1;
(statearr_29959_29988[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29934 === (9))){
var inst_29921 = (state_29933[(2)]);
var inst_29922 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_29933__$1 = (function (){var statearr_29960 = state_29933;
(statearr_29960[(15)] = inst_29921);

return statearr_29960;
})();
if(cljs.core.truth_(inst_29922)){
var statearr_29961_29989 = state_29933__$1;
(statearr_29961_29989[(1)] = (21));

} else {
var statearr_29962_29990 = state_29933__$1;
(statearr_29962_29990[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29934 === (5))){
var inst_29877 = cljs.core.async.close_BANG_.call(null,out);
var state_29933__$1 = state_29933;
var statearr_29963_29991 = state_29933__$1;
(statearr_29963_29991[(2)] = inst_29877);

(statearr_29963_29991[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29934 === (14))){
var inst_29899 = (state_29933[(7)]);
var inst_29901 = cljs.core.chunked_seq_QMARK_.call(null,inst_29899);
var state_29933__$1 = state_29933;
if(inst_29901){
var statearr_29964_29992 = state_29933__$1;
(statearr_29964_29992[(1)] = (17));

} else {
var statearr_29965_29993 = state_29933__$1;
(statearr_29965_29993[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29934 === (16))){
var inst_29917 = (state_29933[(2)]);
var state_29933__$1 = state_29933;
var statearr_29966_29994 = state_29933__$1;
(statearr_29966_29994[(2)] = inst_29917);

(statearr_29966_29994[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29934 === (10))){
var inst_29888 = (state_29933[(8)]);
var inst_29886 = (state_29933[(12)]);
var inst_29893 = cljs.core._nth.call(null,inst_29886,inst_29888);
var state_29933__$1 = state_29933;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29933__$1,(13),out,inst_29893);
} else {
if((state_val_29934 === (18))){
var inst_29899 = (state_29933[(7)]);
var inst_29908 = cljs.core.first.call(null,inst_29899);
var state_29933__$1 = state_29933;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29933__$1,(20),out,inst_29908);
} else {
if((state_val_29934 === (8))){
var inst_29888 = (state_29933[(8)]);
var inst_29887 = (state_29933[(9)]);
var inst_29890 = (inst_29888 < inst_29887);
var inst_29891 = inst_29890;
var state_29933__$1 = state_29933;
if(cljs.core.truth_(inst_29891)){
var statearr_29967_29995 = state_29933__$1;
(statearr_29967_29995[(1)] = (10));

} else {
var statearr_29968_29996 = state_29933__$1;
(statearr_29968_29996[(1)] = (11));

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
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__28210__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__28210__auto____0 = (function (){
var statearr_29969 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29969[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__28210__auto__);

(statearr_29969[(1)] = (1));

return statearr_29969;
});
var cljs$core$async$mapcat_STAR__$_state_machine__28210__auto____1 = (function (state_29933){
while(true){
var ret_value__28211__auto__ = (function (){try{while(true){
var result__28212__auto__ = switch__28209__auto__.call(null,state_29933);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28212__auto__;
}
break;
}
}catch (e29970){if((e29970 instanceof Object)){
var ex__28213__auto__ = e29970;
var statearr_29971_29997 = state_29933;
(statearr_29971_29997[(5)] = ex__28213__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29933);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29970;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29998 = state_29933;
state_29933 = G__29998;
continue;
} else {
return ret_value__28211__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__28210__auto__ = function(state_29933){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__28210__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__28210__auto____1.call(this,state_29933);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__28210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__28210__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__28210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__28210__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__28210__auto__;
})()
})();
var state__28306__auto__ = (function (){var statearr_29972 = f__28305__auto__.call(null);
(statearr_29972[(6)] = c__28304__auto__);

return statearr_29972;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28306__auto__);
}));

return c__28304__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__30000 = arguments.length;
switch (G__30000) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__30003 = arguments.length;
switch (G__30003) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__30006 = arguments.length;
switch (G__30006) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28304__auto___30053 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__28305__auto__ = (function (){var switch__28209__auto__ = (function (state_30030){
var state_val_30031 = (state_30030[(1)]);
if((state_val_30031 === (7))){
var inst_30025 = (state_30030[(2)]);
var state_30030__$1 = state_30030;
var statearr_30032_30054 = state_30030__$1;
(statearr_30032_30054[(2)] = inst_30025);

(statearr_30032_30054[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30031 === (1))){
var inst_30007 = null;
var state_30030__$1 = (function (){var statearr_30033 = state_30030;
(statearr_30033[(7)] = inst_30007);

return statearr_30033;
})();
var statearr_30034_30055 = state_30030__$1;
(statearr_30034_30055[(2)] = null);

(statearr_30034_30055[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30031 === (4))){
var inst_30010 = (state_30030[(8)]);
var inst_30010__$1 = (state_30030[(2)]);
var inst_30011 = (inst_30010__$1 == null);
var inst_30012 = cljs.core.not.call(null,inst_30011);
var state_30030__$1 = (function (){var statearr_30035 = state_30030;
(statearr_30035[(8)] = inst_30010__$1);

return statearr_30035;
})();
if(inst_30012){
var statearr_30036_30056 = state_30030__$1;
(statearr_30036_30056[(1)] = (5));

} else {
var statearr_30037_30057 = state_30030__$1;
(statearr_30037_30057[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30031 === (6))){
var state_30030__$1 = state_30030;
var statearr_30038_30058 = state_30030__$1;
(statearr_30038_30058[(2)] = null);

(statearr_30038_30058[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30031 === (3))){
var inst_30027 = (state_30030[(2)]);
var inst_30028 = cljs.core.async.close_BANG_.call(null,out);
var state_30030__$1 = (function (){var statearr_30039 = state_30030;
(statearr_30039[(9)] = inst_30027);

return statearr_30039;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30030__$1,inst_30028);
} else {
if((state_val_30031 === (2))){
var state_30030__$1 = state_30030;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30030__$1,(4),ch);
} else {
if((state_val_30031 === (11))){
var inst_30010 = (state_30030[(8)]);
var inst_30019 = (state_30030[(2)]);
var inst_30007 = inst_30010;
var state_30030__$1 = (function (){var statearr_30040 = state_30030;
(statearr_30040[(7)] = inst_30007);

(statearr_30040[(10)] = inst_30019);

return statearr_30040;
})();
var statearr_30041_30059 = state_30030__$1;
(statearr_30041_30059[(2)] = null);

(statearr_30041_30059[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30031 === (9))){
var inst_30010 = (state_30030[(8)]);
var state_30030__$1 = state_30030;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30030__$1,(11),out,inst_30010);
} else {
if((state_val_30031 === (5))){
var inst_30010 = (state_30030[(8)]);
var inst_30007 = (state_30030[(7)]);
var inst_30014 = cljs.core._EQ_.call(null,inst_30010,inst_30007);
var state_30030__$1 = state_30030;
if(inst_30014){
var statearr_30043_30060 = state_30030__$1;
(statearr_30043_30060[(1)] = (8));

} else {
var statearr_30044_30061 = state_30030__$1;
(statearr_30044_30061[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30031 === (10))){
var inst_30022 = (state_30030[(2)]);
var state_30030__$1 = state_30030;
var statearr_30045_30062 = state_30030__$1;
(statearr_30045_30062[(2)] = inst_30022);

(statearr_30045_30062[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30031 === (8))){
var inst_30007 = (state_30030[(7)]);
var tmp30042 = inst_30007;
var inst_30007__$1 = tmp30042;
var state_30030__$1 = (function (){var statearr_30046 = state_30030;
(statearr_30046[(7)] = inst_30007__$1);

return statearr_30046;
})();
var statearr_30047_30063 = state_30030__$1;
(statearr_30047_30063[(2)] = null);

(statearr_30047_30063[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__28210__auto__ = null;
var cljs$core$async$state_machine__28210__auto____0 = (function (){
var statearr_30048 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30048[(0)] = cljs$core$async$state_machine__28210__auto__);

(statearr_30048[(1)] = (1));

return statearr_30048;
});
var cljs$core$async$state_machine__28210__auto____1 = (function (state_30030){
while(true){
var ret_value__28211__auto__ = (function (){try{while(true){
var result__28212__auto__ = switch__28209__auto__.call(null,state_30030);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28212__auto__;
}
break;
}
}catch (e30049){if((e30049 instanceof Object)){
var ex__28213__auto__ = e30049;
var statearr_30050_30064 = state_30030;
(statearr_30050_30064[(5)] = ex__28213__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30030);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30049;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30065 = state_30030;
state_30030 = G__30065;
continue;
} else {
return ret_value__28211__auto__;
}
break;
}
});
cljs$core$async$state_machine__28210__auto__ = function(state_30030){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28210__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28210__auto____1.call(this,state_30030);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28210__auto____0;
cljs$core$async$state_machine__28210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28210__auto____1;
return cljs$core$async$state_machine__28210__auto__;
})()
})();
var state__28306__auto__ = (function (){var statearr_30051 = f__28305__auto__.call(null);
(statearr_30051[(6)] = c__28304__auto___30053);

return statearr_30051;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28306__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__30067 = arguments.length;
switch (G__30067) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28304__auto___30133 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__28305__auto__ = (function (){var switch__28209__auto__ = (function (state_30105){
var state_val_30106 = (state_30105[(1)]);
if((state_val_30106 === (7))){
var inst_30101 = (state_30105[(2)]);
var state_30105__$1 = state_30105;
var statearr_30107_30134 = state_30105__$1;
(statearr_30107_30134[(2)] = inst_30101);

(statearr_30107_30134[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30106 === (1))){
var inst_30068 = (new Array(n));
var inst_30069 = inst_30068;
var inst_30070 = (0);
var state_30105__$1 = (function (){var statearr_30108 = state_30105;
(statearr_30108[(7)] = inst_30070);

(statearr_30108[(8)] = inst_30069);

return statearr_30108;
})();
var statearr_30109_30135 = state_30105__$1;
(statearr_30109_30135[(2)] = null);

(statearr_30109_30135[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30106 === (4))){
var inst_30073 = (state_30105[(9)]);
var inst_30073__$1 = (state_30105[(2)]);
var inst_30074 = (inst_30073__$1 == null);
var inst_30075 = cljs.core.not.call(null,inst_30074);
var state_30105__$1 = (function (){var statearr_30110 = state_30105;
(statearr_30110[(9)] = inst_30073__$1);

return statearr_30110;
})();
if(inst_30075){
var statearr_30111_30136 = state_30105__$1;
(statearr_30111_30136[(1)] = (5));

} else {
var statearr_30112_30137 = state_30105__$1;
(statearr_30112_30137[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30106 === (15))){
var inst_30095 = (state_30105[(2)]);
var state_30105__$1 = state_30105;
var statearr_30113_30138 = state_30105__$1;
(statearr_30113_30138[(2)] = inst_30095);

(statearr_30113_30138[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30106 === (13))){
var state_30105__$1 = state_30105;
var statearr_30114_30139 = state_30105__$1;
(statearr_30114_30139[(2)] = null);

(statearr_30114_30139[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30106 === (6))){
var inst_30070 = (state_30105[(7)]);
var inst_30091 = (inst_30070 > (0));
var state_30105__$1 = state_30105;
if(cljs.core.truth_(inst_30091)){
var statearr_30115_30140 = state_30105__$1;
(statearr_30115_30140[(1)] = (12));

} else {
var statearr_30116_30141 = state_30105__$1;
(statearr_30116_30141[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30106 === (3))){
var inst_30103 = (state_30105[(2)]);
var state_30105__$1 = state_30105;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30105__$1,inst_30103);
} else {
if((state_val_30106 === (12))){
var inst_30069 = (state_30105[(8)]);
var inst_30093 = cljs.core.vec.call(null,inst_30069);
var state_30105__$1 = state_30105;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30105__$1,(15),out,inst_30093);
} else {
if((state_val_30106 === (2))){
var state_30105__$1 = state_30105;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30105__$1,(4),ch);
} else {
if((state_val_30106 === (11))){
var inst_30085 = (state_30105[(2)]);
var inst_30086 = (new Array(n));
var inst_30069 = inst_30086;
var inst_30070 = (0);
var state_30105__$1 = (function (){var statearr_30117 = state_30105;
(statearr_30117[(10)] = inst_30085);

(statearr_30117[(7)] = inst_30070);

(statearr_30117[(8)] = inst_30069);

return statearr_30117;
})();
var statearr_30118_30142 = state_30105__$1;
(statearr_30118_30142[(2)] = null);

(statearr_30118_30142[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30106 === (9))){
var inst_30069 = (state_30105[(8)]);
var inst_30083 = cljs.core.vec.call(null,inst_30069);
var state_30105__$1 = state_30105;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30105__$1,(11),out,inst_30083);
} else {
if((state_val_30106 === (5))){
var inst_30078 = (state_30105[(11)]);
var inst_30073 = (state_30105[(9)]);
var inst_30070 = (state_30105[(7)]);
var inst_30069 = (state_30105[(8)]);
var inst_30077 = (inst_30069[inst_30070] = inst_30073);
var inst_30078__$1 = (inst_30070 + (1));
var inst_30079 = (inst_30078__$1 < n);
var state_30105__$1 = (function (){var statearr_30119 = state_30105;
(statearr_30119[(11)] = inst_30078__$1);

(statearr_30119[(12)] = inst_30077);

return statearr_30119;
})();
if(cljs.core.truth_(inst_30079)){
var statearr_30120_30143 = state_30105__$1;
(statearr_30120_30143[(1)] = (8));

} else {
var statearr_30121_30144 = state_30105__$1;
(statearr_30121_30144[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30106 === (14))){
var inst_30098 = (state_30105[(2)]);
var inst_30099 = cljs.core.async.close_BANG_.call(null,out);
var state_30105__$1 = (function (){var statearr_30123 = state_30105;
(statearr_30123[(13)] = inst_30098);

return statearr_30123;
})();
var statearr_30124_30145 = state_30105__$1;
(statearr_30124_30145[(2)] = inst_30099);

(statearr_30124_30145[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30106 === (10))){
var inst_30089 = (state_30105[(2)]);
var state_30105__$1 = state_30105;
var statearr_30125_30146 = state_30105__$1;
(statearr_30125_30146[(2)] = inst_30089);

(statearr_30125_30146[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30106 === (8))){
var inst_30078 = (state_30105[(11)]);
var inst_30069 = (state_30105[(8)]);
var tmp30122 = inst_30069;
var inst_30069__$1 = tmp30122;
var inst_30070 = inst_30078;
var state_30105__$1 = (function (){var statearr_30126 = state_30105;
(statearr_30126[(7)] = inst_30070);

(statearr_30126[(8)] = inst_30069__$1);

return statearr_30126;
})();
var statearr_30127_30147 = state_30105__$1;
(statearr_30127_30147[(2)] = null);

(statearr_30127_30147[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__28210__auto__ = null;
var cljs$core$async$state_machine__28210__auto____0 = (function (){
var statearr_30128 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30128[(0)] = cljs$core$async$state_machine__28210__auto__);

(statearr_30128[(1)] = (1));

return statearr_30128;
});
var cljs$core$async$state_machine__28210__auto____1 = (function (state_30105){
while(true){
var ret_value__28211__auto__ = (function (){try{while(true){
var result__28212__auto__ = switch__28209__auto__.call(null,state_30105);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28212__auto__;
}
break;
}
}catch (e30129){if((e30129 instanceof Object)){
var ex__28213__auto__ = e30129;
var statearr_30130_30148 = state_30105;
(statearr_30130_30148[(5)] = ex__28213__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30105);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30129;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30149 = state_30105;
state_30105 = G__30149;
continue;
} else {
return ret_value__28211__auto__;
}
break;
}
});
cljs$core$async$state_machine__28210__auto__ = function(state_30105){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28210__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28210__auto____1.call(this,state_30105);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28210__auto____0;
cljs$core$async$state_machine__28210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28210__auto____1;
return cljs$core$async$state_machine__28210__auto__;
})()
})();
var state__28306__auto__ = (function (){var statearr_30131 = f__28305__auto__.call(null);
(statearr_30131[(6)] = c__28304__auto___30133);

return statearr_30131;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28306__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__30151 = arguments.length;
switch (G__30151) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28304__auto___30221 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__28305__auto__ = (function (){var switch__28209__auto__ = (function (state_30193){
var state_val_30194 = (state_30193[(1)]);
if((state_val_30194 === (7))){
var inst_30189 = (state_30193[(2)]);
var state_30193__$1 = state_30193;
var statearr_30195_30222 = state_30193__$1;
(statearr_30195_30222[(2)] = inst_30189);

(statearr_30195_30222[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30194 === (1))){
var inst_30152 = [];
var inst_30153 = inst_30152;
var inst_30154 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_30193__$1 = (function (){var statearr_30196 = state_30193;
(statearr_30196[(7)] = inst_30154);

(statearr_30196[(8)] = inst_30153);

return statearr_30196;
})();
var statearr_30197_30223 = state_30193__$1;
(statearr_30197_30223[(2)] = null);

(statearr_30197_30223[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30194 === (4))){
var inst_30157 = (state_30193[(9)]);
var inst_30157__$1 = (state_30193[(2)]);
var inst_30158 = (inst_30157__$1 == null);
var inst_30159 = cljs.core.not.call(null,inst_30158);
var state_30193__$1 = (function (){var statearr_30198 = state_30193;
(statearr_30198[(9)] = inst_30157__$1);

return statearr_30198;
})();
if(inst_30159){
var statearr_30199_30224 = state_30193__$1;
(statearr_30199_30224[(1)] = (5));

} else {
var statearr_30200_30225 = state_30193__$1;
(statearr_30200_30225[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30194 === (15))){
var inst_30183 = (state_30193[(2)]);
var state_30193__$1 = state_30193;
var statearr_30201_30226 = state_30193__$1;
(statearr_30201_30226[(2)] = inst_30183);

(statearr_30201_30226[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30194 === (13))){
var state_30193__$1 = state_30193;
var statearr_30202_30227 = state_30193__$1;
(statearr_30202_30227[(2)] = null);

(statearr_30202_30227[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30194 === (6))){
var inst_30153 = (state_30193[(8)]);
var inst_30178 = inst_30153.length;
var inst_30179 = (inst_30178 > (0));
var state_30193__$1 = state_30193;
if(cljs.core.truth_(inst_30179)){
var statearr_30203_30228 = state_30193__$1;
(statearr_30203_30228[(1)] = (12));

} else {
var statearr_30204_30229 = state_30193__$1;
(statearr_30204_30229[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30194 === (3))){
var inst_30191 = (state_30193[(2)]);
var state_30193__$1 = state_30193;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30193__$1,inst_30191);
} else {
if((state_val_30194 === (12))){
var inst_30153 = (state_30193[(8)]);
var inst_30181 = cljs.core.vec.call(null,inst_30153);
var state_30193__$1 = state_30193;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30193__$1,(15),out,inst_30181);
} else {
if((state_val_30194 === (2))){
var state_30193__$1 = state_30193;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30193__$1,(4),ch);
} else {
if((state_val_30194 === (11))){
var inst_30157 = (state_30193[(9)]);
var inst_30161 = (state_30193[(10)]);
var inst_30171 = (state_30193[(2)]);
var inst_30172 = [];
var inst_30173 = inst_30172.push(inst_30157);
var inst_30153 = inst_30172;
var inst_30154 = inst_30161;
var state_30193__$1 = (function (){var statearr_30205 = state_30193;
(statearr_30205[(11)] = inst_30173);

(statearr_30205[(7)] = inst_30154);

(statearr_30205[(12)] = inst_30171);

(statearr_30205[(8)] = inst_30153);

return statearr_30205;
})();
var statearr_30206_30230 = state_30193__$1;
(statearr_30206_30230[(2)] = null);

(statearr_30206_30230[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30194 === (9))){
var inst_30153 = (state_30193[(8)]);
var inst_30169 = cljs.core.vec.call(null,inst_30153);
var state_30193__$1 = state_30193;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30193__$1,(11),out,inst_30169);
} else {
if((state_val_30194 === (5))){
var inst_30154 = (state_30193[(7)]);
var inst_30157 = (state_30193[(9)]);
var inst_30161 = (state_30193[(10)]);
var inst_30161__$1 = f.call(null,inst_30157);
var inst_30162 = cljs.core._EQ_.call(null,inst_30161__$1,inst_30154);
var inst_30163 = cljs.core.keyword_identical_QMARK_.call(null,inst_30154,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_30164 = ((inst_30162) || (inst_30163));
var state_30193__$1 = (function (){var statearr_30207 = state_30193;
(statearr_30207[(10)] = inst_30161__$1);

return statearr_30207;
})();
if(cljs.core.truth_(inst_30164)){
var statearr_30208_30231 = state_30193__$1;
(statearr_30208_30231[(1)] = (8));

} else {
var statearr_30209_30232 = state_30193__$1;
(statearr_30209_30232[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30194 === (14))){
var inst_30186 = (state_30193[(2)]);
var inst_30187 = cljs.core.async.close_BANG_.call(null,out);
var state_30193__$1 = (function (){var statearr_30211 = state_30193;
(statearr_30211[(13)] = inst_30186);

return statearr_30211;
})();
var statearr_30212_30233 = state_30193__$1;
(statearr_30212_30233[(2)] = inst_30187);

(statearr_30212_30233[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30194 === (10))){
var inst_30176 = (state_30193[(2)]);
var state_30193__$1 = state_30193;
var statearr_30213_30234 = state_30193__$1;
(statearr_30213_30234[(2)] = inst_30176);

(statearr_30213_30234[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30194 === (8))){
var inst_30157 = (state_30193[(9)]);
var inst_30153 = (state_30193[(8)]);
var inst_30161 = (state_30193[(10)]);
var inst_30166 = inst_30153.push(inst_30157);
var tmp30210 = inst_30153;
var inst_30153__$1 = tmp30210;
var inst_30154 = inst_30161;
var state_30193__$1 = (function (){var statearr_30214 = state_30193;
(statearr_30214[(7)] = inst_30154);

(statearr_30214[(14)] = inst_30166);

(statearr_30214[(8)] = inst_30153__$1);

return statearr_30214;
})();
var statearr_30215_30235 = state_30193__$1;
(statearr_30215_30235[(2)] = null);

(statearr_30215_30235[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__28210__auto__ = null;
var cljs$core$async$state_machine__28210__auto____0 = (function (){
var statearr_30216 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30216[(0)] = cljs$core$async$state_machine__28210__auto__);

(statearr_30216[(1)] = (1));

return statearr_30216;
});
var cljs$core$async$state_machine__28210__auto____1 = (function (state_30193){
while(true){
var ret_value__28211__auto__ = (function (){try{while(true){
var result__28212__auto__ = switch__28209__auto__.call(null,state_30193);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28212__auto__;
}
break;
}
}catch (e30217){if((e30217 instanceof Object)){
var ex__28213__auto__ = e30217;
var statearr_30218_30236 = state_30193;
(statearr_30218_30236[(5)] = ex__28213__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30193);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30217;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30237 = state_30193;
state_30193 = G__30237;
continue;
} else {
return ret_value__28211__auto__;
}
break;
}
});
cljs$core$async$state_machine__28210__auto__ = function(state_30193){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28210__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28210__auto____1.call(this,state_30193);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28210__auto____0;
cljs$core$async$state_machine__28210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28210__auto____1;
return cljs$core$async$state_machine__28210__auto__;
})()
})();
var state__28306__auto__ = (function (){var statearr_30219 = f__28305__auto__.call(null);
(statearr_30219[(6)] = c__28304__auto___30221);

return statearr_30219;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28306__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=async.js.map?rel=1627432844887
