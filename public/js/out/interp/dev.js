// Compiled by ClojureScript 1.10.764 {}
goog.provide('interp.dev');
goog.require('cljs.core');
goog.require('interp.core');
goog.require('devtools.core');
(Symbol.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL);

(Symbol.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (sym,writer,_){
var sym__$1 = this;
return cljs.core._write.call(null,writer,["\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym__$1.toString()),"\""].join(''));
}));
cljs.core.enable_console_print_BANG_.call(null);
devtools.core.install_BANG_.call(null);
interp.core.init_BANG_.call(null);

//# sourceMappingURL=dev.js.map?rel=1627437090753
