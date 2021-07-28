// Compiled by ClojureScript 1.10.764 {}
goog.provide('propeller.push.instructions.input_output');
goog.require('cljs.core');
goog.require('propeller.push.state');
goog.require('propeller.push.utils.helpers');
goog.require('propeller.push.utils.macros');
propeller.push.instructions.input_output.handle_input_instruction = (function propeller$push$instructions$input_output$handle_input_instruction(state,instruction){
if(cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(state),instruction)){
var input = instruction.call(null,new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(state));
return propeller.push.state.push_to_stack.call(null,state,new cljs.core.Keyword(null,"exec","exec",1625568743),input);
} else {
throw Error(["Undefined instruction ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(instruction)].join(''));
}
});
cljs.core.swap_BANG_.call(null,propeller.push.core.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"print_newline","print_newline",-1016300999),cljs.core.with_meta((function (state){
var current_output = propeller.push.state.peek_stack.call(null,state,new cljs.core.Keyword(null,"print","print",1299562414));
var popped_state = propeller.push.state.pop_stack.call(null,state,new cljs.core.Keyword(null,"print","print",1299562414));
return propeller.push.state.push_to_stack.call(null,popped_state,new cljs.core.Keyword(null,"print","print",1299562414),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(current_output),"\n"].join(''));
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"print","print",1299562414)], null)], null)));
propeller.push.instructions.input_output._print = cljs.core.with_meta((function propeller$push$instructions$input_output$_print(stack,state){
if(propeller.push.state.empty_stack_QMARK_.call(null,state,stack)){
return state;
} else {
var top_item = propeller.push.state.peek_stack.call(null,state,stack);
var top_item_str = ((((typeof top_item === 'string') || (cljs.core.char_QMARK_.call(null,top_item))))?top_item:cljs.core.pr_str.call(null,top_item));
var current_output = propeller.push.state.peek_stack.call(null,state,new cljs.core.Keyword(null,"print","print",1299562414));
var popped_state = propeller.push.state.pop_stack.call(null,propeller.push.state.pop_stack.call(null,state,stack),new cljs.core.Keyword(null,"print","print",1299562414));
return propeller.push.state.push_to_stack.call(null,popped_state,new cljs.core.Keyword(null,"print","print",1299562414),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(current_output),cljs.core.str.cljs$core$IFn$_invoke$arity$1(top_item_str)].join(''));
}
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"print","print",1299562414)], null),new cljs.core.Keyword(null,"name","name",1843675177),"_print"], null));
var seq__25987_26003 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boolean","boolean",-1919418404),new cljs.core.Keyword(null,"char","char",-641587586),new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"exec","exec",1625568743),new cljs.core.Keyword(null,"float","float",-1732389368),new cljs.core.Keyword(null,"integer","integer",-604721710),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"vector_boolean","vector_boolean",-1460932838),new cljs.core.Keyword(null,"vector_float","vector_float",1822584650),new cljs.core.Keyword(null,"vector_integer","vector_integer",-233801340),new cljs.core.Keyword(null,"vector_string","vector_string",-1776005283)], null));
var chunk__25994_26004 = null;
var count__25995_26005 = (0);
var i__25996_26006 = (0);
while(true){
if((i__25996_26006 < count__25995_26005)){
var stack__25975__auto___26007 = cljs.core._nth.call(null,chunk__25994_26004,i__25996_26006);
var seq__25997_26008 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [propeller.push.instructions.input_output._print], null));
var chunk__25999_26009 = null;
var count__26000_26010 = (0);
var i__26001_26011 = (0);
while(true){
if((i__26001_26011 < count__26000_26010)){
var func__25976__auto___26012 = cljs.core._nth.call(null,chunk__25999_26009,i__26001_26011);
var instruction_name__25977__auto___26013 = cljs.core.keyword.call(null,[cljs.core.name.call(null,stack__25975__auto___26007),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,func__25976__auto___26012)))].join(''));
var metadata__25978__auto___26014 = ((function (seq__25997_26008,chunk__25999_26009,count__26000_26010,i__26001_26011,seq__25987_26003,chunk__25994_26004,count__25995_26005,i__25996_26006,instruction_name__25977__auto___26013,func__25976__auto___26012,stack__25975__auto___26007){
return (function (p1__25968__25969__auto__){
return cljs.core.dissoc.call(null,p1__25968__25969__auto__,new cljs.core.Keyword(null,"name","name",1843675177));
});})(seq__25997_26008,chunk__25999_26009,count__26000_26010,i__26001_26011,seq__25987_26003,chunk__25994_26004,count__25995_26005,i__25996_26006,instruction_name__25977__auto___26013,func__25976__auto___26012,stack__25975__auto___26007))
.call(null,cljs.core.assoc_in.call(null,cljs.core.meta.call(null,func__25976__auto___26012),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stacks","stacks",-456633410)], null),cljs.core.set.call(null,cljs.core.cons.call(null,stack__25975__auto___26007,cljs.core.replace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elem","elem",618631056),propeller.push.utils.helpers.get_vector_literal_type.call(null,stack__25975__auto___26007)], null),new cljs.core.Keyword(null,"stacks","stacks",-456633410).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,func__25976__auto___26012)))))));
var new_func__25979__auto___26015 = cljs.core.with_meta.call(null,cljs.core.partial.call(null,func__25976__auto___26012,stack__25975__auto___26007),metadata__25978__auto___26014);
cljs.core.swap_BANG_.call(null,propeller.push.core.instruction_table,cljs.core.assoc,instruction_name__25977__auto___26013,new_func__25979__auto___26015);


var G__26016 = seq__25997_26008;
var G__26017 = chunk__25999_26009;
var G__26018 = count__26000_26010;
var G__26019 = (i__26001_26011 + (1));
seq__25997_26008 = G__26016;
chunk__25999_26009 = G__26017;
count__26000_26010 = G__26018;
i__26001_26011 = G__26019;
continue;
} else {
var temp__5735__auto___26020 = cljs.core.seq.call(null,seq__25997_26008);
if(temp__5735__auto___26020){
var seq__25997_26021__$1 = temp__5735__auto___26020;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25997_26021__$1)){
var c__4556__auto___26022 = cljs.core.chunk_first.call(null,seq__25997_26021__$1);
var G__26023 = cljs.core.chunk_rest.call(null,seq__25997_26021__$1);
var G__26024 = c__4556__auto___26022;
var G__26025 = cljs.core.count.call(null,c__4556__auto___26022);
var G__26026 = (0);
seq__25997_26008 = G__26023;
chunk__25999_26009 = G__26024;
count__26000_26010 = G__26025;
i__26001_26011 = G__26026;
continue;
} else {
var func__25976__auto___26027 = cljs.core.first.call(null,seq__25997_26021__$1);
var instruction_name__25977__auto___26028 = cljs.core.keyword.call(null,[cljs.core.name.call(null,stack__25975__auto___26007),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,func__25976__auto___26027)))].join(''));
var metadata__25978__auto___26029 = ((function (seq__25997_26008,chunk__25999_26009,count__26000_26010,i__26001_26011,seq__25987_26003,chunk__25994_26004,count__25995_26005,i__25996_26006,instruction_name__25977__auto___26028,func__25976__auto___26027,seq__25997_26021__$1,temp__5735__auto___26020,stack__25975__auto___26007){
return (function (p1__25968__25969__auto__){
return cljs.core.dissoc.call(null,p1__25968__25969__auto__,new cljs.core.Keyword(null,"name","name",1843675177));
});})(seq__25997_26008,chunk__25999_26009,count__26000_26010,i__26001_26011,seq__25987_26003,chunk__25994_26004,count__25995_26005,i__25996_26006,instruction_name__25977__auto___26028,func__25976__auto___26027,seq__25997_26021__$1,temp__5735__auto___26020,stack__25975__auto___26007))
.call(null,cljs.core.assoc_in.call(null,cljs.core.meta.call(null,func__25976__auto___26027),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stacks","stacks",-456633410)], null),cljs.core.set.call(null,cljs.core.cons.call(null,stack__25975__auto___26007,cljs.core.replace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elem","elem",618631056),propeller.push.utils.helpers.get_vector_literal_type.call(null,stack__25975__auto___26007)], null),new cljs.core.Keyword(null,"stacks","stacks",-456633410).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,func__25976__auto___26027)))))));
var new_func__25979__auto___26030 = cljs.core.with_meta.call(null,cljs.core.partial.call(null,func__25976__auto___26027,stack__25975__auto___26007),metadata__25978__auto___26029);
cljs.core.swap_BANG_.call(null,propeller.push.core.instruction_table,cljs.core.assoc,instruction_name__25977__auto___26028,new_func__25979__auto___26030);


var G__26031 = cljs.core.next.call(null,seq__25997_26021__$1);
var G__26032 = null;
var G__26033 = (0);
var G__26034 = (0);
seq__25997_26008 = G__26031;
chunk__25999_26009 = G__26032;
count__26000_26010 = G__26033;
i__26001_26011 = G__26034;
continue;
}
} else {
}
}
break;
}

var G__26035 = seq__25987_26003;
var G__26036 = chunk__25994_26004;
var G__26037 = count__25995_26005;
var G__26038 = (i__25996_26006 + (1));
seq__25987_26003 = G__26035;
chunk__25994_26004 = G__26036;
count__25995_26005 = G__26037;
i__25996_26006 = G__26038;
continue;
} else {
var temp__5735__auto___26039 = cljs.core.seq.call(null,seq__25987_26003);
if(temp__5735__auto___26039){
var seq__25987_26040__$1 = temp__5735__auto___26039;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25987_26040__$1)){
var c__4556__auto___26041 = cljs.core.chunk_first.call(null,seq__25987_26040__$1);
var G__26042 = cljs.core.chunk_rest.call(null,seq__25987_26040__$1);
var G__26043 = c__4556__auto___26041;
var G__26044 = cljs.core.count.call(null,c__4556__auto___26041);
var G__26045 = (0);
seq__25987_26003 = G__26042;
chunk__25994_26004 = G__26043;
count__25995_26005 = G__26044;
i__25996_26006 = G__26045;
continue;
} else {
var stack__25975__auto___26046 = cljs.core.first.call(null,seq__25987_26040__$1);
var seq__25988_26047 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [propeller.push.instructions.input_output._print], null));
var chunk__25990_26048 = null;
var count__25991_26049 = (0);
var i__25992_26050 = (0);
while(true){
if((i__25992_26050 < count__25991_26049)){
var func__25976__auto___26051 = cljs.core._nth.call(null,chunk__25990_26048,i__25992_26050);
var instruction_name__25977__auto___26052 = cljs.core.keyword.call(null,[cljs.core.name.call(null,stack__25975__auto___26046),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,func__25976__auto___26051)))].join(''));
var metadata__25978__auto___26053 = ((function (seq__25988_26047,chunk__25990_26048,count__25991_26049,i__25992_26050,seq__25987_26003,chunk__25994_26004,count__25995_26005,i__25996_26006,instruction_name__25977__auto___26052,func__25976__auto___26051,stack__25975__auto___26046,seq__25987_26040__$1,temp__5735__auto___26039){
return (function (p1__25968__25969__auto__){
return cljs.core.dissoc.call(null,p1__25968__25969__auto__,new cljs.core.Keyword(null,"name","name",1843675177));
});})(seq__25988_26047,chunk__25990_26048,count__25991_26049,i__25992_26050,seq__25987_26003,chunk__25994_26004,count__25995_26005,i__25996_26006,instruction_name__25977__auto___26052,func__25976__auto___26051,stack__25975__auto___26046,seq__25987_26040__$1,temp__5735__auto___26039))
.call(null,cljs.core.assoc_in.call(null,cljs.core.meta.call(null,func__25976__auto___26051),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stacks","stacks",-456633410)], null),cljs.core.set.call(null,cljs.core.cons.call(null,stack__25975__auto___26046,cljs.core.replace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elem","elem",618631056),propeller.push.utils.helpers.get_vector_literal_type.call(null,stack__25975__auto___26046)], null),new cljs.core.Keyword(null,"stacks","stacks",-456633410).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,func__25976__auto___26051)))))));
var new_func__25979__auto___26054 = cljs.core.with_meta.call(null,cljs.core.partial.call(null,func__25976__auto___26051,stack__25975__auto___26046),metadata__25978__auto___26053);
cljs.core.swap_BANG_.call(null,propeller.push.core.instruction_table,cljs.core.assoc,instruction_name__25977__auto___26052,new_func__25979__auto___26054);


var G__26055 = seq__25988_26047;
var G__26056 = chunk__25990_26048;
var G__26057 = count__25991_26049;
var G__26058 = (i__25992_26050 + (1));
seq__25988_26047 = G__26055;
chunk__25990_26048 = G__26056;
count__25991_26049 = G__26057;
i__25992_26050 = G__26058;
continue;
} else {
var temp__5735__auto___26059__$1 = cljs.core.seq.call(null,seq__25988_26047);
if(temp__5735__auto___26059__$1){
var seq__25988_26060__$1 = temp__5735__auto___26059__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25988_26060__$1)){
var c__4556__auto___26061 = cljs.core.chunk_first.call(null,seq__25988_26060__$1);
var G__26062 = cljs.core.chunk_rest.call(null,seq__25988_26060__$1);
var G__26063 = c__4556__auto___26061;
var G__26064 = cljs.core.count.call(null,c__4556__auto___26061);
var G__26065 = (0);
seq__25988_26047 = G__26062;
chunk__25990_26048 = G__26063;
count__25991_26049 = G__26064;
i__25992_26050 = G__26065;
continue;
} else {
var func__25976__auto___26066 = cljs.core.first.call(null,seq__25988_26060__$1);
var instruction_name__25977__auto___26067 = cljs.core.keyword.call(null,[cljs.core.name.call(null,stack__25975__auto___26046),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,func__25976__auto___26066)))].join(''));
var metadata__25978__auto___26068 = ((function (seq__25988_26047,chunk__25990_26048,count__25991_26049,i__25992_26050,seq__25987_26003,chunk__25994_26004,count__25995_26005,i__25996_26006,instruction_name__25977__auto___26067,func__25976__auto___26066,seq__25988_26060__$1,temp__5735__auto___26059__$1,stack__25975__auto___26046,seq__25987_26040__$1,temp__5735__auto___26039){
return (function (p1__25968__25969__auto__){
return cljs.core.dissoc.call(null,p1__25968__25969__auto__,new cljs.core.Keyword(null,"name","name",1843675177));
});})(seq__25988_26047,chunk__25990_26048,count__25991_26049,i__25992_26050,seq__25987_26003,chunk__25994_26004,count__25995_26005,i__25996_26006,instruction_name__25977__auto___26067,func__25976__auto___26066,seq__25988_26060__$1,temp__5735__auto___26059__$1,stack__25975__auto___26046,seq__25987_26040__$1,temp__5735__auto___26039))
.call(null,cljs.core.assoc_in.call(null,cljs.core.meta.call(null,func__25976__auto___26066),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stacks","stacks",-456633410)], null),cljs.core.set.call(null,cljs.core.cons.call(null,stack__25975__auto___26046,cljs.core.replace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elem","elem",618631056),propeller.push.utils.helpers.get_vector_literal_type.call(null,stack__25975__auto___26046)], null),new cljs.core.Keyword(null,"stacks","stacks",-456633410).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,func__25976__auto___26066)))))));
var new_func__25979__auto___26069 = cljs.core.with_meta.call(null,cljs.core.partial.call(null,func__25976__auto___26066,stack__25975__auto___26046),metadata__25978__auto___26068);
cljs.core.swap_BANG_.call(null,propeller.push.core.instruction_table,cljs.core.assoc,instruction_name__25977__auto___26067,new_func__25979__auto___26069);


var G__26070 = cljs.core.next.call(null,seq__25988_26060__$1);
var G__26071 = null;
var G__26072 = (0);
var G__26073 = (0);
seq__25988_26047 = G__26070;
chunk__25990_26048 = G__26071;
count__25991_26049 = G__26072;
i__25992_26050 = G__26073;
continue;
}
} else {
}
}
break;
}

var G__26074 = cljs.core.next.call(null,seq__25987_26040__$1);
var G__26075 = null;
var G__26076 = (0);
var G__26077 = (0);
seq__25987_26003 = G__26074;
chunk__25994_26004 = G__26075;
count__25995_26005 = G__26076;
i__25996_26006 = G__26077;
continue;
}
} else {
}
}
break;
}

//# sourceMappingURL=input_output.js.map?rel=1627432842167
