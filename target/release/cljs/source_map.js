// Compiled by ClojureScript 1.10.764 {:static-fns true, :optimize-constants true}
goog.provide('cljs.source_map');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.object');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.source_map.base64_vlq');
/**
 * Take a seq of source file names and return a map from
 * file number to integer index. For reverse source maps.
 */
cljs.source_map.indexed_sources = (function cljs$source_map$indexed_sources(sources){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__27743){
var vec__27744 = p__27743;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27744,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27744,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,v,i);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (a,b){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
}),sources));
});
/**
 * Take a seq of source file names and return a comparator
 * that can be used to construct a sorted map. For reverse
 * source maps.
 */
cljs.source_map.source_compare = (function cljs$source_map$source_compare(sources){
var sources__$1 = cljs.source_map.indexed_sources(sources);
return (function (a,b){
return cljs.core.compare((sources__$1.cljs$core$IFn$_invoke$arity$1 ? sources__$1.cljs$core$IFn$_invoke$arity$1(a) : sources__$1.call(null,a)),(sources__$1.cljs$core$IFn$_invoke$arity$1 ? sources__$1.cljs$core$IFn$_invoke$arity$1(b) : sources__$1.call(null,b)));
});
});
/**
 * Take a source map segment represented as a vector
 * and return a map.
 */
cljs.source_map.seg__GT_map = (function cljs$source_map$seg__GT_map(seg,source_map){
var vec__27747 = seg;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27747,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27747,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27747,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27747,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27747,(4),null);
return new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$gcol,gcol,cljs.core.cst$kw$source,(goog.object.get(source_map,"sources")[source]),cljs.core.cst$kw$line,line,cljs.core.cst$kw$col,col,cljs.core.cst$kw$name,(function (){var temp__5735__auto__ = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(seg));
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
var vec__27750 = seg;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27750,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27750,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27750,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27750,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27750,(4),null);
var vec__27753 = relseg;
var rgcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27753,(0),null);
var rsource = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27753,(1),null);
var rline = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27753,(2),null);
var rcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27753,(3),null);
var rname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27753,(4),null);
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
return cljs.core.with_meta(nseg,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$name,(name + rname)], null));
} else {
return nseg;
}
});
/**
 * Helper for decode-reverse. Take a reverse source map and
 *   update it with a segment map.
 */
cljs.source_map.update_reverse_result = (function cljs$source_map$update_reverse_result(result,segmap,gline){
var map__27756 = segmap;
var map__27756__$1 = (((((!((map__27756 == null))))?(((((map__27756.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27756.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27756):map__27756);
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27756__$1,cljs.core.cst$kw$gcol);
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27756__$1,cljs.core.cst$kw$source);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27756__$1,cljs.core.cst$kw$line);
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27756__$1,cljs.core.cst$kw$col);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27756__$1,cljs.core.cst$kw$name);
var d = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$gline,gline,cljs.core.cst$kw$gcol,gcol], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(d,cljs.core.cst$kw$name,name):d);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (m){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [line], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (m__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [col], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (v){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(v,d__$1);
}),cljs.core.PersistentVector.EMPTY));
}),cljs.core.sorted_map()));
}),cljs.core.sorted_map()));
});
/**
 * Convert a v3 source map JSON object into a reverse source map
 *   mapping original ClojureScript source locations to the generated
 *   JavaScript.
 */
cljs.source_map.decode_reverse = (function cljs$source_map$decode_reverse(var_args){
var G__27759 = arguments.length;
switch (G__27759) {
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
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2(goog.object.get(source_map,"mappings"),source_map);
}));

(cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2 = (function (mappings,source_map){
var sources = goog.object.get(source_map,"sources");
var relseg_init = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null);
var lines = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(mappings,/;/));
var gline = (0);
var lines__$1 = lines;
var relseg = relseg_init;
var result = cljs.core.sorted_map_by(cljs.source_map.source_compare(sources));
while(true){
if(lines__$1){
var line = cljs.core.first(lines__$1);
var vec__27763 = ((clojure.string.blank_QMARK_(line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first(segs__$1);
var nrelseg = cljs.source_map.seg_combine(cljs.source_map.base64_vlq.decode(seg),relseg__$1);
var G__27767 = cljs.core.next(segs__$1);
var G__27768 = nrelseg;
var G__27769 = cljs.source_map.update_reverse_result(result__$1,cljs.source_map.seg__GT_map(nrelseg,source_map),gline);
segs__$1 = G__27767;
relseg__$1 = G__27768;
result__$1 = G__27769;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27763,(0),null);
var relseg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27763,(1),null);
var G__27770 = (gline + (1));
var G__27771 = cljs.core.next(lines__$1);
var G__27772 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(relseg__$1,(0),(0));
var G__27773 = result__$1;
gline = G__27770;
lines__$1 = G__27771;
relseg = G__27772;
result = G__27773;
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
var map__27775 = segmap;
var map__27775__$1 = (((((!((map__27775 == null))))?(((((map__27775.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27775.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27775):map__27775);
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27775__$1,cljs.core.cst$kw$gcol);
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27775__$1,cljs.core.cst$kw$source);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27775__$1,cljs.core.cst$kw$line);
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27775__$1,cljs.core.cst$kw$col);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27775__$1,cljs.core.cst$kw$name);
var d = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$line,line,cljs.core.cst$kw$col,col,cljs.core.cst$kw$source,source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(d,cljs.core.cst$kw$name,name):d);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (m){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (p1__27774_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__27774_SHARP_,d__$1);
}),cljs.core.PersistentVector.EMPTY));
}),cljs.core.sorted_map()));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var G__27778 = arguments.length;
switch (G__27778) {
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
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2(goog.object.get(source_map,"mappings"),source_map);
}));

(cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2 = (function (mappings,source_map){
var sources = goog.object.get(source_map,"sources");
var relseg_init = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null);
var lines = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(mappings,/;/));
var gline = (0);
var lines__$1 = lines;
var relseg = relseg_init;
var result = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(lines__$1){
var line = cljs.core.first(lines__$1);
var vec__27782 = ((clojure.string.blank_QMARK_(line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first(segs__$1);
var nrelseg = cljs.source_map.seg_combine(cljs.source_map.base64_vlq.decode(seg),relseg__$1);
var G__27786 = cljs.core.next(segs__$1);
var G__27787 = nrelseg;
var G__27788 = cljs.source_map.update_result(result__$1,cljs.source_map.seg__GT_map(nrelseg,source_map),gline);
segs__$1 = G__27786;
relseg__$1 = G__27787;
result__$1 = G__27788;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27782,(0),null);
var relseg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27782,(1),null);
var G__27789 = (gline + (1));
var G__27790 = cljs.core.next(lines__$1);
var G__27791 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(relseg__$1,(0),(0));
var G__27792 = result__$1;
gline = G__27789;
lines__$1 = G__27790;
relseg = G__27791;
result = G__27792;
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
var relseg = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (segs,cols){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(relseg,(function (p__27793){
var vec__27794 = p__27793;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27794,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27794,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27794,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27794,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27794,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
}));

return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(segs,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (cols__$1,p__27797){
var vec__27798 = p__27797;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27798,(0),null);
var sidx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27798,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27798,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27798,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27798,(4),null);
var seg = vec__27798;
var offset = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._,seg,cljs.core.deref(relseg));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(relseg,(function (p__27801){
var vec__27802 = p__27801;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27802,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27802,(1),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27802,(2),null);
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27802,(3),null);
var lname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27802,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol,sidx,line,col,(function (){var or__4126__auto__ = name;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return lname;
}
})()], null);
}));

return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cols__$1,cljs.source_map.base64_vlq.encode(offset));
}),cljs.core.PersistentVector.EMPTY,cols));
}),cljs.core.PersistentVector.EMPTY,lines);
});
/**
 * Take an internal source map representation represented as nested
 * sorted maps of file, line, column and return a source map v3 JSON
 * string.
 */
cljs.source_map.encode = (function cljs$source_map$encode(m,opts){
var lines = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null));
var names__GT_idx = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var name_idx = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var preamble_lines = cljs.core.take.cljs$core$IFn$_invoke$arity$2((function (){var or__4126__auto__ = cljs.core.cst$kw$preamble_DASH_line_DASH_count.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (0);
}
})(),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY));
var info__GT_segv = (function (info,source_idx,line,col){
var segv = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$gcol.cljs$core$IFn$_invoke$arity$1(info),source_idx,line,col], null);
var temp__5733__auto__ = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(info);
if(cljs.core.truth_(temp__5733__auto__)){
var name = temp__5733__auto__;
var idx = (function (){var temp__5733__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(names__GT_idx),name);
if(cljs.core.truth_(temp__5733__auto____$1)){
var idx = temp__5733__auto____$1;
return idx;
} else {
var cidx = cljs.core.deref(name_idx);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(names__GT_idx,cljs.core.assoc,name,cidx);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(name_idx,cljs.core.inc);

return cidx;
}
})();
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(segv,idx);
} else {
return segv;
}
});
var encode_cols = (function (infos,source_idx,line,col){
var seq__27808 = cljs.core.seq(infos);
var chunk__27809 = null;
var count__27810 = (0);
var i__27811 = (0);
while(true){
if((i__27811 < count__27810)){
var info = chunk__27809.cljs$core$IIndexed$_nth$arity$2(null,i__27811);
var segv_28162 = info__GT_segv(info,source_idx,line,col);
var gline_28163 = cljs.core.cst$kw$gline.cljs$core$IFn$_invoke$arity$1(info);
var lc_28164 = cljs.core.count(cljs.core.deref(lines));
if((gline_28163 > (lc_28164 - (1)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__27808,chunk__27809,count__27810,i__27811,segv_28162,gline_28163,lc_28164,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(lines__$1,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((gline_28163 - (lc_28164 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_28162], null));
});})(seq__27808,chunk__27809,count__27810,i__27811,segv_28162,gline_28163,lc_28164,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__27808,chunk__27809,count__27810,i__27811,segv_28162,gline_28163,lc_28164,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_28163], null),cljs.core.conj,segv_28162);
});})(seq__27808,chunk__27809,count__27810,i__27811,segv_28162,gline_28163,lc_28164,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__28165 = seq__27808;
var G__28166 = chunk__27809;
var G__28167 = count__27810;
var G__28168 = (i__27811 + (1));
seq__27808 = G__28165;
chunk__27809 = G__28166;
count__27810 = G__28167;
i__27811 = G__28168;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__27808);
if(temp__5735__auto__){
var seq__27808__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__27808__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__27808__$1);
var G__28169 = cljs.core.chunk_rest(seq__27808__$1);
var G__28170 = c__4556__auto__;
var G__28171 = cljs.core.count(c__4556__auto__);
var G__28172 = (0);
seq__27808 = G__28169;
chunk__27809 = G__28170;
count__27810 = G__28171;
i__27811 = G__28172;
continue;
} else {
var info = cljs.core.first(seq__27808__$1);
var segv_28173 = info__GT_segv(info,source_idx,line,col);
var gline_28174 = cljs.core.cst$kw$gline.cljs$core$IFn$_invoke$arity$1(info);
var lc_28175 = cljs.core.count(cljs.core.deref(lines));
if((gline_28174 > (lc_28175 - (1)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__27808,chunk__27809,count__27810,i__27811,segv_28173,gline_28174,lc_28175,info,seq__27808__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(lines__$1,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((gline_28174 - (lc_28175 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_28173], null));
});})(seq__27808,chunk__27809,count__27810,i__27811,segv_28173,gline_28174,lc_28175,info,seq__27808__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__27808,chunk__27809,count__27810,i__27811,segv_28173,gline_28174,lc_28175,info,seq__27808__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_28174], null),cljs.core.conj,segv_28173);
});})(seq__27808,chunk__27809,count__27810,i__27811,segv_28173,gline_28174,lc_28175,info,seq__27808__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__28176 = cljs.core.next(seq__27808__$1);
var G__28177 = null;
var G__28178 = (0);
var G__28179 = (0);
seq__27808 = G__28176;
chunk__27809 = G__28177;
count__27810 = G__28178;
i__27811 = G__28179;
continue;
}
} else {
return null;
}
}
break;
}
});
var seq__27812_28180 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__27813_28181 = null;
var count__27814_28182 = (0);
var i__27815_28183 = (0);
while(true){
if((i__27815_28183 < count__27814_28182)){
var vec__27988_28184 = chunk__27813_28181.cljs$core$IIndexed$_nth$arity$2(null,i__27815_28183);
var source_idx_28185 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27988_28184,(0),null);
var vec__27991_28186 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27988_28184,(1),null);
var __28187 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27991_28186,(0),null);
var lines_28188__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27991_28186,(1),null);
var seq__27994_28189 = cljs.core.seq(lines_28188__$1);
var chunk__27995_28190 = null;
var count__27996_28191 = (0);
var i__27997_28192 = (0);
while(true){
if((i__27997_28192 < count__27996_28191)){
var vec__28036_28193 = chunk__27995_28190.cljs$core$IIndexed$_nth$arity$2(null,i__27997_28192);
var line_28194 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28036_28193,(0),null);
var cols_28195 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28036_28193,(1),null);
var seq__28039_28196 = cljs.core.seq(cols_28195);
var chunk__28040_28197 = null;
var count__28041_28198 = (0);
var i__28042_28199 = (0);
while(true){
if((i__28042_28199 < count__28041_28198)){
var vec__28049_28200 = chunk__28040_28197.cljs$core$IIndexed$_nth$arity$2(null,i__28042_28199);
var col_28201 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28049_28200,(0),null);
var infos_28202 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28049_28200,(1),null);
encode_cols(infos_28202,source_idx_28185,line_28194,col_28201);


var G__28203 = seq__28039_28196;
var G__28204 = chunk__28040_28197;
var G__28205 = count__28041_28198;
var G__28206 = (i__28042_28199 + (1));
seq__28039_28196 = G__28203;
chunk__28040_28197 = G__28204;
count__28041_28198 = G__28205;
i__28042_28199 = G__28206;
continue;
} else {
var temp__5735__auto___28207 = cljs.core.seq(seq__28039_28196);
if(temp__5735__auto___28207){
var seq__28039_28208__$1 = temp__5735__auto___28207;
if(cljs.core.chunked_seq_QMARK_(seq__28039_28208__$1)){
var c__4556__auto___28209 = cljs.core.chunk_first(seq__28039_28208__$1);
var G__28210 = cljs.core.chunk_rest(seq__28039_28208__$1);
var G__28211 = c__4556__auto___28209;
var G__28212 = cljs.core.count(c__4556__auto___28209);
var G__28213 = (0);
seq__28039_28196 = G__28210;
chunk__28040_28197 = G__28211;
count__28041_28198 = G__28212;
i__28042_28199 = G__28213;
continue;
} else {
var vec__28052_28214 = cljs.core.first(seq__28039_28208__$1);
var col_28215 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28052_28214,(0),null);
var infos_28216 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28052_28214,(1),null);
encode_cols(infos_28216,source_idx_28185,line_28194,col_28215);


var G__28217 = cljs.core.next(seq__28039_28208__$1);
var G__28218 = null;
var G__28219 = (0);
var G__28220 = (0);
seq__28039_28196 = G__28217;
chunk__28040_28197 = G__28218;
count__28041_28198 = G__28219;
i__28042_28199 = G__28220;
continue;
}
} else {
}
}
break;
}


var G__28221 = seq__27994_28189;
var G__28222 = chunk__27995_28190;
var G__28223 = count__27996_28191;
var G__28224 = (i__27997_28192 + (1));
seq__27994_28189 = G__28221;
chunk__27995_28190 = G__28222;
count__27996_28191 = G__28223;
i__27997_28192 = G__28224;
continue;
} else {
var temp__5735__auto___28225 = cljs.core.seq(seq__27994_28189);
if(temp__5735__auto___28225){
var seq__27994_28226__$1 = temp__5735__auto___28225;
if(cljs.core.chunked_seq_QMARK_(seq__27994_28226__$1)){
var c__4556__auto___28227 = cljs.core.chunk_first(seq__27994_28226__$1);
var G__28228 = cljs.core.chunk_rest(seq__27994_28226__$1);
var G__28229 = c__4556__auto___28227;
var G__28230 = cljs.core.count(c__4556__auto___28227);
var G__28231 = (0);
seq__27994_28189 = G__28228;
chunk__27995_28190 = G__28229;
count__27996_28191 = G__28230;
i__27997_28192 = G__28231;
continue;
} else {
var vec__28055_28232 = cljs.core.first(seq__27994_28226__$1);
var line_28233 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28055_28232,(0),null);
var cols_28234 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28055_28232,(1),null);
var seq__28058_28235 = cljs.core.seq(cols_28234);
var chunk__28059_28236 = null;
var count__28060_28237 = (0);
var i__28061_28238 = (0);
while(true){
if((i__28061_28238 < count__28060_28237)){
var vec__28068_28239 = chunk__28059_28236.cljs$core$IIndexed$_nth$arity$2(null,i__28061_28238);
var col_28240 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28068_28239,(0),null);
var infos_28241 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28068_28239,(1),null);
encode_cols(infos_28241,source_idx_28185,line_28233,col_28240);


var G__28242 = seq__28058_28235;
var G__28243 = chunk__28059_28236;
var G__28244 = count__28060_28237;
var G__28245 = (i__28061_28238 + (1));
seq__28058_28235 = G__28242;
chunk__28059_28236 = G__28243;
count__28060_28237 = G__28244;
i__28061_28238 = G__28245;
continue;
} else {
var temp__5735__auto___28246__$1 = cljs.core.seq(seq__28058_28235);
if(temp__5735__auto___28246__$1){
var seq__28058_28247__$1 = temp__5735__auto___28246__$1;
if(cljs.core.chunked_seq_QMARK_(seq__28058_28247__$1)){
var c__4556__auto___28248 = cljs.core.chunk_first(seq__28058_28247__$1);
var G__28249 = cljs.core.chunk_rest(seq__28058_28247__$1);
var G__28250 = c__4556__auto___28248;
var G__28251 = cljs.core.count(c__4556__auto___28248);
var G__28252 = (0);
seq__28058_28235 = G__28249;
chunk__28059_28236 = G__28250;
count__28060_28237 = G__28251;
i__28061_28238 = G__28252;
continue;
} else {
var vec__28071_28253 = cljs.core.first(seq__28058_28247__$1);
var col_28254 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28071_28253,(0),null);
var infos_28255 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28071_28253,(1),null);
encode_cols(infos_28255,source_idx_28185,line_28233,col_28254);


var G__28256 = cljs.core.next(seq__28058_28247__$1);
var G__28257 = null;
var G__28258 = (0);
var G__28259 = (0);
seq__28058_28235 = G__28256;
chunk__28059_28236 = G__28257;
count__28060_28237 = G__28258;
i__28061_28238 = G__28259;
continue;
}
} else {
}
}
break;
}


var G__28260 = cljs.core.next(seq__27994_28226__$1);
var G__28261 = null;
var G__28262 = (0);
var G__28263 = (0);
seq__27994_28189 = G__28260;
chunk__27995_28190 = G__28261;
count__27996_28191 = G__28262;
i__27997_28192 = G__28263;
continue;
}
} else {
}
}
break;
}


var G__28264 = seq__27812_28180;
var G__28265 = chunk__27813_28181;
var G__28266 = count__27814_28182;
var G__28267 = (i__27815_28183 + (1));
seq__27812_28180 = G__28264;
chunk__27813_28181 = G__28265;
count__27814_28182 = G__28266;
i__27815_28183 = G__28267;
continue;
} else {
var temp__5735__auto___28268 = cljs.core.seq(seq__27812_28180);
if(temp__5735__auto___28268){
var seq__27812_28269__$1 = temp__5735__auto___28268;
if(cljs.core.chunked_seq_QMARK_(seq__27812_28269__$1)){
var c__4556__auto___28270 = cljs.core.chunk_first(seq__27812_28269__$1);
var G__28271 = cljs.core.chunk_rest(seq__27812_28269__$1);
var G__28272 = c__4556__auto___28270;
var G__28273 = cljs.core.count(c__4556__auto___28270);
var G__28274 = (0);
seq__27812_28180 = G__28271;
chunk__27813_28181 = G__28272;
count__27814_28182 = G__28273;
i__27815_28183 = G__28274;
continue;
} else {
var vec__28074_28275 = cljs.core.first(seq__27812_28269__$1);
var source_idx_28276 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28074_28275,(0),null);
var vec__28077_28277 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28074_28275,(1),null);
var __28278 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28077_28277,(0),null);
var lines_28279__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28077_28277,(1),null);
var seq__28080_28280 = cljs.core.seq(lines_28279__$1);
var chunk__28081_28281 = null;
var count__28082_28282 = (0);
var i__28083_28283 = (0);
while(true){
if((i__28083_28283 < count__28082_28282)){
var vec__28122_28284 = chunk__28081_28281.cljs$core$IIndexed$_nth$arity$2(null,i__28083_28283);
var line_28285 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28122_28284,(0),null);
var cols_28286 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28122_28284,(1),null);
var seq__28125_28287 = cljs.core.seq(cols_28286);
var chunk__28126_28288 = null;
var count__28127_28289 = (0);
var i__28128_28290 = (0);
while(true){
if((i__28128_28290 < count__28127_28289)){
var vec__28135_28291 = chunk__28126_28288.cljs$core$IIndexed$_nth$arity$2(null,i__28128_28290);
var col_28292 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28135_28291,(0),null);
var infos_28293 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28135_28291,(1),null);
encode_cols(infos_28293,source_idx_28276,line_28285,col_28292);


var G__28294 = seq__28125_28287;
var G__28295 = chunk__28126_28288;
var G__28296 = count__28127_28289;
var G__28297 = (i__28128_28290 + (1));
seq__28125_28287 = G__28294;
chunk__28126_28288 = G__28295;
count__28127_28289 = G__28296;
i__28128_28290 = G__28297;
continue;
} else {
var temp__5735__auto___28298__$1 = cljs.core.seq(seq__28125_28287);
if(temp__5735__auto___28298__$1){
var seq__28125_28299__$1 = temp__5735__auto___28298__$1;
if(cljs.core.chunked_seq_QMARK_(seq__28125_28299__$1)){
var c__4556__auto___28300 = cljs.core.chunk_first(seq__28125_28299__$1);
var G__28301 = cljs.core.chunk_rest(seq__28125_28299__$1);
var G__28302 = c__4556__auto___28300;
var G__28303 = cljs.core.count(c__4556__auto___28300);
var G__28304 = (0);
seq__28125_28287 = G__28301;
chunk__28126_28288 = G__28302;
count__28127_28289 = G__28303;
i__28128_28290 = G__28304;
continue;
} else {
var vec__28138_28305 = cljs.core.first(seq__28125_28299__$1);
var col_28306 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28138_28305,(0),null);
var infos_28307 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28138_28305,(1),null);
encode_cols(infos_28307,source_idx_28276,line_28285,col_28306);


var G__28308 = cljs.core.next(seq__28125_28299__$1);
var G__28309 = null;
var G__28310 = (0);
var G__28311 = (0);
seq__28125_28287 = G__28308;
chunk__28126_28288 = G__28309;
count__28127_28289 = G__28310;
i__28128_28290 = G__28311;
continue;
}
} else {
}
}
break;
}


var G__28312 = seq__28080_28280;
var G__28313 = chunk__28081_28281;
var G__28314 = count__28082_28282;
var G__28315 = (i__28083_28283 + (1));
seq__28080_28280 = G__28312;
chunk__28081_28281 = G__28313;
count__28082_28282 = G__28314;
i__28083_28283 = G__28315;
continue;
} else {
var temp__5735__auto___28316__$1 = cljs.core.seq(seq__28080_28280);
if(temp__5735__auto___28316__$1){
var seq__28080_28317__$1 = temp__5735__auto___28316__$1;
if(cljs.core.chunked_seq_QMARK_(seq__28080_28317__$1)){
var c__4556__auto___28318 = cljs.core.chunk_first(seq__28080_28317__$1);
var G__28319 = cljs.core.chunk_rest(seq__28080_28317__$1);
var G__28320 = c__4556__auto___28318;
var G__28321 = cljs.core.count(c__4556__auto___28318);
var G__28322 = (0);
seq__28080_28280 = G__28319;
chunk__28081_28281 = G__28320;
count__28082_28282 = G__28321;
i__28083_28283 = G__28322;
continue;
} else {
var vec__28141_28323 = cljs.core.first(seq__28080_28317__$1);
var line_28324 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28141_28323,(0),null);
var cols_28325 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28141_28323,(1),null);
var seq__28144_28326 = cljs.core.seq(cols_28325);
var chunk__28145_28327 = null;
var count__28146_28328 = (0);
var i__28147_28329 = (0);
while(true){
if((i__28147_28329 < count__28146_28328)){
var vec__28154_28330 = chunk__28145_28327.cljs$core$IIndexed$_nth$arity$2(null,i__28147_28329);
var col_28331 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28154_28330,(0),null);
var infos_28332 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28154_28330,(1),null);
encode_cols(infos_28332,source_idx_28276,line_28324,col_28331);


var G__28333 = seq__28144_28326;
var G__28334 = chunk__28145_28327;
var G__28335 = count__28146_28328;
var G__28336 = (i__28147_28329 + (1));
seq__28144_28326 = G__28333;
chunk__28145_28327 = G__28334;
count__28146_28328 = G__28335;
i__28147_28329 = G__28336;
continue;
} else {
var temp__5735__auto___28337__$2 = cljs.core.seq(seq__28144_28326);
if(temp__5735__auto___28337__$2){
var seq__28144_28338__$1 = temp__5735__auto___28337__$2;
if(cljs.core.chunked_seq_QMARK_(seq__28144_28338__$1)){
var c__4556__auto___28339 = cljs.core.chunk_first(seq__28144_28338__$1);
var G__28340 = cljs.core.chunk_rest(seq__28144_28338__$1);
var G__28341 = c__4556__auto___28339;
var G__28342 = cljs.core.count(c__4556__auto___28339);
var G__28343 = (0);
seq__28144_28326 = G__28340;
chunk__28145_28327 = G__28341;
count__28146_28328 = G__28342;
i__28147_28329 = G__28343;
continue;
} else {
var vec__28157_28344 = cljs.core.first(seq__28144_28338__$1);
var col_28345 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28157_28344,(0),null);
var infos_28346 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28157_28344,(1),null);
encode_cols(infos_28346,source_idx_28276,line_28324,col_28345);


var G__28347 = cljs.core.next(seq__28144_28338__$1);
var G__28348 = null;
var G__28349 = (0);
var G__28350 = (0);
seq__28144_28326 = G__28347;
chunk__28145_28327 = G__28348;
count__28146_28328 = G__28349;
i__28147_28329 = G__28350;
continue;
}
} else {
}
}
break;
}


var G__28351 = cljs.core.next(seq__28080_28317__$1);
var G__28352 = null;
var G__28353 = (0);
var G__28354 = (0);
seq__28080_28280 = G__28351;
chunk__28081_28281 = G__28352;
count__28082_28282 = G__28353;
i__28083_28283 = G__28354;
continue;
}
} else {
}
}
break;
}


var G__28355 = cljs.core.next(seq__27812_28269__$1);
var G__28356 = null;
var G__28357 = (0);
var G__28358 = (0);
seq__27812_28180 = G__28355;
chunk__27813_28181 = G__28356;
count__27814_28182 = G__28357;
i__27815_28183 = G__28358;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__28160 = ({"version": (3), "file": cljs.core.cst$kw$file.cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys(m);
var f = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(((cljs.core.cst$kw$source_DASH_map_DASH_timestamp.cljs$core$IFn$_invoke$arity$1(opts) === true)?(function (p1__27805_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__27805_SHARP_),"?rel=",cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).valueOf())].join('');
}):cljs.core.identity),(function (p1__27806_SHARP_){
return cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__27806_SHARP_,/\//));
}));
return cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(f,paths));
})(), "lineCount": cljs.core.cst$kw$lines.cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.cljs$core$IFn$_invoke$arity$2(";",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__27807_SHARP_){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",p1__27807_SHARP_);
}),cljs.source_map.lines__GT_segs(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(preamble_lines,cljs.core.deref(lines))))), "names": cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.set.map_invert(cljs.core.deref(names__GT_idx)),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(cljs.core.deref(names__GT_idx)))))});
if(cljs.core.truth_(cljs.core.cst$kw$sources_DASH_content.cljs$core$IFn$_invoke$arity$1(opts))){
var G__28161 = G__28160;
goog.object.set(G__28161,"sourcesContent",cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$sources_DASH_content.cljs$core$IFn$_invoke$arity$1(opts)));

return G__28161;
} else {
return G__28160;
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
var line_map_seq = cljs.core.seq(cljs_map);
var new_lines = cljs.core.sorted_map();
while(true){
if(line_map_seq){
var vec__28359 = cljs.core.first(line_map_seq);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28359,(0),null);
var col_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28359,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq(col_map);
var new_cols = cljs.core.sorted_map();
while(true){
if(col_map_seq){
var vec__28362 = cljs.core.first(col_map_seq);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28362,(0),null);
var infos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28362,(1),null);
var G__28368 = cljs.core.next(col_map_seq);
var G__28369 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_cols,col,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__28362,col,infos,vec__28359,line,col_map){
return (function (v,p__28365){
var map__28366 = p__28365;
var map__28366__$1 = (((((!((map__28366 == null))))?(((((map__28366.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28366.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28366):map__28366);
var gline = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28366__$1,cljs.core.cst$kw$gline);
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28366__$1,cljs.core.cst$kw$gcol);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(v,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__28362,col,infos,vec__28359,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__28368;
new_cols = G__28369;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__28370 = cljs.core.next(line_map_seq);
var G__28371 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_lines,line,new_cols);
line_map_seq = G__28370;
new_lines = G__28371;
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
var inverted = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.sorted_map());
var seq__28372_28644 = cljs.core.seq(reverse_map);
var chunk__28373_28645 = null;
var count__28374_28646 = (0);
var i__28375_28647 = (0);
while(true){
if((i__28375_28647 < count__28374_28646)){
var vec__28510_28648 = chunk__28373_28645.cljs$core$IIndexed$_nth$arity$2(null,i__28375_28647);
var line_28649 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28510_28648,(0),null);
var columns_28650 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28510_28648,(1),null);
var seq__28513_28651 = cljs.core.seq(columns_28650);
var chunk__28514_28652 = null;
var count__28515_28653 = (0);
var i__28516_28654 = (0);
while(true){
if((i__28516_28654 < count__28515_28653)){
var vec__28547_28655 = chunk__28514_28652.cljs$core$IIndexed$_nth$arity$2(null,i__28516_28654);
var column_28656 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28547_28655,(0),null);
var column_info_28657 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28547_28655,(1),null);
var seq__28550_28658 = cljs.core.seq(column_info_28657);
var chunk__28551_28659 = null;
var count__28552_28660 = (0);
var i__28553_28661 = (0);
while(true){
if((i__28553_28661 < count__28552_28660)){
var map__28558_28662 = chunk__28551_28659.cljs$core$IIndexed$_nth$arity$2(null,i__28553_28661);
var map__28558_28663__$1 = (((((!((map__28558_28662 == null))))?(((((map__28558_28662.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28558_28662.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28558_28662):map__28558_28662);
var gline_28664 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28558_28663__$1,cljs.core.cst$kw$gline);
var gcol_28665 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28558_28663__$1,cljs.core.cst$kw$gcol);
var name_28666 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28558_28663__$1,cljs.core.cst$kw$name);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_28664], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__28550_28658,chunk__28551_28659,count__28552_28660,i__28553_28661,seq__28513_28651,chunk__28514_28652,count__28515_28653,i__28516_28654,seq__28372_28644,chunk__28373_28645,count__28374_28646,i__28375_28647,map__28558_28662,map__28558_28663__$1,gline_28664,gcol_28665,name_28666,vec__28547_28655,column_28656,column_info_28657,vec__28510_28648,line_28649,columns_28650,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_28665], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$line,line_28649,cljs.core.cst$kw$col,column_28656,cljs.core.cst$kw$name,name_28666], null));
});})(seq__28550_28658,chunk__28551_28659,count__28552_28660,i__28553_28661,seq__28513_28651,chunk__28514_28652,count__28515_28653,i__28516_28654,seq__28372_28644,chunk__28373_28645,count__28374_28646,i__28375_28647,map__28558_28662,map__28558_28663__$1,gline_28664,gcol_28665,name_28666,vec__28547_28655,column_28656,column_info_28657,vec__28510_28648,line_28649,columns_28650,inverted))
,cljs.core.sorted_map()));


var G__28667 = seq__28550_28658;
var G__28668 = chunk__28551_28659;
var G__28669 = count__28552_28660;
var G__28670 = (i__28553_28661 + (1));
seq__28550_28658 = G__28667;
chunk__28551_28659 = G__28668;
count__28552_28660 = G__28669;
i__28553_28661 = G__28670;
continue;
} else {
var temp__5735__auto___28671 = cljs.core.seq(seq__28550_28658);
if(temp__5735__auto___28671){
var seq__28550_28672__$1 = temp__5735__auto___28671;
if(cljs.core.chunked_seq_QMARK_(seq__28550_28672__$1)){
var c__4556__auto___28673 = cljs.core.chunk_first(seq__28550_28672__$1);
var G__28674 = cljs.core.chunk_rest(seq__28550_28672__$1);
var G__28675 = c__4556__auto___28673;
var G__28676 = cljs.core.count(c__4556__auto___28673);
var G__28677 = (0);
seq__28550_28658 = G__28674;
chunk__28551_28659 = G__28675;
count__28552_28660 = G__28676;
i__28553_28661 = G__28677;
continue;
} else {
var map__28560_28678 = cljs.core.first(seq__28550_28672__$1);
var map__28560_28679__$1 = (((((!((map__28560_28678 == null))))?(((((map__28560_28678.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28560_28678.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28560_28678):map__28560_28678);
var gline_28680 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28560_28679__$1,cljs.core.cst$kw$gline);
var gcol_28681 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28560_28679__$1,cljs.core.cst$kw$gcol);
var name_28682 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28560_28679__$1,cljs.core.cst$kw$name);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_28680], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__28550_28658,chunk__28551_28659,count__28552_28660,i__28553_28661,seq__28513_28651,chunk__28514_28652,count__28515_28653,i__28516_28654,seq__28372_28644,chunk__28373_28645,count__28374_28646,i__28375_28647,map__28560_28678,map__28560_28679__$1,gline_28680,gcol_28681,name_28682,seq__28550_28672__$1,temp__5735__auto___28671,vec__28547_28655,column_28656,column_info_28657,vec__28510_28648,line_28649,columns_28650,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_28681], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$line,line_28649,cljs.core.cst$kw$col,column_28656,cljs.core.cst$kw$name,name_28682], null));
});})(seq__28550_28658,chunk__28551_28659,count__28552_28660,i__28553_28661,seq__28513_28651,chunk__28514_28652,count__28515_28653,i__28516_28654,seq__28372_28644,chunk__28373_28645,count__28374_28646,i__28375_28647,map__28560_28678,map__28560_28679__$1,gline_28680,gcol_28681,name_28682,seq__28550_28672__$1,temp__5735__auto___28671,vec__28547_28655,column_28656,column_info_28657,vec__28510_28648,line_28649,columns_28650,inverted))
,cljs.core.sorted_map()));


var G__28683 = cljs.core.next(seq__28550_28672__$1);
var G__28684 = null;
var G__28685 = (0);
var G__28686 = (0);
seq__28550_28658 = G__28683;
chunk__28551_28659 = G__28684;
count__28552_28660 = G__28685;
i__28553_28661 = G__28686;
continue;
}
} else {
}
}
break;
}


var G__28687 = seq__28513_28651;
var G__28688 = chunk__28514_28652;
var G__28689 = count__28515_28653;
var G__28690 = (i__28516_28654 + (1));
seq__28513_28651 = G__28687;
chunk__28514_28652 = G__28688;
count__28515_28653 = G__28689;
i__28516_28654 = G__28690;
continue;
} else {
var temp__5735__auto___28691 = cljs.core.seq(seq__28513_28651);
if(temp__5735__auto___28691){
var seq__28513_28692__$1 = temp__5735__auto___28691;
if(cljs.core.chunked_seq_QMARK_(seq__28513_28692__$1)){
var c__4556__auto___28693 = cljs.core.chunk_first(seq__28513_28692__$1);
var G__28694 = cljs.core.chunk_rest(seq__28513_28692__$1);
var G__28695 = c__4556__auto___28693;
var G__28696 = cljs.core.count(c__4556__auto___28693);
var G__28697 = (0);
seq__28513_28651 = G__28694;
chunk__28514_28652 = G__28695;
count__28515_28653 = G__28696;
i__28516_28654 = G__28697;
continue;
} else {
var vec__28562_28698 = cljs.core.first(seq__28513_28692__$1);
var column_28699 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28562_28698,(0),null);
var column_info_28700 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28562_28698,(1),null);
var seq__28565_28701 = cljs.core.seq(column_info_28700);
var chunk__28566_28702 = null;
var count__28567_28703 = (0);
var i__28568_28704 = (0);
while(true){
if((i__28568_28704 < count__28567_28703)){
var map__28573_28705 = chunk__28566_28702.cljs$core$IIndexed$_nth$arity$2(null,i__28568_28704);
var map__28573_28706__$1 = (((((!((map__28573_28705 == null))))?(((((map__28573_28705.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28573_28705.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28573_28705):map__28573_28705);
var gline_28707 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28573_28706__$1,cljs.core.cst$kw$gline);
var gcol_28708 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28573_28706__$1,cljs.core.cst$kw$gcol);
var name_28709 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28573_28706__$1,cljs.core.cst$kw$name);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_28707], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__28565_28701,chunk__28566_28702,count__28567_28703,i__28568_28704,seq__28513_28651,chunk__28514_28652,count__28515_28653,i__28516_28654,seq__28372_28644,chunk__28373_28645,count__28374_28646,i__28375_28647,map__28573_28705,map__28573_28706__$1,gline_28707,gcol_28708,name_28709,vec__28562_28698,column_28699,column_info_28700,seq__28513_28692__$1,temp__5735__auto___28691,vec__28510_28648,line_28649,columns_28650,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_28708], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$line,line_28649,cljs.core.cst$kw$col,column_28699,cljs.core.cst$kw$name,name_28709], null));
});})(seq__28565_28701,chunk__28566_28702,count__28567_28703,i__28568_28704,seq__28513_28651,chunk__28514_28652,count__28515_28653,i__28516_28654,seq__28372_28644,chunk__28373_28645,count__28374_28646,i__28375_28647,map__28573_28705,map__28573_28706__$1,gline_28707,gcol_28708,name_28709,vec__28562_28698,column_28699,column_info_28700,seq__28513_28692__$1,temp__5735__auto___28691,vec__28510_28648,line_28649,columns_28650,inverted))
,cljs.core.sorted_map()));


var G__28710 = seq__28565_28701;
var G__28711 = chunk__28566_28702;
var G__28712 = count__28567_28703;
var G__28713 = (i__28568_28704 + (1));
seq__28565_28701 = G__28710;
chunk__28566_28702 = G__28711;
count__28567_28703 = G__28712;
i__28568_28704 = G__28713;
continue;
} else {
var temp__5735__auto___28714__$1 = cljs.core.seq(seq__28565_28701);
if(temp__5735__auto___28714__$1){
var seq__28565_28715__$1 = temp__5735__auto___28714__$1;
if(cljs.core.chunked_seq_QMARK_(seq__28565_28715__$1)){
var c__4556__auto___28716 = cljs.core.chunk_first(seq__28565_28715__$1);
var G__28717 = cljs.core.chunk_rest(seq__28565_28715__$1);
var G__28718 = c__4556__auto___28716;
var G__28719 = cljs.core.count(c__4556__auto___28716);
var G__28720 = (0);
seq__28565_28701 = G__28717;
chunk__28566_28702 = G__28718;
count__28567_28703 = G__28719;
i__28568_28704 = G__28720;
continue;
} else {
var map__28575_28721 = cljs.core.first(seq__28565_28715__$1);
var map__28575_28722__$1 = (((((!((map__28575_28721 == null))))?(((((map__28575_28721.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28575_28721.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28575_28721):map__28575_28721);
var gline_28723 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28575_28722__$1,cljs.core.cst$kw$gline);
var gcol_28724 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28575_28722__$1,cljs.core.cst$kw$gcol);
var name_28725 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28575_28722__$1,cljs.core.cst$kw$name);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_28723], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__28565_28701,chunk__28566_28702,count__28567_28703,i__28568_28704,seq__28513_28651,chunk__28514_28652,count__28515_28653,i__28516_28654,seq__28372_28644,chunk__28373_28645,count__28374_28646,i__28375_28647,map__28575_28721,map__28575_28722__$1,gline_28723,gcol_28724,name_28725,seq__28565_28715__$1,temp__5735__auto___28714__$1,vec__28562_28698,column_28699,column_info_28700,seq__28513_28692__$1,temp__5735__auto___28691,vec__28510_28648,line_28649,columns_28650,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_28724], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$line,line_28649,cljs.core.cst$kw$col,column_28699,cljs.core.cst$kw$name,name_28725], null));
});})(seq__28565_28701,chunk__28566_28702,count__28567_28703,i__28568_28704,seq__28513_28651,chunk__28514_28652,count__28515_28653,i__28516_28654,seq__28372_28644,chunk__28373_28645,count__28374_28646,i__28375_28647,map__28575_28721,map__28575_28722__$1,gline_28723,gcol_28724,name_28725,seq__28565_28715__$1,temp__5735__auto___28714__$1,vec__28562_28698,column_28699,column_info_28700,seq__28513_28692__$1,temp__5735__auto___28691,vec__28510_28648,line_28649,columns_28650,inverted))
,cljs.core.sorted_map()));


var G__28726 = cljs.core.next(seq__28565_28715__$1);
var G__28727 = null;
var G__28728 = (0);
var G__28729 = (0);
seq__28565_28701 = G__28726;
chunk__28566_28702 = G__28727;
count__28567_28703 = G__28728;
i__28568_28704 = G__28729;
continue;
}
} else {
}
}
break;
}


var G__28730 = cljs.core.next(seq__28513_28692__$1);
var G__28731 = null;
var G__28732 = (0);
var G__28733 = (0);
seq__28513_28651 = G__28730;
chunk__28514_28652 = G__28731;
count__28515_28653 = G__28732;
i__28516_28654 = G__28733;
continue;
}
} else {
}
}
break;
}


var G__28734 = seq__28372_28644;
var G__28735 = chunk__28373_28645;
var G__28736 = count__28374_28646;
var G__28737 = (i__28375_28647 + (1));
seq__28372_28644 = G__28734;
chunk__28373_28645 = G__28735;
count__28374_28646 = G__28736;
i__28375_28647 = G__28737;
continue;
} else {
var temp__5735__auto___28738 = cljs.core.seq(seq__28372_28644);
if(temp__5735__auto___28738){
var seq__28372_28739__$1 = temp__5735__auto___28738;
if(cljs.core.chunked_seq_QMARK_(seq__28372_28739__$1)){
var c__4556__auto___28740 = cljs.core.chunk_first(seq__28372_28739__$1);
var G__28741 = cljs.core.chunk_rest(seq__28372_28739__$1);
var G__28742 = c__4556__auto___28740;
var G__28743 = cljs.core.count(c__4556__auto___28740);
var G__28744 = (0);
seq__28372_28644 = G__28741;
chunk__28373_28645 = G__28742;
count__28374_28646 = G__28743;
i__28375_28647 = G__28744;
continue;
} else {
var vec__28577_28745 = cljs.core.first(seq__28372_28739__$1);
var line_28746 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28577_28745,(0),null);
var columns_28747 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28577_28745,(1),null);
var seq__28580_28748 = cljs.core.seq(columns_28747);
var chunk__28581_28749 = null;
var count__28582_28750 = (0);
var i__28583_28751 = (0);
while(true){
if((i__28583_28751 < count__28582_28750)){
var vec__28614_28752 = chunk__28581_28749.cljs$core$IIndexed$_nth$arity$2(null,i__28583_28751);
var column_28753 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28614_28752,(0),null);
var column_info_28754 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28614_28752,(1),null);
var seq__28617_28755 = cljs.core.seq(column_info_28754);
var chunk__28618_28756 = null;
var count__28619_28757 = (0);
var i__28620_28758 = (0);
while(true){
if((i__28620_28758 < count__28619_28757)){
var map__28625_28759 = chunk__28618_28756.cljs$core$IIndexed$_nth$arity$2(null,i__28620_28758);
var map__28625_28760__$1 = (((((!((map__28625_28759 == null))))?(((((map__28625_28759.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28625_28759.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28625_28759):map__28625_28759);
var gline_28761 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28625_28760__$1,cljs.core.cst$kw$gline);
var gcol_28762 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28625_28760__$1,cljs.core.cst$kw$gcol);
var name_28763 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28625_28760__$1,cljs.core.cst$kw$name);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_28761], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__28617_28755,chunk__28618_28756,count__28619_28757,i__28620_28758,seq__28580_28748,chunk__28581_28749,count__28582_28750,i__28583_28751,seq__28372_28644,chunk__28373_28645,count__28374_28646,i__28375_28647,map__28625_28759,map__28625_28760__$1,gline_28761,gcol_28762,name_28763,vec__28614_28752,column_28753,column_info_28754,vec__28577_28745,line_28746,columns_28747,seq__28372_28739__$1,temp__5735__auto___28738,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_28762], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$line,line_28746,cljs.core.cst$kw$col,column_28753,cljs.core.cst$kw$name,name_28763], null));
});})(seq__28617_28755,chunk__28618_28756,count__28619_28757,i__28620_28758,seq__28580_28748,chunk__28581_28749,count__28582_28750,i__28583_28751,seq__28372_28644,chunk__28373_28645,count__28374_28646,i__28375_28647,map__28625_28759,map__28625_28760__$1,gline_28761,gcol_28762,name_28763,vec__28614_28752,column_28753,column_info_28754,vec__28577_28745,line_28746,columns_28747,seq__28372_28739__$1,temp__5735__auto___28738,inverted))
,cljs.core.sorted_map()));


var G__28764 = seq__28617_28755;
var G__28765 = chunk__28618_28756;
var G__28766 = count__28619_28757;
var G__28767 = (i__28620_28758 + (1));
seq__28617_28755 = G__28764;
chunk__28618_28756 = G__28765;
count__28619_28757 = G__28766;
i__28620_28758 = G__28767;
continue;
} else {
var temp__5735__auto___28768__$1 = cljs.core.seq(seq__28617_28755);
if(temp__5735__auto___28768__$1){
var seq__28617_28769__$1 = temp__5735__auto___28768__$1;
if(cljs.core.chunked_seq_QMARK_(seq__28617_28769__$1)){
var c__4556__auto___28770 = cljs.core.chunk_first(seq__28617_28769__$1);
var G__28771 = cljs.core.chunk_rest(seq__28617_28769__$1);
var G__28772 = c__4556__auto___28770;
var G__28773 = cljs.core.count(c__4556__auto___28770);
var G__28774 = (0);
seq__28617_28755 = G__28771;
chunk__28618_28756 = G__28772;
count__28619_28757 = G__28773;
i__28620_28758 = G__28774;
continue;
} else {
var map__28627_28775 = cljs.core.first(seq__28617_28769__$1);
var map__28627_28776__$1 = (((((!((map__28627_28775 == null))))?(((((map__28627_28775.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28627_28775.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28627_28775):map__28627_28775);
var gline_28777 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28627_28776__$1,cljs.core.cst$kw$gline);
var gcol_28778 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28627_28776__$1,cljs.core.cst$kw$gcol);
var name_28779 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28627_28776__$1,cljs.core.cst$kw$name);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_28777], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__28617_28755,chunk__28618_28756,count__28619_28757,i__28620_28758,seq__28580_28748,chunk__28581_28749,count__28582_28750,i__28583_28751,seq__28372_28644,chunk__28373_28645,count__28374_28646,i__28375_28647,map__28627_28775,map__28627_28776__$1,gline_28777,gcol_28778,name_28779,seq__28617_28769__$1,temp__5735__auto___28768__$1,vec__28614_28752,column_28753,column_info_28754,vec__28577_28745,line_28746,columns_28747,seq__28372_28739__$1,temp__5735__auto___28738,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_28778], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$line,line_28746,cljs.core.cst$kw$col,column_28753,cljs.core.cst$kw$name,name_28779], null));
});})(seq__28617_28755,chunk__28618_28756,count__28619_28757,i__28620_28758,seq__28580_28748,chunk__28581_28749,count__28582_28750,i__28583_28751,seq__28372_28644,chunk__28373_28645,count__28374_28646,i__28375_28647,map__28627_28775,map__28627_28776__$1,gline_28777,gcol_28778,name_28779,seq__28617_28769__$1,temp__5735__auto___28768__$1,vec__28614_28752,column_28753,column_info_28754,vec__28577_28745,line_28746,columns_28747,seq__28372_28739__$1,temp__5735__auto___28738,inverted))
,cljs.core.sorted_map()));


var G__28780 = cljs.core.next(seq__28617_28769__$1);
var G__28781 = null;
var G__28782 = (0);
var G__28783 = (0);
seq__28617_28755 = G__28780;
chunk__28618_28756 = G__28781;
count__28619_28757 = G__28782;
i__28620_28758 = G__28783;
continue;
}
} else {
}
}
break;
}


var G__28784 = seq__28580_28748;
var G__28785 = chunk__28581_28749;
var G__28786 = count__28582_28750;
var G__28787 = (i__28583_28751 + (1));
seq__28580_28748 = G__28784;
chunk__28581_28749 = G__28785;
count__28582_28750 = G__28786;
i__28583_28751 = G__28787;
continue;
} else {
var temp__5735__auto___28788__$1 = cljs.core.seq(seq__28580_28748);
if(temp__5735__auto___28788__$1){
var seq__28580_28789__$1 = temp__5735__auto___28788__$1;
if(cljs.core.chunked_seq_QMARK_(seq__28580_28789__$1)){
var c__4556__auto___28790 = cljs.core.chunk_first(seq__28580_28789__$1);
var G__28791 = cljs.core.chunk_rest(seq__28580_28789__$1);
var G__28792 = c__4556__auto___28790;
var G__28793 = cljs.core.count(c__4556__auto___28790);
var G__28794 = (0);
seq__28580_28748 = G__28791;
chunk__28581_28749 = G__28792;
count__28582_28750 = G__28793;
i__28583_28751 = G__28794;
continue;
} else {
var vec__28629_28795 = cljs.core.first(seq__28580_28789__$1);
var column_28796 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28629_28795,(0),null);
var column_info_28797 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28629_28795,(1),null);
var seq__28632_28798 = cljs.core.seq(column_info_28797);
var chunk__28633_28799 = null;
var count__28634_28800 = (0);
var i__28635_28801 = (0);
while(true){
if((i__28635_28801 < count__28634_28800)){
var map__28640_28802 = chunk__28633_28799.cljs$core$IIndexed$_nth$arity$2(null,i__28635_28801);
var map__28640_28803__$1 = (((((!((map__28640_28802 == null))))?(((((map__28640_28802.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28640_28802.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28640_28802):map__28640_28802);
var gline_28804 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28640_28803__$1,cljs.core.cst$kw$gline);
var gcol_28805 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28640_28803__$1,cljs.core.cst$kw$gcol);
var name_28806 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28640_28803__$1,cljs.core.cst$kw$name);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_28804], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__28632_28798,chunk__28633_28799,count__28634_28800,i__28635_28801,seq__28580_28748,chunk__28581_28749,count__28582_28750,i__28583_28751,seq__28372_28644,chunk__28373_28645,count__28374_28646,i__28375_28647,map__28640_28802,map__28640_28803__$1,gline_28804,gcol_28805,name_28806,vec__28629_28795,column_28796,column_info_28797,seq__28580_28789__$1,temp__5735__auto___28788__$1,vec__28577_28745,line_28746,columns_28747,seq__28372_28739__$1,temp__5735__auto___28738,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_28805], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$line,line_28746,cljs.core.cst$kw$col,column_28796,cljs.core.cst$kw$name,name_28806], null));
});})(seq__28632_28798,chunk__28633_28799,count__28634_28800,i__28635_28801,seq__28580_28748,chunk__28581_28749,count__28582_28750,i__28583_28751,seq__28372_28644,chunk__28373_28645,count__28374_28646,i__28375_28647,map__28640_28802,map__28640_28803__$1,gline_28804,gcol_28805,name_28806,vec__28629_28795,column_28796,column_info_28797,seq__28580_28789__$1,temp__5735__auto___28788__$1,vec__28577_28745,line_28746,columns_28747,seq__28372_28739__$1,temp__5735__auto___28738,inverted))
,cljs.core.sorted_map()));


var G__28807 = seq__28632_28798;
var G__28808 = chunk__28633_28799;
var G__28809 = count__28634_28800;
var G__28810 = (i__28635_28801 + (1));
seq__28632_28798 = G__28807;
chunk__28633_28799 = G__28808;
count__28634_28800 = G__28809;
i__28635_28801 = G__28810;
continue;
} else {
var temp__5735__auto___28811__$2 = cljs.core.seq(seq__28632_28798);
if(temp__5735__auto___28811__$2){
var seq__28632_28812__$1 = temp__5735__auto___28811__$2;
if(cljs.core.chunked_seq_QMARK_(seq__28632_28812__$1)){
var c__4556__auto___28813 = cljs.core.chunk_first(seq__28632_28812__$1);
var G__28814 = cljs.core.chunk_rest(seq__28632_28812__$1);
var G__28815 = c__4556__auto___28813;
var G__28816 = cljs.core.count(c__4556__auto___28813);
var G__28817 = (0);
seq__28632_28798 = G__28814;
chunk__28633_28799 = G__28815;
count__28634_28800 = G__28816;
i__28635_28801 = G__28817;
continue;
} else {
var map__28642_28818 = cljs.core.first(seq__28632_28812__$1);
var map__28642_28819__$1 = (((((!((map__28642_28818 == null))))?(((((map__28642_28818.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28642_28818.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28642_28818):map__28642_28818);
var gline_28820 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28642_28819__$1,cljs.core.cst$kw$gline);
var gcol_28821 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28642_28819__$1,cljs.core.cst$kw$gcol);
var name_28822 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28642_28819__$1,cljs.core.cst$kw$name);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_28820], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__28632_28798,chunk__28633_28799,count__28634_28800,i__28635_28801,seq__28580_28748,chunk__28581_28749,count__28582_28750,i__28583_28751,seq__28372_28644,chunk__28373_28645,count__28374_28646,i__28375_28647,map__28642_28818,map__28642_28819__$1,gline_28820,gcol_28821,name_28822,seq__28632_28812__$1,temp__5735__auto___28811__$2,vec__28629_28795,column_28796,column_info_28797,seq__28580_28789__$1,temp__5735__auto___28788__$1,vec__28577_28745,line_28746,columns_28747,seq__28372_28739__$1,temp__5735__auto___28738,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_28821], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$line,line_28746,cljs.core.cst$kw$col,column_28796,cljs.core.cst$kw$name,name_28822], null));
});})(seq__28632_28798,chunk__28633_28799,count__28634_28800,i__28635_28801,seq__28580_28748,chunk__28581_28749,count__28582_28750,i__28583_28751,seq__28372_28644,chunk__28373_28645,count__28374_28646,i__28375_28647,map__28642_28818,map__28642_28819__$1,gline_28820,gcol_28821,name_28822,seq__28632_28812__$1,temp__5735__auto___28811__$2,vec__28629_28795,column_28796,column_info_28797,seq__28580_28789__$1,temp__5735__auto___28788__$1,vec__28577_28745,line_28746,columns_28747,seq__28372_28739__$1,temp__5735__auto___28738,inverted))
,cljs.core.sorted_map()));


var G__28823 = cljs.core.next(seq__28632_28812__$1);
var G__28824 = null;
var G__28825 = (0);
var G__28826 = (0);
seq__28632_28798 = G__28823;
chunk__28633_28799 = G__28824;
count__28634_28800 = G__28825;
i__28635_28801 = G__28826;
continue;
}
} else {
}
}
break;
}


var G__28827 = cljs.core.next(seq__28580_28789__$1);
var G__28828 = null;
var G__28829 = (0);
var G__28830 = (0);
seq__28580_28748 = G__28827;
chunk__28581_28749 = G__28828;
count__28582_28750 = G__28829;
i__28583_28751 = G__28830;
continue;
}
} else {
}
}
break;
}


var G__28831 = cljs.core.next(seq__28372_28739__$1);
var G__28832 = null;
var G__28833 = (0);
var G__28834 = (0);
seq__28372_28644 = G__28831;
chunk__28373_28645 = G__28832;
count__28374_28646 = G__28833;
i__28375_28647 = G__28834;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref(inverted);
});
