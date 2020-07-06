// Compiled by ClojureScript 1.10.764 {}
goog.provide('cljs.source_map');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.source_map.base64_vlq');
/**
 * Take a seq of source file names and return a map from
 * file number to integer index. For reverse source maps.
 */
cljs.source_map.indexed_sources = (function cljs$source_map$indexed_sources(sources){
return cljs.core.reduce.call(null,(function (m,p__26682){
var vec__26683 = p__26682;
var i = cljs.core.nth.call(null,vec__26683,(0),null);
var v = cljs.core.nth.call(null,vec__26683,(1),null);
return cljs.core.assoc.call(null,m,v,i);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.call(null,(function (a,b){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
}),sources));
});
/**
 * Take a seq of source file names and return a comparator
 * that can be used to construct a sorted map. For reverse
 * source maps.
 */
cljs.source_map.source_compare = (function cljs$source_map$source_compare(sources){
var sources__$1 = cljs.source_map.indexed_sources.call(null,sources);
return (function (a,b){
return cljs.core.compare.call(null,sources__$1.call(null,a),sources__$1.call(null,b));
});
});
/**
 * Take a source map segment represented as a vector
 * and return a map.
 */
cljs.source_map.seg__GT_map = (function cljs$source_map$seg__GT_map(seg,source_map){
var vec__26686 = seg;
var gcol = cljs.core.nth.call(null,vec__26686,(0),null);
var source = cljs.core.nth.call(null,vec__26686,(1),null);
var line = cljs.core.nth.call(null,vec__26686,(2),null);
var col = cljs.core.nth.call(null,vec__26686,(3),null);
var name = cljs.core.nth.call(null,vec__26686,(4),null);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol,new cljs.core.Keyword(null,"source","source",-433931539),(goog.object.get(source_map,"sources")[source]),new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"name","name",1843675177),(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,seg));
if(cljs.core.truth_(temp__5735__auto__)){
var name__$1 = temp__5735__auto__;
return (goog.object.get(source_map,"names")[name__$1]);
} else {
return null;
}
})()], null);
});
/**
 * Combine a source map segment vector and a relative
 * source map segment vector and combine them to get
 * an absolute segment posititon information as a vector.
 */
cljs.source_map.seg_combine = (function cljs$source_map$seg_combine(seg,relseg){
var vec__26689 = seg;
var gcol = cljs.core.nth.call(null,vec__26689,(0),null);
var source = cljs.core.nth.call(null,vec__26689,(1),null);
var line = cljs.core.nth.call(null,vec__26689,(2),null);
var col = cljs.core.nth.call(null,vec__26689,(3),null);
var name = cljs.core.nth.call(null,vec__26689,(4),null);
var vec__26692 = relseg;
var rgcol = cljs.core.nth.call(null,vec__26692,(0),null);
var rsource = cljs.core.nth.call(null,vec__26692,(1),null);
var rline = cljs.core.nth.call(null,vec__26692,(2),null);
var rcol = cljs.core.nth.call(null,vec__26692,(3),null);
var rname = cljs.core.nth.call(null,vec__26692,(4),null);
var nseg = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(gcol + rgcol),((function (){var or__4126__auto__ = source;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (0);
}
})() + rsource),((function (){var or__4126__auto__ = line;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (0);
}
})() + rline),((function (){var or__4126__auto__ = col;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (0);
}
})() + rcol),((function (){var or__4126__auto__ = name;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (0);
}
})() + rname)], null);
if(cljs.core.truth_(name)){
return cljs.core.with_meta.call(null,nseg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),(name + rname)], null));
} else {
return nseg;
}
});
/**
 * Helper for decode-reverse. Take a reverse source map and
 *   update it with a segment map.
 */
cljs.source_map.update_reverse_result = (function cljs$source_map$update_reverse_result(result,segmap,gline){
var map__26695 = segmap;
var map__26695__$1 = (((((!((map__26695 == null))))?(((((map__26695.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26695.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26695):map__26695);
var gcol = cljs.core.get.call(null,map__26695__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__26695__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__26695__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__26695__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__26695__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gline","gline",-1086242431),gline,new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source], null),cljs.core.fnil.call(null,(function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [line], null),cljs.core.fnil.call(null,(function (m__$1){
return cljs.core.update_in.call(null,m__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [col], null),cljs.core.fnil.call(null,(function (v){
return cljs.core.conj.call(null,v,d__$1);
}),cljs.core.PersistentVector.EMPTY));
}),cljs.core.sorted_map.call(null)));
}),cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a reverse source map
 *   mapping original ClojureScript source locations to the generated
 *   JavaScript.
 */
cljs.source_map.decode_reverse = (function cljs$source_map$decode_reverse(var_args){
var G__26698 = arguments.length;
switch (G__26698) {
case 1:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1 = (function (source_map){
return cljs.source_map.decode_reverse.call(null,goog.object.get(source_map,"mappings"),source_map);
}));

(cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2 = (function (mappings,source_map){
var sources = goog.object.get(source_map,"sources");
var relseg_init = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null);
var lines = cljs.core.seq.call(null,clojure.string.split.call(null,mappings,/;/));
var gline = (0);
var lines__$1 = lines;
var relseg = relseg_init;
var result = cljs.core.sorted_map_by.call(null,cljs.source_map.source_compare.call(null,sources));
while(true){
if(lines__$1){
var line = cljs.core.first.call(null,lines__$1);
var vec__26702 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__26706 = cljs.core.next.call(null,segs__$1);
var G__26707 = nrelseg;
var G__26708 = cljs.source_map.update_reverse_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__26706;
relseg__$1 = G__26707;
result__$1 = G__26708;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__26702,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__26702,(1),null);
var G__26709 = (gline + (1));
var G__26710 = cljs.core.next.call(null,lines__$1);
var G__26711 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__26712 = result__$1;
gline = G__26709;
lines__$1 = G__26710;
relseg = G__26711;
result = G__26712;
continue;
} else {
return result;
}
break;
}
}));

(cljs.source_map.decode_reverse.cljs$lang$maxFixedArity = 2);

/**
 * Helper for decode. Take a source map and update it based on a
 *   segment map.
 */
cljs.source_map.update_result = (function cljs$source_map$update_result(result,segmap,gline){
var map__26714 = segmap;
var map__26714__$1 = (((((!((map__26714 == null))))?(((((map__26714.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26714.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26714):map__26714);
var gcol = cljs.core.get.call(null,map__26714__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__26714__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__26714__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__26714__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__26714__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"source","source",-433931539),source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.call(null,(function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.call(null,(function (p1__26713_SHARP_){
return cljs.core.conj.call(null,p1__26713_SHARP_,d__$1);
}),cljs.core.PersistentVector.EMPTY));
}),cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var G__26717 = arguments.length;
switch (G__26717) {
case 1:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1 = (function (source_map){
return cljs.source_map.decode.call(null,goog.object.get(source_map,"mappings"),source_map);
}));

(cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2 = (function (mappings,source_map){
var sources = goog.object.get(source_map,"sources");
var relseg_init = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null);
var lines = cljs.core.seq.call(null,clojure.string.split.call(null,mappings,/;/));
var gline = (0);
var lines__$1 = lines;
var relseg = relseg_init;
var result = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(lines__$1){
var line = cljs.core.first.call(null,lines__$1);
var vec__26721 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__26725 = cljs.core.next.call(null,segs__$1);
var G__26726 = nrelseg;
var G__26727 = cljs.source_map.update_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__26725;
relseg__$1 = G__26726;
result__$1 = G__26727;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__26721,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__26721,(1),null);
var G__26728 = (gline + (1));
var G__26729 = cljs.core.next.call(null,lines__$1);
var G__26730 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__26731 = result__$1;
gline = G__26728;
lines__$1 = G__26729;
relseg = G__26730;
result = G__26731;
continue;
} else {
return result;
}
break;
}
}));

(cljs.source_map.decode.cljs$lang$maxFixedArity = 2);

/**
 * Take a nested sorted map encoding line and column information
 * for a file and return a vector of vectors of encoded segments.
 * Each vector represents a line, and the internal vectors are segments
 * representing the contents of the line.
 */
cljs.source_map.lines__GT_segs = (function cljs$source_map$lines__GT_segs(lines){
var relseg = cljs.core.atom.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null));
return cljs.core.reduce.call(null,(function (segs,cols){
cljs.core.swap_BANG_.call(null,relseg,(function (p__26732){
var vec__26733 = p__26732;
var _ = cljs.core.nth.call(null,vec__26733,(0),null);
var source = cljs.core.nth.call(null,vec__26733,(1),null);
var line = cljs.core.nth.call(null,vec__26733,(2),null);
var col = cljs.core.nth.call(null,vec__26733,(3),null);
var name = cljs.core.nth.call(null,vec__26733,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
}));

return cljs.core.conj.call(null,segs,cljs.core.reduce.call(null,(function (cols__$1,p__26736){
var vec__26737 = p__26736;
var gcol = cljs.core.nth.call(null,vec__26737,(0),null);
var sidx = cljs.core.nth.call(null,vec__26737,(1),null);
var line = cljs.core.nth.call(null,vec__26737,(2),null);
var col = cljs.core.nth.call(null,vec__26737,(3),null);
var name = cljs.core.nth.call(null,vec__26737,(4),null);
var seg = vec__26737;
var offset = cljs.core.map.call(null,cljs.core._,seg,cljs.core.deref.call(null,relseg));
cljs.core.swap_BANG_.call(null,relseg,(function (p__26740){
var vec__26741 = p__26740;
var _ = cljs.core.nth.call(null,vec__26741,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__26741,(1),null);
var ___$2 = cljs.core.nth.call(null,vec__26741,(2),null);
var ___$3 = cljs.core.nth.call(null,vec__26741,(3),null);
var lname = cljs.core.nth.call(null,vec__26741,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol,sidx,line,col,(function (){var or__4126__auto__ = name;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return lname;
}
})()], null);
}));

return cljs.core.conj.call(null,cols__$1,cljs.source_map.base64_vlq.encode.call(null,offset));
}),cljs.core.PersistentVector.EMPTY,cols));
}),cljs.core.PersistentVector.EMPTY,lines);
});
/**
 * Take an internal source map representation represented as nested
 * sorted maps of file, line, column and return a source map v3 JSON
 * string.
 */
cljs.source_map.encode = (function cljs$source_map$encode(m,opts){
var lines = cljs.core.atom.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null));
var names__GT_idx = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var name_idx = cljs.core.atom.call(null,(0));
var preamble_lines = cljs.core.take.call(null,(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"preamble-line-count","preamble-line-count",-659949744).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (0);
}
})(),cljs.core.repeat.call(null,cljs.core.PersistentVector.EMPTY));
var info__GT_segv = (function (info,source_idx,line,col){
var segv = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gcol","gcol",309250807).cljs$core$IFn$_invoke$arity$1(info),source_idx,line,col], null);
var temp__5733__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info);
if(cljs.core.truth_(temp__5733__auto__)){
var name = temp__5733__auto__;
var idx = (function (){var temp__5733__auto____$1 = cljs.core.get.call(null,cljs.core.deref.call(null,names__GT_idx),name);
if(cljs.core.truth_(temp__5733__auto____$1)){
var idx = temp__5733__auto____$1;
return idx;
} else {
var cidx = cljs.core.deref.call(null,name_idx);
cljs.core.swap_BANG_.call(null,names__GT_idx,cljs.core.assoc,name,cidx);

cljs.core.swap_BANG_.call(null,name_idx,cljs.core.inc);

return cidx;
}
})();
return cljs.core.conj.call(null,segv,idx);
} else {
return segv;
}
});
var encode_cols = (function (infos,source_idx,line,col){
var seq__26747 = cljs.core.seq.call(null,infos);
var chunk__26748 = null;
var count__26749 = (0);
var i__26750 = (0);
while(true){
if((i__26750 < count__26749)){
var info = cljs.core._nth.call(null,chunk__26748,i__26750);
var segv_27101 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_27102 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_27103 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_27102 > (lc_27103 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__26747,chunk__26748,count__26749,i__26750,segv_27101,gline_27102,lc_27103,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_27102 - (lc_27103 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_27101], null));
});})(seq__26747,chunk__26748,count__26749,i__26750,segv_27101,gline_27102,lc_27103,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__26747,chunk__26748,count__26749,i__26750,segv_27101,gline_27102,lc_27103,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_27102], null),cljs.core.conj,segv_27101);
});})(seq__26747,chunk__26748,count__26749,i__26750,segv_27101,gline_27102,lc_27103,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__27104 = seq__26747;
var G__27105 = chunk__26748;
var G__27106 = count__26749;
var G__27107 = (i__26750 + (1));
seq__26747 = G__27104;
chunk__26748 = G__27105;
count__26749 = G__27106;
i__26750 = G__27107;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__26747);
if(temp__5735__auto__){
var seq__26747__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26747__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__26747__$1);
var G__27108 = cljs.core.chunk_rest.call(null,seq__26747__$1);
var G__27109 = c__4556__auto__;
var G__27110 = cljs.core.count.call(null,c__4556__auto__);
var G__27111 = (0);
seq__26747 = G__27108;
chunk__26748 = G__27109;
count__26749 = G__27110;
i__26750 = G__27111;
continue;
} else {
var info = cljs.core.first.call(null,seq__26747__$1);
var segv_27112 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_27113 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_27114 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_27113 > (lc_27114 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__26747,chunk__26748,count__26749,i__26750,segv_27112,gline_27113,lc_27114,info,seq__26747__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_27113 - (lc_27114 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_27112], null));
});})(seq__26747,chunk__26748,count__26749,i__26750,segv_27112,gline_27113,lc_27114,info,seq__26747__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__26747,chunk__26748,count__26749,i__26750,segv_27112,gline_27113,lc_27114,info,seq__26747__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_27113], null),cljs.core.conj,segv_27112);
});})(seq__26747,chunk__26748,count__26749,i__26750,segv_27112,gline_27113,lc_27114,info,seq__26747__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__27115 = cljs.core.next.call(null,seq__26747__$1);
var G__27116 = null;
var G__27117 = (0);
var G__27118 = (0);
seq__26747 = G__27115;
chunk__26748 = G__27116;
count__26749 = G__27117;
i__26750 = G__27118;
continue;
}
} else {
return null;
}
}
break;
}
});
var seq__26751_27119 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__26752_27120 = null;
var count__26753_27121 = (0);
var i__26754_27122 = (0);
while(true){
if((i__26754_27122 < count__26753_27121)){
var vec__26927_27123 = cljs.core._nth.call(null,chunk__26752_27120,i__26754_27122);
var source_idx_27124 = cljs.core.nth.call(null,vec__26927_27123,(0),null);
var vec__26930_27125 = cljs.core.nth.call(null,vec__26927_27123,(1),null);
var __27126 = cljs.core.nth.call(null,vec__26930_27125,(0),null);
var lines_27127__$1 = cljs.core.nth.call(null,vec__26930_27125,(1),null);
var seq__26933_27128 = cljs.core.seq.call(null,lines_27127__$1);
var chunk__26934_27129 = null;
var count__26935_27130 = (0);
var i__26936_27131 = (0);
while(true){
if((i__26936_27131 < count__26935_27130)){
var vec__26975_27132 = cljs.core._nth.call(null,chunk__26934_27129,i__26936_27131);
var line_27133 = cljs.core.nth.call(null,vec__26975_27132,(0),null);
var cols_27134 = cljs.core.nth.call(null,vec__26975_27132,(1),null);
var seq__26978_27135 = cljs.core.seq.call(null,cols_27134);
var chunk__26979_27136 = null;
var count__26980_27137 = (0);
var i__26981_27138 = (0);
while(true){
if((i__26981_27138 < count__26980_27137)){
var vec__26988_27139 = cljs.core._nth.call(null,chunk__26979_27136,i__26981_27138);
var col_27140 = cljs.core.nth.call(null,vec__26988_27139,(0),null);
var infos_27141 = cljs.core.nth.call(null,vec__26988_27139,(1),null);
encode_cols.call(null,infos_27141,source_idx_27124,line_27133,col_27140);


var G__27142 = seq__26978_27135;
var G__27143 = chunk__26979_27136;
var G__27144 = count__26980_27137;
var G__27145 = (i__26981_27138 + (1));
seq__26978_27135 = G__27142;
chunk__26979_27136 = G__27143;
count__26980_27137 = G__27144;
i__26981_27138 = G__27145;
continue;
} else {
var temp__5735__auto___27146 = cljs.core.seq.call(null,seq__26978_27135);
if(temp__5735__auto___27146){
var seq__26978_27147__$1 = temp__5735__auto___27146;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26978_27147__$1)){
var c__4556__auto___27148 = cljs.core.chunk_first.call(null,seq__26978_27147__$1);
var G__27149 = cljs.core.chunk_rest.call(null,seq__26978_27147__$1);
var G__27150 = c__4556__auto___27148;
var G__27151 = cljs.core.count.call(null,c__4556__auto___27148);
var G__27152 = (0);
seq__26978_27135 = G__27149;
chunk__26979_27136 = G__27150;
count__26980_27137 = G__27151;
i__26981_27138 = G__27152;
continue;
} else {
var vec__26991_27153 = cljs.core.first.call(null,seq__26978_27147__$1);
var col_27154 = cljs.core.nth.call(null,vec__26991_27153,(0),null);
var infos_27155 = cljs.core.nth.call(null,vec__26991_27153,(1),null);
encode_cols.call(null,infos_27155,source_idx_27124,line_27133,col_27154);


var G__27156 = cljs.core.next.call(null,seq__26978_27147__$1);
var G__27157 = null;
var G__27158 = (0);
var G__27159 = (0);
seq__26978_27135 = G__27156;
chunk__26979_27136 = G__27157;
count__26980_27137 = G__27158;
i__26981_27138 = G__27159;
continue;
}
} else {
}
}
break;
}


var G__27160 = seq__26933_27128;
var G__27161 = chunk__26934_27129;
var G__27162 = count__26935_27130;
var G__27163 = (i__26936_27131 + (1));
seq__26933_27128 = G__27160;
chunk__26934_27129 = G__27161;
count__26935_27130 = G__27162;
i__26936_27131 = G__27163;
continue;
} else {
var temp__5735__auto___27164 = cljs.core.seq.call(null,seq__26933_27128);
if(temp__5735__auto___27164){
var seq__26933_27165__$1 = temp__5735__auto___27164;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26933_27165__$1)){
var c__4556__auto___27166 = cljs.core.chunk_first.call(null,seq__26933_27165__$1);
var G__27167 = cljs.core.chunk_rest.call(null,seq__26933_27165__$1);
var G__27168 = c__4556__auto___27166;
var G__27169 = cljs.core.count.call(null,c__4556__auto___27166);
var G__27170 = (0);
seq__26933_27128 = G__27167;
chunk__26934_27129 = G__27168;
count__26935_27130 = G__27169;
i__26936_27131 = G__27170;
continue;
} else {
var vec__26994_27171 = cljs.core.first.call(null,seq__26933_27165__$1);
var line_27172 = cljs.core.nth.call(null,vec__26994_27171,(0),null);
var cols_27173 = cljs.core.nth.call(null,vec__26994_27171,(1),null);
var seq__26997_27174 = cljs.core.seq.call(null,cols_27173);
var chunk__26998_27175 = null;
var count__26999_27176 = (0);
var i__27000_27177 = (0);
while(true){
if((i__27000_27177 < count__26999_27176)){
var vec__27007_27178 = cljs.core._nth.call(null,chunk__26998_27175,i__27000_27177);
var col_27179 = cljs.core.nth.call(null,vec__27007_27178,(0),null);
var infos_27180 = cljs.core.nth.call(null,vec__27007_27178,(1),null);
encode_cols.call(null,infos_27180,source_idx_27124,line_27172,col_27179);


var G__27181 = seq__26997_27174;
var G__27182 = chunk__26998_27175;
var G__27183 = count__26999_27176;
var G__27184 = (i__27000_27177 + (1));
seq__26997_27174 = G__27181;
chunk__26998_27175 = G__27182;
count__26999_27176 = G__27183;
i__27000_27177 = G__27184;
continue;
} else {
var temp__5735__auto___27185__$1 = cljs.core.seq.call(null,seq__26997_27174);
if(temp__5735__auto___27185__$1){
var seq__26997_27186__$1 = temp__5735__auto___27185__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26997_27186__$1)){
var c__4556__auto___27187 = cljs.core.chunk_first.call(null,seq__26997_27186__$1);
var G__27188 = cljs.core.chunk_rest.call(null,seq__26997_27186__$1);
var G__27189 = c__4556__auto___27187;
var G__27190 = cljs.core.count.call(null,c__4556__auto___27187);
var G__27191 = (0);
seq__26997_27174 = G__27188;
chunk__26998_27175 = G__27189;
count__26999_27176 = G__27190;
i__27000_27177 = G__27191;
continue;
} else {
var vec__27010_27192 = cljs.core.first.call(null,seq__26997_27186__$1);
var col_27193 = cljs.core.nth.call(null,vec__27010_27192,(0),null);
var infos_27194 = cljs.core.nth.call(null,vec__27010_27192,(1),null);
encode_cols.call(null,infos_27194,source_idx_27124,line_27172,col_27193);


var G__27195 = cljs.core.next.call(null,seq__26997_27186__$1);
var G__27196 = null;
var G__27197 = (0);
var G__27198 = (0);
seq__26997_27174 = G__27195;
chunk__26998_27175 = G__27196;
count__26999_27176 = G__27197;
i__27000_27177 = G__27198;
continue;
}
} else {
}
}
break;
}


var G__27199 = cljs.core.next.call(null,seq__26933_27165__$1);
var G__27200 = null;
var G__27201 = (0);
var G__27202 = (0);
seq__26933_27128 = G__27199;
chunk__26934_27129 = G__27200;
count__26935_27130 = G__27201;
i__26936_27131 = G__27202;
continue;
}
} else {
}
}
break;
}


var G__27203 = seq__26751_27119;
var G__27204 = chunk__26752_27120;
var G__27205 = count__26753_27121;
var G__27206 = (i__26754_27122 + (1));
seq__26751_27119 = G__27203;
chunk__26752_27120 = G__27204;
count__26753_27121 = G__27205;
i__26754_27122 = G__27206;
continue;
} else {
var temp__5735__auto___27207 = cljs.core.seq.call(null,seq__26751_27119);
if(temp__5735__auto___27207){
var seq__26751_27208__$1 = temp__5735__auto___27207;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26751_27208__$1)){
var c__4556__auto___27209 = cljs.core.chunk_first.call(null,seq__26751_27208__$1);
var G__27210 = cljs.core.chunk_rest.call(null,seq__26751_27208__$1);
var G__27211 = c__4556__auto___27209;
var G__27212 = cljs.core.count.call(null,c__4556__auto___27209);
var G__27213 = (0);
seq__26751_27119 = G__27210;
chunk__26752_27120 = G__27211;
count__26753_27121 = G__27212;
i__26754_27122 = G__27213;
continue;
} else {
var vec__27013_27214 = cljs.core.first.call(null,seq__26751_27208__$1);
var source_idx_27215 = cljs.core.nth.call(null,vec__27013_27214,(0),null);
var vec__27016_27216 = cljs.core.nth.call(null,vec__27013_27214,(1),null);
var __27217 = cljs.core.nth.call(null,vec__27016_27216,(0),null);
var lines_27218__$1 = cljs.core.nth.call(null,vec__27016_27216,(1),null);
var seq__27019_27219 = cljs.core.seq.call(null,lines_27218__$1);
var chunk__27020_27220 = null;
var count__27021_27221 = (0);
var i__27022_27222 = (0);
while(true){
if((i__27022_27222 < count__27021_27221)){
var vec__27061_27223 = cljs.core._nth.call(null,chunk__27020_27220,i__27022_27222);
var line_27224 = cljs.core.nth.call(null,vec__27061_27223,(0),null);
var cols_27225 = cljs.core.nth.call(null,vec__27061_27223,(1),null);
var seq__27064_27226 = cljs.core.seq.call(null,cols_27225);
var chunk__27065_27227 = null;
var count__27066_27228 = (0);
var i__27067_27229 = (0);
while(true){
if((i__27067_27229 < count__27066_27228)){
var vec__27074_27230 = cljs.core._nth.call(null,chunk__27065_27227,i__27067_27229);
var col_27231 = cljs.core.nth.call(null,vec__27074_27230,(0),null);
var infos_27232 = cljs.core.nth.call(null,vec__27074_27230,(1),null);
encode_cols.call(null,infos_27232,source_idx_27215,line_27224,col_27231);


var G__27233 = seq__27064_27226;
var G__27234 = chunk__27065_27227;
var G__27235 = count__27066_27228;
var G__27236 = (i__27067_27229 + (1));
seq__27064_27226 = G__27233;
chunk__27065_27227 = G__27234;
count__27066_27228 = G__27235;
i__27067_27229 = G__27236;
continue;
} else {
var temp__5735__auto___27237__$1 = cljs.core.seq.call(null,seq__27064_27226);
if(temp__5735__auto___27237__$1){
var seq__27064_27238__$1 = temp__5735__auto___27237__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27064_27238__$1)){
var c__4556__auto___27239 = cljs.core.chunk_first.call(null,seq__27064_27238__$1);
var G__27240 = cljs.core.chunk_rest.call(null,seq__27064_27238__$1);
var G__27241 = c__4556__auto___27239;
var G__27242 = cljs.core.count.call(null,c__4556__auto___27239);
var G__27243 = (0);
seq__27064_27226 = G__27240;
chunk__27065_27227 = G__27241;
count__27066_27228 = G__27242;
i__27067_27229 = G__27243;
continue;
} else {
var vec__27077_27244 = cljs.core.first.call(null,seq__27064_27238__$1);
var col_27245 = cljs.core.nth.call(null,vec__27077_27244,(0),null);
var infos_27246 = cljs.core.nth.call(null,vec__27077_27244,(1),null);
encode_cols.call(null,infos_27246,source_idx_27215,line_27224,col_27245);


var G__27247 = cljs.core.next.call(null,seq__27064_27238__$1);
var G__27248 = null;
var G__27249 = (0);
var G__27250 = (0);
seq__27064_27226 = G__27247;
chunk__27065_27227 = G__27248;
count__27066_27228 = G__27249;
i__27067_27229 = G__27250;
continue;
}
} else {
}
}
break;
}


var G__27251 = seq__27019_27219;
var G__27252 = chunk__27020_27220;
var G__27253 = count__27021_27221;
var G__27254 = (i__27022_27222 + (1));
seq__27019_27219 = G__27251;
chunk__27020_27220 = G__27252;
count__27021_27221 = G__27253;
i__27022_27222 = G__27254;
continue;
} else {
var temp__5735__auto___27255__$1 = cljs.core.seq.call(null,seq__27019_27219);
if(temp__5735__auto___27255__$1){
var seq__27019_27256__$1 = temp__5735__auto___27255__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27019_27256__$1)){
var c__4556__auto___27257 = cljs.core.chunk_first.call(null,seq__27019_27256__$1);
var G__27258 = cljs.core.chunk_rest.call(null,seq__27019_27256__$1);
var G__27259 = c__4556__auto___27257;
var G__27260 = cljs.core.count.call(null,c__4556__auto___27257);
var G__27261 = (0);
seq__27019_27219 = G__27258;
chunk__27020_27220 = G__27259;
count__27021_27221 = G__27260;
i__27022_27222 = G__27261;
continue;
} else {
var vec__27080_27262 = cljs.core.first.call(null,seq__27019_27256__$1);
var line_27263 = cljs.core.nth.call(null,vec__27080_27262,(0),null);
var cols_27264 = cljs.core.nth.call(null,vec__27080_27262,(1),null);
var seq__27083_27265 = cljs.core.seq.call(null,cols_27264);
var chunk__27084_27266 = null;
var count__27085_27267 = (0);
var i__27086_27268 = (0);
while(true){
if((i__27086_27268 < count__27085_27267)){
var vec__27093_27269 = cljs.core._nth.call(null,chunk__27084_27266,i__27086_27268);
var col_27270 = cljs.core.nth.call(null,vec__27093_27269,(0),null);
var infos_27271 = cljs.core.nth.call(null,vec__27093_27269,(1),null);
encode_cols.call(null,infos_27271,source_idx_27215,line_27263,col_27270);


var G__27272 = seq__27083_27265;
var G__27273 = chunk__27084_27266;
var G__27274 = count__27085_27267;
var G__27275 = (i__27086_27268 + (1));
seq__27083_27265 = G__27272;
chunk__27084_27266 = G__27273;
count__27085_27267 = G__27274;
i__27086_27268 = G__27275;
continue;
} else {
var temp__5735__auto___27276__$2 = cljs.core.seq.call(null,seq__27083_27265);
if(temp__5735__auto___27276__$2){
var seq__27083_27277__$1 = temp__5735__auto___27276__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27083_27277__$1)){
var c__4556__auto___27278 = cljs.core.chunk_first.call(null,seq__27083_27277__$1);
var G__27279 = cljs.core.chunk_rest.call(null,seq__27083_27277__$1);
var G__27280 = c__4556__auto___27278;
var G__27281 = cljs.core.count.call(null,c__4556__auto___27278);
var G__27282 = (0);
seq__27083_27265 = G__27279;
chunk__27084_27266 = G__27280;
count__27085_27267 = G__27281;
i__27086_27268 = G__27282;
continue;
} else {
var vec__27096_27283 = cljs.core.first.call(null,seq__27083_27277__$1);
var col_27284 = cljs.core.nth.call(null,vec__27096_27283,(0),null);
var infos_27285 = cljs.core.nth.call(null,vec__27096_27283,(1),null);
encode_cols.call(null,infos_27285,source_idx_27215,line_27263,col_27284);


var G__27286 = cljs.core.next.call(null,seq__27083_27277__$1);
var G__27287 = null;
var G__27288 = (0);
var G__27289 = (0);
seq__27083_27265 = G__27286;
chunk__27084_27266 = G__27287;
count__27085_27267 = G__27288;
i__27086_27268 = G__27289;
continue;
}
} else {
}
}
break;
}


var G__27290 = cljs.core.next.call(null,seq__27019_27256__$1);
var G__27291 = null;
var G__27292 = (0);
var G__27293 = (0);
seq__27019_27219 = G__27290;
chunk__27020_27220 = G__27291;
count__27021_27221 = G__27292;
i__27022_27222 = G__27293;
continue;
}
} else {
}
}
break;
}


var G__27294 = cljs.core.next.call(null,seq__26751_27208__$1);
var G__27295 = null;
var G__27296 = (0);
var G__27297 = (0);
seq__26751_27119 = G__27294;
chunk__26752_27120 = G__27295;
count__26753_27121 = G__27296;
i__26754_27122 = G__27297;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__27099 = ({"version": (3), "file": new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys.call(null,m);
var f = cljs.core.comp.call(null,((new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633).cljs$core$IFn$_invoke$arity$1(opts) === true)?(function (p1__26744_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__26744_SHARP_),"?rel=",cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).valueOf())].join('');
}):cljs.core.identity),(function (p1__26745_SHARP_){
return cljs.core.last.call(null,clojure.string.split.call(null,p1__26745_SHARP_,/\//));
}));
return cljs.core.into_array.call(null,cljs.core.map.call(null,f,paths));
})(), "lineCount": new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.call(null,";",cljs.core.map.call(null,(function (p1__26746_SHARP_){
return clojure.string.join.call(null,",",p1__26746_SHARP_);
}),cljs.source_map.lines__GT_segs.call(null,cljs.core.concat.call(null,preamble_lines,cljs.core.deref.call(null,lines))))), "names": cljs.core.into_array.call(null,cljs.core.map.call(null,clojure.set.map_invert.call(null,cljs.core.deref.call(null,names__GT_idx)),cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.deref.call(null,names__GT_idx)))))});
if(cljs.core.truth_(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts))){
var G__27100 = G__27099;
goog.object.set(G__27100,"sourcesContent",cljs.core.into_array.call(null,new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts)));

return G__27100;
} else {
return G__27099;
}
})();
return JSON.stringify(source_map_file_contents);
});
/**
 * Merge an internal source map representation of a single
 * ClojureScript file mapping original to generated with a
 * second source map mapping original JS to generated JS.
 * The is to support source maps that work through multiple
 * compilation steps like Google Closure optimization passes.
 */
cljs.source_map.merge_source_maps = (function cljs$source_map$merge_source_maps(cljs_map,js_map){
var line_map_seq = cljs.core.seq.call(null,cljs_map);
var new_lines = cljs.core.sorted_map.call(null);
while(true){
if(line_map_seq){
var vec__27298 = cljs.core.first.call(null,line_map_seq);
var line = cljs.core.nth.call(null,vec__27298,(0),null);
var col_map = cljs.core.nth.call(null,vec__27298,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq.call(null,col_map);
var new_cols = cljs.core.sorted_map.call(null);
while(true){
if(col_map_seq){
var vec__27301 = cljs.core.first.call(null,col_map_seq);
var col = cljs.core.nth.call(null,vec__27301,(0),null);
var infos = cljs.core.nth.call(null,vec__27301,(1),null);
var G__27307 = cljs.core.next.call(null,col_map_seq);
var G__27308 = cljs.core.assoc.call(null,new_cols,col,cljs.core.reduce.call(null,((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__27301,col,infos,vec__27298,line,col_map){
return (function (v,p__27304){
var map__27305 = p__27304;
var map__27305__$1 = (((((!((map__27305 == null))))?(((((map__27305.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27305.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27305):map__27305);
var gline = cljs.core.get.call(null,map__27305__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol = cljs.core.get.call(null,map__27305__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
return cljs.core.into.call(null,v,cljs.core.get_in.call(null,js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__27301,col,infos,vec__27298,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__27307;
new_cols = G__27308;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__27309 = cljs.core.next.call(null,line_map_seq);
var G__27310 = cljs.core.assoc.call(null,new_lines,line,new_cols);
line_map_seq = G__27309;
new_lines = G__27310;
continue;
} else {
return new_lines;
}
break;
}
});
/**
 * Given a ClojureScript to JavaScript source map, invert it. Useful when
 * mapping JavaScript stack traces when environment support is unavailable.
 */
cljs.source_map.invert_reverse_map = (function cljs$source_map$invert_reverse_map(reverse_map){
var inverted = cljs.core.atom.call(null,cljs.core.sorted_map.call(null));
var seq__27311_27583 = cljs.core.seq.call(null,reverse_map);
var chunk__27312_27584 = null;
var count__27313_27585 = (0);
var i__27314_27586 = (0);
while(true){
if((i__27314_27586 < count__27313_27585)){
var vec__27449_27587 = cljs.core._nth.call(null,chunk__27312_27584,i__27314_27586);
var line_27588 = cljs.core.nth.call(null,vec__27449_27587,(0),null);
var columns_27589 = cljs.core.nth.call(null,vec__27449_27587,(1),null);
var seq__27452_27590 = cljs.core.seq.call(null,columns_27589);
var chunk__27453_27591 = null;
var count__27454_27592 = (0);
var i__27455_27593 = (0);
while(true){
if((i__27455_27593 < count__27454_27592)){
var vec__27486_27594 = cljs.core._nth.call(null,chunk__27453_27591,i__27455_27593);
var column_27595 = cljs.core.nth.call(null,vec__27486_27594,(0),null);
var column_info_27596 = cljs.core.nth.call(null,vec__27486_27594,(1),null);
var seq__27489_27597 = cljs.core.seq.call(null,column_info_27596);
var chunk__27490_27598 = null;
var count__27491_27599 = (0);
var i__27492_27600 = (0);
while(true){
if((i__27492_27600 < count__27491_27599)){
var map__27497_27601 = cljs.core._nth.call(null,chunk__27490_27598,i__27492_27600);
var map__27497_27602__$1 = (((((!((map__27497_27601 == null))))?(((((map__27497_27601.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27497_27601.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27497_27601):map__27497_27601);
var gline_27603 = cljs.core.get.call(null,map__27497_27602__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_27604 = cljs.core.get.call(null,map__27497_27602__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_27605 = cljs.core.get.call(null,map__27497_27602__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_27603], null),cljs.core.fnil.call(null,((function (seq__27489_27597,chunk__27490_27598,count__27491_27599,i__27492_27600,seq__27452_27590,chunk__27453_27591,count__27454_27592,i__27455_27593,seq__27311_27583,chunk__27312_27584,count__27313_27585,i__27314_27586,map__27497_27601,map__27497_27602__$1,gline_27603,gcol_27604,name_27605,vec__27486_27594,column_27595,column_info_27596,vec__27449_27587,line_27588,columns_27589,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_27604], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_27588,new cljs.core.Keyword(null,"col","col",-1959363084),column_27595,new cljs.core.Keyword(null,"name","name",1843675177),name_27605], null));
});})(seq__27489_27597,chunk__27490_27598,count__27491_27599,i__27492_27600,seq__27452_27590,chunk__27453_27591,count__27454_27592,i__27455_27593,seq__27311_27583,chunk__27312_27584,count__27313_27585,i__27314_27586,map__27497_27601,map__27497_27602__$1,gline_27603,gcol_27604,name_27605,vec__27486_27594,column_27595,column_info_27596,vec__27449_27587,line_27588,columns_27589,inverted))
,cljs.core.sorted_map.call(null)));


var G__27606 = seq__27489_27597;
var G__27607 = chunk__27490_27598;
var G__27608 = count__27491_27599;
var G__27609 = (i__27492_27600 + (1));
seq__27489_27597 = G__27606;
chunk__27490_27598 = G__27607;
count__27491_27599 = G__27608;
i__27492_27600 = G__27609;
continue;
} else {
var temp__5735__auto___27610 = cljs.core.seq.call(null,seq__27489_27597);
if(temp__5735__auto___27610){
var seq__27489_27611__$1 = temp__5735__auto___27610;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27489_27611__$1)){
var c__4556__auto___27612 = cljs.core.chunk_first.call(null,seq__27489_27611__$1);
var G__27613 = cljs.core.chunk_rest.call(null,seq__27489_27611__$1);
var G__27614 = c__4556__auto___27612;
var G__27615 = cljs.core.count.call(null,c__4556__auto___27612);
var G__27616 = (0);
seq__27489_27597 = G__27613;
chunk__27490_27598 = G__27614;
count__27491_27599 = G__27615;
i__27492_27600 = G__27616;
continue;
} else {
var map__27499_27617 = cljs.core.first.call(null,seq__27489_27611__$1);
var map__27499_27618__$1 = (((((!((map__27499_27617 == null))))?(((((map__27499_27617.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27499_27617.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27499_27617):map__27499_27617);
var gline_27619 = cljs.core.get.call(null,map__27499_27618__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_27620 = cljs.core.get.call(null,map__27499_27618__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_27621 = cljs.core.get.call(null,map__27499_27618__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_27619], null),cljs.core.fnil.call(null,((function (seq__27489_27597,chunk__27490_27598,count__27491_27599,i__27492_27600,seq__27452_27590,chunk__27453_27591,count__27454_27592,i__27455_27593,seq__27311_27583,chunk__27312_27584,count__27313_27585,i__27314_27586,map__27499_27617,map__27499_27618__$1,gline_27619,gcol_27620,name_27621,seq__27489_27611__$1,temp__5735__auto___27610,vec__27486_27594,column_27595,column_info_27596,vec__27449_27587,line_27588,columns_27589,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_27620], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_27588,new cljs.core.Keyword(null,"col","col",-1959363084),column_27595,new cljs.core.Keyword(null,"name","name",1843675177),name_27621], null));
});})(seq__27489_27597,chunk__27490_27598,count__27491_27599,i__27492_27600,seq__27452_27590,chunk__27453_27591,count__27454_27592,i__27455_27593,seq__27311_27583,chunk__27312_27584,count__27313_27585,i__27314_27586,map__27499_27617,map__27499_27618__$1,gline_27619,gcol_27620,name_27621,seq__27489_27611__$1,temp__5735__auto___27610,vec__27486_27594,column_27595,column_info_27596,vec__27449_27587,line_27588,columns_27589,inverted))
,cljs.core.sorted_map.call(null)));


var G__27622 = cljs.core.next.call(null,seq__27489_27611__$1);
var G__27623 = null;
var G__27624 = (0);
var G__27625 = (0);
seq__27489_27597 = G__27622;
chunk__27490_27598 = G__27623;
count__27491_27599 = G__27624;
i__27492_27600 = G__27625;
continue;
}
} else {
}
}
break;
}


var G__27626 = seq__27452_27590;
var G__27627 = chunk__27453_27591;
var G__27628 = count__27454_27592;
var G__27629 = (i__27455_27593 + (1));
seq__27452_27590 = G__27626;
chunk__27453_27591 = G__27627;
count__27454_27592 = G__27628;
i__27455_27593 = G__27629;
continue;
} else {
var temp__5735__auto___27630 = cljs.core.seq.call(null,seq__27452_27590);
if(temp__5735__auto___27630){
var seq__27452_27631__$1 = temp__5735__auto___27630;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27452_27631__$1)){
var c__4556__auto___27632 = cljs.core.chunk_first.call(null,seq__27452_27631__$1);
var G__27633 = cljs.core.chunk_rest.call(null,seq__27452_27631__$1);
var G__27634 = c__4556__auto___27632;
var G__27635 = cljs.core.count.call(null,c__4556__auto___27632);
var G__27636 = (0);
seq__27452_27590 = G__27633;
chunk__27453_27591 = G__27634;
count__27454_27592 = G__27635;
i__27455_27593 = G__27636;
continue;
} else {
var vec__27501_27637 = cljs.core.first.call(null,seq__27452_27631__$1);
var column_27638 = cljs.core.nth.call(null,vec__27501_27637,(0),null);
var column_info_27639 = cljs.core.nth.call(null,vec__27501_27637,(1),null);
var seq__27504_27640 = cljs.core.seq.call(null,column_info_27639);
var chunk__27505_27641 = null;
var count__27506_27642 = (0);
var i__27507_27643 = (0);
while(true){
if((i__27507_27643 < count__27506_27642)){
var map__27512_27644 = cljs.core._nth.call(null,chunk__27505_27641,i__27507_27643);
var map__27512_27645__$1 = (((((!((map__27512_27644 == null))))?(((((map__27512_27644.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27512_27644.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27512_27644):map__27512_27644);
var gline_27646 = cljs.core.get.call(null,map__27512_27645__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_27647 = cljs.core.get.call(null,map__27512_27645__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_27648 = cljs.core.get.call(null,map__27512_27645__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_27646], null),cljs.core.fnil.call(null,((function (seq__27504_27640,chunk__27505_27641,count__27506_27642,i__27507_27643,seq__27452_27590,chunk__27453_27591,count__27454_27592,i__27455_27593,seq__27311_27583,chunk__27312_27584,count__27313_27585,i__27314_27586,map__27512_27644,map__27512_27645__$1,gline_27646,gcol_27647,name_27648,vec__27501_27637,column_27638,column_info_27639,seq__27452_27631__$1,temp__5735__auto___27630,vec__27449_27587,line_27588,columns_27589,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_27647], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_27588,new cljs.core.Keyword(null,"col","col",-1959363084),column_27638,new cljs.core.Keyword(null,"name","name",1843675177),name_27648], null));
});})(seq__27504_27640,chunk__27505_27641,count__27506_27642,i__27507_27643,seq__27452_27590,chunk__27453_27591,count__27454_27592,i__27455_27593,seq__27311_27583,chunk__27312_27584,count__27313_27585,i__27314_27586,map__27512_27644,map__27512_27645__$1,gline_27646,gcol_27647,name_27648,vec__27501_27637,column_27638,column_info_27639,seq__27452_27631__$1,temp__5735__auto___27630,vec__27449_27587,line_27588,columns_27589,inverted))
,cljs.core.sorted_map.call(null)));


var G__27649 = seq__27504_27640;
var G__27650 = chunk__27505_27641;
var G__27651 = count__27506_27642;
var G__27652 = (i__27507_27643 + (1));
seq__27504_27640 = G__27649;
chunk__27505_27641 = G__27650;
count__27506_27642 = G__27651;
i__27507_27643 = G__27652;
continue;
} else {
var temp__5735__auto___27653__$1 = cljs.core.seq.call(null,seq__27504_27640);
if(temp__5735__auto___27653__$1){
var seq__27504_27654__$1 = temp__5735__auto___27653__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27504_27654__$1)){
var c__4556__auto___27655 = cljs.core.chunk_first.call(null,seq__27504_27654__$1);
var G__27656 = cljs.core.chunk_rest.call(null,seq__27504_27654__$1);
var G__27657 = c__4556__auto___27655;
var G__27658 = cljs.core.count.call(null,c__4556__auto___27655);
var G__27659 = (0);
seq__27504_27640 = G__27656;
chunk__27505_27641 = G__27657;
count__27506_27642 = G__27658;
i__27507_27643 = G__27659;
continue;
} else {
var map__27514_27660 = cljs.core.first.call(null,seq__27504_27654__$1);
var map__27514_27661__$1 = (((((!((map__27514_27660 == null))))?(((((map__27514_27660.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27514_27660.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27514_27660):map__27514_27660);
var gline_27662 = cljs.core.get.call(null,map__27514_27661__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_27663 = cljs.core.get.call(null,map__27514_27661__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_27664 = cljs.core.get.call(null,map__27514_27661__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_27662], null),cljs.core.fnil.call(null,((function (seq__27504_27640,chunk__27505_27641,count__27506_27642,i__27507_27643,seq__27452_27590,chunk__27453_27591,count__27454_27592,i__27455_27593,seq__27311_27583,chunk__27312_27584,count__27313_27585,i__27314_27586,map__27514_27660,map__27514_27661__$1,gline_27662,gcol_27663,name_27664,seq__27504_27654__$1,temp__5735__auto___27653__$1,vec__27501_27637,column_27638,column_info_27639,seq__27452_27631__$1,temp__5735__auto___27630,vec__27449_27587,line_27588,columns_27589,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_27663], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_27588,new cljs.core.Keyword(null,"col","col",-1959363084),column_27638,new cljs.core.Keyword(null,"name","name",1843675177),name_27664], null));
});})(seq__27504_27640,chunk__27505_27641,count__27506_27642,i__27507_27643,seq__27452_27590,chunk__27453_27591,count__27454_27592,i__27455_27593,seq__27311_27583,chunk__27312_27584,count__27313_27585,i__27314_27586,map__27514_27660,map__27514_27661__$1,gline_27662,gcol_27663,name_27664,seq__27504_27654__$1,temp__5735__auto___27653__$1,vec__27501_27637,column_27638,column_info_27639,seq__27452_27631__$1,temp__5735__auto___27630,vec__27449_27587,line_27588,columns_27589,inverted))
,cljs.core.sorted_map.call(null)));


var G__27665 = cljs.core.next.call(null,seq__27504_27654__$1);
var G__27666 = null;
var G__27667 = (0);
var G__27668 = (0);
seq__27504_27640 = G__27665;
chunk__27505_27641 = G__27666;
count__27506_27642 = G__27667;
i__27507_27643 = G__27668;
continue;
}
} else {
}
}
break;
}


var G__27669 = cljs.core.next.call(null,seq__27452_27631__$1);
var G__27670 = null;
var G__27671 = (0);
var G__27672 = (0);
seq__27452_27590 = G__27669;
chunk__27453_27591 = G__27670;
count__27454_27592 = G__27671;
i__27455_27593 = G__27672;
continue;
}
} else {
}
}
break;
}


var G__27673 = seq__27311_27583;
var G__27674 = chunk__27312_27584;
var G__27675 = count__27313_27585;
var G__27676 = (i__27314_27586 + (1));
seq__27311_27583 = G__27673;
chunk__27312_27584 = G__27674;
count__27313_27585 = G__27675;
i__27314_27586 = G__27676;
continue;
} else {
var temp__5735__auto___27677 = cljs.core.seq.call(null,seq__27311_27583);
if(temp__5735__auto___27677){
var seq__27311_27678__$1 = temp__5735__auto___27677;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27311_27678__$1)){
var c__4556__auto___27679 = cljs.core.chunk_first.call(null,seq__27311_27678__$1);
var G__27680 = cljs.core.chunk_rest.call(null,seq__27311_27678__$1);
var G__27681 = c__4556__auto___27679;
var G__27682 = cljs.core.count.call(null,c__4556__auto___27679);
var G__27683 = (0);
seq__27311_27583 = G__27680;
chunk__27312_27584 = G__27681;
count__27313_27585 = G__27682;
i__27314_27586 = G__27683;
continue;
} else {
var vec__27516_27684 = cljs.core.first.call(null,seq__27311_27678__$1);
var line_27685 = cljs.core.nth.call(null,vec__27516_27684,(0),null);
var columns_27686 = cljs.core.nth.call(null,vec__27516_27684,(1),null);
var seq__27519_27687 = cljs.core.seq.call(null,columns_27686);
var chunk__27520_27688 = null;
var count__27521_27689 = (0);
var i__27522_27690 = (0);
while(true){
if((i__27522_27690 < count__27521_27689)){
var vec__27553_27691 = cljs.core._nth.call(null,chunk__27520_27688,i__27522_27690);
var column_27692 = cljs.core.nth.call(null,vec__27553_27691,(0),null);
var column_info_27693 = cljs.core.nth.call(null,vec__27553_27691,(1),null);
var seq__27556_27694 = cljs.core.seq.call(null,column_info_27693);
var chunk__27557_27695 = null;
var count__27558_27696 = (0);
var i__27559_27697 = (0);
while(true){
if((i__27559_27697 < count__27558_27696)){
var map__27564_27698 = cljs.core._nth.call(null,chunk__27557_27695,i__27559_27697);
var map__27564_27699__$1 = (((((!((map__27564_27698 == null))))?(((((map__27564_27698.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27564_27698.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27564_27698):map__27564_27698);
var gline_27700 = cljs.core.get.call(null,map__27564_27699__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_27701 = cljs.core.get.call(null,map__27564_27699__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_27702 = cljs.core.get.call(null,map__27564_27699__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_27700], null),cljs.core.fnil.call(null,((function (seq__27556_27694,chunk__27557_27695,count__27558_27696,i__27559_27697,seq__27519_27687,chunk__27520_27688,count__27521_27689,i__27522_27690,seq__27311_27583,chunk__27312_27584,count__27313_27585,i__27314_27586,map__27564_27698,map__27564_27699__$1,gline_27700,gcol_27701,name_27702,vec__27553_27691,column_27692,column_info_27693,vec__27516_27684,line_27685,columns_27686,seq__27311_27678__$1,temp__5735__auto___27677,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_27701], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_27685,new cljs.core.Keyword(null,"col","col",-1959363084),column_27692,new cljs.core.Keyword(null,"name","name",1843675177),name_27702], null));
});})(seq__27556_27694,chunk__27557_27695,count__27558_27696,i__27559_27697,seq__27519_27687,chunk__27520_27688,count__27521_27689,i__27522_27690,seq__27311_27583,chunk__27312_27584,count__27313_27585,i__27314_27586,map__27564_27698,map__27564_27699__$1,gline_27700,gcol_27701,name_27702,vec__27553_27691,column_27692,column_info_27693,vec__27516_27684,line_27685,columns_27686,seq__27311_27678__$1,temp__5735__auto___27677,inverted))
,cljs.core.sorted_map.call(null)));


var G__27703 = seq__27556_27694;
var G__27704 = chunk__27557_27695;
var G__27705 = count__27558_27696;
var G__27706 = (i__27559_27697 + (1));
seq__27556_27694 = G__27703;
chunk__27557_27695 = G__27704;
count__27558_27696 = G__27705;
i__27559_27697 = G__27706;
continue;
} else {
var temp__5735__auto___27707__$1 = cljs.core.seq.call(null,seq__27556_27694);
if(temp__5735__auto___27707__$1){
var seq__27556_27708__$1 = temp__5735__auto___27707__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27556_27708__$1)){
var c__4556__auto___27709 = cljs.core.chunk_first.call(null,seq__27556_27708__$1);
var G__27710 = cljs.core.chunk_rest.call(null,seq__27556_27708__$1);
var G__27711 = c__4556__auto___27709;
var G__27712 = cljs.core.count.call(null,c__4556__auto___27709);
var G__27713 = (0);
seq__27556_27694 = G__27710;
chunk__27557_27695 = G__27711;
count__27558_27696 = G__27712;
i__27559_27697 = G__27713;
continue;
} else {
var map__27566_27714 = cljs.core.first.call(null,seq__27556_27708__$1);
var map__27566_27715__$1 = (((((!((map__27566_27714 == null))))?(((((map__27566_27714.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27566_27714.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27566_27714):map__27566_27714);
var gline_27716 = cljs.core.get.call(null,map__27566_27715__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_27717 = cljs.core.get.call(null,map__27566_27715__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_27718 = cljs.core.get.call(null,map__27566_27715__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_27716], null),cljs.core.fnil.call(null,((function (seq__27556_27694,chunk__27557_27695,count__27558_27696,i__27559_27697,seq__27519_27687,chunk__27520_27688,count__27521_27689,i__27522_27690,seq__27311_27583,chunk__27312_27584,count__27313_27585,i__27314_27586,map__27566_27714,map__27566_27715__$1,gline_27716,gcol_27717,name_27718,seq__27556_27708__$1,temp__5735__auto___27707__$1,vec__27553_27691,column_27692,column_info_27693,vec__27516_27684,line_27685,columns_27686,seq__27311_27678__$1,temp__5735__auto___27677,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_27717], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_27685,new cljs.core.Keyword(null,"col","col",-1959363084),column_27692,new cljs.core.Keyword(null,"name","name",1843675177),name_27718], null));
});})(seq__27556_27694,chunk__27557_27695,count__27558_27696,i__27559_27697,seq__27519_27687,chunk__27520_27688,count__27521_27689,i__27522_27690,seq__27311_27583,chunk__27312_27584,count__27313_27585,i__27314_27586,map__27566_27714,map__27566_27715__$1,gline_27716,gcol_27717,name_27718,seq__27556_27708__$1,temp__5735__auto___27707__$1,vec__27553_27691,column_27692,column_info_27693,vec__27516_27684,line_27685,columns_27686,seq__27311_27678__$1,temp__5735__auto___27677,inverted))
,cljs.core.sorted_map.call(null)));


var G__27719 = cljs.core.next.call(null,seq__27556_27708__$1);
var G__27720 = null;
var G__27721 = (0);
var G__27722 = (0);
seq__27556_27694 = G__27719;
chunk__27557_27695 = G__27720;
count__27558_27696 = G__27721;
i__27559_27697 = G__27722;
continue;
}
} else {
}
}
break;
}


var G__27723 = seq__27519_27687;
var G__27724 = chunk__27520_27688;
var G__27725 = count__27521_27689;
var G__27726 = (i__27522_27690 + (1));
seq__27519_27687 = G__27723;
chunk__27520_27688 = G__27724;
count__27521_27689 = G__27725;
i__27522_27690 = G__27726;
continue;
} else {
var temp__5735__auto___27727__$1 = cljs.core.seq.call(null,seq__27519_27687);
if(temp__5735__auto___27727__$1){
var seq__27519_27728__$1 = temp__5735__auto___27727__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27519_27728__$1)){
var c__4556__auto___27729 = cljs.core.chunk_first.call(null,seq__27519_27728__$1);
var G__27730 = cljs.core.chunk_rest.call(null,seq__27519_27728__$1);
var G__27731 = c__4556__auto___27729;
var G__27732 = cljs.core.count.call(null,c__4556__auto___27729);
var G__27733 = (0);
seq__27519_27687 = G__27730;
chunk__27520_27688 = G__27731;
count__27521_27689 = G__27732;
i__27522_27690 = G__27733;
continue;
} else {
var vec__27568_27734 = cljs.core.first.call(null,seq__27519_27728__$1);
var column_27735 = cljs.core.nth.call(null,vec__27568_27734,(0),null);
var column_info_27736 = cljs.core.nth.call(null,vec__27568_27734,(1),null);
var seq__27571_27737 = cljs.core.seq.call(null,column_info_27736);
var chunk__27572_27738 = null;
var count__27573_27739 = (0);
var i__27574_27740 = (0);
while(true){
if((i__27574_27740 < count__27573_27739)){
var map__27579_27741 = cljs.core._nth.call(null,chunk__27572_27738,i__27574_27740);
var map__27579_27742__$1 = (((((!((map__27579_27741 == null))))?(((((map__27579_27741.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27579_27741.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27579_27741):map__27579_27741);
var gline_27743 = cljs.core.get.call(null,map__27579_27742__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_27744 = cljs.core.get.call(null,map__27579_27742__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_27745 = cljs.core.get.call(null,map__27579_27742__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_27743], null),cljs.core.fnil.call(null,((function (seq__27571_27737,chunk__27572_27738,count__27573_27739,i__27574_27740,seq__27519_27687,chunk__27520_27688,count__27521_27689,i__27522_27690,seq__27311_27583,chunk__27312_27584,count__27313_27585,i__27314_27586,map__27579_27741,map__27579_27742__$1,gline_27743,gcol_27744,name_27745,vec__27568_27734,column_27735,column_info_27736,seq__27519_27728__$1,temp__5735__auto___27727__$1,vec__27516_27684,line_27685,columns_27686,seq__27311_27678__$1,temp__5735__auto___27677,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_27744], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_27685,new cljs.core.Keyword(null,"col","col",-1959363084),column_27735,new cljs.core.Keyword(null,"name","name",1843675177),name_27745], null));
});})(seq__27571_27737,chunk__27572_27738,count__27573_27739,i__27574_27740,seq__27519_27687,chunk__27520_27688,count__27521_27689,i__27522_27690,seq__27311_27583,chunk__27312_27584,count__27313_27585,i__27314_27586,map__27579_27741,map__27579_27742__$1,gline_27743,gcol_27744,name_27745,vec__27568_27734,column_27735,column_info_27736,seq__27519_27728__$1,temp__5735__auto___27727__$1,vec__27516_27684,line_27685,columns_27686,seq__27311_27678__$1,temp__5735__auto___27677,inverted))
,cljs.core.sorted_map.call(null)));


var G__27746 = seq__27571_27737;
var G__27747 = chunk__27572_27738;
var G__27748 = count__27573_27739;
var G__27749 = (i__27574_27740 + (1));
seq__27571_27737 = G__27746;
chunk__27572_27738 = G__27747;
count__27573_27739 = G__27748;
i__27574_27740 = G__27749;
continue;
} else {
var temp__5735__auto___27750__$2 = cljs.core.seq.call(null,seq__27571_27737);
if(temp__5735__auto___27750__$2){
var seq__27571_27751__$1 = temp__5735__auto___27750__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27571_27751__$1)){
var c__4556__auto___27752 = cljs.core.chunk_first.call(null,seq__27571_27751__$1);
var G__27753 = cljs.core.chunk_rest.call(null,seq__27571_27751__$1);
var G__27754 = c__4556__auto___27752;
var G__27755 = cljs.core.count.call(null,c__4556__auto___27752);
var G__27756 = (0);
seq__27571_27737 = G__27753;
chunk__27572_27738 = G__27754;
count__27573_27739 = G__27755;
i__27574_27740 = G__27756;
continue;
} else {
var map__27581_27757 = cljs.core.first.call(null,seq__27571_27751__$1);
var map__27581_27758__$1 = (((((!((map__27581_27757 == null))))?(((((map__27581_27757.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27581_27757.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27581_27757):map__27581_27757);
var gline_27759 = cljs.core.get.call(null,map__27581_27758__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_27760 = cljs.core.get.call(null,map__27581_27758__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_27761 = cljs.core.get.call(null,map__27581_27758__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_27759], null),cljs.core.fnil.call(null,((function (seq__27571_27737,chunk__27572_27738,count__27573_27739,i__27574_27740,seq__27519_27687,chunk__27520_27688,count__27521_27689,i__27522_27690,seq__27311_27583,chunk__27312_27584,count__27313_27585,i__27314_27586,map__27581_27757,map__27581_27758__$1,gline_27759,gcol_27760,name_27761,seq__27571_27751__$1,temp__5735__auto___27750__$2,vec__27568_27734,column_27735,column_info_27736,seq__27519_27728__$1,temp__5735__auto___27727__$1,vec__27516_27684,line_27685,columns_27686,seq__27311_27678__$1,temp__5735__auto___27677,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_27760], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_27685,new cljs.core.Keyword(null,"col","col",-1959363084),column_27735,new cljs.core.Keyword(null,"name","name",1843675177),name_27761], null));
});})(seq__27571_27737,chunk__27572_27738,count__27573_27739,i__27574_27740,seq__27519_27687,chunk__27520_27688,count__27521_27689,i__27522_27690,seq__27311_27583,chunk__27312_27584,count__27313_27585,i__27314_27586,map__27581_27757,map__27581_27758__$1,gline_27759,gcol_27760,name_27761,seq__27571_27751__$1,temp__5735__auto___27750__$2,vec__27568_27734,column_27735,column_info_27736,seq__27519_27728__$1,temp__5735__auto___27727__$1,vec__27516_27684,line_27685,columns_27686,seq__27311_27678__$1,temp__5735__auto___27677,inverted))
,cljs.core.sorted_map.call(null)));


var G__27762 = cljs.core.next.call(null,seq__27571_27751__$1);
var G__27763 = null;
var G__27764 = (0);
var G__27765 = (0);
seq__27571_27737 = G__27762;
chunk__27572_27738 = G__27763;
count__27573_27739 = G__27764;
i__27574_27740 = G__27765;
continue;
}
} else {
}
}
break;
}


var G__27766 = cljs.core.next.call(null,seq__27519_27728__$1);
var G__27767 = null;
var G__27768 = (0);
var G__27769 = (0);
seq__27519_27687 = G__27766;
chunk__27520_27688 = G__27767;
count__27521_27689 = G__27768;
i__27522_27690 = G__27769;
continue;
}
} else {
}
}
break;
}


var G__27770 = cljs.core.next.call(null,seq__27311_27678__$1);
var G__27771 = null;
var G__27772 = (0);
var G__27773 = (0);
seq__27311_27583 = G__27770;
chunk__27312_27584 = G__27771;
count__27313_27585 = G__27772;
i__27314_27586 = G__27773;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref.call(null,inverted);
});

//# sourceMappingURL=source_map.js.map?rel=1593965192257
