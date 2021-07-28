// Compiled by ClojureScript 1.10.764 {}
goog.provide('propeller.push.instructions.polymorphic');
goog.require('cljs.core');
goog.require('propeller.utils');
goog.require('propeller.push.state');
goog.require('propeller.push.utils.helpers');
goog.require('propeller.push.utils.globals');
propeller.push.instructions.polymorphic._dup = cljs.core.with_meta((function propeller$push$instructions$polymorphic$_dup(stack,state){
var top_item = propeller.push.state.peek_stack.call(null,state,stack);
if(propeller.push.state.empty_stack_QMARK_.call(null,state,stack)){
return state;
} else {
return propeller.push.state.push_to_stack.call(null,state,stack,top_item);
}
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"name","name",1843675177),"_dup"], null));
propeller.push.instructions.polymorphic._dup_times = cljs.core.with_meta((function propeller$push$instructions$polymorphic$_dup_times(stack,state){
if(((((cljs.core._EQ_.call(null,stack,new cljs.core.Keyword(null,"integer","integer",-604721710))) && (((2) <= cljs.core.count.call(null,new cljs.core.Keyword(null,"integer","integer",-604721710).cljs$core$IFn$_invoke$arity$1(state)))))) || (((cljs.core.not_EQ_.call(null,stack,new cljs.core.Keyword(null,"integer","integer",-604721710))) && ((!(propeller.push.state.empty_stack_QMARK_.call(null,state,new cljs.core.Keyword(null,"integer","integer",-604721710))))) && ((!(propeller.push.state.empty_stack_QMARK_.call(null,state,stack)))))))){
var n = (function (){var x__4217__auto__ = propeller.push.state.peek_stack.call(null,state,new cljs.core.Keyword(null,"integer","integer",-604721710));
var y__4218__auto__ = ((propeller.push.utils.globals.max_stack_items - propeller.push.state.stack_size.call(null,state,stack)) + (1));
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
})();
var popped_state = propeller.push.state.pop_stack.call(null,state,new cljs.core.Keyword(null,"integer","integer",-604721710));
var top_item = propeller.push.state.peek_stack.call(null,popped_state,stack);
var top_item_dup = cljs.core.take.call(null,(n - (1)),cljs.core.repeat.call(null,top_item));
if(((0) < n)){
return propeller.push.state.push_to_stack_many.call(null,popped_state,stack,top_item_dup);
} else {
return propeller.push.state.pop_stack.call(null,popped_state,stack);

}
} else {
return state;
}
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"integer","integer",-604721710),null], null), null),new cljs.core.Keyword(null,"name","name",1843675177),"_dup_times"], null));
propeller.push.instructions.polymorphic._dup_items = cljs.core.with_meta((function propeller$push$instructions$polymorphic$_dup_items(stack,state){
if(propeller.push.state.empty_stack_QMARK_.call(null,state,new cljs.core.Keyword(null,"integer","integer",-604721710))){
return state;
} else {
var n = (function (){var x__4217__auto__ = propeller.push.state.peek_stack.call(null,state,new cljs.core.Keyword(null,"integer","integer",-604721710));
var y__4218__auto__ = (propeller.push.utils.globals.max_stack_items - propeller.push.state.stack_size.call(null,state,stack));
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
})();
var popped_state = propeller.push.state.pop_stack.call(null,state,new cljs.core.Keyword(null,"integer","integer",-604721710));
var top_items = cljs.core.take.call(null,n,cljs.core.get.call(null,popped_state,stack));
return propeller.push.state.push_to_stack_many.call(null,popped_state,stack,top_items);
}
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"integer","integer",-604721710),null], null), null),new cljs.core.Keyword(null,"name","name",1843675177),"_dup_items"], null));
propeller.push.instructions.polymorphic._empty = cljs.core.with_meta((function propeller$push$instructions$polymorphic$_empty(stack,state){
return propeller.push.state.push_to_stack.call(null,state,new cljs.core.Keyword(null,"boolean","boolean",-1919418404),propeller.push.state.empty_stack_QMARK_.call(null,state,stack));
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"boolean","boolean",-1919418404),null], null), null),new cljs.core.Keyword(null,"name","name",1843675177),"_empty"], null));
propeller.push.instructions.polymorphic._eq = cljs.core.with_meta((function propeller$push$instructions$polymorphic$_eq(stack,state){
return propeller.push.utils.helpers.make_instruction.call(null,state,cljs.core._EQ_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [stack,stack], null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404));
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"boolean","boolean",-1919418404),null], null), null),new cljs.core.Keyword(null,"name","name",1843675177),"_eq"], null));
propeller.push.instructions.polymorphic._flush = cljs.core.with_meta((function propeller$push$instructions$polymorphic$_flush(stack,state){
return cljs.core.assoc.call(null,state,stack,cljs.core.List.EMPTY);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"name","name",1843675177),"_flush"], null));
propeller.push.instructions.polymorphic._pop = cljs.core.with_meta((function propeller$push$instructions$polymorphic$_pop(stack,state){
return propeller.push.state.pop_stack.call(null,state,stack);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"name","name",1843675177),"_pop"], null));
propeller.push.instructions.polymorphic._rot = cljs.core.with_meta((function propeller$push$instructions$polymorphic$_rot(stack,state){
if(((3) <= cljs.core.count.call(null,cljs.core.get.call(null,state,stack)))){
var top_three = propeller.push.state.peek_stack_many.call(null,state,stack,(3));
var popped_state = propeller.push.state.pop_stack_many.call(null,state,stack,(3));
var top_three_rot = cljs.core.take.call(null,(3),cljs.core.conj.call(null,top_three,cljs.core.last.call(null,top_three)));
return propeller.push.state.push_to_stack_many.call(null,popped_state,stack,top_three_rot);
} else {
return state;
}
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"name","name",1843675177),"_rot"], null));
propeller.push.instructions.polymorphic._shove = cljs.core.with_meta((function propeller$push$instructions$polymorphic$_shove(stack,state){
if(((((cljs.core._EQ_.call(null,stack,new cljs.core.Keyword(null,"integer","integer",-604721710))) && (((2) <= cljs.core.count.call(null,new cljs.core.Keyword(null,"integer","integer",-604721710).cljs$core$IFn$_invoke$arity$1(state)))))) || (((cljs.core.not_EQ_.call(null,stack,new cljs.core.Keyword(null,"integer","integer",-604721710))) && ((!(propeller.push.state.empty_stack_QMARK_.call(null,state,new cljs.core.Keyword(null,"integer","integer",-604721710))))) && ((!(propeller.push.state.empty_stack_QMARK_.call(null,state,stack)))))))){
var index_raw = propeller.push.state.peek_stack.call(null,state,new cljs.core.Keyword(null,"integer","integer",-604721710));
var popped_state = propeller.push.state.pop_stack.call(null,state,new cljs.core.Keyword(null,"integer","integer",-604721710));
var top_item = propeller.push.state.peek_stack.call(null,popped_state,stack);
var popped_state__$1 = propeller.push.state.pop_stack.call(null,popped_state,stack);
var index = (function (){var x__4214__auto__ = (0);
var y__4215__auto__ = (function (){var x__4217__auto__ = index_raw;
var y__4218__auto__ = (cljs.core.count.call(null,cljs.core.get.call(null,popped_state__$1,stack)) - (1));
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
})();
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})();
return cljs.core.update.call(null,popped_state__$1,stack,(function (p1__26543_SHARP_){
return propeller.utils.not_lazy.call(null,cljs.core.concat.call(null,cljs.core.take.call(null,index,p1__26543_SHARP_),(new cljs.core.List(null,top_item,null,(1),null)),cljs.core.drop.call(null,index,p1__26543_SHARP_)));
}));
} else {
return state;
}
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"integer","integer",-604721710),null], null), null),new cljs.core.Keyword(null,"name","name",1843675177),"_shove"], null));
propeller.push.instructions.polymorphic._stack_depth = cljs.core.with_meta((function propeller$push$instructions$polymorphic$_stack_depth(stack,state){
var stack_depth = cljs.core.count.call(null,cljs.core.get.call(null,state,stack));
return propeller.push.state.push_to_stack.call(null,state,new cljs.core.Keyword(null,"integer","integer",-604721710),stack_depth);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"integer","integer",-604721710),null], null), null),new cljs.core.Keyword(null,"name","name",1843675177),"_stack_depth"], null));
propeller.push.instructions.polymorphic._swap = cljs.core.with_meta((function propeller$push$instructions$polymorphic$_swap(stack,state){
if(((2) <= cljs.core.count.call(null,cljs.core.get.call(null,state,stack)))){
var top_two = propeller.push.state.peek_stack_many.call(null,state,stack,(2));
var popped_state = propeller.push.state.pop_stack_many.call(null,state,stack,(2));
return propeller.push.state.push_to_stack_many.call(null,popped_state,stack,cljs.core.reverse.call(null,top_two));
} else {
return state;
}
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"name","name",1843675177),"_swap"], null));
propeller.push.instructions.polymorphic._yank = cljs.core.with_meta((function propeller$push$instructions$polymorphic$_yank(stack,state){
if(((((cljs.core._EQ_.call(null,stack,new cljs.core.Keyword(null,"integer","integer",-604721710))) && (((2) <= cljs.core.count.call(null,new cljs.core.Keyword(null,"integer","integer",-604721710).cljs$core$IFn$_invoke$arity$1(state)))))) || (((cljs.core.not_EQ_.call(null,stack,new cljs.core.Keyword(null,"integer","integer",-604721710))) && ((!(propeller.push.state.empty_stack_QMARK_.call(null,state,new cljs.core.Keyword(null,"integer","integer",-604721710))))) && ((!(propeller.push.state.empty_stack_QMARK_.call(null,state,stack)))))))){
var index_raw = propeller.push.state.peek_stack.call(null,state,new cljs.core.Keyword(null,"integer","integer",-604721710));
var popped_state = propeller.push.state.pop_stack.call(null,state,new cljs.core.Keyword(null,"integer","integer",-604721710));
var index = (function (){var x__4214__auto__ = (0);
var y__4215__auto__ = (function (){var x__4217__auto__ = index_raw;
var y__4218__auto__ = (cljs.core.count.call(null,cljs.core.get.call(null,popped_state,stack)) - (1));
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
})();
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})();
var indexed_item = cljs.core.nth.call(null,cljs.core.get.call(null,popped_state,stack),index);
return cljs.core.update.call(null,popped_state,stack,(function (p1__26544_SHARP_){
return propeller.utils.not_lazy.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,indexed_item,null,(1),null)),cljs.core.take.call(null,index,p1__26544_SHARP_),cljs.core.rest.call(null,cljs.core.drop.call(null,index,p1__26544_SHARP_))));
}));
} else {
return state;
}
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"integer","integer",-604721710),null], null), null),new cljs.core.Keyword(null,"name","name",1843675177),"_yank"], null));
propeller.push.instructions.polymorphic._yank_dup = cljs.core.with_meta((function propeller$push$instructions$polymorphic$_yank_dup(stack,state){
if(((((cljs.core._EQ_.call(null,stack,new cljs.core.Keyword(null,"integer","integer",-604721710))) && (((2) <= cljs.core.count.call(null,new cljs.core.Keyword(null,"integer","integer",-604721710).cljs$core$IFn$_invoke$arity$1(state)))))) || (((cljs.core.not_EQ_.call(null,stack,new cljs.core.Keyword(null,"integer","integer",-604721710))) && ((!(propeller.push.state.empty_stack_QMARK_.call(null,state,new cljs.core.Keyword(null,"integer","integer",-604721710))))) && ((!(propeller.push.state.empty_stack_QMARK_.call(null,state,stack)))))))){
var index_raw = propeller.push.state.peek_stack.call(null,state,new cljs.core.Keyword(null,"integer","integer",-604721710));
var popped_state = propeller.push.state.pop_stack.call(null,state,new cljs.core.Keyword(null,"integer","integer",-604721710));
var index = (function (){var x__4214__auto__ = (0);
var y__4215__auto__ = (function (){var x__4217__auto__ = index_raw;
var y__4218__auto__ = (cljs.core.count.call(null,cljs.core.get.call(null,popped_state,stack)) - (1));
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
})();
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})();
var indexed_item = cljs.core.nth.call(null,cljs.core.get.call(null,popped_state,stack),index);
return propeller.push.state.push_to_stack.call(null,popped_state,stack,indexed_item);
} else {
return state;
}
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"integer","integer",-604721710),null], null), null),new cljs.core.Keyword(null,"name","name",1843675177),"_yank_dup"], null));
propeller.push.instructions.polymorphic._deep_dup = cljs.core.with_meta((function propeller$push$instructions$polymorphic$_deep_dup(stack,state){
if(((((cljs.core._EQ_.call(null,stack,new cljs.core.Keyword(null,"integer","integer",-604721710))) && (((2) <= cljs.core.count.call(null,new cljs.core.Keyword(null,"integer","integer",-604721710).cljs$core$IFn$_invoke$arity$1(state)))))) || (((cljs.core.not_EQ_.call(null,stack,new cljs.core.Keyword(null,"integer","integer",-604721710))) && ((!(propeller.push.state.empty_stack_QMARK_.call(null,state,new cljs.core.Keyword(null,"integer","integer",-604721710))))) && ((!(propeller.push.state.empty_stack_QMARK_.call(null,state,stack)))))))){
var index_raw = propeller.push.state.peek_stack.call(null,state,new cljs.core.Keyword(null,"integer","integer",-604721710));
var popped_state = propeller.push.state.pop_stack.call(null,state,new cljs.core.Keyword(null,"integer","integer",-604721710));
var index = (function (){var x__4214__auto__ = (0);
var y__4215__auto__ = (function (){var x__4217__auto__ = index_raw;
var y__4218__auto__ = (cljs.core.count.call(null,cljs.core.get.call(null,popped_state,stack)) - (1));
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
})();
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})();
var indexed_item = cljs.core.nth.call(null,cljs.core.reverse.call(null,cljs.core.get.call(null,popped_state,stack)),index);
return propeller.push.state.push_to_stack.call(null,popped_state,stack,indexed_item);
} else {
return state;
}
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"integer","integer",-604721710),null], null), null),new cljs.core.Keyword(null,"name","name",1843675177),"_deep_dup"], null));
var seq__26545_26561 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boolean","boolean",-1919418404),new cljs.core.Keyword(null,"char","char",-641587586),new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"exec","exec",1625568743),new cljs.core.Keyword(null,"float","float",-1732389368),new cljs.core.Keyword(null,"integer","integer",-604721710),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"vector_boolean","vector_boolean",-1460932838),new cljs.core.Keyword(null,"vector_float","vector_float",1822584650),new cljs.core.Keyword(null,"vector_integer","vector_integer",-233801340),new cljs.core.Keyword(null,"vector_string","vector_string",-1776005283)], null));
var chunk__26552_26562 = null;
var count__26553_26563 = (0);
var i__26554_26564 = (0);
while(true){
if((i__26554_26564 < count__26553_26563)){
var stack__25975__auto___26565 = cljs.core._nth.call(null,chunk__26552_26562,i__26554_26564);
var seq__26555_26566 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [propeller.push.instructions.polymorphic._dup,propeller.push.instructions.polymorphic._dup_times,propeller.push.instructions.polymorphic._dup_items,propeller.push.instructions.polymorphic._empty,propeller.push.instructions.polymorphic._eq,propeller.push.instructions.polymorphic._flush,propeller.push.instructions.polymorphic._pop,propeller.push.instructions.polymorphic._rot,propeller.push.instructions.polymorphic._shove,propeller.push.instructions.polymorphic._stack_depth,propeller.push.instructions.polymorphic._swap,propeller.push.instructions.polymorphic._yank,propeller.push.instructions.polymorphic._yank_dup,propeller.push.instructions.polymorphic._deep_dup], null));
var chunk__26557_26567 = null;
var count__26558_26568 = (0);
var i__26559_26569 = (0);
while(true){
if((i__26559_26569 < count__26558_26568)){
var func__25976__auto___26570 = cljs.core._nth.call(null,chunk__26557_26567,i__26559_26569);
var instruction_name__25977__auto___26571 = cljs.core.keyword.call(null,[cljs.core.name.call(null,stack__25975__auto___26565),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,func__25976__auto___26570)))].join(''));
var metadata__25978__auto___26572 = ((function (seq__26555_26566,chunk__26557_26567,count__26558_26568,i__26559_26569,seq__26545_26561,chunk__26552_26562,count__26553_26563,i__26554_26564,instruction_name__25977__auto___26571,func__25976__auto___26570,stack__25975__auto___26565){
return (function (p1__25968__25969__auto__){
return cljs.core.dissoc.call(null,p1__25968__25969__auto__,new cljs.core.Keyword(null,"name","name",1843675177));
});})(seq__26555_26566,chunk__26557_26567,count__26558_26568,i__26559_26569,seq__26545_26561,chunk__26552_26562,count__26553_26563,i__26554_26564,instruction_name__25977__auto___26571,func__25976__auto___26570,stack__25975__auto___26565))
.call(null,cljs.core.assoc_in.call(null,cljs.core.meta.call(null,func__25976__auto___26570),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stacks","stacks",-456633410)], null),cljs.core.set.call(null,cljs.core.cons.call(null,stack__25975__auto___26565,cljs.core.replace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elem","elem",618631056),propeller.push.utils.helpers.get_vector_literal_type.call(null,stack__25975__auto___26565)], null),new cljs.core.Keyword(null,"stacks","stacks",-456633410).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,func__25976__auto___26570)))))));
var new_func__25979__auto___26573 = cljs.core.with_meta.call(null,cljs.core.partial.call(null,func__25976__auto___26570,stack__25975__auto___26565),metadata__25978__auto___26572);
cljs.core.swap_BANG_.call(null,propeller.push.core.instruction_table,cljs.core.assoc,instruction_name__25977__auto___26571,new_func__25979__auto___26573);


var G__26574 = seq__26555_26566;
var G__26575 = chunk__26557_26567;
var G__26576 = count__26558_26568;
var G__26577 = (i__26559_26569 + (1));
seq__26555_26566 = G__26574;
chunk__26557_26567 = G__26575;
count__26558_26568 = G__26576;
i__26559_26569 = G__26577;
continue;
} else {
var temp__5735__auto___26578 = cljs.core.seq.call(null,seq__26555_26566);
if(temp__5735__auto___26578){
var seq__26555_26579__$1 = temp__5735__auto___26578;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26555_26579__$1)){
var c__4556__auto___26580 = cljs.core.chunk_first.call(null,seq__26555_26579__$1);
var G__26581 = cljs.core.chunk_rest.call(null,seq__26555_26579__$1);
var G__26582 = c__4556__auto___26580;
var G__26583 = cljs.core.count.call(null,c__4556__auto___26580);
var G__26584 = (0);
seq__26555_26566 = G__26581;
chunk__26557_26567 = G__26582;
count__26558_26568 = G__26583;
i__26559_26569 = G__26584;
continue;
} else {
var func__25976__auto___26585 = cljs.core.first.call(null,seq__26555_26579__$1);
var instruction_name__25977__auto___26586 = cljs.core.keyword.call(null,[cljs.core.name.call(null,stack__25975__auto___26565),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,func__25976__auto___26585)))].join(''));
var metadata__25978__auto___26587 = ((function (seq__26555_26566,chunk__26557_26567,count__26558_26568,i__26559_26569,seq__26545_26561,chunk__26552_26562,count__26553_26563,i__26554_26564,instruction_name__25977__auto___26586,func__25976__auto___26585,seq__26555_26579__$1,temp__5735__auto___26578,stack__25975__auto___26565){
return (function (p1__25968__25969__auto__){
return cljs.core.dissoc.call(null,p1__25968__25969__auto__,new cljs.core.Keyword(null,"name","name",1843675177));
});})(seq__26555_26566,chunk__26557_26567,count__26558_26568,i__26559_26569,seq__26545_26561,chunk__26552_26562,count__26553_26563,i__26554_26564,instruction_name__25977__auto___26586,func__25976__auto___26585,seq__26555_26579__$1,temp__5735__auto___26578,stack__25975__auto___26565))
.call(null,cljs.core.assoc_in.call(null,cljs.core.meta.call(null,func__25976__auto___26585),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stacks","stacks",-456633410)], null),cljs.core.set.call(null,cljs.core.cons.call(null,stack__25975__auto___26565,cljs.core.replace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elem","elem",618631056),propeller.push.utils.helpers.get_vector_literal_type.call(null,stack__25975__auto___26565)], null),new cljs.core.Keyword(null,"stacks","stacks",-456633410).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,func__25976__auto___26585)))))));
var new_func__25979__auto___26588 = cljs.core.with_meta.call(null,cljs.core.partial.call(null,func__25976__auto___26585,stack__25975__auto___26565),metadata__25978__auto___26587);
cljs.core.swap_BANG_.call(null,propeller.push.core.instruction_table,cljs.core.assoc,instruction_name__25977__auto___26586,new_func__25979__auto___26588);


var G__26589 = cljs.core.next.call(null,seq__26555_26579__$1);
var G__26590 = null;
var G__26591 = (0);
var G__26592 = (0);
seq__26555_26566 = G__26589;
chunk__26557_26567 = G__26590;
count__26558_26568 = G__26591;
i__26559_26569 = G__26592;
continue;
}
} else {
}
}
break;
}

var G__26593 = seq__26545_26561;
var G__26594 = chunk__26552_26562;
var G__26595 = count__26553_26563;
var G__26596 = (i__26554_26564 + (1));
seq__26545_26561 = G__26593;
chunk__26552_26562 = G__26594;
count__26553_26563 = G__26595;
i__26554_26564 = G__26596;
continue;
} else {
var temp__5735__auto___26597 = cljs.core.seq.call(null,seq__26545_26561);
if(temp__5735__auto___26597){
var seq__26545_26598__$1 = temp__5735__auto___26597;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26545_26598__$1)){
var c__4556__auto___26599 = cljs.core.chunk_first.call(null,seq__26545_26598__$1);
var G__26600 = cljs.core.chunk_rest.call(null,seq__26545_26598__$1);
var G__26601 = c__4556__auto___26599;
var G__26602 = cljs.core.count.call(null,c__4556__auto___26599);
var G__26603 = (0);
seq__26545_26561 = G__26600;
chunk__26552_26562 = G__26601;
count__26553_26563 = G__26602;
i__26554_26564 = G__26603;
continue;
} else {
var stack__25975__auto___26604 = cljs.core.first.call(null,seq__26545_26598__$1);
var seq__26546_26605 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [propeller.push.instructions.polymorphic._dup,propeller.push.instructions.polymorphic._dup_times,propeller.push.instructions.polymorphic._dup_items,propeller.push.instructions.polymorphic._empty,propeller.push.instructions.polymorphic._eq,propeller.push.instructions.polymorphic._flush,propeller.push.instructions.polymorphic._pop,propeller.push.instructions.polymorphic._rot,propeller.push.instructions.polymorphic._shove,propeller.push.instructions.polymorphic._stack_depth,propeller.push.instructions.polymorphic._swap,propeller.push.instructions.polymorphic._yank,propeller.push.instructions.polymorphic._yank_dup,propeller.push.instructions.polymorphic._deep_dup], null));
var chunk__26548_26606 = null;
var count__26549_26607 = (0);
var i__26550_26608 = (0);
while(true){
if((i__26550_26608 < count__26549_26607)){
var func__25976__auto___26609 = cljs.core._nth.call(null,chunk__26548_26606,i__26550_26608);
var instruction_name__25977__auto___26610 = cljs.core.keyword.call(null,[cljs.core.name.call(null,stack__25975__auto___26604),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,func__25976__auto___26609)))].join(''));
var metadata__25978__auto___26611 = ((function (seq__26546_26605,chunk__26548_26606,count__26549_26607,i__26550_26608,seq__26545_26561,chunk__26552_26562,count__26553_26563,i__26554_26564,instruction_name__25977__auto___26610,func__25976__auto___26609,stack__25975__auto___26604,seq__26545_26598__$1,temp__5735__auto___26597){
return (function (p1__25968__25969__auto__){
return cljs.core.dissoc.call(null,p1__25968__25969__auto__,new cljs.core.Keyword(null,"name","name",1843675177));
});})(seq__26546_26605,chunk__26548_26606,count__26549_26607,i__26550_26608,seq__26545_26561,chunk__26552_26562,count__26553_26563,i__26554_26564,instruction_name__25977__auto___26610,func__25976__auto___26609,stack__25975__auto___26604,seq__26545_26598__$1,temp__5735__auto___26597))
.call(null,cljs.core.assoc_in.call(null,cljs.core.meta.call(null,func__25976__auto___26609),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stacks","stacks",-456633410)], null),cljs.core.set.call(null,cljs.core.cons.call(null,stack__25975__auto___26604,cljs.core.replace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elem","elem",618631056),propeller.push.utils.helpers.get_vector_literal_type.call(null,stack__25975__auto___26604)], null),new cljs.core.Keyword(null,"stacks","stacks",-456633410).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,func__25976__auto___26609)))))));
var new_func__25979__auto___26612 = cljs.core.with_meta.call(null,cljs.core.partial.call(null,func__25976__auto___26609,stack__25975__auto___26604),metadata__25978__auto___26611);
cljs.core.swap_BANG_.call(null,propeller.push.core.instruction_table,cljs.core.assoc,instruction_name__25977__auto___26610,new_func__25979__auto___26612);


var G__26613 = seq__26546_26605;
var G__26614 = chunk__26548_26606;
var G__26615 = count__26549_26607;
var G__26616 = (i__26550_26608 + (1));
seq__26546_26605 = G__26613;
chunk__26548_26606 = G__26614;
count__26549_26607 = G__26615;
i__26550_26608 = G__26616;
continue;
} else {
var temp__5735__auto___26617__$1 = cljs.core.seq.call(null,seq__26546_26605);
if(temp__5735__auto___26617__$1){
var seq__26546_26618__$1 = temp__5735__auto___26617__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26546_26618__$1)){
var c__4556__auto___26619 = cljs.core.chunk_first.call(null,seq__26546_26618__$1);
var G__26620 = cljs.core.chunk_rest.call(null,seq__26546_26618__$1);
var G__26621 = c__4556__auto___26619;
var G__26622 = cljs.core.count.call(null,c__4556__auto___26619);
var G__26623 = (0);
seq__26546_26605 = G__26620;
chunk__26548_26606 = G__26621;
count__26549_26607 = G__26622;
i__26550_26608 = G__26623;
continue;
} else {
var func__25976__auto___26624 = cljs.core.first.call(null,seq__26546_26618__$1);
var instruction_name__25977__auto___26625 = cljs.core.keyword.call(null,[cljs.core.name.call(null,stack__25975__auto___26604),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,func__25976__auto___26624)))].join(''));
var metadata__25978__auto___26626 = ((function (seq__26546_26605,chunk__26548_26606,count__26549_26607,i__26550_26608,seq__26545_26561,chunk__26552_26562,count__26553_26563,i__26554_26564,instruction_name__25977__auto___26625,func__25976__auto___26624,seq__26546_26618__$1,temp__5735__auto___26617__$1,stack__25975__auto___26604,seq__26545_26598__$1,temp__5735__auto___26597){
return (function (p1__25968__25969__auto__){
return cljs.core.dissoc.call(null,p1__25968__25969__auto__,new cljs.core.Keyword(null,"name","name",1843675177));
});})(seq__26546_26605,chunk__26548_26606,count__26549_26607,i__26550_26608,seq__26545_26561,chunk__26552_26562,count__26553_26563,i__26554_26564,instruction_name__25977__auto___26625,func__25976__auto___26624,seq__26546_26618__$1,temp__5735__auto___26617__$1,stack__25975__auto___26604,seq__26545_26598__$1,temp__5735__auto___26597))
.call(null,cljs.core.assoc_in.call(null,cljs.core.meta.call(null,func__25976__auto___26624),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stacks","stacks",-456633410)], null),cljs.core.set.call(null,cljs.core.cons.call(null,stack__25975__auto___26604,cljs.core.replace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elem","elem",618631056),propeller.push.utils.helpers.get_vector_literal_type.call(null,stack__25975__auto___26604)], null),new cljs.core.Keyword(null,"stacks","stacks",-456633410).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,func__25976__auto___26624)))))));
var new_func__25979__auto___26627 = cljs.core.with_meta.call(null,cljs.core.partial.call(null,func__25976__auto___26624,stack__25975__auto___26604),metadata__25978__auto___26626);
cljs.core.swap_BANG_.call(null,propeller.push.core.instruction_table,cljs.core.assoc,instruction_name__25977__auto___26625,new_func__25979__auto___26627);


var G__26628 = cljs.core.next.call(null,seq__26546_26618__$1);
var G__26629 = null;
var G__26630 = (0);
var G__26631 = (0);
seq__26546_26605 = G__26628;
chunk__26548_26606 = G__26629;
count__26549_26607 = G__26630;
i__26550_26608 = G__26631;
continue;
}
} else {
}
}
break;
}

var G__26632 = cljs.core.next.call(null,seq__26545_26598__$1);
var G__26633 = null;
var G__26634 = (0);
var G__26635 = (0);
seq__26545_26561 = G__26632;
chunk__26552_26562 = G__26633;
count__26553_26563 = G__26634;
i__26554_26564 = G__26635;
continue;
}
} else {
}
}
break;
}

//# sourceMappingURL=polymorphic.js.map?rel=1627432842874
