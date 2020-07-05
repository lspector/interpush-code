// Compiled by ClojureScript 1.10.764 {}
goog.provide('cljs.compiler');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.tools.reader');
goog.require('cljs.env');
goog.require('cljs.analyzer');
goog.require('cljs.source_map');
goog.require('goog.string.StringBuffer');
cljs.compiler.js_reserved = cljs.analyzer.js_reserved;
cljs.compiler.es5_GT__EQ_ = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.comp.call(null,cljs.core.mapcat.call(null,(function (lang){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lang,cljs.core.keyword.call(null,clojure.string.replace.call(null,cljs.core.name.call(null,lang),/^ecmascript/,"es"))], null);
}))),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ecmascript5","ecmascript5",342717552),new cljs.core.Keyword(null,"ecmascript5-strict","ecmascript5-strict",888234811),new cljs.core.Keyword(null,"ecmascript6","ecmascript6",723864898),new cljs.core.Keyword(null,"ecmascript6-strict","ecmascript6-strict",-786049555),new cljs.core.Keyword(null,"ecmascript-2015","ecmascript-2015",-902254444),new cljs.core.Keyword(null,"ecmascript6-typed","ecmascript6-typed",-1978203054),new cljs.core.Keyword(null,"ecmascript-2016","ecmascript-2016",471574729),new cljs.core.Keyword(null,"ecmascript-2017","ecmascript-2017",620145058),new cljs.core.Keyword(null,"ecmascript-next","ecmascript-next",-1935155962)], null));
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
return cljs.core.subs.call(null,ns__$1,(0),idx);
}
});
cljs.compiler.find_ns_starts_with = (function cljs$compiler$find_ns_starts_with(needle){
return cljs.core.reduce_kv.call(null,(function (xs,ns,_){
if(cljs.core._EQ_.call(null,needle,cljs.compiler.get_first_ns_segment.call(null,ns))){
return cljs.core.reduced.call(null,needle);
} else {
return null;
}
}),null,new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
});
cljs.compiler.shadow_depth = (function cljs$compiler$shadow_depth(s){
var map__40035 = s;
var map__40035__$1 = (((((!((map__40035 == null))))?(((((map__40035.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40035.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40035):map__40035);
var name = cljs.core.get.call(null,map__40035__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__40035__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var d = (0);
var G__40038 = info;
var map__40039 = G__40038;
var map__40039__$1 = (((((!((map__40039 == null))))?(((((map__40039.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40039.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40039):map__40039);
var shadow = cljs.core.get.call(null,map__40039__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
var d__$1 = d;
var G__40038__$1 = G__40038;
while(true){
var d__$2 = d__$1;
var map__40043 = G__40038__$1;
var map__40043__$1 = (((((!((map__40043 == null))))?(((((map__40043.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40043.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40043):map__40043);
var shadow__$1 = cljs.core.get.call(null,map__40043__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
if(cljs.core.truth_(shadow__$1)){
var G__40045 = (d__$2 + (1));
var G__40046 = shadow__$1;
d__$1 = G__40045;
G__40038__$1 = G__40046;
continue;
} else {
if(cljs.core.truth_(cljs.compiler.find_ns_starts_with.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)))){
return (d__$2 + (1));
} else {
return d__$2;

}
}
break;
}
});
cljs.compiler.hash_scope = (function cljs$compiler$hash_scope(s){
return cljs.core.hash_combine.call(null,cljs.core._hash.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(s)),cljs.compiler.shadow_depth.call(null,s));
});
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__40047){
var map__40048 = p__40047;
var map__40048__$1 = (((((!((map__40048 == null))))?(((((map__40048.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40048.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40048):map__40048);
var name_var = map__40048__$1;
var name = cljs.core.get.call(null,map__40048__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__40048__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var name__$1 = clojure.string.replace.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"..","_DOT__DOT_");
var map__40050 = info;
var map__40050__$1 = (((((!((map__40050 == null))))?(((((map__40050.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40050.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40050):map__40050);
var ns = cljs.core.get.call(null,map__40050__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var fn_scope = cljs.core.get.call(null,map__40050__$1,new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859));
var scoped_name = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,"_$_",cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.str,new cljs.core.Keyword(null,"name","name",1843675177)),fn_scope),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name__$1], null))));
return cljs.core.symbol.call(null,cljs.compiler.munge.call(null,[clojure.string.replace.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),".","$"),"$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(scoped_name)].join('')));
});
cljs.compiler.munge_reserved = (function cljs$compiler$munge_reserved(reserved){
return (function (s){
if((!((cljs.core.get.call(null,reserved,s) == null)))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),"$"].join('');
} else {
return s;
}
});
});
cljs.compiler.munge = (function cljs$compiler$munge(var_args){
var G__40053 = arguments.length;
switch (G__40053) {
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
return cljs.compiler.munge.call(null,s,cljs.compiler.js_reserved);
}));

(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2 = (function (s,reserved){
if(cljs.analyzer.cljs_map_QMARK_.call(null,s)){
var name_var = s;
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(name_var);
var field = new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(name_var);
var info = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(name_var);
if((!((new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531).cljs$core$IFn$_invoke$arity$1(info) == null)))){
return cljs.compiler.fn_self_name.call(null,s);
} else {
var depth = cljs.compiler.shadow_depth.call(null,s);
var code = cljs.compiler.hash_scope.call(null,s);
var renamed = cljs.core.get.call(null,cljs.compiler._STAR_lexical_renames_STAR_,code);
var name__$1 = ((field === true)?["self__.",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''):(((!((renamed == null))))?renamed:name
));
var munged_name = cljs.compiler.munge.call(null,name__$1,reserved);
if(((field === true) || ((depth === (0))))){
return munged_name;
} else {
return cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(munged_name),"__$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(depth)].join(''));
}
}
} else {
var ss = clojure.string.replace.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),"..","_DOT__DOT_");
var ss__$1 = clojure.string.replace.call(null,ss,(new RegExp("\\/(.)")),".$1");
var rf = cljs.compiler.munge_reserved.call(null,reserved);
var ss__$2 = cljs.core.map.call(null,rf,clojure.string.split.call(null,ss__$1,/\./));
var ss__$3 = clojure.string.join.call(null,".",ss__$2);
var ms = new cljs.core.Var(function(){return cljs.core.munge_str;},new cljs.core.Symbol("cljs.core","munge-str","cljs.core/munge-str",-301346665,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"munge-str","munge-str",-2042069652,null),"cljs/core.cljs",(25),(1),(11501),(11501),new cljs.core.Symbol(null,"string","string",-349010059,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null)], null)),null,(cljs.core.truth_(cljs.core.munge_str)?cljs.core.munge_str.cljs$lang$test:null)])).call(null,ss__$3);
if((s instanceof cljs.core.Symbol)){
return cljs.core.symbol.call(null,ms);
} else {
return ms;
}
}
}));

(cljs.compiler.munge.cljs$lang$maxFixedArity = 2);

cljs.compiler.comma_sep = (function cljs$compiler$comma_sep(xs){
return cljs.core.interpose.call(null,",",xs);
});
cljs.compiler.escape_char = (function cljs$compiler$escape_char(c){
var cp = goog.string.hashCode(c);
var G__40055 = cp;
switch (G__40055) {
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
var pad = cljs.core.subs.call(null,"0000",unpadded.length);
return ["\\u",pad,cljs.core.str.cljs$core$IFn$_invoke$arity$1(unpadded)].join('');
}

}
});
cljs.compiler.escape_string = (function cljs$compiler$escape_string(s){
var sb = (new goog.string.StringBuffer());
var seq__40057_40061 = cljs.core.seq.call(null,s);
var chunk__40058_40062 = null;
var count__40059_40063 = (0);
var i__40060_40064 = (0);
while(true){
if((i__40060_40064 < count__40059_40063)){
var c_40065 = cljs.core._nth.call(null,chunk__40058_40062,i__40060_40064);
sb.append(cljs.compiler.escape_char.call(null,c_40065));


var G__40066 = seq__40057_40061;
var G__40067 = chunk__40058_40062;
var G__40068 = count__40059_40063;
var G__40069 = (i__40060_40064 + (1));
seq__40057_40061 = G__40066;
chunk__40058_40062 = G__40067;
count__40059_40063 = G__40068;
i__40060_40064 = G__40069;
continue;
} else {
var temp__5735__auto___40070 = cljs.core.seq.call(null,seq__40057_40061);
if(temp__5735__auto___40070){
var seq__40057_40071__$1 = temp__5735__auto___40070;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40057_40071__$1)){
var c__4556__auto___40072 = cljs.core.chunk_first.call(null,seq__40057_40071__$1);
var G__40073 = cljs.core.chunk_rest.call(null,seq__40057_40071__$1);
var G__40074 = c__4556__auto___40072;
var G__40075 = cljs.core.count.call(null,c__4556__auto___40072);
var G__40076 = (0);
seq__40057_40061 = G__40073;
chunk__40058_40062 = G__40074;
count__40059_40063 = G__40075;
i__40060_40064 = G__40076;
continue;
} else {
var c_40077 = cljs.core.first.call(null,seq__40057_40071__$1);
sb.append(cljs.compiler.escape_char.call(null,c_40077));


var G__40078 = cljs.core.next.call(null,seq__40057_40071__$1);
var G__40079 = null;
var G__40080 = (0);
var G__40081 = (0);
seq__40057_40061 = G__40078;
chunk__40058_40062 = G__40079;
count__40059_40063 = G__40080;
i__40060_40064 = G__40081;
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
cljs.compiler.emit_STAR_ = (function (){var method_table__4619__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.compiler","emit*"),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
cljs.compiler.emit = (function cljs$compiler$emit(ast){
if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
var map__40082_40087 = ast;
var map__40082_40088__$1 = (((((!((map__40082_40087 == null))))?(((((map__40082_40087.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40082_40087.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40082_40087):map__40082_40087);
var env_40089 = cljs.core.get.call(null,map__40082_40088__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env_40089))){
var map__40084_40090 = env_40089;
var map__40084_40091__$1 = (((((!((map__40084_40090 == null))))?(((((map__40084_40090.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40084_40090.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40084_40090):map__40084_40090);
var line_40092 = cljs.core.get.call(null,map__40084_40091__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_40093 = cljs.core.get.call(null,map__40084_40091__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,(function (m){
var minfo = (function (){var G__40086 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gcol","gcol",309250807),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"gline","gline",-1086242431),new cljs.core.Keyword(null,"gen-line","gen-line",589592125).cljs$core$IFn$_invoke$arity$1(m)], null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"binding","binding",539932593),null,new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),null,new cljs.core.Keyword(null,"local","local",-1497766724),null], null), null).call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast)))){
return cljs.core.assoc.call(null,G__40086,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(ast))));
} else {
return G__40086;
}
})();
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-map","source-map",1706252311),(line_40092 - (1))], null),cljs.core.fnil.call(null,(function (line__$1){
return cljs.core.update_in.call(null,line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_40093)?(column_40093 - (1)):(0))], null),cljs.core.fnil.call(null,(function (column__$1){
return cljs.core.conj.call(null,column__$1,minfo);
}),cljs.core.PersistentVector.EMPTY));
}),cljs.core.sorted_map.call(null)));
}));
} else {
}
} else {
}

return cljs.compiler.emit_STAR_.call(null,ast);
});
cljs.compiler.emits = (function cljs$compiler$emits(var_args){
var G__40102 = arguments.length;
switch (G__40102) {
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
var len__4736__auto___40109 = arguments.length;
var i__4737__auto___40110 = (0);
while(true){
if((i__4737__auto___40110 < len__4736__auto___40109)){
args_arr__4757__auto__.push((arguments[i__4737__auto___40110]));

var G__40111 = (i__4737__auto___40110 + (1));
i__4737__auto___40110 = G__40111;
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
if(cljs.analyzer.cljs_map_QMARK_.call(null,a)){
cljs.compiler.emit.call(null,a);
} else {
if(cljs.analyzer.cljs_seq_QMARK_.call(null,a)){
cljs.core.apply.call(null,cljs.compiler.emits,a);
} else {
if(goog.isFunction(a)){
a.call(null);
} else {
var s_40112 = (function (){var G__40103 = a;
if((!(typeof a === 'string'))){
return G__40103.toString();
} else {
return G__40103;
}
})();
var temp__5739__auto___40113 = cljs.compiler._STAR_source_map_data_STAR_;
if((temp__5739__auto___40113 == null)){
} else {
var sm_data_40114 = temp__5739__auto___40113;
cljs.core.swap_BANG_.call(null,sm_data_40114,cljs.core.update,new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(function (p1__40094_SHARP_){
return (p1__40094_SHARP_ + s_40112.length);
}));
}

cljs.core.print.call(null,s_40112);

}
}
}
}

return null;
}));

(cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
cljs.compiler.emits.call(null,a);

return cljs.compiler.emits.call(null,b);
}));

(cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
cljs.compiler.emits.call(null,a);

cljs.compiler.emits.call(null,b);

return cljs.compiler.emits.call(null,c);
}));

(cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4 = (function (a,b,c,d){
cljs.compiler.emits.call(null,a);

cljs.compiler.emits.call(null,b);

cljs.compiler.emits.call(null,c);

return cljs.compiler.emits.call(null,d);
}));

(cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5 = (function (a,b,c,d,e){
cljs.compiler.emits.call(null,a);

cljs.compiler.emits.call(null,b);

cljs.compiler.emits.call(null,c);

cljs.compiler.emits.call(null,d);

return cljs.compiler.emits.call(null,e);
}));

(cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,c,d,e,xs){
cljs.compiler.emits.call(null,a);

cljs.compiler.emits.call(null,b);

cljs.compiler.emits.call(null,c);

cljs.compiler.emits.call(null,d);

cljs.compiler.emits.call(null,e);

var seq__40104 = cljs.core.seq.call(null,xs);
var chunk__40105 = null;
var count__40106 = (0);
var i__40107 = (0);
while(true){
if((i__40107 < count__40106)){
var x = cljs.core._nth.call(null,chunk__40105,i__40107);
cljs.compiler.emits.call(null,x);


var G__40115 = seq__40104;
var G__40116 = chunk__40105;
var G__40117 = count__40106;
var G__40118 = (i__40107 + (1));
seq__40104 = G__40115;
chunk__40105 = G__40116;
count__40106 = G__40117;
i__40107 = G__40118;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__40104);
if(temp__5735__auto__){
var seq__40104__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40104__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__40104__$1);
var G__40119 = cljs.core.chunk_rest.call(null,seq__40104__$1);
var G__40120 = c__4556__auto__;
var G__40121 = cljs.core.count.call(null,c__4556__auto__);
var G__40122 = (0);
seq__40104 = G__40119;
chunk__40105 = G__40120;
count__40106 = G__40121;
i__40107 = G__40122;
continue;
} else {
var x = cljs.core.first.call(null,seq__40104__$1);
cljs.compiler.emits.call(null,x);


var G__40123 = cljs.core.next.call(null,seq__40104__$1);
var G__40124 = null;
var G__40125 = (0);
var G__40126 = (0);
seq__40104 = G__40123;
chunk__40105 = G__40124;
count__40106 = G__40125;
i__40107 = G__40126;
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
(cljs.compiler.emits.cljs$lang$applyTo = (function (seq40096){
var G__40097 = cljs.core.first.call(null,seq40096);
var seq40096__$1 = cljs.core.next.call(null,seq40096);
var G__40098 = cljs.core.first.call(null,seq40096__$1);
var seq40096__$2 = cljs.core.next.call(null,seq40096__$1);
var G__40099 = cljs.core.first.call(null,seq40096__$2);
var seq40096__$3 = cljs.core.next.call(null,seq40096__$2);
var G__40100 = cljs.core.first.call(null,seq40096__$3);
var seq40096__$4 = cljs.core.next.call(null,seq40096__$3);
var G__40101 = cljs.core.first.call(null,seq40096__$4);
var seq40096__$5 = cljs.core.next.call(null,seq40096__$4);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40097,G__40098,G__40099,G__40100,G__40101,seq40096__$5);
}));

(cljs.compiler.emits.cljs$lang$maxFixedArity = (5));

cljs.compiler._emitln = (function cljs$compiler$_emitln(){
cljs.core.newline.call(null);

if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,(function (p__40127){
var map__40128 = p__40127;
var map__40128__$1 = (((((!((map__40128 == null))))?(((((map__40128.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40128.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40128):map__40128);
var m = map__40128__$1;
var gen_line = cljs.core.get.call(null,map__40128__$1,new cljs.core.Keyword(null,"gen-line","gen-line",589592125));
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"gen-line","gen-line",589592125),(gen_line + (1)),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(0));
}));
} else {
}

return null;
});
cljs.compiler.emitln = (function cljs$compiler$emitln(var_args){
var G__40137 = arguments.length;
switch (G__40137) {
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
var len__4736__auto___40143 = arguments.length;
var i__4737__auto___40144 = (0);
while(true){
if((i__4737__auto___40144 < len__4736__auto___40143)){
args_arr__4757__auto__.push((arguments[i__4737__auto___40144]));

var G__40145 = (i__4737__auto___40144 + (1));
i__4737__auto___40144 = G__40145;
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
return cljs.compiler._emitln.call(null);
}));

(cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1 = (function (a){
cljs.compiler.emits.call(null,a);

return cljs.compiler._emitln.call(null);
}));

(cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
cljs.compiler.emits.call(null,a);

cljs.compiler.emits.call(null,b);

return cljs.compiler._emitln.call(null);
}));

(cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
cljs.compiler.emits.call(null,a);

cljs.compiler.emits.call(null,b);

cljs.compiler.emits.call(null,c);

return cljs.compiler._emitln.call(null);
}));

(cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4 = (function (a,b,c,d){
cljs.compiler.emits.call(null,a);

cljs.compiler.emits.call(null,b);

cljs.compiler.emits.call(null,c);

cljs.compiler.emits.call(null,d);

return cljs.compiler._emitln.call(null);
}));

(cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5 = (function (a,b,c,d,e){
cljs.compiler.emits.call(null,a);

cljs.compiler.emits.call(null,b);

cljs.compiler.emits.call(null,c);

cljs.compiler.emits.call(null,d);

cljs.compiler.emits.call(null,e);

return cljs.compiler._emitln.call(null);
}));

(cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,c,d,e,xs){
cljs.compiler.emits.call(null,a);

cljs.compiler.emits.call(null,b);

cljs.compiler.emits.call(null,c);

cljs.compiler.emits.call(null,d);

cljs.compiler.emits.call(null,e);

var seq__40138_40146 = cljs.core.seq.call(null,xs);
var chunk__40139_40147 = null;
var count__40140_40148 = (0);
var i__40141_40149 = (0);
while(true){
if((i__40141_40149 < count__40140_40148)){
var x_40150 = cljs.core._nth.call(null,chunk__40139_40147,i__40141_40149);
cljs.compiler.emits.call(null,x_40150);


var G__40151 = seq__40138_40146;
var G__40152 = chunk__40139_40147;
var G__40153 = count__40140_40148;
var G__40154 = (i__40141_40149 + (1));
seq__40138_40146 = G__40151;
chunk__40139_40147 = G__40152;
count__40140_40148 = G__40153;
i__40141_40149 = G__40154;
continue;
} else {
var temp__5735__auto___40155 = cljs.core.seq.call(null,seq__40138_40146);
if(temp__5735__auto___40155){
var seq__40138_40156__$1 = temp__5735__auto___40155;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40138_40156__$1)){
var c__4556__auto___40157 = cljs.core.chunk_first.call(null,seq__40138_40156__$1);
var G__40158 = cljs.core.chunk_rest.call(null,seq__40138_40156__$1);
var G__40159 = c__4556__auto___40157;
var G__40160 = cljs.core.count.call(null,c__4556__auto___40157);
var G__40161 = (0);
seq__40138_40146 = G__40158;
chunk__40139_40147 = G__40159;
count__40140_40148 = G__40160;
i__40141_40149 = G__40161;
continue;
} else {
var x_40162 = cljs.core.first.call(null,seq__40138_40156__$1);
cljs.compiler.emits.call(null,x_40162);


var G__40163 = cljs.core.next.call(null,seq__40138_40156__$1);
var G__40164 = null;
var G__40165 = (0);
var G__40166 = (0);
seq__40138_40146 = G__40163;
chunk__40139_40147 = G__40164;
count__40140_40148 = G__40165;
i__40141_40149 = G__40166;
continue;
}
} else {
}
}
break;
}

return cljs.compiler._emitln.call(null);
}));

/** @this {Function} */
(cljs.compiler.emitln.cljs$lang$applyTo = (function (seq40131){
var G__40132 = cljs.core.first.call(null,seq40131);
var seq40131__$1 = cljs.core.next.call(null,seq40131);
var G__40133 = cljs.core.first.call(null,seq40131__$1);
var seq40131__$2 = cljs.core.next.call(null,seq40131__$1);
var G__40134 = cljs.core.first.call(null,seq40131__$2);
var seq40131__$3 = cljs.core.next.call(null,seq40131__$2);
var G__40135 = cljs.core.first.call(null,seq40131__$3);
var seq40131__$4 = cljs.core.next.call(null,seq40131__$3);
var G__40136 = cljs.core.first.call(null,seq40131__$4);
var seq40131__$5 = cljs.core.next.call(null,seq40131__$4);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40132,G__40133,G__40134,G__40135,G__40136,seq40131__$5);
}));

(cljs.compiler.emitln.cljs$lang$maxFixedArity = (5));

cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__40167_40171 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__40168_40172 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__40169_40173 = true;
var _STAR_print_fn_STAR__temp_val__40170_40174 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__40169_40173);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__40170_40174);

try{cljs.compiler.emit.call(null,expr);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__40168_40172);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__40167_40171);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
});
if((typeof cljs !== 'undefined') && (typeof cljs.compiler !== 'undefined') && (typeof cljs.compiler.emit_constant_STAR_ !== 'undefined')){
} else {
cljs.compiler.emit_constant_STAR_ = (function (){var method_table__4619__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.compiler","emit-constant*"),cljs.core.type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}









cljs.compiler.all_distinct_QMARK_ = (function cljs$compiler$all_distinct_QMARK_(xs){
return cljs.core.apply.call(null,cljs.core.distinct_QMARK_,xs);
});
cljs.compiler.emit_constant_no_meta = (function cljs$compiler$emit_constant_no_meta(x){
if(cljs.analyzer.cljs_seq_QMARK_.call(null,x)){
return cljs.compiler.emit_list.call(null,x,cljs.compiler.emit_constants_comma_sep);
} else {
if(cljs.core.record_QMARK_.call(null,x)){
var vec__40175 = cljs.analyzer.record_ns_PLUS_name.call(null,x);
var ns = cljs.core.nth.call(null,vec__40175,(0),null);
var name = cljs.core.nth.call(null,vec__40175,(1),null);
return cljs.compiler.emit_record_value.call(null,ns,name,(function (){
return cljs.compiler.emit_constant.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,x));
}));
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,x)){
return cljs.compiler.emit_map.call(null,cljs.core.keys.call(null,x),cljs.core.vals.call(null,x),cljs.compiler.emit_constants_comma_sep,cljs.compiler.all_distinct_QMARK_);
} else {
if(cljs.analyzer.cljs_vector_QMARK_.call(null,x)){
return cljs.compiler.emit_vector.call(null,x,cljs.compiler.emit_constants_comma_sep);
} else {
if(cljs.analyzer.cljs_set_QMARK_.call(null,x)){
return cljs.compiler.emit_set.call(null,x,cljs.compiler.emit_constants_comma_sep,cljs.compiler.all_distinct_QMARK_);
} else {
return cljs.compiler.emit_constant_STAR_.call(null,x);

}
}
}
}
}
});
cljs.compiler.emit_constant = (function cljs$compiler$emit_constant(v){
var m = cljs.analyzer.elide_irrelevant_meta.call(null,cljs.core.meta.call(null,v));
if((!((cljs.core.seq.call(null,m) == null)))){
return cljs.compiler.emit_with_meta.call(null,(function (){
return cljs.compiler.emit_constant_no_meta.call(null,v);
}),(function (){
return cljs.compiler.emit_constant_no_meta.call(null,m);
}));
} else {
return cljs.compiler.emit_constant_no_meta.call(null,v);
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_constant_STAR_,new cljs.core.Keyword(null,"default","default",-1987822328),(function (x){
throw cljs.core.ex_info.call(null,["failed compiling constant: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"; ",cljs.core.pr_str.call(null,cljs.core.type.call(null,x))," is not a valid ClojureScript constant."].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"constant","constant",-379609303),x,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type.call(null,x),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),new cljs.core.Keyword(null,"compilation","compilation",-1328774561)], null));
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant_STAR_,null,(function (x){
return cljs.compiler.emits.call(null,"null");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant_STAR_,Number,(function (x){
if(cljs.core.truth_(isNaN(x))){
return cljs.compiler.emits.call(null,"NaN");
} else {
if(cljs.core.not.call(null,isFinite(x))){
return cljs.compiler.emits.call(null,(((x > (0)))?"Infinity":"-Infinity"));
} else {
return cljs.compiler.emits.call(null,"(",x,")");

}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant_STAR_,String,(function (x){
return cljs.compiler.emits.call(null,cljs.compiler.wrap_in_double_quotes.call(null,cljs.compiler.escape_string.call(null,x)));
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant_STAR_,Boolean,(function (x){
return cljs.compiler.emits.call(null,(cljs.core.truth_(x)?"true":"false"));
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant_STAR_,RegExp,(function (x){
if(cljs.core._EQ_.call(null,"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x))){
return cljs.compiler.emits.call(null,"(new RegExp(\"\"))");
} else {
var vec__40178 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,cljs.core.str.cljs$core$IFn$_invoke$arity$1(x));
var _ = cljs.core.nth.call(null,vec__40178,(0),null);
var flags = cljs.core.nth.call(null,vec__40178,(1),null);
var pattern = cljs.core.nth.call(null,vec__40178,(2),null);
return cljs.compiler.emits.call(null,pattern);
}
}));
cljs.compiler.emits_keyword = (function cljs$compiler$emits_keyword(kw){
var ns = cljs.core.namespace.call(null,kw);
var name = cljs.core.name.call(null,kw);
cljs.compiler.emits.call(null,"new cljs.core.Keyword(");

cljs.compiler.emit_constant.call(null,ns);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,name);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,(cljs.core.truth_(ns)?[ns,"/",name].join(''):name));

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,cljs.core.hash.call(null,kw));

return cljs.compiler.emits.call(null,")");
});
cljs.compiler.emits_symbol = (function cljs$compiler$emits_symbol(sym){
var ns = cljs.core.namespace.call(null,sym);
var name = cljs.core.name.call(null,sym);
var symstr = (((!((ns == null))))?[ns,"/",name].join(''):name);
cljs.compiler.emits.call(null,"new cljs.core.Symbol(");

cljs.compiler.emit_constant.call(null,ns);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,name);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,symstr);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,cljs.core.hash.call(null,sym));

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,null);

return cljs.compiler.emits.call(null,")");
});
cljs.core._add_method.call(null,cljs.compiler.emit_constant_STAR_,cljs.core.Keyword,(function (x){
var temp__5733__auto__ = (function (){var and__4115__auto__ = new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
if(cljs.core.truth_(and__4115__auto__)){
return x.call(null,new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(temp__5733__auto__)){
var value = temp__5733__auto__;
return cljs.compiler.emits.call(null,"cljs.core.",value);
} else {
return cljs.compiler.emits_keyword.call(null,x);
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant_STAR_,cljs.core.Symbol,(function (x){
var temp__5733__auto__ = (function (){var and__4115__auto__ = new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
if(cljs.core.truth_(and__4115__auto__)){
return x.call(null,new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(temp__5733__auto__)){
var value = temp__5733__auto__;
return cljs.compiler.emits.call(null,"cljs.core.",value);
} else {
return cljs.compiler.emits_symbol.call(null,x);
}
}));
cljs.compiler.emit_constants_comma_sep = (function cljs$compiler$emit_constants_comma_sep(cs){
return (function (){
return cljs.core.doall.call(null,cljs.core.map_indexed.call(null,(function (i,m){
if(cljs.core.even_QMARK_.call(null,i)){
return cljs.compiler.emit_constant.call(null,m);
} else {
return cljs.compiler.emits.call(null,m);
}
}),cljs.compiler.comma_sep.call(null,cs)));
});
});
cljs.compiler.array_map_threshold = (8);
cljs.core._add_method.call(null,cljs.compiler.emit_constant_STAR_,Date,(function (date){
return cljs.compiler.emits.call(null,"new Date(",date.getTime(),")");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant_STAR_,cljs.core.UUID,(function (uuid){
var uuid_str = uuid.toString();
return cljs.compiler.emits.call(null,"new cljs.core.UUID(\"",uuid_str,"\", ",cljs.core.hash.call(null,uuid_str),")");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant_STAR_,cljs.tagged_literals.JSValue,(function (v){
var items = v.val;
if(cljs.core.map_QMARK_.call(null,items)){
return cljs.compiler.emit_js_object.call(null,items,(function (p1__40181_SHARP_){
return (function (){
return cljs.compiler.emit_constant.call(null,p1__40181_SHARP_);
});
}));
} else {
return cljs.compiler.emit_js_array.call(null,items,cljs.compiler.emit_constants_comma_sep);
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"no-op","no-op",-93046065),(function (m){
return null;
}));
cljs.compiler.emit_var = (function cljs$compiler$emit_var(p__40183){
var map__40184 = p__40183;
var map__40184__$1 = (((((!((map__40184 == null))))?(((((map__40184.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40184.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40184):map__40184);
var ast = map__40184__$1;
var info = cljs.core.get.call(null,map__40184__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var env = cljs.core.get.call(null,map__40184__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var form = cljs.core.get.call(null,map__40184__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var temp__5733__auto__ = new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292).cljs$core$IFn$_invoke$arity$1(ast);
if(cljs.core.truth_(temp__5733__auto__)){
var const_expr = temp__5733__auto__;
return cljs.compiler.emit.call(null,cljs.core.assoc.call(null,const_expr,new cljs.core.Keyword(null,"env","env",-1815813235),env));
} else {
var map__40186 = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
var map__40186__$1 = (((((!((map__40186 == null))))?(((((map__40186.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40186.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40186):map__40186);
var cenv = map__40186__$1;
var options = cljs.core.get.call(null,map__40186__$1,new cljs.core.Keyword(null,"options","options",99638489));
var var_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info);
var info__$1 = ((cljs.core._EQ_.call(null,cljs.core.namespace.call(null,var_name),"js"))?(function (){var js_module_name = cljs.core.get_in.call(null,cenv,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-module-index","js-module-index",2072061931),cljs.core.name.call(null,var_name),new cljs.core.Keyword(null,"name","name",1843675177)], null));
var or__4126__auto__ = js_module_name;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.name.call(null,var_name);
}
})():info);
if(cljs.core.truth_(new cljs.core.Keyword(null,"binding-form?","binding-form?",1728940169).cljs$core$IFn$_invoke$arity$1(ast))){
return cljs.compiler.emits.call(null,cljs.compiler.munge.call(null,ast));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var reserved = (function (){var G__40188 = cljs.compiler.js_reserved;
if(cljs.core.truth_((function (){var and__4115__auto__ = cljs.compiler.es5_GT__EQ_.call(null,new cljs.core.Keyword(null,"language-out","language-out",334619882).cljs$core$IFn$_invoke$arity$1(options));
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.namespace.call(null,var_name) == null)));
} else {
return and__4115__auto__;
}
})())){
return clojure.set.difference.call(null,G__40188,cljs.analyzer.es5_allowed);
} else {
return G__40188;
}
})();
var js_module = cljs.core.get_in.call(null,cenv,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-namespaces","js-namespaces",-471353612),(function (){var or__4126__auto__ = cljs.core.namespace.call(null,var_name);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.name.call(null,var_name);
}
})()], null));
var info__$2 = (function (){var G__40189 = info__$1;
if(cljs.core.not_EQ_.call(null,form,new cljs.core.Symbol("js","-Infinity","js/-Infinity",958706333,null))){
return cljs.compiler.munge.call(null,G__40189,reserved);
} else {
return G__40189;
}
})();
var env__40027__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__40027__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var G__40190_40191 = new cljs.core.Keyword(null,"module-type","module-type",1392760304).cljs$core$IFn$_invoke$arity$1(js_module);
var G__40190_40192__$1 = (((G__40190_40191 instanceof cljs.core.Keyword))?G__40190_40191.fqn:null);
switch (G__40190_40192__$1) {
case "commonjs":
if(cljs.core.truth_(cljs.core.namespace.call(null,var_name))){
cljs.compiler.emits.call(null,cljs.compiler.munge.call(null,cljs.core.namespace.call(null,var_name),reserved),"[\"default\"].",cljs.compiler.munge.call(null,cljs.core.name.call(null,var_name),reserved));
} else {
cljs.compiler.emits.call(null,cljs.compiler.munge.call(null,cljs.core.name.call(null,var_name),reserved),"[\"default\"]");
}

break;
case "es6":
if(cljs.core.truth_((function (){var and__4115__auto__ = cljs.core.namespace.call(null,var_name);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core._EQ_.call(null,"default",cljs.core.name.call(null,var_name));
} else {
return and__4115__auto__;
}
})())){
cljs.compiler.emits.call(null,cljs.compiler.munge.call(null,cljs.core.namespace.call(null,var_name),reserved),"[\"default\"]");
} else {
cljs.compiler.emits.call(null,info__$2);
}

break;
default:
cljs.compiler.emits.call(null,info__$2);

}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__40027__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"var","var",-769682797),(function (expr){
return cljs.compiler.emit_var.call(null,expr);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"binding","binding",539932593),(function (expr){
return cljs.compiler.emit_var.call(null,expr);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),(function (expr){
return cljs.compiler.emit_var.call(null,expr);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"local","local",-1497766724),(function (expr){
return cljs.compiler.emit_var.call(null,expr);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"the-var","the-var",1428415613),(function (p__40194){
var map__40195 = p__40194;
var map__40195__$1 = (((((!((map__40195 == null))))?(((((map__40195.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40195.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40195):map__40195);
var arg = map__40195__$1;
var env = cljs.core.get.call(null,map__40195__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var var$ = cljs.core.get.call(null,map__40195__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var sym = cljs.core.get.call(null,map__40195__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var meta = cljs.core.get.call(null,map__40195__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
if(cljs.analyzer.ast_QMARK_.call(null,sym)){
} else {
throw (new Error("Assert failed: (ana/ast? sym)"));
}

if(cljs.analyzer.ast_QMARK_.call(null,meta)){
} else {
throw (new Error("Assert failed: (ana/ast? meta)"));
}

var map__40197 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(var$);
var map__40197__$1 = (((((!((map__40197 == null))))?(((((map__40197.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40197.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40197):map__40197);
var name = cljs.core.get.call(null,map__40197__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env__40027__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__40027__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"new cljs.core.Var(function(){return ",cljs.compiler.munge.call(null,name),";},",sym,",",meta,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__40027__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.emit_with_meta = (function cljs$compiler$emit_with_meta(expr,meta){
return cljs.compiler.emits.call(null,"cljs.core.with_meta(",expr,",",meta,")");
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"with-meta","with-meta",-1566856820),(function (p__40199){
var map__40200 = p__40199;
var map__40200__$1 = (((((!((map__40200 == null))))?(((((map__40200.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40200.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40200):map__40200);
var expr = cljs.core.get.call(null,map__40200__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var meta = cljs.core.get.call(null,map__40200__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var env = cljs.core.get.call(null,map__40200__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__40027__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__40027__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_with_meta.call(null,expr,meta);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__40027__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.distinct_keys_QMARK_ = (function cljs$compiler$distinct_keys_QMARK_(keys){
var keys__$1 = cljs.core.map.call(null,cljs.analyzer.unwrap_quote,keys);
return ((cljs.core.every_QMARK_.call(null,(function (p1__40202_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__40202_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
}),keys__$1)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,keys__$1)),cljs.core.count.call(null,keys__$1))));
});
cljs.compiler.emit_map = (function cljs$compiler$emit_map(keys,vals,comma_sep,distinct_keys_QMARK_){
if((cljs.core.count.call(null,keys) === (0))){
return cljs.compiler.emits.call(null,"cljs.core.PersistentArrayMap.EMPTY");
} else {
if((cljs.core.count.call(null,keys) <= cljs.compiler.array_map_threshold)){
if(cljs.core.truth_(distinct_keys_QMARK_.call(null,keys))){
return cljs.compiler.emits.call(null,"new cljs.core.PersistentArrayMap(null, ",cljs.core.count.call(null,keys),", [",comma_sep.call(null,cljs.core.interleave.call(null,keys,vals)),"], null)");
} else {
return cljs.compiler.emits.call(null,"cljs.core.PersistentArrayMap.createAsIfByAssoc([",comma_sep.call(null,cljs.core.interleave.call(null,keys,vals)),"])");
}
} else {
return cljs.compiler.emits.call(null,"cljs.core.PersistentHashMap.fromArrays([",comma_sep.call(null,keys),"],[",comma_sep.call(null,vals),"])");

}
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"map","map",1371690461),(function (p__40203){
var map__40204 = p__40203;
var map__40204__$1 = (((((!((map__40204 == null))))?(((((map__40204.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40204.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40204):map__40204);
var env = cljs.core.get.call(null,map__40204__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var keys = cljs.core.get.call(null,map__40204__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.call(null,map__40204__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env__40027__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__40027__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_map.call(null,keys,vals,cljs.compiler.comma_sep,cljs.compiler.distinct_keys_QMARK_);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__40027__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.emit_list = (function cljs$compiler$emit_list(items,comma_sep){
if(cljs.core.empty_QMARK_.call(null,items)){
return cljs.compiler.emits.call(null,"cljs.core.List.EMPTY");
} else {
return cljs.compiler.emits.call(null,"cljs.core.list(",comma_sep.call(null,items),")");
}
});
cljs.compiler.emit_vector = (function cljs$compiler$emit_vector(items,comma_sep){
if(cljs.core.empty_QMARK_.call(null,items)){
return cljs.compiler.emits.call(null,"cljs.core.PersistentVector.EMPTY");
} else {
var cnt = cljs.core.count.call(null,items);
if((cnt < (32))){
return cljs.compiler.emits.call(null,"new cljs.core.PersistentVector(null, ",cnt,", 5, cljs.core.PersistentVector.EMPTY_NODE, [",comma_sep.call(null,items),"], null)");
} else {
return cljs.compiler.emits.call(null,"cljs.core.PersistentVector.fromArray([",comma_sep.call(null,items),"], true)");
}
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (p__40206){
var map__40207 = p__40206;
var map__40207__$1 = (((((!((map__40207 == null))))?(((((map__40207.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40207.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40207):map__40207);
var items = cljs.core.get.call(null,map__40207__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__40207__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__40027__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__40027__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_vector.call(null,items,cljs.compiler.comma_sep);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__40027__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.distinct_constants_QMARK_ = (function cljs$compiler$distinct_constants_QMARK_(items){
var items__$1 = cljs.core.map.call(null,cljs.analyzer.unwrap_quote,items);
return ((cljs.core.every_QMARK_.call(null,(function (p1__40209_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__40209_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
}),items__$1)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,items__$1)),cljs.core.count.call(null,items__$1))));
});
cljs.compiler.emit_set = (function cljs$compiler$emit_set(items,comma_sep,distinct_constants_QMARK_){
if(cljs.core.empty_QMARK_.call(null,items)){
return cljs.compiler.emits.call(null,"cljs.core.PersistentHashSet.EMPTY");
} else {
if(cljs.core.truth_(distinct_constants_QMARK_.call(null,items))){
return cljs.compiler.emits.call(null,"new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, ",cljs.core.count.call(null,items),", [",comma_sep.call(null,cljs.core.interleave.call(null,items,cljs.core.repeat.call(null,"null"))),"], null), null)");
} else {
return cljs.compiler.emits.call(null,"cljs.core.PersistentHashSet.createAsIfByAssoc([",comma_sep.call(null,items),"])");

}
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set","set",304602554),(function (p__40210){
var map__40211 = p__40210;
var map__40211__$1 = (((((!((map__40211 == null))))?(((((map__40211.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40211.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40211):map__40211);
var items = cljs.core.get.call(null,map__40211__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__40211__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__40027__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__40027__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_set.call(null,items,cljs.compiler.comma_sep,cljs.compiler.distinct_constants_QMARK_);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__40027__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.emit_js_object = (function cljs$compiler$emit_js_object(items,emit_js_object_val){
cljs.compiler.emits.call(null,"({");

var temp__5735__auto___40235 = cljs.core.seq.call(null,items);
if(temp__5735__auto___40235){
var items_40236__$1 = temp__5735__auto___40235;
var vec__40213_40237 = items_40236__$1;
var seq__40214_40238 = cljs.core.seq.call(null,vec__40213_40237);
var first__40215_40239 = cljs.core.first.call(null,seq__40214_40238);
var seq__40214_40240__$1 = cljs.core.next.call(null,seq__40214_40238);
var vec__40216_40241 = first__40215_40239;
var k_40242 = cljs.core.nth.call(null,vec__40216_40241,(0),null);
var v_40243 = cljs.core.nth.call(null,vec__40216_40241,(1),null);
var r_40244 = seq__40214_40240__$1;
cljs.compiler.emits.call(null,"\"",cljs.core.name.call(null,k_40242),"\": ",emit_js_object_val.call(null,v_40243));

var seq__40219_40245 = cljs.core.seq.call(null,r_40244);
var chunk__40220_40246 = null;
var count__40221_40247 = (0);
var i__40222_40248 = (0);
while(true){
if((i__40222_40248 < count__40221_40247)){
var vec__40229_40249 = cljs.core._nth.call(null,chunk__40220_40246,i__40222_40248);
var k_40250__$1 = cljs.core.nth.call(null,vec__40229_40249,(0),null);
var v_40251__$1 = cljs.core.nth.call(null,vec__40229_40249,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_40250__$1),"\": ",emit_js_object_val.call(null,v_40251__$1));


var G__40252 = seq__40219_40245;
var G__40253 = chunk__40220_40246;
var G__40254 = count__40221_40247;
var G__40255 = (i__40222_40248 + (1));
seq__40219_40245 = G__40252;
chunk__40220_40246 = G__40253;
count__40221_40247 = G__40254;
i__40222_40248 = G__40255;
continue;
} else {
var temp__5735__auto___40256__$1 = cljs.core.seq.call(null,seq__40219_40245);
if(temp__5735__auto___40256__$1){
var seq__40219_40257__$1 = temp__5735__auto___40256__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40219_40257__$1)){
var c__4556__auto___40258 = cljs.core.chunk_first.call(null,seq__40219_40257__$1);
var G__40259 = cljs.core.chunk_rest.call(null,seq__40219_40257__$1);
var G__40260 = c__4556__auto___40258;
var G__40261 = cljs.core.count.call(null,c__4556__auto___40258);
var G__40262 = (0);
seq__40219_40245 = G__40259;
chunk__40220_40246 = G__40260;
count__40221_40247 = G__40261;
i__40222_40248 = G__40262;
continue;
} else {
var vec__40232_40263 = cljs.core.first.call(null,seq__40219_40257__$1);
var k_40264__$1 = cljs.core.nth.call(null,vec__40232_40263,(0),null);
var v_40265__$1 = cljs.core.nth.call(null,vec__40232_40263,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_40264__$1),"\": ",emit_js_object_val.call(null,v_40265__$1));


var G__40266 = cljs.core.next.call(null,seq__40219_40257__$1);
var G__40267 = null;
var G__40268 = (0);
var G__40269 = (0);
seq__40219_40245 = G__40266;
chunk__40220_40246 = G__40267;
count__40221_40247 = G__40268;
i__40222_40248 = G__40269;
continue;
}
} else {
}
}
break;
}
} else {
}

return cljs.compiler.emits.call(null,"})");
});
cljs.compiler.emit_js_array = (function cljs$compiler$emit_js_array(items,comma_sep){
return cljs.compiler.emits.call(null,"[",comma_sep.call(null,items),"]");
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-object","js-object",1830199158),(function (p__40270){
var map__40271 = p__40270;
var map__40271__$1 = (((((!((map__40271 == null))))?(((((map__40271.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40271.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40271):map__40271);
var keys = cljs.core.get.call(null,map__40271__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.call(null,map__40271__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env = cljs.core.get.call(null,map__40271__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__40027__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__40027__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_js_object.call(null,cljs.core.map.call(null,cljs.core.vector,keys,vals),cljs.core.identity);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__40027__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-array","js-array",-1210185421),(function (p__40273){
var map__40274 = p__40273;
var map__40274__$1 = (((((!((map__40274 == null))))?(((((map__40274.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40274.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40274):map__40274);
var items = cljs.core.get.call(null,map__40274__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__40274__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__40027__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__40027__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_js_array.call(null,items,cljs.compiler.comma_sep);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__40027__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.emit_record_value = (function cljs$compiler$emit_record_value(ns,name,items){
return cljs.compiler.emits.call(null,ns,".map__GT_",name,"(",items,")");
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"quote","quote",-262615245),(function (p__40276){
var map__40277 = p__40276;
var map__40277__$1 = (((((!((map__40277 == null))))?(((((map__40277.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40277.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40277):map__40277);
var expr = cljs.core.get.call(null,map__40277__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
return cljs.compiler.emit.call(null,expr);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"const","const",1709929842),(function (p__40279){
var map__40280 = p__40279;
var map__40280__$1 = (((((!((map__40280 == null))))?(((((map__40280.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40280.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40280):map__40280);
var form = cljs.core.get.call(null,map__40280__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var env = cljs.core.get.call(null,map__40280__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__40027__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__40027__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_constant.call(null,form);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__40027__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.truthy_constant_QMARK_ = (function cljs$compiler$truthy_constant_QMARK_(expr){
var map__40282 = cljs.analyzer.unwrap_quote.call(null,expr);
var map__40282__$1 = (((((!((map__40282 == null))))?(((((map__40282.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40282.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40282):map__40282);
var op = cljs.core.get.call(null,map__40282__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__40282__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.call(null,map__40282__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
var or__4126__auto__ = ((cljs.core._EQ_.call(null,op,new cljs.core.Keyword(null,"const","const",1709929842)))?(function (){var and__4115__auto__ = form;
if(cljs.core.truth_(and__4115__auto__)){
return (!(((((typeof form === 'string') && (cljs.core._EQ_.call(null,form,"")))) || (((typeof form === 'number') && ((form === (0))))))));
} else {
return and__4115__auto__;
}
})():false);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if((!((const_expr == null)))){
return cljs.compiler.truthy_constant_QMARK_.call(null,const_expr);
} else {
return false;
}
}
});
cljs.compiler.falsey_constant_QMARK_ = (function cljs$compiler$falsey_constant_QMARK_(expr){
var map__40284 = cljs.analyzer.unwrap_quote.call(null,expr);
var map__40284__$1 = (((((!((map__40284 == null))))?(((((map__40284.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40284.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40284):map__40284);
var op = cljs.core.get.call(null,map__40284__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__40284__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.call(null,map__40284__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
var or__4126__auto__ = ((cljs.core._EQ_.call(null,op,new cljs.core.Keyword(null,"const","const",1709929842))) && (((form === false) || ((form == null)))));
if(or__4126__auto__){
return or__4126__auto__;
} else {
if((!((const_expr == null)))){
return cljs.compiler.falsey_constant_QMARK_.call(null,const_expr);
} else {
return false;
}
}
});
cljs.compiler.safe_test_QMARK_ = (function cljs$compiler$safe_test_QMARK_(env,e){
var tag = cljs.analyzer.infer_tag.call(null,env,e);
var or__4126__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"seq","seq",-177272256,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null], null), null).call(null,tag);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.compiler.truthy_constant_QMARK_.call(null,e);
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"if","if",-458814265),(function (p__40286){
var map__40287 = p__40286;
var map__40287__$1 = (((((!((map__40287 == null))))?(((((map__40287.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40287.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40287):map__40287);
var test = cljs.core.get.call(null,map__40287__$1,new cljs.core.Keyword(null,"test","test",577538877));
var then = cljs.core.get.call(null,map__40287__$1,new cljs.core.Keyword(null,"then","then",460598070));
var else$ = cljs.core.get.call(null,map__40287__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var env = cljs.core.get.call(null,map__40287__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var unchecked = cljs.core.get.call(null,map__40287__$1,new cljs.core.Keyword(null,"unchecked","unchecked",924418378));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
var checked = cljs.core.not.call(null,(function (){var or__4126__auto__ = unchecked;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.compiler.safe_test_QMARK_.call(null,env,test);
}
})());
if(cljs.core.truth_(cljs.compiler.truthy_constant_QMARK_.call(null,test))){
return cljs.compiler.emitln.call(null,then);
} else {
if(cljs.core.truth_(cljs.compiler.falsey_constant_QMARK_.call(null,test))){
return cljs.compiler.emitln.call(null,else$);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.call(null,"(",((checked)?"cljs.core.truth_":null),"(",test,")?",then,":",else$,")");
} else {
if(checked){
cljs.compiler.emitln.call(null,"if(cljs.core.truth_(",test,")){");
} else {
cljs.compiler.emitln.call(null,"if(",test,"){");
}

cljs.compiler.emitln.call(null,then,"} else {");

return cljs.compiler.emitln.call(null,else$,"}");
}

}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"case","case",1143702196),(function (p__40289){
var map__40290 = p__40289;
var map__40290__$1 = (((((!((map__40290 == null))))?(((((map__40290.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40290.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40290):map__40290);
var v = cljs.core.get.call(null,map__40290__$1,new cljs.core.Keyword(null,"test","test",577538877));
var nodes = cljs.core.get.call(null,map__40290__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var default$ = cljs.core.get.call(null,map__40290__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var env = cljs.core.get.call(null,map__40290__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"expr","expr",745722291))){
cljs.compiler.emitln.call(null,"(function(){");
} else {
}

var gs = cljs.core.gensym.call(null,"caseval__");
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,"var ",gs,";");
} else {
}

cljs.compiler.emitln.call(null,"switch (",v,") {");

var seq__40292_40328 = cljs.core.seq.call(null,nodes);
var chunk__40293_40329 = null;
var count__40294_40330 = (0);
var i__40295_40331 = (0);
while(true){
if((i__40295_40331 < count__40294_40330)){
var map__40312_40332 = cljs.core._nth.call(null,chunk__40293_40329,i__40295_40331);
var map__40312_40333__$1 = (((((!((map__40312_40332 == null))))?(((((map__40312_40332.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40312_40332.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40312_40332):map__40312_40332);
var ts_40334 = cljs.core.get.call(null,map__40312_40333__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__40313_40335 = cljs.core.get.call(null,map__40312_40333__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__40313_40336__$1 = (((((!((map__40313_40335 == null))))?(((((map__40313_40335.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40313_40335.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40313_40335):map__40313_40335);
var then_40337 = cljs.core.get.call(null,map__40313_40336__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__40316_40338 = cljs.core.seq.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"test","test",577538877),ts_40334));
var chunk__40317_40339 = null;
var count__40318_40340 = (0);
var i__40319_40341 = (0);
while(true){
if((i__40319_40341 < count__40318_40340)){
var test_40342 = cljs.core._nth.call(null,chunk__40317_40339,i__40319_40341);
cljs.compiler.emitln.call(null,"case ",test_40342,":");


var G__40343 = seq__40316_40338;
var G__40344 = chunk__40317_40339;
var G__40345 = count__40318_40340;
var G__40346 = (i__40319_40341 + (1));
seq__40316_40338 = G__40343;
chunk__40317_40339 = G__40344;
count__40318_40340 = G__40345;
i__40319_40341 = G__40346;
continue;
} else {
var temp__5735__auto___40347 = cljs.core.seq.call(null,seq__40316_40338);
if(temp__5735__auto___40347){
var seq__40316_40348__$1 = temp__5735__auto___40347;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40316_40348__$1)){
var c__4556__auto___40349 = cljs.core.chunk_first.call(null,seq__40316_40348__$1);
var G__40350 = cljs.core.chunk_rest.call(null,seq__40316_40348__$1);
var G__40351 = c__4556__auto___40349;
var G__40352 = cljs.core.count.call(null,c__4556__auto___40349);
var G__40353 = (0);
seq__40316_40338 = G__40350;
chunk__40317_40339 = G__40351;
count__40318_40340 = G__40352;
i__40319_40341 = G__40353;
continue;
} else {
var test_40354 = cljs.core.first.call(null,seq__40316_40348__$1);
cljs.compiler.emitln.call(null,"case ",test_40354,":");


var G__40355 = cljs.core.next.call(null,seq__40316_40348__$1);
var G__40356 = null;
var G__40357 = (0);
var G__40358 = (0);
seq__40316_40338 = G__40355;
chunk__40317_40339 = G__40356;
count__40318_40340 = G__40357;
i__40319_40341 = G__40358;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_40337);
} else {
cljs.compiler.emitln.call(null,then_40337);
}

cljs.compiler.emitln.call(null,"break;");


var G__40359 = seq__40292_40328;
var G__40360 = chunk__40293_40329;
var G__40361 = count__40294_40330;
var G__40362 = (i__40295_40331 + (1));
seq__40292_40328 = G__40359;
chunk__40293_40329 = G__40360;
count__40294_40330 = G__40361;
i__40295_40331 = G__40362;
continue;
} else {
var temp__5735__auto___40363 = cljs.core.seq.call(null,seq__40292_40328);
if(temp__5735__auto___40363){
var seq__40292_40364__$1 = temp__5735__auto___40363;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40292_40364__$1)){
var c__4556__auto___40365 = cljs.core.chunk_first.call(null,seq__40292_40364__$1);
var G__40366 = cljs.core.chunk_rest.call(null,seq__40292_40364__$1);
var G__40367 = c__4556__auto___40365;
var G__40368 = cljs.core.count.call(null,c__4556__auto___40365);
var G__40369 = (0);
seq__40292_40328 = G__40366;
chunk__40293_40329 = G__40367;
count__40294_40330 = G__40368;
i__40295_40331 = G__40369;
continue;
} else {
var map__40320_40370 = cljs.core.first.call(null,seq__40292_40364__$1);
var map__40320_40371__$1 = (((((!((map__40320_40370 == null))))?(((((map__40320_40370.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40320_40370.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40320_40370):map__40320_40370);
var ts_40372 = cljs.core.get.call(null,map__40320_40371__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__40321_40373 = cljs.core.get.call(null,map__40320_40371__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__40321_40374__$1 = (((((!((map__40321_40373 == null))))?(((((map__40321_40373.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40321_40373.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40321_40373):map__40321_40373);
var then_40375 = cljs.core.get.call(null,map__40321_40374__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__40324_40376 = cljs.core.seq.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"test","test",577538877),ts_40372));
var chunk__40325_40377 = null;
var count__40326_40378 = (0);
var i__40327_40379 = (0);
while(true){
if((i__40327_40379 < count__40326_40378)){
var test_40380 = cljs.core._nth.call(null,chunk__40325_40377,i__40327_40379);
cljs.compiler.emitln.call(null,"case ",test_40380,":");


var G__40381 = seq__40324_40376;
var G__40382 = chunk__40325_40377;
var G__40383 = count__40326_40378;
var G__40384 = (i__40327_40379 + (1));
seq__40324_40376 = G__40381;
chunk__40325_40377 = G__40382;
count__40326_40378 = G__40383;
i__40327_40379 = G__40384;
continue;
} else {
var temp__5735__auto___40385__$1 = cljs.core.seq.call(null,seq__40324_40376);
if(temp__5735__auto___40385__$1){
var seq__40324_40386__$1 = temp__5735__auto___40385__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40324_40386__$1)){
var c__4556__auto___40387 = cljs.core.chunk_first.call(null,seq__40324_40386__$1);
var G__40388 = cljs.core.chunk_rest.call(null,seq__40324_40386__$1);
var G__40389 = c__4556__auto___40387;
var G__40390 = cljs.core.count.call(null,c__4556__auto___40387);
var G__40391 = (0);
seq__40324_40376 = G__40388;
chunk__40325_40377 = G__40389;
count__40326_40378 = G__40390;
i__40327_40379 = G__40391;
continue;
} else {
var test_40392 = cljs.core.first.call(null,seq__40324_40386__$1);
cljs.compiler.emitln.call(null,"case ",test_40392,":");


var G__40393 = cljs.core.next.call(null,seq__40324_40386__$1);
var G__40394 = null;
var G__40395 = (0);
var G__40396 = (0);
seq__40324_40376 = G__40393;
chunk__40325_40377 = G__40394;
count__40326_40378 = G__40395;
i__40327_40379 = G__40396;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_40375);
} else {
cljs.compiler.emitln.call(null,then_40375);
}

cljs.compiler.emitln.call(null,"break;");


var G__40397 = cljs.core.next.call(null,seq__40292_40364__$1);
var G__40398 = null;
var G__40399 = (0);
var G__40400 = (0);
seq__40292_40328 = G__40397;
chunk__40293_40329 = G__40398;
count__40294_40330 = G__40399;
i__40295_40331 = G__40400;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(default$)){
cljs.compiler.emitln.call(null,"default:");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",default$);
} else {
cljs.compiler.emitln.call(null,default$);
}
} else {
}

cljs.compiler.emitln.call(null,"}");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.call(null,"return ",gs,";})()");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"throw","throw",-1044625833),(function (p__40401){
var map__40402 = p__40401;
var map__40402__$1 = (((((!((map__40402 == null))))?(((((map__40402.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40402.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40402):map__40402);
var throw$ = cljs.core.get.call(null,map__40402__$1,new cljs.core.Keyword(null,"exception","exception",-335277064));
var env = cljs.core.get.call(null,map__40402__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emits.call(null,"(function(){throw ",throw$,"})()");
} else {
return cljs.compiler.emitln.call(null,"throw ",throw$,";");
}
}));
cljs.compiler.base_types = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 15, ["boolean",null,"object",null,"*",null,"string",null,"Object",null,"Number",null,"null",null,"Date",null,"number",null,"String",null,"RegExp",null,"...*",null,"Array",null,"array",null,"Boolean",null], null), null);
cljs.compiler.mapped_types = new cljs.core.PersistentArrayMap(null, 1, ["nil","null"], null);
cljs.compiler.resolve_type = (function cljs$compiler$resolve_type(env,t){
if(cljs.core.truth_(cljs.core.get.call(null,cljs.compiler.base_types,t))){
return t;
} else {
if(cljs.core.truth_(cljs.core.get.call(null,cljs.compiler.mapped_types,t))){
return cljs.core.get.call(null,cljs.compiler.mapped_types,t);
} else {
if(goog.string.startsWith(t,"!")){
return ["!",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.resolve_type.call(null,env,cljs.core.subs.call(null,t,(1))))].join('');
} else {
if(goog.string.startsWith(t,"{")){
return t;
} else {
if(goog.string.startsWith(t,"function")){
var idx = t.lastIndexOf(":");
var vec__40405 = (((!(((-1) === idx))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,t,(0),idx),cljs.core.subs.call(null,t,(idx + (1)),cljs.core.count.call(null,t))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,null], null));
var fstr = cljs.core.nth.call(null,vec__40405,(0),null);
var rstr = cljs.core.nth.call(null,vec__40405,(1),null);
var ret_t = (cljs.core.truth_(rstr)?cljs.compiler.resolve_type.call(null,env,rstr):null);
var axstr = cljs.core.subs.call(null,fstr,(9),(cljs.core.count.call(null,fstr) - (1)));
var args_ts = ((clojure.string.blank_QMARK_.call(null,axstr))?null:cljs.core.map.call(null,cljs.core.comp.call(null,(function (p1__40404_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__40404_SHARP_);
}),clojure.string.trim),clojure.string.split.call(null,axstr,/,/)));
var G__40408 = ["function(",clojure.string.join.call(null,",",args_ts),")"].join('');
if(cljs.core.truth_(ret_t)){
return [G__40408,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ret_t)].join('');
} else {
return G__40408;
}
} else {
if(goog.string.endsWith(t,"=")){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.resolve_type.call(null,env,cljs.core.subs.call(null,t,(0),(cljs.core.count.call(null,t) - (1))))),"="].join('');
} else {
return cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,env,cljs.core.symbol.call(null,t)))));

}
}
}
}
}
}
});
cljs.compiler.resolve_types = (function cljs$compiler$resolve_types(env,ts){
var ts__$1 = cljs.core.subs.call(null,clojure.string.trim.call(null,ts),(1),(cljs.core.count.call(null,ts) - (1)));
var xs = clojure.string.split.call(null,ts__$1,/\|/);
return ["{",clojure.string.join.call(null,"|",cljs.core.map.call(null,(function (p1__40409_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__40409_SHARP_);
}),xs)),"}"].join('');
});
cljs.compiler.munge_param_return = (function cljs$compiler$munge_param_return(env,line){
if(cljs.core.truth_(cljs.core.re_find.call(null,/@param/,line))){
var vec__40410 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__40411 = cljs.core.seq.call(null,vec__40410);
var first__40412 = cljs.core.first.call(null,seq__40411);
var seq__40411__$1 = cljs.core.next.call(null,seq__40411);
var p = first__40412;
var first__40412__$1 = cljs.core.first.call(null,seq__40411__$1);
var seq__40411__$2 = cljs.core.next.call(null,seq__40411__$1);
var ts = first__40412__$1;
var first__40412__$2 = cljs.core.first.call(null,seq__40411__$2);
var seq__40411__$3 = cljs.core.next.call(null,seq__40411__$2);
var n = first__40412__$2;
var xs = seq__40411__$3;
if(cljs.core.truth_(((cljs.core._EQ_.call(null,"@param",p))?(function (){var and__4115__auto__ = ts;
if(cljs.core.truth_(and__4115__auto__)){
return goog.string.startsWith(ts,"{");
} else {
return and__4115__auto__;
}
})():false))){
return clojure.string.join.call(null," ",cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.compiler.resolve_types.call(null,env,ts),cljs.compiler.munge.call(null,n)], null),xs));
} else {
return line;
}
} else {
if(cljs.core.truth_(cljs.core.re_find.call(null,/@return/,line))){
var vec__40413 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__40414 = cljs.core.seq.call(null,vec__40413);
var first__40415 = cljs.core.first.call(null,seq__40414);
var seq__40414__$1 = cljs.core.next.call(null,seq__40414);
var p = first__40415;
var first__40415__$1 = cljs.core.first.call(null,seq__40414__$1);
var seq__40414__$2 = cljs.core.next.call(null,seq__40414__$1);
var ts = first__40415__$1;
var xs = seq__40414__$2;
if(cljs.core.truth_(((cljs.core._EQ_.call(null,"@return",p))?(function (){var and__4115__auto__ = ts;
if(cljs.core.truth_(and__4115__auto__)){
return goog.string.startsWith(ts,"{");
} else {
return and__4115__auto__;
}
})():false))){
return clojure.string.join.call(null," ",cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.compiler.resolve_types.call(null,env,ts)], null),xs));
} else {
return line;
}
} else {
return line;

}
}
});
cljs.compiler.checking_types_QMARK_ = (function cljs$compiler$checking_types_QMARK_(){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"warning","warning",-1685650671),null,new cljs.core.Keyword(null,"error","error",-978969032),null], null), null).call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"closure-warnings","closure-warnings",1362834211),new cljs.core.Keyword(null,"check-types","check-types",-833794607)], null)));
});
/**
 * Emit a nicely formatted comment string.
 */
cljs.compiler.emit_comment = (function cljs$compiler$emit_comment(var_args){
var G__40418 = arguments.length;
switch (G__40418) {
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
return cljs.compiler.emit_comment.call(null,null,doc,jsdoc);
}));

(cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3 = (function (env,doc,jsdoc){
var docs = (cljs.core.truth_(doc)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [doc], null):null);
var docs__$1 = (cljs.core.truth_(jsdoc)?cljs.core.concat.call(null,docs,jsdoc):docs);
var docs__$2 = cljs.core.remove.call(null,cljs.core.nil_QMARK_,docs__$1);
var print_comment_lines = (function cljs$compiler$print_comment_lines(e){
var vec__40426 = cljs.core.map.call(null,(function (p1__40416_SHARP_){
if(cljs.core.truth_(cljs.compiler.checking_types_QMARK_.call(null))){
return cljs.compiler.munge_param_return.call(null,env,p1__40416_SHARP_);
} else {
return p1__40416_SHARP_;
}
}),clojure.string.split_lines.call(null,e));
var seq__40427 = cljs.core.seq.call(null,vec__40426);
var first__40428 = cljs.core.first.call(null,seq__40427);
var seq__40427__$1 = cljs.core.next.call(null,seq__40427);
var x = first__40428;
var ys = seq__40427__$1;
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,x,"*/","* /"));

var seq__40429 = cljs.core.seq.call(null,ys);
var chunk__40430 = null;
var count__40431 = (0);
var i__40432 = (0);
while(true){
if((i__40432 < count__40431)){
var next_line = cljs.core._nth.call(null,chunk__40430,i__40432);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));


var G__40438 = seq__40429;
var G__40439 = chunk__40430;
var G__40440 = count__40431;
var G__40441 = (i__40432 + (1));
seq__40429 = G__40438;
chunk__40430 = G__40439;
count__40431 = G__40440;
i__40432 = G__40441;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__40429);
if(temp__5735__auto__){
var seq__40429__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40429__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__40429__$1);
var G__40442 = cljs.core.chunk_rest.call(null,seq__40429__$1);
var G__40443 = c__4556__auto__;
var G__40444 = cljs.core.count.call(null,c__4556__auto__);
var G__40445 = (0);
seq__40429 = G__40442;
chunk__40430 = G__40443;
count__40431 = G__40444;
i__40432 = G__40445;
continue;
} else {
var next_line = cljs.core.first.call(null,seq__40429__$1);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));


var G__40446 = cljs.core.next.call(null,seq__40429__$1);
var G__40447 = null;
var G__40448 = (0);
var G__40449 = (0);
seq__40429 = G__40446;
chunk__40430 = G__40447;
count__40431 = G__40448;
i__40432 = G__40449;
continue;
}
} else {
return null;
}
}
break;
}
});
if(cljs.core.seq.call(null,docs__$2)){
cljs.compiler.emitln.call(null,"/**");

var seq__40433_40450 = cljs.core.seq.call(null,docs__$2);
var chunk__40434_40451 = null;
var count__40435_40452 = (0);
var i__40436_40453 = (0);
while(true){
if((i__40436_40453 < count__40435_40452)){
var e_40454 = cljs.core._nth.call(null,chunk__40434_40451,i__40436_40453);
if(cljs.core.truth_(e_40454)){
print_comment_lines.call(null,e_40454);
} else {
}


var G__40455 = seq__40433_40450;
var G__40456 = chunk__40434_40451;
var G__40457 = count__40435_40452;
var G__40458 = (i__40436_40453 + (1));
seq__40433_40450 = G__40455;
chunk__40434_40451 = G__40456;
count__40435_40452 = G__40457;
i__40436_40453 = G__40458;
continue;
} else {
var temp__5735__auto___40459 = cljs.core.seq.call(null,seq__40433_40450);
if(temp__5735__auto___40459){
var seq__40433_40460__$1 = temp__5735__auto___40459;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40433_40460__$1)){
var c__4556__auto___40461 = cljs.core.chunk_first.call(null,seq__40433_40460__$1);
var G__40462 = cljs.core.chunk_rest.call(null,seq__40433_40460__$1);
var G__40463 = c__4556__auto___40461;
var G__40464 = cljs.core.count.call(null,c__4556__auto___40461);
var G__40465 = (0);
seq__40433_40450 = G__40462;
chunk__40434_40451 = G__40463;
count__40435_40452 = G__40464;
i__40436_40453 = G__40465;
continue;
} else {
var e_40466 = cljs.core.first.call(null,seq__40433_40460__$1);
if(cljs.core.truth_(e_40466)){
print_comment_lines.call(null,e_40466);
} else {
}


var G__40467 = cljs.core.next.call(null,seq__40433_40460__$1);
var G__40468 = null;
var G__40469 = (0);
var G__40470 = (0);
seq__40433_40450 = G__40467;
chunk__40434_40451 = G__40468;
count__40435_40452 = G__40469;
i__40436_40453 = G__40470;
continue;
}
} else {
}
}
break;
}

return cljs.compiler.emitln.call(null," */");
} else {
return null;
}
}));

(cljs.compiler.emit_comment.cljs$lang$maxFixedArity = 3);

cljs.compiler.valid_define_value_QMARK_ = (function cljs$compiler$valid_define_value_QMARK_(x){
return ((typeof x === 'string') || (x === true) || (x === false) || (typeof x === 'number'));
});
cljs.compiler.get_define = (function cljs$compiler$get_define(mname,jsdoc){
var opts = cljs.core.get.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.Keyword(null,"options","options",99638489));
var and__4115__auto__ = cljs.core.some.call(null,(function (p1__40472_SHARP_){
return goog.string.startsWith(p1__40472_SHARP_,"@define");
}),jsdoc);
if(cljs.core.truth_(and__4115__auto__)){
var and__4115__auto____$1 = opts;
if(cljs.core.truth_(and__4115__auto____$1)){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"none","none",1333468478))){
var define = cljs.core.get_in.call(null,opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"closure-defines","closure-defines",-1213856476),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname)], null));
if(cljs.compiler.valid_define_value_QMARK_.call(null,define)){
return cljs.core.pr_str.call(null,define);
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"def","def",-1043430536),(function (p__40473){
var map__40474 = p__40473;
var map__40474__$1 = (((((!((map__40474 == null))))?(((((map__40474.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40474.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40474):map__40474);
var doc = cljs.core.get.call(null,map__40474__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var jsdoc = cljs.core.get.call(null,map__40474__$1,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516));
var test = cljs.core.get.call(null,map__40474__$1,new cljs.core.Keyword(null,"test","test",577538877));
var goog_define = cljs.core.get.call(null,map__40474__$1,new cljs.core.Keyword(null,"goog-define","goog-define",-1048305441));
var init = cljs.core.get.call(null,map__40474__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var name = cljs.core.get.call(null,map__40474__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__40474__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var export$ = cljs.core.get.call(null,map__40474__$1,new cljs.core.Keyword(null,"export","export",214356590));
var var$ = cljs.core.get.call(null,map__40474__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var var_ast = cljs.core.get.call(null,map__40474__$1,new cljs.core.Keyword(null,"var-ast","var-ast",1200379319));
if(cljs.core.truth_((function (){var or__4126__auto__ = init;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env);
}
})())){
var mname = cljs.compiler.munge.call(null,name);
cljs.compiler.emit_comment.call(null,env,doc,cljs.core.concat.call(null,(cljs.core.truth_(goog_define)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["@define {",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog_define),"}"].join('')], null):null),jsdoc,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516).cljs$core$IFn$_invoke$arity$1(init)));

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,"return (");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,"(function (){");
} else {
}

cljs.compiler.emits.call(null,var$);

if(cljs.core.truth_(init)){
cljs.compiler.emits.call(null," = ",(function (){var temp__5733__auto__ = cljs.compiler.get_define.call(null,mname,jsdoc);
if(cljs.core.truth_(temp__5733__auto__)){
var define = temp__5733__auto__;
return define;
} else {
return init;
}
})());
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,"; return (");

cljs.compiler.emits.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"the-var","the-var",1428415613),new cljs.core.Keyword(null,"env","env",-1815813235),cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291))], null),var_ast));

cljs.compiler.emitln.call(null,");})()");
} else {
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,")");
} else {
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
} else {
cljs.compiler.emitln.call(null,";");
}

if(cljs.core.truth_(export$)){
cljs.compiler.emitln.call(null,"goog.exportSymbol('",cljs.compiler.munge.call(null,export$),"', ",mname,");");
} else {
}

if(cljs.core.truth_((function (){var and__4115__auto__ = cljs.analyzer._STAR_load_tests_STAR_;
if(cljs.core.truth_(and__4115__auto__)){
return test;
} else {
return and__4115__auto__;
}
})())){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,";");
} else {
}

return cljs.compiler.emitln.call(null,var$,".cljs$lang$test = ",test,";");
} else {
return null;
}
} else {
return null;
}
}));
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__40476){
var map__40477 = p__40476;
var map__40477__$1 = (((((!((map__40477 == null))))?(((((map__40477.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40477.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40477):map__40477);
var name = cljs.core.get.call(null,map__40477__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__40477__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__40477__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var arglist = cljs.core.gensym.call(null,"arglist__");
var delegate_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,name)),"__delegate"].join('');
cljs.compiler.emitln.call(null,"(function (",arglist,"){");

var seq__40479_40503 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.drop_last.call(null,(2),params)));
var chunk__40480_40504 = null;
var count__40481_40505 = (0);
var i__40482_40506 = (0);
while(true){
if((i__40482_40506 < count__40481_40505)){
var vec__40489_40507 = cljs.core._nth.call(null,chunk__40480_40504,i__40482_40506);
var i_40508 = cljs.core.nth.call(null,vec__40489_40507,(0),null);
var param_40509 = cljs.core.nth.call(null,vec__40489_40507,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_40509);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");


var G__40510 = seq__40479_40503;
var G__40511 = chunk__40480_40504;
var G__40512 = count__40481_40505;
var G__40513 = (i__40482_40506 + (1));
seq__40479_40503 = G__40510;
chunk__40480_40504 = G__40511;
count__40481_40505 = G__40512;
i__40482_40506 = G__40513;
continue;
} else {
var temp__5735__auto___40514 = cljs.core.seq.call(null,seq__40479_40503);
if(temp__5735__auto___40514){
var seq__40479_40515__$1 = temp__5735__auto___40514;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40479_40515__$1)){
var c__4556__auto___40516 = cljs.core.chunk_first.call(null,seq__40479_40515__$1);
var G__40517 = cljs.core.chunk_rest.call(null,seq__40479_40515__$1);
var G__40518 = c__4556__auto___40516;
var G__40519 = cljs.core.count.call(null,c__4556__auto___40516);
var G__40520 = (0);
seq__40479_40503 = G__40517;
chunk__40480_40504 = G__40518;
count__40481_40505 = G__40519;
i__40482_40506 = G__40520;
continue;
} else {
var vec__40492_40521 = cljs.core.first.call(null,seq__40479_40515__$1);
var i_40522 = cljs.core.nth.call(null,vec__40492_40521,(0),null);
var param_40523 = cljs.core.nth.call(null,vec__40492_40521,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_40523);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");


var G__40524 = cljs.core.next.call(null,seq__40479_40515__$1);
var G__40525 = null;
var G__40526 = (0);
var G__40527 = (0);
seq__40479_40503 = G__40524;
chunk__40480_40504 = G__40525;
count__40481_40505 = G__40526;
i__40482_40506 = G__40527;
continue;
}
} else {
}
}
break;
}

if(((1) < cljs.core.count.call(null,params))){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,cljs.core.butlast.call(null,params)));

cljs.compiler.emitln.call(null," = cljs.core.first(",arglist,");");

cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = cljs.core.rest(",arglist,");");

cljs.compiler.emits.call(null,"return ",delegate_name,"(");

var seq__40495_40528 = cljs.core.seq.call(null,params);
var chunk__40496_40529 = null;
var count__40497_40530 = (0);
var i__40498_40531 = (0);
while(true){
if((i__40498_40531 < count__40497_40530)){
var param_40532 = cljs.core._nth.call(null,chunk__40496_40529,i__40498_40531);
cljs.compiler.emit.call(null,param_40532);

if(cljs.core._EQ_.call(null,param_40532,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__40533 = seq__40495_40528;
var G__40534 = chunk__40496_40529;
var G__40535 = count__40497_40530;
var G__40536 = (i__40498_40531 + (1));
seq__40495_40528 = G__40533;
chunk__40496_40529 = G__40534;
count__40497_40530 = G__40535;
i__40498_40531 = G__40536;
continue;
} else {
var temp__5735__auto___40537 = cljs.core.seq.call(null,seq__40495_40528);
if(temp__5735__auto___40537){
var seq__40495_40538__$1 = temp__5735__auto___40537;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40495_40538__$1)){
var c__4556__auto___40539 = cljs.core.chunk_first.call(null,seq__40495_40538__$1);
var G__40540 = cljs.core.chunk_rest.call(null,seq__40495_40538__$1);
var G__40541 = c__4556__auto___40539;
var G__40542 = cljs.core.count.call(null,c__4556__auto___40539);
var G__40543 = (0);
seq__40495_40528 = G__40540;
chunk__40496_40529 = G__40541;
count__40497_40530 = G__40542;
i__40498_40531 = G__40543;
continue;
} else {
var param_40544 = cljs.core.first.call(null,seq__40495_40538__$1);
cljs.compiler.emit.call(null,param_40544);

if(cljs.core._EQ_.call(null,param_40544,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__40545 = cljs.core.next.call(null,seq__40495_40538__$1);
var G__40546 = null;
var G__40547 = (0);
var G__40548 = (0);
seq__40495_40528 = G__40545;
chunk__40496_40529 = G__40546;
count__40497_40530 = G__40547;
i__40498_40531 = G__40548;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,");");
} else {
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = cljs.core.seq(",arglist,");");

cljs.compiler.emits.call(null,"return ",delegate_name,"(");

var seq__40499_40549 = cljs.core.seq.call(null,params);
var chunk__40500_40550 = null;
var count__40501_40551 = (0);
var i__40502_40552 = (0);
while(true){
if((i__40502_40552 < count__40501_40551)){
var param_40553 = cljs.core._nth.call(null,chunk__40500_40550,i__40502_40552);
cljs.compiler.emit.call(null,param_40553);

if(cljs.core._EQ_.call(null,param_40553,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__40554 = seq__40499_40549;
var G__40555 = chunk__40500_40550;
var G__40556 = count__40501_40551;
var G__40557 = (i__40502_40552 + (1));
seq__40499_40549 = G__40554;
chunk__40500_40550 = G__40555;
count__40501_40551 = G__40556;
i__40502_40552 = G__40557;
continue;
} else {
var temp__5735__auto___40558 = cljs.core.seq.call(null,seq__40499_40549);
if(temp__5735__auto___40558){
var seq__40499_40559__$1 = temp__5735__auto___40558;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40499_40559__$1)){
var c__4556__auto___40560 = cljs.core.chunk_first.call(null,seq__40499_40559__$1);
var G__40561 = cljs.core.chunk_rest.call(null,seq__40499_40559__$1);
var G__40562 = c__4556__auto___40560;
var G__40563 = cljs.core.count.call(null,c__4556__auto___40560);
var G__40564 = (0);
seq__40499_40549 = G__40561;
chunk__40500_40550 = G__40562;
count__40501_40551 = G__40563;
i__40502_40552 = G__40564;
continue;
} else {
var param_40565 = cljs.core.first.call(null,seq__40499_40559__$1);
cljs.compiler.emit.call(null,param_40565);

if(cljs.core._EQ_.call(null,param_40565,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__40566 = cljs.core.next.call(null,seq__40499_40559__$1);
var G__40567 = null;
var G__40568 = (0);
var G__40569 = (0);
seq__40499_40549 = G__40566;
chunk__40500_40550 = G__40567;
count__40501_40551 = G__40568;
i__40502_40552 = G__40569;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,");");
}

return cljs.compiler.emits.call(null,"})");
});
cljs.compiler.emit_fn_params = (function cljs$compiler$emit_fn_params(params){
var seq__40570 = cljs.core.seq.call(null,params);
var chunk__40571 = null;
var count__40572 = (0);
var i__40573 = (0);
while(true){
if((i__40573 < count__40572)){
var param = cljs.core._nth.call(null,chunk__40571,i__40573);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__40574 = seq__40570;
var G__40575 = chunk__40571;
var G__40576 = count__40572;
var G__40577 = (i__40573 + (1));
seq__40570 = G__40574;
chunk__40571 = G__40575;
count__40572 = G__40576;
i__40573 = G__40577;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__40570);
if(temp__5735__auto__){
var seq__40570__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40570__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__40570__$1);
var G__40578 = cljs.core.chunk_rest.call(null,seq__40570__$1);
var G__40579 = c__4556__auto__;
var G__40580 = cljs.core.count.call(null,c__4556__auto__);
var G__40581 = (0);
seq__40570 = G__40578;
chunk__40571 = G__40579;
count__40572 = G__40580;
i__40573 = G__40581;
continue;
} else {
var param = cljs.core.first.call(null,seq__40570__$1);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__40582 = cljs.core.next.call(null,seq__40570__$1);
var G__40583 = null;
var G__40584 = (0);
var G__40585 = (0);
seq__40570 = G__40582;
chunk__40571 = G__40583;
count__40572 = G__40584;
i__40573 = G__40585;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__40586){
var map__40587 = p__40586;
var map__40587__$1 = (((((!((map__40587 == null))))?(((((map__40587.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40587.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40587):map__40587);
var expr = cljs.core.get.call(null,map__40587__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var type = cljs.core.get.call(null,map__40587__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__40587__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__40587__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__40587__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__40587__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var env__40027__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__40027__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"(function ",cljs.compiler.munge.call(null,name),"(");

cljs.compiler.emit_fn_params.call(null,params);

cljs.compiler.emitln.call(null,"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.call(null,"while(true){");
} else {
}

cljs.compiler.emits.call(null,expr);

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.call(null,"break;");

cljs.compiler.emitln.call(null,"}");
} else {
}

cljs.compiler.emits.call(null,"})");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__40027__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
});
/**
 * Emit code that copies function arguments into an array starting at an index.
 *   Returns name of var holding the array.
 */
cljs.compiler.emit_arguments_to_array = (function cljs$compiler$emit_arguments_to_array(startslice){
if((((startslice >= (0))) && (cljs.core.integer_QMARK_.call(null,startslice)))){
} else {
throw (new Error("Assert failed: (and (>= startslice 0) (integer? startslice))"));
}

var mname = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
var i = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname),"__i"].join('');
var a = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname),"__a"].join('');
cljs.compiler.emitln.call(null,"var ",i," = 0, ",a," = new Array(arguments.length -  ",startslice,");");

cljs.compiler.emitln.call(null,"while (",i," < ",a,".length) {",a,"[",i,"] = arguments[",i," + ",startslice,"]; ++",i,";}");

return a;
});
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__40589){
var map__40590 = p__40589;
var map__40590__$1 = (((((!((map__40590 == null))))?(((((map__40590.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40590.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40590):map__40590);
var f = map__40590__$1;
var expr = cljs.core.get.call(null,map__40590__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var max_fixed_arity = cljs.core.get.call(null,map__40590__$1,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869));
var variadic = cljs.core.get.call(null,map__40590__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var type = cljs.core.get.call(null,map__40590__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__40590__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__40590__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__40590__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__40590__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var env__40027__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__40027__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var name_40600__$1 = (function (){var or__4126__auto__ = name;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_40601 = cljs.compiler.munge.call(null,name_40600__$1);
var delegate_name_40602 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_40601),"__delegate"].join('');
cljs.compiler.emitln.call(null,"(function() { ");

cljs.compiler.emits.call(null,"var ",delegate_name_40602," = function (");

var seq__40592_40603 = cljs.core.seq.call(null,params);
var chunk__40593_40604 = null;
var count__40594_40605 = (0);
var i__40595_40606 = (0);
while(true){
if((i__40595_40606 < count__40594_40605)){
var param_40607 = cljs.core._nth.call(null,chunk__40593_40604,i__40595_40606);
cljs.compiler.emit.call(null,param_40607);

if(cljs.core._EQ_.call(null,param_40607,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__40608 = seq__40592_40603;
var G__40609 = chunk__40593_40604;
var G__40610 = count__40594_40605;
var G__40611 = (i__40595_40606 + (1));
seq__40592_40603 = G__40608;
chunk__40593_40604 = G__40609;
count__40594_40605 = G__40610;
i__40595_40606 = G__40611;
continue;
} else {
var temp__5735__auto___40612 = cljs.core.seq.call(null,seq__40592_40603);
if(temp__5735__auto___40612){
var seq__40592_40613__$1 = temp__5735__auto___40612;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40592_40613__$1)){
var c__4556__auto___40614 = cljs.core.chunk_first.call(null,seq__40592_40613__$1);
var G__40615 = cljs.core.chunk_rest.call(null,seq__40592_40613__$1);
var G__40616 = c__4556__auto___40614;
var G__40617 = cljs.core.count.call(null,c__4556__auto___40614);
var G__40618 = (0);
seq__40592_40603 = G__40615;
chunk__40593_40604 = G__40616;
count__40594_40605 = G__40617;
i__40595_40606 = G__40618;
continue;
} else {
var param_40619 = cljs.core.first.call(null,seq__40592_40613__$1);
cljs.compiler.emit.call(null,param_40619);

if(cljs.core._EQ_.call(null,param_40619,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__40620 = cljs.core.next.call(null,seq__40592_40613__$1);
var G__40621 = null;
var G__40622 = (0);
var G__40623 = (0);
seq__40592_40603 = G__40620;
chunk__40593_40604 = G__40621;
count__40594_40605 = G__40622;
i__40595_40606 = G__40623;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.call(null,"while(true){");
} else {
}

cljs.compiler.emits.call(null,expr);

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.call(null,"break;");

cljs.compiler.emitln.call(null,"}");
} else {
}

cljs.compiler.emitln.call(null,"};");

cljs.compiler.emitln.call(null,"var ",mname_40601," = function (",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):params)),"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",(cljs.core.count.call(null,params) - (1)),") {");

var a_40624 = cljs.compiler.emit_arguments_to_array.call(null,(cljs.core.count.call(null,params) - (1)));
cljs.compiler.emitln.call(null,"  ",cljs.core.last.call(null,params)," = new cljs.core.IndexedSeq(",a_40624,",0,null);");

cljs.compiler.emitln.call(null,"} ");
} else {
}

cljs.compiler.emits.call(null,"return ",delegate_name_40602,".call(this,");

var seq__40596_40625 = cljs.core.seq.call(null,params);
var chunk__40597_40626 = null;
var count__40598_40627 = (0);
var i__40599_40628 = (0);
while(true){
if((i__40599_40628 < count__40598_40627)){
var param_40629 = cljs.core._nth.call(null,chunk__40597_40626,i__40599_40628);
cljs.compiler.emit.call(null,param_40629);

if(cljs.core._EQ_.call(null,param_40629,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__40630 = seq__40596_40625;
var G__40631 = chunk__40597_40626;
var G__40632 = count__40598_40627;
var G__40633 = (i__40599_40628 + (1));
seq__40596_40625 = G__40630;
chunk__40597_40626 = G__40631;
count__40598_40627 = G__40632;
i__40599_40628 = G__40633;
continue;
} else {
var temp__5735__auto___40634 = cljs.core.seq.call(null,seq__40596_40625);
if(temp__5735__auto___40634){
var seq__40596_40635__$1 = temp__5735__auto___40634;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40596_40635__$1)){
var c__4556__auto___40636 = cljs.core.chunk_first.call(null,seq__40596_40635__$1);
var G__40637 = cljs.core.chunk_rest.call(null,seq__40596_40635__$1);
var G__40638 = c__4556__auto___40636;
var G__40639 = cljs.core.count.call(null,c__4556__auto___40636);
var G__40640 = (0);
seq__40596_40625 = G__40637;
chunk__40597_40626 = G__40638;
count__40598_40627 = G__40639;
i__40599_40628 = G__40640;
continue;
} else {
var param_40641 = cljs.core.first.call(null,seq__40596_40635__$1);
cljs.compiler.emit.call(null,param_40641);

if(cljs.core._EQ_.call(null,param_40641,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__40642 = cljs.core.next.call(null,seq__40596_40635__$1);
var G__40643 = null;
var G__40644 = (0);
var G__40645 = (0);
seq__40596_40625 = G__40642;
chunk__40597_40626 = G__40643;
count__40598_40627 = G__40644;
i__40599_40628 = G__40645;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.call(null,");");

cljs.compiler.emitln.call(null,"};");

cljs.compiler.emitln.call(null,mname_40601,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emits.call(null,mname_40601,".cljs$lang$applyTo = ");

cljs.compiler.emit_apply_to.call(null,cljs.core.assoc.call(null,f,new cljs.core.Keyword(null,"name","name",1843675177),name_40600__$1));

cljs.compiler.emitln.call(null,";");

cljs.compiler.emitln.call(null,mname_40601,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_40602,";");

cljs.compiler.emitln.call(null,"return ",mname_40601,";");

cljs.compiler.emitln.call(null,"})()");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__40027__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p__40649){
var map__40650 = p__40649;
var map__40650__$1 = (((((!((map__40650 == null))))?(((((map__40650.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40650.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40650):map__40650);
var variadic = cljs.core.get.call(null,map__40650__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var name = cljs.core.get.call(null,map__40650__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__40650__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var methods$ = cljs.core.get.call(null,map__40650__$1,new cljs.core.Keyword(null,"methods","methods",453930866));
var max_fixed_arity = cljs.core.get.call(null,map__40650__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var recur_frames = cljs.core.get.call(null,map__40650__$1,new cljs.core.Keyword(null,"recur-frames","recur-frames",-307205196));
var in_loop = cljs.core.get.call(null,map__40650__$1,new cljs.core.Keyword(null,"in-loop","in-loop",-187298246));
var loop_lets = cljs.core.get.call(null,map__40650__$1,new cljs.core.Keyword(null,"loop-lets","loop-lets",2036794185));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var recur_params = cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.filter.call(null,(function (p1__40646_SHARP_){
var and__4115__auto__ = p1__40646_SHARP_;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__40646_SHARP_));
} else {
return and__4115__auto__;
}
}),recur_frames));
var loop_locals = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.compiler.munge,cljs.core.concat.call(null,recur_params,(cljs.core.truth_((function (){var or__4126__auto__ = in_loop;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.seq.call(null,recur_params);
}
})())?cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"params","params",710516235),loop_lets):null))));
if(loop_locals){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emitln.call(null,"((function (",cljs.compiler.comma_sep.call(null,cljs.core.map.call(null,cljs.compiler.munge,loop_locals)),"){");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
} else {
cljs.compiler.emits.call(null,"return ");
}
} else {
}

if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,methods$))){
if(cljs.core.truth_(variadic)){
cljs.compiler.emit_variadic_fn_method.call(null,cljs.core.assoc.call(null,cljs.core.first.call(null,methods$),new cljs.core.Keyword(null,"name","name",1843675177),name));
} else {
cljs.compiler.emit_fn_method.call(null,cljs.core.assoc.call(null,cljs.core.first.call(null,methods$),new cljs.core.Keyword(null,"name","name",1843675177),name));
}
} else {
var name_40703__$1 = (function (){var or__4126__auto__ = name;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_40704 = cljs.compiler.munge.call(null,name_40703__$1);
var maxparams_40705 = cljs.core.apply.call(null,cljs.core.max_key,cljs.core.count,cljs.core.map.call(null,new cljs.core.Keyword(null,"params","params",710516235),methods$));
var mmap_40706 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_40704),"__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
}),methods$));
var ms_40707 = cljs.core.sort_by.call(null,(function (p1__40647_SHARP_){
return cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__40647_SHARP_)));
}),cljs.core.seq.call(null,mmap_40706));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emitln.call(null,"(function() {");

cljs.compiler.emitln.call(null,"var ",mname_40704," = null;");

var seq__40652_40708 = cljs.core.seq.call(null,ms_40707);
var chunk__40653_40709 = null;
var count__40654_40710 = (0);
var i__40655_40711 = (0);
while(true){
if((i__40655_40711 < count__40654_40710)){
var vec__40662_40712 = cljs.core._nth.call(null,chunk__40653_40709,i__40655_40711);
var n_40713 = cljs.core.nth.call(null,vec__40662_40712,(0),null);
var meth_40714 = cljs.core.nth.call(null,vec__40662_40712,(1),null);
cljs.compiler.emits.call(null,"var ",n_40713," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_40714))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_40714);
} else {
cljs.compiler.emit_fn_method.call(null,meth_40714);
}

cljs.compiler.emitln.call(null,";");


var G__40715 = seq__40652_40708;
var G__40716 = chunk__40653_40709;
var G__40717 = count__40654_40710;
var G__40718 = (i__40655_40711 + (1));
seq__40652_40708 = G__40715;
chunk__40653_40709 = G__40716;
count__40654_40710 = G__40717;
i__40655_40711 = G__40718;
continue;
} else {
var temp__5735__auto___40719 = cljs.core.seq.call(null,seq__40652_40708);
if(temp__5735__auto___40719){
var seq__40652_40720__$1 = temp__5735__auto___40719;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40652_40720__$1)){
var c__4556__auto___40721 = cljs.core.chunk_first.call(null,seq__40652_40720__$1);
var G__40722 = cljs.core.chunk_rest.call(null,seq__40652_40720__$1);
var G__40723 = c__4556__auto___40721;
var G__40724 = cljs.core.count.call(null,c__4556__auto___40721);
var G__40725 = (0);
seq__40652_40708 = G__40722;
chunk__40653_40709 = G__40723;
count__40654_40710 = G__40724;
i__40655_40711 = G__40725;
continue;
} else {
var vec__40665_40726 = cljs.core.first.call(null,seq__40652_40720__$1);
var n_40727 = cljs.core.nth.call(null,vec__40665_40726,(0),null);
var meth_40728 = cljs.core.nth.call(null,vec__40665_40726,(1),null);
cljs.compiler.emits.call(null,"var ",n_40727," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_40728))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_40728);
} else {
cljs.compiler.emit_fn_method.call(null,meth_40728);
}

cljs.compiler.emitln.call(null,";");


var G__40729 = cljs.core.next.call(null,seq__40652_40720__$1);
var G__40730 = null;
var G__40731 = (0);
var G__40732 = (0);
seq__40652_40708 = G__40729;
chunk__40653_40709 = G__40730;
count__40654_40710 = G__40731;
i__40655_40711 = G__40732;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,mname_40704," = function(",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,maxparams_40705),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):maxparams_40705)),"){");

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,maxparams_40705));

cljs.compiler.emitln.call(null," = var_args;");
} else {
}

cljs.compiler.emitln.call(null,"switch(arguments.length){");

var seq__40668_40733 = cljs.core.seq.call(null,ms_40707);
var chunk__40669_40734 = null;
var count__40670_40735 = (0);
var i__40671_40736 = (0);
while(true){
if((i__40671_40736 < count__40670_40735)){
var vec__40678_40737 = cljs.core._nth.call(null,chunk__40669_40734,i__40671_40736);
var n_40738 = cljs.core.nth.call(null,vec__40678_40737,(0),null);
var meth_40739 = cljs.core.nth.call(null,vec__40678_40737,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_40739))){
cljs.compiler.emitln.call(null,"default:");

var restarg_40740 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_40740," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_40741 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_40740," = new cljs.core.IndexedSeq(",a_40741,",0,null);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_40738,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_40705)),(((cljs.core.count.call(null,maxparams_40705) > (1)))?", ":null),restarg_40740,");");
} else {
var pcnt_40742 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_40739));
cljs.compiler.emitln.call(null,"case ",pcnt_40742,":");

cljs.compiler.emitln.call(null,"return ",n_40738,".call(this",(((pcnt_40742 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_40742,maxparams_40705)),null,(1),null)),(2),null))),");");
}


var G__40743 = seq__40668_40733;
var G__40744 = chunk__40669_40734;
var G__40745 = count__40670_40735;
var G__40746 = (i__40671_40736 + (1));
seq__40668_40733 = G__40743;
chunk__40669_40734 = G__40744;
count__40670_40735 = G__40745;
i__40671_40736 = G__40746;
continue;
} else {
var temp__5735__auto___40747 = cljs.core.seq.call(null,seq__40668_40733);
if(temp__5735__auto___40747){
var seq__40668_40748__$1 = temp__5735__auto___40747;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40668_40748__$1)){
var c__4556__auto___40749 = cljs.core.chunk_first.call(null,seq__40668_40748__$1);
var G__40750 = cljs.core.chunk_rest.call(null,seq__40668_40748__$1);
var G__40751 = c__4556__auto___40749;
var G__40752 = cljs.core.count.call(null,c__4556__auto___40749);
var G__40753 = (0);
seq__40668_40733 = G__40750;
chunk__40669_40734 = G__40751;
count__40670_40735 = G__40752;
i__40671_40736 = G__40753;
continue;
} else {
var vec__40681_40754 = cljs.core.first.call(null,seq__40668_40748__$1);
var n_40755 = cljs.core.nth.call(null,vec__40681_40754,(0),null);
var meth_40756 = cljs.core.nth.call(null,vec__40681_40754,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_40756))){
cljs.compiler.emitln.call(null,"default:");

var restarg_40757 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_40757," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_40758 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_40757," = new cljs.core.IndexedSeq(",a_40758,",0,null);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_40755,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_40705)),(((cljs.core.count.call(null,maxparams_40705) > (1)))?", ":null),restarg_40757,");");
} else {
var pcnt_40759 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_40756));
cljs.compiler.emitln.call(null,"case ",pcnt_40759,":");

cljs.compiler.emitln.call(null,"return ",n_40755,".call(this",(((pcnt_40759 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_40759,maxparams_40705)),null,(1),null)),(2),null))),");");
}


var G__40760 = cljs.core.next.call(null,seq__40668_40748__$1);
var G__40761 = null;
var G__40762 = (0);
var G__40763 = (0);
seq__40668_40733 = G__40760;
chunk__40669_40734 = G__40761;
count__40670_40735 = G__40762;
i__40671_40736 = G__40763;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"}");

var arg_count_js_40764 = ((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"self__","self__",-153190816,null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.val.call(null,cljs.core.first.call(null,ms_40707)))))))?"(arguments.length - 1)":"arguments.length");
cljs.compiler.emitln.call(null,"throw(new Error('Invalid arity: ' + ",arg_count_js_40764,"));");

cljs.compiler.emitln.call(null,"};");

if(cljs.core.truth_(variadic)){
cljs.compiler.emitln.call(null,mname_40704,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emitln.call(null,mname_40704,".cljs$lang$applyTo = ",cljs.core.some.call(null,(function (p1__40648_SHARP_){
var vec__40684 = p1__40648_SHARP_;
var n = cljs.core.nth.call(null,vec__40684,(0),null);
var m = cljs.core.nth.call(null,vec__40684,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
}),ms_40707),".cljs$lang$applyTo;");
} else {
}

var seq__40687_40765 = cljs.core.seq.call(null,ms_40707);
var chunk__40688_40766 = null;
var count__40689_40767 = (0);
var i__40690_40768 = (0);
while(true){
if((i__40690_40768 < count__40689_40767)){
var vec__40697_40769 = cljs.core._nth.call(null,chunk__40688_40766,i__40690_40768);
var n_40770 = cljs.core.nth.call(null,vec__40697_40769,(0),null);
var meth_40771 = cljs.core.nth.call(null,vec__40697_40769,(1),null);
var c_40772 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_40771));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_40771))){
cljs.compiler.emitln.call(null,mname_40704,".cljs$core$IFn$_invoke$arity$variadic = ",n_40770,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_40704,".cljs$core$IFn$_invoke$arity$",c_40772," = ",n_40770,";");
}


var G__40773 = seq__40687_40765;
var G__40774 = chunk__40688_40766;
var G__40775 = count__40689_40767;
var G__40776 = (i__40690_40768 + (1));
seq__40687_40765 = G__40773;
chunk__40688_40766 = G__40774;
count__40689_40767 = G__40775;
i__40690_40768 = G__40776;
continue;
} else {
var temp__5735__auto___40777 = cljs.core.seq.call(null,seq__40687_40765);
if(temp__5735__auto___40777){
var seq__40687_40778__$1 = temp__5735__auto___40777;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40687_40778__$1)){
var c__4556__auto___40779 = cljs.core.chunk_first.call(null,seq__40687_40778__$1);
var G__40780 = cljs.core.chunk_rest.call(null,seq__40687_40778__$1);
var G__40781 = c__4556__auto___40779;
var G__40782 = cljs.core.count.call(null,c__4556__auto___40779);
var G__40783 = (0);
seq__40687_40765 = G__40780;
chunk__40688_40766 = G__40781;
count__40689_40767 = G__40782;
i__40690_40768 = G__40783;
continue;
} else {
var vec__40700_40784 = cljs.core.first.call(null,seq__40687_40778__$1);
var n_40785 = cljs.core.nth.call(null,vec__40700_40784,(0),null);
var meth_40786 = cljs.core.nth.call(null,vec__40700_40784,(1),null);
var c_40787 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_40786));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_40786))){
cljs.compiler.emitln.call(null,mname_40704,".cljs$core$IFn$_invoke$arity$variadic = ",n_40785,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_40704,".cljs$core$IFn$_invoke$arity$",c_40787," = ",n_40785,";");
}


var G__40788 = cljs.core.next.call(null,seq__40687_40778__$1);
var G__40789 = null;
var G__40790 = (0);
var G__40791 = (0);
seq__40687_40765 = G__40788;
chunk__40688_40766 = G__40789;
count__40689_40767 = G__40790;
i__40690_40768 = G__40791;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"return ",mname_40704,";");

cljs.compiler.emitln.call(null,"})()");
}

if(loop_locals){
return cljs.compiler.emitln.call(null,";})(",cljs.compiler.comma_sep.call(null,loop_locals),"))");
} else {
return null;
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"do","do",46310725),(function (p__40792){
var map__40793 = p__40792;
var map__40793__$1 = (((((!((map__40793 == null))))?(((((map__40793.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40793.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40793):map__40793);
var statements = cljs.core.get.call(null,map__40793__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var ret = cljs.core.get.call(null,map__40793__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var env = cljs.core.get.call(null,map__40793__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(((cljs.core.seq.call(null,statements)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)))){
cljs.compiler.emitln.call(null,"(function (){");
} else {
}

var seq__40795_40799 = cljs.core.seq.call(null,statements);
var chunk__40796_40800 = null;
var count__40797_40801 = (0);
var i__40798_40802 = (0);
while(true){
if((i__40798_40802 < count__40797_40801)){
var s_40803 = cljs.core._nth.call(null,chunk__40796_40800,i__40798_40802);
cljs.compiler.emitln.call(null,s_40803);


var G__40804 = seq__40795_40799;
var G__40805 = chunk__40796_40800;
var G__40806 = count__40797_40801;
var G__40807 = (i__40798_40802 + (1));
seq__40795_40799 = G__40804;
chunk__40796_40800 = G__40805;
count__40797_40801 = G__40806;
i__40798_40802 = G__40807;
continue;
} else {
var temp__5735__auto___40808 = cljs.core.seq.call(null,seq__40795_40799);
if(temp__5735__auto___40808){
var seq__40795_40809__$1 = temp__5735__auto___40808;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40795_40809__$1)){
var c__4556__auto___40810 = cljs.core.chunk_first.call(null,seq__40795_40809__$1);
var G__40811 = cljs.core.chunk_rest.call(null,seq__40795_40809__$1);
var G__40812 = c__4556__auto___40810;
var G__40813 = cljs.core.count.call(null,c__4556__auto___40810);
var G__40814 = (0);
seq__40795_40799 = G__40811;
chunk__40796_40800 = G__40812;
count__40797_40801 = G__40813;
i__40798_40802 = G__40814;
continue;
} else {
var s_40815 = cljs.core.first.call(null,seq__40795_40809__$1);
cljs.compiler.emitln.call(null,s_40815);


var G__40816 = cljs.core.next.call(null,seq__40795_40809__$1);
var G__40817 = null;
var G__40818 = (0);
var G__40819 = (0);
seq__40795_40799 = G__40816;
chunk__40796_40800 = G__40817;
count__40797_40801 = G__40818;
i__40798_40802 = G__40819;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emit.call(null,ret);

if(((cljs.core.seq.call(null,statements)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)))){
return cljs.compiler.emitln.call(null,"})()");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"try","try",1380742522),(function (p__40820){
var map__40821 = p__40820;
var map__40821__$1 = (((((!((map__40821 == null))))?(((((map__40821.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40821.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40821):map__40821);
var try$ = cljs.core.get.call(null,map__40821__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var env = cljs.core.get.call(null,map__40821__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var catch$ = cljs.core.get.call(null,map__40821__$1,new cljs.core.Keyword(null,"catch","catch",1038065524));
var name = cljs.core.get.call(null,map__40821__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var finally$ = cljs.core.get.call(null,map__40821__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_((function (){var or__4126__auto__ = name;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return finally$;
}
})())){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

cljs.compiler.emits.call(null,"try{",try$,"}");

if(cljs.core.truth_(name)){
cljs.compiler.emits.call(null,"catch (",cljs.compiler.munge.call(null,name),"){",catch$,"}");
} else {
}

if(cljs.core.truth_(finally$)){
if(cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"const","const",1709929842),new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.unwrap_quote.call(null,finally$)))){
} else {
throw (new Error(["Assert failed: ","finally block cannot contain constant","\n","(not= :const (:op (ana/unwrap-quote finally)))"].join('')));
}

cljs.compiler.emits.call(null,"finally {",finally$,"}");
} else {
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.call(null,"})()");
} else {
return null;
}
} else {
return cljs.compiler.emits.call(null,try$);
}
}));
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__40823,is_loop){
var map__40824 = p__40823;
var map__40824__$1 = (((((!((map__40824 == null))))?(((((map__40824.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40824.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40824):map__40824);
var expr = cljs.core.get.call(null,map__40824__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.call(null,map__40824__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.call(null,map__40824__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var _STAR_lexical_renames_STAR__orig_val__40826_40840 = cljs.compiler._STAR_lexical_renames_STAR_;
var _STAR_lexical_renames_STAR__temp_val__40827_40841 = cljs.core.into.call(null,cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),context))?cljs.core.map.call(null,(function (binding){
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.compiler.hash_scope.call(null,binding),cljs.core.gensym.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"-"].join(''))],null));
}),bindings):null));
(cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__temp_val__40827_40841);

try{var seq__40828_40842 = cljs.core.seq.call(null,bindings);
var chunk__40829_40843 = null;
var count__40830_40844 = (0);
var i__40831_40845 = (0);
while(true){
if((i__40831_40845 < count__40830_40844)){
var map__40836_40846 = cljs.core._nth.call(null,chunk__40829_40843,i__40831_40845);
var map__40836_40847__$1 = (((((!((map__40836_40846 == null))))?(((((map__40836_40846.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40836_40846.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40836_40846):map__40836_40846);
var binding_40848 = map__40836_40847__$1;
var init_40849 = cljs.core.get.call(null,map__40836_40847__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_40848);

cljs.compiler.emitln.call(null," = ",init_40849,";");


var G__40850 = seq__40828_40842;
var G__40851 = chunk__40829_40843;
var G__40852 = count__40830_40844;
var G__40853 = (i__40831_40845 + (1));
seq__40828_40842 = G__40850;
chunk__40829_40843 = G__40851;
count__40830_40844 = G__40852;
i__40831_40845 = G__40853;
continue;
} else {
var temp__5735__auto___40854 = cljs.core.seq.call(null,seq__40828_40842);
if(temp__5735__auto___40854){
var seq__40828_40855__$1 = temp__5735__auto___40854;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40828_40855__$1)){
var c__4556__auto___40856 = cljs.core.chunk_first.call(null,seq__40828_40855__$1);
var G__40857 = cljs.core.chunk_rest.call(null,seq__40828_40855__$1);
var G__40858 = c__4556__auto___40856;
var G__40859 = cljs.core.count.call(null,c__4556__auto___40856);
var G__40860 = (0);
seq__40828_40842 = G__40857;
chunk__40829_40843 = G__40858;
count__40830_40844 = G__40859;
i__40831_40845 = G__40860;
continue;
} else {
var map__40838_40861 = cljs.core.first.call(null,seq__40828_40855__$1);
var map__40838_40862__$1 = (((((!((map__40838_40861 == null))))?(((((map__40838_40861.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40838_40861.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40838_40861):map__40838_40861);
var binding_40863 = map__40838_40862__$1;
var init_40864 = cljs.core.get.call(null,map__40838_40862__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_40863);

cljs.compiler.emitln.call(null," = ",init_40864,";");


var G__40865 = cljs.core.next.call(null,seq__40828_40855__$1);
var G__40866 = null;
var G__40867 = (0);
var G__40868 = (0);
seq__40828_40842 = G__40865;
chunk__40829_40843 = G__40866;
count__40830_40844 = G__40867;
i__40831_40845 = G__40868;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(is_loop)){
cljs.compiler.emitln.call(null,"while(true){");
} else {
}

cljs.compiler.emits.call(null,expr);

if(cljs.core.truth_(is_loop)){
cljs.compiler.emitln.call(null,"break;");

cljs.compiler.emitln.call(null,"}");
} else {
}
}finally {(cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__orig_val__40826_40840);
}
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.call(null,"})()");
} else {
return null;
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"let","let",-1282412701),(function (ast){
return cljs.compiler.emit_let.call(null,ast,false);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"loop","loop",-395552849),(function (ast){
return cljs.compiler.emit_let.call(null,ast,true);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"recur","recur",-437573268),(function (p__40869){
var map__40870 = p__40869;
var map__40870__$1 = (((((!((map__40870 == null))))?(((((map__40870.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40870.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40870):map__40870);
var frame = cljs.core.get.call(null,map__40870__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var exprs = cljs.core.get.call(null,map__40870__$1,new cljs.core.Keyword(null,"exprs","exprs",1795829094));
var env = cljs.core.get.call(null,map__40870__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var temps = cljs.core.vec.call(null,cljs.core.take.call(null,cljs.core.count.call(null,exprs),cljs.core.repeatedly.call(null,cljs.core.gensym)));
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(frame);
var n__4613__auto___40872 = cljs.core.count.call(null,exprs);
var i_40873 = (0);
while(true){
if((i_40873 < n__4613__auto___40872)){
cljs.compiler.emitln.call(null,"var ",temps.call(null,i_40873)," = ",exprs.call(null,i_40873),";");

var G__40874 = (i_40873 + (1));
i_40873 = G__40874;
continue;
} else {
}
break;
}

var n__4613__auto___40875 = cljs.core.count.call(null,exprs);
var i_40876 = (0);
while(true){
if((i_40876 < n__4613__auto___40875)){
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,params.call(null,i_40876))," = ",temps.call(null,i_40876),";");

var G__40877 = (i_40876 + (1));
i_40876 = G__40877;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.call(null,"continue;");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"letfn","letfn",-2121022354),(function (p__40878){
var map__40879 = p__40878;
var map__40879__$1 = (((((!((map__40879 == null))))?(((((map__40879.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40879.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40879):map__40879);
var expr = cljs.core.get.call(null,map__40879__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.call(null,map__40879__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.call(null,map__40879__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var seq__40881_40893 = cljs.core.seq.call(null,bindings);
var chunk__40882_40894 = null;
var count__40883_40895 = (0);
var i__40884_40896 = (0);
while(true){
if((i__40884_40896 < count__40883_40895)){
var map__40889_40897 = cljs.core._nth.call(null,chunk__40882_40894,i__40884_40896);
var map__40889_40898__$1 = (((((!((map__40889_40897 == null))))?(((((map__40889_40897.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40889_40897.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40889_40897):map__40889_40897);
var binding_40899 = map__40889_40898__$1;
var init_40900 = cljs.core.get.call(null,map__40889_40898__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_40899)," = ",init_40900,";");


var G__40901 = seq__40881_40893;
var G__40902 = chunk__40882_40894;
var G__40903 = count__40883_40895;
var G__40904 = (i__40884_40896 + (1));
seq__40881_40893 = G__40901;
chunk__40882_40894 = G__40902;
count__40883_40895 = G__40903;
i__40884_40896 = G__40904;
continue;
} else {
var temp__5735__auto___40905 = cljs.core.seq.call(null,seq__40881_40893);
if(temp__5735__auto___40905){
var seq__40881_40906__$1 = temp__5735__auto___40905;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40881_40906__$1)){
var c__4556__auto___40907 = cljs.core.chunk_first.call(null,seq__40881_40906__$1);
var G__40908 = cljs.core.chunk_rest.call(null,seq__40881_40906__$1);
var G__40909 = c__4556__auto___40907;
var G__40910 = cljs.core.count.call(null,c__4556__auto___40907);
var G__40911 = (0);
seq__40881_40893 = G__40908;
chunk__40882_40894 = G__40909;
count__40883_40895 = G__40910;
i__40884_40896 = G__40911;
continue;
} else {
var map__40891_40912 = cljs.core.first.call(null,seq__40881_40906__$1);
var map__40891_40913__$1 = (((((!((map__40891_40912 == null))))?(((((map__40891_40912.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40891_40912.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40891_40912):map__40891_40912);
var binding_40914 = map__40891_40913__$1;
var init_40915 = cljs.core.get.call(null,map__40891_40913__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_40914)," = ",init_40915,";");


var G__40916 = cljs.core.next.call(null,seq__40881_40906__$1);
var G__40917 = null;
var G__40918 = (0);
var G__40919 = (0);
seq__40881_40893 = G__40916;
chunk__40882_40894 = G__40917;
count__40883_40895 = G__40918;
i__40884_40896 = G__40919;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.call(null,expr);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.call(null,"})()");
} else {
return null;
}
}));
cljs.compiler.protocol_prefix = (function cljs$compiler$protocol_prefix(psym){
return cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym).replace((new RegExp("\\.","g")),"$").replace("/","$")),"$"].join(''));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"invoke","invoke",1145927159),(function (p__40922){
var map__40923 = p__40922;
var map__40923__$1 = (((((!((map__40923 == null))))?(((((map__40923.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40923.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40923):map__40923);
var expr = map__40923__$1;
var f = cljs.core.get.call(null,map__40923__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var args = cljs.core.get.call(null,map__40923__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__40923__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var info = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(f);
var fn_QMARK_ = (function (){var and__4115__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__4115__auto__)){
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(info))){
return new cljs.core.Keyword(null,"fn-var","fn-var",1086204730).cljs$core$IFn$_invoke$arity$1(info);
} else {
return false;
}
} else {
return and__4115__auto__;
}
})();
var protocol = new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(info);
var tag = cljs.analyzer.infer_tag.call(null,env,cljs.core.first.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr)));
var proto_QMARK_ = (function (){var and__4115__auto__ = protocol;
if(cljs.core.truth_(and__4115__auto__)){
var and__4115__auto____$1 = tag;
if(cljs.core.truth_(and__4115__auto____$1)){
var or__4126__auto__ = (function (){var and__4115__auto____$2 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__4115__auto____$2)){
var and__4115__auto____$3 = protocol;
if(cljs.core.truth_(and__4115__auto____$3)){
return cljs.core._EQ_.call(null,tag,new cljs.core.Symbol(null,"not-native","not-native",-236392494,null));
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
return new cljs.core.Keyword(null,"protocol-inline","protocol-inline",1550487556).cljs$core$IFn$_invoke$arity$1(env);
}
})();
if(cljs.core.truth_(and__4115__auto____$2)){
var or__4126__auto____$1 = cljs.core._EQ_.call(null,protocol,tag);
if(or__4126__auto____$1){
return or__4126__auto____$1;
} else {
if((!(cljs.core.set_QMARK_.call(null,tag)))){
if(cljs.core.not.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Symbol(null,"clj","clj",980036099,null),"null",new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),"null",new cljs.core.Symbol(null,"object","object",-1179821820,null),"null",new cljs.core.Symbol(null,"any","any",-948528346,null),"null",new cljs.core.Symbol(null,"js","js",-886355190,null),"null",new cljs.core.Symbol(null,"number","number",-1084057331,null),"null",new cljs.core.Symbol(null,"clj-or-nil","clj-or-nil",-2008798668,null),"null",new cljs.core.Symbol(null,"array","array",-440182315,null),"null",new cljs.core.Symbol(null,"string","string",-349010059,null),"null",new cljs.core.Symbol(null,"function","function",-486723946,null),"null",new cljs.core.Symbol(null,"clj-nil","clj-nil",1321798654,null),"null"], null), null).call(null,tag))){
var temp__5735__auto__ = new cljs.core.Keyword(null,"protocols","protocols",-5615896).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_existing_var.call(null,env,cljs.core.vary_meta.call(null,tag,cljs.core.assoc,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true)));
if(cljs.core.truth_(temp__5735__auto__)){
var ps = temp__5735__auto__;
return ps.call(null,protocol);
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
var first_arg_tag = cljs.analyzer.infer_tag.call(null,env,cljs.core.first.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr)));
var opt_not_QMARK_ = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info),new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null))) && (cljs.core._EQ_.call(null,first_arg_tag,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null))));
var opt_count_QMARK_ = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info),new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null))) && (cljs.core.boolean$.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"array","array",-440182315,null),"null",new cljs.core.Symbol(null,"string","string",-349010059,null),"null"], null), null).call(null,first_arg_tag))));
var ns = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(info);
var ftag = cljs.analyzer.infer_tag.call(null,env,f);
var js_QMARK_ = (function (){var or__4126__auto__ = cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"js","js",-886355190,null));
if(or__4126__auto__){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"Math","Math",2033287572,null));
if(or__4126__auto____$1){
return or__4126__auto____$1;
} else {
return new cljs.core.Keyword(null,"foreign","foreign",990521149).cljs$core$IFn$_invoke$arity$1(info);
}
}
})();
var goog_QMARK_ = (cljs.core.truth_(ns)?(function (){var or__4126__auto__ = cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"goog","goog",-70603925,null));
if(or__4126__auto__){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = (function (){var temp__5735__auto__ = cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns);
if(cljs.core.truth_(temp__5735__auto__)){
var ns_str = temp__5735__auto__;
return cljs.core._EQ_.call(null,cljs.core.get.call(null,clojure.string.split.call(null,ns_str,/\./),(0),null),"goog");
} else {
return null;
}
})();
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return (!(cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),ns)));
}
}
})():null);
var keyword_QMARK_ = (function (){var or__4126__auto__ = cljs.core._EQ_.call(null,new cljs.core.Symbol("cljs.core","Keyword","cljs.core/Keyword",-451434488,null),ftag);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var f__$1 = cljs.analyzer.unwrap_quote.call(null,f);
return ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f__$1),new cljs.core.Keyword(null,"const","const",1709929842))) && ((new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(f__$1) instanceof cljs.core.Keyword)));
}
})();
var vec__40925 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count.call(null,args);
var variadic_QMARK_ = new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(info);
var mps = new cljs.core.Keyword(null,"method-params","method-params",-980792179).cljs$core$IFn$_invoke$arity$1(info);
var mfa = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(info);
if(((cljs.core.not.call(null,variadic_QMARK_)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,mps),(1))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
} else {
if(cljs.core.truth_((function (){var and__4115__auto__ = variadic_QMARK_;
if(cljs.core.truth_(and__4115__auto__)){
return (arity > mfa);
} else {
return and__4115__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,info__$1)),".cljs$core$IFn$_invoke$arity$variadic"].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (p1__40920_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__40920_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
}));
})),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),mfa], null)], null);
} else {
var arities = cljs.core.map.call(null,cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([arity]),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,info__$1)),".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (p1__40921_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__40921_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
}));
})),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.call(null,vec__40925,(0),null);
var variadic_invoke = cljs.core.nth.call(null,vec__40925,(1),null);
var env__40027__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__40027__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(opt_not_QMARK_){
cljs.compiler.emits.call(null,"(!(",cljs.core.first.call(null,args),"))");
} else {
if(opt_count_QMARK_){
cljs.compiler.emits.call(null,"((",cljs.core.first.call(null,args),").length)");
} else {
if(cljs.core.truth_(proto_QMARK_)){
var pimpl_40928 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,cljs.compiler.protocol_prefix.call(null,protocol))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,cljs.core.name.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)))),"$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,args))].join('');
cljs.compiler.emits.call(null,cljs.core.first.call(null,args),".",pimpl_40928,"(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",cljs.core.rest.call(null,args))),")");
} else {
if(keyword_QMARK_){
cljs.compiler.emits.call(null,f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count.call(null,args),"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_40929 = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,mfa_40929,args)),(((mfa_40929 === (0)))?null:","),"cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([",cljs.compiler.comma_sep.call(null,cljs.core.drop.call(null,mfa_40929,args)),"], 0))");
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
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(cljs.core.truth_((function (){var and__4115__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__4115__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),null,new cljs.core.Keyword(null,"local","local",-1497766724),null], null), null).call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f__$1));
} else {
return and__4115__auto__;
}
})())){
var fprop_40930 = [".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,args))].join('');
if(cljs.core.truth_(cljs.analyzer._STAR_fn_invoke_direct_STAR_)){
cljs.compiler.emits.call(null,"(",f__$1,fprop_40930," ? ",f__$1,fprop_40930,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,"(",cljs.compiler.comma_sep.call(null,args),"))");
} else {
cljs.compiler.emits.call(null,"(",f__$1,fprop_40930," ? ",f__$1,fprop_40930,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),"))");
}
} else {
cljs.compiler.emits.call(null,f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),")");
}

}
}
}
}
}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__40027__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"new","new",-2085437848),(function (p__40931){
var map__40932 = p__40931;
var map__40932__$1 = (((((!((map__40932 == null))))?(((((map__40932.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40932.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40932):map__40932);
var ctor = cljs.core.get.call(null,map__40932__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var args = cljs.core.get.call(null,map__40932__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__40932__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__40027__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__40027__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"(new ",ctor,"(",cljs.compiler.comma_sep.call(null,args),"))");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__40027__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set!","set!",-1389817006),(function (p__40934){
var map__40935 = p__40934;
var map__40935__$1 = (((((!((map__40935 == null))))?(((((map__40935.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40935.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40935):map__40935);
var target = cljs.core.get.call(null,map__40935__$1,new cljs.core.Keyword(null,"target","target",253001721));
var val = cljs.core.get.call(null,map__40935__$1,new cljs.core.Keyword(null,"val","val",128701612));
var env = cljs.core.get.call(null,map__40935__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__40027__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__40027__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"(",target," = ",val,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__40027__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.emit_global_export = (function cljs$compiler$emit_global_export(ns_name,global_exports,lib){
return cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_global_export.call(null,lib)," = goog.global",cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,(function (prop){
return ["[\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(prop),"\"]"].join('');
}),clojure.string.split.call(null,cljs.core.name.call(null,(function (){var or__4126__auto__ = cljs.core.get.call(null,global_exports,cljs.core.symbol.call(null,lib));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get.call(null,global_exports,cljs.core.name.call(null,lib));
}
})()),/\./))),";");
});
cljs.compiler.load_libs = (function cljs$compiler$load_libs(libs,seen,reloads,deps,ns_name){
var map__40937 = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
var map__40937__$1 = (((((!((map__40937 == null))))?(((((map__40937.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40937.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40937):map__40937);
var options = cljs.core.get.call(null,map__40937__$1,new cljs.core.Keyword(null,"options","options",99638489));
var js_dependency_index = cljs.core.get.call(null,map__40937__$1,new cljs.core.Keyword(null,"js-dependency-index","js-dependency-index",-1887042131));
var map__40938 = options;
var map__40938__$1 = (((((!((map__40938 == null))))?(((((map__40938.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40938.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40938):map__40938);
var target = cljs.core.get.call(null,map__40938__$1,new cljs.core.Keyword(null,"target","target",253001721));
var nodejs_rt = cljs.core.get.call(null,map__40938__$1,new cljs.core.Keyword(null,"nodejs-rt","nodejs-rt",-512437071));
var optimizations = cljs.core.get.call(null,map__40938__$1,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854));
var loaded_libs = cljs.compiler.munge.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null));
var loaded_libs_temp = cljs.compiler.munge.call(null,cljs.core.gensym.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null)));
var vec__40939 = (function (){var libs__$1 = cljs.core.remove.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,seen)),cljs.core.filter.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,libs)),deps));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nodejs","nodejs",321212524),target)){
var map__40944 = cljs.core.group_by.call(null,cljs.analyzer.node_module_dep_QMARK_,libs__$1);
var map__40944__$1 = (((((!((map__40944 == null))))?(((((map__40944.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40944.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40944):map__40944);
var node_libs = cljs.core.get.call(null,map__40944__$1,true);
var libs_to_load = cljs.core.get.call(null,map__40944__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_libs,libs_to_load], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,libs__$1], null);
}
})();
var node_libs = cljs.core.nth.call(null,vec__40939,(0),null);
var libs_to_load = cljs.core.nth.call(null,vec__40939,(1),null);
var global_exports_libs = cljs.core.filter.call(null,cljs.analyzer.dep_has_global_exports_QMARK_,libs_to_load);
if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs)))){
cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs_temp," = ",loaded_libs," || cljs.core.set([\"cljs.core\"]);");

cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs," = cljs.core.set([\"cljs.core\"]);");
} else {
}

var seq__40946_40966 = cljs.core.seq.call(null,libs_to_load);
var chunk__40947_40967 = null;
var count__40948_40968 = (0);
var i__40949_40969 = (0);
while(true){
if((i__40949_40969 < count__40948_40968)){
var lib_40970 = cljs.core._nth.call(null,chunk__40947_40967,i__40949_40969);
if(((cljs.analyzer.foreign_dep_QMARK_.call(null,lib_40970)) && ((!(cljs.core.keyword_identical_QMARK_.call(null,optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_40970),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_40970),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_40970),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_40970),"', 'reload-all');");
} else {
if(cljs.core._EQ_.call(null,lib_40970,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_40970),"');");
}

}
}
}


var G__40971 = seq__40946_40966;
var G__40972 = chunk__40947_40967;
var G__40973 = count__40948_40968;
var G__40974 = (i__40949_40969 + (1));
seq__40946_40966 = G__40971;
chunk__40947_40967 = G__40972;
count__40948_40968 = G__40973;
i__40949_40969 = G__40974;
continue;
} else {
var temp__5735__auto___40975 = cljs.core.seq.call(null,seq__40946_40966);
if(temp__5735__auto___40975){
var seq__40946_40976__$1 = temp__5735__auto___40975;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40946_40976__$1)){
var c__4556__auto___40977 = cljs.core.chunk_first.call(null,seq__40946_40976__$1);
var G__40978 = cljs.core.chunk_rest.call(null,seq__40946_40976__$1);
var G__40979 = c__4556__auto___40977;
var G__40980 = cljs.core.count.call(null,c__4556__auto___40977);
var G__40981 = (0);
seq__40946_40966 = G__40978;
chunk__40947_40967 = G__40979;
count__40948_40968 = G__40980;
i__40949_40969 = G__40981;
continue;
} else {
var lib_40982 = cljs.core.first.call(null,seq__40946_40976__$1);
if(((cljs.analyzer.foreign_dep_QMARK_.call(null,lib_40982)) && ((!(cljs.core.keyword_identical_QMARK_.call(null,optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_40982),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_40982),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_40982),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_40982),"', 'reload-all');");
} else {
if(cljs.core._EQ_.call(null,lib_40982,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_40982),"');");
}

}
}
}


var G__40983 = cljs.core.next.call(null,seq__40946_40976__$1);
var G__40984 = null;
var G__40985 = (0);
var G__40986 = (0);
seq__40946_40966 = G__40983;
chunk__40947_40967 = G__40984;
count__40948_40968 = G__40985;
i__40949_40969 = G__40986;
continue;
}
} else {
}
}
break;
}

var seq__40950_40987 = cljs.core.seq.call(null,node_libs);
var chunk__40951_40988 = null;
var count__40952_40989 = (0);
var i__40953_40990 = (0);
while(true){
if((i__40953_40990 < count__40952_40989)){
var lib_40991 = cljs.core._nth.call(null,chunk__40951_40988,i__40953_40990);
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_node_lib.call(null,lib_40991)," = require('",lib_40991,"');");


var G__40992 = seq__40950_40987;
var G__40993 = chunk__40951_40988;
var G__40994 = count__40952_40989;
var G__40995 = (i__40953_40990 + (1));
seq__40950_40987 = G__40992;
chunk__40951_40988 = G__40993;
count__40952_40989 = G__40994;
i__40953_40990 = G__40995;
continue;
} else {
var temp__5735__auto___40996 = cljs.core.seq.call(null,seq__40950_40987);
if(temp__5735__auto___40996){
var seq__40950_40997__$1 = temp__5735__auto___40996;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40950_40997__$1)){
var c__4556__auto___40998 = cljs.core.chunk_first.call(null,seq__40950_40997__$1);
var G__40999 = cljs.core.chunk_rest.call(null,seq__40950_40997__$1);
var G__41000 = c__4556__auto___40998;
var G__41001 = cljs.core.count.call(null,c__4556__auto___40998);
var G__41002 = (0);
seq__40950_40987 = G__40999;
chunk__40951_40988 = G__41000;
count__40952_40989 = G__41001;
i__40953_40990 = G__41002;
continue;
} else {
var lib_41003 = cljs.core.first.call(null,seq__40950_40997__$1);
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_node_lib.call(null,lib_41003)," = require('",lib_41003,"');");


var G__41004 = cljs.core.next.call(null,seq__40950_40997__$1);
var G__41005 = null;
var G__41006 = (0);
var G__41007 = (0);
seq__40950_40987 = G__41004;
chunk__40951_40988 = G__41005;
count__40952_40989 = G__41006;
i__40953_40990 = G__41007;
continue;
}
} else {
}
}
break;
}

var seq__40954_41008 = cljs.core.seq.call(null,global_exports_libs);
var chunk__40955_41009 = null;
var count__40956_41010 = (0);
var i__40957_41011 = (0);
while(true){
if((i__40957_41011 < count__40956_41010)){
var lib_41012 = cljs.core._nth.call(null,chunk__40955_41009,i__40957_41011);
var map__40962_41013 = cljs.core.get.call(null,js_dependency_index,cljs.core.name.call(null,lib_41012));
var map__40962_41014__$1 = (((((!((map__40962_41013 == null))))?(((((map__40962_41013.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40962_41013.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40962_41013):map__40962_41013);
var global_exports_41015 = cljs.core.get.call(null,map__40962_41014__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export.call(null,ns_name,global_exports_41015,lib_41012);


var G__41016 = seq__40954_41008;
var G__41017 = chunk__40955_41009;
var G__41018 = count__40956_41010;
var G__41019 = (i__40957_41011 + (1));
seq__40954_41008 = G__41016;
chunk__40955_41009 = G__41017;
count__40956_41010 = G__41018;
i__40957_41011 = G__41019;
continue;
} else {
var temp__5735__auto___41020 = cljs.core.seq.call(null,seq__40954_41008);
if(temp__5735__auto___41020){
var seq__40954_41021__$1 = temp__5735__auto___41020;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40954_41021__$1)){
var c__4556__auto___41022 = cljs.core.chunk_first.call(null,seq__40954_41021__$1);
var G__41023 = cljs.core.chunk_rest.call(null,seq__40954_41021__$1);
var G__41024 = c__4556__auto___41022;
var G__41025 = cljs.core.count.call(null,c__4556__auto___41022);
var G__41026 = (0);
seq__40954_41008 = G__41023;
chunk__40955_41009 = G__41024;
count__40956_41010 = G__41025;
i__40957_41011 = G__41026;
continue;
} else {
var lib_41027 = cljs.core.first.call(null,seq__40954_41021__$1);
var map__40964_41028 = cljs.core.get.call(null,js_dependency_index,cljs.core.name.call(null,lib_41027));
var map__40964_41029__$1 = (((((!((map__40964_41028 == null))))?(((((map__40964_41028.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40964_41028.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40964_41028):map__40964_41028);
var global_exports_41030 = cljs.core.get.call(null,map__40964_41029__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export.call(null,ns_name,global_exports_41030,lib_41027);


var G__41031 = cljs.core.next.call(null,seq__40954_41021__$1);
var G__41032 = null;
var G__41033 = (0);
var G__41034 = (0);
seq__40954_41008 = G__41031;
chunk__40955_41009 = G__41032;
count__40956_41010 = G__41033;
i__40957_41011 = G__41034;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs)))){
return cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs," = cljs.core.into(",loaded_libs_temp,", ",loaded_libs,");");
} else {
return null;
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns*","ns*",200417856),(function (p__41035){
var map__41036 = p__41035;
var map__41036__$1 = (((((!((map__41036 == null))))?(((((map__41036.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41036.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41036):map__41036);
var name = cljs.core.get.call(null,map__41036__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__41036__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__41036__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__41036__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__41036__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__41036__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.call(null,map__41036__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
cljs.compiler.load_libs.call(null,requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

cljs.compiler.load_libs.call(null,uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-env","repl-env",-1976503928).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.call(null,"'nil';");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns","ns",441598760),(function (p__41038){
var map__41039 = p__41038;
var map__41039__$1 = (((((!((map__41039 == null))))?(((((map__41039.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41039.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41039):map__41039);
var name = cljs.core.get.call(null,map__41039__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__41039__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__41039__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__41039__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__41039__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__41039__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.call(null,map__41039__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
cljs.compiler.emitln.call(null,"goog.provide('",cljs.compiler.munge.call(null,name),"');");

if(cljs.core._EQ_.call(null,name,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null))){
} else {
cljs.compiler.emitln.call(null,"goog.require('cljs.core');");

if(cljs.core.truth_(new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_))))){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,cljs.analyzer.constants_ns_sym),"');");
} else {
}
}

cljs.compiler.load_libs.call(null,requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

return cljs.compiler.load_libs.call(null,uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"deftype","deftype",340294561),(function (p__41041){
var map__41042 = p__41041;
var map__41042__$1 = (((((!((map__41042 == null))))?(((((map__41042.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41042.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41042):map__41042);
var t = cljs.core.get.call(null,map__41042__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__41042__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__41042__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__41042__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__41042__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.map.call(null,cljs.compiler.munge,fields);
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__41044_41068 = cljs.core.seq.call(null,protocols);
var chunk__41045_41069 = null;
var count__41046_41070 = (0);
var i__41047_41071 = (0);
while(true){
if((i__41047_41071 < count__41046_41070)){
var protocol_41072 = cljs.core._nth.call(null,chunk__41045_41069,i__41047_41071);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_41072)),"}");


var G__41073 = seq__41044_41068;
var G__41074 = chunk__41045_41069;
var G__41075 = count__41046_41070;
var G__41076 = (i__41047_41071 + (1));
seq__41044_41068 = G__41073;
chunk__41045_41069 = G__41074;
count__41046_41070 = G__41075;
i__41047_41071 = G__41076;
continue;
} else {
var temp__5735__auto___41077 = cljs.core.seq.call(null,seq__41044_41068);
if(temp__5735__auto___41077){
var seq__41044_41078__$1 = temp__5735__auto___41077;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41044_41078__$1)){
var c__4556__auto___41079 = cljs.core.chunk_first.call(null,seq__41044_41078__$1);
var G__41080 = cljs.core.chunk_rest.call(null,seq__41044_41078__$1);
var G__41081 = c__4556__auto___41079;
var G__41082 = cljs.core.count.call(null,c__4556__auto___41079);
var G__41083 = (0);
seq__41044_41068 = G__41080;
chunk__41045_41069 = G__41081;
count__41046_41070 = G__41082;
i__41047_41071 = G__41083;
continue;
} else {
var protocol_41084 = cljs.core.first.call(null,seq__41044_41078__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_41084)),"}");


var G__41085 = cljs.core.next.call(null,seq__41044_41078__$1);
var G__41086 = null;
var G__41087 = (0);
var G__41088 = (0);
seq__41044_41068 = G__41085;
chunk__41045_41069 = G__41086;
count__41046_41070 = G__41087;
i__41047_41071 = G__41088;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__41048_41089 = cljs.core.seq.call(null,fields__$1);
var chunk__41049_41090 = null;
var count__41050_41091 = (0);
var i__41051_41092 = (0);
while(true){
if((i__41051_41092 < count__41050_41091)){
var fld_41093 = cljs.core._nth.call(null,chunk__41049_41090,i__41051_41092);
cljs.compiler.emitln.call(null,"this.",fld_41093," = ",fld_41093,";");


var G__41094 = seq__41048_41089;
var G__41095 = chunk__41049_41090;
var G__41096 = count__41050_41091;
var G__41097 = (i__41051_41092 + (1));
seq__41048_41089 = G__41094;
chunk__41049_41090 = G__41095;
count__41050_41091 = G__41096;
i__41051_41092 = G__41097;
continue;
} else {
var temp__5735__auto___41098 = cljs.core.seq.call(null,seq__41048_41089);
if(temp__5735__auto___41098){
var seq__41048_41099__$1 = temp__5735__auto___41098;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41048_41099__$1)){
var c__4556__auto___41100 = cljs.core.chunk_first.call(null,seq__41048_41099__$1);
var G__41101 = cljs.core.chunk_rest.call(null,seq__41048_41099__$1);
var G__41102 = c__4556__auto___41100;
var G__41103 = cljs.core.count.call(null,c__4556__auto___41100);
var G__41104 = (0);
seq__41048_41089 = G__41101;
chunk__41049_41090 = G__41102;
count__41050_41091 = G__41103;
i__41051_41092 = G__41104;
continue;
} else {
var fld_41105 = cljs.core.first.call(null,seq__41048_41099__$1);
cljs.compiler.emitln.call(null,"this.",fld_41105," = ",fld_41105,";");


var G__41106 = cljs.core.next.call(null,seq__41048_41099__$1);
var G__41107 = null;
var G__41108 = (0);
var G__41109 = (0);
seq__41048_41089 = G__41106;
chunk__41049_41090 = G__41107;
count__41050_41091 = G__41108;
i__41051_41092 = G__41109;
continue;
}
} else {
}
}
break;
}

var seq__41052_41110 = cljs.core.seq.call(null,pmasks);
var chunk__41053_41111 = null;
var count__41054_41112 = (0);
var i__41055_41113 = (0);
while(true){
if((i__41055_41113 < count__41054_41112)){
var vec__41062_41114 = cljs.core._nth.call(null,chunk__41053_41111,i__41055_41113);
var pno_41115 = cljs.core.nth.call(null,vec__41062_41114,(0),null);
var pmask_41116 = cljs.core.nth.call(null,vec__41062_41114,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_41115,"$ = ",pmask_41116,";");


var G__41117 = seq__41052_41110;
var G__41118 = chunk__41053_41111;
var G__41119 = count__41054_41112;
var G__41120 = (i__41055_41113 + (1));
seq__41052_41110 = G__41117;
chunk__41053_41111 = G__41118;
count__41054_41112 = G__41119;
i__41055_41113 = G__41120;
continue;
} else {
var temp__5735__auto___41121 = cljs.core.seq.call(null,seq__41052_41110);
if(temp__5735__auto___41121){
var seq__41052_41122__$1 = temp__5735__auto___41121;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41052_41122__$1)){
var c__4556__auto___41123 = cljs.core.chunk_first.call(null,seq__41052_41122__$1);
var G__41124 = cljs.core.chunk_rest.call(null,seq__41052_41122__$1);
var G__41125 = c__4556__auto___41123;
var G__41126 = cljs.core.count.call(null,c__4556__auto___41123);
var G__41127 = (0);
seq__41052_41110 = G__41124;
chunk__41053_41111 = G__41125;
count__41054_41112 = G__41126;
i__41055_41113 = G__41127;
continue;
} else {
var vec__41065_41128 = cljs.core.first.call(null,seq__41052_41122__$1);
var pno_41129 = cljs.core.nth.call(null,vec__41065_41128,(0),null);
var pmask_41130 = cljs.core.nth.call(null,vec__41065_41128,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_41129,"$ = ",pmask_41130,";");


var G__41131 = cljs.core.next.call(null,seq__41052_41122__$1);
var G__41132 = null;
var G__41133 = (0);
var G__41134 = (0);
seq__41052_41110 = G__41131;
chunk__41053_41111 = G__41132;
count__41054_41112 = G__41133;
i__41055_41113 = G__41134;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"});");

return cljs.compiler.emit.call(null,body);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"defrecord","defrecord",-1367493418),(function (p__41135){
var map__41136 = p__41135;
var map__41136__$1 = (((((!((map__41136 == null))))?(((((map__41136.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41136.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41136):map__41136);
var t = cljs.core.get.call(null,map__41136__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__41136__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__41136__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__41136__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__41136__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.concat.call(null,cljs.core.map.call(null,cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)], null));
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__41138_41162 = cljs.core.seq.call(null,protocols);
var chunk__41139_41163 = null;
var count__41140_41164 = (0);
var i__41141_41165 = (0);
while(true){
if((i__41141_41165 < count__41140_41164)){
var protocol_41166 = cljs.core._nth.call(null,chunk__41139_41163,i__41141_41165);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_41166)),"}");


var G__41167 = seq__41138_41162;
var G__41168 = chunk__41139_41163;
var G__41169 = count__41140_41164;
var G__41170 = (i__41141_41165 + (1));
seq__41138_41162 = G__41167;
chunk__41139_41163 = G__41168;
count__41140_41164 = G__41169;
i__41141_41165 = G__41170;
continue;
} else {
var temp__5735__auto___41171 = cljs.core.seq.call(null,seq__41138_41162);
if(temp__5735__auto___41171){
var seq__41138_41172__$1 = temp__5735__auto___41171;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41138_41172__$1)){
var c__4556__auto___41173 = cljs.core.chunk_first.call(null,seq__41138_41172__$1);
var G__41174 = cljs.core.chunk_rest.call(null,seq__41138_41172__$1);
var G__41175 = c__4556__auto___41173;
var G__41176 = cljs.core.count.call(null,c__4556__auto___41173);
var G__41177 = (0);
seq__41138_41162 = G__41174;
chunk__41139_41163 = G__41175;
count__41140_41164 = G__41176;
i__41141_41165 = G__41177;
continue;
} else {
var protocol_41178 = cljs.core.first.call(null,seq__41138_41172__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_41178)),"}");


var G__41179 = cljs.core.next.call(null,seq__41138_41172__$1);
var G__41180 = null;
var G__41181 = (0);
var G__41182 = (0);
seq__41138_41162 = G__41179;
chunk__41139_41163 = G__41180;
count__41140_41164 = G__41181;
i__41141_41165 = G__41182;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__41142_41183 = cljs.core.seq.call(null,fields__$1);
var chunk__41143_41184 = null;
var count__41144_41185 = (0);
var i__41145_41186 = (0);
while(true){
if((i__41145_41186 < count__41144_41185)){
var fld_41187 = cljs.core._nth.call(null,chunk__41143_41184,i__41145_41186);
cljs.compiler.emitln.call(null,"this.",fld_41187," = ",fld_41187,";");


var G__41188 = seq__41142_41183;
var G__41189 = chunk__41143_41184;
var G__41190 = count__41144_41185;
var G__41191 = (i__41145_41186 + (1));
seq__41142_41183 = G__41188;
chunk__41143_41184 = G__41189;
count__41144_41185 = G__41190;
i__41145_41186 = G__41191;
continue;
} else {
var temp__5735__auto___41192 = cljs.core.seq.call(null,seq__41142_41183);
if(temp__5735__auto___41192){
var seq__41142_41193__$1 = temp__5735__auto___41192;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41142_41193__$1)){
var c__4556__auto___41194 = cljs.core.chunk_first.call(null,seq__41142_41193__$1);
var G__41195 = cljs.core.chunk_rest.call(null,seq__41142_41193__$1);
var G__41196 = c__4556__auto___41194;
var G__41197 = cljs.core.count.call(null,c__4556__auto___41194);
var G__41198 = (0);
seq__41142_41183 = G__41195;
chunk__41143_41184 = G__41196;
count__41144_41185 = G__41197;
i__41145_41186 = G__41198;
continue;
} else {
var fld_41199 = cljs.core.first.call(null,seq__41142_41193__$1);
cljs.compiler.emitln.call(null,"this.",fld_41199," = ",fld_41199,";");


var G__41200 = cljs.core.next.call(null,seq__41142_41193__$1);
var G__41201 = null;
var G__41202 = (0);
var G__41203 = (0);
seq__41142_41183 = G__41200;
chunk__41143_41184 = G__41201;
count__41144_41185 = G__41202;
i__41145_41186 = G__41203;
continue;
}
} else {
}
}
break;
}

var seq__41146_41204 = cljs.core.seq.call(null,pmasks);
var chunk__41147_41205 = null;
var count__41148_41206 = (0);
var i__41149_41207 = (0);
while(true){
if((i__41149_41207 < count__41148_41206)){
var vec__41156_41208 = cljs.core._nth.call(null,chunk__41147_41205,i__41149_41207);
var pno_41209 = cljs.core.nth.call(null,vec__41156_41208,(0),null);
var pmask_41210 = cljs.core.nth.call(null,vec__41156_41208,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_41209,"$ = ",pmask_41210,";");


var G__41211 = seq__41146_41204;
var G__41212 = chunk__41147_41205;
var G__41213 = count__41148_41206;
var G__41214 = (i__41149_41207 + (1));
seq__41146_41204 = G__41211;
chunk__41147_41205 = G__41212;
count__41148_41206 = G__41213;
i__41149_41207 = G__41214;
continue;
} else {
var temp__5735__auto___41215 = cljs.core.seq.call(null,seq__41146_41204);
if(temp__5735__auto___41215){
var seq__41146_41216__$1 = temp__5735__auto___41215;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41146_41216__$1)){
var c__4556__auto___41217 = cljs.core.chunk_first.call(null,seq__41146_41216__$1);
var G__41218 = cljs.core.chunk_rest.call(null,seq__41146_41216__$1);
var G__41219 = c__4556__auto___41217;
var G__41220 = cljs.core.count.call(null,c__4556__auto___41217);
var G__41221 = (0);
seq__41146_41204 = G__41218;
chunk__41147_41205 = G__41219;
count__41148_41206 = G__41220;
i__41149_41207 = G__41221;
continue;
} else {
var vec__41159_41222 = cljs.core.first.call(null,seq__41146_41216__$1);
var pno_41223 = cljs.core.nth.call(null,vec__41159_41222,(0),null);
var pmask_41224 = cljs.core.nth.call(null,vec__41159_41222,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_41223,"$ = ",pmask_41224,";");


var G__41225 = cljs.core.next.call(null,seq__41146_41216__$1);
var G__41226 = null;
var G__41227 = (0);
var G__41228 = (0);
seq__41146_41204 = G__41225;
chunk__41147_41205 = G__41226;
count__41148_41206 = G__41227;
i__41149_41207 = G__41228;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"});");

return cljs.compiler.emit.call(null,body);
}));
cljs.compiler.emit_dot = (function cljs$compiler$emit_dot(p__41229){
var map__41230 = p__41229;
var map__41230__$1 = (((((!((map__41230 == null))))?(((((map__41230.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41230.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41230):map__41230);
var target = cljs.core.get.call(null,map__41230__$1,new cljs.core.Keyword(null,"target","target",253001721));
var field = cljs.core.get.call(null,map__41230__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var method = cljs.core.get.call(null,map__41230__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.call(null,map__41230__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__41230__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__40027__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__40027__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(field)){
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,field,cljs.core.PersistentHashSet.EMPTY));
} else {
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,method,cljs.core.PersistentHashSet.EMPTY),"(",cljs.compiler.comma_sep.call(null,args),")");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__40027__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"host-field","host-field",-72662140),(function (ast){
return cljs.compiler.emit_dot.call(null,ast);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"host-call","host-call",1059629755),(function (ast){
return cljs.compiler.emit_dot.call(null,ast);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js","js",1768080579),(function (p__41232){
var map__41233 = p__41232;
var map__41233__$1 = (((((!((map__41233 == null))))?(((((map__41233.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41233.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41233):map__41233);
var op = cljs.core.get.call(null,map__41233__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var env = cljs.core.get.call(null,map__41233__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var code = cljs.core.get.call(null,map__41233__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var segs = cljs.core.get.call(null,map__41233__$1,new cljs.core.Keyword(null,"segs","segs",-1940299576));
var args = cljs.core.get.call(null,map__41233__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_((function (){var and__4115__auto__ = code;
if(cljs.core.truth_(and__4115__auto__)){
return goog.string.startsWith(clojure.string.trim.call(null,code),"/*");
} else {
return and__4115__auto__;
}
})())){
return cljs.compiler.emits.call(null,code);
} else {
var env__40027__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__40027__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(code)){
cljs.compiler.emits.call(null,code);
} else {
cljs.compiler.emits.call(null,cljs.core.interleave.call(null,cljs.core.concat.call(null,segs,cljs.core.repeat.call(null,null)),cljs.core.concat.call(null,args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null))));
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__40027__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.emit_constants_table = (function cljs$compiler$emit_constants_table(table){
cljs.compiler.emitln.call(null,"goog.provide('",cljs.compiler.munge.call(null,cljs.analyzer.constants_ns_sym),"');");

cljs.compiler.emitln.call(null,"goog.require('cljs.core');");

var seq__41239 = cljs.core.seq.call(null,table);
var chunk__41240 = null;
var count__41241 = (0);
var i__41242 = (0);
while(true){
if((i__41242 < count__41241)){
var vec__41249 = cljs.core._nth.call(null,chunk__41240,i__41242);
var sym = cljs.core.nth.call(null,vec__41249,(0),null);
var value = cljs.core.nth.call(null,vec__41249,(1),null);
var ns_41255 = cljs.core.namespace.call(null,sym);
var name_41256 = cljs.core.name.call(null,sym);
cljs.compiler.emits.call(null,"cljs.core.",value," = ");

if((sym instanceof cljs.core.Keyword)){
cljs.compiler.emits_keyword.call(null,sym);
} else {
if((sym instanceof cljs.core.Symbol)){
cljs.compiler.emits_symbol.call(null,sym);
} else {
throw cljs.core.ex_info.call(null,["Cannot emit constant for type ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type.call(null,sym))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"invalid-constant-type","invalid-constant-type",1294847471),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),new cljs.core.Keyword(null,"compilation","compilation",-1328774561)], null));

}
}

cljs.compiler.emits.call(null,";\n");


var G__41257 = seq__41239;
var G__41258 = chunk__41240;
var G__41259 = count__41241;
var G__41260 = (i__41242 + (1));
seq__41239 = G__41257;
chunk__41240 = G__41258;
count__41241 = G__41259;
i__41242 = G__41260;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__41239);
if(temp__5735__auto__){
var seq__41239__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41239__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__41239__$1);
var G__41261 = cljs.core.chunk_rest.call(null,seq__41239__$1);
var G__41262 = c__4556__auto__;
var G__41263 = cljs.core.count.call(null,c__4556__auto__);
var G__41264 = (0);
seq__41239 = G__41261;
chunk__41240 = G__41262;
count__41241 = G__41263;
i__41242 = G__41264;
continue;
} else {
var vec__41252 = cljs.core.first.call(null,seq__41239__$1);
var sym = cljs.core.nth.call(null,vec__41252,(0),null);
var value = cljs.core.nth.call(null,vec__41252,(1),null);
var ns_41265 = cljs.core.namespace.call(null,sym);
var name_41266 = cljs.core.name.call(null,sym);
cljs.compiler.emits.call(null,"cljs.core.",value," = ");

if((sym instanceof cljs.core.Keyword)){
cljs.compiler.emits_keyword.call(null,sym);
} else {
if((sym instanceof cljs.core.Symbol)){
cljs.compiler.emits_symbol.call(null,sym);
} else {
throw cljs.core.ex_info.call(null,["Cannot emit constant for type ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type.call(null,sym))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"invalid-constant-type","invalid-constant-type",1294847471),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),new cljs.core.Keyword(null,"compilation","compilation",-1328774561)], null));

}
}

cljs.compiler.emits.call(null,";\n");


var G__41267 = cljs.core.next.call(null,seq__41239__$1);
var G__41268 = null;
var G__41269 = (0);
var G__41270 = (0);
seq__41239 = G__41267;
chunk__41240 = G__41268;
count__41241 = G__41269;
i__41242 = G__41270;
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
var G__41272 = arguments.length;
switch (G__41272) {
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
return cljs.compiler.emit_externs.call(null,cljs.core.PersistentVector.EMPTY,externs,cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY),(cljs.core.truth_(cljs.env._STAR_compiler_STAR_)?cljs.analyzer.get_externs.call(null):null));
}));

(cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4 = (function (prefix,externs,top_level,known_externs){
var ks = cljs.core.seq.call(null,cljs.core.keys.call(null,externs));
while(true){
if(ks){
var k_41277 = cljs.core.first.call(null,ks);
var vec__41273_41278 = cljs.core.conj.call(null,prefix,k_41277);
var top_41279 = cljs.core.nth.call(null,vec__41273_41278,(0),null);
var prefix_SINGLEQUOTE__41280 = vec__41273_41278;
if(((cljs.core.not_EQ_.call(null,new cljs.core.Symbol(null,"prototype","prototype",519166522,null),k_41277)) && ((cljs.core.get_in.call(null,known_externs,prefix_SINGLEQUOTE__41280) == null)))){
if((!(((cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,top_level),top_41279)) || (cljs.core.contains_QMARK_.call(null,known_externs,top_41279)))))){
cljs.compiler.emitln.call(null,"var ",clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.compiler.munge,prefix_SINGLEQUOTE__41280)),";");

cljs.core.swap_BANG_.call(null,top_level,cljs.core.conj,top_41279);
} else {
cljs.compiler.emitln.call(null,clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.compiler.munge,prefix_SINGLEQUOTE__41280)),";");
}
} else {
}

var m_41281 = cljs.core.get.call(null,externs,k_41277);
if(cljs.core.empty_QMARK_.call(null,m_41281)){
} else {
cljs.compiler.emit_externs.call(null,prefix_SINGLEQUOTE__41280,m_41281,top_level,known_externs);
}

var G__41282 = cljs.core.next.call(null,ks);
ks = G__41282;
continue;
} else {
return null;
}
break;
}
}));

(cljs.compiler.emit_externs.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=compiler.js.map?rel=1593792535335
