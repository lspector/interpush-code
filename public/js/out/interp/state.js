// Compiled by ClojureScript 1.10.764 {}
goog.provide('interp.state');
goog.require('cljs.core');
/**
 * Returns true if the stack is empty.
 */
interp.state.empty_stack_QMARK_ = (function interp$state$empty_stack_QMARK_(state,stack){
return cljs.core.empty_QMARK_.call(null,cljs.core.get.call(null,state,stack));
});
/**
 * Returns the top item on a stack.
 */
interp.state.peek_stack = (function interp$state$peek_stack(state,stack){
var working_stack = cljs.core.get.call(null,state,stack);
if(cljs.core.empty_QMARK_.call(null,working_stack)){
return new cljs.core.Keyword(null,"no-stack-item","no-stack-item",-1282481685);
} else {
return cljs.core.first.call(null,working_stack);
}
});
/**
 * Returns the top n items on a stack. If there are less than n items on the
 *   stack, returns the entire stack.
 */
interp.state.peek_stack_multiple = (function interp$state$peek_stack_multiple(state,stack,n){
return cljs.core.take.call(null,n,cljs.core.get.call(null,state,stack));
});
/**
 * Removes the top item of stack.
 */
interp.state.pop_stack = (function interp$state$pop_stack(state,stack){
return cljs.core.update.call(null,state,stack,cljs.core.rest);
});
/**
 * Removes the top n items of a stack. If there are less than n items on the
 *   stack, pops the entire stack.
 */
interp.state.pop_stack_multiple = (function interp$state$pop_stack_multiple(state,stack,n){
return cljs.core.update.call(null,state,stack,(function (p1__30902_SHARP_){
return cljs.core.drop.call(null,n,p1__30902_SHARP_);
}));
});
/**
 * Pushes an item onto a stack.
 */
interp.state.push_to_stack = (function interp$state$push_to_stack(state,stack,item){
if((item == null)){
return state;
} else {
return cljs.core.update.call(null,state,stack,cljs.core.conj,item);
}
});
/**
 * Pushes a list of items onto a stack, leaving them in the order they are in.
 */
interp.state.push_to_stack_multiple = (function interp$state$push_to_stack_multiple(state,stack,items){
var items_list = ((cljs.core.coll_QMARK_.call(null,items))?items:(new cljs.core.List(null,items,null,(1),null)));
var items_list_no_nil = cljs.core.filter.call(null,(function (p1__30903_SHARP_){
return (!((p1__30903_SHARP_ == null)));
}),items_list);
return cljs.core.update.call(null,state,stack,cljs.core.into,cljs.core.reverse.call(null,items_list_no_nil));
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
var stacks__$1 = cljs.core.reverse.call(null,stacks);
var args = cljs.core.List.EMPTY;
while(true){
if(cljs.core.empty_QMARK_.call(null,stacks__$1)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),state__$1,new cljs.core.Keyword(null,"args","args",1315556576),args], null);
} else {
var current_stack = cljs.core.first.call(null,stacks__$1);
if(interp.state.empty_stack_QMARK_.call(null,state__$1,current_stack)){
return new cljs.core.Keyword(null,"not-enough-args","not-enough-args",-322062685);
} else {
var G__30904 = interp.state.pop_stack.call(null,state__$1,current_stack);
var G__30905 = cljs.core.rest.call(null,stacks__$1);
var G__30906 = cljs.core.conj.call(null,args,interp.state.peek_stack.call(null,state__$1,current_stack));
state__$1 = G__30904;
stacks__$1 = G__30905;
args = G__30906;
continue;
}
}
break;
}
});

//# sourceMappingURL=state.js.map?rel=1593965199715
