// Compiled by ClojureScript 1.10.764 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__36843){
var map__36844 = p__36843;
var map__36844__$1 = (((((!((map__36844 == null))))?(((((map__36844.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36844.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36844):map__36844);
var m = map__36844__$1;
var n = cljs.core.get.call(null,map__36844__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__36844__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__36846_36878 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36847_36879 = null;
var count__36848_36880 = (0);
var i__36849_36881 = (0);
while(true){
if((i__36849_36881 < count__36848_36880)){
var f_36882 = cljs.core._nth.call(null,chunk__36847_36879,i__36849_36881);
cljs.core.println.call(null,"  ",f_36882);


var G__36883 = seq__36846_36878;
var G__36884 = chunk__36847_36879;
var G__36885 = count__36848_36880;
var G__36886 = (i__36849_36881 + (1));
seq__36846_36878 = G__36883;
chunk__36847_36879 = G__36884;
count__36848_36880 = G__36885;
i__36849_36881 = G__36886;
continue;
} else {
var temp__5735__auto___36887 = cljs.core.seq.call(null,seq__36846_36878);
if(temp__5735__auto___36887){
var seq__36846_36888__$1 = temp__5735__auto___36887;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36846_36888__$1)){
var c__4556__auto___36889 = cljs.core.chunk_first.call(null,seq__36846_36888__$1);
var G__36890 = cljs.core.chunk_rest.call(null,seq__36846_36888__$1);
var G__36891 = c__4556__auto___36889;
var G__36892 = cljs.core.count.call(null,c__4556__auto___36889);
var G__36893 = (0);
seq__36846_36878 = G__36890;
chunk__36847_36879 = G__36891;
count__36848_36880 = G__36892;
i__36849_36881 = G__36893;
continue;
} else {
var f_36894 = cljs.core.first.call(null,seq__36846_36888__$1);
cljs.core.println.call(null,"  ",f_36894);


var G__36895 = cljs.core.next.call(null,seq__36846_36888__$1);
var G__36896 = null;
var G__36897 = (0);
var G__36898 = (0);
seq__36846_36878 = G__36895;
chunk__36847_36879 = G__36896;
count__36848_36880 = G__36897;
i__36849_36881 = G__36898;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_36899 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_36899);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_36899)))?cljs.core.second.call(null,arglists_36899):arglists_36899));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__36850_36900 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36851_36901 = null;
var count__36852_36902 = (0);
var i__36853_36903 = (0);
while(true){
if((i__36853_36903 < count__36852_36902)){
var vec__36864_36904 = cljs.core._nth.call(null,chunk__36851_36901,i__36853_36903);
var name_36905 = cljs.core.nth.call(null,vec__36864_36904,(0),null);
var map__36867_36906 = cljs.core.nth.call(null,vec__36864_36904,(1),null);
var map__36867_36907__$1 = (((((!((map__36867_36906 == null))))?(((((map__36867_36906.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36867_36906.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36867_36906):map__36867_36906);
var doc_36908 = cljs.core.get.call(null,map__36867_36907__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36909 = cljs.core.get.call(null,map__36867_36907__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_36905);

cljs.core.println.call(null," ",arglists_36909);

if(cljs.core.truth_(doc_36908)){
cljs.core.println.call(null," ",doc_36908);
} else {
}


var G__36910 = seq__36850_36900;
var G__36911 = chunk__36851_36901;
var G__36912 = count__36852_36902;
var G__36913 = (i__36853_36903 + (1));
seq__36850_36900 = G__36910;
chunk__36851_36901 = G__36911;
count__36852_36902 = G__36912;
i__36853_36903 = G__36913;
continue;
} else {
var temp__5735__auto___36914 = cljs.core.seq.call(null,seq__36850_36900);
if(temp__5735__auto___36914){
var seq__36850_36915__$1 = temp__5735__auto___36914;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36850_36915__$1)){
var c__4556__auto___36916 = cljs.core.chunk_first.call(null,seq__36850_36915__$1);
var G__36917 = cljs.core.chunk_rest.call(null,seq__36850_36915__$1);
var G__36918 = c__4556__auto___36916;
var G__36919 = cljs.core.count.call(null,c__4556__auto___36916);
var G__36920 = (0);
seq__36850_36900 = G__36917;
chunk__36851_36901 = G__36918;
count__36852_36902 = G__36919;
i__36853_36903 = G__36920;
continue;
} else {
var vec__36869_36921 = cljs.core.first.call(null,seq__36850_36915__$1);
var name_36922 = cljs.core.nth.call(null,vec__36869_36921,(0),null);
var map__36872_36923 = cljs.core.nth.call(null,vec__36869_36921,(1),null);
var map__36872_36924__$1 = (((((!((map__36872_36923 == null))))?(((((map__36872_36923.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36872_36923.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36872_36923):map__36872_36923);
var doc_36925 = cljs.core.get.call(null,map__36872_36924__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36926 = cljs.core.get.call(null,map__36872_36924__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_36922);

cljs.core.println.call(null," ",arglists_36926);

if(cljs.core.truth_(doc_36925)){
cljs.core.println.call(null," ",doc_36925);
} else {
}


var G__36927 = cljs.core.next.call(null,seq__36850_36915__$1);
var G__36928 = null;
var G__36929 = (0);
var G__36930 = (0);
seq__36850_36900 = G__36927;
chunk__36851_36901 = G__36928;
count__36852_36902 = G__36929;
i__36853_36903 = G__36930;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.call(null,"Spec");

var seq__36874 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__36875 = null;
var count__36876 = (0);
var i__36877 = (0);
while(true){
if((i__36877 < count__36876)){
var role = cljs.core._nth.call(null,chunk__36875,i__36877);
var temp__5735__auto___36931__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___36931__$1)){
var spec_36932 = temp__5735__auto___36931__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_36932));
} else {
}


var G__36933 = seq__36874;
var G__36934 = chunk__36875;
var G__36935 = count__36876;
var G__36936 = (i__36877 + (1));
seq__36874 = G__36933;
chunk__36875 = G__36934;
count__36876 = G__36935;
i__36877 = G__36936;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq.call(null,seq__36874);
if(temp__5735__auto____$1){
var seq__36874__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36874__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__36874__$1);
var G__36937 = cljs.core.chunk_rest.call(null,seq__36874__$1);
var G__36938 = c__4556__auto__;
var G__36939 = cljs.core.count.call(null,c__4556__auto__);
var G__36940 = (0);
seq__36874 = G__36937;
chunk__36875 = G__36938;
count__36876 = G__36939;
i__36877 = G__36940;
continue;
} else {
var role = cljs.core.first.call(null,seq__36874__$1);
var temp__5735__auto___36941__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___36941__$2)){
var spec_36942 = temp__5735__auto___36941__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_36942));
} else {
}


var G__36943 = cljs.core.next.call(null,seq__36874__$1);
var G__36944 = null;
var G__36945 = (0);
var G__36946 = (0);
seq__36874 = G__36943;
chunk__36875 = G__36944;
count__36876 = G__36945;
i__36877 = G__36946;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.call(null,"js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message.call(null,t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data.call(null,t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})());
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__36947 = cljs.core.conj.call(null,via,t);
var G__36948 = cljs.core.ex_cause.call(null,t);
via = G__36947;
t = G__36948;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek.call(null,via);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec.call(null,cljs.core.map.call(null,base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message.call(null,root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data.call(null,root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})());
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__36951 = datafied_throwable;
var map__36951__$1 = (((((!((map__36951 == null))))?(((((map__36951.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36951.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36951):map__36951);
var via = cljs.core.get.call(null,map__36951__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__36951__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__36951__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__36952 = cljs.core.last.call(null,via);
var map__36952__$1 = (((((!((map__36952 == null))))?(((((map__36952.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36952.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36952):map__36952);
var type = cljs.core.get.call(null,map__36952__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__36952__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__36952__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__36953 = data;
var map__36953__$1 = (((((!((map__36953 == null))))?(((((map__36953.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36953.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36953):map__36953);
var problems = cljs.core.get.call(null,map__36953__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__36953__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__36953__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__36954 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__36954__$1 = (((((!((map__36954 == null))))?(((((map__36954.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36954.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36954):map__36954);
var top_data = map__36954__$1;
var source = cljs.core.get.call(null,map__36954__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__36959 = phase;
var G__36959__$1 = (((G__36959 instanceof cljs.core.Keyword))?G__36959.fqn:null);
switch (G__36959__$1) {
case "read-source":
var map__36960 = data;
var map__36960__$1 = (((((!((map__36960 == null))))?(((((map__36960.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36960.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36960):map__36960);
var line = cljs.core.get.call(null,map__36960__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__36960__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__36962 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__36962__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__36962,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__36962);
var G__36962__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__36962__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__36962__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__36962__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__36962__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__36963 = top_data;
var G__36963__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__36963,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__36963);
var G__36963__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__36963__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__36963__$1);
var G__36963__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__36963__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__36963__$2);
var G__36963__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__36963__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__36963__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__36963__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__36963__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__36964 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__36964,(0),null);
var method = cljs.core.nth.call(null,vec__36964,(1),null);
var file = cljs.core.nth.call(null,vec__36964,(2),null);
var line = cljs.core.nth.call(null,vec__36964,(3),null);
var G__36967 = top_data;
var G__36967__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__36967,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__36967);
var G__36967__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__36967__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__36967__$1);
var G__36967__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.call(null,G__36967__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__36967__$2);
var G__36967__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__36967__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__36967__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__36967__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__36967__$4;
}

break;
case "execution":
var vec__36968 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__36968,(0),null);
var method = cljs.core.nth.call(null,vec__36968,(1),null);
var file = cljs.core.nth.call(null,vec__36968,(2),null);
var line = cljs.core.nth.call(null,vec__36968,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,(function (p1__36950_SHARP_){
var or__4126__auto__ = (p1__36950_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__36950_SHARP_);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__36971 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__36971__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__36971,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__36971);
var G__36971__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__36971__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__36971__$1);
var G__36971__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
}
})())?cljs.core.assoc.call(null,G__36971__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__36971__$2);
var G__36971__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__36971__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__36971__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__36971__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__36971__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36959__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__36975){
var map__36976 = p__36975;
var map__36976__$1 = (((((!((map__36976 == null))))?(((((map__36976.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36976.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36976):map__36976);
var triage_data = map__36976__$1;
var phase = cljs.core.get.call(null,map__36976__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__36976__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__36976__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__36976__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__36976__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__36976__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__36976__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__36976__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = source;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = line;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__4126__auto__ = class$;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__36978 = phase;
var G__36978__$1 = (((G__36978 instanceof cljs.core.Keyword))?G__36978.fqn:null);
switch (G__36978__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__36979_36988 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__36980_36989 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__36981_36990 = true;
var _STAR_print_fn_STAR__temp_val__36982_36991 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__36981_36990);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__36982_36991);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__36973_SHARP_){
return cljs.core.dissoc.call(null,p1__36973_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__36980_36989);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__36979_36988);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():format.call(null,"%s\n",cause)));

break;
case "macroexpansion":
return format.call(null,"Unexpected error%s macroexpanding %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compile-syntax-check":
return format.call(null,"Syntax error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compilation":
return format.call(null,"Unexpected error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "read-eval-result":
return format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "print-eval-result":
return format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "execution":
if(cljs.core.truth_(spec)){
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__36983_36992 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__36984_36993 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__36985_36994 = true;
var _STAR_print_fn_STAR__temp_val__36986_36995 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__36985_36994);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__36986_36995);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__36974_SHARP_){
return cljs.core.dissoc.call(null,p1__36974_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__36984_36993);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__36983_36992);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36978__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map?rel=1593965206647
