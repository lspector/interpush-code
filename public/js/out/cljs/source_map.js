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
return cljs.core.reduce.call(null,(function (m,p__38925){
var vec__38926 = p__38925;
var i = cljs.core.nth.call(null,vec__38926,(0),null);
var v = cljs.core.nth.call(null,vec__38926,(1),null);
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
var vec__38929 = seg;
var gcol = cljs.core.nth.call(null,vec__38929,(0),null);
var source = cljs.core.nth.call(null,vec__38929,(1),null);
var line = cljs.core.nth.call(null,vec__38929,(2),null);
var col = cljs.core.nth.call(null,vec__38929,(3),null);
var name = cljs.core.nth.call(null,vec__38929,(4),null);
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
var vec__38932 = seg;
var gcol = cljs.core.nth.call(null,vec__38932,(0),null);
var source = cljs.core.nth.call(null,vec__38932,(1),null);
var line = cljs.core.nth.call(null,vec__38932,(2),null);
var col = cljs.core.nth.call(null,vec__38932,(3),null);
var name = cljs.core.nth.call(null,vec__38932,(4),null);
var vec__38935 = relseg;
var rgcol = cljs.core.nth.call(null,vec__38935,(0),null);
var rsource = cljs.core.nth.call(null,vec__38935,(1),null);
var rline = cljs.core.nth.call(null,vec__38935,(2),null);
var rcol = cljs.core.nth.call(null,vec__38935,(3),null);
var rname = cljs.core.nth.call(null,vec__38935,(4),null);
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
var map__38938 = segmap;
var map__38938__$1 = (((((!((map__38938 == null))))?(((((map__38938.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38938.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38938):map__38938);
var gcol = cljs.core.get.call(null,map__38938__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__38938__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__38938__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__38938__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__38938__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var G__38941 = arguments.length;
switch (G__38941) {
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
var vec__38945 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__38949 = cljs.core.next.call(null,segs__$1);
var G__38950 = nrelseg;
var G__38951 = cljs.source_map.update_reverse_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__38949;
relseg__$1 = G__38950;
result__$1 = G__38951;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__38945,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__38945,(1),null);
var G__38952 = (gline + (1));
var G__38953 = cljs.core.next.call(null,lines__$1);
var G__38954 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__38955 = result__$1;
gline = G__38952;
lines__$1 = G__38953;
relseg = G__38954;
result = G__38955;
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
var map__38957 = segmap;
var map__38957__$1 = (((((!((map__38957 == null))))?(((((map__38957.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38957.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38957):map__38957);
var gcol = cljs.core.get.call(null,map__38957__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__38957__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__38957__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__38957__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__38957__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"source","source",-433931539),source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.call(null,(function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.call(null,(function (p1__38956_SHARP_){
return cljs.core.conj.call(null,p1__38956_SHARP_,d__$1);
}),cljs.core.PersistentVector.EMPTY));
}),cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var G__38960 = arguments.length;
switch (G__38960) {
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
var vec__38964 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__38968 = cljs.core.next.call(null,segs__$1);
var G__38969 = nrelseg;
var G__38970 = cljs.source_map.update_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__38968;
relseg__$1 = G__38969;
result__$1 = G__38970;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__38964,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__38964,(1),null);
var G__38971 = (gline + (1));
var G__38972 = cljs.core.next.call(null,lines__$1);
var G__38973 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__38974 = result__$1;
gline = G__38971;
lines__$1 = G__38972;
relseg = G__38973;
result = G__38974;
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
cljs.core.swap_BANG_.call(null,relseg,(function (p__38975){
var vec__38976 = p__38975;
var _ = cljs.core.nth.call(null,vec__38976,(0),null);
var source = cljs.core.nth.call(null,vec__38976,(1),null);
var line = cljs.core.nth.call(null,vec__38976,(2),null);
var col = cljs.core.nth.call(null,vec__38976,(3),null);
var name = cljs.core.nth.call(null,vec__38976,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
}));

return cljs.core.conj.call(null,segs,cljs.core.reduce.call(null,(function (cols__$1,p__38979){
var vec__38980 = p__38979;
var gcol = cljs.core.nth.call(null,vec__38980,(0),null);
var sidx = cljs.core.nth.call(null,vec__38980,(1),null);
var line = cljs.core.nth.call(null,vec__38980,(2),null);
var col = cljs.core.nth.call(null,vec__38980,(3),null);
var name = cljs.core.nth.call(null,vec__38980,(4),null);
var seg = vec__38980;
var offset = cljs.core.map.call(null,cljs.core._,seg,cljs.core.deref.call(null,relseg));
cljs.core.swap_BANG_.call(null,relseg,(function (p__38983){
var vec__38984 = p__38983;
var _ = cljs.core.nth.call(null,vec__38984,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__38984,(1),null);
var ___$2 = cljs.core.nth.call(null,vec__38984,(2),null);
var ___$3 = cljs.core.nth.call(null,vec__38984,(3),null);
var lname = cljs.core.nth.call(null,vec__38984,(4),null);
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
var seq__38990 = cljs.core.seq.call(null,infos);
var chunk__38991 = null;
var count__38992 = (0);
var i__38993 = (0);
while(true){
if((i__38993 < count__38992)){
var info = cljs.core._nth.call(null,chunk__38991,i__38993);
var segv_39344 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_39345 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_39346 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_39345 > (lc_39346 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__38990,chunk__38991,count__38992,i__38993,segv_39344,gline_39345,lc_39346,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_39345 - (lc_39346 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_39344], null));
});})(seq__38990,chunk__38991,count__38992,i__38993,segv_39344,gline_39345,lc_39346,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__38990,chunk__38991,count__38992,i__38993,segv_39344,gline_39345,lc_39346,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_39345], null),cljs.core.conj,segv_39344);
});})(seq__38990,chunk__38991,count__38992,i__38993,segv_39344,gline_39345,lc_39346,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__39347 = seq__38990;
var G__39348 = chunk__38991;
var G__39349 = count__38992;
var G__39350 = (i__38993 + (1));
seq__38990 = G__39347;
chunk__38991 = G__39348;
count__38992 = G__39349;
i__38993 = G__39350;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__38990);
if(temp__5735__auto__){
var seq__38990__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38990__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__38990__$1);
var G__39351 = cljs.core.chunk_rest.call(null,seq__38990__$1);
var G__39352 = c__4556__auto__;
var G__39353 = cljs.core.count.call(null,c__4556__auto__);
var G__39354 = (0);
seq__38990 = G__39351;
chunk__38991 = G__39352;
count__38992 = G__39353;
i__38993 = G__39354;
continue;
} else {
var info = cljs.core.first.call(null,seq__38990__$1);
var segv_39355 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_39356 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_39357 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_39356 > (lc_39357 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__38990,chunk__38991,count__38992,i__38993,segv_39355,gline_39356,lc_39357,info,seq__38990__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_39356 - (lc_39357 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_39355], null));
});})(seq__38990,chunk__38991,count__38992,i__38993,segv_39355,gline_39356,lc_39357,info,seq__38990__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__38990,chunk__38991,count__38992,i__38993,segv_39355,gline_39356,lc_39357,info,seq__38990__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_39356], null),cljs.core.conj,segv_39355);
});})(seq__38990,chunk__38991,count__38992,i__38993,segv_39355,gline_39356,lc_39357,info,seq__38990__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__39358 = cljs.core.next.call(null,seq__38990__$1);
var G__39359 = null;
var G__39360 = (0);
var G__39361 = (0);
seq__38990 = G__39358;
chunk__38991 = G__39359;
count__38992 = G__39360;
i__38993 = G__39361;
continue;
}
} else {
return null;
}
}
break;
}
});
var seq__38994_39362 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__38995_39363 = null;
var count__38996_39364 = (0);
var i__38997_39365 = (0);
while(true){
if((i__38997_39365 < count__38996_39364)){
var vec__39170_39366 = cljs.core._nth.call(null,chunk__38995_39363,i__38997_39365);
var source_idx_39367 = cljs.core.nth.call(null,vec__39170_39366,(0),null);
var vec__39173_39368 = cljs.core.nth.call(null,vec__39170_39366,(1),null);
var __39369 = cljs.core.nth.call(null,vec__39173_39368,(0),null);
var lines_39370__$1 = cljs.core.nth.call(null,vec__39173_39368,(1),null);
var seq__39176_39371 = cljs.core.seq.call(null,lines_39370__$1);
var chunk__39177_39372 = null;
var count__39178_39373 = (0);
var i__39179_39374 = (0);
while(true){
if((i__39179_39374 < count__39178_39373)){
var vec__39218_39375 = cljs.core._nth.call(null,chunk__39177_39372,i__39179_39374);
var line_39376 = cljs.core.nth.call(null,vec__39218_39375,(0),null);
var cols_39377 = cljs.core.nth.call(null,vec__39218_39375,(1),null);
var seq__39221_39378 = cljs.core.seq.call(null,cols_39377);
var chunk__39222_39379 = null;
var count__39223_39380 = (0);
var i__39224_39381 = (0);
while(true){
if((i__39224_39381 < count__39223_39380)){
var vec__39231_39382 = cljs.core._nth.call(null,chunk__39222_39379,i__39224_39381);
var col_39383 = cljs.core.nth.call(null,vec__39231_39382,(0),null);
var infos_39384 = cljs.core.nth.call(null,vec__39231_39382,(1),null);
encode_cols.call(null,infos_39384,source_idx_39367,line_39376,col_39383);


var G__39385 = seq__39221_39378;
var G__39386 = chunk__39222_39379;
var G__39387 = count__39223_39380;
var G__39388 = (i__39224_39381 + (1));
seq__39221_39378 = G__39385;
chunk__39222_39379 = G__39386;
count__39223_39380 = G__39387;
i__39224_39381 = G__39388;
continue;
} else {
var temp__5735__auto___39389 = cljs.core.seq.call(null,seq__39221_39378);
if(temp__5735__auto___39389){
var seq__39221_39390__$1 = temp__5735__auto___39389;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39221_39390__$1)){
var c__4556__auto___39391 = cljs.core.chunk_first.call(null,seq__39221_39390__$1);
var G__39392 = cljs.core.chunk_rest.call(null,seq__39221_39390__$1);
var G__39393 = c__4556__auto___39391;
var G__39394 = cljs.core.count.call(null,c__4556__auto___39391);
var G__39395 = (0);
seq__39221_39378 = G__39392;
chunk__39222_39379 = G__39393;
count__39223_39380 = G__39394;
i__39224_39381 = G__39395;
continue;
} else {
var vec__39234_39396 = cljs.core.first.call(null,seq__39221_39390__$1);
var col_39397 = cljs.core.nth.call(null,vec__39234_39396,(0),null);
var infos_39398 = cljs.core.nth.call(null,vec__39234_39396,(1),null);
encode_cols.call(null,infos_39398,source_idx_39367,line_39376,col_39397);


var G__39399 = cljs.core.next.call(null,seq__39221_39390__$1);
var G__39400 = null;
var G__39401 = (0);
var G__39402 = (0);
seq__39221_39378 = G__39399;
chunk__39222_39379 = G__39400;
count__39223_39380 = G__39401;
i__39224_39381 = G__39402;
continue;
}
} else {
}
}
break;
}


var G__39403 = seq__39176_39371;
var G__39404 = chunk__39177_39372;
var G__39405 = count__39178_39373;
var G__39406 = (i__39179_39374 + (1));
seq__39176_39371 = G__39403;
chunk__39177_39372 = G__39404;
count__39178_39373 = G__39405;
i__39179_39374 = G__39406;
continue;
} else {
var temp__5735__auto___39407 = cljs.core.seq.call(null,seq__39176_39371);
if(temp__5735__auto___39407){
var seq__39176_39408__$1 = temp__5735__auto___39407;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39176_39408__$1)){
var c__4556__auto___39409 = cljs.core.chunk_first.call(null,seq__39176_39408__$1);
var G__39410 = cljs.core.chunk_rest.call(null,seq__39176_39408__$1);
var G__39411 = c__4556__auto___39409;
var G__39412 = cljs.core.count.call(null,c__4556__auto___39409);
var G__39413 = (0);
seq__39176_39371 = G__39410;
chunk__39177_39372 = G__39411;
count__39178_39373 = G__39412;
i__39179_39374 = G__39413;
continue;
} else {
var vec__39237_39414 = cljs.core.first.call(null,seq__39176_39408__$1);
var line_39415 = cljs.core.nth.call(null,vec__39237_39414,(0),null);
var cols_39416 = cljs.core.nth.call(null,vec__39237_39414,(1),null);
var seq__39240_39417 = cljs.core.seq.call(null,cols_39416);
var chunk__39241_39418 = null;
var count__39242_39419 = (0);
var i__39243_39420 = (0);
while(true){
if((i__39243_39420 < count__39242_39419)){
var vec__39250_39421 = cljs.core._nth.call(null,chunk__39241_39418,i__39243_39420);
var col_39422 = cljs.core.nth.call(null,vec__39250_39421,(0),null);
var infos_39423 = cljs.core.nth.call(null,vec__39250_39421,(1),null);
encode_cols.call(null,infos_39423,source_idx_39367,line_39415,col_39422);


var G__39424 = seq__39240_39417;
var G__39425 = chunk__39241_39418;
var G__39426 = count__39242_39419;
var G__39427 = (i__39243_39420 + (1));
seq__39240_39417 = G__39424;
chunk__39241_39418 = G__39425;
count__39242_39419 = G__39426;
i__39243_39420 = G__39427;
continue;
} else {
var temp__5735__auto___39428__$1 = cljs.core.seq.call(null,seq__39240_39417);
if(temp__5735__auto___39428__$1){
var seq__39240_39429__$1 = temp__5735__auto___39428__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39240_39429__$1)){
var c__4556__auto___39430 = cljs.core.chunk_first.call(null,seq__39240_39429__$1);
var G__39431 = cljs.core.chunk_rest.call(null,seq__39240_39429__$1);
var G__39432 = c__4556__auto___39430;
var G__39433 = cljs.core.count.call(null,c__4556__auto___39430);
var G__39434 = (0);
seq__39240_39417 = G__39431;
chunk__39241_39418 = G__39432;
count__39242_39419 = G__39433;
i__39243_39420 = G__39434;
continue;
} else {
var vec__39253_39435 = cljs.core.first.call(null,seq__39240_39429__$1);
var col_39436 = cljs.core.nth.call(null,vec__39253_39435,(0),null);
var infos_39437 = cljs.core.nth.call(null,vec__39253_39435,(1),null);
encode_cols.call(null,infos_39437,source_idx_39367,line_39415,col_39436);


var G__39438 = cljs.core.next.call(null,seq__39240_39429__$1);
var G__39439 = null;
var G__39440 = (0);
var G__39441 = (0);
seq__39240_39417 = G__39438;
chunk__39241_39418 = G__39439;
count__39242_39419 = G__39440;
i__39243_39420 = G__39441;
continue;
}
} else {
}
}
break;
}


var G__39442 = cljs.core.next.call(null,seq__39176_39408__$1);
var G__39443 = null;
var G__39444 = (0);
var G__39445 = (0);
seq__39176_39371 = G__39442;
chunk__39177_39372 = G__39443;
count__39178_39373 = G__39444;
i__39179_39374 = G__39445;
continue;
}
} else {
}
}
break;
}


var G__39446 = seq__38994_39362;
var G__39447 = chunk__38995_39363;
var G__39448 = count__38996_39364;
var G__39449 = (i__38997_39365 + (1));
seq__38994_39362 = G__39446;
chunk__38995_39363 = G__39447;
count__38996_39364 = G__39448;
i__38997_39365 = G__39449;
continue;
} else {
var temp__5735__auto___39450 = cljs.core.seq.call(null,seq__38994_39362);
if(temp__5735__auto___39450){
var seq__38994_39451__$1 = temp__5735__auto___39450;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38994_39451__$1)){
var c__4556__auto___39452 = cljs.core.chunk_first.call(null,seq__38994_39451__$1);
var G__39453 = cljs.core.chunk_rest.call(null,seq__38994_39451__$1);
var G__39454 = c__4556__auto___39452;
var G__39455 = cljs.core.count.call(null,c__4556__auto___39452);
var G__39456 = (0);
seq__38994_39362 = G__39453;
chunk__38995_39363 = G__39454;
count__38996_39364 = G__39455;
i__38997_39365 = G__39456;
continue;
} else {
var vec__39256_39457 = cljs.core.first.call(null,seq__38994_39451__$1);
var source_idx_39458 = cljs.core.nth.call(null,vec__39256_39457,(0),null);
var vec__39259_39459 = cljs.core.nth.call(null,vec__39256_39457,(1),null);
var __39460 = cljs.core.nth.call(null,vec__39259_39459,(0),null);
var lines_39461__$1 = cljs.core.nth.call(null,vec__39259_39459,(1),null);
var seq__39262_39462 = cljs.core.seq.call(null,lines_39461__$1);
var chunk__39263_39463 = null;
var count__39264_39464 = (0);
var i__39265_39465 = (0);
while(true){
if((i__39265_39465 < count__39264_39464)){
var vec__39304_39466 = cljs.core._nth.call(null,chunk__39263_39463,i__39265_39465);
var line_39467 = cljs.core.nth.call(null,vec__39304_39466,(0),null);
var cols_39468 = cljs.core.nth.call(null,vec__39304_39466,(1),null);
var seq__39307_39469 = cljs.core.seq.call(null,cols_39468);
var chunk__39308_39470 = null;
var count__39309_39471 = (0);
var i__39310_39472 = (0);
while(true){
if((i__39310_39472 < count__39309_39471)){
var vec__39317_39473 = cljs.core._nth.call(null,chunk__39308_39470,i__39310_39472);
var col_39474 = cljs.core.nth.call(null,vec__39317_39473,(0),null);
var infos_39475 = cljs.core.nth.call(null,vec__39317_39473,(1),null);
encode_cols.call(null,infos_39475,source_idx_39458,line_39467,col_39474);


var G__39476 = seq__39307_39469;
var G__39477 = chunk__39308_39470;
var G__39478 = count__39309_39471;
var G__39479 = (i__39310_39472 + (1));
seq__39307_39469 = G__39476;
chunk__39308_39470 = G__39477;
count__39309_39471 = G__39478;
i__39310_39472 = G__39479;
continue;
} else {
var temp__5735__auto___39480__$1 = cljs.core.seq.call(null,seq__39307_39469);
if(temp__5735__auto___39480__$1){
var seq__39307_39481__$1 = temp__5735__auto___39480__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39307_39481__$1)){
var c__4556__auto___39482 = cljs.core.chunk_first.call(null,seq__39307_39481__$1);
var G__39483 = cljs.core.chunk_rest.call(null,seq__39307_39481__$1);
var G__39484 = c__4556__auto___39482;
var G__39485 = cljs.core.count.call(null,c__4556__auto___39482);
var G__39486 = (0);
seq__39307_39469 = G__39483;
chunk__39308_39470 = G__39484;
count__39309_39471 = G__39485;
i__39310_39472 = G__39486;
continue;
} else {
var vec__39320_39487 = cljs.core.first.call(null,seq__39307_39481__$1);
var col_39488 = cljs.core.nth.call(null,vec__39320_39487,(0),null);
var infos_39489 = cljs.core.nth.call(null,vec__39320_39487,(1),null);
encode_cols.call(null,infos_39489,source_idx_39458,line_39467,col_39488);


var G__39490 = cljs.core.next.call(null,seq__39307_39481__$1);
var G__39491 = null;
var G__39492 = (0);
var G__39493 = (0);
seq__39307_39469 = G__39490;
chunk__39308_39470 = G__39491;
count__39309_39471 = G__39492;
i__39310_39472 = G__39493;
continue;
}
} else {
}
}
break;
}


var G__39494 = seq__39262_39462;
var G__39495 = chunk__39263_39463;
var G__39496 = count__39264_39464;
var G__39497 = (i__39265_39465 + (1));
seq__39262_39462 = G__39494;
chunk__39263_39463 = G__39495;
count__39264_39464 = G__39496;
i__39265_39465 = G__39497;
continue;
} else {
var temp__5735__auto___39498__$1 = cljs.core.seq.call(null,seq__39262_39462);
if(temp__5735__auto___39498__$1){
var seq__39262_39499__$1 = temp__5735__auto___39498__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39262_39499__$1)){
var c__4556__auto___39500 = cljs.core.chunk_first.call(null,seq__39262_39499__$1);
var G__39501 = cljs.core.chunk_rest.call(null,seq__39262_39499__$1);
var G__39502 = c__4556__auto___39500;
var G__39503 = cljs.core.count.call(null,c__4556__auto___39500);
var G__39504 = (0);
seq__39262_39462 = G__39501;
chunk__39263_39463 = G__39502;
count__39264_39464 = G__39503;
i__39265_39465 = G__39504;
continue;
} else {
var vec__39323_39505 = cljs.core.first.call(null,seq__39262_39499__$1);
var line_39506 = cljs.core.nth.call(null,vec__39323_39505,(0),null);
var cols_39507 = cljs.core.nth.call(null,vec__39323_39505,(1),null);
var seq__39326_39508 = cljs.core.seq.call(null,cols_39507);
var chunk__39327_39509 = null;
var count__39328_39510 = (0);
var i__39329_39511 = (0);
while(true){
if((i__39329_39511 < count__39328_39510)){
var vec__39336_39512 = cljs.core._nth.call(null,chunk__39327_39509,i__39329_39511);
var col_39513 = cljs.core.nth.call(null,vec__39336_39512,(0),null);
var infos_39514 = cljs.core.nth.call(null,vec__39336_39512,(1),null);
encode_cols.call(null,infos_39514,source_idx_39458,line_39506,col_39513);


var G__39515 = seq__39326_39508;
var G__39516 = chunk__39327_39509;
var G__39517 = count__39328_39510;
var G__39518 = (i__39329_39511 + (1));
seq__39326_39508 = G__39515;
chunk__39327_39509 = G__39516;
count__39328_39510 = G__39517;
i__39329_39511 = G__39518;
continue;
} else {
var temp__5735__auto___39519__$2 = cljs.core.seq.call(null,seq__39326_39508);
if(temp__5735__auto___39519__$2){
var seq__39326_39520__$1 = temp__5735__auto___39519__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39326_39520__$1)){
var c__4556__auto___39521 = cljs.core.chunk_first.call(null,seq__39326_39520__$1);
var G__39522 = cljs.core.chunk_rest.call(null,seq__39326_39520__$1);
var G__39523 = c__4556__auto___39521;
var G__39524 = cljs.core.count.call(null,c__4556__auto___39521);
var G__39525 = (0);
seq__39326_39508 = G__39522;
chunk__39327_39509 = G__39523;
count__39328_39510 = G__39524;
i__39329_39511 = G__39525;
continue;
} else {
var vec__39339_39526 = cljs.core.first.call(null,seq__39326_39520__$1);
var col_39527 = cljs.core.nth.call(null,vec__39339_39526,(0),null);
var infos_39528 = cljs.core.nth.call(null,vec__39339_39526,(1),null);
encode_cols.call(null,infos_39528,source_idx_39458,line_39506,col_39527);


var G__39529 = cljs.core.next.call(null,seq__39326_39520__$1);
var G__39530 = null;
var G__39531 = (0);
var G__39532 = (0);
seq__39326_39508 = G__39529;
chunk__39327_39509 = G__39530;
count__39328_39510 = G__39531;
i__39329_39511 = G__39532;
continue;
}
} else {
}
}
break;
}


var G__39533 = cljs.core.next.call(null,seq__39262_39499__$1);
var G__39534 = null;
var G__39535 = (0);
var G__39536 = (0);
seq__39262_39462 = G__39533;
chunk__39263_39463 = G__39534;
count__39264_39464 = G__39535;
i__39265_39465 = G__39536;
continue;
}
} else {
}
}
break;
}


var G__39537 = cljs.core.next.call(null,seq__38994_39451__$1);
var G__39538 = null;
var G__39539 = (0);
var G__39540 = (0);
seq__38994_39362 = G__39537;
chunk__38995_39363 = G__39538;
count__38996_39364 = G__39539;
i__38997_39365 = G__39540;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__39342 = ({"version": (3), "file": new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys.call(null,m);
var f = cljs.core.comp.call(null,((new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633).cljs$core$IFn$_invoke$arity$1(opts) === true)?(function (p1__38987_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__38987_SHARP_),"?rel=",cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).valueOf())].join('');
}):cljs.core.identity),(function (p1__38988_SHARP_){
return cljs.core.last.call(null,clojure.string.split.call(null,p1__38988_SHARP_,/\//));
}));
return cljs.core.into_array.call(null,cljs.core.map.call(null,f,paths));
})(), "lineCount": new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.call(null,";",cljs.core.map.call(null,(function (p1__38989_SHARP_){
return clojure.string.join.call(null,",",p1__38989_SHARP_);
}),cljs.source_map.lines__GT_segs.call(null,cljs.core.concat.call(null,preamble_lines,cljs.core.deref.call(null,lines))))), "names": cljs.core.into_array.call(null,cljs.core.map.call(null,clojure.set.map_invert.call(null,cljs.core.deref.call(null,names__GT_idx)),cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.deref.call(null,names__GT_idx)))))});
if(cljs.core.truth_(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts))){
var G__39343 = G__39342;
goog.object.set(G__39343,"sourcesContent",cljs.core.into_array.call(null,new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts)));

return G__39343;
} else {
return G__39342;
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
var vec__39541 = cljs.core.first.call(null,line_map_seq);
var line = cljs.core.nth.call(null,vec__39541,(0),null);
var col_map = cljs.core.nth.call(null,vec__39541,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq.call(null,col_map);
var new_cols = cljs.core.sorted_map.call(null);
while(true){
if(col_map_seq){
var vec__39544 = cljs.core.first.call(null,col_map_seq);
var col = cljs.core.nth.call(null,vec__39544,(0),null);
var infos = cljs.core.nth.call(null,vec__39544,(1),null);
var G__39550 = cljs.core.next.call(null,col_map_seq);
var G__39551 = cljs.core.assoc.call(null,new_cols,col,cljs.core.reduce.call(null,((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__39544,col,infos,vec__39541,line,col_map){
return (function (v,p__39547){
var map__39548 = p__39547;
var map__39548__$1 = (((((!((map__39548 == null))))?(((((map__39548.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39548.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39548):map__39548);
var gline = cljs.core.get.call(null,map__39548__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol = cljs.core.get.call(null,map__39548__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
return cljs.core.into.call(null,v,cljs.core.get_in.call(null,js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__39544,col,infos,vec__39541,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__39550;
new_cols = G__39551;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__39552 = cljs.core.next.call(null,line_map_seq);
var G__39553 = cljs.core.assoc.call(null,new_lines,line,new_cols);
line_map_seq = G__39552;
new_lines = G__39553;
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
var seq__39554_39826 = cljs.core.seq.call(null,reverse_map);
var chunk__39555_39827 = null;
var count__39556_39828 = (0);
var i__39557_39829 = (0);
while(true){
if((i__39557_39829 < count__39556_39828)){
var vec__39692_39830 = cljs.core._nth.call(null,chunk__39555_39827,i__39557_39829);
var line_39831 = cljs.core.nth.call(null,vec__39692_39830,(0),null);
var columns_39832 = cljs.core.nth.call(null,vec__39692_39830,(1),null);
var seq__39695_39833 = cljs.core.seq.call(null,columns_39832);
var chunk__39696_39834 = null;
var count__39697_39835 = (0);
var i__39698_39836 = (0);
while(true){
if((i__39698_39836 < count__39697_39835)){
var vec__39729_39837 = cljs.core._nth.call(null,chunk__39696_39834,i__39698_39836);
var column_39838 = cljs.core.nth.call(null,vec__39729_39837,(0),null);
var column_info_39839 = cljs.core.nth.call(null,vec__39729_39837,(1),null);
var seq__39732_39840 = cljs.core.seq.call(null,column_info_39839);
var chunk__39733_39841 = null;
var count__39734_39842 = (0);
var i__39735_39843 = (0);
while(true){
if((i__39735_39843 < count__39734_39842)){
var map__39740_39844 = cljs.core._nth.call(null,chunk__39733_39841,i__39735_39843);
var map__39740_39845__$1 = (((((!((map__39740_39844 == null))))?(((((map__39740_39844.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39740_39844.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39740_39844):map__39740_39844);
var gline_39846 = cljs.core.get.call(null,map__39740_39845__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_39847 = cljs.core.get.call(null,map__39740_39845__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_39848 = cljs.core.get.call(null,map__39740_39845__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_39846], null),cljs.core.fnil.call(null,((function (seq__39732_39840,chunk__39733_39841,count__39734_39842,i__39735_39843,seq__39695_39833,chunk__39696_39834,count__39697_39835,i__39698_39836,seq__39554_39826,chunk__39555_39827,count__39556_39828,i__39557_39829,map__39740_39844,map__39740_39845__$1,gline_39846,gcol_39847,name_39848,vec__39729_39837,column_39838,column_info_39839,vec__39692_39830,line_39831,columns_39832,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_39847], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_39831,new cljs.core.Keyword(null,"col","col",-1959363084),column_39838,new cljs.core.Keyword(null,"name","name",1843675177),name_39848], null));
});})(seq__39732_39840,chunk__39733_39841,count__39734_39842,i__39735_39843,seq__39695_39833,chunk__39696_39834,count__39697_39835,i__39698_39836,seq__39554_39826,chunk__39555_39827,count__39556_39828,i__39557_39829,map__39740_39844,map__39740_39845__$1,gline_39846,gcol_39847,name_39848,vec__39729_39837,column_39838,column_info_39839,vec__39692_39830,line_39831,columns_39832,inverted))
,cljs.core.sorted_map.call(null)));


var G__39849 = seq__39732_39840;
var G__39850 = chunk__39733_39841;
var G__39851 = count__39734_39842;
var G__39852 = (i__39735_39843 + (1));
seq__39732_39840 = G__39849;
chunk__39733_39841 = G__39850;
count__39734_39842 = G__39851;
i__39735_39843 = G__39852;
continue;
} else {
var temp__5735__auto___39853 = cljs.core.seq.call(null,seq__39732_39840);
if(temp__5735__auto___39853){
var seq__39732_39854__$1 = temp__5735__auto___39853;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39732_39854__$1)){
var c__4556__auto___39855 = cljs.core.chunk_first.call(null,seq__39732_39854__$1);
var G__39856 = cljs.core.chunk_rest.call(null,seq__39732_39854__$1);
var G__39857 = c__4556__auto___39855;
var G__39858 = cljs.core.count.call(null,c__4556__auto___39855);
var G__39859 = (0);
seq__39732_39840 = G__39856;
chunk__39733_39841 = G__39857;
count__39734_39842 = G__39858;
i__39735_39843 = G__39859;
continue;
} else {
var map__39742_39860 = cljs.core.first.call(null,seq__39732_39854__$1);
var map__39742_39861__$1 = (((((!((map__39742_39860 == null))))?(((((map__39742_39860.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39742_39860.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39742_39860):map__39742_39860);
var gline_39862 = cljs.core.get.call(null,map__39742_39861__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_39863 = cljs.core.get.call(null,map__39742_39861__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_39864 = cljs.core.get.call(null,map__39742_39861__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_39862], null),cljs.core.fnil.call(null,((function (seq__39732_39840,chunk__39733_39841,count__39734_39842,i__39735_39843,seq__39695_39833,chunk__39696_39834,count__39697_39835,i__39698_39836,seq__39554_39826,chunk__39555_39827,count__39556_39828,i__39557_39829,map__39742_39860,map__39742_39861__$1,gline_39862,gcol_39863,name_39864,seq__39732_39854__$1,temp__5735__auto___39853,vec__39729_39837,column_39838,column_info_39839,vec__39692_39830,line_39831,columns_39832,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_39863], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_39831,new cljs.core.Keyword(null,"col","col",-1959363084),column_39838,new cljs.core.Keyword(null,"name","name",1843675177),name_39864], null));
});})(seq__39732_39840,chunk__39733_39841,count__39734_39842,i__39735_39843,seq__39695_39833,chunk__39696_39834,count__39697_39835,i__39698_39836,seq__39554_39826,chunk__39555_39827,count__39556_39828,i__39557_39829,map__39742_39860,map__39742_39861__$1,gline_39862,gcol_39863,name_39864,seq__39732_39854__$1,temp__5735__auto___39853,vec__39729_39837,column_39838,column_info_39839,vec__39692_39830,line_39831,columns_39832,inverted))
,cljs.core.sorted_map.call(null)));


var G__39865 = cljs.core.next.call(null,seq__39732_39854__$1);
var G__39866 = null;
var G__39867 = (0);
var G__39868 = (0);
seq__39732_39840 = G__39865;
chunk__39733_39841 = G__39866;
count__39734_39842 = G__39867;
i__39735_39843 = G__39868;
continue;
}
} else {
}
}
break;
}


var G__39869 = seq__39695_39833;
var G__39870 = chunk__39696_39834;
var G__39871 = count__39697_39835;
var G__39872 = (i__39698_39836 + (1));
seq__39695_39833 = G__39869;
chunk__39696_39834 = G__39870;
count__39697_39835 = G__39871;
i__39698_39836 = G__39872;
continue;
} else {
var temp__5735__auto___39873 = cljs.core.seq.call(null,seq__39695_39833);
if(temp__5735__auto___39873){
var seq__39695_39874__$1 = temp__5735__auto___39873;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39695_39874__$1)){
var c__4556__auto___39875 = cljs.core.chunk_first.call(null,seq__39695_39874__$1);
var G__39876 = cljs.core.chunk_rest.call(null,seq__39695_39874__$1);
var G__39877 = c__4556__auto___39875;
var G__39878 = cljs.core.count.call(null,c__4556__auto___39875);
var G__39879 = (0);
seq__39695_39833 = G__39876;
chunk__39696_39834 = G__39877;
count__39697_39835 = G__39878;
i__39698_39836 = G__39879;
continue;
} else {
var vec__39744_39880 = cljs.core.first.call(null,seq__39695_39874__$1);
var column_39881 = cljs.core.nth.call(null,vec__39744_39880,(0),null);
var column_info_39882 = cljs.core.nth.call(null,vec__39744_39880,(1),null);
var seq__39747_39883 = cljs.core.seq.call(null,column_info_39882);
var chunk__39748_39884 = null;
var count__39749_39885 = (0);
var i__39750_39886 = (0);
while(true){
if((i__39750_39886 < count__39749_39885)){
var map__39755_39887 = cljs.core._nth.call(null,chunk__39748_39884,i__39750_39886);
var map__39755_39888__$1 = (((((!((map__39755_39887 == null))))?(((((map__39755_39887.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39755_39887.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39755_39887):map__39755_39887);
var gline_39889 = cljs.core.get.call(null,map__39755_39888__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_39890 = cljs.core.get.call(null,map__39755_39888__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_39891 = cljs.core.get.call(null,map__39755_39888__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_39889], null),cljs.core.fnil.call(null,((function (seq__39747_39883,chunk__39748_39884,count__39749_39885,i__39750_39886,seq__39695_39833,chunk__39696_39834,count__39697_39835,i__39698_39836,seq__39554_39826,chunk__39555_39827,count__39556_39828,i__39557_39829,map__39755_39887,map__39755_39888__$1,gline_39889,gcol_39890,name_39891,vec__39744_39880,column_39881,column_info_39882,seq__39695_39874__$1,temp__5735__auto___39873,vec__39692_39830,line_39831,columns_39832,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_39890], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_39831,new cljs.core.Keyword(null,"col","col",-1959363084),column_39881,new cljs.core.Keyword(null,"name","name",1843675177),name_39891], null));
});})(seq__39747_39883,chunk__39748_39884,count__39749_39885,i__39750_39886,seq__39695_39833,chunk__39696_39834,count__39697_39835,i__39698_39836,seq__39554_39826,chunk__39555_39827,count__39556_39828,i__39557_39829,map__39755_39887,map__39755_39888__$1,gline_39889,gcol_39890,name_39891,vec__39744_39880,column_39881,column_info_39882,seq__39695_39874__$1,temp__5735__auto___39873,vec__39692_39830,line_39831,columns_39832,inverted))
,cljs.core.sorted_map.call(null)));


var G__39892 = seq__39747_39883;
var G__39893 = chunk__39748_39884;
var G__39894 = count__39749_39885;
var G__39895 = (i__39750_39886 + (1));
seq__39747_39883 = G__39892;
chunk__39748_39884 = G__39893;
count__39749_39885 = G__39894;
i__39750_39886 = G__39895;
continue;
} else {
var temp__5735__auto___39896__$1 = cljs.core.seq.call(null,seq__39747_39883);
if(temp__5735__auto___39896__$1){
var seq__39747_39897__$1 = temp__5735__auto___39896__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39747_39897__$1)){
var c__4556__auto___39898 = cljs.core.chunk_first.call(null,seq__39747_39897__$1);
var G__39899 = cljs.core.chunk_rest.call(null,seq__39747_39897__$1);
var G__39900 = c__4556__auto___39898;
var G__39901 = cljs.core.count.call(null,c__4556__auto___39898);
var G__39902 = (0);
seq__39747_39883 = G__39899;
chunk__39748_39884 = G__39900;
count__39749_39885 = G__39901;
i__39750_39886 = G__39902;
continue;
} else {
var map__39757_39903 = cljs.core.first.call(null,seq__39747_39897__$1);
var map__39757_39904__$1 = (((((!((map__39757_39903 == null))))?(((((map__39757_39903.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39757_39903.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39757_39903):map__39757_39903);
var gline_39905 = cljs.core.get.call(null,map__39757_39904__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_39906 = cljs.core.get.call(null,map__39757_39904__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_39907 = cljs.core.get.call(null,map__39757_39904__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_39905], null),cljs.core.fnil.call(null,((function (seq__39747_39883,chunk__39748_39884,count__39749_39885,i__39750_39886,seq__39695_39833,chunk__39696_39834,count__39697_39835,i__39698_39836,seq__39554_39826,chunk__39555_39827,count__39556_39828,i__39557_39829,map__39757_39903,map__39757_39904__$1,gline_39905,gcol_39906,name_39907,seq__39747_39897__$1,temp__5735__auto___39896__$1,vec__39744_39880,column_39881,column_info_39882,seq__39695_39874__$1,temp__5735__auto___39873,vec__39692_39830,line_39831,columns_39832,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_39906], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_39831,new cljs.core.Keyword(null,"col","col",-1959363084),column_39881,new cljs.core.Keyword(null,"name","name",1843675177),name_39907], null));
});})(seq__39747_39883,chunk__39748_39884,count__39749_39885,i__39750_39886,seq__39695_39833,chunk__39696_39834,count__39697_39835,i__39698_39836,seq__39554_39826,chunk__39555_39827,count__39556_39828,i__39557_39829,map__39757_39903,map__39757_39904__$1,gline_39905,gcol_39906,name_39907,seq__39747_39897__$1,temp__5735__auto___39896__$1,vec__39744_39880,column_39881,column_info_39882,seq__39695_39874__$1,temp__5735__auto___39873,vec__39692_39830,line_39831,columns_39832,inverted))
,cljs.core.sorted_map.call(null)));


var G__39908 = cljs.core.next.call(null,seq__39747_39897__$1);
var G__39909 = null;
var G__39910 = (0);
var G__39911 = (0);
seq__39747_39883 = G__39908;
chunk__39748_39884 = G__39909;
count__39749_39885 = G__39910;
i__39750_39886 = G__39911;
continue;
}
} else {
}
}
break;
}


var G__39912 = cljs.core.next.call(null,seq__39695_39874__$1);
var G__39913 = null;
var G__39914 = (0);
var G__39915 = (0);
seq__39695_39833 = G__39912;
chunk__39696_39834 = G__39913;
count__39697_39835 = G__39914;
i__39698_39836 = G__39915;
continue;
}
} else {
}
}
break;
}


var G__39916 = seq__39554_39826;
var G__39917 = chunk__39555_39827;
var G__39918 = count__39556_39828;
var G__39919 = (i__39557_39829 + (1));
seq__39554_39826 = G__39916;
chunk__39555_39827 = G__39917;
count__39556_39828 = G__39918;
i__39557_39829 = G__39919;
continue;
} else {
var temp__5735__auto___39920 = cljs.core.seq.call(null,seq__39554_39826);
if(temp__5735__auto___39920){
var seq__39554_39921__$1 = temp__5735__auto___39920;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39554_39921__$1)){
var c__4556__auto___39922 = cljs.core.chunk_first.call(null,seq__39554_39921__$1);
var G__39923 = cljs.core.chunk_rest.call(null,seq__39554_39921__$1);
var G__39924 = c__4556__auto___39922;
var G__39925 = cljs.core.count.call(null,c__4556__auto___39922);
var G__39926 = (0);
seq__39554_39826 = G__39923;
chunk__39555_39827 = G__39924;
count__39556_39828 = G__39925;
i__39557_39829 = G__39926;
continue;
} else {
var vec__39759_39927 = cljs.core.first.call(null,seq__39554_39921__$1);
var line_39928 = cljs.core.nth.call(null,vec__39759_39927,(0),null);
var columns_39929 = cljs.core.nth.call(null,vec__39759_39927,(1),null);
var seq__39762_39930 = cljs.core.seq.call(null,columns_39929);
var chunk__39763_39931 = null;
var count__39764_39932 = (0);
var i__39765_39933 = (0);
while(true){
if((i__39765_39933 < count__39764_39932)){
var vec__39796_39934 = cljs.core._nth.call(null,chunk__39763_39931,i__39765_39933);
var column_39935 = cljs.core.nth.call(null,vec__39796_39934,(0),null);
var column_info_39936 = cljs.core.nth.call(null,vec__39796_39934,(1),null);
var seq__39799_39937 = cljs.core.seq.call(null,column_info_39936);
var chunk__39800_39938 = null;
var count__39801_39939 = (0);
var i__39802_39940 = (0);
while(true){
if((i__39802_39940 < count__39801_39939)){
var map__39807_39941 = cljs.core._nth.call(null,chunk__39800_39938,i__39802_39940);
var map__39807_39942__$1 = (((((!((map__39807_39941 == null))))?(((((map__39807_39941.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39807_39941.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39807_39941):map__39807_39941);
var gline_39943 = cljs.core.get.call(null,map__39807_39942__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_39944 = cljs.core.get.call(null,map__39807_39942__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_39945 = cljs.core.get.call(null,map__39807_39942__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_39943], null),cljs.core.fnil.call(null,((function (seq__39799_39937,chunk__39800_39938,count__39801_39939,i__39802_39940,seq__39762_39930,chunk__39763_39931,count__39764_39932,i__39765_39933,seq__39554_39826,chunk__39555_39827,count__39556_39828,i__39557_39829,map__39807_39941,map__39807_39942__$1,gline_39943,gcol_39944,name_39945,vec__39796_39934,column_39935,column_info_39936,vec__39759_39927,line_39928,columns_39929,seq__39554_39921__$1,temp__5735__auto___39920,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_39944], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_39928,new cljs.core.Keyword(null,"col","col",-1959363084),column_39935,new cljs.core.Keyword(null,"name","name",1843675177),name_39945], null));
});})(seq__39799_39937,chunk__39800_39938,count__39801_39939,i__39802_39940,seq__39762_39930,chunk__39763_39931,count__39764_39932,i__39765_39933,seq__39554_39826,chunk__39555_39827,count__39556_39828,i__39557_39829,map__39807_39941,map__39807_39942__$1,gline_39943,gcol_39944,name_39945,vec__39796_39934,column_39935,column_info_39936,vec__39759_39927,line_39928,columns_39929,seq__39554_39921__$1,temp__5735__auto___39920,inverted))
,cljs.core.sorted_map.call(null)));


var G__39946 = seq__39799_39937;
var G__39947 = chunk__39800_39938;
var G__39948 = count__39801_39939;
var G__39949 = (i__39802_39940 + (1));
seq__39799_39937 = G__39946;
chunk__39800_39938 = G__39947;
count__39801_39939 = G__39948;
i__39802_39940 = G__39949;
continue;
} else {
var temp__5735__auto___39950__$1 = cljs.core.seq.call(null,seq__39799_39937);
if(temp__5735__auto___39950__$1){
var seq__39799_39951__$1 = temp__5735__auto___39950__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39799_39951__$1)){
var c__4556__auto___39952 = cljs.core.chunk_first.call(null,seq__39799_39951__$1);
var G__39953 = cljs.core.chunk_rest.call(null,seq__39799_39951__$1);
var G__39954 = c__4556__auto___39952;
var G__39955 = cljs.core.count.call(null,c__4556__auto___39952);
var G__39956 = (0);
seq__39799_39937 = G__39953;
chunk__39800_39938 = G__39954;
count__39801_39939 = G__39955;
i__39802_39940 = G__39956;
continue;
} else {
var map__39809_39957 = cljs.core.first.call(null,seq__39799_39951__$1);
var map__39809_39958__$1 = (((((!((map__39809_39957 == null))))?(((((map__39809_39957.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39809_39957.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39809_39957):map__39809_39957);
var gline_39959 = cljs.core.get.call(null,map__39809_39958__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_39960 = cljs.core.get.call(null,map__39809_39958__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_39961 = cljs.core.get.call(null,map__39809_39958__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_39959], null),cljs.core.fnil.call(null,((function (seq__39799_39937,chunk__39800_39938,count__39801_39939,i__39802_39940,seq__39762_39930,chunk__39763_39931,count__39764_39932,i__39765_39933,seq__39554_39826,chunk__39555_39827,count__39556_39828,i__39557_39829,map__39809_39957,map__39809_39958__$1,gline_39959,gcol_39960,name_39961,seq__39799_39951__$1,temp__5735__auto___39950__$1,vec__39796_39934,column_39935,column_info_39936,vec__39759_39927,line_39928,columns_39929,seq__39554_39921__$1,temp__5735__auto___39920,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_39960], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_39928,new cljs.core.Keyword(null,"col","col",-1959363084),column_39935,new cljs.core.Keyword(null,"name","name",1843675177),name_39961], null));
});})(seq__39799_39937,chunk__39800_39938,count__39801_39939,i__39802_39940,seq__39762_39930,chunk__39763_39931,count__39764_39932,i__39765_39933,seq__39554_39826,chunk__39555_39827,count__39556_39828,i__39557_39829,map__39809_39957,map__39809_39958__$1,gline_39959,gcol_39960,name_39961,seq__39799_39951__$1,temp__5735__auto___39950__$1,vec__39796_39934,column_39935,column_info_39936,vec__39759_39927,line_39928,columns_39929,seq__39554_39921__$1,temp__5735__auto___39920,inverted))
,cljs.core.sorted_map.call(null)));


var G__39962 = cljs.core.next.call(null,seq__39799_39951__$1);
var G__39963 = null;
var G__39964 = (0);
var G__39965 = (0);
seq__39799_39937 = G__39962;
chunk__39800_39938 = G__39963;
count__39801_39939 = G__39964;
i__39802_39940 = G__39965;
continue;
}
} else {
}
}
break;
}


var G__39966 = seq__39762_39930;
var G__39967 = chunk__39763_39931;
var G__39968 = count__39764_39932;
var G__39969 = (i__39765_39933 + (1));
seq__39762_39930 = G__39966;
chunk__39763_39931 = G__39967;
count__39764_39932 = G__39968;
i__39765_39933 = G__39969;
continue;
} else {
var temp__5735__auto___39970__$1 = cljs.core.seq.call(null,seq__39762_39930);
if(temp__5735__auto___39970__$1){
var seq__39762_39971__$1 = temp__5735__auto___39970__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39762_39971__$1)){
var c__4556__auto___39972 = cljs.core.chunk_first.call(null,seq__39762_39971__$1);
var G__39973 = cljs.core.chunk_rest.call(null,seq__39762_39971__$1);
var G__39974 = c__4556__auto___39972;
var G__39975 = cljs.core.count.call(null,c__4556__auto___39972);
var G__39976 = (0);
seq__39762_39930 = G__39973;
chunk__39763_39931 = G__39974;
count__39764_39932 = G__39975;
i__39765_39933 = G__39976;
continue;
} else {
var vec__39811_39977 = cljs.core.first.call(null,seq__39762_39971__$1);
var column_39978 = cljs.core.nth.call(null,vec__39811_39977,(0),null);
var column_info_39979 = cljs.core.nth.call(null,vec__39811_39977,(1),null);
var seq__39814_39980 = cljs.core.seq.call(null,column_info_39979);
var chunk__39815_39981 = null;
var count__39816_39982 = (0);
var i__39817_39983 = (0);
while(true){
if((i__39817_39983 < count__39816_39982)){
var map__39822_39984 = cljs.core._nth.call(null,chunk__39815_39981,i__39817_39983);
var map__39822_39985__$1 = (((((!((map__39822_39984 == null))))?(((((map__39822_39984.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39822_39984.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39822_39984):map__39822_39984);
var gline_39986 = cljs.core.get.call(null,map__39822_39985__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_39987 = cljs.core.get.call(null,map__39822_39985__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_39988 = cljs.core.get.call(null,map__39822_39985__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_39986], null),cljs.core.fnil.call(null,((function (seq__39814_39980,chunk__39815_39981,count__39816_39982,i__39817_39983,seq__39762_39930,chunk__39763_39931,count__39764_39932,i__39765_39933,seq__39554_39826,chunk__39555_39827,count__39556_39828,i__39557_39829,map__39822_39984,map__39822_39985__$1,gline_39986,gcol_39987,name_39988,vec__39811_39977,column_39978,column_info_39979,seq__39762_39971__$1,temp__5735__auto___39970__$1,vec__39759_39927,line_39928,columns_39929,seq__39554_39921__$1,temp__5735__auto___39920,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_39987], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_39928,new cljs.core.Keyword(null,"col","col",-1959363084),column_39978,new cljs.core.Keyword(null,"name","name",1843675177),name_39988], null));
});})(seq__39814_39980,chunk__39815_39981,count__39816_39982,i__39817_39983,seq__39762_39930,chunk__39763_39931,count__39764_39932,i__39765_39933,seq__39554_39826,chunk__39555_39827,count__39556_39828,i__39557_39829,map__39822_39984,map__39822_39985__$1,gline_39986,gcol_39987,name_39988,vec__39811_39977,column_39978,column_info_39979,seq__39762_39971__$1,temp__5735__auto___39970__$1,vec__39759_39927,line_39928,columns_39929,seq__39554_39921__$1,temp__5735__auto___39920,inverted))
,cljs.core.sorted_map.call(null)));


var G__39989 = seq__39814_39980;
var G__39990 = chunk__39815_39981;
var G__39991 = count__39816_39982;
var G__39992 = (i__39817_39983 + (1));
seq__39814_39980 = G__39989;
chunk__39815_39981 = G__39990;
count__39816_39982 = G__39991;
i__39817_39983 = G__39992;
continue;
} else {
var temp__5735__auto___39993__$2 = cljs.core.seq.call(null,seq__39814_39980);
if(temp__5735__auto___39993__$2){
var seq__39814_39994__$1 = temp__5735__auto___39993__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39814_39994__$1)){
var c__4556__auto___39995 = cljs.core.chunk_first.call(null,seq__39814_39994__$1);
var G__39996 = cljs.core.chunk_rest.call(null,seq__39814_39994__$1);
var G__39997 = c__4556__auto___39995;
var G__39998 = cljs.core.count.call(null,c__4556__auto___39995);
var G__39999 = (0);
seq__39814_39980 = G__39996;
chunk__39815_39981 = G__39997;
count__39816_39982 = G__39998;
i__39817_39983 = G__39999;
continue;
} else {
var map__39824_40000 = cljs.core.first.call(null,seq__39814_39994__$1);
var map__39824_40001__$1 = (((((!((map__39824_40000 == null))))?(((((map__39824_40000.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39824_40000.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39824_40000):map__39824_40000);
var gline_40002 = cljs.core.get.call(null,map__39824_40001__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_40003 = cljs.core.get.call(null,map__39824_40001__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_40004 = cljs.core.get.call(null,map__39824_40001__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_40002], null),cljs.core.fnil.call(null,((function (seq__39814_39980,chunk__39815_39981,count__39816_39982,i__39817_39983,seq__39762_39930,chunk__39763_39931,count__39764_39932,i__39765_39933,seq__39554_39826,chunk__39555_39827,count__39556_39828,i__39557_39829,map__39824_40000,map__39824_40001__$1,gline_40002,gcol_40003,name_40004,seq__39814_39994__$1,temp__5735__auto___39993__$2,vec__39811_39977,column_39978,column_info_39979,seq__39762_39971__$1,temp__5735__auto___39970__$1,vec__39759_39927,line_39928,columns_39929,seq__39554_39921__$1,temp__5735__auto___39920,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_40003], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_39928,new cljs.core.Keyword(null,"col","col",-1959363084),column_39978,new cljs.core.Keyword(null,"name","name",1843675177),name_40004], null));
});})(seq__39814_39980,chunk__39815_39981,count__39816_39982,i__39817_39983,seq__39762_39930,chunk__39763_39931,count__39764_39932,i__39765_39933,seq__39554_39826,chunk__39555_39827,count__39556_39828,i__39557_39829,map__39824_40000,map__39824_40001__$1,gline_40002,gcol_40003,name_40004,seq__39814_39994__$1,temp__5735__auto___39993__$2,vec__39811_39977,column_39978,column_info_39979,seq__39762_39971__$1,temp__5735__auto___39970__$1,vec__39759_39927,line_39928,columns_39929,seq__39554_39921__$1,temp__5735__auto___39920,inverted))
,cljs.core.sorted_map.call(null)));


var G__40005 = cljs.core.next.call(null,seq__39814_39994__$1);
var G__40006 = null;
var G__40007 = (0);
var G__40008 = (0);
seq__39814_39980 = G__40005;
chunk__39815_39981 = G__40006;
count__39816_39982 = G__40007;
i__39817_39983 = G__40008;
continue;
}
} else {
}
}
break;
}


var G__40009 = cljs.core.next.call(null,seq__39762_39971__$1);
var G__40010 = null;
var G__40011 = (0);
var G__40012 = (0);
seq__39762_39930 = G__40009;
chunk__39763_39931 = G__40010;
count__39764_39932 = G__40011;
i__39765_39933 = G__40012;
continue;
}
} else {
}
}
break;
}


var G__40013 = cljs.core.next.call(null,seq__39554_39921__$1);
var G__40014 = null;
var G__40015 = (0);
var G__40016 = (0);
seq__39554_39826 = G__40013;
chunk__39555_39827 = G__40014;
count__39556_39828 = G__40015;
i__39557_39829 = G__40016;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref.call(null,inverted);
});

//# sourceMappingURL=source_map.js.map?rel=1593792533795
