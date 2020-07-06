// Compiled by ClojureScript 1.10.764 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.20";
figwheel.client.js_stringify = (((((typeof JSON !== 'undefined')) && ((!((JSON.stringify == null))))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return cljs.core.str.cljs$core$IFn$_invoke$arity$1(x);
}catch (e37190){if((e37190 instanceof Error)){
var e = e37190;
return "Error: Unable to stringify";
} else {
throw e37190;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__37193 = arguments.length;
switch (G__37193) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__37191_SHARP_){
if(typeof p1__37191_SHARP_ === 'string'){
return p1__37191_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__37191_SHARP_);
}
}),args)], null)], null));

return null;
}));

(figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
}));

(figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2);

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__4742__auto__ = [];
var len__4736__auto___37196 = arguments.length;
var i__4737__auto___37197 = (0);
while(true){
if((i__4737__auto___37197 < len__4736__auto___37196)){
args__4742__auto__.push((arguments[i__4737__auto___37197]));

var G__37198 = (i__4737__auto___37197 + (1));
i__4737__auto___37197 = G__37198;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
}));

(figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq37195){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37195));
}));

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4742__auto__ = [];
var len__4736__auto___37200 = arguments.length;
var i__4737__auto___37201 = (0);
while(true){
if((i__4737__auto___37201 < len__4736__auto___37200)){
args__4742__auto__.push((arguments[i__4737__auto___37201]));

var G__37202 = (i__4737__auto___37201 + (1));
i__4737__auto___37201 = G__37202;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
}));

(figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq37199){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37199));
}));

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
(cljs.core._STAR_print_newline_STAR_ = false);

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),"Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",(cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF")].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__37203){
var map__37204 = p__37203;
var map__37204__$1 = (((((!((map__37204 == null))))?(((((map__37204.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37204.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37204):map__37204);
var message = cljs.core.get.call(null,map__37204__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__37204__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__4126__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return false;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return ((cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts))));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__34071__auto___37283 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__34072__auto__ = (function (){var switch__33976__auto__ = (function (state_37255){
var state_val_37256 = (state_37255[(1)]);
if((state_val_37256 === (7))){
var inst_37251 = (state_37255[(2)]);
var state_37255__$1 = state_37255;
var statearr_37257_37284 = state_37255__$1;
(statearr_37257_37284[(2)] = inst_37251);

(statearr_37257_37284[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37256 === (1))){
var state_37255__$1 = state_37255;
var statearr_37258_37285 = state_37255__$1;
(statearr_37258_37285[(2)] = null);

(statearr_37258_37285[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37256 === (4))){
var inst_37208 = (state_37255[(7)]);
var inst_37208__$1 = (state_37255[(2)]);
var state_37255__$1 = (function (){var statearr_37259 = state_37255;
(statearr_37259[(7)] = inst_37208__$1);

return statearr_37259;
})();
if(cljs.core.truth_(inst_37208__$1)){
var statearr_37260_37286 = state_37255__$1;
(statearr_37260_37286[(1)] = (5));

} else {
var statearr_37261_37287 = state_37255__$1;
(statearr_37261_37287[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37256 === (15))){
var inst_37215 = (state_37255[(8)]);
var inst_37230 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_37215);
var inst_37231 = cljs.core.first.call(null,inst_37230);
var inst_37232 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_37231);
var inst_37233 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_37232)].join('');
var inst_37234 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_37233);
var state_37255__$1 = state_37255;
var statearr_37262_37288 = state_37255__$1;
(statearr_37262_37288[(2)] = inst_37234);

(statearr_37262_37288[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37256 === (13))){
var inst_37239 = (state_37255[(2)]);
var state_37255__$1 = state_37255;
var statearr_37263_37289 = state_37255__$1;
(statearr_37263_37289[(2)] = inst_37239);

(statearr_37263_37289[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37256 === (6))){
var state_37255__$1 = state_37255;
var statearr_37264_37290 = state_37255__$1;
(statearr_37264_37290[(2)] = null);

(statearr_37264_37290[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37256 === (17))){
var inst_37237 = (state_37255[(2)]);
var state_37255__$1 = state_37255;
var statearr_37265_37291 = state_37255__$1;
(statearr_37265_37291[(2)] = inst_37237);

(statearr_37265_37291[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37256 === (3))){
var inst_37253 = (state_37255[(2)]);
var state_37255__$1 = state_37255;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37255__$1,inst_37253);
} else {
if((state_val_37256 === (12))){
var inst_37214 = (state_37255[(9)]);
var inst_37228 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_37214,opts);
var state_37255__$1 = state_37255;
if(inst_37228){
var statearr_37266_37292 = state_37255__$1;
(statearr_37266_37292[(1)] = (15));

} else {
var statearr_37267_37293 = state_37255__$1;
(statearr_37267_37293[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37256 === (2))){
var state_37255__$1 = state_37255;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37255__$1,(4),ch);
} else {
if((state_val_37256 === (11))){
var inst_37215 = (state_37255[(8)]);
var inst_37220 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37221 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_37215);
var inst_37222 = cljs.core.async.timeout.call(null,(1000));
var inst_37223 = [inst_37221,inst_37222];
var inst_37224 = (new cljs.core.PersistentVector(null,2,(5),inst_37220,inst_37223,null));
var state_37255__$1 = state_37255;
return cljs.core.async.ioc_alts_BANG_.call(null,state_37255__$1,(14),inst_37224);
} else {
if((state_val_37256 === (9))){
var inst_37215 = (state_37255[(8)]);
var inst_37241 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_37242 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_37215);
var inst_37243 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_37242);
var inst_37244 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_37243)].join('');
var inst_37245 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_37244);
var state_37255__$1 = (function (){var statearr_37268 = state_37255;
(statearr_37268[(10)] = inst_37241);

return statearr_37268;
})();
var statearr_37269_37294 = state_37255__$1;
(statearr_37269_37294[(2)] = inst_37245);

(statearr_37269_37294[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37256 === (5))){
var inst_37208 = (state_37255[(7)]);
var inst_37210 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_37211 = (new cljs.core.PersistentArrayMap(null,2,inst_37210,null));
var inst_37212 = (new cljs.core.PersistentHashSet(null,inst_37211,null));
var inst_37213 = figwheel.client.focus_msgs.call(null,inst_37212,inst_37208);
var inst_37214 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_37213);
var inst_37215 = cljs.core.first.call(null,inst_37213);
var inst_37216 = figwheel.client.autoload_QMARK_.call(null);
var state_37255__$1 = (function (){var statearr_37270 = state_37255;
(statearr_37270[(9)] = inst_37214);

(statearr_37270[(8)] = inst_37215);

return statearr_37270;
})();
if(cljs.core.truth_(inst_37216)){
var statearr_37271_37295 = state_37255__$1;
(statearr_37271_37295[(1)] = (8));

} else {
var statearr_37272_37296 = state_37255__$1;
(statearr_37272_37296[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37256 === (14))){
var inst_37226 = (state_37255[(2)]);
var state_37255__$1 = state_37255;
var statearr_37273_37297 = state_37255__$1;
(statearr_37273_37297[(2)] = inst_37226);

(statearr_37273_37297[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37256 === (16))){
var state_37255__$1 = state_37255;
var statearr_37274_37298 = state_37255__$1;
(statearr_37274_37298[(2)] = null);

(statearr_37274_37298[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37256 === (10))){
var inst_37247 = (state_37255[(2)]);
var state_37255__$1 = (function (){var statearr_37275 = state_37255;
(statearr_37275[(11)] = inst_37247);

return statearr_37275;
})();
var statearr_37276_37299 = state_37255__$1;
(statearr_37276_37299[(2)] = null);

(statearr_37276_37299[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37256 === (8))){
var inst_37214 = (state_37255[(9)]);
var inst_37218 = figwheel.client.reload_file_state_QMARK_.call(null,inst_37214,opts);
var state_37255__$1 = state_37255;
if(cljs.core.truth_(inst_37218)){
var statearr_37277_37300 = state_37255__$1;
(statearr_37277_37300[(1)] = (11));

} else {
var statearr_37278_37301 = state_37255__$1;
(statearr_37278_37301[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__33977__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__33977__auto____0 = (function (){
var statearr_37279 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37279[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__33977__auto__);

(statearr_37279[(1)] = (1));

return statearr_37279;
});
var figwheel$client$file_reloader_plugin_$_state_machine__33977__auto____1 = (function (state_37255){
while(true){
var ret_value__33978__auto__ = (function (){try{while(true){
var result__33979__auto__ = switch__33976__auto__.call(null,state_37255);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33979__auto__;
}
break;
}
}catch (e37280){if((e37280 instanceof Object)){
var ex__33980__auto__ = e37280;
var statearr_37281_37302 = state_37255;
(statearr_37281_37302[(5)] = ex__33980__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37255);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37280;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33978__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37303 = state_37255;
state_37255 = G__37303;
continue;
} else {
return ret_value__33978__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__33977__auto__ = function(state_37255){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__33977__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__33977__auto____1.call(this,state_37255);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__33977__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__33977__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__33977__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__33977__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__33977__auto__;
})()
})();
var state__34073__auto__ = (function (){var statearr_37282 = f__34072__auto__.call(null);
(statearr_37282[(6)] = c__34071__auto___37283);

return statearr_37282;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34073__auto__);
}));


return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__37304_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__37304_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(figwheel.client.utils.node_env_QMARK_.call(null)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(goog.userAgent.product.SAFARI){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(goog.userAgent.product.CHROME){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(goog.userAgent.product.FIREFOX){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(goog.userAgent.product.IE){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_37310 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__37306 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__37307 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__37308 = true;
var _STAR_print_fn_STAR__temp_val__37309 = (function (x){
return sb.append(x);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__37308);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__37309);

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
var result_value__$1 = (((!(typeof result_value === 'string')))?cljs.core.pr_str.call(null,result_value):result_value);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value__$1], null));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__37307);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__37306);
}}catch (e37305){if((e37305 instanceof Error)){
var e = e37305;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_37310], null));
} else {
var e = e37305;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return (cljs.user = ({}));
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__37311){
var map__37312 = p__37311;
var map__37312__$1 = (((((!((map__37312 == null))))?(((((map__37312.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37312.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37312):map__37312);
var opts = map__37312__$1;
var build_id = cljs.core.get.call(null,map__37312__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return (function (p__37314){
var vec__37315 = p__37314;
var seq__37316 = cljs.core.seq.call(null,vec__37315);
var first__37317 = cljs.core.first.call(null,seq__37316);
var seq__37316__$1 = cljs.core.next.call(null,seq__37316);
var map__37318 = first__37317;
var map__37318__$1 = (((((!((map__37318 == null))))?(((((map__37318.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37318.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37318):map__37318);
var msg = map__37318__$1;
var msg_name = cljs.core.get.call(null,map__37318__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__37316__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,(function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
}));
} else {
return null;
}
});
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__37320){
var vec__37321 = p__37320;
var seq__37322 = cljs.core.seq.call(null,vec__37321);
var first__37323 = cljs.core.first.call(null,seq__37322);
var seq__37322__$1 = cljs.core.next.call(null,seq__37322);
var map__37324 = first__37323;
var map__37324__$1 = (((((!((map__37324 == null))))?(((((map__37324.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37324.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37324):map__37324);
var msg = map__37324__$1;
var msg_name = cljs.core.get.call(null,map__37324__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__37322__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__37326){
var map__37327 = p__37326;
var map__37327__$1 = (((((!((map__37327 == null))))?(((((map__37327.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37327.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37327):map__37327);
var on_compile_warning = cljs.core.get.call(null,map__37327__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__37327__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return (function (p__37329){
var vec__37330 = p__37329;
var seq__37331 = cljs.core.seq.call(null,vec__37330);
var first__37332 = cljs.core.first.call(null,seq__37331);
var seq__37331__$1 = cljs.core.next.call(null,seq__37331);
var map__37333 = first__37332;
var map__37333__$1 = (((((!((map__37333 == null))))?(((((map__37333.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37333.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37333):map__37333);
var msg = map__37333__$1;
var msg_name = cljs.core.get.call(null,map__37333__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__37331__$1;
var pred__37335 = cljs.core._EQ_;
var expr__37336 = msg_name;
if(cljs.core.truth_(pred__37335.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__37336))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__37335.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__37336))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__34071__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__34072__auto__ = (function (){var switch__33976__auto__ = (function (state_37425){
var state_val_37426 = (state_37425[(1)]);
if((state_val_37426 === (7))){
var inst_37345 = (state_37425[(2)]);
var state_37425__$1 = state_37425;
if(cljs.core.truth_(inst_37345)){
var statearr_37427_37474 = state_37425__$1;
(statearr_37427_37474[(1)] = (8));

} else {
var statearr_37428_37475 = state_37425__$1;
(statearr_37428_37475[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37426 === (20))){
var inst_37419 = (state_37425[(2)]);
var state_37425__$1 = state_37425;
var statearr_37429_37476 = state_37425__$1;
(statearr_37429_37476[(2)] = inst_37419);

(statearr_37429_37476[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37426 === (27))){
var inst_37415 = (state_37425[(2)]);
var state_37425__$1 = state_37425;
var statearr_37430_37477 = state_37425__$1;
(statearr_37430_37477[(2)] = inst_37415);

(statearr_37430_37477[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37426 === (1))){
var inst_37338 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_37425__$1 = state_37425;
if(cljs.core.truth_(inst_37338)){
var statearr_37431_37478 = state_37425__$1;
(statearr_37431_37478[(1)] = (2));

} else {
var statearr_37432_37479 = state_37425__$1;
(statearr_37432_37479[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37426 === (24))){
var inst_37417 = (state_37425[(2)]);
var state_37425__$1 = state_37425;
var statearr_37433_37480 = state_37425__$1;
(statearr_37433_37480[(2)] = inst_37417);

(statearr_37433_37480[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37426 === (4))){
var inst_37423 = (state_37425[(2)]);
var state_37425__$1 = state_37425;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37425__$1,inst_37423);
} else {
if((state_val_37426 === (15))){
var inst_37421 = (state_37425[(2)]);
var state_37425__$1 = state_37425;
var statearr_37434_37481 = state_37425__$1;
(statearr_37434_37481[(2)] = inst_37421);

(statearr_37434_37481[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37426 === (21))){
var inst_37374 = (state_37425[(2)]);
var inst_37375 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37376 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37375);
var state_37425__$1 = (function (){var statearr_37435 = state_37425;
(statearr_37435[(7)] = inst_37374);

return statearr_37435;
})();
var statearr_37436_37482 = state_37425__$1;
(statearr_37436_37482[(2)] = inst_37376);

(statearr_37436_37482[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37426 === (31))){
var inst_37404 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_37425__$1 = state_37425;
if(inst_37404){
var statearr_37437_37483 = state_37425__$1;
(statearr_37437_37483[(1)] = (34));

} else {
var statearr_37438_37484 = state_37425__$1;
(statearr_37438_37484[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37426 === (32))){
var inst_37413 = (state_37425[(2)]);
var state_37425__$1 = state_37425;
var statearr_37439_37485 = state_37425__$1;
(statearr_37439_37485[(2)] = inst_37413);

(statearr_37439_37485[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37426 === (33))){
var inst_37400 = (state_37425[(2)]);
var inst_37401 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37402 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37401);
var state_37425__$1 = (function (){var statearr_37440 = state_37425;
(statearr_37440[(8)] = inst_37400);

return statearr_37440;
})();
var statearr_37441_37486 = state_37425__$1;
(statearr_37441_37486[(2)] = inst_37402);

(statearr_37441_37486[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37426 === (13))){
var inst_37359 = figwheel.client.heads_up.clear.call(null);
var state_37425__$1 = state_37425;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37425__$1,(16),inst_37359);
} else {
if((state_val_37426 === (22))){
var inst_37380 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37381 = figwheel.client.heads_up.append_warning_message.call(null,inst_37380);
var state_37425__$1 = state_37425;
var statearr_37442_37487 = state_37425__$1;
(statearr_37442_37487[(2)] = inst_37381);

(statearr_37442_37487[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37426 === (36))){
var inst_37411 = (state_37425[(2)]);
var state_37425__$1 = state_37425;
var statearr_37443_37488 = state_37425__$1;
(statearr_37443_37488[(2)] = inst_37411);

(statearr_37443_37488[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37426 === (29))){
var inst_37391 = (state_37425[(2)]);
var inst_37392 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37393 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37392);
var state_37425__$1 = (function (){var statearr_37444 = state_37425;
(statearr_37444[(9)] = inst_37391);

return statearr_37444;
})();
var statearr_37445_37489 = state_37425__$1;
(statearr_37445_37489[(2)] = inst_37393);

(statearr_37445_37489[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37426 === (6))){
var inst_37340 = (state_37425[(10)]);
var state_37425__$1 = state_37425;
var statearr_37446_37490 = state_37425__$1;
(statearr_37446_37490[(2)] = inst_37340);

(statearr_37446_37490[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37426 === (28))){
var inst_37387 = (state_37425[(2)]);
var inst_37388 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37389 = figwheel.client.heads_up.display_warning.call(null,inst_37388);
var state_37425__$1 = (function (){var statearr_37447 = state_37425;
(statearr_37447[(11)] = inst_37387);

return statearr_37447;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37425__$1,(29),inst_37389);
} else {
if((state_val_37426 === (25))){
var inst_37385 = figwheel.client.heads_up.clear.call(null);
var state_37425__$1 = state_37425;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37425__$1,(28),inst_37385);
} else {
if((state_val_37426 === (34))){
var inst_37406 = figwheel.client.heads_up.flash_loaded.call(null);
var state_37425__$1 = state_37425;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37425__$1,(37),inst_37406);
} else {
if((state_val_37426 === (17))){
var inst_37365 = (state_37425[(2)]);
var inst_37366 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37367 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37366);
var state_37425__$1 = (function (){var statearr_37448 = state_37425;
(statearr_37448[(12)] = inst_37365);

return statearr_37448;
})();
var statearr_37449_37491 = state_37425__$1;
(statearr_37449_37491[(2)] = inst_37367);

(statearr_37449_37491[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37426 === (3))){
var inst_37357 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_37425__$1 = state_37425;
if(inst_37357){
var statearr_37450_37492 = state_37425__$1;
(statearr_37450_37492[(1)] = (13));

} else {
var statearr_37451_37493 = state_37425__$1;
(statearr_37451_37493[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37426 === (12))){
var inst_37353 = (state_37425[(2)]);
var state_37425__$1 = state_37425;
var statearr_37452_37494 = state_37425__$1;
(statearr_37452_37494[(2)] = inst_37353);

(statearr_37452_37494[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37426 === (2))){
var inst_37340 = (state_37425[(10)]);
var inst_37340__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_37425__$1 = (function (){var statearr_37453 = state_37425;
(statearr_37453[(10)] = inst_37340__$1);

return statearr_37453;
})();
if(cljs.core.truth_(inst_37340__$1)){
var statearr_37454_37495 = state_37425__$1;
(statearr_37454_37495[(1)] = (5));

} else {
var statearr_37455_37496 = state_37425__$1;
(statearr_37455_37496[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37426 === (23))){
var inst_37383 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_37425__$1 = state_37425;
if(inst_37383){
var statearr_37456_37497 = state_37425__$1;
(statearr_37456_37497[(1)] = (25));

} else {
var statearr_37457_37498 = state_37425__$1;
(statearr_37457_37498[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37426 === (35))){
var state_37425__$1 = state_37425;
var statearr_37458_37499 = state_37425__$1;
(statearr_37458_37499[(2)] = null);

(statearr_37458_37499[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37426 === (19))){
var inst_37378 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_37425__$1 = state_37425;
if(inst_37378){
var statearr_37459_37500 = state_37425__$1;
(statearr_37459_37500[(1)] = (22));

} else {
var statearr_37460_37501 = state_37425__$1;
(statearr_37460_37501[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37426 === (11))){
var inst_37349 = (state_37425[(2)]);
var state_37425__$1 = state_37425;
var statearr_37461_37502 = state_37425__$1;
(statearr_37461_37502[(2)] = inst_37349);

(statearr_37461_37502[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37426 === (9))){
var inst_37351 = figwheel.client.heads_up.clear.call(null);
var state_37425__$1 = state_37425;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37425__$1,(12),inst_37351);
} else {
if((state_val_37426 === (5))){
var inst_37342 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_37425__$1 = state_37425;
var statearr_37462_37503 = state_37425__$1;
(statearr_37462_37503[(2)] = inst_37342);

(statearr_37462_37503[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37426 === (14))){
var inst_37369 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_37425__$1 = state_37425;
if(inst_37369){
var statearr_37463_37504 = state_37425__$1;
(statearr_37463_37504[(1)] = (18));

} else {
var statearr_37464_37505 = state_37425__$1;
(statearr_37464_37505[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37426 === (26))){
var inst_37395 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_37425__$1 = state_37425;
if(inst_37395){
var statearr_37465_37506 = state_37425__$1;
(statearr_37465_37506[(1)] = (30));

} else {
var statearr_37466_37507 = state_37425__$1;
(statearr_37466_37507[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37426 === (16))){
var inst_37361 = (state_37425[(2)]);
var inst_37362 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37363 = figwheel.client.heads_up.display_exception.call(null,inst_37362);
var state_37425__$1 = (function (){var statearr_37467 = state_37425;
(statearr_37467[(13)] = inst_37361);

return statearr_37467;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37425__$1,(17),inst_37363);
} else {
if((state_val_37426 === (30))){
var inst_37397 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37398 = figwheel.client.heads_up.display_warning.call(null,inst_37397);
var state_37425__$1 = state_37425;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37425__$1,(33),inst_37398);
} else {
if((state_val_37426 === (10))){
var inst_37355 = (state_37425[(2)]);
var state_37425__$1 = state_37425;
var statearr_37468_37508 = state_37425__$1;
(statearr_37468_37508[(2)] = inst_37355);

(statearr_37468_37508[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37426 === (18))){
var inst_37371 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37372 = figwheel.client.heads_up.display_exception.call(null,inst_37371);
var state_37425__$1 = state_37425;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37425__$1,(21),inst_37372);
} else {
if((state_val_37426 === (37))){
var inst_37408 = (state_37425[(2)]);
var state_37425__$1 = state_37425;
var statearr_37469_37509 = state_37425__$1;
(statearr_37469_37509[(2)] = inst_37408);

(statearr_37469_37509[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37426 === (8))){
var inst_37347 = figwheel.client.heads_up.flash_loaded.call(null);
var state_37425__$1 = state_37425;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37425__$1,(11),inst_37347);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33977__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33977__auto____0 = (function (){
var statearr_37470 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37470[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33977__auto__);

(statearr_37470[(1)] = (1));

return statearr_37470;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33977__auto____1 = (function (state_37425){
while(true){
var ret_value__33978__auto__ = (function (){try{while(true){
var result__33979__auto__ = switch__33976__auto__.call(null,state_37425);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33979__auto__;
}
break;
}
}catch (e37471){if((e37471 instanceof Object)){
var ex__33980__auto__ = e37471;
var statearr_37472_37510 = state_37425;
(statearr_37472_37510[(5)] = ex__33980__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37425);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37471;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33978__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37511 = state_37425;
state_37425 = G__37511;
continue;
} else {
return ret_value__33978__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33977__auto__ = function(state_37425){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33977__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33977__auto____1.call(this,state_37425);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33977__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33977__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33977__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33977__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33977__auto__;
})()
})();
var state__34073__auto__ = (function (){var statearr_37473 = f__34072__auto__.call(null);
(statearr_37473[(6)] = c__34071__auto__);

return statearr_37473;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34073__auto__);
}));

return c__34071__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__34071__auto___37540 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__34072__auto__ = (function (){var switch__33976__auto__ = (function (state_37526){
var state_val_37527 = (state_37526[(1)]);
if((state_val_37527 === (1))){
var state_37526__$1 = state_37526;
var statearr_37528_37541 = state_37526__$1;
(statearr_37528_37541[(2)] = null);

(statearr_37528_37541[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37527 === (2))){
var state_37526__$1 = state_37526;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37526__$1,(4),ch);
} else {
if((state_val_37527 === (3))){
var inst_37524 = (state_37526[(2)]);
var state_37526__$1 = state_37526;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37526__$1,inst_37524);
} else {
if((state_val_37527 === (4))){
var inst_37514 = (state_37526[(7)]);
var inst_37514__$1 = (state_37526[(2)]);
var state_37526__$1 = (function (){var statearr_37529 = state_37526;
(statearr_37529[(7)] = inst_37514__$1);

return statearr_37529;
})();
if(cljs.core.truth_(inst_37514__$1)){
var statearr_37530_37542 = state_37526__$1;
(statearr_37530_37542[(1)] = (5));

} else {
var statearr_37531_37543 = state_37526__$1;
(statearr_37531_37543[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37527 === (5))){
var inst_37514 = (state_37526[(7)]);
var inst_37516 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_37514);
var state_37526__$1 = state_37526;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37526__$1,(8),inst_37516);
} else {
if((state_val_37527 === (6))){
var state_37526__$1 = state_37526;
var statearr_37532_37544 = state_37526__$1;
(statearr_37532_37544[(2)] = null);

(statearr_37532_37544[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37527 === (7))){
var inst_37522 = (state_37526[(2)]);
var state_37526__$1 = state_37526;
var statearr_37533_37545 = state_37526__$1;
(statearr_37533_37545[(2)] = inst_37522);

(statearr_37533_37545[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37527 === (8))){
var inst_37518 = (state_37526[(2)]);
var state_37526__$1 = (function (){var statearr_37534 = state_37526;
(statearr_37534[(8)] = inst_37518);

return statearr_37534;
})();
var statearr_37535_37546 = state_37526__$1;
(statearr_37535_37546[(2)] = null);

(statearr_37535_37546[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__33977__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__33977__auto____0 = (function (){
var statearr_37536 = [null,null,null,null,null,null,null,null,null];
(statearr_37536[(0)] = figwheel$client$heads_up_plugin_$_state_machine__33977__auto__);

(statearr_37536[(1)] = (1));

return statearr_37536;
});
var figwheel$client$heads_up_plugin_$_state_machine__33977__auto____1 = (function (state_37526){
while(true){
var ret_value__33978__auto__ = (function (){try{while(true){
var result__33979__auto__ = switch__33976__auto__.call(null,state_37526);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33979__auto__;
}
break;
}
}catch (e37537){if((e37537 instanceof Object)){
var ex__33980__auto__ = e37537;
var statearr_37538_37547 = state_37526;
(statearr_37538_37547[(5)] = ex__33980__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37526);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37537;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33978__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37548 = state_37526;
state_37526 = G__37548;
continue;
} else {
return ret_value__33978__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__33977__auto__ = function(state_37526){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__33977__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__33977__auto____1.call(this,state_37526);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__33977__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__33977__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__33977__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__33977__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__33977__auto__;
})()
})();
var state__34073__auto__ = (function (){var statearr_37539 = f__34072__auto__.call(null);
(statearr_37539[(6)] = c__34071__auto___37540);

return statearr_37539;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34073__auto__);
}));


figwheel.client.heads_up.ensure_container.call(null);

return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__34071__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__34072__auto__ = (function (){var switch__33976__auto__ = (function (state_37554){
var state_val_37555 = (state_37554[(1)]);
if((state_val_37555 === (1))){
var inst_37549 = cljs.core.async.timeout.call(null,(3000));
var state_37554__$1 = state_37554;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37554__$1,(2),inst_37549);
} else {
if((state_val_37555 === (2))){
var inst_37551 = (state_37554[(2)]);
var inst_37552 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_37554__$1 = (function (){var statearr_37556 = state_37554;
(statearr_37556[(7)] = inst_37551);

return statearr_37556;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37554__$1,inst_37552);
} else {
return null;
}
}
});
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__33977__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__33977__auto____0 = (function (){
var statearr_37557 = [null,null,null,null,null,null,null,null];
(statearr_37557[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__33977__auto__);

(statearr_37557[(1)] = (1));

return statearr_37557;
});
var figwheel$client$enforce_project_plugin_$_state_machine__33977__auto____1 = (function (state_37554){
while(true){
var ret_value__33978__auto__ = (function (){try{while(true){
var result__33979__auto__ = switch__33976__auto__.call(null,state_37554);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33979__auto__;
}
break;
}
}catch (e37558){if((e37558 instanceof Object)){
var ex__33980__auto__ = e37558;
var statearr_37559_37561 = state_37554;
(statearr_37559_37561[(5)] = ex__33980__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37554);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37558;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33978__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37562 = state_37554;
state_37554 = G__37562;
continue;
} else {
return ret_value__33978__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__33977__auto__ = function(state_37554){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__33977__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__33977__auto____1.call(this,state_37554);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__33977__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__33977__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__33977__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__33977__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__33977__auto__;
})()
})();
var state__34073__auto__ = (function (){var statearr_37560 = f__34072__auto__.call(null);
(statearr_37560[(6)] = c__34071__auto__);

return statearr_37560;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34073__auto__);
}));

return c__34071__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5735__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5735__auto__)){
var figwheel_version = temp__5735__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__34071__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__34072__auto__ = (function (){var switch__33976__auto__ = (function (state_37569){
var state_val_37570 = (state_37569[(1)]);
if((state_val_37570 === (1))){
var inst_37563 = cljs.core.async.timeout.call(null,(2000));
var state_37569__$1 = state_37569;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37569__$1,(2),inst_37563);
} else {
if((state_val_37570 === (2))){
var inst_37565 = (state_37569[(2)]);
var inst_37566 = ["Figwheel Client Version <strong>",figwheel.client._figwheel_version_,"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_37567 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_37566);
var state_37569__$1 = (function (){var statearr_37571 = state_37569;
(statearr_37571[(7)] = inst_37565);

return statearr_37571;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37569__$1,inst_37567);
} else {
return null;
}
}
});
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33977__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33977__auto____0 = (function (){
var statearr_37572 = [null,null,null,null,null,null,null,null];
(statearr_37572[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33977__auto__);

(statearr_37572[(1)] = (1));

return statearr_37572;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33977__auto____1 = (function (state_37569){
while(true){
var ret_value__33978__auto__ = (function (){try{while(true){
var result__33979__auto__ = switch__33976__auto__.call(null,state_37569);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33979__auto__;
}
break;
}
}catch (e37573){if((e37573 instanceof Object)){
var ex__33980__auto__ = e37573;
var statearr_37574_37576 = state_37569;
(statearr_37574_37576[(5)] = ex__33980__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37569);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37573;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33978__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37577 = state_37569;
state_37569 = G__37577;
continue;
} else {
return ret_value__33978__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33977__auto__ = function(state_37569){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33977__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33977__auto____1.call(this,state_37569);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33977__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33977__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33977__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33977__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33977__auto__;
})()
})();
var state__34073__auto__ = (function (){var statearr_37575 = f__34072__auto__.call(null);
(statearr_37575[(6)] = c__34071__auto__);

return statearr_37575;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34073__auto__);
}));

return c__34071__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__37578){
var map__37579 = p__37578;
var map__37579__$1 = (((((!((map__37579 == null))))?(((((map__37579.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37579.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37579):map__37579);
var file = cljs.core.get.call(null,map__37579__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__37579__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__37579__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__37581 = "";
var G__37581__$1 = (cljs.core.truth_(file)?[G__37581,"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__37581);
var G__37581__$2 = (cljs.core.truth_(line)?[G__37581__$1," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__37581__$1);
if(cljs.core.truth_((function (){var and__4115__auto__ = line;
if(cljs.core.truth_(and__4115__auto__)){
return column;
} else {
return and__4115__auto__;
}
})())){
return [G__37581__$2,", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__37581__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__37582){
var map__37583 = p__37582;
var map__37583__$1 = (((((!((map__37583 == null))))?(((((map__37583.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37583.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37583):map__37583);
var ed = map__37583__$1;
var exception_data = cljs.core.get.call(null,map__37583__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__37583__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
var message_37586 = (function (){var G__37585 = cljs.core.apply.call(null,cljs.core.str,"Figwheel: Compile Exception ",figwheel.client.format_messages.call(null,exception_data));
if(cljs.core.truth_(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(exception_data))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37585)," Error on ",figwheel.client.file_line_column.call(null,exception_data)].join('');
} else {
return G__37585;
}
})();
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),message_37586);

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__37587){
var map__37588 = p__37587;
var map__37588__$1 = (((((!((map__37588 == null))))?(((((map__37588.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37588.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37588):map__37588);
var w = map__37588__$1;
var message = cljs.core.get.call(null,map__37588__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",figwheel.client.file_line_column.call(null,message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.config_defaults !== 'undefined')){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"public/js/out/figwheel/client.cljs",33,1,362,362,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"public/js/out/figwheel/client.cljs",30,1,355,355,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(figwheel.client.utils.html_env_QMARK_.call(null)){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = (((!(figwheel.client.utils.html_env_QMARK_.call(null))))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__4115__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__4115__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__4115__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__37590 = cljs.core.seq.call(null,plugins);
var chunk__37591 = null;
var count__37592 = (0);
var i__37593 = (0);
while(true){
if((i__37593 < count__37592)){
var vec__37600 = cljs.core._nth.call(null,chunk__37591,i__37593);
var k = cljs.core.nth.call(null,vec__37600,(0),null);
var plugin = cljs.core.nth.call(null,vec__37600,(1),null);
if(cljs.core.truth_(plugin)){
var pl_37606 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__37590,chunk__37591,count__37592,i__37593,pl_37606,vec__37600,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_37606.call(null,msg_hist);
});})(seq__37590,chunk__37591,count__37592,i__37593,pl_37606,vec__37600,k,plugin))
);
} else {
}


var G__37607 = seq__37590;
var G__37608 = chunk__37591;
var G__37609 = count__37592;
var G__37610 = (i__37593 + (1));
seq__37590 = G__37607;
chunk__37591 = G__37608;
count__37592 = G__37609;
i__37593 = G__37610;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__37590);
if(temp__5735__auto__){
var seq__37590__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37590__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__37590__$1);
var G__37611 = cljs.core.chunk_rest.call(null,seq__37590__$1);
var G__37612 = c__4556__auto__;
var G__37613 = cljs.core.count.call(null,c__4556__auto__);
var G__37614 = (0);
seq__37590 = G__37611;
chunk__37591 = G__37612;
count__37592 = G__37613;
i__37593 = G__37614;
continue;
} else {
var vec__37603 = cljs.core.first.call(null,seq__37590__$1);
var k = cljs.core.nth.call(null,vec__37603,(0),null);
var plugin = cljs.core.nth.call(null,vec__37603,(1),null);
if(cljs.core.truth_(plugin)){
var pl_37615 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__37590,chunk__37591,count__37592,i__37593,pl_37615,vec__37603,k,plugin,seq__37590__$1,temp__5735__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_37615.call(null,msg_hist);
});})(seq__37590,chunk__37591,count__37592,i__37593,pl_37615,vec__37603,k,plugin,seq__37590__$1,temp__5735__auto__))
);
} else {
}


var G__37616 = cljs.core.next.call(null,seq__37590__$1);
var G__37617 = null;
var G__37618 = (0);
var G__37619 = (0);
seq__37590 = G__37616;
chunk__37591 = G__37617;
count__37592 = G__37618;
i__37593 = G__37619;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__37621 = arguments.length;
switch (G__37621) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((((!((goog.dependencies_ == null)))) || ((((!((goog.debugLoader_ == null)))) && ((!((goog.debugLoader_.dependencies_ == null)))))))){
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.__figwheel_start_once__ !== 'undefined')){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
(figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts));

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__37622_37627 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__37623_37628 = null;
var count__37624_37629 = (0);
var i__37625_37630 = (0);
while(true){
if((i__37625_37630 < count__37624_37629)){
var msg_37631 = cljs.core._nth.call(null,chunk__37623_37628,i__37625_37630);
figwheel.client.socket.handle_incoming_message.call(null,msg_37631);


var G__37632 = seq__37622_37627;
var G__37633 = chunk__37623_37628;
var G__37634 = count__37624_37629;
var G__37635 = (i__37625_37630 + (1));
seq__37622_37627 = G__37632;
chunk__37623_37628 = G__37633;
count__37624_37629 = G__37634;
i__37625_37630 = G__37635;
continue;
} else {
var temp__5735__auto___37636 = cljs.core.seq.call(null,seq__37622_37627);
if(temp__5735__auto___37636){
var seq__37622_37637__$1 = temp__5735__auto___37636;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37622_37637__$1)){
var c__4556__auto___37638 = cljs.core.chunk_first.call(null,seq__37622_37637__$1);
var G__37639 = cljs.core.chunk_rest.call(null,seq__37622_37637__$1);
var G__37640 = c__4556__auto___37638;
var G__37641 = cljs.core.count.call(null,c__4556__auto___37638);
var G__37642 = (0);
seq__37622_37627 = G__37639;
chunk__37623_37628 = G__37640;
count__37624_37629 = G__37641;
i__37625_37630 = G__37642;
continue;
} else {
var msg_37643 = cljs.core.first.call(null,seq__37622_37637__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_37643);


var G__37644 = cljs.core.next.call(null,seq__37622_37637__$1);
var G__37645 = null;
var G__37646 = (0);
var G__37647 = (0);
seq__37622_37627 = G__37644;
chunk__37623_37628 = G__37645;
count__37624_37629 = G__37646;
i__37625_37630 = G__37647;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
} else {
return null;
}
}));

(figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
}));

(figwheel.client.start.cljs$lang$maxFixedArity = 1);

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__4742__auto__ = [];
var len__4736__auto___37652 = arguments.length;
var i__4737__auto___37653 = (0);
while(true){
if((i__4737__auto___37653 < len__4736__auto___37652)){
args__4742__auto__.push((arguments[i__4737__auto___37653]));

var G__37654 = (i__4737__auto___37653 + (1));
i__4737__auto___37653 = G__37654;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__37649){
var map__37650 = p__37649;
var map__37650__$1 = (((((!((map__37650 == null))))?(((((map__37650.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37650.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37650):map__37650);
var opts = map__37650__$1;
return figwheel.client.start.call(null,opts);
}));

(figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq37648){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37648));
}));

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e37655){if((e37655 instanceof Error)){
var e = e37655;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e37655;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
(goog.dependencies_ = true);
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),(function (p__37656){
var map__37657 = p__37656;
var map__37657__$1 = (((((!((map__37657 == null))))?(((((map__37657.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37657.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37657):map__37657);
var msg_name = cljs.core.get.call(null,map__37657__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return (location.href = location.href);
} else {
return null;
}
}));
});

//# sourceMappingURL=client.js.map?rel=1593965207346
