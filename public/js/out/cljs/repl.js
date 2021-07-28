// Compiled by ClojureScript 1.10.764 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__31938){
var map__31939 = p__31938;
var map__31939__$1 = (((((!((map__31939 == null))))?(((((map__31939.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31939.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31939):map__31939);
var m = map__31939__$1;
var n = cljs.core.get.call(null,map__31939__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__31939__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__31941_31973 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__31942_31974 = null;
var count__31943_31975 = (0);
var i__31944_31976 = (0);
while(true){
if((i__31944_31976 < count__31943_31975)){
var f_31977 = cljs.core._nth.call(null,chunk__31942_31974,i__31944_31976);
cljs.core.println.call(null,"  ",f_31977);


var G__31978 = seq__31941_31973;
var G__31979 = chunk__31942_31974;
var G__31980 = count__31943_31975;
var G__31981 = (i__31944_31976 + (1));
seq__31941_31973 = G__31978;
chunk__31942_31974 = G__31979;
count__31943_31975 = G__31980;
i__31944_31976 = G__31981;
continue;
} else {
var temp__5735__auto___31982 = cljs.core.seq.call(null,seq__31941_31973);
if(temp__5735__auto___31982){
var seq__31941_31983__$1 = temp__5735__auto___31982;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31941_31983__$1)){
var c__4556__auto___31984 = cljs.core.chunk_first.call(null,seq__31941_31983__$1);
var G__31985 = cljs.core.chunk_rest.call(null,seq__31941_31983__$1);
var G__31986 = c__4556__auto___31984;
var G__31987 = cljs.core.count.call(null,c__4556__auto___31984);
var G__31988 = (0);
seq__31941_31973 = G__31985;
chunk__31942_31974 = G__31986;
count__31943_31975 = G__31987;
i__31944_31976 = G__31988;
continue;
} else {
var f_31989 = cljs.core.first.call(null,seq__31941_31983__$1);
cljs.core.println.call(null,"  ",f_31989);


var G__31990 = cljs.core.next.call(null,seq__31941_31983__$1);
var G__31991 = null;
var G__31992 = (0);
var G__31993 = (0);
seq__31941_31973 = G__31990;
chunk__31942_31974 = G__31991;
count__31943_31975 = G__31992;
i__31944_31976 = G__31993;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_31994 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_31994);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_31994)))?cljs.core.second.call(null,arglists_31994):arglists_31994));
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
var seq__31945_31995 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__31946_31996 = null;
var count__31947_31997 = (0);
var i__31948_31998 = (0);
while(true){
if((i__31948_31998 < count__31947_31997)){
var vec__31959_31999 = cljs.core._nth.call(null,chunk__31946_31996,i__31948_31998);
var name_32000 = cljs.core.nth.call(null,vec__31959_31999,(0),null);
var map__31962_32001 = cljs.core.nth.call(null,vec__31959_31999,(1),null);
var map__31962_32002__$1 = (((((!((map__31962_32001 == null))))?(((((map__31962_32001.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31962_32001.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31962_32001):map__31962_32001);
var doc_32003 = cljs.core.get.call(null,map__31962_32002__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_32004 = cljs.core.get.call(null,map__31962_32002__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_32000);

cljs.core.println.call(null," ",arglists_32004);

if(cljs.core.truth_(doc_32003)){
cljs.core.println.call(null," ",doc_32003);
} else {
}


var G__32005 = seq__31945_31995;
var G__32006 = chunk__31946_31996;
var G__32007 = count__31947_31997;
var G__32008 = (i__31948_31998 + (1));
seq__31945_31995 = G__32005;
chunk__31946_31996 = G__32006;
count__31947_31997 = G__32007;
i__31948_31998 = G__32008;
continue;
} else {
var temp__5735__auto___32009 = cljs.core.seq.call(null,seq__31945_31995);
if(temp__5735__auto___32009){
var seq__31945_32010__$1 = temp__5735__auto___32009;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31945_32010__$1)){
var c__4556__auto___32011 = cljs.core.chunk_first.call(null,seq__31945_32010__$1);
var G__32012 = cljs.core.chunk_rest.call(null,seq__31945_32010__$1);
var G__32013 = c__4556__auto___32011;
var G__32014 = cljs.core.count.call(null,c__4556__auto___32011);
var G__32015 = (0);
seq__31945_31995 = G__32012;
chunk__31946_31996 = G__32013;
count__31947_31997 = G__32014;
i__31948_31998 = G__32015;
continue;
} else {
var vec__31964_32016 = cljs.core.first.call(null,seq__31945_32010__$1);
var name_32017 = cljs.core.nth.call(null,vec__31964_32016,(0),null);
var map__31967_32018 = cljs.core.nth.call(null,vec__31964_32016,(1),null);
var map__31967_32019__$1 = (((((!((map__31967_32018 == null))))?(((((map__31967_32018.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31967_32018.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31967_32018):map__31967_32018);
var doc_32020 = cljs.core.get.call(null,map__31967_32019__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_32021 = cljs.core.get.call(null,map__31967_32019__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_32017);

cljs.core.println.call(null," ",arglists_32021);

if(cljs.core.truth_(doc_32020)){
cljs.core.println.call(null," ",doc_32020);
} else {
}


var G__32022 = cljs.core.next.call(null,seq__31945_32010__$1);
var G__32023 = null;
var G__32024 = (0);
var G__32025 = (0);
seq__31945_31995 = G__32022;
chunk__31946_31996 = G__32023;
count__31947_31997 = G__32024;
i__31948_31998 = G__32025;
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

var seq__31969 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__31970 = null;
var count__31971 = (0);
var i__31972 = (0);
while(true){
if((i__31972 < count__31971)){
var role = cljs.core._nth.call(null,chunk__31970,i__31972);
var temp__5735__auto___32026__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___32026__$1)){
var spec_32027 = temp__5735__auto___32026__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_32027));
} else {
}


var G__32028 = seq__31969;
var G__32029 = chunk__31970;
var G__32030 = count__31971;
var G__32031 = (i__31972 + (1));
seq__31969 = G__32028;
chunk__31970 = G__32029;
count__31971 = G__32030;
i__31972 = G__32031;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq.call(null,seq__31969);
if(temp__5735__auto____$1){
var seq__31969__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31969__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__31969__$1);
var G__32032 = cljs.core.chunk_rest.call(null,seq__31969__$1);
var G__32033 = c__4556__auto__;
var G__32034 = cljs.core.count.call(null,c__4556__auto__);
var G__32035 = (0);
seq__31969 = G__32032;
chunk__31970 = G__32033;
count__31971 = G__32034;
i__31972 = G__32035;
continue;
} else {
var role = cljs.core.first.call(null,seq__31969__$1);
var temp__5735__auto___32036__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___32036__$2)){
var spec_32037 = temp__5735__auto___32036__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_32037));
} else {
}


var G__32038 = cljs.core.next.call(null,seq__31969__$1);
var G__32039 = null;
var G__32040 = (0);
var G__32041 = (0);
seq__31969 = G__32038;
chunk__31970 = G__32039;
count__31971 = G__32040;
i__31972 = G__32041;
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
var G__32042 = cljs.core.conj.call(null,via,t);
var G__32043 = cljs.core.ex_cause.call(null,t);
via = G__32042;
t = G__32043;
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
var map__32046 = datafied_throwable;
var map__32046__$1 = (((((!((map__32046 == null))))?(((((map__32046.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32046.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32046):map__32046);
var via = cljs.core.get.call(null,map__32046__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__32046__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__32046__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__32047 = cljs.core.last.call(null,via);
var map__32047__$1 = (((((!((map__32047 == null))))?(((((map__32047.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32047.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32047):map__32047);
var type = cljs.core.get.call(null,map__32047__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__32047__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__32047__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__32048 = data;
var map__32048__$1 = (((((!((map__32048 == null))))?(((((map__32048.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32048.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32048):map__32048);
var problems = cljs.core.get.call(null,map__32048__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__32048__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__32048__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__32049 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__32049__$1 = (((((!((map__32049 == null))))?(((((map__32049.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32049.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32049):map__32049);
var top_data = map__32049__$1;
var source = cljs.core.get.call(null,map__32049__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__32054 = phase;
var G__32054__$1 = (((G__32054 instanceof cljs.core.Keyword))?G__32054.fqn:null);
switch (G__32054__$1) {
case "read-source":
var map__32055 = data;
var map__32055__$1 = (((((!((map__32055 == null))))?(((((map__32055.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32055.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32055):map__32055);
var line = cljs.core.get.call(null,map__32055__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__32055__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__32057 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__32057__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__32057,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__32057);
var G__32057__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__32057__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__32057__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__32057__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__32057__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__32058 = top_data;
var G__32058__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__32058,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__32058);
var G__32058__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__32058__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__32058__$1);
var G__32058__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__32058__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__32058__$2);
var G__32058__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__32058__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__32058__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__32058__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__32058__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__32059 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__32059,(0),null);
var method = cljs.core.nth.call(null,vec__32059,(1),null);
var file = cljs.core.nth.call(null,vec__32059,(2),null);
var line = cljs.core.nth.call(null,vec__32059,(3),null);
var G__32062 = top_data;
var G__32062__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__32062,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__32062);
var G__32062__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__32062__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__32062__$1);
var G__32062__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.call(null,G__32062__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__32062__$2);
var G__32062__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__32062__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__32062__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__32062__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__32062__$4;
}

break;
case "execution":
var vec__32063 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__32063,(0),null);
var method = cljs.core.nth.call(null,vec__32063,(1),null);
var file = cljs.core.nth.call(null,vec__32063,(2),null);
var line = cljs.core.nth.call(null,vec__32063,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,(function (p1__32045_SHARP_){
var or__4126__auto__ = (p1__32045_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__32045_SHARP_);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__32066 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__32066__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__32066,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__32066);
var G__32066__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__32066__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__32066__$1);
var G__32066__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
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
})())?cljs.core.assoc.call(null,G__32066__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__32066__$2);
var G__32066__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__32066__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__32066__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__32066__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__32066__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32054__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__32070){
var map__32071 = p__32070;
var map__32071__$1 = (((((!((map__32071 == null))))?(((((map__32071.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32071.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32071):map__32071);
var triage_data = map__32071__$1;
var phase = cljs.core.get.call(null,map__32071__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__32071__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__32071__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__32071__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__32071__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__32071__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__32071__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__32071__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__32073 = phase;
var G__32073__$1 = (((G__32073 instanceof cljs.core.Keyword))?G__32073.fqn:null);
switch (G__32073__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__32074_32083 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__32075_32084 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__32076_32085 = true;
var _STAR_print_fn_STAR__temp_val__32077_32086 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__32076_32085);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__32077_32086);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__32068_SHARP_){
return cljs.core.dissoc.call(null,p1__32068_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__32075_32084);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__32074_32083);
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
var _STAR_print_newline_STAR__orig_val__32078_32087 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__32079_32088 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__32080_32089 = true;
var _STAR_print_fn_STAR__temp_val__32081_32090 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__32080_32089);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__32081_32090);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__32069_SHARP_){
return cljs.core.dissoc.call(null,p1__32069_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__32079_32088);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__32078_32087);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32073__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map?rel=1627432846699
