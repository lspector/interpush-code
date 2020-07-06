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
var G__36089 = goog.object.get(goog.debugLoader_.dependencies_,path);
if((G__36089 == null)){
return null;
} else {
return goog.object.get(G__36089,"requires");
}
}):(function (path){
var G__36090 = goog.object.get(goog.dependencies_.requires,path);
if((G__36090 == null)){
return null;
} else {
return goog.object.getKeys(G__36090);
}
}));
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__36091_SHARP_){
return (!(figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__36091_SHARP_)));
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
var G__36092 = goog.object.get(goog.debugLoader_.dependencies_,path);
var G__36092__$1 = (((G__36092 == null))?null:goog.object.get(G__36092,"provides"));
if((G__36092__$1 == null)){
return null;
} else {
return cljs.core.set.call(null,G__36092__$1);
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
var seq__36093 = cljs.core.seq.call(null,provides);
var chunk__36094 = null;
var count__36095 = (0);
var i__36096 = (0);
while(true){
if((i__36096 < count__36095)){
var prov = cljs.core._nth.call(null,chunk__36094,i__36096);
var seq__36105_36117 = cljs.core.seq.call(null,requires);
var chunk__36106_36118 = null;
var count__36107_36119 = (0);
var i__36108_36120 = (0);
while(true){
if((i__36108_36120 < count__36107_36119)){
var req_36121 = cljs.core._nth.call(null,chunk__36106_36118,i__36108_36120);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_36121,prov);


var G__36122 = seq__36105_36117;
var G__36123 = chunk__36106_36118;
var G__36124 = count__36107_36119;
var G__36125 = (i__36108_36120 + (1));
seq__36105_36117 = G__36122;
chunk__36106_36118 = G__36123;
count__36107_36119 = G__36124;
i__36108_36120 = G__36125;
continue;
} else {
var temp__5735__auto___36126 = cljs.core.seq.call(null,seq__36105_36117);
if(temp__5735__auto___36126){
var seq__36105_36127__$1 = temp__5735__auto___36126;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36105_36127__$1)){
var c__4556__auto___36128 = cljs.core.chunk_first.call(null,seq__36105_36127__$1);
var G__36129 = cljs.core.chunk_rest.call(null,seq__36105_36127__$1);
var G__36130 = c__4556__auto___36128;
var G__36131 = cljs.core.count.call(null,c__4556__auto___36128);
var G__36132 = (0);
seq__36105_36117 = G__36129;
chunk__36106_36118 = G__36130;
count__36107_36119 = G__36131;
i__36108_36120 = G__36132;
continue;
} else {
var req_36133 = cljs.core.first.call(null,seq__36105_36127__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_36133,prov);


var G__36134 = cljs.core.next.call(null,seq__36105_36127__$1);
var G__36135 = null;
var G__36136 = (0);
var G__36137 = (0);
seq__36105_36117 = G__36134;
chunk__36106_36118 = G__36135;
count__36107_36119 = G__36136;
i__36108_36120 = G__36137;
continue;
}
} else {
}
}
break;
}


var G__36138 = seq__36093;
var G__36139 = chunk__36094;
var G__36140 = count__36095;
var G__36141 = (i__36096 + (1));
seq__36093 = G__36138;
chunk__36094 = G__36139;
count__36095 = G__36140;
i__36096 = G__36141;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__36093);
if(temp__5735__auto__){
var seq__36093__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36093__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__36093__$1);
var G__36142 = cljs.core.chunk_rest.call(null,seq__36093__$1);
var G__36143 = c__4556__auto__;
var G__36144 = cljs.core.count.call(null,c__4556__auto__);
var G__36145 = (0);
seq__36093 = G__36142;
chunk__36094 = G__36143;
count__36095 = G__36144;
i__36096 = G__36145;
continue;
} else {
var prov = cljs.core.first.call(null,seq__36093__$1);
var seq__36109_36146 = cljs.core.seq.call(null,requires);
var chunk__36110_36147 = null;
var count__36111_36148 = (0);
var i__36112_36149 = (0);
while(true){
if((i__36112_36149 < count__36111_36148)){
var req_36150 = cljs.core._nth.call(null,chunk__36110_36147,i__36112_36149);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_36150,prov);


var G__36151 = seq__36109_36146;
var G__36152 = chunk__36110_36147;
var G__36153 = count__36111_36148;
var G__36154 = (i__36112_36149 + (1));
seq__36109_36146 = G__36151;
chunk__36110_36147 = G__36152;
count__36111_36148 = G__36153;
i__36112_36149 = G__36154;
continue;
} else {
var temp__5735__auto___36155__$1 = cljs.core.seq.call(null,seq__36109_36146);
if(temp__5735__auto___36155__$1){
var seq__36109_36156__$1 = temp__5735__auto___36155__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36109_36156__$1)){
var c__4556__auto___36157 = cljs.core.chunk_first.call(null,seq__36109_36156__$1);
var G__36158 = cljs.core.chunk_rest.call(null,seq__36109_36156__$1);
var G__36159 = c__4556__auto___36157;
var G__36160 = cljs.core.count.call(null,c__4556__auto___36157);
var G__36161 = (0);
seq__36109_36146 = G__36158;
chunk__36110_36147 = G__36159;
count__36111_36148 = G__36160;
i__36112_36149 = G__36161;
continue;
} else {
var req_36162 = cljs.core.first.call(null,seq__36109_36156__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_36162,prov);


var G__36163 = cljs.core.next.call(null,seq__36109_36156__$1);
var G__36164 = null;
var G__36165 = (0);
var G__36166 = (0);
seq__36109_36146 = G__36163;
chunk__36110_36147 = G__36164;
count__36111_36148 = G__36165;
i__36112_36149 = G__36166;
continue;
}
} else {
}
}
break;
}


var G__36167 = cljs.core.next.call(null,seq__36093__$1);
var G__36168 = null;
var G__36169 = (0);
var G__36170 = (0);
seq__36093 = G__36167;
chunk__36094 = G__36168;
count__36095 = G__36169;
i__36096 = G__36170;
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
var seq__36113 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,path));
var chunk__36114 = null;
var count__36115 = (0);
var i__36116 = (0);
while(true){
if((i__36116 < count__36115)){
var prov = cljs.core._nth.call(null,chunk__36114,i__36116);
goog.object.forEach(deps,((function (seq__36113,chunk__36114,count__36115,i__36116,prov,requires){
return (function (___$1,req,___$2){
return figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req,prov);
});})(seq__36113,chunk__36114,count__36115,i__36116,prov,requires))
);


var G__36171 = seq__36113;
var G__36172 = chunk__36114;
var G__36173 = count__36115;
var G__36174 = (i__36116 + (1));
seq__36113 = G__36171;
chunk__36114 = G__36172;
count__36115 = G__36173;
i__36116 = G__36174;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__36113);
if(temp__5735__auto__){
var seq__36113__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36113__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__36113__$1);
var G__36175 = cljs.core.chunk_rest.call(null,seq__36113__$1);
var G__36176 = c__4556__auto__;
var G__36177 = cljs.core.count.call(null,c__4556__auto__);
var G__36178 = (0);
seq__36113 = G__36175;
chunk__36114 = G__36176;
count__36115 = G__36177;
i__36116 = G__36178;
continue;
} else {
var prov = cljs.core.first.call(null,seq__36113__$1);
goog.object.forEach(deps,((function (seq__36113,chunk__36114,count__36115,i__36116,prov,seq__36113__$1,temp__5735__auto__,requires){
return (function (___$1,req,___$2){
return figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req,prov);
});})(seq__36113,chunk__36114,count__36115,i__36116,prov,seq__36113__$1,temp__5735__auto__,requires))
);


var G__36179 = cljs.core.next.call(null,seq__36113__$1);
var G__36180 = null;
var G__36181 = (0);
var G__36182 = (0);
seq__36113 = G__36179;
chunk__36114 = G__36180;
count__36115 = G__36181;
i__36116 = G__36182;
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
return cljs.core.some.call(null,(function (p__36183){
var vec__36184 = p__36183;
var _ = cljs.core.nth.call(null,vec__36184,(0),null);
var v = cljs.core.nth.call(null,vec__36184,(1),null);
var and__4115__auto__ = v;
if(cljs.core.truth_(and__4115__auto__)){
return v.call(null,dep);
} else {
return and__4115__auto__;
}
}),cljs.core.filter.call(null,(function (p__36187){
var vec__36188 = p__36187;
var k = cljs.core.nth.call(null,vec__36188,(0),null);
var v = cljs.core.nth.call(null,vec__36188,(1),null);
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

var seq__36200_36208 = cljs.core.seq.call(null,deps);
var chunk__36201_36209 = null;
var count__36202_36210 = (0);
var i__36203_36211 = (0);
while(true){
if((i__36203_36211 < count__36202_36210)){
var dep_36212 = cljs.core._nth.call(null,chunk__36201_36209,i__36203_36211);
if(cljs.core.truth_((function (){var and__4115__auto__ = dep_36212;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_36212));
} else {
return and__4115__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_36212,(depth + (1)),state);
} else {
}


var G__36213 = seq__36200_36208;
var G__36214 = chunk__36201_36209;
var G__36215 = count__36202_36210;
var G__36216 = (i__36203_36211 + (1));
seq__36200_36208 = G__36213;
chunk__36201_36209 = G__36214;
count__36202_36210 = G__36215;
i__36203_36211 = G__36216;
continue;
} else {
var temp__5735__auto___36217 = cljs.core.seq.call(null,seq__36200_36208);
if(temp__5735__auto___36217){
var seq__36200_36218__$1 = temp__5735__auto___36217;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36200_36218__$1)){
var c__4556__auto___36219 = cljs.core.chunk_first.call(null,seq__36200_36218__$1);
var G__36220 = cljs.core.chunk_rest.call(null,seq__36200_36218__$1);
var G__36221 = c__4556__auto___36219;
var G__36222 = cljs.core.count.call(null,c__4556__auto___36219);
var G__36223 = (0);
seq__36200_36208 = G__36220;
chunk__36201_36209 = G__36221;
count__36202_36210 = G__36222;
i__36203_36211 = G__36223;
continue;
} else {
var dep_36224 = cljs.core.first.call(null,seq__36200_36218__$1);
if(cljs.core.truth_((function (){var and__4115__auto__ = dep_36224;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_36224));
} else {
return and__4115__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_36224,(depth + (1)),state);
} else {
}


var G__36225 = cljs.core.next.call(null,seq__36200_36218__$1);
var G__36226 = null;
var G__36227 = (0);
var G__36228 = (0);
seq__36200_36208 = G__36225;
chunk__36201_36209 = G__36226;
count__36202_36210 = G__36227;
i__36203_36211 = G__36228;
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
var elim_dups_STAR_ = (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__36204){
var vec__36205 = p__36204;
var seq__36206 = cljs.core.seq.call(null,vec__36205);
var first__36207 = cljs.core.first.call(null,seq__36206);
var seq__36206__$1 = cljs.core.next.call(null,seq__36206);
var x = first__36207;
var xs = seq__36206__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,(function (p1__36191_SHARP_){
return clojure.set.difference.call(null,p1__36191_SHARP_,x);
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
figwheel.client.file_reloading.resolve_ns = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?figwheel.client.file_reloading.name__GT_path:(function (p1__36229_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,p1__36229_SHARP_))].join('');
}));
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__36230 = cljs.core.seq.call(null,provides);
var chunk__36231 = null;
var count__36232 = (0);
var i__36233 = (0);
while(true){
if((i__36233 < count__36232)){
var prov = cljs.core._nth.call(null,chunk__36231,i__36233);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__36242_36250 = cljs.core.seq.call(null,requires);
var chunk__36243_36251 = null;
var count__36244_36252 = (0);
var i__36245_36253 = (0);
while(true){
if((i__36245_36253 < count__36244_36252)){
var req_36254 = cljs.core._nth.call(null,chunk__36243_36251,i__36245_36253);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_36254,prov);


var G__36255 = seq__36242_36250;
var G__36256 = chunk__36243_36251;
var G__36257 = count__36244_36252;
var G__36258 = (i__36245_36253 + (1));
seq__36242_36250 = G__36255;
chunk__36243_36251 = G__36256;
count__36244_36252 = G__36257;
i__36245_36253 = G__36258;
continue;
} else {
var temp__5735__auto___36259 = cljs.core.seq.call(null,seq__36242_36250);
if(temp__5735__auto___36259){
var seq__36242_36260__$1 = temp__5735__auto___36259;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36242_36260__$1)){
var c__4556__auto___36261 = cljs.core.chunk_first.call(null,seq__36242_36260__$1);
var G__36262 = cljs.core.chunk_rest.call(null,seq__36242_36260__$1);
var G__36263 = c__4556__auto___36261;
var G__36264 = cljs.core.count.call(null,c__4556__auto___36261);
var G__36265 = (0);
seq__36242_36250 = G__36262;
chunk__36243_36251 = G__36263;
count__36244_36252 = G__36264;
i__36245_36253 = G__36265;
continue;
} else {
var req_36266 = cljs.core.first.call(null,seq__36242_36260__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_36266,prov);


var G__36267 = cljs.core.next.call(null,seq__36242_36260__$1);
var G__36268 = null;
var G__36269 = (0);
var G__36270 = (0);
seq__36242_36250 = G__36267;
chunk__36243_36251 = G__36268;
count__36244_36252 = G__36269;
i__36245_36253 = G__36270;
continue;
}
} else {
}
}
break;
}


var G__36271 = seq__36230;
var G__36272 = chunk__36231;
var G__36273 = count__36232;
var G__36274 = (i__36233 + (1));
seq__36230 = G__36271;
chunk__36231 = G__36272;
count__36232 = G__36273;
i__36233 = G__36274;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__36230);
if(temp__5735__auto__){
var seq__36230__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36230__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__36230__$1);
var G__36275 = cljs.core.chunk_rest.call(null,seq__36230__$1);
var G__36276 = c__4556__auto__;
var G__36277 = cljs.core.count.call(null,c__4556__auto__);
var G__36278 = (0);
seq__36230 = G__36275;
chunk__36231 = G__36276;
count__36232 = G__36277;
i__36233 = G__36278;
continue;
} else {
var prov = cljs.core.first.call(null,seq__36230__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__36246_36279 = cljs.core.seq.call(null,requires);
var chunk__36247_36280 = null;
var count__36248_36281 = (0);
var i__36249_36282 = (0);
while(true){
if((i__36249_36282 < count__36248_36281)){
var req_36283 = cljs.core._nth.call(null,chunk__36247_36280,i__36249_36282);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_36283,prov);


var G__36284 = seq__36246_36279;
var G__36285 = chunk__36247_36280;
var G__36286 = count__36248_36281;
var G__36287 = (i__36249_36282 + (1));
seq__36246_36279 = G__36284;
chunk__36247_36280 = G__36285;
count__36248_36281 = G__36286;
i__36249_36282 = G__36287;
continue;
} else {
var temp__5735__auto___36288__$1 = cljs.core.seq.call(null,seq__36246_36279);
if(temp__5735__auto___36288__$1){
var seq__36246_36289__$1 = temp__5735__auto___36288__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36246_36289__$1)){
var c__4556__auto___36290 = cljs.core.chunk_first.call(null,seq__36246_36289__$1);
var G__36291 = cljs.core.chunk_rest.call(null,seq__36246_36289__$1);
var G__36292 = c__4556__auto___36290;
var G__36293 = cljs.core.count.call(null,c__4556__auto___36290);
var G__36294 = (0);
seq__36246_36279 = G__36291;
chunk__36247_36280 = G__36292;
count__36248_36281 = G__36293;
i__36249_36282 = G__36294;
continue;
} else {
var req_36295 = cljs.core.first.call(null,seq__36246_36289__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_36295,prov);


var G__36296 = cljs.core.next.call(null,seq__36246_36289__$1);
var G__36297 = null;
var G__36298 = (0);
var G__36299 = (0);
seq__36246_36279 = G__36296;
chunk__36247_36280 = G__36297;
count__36248_36281 = G__36298;
i__36249_36282 = G__36299;
continue;
}
} else {
}
}
break;
}


var G__36300 = cljs.core.next.call(null,seq__36230__$1);
var G__36301 = null;
var G__36302 = (0);
var G__36303 = (0);
seq__36230 = G__36300;
chunk__36231 = G__36301;
count__36232 = G__36302;
i__36233 = G__36303;
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
var seq__36304_36308 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__36305_36309 = null;
var count__36306_36310 = (0);
var i__36307_36311 = (0);
while(true){
if((i__36307_36311 < count__36306_36310)){
var ns_36312 = cljs.core._nth.call(null,chunk__36305_36309,i__36307_36311);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_36312);


var G__36313 = seq__36304_36308;
var G__36314 = chunk__36305_36309;
var G__36315 = count__36306_36310;
var G__36316 = (i__36307_36311 + (1));
seq__36304_36308 = G__36313;
chunk__36305_36309 = G__36314;
count__36306_36310 = G__36315;
i__36307_36311 = G__36316;
continue;
} else {
var temp__5735__auto___36317 = cljs.core.seq.call(null,seq__36304_36308);
if(temp__5735__auto___36317){
var seq__36304_36318__$1 = temp__5735__auto___36317;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36304_36318__$1)){
var c__4556__auto___36319 = cljs.core.chunk_first.call(null,seq__36304_36318__$1);
var G__36320 = cljs.core.chunk_rest.call(null,seq__36304_36318__$1);
var G__36321 = c__4556__auto___36319;
var G__36322 = cljs.core.count.call(null,c__4556__auto___36319);
var G__36323 = (0);
seq__36304_36308 = G__36320;
chunk__36305_36309 = G__36321;
count__36306_36310 = G__36322;
i__36307_36311 = G__36323;
continue;
} else {
var ns_36324 = cljs.core.first.call(null,seq__36304_36318__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_36324);


var G__36325 = cljs.core.next.call(null,seq__36304_36318__$1);
var G__36326 = null;
var G__36327 = (0);
var G__36328 = (0);
seq__36304_36308 = G__36325;
chunk__36305_36309 = G__36326;
count__36306_36310 = G__36327;
i__36307_36311 = G__36328;
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
var G__36329__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__36329 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36330__i = 0, G__36330__a = new Array(arguments.length -  0);
while (G__36330__i < G__36330__a.length) {G__36330__a[G__36330__i] = arguments[G__36330__i + 0]; ++G__36330__i;}
  args = new cljs.core.IndexedSeq(G__36330__a,0,null);
} 
return G__36329__delegate.call(this,args);};
G__36329.cljs$lang$maxFixedArity = 0;
G__36329.cljs$lang$applyTo = (function (arglist__36331){
var args = cljs.core.seq(arglist__36331);
return G__36329__delegate(args);
});
G__36329.cljs$core$IFn$_invoke$arity$variadic = G__36329__delegate;
return G__36329;
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
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__36332_SHARP_,p2__36333_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__36332_SHARP_)),p2__36333_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__36334_SHARP_,p2__36335_SHARP_){
return goog.net.jsloader.load(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__36334_SHARP_),p2__36335_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__36336 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__36336.addCallback((function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
}));

G__36336.addErrback((function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
}));

return G__36336;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e36337){if((e36337 instanceof Error)){
var e = e36337;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e36337;

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
}catch (e36338){if((e36338 instanceof Error)){
var e = e36338;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e36338;

}
}})());
});
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__36339 = cljs.core._EQ_;
var expr__36340 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__36339.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__36340))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__36339.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__36340))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__36339.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__36340))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return (function (a,b){
throw "Reload not defined for this platform";
});
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__36342,callback){
var map__36343 = p__36342;
var map__36343__$1 = (((((!((map__36343 == null))))?(((((map__36343.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36343.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36343):map__36343);
var file_msg = map__36343__$1;
var request_url = cljs.core.get.call(null,map__36343__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

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
figwheel.client.file_reloading.reloader_loop = (function (){var c__34071__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__34072__auto__ = (function (){var switch__33976__auto__ = (function (state_36381){
var state_val_36382 = (state_36381[(1)]);
if((state_val_36382 === (7))){
var inst_36377 = (state_36381[(2)]);
var state_36381__$1 = state_36381;
var statearr_36383_36409 = state_36381__$1;
(statearr_36383_36409[(2)] = inst_36377);

(statearr_36383_36409[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36382 === (1))){
var state_36381__$1 = state_36381;
var statearr_36384_36410 = state_36381__$1;
(statearr_36384_36410[(2)] = null);

(statearr_36384_36410[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36382 === (4))){
var inst_36347 = (state_36381[(7)]);
var inst_36347__$1 = (state_36381[(2)]);
var state_36381__$1 = (function (){var statearr_36385 = state_36381;
(statearr_36385[(7)] = inst_36347__$1);

return statearr_36385;
})();
if(cljs.core.truth_(inst_36347__$1)){
var statearr_36386_36411 = state_36381__$1;
(statearr_36386_36411[(1)] = (5));

} else {
var statearr_36387_36412 = state_36381__$1;
(statearr_36387_36412[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36382 === (15))){
var inst_36360 = (state_36381[(8)]);
var inst_36362 = (state_36381[(9)]);
var inst_36364 = inst_36362.call(null,inst_36360);
var state_36381__$1 = state_36381;
var statearr_36388_36413 = state_36381__$1;
(statearr_36388_36413[(2)] = inst_36364);

(statearr_36388_36413[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36382 === (13))){
var inst_36371 = (state_36381[(2)]);
var state_36381__$1 = state_36381;
var statearr_36389_36414 = state_36381__$1;
(statearr_36389_36414[(2)] = inst_36371);

(statearr_36389_36414[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36382 === (6))){
var state_36381__$1 = state_36381;
var statearr_36390_36415 = state_36381__$1;
(statearr_36390_36415[(2)] = null);

(statearr_36390_36415[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36382 === (17))){
var inst_36368 = (state_36381[(2)]);
var state_36381__$1 = state_36381;
var statearr_36391_36416 = state_36381__$1;
(statearr_36391_36416[(2)] = inst_36368);

(statearr_36391_36416[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36382 === (3))){
var inst_36379 = (state_36381[(2)]);
var state_36381__$1 = state_36381;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36381__$1,inst_36379);
} else {
if((state_val_36382 === (12))){
var state_36381__$1 = state_36381;
var statearr_36392_36417 = state_36381__$1;
(statearr_36392_36417[(2)] = null);

(statearr_36392_36417[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36382 === (2))){
var state_36381__$1 = state_36381;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36381__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_36382 === (11))){
var inst_36352 = (state_36381[(10)]);
var inst_36358 = figwheel.client.file_reloading.blocking_load.call(null,inst_36352);
var state_36381__$1 = state_36381;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36381__$1,(14),inst_36358);
} else {
if((state_val_36382 === (9))){
var inst_36352 = (state_36381[(10)]);
var state_36381__$1 = state_36381;
if(cljs.core.truth_(inst_36352)){
var statearr_36393_36418 = state_36381__$1;
(statearr_36393_36418[(1)] = (11));

} else {
var statearr_36394_36419 = state_36381__$1;
(statearr_36394_36419[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36382 === (5))){
var inst_36347 = (state_36381[(7)]);
var inst_36353 = (state_36381[(11)]);
var inst_36352 = cljs.core.nth.call(null,inst_36347,(0),null);
var inst_36353__$1 = cljs.core.nth.call(null,inst_36347,(1),null);
var state_36381__$1 = (function (){var statearr_36395 = state_36381;
(statearr_36395[(10)] = inst_36352);

(statearr_36395[(11)] = inst_36353__$1);

return statearr_36395;
})();
if(cljs.core.truth_(inst_36353__$1)){
var statearr_36396_36420 = state_36381__$1;
(statearr_36396_36420[(1)] = (8));

} else {
var statearr_36397_36421 = state_36381__$1;
(statearr_36397_36421[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36382 === (14))){
var inst_36362 = (state_36381[(9)]);
var inst_36352 = (state_36381[(10)]);
var inst_36360 = (state_36381[(2)]);
var inst_36361 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_36362__$1 = cljs.core.get.call(null,inst_36361,inst_36352);
var state_36381__$1 = (function (){var statearr_36398 = state_36381;
(statearr_36398[(8)] = inst_36360);

(statearr_36398[(9)] = inst_36362__$1);

return statearr_36398;
})();
if(cljs.core.truth_(inst_36362__$1)){
var statearr_36399_36422 = state_36381__$1;
(statearr_36399_36422[(1)] = (15));

} else {
var statearr_36400_36423 = state_36381__$1;
(statearr_36400_36423[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36382 === (16))){
var inst_36360 = (state_36381[(8)]);
var inst_36366 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_36360);
var state_36381__$1 = state_36381;
var statearr_36401_36424 = state_36381__$1;
(statearr_36401_36424[(2)] = inst_36366);

(statearr_36401_36424[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36382 === (10))){
var inst_36373 = (state_36381[(2)]);
var state_36381__$1 = (function (){var statearr_36402 = state_36381;
(statearr_36402[(12)] = inst_36373);

return statearr_36402;
})();
var statearr_36403_36425 = state_36381__$1;
(statearr_36403_36425[(2)] = null);

(statearr_36403_36425[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36382 === (8))){
var inst_36353 = (state_36381[(11)]);
var inst_36355 = eval(inst_36353);
var state_36381__$1 = state_36381;
var statearr_36404_36426 = state_36381__$1;
(statearr_36404_36426[(2)] = inst_36355);

(statearr_36404_36426[(1)] = (10));


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
var figwheel$client$file_reloading$state_machine__33977__auto__ = null;
var figwheel$client$file_reloading$state_machine__33977__auto____0 = (function (){
var statearr_36405 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36405[(0)] = figwheel$client$file_reloading$state_machine__33977__auto__);

(statearr_36405[(1)] = (1));

return statearr_36405;
});
var figwheel$client$file_reloading$state_machine__33977__auto____1 = (function (state_36381){
while(true){
var ret_value__33978__auto__ = (function (){try{while(true){
var result__33979__auto__ = switch__33976__auto__.call(null,state_36381);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33979__auto__;
}
break;
}
}catch (e36406){if((e36406 instanceof Object)){
var ex__33980__auto__ = e36406;
var statearr_36407_36427 = state_36381;
(statearr_36407_36427[(5)] = ex__33980__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36381);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36406;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33978__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36428 = state_36381;
state_36381 = G__36428;
continue;
} else {
return ret_value__33978__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__33977__auto__ = function(state_36381){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__33977__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__33977__auto____1.call(this,state_36381);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__33977__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__33977__auto____0;
figwheel$client$file_reloading$state_machine__33977__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__33977__auto____1;
return figwheel$client$file_reloading$state_machine__33977__auto__;
})()
})();
var state__34073__auto__ = (function (){var statearr_36408 = f__34072__auto__.call(null);
(statearr_36408[(6)] = c__34071__auto__);

return statearr_36408;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34073__auto__);
}));

return c__34071__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__36430 = arguments.length;
switch (G__36430) {
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

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__36432,callback){
var map__36433 = p__36432;
var map__36433__$1 = (((((!((map__36433 == null))))?(((((map__36433.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36433.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36433):map__36433);
var file_msg = map__36433__$1;
var namespace = cljs.core.get.call(null,map__36433__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,(function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
}));

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__36435){
var map__36436 = p__36435;
var map__36436__$1 = (((((!((map__36436 == null))))?(((((map__36436.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36436.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36436):map__36436);
var file_msg = map__36436__$1;
var namespace = cljs.core.get.call(null,map__36436__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null)));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__36438){
var map__36439 = p__36438;
var map__36439__$1 = (((((!((map__36439 == null))))?(((((map__36439.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36439.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36439):map__36439);
var file_msg = map__36439__$1;
var namespace = cljs.core.get.call(null,map__36439__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__36441,callback){
var map__36442 = p__36441;
var map__36442__$1 = (((((!((map__36442 == null))))?(((((map__36442.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36442.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36442):map__36442);
var file_msg = map__36442__$1;
var request_url = cljs.core.get.call(null,map__36442__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__36442__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__34071__auto___36492 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__34072__auto__ = (function (){var switch__33976__auto__ = (function (state_36477){
var state_val_36478 = (state_36477[(1)]);
if((state_val_36478 === (1))){
var inst_36451 = cljs.core.seq.call(null,files);
var inst_36452 = cljs.core.first.call(null,inst_36451);
var inst_36453 = cljs.core.next.call(null,inst_36451);
var inst_36454 = files;
var state_36477__$1 = (function (){var statearr_36479 = state_36477;
(statearr_36479[(7)] = inst_36452);

(statearr_36479[(8)] = inst_36453);

(statearr_36479[(9)] = inst_36454);

return statearr_36479;
})();
var statearr_36480_36493 = state_36477__$1;
(statearr_36480_36493[(2)] = null);

(statearr_36480_36493[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36478 === (2))){
var inst_36460 = (state_36477[(10)]);
var inst_36454 = (state_36477[(9)]);
var inst_36459 = cljs.core.seq.call(null,inst_36454);
var inst_36460__$1 = cljs.core.first.call(null,inst_36459);
var inst_36461 = cljs.core.next.call(null,inst_36459);
var inst_36462 = (inst_36460__$1 == null);
var inst_36463 = cljs.core.not.call(null,inst_36462);
var state_36477__$1 = (function (){var statearr_36481 = state_36477;
(statearr_36481[(11)] = inst_36461);

(statearr_36481[(10)] = inst_36460__$1);

return statearr_36481;
})();
if(inst_36463){
var statearr_36482_36494 = state_36477__$1;
(statearr_36482_36494[(1)] = (4));

} else {
var statearr_36483_36495 = state_36477__$1;
(statearr_36483_36495[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36478 === (3))){
var inst_36475 = (state_36477[(2)]);
var state_36477__$1 = state_36477;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36477__$1,inst_36475);
} else {
if((state_val_36478 === (4))){
var inst_36460 = (state_36477[(10)]);
var inst_36465 = figwheel.client.file_reloading.reload_js_file.call(null,inst_36460);
var state_36477__$1 = state_36477;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36477__$1,(7),inst_36465);
} else {
if((state_val_36478 === (5))){
var inst_36471 = cljs.core.async.close_BANG_.call(null,out);
var state_36477__$1 = state_36477;
var statearr_36484_36496 = state_36477__$1;
(statearr_36484_36496[(2)] = inst_36471);

(statearr_36484_36496[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36478 === (6))){
var inst_36473 = (state_36477[(2)]);
var state_36477__$1 = state_36477;
var statearr_36485_36497 = state_36477__$1;
(statearr_36485_36497[(2)] = inst_36473);

(statearr_36485_36497[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36478 === (7))){
var inst_36461 = (state_36477[(11)]);
var inst_36467 = (state_36477[(2)]);
var inst_36468 = cljs.core.async.put_BANG_.call(null,out,inst_36467);
var inst_36454 = inst_36461;
var state_36477__$1 = (function (){var statearr_36486 = state_36477;
(statearr_36486[(12)] = inst_36468);

(statearr_36486[(9)] = inst_36454);

return statearr_36486;
})();
var statearr_36487_36498 = state_36477__$1;
(statearr_36487_36498[(2)] = null);

(statearr_36487_36498[(1)] = (2));


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
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__33977__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__33977__auto____0 = (function (){
var statearr_36488 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36488[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__33977__auto__);

(statearr_36488[(1)] = (1));

return statearr_36488;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__33977__auto____1 = (function (state_36477){
while(true){
var ret_value__33978__auto__ = (function (){try{while(true){
var result__33979__auto__ = switch__33976__auto__.call(null,state_36477);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33979__auto__;
}
break;
}
}catch (e36489){if((e36489 instanceof Object)){
var ex__33980__auto__ = e36489;
var statearr_36490_36499 = state_36477;
(statearr_36490_36499[(5)] = ex__33980__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36477);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36489;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33978__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36500 = state_36477;
state_36477 = G__36500;
continue;
} else {
return ret_value__33978__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__33977__auto__ = function(state_36477){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__33977__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__33977__auto____1.call(this,state_36477);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__33977__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__33977__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__33977__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__33977__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__33977__auto__;
})()
})();
var state__34073__auto__ = (function (){var statearr_36491 = f__34072__auto__.call(null);
(statearr_36491[(6)] = c__34071__auto___36492);

return statearr_36491;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34073__auto__);
}));


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__36501,opts){
var map__36502 = p__36501;
var map__36502__$1 = (((((!((map__36502 == null))))?(((((map__36502.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36502.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36502):map__36502);
var eval_body = cljs.core.get.call(null,map__36502__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__36502__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e36504){var e = e36504;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,(function (n){
var temp__5733__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__36505_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__36505_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__36506){
var vec__36507 = p__36506;
var k = cljs.core.nth.call(null,vec__36507,(0),null);
var v = cljs.core.nth.call(null,vec__36507,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__36510){
var vec__36511 = p__36510;
var k = cljs.core.nth.call(null,vec__36511,(0),null);
var v = cljs.core.nth.call(null,vec__36511,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__36517,p__36518){
var map__36519 = p__36517;
var map__36519__$1 = (((((!((map__36519 == null))))?(((((map__36519.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36519.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36519):map__36519);
var opts = map__36519__$1;
var before_jsload = cljs.core.get.call(null,map__36519__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__36519__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__36519__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__36520 = p__36518;
var map__36520__$1 = (((((!((map__36520 == null))))?(((((map__36520.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36520.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36520):map__36520);
var msg = map__36520__$1;
var files = cljs.core.get.call(null,map__36520__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__36520__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__36520__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__34071__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__34072__auto__ = (function (){var switch__33976__auto__ = (function (state_36674){
var state_val_36675 = (state_36674[(1)]);
if((state_val_36675 === (7))){
var inst_36535 = (state_36674[(7)]);
var inst_36534 = (state_36674[(8)]);
var inst_36537 = (state_36674[(9)]);
var inst_36536 = (state_36674[(10)]);
var inst_36542 = cljs.core._nth.call(null,inst_36535,inst_36537);
var inst_36543 = figwheel.client.file_reloading.eval_body.call(null,inst_36542,opts);
var inst_36544 = (inst_36537 + (1));
var tmp36676 = inst_36535;
var tmp36677 = inst_36534;
var tmp36678 = inst_36536;
var inst_36534__$1 = tmp36677;
var inst_36535__$1 = tmp36676;
var inst_36536__$1 = tmp36678;
var inst_36537__$1 = inst_36544;
var state_36674__$1 = (function (){var statearr_36679 = state_36674;
(statearr_36679[(11)] = inst_36543);

(statearr_36679[(7)] = inst_36535__$1);

(statearr_36679[(8)] = inst_36534__$1);

(statearr_36679[(9)] = inst_36537__$1);

(statearr_36679[(10)] = inst_36536__$1);

return statearr_36679;
})();
var statearr_36680_36763 = state_36674__$1;
(statearr_36680_36763[(2)] = null);

(statearr_36680_36763[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36675 === (20))){
var inst_36577 = (state_36674[(12)]);
var inst_36585 = figwheel.client.file_reloading.sort_files.call(null,inst_36577);
var state_36674__$1 = state_36674;
var statearr_36681_36764 = state_36674__$1;
(statearr_36681_36764[(2)] = inst_36585);

(statearr_36681_36764[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36675 === (27))){
var state_36674__$1 = state_36674;
var statearr_36682_36765 = state_36674__$1;
(statearr_36682_36765[(2)] = null);

(statearr_36682_36765[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36675 === (1))){
var inst_36526 = (state_36674[(13)]);
var inst_36523 = before_jsload.call(null,files);
var inst_36524 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_36525 = (function (){return (function (p1__36514_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__36514_SHARP_);
});
})();
var inst_36526__$1 = cljs.core.filter.call(null,inst_36525,files);
var inst_36527 = cljs.core.not_empty.call(null,inst_36526__$1);
var state_36674__$1 = (function (){var statearr_36683 = state_36674;
(statearr_36683[(13)] = inst_36526__$1);

(statearr_36683[(14)] = inst_36524);

(statearr_36683[(15)] = inst_36523);

return statearr_36683;
})();
if(cljs.core.truth_(inst_36527)){
var statearr_36684_36766 = state_36674__$1;
(statearr_36684_36766[(1)] = (2));

} else {
var statearr_36685_36767 = state_36674__$1;
(statearr_36685_36767[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36675 === (24))){
var state_36674__$1 = state_36674;
var statearr_36686_36768 = state_36674__$1;
(statearr_36686_36768[(2)] = null);

(statearr_36686_36768[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36675 === (39))){
var inst_36627 = (state_36674[(16)]);
var state_36674__$1 = state_36674;
var statearr_36687_36769 = state_36674__$1;
(statearr_36687_36769[(2)] = inst_36627);

(statearr_36687_36769[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36675 === (46))){
var inst_36669 = (state_36674[(2)]);
var state_36674__$1 = state_36674;
var statearr_36688_36770 = state_36674__$1;
(statearr_36688_36770[(2)] = inst_36669);

(statearr_36688_36770[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36675 === (4))){
var inst_36571 = (state_36674[(2)]);
var inst_36572 = cljs.core.List.EMPTY;
var inst_36573 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_36572);
var inst_36574 = (function (){return (function (p1__36515_SHARP_){
var and__4115__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__36515_SHARP_);
if(cljs.core.truth_(and__4115__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__36515_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__36515_SHARP_))));
} else {
return and__4115__auto__;
}
});
})();
var inst_36575 = cljs.core.filter.call(null,inst_36574,files);
var inst_36576 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_36577 = cljs.core.concat.call(null,inst_36575,inst_36576);
var state_36674__$1 = (function (){var statearr_36689 = state_36674;
(statearr_36689[(17)] = inst_36571);

(statearr_36689[(12)] = inst_36577);

(statearr_36689[(18)] = inst_36573);

return statearr_36689;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_36690_36771 = state_36674__$1;
(statearr_36690_36771[(1)] = (16));

} else {
var statearr_36691_36772 = state_36674__$1;
(statearr_36691_36772[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36675 === (15))){
var inst_36561 = (state_36674[(2)]);
var state_36674__$1 = state_36674;
var statearr_36692_36773 = state_36674__$1;
(statearr_36692_36773[(2)] = inst_36561);

(statearr_36692_36773[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36675 === (21))){
var inst_36587 = (state_36674[(19)]);
var inst_36587__$1 = (state_36674[(2)]);
var inst_36588 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_36587__$1);
var state_36674__$1 = (function (){var statearr_36693 = state_36674;
(statearr_36693[(19)] = inst_36587__$1);

return statearr_36693;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36674__$1,(22),inst_36588);
} else {
if((state_val_36675 === (31))){
var inst_36672 = (state_36674[(2)]);
var state_36674__$1 = state_36674;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36674__$1,inst_36672);
} else {
if((state_val_36675 === (32))){
var inst_36627 = (state_36674[(16)]);
var inst_36632 = inst_36627.cljs$lang$protocol_mask$partition0$;
var inst_36633 = (inst_36632 & (64));
var inst_36634 = inst_36627.cljs$core$ISeq$;
var inst_36635 = (cljs.core.PROTOCOL_SENTINEL === inst_36634);
var inst_36636 = ((inst_36633) || (inst_36635));
var state_36674__$1 = state_36674;
if(cljs.core.truth_(inst_36636)){
var statearr_36694_36774 = state_36674__$1;
(statearr_36694_36774[(1)] = (35));

} else {
var statearr_36695_36775 = state_36674__$1;
(statearr_36695_36775[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36675 === (40))){
var inst_36649 = (state_36674[(20)]);
var inst_36648 = (state_36674[(2)]);
var inst_36649__$1 = cljs.core.get.call(null,inst_36648,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_36650 = cljs.core.get.call(null,inst_36648,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_36651 = cljs.core.not_empty.call(null,inst_36649__$1);
var state_36674__$1 = (function (){var statearr_36696 = state_36674;
(statearr_36696[(20)] = inst_36649__$1);

(statearr_36696[(21)] = inst_36650);

return statearr_36696;
})();
if(cljs.core.truth_(inst_36651)){
var statearr_36697_36776 = state_36674__$1;
(statearr_36697_36776[(1)] = (41));

} else {
var statearr_36698_36777 = state_36674__$1;
(statearr_36698_36777[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36675 === (33))){
var state_36674__$1 = state_36674;
var statearr_36699_36778 = state_36674__$1;
(statearr_36699_36778[(2)] = false);

(statearr_36699_36778[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36675 === (13))){
var inst_36547 = (state_36674[(22)]);
var inst_36551 = cljs.core.chunk_first.call(null,inst_36547);
var inst_36552 = cljs.core.chunk_rest.call(null,inst_36547);
var inst_36553 = cljs.core.count.call(null,inst_36551);
var inst_36534 = inst_36552;
var inst_36535 = inst_36551;
var inst_36536 = inst_36553;
var inst_36537 = (0);
var state_36674__$1 = (function (){var statearr_36700 = state_36674;
(statearr_36700[(7)] = inst_36535);

(statearr_36700[(8)] = inst_36534);

(statearr_36700[(9)] = inst_36537);

(statearr_36700[(10)] = inst_36536);

return statearr_36700;
})();
var statearr_36701_36779 = state_36674__$1;
(statearr_36701_36779[(2)] = null);

(statearr_36701_36779[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36675 === (22))){
var inst_36595 = (state_36674[(23)]);
var inst_36591 = (state_36674[(24)]);
var inst_36590 = (state_36674[(25)]);
var inst_36587 = (state_36674[(19)]);
var inst_36590__$1 = (state_36674[(2)]);
var inst_36591__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_36590__$1);
var inst_36592 = (function (){var all_files = inst_36587;
var res_SINGLEQUOTE_ = inst_36590__$1;
var res = inst_36591__$1;
return (function (p1__36516_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__36516_SHARP_));
});
})();
var inst_36593 = cljs.core.filter.call(null,inst_36592,inst_36590__$1);
var inst_36594 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_36595__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_36594);
var inst_36596 = cljs.core.not_empty.call(null,inst_36595__$1);
var state_36674__$1 = (function (){var statearr_36702 = state_36674;
(statearr_36702[(26)] = inst_36593);

(statearr_36702[(23)] = inst_36595__$1);

(statearr_36702[(24)] = inst_36591__$1);

(statearr_36702[(25)] = inst_36590__$1);

return statearr_36702;
})();
if(cljs.core.truth_(inst_36596)){
var statearr_36703_36780 = state_36674__$1;
(statearr_36703_36780[(1)] = (23));

} else {
var statearr_36704_36781 = state_36674__$1;
(statearr_36704_36781[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36675 === (36))){
var state_36674__$1 = state_36674;
var statearr_36705_36782 = state_36674__$1;
(statearr_36705_36782[(2)] = false);

(statearr_36705_36782[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36675 === (41))){
var inst_36649 = (state_36674[(20)]);
var inst_36653 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_36654 = cljs.core.map.call(null,inst_36653,inst_36649);
var inst_36655 = cljs.core.pr_str.call(null,inst_36654);
var inst_36656 = ["figwheel-no-load meta-data: ",inst_36655].join('');
var inst_36657 = figwheel.client.utils.log.call(null,inst_36656);
var state_36674__$1 = state_36674;
var statearr_36706_36783 = state_36674__$1;
(statearr_36706_36783[(2)] = inst_36657);

(statearr_36706_36783[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36675 === (43))){
var inst_36650 = (state_36674[(21)]);
var inst_36660 = (state_36674[(2)]);
var inst_36661 = cljs.core.not_empty.call(null,inst_36650);
var state_36674__$1 = (function (){var statearr_36707 = state_36674;
(statearr_36707[(27)] = inst_36660);

return statearr_36707;
})();
if(cljs.core.truth_(inst_36661)){
var statearr_36708_36784 = state_36674__$1;
(statearr_36708_36784[(1)] = (44));

} else {
var statearr_36709_36785 = state_36674__$1;
(statearr_36709_36785[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36675 === (29))){
var inst_36593 = (state_36674[(26)]);
var inst_36595 = (state_36674[(23)]);
var inst_36591 = (state_36674[(24)]);
var inst_36627 = (state_36674[(16)]);
var inst_36590 = (state_36674[(25)]);
var inst_36587 = (state_36674[(19)]);
var inst_36623 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_36626 = (function (){var all_files = inst_36587;
var res_SINGLEQUOTE_ = inst_36590;
var res = inst_36591;
var files_not_loaded = inst_36593;
var dependencies_that_loaded = inst_36595;
return (function (p__36625){
var map__36710 = p__36625;
var map__36710__$1 = (((((!((map__36710 == null))))?(((((map__36710.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36710.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36710):map__36710);
var namespace = cljs.core.get.call(null,map__36710__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
var inst_36627__$1 = cljs.core.group_by.call(null,inst_36626,inst_36593);
var inst_36629 = (inst_36627__$1 == null);
var inst_36630 = cljs.core.not.call(null,inst_36629);
var state_36674__$1 = (function (){var statearr_36712 = state_36674;
(statearr_36712[(28)] = inst_36623);

(statearr_36712[(16)] = inst_36627__$1);

return statearr_36712;
})();
if(inst_36630){
var statearr_36713_36786 = state_36674__$1;
(statearr_36713_36786[(1)] = (32));

} else {
var statearr_36714_36787 = state_36674__$1;
(statearr_36714_36787[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36675 === (44))){
var inst_36650 = (state_36674[(21)]);
var inst_36663 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_36650);
var inst_36664 = cljs.core.pr_str.call(null,inst_36663);
var inst_36665 = ["not required: ",inst_36664].join('');
var inst_36666 = figwheel.client.utils.log.call(null,inst_36665);
var state_36674__$1 = state_36674;
var statearr_36715_36788 = state_36674__$1;
(statearr_36715_36788[(2)] = inst_36666);

(statearr_36715_36788[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36675 === (6))){
var inst_36568 = (state_36674[(2)]);
var state_36674__$1 = state_36674;
var statearr_36716_36789 = state_36674__$1;
(statearr_36716_36789[(2)] = inst_36568);

(statearr_36716_36789[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36675 === (28))){
var inst_36593 = (state_36674[(26)]);
var inst_36620 = (state_36674[(2)]);
var inst_36621 = cljs.core.not_empty.call(null,inst_36593);
var state_36674__$1 = (function (){var statearr_36717 = state_36674;
(statearr_36717[(29)] = inst_36620);

return statearr_36717;
})();
if(cljs.core.truth_(inst_36621)){
var statearr_36718_36790 = state_36674__$1;
(statearr_36718_36790[(1)] = (29));

} else {
var statearr_36719_36791 = state_36674__$1;
(statearr_36719_36791[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36675 === (25))){
var inst_36591 = (state_36674[(24)]);
var inst_36607 = (state_36674[(2)]);
var inst_36608 = cljs.core.not_empty.call(null,inst_36591);
var state_36674__$1 = (function (){var statearr_36720 = state_36674;
(statearr_36720[(30)] = inst_36607);

return statearr_36720;
})();
if(cljs.core.truth_(inst_36608)){
var statearr_36721_36792 = state_36674__$1;
(statearr_36721_36792[(1)] = (26));

} else {
var statearr_36722_36793 = state_36674__$1;
(statearr_36722_36793[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36675 === (34))){
var inst_36643 = (state_36674[(2)]);
var state_36674__$1 = state_36674;
if(cljs.core.truth_(inst_36643)){
var statearr_36723_36794 = state_36674__$1;
(statearr_36723_36794[(1)] = (38));

} else {
var statearr_36724_36795 = state_36674__$1;
(statearr_36724_36795[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36675 === (17))){
var state_36674__$1 = state_36674;
var statearr_36725_36796 = state_36674__$1;
(statearr_36725_36796[(2)] = recompile_dependents);

(statearr_36725_36796[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36675 === (3))){
var state_36674__$1 = state_36674;
var statearr_36726_36797 = state_36674__$1;
(statearr_36726_36797[(2)] = null);

(statearr_36726_36797[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36675 === (12))){
var inst_36564 = (state_36674[(2)]);
var state_36674__$1 = state_36674;
var statearr_36727_36798 = state_36674__$1;
(statearr_36727_36798[(2)] = inst_36564);

(statearr_36727_36798[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36675 === (2))){
var inst_36526 = (state_36674[(13)]);
var inst_36533 = cljs.core.seq.call(null,inst_36526);
var inst_36534 = inst_36533;
var inst_36535 = null;
var inst_36536 = (0);
var inst_36537 = (0);
var state_36674__$1 = (function (){var statearr_36728 = state_36674;
(statearr_36728[(7)] = inst_36535);

(statearr_36728[(8)] = inst_36534);

(statearr_36728[(9)] = inst_36537);

(statearr_36728[(10)] = inst_36536);

return statearr_36728;
})();
var statearr_36729_36799 = state_36674__$1;
(statearr_36729_36799[(2)] = null);

(statearr_36729_36799[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36675 === (23))){
var inst_36593 = (state_36674[(26)]);
var inst_36595 = (state_36674[(23)]);
var inst_36591 = (state_36674[(24)]);
var inst_36590 = (state_36674[(25)]);
var inst_36587 = (state_36674[(19)]);
var inst_36598 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_36600 = (function (){var all_files = inst_36587;
var res_SINGLEQUOTE_ = inst_36590;
var res = inst_36591;
var files_not_loaded = inst_36593;
var dependencies_that_loaded = inst_36595;
return (function (p__36599){
var map__36730 = p__36599;
var map__36730__$1 = (((((!((map__36730 == null))))?(((((map__36730.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36730.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36730):map__36730);
var request_url = cljs.core.get.call(null,map__36730__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
})();
var inst_36601 = cljs.core.reverse.call(null,inst_36595);
var inst_36602 = cljs.core.map.call(null,inst_36600,inst_36601);
var inst_36603 = cljs.core.pr_str.call(null,inst_36602);
var inst_36604 = figwheel.client.utils.log.call(null,inst_36603);
var state_36674__$1 = (function (){var statearr_36732 = state_36674;
(statearr_36732[(31)] = inst_36598);

return statearr_36732;
})();
var statearr_36733_36800 = state_36674__$1;
(statearr_36733_36800[(2)] = inst_36604);

(statearr_36733_36800[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36675 === (35))){
var state_36674__$1 = state_36674;
var statearr_36734_36801 = state_36674__$1;
(statearr_36734_36801[(2)] = true);

(statearr_36734_36801[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36675 === (19))){
var inst_36577 = (state_36674[(12)]);
var inst_36583 = figwheel.client.file_reloading.expand_files.call(null,inst_36577);
var state_36674__$1 = state_36674;
var statearr_36735_36802 = state_36674__$1;
(statearr_36735_36802[(2)] = inst_36583);

(statearr_36735_36802[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36675 === (11))){
var state_36674__$1 = state_36674;
var statearr_36736_36803 = state_36674__$1;
(statearr_36736_36803[(2)] = null);

(statearr_36736_36803[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36675 === (9))){
var inst_36566 = (state_36674[(2)]);
var state_36674__$1 = state_36674;
var statearr_36737_36804 = state_36674__$1;
(statearr_36737_36804[(2)] = inst_36566);

(statearr_36737_36804[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36675 === (5))){
var inst_36537 = (state_36674[(9)]);
var inst_36536 = (state_36674[(10)]);
var inst_36539 = (inst_36537 < inst_36536);
var inst_36540 = inst_36539;
var state_36674__$1 = state_36674;
if(cljs.core.truth_(inst_36540)){
var statearr_36738_36805 = state_36674__$1;
(statearr_36738_36805[(1)] = (7));

} else {
var statearr_36739_36806 = state_36674__$1;
(statearr_36739_36806[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36675 === (14))){
var inst_36547 = (state_36674[(22)]);
var inst_36556 = cljs.core.first.call(null,inst_36547);
var inst_36557 = figwheel.client.file_reloading.eval_body.call(null,inst_36556,opts);
var inst_36558 = cljs.core.next.call(null,inst_36547);
var inst_36534 = inst_36558;
var inst_36535 = null;
var inst_36536 = (0);
var inst_36537 = (0);
var state_36674__$1 = (function (){var statearr_36740 = state_36674;
(statearr_36740[(7)] = inst_36535);

(statearr_36740[(32)] = inst_36557);

(statearr_36740[(8)] = inst_36534);

(statearr_36740[(9)] = inst_36537);

(statearr_36740[(10)] = inst_36536);

return statearr_36740;
})();
var statearr_36741_36807 = state_36674__$1;
(statearr_36741_36807[(2)] = null);

(statearr_36741_36807[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36675 === (45))){
var state_36674__$1 = state_36674;
var statearr_36742_36808 = state_36674__$1;
(statearr_36742_36808[(2)] = null);

(statearr_36742_36808[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36675 === (26))){
var inst_36593 = (state_36674[(26)]);
var inst_36595 = (state_36674[(23)]);
var inst_36591 = (state_36674[(24)]);
var inst_36590 = (state_36674[(25)]);
var inst_36587 = (state_36674[(19)]);
var inst_36610 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_36612 = (function (){var all_files = inst_36587;
var res_SINGLEQUOTE_ = inst_36590;
var res = inst_36591;
var files_not_loaded = inst_36593;
var dependencies_that_loaded = inst_36595;
return (function (p__36611){
var map__36743 = p__36611;
var map__36743__$1 = (((((!((map__36743 == null))))?(((((map__36743.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36743.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36743):map__36743);
var namespace = cljs.core.get.call(null,map__36743__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__36743__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
})();
var inst_36613 = cljs.core.map.call(null,inst_36612,inst_36591);
var inst_36614 = cljs.core.pr_str.call(null,inst_36613);
var inst_36615 = figwheel.client.utils.log.call(null,inst_36614);
var inst_36616 = (function (){var all_files = inst_36587;
var res_SINGLEQUOTE_ = inst_36590;
var res = inst_36591;
var files_not_loaded = inst_36593;
var dependencies_that_loaded = inst_36595;
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
})();
var inst_36617 = setTimeout(inst_36616,(10));
var state_36674__$1 = (function (){var statearr_36745 = state_36674;
(statearr_36745[(33)] = inst_36610);

(statearr_36745[(34)] = inst_36615);

return statearr_36745;
})();
var statearr_36746_36809 = state_36674__$1;
(statearr_36746_36809[(2)] = inst_36617);

(statearr_36746_36809[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36675 === (16))){
var state_36674__$1 = state_36674;
var statearr_36747_36810 = state_36674__$1;
(statearr_36747_36810[(2)] = reload_dependents);

(statearr_36747_36810[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36675 === (38))){
var inst_36627 = (state_36674[(16)]);
var inst_36645 = cljs.core.apply.call(null,cljs.core.hash_map,inst_36627);
var state_36674__$1 = state_36674;
var statearr_36748_36811 = state_36674__$1;
(statearr_36748_36811[(2)] = inst_36645);

(statearr_36748_36811[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36675 === (30))){
var state_36674__$1 = state_36674;
var statearr_36749_36812 = state_36674__$1;
(statearr_36749_36812[(2)] = null);

(statearr_36749_36812[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36675 === (10))){
var inst_36547 = (state_36674[(22)]);
var inst_36549 = cljs.core.chunked_seq_QMARK_.call(null,inst_36547);
var state_36674__$1 = state_36674;
if(inst_36549){
var statearr_36750_36813 = state_36674__$1;
(statearr_36750_36813[(1)] = (13));

} else {
var statearr_36751_36814 = state_36674__$1;
(statearr_36751_36814[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36675 === (18))){
var inst_36581 = (state_36674[(2)]);
var state_36674__$1 = state_36674;
if(cljs.core.truth_(inst_36581)){
var statearr_36752_36815 = state_36674__$1;
(statearr_36752_36815[(1)] = (19));

} else {
var statearr_36753_36816 = state_36674__$1;
(statearr_36753_36816[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36675 === (42))){
var state_36674__$1 = state_36674;
var statearr_36754_36817 = state_36674__$1;
(statearr_36754_36817[(2)] = null);

(statearr_36754_36817[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36675 === (37))){
var inst_36640 = (state_36674[(2)]);
var state_36674__$1 = state_36674;
var statearr_36755_36818 = state_36674__$1;
(statearr_36755_36818[(2)] = inst_36640);

(statearr_36755_36818[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36675 === (8))){
var inst_36547 = (state_36674[(22)]);
var inst_36534 = (state_36674[(8)]);
var inst_36547__$1 = cljs.core.seq.call(null,inst_36534);
var state_36674__$1 = (function (){var statearr_36756 = state_36674;
(statearr_36756[(22)] = inst_36547__$1);

return statearr_36756;
})();
if(inst_36547__$1){
var statearr_36757_36819 = state_36674__$1;
(statearr_36757_36819[(1)] = (10));

} else {
var statearr_36758_36820 = state_36674__$1;
(statearr_36758_36820[(1)] = (11));

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
var figwheel$client$file_reloading$reload_js_files_$_state_machine__33977__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__33977__auto____0 = (function (){
var statearr_36759 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36759[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__33977__auto__);

(statearr_36759[(1)] = (1));

return statearr_36759;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__33977__auto____1 = (function (state_36674){
while(true){
var ret_value__33978__auto__ = (function (){try{while(true){
var result__33979__auto__ = switch__33976__auto__.call(null,state_36674);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33979__auto__;
}
break;
}
}catch (e36760){if((e36760 instanceof Object)){
var ex__33980__auto__ = e36760;
var statearr_36761_36821 = state_36674;
(statearr_36761_36821[(5)] = ex__33980__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36674);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36760;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33978__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36822 = state_36674;
state_36674 = G__36822;
continue;
} else {
return ret_value__33978__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__33977__auto__ = function(state_36674){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__33977__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__33977__auto____1.call(this,state_36674);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__33977__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__33977__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__33977__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__33977__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__33977__auto__;
})()
})();
var state__34073__auto__ = (function (){var statearr_36762 = f__34072__auto__.call(null);
(statearr_36762[(6)] = c__34071__auto__);

return statearr_36762;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34073__auto__);
}));

return c__34071__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__36825,link){
var map__36826 = p__36825;
var map__36826__$1 = (((((!((map__36826 == null))))?(((((map__36826.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36826.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36826):map__36826);
var file = cljs.core.get.call(null,map__36826__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5735__auto__ = link.href;
if(cljs.core.truth_(temp__5735__auto__)){
var link_href = temp__5735__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,(function (p1__36823_SHARP_,p2__36824_SHARP_){
if(cljs.core._EQ_.call(null,p1__36823_SHARP_,p2__36824_SHARP_)){
return p1__36823_SHARP_;
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
var temp__5735__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__36829){
var map__36830 = p__36829;
var map__36830__$1 = (((((!((map__36830 == null))))?(((((map__36830.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36830.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36830):map__36830);
var match_length = cljs.core.get.call(null,map__36830__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__36830__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__36828_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__36828_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__36832_SHARP_,p2__36833_SHARP_){
return cljs.core.assoc.call(null,p1__36832_SHARP_,cljs.core.get.call(null,p2__36833_SHARP_,key),p2__36833_SHARP_);
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
var loaded_f_datas_36834 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_36834);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_36834);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__36835,p__36836){
var map__36837 = p__36835;
var map__36837__$1 = (((((!((map__36837 == null))))?(((((map__36837.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36837.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36837):map__36837);
var on_cssload = cljs.core.get.call(null,map__36837__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__36838 = p__36836;
var map__36838__$1 = (((((!((map__36838 == null))))?(((((map__36838.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36838.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36838):map__36838);
var files_msg = map__36838__$1;
var files = cljs.core.get.call(null,map__36838__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1593965206427
