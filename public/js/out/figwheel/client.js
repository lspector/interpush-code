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
}catch (e31493){if((e31493 instanceof Error)){
var e = e31493;
return "Error: Unable to stringify";
} else {
throw e31493;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__31496 = arguments.length;
switch (G__31496) {
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
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__31494_SHARP_){
if(typeof p1__31494_SHARP_ === 'string'){
return p1__31494_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__31494_SHARP_);
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
var len__4736__auto___31499 = arguments.length;
var i__4737__auto___31500 = (0);
while(true){
if((i__4737__auto___31500 < len__4736__auto___31499)){
args__4742__auto__.push((arguments[i__4737__auto___31500]));

var G__31501 = (i__4737__auto___31500 + (1));
i__4737__auto___31500 = G__31501;
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
(figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq31498){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31498));
}));

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4742__auto__ = [];
var len__4736__auto___31503 = arguments.length;
var i__4737__auto___31504 = (0);
while(true){
if((i__4737__auto___31504 < len__4736__auto___31503)){
args__4742__auto__.push((arguments[i__4737__auto___31504]));

var G__31505 = (i__4737__auto___31504 + (1));
i__4737__auto___31504 = G__31505;
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
(figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq31502){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31502));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__31506){
var map__31507 = p__31506;
var map__31507__$1 = (((((!((map__31507 == null))))?(((((map__31507.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31507.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31507):map__31507);
var message = cljs.core.get.call(null,map__31507__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__31507__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__27404__auto___31586 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27405__auto__ = (function (){var switch__27309__auto__ = (function (state_31558){
var state_val_31559 = (state_31558[(1)]);
if((state_val_31559 === (7))){
var inst_31554 = (state_31558[(2)]);
var state_31558__$1 = state_31558;
var statearr_31560_31587 = state_31558__$1;
(statearr_31560_31587[(2)] = inst_31554);

(statearr_31560_31587[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31559 === (1))){
var state_31558__$1 = state_31558;
var statearr_31561_31588 = state_31558__$1;
(statearr_31561_31588[(2)] = null);

(statearr_31561_31588[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31559 === (4))){
var inst_31511 = (state_31558[(7)]);
var inst_31511__$1 = (state_31558[(2)]);
var state_31558__$1 = (function (){var statearr_31562 = state_31558;
(statearr_31562[(7)] = inst_31511__$1);

return statearr_31562;
})();
if(cljs.core.truth_(inst_31511__$1)){
var statearr_31563_31589 = state_31558__$1;
(statearr_31563_31589[(1)] = (5));

} else {
var statearr_31564_31590 = state_31558__$1;
(statearr_31564_31590[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31559 === (15))){
var inst_31518 = (state_31558[(8)]);
var inst_31533 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_31518);
var inst_31534 = cljs.core.first.call(null,inst_31533);
var inst_31535 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_31534);
var inst_31536 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_31535)].join('');
var inst_31537 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_31536);
var state_31558__$1 = state_31558;
var statearr_31565_31591 = state_31558__$1;
(statearr_31565_31591[(2)] = inst_31537);

(statearr_31565_31591[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31559 === (13))){
var inst_31542 = (state_31558[(2)]);
var state_31558__$1 = state_31558;
var statearr_31566_31592 = state_31558__$1;
(statearr_31566_31592[(2)] = inst_31542);

(statearr_31566_31592[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31559 === (6))){
var state_31558__$1 = state_31558;
var statearr_31567_31593 = state_31558__$1;
(statearr_31567_31593[(2)] = null);

(statearr_31567_31593[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31559 === (17))){
var inst_31540 = (state_31558[(2)]);
var state_31558__$1 = state_31558;
var statearr_31568_31594 = state_31558__$1;
(statearr_31568_31594[(2)] = inst_31540);

(statearr_31568_31594[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31559 === (3))){
var inst_31556 = (state_31558[(2)]);
var state_31558__$1 = state_31558;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31558__$1,inst_31556);
} else {
if((state_val_31559 === (12))){
var inst_31517 = (state_31558[(9)]);
var inst_31531 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_31517,opts);
var state_31558__$1 = state_31558;
if(inst_31531){
var statearr_31569_31595 = state_31558__$1;
(statearr_31569_31595[(1)] = (15));

} else {
var statearr_31570_31596 = state_31558__$1;
(statearr_31570_31596[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31559 === (2))){
var state_31558__$1 = state_31558;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31558__$1,(4),ch);
} else {
if((state_val_31559 === (11))){
var inst_31518 = (state_31558[(8)]);
var inst_31523 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31524 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_31518);
var inst_31525 = cljs.core.async.timeout.call(null,(1000));
var inst_31526 = [inst_31524,inst_31525];
var inst_31527 = (new cljs.core.PersistentVector(null,2,(5),inst_31523,inst_31526,null));
var state_31558__$1 = state_31558;
return cljs.core.async.ioc_alts_BANG_.call(null,state_31558__$1,(14),inst_31527);
} else {
if((state_val_31559 === (9))){
var inst_31518 = (state_31558[(8)]);
var inst_31544 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_31545 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_31518);
var inst_31546 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_31545);
var inst_31547 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_31546)].join('');
var inst_31548 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_31547);
var state_31558__$1 = (function (){var statearr_31571 = state_31558;
(statearr_31571[(10)] = inst_31544);

return statearr_31571;
})();
var statearr_31572_31597 = state_31558__$1;
(statearr_31572_31597[(2)] = inst_31548);

(statearr_31572_31597[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31559 === (5))){
var inst_31511 = (state_31558[(7)]);
var inst_31513 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_31514 = (new cljs.core.PersistentArrayMap(null,2,inst_31513,null));
var inst_31515 = (new cljs.core.PersistentHashSet(null,inst_31514,null));
var inst_31516 = figwheel.client.focus_msgs.call(null,inst_31515,inst_31511);
var inst_31517 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_31516);
var inst_31518 = cljs.core.first.call(null,inst_31516);
var inst_31519 = figwheel.client.autoload_QMARK_.call(null);
var state_31558__$1 = (function (){var statearr_31573 = state_31558;
(statearr_31573[(9)] = inst_31517);

(statearr_31573[(8)] = inst_31518);

return statearr_31573;
})();
if(cljs.core.truth_(inst_31519)){
var statearr_31574_31598 = state_31558__$1;
(statearr_31574_31598[(1)] = (8));

} else {
var statearr_31575_31599 = state_31558__$1;
(statearr_31575_31599[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31559 === (14))){
var inst_31529 = (state_31558[(2)]);
var state_31558__$1 = state_31558;
var statearr_31576_31600 = state_31558__$1;
(statearr_31576_31600[(2)] = inst_31529);

(statearr_31576_31600[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31559 === (16))){
var state_31558__$1 = state_31558;
var statearr_31577_31601 = state_31558__$1;
(statearr_31577_31601[(2)] = null);

(statearr_31577_31601[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31559 === (10))){
var inst_31550 = (state_31558[(2)]);
var state_31558__$1 = (function (){var statearr_31578 = state_31558;
(statearr_31578[(11)] = inst_31550);

return statearr_31578;
})();
var statearr_31579_31602 = state_31558__$1;
(statearr_31579_31602[(2)] = null);

(statearr_31579_31602[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31559 === (8))){
var inst_31517 = (state_31558[(9)]);
var inst_31521 = figwheel.client.reload_file_state_QMARK_.call(null,inst_31517,opts);
var state_31558__$1 = state_31558;
if(cljs.core.truth_(inst_31521)){
var statearr_31580_31603 = state_31558__$1;
(statearr_31580_31603[(1)] = (11));

} else {
var statearr_31581_31604 = state_31558__$1;
(statearr_31581_31604[(1)] = (12));

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
var figwheel$client$file_reloader_plugin_$_state_machine__27310__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__27310__auto____0 = (function (){
var statearr_31582 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31582[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__27310__auto__);

(statearr_31582[(1)] = (1));

return statearr_31582;
});
var figwheel$client$file_reloader_plugin_$_state_machine__27310__auto____1 = (function (state_31558){
while(true){
var ret_value__27311__auto__ = (function (){try{while(true){
var result__27312__auto__ = switch__27309__auto__.call(null,state_31558);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27312__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27312__auto__;
}
break;
}
}catch (e31583){if((e31583 instanceof Object)){
var ex__27313__auto__ = e31583;
var statearr_31584_31605 = state_31558;
(statearr_31584_31605[(5)] = ex__27313__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31558);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31583;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27311__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31606 = state_31558;
state_31558 = G__31606;
continue;
} else {
return ret_value__27311__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__27310__auto__ = function(state_31558){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__27310__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__27310__auto____1.call(this,state_31558);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__27310__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__27310__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__27310__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__27310__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__27310__auto__;
})()
})();
var state__27406__auto__ = (function (){var statearr_31585 = f__27405__auto__.call(null);
(statearr_31585[(6)] = c__27404__auto___31586);

return statearr_31585;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27406__auto__);
}));


return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__31607_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__31607_SHARP_));
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
var base_path_31613 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__31609 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__31610 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__31611 = true;
var _STAR_print_fn_STAR__temp_val__31612 = (function (x){
return sb.append(x);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__31611);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__31612);

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
var result_value__$1 = (((!(typeof result_value === 'string')))?cljs.core.pr_str.call(null,result_value):result_value);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value__$1], null));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__31610);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__31609);
}}catch (e31608){if((e31608 instanceof Error)){
var e = e31608;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_31613], null));
} else {
var e = e31608;
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__31614){
var map__31615 = p__31614;
var map__31615__$1 = (((((!((map__31615 == null))))?(((((map__31615.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31615.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31615):map__31615);
var opts = map__31615__$1;
var build_id = cljs.core.get.call(null,map__31615__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return (function (p__31617){
var vec__31618 = p__31617;
var seq__31619 = cljs.core.seq.call(null,vec__31618);
var first__31620 = cljs.core.first.call(null,seq__31619);
var seq__31619__$1 = cljs.core.next.call(null,seq__31619);
var map__31621 = first__31620;
var map__31621__$1 = (((((!((map__31621 == null))))?(((((map__31621.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31621.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31621):map__31621);
var msg = map__31621__$1;
var msg_name = cljs.core.get.call(null,map__31621__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__31619__$1;
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
return (function (p__31623){
var vec__31624 = p__31623;
var seq__31625 = cljs.core.seq.call(null,vec__31624);
var first__31626 = cljs.core.first.call(null,seq__31625);
var seq__31625__$1 = cljs.core.next.call(null,seq__31625);
var map__31627 = first__31626;
var map__31627__$1 = (((((!((map__31627 == null))))?(((((map__31627.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31627.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31627):map__31627);
var msg = map__31627__$1;
var msg_name = cljs.core.get.call(null,map__31627__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__31625__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__31629){
var map__31630 = p__31629;
var map__31630__$1 = (((((!((map__31630 == null))))?(((((map__31630.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31630.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31630):map__31630);
var on_compile_warning = cljs.core.get.call(null,map__31630__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__31630__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return (function (p__31632){
var vec__31633 = p__31632;
var seq__31634 = cljs.core.seq.call(null,vec__31633);
var first__31635 = cljs.core.first.call(null,seq__31634);
var seq__31634__$1 = cljs.core.next.call(null,seq__31634);
var map__31636 = first__31635;
var map__31636__$1 = (((((!((map__31636 == null))))?(((((map__31636.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31636.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31636):map__31636);
var msg = map__31636__$1;
var msg_name = cljs.core.get.call(null,map__31636__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__31634__$1;
var pred__31638 = cljs.core._EQ_;
var expr__31639 = msg_name;
if(cljs.core.truth_(pred__31638.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__31639))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__31638.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__31639))){
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
var c__27404__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27405__auto__ = (function (){var switch__27309__auto__ = (function (state_31728){
var state_val_31729 = (state_31728[(1)]);
if((state_val_31729 === (7))){
var inst_31648 = (state_31728[(2)]);
var state_31728__$1 = state_31728;
if(cljs.core.truth_(inst_31648)){
var statearr_31730_31777 = state_31728__$1;
(statearr_31730_31777[(1)] = (8));

} else {
var statearr_31731_31778 = state_31728__$1;
(statearr_31731_31778[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31729 === (20))){
var inst_31722 = (state_31728[(2)]);
var state_31728__$1 = state_31728;
var statearr_31732_31779 = state_31728__$1;
(statearr_31732_31779[(2)] = inst_31722);

(statearr_31732_31779[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31729 === (27))){
var inst_31718 = (state_31728[(2)]);
var state_31728__$1 = state_31728;
var statearr_31733_31780 = state_31728__$1;
(statearr_31733_31780[(2)] = inst_31718);

(statearr_31733_31780[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31729 === (1))){
var inst_31641 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_31728__$1 = state_31728;
if(cljs.core.truth_(inst_31641)){
var statearr_31734_31781 = state_31728__$1;
(statearr_31734_31781[(1)] = (2));

} else {
var statearr_31735_31782 = state_31728__$1;
(statearr_31735_31782[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31729 === (24))){
var inst_31720 = (state_31728[(2)]);
var state_31728__$1 = state_31728;
var statearr_31736_31783 = state_31728__$1;
(statearr_31736_31783[(2)] = inst_31720);

(statearr_31736_31783[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31729 === (4))){
var inst_31726 = (state_31728[(2)]);
var state_31728__$1 = state_31728;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31728__$1,inst_31726);
} else {
if((state_val_31729 === (15))){
var inst_31724 = (state_31728[(2)]);
var state_31728__$1 = state_31728;
var statearr_31737_31784 = state_31728__$1;
(statearr_31737_31784[(2)] = inst_31724);

(statearr_31737_31784[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31729 === (21))){
var inst_31677 = (state_31728[(2)]);
var inst_31678 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31679 = figwheel.client.auto_jump_to_error.call(null,opts,inst_31678);
var state_31728__$1 = (function (){var statearr_31738 = state_31728;
(statearr_31738[(7)] = inst_31677);

return statearr_31738;
})();
var statearr_31739_31785 = state_31728__$1;
(statearr_31739_31785[(2)] = inst_31679);

(statearr_31739_31785[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31729 === (31))){
var inst_31707 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_31728__$1 = state_31728;
if(inst_31707){
var statearr_31740_31786 = state_31728__$1;
(statearr_31740_31786[(1)] = (34));

} else {
var statearr_31741_31787 = state_31728__$1;
(statearr_31741_31787[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31729 === (32))){
var inst_31716 = (state_31728[(2)]);
var state_31728__$1 = state_31728;
var statearr_31742_31788 = state_31728__$1;
(statearr_31742_31788[(2)] = inst_31716);

(statearr_31742_31788[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31729 === (33))){
var inst_31703 = (state_31728[(2)]);
var inst_31704 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31705 = figwheel.client.auto_jump_to_error.call(null,opts,inst_31704);
var state_31728__$1 = (function (){var statearr_31743 = state_31728;
(statearr_31743[(8)] = inst_31703);

return statearr_31743;
})();
var statearr_31744_31789 = state_31728__$1;
(statearr_31744_31789[(2)] = inst_31705);

(statearr_31744_31789[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31729 === (13))){
var inst_31662 = figwheel.client.heads_up.clear.call(null);
var state_31728__$1 = state_31728;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31728__$1,(16),inst_31662);
} else {
if((state_val_31729 === (22))){
var inst_31683 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31684 = figwheel.client.heads_up.append_warning_message.call(null,inst_31683);
var state_31728__$1 = state_31728;
var statearr_31745_31790 = state_31728__$1;
(statearr_31745_31790[(2)] = inst_31684);

(statearr_31745_31790[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31729 === (36))){
var inst_31714 = (state_31728[(2)]);
var state_31728__$1 = state_31728;
var statearr_31746_31791 = state_31728__$1;
(statearr_31746_31791[(2)] = inst_31714);

(statearr_31746_31791[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31729 === (29))){
var inst_31694 = (state_31728[(2)]);
var inst_31695 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31696 = figwheel.client.auto_jump_to_error.call(null,opts,inst_31695);
var state_31728__$1 = (function (){var statearr_31747 = state_31728;
(statearr_31747[(9)] = inst_31694);

return statearr_31747;
})();
var statearr_31748_31792 = state_31728__$1;
(statearr_31748_31792[(2)] = inst_31696);

(statearr_31748_31792[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31729 === (6))){
var inst_31643 = (state_31728[(10)]);
var state_31728__$1 = state_31728;
var statearr_31749_31793 = state_31728__$1;
(statearr_31749_31793[(2)] = inst_31643);

(statearr_31749_31793[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31729 === (28))){
var inst_31690 = (state_31728[(2)]);
var inst_31691 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31692 = figwheel.client.heads_up.display_warning.call(null,inst_31691);
var state_31728__$1 = (function (){var statearr_31750 = state_31728;
(statearr_31750[(11)] = inst_31690);

return statearr_31750;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31728__$1,(29),inst_31692);
} else {
if((state_val_31729 === (25))){
var inst_31688 = figwheel.client.heads_up.clear.call(null);
var state_31728__$1 = state_31728;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31728__$1,(28),inst_31688);
} else {
if((state_val_31729 === (34))){
var inst_31709 = figwheel.client.heads_up.flash_loaded.call(null);
var state_31728__$1 = state_31728;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31728__$1,(37),inst_31709);
} else {
if((state_val_31729 === (17))){
var inst_31668 = (state_31728[(2)]);
var inst_31669 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31670 = figwheel.client.auto_jump_to_error.call(null,opts,inst_31669);
var state_31728__$1 = (function (){var statearr_31751 = state_31728;
(statearr_31751[(12)] = inst_31668);

return statearr_31751;
})();
var statearr_31752_31794 = state_31728__$1;
(statearr_31752_31794[(2)] = inst_31670);

(statearr_31752_31794[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31729 === (3))){
var inst_31660 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_31728__$1 = state_31728;
if(inst_31660){
var statearr_31753_31795 = state_31728__$1;
(statearr_31753_31795[(1)] = (13));

} else {
var statearr_31754_31796 = state_31728__$1;
(statearr_31754_31796[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31729 === (12))){
var inst_31656 = (state_31728[(2)]);
var state_31728__$1 = state_31728;
var statearr_31755_31797 = state_31728__$1;
(statearr_31755_31797[(2)] = inst_31656);

(statearr_31755_31797[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31729 === (2))){
var inst_31643 = (state_31728[(10)]);
var inst_31643__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_31728__$1 = (function (){var statearr_31756 = state_31728;
(statearr_31756[(10)] = inst_31643__$1);

return statearr_31756;
})();
if(cljs.core.truth_(inst_31643__$1)){
var statearr_31757_31798 = state_31728__$1;
(statearr_31757_31798[(1)] = (5));

} else {
var statearr_31758_31799 = state_31728__$1;
(statearr_31758_31799[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31729 === (23))){
var inst_31686 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_31728__$1 = state_31728;
if(inst_31686){
var statearr_31759_31800 = state_31728__$1;
(statearr_31759_31800[(1)] = (25));

} else {
var statearr_31760_31801 = state_31728__$1;
(statearr_31760_31801[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31729 === (35))){
var state_31728__$1 = state_31728;
var statearr_31761_31802 = state_31728__$1;
(statearr_31761_31802[(2)] = null);

(statearr_31761_31802[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31729 === (19))){
var inst_31681 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_31728__$1 = state_31728;
if(inst_31681){
var statearr_31762_31803 = state_31728__$1;
(statearr_31762_31803[(1)] = (22));

} else {
var statearr_31763_31804 = state_31728__$1;
(statearr_31763_31804[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31729 === (11))){
var inst_31652 = (state_31728[(2)]);
var state_31728__$1 = state_31728;
var statearr_31764_31805 = state_31728__$1;
(statearr_31764_31805[(2)] = inst_31652);

(statearr_31764_31805[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31729 === (9))){
var inst_31654 = figwheel.client.heads_up.clear.call(null);
var state_31728__$1 = state_31728;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31728__$1,(12),inst_31654);
} else {
if((state_val_31729 === (5))){
var inst_31645 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_31728__$1 = state_31728;
var statearr_31765_31806 = state_31728__$1;
(statearr_31765_31806[(2)] = inst_31645);

(statearr_31765_31806[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31729 === (14))){
var inst_31672 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_31728__$1 = state_31728;
if(inst_31672){
var statearr_31766_31807 = state_31728__$1;
(statearr_31766_31807[(1)] = (18));

} else {
var statearr_31767_31808 = state_31728__$1;
(statearr_31767_31808[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31729 === (26))){
var inst_31698 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_31728__$1 = state_31728;
if(inst_31698){
var statearr_31768_31809 = state_31728__$1;
(statearr_31768_31809[(1)] = (30));

} else {
var statearr_31769_31810 = state_31728__$1;
(statearr_31769_31810[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31729 === (16))){
var inst_31664 = (state_31728[(2)]);
var inst_31665 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31666 = figwheel.client.heads_up.display_exception.call(null,inst_31665);
var state_31728__$1 = (function (){var statearr_31770 = state_31728;
(statearr_31770[(13)] = inst_31664);

return statearr_31770;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31728__$1,(17),inst_31666);
} else {
if((state_val_31729 === (30))){
var inst_31700 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31701 = figwheel.client.heads_up.display_warning.call(null,inst_31700);
var state_31728__$1 = state_31728;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31728__$1,(33),inst_31701);
} else {
if((state_val_31729 === (10))){
var inst_31658 = (state_31728[(2)]);
var state_31728__$1 = state_31728;
var statearr_31771_31811 = state_31728__$1;
(statearr_31771_31811[(2)] = inst_31658);

(statearr_31771_31811[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31729 === (18))){
var inst_31674 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31675 = figwheel.client.heads_up.display_exception.call(null,inst_31674);
var state_31728__$1 = state_31728;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31728__$1,(21),inst_31675);
} else {
if((state_val_31729 === (37))){
var inst_31711 = (state_31728[(2)]);
var state_31728__$1 = state_31728;
var statearr_31772_31812 = state_31728__$1;
(statearr_31772_31812[(2)] = inst_31711);

(statearr_31772_31812[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31729 === (8))){
var inst_31650 = figwheel.client.heads_up.flash_loaded.call(null);
var state_31728__$1 = state_31728;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31728__$1,(11),inst_31650);
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
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27310__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27310__auto____0 = (function (){
var statearr_31773 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31773[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27310__auto__);

(statearr_31773[(1)] = (1));

return statearr_31773;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27310__auto____1 = (function (state_31728){
while(true){
var ret_value__27311__auto__ = (function (){try{while(true){
var result__27312__auto__ = switch__27309__auto__.call(null,state_31728);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27312__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27312__auto__;
}
break;
}
}catch (e31774){if((e31774 instanceof Object)){
var ex__27313__auto__ = e31774;
var statearr_31775_31813 = state_31728;
(statearr_31775_31813[(5)] = ex__27313__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31728);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31774;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27311__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31814 = state_31728;
state_31728 = G__31814;
continue;
} else {
return ret_value__27311__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27310__auto__ = function(state_31728){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27310__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27310__auto____1.call(this,state_31728);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27310__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27310__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27310__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27310__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27310__auto__;
})()
})();
var state__27406__auto__ = (function (){var statearr_31776 = f__27405__auto__.call(null);
(statearr_31776[(6)] = c__27404__auto__);

return statearr_31776;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27406__auto__);
}));

return c__27404__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__27404__auto___31843 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27405__auto__ = (function (){var switch__27309__auto__ = (function (state_31829){
var state_val_31830 = (state_31829[(1)]);
if((state_val_31830 === (1))){
var state_31829__$1 = state_31829;
var statearr_31831_31844 = state_31829__$1;
(statearr_31831_31844[(2)] = null);

(statearr_31831_31844[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31830 === (2))){
var state_31829__$1 = state_31829;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31829__$1,(4),ch);
} else {
if((state_val_31830 === (3))){
var inst_31827 = (state_31829[(2)]);
var state_31829__$1 = state_31829;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31829__$1,inst_31827);
} else {
if((state_val_31830 === (4))){
var inst_31817 = (state_31829[(7)]);
var inst_31817__$1 = (state_31829[(2)]);
var state_31829__$1 = (function (){var statearr_31832 = state_31829;
(statearr_31832[(7)] = inst_31817__$1);

return statearr_31832;
})();
if(cljs.core.truth_(inst_31817__$1)){
var statearr_31833_31845 = state_31829__$1;
(statearr_31833_31845[(1)] = (5));

} else {
var statearr_31834_31846 = state_31829__$1;
(statearr_31834_31846[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31830 === (5))){
var inst_31817 = (state_31829[(7)]);
var inst_31819 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_31817);
var state_31829__$1 = state_31829;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31829__$1,(8),inst_31819);
} else {
if((state_val_31830 === (6))){
var state_31829__$1 = state_31829;
var statearr_31835_31847 = state_31829__$1;
(statearr_31835_31847[(2)] = null);

(statearr_31835_31847[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31830 === (7))){
var inst_31825 = (state_31829[(2)]);
var state_31829__$1 = state_31829;
var statearr_31836_31848 = state_31829__$1;
(statearr_31836_31848[(2)] = inst_31825);

(statearr_31836_31848[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31830 === (8))){
var inst_31821 = (state_31829[(2)]);
var state_31829__$1 = (function (){var statearr_31837 = state_31829;
(statearr_31837[(8)] = inst_31821);

return statearr_31837;
})();
var statearr_31838_31849 = state_31829__$1;
(statearr_31838_31849[(2)] = null);

(statearr_31838_31849[(1)] = (2));


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
var figwheel$client$heads_up_plugin_$_state_machine__27310__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__27310__auto____0 = (function (){
var statearr_31839 = [null,null,null,null,null,null,null,null,null];
(statearr_31839[(0)] = figwheel$client$heads_up_plugin_$_state_machine__27310__auto__);

(statearr_31839[(1)] = (1));

return statearr_31839;
});
var figwheel$client$heads_up_plugin_$_state_machine__27310__auto____1 = (function (state_31829){
while(true){
var ret_value__27311__auto__ = (function (){try{while(true){
var result__27312__auto__ = switch__27309__auto__.call(null,state_31829);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27312__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27312__auto__;
}
break;
}
}catch (e31840){if((e31840 instanceof Object)){
var ex__27313__auto__ = e31840;
var statearr_31841_31850 = state_31829;
(statearr_31841_31850[(5)] = ex__27313__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31829);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31840;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27311__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31851 = state_31829;
state_31829 = G__31851;
continue;
} else {
return ret_value__27311__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__27310__auto__ = function(state_31829){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__27310__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__27310__auto____1.call(this,state_31829);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__27310__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__27310__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__27310__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__27310__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__27310__auto__;
})()
})();
var state__27406__auto__ = (function (){var statearr_31842 = f__27405__auto__.call(null);
(statearr_31842[(6)] = c__27404__auto___31843);

return statearr_31842;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27406__auto__);
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
var c__27404__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27405__auto__ = (function (){var switch__27309__auto__ = (function (state_31857){
var state_val_31858 = (state_31857[(1)]);
if((state_val_31858 === (1))){
var inst_31852 = cljs.core.async.timeout.call(null,(3000));
var state_31857__$1 = state_31857;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31857__$1,(2),inst_31852);
} else {
if((state_val_31858 === (2))){
var inst_31854 = (state_31857[(2)]);
var inst_31855 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_31857__$1 = (function (){var statearr_31859 = state_31857;
(statearr_31859[(7)] = inst_31854);

return statearr_31859;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31857__$1,inst_31855);
} else {
return null;
}
}
});
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__27310__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__27310__auto____0 = (function (){
var statearr_31860 = [null,null,null,null,null,null,null,null];
(statearr_31860[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__27310__auto__);

(statearr_31860[(1)] = (1));

return statearr_31860;
});
var figwheel$client$enforce_project_plugin_$_state_machine__27310__auto____1 = (function (state_31857){
while(true){
var ret_value__27311__auto__ = (function (){try{while(true){
var result__27312__auto__ = switch__27309__auto__.call(null,state_31857);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27312__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27312__auto__;
}
break;
}
}catch (e31861){if((e31861 instanceof Object)){
var ex__27313__auto__ = e31861;
var statearr_31862_31864 = state_31857;
(statearr_31862_31864[(5)] = ex__27313__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31857);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31861;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27311__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31865 = state_31857;
state_31857 = G__31865;
continue;
} else {
return ret_value__27311__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__27310__auto__ = function(state_31857){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__27310__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__27310__auto____1.call(this,state_31857);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__27310__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__27310__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__27310__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__27310__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__27310__auto__;
})()
})();
var state__27406__auto__ = (function (){var statearr_31863 = f__27405__auto__.call(null);
(statearr_31863[(6)] = c__27404__auto__);

return statearr_31863;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27406__auto__);
}));

return c__27404__auto__;
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
var c__27404__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27405__auto__ = (function (){var switch__27309__auto__ = (function (state_31872){
var state_val_31873 = (state_31872[(1)]);
if((state_val_31873 === (1))){
var inst_31866 = cljs.core.async.timeout.call(null,(2000));
var state_31872__$1 = state_31872;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31872__$1,(2),inst_31866);
} else {
if((state_val_31873 === (2))){
var inst_31868 = (state_31872[(2)]);
var inst_31869 = ["Figwheel Client Version <strong>",figwheel.client._figwheel_version_,"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_31870 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_31869);
var state_31872__$1 = (function (){var statearr_31874 = state_31872;
(statearr_31874[(7)] = inst_31868);

return statearr_31874;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31872__$1,inst_31870);
} else {
return null;
}
}
});
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27310__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27310__auto____0 = (function (){
var statearr_31875 = [null,null,null,null,null,null,null,null];
(statearr_31875[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27310__auto__);

(statearr_31875[(1)] = (1));

return statearr_31875;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27310__auto____1 = (function (state_31872){
while(true){
var ret_value__27311__auto__ = (function (){try{while(true){
var result__27312__auto__ = switch__27309__auto__.call(null,state_31872);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27312__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27312__auto__;
}
break;
}
}catch (e31876){if((e31876 instanceof Object)){
var ex__27313__auto__ = e31876;
var statearr_31877_31879 = state_31872;
(statearr_31877_31879[(5)] = ex__27313__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31872);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31876;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27311__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31880 = state_31872;
state_31872 = G__31880;
continue;
} else {
return ret_value__27311__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27310__auto__ = function(state_31872){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27310__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27310__auto____1.call(this,state_31872);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27310__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27310__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27310__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27310__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27310__auto__;
})()
})();
var state__27406__auto__ = (function (){var statearr_31878 = f__27405__auto__.call(null);
(statearr_31878[(6)] = c__27404__auto__);

return statearr_31878;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27406__auto__);
}));

return c__27404__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__31881){
var map__31882 = p__31881;
var map__31882__$1 = (((((!((map__31882 == null))))?(((((map__31882.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31882.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31882):map__31882);
var file = cljs.core.get.call(null,map__31882__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__31882__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__31882__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__31884 = "";
var G__31884__$1 = (cljs.core.truth_(file)?[G__31884,"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__31884);
var G__31884__$2 = (cljs.core.truth_(line)?[G__31884__$1," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__31884__$1);
if(cljs.core.truth_((function (){var and__4115__auto__ = line;
if(cljs.core.truth_(and__4115__auto__)){
return column;
} else {
return and__4115__auto__;
}
})())){
return [G__31884__$2,", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__31884__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__31885){
var map__31886 = p__31885;
var map__31886__$1 = (((((!((map__31886 == null))))?(((((map__31886.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31886.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31886):map__31886);
var ed = map__31886__$1;
var exception_data = cljs.core.get.call(null,map__31886__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__31886__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
var message_31889 = (function (){var G__31888 = cljs.core.apply.call(null,cljs.core.str,"Figwheel: Compile Exception ",figwheel.client.format_messages.call(null,exception_data));
if(cljs.core.truth_(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(exception_data))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31888)," Error on ",figwheel.client.file_line_column.call(null,exception_data)].join('');
} else {
return G__31888;
}
})();
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),message_31889);

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__31890){
var map__31891 = p__31890;
var map__31891__$1 = (((((!((map__31891 == null))))?(((((map__31891.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31891.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31891):map__31891);
var w = map__31891__$1;
var message = cljs.core.get.call(null,map__31891__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__31893 = cljs.core.seq.call(null,plugins);
var chunk__31894 = null;
var count__31895 = (0);
var i__31896 = (0);
while(true){
if((i__31896 < count__31895)){
var vec__31903 = cljs.core._nth.call(null,chunk__31894,i__31896);
var k = cljs.core.nth.call(null,vec__31903,(0),null);
var plugin = cljs.core.nth.call(null,vec__31903,(1),null);
if(cljs.core.truth_(plugin)){
var pl_31909 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__31893,chunk__31894,count__31895,i__31896,pl_31909,vec__31903,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_31909.call(null,msg_hist);
});})(seq__31893,chunk__31894,count__31895,i__31896,pl_31909,vec__31903,k,plugin))
);
} else {
}


var G__31910 = seq__31893;
var G__31911 = chunk__31894;
var G__31912 = count__31895;
var G__31913 = (i__31896 + (1));
seq__31893 = G__31910;
chunk__31894 = G__31911;
count__31895 = G__31912;
i__31896 = G__31913;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__31893);
if(temp__5735__auto__){
var seq__31893__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31893__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__31893__$1);
var G__31914 = cljs.core.chunk_rest.call(null,seq__31893__$1);
var G__31915 = c__4556__auto__;
var G__31916 = cljs.core.count.call(null,c__4556__auto__);
var G__31917 = (0);
seq__31893 = G__31914;
chunk__31894 = G__31915;
count__31895 = G__31916;
i__31896 = G__31917;
continue;
} else {
var vec__31906 = cljs.core.first.call(null,seq__31893__$1);
var k = cljs.core.nth.call(null,vec__31906,(0),null);
var plugin = cljs.core.nth.call(null,vec__31906,(1),null);
if(cljs.core.truth_(plugin)){
var pl_31918 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__31893,chunk__31894,count__31895,i__31896,pl_31918,vec__31906,k,plugin,seq__31893__$1,temp__5735__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_31918.call(null,msg_hist);
});})(seq__31893,chunk__31894,count__31895,i__31896,pl_31918,vec__31906,k,plugin,seq__31893__$1,temp__5735__auto__))
);
} else {
}


var G__31919 = cljs.core.next.call(null,seq__31893__$1);
var G__31920 = null;
var G__31921 = (0);
var G__31922 = (0);
seq__31893 = G__31919;
chunk__31894 = G__31920;
count__31895 = G__31921;
i__31896 = G__31922;
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
var G__31924 = arguments.length;
switch (G__31924) {
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

var seq__31925_31930 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__31926_31931 = null;
var count__31927_31932 = (0);
var i__31928_31933 = (0);
while(true){
if((i__31928_31933 < count__31927_31932)){
var msg_31934 = cljs.core._nth.call(null,chunk__31926_31931,i__31928_31933);
figwheel.client.socket.handle_incoming_message.call(null,msg_31934);


var G__31935 = seq__31925_31930;
var G__31936 = chunk__31926_31931;
var G__31937 = count__31927_31932;
var G__31938 = (i__31928_31933 + (1));
seq__31925_31930 = G__31935;
chunk__31926_31931 = G__31936;
count__31927_31932 = G__31937;
i__31928_31933 = G__31938;
continue;
} else {
var temp__5735__auto___31939 = cljs.core.seq.call(null,seq__31925_31930);
if(temp__5735__auto___31939){
var seq__31925_31940__$1 = temp__5735__auto___31939;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31925_31940__$1)){
var c__4556__auto___31941 = cljs.core.chunk_first.call(null,seq__31925_31940__$1);
var G__31942 = cljs.core.chunk_rest.call(null,seq__31925_31940__$1);
var G__31943 = c__4556__auto___31941;
var G__31944 = cljs.core.count.call(null,c__4556__auto___31941);
var G__31945 = (0);
seq__31925_31930 = G__31942;
chunk__31926_31931 = G__31943;
count__31927_31932 = G__31944;
i__31928_31933 = G__31945;
continue;
} else {
var msg_31946 = cljs.core.first.call(null,seq__31925_31940__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_31946);


var G__31947 = cljs.core.next.call(null,seq__31925_31940__$1);
var G__31948 = null;
var G__31949 = (0);
var G__31950 = (0);
seq__31925_31930 = G__31947;
chunk__31926_31931 = G__31948;
count__31927_31932 = G__31949;
i__31928_31933 = G__31950;
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
var len__4736__auto___31955 = arguments.length;
var i__4737__auto___31956 = (0);
while(true){
if((i__4737__auto___31956 < len__4736__auto___31955)){
args__4742__auto__.push((arguments[i__4737__auto___31956]));

var G__31957 = (i__4737__auto___31956 + (1));
i__4737__auto___31956 = G__31957;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__31952){
var map__31953 = p__31952;
var map__31953__$1 = (((((!((map__31953 == null))))?(((((map__31953.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31953.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31953):map__31953);
var opts = map__31953__$1;
return figwheel.client.start.call(null,opts);
}));

(figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq31951){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31951));
}));

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e31958){if((e31958 instanceof Error)){
var e = e31958;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e31958;

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

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),(function (p__31959){
var map__31960 = p__31959;
var map__31960__$1 = (((((!((map__31960 == null))))?(((((map__31960.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31960.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31960):map__31960);
var msg_name = cljs.core.get.call(null,map__31960__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return (location.href = location.href);
} else {
return null;
}
}));
});

//# sourceMappingURL=client.js.map?rel=1593791114315
