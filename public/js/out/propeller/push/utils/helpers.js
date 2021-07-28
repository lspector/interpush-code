// Compiled by ClojureScript 1.10.764 {}
goog.provide('propeller.push.utils.helpers');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('propeller.push.core');
goog.require('propeller.push.state');
goog.require('propeller.push.utils.globals');
goog.require('goog.string');
goog.require('goog.string.format');
propeller.push.utils.helpers.keep_number_reasonable = (function propeller$push$utils$helpers$keep_number_reasonable(n){
if(cljs.core.integer_QMARK_.call(null,n)){
if((n > propeller.push.utils.globals.max_number_magnitude)){
return cljs.core.long$.call(null,propeller.push.utils.globals.max_number_magnitude);
} else {
if((n < (- propeller.push.utils.globals.max_number_magnitude))){
return cljs.core.long$.call(null,(- propeller.push.utils.globals.max_number_magnitude));
} else {
return n;

}
}
} else {
if(cljs.core.truth_(isNaN(n))){
return 0.0;
} else {
if(((cljs.core._EQ_.call(null,n,Infinity)) || ((n > propeller.push.utils.globals.max_number_magnitude)))){
return propeller.push.utils.globals.max_number_magnitude;
} else {
if(((cljs.core._EQ_.call(null,n,-Infinity)) || ((n < (- propeller.push.utils.globals.max_number_magnitude))))){
return (- propeller.push.utils.globals.max_number_magnitude);
} else {
if(((((- propeller.push.utils.globals.min_number_magnitude) < n)) && ((n < propeller.push.utils.globals.min_number_magnitude)))){
return 0.0;
} else {
return n;

}
}
}
}

}
});
propeller.push.utils.helpers.reasonable_string_length_QMARK_ = (function propeller$push$utils$helpers$reasonable_string_length_QMARK_(string){
var length = cljs.core.count.call(null,string);
return (length <= propeller.push.utils.globals.max_string_length);
});
propeller.push.utils.helpers.reasonable_vector_length_QMARK_ = (function propeller$push$utils$helpers$reasonable_vector_length_QMARK_(vector){
var length = cljs.core.count.call(null,vector);
return (length <= propeller.push.utils.globals.max_vector_length);
});
propeller.push.utils.helpers.get_args_from_stacks = (function propeller$push$utils$helpers$get_args_from_stacks(state,stacks){
var state__$1 = state;
var stacks__$1 = cljs.core.reverse.call(null,stacks);
var args = cljs.core.List.EMPTY;
while(true){
if(cljs.core.empty_QMARK_.call(null,stacks__$1)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),state__$1,new cljs.core.Keyword(null,"args","args",1315556576),args], null);
} else {
var current_stack = cljs.core.first.call(null,stacks__$1);
if(propeller.push.state.empty_stack_QMARK_.call(null,state__$1,current_stack)){
return new cljs.core.Keyword(null,"not-enough-args","not-enough-args",-322062685);
} else {
var G__25703 = propeller.push.state.pop_stack.call(null,state__$1,current_stack);
var G__25704 = cljs.core.rest.call(null,stacks__$1);
var G__25705 = cljs.core.conj.call(null,args,propeller.push.state.peek_stack.call(null,state__$1,current_stack));
state__$1 = G__25703;
stacks__$1 = G__25704;
args = G__25705;
continue;
}
}
break;
}
});
propeller.push.utils.helpers.make_instruction = (function propeller$push$utils$helpers$make_instruction(state,function$,arg_stacks,return_stack){
var popped_args = propeller.push.utils.helpers.get_args_from_stacks.call(null,state,arg_stacks);
if(cljs.core._EQ_.call(null,popped_args,new cljs.core.Keyword(null,"not-enough-args","not-enough-args",-322062685))){
return state;
} else {
var result = cljs.core.apply.call(null,function$,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(popped_args));
var new_state = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(popped_args);
if(typeof result === 'number'){
return propeller.push.state.push_to_stack.call(null,new_state,return_stack,propeller.push.utils.helpers.keep_number_reasonable.call(null,result));
} else {
if(((typeof result === 'string') && ((!(propeller.push.utils.helpers.reasonable_string_length_QMARK_.call(null,result)))))){
return state;
} else {
if(((cljs.core.vector_QMARK_.call(null,result)) && ((!(propeller.push.utils.helpers.reasonable_vector_length_QMARK_.call(null,result)))))){
return state;
} else {
if(cljs.core._EQ_.call(null,result,new cljs.core.Keyword(null,"ignore-instruction","ignore-instruction",-68519031))){
return state;
} else {
return propeller.push.state.push_to_stack.call(null,new_state,return_stack,result);

}
}
}
}
}
});
propeller.push.utils.helpers.get_stack_instructions = (function propeller$push$utils$helpers$get_stack_instructions(stacks){
var seq__25706_25732 = cljs.core.seq.call(null,cljs.core.deref.call(null,propeller.push.core.instruction_table));
var chunk__25707_25733 = null;
var count__25708_25734 = (0);
var i__25709_25735 = (0);
while(true){
if((i__25709_25735 < count__25708_25734)){
var vec__25716_25736 = cljs.core._nth.call(null,chunk__25707_25733,i__25709_25735);
var instruction_name_25737 = cljs.core.nth.call(null,vec__25716_25736,(0),null);
var function_25738 = cljs.core.nth.call(null,vec__25716_25736,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"stacks","stacks",-456633410).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,function_25738)))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.string.format("ERROR: Instruction %s does not have :stacks defined in metadata.",cljs.core.name.call(null,instruction_name_25737))),"\n","(:stacks (meta function))"].join('')));
}


var G__25739 = seq__25706_25732;
var G__25740 = chunk__25707_25733;
var G__25741 = count__25708_25734;
var G__25742 = (i__25709_25735 + (1));
seq__25706_25732 = G__25739;
chunk__25707_25733 = G__25740;
count__25708_25734 = G__25741;
i__25709_25735 = G__25742;
continue;
} else {
var temp__5735__auto___25743 = cljs.core.seq.call(null,seq__25706_25732);
if(temp__5735__auto___25743){
var seq__25706_25744__$1 = temp__5735__auto___25743;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25706_25744__$1)){
var c__4556__auto___25745 = cljs.core.chunk_first.call(null,seq__25706_25744__$1);
var G__25746 = cljs.core.chunk_rest.call(null,seq__25706_25744__$1);
var G__25747 = c__4556__auto___25745;
var G__25748 = cljs.core.count.call(null,c__4556__auto___25745);
var G__25749 = (0);
seq__25706_25732 = G__25746;
chunk__25707_25733 = G__25747;
count__25708_25734 = G__25748;
i__25709_25735 = G__25749;
continue;
} else {
var vec__25719_25750 = cljs.core.first.call(null,seq__25706_25744__$1);
var instruction_name_25751 = cljs.core.nth.call(null,vec__25719_25750,(0),null);
var function_25752 = cljs.core.nth.call(null,vec__25719_25750,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"stacks","stacks",-456633410).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,function_25752)))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.string.format("ERROR: Instruction %s does not have :stacks defined in metadata.",cljs.core.name.call(null,instruction_name_25751))),"\n","(:stacks (meta function))"].join('')));
}


var G__25753 = cljs.core.next.call(null,seq__25706_25744__$1);
var G__25754 = null;
var G__25755 = (0);
var G__25756 = (0);
seq__25706_25732 = G__25753;
chunk__25707_25733 = G__25754;
count__25708_25734 = G__25755;
i__25709_25735 = G__25756;
continue;
}
} else {
}
}
break;
}

var iter__4529__auto__ = (function propeller$push$utils$helpers$get_stack_instructions_$_iter__25722(s__25723){
return (new cljs.core.LazySeq(null,(function (){
var s__25723__$1 = s__25723;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__25723__$1);
if(temp__5735__auto__){
var s__25723__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__25723__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__25723__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__25725 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__25724 = (0);
while(true){
if((i__25724 < size__4528__auto__)){
var vec__25726 = cljs.core._nth.call(null,c__4527__auto__,i__25724);
var instruction_name = cljs.core.nth.call(null,vec__25726,(0),null);
var function$ = cljs.core.nth.call(null,vec__25726,(1),null);
if(clojure.set.subset_QMARK_.call(null,new cljs.core.Keyword(null,"stacks","stacks",-456633410).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,function$)),stacks)){
cljs.core.chunk_append.call(null,b__25725,instruction_name);

var G__25757 = (i__25724 + (1));
i__25724 = G__25757;
continue;
} else {
var G__25758 = (i__25724 + (1));
i__25724 = G__25758;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25725),propeller$push$utils$helpers$get_stack_instructions_$_iter__25722.call(null,cljs.core.chunk_rest.call(null,s__25723__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25725),null);
}
} else {
var vec__25729 = cljs.core.first.call(null,s__25723__$2);
var instruction_name = cljs.core.nth.call(null,vec__25729,(0),null);
var function$ = cljs.core.nth.call(null,vec__25729,(1),null);
if(clojure.set.subset_QMARK_.call(null,new cljs.core.Keyword(null,"stacks","stacks",-456633410).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,function$)),stacks)){
return cljs.core.cons.call(null,instruction_name,propeller$push$utils$helpers$get_stack_instructions_$_iter__25722.call(null,cljs.core.rest.call(null,s__25723__$2)));
} else {
var G__25759 = cljs.core.rest.call(null,s__25723__$2);
s__25723__$1 = G__25759;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__.call(null,cljs.core.deref.call(null,propeller.push.core.instruction_table));
});
propeller.push.utils.helpers.get_literal_type = (function propeller$push$utils$helpers$get_literal_type(data){
var literals = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boolean","boolean",-1919418404),(function (thing){
return ((thing === true) || (thing === false));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"integer","integer",-604721710),cljs.core.integer_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"float","float",-1732389368),cljs.core.float_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"string","string",-1989541586),cljs.core.string_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"char","char",-641587586),cljs.core.char_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector_boolean","vector_boolean",-1460932838),(function (thing){
return ((cljs.core.vector_QMARK_.call(null,thing)) && (((cljs.core.first.call(null,thing) === true) || (cljs.core.first.call(null,thing) === false))));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector_float","vector_float",1822584650),(function (thing){
return ((cljs.core.vector_QMARK_.call(null,thing)) && (cljs.core.float_QMARK_.call(null,cljs.core.first.call(null,thing))));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector_integer","vector_integer",-233801340),(function (thing){
return ((cljs.core.vector_QMARK_.call(null,thing)) && (cljs.core.integer_QMARK_.call(null,cljs.core.first.call(null,thing))));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector_string","vector_string",-1776005283),(function (thing){
return ((cljs.core.vector_QMARK_.call(null,thing)) && (typeof cljs.core.first.call(null,thing) === 'string'));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"generic-vector","generic-vector",1279149583),(function (thing){
return cljs.core._EQ_.call(null,cljs.core.PersistentVector.EMPTY,thing);
})], null)], null);
return cljs.core.first.call(null,(function (){var iter__4529__auto__ = (function propeller$push$utils$helpers$get_literal_type_$_iter__25760(s__25761){
return (new cljs.core.LazySeq(null,(function (){
var s__25761__$1 = s__25761;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__25761__$1);
if(temp__5735__auto__){
var s__25761__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__25761__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__25761__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__25763 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__25762 = (0);
while(true){
if((i__25762 < size__4528__auto__)){
var vec__25764 = cljs.core._nth.call(null,c__4527__auto__,i__25762);
var stack = cljs.core.nth.call(null,vec__25764,(0),null);
var function$ = cljs.core.nth.call(null,vec__25764,(1),null);
if(cljs.core.truth_(function$.call(null,data))){
cljs.core.chunk_append.call(null,b__25763,stack);

var G__25770 = (i__25762 + (1));
i__25762 = G__25770;
continue;
} else {
var G__25771 = (i__25762 + (1));
i__25762 = G__25771;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25763),propeller$push$utils$helpers$get_literal_type_$_iter__25760.call(null,cljs.core.chunk_rest.call(null,s__25761__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25763),null);
}
} else {
var vec__25767 = cljs.core.first.call(null,s__25761__$2);
var stack = cljs.core.nth.call(null,vec__25767,(0),null);
var function$ = cljs.core.nth.call(null,vec__25767,(1),null);
if(cljs.core.truth_(function$.call(null,data))){
return cljs.core.cons.call(null,stack,propeller$push$utils$helpers$get_literal_type_$_iter__25760.call(null,cljs.core.rest.call(null,s__25761__$2)));
} else {
var G__25772 = cljs.core.rest.call(null,s__25761__$2);
s__25761__$1 = G__25772;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__.call(null,literals);
})());
});
/**
 * Returns the literal stack corresponding to some vector stack.
 */
propeller.push.utils.helpers.get_vector_literal_type = (function propeller$push$utils$helpers$get_vector_literal_type(vector_stack){
return cljs.core.get.call(null,propeller.push.state.vec_stacks,vector_stack);
});
propeller.push.utils.helpers.print_state = (function propeller$push$utils$helpers$print_state(state){
var seq__25773 = cljs.core.seq.call(null,cljs.core.keys.call(null,propeller.push.state.empty_state));
var chunk__25774 = null;
var count__25775 = (0);
var i__25776 = (0);
while(true){
if((i__25776 < count__25775)){
var stack = cljs.core._nth.call(null,chunk__25774,i__25776);
cljs.core.print.call(null,goog.string.format("%-15s = ",stack));

cljs.core.prn.call(null,(cljs.core.truth_(cljs.core.get.call(null,state,stack))?cljs.core.get.call(null,state,stack):cljs.core.List.EMPTY));

cljs.core.flush.call(null);


var G__25777 = seq__25773;
var G__25778 = chunk__25774;
var G__25779 = count__25775;
var G__25780 = (i__25776 + (1));
seq__25773 = G__25777;
chunk__25774 = G__25778;
count__25775 = G__25779;
i__25776 = G__25780;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__25773);
if(temp__5735__auto__){
var seq__25773__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25773__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__25773__$1);
var G__25781 = cljs.core.chunk_rest.call(null,seq__25773__$1);
var G__25782 = c__4556__auto__;
var G__25783 = cljs.core.count.call(null,c__4556__auto__);
var G__25784 = (0);
seq__25773 = G__25781;
chunk__25774 = G__25782;
count__25775 = G__25783;
i__25776 = G__25784;
continue;
} else {
var stack = cljs.core.first.call(null,seq__25773__$1);
cljs.core.print.call(null,goog.string.format("%-15s = ",stack));

cljs.core.prn.call(null,(cljs.core.truth_(cljs.core.get.call(null,state,stack))?cljs.core.get.call(null,state,stack):cljs.core.List.EMPTY));

cljs.core.flush.call(null);


var G__25785 = cljs.core.next.call(null,seq__25773__$1);
var G__25786 = null;
var G__25787 = (0);
var G__25788 = (0);
seq__25773 = G__25785;
chunk__25774 = G__25786;
count__25775 = G__25787;
i__25776 = G__25788;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=helpers.js.map?rel=1627432842000
