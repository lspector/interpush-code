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
var map__27792 = s;
var map__27792__$1 = (((((!((map__27792 == null))))?(((((map__27792.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27792.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27792):map__27792);
var name = cljs.core.get.call(null,map__27792__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__27792__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var d = (0);
var G__27795 = info;
var map__27796 = G__27795;
var map__27796__$1 = (((((!((map__27796 == null))))?(((((map__27796.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27796.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27796):map__27796);
var shadow = cljs.core.get.call(null,map__27796__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
var d__$1 = d;
var G__27795__$1 = G__27795;
while(true){
var d__$2 = d__$1;
var map__27800 = G__27795__$1;
var map__27800__$1 = (((((!((map__27800 == null))))?(((((map__27800.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27800.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27800):map__27800);
var shadow__$1 = cljs.core.get.call(null,map__27800__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
if(cljs.core.truth_(shadow__$1)){
var G__27802 = (d__$2 + (1));
var G__27803 = shadow__$1;
d__$1 = G__27802;
G__27795__$1 = G__27803;
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
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__27804){
var map__27805 = p__27804;
var map__27805__$1 = (((((!((map__27805 == null))))?(((((map__27805.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27805.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27805):map__27805);
var name_var = map__27805__$1;
var name = cljs.core.get.call(null,map__27805__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__27805__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var name__$1 = clojure.string.replace.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"..","_DOT__DOT_");
var map__27807 = info;
var map__27807__$1 = (((((!((map__27807 == null))))?(((((map__27807.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27807.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27807):map__27807);
var ns = cljs.core.get.call(null,map__27807__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var fn_scope = cljs.core.get.call(null,map__27807__$1,new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859));
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
var G__27810 = arguments.length;
switch (G__27810) {
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
var G__27812 = cp;
switch (G__27812) {
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
var seq__27814_27818 = cljs.core.seq.call(null,s);
var chunk__27815_27819 = null;
var count__27816_27820 = (0);
var i__27817_27821 = (0);
while(true){
if((i__27817_27821 < count__27816_27820)){
var c_27822 = cljs.core._nth.call(null,chunk__27815_27819,i__27817_27821);
sb.append(cljs.compiler.escape_char.call(null,c_27822));


var G__27823 = seq__27814_27818;
var G__27824 = chunk__27815_27819;
var G__27825 = count__27816_27820;
var G__27826 = (i__27817_27821 + (1));
seq__27814_27818 = G__27823;
chunk__27815_27819 = G__27824;
count__27816_27820 = G__27825;
i__27817_27821 = G__27826;
continue;
} else {
var temp__5735__auto___27827 = cljs.core.seq.call(null,seq__27814_27818);
if(temp__5735__auto___27827){
var seq__27814_27828__$1 = temp__5735__auto___27827;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27814_27828__$1)){
var c__4556__auto___27829 = cljs.core.chunk_first.call(null,seq__27814_27828__$1);
var G__27830 = cljs.core.chunk_rest.call(null,seq__27814_27828__$1);
var G__27831 = c__4556__auto___27829;
var G__27832 = cljs.core.count.call(null,c__4556__auto___27829);
var G__27833 = (0);
seq__27814_27818 = G__27830;
chunk__27815_27819 = G__27831;
count__27816_27820 = G__27832;
i__27817_27821 = G__27833;
continue;
} else {
var c_27834 = cljs.core.first.call(null,seq__27814_27828__$1);
sb.append(cljs.compiler.escape_char.call(null,c_27834));


var G__27835 = cljs.core.next.call(null,seq__27814_27828__$1);
var G__27836 = null;
var G__27837 = (0);
var G__27838 = (0);
seq__27814_27818 = G__27835;
chunk__27815_27819 = G__27836;
count__27816_27820 = G__27837;
i__27817_27821 = G__27838;
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
var map__27839_27844 = ast;
var map__27839_27845__$1 = (((((!((map__27839_27844 == null))))?(((((map__27839_27844.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27839_27844.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27839_27844):map__27839_27844);
var env_27846 = cljs.core.get.call(null,map__27839_27845__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env_27846))){
var map__27841_27847 = env_27846;
var map__27841_27848__$1 = (((((!((map__27841_27847 == null))))?(((((map__27841_27847.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27841_27847.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27841_27847):map__27841_27847);
var line_27849 = cljs.core.get.call(null,map__27841_27848__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_27850 = cljs.core.get.call(null,map__27841_27848__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,(function (m){
var minfo = (function (){var G__27843 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gcol","gcol",309250807),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"gline","gline",-1086242431),new cljs.core.Keyword(null,"gen-line","gen-line",589592125).cljs$core$IFn$_invoke$arity$1(m)], null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"binding","binding",539932593),null,new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),null,new cljs.core.Keyword(null,"local","local",-1497766724),null], null), null).call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast)))){
return cljs.core.assoc.call(null,G__27843,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(ast))));
} else {
return G__27843;
}
})();
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-map","source-map",1706252311),(line_27849 - (1))], null),cljs.core.fnil.call(null,(function (line__$1){
return cljs.core.update_in.call(null,line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_27850)?(column_27850 - (1)):(0))], null),cljs.core.fnil.call(null,(function (column__$1){
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
var G__27859 = arguments.length;
switch (G__27859) {
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
var len__4736__auto___27866 = arguments.length;
var i__4737__auto___27867 = (0);
while(true){
if((i__4737__auto___27867 < len__4736__auto___27866)){
args_arr__4757__auto__.push((arguments[i__4737__auto___27867]));

var G__27868 = (i__4737__auto___27867 + (1));
i__4737__auto___27867 = G__27868;
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
var s_27869 = (function (){var G__27860 = a;
if((!(typeof a === 'string'))){
return G__27860.toString();
} else {
return G__27860;
}
})();
var temp__5739__auto___27870 = cljs.compiler._STAR_source_map_data_STAR_;
if((temp__5739__auto___27870 == null)){
} else {
var sm_data_27871 = temp__5739__auto___27870;
cljs.core.swap_BANG_.call(null,sm_data_27871,cljs.core.update,new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(function (p1__27851_SHARP_){
return (p1__27851_SHARP_ + s_27869.length);
}));
}

cljs.core.print.call(null,s_27869);

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

var seq__27861 = cljs.core.seq.call(null,xs);
var chunk__27862 = null;
var count__27863 = (0);
var i__27864 = (0);
while(true){
if((i__27864 < count__27863)){
var x = cljs.core._nth.call(null,chunk__27862,i__27864);
cljs.compiler.emits.call(null,x);


var G__27872 = seq__27861;
var G__27873 = chunk__27862;
var G__27874 = count__27863;
var G__27875 = (i__27864 + (1));
seq__27861 = G__27872;
chunk__27862 = G__27873;
count__27863 = G__27874;
i__27864 = G__27875;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__27861);
if(temp__5735__auto__){
var seq__27861__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27861__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__27861__$1);
var G__27876 = cljs.core.chunk_rest.call(null,seq__27861__$1);
var G__27877 = c__4556__auto__;
var G__27878 = cljs.core.count.call(null,c__4556__auto__);
var G__27879 = (0);
seq__27861 = G__27876;
chunk__27862 = G__27877;
count__27863 = G__27878;
i__27864 = G__27879;
continue;
} else {
var x = cljs.core.first.call(null,seq__27861__$1);
cljs.compiler.emits.call(null,x);


var G__27880 = cljs.core.next.call(null,seq__27861__$1);
var G__27881 = null;
var G__27882 = (0);
var G__27883 = (0);
seq__27861 = G__27880;
chunk__27862 = G__27881;
count__27863 = G__27882;
i__27864 = G__27883;
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
(cljs.compiler.emits.cljs$lang$applyTo = (function (seq27853){
var G__27854 = cljs.core.first.call(null,seq27853);
var seq27853__$1 = cljs.core.next.call(null,seq27853);
var G__27855 = cljs.core.first.call(null,seq27853__$1);
var seq27853__$2 = cljs.core.next.call(null,seq27853__$1);
var G__27856 = cljs.core.first.call(null,seq27853__$2);
var seq27853__$3 = cljs.core.next.call(null,seq27853__$2);
var G__27857 = cljs.core.first.call(null,seq27853__$3);
var seq27853__$4 = cljs.core.next.call(null,seq27853__$3);
var G__27858 = cljs.core.first.call(null,seq27853__$4);
var seq27853__$5 = cljs.core.next.call(null,seq27853__$4);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27854,G__27855,G__27856,G__27857,G__27858,seq27853__$5);
}));

(cljs.compiler.emits.cljs$lang$maxFixedArity = (5));

cljs.compiler._emitln = (function cljs$compiler$_emitln(){
cljs.core.newline.call(null);

if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,(function (p__27884){
var map__27885 = p__27884;
var map__27885__$1 = (((((!((map__27885 == null))))?(((((map__27885.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27885.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27885):map__27885);
var m = map__27885__$1;
var gen_line = cljs.core.get.call(null,map__27885__$1,new cljs.core.Keyword(null,"gen-line","gen-line",589592125));
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"gen-line","gen-line",589592125),(gen_line + (1)),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(0));
}));
} else {
}

return null;
});
cljs.compiler.emitln = (function cljs$compiler$emitln(var_args){
var G__27894 = arguments.length;
switch (G__27894) {
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
var len__4736__auto___27900 = arguments.length;
var i__4737__auto___27901 = (0);
while(true){
if((i__4737__auto___27901 < len__4736__auto___27900)){
args_arr__4757__auto__.push((arguments[i__4737__auto___27901]));

var G__27902 = (i__4737__auto___27901 + (1));
i__4737__auto___27901 = G__27902;
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

var seq__27895_27903 = cljs.core.seq.call(null,xs);
var chunk__27896_27904 = null;
var count__27897_27905 = (0);
var i__27898_27906 = (0);
while(true){
if((i__27898_27906 < count__27897_27905)){
var x_27907 = cljs.core._nth.call(null,chunk__27896_27904,i__27898_27906);
cljs.compiler.emits.call(null,x_27907);


var G__27908 = seq__27895_27903;
var G__27909 = chunk__27896_27904;
var G__27910 = count__27897_27905;
var G__27911 = (i__27898_27906 + (1));
seq__27895_27903 = G__27908;
chunk__27896_27904 = G__27909;
count__27897_27905 = G__27910;
i__27898_27906 = G__27911;
continue;
} else {
var temp__5735__auto___27912 = cljs.core.seq.call(null,seq__27895_27903);
if(temp__5735__auto___27912){
var seq__27895_27913__$1 = temp__5735__auto___27912;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27895_27913__$1)){
var c__4556__auto___27914 = cljs.core.chunk_first.call(null,seq__27895_27913__$1);
var G__27915 = cljs.core.chunk_rest.call(null,seq__27895_27913__$1);
var G__27916 = c__4556__auto___27914;
var G__27917 = cljs.core.count.call(null,c__4556__auto___27914);
var G__27918 = (0);
seq__27895_27903 = G__27915;
chunk__27896_27904 = G__27916;
count__27897_27905 = G__27917;
i__27898_27906 = G__27918;
continue;
} else {
var x_27919 = cljs.core.first.call(null,seq__27895_27913__$1);
cljs.compiler.emits.call(null,x_27919);


var G__27920 = cljs.core.next.call(null,seq__27895_27913__$1);
var G__27921 = null;
var G__27922 = (0);
var G__27923 = (0);
seq__27895_27903 = G__27920;
chunk__27896_27904 = G__27921;
count__27897_27905 = G__27922;
i__27898_27906 = G__27923;
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
(cljs.compiler.emitln.cljs$lang$applyTo = (function (seq27888){
var G__27889 = cljs.core.first.call(null,seq27888);
var seq27888__$1 = cljs.core.next.call(null,seq27888);
var G__27890 = cljs.core.first.call(null,seq27888__$1);
var seq27888__$2 = cljs.core.next.call(null,seq27888__$1);
var G__27891 = cljs.core.first.call(null,seq27888__$2);
var seq27888__$3 = cljs.core.next.call(null,seq27888__$2);
var G__27892 = cljs.core.first.call(null,seq27888__$3);
var seq27888__$4 = cljs.core.next.call(null,seq27888__$3);
var G__27893 = cljs.core.first.call(null,seq27888__$4);
var seq27888__$5 = cljs.core.next.call(null,seq27888__$4);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27889,G__27890,G__27891,G__27892,G__27893,seq27888__$5);
}));

(cljs.compiler.emitln.cljs$lang$maxFixedArity = (5));

cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__27924_27928 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__27925_27929 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__27926_27930 = true;
var _STAR_print_fn_STAR__temp_val__27927_27931 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__27926_27930);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__27927_27931);

try{cljs.compiler.emit.call(null,expr);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__27925_27929);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__27924_27928);
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
var vec__27932 = cljs.analyzer.record_ns_PLUS_name.call(null,x);
var ns = cljs.core.nth.call(null,vec__27932,(0),null);
var name = cljs.core.nth.call(null,vec__27932,(1),null);
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
var vec__27935 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,cljs.core.str.cljs$core$IFn$_invoke$arity$1(x));
var _ = cljs.core.nth.call(null,vec__27935,(0),null);
var flags = cljs.core.nth.call(null,vec__27935,(1),null);
var pattern = cljs.core.nth.call(null,vec__27935,(2),null);
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
return cljs.compiler.emit_js_object.call(null,items,(function (p1__27938_SHARP_){
return (function (){
return cljs.compiler.emit_constant.call(null,p1__27938_SHARP_);
});
}));
} else {
return cljs.compiler.emit_js_array.call(null,items,cljs.compiler.emit_constants_comma_sep);
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"no-op","no-op",-93046065),(function (m){
return null;
}));
cljs.compiler.emit_var = (function cljs$compiler$emit_var(p__27940){
var map__27941 = p__27940;
var map__27941__$1 = (((((!((map__27941 == null))))?(((((map__27941.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27941.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27941):map__27941);
var ast = map__27941__$1;
var info = cljs.core.get.call(null,map__27941__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var env = cljs.core.get.call(null,map__27941__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var form = cljs.core.get.call(null,map__27941__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var temp__5733__auto__ = new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292).cljs$core$IFn$_invoke$arity$1(ast);
if(cljs.core.truth_(temp__5733__auto__)){
var const_expr = temp__5733__auto__;
return cljs.compiler.emit.call(null,cljs.core.assoc.call(null,const_expr,new cljs.core.Keyword(null,"env","env",-1815813235),env));
} else {
var map__27943 = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
var map__27943__$1 = (((((!((map__27943 == null))))?(((((map__27943.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27943.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27943):map__27943);
var cenv = map__27943__$1;
var options = cljs.core.get.call(null,map__27943__$1,new cljs.core.Keyword(null,"options","options",99638489));
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
var reserved = (function (){var G__27945 = cljs.compiler.js_reserved;
if(cljs.core.truth_((function (){var and__4115__auto__ = cljs.compiler.es5_GT__EQ_.call(null,new cljs.core.Keyword(null,"language-out","language-out",334619882).cljs$core$IFn$_invoke$arity$1(options));
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.namespace.call(null,var_name) == null)));
} else {
return and__4115__auto__;
}
})())){
return clojure.set.difference.call(null,G__27945,cljs.analyzer.es5_allowed);
} else {
return G__27945;
}
})();
var js_module = cljs.core.get_in.call(null,cenv,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-namespaces","js-namespaces",-471353612),(function (){var or__4126__auto__ = cljs.core.namespace.call(null,var_name);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.name.call(null,var_name);
}
})()], null));
var info__$2 = (function (){var G__27946 = info__$1;
if(cljs.core.not_EQ_.call(null,form,new cljs.core.Symbol("js","-Infinity","js/-Infinity",958706333,null))){
return cljs.compiler.munge.call(null,G__27946,reserved);
} else {
return G__27946;
}
})();
var env__27784__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27784__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var G__27947_27948 = new cljs.core.Keyword(null,"module-type","module-type",1392760304).cljs$core$IFn$_invoke$arity$1(js_module);
var G__27947_27949__$1 = (((G__27947_27948 instanceof cljs.core.Keyword))?G__27947_27948.fqn:null);
switch (G__27947_27949__$1) {
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27784__auto__))){
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"the-var","the-var",1428415613),(function (p__27951){
var map__27952 = p__27951;
var map__27952__$1 = (((((!((map__27952 == null))))?(((((map__27952.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27952.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27952):map__27952);
var arg = map__27952__$1;
var env = cljs.core.get.call(null,map__27952__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var var$ = cljs.core.get.call(null,map__27952__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var sym = cljs.core.get.call(null,map__27952__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var meta = cljs.core.get.call(null,map__27952__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
if(cljs.analyzer.ast_QMARK_.call(null,sym)){
} else {
throw (new Error("Assert failed: (ana/ast? sym)"));
}

if(cljs.analyzer.ast_QMARK_.call(null,meta)){
} else {
throw (new Error("Assert failed: (ana/ast? meta)"));
}

var map__27954 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(var$);
var map__27954__$1 = (((((!((map__27954 == null))))?(((((map__27954.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27954.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27954):map__27954);
var name = cljs.core.get.call(null,map__27954__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env__27784__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27784__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"new cljs.core.Var(function(){return ",cljs.compiler.munge.call(null,name),";},",sym,",",meta,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27784__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.emit_with_meta = (function cljs$compiler$emit_with_meta(expr,meta){
return cljs.compiler.emits.call(null,"cljs.core.with_meta(",expr,",",meta,")");
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"with-meta","with-meta",-1566856820),(function (p__27956){
var map__27957 = p__27956;
var map__27957__$1 = (((((!((map__27957 == null))))?(((((map__27957.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27957.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27957):map__27957);
var expr = cljs.core.get.call(null,map__27957__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var meta = cljs.core.get.call(null,map__27957__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var env = cljs.core.get.call(null,map__27957__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__27784__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27784__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_with_meta.call(null,expr,meta);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27784__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.distinct_keys_QMARK_ = (function cljs$compiler$distinct_keys_QMARK_(keys){
var keys__$1 = cljs.core.map.call(null,cljs.analyzer.unwrap_quote,keys);
return ((cljs.core.every_QMARK_.call(null,(function (p1__27959_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__27959_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"map","map",1371690461),(function (p__27960){
var map__27961 = p__27960;
var map__27961__$1 = (((((!((map__27961 == null))))?(((((map__27961.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27961.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27961):map__27961);
var env = cljs.core.get.call(null,map__27961__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var keys = cljs.core.get.call(null,map__27961__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.call(null,map__27961__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env__27784__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27784__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_map.call(null,keys,vals,cljs.compiler.comma_sep,cljs.compiler.distinct_keys_QMARK_);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27784__auto__))){
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (p__27963){
var map__27964 = p__27963;
var map__27964__$1 = (((((!((map__27964 == null))))?(((((map__27964.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27964.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27964):map__27964);
var items = cljs.core.get.call(null,map__27964__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__27964__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__27784__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27784__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_vector.call(null,items,cljs.compiler.comma_sep);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27784__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.distinct_constants_QMARK_ = (function cljs$compiler$distinct_constants_QMARK_(items){
var items__$1 = cljs.core.map.call(null,cljs.analyzer.unwrap_quote,items);
return ((cljs.core.every_QMARK_.call(null,(function (p1__27966_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__27966_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set","set",304602554),(function (p__27967){
var map__27968 = p__27967;
var map__27968__$1 = (((((!((map__27968 == null))))?(((((map__27968.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27968.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27968):map__27968);
var items = cljs.core.get.call(null,map__27968__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__27968__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__27784__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27784__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_set.call(null,items,cljs.compiler.comma_sep,cljs.compiler.distinct_constants_QMARK_);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27784__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.emit_js_object = (function cljs$compiler$emit_js_object(items,emit_js_object_val){
cljs.compiler.emits.call(null,"({");

var temp__5735__auto___27992 = cljs.core.seq.call(null,items);
if(temp__5735__auto___27992){
var items_27993__$1 = temp__5735__auto___27992;
var vec__27970_27994 = items_27993__$1;
var seq__27971_27995 = cljs.core.seq.call(null,vec__27970_27994);
var first__27972_27996 = cljs.core.first.call(null,seq__27971_27995);
var seq__27971_27997__$1 = cljs.core.next.call(null,seq__27971_27995);
var vec__27973_27998 = first__27972_27996;
var k_27999 = cljs.core.nth.call(null,vec__27973_27998,(0),null);
var v_28000 = cljs.core.nth.call(null,vec__27973_27998,(1),null);
var r_28001 = seq__27971_27997__$1;
cljs.compiler.emits.call(null,"\"",cljs.core.name.call(null,k_27999),"\": ",emit_js_object_val.call(null,v_28000));

var seq__27976_28002 = cljs.core.seq.call(null,r_28001);
var chunk__27977_28003 = null;
var count__27978_28004 = (0);
var i__27979_28005 = (0);
while(true){
if((i__27979_28005 < count__27978_28004)){
var vec__27986_28006 = cljs.core._nth.call(null,chunk__27977_28003,i__27979_28005);
var k_28007__$1 = cljs.core.nth.call(null,vec__27986_28006,(0),null);
var v_28008__$1 = cljs.core.nth.call(null,vec__27986_28006,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_28007__$1),"\": ",emit_js_object_val.call(null,v_28008__$1));


var G__28009 = seq__27976_28002;
var G__28010 = chunk__27977_28003;
var G__28011 = count__27978_28004;
var G__28012 = (i__27979_28005 + (1));
seq__27976_28002 = G__28009;
chunk__27977_28003 = G__28010;
count__27978_28004 = G__28011;
i__27979_28005 = G__28012;
continue;
} else {
var temp__5735__auto___28013__$1 = cljs.core.seq.call(null,seq__27976_28002);
if(temp__5735__auto___28013__$1){
var seq__27976_28014__$1 = temp__5735__auto___28013__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27976_28014__$1)){
var c__4556__auto___28015 = cljs.core.chunk_first.call(null,seq__27976_28014__$1);
var G__28016 = cljs.core.chunk_rest.call(null,seq__27976_28014__$1);
var G__28017 = c__4556__auto___28015;
var G__28018 = cljs.core.count.call(null,c__4556__auto___28015);
var G__28019 = (0);
seq__27976_28002 = G__28016;
chunk__27977_28003 = G__28017;
count__27978_28004 = G__28018;
i__27979_28005 = G__28019;
continue;
} else {
var vec__27989_28020 = cljs.core.first.call(null,seq__27976_28014__$1);
var k_28021__$1 = cljs.core.nth.call(null,vec__27989_28020,(0),null);
var v_28022__$1 = cljs.core.nth.call(null,vec__27989_28020,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_28021__$1),"\": ",emit_js_object_val.call(null,v_28022__$1));


var G__28023 = cljs.core.next.call(null,seq__27976_28014__$1);
var G__28024 = null;
var G__28025 = (0);
var G__28026 = (0);
seq__27976_28002 = G__28023;
chunk__27977_28003 = G__28024;
count__27978_28004 = G__28025;
i__27979_28005 = G__28026;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-object","js-object",1830199158),(function (p__28027){
var map__28028 = p__28027;
var map__28028__$1 = (((((!((map__28028 == null))))?(((((map__28028.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28028.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28028):map__28028);
var keys = cljs.core.get.call(null,map__28028__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.call(null,map__28028__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env = cljs.core.get.call(null,map__28028__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__27784__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27784__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_js_object.call(null,cljs.core.map.call(null,cljs.core.vector,keys,vals),cljs.core.identity);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27784__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-array","js-array",-1210185421),(function (p__28030){
var map__28031 = p__28030;
var map__28031__$1 = (((((!((map__28031 == null))))?(((((map__28031.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28031.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28031):map__28031);
var items = cljs.core.get.call(null,map__28031__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__28031__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__27784__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27784__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_js_array.call(null,items,cljs.compiler.comma_sep);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27784__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.emit_record_value = (function cljs$compiler$emit_record_value(ns,name,items){
return cljs.compiler.emits.call(null,ns,".map__GT_",name,"(",items,")");
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"quote","quote",-262615245),(function (p__28033){
var map__28034 = p__28033;
var map__28034__$1 = (((((!((map__28034 == null))))?(((((map__28034.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28034.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28034):map__28034);
var expr = cljs.core.get.call(null,map__28034__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
return cljs.compiler.emit.call(null,expr);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"const","const",1709929842),(function (p__28036){
var map__28037 = p__28036;
var map__28037__$1 = (((((!((map__28037 == null))))?(((((map__28037.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28037.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28037):map__28037);
var form = cljs.core.get.call(null,map__28037__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var env = cljs.core.get.call(null,map__28037__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__27784__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27784__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_constant.call(null,form);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27784__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.truthy_constant_QMARK_ = (function cljs$compiler$truthy_constant_QMARK_(expr){
var map__28039 = cljs.analyzer.unwrap_quote.call(null,expr);
var map__28039__$1 = (((((!((map__28039 == null))))?(((((map__28039.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28039.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28039):map__28039);
var op = cljs.core.get.call(null,map__28039__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__28039__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.call(null,map__28039__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
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
var map__28041 = cljs.analyzer.unwrap_quote.call(null,expr);
var map__28041__$1 = (((((!((map__28041 == null))))?(((((map__28041.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28041.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28041):map__28041);
var op = cljs.core.get.call(null,map__28041__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__28041__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.call(null,map__28041__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"if","if",-458814265),(function (p__28043){
var map__28044 = p__28043;
var map__28044__$1 = (((((!((map__28044 == null))))?(((((map__28044.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28044.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28044):map__28044);
var test = cljs.core.get.call(null,map__28044__$1,new cljs.core.Keyword(null,"test","test",577538877));
var then = cljs.core.get.call(null,map__28044__$1,new cljs.core.Keyword(null,"then","then",460598070));
var else$ = cljs.core.get.call(null,map__28044__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var env = cljs.core.get.call(null,map__28044__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var unchecked = cljs.core.get.call(null,map__28044__$1,new cljs.core.Keyword(null,"unchecked","unchecked",924418378));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"case","case",1143702196),(function (p__28046){
var map__28047 = p__28046;
var map__28047__$1 = (((((!((map__28047 == null))))?(((((map__28047.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28047.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28047):map__28047);
var v = cljs.core.get.call(null,map__28047__$1,new cljs.core.Keyword(null,"test","test",577538877));
var nodes = cljs.core.get.call(null,map__28047__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var default$ = cljs.core.get.call(null,map__28047__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var env = cljs.core.get.call(null,map__28047__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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

var seq__28049_28085 = cljs.core.seq.call(null,nodes);
var chunk__28050_28086 = null;
var count__28051_28087 = (0);
var i__28052_28088 = (0);
while(true){
if((i__28052_28088 < count__28051_28087)){
var map__28069_28089 = cljs.core._nth.call(null,chunk__28050_28086,i__28052_28088);
var map__28069_28090__$1 = (((((!((map__28069_28089 == null))))?(((((map__28069_28089.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28069_28089.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28069_28089):map__28069_28089);
var ts_28091 = cljs.core.get.call(null,map__28069_28090__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__28070_28092 = cljs.core.get.call(null,map__28069_28090__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__28070_28093__$1 = (((((!((map__28070_28092 == null))))?(((((map__28070_28092.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28070_28092.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28070_28092):map__28070_28092);
var then_28094 = cljs.core.get.call(null,map__28070_28093__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__28073_28095 = cljs.core.seq.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"test","test",577538877),ts_28091));
var chunk__28074_28096 = null;
var count__28075_28097 = (0);
var i__28076_28098 = (0);
while(true){
if((i__28076_28098 < count__28075_28097)){
var test_28099 = cljs.core._nth.call(null,chunk__28074_28096,i__28076_28098);
cljs.compiler.emitln.call(null,"case ",test_28099,":");


var G__28100 = seq__28073_28095;
var G__28101 = chunk__28074_28096;
var G__28102 = count__28075_28097;
var G__28103 = (i__28076_28098 + (1));
seq__28073_28095 = G__28100;
chunk__28074_28096 = G__28101;
count__28075_28097 = G__28102;
i__28076_28098 = G__28103;
continue;
} else {
var temp__5735__auto___28104 = cljs.core.seq.call(null,seq__28073_28095);
if(temp__5735__auto___28104){
var seq__28073_28105__$1 = temp__5735__auto___28104;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28073_28105__$1)){
var c__4556__auto___28106 = cljs.core.chunk_first.call(null,seq__28073_28105__$1);
var G__28107 = cljs.core.chunk_rest.call(null,seq__28073_28105__$1);
var G__28108 = c__4556__auto___28106;
var G__28109 = cljs.core.count.call(null,c__4556__auto___28106);
var G__28110 = (0);
seq__28073_28095 = G__28107;
chunk__28074_28096 = G__28108;
count__28075_28097 = G__28109;
i__28076_28098 = G__28110;
continue;
} else {
var test_28111 = cljs.core.first.call(null,seq__28073_28105__$1);
cljs.compiler.emitln.call(null,"case ",test_28111,":");


var G__28112 = cljs.core.next.call(null,seq__28073_28105__$1);
var G__28113 = null;
var G__28114 = (0);
var G__28115 = (0);
seq__28073_28095 = G__28112;
chunk__28074_28096 = G__28113;
count__28075_28097 = G__28114;
i__28076_28098 = G__28115;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_28094);
} else {
cljs.compiler.emitln.call(null,then_28094);
}

cljs.compiler.emitln.call(null,"break;");


var G__28116 = seq__28049_28085;
var G__28117 = chunk__28050_28086;
var G__28118 = count__28051_28087;
var G__28119 = (i__28052_28088 + (1));
seq__28049_28085 = G__28116;
chunk__28050_28086 = G__28117;
count__28051_28087 = G__28118;
i__28052_28088 = G__28119;
continue;
} else {
var temp__5735__auto___28120 = cljs.core.seq.call(null,seq__28049_28085);
if(temp__5735__auto___28120){
var seq__28049_28121__$1 = temp__5735__auto___28120;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28049_28121__$1)){
var c__4556__auto___28122 = cljs.core.chunk_first.call(null,seq__28049_28121__$1);
var G__28123 = cljs.core.chunk_rest.call(null,seq__28049_28121__$1);
var G__28124 = c__4556__auto___28122;
var G__28125 = cljs.core.count.call(null,c__4556__auto___28122);
var G__28126 = (0);
seq__28049_28085 = G__28123;
chunk__28050_28086 = G__28124;
count__28051_28087 = G__28125;
i__28052_28088 = G__28126;
continue;
} else {
var map__28077_28127 = cljs.core.first.call(null,seq__28049_28121__$1);
var map__28077_28128__$1 = (((((!((map__28077_28127 == null))))?(((((map__28077_28127.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28077_28127.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28077_28127):map__28077_28127);
var ts_28129 = cljs.core.get.call(null,map__28077_28128__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__28078_28130 = cljs.core.get.call(null,map__28077_28128__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__28078_28131__$1 = (((((!((map__28078_28130 == null))))?(((((map__28078_28130.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28078_28130.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28078_28130):map__28078_28130);
var then_28132 = cljs.core.get.call(null,map__28078_28131__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__28081_28133 = cljs.core.seq.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"test","test",577538877),ts_28129));
var chunk__28082_28134 = null;
var count__28083_28135 = (0);
var i__28084_28136 = (0);
while(true){
if((i__28084_28136 < count__28083_28135)){
var test_28137 = cljs.core._nth.call(null,chunk__28082_28134,i__28084_28136);
cljs.compiler.emitln.call(null,"case ",test_28137,":");


var G__28138 = seq__28081_28133;
var G__28139 = chunk__28082_28134;
var G__28140 = count__28083_28135;
var G__28141 = (i__28084_28136 + (1));
seq__28081_28133 = G__28138;
chunk__28082_28134 = G__28139;
count__28083_28135 = G__28140;
i__28084_28136 = G__28141;
continue;
} else {
var temp__5735__auto___28142__$1 = cljs.core.seq.call(null,seq__28081_28133);
if(temp__5735__auto___28142__$1){
var seq__28081_28143__$1 = temp__5735__auto___28142__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28081_28143__$1)){
var c__4556__auto___28144 = cljs.core.chunk_first.call(null,seq__28081_28143__$1);
var G__28145 = cljs.core.chunk_rest.call(null,seq__28081_28143__$1);
var G__28146 = c__4556__auto___28144;
var G__28147 = cljs.core.count.call(null,c__4556__auto___28144);
var G__28148 = (0);
seq__28081_28133 = G__28145;
chunk__28082_28134 = G__28146;
count__28083_28135 = G__28147;
i__28084_28136 = G__28148;
continue;
} else {
var test_28149 = cljs.core.first.call(null,seq__28081_28143__$1);
cljs.compiler.emitln.call(null,"case ",test_28149,":");


var G__28150 = cljs.core.next.call(null,seq__28081_28143__$1);
var G__28151 = null;
var G__28152 = (0);
var G__28153 = (0);
seq__28081_28133 = G__28150;
chunk__28082_28134 = G__28151;
count__28083_28135 = G__28152;
i__28084_28136 = G__28153;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_28132);
} else {
cljs.compiler.emitln.call(null,then_28132);
}

cljs.compiler.emitln.call(null,"break;");


var G__28154 = cljs.core.next.call(null,seq__28049_28121__$1);
var G__28155 = null;
var G__28156 = (0);
var G__28157 = (0);
seq__28049_28085 = G__28154;
chunk__28050_28086 = G__28155;
count__28051_28087 = G__28156;
i__28052_28088 = G__28157;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"throw","throw",-1044625833),(function (p__28158){
var map__28159 = p__28158;
var map__28159__$1 = (((((!((map__28159 == null))))?(((((map__28159.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28159.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28159):map__28159);
var throw$ = cljs.core.get.call(null,map__28159__$1,new cljs.core.Keyword(null,"exception","exception",-335277064));
var env = cljs.core.get.call(null,map__28159__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
var vec__28162 = (((!(((-1) === idx))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,t,(0),idx),cljs.core.subs.call(null,t,(idx + (1)),cljs.core.count.call(null,t))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,null], null));
var fstr = cljs.core.nth.call(null,vec__28162,(0),null);
var rstr = cljs.core.nth.call(null,vec__28162,(1),null);
var ret_t = (cljs.core.truth_(rstr)?cljs.compiler.resolve_type.call(null,env,rstr):null);
var axstr = cljs.core.subs.call(null,fstr,(9),(cljs.core.count.call(null,fstr) - (1)));
var args_ts = ((clojure.string.blank_QMARK_.call(null,axstr))?null:cljs.core.map.call(null,cljs.core.comp.call(null,(function (p1__28161_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__28161_SHARP_);
}),clojure.string.trim),clojure.string.split.call(null,axstr,/,/)));
var G__28165 = ["function(",clojure.string.join.call(null,",",args_ts),")"].join('');
if(cljs.core.truth_(ret_t)){
return [G__28165,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ret_t)].join('');
} else {
return G__28165;
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
return ["{",clojure.string.join.call(null,"|",cljs.core.map.call(null,(function (p1__28166_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__28166_SHARP_);
}),xs)),"}"].join('');
});
cljs.compiler.munge_param_return = (function cljs$compiler$munge_param_return(env,line){
if(cljs.core.truth_(cljs.core.re_find.call(null,/@param/,line))){
var vec__28167 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__28168 = cljs.core.seq.call(null,vec__28167);
var first__28169 = cljs.core.first.call(null,seq__28168);
var seq__28168__$1 = cljs.core.next.call(null,seq__28168);
var p = first__28169;
var first__28169__$1 = cljs.core.first.call(null,seq__28168__$1);
var seq__28168__$2 = cljs.core.next.call(null,seq__28168__$1);
var ts = first__28169__$1;
var first__28169__$2 = cljs.core.first.call(null,seq__28168__$2);
var seq__28168__$3 = cljs.core.next.call(null,seq__28168__$2);
var n = first__28169__$2;
var xs = seq__28168__$3;
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
var vec__28170 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__28171 = cljs.core.seq.call(null,vec__28170);
var first__28172 = cljs.core.first.call(null,seq__28171);
var seq__28171__$1 = cljs.core.next.call(null,seq__28171);
var p = first__28172;
var first__28172__$1 = cljs.core.first.call(null,seq__28171__$1);
var seq__28171__$2 = cljs.core.next.call(null,seq__28171__$1);
var ts = first__28172__$1;
var xs = seq__28171__$2;
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
var G__28175 = arguments.length;
switch (G__28175) {
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
var vec__28183 = cljs.core.map.call(null,(function (p1__28173_SHARP_){
if(cljs.core.truth_(cljs.compiler.checking_types_QMARK_.call(null))){
return cljs.compiler.munge_param_return.call(null,env,p1__28173_SHARP_);
} else {
return p1__28173_SHARP_;
}
}),clojure.string.split_lines.call(null,e));
var seq__28184 = cljs.core.seq.call(null,vec__28183);
var first__28185 = cljs.core.first.call(null,seq__28184);
var seq__28184__$1 = cljs.core.next.call(null,seq__28184);
var x = first__28185;
var ys = seq__28184__$1;
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,x,"*/","* /"));

var seq__28186 = cljs.core.seq.call(null,ys);
var chunk__28187 = null;
var count__28188 = (0);
var i__28189 = (0);
while(true){
if((i__28189 < count__28188)){
var next_line = cljs.core._nth.call(null,chunk__28187,i__28189);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));


var G__28195 = seq__28186;
var G__28196 = chunk__28187;
var G__28197 = count__28188;
var G__28198 = (i__28189 + (1));
seq__28186 = G__28195;
chunk__28187 = G__28196;
count__28188 = G__28197;
i__28189 = G__28198;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__28186);
if(temp__5735__auto__){
var seq__28186__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28186__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__28186__$1);
var G__28199 = cljs.core.chunk_rest.call(null,seq__28186__$1);
var G__28200 = c__4556__auto__;
var G__28201 = cljs.core.count.call(null,c__4556__auto__);
var G__28202 = (0);
seq__28186 = G__28199;
chunk__28187 = G__28200;
count__28188 = G__28201;
i__28189 = G__28202;
continue;
} else {
var next_line = cljs.core.first.call(null,seq__28186__$1);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));


var G__28203 = cljs.core.next.call(null,seq__28186__$1);
var G__28204 = null;
var G__28205 = (0);
var G__28206 = (0);
seq__28186 = G__28203;
chunk__28187 = G__28204;
count__28188 = G__28205;
i__28189 = G__28206;
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

var seq__28190_28207 = cljs.core.seq.call(null,docs__$2);
var chunk__28191_28208 = null;
var count__28192_28209 = (0);
var i__28193_28210 = (0);
while(true){
if((i__28193_28210 < count__28192_28209)){
var e_28211 = cljs.core._nth.call(null,chunk__28191_28208,i__28193_28210);
if(cljs.core.truth_(e_28211)){
print_comment_lines.call(null,e_28211);
} else {
}


var G__28212 = seq__28190_28207;
var G__28213 = chunk__28191_28208;
var G__28214 = count__28192_28209;
var G__28215 = (i__28193_28210 + (1));
seq__28190_28207 = G__28212;
chunk__28191_28208 = G__28213;
count__28192_28209 = G__28214;
i__28193_28210 = G__28215;
continue;
} else {
var temp__5735__auto___28216 = cljs.core.seq.call(null,seq__28190_28207);
if(temp__5735__auto___28216){
var seq__28190_28217__$1 = temp__5735__auto___28216;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28190_28217__$1)){
var c__4556__auto___28218 = cljs.core.chunk_first.call(null,seq__28190_28217__$1);
var G__28219 = cljs.core.chunk_rest.call(null,seq__28190_28217__$1);
var G__28220 = c__4556__auto___28218;
var G__28221 = cljs.core.count.call(null,c__4556__auto___28218);
var G__28222 = (0);
seq__28190_28207 = G__28219;
chunk__28191_28208 = G__28220;
count__28192_28209 = G__28221;
i__28193_28210 = G__28222;
continue;
} else {
var e_28223 = cljs.core.first.call(null,seq__28190_28217__$1);
if(cljs.core.truth_(e_28223)){
print_comment_lines.call(null,e_28223);
} else {
}


var G__28224 = cljs.core.next.call(null,seq__28190_28217__$1);
var G__28225 = null;
var G__28226 = (0);
var G__28227 = (0);
seq__28190_28207 = G__28224;
chunk__28191_28208 = G__28225;
count__28192_28209 = G__28226;
i__28193_28210 = G__28227;
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
var and__4115__auto__ = cljs.core.some.call(null,(function (p1__28229_SHARP_){
return goog.string.startsWith(p1__28229_SHARP_,"@define");
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"def","def",-1043430536),(function (p__28230){
var map__28231 = p__28230;
var map__28231__$1 = (((((!((map__28231 == null))))?(((((map__28231.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28231.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28231):map__28231);
var doc = cljs.core.get.call(null,map__28231__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var jsdoc = cljs.core.get.call(null,map__28231__$1,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516));
var test = cljs.core.get.call(null,map__28231__$1,new cljs.core.Keyword(null,"test","test",577538877));
var goog_define = cljs.core.get.call(null,map__28231__$1,new cljs.core.Keyword(null,"goog-define","goog-define",-1048305441));
var init = cljs.core.get.call(null,map__28231__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var name = cljs.core.get.call(null,map__28231__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__28231__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var export$ = cljs.core.get.call(null,map__28231__$1,new cljs.core.Keyword(null,"export","export",214356590));
var var$ = cljs.core.get.call(null,map__28231__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var var_ast = cljs.core.get.call(null,map__28231__$1,new cljs.core.Keyword(null,"var-ast","var-ast",1200379319));
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
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__28233){
var map__28234 = p__28233;
var map__28234__$1 = (((((!((map__28234 == null))))?(((((map__28234.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28234.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28234):map__28234);
var name = cljs.core.get.call(null,map__28234__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__28234__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__28234__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var arglist = cljs.core.gensym.call(null,"arglist__");
var delegate_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,name)),"__delegate"].join('');
cljs.compiler.emitln.call(null,"(function (",arglist,"){");

var seq__28236_28260 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.drop_last.call(null,(2),params)));
var chunk__28237_28261 = null;
var count__28238_28262 = (0);
var i__28239_28263 = (0);
while(true){
if((i__28239_28263 < count__28238_28262)){
var vec__28246_28264 = cljs.core._nth.call(null,chunk__28237_28261,i__28239_28263);
var i_28265 = cljs.core.nth.call(null,vec__28246_28264,(0),null);
var param_28266 = cljs.core.nth.call(null,vec__28246_28264,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_28266);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");


var G__28267 = seq__28236_28260;
var G__28268 = chunk__28237_28261;
var G__28269 = count__28238_28262;
var G__28270 = (i__28239_28263 + (1));
seq__28236_28260 = G__28267;
chunk__28237_28261 = G__28268;
count__28238_28262 = G__28269;
i__28239_28263 = G__28270;
continue;
} else {
var temp__5735__auto___28271 = cljs.core.seq.call(null,seq__28236_28260);
if(temp__5735__auto___28271){
var seq__28236_28272__$1 = temp__5735__auto___28271;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28236_28272__$1)){
var c__4556__auto___28273 = cljs.core.chunk_first.call(null,seq__28236_28272__$1);
var G__28274 = cljs.core.chunk_rest.call(null,seq__28236_28272__$1);
var G__28275 = c__4556__auto___28273;
var G__28276 = cljs.core.count.call(null,c__4556__auto___28273);
var G__28277 = (0);
seq__28236_28260 = G__28274;
chunk__28237_28261 = G__28275;
count__28238_28262 = G__28276;
i__28239_28263 = G__28277;
continue;
} else {
var vec__28249_28278 = cljs.core.first.call(null,seq__28236_28272__$1);
var i_28279 = cljs.core.nth.call(null,vec__28249_28278,(0),null);
var param_28280 = cljs.core.nth.call(null,vec__28249_28278,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_28280);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");


var G__28281 = cljs.core.next.call(null,seq__28236_28272__$1);
var G__28282 = null;
var G__28283 = (0);
var G__28284 = (0);
seq__28236_28260 = G__28281;
chunk__28237_28261 = G__28282;
count__28238_28262 = G__28283;
i__28239_28263 = G__28284;
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

var seq__28252_28285 = cljs.core.seq.call(null,params);
var chunk__28253_28286 = null;
var count__28254_28287 = (0);
var i__28255_28288 = (0);
while(true){
if((i__28255_28288 < count__28254_28287)){
var param_28289 = cljs.core._nth.call(null,chunk__28253_28286,i__28255_28288);
cljs.compiler.emit.call(null,param_28289);

if(cljs.core._EQ_.call(null,param_28289,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__28290 = seq__28252_28285;
var G__28291 = chunk__28253_28286;
var G__28292 = count__28254_28287;
var G__28293 = (i__28255_28288 + (1));
seq__28252_28285 = G__28290;
chunk__28253_28286 = G__28291;
count__28254_28287 = G__28292;
i__28255_28288 = G__28293;
continue;
} else {
var temp__5735__auto___28294 = cljs.core.seq.call(null,seq__28252_28285);
if(temp__5735__auto___28294){
var seq__28252_28295__$1 = temp__5735__auto___28294;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28252_28295__$1)){
var c__4556__auto___28296 = cljs.core.chunk_first.call(null,seq__28252_28295__$1);
var G__28297 = cljs.core.chunk_rest.call(null,seq__28252_28295__$1);
var G__28298 = c__4556__auto___28296;
var G__28299 = cljs.core.count.call(null,c__4556__auto___28296);
var G__28300 = (0);
seq__28252_28285 = G__28297;
chunk__28253_28286 = G__28298;
count__28254_28287 = G__28299;
i__28255_28288 = G__28300;
continue;
} else {
var param_28301 = cljs.core.first.call(null,seq__28252_28295__$1);
cljs.compiler.emit.call(null,param_28301);

if(cljs.core._EQ_.call(null,param_28301,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__28302 = cljs.core.next.call(null,seq__28252_28295__$1);
var G__28303 = null;
var G__28304 = (0);
var G__28305 = (0);
seq__28252_28285 = G__28302;
chunk__28253_28286 = G__28303;
count__28254_28287 = G__28304;
i__28255_28288 = G__28305;
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

var seq__28256_28306 = cljs.core.seq.call(null,params);
var chunk__28257_28307 = null;
var count__28258_28308 = (0);
var i__28259_28309 = (0);
while(true){
if((i__28259_28309 < count__28258_28308)){
var param_28310 = cljs.core._nth.call(null,chunk__28257_28307,i__28259_28309);
cljs.compiler.emit.call(null,param_28310);

if(cljs.core._EQ_.call(null,param_28310,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__28311 = seq__28256_28306;
var G__28312 = chunk__28257_28307;
var G__28313 = count__28258_28308;
var G__28314 = (i__28259_28309 + (1));
seq__28256_28306 = G__28311;
chunk__28257_28307 = G__28312;
count__28258_28308 = G__28313;
i__28259_28309 = G__28314;
continue;
} else {
var temp__5735__auto___28315 = cljs.core.seq.call(null,seq__28256_28306);
if(temp__5735__auto___28315){
var seq__28256_28316__$1 = temp__5735__auto___28315;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28256_28316__$1)){
var c__4556__auto___28317 = cljs.core.chunk_first.call(null,seq__28256_28316__$1);
var G__28318 = cljs.core.chunk_rest.call(null,seq__28256_28316__$1);
var G__28319 = c__4556__auto___28317;
var G__28320 = cljs.core.count.call(null,c__4556__auto___28317);
var G__28321 = (0);
seq__28256_28306 = G__28318;
chunk__28257_28307 = G__28319;
count__28258_28308 = G__28320;
i__28259_28309 = G__28321;
continue;
} else {
var param_28322 = cljs.core.first.call(null,seq__28256_28316__$1);
cljs.compiler.emit.call(null,param_28322);

if(cljs.core._EQ_.call(null,param_28322,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__28323 = cljs.core.next.call(null,seq__28256_28316__$1);
var G__28324 = null;
var G__28325 = (0);
var G__28326 = (0);
seq__28256_28306 = G__28323;
chunk__28257_28307 = G__28324;
count__28258_28308 = G__28325;
i__28259_28309 = G__28326;
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
var seq__28327 = cljs.core.seq.call(null,params);
var chunk__28328 = null;
var count__28329 = (0);
var i__28330 = (0);
while(true){
if((i__28330 < count__28329)){
var param = cljs.core._nth.call(null,chunk__28328,i__28330);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__28331 = seq__28327;
var G__28332 = chunk__28328;
var G__28333 = count__28329;
var G__28334 = (i__28330 + (1));
seq__28327 = G__28331;
chunk__28328 = G__28332;
count__28329 = G__28333;
i__28330 = G__28334;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__28327);
if(temp__5735__auto__){
var seq__28327__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28327__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__28327__$1);
var G__28335 = cljs.core.chunk_rest.call(null,seq__28327__$1);
var G__28336 = c__4556__auto__;
var G__28337 = cljs.core.count.call(null,c__4556__auto__);
var G__28338 = (0);
seq__28327 = G__28335;
chunk__28328 = G__28336;
count__28329 = G__28337;
i__28330 = G__28338;
continue;
} else {
var param = cljs.core.first.call(null,seq__28327__$1);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__28339 = cljs.core.next.call(null,seq__28327__$1);
var G__28340 = null;
var G__28341 = (0);
var G__28342 = (0);
seq__28327 = G__28339;
chunk__28328 = G__28340;
count__28329 = G__28341;
i__28330 = G__28342;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__28343){
var map__28344 = p__28343;
var map__28344__$1 = (((((!((map__28344 == null))))?(((((map__28344.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28344.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28344):map__28344);
var expr = cljs.core.get.call(null,map__28344__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var type = cljs.core.get.call(null,map__28344__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__28344__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__28344__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__28344__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__28344__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var env__27784__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27784__auto__))){
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27784__auto__))){
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
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__28346){
var map__28347 = p__28346;
var map__28347__$1 = (((((!((map__28347 == null))))?(((((map__28347.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28347.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28347):map__28347);
var f = map__28347__$1;
var expr = cljs.core.get.call(null,map__28347__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var max_fixed_arity = cljs.core.get.call(null,map__28347__$1,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869));
var variadic = cljs.core.get.call(null,map__28347__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var type = cljs.core.get.call(null,map__28347__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__28347__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__28347__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__28347__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__28347__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var env__27784__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27784__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var name_28357__$1 = (function (){var or__4126__auto__ = name;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_28358 = cljs.compiler.munge.call(null,name_28357__$1);
var delegate_name_28359 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_28358),"__delegate"].join('');
cljs.compiler.emitln.call(null,"(function() { ");

cljs.compiler.emits.call(null,"var ",delegate_name_28359," = function (");

var seq__28349_28360 = cljs.core.seq.call(null,params);
var chunk__28350_28361 = null;
var count__28351_28362 = (0);
var i__28352_28363 = (0);
while(true){
if((i__28352_28363 < count__28351_28362)){
var param_28364 = cljs.core._nth.call(null,chunk__28350_28361,i__28352_28363);
cljs.compiler.emit.call(null,param_28364);

if(cljs.core._EQ_.call(null,param_28364,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__28365 = seq__28349_28360;
var G__28366 = chunk__28350_28361;
var G__28367 = count__28351_28362;
var G__28368 = (i__28352_28363 + (1));
seq__28349_28360 = G__28365;
chunk__28350_28361 = G__28366;
count__28351_28362 = G__28367;
i__28352_28363 = G__28368;
continue;
} else {
var temp__5735__auto___28369 = cljs.core.seq.call(null,seq__28349_28360);
if(temp__5735__auto___28369){
var seq__28349_28370__$1 = temp__5735__auto___28369;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28349_28370__$1)){
var c__4556__auto___28371 = cljs.core.chunk_first.call(null,seq__28349_28370__$1);
var G__28372 = cljs.core.chunk_rest.call(null,seq__28349_28370__$1);
var G__28373 = c__4556__auto___28371;
var G__28374 = cljs.core.count.call(null,c__4556__auto___28371);
var G__28375 = (0);
seq__28349_28360 = G__28372;
chunk__28350_28361 = G__28373;
count__28351_28362 = G__28374;
i__28352_28363 = G__28375;
continue;
} else {
var param_28376 = cljs.core.first.call(null,seq__28349_28370__$1);
cljs.compiler.emit.call(null,param_28376);

if(cljs.core._EQ_.call(null,param_28376,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__28377 = cljs.core.next.call(null,seq__28349_28370__$1);
var G__28378 = null;
var G__28379 = (0);
var G__28380 = (0);
seq__28349_28360 = G__28377;
chunk__28350_28361 = G__28378;
count__28351_28362 = G__28379;
i__28352_28363 = G__28380;
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

cljs.compiler.emitln.call(null,"var ",mname_28358," = function (",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):params)),"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",(cljs.core.count.call(null,params) - (1)),") {");

var a_28381 = cljs.compiler.emit_arguments_to_array.call(null,(cljs.core.count.call(null,params) - (1)));
cljs.compiler.emitln.call(null,"  ",cljs.core.last.call(null,params)," = new cljs.core.IndexedSeq(",a_28381,",0,null);");

cljs.compiler.emitln.call(null,"} ");
} else {
}

cljs.compiler.emits.call(null,"return ",delegate_name_28359,".call(this,");

var seq__28353_28382 = cljs.core.seq.call(null,params);
var chunk__28354_28383 = null;
var count__28355_28384 = (0);
var i__28356_28385 = (0);
while(true){
if((i__28356_28385 < count__28355_28384)){
var param_28386 = cljs.core._nth.call(null,chunk__28354_28383,i__28356_28385);
cljs.compiler.emit.call(null,param_28386);

if(cljs.core._EQ_.call(null,param_28386,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__28387 = seq__28353_28382;
var G__28388 = chunk__28354_28383;
var G__28389 = count__28355_28384;
var G__28390 = (i__28356_28385 + (1));
seq__28353_28382 = G__28387;
chunk__28354_28383 = G__28388;
count__28355_28384 = G__28389;
i__28356_28385 = G__28390;
continue;
} else {
var temp__5735__auto___28391 = cljs.core.seq.call(null,seq__28353_28382);
if(temp__5735__auto___28391){
var seq__28353_28392__$1 = temp__5735__auto___28391;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28353_28392__$1)){
var c__4556__auto___28393 = cljs.core.chunk_first.call(null,seq__28353_28392__$1);
var G__28394 = cljs.core.chunk_rest.call(null,seq__28353_28392__$1);
var G__28395 = c__4556__auto___28393;
var G__28396 = cljs.core.count.call(null,c__4556__auto___28393);
var G__28397 = (0);
seq__28353_28382 = G__28394;
chunk__28354_28383 = G__28395;
count__28355_28384 = G__28396;
i__28356_28385 = G__28397;
continue;
} else {
var param_28398 = cljs.core.first.call(null,seq__28353_28392__$1);
cljs.compiler.emit.call(null,param_28398);

if(cljs.core._EQ_.call(null,param_28398,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__28399 = cljs.core.next.call(null,seq__28353_28392__$1);
var G__28400 = null;
var G__28401 = (0);
var G__28402 = (0);
seq__28353_28382 = G__28399;
chunk__28354_28383 = G__28400;
count__28355_28384 = G__28401;
i__28356_28385 = G__28402;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.call(null,");");

cljs.compiler.emitln.call(null,"};");

cljs.compiler.emitln.call(null,mname_28358,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emits.call(null,mname_28358,".cljs$lang$applyTo = ");

cljs.compiler.emit_apply_to.call(null,cljs.core.assoc.call(null,f,new cljs.core.Keyword(null,"name","name",1843675177),name_28357__$1));

cljs.compiler.emitln.call(null,";");

cljs.compiler.emitln.call(null,mname_28358,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_28359,";");

cljs.compiler.emitln.call(null,"return ",mname_28358,";");

cljs.compiler.emitln.call(null,"})()");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27784__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p__28406){
var map__28407 = p__28406;
var map__28407__$1 = (((((!((map__28407 == null))))?(((((map__28407.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28407.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28407):map__28407);
var variadic = cljs.core.get.call(null,map__28407__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var name = cljs.core.get.call(null,map__28407__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__28407__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var methods$ = cljs.core.get.call(null,map__28407__$1,new cljs.core.Keyword(null,"methods","methods",453930866));
var max_fixed_arity = cljs.core.get.call(null,map__28407__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var recur_frames = cljs.core.get.call(null,map__28407__$1,new cljs.core.Keyword(null,"recur-frames","recur-frames",-307205196));
var in_loop = cljs.core.get.call(null,map__28407__$1,new cljs.core.Keyword(null,"in-loop","in-loop",-187298246));
var loop_lets = cljs.core.get.call(null,map__28407__$1,new cljs.core.Keyword(null,"loop-lets","loop-lets",2036794185));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var recur_params = cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.filter.call(null,(function (p1__28403_SHARP_){
var and__4115__auto__ = p1__28403_SHARP_;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__28403_SHARP_));
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
var name_28460__$1 = (function (){var or__4126__auto__ = name;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_28461 = cljs.compiler.munge.call(null,name_28460__$1);
var maxparams_28462 = cljs.core.apply.call(null,cljs.core.max_key,cljs.core.count,cljs.core.map.call(null,new cljs.core.Keyword(null,"params","params",710516235),methods$));
var mmap_28463 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_28461),"__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
}),methods$));
var ms_28464 = cljs.core.sort_by.call(null,(function (p1__28404_SHARP_){
return cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__28404_SHARP_)));
}),cljs.core.seq.call(null,mmap_28463));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emitln.call(null,"(function() {");

cljs.compiler.emitln.call(null,"var ",mname_28461," = null;");

var seq__28409_28465 = cljs.core.seq.call(null,ms_28464);
var chunk__28410_28466 = null;
var count__28411_28467 = (0);
var i__28412_28468 = (0);
while(true){
if((i__28412_28468 < count__28411_28467)){
var vec__28419_28469 = cljs.core._nth.call(null,chunk__28410_28466,i__28412_28468);
var n_28470 = cljs.core.nth.call(null,vec__28419_28469,(0),null);
var meth_28471 = cljs.core.nth.call(null,vec__28419_28469,(1),null);
cljs.compiler.emits.call(null,"var ",n_28470," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_28471))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_28471);
} else {
cljs.compiler.emit_fn_method.call(null,meth_28471);
}

cljs.compiler.emitln.call(null,";");


var G__28472 = seq__28409_28465;
var G__28473 = chunk__28410_28466;
var G__28474 = count__28411_28467;
var G__28475 = (i__28412_28468 + (1));
seq__28409_28465 = G__28472;
chunk__28410_28466 = G__28473;
count__28411_28467 = G__28474;
i__28412_28468 = G__28475;
continue;
} else {
var temp__5735__auto___28476 = cljs.core.seq.call(null,seq__28409_28465);
if(temp__5735__auto___28476){
var seq__28409_28477__$1 = temp__5735__auto___28476;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28409_28477__$1)){
var c__4556__auto___28478 = cljs.core.chunk_first.call(null,seq__28409_28477__$1);
var G__28479 = cljs.core.chunk_rest.call(null,seq__28409_28477__$1);
var G__28480 = c__4556__auto___28478;
var G__28481 = cljs.core.count.call(null,c__4556__auto___28478);
var G__28482 = (0);
seq__28409_28465 = G__28479;
chunk__28410_28466 = G__28480;
count__28411_28467 = G__28481;
i__28412_28468 = G__28482;
continue;
} else {
var vec__28422_28483 = cljs.core.first.call(null,seq__28409_28477__$1);
var n_28484 = cljs.core.nth.call(null,vec__28422_28483,(0),null);
var meth_28485 = cljs.core.nth.call(null,vec__28422_28483,(1),null);
cljs.compiler.emits.call(null,"var ",n_28484," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_28485))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_28485);
} else {
cljs.compiler.emit_fn_method.call(null,meth_28485);
}

cljs.compiler.emitln.call(null,";");


var G__28486 = cljs.core.next.call(null,seq__28409_28477__$1);
var G__28487 = null;
var G__28488 = (0);
var G__28489 = (0);
seq__28409_28465 = G__28486;
chunk__28410_28466 = G__28487;
count__28411_28467 = G__28488;
i__28412_28468 = G__28489;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,mname_28461," = function(",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,maxparams_28462),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):maxparams_28462)),"){");

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,maxparams_28462));

cljs.compiler.emitln.call(null," = var_args;");
} else {
}

cljs.compiler.emitln.call(null,"switch(arguments.length){");

var seq__28425_28490 = cljs.core.seq.call(null,ms_28464);
var chunk__28426_28491 = null;
var count__28427_28492 = (0);
var i__28428_28493 = (0);
while(true){
if((i__28428_28493 < count__28427_28492)){
var vec__28435_28494 = cljs.core._nth.call(null,chunk__28426_28491,i__28428_28493);
var n_28495 = cljs.core.nth.call(null,vec__28435_28494,(0),null);
var meth_28496 = cljs.core.nth.call(null,vec__28435_28494,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_28496))){
cljs.compiler.emitln.call(null,"default:");

var restarg_28497 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_28497," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_28498 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_28497," = new cljs.core.IndexedSeq(",a_28498,",0,null);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_28495,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_28462)),(((cljs.core.count.call(null,maxparams_28462) > (1)))?", ":null),restarg_28497,");");
} else {
var pcnt_28499 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_28496));
cljs.compiler.emitln.call(null,"case ",pcnt_28499,":");

cljs.compiler.emitln.call(null,"return ",n_28495,".call(this",(((pcnt_28499 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_28499,maxparams_28462)),null,(1),null)),(2),null))),");");
}


var G__28500 = seq__28425_28490;
var G__28501 = chunk__28426_28491;
var G__28502 = count__28427_28492;
var G__28503 = (i__28428_28493 + (1));
seq__28425_28490 = G__28500;
chunk__28426_28491 = G__28501;
count__28427_28492 = G__28502;
i__28428_28493 = G__28503;
continue;
} else {
var temp__5735__auto___28504 = cljs.core.seq.call(null,seq__28425_28490);
if(temp__5735__auto___28504){
var seq__28425_28505__$1 = temp__5735__auto___28504;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28425_28505__$1)){
var c__4556__auto___28506 = cljs.core.chunk_first.call(null,seq__28425_28505__$1);
var G__28507 = cljs.core.chunk_rest.call(null,seq__28425_28505__$1);
var G__28508 = c__4556__auto___28506;
var G__28509 = cljs.core.count.call(null,c__4556__auto___28506);
var G__28510 = (0);
seq__28425_28490 = G__28507;
chunk__28426_28491 = G__28508;
count__28427_28492 = G__28509;
i__28428_28493 = G__28510;
continue;
} else {
var vec__28438_28511 = cljs.core.first.call(null,seq__28425_28505__$1);
var n_28512 = cljs.core.nth.call(null,vec__28438_28511,(0),null);
var meth_28513 = cljs.core.nth.call(null,vec__28438_28511,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_28513))){
cljs.compiler.emitln.call(null,"default:");

var restarg_28514 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_28514," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_28515 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_28514," = new cljs.core.IndexedSeq(",a_28515,",0,null);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_28512,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_28462)),(((cljs.core.count.call(null,maxparams_28462) > (1)))?", ":null),restarg_28514,");");
} else {
var pcnt_28516 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_28513));
cljs.compiler.emitln.call(null,"case ",pcnt_28516,":");

cljs.compiler.emitln.call(null,"return ",n_28512,".call(this",(((pcnt_28516 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_28516,maxparams_28462)),null,(1),null)),(2),null))),");");
}


var G__28517 = cljs.core.next.call(null,seq__28425_28505__$1);
var G__28518 = null;
var G__28519 = (0);
var G__28520 = (0);
seq__28425_28490 = G__28517;
chunk__28426_28491 = G__28518;
count__28427_28492 = G__28519;
i__28428_28493 = G__28520;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"}");

var arg_count_js_28521 = ((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"self__","self__",-153190816,null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.val.call(null,cljs.core.first.call(null,ms_28464)))))))?"(arguments.length - 1)":"arguments.length");
cljs.compiler.emitln.call(null,"throw(new Error('Invalid arity: ' + ",arg_count_js_28521,"));");

cljs.compiler.emitln.call(null,"};");

if(cljs.core.truth_(variadic)){
cljs.compiler.emitln.call(null,mname_28461,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emitln.call(null,mname_28461,".cljs$lang$applyTo = ",cljs.core.some.call(null,(function (p1__28405_SHARP_){
var vec__28441 = p1__28405_SHARP_;
var n = cljs.core.nth.call(null,vec__28441,(0),null);
var m = cljs.core.nth.call(null,vec__28441,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
}),ms_28464),".cljs$lang$applyTo;");
} else {
}

var seq__28444_28522 = cljs.core.seq.call(null,ms_28464);
var chunk__28445_28523 = null;
var count__28446_28524 = (0);
var i__28447_28525 = (0);
while(true){
if((i__28447_28525 < count__28446_28524)){
var vec__28454_28526 = cljs.core._nth.call(null,chunk__28445_28523,i__28447_28525);
var n_28527 = cljs.core.nth.call(null,vec__28454_28526,(0),null);
var meth_28528 = cljs.core.nth.call(null,vec__28454_28526,(1),null);
var c_28529 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_28528));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_28528))){
cljs.compiler.emitln.call(null,mname_28461,".cljs$core$IFn$_invoke$arity$variadic = ",n_28527,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_28461,".cljs$core$IFn$_invoke$arity$",c_28529," = ",n_28527,";");
}


var G__28530 = seq__28444_28522;
var G__28531 = chunk__28445_28523;
var G__28532 = count__28446_28524;
var G__28533 = (i__28447_28525 + (1));
seq__28444_28522 = G__28530;
chunk__28445_28523 = G__28531;
count__28446_28524 = G__28532;
i__28447_28525 = G__28533;
continue;
} else {
var temp__5735__auto___28534 = cljs.core.seq.call(null,seq__28444_28522);
if(temp__5735__auto___28534){
var seq__28444_28535__$1 = temp__5735__auto___28534;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28444_28535__$1)){
var c__4556__auto___28536 = cljs.core.chunk_first.call(null,seq__28444_28535__$1);
var G__28537 = cljs.core.chunk_rest.call(null,seq__28444_28535__$1);
var G__28538 = c__4556__auto___28536;
var G__28539 = cljs.core.count.call(null,c__4556__auto___28536);
var G__28540 = (0);
seq__28444_28522 = G__28537;
chunk__28445_28523 = G__28538;
count__28446_28524 = G__28539;
i__28447_28525 = G__28540;
continue;
} else {
var vec__28457_28541 = cljs.core.first.call(null,seq__28444_28535__$1);
var n_28542 = cljs.core.nth.call(null,vec__28457_28541,(0),null);
var meth_28543 = cljs.core.nth.call(null,vec__28457_28541,(1),null);
var c_28544 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_28543));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_28543))){
cljs.compiler.emitln.call(null,mname_28461,".cljs$core$IFn$_invoke$arity$variadic = ",n_28542,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_28461,".cljs$core$IFn$_invoke$arity$",c_28544," = ",n_28542,";");
}


var G__28545 = cljs.core.next.call(null,seq__28444_28535__$1);
var G__28546 = null;
var G__28547 = (0);
var G__28548 = (0);
seq__28444_28522 = G__28545;
chunk__28445_28523 = G__28546;
count__28446_28524 = G__28547;
i__28447_28525 = G__28548;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"return ",mname_28461,";");

cljs.compiler.emitln.call(null,"})()");
}

if(loop_locals){
return cljs.compiler.emitln.call(null,";})(",cljs.compiler.comma_sep.call(null,loop_locals),"))");
} else {
return null;
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"do","do",46310725),(function (p__28549){
var map__28550 = p__28549;
var map__28550__$1 = (((((!((map__28550 == null))))?(((((map__28550.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28550.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28550):map__28550);
var statements = cljs.core.get.call(null,map__28550__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var ret = cljs.core.get.call(null,map__28550__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var env = cljs.core.get.call(null,map__28550__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(((cljs.core.seq.call(null,statements)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)))){
cljs.compiler.emitln.call(null,"(function (){");
} else {
}

var seq__28552_28556 = cljs.core.seq.call(null,statements);
var chunk__28553_28557 = null;
var count__28554_28558 = (0);
var i__28555_28559 = (0);
while(true){
if((i__28555_28559 < count__28554_28558)){
var s_28560 = cljs.core._nth.call(null,chunk__28553_28557,i__28555_28559);
cljs.compiler.emitln.call(null,s_28560);


var G__28561 = seq__28552_28556;
var G__28562 = chunk__28553_28557;
var G__28563 = count__28554_28558;
var G__28564 = (i__28555_28559 + (1));
seq__28552_28556 = G__28561;
chunk__28553_28557 = G__28562;
count__28554_28558 = G__28563;
i__28555_28559 = G__28564;
continue;
} else {
var temp__5735__auto___28565 = cljs.core.seq.call(null,seq__28552_28556);
if(temp__5735__auto___28565){
var seq__28552_28566__$1 = temp__5735__auto___28565;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28552_28566__$1)){
var c__4556__auto___28567 = cljs.core.chunk_first.call(null,seq__28552_28566__$1);
var G__28568 = cljs.core.chunk_rest.call(null,seq__28552_28566__$1);
var G__28569 = c__4556__auto___28567;
var G__28570 = cljs.core.count.call(null,c__4556__auto___28567);
var G__28571 = (0);
seq__28552_28556 = G__28568;
chunk__28553_28557 = G__28569;
count__28554_28558 = G__28570;
i__28555_28559 = G__28571;
continue;
} else {
var s_28572 = cljs.core.first.call(null,seq__28552_28566__$1);
cljs.compiler.emitln.call(null,s_28572);


var G__28573 = cljs.core.next.call(null,seq__28552_28566__$1);
var G__28574 = null;
var G__28575 = (0);
var G__28576 = (0);
seq__28552_28556 = G__28573;
chunk__28553_28557 = G__28574;
count__28554_28558 = G__28575;
i__28555_28559 = G__28576;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"try","try",1380742522),(function (p__28577){
var map__28578 = p__28577;
var map__28578__$1 = (((((!((map__28578 == null))))?(((((map__28578.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28578.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28578):map__28578);
var try$ = cljs.core.get.call(null,map__28578__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var env = cljs.core.get.call(null,map__28578__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var catch$ = cljs.core.get.call(null,map__28578__$1,new cljs.core.Keyword(null,"catch","catch",1038065524));
var name = cljs.core.get.call(null,map__28578__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var finally$ = cljs.core.get.call(null,map__28578__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
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
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__28580,is_loop){
var map__28581 = p__28580;
var map__28581__$1 = (((((!((map__28581 == null))))?(((((map__28581.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28581.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28581):map__28581);
var expr = cljs.core.get.call(null,map__28581__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.call(null,map__28581__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.call(null,map__28581__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var _STAR_lexical_renames_STAR__orig_val__28583_28597 = cljs.compiler._STAR_lexical_renames_STAR_;
var _STAR_lexical_renames_STAR__temp_val__28584_28598 = cljs.core.into.call(null,cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),context))?cljs.core.map.call(null,(function (binding){
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.compiler.hash_scope.call(null,binding),cljs.core.gensym.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"-"].join(''))],null));
}),bindings):null));
(cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__temp_val__28584_28598);

try{var seq__28585_28599 = cljs.core.seq.call(null,bindings);
var chunk__28586_28600 = null;
var count__28587_28601 = (0);
var i__28588_28602 = (0);
while(true){
if((i__28588_28602 < count__28587_28601)){
var map__28593_28603 = cljs.core._nth.call(null,chunk__28586_28600,i__28588_28602);
var map__28593_28604__$1 = (((((!((map__28593_28603 == null))))?(((((map__28593_28603.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28593_28603.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28593_28603):map__28593_28603);
var binding_28605 = map__28593_28604__$1;
var init_28606 = cljs.core.get.call(null,map__28593_28604__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_28605);

cljs.compiler.emitln.call(null," = ",init_28606,";");


var G__28607 = seq__28585_28599;
var G__28608 = chunk__28586_28600;
var G__28609 = count__28587_28601;
var G__28610 = (i__28588_28602 + (1));
seq__28585_28599 = G__28607;
chunk__28586_28600 = G__28608;
count__28587_28601 = G__28609;
i__28588_28602 = G__28610;
continue;
} else {
var temp__5735__auto___28611 = cljs.core.seq.call(null,seq__28585_28599);
if(temp__5735__auto___28611){
var seq__28585_28612__$1 = temp__5735__auto___28611;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28585_28612__$1)){
var c__4556__auto___28613 = cljs.core.chunk_first.call(null,seq__28585_28612__$1);
var G__28614 = cljs.core.chunk_rest.call(null,seq__28585_28612__$1);
var G__28615 = c__4556__auto___28613;
var G__28616 = cljs.core.count.call(null,c__4556__auto___28613);
var G__28617 = (0);
seq__28585_28599 = G__28614;
chunk__28586_28600 = G__28615;
count__28587_28601 = G__28616;
i__28588_28602 = G__28617;
continue;
} else {
var map__28595_28618 = cljs.core.first.call(null,seq__28585_28612__$1);
var map__28595_28619__$1 = (((((!((map__28595_28618 == null))))?(((((map__28595_28618.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28595_28618.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28595_28618):map__28595_28618);
var binding_28620 = map__28595_28619__$1;
var init_28621 = cljs.core.get.call(null,map__28595_28619__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_28620);

cljs.compiler.emitln.call(null," = ",init_28621,";");


var G__28622 = cljs.core.next.call(null,seq__28585_28612__$1);
var G__28623 = null;
var G__28624 = (0);
var G__28625 = (0);
seq__28585_28599 = G__28622;
chunk__28586_28600 = G__28623;
count__28587_28601 = G__28624;
i__28588_28602 = G__28625;
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
}finally {(cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__orig_val__28583_28597);
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"recur","recur",-437573268),(function (p__28626){
var map__28627 = p__28626;
var map__28627__$1 = (((((!((map__28627 == null))))?(((((map__28627.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28627.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28627):map__28627);
var frame = cljs.core.get.call(null,map__28627__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var exprs = cljs.core.get.call(null,map__28627__$1,new cljs.core.Keyword(null,"exprs","exprs",1795829094));
var env = cljs.core.get.call(null,map__28627__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var temps = cljs.core.vec.call(null,cljs.core.take.call(null,cljs.core.count.call(null,exprs),cljs.core.repeatedly.call(null,cljs.core.gensym)));
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(frame);
var n__4613__auto___28629 = cljs.core.count.call(null,exprs);
var i_28630 = (0);
while(true){
if((i_28630 < n__4613__auto___28629)){
cljs.compiler.emitln.call(null,"var ",temps.call(null,i_28630)," = ",exprs.call(null,i_28630),";");

var G__28631 = (i_28630 + (1));
i_28630 = G__28631;
continue;
} else {
}
break;
}

var n__4613__auto___28632 = cljs.core.count.call(null,exprs);
var i_28633 = (0);
while(true){
if((i_28633 < n__4613__auto___28632)){
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,params.call(null,i_28633))," = ",temps.call(null,i_28633),";");

var G__28634 = (i_28633 + (1));
i_28633 = G__28634;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.call(null,"continue;");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"letfn","letfn",-2121022354),(function (p__28635){
var map__28636 = p__28635;
var map__28636__$1 = (((((!((map__28636 == null))))?(((((map__28636.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28636.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28636):map__28636);
var expr = cljs.core.get.call(null,map__28636__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.call(null,map__28636__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.call(null,map__28636__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var seq__28638_28650 = cljs.core.seq.call(null,bindings);
var chunk__28639_28651 = null;
var count__28640_28652 = (0);
var i__28641_28653 = (0);
while(true){
if((i__28641_28653 < count__28640_28652)){
var map__28646_28654 = cljs.core._nth.call(null,chunk__28639_28651,i__28641_28653);
var map__28646_28655__$1 = (((((!((map__28646_28654 == null))))?(((((map__28646_28654.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28646_28654.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28646_28654):map__28646_28654);
var binding_28656 = map__28646_28655__$1;
var init_28657 = cljs.core.get.call(null,map__28646_28655__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_28656)," = ",init_28657,";");


var G__28658 = seq__28638_28650;
var G__28659 = chunk__28639_28651;
var G__28660 = count__28640_28652;
var G__28661 = (i__28641_28653 + (1));
seq__28638_28650 = G__28658;
chunk__28639_28651 = G__28659;
count__28640_28652 = G__28660;
i__28641_28653 = G__28661;
continue;
} else {
var temp__5735__auto___28662 = cljs.core.seq.call(null,seq__28638_28650);
if(temp__5735__auto___28662){
var seq__28638_28663__$1 = temp__5735__auto___28662;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28638_28663__$1)){
var c__4556__auto___28664 = cljs.core.chunk_first.call(null,seq__28638_28663__$1);
var G__28665 = cljs.core.chunk_rest.call(null,seq__28638_28663__$1);
var G__28666 = c__4556__auto___28664;
var G__28667 = cljs.core.count.call(null,c__4556__auto___28664);
var G__28668 = (0);
seq__28638_28650 = G__28665;
chunk__28639_28651 = G__28666;
count__28640_28652 = G__28667;
i__28641_28653 = G__28668;
continue;
} else {
var map__28648_28669 = cljs.core.first.call(null,seq__28638_28663__$1);
var map__28648_28670__$1 = (((((!((map__28648_28669 == null))))?(((((map__28648_28669.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28648_28669.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28648_28669):map__28648_28669);
var binding_28671 = map__28648_28670__$1;
var init_28672 = cljs.core.get.call(null,map__28648_28670__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_28671)," = ",init_28672,";");


var G__28673 = cljs.core.next.call(null,seq__28638_28663__$1);
var G__28674 = null;
var G__28675 = (0);
var G__28676 = (0);
seq__28638_28650 = G__28673;
chunk__28639_28651 = G__28674;
count__28640_28652 = G__28675;
i__28641_28653 = G__28676;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"invoke","invoke",1145927159),(function (p__28679){
var map__28680 = p__28679;
var map__28680__$1 = (((((!((map__28680 == null))))?(((((map__28680.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28680.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28680):map__28680);
var expr = map__28680__$1;
var f = cljs.core.get.call(null,map__28680__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var args = cljs.core.get.call(null,map__28680__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__28680__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
var vec__28682 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count.call(null,args);
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
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,info__$1)),".cljs$core$IFn$_invoke$arity$variadic"].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (p1__28677_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__28677_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
}));
})),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),mfa], null)], null);
} else {
var arities = cljs.core.map.call(null,cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([arity]),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,info__$1)),".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (p1__28678_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__28678_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
}));
})),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.call(null,vec__28682,(0),null);
var variadic_invoke = cljs.core.nth.call(null,vec__28682,(1),null);
var env__27784__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27784__auto__))){
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
var pimpl_28685 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,cljs.compiler.protocol_prefix.call(null,protocol))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,cljs.core.name.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)))),"$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,args))].join('');
cljs.compiler.emits.call(null,cljs.core.first.call(null,args),".",pimpl_28685,"(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",cljs.core.rest.call(null,args))),")");
} else {
if(keyword_QMARK_){
cljs.compiler.emits.call(null,f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count.call(null,args),"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_28686 = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,mfa_28686,args)),(((mfa_28686 === (0)))?null:","),"cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([",cljs.compiler.comma_sep.call(null,cljs.core.drop.call(null,mfa_28686,args)),"], 0))");
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
var fprop_28687 = [".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,args))].join('');
if(cljs.core.truth_(cljs.analyzer._STAR_fn_invoke_direct_STAR_)){
cljs.compiler.emits.call(null,"(",f__$1,fprop_28687," ? ",f__$1,fprop_28687,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,"(",cljs.compiler.comma_sep.call(null,args),"))");
} else {
cljs.compiler.emits.call(null,"(",f__$1,fprop_28687," ? ",f__$1,fprop_28687,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),"))");
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27784__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"new","new",-2085437848),(function (p__28688){
var map__28689 = p__28688;
var map__28689__$1 = (((((!((map__28689 == null))))?(((((map__28689.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28689.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28689):map__28689);
var ctor = cljs.core.get.call(null,map__28689__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var args = cljs.core.get.call(null,map__28689__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__28689__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__27784__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27784__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"(new ",ctor,"(",cljs.compiler.comma_sep.call(null,args),"))");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27784__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set!","set!",-1389817006),(function (p__28691){
var map__28692 = p__28691;
var map__28692__$1 = (((((!((map__28692 == null))))?(((((map__28692.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28692.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28692):map__28692);
var target = cljs.core.get.call(null,map__28692__$1,new cljs.core.Keyword(null,"target","target",253001721));
var val = cljs.core.get.call(null,map__28692__$1,new cljs.core.Keyword(null,"val","val",128701612));
var env = cljs.core.get.call(null,map__28692__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__27784__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27784__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"(",target," = ",val,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27784__auto__))){
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
var map__28694 = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
var map__28694__$1 = (((((!((map__28694 == null))))?(((((map__28694.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28694.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28694):map__28694);
var options = cljs.core.get.call(null,map__28694__$1,new cljs.core.Keyword(null,"options","options",99638489));
var js_dependency_index = cljs.core.get.call(null,map__28694__$1,new cljs.core.Keyword(null,"js-dependency-index","js-dependency-index",-1887042131));
var map__28695 = options;
var map__28695__$1 = (((((!((map__28695 == null))))?(((((map__28695.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28695.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28695):map__28695);
var target = cljs.core.get.call(null,map__28695__$1,new cljs.core.Keyword(null,"target","target",253001721));
var nodejs_rt = cljs.core.get.call(null,map__28695__$1,new cljs.core.Keyword(null,"nodejs-rt","nodejs-rt",-512437071));
var optimizations = cljs.core.get.call(null,map__28695__$1,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854));
var loaded_libs = cljs.compiler.munge.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null));
var loaded_libs_temp = cljs.compiler.munge.call(null,cljs.core.gensym.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null)));
var vec__28696 = (function (){var libs__$1 = cljs.core.remove.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,seen)),cljs.core.filter.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,libs)),deps));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nodejs","nodejs",321212524),target)){
var map__28701 = cljs.core.group_by.call(null,cljs.analyzer.node_module_dep_QMARK_,libs__$1);
var map__28701__$1 = (((((!((map__28701 == null))))?(((((map__28701.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28701.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28701):map__28701);
var node_libs = cljs.core.get.call(null,map__28701__$1,true);
var libs_to_load = cljs.core.get.call(null,map__28701__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_libs,libs_to_load], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,libs__$1], null);
}
})();
var node_libs = cljs.core.nth.call(null,vec__28696,(0),null);
var libs_to_load = cljs.core.nth.call(null,vec__28696,(1),null);
var global_exports_libs = cljs.core.filter.call(null,cljs.analyzer.dep_has_global_exports_QMARK_,libs_to_load);
if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs)))){
cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs_temp," = ",loaded_libs," || cljs.core.set([\"cljs.core\"]);");

cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs," = cljs.core.set([\"cljs.core\"]);");
} else {
}

var seq__28703_28723 = cljs.core.seq.call(null,libs_to_load);
var chunk__28704_28724 = null;
var count__28705_28725 = (0);
var i__28706_28726 = (0);
while(true){
if((i__28706_28726 < count__28705_28725)){
var lib_28727 = cljs.core._nth.call(null,chunk__28704_28724,i__28706_28726);
if(((cljs.analyzer.foreign_dep_QMARK_.call(null,lib_28727)) && ((!(cljs.core.keyword_identical_QMARK_.call(null,optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_28727),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_28727),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_28727),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_28727),"', 'reload-all');");
} else {
if(cljs.core._EQ_.call(null,lib_28727,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_28727),"');");
}

}
}
}


var G__28728 = seq__28703_28723;
var G__28729 = chunk__28704_28724;
var G__28730 = count__28705_28725;
var G__28731 = (i__28706_28726 + (1));
seq__28703_28723 = G__28728;
chunk__28704_28724 = G__28729;
count__28705_28725 = G__28730;
i__28706_28726 = G__28731;
continue;
} else {
var temp__5735__auto___28732 = cljs.core.seq.call(null,seq__28703_28723);
if(temp__5735__auto___28732){
var seq__28703_28733__$1 = temp__5735__auto___28732;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28703_28733__$1)){
var c__4556__auto___28734 = cljs.core.chunk_first.call(null,seq__28703_28733__$1);
var G__28735 = cljs.core.chunk_rest.call(null,seq__28703_28733__$1);
var G__28736 = c__4556__auto___28734;
var G__28737 = cljs.core.count.call(null,c__4556__auto___28734);
var G__28738 = (0);
seq__28703_28723 = G__28735;
chunk__28704_28724 = G__28736;
count__28705_28725 = G__28737;
i__28706_28726 = G__28738;
continue;
} else {
var lib_28739 = cljs.core.first.call(null,seq__28703_28733__$1);
if(((cljs.analyzer.foreign_dep_QMARK_.call(null,lib_28739)) && ((!(cljs.core.keyword_identical_QMARK_.call(null,optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_28739),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_28739),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_28739),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_28739),"', 'reload-all');");
} else {
if(cljs.core._EQ_.call(null,lib_28739,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_28739),"');");
}

}
}
}


var G__28740 = cljs.core.next.call(null,seq__28703_28733__$1);
var G__28741 = null;
var G__28742 = (0);
var G__28743 = (0);
seq__28703_28723 = G__28740;
chunk__28704_28724 = G__28741;
count__28705_28725 = G__28742;
i__28706_28726 = G__28743;
continue;
}
} else {
}
}
break;
}

var seq__28707_28744 = cljs.core.seq.call(null,node_libs);
var chunk__28708_28745 = null;
var count__28709_28746 = (0);
var i__28710_28747 = (0);
while(true){
if((i__28710_28747 < count__28709_28746)){
var lib_28748 = cljs.core._nth.call(null,chunk__28708_28745,i__28710_28747);
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_node_lib.call(null,lib_28748)," = require('",lib_28748,"');");


var G__28749 = seq__28707_28744;
var G__28750 = chunk__28708_28745;
var G__28751 = count__28709_28746;
var G__28752 = (i__28710_28747 + (1));
seq__28707_28744 = G__28749;
chunk__28708_28745 = G__28750;
count__28709_28746 = G__28751;
i__28710_28747 = G__28752;
continue;
} else {
var temp__5735__auto___28753 = cljs.core.seq.call(null,seq__28707_28744);
if(temp__5735__auto___28753){
var seq__28707_28754__$1 = temp__5735__auto___28753;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28707_28754__$1)){
var c__4556__auto___28755 = cljs.core.chunk_first.call(null,seq__28707_28754__$1);
var G__28756 = cljs.core.chunk_rest.call(null,seq__28707_28754__$1);
var G__28757 = c__4556__auto___28755;
var G__28758 = cljs.core.count.call(null,c__4556__auto___28755);
var G__28759 = (0);
seq__28707_28744 = G__28756;
chunk__28708_28745 = G__28757;
count__28709_28746 = G__28758;
i__28710_28747 = G__28759;
continue;
} else {
var lib_28760 = cljs.core.first.call(null,seq__28707_28754__$1);
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_node_lib.call(null,lib_28760)," = require('",lib_28760,"');");


var G__28761 = cljs.core.next.call(null,seq__28707_28754__$1);
var G__28762 = null;
var G__28763 = (0);
var G__28764 = (0);
seq__28707_28744 = G__28761;
chunk__28708_28745 = G__28762;
count__28709_28746 = G__28763;
i__28710_28747 = G__28764;
continue;
}
} else {
}
}
break;
}

var seq__28711_28765 = cljs.core.seq.call(null,global_exports_libs);
var chunk__28712_28766 = null;
var count__28713_28767 = (0);
var i__28714_28768 = (0);
while(true){
if((i__28714_28768 < count__28713_28767)){
var lib_28769 = cljs.core._nth.call(null,chunk__28712_28766,i__28714_28768);
var map__28719_28770 = cljs.core.get.call(null,js_dependency_index,cljs.core.name.call(null,lib_28769));
var map__28719_28771__$1 = (((((!((map__28719_28770 == null))))?(((((map__28719_28770.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28719_28770.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28719_28770):map__28719_28770);
var global_exports_28772 = cljs.core.get.call(null,map__28719_28771__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export.call(null,ns_name,global_exports_28772,lib_28769);


var G__28773 = seq__28711_28765;
var G__28774 = chunk__28712_28766;
var G__28775 = count__28713_28767;
var G__28776 = (i__28714_28768 + (1));
seq__28711_28765 = G__28773;
chunk__28712_28766 = G__28774;
count__28713_28767 = G__28775;
i__28714_28768 = G__28776;
continue;
} else {
var temp__5735__auto___28777 = cljs.core.seq.call(null,seq__28711_28765);
if(temp__5735__auto___28777){
var seq__28711_28778__$1 = temp__5735__auto___28777;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28711_28778__$1)){
var c__4556__auto___28779 = cljs.core.chunk_first.call(null,seq__28711_28778__$1);
var G__28780 = cljs.core.chunk_rest.call(null,seq__28711_28778__$1);
var G__28781 = c__4556__auto___28779;
var G__28782 = cljs.core.count.call(null,c__4556__auto___28779);
var G__28783 = (0);
seq__28711_28765 = G__28780;
chunk__28712_28766 = G__28781;
count__28713_28767 = G__28782;
i__28714_28768 = G__28783;
continue;
} else {
var lib_28784 = cljs.core.first.call(null,seq__28711_28778__$1);
var map__28721_28785 = cljs.core.get.call(null,js_dependency_index,cljs.core.name.call(null,lib_28784));
var map__28721_28786__$1 = (((((!((map__28721_28785 == null))))?(((((map__28721_28785.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28721_28785.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28721_28785):map__28721_28785);
var global_exports_28787 = cljs.core.get.call(null,map__28721_28786__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export.call(null,ns_name,global_exports_28787,lib_28784);


var G__28788 = cljs.core.next.call(null,seq__28711_28778__$1);
var G__28789 = null;
var G__28790 = (0);
var G__28791 = (0);
seq__28711_28765 = G__28788;
chunk__28712_28766 = G__28789;
count__28713_28767 = G__28790;
i__28714_28768 = G__28791;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns*","ns*",200417856),(function (p__28792){
var map__28793 = p__28792;
var map__28793__$1 = (((((!((map__28793 == null))))?(((((map__28793.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28793.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28793):map__28793);
var name = cljs.core.get.call(null,map__28793__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__28793__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__28793__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__28793__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__28793__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__28793__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.call(null,map__28793__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
cljs.compiler.load_libs.call(null,requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

cljs.compiler.load_libs.call(null,uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-env","repl-env",-1976503928).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.call(null,"'nil';");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns","ns",441598760),(function (p__28795){
var map__28796 = p__28795;
var map__28796__$1 = (((((!((map__28796 == null))))?(((((map__28796.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28796.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28796):map__28796);
var name = cljs.core.get.call(null,map__28796__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__28796__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__28796__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__28796__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__28796__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__28796__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.call(null,map__28796__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"deftype","deftype",340294561),(function (p__28798){
var map__28799 = p__28798;
var map__28799__$1 = (((((!((map__28799 == null))))?(((((map__28799.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28799.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28799):map__28799);
var t = cljs.core.get.call(null,map__28799__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__28799__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__28799__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__28799__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__28799__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.map.call(null,cljs.compiler.munge,fields);
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__28801_28825 = cljs.core.seq.call(null,protocols);
var chunk__28802_28826 = null;
var count__28803_28827 = (0);
var i__28804_28828 = (0);
while(true){
if((i__28804_28828 < count__28803_28827)){
var protocol_28829 = cljs.core._nth.call(null,chunk__28802_28826,i__28804_28828);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_28829)),"}");


var G__28830 = seq__28801_28825;
var G__28831 = chunk__28802_28826;
var G__28832 = count__28803_28827;
var G__28833 = (i__28804_28828 + (1));
seq__28801_28825 = G__28830;
chunk__28802_28826 = G__28831;
count__28803_28827 = G__28832;
i__28804_28828 = G__28833;
continue;
} else {
var temp__5735__auto___28834 = cljs.core.seq.call(null,seq__28801_28825);
if(temp__5735__auto___28834){
var seq__28801_28835__$1 = temp__5735__auto___28834;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28801_28835__$1)){
var c__4556__auto___28836 = cljs.core.chunk_first.call(null,seq__28801_28835__$1);
var G__28837 = cljs.core.chunk_rest.call(null,seq__28801_28835__$1);
var G__28838 = c__4556__auto___28836;
var G__28839 = cljs.core.count.call(null,c__4556__auto___28836);
var G__28840 = (0);
seq__28801_28825 = G__28837;
chunk__28802_28826 = G__28838;
count__28803_28827 = G__28839;
i__28804_28828 = G__28840;
continue;
} else {
var protocol_28841 = cljs.core.first.call(null,seq__28801_28835__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_28841)),"}");


var G__28842 = cljs.core.next.call(null,seq__28801_28835__$1);
var G__28843 = null;
var G__28844 = (0);
var G__28845 = (0);
seq__28801_28825 = G__28842;
chunk__28802_28826 = G__28843;
count__28803_28827 = G__28844;
i__28804_28828 = G__28845;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__28805_28846 = cljs.core.seq.call(null,fields__$1);
var chunk__28806_28847 = null;
var count__28807_28848 = (0);
var i__28808_28849 = (0);
while(true){
if((i__28808_28849 < count__28807_28848)){
var fld_28850 = cljs.core._nth.call(null,chunk__28806_28847,i__28808_28849);
cljs.compiler.emitln.call(null,"this.",fld_28850," = ",fld_28850,";");


var G__28851 = seq__28805_28846;
var G__28852 = chunk__28806_28847;
var G__28853 = count__28807_28848;
var G__28854 = (i__28808_28849 + (1));
seq__28805_28846 = G__28851;
chunk__28806_28847 = G__28852;
count__28807_28848 = G__28853;
i__28808_28849 = G__28854;
continue;
} else {
var temp__5735__auto___28855 = cljs.core.seq.call(null,seq__28805_28846);
if(temp__5735__auto___28855){
var seq__28805_28856__$1 = temp__5735__auto___28855;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28805_28856__$1)){
var c__4556__auto___28857 = cljs.core.chunk_first.call(null,seq__28805_28856__$1);
var G__28858 = cljs.core.chunk_rest.call(null,seq__28805_28856__$1);
var G__28859 = c__4556__auto___28857;
var G__28860 = cljs.core.count.call(null,c__4556__auto___28857);
var G__28861 = (0);
seq__28805_28846 = G__28858;
chunk__28806_28847 = G__28859;
count__28807_28848 = G__28860;
i__28808_28849 = G__28861;
continue;
} else {
var fld_28862 = cljs.core.first.call(null,seq__28805_28856__$1);
cljs.compiler.emitln.call(null,"this.",fld_28862," = ",fld_28862,";");


var G__28863 = cljs.core.next.call(null,seq__28805_28856__$1);
var G__28864 = null;
var G__28865 = (0);
var G__28866 = (0);
seq__28805_28846 = G__28863;
chunk__28806_28847 = G__28864;
count__28807_28848 = G__28865;
i__28808_28849 = G__28866;
continue;
}
} else {
}
}
break;
}

var seq__28809_28867 = cljs.core.seq.call(null,pmasks);
var chunk__28810_28868 = null;
var count__28811_28869 = (0);
var i__28812_28870 = (0);
while(true){
if((i__28812_28870 < count__28811_28869)){
var vec__28819_28871 = cljs.core._nth.call(null,chunk__28810_28868,i__28812_28870);
var pno_28872 = cljs.core.nth.call(null,vec__28819_28871,(0),null);
var pmask_28873 = cljs.core.nth.call(null,vec__28819_28871,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_28872,"$ = ",pmask_28873,";");


var G__28874 = seq__28809_28867;
var G__28875 = chunk__28810_28868;
var G__28876 = count__28811_28869;
var G__28877 = (i__28812_28870 + (1));
seq__28809_28867 = G__28874;
chunk__28810_28868 = G__28875;
count__28811_28869 = G__28876;
i__28812_28870 = G__28877;
continue;
} else {
var temp__5735__auto___28878 = cljs.core.seq.call(null,seq__28809_28867);
if(temp__5735__auto___28878){
var seq__28809_28879__$1 = temp__5735__auto___28878;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28809_28879__$1)){
var c__4556__auto___28880 = cljs.core.chunk_first.call(null,seq__28809_28879__$1);
var G__28881 = cljs.core.chunk_rest.call(null,seq__28809_28879__$1);
var G__28882 = c__4556__auto___28880;
var G__28883 = cljs.core.count.call(null,c__4556__auto___28880);
var G__28884 = (0);
seq__28809_28867 = G__28881;
chunk__28810_28868 = G__28882;
count__28811_28869 = G__28883;
i__28812_28870 = G__28884;
continue;
} else {
var vec__28822_28885 = cljs.core.first.call(null,seq__28809_28879__$1);
var pno_28886 = cljs.core.nth.call(null,vec__28822_28885,(0),null);
var pmask_28887 = cljs.core.nth.call(null,vec__28822_28885,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_28886,"$ = ",pmask_28887,";");


var G__28888 = cljs.core.next.call(null,seq__28809_28879__$1);
var G__28889 = null;
var G__28890 = (0);
var G__28891 = (0);
seq__28809_28867 = G__28888;
chunk__28810_28868 = G__28889;
count__28811_28869 = G__28890;
i__28812_28870 = G__28891;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"defrecord","defrecord",-1367493418),(function (p__28892){
var map__28893 = p__28892;
var map__28893__$1 = (((((!((map__28893 == null))))?(((((map__28893.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28893.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28893):map__28893);
var t = cljs.core.get.call(null,map__28893__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__28893__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__28893__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__28893__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__28893__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.concat.call(null,cljs.core.map.call(null,cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)], null));
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__28895_28919 = cljs.core.seq.call(null,protocols);
var chunk__28896_28920 = null;
var count__28897_28921 = (0);
var i__28898_28922 = (0);
while(true){
if((i__28898_28922 < count__28897_28921)){
var protocol_28923 = cljs.core._nth.call(null,chunk__28896_28920,i__28898_28922);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_28923)),"}");


var G__28924 = seq__28895_28919;
var G__28925 = chunk__28896_28920;
var G__28926 = count__28897_28921;
var G__28927 = (i__28898_28922 + (1));
seq__28895_28919 = G__28924;
chunk__28896_28920 = G__28925;
count__28897_28921 = G__28926;
i__28898_28922 = G__28927;
continue;
} else {
var temp__5735__auto___28928 = cljs.core.seq.call(null,seq__28895_28919);
if(temp__5735__auto___28928){
var seq__28895_28929__$1 = temp__5735__auto___28928;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28895_28929__$1)){
var c__4556__auto___28930 = cljs.core.chunk_first.call(null,seq__28895_28929__$1);
var G__28931 = cljs.core.chunk_rest.call(null,seq__28895_28929__$1);
var G__28932 = c__4556__auto___28930;
var G__28933 = cljs.core.count.call(null,c__4556__auto___28930);
var G__28934 = (0);
seq__28895_28919 = G__28931;
chunk__28896_28920 = G__28932;
count__28897_28921 = G__28933;
i__28898_28922 = G__28934;
continue;
} else {
var protocol_28935 = cljs.core.first.call(null,seq__28895_28929__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_28935)),"}");


var G__28936 = cljs.core.next.call(null,seq__28895_28929__$1);
var G__28937 = null;
var G__28938 = (0);
var G__28939 = (0);
seq__28895_28919 = G__28936;
chunk__28896_28920 = G__28937;
count__28897_28921 = G__28938;
i__28898_28922 = G__28939;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__28899_28940 = cljs.core.seq.call(null,fields__$1);
var chunk__28900_28941 = null;
var count__28901_28942 = (0);
var i__28902_28943 = (0);
while(true){
if((i__28902_28943 < count__28901_28942)){
var fld_28944 = cljs.core._nth.call(null,chunk__28900_28941,i__28902_28943);
cljs.compiler.emitln.call(null,"this.",fld_28944," = ",fld_28944,";");


var G__28945 = seq__28899_28940;
var G__28946 = chunk__28900_28941;
var G__28947 = count__28901_28942;
var G__28948 = (i__28902_28943 + (1));
seq__28899_28940 = G__28945;
chunk__28900_28941 = G__28946;
count__28901_28942 = G__28947;
i__28902_28943 = G__28948;
continue;
} else {
var temp__5735__auto___28949 = cljs.core.seq.call(null,seq__28899_28940);
if(temp__5735__auto___28949){
var seq__28899_28950__$1 = temp__5735__auto___28949;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28899_28950__$1)){
var c__4556__auto___28951 = cljs.core.chunk_first.call(null,seq__28899_28950__$1);
var G__28952 = cljs.core.chunk_rest.call(null,seq__28899_28950__$1);
var G__28953 = c__4556__auto___28951;
var G__28954 = cljs.core.count.call(null,c__4556__auto___28951);
var G__28955 = (0);
seq__28899_28940 = G__28952;
chunk__28900_28941 = G__28953;
count__28901_28942 = G__28954;
i__28902_28943 = G__28955;
continue;
} else {
var fld_28956 = cljs.core.first.call(null,seq__28899_28950__$1);
cljs.compiler.emitln.call(null,"this.",fld_28956," = ",fld_28956,";");


var G__28957 = cljs.core.next.call(null,seq__28899_28950__$1);
var G__28958 = null;
var G__28959 = (0);
var G__28960 = (0);
seq__28899_28940 = G__28957;
chunk__28900_28941 = G__28958;
count__28901_28942 = G__28959;
i__28902_28943 = G__28960;
continue;
}
} else {
}
}
break;
}

var seq__28903_28961 = cljs.core.seq.call(null,pmasks);
var chunk__28904_28962 = null;
var count__28905_28963 = (0);
var i__28906_28964 = (0);
while(true){
if((i__28906_28964 < count__28905_28963)){
var vec__28913_28965 = cljs.core._nth.call(null,chunk__28904_28962,i__28906_28964);
var pno_28966 = cljs.core.nth.call(null,vec__28913_28965,(0),null);
var pmask_28967 = cljs.core.nth.call(null,vec__28913_28965,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_28966,"$ = ",pmask_28967,";");


var G__28968 = seq__28903_28961;
var G__28969 = chunk__28904_28962;
var G__28970 = count__28905_28963;
var G__28971 = (i__28906_28964 + (1));
seq__28903_28961 = G__28968;
chunk__28904_28962 = G__28969;
count__28905_28963 = G__28970;
i__28906_28964 = G__28971;
continue;
} else {
var temp__5735__auto___28972 = cljs.core.seq.call(null,seq__28903_28961);
if(temp__5735__auto___28972){
var seq__28903_28973__$1 = temp__5735__auto___28972;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28903_28973__$1)){
var c__4556__auto___28974 = cljs.core.chunk_first.call(null,seq__28903_28973__$1);
var G__28975 = cljs.core.chunk_rest.call(null,seq__28903_28973__$1);
var G__28976 = c__4556__auto___28974;
var G__28977 = cljs.core.count.call(null,c__4556__auto___28974);
var G__28978 = (0);
seq__28903_28961 = G__28975;
chunk__28904_28962 = G__28976;
count__28905_28963 = G__28977;
i__28906_28964 = G__28978;
continue;
} else {
var vec__28916_28979 = cljs.core.first.call(null,seq__28903_28973__$1);
var pno_28980 = cljs.core.nth.call(null,vec__28916_28979,(0),null);
var pmask_28981 = cljs.core.nth.call(null,vec__28916_28979,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_28980,"$ = ",pmask_28981,";");


var G__28982 = cljs.core.next.call(null,seq__28903_28973__$1);
var G__28983 = null;
var G__28984 = (0);
var G__28985 = (0);
seq__28903_28961 = G__28982;
chunk__28904_28962 = G__28983;
count__28905_28963 = G__28984;
i__28906_28964 = G__28985;
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
cljs.compiler.emit_dot = (function cljs$compiler$emit_dot(p__28986){
var map__28987 = p__28986;
var map__28987__$1 = (((((!((map__28987 == null))))?(((((map__28987.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28987.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28987):map__28987);
var target = cljs.core.get.call(null,map__28987__$1,new cljs.core.Keyword(null,"target","target",253001721));
var field = cljs.core.get.call(null,map__28987__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var method = cljs.core.get.call(null,map__28987__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.call(null,map__28987__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__28987__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__27784__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27784__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(field)){
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,field,cljs.core.PersistentHashSet.EMPTY));
} else {
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,method,cljs.core.PersistentHashSet.EMPTY),"(",cljs.compiler.comma_sep.call(null,args),")");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27784__auto__))){
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js","js",1768080579),(function (p__28989){
var map__28990 = p__28989;
var map__28990__$1 = (((((!((map__28990 == null))))?(((((map__28990.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28990.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28990):map__28990);
var op = cljs.core.get.call(null,map__28990__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var env = cljs.core.get.call(null,map__28990__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var code = cljs.core.get.call(null,map__28990__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var segs = cljs.core.get.call(null,map__28990__$1,new cljs.core.Keyword(null,"segs","segs",-1940299576));
var args = cljs.core.get.call(null,map__28990__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_((function (){var and__4115__auto__ = code;
if(cljs.core.truth_(and__4115__auto__)){
return goog.string.startsWith(clojure.string.trim.call(null,code),"/*");
} else {
return and__4115__auto__;
}
})())){
return cljs.compiler.emits.call(null,code);
} else {
var env__27784__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27784__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(code)){
cljs.compiler.emits.call(null,code);
} else {
cljs.compiler.emits.call(null,cljs.core.interleave.call(null,cljs.core.concat.call(null,segs,cljs.core.repeat.call(null,null)),cljs.core.concat.call(null,args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null))));
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27784__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.emit_constants_table = (function cljs$compiler$emit_constants_table(table){
cljs.compiler.emitln.call(null,"goog.provide('",cljs.compiler.munge.call(null,cljs.analyzer.constants_ns_sym),"');");

cljs.compiler.emitln.call(null,"goog.require('cljs.core');");

var seq__28996 = cljs.core.seq.call(null,table);
var chunk__28997 = null;
var count__28998 = (0);
var i__28999 = (0);
while(true){
if((i__28999 < count__28998)){
var vec__29006 = cljs.core._nth.call(null,chunk__28997,i__28999);
var sym = cljs.core.nth.call(null,vec__29006,(0),null);
var value = cljs.core.nth.call(null,vec__29006,(1),null);
var ns_29012 = cljs.core.namespace.call(null,sym);
var name_29013 = cljs.core.name.call(null,sym);
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


var G__29014 = seq__28996;
var G__29015 = chunk__28997;
var G__29016 = count__28998;
var G__29017 = (i__28999 + (1));
seq__28996 = G__29014;
chunk__28997 = G__29015;
count__28998 = G__29016;
i__28999 = G__29017;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__28996);
if(temp__5735__auto__){
var seq__28996__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28996__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__28996__$1);
var G__29018 = cljs.core.chunk_rest.call(null,seq__28996__$1);
var G__29019 = c__4556__auto__;
var G__29020 = cljs.core.count.call(null,c__4556__auto__);
var G__29021 = (0);
seq__28996 = G__29018;
chunk__28997 = G__29019;
count__28998 = G__29020;
i__28999 = G__29021;
continue;
} else {
var vec__29009 = cljs.core.first.call(null,seq__28996__$1);
var sym = cljs.core.nth.call(null,vec__29009,(0),null);
var value = cljs.core.nth.call(null,vec__29009,(1),null);
var ns_29022 = cljs.core.namespace.call(null,sym);
var name_29023 = cljs.core.name.call(null,sym);
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


var G__29024 = cljs.core.next.call(null,seq__28996__$1);
var G__29025 = null;
var G__29026 = (0);
var G__29027 = (0);
seq__28996 = G__29024;
chunk__28997 = G__29025;
count__28998 = G__29026;
i__28999 = G__29027;
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
var G__29029 = arguments.length;
switch (G__29029) {
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
var k_29034 = cljs.core.first.call(null,ks);
var vec__29030_29035 = cljs.core.conj.call(null,prefix,k_29034);
var top_29036 = cljs.core.nth.call(null,vec__29030_29035,(0),null);
var prefix_SINGLEQUOTE__29037 = vec__29030_29035;
if(((cljs.core.not_EQ_.call(null,new cljs.core.Symbol(null,"prototype","prototype",519166522,null),k_29034)) && ((cljs.core.get_in.call(null,known_externs,prefix_SINGLEQUOTE__29037) == null)))){
if((!(((cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,top_level),top_29036)) || (cljs.core.contains_QMARK_.call(null,known_externs,top_29036)))))){
cljs.compiler.emitln.call(null,"var ",clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.compiler.munge,prefix_SINGLEQUOTE__29037)),";");

cljs.core.swap_BANG_.call(null,top_level,cljs.core.conj,top_29036);
} else {
cljs.compiler.emitln.call(null,clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.compiler.munge,prefix_SINGLEQUOTE__29037)),";");
}
} else {
}

var m_29038 = cljs.core.get.call(null,externs,k_29034);
if(cljs.core.empty_QMARK_.call(null,m_29038)){
} else {
cljs.compiler.emit_externs.call(null,prefix_SINGLEQUOTE__29037,m_29038,top_level,known_externs);
}

var G__29039 = cljs.core.next.call(null,ks);
ks = G__29039;
continue;
} else {
return null;
}
break;
}
}));

(cljs.compiler.emit_externs.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=compiler.js.map?rel=1593965193429
