// Compiled by ClojureScript 1.10.764 {}
goog.provide('interp.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent.dom');
goog.require('cljs.tools.reader');
goog.require('cljs.js');
goog.require('interp.globals');
interp.core.step_limit = reagent.core.atom.call(null,(100));
interp.core.current_step = reagent.core.atom.call(null,(0));
interp.core.push_code = reagent.core.atom.call(null,"(:exec_dup 3 4 :integer_add :integer_gt)");
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
var items_list_no_nil = cljs.core.filter.call(null,(function (p1__30377_SHARP_){
return (!((p1__30377_SHARP_ == null)));
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
var G__30378 = interp.core.pop_stack.call(null,state__$1,current_stack);
var G__30379 = cljs.core.rest.call(null,stacks__$1);
var G__30380 = cljs.core.conj.call(null,args,interp.core.peek_stack.call(null,state__$1,current_stack));
state__$1 = G__30378;
stacks__$1 = G__30379;
args = G__30380;
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
var seq__30381 = cljs.core.seq.call(null,interp.core.stacks);
var chunk__30382 = null;
var count__30383 = (0);
var i__30384 = (0);
while(true){
if((i__30384 < count__30383)){
var stack = cljs.core._nth.call(null,chunk__30382,i__30384);
cljs.core.prn.call(null,(cljs.core.truth_(cljs.core.get.call(null,state,stack))?cljs.core.get.call(null,state,stack):cljs.core.List.EMPTY));

cljs.core.flush.call(null);


var G__30385 = seq__30381;
var G__30386 = chunk__30382;
var G__30387 = count__30383;
var G__30388 = (i__30384 + (1));
seq__30381 = G__30385;
chunk__30382 = G__30386;
count__30383 = G__30387;
i__30384 = G__30388;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__30381);
if(temp__5735__auto__){
var seq__30381__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30381__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__30381__$1);
var G__30389 = cljs.core.chunk_rest.call(null,seq__30381__$1);
var G__30390 = c__4556__auto__;
var G__30391 = cljs.core.count.call(null,c__4556__auto__);
var G__30392 = (0);
seq__30381 = G__30389;
chunk__30382 = G__30390;
count__30383 = G__30391;
i__30384 = G__30392;
continue;
} else {
var stack = cljs.core.first.call(null,seq__30381__$1);
cljs.core.prn.call(null,(cljs.core.truth_(cljs.core.get.call(null,state,stack))?cljs.core.get.call(null,state,stack):cljs.core.List.EMPTY));

cljs.core.flush.call(null);


var G__30393 = cljs.core.next.call(null,seq__30381__$1);
var G__30394 = null;
var G__30395 = (0);
var G__30396 = (0);
seq__30381 = G__30393;
chunk__30382 = G__30394;
count__30383 = G__30395;
i__30384 = G__30396;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"in1","in1",-201447014),(function (state){
return interp.core.push_to_stack.call(null,state,new cljs.core.Keyword(null,"exec","exec",1625568743),new cljs.core.Keyword(null,"in1","in1",-201447014).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(state)));
}));
interp.core._gt = (function interp$core$_gt(stack,state){
return interp.core.make_instruction.call(null,state,cljs.core._GT_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [stack,stack], null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404));
});
interp.core._gte = (function interp$core$_gte(stack,state){
return interp.core.make_instruction.call(null,state,cljs.core._GT__EQ_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [stack,stack], null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404));
});
interp.core._lt = (function interp$core$_lt(stack,state){
return interp.core.make_instruction.call(null,state,cljs.core._LT_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [stack,stack], null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404));
});
interp.core._lte = (function interp$core$_lte(stack,state){
return interp.core.make_instruction.call(null,state,cljs.core._LT__EQ_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [stack,stack], null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404));
});
interp.core._add = (function interp$core$_add(stack,state){
return interp.core.make_instruction.call(null,state,cljs.core._PLUS_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [stack,stack], null),stack);
});
interp.core._subtract = (function interp$core$_subtract(stack,state){
return interp.core.make_instruction.call(null,state,cljs.core._,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [stack,stack], null),stack);
});
interp.core._mult = (function interp$core$_mult(stack,state){
return interp.core.make_instruction.call(null,state,cljs.core._STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [stack,stack], null),stack);
});
interp.core._quot = (function interp$core$_quot(stack,state){
return interp.core.make_instruction.call(null,state,(function (p1__30398_SHARP_,p2__30397_SHARP_){
if((p2__30397_SHARP_ === (0))){
return (1);
} else {
return cljs.core.quot.call(null,p1__30398_SHARP_,p2__30397_SHARP_);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [stack,stack], null),stack);
});
interp.core._mod = (function interp$core$_mod(stack,state){
return interp.core.make_instruction.call(null,state,(function (p1__30400_SHARP_,p2__30399_SHARP_){
if((p2__30399_SHARP_ === (0))){
return (1);
} else {
return cljs.core.mod.call(null,p1__30400_SHARP_,p2__30399_SHARP_);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [stack,stack], null),stack);
});
interp.core._max = (function interp$core$_max(stack,state){
return interp.core.make_instruction.call(null,state,cljs.core.max,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [stack,stack], null),stack);
});
interp.core._min = (function interp$core$_min(stack,state){
return interp.core.make_instruction.call(null,state,cljs.core.min,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [stack,stack], null),stack);
});
interp.core._fromboolean = (function interp$core$_fromboolean(stack,state){
return interp.core.make_instruction.call(null,state,(function (p1__30401_SHARP_){
return ((cljs.core._EQ_.call(null,stack,new cljs.core.Keyword(null,"integer","integer",-604721710)))?cljs.core.int$:cljs.core.float$).call(null,(cljs.core.truth_(p1__30401_SHARP_)?(1):(0)));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null),stack);
});
interp.core._fromchar = (function interp$core$_fromchar(stack,state){
return interp.core.make_instruction.call(null,state,((cljs.core._EQ_.call(null,stack,new cljs.core.Keyword(null,"integer","integer",-604721710)))?cljs.core.int$:cljs.core.float$),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"char","char",-641587586)], null),stack);
});
interp.core._fromstring = (function interp$core$_fromstring(stack,state){
return interp.core.make_instruction.call(null,state,(function (p1__30402_SHARP_){
try{return ((cljs.core._EQ_.call(null,stack,new cljs.core.Keyword(null,"integer","integer",-604721710)))?cljs.core.int$:cljs.core.float$).call(null,Number(p1__30402_SHARP_));
}catch (e30403){if((e30403 instanceof Error)){
var e = e30403;
return null;
} else {
throw e30403;

}
}}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"string","string",-1989541586)], null),stack);
});
interp.core._inc = (function interp$core$_inc(stack,state){
return interp.core.make_instruction.call(null,state,cljs.core.inc,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [stack], null),stack);
});
interp.core._dec = (function interp$core$_dec(stack,state){
return interp.core.make_instruction.call(null,state,cljs.core.dec,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [stack], null),stack);
});
cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"float_gt","float_gt",-1790900025),cljs.core.partial.call(null,interp.core._gt,new cljs.core.Keyword(null,"float","float",-1732389368)));

cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"float_gte","float_gte",442535084),cljs.core.partial.call(null,interp.core._gte,new cljs.core.Keyword(null,"float","float",-1732389368)));

cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"float_lt","float_lt",349144673),cljs.core.partial.call(null,interp.core._lt,new cljs.core.Keyword(null,"float","float",-1732389368)));

cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"float_lte","float_lte",-123262849),cljs.core.partial.call(null,interp.core._lte,new cljs.core.Keyword(null,"float","float",-1732389368)));

cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"float_add","float_add",-2099702128),cljs.core.partial.call(null,interp.core._add,new cljs.core.Keyword(null,"float","float",-1732389368)));

cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"float_subtract","float_subtract",1237649569),cljs.core.partial.call(null,interp.core._subtract,new cljs.core.Keyword(null,"float","float",-1732389368)));

cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"float_mult","float_mult",230270862),cljs.core.partial.call(null,interp.core._mult,new cljs.core.Keyword(null,"float","float",-1732389368)));

cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"float_quot","float_quot",-633126516),cljs.core.partial.call(null,interp.core._quot,new cljs.core.Keyword(null,"float","float",-1732389368)));

cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"float_mod","float_mod",124540769),cljs.core.partial.call(null,interp.core._mod,new cljs.core.Keyword(null,"float","float",-1732389368)));

cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"float_max","float_max",345249574),cljs.core.partial.call(null,interp.core._max,new cljs.core.Keyword(null,"float","float",-1732389368)));

cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"float_min","float_min",1703685998),cljs.core.partial.call(null,interp.core._min,new cljs.core.Keyword(null,"float","float",-1732389368)));

cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"float_inc","float_inc",-808792844),cljs.core.partial.call(null,interp.core._inc,new cljs.core.Keyword(null,"float","float",-1732389368)));

cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"float_dec","float_dec",-379277777),cljs.core.partial.call(null,interp.core._dec,new cljs.core.Keyword(null,"float","float",-1732389368)));

cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"float_fromboolean","float_fromboolean",1491446983),cljs.core.partial.call(null,interp.core._fromboolean,new cljs.core.Keyword(null,"float","float",-1732389368)));

cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"float_fromchar","float_fromchar",-778710009),cljs.core.partial.call(null,interp.core._fromchar,new cljs.core.Keyword(null,"float","float",-1732389368)));

cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"float_fromstring","float_fromstring",98144238),cljs.core.partial.call(null,interp.core._fromstring,new cljs.core.Keyword(null,"float","float",-1732389368)));

cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"integer_gt","integer_gt",-1993592691),cljs.core.partial.call(null,interp.core._gt,new cljs.core.Keyword(null,"integer","integer",-604721710)));

cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"integer_gte","integer_gte",-1817566272),cljs.core.partial.call(null,interp.core._gte,new cljs.core.Keyword(null,"integer","integer",-604721710)));

cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"integer_lt","integer_lt",-1046776079),cljs.core.partial.call(null,interp.core._lt,new cljs.core.Keyword(null,"integer","integer",-604721710)));

cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"integer_lte","integer_lte",-1675644094),cljs.core.partial.call(null,interp.core._lte,new cljs.core.Keyword(null,"integer","integer",-604721710)));

cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"integer_add","integer_add",-429483805),cljs.core.partial.call(null,interp.core._add,new cljs.core.Keyword(null,"integer","integer",-604721710)));

cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"integer_subtract","integer_subtract",-522113646),cljs.core.partial.call(null,interp.core._subtract,new cljs.core.Keyword(null,"integer","integer",-604721710)));

cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"integer_mult","integer_mult",-864719494),cljs.core.partial.call(null,interp.core._mult,new cljs.core.Keyword(null,"integer","integer",-604721710)));

cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"integer_quot","integer_quot",1967229483),cljs.core.partial.call(null,interp.core._quot,new cljs.core.Keyword(null,"integer","integer",-604721710)));

cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"integer_mod","integer_mod",-1688457086),cljs.core.partial.call(null,interp.core._mod,new cljs.core.Keyword(null,"integer","integer",-604721710)));

cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"integer_max","integer_max",2062170820),cljs.core.partial.call(null,interp.core._max,new cljs.core.Keyword(null,"integer","integer",-604721710)));

cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"integer_min","integer_min",-322239799),cljs.core.partial.call(null,interp.core._min,new cljs.core.Keyword(null,"integer","integer",-604721710)));

cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"integer_inc","integer_inc",1042229849),cljs.core.partial.call(null,interp.core._inc,new cljs.core.Keyword(null,"integer","integer",-604721710)));

cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"integer_dec","integer_dec",1625991765),cljs.core.partial.call(null,interp.core._dec,new cljs.core.Keyword(null,"integer","integer",-604721710)));

cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"integer_fromboolean","integer_fromboolean",-2084854260),cljs.core.partial.call(null,interp.core._fromboolean,new cljs.core.Keyword(null,"integer","integer",-604721710)));

cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"integer_fromchar","integer_fromchar",817482825),cljs.core.partial.call(null,interp.core._fromchar,new cljs.core.Keyword(null,"integer","integer",-604721710)));

cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"integer_fromstring","integer_fromstring",-2035645955),cljs.core.partial.call(null,interp.core._fromstring,new cljs.core.Keyword(null,"integer","integer",-604721710)));
cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"float_cos","float_cos",-95039530),(function (state){
return interp.core.make_instruction.call(null,state,interp.core.cos,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"float","float",-1732389368)], null),new cljs.core.Keyword(null,"float","float",-1732389368));
}));
cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"float_sin","float_sin",-1816563777),(function (state){
return interp.core.make_instruction.call(null,state,interp.core.sin,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"float","float",-1732389368)], null),new cljs.core.Keyword(null,"float","float",-1732389368));
}));
cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"float_tan","float_tan",1899962771),(function (state){
return interp.core.make_instruction.call(null,state,interp.core.tan,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"float","float",-1732389368)], null),new cljs.core.Keyword(null,"float","float",-1732389368));
}));
cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"float_frominteger","float_frominteger",1178647168),(function (state){
return interp.core.make_instruction.call(null,state,cljs.core.float$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"integer","integer",-604721710)], null),new cljs.core.Keyword(null,"float","float",-1732389368));
}));
cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"integer_fromfloat","integer_fromfloat",-1254896926),(function (state){
return interp.core.make_instruction.call(null,state,cljs.core.int$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"float","float",-1732389368)], null),new cljs.core.Keyword(null,"integer","integer",-604721710));
}));
cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"exec_if","exec_if",-1891127445),(function (state){
return interp.core.make_instruction.call(null,state,(function (p1__30404_SHARP_,p2__30406_SHARP_,p3__30405_SHARP_){
if(cljs.core.truth_(p1__30404_SHARP_)){
return p3__30405_SHARP_;
} else {
return p2__30406_SHARP_;
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boolean","boolean",-1919418404),new cljs.core.Keyword(null,"exec","exec",1625568743),new cljs.core.Keyword(null,"exec","exec",1625568743)], null),new cljs.core.Keyword(null,"exec","exec",1625568743));
}));
cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"boolean_and","boolean_and",-424086794),(function (state){
return interp.core.make_instruction.call(null,state,(function (p1__30407_SHARP_,p2__30408_SHARP_){
var and__4115__auto__ = p1__30407_SHARP_;
if(cljs.core.truth_(and__4115__auto__)){
return p2__30408_SHARP_;
} else {
return and__4115__auto__;
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boolean","boolean",-1919418404),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404));
}));
cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"boolean_or","boolean_or",-643195077),(function (state){
return interp.core.make_instruction.call(null,state,(function (p1__30409_SHARP_,p2__30410_SHARP_){
var or__4126__auto__ = p1__30409_SHARP_;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return p2__30410_SHARP_;
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boolean","boolean",-1919418404),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404));
}));
cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"boolean_not","boolean_not",1708346222),(function (state){
return interp.core.make_instruction.call(null,state,cljs.core.not,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404));
}));
cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"boolean_xor","boolean_xor",-594880640),(function (state){
return interp.core.make_instruction.call(null,state,(function (p1__30411_SHARP_,p2__30412_SHARP_){
var or__4126__auto__ = (function (){var and__4115__auto__ = p1__30411_SHARP_;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not.call(null,p2__30412_SHARP_);
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if(cljs.core.not.call(null,p1__30411_SHARP_)){
return p2__30412_SHARP_;
} else {
return false;
}
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boolean","boolean",-1919418404),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404));
}));
cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"boolean_invert_first_then_and","boolean_invert_first_then_and",108520427),(function (state){
return interp.core.make_instruction.call(null,state,(function (p1__30413_SHARP_,p2__30414_SHARP_){
var and__4115__auto__ = p1__30413_SHARP_;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not.call(null,p2__30414_SHARP_);
} else {
return and__4115__auto__;
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boolean","boolean",-1919418404),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404));
}));
cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"boolean_invert_second_then_and","boolean_invert_second_then_and",1891652663),(function (state){
return interp.core.make_instruction.call(null,state,(function (p1__30415_SHARP_,p2__30416_SHARP_){
if(cljs.core.not.call(null,p1__30415_SHARP_)){
return p2__30416_SHARP_;
} else {
return false;
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boolean","boolean",-1919418404),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404));
}));
cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"boolean_fromfloat","boolean_fromfloat",-263444705),(function (state){
return interp.core.make_instruction.call(null,state,(function (p1__30417_SHARP_){
return (!((p1__30417_SHARP_ === (0))));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"float","float",-1732389368)], null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404));
}));
cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"boolean_frominteger","boolean_frominteger",-35888276),(function (state){
return interp.core.make_instruction.call(null,state,(function (p1__30418_SHARP_){
return (!((p1__30418_SHARP_ === (0))));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"integer","integer",-604721710)], null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404));
}));
cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"char_fromfloat","char_fromfloat",1006269937),(function (state){
return interp.core.make_instruction.call(null,state,(function (p1__30419_SHARP_){
return cljs.core.char$.call(null,cljs.core.mod.call(null,cljs.core.long$.call(null,p1__30419_SHARP_),(128)));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"float","float",-1732389368)], null),new cljs.core.Keyword(null,"char","char",-641587586));
}));
cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"char_frominteger","char_frominteger",1055352541),(function (state){
return interp.core.make_instruction.call(null,state,(function (p1__30420_SHARP_){
return cljs.core.char$.call(null,cljs.core.mod.call(null,p1__30420_SHARP_,(128)));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"integer","integer",-604721710)], null),new cljs.core.Keyword(null,"char","char",-641587586));
}));
cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"char_allfromstring","char_allfromstring",1779545449),(function (state){
return interp.core.make_instruction.call(null,state,(function (p1__30421_SHARP_){
return cljs.core.map.call(null,cljs.core.char$,p1__30421_SHARP_);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.Keyword(null,"char","char",-641587586));
}));
cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"string_=","string_=",993778397),(function (state){
return interp.core.make_instruction.call(null,state,cljs.core._EQ_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404));
}));
cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"string_concat","string_concat",436456642),(function (state){
return interp.core.make_instruction.call(null,state,(function (p1__30422_SHARP_,p2__30423_SHARP_){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.concat.call(null,p1__30422_SHARP_,p2__30423_SHARP_));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.Keyword(null,"string","string",-1989541586));
}));
cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"string_drop","string_drop",766159267),(function (state){
return interp.core.make_instruction.call(null,state,(function (p1__30424_SHARP_,p2__30425_SHARP_){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.drop.call(null,p1__30424_SHARP_,p2__30425_SHARP_));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"integer","integer",-604721710),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.Keyword(null,"string","string",-1989541586));
}));
cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"string_includes?","string_includes?",-472564716),(function (state){
return interp.core.make_instruction.call(null,state,clojure.string.includes_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404));
}));
cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"string_length","string_length",802916246),(function (state){
return interp.core.make_instruction.call(null,state,cljs.core.count,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.Keyword(null,"integer","integer",-604721710));
}));
cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"string_reverse","string_reverse",373360031),(function (state){
return interp.core.make_instruction.call(null,state,(function (p1__30426_SHARP_){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.reverse.call(null,p1__30426_SHARP_));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.Keyword(null,"string","string",-1989541586));
}));
cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"string_take","string_take",-218815961),(function (state){
return interp.core.make_instruction.call(null,state,(function (p1__30427_SHARP_,p2__30428_SHARP_){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.take.call(null,p1__30427_SHARP_,p2__30428_SHARP_));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"integer","integer",-604721710),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.Keyword(null,"string","string",-1989541586));
}));
interp.core._eq = (function interp$core$_eq(stack,state){
return interp.core.make_instruction.call(null,state,cljs.core._EQ_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [stack,stack], null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404));
});
interp.core._dup = (function interp$core$_dup(stack,state){
var top_item = interp.core.peek_stack.call(null,state,stack);
if(interp.core.empty_stack_QMARK_.call(null,state,stack)){
return state;
} else {
return interp.core.push_to_stack.call(null,state,stack,top_item);
}
});
interp.core._duptimes = (function interp$core$_duptimes(stack,state){
if(((((cljs.core._EQ_.call(null,stack,new cljs.core.Keyword(null,"integer","integer",-604721710))) && ((cljs.core.count.call(null,new cljs.core.Keyword(null,"integer","integer",-604721710).cljs$core$IFn$_invoke$arity$1(state)) >= (2))))) || (((cljs.core.not_EQ_.call(null,stack,new cljs.core.Keyword(null,"integer","integer",-604721710))) && ((!(interp.core.empty_stack_QMARK_.call(null,state,new cljs.core.Keyword(null,"integer","integer",-604721710))))) && ((!(interp.core.empty_stack_QMARK_.call(null,state,stack)))))))){
var n = interp.core.peek_stack.call(null,state,new cljs.core.Keyword(null,"integer","integer",-604721710));
var item_to_duplicate = interp.core.peek_stack.call(null,state,stack);
return null;
} else {
return state;
}
});
interp.core._dupitems = (function interp$core$_dupitems(stack,state){
return cljs.core.List.EMPTY;
});
interp.core._empty = (function interp$core$_empty(stack,state){
return interp.core.push_to_stack.call(null,state,new cljs.core.Keyword(null,"boolean","boolean",-1919418404),interp.core.empty_stack_QMARK_.call(null,state,stack));
});
interp.core._flush = (function interp$core$_flush(stack,state){
return cljs.core.List.EMPTY;
});
interp.core._pop = (function interp$core$_pop(stack,state){
return interp.core.pop_stack.call(null,state,stack);
});
interp.core._rot = (function interp$core$_rot(stack,state){
return cljs.core.List.EMPTY;
});
interp.core._shove = (function interp$core$_shove(stack,state){
return cljs.core.List.EMPTY;
});
interp.core._stackdepth = (function interp$core$_stackdepth(stack,state){
return cljs.core.List.EMPTY;
});
interp.core._swap = (function interp$core$_swap(stack,state){
return cljs.core.List.EMPTY;
});
interp.core._yank = (function interp$core$_yank(stack,state){
return cljs.core.List.EMPTY;
});
interp.core._yankdup = (function interp$core$_yankdup(stack,state){
return cljs.core.List.EMPTY;
});
cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"boolean_eq","boolean_eq",-1589715828),cljs.core.partial.call(null,interp.core._eq,new cljs.core.Keyword(null,"boolean","boolean",-1919418404)));

cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"char_eq","char_eq",1965096813),cljs.core.partial.call(null,interp.core._eq,new cljs.core.Keyword(null,"char","char",-641587586)));

cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"float_eq","float_eq",208245866),cljs.core.partial.call(null,interp.core._eq,new cljs.core.Keyword(null,"float","float",-1732389368)));

cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"integer_eq","integer_eq",1174436858),cljs.core.partial.call(null,interp.core._eq,new cljs.core.Keyword(null,"integer","integer",-604721710)));

cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"string_eq","string_eq",-1951643323),cljs.core.partial.call(null,interp.core._eq,new cljs.core.Keyword(null,"string","string",-1989541586)));
cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"boolean_dup","boolean_dup",-1634358073),cljs.core.partial.call(null,interp.core._dup,new cljs.core.Keyword(null,"boolean","boolean",-1919418404)));

cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"boolean_duptimes","boolean_duptimes",518337712),cljs.core.partial.call(null,interp.core._duptimes,new cljs.core.Keyword(null,"boolean","boolean",-1919418404)));

cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"boolean_dupitems","boolean_dupitems",1354040612),cljs.core.partial.call(null,interp.core._dupitems,new cljs.core.Keyword(null,"boolean","boolean",-1919418404)));

cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"boolean_empty","boolean_empty",-256338021),cljs.core.partial.call(null,interp.core._empty,new cljs.core.Keyword(null,"boolean","boolean",-1919418404)));

cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"boolean_flush","boolean_flush",1048225791),cljs.core.partial.call(null,interp.core._flush,new cljs.core.Keyword(null,"boolean","boolean",-1919418404)));

cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"boolean_pop","boolean_pop",441346969),cljs.core.partial.call(null,interp.core._pop,new cljs.core.Keyword(null,"boolean","boolean",-1919418404)));

cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"boolean_rot","boolean_rot",-1329883646),cljs.core.partial.call(null,interp.core._rot,new cljs.core.Keyword(null,"boolean","boolean",-1919418404)));

cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"boolean_shove","boolean_shove",1889960288),cljs.core.partial.call(null,interp.core._shove,new cljs.core.Keyword(null,"boolean","boolean",-1919418404)));

cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"boolean_stackdepth","boolean_stackdepth",1993810553),cljs.core.partial.call(null,interp.core._stackdepth,new cljs.core.Keyword(null,"boolean","boolean",-1919418404)));

cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"boolean_swap","boolean_swap",2065631898),cljs.core.partial.call(null,interp.core._swap,new cljs.core.Keyword(null,"boolean","boolean",-1919418404)));

cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"boolean_yank","boolean_yank",-1346298022),cljs.core.partial.call(null,interp.core._yank,new cljs.core.Keyword(null,"boolean","boolean",-1919418404)));

cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"boolean_yankdup","boolean_yankdup",1563966776),cljs.core.partial.call(null,interp.core._yankdup,new cljs.core.Keyword(null,"boolean","boolean",-1919418404)));

cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"char_dup","char_dup",967363181),cljs.core.partial.call(null,interp.core._dup,new cljs.core.Keyword(null,"char","char",-641587586)));

cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"char_duptimes","char_duptimes",753599692),cljs.core.partial.call(null,interp.core._duptimes,new cljs.core.Keyword(null,"char","char",-641587586)));

cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"char_dupitems","char_dupitems",336701273),cljs.core.partial.call(null,interp.core._dupitems,new cljs.core.Keyword(null,"char","char",-641587586)));

cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"char_empty","char_empty",-654744817),cljs.core.partial.call(null,interp.core._empty,new cljs.core.Keyword(null,"char","char",-641587586)));

cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"char_flush","char_flush",141683119),cljs.core.partial.call(null,interp.core._flush,new cljs.core.Keyword(null,"char","char",-641587586)));

cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"char_pop","char_pop",1636433182),cljs.core.partial.call(null,interp.core._pop,new cljs.core.Keyword(null,"char","char",-641587586)));

cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"char_rot","char_rot",-2039179616),cljs.core.partial.call(null,interp.core._rot,new cljs.core.Keyword(null,"char","char",-641587586)));

cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"char_shove","char_shove",899275659),cljs.core.partial.call(null,interp.core._shove,new cljs.core.Keyword(null,"char","char",-641587586)));

cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"char_stackdepth","char_stackdepth",-619186585),cljs.core.partial.call(null,interp.core._stackdepth,new cljs.core.Keyword(null,"char","char",-641587586)));

cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"char_swap","char_swap",1045438148),cljs.core.partial.call(null,interp.core._swap,new cljs.core.Keyword(null,"char","char",-641587586)));

cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"char_yank","char_yank",-2050246038),cljs.core.partial.call(null,interp.core._yank,new cljs.core.Keyword(null,"char","char",-641587586)));

cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"char_yankdup","char_yankdup",107740748),cljs.core.partial.call(null,interp.core._yankdup,new cljs.core.Keyword(null,"char","char",-641587586)));

cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"code_dup","code_dup",-690404947),cljs.core.partial.call(null,interp.core._dup,new cljs.core.Keyword(null,"code","code",1586293142)));

cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"code_duptimes","code_duptimes",-508174244),cljs.core.partial.call(null,interp.core._duptimes,new cljs.core.Keyword(null,"code","code",1586293142)));

cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"code_dupitems","code_dupitems",550124666),cljs.core.partial.call(null,interp.core._dupitems,new cljs.core.Keyword(null,"code","code",1586293142)));

cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"code_empty","code_empty",-1220702988),cljs.core.partial.call(null,interp.core._empty,new cljs.core.Keyword(null,"code","code",1586293142)));

cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"code_flush","code_flush",-1575643004),cljs.core.partial.call(null,interp.core._flush,new cljs.core.Keyword(null,"code","code",1586293142)));

cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"code_pop","code_pop",478842846),cljs.core.partial.call(null,interp.core._pop,new cljs.core.Keyword(null,"code","code",1586293142)));

cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"code_rot","code_rot",-131762650),cljs.core.partial.call(null,interp.core._rot,new cljs.core.Keyword(null,"code","code",1586293142)));

cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"code_shove","code_shove",1853432791),cljs.core.partial.call(null,interp.core._shove,new cljs.core.Keyword(null,"code","code",1586293142)));

cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"code_stackdepth","code_stackdepth",1481162736),cljs.core.partial.call(null,interp.core._stackdepth,new cljs.core.Keyword(null,"code","code",1586293142)));

cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"code_swap","code_swap",-1872021827),cljs.core.partial.call(null,interp.core._swap,new cljs.core.Keyword(null,"code","code",1586293142)));

cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"code_yank","code_yank",-892532047),cljs.core.partial.call(null,interp.core._yank,new cljs.core.Keyword(null,"code","code",1586293142)));

cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"code_yankdup","code_yankdup",1323403814),cljs.core.partial.call(null,interp.core._yankdup,new cljs.core.Keyword(null,"code","code",1586293142)));

cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"exec_dup","exec_dup",62681535),cljs.core.partial.call(null,interp.core._dup,new cljs.core.Keyword(null,"exec","exec",1625568743)));

cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"exec_duptimes","exec_duptimes",477811386),cljs.core.partial.call(null,interp.core._duptimes,new cljs.core.Keyword(null,"exec","exec",1625568743)));

cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"exec_dupitems","exec_dupitems",139360352),cljs.core.partial.call(null,interp.core._dupitems,new cljs.core.Keyword(null,"exec","exec",1625568743)));

cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"exec_empty","exec_empty",1591126237),cljs.core.partial.call(null,interp.core._empty,new cljs.core.Keyword(null,"exec","exec",1625568743)));

cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"exec_flush","exec_flush",1987904662),cljs.core.partial.call(null,interp.core._flush,new cljs.core.Keyword(null,"exec","exec",1625568743)));

cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"exec_pop","exec_pop",562498351),cljs.core.partial.call(null,interp.core._pop,new cljs.core.Keyword(null,"exec","exec",1625568743)));

cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"exec_rot","exec_rot",673414846),cljs.core.partial.call(null,interp.core._rot,new cljs.core.Keyword(null,"exec","exec",1625568743)));

cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"exec_shove","exec_shove",-1310616902),cljs.core.partial.call(null,interp.core._shove,new cljs.core.Keyword(null,"exec","exec",1625568743)));

cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"exec_stackdepth","exec_stackdepth",986160630),cljs.core.partial.call(null,interp.core._stackdepth,new cljs.core.Keyword(null,"exec","exec",1625568743)));

cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"exec_swap","exec_swap",-718701687),cljs.core.partial.call(null,interp.core._swap,new cljs.core.Keyword(null,"exec","exec",1625568743)));

cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"exec_yank","exec_yank",842629620),cljs.core.partial.call(null,interp.core._yank,new cljs.core.Keyword(null,"exec","exec",1625568743)));

cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"exec_yankdup","exec_yankdup",1173551674),cljs.core.partial.call(null,interp.core._yankdup,new cljs.core.Keyword(null,"exec","exec",1625568743)));

cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"float_dup","float_dup",-2115405680),cljs.core.partial.call(null,interp.core._dup,new cljs.core.Keyword(null,"float","float",-1732389368)));

cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"float_duptimes","float_duptimes",1809717533),cljs.core.partial.call(null,interp.core._duptimes,new cljs.core.Keyword(null,"float","float",-1732389368)));

cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"float_dupitems","float_dupitems",-1666508386),cljs.core.partial.call(null,interp.core._dupitems,new cljs.core.Keyword(null,"float","float",-1732389368)));

cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"float_empty","float_empty",1782495368),cljs.core.partial.call(null,interp.core._empty,new cljs.core.Keyword(null,"float","float",-1732389368)));

cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"float_flush","float_flush",214628950),cljs.core.partial.call(null,interp.core._flush,new cljs.core.Keyword(null,"float","float",-1732389368)));

cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"float_pop","float_pop",1750384429),cljs.core.partial.call(null,interp.core._pop,new cljs.core.Keyword(null,"float","float",-1732389368)));

cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"float_rot","float_rot",-1744864299),cljs.core.partial.call(null,interp.core._rot,new cljs.core.Keyword(null,"float","float",-1732389368)));

cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"float_shove","float_shove",836880973),cljs.core.partial.call(null,interp.core._shove,new cljs.core.Keyword(null,"float","float",-1732389368)));

cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"float_stackdepth","float_stackdepth",-440720473),cljs.core.partial.call(null,interp.core._stackdepth,new cljs.core.Keyword(null,"float","float",-1732389368)));

cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"float_swap","float_swap",-1552767599),cljs.core.partial.call(null,interp.core._swap,new cljs.core.Keyword(null,"float","float",-1732389368)));

cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"float_yank","float_yank",-988587368),cljs.core.partial.call(null,interp.core._yank,new cljs.core.Keyword(null,"float","float",-1732389368)));

cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"float_yankdup","float_yankdup",-283939293),cljs.core.partial.call(null,interp.core._yankdup,new cljs.core.Keyword(null,"float","float",-1732389368)));

cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"integer_dup","integer_dup",303193043),cljs.core.partial.call(null,interp.core._dup,new cljs.core.Keyword(null,"integer","integer",-604721710)));

cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"integer_duptimes","integer_duptimes",-42392881),cljs.core.partial.call(null,interp.core._duptimes,new cljs.core.Keyword(null,"integer","integer",-604721710)));

cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"integer_dupitems","integer_dupitems",-1126872963),cljs.core.partial.call(null,interp.core._dupitems,new cljs.core.Keyword(null,"integer","integer",-604721710)));

cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"integer_empty","integer_empty",1007164020),cljs.core.partial.call(null,interp.core._empty,new cljs.core.Keyword(null,"integer","integer",-604721710)));

cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"integer_flush","integer_flush",-1677139443),cljs.core.partial.call(null,interp.core._flush,new cljs.core.Keyword(null,"integer","integer",-604721710)));

cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"integer_pop","integer_pop",-1086812652),cljs.core.partial.call(null,interp.core._pop,new cljs.core.Keyword(null,"integer","integer",-604721710)));

cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"integer_rot","integer_rot",-2068333117),cljs.core.partial.call(null,interp.core._rot,new cljs.core.Keyword(null,"integer","integer",-604721710)));

cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"integer_shove","integer_shove",-517638781),cljs.core.partial.call(null,interp.core._shove,new cljs.core.Keyword(null,"integer","integer",-604721710)));

cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"integer_stackdepth","integer_stackdepth",-1211571578),cljs.core.partial.call(null,interp.core._stackdepth,new cljs.core.Keyword(null,"integer","integer",-604721710)));

cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"integer_swap","integer_swap",997146099),cljs.core.partial.call(null,interp.core._swap,new cljs.core.Keyword(null,"integer","integer",-604721710)));

cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"integer_yank","integer_yank",149170152),cljs.core.partial.call(null,interp.core._yank,new cljs.core.Keyword(null,"integer","integer",-604721710)));

cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"integer_yankdup","integer_yankdup",-1604399526),cljs.core.partial.call(null,interp.core._yankdup,new cljs.core.Keyword(null,"integer","integer",-604721710)));

cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"string_dup","string_dup",1221144664),cljs.core.partial.call(null,interp.core._dup,new cljs.core.Keyword(null,"string","string",-1989541586)));

cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"string_duptimes","string_duptimes",1784156372),cljs.core.partial.call(null,interp.core._duptimes,new cljs.core.Keyword(null,"string","string",-1989541586)));

cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"string_dupitems","string_dupitems",416047588),cljs.core.partial.call(null,interp.core._dupitems,new cljs.core.Keyword(null,"string","string",-1989541586)));

cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"string_empty","string_empty",820100879),cljs.core.partial.call(null,interp.core._empty,new cljs.core.Keyword(null,"string","string",-1989541586)));

cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"string_flush","string_flush",2132135546),cljs.core.partial.call(null,interp.core._flush,new cljs.core.Keyword(null,"string","string",-1989541586)));

cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"string_pop","string_pop",303912938),cljs.core.partial.call(null,interp.core._pop,new cljs.core.Keyword(null,"string","string",-1989541586)));

cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"string_rot","string_rot",-1908566605),cljs.core.partial.call(null,interp.core._rot,new cljs.core.Keyword(null,"string","string",-1989541586)));

cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"string_shove","string_shove",1346951453),cljs.core.partial.call(null,interp.core._shove,new cljs.core.Keyword(null,"string","string",-1989541586)));

cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"string_stackdepth","string_stackdepth",-1598140311),cljs.core.partial.call(null,interp.core._stackdepth,new cljs.core.Keyword(null,"string","string",-1989541586)));

cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"string_swap","string_swap",1064168328),cljs.core.partial.call(null,interp.core._swap,new cljs.core.Keyword(null,"string","string",-1989541586)));

cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"string_yank","string_yank",-1266134927),cljs.core.partial.call(null,interp.core._yank,new cljs.core.Keyword(null,"string","string",-1989541586)));

cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"string_yankdup","string_yankdup",-1824895121),cljs.core.partial.call(null,interp.core._yankdup,new cljs.core.Keyword(null,"string","string",-1989541586)));
cljs.core.swap_BANG_.call(null,interp.globals.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"exec_dup","exec_dup",62681535),(function (state){
if(interp.core.empty_stack_QMARK_.call(null,state,new cljs.core.Keyword(null,"exec","exec",1625568743))){
return state;
} else {
return interp.core.push_to_stack.call(null,state,new cljs.core.Keyword(null,"exec","exec",1625568743),(new cljs.core.List(null,cljs.core.first.call(null,new cljs.core.Keyword(null,"exec","exec",1625568743).cljs$core$IFn$_invoke$arity$1(state)),null,(1),null)));
}
}));
/**
 * Takes a Push state and executes the next instruction on the exec stack.
 */
interp.core.interpret_one_step = (function interp$core$interpret_one_step(state){
var popped_state_30431 = interp.core.pop_stack.call(null,state,new cljs.core.Keyword(null,"exec","exec",1625568743));
var first_instruction_raw_30432 = cljs.core.first.call(null,new cljs.core.Keyword(null,"exec","exec",1625568743).cljs$core$IFn$_invoke$arity$1(state));
var first_instruction_30433 = (((first_instruction_raw_30432 instanceof cljs.core.Keyword))?first_instruction_raw_30432.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,interp.globals.instruction_table)):first_instruction_raw_30432);
cljs.core.println.call(null,cljs.core.type.call(null,first_instruction_30433),first_instruction_30433);

if(cljs.core.fn_QMARK_.call(null,first_instruction_30433)){
cljs.core.reset_BANG_.call(null,interp.core.push_state,first_instruction_30433.call(null,popped_state_30431));
} else {
if(typeof first_instruction_30433 === 'number'){
cljs.core.reset_BANG_.call(null,interp.core.push_state,interp.core.push_to_stack.call(null,popped_state_30431,new cljs.core.Keyword(null,"integer","integer",-604721710),(first_instruction_30433 | (0))));
} else {
if(cljs.core.integer_QMARK_.call(null,first_instruction_30433)){
cljs.core.reset_BANG_.call(null,interp.core.push_state,interp.core.push_to_stack.call(null,popped_state_30431,new cljs.core.Keyword(null,"integer","integer",-604721710),first_instruction_30433));
} else {
if(typeof first_instruction_30433 === 'string'){
cljs.core.reset_BANG_.call(null,interp.core.push_state,interp.core.push_to_stack.call(null,popped_state_30431,new cljs.core.Keyword(null,"string","string",-1989541586),first_instruction_30433));
} else {
if(cljs.core.seq_QMARK_.call(null,first_instruction_30433)){
cljs.core.reset_BANG_.call(null,interp.core.push_state,cljs.core.update.call(null,popped_state_30431,new cljs.core.Keyword(null,"exec","exec",1625568743),(function (p1__30430_SHARP_,p2__30429_SHARP_){
return cljs.core.concat.call(null,p2__30429_SHARP_,p1__30430_SHARP_);
}),first_instruction_30433));
} else {
if(((cljs.core._EQ_.call(null,first_instruction_30433,true)) || (cljs.core._EQ_.call(null,first_instruction_30433,false)))){
cljs.core.reset_BANG_.call(null,interp.core.push_state,interp.core.push_to_stack.call(null,popped_state_30431,new cljs.core.Keyword(null,"boolean","boolean",-1919418404),first_instruction_30433));
} else {
throw (new Error(["Unrecognized Push instruction in program: ",cljs.core.name.call(null,first_instruction_raw_30432)].join('')));

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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.textbox","input.textbox",-1447475213),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,interp.core.push_code),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__30434_SHARP_){
return cljs.core.reset_BANG_.call(null,interp.core.push_code,p1__30434_SHARP_.target.value);
})], null)], null)], null);
});
interp.core.divvy_stack = (function interp$core$divvy_stack(stack){
var iter__4529__auto__ = (function interp$core$divvy_stack_$_iter__30435(s__30436){
return (new cljs.core.LazySeq(null,(function (){
var s__30436__$1 = s__30436;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__30436__$1);
if(temp__5735__auto__){
var s__30436__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__30436__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__30436__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__30438 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__30437 = (0);
while(true){
if((i__30437 < size__4528__auto__)){
var items = cljs.core._nth.call(null,c__4527__auto__,i__30437);
cljs.core.chunk_append.call(null,b__30438,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(items)," "].join(''));

var G__30439 = (i__30437 + (1));
i__30437 = G__30439;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30438),interp$core$divvy_stack_$_iter__30435.call(null,cljs.core.chunk_rest.call(null,s__30436__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30438),null);
}
} else {
var items = cljs.core.first.call(null,s__30436__$2);
return cljs.core.cons.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(items)," "].join(''),interp$core$divvy_stack_$_iter__30435.call(null,cljs.core.rest.call(null,s__30436__$2)));
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
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.grid-container","div.grid-container",-1126502510),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.main","div.main",-117780813),"Push Interpreter",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [interp.core.int_text], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),["Current Step: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,interp.core.current_step)),". Step-limit: "].join(''),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,interp.core.step_limit),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__30440_SHARP_){
return cljs.core.reset_BANG_.call(null,interp.core.step_limit,p1__30440_SHARP_.target.value);
})], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [interp.core.load_button], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [interp.core.interpret_one_step_button], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [interp.core.interpret_button], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [interp.core.output_component], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.instruction-list","div.instruction-list",-800111947),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Instruction List:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.instructions","div.instructions",-526747560)," :integer_add | :integer_mult | :integer_subtract | :integer_quot | :integer_gt | :integer_gte\n    | :integer_lt | :integer_lte |  :integer_mod | :integer_max | :integer_min | :integer_fromboolean | :integer_fromstring\n     | :integer_inc | :integer_dec | :boolean_and | :boolean_or | :boolean_not | :boolean_xor |\n      :boolean_invert_first_then_and | :boolean_frominteger | :string_= | :string_concat | :string_drop | :string_includes? |\n      :string_length | :string_reverse | :string_take | :[any]_dup | :[any]_duptimes | :[any]_dupitems | :[any]_empty |\n      :[any]_flush | :[any]_pop | :[any]_rot | :[any]_shove | :[any]_anydepth | :[any]_swap | :[any]_yank | :[any]_yankdup "], null)], null)], null);
});
interp.core.mount_root = (function interp$core$mount_root(){
return reagent.dom.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [interp.core.home_page], null),document.getElementById("app"));
});
interp.core.init_BANG_ = (function interp$core$init_BANG_(){
return interp.core.mount_root.call(null);
});

//# sourceMappingURL=core.js.map?rel=1593944574998
