// Compiled by ClojureScript 1.10.764 {}
goog.provide('propeller.push.instructions.numeric');
goog.require('cljs.core');
goog.require('propeller.push.utils.helpers');
goog.require('propeller.tools.math');
goog.require('cljs.reader');
propeller.push.instructions.numeric._gt = cljs.core.with_meta((function propeller$push$instructions$numeric$_gt(stack,state){
return propeller.push.utils.helpers.make_instruction.call(null,state,cljs.core._GT_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [stack,stack], null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404));
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"boolean","boolean",-1919418404),null], null), null),new cljs.core.Keyword(null,"name","name",1843675177),"_gt"], null));
propeller.push.instructions.numeric._gte = cljs.core.with_meta((function propeller$push$instructions$numeric$_gte(stack,state){
return propeller.push.utils.helpers.make_instruction.call(null,state,cljs.core._GT__EQ_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [stack,stack], null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404));
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"boolean","boolean",-1919418404),null], null), null),new cljs.core.Keyword(null,"name","name",1843675177),"_gte"], null));
propeller.push.instructions.numeric._lt = cljs.core.with_meta((function propeller$push$instructions$numeric$_lt(stack,state){
return propeller.push.utils.helpers.make_instruction.call(null,state,cljs.core._LT_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [stack,stack], null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404));
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"boolean","boolean",-1919418404),null], null), null),new cljs.core.Keyword(null,"name","name",1843675177),"_lt"], null));
propeller.push.instructions.numeric._lte = cljs.core.with_meta((function propeller$push$instructions$numeric$_lte(stack,state){
return propeller.push.utils.helpers.make_instruction.call(null,state,cljs.core._LT__EQ_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [stack,stack], null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404));
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"boolean","boolean",-1919418404),null], null), null),new cljs.core.Keyword(null,"name","name",1843675177),"_lte"], null));
propeller.push.instructions.numeric._add = cljs.core.with_meta((function propeller$push$instructions$numeric$_add(stack,state){
return propeller.push.utils.helpers.make_instruction.call(null,state,cljs.core._PLUS_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [stack,stack], null),stack);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"name","name",1843675177),"_add"], null));
propeller.push.instructions.numeric._subtract = cljs.core.with_meta((function propeller$push$instructions$numeric$_subtract(stack,state){
return propeller.push.utils.helpers.make_instruction.call(null,state,cljs.core._,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [stack,stack], null),stack);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"name","name",1843675177),"_subtract"], null));
propeller.push.instructions.numeric._mult = cljs.core.with_meta((function propeller$push$instructions$numeric$_mult(stack,state){
return propeller.push.utils.helpers.make_instruction.call(null,state,cljs.core._STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [stack,stack], null),stack);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"name","name",1843675177),"_mult"], null));
propeller.push.instructions.numeric._quot = cljs.core.with_meta((function propeller$push$instructions$numeric$_quot(stack,state){
return propeller.push.utils.helpers.make_instruction.call(null,state,(function (p1__26394_SHARP_,p2__26393_SHARP_){
if((p2__26393_SHARP_ === (0))){
return (1);
} else {
return cljs.core.quot.call(null,p1__26394_SHARP_,p2__26393_SHARP_);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [stack,stack], null),stack);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"name","name",1843675177),"_quot"], null));
propeller.push.instructions.numeric._mod = cljs.core.with_meta((function propeller$push$instructions$numeric$_mod(stack,state){
return propeller.push.utils.helpers.make_instruction.call(null,state,(function (p1__26396_SHARP_,p2__26395_SHARP_){
if((p2__26395_SHARP_ === (0))){
return (1);
} else {
return cljs.core.mod.call(null,p1__26396_SHARP_,p2__26395_SHARP_);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [stack,stack], null),stack);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"name","name",1843675177),"_mod"], null));
propeller.push.instructions.numeric._max = cljs.core.with_meta((function propeller$push$instructions$numeric$_max(stack,state){
return propeller.push.utils.helpers.make_instruction.call(null,state,cljs.core.max,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [stack,stack], null),stack);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"name","name",1843675177),"_max"], null));
propeller.push.instructions.numeric._min = cljs.core.with_meta((function propeller$push$instructions$numeric$_min(stack,state){
return propeller.push.utils.helpers.make_instruction.call(null,state,cljs.core.min,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [stack,stack], null),stack);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"name","name",1843675177),"_min"], null));
propeller.push.instructions.numeric._from_boolean = cljs.core.with_meta((function propeller$push$instructions$numeric$_from_boolean(stack,state){
return propeller.push.utils.helpers.make_instruction.call(null,state,(function (p1__26397_SHARP_){
return ((cljs.core._EQ_.call(null,stack,new cljs.core.Keyword(null,"integer","integer",-604721710)))?cljs.core.int$:cljs.core.float$).call(null,(cljs.core.truth_(p1__26397_SHARP_)?(1):(0)));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null),stack);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"boolean","boolean",-1919418404),null], null), null),new cljs.core.Keyword(null,"name","name",1843675177),"_from_boolean"], null));
propeller.push.instructions.numeric._from_char = cljs.core.with_meta((function propeller$push$instructions$numeric$_from_char(stack,state){
return propeller.push.utils.helpers.make_instruction.call(null,state,((cljs.core._EQ_.call(null,stack,new cljs.core.Keyword(null,"integer","integer",-604721710)))?cljs.core.int$:cljs.core.float$),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"char","char",-641587586)], null),stack);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"char","char",-641587586),null], null), null),new cljs.core.Keyword(null,"name","name",1843675177),"_from_char"], null));
propeller.push.instructions.numeric._from_string = cljs.core.with_meta((function propeller$push$instructions$numeric$_from_string(stack,state){
return propeller.push.utils.helpers.make_instruction.call(null,state,(function (p1__26398_SHARP_){
try{return ((cljs.core._EQ_.call(null,stack,new cljs.core.Keyword(null,"integer","integer",-604721710)))?cljs.core.int$:cljs.core.float$).call(null,cljs.reader.read_string.call(null,p1__26398_SHARP_));
}catch (e26399){if((e26399 instanceof Error)){
var e = e26399;
return null;
} else {
throw e26399;

}
}}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"string","string",-1989541586)], null),stack);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"string","string",-1989541586),null], null), null),new cljs.core.Keyword(null,"name","name",1843675177),"_from_string"], null));
propeller.push.instructions.numeric._inc = cljs.core.with_meta((function propeller$push$instructions$numeric$_inc(stack,state){
return propeller.push.utils.helpers.make_instruction.call(null,state,cljs.core.inc,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [stack], null),stack);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"name","name",1843675177),"_inc"], null));
propeller.push.instructions.numeric._dec = cljs.core.with_meta((function propeller$push$instructions$numeric$_dec(stack,state){
return propeller.push.utils.helpers.make_instruction.call(null,state,cljs.core.dec,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [stack], null),stack);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"name","name",1843675177),"_dec"], null));
var seq__26400_26416 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"float","float",-1732389368),new cljs.core.Keyword(null,"integer","integer",-604721710)], null));
var chunk__26407_26417 = null;
var count__26408_26418 = (0);
var i__26409_26419 = (0);
while(true){
if((i__26409_26419 < count__26408_26418)){
var stack__25975__auto___26420 = cljs.core._nth.call(null,chunk__26407_26417,i__26409_26419);
var seq__26410_26421 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [propeller.push.instructions.numeric._gt,propeller.push.instructions.numeric._gte,propeller.push.instructions.numeric._lt,propeller.push.instructions.numeric._lte,propeller.push.instructions.numeric._add,propeller.push.instructions.numeric._subtract,propeller.push.instructions.numeric._mult,propeller.push.instructions.numeric._quot,propeller.push.instructions.numeric._mod,propeller.push.instructions.numeric._max,propeller.push.instructions.numeric._min,propeller.push.instructions.numeric._inc,propeller.push.instructions.numeric._dec,propeller.push.instructions.numeric._from_boolean,propeller.push.instructions.numeric._from_char,propeller.push.instructions.numeric._from_string], null));
var chunk__26412_26422 = null;
var count__26413_26423 = (0);
var i__26414_26424 = (0);
while(true){
if((i__26414_26424 < count__26413_26423)){
var func__25976__auto___26425 = cljs.core._nth.call(null,chunk__26412_26422,i__26414_26424);
var instruction_name__25977__auto___26426 = cljs.core.keyword.call(null,[cljs.core.name.call(null,stack__25975__auto___26420),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,func__25976__auto___26425)))].join(''));
var metadata__25978__auto___26427 = ((function (seq__26410_26421,chunk__26412_26422,count__26413_26423,i__26414_26424,seq__26400_26416,chunk__26407_26417,count__26408_26418,i__26409_26419,instruction_name__25977__auto___26426,func__25976__auto___26425,stack__25975__auto___26420){
return (function (p1__25968__25969__auto__){
return cljs.core.dissoc.call(null,p1__25968__25969__auto__,new cljs.core.Keyword(null,"name","name",1843675177));
});})(seq__26410_26421,chunk__26412_26422,count__26413_26423,i__26414_26424,seq__26400_26416,chunk__26407_26417,count__26408_26418,i__26409_26419,instruction_name__25977__auto___26426,func__25976__auto___26425,stack__25975__auto___26420))
.call(null,cljs.core.assoc_in.call(null,cljs.core.meta.call(null,func__25976__auto___26425),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stacks","stacks",-456633410)], null),cljs.core.set.call(null,cljs.core.cons.call(null,stack__25975__auto___26420,cljs.core.replace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elem","elem",618631056),propeller.push.utils.helpers.get_vector_literal_type.call(null,stack__25975__auto___26420)], null),new cljs.core.Keyword(null,"stacks","stacks",-456633410).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,func__25976__auto___26425)))))));
var new_func__25979__auto___26428 = cljs.core.with_meta.call(null,cljs.core.partial.call(null,func__25976__auto___26425,stack__25975__auto___26420),metadata__25978__auto___26427);
cljs.core.swap_BANG_.call(null,propeller.push.core.instruction_table,cljs.core.assoc,instruction_name__25977__auto___26426,new_func__25979__auto___26428);


var G__26429 = seq__26410_26421;
var G__26430 = chunk__26412_26422;
var G__26431 = count__26413_26423;
var G__26432 = (i__26414_26424 + (1));
seq__26410_26421 = G__26429;
chunk__26412_26422 = G__26430;
count__26413_26423 = G__26431;
i__26414_26424 = G__26432;
continue;
} else {
var temp__5735__auto___26433 = cljs.core.seq.call(null,seq__26410_26421);
if(temp__5735__auto___26433){
var seq__26410_26434__$1 = temp__5735__auto___26433;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26410_26434__$1)){
var c__4556__auto___26435 = cljs.core.chunk_first.call(null,seq__26410_26434__$1);
var G__26436 = cljs.core.chunk_rest.call(null,seq__26410_26434__$1);
var G__26437 = c__4556__auto___26435;
var G__26438 = cljs.core.count.call(null,c__4556__auto___26435);
var G__26439 = (0);
seq__26410_26421 = G__26436;
chunk__26412_26422 = G__26437;
count__26413_26423 = G__26438;
i__26414_26424 = G__26439;
continue;
} else {
var func__25976__auto___26440 = cljs.core.first.call(null,seq__26410_26434__$1);
var instruction_name__25977__auto___26441 = cljs.core.keyword.call(null,[cljs.core.name.call(null,stack__25975__auto___26420),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,func__25976__auto___26440)))].join(''));
var metadata__25978__auto___26442 = ((function (seq__26410_26421,chunk__26412_26422,count__26413_26423,i__26414_26424,seq__26400_26416,chunk__26407_26417,count__26408_26418,i__26409_26419,instruction_name__25977__auto___26441,func__25976__auto___26440,seq__26410_26434__$1,temp__5735__auto___26433,stack__25975__auto___26420){
return (function (p1__25968__25969__auto__){
return cljs.core.dissoc.call(null,p1__25968__25969__auto__,new cljs.core.Keyword(null,"name","name",1843675177));
});})(seq__26410_26421,chunk__26412_26422,count__26413_26423,i__26414_26424,seq__26400_26416,chunk__26407_26417,count__26408_26418,i__26409_26419,instruction_name__25977__auto___26441,func__25976__auto___26440,seq__26410_26434__$1,temp__5735__auto___26433,stack__25975__auto___26420))
.call(null,cljs.core.assoc_in.call(null,cljs.core.meta.call(null,func__25976__auto___26440),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stacks","stacks",-456633410)], null),cljs.core.set.call(null,cljs.core.cons.call(null,stack__25975__auto___26420,cljs.core.replace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elem","elem",618631056),propeller.push.utils.helpers.get_vector_literal_type.call(null,stack__25975__auto___26420)], null),new cljs.core.Keyword(null,"stacks","stacks",-456633410).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,func__25976__auto___26440)))))));
var new_func__25979__auto___26443 = cljs.core.with_meta.call(null,cljs.core.partial.call(null,func__25976__auto___26440,stack__25975__auto___26420),metadata__25978__auto___26442);
cljs.core.swap_BANG_.call(null,propeller.push.core.instruction_table,cljs.core.assoc,instruction_name__25977__auto___26441,new_func__25979__auto___26443);


var G__26444 = cljs.core.next.call(null,seq__26410_26434__$1);
var G__26445 = null;
var G__26446 = (0);
var G__26447 = (0);
seq__26410_26421 = G__26444;
chunk__26412_26422 = G__26445;
count__26413_26423 = G__26446;
i__26414_26424 = G__26447;
continue;
}
} else {
}
}
break;
}

var G__26448 = seq__26400_26416;
var G__26449 = chunk__26407_26417;
var G__26450 = count__26408_26418;
var G__26451 = (i__26409_26419 + (1));
seq__26400_26416 = G__26448;
chunk__26407_26417 = G__26449;
count__26408_26418 = G__26450;
i__26409_26419 = G__26451;
continue;
} else {
var temp__5735__auto___26452 = cljs.core.seq.call(null,seq__26400_26416);
if(temp__5735__auto___26452){
var seq__26400_26453__$1 = temp__5735__auto___26452;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26400_26453__$1)){
var c__4556__auto___26454 = cljs.core.chunk_first.call(null,seq__26400_26453__$1);
var G__26455 = cljs.core.chunk_rest.call(null,seq__26400_26453__$1);
var G__26456 = c__4556__auto___26454;
var G__26457 = cljs.core.count.call(null,c__4556__auto___26454);
var G__26458 = (0);
seq__26400_26416 = G__26455;
chunk__26407_26417 = G__26456;
count__26408_26418 = G__26457;
i__26409_26419 = G__26458;
continue;
} else {
var stack__25975__auto___26459 = cljs.core.first.call(null,seq__26400_26453__$1);
var seq__26401_26460 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [propeller.push.instructions.numeric._gt,propeller.push.instructions.numeric._gte,propeller.push.instructions.numeric._lt,propeller.push.instructions.numeric._lte,propeller.push.instructions.numeric._add,propeller.push.instructions.numeric._subtract,propeller.push.instructions.numeric._mult,propeller.push.instructions.numeric._quot,propeller.push.instructions.numeric._mod,propeller.push.instructions.numeric._max,propeller.push.instructions.numeric._min,propeller.push.instructions.numeric._inc,propeller.push.instructions.numeric._dec,propeller.push.instructions.numeric._from_boolean,propeller.push.instructions.numeric._from_char,propeller.push.instructions.numeric._from_string], null));
var chunk__26403_26461 = null;
var count__26404_26462 = (0);
var i__26405_26463 = (0);
while(true){
if((i__26405_26463 < count__26404_26462)){
var func__25976__auto___26464 = cljs.core._nth.call(null,chunk__26403_26461,i__26405_26463);
var instruction_name__25977__auto___26465 = cljs.core.keyword.call(null,[cljs.core.name.call(null,stack__25975__auto___26459),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,func__25976__auto___26464)))].join(''));
var metadata__25978__auto___26466 = ((function (seq__26401_26460,chunk__26403_26461,count__26404_26462,i__26405_26463,seq__26400_26416,chunk__26407_26417,count__26408_26418,i__26409_26419,instruction_name__25977__auto___26465,func__25976__auto___26464,stack__25975__auto___26459,seq__26400_26453__$1,temp__5735__auto___26452){
return (function (p1__25968__25969__auto__){
return cljs.core.dissoc.call(null,p1__25968__25969__auto__,new cljs.core.Keyword(null,"name","name",1843675177));
});})(seq__26401_26460,chunk__26403_26461,count__26404_26462,i__26405_26463,seq__26400_26416,chunk__26407_26417,count__26408_26418,i__26409_26419,instruction_name__25977__auto___26465,func__25976__auto___26464,stack__25975__auto___26459,seq__26400_26453__$1,temp__5735__auto___26452))
.call(null,cljs.core.assoc_in.call(null,cljs.core.meta.call(null,func__25976__auto___26464),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stacks","stacks",-456633410)], null),cljs.core.set.call(null,cljs.core.cons.call(null,stack__25975__auto___26459,cljs.core.replace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elem","elem",618631056),propeller.push.utils.helpers.get_vector_literal_type.call(null,stack__25975__auto___26459)], null),new cljs.core.Keyword(null,"stacks","stacks",-456633410).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,func__25976__auto___26464)))))));
var new_func__25979__auto___26467 = cljs.core.with_meta.call(null,cljs.core.partial.call(null,func__25976__auto___26464,stack__25975__auto___26459),metadata__25978__auto___26466);
cljs.core.swap_BANG_.call(null,propeller.push.core.instruction_table,cljs.core.assoc,instruction_name__25977__auto___26465,new_func__25979__auto___26467);


var G__26468 = seq__26401_26460;
var G__26469 = chunk__26403_26461;
var G__26470 = count__26404_26462;
var G__26471 = (i__26405_26463 + (1));
seq__26401_26460 = G__26468;
chunk__26403_26461 = G__26469;
count__26404_26462 = G__26470;
i__26405_26463 = G__26471;
continue;
} else {
var temp__5735__auto___26472__$1 = cljs.core.seq.call(null,seq__26401_26460);
if(temp__5735__auto___26472__$1){
var seq__26401_26473__$1 = temp__5735__auto___26472__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26401_26473__$1)){
var c__4556__auto___26474 = cljs.core.chunk_first.call(null,seq__26401_26473__$1);
var G__26475 = cljs.core.chunk_rest.call(null,seq__26401_26473__$1);
var G__26476 = c__4556__auto___26474;
var G__26477 = cljs.core.count.call(null,c__4556__auto___26474);
var G__26478 = (0);
seq__26401_26460 = G__26475;
chunk__26403_26461 = G__26476;
count__26404_26462 = G__26477;
i__26405_26463 = G__26478;
continue;
} else {
var func__25976__auto___26479 = cljs.core.first.call(null,seq__26401_26473__$1);
var instruction_name__25977__auto___26480 = cljs.core.keyword.call(null,[cljs.core.name.call(null,stack__25975__auto___26459),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,func__25976__auto___26479)))].join(''));
var metadata__25978__auto___26481 = ((function (seq__26401_26460,chunk__26403_26461,count__26404_26462,i__26405_26463,seq__26400_26416,chunk__26407_26417,count__26408_26418,i__26409_26419,instruction_name__25977__auto___26480,func__25976__auto___26479,seq__26401_26473__$1,temp__5735__auto___26472__$1,stack__25975__auto___26459,seq__26400_26453__$1,temp__5735__auto___26452){
return (function (p1__25968__25969__auto__){
return cljs.core.dissoc.call(null,p1__25968__25969__auto__,new cljs.core.Keyword(null,"name","name",1843675177));
});})(seq__26401_26460,chunk__26403_26461,count__26404_26462,i__26405_26463,seq__26400_26416,chunk__26407_26417,count__26408_26418,i__26409_26419,instruction_name__25977__auto___26480,func__25976__auto___26479,seq__26401_26473__$1,temp__5735__auto___26472__$1,stack__25975__auto___26459,seq__26400_26453__$1,temp__5735__auto___26452))
.call(null,cljs.core.assoc_in.call(null,cljs.core.meta.call(null,func__25976__auto___26479),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stacks","stacks",-456633410)], null),cljs.core.set.call(null,cljs.core.cons.call(null,stack__25975__auto___26459,cljs.core.replace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elem","elem",618631056),propeller.push.utils.helpers.get_vector_literal_type.call(null,stack__25975__auto___26459)], null),new cljs.core.Keyword(null,"stacks","stacks",-456633410).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,func__25976__auto___26479)))))));
var new_func__25979__auto___26482 = cljs.core.with_meta.call(null,cljs.core.partial.call(null,func__25976__auto___26479,stack__25975__auto___26459),metadata__25978__auto___26481);
cljs.core.swap_BANG_.call(null,propeller.push.core.instruction_table,cljs.core.assoc,instruction_name__25977__auto___26480,new_func__25979__auto___26482);


var G__26483 = cljs.core.next.call(null,seq__26401_26473__$1);
var G__26484 = null;
var G__26485 = (0);
var G__26486 = (0);
seq__26401_26460 = G__26483;
chunk__26403_26461 = G__26484;
count__26404_26462 = G__26485;
i__26405_26463 = G__26486;
continue;
}
} else {
}
}
break;
}

var G__26487 = cljs.core.next.call(null,seq__26400_26453__$1);
var G__26488 = null;
var G__26489 = (0);
var G__26490 = (0);
seq__26400_26416 = G__26487;
chunk__26407_26417 = G__26488;
count__26408_26418 = G__26489;
i__26409_26419 = G__26490;
continue;
}
} else {
}
}
break;
}
cljs.core.swap_BANG_.call(null,propeller.push.core.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"float_cos","float_cos",-95039530),cljs.core.with_meta((function (state){
return propeller.push.utils.helpers.make_instruction.call(null,state,propeller.tools.math.cos,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"float","float",-1732389368)], null),new cljs.core.Keyword(null,"float","float",-1732389368));
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"float","float",-1732389368),null], null), null)], null)));
cljs.core.swap_BANG_.call(null,propeller.push.core.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"float_sin","float_sin",-1816563777),cljs.core.with_meta((function (state){
return propeller.push.utils.helpers.make_instruction.call(null,state,propeller.tools.math.sin,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"float","float",-1732389368)], null),new cljs.core.Keyword(null,"float","float",-1732389368));
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"float","float",-1732389368),null], null), null)], null)));
cljs.core.swap_BANG_.call(null,propeller.push.core.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"float_tan","float_tan",1899962771),cljs.core.with_meta((function (state){
return propeller.push.utils.helpers.make_instruction.call(null,state,propeller.tools.math.tan,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"float","float",-1732389368)], null),new cljs.core.Keyword(null,"float","float",-1732389368));
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"float","float",-1732389368),null], null), null)], null)));
cljs.core.swap_BANG_.call(null,propeller.push.core.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"float_from_integer","float_from_integer",-1946851415),cljs.core.with_meta((function (state){
return propeller.push.utils.helpers.make_instruction.call(null,state,cljs.core.float$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"integer","integer",-604721710)], null),new cljs.core.Keyword(null,"float","float",-1732389368));
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"float","float",-1732389368),null,new cljs.core.Keyword(null,"integer","integer",-604721710),null], null), null)], null)));
cljs.core.swap_BANG_.call(null,propeller.push.core.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"integer_from_float","integer_from_float",-175769178),cljs.core.with_meta((function (state){
return propeller.push.utils.helpers.make_instruction.call(null,state,cljs.core.int$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"float","float",-1732389368)], null),new cljs.core.Keyword(null,"integer","integer",-604721710));
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"float","float",-1732389368),null,new cljs.core.Keyword(null,"integer","integer",-604721710),null], null), null)], null)));

//# sourceMappingURL=numeric.js.map?rel=1627432842682
