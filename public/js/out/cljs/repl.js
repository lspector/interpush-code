// Compiled by ClojureScript 1.10.764 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__31146){
var map__31147 = p__31146;
var map__31147__$1 = (((((!((map__31147 == null))))?(((((map__31147.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31147.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31147):map__31147);
var m = map__31147__$1;
var n = cljs.core.get.call(null,map__31147__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__31147__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__31149_31181 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__31150_31182 = null;
var count__31151_31183 = (0);
var i__31152_31184 = (0);
while(true){
if((i__31152_31184 < count__31151_31183)){
var f_31185 = cljs.core._nth.call(null,chunk__31150_31182,i__31152_31184);
cljs.core.println.call(null,"  ",f_31185);


var G__31186 = seq__31149_31181;
var G__31187 = chunk__31150_31182;
var G__31188 = count__31151_31183;
var G__31189 = (i__31152_31184 + (1));
seq__31149_31181 = G__31186;
chunk__31150_31182 = G__31187;
count__31151_31183 = G__31188;
i__31152_31184 = G__31189;
continue;
} else {
var temp__5735__auto___31190 = cljs.core.seq.call(null,seq__31149_31181);
if(temp__5735__auto___31190){
var seq__31149_31191__$1 = temp__5735__auto___31190;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31149_31191__$1)){
var c__4556__auto___31192 = cljs.core.chunk_first.call(null,seq__31149_31191__$1);
var G__31193 = cljs.core.chunk_rest.call(null,seq__31149_31191__$1);
var G__31194 = c__4556__auto___31192;
var G__31195 = cljs.core.count.call(null,c__4556__auto___31192);
var G__31196 = (0);
seq__31149_31181 = G__31193;
chunk__31150_31182 = G__31194;
count__31151_31183 = G__31195;
i__31152_31184 = G__31196;
continue;
} else {
var f_31197 = cljs.core.first.call(null,seq__31149_31191__$1);
cljs.core.println.call(null,"  ",f_31197);


var G__31198 = cljs.core.next.call(null,seq__31149_31191__$1);
var G__31199 = null;
var G__31200 = (0);
var G__31201 = (0);
seq__31149_31181 = G__31198;
chunk__31150_31182 = G__31199;
count__31151_31183 = G__31200;
i__31152_31184 = G__31201;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_31202 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_31202);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_31202)))?cljs.core.second.call(null,arglists_31202):arglists_31202));
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
var seq__31153_31203 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__31154_31204 = null;
var count__31155_31205 = (0);
var i__31156_31206 = (0);
while(true){
if((i__31156_31206 < count__31155_31205)){
var vec__31167_31207 = cljs.core._nth.call(null,chunk__31154_31204,i__31156_31206);
var name_31208 = cljs.core.nth.call(null,vec__31167_31207,(0),null);
var map__31170_31209 = cljs.core.nth.call(null,vec__31167_31207,(1),null);
var map__31170_31210__$1 = (((((!((map__31170_31209 == null))))?(((((map__31170_31209.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31170_31209.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31170_31209):map__31170_31209);
var doc_31211 = cljs.core.get.call(null,map__31170_31210__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_31212 = cljs.core.get.call(null,map__31170_31210__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_31208);

cljs.core.println.call(null," ",arglists_31212);

if(cljs.core.truth_(doc_31211)){
cljs.core.println.call(null," ",doc_31211);
} else {
}


var G__31213 = seq__31153_31203;
var G__31214 = chunk__31154_31204;
var G__31215 = count__31155_31205;
var G__31216 = (i__31156_31206 + (1));
seq__31153_31203 = G__31213;
chunk__31154_31204 = G__31214;
count__31155_31205 = G__31215;
i__31156_31206 = G__31216;
continue;
} else {
var temp__5735__auto___31217 = cljs.core.seq.call(null,seq__31153_31203);
if(temp__5735__auto___31217){
var seq__31153_31218__$1 = temp__5735__auto___31217;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31153_31218__$1)){
var c__4556__auto___31219 = cljs.core.chunk_first.call(null,seq__31153_31218__$1);
var G__31220 = cljs.core.chunk_rest.call(null,seq__31153_31218__$1);
var G__31221 = c__4556__auto___31219;
var G__31222 = cljs.core.count.call(null,c__4556__auto___31219);
var G__31223 = (0);
seq__31153_31203 = G__31220;
chunk__31154_31204 = G__31221;
count__31155_31205 = G__31222;
i__31156_31206 = G__31223;
continue;
} else {
var vec__31172_31224 = cljs.core.first.call(null,seq__31153_31218__$1);
var name_31225 = cljs.core.nth.call(null,vec__31172_31224,(0),null);
var map__31175_31226 = cljs.core.nth.call(null,vec__31172_31224,(1),null);
var map__31175_31227__$1 = (((((!((map__31175_31226 == null))))?(((((map__31175_31226.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31175_31226.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31175_31226):map__31175_31226);
var doc_31228 = cljs.core.get.call(null,map__31175_31227__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_31229 = cljs.core.get.call(null,map__31175_31227__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_31225);

cljs.core.println.call(null," ",arglists_31229);

if(cljs.core.truth_(doc_31228)){
cljs.core.println.call(null," ",doc_31228);
} else {
}


var G__31230 = cljs.core.next.call(null,seq__31153_31218__$1);
var G__31231 = null;
var G__31232 = (0);
var G__31233 = (0);
seq__31153_31203 = G__31230;
chunk__31154_31204 = G__31231;
count__31155_31205 = G__31232;
i__31156_31206 = G__31233;
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

var seq__31177 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__31178 = null;
var count__31179 = (0);
var i__31180 = (0);
while(true){
if((i__31180 < count__31179)){
var role = cljs.core._nth.call(null,chunk__31178,i__31180);
var temp__5735__auto___31234__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___31234__$1)){
var spec_31235 = temp__5735__auto___31234__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_31235));
} else {
}


var G__31236 = seq__31177;
var G__31237 = chunk__31178;
var G__31238 = count__31179;
var G__31239 = (i__31180 + (1));
seq__31177 = G__31236;
chunk__31178 = G__31237;
count__31179 = G__31238;
i__31180 = G__31239;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq.call(null,seq__31177);
if(temp__5735__auto____$1){
var seq__31177__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31177__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__31177__$1);
var G__31240 = cljs.core.chunk_rest.call(null,seq__31177__$1);
var G__31241 = c__4556__auto__;
var G__31242 = cljs.core.count.call(null,c__4556__auto__);
var G__31243 = (0);
seq__31177 = G__31240;
chunk__31178 = G__31241;
count__31179 = G__31242;
i__31180 = G__31243;
continue;
} else {
var role = cljs.core.first.call(null,seq__31177__$1);
var temp__5735__auto___31244__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___31244__$2)){
var spec_31245 = temp__5735__auto___31244__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_31245));
} else {
}


var G__31246 = cljs.core.next.call(null,seq__31177__$1);
var G__31247 = null;
var G__31248 = (0);
var G__31249 = (0);
seq__31177 = G__31246;
chunk__31178 = G__31247;
count__31179 = G__31248;
i__31180 = G__31249;
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
var G__31250 = cljs.core.conj.call(null,via,t);
var G__31251 = cljs.core.ex_cause.call(null,t);
via = G__31250;
t = G__31251;
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
var map__31254 = datafied_throwable;
var map__31254__$1 = (((((!((map__31254 == null))))?(((((map__31254.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31254.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31254):map__31254);
var via = cljs.core.get.call(null,map__31254__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__31254__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__31254__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__31255 = cljs.core.last.call(null,via);
var map__31255__$1 = (((((!((map__31255 == null))))?(((((map__31255.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31255.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31255):map__31255);
var type = cljs.core.get.call(null,map__31255__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__31255__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__31255__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__31256 = data;
var map__31256__$1 = (((((!((map__31256 == null))))?(((((map__31256.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31256.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31256):map__31256);
var problems = cljs.core.get.call(null,map__31256__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__31256__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__31256__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__31257 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__31257__$1 = (((((!((map__31257 == null))))?(((((map__31257.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31257.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31257):map__31257);
var top_data = map__31257__$1;
var source = cljs.core.get.call(null,map__31257__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__31262 = phase;
var G__31262__$1 = (((G__31262 instanceof cljs.core.Keyword))?G__31262.fqn:null);
switch (G__31262__$1) {
case "read-source":
var map__31263 = data;
var map__31263__$1 = (((((!((map__31263 == null))))?(((((map__31263.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31263.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31263):map__31263);
var line = cljs.core.get.call(null,map__31263__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__31263__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__31265 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__31265__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__31265,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__31265);
var G__31265__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__31265__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__31265__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__31265__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__31265__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__31266 = top_data;
var G__31266__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__31266,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__31266);
var G__31266__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__31266__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__31266__$1);
var G__31266__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__31266__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__31266__$2);
var G__31266__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__31266__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__31266__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__31266__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__31266__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__31267 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__31267,(0),null);
var method = cljs.core.nth.call(null,vec__31267,(1),null);
var file = cljs.core.nth.call(null,vec__31267,(2),null);
var line = cljs.core.nth.call(null,vec__31267,(3),null);
var G__31270 = top_data;
var G__31270__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__31270,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__31270);
var G__31270__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__31270__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__31270__$1);
var G__31270__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.call(null,G__31270__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__31270__$2);
var G__31270__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__31270__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__31270__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__31270__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__31270__$4;
}

break;
case "execution":
var vec__31271 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__31271,(0),null);
var method = cljs.core.nth.call(null,vec__31271,(1),null);
var file = cljs.core.nth.call(null,vec__31271,(2),null);
var line = cljs.core.nth.call(null,vec__31271,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,(function (p1__31253_SHARP_){
var or__4126__auto__ = (p1__31253_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__31253_SHARP_);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__31274 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__31274__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__31274,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__31274);
var G__31274__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__31274__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__31274__$1);
var G__31274__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
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
})())?cljs.core.assoc.call(null,G__31274__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__31274__$2);
var G__31274__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__31274__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__31274__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__31274__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__31274__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31262__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__31278){
var map__31279 = p__31278;
var map__31279__$1 = (((((!((map__31279 == null))))?(((((map__31279.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31279.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31279):map__31279);
var triage_data = map__31279__$1;
var phase = cljs.core.get.call(null,map__31279__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__31279__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__31279__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__31279__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__31279__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__31279__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__31279__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__31279__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__31281 = phase;
var G__31281__$1 = (((G__31281 instanceof cljs.core.Keyword))?G__31281.fqn:null);
switch (G__31281__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__31282_31291 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__31283_31292 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__31284_31293 = true;
var _STAR_print_fn_STAR__temp_val__31285_31294 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__31284_31293);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__31285_31294);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__31276_SHARP_){
return cljs.core.dissoc.call(null,p1__31276_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__31283_31292);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__31282_31291);
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
var _STAR_print_newline_STAR__orig_val__31286_31295 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__31287_31296 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__31288_31297 = true;
var _STAR_print_fn_STAR__temp_val__31289_31298 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__31288_31297);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__31289_31298);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__31277_SHARP_){
return cljs.core.dissoc.call(null,p1__31277_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__31287_31296);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__31286_31295);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31281__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map?rel=1593791113359
