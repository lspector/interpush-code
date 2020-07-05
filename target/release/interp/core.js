// Compiled by ClojureScript 1.10.764 {:static-fns true, :optimize-constants true}
goog.provide('interp.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
goog.require('reagent.dom');
goog.require('cljs.tools.reader');
goog.require('cljs.js');
goog.require('interp.globals');
goog.require('interp.utils');
goog.require('interp.state');
interp.core.step_limit = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((100));
interp.core.current_step = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
interp.core.error_output = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
interp.core.test_push_code = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("(:exec_dupitems 1 :boolean_shove  2 :boolean_xor \"three\"\n:integer_gte \"four\" :integer_mod \"five\" :string_concat true false\n:boolean_rot 1 :integer_lte 3 :integer_add \"seven\" :integer_shove \"hello\"\n:string_drop true :integer_rot :boolean_dupitems :string_dupitems :integer_max :string_eq\n:integer_stackdepth :boolean_dup true true :string_take :exec_eq :string_swap :integer_yank \"hello\"\n:integer_fromchar :string_stackdepth :integer_min \"1\" :exec_swap \"hello\" :string_pop :integer_quot :exec_if\n:boolean_invert_first_then_and :boolean_eq :integer_fromboolean :boolean_frominteger :integer_gt :boolean_not\n:integer_duptimes :exec_pop :string_yankdup :boolean_duptimes :string_yank :integer_lt :integer_subtract :string_rot\n:integer_swap :integer_dup :string_includes? :string_duptimes :exec_yank :integer_pop :integer_empty :integer_dec\n:exec_stackdepth :boolean_and :string_length :boolean_invert_second_then_and :string_dup :boolean_yankdup :integer_inc\n:boolean_stackdepth :boolean_pop :integer_mult :exec_yankdup :integer_yankdup :boolean_swap :exec_shove :exec_duptimes\n:boolean_yank :integer_eq :boolean_or 12 :integer_dupitems :string_shove :integer_fromstring :string_= :exec_rot :string_reverse\n:exec_dup )");
interp.core.push_code = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("(:exec_dup (1 2 :integer_add) (:integer_yank 5 6) :integer_gte :exec_if (5 6) :integer_add)");
interp.core.anFrame = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
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
interp.core.opens = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$exec_dup,(1),cljs.core.cst$kw$exec_if,(2)], null);
if((typeof interp !== 'undefined') && (typeof interp.core !== 'undefined') && (typeof interp.core.stacks !== 'undefined')){
} else {
interp.core.stacks = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$exec,null,cljs.core.cst$kw$string,null,cljs.core.cst$kw$integer,null,cljs.core.cst$kw$boolean,null], null), null);
}
interp.core.push_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$exec,cljs.core.List.EMPTY,cljs.core.cst$kw$integer,cljs.core.List.EMPTY,cljs.core.cst$kw$string,cljs.core.List.EMPTY,cljs.core.cst$kw$boolean,cljs.core.List.EMPTY], null));
/**
 * Returns true if the stack is empty.
 */
interp.core.empty_stack_QMARK_ = (function interp$core$empty_stack_QMARK_(state,stack){
return cljs.core.empty_QMARK_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,stack));
});
/**
 * Returns top item on a stack.
 */
interp.core.peek_stack = (function interp$core$peek_stack(state,stack){
var working_stack = cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,stack);
if(cljs.core.empty_QMARK_(working_stack)){
return cljs.core.cst$kw$no_DASH_stack_DASH_item;
} else {
return cljs.core.first(working_stack);
}
});
/**
 * Removes top item of stack.
 */
interp.core.pop_stack = (function interp$core$pop_stack(state,stack){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,stack,cljs.core.rest);
});
/**
 * Pushes item(s) onto stack.
 */
interp.core.push_to_stack = (function interp$core$push_to_stack(state,stack,items){
var items_list = ((cljs.core.coll_QMARK_(items))?items:(new cljs.core.List(null,items,null,(1),null)));
var items_list_no_nil = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__34136_SHARP_){
return (!((p1__34136_SHARP_ == null)));
}),items_list);
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,stack,cljs.core.into,items_list_no_nil);
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
var stacks__$1 = cljs.core.reverse(stacks);
var args = cljs.core.List.EMPTY;
while(true){
if(cljs.core.empty_QMARK_(stacks__$1)){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$state,state__$1,cljs.core.cst$kw$args,args], null);
} else {
var current_stack = cljs.core.first(stacks__$1);
if(interp.core.empty_stack_QMARK_(state__$1,current_stack)){
return cljs.core.cst$kw$not_DASH_enough_DASH_args;
} else {
var G__34137 = interp.core.pop_stack(state__$1,current_stack);
var G__34138 = cljs.core.rest(stacks__$1);
var G__34139 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(args,interp.core.peek_stack(state__$1,current_stack));
state__$1 = G__34137;
stacks__$1 = G__34138;
args = G__34139;
continue;
}
}
break;
}
});
interp.core.make_instruction = (function interp$core$make_instruction(state,function$,arg_stacks,return_stack){
var popped_args = interp.core.get_args_from_stacks(state,arg_stacks);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(popped_args,cljs.core.cst$kw$not_DASH_enough_DASH_args)){
return state;
} else {
var result = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(function$,cljs.core.cst$kw$args.cljs$core$IFn$_invoke$arity$1(popped_args));
var new_state = cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(popped_args);
return interp.core.push_to_stack(new_state,return_stack,result);
}
});
interp.core.print_state = (function interp$core$print_state(state){
var seq__34140 = cljs.core.seq(interp.core.stacks);
var chunk__34141 = null;
var count__34142 = (0);
var i__34143 = (0);
while(true){
if((i__34143 < count__34142)){
var stack = chunk__34141.cljs$core$IIndexed$_nth$arity$2(null,i__34143);
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,stack))?cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,stack):cljs.core.List.EMPTY)], 0));

cljs.core.flush();


var G__34144 = seq__34140;
var G__34145 = chunk__34141;
var G__34146 = count__34142;
var G__34147 = (i__34143 + (1));
seq__34140 = G__34144;
chunk__34141 = G__34145;
count__34142 = G__34146;
i__34143 = G__34147;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__34140);
if(temp__5735__auto__){
var seq__34140__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34140__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__34140__$1);
var G__34148 = cljs.core.chunk_rest(seq__34140__$1);
var G__34149 = c__4556__auto__;
var G__34150 = cljs.core.count(c__4556__auto__);
var G__34151 = (0);
seq__34140 = G__34148;
chunk__34141 = G__34149;
count__34142 = G__34150;
i__34143 = G__34151;
continue;
} else {
var stack = cljs.core.first(seq__34140__$1);
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,stack))?cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,stack):cljs.core.List.EMPTY)], 0));

cljs.core.flush();


var G__34152 = cljs.core.next(seq__34140__$1);
var G__34153 = null;
var G__34154 = (0);
var G__34155 = (0);
seq__34140 = G__34152;
chunk__34141 = G__34153;
count__34142 = G__34154;
i__34143 = G__34155;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(interp.globals.instruction_table,cljs.core.assoc,cljs.core.cst$kw$string__EQ_,cljs.core.with_meta((function (state){
return interp.core.make_instruction(state,cljs.core._EQ_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$string,cljs.core.cst$kw$string], null),cljs.core.cst$kw$boolean);
}),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$stacks,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$string,null,cljs.core.cst$kw$boolean,null], null), null)], null)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(interp.globals.instruction_table,cljs.core.assoc,cljs.core.cst$kw$string_concat,cljs.core.with_meta((function (state){
return interp.core.make_instruction(state,(function (p1__34156_SHARP_,p2__34157_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(p1__34156_SHARP_,p2__34157_SHARP_));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$string,cljs.core.cst$kw$string], null),cljs.core.cst$kw$string);
}),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$stacks,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$string,null], null), null)], null)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(interp.globals.instruction_table,cljs.core.assoc,cljs.core.cst$kw$string_drop,cljs.core.with_meta((function (state){
return interp.core.make_instruction(state,(function (p1__34158_SHARP_,p2__34159_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.drop.cljs$core$IFn$_invoke$arity$2(p1__34158_SHARP_,p2__34159_SHARP_));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$integer,cljs.core.cst$kw$string], null),cljs.core.cst$kw$string);
}),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$stacks,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$string,null,cljs.core.cst$kw$integer,null], null), null)], null)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(interp.globals.instruction_table,cljs.core.assoc,cljs.core.cst$kw$string_includes_QMARK_,cljs.core.with_meta((function (state){
return interp.core.make_instruction(state,clojure.string.includes_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$string,cljs.core.cst$kw$string], null),cljs.core.cst$kw$boolean);
}),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$stacks,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$string,null,cljs.core.cst$kw$boolean,null], null), null)], null)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(interp.globals.instruction_table,cljs.core.assoc,cljs.core.cst$kw$string_length,cljs.core.with_meta((function (state){
return interp.core.make_instruction(state,cljs.core.count,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$string], null),cljs.core.cst$kw$integer);
}),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$stacks,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$string,null,cljs.core.cst$kw$integer,null], null), null)], null)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(interp.globals.instruction_table,cljs.core.assoc,cljs.core.cst$kw$string_reverse,cljs.core.with_meta((function (state){
return interp.core.make_instruction(state,(function (p1__34160_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.reverse(p1__34160_SHARP_));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$string], null),cljs.core.cst$kw$string);
}),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$stacks,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$string,null], null), null)], null)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(interp.globals.instruction_table,cljs.core.assoc,cljs.core.cst$kw$string_take,cljs.core.with_meta((function (state){
return interp.core.make_instruction(state,(function (p1__34161_SHARP_,p2__34162_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.take.cljs$core$IFn$_invoke$arity$2(p1__34161_SHARP_,p2__34162_SHARP_));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$integer,cljs.core.cst$kw$string], null),cljs.core.cst$kw$string);
}),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$stacks,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$string,null,cljs.core.cst$kw$integer,null], null), null)], null)));
interp.core._gt = cljs.core.with_meta((function interp$core$_gt(stack,state){
return interp.core.make_instruction(state,cljs.core._GT_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [stack,stack], null),cljs.core.cst$kw$boolean);
}),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$stacks,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$boolean,null], null), null)], null));
interp.core._gte = cljs.core.with_meta((function interp$core$_gte(stack,state){
return interp.core.make_instruction(state,cljs.core._GT__EQ_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [stack,stack], null),cljs.core.cst$kw$boolean);
}),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$stacks,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$boolean,null], null), null)], null));
interp.core._lt = cljs.core.with_meta((function interp$core$_lt(stack,state){
return interp.core.make_instruction(state,cljs.core._LT_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [stack,stack], null),cljs.core.cst$kw$boolean);
}),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$stacks,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$boolean,null], null), null)], null));
interp.core._lte = cljs.core.with_meta((function interp$core$_lte(stack,state){
return interp.core.make_instruction(state,cljs.core._LT__EQ_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [stack,stack], null),cljs.core.cst$kw$boolean);
}),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$stacks,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$boolean,null], null), null)], null));
interp.core._add = cljs.core.with_meta((function interp$core$_add(stack,state){
return interp.core.make_instruction(state,cljs.core._PLUS_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [stack,stack], null),stack);
}),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$stacks,cljs.core.PersistentHashSet.EMPTY], null));
interp.core._subtract = cljs.core.with_meta((function interp$core$_subtract(stack,state){
return interp.core.make_instruction(state,cljs.core._,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [stack,stack], null),stack);
}),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$stacks,cljs.core.PersistentHashSet.EMPTY], null));
interp.core._mult = cljs.core.with_meta((function interp$core$_mult(stack,state){
return interp.core.make_instruction(state,cljs.core._STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [stack,stack], null),stack);
}),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$stacks,cljs.core.PersistentHashSet.EMPTY], null));
interp.core._quot = cljs.core.with_meta((function interp$core$_quot(stack,state){
return interp.core.make_instruction(state,(function (p1__34164_SHARP_,p2__34163_SHARP_){
if((p2__34163_SHARP_ === (0))){
return (1);
} else {
return cljs.core.quot(p1__34164_SHARP_,p2__34163_SHARP_);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [stack,stack], null),stack);
}),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$stacks,cljs.core.PersistentHashSet.EMPTY], null));
interp.core._mod = cljs.core.with_meta((function interp$core$_mod(stack,state){
return interp.core.make_instruction(state,(function (p1__34166_SHARP_,p2__34165_SHARP_){
if((p2__34165_SHARP_ === (0))){
return (1);
} else {
return cljs.core.mod(p1__34166_SHARP_,p2__34165_SHARP_);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [stack,stack], null),stack);
}),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$stacks,cljs.core.PersistentHashSet.EMPTY], null));
interp.core._max = cljs.core.with_meta((function interp$core$_max(stack,state){
return interp.core.make_instruction(state,cljs.core.max,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [stack,stack], null),stack);
}),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$stacks,cljs.core.PersistentHashSet.EMPTY], null));
interp.core._min = cljs.core.with_meta((function interp$core$_min(stack,state){
return interp.core.make_instruction(state,cljs.core.min,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [stack,stack], null),stack);
}),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$stacks,cljs.core.PersistentHashSet.EMPTY], null));
interp.core._fromboolean = cljs.core.with_meta((function interp$core$_fromboolean(stack,state){
return interp.core.make_instruction(state,(function (p1__34167_SHARP_){
var G__34169 = (cljs.core.truth_(p1__34167_SHARP_)?(1):(0));
var fexpr__34168 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(stack,cljs.core.cst$kw$integer))?cljs.core.int$:cljs.core.float$);
return (fexpr__34168.cljs$core$IFn$_invoke$arity$1 ? fexpr__34168.cljs$core$IFn$_invoke$arity$1(G__34169) : fexpr__34168.call(null,G__34169));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$boolean], null),stack);
}),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$stacks,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$boolean,null], null), null)], null));
interp.core._fromchar = cljs.core.with_meta((function interp$core$_fromchar(stack,state){
return interp.core.make_instruction(state,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(stack,cljs.core.cst$kw$integer))?cljs.core.int$:cljs.core.float$),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$char], null),stack);
}),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$stacks,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$char,null], null), null)], null));
interp.core._fromstring = cljs.core.with_meta((function interp$core$_fromstring(stack,state){
return interp.core.make_instruction(state,(function (p1__34170_SHARP_){
try{var G__34173 = cljs.tools.reader.read_string.cljs$core$IFn$_invoke$arity$1(p1__34170_SHARP_);
var fexpr__34172 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(stack,cljs.core.cst$kw$integer))?cljs.core.int$:cljs.core.float$);
return (fexpr__34172.cljs$core$IFn$_invoke$arity$1 ? fexpr__34172.cljs$core$IFn$_invoke$arity$1(G__34173) : fexpr__34172.call(null,G__34173));
}catch (e34171){if((e34171 instanceof Error)){
var e = e34171;
return null;
} else {
throw e34171;

}
}}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$string], null),stack);
}),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$stacks,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$string,null], null), null)], null));
interp.core._inc = cljs.core.with_meta((function interp$core$_inc(stack,state){
return interp.core.make_instruction(state,cljs.core.inc,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [stack], null),stack);
}),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$stacks,cljs.core.PersistentHashSet.EMPTY], null));
interp.core._dec = cljs.core.with_meta((function interp$core$_dec(stack,state){
return interp.core.make_instruction(state,cljs.core.dec,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [stack], null),stack);
}),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$stacks,cljs.core.PersistentHashSet.EMPTY], null));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(interp.globals.instruction_table,cljs.core.assoc,cljs.core.cst$kw$integer_gt,cljs.core.with_meta(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(interp.core._gt,cljs.core.cst$kw$integer),cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.meta(interp.core._gt),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$stacks], null),(function (p1__21522__21523__auto__){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__21522__21523__auto__,cljs.core.cst$kw$integer);
}))));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(interp.globals.instruction_table,cljs.core.assoc,cljs.core.cst$kw$integer_gte,cljs.core.with_meta(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(interp.core._gte,cljs.core.cst$kw$integer),cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.meta(interp.core._gte),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$stacks], null),(function (p1__21522__21523__auto__){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__21522__21523__auto__,cljs.core.cst$kw$integer);
}))));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(interp.globals.instruction_table,cljs.core.assoc,cljs.core.cst$kw$integer_lt,cljs.core.with_meta(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(interp.core._lt,cljs.core.cst$kw$integer),cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.meta(interp.core._lt),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$stacks], null),(function (p1__21522__21523__auto__){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__21522__21523__auto__,cljs.core.cst$kw$integer);
}))));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(interp.globals.instruction_table,cljs.core.assoc,cljs.core.cst$kw$integer_lte,cljs.core.with_meta(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(interp.core._lte,cljs.core.cst$kw$integer),cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.meta(interp.core._lte),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$stacks], null),(function (p1__21522__21523__auto__){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__21522__21523__auto__,cljs.core.cst$kw$integer);
}))));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(interp.globals.instruction_table,cljs.core.assoc,cljs.core.cst$kw$integer_add,cljs.core.with_meta(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(interp.core._add,cljs.core.cst$kw$integer),cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.meta(interp.core._add),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$stacks], null),(function (p1__21522__21523__auto__){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__21522__21523__auto__,cljs.core.cst$kw$integer);
}))));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(interp.globals.instruction_table,cljs.core.assoc,cljs.core.cst$kw$integer_subtract,cljs.core.with_meta(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(interp.core._subtract,cljs.core.cst$kw$integer),cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.meta(interp.core._subtract),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$stacks], null),(function (p1__21522__21523__auto__){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__21522__21523__auto__,cljs.core.cst$kw$integer);
}))));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(interp.globals.instruction_table,cljs.core.assoc,cljs.core.cst$kw$integer_mult,cljs.core.with_meta(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(interp.core._mult,cljs.core.cst$kw$integer),cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.meta(interp.core._mult),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$stacks], null),(function (p1__21522__21523__auto__){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__21522__21523__auto__,cljs.core.cst$kw$integer);
}))));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(interp.globals.instruction_table,cljs.core.assoc,cljs.core.cst$kw$integer_quot,cljs.core.with_meta(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(interp.core._quot,cljs.core.cst$kw$integer),cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.meta(interp.core._quot),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$stacks], null),(function (p1__21522__21523__auto__){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__21522__21523__auto__,cljs.core.cst$kw$integer);
}))));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(interp.globals.instruction_table,cljs.core.assoc,cljs.core.cst$kw$integer_mod,cljs.core.with_meta(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(interp.core._mod,cljs.core.cst$kw$integer),cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.meta(interp.core._mod),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$stacks], null),(function (p1__21522__21523__auto__){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__21522__21523__auto__,cljs.core.cst$kw$integer);
}))));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(interp.globals.instruction_table,cljs.core.assoc,cljs.core.cst$kw$integer_max,cljs.core.with_meta(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(interp.core._max,cljs.core.cst$kw$integer),cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.meta(interp.core._max),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$stacks], null),(function (p1__21522__21523__auto__){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__21522__21523__auto__,cljs.core.cst$kw$integer);
}))));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(interp.globals.instruction_table,cljs.core.assoc,cljs.core.cst$kw$integer_min,cljs.core.with_meta(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(interp.core._min,cljs.core.cst$kw$integer),cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.meta(interp.core._min),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$stacks], null),(function (p1__21522__21523__auto__){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__21522__21523__auto__,cljs.core.cst$kw$integer);
}))));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(interp.globals.instruction_table,cljs.core.assoc,cljs.core.cst$kw$integer_inc,cljs.core.with_meta(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(interp.core._inc,cljs.core.cst$kw$integer),cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.meta(interp.core._inc),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$stacks], null),(function (p1__21522__21523__auto__){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__21522__21523__auto__,cljs.core.cst$kw$integer);
}))));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(interp.globals.instruction_table,cljs.core.assoc,cljs.core.cst$kw$integer_dec,cljs.core.with_meta(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(interp.core._dec,cljs.core.cst$kw$integer),cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.meta(interp.core._dec),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$stacks], null),(function (p1__21522__21523__auto__){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__21522__21523__auto__,cljs.core.cst$kw$integer);
}))));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(interp.globals.instruction_table,cljs.core.assoc,cljs.core.cst$kw$integer_fromboolean,cljs.core.with_meta(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(interp.core._fromboolean,cljs.core.cst$kw$integer),cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.meta(interp.core._fromboolean),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$stacks], null),(function (p1__21522__21523__auto__){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__21522__21523__auto__,cljs.core.cst$kw$integer);
}))));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(interp.globals.instruction_table,cljs.core.assoc,cljs.core.cst$kw$integer_fromchar,cljs.core.with_meta(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(interp.core._fromchar,cljs.core.cst$kw$integer),cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.meta(interp.core._fromchar),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$stacks], null),(function (p1__21522__21523__auto__){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__21522__21523__auto__,cljs.core.cst$kw$integer);
}))));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(interp.globals.instruction_table,cljs.core.assoc,cljs.core.cst$kw$integer_fromstring,cljs.core.with_meta(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(interp.core._fromstring,cljs.core.cst$kw$integer),cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.meta(interp.core._fromstring),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$stacks], null),(function (p1__21522__21523__auto__){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__21522__21523__auto__,cljs.core.cst$kw$integer);
}))));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(interp.globals.instruction_table,cljs.core.assoc,cljs.core.cst$kw$exec_if,(function (state){
return interp.core.make_instruction(state,(function (p1__34174_SHARP_,p2__34176_SHARP_,p3__34175_SHARP_){
if(cljs.core.truth_(p1__34174_SHARP_)){
return p3__34175_SHARP_;
} else {
return p2__34176_SHARP_;
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$boolean,cljs.core.cst$kw$exec,cljs.core.cst$kw$exec], null),cljs.core.cst$kw$exec);
}));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(interp.globals.instruction_table,cljs.core.assoc,cljs.core.cst$kw$boolean_and,cljs.core.with_meta((function (state){
return interp.core.make_instruction(state,(function (p1__34177_SHARP_,p2__34178_SHARP_){
var and__4115__auto__ = p1__34177_SHARP_;
if(cljs.core.truth_(and__4115__auto__)){
return p2__34178_SHARP_;
} else {
return and__4115__auto__;
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$boolean,cljs.core.cst$kw$boolean], null),cljs.core.cst$kw$boolean);
}),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$stacks,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$boolean,null], null), null)], null)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(interp.globals.instruction_table,cljs.core.assoc,cljs.core.cst$kw$boolean_or,cljs.core.with_meta((function (state){
return interp.core.make_instruction(state,(function (p1__34179_SHARP_,p2__34180_SHARP_){
var or__4126__auto__ = p1__34179_SHARP_;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return p2__34180_SHARP_;
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$boolean,cljs.core.cst$kw$boolean], null),cljs.core.cst$kw$boolean);
}),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$stacks,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$boolean,null], null), null)], null)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(interp.globals.instruction_table,cljs.core.assoc,cljs.core.cst$kw$boolean_not,cljs.core.with_meta((function (state){
return interp.core.make_instruction(state,cljs.core.not,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$boolean], null),cljs.core.cst$kw$boolean);
}),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$stacks,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$boolean,null], null), null)], null)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(interp.globals.instruction_table,cljs.core.assoc,cljs.core.cst$kw$boolean_xor,cljs.core.with_meta((function (state){
return interp.core.make_instruction(state,(function (p1__34181_SHARP_,p2__34182_SHARP_){
var or__4126__auto__ = (function (){var and__4115__auto__ = p1__34181_SHARP_;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(p2__34182_SHARP_);
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if(cljs.core.not(p1__34181_SHARP_)){
return p2__34182_SHARP_;
} else {
return false;
}
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$boolean,cljs.core.cst$kw$boolean], null),cljs.core.cst$kw$boolean);
}),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$stacks,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$boolean,null], null), null)], null)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(interp.globals.instruction_table,cljs.core.assoc,cljs.core.cst$kw$boolean_invert_first_then_and,cljs.core.with_meta((function (state){
return interp.core.make_instruction(state,(function (p1__34183_SHARP_,p2__34184_SHARP_){
var and__4115__auto__ = p1__34183_SHARP_;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(p2__34184_SHARP_);
} else {
return and__4115__auto__;
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$boolean,cljs.core.cst$kw$boolean], null),cljs.core.cst$kw$boolean);
}),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$stacks,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$boolean,null], null), null)], null)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(interp.globals.instruction_table,cljs.core.assoc,cljs.core.cst$kw$boolean_invert_second_then_and,cljs.core.with_meta((function (state){
return interp.core.make_instruction(state,(function (p1__34185_SHARP_,p2__34186_SHARP_){
if(cljs.core.not(p1__34185_SHARP_)){
return p2__34186_SHARP_;
} else {
return false;
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$boolean,cljs.core.cst$kw$boolean], null),cljs.core.cst$kw$boolean);
}),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$stacks,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$boolean,null], null), null)], null)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(interp.globals.instruction_table,cljs.core.assoc,cljs.core.cst$kw$boolean_frominteger,cljs.core.with_meta((function (state){
return interp.core.make_instruction(state,(function (p1__34187_SHARP_){
return (!((p1__34187_SHARP_ === (0))));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$integer], null),cljs.core.cst$kw$boolean);
}),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$stacks,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$integer,null,cljs.core.cst$kw$boolean,null], null), null)], null)));
interp.core._dup = cljs.core.with_meta((function interp$core$_dup(stack,state){
var top_item = interp.state.peek_stack(state,stack);
if(interp.state.empty_stack_QMARK_(state,stack)){
return state;
} else {
return interp.state.push_to_stack(state,stack,top_item);
}
}),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$stacks,cljs.core.PersistentHashSet.EMPTY], null));
interp.core._duptimes = cljs.core.with_meta((function interp$core$_duptimes(stack,state){
if(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(stack,cljs.core.cst$kw$integer)) && (((2) <= cljs.core.count(cljs.core.cst$kw$integer.cljs$core$IFn$_invoke$arity$1(state)))))) || (((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(stack,cljs.core.cst$kw$integer)) && ((!(interp.state.empty_stack_QMARK_(state,cljs.core.cst$kw$integer)))) && ((!(interp.state.empty_stack_QMARK_(state,stack)))))))){
var n = interp.state.peek_stack(state,cljs.core.cst$kw$integer);
var popped_state = interp.state.pop_stack(state,cljs.core.cst$kw$integer);
var top_item = interp.state.peek_stack(popped_state,stack);
var top_item_dup = cljs.core.take.cljs$core$IFn$_invoke$arity$2((n - (1)),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(top_item));
if(((0) < n)){
return interp.state.push_to_stack_multiple(popped_state,stack,top_item_dup);
} else {
return interp.state.pop_stack(popped_state,stack);

}
} else {
return state;
}
}),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$stacks,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$integer,null], null), null)], null));
interp.core._dupitems = cljs.core.with_meta((function interp$core$_dupitems(stack,state){
if(interp.state.empty_stack_QMARK_(state,cljs.core.cst$kw$integer)){
return state;
} else {
var n = interp.state.peek_stack(state,cljs.core.cst$kw$integer);
var popped_state = interp.state.pop_stack(state,cljs.core.cst$kw$integer);
var top_items = cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,cljs.core.get.cljs$core$IFn$_invoke$arity$2(popped_state,stack));
return interp.state.push_to_stack_multiple(popped_state,stack,top_items);
}
}),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$stacks,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$integer,null], null), null)], null));
interp.core._empty = cljs.core.with_meta((function interp$core$_empty(stack,state){
return interp.state.push_to_stack(state,cljs.core.cst$kw$boolean,interp.state.empty_stack_QMARK_(state,stack));
}),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$stacks,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$boolean,null], null), null)], null));
interp.core._eq = cljs.core.with_meta((function interp$core$_eq(stack,state){
return interp.core.make_instruction(state,cljs.core._EQ_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [stack,stack], null),cljs.core.cst$kw$boolean);
}),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$stacks,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$boolean,null], null), null)], null));
interp.core._flush = cljs.core.with_meta((function interp$core$_flush(stack,state){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,stack,cljs.core.List.EMPTY);
}),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$stacks,cljs.core.PersistentHashSet.EMPTY], null));
interp.core._pop = cljs.core.with_meta((function interp$core$_pop(stack,state){
return interp.state.pop_stack(state,stack);
}),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$stacks,cljs.core.PersistentHashSet.EMPTY], null));
interp.core._rot = cljs.core.with_meta((function interp$core$_rot(stack,state){
if(((3) <= cljs.core.count(cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,stack)))){
var top_three = interp.state.peek_stack_multiple(state,stack,(3));
var popped_state = interp.state.pop_stack_multiple(state,stack,(3));
var top_three_rot = cljs.core.take.cljs$core$IFn$_invoke$arity$2((3),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(top_three,cljs.core.last(top_three)));
return interp.state.push_to_stack_multiple(popped_state,stack,top_three_rot);
} else {
return state;
}
}),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$stacks,cljs.core.PersistentHashSet.EMPTY], null));
interp.core._shove = cljs.core.with_meta((function interp$core$_shove(stack,state){
if(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(stack,cljs.core.cst$kw$integer)) && (((2) <= cljs.core.count(cljs.core.cst$kw$integer.cljs$core$IFn$_invoke$arity$1(state)))))) || (((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(stack,cljs.core.cst$kw$integer)) && ((!(interp.state.empty_stack_QMARK_(state,cljs.core.cst$kw$integer)))) && ((!(interp.state.empty_stack_QMARK_(state,stack)))))))){
var index_raw = interp.state.peek_stack(state,cljs.core.cst$kw$integer);
var popped_state = interp.state.pop_stack(state,cljs.core.cst$kw$integer);
var top_item = interp.state.peek_stack(popped_state,stack);
var popped_state__$1 = interp.state.pop_stack(popped_state,stack);
var index = (function (){var x__4214__auto__ = (0);
var y__4215__auto__ = (function (){var x__4217__auto__ = index_raw;
var y__4218__auto__ = (cljs.core.count(cljs.core.get.cljs$core$IFn$_invoke$arity$2(popped_state__$1,stack)) - (1));
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
})();
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})();
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(popped_state__$1,stack,(function (p1__34188_SHARP_){
return interp.utils.not_lazy(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.take.cljs$core$IFn$_invoke$arity$2(index,p1__34188_SHARP_),(new cljs.core.List(null,top_item,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.drop.cljs$core$IFn$_invoke$arity$2(index,p1__34188_SHARP_)], 0)));
}));
} else {
return state;
}
}),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$stacks,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$integer,null], null), null)], null));
interp.core._stackdepth = cljs.core.with_meta((function interp$core$_stackdepth(stack,state){
var stack_depth = cljs.core.count(cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,stack));
return interp.state.push_to_stack(state,cljs.core.cst$kw$integer,stack_depth);
}),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$stacks,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$integer,null], null), null)], null));
interp.core._swap = cljs.core.with_meta((function interp$core$_swap(stack,state){
if(((2) <= cljs.core.count(cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,stack)))){
var top_two = interp.state.peek_stack_multiple(state,stack,(2));
var popped_state = interp.state.pop_stack_multiple(state,stack,(2));
return interp.state.push_to_stack_multiple(popped_state,stack,cljs.core.reverse(top_two));
} else {
return state;
}
}),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$stacks,cljs.core.PersistentHashSet.EMPTY], null));
interp.core._yank = cljs.core.with_meta((function interp$core$_yank(stack,state){
if(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(stack,cljs.core.cst$kw$integer)) && (((2) <= cljs.core.count(cljs.core.cst$kw$integer.cljs$core$IFn$_invoke$arity$1(state)))))) || (((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(stack,cljs.core.cst$kw$integer)) && ((!(interp.state.empty_stack_QMARK_(state,cljs.core.cst$kw$integer)))) && ((!(interp.state.empty_stack_QMARK_(state,stack)))))))){
var index_raw = interp.state.peek_stack(state,cljs.core.cst$kw$integer);
var popped_state = interp.state.pop_stack(state,cljs.core.cst$kw$integer);
var index = (function (){var x__4214__auto__ = (0);
var y__4215__auto__ = (function (){var x__4217__auto__ = index_raw;
var y__4218__auto__ = (cljs.core.count(cljs.core.get.cljs$core$IFn$_invoke$arity$2(popped_state,stack)) - (1));
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
})();
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})();
var indexed_item = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(popped_state,stack),index);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(popped_state,stack,(function (p1__34189_SHARP_){
return interp.utils.not_lazy(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,indexed_item,null,(1),null)),cljs.core.take.cljs$core$IFn$_invoke$arity$2(index,p1__34189_SHARP_),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.rest(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(index,p1__34189_SHARP_))], 0)));
}));
} else {
return state;
}
}),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$stacks,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$integer,null], null), null)], null));
interp.core._yankdup = cljs.core.with_meta((function interp$core$_yankdup(stack,state){
if(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(stack,cljs.core.cst$kw$integer)) && (((2) <= cljs.core.count(cljs.core.cst$kw$integer.cljs$core$IFn$_invoke$arity$1(state)))))) || (((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(stack,cljs.core.cst$kw$integer)) && ((!(interp.state.empty_stack_QMARK_(state,cljs.core.cst$kw$integer)))) && ((!(interp.state.empty_stack_QMARK_(state,stack)))))))){
var index_raw = interp.state.peek_stack(state,cljs.core.cst$kw$integer);
var popped_state = interp.state.pop_stack(state,cljs.core.cst$kw$integer);
var index = (function (){var x__4214__auto__ = (0);
var y__4215__auto__ = (function (){var x__4217__auto__ = index_raw;
var y__4218__auto__ = (cljs.core.count(cljs.core.get.cljs$core$IFn$_invoke$arity$2(popped_state,stack)) - (1));
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
})();
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})();
var indexed_item = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(popped_state,stack),index);
return interp.state.push_to_stack(popped_state,stack,indexed_item);
} else {
return state;
}
}),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$stacks,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$integer,null], null), null)], null));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(interp.globals.instruction_table,cljs.core.assoc,cljs.core.cst$kw$boolean_dup,cljs.core.with_meta(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(interp.core._dup,cljs.core.cst$kw$boolean),cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.meta(interp.core._dup),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$stacks], null),(function (p1__21522__21523__auto__){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__21522__21523__auto__,cljs.core.cst$kw$boolean);
}))));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(interp.globals.instruction_table,cljs.core.assoc,cljs.core.cst$kw$boolean_duptimes,cljs.core.with_meta(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(interp.core._duptimes,cljs.core.cst$kw$boolean),cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.meta(interp.core._duptimes),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$stacks], null),(function (p1__21522__21523__auto__){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__21522__21523__auto__,cljs.core.cst$kw$boolean);
}))));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(interp.globals.instruction_table,cljs.core.assoc,cljs.core.cst$kw$boolean_dupitems,cljs.core.with_meta(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(interp.core._dupitems,cljs.core.cst$kw$boolean),cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.meta(interp.core._dupitems),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$stacks], null),(function (p1__21522__21523__auto__){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__21522__21523__auto__,cljs.core.cst$kw$boolean);
}))));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(interp.globals.instruction_table,cljs.core.assoc,cljs.core.cst$kw$boolean_empty,cljs.core.with_meta(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(interp.core._empty,cljs.core.cst$kw$boolean),cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.meta(interp.core._empty),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$stacks], null),(function (p1__21522__21523__auto__){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__21522__21523__auto__,cljs.core.cst$kw$boolean);
}))));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(interp.globals.instruction_table,cljs.core.assoc,cljs.core.cst$kw$boolean_eq,cljs.core.with_meta(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(interp.core._eq,cljs.core.cst$kw$boolean),cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.meta(interp.core._eq),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$stacks], null),(function (p1__21522__21523__auto__){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__21522__21523__auto__,cljs.core.cst$kw$boolean);
}))));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(interp.globals.instruction_table,cljs.core.assoc,cljs.core.cst$kw$boolean_flush,cljs.core.with_meta(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(interp.core._flush,cljs.core.cst$kw$boolean),cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.meta(interp.core._flush),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$stacks], null),(function (p1__21522__21523__auto__){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__21522__21523__auto__,cljs.core.cst$kw$boolean);
}))));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(interp.globals.instruction_table,cljs.core.assoc,cljs.core.cst$kw$boolean_pop,cljs.core.with_meta(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(interp.core._pop,cljs.core.cst$kw$boolean),cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.meta(interp.core._pop),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$stacks], null),(function (p1__21522__21523__auto__){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__21522__21523__auto__,cljs.core.cst$kw$boolean);
}))));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(interp.globals.instruction_table,cljs.core.assoc,cljs.core.cst$kw$boolean_rot,cljs.core.with_meta(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(interp.core._rot,cljs.core.cst$kw$boolean),cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.meta(interp.core._rot),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$stacks], null),(function (p1__21522__21523__auto__){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__21522__21523__auto__,cljs.core.cst$kw$boolean);
}))));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(interp.globals.instruction_table,cljs.core.assoc,cljs.core.cst$kw$boolean_shove,cljs.core.with_meta(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(interp.core._shove,cljs.core.cst$kw$boolean),cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.meta(interp.core._shove),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$stacks], null),(function (p1__21522__21523__auto__){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__21522__21523__auto__,cljs.core.cst$kw$boolean);
}))));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(interp.globals.instruction_table,cljs.core.assoc,cljs.core.cst$kw$boolean_stackdepth,cljs.core.with_meta(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(interp.core._stackdepth,cljs.core.cst$kw$boolean),cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.meta(interp.core._stackdepth),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$stacks], null),(function (p1__21522__21523__auto__){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__21522__21523__auto__,cljs.core.cst$kw$boolean);
}))));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(interp.globals.instruction_table,cljs.core.assoc,cljs.core.cst$kw$boolean_swap,cljs.core.with_meta(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(interp.core._swap,cljs.core.cst$kw$boolean),cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.meta(interp.core._swap),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$stacks], null),(function (p1__21522__21523__auto__){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__21522__21523__auto__,cljs.core.cst$kw$boolean);
}))));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(interp.globals.instruction_table,cljs.core.assoc,cljs.core.cst$kw$boolean_yank,cljs.core.with_meta(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(interp.core._yank,cljs.core.cst$kw$boolean),cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.meta(interp.core._yank),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$stacks], null),(function (p1__21522__21523__auto__){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__21522__21523__auto__,cljs.core.cst$kw$boolean);
}))));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(interp.globals.instruction_table,cljs.core.assoc,cljs.core.cst$kw$boolean_yankdup,cljs.core.with_meta(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(interp.core._yankdup,cljs.core.cst$kw$boolean),cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.meta(interp.core._yankdup),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$stacks], null),(function (p1__21522__21523__auto__){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__21522__21523__auto__,cljs.core.cst$kw$boolean);
}))));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(interp.globals.instruction_table,cljs.core.assoc,cljs.core.cst$kw$exec_dup,cljs.core.with_meta(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(interp.core._dup,cljs.core.cst$kw$exec),cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.meta(interp.core._dup),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$stacks], null),(function (p1__21522__21523__auto__){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__21522__21523__auto__,cljs.core.cst$kw$exec);
}))));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(interp.globals.instruction_table,cljs.core.assoc,cljs.core.cst$kw$exec_duptimes,cljs.core.with_meta(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(interp.core._duptimes,cljs.core.cst$kw$exec),cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.meta(interp.core._duptimes),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$stacks], null),(function (p1__21522__21523__auto__){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__21522__21523__auto__,cljs.core.cst$kw$exec);
}))));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(interp.globals.instruction_table,cljs.core.assoc,cljs.core.cst$kw$exec_dupitems,cljs.core.with_meta(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(interp.core._dupitems,cljs.core.cst$kw$exec),cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.meta(interp.core._dupitems),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$stacks], null),(function (p1__21522__21523__auto__){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__21522__21523__auto__,cljs.core.cst$kw$exec);
}))));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(interp.globals.instruction_table,cljs.core.assoc,cljs.core.cst$kw$exec_empty,cljs.core.with_meta(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(interp.core._empty,cljs.core.cst$kw$exec),cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.meta(interp.core._empty),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$stacks], null),(function (p1__21522__21523__auto__){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__21522__21523__auto__,cljs.core.cst$kw$exec);
}))));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(interp.globals.instruction_table,cljs.core.assoc,cljs.core.cst$kw$exec_eq,cljs.core.with_meta(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(interp.core._eq,cljs.core.cst$kw$exec),cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.meta(interp.core._eq),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$stacks], null),(function (p1__21522__21523__auto__){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__21522__21523__auto__,cljs.core.cst$kw$exec);
}))));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(interp.globals.instruction_table,cljs.core.assoc,cljs.core.cst$kw$exec_flush,cljs.core.with_meta(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(interp.core._flush,cljs.core.cst$kw$exec),cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.meta(interp.core._flush),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$stacks], null),(function (p1__21522__21523__auto__){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__21522__21523__auto__,cljs.core.cst$kw$exec);
}))));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(interp.globals.instruction_table,cljs.core.assoc,cljs.core.cst$kw$exec_pop,cljs.core.with_meta(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(interp.core._pop,cljs.core.cst$kw$exec),cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.meta(interp.core._pop),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$stacks], null),(function (p1__21522__21523__auto__){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__21522__21523__auto__,cljs.core.cst$kw$exec);
}))));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(interp.globals.instruction_table,cljs.core.assoc,cljs.core.cst$kw$exec_rot,cljs.core.with_meta(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(interp.core._rot,cljs.core.cst$kw$exec),cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.meta(interp.core._rot),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$stacks], null),(function (p1__21522__21523__auto__){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__21522__21523__auto__,cljs.core.cst$kw$exec);
}))));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(interp.globals.instruction_table,cljs.core.assoc,cljs.core.cst$kw$exec_shove,cljs.core.with_meta(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(interp.core._shove,cljs.core.cst$kw$exec),cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.meta(interp.core._shove),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$stacks], null),(function (p1__21522__21523__auto__){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__21522__21523__auto__,cljs.core.cst$kw$exec);
}))));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(interp.globals.instruction_table,cljs.core.assoc,cljs.core.cst$kw$exec_stackdepth,cljs.core.with_meta(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(interp.core._stackdepth,cljs.core.cst$kw$exec),cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.meta(interp.core._stackdepth),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$stacks], null),(function (p1__21522__21523__auto__){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__21522__21523__auto__,cljs.core.cst$kw$exec);
}))));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(interp.globals.instruction_table,cljs.core.assoc,cljs.core.cst$kw$exec_swap,cljs.core.with_meta(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(interp.core._swap,cljs.core.cst$kw$exec),cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.meta(interp.core._swap),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$stacks], null),(function (p1__21522__21523__auto__){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__21522__21523__auto__,cljs.core.cst$kw$exec);
}))));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(interp.globals.instruction_table,cljs.core.assoc,cljs.core.cst$kw$exec_yank,cljs.core.with_meta(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(interp.core._yank,cljs.core.cst$kw$exec),cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.meta(interp.core._yank),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$stacks], null),(function (p1__21522__21523__auto__){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__21522__21523__auto__,cljs.core.cst$kw$exec);
}))));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(interp.globals.instruction_table,cljs.core.assoc,cljs.core.cst$kw$exec_yankdup,cljs.core.with_meta(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(interp.core._yankdup,cljs.core.cst$kw$exec),cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.meta(interp.core._yankdup),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$stacks], null),(function (p1__21522__21523__auto__){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__21522__21523__auto__,cljs.core.cst$kw$exec);
}))));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(interp.globals.instruction_table,cljs.core.assoc,cljs.core.cst$kw$integer_dup,cljs.core.with_meta(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(interp.core._dup,cljs.core.cst$kw$integer),cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.meta(interp.core._dup),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$stacks], null),(function (p1__21522__21523__auto__){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__21522__21523__auto__,cljs.core.cst$kw$integer);
}))));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(interp.globals.instruction_table,cljs.core.assoc,cljs.core.cst$kw$integer_duptimes,cljs.core.with_meta(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(interp.core._duptimes,cljs.core.cst$kw$integer),cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.meta(interp.core._duptimes),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$stacks], null),(function (p1__21522__21523__auto__){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__21522__21523__auto__,cljs.core.cst$kw$integer);
}))));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(interp.globals.instruction_table,cljs.core.assoc,cljs.core.cst$kw$integer_dupitems,cljs.core.with_meta(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(interp.core._dupitems,cljs.core.cst$kw$integer),cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.meta(interp.core._dupitems),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$stacks], null),(function (p1__21522__21523__auto__){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__21522__21523__auto__,cljs.core.cst$kw$integer);
}))));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(interp.globals.instruction_table,cljs.core.assoc,cljs.core.cst$kw$integer_empty,cljs.core.with_meta(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(interp.core._empty,cljs.core.cst$kw$integer),cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.meta(interp.core._empty),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$stacks], null),(function (p1__21522__21523__auto__){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__21522__21523__auto__,cljs.core.cst$kw$integer);
}))));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(interp.globals.instruction_table,cljs.core.assoc,cljs.core.cst$kw$integer_eq,cljs.core.with_meta(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(interp.core._eq,cljs.core.cst$kw$integer),cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.meta(interp.core._eq),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$stacks], null),(function (p1__21522__21523__auto__){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__21522__21523__auto__,cljs.core.cst$kw$integer);
}))));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(interp.globals.instruction_table,cljs.core.assoc,cljs.core.cst$kw$integer_flush,cljs.core.with_meta(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(interp.core._flush,cljs.core.cst$kw$integer),cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.meta(interp.core._flush),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$stacks], null),(function (p1__21522__21523__auto__){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__21522__21523__auto__,cljs.core.cst$kw$integer);
}))));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(interp.globals.instruction_table,cljs.core.assoc,cljs.core.cst$kw$integer_pop,cljs.core.with_meta(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(interp.core._pop,cljs.core.cst$kw$integer),cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.meta(interp.core._pop),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$stacks], null),(function (p1__21522__21523__auto__){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__21522__21523__auto__,cljs.core.cst$kw$integer);
}))));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(interp.globals.instruction_table,cljs.core.assoc,cljs.core.cst$kw$integer_rot,cljs.core.with_meta(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(interp.core._rot,cljs.core.cst$kw$integer),cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.meta(interp.core._rot),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$stacks], null),(function (p1__21522__21523__auto__){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__21522__21523__auto__,cljs.core.cst$kw$integer);
}))));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(interp.globals.instruction_table,cljs.core.assoc,cljs.core.cst$kw$integer_shove,cljs.core.with_meta(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(interp.core._shove,cljs.core.cst$kw$integer),cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.meta(interp.core._shove),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$stacks], null),(function (p1__21522__21523__auto__){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__21522__21523__auto__,cljs.core.cst$kw$integer);
}))));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(interp.globals.instruction_table,cljs.core.assoc,cljs.core.cst$kw$integer_stackdepth,cljs.core.with_meta(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(interp.core._stackdepth,cljs.core.cst$kw$integer),cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.meta(interp.core._stackdepth),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$stacks], null),(function (p1__21522__21523__auto__){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__21522__21523__auto__,cljs.core.cst$kw$integer);
}))));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(interp.globals.instruction_table,cljs.core.assoc,cljs.core.cst$kw$integer_swap,cljs.core.with_meta(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(interp.core._swap,cljs.core.cst$kw$integer),cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.meta(interp.core._swap),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$stacks], null),(function (p1__21522__21523__auto__){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__21522__21523__auto__,cljs.core.cst$kw$integer);
}))));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(interp.globals.instruction_table,cljs.core.assoc,cljs.core.cst$kw$integer_yank,cljs.core.with_meta(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(interp.core._yank,cljs.core.cst$kw$integer),cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.meta(interp.core._yank),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$stacks], null),(function (p1__21522__21523__auto__){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__21522__21523__auto__,cljs.core.cst$kw$integer);
}))));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(interp.globals.instruction_table,cljs.core.assoc,cljs.core.cst$kw$integer_yankdup,cljs.core.with_meta(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(interp.core._yankdup,cljs.core.cst$kw$integer),cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.meta(interp.core._yankdup),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$stacks], null),(function (p1__21522__21523__auto__){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__21522__21523__auto__,cljs.core.cst$kw$integer);
}))));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(interp.globals.instruction_table,cljs.core.assoc,cljs.core.cst$kw$string_dup,cljs.core.with_meta(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(interp.core._dup,cljs.core.cst$kw$string),cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.meta(interp.core._dup),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$stacks], null),(function (p1__21522__21523__auto__){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__21522__21523__auto__,cljs.core.cst$kw$string);
}))));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(interp.globals.instruction_table,cljs.core.assoc,cljs.core.cst$kw$string_duptimes,cljs.core.with_meta(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(interp.core._duptimes,cljs.core.cst$kw$string),cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.meta(interp.core._duptimes),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$stacks], null),(function (p1__21522__21523__auto__){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__21522__21523__auto__,cljs.core.cst$kw$string);
}))));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(interp.globals.instruction_table,cljs.core.assoc,cljs.core.cst$kw$string_dupitems,cljs.core.with_meta(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(interp.core._dupitems,cljs.core.cst$kw$string),cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.meta(interp.core._dupitems),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$stacks], null),(function (p1__21522__21523__auto__){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__21522__21523__auto__,cljs.core.cst$kw$string);
}))));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(interp.globals.instruction_table,cljs.core.assoc,cljs.core.cst$kw$string_empty,cljs.core.with_meta(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(interp.core._empty,cljs.core.cst$kw$string),cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.meta(interp.core._empty),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$stacks], null),(function (p1__21522__21523__auto__){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__21522__21523__auto__,cljs.core.cst$kw$string);
}))));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(interp.globals.instruction_table,cljs.core.assoc,cljs.core.cst$kw$string_eq,cljs.core.with_meta(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(interp.core._eq,cljs.core.cst$kw$string),cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.meta(interp.core._eq),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$stacks], null),(function (p1__21522__21523__auto__){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__21522__21523__auto__,cljs.core.cst$kw$string);
}))));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(interp.globals.instruction_table,cljs.core.assoc,cljs.core.cst$kw$string_flush,cljs.core.with_meta(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(interp.core._flush,cljs.core.cst$kw$string),cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.meta(interp.core._flush),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$stacks], null),(function (p1__21522__21523__auto__){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__21522__21523__auto__,cljs.core.cst$kw$string);
}))));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(interp.globals.instruction_table,cljs.core.assoc,cljs.core.cst$kw$string_pop,cljs.core.with_meta(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(interp.core._pop,cljs.core.cst$kw$string),cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.meta(interp.core._pop),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$stacks], null),(function (p1__21522__21523__auto__){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__21522__21523__auto__,cljs.core.cst$kw$string);
}))));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(interp.globals.instruction_table,cljs.core.assoc,cljs.core.cst$kw$string_rot,cljs.core.with_meta(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(interp.core._rot,cljs.core.cst$kw$string),cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.meta(interp.core._rot),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$stacks], null),(function (p1__21522__21523__auto__){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__21522__21523__auto__,cljs.core.cst$kw$string);
}))));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(interp.globals.instruction_table,cljs.core.assoc,cljs.core.cst$kw$string_shove,cljs.core.with_meta(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(interp.core._shove,cljs.core.cst$kw$string),cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.meta(interp.core._shove),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$stacks], null),(function (p1__21522__21523__auto__){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__21522__21523__auto__,cljs.core.cst$kw$string);
}))));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(interp.globals.instruction_table,cljs.core.assoc,cljs.core.cst$kw$string_stackdepth,cljs.core.with_meta(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(interp.core._stackdepth,cljs.core.cst$kw$string),cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.meta(interp.core._stackdepth),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$stacks], null),(function (p1__21522__21523__auto__){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__21522__21523__auto__,cljs.core.cst$kw$string);
}))));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(interp.globals.instruction_table,cljs.core.assoc,cljs.core.cst$kw$string_swap,cljs.core.with_meta(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(interp.core._swap,cljs.core.cst$kw$string),cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.meta(interp.core._swap),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$stacks], null),(function (p1__21522__21523__auto__){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__21522__21523__auto__,cljs.core.cst$kw$string);
}))));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(interp.globals.instruction_table,cljs.core.assoc,cljs.core.cst$kw$string_yank,cljs.core.with_meta(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(interp.core._yank,cljs.core.cst$kw$string),cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.meta(interp.core._yank),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$stacks], null),(function (p1__21522__21523__auto__){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__21522__21523__auto__,cljs.core.cst$kw$string);
}))));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(interp.globals.instruction_table,cljs.core.assoc,cljs.core.cst$kw$string_yankdup,cljs.core.with_meta(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(interp.core._yankdup,cljs.core.cst$kw$string),cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.meta(interp.core._yankdup),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$stacks], null),(function (p1__21522__21523__auto__){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__21522__21523__auto__,cljs.core.cst$kw$string);
}))));
/**
 * Takes a Push state and executes the next instruction on the exec stack.
 */
interp.core.interpret_one_step = (function interp$core$interpret_one_step(state){
var popped_state_34192 = interp.core.pop_stack(state,cljs.core.cst$kw$exec);
var first_instruction_raw_34193 = cljs.core.first(cljs.core.cst$kw$exec.cljs$core$IFn$_invoke$arity$1(state));
var first_instruction_34194 = (((first_instruction_raw_34193 == null))?null:(((first_instruction_raw_34193 instanceof cljs.core.Keyword))?first_instruction_raw_34193.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(interp.globals.instruction_table)):first_instruction_raw_34193
));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.type(first_instruction_34194),first_instruction_34194], 0));

if(cljs.core.fn_QMARK_(first_instruction_34194)){
cljs.core.reset_BANG_(interp.core.push_state,(first_instruction_34194.cljs$core$IFn$_invoke$arity$1 ? first_instruction_34194.cljs$core$IFn$_invoke$arity$1(popped_state_34192) : first_instruction_34194.call(null,popped_state_34192)));
} else {
if(typeof first_instruction_34194 === 'number'){
cljs.core.reset_BANG_(interp.core.push_state,interp.core.push_to_stack(popped_state_34192,cljs.core.cst$kw$integer,(first_instruction_34194 | (0))));
} else {
if(cljs.core.integer_QMARK_(first_instruction_34194)){
cljs.core.reset_BANG_(interp.core.push_state,interp.core.push_to_stack(popped_state_34192,cljs.core.cst$kw$integer,first_instruction_34194));
} else {
if(typeof first_instruction_34194 === 'string'){
cljs.core.reset_BANG_(interp.core.push_state,interp.core.push_to_stack(popped_state_34192,cljs.core.cst$kw$string,first_instruction_34194));
} else {
if(cljs.core.seq_QMARK_(first_instruction_34194)){
cljs.core.reset_BANG_(interp.core.push_state,cljs.core.update.cljs$core$IFn$_invoke$arity$4(popped_state_34192,cljs.core.cst$kw$exec,(function (p1__34191_SHARP_,p2__34190_SHARP_){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(p2__34190_SHARP_,p1__34191_SHARP_);
}),first_instruction_34194));
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(first_instruction_34194,true)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(first_instruction_34194,false)))){
cljs.core.reset_BANG_(interp.core.push_state,interp.core.push_to_stack(popped_state_34192,cljs.core.cst$kw$boolean,first_instruction_34194));
} else {
cljs.core.reset_BANG_(interp.core.error_output,["Unrecognized Push instruction in program: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(first_instruction_raw_34193)].join(''));

cljs.core.reset_BANG_(interp.core.current_step,(1000000));

}
}
}
}
}
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(interp.core.current_step,cljs.core.inc);
});
interp.core.interpret_push = (function interp$core$interpret_push(){
var sl = (cljs.core.deref(interp.core.step_limit) | (0));
var state = cljs.core.deref(interp.core.push_state);
if((((sl <= (cljs.core.deref(interp.core.current_step) | (0)))) || (cljs.core.empty_QMARK_(cljs.core.cst$kw$exec.cljs$core$IFn$_invoke$arity$1(state))))){
return cljs.core.List.EMPTY;
} else {
interp.core.interpret_one_step(cljs.core.deref(interp.core.push_state));

return cljs.core.reset_BANG_(interp.core.anFrame,window.requestAnimationFrame(interp.core.interpret_push));
}
});
interp.core.output_stacks = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("Test Output");
interp.core.load_state = (function interp$core$load_state(push_code){
cljs.core.reset_BANG_(interp.core.current_step,(0));

cljs.core.reset_BANG_(interp.core.error_output,"");

var stacks = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$exec,(new cljs.core.List(null,push_code,null,(1),null)),cljs.core.cst$kw$integer,cljs.core.List.EMPTY,cljs.core.cst$kw$string,cljs.core.List.EMPTY,cljs.core.cst$kw$boolean,cljs.core.List.EMPTY], null);
return cljs.core.reset_BANG_(interp.core.push_state,stacks);
});
interp.core.load_button = (function interp$core$load_button(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"button",cljs.core.cst$kw$value,"Load Push Code",cljs.core.cst$kw$on_DASH_click,(function (){
return interp.core.load_state(cljs.tools.reader.read_string.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(interp.core.push_code)));
})], null)], null)], null);
});
interp.core.interpret_one_step_button = (function interp$core$interpret_one_step_button(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"button",cljs.core.cst$kw$value,"Interpret One Step",cljs.core.cst$kw$on_DASH_click,(function (){
return interp.core.interpret_one_step(cljs.core.deref(interp.core.push_state));
})], null)], null)], null);
});
interp.core.interpret_button = (function interp$core$interpret_button(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"button",cljs.core.cst$kw$value,"Interpret",cljs.core.cst$kw$on_DASH_click,(function (){
return interp.core.interpret_push();
})], null)], null)], null);
});
interp.core.int_text = (function interp$core$int_text(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$textarea$textbox,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,cljs.core.deref(interp.core.push_code),cljs.core.cst$kw$on_DASH_change,(function (p1__34195_SHARP_){
return cljs.core.reset_BANG_(interp.core.push_code,p1__34195_SHARP_.target.value);
})], null)], null)], null);
});
interp.core.divvy_stack = (function interp$core$divvy_stack(stack){
var iter__4529__auto__ = (function interp$core$divvy_stack_$_iter__34196(s__34197){
return (new cljs.core.LazySeq(null,(function (){
var s__34197__$1 = s__34197;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__34197__$1);
if(temp__5735__auto__){
var s__34197__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__34197__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__34197__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__34199 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__34198 = (0);
while(true){
if((i__34198 < size__4528__auto__)){
var items = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__34198);
cljs.core.chunk_append(b__34199,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(items)," "].join(''));

var G__34200 = (i__34198 + (1));
i__34198 = G__34200;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__34199),interp$core$divvy_stack_$_iter__34196(cljs.core.chunk_rest(s__34197__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__34199),null);
}
} else {
var items = cljs.core.first(s__34197__$2);
return cljs.core.cons([cljs.core.str.cljs$core$IFn$_invoke$arity$1(items)," "].join(''),interp$core$divvy_stack_$_iter__34196(cljs.core.rest(s__34197__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(stack);
});
interp.core.esp = (function interp$core$esp(stacks){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"Exec Stack: ",interp.core.divvy_stack(cljs.core.cst$kw$exec.cljs$core$IFn$_invoke$arity$1(stacks))], null)], null);
});
interp.core.isp = (function interp$core$isp(stacks){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"Integer Stack: ",interp.core.divvy_stack(cljs.core.cst$kw$integer.cljs$core$IFn$_invoke$arity$1(stacks))], null)], null);
});
interp.core.ssp = (function interp$core$ssp(stacks){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"String Stack: ",interp.core.divvy_stack(cljs.core.cst$kw$string.cljs$core$IFn$_invoke$arity$1(stacks))], null)], null);
});
interp.core.bsp = (function interp$core$bsp(stacks){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"Boolean Stack: ",interp.core.divvy_stack(cljs.core.cst$kw$boolean.cljs$core$IFn$_invoke$arity$1(stacks))], null)], null);
});
interp.core.insp = (function interp$core$insp(stacks){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"Input Stack: ",interp.core.divvy_stack(cljs.core.cst$kw$input.cljs$core$IFn$_invoke$arity$1(stacks))], null)], null);
});
interp.core.output_component = (function interp$core$output_component(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$outputbox,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,interp.core.esp(cljs.core.deref(interp.core.push_state))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,interp.core.isp(cljs.core.deref(interp.core.push_state))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,interp.core.ssp(cljs.core.deref(interp.core.push_state))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,interp.core.bsp(cljs.core.deref(interp.core.push_state))], null)], null);
});
interp.core.home_page = (function interp$core$home_page(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$app,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$main,"Push Interpreter",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [interp.core.int_text], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,"Current Step: ",((((100000) < (cljs.core.deref(interp.core.current_step) | (0))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$error,"Error"], null):cljs.core.deref(interp.core.current_step)),". Step-limit: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"number",cljs.core.cst$kw$value,cljs.core.deref(interp.core.step_limit),cljs.core.cst$kw$on_DASH_change,(function (p1__34201_SHARP_){
return cljs.core.reset_BANG_(interp.core.step_limit,p1__34201_SHARP_.target.value);
})], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [interp.core.load_button], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [interp.core.interpret_one_step_button], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [interp.core.interpret_button], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p$error,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(interp.core.error_output))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [interp.core.output_component], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$instruction_DASH_list,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"Instruction List:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$instructions,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.keys(cljs.core.deref(interp.globals.instruction_table)))], null)], null)], null);
});
interp.core.mount_root = (function interp$core$mount_root(){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [interp.core.home_page], null),document.getElementById("app"));
});
interp.core.init_BANG_ = (function interp$core$init_BANG_(){
return interp.core.mount_root();
});
