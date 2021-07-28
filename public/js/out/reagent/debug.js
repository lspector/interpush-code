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
var G__25293__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__25293 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25294__i = 0, G__25294__a = new Array(arguments.length -  0);
while (G__25294__i < G__25294__a.length) {G__25294__a[G__25294__i] = arguments[G__25294__i + 0]; ++G__25294__i;}
  args = new cljs.core.IndexedSeq(G__25294__a,0,null);
} 
return G__25293__delegate.call(this,args);};
G__25293.cljs$lang$maxFixedArity = 0;
G__25293.cljs$lang$applyTo = (function (arglist__25295){
var args = cljs.core.seq(arglist__25295);
return G__25293__delegate(args);
});
G__25293.cljs$core$IFn$_invoke$arity$variadic = G__25293__delegate;
return G__25293;
})()
);

(o.error = (function() { 
var G__25296__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__25296 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25297__i = 0, G__25297__a = new Array(arguments.length -  0);
while (G__25297__i < G__25297__a.length) {G__25297__a[G__25297__i] = arguments[G__25297__i + 0]; ++G__25297__i;}
  args = new cljs.core.IndexedSeq(G__25297__a,0,null);
} 
return G__25296__delegate.call(this,args);};
G__25296.cljs$lang$maxFixedArity = 0;
G__25296.cljs$lang$applyTo = (function (arglist__25298){
var args = cljs.core.seq(arglist__25298);
return G__25296__delegate(args);
});
G__25296.cljs$core$IFn$_invoke$arity$variadic = G__25296__delegate;
return G__25296;
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

//# sourceMappingURL=debug.js.map?rel=1627432841254
