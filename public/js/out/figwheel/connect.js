// Compiled by ClojureScript 1.10.764 {}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('figwheel.client');
figwheel.connect.start = (function figwheel$connect$start(){
var config = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__37688__delegate = function (x__37672__auto__){
if(cljs.core.truth_(interp.core.mount_root)){
return cljs.core.apply.call(null,interp.core.mount_root,x__37672__auto__);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),["Figwheel: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602))," hook '","interp.core/mount-root","' is missing"].join(''));
}
};
var G__37688 = function (var_args){
var x__37672__auto__ = null;
if (arguments.length > 0) {
var G__37689__i = 0, G__37689__a = new Array(arguments.length -  0);
while (G__37689__i < G__37689__a.length) {G__37689__a[G__37689__i] = arguments[G__37689__i + 0]; ++G__37689__i;}
  x__37672__auto__ = new cljs.core.IndexedSeq(G__37689__a,0,null);
} 
return G__37688__delegate.call(this,x__37672__auto__);};
G__37688.cljs$lang$maxFixedArity = 0;
G__37688.cljs$lang$applyTo = (function (arglist__37690){
var x__37672__auto__ = cljs.core.seq(arglist__37690);
return G__37688__delegate(x__37672__auto__);
});
G__37688.cljs$core$IFn$_invoke$arity$variadic = G__37688__delegate;
return G__37688;
})()
,new cljs.core.Keyword(null,"open-urls","open-urls",-1478664930),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["http://localhost:3449/index.html"], null),new cljs.core.Keyword(null,"build-id","build-id",1642831089),"app",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null);
figwheel.client.start.call(null,config);

if(cljs.core.truth_(new cljs.core.Keyword(null,"devcards","devcards",365747130).cljs$core$IFn$_invoke$arity$1(config))){
return devcards.core.start_devcard_ui_BANG__STAR_();
} else {
return null;
}
});
goog.exportSymbol('figwheel.connect.start', figwheel.connect.start);

//# sourceMappingURL=connect.js.map?rel=1593965207440
