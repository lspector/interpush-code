// Compiled by ClojureScript 1.10.764 {}
goog.provide('interp.utils');
goog.require('cljs.core');
/**
 * Returns the literal stack corresponding to some vector stack.
 */
interp.utils.get_vector_literal_type = (function interp$utils$get_vector_literal_type(vector_stack){
return cljs.core.keyword.call(null,clojure.string.replace.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(vector_stack),":vector_",""));
});
/**
 * Returns the first index of an element in a collection. If the element is not
 *   present in the collection, returns -1.
 */
interp.utils.indexof = (function interp$utils$indexof(element,coll){
var or__4126__auto__ = cljs.core.first.call(null,cljs.core.keep_indexed.call(null,(function (p1__30899_SHARP_,p2__30898_SHARP_){
if(cljs.core._EQ_.call(null,element,p2__30898_SHARP_)){
return p1__30899_SHARP_;
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
if(cljs.core.seq_QMARK_.call(null,lst)){
return cljs.core.apply.call(null,cljs.core.list,lst);
} else {
return lst;
}
});
/**
 * Returns a non-lazy list if passed a seq argument. Othwrwise, returns a list
 *   containing the argument.
 */
interp.utils.ensure_list = (function interp$utils$ensure_list(thing){
if(cljs.core.seq_QMARK_.call(null,thing)){
return interp.utils.not_lazy.call(null,thing);
} else {
return (new cljs.core.List(null,thing,null,(1),null));
}
});
/**
 * Returns a random instruction from a supplied pool of instructions, evaluating
 *   ERC-producing functions to a constant literal.
 */
interp.utils.random_instruction = (function interp$utils$random_instruction(instructions){
var instruction = cljs.core.rand_nth.call(null,instructions);
if(cljs.core.fn_QMARK_.call(null,instruction)){
return instruction.call(null);
} else {
return instruction;
}
});

//# sourceMappingURL=utils.js.map?rel=1593965199693
