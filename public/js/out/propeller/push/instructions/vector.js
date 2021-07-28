// Compiled by ClojureScript 1.10.764 {}
goog.provide('propeller.push.instructions.vector');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('propeller.utils');
goog.require('propeller.push.state');
goog.require('propeller.push.utils.helpers');
propeller.push.instructions.vector._butlast = cljs.core.with_meta((function propeller$push$instructions$vector$_butlast(stack,state){
return propeller.push.utils.helpers.make_instruction.call(null,state,(function (p1__26098_SHARP_){
return cljs.core.vec.call(null,cljs.core.butlast.call(null,p1__26098_SHARP_));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [stack], null),stack);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"name","name",1843675177),"_butlast"], null));
propeller.push.instructions.vector._concat = cljs.core.with_meta((function propeller$push$instructions$vector$_concat(stack,state){
return propeller.push.utils.helpers.make_instruction.call(null,state,(function (p1__26100_SHARP_,p2__26099_SHARP_){
return cljs.core.vec.call(null,cljs.core.concat.call(null,p2__26099_SHARP_,p1__26100_SHARP_));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [stack,stack], null),stack);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"name","name",1843675177),"_concat"], null));
propeller.push.instructions.vector._conj = cljs.core.with_meta((function propeller$push$instructions$vector$_conj(stack,state){
var lit_stack = propeller.push.utils.helpers.get_vector_literal_type.call(null,stack);
return propeller.push.utils.helpers.make_instruction.call(null,state,(function (p1__26102_SHARP_,p2__26101_SHARP_){
return cljs.core.conj.call(null,p2__26101_SHARP_,p1__26102_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lit_stack,stack], null),stack);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elem","elem",618631056),null], null), null),new cljs.core.Keyword(null,"name","name",1843675177),"_conj"], null));
propeller.push.instructions.vector._contains = cljs.core.with_meta((function propeller$push$instructions$vector$_contains(stack,state){
var lit_stack = propeller.push.utils.helpers.get_vector_literal_type.call(null,stack);
return propeller.push.utils.helpers.make_instruction.call(null,state,(function (p1__26104_SHARP_,p2__26103_SHARP_){
return cljs.core.contains_QMARK_.call(null,cljs.core.set.call(null,p2__26103_SHARP_),p1__26104_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lit_stack,stack], null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404));
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"boolean","boolean",-1919418404),null], null), null),new cljs.core.Keyword(null,"name","name",1843675177),"_contains"], null));
propeller.push.instructions.vector._emptyvector = cljs.core.with_meta((function propeller$push$instructions$vector$_emptyvector(stack,state){
return propeller.push.utils.helpers.make_instruction.call(null,state,cljs.core.empty_QMARK_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [stack], null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404));
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"boolean","boolean",-1919418404),null], null), null),new cljs.core.Keyword(null,"name","name",1843675177),"_emptyvector"], null));
propeller.push.instructions.vector._first = cljs.core.with_meta((function propeller$push$instructions$vector$_first(stack,state){
var lit_stack = propeller.push.utils.helpers.get_vector_literal_type.call(null,stack);
return propeller.push.utils.helpers.make_instruction.call(null,state,(function (p1__26105_SHARP_){
if(cljs.core.empty_QMARK_.call(null,p1__26105_SHARP_)){
return new cljs.core.Keyword(null,"ignore-instruction","ignore-instruction",-68519031);
} else {
return cljs.core.first.call(null,p1__26105_SHARP_);
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [stack], null),lit_stack);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elem","elem",618631056),null], null), null),new cljs.core.Keyword(null,"name","name",1843675177),"_first"], null));
propeller.push.instructions.vector._indexof = cljs.core.with_meta((function propeller$push$instructions$vector$_indexof(stack,state){
var lit_stack = propeller.push.utils.helpers.get_vector_literal_type.call(null,stack);
return propeller.push.utils.helpers.make_instruction.call(null,state,(function (p1__26106_SHARP_,p2__26107_SHARP_){
return propeller.utils.indexof.call(null,p1__26106_SHARP_,p2__26107_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lit_stack,stack], null),new cljs.core.Keyword(null,"integer","integer",-604721710));
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"elem","elem",618631056),null,new cljs.core.Keyword(null,"integer","integer",-604721710),null], null), null),new cljs.core.Keyword(null,"name","name",1843675177),"_indexof"], null));
propeller.push.instructions.vector._iterate = cljs.core.with_meta((function propeller$push$instructions$vector$_iterate(stack,state){
var lit_stack = propeller.push.utils.helpers.get_vector_literal_type.call(null,stack);
if(((propeller.push.state.empty_stack_QMARK_.call(null,state,new cljs.core.Keyword(null,"exec","exec",1625568743))) || (propeller.push.state.empty_stack_QMARK_.call(null,state,stack)))){
return state;
} else {
var vect = propeller.push.state.peek_stack.call(null,state,stack);
var popped_state = propeller.push.state.pop_stack.call(null,state,stack);
if(cljs.core.empty_QMARK_.call(null,vect)){
return propeller.push.state.pop_stack.call(null,popped_state,new cljs.core.Keyword(null,"exec","exec",1625568743));
} else {
if(cljs.core.empty_QMARK_.call(null,cljs.core.rest.call(null,vect))){
return propeller.push.state.push_to_stack.call(null,popped_state,lit_stack,cljs.core.first.call(null,vect));
} else {
return propeller.push.state.push_to_stack.call(null,propeller.push.state.push_to_stack.call(null,propeller.push.state.push_to_stack.call(null,propeller.push.state.push_to_stack.call(null,popped_state,new cljs.core.Keyword(null,"exec","exec",1625568743),cljs.core.keyword.call(null,[cljs.core.name.call(null,stack),"_iterate"].join(''))),new cljs.core.Keyword(null,"exec","exec",1625568743),cljs.core.vec.call(null,cljs.core.rest.call(null,vect))),new cljs.core.Keyword(null,"exec","exec",1625568743),propeller.push.state.peek_stack.call(null,state,new cljs.core.Keyword(null,"exec","exec",1625568743))),lit_stack,cljs.core.first.call(null,vect));

}
}
}
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"elem","elem",618631056),null,new cljs.core.Keyword(null,"integer","integer",-604721710),null], null), null),new cljs.core.Keyword(null,"name","name",1843675177),"_iterate"], null));
propeller.push.instructions.vector._last = cljs.core.with_meta((function propeller$push$instructions$vector$_last(stack,state){
var lit_stack = propeller.push.utils.helpers.get_vector_literal_type.call(null,stack);
return propeller.push.utils.helpers.make_instruction.call(null,state,(function (p1__26108_SHARP_){
if(cljs.core.empty_QMARK_.call(null,p1__26108_SHARP_)){
return new cljs.core.Keyword(null,"ignore-instruction","ignore-instruction",-68519031);
} else {
return cljs.core.last.call(null,p1__26108_SHARP_);
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [stack], null),lit_stack);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elem","elem",618631056),null], null), null),new cljs.core.Keyword(null,"name","name",1843675177),"_last"], null));
propeller.push.instructions.vector._length = cljs.core.with_meta((function propeller$push$instructions$vector$_length(stack,state){
return propeller.push.utils.helpers.make_instruction.call(null,state,cljs.core.count,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [stack], null),new cljs.core.Keyword(null,"integer","integer",-604721710));
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"integer","integer",-604721710),null], null), null),new cljs.core.Keyword(null,"name","name",1843675177),"_length"], null));
propeller.push.instructions.vector._nth = cljs.core.with_meta((function propeller$push$instructions$vector$_nth(stack,state){
var lit_stack = propeller.push.utils.helpers.get_vector_literal_type.call(null,stack);
return propeller.push.utils.helpers.make_instruction.call(null,state,(function (p1__26110_SHARP_,p2__26109_SHARP_){
if(cljs.core.empty_QMARK_.call(null,p2__26109_SHARP_)){
return new cljs.core.Keyword(null,"ignore-instruction","ignore-instruction",-68519031);
} else {
return cljs.core.get.call(null,p2__26109_SHARP_,cljs.core.mod.call(null,p1__26110_SHARP_,cljs.core.count.call(null,p2__26109_SHARP_)));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"integer","integer",-604721710),stack], null),lit_stack);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"elem","elem",618631056),null,new cljs.core.Keyword(null,"integer","integer",-604721710),null], null), null),new cljs.core.Keyword(null,"name","name",1843675177),"_nth"], null));
propeller.push.instructions.vector._occurrencesof = cljs.core.with_meta((function propeller$push$instructions$vector$_occurrencesof(stack,state){
var lit_stack = propeller.push.utils.helpers.get_vector_literal_type.call(null,stack);
return propeller.push.utils.helpers.make_instruction.call(null,state,(function (lit,vect){
return cljs.core.count.call(null,cljs.core.filter.call(null,(function (p1__26111_SHARP_){
return cljs.core._EQ_.call(null,lit,p1__26111_SHARP_);
}),vect));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lit_stack,stack], null),new cljs.core.Keyword(null,"integer","integer",-604721710));
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"elem","elem",618631056),null,new cljs.core.Keyword(null,"integer","integer",-604721710),null], null), null),new cljs.core.Keyword(null,"name","name",1843675177),"_occurrencesof"], null));
propeller.push.instructions.vector._pushall = cljs.core.with_meta((function propeller$push$instructions$vector$_pushall(stack,state){
if(propeller.push.state.empty_stack_QMARK_.call(null,state,stack)){
return state;
} else {
var lit_stack = propeller.push.utils.helpers.get_vector_literal_type.call(null,stack);
var top_vector = propeller.push.state.peek_stack.call(null,state,stack);
var popped_state = propeller.push.state.pop_stack.call(null,state,stack);
return propeller.push.state.push_to_stack_many.call(null,popped_state,lit_stack,top_vector);
}
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elem","elem",618631056),null], null), null),new cljs.core.Keyword(null,"name","name",1843675177),"_pushall"], null));
propeller.push.instructions.vector._remove = cljs.core.with_meta((function propeller$push$instructions$vector$_remove(stack,state){
var lit_stack = propeller.push.utils.helpers.get_vector_literal_type.call(null,stack);
return propeller.push.utils.helpers.make_instruction.call(null,state,(function (lit,vect){
return cljs.core.vec.call(null,cljs.core.filter.call(null,(function (p1__26112_SHARP_){
return cljs.core.not_EQ_.call(null,lit,p1__26112_SHARP_);
}),vect));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lit_stack,stack], null),stack);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elem","elem",618631056),null], null), null),new cljs.core.Keyword(null,"name","name",1843675177),"_remove"], null));
propeller.push.instructions.vector._replace = cljs.core.with_meta((function propeller$push$instructions$vector$_replace(stack,state){
var lit_stack = propeller.push.utils.helpers.get_vector_literal_type.call(null,stack);
return propeller.push.utils.helpers.make_instruction.call(null,state,(function (lit1,lit2,vect){
return cljs.core.replace.call(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([lit1,lit2]),vect);
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [lit_stack,lit_stack,stack], null),stack);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elem","elem",618631056),null], null), null),new cljs.core.Keyword(null,"name","name",1843675177),"_replace"], null));
propeller.push.instructions.vector._replacefirst = cljs.core.with_meta((function propeller$push$instructions$vector$_replacefirst(stack,state){
var lit_stack = propeller.push.utils.helpers.get_vector_literal_type.call(null,stack);
return propeller.push.utils.helpers.make_instruction.call(null,state,(function (lit1,lit2,vect){
var replaceindex = propeller.utils.indexof.call(null,lit1,vect);
if(cljs.core._EQ_.call(null,replaceindex,(-1))){
return vect;
} else {
return cljs.core.assoc.call(null,vect,replaceindex,lit2);
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [lit_stack,lit_stack,stack], null),stack);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elem","elem",618631056),null], null), null),new cljs.core.Keyword(null,"name","name",1843675177),"_replacefirst"], null));
propeller.push.instructions.vector._rest = cljs.core.with_meta((function propeller$push$instructions$vector$_rest(stack,state){
return propeller.push.utils.helpers.make_instruction.call(null,state,(function (p1__26113_SHARP_){
return cljs.core.vec.call(null,cljs.core.rest.call(null,p1__26113_SHARP_));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [stack], null),stack);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"name","name",1843675177),"_rest"], null));
propeller.push.instructions.vector._reverse = cljs.core.with_meta((function propeller$push$instructions$vector$_reverse(stack,state){
return propeller.push.utils.helpers.make_instruction.call(null,state,(function (p1__26114_SHARP_){
return cljs.core.vec.call(null,cljs.core.reverse.call(null,p1__26114_SHARP_));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [stack], null),stack);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"name","name",1843675177),"_reverse"], null));
propeller.push.instructions.vector._set = cljs.core.with_meta((function propeller$push$instructions$vector$_set(stack,state){
var lit_stack = propeller.push.utils.helpers.get_vector_literal_type.call(null,stack);
return propeller.push.utils.helpers.make_instruction.call(null,state,(function (lit,n,vect){
if(cljs.core.empty_QMARK_.call(null,vect)){
return new cljs.core.Keyword(null,"ignore-instruction","ignore-instruction",-68519031);
} else {
return cljs.core.assoc.call(null,vect,cljs.core.mod.call(null,n,cljs.core.count.call(null,vect)),lit);
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [lit_stack,new cljs.core.Keyword(null,"integer","integer",-604721710),stack], null),stack);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"elem","elem",618631056),null,new cljs.core.Keyword(null,"integer","integer",-604721710),null], null), null),new cljs.core.Keyword(null,"name","name",1843675177),"_set"], null));
propeller.push.instructions.vector._subvec = cljs.core.with_meta((function propeller$push$instructions$vector$_subvec(stack,state){
return propeller.push.utils.helpers.make_instruction.call(null,state,(function (start_raw,stop_raw,vect){
var start = (function (){var x__4217__auto__ = cljs.core.count.call(null,vect);
var y__4218__auto__ = (function (){var x__4214__auto__ = (0);
var y__4215__auto__ = start_raw;
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})();
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
})();
var stop = (function (){var x__4217__auto__ = cljs.core.count.call(null,vect);
var y__4218__auto__ = (function (){var x__4214__auto__ = (function (){var x__4214__auto__ = (0);
var y__4215__auto__ = start_raw;
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})();
var y__4215__auto__ = stop_raw;
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})();
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
})();
return cljs.core.subvec.call(null,vect,start,stop);
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"integer","integer",-604721710),new cljs.core.Keyword(null,"integer","integer",-604721710),stack], null),stack);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"integer","integer",-604721710),null], null), null),new cljs.core.Keyword(null,"name","name",1843675177),"_subvec"], null));
propeller.push.instructions.vector._take = cljs.core.with_meta((function propeller$push$instructions$vector$_take(stack,state){
return propeller.push.utils.helpers.make_instruction.call(null,state,(function (p1__26115_SHARP_,p2__26116_SHARP_){
return cljs.core.vec.call(null,cljs.core.take.call(null,p1__26115_SHARP_,p2__26116_SHARP_));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"integer","integer",-604721710),stack], null),stack);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"integer","integer",-604721710),null], null), null),new cljs.core.Keyword(null,"name","name",1843675177),"_take"], null));
var seq__26117_26133 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector_boolean","vector_boolean",-1460932838),new cljs.core.Keyword(null,"vector_float","vector_float",1822584650),new cljs.core.Keyword(null,"vector_integer","vector_integer",-233801340),new cljs.core.Keyword(null,"vector_string","vector_string",-1776005283)], null));
var chunk__26124_26134 = null;
var count__26125_26135 = (0);
var i__26126_26136 = (0);
while(true){
if((i__26126_26136 < count__26125_26135)){
var stack__25975__auto___26137 = cljs.core._nth.call(null,chunk__26124_26134,i__26126_26136);
var seq__26127_26138 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 21, 5, cljs.core.PersistentVector.EMPTY_NODE, [propeller.push.instructions.vector._butlast,propeller.push.instructions.vector._concat,propeller.push.instructions.vector._conj,propeller.push.instructions.vector._contains,propeller.push.instructions.vector._emptyvector,propeller.push.instructions.vector._first,propeller.push.instructions.vector._indexof,propeller.push.instructions.vector._iterate,propeller.push.instructions.vector._last,propeller.push.instructions.vector._length,propeller.push.instructions.vector._nth,propeller.push.instructions.vector._occurrencesof,propeller.push.instructions.vector._pushall,propeller.push.instructions.vector._remove,propeller.push.instructions.vector._replace,propeller.push.instructions.vector._replacefirst,propeller.push.instructions.vector._rest,propeller.push.instructions.vector._reverse,propeller.push.instructions.vector._set,propeller.push.instructions.vector._subvec,propeller.push.instructions.vector._take], null));
var chunk__26129_26139 = null;
var count__26130_26140 = (0);
var i__26131_26141 = (0);
while(true){
if((i__26131_26141 < count__26130_26140)){
var func__25976__auto___26142 = cljs.core._nth.call(null,chunk__26129_26139,i__26131_26141);
var instruction_name__25977__auto___26143 = cljs.core.keyword.call(null,[cljs.core.name.call(null,stack__25975__auto___26137),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,func__25976__auto___26142)))].join(''));
var metadata__25978__auto___26144 = ((function (seq__26127_26138,chunk__26129_26139,count__26130_26140,i__26131_26141,seq__26117_26133,chunk__26124_26134,count__26125_26135,i__26126_26136,instruction_name__25977__auto___26143,func__25976__auto___26142,stack__25975__auto___26137){
return (function (p1__25968__25969__auto__){
return cljs.core.dissoc.call(null,p1__25968__25969__auto__,new cljs.core.Keyword(null,"name","name",1843675177));
});})(seq__26127_26138,chunk__26129_26139,count__26130_26140,i__26131_26141,seq__26117_26133,chunk__26124_26134,count__26125_26135,i__26126_26136,instruction_name__25977__auto___26143,func__25976__auto___26142,stack__25975__auto___26137))
.call(null,cljs.core.assoc_in.call(null,cljs.core.meta.call(null,func__25976__auto___26142),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stacks","stacks",-456633410)], null),cljs.core.set.call(null,cljs.core.cons.call(null,stack__25975__auto___26137,cljs.core.replace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elem","elem",618631056),propeller.push.utils.helpers.get_vector_literal_type.call(null,stack__25975__auto___26137)], null),new cljs.core.Keyword(null,"stacks","stacks",-456633410).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,func__25976__auto___26142)))))));
var new_func__25979__auto___26145 = cljs.core.with_meta.call(null,cljs.core.partial.call(null,func__25976__auto___26142,stack__25975__auto___26137),metadata__25978__auto___26144);
cljs.core.swap_BANG_.call(null,propeller.push.core.instruction_table,cljs.core.assoc,instruction_name__25977__auto___26143,new_func__25979__auto___26145);


var G__26146 = seq__26127_26138;
var G__26147 = chunk__26129_26139;
var G__26148 = count__26130_26140;
var G__26149 = (i__26131_26141 + (1));
seq__26127_26138 = G__26146;
chunk__26129_26139 = G__26147;
count__26130_26140 = G__26148;
i__26131_26141 = G__26149;
continue;
} else {
var temp__5735__auto___26150 = cljs.core.seq.call(null,seq__26127_26138);
if(temp__5735__auto___26150){
var seq__26127_26151__$1 = temp__5735__auto___26150;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26127_26151__$1)){
var c__4556__auto___26152 = cljs.core.chunk_first.call(null,seq__26127_26151__$1);
var G__26153 = cljs.core.chunk_rest.call(null,seq__26127_26151__$1);
var G__26154 = c__4556__auto___26152;
var G__26155 = cljs.core.count.call(null,c__4556__auto___26152);
var G__26156 = (0);
seq__26127_26138 = G__26153;
chunk__26129_26139 = G__26154;
count__26130_26140 = G__26155;
i__26131_26141 = G__26156;
continue;
} else {
var func__25976__auto___26157 = cljs.core.first.call(null,seq__26127_26151__$1);
var instruction_name__25977__auto___26158 = cljs.core.keyword.call(null,[cljs.core.name.call(null,stack__25975__auto___26137),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,func__25976__auto___26157)))].join(''));
var metadata__25978__auto___26159 = ((function (seq__26127_26138,chunk__26129_26139,count__26130_26140,i__26131_26141,seq__26117_26133,chunk__26124_26134,count__26125_26135,i__26126_26136,instruction_name__25977__auto___26158,func__25976__auto___26157,seq__26127_26151__$1,temp__5735__auto___26150,stack__25975__auto___26137){
return (function (p1__25968__25969__auto__){
return cljs.core.dissoc.call(null,p1__25968__25969__auto__,new cljs.core.Keyword(null,"name","name",1843675177));
});})(seq__26127_26138,chunk__26129_26139,count__26130_26140,i__26131_26141,seq__26117_26133,chunk__26124_26134,count__26125_26135,i__26126_26136,instruction_name__25977__auto___26158,func__25976__auto___26157,seq__26127_26151__$1,temp__5735__auto___26150,stack__25975__auto___26137))
.call(null,cljs.core.assoc_in.call(null,cljs.core.meta.call(null,func__25976__auto___26157),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stacks","stacks",-456633410)], null),cljs.core.set.call(null,cljs.core.cons.call(null,stack__25975__auto___26137,cljs.core.replace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elem","elem",618631056),propeller.push.utils.helpers.get_vector_literal_type.call(null,stack__25975__auto___26137)], null),new cljs.core.Keyword(null,"stacks","stacks",-456633410).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,func__25976__auto___26157)))))));
var new_func__25979__auto___26160 = cljs.core.with_meta.call(null,cljs.core.partial.call(null,func__25976__auto___26157,stack__25975__auto___26137),metadata__25978__auto___26159);
cljs.core.swap_BANG_.call(null,propeller.push.core.instruction_table,cljs.core.assoc,instruction_name__25977__auto___26158,new_func__25979__auto___26160);


var G__26161 = cljs.core.next.call(null,seq__26127_26151__$1);
var G__26162 = null;
var G__26163 = (0);
var G__26164 = (0);
seq__26127_26138 = G__26161;
chunk__26129_26139 = G__26162;
count__26130_26140 = G__26163;
i__26131_26141 = G__26164;
continue;
}
} else {
}
}
break;
}

var G__26165 = seq__26117_26133;
var G__26166 = chunk__26124_26134;
var G__26167 = count__26125_26135;
var G__26168 = (i__26126_26136 + (1));
seq__26117_26133 = G__26165;
chunk__26124_26134 = G__26166;
count__26125_26135 = G__26167;
i__26126_26136 = G__26168;
continue;
} else {
var temp__5735__auto___26169 = cljs.core.seq.call(null,seq__26117_26133);
if(temp__5735__auto___26169){
var seq__26117_26170__$1 = temp__5735__auto___26169;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26117_26170__$1)){
var c__4556__auto___26171 = cljs.core.chunk_first.call(null,seq__26117_26170__$1);
var G__26172 = cljs.core.chunk_rest.call(null,seq__26117_26170__$1);
var G__26173 = c__4556__auto___26171;
var G__26174 = cljs.core.count.call(null,c__4556__auto___26171);
var G__26175 = (0);
seq__26117_26133 = G__26172;
chunk__26124_26134 = G__26173;
count__26125_26135 = G__26174;
i__26126_26136 = G__26175;
continue;
} else {
var stack__25975__auto___26176 = cljs.core.first.call(null,seq__26117_26170__$1);
var seq__26118_26177 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 21, 5, cljs.core.PersistentVector.EMPTY_NODE, [propeller.push.instructions.vector._butlast,propeller.push.instructions.vector._concat,propeller.push.instructions.vector._conj,propeller.push.instructions.vector._contains,propeller.push.instructions.vector._emptyvector,propeller.push.instructions.vector._first,propeller.push.instructions.vector._indexof,propeller.push.instructions.vector._iterate,propeller.push.instructions.vector._last,propeller.push.instructions.vector._length,propeller.push.instructions.vector._nth,propeller.push.instructions.vector._occurrencesof,propeller.push.instructions.vector._pushall,propeller.push.instructions.vector._remove,propeller.push.instructions.vector._replace,propeller.push.instructions.vector._replacefirst,propeller.push.instructions.vector._rest,propeller.push.instructions.vector._reverse,propeller.push.instructions.vector._set,propeller.push.instructions.vector._subvec,propeller.push.instructions.vector._take], null));
var chunk__26120_26178 = null;
var count__26121_26179 = (0);
var i__26122_26180 = (0);
while(true){
if((i__26122_26180 < count__26121_26179)){
var func__25976__auto___26181 = cljs.core._nth.call(null,chunk__26120_26178,i__26122_26180);
var instruction_name__25977__auto___26182 = cljs.core.keyword.call(null,[cljs.core.name.call(null,stack__25975__auto___26176),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,func__25976__auto___26181)))].join(''));
var metadata__25978__auto___26183 = ((function (seq__26118_26177,chunk__26120_26178,count__26121_26179,i__26122_26180,seq__26117_26133,chunk__26124_26134,count__26125_26135,i__26126_26136,instruction_name__25977__auto___26182,func__25976__auto___26181,stack__25975__auto___26176,seq__26117_26170__$1,temp__5735__auto___26169){
return (function (p1__25968__25969__auto__){
return cljs.core.dissoc.call(null,p1__25968__25969__auto__,new cljs.core.Keyword(null,"name","name",1843675177));
});})(seq__26118_26177,chunk__26120_26178,count__26121_26179,i__26122_26180,seq__26117_26133,chunk__26124_26134,count__26125_26135,i__26126_26136,instruction_name__25977__auto___26182,func__25976__auto___26181,stack__25975__auto___26176,seq__26117_26170__$1,temp__5735__auto___26169))
.call(null,cljs.core.assoc_in.call(null,cljs.core.meta.call(null,func__25976__auto___26181),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stacks","stacks",-456633410)], null),cljs.core.set.call(null,cljs.core.cons.call(null,stack__25975__auto___26176,cljs.core.replace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elem","elem",618631056),propeller.push.utils.helpers.get_vector_literal_type.call(null,stack__25975__auto___26176)], null),new cljs.core.Keyword(null,"stacks","stacks",-456633410).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,func__25976__auto___26181)))))));
var new_func__25979__auto___26184 = cljs.core.with_meta.call(null,cljs.core.partial.call(null,func__25976__auto___26181,stack__25975__auto___26176),metadata__25978__auto___26183);
cljs.core.swap_BANG_.call(null,propeller.push.core.instruction_table,cljs.core.assoc,instruction_name__25977__auto___26182,new_func__25979__auto___26184);


var G__26185 = seq__26118_26177;
var G__26186 = chunk__26120_26178;
var G__26187 = count__26121_26179;
var G__26188 = (i__26122_26180 + (1));
seq__26118_26177 = G__26185;
chunk__26120_26178 = G__26186;
count__26121_26179 = G__26187;
i__26122_26180 = G__26188;
continue;
} else {
var temp__5735__auto___26189__$1 = cljs.core.seq.call(null,seq__26118_26177);
if(temp__5735__auto___26189__$1){
var seq__26118_26190__$1 = temp__5735__auto___26189__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26118_26190__$1)){
var c__4556__auto___26191 = cljs.core.chunk_first.call(null,seq__26118_26190__$1);
var G__26192 = cljs.core.chunk_rest.call(null,seq__26118_26190__$1);
var G__26193 = c__4556__auto___26191;
var G__26194 = cljs.core.count.call(null,c__4556__auto___26191);
var G__26195 = (0);
seq__26118_26177 = G__26192;
chunk__26120_26178 = G__26193;
count__26121_26179 = G__26194;
i__26122_26180 = G__26195;
continue;
} else {
var func__25976__auto___26196 = cljs.core.first.call(null,seq__26118_26190__$1);
var instruction_name__25977__auto___26197 = cljs.core.keyword.call(null,[cljs.core.name.call(null,stack__25975__auto___26176),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,func__25976__auto___26196)))].join(''));
var metadata__25978__auto___26198 = ((function (seq__26118_26177,chunk__26120_26178,count__26121_26179,i__26122_26180,seq__26117_26133,chunk__26124_26134,count__26125_26135,i__26126_26136,instruction_name__25977__auto___26197,func__25976__auto___26196,seq__26118_26190__$1,temp__5735__auto___26189__$1,stack__25975__auto___26176,seq__26117_26170__$1,temp__5735__auto___26169){
return (function (p1__25968__25969__auto__){
return cljs.core.dissoc.call(null,p1__25968__25969__auto__,new cljs.core.Keyword(null,"name","name",1843675177));
});})(seq__26118_26177,chunk__26120_26178,count__26121_26179,i__26122_26180,seq__26117_26133,chunk__26124_26134,count__26125_26135,i__26126_26136,instruction_name__25977__auto___26197,func__25976__auto___26196,seq__26118_26190__$1,temp__5735__auto___26189__$1,stack__25975__auto___26176,seq__26117_26170__$1,temp__5735__auto___26169))
.call(null,cljs.core.assoc_in.call(null,cljs.core.meta.call(null,func__25976__auto___26196),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stacks","stacks",-456633410)], null),cljs.core.set.call(null,cljs.core.cons.call(null,stack__25975__auto___26176,cljs.core.replace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elem","elem",618631056),propeller.push.utils.helpers.get_vector_literal_type.call(null,stack__25975__auto___26176)], null),new cljs.core.Keyword(null,"stacks","stacks",-456633410).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,func__25976__auto___26196)))))));
var new_func__25979__auto___26199 = cljs.core.with_meta.call(null,cljs.core.partial.call(null,func__25976__auto___26196,stack__25975__auto___26176),metadata__25978__auto___26198);
cljs.core.swap_BANG_.call(null,propeller.push.core.instruction_table,cljs.core.assoc,instruction_name__25977__auto___26197,new_func__25979__auto___26199);


var G__26200 = cljs.core.next.call(null,seq__26118_26190__$1);
var G__26201 = null;
var G__26202 = (0);
var G__26203 = (0);
seq__26118_26177 = G__26200;
chunk__26120_26178 = G__26201;
count__26121_26179 = G__26202;
i__26122_26180 = G__26203;
continue;
}
} else {
}
}
break;
}

var G__26204 = cljs.core.next.call(null,seq__26117_26170__$1);
var G__26205 = null;
var G__26206 = (0);
var G__26207 = (0);
seq__26117_26133 = G__26204;
chunk__26124_26134 = G__26205;
count__26125_26135 = G__26206;
i__26126_26136 = G__26207;
continue;
}
} else {
}
}
break;
}

//# sourceMappingURL=vector.js.map?rel=1627432842330
