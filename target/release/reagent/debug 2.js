// Compiled by ClojureScript 1.10.764 {:static-fns true, :optimize-constants true}
goog.provide('reagent.debug');
goog.require('cljs.core');
goog.require('cljs.core.constants');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__31837__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$warn], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__31837 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31838__i = 0, G__31838__a = new Array(arguments.length -  0);
while (G__31838__i < G__31838__a.length) {G__31838__a[G__31838__i] = arguments[G__31838__i + 0]; ++G__31838__i;}
  args = new cljs.core.IndexedSeq(G__31838__a,0,null);
} 
return G__31837__delegate.call(this,args);};
G__31837.cljs$lang$maxFixedArity = 0;
G__31837.cljs$lang$applyTo = (function (arglist__31839){
var args = cljs.core.seq(arglist__31839);
return G__31837__delegate(args);
});
G__31837.cljs$core$IFn$_invoke$arity$variadic = G__31837__delegate;
return G__31837;
})()
);

(o.error = (function() { 
var G__31840__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$error], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__31840 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31841__i = 0, G__31841__a = new Array(arguments.length -  0);
while (G__31841__i < G__31841__a.length) {G__31841__a[G__31841__i] = arguments[G__31841__i + 0]; ++G__31841__i;}
  args = new cljs.core.IndexedSeq(G__31841__a,0,null);
} 
return G__31840__delegate.call(this,args);};
G__31840.cljs$lang$maxFixedArity = 0;
G__31840.cljs$lang$applyTo = (function (arglist__31842){
var args = cljs.core.seq(arglist__31842);
return G__31840__delegate(args);
});
G__31840.cljs$core$IFn$_invoke$arity$variadic = G__31840__delegate;
return G__31840;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});
