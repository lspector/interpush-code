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
}catch (e32285){if((e32285 instanceof Error)){
var e = e32285;
return "Error: Unable to stringify";
} else {
throw e32285;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__32288 = arguments.length;
switch (G__32288) {
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
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__32286_SHARP_){
if(typeof p1__32286_SHARP_ === 'string'){
return p1__32286_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__32286_SHARP_);
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
var len__4736__auto___32291 = arguments.length;
var i__4737__auto___32292 = (0);
while(true){
if((i__4737__auto___32292 < len__4736__auto___32291)){
args__4742__auto__.push((arguments[i__4737__auto___32292]));

var G__32293 = (i__4737__auto___32292 + (1));
i__4737__auto___32292 = G__32293;
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
(figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq32290){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32290));
}));

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4742__auto__ = [];
var len__4736__auto___32295 = arguments.length;
var i__4737__auto___32296 = (0);
while(true){
if((i__4737__auto___32296 < len__4736__auto___32295)){
args__4742__auto__.push((arguments[i__4737__auto___32296]));

var G__32297 = (i__4737__auto___32296 + (1));
i__4737__auto___32296 = G__32297;
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
(figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq32294){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32294));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__32298){
var map__32299 = p__32298;
var map__32299__$1 = (((((!((map__32299 == null))))?(((((map__32299.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32299.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32299):map__32299);
var message = cljs.core.get.call(null,map__32299__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__32299__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__28304__auto___32378 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__28305__auto__ = (function (){var switch__28209__auto__ = (function (state_32350){
var state_val_32351 = (state_32350[(1)]);
if((state_val_32351 === (7))){
var inst_32346 = (state_32350[(2)]);
var state_32350__$1 = state_32350;
var statearr_32352_32379 = state_32350__$1;
(statearr_32352_32379[(2)] = inst_32346);

(statearr_32352_32379[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32351 === (1))){
var state_32350__$1 = state_32350;
var statearr_32353_32380 = state_32350__$1;
(statearr_32353_32380[(2)] = null);

(statearr_32353_32380[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32351 === (4))){
var inst_32303 = (state_32350[(7)]);
var inst_32303__$1 = (state_32350[(2)]);
var state_32350__$1 = (function (){var statearr_32354 = state_32350;
(statearr_32354[(7)] = inst_32303__$1);

return statearr_32354;
})();
if(cljs.core.truth_(inst_32303__$1)){
var statearr_32355_32381 = state_32350__$1;
(statearr_32355_32381[(1)] = (5));

} else {
var statearr_32356_32382 = state_32350__$1;
(statearr_32356_32382[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32351 === (15))){
var inst_32310 = (state_32350[(8)]);
var inst_32325 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_32310);
var inst_32326 = cljs.core.first.call(null,inst_32325);
var inst_32327 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_32326);
var inst_32328 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_32327)].join('');
var inst_32329 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_32328);
var state_32350__$1 = state_32350;
var statearr_32357_32383 = state_32350__$1;
(statearr_32357_32383[(2)] = inst_32329);

(statearr_32357_32383[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32351 === (13))){
var inst_32334 = (state_32350[(2)]);
var state_32350__$1 = state_32350;
var statearr_32358_32384 = state_32350__$1;
(statearr_32358_32384[(2)] = inst_32334);

(statearr_32358_32384[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32351 === (6))){
var state_32350__$1 = state_32350;
var statearr_32359_32385 = state_32350__$1;
(statearr_32359_32385[(2)] = null);

(statearr_32359_32385[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32351 === (17))){
var inst_32332 = (state_32350[(2)]);
var state_32350__$1 = state_32350;
var statearr_32360_32386 = state_32350__$1;
(statearr_32360_32386[(2)] = inst_32332);

(statearr_32360_32386[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32351 === (3))){
var inst_32348 = (state_32350[(2)]);
var state_32350__$1 = state_32350;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32350__$1,inst_32348);
} else {
if((state_val_32351 === (12))){
var inst_32309 = (state_32350[(9)]);
var inst_32323 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_32309,opts);
var state_32350__$1 = state_32350;
if(inst_32323){
var statearr_32361_32387 = state_32350__$1;
(statearr_32361_32387[(1)] = (15));

} else {
var statearr_32362_32388 = state_32350__$1;
(statearr_32362_32388[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32351 === (2))){
var state_32350__$1 = state_32350;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32350__$1,(4),ch);
} else {
if((state_val_32351 === (11))){
var inst_32310 = (state_32350[(8)]);
var inst_32315 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_32316 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_32310);
var inst_32317 = cljs.core.async.timeout.call(null,(1000));
var inst_32318 = [inst_32316,inst_32317];
var inst_32319 = (new cljs.core.PersistentVector(null,2,(5),inst_32315,inst_32318,null));
var state_32350__$1 = state_32350;
return cljs.core.async.ioc_alts_BANG_.call(null,state_32350__$1,(14),inst_32319);
} else {
if((state_val_32351 === (9))){
var inst_32310 = (state_32350[(8)]);
var inst_32336 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_32337 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_32310);
var inst_32338 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_32337);
var inst_32339 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_32338)].join('');
var inst_32340 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_32339);
var state_32350__$1 = (function (){var statearr_32363 = state_32350;
(statearr_32363[(10)] = inst_32336);

return statearr_32363;
})();
var statearr_32364_32389 = state_32350__$1;
(statearr_32364_32389[(2)] = inst_32340);

(statearr_32364_32389[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32351 === (5))){
var inst_32303 = (state_32350[(7)]);
var inst_32305 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_32306 = (new cljs.core.PersistentArrayMap(null,2,inst_32305,null));
var inst_32307 = (new cljs.core.PersistentHashSet(null,inst_32306,null));
var inst_32308 = figwheel.client.focus_msgs.call(null,inst_32307,inst_32303);
var inst_32309 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_32308);
var inst_32310 = cljs.core.first.call(null,inst_32308);
var inst_32311 = figwheel.client.autoload_QMARK_.call(null);
var state_32350__$1 = (function (){var statearr_32365 = state_32350;
(statearr_32365[(9)] = inst_32309);

(statearr_32365[(8)] = inst_32310);

return statearr_32365;
})();
if(cljs.core.truth_(inst_32311)){
var statearr_32366_32390 = state_32350__$1;
(statearr_32366_32390[(1)] = (8));

} else {
var statearr_32367_32391 = state_32350__$1;
(statearr_32367_32391[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32351 === (14))){
var inst_32321 = (state_32350[(2)]);
var state_32350__$1 = state_32350;
var statearr_32368_32392 = state_32350__$1;
(statearr_32368_32392[(2)] = inst_32321);

(statearr_32368_32392[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32351 === (16))){
var state_32350__$1 = state_32350;
var statearr_32369_32393 = state_32350__$1;
(statearr_32369_32393[(2)] = null);

(statearr_32369_32393[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32351 === (10))){
var inst_32342 = (state_32350[(2)]);
var state_32350__$1 = (function (){var statearr_32370 = state_32350;
(statearr_32370[(11)] = inst_32342);

return statearr_32370;
})();
var statearr_32371_32394 = state_32350__$1;
(statearr_32371_32394[(2)] = null);

(statearr_32371_32394[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32351 === (8))){
var inst_32309 = (state_32350[(9)]);
var inst_32313 = figwheel.client.reload_file_state_QMARK_.call(null,inst_32309,opts);
var state_32350__$1 = state_32350;
if(cljs.core.truth_(inst_32313)){
var statearr_32372_32395 = state_32350__$1;
(statearr_32372_32395[(1)] = (11));

} else {
var statearr_32373_32396 = state_32350__$1;
(statearr_32373_32396[(1)] = (12));

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
var figwheel$client$file_reloader_plugin_$_state_machine__28210__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__28210__auto____0 = (function (){
var statearr_32374 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32374[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__28210__auto__);

(statearr_32374[(1)] = (1));

return statearr_32374;
});
var figwheel$client$file_reloader_plugin_$_state_machine__28210__auto____1 = (function (state_32350){
while(true){
var ret_value__28211__auto__ = (function (){try{while(true){
var result__28212__auto__ = switch__28209__auto__.call(null,state_32350);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28212__auto__;
}
break;
}
}catch (e32375){if((e32375 instanceof Object)){
var ex__28213__auto__ = e32375;
var statearr_32376_32397 = state_32350;
(statearr_32376_32397[(5)] = ex__28213__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32350);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32375;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32398 = state_32350;
state_32350 = G__32398;
continue;
} else {
return ret_value__28211__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__28210__auto__ = function(state_32350){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__28210__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__28210__auto____1.call(this,state_32350);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__28210__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__28210__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__28210__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__28210__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__28210__auto__;
})()
})();
var state__28306__auto__ = (function (){var statearr_32377 = f__28305__auto__.call(null);
(statearr_32377[(6)] = c__28304__auto___32378);

return statearr_32377;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28306__auto__);
}));


return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__32399_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__32399_SHARP_));
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
var base_path_32405 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__32401 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__32402 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__32403 = true;
var _STAR_print_fn_STAR__temp_val__32404 = (function (x){
return sb.append(x);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__32403);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__32404);

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
var result_value__$1 = (((!(typeof result_value === 'string')))?cljs.core.pr_str.call(null,result_value):result_value);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value__$1], null));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__32402);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__32401);
}}catch (e32400){if((e32400 instanceof Error)){
var e = e32400;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_32405], null));
} else {
var e = e32400;
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__32406){
var map__32407 = p__32406;
var map__32407__$1 = (((((!((map__32407 == null))))?(((((map__32407.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32407.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32407):map__32407);
var opts = map__32407__$1;
var build_id = cljs.core.get.call(null,map__32407__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return (function (p__32409){
var vec__32410 = p__32409;
var seq__32411 = cljs.core.seq.call(null,vec__32410);
var first__32412 = cljs.core.first.call(null,seq__32411);
var seq__32411__$1 = cljs.core.next.call(null,seq__32411);
var map__32413 = first__32412;
var map__32413__$1 = (((((!((map__32413 == null))))?(((((map__32413.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32413.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32413):map__32413);
var msg = map__32413__$1;
var msg_name = cljs.core.get.call(null,map__32413__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__32411__$1;
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
return (function (p__32415){
var vec__32416 = p__32415;
var seq__32417 = cljs.core.seq.call(null,vec__32416);
var first__32418 = cljs.core.first.call(null,seq__32417);
var seq__32417__$1 = cljs.core.next.call(null,seq__32417);
var map__32419 = first__32418;
var map__32419__$1 = (((((!((map__32419 == null))))?(((((map__32419.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32419.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32419):map__32419);
var msg = map__32419__$1;
var msg_name = cljs.core.get.call(null,map__32419__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__32417__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__32421){
var map__32422 = p__32421;
var map__32422__$1 = (((((!((map__32422 == null))))?(((((map__32422.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32422.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32422):map__32422);
var on_compile_warning = cljs.core.get.call(null,map__32422__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__32422__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return (function (p__32424){
var vec__32425 = p__32424;
var seq__32426 = cljs.core.seq.call(null,vec__32425);
var first__32427 = cljs.core.first.call(null,seq__32426);
var seq__32426__$1 = cljs.core.next.call(null,seq__32426);
var map__32428 = first__32427;
var map__32428__$1 = (((((!((map__32428 == null))))?(((((map__32428.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32428.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32428):map__32428);
var msg = map__32428__$1;
var msg_name = cljs.core.get.call(null,map__32428__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__32426__$1;
var pred__32430 = cljs.core._EQ_;
var expr__32431 = msg_name;
if(cljs.core.truth_(pred__32430.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__32431))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__32430.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__32431))){
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
var c__28304__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__28305__auto__ = (function (){var switch__28209__auto__ = (function (state_32520){
var state_val_32521 = (state_32520[(1)]);
if((state_val_32521 === (7))){
var inst_32440 = (state_32520[(2)]);
var state_32520__$1 = state_32520;
if(cljs.core.truth_(inst_32440)){
var statearr_32522_32569 = state_32520__$1;
(statearr_32522_32569[(1)] = (8));

} else {
var statearr_32523_32570 = state_32520__$1;
(statearr_32523_32570[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32521 === (20))){
var inst_32514 = (state_32520[(2)]);
var state_32520__$1 = state_32520;
var statearr_32524_32571 = state_32520__$1;
(statearr_32524_32571[(2)] = inst_32514);

(statearr_32524_32571[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32521 === (27))){
var inst_32510 = (state_32520[(2)]);
var state_32520__$1 = state_32520;
var statearr_32525_32572 = state_32520__$1;
(statearr_32525_32572[(2)] = inst_32510);

(statearr_32525_32572[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32521 === (1))){
var inst_32433 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_32520__$1 = state_32520;
if(cljs.core.truth_(inst_32433)){
var statearr_32526_32573 = state_32520__$1;
(statearr_32526_32573[(1)] = (2));

} else {
var statearr_32527_32574 = state_32520__$1;
(statearr_32527_32574[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32521 === (24))){
var inst_32512 = (state_32520[(2)]);
var state_32520__$1 = state_32520;
var statearr_32528_32575 = state_32520__$1;
(statearr_32528_32575[(2)] = inst_32512);

(statearr_32528_32575[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32521 === (4))){
var inst_32518 = (state_32520[(2)]);
var state_32520__$1 = state_32520;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32520__$1,inst_32518);
} else {
if((state_val_32521 === (15))){
var inst_32516 = (state_32520[(2)]);
var state_32520__$1 = state_32520;
var statearr_32529_32576 = state_32520__$1;
(statearr_32529_32576[(2)] = inst_32516);

(statearr_32529_32576[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32521 === (21))){
var inst_32469 = (state_32520[(2)]);
var inst_32470 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32471 = figwheel.client.auto_jump_to_error.call(null,opts,inst_32470);
var state_32520__$1 = (function (){var statearr_32530 = state_32520;
(statearr_32530[(7)] = inst_32469);

return statearr_32530;
})();
var statearr_32531_32577 = state_32520__$1;
(statearr_32531_32577[(2)] = inst_32471);

(statearr_32531_32577[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32521 === (31))){
var inst_32499 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_32520__$1 = state_32520;
if(inst_32499){
var statearr_32532_32578 = state_32520__$1;
(statearr_32532_32578[(1)] = (34));

} else {
var statearr_32533_32579 = state_32520__$1;
(statearr_32533_32579[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32521 === (32))){
var inst_32508 = (state_32520[(2)]);
var state_32520__$1 = state_32520;
var statearr_32534_32580 = state_32520__$1;
(statearr_32534_32580[(2)] = inst_32508);

(statearr_32534_32580[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32521 === (33))){
var inst_32495 = (state_32520[(2)]);
var inst_32496 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32497 = figwheel.client.auto_jump_to_error.call(null,opts,inst_32496);
var state_32520__$1 = (function (){var statearr_32535 = state_32520;
(statearr_32535[(8)] = inst_32495);

return statearr_32535;
})();
var statearr_32536_32581 = state_32520__$1;
(statearr_32536_32581[(2)] = inst_32497);

(statearr_32536_32581[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32521 === (13))){
var inst_32454 = figwheel.client.heads_up.clear.call(null);
var state_32520__$1 = state_32520;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32520__$1,(16),inst_32454);
} else {
if((state_val_32521 === (22))){
var inst_32475 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32476 = figwheel.client.heads_up.append_warning_message.call(null,inst_32475);
var state_32520__$1 = state_32520;
var statearr_32537_32582 = state_32520__$1;
(statearr_32537_32582[(2)] = inst_32476);

(statearr_32537_32582[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32521 === (36))){
var inst_32506 = (state_32520[(2)]);
var state_32520__$1 = state_32520;
var statearr_32538_32583 = state_32520__$1;
(statearr_32538_32583[(2)] = inst_32506);

(statearr_32538_32583[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32521 === (29))){
var inst_32486 = (state_32520[(2)]);
var inst_32487 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32488 = figwheel.client.auto_jump_to_error.call(null,opts,inst_32487);
var state_32520__$1 = (function (){var statearr_32539 = state_32520;
(statearr_32539[(9)] = inst_32486);

return statearr_32539;
})();
var statearr_32540_32584 = state_32520__$1;
(statearr_32540_32584[(2)] = inst_32488);

(statearr_32540_32584[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32521 === (6))){
var inst_32435 = (state_32520[(10)]);
var state_32520__$1 = state_32520;
var statearr_32541_32585 = state_32520__$1;
(statearr_32541_32585[(2)] = inst_32435);

(statearr_32541_32585[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32521 === (28))){
var inst_32482 = (state_32520[(2)]);
var inst_32483 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32484 = figwheel.client.heads_up.display_warning.call(null,inst_32483);
var state_32520__$1 = (function (){var statearr_32542 = state_32520;
(statearr_32542[(11)] = inst_32482);

return statearr_32542;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32520__$1,(29),inst_32484);
} else {
if((state_val_32521 === (25))){
var inst_32480 = figwheel.client.heads_up.clear.call(null);
var state_32520__$1 = state_32520;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32520__$1,(28),inst_32480);
} else {
if((state_val_32521 === (34))){
var inst_32501 = figwheel.client.heads_up.flash_loaded.call(null);
var state_32520__$1 = state_32520;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32520__$1,(37),inst_32501);
} else {
if((state_val_32521 === (17))){
var inst_32460 = (state_32520[(2)]);
var inst_32461 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32462 = figwheel.client.auto_jump_to_error.call(null,opts,inst_32461);
var state_32520__$1 = (function (){var statearr_32543 = state_32520;
(statearr_32543[(12)] = inst_32460);

return statearr_32543;
})();
var statearr_32544_32586 = state_32520__$1;
(statearr_32544_32586[(2)] = inst_32462);

(statearr_32544_32586[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32521 === (3))){
var inst_32452 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_32520__$1 = state_32520;
if(inst_32452){
var statearr_32545_32587 = state_32520__$1;
(statearr_32545_32587[(1)] = (13));

} else {
var statearr_32546_32588 = state_32520__$1;
(statearr_32546_32588[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32521 === (12))){
var inst_32448 = (state_32520[(2)]);
var state_32520__$1 = state_32520;
var statearr_32547_32589 = state_32520__$1;
(statearr_32547_32589[(2)] = inst_32448);

(statearr_32547_32589[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32521 === (2))){
var inst_32435 = (state_32520[(10)]);
var inst_32435__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_32520__$1 = (function (){var statearr_32548 = state_32520;
(statearr_32548[(10)] = inst_32435__$1);

return statearr_32548;
})();
if(cljs.core.truth_(inst_32435__$1)){
var statearr_32549_32590 = state_32520__$1;
(statearr_32549_32590[(1)] = (5));

} else {
var statearr_32550_32591 = state_32520__$1;
(statearr_32550_32591[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32521 === (23))){
var inst_32478 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_32520__$1 = state_32520;
if(inst_32478){
var statearr_32551_32592 = state_32520__$1;
(statearr_32551_32592[(1)] = (25));

} else {
var statearr_32552_32593 = state_32520__$1;
(statearr_32552_32593[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32521 === (35))){
var state_32520__$1 = state_32520;
var statearr_32553_32594 = state_32520__$1;
(statearr_32553_32594[(2)] = null);

(statearr_32553_32594[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32521 === (19))){
var inst_32473 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_32520__$1 = state_32520;
if(inst_32473){
var statearr_32554_32595 = state_32520__$1;
(statearr_32554_32595[(1)] = (22));

} else {
var statearr_32555_32596 = state_32520__$1;
(statearr_32555_32596[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32521 === (11))){
var inst_32444 = (state_32520[(2)]);
var state_32520__$1 = state_32520;
var statearr_32556_32597 = state_32520__$1;
(statearr_32556_32597[(2)] = inst_32444);

(statearr_32556_32597[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32521 === (9))){
var inst_32446 = figwheel.client.heads_up.clear.call(null);
var state_32520__$1 = state_32520;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32520__$1,(12),inst_32446);
} else {
if((state_val_32521 === (5))){
var inst_32437 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_32520__$1 = state_32520;
var statearr_32557_32598 = state_32520__$1;
(statearr_32557_32598[(2)] = inst_32437);

(statearr_32557_32598[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32521 === (14))){
var inst_32464 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_32520__$1 = state_32520;
if(inst_32464){
var statearr_32558_32599 = state_32520__$1;
(statearr_32558_32599[(1)] = (18));

} else {
var statearr_32559_32600 = state_32520__$1;
(statearr_32559_32600[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32521 === (26))){
var inst_32490 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_32520__$1 = state_32520;
if(inst_32490){
var statearr_32560_32601 = state_32520__$1;
(statearr_32560_32601[(1)] = (30));

} else {
var statearr_32561_32602 = state_32520__$1;
(statearr_32561_32602[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32521 === (16))){
var inst_32456 = (state_32520[(2)]);
var inst_32457 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32458 = figwheel.client.heads_up.display_exception.call(null,inst_32457);
var state_32520__$1 = (function (){var statearr_32562 = state_32520;
(statearr_32562[(13)] = inst_32456);

return statearr_32562;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32520__$1,(17),inst_32458);
} else {
if((state_val_32521 === (30))){
var inst_32492 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32493 = figwheel.client.heads_up.display_warning.call(null,inst_32492);
var state_32520__$1 = state_32520;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32520__$1,(33),inst_32493);
} else {
if((state_val_32521 === (10))){
var inst_32450 = (state_32520[(2)]);
var state_32520__$1 = state_32520;
var statearr_32563_32603 = state_32520__$1;
(statearr_32563_32603[(2)] = inst_32450);

(statearr_32563_32603[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32521 === (18))){
var inst_32466 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32467 = figwheel.client.heads_up.display_exception.call(null,inst_32466);
var state_32520__$1 = state_32520;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32520__$1,(21),inst_32467);
} else {
if((state_val_32521 === (37))){
var inst_32503 = (state_32520[(2)]);
var state_32520__$1 = state_32520;
var statearr_32564_32604 = state_32520__$1;
(statearr_32564_32604[(2)] = inst_32503);

(statearr_32564_32604[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32521 === (8))){
var inst_32442 = figwheel.client.heads_up.flash_loaded.call(null);
var state_32520__$1 = state_32520;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32520__$1,(11),inst_32442);
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
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28210__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28210__auto____0 = (function (){
var statearr_32565 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32565[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28210__auto__);

(statearr_32565[(1)] = (1));

return statearr_32565;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28210__auto____1 = (function (state_32520){
while(true){
var ret_value__28211__auto__ = (function (){try{while(true){
var result__28212__auto__ = switch__28209__auto__.call(null,state_32520);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28212__auto__;
}
break;
}
}catch (e32566){if((e32566 instanceof Object)){
var ex__28213__auto__ = e32566;
var statearr_32567_32605 = state_32520;
(statearr_32567_32605[(5)] = ex__28213__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32520);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32566;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32606 = state_32520;
state_32520 = G__32606;
continue;
} else {
return ret_value__28211__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28210__auto__ = function(state_32520){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28210__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28210__auto____1.call(this,state_32520);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28210__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28210__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28210__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28210__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28210__auto__;
})()
})();
var state__28306__auto__ = (function (){var statearr_32568 = f__28305__auto__.call(null);
(statearr_32568[(6)] = c__28304__auto__);

return statearr_32568;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28306__auto__);
}));

return c__28304__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__28304__auto___32635 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__28305__auto__ = (function (){var switch__28209__auto__ = (function (state_32621){
var state_val_32622 = (state_32621[(1)]);
if((state_val_32622 === (1))){
var state_32621__$1 = state_32621;
var statearr_32623_32636 = state_32621__$1;
(statearr_32623_32636[(2)] = null);

(statearr_32623_32636[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32622 === (2))){
var state_32621__$1 = state_32621;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32621__$1,(4),ch);
} else {
if((state_val_32622 === (3))){
var inst_32619 = (state_32621[(2)]);
var state_32621__$1 = state_32621;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32621__$1,inst_32619);
} else {
if((state_val_32622 === (4))){
var inst_32609 = (state_32621[(7)]);
var inst_32609__$1 = (state_32621[(2)]);
var state_32621__$1 = (function (){var statearr_32624 = state_32621;
(statearr_32624[(7)] = inst_32609__$1);

return statearr_32624;
})();
if(cljs.core.truth_(inst_32609__$1)){
var statearr_32625_32637 = state_32621__$1;
(statearr_32625_32637[(1)] = (5));

} else {
var statearr_32626_32638 = state_32621__$1;
(statearr_32626_32638[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32622 === (5))){
var inst_32609 = (state_32621[(7)]);
var inst_32611 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_32609);
var state_32621__$1 = state_32621;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32621__$1,(8),inst_32611);
} else {
if((state_val_32622 === (6))){
var state_32621__$1 = state_32621;
var statearr_32627_32639 = state_32621__$1;
(statearr_32627_32639[(2)] = null);

(statearr_32627_32639[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32622 === (7))){
var inst_32617 = (state_32621[(2)]);
var state_32621__$1 = state_32621;
var statearr_32628_32640 = state_32621__$1;
(statearr_32628_32640[(2)] = inst_32617);

(statearr_32628_32640[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32622 === (8))){
var inst_32613 = (state_32621[(2)]);
var state_32621__$1 = (function (){var statearr_32629 = state_32621;
(statearr_32629[(8)] = inst_32613);

return statearr_32629;
})();
var statearr_32630_32641 = state_32621__$1;
(statearr_32630_32641[(2)] = null);

(statearr_32630_32641[(1)] = (2));


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
var figwheel$client$heads_up_plugin_$_state_machine__28210__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__28210__auto____0 = (function (){
var statearr_32631 = [null,null,null,null,null,null,null,null,null];
(statearr_32631[(0)] = figwheel$client$heads_up_plugin_$_state_machine__28210__auto__);

(statearr_32631[(1)] = (1));

return statearr_32631;
});
var figwheel$client$heads_up_plugin_$_state_machine__28210__auto____1 = (function (state_32621){
while(true){
var ret_value__28211__auto__ = (function (){try{while(true){
var result__28212__auto__ = switch__28209__auto__.call(null,state_32621);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28212__auto__;
}
break;
}
}catch (e32632){if((e32632 instanceof Object)){
var ex__28213__auto__ = e32632;
var statearr_32633_32642 = state_32621;
(statearr_32633_32642[(5)] = ex__28213__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32621);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32632;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32643 = state_32621;
state_32621 = G__32643;
continue;
} else {
return ret_value__28211__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__28210__auto__ = function(state_32621){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__28210__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__28210__auto____1.call(this,state_32621);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__28210__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__28210__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__28210__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__28210__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__28210__auto__;
})()
})();
var state__28306__auto__ = (function (){var statearr_32634 = f__28305__auto__.call(null);
(statearr_32634[(6)] = c__28304__auto___32635);

return statearr_32634;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28306__auto__);
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
var c__28304__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__28305__auto__ = (function (){var switch__28209__auto__ = (function (state_32649){
var state_val_32650 = (state_32649[(1)]);
if((state_val_32650 === (1))){
var inst_32644 = cljs.core.async.timeout.call(null,(3000));
var state_32649__$1 = state_32649;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32649__$1,(2),inst_32644);
} else {
if((state_val_32650 === (2))){
var inst_32646 = (state_32649[(2)]);
var inst_32647 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_32649__$1 = (function (){var statearr_32651 = state_32649;
(statearr_32651[(7)] = inst_32646);

return statearr_32651;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32649__$1,inst_32647);
} else {
return null;
}
}
});
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__28210__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__28210__auto____0 = (function (){
var statearr_32652 = [null,null,null,null,null,null,null,null];
(statearr_32652[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__28210__auto__);

(statearr_32652[(1)] = (1));

return statearr_32652;
});
var figwheel$client$enforce_project_plugin_$_state_machine__28210__auto____1 = (function (state_32649){
while(true){
var ret_value__28211__auto__ = (function (){try{while(true){
var result__28212__auto__ = switch__28209__auto__.call(null,state_32649);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28212__auto__;
}
break;
}
}catch (e32653){if((e32653 instanceof Object)){
var ex__28213__auto__ = e32653;
var statearr_32654_32656 = state_32649;
(statearr_32654_32656[(5)] = ex__28213__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32649);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32653;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32657 = state_32649;
state_32649 = G__32657;
continue;
} else {
return ret_value__28211__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__28210__auto__ = function(state_32649){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__28210__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__28210__auto____1.call(this,state_32649);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__28210__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__28210__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__28210__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__28210__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__28210__auto__;
})()
})();
var state__28306__auto__ = (function (){var statearr_32655 = f__28305__auto__.call(null);
(statearr_32655[(6)] = c__28304__auto__);

return statearr_32655;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28306__auto__);
}));

return c__28304__auto__;
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
var c__28304__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__28305__auto__ = (function (){var switch__28209__auto__ = (function (state_32664){
var state_val_32665 = (state_32664[(1)]);
if((state_val_32665 === (1))){
var inst_32658 = cljs.core.async.timeout.call(null,(2000));
var state_32664__$1 = state_32664;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32664__$1,(2),inst_32658);
} else {
if((state_val_32665 === (2))){
var inst_32660 = (state_32664[(2)]);
var inst_32661 = ["Figwheel Client Version <strong>",figwheel.client._figwheel_version_,"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_32662 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_32661);
var state_32664__$1 = (function (){var statearr_32666 = state_32664;
(statearr_32666[(7)] = inst_32660);

return statearr_32666;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32664__$1,inst_32662);
} else {
return null;
}
}
});
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28210__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28210__auto____0 = (function (){
var statearr_32667 = [null,null,null,null,null,null,null,null];
(statearr_32667[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28210__auto__);

(statearr_32667[(1)] = (1));

return statearr_32667;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28210__auto____1 = (function (state_32664){
while(true){
var ret_value__28211__auto__ = (function (){try{while(true){
var result__28212__auto__ = switch__28209__auto__.call(null,state_32664);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28212__auto__;
}
break;
}
}catch (e32668){if((e32668 instanceof Object)){
var ex__28213__auto__ = e32668;
var statearr_32669_32671 = state_32664;
(statearr_32669_32671[(5)] = ex__28213__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32664);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32668;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32672 = state_32664;
state_32664 = G__32672;
continue;
} else {
return ret_value__28211__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28210__auto__ = function(state_32664){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28210__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28210__auto____1.call(this,state_32664);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28210__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28210__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28210__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28210__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28210__auto__;
})()
})();
var state__28306__auto__ = (function (){var statearr_32670 = f__28305__auto__.call(null);
(statearr_32670[(6)] = c__28304__auto__);

return statearr_32670;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28306__auto__);
}));

return c__28304__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__32673){
var map__32674 = p__32673;
var map__32674__$1 = (((((!((map__32674 == null))))?(((((map__32674.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32674.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32674):map__32674);
var file = cljs.core.get.call(null,map__32674__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__32674__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__32674__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__32676 = "";
var G__32676__$1 = (cljs.core.truth_(file)?[G__32676,"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__32676);
var G__32676__$2 = (cljs.core.truth_(line)?[G__32676__$1," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__32676__$1);
if(cljs.core.truth_((function (){var and__4115__auto__ = line;
if(cljs.core.truth_(and__4115__auto__)){
return column;
} else {
return and__4115__auto__;
}
})())){
return [G__32676__$2,", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__32676__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__32677){
var map__32678 = p__32677;
var map__32678__$1 = (((((!((map__32678 == null))))?(((((map__32678.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32678.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32678):map__32678);
var ed = map__32678__$1;
var exception_data = cljs.core.get.call(null,map__32678__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__32678__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
var message_32681 = (function (){var G__32680 = cljs.core.apply.call(null,cljs.core.str,"Figwheel: Compile Exception ",figwheel.client.format_messages.call(null,exception_data));
if(cljs.core.truth_(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(exception_data))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32680)," Error on ",figwheel.client.file_line_column.call(null,exception_data)].join('');
} else {
return G__32680;
}
})();
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),message_32681);

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__32682){
var map__32683 = p__32682;
var map__32683__$1 = (((((!((map__32683 == null))))?(((((map__32683.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32683.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32683):map__32683);
var w = map__32683__$1;
var message = cljs.core.get.call(null,map__32683__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__32685 = cljs.core.seq.call(null,plugins);
var chunk__32686 = null;
var count__32687 = (0);
var i__32688 = (0);
while(true){
if((i__32688 < count__32687)){
var vec__32695 = cljs.core._nth.call(null,chunk__32686,i__32688);
var k = cljs.core.nth.call(null,vec__32695,(0),null);
var plugin = cljs.core.nth.call(null,vec__32695,(1),null);
if(cljs.core.truth_(plugin)){
var pl_32701 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__32685,chunk__32686,count__32687,i__32688,pl_32701,vec__32695,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_32701.call(null,msg_hist);
});})(seq__32685,chunk__32686,count__32687,i__32688,pl_32701,vec__32695,k,plugin))
);
} else {
}


var G__32702 = seq__32685;
var G__32703 = chunk__32686;
var G__32704 = count__32687;
var G__32705 = (i__32688 + (1));
seq__32685 = G__32702;
chunk__32686 = G__32703;
count__32687 = G__32704;
i__32688 = G__32705;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__32685);
if(temp__5735__auto__){
var seq__32685__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32685__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__32685__$1);
var G__32706 = cljs.core.chunk_rest.call(null,seq__32685__$1);
var G__32707 = c__4556__auto__;
var G__32708 = cljs.core.count.call(null,c__4556__auto__);
var G__32709 = (0);
seq__32685 = G__32706;
chunk__32686 = G__32707;
count__32687 = G__32708;
i__32688 = G__32709;
continue;
} else {
var vec__32698 = cljs.core.first.call(null,seq__32685__$1);
var k = cljs.core.nth.call(null,vec__32698,(0),null);
var plugin = cljs.core.nth.call(null,vec__32698,(1),null);
if(cljs.core.truth_(plugin)){
var pl_32710 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__32685,chunk__32686,count__32687,i__32688,pl_32710,vec__32698,k,plugin,seq__32685__$1,temp__5735__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_32710.call(null,msg_hist);
});})(seq__32685,chunk__32686,count__32687,i__32688,pl_32710,vec__32698,k,plugin,seq__32685__$1,temp__5735__auto__))
);
} else {
}


var G__32711 = cljs.core.next.call(null,seq__32685__$1);
var G__32712 = null;
var G__32713 = (0);
var G__32714 = (0);
seq__32685 = G__32711;
chunk__32686 = G__32712;
count__32687 = G__32713;
i__32688 = G__32714;
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
var G__32716 = arguments.length;
switch (G__32716) {
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

var seq__32717_32722 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__32718_32723 = null;
var count__32719_32724 = (0);
var i__32720_32725 = (0);
while(true){
if((i__32720_32725 < count__32719_32724)){
var msg_32726 = cljs.core._nth.call(null,chunk__32718_32723,i__32720_32725);
figwheel.client.socket.handle_incoming_message.call(null,msg_32726);


var G__32727 = seq__32717_32722;
var G__32728 = chunk__32718_32723;
var G__32729 = count__32719_32724;
var G__32730 = (i__32720_32725 + (1));
seq__32717_32722 = G__32727;
chunk__32718_32723 = G__32728;
count__32719_32724 = G__32729;
i__32720_32725 = G__32730;
continue;
} else {
var temp__5735__auto___32731 = cljs.core.seq.call(null,seq__32717_32722);
if(temp__5735__auto___32731){
var seq__32717_32732__$1 = temp__5735__auto___32731;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32717_32732__$1)){
var c__4556__auto___32733 = cljs.core.chunk_first.call(null,seq__32717_32732__$1);
var G__32734 = cljs.core.chunk_rest.call(null,seq__32717_32732__$1);
var G__32735 = c__4556__auto___32733;
var G__32736 = cljs.core.count.call(null,c__4556__auto___32733);
var G__32737 = (0);
seq__32717_32722 = G__32734;
chunk__32718_32723 = G__32735;
count__32719_32724 = G__32736;
i__32720_32725 = G__32737;
continue;
} else {
var msg_32738 = cljs.core.first.call(null,seq__32717_32732__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_32738);


var G__32739 = cljs.core.next.call(null,seq__32717_32732__$1);
var G__32740 = null;
var G__32741 = (0);
var G__32742 = (0);
seq__32717_32722 = G__32739;
chunk__32718_32723 = G__32740;
count__32719_32724 = G__32741;
i__32720_32725 = G__32742;
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
var len__4736__auto___32747 = arguments.length;
var i__4737__auto___32748 = (0);
while(true){
if((i__4737__auto___32748 < len__4736__auto___32747)){
args__4742__auto__.push((arguments[i__4737__auto___32748]));

var G__32749 = (i__4737__auto___32748 + (1));
i__4737__auto___32748 = G__32749;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__32744){
var map__32745 = p__32744;
var map__32745__$1 = (((((!((map__32745 == null))))?(((((map__32745.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32745.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32745):map__32745);
var opts = map__32745__$1;
return figwheel.client.start.call(null,opts);
}));

(figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq32743){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32743));
}));

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e32750){if((e32750 instanceof Error)){
var e = e32750;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e32750;

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

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),(function (p__32751){
var map__32752 = p__32751;
var map__32752__$1 = (((((!((map__32752 == null))))?(((((map__32752.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32752.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32752):map__32752);
var msg_name = cljs.core.get.call(null,map__32752__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return (location.href = location.href);
} else {
return null;
}
}));
});

//# sourceMappingURL=client.js.map?rel=1627432847159
