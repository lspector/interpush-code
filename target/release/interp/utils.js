// Compiled by ClojureScript 1.10.764 {:static-fns true, :optimize-constants true}
goog.provide('interp.utils');
goog.require('cljs.core');
goog.require('cljs.core.constants');
/**
 * Returns the literal stack corresponding to some vector stack.
 */
interp.utils.get_vector_literal_type = (function interp$utils$get_vector_literal_type(vector_stack){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.replace(cljs.core.str.cljs$core$IFn$_invoke$arity$1(vector_stack),":vector_",""));
});
/**
 * Returns the first index of an element in a collection. If the element is not
 *   present in the collection, returns -1.
 */
interp.utils.indexof = (function interp$utils$indexof(element,coll){
var or__4126__auto__ = cljs.core.first(cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__34126_SHARP_,p2__34125_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(element,p2__34125_SHARP_)){
return p1__34126_SHARP_;
} else {
return null;
}
}),coll));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (-1);
}
});
/**
 * Returns lst if it is not a seq, or a non-lazy version of lst if it is.
 */
interp.utils.not_lazy = (function interp$utils$not_lazy(lst){
if(cljs.core.seq_QMARK_(lst)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.list,lst);
} else {
return lst;
}
});
/**
 * Returns a non-lazy list if passed a seq argument. Othwrwise, returns a list
 *   containing the argument.
 */
interp.utils.ensure_list = (function interp$utils$ensure_list(thing){
if(cljs.core.seq_QMARK_(thing)){
return interp.utils.not_lazy(thing);
} else {
return (new cljs.core.List(null,thing,null,(1),null));
}
});
/**
 * Returns a random instruction from a supplied pool of instructions, evaluating
 *   ERC-producing functions to a constant literal.
 */
interp.utils.random_instruction = (function interp$utils$random_instruction(instructions){
var instruction = cljs.core.rand_nth(instructions);
if(cljs.core.fn_QMARK_(instruction)){
return (instruction.cljs$core$IFn$_invoke$arity$0 ? instruction.cljs$core$IFn$_invoke$arity$0() : instruction.call(null));
} else {
return instruction;
}
});
