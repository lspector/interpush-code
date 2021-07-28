// Compiled by ClojureScript 1.10.764 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined')){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.debug_loader_QMARK_ = (function figwheel$client$file_reloading$debug_loader_QMARK_(){
return (!((goog.debugLoader_ == null)));
});
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__4126__auto__ = ((cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && ((((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string'))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372))));
if(or__4126__auto__){
return or__4126__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (ns){

return goog.debugLoader_.getPathFromDeps_(ns);
}):(function (ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
}));
figwheel.client.file_reloading.provided_QMARK_ = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (ns){
return goog.getObjectByName(ns);
}):(function (ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
}));
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(ns){
return ((cljs.core._EQ_.call(null,"goog",ns)) || (cljs.core._EQ_.call(null,"cljs.core",ns)) || (cljs.core._EQ_.call(null,"cljs.nodejs",ns)) || (goog.string.startsWith(ns,"clojure.")) || (goog.string.startsWith(ns,"goog.")));
});
figwheel.client.file_reloading.base_requires_for_ns_path = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (path){
var G__30322 = goog.object.get(goog.debugLoader_.dependencies_,path);
if((G__30322 == null)){
return null;
} else {
return goog.object.get(G__30322,"requires");
}
}):(function (path){
var G__30323 = goog.object.get(goog.dependencies_.requires,path);
if((G__30323 == null)){
return null;
} else {
return goog.object.getKeys(G__30323);
}
}));
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__30324_SHARP_){
return (!(figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__30324_SHARP_)));
}),figwheel.client.file_reloading.base_requires_for_ns_path.call(null,figwheel.client.file_reloading.name__GT_path.call(null,ns))));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependency_data !== 'undefined')){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (_,___$1){
return null;
}):(function (path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
}));
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (){
return null;
}):(function (){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,(function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
}));
}));
figwheel.client.file_reloading.path__GT_name = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (path){
var G__30325 = goog.object.get(goog.debugLoader_.dependencies_,path);
var G__30325__$1 = (((G__30325 == null))?null:goog.object.get(G__30325,"provides"));
if((G__30325__$1 == null)){
return null;
} else {
return cljs.core.set.call(null,G__30325__$1);
}
}):(function (path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
}));
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),parent_ns);
});
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (){
return goog.object.forEach(goog.object.filter(goog.debugLoader_.dependencies_,(function (dep,path,_){
return cljs.core.not.call(null,cljs.core.some.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_,goog.object.get(dep,"provides")));
})),(function (dep,path,_){
var provides = goog.object.get(dep,"provides");
var requires = goog.object.get(dep,"requires");
var seq__30326 = cljs.core.seq.call(null,provides);
var chunk__30327 = null;
var count__30328 = (0);
var i__30329 = (0);
while(true){
if((i__30329 < count__30328)){
var prov = cljs.core._nth.call(null,chunk__30327,i__30329);
var seq__30338_30350 = cljs.core.seq.call(null,requires);
var chunk__30339_30351 = null;
var count__30340_30352 = (0);
var i__30341_30353 = (0);
while(true){
if((i__30341_30353 < count__30340_30352)){
var req_30354 = cljs.core._nth.call(null,chunk__30339_30351,i__30341_30353);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30354,prov);


var G__30355 = seq__30338_30350;
var G__30356 = chunk__30339_30351;
var G__30357 = count__30340_30352;
var G__30358 = (i__30341_30353 + (1));
seq__30338_30350 = G__30355;
chunk__30339_30351 = G__30356;
count__30340_30352 = G__30357;
i__30341_30353 = G__30358;
continue;
} else {
var temp__5735__auto___30359 = cljs.core.seq.call(null,seq__30338_30350);
if(temp__5735__auto___30359){
var seq__30338_30360__$1 = temp__5735__auto___30359;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30338_30360__$1)){
var c__4556__auto___30361 = cljs.core.chunk_first.call(null,seq__30338_30360__$1);
var G__30362 = cljs.core.chunk_rest.call(null,seq__30338_30360__$1);
var G__30363 = c__4556__auto___30361;
var G__30364 = cljs.core.count.call(null,c__4556__auto___30361);
var G__30365 = (0);
seq__30338_30350 = G__30362;
chunk__30339_30351 = G__30363;
count__30340_30352 = G__30364;
i__30341_30353 = G__30365;
continue;
} else {
var req_30366 = cljs.core.first.call(null,seq__30338_30360__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30366,prov);


var G__30367 = cljs.core.next.call(null,seq__30338_30360__$1);
var G__30368 = null;
var G__30369 = (0);
var G__30370 = (0);
seq__30338_30350 = G__30367;
chunk__30339_30351 = G__30368;
count__30340_30352 = G__30369;
i__30341_30353 = G__30370;
continue;
}
} else {
}
}
break;
}


var G__30371 = seq__30326;
var G__30372 = chunk__30327;
var G__30373 = count__30328;
var G__30374 = (i__30329 + (1));
seq__30326 = G__30371;
chunk__30327 = G__30372;
count__30328 = G__30373;
i__30329 = G__30374;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__30326);
if(temp__5735__auto__){
var seq__30326__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30326__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__30326__$1);
var G__30375 = cljs.core.chunk_rest.call(null,seq__30326__$1);
var G__30376 = c__4556__auto__;
var G__30377 = cljs.core.count.call(null,c__4556__auto__);
var G__30378 = (0);
seq__30326 = G__30375;
chunk__30327 = G__30376;
count__30328 = G__30377;
i__30329 = G__30378;
continue;
} else {
var prov = cljs.core.first.call(null,seq__30326__$1);
var seq__30342_30379 = cljs.core.seq.call(null,requires);
var chunk__30343_30380 = null;
var count__30344_30381 = (0);
var i__30345_30382 = (0);
while(true){
if((i__30345_30382 < count__30344_30381)){
var req_30383 = cljs.core._nth.call(null,chunk__30343_30380,i__30345_30382);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30383,prov);


var G__30384 = seq__30342_30379;
var G__30385 = chunk__30343_30380;
var G__30386 = count__30344_30381;
var G__30387 = (i__30345_30382 + (1));
seq__30342_30379 = G__30384;
chunk__30343_30380 = G__30385;
count__30344_30381 = G__30386;
i__30345_30382 = G__30387;
continue;
} else {
var temp__5735__auto___30388__$1 = cljs.core.seq.call(null,seq__30342_30379);
if(temp__5735__auto___30388__$1){
var seq__30342_30389__$1 = temp__5735__auto___30388__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30342_30389__$1)){
var c__4556__auto___30390 = cljs.core.chunk_first.call(null,seq__30342_30389__$1);
var G__30391 = cljs.core.chunk_rest.call(null,seq__30342_30389__$1);
var G__30392 = c__4556__auto___30390;
var G__30393 = cljs.core.count.call(null,c__4556__auto___30390);
var G__30394 = (0);
seq__30342_30379 = G__30391;
chunk__30343_30380 = G__30392;
count__30344_30381 = G__30393;
i__30345_30382 = G__30394;
continue;
} else {
var req_30395 = cljs.core.first.call(null,seq__30342_30389__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30395,prov);


var G__30396 = cljs.core.next.call(null,seq__30342_30389__$1);
var G__30397 = null;
var G__30398 = (0);
var G__30399 = (0);
seq__30342_30379 = G__30396;
chunk__30343_30380 = G__30397;
count__30344_30381 = G__30398;
i__30345_30382 = G__30399;
continue;
}
} else {
}
}
break;
}


var G__30400 = cljs.core.next.call(null,seq__30326__$1);
var G__30401 = null;
var G__30402 = (0);
var G__30403 = (0);
seq__30326 = G__30400;
chunk__30327 = G__30401;
count__30328 = G__30402;
i__30329 = G__30403;
continue;
}
} else {
return null;
}
}
break;
}
}));
}):(function (){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,(function (deps,path,_){
var seq__30346 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,path));
var chunk__30347 = null;
var count__30348 = (0);
var i__30349 = (0);
while(true){
if((i__30349 < count__30348)){
var prov = cljs.core._nth.call(null,chunk__30347,i__30349);
goog.object.forEach(deps,((function (seq__30346,chunk__30347,count__30348,i__30349,prov,requires){
return (function (___$1,req,___$2){
return figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req,prov);
});})(seq__30346,chunk__30347,count__30348,i__30349,prov,requires))
);


var G__30404 = seq__30346;
var G__30405 = chunk__30347;
var G__30406 = count__30348;
var G__30407 = (i__30349 + (1));
seq__30346 = G__30404;
chunk__30347 = G__30405;
count__30348 = G__30406;
i__30349 = G__30407;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__30346);
if(temp__5735__auto__){
var seq__30346__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30346__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__30346__$1);
var G__30408 = cljs.core.chunk_rest.call(null,seq__30346__$1);
var G__30409 = c__4556__auto__;
var G__30410 = cljs.core.count.call(null,c__4556__auto__);
var G__30411 = (0);
seq__30346 = G__30408;
chunk__30347 = G__30409;
count__30348 = G__30410;
i__30349 = G__30411;
continue;
} else {
var prov = cljs.core.first.call(null,seq__30346__$1);
goog.object.forEach(deps,((function (seq__30346,chunk__30347,count__30348,i__30349,prov,seq__30346__$1,temp__5735__auto__,requires){
return (function (___$1,req,___$2){
return figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req,prov);
});})(seq__30346,chunk__30347,count__30348,i__30349,prov,seq__30346__$1,temp__5735__auto__,requires))
);


var G__30412 = cljs.core.next.call(null,seq__30346__$1);
var G__30413 = null;
var G__30414 = (0);
var G__30415 = (0);
seq__30346 = G__30412;
chunk__30347 = G__30413;
count__30348 = G__30414;
i__30349 = G__30415;
continue;
}
} else {
return null;
}
}
break;
}
}));
}));
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__30416){
var vec__30417 = p__30416;
var _ = cljs.core.nth.call(null,vec__30417,(0),null);
var v = cljs.core.nth.call(null,vec__30417,(1),null);
var and__4115__auto__ = v;
if(cljs.core.truth_(and__4115__auto__)){
return v.call(null,dep);
} else {
return and__4115__auto__;
}
}),cljs.core.filter.call(null,(function (p__30420){
var vec__30421 = p__30420;
var k = cljs.core.nth.call(null,vec__30421,(0),null);
var v = cljs.core.nth.call(null,vec__30421,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});
var topo_sort_STAR_ = (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__30433_30441 = cljs.core.seq.call(null,deps);
var chunk__30434_30442 = null;
var count__30435_30443 = (0);
var i__30436_30444 = (0);
while(true){
if((i__30436_30444 < count__30435_30443)){
var dep_30445 = cljs.core._nth.call(null,chunk__30434_30442,i__30436_30444);
if(cljs.core.truth_((function (){var and__4115__auto__ = dep_30445;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_30445));
} else {
return and__4115__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_30445,(depth + (1)),state);
} else {
}


var G__30446 = seq__30433_30441;
var G__30447 = chunk__30434_30442;
var G__30448 = count__30435_30443;
var G__30449 = (i__30436_30444 + (1));
seq__30433_30441 = G__30446;
chunk__30434_30442 = G__30447;
count__30435_30443 = G__30448;
i__30436_30444 = G__30449;
continue;
} else {
var temp__5735__auto___30450 = cljs.core.seq.call(null,seq__30433_30441);
if(temp__5735__auto___30450){
var seq__30433_30451__$1 = temp__5735__auto___30450;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30433_30451__$1)){
var c__4556__auto___30452 = cljs.core.chunk_first.call(null,seq__30433_30451__$1);
var G__30453 = cljs.core.chunk_rest.call(null,seq__30433_30451__$1);
var G__30454 = c__4556__auto___30452;
var G__30455 = cljs.core.count.call(null,c__4556__auto___30452);
var G__30456 = (0);
seq__30433_30441 = G__30453;
chunk__30434_30442 = G__30454;
count__30435_30443 = G__30455;
i__30436_30444 = G__30456;
continue;
} else {
var dep_30457 = cljs.core.first.call(null,seq__30433_30451__$1);
if(cljs.core.truth_((function (){var and__4115__auto__ = dep_30457;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_30457));
} else {
return and__4115__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_30457,(depth + (1)),state);
} else {
}


var G__30458 = cljs.core.next.call(null,seq__30433_30451__$1);
var G__30459 = null;
var G__30460 = (0);
var G__30461 = (0);
seq__30433_30441 = G__30458;
chunk__30434_30442 = G__30459;
count__30435_30443 = G__30460;
i__30436_30444 = G__30461;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;
var elim_dups_STAR_ = (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__30437){
var vec__30438 = p__30437;
var seq__30439 = cljs.core.seq.call(null,vec__30438);
var first__30440 = cljs.core.first.call(null,seq__30439);
var seq__30439__$1 = cljs.core.next.call(null,seq__30439);
var x = first__30440;
var xs = seq__30439__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,(function (p1__30424_SHARP_){
return clojure.set.difference.call(null,p1__30424_SHARP_,x);
}),xs)));
}
});
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.debugLoader_.written_,path);

return goog.object.remove(goog.debugLoader_.written_,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
}):(function (ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
}));
figwheel.client.file_reloading.resolve_ns = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?figwheel.client.file_reloading.name__GT_path:(function (p1__30462_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,p1__30462_SHARP_))].join('');
}));
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__30463 = cljs.core.seq.call(null,provides);
var chunk__30464 = null;
var count__30465 = (0);
var i__30466 = (0);
while(true){
if((i__30466 < count__30465)){
var prov = cljs.core._nth.call(null,chunk__30464,i__30466);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__30475_30483 = cljs.core.seq.call(null,requires);
var chunk__30476_30484 = null;
var count__30477_30485 = (0);
var i__30478_30486 = (0);
while(true){
if((i__30478_30486 < count__30477_30485)){
var req_30487 = cljs.core._nth.call(null,chunk__30476_30484,i__30478_30486);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30487,prov);


var G__30488 = seq__30475_30483;
var G__30489 = chunk__30476_30484;
var G__30490 = count__30477_30485;
var G__30491 = (i__30478_30486 + (1));
seq__30475_30483 = G__30488;
chunk__30476_30484 = G__30489;
count__30477_30485 = G__30490;
i__30478_30486 = G__30491;
continue;
} else {
var temp__5735__auto___30492 = cljs.core.seq.call(null,seq__30475_30483);
if(temp__5735__auto___30492){
var seq__30475_30493__$1 = temp__5735__auto___30492;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30475_30493__$1)){
var c__4556__auto___30494 = cljs.core.chunk_first.call(null,seq__30475_30493__$1);
var G__30495 = cljs.core.chunk_rest.call(null,seq__30475_30493__$1);
var G__30496 = c__4556__auto___30494;
var G__30497 = cljs.core.count.call(null,c__4556__auto___30494);
var G__30498 = (0);
seq__30475_30483 = G__30495;
chunk__30476_30484 = G__30496;
count__30477_30485 = G__30497;
i__30478_30486 = G__30498;
continue;
} else {
var req_30499 = cljs.core.first.call(null,seq__30475_30493__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30499,prov);


var G__30500 = cljs.core.next.call(null,seq__30475_30493__$1);
var G__30501 = null;
var G__30502 = (0);
var G__30503 = (0);
seq__30475_30483 = G__30500;
chunk__30476_30484 = G__30501;
count__30477_30485 = G__30502;
i__30478_30486 = G__30503;
continue;
}
} else {
}
}
break;
}


var G__30504 = seq__30463;
var G__30505 = chunk__30464;
var G__30506 = count__30465;
var G__30507 = (i__30466 + (1));
seq__30463 = G__30504;
chunk__30464 = G__30505;
count__30465 = G__30506;
i__30466 = G__30507;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__30463);
if(temp__5735__auto__){
var seq__30463__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30463__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__30463__$1);
var G__30508 = cljs.core.chunk_rest.call(null,seq__30463__$1);
var G__30509 = c__4556__auto__;
var G__30510 = cljs.core.count.call(null,c__4556__auto__);
var G__30511 = (0);
seq__30463 = G__30508;
chunk__30464 = G__30509;
count__30465 = G__30510;
i__30466 = G__30511;
continue;
} else {
var prov = cljs.core.first.call(null,seq__30463__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__30479_30512 = cljs.core.seq.call(null,requires);
var chunk__30480_30513 = null;
var count__30481_30514 = (0);
var i__30482_30515 = (0);
while(true){
if((i__30482_30515 < count__30481_30514)){
var req_30516 = cljs.core._nth.call(null,chunk__30480_30513,i__30482_30515);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30516,prov);


var G__30517 = seq__30479_30512;
var G__30518 = chunk__30480_30513;
var G__30519 = count__30481_30514;
var G__30520 = (i__30482_30515 + (1));
seq__30479_30512 = G__30517;
chunk__30480_30513 = G__30518;
count__30481_30514 = G__30519;
i__30482_30515 = G__30520;
continue;
} else {
var temp__5735__auto___30521__$1 = cljs.core.seq.call(null,seq__30479_30512);
if(temp__5735__auto___30521__$1){
var seq__30479_30522__$1 = temp__5735__auto___30521__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30479_30522__$1)){
var c__4556__auto___30523 = cljs.core.chunk_first.call(null,seq__30479_30522__$1);
var G__30524 = cljs.core.chunk_rest.call(null,seq__30479_30522__$1);
var G__30525 = c__4556__auto___30523;
var G__30526 = cljs.core.count.call(null,c__4556__auto___30523);
var G__30527 = (0);
seq__30479_30512 = G__30524;
chunk__30480_30513 = G__30525;
count__30481_30514 = G__30526;
i__30482_30515 = G__30527;
continue;
} else {
var req_30528 = cljs.core.first.call(null,seq__30479_30522__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30528,prov);


var G__30529 = cljs.core.next.call(null,seq__30479_30522__$1);
var G__30530 = null;
var G__30531 = (0);
var G__30532 = (0);
seq__30479_30512 = G__30529;
chunk__30480_30513 = G__30530;
count__30481_30514 = G__30531;
i__30482_30515 = G__30532;
continue;
}
} else {
}
}
break;
}


var G__30533 = cljs.core.next.call(null,seq__30463__$1);
var G__30534 = null;
var G__30535 = (0);
var G__30536 = (0);
seq__30463 = G__30533;
chunk__30464 = G__30534;
count__30465 = G__30535;
i__30466 = G__30536;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
(goog.require = figwheel.client.file_reloading.figwheel_require);

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__30537_30541 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__30538_30542 = null;
var count__30539_30543 = (0);
var i__30540_30544 = (0);
while(true){
if((i__30540_30544 < count__30539_30543)){
var ns_30545 = cljs.core._nth.call(null,chunk__30538_30542,i__30540_30544);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_30545);


var G__30546 = seq__30537_30541;
var G__30547 = chunk__30538_30542;
var G__30548 = count__30539_30543;
var G__30549 = (i__30540_30544 + (1));
seq__30537_30541 = G__30546;
chunk__30538_30542 = G__30547;
count__30539_30543 = G__30548;
i__30540_30544 = G__30549;
continue;
} else {
var temp__5735__auto___30550 = cljs.core.seq.call(null,seq__30537_30541);
if(temp__5735__auto___30550){
var seq__30537_30551__$1 = temp__5735__auto___30550;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30537_30551__$1)){
var c__4556__auto___30552 = cljs.core.chunk_first.call(null,seq__30537_30551__$1);
var G__30553 = cljs.core.chunk_rest.call(null,seq__30537_30551__$1);
var G__30554 = c__4556__auto___30552;
var G__30555 = cljs.core.count.call(null,c__4556__auto___30552);
var G__30556 = (0);
seq__30537_30541 = G__30553;
chunk__30538_30542 = G__30554;
count__30539_30543 = G__30555;
i__30540_30544 = G__30556;
continue;
} else {
var ns_30557 = cljs.core.first.call(null,seq__30537_30551__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_30557);


var G__30558 = cljs.core.next.call(null,seq__30537_30551__$1);
var G__30559 = null;
var G__30560 = (0);
var G__30561 = (0);
seq__30537_30541 = G__30558;
chunk__30538_30542 = G__30559;
count__30539_30543 = G__30560;
i__30540_30544 = G__30561;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
(goog.require_figwheel_backup_ = (function (){var or__4126__auto__ = goog.require__;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return goog.require;
}
})());

(goog.isProvided_ = (function (name){
return false;
}));

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

(goog.addDependency_figwheel_backup_ = goog.addDependency);

(goog.addDependency = (function() { 
var G__30562__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__30562 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30563__i = 0, G__30563__a = new Array(arguments.length -  0);
while (G__30563__i < G__30563__a.length) {G__30563__a[G__30563__i] = arguments[G__30563__i + 0]; ++G__30563__i;}
  args = new cljs.core.IndexedSeq(G__30563__a,0,null);
} 
return G__30562__delegate.call(this,args);};
G__30562.cljs$lang$maxFixedArity = 0;
G__30562.cljs$lang$applyTo = (function (arglist__30564){
var args = cljs.core.seq(arglist__30564);
return G__30562__delegate(args);
});
G__30562.cljs$core$IFn$_invoke$arity$variadic = G__30562__delegate;
return G__30562;
})()
);

goog.constructNamespace_("cljs.user");

(goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload);

return (goog.require = figwheel.client.file_reloading.figwheel_require);
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined')){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__30565_SHARP_,p2__30566_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__30565_SHARP_)),p2__30566_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__30567_SHARP_,p2__30568_SHARP_){
return goog.net.jsloader.load(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__30567_SHARP_),p2__30568_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__30569 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__30569.addCallback((function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
}));

G__30569.addErrback((function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
}));

return G__30569;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e30570){if((e30570 instanceof Error)){
var e = e30570;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e30570;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,(function (v,k,o){
return goog.string.endsWith(k,util_pattern);
}));
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e30571){if((e30571 instanceof Error)){
var e = e30571;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e30571;

}
}})());
});
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__30572 = cljs.core._EQ_;
var expr__30573 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__30572.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__30573))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__30572.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__30573))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__30572.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__30573))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return (function (a,b){
throw "Reload not defined for this platform";
});
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__30575,callback){
var map__30576 = p__30575;
var map__30576__$1 = (((((!((map__30576 == null))))?(((((map__30576.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30576.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30576):map__30576);
var file_msg = map__30576__$1;
var request_url = cljs.core.get.call(null,map__30576__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__4126__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,(function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
}));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_chan !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined')){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined')){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),(function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
}));

return out;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reloader_loop !== 'undefined')){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__28304__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__28305__auto__ = (function (){var switch__28209__auto__ = (function (state_30614){
var state_val_30615 = (state_30614[(1)]);
if((state_val_30615 === (7))){
var inst_30610 = (state_30614[(2)]);
var state_30614__$1 = state_30614;
var statearr_30616_30642 = state_30614__$1;
(statearr_30616_30642[(2)] = inst_30610);

(statearr_30616_30642[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30615 === (1))){
var state_30614__$1 = state_30614;
var statearr_30617_30643 = state_30614__$1;
(statearr_30617_30643[(2)] = null);

(statearr_30617_30643[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30615 === (4))){
var inst_30580 = (state_30614[(7)]);
var inst_30580__$1 = (state_30614[(2)]);
var state_30614__$1 = (function (){var statearr_30618 = state_30614;
(statearr_30618[(7)] = inst_30580__$1);

return statearr_30618;
})();
if(cljs.core.truth_(inst_30580__$1)){
var statearr_30619_30644 = state_30614__$1;
(statearr_30619_30644[(1)] = (5));

} else {
var statearr_30620_30645 = state_30614__$1;
(statearr_30620_30645[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30615 === (15))){
var inst_30593 = (state_30614[(8)]);
var inst_30595 = (state_30614[(9)]);
var inst_30597 = inst_30595.call(null,inst_30593);
var state_30614__$1 = state_30614;
var statearr_30621_30646 = state_30614__$1;
(statearr_30621_30646[(2)] = inst_30597);

(statearr_30621_30646[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30615 === (13))){
var inst_30604 = (state_30614[(2)]);
var state_30614__$1 = state_30614;
var statearr_30622_30647 = state_30614__$1;
(statearr_30622_30647[(2)] = inst_30604);

(statearr_30622_30647[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30615 === (6))){
var state_30614__$1 = state_30614;
var statearr_30623_30648 = state_30614__$1;
(statearr_30623_30648[(2)] = null);

(statearr_30623_30648[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30615 === (17))){
var inst_30601 = (state_30614[(2)]);
var state_30614__$1 = state_30614;
var statearr_30624_30649 = state_30614__$1;
(statearr_30624_30649[(2)] = inst_30601);

(statearr_30624_30649[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30615 === (3))){
var inst_30612 = (state_30614[(2)]);
var state_30614__$1 = state_30614;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30614__$1,inst_30612);
} else {
if((state_val_30615 === (12))){
var state_30614__$1 = state_30614;
var statearr_30625_30650 = state_30614__$1;
(statearr_30625_30650[(2)] = null);

(statearr_30625_30650[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30615 === (2))){
var state_30614__$1 = state_30614;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30614__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_30615 === (11))){
var inst_30585 = (state_30614[(10)]);
var inst_30591 = figwheel.client.file_reloading.blocking_load.call(null,inst_30585);
var state_30614__$1 = state_30614;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30614__$1,(14),inst_30591);
} else {
if((state_val_30615 === (9))){
var inst_30585 = (state_30614[(10)]);
var state_30614__$1 = state_30614;
if(cljs.core.truth_(inst_30585)){
var statearr_30626_30651 = state_30614__$1;
(statearr_30626_30651[(1)] = (11));

} else {
var statearr_30627_30652 = state_30614__$1;
(statearr_30627_30652[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30615 === (5))){
var inst_30580 = (state_30614[(7)]);
var inst_30586 = (state_30614[(11)]);
var inst_30585 = cljs.core.nth.call(null,inst_30580,(0),null);
var inst_30586__$1 = cljs.core.nth.call(null,inst_30580,(1),null);
var state_30614__$1 = (function (){var statearr_30628 = state_30614;
(statearr_30628[(11)] = inst_30586__$1);

(statearr_30628[(10)] = inst_30585);

return statearr_30628;
})();
if(cljs.core.truth_(inst_30586__$1)){
var statearr_30629_30653 = state_30614__$1;
(statearr_30629_30653[(1)] = (8));

} else {
var statearr_30630_30654 = state_30614__$1;
(statearr_30630_30654[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30615 === (14))){
var inst_30585 = (state_30614[(10)]);
var inst_30595 = (state_30614[(9)]);
var inst_30593 = (state_30614[(2)]);
var inst_30594 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_30595__$1 = cljs.core.get.call(null,inst_30594,inst_30585);
var state_30614__$1 = (function (){var statearr_30631 = state_30614;
(statearr_30631[(8)] = inst_30593);

(statearr_30631[(9)] = inst_30595__$1);

return statearr_30631;
})();
if(cljs.core.truth_(inst_30595__$1)){
var statearr_30632_30655 = state_30614__$1;
(statearr_30632_30655[(1)] = (15));

} else {
var statearr_30633_30656 = state_30614__$1;
(statearr_30633_30656[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30615 === (16))){
var inst_30593 = (state_30614[(8)]);
var inst_30599 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_30593);
var state_30614__$1 = state_30614;
var statearr_30634_30657 = state_30614__$1;
(statearr_30634_30657[(2)] = inst_30599);

(statearr_30634_30657[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30615 === (10))){
var inst_30606 = (state_30614[(2)]);
var state_30614__$1 = (function (){var statearr_30635 = state_30614;
(statearr_30635[(12)] = inst_30606);

return statearr_30635;
})();
var statearr_30636_30658 = state_30614__$1;
(statearr_30636_30658[(2)] = null);

(statearr_30636_30658[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30615 === (8))){
var inst_30586 = (state_30614[(11)]);
var inst_30588 = eval(inst_30586);
var state_30614__$1 = state_30614;
var statearr_30637_30659 = state_30614__$1;
(statearr_30637_30659[(2)] = inst_30588);

(statearr_30637_30659[(1)] = (10));


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
});
return (function() {
var figwheel$client$file_reloading$state_machine__28210__auto__ = null;
var figwheel$client$file_reloading$state_machine__28210__auto____0 = (function (){
var statearr_30638 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30638[(0)] = figwheel$client$file_reloading$state_machine__28210__auto__);

(statearr_30638[(1)] = (1));

return statearr_30638;
});
var figwheel$client$file_reloading$state_machine__28210__auto____1 = (function (state_30614){
while(true){
var ret_value__28211__auto__ = (function (){try{while(true){
var result__28212__auto__ = switch__28209__auto__.call(null,state_30614);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28212__auto__;
}
break;
}
}catch (e30639){if((e30639 instanceof Object)){
var ex__28213__auto__ = e30639;
var statearr_30640_30660 = state_30614;
(statearr_30640_30660[(5)] = ex__28213__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30614);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30639;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30661 = state_30614;
state_30614 = G__30661;
continue;
} else {
return ret_value__28211__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__28210__auto__ = function(state_30614){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__28210__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__28210__auto____1.call(this,state_30614);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__28210__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__28210__auto____0;
figwheel$client$file_reloading$state_machine__28210__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__28210__auto____1;
return figwheel$client$file_reloading$state_machine__28210__auto__;
})()
})();
var state__28306__auto__ = (function (){var statearr_30641 = f__28305__auto__.call(null);
(statearr_30641[(6)] = c__28304__auto__);

return statearr_30641;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28306__auto__);
}));

return c__28304__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__30663 = arguments.length;
switch (G__30663) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
}));

(figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
}));

(figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2);

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__30665,callback){
var map__30666 = p__30665;
var map__30666__$1 = (((((!((map__30666 == null))))?(((((map__30666.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30666.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30666):map__30666);
var file_msg = map__30666__$1;
var namespace = cljs.core.get.call(null,map__30666__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,(function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
}));

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__30668){
var map__30669 = p__30668;
var map__30669__$1 = (((((!((map__30669 == null))))?(((((map__30669.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30669.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30669):map__30669);
var file_msg = map__30669__$1;
var namespace = cljs.core.get.call(null,map__30669__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null)));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__30671){
var map__30672 = p__30671;
var map__30672__$1 = (((((!((map__30672 == null))))?(((((map__30672.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30672.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30672):map__30672);
var file_msg = map__30672__$1;
var namespace = cljs.core.get.call(null,map__30672__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if(cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg))){
var or__4126__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
var or__4126__auto____$2 = figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
if(cljs.core.truth_(or__4126__auto____$2)){
return or__4126__auto____$2;
} else {
return figwheel.client.file_reloading.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return false;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__30674,callback){
var map__30675 = p__30674;
var map__30675__$1 = (((((!((map__30675 == null))))?(((((map__30675.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30675.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30675):map__30675);
var file_msg = map__30675__$1;
var request_url = cljs.core.get.call(null,map__30675__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__30675__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,(function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
}));

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__28304__auto___30725 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__28305__auto__ = (function (){var switch__28209__auto__ = (function (state_30710){
var state_val_30711 = (state_30710[(1)]);
if((state_val_30711 === (1))){
var inst_30684 = cljs.core.seq.call(null,files);
var inst_30685 = cljs.core.first.call(null,inst_30684);
var inst_30686 = cljs.core.next.call(null,inst_30684);
var inst_30687 = files;
var state_30710__$1 = (function (){var statearr_30712 = state_30710;
(statearr_30712[(7)] = inst_30687);

(statearr_30712[(8)] = inst_30685);

(statearr_30712[(9)] = inst_30686);

return statearr_30712;
})();
var statearr_30713_30726 = state_30710__$1;
(statearr_30713_30726[(2)] = null);

(statearr_30713_30726[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30711 === (2))){
var inst_30687 = (state_30710[(7)]);
var inst_30693 = (state_30710[(10)]);
var inst_30692 = cljs.core.seq.call(null,inst_30687);
var inst_30693__$1 = cljs.core.first.call(null,inst_30692);
var inst_30694 = cljs.core.next.call(null,inst_30692);
var inst_30695 = (inst_30693__$1 == null);
var inst_30696 = cljs.core.not.call(null,inst_30695);
var state_30710__$1 = (function (){var statearr_30714 = state_30710;
(statearr_30714[(11)] = inst_30694);

(statearr_30714[(10)] = inst_30693__$1);

return statearr_30714;
})();
if(inst_30696){
var statearr_30715_30727 = state_30710__$1;
(statearr_30715_30727[(1)] = (4));

} else {
var statearr_30716_30728 = state_30710__$1;
(statearr_30716_30728[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30711 === (3))){
var inst_30708 = (state_30710[(2)]);
var state_30710__$1 = state_30710;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30710__$1,inst_30708);
} else {
if((state_val_30711 === (4))){
var inst_30693 = (state_30710[(10)]);
var inst_30698 = figwheel.client.file_reloading.reload_js_file.call(null,inst_30693);
var state_30710__$1 = state_30710;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30710__$1,(7),inst_30698);
} else {
if((state_val_30711 === (5))){
var inst_30704 = cljs.core.async.close_BANG_.call(null,out);
var state_30710__$1 = state_30710;
var statearr_30717_30729 = state_30710__$1;
(statearr_30717_30729[(2)] = inst_30704);

(statearr_30717_30729[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30711 === (6))){
var inst_30706 = (state_30710[(2)]);
var state_30710__$1 = state_30710;
var statearr_30718_30730 = state_30710__$1;
(statearr_30718_30730[(2)] = inst_30706);

(statearr_30718_30730[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30711 === (7))){
var inst_30694 = (state_30710[(11)]);
var inst_30700 = (state_30710[(2)]);
var inst_30701 = cljs.core.async.put_BANG_.call(null,out,inst_30700);
var inst_30687 = inst_30694;
var state_30710__$1 = (function (){var statearr_30719 = state_30710;
(statearr_30719[(7)] = inst_30687);

(statearr_30719[(12)] = inst_30701);

return statearr_30719;
})();
var statearr_30720_30731 = state_30710__$1;
(statearr_30720_30731[(2)] = null);

(statearr_30720_30731[(1)] = (2));


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
});
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28210__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28210__auto____0 = (function (){
var statearr_30721 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30721[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28210__auto__);

(statearr_30721[(1)] = (1));

return statearr_30721;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28210__auto____1 = (function (state_30710){
while(true){
var ret_value__28211__auto__ = (function (){try{while(true){
var result__28212__auto__ = switch__28209__auto__.call(null,state_30710);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28212__auto__;
}
break;
}
}catch (e30722){if((e30722 instanceof Object)){
var ex__28213__auto__ = e30722;
var statearr_30723_30732 = state_30710;
(statearr_30723_30732[(5)] = ex__28213__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30710);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30722;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30733 = state_30710;
state_30710 = G__30733;
continue;
} else {
return ret_value__28211__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28210__auto__ = function(state_30710){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28210__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28210__auto____1.call(this,state_30710);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28210__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28210__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28210__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28210__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28210__auto__;
})()
})();
var state__28306__auto__ = (function (){var statearr_30724 = f__28305__auto__.call(null);
(statearr_30724[(6)] = c__28304__auto___30725);

return statearr_30724;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28306__auto__);
}));


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__30734,opts){
var map__30735 = p__30734;
var map__30735__$1 = (((((!((map__30735 == null))))?(((((map__30735.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30735.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30735):map__30735);
var eval_body = cljs.core.get.call(null,map__30735__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__30735__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__4115__auto__ = eval_body;
if(cljs.core.truth_(and__4115__auto__)){
return typeof eval_body === 'string';
} else {
return and__4115__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e30737){var e = e30737;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,(function (n){
var temp__5733__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__30738_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__30738_SHARP_),n);
}),files));
if(cljs.core.truth_(temp__5733__auto__)){
var file_msg = temp__5733__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
}),deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__30739){
var vec__30740 = p__30739;
var k = cljs.core.nth.call(null,vec__30740,(0),null);
var v = cljs.core.nth.call(null,vec__30740,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__30743){
var vec__30744 = p__30743;
var k = cljs.core.nth.call(null,vec__30744,(0),null);
var v = cljs.core.nth.call(null,vec__30744,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__30750,p__30751){
var map__30752 = p__30750;
var map__30752__$1 = (((((!((map__30752 == null))))?(((((map__30752.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30752.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30752):map__30752);
var opts = map__30752__$1;
var before_jsload = cljs.core.get.call(null,map__30752__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__30752__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__30752__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__30753 = p__30751;
var map__30753__$1 = (((((!((map__30753 == null))))?(((((map__30753.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30753.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30753):map__30753);
var msg = map__30753__$1;
var files = cljs.core.get.call(null,map__30753__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__30753__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__30753__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__28304__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__28305__auto__ = (function (){var switch__28209__auto__ = (function (state_30907){
var state_val_30908 = (state_30907[(1)]);
if((state_val_30908 === (7))){
var inst_30769 = (state_30907[(7)]);
var inst_30767 = (state_30907[(8)]);
var inst_30770 = (state_30907[(9)]);
var inst_30768 = (state_30907[(10)]);
var inst_30775 = cljs.core._nth.call(null,inst_30768,inst_30770);
var inst_30776 = figwheel.client.file_reloading.eval_body.call(null,inst_30775,opts);
var inst_30777 = (inst_30770 + (1));
var tmp30909 = inst_30769;
var tmp30910 = inst_30767;
var tmp30911 = inst_30768;
var inst_30767__$1 = tmp30910;
var inst_30768__$1 = tmp30911;
var inst_30769__$1 = tmp30909;
var inst_30770__$1 = inst_30777;
var state_30907__$1 = (function (){var statearr_30912 = state_30907;
(statearr_30912[(7)] = inst_30769__$1);

(statearr_30912[(8)] = inst_30767__$1);

(statearr_30912[(9)] = inst_30770__$1);

(statearr_30912[(10)] = inst_30768__$1);

(statearr_30912[(11)] = inst_30776);

return statearr_30912;
})();
var statearr_30913_30996 = state_30907__$1;
(statearr_30913_30996[(2)] = null);

(statearr_30913_30996[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30908 === (20))){
var inst_30810 = (state_30907[(12)]);
var inst_30818 = figwheel.client.file_reloading.sort_files.call(null,inst_30810);
var state_30907__$1 = state_30907;
var statearr_30914_30997 = state_30907__$1;
(statearr_30914_30997[(2)] = inst_30818);

(statearr_30914_30997[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30908 === (27))){
var state_30907__$1 = state_30907;
var statearr_30915_30998 = state_30907__$1;
(statearr_30915_30998[(2)] = null);

(statearr_30915_30998[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30908 === (1))){
var inst_30759 = (state_30907[(13)]);
var inst_30756 = before_jsload.call(null,files);
var inst_30757 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_30758 = (function (){return (function (p1__30747_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__30747_SHARP_);
});
})();
var inst_30759__$1 = cljs.core.filter.call(null,inst_30758,files);
var inst_30760 = cljs.core.not_empty.call(null,inst_30759__$1);
var state_30907__$1 = (function (){var statearr_30916 = state_30907;
(statearr_30916[(14)] = inst_30757);

(statearr_30916[(15)] = inst_30756);

(statearr_30916[(13)] = inst_30759__$1);

return statearr_30916;
})();
if(cljs.core.truth_(inst_30760)){
var statearr_30917_30999 = state_30907__$1;
(statearr_30917_30999[(1)] = (2));

} else {
var statearr_30918_31000 = state_30907__$1;
(statearr_30918_31000[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30908 === (24))){
var state_30907__$1 = state_30907;
var statearr_30919_31001 = state_30907__$1;
(statearr_30919_31001[(2)] = null);

(statearr_30919_31001[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30908 === (39))){
var inst_30860 = (state_30907[(16)]);
var state_30907__$1 = state_30907;
var statearr_30920_31002 = state_30907__$1;
(statearr_30920_31002[(2)] = inst_30860);

(statearr_30920_31002[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30908 === (46))){
var inst_30902 = (state_30907[(2)]);
var state_30907__$1 = state_30907;
var statearr_30921_31003 = state_30907__$1;
(statearr_30921_31003[(2)] = inst_30902);

(statearr_30921_31003[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30908 === (4))){
var inst_30804 = (state_30907[(2)]);
var inst_30805 = cljs.core.List.EMPTY;
var inst_30806 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_30805);
var inst_30807 = (function (){return (function (p1__30748_SHARP_){
var and__4115__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__30748_SHARP_);
if(cljs.core.truth_(and__4115__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__30748_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__30748_SHARP_))));
} else {
return and__4115__auto__;
}
});
})();
var inst_30808 = cljs.core.filter.call(null,inst_30807,files);
var inst_30809 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_30810 = cljs.core.concat.call(null,inst_30808,inst_30809);
var state_30907__$1 = (function (){var statearr_30922 = state_30907;
(statearr_30922[(12)] = inst_30810);

(statearr_30922[(17)] = inst_30806);

(statearr_30922[(18)] = inst_30804);

return statearr_30922;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_30923_31004 = state_30907__$1;
(statearr_30923_31004[(1)] = (16));

} else {
var statearr_30924_31005 = state_30907__$1;
(statearr_30924_31005[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30908 === (15))){
var inst_30794 = (state_30907[(2)]);
var state_30907__$1 = state_30907;
var statearr_30925_31006 = state_30907__$1;
(statearr_30925_31006[(2)] = inst_30794);

(statearr_30925_31006[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30908 === (21))){
var inst_30820 = (state_30907[(19)]);
var inst_30820__$1 = (state_30907[(2)]);
var inst_30821 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_30820__$1);
var state_30907__$1 = (function (){var statearr_30926 = state_30907;
(statearr_30926[(19)] = inst_30820__$1);

return statearr_30926;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30907__$1,(22),inst_30821);
} else {
if((state_val_30908 === (31))){
var inst_30905 = (state_30907[(2)]);
var state_30907__$1 = state_30907;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30907__$1,inst_30905);
} else {
if((state_val_30908 === (32))){
var inst_30860 = (state_30907[(16)]);
var inst_30865 = inst_30860.cljs$lang$protocol_mask$partition0$;
var inst_30866 = (inst_30865 & (64));
var inst_30867 = inst_30860.cljs$core$ISeq$;
var inst_30868 = (cljs.core.PROTOCOL_SENTINEL === inst_30867);
var inst_30869 = ((inst_30866) || (inst_30868));
var state_30907__$1 = state_30907;
if(cljs.core.truth_(inst_30869)){
var statearr_30927_31007 = state_30907__$1;
(statearr_30927_31007[(1)] = (35));

} else {
var statearr_30928_31008 = state_30907__$1;
(statearr_30928_31008[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30908 === (40))){
var inst_30882 = (state_30907[(20)]);
var inst_30881 = (state_30907[(2)]);
var inst_30882__$1 = cljs.core.get.call(null,inst_30881,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_30883 = cljs.core.get.call(null,inst_30881,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_30884 = cljs.core.not_empty.call(null,inst_30882__$1);
var state_30907__$1 = (function (){var statearr_30929 = state_30907;
(statearr_30929[(21)] = inst_30883);

(statearr_30929[(20)] = inst_30882__$1);

return statearr_30929;
})();
if(cljs.core.truth_(inst_30884)){
var statearr_30930_31009 = state_30907__$1;
(statearr_30930_31009[(1)] = (41));

} else {
var statearr_30931_31010 = state_30907__$1;
(statearr_30931_31010[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30908 === (33))){
var state_30907__$1 = state_30907;
var statearr_30932_31011 = state_30907__$1;
(statearr_30932_31011[(2)] = false);

(statearr_30932_31011[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30908 === (13))){
var inst_30780 = (state_30907[(22)]);
var inst_30784 = cljs.core.chunk_first.call(null,inst_30780);
var inst_30785 = cljs.core.chunk_rest.call(null,inst_30780);
var inst_30786 = cljs.core.count.call(null,inst_30784);
var inst_30767 = inst_30785;
var inst_30768 = inst_30784;
var inst_30769 = inst_30786;
var inst_30770 = (0);
var state_30907__$1 = (function (){var statearr_30933 = state_30907;
(statearr_30933[(7)] = inst_30769);

(statearr_30933[(8)] = inst_30767);

(statearr_30933[(9)] = inst_30770);

(statearr_30933[(10)] = inst_30768);

return statearr_30933;
})();
var statearr_30934_31012 = state_30907__$1;
(statearr_30934_31012[(2)] = null);

(statearr_30934_31012[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30908 === (22))){
var inst_30824 = (state_30907[(23)]);
var inst_30823 = (state_30907[(24)]);
var inst_30828 = (state_30907[(25)]);
var inst_30820 = (state_30907[(19)]);
var inst_30823__$1 = (state_30907[(2)]);
var inst_30824__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_30823__$1);
var inst_30825 = (function (){var all_files = inst_30820;
var res_SINGLEQUOTE_ = inst_30823__$1;
var res = inst_30824__$1;
return (function (p1__30749_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__30749_SHARP_));
});
})();
var inst_30826 = cljs.core.filter.call(null,inst_30825,inst_30823__$1);
var inst_30827 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_30828__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_30827);
var inst_30829 = cljs.core.not_empty.call(null,inst_30828__$1);
var state_30907__$1 = (function (){var statearr_30935 = state_30907;
(statearr_30935[(26)] = inst_30826);

(statearr_30935[(23)] = inst_30824__$1);

(statearr_30935[(24)] = inst_30823__$1);

(statearr_30935[(25)] = inst_30828__$1);

return statearr_30935;
})();
if(cljs.core.truth_(inst_30829)){
var statearr_30936_31013 = state_30907__$1;
(statearr_30936_31013[(1)] = (23));

} else {
var statearr_30937_31014 = state_30907__$1;
(statearr_30937_31014[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30908 === (36))){
var state_30907__$1 = state_30907;
var statearr_30938_31015 = state_30907__$1;
(statearr_30938_31015[(2)] = false);

(statearr_30938_31015[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30908 === (41))){
var inst_30882 = (state_30907[(20)]);
var inst_30886 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_30887 = cljs.core.map.call(null,inst_30886,inst_30882);
var inst_30888 = cljs.core.pr_str.call(null,inst_30887);
var inst_30889 = ["figwheel-no-load meta-data: ",inst_30888].join('');
var inst_30890 = figwheel.client.utils.log.call(null,inst_30889);
var state_30907__$1 = state_30907;
var statearr_30939_31016 = state_30907__$1;
(statearr_30939_31016[(2)] = inst_30890);

(statearr_30939_31016[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30908 === (43))){
var inst_30883 = (state_30907[(21)]);
var inst_30893 = (state_30907[(2)]);
var inst_30894 = cljs.core.not_empty.call(null,inst_30883);
var state_30907__$1 = (function (){var statearr_30940 = state_30907;
(statearr_30940[(27)] = inst_30893);

return statearr_30940;
})();
if(cljs.core.truth_(inst_30894)){
var statearr_30941_31017 = state_30907__$1;
(statearr_30941_31017[(1)] = (44));

} else {
var statearr_30942_31018 = state_30907__$1;
(statearr_30942_31018[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30908 === (29))){
var inst_30826 = (state_30907[(26)]);
var inst_30824 = (state_30907[(23)]);
var inst_30823 = (state_30907[(24)]);
var inst_30828 = (state_30907[(25)]);
var inst_30820 = (state_30907[(19)]);
var inst_30860 = (state_30907[(16)]);
var inst_30856 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_30859 = (function (){var all_files = inst_30820;
var res_SINGLEQUOTE_ = inst_30823;
var res = inst_30824;
var files_not_loaded = inst_30826;
var dependencies_that_loaded = inst_30828;
return (function (p__30858){
var map__30943 = p__30858;
var map__30943__$1 = (((((!((map__30943 == null))))?(((((map__30943.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30943.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30943):map__30943);
var namespace = cljs.core.get.call(null,map__30943__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
})();
var inst_30860__$1 = cljs.core.group_by.call(null,inst_30859,inst_30826);
var inst_30862 = (inst_30860__$1 == null);
var inst_30863 = cljs.core.not.call(null,inst_30862);
var state_30907__$1 = (function (){var statearr_30945 = state_30907;
(statearr_30945[(16)] = inst_30860__$1);

(statearr_30945[(28)] = inst_30856);

return statearr_30945;
})();
if(inst_30863){
var statearr_30946_31019 = state_30907__$1;
(statearr_30946_31019[(1)] = (32));

} else {
var statearr_30947_31020 = state_30907__$1;
(statearr_30947_31020[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30908 === (44))){
var inst_30883 = (state_30907[(21)]);
var inst_30896 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_30883);
var inst_30897 = cljs.core.pr_str.call(null,inst_30896);
var inst_30898 = ["not required: ",inst_30897].join('');
var inst_30899 = figwheel.client.utils.log.call(null,inst_30898);
var state_30907__$1 = state_30907;
var statearr_30948_31021 = state_30907__$1;
(statearr_30948_31021[(2)] = inst_30899);

(statearr_30948_31021[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30908 === (6))){
var inst_30801 = (state_30907[(2)]);
var state_30907__$1 = state_30907;
var statearr_30949_31022 = state_30907__$1;
(statearr_30949_31022[(2)] = inst_30801);

(statearr_30949_31022[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30908 === (28))){
var inst_30826 = (state_30907[(26)]);
var inst_30853 = (state_30907[(2)]);
var inst_30854 = cljs.core.not_empty.call(null,inst_30826);
var state_30907__$1 = (function (){var statearr_30950 = state_30907;
(statearr_30950[(29)] = inst_30853);

return statearr_30950;
})();
if(cljs.core.truth_(inst_30854)){
var statearr_30951_31023 = state_30907__$1;
(statearr_30951_31023[(1)] = (29));

} else {
var statearr_30952_31024 = state_30907__$1;
(statearr_30952_31024[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30908 === (25))){
var inst_30824 = (state_30907[(23)]);
var inst_30840 = (state_30907[(2)]);
var inst_30841 = cljs.core.not_empty.call(null,inst_30824);
var state_30907__$1 = (function (){var statearr_30953 = state_30907;
(statearr_30953[(30)] = inst_30840);

return statearr_30953;
})();
if(cljs.core.truth_(inst_30841)){
var statearr_30954_31025 = state_30907__$1;
(statearr_30954_31025[(1)] = (26));

} else {
var statearr_30955_31026 = state_30907__$1;
(statearr_30955_31026[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30908 === (34))){
var inst_30876 = (state_30907[(2)]);
var state_30907__$1 = state_30907;
if(cljs.core.truth_(inst_30876)){
var statearr_30956_31027 = state_30907__$1;
(statearr_30956_31027[(1)] = (38));

} else {
var statearr_30957_31028 = state_30907__$1;
(statearr_30957_31028[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30908 === (17))){
var state_30907__$1 = state_30907;
var statearr_30958_31029 = state_30907__$1;
(statearr_30958_31029[(2)] = recompile_dependents);

(statearr_30958_31029[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30908 === (3))){
var state_30907__$1 = state_30907;
var statearr_30959_31030 = state_30907__$1;
(statearr_30959_31030[(2)] = null);

(statearr_30959_31030[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30908 === (12))){
var inst_30797 = (state_30907[(2)]);
var state_30907__$1 = state_30907;
var statearr_30960_31031 = state_30907__$1;
(statearr_30960_31031[(2)] = inst_30797);

(statearr_30960_31031[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30908 === (2))){
var inst_30759 = (state_30907[(13)]);
var inst_30766 = cljs.core.seq.call(null,inst_30759);
var inst_30767 = inst_30766;
var inst_30768 = null;
var inst_30769 = (0);
var inst_30770 = (0);
var state_30907__$1 = (function (){var statearr_30961 = state_30907;
(statearr_30961[(7)] = inst_30769);

(statearr_30961[(8)] = inst_30767);

(statearr_30961[(9)] = inst_30770);

(statearr_30961[(10)] = inst_30768);

return statearr_30961;
})();
var statearr_30962_31032 = state_30907__$1;
(statearr_30962_31032[(2)] = null);

(statearr_30962_31032[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30908 === (23))){
var inst_30826 = (state_30907[(26)]);
var inst_30824 = (state_30907[(23)]);
var inst_30823 = (state_30907[(24)]);
var inst_30828 = (state_30907[(25)]);
var inst_30820 = (state_30907[(19)]);
var inst_30831 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_30833 = (function (){var all_files = inst_30820;
var res_SINGLEQUOTE_ = inst_30823;
var res = inst_30824;
var files_not_loaded = inst_30826;
var dependencies_that_loaded = inst_30828;
return (function (p__30832){
var map__30963 = p__30832;
var map__30963__$1 = (((((!((map__30963 == null))))?(((((map__30963.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30963.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30963):map__30963);
var request_url = cljs.core.get.call(null,map__30963__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
})();
var inst_30834 = cljs.core.reverse.call(null,inst_30828);
var inst_30835 = cljs.core.map.call(null,inst_30833,inst_30834);
var inst_30836 = cljs.core.pr_str.call(null,inst_30835);
var inst_30837 = figwheel.client.utils.log.call(null,inst_30836);
var state_30907__$1 = (function (){var statearr_30965 = state_30907;
(statearr_30965[(31)] = inst_30831);

return statearr_30965;
})();
var statearr_30966_31033 = state_30907__$1;
(statearr_30966_31033[(2)] = inst_30837);

(statearr_30966_31033[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30908 === (35))){
var state_30907__$1 = state_30907;
var statearr_30967_31034 = state_30907__$1;
(statearr_30967_31034[(2)] = true);

(statearr_30967_31034[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30908 === (19))){
var inst_30810 = (state_30907[(12)]);
var inst_30816 = figwheel.client.file_reloading.expand_files.call(null,inst_30810);
var state_30907__$1 = state_30907;
var statearr_30968_31035 = state_30907__$1;
(statearr_30968_31035[(2)] = inst_30816);

(statearr_30968_31035[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30908 === (11))){
var state_30907__$1 = state_30907;
var statearr_30969_31036 = state_30907__$1;
(statearr_30969_31036[(2)] = null);

(statearr_30969_31036[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30908 === (9))){
var inst_30799 = (state_30907[(2)]);
var state_30907__$1 = state_30907;
var statearr_30970_31037 = state_30907__$1;
(statearr_30970_31037[(2)] = inst_30799);

(statearr_30970_31037[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30908 === (5))){
var inst_30769 = (state_30907[(7)]);
var inst_30770 = (state_30907[(9)]);
var inst_30772 = (inst_30770 < inst_30769);
var inst_30773 = inst_30772;
var state_30907__$1 = state_30907;
if(cljs.core.truth_(inst_30773)){
var statearr_30971_31038 = state_30907__$1;
(statearr_30971_31038[(1)] = (7));

} else {
var statearr_30972_31039 = state_30907__$1;
(statearr_30972_31039[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30908 === (14))){
var inst_30780 = (state_30907[(22)]);
var inst_30789 = cljs.core.first.call(null,inst_30780);
var inst_30790 = figwheel.client.file_reloading.eval_body.call(null,inst_30789,opts);
var inst_30791 = cljs.core.next.call(null,inst_30780);
var inst_30767 = inst_30791;
var inst_30768 = null;
var inst_30769 = (0);
var inst_30770 = (0);
var state_30907__$1 = (function (){var statearr_30973 = state_30907;
(statearr_30973[(7)] = inst_30769);

(statearr_30973[(32)] = inst_30790);

(statearr_30973[(8)] = inst_30767);

(statearr_30973[(9)] = inst_30770);

(statearr_30973[(10)] = inst_30768);

return statearr_30973;
})();
var statearr_30974_31040 = state_30907__$1;
(statearr_30974_31040[(2)] = null);

(statearr_30974_31040[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30908 === (45))){
var state_30907__$1 = state_30907;
var statearr_30975_31041 = state_30907__$1;
(statearr_30975_31041[(2)] = null);

(statearr_30975_31041[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30908 === (26))){
var inst_30826 = (state_30907[(26)]);
var inst_30824 = (state_30907[(23)]);
var inst_30823 = (state_30907[(24)]);
var inst_30828 = (state_30907[(25)]);
var inst_30820 = (state_30907[(19)]);
var inst_30843 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_30845 = (function (){var all_files = inst_30820;
var res_SINGLEQUOTE_ = inst_30823;
var res = inst_30824;
var files_not_loaded = inst_30826;
var dependencies_that_loaded = inst_30828;
return (function (p__30844){
var map__30976 = p__30844;
var map__30976__$1 = (((((!((map__30976 == null))))?(((((map__30976.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30976.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30976):map__30976);
var namespace = cljs.core.get.call(null,map__30976__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__30976__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
})();
var inst_30846 = cljs.core.map.call(null,inst_30845,inst_30824);
var inst_30847 = cljs.core.pr_str.call(null,inst_30846);
var inst_30848 = figwheel.client.utils.log.call(null,inst_30847);
var inst_30849 = (function (){var all_files = inst_30820;
var res_SINGLEQUOTE_ = inst_30823;
var res = inst_30824;
var files_not_loaded = inst_30826;
var dependencies_that_loaded = inst_30828;
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
})();
var inst_30850 = setTimeout(inst_30849,(10));
var state_30907__$1 = (function (){var statearr_30978 = state_30907;
(statearr_30978[(33)] = inst_30848);

(statearr_30978[(34)] = inst_30843);

return statearr_30978;
})();
var statearr_30979_31042 = state_30907__$1;
(statearr_30979_31042[(2)] = inst_30850);

(statearr_30979_31042[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30908 === (16))){
var state_30907__$1 = state_30907;
var statearr_30980_31043 = state_30907__$1;
(statearr_30980_31043[(2)] = reload_dependents);

(statearr_30980_31043[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30908 === (38))){
var inst_30860 = (state_30907[(16)]);
var inst_30878 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30860);
var state_30907__$1 = state_30907;
var statearr_30981_31044 = state_30907__$1;
(statearr_30981_31044[(2)] = inst_30878);

(statearr_30981_31044[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30908 === (30))){
var state_30907__$1 = state_30907;
var statearr_30982_31045 = state_30907__$1;
(statearr_30982_31045[(2)] = null);

(statearr_30982_31045[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30908 === (10))){
var inst_30780 = (state_30907[(22)]);
var inst_30782 = cljs.core.chunked_seq_QMARK_.call(null,inst_30780);
var state_30907__$1 = state_30907;
if(inst_30782){
var statearr_30983_31046 = state_30907__$1;
(statearr_30983_31046[(1)] = (13));

} else {
var statearr_30984_31047 = state_30907__$1;
(statearr_30984_31047[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30908 === (18))){
var inst_30814 = (state_30907[(2)]);
var state_30907__$1 = state_30907;
if(cljs.core.truth_(inst_30814)){
var statearr_30985_31048 = state_30907__$1;
(statearr_30985_31048[(1)] = (19));

} else {
var statearr_30986_31049 = state_30907__$1;
(statearr_30986_31049[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30908 === (42))){
var state_30907__$1 = state_30907;
var statearr_30987_31050 = state_30907__$1;
(statearr_30987_31050[(2)] = null);

(statearr_30987_31050[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30908 === (37))){
var inst_30873 = (state_30907[(2)]);
var state_30907__$1 = state_30907;
var statearr_30988_31051 = state_30907__$1;
(statearr_30988_31051[(2)] = inst_30873);

(statearr_30988_31051[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30908 === (8))){
var inst_30780 = (state_30907[(22)]);
var inst_30767 = (state_30907[(8)]);
var inst_30780__$1 = cljs.core.seq.call(null,inst_30767);
var state_30907__$1 = (function (){var statearr_30989 = state_30907;
(statearr_30989[(22)] = inst_30780__$1);

return statearr_30989;
})();
if(inst_30780__$1){
var statearr_30990_31052 = state_30907__$1;
(statearr_30990_31052[(1)] = (10));

} else {
var statearr_30991_31053 = state_30907__$1;
(statearr_30991_31053[(1)] = (11));

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
}
});
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28210__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28210__auto____0 = (function (){
var statearr_30992 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30992[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__28210__auto__);

(statearr_30992[(1)] = (1));

return statearr_30992;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28210__auto____1 = (function (state_30907){
while(true){
var ret_value__28211__auto__ = (function (){try{while(true){
var result__28212__auto__ = switch__28209__auto__.call(null,state_30907);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28212__auto__;
}
break;
}
}catch (e30993){if((e30993 instanceof Object)){
var ex__28213__auto__ = e30993;
var statearr_30994_31054 = state_30907;
(statearr_30994_31054[(5)] = ex__28213__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30907);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30993;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31055 = state_30907;
state_30907 = G__31055;
continue;
} else {
return ret_value__28211__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__28210__auto__ = function(state_30907){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28210__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28210__auto____1.call(this,state_30907);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__28210__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__28210__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__28210__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__28210__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28210__auto__;
})()
})();
var state__28306__auto__ = (function (){var statearr_30995 = f__28305__auto__.call(null);
(statearr_30995[(6)] = c__28304__auto__);

return statearr_30995;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28306__auto__);
}));

return c__28304__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__31058,link){
var map__31059 = p__31058;
var map__31059__$1 = (((((!((map__31059 == null))))?(((((map__31059.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31059.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31059):map__31059);
var file = cljs.core.get.call(null,map__31059__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5735__auto__ = link.href;
if(cljs.core.truth_(temp__5735__auto__)){
var link_href = temp__5735__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,(function (p1__31056_SHARP_,p2__31057_SHARP_){
if(cljs.core._EQ_.call(null,p1__31056_SHARP_,p2__31057_SHARP_)){
return p1__31056_SHARP_;
} else {
return false;
}
}),cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = ((match).length);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),((figwheel.client.file_reloading.truncate_url.call(null,link_href)).length)], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5735__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__31062){
var map__31063 = p__31062;
var map__31063__$1 = (((((!((map__31063 == null))))?(((((map__31063.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31063.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31063):map__31063);
var match_length = cljs.core.get.call(null,map__31063__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__31063__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__31061_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__31061_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5735__auto__)){
var res = temp__5735__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
(clone.rel = "stylesheet");

(clone.media = link.media);

(clone.disabled = link.disabled);

(clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url));

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
(link.rel = "stylesheet");

(link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url));

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__31065_SHARP_,p2__31066_SHARP_){
return cljs.core.assoc.call(null,p1__31065_SHARP_,cljs.core.get.call(null,p2__31066_SHARP_,key),p2__31066_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout((function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
}),(300));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5733__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5733__auto__)){
var link = temp__5733__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),(function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
}));
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_31067 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_31067);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_31067);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__31068,p__31069){
var map__31070 = p__31068;
var map__31070__$1 = (((((!((map__31070 == null))))?(((((map__31070.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31070.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31070):map__31070);
var on_cssload = cljs.core.get.call(null,map__31070__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__31071 = p__31069;
var map__31071__$1 = (((((!((map__31071 == null))))?(((((map__31071.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31071.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31071):map__31071);
var files_msg = map__31071__$1;
var files = cljs.core.get.call(null,map__31071__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(figwheel.client.utils.html_env_QMARK_.call(null)){
var temp__5735__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5735__auto__)){
var f_datas = temp__5735__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1627432845506
