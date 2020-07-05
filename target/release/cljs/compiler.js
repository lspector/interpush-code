// Compiled by ClojureScript 1.10.764 {:static-fns true, :optimize-constants true}
goog.provide('cljs.compiler');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.tools.reader');
goog.require('cljs.env');
goog.require('cljs.analyzer');
goog.require('cljs.source_map');
goog.require('goog.string.StringBuffer');
cljs.compiler.js_reserved = cljs.analyzer.js_reserved;
cljs.compiler.es5_GT__EQ_ = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$1(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1((function (lang){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lang,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.replace(cljs.core.name(lang),/^ecmascript/,"es"))], null);
}))),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ecmascript5,cljs.core.cst$kw$ecmascript5_DASH_strict,cljs.core.cst$kw$ecmascript6,cljs.core.cst$kw$ecmascript6_DASH_strict,cljs.core.cst$kw$ecmascript_DASH_2015,cljs.core.cst$kw$ecmascript6_DASH_typed,cljs.core.cst$kw$ecmascript_DASH_2016,cljs.core.cst$kw$ecmascript_DASH_2017,cljs.core.cst$kw$ecmascript_DASH_next], null));
cljs.compiler._STAR_recompiled_STAR_ = null;
cljs.compiler._STAR_inputs_STAR_ = null;
cljs.compiler._STAR_source_map_data_STAR_ = null;
cljs.compiler._STAR_source_map_data_gen_col_STAR_ = null;
cljs.compiler._STAR_lexical_renames_STAR_ = cljs.core.PersistentArrayMap.EMPTY;
cljs.compiler.cljs_reserved_file_names = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["deps.cljs",null], null), null);
/**
 * Gets the part up to the first `.` of a namespace.
 * Returns the empty string for nil.
 * Returns the entire string if no `.` in namespace
 */
cljs.compiler.get_first_ns_segment = (function cljs$compiler$get_first_ns_segment(ns){
var ns__$1 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns);
var idx = ns__$1.indexOf(".");
if(((-1) === idx)){
return ns__$1;
} else {
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(ns__$1,(0),idx);
}
});
cljs.compiler.find_ns_starts_with = (function cljs$compiler$find_ns_starts_with(needle){
return cljs.core.reduce_kv((function (xs,ns,_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(needle,cljs.compiler.get_first_ns_segment(ns))){
return cljs.core.reduced(needle);
} else {
return null;
}
}),null,cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_)));
});
cljs.compiler.shadow_depth = (function cljs$compiler$shadow_depth(s){
var map__28853 = s;
var map__28853__$1 = (((((!((map__28853 == null))))?(((((map__28853.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28853.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28853):map__28853);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28853__$1,cljs.core.cst$kw$name);
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28853__$1,cljs.core.cst$kw$info);
var d = (0);
var G__28856 = info;
var map__28857 = G__28856;
var map__28857__$1 = (((((!((map__28857 == null))))?(((((map__28857.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28857.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28857):map__28857);
var shadow = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28857__$1,cljs.core.cst$kw$shadow);
var d__$1 = d;
var G__28856__$1 = G__28856;
while(true){
var d__$2 = d__$1;
var map__28861 = G__28856__$1;
var map__28861__$1 = (((((!((map__28861 == null))))?(((((map__28861.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28861.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28861):map__28861);
var shadow__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28861__$1,cljs.core.cst$kw$shadow);
if(cljs.core.truth_(shadow__$1)){
var G__28863 = (d__$2 + (1));
var G__28864 = shadow__$1;
d__$1 = G__28863;
G__28856__$1 = G__28864;
continue;
} else {
if(cljs.core.truth_((cljs.compiler.find_ns_starts_with.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.find_ns_starts_with.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)) : cljs.compiler.find_ns_starts_with.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(name))))){
return (d__$2 + (1));
} else {
return d__$2;

}
}
break;
}
});
cljs.compiler.hash_scope = (function cljs$compiler$hash_scope(s){
return cljs.core.hash_combine(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(s).cljs$core$IHash$_hash$arity$1(null),cljs.compiler.shadow_depth(s));
});
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__28865){
var map__28866 = p__28865;
var map__28866__$1 = (((((!((map__28866 == null))))?(((((map__28866.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28866.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28866):map__28866);
var name_var = map__28866__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28866__$1,cljs.core.cst$kw$name);
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28866__$1,cljs.core.cst$kw$info);
var name__$1 = clojure.string.replace(cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"..","_DOT__DOT_");
var map__28868 = info;
var map__28868__$1 = (((((!((map__28868 == null))))?(((((map__28868.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28868.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28868):map__28868);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28868__$1,cljs.core.cst$kw$ns);
var fn_scope = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28868__$1,cljs.core.cst$kw$fn_DASH_scope);
var scoped_name = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2("_$_",cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.cst$kw$name),fn_scope),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name__$1], null))));
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1((function (){var G__28870 = [clojure.string.replace(cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),".","$"),"$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(scoped_name)].join('');
return (cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(G__28870) : cljs.compiler.munge.call(null,G__28870));
})());
});
cljs.compiler.munge_reserved = (function cljs$compiler$munge_reserved(reserved){
return (function (s){
if((!((cljs.core.get.cljs$core$IFn$_invoke$arity$2(reserved,s) == null)))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),"$"].join('');
} else {
return s;
}
});
});
cljs.compiler.munge = (function cljs$compiler$munge(var_args){
var G__28872 = arguments.length;
switch (G__28872) {
case 1:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(s,cljs.compiler.js_reserved);
}));

(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2 = (function (s,reserved){
if(cljs.analyzer.cljs_map_QMARK_(s)){
var name_var = s;
var name = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(name_var);
var field = cljs.core.cst$kw$field.cljs$core$IFn$_invoke$arity$1(name_var);
var info = cljs.core.cst$kw$info.cljs$core$IFn$_invoke$arity$1(name_var);
if((!((cljs.core.cst$kw$fn_DASH_self_DASH_name.cljs$core$IFn$_invoke$arity$1(info) == null)))){
return cljs.compiler.fn_self_name(s);
} else {
var depth = cljs.compiler.shadow_depth(s);
var code = cljs.compiler.hash_scope(s);
var renamed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_lexical_renames_STAR_,code);
var name__$1 = ((field === true)?["self__.",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''):(((!((renamed == null))))?renamed:name
));
var munged_name = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(name__$1,reserved);
if(((field === true) || ((depth === (0))))){
return munged_name;
} else {
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(munged_name),"__$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(depth)].join(''));
}
}
} else {
var ss = clojure.string.replace(cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),"..","_DOT__DOT_");
var ss__$1 = clojure.string.replace(ss,(new RegExp("\\/(.)")),".$1");
var rf = cljs.compiler.munge_reserved(reserved);
var ss__$2 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(rf,clojure.string.split.cljs$core$IFn$_invoke$arity$2(ss__$1,/\./));
var ss__$3 = clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",ss__$2);
var ms = (function (){var fexpr__28873 = new cljs.core.Var(function(){return cljs.core.munge_str;},cljs.core.cst$sym$cljs$core_SLASH_munge_DASH_str,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$private,cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$tag,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[true,cljs.core.cst$sym$cljs$core,cljs.core.cst$sym$munge_DASH_str,"cljs/core.cljs",25,1,11501,11501,cljs.core.cst$sym$string,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$name], null)),null,(cljs.core.truth_(cljs.core.munge_str)?cljs.core.munge_str.cljs$lang$test:null)]));
return (fexpr__28873.cljs$core$IFn$_invoke$arity$1 ? fexpr__28873.cljs$core$IFn$_invoke$arity$1(ss__$3) : fexpr__28873.call(null,ss__$3));
})();
if((s instanceof cljs.core.Symbol)){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(ms);
} else {
return ms;
}
}
}));

(cljs.compiler.munge.cljs$lang$maxFixedArity = 2);

cljs.compiler.comma_sep = (function cljs$compiler$comma_sep(xs){
return cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(",",xs);
});
cljs.compiler.escape_char = (function cljs$compiler$escape_char(c){
var cp = goog.string.hashCode(c);
var G__28875 = cp;
switch (G__28875) {
case (34):
return "\\\"";

break;
case (92):
return "\\\\";

break;
case (8):
return "\\b";

break;
case (12):
return "\\f";

break;
case (10):
return "\\n";

break;
case (13):
return "\\r";

break;
case (9):
return "\\t";

break;
default:
if(((((31) < cp)) && ((cp < (127))))){
return c;
} else {
var unpadded = cp.toString((16));
var pad = cljs.core.subs.cljs$core$IFn$_invoke$arity$2("0000",unpadded.length);
return ["\\u",pad,cljs.core.str.cljs$core$IFn$_invoke$arity$1(unpadded)].join('');
}

}
});
cljs.compiler.escape_string = (function cljs$compiler$escape_string(s){
var sb = (new goog.string.StringBuffer());
var seq__28877_28881 = cljs.core.seq(s);
var chunk__28878_28882 = null;
var count__28879_28883 = (0);
var i__28880_28884 = (0);
while(true){
if((i__28880_28884 < count__28879_28883)){
var c_28885 = chunk__28878_28882.cljs$core$IIndexed$_nth$arity$2(null,i__28880_28884);
sb.append(cljs.compiler.escape_char(c_28885));


var G__28886 = seq__28877_28881;
var G__28887 = chunk__28878_28882;
var G__28888 = count__28879_28883;
var G__28889 = (i__28880_28884 + (1));
seq__28877_28881 = G__28886;
chunk__28878_28882 = G__28887;
count__28879_28883 = G__28888;
i__28880_28884 = G__28889;
continue;
} else {
var temp__5735__auto___28890 = cljs.core.seq(seq__28877_28881);
if(temp__5735__auto___28890){
var seq__28877_28891__$1 = temp__5735__auto___28890;
if(cljs.core.chunked_seq_QMARK_(seq__28877_28891__$1)){
var c__4556__auto___28892 = cljs.core.chunk_first(seq__28877_28891__$1);
var G__28893 = cljs.core.chunk_rest(seq__28877_28891__$1);
var G__28894 = c__4556__auto___28892;
var G__28895 = cljs.core.count(c__4556__auto___28892);
var G__28896 = (0);
seq__28877_28881 = G__28893;
chunk__28878_28882 = G__28894;
count__28879_28883 = G__28895;
i__28880_28884 = G__28896;
continue;
} else {
var c_28897 = cljs.core.first(seq__28877_28891__$1);
sb.append(cljs.compiler.escape_char(c_28897));


var G__28898 = cljs.core.next(seq__28877_28891__$1);
var G__28899 = null;
var G__28900 = (0);
var G__28901 = (0);
seq__28877_28881 = G__28898;
chunk__28878_28882 = G__28899;
count__28879_28883 = G__28900;
i__28880_28884 = G__28901;
continue;
}
} else {
}
}
break;
}

return sb.toString();
});
cljs.compiler.wrap_in_double_quotes = (function cljs$compiler$wrap_in_double_quotes(x){
return ["\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"\""].join('');
});
if((typeof cljs !== 'undefined') && (typeof cljs.compiler !== 'undefined') && (typeof cljs.compiler.emit_STAR_ !== 'undefined')){
} else {
cljs.compiler.emit_STAR_ = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,(function (){var fexpr__28902 = cljs.core.get_global_hierarchy;
return (fexpr__28902.cljs$core$IFn$_invoke$arity$0 ? fexpr__28902.cljs$core$IFn$_invoke$arity$0() : fexpr__28902.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.compiler","emit*"),cljs.core.cst$kw$op,cljs.core.cst$kw$default,hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
cljs.compiler.emit = (function cljs$compiler$emit(ast){
if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
var map__28903_28910 = ast;
var map__28903_28911__$1 = (((((!((map__28903_28910 == null))))?(((((map__28903_28910.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28903_28910.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28903_28910):map__28903_28910);
var env_28912 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28903_28911__$1,cljs.core.cst$kw$env);
if(cljs.core.truth_(cljs.core.cst$kw$line.cljs$core$IFn$_invoke$arity$1(env_28912))){
var map__28905_28913 = env_28912;
var map__28905_28914__$1 = (((((!((map__28905_28913 == null))))?(((((map__28905_28913.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28905_28913.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28905_28913):map__28905_28913);
var line_28915 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28905_28914__$1,cljs.core.cst$kw$line);
var column_28916 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28905_28914__$1,cljs.core.cst$kw$column);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_source_map_data_STAR_,(function (m){
var minfo = (function (){var G__28907 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$gcol,cljs.core.cst$kw$gen_DASH_col.cljs$core$IFn$_invoke$arity$1(m),cljs.core.cst$kw$gline,cljs.core.cst$kw$gen_DASH_line.cljs$core$IFn$_invoke$arity$1(m)], null);
if(cljs.core.truth_((function (){var G__28909 = cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(ast);
var fexpr__28908 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$binding,null,cljs.core.cst$kw$var,null,cljs.core.cst$kw$js_DASH_var,null,cljs.core.cst$kw$local,null], null), null);
return (fexpr__28908.cljs$core$IFn$_invoke$arity$1 ? fexpr__28908.cljs$core$IFn$_invoke$arity$1(G__28909) : fexpr__28908.call(null,G__28909));
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28907,cljs.core.cst$kw$name,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$info.cljs$core$IFn$_invoke$arity$1(ast))));
} else {
return G__28907;
}
})();
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$source_DASH_map,(line_28915 - (1))], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (line__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_28916)?(column_28916 - (1)):(0))], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (column__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(column__$1,minfo);
}),cljs.core.PersistentVector.EMPTY));
}),cljs.core.sorted_map()));
}));
} else {
}
} else {
}

return (cljs.compiler.emit_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_STAR_.cljs$core$IFn$_invoke$arity$1(ast) : cljs.compiler.emit_STAR_.call(null,ast));
});
cljs.compiler.emits = (function cljs$compiler$emits(var_args){
var G__28925 = arguments.length;
switch (G__28925) {
case 0:
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___28932 = arguments.length;
var i__4737__auto___28933 = (0);
while(true){
if((i__4737__auto___28933 < len__4736__auto___28932)){
args_arr__4757__auto__.push((arguments[i__4737__auto___28933]));

var G__28934 = (i__4737__auto___28933 + (1));
i__4737__auto___28933 = G__28934;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((5)),(0),null));
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__4758__auto__);

}
});

(cljs.compiler.emits.cljs$core$IFn$_invoke$arity$0 = (function (){
return null;
}));

(cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1 = (function (a){
if((a == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_(a)){
cljs.compiler.emit(a);
} else {
if(cljs.analyzer.cljs_seq_QMARK_(a)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.compiler.emits,a);
} else {
if(goog.isFunction(a)){
(a.cljs$core$IFn$_invoke$arity$0 ? a.cljs$core$IFn$_invoke$arity$0() : a.call(null));
} else {
var s_28935 = (function (){var G__28926 = a;
if((!(typeof a === 'string'))){
return G__28926.toString();
} else {
return G__28926;
}
})();
var temp__5739__auto___28936 = cljs.compiler._STAR_source_map_data_STAR_;
if((temp__5739__auto___28936 == null)){
} else {
var sm_data_28937 = temp__5739__auto___28936;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(sm_data_28937,cljs.core.update,cljs.core.cst$kw$gen_DASH_col,(function (p1__28917_SHARP_){
return (p1__28917_SHARP_ + s_28935.length);
}));
}

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s_28935], 0));

}
}
}
}

return null;
}));

(cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(a);

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(b);
}));

(cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(a);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(b);

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(c);
}));

(cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4 = (function (a,b,c,d){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(a);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(b);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(c);

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(d);
}));

(cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5 = (function (a,b,c,d,e){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(a);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(b);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(c);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(d);

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(e);
}));

(cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,c,d,e,xs){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(a);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(b);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(c);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(d);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(e);

var seq__28927 = cljs.core.seq(xs);
var chunk__28928 = null;
var count__28929 = (0);
var i__28930 = (0);
while(true){
if((i__28930 < count__28929)){
var x = chunk__28928.cljs$core$IIndexed$_nth$arity$2(null,i__28930);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(x);


var G__28938 = seq__28927;
var G__28939 = chunk__28928;
var G__28940 = count__28929;
var G__28941 = (i__28930 + (1));
seq__28927 = G__28938;
chunk__28928 = G__28939;
count__28929 = G__28940;
i__28930 = G__28941;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__28927);
if(temp__5735__auto__){
var seq__28927__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28927__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__28927__$1);
var G__28942 = cljs.core.chunk_rest(seq__28927__$1);
var G__28943 = c__4556__auto__;
var G__28944 = cljs.core.count(c__4556__auto__);
var G__28945 = (0);
seq__28927 = G__28942;
chunk__28928 = G__28943;
count__28929 = G__28944;
i__28930 = G__28945;
continue;
} else {
var x = cljs.core.first(seq__28927__$1);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(x);


var G__28946 = cljs.core.next(seq__28927__$1);
var G__28947 = null;
var G__28948 = (0);
var G__28949 = (0);
seq__28927 = G__28946;
chunk__28928 = G__28947;
count__28929 = G__28948;
i__28930 = G__28949;
continue;
}
} else {
return null;
}
}
break;
}
}));

/** @this {Function} */
(cljs.compiler.emits.cljs$lang$applyTo = (function (seq28919){
var G__28920 = cljs.core.first(seq28919);
var seq28919__$1 = cljs.core.next(seq28919);
var G__28921 = cljs.core.first(seq28919__$1);
var seq28919__$2 = cljs.core.next(seq28919__$1);
var G__28922 = cljs.core.first(seq28919__$2);
var seq28919__$3 = cljs.core.next(seq28919__$2);
var G__28923 = cljs.core.first(seq28919__$3);
var seq28919__$4 = cljs.core.next(seq28919__$3);
var G__28924 = cljs.core.first(seq28919__$4);
var seq28919__$5 = cljs.core.next(seq28919__$4);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28920,G__28921,G__28922,G__28923,G__28924,seq28919__$5);
}));

(cljs.compiler.emits.cljs$lang$maxFixedArity = (5));

cljs.compiler._emitln = (function cljs$compiler$_emitln(){
cljs.core.newline.cljs$core$IFn$_invoke$arity$0();

if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_source_map_data_STAR_,(function (p__28950){
var map__28951 = p__28950;
var map__28951__$1 = (((((!((map__28951 == null))))?(((((map__28951.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28951.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28951):map__28951);
var m = map__28951__$1;
var gen_line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28951__$1,cljs.core.cst$kw$gen_DASH_line);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(m,cljs.core.cst$kw$gen_DASH_line,(gen_line + (1)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$gen_DASH_col,(0)], 0));
}));
} else {
}

return null;
});
cljs.compiler.emitln = (function cljs$compiler$emitln(var_args){
var G__28960 = arguments.length;
switch (G__28960) {
case 0:
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___28966 = arguments.length;
var i__4737__auto___28967 = (0);
while(true){
if((i__4737__auto___28967 < len__4736__auto___28966)){
args_arr__4757__auto__.push((arguments[i__4737__auto___28967]));

var G__28968 = (i__4737__auto___28967 + (1));
i__4737__auto___28967 = G__28968;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((5)),(0),null));
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__4758__auto__);

}
});

(cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.compiler._emitln();
}));

(cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1 = (function (a){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(a);

return cljs.compiler._emitln();
}));

(cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(a);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(b);

return cljs.compiler._emitln();
}));

(cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(a);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(b);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(c);

return cljs.compiler._emitln();
}));

(cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4 = (function (a,b,c,d){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(a);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(b);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(c);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(d);

return cljs.compiler._emitln();
}));

(cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5 = (function (a,b,c,d,e){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(a);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(b);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(c);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(d);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(e);

return cljs.compiler._emitln();
}));

(cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,c,d,e,xs){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(a);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(b);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(c);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(d);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(e);

var seq__28961_28969 = cljs.core.seq(xs);
var chunk__28962_28970 = null;
var count__28963_28971 = (0);
var i__28964_28972 = (0);
while(true){
if((i__28964_28972 < count__28963_28971)){
var x_28973 = chunk__28962_28970.cljs$core$IIndexed$_nth$arity$2(null,i__28964_28972);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(x_28973);


var G__28974 = seq__28961_28969;
var G__28975 = chunk__28962_28970;
var G__28976 = count__28963_28971;
var G__28977 = (i__28964_28972 + (1));
seq__28961_28969 = G__28974;
chunk__28962_28970 = G__28975;
count__28963_28971 = G__28976;
i__28964_28972 = G__28977;
continue;
} else {
var temp__5735__auto___28978 = cljs.core.seq(seq__28961_28969);
if(temp__5735__auto___28978){
var seq__28961_28979__$1 = temp__5735__auto___28978;
if(cljs.core.chunked_seq_QMARK_(seq__28961_28979__$1)){
var c__4556__auto___28980 = cljs.core.chunk_first(seq__28961_28979__$1);
var G__28981 = cljs.core.chunk_rest(seq__28961_28979__$1);
var G__28982 = c__4556__auto___28980;
var G__28983 = cljs.core.count(c__4556__auto___28980);
var G__28984 = (0);
seq__28961_28969 = G__28981;
chunk__28962_28970 = G__28982;
count__28963_28971 = G__28983;
i__28964_28972 = G__28984;
continue;
} else {
var x_28985 = cljs.core.first(seq__28961_28979__$1);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(x_28985);


var G__28986 = cljs.core.next(seq__28961_28979__$1);
var G__28987 = null;
var G__28988 = (0);
var G__28989 = (0);
seq__28961_28969 = G__28986;
chunk__28962_28970 = G__28987;
count__28963_28971 = G__28988;
i__28964_28972 = G__28989;
continue;
}
} else {
}
}
break;
}

return cljs.compiler._emitln();
}));

/** @this {Function} */
(cljs.compiler.emitln.cljs$lang$applyTo = (function (seq28954){
var G__28955 = cljs.core.first(seq28954);
var seq28954__$1 = cljs.core.next(seq28954);
var G__28956 = cljs.core.first(seq28954__$1);
var seq28954__$2 = cljs.core.next(seq28954__$1);
var G__28957 = cljs.core.first(seq28954__$2);
var seq28954__$3 = cljs.core.next(seq28954__$2);
var G__28958 = cljs.core.first(seq28954__$3);
var seq28954__$4 = cljs.core.next(seq28954__$3);
var G__28959 = cljs.core.first(seq28954__$4);
var seq28954__$5 = cljs.core.next(seq28954__$4);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28955,G__28956,G__28957,G__28958,G__28959,seq28954__$5);
}));

(cljs.compiler.emitln.cljs$lang$maxFixedArity = (5));

cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__28990_28994 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__28991_28995 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__28992_28996 = true;
var _STAR_print_fn_STAR__temp_val__28993_28997 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__28992_28996);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__28993_28997);

try{cljs.compiler.emit(expr);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__28991_28995);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__28990_28994);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
});
if((typeof cljs !== 'undefined') && (typeof cljs.compiler !== 'undefined') && (typeof cljs.compiler.emit_constant_STAR_ !== 'undefined')){
} else {
cljs.compiler.emit_constant_STAR_ = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,(function (){var fexpr__28998 = cljs.core.get_global_hierarchy;
return (fexpr__28998.cljs$core$IFn$_invoke$arity$0 ? fexpr__28998.cljs$core$IFn$_invoke$arity$0() : fexpr__28998.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.compiler","emit-constant*"),cljs.core.type,cljs.core.cst$kw$default,hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}









cljs.compiler.all_distinct_QMARK_ = (function cljs$compiler$all_distinct_QMARK_(xs){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.distinct_QMARK_,xs);
});
cljs.compiler.emit_constant_no_meta = (function cljs$compiler$emit_constant_no_meta(x){
if(cljs.analyzer.cljs_seq_QMARK_(x)){
return (cljs.compiler.emit_list.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.emit_list.cljs$core$IFn$_invoke$arity$2(x,cljs.compiler.emit_constants_comma_sep) : cljs.compiler.emit_list.call(null,x,cljs.compiler.emit_constants_comma_sep));
} else {
if(cljs.core.record_QMARK_(x)){
var vec__28999 = cljs.analyzer.record_ns_PLUS_name(x);
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28999,(0),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28999,(1),null);
var G__29002 = ns;
var G__29003 = name;
var G__29004 = (function (){
var G__29005 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,x);
return (cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(G__29005) : cljs.compiler.emit_constant.call(null,G__29005));
});
return (cljs.compiler.emit_record_value.cljs$core$IFn$_invoke$arity$3 ? cljs.compiler.emit_record_value.cljs$core$IFn$_invoke$arity$3(G__29002,G__29003,G__29004) : cljs.compiler.emit_record_value.call(null,G__29002,G__29003,G__29004));
} else {
if(cljs.analyzer.cljs_map_QMARK_(x)){
var G__29006 = cljs.core.keys(x);
var G__29007 = cljs.core.vals(x);
var G__29008 = cljs.compiler.emit_constants_comma_sep;
var G__29009 = cljs.compiler.all_distinct_QMARK_;
return (cljs.compiler.emit_map.cljs$core$IFn$_invoke$arity$4 ? cljs.compiler.emit_map.cljs$core$IFn$_invoke$arity$4(G__29006,G__29007,G__29008,G__29009) : cljs.compiler.emit_map.call(null,G__29006,G__29007,G__29008,G__29009));
} else {
if(cljs.analyzer.cljs_vector_QMARK_(x)){
return (cljs.compiler.emit_vector.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.emit_vector.cljs$core$IFn$_invoke$arity$2(x,cljs.compiler.emit_constants_comma_sep) : cljs.compiler.emit_vector.call(null,x,cljs.compiler.emit_constants_comma_sep));
} else {
if(cljs.analyzer.cljs_set_QMARK_(x)){
return (cljs.compiler.emit_set.cljs$core$IFn$_invoke$arity$3 ? cljs.compiler.emit_set.cljs$core$IFn$_invoke$arity$3(x,cljs.compiler.emit_constants_comma_sep,cljs.compiler.all_distinct_QMARK_) : cljs.compiler.emit_set.call(null,x,cljs.compiler.emit_constants_comma_sep,cljs.compiler.all_distinct_QMARK_));
} else {
return (cljs.compiler.emit_constant_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant_STAR_.cljs$core$IFn$_invoke$arity$1(x) : cljs.compiler.emit_constant_STAR_.call(null,x));

}
}
}
}
}
});
cljs.compiler.emit_constant = (function cljs$compiler$emit_constant(v){
var m = cljs.analyzer.elide_irrelevant_meta(cljs.core.meta(v));
if((!((cljs.core.seq(m) == null)))){
var G__29010 = (function (){
return cljs.compiler.emit_constant_no_meta(v);
});
var G__29011 = (function (){
return cljs.compiler.emit_constant_no_meta(m);
});
return (cljs.compiler.emit_with_meta.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.emit_with_meta.cljs$core$IFn$_invoke$arity$2(G__29010,G__29011) : cljs.compiler.emit_with_meta.call(null,G__29010,G__29011));
} else {
return cljs.compiler.emit_constant_no_meta(v);
}
});
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (x){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["failed compiling constant: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"; ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.type(x)], 0))," is not a valid ClojureScript constant."].join(''),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$constant,x,cljs.core.cst$kw$type,cljs.core.type(x),cljs.core.cst$kw$clojure$error_SLASH_phase,cljs.core.cst$kw$compilation], null));
}));
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,null,(function (x){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("null");
}));
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,Number,(function (x){
if(cljs.core.truth_(isNaN(x))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("NaN");
} else {
if(cljs.core.not(isFinite(x))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1((((x > (0)))?"Infinity":"-Infinity"));
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("(",x,")");

}
}
}));
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,String,(function (x){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(cljs.compiler.wrap_in_double_quotes(cljs.compiler.escape_string(x)));
}));
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,Boolean,(function (x){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(x)?"true":"false"));
}));
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,RegExp,(function (x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("(new RegExp(\"\"))");
} else {
var vec__29012 = cljs.core.re_find(/^(?:\(\?([idmsux]*)\))?(.*)/,cljs.core.str.cljs$core$IFn$_invoke$arity$1(x));
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29012,(0),null);
var flags = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29012,(1),null);
var pattern = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29012,(2),null);
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(pattern);
}
}));
cljs.compiler.emits_keyword = (function cljs$compiler$emits_keyword(kw){
var ns = cljs.core.namespace(kw);
var name = cljs.core.name(kw);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("new cljs.core.Keyword(");

cljs.compiler.emit_constant(ns);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");

cljs.compiler.emit_constant(name);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");

cljs.compiler.emit_constant((cljs.core.truth_(ns)?[ns,"/",name].join(''):name));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");

cljs.compiler.emit_constant(cljs.core.hash(kw));

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(")");
});
cljs.compiler.emits_symbol = (function cljs$compiler$emits_symbol(sym){
var ns = cljs.core.namespace(sym);
var name = cljs.core.name(sym);
var symstr = (((!((ns == null))))?[ns,"/",name].join(''):name);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("new cljs.core.Symbol(");

cljs.compiler.emit_constant(ns);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");

cljs.compiler.emit_constant(name);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");

cljs.compiler.emit_constant(symstr);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");

cljs.compiler.emit_constant(cljs.core.hash(sym));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");

cljs.compiler.emit_constant(null);

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(")");
});
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.Keyword,(function (x){
var temp__5733__auto__ = (function (){var and__4115__auto__ = cljs.core.cst$kw$emit_DASH_constants.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$options.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_)));
if(cljs.core.truth_(and__4115__auto__)){
var G__29015 = cljs.core.cst$kw$cljs$analyzer_SLASH_constant_DASH_table.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_));
return (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(G__29015) : x.call(null,G__29015));
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(temp__5733__auto__)){
var value = temp__5733__auto__;
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2("cljs.core.",value);
} else {
return cljs.compiler.emits_keyword(x);
}
}));
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.Symbol,(function (x){
var temp__5733__auto__ = (function (){var and__4115__auto__ = cljs.core.cst$kw$emit_DASH_constants.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$options.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_)));
if(cljs.core.truth_(and__4115__auto__)){
var G__29016 = cljs.core.cst$kw$cljs$analyzer_SLASH_constant_DASH_table.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_));
return (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(G__29016) : x.call(null,G__29016));
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(temp__5733__auto__)){
var value = temp__5733__auto__;
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2("cljs.core.",value);
} else {
return cljs.compiler.emits_symbol(x);
}
}));
cljs.compiler.emit_constants_comma_sep = (function cljs$compiler$emit_constants_comma_sep(cs){
return (function (){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,m){
if(cljs.core.even_QMARK_(i)){
return cljs.compiler.emit_constant(m);
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(m);
}
}),cljs.compiler.comma_sep(cs)));
});
});
cljs.compiler.array_map_threshold = (8);
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,Date,(function (date){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("new Date(",date.getTime(),")");
}));
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.UUID,(function (uuid){
var uuid_str = uuid.toString();
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("new cljs.core.UUID(\"",uuid_str,"\", ",cljs.core.hash(uuid_str),")");
}));
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.tagged_literals.JSValue,(function (v){
var items = v.val;
if(cljs.core.map_QMARK_(items)){
var G__29018 = items;
var G__29019 = (function (p1__29017_SHARP_){
return (function (){
return cljs.compiler.emit_constant(p1__29017_SHARP_);
});
});
return (cljs.compiler.emit_js_object.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.emit_js_object.cljs$core$IFn$_invoke$arity$2(G__29018,G__29019) : cljs.compiler.emit_js_object.call(null,G__29018,G__29019));
} else {
return (cljs.compiler.emit_js_array.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.emit_js_array.cljs$core$IFn$_invoke$arity$2(items,cljs.compiler.emit_constants_comma_sep) : cljs.compiler.emit_js_array.call(null,items,cljs.compiler.emit_constants_comma_sep));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$no_DASH_op,(function (m){
return null;
}));
cljs.compiler.emit_var = (function cljs$compiler$emit_var(p__29021){
var map__29022 = p__29021;
var map__29022__$1 = (((((!((map__29022 == null))))?(((((map__29022.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29022.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29022):map__29022);
var ast = map__29022__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29022__$1,cljs.core.cst$kw$info);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29022__$1,cljs.core.cst$kw$env);
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29022__$1,cljs.core.cst$kw$form);
var temp__5733__auto__ = cljs.core.cst$kw$const_DASH_expr.cljs$core$IFn$_invoke$arity$1(ast);
if(cljs.core.truth_(temp__5733__auto__)){
var const_expr = temp__5733__auto__;
return cljs.compiler.emit(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(const_expr,cljs.core.cst$kw$env,env));
} else {
var map__29024 = cljs.core.deref(cljs.env._STAR_compiler_STAR_);
var map__29024__$1 = (((((!((map__29024 == null))))?(((((map__29024.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29024.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29024):map__29024);
var cenv = map__29024__$1;
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29024__$1,cljs.core.cst$kw$options);
var var_name = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(info);
var info__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(var_name),"js"))?(function (){var js_module_name = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cenv,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$js_DASH_module_DASH_index,cljs.core.name(var_name),cljs.core.cst$kw$name], null));
var or__4126__auto__ = js_module_name;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.name(var_name);
}
})():info);
if(cljs.core.truth_(cljs.core.cst$kw$binding_DASH_form_QMARK_.cljs$core$IFn$_invoke$arity$1(ast))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ast));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$statement,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var reserved = (function (){var G__29026 = cljs.compiler.js_reserved;
if(cljs.core.truth_((function (){var and__4115__auto__ = (function (){var G__29029 = cljs.core.cst$kw$language_DASH_out.cljs$core$IFn$_invoke$arity$1(options);
return (cljs.compiler.es5_GT__EQ_.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.es5_GT__EQ_.cljs$core$IFn$_invoke$arity$1(G__29029) : cljs.compiler.es5_GT__EQ_.call(null,G__29029));
})();
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.namespace(var_name) == null)));
} else {
return and__4115__auto__;
}
})())){
return clojure.set.difference.cljs$core$IFn$_invoke$arity$2(G__29026,cljs.analyzer.es5_allowed);
} else {
return G__29026;
}
})();
var js_module = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cenv,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$js_DASH_namespaces,(function (){var or__4126__auto__ = cljs.core.namespace(var_name);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.name(var_name);
}
})()], null));
var info__$2 = (function (){var G__29030 = info__$1;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(form,cljs.core.cst$sym$js_SLASH__DASH_Infinity)){
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(G__29030,reserved);
} else {
return G__29030;
}
})();
var env__28845__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__28845__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

var G__29031_29032 = cljs.core.cst$kw$module_DASH_type.cljs$core$IFn$_invoke$arity$1(js_module);
var G__29031_29033__$1 = (((G__29031_29032 instanceof cljs.core.Keyword))?G__29031_29032.fqn:null);
switch (G__29031_29033__$1) {
case "commonjs":
if(cljs.core.truth_(cljs.core.namespace(var_name))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(var_name),reserved),"[\"default\"].",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(cljs.core.name(var_name),reserved));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(cljs.core.name(var_name),reserved),"[\"default\"]");
}

break;
case "es6":
if(cljs.core.truth_((function (){var and__4115__auto__ = cljs.core.namespace(var_name);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("default",cljs.core.name(var_name));
} else {
return and__4115__auto__;
}
})())){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(var_name),reserved),"[\"default\"]");
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(info__$2);
}

break;
default:
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(info__$2);

}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__28845__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}
}
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$var,(function (expr){
return cljs.compiler.emit_var(expr);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$binding,(function (expr){
return cljs.compiler.emit_var(expr);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$js_DASH_var,(function (expr){
return cljs.compiler.emit_var(expr);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$local,(function (expr){
return cljs.compiler.emit_var(expr);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$the_DASH_var,(function (p__29035){
var map__29036 = p__29035;
var map__29036__$1 = (((((!((map__29036 == null))))?(((((map__29036.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29036.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29036):map__29036);
var arg = map__29036__$1;
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29036__$1,cljs.core.cst$kw$env);
var var$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29036__$1,cljs.core.cst$kw$var);
var sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29036__$1,cljs.core.cst$kw$sym);
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29036__$1,cljs.core.cst$kw$meta);
if(cljs.analyzer.ast_QMARK_(sym)){
} else {
throw (new Error("Assert failed: (ana/ast? sym)"));
}

if(cljs.analyzer.ast_QMARK_(meta)){
} else {
throw (new Error("Assert failed: (ana/ast? meta)"));
}

var map__29038 = cljs.core.cst$kw$info.cljs$core$IFn$_invoke$arity$1(var$);
var map__29038__$1 = (((((!((map__29038 == null))))?(((((map__29038.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29038.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29038):map__29038);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29038__$1,cljs.core.cst$kw$name);
var env__28845__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__28845__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic("new cljs.core.Var(function(){return ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name),";},",sym,",",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([meta,")"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__28845__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_with_meta = (function cljs$compiler$emit_with_meta(expr,meta){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("cljs.core.with_meta(",expr,",",meta,")");
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$with_DASH_meta,(function (p__29040){
var map__29041 = p__29040;
var map__29041__$1 = (((((!((map__29041 == null))))?(((((map__29041.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29041.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29041):map__29041);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29041__$1,cljs.core.cst$kw$expr);
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29041__$1,cljs.core.cst$kw$meta);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29041__$1,cljs.core.cst$kw$env);
var env__28845__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__28845__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_with_meta(expr,meta);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__28845__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.distinct_keys_QMARK_ = (function cljs$compiler$distinct_keys_QMARK_(keys){
var keys__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.unwrap_quote,keys);
return ((cljs.core.every_QMARK_((function (p1__29043_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(p1__29043_SHARP_),cljs.core.cst$kw$const);
}),keys__$1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,keys__$1)),cljs.core.count(keys__$1))));
});
cljs.compiler.emit_map = (function cljs$compiler$emit_map(keys,vals,comma_sep,distinct_keys_QMARK_){
if((cljs.core.count(keys) === (0))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("cljs.core.PersistentArrayMap.EMPTY");
} else {
if((cljs.core.count(keys) <= cljs.compiler.array_map_threshold)){
if(cljs.core.truth_((distinct_keys_QMARK_.cljs$core$IFn$_invoke$arity$1 ? distinct_keys_QMARK_.cljs$core$IFn$_invoke$arity$1(keys) : distinct_keys_QMARK_.call(null,keys)))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("new cljs.core.PersistentArrayMap(null, ",cljs.core.count(keys),", [",(function (){var G__29044 = cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(keys,vals);
return (comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(G__29044) : comma_sep.call(null,G__29044));
})(),"], null)");
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("cljs.core.PersistentArrayMap.createAsIfByAssoc([",(function (){var G__29045 = cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(keys,vals);
return (comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(G__29045) : comma_sep.call(null,G__29045));
})(),"])");
}
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("cljs.core.PersistentHashMap.fromArrays([",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(keys) : comma_sep.call(null,keys)),"],[",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(vals) : comma_sep.call(null,vals)),"])");

}
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$map,(function (p__29046){
var map__29047 = p__29046;
var map__29047__$1 = (((((!((map__29047 == null))))?(((((map__29047.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29047.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29047):map__29047);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29047__$1,cljs.core.cst$kw$env);
var keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29047__$1,cljs.core.cst$kw$keys);
var vals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29047__$1,cljs.core.cst$kw$vals);
var env__28845__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__28845__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_map(keys,vals,cljs.compiler.comma_sep,cljs.compiler.distinct_keys_QMARK_);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__28845__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_list = (function cljs$compiler$emit_list(items,comma_sep){
if(cljs.core.empty_QMARK_(items)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("cljs.core.List.EMPTY");
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("cljs.core.list(",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(items) : comma_sep.call(null,items)),")");
}
});
cljs.compiler.emit_vector = (function cljs$compiler$emit_vector(items,comma_sep){
if(cljs.core.empty_QMARK_(items)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("cljs.core.PersistentVector.EMPTY");
} else {
var cnt = cljs.core.count(items);
if((cnt < (32))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("new cljs.core.PersistentVector(null, ",cnt,", 5, cljs.core.PersistentVector.EMPTY_NODE, [",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(items) : comma_sep.call(null,items)),"], null)");
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("cljs.core.PersistentVector.fromArray([",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(items) : comma_sep.call(null,items)),"], true)");
}
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$vector,(function (p__29049){
var map__29050 = p__29049;
var map__29050__$1 = (((((!((map__29050 == null))))?(((((map__29050.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29050.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29050):map__29050);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29050__$1,cljs.core.cst$kw$items);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29050__$1,cljs.core.cst$kw$env);
var env__28845__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__28845__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_vector(items,cljs.compiler.comma_sep);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__28845__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.distinct_constants_QMARK_ = (function cljs$compiler$distinct_constants_QMARK_(items){
var items__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.unwrap_quote,items);
return ((cljs.core.every_QMARK_((function (p1__29052_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(p1__29052_SHARP_),cljs.core.cst$kw$const);
}),items__$1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,items__$1)),cljs.core.count(items__$1))));
});
cljs.compiler.emit_set = (function cljs$compiler$emit_set(items,comma_sep,distinct_constants_QMARK_){
if(cljs.core.empty_QMARK_(items)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("cljs.core.PersistentHashSet.EMPTY");
} else {
if(cljs.core.truth_((distinct_constants_QMARK_.cljs$core$IFn$_invoke$arity$1 ? distinct_constants_QMARK_.cljs$core$IFn$_invoke$arity$1(items) : distinct_constants_QMARK_.call(null,items)))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, ",cljs.core.count(items),", [",(function (){var G__29053 = cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(items,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1("null"));
return (comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(G__29053) : comma_sep.call(null,G__29053));
})(),"], null), null)");
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("cljs.core.PersistentHashSet.createAsIfByAssoc([",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(items) : comma_sep.call(null,items)),"])");

}
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$set,(function (p__29054){
var map__29055 = p__29054;
var map__29055__$1 = (((((!((map__29055 == null))))?(((((map__29055.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29055.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29055):map__29055);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29055__$1,cljs.core.cst$kw$items);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29055__$1,cljs.core.cst$kw$env);
var env__28845__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__28845__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_set(items,cljs.compiler.comma_sep,cljs.compiler.distinct_constants_QMARK_);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__28845__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_js_object = (function cljs$compiler$emit_js_object(items,emit_js_object_val){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("({");

var temp__5735__auto___29079 = cljs.core.seq(items);
if(temp__5735__auto___29079){
var items_29080__$1 = temp__5735__auto___29079;
var vec__29057_29081 = items_29080__$1;
var seq__29058_29082 = cljs.core.seq(vec__29057_29081);
var first__29059_29083 = cljs.core.first(seq__29058_29082);
var seq__29058_29084__$1 = cljs.core.next(seq__29058_29082);
var vec__29060_29085 = first__29059_29083;
var k_29086 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29060_29085,(0),null);
var v_29087 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29060_29085,(1),null);
var r_29088 = seq__29058_29084__$1;
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4("\"",cljs.core.name(k_29086),"\": ",(emit_js_object_val.cljs$core$IFn$_invoke$arity$1 ? emit_js_object_val.cljs$core$IFn$_invoke$arity$1(v_29087) : emit_js_object_val.call(null,v_29087)));

var seq__29063_29089 = cljs.core.seq(r_29088);
var chunk__29064_29090 = null;
var count__29065_29091 = (0);
var i__29066_29092 = (0);
while(true){
if((i__29066_29092 < count__29065_29091)){
var vec__29073_29093 = chunk__29064_29090.cljs$core$IIndexed$_nth$arity$2(null,i__29066_29092);
var k_29094__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29073_29093,(0),null);
var v_29095__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29073_29093,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4(", \"",cljs.core.name(k_29094__$1),"\": ",(emit_js_object_val.cljs$core$IFn$_invoke$arity$1 ? emit_js_object_val.cljs$core$IFn$_invoke$arity$1(v_29095__$1) : emit_js_object_val.call(null,v_29095__$1)));


var G__29096 = seq__29063_29089;
var G__29097 = chunk__29064_29090;
var G__29098 = count__29065_29091;
var G__29099 = (i__29066_29092 + (1));
seq__29063_29089 = G__29096;
chunk__29064_29090 = G__29097;
count__29065_29091 = G__29098;
i__29066_29092 = G__29099;
continue;
} else {
var temp__5735__auto___29100__$1 = cljs.core.seq(seq__29063_29089);
if(temp__5735__auto___29100__$1){
var seq__29063_29101__$1 = temp__5735__auto___29100__$1;
if(cljs.core.chunked_seq_QMARK_(seq__29063_29101__$1)){
var c__4556__auto___29102 = cljs.core.chunk_first(seq__29063_29101__$1);
var G__29103 = cljs.core.chunk_rest(seq__29063_29101__$1);
var G__29104 = c__4556__auto___29102;
var G__29105 = cljs.core.count(c__4556__auto___29102);
var G__29106 = (0);
seq__29063_29089 = G__29103;
chunk__29064_29090 = G__29104;
count__29065_29091 = G__29105;
i__29066_29092 = G__29106;
continue;
} else {
var vec__29076_29107 = cljs.core.first(seq__29063_29101__$1);
var k_29108__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29076_29107,(0),null);
var v_29109__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29076_29107,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4(", \"",cljs.core.name(k_29108__$1),"\": ",(emit_js_object_val.cljs$core$IFn$_invoke$arity$1 ? emit_js_object_val.cljs$core$IFn$_invoke$arity$1(v_29109__$1) : emit_js_object_val.call(null,v_29109__$1)));


var G__29110 = cljs.core.next(seq__29063_29101__$1);
var G__29111 = null;
var G__29112 = (0);
var G__29113 = (0);
seq__29063_29089 = G__29110;
chunk__29064_29090 = G__29111;
count__29065_29091 = G__29112;
i__29066_29092 = G__29113;
continue;
}
} else {
}
}
break;
}
} else {
}

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("})");
});
cljs.compiler.emit_js_array = (function cljs$compiler$emit_js_array(items,comma_sep){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("[",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(items) : comma_sep.call(null,items)),"]");
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$js_DASH_object,(function (p__29114){
var map__29115 = p__29114;
var map__29115__$1 = (((((!((map__29115 == null))))?(((((map__29115.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29115.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29115):map__29115);
var keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29115__$1,cljs.core.cst$kw$keys);
var vals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29115__$1,cljs.core.cst$kw$vals);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29115__$1,cljs.core.cst$kw$env);
var env__28845__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__28845__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_js_object(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,keys,vals),cljs.core.identity);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__28845__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$js_DASH_array,(function (p__29117){
var map__29118 = p__29117;
var map__29118__$1 = (((((!((map__29118 == null))))?(((((map__29118.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29118.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29118):map__29118);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29118__$1,cljs.core.cst$kw$items);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29118__$1,cljs.core.cst$kw$env);
var env__28845__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__28845__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_js_array(items,cljs.compiler.comma_sep);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__28845__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_record_value = (function cljs$compiler$emit_record_value(ns,name,items){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(ns,".map__GT_",name,"(",items,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([")"], 0));
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$quote,(function (p__29120){
var map__29121 = p__29120;
var map__29121__$1 = (((((!((map__29121 == null))))?(((((map__29121.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29121.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29121):map__29121);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29121__$1,cljs.core.cst$kw$expr);
return cljs.compiler.emit(expr);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$const,(function (p__29123){
var map__29124 = p__29123;
var map__29124__$1 = (((((!((map__29124 == null))))?(((((map__29124.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29124.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29124):map__29124);
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29124__$1,cljs.core.cst$kw$form);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29124__$1,cljs.core.cst$kw$env);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$statement,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__28845__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__28845__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_constant(form);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__28845__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}
}));
cljs.compiler.truthy_constant_QMARK_ = (function cljs$compiler$truthy_constant_QMARK_(expr){
var map__29126 = cljs.analyzer.unwrap_quote(expr);
var map__29126__$1 = (((((!((map__29126 == null))))?(((((map__29126.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29126.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29126):map__29126);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29126__$1,cljs.core.cst$kw$op);
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29126__$1,cljs.core.cst$kw$form);
var const_expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29126__$1,cljs.core.cst$kw$const_DASH_expr);
var or__4126__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op,cljs.core.cst$kw$const))?(function (){var and__4115__auto__ = form;
if(cljs.core.truth_(and__4115__auto__)){
return (!(((((typeof form === 'string') && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(form,"")))) || (((typeof form === 'number') && ((form === (0))))))));
} else {
return and__4115__auto__;
}
})():false);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if((!((const_expr == null)))){
return (cljs.compiler.truthy_constant_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.truthy_constant_QMARK_.cljs$core$IFn$_invoke$arity$1(const_expr) : cljs.compiler.truthy_constant_QMARK_.call(null,const_expr));
} else {
return false;
}
}
});
cljs.compiler.falsey_constant_QMARK_ = (function cljs$compiler$falsey_constant_QMARK_(expr){
var map__29128 = cljs.analyzer.unwrap_quote(expr);
var map__29128__$1 = (((((!((map__29128 == null))))?(((((map__29128.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29128.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29128):map__29128);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29128__$1,cljs.core.cst$kw$op);
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29128__$1,cljs.core.cst$kw$form);
var const_expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29128__$1,cljs.core.cst$kw$const_DASH_expr);
var or__4126__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op,cljs.core.cst$kw$const)) && (((form === false) || ((form == null)))));
if(or__4126__auto__){
return or__4126__auto__;
} else {
if((!((const_expr == null)))){
return (cljs.compiler.falsey_constant_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.falsey_constant_QMARK_.cljs$core$IFn$_invoke$arity$1(const_expr) : cljs.compiler.falsey_constant_QMARK_.call(null,const_expr));
} else {
return false;
}
}
});
cljs.compiler.safe_test_QMARK_ = (function cljs$compiler$safe_test_QMARK_(env,e){
var tag = cljs.analyzer.infer_tag(env,e);
var or__4126__auto__ = (function (){var fexpr__29131 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$sym$seq,null,cljs.core.cst$sym$boolean,null], null), null);
return (fexpr__29131.cljs$core$IFn$_invoke$arity$1 ? fexpr__29131.cljs$core$IFn$_invoke$arity$1(tag) : fexpr__29131.call(null,tag));
})();
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.compiler.truthy_constant_QMARK_(e);
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$if,(function (p__29132){
var map__29133 = p__29132;
var map__29133__$1 = (((((!((map__29133 == null))))?(((((map__29133.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29133.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29133):map__29133);
var test = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29133__$1,cljs.core.cst$kw$test);
var then = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29133__$1,cljs.core.cst$kw$then);
var else$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29133__$1,cljs.core.cst$kw$else);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29133__$1,cljs.core.cst$kw$env);
var unchecked = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29133__$1,cljs.core.cst$kw$unchecked);
var context = cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env);
var checked = cljs.core.not((function (){var or__4126__auto__ = unchecked;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.compiler.safe_test_QMARK_(env,test);
}
})());
if(cljs.core.truth_(cljs.compiler.truthy_constant_QMARK_(test))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(then);
} else {
if(cljs.core.truth_(cljs.compiler.falsey_constant_QMARK_(test))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(else$);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,context)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic("(",((checked)?"cljs.core.truth_":null),"(",test,")?",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([then,":",else$,")"], 0));
} else {
if(checked){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if(cljs.core.truth_(",test,")){");
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if(",test,"){");
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(then,"} else {");

return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(else$,"}");
}

}
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$case,(function (p__29135){
var map__29136 = p__29135;
var map__29136__$1 = (((((!((map__29136 == null))))?(((((map__29136.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29136.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29136):map__29136);
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29136__$1,cljs.core.cst$kw$test);
var nodes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29136__$1,cljs.core.cst$kw$nodes);
var default$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29136__$1,cljs.core.cst$kw$default);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29136__$1,cljs.core.cst$kw$env);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env),cljs.core.cst$kw$expr)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("(function(){");
} else {
}

var gs = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("caseval__");
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",gs,";");
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("switch (",v,") {");

var seq__29138_29174 = cljs.core.seq(nodes);
var chunk__29139_29175 = null;
var count__29140_29176 = (0);
var i__29141_29177 = (0);
while(true){
if((i__29141_29177 < count__29140_29176)){
var map__29158_29178 = chunk__29139_29175.cljs$core$IIndexed$_nth$arity$2(null,i__29141_29177);
var map__29158_29179__$1 = (((((!((map__29158_29178 == null))))?(((((map__29158_29178.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29158_29178.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29158_29178):map__29158_29178);
var ts_29180 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29158_29179__$1,cljs.core.cst$kw$tests);
var map__29159_29181 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29158_29179__$1,cljs.core.cst$kw$then);
var map__29159_29182__$1 = (((((!((map__29159_29181 == null))))?(((((map__29159_29181.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29159_29181.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29159_29181):map__29159_29181);
var then_29183 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29159_29182__$1,cljs.core.cst$kw$then);
var seq__29162_29184 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$test,ts_29180));
var chunk__29163_29185 = null;
var count__29164_29186 = (0);
var i__29165_29187 = (0);
while(true){
if((i__29165_29187 < count__29164_29186)){
var test_29188 = chunk__29163_29185.cljs$core$IIndexed$_nth$arity$2(null,i__29165_29187);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",test_29188,":");


var G__29189 = seq__29162_29184;
var G__29190 = chunk__29163_29185;
var G__29191 = count__29164_29186;
var G__29192 = (i__29165_29187 + (1));
seq__29162_29184 = G__29189;
chunk__29163_29185 = G__29190;
count__29164_29186 = G__29191;
i__29165_29187 = G__29192;
continue;
} else {
var temp__5735__auto___29193 = cljs.core.seq(seq__29162_29184);
if(temp__5735__auto___29193){
var seq__29162_29194__$1 = temp__5735__auto___29193;
if(cljs.core.chunked_seq_QMARK_(seq__29162_29194__$1)){
var c__4556__auto___29195 = cljs.core.chunk_first(seq__29162_29194__$1);
var G__29196 = cljs.core.chunk_rest(seq__29162_29194__$1);
var G__29197 = c__4556__auto___29195;
var G__29198 = cljs.core.count(c__4556__auto___29195);
var G__29199 = (0);
seq__29162_29184 = G__29196;
chunk__29163_29185 = G__29197;
count__29164_29186 = G__29198;
i__29165_29187 = G__29199;
continue;
} else {
var test_29200 = cljs.core.first(seq__29162_29194__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",test_29200,":");


var G__29201 = cljs.core.next(seq__29162_29194__$1);
var G__29202 = null;
var G__29203 = (0);
var G__29204 = (0);
seq__29162_29184 = G__29201;
chunk__29163_29185 = G__29202;
count__29164_29186 = G__29203;
i__29165_29187 = G__29204;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(gs,"=",then_29183);
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(then_29183);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("break;");


var G__29205 = seq__29138_29174;
var G__29206 = chunk__29139_29175;
var G__29207 = count__29140_29176;
var G__29208 = (i__29141_29177 + (1));
seq__29138_29174 = G__29205;
chunk__29139_29175 = G__29206;
count__29140_29176 = G__29207;
i__29141_29177 = G__29208;
continue;
} else {
var temp__5735__auto___29209 = cljs.core.seq(seq__29138_29174);
if(temp__5735__auto___29209){
var seq__29138_29210__$1 = temp__5735__auto___29209;
if(cljs.core.chunked_seq_QMARK_(seq__29138_29210__$1)){
var c__4556__auto___29211 = cljs.core.chunk_first(seq__29138_29210__$1);
var G__29212 = cljs.core.chunk_rest(seq__29138_29210__$1);
var G__29213 = c__4556__auto___29211;
var G__29214 = cljs.core.count(c__4556__auto___29211);
var G__29215 = (0);
seq__29138_29174 = G__29212;
chunk__29139_29175 = G__29213;
count__29140_29176 = G__29214;
i__29141_29177 = G__29215;
continue;
} else {
var map__29166_29216 = cljs.core.first(seq__29138_29210__$1);
var map__29166_29217__$1 = (((((!((map__29166_29216 == null))))?(((((map__29166_29216.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29166_29216.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29166_29216):map__29166_29216);
var ts_29218 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29166_29217__$1,cljs.core.cst$kw$tests);
var map__29167_29219 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29166_29217__$1,cljs.core.cst$kw$then);
var map__29167_29220__$1 = (((((!((map__29167_29219 == null))))?(((((map__29167_29219.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29167_29219.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29167_29219):map__29167_29219);
var then_29221 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29167_29220__$1,cljs.core.cst$kw$then);
var seq__29170_29222 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$test,ts_29218));
var chunk__29171_29223 = null;
var count__29172_29224 = (0);
var i__29173_29225 = (0);
while(true){
if((i__29173_29225 < count__29172_29224)){
var test_29226 = chunk__29171_29223.cljs$core$IIndexed$_nth$arity$2(null,i__29173_29225);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",test_29226,":");


var G__29227 = seq__29170_29222;
var G__29228 = chunk__29171_29223;
var G__29229 = count__29172_29224;
var G__29230 = (i__29173_29225 + (1));
seq__29170_29222 = G__29227;
chunk__29171_29223 = G__29228;
count__29172_29224 = G__29229;
i__29173_29225 = G__29230;
continue;
} else {
var temp__5735__auto___29231__$1 = cljs.core.seq(seq__29170_29222);
if(temp__5735__auto___29231__$1){
var seq__29170_29232__$1 = temp__5735__auto___29231__$1;
if(cljs.core.chunked_seq_QMARK_(seq__29170_29232__$1)){
var c__4556__auto___29233 = cljs.core.chunk_first(seq__29170_29232__$1);
var G__29234 = cljs.core.chunk_rest(seq__29170_29232__$1);
var G__29235 = c__4556__auto___29233;
var G__29236 = cljs.core.count(c__4556__auto___29233);
var G__29237 = (0);
seq__29170_29222 = G__29234;
chunk__29171_29223 = G__29235;
count__29172_29224 = G__29236;
i__29173_29225 = G__29237;
continue;
} else {
var test_29238 = cljs.core.first(seq__29170_29232__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",test_29238,":");


var G__29239 = cljs.core.next(seq__29170_29232__$1);
var G__29240 = null;
var G__29241 = (0);
var G__29242 = (0);
seq__29170_29222 = G__29239;
chunk__29171_29223 = G__29240;
count__29172_29224 = G__29241;
i__29173_29225 = G__29242;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(gs,"=",then_29221);
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(then_29221);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("break;");


var G__29243 = cljs.core.next(seq__29138_29210__$1);
var G__29244 = null;
var G__29245 = (0);
var G__29246 = (0);
seq__29138_29174 = G__29243;
chunk__29139_29175 = G__29244;
count__29140_29176 = G__29245;
i__29141_29177 = G__29246;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(default$)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("default:");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(gs,"=",default$);
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(default$);
}
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("return ",gs,";})()");
} else {
return null;
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$throw,(function (p__29247){
var map__29248 = p__29247;
var map__29248__$1 = (((((!((map__29248 == null))))?(((((map__29248.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29248.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29248):map__29248);
var throw$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29248__$1,cljs.core.cst$kw$exception);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29248__$1,cljs.core.cst$kw$env);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("(function(){throw ",throw$,"})()");
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("throw ",throw$,";");
}
}));
cljs.compiler.base_types = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 15, ["boolean",null,"object",null,"*",null,"string",null,"Object",null,"Number",null,"null",null,"Date",null,"number",null,"String",null,"RegExp",null,"...*",null,"Array",null,"array",null,"Boolean",null], null), null);
cljs.compiler.mapped_types = new cljs.core.PersistentArrayMap(null, 1, ["nil","null"], null);
cljs.compiler.resolve_type = (function cljs$compiler$resolve_type(env,t){
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.compiler.base_types,t))){
return t;
} else {
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.compiler.mapped_types,t))){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.compiler.mapped_types,t);
} else {
if(goog.string.startsWith(t,"!")){
return ["!",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__29253 = env;
var G__29254 = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(t,(1));
return (cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(G__29253,G__29254) : cljs.compiler.resolve_type.call(null,G__29253,G__29254));
})())].join('');
} else {
if(goog.string.startsWith(t,"{")){
return t;
} else {
if(goog.string.startsWith(t,"function")){
var idx = t.lastIndexOf(":");
var vec__29255 = (((!(((-1) === idx))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(t,(0),idx),cljs.core.subs.cljs$core$IFn$_invoke$arity$3(t,(idx + (1)),cljs.core.count(t))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,null], null));
var fstr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29255,(0),null);
var rstr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29255,(1),null);
var ret_t = (cljs.core.truth_(rstr)?(cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(env,rstr) : cljs.compiler.resolve_type.call(null,env,rstr)):null);
var axstr = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(fstr,(9),(cljs.core.count(fstr) - (1)));
var args_ts = ((clojure.string.blank_QMARK_(axstr))?null:cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2((function (p1__29250_SHARP_){
return (cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(env,p1__29250_SHARP_) : cljs.compiler.resolve_type.call(null,env,p1__29250_SHARP_));
}),clojure.string.trim),clojure.string.split.cljs$core$IFn$_invoke$arity$2(axstr,/,/)));
var G__29258 = ["function(",clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",args_ts),")"].join('');
if(cljs.core.truth_(ret_t)){
return [G__29258,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ret_t)].join('');
} else {
return G__29258;
}
} else {
if(goog.string.endsWith(t,"=")){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__29261 = env;
var G__29262 = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(t,(0),(cljs.core.count(t) - (1)));
return (cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(G__29261,G__29262) : cljs.compiler.resolve_type.call(null,G__29261,G__29262));
})()),"="].join('');
} else {
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(env,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(t)))));

}
}
}
}
}
}
});
cljs.compiler.resolve_types = (function cljs$compiler$resolve_types(env,ts){
var ts__$1 = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(clojure.string.trim(ts),(1),(cljs.core.count(ts) - (1)));
var xs = clojure.string.split.cljs$core$IFn$_invoke$arity$2(ts__$1,/\|/);
return ["{",clojure.string.join.cljs$core$IFn$_invoke$arity$2("|",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__29263_SHARP_){
return cljs.compiler.resolve_type(env,p1__29263_SHARP_);
}),xs)),"}"].join('');
});
cljs.compiler.munge_param_return = (function cljs$compiler$munge_param_return(env,line){
if(cljs.core.truth_(cljs.core.re_find(/@param/,line))){
var vec__29264 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.trim,clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.trim(line),/ /));
var seq__29265 = cljs.core.seq(vec__29264);
var first__29266 = cljs.core.first(seq__29265);
var seq__29265__$1 = cljs.core.next(seq__29265);
var p = first__29266;
var first__29266__$1 = cljs.core.first(seq__29265__$1);
var seq__29265__$2 = cljs.core.next(seq__29265__$1);
var ts = first__29266__$1;
var first__29266__$2 = cljs.core.first(seq__29265__$2);
var seq__29265__$3 = cljs.core.next(seq__29265__$2);
var n = first__29266__$2;
var xs = seq__29265__$3;
if(cljs.core.truth_(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("@param",p))?(function (){var and__4115__auto__ = ts;
if(cljs.core.truth_(and__4115__auto__)){
return goog.string.startsWith(ts,"{");
} else {
return and__4115__auto__;
}
})():false))){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.compiler.resolve_types(env,ts),cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(n)], null),xs));
} else {
return line;
}
} else {
if(cljs.core.truth_(cljs.core.re_find(/@return/,line))){
var vec__29267 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.trim,clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.trim(line),/ /));
var seq__29268 = cljs.core.seq(vec__29267);
var first__29269 = cljs.core.first(seq__29268);
var seq__29268__$1 = cljs.core.next(seq__29268);
var p = first__29269;
var first__29269__$1 = cljs.core.first(seq__29268__$1);
var seq__29268__$2 = cljs.core.next(seq__29268__$1);
var ts = first__29269__$1;
var xs = seq__29268__$2;
if(cljs.core.truth_(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("@return",p))?(function (){var and__4115__auto__ = ts;
if(cljs.core.truth_(and__4115__auto__)){
return goog.string.startsWith(ts,"{");
} else {
return and__4115__auto__;
}
})():false))){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.compiler.resolve_types(env,ts)], null),xs));
} else {
return line;
}
} else {
return line;

}
}
});
cljs.compiler.checking_types_QMARK_ = (function cljs$compiler$checking_types_QMARK_(){
var G__29271 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$options,cljs.core.cst$kw$closure_DASH_warnings,cljs.core.cst$kw$check_DASH_types], null));
var fexpr__29270 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$warning,null,cljs.core.cst$kw$error,null], null), null);
return (fexpr__29270.cljs$core$IFn$_invoke$arity$1 ? fexpr__29270.cljs$core$IFn$_invoke$arity$1(G__29271) : fexpr__29270.call(null,G__29271));
});
/**
 * Emit a nicely formatted comment string.
 */
cljs.compiler.emit_comment = (function cljs$compiler$emit_comment(var_args){
var G__29274 = arguments.length;
switch (G__29274) {
case 2:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$2 = (function (doc,jsdoc){
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3(null,doc,jsdoc);
}));

(cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3 = (function (env,doc,jsdoc){
var docs = (cljs.core.truth_(doc)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [doc], null):null);
var docs__$1 = (cljs.core.truth_(jsdoc)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(docs,jsdoc):docs);
var docs__$2 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,docs__$1);
var print_comment_lines = (function cljs$compiler$print_comment_lines(e){
var vec__29282 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__29272_SHARP_){
if(cljs.core.truth_(cljs.compiler.checking_types_QMARK_())){
return cljs.compiler.munge_param_return(env,p1__29272_SHARP_);
} else {
return p1__29272_SHARP_;
}
}),clojure.string.split_lines(e));
var seq__29283 = cljs.core.seq(vec__29282);
var first__29284 = cljs.core.first(seq__29283);
var seq__29283__$1 = cljs.core.next(seq__29283);
var x = first__29284;
var ys = seq__29283__$1;
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(" * ",clojure.string.replace(x,"*/","* /"));

var seq__29285 = cljs.core.seq(ys);
var chunk__29286 = null;
var count__29287 = (0);
var i__29288 = (0);
while(true){
if((i__29288 < count__29287)){
var next_line = chunk__29286.cljs$core$IIndexed$_nth$arity$2(null,i__29288);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(" * ",clojure.string.replace(clojure.string.replace(next_line,/^   /,""),"*/","* /"));


var G__29294 = seq__29285;
var G__29295 = chunk__29286;
var G__29296 = count__29287;
var G__29297 = (i__29288 + (1));
seq__29285 = G__29294;
chunk__29286 = G__29295;
count__29287 = G__29296;
i__29288 = G__29297;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__29285);
if(temp__5735__auto__){
var seq__29285__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__29285__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__29285__$1);
var G__29298 = cljs.core.chunk_rest(seq__29285__$1);
var G__29299 = c__4556__auto__;
var G__29300 = cljs.core.count(c__4556__auto__);
var G__29301 = (0);
seq__29285 = G__29298;
chunk__29286 = G__29299;
count__29287 = G__29300;
i__29288 = G__29301;
continue;
} else {
var next_line = cljs.core.first(seq__29285__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(" * ",clojure.string.replace(clojure.string.replace(next_line,/^   /,""),"*/","* /"));


var G__29302 = cljs.core.next(seq__29285__$1);
var G__29303 = null;
var G__29304 = (0);
var G__29305 = (0);
seq__29285 = G__29302;
chunk__29286 = G__29303;
count__29287 = G__29304;
i__29288 = G__29305;
continue;
}
} else {
return null;
}
}
break;
}
});
if(cljs.core.seq(docs__$2)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("/**");

var seq__29289_29306 = cljs.core.seq(docs__$2);
var chunk__29290_29307 = null;
var count__29291_29308 = (0);
var i__29292_29309 = (0);
while(true){
if((i__29292_29309 < count__29291_29308)){
var e_29310 = chunk__29290_29307.cljs$core$IIndexed$_nth$arity$2(null,i__29292_29309);
if(cljs.core.truth_(e_29310)){
print_comment_lines(e_29310);
} else {
}


var G__29311 = seq__29289_29306;
var G__29312 = chunk__29290_29307;
var G__29313 = count__29291_29308;
var G__29314 = (i__29292_29309 + (1));
seq__29289_29306 = G__29311;
chunk__29290_29307 = G__29312;
count__29291_29308 = G__29313;
i__29292_29309 = G__29314;
continue;
} else {
var temp__5735__auto___29315 = cljs.core.seq(seq__29289_29306);
if(temp__5735__auto___29315){
var seq__29289_29316__$1 = temp__5735__auto___29315;
if(cljs.core.chunked_seq_QMARK_(seq__29289_29316__$1)){
var c__4556__auto___29317 = cljs.core.chunk_first(seq__29289_29316__$1);
var G__29318 = cljs.core.chunk_rest(seq__29289_29316__$1);
var G__29319 = c__4556__auto___29317;
var G__29320 = cljs.core.count(c__4556__auto___29317);
var G__29321 = (0);
seq__29289_29306 = G__29318;
chunk__29290_29307 = G__29319;
count__29291_29308 = G__29320;
i__29292_29309 = G__29321;
continue;
} else {
var e_29322 = cljs.core.first(seq__29289_29316__$1);
if(cljs.core.truth_(e_29322)){
print_comment_lines(e_29322);
} else {
}


var G__29323 = cljs.core.next(seq__29289_29316__$1);
var G__29324 = null;
var G__29325 = (0);
var G__29326 = (0);
seq__29289_29306 = G__29323;
chunk__29290_29307 = G__29324;
count__29291_29308 = G__29325;
i__29292_29309 = G__29326;
continue;
}
} else {
}
}
break;
}

return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(" */");
} else {
return null;
}
}));

(cljs.compiler.emit_comment.cljs$lang$maxFixedArity = 3);

cljs.compiler.valid_define_value_QMARK_ = (function cljs$compiler$valid_define_value_QMARK_(x){
return ((typeof x === 'string') || (x === true) || (x === false) || (typeof x === 'number'));
});
cljs.compiler.get_define = (function cljs$compiler$get_define(mname,jsdoc){
var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.env._STAR_compiler_STAR_),cljs.core.cst$kw$options);
var and__4115__auto__ = cljs.core.some((function (p1__29328_SHARP_){
return goog.string.startsWith(p1__29328_SHARP_,"@define");
}),jsdoc);
if(cljs.core.truth_(and__4115__auto__)){
var and__4115__auto____$1 = opts;
if(cljs.core.truth_(and__4115__auto____$1)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$optimizations.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.cst$kw$none)){
var define = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$closure_DASH_defines,cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname)], null));
if(cljs.compiler.valid_define_value_QMARK_(define)){
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([define], 0));
} else {
return null;
}
} else {
return false;
}
} else {
return and__4115__auto____$1;
}
} else {
return and__4115__auto__;
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$def,(function (p__29329){
var map__29330 = p__29329;
var map__29330__$1 = (((((!((map__29330 == null))))?(((((map__29330.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29330.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29330):map__29330);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29330__$1,cljs.core.cst$kw$doc);
var jsdoc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29330__$1,cljs.core.cst$kw$jsdoc);
var test = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29330__$1,cljs.core.cst$kw$test);
var goog_define = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29330__$1,cljs.core.cst$kw$goog_DASH_define);
var init = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29330__$1,cljs.core.cst$kw$init);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29330__$1,cljs.core.cst$kw$name);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29330__$1,cljs.core.cst$kw$env);
var export$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29330__$1,cljs.core.cst$kw$export);
var var$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29330__$1,cljs.core.cst$kw$var);
var var_ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29330__$1,cljs.core.cst$kw$var_DASH_ast);
if(cljs.core.truth_((function (){var or__4126__auto__ = init;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.cst$kw$def_DASH_emits_DASH_var.cljs$core$IFn$_invoke$arity$1(env);
}
})())){
var mname = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name);
cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3(env,doc,cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((cljs.core.truth_(goog_define)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["@define {",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog_define),"}"].join('')], null):null),jsdoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$jsdoc.cljs$core$IFn$_invoke$arity$1(init)], 0)));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("return (");
} else {
}

if(cljs.core.truth_(cljs.core.cst$kw$def_DASH_emits_DASH_var.cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("(function (){");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(var$);

if(cljs.core.truth_(init)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2(" = ",(function (){var temp__5733__auto__ = cljs.compiler.get_define(mname,jsdoc);
if(cljs.core.truth_(temp__5733__auto__)){
var define = temp__5733__auto__;
return define;
} else {
return init;
}
})());
} else {
}

if(cljs.core.truth_(cljs.core.cst$kw$def_DASH_emits_DASH_var.cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("; return (");

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$op,cljs.core.cst$kw$the_DASH_var,cljs.core.cst$kw$env,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,cljs.core.cst$kw$context,cljs.core.cst$kw$expr)], null),var_ast], 0)));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(");})()");
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(")");
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}

if(cljs.core.truth_(export$)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("goog.exportSymbol('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(export$),"', ",mname,");");
} else {
}

if(cljs.core.truth_((function (){var and__4115__auto__ = cljs.analyzer._STAR_load_tests_STAR_;
if(cljs.core.truth_(and__4115__auto__)){
return test;
} else {
return and__4115__auto__;
}
})())){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
} else {
}

return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(var$,".cljs$lang$test = ",test,";");
} else {
return null;
}
} else {
return null;
}
}));
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__29332){
var map__29333 = p__29332;
var map__29333__$1 = (((((!((map__29333 == null))))?(((((map__29333.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29333.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29333):map__29333);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29333__$1,cljs.core.cst$kw$name);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29333__$1,cljs.core.cst$kw$params);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29333__$1,cljs.core.cst$kw$env);
var arglist = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("arglist__");
var delegate_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name)),"__delegate"].join('');
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("(function (",arglist,"){");

var seq__29335_29359 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.drop_last.cljs$core$IFn$_invoke$arity$2((2),params)));
var chunk__29336_29360 = null;
var count__29337_29361 = (0);
var i__29338_29362 = (0);
while(true){
if((i__29338_29362 < count__29337_29361)){
var vec__29345_29363 = chunk__29336_29360.cljs$core$IIndexed$_nth$arity$2(null,i__29338_29362);
var i_29364 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29345_29363,(0),null);
var param_29365 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29345_29363,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(param_29365);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(" = cljs.core.first(");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(arglist,");");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(arglist," = cljs.core.next(",arglist,");");


var G__29366 = seq__29335_29359;
var G__29367 = chunk__29336_29360;
var G__29368 = count__29337_29361;
var G__29369 = (i__29338_29362 + (1));
seq__29335_29359 = G__29366;
chunk__29336_29360 = G__29367;
count__29337_29361 = G__29368;
i__29338_29362 = G__29369;
continue;
} else {
var temp__5735__auto___29370 = cljs.core.seq(seq__29335_29359);
if(temp__5735__auto___29370){
var seq__29335_29371__$1 = temp__5735__auto___29370;
if(cljs.core.chunked_seq_QMARK_(seq__29335_29371__$1)){
var c__4556__auto___29372 = cljs.core.chunk_first(seq__29335_29371__$1);
var G__29373 = cljs.core.chunk_rest(seq__29335_29371__$1);
var G__29374 = c__4556__auto___29372;
var G__29375 = cljs.core.count(c__4556__auto___29372);
var G__29376 = (0);
seq__29335_29359 = G__29373;
chunk__29336_29360 = G__29374;
count__29337_29361 = G__29375;
i__29338_29362 = G__29376;
continue;
} else {
var vec__29348_29377 = cljs.core.first(seq__29335_29371__$1);
var i_29378 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29348_29377,(0),null);
var param_29379 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29348_29377,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(param_29379);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(" = cljs.core.first(");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(arglist,");");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(arglist," = cljs.core.next(",arglist,");");


var G__29380 = cljs.core.next(seq__29335_29371__$1);
var G__29381 = null;
var G__29382 = (0);
var G__29383 = (0);
seq__29335_29359 = G__29380;
chunk__29336_29360 = G__29381;
count__29337_29361 = G__29382;
i__29338_29362 = G__29383;
continue;
}
} else {
}
}
break;
}

if(((1) < cljs.core.count(params))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(cljs.core.last(cljs.core.butlast(params)));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" = cljs.core.first(",arglist,");");

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(cljs.core.last(params));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" = cljs.core.rest(",arglist,");");

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("return ",delegate_name,"(");

var seq__29351_29384 = cljs.core.seq(params);
var chunk__29352_29385 = null;
var count__29353_29386 = (0);
var i__29354_29387 = (0);
while(true){
if((i__29354_29387 < count__29353_29386)){
var param_29388 = chunk__29352_29385.cljs$core$IIndexed$_nth$arity$2(null,i__29354_29387);
cljs.compiler.emit(param_29388);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_29388,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__29389 = seq__29351_29384;
var G__29390 = chunk__29352_29385;
var G__29391 = count__29353_29386;
var G__29392 = (i__29354_29387 + (1));
seq__29351_29384 = G__29389;
chunk__29352_29385 = G__29390;
count__29353_29386 = G__29391;
i__29354_29387 = G__29392;
continue;
} else {
var temp__5735__auto___29393 = cljs.core.seq(seq__29351_29384);
if(temp__5735__auto___29393){
var seq__29351_29394__$1 = temp__5735__auto___29393;
if(cljs.core.chunked_seq_QMARK_(seq__29351_29394__$1)){
var c__4556__auto___29395 = cljs.core.chunk_first(seq__29351_29394__$1);
var G__29396 = cljs.core.chunk_rest(seq__29351_29394__$1);
var G__29397 = c__4556__auto___29395;
var G__29398 = cljs.core.count(c__4556__auto___29395);
var G__29399 = (0);
seq__29351_29384 = G__29396;
chunk__29352_29385 = G__29397;
count__29353_29386 = G__29398;
i__29354_29387 = G__29399;
continue;
} else {
var param_29400 = cljs.core.first(seq__29351_29394__$1);
cljs.compiler.emit(param_29400);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_29400,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__29401 = cljs.core.next(seq__29351_29394__$1);
var G__29402 = null;
var G__29403 = (0);
var G__29404 = (0);
seq__29351_29384 = G__29401;
chunk__29352_29385 = G__29402;
count__29353_29386 = G__29403;
i__29354_29387 = G__29404;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(");");
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(cljs.core.last(params));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" = cljs.core.seq(",arglist,");");

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("return ",delegate_name,"(");

var seq__29355_29405 = cljs.core.seq(params);
var chunk__29356_29406 = null;
var count__29357_29407 = (0);
var i__29358_29408 = (0);
while(true){
if((i__29358_29408 < count__29357_29407)){
var param_29409 = chunk__29356_29406.cljs$core$IIndexed$_nth$arity$2(null,i__29358_29408);
cljs.compiler.emit(param_29409);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_29409,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__29410 = seq__29355_29405;
var G__29411 = chunk__29356_29406;
var G__29412 = count__29357_29407;
var G__29413 = (i__29358_29408 + (1));
seq__29355_29405 = G__29410;
chunk__29356_29406 = G__29411;
count__29357_29407 = G__29412;
i__29358_29408 = G__29413;
continue;
} else {
var temp__5735__auto___29414 = cljs.core.seq(seq__29355_29405);
if(temp__5735__auto___29414){
var seq__29355_29415__$1 = temp__5735__auto___29414;
if(cljs.core.chunked_seq_QMARK_(seq__29355_29415__$1)){
var c__4556__auto___29416 = cljs.core.chunk_first(seq__29355_29415__$1);
var G__29417 = cljs.core.chunk_rest(seq__29355_29415__$1);
var G__29418 = c__4556__auto___29416;
var G__29419 = cljs.core.count(c__4556__auto___29416);
var G__29420 = (0);
seq__29355_29405 = G__29417;
chunk__29356_29406 = G__29418;
count__29357_29407 = G__29419;
i__29358_29408 = G__29420;
continue;
} else {
var param_29421 = cljs.core.first(seq__29355_29415__$1);
cljs.compiler.emit(param_29421);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_29421,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__29422 = cljs.core.next(seq__29355_29415__$1);
var G__29423 = null;
var G__29424 = (0);
var G__29425 = (0);
seq__29355_29405 = G__29422;
chunk__29356_29406 = G__29423;
count__29357_29407 = G__29424;
i__29358_29408 = G__29425;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(");");
}

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("})");
});
cljs.compiler.emit_fn_params = (function cljs$compiler$emit_fn_params(params){
var seq__29426 = cljs.core.seq(params);
var chunk__29427 = null;
var count__29428 = (0);
var i__29429 = (0);
while(true){
if((i__29429 < count__29428)){
var param = chunk__29427.cljs$core$IIndexed$_nth$arity$2(null,i__29429);
cljs.compiler.emit(param);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__29430 = seq__29426;
var G__29431 = chunk__29427;
var G__29432 = count__29428;
var G__29433 = (i__29429 + (1));
seq__29426 = G__29430;
chunk__29427 = G__29431;
count__29428 = G__29432;
i__29429 = G__29433;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__29426);
if(temp__5735__auto__){
var seq__29426__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__29426__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__29426__$1);
var G__29434 = cljs.core.chunk_rest(seq__29426__$1);
var G__29435 = c__4556__auto__;
var G__29436 = cljs.core.count(c__4556__auto__);
var G__29437 = (0);
seq__29426 = G__29434;
chunk__29427 = G__29435;
count__29428 = G__29436;
i__29429 = G__29437;
continue;
} else {
var param = cljs.core.first(seq__29426__$1);
cljs.compiler.emit(param);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__29438 = cljs.core.next(seq__29426__$1);
var G__29439 = null;
var G__29440 = (0);
var G__29441 = (0);
seq__29426 = G__29438;
chunk__29427 = G__29439;
count__29428 = G__29440;
i__29429 = G__29441;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__29442){
var map__29443 = p__29442;
var map__29443__$1 = (((((!((map__29443 == null))))?(((((map__29443.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29443.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29443):map__29443);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29443__$1,cljs.core.cst$kw$body);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29443__$1,cljs.core.cst$kw$type);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29443__$1,cljs.core.cst$kw$name);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29443__$1,cljs.core.cst$kw$params);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29443__$1,cljs.core.cst$kw$env);
var recurs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29443__$1,cljs.core.cst$kw$recurs);
var env__28845__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__28845__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("(function ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name),"(");

cljs.compiler.emit_fn_params(params);

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("var self__ = this;");
} else {
}

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("while(true){");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(expr);

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("break;");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("})");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__28845__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
});
/**
 * Emit code that copies function arguments into an array starting at an index.
 *   Returns name of var holding the array.
 */
cljs.compiler.emit_arguments_to_array = (function cljs$compiler$emit_arguments_to_array(startslice){
if((((startslice >= (0))) && (cljs.core.integer_QMARK_(startslice)))){
} else {
throw (new Error("Assert failed: (and (>= startslice 0) (integer? startslice))"));
}

var mname = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
var i = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname),"__i"].join('');
var a = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname),"__a"].join('');
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic("var ",i," = 0, ",a," = new Array(arguments.length -  ",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([startslice,");"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic("while (",i," < ",a,".length) {",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,"[",i,"] = arguments[",i," + ",startslice,"]; ++",i,";}"], 0));

return a;
});
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__29445){
var map__29446 = p__29445;
var map__29446__$1 = (((((!((map__29446 == null))))?(((((map__29446.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29446.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29446):map__29446);
var f = map__29446__$1;
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29446__$1,cljs.core.cst$kw$body);
var max_fixed_arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29446__$1,cljs.core.cst$kw$fixed_DASH_arity);
var variadic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29446__$1,cljs.core.cst$kw$variadic_QMARK_);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29446__$1,cljs.core.cst$kw$type);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29446__$1,cljs.core.cst$kw$name);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29446__$1,cljs.core.cst$kw$params);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29446__$1,cljs.core.cst$kw$env);
var recurs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29446__$1,cljs.core.cst$kw$recurs);
var env__28845__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__28845__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

var name_29456__$1 = (function (){var or__4126__auto__ = name;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
}
})();
var mname_29457 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name_29456__$1);
var delegate_name_29458 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_29457),"__delegate"].join('');
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("(function() { ");

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("var ",delegate_name_29458," = function (");

var seq__29448_29459 = cljs.core.seq(params);
var chunk__29449_29460 = null;
var count__29450_29461 = (0);
var i__29451_29462 = (0);
while(true){
if((i__29451_29462 < count__29450_29461)){
var param_29463 = chunk__29449_29460.cljs$core$IIndexed$_nth$arity$2(null,i__29451_29462);
cljs.compiler.emit(param_29463);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_29463,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__29464 = seq__29448_29459;
var G__29465 = chunk__29449_29460;
var G__29466 = count__29450_29461;
var G__29467 = (i__29451_29462 + (1));
seq__29448_29459 = G__29464;
chunk__29449_29460 = G__29465;
count__29450_29461 = G__29466;
i__29451_29462 = G__29467;
continue;
} else {
var temp__5735__auto___29468 = cljs.core.seq(seq__29448_29459);
if(temp__5735__auto___29468){
var seq__29448_29469__$1 = temp__5735__auto___29468;
if(cljs.core.chunked_seq_QMARK_(seq__29448_29469__$1)){
var c__4556__auto___29470 = cljs.core.chunk_first(seq__29448_29469__$1);
var G__29471 = cljs.core.chunk_rest(seq__29448_29469__$1);
var G__29472 = c__4556__auto___29470;
var G__29473 = cljs.core.count(c__4556__auto___29470);
var G__29474 = (0);
seq__29448_29459 = G__29471;
chunk__29449_29460 = G__29472;
count__29450_29461 = G__29473;
i__29451_29462 = G__29474;
continue;
} else {
var param_29475 = cljs.core.first(seq__29448_29469__$1);
cljs.compiler.emit(param_29475);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_29475,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__29476 = cljs.core.next(seq__29448_29469__$1);
var G__29477 = null;
var G__29478 = (0);
var G__29479 = (0);
seq__29448_29459 = G__29476;
chunk__29449_29460 = G__29477;
count__29450_29461 = G__29478;
i__29451_29462 = G__29479;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("var self__ = this;");
} else {
}

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("while(true){");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(expr);

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("break;");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("};");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("var ",mname_29457," = function (",cljs.compiler.comma_sep((cljs.core.truth_(variadic)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$var_args], null)):params)),"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("var self__ = this;");
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(cljs.core.last(params));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(" = null;");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if (arguments.length > ",(cljs.core.count(params) - (1)),") {");

var a_29480 = cljs.compiler.emit_arguments_to_array((cljs.core.count(params) - (1)));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("  ",cljs.core.last(params)," = new cljs.core.IndexedSeq(",a_29480,",0,null);");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("} ");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("return ",delegate_name_29458,".call(this,");

var seq__29452_29481 = cljs.core.seq(params);
var chunk__29453_29482 = null;
var count__29454_29483 = (0);
var i__29455_29484 = (0);
while(true){
if((i__29455_29484 < count__29454_29483)){
var param_29485 = chunk__29453_29482.cljs$core$IIndexed$_nth$arity$2(null,i__29455_29484);
cljs.compiler.emit(param_29485);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_29485,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__29486 = seq__29452_29481;
var G__29487 = chunk__29453_29482;
var G__29488 = count__29454_29483;
var G__29489 = (i__29455_29484 + (1));
seq__29452_29481 = G__29486;
chunk__29453_29482 = G__29487;
count__29454_29483 = G__29488;
i__29455_29484 = G__29489;
continue;
} else {
var temp__5735__auto___29490 = cljs.core.seq(seq__29452_29481);
if(temp__5735__auto___29490){
var seq__29452_29491__$1 = temp__5735__auto___29490;
if(cljs.core.chunked_seq_QMARK_(seq__29452_29491__$1)){
var c__4556__auto___29492 = cljs.core.chunk_first(seq__29452_29491__$1);
var G__29493 = cljs.core.chunk_rest(seq__29452_29491__$1);
var G__29494 = c__4556__auto___29492;
var G__29495 = cljs.core.count(c__4556__auto___29492);
var G__29496 = (0);
seq__29452_29481 = G__29493;
chunk__29453_29482 = G__29494;
count__29454_29483 = G__29495;
i__29455_29484 = G__29496;
continue;
} else {
var param_29497 = cljs.core.first(seq__29452_29491__$1);
cljs.compiler.emit(param_29497);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_29497,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__29498 = cljs.core.next(seq__29452_29491__$1);
var G__29499 = null;
var G__29500 = (0);
var G__29501 = (0);
seq__29452_29481 = G__29498;
chunk__29453_29482 = G__29499;
count__29454_29483 = G__29500;
i__29455_29484 = G__29501;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(");");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("};");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_29457,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2(mname_29457,".cljs$lang$applyTo = ");

cljs.compiler.emit_apply_to(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(f,cljs.core.cst$kw$name,name_29456__$1));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_29457,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_29458,";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("return ",mname_29457,";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("})()");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__28845__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$fn,(function (p__29505){
var map__29506 = p__29505;
var map__29506__$1 = (((((!((map__29506 == null))))?(((((map__29506.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29506.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29506):map__29506);
var variadic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29506__$1,cljs.core.cst$kw$variadic_QMARK_);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29506__$1,cljs.core.cst$kw$name);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29506__$1,cljs.core.cst$kw$env);
var methods$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29506__$1,cljs.core.cst$kw$methods);
var max_fixed_arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29506__$1,cljs.core.cst$kw$max_DASH_fixed_DASH_arity);
var recur_frames = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29506__$1,cljs.core.cst$kw$recur_DASH_frames);
var in_loop = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29506__$1,cljs.core.cst$kw$in_DASH_loop);
var loop_lets = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29506__$1,cljs.core.cst$kw$loop_DASH_lets);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$statement,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var recur_params = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$params,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__29502_SHARP_){
var and__4115__auto__ = p1__29502_SHARP_;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.deref(cljs.core.cst$kw$flag.cljs$core$IFn$_invoke$arity$1(p1__29502_SHARP_));
} else {
return and__4115__auto__;
}
}),recur_frames)], 0));
var loop_locals = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(recur_params,(cljs.core.truth_((function (){var or__4126__auto__ = in_loop;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.seq(recur_params);
}
})())?cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$params,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([loop_lets], 0)):null))));
if(loop_locals){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("((function (",cljs.compiler.comma_sep(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,loop_locals)),"){");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
}
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(methods$))){
if(cljs.core.truth_(variadic)){
cljs.compiler.emit_variadic_fn_method(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.first(methods$),cljs.core.cst$kw$name,name));
} else {
cljs.compiler.emit_fn_method(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.first(methods$),cljs.core.cst$kw$name,name));
}
} else {
var name_29559__$1 = (function (){var or__4126__auto__ = name;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
}
})();
var mname_29560 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name_29559__$1);
var maxparams_29561 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.max_key,cljs.core.count,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$params,methods$));
var mmap_29562 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_29560),"__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
}),methods$));
var ms_29563 = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__29503_SHARP_){
return cljs.core.count(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__29503_SHARP_)));
}),cljs.core.seq(mmap_29562));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("(function() {");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",mname_29560," = null;");

var seq__29508_29564 = cljs.core.seq(ms_29563);
var chunk__29509_29565 = null;
var count__29510_29566 = (0);
var i__29511_29567 = (0);
while(true){
if((i__29511_29567 < count__29510_29566)){
var vec__29518_29568 = chunk__29509_29565.cljs$core$IIndexed$_nth$arity$2(null,i__29511_29567);
var n_29569 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29518_29568,(0),null);
var meth_29570 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29518_29568,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("var ",n_29569," = ");

if(cljs.core.truth_(cljs.core.cst$kw$variadic_QMARK_.cljs$core$IFn$_invoke$arity$1(meth_29570))){
cljs.compiler.emit_variadic_fn_method(meth_29570);
} else {
cljs.compiler.emit_fn_method(meth_29570);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");


var G__29571 = seq__29508_29564;
var G__29572 = chunk__29509_29565;
var G__29573 = count__29510_29566;
var G__29574 = (i__29511_29567 + (1));
seq__29508_29564 = G__29571;
chunk__29509_29565 = G__29572;
count__29510_29566 = G__29573;
i__29511_29567 = G__29574;
continue;
} else {
var temp__5735__auto___29575 = cljs.core.seq(seq__29508_29564);
if(temp__5735__auto___29575){
var seq__29508_29576__$1 = temp__5735__auto___29575;
if(cljs.core.chunked_seq_QMARK_(seq__29508_29576__$1)){
var c__4556__auto___29577 = cljs.core.chunk_first(seq__29508_29576__$1);
var G__29578 = cljs.core.chunk_rest(seq__29508_29576__$1);
var G__29579 = c__4556__auto___29577;
var G__29580 = cljs.core.count(c__4556__auto___29577);
var G__29581 = (0);
seq__29508_29564 = G__29578;
chunk__29509_29565 = G__29579;
count__29510_29566 = G__29580;
i__29511_29567 = G__29581;
continue;
} else {
var vec__29521_29582 = cljs.core.first(seq__29508_29576__$1);
var n_29583 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29521_29582,(0),null);
var meth_29584 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29521_29582,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("var ",n_29583," = ");

if(cljs.core.truth_(cljs.core.cst$kw$variadic_QMARK_.cljs$core$IFn$_invoke$arity$1(meth_29584))){
cljs.compiler.emit_variadic_fn_method(meth_29584);
} else {
cljs.compiler.emit_fn_method(meth_29584);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");


var G__29585 = cljs.core.next(seq__29508_29576__$1);
var G__29586 = null;
var G__29587 = (0);
var G__29588 = (0);
seq__29508_29564 = G__29585;
chunk__29509_29565 = G__29586;
count__29510_29566 = G__29587;
i__29511_29567 = G__29588;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_29560," = function(",cljs.compiler.comma_sep((cljs.core.truth_(variadic)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(maxparams_29561),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$var_args], null)):maxparams_29561)),"){");

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(cljs.core.last(maxparams_29561));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(" = var_args;");
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("switch(arguments.length){");

var seq__29524_29589 = cljs.core.seq(ms_29563);
var chunk__29525_29590 = null;
var count__29526_29591 = (0);
var i__29527_29592 = (0);
while(true){
if((i__29527_29592 < count__29526_29591)){
var vec__29534_29593 = chunk__29525_29590.cljs$core$IIndexed$_nth$arity$2(null,i__29527_29592);
var n_29594 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29534_29593,(0),null);
var meth_29595 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29534_29593,(1),null);
if(cljs.core.truth_(cljs.core.cst$kw$variadic_QMARK_.cljs$core$IFn$_invoke$arity$1(meth_29595))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("default:");

var restarg_29596 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",restarg_29596," = null;");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if (arguments.length > ",max_fixed_arity,") {");

var a_29597 = cljs.compiler.emit_arguments_to_array(max_fixed_arity);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(restarg_29596," = new cljs.core.IndexedSeq(",a_29597,",0,null);");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic("return ",n_29594,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep(cljs.core.butlast(maxparams_29561)),(((cljs.core.count(maxparams_29561) > (1)))?", ":null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([restarg_29596,");"], 0));
} else {
var pcnt_29598 = cljs.core.count(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(meth_29595));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",pcnt_29598,":");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("return ",n_29594,".call(this",(((pcnt_29598 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(pcnt_29598,maxparams_29561)),null,(1),null)),(2),null))),");");
}


var G__29599 = seq__29524_29589;
var G__29600 = chunk__29525_29590;
var G__29601 = count__29526_29591;
var G__29602 = (i__29527_29592 + (1));
seq__29524_29589 = G__29599;
chunk__29525_29590 = G__29600;
count__29526_29591 = G__29601;
i__29527_29592 = G__29602;
continue;
} else {
var temp__5735__auto___29603 = cljs.core.seq(seq__29524_29589);
if(temp__5735__auto___29603){
var seq__29524_29604__$1 = temp__5735__auto___29603;
if(cljs.core.chunked_seq_QMARK_(seq__29524_29604__$1)){
var c__4556__auto___29605 = cljs.core.chunk_first(seq__29524_29604__$1);
var G__29606 = cljs.core.chunk_rest(seq__29524_29604__$1);
var G__29607 = c__4556__auto___29605;
var G__29608 = cljs.core.count(c__4556__auto___29605);
var G__29609 = (0);
seq__29524_29589 = G__29606;
chunk__29525_29590 = G__29607;
count__29526_29591 = G__29608;
i__29527_29592 = G__29609;
continue;
} else {
var vec__29537_29610 = cljs.core.first(seq__29524_29604__$1);
var n_29611 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29537_29610,(0),null);
var meth_29612 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29537_29610,(1),null);
if(cljs.core.truth_(cljs.core.cst$kw$variadic_QMARK_.cljs$core$IFn$_invoke$arity$1(meth_29612))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("default:");

var restarg_29613 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",restarg_29613," = null;");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if (arguments.length > ",max_fixed_arity,") {");

var a_29614 = cljs.compiler.emit_arguments_to_array(max_fixed_arity);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(restarg_29613," = new cljs.core.IndexedSeq(",a_29614,",0,null);");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic("return ",n_29611,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep(cljs.core.butlast(maxparams_29561)),(((cljs.core.count(maxparams_29561) > (1)))?", ":null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([restarg_29613,");"], 0));
} else {
var pcnt_29615 = cljs.core.count(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(meth_29612));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",pcnt_29615,":");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("return ",n_29611,".call(this",(((pcnt_29615 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(pcnt_29615,maxparams_29561)),null,(1),null)),(2),null))),");");
}


var G__29616 = cljs.core.next(seq__29524_29604__$1);
var G__29617 = null;
var G__29618 = (0);
var G__29619 = (0);
seq__29524_29589 = G__29616;
chunk__29525_29590 = G__29617;
count__29526_29591 = G__29618;
i__29527_29592 = G__29619;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");

var arg_count_js_29620 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$self__,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(cljs.core.val(cljs.core.first(ms_29563)))))))?"(arguments.length - 1)":"arguments.length");
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("throw(new Error('Invalid arity: ' + ",arg_count_js_29620,"));");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("};");

if(cljs.core.truth_(variadic)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_29560,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_29560,".cljs$lang$applyTo = ",cljs.core.some((function (p1__29504_SHARP_){
var vec__29540 = p1__29504_SHARP_;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29540,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29540,(1),null);
if(cljs.core.truth_(cljs.core.cst$kw$variadic_QMARK_.cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
}),ms_29563),".cljs$lang$applyTo;");
} else {
}

var seq__29543_29621 = cljs.core.seq(ms_29563);
var chunk__29544_29622 = null;
var count__29545_29623 = (0);
var i__29546_29624 = (0);
while(true){
if((i__29546_29624 < count__29545_29623)){
var vec__29553_29625 = chunk__29544_29622.cljs$core$IIndexed$_nth$arity$2(null,i__29546_29624);
var n_29626 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29553_29625,(0),null);
var meth_29627 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29553_29625,(1),null);
var c_29628 = cljs.core.count(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(meth_29627));
if(cljs.core.truth_(cljs.core.cst$kw$variadic_QMARK_.cljs$core$IFn$_invoke$arity$1(meth_29627))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_29560,".cljs$core$IFn$_invoke$arity$variadic = ",n_29626,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(mname_29560,".cljs$core$IFn$_invoke$arity$",c_29628," = ",n_29626,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}


var G__29629 = seq__29543_29621;
var G__29630 = chunk__29544_29622;
var G__29631 = count__29545_29623;
var G__29632 = (i__29546_29624 + (1));
seq__29543_29621 = G__29629;
chunk__29544_29622 = G__29630;
count__29545_29623 = G__29631;
i__29546_29624 = G__29632;
continue;
} else {
var temp__5735__auto___29633 = cljs.core.seq(seq__29543_29621);
if(temp__5735__auto___29633){
var seq__29543_29634__$1 = temp__5735__auto___29633;
if(cljs.core.chunked_seq_QMARK_(seq__29543_29634__$1)){
var c__4556__auto___29635 = cljs.core.chunk_first(seq__29543_29634__$1);
var G__29636 = cljs.core.chunk_rest(seq__29543_29634__$1);
var G__29637 = c__4556__auto___29635;
var G__29638 = cljs.core.count(c__4556__auto___29635);
var G__29639 = (0);
seq__29543_29621 = G__29636;
chunk__29544_29622 = G__29637;
count__29545_29623 = G__29638;
i__29546_29624 = G__29639;
continue;
} else {
var vec__29556_29640 = cljs.core.first(seq__29543_29634__$1);
var n_29641 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29556_29640,(0),null);
var meth_29642 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29556_29640,(1),null);
var c_29643 = cljs.core.count(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(meth_29642));
if(cljs.core.truth_(cljs.core.cst$kw$variadic_QMARK_.cljs$core$IFn$_invoke$arity$1(meth_29642))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_29560,".cljs$core$IFn$_invoke$arity$variadic = ",n_29641,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(mname_29560,".cljs$core$IFn$_invoke$arity$",c_29643," = ",n_29641,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}


var G__29644 = cljs.core.next(seq__29543_29634__$1);
var G__29645 = null;
var G__29646 = (0);
var G__29647 = (0);
seq__29543_29621 = G__29644;
chunk__29544_29622 = G__29645;
count__29545_29623 = G__29646;
i__29546_29624 = G__29647;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("return ",mname_29560,";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("})()");
}

if(loop_locals){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(";})(",cljs.compiler.comma_sep(loop_locals),"))");
} else {
return null;
}
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$do,(function (p__29648){
var map__29649 = p__29648;
var map__29649__$1 = (((((!((map__29649 == null))))?(((((map__29649.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29649.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29649):map__29649);
var statements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29649__$1,cljs.core.cst$kw$statements);
var ret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29649__$1,cljs.core.cst$kw$ret);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29649__$1,cljs.core.cst$kw$env);
var context = cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env);
if(((cljs.core.seq(statements)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,context)))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("(function (){");
} else {
}

var seq__29651_29655 = cljs.core.seq(statements);
var chunk__29652_29656 = null;
var count__29653_29657 = (0);
var i__29654_29658 = (0);
while(true){
if((i__29654_29658 < count__29653_29657)){
var s_29659 = chunk__29652_29656.cljs$core$IIndexed$_nth$arity$2(null,i__29654_29658);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(s_29659);


var G__29660 = seq__29651_29655;
var G__29661 = chunk__29652_29656;
var G__29662 = count__29653_29657;
var G__29663 = (i__29654_29658 + (1));
seq__29651_29655 = G__29660;
chunk__29652_29656 = G__29661;
count__29653_29657 = G__29662;
i__29654_29658 = G__29663;
continue;
} else {
var temp__5735__auto___29664 = cljs.core.seq(seq__29651_29655);
if(temp__5735__auto___29664){
var seq__29651_29665__$1 = temp__5735__auto___29664;
if(cljs.core.chunked_seq_QMARK_(seq__29651_29665__$1)){
var c__4556__auto___29666 = cljs.core.chunk_first(seq__29651_29665__$1);
var G__29667 = cljs.core.chunk_rest(seq__29651_29665__$1);
var G__29668 = c__4556__auto___29666;
var G__29669 = cljs.core.count(c__4556__auto___29666);
var G__29670 = (0);
seq__29651_29655 = G__29667;
chunk__29652_29656 = G__29668;
count__29653_29657 = G__29669;
i__29654_29658 = G__29670;
continue;
} else {
var s_29671 = cljs.core.first(seq__29651_29665__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(s_29671);


var G__29672 = cljs.core.next(seq__29651_29665__$1);
var G__29673 = null;
var G__29674 = (0);
var G__29675 = (0);
seq__29651_29655 = G__29672;
chunk__29652_29656 = G__29673;
count__29653_29657 = G__29674;
i__29654_29658 = G__29675;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emit(ret);

if(((cljs.core.seq(statements)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,context)))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("})()");
} else {
return null;
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$try,(function (p__29676){
var map__29677 = p__29676;
var map__29677__$1 = (((((!((map__29677 == null))))?(((((map__29677.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29677.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29677):map__29677);
var try$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29677__$1,cljs.core.cst$kw$body);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29677__$1,cljs.core.cst$kw$env);
var catch$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29677__$1,cljs.core.cst$kw$catch);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29677__$1,cljs.core.cst$kw$name);
var finally$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29677__$1,cljs.core.cst$kw$finally);
var context = cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_((function (){var or__4126__auto__ = name;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return finally$;
}
})())){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,context)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("(function (){");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("try{",try$,"}");

if(cljs.core.truth_(name)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("catch (",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name),"){",catch$,"}");
} else {
}

if(cljs.core.truth_(finally$)){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$const,cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.unwrap_quote(finally$)))){
} else {
throw (new Error(["Assert failed: ","finally block cannot contain constant","\n","(not= :const (:op (ana/unwrap-quote finally)))"].join('')));
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("finally {",finally$,"}");
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,context)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("})()");
} else {
return null;
}
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(try$);
}
}));
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__29679,is_loop){
var map__29680 = p__29679;
var map__29680__$1 = (((((!((map__29680 == null))))?(((((map__29680.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29680.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29680):map__29680);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29680__$1,cljs.core.cst$kw$body);
var bindings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29680__$1,cljs.core.cst$kw$bindings);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29680__$1,cljs.core.cst$kw$env);
var context = cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,context)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("(function (){");
} else {
}

var _STAR_lexical_renames_STAR__orig_val__29682_29696 = cljs.compiler._STAR_lexical_renames_STAR_;
var _STAR_lexical_renames_STAR__temp_val__29683_29697 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$statement,context))?cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (binding){
var name = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.compiler.hash_scope(binding),cljs.core.gensym.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"-"].join(''))],null));
}),bindings):null));
(cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__temp_val__29683_29697);

try{var seq__29684_29698 = cljs.core.seq(bindings);
var chunk__29685_29699 = null;
var count__29686_29700 = (0);
var i__29687_29701 = (0);
while(true){
if((i__29687_29701 < count__29686_29700)){
var map__29692_29702 = chunk__29685_29699.cljs$core$IIndexed$_nth$arity$2(null,i__29687_29701);
var map__29692_29703__$1 = (((((!((map__29692_29702 == null))))?(((((map__29692_29702.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29692_29702.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29692_29702):map__29692_29702);
var binding_29704 = map__29692_29703__$1;
var init_29705 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29692_29703__$1,cljs.core.cst$kw$init);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(binding_29704);

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" = ",init_29705,";");


var G__29706 = seq__29684_29698;
var G__29707 = chunk__29685_29699;
var G__29708 = count__29686_29700;
var G__29709 = (i__29687_29701 + (1));
seq__29684_29698 = G__29706;
chunk__29685_29699 = G__29707;
count__29686_29700 = G__29708;
i__29687_29701 = G__29709;
continue;
} else {
var temp__5735__auto___29710 = cljs.core.seq(seq__29684_29698);
if(temp__5735__auto___29710){
var seq__29684_29711__$1 = temp__5735__auto___29710;
if(cljs.core.chunked_seq_QMARK_(seq__29684_29711__$1)){
var c__4556__auto___29712 = cljs.core.chunk_first(seq__29684_29711__$1);
var G__29713 = cljs.core.chunk_rest(seq__29684_29711__$1);
var G__29714 = c__4556__auto___29712;
var G__29715 = cljs.core.count(c__4556__auto___29712);
var G__29716 = (0);
seq__29684_29698 = G__29713;
chunk__29685_29699 = G__29714;
count__29686_29700 = G__29715;
i__29687_29701 = G__29716;
continue;
} else {
var map__29694_29717 = cljs.core.first(seq__29684_29711__$1);
var map__29694_29718__$1 = (((((!((map__29694_29717 == null))))?(((((map__29694_29717.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29694_29717.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29694_29717):map__29694_29717);
var binding_29719 = map__29694_29718__$1;
var init_29720 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29694_29718__$1,cljs.core.cst$kw$init);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(binding_29719);

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" = ",init_29720,";");


var G__29721 = cljs.core.next(seq__29684_29711__$1);
var G__29722 = null;
var G__29723 = (0);
var G__29724 = (0);
seq__29684_29698 = G__29721;
chunk__29685_29699 = G__29722;
count__29686_29700 = G__29723;
i__29687_29701 = G__29724;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(is_loop)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("while(true){");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(expr);

if(cljs.core.truth_(is_loop)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("break;");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");
} else {
}
}finally {(cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__orig_val__29682_29696);
}
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,context)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("})()");
} else {
return null;
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$let,(function (ast){
return cljs.compiler.emit_let(ast,false);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$loop,(function (ast){
return cljs.compiler.emit_let(ast,true);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$recur,(function (p__29725){
var map__29726 = p__29725;
var map__29726__$1 = (((((!((map__29726 == null))))?(((((map__29726.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29726.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29726):map__29726);
var frame = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29726__$1,cljs.core.cst$kw$frame);
var exprs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29726__$1,cljs.core.cst$kw$exprs);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29726__$1,cljs.core.cst$kw$env);
var temps = cljs.core.vec(cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.count(exprs),cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym)));
var params = cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(frame);
var n__4613__auto___29728 = cljs.core.count(exprs);
var i_29729 = (0);
while(true){
if((i_29729 < n__4613__auto___29728)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("var ",(temps.cljs$core$IFn$_invoke$arity$1 ? temps.cljs$core$IFn$_invoke$arity$1(i_29729) : temps.call(null,i_29729))," = ",(exprs.cljs$core$IFn$_invoke$arity$1 ? exprs.cljs$core$IFn$_invoke$arity$1(i_29729) : exprs.call(null,i_29729)),";");

var G__29730 = (i_29729 + (1));
i_29729 = G__29730;
continue;
} else {
}
break;
}

var n__4613__auto___29731 = cljs.core.count(exprs);
var i_29732 = (0);
while(true){
if((i_29732 < n__4613__auto___29731)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1((params.cljs$core$IFn$_invoke$arity$1 ? params.cljs$core$IFn$_invoke$arity$1(i_29732) : params.call(null,i_29732)))," = ",(temps.cljs$core$IFn$_invoke$arity$1 ? temps.cljs$core$IFn$_invoke$arity$1(i_29732) : temps.call(null,i_29732)),";");

var G__29733 = (i_29732 + (1));
i_29732 = G__29733;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("continue;");
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$letfn,(function (p__29734){
var map__29735 = p__29734;
var map__29735__$1 = (((((!((map__29735 == null))))?(((((map__29735.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29735.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29735):map__29735);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29735__$1,cljs.core.cst$kw$body);
var bindings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29735__$1,cljs.core.cst$kw$bindings);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29735__$1,cljs.core.cst$kw$env);
var context = cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,context)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("(function (){");
} else {
}

var seq__29737_29749 = cljs.core.seq(bindings);
var chunk__29738_29750 = null;
var count__29739_29751 = (0);
var i__29740_29752 = (0);
while(true){
if((i__29740_29752 < count__29739_29751)){
var map__29745_29753 = chunk__29738_29750.cljs$core$IIndexed$_nth$arity$2(null,i__29740_29752);
var map__29745_29754__$1 = (((((!((map__29745_29753 == null))))?(((((map__29745_29753.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29745_29753.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29745_29753):map__29745_29753);
var binding_29755 = map__29745_29754__$1;
var init_29756 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29745_29754__$1,cljs.core.cst$kw$init);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("var ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(binding_29755)," = ",init_29756,";");


var G__29757 = seq__29737_29749;
var G__29758 = chunk__29738_29750;
var G__29759 = count__29739_29751;
var G__29760 = (i__29740_29752 + (1));
seq__29737_29749 = G__29757;
chunk__29738_29750 = G__29758;
count__29739_29751 = G__29759;
i__29740_29752 = G__29760;
continue;
} else {
var temp__5735__auto___29761 = cljs.core.seq(seq__29737_29749);
if(temp__5735__auto___29761){
var seq__29737_29762__$1 = temp__5735__auto___29761;
if(cljs.core.chunked_seq_QMARK_(seq__29737_29762__$1)){
var c__4556__auto___29763 = cljs.core.chunk_first(seq__29737_29762__$1);
var G__29764 = cljs.core.chunk_rest(seq__29737_29762__$1);
var G__29765 = c__4556__auto___29763;
var G__29766 = cljs.core.count(c__4556__auto___29763);
var G__29767 = (0);
seq__29737_29749 = G__29764;
chunk__29738_29750 = G__29765;
count__29739_29751 = G__29766;
i__29740_29752 = G__29767;
continue;
} else {
var map__29747_29768 = cljs.core.first(seq__29737_29762__$1);
var map__29747_29769__$1 = (((((!((map__29747_29768 == null))))?(((((map__29747_29768.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29747_29768.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29747_29768):map__29747_29768);
var binding_29770 = map__29747_29769__$1;
var init_29771 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29747_29769__$1,cljs.core.cst$kw$init);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("var ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(binding_29770)," = ",init_29771,";");


var G__29772 = cljs.core.next(seq__29737_29762__$1);
var G__29773 = null;
var G__29774 = (0);
var G__29775 = (0);
seq__29737_29749 = G__29772;
chunk__29738_29750 = G__29773;
count__29739_29751 = G__29774;
i__29740_29752 = G__29775;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(expr);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,context)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("})()");
} else {
return null;
}
}));
cljs.compiler.protocol_prefix = (function cljs$compiler$protocol_prefix(psym){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym).replace((new RegExp("\\.","g")),"$").replace("/","$")),"$"].join(''));
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$invoke,(function (p__29778){
var map__29779 = p__29778;
var map__29779__$1 = (((((!((map__29779 == null))))?(((((map__29779.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29779.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29779):map__29779);
var expr = map__29779__$1;
var f = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29779__$1,cljs.core.cst$kw$fn);
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29779__$1,cljs.core.cst$kw$args);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29779__$1,cljs.core.cst$kw$env);
var info = cljs.core.cst$kw$info.cljs$core$IFn$_invoke$arity$1(f);
var fn_QMARK_ = (function (){var and__4115__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__4115__auto__)){
if(cljs.core.not(cljs.core.cst$kw$dynamic.cljs$core$IFn$_invoke$arity$1(info))){
return cljs.core.cst$kw$fn_DASH_var.cljs$core$IFn$_invoke$arity$1(info);
} else {
return false;
}
} else {
return and__4115__auto__;
}
})();
var protocol = cljs.core.cst$kw$protocol.cljs$core$IFn$_invoke$arity$1(info);
var tag = cljs.analyzer.infer_tag(env,cljs.core.first(cljs.core.cst$kw$args.cljs$core$IFn$_invoke$arity$1(expr)));
var proto_QMARK_ = (function (){var and__4115__auto__ = protocol;
if(cljs.core.truth_(and__4115__auto__)){
var and__4115__auto____$1 = tag;
if(cljs.core.truth_(and__4115__auto____$1)){
var or__4126__auto__ = (function (){var and__4115__auto____$2 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__4115__auto____$2)){
var and__4115__auto____$3 = protocol;
if(cljs.core.truth_(and__4115__auto____$3)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag,cljs.core.cst$sym$not_DASH_native);
} else {
return and__4115__auto____$3;
}
} else {
return and__4115__auto____$2;
}
})();
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var and__4115__auto____$2 = (function (){var or__4126__auto____$1 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return cljs.core.cst$kw$protocol_DASH_inline.cljs$core$IFn$_invoke$arity$1(env);
}
})();
if(cljs.core.truth_(and__4115__auto____$2)){
var or__4126__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(protocol,tag);
if(or__4126__auto____$1){
return or__4126__auto____$1;
} else {
if((!(cljs.core.set_QMARK_(tag)))){
if(cljs.core.not((function (){var fexpr__29791 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [cljs.core.cst$sym$clj,"null",cljs.core.cst$sym$boolean,"null",cljs.core.cst$sym$object,"null",cljs.core.cst$sym$any,"null",cljs.core.cst$sym$js,"null",cljs.core.cst$sym$number,"null",cljs.core.cst$sym$clj_DASH_or_DASH_nil,"null",cljs.core.cst$sym$array,"null",cljs.core.cst$sym$string,"null",cljs.core.cst$sym$function,"null",cljs.core.cst$sym$clj_DASH_nil,"null"], null), null);
return (fexpr__29791.cljs$core$IFn$_invoke$arity$1 ? fexpr__29791.cljs$core$IFn$_invoke$arity$1(tag) : fexpr__29791.call(null,tag));
})())){
var temp__5735__auto__ = cljs.core.cst$kw$protocols.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_existing_var(env,cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(tag,cljs.core.assoc,cljs.core.cst$kw$cljs$analyzer_SLASH_no_DASH_resolve,true)));
if(cljs.core.truth_(temp__5735__auto__)){
var ps = temp__5735__auto__;
return (ps.cljs$core$IFn$_invoke$arity$1 ? ps.cljs$core$IFn$_invoke$arity$1(protocol) : ps.call(null,protocol));
} else {
return null;
}
} else {
return false;
}
} else {
return false;
}
}
} else {
return and__4115__auto____$2;
}
}
} else {
return and__4115__auto____$1;
}
} else {
return and__4115__auto__;
}
})();
var first_arg_tag = cljs.analyzer.infer_tag(env,cljs.core.first(cljs.core.cst$kw$args.cljs$core$IFn$_invoke$arity$1(expr)));
var opt_not_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(info),cljs.core.cst$sym$cljs$core_SLASH_not)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(first_arg_tag,cljs.core.cst$sym$boolean)));
var opt_count_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(info),cljs.core.cst$sym$cljs$core_SLASH_count)) && (cljs.core.boolean$((function (){var fexpr__29793 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$sym$array,"null",cljs.core.cst$sym$string,"null"], null), null);
return (fexpr__29793.cljs$core$IFn$_invoke$arity$1 ? fexpr__29793.cljs$core$IFn$_invoke$arity$1(first_arg_tag) : fexpr__29793.call(null,first_arg_tag));
})())));
var ns = cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(info);
var ftag = cljs.analyzer.infer_tag(env,f);
var js_QMARK_ = (function (){var or__4126__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ns,cljs.core.cst$sym$js);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ns,cljs.core.cst$sym$Math);
if(or__4126__auto____$1){
return or__4126__auto____$1;
} else {
return cljs.core.cst$kw$foreign.cljs$core$IFn$_invoke$arity$1(info);
}
}
})();
var goog_QMARK_ = (cljs.core.truth_(ns)?(function (){var or__4126__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ns,cljs.core.cst$sym$goog);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = (function (){var temp__5735__auto__ = cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns);
if(cljs.core.truth_(temp__5735__auto__)){
var ns_str = temp__5735__auto__;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(clojure.string.split.cljs$core$IFn$_invoke$arity$2(ns_str,/\./),(0),null),"goog");
} else {
return null;
}
})();
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return (!(cljs.core.contains_QMARK_(cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_)),ns)));
}
}
})():null);
var keyword_QMARK_ = (function (){var or__4126__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$cljs$core_SLASH_Keyword,ftag);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var f__$1 = cljs.analyzer.unwrap_quote(f);
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(f__$1),cljs.core.cst$kw$const)) && ((cljs.core.cst$kw$form.cljs$core$IFn$_invoke$arity$1(f__$1) instanceof cljs.core.Keyword)));
}
})();
var vec__29781 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count(args);
var variadic_QMARK_ = cljs.core.cst$kw$variadic_QMARK_.cljs$core$IFn$_invoke$arity$1(info);
var mps = cljs.core.cst$kw$method_DASH_params.cljs$core$IFn$_invoke$arity$1(info);
var mfa = cljs.core.cst$kw$max_DASH_fixed_DASH_arity.cljs$core$IFn$_invoke$arity$1(info);
if(((cljs.core.not(variadic_QMARK_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(mps),(1))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
} else {
if(cljs.core.truth_((function (){var and__4115__auto__ = variadic_QMARK_;
if(cljs.core.truth_(and__4115__auto__)){
return (arity > mfa);
} else {
return and__4115__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$info], null),(function (info__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(info__$1,cljs.core.cst$kw$name,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(info__$1)),".cljs$core$IFn$_invoke$arity$variadic"].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$info], null),(function (p1__29776_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__29776_SHARP_,cljs.core.cst$kw$shadow),cljs.core.cst$kw$fn_DASH_self_DASH_name);
}));
})),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$max_DASH_fixed_DASH_arity,mfa], null)], null);
} else {
var arities = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([arity]),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$info], null),(function (info__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(info__$1,cljs.core.cst$kw$name,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(info__$1)),".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$info], null),(function (p1__29777_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__29777_SHARP_,cljs.core.cst$kw$shadow),cljs.core.cst$kw$fn_DASH_self_DASH_name);
}));
})),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29781,(0),null);
var variadic_invoke = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29781,(1),null);
var env__28845__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__28845__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

if(opt_not_QMARK_){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("(!(",cljs.core.first(args),"))");
} else {
if(opt_count_QMARK_){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("((",cljs.core.first(args),").length)");
} else {
if(cljs.core.truth_(proto_QMARK_)){
var pimpl_29796 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.compiler.protocol_prefix(protocol))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.name(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(info)))),"$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(args))].join('');
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.first(args),".",pimpl_29796,"(",cljs.compiler.comma_sep(cljs.core.cons("null",cljs.core.rest(args))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([")"], 0));
} else {
if(keyword_QMARK_){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count(args),"(",cljs.compiler.comma_sep(args),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([")"], 0));
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_29797 = cljs.core.cst$kw$max_DASH_fixed_DASH_arity.cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(f__$1,"(",cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(mfa_29797,args)),(((mfa_29797 === (0)))?null:","),"cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.compiler.comma_sep(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(mfa_29797,args)),"], 0))"], 0));
} else {
if(cljs.core.truth_((function (){var or__4126__auto__ = fn_QMARK_;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = js_QMARK_;
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return goog_QMARK_;
}
}
})())){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4(f__$1,"(",cljs.compiler.comma_sep(args),")");
} else {
if(cljs.core.truth_((function (){var and__4115__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__4115__auto__)){
var G__29795 = cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(f__$1);
var fexpr__29794 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$var,null,cljs.core.cst$kw$js_DASH_var,null,cljs.core.cst$kw$local,null], null), null);
return (fexpr__29794.cljs$core$IFn$_invoke$arity$1 ? fexpr__29794.cljs$core$IFn$_invoke$arity$1(G__29795) : fexpr__29794.call(null,G__29795));
} else {
return and__4115__auto__;
}
})())){
var fprop_29798 = [".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(args))].join('');
if(cljs.core.truth_(cljs.analyzer._STAR_fn_invoke_direct_STAR_)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic("(",f__$1,fprop_29798," ? ",f__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fprop_29798,"(",cljs.compiler.comma_sep(args),") : ",f__$1,"(",cljs.compiler.comma_sep(args),"))"], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic("(",f__$1,fprop_29798," ? ",f__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fprop_29798,"(",cljs.compiler.comma_sep(args),") : ",f__$1,".call(",cljs.compiler.comma_sep(cljs.core.cons("null",args)),"))"], 0));
}
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4(f__$1,".call(",cljs.compiler.comma_sep(cljs.core.cons("null",args)),")");
}

}
}
}
}
}
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__28845__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$new,(function (p__29799){
var map__29800 = p__29799;
var map__29800__$1 = (((((!((map__29800 == null))))?(((((map__29800.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29800.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29800):map__29800);
var ctor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29800__$1,cljs.core.cst$kw$class);
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29800__$1,cljs.core.cst$kw$args);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29800__$1,cljs.core.cst$kw$env);
var env__28845__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__28845__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("(new ",ctor,"(",cljs.compiler.comma_sep(args),"))");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__28845__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$set_BANG_,(function (p__29802){
var map__29803 = p__29802;
var map__29803__$1 = (((((!((map__29803 == null))))?(((((map__29803.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29803.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29803):map__29803);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29803__$1,cljs.core.cst$kw$target);
var val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29803__$1,cljs.core.cst$kw$val);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29803__$1,cljs.core.cst$kw$env);
var env__28845__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__28845__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("(",target," = ",val,")");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__28845__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_global_export = (function cljs$compiler$emit_global_export(ns_name,global_exports,lib){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ns_name),".",cljs.analyzer.munge_global_export(lib)," = goog.global",cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (prop){
return ["[\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(prop),"\"]"].join('');
}),clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.name((function (){var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(global_exports,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(lib));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(global_exports,cljs.core.name(lib));
}
})()),/\./))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
});
cljs.compiler.load_libs = (function cljs$compiler$load_libs(libs,seen,reloads,deps,ns_name){
var map__29805 = cljs.core.deref(cljs.env._STAR_compiler_STAR_);
var map__29805__$1 = (((((!((map__29805 == null))))?(((((map__29805.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29805.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29805):map__29805);
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29805__$1,cljs.core.cst$kw$options);
var js_dependency_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29805__$1,cljs.core.cst$kw$js_DASH_dependency_DASH_index);
var map__29806 = options;
var map__29806__$1 = (((((!((map__29806 == null))))?(((((map__29806.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29806.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29806):map__29806);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29806__$1,cljs.core.cst$kw$target);
var nodejs_rt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29806__$1,cljs.core.cst$kw$nodejs_DASH_rt);
var optimizations = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29806__$1,cljs.core.cst$kw$optimizations);
var loaded_libs = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$cljs$core$_STAR_loaded_DASH_libs_STAR_);
var loaded_libs_temp = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$cljs$core$_STAR_loaded_DASH_libs_STAR_));
var vec__29807 = (function (){var libs__$1 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.vals(seen)),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.vals(libs)),deps));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$nodejs,target)){
var map__29812 = cljs.core.group_by(cljs.analyzer.node_module_dep_QMARK_,libs__$1);
var map__29812__$1 = (((((!((map__29812 == null))))?(((((map__29812.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29812.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29812):map__29812);
var node_libs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29812__$1,true);
var libs_to_load = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29812__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_libs,libs_to_load], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,libs__$1], null);
}
})();
var node_libs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29807,(0),null);
var libs_to_load = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29807,(1),null);
var global_exports_libs = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.dep_has_global_exports_QMARK_,libs_to_load);
if(cljs.core.truth_(cljs.core.cst$kw$reload_DASH_all.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs)))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("if(!COMPILED) ",loaded_libs_temp," = ",loaded_libs," || cljs.core.set([\"cljs.core\"]);");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if(!COMPILED) ",loaded_libs," = cljs.core.set([\"cljs.core\"]);");
} else {
}

var seq__29814_29834 = cljs.core.seq(libs_to_load);
var chunk__29815_29835 = null;
var count__29816_29836 = (0);
var i__29817_29837 = (0);
while(true){
if((i__29817_29837 < count__29816_29836)){
var lib_29838 = chunk__29815_29835.cljs$core$IIndexed$_nth$arity$2(null,i__29817_29837);
if(((cljs.analyzer.foreign_dep_QMARK_(lib_29838)) && ((!(cljs.core.keyword_identical_QMARK_(optimizations,cljs.core.cst$kw$none)))))){
} else {
if(cljs.core.truth_((function (){var or__4126__auto__ = cljs.core.cst$kw$reload.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_29838),cljs.core.cst$kw$reload);
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_29838),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__4126__auto__ = cljs.core.cst$kw$reload_DASH_all.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_29838),cljs.core.cst$kw$reload_DASH_all);
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_29838),"', 'reload-all');");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(lib_29838,cljs.core.cst$sym$goog)){
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_29838),"');");
}

}
}
}


var G__29839 = seq__29814_29834;
var G__29840 = chunk__29815_29835;
var G__29841 = count__29816_29836;
var G__29842 = (i__29817_29837 + (1));
seq__29814_29834 = G__29839;
chunk__29815_29835 = G__29840;
count__29816_29836 = G__29841;
i__29817_29837 = G__29842;
continue;
} else {
var temp__5735__auto___29843 = cljs.core.seq(seq__29814_29834);
if(temp__5735__auto___29843){
var seq__29814_29844__$1 = temp__5735__auto___29843;
if(cljs.core.chunked_seq_QMARK_(seq__29814_29844__$1)){
var c__4556__auto___29845 = cljs.core.chunk_first(seq__29814_29844__$1);
var G__29846 = cljs.core.chunk_rest(seq__29814_29844__$1);
var G__29847 = c__4556__auto___29845;
var G__29848 = cljs.core.count(c__4556__auto___29845);
var G__29849 = (0);
seq__29814_29834 = G__29846;
chunk__29815_29835 = G__29847;
count__29816_29836 = G__29848;
i__29817_29837 = G__29849;
continue;
} else {
var lib_29850 = cljs.core.first(seq__29814_29844__$1);
if(((cljs.analyzer.foreign_dep_QMARK_(lib_29850)) && ((!(cljs.core.keyword_identical_QMARK_(optimizations,cljs.core.cst$kw$none)))))){
} else {
if(cljs.core.truth_((function (){var or__4126__auto__ = cljs.core.cst$kw$reload.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_29850),cljs.core.cst$kw$reload);
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_29850),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__4126__auto__ = cljs.core.cst$kw$reload_DASH_all.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_29850),cljs.core.cst$kw$reload_DASH_all);
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_29850),"', 'reload-all');");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(lib_29850,cljs.core.cst$sym$goog)){
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_29850),"');");
}

}
}
}


var G__29851 = cljs.core.next(seq__29814_29844__$1);
var G__29852 = null;
var G__29853 = (0);
var G__29854 = (0);
seq__29814_29834 = G__29851;
chunk__29815_29835 = G__29852;
count__29816_29836 = G__29853;
i__29817_29837 = G__29854;
continue;
}
} else {
}
}
break;
}

var seq__29818_29855 = cljs.core.seq(node_libs);
var chunk__29819_29856 = null;
var count__29820_29857 = (0);
var i__29821_29858 = (0);
while(true){
if((i__29821_29858 < count__29820_29857)){
var lib_29859 = chunk__29819_29856.cljs$core$IIndexed$_nth$arity$2(null,i__29821_29858);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ns_name),".",cljs.analyzer.munge_node_lib(lib_29859)," = require('",lib_29859,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["');"], 0));


var G__29860 = seq__29818_29855;
var G__29861 = chunk__29819_29856;
var G__29862 = count__29820_29857;
var G__29863 = (i__29821_29858 + (1));
seq__29818_29855 = G__29860;
chunk__29819_29856 = G__29861;
count__29820_29857 = G__29862;
i__29821_29858 = G__29863;
continue;
} else {
var temp__5735__auto___29864 = cljs.core.seq(seq__29818_29855);
if(temp__5735__auto___29864){
var seq__29818_29865__$1 = temp__5735__auto___29864;
if(cljs.core.chunked_seq_QMARK_(seq__29818_29865__$1)){
var c__4556__auto___29866 = cljs.core.chunk_first(seq__29818_29865__$1);
var G__29867 = cljs.core.chunk_rest(seq__29818_29865__$1);
var G__29868 = c__4556__auto___29866;
var G__29869 = cljs.core.count(c__4556__auto___29866);
var G__29870 = (0);
seq__29818_29855 = G__29867;
chunk__29819_29856 = G__29868;
count__29820_29857 = G__29869;
i__29821_29858 = G__29870;
continue;
} else {
var lib_29871 = cljs.core.first(seq__29818_29865__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ns_name),".",cljs.analyzer.munge_node_lib(lib_29871)," = require('",lib_29871,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["');"], 0));


var G__29872 = cljs.core.next(seq__29818_29865__$1);
var G__29873 = null;
var G__29874 = (0);
var G__29875 = (0);
seq__29818_29855 = G__29872;
chunk__29819_29856 = G__29873;
count__29820_29857 = G__29874;
i__29821_29858 = G__29875;
continue;
}
} else {
}
}
break;
}

var seq__29822_29876 = cljs.core.seq(global_exports_libs);
var chunk__29823_29877 = null;
var count__29824_29878 = (0);
var i__29825_29879 = (0);
while(true){
if((i__29825_29879 < count__29824_29878)){
var lib_29880 = chunk__29823_29877.cljs$core$IIndexed$_nth$arity$2(null,i__29825_29879);
var map__29830_29881 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(js_dependency_index,cljs.core.name(lib_29880));
var map__29830_29882__$1 = (((((!((map__29830_29881 == null))))?(((((map__29830_29881.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29830_29881.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29830_29881):map__29830_29881);
var global_exports_29883 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29830_29882__$1,cljs.core.cst$kw$global_DASH_exports);
cljs.compiler.emit_global_export(ns_name,global_exports_29883,lib_29880);


var G__29884 = seq__29822_29876;
var G__29885 = chunk__29823_29877;
var G__29886 = count__29824_29878;
var G__29887 = (i__29825_29879 + (1));
seq__29822_29876 = G__29884;
chunk__29823_29877 = G__29885;
count__29824_29878 = G__29886;
i__29825_29879 = G__29887;
continue;
} else {
var temp__5735__auto___29888 = cljs.core.seq(seq__29822_29876);
if(temp__5735__auto___29888){
var seq__29822_29889__$1 = temp__5735__auto___29888;
if(cljs.core.chunked_seq_QMARK_(seq__29822_29889__$1)){
var c__4556__auto___29890 = cljs.core.chunk_first(seq__29822_29889__$1);
var G__29891 = cljs.core.chunk_rest(seq__29822_29889__$1);
var G__29892 = c__4556__auto___29890;
var G__29893 = cljs.core.count(c__4556__auto___29890);
var G__29894 = (0);
seq__29822_29876 = G__29891;
chunk__29823_29877 = G__29892;
count__29824_29878 = G__29893;
i__29825_29879 = G__29894;
continue;
} else {
var lib_29895 = cljs.core.first(seq__29822_29889__$1);
var map__29832_29896 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(js_dependency_index,cljs.core.name(lib_29895));
var map__29832_29897__$1 = (((((!((map__29832_29896 == null))))?(((((map__29832_29896.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29832_29896.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29832_29896):map__29832_29896);
var global_exports_29898 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29832_29897__$1,cljs.core.cst$kw$global_DASH_exports);
cljs.compiler.emit_global_export(ns_name,global_exports_29898,lib_29895);


var G__29899 = cljs.core.next(seq__29822_29889__$1);
var G__29900 = null;
var G__29901 = (0);
var G__29902 = (0);
seq__29822_29876 = G__29899;
chunk__29823_29877 = G__29900;
count__29824_29878 = G__29901;
i__29825_29879 = G__29902;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cljs.core.cst$kw$reload_DASH_all.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs)))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic("if(!COMPILED) ",loaded_libs," = cljs.core.into(",loaded_libs_temp,", ",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([loaded_libs,");"], 0));
} else {
return null;
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$ns_STAR_,(function (p__29903){
var map__29904 = p__29903;
var map__29904__$1 = (((((!((map__29904 == null))))?(((((map__29904.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29904.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29904):map__29904);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29904__$1,cljs.core.cst$kw$name);
var requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29904__$1,cljs.core.cst$kw$requires);
var uses = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29904__$1,cljs.core.cst$kw$uses);
var require_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29904__$1,cljs.core.cst$kw$require_DASH_macros);
var reloads = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29904__$1,cljs.core.cst$kw$reloads);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29904__$1,cljs.core.cst$kw$env);
var deps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29904__$1,cljs.core.cst$kw$deps);
cljs.compiler.load_libs(requires,null,cljs.core.cst$kw$require.cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

cljs.compiler.load_libs(uses,requires,cljs.core.cst$kw$use.cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

if(cljs.core.truth_(cljs.core.cst$kw$repl_DASH_env.cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("'nil';");
} else {
return null;
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$ns,(function (p__29906){
var map__29907 = p__29906;
var map__29907__$1 = (((((!((map__29907 == null))))?(((((map__29907.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29907.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29907):map__29907);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29907__$1,cljs.core.cst$kw$name);
var requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29907__$1,cljs.core.cst$kw$requires);
var uses = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29907__$1,cljs.core.cst$kw$uses);
var require_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29907__$1,cljs.core.cst$kw$require_DASH_macros);
var reloads = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29907__$1,cljs.core.cst$kw$reloads);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29907__$1,cljs.core.cst$kw$env);
var deps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29907__$1,cljs.core.cst$kw$deps);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.provide('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name),"');");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name,cljs.core.cst$sym$cljs$core)){
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("goog.require('cljs.core');");

if(cljs.core.truth_(cljs.core.cst$kw$emit_DASH_constants.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$options.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_))))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.constants_ns_sym),"');");
} else {
}
}

cljs.compiler.load_libs(requires,null,cljs.core.cst$kw$require.cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

return cljs.compiler.load_libs(uses,requires,cljs.core.cst$kw$use.cljs$core$IFn$_invoke$arity$1(reloads),deps,name);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$deftype,(function (p__29909){
var map__29910 = p__29909;
var map__29910__$1 = (((((!((map__29910 == null))))?(((((map__29910.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29910.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29910):map__29910);
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29910__$1,cljs.core.cst$kw$t);
var fields = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29910__$1,cljs.core.cst$kw$fields);
var pmasks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29910__$1,cljs.core.cst$kw$pmasks);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29910__$1,cljs.core.cst$kw$body);
var protocols = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29910__$1,cljs.core.cst$kw$protocols);
var fields__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,fields);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("/**");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("* @constructor");

var seq__29912_29936 = cljs.core.seq(protocols);
var chunk__29913_29937 = null;
var count__29914_29938 = (0);
var i__29915_29939 = (0);
while(true){
if((i__29915_29939 < count__29914_29938)){
var protocol_29940 = chunk__29913_29937.cljs$core$IIndexed$_nth$arity$2(null,i__29915_29939);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_29940)),"}");


var G__29941 = seq__29912_29936;
var G__29942 = chunk__29913_29937;
var G__29943 = count__29914_29938;
var G__29944 = (i__29915_29939 + (1));
seq__29912_29936 = G__29941;
chunk__29913_29937 = G__29942;
count__29914_29938 = G__29943;
i__29915_29939 = G__29944;
continue;
} else {
var temp__5735__auto___29945 = cljs.core.seq(seq__29912_29936);
if(temp__5735__auto___29945){
var seq__29912_29946__$1 = temp__5735__auto___29945;
if(cljs.core.chunked_seq_QMARK_(seq__29912_29946__$1)){
var c__4556__auto___29947 = cljs.core.chunk_first(seq__29912_29946__$1);
var G__29948 = cljs.core.chunk_rest(seq__29912_29946__$1);
var G__29949 = c__4556__auto___29947;
var G__29950 = cljs.core.count(c__4556__auto___29947);
var G__29951 = (0);
seq__29912_29936 = G__29948;
chunk__29913_29937 = G__29949;
count__29914_29938 = G__29950;
i__29915_29939 = G__29951;
continue;
} else {
var protocol_29952 = cljs.core.first(seq__29912_29946__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_29952)),"}");


var G__29953 = cljs.core.next(seq__29912_29946__$1);
var G__29954 = null;
var G__29955 = (0);
var G__29956 = (0);
seq__29912_29936 = G__29953;
chunk__29913_29937 = G__29954;
count__29914_29938 = G__29955;
i__29915_29939 = G__29956;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("*/");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(t)," = (function (",cljs.compiler.comma_sep(fields__$1),"){");

var seq__29916_29957 = cljs.core.seq(fields__$1);
var chunk__29917_29958 = null;
var count__29918_29959 = (0);
var i__29919_29960 = (0);
while(true){
if((i__29919_29960 < count__29918_29959)){
var fld_29961 = chunk__29917_29958.cljs$core$IIndexed$_nth$arity$2(null,i__29919_29960);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.",fld_29961," = ",fld_29961,";");


var G__29962 = seq__29916_29957;
var G__29963 = chunk__29917_29958;
var G__29964 = count__29918_29959;
var G__29965 = (i__29919_29960 + (1));
seq__29916_29957 = G__29962;
chunk__29917_29958 = G__29963;
count__29918_29959 = G__29964;
i__29919_29960 = G__29965;
continue;
} else {
var temp__5735__auto___29966 = cljs.core.seq(seq__29916_29957);
if(temp__5735__auto___29966){
var seq__29916_29967__$1 = temp__5735__auto___29966;
if(cljs.core.chunked_seq_QMARK_(seq__29916_29967__$1)){
var c__4556__auto___29968 = cljs.core.chunk_first(seq__29916_29967__$1);
var G__29969 = cljs.core.chunk_rest(seq__29916_29967__$1);
var G__29970 = c__4556__auto___29968;
var G__29971 = cljs.core.count(c__4556__auto___29968);
var G__29972 = (0);
seq__29916_29957 = G__29969;
chunk__29917_29958 = G__29970;
count__29918_29959 = G__29971;
i__29919_29960 = G__29972;
continue;
} else {
var fld_29973 = cljs.core.first(seq__29916_29967__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.",fld_29973," = ",fld_29973,";");


var G__29974 = cljs.core.next(seq__29916_29967__$1);
var G__29975 = null;
var G__29976 = (0);
var G__29977 = (0);
seq__29916_29957 = G__29974;
chunk__29917_29958 = G__29975;
count__29918_29959 = G__29976;
i__29919_29960 = G__29977;
continue;
}
} else {
}
}
break;
}

var seq__29920_29978 = cljs.core.seq(pmasks);
var chunk__29921_29979 = null;
var count__29922_29980 = (0);
var i__29923_29981 = (0);
while(true){
if((i__29923_29981 < count__29922_29980)){
var vec__29930_29982 = chunk__29921_29979.cljs$core$IIndexed$_nth$arity$2(null,i__29923_29981);
var pno_29983 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29930_29982,(0),null);
var pmask_29984 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29930_29982,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.cljs$lang$protocol_mask$partition",pno_29983,"$ = ",pmask_29984,";");


var G__29985 = seq__29920_29978;
var G__29986 = chunk__29921_29979;
var G__29987 = count__29922_29980;
var G__29988 = (i__29923_29981 + (1));
seq__29920_29978 = G__29985;
chunk__29921_29979 = G__29986;
count__29922_29980 = G__29987;
i__29923_29981 = G__29988;
continue;
} else {
var temp__5735__auto___29989 = cljs.core.seq(seq__29920_29978);
if(temp__5735__auto___29989){
var seq__29920_29990__$1 = temp__5735__auto___29989;
if(cljs.core.chunked_seq_QMARK_(seq__29920_29990__$1)){
var c__4556__auto___29991 = cljs.core.chunk_first(seq__29920_29990__$1);
var G__29992 = cljs.core.chunk_rest(seq__29920_29990__$1);
var G__29993 = c__4556__auto___29991;
var G__29994 = cljs.core.count(c__4556__auto___29991);
var G__29995 = (0);
seq__29920_29978 = G__29992;
chunk__29921_29979 = G__29993;
count__29922_29980 = G__29994;
i__29923_29981 = G__29995;
continue;
} else {
var vec__29933_29996 = cljs.core.first(seq__29920_29990__$1);
var pno_29997 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29933_29996,(0),null);
var pmask_29998 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29933_29996,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.cljs$lang$protocol_mask$partition",pno_29997,"$ = ",pmask_29998,";");


var G__29999 = cljs.core.next(seq__29920_29990__$1);
var G__30000 = null;
var G__30001 = (0);
var G__30002 = (0);
seq__29920_29978 = G__29999;
chunk__29921_29979 = G__30000;
count__29922_29980 = G__30001;
i__29923_29981 = G__30002;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("});");

return cljs.compiler.emit(body);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$defrecord,(function (p__30003){
var map__30004 = p__30003;
var map__30004__$1 = (((((!((map__30004 == null))))?(((((map__30004.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30004.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30004):map__30004);
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30004__$1,cljs.core.cst$kw$t);
var fields = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30004__$1,cljs.core.cst$kw$fields);
var pmasks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30004__$1,cljs.core.cst$kw$pmasks);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30004__$1,cljs.core.cst$kw$body);
var protocols = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30004__$1,cljs.core.cst$kw$protocols);
var fields__$1 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$__meta,cljs.core.cst$sym$__extmap,cljs.core.cst$sym$__hash], null));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("/**");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("* @constructor");

var seq__30006_30030 = cljs.core.seq(protocols);
var chunk__30007_30031 = null;
var count__30008_30032 = (0);
var i__30009_30033 = (0);
while(true){
if((i__30009_30033 < count__30008_30032)){
var protocol_30034 = chunk__30007_30031.cljs$core$IIndexed$_nth$arity$2(null,i__30009_30033);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_30034)),"}");


var G__30035 = seq__30006_30030;
var G__30036 = chunk__30007_30031;
var G__30037 = count__30008_30032;
var G__30038 = (i__30009_30033 + (1));
seq__30006_30030 = G__30035;
chunk__30007_30031 = G__30036;
count__30008_30032 = G__30037;
i__30009_30033 = G__30038;
continue;
} else {
var temp__5735__auto___30039 = cljs.core.seq(seq__30006_30030);
if(temp__5735__auto___30039){
var seq__30006_30040__$1 = temp__5735__auto___30039;
if(cljs.core.chunked_seq_QMARK_(seq__30006_30040__$1)){
var c__4556__auto___30041 = cljs.core.chunk_first(seq__30006_30040__$1);
var G__30042 = cljs.core.chunk_rest(seq__30006_30040__$1);
var G__30043 = c__4556__auto___30041;
var G__30044 = cljs.core.count(c__4556__auto___30041);
var G__30045 = (0);
seq__30006_30030 = G__30042;
chunk__30007_30031 = G__30043;
count__30008_30032 = G__30044;
i__30009_30033 = G__30045;
continue;
} else {
var protocol_30046 = cljs.core.first(seq__30006_30040__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_30046)),"}");


var G__30047 = cljs.core.next(seq__30006_30040__$1);
var G__30048 = null;
var G__30049 = (0);
var G__30050 = (0);
seq__30006_30030 = G__30047;
chunk__30007_30031 = G__30048;
count__30008_30032 = G__30049;
i__30009_30033 = G__30050;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("*/");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(t)," = (function (",cljs.compiler.comma_sep(fields__$1),"){");

var seq__30010_30051 = cljs.core.seq(fields__$1);
var chunk__30011_30052 = null;
var count__30012_30053 = (0);
var i__30013_30054 = (0);
while(true){
if((i__30013_30054 < count__30012_30053)){
var fld_30055 = chunk__30011_30052.cljs$core$IIndexed$_nth$arity$2(null,i__30013_30054);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.",fld_30055," = ",fld_30055,";");


var G__30056 = seq__30010_30051;
var G__30057 = chunk__30011_30052;
var G__30058 = count__30012_30053;
var G__30059 = (i__30013_30054 + (1));
seq__30010_30051 = G__30056;
chunk__30011_30052 = G__30057;
count__30012_30053 = G__30058;
i__30013_30054 = G__30059;
continue;
} else {
var temp__5735__auto___30060 = cljs.core.seq(seq__30010_30051);
if(temp__5735__auto___30060){
var seq__30010_30061__$1 = temp__5735__auto___30060;
if(cljs.core.chunked_seq_QMARK_(seq__30010_30061__$1)){
var c__4556__auto___30062 = cljs.core.chunk_first(seq__30010_30061__$1);
var G__30063 = cljs.core.chunk_rest(seq__30010_30061__$1);
var G__30064 = c__4556__auto___30062;
var G__30065 = cljs.core.count(c__4556__auto___30062);
var G__30066 = (0);
seq__30010_30051 = G__30063;
chunk__30011_30052 = G__30064;
count__30012_30053 = G__30065;
i__30013_30054 = G__30066;
continue;
} else {
var fld_30067 = cljs.core.first(seq__30010_30061__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.",fld_30067," = ",fld_30067,";");


var G__30068 = cljs.core.next(seq__30010_30061__$1);
var G__30069 = null;
var G__30070 = (0);
var G__30071 = (0);
seq__30010_30051 = G__30068;
chunk__30011_30052 = G__30069;
count__30012_30053 = G__30070;
i__30013_30054 = G__30071;
continue;
}
} else {
}
}
break;
}

var seq__30014_30072 = cljs.core.seq(pmasks);
var chunk__30015_30073 = null;
var count__30016_30074 = (0);
var i__30017_30075 = (0);
while(true){
if((i__30017_30075 < count__30016_30074)){
var vec__30024_30076 = chunk__30015_30073.cljs$core$IIndexed$_nth$arity$2(null,i__30017_30075);
var pno_30077 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30024_30076,(0),null);
var pmask_30078 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30024_30076,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.cljs$lang$protocol_mask$partition",pno_30077,"$ = ",pmask_30078,";");


var G__30079 = seq__30014_30072;
var G__30080 = chunk__30015_30073;
var G__30081 = count__30016_30074;
var G__30082 = (i__30017_30075 + (1));
seq__30014_30072 = G__30079;
chunk__30015_30073 = G__30080;
count__30016_30074 = G__30081;
i__30017_30075 = G__30082;
continue;
} else {
var temp__5735__auto___30083 = cljs.core.seq(seq__30014_30072);
if(temp__5735__auto___30083){
var seq__30014_30084__$1 = temp__5735__auto___30083;
if(cljs.core.chunked_seq_QMARK_(seq__30014_30084__$1)){
var c__4556__auto___30085 = cljs.core.chunk_first(seq__30014_30084__$1);
var G__30086 = cljs.core.chunk_rest(seq__30014_30084__$1);
var G__30087 = c__4556__auto___30085;
var G__30088 = cljs.core.count(c__4556__auto___30085);
var G__30089 = (0);
seq__30014_30072 = G__30086;
chunk__30015_30073 = G__30087;
count__30016_30074 = G__30088;
i__30017_30075 = G__30089;
continue;
} else {
var vec__30027_30090 = cljs.core.first(seq__30014_30084__$1);
var pno_30091 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30027_30090,(0),null);
var pmask_30092 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30027_30090,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.cljs$lang$protocol_mask$partition",pno_30091,"$ = ",pmask_30092,";");


var G__30093 = cljs.core.next(seq__30014_30084__$1);
var G__30094 = null;
var G__30095 = (0);
var G__30096 = (0);
seq__30014_30072 = G__30093;
chunk__30015_30073 = G__30094;
count__30016_30074 = G__30095;
i__30017_30075 = G__30096;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("});");

return cljs.compiler.emit(body);
}));
cljs.compiler.emit_dot = (function cljs$compiler$emit_dot(p__30097){
var map__30098 = p__30097;
var map__30098__$1 = (((((!((map__30098 == null))))?(((((map__30098.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30098.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30098):map__30098);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30098__$1,cljs.core.cst$kw$target);
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30098__$1,cljs.core.cst$kw$field);
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30098__$1,cljs.core.cst$kw$method);
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30098__$1,cljs.core.cst$kw$args);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30098__$1,cljs.core.cst$kw$env);
var env__28845__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__28845__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

if(cljs.core.truth_(field)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3(target,".",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(field,cljs.core.PersistentHashSet.EMPTY));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(target,".",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(method,cljs.core.PersistentHashSet.EMPTY),"(",cljs.compiler.comma_sep(args),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([")"], 0));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__28845__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$host_DASH_field,(function (ast){
return cljs.compiler.emit_dot(ast);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$host_DASH_call,(function (ast){
return cljs.compiler.emit_dot(ast);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$js,(function (p__30100){
var map__30101 = p__30100;
var map__30101__$1 = (((((!((map__30101 == null))))?(((((map__30101.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30101.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30101):map__30101);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30101__$1,cljs.core.cst$kw$op);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30101__$1,cljs.core.cst$kw$env);
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30101__$1,cljs.core.cst$kw$code);
var segs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30101__$1,cljs.core.cst$kw$segs);
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30101__$1,cljs.core.cst$kw$args);
if(cljs.core.truth_((function (){var and__4115__auto__ = code;
if(cljs.core.truth_(and__4115__auto__)){
return goog.string.startsWith(clojure.string.trim(code),"/*");
} else {
return and__4115__auto__;
}
})())){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(code);
} else {
var env__28845__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__28845__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

if(cljs.core.truth_(code)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(code);
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(segs,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null)),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null))));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__28845__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}
}));
cljs.compiler.emit_constants_table = (function cljs$compiler$emit_constants_table(table){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.provide('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.constants_ns_sym),"');");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("goog.require('cljs.core');");

var seq__30107 = cljs.core.seq(table);
var chunk__30108 = null;
var count__30109 = (0);
var i__30110 = (0);
while(true){
if((i__30110 < count__30109)){
var vec__30117 = chunk__30108.cljs$core$IIndexed$_nth$arity$2(null,i__30110);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30117,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30117,(1),null);
var ns_30123 = cljs.core.namespace(sym);
var name_30124 = cljs.core.name(sym);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("cljs.core.",value," = ");

if((sym instanceof cljs.core.Keyword)){
cljs.compiler.emits_keyword(sym);
} else {
if((sym instanceof cljs.core.Symbol)){
cljs.compiler.emits_symbol(sym);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Cannot emit constant for type ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(sym))].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$invalid_DASH_constant_DASH_type,cljs.core.cst$kw$clojure$error_SLASH_phase,cljs.core.cst$kw$compilation], null));

}
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(";\n");


var G__30125 = seq__30107;
var G__30126 = chunk__30108;
var G__30127 = count__30109;
var G__30128 = (i__30110 + (1));
seq__30107 = G__30125;
chunk__30108 = G__30126;
count__30109 = G__30127;
i__30110 = G__30128;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__30107);
if(temp__5735__auto__){
var seq__30107__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__30107__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__30107__$1);
var G__30129 = cljs.core.chunk_rest(seq__30107__$1);
var G__30130 = c__4556__auto__;
var G__30131 = cljs.core.count(c__4556__auto__);
var G__30132 = (0);
seq__30107 = G__30129;
chunk__30108 = G__30130;
count__30109 = G__30131;
i__30110 = G__30132;
continue;
} else {
var vec__30120 = cljs.core.first(seq__30107__$1);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30120,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30120,(1),null);
var ns_30133 = cljs.core.namespace(sym);
var name_30134 = cljs.core.name(sym);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("cljs.core.",value," = ");

if((sym instanceof cljs.core.Keyword)){
cljs.compiler.emits_keyword(sym);
} else {
if((sym instanceof cljs.core.Symbol)){
cljs.compiler.emits_symbol(sym);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Cannot emit constant for type ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(sym))].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$invalid_DASH_constant_DASH_type,cljs.core.cst$kw$clojure$error_SLASH_phase,cljs.core.cst$kw$compilation], null));

}
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(";\n");


var G__30135 = cljs.core.next(seq__30107__$1);
var G__30136 = null;
var G__30137 = (0);
var G__30138 = (0);
seq__30107 = G__30135;
chunk__30108 = G__30136;
count__30109 = G__30137;
i__30110 = G__30138;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_externs = (function cljs$compiler$emit_externs(var_args){
var G__30140 = arguments.length;
switch (G__30140) {
case 1:
return cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 4:
return cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$1 = (function (externs){
return cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4(cljs.core.PersistentVector.EMPTY,externs,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY),(cljs.core.truth_(cljs.env._STAR_compiler_STAR_)?cljs.analyzer.get_externs():null));
}));

(cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4 = (function (prefix,externs,top_level,known_externs){
var ks = cljs.core.seq(cljs.core.keys(externs));
while(true){
if(ks){
var k_30145 = cljs.core.first(ks);
var vec__30141_30146 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(prefix,k_30145);
var top_30147 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30141_30146,(0),null);
var prefix_SINGLEQUOTE__30148 = vec__30141_30146;
if(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$prototype,k_30145)) && ((cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(known_externs,prefix_SINGLEQUOTE__30148) == null)))){
if((!(((cljs.core.contains_QMARK_(cljs.core.deref(top_level),top_30147)) || (cljs.core.contains_QMARK_(known_externs,top_30147)))))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,prefix_SINGLEQUOTE__30148)),";");

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(top_level,cljs.core.conj,top_30147);
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,prefix_SINGLEQUOTE__30148)),";");
}
} else {
}

var m_30149 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(externs,k_30145);
if(cljs.core.empty_QMARK_(m_30149)){
} else {
cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4(prefix_SINGLEQUOTE__30148,m_30149,top_level,known_externs);
}

var G__30150 = cljs.core.next(ks);
ks = G__30150;
continue;
} else {
return null;
}
break;
}
}));

(cljs.compiler.emit_externs.cljs$lang$maxFixedArity = 4);

