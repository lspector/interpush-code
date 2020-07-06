// Compiled by ClojureScript 1.10.764 {}
goog.provide('interp.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent.dom');
goog.require('cljs.tools.reader');
goog.require('cljs.js');
goog.require('interp.globals');
goog.require('interp.utils');
goog.require('interp.state');
interp.core.step_limit = reagent.core.atom.call(null,(100));
interp.core.current_step = reagent.core.atom.call(null,(0));
interp.core.error_output = reagent.core.atom.call(null,"");
interp.core.test_push_code = reagent.core.atom.call(null,"(:exec_dupitems 1 :boolean_shove  2 :boolean_xor \"three\"\n:integer_gte \"four\" :integer_mod \"five\" :string_concat true false\n:boolean_rot 1 :integer_lte 3 :integer_add \"seven\" :integer_shove \"hello\"\n:string_drop true :integer_rot :boolean_dupitems :string_dupitems :integer_max :string_eq\n:integer_stackdepth :boolean_dup true true :string_take :exec_eq :string_swap :integer_yank \"hello\"\n:integer_fromchar :string_stackdepth :integer_min \"1\" :exec_swap \"hello\" :string_pop :integer_quot :exec_if\n:boolean_invert_first_then_and :boolean_eq :integer_fromboolean :boolean_frominteger :integer_gt :boolean_not\n:integer_duptimes :exec_pop :string_yankdup :boolean_duptimes :string_yank :integer_lt :integer_subtract :string_rot\n:integer_swap :integer_dup :string_includes? :string_duptimes :exec_yank :integer_pop :integer_empty :integer_dec\n:exec_stackdepth :boolean_and :string_length :boolean_invert_second_then_and :string_dup :boolean_yankdup :integer_inc\n:boolean_stackdepth :boolean_pop :integer_mult :exec_yankdup :integer_yankdup :boolean_swap :exec_shove :exec_duptimes\n:boolean_yank :integer_eq :boolean_or 12 :integer_dupitems :string_shove :integer_fromstring :string_= :exec_rot :string_reverse\n:exec_dup )");
interp.core.push_code = reagent.core.atom.call(null,"(:exec_dup (1 2 :integer_add) (:integer_yank 5 6) :integer_gte :exec_if (5 6) :integer_add)");
interp.core.anFrame = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
/**
 * Returns the absolute value of a number.
 */
interp.core.abs = (function interp$core$abs(x){
if((x < (0))){
return (- x);
} else {
return x;
}
});
/**
 * Returns the cosine of an angle (specified in radians).
 */
interp.core.cos = (function interp$core$cos(x){
return Math.cos(x);
});
/**
 * Returns the sine of an angle (specified in radians).
 */
interp.core.sin = (function interp$core$sin(x){
return Math.sin(x);
});
/**
 * Returns the tangent of an angle (specified in radians).
 */
interp.core.tan = (function interp$core$tan(x){
return Math.tan(x);
});
interp.core.opens = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"exec_dup","exec_dup",62681535),(1),new cljs.core.Keyword(null,"exec_if","exec_if",-1891127445),(2)], null);
if((typeof interp !== 'undefined') && (typeof interp.core !== 'undefined') && (typeof interp.core.stacks !== 'undefined')){
} else {
interp.core.stacks = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"exec","exec",1625568743),null,new cljs.core.Keyword(null,"string","string",-1989541586),null,new cljs.core.Keyword(null,"integer","integer",-604721710),null,new cljs.core.Keyword(null,"boolean","boolean",-1919418404),null], null), null);
}
interp.core.push_state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"exec","exec",1625568743),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"integer","integer",-604721710),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"string","string",-1989541586),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"boolean","boolean",-1919418404),cljs.core.List.EMPTY], null));
/**
 * Returns true if the stack is empty.
 */
interp.core.empty_stack_QMARK_ = (function interp$core$empty_stack_QMARK_(state,stack){
return cljs.core.empty_QMARK_.call(null,cljs.core.get.call(null,state,stack));
});
/**
 * Returns top item on a stack.
 */
interp.core.peek_stack = (function interp$core$peek_stack(state,stack){
var working_stack = cljs.core.get.call(null,state,stack);
if(cljs.core.empty_QMARK_.call(null,working_stack)){
return new cljs.core.Keyword(null,"no-stack-item","no-stack-item",-1282481685);
} else {
return cljs.core.first.call(null,working_stack);
}
});
/**
 * Removes top item of stack.
 */
interp.core.pop_stack = (function interp$core$pop_stack(state,stack){
return cljs.core.update.call(null,state,stack,cljs.core.rest);
});
/**
 * Pushes item(s) onto stack.
 */
interp.core.push_to_stack = (function interp$core$push_to_stack(state,stack,items){
var items_list = ((cljs.core.coll_QMARK_.call(null,items))?items:(new cljs.core.List(null,items,null,(1),null)));
var items_list_no_nil = cljs.core.filter.call(null,(function (p1__30994_SHARP_){
return (!((p1__30994_SHARP_ == null)));
}),items_list);
return cljs.core.update.call(null,state,stack,cljs.core.into,items_list_no_nil);
});
/**
 * Takes a state and a collection of stacks to take args from. If there are
 *   enough args on each of the desired stacks, returns a map with keys
 *   {:state :args}, where :state is the new state and :args is a list of args
 *   popped from the stacks. If there aren't enough args on the stacks, returns
 *   :not-enough-args without popping anything.
 */
interp.core.get_args_from_stacks = (function interp$core$get_args_from_stacks(state,stacks){
var state__$1 = state;
var stacks__$1 = cljs.core.reverse.call(null,stacks);
var args = cljs.core.List.EMPTY;
while(true){
if(cljs.core.empty_QMARK_.call(null,stacks__$1)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),state__$1,new cljs.core.Keyword(null,"args","args",1315556576),args], null);
} else {
var current_stack = cljs.core.first.call(null,stacks__$1);
if(interp.core.empty_stack_QMARK_.call(null,state__$1,current_stack)){
return new cljs.core.Keyword(null,"not-enough-args","not-enough-args",-322062685);
} else {
var G__30995 = interp.core.pop_stack.call(null,state__$1,current_stack);
var G__30996 = cljs.core.rest.call(null,stacks__$1);
var G__30997 = cljs.core.conj.call(null,args,interp.core.peek_stack.call(null,state__$1,current_stack));
state__$1 = G__30995;
stacks__$1 = G__30996;
args = G__30997;
continue;
}
}
break;
}
});
interp.core.make_instruction = (function interp$core$make_instruction(state,function$,arg_stacks,return_stack){
var popped_args = interp.core.get_args_from_stacks.call(null,state,arg_stacks);
if(cljs.core._EQ_.call(null,popped_args,new cljs.core.Keyword(null,"not-enough-args","not-enough-args",-322062685))){
return state;
} else {
var result = cljs.core.apply.call(null,function$,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(popped_args));
var new_state = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(popped_args);
return interp.core.push_to_stack.call(null,new_state,return_stack,result);
}
});
interp.core.print_state = (function interp$core$print_state(state){
var seq__30998 = cljs.core.seq.call(null,interp.core.stacks);
var chunk__30999 = null;
var count__31000 = (0);
var i__31001 = (0);
while(true){
if((i__31001 < count__31000)){
var stack = cljs.core._nth.call(null,chunk__30999,i__31001);
cljs.core.prn.call(null,(cljs.core.truth_(cljs.core.get.call(null,state,stack))?cljs.core.get.call(null,state,stack):cljs.core.List.EMPTY));

cljs.core.flush.call(null);


var G__31002 = seq__30998;
var G__31003 = chunk__30999;
var G__31004 = count__31000;
var G__31005 = (i__31001 + (1));
seq__30998 = G__31002;
chunk__30999 = G__31003;
count__31000 = G__31004;
i__31001 = G__31005;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__30998);
if(temp__5735__auto__){
var seq__30998__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30998__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__30998__$1);
var G__31006 = cljs.core.chunk_rest.call(null,seq__30998__$1);
var G__31007 = c__4556__auto__;
var G__31008 = cljs.core.count.call(null,c__4556__auto__);
var G__31009 = (0);
seq__30998 = G__31006;
chunk__30999 = G__31007;
count__31000 = G__31008;
i__31001 = G__31009;
continue;
} else {
var stack = cljs.core.first.call(null,seq__30998__$1);
cljs.core.prn.call(null,(cljs.core.truth_(cljs.core.get.call(null,state,stack))?cljs.core.get.call(null,state,stack):cljs.core.List.EMPTY));

cljs.core.flush.call(null);


var G__31010 = cljs.core.next.call(null,seq__30998__$1);
var G__31011 = null;
var G__31012 = (0);
var G__31013 = (0);
seq__30998 = G__31010;
chunk__30999 = G__31011;
count__31000 = G__31012;
i__31001 = G__31013;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"string_=","string_=",993778397),cljs.core.with_meta((function (state){
return interp.core.make_instruction.call(null,state,cljs.core._EQ_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404));
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"string","string",-1989541586),null,new cljs.core.Keyword(null,"boolean","boolean",-1919418404),null], null), null)], null)));
cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"string_concat","string_concat",436456642),cljs.core.with_meta((function (state){
return interp.core.make_instruction.call(null,state,(function (p1__31014_SHARP_,p2__31015_SHARP_){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.concat.call(null,p1__31014_SHARP_,p2__31015_SHARP_));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.Keyword(null,"string","string",-1989541586));
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"string","string",-1989541586),null], null), null)], null)));
cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"string_drop","string_drop",766159267),cljs.core.with_meta((function (state){
return interp.core.make_instruction.call(null,state,(function (p1__31016_SHARP_,p2__31017_SHARP_){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.drop.call(null,p1__31016_SHARP_,p2__31017_SHARP_));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"integer","integer",-604721710),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.Keyword(null,"string","string",-1989541586));
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"string","string",-1989541586),null,new cljs.core.Keyword(null,"integer","integer",-604721710),null], null), null)], null)));
cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"string_includes?","string_includes?",-472564716),cljs.core.with_meta((function (state){
return interp.core.make_instruction.call(null,state,clojure.string.includes_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404));
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"string","string",-1989541586),null,new cljs.core.Keyword(null,"boolean","boolean",-1919418404),null], null), null)], null)));
cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"string_length","string_length",802916246),cljs.core.with_meta((function (state){
return interp.core.make_instruction.call(null,state,cljs.core.count,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.Keyword(null,"integer","integer",-604721710));
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"string","string",-1989541586),null,new cljs.core.Keyword(null,"integer","integer",-604721710),null], null), null)], null)));
cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"string_reverse","string_reverse",373360031),cljs.core.with_meta((function (state){
return interp.core.make_instruction.call(null,state,(function (p1__31018_SHARP_){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.reverse.call(null,p1__31018_SHARP_));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.Keyword(null,"string","string",-1989541586));
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"string","string",-1989541586),null], null), null)], null)));
cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"string_take","string_take",-218815961),cljs.core.with_meta((function (state){
return interp.core.make_instruction.call(null,state,(function (p1__31019_SHARP_,p2__31020_SHARP_){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.take.call(null,p1__31019_SHARP_,p2__31020_SHARP_));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"integer","integer",-604721710),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.Keyword(null,"string","string",-1989541586));
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"string","string",-1989541586),null,new cljs.core.Keyword(null,"integer","integer",-604721710),null], null), null)], null)));
interp.core._gt = cljs.core.with_meta((function interp$core$_gt(stack,state){
return interp.core.make_instruction.call(null,state,cljs.core._GT_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [stack,stack], null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404));
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"boolean","boolean",-1919418404),null], null), null)], null));
interp.core._gte = cljs.core.with_meta((function interp$core$_gte(stack,state){
return interp.core.make_instruction.call(null,state,cljs.core._GT__EQ_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [stack,stack], null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404));
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"boolean","boolean",-1919418404),null], null), null)], null));
interp.core._lt = cljs.core.with_meta((function interp$core$_lt(stack,state){
return interp.core.make_instruction.call(null,state,cljs.core._LT_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [stack,stack], null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404));
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"boolean","boolean",-1919418404),null], null), null)], null));
interp.core._lte = cljs.core.with_meta((function interp$core$_lte(stack,state){
return interp.core.make_instruction.call(null,state,cljs.core._LT__EQ_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [stack,stack], null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404));
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"boolean","boolean",-1919418404),null], null), null)], null));
interp.core._add = cljs.core.with_meta((function interp$core$_add(stack,state){
return interp.core.make_instruction.call(null,state,cljs.core._PLUS_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [stack,stack], null),stack);
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),cljs.core.PersistentHashSet.EMPTY], null));
interp.core._subtract = cljs.core.with_meta((function interp$core$_subtract(stack,state){
return interp.core.make_instruction.call(null,state,cljs.core._,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [stack,stack], null),stack);
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),cljs.core.PersistentHashSet.EMPTY], null));
interp.core._mult = cljs.core.with_meta((function interp$core$_mult(stack,state){
return interp.core.make_instruction.call(null,state,cljs.core._STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [stack,stack], null),stack);
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),cljs.core.PersistentHashSet.EMPTY], null));
interp.core._quot = cljs.core.with_meta((function interp$core$_quot(stack,state){
return interp.core.make_instruction.call(null,state,(function (p1__31022_SHARP_,p2__31021_SHARP_){
if((p2__31021_SHARP_ === (0))){
return (1);
} else {
return cljs.core.quot.call(null,p1__31022_SHARP_,p2__31021_SHARP_);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [stack,stack], null),stack);
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),cljs.core.PersistentHashSet.EMPTY], null));
interp.core._mod = cljs.core.with_meta((function interp$core$_mod(stack,state){
return interp.core.make_instruction.call(null,state,(function (p1__31024_SHARP_,p2__31023_SHARP_){
if((p2__31023_SHARP_ === (0))){
return (1);
} else {
return cljs.core.mod.call(null,p1__31024_SHARP_,p2__31023_SHARP_);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [stack,stack], null),stack);
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),cljs.core.PersistentHashSet.EMPTY], null));
interp.core._max = cljs.core.with_meta((function interp$core$_max(stack,state){
return interp.core.make_instruction.call(null,state,cljs.core.max,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [stack,stack], null),stack);
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),cljs.core.PersistentHashSet.EMPTY], null));
interp.core._min = cljs.core.with_meta((function interp$core$_min(stack,state){
return interp.core.make_instruction.call(null,state,cljs.core.min,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [stack,stack], null),stack);
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),cljs.core.PersistentHashSet.EMPTY], null));
interp.core._fromboolean = cljs.core.with_meta((function interp$core$_fromboolean(stack,state){
return interp.core.make_instruction.call(null,state,(function (p1__31025_SHARP_){
return ((cljs.core._EQ_.call(null,stack,new cljs.core.Keyword(null,"integer","integer",-604721710)))?cljs.core.int$:cljs.core.float$).call(null,(cljs.core.truth_(p1__31025_SHARP_)?(1):(0)));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null),stack);
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"boolean","boolean",-1919418404),null], null), null)], null));
interp.core._fromchar = cljs.core.with_meta((function interp$core$_fromchar(stack,state){
return interp.core.make_instruction.call(null,state,((cljs.core._EQ_.call(null,stack,new cljs.core.Keyword(null,"integer","integer",-604721710)))?cljs.core.int$:cljs.core.float$),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"char","char",-641587586)], null),stack);
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"char","char",-641587586),null], null), null)], null));
interp.core._fromstring = cljs.core.with_meta((function interp$core$_fromstring(stack,state){
return interp.core.make_instruction.call(null,state,(function (p1__31026_SHARP_){
try{return ((cljs.core._EQ_.call(null,stack,new cljs.core.Keyword(null,"integer","integer",-604721710)))?cljs.core.int$:cljs.core.float$).call(null,cljs.tools.reader.read_string.call(null,p1__31026_SHARP_));
}catch (e31027){if((e31027 instanceof Error)){
var e = e31027;
return null;
} else {
throw e31027;

}
}}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"string","string",-1989541586)], null),stack);
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"string","string",-1989541586),null], null), null)], null));
interp.core._inc = cljs.core.with_meta((function interp$core$_inc(stack,state){
return interp.core.make_instruction.call(null,state,cljs.core.inc,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [stack], null),stack);
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),cljs.core.PersistentHashSet.EMPTY], null));
interp.core._dec = cljs.core.with_meta((function interp$core$_dec(stack,state){
return interp.core.make_instruction.call(null,state,cljs.core.dec,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [stack], null),stack);
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),cljs.core.PersistentHashSet.EMPTY], null));
cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"integer_gt","integer_gt",-1993592691),cljs.core.with_meta.call(null,cljs.core.partial.call(null,interp.core._gt,new cljs.core.Keyword(null,"integer","integer",-604721710)),cljs.core.update_in.call(null,cljs.core.meta.call(null,interp.core._gt),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stacks","stacks",-456633410)], null),(function (p1__30961__30962__auto__){
return cljs.core.conj.call(null,p1__30961__30962__auto__,new cljs.core.Keyword(null,"integer","integer",-604721710));
}))));

cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"integer_gte","integer_gte",-1817566272),cljs.core.with_meta.call(null,cljs.core.partial.call(null,interp.core._gte,new cljs.core.Keyword(null,"integer","integer",-604721710)),cljs.core.update_in.call(null,cljs.core.meta.call(null,interp.core._gte),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stacks","stacks",-456633410)], null),(function (p1__30961__30962__auto__){
return cljs.core.conj.call(null,p1__30961__30962__auto__,new cljs.core.Keyword(null,"integer","integer",-604721710));
}))));

cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"integer_lt","integer_lt",-1046776079),cljs.core.with_meta.call(null,cljs.core.partial.call(null,interp.core._lt,new cljs.core.Keyword(null,"integer","integer",-604721710)),cljs.core.update_in.call(null,cljs.core.meta.call(null,interp.core._lt),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stacks","stacks",-456633410)], null),(function (p1__30961__30962__auto__){
return cljs.core.conj.call(null,p1__30961__30962__auto__,new cljs.core.Keyword(null,"integer","integer",-604721710));
}))));

cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"integer_lte","integer_lte",-1675644094),cljs.core.with_meta.call(null,cljs.core.partial.call(null,interp.core._lte,new cljs.core.Keyword(null,"integer","integer",-604721710)),cljs.core.update_in.call(null,cljs.core.meta.call(null,interp.core._lte),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stacks","stacks",-456633410)], null),(function (p1__30961__30962__auto__){
return cljs.core.conj.call(null,p1__30961__30962__auto__,new cljs.core.Keyword(null,"integer","integer",-604721710));
}))));

cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"integer_add","integer_add",-429483805),cljs.core.with_meta.call(null,cljs.core.partial.call(null,interp.core._add,new cljs.core.Keyword(null,"integer","integer",-604721710)),cljs.core.update_in.call(null,cljs.core.meta.call(null,interp.core._add),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stacks","stacks",-456633410)], null),(function (p1__30961__30962__auto__){
return cljs.core.conj.call(null,p1__30961__30962__auto__,new cljs.core.Keyword(null,"integer","integer",-604721710));
}))));

cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"integer_subtract","integer_subtract",-522113646),cljs.core.with_meta.call(null,cljs.core.partial.call(null,interp.core._subtract,new cljs.core.Keyword(null,"integer","integer",-604721710)),cljs.core.update_in.call(null,cljs.core.meta.call(null,interp.core._subtract),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stacks","stacks",-456633410)], null),(function (p1__30961__30962__auto__){
return cljs.core.conj.call(null,p1__30961__30962__auto__,new cljs.core.Keyword(null,"integer","integer",-604721710));
}))));

cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"integer_mult","integer_mult",-864719494),cljs.core.with_meta.call(null,cljs.core.partial.call(null,interp.core._mult,new cljs.core.Keyword(null,"integer","integer",-604721710)),cljs.core.update_in.call(null,cljs.core.meta.call(null,interp.core._mult),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stacks","stacks",-456633410)], null),(function (p1__30961__30962__auto__){
return cljs.core.conj.call(null,p1__30961__30962__auto__,new cljs.core.Keyword(null,"integer","integer",-604721710));
}))));

cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"integer_quot","integer_quot",1967229483),cljs.core.with_meta.call(null,cljs.core.partial.call(null,interp.core._quot,new cljs.core.Keyword(null,"integer","integer",-604721710)),cljs.core.update_in.call(null,cljs.core.meta.call(null,interp.core._quot),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stacks","stacks",-456633410)], null),(function (p1__30961__30962__auto__){
return cljs.core.conj.call(null,p1__30961__30962__auto__,new cljs.core.Keyword(null,"integer","integer",-604721710));
}))));

cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"integer_mod","integer_mod",-1688457086),cljs.core.with_meta.call(null,cljs.core.partial.call(null,interp.core._mod,new cljs.core.Keyword(null,"integer","integer",-604721710)),cljs.core.update_in.call(null,cljs.core.meta.call(null,interp.core._mod),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stacks","stacks",-456633410)], null),(function (p1__30961__30962__auto__){
return cljs.core.conj.call(null,p1__30961__30962__auto__,new cljs.core.Keyword(null,"integer","integer",-604721710));
}))));

cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"integer_max","integer_max",2062170820),cljs.core.with_meta.call(null,cljs.core.partial.call(null,interp.core._max,new cljs.core.Keyword(null,"integer","integer",-604721710)),cljs.core.update_in.call(null,cljs.core.meta.call(null,interp.core._max),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stacks","stacks",-456633410)], null),(function (p1__30961__30962__auto__){
return cljs.core.conj.call(null,p1__30961__30962__auto__,new cljs.core.Keyword(null,"integer","integer",-604721710));
}))));

cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"integer_min","integer_min",-322239799),cljs.core.with_meta.call(null,cljs.core.partial.call(null,interp.core._min,new cljs.core.Keyword(null,"integer","integer",-604721710)),cljs.core.update_in.call(null,cljs.core.meta.call(null,interp.core._min),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stacks","stacks",-456633410)], null),(function (p1__30961__30962__auto__){
return cljs.core.conj.call(null,p1__30961__30962__auto__,new cljs.core.Keyword(null,"integer","integer",-604721710));
}))));

cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"integer_inc","integer_inc",1042229849),cljs.core.with_meta.call(null,cljs.core.partial.call(null,interp.core._inc,new cljs.core.Keyword(null,"integer","integer",-604721710)),cljs.core.update_in.call(null,cljs.core.meta.call(null,interp.core._inc),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stacks","stacks",-456633410)], null),(function (p1__30961__30962__auto__){
return cljs.core.conj.call(null,p1__30961__30962__auto__,new cljs.core.Keyword(null,"integer","integer",-604721710));
}))));

cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"integer_dec","integer_dec",1625991765),cljs.core.with_meta.call(null,cljs.core.partial.call(null,interp.core._dec,new cljs.core.Keyword(null,"integer","integer",-604721710)),cljs.core.update_in.call(null,cljs.core.meta.call(null,interp.core._dec),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stacks","stacks",-456633410)], null),(function (p1__30961__30962__auto__){
return cljs.core.conj.call(null,p1__30961__30962__auto__,new cljs.core.Keyword(null,"integer","integer",-604721710));
}))));

cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"integer_fromboolean","integer_fromboolean",-2084854260),cljs.core.with_meta.call(null,cljs.core.partial.call(null,interp.core._fromboolean,new cljs.core.Keyword(null,"integer","integer",-604721710)),cljs.core.update_in.call(null,cljs.core.meta.call(null,interp.core._fromboolean),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stacks","stacks",-456633410)], null),(function (p1__30961__30962__auto__){
return cljs.core.conj.call(null,p1__30961__30962__auto__,new cljs.core.Keyword(null,"integer","integer",-604721710));
}))));

cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"integer_fromchar","integer_fromchar",817482825),cljs.core.with_meta.call(null,cljs.core.partial.call(null,interp.core._fromchar,new cljs.core.Keyword(null,"integer","integer",-604721710)),cljs.core.update_in.call(null,cljs.core.meta.call(null,interp.core._fromchar),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stacks","stacks",-456633410)], null),(function (p1__30961__30962__auto__){
return cljs.core.conj.call(null,p1__30961__30962__auto__,new cljs.core.Keyword(null,"integer","integer",-604721710));
}))));

cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"integer_fromstring","integer_fromstring",-2035645955),cljs.core.with_meta.call(null,cljs.core.partial.call(null,interp.core._fromstring,new cljs.core.Keyword(null,"integer","integer",-604721710)),cljs.core.update_in.call(null,cljs.core.meta.call(null,interp.core._fromstring),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stacks","stacks",-456633410)], null),(function (p1__30961__30962__auto__){
return cljs.core.conj.call(null,p1__30961__30962__auto__,new cljs.core.Keyword(null,"integer","integer",-604721710));
}))));
cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"exec_if","exec_if",-1891127445),(function (state){
return interp.core.make_instruction.call(null,state,(function (p1__31028_SHARP_,p2__31030_SHARP_,p3__31029_SHARP_){
if(cljs.core.truth_(p1__31028_SHARP_)){
return p3__31029_SHARP_;
} else {
return p2__31030_SHARP_;
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boolean","boolean",-1919418404),new cljs.core.Keyword(null,"exec","exec",1625568743),new cljs.core.Keyword(null,"exec","exec",1625568743)], null),new cljs.core.Keyword(null,"exec","exec",1625568743));
}));
cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"boolean_and","boolean_and",-424086794),cljs.core.with_meta((function (state){
return interp.core.make_instruction.call(null,state,(function (p1__31031_SHARP_,p2__31032_SHARP_){
var and__4115__auto__ = p1__31031_SHARP_;
if(cljs.core.truth_(and__4115__auto__)){
return p2__31032_SHARP_;
} else {
return and__4115__auto__;
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boolean","boolean",-1919418404),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404));
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"boolean","boolean",-1919418404),null], null), null)], null)));
cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"boolean_or","boolean_or",-643195077),cljs.core.with_meta((function (state){
return interp.core.make_instruction.call(null,state,(function (p1__31033_SHARP_,p2__31034_SHARP_){
var or__4126__auto__ = p1__31033_SHARP_;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return p2__31034_SHARP_;
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boolean","boolean",-1919418404),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404));
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"boolean","boolean",-1919418404),null], null), null)], null)));
cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"boolean_not","boolean_not",1708346222),cljs.core.with_meta((function (state){
return interp.core.make_instruction.call(null,state,cljs.core.not,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404));
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"boolean","boolean",-1919418404),null], null), null)], null)));
cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"boolean_xor","boolean_xor",-594880640),cljs.core.with_meta((function (state){
return interp.core.make_instruction.call(null,state,(function (p1__31035_SHARP_,p2__31036_SHARP_){
var or__4126__auto__ = (function (){var and__4115__auto__ = p1__31035_SHARP_;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not.call(null,p2__31036_SHARP_);
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if(cljs.core.not.call(null,p1__31035_SHARP_)){
return p2__31036_SHARP_;
} else {
return false;
}
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boolean","boolean",-1919418404),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404));
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"boolean","boolean",-1919418404),null], null), null)], null)));
cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"boolean_invert_first_then_and","boolean_invert_first_then_and",108520427),cljs.core.with_meta((function (state){
return interp.core.make_instruction.call(null,state,(function (p1__31037_SHARP_,p2__31038_SHARP_){
var and__4115__auto__ = p1__31037_SHARP_;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not.call(null,p2__31038_SHARP_);
} else {
return and__4115__auto__;
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boolean","boolean",-1919418404),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404));
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"boolean","boolean",-1919418404),null], null), null)], null)));
cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"boolean_invert_second_then_and","boolean_invert_second_then_and",1891652663),cljs.core.with_meta((function (state){
return interp.core.make_instruction.call(null,state,(function (p1__31039_SHARP_,p2__31040_SHARP_){
if(cljs.core.not.call(null,p1__31039_SHARP_)){
return p2__31040_SHARP_;
} else {
return false;
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boolean","boolean",-1919418404),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404));
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"boolean","boolean",-1919418404),null], null), null)], null)));
cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"boolean_frominteger","boolean_frominteger",-35888276),cljs.core.with_meta((function (state){
return interp.core.make_instruction.call(null,state,(function (p1__31041_SHARP_){
return (!((p1__31041_SHARP_ === (0))));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"integer","integer",-604721710)], null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404));
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"integer","integer",-604721710),null,new cljs.core.Keyword(null,"boolean","boolean",-1919418404),null], null), null)], null)));
interp.core._dup = cljs.core.with_meta((function interp$core$_dup(stack,state){
var top_item = interp.state.peek_stack.call(null,state,stack);
if(interp.state.empty_stack_QMARK_.call(null,state,stack)){
return state;
} else {
return interp.state.push_to_stack.call(null,state,stack,top_item);
}
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),cljs.core.PersistentHashSet.EMPTY], null));
interp.core._duptimes = cljs.core.with_meta((function interp$core$_duptimes(stack,state){
if(((((cljs.core._EQ_.call(null,stack,new cljs.core.Keyword(null,"integer","integer",-604721710))) && (((2) <= cljs.core.count.call(null,new cljs.core.Keyword(null,"integer","integer",-604721710).cljs$core$IFn$_invoke$arity$1(state)))))) || (((cljs.core.not_EQ_.call(null,stack,new cljs.core.Keyword(null,"integer","integer",-604721710))) && ((!(interp.state.empty_stack_QMARK_.call(null,state,new cljs.core.Keyword(null,"integer","integer",-604721710))))) && ((!(interp.state.empty_stack_QMARK_.call(null,state,stack)))))))){
var n = interp.state.peek_stack.call(null,state,new cljs.core.Keyword(null,"integer","integer",-604721710));
var popped_state = interp.state.pop_stack.call(null,state,new cljs.core.Keyword(null,"integer","integer",-604721710));
var top_item = interp.state.peek_stack.call(null,popped_state,stack);
var top_item_dup = cljs.core.take.call(null,(n - (1)),cljs.core.repeat.call(null,top_item));
if(((0) < n)){
return interp.state.push_to_stack_multiple.call(null,popped_state,stack,top_item_dup);
} else {
return interp.state.pop_stack.call(null,popped_state,stack);

}
} else {
return state;
}
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"integer","integer",-604721710),null], null), null)], null));
interp.core._dupitems = cljs.core.with_meta((function interp$core$_dupitems(stack,state){
if(interp.state.empty_stack_QMARK_.call(null,state,new cljs.core.Keyword(null,"integer","integer",-604721710))){
return state;
} else {
var n = interp.state.peek_stack.call(null,state,new cljs.core.Keyword(null,"integer","integer",-604721710));
var popped_state = interp.state.pop_stack.call(null,state,new cljs.core.Keyword(null,"integer","integer",-604721710));
var top_items = cljs.core.take.call(null,n,cljs.core.get.call(null,popped_state,stack));
return interp.state.push_to_stack_multiple.call(null,popped_state,stack,top_items);
}
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"integer","integer",-604721710),null], null), null)], null));
interp.core._empty = cljs.core.with_meta((function interp$core$_empty(stack,state){
return interp.state.push_to_stack.call(null,state,new cljs.core.Keyword(null,"boolean","boolean",-1919418404),interp.state.empty_stack_QMARK_.call(null,state,stack));
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"boolean","boolean",-1919418404),null], null), null)], null));
interp.core._eq = cljs.core.with_meta((function interp$core$_eq(stack,state){
return interp.core.make_instruction.call(null,state,cljs.core._EQ_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [stack,stack], null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404));
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"boolean","boolean",-1919418404),null], null), null)], null));
interp.core._flush = cljs.core.with_meta((function interp$core$_flush(stack,state){
return cljs.core.assoc.call(null,state,stack,cljs.core.List.EMPTY);
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),cljs.core.PersistentHashSet.EMPTY], null));
interp.core._pop = cljs.core.with_meta((function interp$core$_pop(stack,state){
return interp.state.pop_stack.call(null,state,stack);
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),cljs.core.PersistentHashSet.EMPTY], null));
interp.core._rot = cljs.core.with_meta((function interp$core$_rot(stack,state){
if(((3) <= cljs.core.count.call(null,cljs.core.get.call(null,state,stack)))){
var top_three = interp.state.peek_stack_multiple.call(null,state,stack,(3));
var popped_state = interp.state.pop_stack_multiple.call(null,state,stack,(3));
var top_three_rot = cljs.core.take.call(null,(3),cljs.core.conj.call(null,top_three,cljs.core.last.call(null,top_three)));
return interp.state.push_to_stack_multiple.call(null,popped_state,stack,top_three_rot);
} else {
return state;
}
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),cljs.core.PersistentHashSet.EMPTY], null));
interp.core._shove = cljs.core.with_meta((function interp$core$_shove(stack,state){
if(((((cljs.core._EQ_.call(null,stack,new cljs.core.Keyword(null,"integer","integer",-604721710))) && (((2) <= cljs.core.count.call(null,new cljs.core.Keyword(null,"integer","integer",-604721710).cljs$core$IFn$_invoke$arity$1(state)))))) || (((cljs.core.not_EQ_.call(null,stack,new cljs.core.Keyword(null,"integer","integer",-604721710))) && ((!(interp.state.empty_stack_QMARK_.call(null,state,new cljs.core.Keyword(null,"integer","integer",-604721710))))) && ((!(interp.state.empty_stack_QMARK_.call(null,state,stack)))))))){
var index_raw = interp.state.peek_stack.call(null,state,new cljs.core.Keyword(null,"integer","integer",-604721710));
var popped_state = interp.state.pop_stack.call(null,state,new cljs.core.Keyword(null,"integer","integer",-604721710));
var top_item = interp.state.peek_stack.call(null,popped_state,stack);
var popped_state__$1 = interp.state.pop_stack.call(null,popped_state,stack);
var index = (function (){var x__4214__auto__ = (0);
var y__4215__auto__ = (function (){var x__4217__auto__ = index_raw;
var y__4218__auto__ = (cljs.core.count.call(null,cljs.core.get.call(null,popped_state__$1,stack)) - (1));
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
})();
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})();
return cljs.core.update.call(null,popped_state__$1,stack,(function (p1__31042_SHARP_){
return interp.utils.not_lazy.call(null,cljs.core.concat.call(null,cljs.core.take.call(null,index,p1__31042_SHARP_),(new cljs.core.List(null,top_item,null,(1),null)),cljs.core.drop.call(null,index,p1__31042_SHARP_)));
}));
} else {
return state;
}
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"integer","integer",-604721710),null], null), null)], null));
interp.core._stackdepth = cljs.core.with_meta((function interp$core$_stackdepth(stack,state){
var stack_depth = cljs.core.count.call(null,cljs.core.get.call(null,state,stack));
return interp.state.push_to_stack.call(null,state,new cljs.core.Keyword(null,"integer","integer",-604721710),stack_depth);
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"integer","integer",-604721710),null], null), null)], null));
interp.core._swap = cljs.core.with_meta((function interp$core$_swap(stack,state){
if(((2) <= cljs.core.count.call(null,cljs.core.get.call(null,state,stack)))){
var top_two = interp.state.peek_stack_multiple.call(null,state,stack,(2));
var popped_state = interp.state.pop_stack_multiple.call(null,state,stack,(2));
return interp.state.push_to_stack_multiple.call(null,popped_state,stack,cljs.core.reverse.call(null,top_two));
} else {
return state;
}
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),cljs.core.PersistentHashSet.EMPTY], null));
interp.core._yank = cljs.core.with_meta((function interp$core$_yank(stack,state){
if(((((cljs.core._EQ_.call(null,stack,new cljs.core.Keyword(null,"integer","integer",-604721710))) && (((2) <= cljs.core.count.call(null,new cljs.core.Keyword(null,"integer","integer",-604721710).cljs$core$IFn$_invoke$arity$1(state)))))) || (((cljs.core.not_EQ_.call(null,stack,new cljs.core.Keyword(null,"integer","integer",-604721710))) && ((!(interp.state.empty_stack_QMARK_.call(null,state,new cljs.core.Keyword(null,"integer","integer",-604721710))))) && ((!(interp.state.empty_stack_QMARK_.call(null,state,stack)))))))){
var index_raw = interp.state.peek_stack.call(null,state,new cljs.core.Keyword(null,"integer","integer",-604721710));
var popped_state = interp.state.pop_stack.call(null,state,new cljs.core.Keyword(null,"integer","integer",-604721710));
var index = (function (){var x__4214__auto__ = (0);
var y__4215__auto__ = (function (){var x__4217__auto__ = index_raw;
var y__4218__auto__ = (cljs.core.count.call(null,cljs.core.get.call(null,popped_state,stack)) - (1));
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
})();
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})();
var indexed_item = cljs.core.nth.call(null,cljs.core.get.call(null,popped_state,stack),index);
return cljs.core.update.call(null,popped_state,stack,(function (p1__31043_SHARP_){
return interp.utils.not_lazy.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,indexed_item,null,(1),null)),cljs.core.take.call(null,index,p1__31043_SHARP_),cljs.core.rest.call(null,cljs.core.drop.call(null,index,p1__31043_SHARP_))));
}));
} else {
return state;
}
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"integer","integer",-604721710),null], null), null)], null));
interp.core._yankdup = cljs.core.with_meta((function interp$core$_yankdup(stack,state){
if(((((cljs.core._EQ_.call(null,stack,new cljs.core.Keyword(null,"integer","integer",-604721710))) && (((2) <= cljs.core.count.call(null,new cljs.core.Keyword(null,"integer","integer",-604721710).cljs$core$IFn$_invoke$arity$1(state)))))) || (((cljs.core.not_EQ_.call(null,stack,new cljs.core.Keyword(null,"integer","integer",-604721710))) && ((!(interp.state.empty_stack_QMARK_.call(null,state,new cljs.core.Keyword(null,"integer","integer",-604721710))))) && ((!(interp.state.empty_stack_QMARK_.call(null,state,stack)))))))){
var index_raw = interp.state.peek_stack.call(null,state,new cljs.core.Keyword(null,"integer","integer",-604721710));
var popped_state = interp.state.pop_stack.call(null,state,new cljs.core.Keyword(null,"integer","integer",-604721710));
var index = (function (){var x__4214__auto__ = (0);
var y__4215__auto__ = (function (){var x__4217__auto__ = index_raw;
var y__4218__auto__ = (cljs.core.count.call(null,cljs.core.get.call(null,popped_state,stack)) - (1));
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
})();
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})();
var indexed_item = cljs.core.nth.call(null,cljs.core.get.call(null,popped_state,stack),index);
return interp.state.push_to_stack.call(null,popped_state,stack,indexed_item);
} else {
return state;
}
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"integer","integer",-604721710),null], null), null)], null));
cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"boolean_dup","boolean_dup",-1634358073),cljs.core.with_meta.call(null,cljs.core.partial.call(null,interp.core._dup,new cljs.core.Keyword(null,"boolean","boolean",-1919418404)),cljs.core.update_in.call(null,cljs.core.meta.call(null,interp.core._dup),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stacks","stacks",-456633410)], null),(function (p1__30961__30962__auto__){
return cljs.core.conj.call(null,p1__30961__30962__auto__,new cljs.core.Keyword(null,"boolean","boolean",-1919418404));
}))));

cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"boolean_duptimes","boolean_duptimes",518337712),cljs.core.with_meta.call(null,cljs.core.partial.call(null,interp.core._duptimes,new cljs.core.Keyword(null,"boolean","boolean",-1919418404)),cljs.core.update_in.call(null,cljs.core.meta.call(null,interp.core._duptimes),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stacks","stacks",-456633410)], null),(function (p1__30961__30962__auto__){
return cljs.core.conj.call(null,p1__30961__30962__auto__,new cljs.core.Keyword(null,"boolean","boolean",-1919418404));
}))));

cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"boolean_dupitems","boolean_dupitems",1354040612),cljs.core.with_meta.call(null,cljs.core.partial.call(null,interp.core._dupitems,new cljs.core.Keyword(null,"boolean","boolean",-1919418404)),cljs.core.update_in.call(null,cljs.core.meta.call(null,interp.core._dupitems),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stacks","stacks",-456633410)], null),(function (p1__30961__30962__auto__){
return cljs.core.conj.call(null,p1__30961__30962__auto__,new cljs.core.Keyword(null,"boolean","boolean",-1919418404));
}))));

cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"boolean_empty","boolean_empty",-256338021),cljs.core.with_meta.call(null,cljs.core.partial.call(null,interp.core._empty,new cljs.core.Keyword(null,"boolean","boolean",-1919418404)),cljs.core.update_in.call(null,cljs.core.meta.call(null,interp.core._empty),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stacks","stacks",-456633410)], null),(function (p1__30961__30962__auto__){
return cljs.core.conj.call(null,p1__30961__30962__auto__,new cljs.core.Keyword(null,"boolean","boolean",-1919418404));
}))));

cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"boolean_eq","boolean_eq",-1589715828),cljs.core.with_meta.call(null,cljs.core.partial.call(null,interp.core._eq,new cljs.core.Keyword(null,"boolean","boolean",-1919418404)),cljs.core.update_in.call(null,cljs.core.meta.call(null,interp.core._eq),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stacks","stacks",-456633410)], null),(function (p1__30961__30962__auto__){
return cljs.core.conj.call(null,p1__30961__30962__auto__,new cljs.core.Keyword(null,"boolean","boolean",-1919418404));
}))));

cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"boolean_flush","boolean_flush",1048225791),cljs.core.with_meta.call(null,cljs.core.partial.call(null,interp.core._flush,new cljs.core.Keyword(null,"boolean","boolean",-1919418404)),cljs.core.update_in.call(null,cljs.core.meta.call(null,interp.core._flush),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stacks","stacks",-456633410)], null),(function (p1__30961__30962__auto__){
return cljs.core.conj.call(null,p1__30961__30962__auto__,new cljs.core.Keyword(null,"boolean","boolean",-1919418404));
}))));

cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"boolean_pop","boolean_pop",441346969),cljs.core.with_meta.call(null,cljs.core.partial.call(null,interp.core._pop,new cljs.core.Keyword(null,"boolean","boolean",-1919418404)),cljs.core.update_in.call(null,cljs.core.meta.call(null,interp.core._pop),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stacks","stacks",-456633410)], null),(function (p1__30961__30962__auto__){
return cljs.core.conj.call(null,p1__30961__30962__auto__,new cljs.core.Keyword(null,"boolean","boolean",-1919418404));
}))));

cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"boolean_rot","boolean_rot",-1329883646),cljs.core.with_meta.call(null,cljs.core.partial.call(null,interp.core._rot,new cljs.core.Keyword(null,"boolean","boolean",-1919418404)),cljs.core.update_in.call(null,cljs.core.meta.call(null,interp.core._rot),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stacks","stacks",-456633410)], null),(function (p1__30961__30962__auto__){
return cljs.core.conj.call(null,p1__30961__30962__auto__,new cljs.core.Keyword(null,"boolean","boolean",-1919418404));
}))));

cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"boolean_shove","boolean_shove",1889960288),cljs.core.with_meta.call(null,cljs.core.partial.call(null,interp.core._shove,new cljs.core.Keyword(null,"boolean","boolean",-1919418404)),cljs.core.update_in.call(null,cljs.core.meta.call(null,interp.core._shove),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stacks","stacks",-456633410)], null),(function (p1__30961__30962__auto__){
return cljs.core.conj.call(null,p1__30961__30962__auto__,new cljs.core.Keyword(null,"boolean","boolean",-1919418404));
}))));

cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"boolean_stackdepth","boolean_stackdepth",1993810553),cljs.core.with_meta.call(null,cljs.core.partial.call(null,interp.core._stackdepth,new cljs.core.Keyword(null,"boolean","boolean",-1919418404)),cljs.core.update_in.call(null,cljs.core.meta.call(null,interp.core._stackdepth),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stacks","stacks",-456633410)], null),(function (p1__30961__30962__auto__){
return cljs.core.conj.call(null,p1__30961__30962__auto__,new cljs.core.Keyword(null,"boolean","boolean",-1919418404));
}))));

cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"boolean_swap","boolean_swap",2065631898),cljs.core.with_meta.call(null,cljs.core.partial.call(null,interp.core._swap,new cljs.core.Keyword(null,"boolean","boolean",-1919418404)),cljs.core.update_in.call(null,cljs.core.meta.call(null,interp.core._swap),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stacks","stacks",-456633410)], null),(function (p1__30961__30962__auto__){
return cljs.core.conj.call(null,p1__30961__30962__auto__,new cljs.core.Keyword(null,"boolean","boolean",-1919418404));
}))));

cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"boolean_yank","boolean_yank",-1346298022),cljs.core.with_meta.call(null,cljs.core.partial.call(null,interp.core._yank,new cljs.core.Keyword(null,"boolean","boolean",-1919418404)),cljs.core.update_in.call(null,cljs.core.meta.call(null,interp.core._yank),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stacks","stacks",-456633410)], null),(function (p1__30961__30962__auto__){
return cljs.core.conj.call(null,p1__30961__30962__auto__,new cljs.core.Keyword(null,"boolean","boolean",-1919418404));
}))));

cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"boolean_yankdup","boolean_yankdup",1563966776),cljs.core.with_meta.call(null,cljs.core.partial.call(null,interp.core._yankdup,new cljs.core.Keyword(null,"boolean","boolean",-1919418404)),cljs.core.update_in.call(null,cljs.core.meta.call(null,interp.core._yankdup),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stacks","stacks",-456633410)], null),(function (p1__30961__30962__auto__){
return cljs.core.conj.call(null,p1__30961__30962__auto__,new cljs.core.Keyword(null,"boolean","boolean",-1919418404));
}))));

cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"exec_dup","exec_dup",62681535),cljs.core.with_meta.call(null,cljs.core.partial.call(null,interp.core._dup,new cljs.core.Keyword(null,"exec","exec",1625568743)),cljs.core.update_in.call(null,cljs.core.meta.call(null,interp.core._dup),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stacks","stacks",-456633410)], null),(function (p1__30961__30962__auto__){
return cljs.core.conj.call(null,p1__30961__30962__auto__,new cljs.core.Keyword(null,"exec","exec",1625568743));
}))));

cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"exec_duptimes","exec_duptimes",477811386),cljs.core.with_meta.call(null,cljs.core.partial.call(null,interp.core._duptimes,new cljs.core.Keyword(null,"exec","exec",1625568743)),cljs.core.update_in.call(null,cljs.core.meta.call(null,interp.core._duptimes),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stacks","stacks",-456633410)], null),(function (p1__30961__30962__auto__){
return cljs.core.conj.call(null,p1__30961__30962__auto__,new cljs.core.Keyword(null,"exec","exec",1625568743));
}))));

cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"exec_dupitems","exec_dupitems",139360352),cljs.core.with_meta.call(null,cljs.core.partial.call(null,interp.core._dupitems,new cljs.core.Keyword(null,"exec","exec",1625568743)),cljs.core.update_in.call(null,cljs.core.meta.call(null,interp.core._dupitems),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stacks","stacks",-456633410)], null),(function (p1__30961__30962__auto__){
return cljs.core.conj.call(null,p1__30961__30962__auto__,new cljs.core.Keyword(null,"exec","exec",1625568743));
}))));

cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"exec_empty","exec_empty",1591126237),cljs.core.with_meta.call(null,cljs.core.partial.call(null,interp.core._empty,new cljs.core.Keyword(null,"exec","exec",1625568743)),cljs.core.update_in.call(null,cljs.core.meta.call(null,interp.core._empty),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stacks","stacks",-456633410)], null),(function (p1__30961__30962__auto__){
return cljs.core.conj.call(null,p1__30961__30962__auto__,new cljs.core.Keyword(null,"exec","exec",1625568743));
}))));

cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"exec_eq","exec_eq",1114426088),cljs.core.with_meta.call(null,cljs.core.partial.call(null,interp.core._eq,new cljs.core.Keyword(null,"exec","exec",1625568743)),cljs.core.update_in.call(null,cljs.core.meta.call(null,interp.core._eq),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stacks","stacks",-456633410)], null),(function (p1__30961__30962__auto__){
return cljs.core.conj.call(null,p1__30961__30962__auto__,new cljs.core.Keyword(null,"exec","exec",1625568743));
}))));

cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"exec_flush","exec_flush",1987904662),cljs.core.with_meta.call(null,cljs.core.partial.call(null,interp.core._flush,new cljs.core.Keyword(null,"exec","exec",1625568743)),cljs.core.update_in.call(null,cljs.core.meta.call(null,interp.core._flush),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stacks","stacks",-456633410)], null),(function (p1__30961__30962__auto__){
return cljs.core.conj.call(null,p1__30961__30962__auto__,new cljs.core.Keyword(null,"exec","exec",1625568743));
}))));

cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"exec_pop","exec_pop",562498351),cljs.core.with_meta.call(null,cljs.core.partial.call(null,interp.core._pop,new cljs.core.Keyword(null,"exec","exec",1625568743)),cljs.core.update_in.call(null,cljs.core.meta.call(null,interp.core._pop),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stacks","stacks",-456633410)], null),(function (p1__30961__30962__auto__){
return cljs.core.conj.call(null,p1__30961__30962__auto__,new cljs.core.Keyword(null,"exec","exec",1625568743));
}))));

cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"exec_rot","exec_rot",673414846),cljs.core.with_meta.call(null,cljs.core.partial.call(null,interp.core._rot,new cljs.core.Keyword(null,"exec","exec",1625568743)),cljs.core.update_in.call(null,cljs.core.meta.call(null,interp.core._rot),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stacks","stacks",-456633410)], null),(function (p1__30961__30962__auto__){
return cljs.core.conj.call(null,p1__30961__30962__auto__,new cljs.core.Keyword(null,"exec","exec",1625568743));
}))));

cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"exec_shove","exec_shove",-1310616902),cljs.core.with_meta.call(null,cljs.core.partial.call(null,interp.core._shove,new cljs.core.Keyword(null,"exec","exec",1625568743)),cljs.core.update_in.call(null,cljs.core.meta.call(null,interp.core._shove),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stacks","stacks",-456633410)], null),(function (p1__30961__30962__auto__){
return cljs.core.conj.call(null,p1__30961__30962__auto__,new cljs.core.Keyword(null,"exec","exec",1625568743));
}))));

cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"exec_stackdepth","exec_stackdepth",986160630),cljs.core.with_meta.call(null,cljs.core.partial.call(null,interp.core._stackdepth,new cljs.core.Keyword(null,"exec","exec",1625568743)),cljs.core.update_in.call(null,cljs.core.meta.call(null,interp.core._stackdepth),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stacks","stacks",-456633410)], null),(function (p1__30961__30962__auto__){
return cljs.core.conj.call(null,p1__30961__30962__auto__,new cljs.core.Keyword(null,"exec","exec",1625568743));
}))));

cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"exec_swap","exec_swap",-718701687),cljs.core.with_meta.call(null,cljs.core.partial.call(null,interp.core._swap,new cljs.core.Keyword(null,"exec","exec",1625568743)),cljs.core.update_in.call(null,cljs.core.meta.call(null,interp.core._swap),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stacks","stacks",-456633410)], null),(function (p1__30961__30962__auto__){
return cljs.core.conj.call(null,p1__30961__30962__auto__,new cljs.core.Keyword(null,"exec","exec",1625568743));
}))));

cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"exec_yank","exec_yank",842629620),cljs.core.with_meta.call(null,cljs.core.partial.call(null,interp.core._yank,new cljs.core.Keyword(null,"exec","exec",1625568743)),cljs.core.update_in.call(null,cljs.core.meta.call(null,interp.core._yank),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stacks","stacks",-456633410)], null),(function (p1__30961__30962__auto__){
return cljs.core.conj.call(null,p1__30961__30962__auto__,new cljs.core.Keyword(null,"exec","exec",1625568743));
}))));

cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"exec_yankdup","exec_yankdup",1173551674),cljs.core.with_meta.call(null,cljs.core.partial.call(null,interp.core._yankdup,new cljs.core.Keyword(null,"exec","exec",1625568743)),cljs.core.update_in.call(null,cljs.core.meta.call(null,interp.core._yankdup),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stacks","stacks",-456633410)], null),(function (p1__30961__30962__auto__){
return cljs.core.conj.call(null,p1__30961__30962__auto__,new cljs.core.Keyword(null,"exec","exec",1625568743));
}))));

cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"integer_dup","integer_dup",303193043),cljs.core.with_meta.call(null,cljs.core.partial.call(null,interp.core._dup,new cljs.core.Keyword(null,"integer","integer",-604721710)),cljs.core.update_in.call(null,cljs.core.meta.call(null,interp.core._dup),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stacks","stacks",-456633410)], null),(function (p1__30961__30962__auto__){
return cljs.core.conj.call(null,p1__30961__30962__auto__,new cljs.core.Keyword(null,"integer","integer",-604721710));
}))));

cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"integer_duptimes","integer_duptimes",-42392881),cljs.core.with_meta.call(null,cljs.core.partial.call(null,interp.core._duptimes,new cljs.core.Keyword(null,"integer","integer",-604721710)),cljs.core.update_in.call(null,cljs.core.meta.call(null,interp.core._duptimes),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stacks","stacks",-456633410)], null),(function (p1__30961__30962__auto__){
return cljs.core.conj.call(null,p1__30961__30962__auto__,new cljs.core.Keyword(null,"integer","integer",-604721710));
}))));

cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"integer_dupitems","integer_dupitems",-1126872963),cljs.core.with_meta.call(null,cljs.core.partial.call(null,interp.core._dupitems,new cljs.core.Keyword(null,"integer","integer",-604721710)),cljs.core.update_in.call(null,cljs.core.meta.call(null,interp.core._dupitems),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stacks","stacks",-456633410)], null),(function (p1__30961__30962__auto__){
return cljs.core.conj.call(null,p1__30961__30962__auto__,new cljs.core.Keyword(null,"integer","integer",-604721710));
}))));

cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"integer_empty","integer_empty",1007164020),cljs.core.with_meta.call(null,cljs.core.partial.call(null,interp.core._empty,new cljs.core.Keyword(null,"integer","integer",-604721710)),cljs.core.update_in.call(null,cljs.core.meta.call(null,interp.core._empty),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stacks","stacks",-456633410)], null),(function (p1__30961__30962__auto__){
return cljs.core.conj.call(null,p1__30961__30962__auto__,new cljs.core.Keyword(null,"integer","integer",-604721710));
}))));

cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"integer_eq","integer_eq",1174436858),cljs.core.with_meta.call(null,cljs.core.partial.call(null,interp.core._eq,new cljs.core.Keyword(null,"integer","integer",-604721710)),cljs.core.update_in.call(null,cljs.core.meta.call(null,interp.core._eq),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stacks","stacks",-456633410)], null),(function (p1__30961__30962__auto__){
return cljs.core.conj.call(null,p1__30961__30962__auto__,new cljs.core.Keyword(null,"integer","integer",-604721710));
}))));

cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"integer_flush","integer_flush",-1677139443),cljs.core.with_meta.call(null,cljs.core.partial.call(null,interp.core._flush,new cljs.core.Keyword(null,"integer","integer",-604721710)),cljs.core.update_in.call(null,cljs.core.meta.call(null,interp.core._flush),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stacks","stacks",-456633410)], null),(function (p1__30961__30962__auto__){
return cljs.core.conj.call(null,p1__30961__30962__auto__,new cljs.core.Keyword(null,"integer","integer",-604721710));
}))));

cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"integer_pop","integer_pop",-1086812652),cljs.core.with_meta.call(null,cljs.core.partial.call(null,interp.core._pop,new cljs.core.Keyword(null,"integer","integer",-604721710)),cljs.core.update_in.call(null,cljs.core.meta.call(null,interp.core._pop),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stacks","stacks",-456633410)], null),(function (p1__30961__30962__auto__){
return cljs.core.conj.call(null,p1__30961__30962__auto__,new cljs.core.Keyword(null,"integer","integer",-604721710));
}))));

cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"integer_rot","integer_rot",-2068333117),cljs.core.with_meta.call(null,cljs.core.partial.call(null,interp.core._rot,new cljs.core.Keyword(null,"integer","integer",-604721710)),cljs.core.update_in.call(null,cljs.core.meta.call(null,interp.core._rot),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stacks","stacks",-456633410)], null),(function (p1__30961__30962__auto__){
return cljs.core.conj.call(null,p1__30961__30962__auto__,new cljs.core.Keyword(null,"integer","integer",-604721710));
}))));

cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"integer_shove","integer_shove",-517638781),cljs.core.with_meta.call(null,cljs.core.partial.call(null,interp.core._shove,new cljs.core.Keyword(null,"integer","integer",-604721710)),cljs.core.update_in.call(null,cljs.core.meta.call(null,interp.core._shove),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stacks","stacks",-456633410)], null),(function (p1__30961__30962__auto__){
return cljs.core.conj.call(null,p1__30961__30962__auto__,new cljs.core.Keyword(null,"integer","integer",-604721710));
}))));

cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"integer_stackdepth","integer_stackdepth",-1211571578),cljs.core.with_meta.call(null,cljs.core.partial.call(null,interp.core._stackdepth,new cljs.core.Keyword(null,"integer","integer",-604721710)),cljs.core.update_in.call(null,cljs.core.meta.call(null,interp.core._stackdepth),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stacks","stacks",-456633410)], null),(function (p1__30961__30962__auto__){
return cljs.core.conj.call(null,p1__30961__30962__auto__,new cljs.core.Keyword(null,"integer","integer",-604721710));
}))));

cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"integer_swap","integer_swap",997146099),cljs.core.with_meta.call(null,cljs.core.partial.call(null,interp.core._swap,new cljs.core.Keyword(null,"integer","integer",-604721710)),cljs.core.update_in.call(null,cljs.core.meta.call(null,interp.core._swap),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stacks","stacks",-456633410)], null),(function (p1__30961__30962__auto__){
return cljs.core.conj.call(null,p1__30961__30962__auto__,new cljs.core.Keyword(null,"integer","integer",-604721710));
}))));

cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"integer_yank","integer_yank",149170152),cljs.core.with_meta.call(null,cljs.core.partial.call(null,interp.core._yank,new cljs.core.Keyword(null,"integer","integer",-604721710)),cljs.core.update_in.call(null,cljs.core.meta.call(null,interp.core._yank),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stacks","stacks",-456633410)], null),(function (p1__30961__30962__auto__){
return cljs.core.conj.call(null,p1__30961__30962__auto__,new cljs.core.Keyword(null,"integer","integer",-604721710));
}))));

cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"integer_yankdup","integer_yankdup",-1604399526),cljs.core.with_meta.call(null,cljs.core.partial.call(null,interp.core._yankdup,new cljs.core.Keyword(null,"integer","integer",-604721710)),cljs.core.update_in.call(null,cljs.core.meta.call(null,interp.core._yankdup),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stacks","stacks",-456633410)], null),(function (p1__30961__30962__auto__){
return cljs.core.conj.call(null,p1__30961__30962__auto__,new cljs.core.Keyword(null,"integer","integer",-604721710));
}))));

cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"string_dup","string_dup",1221144664),cljs.core.with_meta.call(null,cljs.core.partial.call(null,interp.core._dup,new cljs.core.Keyword(null,"string","string",-1989541586)),cljs.core.update_in.call(null,cljs.core.meta.call(null,interp.core._dup),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stacks","stacks",-456633410)], null),(function (p1__30961__30962__auto__){
return cljs.core.conj.call(null,p1__30961__30962__auto__,new cljs.core.Keyword(null,"string","string",-1989541586));
}))));

cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"string_duptimes","string_duptimes",1784156372),cljs.core.with_meta.call(null,cljs.core.partial.call(null,interp.core._duptimes,new cljs.core.Keyword(null,"string","string",-1989541586)),cljs.core.update_in.call(null,cljs.core.meta.call(null,interp.core._duptimes),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stacks","stacks",-456633410)], null),(function (p1__30961__30962__auto__){
return cljs.core.conj.call(null,p1__30961__30962__auto__,new cljs.core.Keyword(null,"string","string",-1989541586));
}))));

cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"string_dupitems","string_dupitems",416047588),cljs.core.with_meta.call(null,cljs.core.partial.call(null,interp.core._dupitems,new cljs.core.Keyword(null,"string","string",-1989541586)),cljs.core.update_in.call(null,cljs.core.meta.call(null,interp.core._dupitems),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stacks","stacks",-456633410)], null),(function (p1__30961__30962__auto__){
return cljs.core.conj.call(null,p1__30961__30962__auto__,new cljs.core.Keyword(null,"string","string",-1989541586));
}))));

cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"string_empty","string_empty",820100879),cljs.core.with_meta.call(null,cljs.core.partial.call(null,interp.core._empty,new cljs.core.Keyword(null,"string","string",-1989541586)),cljs.core.update_in.call(null,cljs.core.meta.call(null,interp.core._empty),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stacks","stacks",-456633410)], null),(function (p1__30961__30962__auto__){
return cljs.core.conj.call(null,p1__30961__30962__auto__,new cljs.core.Keyword(null,"string","string",-1989541586));
}))));

cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"string_eq","string_eq",-1951643323),cljs.core.with_meta.call(null,cljs.core.partial.call(null,interp.core._eq,new cljs.core.Keyword(null,"string","string",-1989541586)),cljs.core.update_in.call(null,cljs.core.meta.call(null,interp.core._eq),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stacks","stacks",-456633410)], null),(function (p1__30961__30962__auto__){
return cljs.core.conj.call(null,p1__30961__30962__auto__,new cljs.core.Keyword(null,"string","string",-1989541586));
}))));

cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"string_flush","string_flush",2132135546),cljs.core.with_meta.call(null,cljs.core.partial.call(null,interp.core._flush,new cljs.core.Keyword(null,"string","string",-1989541586)),cljs.core.update_in.call(null,cljs.core.meta.call(null,interp.core._flush),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stacks","stacks",-456633410)], null),(function (p1__30961__30962__auto__){
return cljs.core.conj.call(null,p1__30961__30962__auto__,new cljs.core.Keyword(null,"string","string",-1989541586));
}))));

cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"string_pop","string_pop",303912938),cljs.core.with_meta.call(null,cljs.core.partial.call(null,interp.core._pop,new cljs.core.Keyword(null,"string","string",-1989541586)),cljs.core.update_in.call(null,cljs.core.meta.call(null,interp.core._pop),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stacks","stacks",-456633410)], null),(function (p1__30961__30962__auto__){
return cljs.core.conj.call(null,p1__30961__30962__auto__,new cljs.core.Keyword(null,"string","string",-1989541586));
}))));

cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"string_rot","string_rot",-1908566605),cljs.core.with_meta.call(null,cljs.core.partial.call(null,interp.core._rot,new cljs.core.Keyword(null,"string","string",-1989541586)),cljs.core.update_in.call(null,cljs.core.meta.call(null,interp.core._rot),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stacks","stacks",-456633410)], null),(function (p1__30961__30962__auto__){
return cljs.core.conj.call(null,p1__30961__30962__auto__,new cljs.core.Keyword(null,"string","string",-1989541586));
}))));

cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"string_shove","string_shove",1346951453),cljs.core.with_meta.call(null,cljs.core.partial.call(null,interp.core._shove,new cljs.core.Keyword(null,"string","string",-1989541586)),cljs.core.update_in.call(null,cljs.core.meta.call(null,interp.core._shove),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stacks","stacks",-456633410)], null),(function (p1__30961__30962__auto__){
return cljs.core.conj.call(null,p1__30961__30962__auto__,new cljs.core.Keyword(null,"string","string",-1989541586));
}))));

cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"string_stackdepth","string_stackdepth",-1598140311),cljs.core.with_meta.call(null,cljs.core.partial.call(null,interp.core._stackdepth,new cljs.core.Keyword(null,"string","string",-1989541586)),cljs.core.update_in.call(null,cljs.core.meta.call(null,interp.core._stackdepth),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stacks","stacks",-456633410)], null),(function (p1__30961__30962__auto__){
return cljs.core.conj.call(null,p1__30961__30962__auto__,new cljs.core.Keyword(null,"string","string",-1989541586));
}))));

cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"string_swap","string_swap",1064168328),cljs.core.with_meta.call(null,cljs.core.partial.call(null,interp.core._swap,new cljs.core.Keyword(null,"string","string",-1989541586)),cljs.core.update_in.call(null,cljs.core.meta.call(null,interp.core._swap),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stacks","stacks",-456633410)], null),(function (p1__30961__30962__auto__){
return cljs.core.conj.call(null,p1__30961__30962__auto__,new cljs.core.Keyword(null,"string","string",-1989541586));
}))));

cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"string_yank","string_yank",-1266134927),cljs.core.with_meta.call(null,cljs.core.partial.call(null,interp.core._yank,new cljs.core.Keyword(null,"string","string",-1989541586)),cljs.core.update_in.call(null,cljs.core.meta.call(null,interp.core._yank),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stacks","stacks",-456633410)], null),(function (p1__30961__30962__auto__){
return cljs.core.conj.call(null,p1__30961__30962__auto__,new cljs.core.Keyword(null,"string","string",-1989541586));
}))));

cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"string_yankdup","string_yankdup",-1824895121),cljs.core.with_meta.call(null,cljs.core.partial.call(null,interp.core._yankdup,new cljs.core.Keyword(null,"string","string",-1989541586)),cljs.core.update_in.call(null,cljs.core.meta.call(null,interp.core._yankdup),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stacks","stacks",-456633410)], null),(function (p1__30961__30962__auto__){
return cljs.core.conj.call(null,p1__30961__30962__auto__,new cljs.core.Keyword(null,"string","string",-1989541586));
}))));
/**
 * Takes a Push state and executes the next instruction on the exec stack.
 */
interp.core.interpret_one_step = (function interp$core$interpret_one_step(state){
var popped_state_31046 = interp.core.pop_stack.call(null,state,new cljs.core.Keyword(null,"exec","exec",1625568743));
var first_instruction_raw_31047 = cljs.core.first.call(null,new cljs.core.Keyword(null,"exec","exec",1625568743).cljs$core$IFn$_invoke$arity$1(state));
var first_instruction_31048 = (((first_instruction_raw_31047 == null))?null:(((first_instruction_raw_31047 instanceof cljs.core.Keyword))?first_instruction_raw_31047.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,interp.globals.instruction_table)):first_instruction_raw_31047
));
cljs.core.println.call(null,cljs.core.type.call(null,first_instruction_31048),first_instruction_31048);

if(cljs.core.fn_QMARK_.call(null,first_instruction_31048)){
cljs.core.reset_BANG_.call(null,interp.core.push_state,first_instruction_31048.call(null,popped_state_31046));
} else {
if(typeof first_instruction_31048 === 'number'){
cljs.core.reset_BANG_.call(null,interp.core.push_state,interp.core.push_to_stack.call(null,popped_state_31046,new cljs.core.Keyword(null,"integer","integer",-604721710),(first_instruction_31048 | (0))));
} else {
if(cljs.core.integer_QMARK_.call(null,first_instruction_31048)){
cljs.core.reset_BANG_.call(null,interp.core.push_state,interp.core.push_to_stack.call(null,popped_state_31046,new cljs.core.Keyword(null,"integer","integer",-604721710),first_instruction_31048));
} else {
if(typeof first_instruction_31048 === 'string'){
cljs.core.reset_BANG_.call(null,interp.core.push_state,interp.core.push_to_stack.call(null,popped_state_31046,new cljs.core.Keyword(null,"string","string",-1989541586),first_instruction_31048));
} else {
if(cljs.core.seq_QMARK_.call(null,first_instruction_31048)){
cljs.core.reset_BANG_.call(null,interp.core.push_state,cljs.core.update.call(null,popped_state_31046,new cljs.core.Keyword(null,"exec","exec",1625568743),(function (p1__31045_SHARP_,p2__31044_SHARP_){
return cljs.core.concat.call(null,p2__31044_SHARP_,p1__31045_SHARP_);
}),first_instruction_31048));
} else {
if(((cljs.core._EQ_.call(null,first_instruction_31048,true)) || (cljs.core._EQ_.call(null,first_instruction_31048,false)))){
cljs.core.reset_BANG_.call(null,interp.core.push_state,interp.core.push_to_stack.call(null,popped_state_31046,new cljs.core.Keyword(null,"boolean","boolean",-1919418404),first_instruction_31048));
} else {
cljs.core.reset_BANG_.call(null,interp.core.error_output,["Unrecognized Push instruction in program: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(first_instruction_raw_31047)].join(''));

cljs.core.reset_BANG_.call(null,interp.core.current_step,(1000000));

}
}
}
}
}
}

return cljs.core.swap_BANG_.call(null,interp.core.current_step,cljs.core.inc);
});
interp.core.interpret_push = (function interp$core$interpret_push(){
var sl = (cljs.core.deref.call(null,interp.core.step_limit) | (0));
var state = cljs.core.deref.call(null,interp.core.push_state);
if((((sl <= (cljs.core.deref.call(null,interp.core.current_step) | (0)))) || (cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"exec","exec",1625568743).cljs$core$IFn$_invoke$arity$1(state))))){
return cljs.core.List.EMPTY;
} else {
interp.core.interpret_one_step.call(null,cljs.core.deref.call(null,interp.core.push_state));

return cljs.core.reset_BANG_.call(null,interp.core.anFrame,window.requestAnimationFrame(interp.core.interpret_push));
}
});
interp.core.output_stacks = reagent.core.atom.call(null,"Test Output");
interp.core.load_state = (function interp$core$load_state(push_code){
cljs.core.reset_BANG_.call(null,interp.core.current_step,(0));

cljs.core.reset_BANG_.call(null,interp.core.error_output,"");

var stacks = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"exec","exec",1625568743),(new cljs.core.List(null,push_code,null,(1),null)),new cljs.core.Keyword(null,"integer","integer",-604721710),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"string","string",-1989541586),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"boolean","boolean",-1919418404),cljs.core.List.EMPTY], null);
return cljs.core.reset_BANG_.call(null,interp.core.push_state,stacks);
});
interp.core.load_button = (function interp$core$load_button(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"Load Push Code",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return interp.core.load_state.call(null,cljs.tools.reader.read_string.call(null,cljs.core.deref.call(null,interp.core.push_code)));
})], null)], null)], null);
});
interp.core.interpret_one_step_button = (function interp$core$interpret_one_step_button(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"Interpret One Step",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return interp.core.interpret_one_step.call(null,cljs.core.deref.call(null,interp.core.push_state));
})], null)], null)], null);
});
interp.core.interpret_button = (function interp$core$interpret_button(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"Interpret",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return interp.core.interpret_push.call(null);
})], null)], null)], null);
});
interp.core.int_text = (function interp$core$int_text(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea.textbox","textarea.textbox",1676866954),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,interp.core.push_code),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__31049_SHARP_){
return cljs.core.reset_BANG_.call(null,interp.core.push_code,p1__31049_SHARP_.target.value);
})], null)], null)], null);
});
interp.core.divvy_stack = (function interp$core$divvy_stack(stack){
var iter__4529__auto__ = (function interp$core$divvy_stack_$_iter__31050(s__31051){
return (new cljs.core.LazySeq(null,(function (){
var s__31051__$1 = s__31051;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__31051__$1);
if(temp__5735__auto__){
var s__31051__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__31051__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__31051__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__31053 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__31052 = (0);
while(true){
if((i__31052 < size__4528__auto__)){
var items = cljs.core._nth.call(null,c__4527__auto__,i__31052);
cljs.core.chunk_append.call(null,b__31053,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(items)," "].join(''));

var G__31054 = (i__31052 + (1));
i__31052 = G__31054;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31053),interp$core$divvy_stack_$_iter__31050.call(null,cljs.core.chunk_rest.call(null,s__31051__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31053),null);
}
} else {
var items = cljs.core.first.call(null,s__31051__$2);
return cljs.core.cons.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(items)," "].join(''),interp$core$divvy_stack_$_iter__31050.call(null,cljs.core.rest.call(null,s__31051__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__.call(null,stack);
});
interp.core.esp = (function interp$core$esp(stacks){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Exec Stack: ",interp.core.divvy_stack.call(null,new cljs.core.Keyword(null,"exec","exec",1625568743).cljs$core$IFn$_invoke$arity$1(stacks))], null)], null);
});
interp.core.isp = (function interp$core$isp(stacks){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Integer Stack: ",interp.core.divvy_stack.call(null,new cljs.core.Keyword(null,"integer","integer",-604721710).cljs$core$IFn$_invoke$arity$1(stacks))], null)], null);
});
interp.core.ssp = (function interp$core$ssp(stacks){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"String Stack: ",interp.core.divvy_stack.call(null,new cljs.core.Keyword(null,"string","string",-1989541586).cljs$core$IFn$_invoke$arity$1(stacks))], null)], null);
});
interp.core.bsp = (function interp$core$bsp(stacks){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Boolean Stack: ",interp.core.divvy_stack.call(null,new cljs.core.Keyword(null,"boolean","boolean",-1919418404).cljs$core$IFn$_invoke$arity$1(stacks))], null)], null);
});
interp.core.insp = (function interp$core$insp(stacks){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Input Stack: ",interp.core.divvy_stack.call(null,new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(stacks))], null)], null);
});
interp.core.output_component = (function interp$core$output_component(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.outputbox","div.outputbox",2113762080),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),interp.core.esp.call(null,cljs.core.deref.call(null,interp.core.push_state))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),interp.core.isp.call(null,cljs.core.deref.call(null,interp.core.push_state))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),interp.core.ssp.call(null,cljs.core.deref.call(null,interp.core.push_state))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),interp.core.bsp.call(null,cljs.core.deref.call(null,interp.core.push_state))], null)], null);
});
interp.core.home_page = (function interp$core$home_page(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.app","div.app",-99849286),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.main","div.main",-117780813),"Push Interpreter",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [interp.core.int_text], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Current Step: ",((((100000) < (cljs.core.deref.call(null,interp.core.current_step) | (0))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.error","span.error",-283487575),"Error"], null):cljs.core.deref.call(null,interp.core.current_step)),". Step-limit: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,interp.core.step_limit),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__31055_SHARP_){
return cljs.core.reset_BANG_.call(null,interp.core.step_limit,p1__31055_SHARP_.target.value);
})], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [interp.core.load_button], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [interp.core.interpret_one_step_button], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [interp.core.interpret_button], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.error","p.error",-1322813545),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,interp.core.error_output))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [interp.core.output_component], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.instruction-list","div.instruction-list",-800111947),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Instruction List:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.instructions","div.instructions",-526747560),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.keys.call(null,cljs.core.deref.call(null,interp.globals.instruction_table)))], null)], null)], null);
});
interp.core.mount_root = (function interp$core$mount_root(){
return reagent.dom.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [interp.core.home_page], null),document.getElementById("app"));
});
interp.core.init_BANG_ = (function interp$core$init_BANG_(){
return interp.core.mount_root.call(null);
});

//# sourceMappingURL=core.js.map?rel=1593965200109
