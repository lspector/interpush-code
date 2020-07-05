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
var G__29530 = goog.object.get(goog.debugLoader_.dependencies_,path);
if((G__29530 == null)){
return null;
} else {
return goog.object.get(G__29530,"requires");
}
}):(function (path){
var G__29531 = goog.object.get(goog.dependencies_.requires,path);
if((G__29531 == null)){
return null;
} else {
return goog.object.getKeys(G__29531);
}
}));
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__29532_SHARP_){
return (!(figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__29532_SHARP_)));
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
var G__29533 = goog.object.get(goog.debugLoader_.dependencies_,path);
var G__29533__$1 = (((G__29533 == null))?null:goog.object.get(G__29533,"provides"));
if((G__29533__$1 == null)){
return null;
} else {
return cljs.core.set.call(null,G__29533__$1);
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
var seq__29534 = cljs.core.seq.call(null,provides);
var chunk__29535 = null;
var count__29536 = (0);
var i__29537 = (0);
while(true){
if((i__29537 < count__29536)){
var prov = cljs.core._nth.call(null,chunk__29535,i__29537);
var seq__29546_29558 = cljs.core.seq.call(null,requires);
var chunk__29547_29559 = null;
var count__29548_29560 = (0);
var i__29549_29561 = (0);
while(true){
if((i__29549_29561 < count__29548_29560)){
var req_29562 = cljs.core._nth.call(null,chunk__29547_29559,i__29549_29561);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29562,prov);


var G__29563 = seq__29546_29558;
var G__29564 = chunk__29547_29559;
var G__29565 = count__29548_29560;
var G__29566 = (i__29549_29561 + (1));
seq__29546_29558 = G__29563;
chunk__29547_29559 = G__29564;
count__29548_29560 = G__29565;
i__29549_29561 = G__29566;
continue;
} else {
var temp__5735__auto___29567 = cljs.core.seq.call(null,seq__29546_29558);
if(temp__5735__auto___29567){
var seq__29546_29568__$1 = temp__5735__auto___29567;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29546_29568__$1)){
var c__4556__auto___29569 = cljs.core.chunk_first.call(null,seq__29546_29568__$1);
var G__29570 = cljs.core.chunk_rest.call(null,seq__29546_29568__$1);
var G__29571 = c__4556__auto___29569;
var G__29572 = cljs.core.count.call(null,c__4556__auto___29569);
var G__29573 = (0);
seq__29546_29558 = G__29570;
chunk__29547_29559 = G__29571;
count__29548_29560 = G__29572;
i__29549_29561 = G__29573;
continue;
} else {
var req_29574 = cljs.core.first.call(null,seq__29546_29568__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29574,prov);


var G__29575 = cljs.core.next.call(null,seq__29546_29568__$1);
var G__29576 = null;
var G__29577 = (0);
var G__29578 = (0);
seq__29546_29558 = G__29575;
chunk__29547_29559 = G__29576;
count__29548_29560 = G__29577;
i__29549_29561 = G__29578;
continue;
}
} else {
}
}
break;
}


var G__29579 = seq__29534;
var G__29580 = chunk__29535;
var G__29581 = count__29536;
var G__29582 = (i__29537 + (1));
seq__29534 = G__29579;
chunk__29535 = G__29580;
count__29536 = G__29581;
i__29537 = G__29582;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__29534);
if(temp__5735__auto__){
var seq__29534__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29534__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__29534__$1);
var G__29583 = cljs.core.chunk_rest.call(null,seq__29534__$1);
var G__29584 = c__4556__auto__;
var G__29585 = cljs.core.count.call(null,c__4556__auto__);
var G__29586 = (0);
seq__29534 = G__29583;
chunk__29535 = G__29584;
count__29536 = G__29585;
i__29537 = G__29586;
continue;
} else {
var prov = cljs.core.first.call(null,seq__29534__$1);
var seq__29550_29587 = cljs.core.seq.call(null,requires);
var chunk__29551_29588 = null;
var count__29552_29589 = (0);
var i__29553_29590 = (0);
while(true){
if((i__29553_29590 < count__29552_29589)){
var req_29591 = cljs.core._nth.call(null,chunk__29551_29588,i__29553_29590);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29591,prov);


var G__29592 = seq__29550_29587;
var G__29593 = chunk__29551_29588;
var G__29594 = count__29552_29589;
var G__29595 = (i__29553_29590 + (1));
seq__29550_29587 = G__29592;
chunk__29551_29588 = G__29593;
count__29552_29589 = G__29594;
i__29553_29590 = G__29595;
continue;
} else {
var temp__5735__auto___29596__$1 = cljs.core.seq.call(null,seq__29550_29587);
if(temp__5735__auto___29596__$1){
var seq__29550_29597__$1 = temp__5735__auto___29596__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29550_29597__$1)){
var c__4556__auto___29598 = cljs.core.chunk_first.call(null,seq__29550_29597__$1);
var G__29599 = cljs.core.chunk_rest.call(null,seq__29550_29597__$1);
var G__29600 = c__4556__auto___29598;
var G__29601 = cljs.core.count.call(null,c__4556__auto___29598);
var G__29602 = (0);
seq__29550_29587 = G__29599;
chunk__29551_29588 = G__29600;
count__29552_29589 = G__29601;
i__29553_29590 = G__29602;
continue;
} else {
var req_29603 = cljs.core.first.call(null,seq__29550_29597__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29603,prov);


var G__29604 = cljs.core.next.call(null,seq__29550_29597__$1);
var G__29605 = null;
var G__29606 = (0);
var G__29607 = (0);
seq__29550_29587 = G__29604;
chunk__29551_29588 = G__29605;
count__29552_29589 = G__29606;
i__29553_29590 = G__29607;
continue;
}
} else {
}
}
break;
}


var G__29608 = cljs.core.next.call(null,seq__29534__$1);
var G__29609 = null;
var G__29610 = (0);
var G__29611 = (0);
seq__29534 = G__29608;
chunk__29535 = G__29609;
count__29536 = G__29610;
i__29537 = G__29611;
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
var seq__29554 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,path));
var chunk__29555 = null;
var count__29556 = (0);
var i__29557 = (0);
while(true){
if((i__29557 < count__29556)){
var prov = cljs.core._nth.call(null,chunk__29555,i__29557);
goog.object.forEach(deps,((function (seq__29554,chunk__29555,count__29556,i__29557,prov,requires){
return (function (___$1,req,___$2){
return figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req,prov);
});})(seq__29554,chunk__29555,count__29556,i__29557,prov,requires))
);


var G__29612 = seq__29554;
var G__29613 = chunk__29555;
var G__29614 = count__29556;
var G__29615 = (i__29557 + (1));
seq__29554 = G__29612;
chunk__29555 = G__29613;
count__29556 = G__29614;
i__29557 = G__29615;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__29554);
if(temp__5735__auto__){
var seq__29554__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29554__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__29554__$1);
var G__29616 = cljs.core.chunk_rest.call(null,seq__29554__$1);
var G__29617 = c__4556__auto__;
var G__29618 = cljs.core.count.call(null,c__4556__auto__);
var G__29619 = (0);
seq__29554 = G__29616;
chunk__29555 = G__29617;
count__29556 = G__29618;
i__29557 = G__29619;
continue;
} else {
var prov = cljs.core.first.call(null,seq__29554__$1);
goog.object.forEach(deps,((function (seq__29554,chunk__29555,count__29556,i__29557,prov,seq__29554__$1,temp__5735__auto__,requires){
return (function (___$1,req,___$2){
return figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req,prov);
});})(seq__29554,chunk__29555,count__29556,i__29557,prov,seq__29554__$1,temp__5735__auto__,requires))
);


var G__29620 = cljs.core.next.call(null,seq__29554__$1);
var G__29621 = null;
var G__29622 = (0);
var G__29623 = (0);
seq__29554 = G__29620;
chunk__29555 = G__29621;
count__29556 = G__29622;
i__29557 = G__29623;
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
return cljs.core.some.call(null,(function (p__29624){
var vec__29625 = p__29624;
var _ = cljs.core.nth.call(null,vec__29625,(0),null);
var v = cljs.core.nth.call(null,vec__29625,(1),null);
var and__4115__auto__ = v;
if(cljs.core.truth_(and__4115__auto__)){
return v.call(null,dep);
} else {
return and__4115__auto__;
}
}),cljs.core.filter.call(null,(function (p__29628){
var vec__29629 = p__29628;
var k = cljs.core.nth.call(null,vec__29629,(0),null);
var v = cljs.core.nth.call(null,vec__29629,(1),null);
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

var seq__29641_29649 = cljs.core.seq.call(null,deps);
var chunk__29642_29650 = null;
var count__29643_29651 = (0);
var i__29644_29652 = (0);
while(true){
if((i__29644_29652 < count__29643_29651)){
var dep_29653 = cljs.core._nth.call(null,chunk__29642_29650,i__29644_29652);
if(cljs.core.truth_((function (){var and__4115__auto__ = dep_29653;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_29653));
} else {
return and__4115__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_29653,(depth + (1)),state);
} else {
}


var G__29654 = seq__29641_29649;
var G__29655 = chunk__29642_29650;
var G__29656 = count__29643_29651;
var G__29657 = (i__29644_29652 + (1));
seq__29641_29649 = G__29654;
chunk__29642_29650 = G__29655;
count__29643_29651 = G__29656;
i__29644_29652 = G__29657;
continue;
} else {
var temp__5735__auto___29658 = cljs.core.seq.call(null,seq__29641_29649);
if(temp__5735__auto___29658){
var seq__29641_29659__$1 = temp__5735__auto___29658;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29641_29659__$1)){
var c__4556__auto___29660 = cljs.core.chunk_first.call(null,seq__29641_29659__$1);
var G__29661 = cljs.core.chunk_rest.call(null,seq__29641_29659__$1);
var G__29662 = c__4556__auto___29660;
var G__29663 = cljs.core.count.call(null,c__4556__auto___29660);
var G__29664 = (0);
seq__29641_29649 = G__29661;
chunk__29642_29650 = G__29662;
count__29643_29651 = G__29663;
i__29644_29652 = G__29664;
continue;
} else {
var dep_29665 = cljs.core.first.call(null,seq__29641_29659__$1);
if(cljs.core.truth_((function (){var and__4115__auto__ = dep_29665;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_29665));
} else {
return and__4115__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_29665,(depth + (1)),state);
} else {
}


var G__29666 = cljs.core.next.call(null,seq__29641_29659__$1);
var G__29667 = null;
var G__29668 = (0);
var G__29669 = (0);
seq__29641_29649 = G__29666;
chunk__29642_29650 = G__29667;
count__29643_29651 = G__29668;
i__29644_29652 = G__29669;
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
var elim_dups_STAR_ = (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__29645){
var vec__29646 = p__29645;
var seq__29647 = cljs.core.seq.call(null,vec__29646);
var first__29648 = cljs.core.first.call(null,seq__29647);
var seq__29647__$1 = cljs.core.next.call(null,seq__29647);
var x = first__29648;
var xs = seq__29647__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,(function (p1__29632_SHARP_){
return clojure.set.difference.call(null,p1__29632_SHARP_,x);
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
figwheel.client.file_reloading.resolve_ns = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?figwheel.client.file_reloading.name__GT_path:(function (p1__29670_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,p1__29670_SHARP_))].join('');
}));
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__29671 = cljs.core.seq.call(null,provides);
var chunk__29672 = null;
var count__29673 = (0);
var i__29674 = (0);
while(true){
if((i__29674 < count__29673)){
var prov = cljs.core._nth.call(null,chunk__29672,i__29674);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__29683_29691 = cljs.core.seq.call(null,requires);
var chunk__29684_29692 = null;
var count__29685_29693 = (0);
var i__29686_29694 = (0);
while(true){
if((i__29686_29694 < count__29685_29693)){
var req_29695 = cljs.core._nth.call(null,chunk__29684_29692,i__29686_29694);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29695,prov);


var G__29696 = seq__29683_29691;
var G__29697 = chunk__29684_29692;
var G__29698 = count__29685_29693;
var G__29699 = (i__29686_29694 + (1));
seq__29683_29691 = G__29696;
chunk__29684_29692 = G__29697;
count__29685_29693 = G__29698;
i__29686_29694 = G__29699;
continue;
} else {
var temp__5735__auto___29700 = cljs.core.seq.call(null,seq__29683_29691);
if(temp__5735__auto___29700){
var seq__29683_29701__$1 = temp__5735__auto___29700;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29683_29701__$1)){
var c__4556__auto___29702 = cljs.core.chunk_first.call(null,seq__29683_29701__$1);
var G__29703 = cljs.core.chunk_rest.call(null,seq__29683_29701__$1);
var G__29704 = c__4556__auto___29702;
var G__29705 = cljs.core.count.call(null,c__4556__auto___29702);
var G__29706 = (0);
seq__29683_29691 = G__29703;
chunk__29684_29692 = G__29704;
count__29685_29693 = G__29705;
i__29686_29694 = G__29706;
continue;
} else {
var req_29707 = cljs.core.first.call(null,seq__29683_29701__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29707,prov);


var G__29708 = cljs.core.next.call(null,seq__29683_29701__$1);
var G__29709 = null;
var G__29710 = (0);
var G__29711 = (0);
seq__29683_29691 = G__29708;
chunk__29684_29692 = G__29709;
count__29685_29693 = G__29710;
i__29686_29694 = G__29711;
continue;
}
} else {
}
}
break;
}


var G__29712 = seq__29671;
var G__29713 = chunk__29672;
var G__29714 = count__29673;
var G__29715 = (i__29674 + (1));
seq__29671 = G__29712;
chunk__29672 = G__29713;
count__29673 = G__29714;
i__29674 = G__29715;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__29671);
if(temp__5735__auto__){
var seq__29671__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29671__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__29671__$1);
var G__29716 = cljs.core.chunk_rest.call(null,seq__29671__$1);
var G__29717 = c__4556__auto__;
var G__29718 = cljs.core.count.call(null,c__4556__auto__);
var G__29719 = (0);
seq__29671 = G__29716;
chunk__29672 = G__29717;
count__29673 = G__29718;
i__29674 = G__29719;
continue;
} else {
var prov = cljs.core.first.call(null,seq__29671__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__29687_29720 = cljs.core.seq.call(null,requires);
var chunk__29688_29721 = null;
var count__29689_29722 = (0);
var i__29690_29723 = (0);
while(true){
if((i__29690_29723 < count__29689_29722)){
var req_29724 = cljs.core._nth.call(null,chunk__29688_29721,i__29690_29723);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29724,prov);


var G__29725 = seq__29687_29720;
var G__29726 = chunk__29688_29721;
var G__29727 = count__29689_29722;
var G__29728 = (i__29690_29723 + (1));
seq__29687_29720 = G__29725;
chunk__29688_29721 = G__29726;
count__29689_29722 = G__29727;
i__29690_29723 = G__29728;
continue;
} else {
var temp__5735__auto___29729__$1 = cljs.core.seq.call(null,seq__29687_29720);
if(temp__5735__auto___29729__$1){
var seq__29687_29730__$1 = temp__5735__auto___29729__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29687_29730__$1)){
var c__4556__auto___29731 = cljs.core.chunk_first.call(null,seq__29687_29730__$1);
var G__29732 = cljs.core.chunk_rest.call(null,seq__29687_29730__$1);
var G__29733 = c__4556__auto___29731;
var G__29734 = cljs.core.count.call(null,c__4556__auto___29731);
var G__29735 = (0);
seq__29687_29720 = G__29732;
chunk__29688_29721 = G__29733;
count__29689_29722 = G__29734;
i__29690_29723 = G__29735;
continue;
} else {
var req_29736 = cljs.core.first.call(null,seq__29687_29730__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29736,prov);


var G__29737 = cljs.core.next.call(null,seq__29687_29730__$1);
var G__29738 = null;
var G__29739 = (0);
var G__29740 = (0);
seq__29687_29720 = G__29737;
chunk__29688_29721 = G__29738;
count__29689_29722 = G__29739;
i__29690_29723 = G__29740;
continue;
}
} else {
}
}
break;
}


var G__29741 = cljs.core.next.call(null,seq__29671__$1);
var G__29742 = null;
var G__29743 = (0);
var G__29744 = (0);
seq__29671 = G__29741;
chunk__29672 = G__29742;
count__29673 = G__29743;
i__29674 = G__29744;
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
var seq__29745_29749 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__29746_29750 = null;
var count__29747_29751 = (0);
var i__29748_29752 = (0);
while(true){
if((i__29748_29752 < count__29747_29751)){
var ns_29753 = cljs.core._nth.call(null,chunk__29746_29750,i__29748_29752);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_29753);


var G__29754 = seq__29745_29749;
var G__29755 = chunk__29746_29750;
var G__29756 = count__29747_29751;
var G__29757 = (i__29748_29752 + (1));
seq__29745_29749 = G__29754;
chunk__29746_29750 = G__29755;
count__29747_29751 = G__29756;
i__29748_29752 = G__29757;
continue;
} else {
var temp__5735__auto___29758 = cljs.core.seq.call(null,seq__29745_29749);
if(temp__5735__auto___29758){
var seq__29745_29759__$1 = temp__5735__auto___29758;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29745_29759__$1)){
var c__4556__auto___29760 = cljs.core.chunk_first.call(null,seq__29745_29759__$1);
var G__29761 = cljs.core.chunk_rest.call(null,seq__29745_29759__$1);
var G__29762 = c__4556__auto___29760;
var G__29763 = cljs.core.count.call(null,c__4556__auto___29760);
var G__29764 = (0);
seq__29745_29749 = G__29761;
chunk__29746_29750 = G__29762;
count__29747_29751 = G__29763;
i__29748_29752 = G__29764;
continue;
} else {
var ns_29765 = cljs.core.first.call(null,seq__29745_29759__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_29765);


var G__29766 = cljs.core.next.call(null,seq__29745_29759__$1);
var G__29767 = null;
var G__29768 = (0);
var G__29769 = (0);
seq__29745_29749 = G__29766;
chunk__29746_29750 = G__29767;
count__29747_29751 = G__29768;
i__29748_29752 = G__29769;
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
var G__29770__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__29770 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29771__i = 0, G__29771__a = new Array(arguments.length -  0);
while (G__29771__i < G__29771__a.length) {G__29771__a[G__29771__i] = arguments[G__29771__i + 0]; ++G__29771__i;}
  args = new cljs.core.IndexedSeq(G__29771__a,0,null);
} 
return G__29770__delegate.call(this,args);};
G__29770.cljs$lang$maxFixedArity = 0;
G__29770.cljs$lang$applyTo = (function (arglist__29772){
var args = cljs.core.seq(arglist__29772);
return G__29770__delegate(args);
});
G__29770.cljs$core$IFn$_invoke$arity$variadic = G__29770__delegate;
return G__29770;
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
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__29773_SHARP_,p2__29774_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__29773_SHARP_)),p2__29774_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__29775_SHARP_,p2__29776_SHARP_){
return goog.net.jsloader.load(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__29775_SHARP_),p2__29776_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__29777 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__29777.addCallback((function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
}));

G__29777.addErrback((function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
}));

return G__29777;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e29778){if((e29778 instanceof Error)){
var e = e29778;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e29778;

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
}catch (e29779){if((e29779 instanceof Error)){
var e = e29779;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e29779;

}
}})());
});
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__29780 = cljs.core._EQ_;
var expr__29781 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__29780.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__29781))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__29780.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__29781))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__29780.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__29781))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return (function (a,b){
throw "Reload not defined for this platform";
});
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__29783,callback){
var map__29784 = p__29783;
var map__29784__$1 = (((((!((map__29784 == null))))?(((((map__29784.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29784.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29784):map__29784);
var file_msg = map__29784__$1;
var request_url = cljs.core.get.call(null,map__29784__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

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
figwheel.client.file_reloading.reloader_loop = (function (){var c__27404__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27405__auto__ = (function (){var switch__27309__auto__ = (function (state_29822){
var state_val_29823 = (state_29822[(1)]);
if((state_val_29823 === (7))){
var inst_29818 = (state_29822[(2)]);
var state_29822__$1 = state_29822;
var statearr_29824_29850 = state_29822__$1;
(statearr_29824_29850[(2)] = inst_29818);

(statearr_29824_29850[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29823 === (1))){
var state_29822__$1 = state_29822;
var statearr_29825_29851 = state_29822__$1;
(statearr_29825_29851[(2)] = null);

(statearr_29825_29851[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29823 === (4))){
var inst_29788 = (state_29822[(7)]);
var inst_29788__$1 = (state_29822[(2)]);
var state_29822__$1 = (function (){var statearr_29826 = state_29822;
(statearr_29826[(7)] = inst_29788__$1);

return statearr_29826;
})();
if(cljs.core.truth_(inst_29788__$1)){
var statearr_29827_29852 = state_29822__$1;
(statearr_29827_29852[(1)] = (5));

} else {
var statearr_29828_29853 = state_29822__$1;
(statearr_29828_29853[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29823 === (15))){
var inst_29801 = (state_29822[(8)]);
var inst_29803 = (state_29822[(9)]);
var inst_29805 = inst_29803.call(null,inst_29801);
var state_29822__$1 = state_29822;
var statearr_29829_29854 = state_29822__$1;
(statearr_29829_29854[(2)] = inst_29805);

(statearr_29829_29854[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29823 === (13))){
var inst_29812 = (state_29822[(2)]);
var state_29822__$1 = state_29822;
var statearr_29830_29855 = state_29822__$1;
(statearr_29830_29855[(2)] = inst_29812);

(statearr_29830_29855[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29823 === (6))){
var state_29822__$1 = state_29822;
var statearr_29831_29856 = state_29822__$1;
(statearr_29831_29856[(2)] = null);

(statearr_29831_29856[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29823 === (17))){
var inst_29809 = (state_29822[(2)]);
var state_29822__$1 = state_29822;
var statearr_29832_29857 = state_29822__$1;
(statearr_29832_29857[(2)] = inst_29809);

(statearr_29832_29857[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29823 === (3))){
var inst_29820 = (state_29822[(2)]);
var state_29822__$1 = state_29822;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29822__$1,inst_29820);
} else {
if((state_val_29823 === (12))){
var state_29822__$1 = state_29822;
var statearr_29833_29858 = state_29822__$1;
(statearr_29833_29858[(2)] = null);

(statearr_29833_29858[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29823 === (2))){
var state_29822__$1 = state_29822;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29822__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_29823 === (11))){
var inst_29793 = (state_29822[(10)]);
var inst_29799 = figwheel.client.file_reloading.blocking_load.call(null,inst_29793);
var state_29822__$1 = state_29822;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29822__$1,(14),inst_29799);
} else {
if((state_val_29823 === (9))){
var inst_29793 = (state_29822[(10)]);
var state_29822__$1 = state_29822;
if(cljs.core.truth_(inst_29793)){
var statearr_29834_29859 = state_29822__$1;
(statearr_29834_29859[(1)] = (11));

} else {
var statearr_29835_29860 = state_29822__$1;
(statearr_29835_29860[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29823 === (5))){
var inst_29788 = (state_29822[(7)]);
var inst_29794 = (state_29822[(11)]);
var inst_29793 = cljs.core.nth.call(null,inst_29788,(0),null);
var inst_29794__$1 = cljs.core.nth.call(null,inst_29788,(1),null);
var state_29822__$1 = (function (){var statearr_29836 = state_29822;
(statearr_29836[(11)] = inst_29794__$1);

(statearr_29836[(10)] = inst_29793);

return statearr_29836;
})();
if(cljs.core.truth_(inst_29794__$1)){
var statearr_29837_29861 = state_29822__$1;
(statearr_29837_29861[(1)] = (8));

} else {
var statearr_29838_29862 = state_29822__$1;
(statearr_29838_29862[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29823 === (14))){
var inst_29803 = (state_29822[(9)]);
var inst_29793 = (state_29822[(10)]);
var inst_29801 = (state_29822[(2)]);
var inst_29802 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_29803__$1 = cljs.core.get.call(null,inst_29802,inst_29793);
var state_29822__$1 = (function (){var statearr_29839 = state_29822;
(statearr_29839[(8)] = inst_29801);

(statearr_29839[(9)] = inst_29803__$1);

return statearr_29839;
})();
if(cljs.core.truth_(inst_29803__$1)){
var statearr_29840_29863 = state_29822__$1;
(statearr_29840_29863[(1)] = (15));

} else {
var statearr_29841_29864 = state_29822__$1;
(statearr_29841_29864[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29823 === (16))){
var inst_29801 = (state_29822[(8)]);
var inst_29807 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_29801);
var state_29822__$1 = state_29822;
var statearr_29842_29865 = state_29822__$1;
(statearr_29842_29865[(2)] = inst_29807);

(statearr_29842_29865[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29823 === (10))){
var inst_29814 = (state_29822[(2)]);
var state_29822__$1 = (function (){var statearr_29843 = state_29822;
(statearr_29843[(12)] = inst_29814);

return statearr_29843;
})();
var statearr_29844_29866 = state_29822__$1;
(statearr_29844_29866[(2)] = null);

(statearr_29844_29866[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29823 === (8))){
var inst_29794 = (state_29822[(11)]);
var inst_29796 = eval(inst_29794);
var state_29822__$1 = state_29822;
var statearr_29845_29867 = state_29822__$1;
(statearr_29845_29867[(2)] = inst_29796);

(statearr_29845_29867[(1)] = (10));


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
var figwheel$client$file_reloading$state_machine__27310__auto__ = null;
var figwheel$client$file_reloading$state_machine__27310__auto____0 = (function (){
var statearr_29846 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29846[(0)] = figwheel$client$file_reloading$state_machine__27310__auto__);

(statearr_29846[(1)] = (1));

return statearr_29846;
});
var figwheel$client$file_reloading$state_machine__27310__auto____1 = (function (state_29822){
while(true){
var ret_value__27311__auto__ = (function (){try{while(true){
var result__27312__auto__ = switch__27309__auto__.call(null,state_29822);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27312__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27312__auto__;
}
break;
}
}catch (e29847){if((e29847 instanceof Object)){
var ex__27313__auto__ = e29847;
var statearr_29848_29868 = state_29822;
(statearr_29848_29868[(5)] = ex__27313__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29822);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29847;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27311__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29869 = state_29822;
state_29822 = G__29869;
continue;
} else {
return ret_value__27311__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__27310__auto__ = function(state_29822){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__27310__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__27310__auto____1.call(this,state_29822);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__27310__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__27310__auto____0;
figwheel$client$file_reloading$state_machine__27310__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__27310__auto____1;
return figwheel$client$file_reloading$state_machine__27310__auto__;
})()
})();
var state__27406__auto__ = (function (){var statearr_29849 = f__27405__auto__.call(null);
(statearr_29849[(6)] = c__27404__auto__);

return statearr_29849;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27406__auto__);
}));

return c__27404__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__29871 = arguments.length;
switch (G__29871) {
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

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__29873,callback){
var map__29874 = p__29873;
var map__29874__$1 = (((((!((map__29874 == null))))?(((((map__29874.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29874.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29874):map__29874);
var file_msg = map__29874__$1;
var namespace = cljs.core.get.call(null,map__29874__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,(function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
}));

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__29876){
var map__29877 = p__29876;
var map__29877__$1 = (((((!((map__29877 == null))))?(((((map__29877.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29877.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29877):map__29877);
var file_msg = map__29877__$1;
var namespace = cljs.core.get.call(null,map__29877__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null)));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__29879){
var map__29880 = p__29879;
var map__29880__$1 = (((((!((map__29880 == null))))?(((((map__29880.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29880.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29880):map__29880);
var file_msg = map__29880__$1;
var namespace = cljs.core.get.call(null,map__29880__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__29882,callback){
var map__29883 = p__29882;
var map__29883__$1 = (((((!((map__29883 == null))))?(((((map__29883.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29883.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29883):map__29883);
var file_msg = map__29883__$1;
var request_url = cljs.core.get.call(null,map__29883__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__29883__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__27404__auto___29933 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27405__auto__ = (function (){var switch__27309__auto__ = (function (state_29918){
var state_val_29919 = (state_29918[(1)]);
if((state_val_29919 === (1))){
var inst_29892 = cljs.core.seq.call(null,files);
var inst_29893 = cljs.core.first.call(null,inst_29892);
var inst_29894 = cljs.core.next.call(null,inst_29892);
var inst_29895 = files;
var state_29918__$1 = (function (){var statearr_29920 = state_29918;
(statearr_29920[(7)] = inst_29893);

(statearr_29920[(8)] = inst_29895);

(statearr_29920[(9)] = inst_29894);

return statearr_29920;
})();
var statearr_29921_29934 = state_29918__$1;
(statearr_29921_29934[(2)] = null);

(statearr_29921_29934[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29919 === (2))){
var inst_29901 = (state_29918[(10)]);
var inst_29895 = (state_29918[(8)]);
var inst_29900 = cljs.core.seq.call(null,inst_29895);
var inst_29901__$1 = cljs.core.first.call(null,inst_29900);
var inst_29902 = cljs.core.next.call(null,inst_29900);
var inst_29903 = (inst_29901__$1 == null);
var inst_29904 = cljs.core.not.call(null,inst_29903);
var state_29918__$1 = (function (){var statearr_29922 = state_29918;
(statearr_29922[(10)] = inst_29901__$1);

(statearr_29922[(11)] = inst_29902);

return statearr_29922;
})();
if(inst_29904){
var statearr_29923_29935 = state_29918__$1;
(statearr_29923_29935[(1)] = (4));

} else {
var statearr_29924_29936 = state_29918__$1;
(statearr_29924_29936[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29919 === (3))){
var inst_29916 = (state_29918[(2)]);
var state_29918__$1 = state_29918;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29918__$1,inst_29916);
} else {
if((state_val_29919 === (4))){
var inst_29901 = (state_29918[(10)]);
var inst_29906 = figwheel.client.file_reloading.reload_js_file.call(null,inst_29901);
var state_29918__$1 = state_29918;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29918__$1,(7),inst_29906);
} else {
if((state_val_29919 === (5))){
var inst_29912 = cljs.core.async.close_BANG_.call(null,out);
var state_29918__$1 = state_29918;
var statearr_29925_29937 = state_29918__$1;
(statearr_29925_29937[(2)] = inst_29912);

(statearr_29925_29937[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29919 === (6))){
var inst_29914 = (state_29918[(2)]);
var state_29918__$1 = state_29918;
var statearr_29926_29938 = state_29918__$1;
(statearr_29926_29938[(2)] = inst_29914);

(statearr_29926_29938[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29919 === (7))){
var inst_29902 = (state_29918[(11)]);
var inst_29908 = (state_29918[(2)]);
var inst_29909 = cljs.core.async.put_BANG_.call(null,out,inst_29908);
var inst_29895 = inst_29902;
var state_29918__$1 = (function (){var statearr_29927 = state_29918;
(statearr_29927[(12)] = inst_29909);

(statearr_29927[(8)] = inst_29895);

return statearr_29927;
})();
var statearr_29928_29939 = state_29918__$1;
(statearr_29928_29939[(2)] = null);

(statearr_29928_29939[(1)] = (2));


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
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27310__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27310__auto____0 = (function (){
var statearr_29929 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29929[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27310__auto__);

(statearr_29929[(1)] = (1));

return statearr_29929;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27310__auto____1 = (function (state_29918){
while(true){
var ret_value__27311__auto__ = (function (){try{while(true){
var result__27312__auto__ = switch__27309__auto__.call(null,state_29918);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27312__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27312__auto__;
}
break;
}
}catch (e29930){if((e29930 instanceof Object)){
var ex__27313__auto__ = e29930;
var statearr_29931_29940 = state_29918;
(statearr_29931_29940[(5)] = ex__27313__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29918);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29930;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27311__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29941 = state_29918;
state_29918 = G__29941;
continue;
} else {
return ret_value__27311__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27310__auto__ = function(state_29918){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27310__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27310__auto____1.call(this,state_29918);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27310__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27310__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27310__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27310__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27310__auto__;
})()
})();
var state__27406__auto__ = (function (){var statearr_29932 = f__27405__auto__.call(null);
(statearr_29932[(6)] = c__27404__auto___29933);

return statearr_29932;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27406__auto__);
}));


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__29942,opts){
var map__29943 = p__29942;
var map__29943__$1 = (((((!((map__29943 == null))))?(((((map__29943.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29943.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29943):map__29943);
var eval_body = cljs.core.get.call(null,map__29943__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__29943__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e29945){var e = e29945;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,(function (n){
var temp__5733__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__29946_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__29946_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__29947){
var vec__29948 = p__29947;
var k = cljs.core.nth.call(null,vec__29948,(0),null);
var v = cljs.core.nth.call(null,vec__29948,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__29951){
var vec__29952 = p__29951;
var k = cljs.core.nth.call(null,vec__29952,(0),null);
var v = cljs.core.nth.call(null,vec__29952,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__29958,p__29959){
var map__29960 = p__29958;
var map__29960__$1 = (((((!((map__29960 == null))))?(((((map__29960.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29960.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29960):map__29960);
var opts = map__29960__$1;
var before_jsload = cljs.core.get.call(null,map__29960__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__29960__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__29960__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__29961 = p__29959;
var map__29961__$1 = (((((!((map__29961 == null))))?(((((map__29961.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29961.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29961):map__29961);
var msg = map__29961__$1;
var files = cljs.core.get.call(null,map__29961__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__29961__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__29961__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__27404__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27405__auto__ = (function (){var switch__27309__auto__ = (function (state_30115){
var state_val_30116 = (state_30115[(1)]);
if((state_val_30116 === (7))){
var inst_29976 = (state_30115[(7)]);
var inst_29975 = (state_30115[(8)]);
var inst_29978 = (state_30115[(9)]);
var inst_29977 = (state_30115[(10)]);
var inst_29983 = cljs.core._nth.call(null,inst_29976,inst_29978);
var inst_29984 = figwheel.client.file_reloading.eval_body.call(null,inst_29983,opts);
var inst_29985 = (inst_29978 + (1));
var tmp30117 = inst_29976;
var tmp30118 = inst_29975;
var tmp30119 = inst_29977;
var inst_29975__$1 = tmp30118;
var inst_29976__$1 = tmp30117;
var inst_29977__$1 = tmp30119;
var inst_29978__$1 = inst_29985;
var state_30115__$1 = (function (){var statearr_30120 = state_30115;
(statearr_30120[(7)] = inst_29976__$1);

(statearr_30120[(8)] = inst_29975__$1);

(statearr_30120[(9)] = inst_29978__$1);

(statearr_30120[(10)] = inst_29977__$1);

(statearr_30120[(11)] = inst_29984);

return statearr_30120;
})();
var statearr_30121_30204 = state_30115__$1;
(statearr_30121_30204[(2)] = null);

(statearr_30121_30204[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30116 === (20))){
var inst_30018 = (state_30115[(12)]);
var inst_30026 = figwheel.client.file_reloading.sort_files.call(null,inst_30018);
var state_30115__$1 = state_30115;
var statearr_30122_30205 = state_30115__$1;
(statearr_30122_30205[(2)] = inst_30026);

(statearr_30122_30205[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30116 === (27))){
var state_30115__$1 = state_30115;
var statearr_30123_30206 = state_30115__$1;
(statearr_30123_30206[(2)] = null);

(statearr_30123_30206[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30116 === (1))){
var inst_29967 = (state_30115[(13)]);
var inst_29964 = before_jsload.call(null,files);
var inst_29965 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_29966 = (function (){return (function (p1__29955_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__29955_SHARP_);
});
})();
var inst_29967__$1 = cljs.core.filter.call(null,inst_29966,files);
var inst_29968 = cljs.core.not_empty.call(null,inst_29967__$1);
var state_30115__$1 = (function (){var statearr_30124 = state_30115;
(statearr_30124[(14)] = inst_29964);

(statearr_30124[(15)] = inst_29965);

(statearr_30124[(13)] = inst_29967__$1);

return statearr_30124;
})();
if(cljs.core.truth_(inst_29968)){
var statearr_30125_30207 = state_30115__$1;
(statearr_30125_30207[(1)] = (2));

} else {
var statearr_30126_30208 = state_30115__$1;
(statearr_30126_30208[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30116 === (24))){
var state_30115__$1 = state_30115;
var statearr_30127_30209 = state_30115__$1;
(statearr_30127_30209[(2)] = null);

(statearr_30127_30209[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30116 === (39))){
var inst_30068 = (state_30115[(16)]);
var state_30115__$1 = state_30115;
var statearr_30128_30210 = state_30115__$1;
(statearr_30128_30210[(2)] = inst_30068);

(statearr_30128_30210[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30116 === (46))){
var inst_30110 = (state_30115[(2)]);
var state_30115__$1 = state_30115;
var statearr_30129_30211 = state_30115__$1;
(statearr_30129_30211[(2)] = inst_30110);

(statearr_30129_30211[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30116 === (4))){
var inst_30012 = (state_30115[(2)]);
var inst_30013 = cljs.core.List.EMPTY;
var inst_30014 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_30013);
var inst_30015 = (function (){return (function (p1__29956_SHARP_){
var and__4115__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__29956_SHARP_);
if(cljs.core.truth_(and__4115__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__29956_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__29956_SHARP_))));
} else {
return and__4115__auto__;
}
});
})();
var inst_30016 = cljs.core.filter.call(null,inst_30015,files);
var inst_30017 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_30018 = cljs.core.concat.call(null,inst_30016,inst_30017);
var state_30115__$1 = (function (){var statearr_30130 = state_30115;
(statearr_30130[(12)] = inst_30018);

(statearr_30130[(17)] = inst_30014);

(statearr_30130[(18)] = inst_30012);

return statearr_30130;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_30131_30212 = state_30115__$1;
(statearr_30131_30212[(1)] = (16));

} else {
var statearr_30132_30213 = state_30115__$1;
(statearr_30132_30213[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30116 === (15))){
var inst_30002 = (state_30115[(2)]);
var state_30115__$1 = state_30115;
var statearr_30133_30214 = state_30115__$1;
(statearr_30133_30214[(2)] = inst_30002);

(statearr_30133_30214[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30116 === (21))){
var inst_30028 = (state_30115[(19)]);
var inst_30028__$1 = (state_30115[(2)]);
var inst_30029 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_30028__$1);
var state_30115__$1 = (function (){var statearr_30134 = state_30115;
(statearr_30134[(19)] = inst_30028__$1);

return statearr_30134;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30115__$1,(22),inst_30029);
} else {
if((state_val_30116 === (31))){
var inst_30113 = (state_30115[(2)]);
var state_30115__$1 = state_30115;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30115__$1,inst_30113);
} else {
if((state_val_30116 === (32))){
var inst_30068 = (state_30115[(16)]);
var inst_30073 = inst_30068.cljs$lang$protocol_mask$partition0$;
var inst_30074 = (inst_30073 & (64));
var inst_30075 = inst_30068.cljs$core$ISeq$;
var inst_30076 = (cljs.core.PROTOCOL_SENTINEL === inst_30075);
var inst_30077 = ((inst_30074) || (inst_30076));
var state_30115__$1 = state_30115;
if(cljs.core.truth_(inst_30077)){
var statearr_30135_30215 = state_30115__$1;
(statearr_30135_30215[(1)] = (35));

} else {
var statearr_30136_30216 = state_30115__$1;
(statearr_30136_30216[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30116 === (40))){
var inst_30090 = (state_30115[(20)]);
var inst_30089 = (state_30115[(2)]);
var inst_30090__$1 = cljs.core.get.call(null,inst_30089,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_30091 = cljs.core.get.call(null,inst_30089,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_30092 = cljs.core.not_empty.call(null,inst_30090__$1);
var state_30115__$1 = (function (){var statearr_30137 = state_30115;
(statearr_30137[(20)] = inst_30090__$1);

(statearr_30137[(21)] = inst_30091);

return statearr_30137;
})();
if(cljs.core.truth_(inst_30092)){
var statearr_30138_30217 = state_30115__$1;
(statearr_30138_30217[(1)] = (41));

} else {
var statearr_30139_30218 = state_30115__$1;
(statearr_30139_30218[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30116 === (33))){
var state_30115__$1 = state_30115;
var statearr_30140_30219 = state_30115__$1;
(statearr_30140_30219[(2)] = false);

(statearr_30140_30219[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30116 === (13))){
var inst_29988 = (state_30115[(22)]);
var inst_29992 = cljs.core.chunk_first.call(null,inst_29988);
var inst_29993 = cljs.core.chunk_rest.call(null,inst_29988);
var inst_29994 = cljs.core.count.call(null,inst_29992);
var inst_29975 = inst_29993;
var inst_29976 = inst_29992;
var inst_29977 = inst_29994;
var inst_29978 = (0);
var state_30115__$1 = (function (){var statearr_30141 = state_30115;
(statearr_30141[(7)] = inst_29976);

(statearr_30141[(8)] = inst_29975);

(statearr_30141[(9)] = inst_29978);

(statearr_30141[(10)] = inst_29977);

return statearr_30141;
})();
var statearr_30142_30220 = state_30115__$1;
(statearr_30142_30220[(2)] = null);

(statearr_30142_30220[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30116 === (22))){
var inst_30032 = (state_30115[(23)]);
var inst_30036 = (state_30115[(24)]);
var inst_30028 = (state_30115[(19)]);
var inst_30031 = (state_30115[(25)]);
var inst_30031__$1 = (state_30115[(2)]);
var inst_30032__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_30031__$1);
var inst_30033 = (function (){var all_files = inst_30028;
var res_SINGLEQUOTE_ = inst_30031__$1;
var res = inst_30032__$1;
return (function (p1__29957_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__29957_SHARP_));
});
})();
var inst_30034 = cljs.core.filter.call(null,inst_30033,inst_30031__$1);
var inst_30035 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_30036__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_30035);
var inst_30037 = cljs.core.not_empty.call(null,inst_30036__$1);
var state_30115__$1 = (function (){var statearr_30143 = state_30115;
(statearr_30143[(23)] = inst_30032__$1);

(statearr_30143[(24)] = inst_30036__$1);

(statearr_30143[(25)] = inst_30031__$1);

(statearr_30143[(26)] = inst_30034);

return statearr_30143;
})();
if(cljs.core.truth_(inst_30037)){
var statearr_30144_30221 = state_30115__$1;
(statearr_30144_30221[(1)] = (23));

} else {
var statearr_30145_30222 = state_30115__$1;
(statearr_30145_30222[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30116 === (36))){
var state_30115__$1 = state_30115;
var statearr_30146_30223 = state_30115__$1;
(statearr_30146_30223[(2)] = false);

(statearr_30146_30223[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30116 === (41))){
var inst_30090 = (state_30115[(20)]);
var inst_30094 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_30095 = cljs.core.map.call(null,inst_30094,inst_30090);
var inst_30096 = cljs.core.pr_str.call(null,inst_30095);
var inst_30097 = ["figwheel-no-load meta-data: ",inst_30096].join('');
var inst_30098 = figwheel.client.utils.log.call(null,inst_30097);
var state_30115__$1 = state_30115;
var statearr_30147_30224 = state_30115__$1;
(statearr_30147_30224[(2)] = inst_30098);

(statearr_30147_30224[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30116 === (43))){
var inst_30091 = (state_30115[(21)]);
var inst_30101 = (state_30115[(2)]);
var inst_30102 = cljs.core.not_empty.call(null,inst_30091);
var state_30115__$1 = (function (){var statearr_30148 = state_30115;
(statearr_30148[(27)] = inst_30101);

return statearr_30148;
})();
if(cljs.core.truth_(inst_30102)){
var statearr_30149_30225 = state_30115__$1;
(statearr_30149_30225[(1)] = (44));

} else {
var statearr_30150_30226 = state_30115__$1;
(statearr_30150_30226[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30116 === (29))){
var inst_30032 = (state_30115[(23)]);
var inst_30036 = (state_30115[(24)]);
var inst_30028 = (state_30115[(19)]);
var inst_30031 = (state_30115[(25)]);
var inst_30068 = (state_30115[(16)]);
var inst_30034 = (state_30115[(26)]);
var inst_30064 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_30067 = (function (){var all_files = inst_30028;
var res_SINGLEQUOTE_ = inst_30031;
var res = inst_30032;
var files_not_loaded = inst_30034;
var dependencies_that_loaded = inst_30036;
return (function (p__30066){
var map__30151 = p__30066;
var map__30151__$1 = (((((!((map__30151 == null))))?(((((map__30151.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30151.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30151):map__30151);
var namespace = cljs.core.get.call(null,map__30151__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
var inst_30068__$1 = cljs.core.group_by.call(null,inst_30067,inst_30034);
var inst_30070 = (inst_30068__$1 == null);
var inst_30071 = cljs.core.not.call(null,inst_30070);
var state_30115__$1 = (function (){var statearr_30153 = state_30115;
(statearr_30153[(28)] = inst_30064);

(statearr_30153[(16)] = inst_30068__$1);

return statearr_30153;
})();
if(inst_30071){
var statearr_30154_30227 = state_30115__$1;
(statearr_30154_30227[(1)] = (32));

} else {
var statearr_30155_30228 = state_30115__$1;
(statearr_30155_30228[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30116 === (44))){
var inst_30091 = (state_30115[(21)]);
var inst_30104 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_30091);
var inst_30105 = cljs.core.pr_str.call(null,inst_30104);
var inst_30106 = ["not required: ",inst_30105].join('');
var inst_30107 = figwheel.client.utils.log.call(null,inst_30106);
var state_30115__$1 = state_30115;
var statearr_30156_30229 = state_30115__$1;
(statearr_30156_30229[(2)] = inst_30107);

(statearr_30156_30229[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30116 === (6))){
var inst_30009 = (state_30115[(2)]);
var state_30115__$1 = state_30115;
var statearr_30157_30230 = state_30115__$1;
(statearr_30157_30230[(2)] = inst_30009);

(statearr_30157_30230[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30116 === (28))){
var inst_30034 = (state_30115[(26)]);
var inst_30061 = (state_30115[(2)]);
var inst_30062 = cljs.core.not_empty.call(null,inst_30034);
var state_30115__$1 = (function (){var statearr_30158 = state_30115;
(statearr_30158[(29)] = inst_30061);

return statearr_30158;
})();
if(cljs.core.truth_(inst_30062)){
var statearr_30159_30231 = state_30115__$1;
(statearr_30159_30231[(1)] = (29));

} else {
var statearr_30160_30232 = state_30115__$1;
(statearr_30160_30232[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30116 === (25))){
var inst_30032 = (state_30115[(23)]);
var inst_30048 = (state_30115[(2)]);
var inst_30049 = cljs.core.not_empty.call(null,inst_30032);
var state_30115__$1 = (function (){var statearr_30161 = state_30115;
(statearr_30161[(30)] = inst_30048);

return statearr_30161;
})();
if(cljs.core.truth_(inst_30049)){
var statearr_30162_30233 = state_30115__$1;
(statearr_30162_30233[(1)] = (26));

} else {
var statearr_30163_30234 = state_30115__$1;
(statearr_30163_30234[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30116 === (34))){
var inst_30084 = (state_30115[(2)]);
var state_30115__$1 = state_30115;
if(cljs.core.truth_(inst_30084)){
var statearr_30164_30235 = state_30115__$1;
(statearr_30164_30235[(1)] = (38));

} else {
var statearr_30165_30236 = state_30115__$1;
(statearr_30165_30236[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30116 === (17))){
var state_30115__$1 = state_30115;
var statearr_30166_30237 = state_30115__$1;
(statearr_30166_30237[(2)] = recompile_dependents);

(statearr_30166_30237[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30116 === (3))){
var state_30115__$1 = state_30115;
var statearr_30167_30238 = state_30115__$1;
(statearr_30167_30238[(2)] = null);

(statearr_30167_30238[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30116 === (12))){
var inst_30005 = (state_30115[(2)]);
var state_30115__$1 = state_30115;
var statearr_30168_30239 = state_30115__$1;
(statearr_30168_30239[(2)] = inst_30005);

(statearr_30168_30239[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30116 === (2))){
var inst_29967 = (state_30115[(13)]);
var inst_29974 = cljs.core.seq.call(null,inst_29967);
var inst_29975 = inst_29974;
var inst_29976 = null;
var inst_29977 = (0);
var inst_29978 = (0);
var state_30115__$1 = (function (){var statearr_30169 = state_30115;
(statearr_30169[(7)] = inst_29976);

(statearr_30169[(8)] = inst_29975);

(statearr_30169[(9)] = inst_29978);

(statearr_30169[(10)] = inst_29977);

return statearr_30169;
})();
var statearr_30170_30240 = state_30115__$1;
(statearr_30170_30240[(2)] = null);

(statearr_30170_30240[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30116 === (23))){
var inst_30032 = (state_30115[(23)]);
var inst_30036 = (state_30115[(24)]);
var inst_30028 = (state_30115[(19)]);
var inst_30031 = (state_30115[(25)]);
var inst_30034 = (state_30115[(26)]);
var inst_30039 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_30041 = (function (){var all_files = inst_30028;
var res_SINGLEQUOTE_ = inst_30031;
var res = inst_30032;
var files_not_loaded = inst_30034;
var dependencies_that_loaded = inst_30036;
return (function (p__30040){
var map__30171 = p__30040;
var map__30171__$1 = (((((!((map__30171 == null))))?(((((map__30171.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30171.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30171):map__30171);
var request_url = cljs.core.get.call(null,map__30171__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
})();
var inst_30042 = cljs.core.reverse.call(null,inst_30036);
var inst_30043 = cljs.core.map.call(null,inst_30041,inst_30042);
var inst_30044 = cljs.core.pr_str.call(null,inst_30043);
var inst_30045 = figwheel.client.utils.log.call(null,inst_30044);
var state_30115__$1 = (function (){var statearr_30173 = state_30115;
(statearr_30173[(31)] = inst_30039);

return statearr_30173;
})();
var statearr_30174_30241 = state_30115__$1;
(statearr_30174_30241[(2)] = inst_30045);

(statearr_30174_30241[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30116 === (35))){
var state_30115__$1 = state_30115;
var statearr_30175_30242 = state_30115__$1;
(statearr_30175_30242[(2)] = true);

(statearr_30175_30242[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30116 === (19))){
var inst_30018 = (state_30115[(12)]);
var inst_30024 = figwheel.client.file_reloading.expand_files.call(null,inst_30018);
var state_30115__$1 = state_30115;
var statearr_30176_30243 = state_30115__$1;
(statearr_30176_30243[(2)] = inst_30024);

(statearr_30176_30243[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30116 === (11))){
var state_30115__$1 = state_30115;
var statearr_30177_30244 = state_30115__$1;
(statearr_30177_30244[(2)] = null);

(statearr_30177_30244[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30116 === (9))){
var inst_30007 = (state_30115[(2)]);
var state_30115__$1 = state_30115;
var statearr_30178_30245 = state_30115__$1;
(statearr_30178_30245[(2)] = inst_30007);

(statearr_30178_30245[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30116 === (5))){
var inst_29978 = (state_30115[(9)]);
var inst_29977 = (state_30115[(10)]);
var inst_29980 = (inst_29978 < inst_29977);
var inst_29981 = inst_29980;
var state_30115__$1 = state_30115;
if(cljs.core.truth_(inst_29981)){
var statearr_30179_30246 = state_30115__$1;
(statearr_30179_30246[(1)] = (7));

} else {
var statearr_30180_30247 = state_30115__$1;
(statearr_30180_30247[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30116 === (14))){
var inst_29988 = (state_30115[(22)]);
var inst_29997 = cljs.core.first.call(null,inst_29988);
var inst_29998 = figwheel.client.file_reloading.eval_body.call(null,inst_29997,opts);
var inst_29999 = cljs.core.next.call(null,inst_29988);
var inst_29975 = inst_29999;
var inst_29976 = null;
var inst_29977 = (0);
var inst_29978 = (0);
var state_30115__$1 = (function (){var statearr_30181 = state_30115;
(statearr_30181[(7)] = inst_29976);

(statearr_30181[(8)] = inst_29975);

(statearr_30181[(9)] = inst_29978);

(statearr_30181[(32)] = inst_29998);

(statearr_30181[(10)] = inst_29977);

return statearr_30181;
})();
var statearr_30182_30248 = state_30115__$1;
(statearr_30182_30248[(2)] = null);

(statearr_30182_30248[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30116 === (45))){
var state_30115__$1 = state_30115;
var statearr_30183_30249 = state_30115__$1;
(statearr_30183_30249[(2)] = null);

(statearr_30183_30249[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30116 === (26))){
var inst_30032 = (state_30115[(23)]);
var inst_30036 = (state_30115[(24)]);
var inst_30028 = (state_30115[(19)]);
var inst_30031 = (state_30115[(25)]);
var inst_30034 = (state_30115[(26)]);
var inst_30051 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_30053 = (function (){var all_files = inst_30028;
var res_SINGLEQUOTE_ = inst_30031;
var res = inst_30032;
var files_not_loaded = inst_30034;
var dependencies_that_loaded = inst_30036;
return (function (p__30052){
var map__30184 = p__30052;
var map__30184__$1 = (((((!((map__30184 == null))))?(((((map__30184.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30184.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30184):map__30184);
var namespace = cljs.core.get.call(null,map__30184__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__30184__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
})();
var inst_30054 = cljs.core.map.call(null,inst_30053,inst_30032);
var inst_30055 = cljs.core.pr_str.call(null,inst_30054);
var inst_30056 = figwheel.client.utils.log.call(null,inst_30055);
var inst_30057 = (function (){var all_files = inst_30028;
var res_SINGLEQUOTE_ = inst_30031;
var res = inst_30032;
var files_not_loaded = inst_30034;
var dependencies_that_loaded = inst_30036;
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
})();
var inst_30058 = setTimeout(inst_30057,(10));
var state_30115__$1 = (function (){var statearr_30186 = state_30115;
(statearr_30186[(33)] = inst_30056);

(statearr_30186[(34)] = inst_30051);

return statearr_30186;
})();
var statearr_30187_30250 = state_30115__$1;
(statearr_30187_30250[(2)] = inst_30058);

(statearr_30187_30250[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30116 === (16))){
var state_30115__$1 = state_30115;
var statearr_30188_30251 = state_30115__$1;
(statearr_30188_30251[(2)] = reload_dependents);

(statearr_30188_30251[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30116 === (38))){
var inst_30068 = (state_30115[(16)]);
var inst_30086 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30068);
var state_30115__$1 = state_30115;
var statearr_30189_30252 = state_30115__$1;
(statearr_30189_30252[(2)] = inst_30086);

(statearr_30189_30252[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30116 === (30))){
var state_30115__$1 = state_30115;
var statearr_30190_30253 = state_30115__$1;
(statearr_30190_30253[(2)] = null);

(statearr_30190_30253[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30116 === (10))){
var inst_29988 = (state_30115[(22)]);
var inst_29990 = cljs.core.chunked_seq_QMARK_.call(null,inst_29988);
var state_30115__$1 = state_30115;
if(inst_29990){
var statearr_30191_30254 = state_30115__$1;
(statearr_30191_30254[(1)] = (13));

} else {
var statearr_30192_30255 = state_30115__$1;
(statearr_30192_30255[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30116 === (18))){
var inst_30022 = (state_30115[(2)]);
var state_30115__$1 = state_30115;
if(cljs.core.truth_(inst_30022)){
var statearr_30193_30256 = state_30115__$1;
(statearr_30193_30256[(1)] = (19));

} else {
var statearr_30194_30257 = state_30115__$1;
(statearr_30194_30257[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30116 === (42))){
var state_30115__$1 = state_30115;
var statearr_30195_30258 = state_30115__$1;
(statearr_30195_30258[(2)] = null);

(statearr_30195_30258[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30116 === (37))){
var inst_30081 = (state_30115[(2)]);
var state_30115__$1 = state_30115;
var statearr_30196_30259 = state_30115__$1;
(statearr_30196_30259[(2)] = inst_30081);

(statearr_30196_30259[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30116 === (8))){
var inst_29975 = (state_30115[(8)]);
var inst_29988 = (state_30115[(22)]);
var inst_29988__$1 = cljs.core.seq.call(null,inst_29975);
var state_30115__$1 = (function (){var statearr_30197 = state_30115;
(statearr_30197[(22)] = inst_29988__$1);

return statearr_30197;
})();
if(inst_29988__$1){
var statearr_30198_30260 = state_30115__$1;
(statearr_30198_30260[(1)] = (10));

} else {
var statearr_30199_30261 = state_30115__$1;
(statearr_30199_30261[(1)] = (11));

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
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27310__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27310__auto____0 = (function (){
var statearr_30200 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30200[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__27310__auto__);

(statearr_30200[(1)] = (1));

return statearr_30200;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27310__auto____1 = (function (state_30115){
while(true){
var ret_value__27311__auto__ = (function (){try{while(true){
var result__27312__auto__ = switch__27309__auto__.call(null,state_30115);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27312__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27312__auto__;
}
break;
}
}catch (e30201){if((e30201 instanceof Object)){
var ex__27313__auto__ = e30201;
var statearr_30202_30262 = state_30115;
(statearr_30202_30262[(5)] = ex__27313__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30115);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30201;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27311__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30263 = state_30115;
state_30115 = G__30263;
continue;
} else {
return ret_value__27311__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__27310__auto__ = function(state_30115){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27310__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27310__auto____1.call(this,state_30115);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__27310__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__27310__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__27310__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__27310__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27310__auto__;
})()
})();
var state__27406__auto__ = (function (){var statearr_30203 = f__27405__auto__.call(null);
(statearr_30203[(6)] = c__27404__auto__);

return statearr_30203;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27406__auto__);
}));

return c__27404__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__30266,link){
var map__30267 = p__30266;
var map__30267__$1 = (((((!((map__30267 == null))))?(((((map__30267.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30267.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30267):map__30267);
var file = cljs.core.get.call(null,map__30267__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5735__auto__ = link.href;
if(cljs.core.truth_(temp__5735__auto__)){
var link_href = temp__5735__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,(function (p1__30264_SHARP_,p2__30265_SHARP_){
if(cljs.core._EQ_.call(null,p1__30264_SHARP_,p2__30265_SHARP_)){
return p1__30264_SHARP_;
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
var temp__5735__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__30270){
var map__30271 = p__30270;
var map__30271__$1 = (((((!((map__30271 == null))))?(((((map__30271.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30271.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30271):map__30271);
var match_length = cljs.core.get.call(null,map__30271__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__30271__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__30269_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__30269_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__30273_SHARP_,p2__30274_SHARP_){
return cljs.core.assoc.call(null,p1__30273_SHARP_,cljs.core.get.call(null,p2__30274_SHARP_,key),p2__30274_SHARP_);
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
var loaded_f_datas_30275 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_30275);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_30275);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__30276,p__30277){
var map__30278 = p__30276;
var map__30278__$1 = (((((!((map__30278 == null))))?(((((map__30278.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30278.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30278):map__30278);
var on_cssload = cljs.core.get.call(null,map__30278__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__30279 = p__30277;
var map__30279__$1 = (((((!((map__30279 == null))))?(((((map__30279.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30279.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30279):map__30279);
var files_msg = map__30279__$1;
var files = cljs.core.get.call(null,map__30279__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1593791110890
