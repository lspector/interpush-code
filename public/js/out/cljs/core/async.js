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
var G__34131 = arguments.length;
switch (G__34131) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34132 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34132 = (function (f,blockable,meta34133){
this.f = f;
this.blockable = blockable;
this.meta34133 = meta34133;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34132.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34134,meta34133__$1){
var self__ = this;
var _34134__$1 = this;
return (new cljs.core.async.t_cljs$core$async34132(self__.f,self__.blockable,meta34133__$1));
}));

(cljs.core.async.t_cljs$core$async34132.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34134){
var self__ = this;
var _34134__$1 = this;
return self__.meta34133;
}));

(cljs.core.async.t_cljs$core$async34132.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34132.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async34132.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async34132.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async34132.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta34133","meta34133",-406303940,null)], null);
}));

(cljs.core.async.t_cljs$core$async34132.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34132.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34132");

(cljs.core.async.t_cljs$core$async34132.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async34132");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34132.
 */
cljs.core.async.__GT_t_cljs$core$async34132 = (function cljs$core$async$__GT_t_cljs$core$async34132(f__$1,blockable__$1,meta34133){
return (new cljs.core.async.t_cljs$core$async34132(f__$1,blockable__$1,meta34133));
});

}

return (new cljs.core.async.t_cljs$core$async34132(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__34138 = arguments.length;
switch (G__34138) {
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
var G__34141 = arguments.length;
switch (G__34141) {
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
var G__34144 = arguments.length;
switch (G__34144) {
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
var val_34146 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_34146);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,val_34146);
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
var G__34148 = arguments.length;
switch (G__34148) {
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
var n__4613__auto___34150 = n;
var x_34151 = (0);
while(true){
if((x_34151 < n__4613__auto___34150)){
(a[x_34151] = (0));

var G__34152 = (x_34151 + (1));
x_34151 = G__34152;
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

var G__34153 = (i + (1));
i = G__34153;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34154 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34154 = (function (flag,meta34155){
this.flag = flag;
this.meta34155 = meta34155;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34154.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34156,meta34155__$1){
var self__ = this;
var _34156__$1 = this;
return (new cljs.core.async.t_cljs$core$async34154(self__.flag,meta34155__$1));
}));

(cljs.core.async.t_cljs$core$async34154.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34156){
var self__ = this;
var _34156__$1 = this;
return self__.meta34155;
}));

(cljs.core.async.t_cljs$core$async34154.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34154.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async34154.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async34154.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async34154.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta34155","meta34155",1535239027,null)], null);
}));

(cljs.core.async.t_cljs$core$async34154.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34154.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34154");

(cljs.core.async.t_cljs$core$async34154.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async34154");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34154.
 */
cljs.core.async.__GT_t_cljs$core$async34154 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async34154(flag__$1,meta34155){
return (new cljs.core.async.t_cljs$core$async34154(flag__$1,meta34155));
});

}

return (new cljs.core.async.t_cljs$core$async34154(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34157 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34157 = (function (flag,cb,meta34158){
this.flag = flag;
this.cb = cb;
this.meta34158 = meta34158;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34157.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34159,meta34158__$1){
var self__ = this;
var _34159__$1 = this;
return (new cljs.core.async.t_cljs$core$async34157(self__.flag,self__.cb,meta34158__$1));
}));

(cljs.core.async.t_cljs$core$async34157.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34159){
var self__ = this;
var _34159__$1 = this;
return self__.meta34158;
}));

(cljs.core.async.t_cljs$core$async34157.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34157.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async34157.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async34157.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async34157.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta34158","meta34158",-1460405968,null)], null);
}));

(cljs.core.async.t_cljs$core$async34157.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34157.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34157");

(cljs.core.async.t_cljs$core$async34157.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async34157");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34157.
 */
cljs.core.async.__GT_t_cljs$core$async34157 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async34157(flag__$1,cb__$1,meta34158){
return (new cljs.core.async.t_cljs$core$async34157(flag__$1,cb__$1,meta34158));
});

}

return (new cljs.core.async.t_cljs$core$async34157(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__34160_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34160_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__34161_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34161_SHARP_,port], null));
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
var G__34162 = (i + (1));
i = G__34162;
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
var len__4736__auto___34168 = arguments.length;
var i__4737__auto___34169 = (0);
while(true){
if((i__4737__auto___34169 < len__4736__auto___34168)){
args__4742__auto__.push((arguments[i__4737__auto___34169]));

var G__34170 = (i__4737__auto___34169 + (1));
i__4737__auto___34169 = G__34170;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__34165){
var map__34166 = p__34165;
var map__34166__$1 = (((((!((map__34166 == null))))?(((((map__34166.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34166.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34166):map__34166);
var opts = map__34166__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq34163){
var G__34164 = cljs.core.first.call(null,seq34163);
var seq34163__$1 = cljs.core.next.call(null,seq34163);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34164,seq34163__$1);
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
var G__34172 = arguments.length;
switch (G__34172) {
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
var c__34071__auto___34218 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__34072__auto__ = (function (){var switch__33976__auto__ = (function (state_34196){
var state_val_34197 = (state_34196[(1)]);
if((state_val_34197 === (7))){
var inst_34192 = (state_34196[(2)]);
var state_34196__$1 = state_34196;
var statearr_34198_34219 = state_34196__$1;
(statearr_34198_34219[(2)] = inst_34192);

(statearr_34198_34219[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34197 === (1))){
var state_34196__$1 = state_34196;
var statearr_34199_34220 = state_34196__$1;
(statearr_34199_34220[(2)] = null);

(statearr_34199_34220[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34197 === (4))){
var inst_34175 = (state_34196[(7)]);
var inst_34175__$1 = (state_34196[(2)]);
var inst_34176 = (inst_34175__$1 == null);
var state_34196__$1 = (function (){var statearr_34200 = state_34196;
(statearr_34200[(7)] = inst_34175__$1);

return statearr_34200;
})();
if(cljs.core.truth_(inst_34176)){
var statearr_34201_34221 = state_34196__$1;
(statearr_34201_34221[(1)] = (5));

} else {
var statearr_34202_34222 = state_34196__$1;
(statearr_34202_34222[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34197 === (13))){
var state_34196__$1 = state_34196;
var statearr_34203_34223 = state_34196__$1;
(statearr_34203_34223[(2)] = null);

(statearr_34203_34223[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34197 === (6))){
var inst_34175 = (state_34196[(7)]);
var state_34196__$1 = state_34196;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34196__$1,(11),to,inst_34175);
} else {
if((state_val_34197 === (3))){
var inst_34194 = (state_34196[(2)]);
var state_34196__$1 = state_34196;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34196__$1,inst_34194);
} else {
if((state_val_34197 === (12))){
var state_34196__$1 = state_34196;
var statearr_34204_34224 = state_34196__$1;
(statearr_34204_34224[(2)] = null);

(statearr_34204_34224[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34197 === (2))){
var state_34196__$1 = state_34196;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34196__$1,(4),from);
} else {
if((state_val_34197 === (11))){
var inst_34185 = (state_34196[(2)]);
var state_34196__$1 = state_34196;
if(cljs.core.truth_(inst_34185)){
var statearr_34205_34225 = state_34196__$1;
(statearr_34205_34225[(1)] = (12));

} else {
var statearr_34206_34226 = state_34196__$1;
(statearr_34206_34226[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34197 === (9))){
var state_34196__$1 = state_34196;
var statearr_34207_34227 = state_34196__$1;
(statearr_34207_34227[(2)] = null);

(statearr_34207_34227[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34197 === (5))){
var state_34196__$1 = state_34196;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34208_34228 = state_34196__$1;
(statearr_34208_34228[(1)] = (8));

} else {
var statearr_34209_34229 = state_34196__$1;
(statearr_34209_34229[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34197 === (14))){
var inst_34190 = (state_34196[(2)]);
var state_34196__$1 = state_34196;
var statearr_34210_34230 = state_34196__$1;
(statearr_34210_34230[(2)] = inst_34190);

(statearr_34210_34230[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34197 === (10))){
var inst_34182 = (state_34196[(2)]);
var state_34196__$1 = state_34196;
var statearr_34211_34231 = state_34196__$1;
(statearr_34211_34231[(2)] = inst_34182);

(statearr_34211_34231[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34197 === (8))){
var inst_34179 = cljs.core.async.close_BANG_.call(null,to);
var state_34196__$1 = state_34196;
var statearr_34212_34232 = state_34196__$1;
(statearr_34212_34232[(2)] = inst_34179);

(statearr_34212_34232[(1)] = (10));


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
var cljs$core$async$state_machine__33977__auto__ = null;
var cljs$core$async$state_machine__33977__auto____0 = (function (){
var statearr_34213 = [null,null,null,null,null,null,null,null];
(statearr_34213[(0)] = cljs$core$async$state_machine__33977__auto__);

(statearr_34213[(1)] = (1));

return statearr_34213;
});
var cljs$core$async$state_machine__33977__auto____1 = (function (state_34196){
while(true){
var ret_value__33978__auto__ = (function (){try{while(true){
var result__33979__auto__ = switch__33976__auto__.call(null,state_34196);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33979__auto__;
}
break;
}
}catch (e34214){if((e34214 instanceof Object)){
var ex__33980__auto__ = e34214;
var statearr_34215_34233 = state_34196;
(statearr_34215_34233[(5)] = ex__33980__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34196);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34214;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33978__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34234 = state_34196;
state_34196 = G__34234;
continue;
} else {
return ret_value__33978__auto__;
}
break;
}
});
cljs$core$async$state_machine__33977__auto__ = function(state_34196){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33977__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33977__auto____1.call(this,state_34196);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33977__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33977__auto____0;
cljs$core$async$state_machine__33977__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33977__auto____1;
return cljs$core$async$state_machine__33977__auto__;
})()
})();
var state__34073__auto__ = (function (){var statearr_34216 = f__34072__auto__.call(null);
(statearr_34216[(6)] = c__34071__auto___34218);

return statearr_34216;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34073__auto__);
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
var process = (function (p__34235){
var vec__34236 = p__34235;
var v = cljs.core.nth.call(null,vec__34236,(0),null);
var p = cljs.core.nth.call(null,vec__34236,(1),null);
var job = vec__34236;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__34071__auto___34407 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__34072__auto__ = (function (){var switch__33976__auto__ = (function (state_34243){
var state_val_34244 = (state_34243[(1)]);
if((state_val_34244 === (1))){
var state_34243__$1 = state_34243;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34243__$1,(2),res,v);
} else {
if((state_val_34244 === (2))){
var inst_34240 = (state_34243[(2)]);
var inst_34241 = cljs.core.async.close_BANG_.call(null,res);
var state_34243__$1 = (function (){var statearr_34245 = state_34243;
(statearr_34245[(7)] = inst_34240);

return statearr_34245;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34243__$1,inst_34241);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33977__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33977__auto____0 = (function (){
var statearr_34246 = [null,null,null,null,null,null,null,null];
(statearr_34246[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33977__auto__);

(statearr_34246[(1)] = (1));

return statearr_34246;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33977__auto____1 = (function (state_34243){
while(true){
var ret_value__33978__auto__ = (function (){try{while(true){
var result__33979__auto__ = switch__33976__auto__.call(null,state_34243);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33979__auto__;
}
break;
}
}catch (e34247){if((e34247 instanceof Object)){
var ex__33980__auto__ = e34247;
var statearr_34248_34408 = state_34243;
(statearr_34248_34408[(5)] = ex__33980__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34243);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34247;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33978__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34409 = state_34243;
state_34243 = G__34409;
continue;
} else {
return ret_value__33978__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33977__auto__ = function(state_34243){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33977__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33977__auto____1.call(this,state_34243);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33977__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33977__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33977__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33977__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33977__auto__;
})()
})();
var state__34073__auto__ = (function (){var statearr_34249 = f__34072__auto__.call(null);
(statearr_34249[(6)] = c__34071__auto___34407);

return statearr_34249;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34073__auto__);
}));


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var async = (function (p__34250){
var vec__34251 = p__34250;
var v = cljs.core.nth.call(null,vec__34251,(0),null);
var p = cljs.core.nth.call(null,vec__34251,(1),null);
var job = vec__34251;
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
var n__4613__auto___34410 = n;
var __34411 = (0);
while(true){
if((__34411 < n__4613__auto___34410)){
var G__34254_34412 = type;
var G__34254_34413__$1 = (((G__34254_34412 instanceof cljs.core.Keyword))?G__34254_34412.fqn:null);
switch (G__34254_34413__$1) {
case "compute":
var c__34071__auto___34415 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__34411,c__34071__auto___34415,G__34254_34412,G__34254_34413__$1,n__4613__auto___34410,jobs,results,process,async){
return (function (){
var f__34072__auto__ = (function (){var switch__33976__auto__ = ((function (__34411,c__34071__auto___34415,G__34254_34412,G__34254_34413__$1,n__4613__auto___34410,jobs,results,process,async){
return (function (state_34267){
var state_val_34268 = (state_34267[(1)]);
if((state_val_34268 === (1))){
var state_34267__$1 = state_34267;
var statearr_34269_34416 = state_34267__$1;
(statearr_34269_34416[(2)] = null);

(statearr_34269_34416[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34268 === (2))){
var state_34267__$1 = state_34267;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34267__$1,(4),jobs);
} else {
if((state_val_34268 === (3))){
var inst_34265 = (state_34267[(2)]);
var state_34267__$1 = state_34267;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34267__$1,inst_34265);
} else {
if((state_val_34268 === (4))){
var inst_34257 = (state_34267[(2)]);
var inst_34258 = process.call(null,inst_34257);
var state_34267__$1 = state_34267;
if(cljs.core.truth_(inst_34258)){
var statearr_34270_34417 = state_34267__$1;
(statearr_34270_34417[(1)] = (5));

} else {
var statearr_34271_34418 = state_34267__$1;
(statearr_34271_34418[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34268 === (5))){
var state_34267__$1 = state_34267;
var statearr_34272_34419 = state_34267__$1;
(statearr_34272_34419[(2)] = null);

(statearr_34272_34419[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34268 === (6))){
var state_34267__$1 = state_34267;
var statearr_34273_34420 = state_34267__$1;
(statearr_34273_34420[(2)] = null);

(statearr_34273_34420[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34268 === (7))){
var inst_34263 = (state_34267[(2)]);
var state_34267__$1 = state_34267;
var statearr_34274_34421 = state_34267__$1;
(statearr_34274_34421[(2)] = inst_34263);

(statearr_34274_34421[(1)] = (3));


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
});})(__34411,c__34071__auto___34415,G__34254_34412,G__34254_34413__$1,n__4613__auto___34410,jobs,results,process,async))
;
return ((function (__34411,switch__33976__auto__,c__34071__auto___34415,G__34254_34412,G__34254_34413__$1,n__4613__auto___34410,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33977__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33977__auto____0 = (function (){
var statearr_34275 = [null,null,null,null,null,null,null];
(statearr_34275[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33977__auto__);

(statearr_34275[(1)] = (1));

return statearr_34275;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33977__auto____1 = (function (state_34267){
while(true){
var ret_value__33978__auto__ = (function (){try{while(true){
var result__33979__auto__ = switch__33976__auto__.call(null,state_34267);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33979__auto__;
}
break;
}
}catch (e34276){if((e34276 instanceof Object)){
var ex__33980__auto__ = e34276;
var statearr_34277_34422 = state_34267;
(statearr_34277_34422[(5)] = ex__33980__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34267);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34276;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33978__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34423 = state_34267;
state_34267 = G__34423;
continue;
} else {
return ret_value__33978__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33977__auto__ = function(state_34267){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33977__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33977__auto____1.call(this,state_34267);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33977__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33977__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33977__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33977__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33977__auto__;
})()
;})(__34411,switch__33976__auto__,c__34071__auto___34415,G__34254_34412,G__34254_34413__$1,n__4613__auto___34410,jobs,results,process,async))
})();
var state__34073__auto__ = (function (){var statearr_34278 = f__34072__auto__.call(null);
(statearr_34278[(6)] = c__34071__auto___34415);

return statearr_34278;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34073__auto__);
});})(__34411,c__34071__auto___34415,G__34254_34412,G__34254_34413__$1,n__4613__auto___34410,jobs,results,process,async))
);


break;
case "async":
var c__34071__auto___34424 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__34411,c__34071__auto___34424,G__34254_34412,G__34254_34413__$1,n__4613__auto___34410,jobs,results,process,async){
return (function (){
var f__34072__auto__ = (function (){var switch__33976__auto__ = ((function (__34411,c__34071__auto___34424,G__34254_34412,G__34254_34413__$1,n__4613__auto___34410,jobs,results,process,async){
return (function (state_34291){
var state_val_34292 = (state_34291[(1)]);
if((state_val_34292 === (1))){
var state_34291__$1 = state_34291;
var statearr_34293_34425 = state_34291__$1;
(statearr_34293_34425[(2)] = null);

(statearr_34293_34425[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34292 === (2))){
var state_34291__$1 = state_34291;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34291__$1,(4),jobs);
} else {
if((state_val_34292 === (3))){
var inst_34289 = (state_34291[(2)]);
var state_34291__$1 = state_34291;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34291__$1,inst_34289);
} else {
if((state_val_34292 === (4))){
var inst_34281 = (state_34291[(2)]);
var inst_34282 = async.call(null,inst_34281);
var state_34291__$1 = state_34291;
if(cljs.core.truth_(inst_34282)){
var statearr_34294_34426 = state_34291__$1;
(statearr_34294_34426[(1)] = (5));

} else {
var statearr_34295_34427 = state_34291__$1;
(statearr_34295_34427[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34292 === (5))){
var state_34291__$1 = state_34291;
var statearr_34296_34428 = state_34291__$1;
(statearr_34296_34428[(2)] = null);

(statearr_34296_34428[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34292 === (6))){
var state_34291__$1 = state_34291;
var statearr_34297_34429 = state_34291__$1;
(statearr_34297_34429[(2)] = null);

(statearr_34297_34429[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34292 === (7))){
var inst_34287 = (state_34291[(2)]);
var state_34291__$1 = state_34291;
var statearr_34298_34430 = state_34291__$1;
(statearr_34298_34430[(2)] = inst_34287);

(statearr_34298_34430[(1)] = (3));


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
});})(__34411,c__34071__auto___34424,G__34254_34412,G__34254_34413__$1,n__4613__auto___34410,jobs,results,process,async))
;
return ((function (__34411,switch__33976__auto__,c__34071__auto___34424,G__34254_34412,G__34254_34413__$1,n__4613__auto___34410,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33977__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33977__auto____0 = (function (){
var statearr_34299 = [null,null,null,null,null,null,null];
(statearr_34299[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33977__auto__);

(statearr_34299[(1)] = (1));

return statearr_34299;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33977__auto____1 = (function (state_34291){
while(true){
var ret_value__33978__auto__ = (function (){try{while(true){
var result__33979__auto__ = switch__33976__auto__.call(null,state_34291);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33979__auto__;
}
break;
}
}catch (e34300){if((e34300 instanceof Object)){
var ex__33980__auto__ = e34300;
var statearr_34301_34431 = state_34291;
(statearr_34301_34431[(5)] = ex__33980__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34291);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34300;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33978__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34432 = state_34291;
state_34291 = G__34432;
continue;
} else {
return ret_value__33978__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33977__auto__ = function(state_34291){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33977__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33977__auto____1.call(this,state_34291);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33977__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33977__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33977__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33977__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33977__auto__;
})()
;})(__34411,switch__33976__auto__,c__34071__auto___34424,G__34254_34412,G__34254_34413__$1,n__4613__auto___34410,jobs,results,process,async))
})();
var state__34073__auto__ = (function (){var statearr_34302 = f__34072__auto__.call(null);
(statearr_34302[(6)] = c__34071__auto___34424);

return statearr_34302;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34073__auto__);
});})(__34411,c__34071__auto___34424,G__34254_34412,G__34254_34413__$1,n__4613__auto___34410,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34254_34413__$1)].join('')));

}

var G__34433 = (__34411 + (1));
__34411 = G__34433;
continue;
} else {
}
break;
}

var c__34071__auto___34434 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__34072__auto__ = (function (){var switch__33976__auto__ = (function (state_34324){
var state_val_34325 = (state_34324[(1)]);
if((state_val_34325 === (7))){
var inst_34320 = (state_34324[(2)]);
var state_34324__$1 = state_34324;
var statearr_34326_34435 = state_34324__$1;
(statearr_34326_34435[(2)] = inst_34320);

(statearr_34326_34435[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34325 === (1))){
var state_34324__$1 = state_34324;
var statearr_34327_34436 = state_34324__$1;
(statearr_34327_34436[(2)] = null);

(statearr_34327_34436[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34325 === (4))){
var inst_34305 = (state_34324[(7)]);
var inst_34305__$1 = (state_34324[(2)]);
var inst_34306 = (inst_34305__$1 == null);
var state_34324__$1 = (function (){var statearr_34328 = state_34324;
(statearr_34328[(7)] = inst_34305__$1);

return statearr_34328;
})();
if(cljs.core.truth_(inst_34306)){
var statearr_34329_34437 = state_34324__$1;
(statearr_34329_34437[(1)] = (5));

} else {
var statearr_34330_34438 = state_34324__$1;
(statearr_34330_34438[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34325 === (6))){
var inst_34305 = (state_34324[(7)]);
var inst_34310 = (state_34324[(8)]);
var inst_34310__$1 = cljs.core.async.chan.call(null,(1));
var inst_34311 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34312 = [inst_34305,inst_34310__$1];
var inst_34313 = (new cljs.core.PersistentVector(null,2,(5),inst_34311,inst_34312,null));
var state_34324__$1 = (function (){var statearr_34331 = state_34324;
(statearr_34331[(8)] = inst_34310__$1);

return statearr_34331;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34324__$1,(8),jobs,inst_34313);
} else {
if((state_val_34325 === (3))){
var inst_34322 = (state_34324[(2)]);
var state_34324__$1 = state_34324;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34324__$1,inst_34322);
} else {
if((state_val_34325 === (2))){
var state_34324__$1 = state_34324;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34324__$1,(4),from);
} else {
if((state_val_34325 === (9))){
var inst_34317 = (state_34324[(2)]);
var state_34324__$1 = (function (){var statearr_34332 = state_34324;
(statearr_34332[(9)] = inst_34317);

return statearr_34332;
})();
var statearr_34333_34439 = state_34324__$1;
(statearr_34333_34439[(2)] = null);

(statearr_34333_34439[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34325 === (5))){
var inst_34308 = cljs.core.async.close_BANG_.call(null,jobs);
var state_34324__$1 = state_34324;
var statearr_34334_34440 = state_34324__$1;
(statearr_34334_34440[(2)] = inst_34308);

(statearr_34334_34440[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34325 === (8))){
var inst_34310 = (state_34324[(8)]);
var inst_34315 = (state_34324[(2)]);
var state_34324__$1 = (function (){var statearr_34335 = state_34324;
(statearr_34335[(10)] = inst_34315);

return statearr_34335;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34324__$1,(9),results,inst_34310);
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
var cljs$core$async$pipeline_STAR__$_state_machine__33977__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33977__auto____0 = (function (){
var statearr_34336 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34336[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33977__auto__);

(statearr_34336[(1)] = (1));

return statearr_34336;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33977__auto____1 = (function (state_34324){
while(true){
var ret_value__33978__auto__ = (function (){try{while(true){
var result__33979__auto__ = switch__33976__auto__.call(null,state_34324);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33979__auto__;
}
break;
}
}catch (e34337){if((e34337 instanceof Object)){
var ex__33980__auto__ = e34337;
var statearr_34338_34441 = state_34324;
(statearr_34338_34441[(5)] = ex__33980__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34324);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34337;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33978__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34442 = state_34324;
state_34324 = G__34442;
continue;
} else {
return ret_value__33978__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33977__auto__ = function(state_34324){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33977__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33977__auto____1.call(this,state_34324);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33977__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33977__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33977__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33977__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33977__auto__;
})()
})();
var state__34073__auto__ = (function (){var statearr_34339 = f__34072__auto__.call(null);
(statearr_34339[(6)] = c__34071__auto___34434);

return statearr_34339;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34073__auto__);
}));


var c__34071__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__34072__auto__ = (function (){var switch__33976__auto__ = (function (state_34377){
var state_val_34378 = (state_34377[(1)]);
if((state_val_34378 === (7))){
var inst_34373 = (state_34377[(2)]);
var state_34377__$1 = state_34377;
var statearr_34379_34443 = state_34377__$1;
(statearr_34379_34443[(2)] = inst_34373);

(statearr_34379_34443[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34378 === (20))){
var state_34377__$1 = state_34377;
var statearr_34380_34444 = state_34377__$1;
(statearr_34380_34444[(2)] = null);

(statearr_34380_34444[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34378 === (1))){
var state_34377__$1 = state_34377;
var statearr_34381_34445 = state_34377__$1;
(statearr_34381_34445[(2)] = null);

(statearr_34381_34445[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34378 === (4))){
var inst_34342 = (state_34377[(7)]);
var inst_34342__$1 = (state_34377[(2)]);
var inst_34343 = (inst_34342__$1 == null);
var state_34377__$1 = (function (){var statearr_34382 = state_34377;
(statearr_34382[(7)] = inst_34342__$1);

return statearr_34382;
})();
if(cljs.core.truth_(inst_34343)){
var statearr_34383_34446 = state_34377__$1;
(statearr_34383_34446[(1)] = (5));

} else {
var statearr_34384_34447 = state_34377__$1;
(statearr_34384_34447[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34378 === (15))){
var inst_34355 = (state_34377[(8)]);
var state_34377__$1 = state_34377;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34377__$1,(18),to,inst_34355);
} else {
if((state_val_34378 === (21))){
var inst_34368 = (state_34377[(2)]);
var state_34377__$1 = state_34377;
var statearr_34385_34448 = state_34377__$1;
(statearr_34385_34448[(2)] = inst_34368);

(statearr_34385_34448[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34378 === (13))){
var inst_34370 = (state_34377[(2)]);
var state_34377__$1 = (function (){var statearr_34386 = state_34377;
(statearr_34386[(9)] = inst_34370);

return statearr_34386;
})();
var statearr_34387_34449 = state_34377__$1;
(statearr_34387_34449[(2)] = null);

(statearr_34387_34449[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34378 === (6))){
var inst_34342 = (state_34377[(7)]);
var state_34377__$1 = state_34377;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34377__$1,(11),inst_34342);
} else {
if((state_val_34378 === (17))){
var inst_34363 = (state_34377[(2)]);
var state_34377__$1 = state_34377;
if(cljs.core.truth_(inst_34363)){
var statearr_34388_34450 = state_34377__$1;
(statearr_34388_34450[(1)] = (19));

} else {
var statearr_34389_34451 = state_34377__$1;
(statearr_34389_34451[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34378 === (3))){
var inst_34375 = (state_34377[(2)]);
var state_34377__$1 = state_34377;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34377__$1,inst_34375);
} else {
if((state_val_34378 === (12))){
var inst_34352 = (state_34377[(10)]);
var state_34377__$1 = state_34377;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34377__$1,(14),inst_34352);
} else {
if((state_val_34378 === (2))){
var state_34377__$1 = state_34377;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34377__$1,(4),results);
} else {
if((state_val_34378 === (19))){
var state_34377__$1 = state_34377;
var statearr_34390_34452 = state_34377__$1;
(statearr_34390_34452[(2)] = null);

(statearr_34390_34452[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34378 === (11))){
var inst_34352 = (state_34377[(2)]);
var state_34377__$1 = (function (){var statearr_34391 = state_34377;
(statearr_34391[(10)] = inst_34352);

return statearr_34391;
})();
var statearr_34392_34453 = state_34377__$1;
(statearr_34392_34453[(2)] = null);

(statearr_34392_34453[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34378 === (9))){
var state_34377__$1 = state_34377;
var statearr_34393_34454 = state_34377__$1;
(statearr_34393_34454[(2)] = null);

(statearr_34393_34454[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34378 === (5))){
var state_34377__$1 = state_34377;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34394_34455 = state_34377__$1;
(statearr_34394_34455[(1)] = (8));

} else {
var statearr_34395_34456 = state_34377__$1;
(statearr_34395_34456[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34378 === (14))){
var inst_34355 = (state_34377[(8)]);
var inst_34355__$1 = (state_34377[(2)]);
var inst_34356 = (inst_34355__$1 == null);
var inst_34357 = cljs.core.not.call(null,inst_34356);
var state_34377__$1 = (function (){var statearr_34396 = state_34377;
(statearr_34396[(8)] = inst_34355__$1);

return statearr_34396;
})();
if(inst_34357){
var statearr_34397_34457 = state_34377__$1;
(statearr_34397_34457[(1)] = (15));

} else {
var statearr_34398_34458 = state_34377__$1;
(statearr_34398_34458[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34378 === (16))){
var state_34377__$1 = state_34377;
var statearr_34399_34459 = state_34377__$1;
(statearr_34399_34459[(2)] = false);

(statearr_34399_34459[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34378 === (10))){
var inst_34349 = (state_34377[(2)]);
var state_34377__$1 = state_34377;
var statearr_34400_34460 = state_34377__$1;
(statearr_34400_34460[(2)] = inst_34349);

(statearr_34400_34460[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34378 === (18))){
var inst_34360 = (state_34377[(2)]);
var state_34377__$1 = state_34377;
var statearr_34401_34461 = state_34377__$1;
(statearr_34401_34461[(2)] = inst_34360);

(statearr_34401_34461[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34378 === (8))){
var inst_34346 = cljs.core.async.close_BANG_.call(null,to);
var state_34377__$1 = state_34377;
var statearr_34402_34462 = state_34377__$1;
(statearr_34402_34462[(2)] = inst_34346);

(statearr_34402_34462[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__33977__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33977__auto____0 = (function (){
var statearr_34403 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34403[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33977__auto__);

(statearr_34403[(1)] = (1));

return statearr_34403;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33977__auto____1 = (function (state_34377){
while(true){
var ret_value__33978__auto__ = (function (){try{while(true){
var result__33979__auto__ = switch__33976__auto__.call(null,state_34377);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33979__auto__;
}
break;
}
}catch (e34404){if((e34404 instanceof Object)){
var ex__33980__auto__ = e34404;
var statearr_34405_34463 = state_34377;
(statearr_34405_34463[(5)] = ex__33980__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34377);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34404;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33978__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34464 = state_34377;
state_34377 = G__34464;
continue;
} else {
return ret_value__33978__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33977__auto__ = function(state_34377){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33977__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33977__auto____1.call(this,state_34377);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33977__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33977__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33977__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33977__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33977__auto__;
})()
})();
var state__34073__auto__ = (function (){var statearr_34406 = f__34072__auto__.call(null);
(statearr_34406[(6)] = c__34071__auto__);

return statearr_34406;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34073__auto__);
}));

return c__34071__auto__;
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
var G__34466 = arguments.length;
switch (G__34466) {
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
var G__34469 = arguments.length;
switch (G__34469) {
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
var G__34472 = arguments.length;
switch (G__34472) {
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
var c__34071__auto___34521 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__34072__auto__ = (function (){var switch__33976__auto__ = (function (state_34498){
var state_val_34499 = (state_34498[(1)]);
if((state_val_34499 === (7))){
var inst_34494 = (state_34498[(2)]);
var state_34498__$1 = state_34498;
var statearr_34500_34522 = state_34498__$1;
(statearr_34500_34522[(2)] = inst_34494);

(statearr_34500_34522[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34499 === (1))){
var state_34498__$1 = state_34498;
var statearr_34501_34523 = state_34498__$1;
(statearr_34501_34523[(2)] = null);

(statearr_34501_34523[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34499 === (4))){
var inst_34475 = (state_34498[(7)]);
var inst_34475__$1 = (state_34498[(2)]);
var inst_34476 = (inst_34475__$1 == null);
var state_34498__$1 = (function (){var statearr_34502 = state_34498;
(statearr_34502[(7)] = inst_34475__$1);

return statearr_34502;
})();
if(cljs.core.truth_(inst_34476)){
var statearr_34503_34524 = state_34498__$1;
(statearr_34503_34524[(1)] = (5));

} else {
var statearr_34504_34525 = state_34498__$1;
(statearr_34504_34525[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34499 === (13))){
var state_34498__$1 = state_34498;
var statearr_34505_34526 = state_34498__$1;
(statearr_34505_34526[(2)] = null);

(statearr_34505_34526[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34499 === (6))){
var inst_34475 = (state_34498[(7)]);
var inst_34481 = p.call(null,inst_34475);
var state_34498__$1 = state_34498;
if(cljs.core.truth_(inst_34481)){
var statearr_34506_34527 = state_34498__$1;
(statearr_34506_34527[(1)] = (9));

} else {
var statearr_34507_34528 = state_34498__$1;
(statearr_34507_34528[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34499 === (3))){
var inst_34496 = (state_34498[(2)]);
var state_34498__$1 = state_34498;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34498__$1,inst_34496);
} else {
if((state_val_34499 === (12))){
var state_34498__$1 = state_34498;
var statearr_34508_34529 = state_34498__$1;
(statearr_34508_34529[(2)] = null);

(statearr_34508_34529[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34499 === (2))){
var state_34498__$1 = state_34498;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34498__$1,(4),ch);
} else {
if((state_val_34499 === (11))){
var inst_34475 = (state_34498[(7)]);
var inst_34485 = (state_34498[(2)]);
var state_34498__$1 = state_34498;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34498__$1,(8),inst_34485,inst_34475);
} else {
if((state_val_34499 === (9))){
var state_34498__$1 = state_34498;
var statearr_34509_34530 = state_34498__$1;
(statearr_34509_34530[(2)] = tc);

(statearr_34509_34530[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34499 === (5))){
var inst_34478 = cljs.core.async.close_BANG_.call(null,tc);
var inst_34479 = cljs.core.async.close_BANG_.call(null,fc);
var state_34498__$1 = (function (){var statearr_34510 = state_34498;
(statearr_34510[(8)] = inst_34478);

return statearr_34510;
})();
var statearr_34511_34531 = state_34498__$1;
(statearr_34511_34531[(2)] = inst_34479);

(statearr_34511_34531[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34499 === (14))){
var inst_34492 = (state_34498[(2)]);
var state_34498__$1 = state_34498;
var statearr_34512_34532 = state_34498__$1;
(statearr_34512_34532[(2)] = inst_34492);

(statearr_34512_34532[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34499 === (10))){
var state_34498__$1 = state_34498;
var statearr_34513_34533 = state_34498__$1;
(statearr_34513_34533[(2)] = fc);

(statearr_34513_34533[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34499 === (8))){
var inst_34487 = (state_34498[(2)]);
var state_34498__$1 = state_34498;
if(cljs.core.truth_(inst_34487)){
var statearr_34514_34534 = state_34498__$1;
(statearr_34514_34534[(1)] = (12));

} else {
var statearr_34515_34535 = state_34498__$1;
(statearr_34515_34535[(1)] = (13));

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
var cljs$core$async$state_machine__33977__auto__ = null;
var cljs$core$async$state_machine__33977__auto____0 = (function (){
var statearr_34516 = [null,null,null,null,null,null,null,null,null];
(statearr_34516[(0)] = cljs$core$async$state_machine__33977__auto__);

(statearr_34516[(1)] = (1));

return statearr_34516;
});
var cljs$core$async$state_machine__33977__auto____1 = (function (state_34498){
while(true){
var ret_value__33978__auto__ = (function (){try{while(true){
var result__33979__auto__ = switch__33976__auto__.call(null,state_34498);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33979__auto__;
}
break;
}
}catch (e34517){if((e34517 instanceof Object)){
var ex__33980__auto__ = e34517;
var statearr_34518_34536 = state_34498;
(statearr_34518_34536[(5)] = ex__33980__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34498);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34517;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33978__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34537 = state_34498;
state_34498 = G__34537;
continue;
} else {
return ret_value__33978__auto__;
}
break;
}
});
cljs$core$async$state_machine__33977__auto__ = function(state_34498){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33977__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33977__auto____1.call(this,state_34498);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33977__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33977__auto____0;
cljs$core$async$state_machine__33977__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33977__auto____1;
return cljs$core$async$state_machine__33977__auto__;
})()
})();
var state__34073__auto__ = (function (){var statearr_34519 = f__34072__auto__.call(null);
(statearr_34519[(6)] = c__34071__auto___34521);

return statearr_34519;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34073__auto__);
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
var c__34071__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__34072__auto__ = (function (){var switch__33976__auto__ = (function (state_34558){
var state_val_34559 = (state_34558[(1)]);
if((state_val_34559 === (7))){
var inst_34554 = (state_34558[(2)]);
var state_34558__$1 = state_34558;
var statearr_34560_34578 = state_34558__$1;
(statearr_34560_34578[(2)] = inst_34554);

(statearr_34560_34578[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34559 === (1))){
var inst_34538 = init;
var state_34558__$1 = (function (){var statearr_34561 = state_34558;
(statearr_34561[(7)] = inst_34538);

return statearr_34561;
})();
var statearr_34562_34579 = state_34558__$1;
(statearr_34562_34579[(2)] = null);

(statearr_34562_34579[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34559 === (4))){
var inst_34541 = (state_34558[(8)]);
var inst_34541__$1 = (state_34558[(2)]);
var inst_34542 = (inst_34541__$1 == null);
var state_34558__$1 = (function (){var statearr_34563 = state_34558;
(statearr_34563[(8)] = inst_34541__$1);

return statearr_34563;
})();
if(cljs.core.truth_(inst_34542)){
var statearr_34564_34580 = state_34558__$1;
(statearr_34564_34580[(1)] = (5));

} else {
var statearr_34565_34581 = state_34558__$1;
(statearr_34565_34581[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34559 === (6))){
var inst_34538 = (state_34558[(7)]);
var inst_34545 = (state_34558[(9)]);
var inst_34541 = (state_34558[(8)]);
var inst_34545__$1 = f.call(null,inst_34538,inst_34541);
var inst_34546 = cljs.core.reduced_QMARK_.call(null,inst_34545__$1);
var state_34558__$1 = (function (){var statearr_34566 = state_34558;
(statearr_34566[(9)] = inst_34545__$1);

return statearr_34566;
})();
if(inst_34546){
var statearr_34567_34582 = state_34558__$1;
(statearr_34567_34582[(1)] = (8));

} else {
var statearr_34568_34583 = state_34558__$1;
(statearr_34568_34583[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34559 === (3))){
var inst_34556 = (state_34558[(2)]);
var state_34558__$1 = state_34558;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34558__$1,inst_34556);
} else {
if((state_val_34559 === (2))){
var state_34558__$1 = state_34558;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34558__$1,(4),ch);
} else {
if((state_val_34559 === (9))){
var inst_34545 = (state_34558[(9)]);
var inst_34538 = inst_34545;
var state_34558__$1 = (function (){var statearr_34569 = state_34558;
(statearr_34569[(7)] = inst_34538);

return statearr_34569;
})();
var statearr_34570_34584 = state_34558__$1;
(statearr_34570_34584[(2)] = null);

(statearr_34570_34584[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34559 === (5))){
var inst_34538 = (state_34558[(7)]);
var state_34558__$1 = state_34558;
var statearr_34571_34585 = state_34558__$1;
(statearr_34571_34585[(2)] = inst_34538);

(statearr_34571_34585[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34559 === (10))){
var inst_34552 = (state_34558[(2)]);
var state_34558__$1 = state_34558;
var statearr_34572_34586 = state_34558__$1;
(statearr_34572_34586[(2)] = inst_34552);

(statearr_34572_34586[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34559 === (8))){
var inst_34545 = (state_34558[(9)]);
var inst_34548 = cljs.core.deref.call(null,inst_34545);
var state_34558__$1 = state_34558;
var statearr_34573_34587 = state_34558__$1;
(statearr_34573_34587[(2)] = inst_34548);

(statearr_34573_34587[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__33977__auto__ = null;
var cljs$core$async$reduce_$_state_machine__33977__auto____0 = (function (){
var statearr_34574 = [null,null,null,null,null,null,null,null,null,null];
(statearr_34574[(0)] = cljs$core$async$reduce_$_state_machine__33977__auto__);

(statearr_34574[(1)] = (1));

return statearr_34574;
});
var cljs$core$async$reduce_$_state_machine__33977__auto____1 = (function (state_34558){
while(true){
var ret_value__33978__auto__ = (function (){try{while(true){
var result__33979__auto__ = switch__33976__auto__.call(null,state_34558);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33979__auto__;
}
break;
}
}catch (e34575){if((e34575 instanceof Object)){
var ex__33980__auto__ = e34575;
var statearr_34576_34588 = state_34558;
(statearr_34576_34588[(5)] = ex__33980__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34558);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34575;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33978__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34589 = state_34558;
state_34558 = G__34589;
continue;
} else {
return ret_value__33978__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__33977__auto__ = function(state_34558){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__33977__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__33977__auto____1.call(this,state_34558);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__33977__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__33977__auto____0;
cljs$core$async$reduce_$_state_machine__33977__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__33977__auto____1;
return cljs$core$async$reduce_$_state_machine__33977__auto__;
})()
})();
var state__34073__auto__ = (function (){var statearr_34577 = f__34072__auto__.call(null);
(statearr_34577[(6)] = c__34071__auto__);

return statearr_34577;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34073__auto__);
}));

return c__34071__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__34071__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__34072__auto__ = (function (){var switch__33976__auto__ = (function (state_34595){
var state_val_34596 = (state_34595[(1)]);
if((state_val_34596 === (1))){
var inst_34590 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_34595__$1 = state_34595;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34595__$1,(2),inst_34590);
} else {
if((state_val_34596 === (2))){
var inst_34592 = (state_34595[(2)]);
var inst_34593 = f__$1.call(null,inst_34592);
var state_34595__$1 = state_34595;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34595__$1,inst_34593);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__33977__auto__ = null;
var cljs$core$async$transduce_$_state_machine__33977__auto____0 = (function (){
var statearr_34597 = [null,null,null,null,null,null,null];
(statearr_34597[(0)] = cljs$core$async$transduce_$_state_machine__33977__auto__);

(statearr_34597[(1)] = (1));

return statearr_34597;
});
var cljs$core$async$transduce_$_state_machine__33977__auto____1 = (function (state_34595){
while(true){
var ret_value__33978__auto__ = (function (){try{while(true){
var result__33979__auto__ = switch__33976__auto__.call(null,state_34595);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33979__auto__;
}
break;
}
}catch (e34598){if((e34598 instanceof Object)){
var ex__33980__auto__ = e34598;
var statearr_34599_34601 = state_34595;
(statearr_34599_34601[(5)] = ex__33980__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34595);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34598;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33978__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34602 = state_34595;
state_34595 = G__34602;
continue;
} else {
return ret_value__33978__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__33977__auto__ = function(state_34595){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__33977__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__33977__auto____1.call(this,state_34595);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__33977__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__33977__auto____0;
cljs$core$async$transduce_$_state_machine__33977__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__33977__auto____1;
return cljs$core$async$transduce_$_state_machine__33977__auto__;
})()
})();
var state__34073__auto__ = (function (){var statearr_34600 = f__34072__auto__.call(null);
(statearr_34600[(6)] = c__34071__auto__);

return statearr_34600;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34073__auto__);
}));

return c__34071__auto__;
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
var G__34604 = arguments.length;
switch (G__34604) {
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
var c__34071__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__34072__auto__ = (function (){var switch__33976__auto__ = (function (state_34629){
var state_val_34630 = (state_34629[(1)]);
if((state_val_34630 === (7))){
var inst_34611 = (state_34629[(2)]);
var state_34629__$1 = state_34629;
var statearr_34631_34652 = state_34629__$1;
(statearr_34631_34652[(2)] = inst_34611);

(statearr_34631_34652[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34630 === (1))){
var inst_34605 = cljs.core.seq.call(null,coll);
var inst_34606 = inst_34605;
var state_34629__$1 = (function (){var statearr_34632 = state_34629;
(statearr_34632[(7)] = inst_34606);

return statearr_34632;
})();
var statearr_34633_34653 = state_34629__$1;
(statearr_34633_34653[(2)] = null);

(statearr_34633_34653[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34630 === (4))){
var inst_34606 = (state_34629[(7)]);
var inst_34609 = cljs.core.first.call(null,inst_34606);
var state_34629__$1 = state_34629;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34629__$1,(7),ch,inst_34609);
} else {
if((state_val_34630 === (13))){
var inst_34623 = (state_34629[(2)]);
var state_34629__$1 = state_34629;
var statearr_34634_34654 = state_34629__$1;
(statearr_34634_34654[(2)] = inst_34623);

(statearr_34634_34654[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34630 === (6))){
var inst_34614 = (state_34629[(2)]);
var state_34629__$1 = state_34629;
if(cljs.core.truth_(inst_34614)){
var statearr_34635_34655 = state_34629__$1;
(statearr_34635_34655[(1)] = (8));

} else {
var statearr_34636_34656 = state_34629__$1;
(statearr_34636_34656[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34630 === (3))){
var inst_34627 = (state_34629[(2)]);
var state_34629__$1 = state_34629;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34629__$1,inst_34627);
} else {
if((state_val_34630 === (12))){
var state_34629__$1 = state_34629;
var statearr_34637_34657 = state_34629__$1;
(statearr_34637_34657[(2)] = null);

(statearr_34637_34657[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34630 === (2))){
var inst_34606 = (state_34629[(7)]);
var state_34629__$1 = state_34629;
if(cljs.core.truth_(inst_34606)){
var statearr_34638_34658 = state_34629__$1;
(statearr_34638_34658[(1)] = (4));

} else {
var statearr_34639_34659 = state_34629__$1;
(statearr_34639_34659[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34630 === (11))){
var inst_34620 = cljs.core.async.close_BANG_.call(null,ch);
var state_34629__$1 = state_34629;
var statearr_34640_34660 = state_34629__$1;
(statearr_34640_34660[(2)] = inst_34620);

(statearr_34640_34660[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34630 === (9))){
var state_34629__$1 = state_34629;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34641_34661 = state_34629__$1;
(statearr_34641_34661[(1)] = (11));

} else {
var statearr_34642_34662 = state_34629__$1;
(statearr_34642_34662[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34630 === (5))){
var inst_34606 = (state_34629[(7)]);
var state_34629__$1 = state_34629;
var statearr_34643_34663 = state_34629__$1;
(statearr_34643_34663[(2)] = inst_34606);

(statearr_34643_34663[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34630 === (10))){
var inst_34625 = (state_34629[(2)]);
var state_34629__$1 = state_34629;
var statearr_34644_34664 = state_34629__$1;
(statearr_34644_34664[(2)] = inst_34625);

(statearr_34644_34664[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34630 === (8))){
var inst_34606 = (state_34629[(7)]);
var inst_34616 = cljs.core.next.call(null,inst_34606);
var inst_34606__$1 = inst_34616;
var state_34629__$1 = (function (){var statearr_34645 = state_34629;
(statearr_34645[(7)] = inst_34606__$1);

return statearr_34645;
})();
var statearr_34646_34665 = state_34629__$1;
(statearr_34646_34665[(2)] = null);

(statearr_34646_34665[(1)] = (2));


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
var cljs$core$async$state_machine__33977__auto__ = null;
var cljs$core$async$state_machine__33977__auto____0 = (function (){
var statearr_34647 = [null,null,null,null,null,null,null,null];
(statearr_34647[(0)] = cljs$core$async$state_machine__33977__auto__);

(statearr_34647[(1)] = (1));

return statearr_34647;
});
var cljs$core$async$state_machine__33977__auto____1 = (function (state_34629){
while(true){
var ret_value__33978__auto__ = (function (){try{while(true){
var result__33979__auto__ = switch__33976__auto__.call(null,state_34629);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33979__auto__;
}
break;
}
}catch (e34648){if((e34648 instanceof Object)){
var ex__33980__auto__ = e34648;
var statearr_34649_34666 = state_34629;
(statearr_34649_34666[(5)] = ex__33980__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34629);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34648;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33978__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34667 = state_34629;
state_34629 = G__34667;
continue;
} else {
return ret_value__33978__auto__;
}
break;
}
});
cljs$core$async$state_machine__33977__auto__ = function(state_34629){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33977__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33977__auto____1.call(this,state_34629);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33977__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33977__auto____0;
cljs$core$async$state_machine__33977__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33977__auto____1;
return cljs$core$async$state_machine__33977__auto__;
})()
})();
var state__34073__auto__ = (function (){var statearr_34650 = f__34072__auto__.call(null);
(statearr_34650[(6)] = c__34071__auto__);

return statearr_34650;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34073__auto__);
}));

return c__34071__auto__;
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

var cljs$core$async$Mux$muxch_STAR_$dyn_34668 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_34668.call(null,_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_34669 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_34669.call(null,m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_34670 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_34670.call(null,m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_34671 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_34671.call(null,m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34672 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34672 = (function (ch,cs,meta34673){
this.ch = ch;
this.cs = cs;
this.meta34673 = meta34673;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34672.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34674,meta34673__$1){
var self__ = this;
var _34674__$1 = this;
return (new cljs.core.async.t_cljs$core$async34672(self__.ch,self__.cs,meta34673__$1));
}));

(cljs.core.async.t_cljs$core$async34672.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34674){
var self__ = this;
var _34674__$1 = this;
return self__.meta34673;
}));

(cljs.core.async.t_cljs$core$async34672.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34672.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async34672.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34672.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async34672.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async34672.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async34672.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta34673","meta34673",633313372,null)], null);
}));

(cljs.core.async.t_cljs$core$async34672.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34672.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34672");

(cljs.core.async.t_cljs$core$async34672.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async34672");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34672.
 */
cljs.core.async.__GT_t_cljs$core$async34672 = (function cljs$core$async$mult_$___GT_t_cljs$core$async34672(ch__$1,cs__$1,meta34673){
return (new cljs.core.async.t_cljs$core$async34672(ch__$1,cs__$1,meta34673));
});

}

return (new cljs.core.async.t_cljs$core$async34672(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__34071__auto___34894 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__34072__auto__ = (function (){var switch__33976__auto__ = (function (state_34809){
var state_val_34810 = (state_34809[(1)]);
if((state_val_34810 === (7))){
var inst_34805 = (state_34809[(2)]);
var state_34809__$1 = state_34809;
var statearr_34811_34895 = state_34809__$1;
(statearr_34811_34895[(2)] = inst_34805);

(statearr_34811_34895[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34810 === (20))){
var inst_34708 = (state_34809[(7)]);
var inst_34720 = cljs.core.first.call(null,inst_34708);
var inst_34721 = cljs.core.nth.call(null,inst_34720,(0),null);
var inst_34722 = cljs.core.nth.call(null,inst_34720,(1),null);
var state_34809__$1 = (function (){var statearr_34812 = state_34809;
(statearr_34812[(8)] = inst_34721);

return statearr_34812;
})();
if(cljs.core.truth_(inst_34722)){
var statearr_34813_34896 = state_34809__$1;
(statearr_34813_34896[(1)] = (22));

} else {
var statearr_34814_34897 = state_34809__$1;
(statearr_34814_34897[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34810 === (27))){
var inst_34677 = (state_34809[(9)]);
var inst_34750 = (state_34809[(10)]);
var inst_34757 = (state_34809[(11)]);
var inst_34752 = (state_34809[(12)]);
var inst_34757__$1 = cljs.core._nth.call(null,inst_34750,inst_34752);
var inst_34758 = cljs.core.async.put_BANG_.call(null,inst_34757__$1,inst_34677,done);
var state_34809__$1 = (function (){var statearr_34815 = state_34809;
(statearr_34815[(11)] = inst_34757__$1);

return statearr_34815;
})();
if(cljs.core.truth_(inst_34758)){
var statearr_34816_34898 = state_34809__$1;
(statearr_34816_34898[(1)] = (30));

} else {
var statearr_34817_34899 = state_34809__$1;
(statearr_34817_34899[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34810 === (1))){
var state_34809__$1 = state_34809;
var statearr_34818_34900 = state_34809__$1;
(statearr_34818_34900[(2)] = null);

(statearr_34818_34900[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34810 === (24))){
var inst_34708 = (state_34809[(7)]);
var inst_34727 = (state_34809[(2)]);
var inst_34728 = cljs.core.next.call(null,inst_34708);
var inst_34686 = inst_34728;
var inst_34687 = null;
var inst_34688 = (0);
var inst_34689 = (0);
var state_34809__$1 = (function (){var statearr_34819 = state_34809;
(statearr_34819[(13)] = inst_34727);

(statearr_34819[(14)] = inst_34689);

(statearr_34819[(15)] = inst_34687);

(statearr_34819[(16)] = inst_34686);

(statearr_34819[(17)] = inst_34688);

return statearr_34819;
})();
var statearr_34820_34901 = state_34809__$1;
(statearr_34820_34901[(2)] = null);

(statearr_34820_34901[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34810 === (39))){
var state_34809__$1 = state_34809;
var statearr_34824_34902 = state_34809__$1;
(statearr_34824_34902[(2)] = null);

(statearr_34824_34902[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34810 === (4))){
var inst_34677 = (state_34809[(9)]);
var inst_34677__$1 = (state_34809[(2)]);
var inst_34678 = (inst_34677__$1 == null);
var state_34809__$1 = (function (){var statearr_34825 = state_34809;
(statearr_34825[(9)] = inst_34677__$1);

return statearr_34825;
})();
if(cljs.core.truth_(inst_34678)){
var statearr_34826_34903 = state_34809__$1;
(statearr_34826_34903[(1)] = (5));

} else {
var statearr_34827_34904 = state_34809__$1;
(statearr_34827_34904[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34810 === (15))){
var inst_34689 = (state_34809[(14)]);
var inst_34687 = (state_34809[(15)]);
var inst_34686 = (state_34809[(16)]);
var inst_34688 = (state_34809[(17)]);
var inst_34704 = (state_34809[(2)]);
var inst_34705 = (inst_34689 + (1));
var tmp34821 = inst_34687;
var tmp34822 = inst_34686;
var tmp34823 = inst_34688;
var inst_34686__$1 = tmp34822;
var inst_34687__$1 = tmp34821;
var inst_34688__$1 = tmp34823;
var inst_34689__$1 = inst_34705;
var state_34809__$1 = (function (){var statearr_34828 = state_34809;
(statearr_34828[(18)] = inst_34704);

(statearr_34828[(14)] = inst_34689__$1);

(statearr_34828[(15)] = inst_34687__$1);

(statearr_34828[(16)] = inst_34686__$1);

(statearr_34828[(17)] = inst_34688__$1);

return statearr_34828;
})();
var statearr_34829_34905 = state_34809__$1;
(statearr_34829_34905[(2)] = null);

(statearr_34829_34905[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34810 === (21))){
var inst_34731 = (state_34809[(2)]);
var state_34809__$1 = state_34809;
var statearr_34833_34906 = state_34809__$1;
(statearr_34833_34906[(2)] = inst_34731);

(statearr_34833_34906[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34810 === (31))){
var inst_34757 = (state_34809[(11)]);
var inst_34761 = done.call(null,null);
var inst_34762 = cljs.core.async.untap_STAR_.call(null,m,inst_34757);
var state_34809__$1 = (function (){var statearr_34834 = state_34809;
(statearr_34834[(19)] = inst_34761);

return statearr_34834;
})();
var statearr_34835_34907 = state_34809__$1;
(statearr_34835_34907[(2)] = inst_34762);

(statearr_34835_34907[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34810 === (32))){
var inst_34751 = (state_34809[(20)]);
var inst_34750 = (state_34809[(10)]);
var inst_34752 = (state_34809[(12)]);
var inst_34749 = (state_34809[(21)]);
var inst_34764 = (state_34809[(2)]);
var inst_34765 = (inst_34752 + (1));
var tmp34830 = inst_34751;
var tmp34831 = inst_34750;
var tmp34832 = inst_34749;
var inst_34749__$1 = tmp34832;
var inst_34750__$1 = tmp34831;
var inst_34751__$1 = tmp34830;
var inst_34752__$1 = inst_34765;
var state_34809__$1 = (function (){var statearr_34836 = state_34809;
(statearr_34836[(20)] = inst_34751__$1);

(statearr_34836[(10)] = inst_34750__$1);

(statearr_34836[(22)] = inst_34764);

(statearr_34836[(12)] = inst_34752__$1);

(statearr_34836[(21)] = inst_34749__$1);

return statearr_34836;
})();
var statearr_34837_34908 = state_34809__$1;
(statearr_34837_34908[(2)] = null);

(statearr_34837_34908[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34810 === (40))){
var inst_34777 = (state_34809[(23)]);
var inst_34781 = done.call(null,null);
var inst_34782 = cljs.core.async.untap_STAR_.call(null,m,inst_34777);
var state_34809__$1 = (function (){var statearr_34838 = state_34809;
(statearr_34838[(24)] = inst_34781);

return statearr_34838;
})();
var statearr_34839_34909 = state_34809__$1;
(statearr_34839_34909[(2)] = inst_34782);

(statearr_34839_34909[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34810 === (33))){
var inst_34768 = (state_34809[(25)]);
var inst_34770 = cljs.core.chunked_seq_QMARK_.call(null,inst_34768);
var state_34809__$1 = state_34809;
if(inst_34770){
var statearr_34840_34910 = state_34809__$1;
(statearr_34840_34910[(1)] = (36));

} else {
var statearr_34841_34911 = state_34809__$1;
(statearr_34841_34911[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34810 === (13))){
var inst_34698 = (state_34809[(26)]);
var inst_34701 = cljs.core.async.close_BANG_.call(null,inst_34698);
var state_34809__$1 = state_34809;
var statearr_34842_34912 = state_34809__$1;
(statearr_34842_34912[(2)] = inst_34701);

(statearr_34842_34912[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34810 === (22))){
var inst_34721 = (state_34809[(8)]);
var inst_34724 = cljs.core.async.close_BANG_.call(null,inst_34721);
var state_34809__$1 = state_34809;
var statearr_34843_34913 = state_34809__$1;
(statearr_34843_34913[(2)] = inst_34724);

(statearr_34843_34913[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34810 === (36))){
var inst_34768 = (state_34809[(25)]);
var inst_34772 = cljs.core.chunk_first.call(null,inst_34768);
var inst_34773 = cljs.core.chunk_rest.call(null,inst_34768);
var inst_34774 = cljs.core.count.call(null,inst_34772);
var inst_34749 = inst_34773;
var inst_34750 = inst_34772;
var inst_34751 = inst_34774;
var inst_34752 = (0);
var state_34809__$1 = (function (){var statearr_34844 = state_34809;
(statearr_34844[(20)] = inst_34751);

(statearr_34844[(10)] = inst_34750);

(statearr_34844[(12)] = inst_34752);

(statearr_34844[(21)] = inst_34749);

return statearr_34844;
})();
var statearr_34845_34914 = state_34809__$1;
(statearr_34845_34914[(2)] = null);

(statearr_34845_34914[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34810 === (41))){
var inst_34768 = (state_34809[(25)]);
var inst_34784 = (state_34809[(2)]);
var inst_34785 = cljs.core.next.call(null,inst_34768);
var inst_34749 = inst_34785;
var inst_34750 = null;
var inst_34751 = (0);
var inst_34752 = (0);
var state_34809__$1 = (function (){var statearr_34846 = state_34809;
(statearr_34846[(20)] = inst_34751);

(statearr_34846[(27)] = inst_34784);

(statearr_34846[(10)] = inst_34750);

(statearr_34846[(12)] = inst_34752);

(statearr_34846[(21)] = inst_34749);

return statearr_34846;
})();
var statearr_34847_34915 = state_34809__$1;
(statearr_34847_34915[(2)] = null);

(statearr_34847_34915[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34810 === (43))){
var state_34809__$1 = state_34809;
var statearr_34848_34916 = state_34809__$1;
(statearr_34848_34916[(2)] = null);

(statearr_34848_34916[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34810 === (29))){
var inst_34793 = (state_34809[(2)]);
var state_34809__$1 = state_34809;
var statearr_34849_34917 = state_34809__$1;
(statearr_34849_34917[(2)] = inst_34793);

(statearr_34849_34917[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34810 === (44))){
var inst_34802 = (state_34809[(2)]);
var state_34809__$1 = (function (){var statearr_34850 = state_34809;
(statearr_34850[(28)] = inst_34802);

return statearr_34850;
})();
var statearr_34851_34918 = state_34809__$1;
(statearr_34851_34918[(2)] = null);

(statearr_34851_34918[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34810 === (6))){
var inst_34741 = (state_34809[(29)]);
var inst_34740 = cljs.core.deref.call(null,cs);
var inst_34741__$1 = cljs.core.keys.call(null,inst_34740);
var inst_34742 = cljs.core.count.call(null,inst_34741__$1);
var inst_34743 = cljs.core.reset_BANG_.call(null,dctr,inst_34742);
var inst_34748 = cljs.core.seq.call(null,inst_34741__$1);
var inst_34749 = inst_34748;
var inst_34750 = null;
var inst_34751 = (0);
var inst_34752 = (0);
var state_34809__$1 = (function (){var statearr_34852 = state_34809;
(statearr_34852[(20)] = inst_34751);

(statearr_34852[(10)] = inst_34750);

(statearr_34852[(29)] = inst_34741__$1);

(statearr_34852[(30)] = inst_34743);

(statearr_34852[(12)] = inst_34752);

(statearr_34852[(21)] = inst_34749);

return statearr_34852;
})();
var statearr_34853_34919 = state_34809__$1;
(statearr_34853_34919[(2)] = null);

(statearr_34853_34919[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34810 === (28))){
var inst_34768 = (state_34809[(25)]);
var inst_34749 = (state_34809[(21)]);
var inst_34768__$1 = cljs.core.seq.call(null,inst_34749);
var state_34809__$1 = (function (){var statearr_34854 = state_34809;
(statearr_34854[(25)] = inst_34768__$1);

return statearr_34854;
})();
if(inst_34768__$1){
var statearr_34855_34920 = state_34809__$1;
(statearr_34855_34920[(1)] = (33));

} else {
var statearr_34856_34921 = state_34809__$1;
(statearr_34856_34921[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34810 === (25))){
var inst_34751 = (state_34809[(20)]);
var inst_34752 = (state_34809[(12)]);
var inst_34754 = (inst_34752 < inst_34751);
var inst_34755 = inst_34754;
var state_34809__$1 = state_34809;
if(cljs.core.truth_(inst_34755)){
var statearr_34857_34922 = state_34809__$1;
(statearr_34857_34922[(1)] = (27));

} else {
var statearr_34858_34923 = state_34809__$1;
(statearr_34858_34923[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34810 === (34))){
var state_34809__$1 = state_34809;
var statearr_34859_34924 = state_34809__$1;
(statearr_34859_34924[(2)] = null);

(statearr_34859_34924[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34810 === (17))){
var state_34809__$1 = state_34809;
var statearr_34860_34925 = state_34809__$1;
(statearr_34860_34925[(2)] = null);

(statearr_34860_34925[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34810 === (3))){
var inst_34807 = (state_34809[(2)]);
var state_34809__$1 = state_34809;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34809__$1,inst_34807);
} else {
if((state_val_34810 === (12))){
var inst_34736 = (state_34809[(2)]);
var state_34809__$1 = state_34809;
var statearr_34861_34926 = state_34809__$1;
(statearr_34861_34926[(2)] = inst_34736);

(statearr_34861_34926[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34810 === (2))){
var state_34809__$1 = state_34809;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34809__$1,(4),ch);
} else {
if((state_val_34810 === (23))){
var state_34809__$1 = state_34809;
var statearr_34862_34927 = state_34809__$1;
(statearr_34862_34927[(2)] = null);

(statearr_34862_34927[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34810 === (35))){
var inst_34791 = (state_34809[(2)]);
var state_34809__$1 = state_34809;
var statearr_34863_34928 = state_34809__$1;
(statearr_34863_34928[(2)] = inst_34791);

(statearr_34863_34928[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34810 === (19))){
var inst_34708 = (state_34809[(7)]);
var inst_34712 = cljs.core.chunk_first.call(null,inst_34708);
var inst_34713 = cljs.core.chunk_rest.call(null,inst_34708);
var inst_34714 = cljs.core.count.call(null,inst_34712);
var inst_34686 = inst_34713;
var inst_34687 = inst_34712;
var inst_34688 = inst_34714;
var inst_34689 = (0);
var state_34809__$1 = (function (){var statearr_34864 = state_34809;
(statearr_34864[(14)] = inst_34689);

(statearr_34864[(15)] = inst_34687);

(statearr_34864[(16)] = inst_34686);

(statearr_34864[(17)] = inst_34688);

return statearr_34864;
})();
var statearr_34865_34929 = state_34809__$1;
(statearr_34865_34929[(2)] = null);

(statearr_34865_34929[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34810 === (11))){
var inst_34708 = (state_34809[(7)]);
var inst_34686 = (state_34809[(16)]);
var inst_34708__$1 = cljs.core.seq.call(null,inst_34686);
var state_34809__$1 = (function (){var statearr_34866 = state_34809;
(statearr_34866[(7)] = inst_34708__$1);

return statearr_34866;
})();
if(inst_34708__$1){
var statearr_34867_34930 = state_34809__$1;
(statearr_34867_34930[(1)] = (16));

} else {
var statearr_34868_34931 = state_34809__$1;
(statearr_34868_34931[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34810 === (9))){
var inst_34738 = (state_34809[(2)]);
var state_34809__$1 = state_34809;
var statearr_34869_34932 = state_34809__$1;
(statearr_34869_34932[(2)] = inst_34738);

(statearr_34869_34932[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34810 === (5))){
var inst_34684 = cljs.core.deref.call(null,cs);
var inst_34685 = cljs.core.seq.call(null,inst_34684);
var inst_34686 = inst_34685;
var inst_34687 = null;
var inst_34688 = (0);
var inst_34689 = (0);
var state_34809__$1 = (function (){var statearr_34870 = state_34809;
(statearr_34870[(14)] = inst_34689);

(statearr_34870[(15)] = inst_34687);

(statearr_34870[(16)] = inst_34686);

(statearr_34870[(17)] = inst_34688);

return statearr_34870;
})();
var statearr_34871_34933 = state_34809__$1;
(statearr_34871_34933[(2)] = null);

(statearr_34871_34933[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34810 === (14))){
var state_34809__$1 = state_34809;
var statearr_34872_34934 = state_34809__$1;
(statearr_34872_34934[(2)] = null);

(statearr_34872_34934[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34810 === (45))){
var inst_34799 = (state_34809[(2)]);
var state_34809__$1 = state_34809;
var statearr_34873_34935 = state_34809__$1;
(statearr_34873_34935[(2)] = inst_34799);

(statearr_34873_34935[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34810 === (26))){
var inst_34741 = (state_34809[(29)]);
var inst_34795 = (state_34809[(2)]);
var inst_34796 = cljs.core.seq.call(null,inst_34741);
var state_34809__$1 = (function (){var statearr_34874 = state_34809;
(statearr_34874[(31)] = inst_34795);

return statearr_34874;
})();
if(inst_34796){
var statearr_34875_34936 = state_34809__$1;
(statearr_34875_34936[(1)] = (42));

} else {
var statearr_34876_34937 = state_34809__$1;
(statearr_34876_34937[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34810 === (16))){
var inst_34708 = (state_34809[(7)]);
var inst_34710 = cljs.core.chunked_seq_QMARK_.call(null,inst_34708);
var state_34809__$1 = state_34809;
if(inst_34710){
var statearr_34877_34938 = state_34809__$1;
(statearr_34877_34938[(1)] = (19));

} else {
var statearr_34878_34939 = state_34809__$1;
(statearr_34878_34939[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34810 === (38))){
var inst_34788 = (state_34809[(2)]);
var state_34809__$1 = state_34809;
var statearr_34879_34940 = state_34809__$1;
(statearr_34879_34940[(2)] = inst_34788);

(statearr_34879_34940[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34810 === (30))){
var state_34809__$1 = state_34809;
var statearr_34880_34941 = state_34809__$1;
(statearr_34880_34941[(2)] = null);

(statearr_34880_34941[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34810 === (10))){
var inst_34689 = (state_34809[(14)]);
var inst_34687 = (state_34809[(15)]);
var inst_34697 = cljs.core._nth.call(null,inst_34687,inst_34689);
var inst_34698 = cljs.core.nth.call(null,inst_34697,(0),null);
var inst_34699 = cljs.core.nth.call(null,inst_34697,(1),null);
var state_34809__$1 = (function (){var statearr_34881 = state_34809;
(statearr_34881[(26)] = inst_34698);

return statearr_34881;
})();
if(cljs.core.truth_(inst_34699)){
var statearr_34882_34942 = state_34809__$1;
(statearr_34882_34942[(1)] = (13));

} else {
var statearr_34883_34943 = state_34809__$1;
(statearr_34883_34943[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34810 === (18))){
var inst_34734 = (state_34809[(2)]);
var state_34809__$1 = state_34809;
var statearr_34884_34944 = state_34809__$1;
(statearr_34884_34944[(2)] = inst_34734);

(statearr_34884_34944[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34810 === (42))){
var state_34809__$1 = state_34809;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34809__$1,(45),dchan);
} else {
if((state_val_34810 === (37))){
var inst_34677 = (state_34809[(9)]);
var inst_34768 = (state_34809[(25)]);
var inst_34777 = (state_34809[(23)]);
var inst_34777__$1 = cljs.core.first.call(null,inst_34768);
var inst_34778 = cljs.core.async.put_BANG_.call(null,inst_34777__$1,inst_34677,done);
var state_34809__$1 = (function (){var statearr_34885 = state_34809;
(statearr_34885[(23)] = inst_34777__$1);

return statearr_34885;
})();
if(cljs.core.truth_(inst_34778)){
var statearr_34886_34945 = state_34809__$1;
(statearr_34886_34945[(1)] = (39));

} else {
var statearr_34887_34946 = state_34809__$1;
(statearr_34887_34946[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34810 === (8))){
var inst_34689 = (state_34809[(14)]);
var inst_34688 = (state_34809[(17)]);
var inst_34691 = (inst_34689 < inst_34688);
var inst_34692 = inst_34691;
var state_34809__$1 = state_34809;
if(cljs.core.truth_(inst_34692)){
var statearr_34888_34947 = state_34809__$1;
(statearr_34888_34947[(1)] = (10));

} else {
var statearr_34889_34948 = state_34809__$1;
(statearr_34889_34948[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__33977__auto__ = null;
var cljs$core$async$mult_$_state_machine__33977__auto____0 = (function (){
var statearr_34890 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34890[(0)] = cljs$core$async$mult_$_state_machine__33977__auto__);

(statearr_34890[(1)] = (1));

return statearr_34890;
});
var cljs$core$async$mult_$_state_machine__33977__auto____1 = (function (state_34809){
while(true){
var ret_value__33978__auto__ = (function (){try{while(true){
var result__33979__auto__ = switch__33976__auto__.call(null,state_34809);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33979__auto__;
}
break;
}
}catch (e34891){if((e34891 instanceof Object)){
var ex__33980__auto__ = e34891;
var statearr_34892_34949 = state_34809;
(statearr_34892_34949[(5)] = ex__33980__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34809);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34891;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33978__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34950 = state_34809;
state_34809 = G__34950;
continue;
} else {
return ret_value__33978__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__33977__auto__ = function(state_34809){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__33977__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__33977__auto____1.call(this,state_34809);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__33977__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__33977__auto____0;
cljs$core$async$mult_$_state_machine__33977__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__33977__auto____1;
return cljs$core$async$mult_$_state_machine__33977__auto__;
})()
})();
var state__34073__auto__ = (function (){var statearr_34893 = f__34072__auto__.call(null);
(statearr_34893[(6)] = c__34071__auto___34894);

return statearr_34893;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34073__auto__);
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
var G__34952 = arguments.length;
switch (G__34952) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_34954 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_34954.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_34955 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_34955.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_34956 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_34956.call(null,m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_34957 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_34957.call(null,m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_34958 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_34958.call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___34969 = arguments.length;
var i__4737__auto___34970 = (0);
while(true){
if((i__4737__auto___34970 < len__4736__auto___34969)){
args__4742__auto__.push((arguments[i__4737__auto___34970]));

var G__34971 = (i__4737__auto___34970 + (1));
i__4737__auto___34970 = G__34971;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__34963){
var map__34964 = p__34963;
var map__34964__$1 = (((((!((map__34964 == null))))?(((((map__34964.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34964.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34964):map__34964);
var opts = map__34964__$1;
var statearr_34966_34972 = state;
(statearr_34966_34972[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts.call(null,(function (val){
var statearr_34967_34973 = state;
(statearr_34967_34973[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_34968_34974 = state;
(statearr_34968_34974[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq34959){
var G__34960 = cljs.core.first.call(null,seq34959);
var seq34959__$1 = cljs.core.next.call(null,seq34959);
var G__34961 = cljs.core.first.call(null,seq34959__$1);
var seq34959__$2 = cljs.core.next.call(null,seq34959__$1);
var G__34962 = cljs.core.first.call(null,seq34959__$2);
var seq34959__$3 = cljs.core.next.call(null,seq34959__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34960,G__34961,G__34962,seq34959__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34975 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34975 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta34976){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta34976 = meta34976;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34975.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34977,meta34976__$1){
var self__ = this;
var _34977__$1 = this;
return (new cljs.core.async.t_cljs$core$async34975(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta34976__$1));
}));

(cljs.core.async.t_cljs$core$async34975.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34977){
var self__ = this;
var _34977__$1 = this;
return self__.meta34976;
}));

(cljs.core.async.t_cljs$core$async34975.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34975.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async34975.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34975.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async34975.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async34975.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async34975.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async34975.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async34975.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta34976","meta34976",78809684,null)], null);
}));

(cljs.core.async.t_cljs$core$async34975.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34975.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34975");

(cljs.core.async.t_cljs$core$async34975.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async34975");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34975.
 */
cljs.core.async.__GT_t_cljs$core$async34975 = (function cljs$core$async$mix_$___GT_t_cljs$core$async34975(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta34976){
return (new cljs.core.async.t_cljs$core$async34975(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta34976));
});

}

return (new cljs.core.async.t_cljs$core$async34975(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34071__auto___35139 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__34072__auto__ = (function (){var switch__33976__auto__ = (function (state_35079){
var state_val_35080 = (state_35079[(1)]);
if((state_val_35080 === (7))){
var inst_34994 = (state_35079[(2)]);
var state_35079__$1 = state_35079;
var statearr_35081_35140 = state_35079__$1;
(statearr_35081_35140[(2)] = inst_34994);

(statearr_35081_35140[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35080 === (20))){
var inst_35006 = (state_35079[(7)]);
var state_35079__$1 = state_35079;
var statearr_35082_35141 = state_35079__$1;
(statearr_35082_35141[(2)] = inst_35006);

(statearr_35082_35141[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35080 === (27))){
var state_35079__$1 = state_35079;
var statearr_35083_35142 = state_35079__$1;
(statearr_35083_35142[(2)] = null);

(statearr_35083_35142[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35080 === (1))){
var inst_34981 = (state_35079[(8)]);
var inst_34981__$1 = calc_state.call(null);
var inst_34983 = (inst_34981__$1 == null);
var inst_34984 = cljs.core.not.call(null,inst_34983);
var state_35079__$1 = (function (){var statearr_35084 = state_35079;
(statearr_35084[(8)] = inst_34981__$1);

return statearr_35084;
})();
if(inst_34984){
var statearr_35085_35143 = state_35079__$1;
(statearr_35085_35143[(1)] = (2));

} else {
var statearr_35086_35144 = state_35079__$1;
(statearr_35086_35144[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35080 === (24))){
var inst_35039 = (state_35079[(9)]);
var inst_35030 = (state_35079[(10)]);
var inst_35053 = (state_35079[(11)]);
var inst_35053__$1 = inst_35030.call(null,inst_35039);
var state_35079__$1 = (function (){var statearr_35087 = state_35079;
(statearr_35087[(11)] = inst_35053__$1);

return statearr_35087;
})();
if(cljs.core.truth_(inst_35053__$1)){
var statearr_35088_35145 = state_35079__$1;
(statearr_35088_35145[(1)] = (29));

} else {
var statearr_35089_35146 = state_35079__$1;
(statearr_35089_35146[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35080 === (4))){
var inst_34997 = (state_35079[(2)]);
var state_35079__$1 = state_35079;
if(cljs.core.truth_(inst_34997)){
var statearr_35090_35147 = state_35079__$1;
(statearr_35090_35147[(1)] = (8));

} else {
var statearr_35091_35148 = state_35079__$1;
(statearr_35091_35148[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35080 === (15))){
var inst_35024 = (state_35079[(2)]);
var state_35079__$1 = state_35079;
if(cljs.core.truth_(inst_35024)){
var statearr_35092_35149 = state_35079__$1;
(statearr_35092_35149[(1)] = (19));

} else {
var statearr_35093_35150 = state_35079__$1;
(statearr_35093_35150[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35080 === (21))){
var inst_35029 = (state_35079[(12)]);
var inst_35029__$1 = (state_35079[(2)]);
var inst_35030 = cljs.core.get.call(null,inst_35029__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35031 = cljs.core.get.call(null,inst_35029__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35032 = cljs.core.get.call(null,inst_35029__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_35079__$1 = (function (){var statearr_35094 = state_35079;
(statearr_35094[(12)] = inst_35029__$1);

(statearr_35094[(10)] = inst_35030);

(statearr_35094[(13)] = inst_35031);

return statearr_35094;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_35079__$1,(22),inst_35032);
} else {
if((state_val_35080 === (31))){
var inst_35061 = (state_35079[(2)]);
var state_35079__$1 = state_35079;
if(cljs.core.truth_(inst_35061)){
var statearr_35095_35151 = state_35079__$1;
(statearr_35095_35151[(1)] = (32));

} else {
var statearr_35096_35152 = state_35079__$1;
(statearr_35096_35152[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35080 === (32))){
var inst_35038 = (state_35079[(14)]);
var state_35079__$1 = state_35079;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35079__$1,(35),out,inst_35038);
} else {
if((state_val_35080 === (33))){
var inst_35029 = (state_35079[(12)]);
var inst_35006 = inst_35029;
var state_35079__$1 = (function (){var statearr_35097 = state_35079;
(statearr_35097[(7)] = inst_35006);

return statearr_35097;
})();
var statearr_35098_35153 = state_35079__$1;
(statearr_35098_35153[(2)] = null);

(statearr_35098_35153[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35080 === (13))){
var inst_35006 = (state_35079[(7)]);
var inst_35013 = inst_35006.cljs$lang$protocol_mask$partition0$;
var inst_35014 = (inst_35013 & (64));
var inst_35015 = inst_35006.cljs$core$ISeq$;
var inst_35016 = (cljs.core.PROTOCOL_SENTINEL === inst_35015);
var inst_35017 = ((inst_35014) || (inst_35016));
var state_35079__$1 = state_35079;
if(cljs.core.truth_(inst_35017)){
var statearr_35099_35154 = state_35079__$1;
(statearr_35099_35154[(1)] = (16));

} else {
var statearr_35100_35155 = state_35079__$1;
(statearr_35100_35155[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35080 === (22))){
var inst_35039 = (state_35079[(9)]);
var inst_35038 = (state_35079[(14)]);
var inst_35037 = (state_35079[(2)]);
var inst_35038__$1 = cljs.core.nth.call(null,inst_35037,(0),null);
var inst_35039__$1 = cljs.core.nth.call(null,inst_35037,(1),null);
var inst_35040 = (inst_35038__$1 == null);
var inst_35041 = cljs.core._EQ_.call(null,inst_35039__$1,change);
var inst_35042 = ((inst_35040) || (inst_35041));
var state_35079__$1 = (function (){var statearr_35101 = state_35079;
(statearr_35101[(9)] = inst_35039__$1);

(statearr_35101[(14)] = inst_35038__$1);

return statearr_35101;
})();
if(cljs.core.truth_(inst_35042)){
var statearr_35102_35156 = state_35079__$1;
(statearr_35102_35156[(1)] = (23));

} else {
var statearr_35103_35157 = state_35079__$1;
(statearr_35103_35157[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35080 === (36))){
var inst_35029 = (state_35079[(12)]);
var inst_35006 = inst_35029;
var state_35079__$1 = (function (){var statearr_35104 = state_35079;
(statearr_35104[(7)] = inst_35006);

return statearr_35104;
})();
var statearr_35105_35158 = state_35079__$1;
(statearr_35105_35158[(2)] = null);

(statearr_35105_35158[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35080 === (29))){
var inst_35053 = (state_35079[(11)]);
var state_35079__$1 = state_35079;
var statearr_35106_35159 = state_35079__$1;
(statearr_35106_35159[(2)] = inst_35053);

(statearr_35106_35159[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35080 === (6))){
var state_35079__$1 = state_35079;
var statearr_35107_35160 = state_35079__$1;
(statearr_35107_35160[(2)] = false);

(statearr_35107_35160[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35080 === (28))){
var inst_35049 = (state_35079[(2)]);
var inst_35050 = calc_state.call(null);
var inst_35006 = inst_35050;
var state_35079__$1 = (function (){var statearr_35108 = state_35079;
(statearr_35108[(7)] = inst_35006);

(statearr_35108[(15)] = inst_35049);

return statearr_35108;
})();
var statearr_35109_35161 = state_35079__$1;
(statearr_35109_35161[(2)] = null);

(statearr_35109_35161[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35080 === (25))){
var inst_35075 = (state_35079[(2)]);
var state_35079__$1 = state_35079;
var statearr_35110_35162 = state_35079__$1;
(statearr_35110_35162[(2)] = inst_35075);

(statearr_35110_35162[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35080 === (34))){
var inst_35073 = (state_35079[(2)]);
var state_35079__$1 = state_35079;
var statearr_35111_35163 = state_35079__$1;
(statearr_35111_35163[(2)] = inst_35073);

(statearr_35111_35163[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35080 === (17))){
var state_35079__$1 = state_35079;
var statearr_35112_35164 = state_35079__$1;
(statearr_35112_35164[(2)] = false);

(statearr_35112_35164[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35080 === (3))){
var state_35079__$1 = state_35079;
var statearr_35113_35165 = state_35079__$1;
(statearr_35113_35165[(2)] = false);

(statearr_35113_35165[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35080 === (12))){
var inst_35077 = (state_35079[(2)]);
var state_35079__$1 = state_35079;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35079__$1,inst_35077);
} else {
if((state_val_35080 === (2))){
var inst_34981 = (state_35079[(8)]);
var inst_34986 = inst_34981.cljs$lang$protocol_mask$partition0$;
var inst_34987 = (inst_34986 & (64));
var inst_34988 = inst_34981.cljs$core$ISeq$;
var inst_34989 = (cljs.core.PROTOCOL_SENTINEL === inst_34988);
var inst_34990 = ((inst_34987) || (inst_34989));
var state_35079__$1 = state_35079;
if(cljs.core.truth_(inst_34990)){
var statearr_35114_35166 = state_35079__$1;
(statearr_35114_35166[(1)] = (5));

} else {
var statearr_35115_35167 = state_35079__$1;
(statearr_35115_35167[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35080 === (23))){
var inst_35038 = (state_35079[(14)]);
var inst_35044 = (inst_35038 == null);
var state_35079__$1 = state_35079;
if(cljs.core.truth_(inst_35044)){
var statearr_35116_35168 = state_35079__$1;
(statearr_35116_35168[(1)] = (26));

} else {
var statearr_35117_35169 = state_35079__$1;
(statearr_35117_35169[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35080 === (35))){
var inst_35064 = (state_35079[(2)]);
var state_35079__$1 = state_35079;
if(cljs.core.truth_(inst_35064)){
var statearr_35118_35170 = state_35079__$1;
(statearr_35118_35170[(1)] = (36));

} else {
var statearr_35119_35171 = state_35079__$1;
(statearr_35119_35171[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35080 === (19))){
var inst_35006 = (state_35079[(7)]);
var inst_35026 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35006);
var state_35079__$1 = state_35079;
var statearr_35120_35172 = state_35079__$1;
(statearr_35120_35172[(2)] = inst_35026);

(statearr_35120_35172[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35080 === (11))){
var inst_35006 = (state_35079[(7)]);
var inst_35010 = (inst_35006 == null);
var inst_35011 = cljs.core.not.call(null,inst_35010);
var state_35079__$1 = state_35079;
if(inst_35011){
var statearr_35121_35173 = state_35079__$1;
(statearr_35121_35173[(1)] = (13));

} else {
var statearr_35122_35174 = state_35079__$1;
(statearr_35122_35174[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35080 === (9))){
var inst_34981 = (state_35079[(8)]);
var state_35079__$1 = state_35079;
var statearr_35123_35175 = state_35079__$1;
(statearr_35123_35175[(2)] = inst_34981);

(statearr_35123_35175[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35080 === (5))){
var state_35079__$1 = state_35079;
var statearr_35124_35176 = state_35079__$1;
(statearr_35124_35176[(2)] = true);

(statearr_35124_35176[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35080 === (14))){
var state_35079__$1 = state_35079;
var statearr_35125_35177 = state_35079__$1;
(statearr_35125_35177[(2)] = false);

(statearr_35125_35177[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35080 === (26))){
var inst_35039 = (state_35079[(9)]);
var inst_35046 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_35039);
var state_35079__$1 = state_35079;
var statearr_35126_35178 = state_35079__$1;
(statearr_35126_35178[(2)] = inst_35046);

(statearr_35126_35178[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35080 === (16))){
var state_35079__$1 = state_35079;
var statearr_35127_35179 = state_35079__$1;
(statearr_35127_35179[(2)] = true);

(statearr_35127_35179[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35080 === (38))){
var inst_35069 = (state_35079[(2)]);
var state_35079__$1 = state_35079;
var statearr_35128_35180 = state_35079__$1;
(statearr_35128_35180[(2)] = inst_35069);

(statearr_35128_35180[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35080 === (30))){
var inst_35039 = (state_35079[(9)]);
var inst_35030 = (state_35079[(10)]);
var inst_35031 = (state_35079[(13)]);
var inst_35056 = cljs.core.empty_QMARK_.call(null,inst_35030);
var inst_35057 = inst_35031.call(null,inst_35039);
var inst_35058 = cljs.core.not.call(null,inst_35057);
var inst_35059 = ((inst_35056) && (inst_35058));
var state_35079__$1 = state_35079;
var statearr_35129_35181 = state_35079__$1;
(statearr_35129_35181[(2)] = inst_35059);

(statearr_35129_35181[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35080 === (10))){
var inst_34981 = (state_35079[(8)]);
var inst_35002 = (state_35079[(2)]);
var inst_35003 = cljs.core.get.call(null,inst_35002,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35004 = cljs.core.get.call(null,inst_35002,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35005 = cljs.core.get.call(null,inst_35002,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_35006 = inst_34981;
var state_35079__$1 = (function (){var statearr_35130 = state_35079;
(statearr_35130[(16)] = inst_35004);

(statearr_35130[(17)] = inst_35005);

(statearr_35130[(18)] = inst_35003);

(statearr_35130[(7)] = inst_35006);

return statearr_35130;
})();
var statearr_35131_35182 = state_35079__$1;
(statearr_35131_35182[(2)] = null);

(statearr_35131_35182[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35080 === (18))){
var inst_35021 = (state_35079[(2)]);
var state_35079__$1 = state_35079;
var statearr_35132_35183 = state_35079__$1;
(statearr_35132_35183[(2)] = inst_35021);

(statearr_35132_35183[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35080 === (37))){
var state_35079__$1 = state_35079;
var statearr_35133_35184 = state_35079__$1;
(statearr_35133_35184[(2)] = null);

(statearr_35133_35184[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35080 === (8))){
var inst_34981 = (state_35079[(8)]);
var inst_34999 = cljs.core.apply.call(null,cljs.core.hash_map,inst_34981);
var state_35079__$1 = state_35079;
var statearr_35134_35185 = state_35079__$1;
(statearr_35134_35185[(2)] = inst_34999);

(statearr_35134_35185[(1)] = (10));


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
var cljs$core$async$mix_$_state_machine__33977__auto__ = null;
var cljs$core$async$mix_$_state_machine__33977__auto____0 = (function (){
var statearr_35135 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35135[(0)] = cljs$core$async$mix_$_state_machine__33977__auto__);

(statearr_35135[(1)] = (1));

return statearr_35135;
});
var cljs$core$async$mix_$_state_machine__33977__auto____1 = (function (state_35079){
while(true){
var ret_value__33978__auto__ = (function (){try{while(true){
var result__33979__auto__ = switch__33976__auto__.call(null,state_35079);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33979__auto__;
}
break;
}
}catch (e35136){if((e35136 instanceof Object)){
var ex__33980__auto__ = e35136;
var statearr_35137_35186 = state_35079;
(statearr_35137_35186[(5)] = ex__33980__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35079);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35136;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33978__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35187 = state_35079;
state_35079 = G__35187;
continue;
} else {
return ret_value__33978__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__33977__auto__ = function(state_35079){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__33977__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__33977__auto____1.call(this,state_35079);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__33977__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__33977__auto____0;
cljs$core$async$mix_$_state_machine__33977__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__33977__auto____1;
return cljs$core$async$mix_$_state_machine__33977__auto__;
})()
})();
var state__34073__auto__ = (function (){var statearr_35138 = f__34072__auto__.call(null);
(statearr_35138[(6)] = c__34071__auto___35139);

return statearr_35138;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34073__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_35190 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_35190.call(null,p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_35191 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_35191.call(null,p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_35192 = (function() {
var G__35193 = null;
var G__35193__1 = (function (p){
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
var G__35193__2 = (function (p,v){
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
G__35193 = function(p,v){
switch(arguments.length){
case 1:
return G__35193__1.call(this,p);
case 2:
return G__35193__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__35193.cljs$core$IFn$_invoke$arity$1 = G__35193__1;
G__35193.cljs$core$IFn$_invoke$arity$2 = G__35193__2;
return G__35193;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__35189 = arguments.length;
switch (G__35189) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_35192.call(null,p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_35192.call(null,p,v);
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
var G__35197 = arguments.length;
switch (G__35197) {
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
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,(function (p1__35195_SHARP_){
if(cljs.core.truth_(p1__35195_SHARP_.call(null,topic))){
return p1__35195_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__35195_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35198 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35198 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta35199){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta35199 = meta35199;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35198.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35200,meta35199__$1){
var self__ = this;
var _35200__$1 = this;
return (new cljs.core.async.t_cljs$core$async35198(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta35199__$1));
}));

(cljs.core.async.t_cljs$core$async35198.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35200){
var self__ = this;
var _35200__$1 = this;
return self__.meta35199;
}));

(cljs.core.async.t_cljs$core$async35198.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35198.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async35198.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35198.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async35198.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async35198.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async35198.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async35198.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta35199","meta35199",1111831549,null)], null);
}));

(cljs.core.async.t_cljs$core$async35198.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35198.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35198");

(cljs.core.async.t_cljs$core$async35198.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async35198");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35198.
 */
cljs.core.async.__GT_t_cljs$core$async35198 = (function cljs$core$async$__GT_t_cljs$core$async35198(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35199){
return (new cljs.core.async.t_cljs$core$async35198(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35199));
});

}

return (new cljs.core.async.t_cljs$core$async35198(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34071__auto___35318 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__34072__auto__ = (function (){var switch__33976__auto__ = (function (state_35272){
var state_val_35273 = (state_35272[(1)]);
if((state_val_35273 === (7))){
var inst_35268 = (state_35272[(2)]);
var state_35272__$1 = state_35272;
var statearr_35274_35319 = state_35272__$1;
(statearr_35274_35319[(2)] = inst_35268);

(statearr_35274_35319[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35273 === (20))){
var state_35272__$1 = state_35272;
var statearr_35275_35320 = state_35272__$1;
(statearr_35275_35320[(2)] = null);

(statearr_35275_35320[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35273 === (1))){
var state_35272__$1 = state_35272;
var statearr_35276_35321 = state_35272__$1;
(statearr_35276_35321[(2)] = null);

(statearr_35276_35321[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35273 === (24))){
var inst_35251 = (state_35272[(7)]);
var inst_35260 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_35251);
var state_35272__$1 = state_35272;
var statearr_35277_35322 = state_35272__$1;
(statearr_35277_35322[(2)] = inst_35260);

(statearr_35277_35322[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35273 === (4))){
var inst_35203 = (state_35272[(8)]);
var inst_35203__$1 = (state_35272[(2)]);
var inst_35204 = (inst_35203__$1 == null);
var state_35272__$1 = (function (){var statearr_35278 = state_35272;
(statearr_35278[(8)] = inst_35203__$1);

return statearr_35278;
})();
if(cljs.core.truth_(inst_35204)){
var statearr_35279_35323 = state_35272__$1;
(statearr_35279_35323[(1)] = (5));

} else {
var statearr_35280_35324 = state_35272__$1;
(statearr_35280_35324[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35273 === (15))){
var inst_35245 = (state_35272[(2)]);
var state_35272__$1 = state_35272;
var statearr_35281_35325 = state_35272__$1;
(statearr_35281_35325[(2)] = inst_35245);

(statearr_35281_35325[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35273 === (21))){
var inst_35265 = (state_35272[(2)]);
var state_35272__$1 = (function (){var statearr_35282 = state_35272;
(statearr_35282[(9)] = inst_35265);

return statearr_35282;
})();
var statearr_35283_35326 = state_35272__$1;
(statearr_35283_35326[(2)] = null);

(statearr_35283_35326[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35273 === (13))){
var inst_35227 = (state_35272[(10)]);
var inst_35229 = cljs.core.chunked_seq_QMARK_.call(null,inst_35227);
var state_35272__$1 = state_35272;
if(inst_35229){
var statearr_35284_35327 = state_35272__$1;
(statearr_35284_35327[(1)] = (16));

} else {
var statearr_35285_35328 = state_35272__$1;
(statearr_35285_35328[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35273 === (22))){
var inst_35257 = (state_35272[(2)]);
var state_35272__$1 = state_35272;
if(cljs.core.truth_(inst_35257)){
var statearr_35286_35329 = state_35272__$1;
(statearr_35286_35329[(1)] = (23));

} else {
var statearr_35287_35330 = state_35272__$1;
(statearr_35287_35330[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35273 === (6))){
var inst_35251 = (state_35272[(7)]);
var inst_35253 = (state_35272[(11)]);
var inst_35203 = (state_35272[(8)]);
var inst_35251__$1 = topic_fn.call(null,inst_35203);
var inst_35252 = cljs.core.deref.call(null,mults);
var inst_35253__$1 = cljs.core.get.call(null,inst_35252,inst_35251__$1);
var state_35272__$1 = (function (){var statearr_35288 = state_35272;
(statearr_35288[(7)] = inst_35251__$1);

(statearr_35288[(11)] = inst_35253__$1);

return statearr_35288;
})();
if(cljs.core.truth_(inst_35253__$1)){
var statearr_35289_35331 = state_35272__$1;
(statearr_35289_35331[(1)] = (19));

} else {
var statearr_35290_35332 = state_35272__$1;
(statearr_35290_35332[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35273 === (25))){
var inst_35262 = (state_35272[(2)]);
var state_35272__$1 = state_35272;
var statearr_35291_35333 = state_35272__$1;
(statearr_35291_35333[(2)] = inst_35262);

(statearr_35291_35333[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35273 === (17))){
var inst_35227 = (state_35272[(10)]);
var inst_35236 = cljs.core.first.call(null,inst_35227);
var inst_35237 = cljs.core.async.muxch_STAR_.call(null,inst_35236);
var inst_35238 = cljs.core.async.close_BANG_.call(null,inst_35237);
var inst_35239 = cljs.core.next.call(null,inst_35227);
var inst_35213 = inst_35239;
var inst_35214 = null;
var inst_35215 = (0);
var inst_35216 = (0);
var state_35272__$1 = (function (){var statearr_35292 = state_35272;
(statearr_35292[(12)] = inst_35238);

(statearr_35292[(13)] = inst_35215);

(statearr_35292[(14)] = inst_35213);

(statearr_35292[(15)] = inst_35214);

(statearr_35292[(16)] = inst_35216);

return statearr_35292;
})();
var statearr_35293_35334 = state_35272__$1;
(statearr_35293_35334[(2)] = null);

(statearr_35293_35334[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35273 === (3))){
var inst_35270 = (state_35272[(2)]);
var state_35272__$1 = state_35272;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35272__$1,inst_35270);
} else {
if((state_val_35273 === (12))){
var inst_35247 = (state_35272[(2)]);
var state_35272__$1 = state_35272;
var statearr_35294_35335 = state_35272__$1;
(statearr_35294_35335[(2)] = inst_35247);

(statearr_35294_35335[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35273 === (2))){
var state_35272__$1 = state_35272;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35272__$1,(4),ch);
} else {
if((state_val_35273 === (23))){
var state_35272__$1 = state_35272;
var statearr_35295_35336 = state_35272__$1;
(statearr_35295_35336[(2)] = null);

(statearr_35295_35336[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35273 === (19))){
var inst_35253 = (state_35272[(11)]);
var inst_35203 = (state_35272[(8)]);
var inst_35255 = cljs.core.async.muxch_STAR_.call(null,inst_35253);
var state_35272__$1 = state_35272;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35272__$1,(22),inst_35255,inst_35203);
} else {
if((state_val_35273 === (11))){
var inst_35227 = (state_35272[(10)]);
var inst_35213 = (state_35272[(14)]);
var inst_35227__$1 = cljs.core.seq.call(null,inst_35213);
var state_35272__$1 = (function (){var statearr_35296 = state_35272;
(statearr_35296[(10)] = inst_35227__$1);

return statearr_35296;
})();
if(inst_35227__$1){
var statearr_35297_35337 = state_35272__$1;
(statearr_35297_35337[(1)] = (13));

} else {
var statearr_35298_35338 = state_35272__$1;
(statearr_35298_35338[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35273 === (9))){
var inst_35249 = (state_35272[(2)]);
var state_35272__$1 = state_35272;
var statearr_35299_35339 = state_35272__$1;
(statearr_35299_35339[(2)] = inst_35249);

(statearr_35299_35339[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35273 === (5))){
var inst_35210 = cljs.core.deref.call(null,mults);
var inst_35211 = cljs.core.vals.call(null,inst_35210);
var inst_35212 = cljs.core.seq.call(null,inst_35211);
var inst_35213 = inst_35212;
var inst_35214 = null;
var inst_35215 = (0);
var inst_35216 = (0);
var state_35272__$1 = (function (){var statearr_35300 = state_35272;
(statearr_35300[(13)] = inst_35215);

(statearr_35300[(14)] = inst_35213);

(statearr_35300[(15)] = inst_35214);

(statearr_35300[(16)] = inst_35216);

return statearr_35300;
})();
var statearr_35301_35340 = state_35272__$1;
(statearr_35301_35340[(2)] = null);

(statearr_35301_35340[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35273 === (14))){
var state_35272__$1 = state_35272;
var statearr_35305_35341 = state_35272__$1;
(statearr_35305_35341[(2)] = null);

(statearr_35305_35341[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35273 === (16))){
var inst_35227 = (state_35272[(10)]);
var inst_35231 = cljs.core.chunk_first.call(null,inst_35227);
var inst_35232 = cljs.core.chunk_rest.call(null,inst_35227);
var inst_35233 = cljs.core.count.call(null,inst_35231);
var inst_35213 = inst_35232;
var inst_35214 = inst_35231;
var inst_35215 = inst_35233;
var inst_35216 = (0);
var state_35272__$1 = (function (){var statearr_35306 = state_35272;
(statearr_35306[(13)] = inst_35215);

(statearr_35306[(14)] = inst_35213);

(statearr_35306[(15)] = inst_35214);

(statearr_35306[(16)] = inst_35216);

return statearr_35306;
})();
var statearr_35307_35342 = state_35272__$1;
(statearr_35307_35342[(2)] = null);

(statearr_35307_35342[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35273 === (10))){
var inst_35215 = (state_35272[(13)]);
var inst_35213 = (state_35272[(14)]);
var inst_35214 = (state_35272[(15)]);
var inst_35216 = (state_35272[(16)]);
var inst_35221 = cljs.core._nth.call(null,inst_35214,inst_35216);
var inst_35222 = cljs.core.async.muxch_STAR_.call(null,inst_35221);
var inst_35223 = cljs.core.async.close_BANG_.call(null,inst_35222);
var inst_35224 = (inst_35216 + (1));
var tmp35302 = inst_35215;
var tmp35303 = inst_35213;
var tmp35304 = inst_35214;
var inst_35213__$1 = tmp35303;
var inst_35214__$1 = tmp35304;
var inst_35215__$1 = tmp35302;
var inst_35216__$1 = inst_35224;
var state_35272__$1 = (function (){var statearr_35308 = state_35272;
(statearr_35308[(13)] = inst_35215__$1);

(statearr_35308[(14)] = inst_35213__$1);

(statearr_35308[(15)] = inst_35214__$1);

(statearr_35308[(17)] = inst_35223);

(statearr_35308[(16)] = inst_35216__$1);

return statearr_35308;
})();
var statearr_35309_35343 = state_35272__$1;
(statearr_35309_35343[(2)] = null);

(statearr_35309_35343[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35273 === (18))){
var inst_35242 = (state_35272[(2)]);
var state_35272__$1 = state_35272;
var statearr_35310_35344 = state_35272__$1;
(statearr_35310_35344[(2)] = inst_35242);

(statearr_35310_35344[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35273 === (8))){
var inst_35215 = (state_35272[(13)]);
var inst_35216 = (state_35272[(16)]);
var inst_35218 = (inst_35216 < inst_35215);
var inst_35219 = inst_35218;
var state_35272__$1 = state_35272;
if(cljs.core.truth_(inst_35219)){
var statearr_35311_35345 = state_35272__$1;
(statearr_35311_35345[(1)] = (10));

} else {
var statearr_35312_35346 = state_35272__$1;
(statearr_35312_35346[(1)] = (11));

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
var cljs$core$async$state_machine__33977__auto__ = null;
var cljs$core$async$state_machine__33977__auto____0 = (function (){
var statearr_35313 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35313[(0)] = cljs$core$async$state_machine__33977__auto__);

(statearr_35313[(1)] = (1));

return statearr_35313;
});
var cljs$core$async$state_machine__33977__auto____1 = (function (state_35272){
while(true){
var ret_value__33978__auto__ = (function (){try{while(true){
var result__33979__auto__ = switch__33976__auto__.call(null,state_35272);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33979__auto__;
}
break;
}
}catch (e35314){if((e35314 instanceof Object)){
var ex__33980__auto__ = e35314;
var statearr_35315_35347 = state_35272;
(statearr_35315_35347[(5)] = ex__33980__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35272);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35314;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33978__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35348 = state_35272;
state_35272 = G__35348;
continue;
} else {
return ret_value__33978__auto__;
}
break;
}
});
cljs$core$async$state_machine__33977__auto__ = function(state_35272){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33977__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33977__auto____1.call(this,state_35272);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33977__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33977__auto____0;
cljs$core$async$state_machine__33977__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33977__auto____1;
return cljs$core$async$state_machine__33977__auto__;
})()
})();
var state__34073__auto__ = (function (){var statearr_35316 = f__34072__auto__.call(null);
(statearr_35316[(6)] = c__34071__auto___35318);

return statearr_35316;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34073__auto__);
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
var G__35350 = arguments.length;
switch (G__35350) {
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
var G__35353 = arguments.length;
switch (G__35353) {
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
var G__35356 = arguments.length;
switch (G__35356) {
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
var c__34071__auto___35423 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__34072__auto__ = (function (){var switch__33976__auto__ = (function (state_35395){
var state_val_35396 = (state_35395[(1)]);
if((state_val_35396 === (7))){
var state_35395__$1 = state_35395;
var statearr_35397_35424 = state_35395__$1;
(statearr_35397_35424[(2)] = null);

(statearr_35397_35424[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35396 === (1))){
var state_35395__$1 = state_35395;
var statearr_35398_35425 = state_35395__$1;
(statearr_35398_35425[(2)] = null);

(statearr_35398_35425[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35396 === (4))){
var inst_35359 = (state_35395[(7)]);
var inst_35361 = (inst_35359 < cnt);
var state_35395__$1 = state_35395;
if(cljs.core.truth_(inst_35361)){
var statearr_35399_35426 = state_35395__$1;
(statearr_35399_35426[(1)] = (6));

} else {
var statearr_35400_35427 = state_35395__$1;
(statearr_35400_35427[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35396 === (15))){
var inst_35391 = (state_35395[(2)]);
var state_35395__$1 = state_35395;
var statearr_35401_35428 = state_35395__$1;
(statearr_35401_35428[(2)] = inst_35391);

(statearr_35401_35428[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35396 === (13))){
var inst_35384 = cljs.core.async.close_BANG_.call(null,out);
var state_35395__$1 = state_35395;
var statearr_35402_35429 = state_35395__$1;
(statearr_35402_35429[(2)] = inst_35384);

(statearr_35402_35429[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35396 === (6))){
var state_35395__$1 = state_35395;
var statearr_35403_35430 = state_35395__$1;
(statearr_35403_35430[(2)] = null);

(statearr_35403_35430[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35396 === (3))){
var inst_35393 = (state_35395[(2)]);
var state_35395__$1 = state_35395;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35395__$1,inst_35393);
} else {
if((state_val_35396 === (12))){
var inst_35381 = (state_35395[(8)]);
var inst_35381__$1 = (state_35395[(2)]);
var inst_35382 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_35381__$1);
var state_35395__$1 = (function (){var statearr_35404 = state_35395;
(statearr_35404[(8)] = inst_35381__$1);

return statearr_35404;
})();
if(cljs.core.truth_(inst_35382)){
var statearr_35405_35431 = state_35395__$1;
(statearr_35405_35431[(1)] = (13));

} else {
var statearr_35406_35432 = state_35395__$1;
(statearr_35406_35432[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35396 === (2))){
var inst_35358 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_35359 = (0);
var state_35395__$1 = (function (){var statearr_35407 = state_35395;
(statearr_35407[(7)] = inst_35359);

(statearr_35407[(9)] = inst_35358);

return statearr_35407;
})();
var statearr_35408_35433 = state_35395__$1;
(statearr_35408_35433[(2)] = null);

(statearr_35408_35433[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35396 === (11))){
var inst_35359 = (state_35395[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_35395,(10),Object,null,(9));
var inst_35368 = chs__$1.call(null,inst_35359);
var inst_35369 = done.call(null,inst_35359);
var inst_35370 = cljs.core.async.take_BANG_.call(null,inst_35368,inst_35369);
var state_35395__$1 = state_35395;
var statearr_35409_35434 = state_35395__$1;
(statearr_35409_35434[(2)] = inst_35370);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35395__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35396 === (9))){
var inst_35359 = (state_35395[(7)]);
var inst_35372 = (state_35395[(2)]);
var inst_35373 = (inst_35359 + (1));
var inst_35359__$1 = inst_35373;
var state_35395__$1 = (function (){var statearr_35410 = state_35395;
(statearr_35410[(7)] = inst_35359__$1);

(statearr_35410[(10)] = inst_35372);

return statearr_35410;
})();
var statearr_35411_35435 = state_35395__$1;
(statearr_35411_35435[(2)] = null);

(statearr_35411_35435[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35396 === (5))){
var inst_35379 = (state_35395[(2)]);
var state_35395__$1 = (function (){var statearr_35412 = state_35395;
(statearr_35412[(11)] = inst_35379);

return statearr_35412;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35395__$1,(12),dchan);
} else {
if((state_val_35396 === (14))){
var inst_35381 = (state_35395[(8)]);
var inst_35386 = cljs.core.apply.call(null,f,inst_35381);
var state_35395__$1 = state_35395;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35395__$1,(16),out,inst_35386);
} else {
if((state_val_35396 === (16))){
var inst_35388 = (state_35395[(2)]);
var state_35395__$1 = (function (){var statearr_35413 = state_35395;
(statearr_35413[(12)] = inst_35388);

return statearr_35413;
})();
var statearr_35414_35436 = state_35395__$1;
(statearr_35414_35436[(2)] = null);

(statearr_35414_35436[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35396 === (10))){
var inst_35363 = (state_35395[(2)]);
var inst_35364 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_35395__$1 = (function (){var statearr_35415 = state_35395;
(statearr_35415[(13)] = inst_35363);

return statearr_35415;
})();
var statearr_35416_35437 = state_35395__$1;
(statearr_35416_35437[(2)] = inst_35364);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35395__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35396 === (8))){
var inst_35377 = (state_35395[(2)]);
var state_35395__$1 = state_35395;
var statearr_35417_35438 = state_35395__$1;
(statearr_35417_35438[(2)] = inst_35377);

(statearr_35417_35438[(1)] = (5));


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
var cljs$core$async$state_machine__33977__auto__ = null;
var cljs$core$async$state_machine__33977__auto____0 = (function (){
var statearr_35418 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35418[(0)] = cljs$core$async$state_machine__33977__auto__);

(statearr_35418[(1)] = (1));

return statearr_35418;
});
var cljs$core$async$state_machine__33977__auto____1 = (function (state_35395){
while(true){
var ret_value__33978__auto__ = (function (){try{while(true){
var result__33979__auto__ = switch__33976__auto__.call(null,state_35395);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33979__auto__;
}
break;
}
}catch (e35419){if((e35419 instanceof Object)){
var ex__33980__auto__ = e35419;
var statearr_35420_35439 = state_35395;
(statearr_35420_35439[(5)] = ex__33980__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35395);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35419;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33978__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35440 = state_35395;
state_35395 = G__35440;
continue;
} else {
return ret_value__33978__auto__;
}
break;
}
});
cljs$core$async$state_machine__33977__auto__ = function(state_35395){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33977__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33977__auto____1.call(this,state_35395);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33977__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33977__auto____0;
cljs$core$async$state_machine__33977__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33977__auto____1;
return cljs$core$async$state_machine__33977__auto__;
})()
})();
var state__34073__auto__ = (function (){var statearr_35421 = f__34072__auto__.call(null);
(statearr_35421[(6)] = c__34071__auto___35423);

return statearr_35421;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34073__auto__);
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
var G__35443 = arguments.length;
switch (G__35443) {
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
var c__34071__auto___35497 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__34072__auto__ = (function (){var switch__33976__auto__ = (function (state_35475){
var state_val_35476 = (state_35475[(1)]);
if((state_val_35476 === (7))){
var inst_35454 = (state_35475[(7)]);
var inst_35455 = (state_35475[(8)]);
var inst_35454__$1 = (state_35475[(2)]);
var inst_35455__$1 = cljs.core.nth.call(null,inst_35454__$1,(0),null);
var inst_35456 = cljs.core.nth.call(null,inst_35454__$1,(1),null);
var inst_35457 = (inst_35455__$1 == null);
var state_35475__$1 = (function (){var statearr_35477 = state_35475;
(statearr_35477[(9)] = inst_35456);

(statearr_35477[(7)] = inst_35454__$1);

(statearr_35477[(8)] = inst_35455__$1);

return statearr_35477;
})();
if(cljs.core.truth_(inst_35457)){
var statearr_35478_35498 = state_35475__$1;
(statearr_35478_35498[(1)] = (8));

} else {
var statearr_35479_35499 = state_35475__$1;
(statearr_35479_35499[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35476 === (1))){
var inst_35444 = cljs.core.vec.call(null,chs);
var inst_35445 = inst_35444;
var state_35475__$1 = (function (){var statearr_35480 = state_35475;
(statearr_35480[(10)] = inst_35445);

return statearr_35480;
})();
var statearr_35481_35500 = state_35475__$1;
(statearr_35481_35500[(2)] = null);

(statearr_35481_35500[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35476 === (4))){
var inst_35445 = (state_35475[(10)]);
var state_35475__$1 = state_35475;
return cljs.core.async.ioc_alts_BANG_.call(null,state_35475__$1,(7),inst_35445);
} else {
if((state_val_35476 === (6))){
var inst_35471 = (state_35475[(2)]);
var state_35475__$1 = state_35475;
var statearr_35482_35501 = state_35475__$1;
(statearr_35482_35501[(2)] = inst_35471);

(statearr_35482_35501[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35476 === (3))){
var inst_35473 = (state_35475[(2)]);
var state_35475__$1 = state_35475;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35475__$1,inst_35473);
} else {
if((state_val_35476 === (2))){
var inst_35445 = (state_35475[(10)]);
var inst_35447 = cljs.core.count.call(null,inst_35445);
var inst_35448 = (inst_35447 > (0));
var state_35475__$1 = state_35475;
if(cljs.core.truth_(inst_35448)){
var statearr_35484_35502 = state_35475__$1;
(statearr_35484_35502[(1)] = (4));

} else {
var statearr_35485_35503 = state_35475__$1;
(statearr_35485_35503[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35476 === (11))){
var inst_35445 = (state_35475[(10)]);
var inst_35464 = (state_35475[(2)]);
var tmp35483 = inst_35445;
var inst_35445__$1 = tmp35483;
var state_35475__$1 = (function (){var statearr_35486 = state_35475;
(statearr_35486[(10)] = inst_35445__$1);

(statearr_35486[(11)] = inst_35464);

return statearr_35486;
})();
var statearr_35487_35504 = state_35475__$1;
(statearr_35487_35504[(2)] = null);

(statearr_35487_35504[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35476 === (9))){
var inst_35455 = (state_35475[(8)]);
var state_35475__$1 = state_35475;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35475__$1,(11),out,inst_35455);
} else {
if((state_val_35476 === (5))){
var inst_35469 = cljs.core.async.close_BANG_.call(null,out);
var state_35475__$1 = state_35475;
var statearr_35488_35505 = state_35475__$1;
(statearr_35488_35505[(2)] = inst_35469);

(statearr_35488_35505[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35476 === (10))){
var inst_35467 = (state_35475[(2)]);
var state_35475__$1 = state_35475;
var statearr_35489_35506 = state_35475__$1;
(statearr_35489_35506[(2)] = inst_35467);

(statearr_35489_35506[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35476 === (8))){
var inst_35445 = (state_35475[(10)]);
var inst_35456 = (state_35475[(9)]);
var inst_35454 = (state_35475[(7)]);
var inst_35455 = (state_35475[(8)]);
var inst_35459 = (function (){var cs = inst_35445;
var vec__35450 = inst_35454;
var v = inst_35455;
var c = inst_35456;
return (function (p1__35441_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__35441_SHARP_);
});
})();
var inst_35460 = cljs.core.filterv.call(null,inst_35459,inst_35445);
var inst_35445__$1 = inst_35460;
var state_35475__$1 = (function (){var statearr_35490 = state_35475;
(statearr_35490[(10)] = inst_35445__$1);

return statearr_35490;
})();
var statearr_35491_35507 = state_35475__$1;
(statearr_35491_35507[(2)] = null);

(statearr_35491_35507[(1)] = (2));


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
var cljs$core$async$state_machine__33977__auto__ = null;
var cljs$core$async$state_machine__33977__auto____0 = (function (){
var statearr_35492 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35492[(0)] = cljs$core$async$state_machine__33977__auto__);

(statearr_35492[(1)] = (1));

return statearr_35492;
});
var cljs$core$async$state_machine__33977__auto____1 = (function (state_35475){
while(true){
var ret_value__33978__auto__ = (function (){try{while(true){
var result__33979__auto__ = switch__33976__auto__.call(null,state_35475);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33979__auto__;
}
break;
}
}catch (e35493){if((e35493 instanceof Object)){
var ex__33980__auto__ = e35493;
var statearr_35494_35508 = state_35475;
(statearr_35494_35508[(5)] = ex__33980__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35475);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35493;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33978__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35509 = state_35475;
state_35475 = G__35509;
continue;
} else {
return ret_value__33978__auto__;
}
break;
}
});
cljs$core$async$state_machine__33977__auto__ = function(state_35475){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33977__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33977__auto____1.call(this,state_35475);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33977__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33977__auto____0;
cljs$core$async$state_machine__33977__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33977__auto____1;
return cljs$core$async$state_machine__33977__auto__;
})()
})();
var state__34073__auto__ = (function (){var statearr_35495 = f__34072__auto__.call(null);
(statearr_35495[(6)] = c__34071__auto___35497);

return statearr_35495;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34073__auto__);
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
var G__35511 = arguments.length;
switch (G__35511) {
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
var c__34071__auto___35556 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__34072__auto__ = (function (){var switch__33976__auto__ = (function (state_35535){
var state_val_35536 = (state_35535[(1)]);
if((state_val_35536 === (7))){
var inst_35517 = (state_35535[(7)]);
var inst_35517__$1 = (state_35535[(2)]);
var inst_35518 = (inst_35517__$1 == null);
var inst_35519 = cljs.core.not.call(null,inst_35518);
var state_35535__$1 = (function (){var statearr_35537 = state_35535;
(statearr_35537[(7)] = inst_35517__$1);

return statearr_35537;
})();
if(inst_35519){
var statearr_35538_35557 = state_35535__$1;
(statearr_35538_35557[(1)] = (8));

} else {
var statearr_35539_35558 = state_35535__$1;
(statearr_35539_35558[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35536 === (1))){
var inst_35512 = (0);
var state_35535__$1 = (function (){var statearr_35540 = state_35535;
(statearr_35540[(8)] = inst_35512);

return statearr_35540;
})();
var statearr_35541_35559 = state_35535__$1;
(statearr_35541_35559[(2)] = null);

(statearr_35541_35559[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35536 === (4))){
var state_35535__$1 = state_35535;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35535__$1,(7),ch);
} else {
if((state_val_35536 === (6))){
var inst_35530 = (state_35535[(2)]);
var state_35535__$1 = state_35535;
var statearr_35542_35560 = state_35535__$1;
(statearr_35542_35560[(2)] = inst_35530);

(statearr_35542_35560[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35536 === (3))){
var inst_35532 = (state_35535[(2)]);
var inst_35533 = cljs.core.async.close_BANG_.call(null,out);
var state_35535__$1 = (function (){var statearr_35543 = state_35535;
(statearr_35543[(9)] = inst_35532);

return statearr_35543;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35535__$1,inst_35533);
} else {
if((state_val_35536 === (2))){
var inst_35512 = (state_35535[(8)]);
var inst_35514 = (inst_35512 < n);
var state_35535__$1 = state_35535;
if(cljs.core.truth_(inst_35514)){
var statearr_35544_35561 = state_35535__$1;
(statearr_35544_35561[(1)] = (4));

} else {
var statearr_35545_35562 = state_35535__$1;
(statearr_35545_35562[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35536 === (11))){
var inst_35512 = (state_35535[(8)]);
var inst_35522 = (state_35535[(2)]);
var inst_35523 = (inst_35512 + (1));
var inst_35512__$1 = inst_35523;
var state_35535__$1 = (function (){var statearr_35546 = state_35535;
(statearr_35546[(8)] = inst_35512__$1);

(statearr_35546[(10)] = inst_35522);

return statearr_35546;
})();
var statearr_35547_35563 = state_35535__$1;
(statearr_35547_35563[(2)] = null);

(statearr_35547_35563[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35536 === (9))){
var state_35535__$1 = state_35535;
var statearr_35548_35564 = state_35535__$1;
(statearr_35548_35564[(2)] = null);

(statearr_35548_35564[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35536 === (5))){
var state_35535__$1 = state_35535;
var statearr_35549_35565 = state_35535__$1;
(statearr_35549_35565[(2)] = null);

(statearr_35549_35565[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35536 === (10))){
var inst_35527 = (state_35535[(2)]);
var state_35535__$1 = state_35535;
var statearr_35550_35566 = state_35535__$1;
(statearr_35550_35566[(2)] = inst_35527);

(statearr_35550_35566[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35536 === (8))){
var inst_35517 = (state_35535[(7)]);
var state_35535__$1 = state_35535;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35535__$1,(11),out,inst_35517);
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
var cljs$core$async$state_machine__33977__auto__ = null;
var cljs$core$async$state_machine__33977__auto____0 = (function (){
var statearr_35551 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35551[(0)] = cljs$core$async$state_machine__33977__auto__);

(statearr_35551[(1)] = (1));

return statearr_35551;
});
var cljs$core$async$state_machine__33977__auto____1 = (function (state_35535){
while(true){
var ret_value__33978__auto__ = (function (){try{while(true){
var result__33979__auto__ = switch__33976__auto__.call(null,state_35535);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33979__auto__;
}
break;
}
}catch (e35552){if((e35552 instanceof Object)){
var ex__33980__auto__ = e35552;
var statearr_35553_35567 = state_35535;
(statearr_35553_35567[(5)] = ex__33980__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35535);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35552;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33978__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35568 = state_35535;
state_35535 = G__35568;
continue;
} else {
return ret_value__33978__auto__;
}
break;
}
});
cljs$core$async$state_machine__33977__auto__ = function(state_35535){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33977__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33977__auto____1.call(this,state_35535);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33977__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33977__auto____0;
cljs$core$async$state_machine__33977__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33977__auto____1;
return cljs$core$async$state_machine__33977__auto__;
})()
})();
var state__34073__auto__ = (function (){var statearr_35554 = f__34072__auto__.call(null);
(statearr_35554[(6)] = c__34071__auto___35556);

return statearr_35554;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34073__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35570 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35570 = (function (f,ch,meta35571){
this.f = f;
this.ch = ch;
this.meta35571 = meta35571;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35570.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35572,meta35571__$1){
var self__ = this;
var _35572__$1 = this;
return (new cljs.core.async.t_cljs$core$async35570(self__.f,self__.ch,meta35571__$1));
}));

(cljs.core.async.t_cljs$core$async35570.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35572){
var self__ = this;
var _35572__$1 = this;
return self__.meta35571;
}));

(cljs.core.async.t_cljs$core$async35570.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35570.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async35570.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async35570.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35570.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35573 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35573 = (function (f,ch,meta35571,_,fn1,meta35574){
this.f = f;
this.ch = ch;
this.meta35571 = meta35571;
this._ = _;
this.fn1 = fn1;
this.meta35574 = meta35574;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35573.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35575,meta35574__$1){
var self__ = this;
var _35575__$1 = this;
return (new cljs.core.async.t_cljs$core$async35573(self__.f,self__.ch,self__.meta35571,self__._,self__.fn1,meta35574__$1));
}));

(cljs.core.async.t_cljs$core$async35573.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35575){
var self__ = this;
var _35575__$1 = this;
return self__.meta35574;
}));

(cljs.core.async.t_cljs$core$async35573.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35573.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
}));

(cljs.core.async.t_cljs$core$async35573.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async35573.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return (function (p1__35569_SHARP_){
return f1.call(null,(((p1__35569_SHARP_ == null))?null:self__.f.call(null,p1__35569_SHARP_)));
});
}));

(cljs.core.async.t_cljs$core$async35573.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35571","meta35571",-271767399,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async35570","cljs.core.async/t_cljs$core$async35570",1961739271,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta35574","meta35574",1529563689,null)], null);
}));

(cljs.core.async.t_cljs$core$async35573.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35573.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35573");

(cljs.core.async.t_cljs$core$async35573.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async35573");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35573.
 */
cljs.core.async.__GT_t_cljs$core$async35573 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async35573(f__$1,ch__$1,meta35571__$1,___$2,fn1__$1,meta35574){
return (new cljs.core.async.t_cljs$core$async35573(f__$1,ch__$1,meta35571__$1,___$2,fn1__$1,meta35574));
});

}

return (new cljs.core.async.t_cljs$core$async35573(self__.f,self__.ch,self__.meta35571,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

(cljs.core.async.t_cljs$core$async35570.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35570.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async35570.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35571","meta35571",-271767399,null)], null);
}));

(cljs.core.async.t_cljs$core$async35570.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35570.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35570");

(cljs.core.async.t_cljs$core$async35570.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async35570");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35570.
 */
cljs.core.async.__GT_t_cljs$core$async35570 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async35570(f__$1,ch__$1,meta35571){
return (new cljs.core.async.t_cljs$core$async35570(f__$1,ch__$1,meta35571));
});

}

return (new cljs.core.async.t_cljs$core$async35570(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35576 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35576 = (function (f,ch,meta35577){
this.f = f;
this.ch = ch;
this.meta35577 = meta35577;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35576.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35578,meta35577__$1){
var self__ = this;
var _35578__$1 = this;
return (new cljs.core.async.t_cljs$core$async35576(self__.f,self__.ch,meta35577__$1));
}));

(cljs.core.async.t_cljs$core$async35576.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35578){
var self__ = this;
var _35578__$1 = this;
return self__.meta35577;
}));

(cljs.core.async.t_cljs$core$async35576.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35576.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async35576.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35576.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async35576.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35576.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
}));

(cljs.core.async.t_cljs$core$async35576.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35577","meta35577",645739631,null)], null);
}));

(cljs.core.async.t_cljs$core$async35576.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35576.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35576");

(cljs.core.async.t_cljs$core$async35576.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async35576");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35576.
 */
cljs.core.async.__GT_t_cljs$core$async35576 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async35576(f__$1,ch__$1,meta35577){
return (new cljs.core.async.t_cljs$core$async35576(f__$1,ch__$1,meta35577));
});

}

return (new cljs.core.async.t_cljs$core$async35576(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35579 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35579 = (function (p,ch,meta35580){
this.p = p;
this.ch = ch;
this.meta35580 = meta35580;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35579.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35581,meta35580__$1){
var self__ = this;
var _35581__$1 = this;
return (new cljs.core.async.t_cljs$core$async35579(self__.p,self__.ch,meta35580__$1));
}));

(cljs.core.async.t_cljs$core$async35579.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35581){
var self__ = this;
var _35581__$1 = this;
return self__.meta35580;
}));

(cljs.core.async.t_cljs$core$async35579.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35579.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async35579.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async35579.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35579.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async35579.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35579.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async35579.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35580","meta35580",1935752774,null)], null);
}));

(cljs.core.async.t_cljs$core$async35579.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35579.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35579");

(cljs.core.async.t_cljs$core$async35579.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async35579");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35579.
 */
cljs.core.async.__GT_t_cljs$core$async35579 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async35579(p__$1,ch__$1,meta35580){
return (new cljs.core.async.t_cljs$core$async35579(p__$1,ch__$1,meta35580));
});

}

return (new cljs.core.async.t_cljs$core$async35579(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__35583 = arguments.length;
switch (G__35583) {
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
var c__34071__auto___35623 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__34072__auto__ = (function (){var switch__33976__auto__ = (function (state_35604){
var state_val_35605 = (state_35604[(1)]);
if((state_val_35605 === (7))){
var inst_35600 = (state_35604[(2)]);
var state_35604__$1 = state_35604;
var statearr_35606_35624 = state_35604__$1;
(statearr_35606_35624[(2)] = inst_35600);

(statearr_35606_35624[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35605 === (1))){
var state_35604__$1 = state_35604;
var statearr_35607_35625 = state_35604__$1;
(statearr_35607_35625[(2)] = null);

(statearr_35607_35625[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35605 === (4))){
var inst_35586 = (state_35604[(7)]);
var inst_35586__$1 = (state_35604[(2)]);
var inst_35587 = (inst_35586__$1 == null);
var state_35604__$1 = (function (){var statearr_35608 = state_35604;
(statearr_35608[(7)] = inst_35586__$1);

return statearr_35608;
})();
if(cljs.core.truth_(inst_35587)){
var statearr_35609_35626 = state_35604__$1;
(statearr_35609_35626[(1)] = (5));

} else {
var statearr_35610_35627 = state_35604__$1;
(statearr_35610_35627[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35605 === (6))){
var inst_35586 = (state_35604[(7)]);
var inst_35591 = p.call(null,inst_35586);
var state_35604__$1 = state_35604;
if(cljs.core.truth_(inst_35591)){
var statearr_35611_35628 = state_35604__$1;
(statearr_35611_35628[(1)] = (8));

} else {
var statearr_35612_35629 = state_35604__$1;
(statearr_35612_35629[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35605 === (3))){
var inst_35602 = (state_35604[(2)]);
var state_35604__$1 = state_35604;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35604__$1,inst_35602);
} else {
if((state_val_35605 === (2))){
var state_35604__$1 = state_35604;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35604__$1,(4),ch);
} else {
if((state_val_35605 === (11))){
var inst_35594 = (state_35604[(2)]);
var state_35604__$1 = state_35604;
var statearr_35613_35630 = state_35604__$1;
(statearr_35613_35630[(2)] = inst_35594);

(statearr_35613_35630[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35605 === (9))){
var state_35604__$1 = state_35604;
var statearr_35614_35631 = state_35604__$1;
(statearr_35614_35631[(2)] = null);

(statearr_35614_35631[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35605 === (5))){
var inst_35589 = cljs.core.async.close_BANG_.call(null,out);
var state_35604__$1 = state_35604;
var statearr_35615_35632 = state_35604__$1;
(statearr_35615_35632[(2)] = inst_35589);

(statearr_35615_35632[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35605 === (10))){
var inst_35597 = (state_35604[(2)]);
var state_35604__$1 = (function (){var statearr_35616 = state_35604;
(statearr_35616[(8)] = inst_35597);

return statearr_35616;
})();
var statearr_35617_35633 = state_35604__$1;
(statearr_35617_35633[(2)] = null);

(statearr_35617_35633[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35605 === (8))){
var inst_35586 = (state_35604[(7)]);
var state_35604__$1 = state_35604;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35604__$1,(11),out,inst_35586);
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
var cljs$core$async$state_machine__33977__auto__ = null;
var cljs$core$async$state_machine__33977__auto____0 = (function (){
var statearr_35618 = [null,null,null,null,null,null,null,null,null];
(statearr_35618[(0)] = cljs$core$async$state_machine__33977__auto__);

(statearr_35618[(1)] = (1));

return statearr_35618;
});
var cljs$core$async$state_machine__33977__auto____1 = (function (state_35604){
while(true){
var ret_value__33978__auto__ = (function (){try{while(true){
var result__33979__auto__ = switch__33976__auto__.call(null,state_35604);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33979__auto__;
}
break;
}
}catch (e35619){if((e35619 instanceof Object)){
var ex__33980__auto__ = e35619;
var statearr_35620_35634 = state_35604;
(statearr_35620_35634[(5)] = ex__33980__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35604);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35619;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33978__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35635 = state_35604;
state_35604 = G__35635;
continue;
} else {
return ret_value__33978__auto__;
}
break;
}
});
cljs$core$async$state_machine__33977__auto__ = function(state_35604){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33977__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33977__auto____1.call(this,state_35604);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33977__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33977__auto____0;
cljs$core$async$state_machine__33977__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33977__auto____1;
return cljs$core$async$state_machine__33977__auto__;
})()
})();
var state__34073__auto__ = (function (){var statearr_35621 = f__34072__auto__.call(null);
(statearr_35621[(6)] = c__34071__auto___35623);

return statearr_35621;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34073__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__35637 = arguments.length;
switch (G__35637) {
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
var c__34071__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__34072__auto__ = (function (){var switch__33976__auto__ = (function (state_35700){
var state_val_35701 = (state_35700[(1)]);
if((state_val_35701 === (7))){
var inst_35696 = (state_35700[(2)]);
var state_35700__$1 = state_35700;
var statearr_35702_35740 = state_35700__$1;
(statearr_35702_35740[(2)] = inst_35696);

(statearr_35702_35740[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35701 === (20))){
var inst_35666 = (state_35700[(7)]);
var inst_35677 = (state_35700[(2)]);
var inst_35678 = cljs.core.next.call(null,inst_35666);
var inst_35652 = inst_35678;
var inst_35653 = null;
var inst_35654 = (0);
var inst_35655 = (0);
var state_35700__$1 = (function (){var statearr_35703 = state_35700;
(statearr_35703[(8)] = inst_35654);

(statearr_35703[(9)] = inst_35652);

(statearr_35703[(10)] = inst_35655);

(statearr_35703[(11)] = inst_35677);

(statearr_35703[(12)] = inst_35653);

return statearr_35703;
})();
var statearr_35704_35741 = state_35700__$1;
(statearr_35704_35741[(2)] = null);

(statearr_35704_35741[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35701 === (1))){
var state_35700__$1 = state_35700;
var statearr_35705_35742 = state_35700__$1;
(statearr_35705_35742[(2)] = null);

(statearr_35705_35742[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35701 === (4))){
var inst_35641 = (state_35700[(13)]);
var inst_35641__$1 = (state_35700[(2)]);
var inst_35642 = (inst_35641__$1 == null);
var state_35700__$1 = (function (){var statearr_35706 = state_35700;
(statearr_35706[(13)] = inst_35641__$1);

return statearr_35706;
})();
if(cljs.core.truth_(inst_35642)){
var statearr_35707_35743 = state_35700__$1;
(statearr_35707_35743[(1)] = (5));

} else {
var statearr_35708_35744 = state_35700__$1;
(statearr_35708_35744[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35701 === (15))){
var state_35700__$1 = state_35700;
var statearr_35712_35745 = state_35700__$1;
(statearr_35712_35745[(2)] = null);

(statearr_35712_35745[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35701 === (21))){
var state_35700__$1 = state_35700;
var statearr_35713_35746 = state_35700__$1;
(statearr_35713_35746[(2)] = null);

(statearr_35713_35746[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35701 === (13))){
var inst_35654 = (state_35700[(8)]);
var inst_35652 = (state_35700[(9)]);
var inst_35655 = (state_35700[(10)]);
var inst_35653 = (state_35700[(12)]);
var inst_35662 = (state_35700[(2)]);
var inst_35663 = (inst_35655 + (1));
var tmp35709 = inst_35654;
var tmp35710 = inst_35652;
var tmp35711 = inst_35653;
var inst_35652__$1 = tmp35710;
var inst_35653__$1 = tmp35711;
var inst_35654__$1 = tmp35709;
var inst_35655__$1 = inst_35663;
var state_35700__$1 = (function (){var statearr_35714 = state_35700;
(statearr_35714[(14)] = inst_35662);

(statearr_35714[(8)] = inst_35654__$1);

(statearr_35714[(9)] = inst_35652__$1);

(statearr_35714[(10)] = inst_35655__$1);

(statearr_35714[(12)] = inst_35653__$1);

return statearr_35714;
})();
var statearr_35715_35747 = state_35700__$1;
(statearr_35715_35747[(2)] = null);

(statearr_35715_35747[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35701 === (22))){
var state_35700__$1 = state_35700;
var statearr_35716_35748 = state_35700__$1;
(statearr_35716_35748[(2)] = null);

(statearr_35716_35748[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35701 === (6))){
var inst_35641 = (state_35700[(13)]);
var inst_35650 = f.call(null,inst_35641);
var inst_35651 = cljs.core.seq.call(null,inst_35650);
var inst_35652 = inst_35651;
var inst_35653 = null;
var inst_35654 = (0);
var inst_35655 = (0);
var state_35700__$1 = (function (){var statearr_35717 = state_35700;
(statearr_35717[(8)] = inst_35654);

(statearr_35717[(9)] = inst_35652);

(statearr_35717[(10)] = inst_35655);

(statearr_35717[(12)] = inst_35653);

return statearr_35717;
})();
var statearr_35718_35749 = state_35700__$1;
(statearr_35718_35749[(2)] = null);

(statearr_35718_35749[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35701 === (17))){
var inst_35666 = (state_35700[(7)]);
var inst_35670 = cljs.core.chunk_first.call(null,inst_35666);
var inst_35671 = cljs.core.chunk_rest.call(null,inst_35666);
var inst_35672 = cljs.core.count.call(null,inst_35670);
var inst_35652 = inst_35671;
var inst_35653 = inst_35670;
var inst_35654 = inst_35672;
var inst_35655 = (0);
var state_35700__$1 = (function (){var statearr_35719 = state_35700;
(statearr_35719[(8)] = inst_35654);

(statearr_35719[(9)] = inst_35652);

(statearr_35719[(10)] = inst_35655);

(statearr_35719[(12)] = inst_35653);

return statearr_35719;
})();
var statearr_35720_35750 = state_35700__$1;
(statearr_35720_35750[(2)] = null);

(statearr_35720_35750[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35701 === (3))){
var inst_35698 = (state_35700[(2)]);
var state_35700__$1 = state_35700;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35700__$1,inst_35698);
} else {
if((state_val_35701 === (12))){
var inst_35686 = (state_35700[(2)]);
var state_35700__$1 = state_35700;
var statearr_35721_35751 = state_35700__$1;
(statearr_35721_35751[(2)] = inst_35686);

(statearr_35721_35751[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35701 === (2))){
var state_35700__$1 = state_35700;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35700__$1,(4),in$);
} else {
if((state_val_35701 === (23))){
var inst_35694 = (state_35700[(2)]);
var state_35700__$1 = state_35700;
var statearr_35722_35752 = state_35700__$1;
(statearr_35722_35752[(2)] = inst_35694);

(statearr_35722_35752[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35701 === (19))){
var inst_35681 = (state_35700[(2)]);
var state_35700__$1 = state_35700;
var statearr_35723_35753 = state_35700__$1;
(statearr_35723_35753[(2)] = inst_35681);

(statearr_35723_35753[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35701 === (11))){
var inst_35666 = (state_35700[(7)]);
var inst_35652 = (state_35700[(9)]);
var inst_35666__$1 = cljs.core.seq.call(null,inst_35652);
var state_35700__$1 = (function (){var statearr_35724 = state_35700;
(statearr_35724[(7)] = inst_35666__$1);

return statearr_35724;
})();
if(inst_35666__$1){
var statearr_35725_35754 = state_35700__$1;
(statearr_35725_35754[(1)] = (14));

} else {
var statearr_35726_35755 = state_35700__$1;
(statearr_35726_35755[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35701 === (9))){
var inst_35688 = (state_35700[(2)]);
var inst_35689 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_35700__$1 = (function (){var statearr_35727 = state_35700;
(statearr_35727[(15)] = inst_35688);

return statearr_35727;
})();
if(cljs.core.truth_(inst_35689)){
var statearr_35728_35756 = state_35700__$1;
(statearr_35728_35756[(1)] = (21));

} else {
var statearr_35729_35757 = state_35700__$1;
(statearr_35729_35757[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35701 === (5))){
var inst_35644 = cljs.core.async.close_BANG_.call(null,out);
var state_35700__$1 = state_35700;
var statearr_35730_35758 = state_35700__$1;
(statearr_35730_35758[(2)] = inst_35644);

(statearr_35730_35758[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35701 === (14))){
var inst_35666 = (state_35700[(7)]);
var inst_35668 = cljs.core.chunked_seq_QMARK_.call(null,inst_35666);
var state_35700__$1 = state_35700;
if(inst_35668){
var statearr_35731_35759 = state_35700__$1;
(statearr_35731_35759[(1)] = (17));

} else {
var statearr_35732_35760 = state_35700__$1;
(statearr_35732_35760[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35701 === (16))){
var inst_35684 = (state_35700[(2)]);
var state_35700__$1 = state_35700;
var statearr_35733_35761 = state_35700__$1;
(statearr_35733_35761[(2)] = inst_35684);

(statearr_35733_35761[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35701 === (10))){
var inst_35655 = (state_35700[(10)]);
var inst_35653 = (state_35700[(12)]);
var inst_35660 = cljs.core._nth.call(null,inst_35653,inst_35655);
var state_35700__$1 = state_35700;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35700__$1,(13),out,inst_35660);
} else {
if((state_val_35701 === (18))){
var inst_35666 = (state_35700[(7)]);
var inst_35675 = cljs.core.first.call(null,inst_35666);
var state_35700__$1 = state_35700;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35700__$1,(20),out,inst_35675);
} else {
if((state_val_35701 === (8))){
var inst_35654 = (state_35700[(8)]);
var inst_35655 = (state_35700[(10)]);
var inst_35657 = (inst_35655 < inst_35654);
var inst_35658 = inst_35657;
var state_35700__$1 = state_35700;
if(cljs.core.truth_(inst_35658)){
var statearr_35734_35762 = state_35700__$1;
(statearr_35734_35762[(1)] = (10));

} else {
var statearr_35735_35763 = state_35700__$1;
(statearr_35735_35763[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__33977__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__33977__auto____0 = (function (){
var statearr_35736 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35736[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__33977__auto__);

(statearr_35736[(1)] = (1));

return statearr_35736;
});
var cljs$core$async$mapcat_STAR__$_state_machine__33977__auto____1 = (function (state_35700){
while(true){
var ret_value__33978__auto__ = (function (){try{while(true){
var result__33979__auto__ = switch__33976__auto__.call(null,state_35700);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33979__auto__;
}
break;
}
}catch (e35737){if((e35737 instanceof Object)){
var ex__33980__auto__ = e35737;
var statearr_35738_35764 = state_35700;
(statearr_35738_35764[(5)] = ex__33980__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35700);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35737;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33978__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35765 = state_35700;
state_35700 = G__35765;
continue;
} else {
return ret_value__33978__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__33977__auto__ = function(state_35700){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__33977__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__33977__auto____1.call(this,state_35700);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__33977__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__33977__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__33977__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__33977__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__33977__auto__;
})()
})();
var state__34073__auto__ = (function (){var statearr_35739 = f__34072__auto__.call(null);
(statearr_35739[(6)] = c__34071__auto__);

return statearr_35739;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34073__auto__);
}));

return c__34071__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__35767 = arguments.length;
switch (G__35767) {
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
var G__35770 = arguments.length;
switch (G__35770) {
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
var G__35773 = arguments.length;
switch (G__35773) {
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
var c__34071__auto___35820 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__34072__auto__ = (function (){var switch__33976__auto__ = (function (state_35797){
var state_val_35798 = (state_35797[(1)]);
if((state_val_35798 === (7))){
var inst_35792 = (state_35797[(2)]);
var state_35797__$1 = state_35797;
var statearr_35799_35821 = state_35797__$1;
(statearr_35799_35821[(2)] = inst_35792);

(statearr_35799_35821[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35798 === (1))){
var inst_35774 = null;
var state_35797__$1 = (function (){var statearr_35800 = state_35797;
(statearr_35800[(7)] = inst_35774);

return statearr_35800;
})();
var statearr_35801_35822 = state_35797__$1;
(statearr_35801_35822[(2)] = null);

(statearr_35801_35822[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35798 === (4))){
var inst_35777 = (state_35797[(8)]);
var inst_35777__$1 = (state_35797[(2)]);
var inst_35778 = (inst_35777__$1 == null);
var inst_35779 = cljs.core.not.call(null,inst_35778);
var state_35797__$1 = (function (){var statearr_35802 = state_35797;
(statearr_35802[(8)] = inst_35777__$1);

return statearr_35802;
})();
if(inst_35779){
var statearr_35803_35823 = state_35797__$1;
(statearr_35803_35823[(1)] = (5));

} else {
var statearr_35804_35824 = state_35797__$1;
(statearr_35804_35824[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35798 === (6))){
var state_35797__$1 = state_35797;
var statearr_35805_35825 = state_35797__$1;
(statearr_35805_35825[(2)] = null);

(statearr_35805_35825[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35798 === (3))){
var inst_35794 = (state_35797[(2)]);
var inst_35795 = cljs.core.async.close_BANG_.call(null,out);
var state_35797__$1 = (function (){var statearr_35806 = state_35797;
(statearr_35806[(9)] = inst_35794);

return statearr_35806;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35797__$1,inst_35795);
} else {
if((state_val_35798 === (2))){
var state_35797__$1 = state_35797;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35797__$1,(4),ch);
} else {
if((state_val_35798 === (11))){
var inst_35777 = (state_35797[(8)]);
var inst_35786 = (state_35797[(2)]);
var inst_35774 = inst_35777;
var state_35797__$1 = (function (){var statearr_35807 = state_35797;
(statearr_35807[(7)] = inst_35774);

(statearr_35807[(10)] = inst_35786);

return statearr_35807;
})();
var statearr_35808_35826 = state_35797__$1;
(statearr_35808_35826[(2)] = null);

(statearr_35808_35826[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35798 === (9))){
var inst_35777 = (state_35797[(8)]);
var state_35797__$1 = state_35797;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35797__$1,(11),out,inst_35777);
} else {
if((state_val_35798 === (5))){
var inst_35777 = (state_35797[(8)]);
var inst_35774 = (state_35797[(7)]);
var inst_35781 = cljs.core._EQ_.call(null,inst_35777,inst_35774);
var state_35797__$1 = state_35797;
if(inst_35781){
var statearr_35810_35827 = state_35797__$1;
(statearr_35810_35827[(1)] = (8));

} else {
var statearr_35811_35828 = state_35797__$1;
(statearr_35811_35828[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35798 === (10))){
var inst_35789 = (state_35797[(2)]);
var state_35797__$1 = state_35797;
var statearr_35812_35829 = state_35797__$1;
(statearr_35812_35829[(2)] = inst_35789);

(statearr_35812_35829[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35798 === (8))){
var inst_35774 = (state_35797[(7)]);
var tmp35809 = inst_35774;
var inst_35774__$1 = tmp35809;
var state_35797__$1 = (function (){var statearr_35813 = state_35797;
(statearr_35813[(7)] = inst_35774__$1);

return statearr_35813;
})();
var statearr_35814_35830 = state_35797__$1;
(statearr_35814_35830[(2)] = null);

(statearr_35814_35830[(1)] = (2));


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
var cljs$core$async$state_machine__33977__auto__ = null;
var cljs$core$async$state_machine__33977__auto____0 = (function (){
var statearr_35815 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35815[(0)] = cljs$core$async$state_machine__33977__auto__);

(statearr_35815[(1)] = (1));

return statearr_35815;
});
var cljs$core$async$state_machine__33977__auto____1 = (function (state_35797){
while(true){
var ret_value__33978__auto__ = (function (){try{while(true){
var result__33979__auto__ = switch__33976__auto__.call(null,state_35797);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33979__auto__;
}
break;
}
}catch (e35816){if((e35816 instanceof Object)){
var ex__33980__auto__ = e35816;
var statearr_35817_35831 = state_35797;
(statearr_35817_35831[(5)] = ex__33980__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35797);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35816;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33978__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35832 = state_35797;
state_35797 = G__35832;
continue;
} else {
return ret_value__33978__auto__;
}
break;
}
});
cljs$core$async$state_machine__33977__auto__ = function(state_35797){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33977__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33977__auto____1.call(this,state_35797);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33977__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33977__auto____0;
cljs$core$async$state_machine__33977__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33977__auto____1;
return cljs$core$async$state_machine__33977__auto__;
})()
})();
var state__34073__auto__ = (function (){var statearr_35818 = f__34072__auto__.call(null);
(statearr_35818[(6)] = c__34071__auto___35820);

return statearr_35818;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34073__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__35834 = arguments.length;
switch (G__35834) {
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
var c__34071__auto___35900 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__34072__auto__ = (function (){var switch__33976__auto__ = (function (state_35872){
var state_val_35873 = (state_35872[(1)]);
if((state_val_35873 === (7))){
var inst_35868 = (state_35872[(2)]);
var state_35872__$1 = state_35872;
var statearr_35874_35901 = state_35872__$1;
(statearr_35874_35901[(2)] = inst_35868);

(statearr_35874_35901[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35873 === (1))){
var inst_35835 = (new Array(n));
var inst_35836 = inst_35835;
var inst_35837 = (0);
var state_35872__$1 = (function (){var statearr_35875 = state_35872;
(statearr_35875[(7)] = inst_35837);

(statearr_35875[(8)] = inst_35836);

return statearr_35875;
})();
var statearr_35876_35902 = state_35872__$1;
(statearr_35876_35902[(2)] = null);

(statearr_35876_35902[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35873 === (4))){
var inst_35840 = (state_35872[(9)]);
var inst_35840__$1 = (state_35872[(2)]);
var inst_35841 = (inst_35840__$1 == null);
var inst_35842 = cljs.core.not.call(null,inst_35841);
var state_35872__$1 = (function (){var statearr_35877 = state_35872;
(statearr_35877[(9)] = inst_35840__$1);

return statearr_35877;
})();
if(inst_35842){
var statearr_35878_35903 = state_35872__$1;
(statearr_35878_35903[(1)] = (5));

} else {
var statearr_35879_35904 = state_35872__$1;
(statearr_35879_35904[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35873 === (15))){
var inst_35862 = (state_35872[(2)]);
var state_35872__$1 = state_35872;
var statearr_35880_35905 = state_35872__$1;
(statearr_35880_35905[(2)] = inst_35862);

(statearr_35880_35905[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35873 === (13))){
var state_35872__$1 = state_35872;
var statearr_35881_35906 = state_35872__$1;
(statearr_35881_35906[(2)] = null);

(statearr_35881_35906[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35873 === (6))){
var inst_35837 = (state_35872[(7)]);
var inst_35858 = (inst_35837 > (0));
var state_35872__$1 = state_35872;
if(cljs.core.truth_(inst_35858)){
var statearr_35882_35907 = state_35872__$1;
(statearr_35882_35907[(1)] = (12));

} else {
var statearr_35883_35908 = state_35872__$1;
(statearr_35883_35908[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35873 === (3))){
var inst_35870 = (state_35872[(2)]);
var state_35872__$1 = state_35872;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35872__$1,inst_35870);
} else {
if((state_val_35873 === (12))){
var inst_35836 = (state_35872[(8)]);
var inst_35860 = cljs.core.vec.call(null,inst_35836);
var state_35872__$1 = state_35872;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35872__$1,(15),out,inst_35860);
} else {
if((state_val_35873 === (2))){
var state_35872__$1 = state_35872;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35872__$1,(4),ch);
} else {
if((state_val_35873 === (11))){
var inst_35852 = (state_35872[(2)]);
var inst_35853 = (new Array(n));
var inst_35836 = inst_35853;
var inst_35837 = (0);
var state_35872__$1 = (function (){var statearr_35884 = state_35872;
(statearr_35884[(7)] = inst_35837);

(statearr_35884[(10)] = inst_35852);

(statearr_35884[(8)] = inst_35836);

return statearr_35884;
})();
var statearr_35885_35909 = state_35872__$1;
(statearr_35885_35909[(2)] = null);

(statearr_35885_35909[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35873 === (9))){
var inst_35836 = (state_35872[(8)]);
var inst_35850 = cljs.core.vec.call(null,inst_35836);
var state_35872__$1 = state_35872;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35872__$1,(11),out,inst_35850);
} else {
if((state_val_35873 === (5))){
var inst_35845 = (state_35872[(11)]);
var inst_35837 = (state_35872[(7)]);
var inst_35836 = (state_35872[(8)]);
var inst_35840 = (state_35872[(9)]);
var inst_35844 = (inst_35836[inst_35837] = inst_35840);
var inst_35845__$1 = (inst_35837 + (1));
var inst_35846 = (inst_35845__$1 < n);
var state_35872__$1 = (function (){var statearr_35886 = state_35872;
(statearr_35886[(11)] = inst_35845__$1);

(statearr_35886[(12)] = inst_35844);

return statearr_35886;
})();
if(cljs.core.truth_(inst_35846)){
var statearr_35887_35910 = state_35872__$1;
(statearr_35887_35910[(1)] = (8));

} else {
var statearr_35888_35911 = state_35872__$1;
(statearr_35888_35911[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35873 === (14))){
var inst_35865 = (state_35872[(2)]);
var inst_35866 = cljs.core.async.close_BANG_.call(null,out);
var state_35872__$1 = (function (){var statearr_35890 = state_35872;
(statearr_35890[(13)] = inst_35865);

return statearr_35890;
})();
var statearr_35891_35912 = state_35872__$1;
(statearr_35891_35912[(2)] = inst_35866);

(statearr_35891_35912[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35873 === (10))){
var inst_35856 = (state_35872[(2)]);
var state_35872__$1 = state_35872;
var statearr_35892_35913 = state_35872__$1;
(statearr_35892_35913[(2)] = inst_35856);

(statearr_35892_35913[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35873 === (8))){
var inst_35845 = (state_35872[(11)]);
var inst_35836 = (state_35872[(8)]);
var tmp35889 = inst_35836;
var inst_35836__$1 = tmp35889;
var inst_35837 = inst_35845;
var state_35872__$1 = (function (){var statearr_35893 = state_35872;
(statearr_35893[(7)] = inst_35837);

(statearr_35893[(8)] = inst_35836__$1);

return statearr_35893;
})();
var statearr_35894_35914 = state_35872__$1;
(statearr_35894_35914[(2)] = null);

(statearr_35894_35914[(1)] = (2));


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
var cljs$core$async$state_machine__33977__auto__ = null;
var cljs$core$async$state_machine__33977__auto____0 = (function (){
var statearr_35895 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35895[(0)] = cljs$core$async$state_machine__33977__auto__);

(statearr_35895[(1)] = (1));

return statearr_35895;
});
var cljs$core$async$state_machine__33977__auto____1 = (function (state_35872){
while(true){
var ret_value__33978__auto__ = (function (){try{while(true){
var result__33979__auto__ = switch__33976__auto__.call(null,state_35872);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33979__auto__;
}
break;
}
}catch (e35896){if((e35896 instanceof Object)){
var ex__33980__auto__ = e35896;
var statearr_35897_35915 = state_35872;
(statearr_35897_35915[(5)] = ex__33980__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35872);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35896;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33978__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35916 = state_35872;
state_35872 = G__35916;
continue;
} else {
return ret_value__33978__auto__;
}
break;
}
});
cljs$core$async$state_machine__33977__auto__ = function(state_35872){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33977__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33977__auto____1.call(this,state_35872);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33977__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33977__auto____0;
cljs$core$async$state_machine__33977__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33977__auto____1;
return cljs$core$async$state_machine__33977__auto__;
})()
})();
var state__34073__auto__ = (function (){var statearr_35898 = f__34072__auto__.call(null);
(statearr_35898[(6)] = c__34071__auto___35900);

return statearr_35898;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34073__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__35918 = arguments.length;
switch (G__35918) {
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
var c__34071__auto___35988 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__34072__auto__ = (function (){var switch__33976__auto__ = (function (state_35960){
var state_val_35961 = (state_35960[(1)]);
if((state_val_35961 === (7))){
var inst_35956 = (state_35960[(2)]);
var state_35960__$1 = state_35960;
var statearr_35962_35989 = state_35960__$1;
(statearr_35962_35989[(2)] = inst_35956);

(statearr_35962_35989[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35961 === (1))){
var inst_35919 = [];
var inst_35920 = inst_35919;
var inst_35921 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_35960__$1 = (function (){var statearr_35963 = state_35960;
(statearr_35963[(7)] = inst_35921);

(statearr_35963[(8)] = inst_35920);

return statearr_35963;
})();
var statearr_35964_35990 = state_35960__$1;
(statearr_35964_35990[(2)] = null);

(statearr_35964_35990[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35961 === (4))){
var inst_35924 = (state_35960[(9)]);
var inst_35924__$1 = (state_35960[(2)]);
var inst_35925 = (inst_35924__$1 == null);
var inst_35926 = cljs.core.not.call(null,inst_35925);
var state_35960__$1 = (function (){var statearr_35965 = state_35960;
(statearr_35965[(9)] = inst_35924__$1);

return statearr_35965;
})();
if(inst_35926){
var statearr_35966_35991 = state_35960__$1;
(statearr_35966_35991[(1)] = (5));

} else {
var statearr_35967_35992 = state_35960__$1;
(statearr_35967_35992[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35961 === (15))){
var inst_35950 = (state_35960[(2)]);
var state_35960__$1 = state_35960;
var statearr_35968_35993 = state_35960__$1;
(statearr_35968_35993[(2)] = inst_35950);

(statearr_35968_35993[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35961 === (13))){
var state_35960__$1 = state_35960;
var statearr_35969_35994 = state_35960__$1;
(statearr_35969_35994[(2)] = null);

(statearr_35969_35994[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35961 === (6))){
var inst_35920 = (state_35960[(8)]);
var inst_35945 = inst_35920.length;
var inst_35946 = (inst_35945 > (0));
var state_35960__$1 = state_35960;
if(cljs.core.truth_(inst_35946)){
var statearr_35970_35995 = state_35960__$1;
(statearr_35970_35995[(1)] = (12));

} else {
var statearr_35971_35996 = state_35960__$1;
(statearr_35971_35996[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35961 === (3))){
var inst_35958 = (state_35960[(2)]);
var state_35960__$1 = state_35960;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35960__$1,inst_35958);
} else {
if((state_val_35961 === (12))){
var inst_35920 = (state_35960[(8)]);
var inst_35948 = cljs.core.vec.call(null,inst_35920);
var state_35960__$1 = state_35960;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35960__$1,(15),out,inst_35948);
} else {
if((state_val_35961 === (2))){
var state_35960__$1 = state_35960;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35960__$1,(4),ch);
} else {
if((state_val_35961 === (11))){
var inst_35928 = (state_35960[(10)]);
var inst_35924 = (state_35960[(9)]);
var inst_35938 = (state_35960[(2)]);
var inst_35939 = [];
var inst_35940 = inst_35939.push(inst_35924);
var inst_35920 = inst_35939;
var inst_35921 = inst_35928;
var state_35960__$1 = (function (){var statearr_35972 = state_35960;
(statearr_35972[(7)] = inst_35921);

(statearr_35972[(11)] = inst_35940);

(statearr_35972[(12)] = inst_35938);

(statearr_35972[(8)] = inst_35920);

return statearr_35972;
})();
var statearr_35973_35997 = state_35960__$1;
(statearr_35973_35997[(2)] = null);

(statearr_35973_35997[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35961 === (9))){
var inst_35920 = (state_35960[(8)]);
var inst_35936 = cljs.core.vec.call(null,inst_35920);
var state_35960__$1 = state_35960;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35960__$1,(11),out,inst_35936);
} else {
if((state_val_35961 === (5))){
var inst_35921 = (state_35960[(7)]);
var inst_35928 = (state_35960[(10)]);
var inst_35924 = (state_35960[(9)]);
var inst_35928__$1 = f.call(null,inst_35924);
var inst_35929 = cljs.core._EQ_.call(null,inst_35928__$1,inst_35921);
var inst_35930 = cljs.core.keyword_identical_QMARK_.call(null,inst_35921,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_35931 = ((inst_35929) || (inst_35930));
var state_35960__$1 = (function (){var statearr_35974 = state_35960;
(statearr_35974[(10)] = inst_35928__$1);

return statearr_35974;
})();
if(cljs.core.truth_(inst_35931)){
var statearr_35975_35998 = state_35960__$1;
(statearr_35975_35998[(1)] = (8));

} else {
var statearr_35976_35999 = state_35960__$1;
(statearr_35976_35999[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35961 === (14))){
var inst_35953 = (state_35960[(2)]);
var inst_35954 = cljs.core.async.close_BANG_.call(null,out);
var state_35960__$1 = (function (){var statearr_35978 = state_35960;
(statearr_35978[(13)] = inst_35953);

return statearr_35978;
})();
var statearr_35979_36000 = state_35960__$1;
(statearr_35979_36000[(2)] = inst_35954);

(statearr_35979_36000[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35961 === (10))){
var inst_35943 = (state_35960[(2)]);
var state_35960__$1 = state_35960;
var statearr_35980_36001 = state_35960__$1;
(statearr_35980_36001[(2)] = inst_35943);

(statearr_35980_36001[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35961 === (8))){
var inst_35928 = (state_35960[(10)]);
var inst_35920 = (state_35960[(8)]);
var inst_35924 = (state_35960[(9)]);
var inst_35933 = inst_35920.push(inst_35924);
var tmp35977 = inst_35920;
var inst_35920__$1 = tmp35977;
var inst_35921 = inst_35928;
var state_35960__$1 = (function (){var statearr_35981 = state_35960;
(statearr_35981[(14)] = inst_35933);

(statearr_35981[(7)] = inst_35921);

(statearr_35981[(8)] = inst_35920__$1);

return statearr_35981;
})();
var statearr_35982_36002 = state_35960__$1;
(statearr_35982_36002[(2)] = null);

(statearr_35982_36002[(1)] = (2));


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
var cljs$core$async$state_machine__33977__auto__ = null;
var cljs$core$async$state_machine__33977__auto____0 = (function (){
var statearr_35983 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35983[(0)] = cljs$core$async$state_machine__33977__auto__);

(statearr_35983[(1)] = (1));

return statearr_35983;
});
var cljs$core$async$state_machine__33977__auto____1 = (function (state_35960){
while(true){
var ret_value__33978__auto__ = (function (){try{while(true){
var result__33979__auto__ = switch__33976__auto__.call(null,state_35960);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33979__auto__;
}
break;
}
}catch (e35984){if((e35984 instanceof Object)){
var ex__33980__auto__ = e35984;
var statearr_35985_36003 = state_35960;
(statearr_35985_36003[(5)] = ex__33980__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35960);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35984;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33978__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36004 = state_35960;
state_35960 = G__36004;
continue;
} else {
return ret_value__33978__auto__;
}
break;
}
});
cljs$core$async$state_machine__33977__auto__ = function(state_35960){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33977__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33977__auto____1.call(this,state_35960);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33977__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33977__auto____0;
cljs$core$async$state_machine__33977__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33977__auto____1;
return cljs$core$async$state_machine__33977__auto__;
})()
})();
var state__34073__auto__ = (function (){var statearr_35986 = f__34072__auto__.call(null);
(statearr_35986[(6)] = c__34071__auto___35988);

return statearr_35986;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34073__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=async.js.map?rel=1593965205598
