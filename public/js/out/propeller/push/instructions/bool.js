// Compiled by ClojureScript 1.10.764 {}
goog.provide('propeller.push.instructions.bool');
goog.require('cljs.core');
goog.require('propeller.push.utils.helpers');
cljs.core.swap_BANG_.call(null,propeller.push.core.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"boolean_and","boolean_and",-424086794),cljs.core.with_meta((function (state){
return propeller.push.utils.helpers.make_instruction.call(null,state,(function (p1__26493_SHARP_,p2__26494_SHARP_){
var and__4115__auto__ = p1__26493_SHARP_;
if(cljs.core.truth_(and__4115__auto__)){
return p2__26494_SHARP_;
} else {
return and__4115__auto__;
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boolean","boolean",-1919418404),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404));
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"boolean","boolean",-1919418404),null], null), null)], null)));
cljs.core.swap_BANG_.call(null,propeller.push.core.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"boolean_or","boolean_or",-643195077),cljs.core.with_meta((function (state){
return propeller.push.utils.helpers.make_instruction.call(null,state,(function (p1__26495_SHARP_,p2__26496_SHARP_){
var or__4126__auto__ = p1__26495_SHARP_;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return p2__26496_SHARP_;
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boolean","boolean",-1919418404),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404));
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"boolean","boolean",-1919418404),null], null), null)], null)));
cljs.core.swap_BANG_.call(null,propeller.push.core.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"boolean_not","boolean_not",1708346222),cljs.core.with_meta((function (state){
return propeller.push.utils.helpers.make_instruction.call(null,state,cljs.core.not,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404));
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"boolean","boolean",-1919418404),null], null), null)], null)));
cljs.core.swap_BANG_.call(null,propeller.push.core.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"boolean_xor","boolean_xor",-594880640),cljs.core.with_meta((function (state){
return propeller.push.utils.helpers.make_instruction.call(null,state,(function (p1__26497_SHARP_,p2__26498_SHARP_){
var or__4126__auto__ = (function (){var and__4115__auto__ = p1__26497_SHARP_;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not.call(null,p2__26498_SHARP_);
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if(cljs.core.not.call(null,p1__26497_SHARP_)){
return p2__26498_SHARP_;
} else {
return false;
}
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boolean","boolean",-1919418404),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404));
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"boolean","boolean",-1919418404),null], null), null)], null)));
cljs.core.swap_BANG_.call(null,propeller.push.core.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"boolean_invert_first_then_and","boolean_invert_first_then_and",108520427),cljs.core.with_meta((function (state){
return propeller.push.utils.helpers.make_instruction.call(null,state,(function (p1__26499_SHARP_,p2__26500_SHARP_){
var and__4115__auto__ = p1__26499_SHARP_;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not.call(null,p2__26500_SHARP_);
} else {
return and__4115__auto__;
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boolean","boolean",-1919418404),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404));
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"boolean","boolean",-1919418404),null], null), null)], null)));
cljs.core.swap_BANG_.call(null,propeller.push.core.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"boolean_invert_second_then_and","boolean_invert_second_then_and",1891652663),cljs.core.with_meta((function (state){
return propeller.push.utils.helpers.make_instruction.call(null,state,(function (p1__26501_SHARP_,p2__26502_SHARP_){
if(cljs.core.not.call(null,p1__26501_SHARP_)){
return p2__26502_SHARP_;
} else {
return false;
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boolean","boolean",-1919418404),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404));
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"boolean","boolean",-1919418404),null], null), null)], null)));
cljs.core.swap_BANG_.call(null,propeller.push.core.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"boolean_from_float","boolean_from_float",332233173),cljs.core.with_meta((function (state){
return propeller.push.utils.helpers.make_instruction.call(null,state,(function (p1__26503_SHARP_){
return (!((p1__26503_SHARP_ === (0))));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"float","float",-1732389368)], null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404));
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"float","float",-1732389368),null,new cljs.core.Keyword(null,"boolean","boolean",-1919418404),null], null), null)], null)));
cljs.core.swap_BANG_.call(null,propeller.push.core.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"boolean_from_integer","boolean_from_integer",-1482282744),cljs.core.with_meta((function (state){
return propeller.push.utils.helpers.make_instruction.call(null,state,(function (p1__26504_SHARP_){
return (!((p1__26504_SHARP_ === (0))));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"integer","integer",-604721710)], null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404));
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"integer","integer",-604721710),null,new cljs.core.Keyword(null,"boolean","boolean",-1919418404),null], null), null)], null)));

//# sourceMappingURL=bool.js.map?rel=1627432842708
