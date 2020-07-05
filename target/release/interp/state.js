// Compiled by ClojureScript 1.10.764 {:static-fns true, :optimize-constants true}
goog.provide('interp.state');
goog.require('cljs.core');
goog.require('cljs.core.constants');
/**
 * Returns true if the stack is empty.
 */
interp.state.empty_stack_QMARK_ = (function interp$state$empty_stack_QMARK_(state,stack){
return cljs.core.empty_QMARK_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,stack));
});
/**
 * Returns the top item on a stack.
 */
interp.state.peek_stack = (function interp$state$peek_stack(state,stack){
var working_stack = cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,stack);
if(cljs.core.empty_QMARK_(working_stack)){
return cljs.core.cst$kw$no_DASH_stack_DASH_item;
} else {
return cljs.core.first(working_stack);
}
});
/**
 * Returns the top n items on a stack. If there are less than n items on the
 *   stack, returns the entire stack.
 */
interp.state.peek_stack_multiple = (function interp$state$peek_stack_multiple(state,stack,n){
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,stack));
});
/**
 * Removes the top item of stack.
 */
interp.state.pop_stack = (function interp$state$pop_stack(state,stack){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,stack,cljs.core.rest);
});
/**
 * Removes the top n items of a stack. If there are less than n items on the
 *   stack, pops the entire stack.
 */
interp.state.pop_stack_multiple = (function interp$state$pop_stack_multiple(state,stack,n){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,stack,(function (p1__34129_SHARP_){
return cljs.core.drop.cljs$core$IFn$_invoke$arity$2(n,p1__34129_SHARP_);
}));
});
/**
 * Pushes an item onto a stack.
 */
interp.state.push_to_stack = (function interp$state$push_to_stack(state,stack,item){
if((item == null)){
return state;
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,stack,cljs.core.conj,item);
}
});
/**
 * Pushes a list of items onto a stack, leaving them in the order they are in.
 */
interp.state.push_to_stack_multiple = (function interp$state$push_to_stack_multiple(state,stack,items){
var items_list = ((cljs.core.coll_QMARK_(items))?items:(new cljs.core.List(null,items,null,(1),null)));
var items_list_no_nil = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__34130_SHARP_){
return (!((p1__34130_SHARP_ == null)));
}),items_list);
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,stack,cljs.core.into,cljs.core.reverse(items_list_no_nil));
});
/**
 * Takes a state and a collection of stacks to take args from. If there are
 *   enough args on each of the desired stacks, returns a map with keys
 *   {:state :args}, where :state is the new state and :args is a list of args
 *   popped from the stacks. If there aren't enough args on the stacks, returns
 *   :not-enough-args without popping anything.
 */
interp.state.get_args_from_stacks = (function interp$state$get_args_from_stacks(state,stacks){
var state__$1 = state;
var stacks__$1 = cljs.core.reverse(stacks);
var args = cljs.core.List.EMPTY;
while(true){
if(cljs.core.empty_QMARK_(stacks__$1)){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$state,state__$1,cljs.core.cst$kw$args,args], null);
} else {
var current_stack = cljs.core.first(stacks__$1);
if(interp.state.empty_stack_QMARK_(state__$1,current_stack)){
return cljs.core.cst$kw$not_DASH_enough_DASH_args;
} else {
var G__34131 = interp.state.pop_stack(state__$1,current_stack);
var G__34132 = cljs.core.rest(stacks__$1);
var G__34133 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(args,interp.state.peek_stack(state__$1,current_stack));
state__$1 = G__34131;
stacks__$1 = G__34132;
args = G__34133;
continue;
}
}
break;
}
});
