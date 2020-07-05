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
var G__27464 = arguments.length;
switch (G__27464) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27465 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27465 = (function (f,blockable,meta27466){
this.f = f;
this.blockable = blockable;
this.meta27466 = meta27466;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async27465.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27467,meta27466__$1){
var self__ = this;
var _27467__$1 = this;
return (new cljs.core.async.t_cljs$core$async27465(self__.f,self__.blockable,meta27466__$1));
}));

(cljs.core.async.t_cljs$core$async27465.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27467){
var self__ = this;
var _27467__$1 = this;
return self__.meta27466;
}));

(cljs.core.async.t_cljs$core$async27465.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27465.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async27465.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async27465.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async27465.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta27466","meta27466",1432802410,null)], null);
}));

(cljs.core.async.t_cljs$core$async27465.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async27465.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27465");

(cljs.core.async.t_cljs$core$async27465.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async27465");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27465.
 */
cljs.core.async.__GT_t_cljs$core$async27465 = (function cljs$core$async$__GT_t_cljs$core$async27465(f__$1,blockable__$1,meta27466){
return (new cljs.core.async.t_cljs$core$async27465(f__$1,blockable__$1,meta27466));
});

}

return (new cljs.core.async.t_cljs$core$async27465(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__27471 = arguments.length;
switch (G__27471) {
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
var G__27474 = arguments.length;
switch (G__27474) {
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
var G__27477 = arguments.length;
switch (G__27477) {
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
var val_27479 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_27479);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,val_27479);
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
var G__27481 = arguments.length;
switch (G__27481) {
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
var n__4613__auto___27483 = n;
var x_27484 = (0);
while(true){
if((x_27484 < n__4613__auto___27483)){
(a[x_27484] = (0));

var G__27485 = (x_27484 + (1));
x_27484 = G__27485;
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

var G__27486 = (i + (1));
i = G__27486;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27487 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27487 = (function (flag,meta27488){
this.flag = flag;
this.meta27488 = meta27488;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async27487.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27489,meta27488__$1){
var self__ = this;
var _27489__$1 = this;
return (new cljs.core.async.t_cljs$core$async27487(self__.flag,meta27488__$1));
}));

(cljs.core.async.t_cljs$core$async27487.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27489){
var self__ = this;
var _27489__$1 = this;
return self__.meta27488;
}));

(cljs.core.async.t_cljs$core$async27487.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27487.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async27487.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async27487.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async27487.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta27488","meta27488",-1841173280,null)], null);
}));

(cljs.core.async.t_cljs$core$async27487.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async27487.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27487");

(cljs.core.async.t_cljs$core$async27487.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async27487");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27487.
 */
cljs.core.async.__GT_t_cljs$core$async27487 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async27487(flag__$1,meta27488){
return (new cljs.core.async.t_cljs$core$async27487(flag__$1,meta27488));
});

}

return (new cljs.core.async.t_cljs$core$async27487(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27490 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27490 = (function (flag,cb,meta27491){
this.flag = flag;
this.cb = cb;
this.meta27491 = meta27491;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async27490.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27492,meta27491__$1){
var self__ = this;
var _27492__$1 = this;
return (new cljs.core.async.t_cljs$core$async27490(self__.flag,self__.cb,meta27491__$1));
}));

(cljs.core.async.t_cljs$core$async27490.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27492){
var self__ = this;
var _27492__$1 = this;
return self__.meta27491;
}));

(cljs.core.async.t_cljs$core$async27490.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27490.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async27490.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async27490.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async27490.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta27491","meta27491",-156861497,null)], null);
}));

(cljs.core.async.t_cljs$core$async27490.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async27490.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27490");

(cljs.core.async.t_cljs$core$async27490.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async27490");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27490.
 */
cljs.core.async.__GT_t_cljs$core$async27490 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async27490(flag__$1,cb__$1,meta27491){
return (new cljs.core.async.t_cljs$core$async27490(flag__$1,cb__$1,meta27491));
});

}

return (new cljs.core.async.t_cljs$core$async27490(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__27493_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27493_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27494_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27494_SHARP_,port], null));
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
var G__27495 = (i + (1));
i = G__27495;
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
var len__4736__auto___27501 = arguments.length;
var i__4737__auto___27502 = (0);
while(true){
if((i__4737__auto___27502 < len__4736__auto___27501)){
args__4742__auto__.push((arguments[i__4737__auto___27502]));

var G__27503 = (i__4737__auto___27502 + (1));
i__4737__auto___27502 = G__27503;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__27498){
var map__27499 = p__27498;
var map__27499__$1 = (((((!((map__27499 == null))))?(((((map__27499.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27499.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27499):map__27499);
var opts = map__27499__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq27496){
var G__27497 = cljs.core.first.call(null,seq27496);
var seq27496__$1 = cljs.core.next.call(null,seq27496);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27497,seq27496__$1);
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
var G__27505 = arguments.length;
switch (G__27505) {
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
var c__27404__auto___27551 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27405__auto__ = (function (){var switch__27309__auto__ = (function (state_27529){
var state_val_27530 = (state_27529[(1)]);
if((state_val_27530 === (7))){
var inst_27525 = (state_27529[(2)]);
var state_27529__$1 = state_27529;
var statearr_27531_27552 = state_27529__$1;
(statearr_27531_27552[(2)] = inst_27525);

(statearr_27531_27552[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27530 === (1))){
var state_27529__$1 = state_27529;
var statearr_27532_27553 = state_27529__$1;
(statearr_27532_27553[(2)] = null);

(statearr_27532_27553[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27530 === (4))){
var inst_27508 = (state_27529[(7)]);
var inst_27508__$1 = (state_27529[(2)]);
var inst_27509 = (inst_27508__$1 == null);
var state_27529__$1 = (function (){var statearr_27533 = state_27529;
(statearr_27533[(7)] = inst_27508__$1);

return statearr_27533;
})();
if(cljs.core.truth_(inst_27509)){
var statearr_27534_27554 = state_27529__$1;
(statearr_27534_27554[(1)] = (5));

} else {
var statearr_27535_27555 = state_27529__$1;
(statearr_27535_27555[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27530 === (13))){
var state_27529__$1 = state_27529;
var statearr_27536_27556 = state_27529__$1;
(statearr_27536_27556[(2)] = null);

(statearr_27536_27556[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27530 === (6))){
var inst_27508 = (state_27529[(7)]);
var state_27529__$1 = state_27529;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27529__$1,(11),to,inst_27508);
} else {
if((state_val_27530 === (3))){
var inst_27527 = (state_27529[(2)]);
var state_27529__$1 = state_27529;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27529__$1,inst_27527);
} else {
if((state_val_27530 === (12))){
var state_27529__$1 = state_27529;
var statearr_27537_27557 = state_27529__$1;
(statearr_27537_27557[(2)] = null);

(statearr_27537_27557[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27530 === (2))){
var state_27529__$1 = state_27529;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27529__$1,(4),from);
} else {
if((state_val_27530 === (11))){
var inst_27518 = (state_27529[(2)]);
var state_27529__$1 = state_27529;
if(cljs.core.truth_(inst_27518)){
var statearr_27538_27558 = state_27529__$1;
(statearr_27538_27558[(1)] = (12));

} else {
var statearr_27539_27559 = state_27529__$1;
(statearr_27539_27559[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27530 === (9))){
var state_27529__$1 = state_27529;
var statearr_27540_27560 = state_27529__$1;
(statearr_27540_27560[(2)] = null);

(statearr_27540_27560[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27530 === (5))){
var state_27529__$1 = state_27529;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27541_27561 = state_27529__$1;
(statearr_27541_27561[(1)] = (8));

} else {
var statearr_27542_27562 = state_27529__$1;
(statearr_27542_27562[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27530 === (14))){
var inst_27523 = (state_27529[(2)]);
var state_27529__$1 = state_27529;
var statearr_27543_27563 = state_27529__$1;
(statearr_27543_27563[(2)] = inst_27523);

(statearr_27543_27563[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27530 === (10))){
var inst_27515 = (state_27529[(2)]);
var state_27529__$1 = state_27529;
var statearr_27544_27564 = state_27529__$1;
(statearr_27544_27564[(2)] = inst_27515);

(statearr_27544_27564[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27530 === (8))){
var inst_27512 = cljs.core.async.close_BANG_.call(null,to);
var state_27529__$1 = state_27529;
var statearr_27545_27565 = state_27529__$1;
(statearr_27545_27565[(2)] = inst_27512);

(statearr_27545_27565[(1)] = (10));


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
var cljs$core$async$state_machine__27310__auto__ = null;
var cljs$core$async$state_machine__27310__auto____0 = (function (){
var statearr_27546 = [null,null,null,null,null,null,null,null];
(statearr_27546[(0)] = cljs$core$async$state_machine__27310__auto__);

(statearr_27546[(1)] = (1));

return statearr_27546;
});
var cljs$core$async$state_machine__27310__auto____1 = (function (state_27529){
while(true){
var ret_value__27311__auto__ = (function (){try{while(true){
var result__27312__auto__ = switch__27309__auto__.call(null,state_27529);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27312__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27312__auto__;
}
break;
}
}catch (e27547){if((e27547 instanceof Object)){
var ex__27313__auto__ = e27547;
var statearr_27548_27566 = state_27529;
(statearr_27548_27566[(5)] = ex__27313__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27529);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27547;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27311__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27567 = state_27529;
state_27529 = G__27567;
continue;
} else {
return ret_value__27311__auto__;
}
break;
}
});
cljs$core$async$state_machine__27310__auto__ = function(state_27529){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27310__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27310__auto____1.call(this,state_27529);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27310__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27310__auto____0;
cljs$core$async$state_machine__27310__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27310__auto____1;
return cljs$core$async$state_machine__27310__auto__;
})()
})();
var state__27406__auto__ = (function (){var statearr_27549 = f__27405__auto__.call(null);
(statearr_27549[(6)] = c__27404__auto___27551);

return statearr_27549;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27406__auto__);
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
var process = (function (p__27568){
var vec__27569 = p__27568;
var v = cljs.core.nth.call(null,vec__27569,(0),null);
var p = cljs.core.nth.call(null,vec__27569,(1),null);
var job = vec__27569;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__27404__auto___27740 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27405__auto__ = (function (){var switch__27309__auto__ = (function (state_27576){
var state_val_27577 = (state_27576[(1)]);
if((state_val_27577 === (1))){
var state_27576__$1 = state_27576;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27576__$1,(2),res,v);
} else {
if((state_val_27577 === (2))){
var inst_27573 = (state_27576[(2)]);
var inst_27574 = cljs.core.async.close_BANG_.call(null,res);
var state_27576__$1 = (function (){var statearr_27578 = state_27576;
(statearr_27578[(7)] = inst_27573);

return statearr_27578;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27576__$1,inst_27574);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27310__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27310__auto____0 = (function (){
var statearr_27579 = [null,null,null,null,null,null,null,null];
(statearr_27579[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27310__auto__);

(statearr_27579[(1)] = (1));

return statearr_27579;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27310__auto____1 = (function (state_27576){
while(true){
var ret_value__27311__auto__ = (function (){try{while(true){
var result__27312__auto__ = switch__27309__auto__.call(null,state_27576);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27312__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27312__auto__;
}
break;
}
}catch (e27580){if((e27580 instanceof Object)){
var ex__27313__auto__ = e27580;
var statearr_27581_27741 = state_27576;
(statearr_27581_27741[(5)] = ex__27313__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27576);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27580;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27311__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27742 = state_27576;
state_27576 = G__27742;
continue;
} else {
return ret_value__27311__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27310__auto__ = function(state_27576){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27310__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27310__auto____1.call(this,state_27576);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27310__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27310__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27310__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27310__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27310__auto__;
})()
})();
var state__27406__auto__ = (function (){var statearr_27582 = f__27405__auto__.call(null);
(statearr_27582[(6)] = c__27404__auto___27740);

return statearr_27582;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27406__auto__);
}));


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var async = (function (p__27583){
var vec__27584 = p__27583;
var v = cljs.core.nth.call(null,vec__27584,(0),null);
var p = cljs.core.nth.call(null,vec__27584,(1),null);
var job = vec__27584;
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
var n__4613__auto___27743 = n;
var __27744 = (0);
while(true){
if((__27744 < n__4613__auto___27743)){
var G__27587_27745 = type;
var G__27587_27746__$1 = (((G__27587_27745 instanceof cljs.core.Keyword))?G__27587_27745.fqn:null);
switch (G__27587_27746__$1) {
case "compute":
var c__27404__auto___27748 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27744,c__27404__auto___27748,G__27587_27745,G__27587_27746__$1,n__4613__auto___27743,jobs,results,process,async){
return (function (){
var f__27405__auto__ = (function (){var switch__27309__auto__ = ((function (__27744,c__27404__auto___27748,G__27587_27745,G__27587_27746__$1,n__4613__auto___27743,jobs,results,process,async){
return (function (state_27600){
var state_val_27601 = (state_27600[(1)]);
if((state_val_27601 === (1))){
var state_27600__$1 = state_27600;
var statearr_27602_27749 = state_27600__$1;
(statearr_27602_27749[(2)] = null);

(statearr_27602_27749[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27601 === (2))){
var state_27600__$1 = state_27600;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27600__$1,(4),jobs);
} else {
if((state_val_27601 === (3))){
var inst_27598 = (state_27600[(2)]);
var state_27600__$1 = state_27600;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27600__$1,inst_27598);
} else {
if((state_val_27601 === (4))){
var inst_27590 = (state_27600[(2)]);
var inst_27591 = process.call(null,inst_27590);
var state_27600__$1 = state_27600;
if(cljs.core.truth_(inst_27591)){
var statearr_27603_27750 = state_27600__$1;
(statearr_27603_27750[(1)] = (5));

} else {
var statearr_27604_27751 = state_27600__$1;
(statearr_27604_27751[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27601 === (5))){
var state_27600__$1 = state_27600;
var statearr_27605_27752 = state_27600__$1;
(statearr_27605_27752[(2)] = null);

(statearr_27605_27752[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27601 === (6))){
var state_27600__$1 = state_27600;
var statearr_27606_27753 = state_27600__$1;
(statearr_27606_27753[(2)] = null);

(statearr_27606_27753[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27601 === (7))){
var inst_27596 = (state_27600[(2)]);
var state_27600__$1 = state_27600;
var statearr_27607_27754 = state_27600__$1;
(statearr_27607_27754[(2)] = inst_27596);

(statearr_27607_27754[(1)] = (3));


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
});})(__27744,c__27404__auto___27748,G__27587_27745,G__27587_27746__$1,n__4613__auto___27743,jobs,results,process,async))
;
return ((function (__27744,switch__27309__auto__,c__27404__auto___27748,G__27587_27745,G__27587_27746__$1,n__4613__auto___27743,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27310__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27310__auto____0 = (function (){
var statearr_27608 = [null,null,null,null,null,null,null];
(statearr_27608[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27310__auto__);

(statearr_27608[(1)] = (1));

return statearr_27608;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27310__auto____1 = (function (state_27600){
while(true){
var ret_value__27311__auto__ = (function (){try{while(true){
var result__27312__auto__ = switch__27309__auto__.call(null,state_27600);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27312__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27312__auto__;
}
break;
}
}catch (e27609){if((e27609 instanceof Object)){
var ex__27313__auto__ = e27609;
var statearr_27610_27755 = state_27600;
(statearr_27610_27755[(5)] = ex__27313__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27600);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27609;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27311__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27756 = state_27600;
state_27600 = G__27756;
continue;
} else {
return ret_value__27311__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27310__auto__ = function(state_27600){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27310__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27310__auto____1.call(this,state_27600);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27310__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27310__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27310__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27310__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27310__auto__;
})()
;})(__27744,switch__27309__auto__,c__27404__auto___27748,G__27587_27745,G__27587_27746__$1,n__4613__auto___27743,jobs,results,process,async))
})();
var state__27406__auto__ = (function (){var statearr_27611 = f__27405__auto__.call(null);
(statearr_27611[(6)] = c__27404__auto___27748);

return statearr_27611;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27406__auto__);
});})(__27744,c__27404__auto___27748,G__27587_27745,G__27587_27746__$1,n__4613__auto___27743,jobs,results,process,async))
);


break;
case "async":
var c__27404__auto___27757 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27744,c__27404__auto___27757,G__27587_27745,G__27587_27746__$1,n__4613__auto___27743,jobs,results,process,async){
return (function (){
var f__27405__auto__ = (function (){var switch__27309__auto__ = ((function (__27744,c__27404__auto___27757,G__27587_27745,G__27587_27746__$1,n__4613__auto___27743,jobs,results,process,async){
return (function (state_27624){
var state_val_27625 = (state_27624[(1)]);
if((state_val_27625 === (1))){
var state_27624__$1 = state_27624;
var statearr_27626_27758 = state_27624__$1;
(statearr_27626_27758[(2)] = null);

(statearr_27626_27758[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27625 === (2))){
var state_27624__$1 = state_27624;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27624__$1,(4),jobs);
} else {
if((state_val_27625 === (3))){
var inst_27622 = (state_27624[(2)]);
var state_27624__$1 = state_27624;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27624__$1,inst_27622);
} else {
if((state_val_27625 === (4))){
var inst_27614 = (state_27624[(2)]);
var inst_27615 = async.call(null,inst_27614);
var state_27624__$1 = state_27624;
if(cljs.core.truth_(inst_27615)){
var statearr_27627_27759 = state_27624__$1;
(statearr_27627_27759[(1)] = (5));

} else {
var statearr_27628_27760 = state_27624__$1;
(statearr_27628_27760[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27625 === (5))){
var state_27624__$1 = state_27624;
var statearr_27629_27761 = state_27624__$1;
(statearr_27629_27761[(2)] = null);

(statearr_27629_27761[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27625 === (6))){
var state_27624__$1 = state_27624;
var statearr_27630_27762 = state_27624__$1;
(statearr_27630_27762[(2)] = null);

(statearr_27630_27762[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27625 === (7))){
var inst_27620 = (state_27624[(2)]);
var state_27624__$1 = state_27624;
var statearr_27631_27763 = state_27624__$1;
(statearr_27631_27763[(2)] = inst_27620);

(statearr_27631_27763[(1)] = (3));


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
});})(__27744,c__27404__auto___27757,G__27587_27745,G__27587_27746__$1,n__4613__auto___27743,jobs,results,process,async))
;
return ((function (__27744,switch__27309__auto__,c__27404__auto___27757,G__27587_27745,G__27587_27746__$1,n__4613__auto___27743,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27310__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27310__auto____0 = (function (){
var statearr_27632 = [null,null,null,null,null,null,null];
(statearr_27632[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27310__auto__);

(statearr_27632[(1)] = (1));

return statearr_27632;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27310__auto____1 = (function (state_27624){
while(true){
var ret_value__27311__auto__ = (function (){try{while(true){
var result__27312__auto__ = switch__27309__auto__.call(null,state_27624);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27312__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27312__auto__;
}
break;
}
}catch (e27633){if((e27633 instanceof Object)){
var ex__27313__auto__ = e27633;
var statearr_27634_27764 = state_27624;
(statearr_27634_27764[(5)] = ex__27313__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27624);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27633;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27311__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27765 = state_27624;
state_27624 = G__27765;
continue;
} else {
return ret_value__27311__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27310__auto__ = function(state_27624){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27310__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27310__auto____1.call(this,state_27624);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27310__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27310__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27310__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27310__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27310__auto__;
})()
;})(__27744,switch__27309__auto__,c__27404__auto___27757,G__27587_27745,G__27587_27746__$1,n__4613__auto___27743,jobs,results,process,async))
})();
var state__27406__auto__ = (function (){var statearr_27635 = f__27405__auto__.call(null);
(statearr_27635[(6)] = c__27404__auto___27757);

return statearr_27635;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27406__auto__);
});})(__27744,c__27404__auto___27757,G__27587_27745,G__27587_27746__$1,n__4613__auto___27743,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27587_27746__$1)].join('')));

}

var G__27766 = (__27744 + (1));
__27744 = G__27766;
continue;
} else {
}
break;
}

var c__27404__auto___27767 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27405__auto__ = (function (){var switch__27309__auto__ = (function (state_27657){
var state_val_27658 = (state_27657[(1)]);
if((state_val_27658 === (7))){
var inst_27653 = (state_27657[(2)]);
var state_27657__$1 = state_27657;
var statearr_27659_27768 = state_27657__$1;
(statearr_27659_27768[(2)] = inst_27653);

(statearr_27659_27768[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27658 === (1))){
var state_27657__$1 = state_27657;
var statearr_27660_27769 = state_27657__$1;
(statearr_27660_27769[(2)] = null);

(statearr_27660_27769[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27658 === (4))){
var inst_27638 = (state_27657[(7)]);
var inst_27638__$1 = (state_27657[(2)]);
var inst_27639 = (inst_27638__$1 == null);
var state_27657__$1 = (function (){var statearr_27661 = state_27657;
(statearr_27661[(7)] = inst_27638__$1);

return statearr_27661;
})();
if(cljs.core.truth_(inst_27639)){
var statearr_27662_27770 = state_27657__$1;
(statearr_27662_27770[(1)] = (5));

} else {
var statearr_27663_27771 = state_27657__$1;
(statearr_27663_27771[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27658 === (6))){
var inst_27643 = (state_27657[(8)]);
var inst_27638 = (state_27657[(7)]);
var inst_27643__$1 = cljs.core.async.chan.call(null,(1));
var inst_27644 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27645 = [inst_27638,inst_27643__$1];
var inst_27646 = (new cljs.core.PersistentVector(null,2,(5),inst_27644,inst_27645,null));
var state_27657__$1 = (function (){var statearr_27664 = state_27657;
(statearr_27664[(8)] = inst_27643__$1);

return statearr_27664;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27657__$1,(8),jobs,inst_27646);
} else {
if((state_val_27658 === (3))){
var inst_27655 = (state_27657[(2)]);
var state_27657__$1 = state_27657;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27657__$1,inst_27655);
} else {
if((state_val_27658 === (2))){
var state_27657__$1 = state_27657;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27657__$1,(4),from);
} else {
if((state_val_27658 === (9))){
var inst_27650 = (state_27657[(2)]);
var state_27657__$1 = (function (){var statearr_27665 = state_27657;
(statearr_27665[(9)] = inst_27650);

return statearr_27665;
})();
var statearr_27666_27772 = state_27657__$1;
(statearr_27666_27772[(2)] = null);

(statearr_27666_27772[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27658 === (5))){
var inst_27641 = cljs.core.async.close_BANG_.call(null,jobs);
var state_27657__$1 = state_27657;
var statearr_27667_27773 = state_27657__$1;
(statearr_27667_27773[(2)] = inst_27641);

(statearr_27667_27773[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27658 === (8))){
var inst_27643 = (state_27657[(8)]);
var inst_27648 = (state_27657[(2)]);
var state_27657__$1 = (function (){var statearr_27668 = state_27657;
(statearr_27668[(10)] = inst_27648);

return statearr_27668;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27657__$1,(9),results,inst_27643);
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
var cljs$core$async$pipeline_STAR__$_state_machine__27310__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27310__auto____0 = (function (){
var statearr_27669 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27669[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27310__auto__);

(statearr_27669[(1)] = (1));

return statearr_27669;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27310__auto____1 = (function (state_27657){
while(true){
var ret_value__27311__auto__ = (function (){try{while(true){
var result__27312__auto__ = switch__27309__auto__.call(null,state_27657);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27312__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27312__auto__;
}
break;
}
}catch (e27670){if((e27670 instanceof Object)){
var ex__27313__auto__ = e27670;
var statearr_27671_27774 = state_27657;
(statearr_27671_27774[(5)] = ex__27313__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27657);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27670;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27311__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27775 = state_27657;
state_27657 = G__27775;
continue;
} else {
return ret_value__27311__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27310__auto__ = function(state_27657){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27310__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27310__auto____1.call(this,state_27657);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27310__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27310__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27310__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27310__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27310__auto__;
})()
})();
var state__27406__auto__ = (function (){var statearr_27672 = f__27405__auto__.call(null);
(statearr_27672[(6)] = c__27404__auto___27767);

return statearr_27672;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27406__auto__);
}));


var c__27404__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27405__auto__ = (function (){var switch__27309__auto__ = (function (state_27710){
var state_val_27711 = (state_27710[(1)]);
if((state_val_27711 === (7))){
var inst_27706 = (state_27710[(2)]);
var state_27710__$1 = state_27710;
var statearr_27712_27776 = state_27710__$1;
(statearr_27712_27776[(2)] = inst_27706);

(statearr_27712_27776[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27711 === (20))){
var state_27710__$1 = state_27710;
var statearr_27713_27777 = state_27710__$1;
(statearr_27713_27777[(2)] = null);

(statearr_27713_27777[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27711 === (1))){
var state_27710__$1 = state_27710;
var statearr_27714_27778 = state_27710__$1;
(statearr_27714_27778[(2)] = null);

(statearr_27714_27778[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27711 === (4))){
var inst_27675 = (state_27710[(7)]);
var inst_27675__$1 = (state_27710[(2)]);
var inst_27676 = (inst_27675__$1 == null);
var state_27710__$1 = (function (){var statearr_27715 = state_27710;
(statearr_27715[(7)] = inst_27675__$1);

return statearr_27715;
})();
if(cljs.core.truth_(inst_27676)){
var statearr_27716_27779 = state_27710__$1;
(statearr_27716_27779[(1)] = (5));

} else {
var statearr_27717_27780 = state_27710__$1;
(statearr_27717_27780[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27711 === (15))){
var inst_27688 = (state_27710[(8)]);
var state_27710__$1 = state_27710;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27710__$1,(18),to,inst_27688);
} else {
if((state_val_27711 === (21))){
var inst_27701 = (state_27710[(2)]);
var state_27710__$1 = state_27710;
var statearr_27718_27781 = state_27710__$1;
(statearr_27718_27781[(2)] = inst_27701);

(statearr_27718_27781[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27711 === (13))){
var inst_27703 = (state_27710[(2)]);
var state_27710__$1 = (function (){var statearr_27719 = state_27710;
(statearr_27719[(9)] = inst_27703);

return statearr_27719;
})();
var statearr_27720_27782 = state_27710__$1;
(statearr_27720_27782[(2)] = null);

(statearr_27720_27782[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27711 === (6))){
var inst_27675 = (state_27710[(7)]);
var state_27710__$1 = state_27710;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27710__$1,(11),inst_27675);
} else {
if((state_val_27711 === (17))){
var inst_27696 = (state_27710[(2)]);
var state_27710__$1 = state_27710;
if(cljs.core.truth_(inst_27696)){
var statearr_27721_27783 = state_27710__$1;
(statearr_27721_27783[(1)] = (19));

} else {
var statearr_27722_27784 = state_27710__$1;
(statearr_27722_27784[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27711 === (3))){
var inst_27708 = (state_27710[(2)]);
var state_27710__$1 = state_27710;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27710__$1,inst_27708);
} else {
if((state_val_27711 === (12))){
var inst_27685 = (state_27710[(10)]);
var state_27710__$1 = state_27710;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27710__$1,(14),inst_27685);
} else {
if((state_val_27711 === (2))){
var state_27710__$1 = state_27710;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27710__$1,(4),results);
} else {
if((state_val_27711 === (19))){
var state_27710__$1 = state_27710;
var statearr_27723_27785 = state_27710__$1;
(statearr_27723_27785[(2)] = null);

(statearr_27723_27785[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27711 === (11))){
var inst_27685 = (state_27710[(2)]);
var state_27710__$1 = (function (){var statearr_27724 = state_27710;
(statearr_27724[(10)] = inst_27685);

return statearr_27724;
})();
var statearr_27725_27786 = state_27710__$1;
(statearr_27725_27786[(2)] = null);

(statearr_27725_27786[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27711 === (9))){
var state_27710__$1 = state_27710;
var statearr_27726_27787 = state_27710__$1;
(statearr_27726_27787[(2)] = null);

(statearr_27726_27787[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27711 === (5))){
var state_27710__$1 = state_27710;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27727_27788 = state_27710__$1;
(statearr_27727_27788[(1)] = (8));

} else {
var statearr_27728_27789 = state_27710__$1;
(statearr_27728_27789[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27711 === (14))){
var inst_27688 = (state_27710[(8)]);
var inst_27688__$1 = (state_27710[(2)]);
var inst_27689 = (inst_27688__$1 == null);
var inst_27690 = cljs.core.not.call(null,inst_27689);
var state_27710__$1 = (function (){var statearr_27729 = state_27710;
(statearr_27729[(8)] = inst_27688__$1);

return statearr_27729;
})();
if(inst_27690){
var statearr_27730_27790 = state_27710__$1;
(statearr_27730_27790[(1)] = (15));

} else {
var statearr_27731_27791 = state_27710__$1;
(statearr_27731_27791[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27711 === (16))){
var state_27710__$1 = state_27710;
var statearr_27732_27792 = state_27710__$1;
(statearr_27732_27792[(2)] = false);

(statearr_27732_27792[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27711 === (10))){
var inst_27682 = (state_27710[(2)]);
var state_27710__$1 = state_27710;
var statearr_27733_27793 = state_27710__$1;
(statearr_27733_27793[(2)] = inst_27682);

(statearr_27733_27793[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27711 === (18))){
var inst_27693 = (state_27710[(2)]);
var state_27710__$1 = state_27710;
var statearr_27734_27794 = state_27710__$1;
(statearr_27734_27794[(2)] = inst_27693);

(statearr_27734_27794[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27711 === (8))){
var inst_27679 = cljs.core.async.close_BANG_.call(null,to);
var state_27710__$1 = state_27710;
var statearr_27735_27795 = state_27710__$1;
(statearr_27735_27795[(2)] = inst_27679);

(statearr_27735_27795[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__27310__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27310__auto____0 = (function (){
var statearr_27736 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27736[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27310__auto__);

(statearr_27736[(1)] = (1));

return statearr_27736;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27310__auto____1 = (function (state_27710){
while(true){
var ret_value__27311__auto__ = (function (){try{while(true){
var result__27312__auto__ = switch__27309__auto__.call(null,state_27710);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27312__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27312__auto__;
}
break;
}
}catch (e27737){if((e27737 instanceof Object)){
var ex__27313__auto__ = e27737;
var statearr_27738_27796 = state_27710;
(statearr_27738_27796[(5)] = ex__27313__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27710);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27737;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27311__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27797 = state_27710;
state_27710 = G__27797;
continue;
} else {
return ret_value__27311__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27310__auto__ = function(state_27710){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27310__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27310__auto____1.call(this,state_27710);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27310__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27310__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27310__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27310__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27310__auto__;
})()
})();
var state__27406__auto__ = (function (){var statearr_27739 = f__27405__auto__.call(null);
(statearr_27739[(6)] = c__27404__auto__);

return statearr_27739;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27406__auto__);
}));

return c__27404__auto__;
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
var G__27799 = arguments.length;
switch (G__27799) {
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
var G__27802 = arguments.length;
switch (G__27802) {
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
var G__27805 = arguments.length;
switch (G__27805) {
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
var c__27404__auto___27854 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27405__auto__ = (function (){var switch__27309__auto__ = (function (state_27831){
var state_val_27832 = (state_27831[(1)]);
if((state_val_27832 === (7))){
var inst_27827 = (state_27831[(2)]);
var state_27831__$1 = state_27831;
var statearr_27833_27855 = state_27831__$1;
(statearr_27833_27855[(2)] = inst_27827);

(statearr_27833_27855[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27832 === (1))){
var state_27831__$1 = state_27831;
var statearr_27834_27856 = state_27831__$1;
(statearr_27834_27856[(2)] = null);

(statearr_27834_27856[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27832 === (4))){
var inst_27808 = (state_27831[(7)]);
var inst_27808__$1 = (state_27831[(2)]);
var inst_27809 = (inst_27808__$1 == null);
var state_27831__$1 = (function (){var statearr_27835 = state_27831;
(statearr_27835[(7)] = inst_27808__$1);

return statearr_27835;
})();
if(cljs.core.truth_(inst_27809)){
var statearr_27836_27857 = state_27831__$1;
(statearr_27836_27857[(1)] = (5));

} else {
var statearr_27837_27858 = state_27831__$1;
(statearr_27837_27858[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27832 === (13))){
var state_27831__$1 = state_27831;
var statearr_27838_27859 = state_27831__$1;
(statearr_27838_27859[(2)] = null);

(statearr_27838_27859[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27832 === (6))){
var inst_27808 = (state_27831[(7)]);
var inst_27814 = p.call(null,inst_27808);
var state_27831__$1 = state_27831;
if(cljs.core.truth_(inst_27814)){
var statearr_27839_27860 = state_27831__$1;
(statearr_27839_27860[(1)] = (9));

} else {
var statearr_27840_27861 = state_27831__$1;
(statearr_27840_27861[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27832 === (3))){
var inst_27829 = (state_27831[(2)]);
var state_27831__$1 = state_27831;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27831__$1,inst_27829);
} else {
if((state_val_27832 === (12))){
var state_27831__$1 = state_27831;
var statearr_27841_27862 = state_27831__$1;
(statearr_27841_27862[(2)] = null);

(statearr_27841_27862[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27832 === (2))){
var state_27831__$1 = state_27831;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27831__$1,(4),ch);
} else {
if((state_val_27832 === (11))){
var inst_27808 = (state_27831[(7)]);
var inst_27818 = (state_27831[(2)]);
var state_27831__$1 = state_27831;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27831__$1,(8),inst_27818,inst_27808);
} else {
if((state_val_27832 === (9))){
var state_27831__$1 = state_27831;
var statearr_27842_27863 = state_27831__$1;
(statearr_27842_27863[(2)] = tc);

(statearr_27842_27863[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27832 === (5))){
var inst_27811 = cljs.core.async.close_BANG_.call(null,tc);
var inst_27812 = cljs.core.async.close_BANG_.call(null,fc);
var state_27831__$1 = (function (){var statearr_27843 = state_27831;
(statearr_27843[(8)] = inst_27811);

return statearr_27843;
})();
var statearr_27844_27864 = state_27831__$1;
(statearr_27844_27864[(2)] = inst_27812);

(statearr_27844_27864[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27832 === (14))){
var inst_27825 = (state_27831[(2)]);
var state_27831__$1 = state_27831;
var statearr_27845_27865 = state_27831__$1;
(statearr_27845_27865[(2)] = inst_27825);

(statearr_27845_27865[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27832 === (10))){
var state_27831__$1 = state_27831;
var statearr_27846_27866 = state_27831__$1;
(statearr_27846_27866[(2)] = fc);

(statearr_27846_27866[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27832 === (8))){
var inst_27820 = (state_27831[(2)]);
var state_27831__$1 = state_27831;
if(cljs.core.truth_(inst_27820)){
var statearr_27847_27867 = state_27831__$1;
(statearr_27847_27867[(1)] = (12));

} else {
var statearr_27848_27868 = state_27831__$1;
(statearr_27848_27868[(1)] = (13));

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
var cljs$core$async$state_machine__27310__auto__ = null;
var cljs$core$async$state_machine__27310__auto____0 = (function (){
var statearr_27849 = [null,null,null,null,null,null,null,null,null];
(statearr_27849[(0)] = cljs$core$async$state_machine__27310__auto__);

(statearr_27849[(1)] = (1));

return statearr_27849;
});
var cljs$core$async$state_machine__27310__auto____1 = (function (state_27831){
while(true){
var ret_value__27311__auto__ = (function (){try{while(true){
var result__27312__auto__ = switch__27309__auto__.call(null,state_27831);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27312__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27312__auto__;
}
break;
}
}catch (e27850){if((e27850 instanceof Object)){
var ex__27313__auto__ = e27850;
var statearr_27851_27869 = state_27831;
(statearr_27851_27869[(5)] = ex__27313__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27831);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27850;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27311__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27870 = state_27831;
state_27831 = G__27870;
continue;
} else {
return ret_value__27311__auto__;
}
break;
}
});
cljs$core$async$state_machine__27310__auto__ = function(state_27831){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27310__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27310__auto____1.call(this,state_27831);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27310__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27310__auto____0;
cljs$core$async$state_machine__27310__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27310__auto____1;
return cljs$core$async$state_machine__27310__auto__;
})()
})();
var state__27406__auto__ = (function (){var statearr_27852 = f__27405__auto__.call(null);
(statearr_27852[(6)] = c__27404__auto___27854);

return statearr_27852;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27406__auto__);
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
var c__27404__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27405__auto__ = (function (){var switch__27309__auto__ = (function (state_27891){
var state_val_27892 = (state_27891[(1)]);
if((state_val_27892 === (7))){
var inst_27887 = (state_27891[(2)]);
var state_27891__$1 = state_27891;
var statearr_27893_27911 = state_27891__$1;
(statearr_27893_27911[(2)] = inst_27887);

(statearr_27893_27911[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27892 === (1))){
var inst_27871 = init;
var state_27891__$1 = (function (){var statearr_27894 = state_27891;
(statearr_27894[(7)] = inst_27871);

return statearr_27894;
})();
var statearr_27895_27912 = state_27891__$1;
(statearr_27895_27912[(2)] = null);

(statearr_27895_27912[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27892 === (4))){
var inst_27874 = (state_27891[(8)]);
var inst_27874__$1 = (state_27891[(2)]);
var inst_27875 = (inst_27874__$1 == null);
var state_27891__$1 = (function (){var statearr_27896 = state_27891;
(statearr_27896[(8)] = inst_27874__$1);

return statearr_27896;
})();
if(cljs.core.truth_(inst_27875)){
var statearr_27897_27913 = state_27891__$1;
(statearr_27897_27913[(1)] = (5));

} else {
var statearr_27898_27914 = state_27891__$1;
(statearr_27898_27914[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27892 === (6))){
var inst_27874 = (state_27891[(8)]);
var inst_27871 = (state_27891[(7)]);
var inst_27878 = (state_27891[(9)]);
var inst_27878__$1 = f.call(null,inst_27871,inst_27874);
var inst_27879 = cljs.core.reduced_QMARK_.call(null,inst_27878__$1);
var state_27891__$1 = (function (){var statearr_27899 = state_27891;
(statearr_27899[(9)] = inst_27878__$1);

return statearr_27899;
})();
if(inst_27879){
var statearr_27900_27915 = state_27891__$1;
(statearr_27900_27915[(1)] = (8));

} else {
var statearr_27901_27916 = state_27891__$1;
(statearr_27901_27916[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27892 === (3))){
var inst_27889 = (state_27891[(2)]);
var state_27891__$1 = state_27891;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27891__$1,inst_27889);
} else {
if((state_val_27892 === (2))){
var state_27891__$1 = state_27891;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27891__$1,(4),ch);
} else {
if((state_val_27892 === (9))){
var inst_27878 = (state_27891[(9)]);
var inst_27871 = inst_27878;
var state_27891__$1 = (function (){var statearr_27902 = state_27891;
(statearr_27902[(7)] = inst_27871);

return statearr_27902;
})();
var statearr_27903_27917 = state_27891__$1;
(statearr_27903_27917[(2)] = null);

(statearr_27903_27917[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27892 === (5))){
var inst_27871 = (state_27891[(7)]);
var state_27891__$1 = state_27891;
var statearr_27904_27918 = state_27891__$1;
(statearr_27904_27918[(2)] = inst_27871);

(statearr_27904_27918[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27892 === (10))){
var inst_27885 = (state_27891[(2)]);
var state_27891__$1 = state_27891;
var statearr_27905_27919 = state_27891__$1;
(statearr_27905_27919[(2)] = inst_27885);

(statearr_27905_27919[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27892 === (8))){
var inst_27878 = (state_27891[(9)]);
var inst_27881 = cljs.core.deref.call(null,inst_27878);
var state_27891__$1 = state_27891;
var statearr_27906_27920 = state_27891__$1;
(statearr_27906_27920[(2)] = inst_27881);

(statearr_27906_27920[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__27310__auto__ = null;
var cljs$core$async$reduce_$_state_machine__27310__auto____0 = (function (){
var statearr_27907 = [null,null,null,null,null,null,null,null,null,null];
(statearr_27907[(0)] = cljs$core$async$reduce_$_state_machine__27310__auto__);

(statearr_27907[(1)] = (1));

return statearr_27907;
});
var cljs$core$async$reduce_$_state_machine__27310__auto____1 = (function (state_27891){
while(true){
var ret_value__27311__auto__ = (function (){try{while(true){
var result__27312__auto__ = switch__27309__auto__.call(null,state_27891);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27312__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27312__auto__;
}
break;
}
}catch (e27908){if((e27908 instanceof Object)){
var ex__27313__auto__ = e27908;
var statearr_27909_27921 = state_27891;
(statearr_27909_27921[(5)] = ex__27313__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27891);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27908;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27311__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27922 = state_27891;
state_27891 = G__27922;
continue;
} else {
return ret_value__27311__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__27310__auto__ = function(state_27891){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__27310__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__27310__auto____1.call(this,state_27891);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__27310__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__27310__auto____0;
cljs$core$async$reduce_$_state_machine__27310__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__27310__auto____1;
return cljs$core$async$reduce_$_state_machine__27310__auto__;
})()
})();
var state__27406__auto__ = (function (){var statearr_27910 = f__27405__auto__.call(null);
(statearr_27910[(6)] = c__27404__auto__);

return statearr_27910;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27406__auto__);
}));

return c__27404__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__27404__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27405__auto__ = (function (){var switch__27309__auto__ = (function (state_27928){
var state_val_27929 = (state_27928[(1)]);
if((state_val_27929 === (1))){
var inst_27923 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_27928__$1 = state_27928;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27928__$1,(2),inst_27923);
} else {
if((state_val_27929 === (2))){
var inst_27925 = (state_27928[(2)]);
var inst_27926 = f__$1.call(null,inst_27925);
var state_27928__$1 = state_27928;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27928__$1,inst_27926);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__27310__auto__ = null;
var cljs$core$async$transduce_$_state_machine__27310__auto____0 = (function (){
var statearr_27930 = [null,null,null,null,null,null,null];
(statearr_27930[(0)] = cljs$core$async$transduce_$_state_machine__27310__auto__);

(statearr_27930[(1)] = (1));

return statearr_27930;
});
var cljs$core$async$transduce_$_state_machine__27310__auto____1 = (function (state_27928){
while(true){
var ret_value__27311__auto__ = (function (){try{while(true){
var result__27312__auto__ = switch__27309__auto__.call(null,state_27928);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27312__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27312__auto__;
}
break;
}
}catch (e27931){if((e27931 instanceof Object)){
var ex__27313__auto__ = e27931;
var statearr_27932_27934 = state_27928;
(statearr_27932_27934[(5)] = ex__27313__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27928);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27931;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27311__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27935 = state_27928;
state_27928 = G__27935;
continue;
} else {
return ret_value__27311__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__27310__auto__ = function(state_27928){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__27310__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__27310__auto____1.call(this,state_27928);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__27310__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__27310__auto____0;
cljs$core$async$transduce_$_state_machine__27310__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__27310__auto____1;
return cljs$core$async$transduce_$_state_machine__27310__auto__;
})()
})();
var state__27406__auto__ = (function (){var statearr_27933 = f__27405__auto__.call(null);
(statearr_27933[(6)] = c__27404__auto__);

return statearr_27933;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27406__auto__);
}));

return c__27404__auto__;
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
var G__27937 = arguments.length;
switch (G__27937) {
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
var c__27404__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27405__auto__ = (function (){var switch__27309__auto__ = (function (state_27962){
var state_val_27963 = (state_27962[(1)]);
if((state_val_27963 === (7))){
var inst_27944 = (state_27962[(2)]);
var state_27962__$1 = state_27962;
var statearr_27964_27985 = state_27962__$1;
(statearr_27964_27985[(2)] = inst_27944);

(statearr_27964_27985[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27963 === (1))){
var inst_27938 = cljs.core.seq.call(null,coll);
var inst_27939 = inst_27938;
var state_27962__$1 = (function (){var statearr_27965 = state_27962;
(statearr_27965[(7)] = inst_27939);

return statearr_27965;
})();
var statearr_27966_27986 = state_27962__$1;
(statearr_27966_27986[(2)] = null);

(statearr_27966_27986[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27963 === (4))){
var inst_27939 = (state_27962[(7)]);
var inst_27942 = cljs.core.first.call(null,inst_27939);
var state_27962__$1 = state_27962;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27962__$1,(7),ch,inst_27942);
} else {
if((state_val_27963 === (13))){
var inst_27956 = (state_27962[(2)]);
var state_27962__$1 = state_27962;
var statearr_27967_27987 = state_27962__$1;
(statearr_27967_27987[(2)] = inst_27956);

(statearr_27967_27987[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27963 === (6))){
var inst_27947 = (state_27962[(2)]);
var state_27962__$1 = state_27962;
if(cljs.core.truth_(inst_27947)){
var statearr_27968_27988 = state_27962__$1;
(statearr_27968_27988[(1)] = (8));

} else {
var statearr_27969_27989 = state_27962__$1;
(statearr_27969_27989[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27963 === (3))){
var inst_27960 = (state_27962[(2)]);
var state_27962__$1 = state_27962;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27962__$1,inst_27960);
} else {
if((state_val_27963 === (12))){
var state_27962__$1 = state_27962;
var statearr_27970_27990 = state_27962__$1;
(statearr_27970_27990[(2)] = null);

(statearr_27970_27990[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27963 === (2))){
var inst_27939 = (state_27962[(7)]);
var state_27962__$1 = state_27962;
if(cljs.core.truth_(inst_27939)){
var statearr_27971_27991 = state_27962__$1;
(statearr_27971_27991[(1)] = (4));

} else {
var statearr_27972_27992 = state_27962__$1;
(statearr_27972_27992[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27963 === (11))){
var inst_27953 = cljs.core.async.close_BANG_.call(null,ch);
var state_27962__$1 = state_27962;
var statearr_27973_27993 = state_27962__$1;
(statearr_27973_27993[(2)] = inst_27953);

(statearr_27973_27993[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27963 === (9))){
var state_27962__$1 = state_27962;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27974_27994 = state_27962__$1;
(statearr_27974_27994[(1)] = (11));

} else {
var statearr_27975_27995 = state_27962__$1;
(statearr_27975_27995[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27963 === (5))){
var inst_27939 = (state_27962[(7)]);
var state_27962__$1 = state_27962;
var statearr_27976_27996 = state_27962__$1;
(statearr_27976_27996[(2)] = inst_27939);

(statearr_27976_27996[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27963 === (10))){
var inst_27958 = (state_27962[(2)]);
var state_27962__$1 = state_27962;
var statearr_27977_27997 = state_27962__$1;
(statearr_27977_27997[(2)] = inst_27958);

(statearr_27977_27997[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27963 === (8))){
var inst_27939 = (state_27962[(7)]);
var inst_27949 = cljs.core.next.call(null,inst_27939);
var inst_27939__$1 = inst_27949;
var state_27962__$1 = (function (){var statearr_27978 = state_27962;
(statearr_27978[(7)] = inst_27939__$1);

return statearr_27978;
})();
var statearr_27979_27998 = state_27962__$1;
(statearr_27979_27998[(2)] = null);

(statearr_27979_27998[(1)] = (2));


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
var cljs$core$async$state_machine__27310__auto__ = null;
var cljs$core$async$state_machine__27310__auto____0 = (function (){
var statearr_27980 = [null,null,null,null,null,null,null,null];
(statearr_27980[(0)] = cljs$core$async$state_machine__27310__auto__);

(statearr_27980[(1)] = (1));

return statearr_27980;
});
var cljs$core$async$state_machine__27310__auto____1 = (function (state_27962){
while(true){
var ret_value__27311__auto__ = (function (){try{while(true){
var result__27312__auto__ = switch__27309__auto__.call(null,state_27962);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27312__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27312__auto__;
}
break;
}
}catch (e27981){if((e27981 instanceof Object)){
var ex__27313__auto__ = e27981;
var statearr_27982_27999 = state_27962;
(statearr_27982_27999[(5)] = ex__27313__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27962);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27981;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27311__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28000 = state_27962;
state_27962 = G__28000;
continue;
} else {
return ret_value__27311__auto__;
}
break;
}
});
cljs$core$async$state_machine__27310__auto__ = function(state_27962){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27310__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27310__auto____1.call(this,state_27962);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27310__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27310__auto____0;
cljs$core$async$state_machine__27310__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27310__auto____1;
return cljs$core$async$state_machine__27310__auto__;
})()
})();
var state__27406__auto__ = (function (){var statearr_27983 = f__27405__auto__.call(null);
(statearr_27983[(6)] = c__27404__auto__);

return statearr_27983;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27406__auto__);
}));

return c__27404__auto__;
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

var cljs$core$async$Mux$muxch_STAR_$dyn_28001 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_28001.call(null,_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_28002 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_28002.call(null,m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_28003 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_28003.call(null,m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_28004 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_28004.call(null,m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28005 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28005 = (function (ch,cs,meta28006){
this.ch = ch;
this.cs = cs;
this.meta28006 = meta28006;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28005.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28007,meta28006__$1){
var self__ = this;
var _28007__$1 = this;
return (new cljs.core.async.t_cljs$core$async28005(self__.ch,self__.cs,meta28006__$1));
}));

(cljs.core.async.t_cljs$core$async28005.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28007){
var self__ = this;
var _28007__$1 = this;
return self__.meta28006;
}));

(cljs.core.async.t_cljs$core$async28005.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28005.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async28005.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28005.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async28005.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async28005.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async28005.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta28006","meta28006",721501471,null)], null);
}));

(cljs.core.async.t_cljs$core$async28005.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28005.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28005");

(cljs.core.async.t_cljs$core$async28005.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async28005");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28005.
 */
cljs.core.async.__GT_t_cljs$core$async28005 = (function cljs$core$async$mult_$___GT_t_cljs$core$async28005(ch__$1,cs__$1,meta28006){
return (new cljs.core.async.t_cljs$core$async28005(ch__$1,cs__$1,meta28006));
});

}

return (new cljs.core.async.t_cljs$core$async28005(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__27404__auto___28227 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27405__auto__ = (function (){var switch__27309__auto__ = (function (state_28142){
var state_val_28143 = (state_28142[(1)]);
if((state_val_28143 === (7))){
var inst_28138 = (state_28142[(2)]);
var state_28142__$1 = state_28142;
var statearr_28144_28228 = state_28142__$1;
(statearr_28144_28228[(2)] = inst_28138);

(statearr_28144_28228[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28143 === (20))){
var inst_28041 = (state_28142[(7)]);
var inst_28053 = cljs.core.first.call(null,inst_28041);
var inst_28054 = cljs.core.nth.call(null,inst_28053,(0),null);
var inst_28055 = cljs.core.nth.call(null,inst_28053,(1),null);
var state_28142__$1 = (function (){var statearr_28145 = state_28142;
(statearr_28145[(8)] = inst_28054);

return statearr_28145;
})();
if(cljs.core.truth_(inst_28055)){
var statearr_28146_28229 = state_28142__$1;
(statearr_28146_28229[(1)] = (22));

} else {
var statearr_28147_28230 = state_28142__$1;
(statearr_28147_28230[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28143 === (27))){
var inst_28090 = (state_28142[(9)]);
var inst_28010 = (state_28142[(10)]);
var inst_28085 = (state_28142[(11)]);
var inst_28083 = (state_28142[(12)]);
var inst_28090__$1 = cljs.core._nth.call(null,inst_28083,inst_28085);
var inst_28091 = cljs.core.async.put_BANG_.call(null,inst_28090__$1,inst_28010,done);
var state_28142__$1 = (function (){var statearr_28148 = state_28142;
(statearr_28148[(9)] = inst_28090__$1);

return statearr_28148;
})();
if(cljs.core.truth_(inst_28091)){
var statearr_28149_28231 = state_28142__$1;
(statearr_28149_28231[(1)] = (30));

} else {
var statearr_28150_28232 = state_28142__$1;
(statearr_28150_28232[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28143 === (1))){
var state_28142__$1 = state_28142;
var statearr_28151_28233 = state_28142__$1;
(statearr_28151_28233[(2)] = null);

(statearr_28151_28233[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28143 === (24))){
var inst_28041 = (state_28142[(7)]);
var inst_28060 = (state_28142[(2)]);
var inst_28061 = cljs.core.next.call(null,inst_28041);
var inst_28019 = inst_28061;
var inst_28020 = null;
var inst_28021 = (0);
var inst_28022 = (0);
var state_28142__$1 = (function (){var statearr_28152 = state_28142;
(statearr_28152[(13)] = inst_28019);

(statearr_28152[(14)] = inst_28022);

(statearr_28152[(15)] = inst_28060);

(statearr_28152[(16)] = inst_28021);

(statearr_28152[(17)] = inst_28020);

return statearr_28152;
})();
var statearr_28153_28234 = state_28142__$1;
(statearr_28153_28234[(2)] = null);

(statearr_28153_28234[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28143 === (39))){
var state_28142__$1 = state_28142;
var statearr_28157_28235 = state_28142__$1;
(statearr_28157_28235[(2)] = null);

(statearr_28157_28235[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28143 === (4))){
var inst_28010 = (state_28142[(10)]);
var inst_28010__$1 = (state_28142[(2)]);
var inst_28011 = (inst_28010__$1 == null);
var state_28142__$1 = (function (){var statearr_28158 = state_28142;
(statearr_28158[(10)] = inst_28010__$1);

return statearr_28158;
})();
if(cljs.core.truth_(inst_28011)){
var statearr_28159_28236 = state_28142__$1;
(statearr_28159_28236[(1)] = (5));

} else {
var statearr_28160_28237 = state_28142__$1;
(statearr_28160_28237[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28143 === (15))){
var inst_28019 = (state_28142[(13)]);
var inst_28022 = (state_28142[(14)]);
var inst_28021 = (state_28142[(16)]);
var inst_28020 = (state_28142[(17)]);
var inst_28037 = (state_28142[(2)]);
var inst_28038 = (inst_28022 + (1));
var tmp28154 = inst_28019;
var tmp28155 = inst_28021;
var tmp28156 = inst_28020;
var inst_28019__$1 = tmp28154;
var inst_28020__$1 = tmp28156;
var inst_28021__$1 = tmp28155;
var inst_28022__$1 = inst_28038;
var state_28142__$1 = (function (){var statearr_28161 = state_28142;
(statearr_28161[(13)] = inst_28019__$1);

(statearr_28161[(14)] = inst_28022__$1);

(statearr_28161[(18)] = inst_28037);

(statearr_28161[(16)] = inst_28021__$1);

(statearr_28161[(17)] = inst_28020__$1);

return statearr_28161;
})();
var statearr_28162_28238 = state_28142__$1;
(statearr_28162_28238[(2)] = null);

(statearr_28162_28238[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28143 === (21))){
var inst_28064 = (state_28142[(2)]);
var state_28142__$1 = state_28142;
var statearr_28166_28239 = state_28142__$1;
(statearr_28166_28239[(2)] = inst_28064);

(statearr_28166_28239[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28143 === (31))){
var inst_28090 = (state_28142[(9)]);
var inst_28094 = done.call(null,null);
var inst_28095 = cljs.core.async.untap_STAR_.call(null,m,inst_28090);
var state_28142__$1 = (function (){var statearr_28167 = state_28142;
(statearr_28167[(19)] = inst_28094);

return statearr_28167;
})();
var statearr_28168_28240 = state_28142__$1;
(statearr_28168_28240[(2)] = inst_28095);

(statearr_28168_28240[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28143 === (32))){
var inst_28084 = (state_28142[(20)]);
var inst_28085 = (state_28142[(11)]);
var inst_28083 = (state_28142[(12)]);
var inst_28082 = (state_28142[(21)]);
var inst_28097 = (state_28142[(2)]);
var inst_28098 = (inst_28085 + (1));
var tmp28163 = inst_28084;
var tmp28164 = inst_28083;
var tmp28165 = inst_28082;
var inst_28082__$1 = tmp28165;
var inst_28083__$1 = tmp28164;
var inst_28084__$1 = tmp28163;
var inst_28085__$1 = inst_28098;
var state_28142__$1 = (function (){var statearr_28169 = state_28142;
(statearr_28169[(20)] = inst_28084__$1);

(statearr_28169[(22)] = inst_28097);

(statearr_28169[(11)] = inst_28085__$1);

(statearr_28169[(12)] = inst_28083__$1);

(statearr_28169[(21)] = inst_28082__$1);

return statearr_28169;
})();
var statearr_28170_28241 = state_28142__$1;
(statearr_28170_28241[(2)] = null);

(statearr_28170_28241[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28143 === (40))){
var inst_28110 = (state_28142[(23)]);
var inst_28114 = done.call(null,null);
var inst_28115 = cljs.core.async.untap_STAR_.call(null,m,inst_28110);
var state_28142__$1 = (function (){var statearr_28171 = state_28142;
(statearr_28171[(24)] = inst_28114);

return statearr_28171;
})();
var statearr_28172_28242 = state_28142__$1;
(statearr_28172_28242[(2)] = inst_28115);

(statearr_28172_28242[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28143 === (33))){
var inst_28101 = (state_28142[(25)]);
var inst_28103 = cljs.core.chunked_seq_QMARK_.call(null,inst_28101);
var state_28142__$1 = state_28142;
if(inst_28103){
var statearr_28173_28243 = state_28142__$1;
(statearr_28173_28243[(1)] = (36));

} else {
var statearr_28174_28244 = state_28142__$1;
(statearr_28174_28244[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28143 === (13))){
var inst_28031 = (state_28142[(26)]);
var inst_28034 = cljs.core.async.close_BANG_.call(null,inst_28031);
var state_28142__$1 = state_28142;
var statearr_28175_28245 = state_28142__$1;
(statearr_28175_28245[(2)] = inst_28034);

(statearr_28175_28245[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28143 === (22))){
var inst_28054 = (state_28142[(8)]);
var inst_28057 = cljs.core.async.close_BANG_.call(null,inst_28054);
var state_28142__$1 = state_28142;
var statearr_28176_28246 = state_28142__$1;
(statearr_28176_28246[(2)] = inst_28057);

(statearr_28176_28246[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28143 === (36))){
var inst_28101 = (state_28142[(25)]);
var inst_28105 = cljs.core.chunk_first.call(null,inst_28101);
var inst_28106 = cljs.core.chunk_rest.call(null,inst_28101);
var inst_28107 = cljs.core.count.call(null,inst_28105);
var inst_28082 = inst_28106;
var inst_28083 = inst_28105;
var inst_28084 = inst_28107;
var inst_28085 = (0);
var state_28142__$1 = (function (){var statearr_28177 = state_28142;
(statearr_28177[(20)] = inst_28084);

(statearr_28177[(11)] = inst_28085);

(statearr_28177[(12)] = inst_28083);

(statearr_28177[(21)] = inst_28082);

return statearr_28177;
})();
var statearr_28178_28247 = state_28142__$1;
(statearr_28178_28247[(2)] = null);

(statearr_28178_28247[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28143 === (41))){
var inst_28101 = (state_28142[(25)]);
var inst_28117 = (state_28142[(2)]);
var inst_28118 = cljs.core.next.call(null,inst_28101);
var inst_28082 = inst_28118;
var inst_28083 = null;
var inst_28084 = (0);
var inst_28085 = (0);
var state_28142__$1 = (function (){var statearr_28179 = state_28142;
(statearr_28179[(20)] = inst_28084);

(statearr_28179[(11)] = inst_28085);

(statearr_28179[(27)] = inst_28117);

(statearr_28179[(12)] = inst_28083);

(statearr_28179[(21)] = inst_28082);

return statearr_28179;
})();
var statearr_28180_28248 = state_28142__$1;
(statearr_28180_28248[(2)] = null);

(statearr_28180_28248[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28143 === (43))){
var state_28142__$1 = state_28142;
var statearr_28181_28249 = state_28142__$1;
(statearr_28181_28249[(2)] = null);

(statearr_28181_28249[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28143 === (29))){
var inst_28126 = (state_28142[(2)]);
var state_28142__$1 = state_28142;
var statearr_28182_28250 = state_28142__$1;
(statearr_28182_28250[(2)] = inst_28126);

(statearr_28182_28250[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28143 === (44))){
var inst_28135 = (state_28142[(2)]);
var state_28142__$1 = (function (){var statearr_28183 = state_28142;
(statearr_28183[(28)] = inst_28135);

return statearr_28183;
})();
var statearr_28184_28251 = state_28142__$1;
(statearr_28184_28251[(2)] = null);

(statearr_28184_28251[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28143 === (6))){
var inst_28074 = (state_28142[(29)]);
var inst_28073 = cljs.core.deref.call(null,cs);
var inst_28074__$1 = cljs.core.keys.call(null,inst_28073);
var inst_28075 = cljs.core.count.call(null,inst_28074__$1);
var inst_28076 = cljs.core.reset_BANG_.call(null,dctr,inst_28075);
var inst_28081 = cljs.core.seq.call(null,inst_28074__$1);
var inst_28082 = inst_28081;
var inst_28083 = null;
var inst_28084 = (0);
var inst_28085 = (0);
var state_28142__$1 = (function (){var statearr_28185 = state_28142;
(statearr_28185[(20)] = inst_28084);

(statearr_28185[(29)] = inst_28074__$1);

(statearr_28185[(30)] = inst_28076);

(statearr_28185[(11)] = inst_28085);

(statearr_28185[(12)] = inst_28083);

(statearr_28185[(21)] = inst_28082);

return statearr_28185;
})();
var statearr_28186_28252 = state_28142__$1;
(statearr_28186_28252[(2)] = null);

(statearr_28186_28252[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28143 === (28))){
var inst_28101 = (state_28142[(25)]);
var inst_28082 = (state_28142[(21)]);
var inst_28101__$1 = cljs.core.seq.call(null,inst_28082);
var state_28142__$1 = (function (){var statearr_28187 = state_28142;
(statearr_28187[(25)] = inst_28101__$1);

return statearr_28187;
})();
if(inst_28101__$1){
var statearr_28188_28253 = state_28142__$1;
(statearr_28188_28253[(1)] = (33));

} else {
var statearr_28189_28254 = state_28142__$1;
(statearr_28189_28254[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28143 === (25))){
var inst_28084 = (state_28142[(20)]);
var inst_28085 = (state_28142[(11)]);
var inst_28087 = (inst_28085 < inst_28084);
var inst_28088 = inst_28087;
var state_28142__$1 = state_28142;
if(cljs.core.truth_(inst_28088)){
var statearr_28190_28255 = state_28142__$1;
(statearr_28190_28255[(1)] = (27));

} else {
var statearr_28191_28256 = state_28142__$1;
(statearr_28191_28256[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28143 === (34))){
var state_28142__$1 = state_28142;
var statearr_28192_28257 = state_28142__$1;
(statearr_28192_28257[(2)] = null);

(statearr_28192_28257[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28143 === (17))){
var state_28142__$1 = state_28142;
var statearr_28193_28258 = state_28142__$1;
(statearr_28193_28258[(2)] = null);

(statearr_28193_28258[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28143 === (3))){
var inst_28140 = (state_28142[(2)]);
var state_28142__$1 = state_28142;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28142__$1,inst_28140);
} else {
if((state_val_28143 === (12))){
var inst_28069 = (state_28142[(2)]);
var state_28142__$1 = state_28142;
var statearr_28194_28259 = state_28142__$1;
(statearr_28194_28259[(2)] = inst_28069);

(statearr_28194_28259[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28143 === (2))){
var state_28142__$1 = state_28142;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28142__$1,(4),ch);
} else {
if((state_val_28143 === (23))){
var state_28142__$1 = state_28142;
var statearr_28195_28260 = state_28142__$1;
(statearr_28195_28260[(2)] = null);

(statearr_28195_28260[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28143 === (35))){
var inst_28124 = (state_28142[(2)]);
var state_28142__$1 = state_28142;
var statearr_28196_28261 = state_28142__$1;
(statearr_28196_28261[(2)] = inst_28124);

(statearr_28196_28261[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28143 === (19))){
var inst_28041 = (state_28142[(7)]);
var inst_28045 = cljs.core.chunk_first.call(null,inst_28041);
var inst_28046 = cljs.core.chunk_rest.call(null,inst_28041);
var inst_28047 = cljs.core.count.call(null,inst_28045);
var inst_28019 = inst_28046;
var inst_28020 = inst_28045;
var inst_28021 = inst_28047;
var inst_28022 = (0);
var state_28142__$1 = (function (){var statearr_28197 = state_28142;
(statearr_28197[(13)] = inst_28019);

(statearr_28197[(14)] = inst_28022);

(statearr_28197[(16)] = inst_28021);

(statearr_28197[(17)] = inst_28020);

return statearr_28197;
})();
var statearr_28198_28262 = state_28142__$1;
(statearr_28198_28262[(2)] = null);

(statearr_28198_28262[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28143 === (11))){
var inst_28019 = (state_28142[(13)]);
var inst_28041 = (state_28142[(7)]);
var inst_28041__$1 = cljs.core.seq.call(null,inst_28019);
var state_28142__$1 = (function (){var statearr_28199 = state_28142;
(statearr_28199[(7)] = inst_28041__$1);

return statearr_28199;
})();
if(inst_28041__$1){
var statearr_28200_28263 = state_28142__$1;
(statearr_28200_28263[(1)] = (16));

} else {
var statearr_28201_28264 = state_28142__$1;
(statearr_28201_28264[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28143 === (9))){
var inst_28071 = (state_28142[(2)]);
var state_28142__$1 = state_28142;
var statearr_28202_28265 = state_28142__$1;
(statearr_28202_28265[(2)] = inst_28071);

(statearr_28202_28265[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28143 === (5))){
var inst_28017 = cljs.core.deref.call(null,cs);
var inst_28018 = cljs.core.seq.call(null,inst_28017);
var inst_28019 = inst_28018;
var inst_28020 = null;
var inst_28021 = (0);
var inst_28022 = (0);
var state_28142__$1 = (function (){var statearr_28203 = state_28142;
(statearr_28203[(13)] = inst_28019);

(statearr_28203[(14)] = inst_28022);

(statearr_28203[(16)] = inst_28021);

(statearr_28203[(17)] = inst_28020);

return statearr_28203;
})();
var statearr_28204_28266 = state_28142__$1;
(statearr_28204_28266[(2)] = null);

(statearr_28204_28266[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28143 === (14))){
var state_28142__$1 = state_28142;
var statearr_28205_28267 = state_28142__$1;
(statearr_28205_28267[(2)] = null);

(statearr_28205_28267[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28143 === (45))){
var inst_28132 = (state_28142[(2)]);
var state_28142__$1 = state_28142;
var statearr_28206_28268 = state_28142__$1;
(statearr_28206_28268[(2)] = inst_28132);

(statearr_28206_28268[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28143 === (26))){
var inst_28074 = (state_28142[(29)]);
var inst_28128 = (state_28142[(2)]);
var inst_28129 = cljs.core.seq.call(null,inst_28074);
var state_28142__$1 = (function (){var statearr_28207 = state_28142;
(statearr_28207[(31)] = inst_28128);

return statearr_28207;
})();
if(inst_28129){
var statearr_28208_28269 = state_28142__$1;
(statearr_28208_28269[(1)] = (42));

} else {
var statearr_28209_28270 = state_28142__$1;
(statearr_28209_28270[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28143 === (16))){
var inst_28041 = (state_28142[(7)]);
var inst_28043 = cljs.core.chunked_seq_QMARK_.call(null,inst_28041);
var state_28142__$1 = state_28142;
if(inst_28043){
var statearr_28210_28271 = state_28142__$1;
(statearr_28210_28271[(1)] = (19));

} else {
var statearr_28211_28272 = state_28142__$1;
(statearr_28211_28272[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28143 === (38))){
var inst_28121 = (state_28142[(2)]);
var state_28142__$1 = state_28142;
var statearr_28212_28273 = state_28142__$1;
(statearr_28212_28273[(2)] = inst_28121);

(statearr_28212_28273[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28143 === (30))){
var state_28142__$1 = state_28142;
var statearr_28213_28274 = state_28142__$1;
(statearr_28213_28274[(2)] = null);

(statearr_28213_28274[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28143 === (10))){
var inst_28022 = (state_28142[(14)]);
var inst_28020 = (state_28142[(17)]);
var inst_28030 = cljs.core._nth.call(null,inst_28020,inst_28022);
var inst_28031 = cljs.core.nth.call(null,inst_28030,(0),null);
var inst_28032 = cljs.core.nth.call(null,inst_28030,(1),null);
var state_28142__$1 = (function (){var statearr_28214 = state_28142;
(statearr_28214[(26)] = inst_28031);

return statearr_28214;
})();
if(cljs.core.truth_(inst_28032)){
var statearr_28215_28275 = state_28142__$1;
(statearr_28215_28275[(1)] = (13));

} else {
var statearr_28216_28276 = state_28142__$1;
(statearr_28216_28276[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28143 === (18))){
var inst_28067 = (state_28142[(2)]);
var state_28142__$1 = state_28142;
var statearr_28217_28277 = state_28142__$1;
(statearr_28217_28277[(2)] = inst_28067);

(statearr_28217_28277[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28143 === (42))){
var state_28142__$1 = state_28142;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28142__$1,(45),dchan);
} else {
if((state_val_28143 === (37))){
var inst_28101 = (state_28142[(25)]);
var inst_28110 = (state_28142[(23)]);
var inst_28010 = (state_28142[(10)]);
var inst_28110__$1 = cljs.core.first.call(null,inst_28101);
var inst_28111 = cljs.core.async.put_BANG_.call(null,inst_28110__$1,inst_28010,done);
var state_28142__$1 = (function (){var statearr_28218 = state_28142;
(statearr_28218[(23)] = inst_28110__$1);

return statearr_28218;
})();
if(cljs.core.truth_(inst_28111)){
var statearr_28219_28278 = state_28142__$1;
(statearr_28219_28278[(1)] = (39));

} else {
var statearr_28220_28279 = state_28142__$1;
(statearr_28220_28279[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28143 === (8))){
var inst_28022 = (state_28142[(14)]);
var inst_28021 = (state_28142[(16)]);
var inst_28024 = (inst_28022 < inst_28021);
var inst_28025 = inst_28024;
var state_28142__$1 = state_28142;
if(cljs.core.truth_(inst_28025)){
var statearr_28221_28280 = state_28142__$1;
(statearr_28221_28280[(1)] = (10));

} else {
var statearr_28222_28281 = state_28142__$1;
(statearr_28222_28281[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__27310__auto__ = null;
var cljs$core$async$mult_$_state_machine__27310__auto____0 = (function (){
var statearr_28223 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28223[(0)] = cljs$core$async$mult_$_state_machine__27310__auto__);

(statearr_28223[(1)] = (1));

return statearr_28223;
});
var cljs$core$async$mult_$_state_machine__27310__auto____1 = (function (state_28142){
while(true){
var ret_value__27311__auto__ = (function (){try{while(true){
var result__27312__auto__ = switch__27309__auto__.call(null,state_28142);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27312__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27312__auto__;
}
break;
}
}catch (e28224){if((e28224 instanceof Object)){
var ex__27313__auto__ = e28224;
var statearr_28225_28282 = state_28142;
(statearr_28225_28282[(5)] = ex__27313__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28142);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28224;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27311__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28283 = state_28142;
state_28142 = G__28283;
continue;
} else {
return ret_value__27311__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__27310__auto__ = function(state_28142){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__27310__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__27310__auto____1.call(this,state_28142);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__27310__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__27310__auto____0;
cljs$core$async$mult_$_state_machine__27310__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__27310__auto____1;
return cljs$core$async$mult_$_state_machine__27310__auto__;
})()
})();
var state__27406__auto__ = (function (){var statearr_28226 = f__27405__auto__.call(null);
(statearr_28226[(6)] = c__27404__auto___28227);

return statearr_28226;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27406__auto__);
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
var G__28285 = arguments.length;
switch (G__28285) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_28287 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_28287.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_28288 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_28288.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_28289 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_28289.call(null,m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_28290 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_28290.call(null,m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_28291 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_28291.call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___28302 = arguments.length;
var i__4737__auto___28303 = (0);
while(true){
if((i__4737__auto___28303 < len__4736__auto___28302)){
args__4742__auto__.push((arguments[i__4737__auto___28303]));

var G__28304 = (i__4737__auto___28303 + (1));
i__4737__auto___28303 = G__28304;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__28296){
var map__28297 = p__28296;
var map__28297__$1 = (((((!((map__28297 == null))))?(((((map__28297.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28297.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28297):map__28297);
var opts = map__28297__$1;
var statearr_28299_28305 = state;
(statearr_28299_28305[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts.call(null,(function (val){
var statearr_28300_28306 = state;
(statearr_28300_28306[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_28301_28307 = state;
(statearr_28301_28307[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq28292){
var G__28293 = cljs.core.first.call(null,seq28292);
var seq28292__$1 = cljs.core.next.call(null,seq28292);
var G__28294 = cljs.core.first.call(null,seq28292__$1);
var seq28292__$2 = cljs.core.next.call(null,seq28292__$1);
var G__28295 = cljs.core.first.call(null,seq28292__$2);
var seq28292__$3 = cljs.core.next.call(null,seq28292__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28293,G__28294,G__28295,seq28292__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28308 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28308 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta28309){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta28309 = meta28309;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28308.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28310,meta28309__$1){
var self__ = this;
var _28310__$1 = this;
return (new cljs.core.async.t_cljs$core$async28308(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta28309__$1));
}));

(cljs.core.async.t_cljs$core$async28308.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28310){
var self__ = this;
var _28310__$1 = this;
return self__.meta28309;
}));

(cljs.core.async.t_cljs$core$async28308.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28308.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async28308.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28308.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async28308.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async28308.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async28308.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async28308.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async28308.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta28309","meta28309",-279520184,null)], null);
}));

(cljs.core.async.t_cljs$core$async28308.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28308.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28308");

(cljs.core.async.t_cljs$core$async28308.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async28308");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28308.
 */
cljs.core.async.__GT_t_cljs$core$async28308 = (function cljs$core$async$mix_$___GT_t_cljs$core$async28308(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta28309){
return (new cljs.core.async.t_cljs$core$async28308(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta28309));
});

}

return (new cljs.core.async.t_cljs$core$async28308(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__27404__auto___28472 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27405__auto__ = (function (){var switch__27309__auto__ = (function (state_28412){
var state_val_28413 = (state_28412[(1)]);
if((state_val_28413 === (7))){
var inst_28327 = (state_28412[(2)]);
var state_28412__$1 = state_28412;
var statearr_28414_28473 = state_28412__$1;
(statearr_28414_28473[(2)] = inst_28327);

(statearr_28414_28473[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28413 === (20))){
var inst_28339 = (state_28412[(7)]);
var state_28412__$1 = state_28412;
var statearr_28415_28474 = state_28412__$1;
(statearr_28415_28474[(2)] = inst_28339);

(statearr_28415_28474[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28413 === (27))){
var state_28412__$1 = state_28412;
var statearr_28416_28475 = state_28412__$1;
(statearr_28416_28475[(2)] = null);

(statearr_28416_28475[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28413 === (1))){
var inst_28314 = (state_28412[(8)]);
var inst_28314__$1 = calc_state.call(null);
var inst_28316 = (inst_28314__$1 == null);
var inst_28317 = cljs.core.not.call(null,inst_28316);
var state_28412__$1 = (function (){var statearr_28417 = state_28412;
(statearr_28417[(8)] = inst_28314__$1);

return statearr_28417;
})();
if(inst_28317){
var statearr_28418_28476 = state_28412__$1;
(statearr_28418_28476[(1)] = (2));

} else {
var statearr_28419_28477 = state_28412__$1;
(statearr_28419_28477[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28413 === (24))){
var inst_28372 = (state_28412[(9)]);
var inst_28363 = (state_28412[(10)]);
var inst_28386 = (state_28412[(11)]);
var inst_28386__$1 = inst_28363.call(null,inst_28372);
var state_28412__$1 = (function (){var statearr_28420 = state_28412;
(statearr_28420[(11)] = inst_28386__$1);

return statearr_28420;
})();
if(cljs.core.truth_(inst_28386__$1)){
var statearr_28421_28478 = state_28412__$1;
(statearr_28421_28478[(1)] = (29));

} else {
var statearr_28422_28479 = state_28412__$1;
(statearr_28422_28479[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28413 === (4))){
var inst_28330 = (state_28412[(2)]);
var state_28412__$1 = state_28412;
if(cljs.core.truth_(inst_28330)){
var statearr_28423_28480 = state_28412__$1;
(statearr_28423_28480[(1)] = (8));

} else {
var statearr_28424_28481 = state_28412__$1;
(statearr_28424_28481[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28413 === (15))){
var inst_28357 = (state_28412[(2)]);
var state_28412__$1 = state_28412;
if(cljs.core.truth_(inst_28357)){
var statearr_28425_28482 = state_28412__$1;
(statearr_28425_28482[(1)] = (19));

} else {
var statearr_28426_28483 = state_28412__$1;
(statearr_28426_28483[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28413 === (21))){
var inst_28362 = (state_28412[(12)]);
var inst_28362__$1 = (state_28412[(2)]);
var inst_28363 = cljs.core.get.call(null,inst_28362__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_28364 = cljs.core.get.call(null,inst_28362__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28365 = cljs.core.get.call(null,inst_28362__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_28412__$1 = (function (){var statearr_28427 = state_28412;
(statearr_28427[(10)] = inst_28363);

(statearr_28427[(12)] = inst_28362__$1);

(statearr_28427[(13)] = inst_28364);

return statearr_28427;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_28412__$1,(22),inst_28365);
} else {
if((state_val_28413 === (31))){
var inst_28394 = (state_28412[(2)]);
var state_28412__$1 = state_28412;
if(cljs.core.truth_(inst_28394)){
var statearr_28428_28484 = state_28412__$1;
(statearr_28428_28484[(1)] = (32));

} else {
var statearr_28429_28485 = state_28412__$1;
(statearr_28429_28485[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28413 === (32))){
var inst_28371 = (state_28412[(14)]);
var state_28412__$1 = state_28412;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28412__$1,(35),out,inst_28371);
} else {
if((state_val_28413 === (33))){
var inst_28362 = (state_28412[(12)]);
var inst_28339 = inst_28362;
var state_28412__$1 = (function (){var statearr_28430 = state_28412;
(statearr_28430[(7)] = inst_28339);

return statearr_28430;
})();
var statearr_28431_28486 = state_28412__$1;
(statearr_28431_28486[(2)] = null);

(statearr_28431_28486[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28413 === (13))){
var inst_28339 = (state_28412[(7)]);
var inst_28346 = inst_28339.cljs$lang$protocol_mask$partition0$;
var inst_28347 = (inst_28346 & (64));
var inst_28348 = inst_28339.cljs$core$ISeq$;
var inst_28349 = (cljs.core.PROTOCOL_SENTINEL === inst_28348);
var inst_28350 = ((inst_28347) || (inst_28349));
var state_28412__$1 = state_28412;
if(cljs.core.truth_(inst_28350)){
var statearr_28432_28487 = state_28412__$1;
(statearr_28432_28487[(1)] = (16));

} else {
var statearr_28433_28488 = state_28412__$1;
(statearr_28433_28488[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28413 === (22))){
var inst_28372 = (state_28412[(9)]);
var inst_28371 = (state_28412[(14)]);
var inst_28370 = (state_28412[(2)]);
var inst_28371__$1 = cljs.core.nth.call(null,inst_28370,(0),null);
var inst_28372__$1 = cljs.core.nth.call(null,inst_28370,(1),null);
var inst_28373 = (inst_28371__$1 == null);
var inst_28374 = cljs.core._EQ_.call(null,inst_28372__$1,change);
var inst_28375 = ((inst_28373) || (inst_28374));
var state_28412__$1 = (function (){var statearr_28434 = state_28412;
(statearr_28434[(9)] = inst_28372__$1);

(statearr_28434[(14)] = inst_28371__$1);

return statearr_28434;
})();
if(cljs.core.truth_(inst_28375)){
var statearr_28435_28489 = state_28412__$1;
(statearr_28435_28489[(1)] = (23));

} else {
var statearr_28436_28490 = state_28412__$1;
(statearr_28436_28490[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28413 === (36))){
var inst_28362 = (state_28412[(12)]);
var inst_28339 = inst_28362;
var state_28412__$1 = (function (){var statearr_28437 = state_28412;
(statearr_28437[(7)] = inst_28339);

return statearr_28437;
})();
var statearr_28438_28491 = state_28412__$1;
(statearr_28438_28491[(2)] = null);

(statearr_28438_28491[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28413 === (29))){
var inst_28386 = (state_28412[(11)]);
var state_28412__$1 = state_28412;
var statearr_28439_28492 = state_28412__$1;
(statearr_28439_28492[(2)] = inst_28386);

(statearr_28439_28492[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28413 === (6))){
var state_28412__$1 = state_28412;
var statearr_28440_28493 = state_28412__$1;
(statearr_28440_28493[(2)] = false);

(statearr_28440_28493[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28413 === (28))){
var inst_28382 = (state_28412[(2)]);
var inst_28383 = calc_state.call(null);
var inst_28339 = inst_28383;
var state_28412__$1 = (function (){var statearr_28441 = state_28412;
(statearr_28441[(15)] = inst_28382);

(statearr_28441[(7)] = inst_28339);

return statearr_28441;
})();
var statearr_28442_28494 = state_28412__$1;
(statearr_28442_28494[(2)] = null);

(statearr_28442_28494[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28413 === (25))){
var inst_28408 = (state_28412[(2)]);
var state_28412__$1 = state_28412;
var statearr_28443_28495 = state_28412__$1;
(statearr_28443_28495[(2)] = inst_28408);

(statearr_28443_28495[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28413 === (34))){
var inst_28406 = (state_28412[(2)]);
var state_28412__$1 = state_28412;
var statearr_28444_28496 = state_28412__$1;
(statearr_28444_28496[(2)] = inst_28406);

(statearr_28444_28496[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28413 === (17))){
var state_28412__$1 = state_28412;
var statearr_28445_28497 = state_28412__$1;
(statearr_28445_28497[(2)] = false);

(statearr_28445_28497[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28413 === (3))){
var state_28412__$1 = state_28412;
var statearr_28446_28498 = state_28412__$1;
(statearr_28446_28498[(2)] = false);

(statearr_28446_28498[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28413 === (12))){
var inst_28410 = (state_28412[(2)]);
var state_28412__$1 = state_28412;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28412__$1,inst_28410);
} else {
if((state_val_28413 === (2))){
var inst_28314 = (state_28412[(8)]);
var inst_28319 = inst_28314.cljs$lang$protocol_mask$partition0$;
var inst_28320 = (inst_28319 & (64));
var inst_28321 = inst_28314.cljs$core$ISeq$;
var inst_28322 = (cljs.core.PROTOCOL_SENTINEL === inst_28321);
var inst_28323 = ((inst_28320) || (inst_28322));
var state_28412__$1 = state_28412;
if(cljs.core.truth_(inst_28323)){
var statearr_28447_28499 = state_28412__$1;
(statearr_28447_28499[(1)] = (5));

} else {
var statearr_28448_28500 = state_28412__$1;
(statearr_28448_28500[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28413 === (23))){
var inst_28371 = (state_28412[(14)]);
var inst_28377 = (inst_28371 == null);
var state_28412__$1 = state_28412;
if(cljs.core.truth_(inst_28377)){
var statearr_28449_28501 = state_28412__$1;
(statearr_28449_28501[(1)] = (26));

} else {
var statearr_28450_28502 = state_28412__$1;
(statearr_28450_28502[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28413 === (35))){
var inst_28397 = (state_28412[(2)]);
var state_28412__$1 = state_28412;
if(cljs.core.truth_(inst_28397)){
var statearr_28451_28503 = state_28412__$1;
(statearr_28451_28503[(1)] = (36));

} else {
var statearr_28452_28504 = state_28412__$1;
(statearr_28452_28504[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28413 === (19))){
var inst_28339 = (state_28412[(7)]);
var inst_28359 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28339);
var state_28412__$1 = state_28412;
var statearr_28453_28505 = state_28412__$1;
(statearr_28453_28505[(2)] = inst_28359);

(statearr_28453_28505[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28413 === (11))){
var inst_28339 = (state_28412[(7)]);
var inst_28343 = (inst_28339 == null);
var inst_28344 = cljs.core.not.call(null,inst_28343);
var state_28412__$1 = state_28412;
if(inst_28344){
var statearr_28454_28506 = state_28412__$1;
(statearr_28454_28506[(1)] = (13));

} else {
var statearr_28455_28507 = state_28412__$1;
(statearr_28455_28507[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28413 === (9))){
var inst_28314 = (state_28412[(8)]);
var state_28412__$1 = state_28412;
var statearr_28456_28508 = state_28412__$1;
(statearr_28456_28508[(2)] = inst_28314);

(statearr_28456_28508[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28413 === (5))){
var state_28412__$1 = state_28412;
var statearr_28457_28509 = state_28412__$1;
(statearr_28457_28509[(2)] = true);

(statearr_28457_28509[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28413 === (14))){
var state_28412__$1 = state_28412;
var statearr_28458_28510 = state_28412__$1;
(statearr_28458_28510[(2)] = false);

(statearr_28458_28510[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28413 === (26))){
var inst_28372 = (state_28412[(9)]);
var inst_28379 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_28372);
var state_28412__$1 = state_28412;
var statearr_28459_28511 = state_28412__$1;
(statearr_28459_28511[(2)] = inst_28379);

(statearr_28459_28511[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28413 === (16))){
var state_28412__$1 = state_28412;
var statearr_28460_28512 = state_28412__$1;
(statearr_28460_28512[(2)] = true);

(statearr_28460_28512[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28413 === (38))){
var inst_28402 = (state_28412[(2)]);
var state_28412__$1 = state_28412;
var statearr_28461_28513 = state_28412__$1;
(statearr_28461_28513[(2)] = inst_28402);

(statearr_28461_28513[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28413 === (30))){
var inst_28372 = (state_28412[(9)]);
var inst_28363 = (state_28412[(10)]);
var inst_28364 = (state_28412[(13)]);
var inst_28389 = cljs.core.empty_QMARK_.call(null,inst_28363);
var inst_28390 = inst_28364.call(null,inst_28372);
var inst_28391 = cljs.core.not.call(null,inst_28390);
var inst_28392 = ((inst_28389) && (inst_28391));
var state_28412__$1 = state_28412;
var statearr_28462_28514 = state_28412__$1;
(statearr_28462_28514[(2)] = inst_28392);

(statearr_28462_28514[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28413 === (10))){
var inst_28314 = (state_28412[(8)]);
var inst_28335 = (state_28412[(2)]);
var inst_28336 = cljs.core.get.call(null,inst_28335,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_28337 = cljs.core.get.call(null,inst_28335,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28338 = cljs.core.get.call(null,inst_28335,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_28339 = inst_28314;
var state_28412__$1 = (function (){var statearr_28463 = state_28412;
(statearr_28463[(16)] = inst_28336);

(statearr_28463[(17)] = inst_28338);

(statearr_28463[(18)] = inst_28337);

(statearr_28463[(7)] = inst_28339);

return statearr_28463;
})();
var statearr_28464_28515 = state_28412__$1;
(statearr_28464_28515[(2)] = null);

(statearr_28464_28515[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28413 === (18))){
var inst_28354 = (state_28412[(2)]);
var state_28412__$1 = state_28412;
var statearr_28465_28516 = state_28412__$1;
(statearr_28465_28516[(2)] = inst_28354);

(statearr_28465_28516[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28413 === (37))){
var state_28412__$1 = state_28412;
var statearr_28466_28517 = state_28412__$1;
(statearr_28466_28517[(2)] = null);

(statearr_28466_28517[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28413 === (8))){
var inst_28314 = (state_28412[(8)]);
var inst_28332 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28314);
var state_28412__$1 = state_28412;
var statearr_28467_28518 = state_28412__$1;
(statearr_28467_28518[(2)] = inst_28332);

(statearr_28467_28518[(1)] = (10));


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
var cljs$core$async$mix_$_state_machine__27310__auto__ = null;
var cljs$core$async$mix_$_state_machine__27310__auto____0 = (function (){
var statearr_28468 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28468[(0)] = cljs$core$async$mix_$_state_machine__27310__auto__);

(statearr_28468[(1)] = (1));

return statearr_28468;
});
var cljs$core$async$mix_$_state_machine__27310__auto____1 = (function (state_28412){
while(true){
var ret_value__27311__auto__ = (function (){try{while(true){
var result__27312__auto__ = switch__27309__auto__.call(null,state_28412);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27312__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27312__auto__;
}
break;
}
}catch (e28469){if((e28469 instanceof Object)){
var ex__27313__auto__ = e28469;
var statearr_28470_28519 = state_28412;
(statearr_28470_28519[(5)] = ex__27313__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28412);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28469;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27311__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28520 = state_28412;
state_28412 = G__28520;
continue;
} else {
return ret_value__27311__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__27310__auto__ = function(state_28412){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__27310__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__27310__auto____1.call(this,state_28412);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__27310__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__27310__auto____0;
cljs$core$async$mix_$_state_machine__27310__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__27310__auto____1;
return cljs$core$async$mix_$_state_machine__27310__auto__;
})()
})();
var state__27406__auto__ = (function (){var statearr_28471 = f__27405__auto__.call(null);
(statearr_28471[(6)] = c__27404__auto___28472);

return statearr_28471;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27406__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_28523 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_28523.call(null,p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_28524 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_28524.call(null,p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_28525 = (function() {
var G__28526 = null;
var G__28526__1 = (function (p){
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
var G__28526__2 = (function (p,v){
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
G__28526 = function(p,v){
switch(arguments.length){
case 1:
return G__28526__1.call(this,p);
case 2:
return G__28526__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__28526.cljs$core$IFn$_invoke$arity$1 = G__28526__1;
G__28526.cljs$core$IFn$_invoke$arity$2 = G__28526__2;
return G__28526;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__28522 = arguments.length;
switch (G__28522) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_28525.call(null,p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_28525.call(null,p,v);
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
var G__28530 = arguments.length;
switch (G__28530) {
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
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,(function (p1__28528_SHARP_){
if(cljs.core.truth_(p1__28528_SHARP_.call(null,topic))){
return p1__28528_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__28528_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28531 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28531 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta28532){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta28532 = meta28532;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28531.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28533,meta28532__$1){
var self__ = this;
var _28533__$1 = this;
return (new cljs.core.async.t_cljs$core$async28531(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta28532__$1));
}));

(cljs.core.async.t_cljs$core$async28531.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28533){
var self__ = this;
var _28533__$1 = this;
return self__.meta28532;
}));

(cljs.core.async.t_cljs$core$async28531.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28531.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async28531.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28531.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async28531.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async28531.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async28531.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async28531.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta28532","meta28532",1067193561,null)], null);
}));

(cljs.core.async.t_cljs$core$async28531.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28531.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28531");

(cljs.core.async.t_cljs$core$async28531.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async28531");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28531.
 */
cljs.core.async.__GT_t_cljs$core$async28531 = (function cljs$core$async$__GT_t_cljs$core$async28531(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta28532){
return (new cljs.core.async.t_cljs$core$async28531(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta28532));
});

}

return (new cljs.core.async.t_cljs$core$async28531(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__27404__auto___28651 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27405__auto__ = (function (){var switch__27309__auto__ = (function (state_28605){
var state_val_28606 = (state_28605[(1)]);
if((state_val_28606 === (7))){
var inst_28601 = (state_28605[(2)]);
var state_28605__$1 = state_28605;
var statearr_28607_28652 = state_28605__$1;
(statearr_28607_28652[(2)] = inst_28601);

(statearr_28607_28652[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28606 === (20))){
var state_28605__$1 = state_28605;
var statearr_28608_28653 = state_28605__$1;
(statearr_28608_28653[(2)] = null);

(statearr_28608_28653[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28606 === (1))){
var state_28605__$1 = state_28605;
var statearr_28609_28654 = state_28605__$1;
(statearr_28609_28654[(2)] = null);

(statearr_28609_28654[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28606 === (24))){
var inst_28584 = (state_28605[(7)]);
var inst_28593 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_28584);
var state_28605__$1 = state_28605;
var statearr_28610_28655 = state_28605__$1;
(statearr_28610_28655[(2)] = inst_28593);

(statearr_28610_28655[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28606 === (4))){
var inst_28536 = (state_28605[(8)]);
var inst_28536__$1 = (state_28605[(2)]);
var inst_28537 = (inst_28536__$1 == null);
var state_28605__$1 = (function (){var statearr_28611 = state_28605;
(statearr_28611[(8)] = inst_28536__$1);

return statearr_28611;
})();
if(cljs.core.truth_(inst_28537)){
var statearr_28612_28656 = state_28605__$1;
(statearr_28612_28656[(1)] = (5));

} else {
var statearr_28613_28657 = state_28605__$1;
(statearr_28613_28657[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28606 === (15))){
var inst_28578 = (state_28605[(2)]);
var state_28605__$1 = state_28605;
var statearr_28614_28658 = state_28605__$1;
(statearr_28614_28658[(2)] = inst_28578);

(statearr_28614_28658[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28606 === (21))){
var inst_28598 = (state_28605[(2)]);
var state_28605__$1 = (function (){var statearr_28615 = state_28605;
(statearr_28615[(9)] = inst_28598);

return statearr_28615;
})();
var statearr_28616_28659 = state_28605__$1;
(statearr_28616_28659[(2)] = null);

(statearr_28616_28659[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28606 === (13))){
var inst_28560 = (state_28605[(10)]);
var inst_28562 = cljs.core.chunked_seq_QMARK_.call(null,inst_28560);
var state_28605__$1 = state_28605;
if(inst_28562){
var statearr_28617_28660 = state_28605__$1;
(statearr_28617_28660[(1)] = (16));

} else {
var statearr_28618_28661 = state_28605__$1;
(statearr_28618_28661[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28606 === (22))){
var inst_28590 = (state_28605[(2)]);
var state_28605__$1 = state_28605;
if(cljs.core.truth_(inst_28590)){
var statearr_28619_28662 = state_28605__$1;
(statearr_28619_28662[(1)] = (23));

} else {
var statearr_28620_28663 = state_28605__$1;
(statearr_28620_28663[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28606 === (6))){
var inst_28586 = (state_28605[(11)]);
var inst_28584 = (state_28605[(7)]);
var inst_28536 = (state_28605[(8)]);
var inst_28584__$1 = topic_fn.call(null,inst_28536);
var inst_28585 = cljs.core.deref.call(null,mults);
var inst_28586__$1 = cljs.core.get.call(null,inst_28585,inst_28584__$1);
var state_28605__$1 = (function (){var statearr_28621 = state_28605;
(statearr_28621[(11)] = inst_28586__$1);

(statearr_28621[(7)] = inst_28584__$1);

return statearr_28621;
})();
if(cljs.core.truth_(inst_28586__$1)){
var statearr_28622_28664 = state_28605__$1;
(statearr_28622_28664[(1)] = (19));

} else {
var statearr_28623_28665 = state_28605__$1;
(statearr_28623_28665[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28606 === (25))){
var inst_28595 = (state_28605[(2)]);
var state_28605__$1 = state_28605;
var statearr_28624_28666 = state_28605__$1;
(statearr_28624_28666[(2)] = inst_28595);

(statearr_28624_28666[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28606 === (17))){
var inst_28560 = (state_28605[(10)]);
var inst_28569 = cljs.core.first.call(null,inst_28560);
var inst_28570 = cljs.core.async.muxch_STAR_.call(null,inst_28569);
var inst_28571 = cljs.core.async.close_BANG_.call(null,inst_28570);
var inst_28572 = cljs.core.next.call(null,inst_28560);
var inst_28546 = inst_28572;
var inst_28547 = null;
var inst_28548 = (0);
var inst_28549 = (0);
var state_28605__$1 = (function (){var statearr_28625 = state_28605;
(statearr_28625[(12)] = inst_28547);

(statearr_28625[(13)] = inst_28548);

(statearr_28625[(14)] = inst_28546);

(statearr_28625[(15)] = inst_28549);

(statearr_28625[(16)] = inst_28571);

return statearr_28625;
})();
var statearr_28626_28667 = state_28605__$1;
(statearr_28626_28667[(2)] = null);

(statearr_28626_28667[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28606 === (3))){
var inst_28603 = (state_28605[(2)]);
var state_28605__$1 = state_28605;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28605__$1,inst_28603);
} else {
if((state_val_28606 === (12))){
var inst_28580 = (state_28605[(2)]);
var state_28605__$1 = state_28605;
var statearr_28627_28668 = state_28605__$1;
(statearr_28627_28668[(2)] = inst_28580);

(statearr_28627_28668[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28606 === (2))){
var state_28605__$1 = state_28605;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28605__$1,(4),ch);
} else {
if((state_val_28606 === (23))){
var state_28605__$1 = state_28605;
var statearr_28628_28669 = state_28605__$1;
(statearr_28628_28669[(2)] = null);

(statearr_28628_28669[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28606 === (19))){
var inst_28586 = (state_28605[(11)]);
var inst_28536 = (state_28605[(8)]);
var inst_28588 = cljs.core.async.muxch_STAR_.call(null,inst_28586);
var state_28605__$1 = state_28605;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28605__$1,(22),inst_28588,inst_28536);
} else {
if((state_val_28606 === (11))){
var inst_28560 = (state_28605[(10)]);
var inst_28546 = (state_28605[(14)]);
var inst_28560__$1 = cljs.core.seq.call(null,inst_28546);
var state_28605__$1 = (function (){var statearr_28629 = state_28605;
(statearr_28629[(10)] = inst_28560__$1);

return statearr_28629;
})();
if(inst_28560__$1){
var statearr_28630_28670 = state_28605__$1;
(statearr_28630_28670[(1)] = (13));

} else {
var statearr_28631_28671 = state_28605__$1;
(statearr_28631_28671[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28606 === (9))){
var inst_28582 = (state_28605[(2)]);
var state_28605__$1 = state_28605;
var statearr_28632_28672 = state_28605__$1;
(statearr_28632_28672[(2)] = inst_28582);

(statearr_28632_28672[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28606 === (5))){
var inst_28543 = cljs.core.deref.call(null,mults);
var inst_28544 = cljs.core.vals.call(null,inst_28543);
var inst_28545 = cljs.core.seq.call(null,inst_28544);
var inst_28546 = inst_28545;
var inst_28547 = null;
var inst_28548 = (0);
var inst_28549 = (0);
var state_28605__$1 = (function (){var statearr_28633 = state_28605;
(statearr_28633[(12)] = inst_28547);

(statearr_28633[(13)] = inst_28548);

(statearr_28633[(14)] = inst_28546);

(statearr_28633[(15)] = inst_28549);

return statearr_28633;
})();
var statearr_28634_28673 = state_28605__$1;
(statearr_28634_28673[(2)] = null);

(statearr_28634_28673[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28606 === (14))){
var state_28605__$1 = state_28605;
var statearr_28638_28674 = state_28605__$1;
(statearr_28638_28674[(2)] = null);

(statearr_28638_28674[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28606 === (16))){
var inst_28560 = (state_28605[(10)]);
var inst_28564 = cljs.core.chunk_first.call(null,inst_28560);
var inst_28565 = cljs.core.chunk_rest.call(null,inst_28560);
var inst_28566 = cljs.core.count.call(null,inst_28564);
var inst_28546 = inst_28565;
var inst_28547 = inst_28564;
var inst_28548 = inst_28566;
var inst_28549 = (0);
var state_28605__$1 = (function (){var statearr_28639 = state_28605;
(statearr_28639[(12)] = inst_28547);

(statearr_28639[(13)] = inst_28548);

(statearr_28639[(14)] = inst_28546);

(statearr_28639[(15)] = inst_28549);

return statearr_28639;
})();
var statearr_28640_28675 = state_28605__$1;
(statearr_28640_28675[(2)] = null);

(statearr_28640_28675[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28606 === (10))){
var inst_28547 = (state_28605[(12)]);
var inst_28548 = (state_28605[(13)]);
var inst_28546 = (state_28605[(14)]);
var inst_28549 = (state_28605[(15)]);
var inst_28554 = cljs.core._nth.call(null,inst_28547,inst_28549);
var inst_28555 = cljs.core.async.muxch_STAR_.call(null,inst_28554);
var inst_28556 = cljs.core.async.close_BANG_.call(null,inst_28555);
var inst_28557 = (inst_28549 + (1));
var tmp28635 = inst_28547;
var tmp28636 = inst_28548;
var tmp28637 = inst_28546;
var inst_28546__$1 = tmp28637;
var inst_28547__$1 = tmp28635;
var inst_28548__$1 = tmp28636;
var inst_28549__$1 = inst_28557;
var state_28605__$1 = (function (){var statearr_28641 = state_28605;
(statearr_28641[(12)] = inst_28547__$1);

(statearr_28641[(13)] = inst_28548__$1);

(statearr_28641[(14)] = inst_28546__$1);

(statearr_28641[(15)] = inst_28549__$1);

(statearr_28641[(17)] = inst_28556);

return statearr_28641;
})();
var statearr_28642_28676 = state_28605__$1;
(statearr_28642_28676[(2)] = null);

(statearr_28642_28676[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28606 === (18))){
var inst_28575 = (state_28605[(2)]);
var state_28605__$1 = state_28605;
var statearr_28643_28677 = state_28605__$1;
(statearr_28643_28677[(2)] = inst_28575);

(statearr_28643_28677[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28606 === (8))){
var inst_28548 = (state_28605[(13)]);
var inst_28549 = (state_28605[(15)]);
var inst_28551 = (inst_28549 < inst_28548);
var inst_28552 = inst_28551;
var state_28605__$1 = state_28605;
if(cljs.core.truth_(inst_28552)){
var statearr_28644_28678 = state_28605__$1;
(statearr_28644_28678[(1)] = (10));

} else {
var statearr_28645_28679 = state_28605__$1;
(statearr_28645_28679[(1)] = (11));

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
var cljs$core$async$state_machine__27310__auto__ = null;
var cljs$core$async$state_machine__27310__auto____0 = (function (){
var statearr_28646 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28646[(0)] = cljs$core$async$state_machine__27310__auto__);

(statearr_28646[(1)] = (1));

return statearr_28646;
});
var cljs$core$async$state_machine__27310__auto____1 = (function (state_28605){
while(true){
var ret_value__27311__auto__ = (function (){try{while(true){
var result__27312__auto__ = switch__27309__auto__.call(null,state_28605);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27312__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27312__auto__;
}
break;
}
}catch (e28647){if((e28647 instanceof Object)){
var ex__27313__auto__ = e28647;
var statearr_28648_28680 = state_28605;
(statearr_28648_28680[(5)] = ex__27313__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28605);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28647;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27311__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28681 = state_28605;
state_28605 = G__28681;
continue;
} else {
return ret_value__27311__auto__;
}
break;
}
});
cljs$core$async$state_machine__27310__auto__ = function(state_28605){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27310__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27310__auto____1.call(this,state_28605);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27310__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27310__auto____0;
cljs$core$async$state_machine__27310__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27310__auto____1;
return cljs$core$async$state_machine__27310__auto__;
})()
})();
var state__27406__auto__ = (function (){var statearr_28649 = f__27405__auto__.call(null);
(statearr_28649[(6)] = c__27404__auto___28651);

return statearr_28649;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27406__auto__);
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
var G__28683 = arguments.length;
switch (G__28683) {
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
var G__28686 = arguments.length;
switch (G__28686) {
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
var G__28689 = arguments.length;
switch (G__28689) {
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
var c__27404__auto___28756 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27405__auto__ = (function (){var switch__27309__auto__ = (function (state_28728){
var state_val_28729 = (state_28728[(1)]);
if((state_val_28729 === (7))){
var state_28728__$1 = state_28728;
var statearr_28730_28757 = state_28728__$1;
(statearr_28730_28757[(2)] = null);

(statearr_28730_28757[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28729 === (1))){
var state_28728__$1 = state_28728;
var statearr_28731_28758 = state_28728__$1;
(statearr_28731_28758[(2)] = null);

(statearr_28731_28758[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28729 === (4))){
var inst_28692 = (state_28728[(7)]);
var inst_28694 = (inst_28692 < cnt);
var state_28728__$1 = state_28728;
if(cljs.core.truth_(inst_28694)){
var statearr_28732_28759 = state_28728__$1;
(statearr_28732_28759[(1)] = (6));

} else {
var statearr_28733_28760 = state_28728__$1;
(statearr_28733_28760[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28729 === (15))){
var inst_28724 = (state_28728[(2)]);
var state_28728__$1 = state_28728;
var statearr_28734_28761 = state_28728__$1;
(statearr_28734_28761[(2)] = inst_28724);

(statearr_28734_28761[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28729 === (13))){
var inst_28717 = cljs.core.async.close_BANG_.call(null,out);
var state_28728__$1 = state_28728;
var statearr_28735_28762 = state_28728__$1;
(statearr_28735_28762[(2)] = inst_28717);

(statearr_28735_28762[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28729 === (6))){
var state_28728__$1 = state_28728;
var statearr_28736_28763 = state_28728__$1;
(statearr_28736_28763[(2)] = null);

(statearr_28736_28763[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28729 === (3))){
var inst_28726 = (state_28728[(2)]);
var state_28728__$1 = state_28728;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28728__$1,inst_28726);
} else {
if((state_val_28729 === (12))){
var inst_28714 = (state_28728[(8)]);
var inst_28714__$1 = (state_28728[(2)]);
var inst_28715 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_28714__$1);
var state_28728__$1 = (function (){var statearr_28737 = state_28728;
(statearr_28737[(8)] = inst_28714__$1);

return statearr_28737;
})();
if(cljs.core.truth_(inst_28715)){
var statearr_28738_28764 = state_28728__$1;
(statearr_28738_28764[(1)] = (13));

} else {
var statearr_28739_28765 = state_28728__$1;
(statearr_28739_28765[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28729 === (2))){
var inst_28691 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_28692 = (0);
var state_28728__$1 = (function (){var statearr_28740 = state_28728;
(statearr_28740[(9)] = inst_28691);

(statearr_28740[(7)] = inst_28692);

return statearr_28740;
})();
var statearr_28741_28766 = state_28728__$1;
(statearr_28741_28766[(2)] = null);

(statearr_28741_28766[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28729 === (11))){
var inst_28692 = (state_28728[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_28728,(10),Object,null,(9));
var inst_28701 = chs__$1.call(null,inst_28692);
var inst_28702 = done.call(null,inst_28692);
var inst_28703 = cljs.core.async.take_BANG_.call(null,inst_28701,inst_28702);
var state_28728__$1 = state_28728;
var statearr_28742_28767 = state_28728__$1;
(statearr_28742_28767[(2)] = inst_28703);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28728__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28729 === (9))){
var inst_28692 = (state_28728[(7)]);
var inst_28705 = (state_28728[(2)]);
var inst_28706 = (inst_28692 + (1));
var inst_28692__$1 = inst_28706;
var state_28728__$1 = (function (){var statearr_28743 = state_28728;
(statearr_28743[(10)] = inst_28705);

(statearr_28743[(7)] = inst_28692__$1);

return statearr_28743;
})();
var statearr_28744_28768 = state_28728__$1;
(statearr_28744_28768[(2)] = null);

(statearr_28744_28768[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28729 === (5))){
var inst_28712 = (state_28728[(2)]);
var state_28728__$1 = (function (){var statearr_28745 = state_28728;
(statearr_28745[(11)] = inst_28712);

return statearr_28745;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28728__$1,(12),dchan);
} else {
if((state_val_28729 === (14))){
var inst_28714 = (state_28728[(8)]);
var inst_28719 = cljs.core.apply.call(null,f,inst_28714);
var state_28728__$1 = state_28728;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28728__$1,(16),out,inst_28719);
} else {
if((state_val_28729 === (16))){
var inst_28721 = (state_28728[(2)]);
var state_28728__$1 = (function (){var statearr_28746 = state_28728;
(statearr_28746[(12)] = inst_28721);

return statearr_28746;
})();
var statearr_28747_28769 = state_28728__$1;
(statearr_28747_28769[(2)] = null);

(statearr_28747_28769[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28729 === (10))){
var inst_28696 = (state_28728[(2)]);
var inst_28697 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_28728__$1 = (function (){var statearr_28748 = state_28728;
(statearr_28748[(13)] = inst_28696);

return statearr_28748;
})();
var statearr_28749_28770 = state_28728__$1;
(statearr_28749_28770[(2)] = inst_28697);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28728__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28729 === (8))){
var inst_28710 = (state_28728[(2)]);
var state_28728__$1 = state_28728;
var statearr_28750_28771 = state_28728__$1;
(statearr_28750_28771[(2)] = inst_28710);

(statearr_28750_28771[(1)] = (5));


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
var cljs$core$async$state_machine__27310__auto__ = null;
var cljs$core$async$state_machine__27310__auto____0 = (function (){
var statearr_28751 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28751[(0)] = cljs$core$async$state_machine__27310__auto__);

(statearr_28751[(1)] = (1));

return statearr_28751;
});
var cljs$core$async$state_machine__27310__auto____1 = (function (state_28728){
while(true){
var ret_value__27311__auto__ = (function (){try{while(true){
var result__27312__auto__ = switch__27309__auto__.call(null,state_28728);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27312__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27312__auto__;
}
break;
}
}catch (e28752){if((e28752 instanceof Object)){
var ex__27313__auto__ = e28752;
var statearr_28753_28772 = state_28728;
(statearr_28753_28772[(5)] = ex__27313__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28728);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28752;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27311__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28773 = state_28728;
state_28728 = G__28773;
continue;
} else {
return ret_value__27311__auto__;
}
break;
}
});
cljs$core$async$state_machine__27310__auto__ = function(state_28728){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27310__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27310__auto____1.call(this,state_28728);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27310__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27310__auto____0;
cljs$core$async$state_machine__27310__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27310__auto____1;
return cljs$core$async$state_machine__27310__auto__;
})()
})();
var state__27406__auto__ = (function (){var statearr_28754 = f__27405__auto__.call(null);
(statearr_28754[(6)] = c__27404__auto___28756);

return statearr_28754;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27406__auto__);
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
var G__28776 = arguments.length;
switch (G__28776) {
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
var c__27404__auto___28830 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27405__auto__ = (function (){var switch__27309__auto__ = (function (state_28808){
var state_val_28809 = (state_28808[(1)]);
if((state_val_28809 === (7))){
var inst_28787 = (state_28808[(7)]);
var inst_28788 = (state_28808[(8)]);
var inst_28787__$1 = (state_28808[(2)]);
var inst_28788__$1 = cljs.core.nth.call(null,inst_28787__$1,(0),null);
var inst_28789 = cljs.core.nth.call(null,inst_28787__$1,(1),null);
var inst_28790 = (inst_28788__$1 == null);
var state_28808__$1 = (function (){var statearr_28810 = state_28808;
(statearr_28810[(7)] = inst_28787__$1);

(statearr_28810[(8)] = inst_28788__$1);

(statearr_28810[(9)] = inst_28789);

return statearr_28810;
})();
if(cljs.core.truth_(inst_28790)){
var statearr_28811_28831 = state_28808__$1;
(statearr_28811_28831[(1)] = (8));

} else {
var statearr_28812_28832 = state_28808__$1;
(statearr_28812_28832[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28809 === (1))){
var inst_28777 = cljs.core.vec.call(null,chs);
var inst_28778 = inst_28777;
var state_28808__$1 = (function (){var statearr_28813 = state_28808;
(statearr_28813[(10)] = inst_28778);

return statearr_28813;
})();
var statearr_28814_28833 = state_28808__$1;
(statearr_28814_28833[(2)] = null);

(statearr_28814_28833[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28809 === (4))){
var inst_28778 = (state_28808[(10)]);
var state_28808__$1 = state_28808;
return cljs.core.async.ioc_alts_BANG_.call(null,state_28808__$1,(7),inst_28778);
} else {
if((state_val_28809 === (6))){
var inst_28804 = (state_28808[(2)]);
var state_28808__$1 = state_28808;
var statearr_28815_28834 = state_28808__$1;
(statearr_28815_28834[(2)] = inst_28804);

(statearr_28815_28834[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28809 === (3))){
var inst_28806 = (state_28808[(2)]);
var state_28808__$1 = state_28808;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28808__$1,inst_28806);
} else {
if((state_val_28809 === (2))){
var inst_28778 = (state_28808[(10)]);
var inst_28780 = cljs.core.count.call(null,inst_28778);
var inst_28781 = (inst_28780 > (0));
var state_28808__$1 = state_28808;
if(cljs.core.truth_(inst_28781)){
var statearr_28817_28835 = state_28808__$1;
(statearr_28817_28835[(1)] = (4));

} else {
var statearr_28818_28836 = state_28808__$1;
(statearr_28818_28836[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28809 === (11))){
var inst_28778 = (state_28808[(10)]);
var inst_28797 = (state_28808[(2)]);
var tmp28816 = inst_28778;
var inst_28778__$1 = tmp28816;
var state_28808__$1 = (function (){var statearr_28819 = state_28808;
(statearr_28819[(11)] = inst_28797);

(statearr_28819[(10)] = inst_28778__$1);

return statearr_28819;
})();
var statearr_28820_28837 = state_28808__$1;
(statearr_28820_28837[(2)] = null);

(statearr_28820_28837[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28809 === (9))){
var inst_28788 = (state_28808[(8)]);
var state_28808__$1 = state_28808;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28808__$1,(11),out,inst_28788);
} else {
if((state_val_28809 === (5))){
var inst_28802 = cljs.core.async.close_BANG_.call(null,out);
var state_28808__$1 = state_28808;
var statearr_28821_28838 = state_28808__$1;
(statearr_28821_28838[(2)] = inst_28802);

(statearr_28821_28838[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28809 === (10))){
var inst_28800 = (state_28808[(2)]);
var state_28808__$1 = state_28808;
var statearr_28822_28839 = state_28808__$1;
(statearr_28822_28839[(2)] = inst_28800);

(statearr_28822_28839[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28809 === (8))){
var inst_28787 = (state_28808[(7)]);
var inst_28788 = (state_28808[(8)]);
var inst_28789 = (state_28808[(9)]);
var inst_28778 = (state_28808[(10)]);
var inst_28792 = (function (){var cs = inst_28778;
var vec__28783 = inst_28787;
var v = inst_28788;
var c = inst_28789;
return (function (p1__28774_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__28774_SHARP_);
});
})();
var inst_28793 = cljs.core.filterv.call(null,inst_28792,inst_28778);
var inst_28778__$1 = inst_28793;
var state_28808__$1 = (function (){var statearr_28823 = state_28808;
(statearr_28823[(10)] = inst_28778__$1);

return statearr_28823;
})();
var statearr_28824_28840 = state_28808__$1;
(statearr_28824_28840[(2)] = null);

(statearr_28824_28840[(1)] = (2));


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
var cljs$core$async$state_machine__27310__auto__ = null;
var cljs$core$async$state_machine__27310__auto____0 = (function (){
var statearr_28825 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28825[(0)] = cljs$core$async$state_machine__27310__auto__);

(statearr_28825[(1)] = (1));

return statearr_28825;
});
var cljs$core$async$state_machine__27310__auto____1 = (function (state_28808){
while(true){
var ret_value__27311__auto__ = (function (){try{while(true){
var result__27312__auto__ = switch__27309__auto__.call(null,state_28808);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27312__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27312__auto__;
}
break;
}
}catch (e28826){if((e28826 instanceof Object)){
var ex__27313__auto__ = e28826;
var statearr_28827_28841 = state_28808;
(statearr_28827_28841[(5)] = ex__27313__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28808);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28826;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27311__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28842 = state_28808;
state_28808 = G__28842;
continue;
} else {
return ret_value__27311__auto__;
}
break;
}
});
cljs$core$async$state_machine__27310__auto__ = function(state_28808){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27310__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27310__auto____1.call(this,state_28808);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27310__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27310__auto____0;
cljs$core$async$state_machine__27310__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27310__auto____1;
return cljs$core$async$state_machine__27310__auto__;
})()
})();
var state__27406__auto__ = (function (){var statearr_28828 = f__27405__auto__.call(null);
(statearr_28828[(6)] = c__27404__auto___28830);

return statearr_28828;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27406__auto__);
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
var G__28844 = arguments.length;
switch (G__28844) {
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
var c__27404__auto___28889 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27405__auto__ = (function (){var switch__27309__auto__ = (function (state_28868){
var state_val_28869 = (state_28868[(1)]);
if((state_val_28869 === (7))){
var inst_28850 = (state_28868[(7)]);
var inst_28850__$1 = (state_28868[(2)]);
var inst_28851 = (inst_28850__$1 == null);
var inst_28852 = cljs.core.not.call(null,inst_28851);
var state_28868__$1 = (function (){var statearr_28870 = state_28868;
(statearr_28870[(7)] = inst_28850__$1);

return statearr_28870;
})();
if(inst_28852){
var statearr_28871_28890 = state_28868__$1;
(statearr_28871_28890[(1)] = (8));

} else {
var statearr_28872_28891 = state_28868__$1;
(statearr_28872_28891[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28869 === (1))){
var inst_28845 = (0);
var state_28868__$1 = (function (){var statearr_28873 = state_28868;
(statearr_28873[(8)] = inst_28845);

return statearr_28873;
})();
var statearr_28874_28892 = state_28868__$1;
(statearr_28874_28892[(2)] = null);

(statearr_28874_28892[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28869 === (4))){
var state_28868__$1 = state_28868;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28868__$1,(7),ch);
} else {
if((state_val_28869 === (6))){
var inst_28863 = (state_28868[(2)]);
var state_28868__$1 = state_28868;
var statearr_28875_28893 = state_28868__$1;
(statearr_28875_28893[(2)] = inst_28863);

(statearr_28875_28893[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28869 === (3))){
var inst_28865 = (state_28868[(2)]);
var inst_28866 = cljs.core.async.close_BANG_.call(null,out);
var state_28868__$1 = (function (){var statearr_28876 = state_28868;
(statearr_28876[(9)] = inst_28865);

return statearr_28876;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28868__$1,inst_28866);
} else {
if((state_val_28869 === (2))){
var inst_28845 = (state_28868[(8)]);
var inst_28847 = (inst_28845 < n);
var state_28868__$1 = state_28868;
if(cljs.core.truth_(inst_28847)){
var statearr_28877_28894 = state_28868__$1;
(statearr_28877_28894[(1)] = (4));

} else {
var statearr_28878_28895 = state_28868__$1;
(statearr_28878_28895[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28869 === (11))){
var inst_28845 = (state_28868[(8)]);
var inst_28855 = (state_28868[(2)]);
var inst_28856 = (inst_28845 + (1));
var inst_28845__$1 = inst_28856;
var state_28868__$1 = (function (){var statearr_28879 = state_28868;
(statearr_28879[(8)] = inst_28845__$1);

(statearr_28879[(10)] = inst_28855);

return statearr_28879;
})();
var statearr_28880_28896 = state_28868__$1;
(statearr_28880_28896[(2)] = null);

(statearr_28880_28896[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28869 === (9))){
var state_28868__$1 = state_28868;
var statearr_28881_28897 = state_28868__$1;
(statearr_28881_28897[(2)] = null);

(statearr_28881_28897[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28869 === (5))){
var state_28868__$1 = state_28868;
var statearr_28882_28898 = state_28868__$1;
(statearr_28882_28898[(2)] = null);

(statearr_28882_28898[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28869 === (10))){
var inst_28860 = (state_28868[(2)]);
var state_28868__$1 = state_28868;
var statearr_28883_28899 = state_28868__$1;
(statearr_28883_28899[(2)] = inst_28860);

(statearr_28883_28899[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28869 === (8))){
var inst_28850 = (state_28868[(7)]);
var state_28868__$1 = state_28868;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28868__$1,(11),out,inst_28850);
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
var cljs$core$async$state_machine__27310__auto__ = null;
var cljs$core$async$state_machine__27310__auto____0 = (function (){
var statearr_28884 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28884[(0)] = cljs$core$async$state_machine__27310__auto__);

(statearr_28884[(1)] = (1));

return statearr_28884;
});
var cljs$core$async$state_machine__27310__auto____1 = (function (state_28868){
while(true){
var ret_value__27311__auto__ = (function (){try{while(true){
var result__27312__auto__ = switch__27309__auto__.call(null,state_28868);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27312__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27312__auto__;
}
break;
}
}catch (e28885){if((e28885 instanceof Object)){
var ex__27313__auto__ = e28885;
var statearr_28886_28900 = state_28868;
(statearr_28886_28900[(5)] = ex__27313__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28868);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28885;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27311__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28901 = state_28868;
state_28868 = G__28901;
continue;
} else {
return ret_value__27311__auto__;
}
break;
}
});
cljs$core$async$state_machine__27310__auto__ = function(state_28868){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27310__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27310__auto____1.call(this,state_28868);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27310__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27310__auto____0;
cljs$core$async$state_machine__27310__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27310__auto____1;
return cljs$core$async$state_machine__27310__auto__;
})()
})();
var state__27406__auto__ = (function (){var statearr_28887 = f__27405__auto__.call(null);
(statearr_28887[(6)] = c__27404__auto___28889);

return statearr_28887;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27406__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28903 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28903 = (function (f,ch,meta28904){
this.f = f;
this.ch = ch;
this.meta28904 = meta28904;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28903.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28905,meta28904__$1){
var self__ = this;
var _28905__$1 = this;
return (new cljs.core.async.t_cljs$core$async28903(self__.f,self__.ch,meta28904__$1));
}));

(cljs.core.async.t_cljs$core$async28903.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28905){
var self__ = this;
var _28905__$1 = this;
return self__.meta28904;
}));

(cljs.core.async.t_cljs$core$async28903.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28903.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async28903.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async28903.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28903.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28906 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28906 = (function (f,ch,meta28904,_,fn1,meta28907){
this.f = f;
this.ch = ch;
this.meta28904 = meta28904;
this._ = _;
this.fn1 = fn1;
this.meta28907 = meta28907;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28906.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28908,meta28907__$1){
var self__ = this;
var _28908__$1 = this;
return (new cljs.core.async.t_cljs$core$async28906(self__.f,self__.ch,self__.meta28904,self__._,self__.fn1,meta28907__$1));
}));

(cljs.core.async.t_cljs$core$async28906.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28908){
var self__ = this;
var _28908__$1 = this;
return self__.meta28907;
}));

(cljs.core.async.t_cljs$core$async28906.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28906.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
}));

(cljs.core.async.t_cljs$core$async28906.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async28906.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return (function (p1__28902_SHARP_){
return f1.call(null,(((p1__28902_SHARP_ == null))?null:self__.f.call(null,p1__28902_SHARP_)));
});
}));

(cljs.core.async.t_cljs$core$async28906.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28904","meta28904",-2035292919,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async28903","cljs.core.async/t_cljs$core$async28903",-908869498,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta28907","meta28907",-2127273970,null)], null);
}));

(cljs.core.async.t_cljs$core$async28906.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28906.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28906");

(cljs.core.async.t_cljs$core$async28906.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async28906");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28906.
 */
cljs.core.async.__GT_t_cljs$core$async28906 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async28906(f__$1,ch__$1,meta28904__$1,___$2,fn1__$1,meta28907){
return (new cljs.core.async.t_cljs$core$async28906(f__$1,ch__$1,meta28904__$1,___$2,fn1__$1,meta28907));
});

}

return (new cljs.core.async.t_cljs$core$async28906(self__.f,self__.ch,self__.meta28904,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

(cljs.core.async.t_cljs$core$async28903.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28903.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async28903.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28904","meta28904",-2035292919,null)], null);
}));

(cljs.core.async.t_cljs$core$async28903.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28903.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28903");

(cljs.core.async.t_cljs$core$async28903.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async28903");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28903.
 */
cljs.core.async.__GT_t_cljs$core$async28903 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async28903(f__$1,ch__$1,meta28904){
return (new cljs.core.async.t_cljs$core$async28903(f__$1,ch__$1,meta28904));
});

}

return (new cljs.core.async.t_cljs$core$async28903(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28909 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28909 = (function (f,ch,meta28910){
this.f = f;
this.ch = ch;
this.meta28910 = meta28910;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28909.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28911,meta28910__$1){
var self__ = this;
var _28911__$1 = this;
return (new cljs.core.async.t_cljs$core$async28909(self__.f,self__.ch,meta28910__$1));
}));

(cljs.core.async.t_cljs$core$async28909.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28911){
var self__ = this;
var _28911__$1 = this;
return self__.meta28910;
}));

(cljs.core.async.t_cljs$core$async28909.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28909.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async28909.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28909.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async28909.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28909.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
}));

(cljs.core.async.t_cljs$core$async28909.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28910","meta28910",-931309162,null)], null);
}));

(cljs.core.async.t_cljs$core$async28909.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28909.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28909");

(cljs.core.async.t_cljs$core$async28909.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async28909");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28909.
 */
cljs.core.async.__GT_t_cljs$core$async28909 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async28909(f__$1,ch__$1,meta28910){
return (new cljs.core.async.t_cljs$core$async28909(f__$1,ch__$1,meta28910));
});

}

return (new cljs.core.async.t_cljs$core$async28909(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28912 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28912 = (function (p,ch,meta28913){
this.p = p;
this.ch = ch;
this.meta28913 = meta28913;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28912.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28914,meta28913__$1){
var self__ = this;
var _28914__$1 = this;
return (new cljs.core.async.t_cljs$core$async28912(self__.p,self__.ch,meta28913__$1));
}));

(cljs.core.async.t_cljs$core$async28912.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28914){
var self__ = this;
var _28914__$1 = this;
return self__.meta28913;
}));

(cljs.core.async.t_cljs$core$async28912.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28912.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async28912.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async28912.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28912.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async28912.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28912.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async28912.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28913","meta28913",-673068969,null)], null);
}));

(cljs.core.async.t_cljs$core$async28912.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28912.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28912");

(cljs.core.async.t_cljs$core$async28912.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async28912");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28912.
 */
cljs.core.async.__GT_t_cljs$core$async28912 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async28912(p__$1,ch__$1,meta28913){
return (new cljs.core.async.t_cljs$core$async28912(p__$1,ch__$1,meta28913));
});

}

return (new cljs.core.async.t_cljs$core$async28912(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__28916 = arguments.length;
switch (G__28916) {
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
var c__27404__auto___28956 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27405__auto__ = (function (){var switch__27309__auto__ = (function (state_28937){
var state_val_28938 = (state_28937[(1)]);
if((state_val_28938 === (7))){
var inst_28933 = (state_28937[(2)]);
var state_28937__$1 = state_28937;
var statearr_28939_28957 = state_28937__$1;
(statearr_28939_28957[(2)] = inst_28933);

(statearr_28939_28957[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28938 === (1))){
var state_28937__$1 = state_28937;
var statearr_28940_28958 = state_28937__$1;
(statearr_28940_28958[(2)] = null);

(statearr_28940_28958[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28938 === (4))){
var inst_28919 = (state_28937[(7)]);
var inst_28919__$1 = (state_28937[(2)]);
var inst_28920 = (inst_28919__$1 == null);
var state_28937__$1 = (function (){var statearr_28941 = state_28937;
(statearr_28941[(7)] = inst_28919__$1);

return statearr_28941;
})();
if(cljs.core.truth_(inst_28920)){
var statearr_28942_28959 = state_28937__$1;
(statearr_28942_28959[(1)] = (5));

} else {
var statearr_28943_28960 = state_28937__$1;
(statearr_28943_28960[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28938 === (6))){
var inst_28919 = (state_28937[(7)]);
var inst_28924 = p.call(null,inst_28919);
var state_28937__$1 = state_28937;
if(cljs.core.truth_(inst_28924)){
var statearr_28944_28961 = state_28937__$1;
(statearr_28944_28961[(1)] = (8));

} else {
var statearr_28945_28962 = state_28937__$1;
(statearr_28945_28962[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28938 === (3))){
var inst_28935 = (state_28937[(2)]);
var state_28937__$1 = state_28937;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28937__$1,inst_28935);
} else {
if((state_val_28938 === (2))){
var state_28937__$1 = state_28937;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28937__$1,(4),ch);
} else {
if((state_val_28938 === (11))){
var inst_28927 = (state_28937[(2)]);
var state_28937__$1 = state_28937;
var statearr_28946_28963 = state_28937__$1;
(statearr_28946_28963[(2)] = inst_28927);

(statearr_28946_28963[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28938 === (9))){
var state_28937__$1 = state_28937;
var statearr_28947_28964 = state_28937__$1;
(statearr_28947_28964[(2)] = null);

(statearr_28947_28964[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28938 === (5))){
var inst_28922 = cljs.core.async.close_BANG_.call(null,out);
var state_28937__$1 = state_28937;
var statearr_28948_28965 = state_28937__$1;
(statearr_28948_28965[(2)] = inst_28922);

(statearr_28948_28965[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28938 === (10))){
var inst_28930 = (state_28937[(2)]);
var state_28937__$1 = (function (){var statearr_28949 = state_28937;
(statearr_28949[(8)] = inst_28930);

return statearr_28949;
})();
var statearr_28950_28966 = state_28937__$1;
(statearr_28950_28966[(2)] = null);

(statearr_28950_28966[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28938 === (8))){
var inst_28919 = (state_28937[(7)]);
var state_28937__$1 = state_28937;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28937__$1,(11),out,inst_28919);
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
var cljs$core$async$state_machine__27310__auto__ = null;
var cljs$core$async$state_machine__27310__auto____0 = (function (){
var statearr_28951 = [null,null,null,null,null,null,null,null,null];
(statearr_28951[(0)] = cljs$core$async$state_machine__27310__auto__);

(statearr_28951[(1)] = (1));

return statearr_28951;
});
var cljs$core$async$state_machine__27310__auto____1 = (function (state_28937){
while(true){
var ret_value__27311__auto__ = (function (){try{while(true){
var result__27312__auto__ = switch__27309__auto__.call(null,state_28937);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27312__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27312__auto__;
}
break;
}
}catch (e28952){if((e28952 instanceof Object)){
var ex__27313__auto__ = e28952;
var statearr_28953_28967 = state_28937;
(statearr_28953_28967[(5)] = ex__27313__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28937);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28952;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27311__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28968 = state_28937;
state_28937 = G__28968;
continue;
} else {
return ret_value__27311__auto__;
}
break;
}
});
cljs$core$async$state_machine__27310__auto__ = function(state_28937){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27310__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27310__auto____1.call(this,state_28937);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27310__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27310__auto____0;
cljs$core$async$state_machine__27310__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27310__auto____1;
return cljs$core$async$state_machine__27310__auto__;
})()
})();
var state__27406__auto__ = (function (){var statearr_28954 = f__27405__auto__.call(null);
(statearr_28954[(6)] = c__27404__auto___28956);

return statearr_28954;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27406__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__28970 = arguments.length;
switch (G__28970) {
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
var c__27404__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27405__auto__ = (function (){var switch__27309__auto__ = (function (state_29033){
var state_val_29034 = (state_29033[(1)]);
if((state_val_29034 === (7))){
var inst_29029 = (state_29033[(2)]);
var state_29033__$1 = state_29033;
var statearr_29035_29073 = state_29033__$1;
(statearr_29035_29073[(2)] = inst_29029);

(statearr_29035_29073[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29034 === (20))){
var inst_28999 = (state_29033[(7)]);
var inst_29010 = (state_29033[(2)]);
var inst_29011 = cljs.core.next.call(null,inst_28999);
var inst_28985 = inst_29011;
var inst_28986 = null;
var inst_28987 = (0);
var inst_28988 = (0);
var state_29033__$1 = (function (){var statearr_29036 = state_29033;
(statearr_29036[(8)] = inst_28988);

(statearr_29036[(9)] = inst_28986);

(statearr_29036[(10)] = inst_29010);

(statearr_29036[(11)] = inst_28987);

(statearr_29036[(12)] = inst_28985);

return statearr_29036;
})();
var statearr_29037_29074 = state_29033__$1;
(statearr_29037_29074[(2)] = null);

(statearr_29037_29074[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29034 === (1))){
var state_29033__$1 = state_29033;
var statearr_29038_29075 = state_29033__$1;
(statearr_29038_29075[(2)] = null);

(statearr_29038_29075[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29034 === (4))){
var inst_28974 = (state_29033[(13)]);
var inst_28974__$1 = (state_29033[(2)]);
var inst_28975 = (inst_28974__$1 == null);
var state_29033__$1 = (function (){var statearr_29039 = state_29033;
(statearr_29039[(13)] = inst_28974__$1);

return statearr_29039;
})();
if(cljs.core.truth_(inst_28975)){
var statearr_29040_29076 = state_29033__$1;
(statearr_29040_29076[(1)] = (5));

} else {
var statearr_29041_29077 = state_29033__$1;
(statearr_29041_29077[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29034 === (15))){
var state_29033__$1 = state_29033;
var statearr_29045_29078 = state_29033__$1;
(statearr_29045_29078[(2)] = null);

(statearr_29045_29078[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29034 === (21))){
var state_29033__$1 = state_29033;
var statearr_29046_29079 = state_29033__$1;
(statearr_29046_29079[(2)] = null);

(statearr_29046_29079[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29034 === (13))){
var inst_28988 = (state_29033[(8)]);
var inst_28986 = (state_29033[(9)]);
var inst_28987 = (state_29033[(11)]);
var inst_28985 = (state_29033[(12)]);
var inst_28995 = (state_29033[(2)]);
var inst_28996 = (inst_28988 + (1));
var tmp29042 = inst_28986;
var tmp29043 = inst_28987;
var tmp29044 = inst_28985;
var inst_28985__$1 = tmp29044;
var inst_28986__$1 = tmp29042;
var inst_28987__$1 = tmp29043;
var inst_28988__$1 = inst_28996;
var state_29033__$1 = (function (){var statearr_29047 = state_29033;
(statearr_29047[(8)] = inst_28988__$1);

(statearr_29047[(9)] = inst_28986__$1);

(statearr_29047[(14)] = inst_28995);

(statearr_29047[(11)] = inst_28987__$1);

(statearr_29047[(12)] = inst_28985__$1);

return statearr_29047;
})();
var statearr_29048_29080 = state_29033__$1;
(statearr_29048_29080[(2)] = null);

(statearr_29048_29080[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29034 === (22))){
var state_29033__$1 = state_29033;
var statearr_29049_29081 = state_29033__$1;
(statearr_29049_29081[(2)] = null);

(statearr_29049_29081[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29034 === (6))){
var inst_28974 = (state_29033[(13)]);
var inst_28983 = f.call(null,inst_28974);
var inst_28984 = cljs.core.seq.call(null,inst_28983);
var inst_28985 = inst_28984;
var inst_28986 = null;
var inst_28987 = (0);
var inst_28988 = (0);
var state_29033__$1 = (function (){var statearr_29050 = state_29033;
(statearr_29050[(8)] = inst_28988);

(statearr_29050[(9)] = inst_28986);

(statearr_29050[(11)] = inst_28987);

(statearr_29050[(12)] = inst_28985);

return statearr_29050;
})();
var statearr_29051_29082 = state_29033__$1;
(statearr_29051_29082[(2)] = null);

(statearr_29051_29082[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29034 === (17))){
var inst_28999 = (state_29033[(7)]);
var inst_29003 = cljs.core.chunk_first.call(null,inst_28999);
var inst_29004 = cljs.core.chunk_rest.call(null,inst_28999);
var inst_29005 = cljs.core.count.call(null,inst_29003);
var inst_28985 = inst_29004;
var inst_28986 = inst_29003;
var inst_28987 = inst_29005;
var inst_28988 = (0);
var state_29033__$1 = (function (){var statearr_29052 = state_29033;
(statearr_29052[(8)] = inst_28988);

(statearr_29052[(9)] = inst_28986);

(statearr_29052[(11)] = inst_28987);

(statearr_29052[(12)] = inst_28985);

return statearr_29052;
})();
var statearr_29053_29083 = state_29033__$1;
(statearr_29053_29083[(2)] = null);

(statearr_29053_29083[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29034 === (3))){
var inst_29031 = (state_29033[(2)]);
var state_29033__$1 = state_29033;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29033__$1,inst_29031);
} else {
if((state_val_29034 === (12))){
var inst_29019 = (state_29033[(2)]);
var state_29033__$1 = state_29033;
var statearr_29054_29084 = state_29033__$1;
(statearr_29054_29084[(2)] = inst_29019);

(statearr_29054_29084[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29034 === (2))){
var state_29033__$1 = state_29033;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29033__$1,(4),in$);
} else {
if((state_val_29034 === (23))){
var inst_29027 = (state_29033[(2)]);
var state_29033__$1 = state_29033;
var statearr_29055_29085 = state_29033__$1;
(statearr_29055_29085[(2)] = inst_29027);

(statearr_29055_29085[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29034 === (19))){
var inst_29014 = (state_29033[(2)]);
var state_29033__$1 = state_29033;
var statearr_29056_29086 = state_29033__$1;
(statearr_29056_29086[(2)] = inst_29014);

(statearr_29056_29086[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29034 === (11))){
var inst_28999 = (state_29033[(7)]);
var inst_28985 = (state_29033[(12)]);
var inst_28999__$1 = cljs.core.seq.call(null,inst_28985);
var state_29033__$1 = (function (){var statearr_29057 = state_29033;
(statearr_29057[(7)] = inst_28999__$1);

return statearr_29057;
})();
if(inst_28999__$1){
var statearr_29058_29087 = state_29033__$1;
(statearr_29058_29087[(1)] = (14));

} else {
var statearr_29059_29088 = state_29033__$1;
(statearr_29059_29088[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29034 === (9))){
var inst_29021 = (state_29033[(2)]);
var inst_29022 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_29033__$1 = (function (){var statearr_29060 = state_29033;
(statearr_29060[(15)] = inst_29021);

return statearr_29060;
})();
if(cljs.core.truth_(inst_29022)){
var statearr_29061_29089 = state_29033__$1;
(statearr_29061_29089[(1)] = (21));

} else {
var statearr_29062_29090 = state_29033__$1;
(statearr_29062_29090[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29034 === (5))){
var inst_28977 = cljs.core.async.close_BANG_.call(null,out);
var state_29033__$1 = state_29033;
var statearr_29063_29091 = state_29033__$1;
(statearr_29063_29091[(2)] = inst_28977);

(statearr_29063_29091[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29034 === (14))){
var inst_28999 = (state_29033[(7)]);
var inst_29001 = cljs.core.chunked_seq_QMARK_.call(null,inst_28999);
var state_29033__$1 = state_29033;
if(inst_29001){
var statearr_29064_29092 = state_29033__$1;
(statearr_29064_29092[(1)] = (17));

} else {
var statearr_29065_29093 = state_29033__$1;
(statearr_29065_29093[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29034 === (16))){
var inst_29017 = (state_29033[(2)]);
var state_29033__$1 = state_29033;
var statearr_29066_29094 = state_29033__$1;
(statearr_29066_29094[(2)] = inst_29017);

(statearr_29066_29094[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29034 === (10))){
var inst_28988 = (state_29033[(8)]);
var inst_28986 = (state_29033[(9)]);
var inst_28993 = cljs.core._nth.call(null,inst_28986,inst_28988);
var state_29033__$1 = state_29033;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29033__$1,(13),out,inst_28993);
} else {
if((state_val_29034 === (18))){
var inst_28999 = (state_29033[(7)]);
var inst_29008 = cljs.core.first.call(null,inst_28999);
var state_29033__$1 = state_29033;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29033__$1,(20),out,inst_29008);
} else {
if((state_val_29034 === (8))){
var inst_28988 = (state_29033[(8)]);
var inst_28987 = (state_29033[(11)]);
var inst_28990 = (inst_28988 < inst_28987);
var inst_28991 = inst_28990;
var state_29033__$1 = state_29033;
if(cljs.core.truth_(inst_28991)){
var statearr_29067_29095 = state_29033__$1;
(statearr_29067_29095[(1)] = (10));

} else {
var statearr_29068_29096 = state_29033__$1;
(statearr_29068_29096[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__27310__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__27310__auto____0 = (function (){
var statearr_29069 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29069[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__27310__auto__);

(statearr_29069[(1)] = (1));

return statearr_29069;
});
var cljs$core$async$mapcat_STAR__$_state_machine__27310__auto____1 = (function (state_29033){
while(true){
var ret_value__27311__auto__ = (function (){try{while(true){
var result__27312__auto__ = switch__27309__auto__.call(null,state_29033);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27312__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27312__auto__;
}
break;
}
}catch (e29070){if((e29070 instanceof Object)){
var ex__27313__auto__ = e29070;
var statearr_29071_29097 = state_29033;
(statearr_29071_29097[(5)] = ex__27313__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29033);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29070;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27311__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29098 = state_29033;
state_29033 = G__29098;
continue;
} else {
return ret_value__27311__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__27310__auto__ = function(state_29033){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__27310__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__27310__auto____1.call(this,state_29033);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__27310__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__27310__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__27310__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__27310__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__27310__auto__;
})()
})();
var state__27406__auto__ = (function (){var statearr_29072 = f__27405__auto__.call(null);
(statearr_29072[(6)] = c__27404__auto__);

return statearr_29072;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27406__auto__);
}));

return c__27404__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__29100 = arguments.length;
switch (G__29100) {
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
var G__29103 = arguments.length;
switch (G__29103) {
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
var G__29106 = arguments.length;
switch (G__29106) {
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
var c__27404__auto___29153 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27405__auto__ = (function (){var switch__27309__auto__ = (function (state_29130){
var state_val_29131 = (state_29130[(1)]);
if((state_val_29131 === (7))){
var inst_29125 = (state_29130[(2)]);
var state_29130__$1 = state_29130;
var statearr_29132_29154 = state_29130__$1;
(statearr_29132_29154[(2)] = inst_29125);

(statearr_29132_29154[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29131 === (1))){
var inst_29107 = null;
var state_29130__$1 = (function (){var statearr_29133 = state_29130;
(statearr_29133[(7)] = inst_29107);

return statearr_29133;
})();
var statearr_29134_29155 = state_29130__$1;
(statearr_29134_29155[(2)] = null);

(statearr_29134_29155[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29131 === (4))){
var inst_29110 = (state_29130[(8)]);
var inst_29110__$1 = (state_29130[(2)]);
var inst_29111 = (inst_29110__$1 == null);
var inst_29112 = cljs.core.not.call(null,inst_29111);
var state_29130__$1 = (function (){var statearr_29135 = state_29130;
(statearr_29135[(8)] = inst_29110__$1);

return statearr_29135;
})();
if(inst_29112){
var statearr_29136_29156 = state_29130__$1;
(statearr_29136_29156[(1)] = (5));

} else {
var statearr_29137_29157 = state_29130__$1;
(statearr_29137_29157[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29131 === (6))){
var state_29130__$1 = state_29130;
var statearr_29138_29158 = state_29130__$1;
(statearr_29138_29158[(2)] = null);

(statearr_29138_29158[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29131 === (3))){
var inst_29127 = (state_29130[(2)]);
var inst_29128 = cljs.core.async.close_BANG_.call(null,out);
var state_29130__$1 = (function (){var statearr_29139 = state_29130;
(statearr_29139[(9)] = inst_29127);

return statearr_29139;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29130__$1,inst_29128);
} else {
if((state_val_29131 === (2))){
var state_29130__$1 = state_29130;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29130__$1,(4),ch);
} else {
if((state_val_29131 === (11))){
var inst_29110 = (state_29130[(8)]);
var inst_29119 = (state_29130[(2)]);
var inst_29107 = inst_29110;
var state_29130__$1 = (function (){var statearr_29140 = state_29130;
(statearr_29140[(10)] = inst_29119);

(statearr_29140[(7)] = inst_29107);

return statearr_29140;
})();
var statearr_29141_29159 = state_29130__$1;
(statearr_29141_29159[(2)] = null);

(statearr_29141_29159[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29131 === (9))){
var inst_29110 = (state_29130[(8)]);
var state_29130__$1 = state_29130;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29130__$1,(11),out,inst_29110);
} else {
if((state_val_29131 === (5))){
var inst_29107 = (state_29130[(7)]);
var inst_29110 = (state_29130[(8)]);
var inst_29114 = cljs.core._EQ_.call(null,inst_29110,inst_29107);
var state_29130__$1 = state_29130;
if(inst_29114){
var statearr_29143_29160 = state_29130__$1;
(statearr_29143_29160[(1)] = (8));

} else {
var statearr_29144_29161 = state_29130__$1;
(statearr_29144_29161[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29131 === (10))){
var inst_29122 = (state_29130[(2)]);
var state_29130__$1 = state_29130;
var statearr_29145_29162 = state_29130__$1;
(statearr_29145_29162[(2)] = inst_29122);

(statearr_29145_29162[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29131 === (8))){
var inst_29107 = (state_29130[(7)]);
var tmp29142 = inst_29107;
var inst_29107__$1 = tmp29142;
var state_29130__$1 = (function (){var statearr_29146 = state_29130;
(statearr_29146[(7)] = inst_29107__$1);

return statearr_29146;
})();
var statearr_29147_29163 = state_29130__$1;
(statearr_29147_29163[(2)] = null);

(statearr_29147_29163[(1)] = (2));


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
var cljs$core$async$state_machine__27310__auto__ = null;
var cljs$core$async$state_machine__27310__auto____0 = (function (){
var statearr_29148 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29148[(0)] = cljs$core$async$state_machine__27310__auto__);

(statearr_29148[(1)] = (1));

return statearr_29148;
});
var cljs$core$async$state_machine__27310__auto____1 = (function (state_29130){
while(true){
var ret_value__27311__auto__ = (function (){try{while(true){
var result__27312__auto__ = switch__27309__auto__.call(null,state_29130);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27312__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27312__auto__;
}
break;
}
}catch (e29149){if((e29149 instanceof Object)){
var ex__27313__auto__ = e29149;
var statearr_29150_29164 = state_29130;
(statearr_29150_29164[(5)] = ex__27313__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29130);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29149;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27311__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29165 = state_29130;
state_29130 = G__29165;
continue;
} else {
return ret_value__27311__auto__;
}
break;
}
});
cljs$core$async$state_machine__27310__auto__ = function(state_29130){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27310__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27310__auto____1.call(this,state_29130);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27310__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27310__auto____0;
cljs$core$async$state_machine__27310__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27310__auto____1;
return cljs$core$async$state_machine__27310__auto__;
})()
})();
var state__27406__auto__ = (function (){var statearr_29151 = f__27405__auto__.call(null);
(statearr_29151[(6)] = c__27404__auto___29153);

return statearr_29151;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27406__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__29167 = arguments.length;
switch (G__29167) {
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
var c__27404__auto___29233 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27405__auto__ = (function (){var switch__27309__auto__ = (function (state_29205){
var state_val_29206 = (state_29205[(1)]);
if((state_val_29206 === (7))){
var inst_29201 = (state_29205[(2)]);
var state_29205__$1 = state_29205;
var statearr_29207_29234 = state_29205__$1;
(statearr_29207_29234[(2)] = inst_29201);

(statearr_29207_29234[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29206 === (1))){
var inst_29168 = (new Array(n));
var inst_29169 = inst_29168;
var inst_29170 = (0);
var state_29205__$1 = (function (){var statearr_29208 = state_29205;
(statearr_29208[(7)] = inst_29170);

(statearr_29208[(8)] = inst_29169);

return statearr_29208;
})();
var statearr_29209_29235 = state_29205__$1;
(statearr_29209_29235[(2)] = null);

(statearr_29209_29235[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29206 === (4))){
var inst_29173 = (state_29205[(9)]);
var inst_29173__$1 = (state_29205[(2)]);
var inst_29174 = (inst_29173__$1 == null);
var inst_29175 = cljs.core.not.call(null,inst_29174);
var state_29205__$1 = (function (){var statearr_29210 = state_29205;
(statearr_29210[(9)] = inst_29173__$1);

return statearr_29210;
})();
if(inst_29175){
var statearr_29211_29236 = state_29205__$1;
(statearr_29211_29236[(1)] = (5));

} else {
var statearr_29212_29237 = state_29205__$1;
(statearr_29212_29237[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29206 === (15))){
var inst_29195 = (state_29205[(2)]);
var state_29205__$1 = state_29205;
var statearr_29213_29238 = state_29205__$1;
(statearr_29213_29238[(2)] = inst_29195);

(statearr_29213_29238[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29206 === (13))){
var state_29205__$1 = state_29205;
var statearr_29214_29239 = state_29205__$1;
(statearr_29214_29239[(2)] = null);

(statearr_29214_29239[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29206 === (6))){
var inst_29170 = (state_29205[(7)]);
var inst_29191 = (inst_29170 > (0));
var state_29205__$1 = state_29205;
if(cljs.core.truth_(inst_29191)){
var statearr_29215_29240 = state_29205__$1;
(statearr_29215_29240[(1)] = (12));

} else {
var statearr_29216_29241 = state_29205__$1;
(statearr_29216_29241[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29206 === (3))){
var inst_29203 = (state_29205[(2)]);
var state_29205__$1 = state_29205;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29205__$1,inst_29203);
} else {
if((state_val_29206 === (12))){
var inst_29169 = (state_29205[(8)]);
var inst_29193 = cljs.core.vec.call(null,inst_29169);
var state_29205__$1 = state_29205;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29205__$1,(15),out,inst_29193);
} else {
if((state_val_29206 === (2))){
var state_29205__$1 = state_29205;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29205__$1,(4),ch);
} else {
if((state_val_29206 === (11))){
var inst_29185 = (state_29205[(2)]);
var inst_29186 = (new Array(n));
var inst_29169 = inst_29186;
var inst_29170 = (0);
var state_29205__$1 = (function (){var statearr_29217 = state_29205;
(statearr_29217[(10)] = inst_29185);

(statearr_29217[(7)] = inst_29170);

(statearr_29217[(8)] = inst_29169);

return statearr_29217;
})();
var statearr_29218_29242 = state_29205__$1;
(statearr_29218_29242[(2)] = null);

(statearr_29218_29242[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29206 === (9))){
var inst_29169 = (state_29205[(8)]);
var inst_29183 = cljs.core.vec.call(null,inst_29169);
var state_29205__$1 = state_29205;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29205__$1,(11),out,inst_29183);
} else {
if((state_val_29206 === (5))){
var inst_29178 = (state_29205[(11)]);
var inst_29173 = (state_29205[(9)]);
var inst_29170 = (state_29205[(7)]);
var inst_29169 = (state_29205[(8)]);
var inst_29177 = (inst_29169[inst_29170] = inst_29173);
var inst_29178__$1 = (inst_29170 + (1));
var inst_29179 = (inst_29178__$1 < n);
var state_29205__$1 = (function (){var statearr_29219 = state_29205;
(statearr_29219[(11)] = inst_29178__$1);

(statearr_29219[(12)] = inst_29177);

return statearr_29219;
})();
if(cljs.core.truth_(inst_29179)){
var statearr_29220_29243 = state_29205__$1;
(statearr_29220_29243[(1)] = (8));

} else {
var statearr_29221_29244 = state_29205__$1;
(statearr_29221_29244[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29206 === (14))){
var inst_29198 = (state_29205[(2)]);
var inst_29199 = cljs.core.async.close_BANG_.call(null,out);
var state_29205__$1 = (function (){var statearr_29223 = state_29205;
(statearr_29223[(13)] = inst_29198);

return statearr_29223;
})();
var statearr_29224_29245 = state_29205__$1;
(statearr_29224_29245[(2)] = inst_29199);

(statearr_29224_29245[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29206 === (10))){
var inst_29189 = (state_29205[(2)]);
var state_29205__$1 = state_29205;
var statearr_29225_29246 = state_29205__$1;
(statearr_29225_29246[(2)] = inst_29189);

(statearr_29225_29246[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29206 === (8))){
var inst_29178 = (state_29205[(11)]);
var inst_29169 = (state_29205[(8)]);
var tmp29222 = inst_29169;
var inst_29169__$1 = tmp29222;
var inst_29170 = inst_29178;
var state_29205__$1 = (function (){var statearr_29226 = state_29205;
(statearr_29226[(7)] = inst_29170);

(statearr_29226[(8)] = inst_29169__$1);

return statearr_29226;
})();
var statearr_29227_29247 = state_29205__$1;
(statearr_29227_29247[(2)] = null);

(statearr_29227_29247[(1)] = (2));


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
var cljs$core$async$state_machine__27310__auto__ = null;
var cljs$core$async$state_machine__27310__auto____0 = (function (){
var statearr_29228 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29228[(0)] = cljs$core$async$state_machine__27310__auto__);

(statearr_29228[(1)] = (1));

return statearr_29228;
});
var cljs$core$async$state_machine__27310__auto____1 = (function (state_29205){
while(true){
var ret_value__27311__auto__ = (function (){try{while(true){
var result__27312__auto__ = switch__27309__auto__.call(null,state_29205);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27312__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27312__auto__;
}
break;
}
}catch (e29229){if((e29229 instanceof Object)){
var ex__27313__auto__ = e29229;
var statearr_29230_29248 = state_29205;
(statearr_29230_29248[(5)] = ex__27313__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29205);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29229;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27311__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29249 = state_29205;
state_29205 = G__29249;
continue;
} else {
return ret_value__27311__auto__;
}
break;
}
});
cljs$core$async$state_machine__27310__auto__ = function(state_29205){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27310__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27310__auto____1.call(this,state_29205);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27310__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27310__auto____0;
cljs$core$async$state_machine__27310__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27310__auto____1;
return cljs$core$async$state_machine__27310__auto__;
})()
})();
var state__27406__auto__ = (function (){var statearr_29231 = f__27405__auto__.call(null);
(statearr_29231[(6)] = c__27404__auto___29233);

return statearr_29231;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27406__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__29251 = arguments.length;
switch (G__29251) {
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
var c__27404__auto___29321 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27405__auto__ = (function (){var switch__27309__auto__ = (function (state_29293){
var state_val_29294 = (state_29293[(1)]);
if((state_val_29294 === (7))){
var inst_29289 = (state_29293[(2)]);
var state_29293__$1 = state_29293;
var statearr_29295_29322 = state_29293__$1;
(statearr_29295_29322[(2)] = inst_29289);

(statearr_29295_29322[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29294 === (1))){
var inst_29252 = [];
var inst_29253 = inst_29252;
var inst_29254 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_29293__$1 = (function (){var statearr_29296 = state_29293;
(statearr_29296[(7)] = inst_29254);

(statearr_29296[(8)] = inst_29253);

return statearr_29296;
})();
var statearr_29297_29323 = state_29293__$1;
(statearr_29297_29323[(2)] = null);

(statearr_29297_29323[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29294 === (4))){
var inst_29257 = (state_29293[(9)]);
var inst_29257__$1 = (state_29293[(2)]);
var inst_29258 = (inst_29257__$1 == null);
var inst_29259 = cljs.core.not.call(null,inst_29258);
var state_29293__$1 = (function (){var statearr_29298 = state_29293;
(statearr_29298[(9)] = inst_29257__$1);

return statearr_29298;
})();
if(inst_29259){
var statearr_29299_29324 = state_29293__$1;
(statearr_29299_29324[(1)] = (5));

} else {
var statearr_29300_29325 = state_29293__$1;
(statearr_29300_29325[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29294 === (15))){
var inst_29283 = (state_29293[(2)]);
var state_29293__$1 = state_29293;
var statearr_29301_29326 = state_29293__$1;
(statearr_29301_29326[(2)] = inst_29283);

(statearr_29301_29326[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29294 === (13))){
var state_29293__$1 = state_29293;
var statearr_29302_29327 = state_29293__$1;
(statearr_29302_29327[(2)] = null);

(statearr_29302_29327[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29294 === (6))){
var inst_29253 = (state_29293[(8)]);
var inst_29278 = inst_29253.length;
var inst_29279 = (inst_29278 > (0));
var state_29293__$1 = state_29293;
if(cljs.core.truth_(inst_29279)){
var statearr_29303_29328 = state_29293__$1;
(statearr_29303_29328[(1)] = (12));

} else {
var statearr_29304_29329 = state_29293__$1;
(statearr_29304_29329[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29294 === (3))){
var inst_29291 = (state_29293[(2)]);
var state_29293__$1 = state_29293;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29293__$1,inst_29291);
} else {
if((state_val_29294 === (12))){
var inst_29253 = (state_29293[(8)]);
var inst_29281 = cljs.core.vec.call(null,inst_29253);
var state_29293__$1 = state_29293;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29293__$1,(15),out,inst_29281);
} else {
if((state_val_29294 === (2))){
var state_29293__$1 = state_29293;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29293__$1,(4),ch);
} else {
if((state_val_29294 === (11))){
var inst_29257 = (state_29293[(9)]);
var inst_29261 = (state_29293[(10)]);
var inst_29271 = (state_29293[(2)]);
var inst_29272 = [];
var inst_29273 = inst_29272.push(inst_29257);
var inst_29253 = inst_29272;
var inst_29254 = inst_29261;
var state_29293__$1 = (function (){var statearr_29305 = state_29293;
(statearr_29305[(7)] = inst_29254);

(statearr_29305[(11)] = inst_29271);

(statearr_29305[(8)] = inst_29253);

(statearr_29305[(12)] = inst_29273);

return statearr_29305;
})();
var statearr_29306_29330 = state_29293__$1;
(statearr_29306_29330[(2)] = null);

(statearr_29306_29330[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29294 === (9))){
var inst_29253 = (state_29293[(8)]);
var inst_29269 = cljs.core.vec.call(null,inst_29253);
var state_29293__$1 = state_29293;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29293__$1,(11),out,inst_29269);
} else {
if((state_val_29294 === (5))){
var inst_29254 = (state_29293[(7)]);
var inst_29257 = (state_29293[(9)]);
var inst_29261 = (state_29293[(10)]);
var inst_29261__$1 = f.call(null,inst_29257);
var inst_29262 = cljs.core._EQ_.call(null,inst_29261__$1,inst_29254);
var inst_29263 = cljs.core.keyword_identical_QMARK_.call(null,inst_29254,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_29264 = ((inst_29262) || (inst_29263));
var state_29293__$1 = (function (){var statearr_29307 = state_29293;
(statearr_29307[(10)] = inst_29261__$1);

return statearr_29307;
})();
if(cljs.core.truth_(inst_29264)){
var statearr_29308_29331 = state_29293__$1;
(statearr_29308_29331[(1)] = (8));

} else {
var statearr_29309_29332 = state_29293__$1;
(statearr_29309_29332[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29294 === (14))){
var inst_29286 = (state_29293[(2)]);
var inst_29287 = cljs.core.async.close_BANG_.call(null,out);
var state_29293__$1 = (function (){var statearr_29311 = state_29293;
(statearr_29311[(13)] = inst_29286);

return statearr_29311;
})();
var statearr_29312_29333 = state_29293__$1;
(statearr_29312_29333[(2)] = inst_29287);

(statearr_29312_29333[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29294 === (10))){
var inst_29276 = (state_29293[(2)]);
var state_29293__$1 = state_29293;
var statearr_29313_29334 = state_29293__$1;
(statearr_29313_29334[(2)] = inst_29276);

(statearr_29313_29334[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29294 === (8))){
var inst_29257 = (state_29293[(9)]);
var inst_29253 = (state_29293[(8)]);
var inst_29261 = (state_29293[(10)]);
var inst_29266 = inst_29253.push(inst_29257);
var tmp29310 = inst_29253;
var inst_29253__$1 = tmp29310;
var inst_29254 = inst_29261;
var state_29293__$1 = (function (){var statearr_29314 = state_29293;
(statearr_29314[(7)] = inst_29254);

(statearr_29314[(14)] = inst_29266);

(statearr_29314[(8)] = inst_29253__$1);

return statearr_29314;
})();
var statearr_29315_29335 = state_29293__$1;
(statearr_29315_29335[(2)] = null);

(statearr_29315_29335[(1)] = (2));


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
var cljs$core$async$state_machine__27310__auto__ = null;
var cljs$core$async$state_machine__27310__auto____0 = (function (){
var statearr_29316 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29316[(0)] = cljs$core$async$state_machine__27310__auto__);

(statearr_29316[(1)] = (1));

return statearr_29316;
});
var cljs$core$async$state_machine__27310__auto____1 = (function (state_29293){
while(true){
var ret_value__27311__auto__ = (function (){try{while(true){
var result__27312__auto__ = switch__27309__auto__.call(null,state_29293);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27312__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27312__auto__;
}
break;
}
}catch (e29317){if((e29317 instanceof Object)){
var ex__27313__auto__ = e29317;
var statearr_29318_29336 = state_29293;
(statearr_29318_29336[(5)] = ex__27313__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29293);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29317;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27311__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29337 = state_29293;
state_29293 = G__29337;
continue;
} else {
return ret_value__27311__auto__;
}
break;
}
});
cljs$core$async$state_machine__27310__auto__ = function(state_29293){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27310__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27310__auto____1.call(this,state_29293);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27310__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27310__auto____0;
cljs$core$async$state_machine__27310__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27310__auto____1;
return cljs$core$async$state_machine__27310__auto__;
})()
})();
var state__27406__auto__ = (function (){var statearr_29319 = f__27405__auto__.call(null);
(statearr_29319[(6)] = c__27404__auto___29321);

return statearr_29319;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27406__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=async.js.map?rel=1593791109675
