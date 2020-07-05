// Compiled by ClojureScript 1.10.764 {:static-fns true, :optimize-constants true}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.impl.util');
goog.require('reagent.impl.template');
goog.require('reagent.impl.batching');
goog.require('reagent.ratom');
reagent.dom.global$module$react_dom = goog.global["ReactDOM"];
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.dom.roots,cljs.core.dissoc,container);

return reagent.dom.global$module$react_dom.unmountComponentAtNode(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__32140 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__32141 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__32141);

try{var G__32142 = (comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null));
var G__32143 = container;
var G__32144 = (function (){
var _STAR_always_update_STAR__orig_val__32145 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__32146 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__32146);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__32145);
}});
return reagent.dom.global$module$react_dom.render(G__32142,G__32143,G__32144);
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__32140);
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp(comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element.
 *   The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__32148 = arguments.length;
switch (G__32148) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,null);
}));

(reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
reagent.ratom.flush_BANG_();

var f = (function (){
return reagent.impl.template.as_element(((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)):comp));
});
return reagent.dom.render_comp(f,container,callback);
}));

(reagent.dom.render.cljs$lang$maxFixedArity = 3);

/**
 * Remove a component from the given DOM node.
 */
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp(container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return reagent.dom.global$module$react_dom.findDOMNode(this$);
});
(reagent.impl.template.find_dom_node = reagent.dom.dom_node);
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_();

var seq__32150_32154 = cljs.core.seq(cljs.core.vals(cljs.core.deref(reagent.dom.roots)));
var chunk__32151_32155 = null;
var count__32152_32156 = (0);
var i__32153_32157 = (0);
while(true){
if((i__32153_32157 < count__32152_32156)){
var v_32158 = chunk__32151_32155.cljs$core$IIndexed$_nth$arity$2(null,i__32153_32157);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(reagent.dom.re_render_component,v_32158);


var G__32159 = seq__32150_32154;
var G__32160 = chunk__32151_32155;
var G__32161 = count__32152_32156;
var G__32162 = (i__32153_32157 + (1));
seq__32150_32154 = G__32159;
chunk__32151_32155 = G__32160;
count__32152_32156 = G__32161;
i__32153_32157 = G__32162;
continue;
} else {
var temp__5735__auto___32163 = cljs.core.seq(seq__32150_32154);
if(temp__5735__auto___32163){
var seq__32150_32164__$1 = temp__5735__auto___32163;
if(cljs.core.chunked_seq_QMARK_(seq__32150_32164__$1)){
var c__4556__auto___32165 = cljs.core.chunk_first(seq__32150_32164__$1);
var G__32166 = cljs.core.chunk_rest(seq__32150_32164__$1);
var G__32167 = c__4556__auto___32165;
var G__32168 = cljs.core.count(c__4556__auto___32165);
var G__32169 = (0);
seq__32150_32154 = G__32166;
chunk__32151_32155 = G__32167;
count__32152_32156 = G__32168;
i__32153_32157 = G__32169;
continue;
} else {
var v_32170 = cljs.core.first(seq__32150_32164__$1);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(reagent.dom.re_render_component,v_32170);


var G__32171 = cljs.core.next(seq__32150_32164__$1);
var G__32172 = null;
var G__32173 = (0);
var G__32174 = (0);
seq__32150_32154 = G__32171;
chunk__32151_32155 = G__32172;
count__32152_32156 = G__32173;
i__32153_32157 = G__32174;
continue;
}
} else {
}
}
break;
}

return reagent.impl.batching.flush_after_render();
});
