// Compiled by ClojureScript 1.10.764 {:static-fns true, :optimize-constants true}
goog.provide('cljs.js');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('clojure.walk');
goog.require('cljs.env');
goog.require('cljs.spec.alpha');
goog.require('cljs.analyzer');
goog.require('cljs.compiler');
goog.require('cljs.tools.reader');
goog.require('cljs.tools.reader.reader_types');
goog.require('cljs.tagged_literals');
goog.require('goog.crypt.base64');
goog.require('cljs.source_map');
goog.require('goog.string.StringBuffer');
goog.require("cljs.core$macros");
cljs.js.debug_prn = (function cljs$js$debug_prn(var_args){
var args__4742__auto__ = [];
var len__4736__auto___33570 = arguments.length;
var i__4737__auto___33571 = (0);
while(true){
if((i__4737__auto___33571 < len__4736__auto___33570)){
args__4742__auto__.push((arguments[i__4737__auto___33571]));

var G__33572 = (i__4737__auto___33571 + (1));
i__4737__auto___33571 = G__33572;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var _STAR_print_fn_STAR__orig_val__33568 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_fn_STAR__temp_val__33569 = cljs.core._STAR_print_err_fn_STAR_;
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__33569);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.println,args);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__33568);
}}));

(cljs.js.debug_prn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cljs.js.debug_prn.cljs$lang$applyTo = (function (seq33567){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq33567));
}));

/**
 * Given a namespace as a symbol return the relative path sans extension
 */
cljs.js.ns__GT_relpath = (function cljs$js$ns__GT_relpath(ns_sym){
return clojure.string.replace(cljs.analyzer.munge_path(ns_sym),".","/");
});
cljs.js.file__GT_ns = (function cljs$js$file__GT_ns(file){
var lib_name = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(clojure.string.replace(file,"/","."),(0),(cljs.core.count(file) - (5)));
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.demunge(lib_name));
});
cljs.js.drop_macros_suffix = (function cljs$js$drop_macros_suffix(ns_name){
if(cljs.core.truth_(ns_name)){
if(clojure.string.ends_with_QMARK_(ns_name,"$macros")){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(ns_name,(0),(cljs.core.count(ns_name) - (7)));
} else {
return ns_name;
}
} else {
return null;
}
});
cljs.js.elide_macros_suffix = (function cljs$js$elide_macros_suffix(sym){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.js.drop_macros_suffix(cljs.core.namespace(sym)),cljs.core.name(sym));
});
cljs.js.resolve_symbol = (function cljs$js$resolve_symbol(sym){
if(clojure.string.starts_with_QMARK_(cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym),".")){
return sym;
} else {
return cljs.js.elide_macros_suffix(cljs.analyzer.resolve_symbol(sym));
}
});
cljs.js.read = (function cljs$js$read(eof,rdr){
var _STAR_ns_STAR__orig_val__33573 = cljs.core._STAR_ns_STAR_;
var _STAR_ns_STAR__temp_val__33574 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.js.drop_macros_suffix(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core._STAR_ns_STAR_)));
(cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__temp_val__33574);

try{return cljs.tools.reader.read.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$eof,eof,cljs.core.cst$kw$read_DASH_cond,cljs.core.cst$kw$allow,cljs.core.cst$kw$features,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cljs,null], null), null)], null),rdr);
}finally {(cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__orig_val__33573);
}});
cljs.js.atom_QMARK_ = (function cljs$js$atom_QMARK_(x){
return (x instanceof cljs.core.Atom);
});
cljs.js.valid_name_QMARK_ = (function cljs$js$valid_name_QMARK_(x){
return (((x == null)) || ((x instanceof cljs.core.Symbol)) || (typeof x === 'string'));
});
cljs.js.valid_opts_QMARK_ = (function cljs$js$valid_opts_QMARK_(x){
return (((x == null)) || (cljs.core.map_QMARK_(x)));
});
if((typeof cljs !== 'undefined') && (typeof cljs.js !== 'undefined') && (typeof cljs.js._STAR_load_fn_STAR_ !== 'undefined')){
} else {
/**
 * Each runtime environment provides a different way to load a library.
 *   Whatever function *load-fn* is bound to will be passed two arguments - a
 *   map and a callback function: The map will have the following keys:
 * 
 *   :name   - the name of the library (a symbol)
 *   :macros - modifier signaling a macros namespace load
 *   :path   - munged relative library path (a string)
 * 
 *   It is up to the implementor to correctly resolve the corresponding .cljs,
 *   .cljc, or .js resource (the order must be respected). If :macros is true
 *   resolution should only consider .clj or .cljc resources (the order must be
 *   respected). Upon resolution the callback should be invoked with a map
 *   containing the following keys:
 * 
 *   :lang       - the language, :clj or :js
 *   :source     - the source of the library (a string)
 *   :file       - optional, the file path, it will be added to AST's :file keyword
 *              (but not in :meta)
 *   :cache      - optional, if a :clj namespace has been precompiled to :js, can
 *              give an analysis cache for faster loads.
 *   :source-map - optional, if a :clj namespace has been precompiled to :js, can
 *              give a V3 source map JSON
 * 
 *   If the resource could not be resolved, the callback should be invoked with
 *   nil.
 */
cljs.js._STAR_load_fn_STAR_ = (function cljs$js$_STAR_load_fn_STAR_(m,cb){
throw (new Error("No *load-fn* set"));
});
}
if((typeof cljs !== 'undefined') && (typeof cljs.js !== 'undefined') && (typeof cljs.js._STAR_eval_fn_STAR_ !== 'undefined')){
} else {
/**
 * Each runtime environment provides various ways to eval JavaScript
 *   source. Whatever function *eval-fn* is bound to will be passed a map
 *   containing the following keys:
 * 
 *   :source - the source of the library (string)
 *   :name   - used to unique identify the script (symbol)
 *   :cache  - if the source was originally ClojureScript, will be given the
 *          analysis cache.
 * 
 *   The result of evaluation should be the return value.
 */
cljs.js._STAR_eval_fn_STAR_ = (function cljs$js$_STAR_eval_fn_STAR_(m){
throw (new Error("No *eval-fn* set"));
});
}
/**
 * A default JavaScript evaluation function.
 */
cljs.js.js_eval = (function cljs$js$js_eval(p__33575){
var map__33576 = p__33575;
var map__33576__$1 = (((((!((map__33576 == null))))?(((((map__33576.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33576.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33576):map__33576);
var resource = map__33576__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33576__$1,cljs.core.cst$kw$source);
return eval(source);
});
cljs.js.wrap_error = (function cljs$js$wrap_error(ex){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$error,ex], null);
});
/**
 * Construct an empty compiler state. Required to invoke analyze, compile,
 * eval and eval-str.
 */
cljs.js.empty_state = (function cljs$js$empty_state(var_args){
var G__33579 = arguments.length;
switch (G__33579) {
case 0:
return cljs.js.empty_state.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.js.empty_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.js.empty_state.cljs$core$IFn$_invoke$arity$0 = (function (){
var G__33580 = cljs.env.default_compiler_env.cljs$core$IFn$_invoke$arity$0();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(G__33580,(function (state){
}));

return G__33580;
}));

(cljs.js.empty_state.cljs$core$IFn$_invoke$arity$1 = (function (init){
var G__33581 = cljs.js.empty_state.cljs$core$IFn$_invoke$arity$0();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(G__33581,init);

return G__33581;
}));

(cljs.js.empty_state.cljs$lang$maxFixedArity = 1);

cljs.js.load_analysis_cache_BANG_ = (function cljs$js$load_analysis_cache_BANG_(state,ns,cache){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,ns], null),cache);
});
cljs.js.load_source_map_BANG_ = (function cljs$js$load_source_map_BANG_(state,ns,sm_json){
var sm = cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1(JSON.parse(sm_json));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$source_DASH_maps,ns], null),sm);
});
cljs.js.sm_data = (function cljs$js$sm_data(){
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$source_DASH_map,cljs.core.sorted_map(),cljs.core.cst$kw$gen_DASH_col,(0),cljs.core.cst$kw$gen_DASH_line,(0)], null));
});
cljs.js.prefix = (function cljs$js$prefix(s,pre){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(pre),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('');
});
cljs.js.append_source_map = (function cljs$js$append_source_map(state,name,source,sb,sm_data,p__33583){
var map__33584 = p__33583;
var map__33584__$1 = (((((!((map__33584 == null))))?(((((map__33584.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33584.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33584):map__33584);
var opts = map__33584__$1;
var output_dir = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33584__$1,cljs.core.cst$kw$output_DASH_dir);
var asset_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33584__$1,cljs.core.cst$kw$asset_DASH_path);
var source_map_timestamp = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33584__$1,cljs.core.cst$kw$source_DASH_map_DASH_timestamp);
var t = (new Date()).valueOf();
var mn = (cljs.core.truth_(name)?cljs.core.munge(cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)):["cljs-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(t)].join(''));
var smn = (function (){var G__33586 = mn;
if(cljs.core.truth_(name)){
return clojure.string.replace(G__33586,".","/");
} else {
return G__33586;
}
})();
var ts = (new Date()).valueOf();
var out = (function (){var or__4126__auto__ = output_dir;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return asset_path;
}
})();
var src = (function (){var G__33587 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(smn),".cljs"].join('');
var G__33587__$1 = ((source_map_timestamp === true)?[G__33587,"?rel=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ts)].join(''):G__33587);
if(cljs.core.truth_(out)){
return cljs.js.prefix(G__33587__$1,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(out),"/"].join(''));
} else {
return G__33587__$1;
}
})();
var file = (function (){var G__33588 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(smn),".js"].join('');
var G__33588__$1 = ((source_map_timestamp === true)?[G__33588,"?rel=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ts)].join(''):G__33588);
if(cljs.core.truth_(out)){
return cljs.js.prefix(G__33588__$1,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(out),"/"].join(''));
} else {
return G__33588__$1;
}
})();
var json = cljs.source_map.encode(cljs.core.PersistentArrayMap.createAsIfByAssoc([src,cljs.core.cst$kw$source_DASH_map.cljs$core$IFn$_invoke$arity$1(sm_data)]),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$lines,(cljs.core.cst$kw$gen_DASH_line.cljs$core$IFn$_invoke$arity$1(sm_data) + (3)),cljs.core.cst$kw$file,file,cljs.core.cst$kw$sources_DASH_content,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source], null)], null));
if(cljs.core.truth_(cljs.core.cst$kw$verbose.cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([json], 0));
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$source_DASH_maps,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(mn)], null),cljs.source_map.invert_reverse_map(cljs.core.cst$kw$source_DASH_map.cljs$core$IFn$_invoke$arity$1(sm_data)));

return sb.append(["\n//# sourceURL=",file,"\n//# sourceMappingURL=data:application/json;base64,",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__33594 = clojure.string.replace(encodeURIComponent(json),/%([0-9A-F]{2})/,(function (p__33595){
var vec__33596 = p__33595;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33596,(0),null);
var match = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33596,(1),null);
return String.fromCharCode(["0x",cljs.core.str.cljs$core$IFn$_invoke$arity$1(match)].join(''));
}));
return goog.crypt.base64.encodeString(G__33594);
})())].join(''));
});
cljs.js.alias_map = (function cljs$js$alias_map(compiler,cljs_ns){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__33599){
var vec__33600 = p__33599;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33600,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33600,(1),null);
return cljs.core.symbol_identical_QMARK_(k,v);
}),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(compiler,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,cljs_ns,cljs.core.cst$kw$requires], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(compiler,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,cljs_ns,cljs.core.cst$kw$require_DASH_macros], null))], 0))));
});
cljs.js._STAR_loaded_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY);
/**
 * Like cljs.core/run!, but for an async procedure, and with the
 *   ability to break prior to processing the entire collection.
 * 
 *   Chains successive calls to the supplied procedure for items in
 *   the collection. The procedure should accept an item from the
 *   collection and a callback of one argument. If the break? predicate,
 *   when applied to the procedure callback value, yields a truthy
 *   result, terminates early calling the supplied cb with the callback
 *   value. Otherwise, when complete, calls cb with nil.
 */
cljs.js.run_async_BANG_ = (function cljs$js$run_async_BANG_(proc,coll,break_QMARK_,cb){
if(cljs.core.seq(coll)){
var G__33603 = cljs.core.first(coll);
var G__33604 = (function (res){
if(cljs.core.truth_((break_QMARK_.cljs$core$IFn$_invoke$arity$1 ? break_QMARK_.cljs$core$IFn$_invoke$arity$1(res) : break_QMARK_.call(null,res)))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res) : cb.call(null,res));
} else {
var G__33605 = proc;
var G__33606 = cljs.core.rest(coll);
var G__33607 = break_QMARK_;
var G__33608 = cb;
return (cljs.js.run_async_BANG_.cljs$core$IFn$_invoke$arity$4 ? cljs.js.run_async_BANG_.cljs$core$IFn$_invoke$arity$4(G__33605,G__33606,G__33607,G__33608) : cljs.js.run_async_BANG_.call(null,G__33605,G__33606,G__33607,G__33608));
}
});
return (proc.cljs$core$IFn$_invoke$arity$2 ? proc.cljs$core$IFn$_invoke$arity$2(G__33603,G__33604) : proc.call(null,G__33603,G__33604));
} else {
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(null) : cb.call(null,null));
}
});
cljs.js.process_deps = (function cljs$js$process_deps(bound_vars,names,opts,cb){
return cljs.js.run_async_BANG_((function (name,cb__$1){
return cljs.js.require.cljs$core$IFn$_invoke$arity$5(bound_vars,name,null,opts,cb__$1);
}),names,cljs.core.cst$kw$error,cb);
});
cljs.js.process_macros_deps = (function cljs$js$process_macros_deps(bound_vars,cache,opts,cb){
return cljs.js.process_deps(bound_vars,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.vals(cljs.core.cst$kw$require_DASH_macros.cljs$core$IFn$_invoke$arity$1(cache))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,cljs.core.cst$kw$macros_DASH_ns,true),cljs.core.cst$kw$emit_DASH_constants,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$optimize_DASH_constants], 0)),cb);
});
cljs.js.process_libs_deps = (function cljs$js$process_libs_deps(bound_vars,cache,opts,cb){
return cljs.js.process_deps(bound_vars,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.vals(cljs.core.cst$kw$requires.cljs$core$IFn$_invoke$arity$1(cache)),cljs.core.vals(cljs.core.cst$kw$imports.cljs$core$IFn$_invoke$arity$1(cache)))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,cljs.core.cst$kw$macros_DASH_ns),cb);
});
cljs.js.pre_file_side_effects = (function cljs$js$pre_file_side_effects(st,name,file,opts){
if(cljs.core.truth_(cljs.core.cst$kw$verbose.cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Pre-file side-effects",file], 0));
} else {
}

if(cljs.core.truth_((function (){var and__4115__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(st),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,name,cljs.core.cst$kw$defs], null));
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not((function (){var fexpr__33609 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$sym$cljs$core$macros,"null",cljs.core.cst$sym$cljs$core,"null"], null), null);
return (fexpr__33609.cljs$core$IFn$_invoke$arity$1 ? fexpr__33609.cljs$core$IFn$_invoke$arity$1(name) : fexpr__33609.call(null,name));
})());
} else {
return and__4115__auto__;
}
})())){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(st,cljs.core.update,cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0));
} else {
return null;
}
});
cljs.js.post_file_side_effects = (function cljs$js$post_file_side_effects(file,opts){
if(cljs.core.truth_(cljs.core.cst$kw$verbose.cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Post-file side-effects",file], 0));
} else {
}

return cljs.core._STAR_unchecked_arrays_STAR_ = false;;
});
cljs.js.require = (function cljs$js$require(var_args){
var G__33611 = arguments.length;
switch (G__33611) {
case 2:
return cljs.js.require.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.js.require.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.js.require.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.js.require.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.js.require.cljs$core$IFn$_invoke$arity$2 = (function (name,cb){
return cljs.js.require.cljs$core$IFn$_invoke$arity$3(name,null,cb);
}));

(cljs.js.require.cljs$core$IFn$_invoke$arity$3 = (function (name,opts,cb){
return cljs.js.require.cljs$core$IFn$_invoke$arity$4(null,name,opts,cb);
}));

(cljs.js.require.cljs$core$IFn$_invoke$arity$4 = (function (bound_vars,name,opts,cb){
return cljs.js.require.cljs$core$IFn$_invoke$arity$5(bound_vars,name,null,opts,cb);
}));

(cljs.js.require.cljs$core$IFn$_invoke$arity$5 = (function (bound_vars,name,reload,opts,cb){
var bound_vars__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$_STAR_compiler_STAR_,cljs.env.default_compiler_env.cljs$core$IFn$_invoke$arity$0(),cljs.core.cst$kw$_STAR_data_DASH_readers_STAR_,cljs.tagged_literals._STAR_cljs_data_readers_STAR_,cljs.core.cst$kw$_STAR_load_DASH_macros_STAR_,cljs.core.cst$kw$load_DASH_macros.cljs$core$IFn$_invoke$arity$2(opts,true),cljs.core.cst$kw$_STAR_analyze_DASH_deps_STAR_,cljs.core.cst$kw$analyze_DASH_deps.cljs$core$IFn$_invoke$arity$2(opts,true),cljs.core.cst$kw$_STAR_load_DASH_fn_STAR_,(function (){var or__4126__auto__ = cljs.core.cst$kw$load.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.js._STAR_load_fn_STAR_;
}
})(),cljs.core.cst$kw$_STAR_eval_DASH_fn_STAR_,(function (){var or__4126__auto__ = cljs.core.cst$kw$eval.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.js._STAR_eval_fn_STAR_;
}
})()], null),bound_vars], 0));
var aname = (function (){var G__33612 = name;
if(cljs.core.truth_(cljs.core.cst$kw$macros_DASH_ns.cljs$core$IFn$_invoke$arity$1(opts))){
return cljs.analyzer.macro_ns_name(G__33612);
} else {
return G__33612;
}
})();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$reload,reload)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.js._STAR_loaded_STAR_,cljs.core.disj,aname);
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$reload_DASH_all,reload)){
cljs.core.reset_BANG_(cljs.js._STAR_loaded_STAR_,cljs.core.PersistentHashSet.EMPTY);
} else {
}

if(cljs.core.truth_(cljs.core.cst$kw$verbose.cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["Loading ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),(cljs.core.truth_(cljs.core.cst$kw$macros_DASH_ns.cljs$core$IFn$_invoke$arity$1(opts))?" macros":null)," namespace"].join('')], 0));
} else {
}

if((!(cljs.core.contains_QMARK_(cljs.core.deref(cljs.js._STAR_loaded_STAR_),aname)))){
var env = cljs.core.cst$kw$_STAR_env_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
try{var G__33616 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,name,cljs.core.cst$kw$macros,cljs.core.cst$kw$macros_DASH_ns.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.cst$kw$path,cljs.js.ns__GT_relpath(name)], null);
var G__33617 = (function (resource){
if(((cljs.core.map_QMARK_(resource)) || ((resource == null)))){
} else {
throw (new Error(["Assert failed: ","*load-fn* may only return a map or nil","\n","(or (map? resource) (nil? resource))"].join('')));
}

if(cljs.core.truth_(resource)){
var map__33618 = resource;
var map__33618__$1 = (((((!((map__33618 == null))))?(((((map__33618.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33618.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33618):map__33618);
var lang = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33618__$1,cljs.core.cst$kw$lang);
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33618__$1,cljs.core.cst$kw$source);
var cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33618__$1,cljs.core.cst$kw$cache);
var source_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33618__$1,cljs.core.cst$kw$source_DASH_map);
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33618__$1,cljs.core.cst$kw$file);
var pred__33620 = cljs.core.keyword_identical_QMARK_;
var expr__33621 = lang;
if(cljs.core.truth_((function (){var G__33623 = cljs.core.cst$kw$clj;
var G__33624 = expr__33621;
return (pred__33620.cljs$core$IFn$_invoke$arity$2 ? pred__33620.cljs$core$IFn$_invoke$arity$2(G__33623,G__33624) : pred__33620.call(null,G__33623,G__33624));
})())){
cljs.js.pre_file_side_effects(cljs.core.cst$kw$_STAR_compiler_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1),aname,file,opts);

return cljs.js.eval_str_STAR_(bound_vars__$1,source,name,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,cljs.core.cst$kw$cljs_DASH_file,file),(function (res){
cljs.js.post_file_side_effects(file,opts);

if(cljs.core.truth_(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(res))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res) : cb.call(null,res));
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.js._STAR_loaded_STAR_,cljs.core.conj,aname);

var G__33625 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,true], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__33625) : cb.call(null,G__33625));
}
}));
} else {
if(cljs.core.truth_((function (){var G__33626 = cljs.core.cst$kw$js;
var G__33627 = expr__33621;
return (pred__33620.cljs$core$IFn$_invoke$arity$2 ? pred__33620.cljs$core$IFn$_invoke$arity$2(G__33626,G__33627) : pred__33620.call(null,G__33626,G__33627));
})())){
return cljs.js.process_macros_deps(bound_vars__$1,cache,opts,(function (res){
if(cljs.core.truth_(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(res))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res) : cb.call(null,res));
} else {
return cljs.js.process_libs_deps(bound_vars__$1,cache,opts,(function (res__$1){
if(cljs.core.truth_(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(res__$1))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res__$1) : cb.call(null,res__$1));
} else {
var res__$2 = (function (){try{var fexpr__33629_33637 = cljs.core.cst$kw$_STAR_eval_DASH_fn_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
(fexpr__33629_33637.cljs$core$IFn$_invoke$arity$1 ? fexpr__33629_33637.cljs$core$IFn$_invoke$arity$1(resource) : fexpr__33629_33637.call(null,resource));

if(cljs.core.truth_(cache)){
cljs.js.load_analysis_cache_BANG_(cljs.core.cst$kw$_STAR_compiler_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1),aname,cache);

cljs.analyzer.register_specs(cache);
} else {
}

if(cljs.core.truth_(source_map)){
return cljs.js.load_source_map_BANG_(cljs.core.cst$kw$_STAR_compiler_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1),aname,source_map);
} else {
return null;
}
}catch (e33628){var cause = e33628;
return cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(env,["Could not require ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),cause));
}})();
if(cljs.core.truth_(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(res__$2))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res__$2) : cb.call(null,res__$2));
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.js._STAR_loaded_STAR_,cljs.core.conj,aname);

var G__33630 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,true], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__33630) : cb.call(null,G__33630));
}
}
}));
}
}));
} else {
var G__33631 = cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,["Invalid :lang specified ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lang),", only :clj or :js allowed"].join('')));
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__33631) : cb.call(null,G__33631));
}
}
} else {
var G__33632 = cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,(function (){var G__33633 = (cljs.core.truth_(cljs.core.cst$kw$macros_DASH_ns.cljs$core$IFn$_invoke$arity$1(opts))?cljs.core.cst$kw$undeclared_DASH_macros_DASH_ns:cljs.core.cst$kw$undeclared_DASH_ns);
var G__33634 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ns_DASH_sym,name,cljs.core.cst$kw$js_DASH_provide,cljs.core.name(name)], null);
return (cljs.analyzer.error_message.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.error_message.cljs$core$IFn$_invoke$arity$2(G__33633,G__33634) : cljs.analyzer.error_message.call(null,G__33633,G__33634));
})()));
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__33632) : cb.call(null,G__33632));
}
});
var fexpr__33615 = cljs.core.cst$kw$_STAR_load_DASH_fn_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
return (fexpr__33615.cljs$core$IFn$_invoke$arity$2 ? fexpr__33615.cljs$core$IFn$_invoke$arity$2(G__33616,G__33617) : fexpr__33615.call(null,G__33616,G__33617));
}catch (e33613){var cause = e33613;
var G__33614 = cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(env,["Could not require ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),cause));
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__33614) : cb.call(null,G__33614));
}} else {
var G__33635 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,true], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__33635) : cb.call(null,G__33635));
}
}));

(cljs.js.require.cljs$lang$maxFixedArity = 5);

cljs.js.patch_alias_map = (function cljs$js$patch_alias_map(compiler,in$,from,to){
var patch = (function (k,add_if_present_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(compiler,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,in$,k], null),(function (m){
var replaced = clojure.walk.postwalk_replace(cljs.core.PersistentArrayMap.createAsIfByAssoc([from,to]),m);
if(cljs.core.truth_((function (){var and__4115__auto__ = add_if_present_QMARK_;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([to]),cljs.core.vals(replaced));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(replaced,from,to);
} else {
return replaced;
}
}));
});
var patch_renames = (function (k){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(compiler,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,in$,k], null),(function (m){
if(cljs.core.truth_(m)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__33638){
var vec__33639 = p__33638;
var renamed = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33639,(0),null);
var qualified_sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33639,(1),null);
var entry = vec__33639;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(from),cljs.core.namespace(qualified_sym))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,renamed,cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(to),cljs.core.name(qualified_sym)));
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([acc,entry], 0));
}
}),cljs.core.PersistentArrayMap.EMPTY,m);
} else {
return null;
}
}));
});
patch(cljs.core.cst$kw$requires,true);

patch(cljs.core.cst$kw$require_DASH_macros,true);

patch(cljs.core.cst$kw$uses,false);

patch(cljs.core.cst$kw$use_DASH_macros,false);

patch_renames(cljs.core.cst$kw$renames);

return patch_renames(cljs.core.cst$kw$rename_DASH_macros);
});
cljs.js.self_require_QMARK_ = (function cljs$js$self_require_QMARK_(deps,opts){
if(cljs.core.cst$kw$def_DASH_emits_DASH_var.cljs$core$IFn$_invoke$arity$1(opts) === true){
return cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.analyzer._STAR_cljs_ns_STAR_]),deps);
} else {
return false;
}
});
cljs.js.load_deps = (function cljs$js$load_deps(var_args){
var G__33644 = arguments.length;
switch (G__33644) {
case 5:
return cljs.js.load_deps.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 7:
return cljs.js.load_deps.cljs$core$IFn$_invoke$arity$7((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.js.load_deps.cljs$core$IFn$_invoke$arity$5 = (function (bound_vars,ana_env,lib,deps,cb){
return cljs.js.load_deps.cljs$core$IFn$_invoke$arity$7(bound_vars,ana_env,lib,deps,null,null,cb);
}));

(cljs.js.load_deps.cljs$core$IFn$_invoke$arity$7 = (function (bound_vars,ana_env,lib,deps,reload,opts,cb){
if(cljs.core.truth_(cljs.core.cst$kw$verbose.cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Loading dependencies for",lib], 0));
} else {
}

var _STAR_cljs_dep_set_STAR__orig_val__33645 = cljs.analyzer._STAR_cljs_dep_set_STAR_;
var _STAR_cljs_dep_set_STAR__temp_val__33646 = (function (){var lib__$1 = (cljs.core.truth_(cljs.js.self_require_QMARK_(deps,opts))?cljs.core.cst$sym$cljs$user:lib);
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$5(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$_STAR_cljs_DASH_dep_DASH_set_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars),lib__$1),cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$dep_DASH_path], null),cljs.core.conj,lib__$1);
})();
(cljs.analyzer._STAR_cljs_dep_set_STAR_ = _STAR_cljs_dep_set_STAR__temp_val__33646);

try{var bound_vars__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(bound_vars,cljs.core.cst$kw$_STAR_cljs_DASH_dep_DASH_set_STAR_,cljs.analyzer._STAR_cljs_dep_set_STAR_);
if((!(cljs.core.every_QMARK_((function (p1__33642_SHARP_){
return (!(cljs.core.contains_QMARK_(cljs.analyzer._STAR_cljs_dep_set_STAR_,p1__33642_SHARP_)));
}),deps)))){
var G__33647 = cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(ana_env,["Circular dependency detected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" -> ",cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$dep_DASH_path.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(cljs.analyzer._STAR_cljs_dep_set_STAR_)),cljs.core.some(cljs.analyzer._STAR_cljs_dep_set_STAR_,deps)))))].join('')));
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__33647) : cb.call(null,G__33647));
} else {
if(cljs.core.seq(deps)){
var dep = cljs.core.first(deps);
var opts_SINGLEQUOTE_ = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,cljs.core.cst$kw$context),cljs.core.cst$kw$def_DASH_emits_DASH_var),cljs.core.cst$kw$ns);
return cljs.js.require.cljs$core$IFn$_invoke$arity$5(bound_vars__$1,dep,reload,opts_SINGLEQUOTE_,(function (res){
if(cljs.core.truth_(cljs.core.cst$kw$verbose.cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Loading result:",res], 0));
} else {
}

if(cljs.core.not(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(res))){
return cljs.js.load_deps.cljs$core$IFn$_invoke$arity$7(bound_vars__$1,ana_env,lib,cljs.core.next(deps),null,opts,cb);
} else {
var temp__5733__auto__ = (function (){var cljs_ns = cljs.analyzer.clj_ns__GT_cljs_ns(dep);
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.createAsIfByAssoc([dep,null]),cljs_ns,cljs_ns);
})();
if(cljs.core.truth_(temp__5733__auto__)){
var cljs_dep = temp__5733__auto__;
return cljs.js.require.cljs$core$IFn$_invoke$arity$4(bound_vars__$1,cljs_dep,opts_SINGLEQUOTE_,(function (res__$1){
if(cljs.core.truth_(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(res__$1))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res__$1) : cb.call(null,res__$1));
} else {
cljs.js.patch_alias_map(cljs.core.cst$kw$_STAR_compiler_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1),lib,dep,cljs_dep);

return cljs.js.load_deps.cljs$core$IFn$_invoke$arity$7(bound_vars__$1,ana_env,lib,cljs.core.next(deps),null,opts,(function (res__$2){
if(cljs.core.truth_(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(res__$2))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res__$2) : cb.call(null,res__$2));
} else {
var G__33648 = cljs.core.update.cljs$core$IFn$_invoke$arity$5(res__$2,cljs.core.cst$kw$aliased_DASH_loads,cljs.core.assoc,dep,cljs_dep);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__33648) : cb.call(null,G__33648));
}
}));
}
}));
} else {
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res) : cb.call(null,res));
}
}
}));
} else {
var G__33649 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,null], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__33649) : cb.call(null,G__33649));
}
}
}finally {(cljs.analyzer._STAR_cljs_dep_set_STAR_ = _STAR_cljs_dep_set_STAR__orig_val__33645);
}}));

(cljs.js.load_deps.cljs$lang$maxFixedArity = 7);

cljs.js.analyze_deps = (function cljs$js$analyze_deps(var_args){
var G__33653 = arguments.length;
switch (G__33653) {
case 5:
return cljs.js.analyze_deps.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.js.analyze_deps.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.js.analyze_deps.cljs$core$IFn$_invoke$arity$5 = (function (bound_vars,ana_env,lib,deps,cb){
return cljs.js.analyze_deps.cljs$core$IFn$_invoke$arity$6(bound_vars,ana_env,lib,deps,null,cb);
}));

(cljs.js.analyze_deps.cljs$core$IFn$_invoke$arity$6 = (function (bound_vars,ana_env,lib,deps,opts,cb){
var _STAR_cljs_dep_set_STAR__orig_val__33654 = cljs.analyzer._STAR_cljs_dep_set_STAR_;
var _STAR_cljs_dep_set_STAR__temp_val__33655 = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$5(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$_STAR_cljs_DASH_dep_DASH_set_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars),lib),cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$dep_DASH_path], null),cljs.core.conj,lib);
(cljs.analyzer._STAR_cljs_dep_set_STAR_ = _STAR_cljs_dep_set_STAR__temp_val__33655);

try{var compiler = cljs.core.deref(cljs.core.cst$kw$_STAR_compiler_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars));
var bound_vars__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(bound_vars,cljs.core.cst$kw$_STAR_cljs_DASH_dep_DASH_set_STAR_,cljs.analyzer._STAR_cljs_dep_set_STAR_);
if((!(cljs.core.every_QMARK_((function (p1__33651_SHARP_){
return (!(cljs.core.contains_QMARK_(cljs.analyzer._STAR_cljs_dep_set_STAR_,p1__33651_SHARP_)));
}),deps)))){
var G__33656 = cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(ana_env,["Circular dependency detected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" -> ",cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$dep_DASH_path.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(cljs.analyzer._STAR_cljs_dep_set_STAR_)),cljs.core.some(cljs.analyzer._STAR_cljs_dep_set_STAR_,deps)))))].join('')));
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__33656) : cb.call(null,G__33656));
} else {
if(cljs.core.seq(deps)){
var dep = cljs.core.first(deps);
try{var G__33660 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,dep,cljs.core.cst$kw$path,cljs.js.ns__GT_relpath(dep)], null);
var G__33661 = (function (resource){
if(((cljs.core.map_QMARK_(resource)) || ((resource == null)))){
} else {
throw (new Error(["Assert failed: ","*load-fn* may only return a map or nil","\n","(or (map? resource) (nil? resource))"].join('')));
}

if(cljs.core.not(resource)){
var temp__5733__auto__ = (function (){var cljs_ns = cljs.analyzer.clj_ns__GT_cljs_ns(dep);
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.createAsIfByAssoc([dep,null]),cljs_ns,cljs_ns);
})();
if(cljs.core.truth_(temp__5733__auto__)){
var cljs_dep = temp__5733__auto__;
cljs.js.patch_alias_map(cljs.core.cst$kw$_STAR_compiler_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1),lib,dep,cljs_dep);

return cljs.js.analyze_deps.cljs$core$IFn$_invoke$arity$6(bound_vars__$1,ana_env,lib,cljs.core.cons(cljs_dep,cljs.core.next(deps)),opts,(function (res){
if(cljs.core.truth_(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(res))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res) : cb.call(null,res));
} else {
var G__33662 = cljs.core.update.cljs$core$IFn$_invoke$arity$5(res,cljs.core.cst$kw$aliased_DASH_loads,cljs.core.assoc,dep,cljs_dep);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__33662) : cb.call(null,G__33662));
}
}));
} else {
var G__33663 = cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(ana_env,(function (){var G__33664 = cljs.core.cst$kw$undeclared_DASH_ns;
var G__33665 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ns_DASH_sym,dep,cljs.core.cst$kw$js_DASH_provide,cljs.core.name(dep)], null);
return (cljs.analyzer.error_message.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.error_message.cljs$core$IFn$_invoke$arity$2(G__33664,G__33665) : cljs.analyzer.error_message.call(null,G__33664,G__33665));
})()));
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__33663) : cb.call(null,G__33663));
}
} else {
var map__33666 = resource;
var map__33666__$1 = (((((!((map__33666 == null))))?(((((map__33666.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33666.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33666):map__33666);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33666__$1,cljs.core.cst$kw$name);
var lang = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33666__$1,cljs.core.cst$kw$lang);
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33666__$1,cljs.core.cst$kw$source);
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33666__$1,cljs.core.cst$kw$file);
var pred__33668 = cljs.core.keyword_identical_QMARK_;
var expr__33669 = lang;
if(cljs.core.truth_((function (){var G__33671 = cljs.core.cst$kw$clj;
var G__33672 = expr__33669;
return (pred__33668.cljs$core$IFn$_invoke$arity$2 ? pred__33668.cljs$core$IFn$_invoke$arity$2(G__33671,G__33672) : pred__33668.call(null,G__33671,G__33672));
})())){
cljs.js.pre_file_side_effects(cljs.core.cst$kw$_STAR_compiler_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1),name,file,opts);

return cljs.js.analyze_str_STAR_(bound_vars__$1,source,name,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,cljs.core.cst$kw$cljs_DASH_file,file),(function (res){
cljs.js.post_file_side_effects(file,opts);

if(cljs.core.not(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(res))){
return cljs.js.analyze_deps.cljs$core$IFn$_invoke$arity$6(bound_vars__$1,ana_env,lib,cljs.core.next(deps),opts,cb);
} else {
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res) : cb.call(null,res));
}
}));
} else {
if(cljs.core.truth_((function (){var G__33673 = cljs.core.cst$kw$js;
var G__33674 = expr__33669;
return (pred__33668.cljs$core$IFn$_invoke$arity$2 ? pred__33668.cljs$core$IFn$_invoke$arity$2(G__33673,G__33674) : pred__33668.call(null,G__33673,G__33674));
})())){
return cljs.js.analyze_deps.cljs$core$IFn$_invoke$arity$6(bound_vars__$1,ana_env,lib,cljs.core.next(deps),opts,cb);
} else {
return cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(ana_env,["Invalid :lang specified ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lang),", only :clj or :js allowed"].join('')));
}
}
}
});
var fexpr__33659 = cljs.core.cst$kw$_STAR_load_DASH_fn_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
return (fexpr__33659.cljs$core$IFn$_invoke$arity$2 ? fexpr__33659.cljs$core$IFn$_invoke$arity$2(G__33660,G__33661) : fexpr__33659.call(null,G__33660,G__33661));
}catch (e33657){var cause = e33657;
var G__33658 = cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(ana_env,["Could not analyze dep ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(dep)].join(''),cause));
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__33658) : cb.call(null,G__33658));
}} else {
var G__33675 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,null], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__33675) : cb.call(null,G__33675));
}
}
}finally {(cljs.analyzer._STAR_cljs_dep_set_STAR_ = _STAR_cljs_dep_set_STAR__orig_val__33654);
}}));

(cljs.js.analyze_deps.cljs$lang$maxFixedArity = 6);

cljs.js.load_macros = (function cljs$js$load_macros(bound_vars,k,macros,lib,reload,reloads,opts,cb){
if(cljs.core.seq(macros)){
var nsym = cljs.core.first(cljs.core.vals(macros));
var k__$1 = (function (){var or__4126__auto__ = (reload.cljs$core$IFn$_invoke$arity$1 ? reload.cljs$core$IFn$_invoke$arity$1(k) : reload.call(null,k));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(reloads,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,nsym], null));
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
var or__4126__auto____$2 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(nsym,cljs.core.name))?(function (){var and__4115__auto__ = cljs.core.cst$kw$_STAR_reload_DASH_macros_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.cst$kw$reload;
} else {
return and__4115__auto__;
}
})():false);
if(cljs.core.truth_(or__4126__auto____$2)){
return or__4126__auto____$2;
} else {
return null;
}
}
}
})();
var opts_SINGLEQUOTE_ = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,cljs.core.cst$kw$macros_DASH_ns,true),cljs.core.cst$kw$context),cljs.core.cst$kw$def_DASH_emits_DASH_var),cljs.core.cst$kw$ns),cljs.core.cst$kw$emit_DASH_constants,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$optimize_DASH_constants], 0));
return cljs.js.require.cljs$core$IFn$_invoke$arity$5(bound_vars,nsym,k__$1,opts_SINGLEQUOTE_,(function (res){
if(cljs.core.not(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(res))){
var G__33677 = bound_vars;
var G__33678 = k__$1;
var G__33679 = cljs.core.next(macros);
var G__33680 = lib;
var G__33681 = reload;
var G__33682 = reloads;
var G__33683 = opts;
var G__33684 = cb;
return (cljs.js.load_macros.cljs$core$IFn$_invoke$arity$8 ? cljs.js.load_macros.cljs$core$IFn$_invoke$arity$8(G__33677,G__33678,G__33679,G__33680,G__33681,G__33682,G__33683,G__33684) : cljs.js.load_macros.call(null,G__33677,G__33678,G__33679,G__33680,G__33681,G__33682,G__33683,G__33684));
} else {
var temp__5733__auto__ = (function (){var cljs_ns = cljs.analyzer.clj_ns__GT_cljs_ns(nsym);
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.createAsIfByAssoc([nsym,null]),cljs_ns,cljs_ns);
})();
if(cljs.core.truth_(temp__5733__auto__)){
var cljs_dep = temp__5733__auto__;
return cljs.js.require.cljs$core$IFn$_invoke$arity$5(bound_vars,cljs_dep,k__$1,opts_SINGLEQUOTE_,(function (res__$1){
if(cljs.core.truth_(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(res__$1))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res__$1) : cb.call(null,res__$1));
} else {
cljs.js.patch_alias_map(cljs.core.cst$kw$_STAR_compiler_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars),lib,nsym,cljs_dep);

var G__33685 = bound_vars;
var G__33686 = k__$1;
var G__33687 = cljs.core.next(macros);
var G__33688 = lib;
var G__33689 = reload;
var G__33690 = reloads;
var G__33691 = opts;
var G__33692 = (function (res__$2){
if(cljs.core.truth_(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(res__$2))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res__$2) : cb.call(null,res__$2));
} else {
var G__33693 = cljs.core.update.cljs$core$IFn$_invoke$arity$5(res__$2,cljs.core.cst$kw$aliased_DASH_loads,cljs.core.assoc,nsym,cljs_dep);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__33693) : cb.call(null,G__33693));
}
});
return (cljs.js.load_macros.cljs$core$IFn$_invoke$arity$8 ? cljs.js.load_macros.cljs$core$IFn$_invoke$arity$8(G__33685,G__33686,G__33687,G__33688,G__33689,G__33690,G__33691,G__33692) : cljs.js.load_macros.call(null,G__33685,G__33686,G__33687,G__33688,G__33689,G__33690,G__33691,G__33692));
}
}));
} else {
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res) : cb.call(null,res));
}
}
}));
} else {
var G__33694 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,null], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__33694) : cb.call(null,G__33694));
}
});
cljs.js.rewrite_ns_ast = (function cljs$js$rewrite_ns_ast(var_args){
var G__33698 = arguments.length;
switch (G__33698) {
case 2:
return cljs.js.rewrite_ns_ast.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.js.rewrite_ns_ast.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.js.rewrite_ns_ast.cljs$core$IFn$_invoke$arity$2 = (function (ast,smap){
return cljs.js.rewrite_ns_ast.cljs$core$IFn$_invoke$arity$3(ast,smap,false);
}));

(cljs.js.rewrite_ns_ast.cljs$core$IFn$_invoke$arity$3 = (function (ast,smap,macros_QMARK_){
var vec__33699 = (cljs.core.truth_(macros_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$use_DASH_macros,cljs.core.cst$kw$require_DASH_macros,cljs.core.cst$kw$rename_DASH_macros], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$uses,cljs.core.cst$kw$requires,cljs.core.cst$kw$renames], null));
var uk = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33699,(0),null);
var rk = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33699,(1),null);
var renk = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33699,(2),null);
var rewrite_renames = (function (m){
if(cljs.core.truth_(m)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__33702){
var vec__33703 = p__33702;
var renamed = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33703,(0),null);
var qualified_sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33703,(1),null);
var entry = vec__33703;
var from = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(qualified_sym));
var to = cljs.core.get.cljs$core$IFn$_invoke$arity$2(smap,from);
if((!((to == null)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,renamed,cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(to),cljs.core.name(qualified_sym)));
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([acc,entry], 0));
}
}),cljs.core.PersistentArrayMap.EMPTY,m);
} else {
return null;
}
});
var rewrite_deps = (function (deps){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (dep){
var temp__5733__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(smap,dep);
if(cljs.core.truth_(temp__5733__auto__)){
var new_dep = temp__5733__auto__;
return new_dep;
} else {
return dep;
}
})),deps);
});
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(ast,uk,(function (p1__33695_SHARP_){
return clojure.walk.postwalk_replace(smap,p1__33695_SHARP_);
})),rk,(function (p1__33696_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([smap,clojure.walk.postwalk_replace(smap,p1__33696_SHARP_)], 0));
})),renk,rewrite_renames),cljs.core.cst$kw$deps,rewrite_deps);
}));

(cljs.js.rewrite_ns_ast.cljs$lang$maxFixedArity = 3);

cljs.js.check_macro_autoload_inferring_missing = (function cljs$js$check_macro_autoload_inferring_missing(p__33707,cenv){
var map__33708 = p__33707;
var map__33708__$1 = (((((!((map__33708 == null))))?(((((map__33708.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33708.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33708):map__33708);
var ast = map__33708__$1;
var requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33708__$1,cljs.core.cst$kw$requires);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33708__$1,cljs.core.cst$kw$name);
var namespaces = cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cenv));
var missing_require_macros = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$1((function (p__33710){
var vec__33711 = p__33710;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33711,(0),null);
var full_ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33711,(1),null);
var map__33714 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(namespaces,full_ns);
var map__33714__$1 = (((((!((map__33714 == null))))?(((((map__33714.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33714.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33714):map__33714);
var use_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33714__$1,cljs.core.cst$kw$use_DASH_macros);
var require_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33714__$1,cljs.core.cst$kw$require_DASH_macros);
var or__4126__auto__ = cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([full_ns]),cljs.core.vals(use_macros));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([full_ns]),cljs.core.vals(require_macros));
}
})),requires);
var ast_SINGLEQUOTE_ = cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(ast,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$require_DASH_macros], null),cljs.core.merge,missing_require_macros);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(cenv,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,name,cljs.core.cst$kw$require_DASH_macros], null),cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([missing_require_macros], 0));

return ast_SINGLEQUOTE_;
});
cljs.js.ns_side_effects = (function cljs$js$ns_side_effects(var_args){
var G__33719 = arguments.length;
switch (G__33719) {
case 5:
return cljs.js.ns_side_effects.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.js.ns_side_effects.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.js.ns_side_effects.cljs$core$IFn$_invoke$arity$5 = (function (bound_vars,ana_env,ast,opts,cb){
return cljs.js.ns_side_effects.cljs$core$IFn$_invoke$arity$6(false,bound_vars,ana_env,ast,opts,cb);
}));

(cljs.js.ns_side_effects.cljs$core$IFn$_invoke$arity$6 = (function (load,bound_vars,ana_env,p__33720,opts,cb){
var map__33721 = p__33720;
var map__33721__$1 = (((((!((map__33721 == null))))?(((((map__33721.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33721.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33721):map__33721);
var ast = map__33721__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33721__$1,cljs.core.cst$kw$op);
if(cljs.core.truth_(cljs.core.cst$kw$verbose.cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Namespace side effects for",cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(ast)], 0));
} else {
}

if(cljs.core.truth_((function (){var fexpr__33723 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ns_STAR_,null,cljs.core.cst$kw$ns,null], null), null);
return (fexpr__33723.cljs$core$IFn$_invoke$arity$1 ? fexpr__33723.cljs$core$IFn$_invoke$arity$1(op) : fexpr__33723.call(null,op));
})())){
var check_uses_and_load_macros = (function cljs$js$check_uses_and_load_macros(res,rewritten_ast){
var env = cljs.core.cst$kw$_STAR_compiler_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars);
var map__33745 = rewritten_ast;
var map__33745__$1 = (((((!((map__33745 == null))))?(((((map__33745.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33745.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33745):map__33745);
var uses = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33745__$1,cljs.core.cst$kw$uses);
var use_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33745__$1,cljs.core.cst$kw$use_DASH_macros);
var reload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33745__$1,cljs.core.cst$kw$reload);
var reloads = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33745__$1,cljs.core.cst$kw$reloads);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33745__$1,cljs.core.cst$kw$name);
if(cljs.core.truth_(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(res))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res) : cb.call(null,res));
} else {
if(cljs.core.truth_(cljs.core.cst$kw$_STAR_load_DASH_macros_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars))){
if(cljs.core.truth_(cljs.core.cst$kw$verbose.cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Processing :use-macros for",name], 0));
} else {
}

return cljs.js.load_macros(bound_vars,cljs.core.cst$kw$use_DASH_macros,use_macros,name,reload,reloads,opts,(function (res__$1){
if(cljs.core.truth_(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(res__$1))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res__$1) : cb.call(null,res__$1));
} else {
var map__33747 = cljs.js.rewrite_ns_ast.cljs$core$IFn$_invoke$arity$3(rewritten_ast,cljs.core.cst$kw$aliased_DASH_loads.cljs$core$IFn$_invoke$arity$1(res__$1),true);
var map__33747__$1 = (((((!((map__33747 == null))))?(((((map__33747.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33747.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33747):map__33747);
var rewritten_ast__$1 = map__33747__$1;
var require_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33747__$1,cljs.core.cst$kw$require_DASH_macros);
if(cljs.core.truth_(cljs.core.cst$kw$verbose.cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Processing :require-macros for",cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(ast)], 0));
} else {
}

return cljs.js.load_macros(bound_vars,cljs.core.cst$kw$require_DASH_macros,require_macros,name,reload,reloads,opts,(function (res_SINGLEQUOTE_){
if(cljs.core.truth_(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(res_SINGLEQUOTE_))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res_SINGLEQUOTE_) : cb.call(null,res_SINGLEQUOTE_));
} else {
var map__33749 = cljs.js.rewrite_ns_ast.cljs$core$IFn$_invoke$arity$3(rewritten_ast__$1,cljs.core.cst$kw$aliased_DASH_loads.cljs$core$IFn$_invoke$arity$1(res__$1),true);
var map__33749__$1 = (((((!((map__33749 == null))))?(((((map__33749.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33749.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33749):map__33749);
var rewritten_ast__$2 = map__33749__$1;
var use_macros__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33749__$1,cljs.core.cst$kw$use_DASH_macros);
var res_SINGLEQUOTE___$1 = (function (){try{if(cljs.core.seq(use_macros__$1)){
if(cljs.core.truth_(cljs.core.cst$kw$verbose.cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Checking :use-macros for",cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(ast)], 0));
} else {
}

var _STAR_analyze_deps_STAR__orig_val__33752_33770 = cljs.analyzer._STAR_analyze_deps_STAR_;
var _STAR_compiler_STAR__orig_val__33753_33771 = cljs.env._STAR_compiler_STAR_;
var _STAR_analyze_deps_STAR__temp_val__33754_33772 = cljs.core.cst$kw$_STAR_analyze_DASH_deps_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars);
var _STAR_compiler_STAR__temp_val__33755_33773 = cljs.core.cst$kw$_STAR_compiler_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars);
(cljs.analyzer._STAR_analyze_deps_STAR_ = _STAR_analyze_deps_STAR__temp_val__33754_33772);

(cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__temp_val__33755_33773);

try{cljs.analyzer.check_use_macros.cljs$core$IFn$_invoke$arity$2(use_macros__$1,env);
}finally {(cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__orig_val__33753_33771);

(cljs.analyzer._STAR_analyze_deps_STAR_ = _STAR_analyze_deps_STAR__orig_val__33752_33770);
}} else {
}

return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,null], null);
}catch (e33751){var cause = e33751;
return cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(ana_env,["Could not parse ns form ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(ast))].join(''),cause));
}})();
if(cljs.core.truth_(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(res_SINGLEQUOTE___$1))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res_SINGLEQUOTE___$1) : cb.call(null,res_SINGLEQUOTE___$1));
} else {
try{var _STAR_analyze_deps_STAR__orig_val__33758 = cljs.analyzer._STAR_analyze_deps_STAR_;
var _STAR_compiler_STAR__orig_val__33759 = cljs.env._STAR_compiler_STAR_;
var _STAR_analyze_deps_STAR__temp_val__33760 = cljs.core.cst$kw$_STAR_analyze_DASH_deps_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars);
var _STAR_compiler_STAR__temp_val__33761 = cljs.core.cst$kw$_STAR_compiler_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars);
(cljs.analyzer._STAR_analyze_deps_STAR_ = _STAR_analyze_deps_STAR__temp_val__33760);

(cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__temp_val__33761);

try{var ast_SINGLEQUOTE_ = cljs.js.check_macro_autoload_inferring_missing(cljs.analyzer.check_rename_macros_inferring_missing(cljs.analyzer.check_use_macros_inferring_missing(rewritten_ast__$2,env),env),env);
var G__33762 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,ast_SINGLEQUOTE_], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__33762) : cb.call(null,G__33762));
}finally {(cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__orig_val__33759);

(cljs.analyzer._STAR_analyze_deps_STAR_ = _STAR_analyze_deps_STAR__orig_val__33758);
}}catch (e33756){var cause = e33756;
var G__33757 = cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(ana_env,["Could not parse ns form ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(ast))].join(''),cause));
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__33757) : cb.call(null,G__33757));
}}
}
}));
}
}));
} else {
try{if(cljs.core.truth_(cljs.core.cst$kw$verbose.cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Checking uses"], 0));
} else {
}

cljs.analyzer.check_uses((cljs.core.truth_((function (){var and__4115__auto__ = cljs.core.cst$kw$_STAR_analyze_DASH_deps_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.seq(uses);
} else {
return and__4115__auto__;
}
})())?cljs.analyzer.missing_uses(uses,env):null),env);

var G__33765 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,ast], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__33765) : cb.call(null,G__33765));
}catch (e33763){var cause = e33763;
var G__33764 = cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(ana_env,["Could not parse ns form ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(ast))].join(''),cause));
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__33764) : cb.call(null,G__33764));
}}
}
});
if(cljs.core.truth_((function (){var and__4115__auto__ = load;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.seq(cljs.core.cst$kw$deps.cljs$core$IFn$_invoke$arity$1(ast));
} else {
return and__4115__auto__;
}
})())){
var map__33766 = ast;
var map__33766__$1 = (((((!((map__33766 == null))))?(((((map__33766.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33766.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33766):map__33766);
var reload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33766__$1,cljs.core.cst$kw$reload);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33766__$1,cljs.core.cst$kw$name);
var deps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33766__$1,cljs.core.cst$kw$deps);
return cljs.js.load_deps.cljs$core$IFn$_invoke$arity$7(bound_vars,ana_env,name,deps,(function (){var or__4126__auto__ = cljs.core.cst$kw$require.cljs$core$IFn$_invoke$arity$1(reload);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.cst$kw$use.cljs$core$IFn$_invoke$arity$1(reload);
}
})(),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,cljs.core.cst$kw$macros_DASH_ns),(function (p1__33716_SHARP_){
return check_uses_and_load_macros(p1__33716_SHARP_,cljs.js.rewrite_ns_ast.cljs$core$IFn$_invoke$arity$2(ast,cljs.core.cst$kw$aliased_DASH_loads.cljs$core$IFn$_invoke$arity$1(p1__33716_SHARP_)));
}));
} else {
if(cljs.core.truth_(((cljs.core.not(load))?(function (){var and__4115__auto__ = cljs.core.cst$kw$_STAR_analyze_DASH_deps_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.seq(cljs.core.cst$kw$deps.cljs$core$IFn$_invoke$arity$1(ast));
} else {
return and__4115__auto__;
}
})():false))){
return cljs.js.analyze_deps.cljs$core$IFn$_invoke$arity$6(bound_vars,ana_env,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(ast),cljs.core.cst$kw$deps.cljs$core$IFn$_invoke$arity$1(ast),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,cljs.core.cst$kw$macros_DASH_ns),(function (p1__33717_SHARP_){
return check_uses_and_load_macros(p1__33717_SHARP_,cljs.js.rewrite_ns_ast.cljs$core$IFn$_invoke$arity$2(ast,cljs.core.cst$kw$aliased_DASH_loads.cljs$core$IFn$_invoke$arity$1(p1__33717_SHARP_)));
}));
} else {
return check_uses_and_load_macros(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,null], null),ast);

}
}
} else {
var G__33768 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,ast], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__33768) : cb.call(null,G__33768));
}
}));

(cljs.js.ns_side_effects.cljs$lang$maxFixedArity = 6);

cljs.js.node_side_effects = (function cljs$js$node_side_effects(bound_vars,sb,deps,ns_name,emit_nil_result_QMARK_){
var seq__33774_33794 = cljs.core.seq(deps);
var chunk__33775_33795 = null;
var count__33776_33796 = (0);
var i__33777_33797 = (0);
while(true){
if((i__33777_33797 < count__33776_33796)){
var dep_33798 = chunk__33775_33795.cljs$core$IIndexed$_nth$arity$2(null,i__33777_33797);
sb.append((function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__33786_33799 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__33787_33800 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__33788_33801 = true;
var _STAR_print_fn_STAR__temp_val__33789_33802 = ((function (seq__33774_33794,chunk__33775_33795,count__33776_33796,i__33777_33797,_STAR_print_newline_STAR__orig_val__33786_33799,_STAR_print_fn_STAR__orig_val__33787_33800,_STAR_print_newline_STAR__temp_val__33788_33801,sb__4667__auto__,dep_33798){
return (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});})(seq__33774_33794,chunk__33775_33795,count__33776_33796,i__33777_33797,_STAR_print_newline_STAR__orig_val__33786_33799,_STAR_print_fn_STAR__orig_val__33787_33800,_STAR_print_newline_STAR__temp_val__33788_33801,sb__4667__auto__,dep_33798))
;
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__33788_33801);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__33789_33802);

try{cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.munge(ns_name),".",cljs.analyzer.munge_node_lib(dep_33798)," = require('",dep_33798,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["');"], 0));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__33787_33800);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__33786_33799);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})());


var G__33803 = seq__33774_33794;
var G__33804 = chunk__33775_33795;
var G__33805 = count__33776_33796;
var G__33806 = (i__33777_33797 + (1));
seq__33774_33794 = G__33803;
chunk__33775_33795 = G__33804;
count__33776_33796 = G__33805;
i__33777_33797 = G__33806;
continue;
} else {
var temp__5735__auto___33807 = cljs.core.seq(seq__33774_33794);
if(temp__5735__auto___33807){
var seq__33774_33808__$1 = temp__5735__auto___33807;
if(cljs.core.chunked_seq_QMARK_(seq__33774_33808__$1)){
var c__4556__auto___33809 = cljs.core.chunk_first(seq__33774_33808__$1);
var G__33810 = cljs.core.chunk_rest(seq__33774_33808__$1);
var G__33811 = c__4556__auto___33809;
var G__33812 = cljs.core.count(c__4556__auto___33809);
var G__33813 = (0);
seq__33774_33794 = G__33810;
chunk__33775_33795 = G__33811;
count__33776_33796 = G__33812;
i__33777_33797 = G__33813;
continue;
} else {
var dep_33814 = cljs.core.first(seq__33774_33808__$1);
sb.append((function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__33790_33815 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__33791_33816 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__33792_33817 = true;
var _STAR_print_fn_STAR__temp_val__33793_33818 = ((function (seq__33774_33794,chunk__33775_33795,count__33776_33796,i__33777_33797,_STAR_print_newline_STAR__orig_val__33790_33815,_STAR_print_fn_STAR__orig_val__33791_33816,_STAR_print_newline_STAR__temp_val__33792_33817,sb__4667__auto__,dep_33814,seq__33774_33808__$1,temp__5735__auto___33807){
return (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});})(seq__33774_33794,chunk__33775_33795,count__33776_33796,i__33777_33797,_STAR_print_newline_STAR__orig_val__33790_33815,_STAR_print_fn_STAR__orig_val__33791_33816,_STAR_print_newline_STAR__temp_val__33792_33817,sb__4667__auto__,dep_33814,seq__33774_33808__$1,temp__5735__auto___33807))
;
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__33792_33817);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__33793_33818);

try{cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.munge(ns_name),".",cljs.analyzer.munge_node_lib(dep_33814)," = require('",dep_33814,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["');"], 0));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__33791_33816);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__33790_33815);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})());


var G__33819 = cljs.core.next(seq__33774_33808__$1);
var G__33820 = null;
var G__33821 = (0);
var G__33822 = (0);
seq__33774_33794 = G__33819;
chunk__33775_33795 = G__33820;
count__33776_33796 = G__33821;
i__33777_33797 = G__33822;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_((function (){var and__4115__auto__ = cljs.core.seq(deps);
if(and__4115__auto__){
return emit_nil_result_QMARK_;
} else {
return and__4115__auto__;
}
})())){
return sb.append("null;");
} else {
return null;
}
});
cljs.js.global_exports_side_effects = (function cljs$js$global_exports_side_effects(bound_vars,sb,deps,ns_name,emit_nil_result_QMARK_){
var map__33823 = cljs.core.deref(cljs.core.cst$kw$_STAR_compiler_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars));
var map__33823__$1 = (((((!((map__33823 == null))))?(((((map__33823.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33823.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33823):map__33823);
var js_dependency_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33823__$1,cljs.core.cst$kw$js_DASH_dependency_DASH_index);
var seq__33825_33853 = cljs.core.seq(deps);
var chunk__33826_33854 = null;
var count__33827_33855 = (0);
var i__33828_33856 = (0);
while(true){
if((i__33828_33856 < count__33827_33855)){
var dep_33857 = chunk__33826_33854.cljs$core$IIndexed$_nth$arity$2(null,i__33828_33856);
var map__33841_33858 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(js_dependency_index,cljs.core.name(dep_33857));
var map__33841_33859__$1 = (((((!((map__33841_33858 == null))))?(((((map__33841_33858.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33841_33858.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33841_33858):map__33841_33858);
var global_exports_33860 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33841_33859__$1,cljs.core.cst$kw$global_DASH_exports);
sb.append((function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__33843_33861 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__33844_33862 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__33845_33863 = true;
var _STAR_print_fn_STAR__temp_val__33846_33864 = ((function (seq__33825_33853,chunk__33826_33854,count__33827_33855,i__33828_33856,_STAR_print_newline_STAR__orig_val__33843_33861,_STAR_print_fn_STAR__orig_val__33844_33862,_STAR_print_newline_STAR__temp_val__33845_33863,sb__4667__auto__,map__33841_33858,map__33841_33859__$1,global_exports_33860,dep_33857,map__33823,map__33823__$1,js_dependency_index){
return (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});})(seq__33825_33853,chunk__33826_33854,count__33827_33855,i__33828_33856,_STAR_print_newline_STAR__orig_val__33843_33861,_STAR_print_fn_STAR__orig_val__33844_33862,_STAR_print_newline_STAR__temp_val__33845_33863,sb__4667__auto__,map__33841_33858,map__33841_33859__$1,global_exports_33860,dep_33857,map__33823,map__33823__$1,js_dependency_index))
;
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__33845_33863);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__33846_33864);

try{cljs.compiler.emit_global_export(ns_name,global_exports_33860,dep_33857);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__33844_33862);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__33843_33861);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})());


var G__33865 = seq__33825_33853;
var G__33866 = chunk__33826_33854;
var G__33867 = count__33827_33855;
var G__33868 = (i__33828_33856 + (1));
seq__33825_33853 = G__33865;
chunk__33826_33854 = G__33866;
count__33827_33855 = G__33867;
i__33828_33856 = G__33868;
continue;
} else {
var temp__5735__auto___33869 = cljs.core.seq(seq__33825_33853);
if(temp__5735__auto___33869){
var seq__33825_33870__$1 = temp__5735__auto___33869;
if(cljs.core.chunked_seq_QMARK_(seq__33825_33870__$1)){
var c__4556__auto___33871 = cljs.core.chunk_first(seq__33825_33870__$1);
var G__33872 = cljs.core.chunk_rest(seq__33825_33870__$1);
var G__33873 = c__4556__auto___33871;
var G__33874 = cljs.core.count(c__4556__auto___33871);
var G__33875 = (0);
seq__33825_33853 = G__33872;
chunk__33826_33854 = G__33873;
count__33827_33855 = G__33874;
i__33828_33856 = G__33875;
continue;
} else {
var dep_33876 = cljs.core.first(seq__33825_33870__$1);
var map__33847_33877 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(js_dependency_index,cljs.core.name(dep_33876));
var map__33847_33878__$1 = (((((!((map__33847_33877 == null))))?(((((map__33847_33877.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33847_33877.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33847_33877):map__33847_33877);
var global_exports_33879 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33847_33878__$1,cljs.core.cst$kw$global_DASH_exports);
sb.append((function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__33849_33880 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__33850_33881 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__33851_33882 = true;
var _STAR_print_fn_STAR__temp_val__33852_33883 = ((function (seq__33825_33853,chunk__33826_33854,count__33827_33855,i__33828_33856,_STAR_print_newline_STAR__orig_val__33849_33880,_STAR_print_fn_STAR__orig_val__33850_33881,_STAR_print_newline_STAR__temp_val__33851_33882,sb__4667__auto__,map__33847_33877,map__33847_33878__$1,global_exports_33879,dep_33876,seq__33825_33870__$1,temp__5735__auto___33869,map__33823,map__33823__$1,js_dependency_index){
return (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});})(seq__33825_33853,chunk__33826_33854,count__33827_33855,i__33828_33856,_STAR_print_newline_STAR__orig_val__33849_33880,_STAR_print_fn_STAR__orig_val__33850_33881,_STAR_print_newline_STAR__temp_val__33851_33882,sb__4667__auto__,map__33847_33877,map__33847_33878__$1,global_exports_33879,dep_33876,seq__33825_33870__$1,temp__5735__auto___33869,map__33823,map__33823__$1,js_dependency_index))
;
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__33851_33882);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__33852_33883);

try{cljs.compiler.emit_global_export(ns_name,global_exports_33879,dep_33876);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__33850_33881);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__33849_33880);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})());


var G__33884 = cljs.core.next(seq__33825_33870__$1);
var G__33885 = null;
var G__33886 = (0);
var G__33887 = (0);
seq__33825_33853 = G__33884;
chunk__33826_33854 = G__33885;
count__33827_33855 = G__33886;
i__33828_33856 = G__33887;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_((function (){var and__4115__auto__ = cljs.core.seq(deps);
if(and__4115__auto__){
return emit_nil_result_QMARK_;
} else {
return and__4115__auto__;
}
})())){
return sb.append("null;");
} else {
return null;
}
});
/**
 * Returns a new function that calls f but discards any return value,
 *   returning nil instead, thus avoiding any inadvertent trampoline continuation
 *   if a function happens to be returned.
 */
cljs.js.trampoline_safe = (function cljs$js$trampoline_safe(f){
return cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.constantly(null),f);
});
cljs.js.analyze_str_STAR_ = (function cljs$js$analyze_str_STAR_(bound_vars,source,name,opts,cb){
var rdr = cljs.tools.reader.reader_types.indexing_push_back_reader.cljs$core$IFn$_invoke$arity$3(source,(1),name);
var cb__$1 = cljs.js.trampoline_safe(cb);
var eof = ({});
var aenv = cljs.analyzer.empty_env();
var the_ns = (function (){var or__4126__auto__ = cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.cst$sym$cljs$user;
}
})();
var bound_vars__$1 = (function (){var G__33890 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([bound_vars,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$_STAR_cljs_DASH_ns_STAR_,the_ns], null)], 0));
if(cljs.core.truth_(cljs.core.cst$kw$source_DASH_map.cljs$core$IFn$_invoke$arity$1(opts))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__33890,cljs.core.cst$kw$_STAR_sm_DASH_data_STAR_,cljs.js.sm_data());
} else {
return G__33890;
}
})();
return cljs.core.trampoline.cljs$core$IFn$_invoke$arity$variadic((function cljs$js$analyze_str_STAR__$_analyze_loop(last_ast,ns){
var _STAR_compiler_STAR__orig_val__33891 = cljs.env._STAR_compiler_STAR_;
var _STAR_cljs_ns_STAR__orig_val__33892 = cljs.analyzer._STAR_cljs_ns_STAR_;
var _STAR_checked_arrays_STAR__orig_val__33893 = cljs.analyzer._STAR_checked_arrays_STAR_;
var _STAR_cljs_static_fns_STAR__orig_val__33894 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
var _STAR_fn_invoke_direct_STAR__orig_val__33895 = cljs.analyzer._STAR_fn_invoke_direct_STAR_;
var _STAR_ns_STAR__orig_val__33896 = cljs.core._STAR_ns_STAR_;
var _STAR_passes_STAR__orig_val__33897 = cljs.analyzer._STAR_passes_STAR_;
var _STAR_alias_map_STAR__orig_val__33898 = cljs.tools.reader._STAR_alias_map_STAR_;
var _STAR_data_readers_STAR__orig_val__33899 = cljs.tools.reader._STAR_data_readers_STAR_;
var resolve_symbol_orig_val__33900 = cljs.tools.reader.resolve_symbol;
var _STAR_source_map_data_STAR__orig_val__33901 = cljs.compiler._STAR_source_map_data_STAR_;
var _STAR_cljs_file_STAR__orig_val__33902 = cljs.analyzer._STAR_cljs_file_STAR_;
var _STAR_compiler_STAR__temp_val__33903 = cljs.core.cst$kw$_STAR_compiler_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
var _STAR_cljs_ns_STAR__temp_val__33904 = ns;
var _STAR_checked_arrays_STAR__temp_val__33905 = cljs.core.cst$kw$checked_DASH_arrays.cljs$core$IFn$_invoke$arity$1(opts);
var _STAR_cljs_static_fns_STAR__temp_val__33906 = cljs.core.cst$kw$static_DASH_fns.cljs$core$IFn$_invoke$arity$1(opts);
var _STAR_fn_invoke_direct_STAR__temp_val__33907 = (function (){var and__4115__auto__ = cljs.core.cst$kw$static_DASH_fns.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.cst$kw$fn_DASH_invoke_DASH_direct.cljs$core$IFn$_invoke$arity$1(opts);
} else {
return and__4115__auto__;
}
})();
var _STAR_ns_STAR__temp_val__33908 = cljs.core.create_ns.cljs$core$IFn$_invoke$arity$1(ns);
var _STAR_passes_STAR__temp_val__33909 = cljs.core.cst$kw$_STAR_passes_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
var _STAR_alias_map_STAR__temp_val__33910 = cljs.js.alias_map(cljs.core.deref(cljs.core.cst$kw$_STAR_compiler_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1)),ns);
var _STAR_data_readers_STAR__temp_val__33911 = cljs.core.cst$kw$_STAR_data_DASH_readers_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
var resolve_symbol_temp_val__33912 = cljs.js.resolve_symbol;
var _STAR_source_map_data_STAR__temp_val__33913 = cljs.core.cst$kw$_STAR_sm_DASH_data_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
var _STAR_cljs_file_STAR__temp_val__33914 = cljs.core.cst$kw$cljs_DASH_file.cljs$core$IFn$_invoke$arity$1(opts);
(cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__temp_val__33903);

(cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR__temp_val__33904);

(cljs.analyzer._STAR_checked_arrays_STAR_ = _STAR_checked_arrays_STAR__temp_val__33905);

(cljs.analyzer._STAR_cljs_static_fns_STAR_ = _STAR_cljs_static_fns_STAR__temp_val__33906);

(cljs.analyzer._STAR_fn_invoke_direct_STAR_ = _STAR_fn_invoke_direct_STAR__temp_val__33907);

(cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__temp_val__33908);

(cljs.analyzer._STAR_passes_STAR_ = _STAR_passes_STAR__temp_val__33909);

(cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__temp_val__33910);

(cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR__temp_val__33911);

(cljs.tools.reader.resolve_symbol = resolve_symbol_temp_val__33912);

(cljs.compiler._STAR_source_map_data_STAR_ = _STAR_source_map_data_STAR__temp_val__33913);

(cljs.analyzer._STAR_cljs_file_STAR_ = _STAR_cljs_file_STAR__temp_val__33914);

try{var res = (function (){try{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,cljs.js.read(eof,rdr)], null);
}catch (e33915){var cause = e33915;
return cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(aenv,["Could not analyze ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),cause));
}})();
if(cljs.core.truth_(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(res))){
return (cb__$1.cljs$core$IFn$_invoke$arity$1 ? cb__$1.cljs$core$IFn$_invoke$arity$1(res) : cb__$1.call(null,res));
} else {
var form = cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(res);
if((!((eof === form)))){
var aenv__$1 = (function (){var G__33916 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(aenv,cljs.core.cst$kw$ns,cljs.analyzer.get_namespace.cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_ns_STAR_));
var G__33916__$1 = (cljs.core.truth_(cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(opts))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__33916,cljs.core.cst$kw$context,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(opts)):G__33916);
if(cljs.core.truth_(cljs.core.cst$kw$def_DASH_emits_DASH_var.cljs$core$IFn$_invoke$arity$1(opts))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__33916__$1,cljs.core.cst$kw$def_DASH_emits_DASH_var,true);
} else {
return G__33916__$1;
}
})();
var res__$1 = (function (){try{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$4(aenv__$1,form,null,opts)], null);
}catch (e33917){var cause = e33917;
return cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(aenv__$1,["Could not analyze ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),cause));
}})();
if(cljs.core.truth_(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(res__$1))){
return (cb__$1.cljs$core$IFn$_invoke$arity$1 ? cb__$1.cljs$core$IFn$_invoke$arity$1(res__$1) : cb__$1.call(null,res__$1));
} else {
var ast = cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(res__$1);
if(cljs.core.truth_((function (){var G__33919 = cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(ast);
var fexpr__33918 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ns_STAR_,null,cljs.core.cst$kw$ns,null], null), null);
return (fexpr__33918.cljs$core$IFn$_invoke$arity$1 ? fexpr__33918.cljs$core$IFn$_invoke$arity$1(G__33919) : fexpr__33918.call(null,G__33919));
})())){
var G__33921 = bound_vars__$1;
var G__33922 = aenv__$1;
var G__33923 = ast;
var G__33924 = opts;
var G__33925 = (function (res__$2){
if(cljs.core.truth_(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(res__$2))){
return (cb__$1.cljs$core$IFn$_invoke$arity$1 ? cb__$1.cljs$core$IFn$_invoke$arity$1(res__$2) : cb__$1.call(null,res__$2));
} else {
return cljs.core.trampoline.cljs$core$IFn$_invoke$arity$variadic(cljs$js$analyze_str_STAR__$_analyze_loop,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ast,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(ast)], 0));
}
});
var fexpr__33920 = cljs.js.trampoline_safe(cljs.js.ns_side_effects);
return (fexpr__33920.cljs$core$IFn$_invoke$arity$5 ? fexpr__33920.cljs$core$IFn$_invoke$arity$5(G__33921,G__33922,G__33923,G__33924,G__33925) : fexpr__33920.call(null,G__33921,G__33922,G__33923,G__33924,G__33925));
} else {
return (function (){
return cljs$js$analyze_str_STAR__$_analyze_loop(ast,ns);
});
}
}
} else {
var G__33926 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,last_ast], null);
return (cb__$1.cljs$core$IFn$_invoke$arity$1 ? cb__$1.cljs$core$IFn$_invoke$arity$1(G__33926) : cb__$1.call(null,G__33926));
}
}
}finally {(cljs.analyzer._STAR_cljs_file_STAR_ = _STAR_cljs_file_STAR__orig_val__33902);

(cljs.compiler._STAR_source_map_data_STAR_ = _STAR_source_map_data_STAR__orig_val__33901);

(cljs.tools.reader.resolve_symbol = resolve_symbol_orig_val__33900);

(cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR__orig_val__33899);

(cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__orig_val__33898);

(cljs.analyzer._STAR_passes_STAR_ = _STAR_passes_STAR__orig_val__33897);

(cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__orig_val__33896);

(cljs.analyzer._STAR_fn_invoke_direct_STAR_ = _STAR_fn_invoke_direct_STAR__orig_val__33895);

(cljs.analyzer._STAR_cljs_static_fns_STAR_ = _STAR_cljs_static_fns_STAR__orig_val__33894);

(cljs.analyzer._STAR_checked_arrays_STAR_ = _STAR_checked_arrays_STAR__orig_val__33893);

(cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR__orig_val__33892);

(cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__orig_val__33891);
}}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null,the_ns], 0));
});
/**
 * Analyze ClojureScript source. The compiler state will be populated with
 * the results of analyzes. The parameters:
 * 
 * state (atom)
 *   the compiler state
 * 
 * source (string)
 *   the ClojureScript source
 * 
 * name (symbol or string)
 *   optional, the name of the source
 * 
 * opts (map)
 *   compilation options.
 * 
 *    :eval             - eval function to invoke, see *eval-fn*
 *    :load             - library resolution function, see *load-fn*
 *    :source-map       - set to true to generate inline source map information
 *    :def-emits-var    - sets whether def (and derived) forms return either a Var
 *                        (if set to true) or the def init value (if false).
 *                        Defaults to false.
 *    :checked-arrays   - if :warn or :error, checks inferred types and values passed
 *                        to aget/aset. Logs for incorrect values if :warn, throws if
 *                        :error. Defaults to false.
 *    :static-fns       - employ static dispatch to specific function arities in
 *                        emitted JavaScript, as opposed to making use of the
 *                        `call` construct. Defaults to false.
 *    :fn-invoke-direct - if `true`, does not generate `.call(null...)` calls for
 *                        unknown functions, but instead direct invokes via
 *                        `f(a0,a1...)`. Defaults to `false`.
 *    :target           - use `:nodejs` if targeting Node.js. Takes no other options
 *                        at the moment.
 *    :ns               - optional, the namespace in which to evaluate the source.
 *    :verbose          - optional, emit details from compiler activity. Defaults to
 *                        false.
 *    :context          - optional, sets the context for the source. Possible values
 *                        are `:expr`, `:statement` and `:return`. Defaults to
 *                        `:expr`.
 * 
 * cb (function)
 *   callback, will be invoked with a map. If successful the map will contain
 *   a key :value, the actual value is not meaningful. If unsuccessful the
 *   map will contain a key :error with an ex-info instance describing the cause
 *   of failure.
 */
cljs.js.analyze_str = (function cljs$js$analyze_str(var_args){
var G__33928 = arguments.length;
switch (G__33928) {
case 3:
return cljs.js.analyze_str.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.js.analyze_str.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.js.analyze_str.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.js.analyze_str.cljs$core$IFn$_invoke$arity$3 = (function (state,source,cb){
return cljs.js.analyze_str.cljs$core$IFn$_invoke$arity$4(state,source,null,cb);
}));

(cljs.js.analyze_str.cljs$core$IFn$_invoke$arity$4 = (function (state,source,name,cb){
return cljs.js.analyze_str.cljs$core$IFn$_invoke$arity$5(state,source,name,null,cb);
}));

(cljs.js.analyze_str.cljs$core$IFn$_invoke$arity$5 = (function (state,source,name,opts,cb){
if(cljs.js.atom_QMARK_(state)){
} else {
throw (new Error("Assert failed: (atom? state)"));
}

if(typeof source === 'string'){
} else {
throw (new Error("Assert failed: (string? source)"));
}

if(cljs.js.valid_name_QMARK_(name)){
} else {
throw (new Error("Assert failed: (valid-name? name)"));
}

if(cljs.js.valid_opts_QMARK_(opts)){
} else {
throw (new Error("Assert failed: (valid-opts? opts)"));
}

if(cljs.core.fn_QMARK_(cb)){
} else {
throw (new Error("Assert failed: (fn? cb)"));
}

return cljs.js.analyze_str_STAR_(new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$_STAR_compiler_STAR_,state,cljs.core.cst$kw$_STAR_data_DASH_readers_STAR_,cljs.tagged_literals._STAR_cljs_data_readers_STAR_,cljs.core.cst$kw$_STAR_passes_STAR_,(function (){var or__4126__auto__ = cljs.core.cst$kw$passes.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.analyzer._STAR_passes_STAR_;
}
})(),cljs.core.cst$kw$_STAR_analyze_DASH_deps_STAR_,cljs.core.cst$kw$analyze_DASH_deps.cljs$core$IFn$_invoke$arity$2(opts,true),cljs.core.cst$kw$_STAR_cljs_DASH_dep_DASH_set_STAR_,cljs.analyzer._STAR_cljs_dep_set_STAR_,cljs.core.cst$kw$_STAR_load_DASH_macros_STAR_,cljs.core.cst$kw$load_DASH_macros.cljs$core$IFn$_invoke$arity$2(opts,true),cljs.core.cst$kw$_STAR_load_DASH_fn_STAR_,(function (){var or__4126__auto__ = cljs.core.cst$kw$load.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.js._STAR_load_fn_STAR_;
}
})(),cljs.core.cst$kw$_STAR_eval_DASH_fn_STAR_,(function (){var or__4126__auto__ = cljs.core.cst$kw$eval.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.js._STAR_eval_fn_STAR_;
}
})()], null),source,name,opts,cb);
}));

(cljs.js.analyze_str.cljs$lang$maxFixedArity = 5);

cljs.js.eval_STAR_ = (function cljs$js$eval_STAR_(bound_vars,form,opts,cb){
var the_ns = (function (){var or__4126__auto__ = cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.cst$sym$cljs$user;
}
})();
var bound_vars__$1 = (function (){var G__33930 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([bound_vars,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$_STAR_cljs_DASH_ns_STAR_,the_ns], null)], 0));
if(cljs.core.truth_(cljs.core.cst$kw$source_DASH_map.cljs$core$IFn$_invoke$arity$1(opts))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__33930,cljs.core.cst$kw$_STAR_sm_DASH_data_STAR_,cljs.js.sm_data());
} else {
return G__33930;
}
})();
cljs.js.clear_fns_BANG_();

var _STAR_compiler_STAR__orig_val__33931 = cljs.env._STAR_compiler_STAR_;
var _STAR_eval_fn_STAR__orig_val__33932 = cljs.js._STAR_eval_fn_STAR_;
var _STAR_cljs_ns_STAR__orig_val__33933 = cljs.analyzer._STAR_cljs_ns_STAR_;
var _STAR_checked_arrays_STAR__orig_val__33934 = cljs.analyzer._STAR_checked_arrays_STAR_;
var _STAR_cljs_static_fns_STAR__orig_val__33935 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
var _STAR_fn_invoke_direct_STAR__orig_val__33936 = cljs.analyzer._STAR_fn_invoke_direct_STAR_;
var _STAR_ns_STAR__orig_val__33937 = cljs.core._STAR_ns_STAR_;
var _STAR_alias_map_STAR__orig_val__33938 = cljs.tools.reader._STAR_alias_map_STAR_;
var _STAR_data_readers_STAR__orig_val__33939 = cljs.tools.reader._STAR_data_readers_STAR_;
var resolve_symbol_orig_val__33940 = cljs.tools.reader.resolve_symbol;
var _STAR_source_map_data_STAR__orig_val__33941 = cljs.compiler._STAR_source_map_data_STAR_;
var _STAR_compiler_STAR__temp_val__33942 = cljs.core.cst$kw$_STAR_compiler_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
var _STAR_eval_fn_STAR__temp_val__33943 = cljs.core.cst$kw$_STAR_eval_DASH_fn_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
var _STAR_cljs_ns_STAR__temp_val__33944 = cljs.core.cst$kw$_STAR_cljs_DASH_ns_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
var _STAR_checked_arrays_STAR__temp_val__33945 = cljs.core.cst$kw$checked_DASH_arrays.cljs$core$IFn$_invoke$arity$1(opts);
var _STAR_cljs_static_fns_STAR__temp_val__33946 = cljs.core.cst$kw$static_DASH_fns.cljs$core$IFn$_invoke$arity$1(opts);
var _STAR_fn_invoke_direct_STAR__temp_val__33947 = (function (){var and__4115__auto__ = cljs.core.cst$kw$static_DASH_fns.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.cst$kw$fn_DASH_invoke_DASH_direct.cljs$core$IFn$_invoke$arity$1(opts);
} else {
return and__4115__auto__;
}
})();
var _STAR_ns_STAR__temp_val__33948 = cljs.core.create_ns.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$_STAR_cljs_DASH_ns_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1));
var _STAR_alias_map_STAR__temp_val__33949 = cljs.js.alias_map(cljs.core.deref(cljs.core.cst$kw$_STAR_compiler_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1)),cljs.core.cst$kw$_STAR_cljs_DASH_ns_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1));
var _STAR_data_readers_STAR__temp_val__33950 = cljs.core.cst$kw$_STAR_data_DASH_readers_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
var resolve_symbol_temp_val__33951 = cljs.js.resolve_symbol;
var _STAR_source_map_data_STAR__temp_val__33952 = cljs.core.cst$kw$_STAR_sm_DASH_data_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
(cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__temp_val__33942);

(cljs.js._STAR_eval_fn_STAR_ = _STAR_eval_fn_STAR__temp_val__33943);

(cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR__temp_val__33944);

(cljs.analyzer._STAR_checked_arrays_STAR_ = _STAR_checked_arrays_STAR__temp_val__33945);

(cljs.analyzer._STAR_cljs_static_fns_STAR_ = _STAR_cljs_static_fns_STAR__temp_val__33946);

(cljs.analyzer._STAR_fn_invoke_direct_STAR_ = _STAR_fn_invoke_direct_STAR__temp_val__33947);

(cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__temp_val__33948);

(cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__temp_val__33949);

(cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR__temp_val__33950);

(cljs.tools.reader.resolve_symbol = resolve_symbol_temp_val__33951);

(cljs.compiler._STAR_source_map_data_STAR_ = _STAR_source_map_data_STAR__temp_val__33952);

try{var aenv = cljs.analyzer.empty_env();
var aenv__$1 = (function (){var G__33953 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(aenv,cljs.core.cst$kw$ns,cljs.analyzer.get_namespace.cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_ns_STAR_));
var G__33953__$1 = (cljs.core.truth_(cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(opts))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__33953,cljs.core.cst$kw$context,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(opts)):G__33953);
if(cljs.core.truth_(cljs.core.cst$kw$def_DASH_emits_DASH_var.cljs$core$IFn$_invoke$arity$1(opts))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__33953__$1,cljs.core.cst$kw$def_DASH_emits_DASH_var,true);
} else {
return G__33953__$1;
}
})();
var res = (function (){try{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$4(aenv__$1,form,null,opts)], null);
}catch (e33954){var cause = e33954;
return cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(aenv__$1,["Could not eval ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(form)].join(''),cause));
}})();
if(cljs.core.truth_(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(res))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res) : cb.call(null,res));
} else {
var ast = cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(res);
var vec__33955 = ((cljs.core.keyword_identical_QMARK_(cljs.core.cst$kw$target.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.cst$kw$nodejs))?(function (){var map__33958 = cljs.core.group_by(cljs.analyzer.node_module_dep_QMARK_,cljs.core.cst$kw$deps.cljs$core$IFn$_invoke$arity$1(ast));
var map__33958__$1 = (((((!((map__33958 == null))))?(((((map__33958.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33958.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33958):map__33958);
var node_libs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33958__$1,true);
var libs_to_load = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33958__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_libs,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ast,cljs.core.cst$kw$deps,libs_to_load)], null);
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,ast], null));
var node_deps = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33955,(0),null);
var ast__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33955,(1),null);
if(cljs.core.truth_((function (){var G__33961 = cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(ast__$1);
var fexpr__33960 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ns_STAR_,null,cljs.core.cst$kw$ns,null], null), null);
return (fexpr__33960.cljs$core$IFn$_invoke$arity$1 ? fexpr__33960.cljs$core$IFn$_invoke$arity$1(G__33961) : fexpr__33960.call(null,G__33961));
})())){
return cljs.js.ns_side_effects.cljs$core$IFn$_invoke$arity$6(true,bound_vars__$1,aenv__$1,ast__$1,opts,(function (res__$1){
if(cljs.core.truth_(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(res__$1))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res__$1) : cb.call(null,res__$1));
} else {
var ns_name = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(ast__$1);
var sb = (new goog.string.StringBuffer());
sb.append((function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__33962_33972 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__33963_33973 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__33964_33974 = true;
var _STAR_print_fn_STAR__temp_val__33965_33975 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__33964_33974);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__33965_33975);

try{cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(["goog.provide(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ns_name)),"\");"].join(''));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__33963_33973);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__33962_33972);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})());

if((node_deps == null)){
} else {
cljs.js.node_side_effects(bound_vars__$1,sb,node_deps,ns_name,cljs.core.cst$kw$def_DASH_emits_DASH_var.cljs$core$IFn$_invoke$arity$1(opts));
}

cljs.js.global_exports_side_effects(bound_vars__$1,sb,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.dep_has_global_exports_QMARK_,cljs.core.cst$kw$deps.cljs$core$IFn$_invoke$arity$1(ast__$1)),ns_name,cljs.core.cst$kw$def_DASH_emits_DASH_var.cljs$core$IFn$_invoke$arity$1(opts));

var G__33966 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,(cljs.js._STAR_eval_fn_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.js._STAR_eval_fn_STAR_.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$source,sb.toString()], null)) : cljs.js._STAR_eval_fn_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$source,sb.toString()], null)))], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__33966) : cb.call(null,G__33966));
}
}));
} else {
var src = (function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__33967_33976 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__33968_33977 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__33969_33978 = true;
var _STAR_print_fn_STAR__temp_val__33970_33979 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__33969_33978);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__33970_33979);

try{cljs.compiler.emit(ast__$1);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__33968_33977);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__33967_33976);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})();
var G__33971 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,(cljs.js._STAR_eval_fn_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.js._STAR_eval_fn_STAR_.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$source,src], null)) : cljs.js._STAR_eval_fn_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$source,src], null)))], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__33971) : cb.call(null,G__33971));
}
}
}finally {(cljs.compiler._STAR_source_map_data_STAR_ = _STAR_source_map_data_STAR__orig_val__33941);

(cljs.tools.reader.resolve_symbol = resolve_symbol_orig_val__33940);

(cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR__orig_val__33939);

(cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__orig_val__33938);

(cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__orig_val__33937);

(cljs.analyzer._STAR_fn_invoke_direct_STAR_ = _STAR_fn_invoke_direct_STAR__orig_val__33936);

(cljs.analyzer._STAR_cljs_static_fns_STAR_ = _STAR_cljs_static_fns_STAR__orig_val__33935);

(cljs.analyzer._STAR_checked_arrays_STAR_ = _STAR_checked_arrays_STAR__orig_val__33934);

(cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR__orig_val__33933);

(cljs.js._STAR_eval_fn_STAR_ = _STAR_eval_fn_STAR__orig_val__33932);

(cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__orig_val__33931);
}});
/**
 * Evaluate a single ClojureScript form. The parameters:
 * 
 * state (atom)
 *   the compiler state
 * 
 * form (s-expr)
 *   the ClojureScript source
 * 
 * opts (map)
 *   compilation options.
 * 
 *    :eval             - eval function to invoke, see *eval-fn*
 *    :load             - library resolution function, see *load-fn*
 *    :source-map       - set to true to generate inline source map information
 *    :def-emits-var    - sets whether def (and derived) forms return either a Var
 *                        (if set to true) or the def init value (if false). Default
 *                        is false.
 *    :checked-arrays   - if :warn or :error, checks inferred types and values passed
 *                        to aget/aset. Logs for incorrect values if :warn, throws if
 *                        :error. Defaults to false.
 *    :static-fns       - employ static dispatch to specific function arities in
 *                        emitted JavaScript, as opposed to making use of the
 *                        `call` construct. Defaults to false.
 *    :fn-invoke-direct - if `true`, does not generate `.call(null...)` calls for
 *                        unknown functions, but instead direct invokes via
 *                        `f(a0,a1...)`. Defaults to `false`.
 *    :target           - use `:nodejs` if targeting Node.js. Takes no other options
 *                        at the moment.
 *    :ns               - optional, the namespace in which to evaluate the source.
 *    :verbose          - optional, emit details from compiler activity. Defaults to
 *                        false.
 *    :context          - optional, sets the context for the source. Possible values
 *                        are `:expr`, `:statement` and `:return`. Defaults to
 *                        `:expr`.
 * 
 * cb (function)
 *   callback, will be invoked with a map. If successful the map will contain
 *   a key :value with the result of evalution. If unsuccessful the map will
 *   contain a key :error with an ex-info instance describing the cause of
 *   failure.
 */
cljs.js.eval = (function cljs$js$eval(var_args){
var G__33981 = arguments.length;
switch (G__33981) {
case 3:
return cljs.js.eval.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.js.eval.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.js.eval.cljs$core$IFn$_invoke$arity$3 = (function (state,form,cb){
return cljs.js.eval.cljs$core$IFn$_invoke$arity$4(state,form,null,cb);
}));

(cljs.js.eval.cljs$core$IFn$_invoke$arity$4 = (function (state,form,opts,cb){
return cljs.js.eval_STAR_(new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$_STAR_compiler_STAR_,state,cljs.core.cst$kw$_STAR_data_DASH_readers_STAR_,cljs.tagged_literals._STAR_cljs_data_readers_STAR_,cljs.core.cst$kw$_STAR_analyze_DASH_deps_STAR_,cljs.core.cst$kw$analyze_DASH_deps.cljs$core$IFn$_invoke$arity$2(opts,true),cljs.core.cst$kw$_STAR_cljs_DASH_dep_DASH_set_STAR_,cljs.analyzer._STAR_cljs_dep_set_STAR_,cljs.core.cst$kw$_STAR_load_DASH_macros_STAR_,cljs.core.cst$kw$load_DASH_macros.cljs$core$IFn$_invoke$arity$2(opts,true),cljs.core.cst$kw$_STAR_load_DASH_fn_STAR_,(function (){var or__4126__auto__ = cljs.core.cst$kw$load.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.js._STAR_load_fn_STAR_;
}
})(),cljs.core.cst$kw$_STAR_eval_DASH_fn_STAR_,(function (){var or__4126__auto__ = cljs.core.cst$kw$eval.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.js._STAR_eval_fn_STAR_;
}
})()], null),form,opts,cb);
}));

(cljs.js.eval.cljs$lang$maxFixedArity = 4);

cljs.js.compile_str_STAR_ = (function cljs$js$compile_str_STAR_(bound_vars,source,name,opts,cb){
var rdr = cljs.tools.reader.reader_types.indexing_push_back_reader.cljs$core$IFn$_invoke$arity$3(source,(1),name);
var cb__$1 = cljs.js.trampoline_safe(cb);
var eof = ({});
var aenv = cljs.analyzer.empty_env();
var sb = (new goog.string.StringBuffer());
var the_ns = (function (){var or__4126__auto__ = cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.cst$sym$cljs$user;
}
})();
var bound_vars__$1 = (function (){var G__33985 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([bound_vars,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$_STAR_cljs_DASH_ns_STAR_,the_ns], null)], 0));
if(cljs.core.truth_(cljs.core.cst$kw$source_DASH_map.cljs$core$IFn$_invoke$arity$1(opts))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__33985,cljs.core.cst$kw$_STAR_sm_DASH_data_STAR_,cljs.js.sm_data());
} else {
return G__33985;
}
})();
return cljs.core.trampoline.cljs$core$IFn$_invoke$arity$variadic((function cljs$js$compile_str_STAR__$_compile_loop(ns){
var _STAR_compiler_STAR__orig_val__33986 = cljs.env._STAR_compiler_STAR_;
var _STAR_eval_fn_STAR__orig_val__33987 = cljs.js._STAR_eval_fn_STAR_;
var _STAR_cljs_ns_STAR__orig_val__33988 = cljs.analyzer._STAR_cljs_ns_STAR_;
var _STAR_checked_arrays_STAR__orig_val__33989 = cljs.analyzer._STAR_checked_arrays_STAR_;
var _STAR_cljs_static_fns_STAR__orig_val__33990 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
var _STAR_fn_invoke_direct_STAR__orig_val__33991 = cljs.analyzer._STAR_fn_invoke_direct_STAR_;
var _STAR_ns_STAR__orig_val__33992 = cljs.core._STAR_ns_STAR_;
var _STAR_alias_map_STAR__orig_val__33993 = cljs.tools.reader._STAR_alias_map_STAR_;
var _STAR_data_readers_STAR__orig_val__33994 = cljs.tools.reader._STAR_data_readers_STAR_;
var resolve_symbol_orig_val__33995 = cljs.tools.reader.resolve_symbol;
var _STAR_source_map_data_STAR__orig_val__33996 = cljs.compiler._STAR_source_map_data_STAR_;
var _STAR_compiler_STAR__temp_val__33997 = cljs.core.cst$kw$_STAR_compiler_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
var _STAR_eval_fn_STAR__temp_val__33998 = cljs.core.cst$kw$_STAR_eval_DASH_fn_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
var _STAR_cljs_ns_STAR__temp_val__33999 = ns;
var _STAR_checked_arrays_STAR__temp_val__34000 = cljs.core.cst$kw$checked_DASH_arrays.cljs$core$IFn$_invoke$arity$1(opts);
var _STAR_cljs_static_fns_STAR__temp_val__34001 = cljs.core.cst$kw$static_DASH_fns.cljs$core$IFn$_invoke$arity$1(opts);
var _STAR_fn_invoke_direct_STAR__temp_val__34002 = (function (){var and__4115__auto__ = cljs.core.cst$kw$static_DASH_fns.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.cst$kw$fn_DASH_invoke_DASH_direct.cljs$core$IFn$_invoke$arity$1(opts);
} else {
return and__4115__auto__;
}
})();
var _STAR_ns_STAR__temp_val__34003 = cljs.core.create_ns.cljs$core$IFn$_invoke$arity$1(ns);
var _STAR_alias_map_STAR__temp_val__34004 = cljs.js.alias_map(cljs.core.deref(cljs.core.cst$kw$_STAR_compiler_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1)),ns);
var _STAR_data_readers_STAR__temp_val__34005 = cljs.core.cst$kw$_STAR_data_DASH_readers_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
var resolve_symbol_temp_val__34006 = cljs.js.resolve_symbol;
var _STAR_source_map_data_STAR__temp_val__34007 = cljs.core.cst$kw$_STAR_sm_DASH_data_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
(cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__temp_val__33997);

(cljs.js._STAR_eval_fn_STAR_ = _STAR_eval_fn_STAR__temp_val__33998);

(cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR__temp_val__33999);

(cljs.analyzer._STAR_checked_arrays_STAR_ = _STAR_checked_arrays_STAR__temp_val__34000);

(cljs.analyzer._STAR_cljs_static_fns_STAR_ = _STAR_cljs_static_fns_STAR__temp_val__34001);

(cljs.analyzer._STAR_fn_invoke_direct_STAR_ = _STAR_fn_invoke_direct_STAR__temp_val__34002);

(cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__temp_val__34003);

(cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__temp_val__34004);

(cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR__temp_val__34005);

(cljs.tools.reader.resolve_symbol = resolve_symbol_temp_val__34006);

(cljs.compiler._STAR_source_map_data_STAR_ = _STAR_source_map_data_STAR__temp_val__34007);

try{var res = (function (){try{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,cljs.js.read(eof,rdr)], null);
}catch (e34008){var cause = e34008;
return cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(aenv,["Could not compile ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),cause));
}})();
if(cljs.core.truth_(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(res))){
return (cb__$1.cljs$core$IFn$_invoke$arity$1 ? cb__$1.cljs$core$IFn$_invoke$arity$1(res) : cb__$1.call(null,res));
} else {
var form = cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(res);
if((!((eof === form)))){
var aenv__$1 = (function (){var G__34009 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(aenv,cljs.core.cst$kw$ns,cljs.analyzer.get_namespace.cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_ns_STAR_));
var G__34009__$1 = (cljs.core.truth_(cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(opts))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34009,cljs.core.cst$kw$context,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(opts)):G__34009);
if(cljs.core.truth_(cljs.core.cst$kw$def_DASH_emits_DASH_var.cljs$core$IFn$_invoke$arity$1(opts))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34009__$1,cljs.core.cst$kw$def_DASH_emits_DASH_var,true);
} else {
return G__34009__$1;
}
})();
var res__$1 = (function (){try{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$4(aenv__$1,form,null,opts)], null);
}catch (e34010){var cause = e34010;
return cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(aenv__$1,["Could not compile ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),cause));
}})();
if(cljs.core.truth_(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(res__$1))){
return (cb__$1.cljs$core$IFn$_invoke$arity$1 ? cb__$1.cljs$core$IFn$_invoke$arity$1(res__$1) : cb__$1.call(null,res__$1));
} else {
var ast = cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(res__$1);
var vec__34011 = ((cljs.core.keyword_identical_QMARK_(cljs.core.cst$kw$target.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.cst$kw$nodejs))?(function (){var map__34014 = cljs.core.group_by(cljs.analyzer.node_module_dep_QMARK_,cljs.core.cst$kw$deps.cljs$core$IFn$_invoke$arity$1(ast));
var map__34014__$1 = (((((!((map__34014 == null))))?(((((map__34014.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34014.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34014):map__34014);
var node_libs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34014__$1,true);
var libs_to_load = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34014__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_libs,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ast,cljs.core.cst$kw$deps,libs_to_load)], null);
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,ast], null));
var node_deps = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34011,(0),null);
var ast__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34011,(1),null);
if(cljs.core.truth_((function (){var G__34017 = cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(ast__$1);
var fexpr__34016 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ns_STAR_,null,cljs.core.cst$kw$ns,null], null), null);
return (fexpr__34016.cljs$core$IFn$_invoke$arity$1 ? fexpr__34016.cljs$core$IFn$_invoke$arity$1(G__34017) : fexpr__34016.call(null,G__34017));
})())){
var G__34019 = bound_vars__$1;
var G__34020 = aenv__$1;
var G__34021 = ast__$1;
var G__34022 = opts;
var G__34023 = (function (res__$2){
if(cljs.core.truth_(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(res__$2))){
return (cb__$1.cljs$core$IFn$_invoke$arity$1 ? cb__$1.cljs$core$IFn$_invoke$arity$1(res__$2) : cb__$1.call(null,res__$2));
} else {
var ns_name = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(ast__$1);
sb.append((function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__34024_34033 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__34025_34034 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__34026_34035 = true;
var _STAR_print_fn_STAR__temp_val__34027_34036 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__34026_34035);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__34027_34036);

try{cljs.compiler.emit(cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(res__$2));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__34025_34034);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__34024_34033);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})());

if((node_deps == null)){
} else {
cljs.js.node_side_effects(bound_vars__$1,sb,node_deps,ns_name,cljs.core.cst$kw$def_DASH_emits_DASH_var.cljs$core$IFn$_invoke$arity$1(opts));
}

return cljs.core.trampoline.cljs$core$IFn$_invoke$arity$variadic(cljs$js$compile_str_STAR__$_compile_loop,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(ast__$1)], 0));
}
});
var fexpr__34018 = cljs.js.trampoline_safe(cljs.js.ns_side_effects);
return (fexpr__34018.cljs$core$IFn$_invoke$arity$5 ? fexpr__34018.cljs$core$IFn$_invoke$arity$5(G__34019,G__34020,G__34021,G__34022,G__34023) : fexpr__34018.call(null,G__34019,G__34020,G__34021,G__34022,G__34023));
} else {
sb.append((function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__34028_34037 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__34029_34038 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__34030_34039 = true;
var _STAR_print_fn_STAR__temp_val__34031_34040 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__34030_34039);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__34031_34040);

try{cljs.compiler.emit(ast__$1);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__34029_34038);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__34028_34037);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})());

return (function (){
return cljs$js$compile_str_STAR__$_compile_loop(ns);
});
}
}
} else {
if(cljs.core.truth_(cljs.core.cst$kw$source_DASH_map.cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.append_source_map(cljs.env._STAR_compiler_STAR_,name,source,sb,cljs.core.deref(cljs.compiler._STAR_source_map_data_STAR_),opts);
} else {
}

var G__34032 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,sb.toString()], null);
return (cb__$1.cljs$core$IFn$_invoke$arity$1 ? cb__$1.cljs$core$IFn$_invoke$arity$1(G__34032) : cb__$1.call(null,G__34032));
}
}
}finally {(cljs.compiler._STAR_source_map_data_STAR_ = _STAR_source_map_data_STAR__orig_val__33996);

(cljs.tools.reader.resolve_symbol = resolve_symbol_orig_val__33995);

(cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR__orig_val__33994);

(cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__orig_val__33993);

(cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__orig_val__33992);

(cljs.analyzer._STAR_fn_invoke_direct_STAR_ = _STAR_fn_invoke_direct_STAR__orig_val__33991);

(cljs.analyzer._STAR_cljs_static_fns_STAR_ = _STAR_cljs_static_fns_STAR__orig_val__33990);

(cljs.analyzer._STAR_checked_arrays_STAR_ = _STAR_checked_arrays_STAR__orig_val__33989);

(cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR__orig_val__33988);

(cljs.js._STAR_eval_fn_STAR_ = _STAR_eval_fn_STAR__orig_val__33987);

(cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__orig_val__33986);
}}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([the_ns], 0));
});
/**
 * Compile ClojureScript source into JavaScript. The parameters:
 * 
 * state (atom)
 *   the compiler state
 * 
 * source (string)
 *   the ClojureScript source
 * 
 * name (symbol or string)
 *   optional, the name of the source - used as key in :source-maps
 * 
 * opts (map)
 *   compilation options.
 * 
 *    :eval             - eval function to invoke, see *eval-fn*
 *    :load             - library resolution function, see *load-fn*
 *    :source-map       - set to true to generate inline source map information
 *    :def-emits-var    - sets whether def (and derived) forms return either a Var
 *                        (if set to true) or the def init value (if false). Default
 *                        is false.
 *    :checked-arrays   - if :warn or :error, checks inferred types and values passed
 *                        to aget/aset. Logs for incorrect values if :warn, throws if
 *                        :error. Defaults to false.
 *    :static-fns       - employ static dispatch to specific function arities in
 *                        emitted JavaScript, as opposed to making use of the
 *                        `call` construct. Defaults to false.
 *    :fn-invoke-direct - if `true`, does not generate `.call(null...)` calls for
 *                        unknown functions, but instead direct invokes via
 *                        `f(a0,a1...)`. Defaults to `false`.
 *    :target           - use `:nodejs` if targeting Node.js. Takes no other options
 *                        at the moment.
 *    :ns               - optional, the namespace in which to evaluate the source.
 *    :verbose          - optional, emit details from compiler activity. Defaults to
 *                        false.
 *    :context          - optional, sets the context for the source. Possible values
 *                        are `:expr`, `:statement` and `:return`. Defaults to
 *                        `:expr`.
 * 
 * cb (function)
 *   callback, will be invoked with a map. If successful the map will contain
 *   a key :value with the compilation result (string). If unsuccessful the map
 *   will contain a key :error with an ex-info instance describing the cause
 *   of failure.
 */
cljs.js.compile_str = (function cljs$js$compile_str(var_args){
var G__34042 = arguments.length;
switch (G__34042) {
case 3:
return cljs.js.compile_str.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.js.compile_str.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.js.compile_str.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.js.compile_str.cljs$core$IFn$_invoke$arity$3 = (function (state,source,cb){
return cljs.js.compile_str.cljs$core$IFn$_invoke$arity$4(state,source,null,cb);
}));

(cljs.js.compile_str.cljs$core$IFn$_invoke$arity$4 = (function (state,source,name,cb){
return cljs.js.compile_str.cljs$core$IFn$_invoke$arity$5(state,source,name,null,cb);
}));

(cljs.js.compile_str.cljs$core$IFn$_invoke$arity$5 = (function (state,source,name,opts,cb){
if(cljs.js.atom_QMARK_(state)){
} else {
throw (new Error("Assert failed: (atom? state)"));
}

if(typeof source === 'string'){
} else {
throw (new Error("Assert failed: (string? source)"));
}

if(cljs.js.valid_name_QMARK_(name)){
} else {
throw (new Error("Assert failed: (valid-name? name)"));
}

if(cljs.js.valid_opts_QMARK_(opts)){
} else {
throw (new Error("Assert failed: (valid-opts? opts)"));
}

if(cljs.core.fn_QMARK_(cb)){
} else {
throw (new Error("Assert failed: (fn? cb)"));
}

return cljs.js.compile_str_STAR_(new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$_STAR_compiler_STAR_,state,cljs.core.cst$kw$_STAR_data_DASH_readers_STAR_,cljs.tagged_literals._STAR_cljs_data_readers_STAR_,cljs.core.cst$kw$_STAR_cljs_DASH_dep_DASH_set_STAR_,cljs.analyzer._STAR_cljs_dep_set_STAR_,cljs.core.cst$kw$_STAR_analyze_DASH_deps_STAR_,cljs.core.cst$kw$analyze_DASH_deps.cljs$core$IFn$_invoke$arity$2(opts,true),cljs.core.cst$kw$_STAR_load_DASH_macros_STAR_,cljs.core.cst$kw$load_DASH_macros.cljs$core$IFn$_invoke$arity$2(opts,true),cljs.core.cst$kw$_STAR_load_DASH_fn_STAR_,(function (){var or__4126__auto__ = cljs.core.cst$kw$load.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.js._STAR_load_fn_STAR_;
}
})(),cljs.core.cst$kw$_STAR_eval_DASH_fn_STAR_,(function (){var or__4126__auto__ = cljs.core.cst$kw$eval.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.js._STAR_eval_fn_STAR_;
}
})(),cljs.core.cst$kw$_STAR_sm_DASH_data_STAR_,(cljs.core.truth_(cljs.core.cst$kw$source_DASH_map.cljs$core$IFn$_invoke$arity$1(opts))?cljs.js.sm_data():null)], null),source,name,opts,cb);
}));

(cljs.js.compile_str.cljs$lang$maxFixedArity = 5);

cljs.js.eval_str_STAR_ = (function cljs$js$eval_str_STAR_(bound_vars,source,name,opts,cb){
var rdr = cljs.tools.reader.reader_types.indexing_push_back_reader.cljs$core$IFn$_invoke$arity$3(source,(1),name);
var cb__$1 = cljs.js.trampoline_safe(cb);
var eof = ({});
var aenv = cljs.analyzer.empty_env();
var sb = (new goog.string.StringBuffer());
var the_ns = (function (){var or__4126__auto__ = cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.cst$sym$cljs$user;
}
})();
var bound_vars__$1 = (function (){var G__34046 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([bound_vars,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$_STAR_cljs_DASH_ns_STAR_,the_ns], null)], 0));
if(cljs.core.truth_(cljs.core.cst$kw$source_DASH_map.cljs$core$IFn$_invoke$arity$1(opts))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34046,cljs.core.cst$kw$_STAR_sm_DASH_data_STAR_,cljs.js.sm_data());
} else {
return G__34046;
}
})();
var aname = (function (){var G__34047 = name;
if(cljs.core.truth_(cljs.core.cst$kw$macros_DASH_ns.cljs$core$IFn$_invoke$arity$1(opts))){
return cljs.analyzer.macro_ns_name(G__34047);
} else {
return G__34047;
}
})();
if(cljs.core.truth_(cljs.core.cst$kw$verbose.cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Evaluating",name], 0));
} else {
}

cljs.js.clear_fns_BANG_();

return cljs.core.trampoline.cljs$core$IFn$_invoke$arity$variadic((function cljs$js$eval_str_STAR__$_compile_loop(ns){
var _STAR_compiler_STAR__orig_val__34048 = cljs.env._STAR_compiler_STAR_;
var _STAR_eval_fn_STAR__orig_val__34049 = cljs.js._STAR_eval_fn_STAR_;
var _STAR_cljs_ns_STAR__orig_val__34050 = cljs.analyzer._STAR_cljs_ns_STAR_;
var _STAR_checked_arrays_STAR__orig_val__34051 = cljs.analyzer._STAR_checked_arrays_STAR_;
var _STAR_cljs_static_fns_STAR__orig_val__34052 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
var _STAR_fn_invoke_direct_STAR__orig_val__34053 = cljs.analyzer._STAR_fn_invoke_direct_STAR_;
var _STAR_ns_STAR__orig_val__34054 = cljs.core._STAR_ns_STAR_;
var _STAR_alias_map_STAR__orig_val__34055 = cljs.tools.reader._STAR_alias_map_STAR_;
var _STAR_data_readers_STAR__orig_val__34056 = cljs.tools.reader._STAR_data_readers_STAR_;
var resolve_symbol_orig_val__34057 = cljs.tools.reader.resolve_symbol;
var _STAR_source_map_data_STAR__orig_val__34058 = cljs.compiler._STAR_source_map_data_STAR_;
var _STAR_cljs_file_STAR__orig_val__34059 = cljs.analyzer._STAR_cljs_file_STAR_;
var _STAR_compiler_STAR__temp_val__34060 = cljs.core.cst$kw$_STAR_compiler_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
var _STAR_eval_fn_STAR__temp_val__34061 = cljs.core.cst$kw$_STAR_eval_DASH_fn_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
var _STAR_cljs_ns_STAR__temp_val__34062 = ns;
var _STAR_checked_arrays_STAR__temp_val__34063 = cljs.core.cst$kw$checked_DASH_arrays.cljs$core$IFn$_invoke$arity$1(opts);
var _STAR_cljs_static_fns_STAR__temp_val__34064 = cljs.core.cst$kw$static_DASH_fns.cljs$core$IFn$_invoke$arity$1(opts);
var _STAR_fn_invoke_direct_STAR__temp_val__34065 = (function (){var and__4115__auto__ = cljs.core.cst$kw$static_DASH_fns.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.cst$kw$fn_DASH_invoke_DASH_direct.cljs$core$IFn$_invoke$arity$1(opts);
} else {
return and__4115__auto__;
}
})();
var _STAR_ns_STAR__temp_val__34066 = cljs.core.create_ns.cljs$core$IFn$_invoke$arity$1(ns);
var _STAR_alias_map_STAR__temp_val__34067 = cljs.js.alias_map(cljs.core.deref(cljs.core.cst$kw$_STAR_compiler_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1)),ns);
var _STAR_data_readers_STAR__temp_val__34068 = cljs.core.cst$kw$_STAR_data_DASH_readers_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
var resolve_symbol_temp_val__34069 = cljs.js.resolve_symbol;
var _STAR_source_map_data_STAR__temp_val__34070 = cljs.core.cst$kw$_STAR_sm_DASH_data_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
var _STAR_cljs_file_STAR__temp_val__34071 = cljs.core.cst$kw$cljs_DASH_file.cljs$core$IFn$_invoke$arity$1(opts);
(cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__temp_val__34060);

(cljs.js._STAR_eval_fn_STAR_ = _STAR_eval_fn_STAR__temp_val__34061);

(cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR__temp_val__34062);

(cljs.analyzer._STAR_checked_arrays_STAR_ = _STAR_checked_arrays_STAR__temp_val__34063);

(cljs.analyzer._STAR_cljs_static_fns_STAR_ = _STAR_cljs_static_fns_STAR__temp_val__34064);

(cljs.analyzer._STAR_fn_invoke_direct_STAR_ = _STAR_fn_invoke_direct_STAR__temp_val__34065);

(cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__temp_val__34066);

(cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__temp_val__34067);

(cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR__temp_val__34068);

(cljs.tools.reader.resolve_symbol = resolve_symbol_temp_val__34069);

(cljs.compiler._STAR_source_map_data_STAR_ = _STAR_source_map_data_STAR__temp_val__34070);

(cljs.analyzer._STAR_cljs_file_STAR_ = _STAR_cljs_file_STAR__temp_val__34071);

try{var res = (function (){try{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,cljs.js.read(eof,rdr)], null);
}catch (e34072){var cause = e34072;
return cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(aenv,["Could not eval ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),cause));
}})();
if(cljs.core.truth_(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(res))){
return (cb__$1.cljs$core$IFn$_invoke$arity$1 ? cb__$1.cljs$core$IFn$_invoke$arity$1(res) : cb__$1.call(null,res));
} else {
var form = cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(res);
if((!((eof === form)))){
var aenv__$1 = (function (){var G__34073 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(aenv,cljs.core.cst$kw$ns,cljs.analyzer.get_namespace.cljs$core$IFn$_invoke$arity$1(ns));
var G__34073__$1 = (cljs.core.truth_(cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(opts))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34073,cljs.core.cst$kw$context,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(opts)):G__34073);
if(cljs.core.truth_(cljs.core.cst$kw$def_DASH_emits_DASH_var.cljs$core$IFn$_invoke$arity$1(opts))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34073__$1,cljs.core.cst$kw$def_DASH_emits_DASH_var,true);
} else {
return G__34073__$1;
}
})();
var res__$1 = (function (){try{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$4(aenv__$1,form,null,opts)], null);
}catch (e34074){var cause = e34074;
return cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(aenv__$1,["Could not eval ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),cause));
}})();
if(cljs.core.truth_(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(res__$1))){
return (cb__$1.cljs$core$IFn$_invoke$arity$1 ? cb__$1.cljs$core$IFn$_invoke$arity$1(res__$1) : cb__$1.call(null,res__$1));
} else {
var ast = cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(res__$1);
var ns_SINGLEQUOTE_ = cljs.analyzer._STAR_cljs_ns_STAR_;
var vec__34075 = ((cljs.core.keyword_identical_QMARK_(cljs.core.cst$kw$target.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.cst$kw$nodejs))?(function (){var map__34078 = cljs.core.group_by(cljs.analyzer.node_module_dep_QMARK_,cljs.core.cst$kw$deps.cljs$core$IFn$_invoke$arity$1(ast));
var map__34078__$1 = (((((!((map__34078 == null))))?(((((map__34078.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34078.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34078):map__34078);
var node_libs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34078__$1,true);
var libs_to_load = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34078__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_libs,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ast,cljs.core.cst$kw$deps,libs_to_load)], null);
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,ast], null));
var node_deps = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34075,(0),null);
var ast__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34075,(1),null);
if(cljs.core.truth_((function (){var G__34081 = cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(ast__$1);
var fexpr__34080 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ns_STAR_,null,cljs.core.cst$kw$ns,null], null), null);
return (fexpr__34080.cljs$core$IFn$_invoke$arity$1 ? fexpr__34080.cljs$core$IFn$_invoke$arity$1(G__34081) : fexpr__34080.call(null,G__34081));
})())){
sb.append((function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__34082_34101 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__34083_34102 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__34084_34103 = true;
var _STAR_print_fn_STAR__temp_val__34085_34104 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__34084_34103);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__34085_34104);

try{cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(["goog.provide(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(ast__$1))),"\");"].join(''));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__34083_34102);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__34082_34101);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})());

var G__34087 = true;
var G__34088 = bound_vars__$1;
var G__34089 = aenv__$1;
var G__34090 = ast__$1;
var G__34091 = opts;
var G__34092 = (function (res__$2){
if(cljs.core.truth_(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(res__$2))){
return (cb__$1.cljs$core$IFn$_invoke$arity$1 ? cb__$1.cljs$core$IFn$_invoke$arity$1(res__$2) : cb__$1.call(null,res__$2));
} else {
var ns_name = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(ast__$1);
if((node_deps == null)){
} else {
cljs.js.node_side_effects(bound_vars__$1,sb,node_deps,ns_name,cljs.core.cst$kw$def_DASH_emits_DASH_var.cljs$core$IFn$_invoke$arity$1(opts));
}

cljs.js.global_exports_side_effects(bound_vars__$1,sb,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.dep_has_global_exports_QMARK_,cljs.core.cst$kw$deps.cljs$core$IFn$_invoke$arity$1(ast__$1)),ns_name,cljs.core.cst$kw$def_DASH_emits_DASH_var.cljs$core$IFn$_invoke$arity$1(opts));

return cljs.core.trampoline.cljs$core$IFn$_invoke$arity$variadic(cljs$js$eval_str_STAR__$_compile_loop,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ns_SINGLEQUOTE_], 0));
}
});
var fexpr__34086 = cljs.js.trampoline_safe(cljs.js.ns_side_effects);
return (fexpr__34086.cljs$core$IFn$_invoke$arity$6 ? fexpr__34086.cljs$core$IFn$_invoke$arity$6(G__34087,G__34088,G__34089,G__34090,G__34091,G__34092) : fexpr__34086.call(null,G__34087,G__34088,G__34089,G__34090,G__34091,G__34092));
} else {
var env__26377__auto___34105 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(cljs.core.cst$kw$_STAR_compiler_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1)),cljs.core.cst$kw$options,opts);
var env__26377__auto___34106__$1 = ((cljs.core.map_QMARK_(env__26377__auto___34105))?cljs.core.atom.cljs$core$IFn$_invoke$arity$1(env__26377__auto___34105):(((((env__26377__auto___34105 instanceof cljs.core.Atom)) && (cljs.core.map_QMARK_(cljs.core.deref(env__26377__auto___34105)))))?env__26377__auto___34105:(function(){throw (new Error(["Compiler environment must be a map or atom containing a map, not ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(env__26377__auto___34105))].join('')))})()
));
var _STAR_compiler_STAR__orig_val__34093_34107 = cljs.env._STAR_compiler_STAR_;
var _STAR_compiler_STAR__temp_val__34094_34108 = env__26377__auto___34106__$1;
(cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__temp_val__34094_34108);

try{sb.append((function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__34095_34109 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__34096_34110 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__34097_34111 = true;
var _STAR_print_fn_STAR__temp_val__34098_34112 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__34097_34111);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__34098_34112);

try{cljs.compiler.emit(ast__$1);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__34096_34110);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__34095_34109);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})());
}finally {(cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__orig_val__34093_34107);
}
return (function (){
return cljs$js$eval_str_STAR__$_compile_loop(ns_SINGLEQUOTE_);
});
}
}
} else {
if(cljs.core.truth_(cljs.core.cst$kw$source_DASH_map.cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.append_source_map(cljs.env._STAR_compiler_STAR_,aname,source,sb,cljs.core.deref(cljs.compiler._STAR_source_map_data_STAR_),opts);
} else {
}

if((aname instanceof cljs.core.Symbol)){
cljs.analyzer.dump_specs(aname);
} else {
}

var js_source = sb.toString();
var evalm = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$lang,cljs.core.cst$kw$clj,cljs.core.cst$kw$name,name,cljs.core.cst$kw$path,cljs.js.ns__GT_relpath(name),cljs.core.cst$kw$source,js_source,cljs.core.cst$kw$cache,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,aname], null))], null);
var complete = (function (res__$1){
if(cljs.core.truth_(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(res__$1))){
return (cb__$1.cljs$core$IFn$_invoke$arity$1 ? cb__$1.cljs$core$IFn$_invoke$arity$1(res__$1) : cb__$1.call(null,res__$1));
} else {
if(cljs.core.truth_(cljs.core.cst$kw$verbose.cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([js_source], 0));
} else {
}

var res__$2 = (function (){try{return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ns,ns,cljs.core.cst$kw$value,(cljs.js._STAR_eval_fn_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.js._STAR_eval_fn_STAR_.cljs$core$IFn$_invoke$arity$1(evalm) : cljs.js._STAR_eval_fn_STAR_.call(null,evalm))], null);
}catch (e34099){var cause = e34099;
return cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(aenv,"ERROR",cause));
}})();
return (cb__$1.cljs$core$IFn$_invoke$arity$1 ? cb__$1.cljs$core$IFn$_invoke$arity$1(res__$2) : cb__$1.call(null,res__$2));
}
});
var temp__5733__auto__ = cljs.core.cst$kw$cache_DASH_source.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__5733__auto__)){
var f = temp__5733__auto__;
var fexpr__34100 = cljs.js.trampoline_safe(f);
return (fexpr__34100.cljs$core$IFn$_invoke$arity$2 ? fexpr__34100.cljs$core$IFn$_invoke$arity$2(evalm,complete) : fexpr__34100.call(null,evalm,complete));
} else {
return complete(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,null], null));
}
}
}
}finally {(cljs.analyzer._STAR_cljs_file_STAR_ = _STAR_cljs_file_STAR__orig_val__34059);

(cljs.compiler._STAR_source_map_data_STAR_ = _STAR_source_map_data_STAR__orig_val__34058);

(cljs.tools.reader.resolve_symbol = resolve_symbol_orig_val__34057);

(cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR__orig_val__34056);

(cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__orig_val__34055);

(cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__orig_val__34054);

(cljs.analyzer._STAR_fn_invoke_direct_STAR_ = _STAR_fn_invoke_direct_STAR__orig_val__34053);

(cljs.analyzer._STAR_cljs_static_fns_STAR_ = _STAR_cljs_static_fns_STAR__orig_val__34052);

(cljs.analyzer._STAR_checked_arrays_STAR_ = _STAR_checked_arrays_STAR__orig_val__34051);

(cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR__orig_val__34050);

(cljs.js._STAR_eval_fn_STAR_ = _STAR_eval_fn_STAR__orig_val__34049);

(cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__orig_val__34048);
}}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$_STAR_cljs_DASH_ns_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1)], 0));
});
/**
 * Evalute ClojureScript source given as a string. The parameters:
 * 
 *   state (atom)
 *  the compiler state
 * 
 *   source (string)
 *  the ClojureScript source
 * 
 *   name (symbol or string)
 *  optional, the name of the source - used as key in :source-maps
 * 
 *   opts (map)
 *  compilation options.
 * 
 *  :eval             - eval function to invoke, see *eval-fn*
 *  :load             - library resolution function, see *load-fn*
 *  :source-map       - set to true to generate inline source map information
 *  :cache-source     - optional, a function to run side-effects with the
 *                      compilation result prior to actual evalution. This function
 *                      takes two arguments, the first is the eval map, the source
 *                      will be under :source. The second argument is a callback of
 *                      one argument. If an error occurs an :error key should be
 *                      supplied.
 *  :def-emits-var    - sets whether def (and derived) forms return either a Var
 *                      (if set to true) or the def init value (if false). Default
 *                      is false.
 *  :checked-arrays   - if :warn or :error, checks inferred types and values passed
 *                      to aget/aset. Logs for incorrect values if :warn, throws if
 *                      :error. Defaults to false.
 *  :static-fns       - employ static dispatch to specific function arities in
 *                      emitted JavaScript, as opposed to making use of the
 *                      `call` construct. Defaults to false.
 *  :fn-invoke-direct - if `true`, does not generate `.call(null...)` calls for
 *                      unknown functions, but instead direct invokes via
 *                      `f(a0,a1...)`. Defaults to `false`.
 *  :target           - use `:nodejs` if targeting Node.js. Takes no other options
 *                      at the moment.
 *  :ns               - optional, the namespace in which to evaluate the source.
 *  :verbose          - optional, emit details from compiler activity. Defaults to
 *                      false.
 *  :context          - optional, sets the context for the source. Possible values
 *                   are `:expr`, `:statement` and `:return`. Defaults to
 *                    `:expr`.
 * 
 *   cb (function)
 *  callback, will be invoked with a map. If succesful the map will contain
 *  a :value key with the result of evaluation and :ns the current namespace.
 *  If unsuccessful will contain a :error key with an ex-info instance describing
 *  the cause of failure.
 */
cljs.js.eval_str = (function cljs$js$eval_str(var_args){
var G__34114 = arguments.length;
switch (G__34114) {
case 3:
return cljs.js.eval_str.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.js.eval_str.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.js.eval_str.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.js.eval_str.cljs$core$IFn$_invoke$arity$3 = (function (state,source,cb){
return cljs.js.eval_str.cljs$core$IFn$_invoke$arity$4(state,source,null,cb);
}));

(cljs.js.eval_str.cljs$core$IFn$_invoke$arity$4 = (function (state,source,name,cb){
return cljs.js.eval_str.cljs$core$IFn$_invoke$arity$5(state,source,name,null,cb);
}));

(cljs.js.eval_str.cljs$core$IFn$_invoke$arity$5 = (function (state,source,name,opts,cb){
if(cljs.js.atom_QMARK_(state)){
} else {
throw (new Error("Assert failed: (atom? state)"));
}

if(typeof source === 'string'){
} else {
throw (new Error("Assert failed: (string? source)"));
}

if(cljs.js.valid_name_QMARK_(name)){
} else {
throw (new Error("Assert failed: (valid-name? name)"));
}

if(cljs.js.valid_opts_QMARK_(opts)){
} else {
throw (new Error("Assert failed: (valid-opts? opts)"));
}

if(cljs.core.fn_QMARK_(cb)){
} else {
throw (new Error("Assert failed: (fn? cb)"));
}

return cljs.js.eval_str_STAR_(new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$_STAR_compiler_STAR_,state,cljs.core.cst$kw$_STAR_data_DASH_readers_STAR_,cljs.tagged_literals._STAR_cljs_data_readers_STAR_,cljs.core.cst$kw$_STAR_analyze_DASH_deps_STAR_,cljs.core.cst$kw$analyze_DASH_deps.cljs$core$IFn$_invoke$arity$2(opts,true),cljs.core.cst$kw$_STAR_cljs_DASH_dep_DASH_set_STAR_,cljs.analyzer._STAR_cljs_dep_set_STAR_,cljs.core.cst$kw$_STAR_load_DASH_macros_STAR_,cljs.core.cst$kw$load_DASH_macros.cljs$core$IFn$_invoke$arity$2(opts,true),cljs.core.cst$kw$_STAR_load_DASH_fn_STAR_,(function (){var or__4126__auto__ = cljs.core.cst$kw$load.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.js._STAR_load_fn_STAR_;
}
})(),cljs.core.cst$kw$_STAR_eval_DASH_fn_STAR_,(function (){var or__4126__auto__ = cljs.core.cst$kw$eval.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.js._STAR_eval_fn_STAR_;
}
})()], null),source,name,opts,cb);
}));

(cljs.js.eval_str.cljs$lang$maxFixedArity = 5);

if((typeof cljs !== 'undefined') && (typeof cljs.js !== 'undefined') && (typeof cljs.js.fn_index !== 'undefined')){
} else {
cljs.js.fn_index = cljs.core.volatile_BANG_((0));
}
if((typeof cljs !== 'undefined') && (typeof cljs.js !== 'undefined') && (typeof cljs.js.fn_refs !== 'undefined')){
} else {
cljs.js.fn_refs = cljs.core.volatile_BANG_(cljs.core.PersistentArrayMap.EMPTY);
}
/**
 * Clears saved functions.
 */
cljs.js.clear_fns_BANG_ = (function cljs$js$clear_fns_BANG_(){
return cljs.core.vreset_BANG_(cljs.js.fn_refs,cljs.core.PersistentArrayMap.EMPTY);
});
/**
 * Saves a function, returning a numeric representation.
 */
cljs.js.put_fn = (function cljs$js$put_fn(f){
var n = cljs.js.fn_index.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,(cljs.js.fn_index.cljs$core$IDeref$_deref$arity$1(null) + (1)));
cljs.js.fn_refs.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.js.fn_refs.cljs$core$IDeref$_deref$arity$1(null),n,f));

return n;
});
/**
 * Gets a function, given its numeric representation.
 */
cljs.js.get_fn = (function cljs$js$get_fn(n){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.js.fn_refs),n);
});
cljs.js.emit_fn = (function cljs$js$emit_fn(f){
return cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["cljs.js.get_fn(",cljs.js.put_fn(f),")"], 0));
});
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,Function,(function (f){
return cljs.js.emit_fn(f);
}));
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.Var,(function (f){
return cljs.js.emit_fn(f);
}));
cljs.js.eval_impl = (function cljs$js$eval_impl(var_args){
var G__34117 = arguments.length;
switch (G__34117) {
case 1:
return cljs.js.eval_impl.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.js.eval_impl.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.js.eval_impl.cljs$core$IFn$_invoke$arity$1 = (function (form){
return cljs.js.eval_impl.cljs$core$IFn$_invoke$arity$2(form,cljs.core._STAR_ns_STAR_.name);
}));

(cljs.js.eval_impl.cljs$core$IFn$_invoke$arity$2 = (function (form,ns){
var result = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var st_34122 = cljs.env._STAR_compiler_STAR_;
cljs.js.eval.cljs$core$IFn$_invoke$arity$4(st_34122,form,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$ns,ns,cljs.core.cst$kw$context,cljs.core.cst$kw$expr,cljs.core.cst$kw$def_DASH_emits_DASH_var,true], null),(function (p__34118){
var map__34119 = p__34118;
var map__34119__$1 = (((((!((map__34119 == null))))?(((((map__34119.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34119.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34119):map__34119);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34119__$1,cljs.core.cst$kw$value);
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34119__$1,cljs.core.cst$kw$error);
if(cljs.core.truth_(error)){
throw error;
} else {
return cljs.core.reset_BANG_(result,value);
}
}));

return cljs.core.deref(result);
}));

(cljs.js.eval_impl.cljs$lang$maxFixedArity = 2);

(cljs.core._STAR_eval_STAR_ = cljs.js.eval_impl);