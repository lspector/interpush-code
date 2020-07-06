// Compiled by ClojureScript 1.10.764 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__29163__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__29163 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29164__i = 0, G__29164__a = new Array(arguments.length -  0);
while (G__29164__i < G__29164__a.length) {G__29164__a[G__29164__i] = arguments[G__29164__i + 0]; ++G__29164__i;}
  args = new cljs.core.IndexedSeq(G__29164__a,0,null);
} 
return G__29163__delegate.call(this,args);};
G__29163.cljs$lang$maxFixedArity = 0;
G__29163.cljs$lang$applyTo = (function (arglist__29165){
var args = cljs.core.seq(arglist__29165);
return G__29163__delegate(args);
});
G__29163.cljs$core$IFn$_invoke$arity$variadic = G__29163__delegate;
return G__29163;
})()
);

(o.error = (function() { 
var G__29166__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__29166 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29167__i = 0, G__29167__a = new Array(arguments.length -  0);
while (G__29167__i < G__29167__a.length) {G__29167__a[G__29167__i] = arguments[G__29167__i + 0]; ++G__29167__i;}
  args = new cljs.core.IndexedSeq(G__29167__a,0,null);
} 
return G__29166__delegate.call(this,args);};
G__29166.cljs$lang$maxFixedArity = 0;
G__29166.cljs$lang$applyTo = (function (arglist__29168){
var args = cljs.core.seq(arglist__29168);
return G__29166__delegate(args);
});
G__29166.cljs$core$IFn$_invoke$arity$variadic = G__29166__delegate;
return G__29166;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1593965193941
