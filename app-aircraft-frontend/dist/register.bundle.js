!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/div/",n(n.s=33)}([function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return mo})),n.d(t,"c",(function(){return Mi})),n.d(t,"d",(function(){return Rs})),n.d(t,"e",(function(){return Zi})),n.d(t,"f",(function(){return xi})),n.d(t,"g",(function(){return $s})),n.d(t,"h",(function(){return _n})),n.d(t,"i",(function(){return Fi})),n.d(t,"j",(function(){return D})),n.d(t,"k",(function(){return y})),n.d(t,"l",(function(){return Vo})),n.d(t,"m",(function(){return oe})),n.d(t,"n",(function(){return No})),n.d(t,"o",(function(){return Si})),n.d(t,"p",(function(){return ai})),n.d(t,"q",(function(){return ui})),n.d(t,"r",(function(){return zi})),n.d(t,"s",(function(){return Pi})),n.d(t,"t",(function(){return De})),n.d(t,"u",(function(){return m})),n.d(t,"v",(function(){return Oi})),n.d(t,"w",(function(){return ki})),n.d(t,"x",(function(){return Zs})),n.d(t,"y",(function(){return _})),n.d(t,"z",(function(){return v})),n.d(t,"A",(function(){return pi})),n.d(t,"B",(function(){return Ks})),n.d(t,"C",(function(){return gi})),n.d(t,"D",(function(){return T})),n.d(t,"E",(function(){return bn})),n.d(t,"F",(function(){return Is})),n.d(t,"G",(function(){return Ss})),n.d(t,"H",(function(){return Os})),n.d(t,"I",(function(){return Vs})),n.d(t,"J",(function(){return Ds})),n.d(t,"K",(function(){return ws})),n.d(t,"L",(function(){return Cs})),n.d(t,"M",(function(){return ks})),n.d(t,"N",(function(){return S})),n.d(t,"O",(function(){return E})),n.d(t,"P",(function(){return fe}));var r=n(12),o=n(3),s=n(2),i=n(26),a=n(27);
/**
 * @license Angular v10.2.3
 * (c) 2010-2020 Google LLC. https://angular.io/
 * License: MIT
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function u(e){return{toString:e}.toString()}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const l="__annotations__",c="__parameters__",h="__prop__metadata__";function d(e,t,n,r,o){return u(()=>{const s=p(t);function i(...e){if(this instanceof i)return s.call(this,...e),this;const t=new i(...e);return function(n){o&&o(n,...e);return(n.hasOwnProperty(l)?n[l]:Object.defineProperty(n,l,{value:[]})[l]).push(t),r&&r(n),n}}return n&&(i.prototype=Object.create(n.prototype)),i.prototype.ngMetadataName=e,i.annotationCls=i,i})}function p(e){return function(...t){if(e){const n=e(...t);for(const e in n)this[e]=n[e]}}}function f(e,t,n){return u(()=>{const r=p(t);function o(...e){if(this instanceof o)return r.apply(this,e),this;const t=new o(...e);return n.annotation=t,n;function n(e,n,r){const o=e.hasOwnProperty(c)?e[c]:Object.defineProperty(e,c,{value:[]})[c];for(;o.length<=r;)o.push(null);return(o[r]=o[r]||[]).push(t),e}}return n&&(o.prototype=Object.create(n.prototype)),o.prototype.ngMetadataName=e,o.annotationCls=o,o})}function g(e,t,n,r){return u(()=>{const o=p(t);function s(...e){if(this instanceof s)return o.apply(this,e),this;const t=new s(...e);return function(n,o){const s=n.constructor,i=s.hasOwnProperty(h)?s[h]:Object.defineProperty(s,h,{value:{}})[h];i[o]=i.hasOwnProperty(o)&&i[o]||[],i[o].unshift(t),r&&r(n,o,...e)}}return n&&(s.prototype=Object.create(n.prototype)),s.prototype.ngMetadataName=e,s.annotationCls=s,s})}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const y=f("Inject",e=>({token:e})),m=f("Optional"),_=f("Self"),v=f("SkipSelf"),D=f("Host"),b=f("Attribute",e=>({attributeName:e}));
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var C;
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function w(e){for(let t in e)if(e[t]===w)return t;throw Error("Could not find renamed property on target object.")}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function E(e){return{token:e.token,providedIn:e.providedIn||null,factory:e.factory,value:void 0}}!function(e){e[e.Default=0]="Default",e[e.Host=1]="Host",e[e.Self=2]="Self",e[e.SkipSelf=4]="SkipSelf",e[e.Optional=8]="Optional"}(C||(C={}));function A(e){return{factory:e.factory,providers:e.providers||[],imports:e.imports||[]}}function F(e){return x(e,e[M])||x(e,e[k])}function x(e,t){return t&&t.token===e?t:null}const M=w({"ɵprov":w}),k=(w({"ɵinj":w}),w({"ɵprovFallback":w}),w({ngInjectableDef:w}));w({ngInjectorDef:w});
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function S(e){if("string"==typeof e)return e;if(Array.isArray(e))return"["+e.map(S).join(", ")+"]";if(null==e)return""+e;if(e.overriddenName)return""+e.overriddenName;if(e.name)return""+e.name;const t=e.toString();if(null==t)return""+t;const n=t.indexOf("\n");return-1===n?t:t.substring(0,n)}function O(e,t){return null==e||""===e?null===t?"":t:null==t||""===t?e:e+" "+t}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const V=w({__forward_ref__:w});function T(e){return e.__forward_ref__=T,e.toString=function(){return S(this())},e}function I(e){return P(e)?e():e}function P(e){return"function"==typeof e&&e.hasOwnProperty(V)&&e.__forward_ref__===T}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const N="undefined"!=typeof globalThis&&globalThis,j="undefined"!=typeof window&&window,B="undefined"!=typeof self&&"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&self,R=N||void 0!==e&&e||j||B;
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var L,H,$;!function(e){e[e.Token=0]="Token",e[e.Attribute=1]="Attribute",e[e.ChangeDetectorRef=2]="ChangeDetectorRef",e[e.Invalid=3]="Invalid"}(L||(L={})),function(e){e[e.Directive=0]="Directive",e[e.Component=1]="Component",e[e.Injectable=2]="Injectable",e[e.Pipe=3]="Pipe",e[e.NgModule=4]="NgModule"}(H||(H={})),function(e){e[e.Emulated=0]="Emulated",e[e.Native=1]="Native",e[e.None=2]="None",e[e.ShadowDom=3]="ShadowDom"}($||($={}));
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const G=w({"ɵcmp":w}),U=(w({"ɵdir":w}),w({"ɵpipe":w}),w({"ɵmod":w}),w({"ɵloc":w}),w({"ɵfac":w})),z=w({__NG_ELEMENT_ID__:w});function Z(){return!("undefined"!=typeof ngDevMode&&!ngDevMode)&&("object"!=typeof ngDevMode&&
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function(){const e="undefined"!=typeof location?location.toString():"",t={namedConstructors:-1!=e.indexOf("ngDevMode=namedConstructors"),firstCreatePass:0,tNode:0,tView:0,rendererCreateTextNode:0,rendererSetText:0,rendererCreateElement:0,rendererAddEventListener:0,rendererSetAttribute:0,rendererRemoveAttribute:0,rendererSetProperty:0,rendererSetClassName:0,rendererAddClass:0,rendererRemoveClass:0,rendererSetStyle:0,rendererRemoveStyle:0,rendererDestroy:0,rendererDestroyNode:0,rendererMoveNode:0,rendererRemoveNode:0,rendererAppendChild:0,rendererInsertBefore:0,rendererCreateComment:0},n=-1===e.indexOf("ngDevMode=false");R.ngDevMode=n&&t}(),"undefined"!=typeof ngDevMode&&!!ngDevMode)}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function W(e,t){"number"!=typeof e&&te(t,typeof e,"number","===")}function q(e,t){"string"!=typeof e&&te(t,null===e?"null":typeof e,"string","===")}function K(e,t,n){e!=t&&te(n,e,t,"==")}function Y(e,t,n){e==t&&te(n,e,t,"!=")}function Q(e,t,n){e!==t&&te(n,e,t,"===")}function J(e,t,n){e<t||te(n,e,t,"<")}function X(e,t,n){e>t||te(n,e,t,">")}function ee(e,t){null==e&&te(t,e,null,"!=")}function te(e,t,n,r){throw new Error("ASSERTION ERROR: "+e+(null==r?"":` [Expected=> ${n} ${r} ${t} <=Actual]`))}function ne(e){K("undefined"!=typeof Node&&e instanceof Node||"object"==typeof e&&null!=e&&"WebWorkerRenderNode"===e.constructor.name,!0,"The provided value must be an instance of a DOM Node but got "+S(e))}function re(e,t){const n=e?e.length:0;J(t,n,`Index expected to be less than ${n} but got ${t}`)}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class oe{constructor(e,t){this._desc=e,this.ngMetadataName="InjectionToken",this.ɵprov=void 0,"number"==typeof t?this.__NG_ELEMENT_ID__=t:void 0!==t&&(this.ɵprov=E({token:this,providedIn:t.providedIn||"root",factory:t.factory}))}toString(){return"InjectionToken "+this._desc}}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const se=new oe("INJECTOR",-1),ie={},ae=/\n/gm,ue=w({provide:String,useValue:w});let le,ce=void 0;function he(e){const t=ce;return ce=e,t}function de(e){const t=le;return le=e,t}function pe(e,t=C.Default){if(void 0===ce)throw new Error("inject() must be called from an injection context");return null===ce?ge(e,void 0,t):ce.get(e,t&C.Optional?null:void 0,t)}function fe(e,t=C.Default){return(le||pe)(I(e),t)}function ge(e,t,n){const r=F(e);if(r&&"root"==r.providedIn)return void 0===r.value?r.value=r.factory():r.value;if(n&C.Optional)return null;if(void 0!==t)return t;throw new Error(`Injector: NOT_FOUND [${S(e)}]`)}function ye(e){const t=[];for(let n=0;n<e.length;n++){const r=I(e[n]);if(Array.isArray(r)){if(0===r.length)throw new Error("Arguments array must have arguments.");let e=void 0,n=C.Default;for(let t=0;t<r.length;t++){const o=r[t];o instanceof m||"Optional"===o.ngMetadataName||o===m?n|=C.Optional:o instanceof v||"SkipSelf"===o.ngMetadataName||o===v?n|=C.SkipSelf:o instanceof _||"Self"===o.ngMetadataName||o===_?n|=C.Self:e=o instanceof y||o===y?o.token:o}t.push(fe(e,n))}else t.push(fe(r))}return t}class me{get(e,t=ie){if(t===ie){const t=new Error(`NullInjectorError: No provider for ${S(e)}!`);throw t.name="NullInjectorError",t}return t}}function _e(e,t,n,r){const o=e.ngTempTokenPath;throw t.__source&&o.unshift(t.__source),e.message=ve("\n"+e.message,o,n,r),e.ngTokenPath=o,e.ngTempTokenPath=null,e}function ve(e,t,n,r=null){e=e&&"\n"===e.charAt(0)&&"ɵ"==e.charAt(1)?e.substr(2):e;let o=S(t);if(Array.isArray(t))o=t.map(S).join(" -> ");else if("object"==typeof t){let e=[];for(let n in t)if(t.hasOwnProperty(n)){let r=t[n];e.push(n+":"+("string"==typeof r?JSON.stringify(r):S(r)))}o=`{${e.join(", ")}}`}return`${n}${r?"("+r+")":""}[${o}]: ${e.replace(ae,"\n  ")}`}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class De{}function be(e,t){const n=[];for(let r=0;r<e;r++)n.push(t);return n}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var Ce,we,Ee;!function(e){e[e.OnPush=0]="OnPush",e[e.Default=1]="Default"}(Ce||(Ce={})),function(e){e[e.CheckOnce=0]="CheckOnce",e[e.Checked=1]="Checked",e[e.CheckAlways=2]="CheckAlways",e[e.Detached=3]="Detached",e[e.Errored=4]="Errored",e[e.Destroyed=5]="Destroyed"}(we||(we={})),function(e){e[e.Emulated=0]="Emulated",e[e.Native=1]="Native",e[e.None=2]="None",e[e.ShadowDom=3]="ShadowDom"}(Ee||(Ee={}));
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const Ae={},Fe=[];("undefined"==typeof ngDevMode||ngDevMode)&&Z()&&(Object.freeze(Ae),Object.freeze(Fe))
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */;function xe(e){return e[G]||null}function Me(e,t){const n=e.hasOwnProperty(U);if(!n&&!0===t&&ngDevMode)throw new Error(`Type ${S(e)} does not have 'ɵfac' property.`);return n?e[U]:null}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const ke=["Root","Component","Embedded"];
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function Se(e){return Array.isArray(e)&&"object"==typeof e[1]}function Oe(e){return Array.isArray(e)&&!0===e[1]}function Ve(e){return 2==(2&e.flags)}function Te(e){return null!==e.template}function Ie(e){return 0!=(512&e[2])}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function Pe(e,t){Ne(e,t[1])}function Ne(e,t){ee(e,"TNode must be defined"),e.hasOwnProperty("tView_")&&K(e.tView_,t,"This TNode does not belong to this TView.")}function je(e,t="Type passed in is not ComponentType, it does not have 'ɵcmp' property."){xe(e)||te(t)}function Be(e){ee(e,"LContainer must be defined"),K(Oe(e),!0,"Expecting LContainer")}function Re(e){e&&K(Se(e),!0,"Expecting LView or undefined or null")}function Le(e){ee(e,"LView must be defined"),K(Se(e),!0,"Expecting LView")}function He(e,t){K(e.firstCreatePass,!0,t||"Should only be called in first create pass.")}function $e(e,t){Ge(e[1].expandoStartIndex,e.length,t)}function Ge(e,t,n){e<=n&&n<t||te(`Index out of range (expecting ${e} <= ${n} < ${t})`)}function Ue(e,t){$e(e,t),$e(e,t+8),W(e[t+0],"injectorIndex should point to a bloom filter"),W(e[t+1],"injectorIndex should point to a bloom filter"),W(e[t+2],"injectorIndex should point to a bloom filter"),W(e[t+3],"injectorIndex should point to a bloom filter"),W(e[t+4],"injectorIndex should point to a bloom filter"),W(e[t+5],"injectorIndex should point to a bloom filter"),W(e[t+6],"injectorIndex should point to a bloom filter"),W(e[t+7],"injectorIndex should point to a bloom filter"),W(e[t+8],"injectorIndex should point to parent injector")}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function ze(e){return"string"==typeof e?e:null==e?"":""+e}function Ze(e){return"function"==typeof e?e.name||e.toString():"object"==typeof e&&null!=e&&"function"==typeof e.type?e.type.name||e.type.toString():ze(e)}const We=("undefined"!=typeof requestAnimationFrame&&requestAnimationFrame||setTimeout).bind(R);function qe(e,t){const n=t?`. Dependency path: ${t.join(" > ")} > ${e}`:"";throw new Error(`Circular dependency in DI detected for ${e}${n}`)}function Ke(e,t){const n=t?" in "+t:"";throw new Error(`No provider for ${Ze(e)} found${n}`)}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class Ye{constructor(e,t,n){this.previousValue=e,this.currentValue=t,this.firstChange=n}isFirstChange(){return this.firstChange}}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function Qe(){return Je}function Je(e){return e.type.prototype.ngOnChanges&&(e.setInput=et),Xe}function Xe(){const e=tt(this),t=null==e?void 0:e.current;if(t){const n=e.previous;if(n===Ae)e.previous=t;else for(let e in t)n[e]=t[e];e.current=null,this.ngOnChanges(t)}}function et(e,t,n,r){const o=tt(e)||function(e,t){return e.__ngSimpleChanges__=t}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */(e,{previous:Ae,current:null}),s=o.current||(o.current={}),i=o.previous,a=this.declaredInputs[n],u=i[a];s[a]=new Ye(u&&u.currentValue,t,i===Ae),e[r]=t}Qe.ngInherit=!0;function tt(e){return e.__ngSimpleChanges__||null}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
let nt=void 0;function rt(){return void 0!==nt?nt:"undefined"!=typeof document?document:void 0}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */var ot;function st(e){return!!e.listen}!function(e){e[e.Important=1]="Important",e[e.DashCase=2]="DashCase"}(ot||(ot={}));const it={createRenderer:(e,t)=>rt()};
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function at(e){for(;Array.isArray(e);)e=e[0];return e}function ut(e,t){ngDevMode&&Pe(e,t),ngDevMode&&re(t,e.index);const n=at(t[e.index]);return ngDevMode&&!st(t[11])&&ne(n),n}function lt(e,t){return ngDevMode&&X(t,-1,"wrong index for TNode"),ngDevMode&&J(t,e.data.length,"wrong index for TNode"),e.data[t+20]}function ct(e,t){ngDevMode&&re(t,e);const n=t[e];return Se(n)?n:n[0]}function ht(e){return ngDevMode&&ee(e,"Target expected"),e.__ngContext__||null}function dt(e){const t=ht(e);return t?Array.isArray(t)?t:t.lView:null}function pt(e){return 4==(4&e[2])}function ft(e){return 128==(128&e[2])}function gt(e){e[18]=0}function yt(e,t){e[5]+=t;let n=e,r=e[3];for(;null!==r&&(1===t&&1===n[5]||-1===t&&0===n[5]);)r[5]+=t,n=r,r=r[3]}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const mt={lFrame:Ot(null),bindingsEnabled:!0,isInCheckNoChangesMode:!1};function _t(){return mt.lFrame.tView}function vt(){return mt.lFrame.currentTNode}function Dt(e,t){ngDevMode&&Ne(e,mt.lFrame.tView),mt.lFrame.currentTNode=e,mt.lFrame.isParent=t}function bt(){return mt.lFrame.isParent}function Ct(){return mt.isInCheckNoChangesMode}function wt(e){mt.isInCheckNoChangesMode=e}function Et(e){return mt.lFrame.bindingIndex=e}function At(e,t){const n=mt.lFrame;n.bindingIndex=n.bindingRootIndex=e,Ft(t)}function Ft(e){mt.lFrame.currentDirectiveIndex=e}function xt(e){mt.lFrame.currentQueryIndex=e}function Mt(e,t){ngDevMode&&Re(e);const n=St();mt.lFrame=n,n.currentTNode=t,n.lView=e}function kt(e){ngDevMode&&Re(e);const t=St();ngDevMode&&(K(t.isParent,!0,"Expected clean LFrame"),K(t.lView,null,"Expected clean LFrame"),K(t.tView,null,"Expected clean LFrame"),K(t.selectedIndex,0,"Expected clean LFrame"),K(t.elementDepthCount,0,"Expected clean LFrame"),K(t.currentDirectiveIndex,-1,"Expected clean LFrame"),K(t.currentNamespace,null,"Expected clean LFrame"),K(t.bindingRootIndex,-1,"Expected clean LFrame"),K(t.currentQueryIndex,0,"Expected clean LFrame"));const n=e[1];mt.lFrame=t,ngDevMode&&n.firstChild&&Ne(n.firstChild,n),t.currentTNode=n.firstChild,t.lView=e,t.tView=n,t.contextLView=e,t.bindingIndex=n.bindingStartIndex}function St(){const e=mt.lFrame,t=null===e?null:e.child;return null===t?Ot(e):t}function Ot(e){const t={currentTNode:null,isParent:!0,lView:null,tView:null,selectedIndex:0,contextLView:null,elementDepthCount:0,currentNamespace:null,currentDirectiveIndex:-1,bindingRootIndex:-1,bindingIndex:-1,currentQueryIndex:0,parent:e,child:null};return null!==e&&(e.child=t),t}function Vt(){const e=mt.lFrame;return mt.lFrame=e.parent,e.currentTNode=null,e.lView=null,e}const Tt=Vt;function It(){const e=Vt();e.isParent=!0,e.tView=null,e.selectedIndex=0,e.contextLView=null,e.elementDepthCount=0,e.currentDirectiveIndex=-1,e.currentNamespace=null,e.bindingRootIndex=-1,e.bindingIndex=-1,e.currentQueryIndex=0}function Pt(){return mt.lFrame.selectedIndex}function Nt(e){mt.lFrame.selectedIndex=e}function jt(e,t){ngDevMode&&He(e);for(let n=t.directiveStart,r=t.directiveEnd;n<r;n++){const t=e.data[n].type.prototype,{ngAfterContentInit:r,ngAfterContentChecked:o,ngAfterViewInit:s,ngAfterViewChecked:i,ngOnDestroy:a}=t;r&&(e.contentHooks||(e.contentHooks=[])).push(-n,r),o&&((e.contentHooks||(e.contentHooks=[])).push(n,o),(e.contentCheckHooks||(e.contentCheckHooks=[])).push(n,o)),s&&(e.viewHooks||(e.viewHooks=[])).push(-n,s),i&&((e.viewHooks||(e.viewHooks=[])).push(n,i),(e.viewCheckHooks||(e.viewCheckHooks=[])).push(n,i)),null!=a&&(e.destroyHooks||(e.destroyHooks=[])).push(n,a)}}function Bt(e,t,n){Ht(e,t,3,n)}function Rt(e,t,n,r){ngDevMode&&Y(n,3,"Init pre-order hooks should not be called more than once"),(3&e[2])===n&&Ht(e,t,n,r)}function Lt(e,t){ngDevMode&&Y(t,3,"Init hooks phase should not be incremented after all init hooks have been run.");let n=e[2];(3&n)===t&&(n&=2047,n+=1,e[2]=n)}function Ht(e,t,n,r){ngDevMode&&K(Ct(),!1,"Hooks should never be run when in check no changes mode.");const o=null!=r?r:-1;let s=0;for(let i=void 0!==r?65535&e[18]:0;i<t.length;i++){if("number"==typeof t[i+1]){if(s=t[i],null!=r&&s>=r)break}else{t[i]<0&&(e[18]+=65536),(s<o||-1==o)&&($t(e,n,t,i),e[18]=(4294901760&e[18])+i+2),i++}}}function $t(e,t,n,r){const o=n[r]<0,s=n[r+1],i=e[o?-n[r]:n[r]];if(o){e[2]>>11<e[18]>>16&&(3&e[2])===t&&(e[2]+=2048,s.call(i))}else s.call(i)}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class Gt{constructor(e,t,n){this.factory=e,this.resolving=!1,ngDevMode&&ee(e,"Factory not specified"),ngDevMode&&K(typeof e,"function","Expected factory function."),this.canSeeViewProviders=t,this.injectImpl=n}}const Ut=["Container","Projection","Element","ElementContainer","IcuContainer"];function zt(e,t,n){ee(e,"should be called with a TNode");K(t.some(t=>e.type===t),!0,null!=n?n:`Should be one of ${t.map(Zt).join(", ")} but got ${Zt(e.type)}`)}function Zt(e){return Ut[e]||"<unknown>"}function Wt(e,t,n){const r=st(e);let o=0;for(;o<n.length;){const s=n[o];if("number"==typeof s){if(0!==s)break;o++;const i=n[o++],a=n[o++],u=n[o++];ngDevMode&&ngDevMode.rendererSetAttribute++,r?e.setAttribute(t,a,u,i):t.setAttributeNS(i,a,u)}else{const i=s,a=n[++o];ngDevMode&&ngDevMode.rendererSetAttribute++,qt(i)?r&&e.setProperty(t,i,a):r?e.setAttribute(t,i,a):t.setAttribute(i,a),o++}}return o}function qt(e){return 64===e.charCodeAt(0)}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function Kt(e){return-1!==e}function Yt(e){ngDevMode&&W(e,"Number expected"),ngDevMode&&Y(e,-1,"Not a valid state.");return ngDevMode&&X(32767&e,20,"Parent injector must be pointing past HEADER_OFFSET."),32767&e}function Qt(e,t){let n=e>>16;let r=t;for(;n>0;)r=r[15],n--;return r}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */let Jt=!0;function Xt(e){const t=Jt;return Jt=e,t}let en=0;function tn(e,t){const n=rn(e,t);if(-1!==n)return n;const r=t[1];r.firstCreatePass&&(e.injectorIndex=t.length,nn(r.data,e),nn(t,null),nn(r.blueprint,null));const o=on(e,t),s=e.injectorIndex;if(Kt(o)){const e=Yt(o),n=Qt(o,t),r=n[1].data;for(let o=0;o<8;o++)t[s+o]=n[e+o]|r[e+o]}return t[s+8]=o,s}function nn(e,t){e.push(0,0,0,0,0,0,0,0,t)}function rn(e,t){return-1===e.injectorIndex||e.parent&&e.parent.injectorIndex===e.injectorIndex||null===t[e.injectorIndex+8]?-1:(ngDevMode&&re(t,e.injectorIndex),e.injectorIndex)}function on(e,t){if(e.parent&&-1!==e.parent.injectorIndex)return e.parent.injectorIndex;let n=0,r=null,o=t;for(;null!==o;){const e=o[1],t=e.type;if(2===t?(ngDevMode&&ee(e.declTNode,"Embedded TNodes should have declaration parents."),r=e.declTNode):1===t?r=o[6]:(ngDevMode&&K(e.type,0,"Root type expected"),r=null),null===r)return-1;if(ngDevMode&&r&&Pe(r,o[15]),n++,o=o[15],-1!==r.injectorIndex)return r.injectorIndex|n<<16}return-1}function sn(e,t,n){!function(e,t,n){let r;ngDevMode&&K(t.firstCreatePass,!0,"expected firstCreatePass to be true"),"string"==typeof n?r=n.charCodeAt(0)||0:n.hasOwnProperty(z)&&(r=n[z]),null==r&&(r=n[z]=en++);const o=255&r,s=1<<o,i=128&o,a=64&o,u=32&o,l=t.data;i?a?u?l[e+7]|=s:l[e+6]|=s:u?l[e+5]|=s:l[e+4]|=s:a?u?l[e+3]|=s:l[e+2]|=s:u?l[e+1]|=s:l[e]|=s}(e,t,n)}function an(e,t,n,r=C.Default,o){if(null!==e){const o=function(e){if(ngDevMode&&ee(e,"token must be defined"),"string"==typeof e)return e.charCodeAt(0)||0;const t=e.hasOwnProperty(z)?e[z]:void 0;return"number"==typeof t&&t>0?255&t:t}(n);if("function"==typeof o){Mt(t,e);try{const e=o();if(null!=e||r&C.Optional)return e;Ke(n)}finally{Tt()}}else if("number"==typeof o){if(-1===o)return new fn(e,t);let s=null,i=rn(e,t),a=-1,u=r&C.Host?t[16][6]:null;for((-1===i||r&C.SkipSelf)&&(a=-1===i?on(e,t):t[i+8],-1!==a&&pn(r,!1)?(s=t[1],i=Yt(a),t=Qt(a,t)):i=-1);-1!==i;){ngDevMode&&Ue(t,i);const e=t[1];if(ngDevMode&&Pe(e.data[i+8],t),dn(o,i,e.data)){const e=ln(i,t,n,s,r,u);if(e!==un)return e}a=t[i+8],-1!==a&&pn(r,t[1].data[i+8]===u)&&dn(o,i,t)?(s=e,i=Yt(a),t=Qt(a,t)):i=-1}}}if(r&C.Optional&&void 0===o&&(o=null),0==(r&(C.Self|C.Host))){const e=t[9],s=de(void 0);try{return e?e.get(n,o,r&C.Optional):ge(n,o,r&C.Optional)}finally{de(s)}}if(r&C.Optional)return o;Ke(n,"NodeInjector")}const un={};function ln(e,t,n,r,o,s){const i=t[1],a=i.data[e+8],u=cn(a,i,n,null==r?Ve(a)&&Jt:r!=i&&2===a.type,o&C.Host&&s===a);return null!==u?hn(t,i,u,a):un}function cn(e,t,n,r,o){const s=e.providerIndexes,i=t.data,a=1048575&s,u=e.directiveStart,l=e.directiveEnd,c=s>>20,h=o?a+c:l;for(let e=r?a:a+c;e<h;e++){const t=i[e];if(e<u&&n===t||e>=u&&t.type===n)return e}if(o){const e=i[u];if(e&&Te(e)&&e.type===n)return u}return null}function hn(e,t,n,r){let o=e[n];const s=t.data;if(o instanceof Gt){const i=o;i.resolving&&qe(Ze(s[n]));const a=Xt(i.canSeeViewProviders);i.resolving=!0;const u=i.injectImpl?de(i.injectImpl):null;Mt(e,r);try{o=e[n]=i.factory(void 0,s,e,r),t.firstCreatePass&&n>=r.directiveStart&&(ngDevMode&&function(e){void 0!==e.type&&null!=e.selectors&&void 0!==e.inputs||te("Expected a DirectiveDef/ComponentDef and this object does not seem to have the expected shape.")}(s[n]),
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function(e,t,n){ngDevMode&&He(n);const{ngOnChanges:r,ngOnInit:o,ngDoCheck:s}=t.type.prototype;if(r){const r=Je(t);(n.preOrderHooks||(n.preOrderHooks=[])).push(e,r),(n.preOrderCheckHooks||(n.preOrderCheckHooks=[])).push(e,r)}o&&(n.preOrderHooks||(n.preOrderHooks=[])).push(0-e,o),s&&((n.preOrderHooks||(n.preOrderHooks=[])).push(e,s),(n.preOrderCheckHooks||(n.preOrderCheckHooks=[])).push(e,s))}(n,s[n],t))}finally{null!==u&&de(u),Xt(a),i.resolving=!1,Tt()}}return o}function dn(e,t,n){const r=1<<e,o=64&e,s=32&e;let i;return i=128&e?o?s?n[t+7]:n[t+6]:s?n[t+5]:n[t+4]:o?s?n[t+3]:n[t+2]:s?n[t+1]:n[t],!!(i&r)}function pn(e,t){return!(e&C.Self||e&C.Host&&t)}class fn{constructor(e,t){this._tNode=e,this._lView=t}get(e,t){return an(this._tNode,this._lView,e,void 0,t)}}function gn(e){return e.ngDebugContext}function yn(e){return e.ngOriginalError}function mn(e,...t){e.error(...t)}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class _n{constructor(){this._console=console}handleError(e){const t=this._findOriginalError(e),n=this._findContext(e),r=function(e){return e.ngErrorLogger||mn}(e);r(this._console,"ERROR",e),t&&r(this._console,"ORIGINAL ERROR",t),n&&r(this._console,"ERROR CONTEXT",n)}_findContext(e){return e?gn(e)?gn(e):this._findContext(yn(e)):null}_findOriginalError(e){let t=yn(e);for(;t&&yn(t);)t=yn(t);return t}}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
let vn=!0,Dn=!1;function bn(){return Dn=!0,vn}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function Cn(e){const t={};for(const n of e.split(","))t[n]=!0;return t}function wn(...e){const t={};for(const n of e)for(const e in n)n.hasOwnProperty(e)&&(t[e]=!0);return t}const En=Cn("area,br,col,hr,img,wbr"),An=Cn("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),Fn=Cn("rp,rt"),xn=wn(Fn,An),Mn=wn(An,Cn("address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul")),kn=wn(Fn,Cn("a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video")),Sn=(wn(En,Mn,kn,xn),Cn("background,cite,href,itemtype,longdesc,poster,src,xlink:href")),On=Cn("srcset"),Vn=Cn("abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width"),Tn=Cn("aria-activedescendant,aria-atomic,aria-autocomplete,aria-busy,aria-checked,aria-colcount,aria-colindex,aria-colspan,aria-controls,aria-current,aria-describedby,aria-details,aria-disabled,aria-dropeffect,aria-errormessage,aria-expanded,aria-flowto,aria-grabbed,aria-haspopup,aria-hidden,aria-invalid,aria-keyshortcuts,aria-label,aria-labelledby,aria-level,aria-live,aria-modal,aria-multiline,aria-multiselectable,aria-orientation,aria-owns,aria-placeholder,aria-posinset,aria-pressed,aria-readonly,aria-relevant,aria-required,aria-roledescription,aria-rowcount,aria-rowindex,aria-rowspan,aria-selected,aria-setsize,aria-sort,aria-valuemax,aria-valuemin,aria-valuenow,aria-valuetext");wn(Sn,On,Vn,Tn),Cn("script,style,template");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var In;
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function Pn(e){if(!ngDevMode)throw new Error("Looks like we are in 'prod mode', but we are creating a named Array type, which is wrong! Check your code");try{return new(0,Pn.constructor)("Array",`return class ${e} extends Array{}`)(Array)}catch(e){return Array}}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */!function(e){e[e.NONE=0]="NONE",e[e.HTML=1]="HTML",e[e.STYLE=2]="STYLE",e[e.SCRIPT=3]="SCRIPT",e[e.URL=4]="URL",e[e.RESOURCE_URL=5]="RESOURCE_URL"}(In||(In={}));function Nn(e,t){e.__ngContext__=t}function jn(e){return 0==(1&e)}function Bn(e,t){return e?":not("+t.trim()+")":t}function Rn(e){let t=e[0],n=1,r=2,o="",s=!1;for(;n<e.length;){let i=e[n];if("string"==typeof i)if(2&r){const t=e[++n];o+="["+i+(t.length>0?'="'+t+'"':"")+"]"}else 8&r?o+="."+i:4&r&&(o+=" "+i);else""===o||jn(i)||(t+=Bn(s,o),o=""),r=i,s=s||!jn(r);n++}return""!==o&&(t+=Bn(s,o)),t}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const Ln="undefined"==typeof ngDevMode||ngDevMode?{__brand__:"NO_CHANGE"}:{};
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function Hn(e){ngDevMode&&Le(e);const t=e[3];return Oe(t)?t[3]:t}function $n(e){return Un(e[13])}function Gn(e){return Un(e[4])}function Un(e){for(;null!==e&&!Oe(e);)e=e[4];return e}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function zn(e,t,n,r){if(ngDevMode&&X(n,-1,"Invalid index"),ngDevMode&&re(t,n+20),!r){if(3==(3&t[2])){const r=e.preOrderCheckHooks;null!==r&&Bt(t,r,n)}else{const r=e.preOrderHooks;null!==r&&Rt(t,r,0,n)}}Nt(n)}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function Zn(e){return ngDevMode&&W(e,"expected number"),e>>17&32767}function Wn(e){return ngDevMode&&W(e,"expected number"),2==(2&e)}function qn(e){return ngDevMode&&W(e,"expected number"),(131068&e)>>2}function Kn(e){return ngDevMode&&W(e,"expected number"),1==(1&e)}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function Yn(e,t){if(!ngDevMode)throw new Error("This method should be guarded with `ngDevMode` so that it can be tree shaken in production!");Object.defineProperty(e,"debug",{value:t,enumerable:!1})}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const Qn=("undefined"==typeof ngDevMode||!!ngDevMode)&&Z();let Jn,Xn,er;function tr(e){return function(e,t){switch(e){case 0:return void 0===er&&(er=new(Pn("LRootView"))),er;case 1:void 0===Jn&&(Jn=new Map);let e=Jn.get(t);return void 0===e&&(e=new(Pn("LComponentView"+nr(t))),Jn.set(t,e)),e;case 2:void 0===Xn&&(Xn=new Map);let n=Xn.get(t);return void 0===n&&(n=new(Pn("LEmbeddedView"+nr(t))),Xn.set(t,n)),n}throw new Error("unreachable code")}(e.type,e.template&&e.template.name).concat(e.blueprint)}function nr(e){if(null==e)return"";const t=e.lastIndexOf("_Template");return"_"+(-1===t?e:e.substr(0,t))}const rr=class{constructor(e,t,n,r,o,s,i,a,u,l,c,h,d,p,f,g,y,m,_,v,D,b,C,w,E,A,F,x,M,k,S){this.tView_=e,this.type=t,this.index=n,this.injectorIndex=r,this.directiveStart=o,this.directiveEnd=s,this.directiveStylingLast=i,this.propertyBindings=a,this.flags=u,this.providerIndexes=l,this.tagName=c,this.attrs=h,this.mergedAttrs=d,this.localNames=p,this.initialInputs=f,this.inputs=g,this.outputs=y,this.tViews=m,this.next=_,this.projectionNext=v,this.child=D,this.parent=b,this.projection=C,this.styles=w,this.stylesWithoutHost=E,this.residualStyles=A,this.classes=F,this.classesWithoutHost=x,this.residualClasses=M,this.classBindings=k,this.styleBindings=S}debugNodeInjectorPath(e){const t=[];let n=rn(this,e);for(ngDevMode&&Ue(e,n);-1!==n;){const r=e[1].data[n+8];t.push(mr(r,e));const o=e[n+8];-1===o?n=-1:(n=Yt(o),e=Qt(o,e))}return t}get type_(){return Ut[this.type]||`TNodeType.?${this.type}?`}get flags_(){const e=[];return 16&this.flags&&e.push("TNodeFlags.hasClassInput"),8&this.flags&&e.push("TNodeFlags.hasContentQuery"),32&this.flags&&e.push("TNodeFlags.hasStyleInput"),128&this.flags&&e.push("TNodeFlags.hasHostBindings"),2&this.flags&&e.push("TNodeFlags.isComponentHost"),1&this.flags&&e.push("TNodeFlags.isDirectiveHost"),64&this.flags&&e.push("TNodeFlags.isDetached"),4&this.flags&&e.push("TNodeFlags.isProjected"),e.join("|")}get template_(){const e=[];if(e.push("<",this.tagName||this.type_),this.attrs)for(let t=0;t<this.attrs.length;){const n=this.attrs[t++];if("number"==typeof n)break;const r=this.attrs[t++];e.push(" ",n,'="',r,'"')}return e.push(">"),sr(this.child,e),e.push("</",this.tagName||this.type_,">"),e.join("")}get styleBindings_(){return or(this,!1)}get classBindings_(){return or(this,!0)}get providerIndexStart_(){return 1048575&this.providerIndexes}get providerIndexEnd_(){return this.providerIndexStart_+(this.providerIndexes>>>20)}};function or(e,t){const n=e.tView_.data,r=[],o=t?e.classBindings:e.styleBindings,s=Zn(o),i=qn(o);let a=0!==i,u=a?i:s;for(;0!==u;){const e=n[u],t=n[u+1];r.unshift({key:e,index:u,isTemplate:a,prevDuplicate:Wn(t),nextDuplicate:Kn(t),nextIndex:qn(t),prevIndex:Zn(t)}),u===s&&(a=!1),u=Zn(t)}return r.push((t?e.residualClasses:e.residualStyles)||null),r}function sr(e,t){for(;e;)t.push(e.template_),e=e.next}const ir=Qn&&Pn("TViewData")||null;let ar;const ur=Qn&&Pn("LViewBlueprint")||null,lr=(Qn&&Pn("MatchesArray"),Qn&&Pn("TViewComponents")||null),cr=(Qn&&Pn("TNodeLocalNames"),Qn&&Pn("TNodeInitialInputs"),Qn&&Pn("TNodeInitialData"),Qn&&Pn("LCleanup")||null),hr=Qn&&Pn("TCleanup")||null;function dr(e){if(e){const t=e.debug;return ee(t,"Object does not have a debug representation."),t}return e}function pr(e,t=!1){const n=at(e);if(n)switch(n.nodeType){case Node.TEXT_NODE:return n.textContent;case Node.COMMENT_NODE:return`\x3c!--${n.textContent}--\x3e`;case Node.ELEMENT_NODE:const e=n.outerHTML;if(t)return e;{const t=">"+n.innerHTML+"<";return e.split(t)[0]+">"}}return null}class fr{constructor(e){this._raw_lView=e}get flags(){const e=this._raw_lView[2];return{__raw__flags__:e,initPhaseState:3&e,creationMode:!!(4&e),firstViewPass:!!(8&e),checkAlways:!!(16&e),dirty:!!(64&e),attached:!!(128&e),destroyed:!!(256&e),isRoot:!!(512&e),indexWithinInitPhase:e>>11}}get parent(){return dr(this._raw_lView[3])}get hostHTML(){return pr(this._raw_lView[0],!0)}get html(){return(this.nodes||[]).map(e=>pr(e.native,!0)).join("")}get context(){return this._raw_lView[8]}get nodes(){const e=this._raw_lView;return yr(e[1].firstChild,e)}get tView(){return this._raw_lView[1]}get cleanup(){return this._raw_lView[7]}get injector(){return this._raw_lView[9]}get rendererFactory(){return this._raw_lView[10]}get renderer(){return this._raw_lView[11]}get sanitizer(){return this._raw_lView[12]}get childHead(){return dr(this._raw_lView[13])}get next(){return dr(this._raw_lView[4])}get childTail(){return dr(this._raw_lView[14])}get declarationView(){return dr(this._raw_lView[15])}get queries(){return this._raw_lView[19]}get tHost(){return this._raw_lView[6]}get decls(){return gr(this.tView,this._raw_lView,20,this.tView.bindingStartIndex)}get vars(){const e=this.tView;return gr(e,this._raw_lView,e.bindingStartIndex,e.i18nStartIndex)}get i18n(){const e=this.tView;return gr(e,this._raw_lView,e.i18nStartIndex,e.expandoStartIndex)}get expando(){this.tView;return gr(this.tView,this._raw_lView,this.tView.expandoStartIndex,this._raw_lView.length)}get childViews(){const e=[];let t=this.childHead;for(;t;)e.push(t),t=t.next;return e}}function gr(e,t,n,r){let o=[];for(let s=n;s<r;s++)o.push({index:s,t:e.data[s],l:t[s]});return{start:n,end:r,length:r-n,content:o}}function yr(e,t){if(e){const n=[];let r=e;for(;r;)n.push(mr(r,t)),r=r.next;return n}return[]}function mr(e,t){const n=at(t[e.index]),r=[],o=[],s=t[1];for(let n=e.directiveStart;n<e.directiveEnd;n++){const e=s.data[n];r.push(e.type),o.push(t[n])}return{html:pr(n),type:Ut[e.type],native:n,children:yr(e.child,t),factories:r,instances:o,injector:_r(e,s,t)}}function _r(e,t,n){const r=[];for(let n=e.providerIndexStart_;n<e.providerIndexEnd_;n++)r.push(t.data[n]);const o=[];for(let n=e.providerIndexEnd_;n<e.directiveEnd;n++)o.push(t.data[n]);return{bloom:Dr(n,e.injectorIndex),cumulativeBloom:Dr(t.data,e.injectorIndex),providers:o,viewProviders:r,parentInjectorIndex:n[e.providerIndexStart_-1]}}function vr(e,t){const n=e[t];if("number"!=typeof n)return"????????";const r="00000000"+n.toString(2);return r.substring(r.length-8)}function Dr(e,t){return`${vr(e,t+7)}_${vr(e,t+6)}_${vr(e,t+5)}_${vr(e,t+4)}_${vr(e,t+3)}_${vr(e,t+2)}_${vr(e,t+1)}_${vr(e,t+0)}`}const br=Promise.resolve(null);function Cr(e,t){const n=e.contentQueries;if(null!==n)for(let r=0;r<n.length;r+=2){const o=n[r],s=n[r+1];if(-1!==s){const n=e.data[s];ngDevMode&&ee(n.contentQueries,"contentQueries function should be defined"),xt(o),n.contentQueries(2,t[s],s)}}}function wr(e,t,n){return st(t)?t.createElement(e,n):null===n?t.createElement(e):t.createElementNS(n,e)}function Er(e,t,n,r,o,s,i,a,u,l){const c=ngDevMode?tr(t):t.blueprint.slice();return c[0]=o,c[2]=140|r,gt(c),ngDevMode&&t.declTNode&&e&&Pe(t.declTNode,e),c[3]=c[15]=e,c[8]=n,c[10]=i||e&&e[10],ngDevMode&&ee(c[10],"RendererFactory is required"),c[11]=a||e&&e[11],ngDevMode&&ee(c[11],"Renderer is required"),c[12]=u||e&&e[12]||null,c[9]=l||e&&e[9]||null,c[6]=s,ngDevMode&&K(2!=t.type||null!==e,!0,"Embedded views must have parentLView"),c[16]=2==t.type?e[16]:c,ngDevMode&&function(e){Yn(e,new fr(e))}(c),c}function Ar(e,t,n,r,o){const s=t+20,i=e.data[s]||function(e,t,n,r,o){const s=vt(),i=bt(),a=i?s:s&&s.parent,u=e.data[t]=function(e,t,n,r,o,s){ngDevMode&&ngDevMode.tNode++;let i=t?t.injectorIndex:-1;const a=ngDevMode?new rr(e,n,r,i,-1,-1,-1,null,0,0,o,s,null,null,void 0,null,null,null,null,null,null,t,null,null,null,void 0,null,null,void 0,0,0):{type:n,index:r,injectorIndex:i,directiveStart:-1,directiveEnd:-1,directiveStylingLast:-1,propertyBindings:null,flags:0,providerIndexes:0,tagName:o,attrs:s,mergedAttrs:null,localNames:null,initialInputs:void 0,inputs:null,outputs:null,tViews:null,next:null,projectionNext:null,child:null,parent:t,projection:null,styles:null,stylesWithoutHost:null,residualStyles:void 0,classes:null,classesWithoutHost:null,residualClasses:void 0,classBindings:0,styleBindings:0};ngDevMode&&Object.seal(a);return a}(e,a,n,t,r,o);null===e.firstChild&&(e.firstChild=u);null!==s&&(i&&null==s.child&&null!==u.parent?s.child=u:i||(s.next=u));return u}(e,s,n,r,o);return Dt(i,!0),i}function Fr(e,t,n){ngDevMode&&K(pt(t),!0,"Should be run in creation mode"),kt(t);try{const r=e.viewQuery;null!==r&&Kr(1,r,n);const o=e.template;null!==o&&kr(e,t,o,1,n),e.firstCreatePass&&(e.firstCreatePass=!1),e.staticContentQueries&&Cr(e,t),e.staticViewQueries&&Kr(2,e.viewQuery,n);const s=e.components;null!==s&&function(e,t){for(let n=0;n<t.length;n++)Gr(e,t[n])}(t,s)}catch(t){throw e.firstCreatePass&&(e.incompleteFirstPass=!0),t}finally{t[2]&=-5,It()}}function xr(e,t,n,r){ngDevMode&&K(pt(t),!1,"Should be run in update mode");const o=t[2];if(256==(256&o))return;kt(t);const s=Ct();try{gt(t),Et(e.bindingStartIndex),null!==n&&kr(e,t,n,2,r);const i=3==(3&o);if(!s)if(i){const n=e.preOrderCheckHooks;null!==n&&Bt(t,n,null)}else{const n=e.preOrderHooks;null!==n&&Rt(t,n,0,null),Lt(t,0)}if(function(e){for(let t=$n(e);null!==t;t=Gn(t)){if(!t[2])continue;const e=t[9];ngDevMode&&ee(e,"Transplanted View flags set but missing MOVED_VIEWS");for(let t=0;t<e.length;t++){const n=e[t],r=n[3];ngDevMode&&Be(r),0==(1024&n[2])&&yt(r,1),n[2]|=1024}}}(t),function(e){for(let t=$n(e);null!==t;t=Gn(t))for(let e=10;e<t.length;e++){const n=t[e],r=n[1];ngDevMode&&ee(r,"TView must be allocated"),ft(n)&&xr(r,n,r.template,n[8])}}(t),null!==e.contentQueries&&Cr(e,t),!s)if(i){const n=e.contentCheckHooks;null!==n&&Bt(t,n)}else{const n=e.contentHooks;null!==n&&Rt(t,n,1),Lt(t,1)}!function(e,t){ngDevMode&&Q(e,t[1],"`LView` is not associated with the `TView`!");try{const n=e.expandoInstructions;if(null!==n){let r=e.expandoStartIndex,o=-1,s=-1;for(let e=0;e<n.length;e++){const i=n[e];if("number"==typeof i)if(i<=0){s=0-i,Nt(s);r+=9+n[++e],o=r}else r+=i;else{if(null!==i){ngDevMode&&J(o,1048576,"Reached the max number of host bindings"),At(r,o);i(2,t[o])}o++}}}}finally{Nt(-1)}}(e,t);const a=e.components;null!==a&&function(e,t){for(let n=0;n<t.length;n++)$r(e,t[n])}(t,a);const u=e.viewQuery;if(null!==u&&Kr(2,u,r),!s)if(i){const n=e.viewCheckHooks;null!==n&&Bt(t,n)}else{const n=e.viewHooks;null!==n&&Rt(t,n,2),Lt(t,2)}!0===e.firstUpdatePass&&(e.firstUpdatePass=!1),s||(t[2]&=-73),1024&t[2]&&(t[2]&=-1025,yt(t[3],-1))}finally{It()}}function Mr(e,t,n,r){const o=t[10],s=!Ct(),i=pt(t);try{s&&!i&&o.begin&&o.begin(),i&&Fr(e,t,r),xr(e,t,n,r)}finally{s&&!i&&o.end&&o.end()}}function kr(e,t,n,r,o){const s=Pt();try{Nt(-1),2&r&&t.length>20&&zn(e,t,0,Ct()),n(r,o)}finally{Nt(s)}}function Sr(e){const t=e.tView;if(null===t||t.incompleteFirstPass){const t=null;return e.tView=Or(1,t,e.template,e.decls,e.vars,e.directiveDefs,e.pipeDefs,e.viewQuery,e.schemas,e.consts)}return t}function Or(e,t,n,r,o,s,i,a,u,l){ngDevMode&&ngDevMode.tView++;const c=20+r,h=c+o,d=function(e,t){const n=ngDevMode?new ur:[];for(let r=0;r<t;r++)n.push(r<e?null:Ln);return n}(c,h),p="function"==typeof l?l():l,f=d[1]=ngDevMode?new class{constructor(e,t,n,r,o,s,i,a,u,l,c,h,d,p,f,g,y,m,_,v,D,b,C,w,E,A,F,x,M,k,S,O){this.type=e,this.blueprint=t,this.template=n,this.queries=r,this.viewQuery=o,this.declTNode=s,this.data=i,this.bindingStartIndex=a,this.expandoStartIndex=u,this.expandoInstructions=l,this.firstCreatePass=c,this.firstUpdatePass=h,this.staticViewQueries=d,this.staticContentQueries=p,this.preOrderHooks=f,this.preOrderCheckHooks=g,this.contentHooks=y,this.contentCheckHooks=m,this.viewHooks=_,this.viewCheckHooks=v,this.destroyHooks=D,this.cleanup=b,this.contentQueries=C,this.components=w,this.directiveRegistry=E,this.pipeRegistry=A,this.firstChild=F,this.schemas=x,this.consts=M,this.incompleteFirstPass=k,this._decls=S,this._vars=O}get template_(){const e=[];return sr(this.firstChild,e),e.join("")}get type_(){return ke[this.type]||`TViewType.?${this.type}?`}get i18nStartIndex(){return 20+this._decls+this._vars}}(e,d,n,null,a,t,(g=d,void 0===ar&&(ar=new ir),ar.concat(g)).fill(null,c),c,h,null,!0,!0,!1,!1,null,null,null,null,null,null,null,null,null,null,"function"==typeof s?s():s,"function"==typeof i?i():i,null,u,p,!1,r,o):{type:e,blueprint:d,template:n,queries:null,viewQuery:a,declTNode:t,data:d.slice().fill(null,c),bindingStartIndex:c,expandoStartIndex:h,expandoInstructions:null,firstCreatePass:!0,firstUpdatePass:!0,staticViewQueries:!1,staticContentQueries:!1,preOrderHooks:null,preOrderCheckHooks:null,contentHooks:null,contentCheckHooks:null,viewHooks:null,viewCheckHooks:null,destroyHooks:null,cleanup:null,contentQueries:null,components:null,directiveRegistry:"function"==typeof s?s():s,pipeRegistry:"function"==typeof i?i():i,firstChild:null,schemas:u,consts:p,incompleteFirstPass:!1};var g;return ngDevMode&&Object.seal(f),f}function Vr(e,t){return new Error(`Renderer: ${e} [${Ze(t)}]`)}function Tr(e,t,n){if(st(e)){const r=n===Ee.ShadowDom;return e.selectRootElement(t,r)}let r="string"==typeof t?e.querySelector(t):t;return ngDevMode&&function(e,t){if(!e)throw Vr("string"==typeof t?"Host node with selector not found:":"Host node is required:",t)}(r,t),r.textContent="",r}function Ir(e,t,n,r){const o=Qr(t);o.push(n),e.firstCreatePass&&function(e){return e.cleanup||(e.cleanup=ngDevMode?new hr:[])}(e).push(r,o.length-1)}function Pr(e,t){ngDevMode&&He(e);const n=e.expandoInstructions;n.push(t.hostBindings);0!==t.hostVars&&n.push(t.hostVars)}function Nr(e,t,n){ngDevMode&&He(e),ngDevMode&&Q(e,t[1],"`LView` must be associated with `TView`!");for(let r=0;r<n;r++)t.push(Ln),e.blueprint.push(Ln),e.data.push(null)}function jr(e,t){null!==e.hostBindings&&e.hostBindings(1,t)}function Br(e,t,n){ngDevMode&&K(e.firstCreatePass,!0,"Expando block should only be generated on first create pass.");const r=20-t.index,o=1048575&t.providerIndexes,s=e.data.length-o;(e.expandoInstructions||(e.expandoInstructions=[])).push(r,s,n)}function Rr(e,t){ngDevMode&&He(e),t.flags|=2,(e.components||(e.components=ngDevMode?new lr:[])).push(t.index)}function Lr(e,t,n){ngDevMode&&Y(n,e.directiveEnd-e.directiveStart,"Reached the max number of directives"),e.flags|=1,e.directiveStart=t,e.directiveEnd=t+n,e.providerIndexes=t}function Hr(e,t,n){e.data.push(n);const r=n.factory||(n.factory=Me(n.type,!0)),o=new Gt(r,Te(n),null);e.blueprint.push(o),t.push(o)}("undefined"==typeof ngDevMode||ngDevMode)&&Z()&&Pn("LContainer");function $r(e,t){ngDevMode&&K(pt(e),!1,"Should be run in update mode");const n=ct(t,e);if(ft(n)){const e=n[1];80&n[2]?xr(e,n,e.template,n[8]):n[5]>0&&function e(t){for(let n=$n(t);null!==n;n=Gn(n))for(let t=10;t<n.length;t++){const r=n[t];if(1024&r[2]){const e=r[1];ngDevMode&&ee(e,"TView must be allocated"),xr(e,r,e.template,r[8])}else r[5]>0&&e(r)}const n=t[1].components;if(null!==n)for(let r=0;r<n.length;r++){const o=ct(n[r],t);ft(o)&&o[5]>0&&e(o)}}(n)}}function Gr(e,t){ngDevMode&&K(pt(e),!0,"Should be run in creation mode");const n=ct(t,e),r=n[1];!function(e,t){for(let n=t.length;n<e.blueprint.length;n++)t.push(e.blueprint[n])}(r,n),Fr(r,n,n[8])}function Ur(e,t){return e[13]?e[14][4]=t:e[13]=t,e[14]=t,t}function zr(e){for(;e;){e[2]|=64;const t=Hn(e);if(Ie(e)&&!t)return e;e=t}return null}function Zr(e){for(let t=0;t<e.components.length;t++){const n=e.components[t],r=dt(n),o=r[1];Mr(o,r,o.template,n)}}function Wr(e,t,n){const r=t[10];r.begin&&r.begin();try{xr(e,t,e.template,n)}catch(e){throw Jr(t,e),e}finally{r.end&&r.end()}}function qr(e){Zr(e[8])}function Kr(e,t,n){ngDevMode&&ee(t,"View queries function to execute must be defined."),xt(0),t(e,n)}const Yr=br;function Qr(e){return e[7]||(e[7]=ngDevMode?new cr:[])}function Jr(e,t){const n=e[9],r=n?n.get(_n,null):null;r&&r.handleError(t)}function Xr(e,t,n,r,o){if(null!=r){let s,i=!1;Oe(r)?s=r:Se(r)&&(i=!0,ngDevMode&&ee(r[0],"HOST must be defined for a component LView"),r=r[0]);const a=at(r);ngDevMode&&!st(t)&&ne(a),0===e&&null!==n?null==o?oo(t,n,a):ro(t,n,a,o||null):1===e&&null!==n?ro(t,n,a,o||null):2===e?io(t,a,i):3===e&&(ngDevMode&&ngDevMode.rendererDestroyNode++,t.destroyNode(a)),null!=s&&function(e,t,n,r,o){ngDevMode&&Be(n);const s=n[7],i=at(n);s!==i&&Xr(t,e,r,s,o);for(let o=10;o<n.length;o++){const i=n[o];uo(i[1],i,e,t,r,s)}}(t,e,s,n,o)}}function eo(e,t){ngDevMode&&Be(e),ngDevMode&&ee(e[9],"A projected view should belong to a non-empty projected views collection");const n=e[9],r=n.indexOf(t),o=t[3];ngDevMode&&Be(o),1024&t[2]&&(t[2]&=-1025,yt(o,-1)),n.splice(r,1)}function to(e,t){if(!(256&t[2])){const n=t[11];st(n)&&n.destroyNode&&uo(e,t,n,3,null,null),function(e){let t=e[13];if(!t)return no(e[1],e);for(;t;){let n=null;if(Se(t))n=t[13];else{ngDevMode&&Be(t);const e=t[10];e&&(n=e)}if(!n){for(;t&&!t[4]&&t!==e;)Se(t)&&no(t[1],t),t=t[3];null===t&&(t=e),Se(t)&&no(t[1],t),n=t&&t[4]}t=n}}(t)}}function no(e,t){if(!(256&t[2])){t[2]&=-129,t[2]|=256,function(e,t){let n;if(null!=e&&null!=(n=e.destroyHooks))for(let e=0;e<n.length;e+=2){const r=t[n[e]];if(!(r instanceof Gt)){const t=n[e+1];if(Array.isArray(t))for(let e=0;e<t.length;e+=2)t[e+1].call(r[t[e]]);else t.call(r)}}}(e,t),function(e,t){const n=e.cleanup;if(null!==n){const e=t[7];for(let r=0;r<n.length-1;r+=2)if("string"==typeof n[r]){const o=n[r+1],s="function"==typeof o?o(t):at(t[o]),i=e[n[r+2]],a=n[r+3];"boolean"==typeof a?s.removeEventListener(n[r],i,a):a>=0?e[a]():e[-a].unsubscribe(),r+=2}else{const t=e[n[r+1]];n[r].call(t)}t[7]=null}}(e,t),1===t[1].type&&st(t[11])&&(ngDevMode&&ngDevMode.rendererDestroy++,t[11].destroy());const n=t[17];if(null!==n&&Oe(t[3])){n!==t[3]&&eo(n,t);const r=t[19];null!==r&&r.detachView(e)}}}function ro(e,t,n,r){ngDevMode&&ngDevMode.rendererInsertBefore++,st(e)?e.insertBefore(t,n,r):t.insertBefore(n,r,!0)}function oo(e,t,n){ngDevMode&&ngDevMode.rendererAppendChild++,ngDevMode&&ee(t,"parent node must be defined"),st(e)?e.appendChild(t,n):t.appendChild(n)}function so(e,t){return st(e)?e.parentNode(t):t.parentNode}function io(e,t,n){const r=so(e,t);r&&function(e,t,n,r){st(e)?e.removeChild(t,n,r):t.removeChild(n)}(e,r,t,n)}function ao(e,t,n,r,o,s,i){for(;null!=n;){ngDevMode&&Pe(n,r),ngDevMode&&zt(n,[0,2,3,1,4]);const a=r[n.index],u=n.type;i&&0===t&&(a&&Nn(at(a),r),n.flags|=4),64!=(64&n.flags)&&(3===u||4===u?(ao(e,t,n.child,r,o,s,!1),Xr(t,e,o,a,s)):1===u?lo(e,t,r,n,o,s):(ngDevMode&&zt(n,[2,0]),Xr(t,e,o,a,s))),n=i?n.projectionNext:n.next}}function uo(e,t,n,r,o,s){ao(n,r,e.firstChild,t,o,s,!1)}function lo(e,t,n,r,o,s){const i=n[16],a=i[6];ngDevMode&&K(typeof r.projection,"number","expecting projection index");const u=a.projection[r.projection];if(Array.isArray(u))for(let n=0;n<u.length;n++){Xr(t,e,o,u[n],s)}else{ao(e,t,u,i[3],o,s,!0)}}function co(e,t,n){ngDevMode&&q(n,"'newValue' should be a string"),st(e)?e.setAttribute(t,"style",n):t.style.cssText=n,ngDevMode&&ngDevMode.rendererSetStyle++}function ho(e,t,n){ngDevMode&&q(n,"'newValue' should be a string"),st(e)?""===n?e.removeAttribute(t,"class"):e.setAttribute(t,"class",n):t.className=n,ngDevMode&&ngDevMode.rendererSetClassName++}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class po{constructor(e,t){this._lView=e,this._cdRefInjectingView=t,this._appRef=null,this._viewContainerRef=null}get rootNodes(){const e=this._lView,t=e[1];return function e(t,n,r,o,s=!1){for(;null!==r;){ngDevMode&&zt(r,[2,0,1,3,4]);const i=n[r.index];if(null!==i&&o.push(at(i)),Oe(i))for(let t=10;t<i.length;t++){const n=i[t],r=n[1].firstChild;null!==r&&e(n[1],n,r,o)}const a=r.type;if(3===a||4===a)e(t,n,r.child,o);else if(1===a){const t=n[16],s=t[6],i=r.projection;ngDevMode&&ee(s.projection,"Components with projection nodes (<ng-content>) must have projection slots defined.");const a=s.projection[i];if(Array.isArray(a))o.push(...a);else{const n=Hn(t);ngDevMode&&ee(n,"Component views should always have a parent view (component's host view)"),e(n[1],n,a,o,!0)}}r=s?r.projectionNext:r.next}return o}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */(t,e,t.firstChild,[])}get context(){return this._lView[8]}get destroyed(){return 256==(256&this._lView[2])}destroy(){if(this._appRef)this._appRef.detachView(this);else if(this._viewContainerRef){const e=this._viewContainerRef.indexOf(this);e>-1&&this._viewContainerRef.detach(e),this._viewContainerRef=null}to(this._lView[1],this._lView)}onDestroy(e){Ir(this._lView[1],this._lView,null,e)}markForCheck(){zr(this._cdRefInjectingView||this._lView)}detach(){this._lView[2]&=-129}reattach(){this._lView[2]|=128}detectChanges(){Wr(this._lView[1],this._lView,this.context)}checkNoChanges(){!function(e,t,n){wt(!0);try{Wr(e,t,n)}finally{wt(!1)}}(this._lView[1],this._lView,this.context)}attachToViewContainerRef(e){if(this._appRef)throw new Error("This view is already attached directly to the ApplicationRef!");this._viewContainerRef=e}detachFromAppRef(){var e,t;this._appRef=null,e=this._lView[1],t=this._lView,uo(e,t,t[11],2,null,null)}attachToAppRef(e){if(this._viewContainerRef)throw new Error("This view is already attached to a ViewContainer!");this._appRef=e}}class fo extends po{constructor(e){super(e),this._view=e}detectChanges(){qr(this._view)}checkNoChanges(){!function(e){wt(!0);try{qr(e)}finally{wt(!1)}}(this._view)}get context(){return null}}let go;function yo(e,t,n){return go||(go=class extends e{}),new go(ut(t,n))}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class mo{}mo.__NG_ELEMENT_ID__=()=>vo();const _o=(...e)=>{},vo=_o,Do=Function;function bo(e){return"function"==typeof e}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const Co=/^function\s+\S+\(\)\s*{[\s\S]+\.apply\(this,\s*(arguments|[^()]+\(arguments\))\)/,wo=/^class\s+[A-Za-z\d$_]*\s*extends\s+[^{]+{/,Eo=/^class\s+[A-Za-z\d$_]*\s*extends\s+[^{]+{[\s\S]*constructor\s*\(/,Ao=/^class\s+[A-Za-z\d$_]*\s*extends\s+[^{]+{[\s\S]*constructor\s*\(\)\s*{\s*super\(\.\.\.arguments\)/;class Fo{constructor(e){this._reflect=e||R.Reflect}isReflectionEnabled(){return!0}factory(e){return(...t)=>new e(...t)}_zipTypesAndAnnotations(e,t){let n;n=be(void 0===e?t.length:e.length);for(let r=0;r<n.length;r++)void 0===e?n[r]=[]:e[r]&&e[r]!=Object?n[r]=[e[r]]:n[r]=[],t&&null!=t[r]&&(n[r]=n[r].concat(t[r]));return n}_ownParameters(e,t){if(function(e){return Co.test(e)||Ao.test(e)||wo.test(e)&&!Eo.test(e)}(e.toString()))return null;if(e.parameters&&e.parameters!==t.parameters)return e.parameters;const n=e.ctorParameters;if(n&&n!==t.ctorParameters){const e="function"==typeof n?n():n,t=e.map(e=>e&&e.type),r=e.map(e=>e&&xo(e.decorators));return this._zipTypesAndAnnotations(t,r)}const r=e.hasOwnProperty(c)&&e[c],o=this._reflect&&this._reflect.getOwnMetadata&&this._reflect.getOwnMetadata("design:paramtypes",e);return o||r?this._zipTypesAndAnnotations(o,r):be(e.length)}parameters(e){if(!bo(e))return[];const t=Mo(e);let n=this._ownParameters(e,t);return n||t===Object||(n=this.parameters(t)),n||[]}_ownAnnotations(e,t){if(e.annotations&&e.annotations!==t.annotations){let t=e.annotations;return"function"==typeof t&&t.annotations&&(t=t.annotations),t}return e.decorators&&e.decorators!==t.decorators?xo(e.decorators):e.hasOwnProperty(l)?e[l]:null}annotations(e){if(!bo(e))return[];const t=Mo(e),n=this._ownAnnotations(e,t)||[];return(t!==Object?this.annotations(t):[]).concat(n)}_ownPropMetadata(e,t){if(e.propMetadata&&e.propMetadata!==t.propMetadata){let t=e.propMetadata;return"function"==typeof t&&t.propMetadata&&(t=t.propMetadata),t}if(e.propDecorators&&e.propDecorators!==t.propDecorators){const t=e.propDecorators,n={};return Object.keys(t).forEach(e=>{n[e]=xo(t[e])}),n}return e.hasOwnProperty(h)?e[h]:null}propMetadata(e){if(!bo(e))return{};const t=Mo(e),n={};if(t!==Object){const e=this.propMetadata(t);Object.keys(e).forEach(t=>{n[t]=e[t]})}const r=this._ownPropMetadata(e,t);return r&&Object.keys(r).forEach(e=>{const t=[];n.hasOwnProperty(e)&&t.push(...n[e]),t.push(...r[e]),n[e]=t}),n}ownPropMetadata(e){return bo(e)&&this._ownPropMetadata(e,Mo(e))||{}}hasLifecycleHook(e,t){return e instanceof Do&&t in e.prototype}guards(e){return{}}getter(e){return new Function("o","return o."+e+";")}setter(e){return new Function("o","v","return o."+e+" = v;")}method(e){return new Function("o","args",`if (!o.${e}) throw new Error('"${e}" is undefined');\n        return o.${e}.apply(o, args);`)}importUri(e){return"object"==typeof e&&e.filePath?e.filePath:"./"+S(e)}resourceUri(e){return"./"+S(e)}resolveIdentifier(e,t,n,r){return r}resolveEnum(e,t){return e[t]}}function xo(e){return e?e.map(e=>new(0,e.type.annotationCls)(...e.args?e.args:[])):[]}function Mo(e){const t=e.prototype?Object.getPrototypeOf(e.prototype):null;return(t?t.constructor:null)||Object}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */w({provide:String,useValue:w});
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const ko=w({provide:String,useValue:w}),So=[];function Oo(e,t){if(!t){const t=(new Fo).parameters(e);return()=>new e(...ye(t))}if(ko in t){const e=t;return()=>e.useValue}if(t.useExisting){const e=t;return()=>fe(I(e.useExisting))}if(t.useFactory){const e=t;return()=>e.useFactory(...ye(e.deps||So))}if(t.useClass){const n=t;let r=t.deps;if(!r){const t=new Fo;r=t.parameters(e)}return()=>new(I(n.useClass))(...ye(r))}{let n=t.deps;if(!n){const t=new Fo;n=t.parameters(e)}return()=>new e(...ye(n))}}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const Vo=d("Injectable",void 0,void 0,void 0,(e,t)=>To(e,t));const To=function(e,t){t&&void 0!==t.providedIn&&!F(e)&&(e.ɵprov=E({token:e,providedIn:t.providedIn,factory:Oo(e,t)}))},Io=new oe("Set Injector scope.");const Po=
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function(e,t,n){return new Ho(e,t,n)};class No{static create(e,t){return Array.isArray(e)?Po(e,t,""):Po(e.providers,e.parent,e.name||"")}}No.THROW_IF_NOT_FOUND=ie,No.NULL=new me,No.ɵprov=E({token:No,providedIn:"any",factory:()=>fe(se)}),No.__NG_ELEMENT_ID__=-1;const jo=function(e){return e},Bo=[],Ro=jo,Lo=function(){return Array.prototype.slice.call(arguments)};class Ho{constructor(e,t=No.NULL,n=null){this.parent=t,this.source=n;const r=this._records=new Map;r.set(No,{token:No,fn:jo,deps:Bo,value:this,useNew:!1}),r.set(se,{token:se,fn:jo,deps:Bo,value:this,useNew:!1}),this.scope=function e(t,n){let r=null;if(n)if(n=I(n),Array.isArray(n))for(let o=0;o<n.length;o++)r=e(t,n[o])||r;else{if("function"==typeof n)throw zo("Function/Class not supported",n);if(!n||"object"!=typeof n||!n.provide)throw zo("Unexpected provider",n);{let e=I(n.provide);const o=$o(n);if(!0===n.multi){let r=t.get(e);if(r){if(r.fn!==Lo)throw Go(e)}else t.set(e,r={token:n.provide,deps:[],useNew:!1,fn:Lo,value:Bo});e=n,r.deps.push({token:e,options:6})}const s=t.get(e);if(s&&s.fn==Lo)throw Go(e);e===Io&&(r=o.value),t.set(e,o)}}return r}(r,e)}get(e,t,n=C.Default){const r=this._records;let o=r.get(e);if(void 0===o){const t=F(e);if(t){const n=t&&t.providedIn;("any"===n||null!=n&&n===this.scope)&&r.set(e,o=$o({provide:e,useFactory:t.factory,deps:Bo}))}void 0===o&&r.set(e,null)}let s=he(this);try{return Uo(e,o,r,this.parent,t,n)}catch(t){return _e(t,e,"StaticInjectorError",this.source)}finally{he(s)}}toString(){const e=[];return this._records.forEach((t,n)=>e.push(S(n))),`StaticInjector[${e.join(", ")}]`}}function $o(e){const t=function(e){let t=Bo;const n=e.deps;if(n&&n.length){t=[];for(let e=0;e<n.length;e++){let r=6,o=I(n[e]);if(Array.isArray(o))for(let e=0,t=o;e<t.length;e++){const n=t[e];n instanceof m||n==m?r|=1:n instanceof v||n==v?r&=-3:n instanceof _||n==_?r&=-5:o=n instanceof y?n.token:I(n)}t.push({token:o,options:r})}}else if(e.useExisting){const n=I(e.useExisting);t=[{token:n,options:6}]}else if(!n&&!(ue in e))throw zo("'deps' required",e);return t}(e);let n=jo,r=Bo,o=!1,s=I(e.provide);if(ue in e)r=e.useValue;else if(e.useFactory)n=e.useFactory;else if(e.useExisting);else if(e.useClass)o=!0,n=I(e.useClass);else{if("function"!=typeof s)throw zo("StaticProvider does not have [useValue|useFactory|useExisting|useClass] or [provide] is not newable",e);o=!0,n=s}return{deps:t,fn:n,useNew:o,value:r}}function Go(e){return zo("Cannot mix multi providers and regular providers",e)}function Uo(e,t,n,r,o,s){try{return function(e,t,n,r,o,s){let i;if(!t||s&C.SkipSelf)i=s&C.Self?s&C.Optional?No.NULL.get(e,void 0!==o?o:null):No.NULL.get(e,o):r.get(e,o,C.Default);else{if(i=t.value,i==Ro)throw Error("ɵCircular dependency");if(i===Bo){t.value=Ro;let e=void 0,o=t.useNew,s=t.fn,a=t.deps,u=Bo;if(a.length){u=[];for(let e=0;e<a.length;e++){const t=a[e],o=t.options,s=2&o?n.get(t.token):void 0;u.push(Uo(t.token,s,n,s||4&o?r:No.NULL,1&o?null:No.THROW_IF_NOT_FOUND,C.Default))}}t.value=i=o?new s(...u):s.apply(e,u)}}return i}(e,t,n,r,o,s)}catch(n){n instanceof Error||(n=new Error(n));throw(n.ngTempTokenPath=n.ngTempTokenPath||[]).unshift(e),t&&t.value==Ro&&(t.value=Bo),n}}function zo(e,t){return new Error(ve(e,t,"StaticInjectorError"))}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function Zo(e){if(e.length>1){return" ("+function(e){const t=[];for(let n=0;n<e.length;++n){if(t.indexOf(e[n])>-1)return t.push(e[n]),t;t.push(e[n])}return t}(e.slice().reverse()).map(e=>S(e.token)).join(" -> ")+")"}return""}function Wo(e,t,n,r){const o=[t],s=n(o),i=r?function(e,t){const n=`${e} caused by: ${t instanceof Error?t.message:t}`,r=Error(n);return r.ngOriginalError=t,r}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */(s,r):Error(s);return i.addKey=qo,i.keys=o,i.injectors=[e],i.constructResolvingMessage=n,i.ngOriginalError=r,i}function qo(e,t){this.injectors.push(e),this.keys.push(t),this.message=this.constructResolvingMessage(this.keys)}function Ko(e,t){const n=[];for(let e=0,r=t.length;e<r;e++){const r=t[e];r&&0!=r.length?n.push(r.map(S).join(" ")):n.push("?")}return Error("Cannot resolve all parameters for '"+S(e)+"'("+n.join(", ")+"). Make sure that all the parameters are decorated with Inject or have valid type annotations and that '"+S(e)+"' is decorated with Injectable.")}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class Yo{constructor(e,t){if(this.token=e,this.id=t,!e)throw new Error("Token must be defined!");this.displayName=S(this.token)}static get(e){return Qo.get(I(e))}static get numberOfKeys(){return Qo.numberOfKeys}}const Qo=new class{constructor(){this._allKeys=new Map}get(e){if(e instanceof Yo)return e;if(this._allKeys.has(e))return this._allKeys.get(e);const t=new Yo(e,Yo.numberOfKeys);return this._allKeys.set(e,t),t}get numberOfKeys(){return this._allKeys.size}};
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const Jo=new class{constructor(e){this.reflectionCapabilities=e}updateCapabilities(e){this.reflectionCapabilities=e}factory(e){return this.reflectionCapabilities.factory(e)}parameters(e){return this.reflectionCapabilities.parameters(e)}annotations(e){return this.reflectionCapabilities.annotations(e)}propMetadata(e){return this.reflectionCapabilities.propMetadata(e)}hasLifecycleHook(e,t){return this.reflectionCapabilities.hasLifecycleHook(e,t)}getter(e){return this.reflectionCapabilities.getter(e)}setter(e){return this.reflectionCapabilities.setter(e)}method(e){return this.reflectionCapabilities.method(e)}importUri(e){return this.reflectionCapabilities.importUri(e)}resourceUri(e){return this.reflectionCapabilities.resourceUri(e)}resolveIdentifier(e,t,n,r){return this.reflectionCapabilities.resolveIdentifier(e,t,n,r)}resolveEnum(e,t){return this.reflectionCapabilities.resolveEnum(e,t)}}(new Fo);
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class Xo{constructor(e,t,n){this.key=e,this.optional=t,this.visibility=n}static fromKey(e){return new Xo(e,!1,null)}}const es=[];class ts{constructor(e,t,n){this.key=e,this.resolvedFactories=t,this.multiProvider=n,this.resolvedFactory=this.resolvedFactories[0]}}class ns{constructor(e,t){this.factory=e,this.dependencies=t}}function rs(e){let t,n;if(e.useClass){const r=I(e.useClass);t=Jo.factory(r),n=is(r)}else e.useExisting?(t=e=>e,n=[Xo.fromKey(Yo.get(e.useExisting))]):e.useFactory?(t=e.useFactory,n=function(e,t){if(t){const n=t.map(e=>[e]);return t.map(t=>as(e,t,n))}return is(e)}(e.useFactory,e.deps)):(t=()=>e.useValue,n=es);return new ns(t,n)}function os(e){return new ts(Yo.get(e.provide),[rs(e)],e.multi||!1)}function ss(e){const t=function(e,t){for(let n=0;n<e.length;n++){const r=e[n],o=t.get(r.key.id);if(o){if(r.multiProvider!==o.multiProvider)throw Error(`Cannot mix multi providers and regular providers, got: ${o} ${r}`);if(r.multiProvider)for(let e=0;e<r.resolvedFactories.length;e++)o.resolvedFactories.push(r.resolvedFactories[e]);else t.set(r.key.id,r)}else{let e;e=r.multiProvider?new ts(r.key,r.resolvedFactories.slice(),r.multiProvider):r,t.set(r.key.id,e)}}return t}(function e(t,n){return t.forEach(t=>{if(t instanceof Do)n.push({provide:t,useClass:t});else if(t&&"object"==typeof t&&void 0!==t.provide)n.push(t);else{if(!Array.isArray(t))throw Error("Invalid provider - only instances of Provider and Type are allowed, got: "+t);e(t,n)}}),n}(e,[]).map(os),new Map);return Array.from(t.values())}function is(e){const t=Jo.parameters(e);if(!t)return[];if(t.some(e=>null==e))throw Ko(e,t);return t.map(n=>as(e,n,t))}function as(e,t,n){let r=null,o=!1;if(!Array.isArray(t))return us(t instanceof y?t.token:t,o,null);let s=null;for(let e=0;e<t.length;++e){const n=t[e];n instanceof Do?r=n:n instanceof y?r=n.token:n instanceof m?o=!0:n instanceof _||n instanceof v?s=n:n instanceof oe&&(r=n)}if(r=I(r),null!=r)return us(r,o,s);throw Ko(e,n)}function us(e,t,n){return new Xo(Yo.get(e),t,n)}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const ls={};class cs{static resolve(e){return ss(e)}static resolveAndCreate(e,t){const n=cs.resolve(e);return cs.fromResolvedProviders(n,t)}static fromResolvedProviders(e,t){return new hs(e,t)}}class hs{constructor(e,t){this._constructionCounter=0,this._providers=e,this.parent=t||null;const n=e.length;this.keyIds=[],this.objs=[];for(let t=0;t<n;t++)this.keyIds[t]=e[t].key.id,this.objs[t]=ls}get(e,t=ie){return this._getByKey(Yo.get(e),null,t)}resolveAndCreateChild(e){const t=cs.resolve(e);return this.createChildFromResolved(t)}createChildFromResolved(e){const t=new hs(e);return t.parent=this,t}resolveAndInstantiate(e){return this.instantiateResolved(cs.resolve([e])[0])}instantiateResolved(e){return this._instantiateProvider(e)}getProviderAtIndex(e){if(e<0||e>=this._providers.length)throw function(e){return Error(`Index ${e} is out-of-bounds.`)}(e);return this._providers[e]}_new(e){if(this._constructionCounter++>this._getMaxNumberOfObjects())throw t=this,n=e.key,Wo(t,n,(function(e){return"Cannot instantiate cyclic dependency!"+Zo(e)}));var t,n;return this._instantiateProvider(e)}_getMaxNumberOfObjects(){return this.objs.length}_instantiateProvider(e){if(e.multiProvider){const t=[];for(let n=0;n<e.resolvedFactories.length;++n)t[n]=this._instantiate(e,e.resolvedFactories[n]);return t}return this._instantiate(e,e.resolvedFactories[0])}_instantiate(e,t){const n=t.factory;let r,o;try{r=t.dependencies.map(e=>this._getByReflectiveDependency(e))}catch(t){throw t.addKey&&t.addKey(this,e.key),t}try{o=n(...r)}catch(t){throw s=this,i=t,t.stack,a=e.key,Wo(s,a,(function(e){const t=S(e[0].token);return`${i.message}: Error during instantiation of ${t}!${Zo(e)}.`}),i)}var s,i,a;return o}_getByReflectiveDependency(e){return this._getByKey(e.key,e.visibility,e.optional?null:ie)}_getByKey(e,t,n){return e===hs.INJECTOR_KEY?this:t instanceof _?this._getByKeySelf(e,n):this._getByKeyDefault(e,n,t)}_getObjByKeyId(e){for(let t=0;t<this.keyIds.length;t++)if(this.keyIds[t]===e)return this.objs[t]===ls&&(this.objs[t]=this._new(this._providers[t])),this.objs[t];return ls}_throwOrNull(e,t){if(t!==ie)return t;throw function(e,t){return Wo(e,t,(function(e){return`No provider for ${S(e[0].token)}!${Zo(e)}`}))}(this,e)}_getByKeySelf(e,t){const n=this._getObjByKeyId(e.id);return n!==ls?n:this._throwOrNull(e,t)}_getByKeyDefault(e,t,n){let r;for(r=n instanceof v?this.parent:this;r instanceof hs;){const t=r,n=t._getObjByKeyId(e.id);if(n!==ls)return n;r=t.parent}return null!==r?r.get(e.token,t):this._throwOrNull(e,t)}get displayName(){return`ReflectiveInjector(providers: [${function(e,t){const n=[];for(let r=0;r<e._providers.length;++r)n[r]=t(e.getProviderAtIndex(r));return n}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */(this,e=>' "'+e.key.displayName+'" ').join(", ")}])`}toString(){return this.displayName}}hs.INJECTOR_KEY=Yo.get(No);new oe("AnalyzeForEntryComponents");class ds{}g("ContentChildren",(e,t={})=>Object.assign({selector:e,first:!1,isViewQuery:!1,descendants:!1},t),ds),g("ContentChild",(e,t={})=>Object.assign({selector:e,first:!0,isViewQuery:!1,descendants:!0},t),ds),g("ViewChildren",(e,t={})=>Object.assign({selector:e,first:!1,isViewQuery:!0,descendants:!0},t),ds),g("ViewChild",(e,t)=>Object.assign({selector:e,first:!0,isViewQuery:!0,descendants:!0},t),ds);new Map;new Set;
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function ps(e,t,n){ngDevMode&&He(_t(),"Expecting to be called in first template pass only");let r=n?e.styles:null,o=n?e.classes:null,s=0;if(null!==t)for(let e=0;e<t.length;e++){const n=t[e];if("number"==typeof n)s=n;else if(1==s)o=O(o,n);else if(2==s){r=O(r,n+": "+t[++e]+";")}}n?e.styles=r:e.stylesWithoutHost=r,n?e.classes=o:e.classesWithoutHost=o}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function fs(e,t,n,r,o,s){const i=n[1];ngDevMode&&re(n,20),n[20]=e;const a=Ar(i,0,2,null,null),u=a.mergedAttrs=t.hostAttrs;null!==u&&(ps(a,u,!0),null!==e&&(Wt(o,e,u),null!==a.classes&&ho(o,e,a.classes),null!==a.styles&&co(o,e,a.styles)));const l=r.createRenderer(e,t),c=Er(n,Sr(t),null,t.onPush?64:16,n[20],a,r,l,s||null,null);return i.firstCreatePass&&(sn(tn(a,n),i,t.type),Rr(i,a),Lr(a,n.length,1)),Ur(n,c),n[20]=c}function gs(e,t,n,r,o){const s=n[1],i=function(e,t,n){const r=vt();e.firstCreatePass&&(n.providersResolver&&n.providersResolver(n),Br(e,r,1),Hr(e,t,n));const o=hn(t,e,t.length-1,r);Nn(o,t);const s=ut(r,t);return s&&Nn(s,t),o}(s,n,t);r.components.push(i),e[8]=i,o&&o.forEach(e=>e(i,t)),t.contentQueries&&t.contentQueries(1,i,n.length-1);const a=vt();if(ngDevMode&&ee(a,"tNode should have been already created"),s.firstCreatePass&&(null!==t.hostBindings||null!==t.hostAttrs)){Nt(a.index-20);const e=n[1];Pr(e,t),Nr(e,n,t.hostVars),jr(t,i)}return i}function ys(e,t){return{components:[],scheduler:e||We,clean:Yr,playerHandler:t||null,flags:0}}function ms(e,t){const n=dt(e)[1],r=n.data.length-1;jt(n,{directiveStart:r,directiveEnd:r+1})}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
let _s=null;function vs(){if(!_s){const e=R.Symbol;if(e&&e.iterator)_s=e.iterator;else{const e=Object.getOwnPropertyNames(Map.prototype);for(let t=0;t<e.length;++t){const n=e[t];"entries"!==n&&"size"!==n&&Map.prototype[n]===Map.prototype.entries&&(_s=n)}}}return _s}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function Ds(e){return!!bs(e)&&(Array.isArray(e)||!(e instanceof Map)&&vs()in e)}function bs(e){return null!==e&&("function"==typeof e||"object"==typeof e)}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function Cs(e){return!!e&&"function"==typeof e.then}function ws(e){return!!e&&"function"==typeof e.subscribe}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const Es={},As=[];("undefined"==typeof ngDevMode||ngDevMode)&&Z()&&(Object.freeze(Es),Object.freeze(As))
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */;
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
"undefined"==typeof ngI18nClosureMode&&(R.ngI18nClosureMode="undefined"!=typeof goog&&"function"==typeof goog.getMsg);
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const Fs=void 0;var xs=["en",[["a","p"],["AM","PM"],Fs],[["AM","PM"],Fs,Fs],[["S","M","T","W","T","F","S"],["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],["Su","Mo","Tu","We","Th","Fr","Sa"]],Fs,[["J","F","M","A","M","J","J","A","S","O","N","D"],["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],["January","February","March","April","May","June","July","August","September","October","November","December"]],Fs,[["B","A"],["BC","AD"],["Before Christ","Anno Domini"]],0,[6,0],["M/d/yy","MMM d, y","MMMM d, y","EEEE, MMMM d, y"],["h:mm a","h:mm:ss a","h:mm:ss a z","h:mm:ss a zzzz"],["{1}, {0}",Fs,"{1} 'at' {0}",Fs],[".",",",";","%","+","-","E","×","‰","∞","NaN",":"],["#,##0.###","#,##0%","¤#,##0.00","#E0"],"USD","$","US Dollar",{},"ltr",function(e){let t=Math.floor(Math.abs(e)),n=e.toString().replace(/^[^.]*\.?/,"").length;return 1===t&&0===n?1:5}];
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */let Ms={};function ks(e,t,n){"string"!=typeof t&&(n=t,t=e[Is.LocaleId]),t=t.toLowerCase().replace(/_/g,"-"),Ms[t]=e,n&&(Ms[t][Is.ExtraData]=n)}function Ss(e){const t=function(e){return e.toLowerCase().replace(/_/g,"-")}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */(e);let n=Ts(t);if(n)return n;const r=t.split("-")[0];if(n=Ts(r),n)return n;if("en"===r)return xs;throw new Error(`Missing locale data for the locale "${e}".`)}function Os(e){return Ss(e)[Is.CurrencyCode]||null}function Vs(e){return Ss(e)[Is.PluralCase]}function Ts(e){return e in Ms||(Ms[e]=R.ng&&R.ng.common&&R.ng.common.locales&&R.ng.common.locales[e]),Ms[e]}var Is;!function(e){e[e.LocaleId=0]="LocaleId",e[e.DayPeriodsFormat=1]="DayPeriodsFormat",e[e.DayPeriodsStandalone=2]="DayPeriodsStandalone",e[e.DaysFormat=3]="DaysFormat",e[e.DaysStandalone=4]="DaysStandalone",e[e.MonthsFormat=5]="MonthsFormat",e[e.MonthsStandalone=6]="MonthsStandalone",e[e.Eras=7]="Eras",e[e.FirstDayOfWeek=8]="FirstDayOfWeek",e[e.WeekendRange=9]="WeekendRange",e[e.DateFormat=10]="DateFormat",e[e.TimeFormat=11]="TimeFormat",e[e.DateTimeFormat=12]="DateTimeFormat",e[e.NumberSymbols=13]="NumberSymbols",e[e.NumberFormats=14]="NumberFormats",e[e.CurrencyCode=15]="CurrencyCode",e[e.CurrencySymbol=16]="CurrencySymbol",e[e.CurrencyName=17]="CurrencyName",e[e.Currencies=18]="Currencies",e[e.Directionality=19]="Directionality",e[e.PluralCase=20]="PluralCase",e[e.ExtraData=21]="ExtraData"}(Is||(Is={}));
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class Ps{}class Ns{}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function js(e){const t=Error(`No component factory found for ${S(e)}. Did you add it to @NgModule.entryComponents?`);return t[Bs]=e,t}const Bs="ngComponent";class Rs{}Rs.NULL=new class{resolveComponentFactory(e){throw js(e)}};class Ls extends Ns{constructor(e,t){super(),this.factory=e,this.ngModule=t,this.selector=e.selector,this.componentType=e.componentType,this.ngContentSelectors=e.ngContentSelectors,this.inputs=e.inputs,this.outputs=e.outputs}create(e,t,n,r){return this.factory.create(e,t,n,r||this.ngModule)}}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function Hs(...e){}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class $s{constructor(e){this.nativeElement=e}}$s.__NG_ELEMENT_ID__=()=>Gs($s);const Gs=Hs;new oe("Renderer2Interceptor");class Us{}var zs;!function(e){e[e.Important=1]="Important",e[e.DashCase=2]="DashCase"}(zs||(zs={}));class Zs{}Zs.__NG_ELEMENT_ID__=()=>Ws();const Ws=Hs;
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class qs{}qs.ɵprov=E({token:qs,providedIn:"root",factory:()=>null});
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class Ks{constructor(e){this.full=e,this.major=e.split(".")[0],this.minor=e.split(".")[1],this.patch=e.split(".").slice(2).join(".")}}const Ys=new Ks("10.2.3");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class Qs{constructor(){}supports(e){return Ds(e)}create(e){return new Xs(e)}}const Js=(e,t)=>t;class Xs{constructor(e){this.length=0,this._linkedRecords=null,this._unlinkedRecords=null,this._previousItHead=null,this._itHead=null,this._itTail=null,this._additionsHead=null,this._additionsTail=null,this._movesHead=null,this._movesTail=null,this._removalsHead=null,this._removalsTail=null,this._identityChangesHead=null,this._identityChangesTail=null,this._trackByFn=e||Js}forEachItem(e){let t;for(t=this._itHead;null!==t;t=t._next)e(t)}forEachOperation(e){let t=this._itHead,n=this._removalsHead,r=0,o=null;for(;t||n;){const s=!n||t&&t.currentIndex<ri(n,r,o)?t:n,i=ri(s,r,o),a=s.currentIndex;if(s===n)r--,n=n._nextRemoved;else if(t=t._next,null==s.previousIndex)r++;else{o||(o=[]);const e=i-r,t=a-r;if(e!=t){for(let n=0;n<e;n++){const r=n<o.length?o[n]:o[n]=0,s=r+n;t<=s&&s<e&&(o[n]=r+1)}o[s.previousIndex]=t-e}}i!==a&&e(s,i,a)}}forEachPreviousItem(e){let t;for(t=this._previousItHead;null!==t;t=t._nextPrevious)e(t)}forEachAddedItem(e){let t;for(t=this._additionsHead;null!==t;t=t._nextAdded)e(t)}forEachMovedItem(e){let t;for(t=this._movesHead;null!==t;t=t._nextMoved)e(t)}forEachRemovedItem(e){let t;for(t=this._removalsHead;null!==t;t=t._nextRemoved)e(t)}forEachIdentityChange(e){let t;for(t=this._identityChangesHead;null!==t;t=t._nextIdentityChange)e(t)}diff(e){if(null==e&&(e=[]),!Ds(e))throw new Error(`Error trying to diff '${S(e)}'. Only arrays and iterables are allowed`);return this.check(e)?this:null}onDestroy(){}check(e){this._reset();let t,n,r,o=this._itHead,s=!1;if(Array.isArray(e)){this.length=e.length;for(let t=0;t<this.length;t++)n=e[t],r=this._trackByFn(t,n),null!==o&&Object.is(o.trackById,r)?(s&&(o=this._verifyReinsertion(o,n,r,t)),Object.is(o.item,n)||this._addIdentityChange(o,n)):(o=this._mismatch(o,n,r,t),s=!0),o=o._next}else t=0,function(e,t){if(Array.isArray(e))for(let n=0;n<e.length;n++)t(e[n]);else{const n=e[vs()]();let r;for(;!(r=n.next()).done;)t(r.value)}}(e,e=>{r=this._trackByFn(t,e),null!==o&&Object.is(o.trackById,r)?(s&&(o=this._verifyReinsertion(o,e,r,t)),Object.is(o.item,e)||this._addIdentityChange(o,e)):(o=this._mismatch(o,e,r,t),s=!0),o=o._next,t++}),this.length=t;return this._truncate(o),this.collection=e,this.isDirty}get isDirty(){return null!==this._additionsHead||null!==this._movesHead||null!==this._removalsHead||null!==this._identityChangesHead}_reset(){if(this.isDirty){let e;for(e=this._previousItHead=this._itHead;null!==e;e=e._next)e._nextPrevious=e._next;for(e=this._additionsHead;null!==e;e=e._nextAdded)e.previousIndex=e.currentIndex;for(this._additionsHead=this._additionsTail=null,e=this._movesHead;null!==e;e=e._nextMoved)e.previousIndex=e.currentIndex;this._movesHead=this._movesTail=null,this._removalsHead=this._removalsTail=null,this._identityChangesHead=this._identityChangesTail=null}}_mismatch(e,t,n,r){let o;return null===e?o=this._itTail:(o=e._prev,this._remove(e)),null!==(e=null===this._linkedRecords?null:this._linkedRecords.get(n,r))?(Object.is(e.item,t)||this._addIdentityChange(e,t),this._moveAfter(e,o,r)):null!==(e=null===this._unlinkedRecords?null:this._unlinkedRecords.get(n,null))?(Object.is(e.item,t)||this._addIdentityChange(e,t),this._reinsertAfter(e,o,r)):e=this._addAfter(new ei(t,n),o,r),e}_verifyReinsertion(e,t,n,r){let o=null===this._unlinkedRecords?null:this._unlinkedRecords.get(n,null);return null!==o?e=this._reinsertAfter(o,e._prev,r):e.currentIndex!=r&&(e.currentIndex=r,this._addToMoves(e,r)),e}_truncate(e){for(;null!==e;){const t=e._next;this._addToRemovals(this._unlink(e)),e=t}null!==this._unlinkedRecords&&this._unlinkedRecords.clear(),null!==this._additionsTail&&(this._additionsTail._nextAdded=null),null!==this._movesTail&&(this._movesTail._nextMoved=null),null!==this._itTail&&(this._itTail._next=null),null!==this._removalsTail&&(this._removalsTail._nextRemoved=null),null!==this._identityChangesTail&&(this._identityChangesTail._nextIdentityChange=null)}_reinsertAfter(e,t,n){null!==this._unlinkedRecords&&this._unlinkedRecords.remove(e);const r=e._prevRemoved,o=e._nextRemoved;return null===r?this._removalsHead=o:r._nextRemoved=o,null===o?this._removalsTail=r:o._prevRemoved=r,this._insertAfter(e,t,n),this._addToMoves(e,n),e}_moveAfter(e,t,n){return this._unlink(e),this._insertAfter(e,t,n),this._addToMoves(e,n),e}_addAfter(e,t,n){return this._insertAfter(e,t,n),null===this._additionsTail?this._additionsTail=this._additionsHead=e:this._additionsTail=this._additionsTail._nextAdded=e,e}_insertAfter(e,t,n){const r=null===t?this._itHead:t._next;return e._next=r,e._prev=t,null===r?this._itTail=e:r._prev=e,null===t?this._itHead=e:t._next=e,null===this._linkedRecords&&(this._linkedRecords=new ni),this._linkedRecords.put(e),e.currentIndex=n,e}_remove(e){return this._addToRemovals(this._unlink(e))}_unlink(e){null!==this._linkedRecords&&this._linkedRecords.remove(e);const t=e._prev,n=e._next;return null===t?this._itHead=n:t._next=n,null===n?this._itTail=t:n._prev=t,e}_addToMoves(e,t){return e.previousIndex===t||(null===this._movesTail?this._movesTail=this._movesHead=e:this._movesTail=this._movesTail._nextMoved=e),e}_addToRemovals(e){return null===this._unlinkedRecords&&(this._unlinkedRecords=new ni),this._unlinkedRecords.put(e),e.currentIndex=null,e._nextRemoved=null,null===this._removalsTail?(this._removalsTail=this._removalsHead=e,e._prevRemoved=null):(e._prevRemoved=this._removalsTail,this._removalsTail=this._removalsTail._nextRemoved=e),e}_addIdentityChange(e,t){return e.item=t,null===this._identityChangesTail?this._identityChangesTail=this._identityChangesHead=e:this._identityChangesTail=this._identityChangesTail._nextIdentityChange=e,e}}class ei{constructor(e,t){this.item=e,this.trackById=t,this.currentIndex=null,this.previousIndex=null,this._nextPrevious=null,this._prev=null,this._next=null,this._prevDup=null,this._nextDup=null,this._prevRemoved=null,this._nextRemoved=null,this._nextAdded=null,this._nextMoved=null,this._nextIdentityChange=null}}class ti{constructor(){this._head=null,this._tail=null}add(e){null===this._head?(this._head=this._tail=e,e._nextDup=null,e._prevDup=null):(this._tail._nextDup=e,e._prevDup=this._tail,e._nextDup=null,this._tail=e)}get(e,t){let n;for(n=this._head;null!==n;n=n._nextDup)if((null===t||t<=n.currentIndex)&&Object.is(n.trackById,e))return n;return null}remove(e){const t=e._prevDup,n=e._nextDup;return null===t?this._head=n:t._nextDup=n,null===n?this._tail=t:n._prevDup=t,null===this._head}}class ni{constructor(){this.map=new Map}put(e){const t=e.trackById;let n=this.map.get(t);n||(n=new ti,this.map.set(t,n)),n.add(e)}get(e,t){const n=e,r=this.map.get(n);return r?r.get(e,t):null}remove(e){const t=e.trackById;return this.map.get(t).remove(e)&&this.map.delete(t),e}get isEmpty(){return 0===this.map.size}clear(){this.map.clear()}}function ri(e,t,n){const r=e.previousIndex;if(null===r)return r;let o=0;return n&&r<n.length&&(o=n[r]),r+t+o}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class oi{constructor(){}supports(e){return e instanceof Map||bs(e)}create(){return new si}}class si{constructor(){this._records=new Map,this._mapHead=null,this._appendAfter=null,this._previousMapHead=null,this._changesHead=null,this._changesTail=null,this._additionsHead=null,this._additionsTail=null,this._removalsHead=null,this._removalsTail=null}get isDirty(){return null!==this._additionsHead||null!==this._changesHead||null!==this._removalsHead}forEachItem(e){let t;for(t=this._mapHead;null!==t;t=t._next)e(t)}forEachPreviousItem(e){let t;for(t=this._previousMapHead;null!==t;t=t._nextPrevious)e(t)}forEachChangedItem(e){let t;for(t=this._changesHead;null!==t;t=t._nextChanged)e(t)}forEachAddedItem(e){let t;for(t=this._additionsHead;null!==t;t=t._nextAdded)e(t)}forEachRemovedItem(e){let t;for(t=this._removalsHead;null!==t;t=t._nextRemoved)e(t)}diff(e){if(e){if(!(e instanceof Map||bs(e)))throw new Error(`Error trying to diff '${S(e)}'. Only maps and objects are allowed`)}else e=new Map;return this.check(e)?this:null}onDestroy(){}check(e){this._reset();let t=this._mapHead;if(this._appendAfter=null,this._forEach(e,(e,n)=>{if(t&&t.key===n)this._maybeAddToChanges(t,e),this._appendAfter=t,t=t._next;else{const r=this._getOrCreateRecordForKey(n,e);t=this._insertBeforeOrAppend(t,r)}}),t){t._prev&&(t._prev._next=null),this._removalsHead=t;for(let e=t;null!==e;e=e._nextRemoved)e===this._mapHead&&(this._mapHead=null),this._records.delete(e.key),e._nextRemoved=e._next,e.previousValue=e.currentValue,e.currentValue=null,e._prev=null,e._next=null}return this._changesTail&&(this._changesTail._nextChanged=null),this._additionsTail&&(this._additionsTail._nextAdded=null),this.isDirty}_insertBeforeOrAppend(e,t){if(e){const n=e._prev;return t._next=e,t._prev=n,e._prev=t,n&&(n._next=t),e===this._mapHead&&(this._mapHead=t),this._appendAfter=e,e}return this._appendAfter?(this._appendAfter._next=t,t._prev=this._appendAfter):this._mapHead=t,this._appendAfter=t,null}_getOrCreateRecordForKey(e,t){if(this._records.has(e)){const n=this._records.get(e);this._maybeAddToChanges(n,t);const r=n._prev,o=n._next;return r&&(r._next=o),o&&(o._prev=r),n._next=null,n._prev=null,n}const n=new ii(e);return this._records.set(e,n),n.currentValue=t,this._addToAdditions(n),n}_reset(){if(this.isDirty){let e;for(this._previousMapHead=this._mapHead,e=this._previousMapHead;null!==e;e=e._next)e._nextPrevious=e._next;for(e=this._changesHead;null!==e;e=e._nextChanged)e.previousValue=e.currentValue;for(e=this._additionsHead;null!=e;e=e._nextAdded)e.previousValue=e.currentValue;this._changesHead=this._changesTail=null,this._additionsHead=this._additionsTail=null,this._removalsHead=null}}_maybeAddToChanges(e,t){Object.is(t,e.currentValue)||(e.previousValue=e.currentValue,e.currentValue=t,this._addToChanges(e))}_addToAdditions(e){null===this._additionsHead?this._additionsHead=this._additionsTail=e:(this._additionsTail._nextAdded=e,this._additionsTail=e)}_addToChanges(e){null===this._changesHead?this._changesHead=this._changesTail=e:(this._changesTail._nextChanged=e,this._changesTail=e)}_forEach(e,t){e instanceof Map?e.forEach(t):Object.keys(e).forEach(n=>t(e[n],n))}}class ii{constructor(e){this.key=e,this.previousValue=null,this.currentValue=null,this._nextPrevious=null,this._next=null,this._prev=null,this._nextAdded=null,this._nextRemoved=null,this._nextChanged=null}}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class ai{constructor(e){this.factories=e}static create(e,t){if(null!=t){const n=t.factories.slice();e=e.concat(n)}return new ai(e)}static extend(e){return{provide:ai,useFactory:t=>{if(!t)throw new Error("Cannot extend IterableDiffers without a parent injector");return ai.create(e,t)},deps:[[ai,new v,new m]]}}find(e){const t=this.factories.find(t=>t.supports(e));if(null!=t)return t;throw new Error(`Cannot find a differ supporting object '${e}' of type '${n=e,n.name||typeof n}'`);var n;
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */}}ai.ɵprov=E({token:ai,providedIn:"root",factory:()=>new ai([new Qs])});class ui{constructor(e){this.factories=e}static create(e,t){if(t){const n=t.factories.slice();e=e.concat(n)}return new ui(e)}static extend(e){return{provide:ui,useFactory:t=>{if(!t)throw new Error("Cannot extend KeyValueDiffers without a parent injector");return ui.create(e,t)},deps:[[ui,new v,new m]]}}find(e){const t=this.factories.find(t=>t.supports(e));if(t)return t;throw new Error(`Cannot find a differ supporting object '${e}'`)}}ui.ɵprov=E({token:ui,providedIn:"root",factory:()=>new ui([new oi])});
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const li=[new oi],ci=[new Qs],hi=new ai(ci),di=new ui(li);
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class pi{}pi.__NG_ELEMENT_ID__=()=>fi(pi,$s);const fi=Hs;
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class gi{}gi.__NG_ELEMENT_ID__=()=>yi(gi,$s);const yi=Hs;const mi=new Map;
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function _i(e){let t=mi.get(e);return t||(t=S(e)+"_"+mi.size,mi.set(e,t)),t}new WeakMap;_i(No),_i(se),_i(De);
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
_i(Zs),_i($s),_i(gi),_i(pi),_i(mo),_i(No),_i(se);const vi={};
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class Di extends Rs{constructor(e){super(),this.ngModule=e}resolveComponentFactory(e){ngDevMode&&je(e);const t=xe(e);return new wi(t,this.ngModule)}}function bi(e){const t=[];for(let n in e)if(e.hasOwnProperty(n)){const r=e[n];t.push({propName:r,templateName:n})}return t}const Ci=new oe("SCHEDULER_TOKEN",{providedIn:"root",factory:()=>We});class wi extends Ns{constructor(e,t){super(),this.componentDef=e,this.ngModule=t,this.componentType=e.type,this.selector=e.selectors.map(Rn).join(","),this.ngContentSelectors=e.ngContentSelectors?e.ngContentSelectors:[],this.isBoundToModule=!!t}get inputs(){return bi(this.componentDef.inputs)}get outputs(){return bi(this.componentDef.outputs)}create(e,t,n,r){const o=(r=r||this.ngModule)?function(e,t){return{get:(n,r,o)=>{const s=e.get(n,vi,o);return s!==vi||r===vi?s:t.get(n,r,o)}}}(e,r.injector):e,s=o.get(Us,it),i=o.get(qs,null),a=s.createRenderer(null,this.componentDef),u=this.componentDef.selectors[0][0]||"div",l=n?Tr(a,n,this.componentDef.encapsulation):wr(u,s.createRenderer(null,this.componentDef),function(e){const t=e.toLowerCase();return"svg"===t?"http://www.w3.org/2000/svg":"math"===t?"http://www.w3.org/1998/MathML/":null}(u)),c=this.componentDef.onPush?576:528,h=ys(),d=Or(0,null,null,1,0,null,null,null,null,null),p=Er(null,d,h,c,null,null,s,a,i,o);let f,g;kt(p);try{const e=fs(l,this.componentDef,p,s,a);if(l)if(n)Wt(a,l,["ng-version",Ys.full]);else{const{attrs:e,classes:t}=function(e){const t=[],n=[];let r=1,o=2;for(;r<e.length;){let s=e[r];if("string"==typeof s)2===o?""!==s&&t.push(s,e[++r]):8===o&&n.push(s);else{if(!jn(o))break;o=s}r++}return{attrs:t,classes:n}}(this.componentDef.selectors[0]);e&&Wt(a,l,e),t&&t.length>0&&ho(a,l,t.join(" "))}if(g=lt(d,0),void 0!==t){const e=g.projection=[];for(let n=0;n<this.ngContentSelectors.length;n++){const r=t[n];e.push(null!=r?Array.from(r):null)}}f=gs(e,this.componentDef,p,h,[ms]),Fr(d,p,null)}finally{It()}return new Ei(this.componentType,f,yo($s,g,p),p,g)}}new Di;class Ei extends Ps{constructor(e,t,n,r,o){super(),this.location=n,this._rootLView=r,this._tNode=o,this.destroyCbs=[],this.instance=t,this.hostView=this.changeDetectorRef=new fo(r),this.componentType=e}get injector(){return new fn(this._tNode,this._rootLView)}destroy(){this.destroyCbs&&(this.destroyCbs.forEach(e=>e()),this.destroyCbs=null,!this.hostView.destroyed&&this.hostView.destroy())}onDestroy(e){this.destroyCbs&&this.destroyCbs.push(e)}}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
new Map;
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class Ai extends r.a{constructor(e=!1){super(),this.__isAsync=e}emit(e){super.next(e)}subscribe(e,t,n){let r,s=e=>null,i=()=>null;e&&"object"==typeof e?(r=this.__isAsync?t=>{setTimeout(()=>e.next(t))}:t=>{e.next(t)},e.error&&(s=this.__isAsync?t=>{setTimeout(()=>e.error(t))}:t=>{e.error(t)}),e.complete&&(i=this.__isAsync?()=>{setTimeout(()=>e.complete())}:()=>{e.complete()})):(r=this.__isAsync?t=>{setTimeout(()=>e(t))}:t=>{e(t)},t&&(s=this.__isAsync?e=>{setTimeout(()=>t(e))}:e=>{t(e)}),n&&(i=this.__isAsync?()=>{setTimeout(()=>n())}:()=>{n()}));const a=super.subscribe(r,s,i);return e instanceof o.a&&e.add(a),a}}const Fi=Ai;
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */new Map,new Map;
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const xi=d("Directive",(e={})=>e,void 0,void 0,(e,t)=>Ti(e,t)),Mi=d("Component",(e={})=>Object.assign({changeDetection:Ce.Default},e),xi,void 0,(e,t)=>Vi(e,t)),ki=d("Pipe",e=>Object.assign({pure:!0},e),void 0,void 0,(e,t)=>Ii(e,t)),Si=g("Input",e=>({bindingPropertyName:e})),Oi=g("Output",e=>({bindingPropertyName:e})),Vi=(g("HostBinding",e=>({hostPropertyName:e})),g("HostListener",(e,t)=>({eventName:e,args:t})),Hs),Ti=Hs,Ii=Hs,Pi=d("NgModule",e=>e,void 0,void 0,(e,t)=>Ni(e,t));const Ni=function(e,t){let n=t&&t.imports||[];t&&t.exports&&(n=[...n,t.exports]),e.ɵinj=A({factory:Oo(e,{useClass:e}),providers:t&&t.providers,imports:n})},ji=new oe("Application Initializer");class Bi{constructor(e){this.appInits=e,this.initialized=!1,this.done=!1,this.donePromise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}runInitializers(){if(this.initialized)return;const e=[],t=()=>{this.done=!0,this.resolve()};if(this.appInits)for(let t=0;t<this.appInits.length;t++){const n=this.appInits[t]();Cs(n)&&e.push(n)}Promise.all(e).then(()=>{t()}).catch(e=>{this.reject(e)}),0===e.length&&t(),this.initialized=!0}}Bi.decorators=[{type:Vo}],Bi.ctorParameters=()=>[{type:Array,decorators:[{type:y,args:[ji]},{type:m}]}]
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */;const Ri={provide:new oe("AppId"),useFactory:function(){return`${Li()}${Li()}${Li()}`},deps:[]};function Li(){return String.fromCharCode(97+Math.floor(25*Math.random()))}const Hi=new oe("Platform Initializer"),$i=new oe("Platform ID"),Gi=new oe("appBootstrapListener");new oe("Application Packages Root URL");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class Ui{log(e){console.log(e)}warn(e){console.warn(e)}}Ui.decorators=[{type:Vo}];
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const zi=new oe("LocaleId"),Zi=new oe("DefaultCurrencyCode");new oe("Translations"),new oe("TranslationsFormat");var Wi;!function(e){e[e.Error=0]="Error",e[e.Warning=1]="Warning",e[e.Ignore=2]="Ignore"}(Wi||(Wi={}));function qi(){throw new Error("Runtime compiler is not loaded")}const Ki=qi,Yi=qi,Qi=qi,Ji=qi;class Xi{constructor(){this.compileModuleSync=Ki,this.compileModuleAsync=Yi,this.compileModuleAndAllComponentsSync=Qi,this.compileModuleAndAllComponentsAsync=Ji}clearCache(){}clearCacheFor(e){}getModuleId(e){}}Xi.decorators=[{type:Vo}];new oe("compilerOptions");class ea{}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const ta=Promise.resolve(0);function na(e){"undefined"==typeof Zone?ta.then(()=>{e&&e.apply(null,null)}):Zone.current.scheduleMicroTask("scheduleMicrotask",e)}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class ra{constructor({enableLongStackTrace:e=!1,shouldCoalesceEventChangeDetection:t=!1}){if(this.hasPendingMacrotasks=!1,this.hasPendingMicrotasks=!1,this.isStable=!0,this.onUnstable=new Fi(!1),this.onMicrotaskEmpty=new Fi(!1),this.onStable=new Fi(!1),this.onError=new Fi(!1),"undefined"==typeof Zone)throw new Error("In this configuration Angular requires Zone.js");Zone.assertZonePatched();const n=this;n._nesting=0,n._outer=n._inner=Zone.current,Zone.wtfZoneSpec&&(n._inner=n._inner.fork(Zone.wtfZoneSpec)),Zone.TaskTrackingZoneSpec&&(n._inner=n._inner.fork(new Zone.TaskTrackingZoneSpec)),e&&Zone.longStackTraceZoneSpec&&(n._inner=n._inner.fork(Zone.longStackTraceZoneSpec)),n.shouldCoalesceEventChangeDetection=t,n.lastRequestAnimationFrameId=-1,n.nativeRequestAnimationFrame=function(){let e=R.requestAnimationFrame,t=R.cancelAnimationFrame;if("undefined"!=typeof Zone&&e&&t){const n=e[Zone.__symbol__("OriginalDelegate")];n&&(e=n);const r=t[Zone.__symbol__("OriginalDelegate")];r&&(t=r)}return{nativeRequestAnimationFrame:e,nativeCancelAnimationFrame:t}}().nativeRequestAnimationFrame,function(e){const t=!!e.shouldCoalesceEventChangeDetection&&e.nativeRequestAnimationFrame&&(()=>{!function(e){if(-1!==e.lastRequestAnimationFrameId)return;e.lastRequestAnimationFrameId=e.nativeRequestAnimationFrame.call(R,()=>{e.fakeTopEventTask||(e.fakeTopEventTask=Zone.root.scheduleEventTask("fakeTopEventTask",()=>{e.lastRequestAnimationFrameId=-1,aa(e),ia(e)},void 0,()=>{},()=>{})),e.fakeTopEventTask.invoke()}),aa(e)}(e)});e._inner=e._inner.fork({name:"angular",properties:{isAngularZone:!0,maybeDelayChangeDetection:t},onInvokeTask:(n,r,o,s,i,a)=>{try{return ua(e),n.invokeTask(o,s,i,a)}finally{t&&"eventTask"===s.type&&t(),la(e)}},onInvoke:(t,n,r,o,s,i,a)=>{try{return ua(e),t.invoke(r,o,s,i,a)}finally{la(e)}},onHasTask:(t,n,r,o)=>{t.hasTask(r,o),n===r&&("microTask"==o.change?(e._hasPendingMicrotasks=o.microTask,aa(e),ia(e)):"macroTask"==o.change&&(e.hasPendingMacrotasks=o.macroTask))},onHandleError:(t,n,r,o)=>(t.handleError(r,o),e.runOutsideAngular(()=>e.onError.emit(o)),!1)})}(n)}static isInAngularZone(){return!0===Zone.current.get("isAngularZone")}static assertInAngularZone(){if(!ra.isInAngularZone())throw new Error("Expected to be in Angular Zone, but it is not!")}static assertNotInAngularZone(){if(ra.isInAngularZone())throw new Error("Expected to not be in Angular Zone, but it is!")}run(e,t,n){return this._inner.run(e,t,n)}runTask(e,t,n,r){const o=this._inner,s=o.scheduleEventTask("NgZoneEvent: "+r,e,sa,oa,oa);try{return o.runTask(s,t,n)}finally{o.cancelTask(s)}}runGuarded(e,t,n){return this._inner.runGuarded(e,t,n)}runOutsideAngular(e){return this._outer.run(e)}}function oa(){}const sa={};function ia(e){if(0==e._nesting&&!e.hasPendingMicrotasks&&!e.isStable)try{e._nesting++,e.onMicrotaskEmpty.emit(null)}finally{if(e._nesting--,!e.hasPendingMicrotasks)try{e.runOutsideAngular(()=>e.onStable.emit(null))}finally{e.isStable=!0}}}function aa(e){e._hasPendingMicrotasks||e.shouldCoalesceEventChangeDetection&&-1!==e.lastRequestAnimationFrameId?e.hasPendingMicrotasks=!0:e.hasPendingMicrotasks=!1}function ua(e){e._nesting++,e.isStable&&(e.isStable=!1,e.onUnstable.emit(null))}function la(e){e._nesting--,ia(e)}class ca{constructor(){this.hasPendingMicrotasks=!1,this.hasPendingMacrotasks=!1,this.isStable=!0,this.onUnstable=new Fi,this.onMicrotaskEmpty=new Fi,this.onStable=new Fi,this.onError=new Fi}run(e,t,n){return e.apply(t,n)}runGuarded(e,t,n){return e.apply(t,n)}runOutsideAngular(e){return e()}runTask(e,t,n,r){return e.apply(t,n)}}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class ha{constructor(e){this._ngZone=e,this._pendingCount=0,this._isZoneStable=!0,this._didWork=!1,this._callbacks=[],this.taskTrackingZone=null,this._watchAngularEvents(),e.run(()=>{this.taskTrackingZone="undefined"==typeof Zone?null:Zone.current.get("TaskTrackingZone")})}_watchAngularEvents(){this._ngZone.onUnstable.subscribe({next:()=>{this._didWork=!0,this._isZoneStable=!1}}),this._ngZone.runOutsideAngular(()=>{this._ngZone.onStable.subscribe({next:()=>{ra.assertNotInAngularZone(),na(()=>{this._isZoneStable=!0,this._runCallbacksIfReady()})}})})}increasePendingRequestCount(){return this._pendingCount+=1,this._didWork=!0,this._pendingCount}decreasePendingRequestCount(){if(this._pendingCount-=1,this._pendingCount<0)throw new Error("pending async requests below zero");return this._runCallbacksIfReady(),this._pendingCount}isStable(){return this._isZoneStable&&0===this._pendingCount&&!this._ngZone.hasPendingMacrotasks}_runCallbacksIfReady(){if(this.isStable())na(()=>{for(;0!==this._callbacks.length;){let e=this._callbacks.pop();clearTimeout(e.timeoutId),e.doneCb(this._didWork)}this._didWork=!1});else{let e=this.getPendingTasks();this._callbacks=this._callbacks.filter(t=>!t.updateCb||!t.updateCb(e)||(clearTimeout(t.timeoutId),!1)),this._didWork=!0}}getPendingTasks(){return this.taskTrackingZone?this.taskTrackingZone.macroTasks.map(e=>({source:e.source,creationLocation:e.creationLocation,data:e.data})):[]}addCallback(e,t,n){let r=-1;t&&t>0&&(r=setTimeout(()=>{this._callbacks=this._callbacks.filter(e=>e.timeoutId!==r),e(this._didWork,this.getPendingTasks())},t)),this._callbacks.push({doneCb:e,timeoutId:r,updateCb:n})}whenStable(e,t,n){if(n&&!this.taskTrackingZone)throw new Error('Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/dist/task-tracking.js" loaded?');this.addCallback(e,t,n),this._runCallbacksIfReady()}getPendingRequestCount(){return this._pendingCount}findProviders(e,t,n){return[]}}ha.decorators=[{type:Vo}],ha.ctorParameters=()=>[{type:ra}];class da{constructor(){this._applications=new Map,fa.addToWindow(this)}registerApplication(e,t){this._applications.set(e,t)}unregisterApplication(e){this._applications.delete(e)}unregisterAllApplications(){this._applications.clear()}getTestability(e){return this._applications.get(e)||null}getAllTestabilities(){return Array.from(this._applications.values())}getAllRootElements(){return Array.from(this._applications.keys())}findTestabilityInTree(e,t=!0){return fa.findTestabilityInTree(this,e,t)}}da.decorators=[{type:Vo}],da.ctorParameters=()=>[];let pa,fa=new class{addToWindow(e){}findTestabilityInTree(e,t,n){return null}},ga=function(e,t,n){const r=e.get(ea);return r.createCompiler([t]).compileModuleAsync(n)};
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */let ya=function(){},ma=function(e){return e instanceof Ls};const _a=new oe("AllowMultipleToken");function va(){return pa&&!pa.destroyed?pa:null}class Da{constructor(e){this._injector=e,this._modules=[],this._destroyListeners=[],this._destroyed=!1}bootstrapModuleFactory(e,t){const n=function(e,t){let n;n="noop"===e?new ca:("zone.js"===e?void 0:e)||new ra({enableLongStackTrace:bn(),shouldCoalesceEventChangeDetection:t});return n}(t?t.ngZone:void 0,t&&t.ngZoneEventCoalescing||!1),r=[{provide:ra,useValue:n}];return n.run(()=>{const t=No.create({providers:r,parent:this.injector,name:e.moduleType.name}),o=e.create(t),s=o.injector.get(_n,null);if(!s)throw new Error("No ErrorHandler. Is platform module (BrowserModule) included?");return o.onDestroy(()=>wa(this._modules,o)),n.runOutsideAngular(()=>n.onError.subscribe({next:e=>{s.handleError(e)}})),function(e,t,n){try{const r=n();return Cs(r)?r.catch(n=>{throw t.runOutsideAngular(()=>e.handleError(n)),n}):r}catch(n){throw t.runOutsideAngular(()=>e.handleError(n)),n}}(s,n,()=>{const e=o.injector.get(Bi);return e.runInitializers(),e.donePromise.then(()=>(this._moduleDoBootstrap(o),o))})})}bootstrapModule(e,t=[]){const n=ba({},t);return ga(this.injector,n,e).then(e=>this.bootstrapModuleFactory(e,n))}_moduleDoBootstrap(e){const t=e.injector.get(Ca);if(e._bootstrapComponents.length>0)e._bootstrapComponents.forEach(e=>t.bootstrap(e));else{if(!e.instance.ngDoBootstrap)throw new Error(`The module ${S(e.instance.constructor)} was bootstrapped, but it does not declare "@NgModule.bootstrap" components nor a "ngDoBootstrap" method. Please define one of these.`);e.instance.ngDoBootstrap(t)}this._modules.push(e)}onDestroy(e){this._destroyListeners.push(e)}get injector(){return this._injector}destroy(){if(this._destroyed)throw new Error("The platform has already been destroyed!");this._modules.slice().forEach(e=>e.destroy()),this._destroyListeners.forEach(e=>e()),this._destroyed=!0}get destroyed(){return this._destroyed}}function ba(e,t){return e=Array.isArray(t)?t.reduce(ba,e):Object.assign(Object.assign({},e),t)}Da.decorators=[{type:Vo}],Da.ctorParameters=()=>[{type:No}];class Ca{constructor(e,t,n,r,o,u){this._zone=e,this._console=t,this._injector=n,this._exceptionHandler=r,this._componentFactoryResolver=o,this._initStatus=u,this._bootstrapListeners=[],this._views=[],this._runningTick=!1,this._enforceNoNewChanges=!1,this._stable=!0,this.componentTypes=[],this.components=[],this._enforceNoNewChanges=bn(),this._zone.onMicrotaskEmpty.subscribe({next:()=>{this._zone.run(()=>{this.tick()})}});const l=new s.a(e=>{this._stable=this._zone.isStable&&!this._zone.hasPendingMacrotasks&&!this._zone.hasPendingMicrotasks,this._zone.runOutsideAngular(()=>{e.next(this._stable),e.complete()})}),c=new s.a(e=>{let t;this._zone.runOutsideAngular(()=>{t=this._zone.onStable.subscribe(()=>{ra.assertNotInAngularZone(),na(()=>{this._stable||this._zone.hasPendingMacrotasks||this._zone.hasPendingMicrotasks||(this._stable=!0,e.next(!0))})})});const n=this._zone.onUnstable.subscribe(()=>{ra.assertInAngularZone(),this._stable&&(this._stable=!1,this._zone.runOutsideAngular(()=>{e.next(!1)}))});return()=>{t.unsubscribe(),n.unsubscribe()}});this.isStable=Object(i.a)(l,c.pipe(Object(a.a)()))}bootstrap(e,t){if(!this._initStatus.done)throw new Error("Cannot bootstrap as there are still asynchronous initializers running. Bootstrap components in the `ngDoBootstrap` method of the root module.");let n;n=e instanceof Ns?e:this._componentFactoryResolver.resolveComponentFactory(e),this.componentTypes.push(n.componentType);const r=ma(n)?void 0:this._injector.get(De),o=t||n.selector,s=n.create(No.NULL,[],o,r);s.onDestroy(()=>{this._unloadComponent(s)});const i=s.injector.get(ha,null);return i&&s.injector.get(da).registerApplication(s.location.nativeElement,i),this._loadComponent(s),bn()&&this._console.log("Angular is running in development mode. Call enableProdMode() to enable production mode."),s}tick(){if(this._runningTick)throw new Error("ApplicationRef.tick is called recursively");try{this._runningTick=!0;for(let e of this._views)e.detectChanges();if(this._enforceNoNewChanges)for(let e of this._views)e.checkNoChanges()}catch(e){this._zone.runOutsideAngular(()=>this._exceptionHandler.handleError(e))}finally{this._runningTick=!1}}attachView(e){const t=e;this._views.push(t),t.attachToAppRef(this)}detachView(e){const t=e;wa(this._views,t),t.detachFromAppRef()}_loadComponent(e){this.attachView(e.hostView),this.tick(),this.components.push(e);this._injector.get(Gi,[]).concat(this._bootstrapListeners).forEach(t=>t(e))}_unloadComponent(e){this.detachView(e.hostView),wa(this.components,e)}ngOnDestroy(){this._views.slice().forEach(e=>e.destroy())}get viewCount(){return this._views.length}}function wa(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}Ca.decorators=[{type:Vo}],Ca.ctorParameters=()=>[{type:ra},{type:Ui},{type:No},{type:_n},{type:Rs},{type:Bi}];class Ea{}const Aa={factoryPathPrefix:"",factoryPathSuffix:".ngfactory"};class Fa{constructor(e,t){this._compiler=e,this._config=t||Aa}load(e){return this._compiler instanceof Xi?this.loadFactory(e):this.loadAndCompile(e)}loadAndCompile(e){let[t,r]=e.split("#");return void 0===r&&(r="default"),n(23)(t).then(e=>e[r]).then(e=>xa(e,t,r)).then(e=>this._compiler.compileModuleAsync(e))}loadFactory(e){let[t,r]=e.split("#"),o="NgFactory";return void 0===r&&(r="default",o=""),n(23)(this._config.factoryPathPrefix+t+this._config.factoryPathSuffix).then(e=>e[r+o]).then(e=>xa(e,t,r))}}function xa(e,t,n){if(!e)throw new Error(`Cannot find '${n}' in '${t}'`);return e}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */Fa.decorators=[{type:Vo}],Fa.ctorParameters=()=>[{type:Xi},{type:Ea,decorators:[{type:m}]}];new Map;!function(e,t,n=[]){const r="Platform: "+t,o=new oe(r)}(null,"core",[{provide:$i,useValue:"unknown"},{provide:Da,deps:[No]},{provide:da,deps:[]},{provide:Ui,deps:[]}]);const Ma=[{provide:Ca,useClass:Ca,deps:[ra,Ui,No,_n,Rs,Bi]},{provide:Ci,deps:[ra],useFactory:function(e){let t=[];return e.onStable.subscribe(()=>{for(;t.length;)t.pop()()}),function(e){t.push(e)}}},{provide:Bi,useClass:Bi,deps:[[new m,ji]]},{provide:Xi,useClass:Xi,deps:[]},Ri,{provide:ai,useFactory:
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function(){return hi},deps:[]},{provide:ui,useFactory:function(){return di},deps:[]},{provide:zi,useFactory:function(e){return e=e||("undefined"!=typeof ngI18nClosureMode&&ngI18nClosureMode&&"undefined"!=typeof goog&&"en"!==goog.LOCALE?goog.LOCALE:"en-US")},deps:[[new y(zi),new m,new v]]},{provide:Zi,useValue:"USD"}];class ka{constructor(e){}}var Sa;ka.decorators=[{type:Pi,args:[{providers:Ma}]}],ka.ctorParameters=()=>[{type:Ca}]
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */,function(e){e[e.CreateViewNodes=0]="CreateViewNodes",e[e.CheckNoChanges=1]="CheckNoChanges",e[e.CheckNoChangesProjectedViews=2]="CheckNoChangesProjectedViews",e[e.CheckAndUpdate=3]="CheckAndUpdate",e[e.CheckAndUpdateProjectedViews=4]="CheckAndUpdateProjectedViews",e[e.Destroy=5]="Destroy"}(Sa||(Sa={}));new Map,new Map,new Map;var Oa;!function(e){e[e.create=0]="create",e[e.detectChanges=1]="detectChanges",e[e.checkNoChanges=2]="checkNoChanges",e[e.destroy=3]="destroy",e[e.handleEvent=4]="handleEvent"}(Oa||(Oa={}));
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
"undefined"!=typeof ngDevMode&&ngDevMode&&(R.$localize=R.$localize||function(){throw new Error("It looks like your application or one of its dependencies is using i18n.\nAngular 9 introduced a global `$localize()` function that needs to be loaded.\nPlease run `ng add @angular/localize` from the Angular CLI.\n(For non-CLI projects, add `import '@angular/localize/init';` to your `polyfills.ts` file.\nFor server-side rendering applications add the import to your `main.server.ts` file.)")});
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */}).call(this,n(25))},function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)};function o(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}},function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(4);var o=n(9),s=n(10);var i=n(6),a=n(14);function u(e){return 0===e.length?a.a:1===e.length?e[0]:function(t){return e.reduce((function(e,t){return t(e)}),t)}}var l=n(5),c=function(){function e(e){this._isScalar=!1,e&&(this._subscribe=e)}return e.prototype.lift=function(t){var n=new e;return n.source=this,n.operator=t,n},e.prototype.subscribe=function(e,t,n){var i=this.operator,a=function(e,t,n){if(e){if(e instanceof r.a)return e;if(e[o.a])return e[o.a]()}return e||t||n?new r.a(e,t,n):new r.a(s.a)}(e,t,n);if(i?a.add(i.call(a,this.source)):a.add(this.source||l.a.useDeprecatedSynchronousErrorHandling&&!a.syncErrorThrowable?this._subscribe(a):this._trySubscribe(a)),l.a.useDeprecatedSynchronousErrorHandling&&a.syncErrorThrowable&&(a.syncErrorThrowable=!1,a.syncErrorThrown))throw a.syncErrorValue;return a},e.prototype._trySubscribe=function(e){try{return this._subscribe(e)}catch(t){l.a.useDeprecatedSynchronousErrorHandling&&(e.syncErrorThrown=!0,e.syncErrorValue=t),!function(e){for(;e;){var t=e,n=t.closed,o=t.destination,s=t.isStopped;if(n||s)return!1;e=o&&o instanceof r.a?o:null}return!0}(e)?console.warn(t):e.error(t)}},e.prototype.forEach=function(e,t){var n=this;return new(t=h(t))((function(t,r){var o;o=n.subscribe((function(t){try{e(t)}catch(e){r(e),o&&o.unsubscribe()}}),r,t)}))},e.prototype._subscribe=function(e){var t=this.source;return t&&t.subscribe(e)},e.prototype[i.a]=function(){return this},e.prototype.pipe=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return 0===e.length?this:u(e)(this)},e.prototype.toPromise=function(e){var t=this;return new(e=h(e))((function(e,n){var r;t.subscribe((function(e){return r=e}),(function(e){return n(e)}),(function(){return e(r)}))}))},e.create=function(t){return new e(t)},e}();function h(e){if(e||(e=l.a.Promise||Promise),!e)throw new Error("no Promise impl found");return e}},function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(20),o=n(13),s=n(11),i=function(){function e(e){return Error.call(this),this.message=e?e.length+" errors occurred during unsubscription:\n"+e.map((function(e,t){return t+1+") "+e.toString()})).join("\n  "):"",this.name="UnsubscriptionError",this.errors=e,this}return e.prototype=Object.create(Error.prototype),e}(),a=function(){function e(e){this.closed=!1,this._parentOrParents=null,this._subscriptions=null,e&&(this._ctorUnsubscribe=!0,this._unsubscribe=e)}var t;return e.prototype.unsubscribe=function(){var t;if(!this.closed){var n=this._parentOrParents,a=this._ctorUnsubscribe,l=this._unsubscribe,c=this._subscriptions;if(this.closed=!0,this._parentOrParents=null,this._subscriptions=null,n instanceof e)n.remove(this);else if(null!==n)for(var h=0;h<n.length;++h){n[h].remove(this)}if(Object(s.a)(l)){a&&(this._unsubscribe=void 0);try{l.call(this)}catch(e){t=e instanceof i?u(e.errors):[e]}}if(Object(r.a)(c)){h=-1;for(var d=c.length;++h<d;){var p=c[h];if(Object(o.a)(p))try{p.unsubscribe()}catch(e){t=t||[],e instanceof i?t=t.concat(u(e.errors)):t.push(e)}}}if(t)throw new i(t)}},e.prototype.add=function(t){var n=t;if(!t)return e.EMPTY;switch(typeof t){case"function":n=new e(t);case"object":if(n===this||n.closed||"function"!=typeof n.unsubscribe)return n;if(this.closed)return n.unsubscribe(),n;if(!(n instanceof e)){var r=n;(n=new e)._subscriptions=[r]}break;default:throw new Error("unrecognized teardown "+t+" added to Subscription.")}var o=n._parentOrParents;if(null===o)n._parentOrParents=this;else if(o instanceof e){if(o===this)return n;n._parentOrParents=[o,this]}else{if(-1!==o.indexOf(this))return n;o.push(this)}var s=this._subscriptions;return null===s?this._subscriptions=[n]:s.push(n),n},e.prototype.remove=function(e){var t=this._subscriptions;if(t){var n=t.indexOf(e);-1!==n&&t.splice(n,1)}},e.EMPTY=((t=new e).closed=!0,t),e}();function u(e){return e.reduce((function(e,t){return e.concat(t instanceof i?t.errors:t)}),[])}},function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(1),o=n(11),s=n(10),i=n(3),a=n(9),u=n(5),l=n(7),c=function(e){function t(n,r,o){var i=e.call(this)||this;switch(i.syncErrorValue=null,i.syncErrorThrown=!1,i.syncErrorThrowable=!1,i.isStopped=!1,arguments.length){case 0:i.destination=s.a;break;case 1:if(!n){i.destination=s.a;break}if("object"==typeof n){n instanceof t?(i.syncErrorThrowable=n.syncErrorThrowable,i.destination=n,n.add(i)):(i.syncErrorThrowable=!0,i.destination=new h(i,n));break}default:i.syncErrorThrowable=!0,i.destination=new h(i,n,r,o)}return i}return r.a(t,e),t.prototype[a.a]=function(){return this},t.create=function(e,n,r){var o=new t(e,n,r);return o.syncErrorThrowable=!1,o},t.prototype.next=function(e){this.isStopped||this._next(e)},t.prototype.error=function(e){this.isStopped||(this.isStopped=!0,this._error(e))},t.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},t.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,e.prototype.unsubscribe.call(this))},t.prototype._next=function(e){this.destination.next(e)},t.prototype._error=function(e){this.destination.error(e),this.unsubscribe()},t.prototype._complete=function(){this.destination.complete(),this.unsubscribe()},t.prototype._unsubscribeAndRecycle=function(){var e=this._parentOrParents;return this._parentOrParents=null,this.unsubscribe(),this.closed=!1,this.isStopped=!1,this._parentOrParents=e,this},t}(i.a),h=function(e){function t(t,n,r,i){var a,u=e.call(this)||this;u._parentSubscriber=t;var l=u;return Object(o.a)(n)?a=n:n&&(a=n.next,r=n.error,i=n.complete,n!==s.a&&(l=Object.create(n),Object(o.a)(l.unsubscribe)&&u.add(l.unsubscribe.bind(l)),l.unsubscribe=u.unsubscribe.bind(u))),u._context=l,u._next=a,u._error=r,u._complete=i,u}return r.a(t,e),t.prototype.next=function(e){if(!this.isStopped&&this._next){var t=this._parentSubscriber;u.a.useDeprecatedSynchronousErrorHandling&&t.syncErrorThrowable?this.__tryOrSetError(t,this._next,e)&&this.unsubscribe():this.__tryOrUnsub(this._next,e)}},t.prototype.error=function(e){if(!this.isStopped){var t=this._parentSubscriber,n=u.a.useDeprecatedSynchronousErrorHandling;if(this._error)n&&t.syncErrorThrowable?(this.__tryOrSetError(t,this._error,e),this.unsubscribe()):(this.__tryOrUnsub(this._error,e),this.unsubscribe());else if(t.syncErrorThrowable)n?(t.syncErrorValue=e,t.syncErrorThrown=!0):Object(l.a)(e),this.unsubscribe();else{if(this.unsubscribe(),n)throw e;Object(l.a)(e)}}},t.prototype.complete=function(){var e=this;if(!this.isStopped){var t=this._parentSubscriber;if(this._complete){var n=function(){return e._complete.call(e._context)};u.a.useDeprecatedSynchronousErrorHandling&&t.syncErrorThrowable?(this.__tryOrSetError(t,n),this.unsubscribe()):(this.__tryOrUnsub(n),this.unsubscribe())}else this.unsubscribe()}},t.prototype.__tryOrUnsub=function(e,t){try{e.call(this._context,t)}catch(e){if(this.unsubscribe(),u.a.useDeprecatedSynchronousErrorHandling)throw e;Object(l.a)(e)}},t.prototype.__tryOrSetError=function(e,t,n){if(!u.a.useDeprecatedSynchronousErrorHandling)throw new Error("bad call");try{t.call(this._context,n)}catch(t){return u.a.useDeprecatedSynchronousErrorHandling?(e.syncErrorValue=t,e.syncErrorThrown=!0,!0):(Object(l.a)(t),!0)}return!1},t.prototype._unsubscribe=function(){var e=this._parentSubscriber;this._context=null,this._parentSubscriber=null,e.unsubscribe()},t}(c)},function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=!1,o={Promise:void 0,set useDeprecatedSynchronousErrorHandling(e){e&&(new Error).stack;r=e},get useDeprecatedSynchronousErrorHandling(){return r}}},function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r=function(){return"function"==typeof Symbol&&Symbol.observable||"@@observable"}()},function(e,t,n){"use strict";function r(e){setTimeout((function(){throw e}),0)}n.d(t,"a",(function(){return r}))},function(e,t,n){"use strict";function r(){return"function"==typeof Symbol&&Symbol.iterator?Symbol.iterator:"@@iterator"}n.d(t,"a",(function(){return o}));var o=r()},function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r=function(){return"function"==typeof Symbol?Symbol("rxSubscriber"):"@@rxSubscriber_"+Math.random()}()},function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(5),o=n(7),s={closed:!0,next:function(e){},error:function(e){if(r.a.useDeprecatedSynchronousErrorHandling)throw e;Object(o.a)(e)},complete:function(){}}},function(e,t,n){"use strict";function r(e){return"function"==typeof e}n.d(t,"a",(function(){return r}))},function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return h}));var r=n(1),o=n(2),s=n(4),i=n(3),a=function(){function e(){return Error.call(this),this.message="object unsubscribed",this.name="ObjectUnsubscribedError",this}return e.prototype=Object.create(Error.prototype),e}(),u=function(e){function t(t,n){var r=e.call(this)||this;return r.subject=t,r.subscriber=n,r.closed=!1,r}return r.a(t,e),t.prototype.unsubscribe=function(){if(!this.closed){this.closed=!0;var e=this.subject,t=e.observers;if(this.subject=null,t&&0!==t.length&&!e.isStopped&&!e.closed){var n=t.indexOf(this.subscriber);-1!==n&&t.splice(n,1)}}},t}(i.a),l=n(9),c=function(e){function t(t){var n=e.call(this,t)||this;return n.destination=t,n}return r.a(t,e),t}(s.a),h=function(e){function t(){var t=e.call(this)||this;return t.observers=[],t.closed=!1,t.isStopped=!1,t.hasError=!1,t.thrownError=null,t}return r.a(t,e),t.prototype[l.a]=function(){return new c(this)},t.prototype.lift=function(e){var t=new d(this,this);return t.operator=e,t},t.prototype.next=function(e){if(this.closed)throw new a;if(!this.isStopped)for(var t=this.observers,n=t.length,r=t.slice(),o=0;o<n;o++)r[o].next(e)},t.prototype.error=function(e){if(this.closed)throw new a;this.hasError=!0,this.thrownError=e,this.isStopped=!0;for(var t=this.observers,n=t.length,r=t.slice(),o=0;o<n;o++)r[o].error(e);this.observers.length=0},t.prototype.complete=function(){if(this.closed)throw new a;this.isStopped=!0;for(var e=this.observers,t=e.length,n=e.slice(),r=0;r<t;r++)n[r].complete();this.observers.length=0},t.prototype.unsubscribe=function(){this.isStopped=!0,this.closed=!0,this.observers=null},t.prototype._trySubscribe=function(t){if(this.closed)throw new a;return e.prototype._trySubscribe.call(this,t)},t.prototype._subscribe=function(e){if(this.closed)throw new a;return this.hasError?(e.error(this.thrownError),i.a.EMPTY):this.isStopped?(e.complete(),i.a.EMPTY):(this.observers.push(e),new u(this,e))},t.prototype.asObservable=function(){var e=new o.a;return e.source=this,e},t.create=function(e,t){return new d(e,t)},t}(o.a),d=function(e){function t(t,n){var r=e.call(this)||this;return r.destination=t,r.source=n,r}return r.a(t,e),t.prototype.next=function(e){var t=this.destination;t&&t.next&&t.next(e)},t.prototype.error=function(e){var t=this.destination;t&&t.error&&this.destination.error(e)},t.prototype.complete=function(){var e=this.destination;e&&e.complete&&this.destination.complete()},t.prototype._subscribe=function(e){return this.source?this.source.subscribe(e):i.a.EMPTY},t}(h)},function(e,t,n){"use strict";function r(e){return null!==e&&"object"==typeof e}n.d(t,"a",(function(){return r}))},function(e,t,n){"use strict";function r(e){return e}n.d(t,"a",(function(){return r}))},function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r=function(e){return e&&"number"==typeof e.length&&"function"!=typeof e}},function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r=function(e){return function(t){for(var n=0,r=e.length;n<r&&!t.closed;n++)t.next(e[n]);t.complete()}}},function(e,t,n){"use strict";function r(e){return!!e&&"function"!=typeof e.subscribe&&"function"==typeof e.then}n.d(t,"a",(function(){return r}))},function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(2),o=n(3);function s(e,t){return new r.a((function(n){var r=new o.a,s=0;return r.add(t.schedule((function(){s!==e.length?(n.next(e[s++]),n.closed||r.add(this.schedule())):n.complete()}))),r}))}},function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(16),o=n(7),s=n(8),i=n(6),a=n(15),u=n(17),l=n(13),c=function(e){if(e&&"function"==typeof e[i.a])return c=e,function(e){var t=c[i.a]();if("function"!=typeof t.subscribe)throw new TypeError("Provided object does not correctly implement Symbol.observable");return t.subscribe(e)};if(Object(a.a)(e))return Object(r.a)(e);if(Object(u.a)(e))return n=e,function(e){return n.then((function(t){e.closed||(e.next(t),e.complete())}),(function(t){return e.error(t)})).then(null,o.a),e};if(e&&"function"==typeof e[s.a])return t=e,function(e){for(var n=t[s.a]();;){var r=void 0;try{r=n.next()}catch(t){return e.error(t),e}if(r.done){e.complete();break}if(e.next(r.value),e.closed)break}return"function"==typeof n.return&&e.add((function(){n.return&&n.return()})),e};var t,n,c,h=Object(l.a)(e)?"an invalid object":"'"+e+"'";throw new TypeError("You provided "+h+" where a stream was expected. You can provide an Observable, Promise, Array, or Iterable.")}},function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r=function(){return Array.isArray||function(e){return e&&"number"==typeof e.length}}()},function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(1),o=n(4);function s(e,t){return function(n){if("function"!=typeof e)throw new TypeError("argument is not a function. Are you looking for `mapTo()`?");return n.lift(new i(e,t))}}var i=function(){function e(e,t){this.project=e,this.thisArg=t}return e.prototype.call=function(e,t){return t.subscribe(new a(e,this.project,this.thisArg))},e}(),a=function(e){function t(t,n,r){var o=e.call(this,t)||this;return o.project=n,o.count=0,o.thisArg=r||o,o}return r.a(t,e),t.prototype._next=function(e){var t;try{t=this.project.call(this.thisArg,e,this.count++)}catch(e){return void this.destination.error(e)}this.destination.next(t)},t}(o.a)},function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var r=n(2),o=n(19),s=n(3),i=n(6);var a=n(18),u=n(8);var l=n(17),c=n(15);function h(e,t){if(null!=e){if(function(e){return e&&"function"==typeof e[i.a]}(e))return function(e,t){return new r.a((function(n){var r=new s.a;return r.add(t.schedule((function(){var o=e[i.a]();r.add(o.subscribe({next:function(e){r.add(t.schedule((function(){return n.next(e)})))},error:function(e){r.add(t.schedule((function(){return n.error(e)})))},complete:function(){r.add(t.schedule((function(){return n.complete()})))}}))}))),r}))}(e,t);if(Object(l.a)(e))return function(e,t){return new r.a((function(n){var r=new s.a;return r.add(t.schedule((function(){return e.then((function(e){r.add(t.schedule((function(){n.next(e),r.add(t.schedule((function(){return n.complete()})))})))}),(function(e){r.add(t.schedule((function(){return n.error(e)})))}))}))),r}))}(e,t);if(Object(c.a)(e))return Object(a.a)(e,t);if(function(e){return e&&"function"==typeof e[u.a]}(e)||"string"==typeof e)return function(e,t){if(!e)throw new Error("Iterable cannot be null");return new r.a((function(n){var r,o=new s.a;return o.add((function(){r&&"function"==typeof r.return&&r.return()})),o.add(t.schedule((function(){r=e[u.a](),o.add(t.schedule((function(){if(!n.closed){var e,t;try{var o=r.next();e=o.value,t=o.done}catch(e){return void n.error(e)}t?n.complete():(n.next(e),this.schedule())}})))}))),o}))}(e,t)}throw new TypeError((null!==e&&typeof e||e)+" is not observable")}function d(e,t){return t?h(e,t):e instanceof r.a?e:new r.a(Object(o.a)(e))}},function(e,t){function n(e){return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}))}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id=23},function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));function r(e,t,n,r){var o,s=arguments.length,i=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(i=(s<3?o(i):s>3?o(t,n,i):o(t,n))||i);return s>3&&i&&Object.defineProperty(t,n,i),i}Object.create;Object.create},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){"use strict";n.d(t,"a",(function(){return D}));var r=n(2);function o(e){return e&&"function"==typeof e.schedule}var s=n(1),i=n(21),a=n(22),u=n(4),l=n(19),c=function(e){function t(t){var n=e.call(this)||this;return n.parent=t,n}return s.a(t,e),t.prototype._next=function(e){this.parent.notifyNext(e)},t.prototype._error=function(e){this.parent.notifyError(e),this.unsubscribe()},t.prototype._complete=function(){this.parent.notifyComplete(),this.unsubscribe()},t}(u.a),h=(u.a,function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return s.a(t,e),t.prototype.notifyNext=function(e){this.destination.next(e)},t.prototype.notifyError=function(e){this.destination.error(e)},t.prototype.notifyComplete=function(){this.destination.complete()},t}(u.a));u.a;function d(e,t,n){return void 0===n&&(n=Number.POSITIVE_INFINITY),"function"==typeof t?function(r){return r.pipe(d((function(n,r){return Object(a.a)(e(n,r)).pipe(Object(i.a)((function(e,o){return t(n,e,r,o)})))}),n))}:("number"==typeof t&&(n=t),function(t){return t.lift(new p(e,n))})}var p=function(){function e(e,t){void 0===t&&(t=Number.POSITIVE_INFINITY),this.project=e,this.concurrent=t}return e.prototype.call=function(e,t){return t.subscribe(new f(e,this.project,this.concurrent))},e}(),f=function(e){function t(t,n,r){void 0===r&&(r=Number.POSITIVE_INFINITY);var o=e.call(this,t)||this;return o.project=n,o.concurrent=r,o.hasCompleted=!1,o.buffer=[],o.active=0,o.index=0,o}return s.a(t,e),t.prototype._next=function(e){this.active<this.concurrent?this._tryNext(e):this.buffer.push(e)},t.prototype._tryNext=function(e){var t,n=this.index++;try{t=this.project(e,n)}catch(e){return void this.destination.error(e)}this.active++,this._innerSub(t)},t.prototype._innerSub=function(e){var t=new c(this),n=this.destination;n.add(t);var o=function(e,t){if(!t.closed)return e instanceof r.a?e.subscribe(t):Object(l.a)(e)(t)}(e,t);o!==t&&n.add(o)},t.prototype._complete=function(){this.hasCompleted=!0,0===this.active&&0===this.buffer.length&&this.destination.complete(),this.unsubscribe()},t.prototype.notifyNext=function(e){this.destination.next(e)},t.prototype.notifyComplete=function(){var e=this.buffer;this.active--,e.length>0?this._next(e.shift()):0===this.active&&this.hasCompleted&&this.destination.complete()},t}(h),g=n(14);function y(e){return void 0===e&&(e=Number.POSITIVE_INFINITY),d(g.a,e)}var m=n(16),_=n(18);function v(e,t){return t?Object(_.a)(e,t):new r.a(Object(m.a)(e))}function D(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n=Number.POSITIVE_INFINITY,s=null,i=e[e.length-1];return o(i)?(s=e.pop(),e.length>1&&"number"==typeof e[e.length-1]&&(n=e.pop())):"number"==typeof i&&(n=e.pop()),null===s&&1===e.length&&e[0]instanceof r.a?e[0]:y(n)(v(e,s))}},function(e,t,n){"use strict";n.d(t,"a",(function(){return y}));var r=n(1),o=n(12),s=n(2),i=n(4),a=n(3);function u(){return function(e){return e.lift(new l(e))}}var l=function(){function e(e){this.connectable=e}return e.prototype.call=function(e,t){var n=this.connectable;n._refCount++;var r=new c(e,n),o=t.subscribe(r);return r.closed||(r.connection=n.connect()),o},e}(),c=function(e){function t(t,n){var r=e.call(this,t)||this;return r.connectable=n,r}return r.a(t,e),t.prototype._unsubscribe=function(){var e=this.connectable;if(e){this.connectable=null;var t=e._refCount;if(t<=0)this.connection=null;else if(e._refCount=t-1,t>1)this.connection=null;else{var n=this.connection,r=e._connection;this.connection=null,!r||n&&r!==n||r.unsubscribe()}}else this.connection=null},t}(i.a),h=function(e){function t(t,n){var r=e.call(this)||this;return r.source=t,r.subjectFactory=n,r._refCount=0,r._isComplete=!1,r}return r.a(t,e),t.prototype._subscribe=function(e){return this.getSubject().subscribe(e)},t.prototype.getSubject=function(){var e=this._subject;return e&&!e.isStopped||(this._subject=this.subjectFactory()),this._subject},t.prototype.connect=function(){var e=this._connection;return e||(this._isComplete=!1,(e=this._connection=new a.a).add(this.source.subscribe(new p(this.getSubject(),this))),e.closed&&(this._connection=null,e=a.a.EMPTY)),e},t.prototype.refCount=function(){return u()(this)},t}(s.a),d=function(){var e=h.prototype;return{operator:{value:null},_refCount:{value:0,writable:!0},_subject:{value:null,writable:!0},_connection:{value:null,writable:!0},_subscribe:{value:e._subscribe},_isComplete:{value:e._isComplete,writable:!0},getSubject:{value:e.getSubject},connect:{value:e.connect},refCount:{value:e.refCount}}}(),p=function(e){function t(t,n){var r=e.call(this,t)||this;return r.connectable=n,r}return r.a(t,e),t.prototype._error=function(t){this._unsubscribe(),e.prototype._error.call(this,t)},t.prototype._complete=function(){this.connectable._isComplete=!0,this._unsubscribe(),e.prototype._complete.call(this)},t.prototype._unsubscribe=function(){var e=this.connectable;if(e){this.connectable=null;var t=e._connection;e._refCount=0,e._subject=null,e._connection=null,t&&t.unsubscribe()}},t}(o.b);i.a;var f=function(){function e(e,t){this.subjectFactory=e,this.selector=t}return e.prototype.call=function(e,t){var n=this.selector,r=this.subjectFactory(),o=n(r).subscribe(e);return o.add(t.subscribe(r)),o},e}();function g(){return new o.a}function y(){return function(e){return u()((t=g,function(e){var r;if(r="function"==typeof t?t:function(){return t},"function"==typeof n)return e.lift(new f(r,n));var o=Object.create(e,d);return o.source=e,o.subjectFactory=r,o})(e));var t,n}}},,,,,,function(e,t,n){"use strict";n.r(t),n.d(t,"RegisterComponent",(function(){return yr}));var r=n(24),o=n(0);
/**
 * @license Angular v10.2.3
 * (c) 2010-2020 Google LLC. https://angular.io/
 * License: MIT
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
let s=null;function i(){return s}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const a=new o.m("DocumentToken");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class u{}function l(){return Object(o.P)(c)}u.ɵprov=Object(o.O)({factory:l,token:u,providedIn:"platform"}),u.decorators=[{type:o.l,args:[{providedIn:"platform",useFactory:l}]}];new o.m("Location Initialized");class c extends u{constructor(e){super(),this._doc=e,this._init()}_init(){this.location=i().getLocation(),this._history=i().getHistory()}getBaseHrefFromDOM(){return i().getBaseHref(this._doc)}onPopState(e){i().getGlobalEventTarget(this._doc,"window").addEventListener("popstate",e,!1)}onHashChange(e){i().getGlobalEventTarget(this._doc,"window").addEventListener("hashchange",e,!1)}get href(){return this.location.href}get protocol(){return this.location.protocol}get hostname(){return this.location.hostname}get port(){return this.location.port}get pathname(){return this.location.pathname}get search(){return this.location.search}get hash(){return this.location.hash}set pathname(e){this.location.pathname=e}pushState(e,t,n){h()?this._history.pushState(e,t,n):this.location.hash=n}replaceState(e,t,n){h()?this._history.replaceState(e,t,n):this.location.hash=n}forward(){this._history.forward()}back(){this._history.back()}getState(){return this._history.state}}function h(){return!!window.history.pushState}function d(){return new c(Object(o.P)(a))}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function p(e,t){if(0==e.length)return t;if(0==t.length)return e;let n=0;return e.endsWith("/")&&n++,t.startsWith("/")&&n++,2==n?e+t.substring(1):1==n?e+t:e+"/"+t}function f(e){const t=e.match(/#|\?|$/),n=t&&t.index||e.length,r=n-("/"===e[n-1]?1:0);return e.slice(0,r)+e.slice(n)}function g(e){return e&&"?"!==e[0]?"?"+e:e}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */c.ɵprov=Object(o.O)({factory:d,token:c,providedIn:"platform"}),c.decorators=[{type:o.l,args:[{providedIn:"platform",useFactory:d}]}],c.ctorParameters=()=>[{type:void 0,decorators:[{type:o.k,args:[a]}]}];class y{}function m(e){const t=Object(o.P)(a).location;return new v(Object(o.P)(u),t&&t.origin||"")}y.ɵprov=Object(o.O)({factory:m,token:y,providedIn:"root"}),y.decorators=[{type:o.l,args:[{providedIn:"root",useFactory:m}]}];const _=new o.m("appBaseHref");class v extends y{constructor(e,t){if(super(),this._platformLocation=e,null==t&&(t=this._platformLocation.getBaseHrefFromDOM()),null==t)throw new Error("No base href set. Please provide a value for the APP_BASE_HREF token or add a base element to the document.");this._baseHref=t}onPopState(e){this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e)}getBaseHref(){return this._baseHref}prepareExternalUrl(e){return p(this._baseHref,e)}path(e=!1){const t=this._platformLocation.pathname+g(this._platformLocation.search),n=this._platformLocation.hash;return n&&e?`${t}${n}`:t}pushState(e,t,n,r){const o=this.prepareExternalUrl(n+g(r));this._platformLocation.pushState(e,t,o)}replaceState(e,t,n,r){const o=this.prepareExternalUrl(n+g(r));this._platformLocation.replaceState(e,t,o)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}}v.decorators=[{type:o.l}],v.ctorParameters=()=>[{type:u},{type:String,decorators:[{type:o.u},{type:o.k,args:[_]}]}]
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */;class D extends y{constructor(e,t){super(),this._platformLocation=e,this._baseHref="",null!=t&&(this._baseHref=t)}onPopState(e){this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e)}getBaseHref(){return this._baseHref}path(e=!1){let t=this._platformLocation.hash;return null==t&&(t="#"),t.length>0?t.substring(1):t}prepareExternalUrl(e){const t=p(this._baseHref,e);return t.length>0?"#"+t:t}pushState(e,t,n,r){let o=this.prepareExternalUrl(n+g(r));0==o.length&&(o=this._platformLocation.pathname),this._platformLocation.pushState(e,t,o)}replaceState(e,t,n,r){let o=this.prepareExternalUrl(n+g(r));0==o.length&&(o=this._platformLocation.pathname),this._platformLocation.replaceState(e,t,o)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}}D.decorators=[{type:o.l}],D.ctorParameters=()=>[{type:u},{type:String,decorators:[{type:o.u},{type:o.k,args:[_]}]}]
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */;class b{constructor(e,t){this._subject=new o.i,this._urlChangeListeners=[],this._platformStrategy=e;const n=this._platformStrategy.getBaseHref();this._platformLocation=t,this._baseHref=f(w(n)),this._platformStrategy.onPopState(e=>{this._subject.emit({url:this.path(!0),pop:!0,state:e.state,type:e.type})})}path(e=!1){return this.normalize(this._platformStrategy.path(e))}getState(){return this._platformLocation.getState()}isCurrentPathEqualTo(e,t=""){return this.path()==this.normalize(e+g(t))}normalize(e){return b.stripTrailingSlash(function(e,t){return e&&t.startsWith(e)?t.substring(e.length):t}(this._baseHref,w(e)))}prepareExternalUrl(e){return e&&"/"!==e[0]&&(e="/"+e),this._platformStrategy.prepareExternalUrl(e)}go(e,t="",n=null){this._platformStrategy.pushState(n,"",e,t),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+g(t)),n)}replaceState(e,t="",n=null){this._platformStrategy.replaceState(n,"",e,t),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+g(t)),n)}forward(){this._platformStrategy.forward()}back(){this._platformStrategy.back()}onUrlChange(e){this._urlChangeListeners.push(e),this._urlChangeSubscription||(this._urlChangeSubscription=this.subscribe(e=>{this._notifyUrlChangeListeners(e.url,e.state)}))}_notifyUrlChangeListeners(e="",t){this._urlChangeListeners.forEach(n=>n(e,t))}subscribe(e,t,n){return this._subject.subscribe({next:e,error:t,complete:n})}}function C(){return new b(Object(o.P)(y),Object(o.P)(u))}function w(e){return e.replace(/\/index.html$/,"")}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */b.normalizeQueryParams=g,b.joinWithSlash=p,b.stripTrailingSlash=f,b.ɵprov=Object(o.O)({factory:C,token:b,providedIn:"root"}),b.decorators=[{type:o.l,args:[{providedIn:"root",useFactory:C}]}],b.ctorParameters=()=>[{type:y},{type:u}];const E={ADP:[void 0,void 0,0],AFN:[void 0,void 0,0],ALL:[void 0,void 0,0],AMD:[void 0,void 0,2],AOA:[void 0,"Kz"],ARS:[void 0,"$"],AUD:["A$","$"],BAM:[void 0,"KM"],BBD:[void 0,"$"],BDT:[void 0,"৳"],BHD:[void 0,void 0,3],BIF:[void 0,void 0,0],BMD:[void 0,"$"],BND:[void 0,"$"],BOB:[void 0,"Bs"],BRL:["R$"],BSD:[void 0,"$"],BWP:[void 0,"P"],BYN:[void 0,"р.",2],BYR:[void 0,void 0,0],BZD:[void 0,"$"],CAD:["CA$","$",2],CHF:[void 0,void 0,2],CLF:[void 0,void 0,4],CLP:[void 0,"$",0],CNY:["CN¥","¥"],COP:[void 0,"$",2],CRC:[void 0,"₡",2],CUC:[void 0,"$"],CUP:[void 0,"$"],CZK:[void 0,"Kč",2],DJF:[void 0,void 0,0],DKK:[void 0,"kr",2],DOP:[void 0,"$"],EGP:[void 0,"E£"],ESP:[void 0,"₧",0],EUR:["€"],FJD:[void 0,"$"],FKP:[void 0,"£"],GBP:["£"],GEL:[void 0,"₾"],GIP:[void 0,"£"],GNF:[void 0,"FG",0],GTQ:[void 0,"Q"],GYD:[void 0,"$",2],HKD:["HK$","$"],HNL:[void 0,"L"],HRK:[void 0,"kn"],HUF:[void 0,"Ft",2],IDR:[void 0,"Rp",2],ILS:["₪"],INR:["₹"],IQD:[void 0,void 0,0],IRR:[void 0,void 0,0],ISK:[void 0,"kr",0],ITL:[void 0,void 0,0],JMD:[void 0,"$"],JOD:[void 0,void 0,3],JPY:["¥",void 0,0],KHR:[void 0,"៛"],KMF:[void 0,"CF",0],KPW:[void 0,"₩",0],KRW:["₩",void 0,0],KWD:[void 0,void 0,3],KYD:[void 0,"$"],KZT:[void 0,"₸"],LAK:[void 0,"₭",0],LBP:[void 0,"L£",0],LKR:[void 0,"Rs"],LRD:[void 0,"$"],LTL:[void 0,"Lt"],LUF:[void 0,void 0,0],LVL:[void 0,"Ls"],LYD:[void 0,void 0,3],MGA:[void 0,"Ar",0],MGF:[void 0,void 0,0],MMK:[void 0,"K",0],MNT:[void 0,"₮",2],MRO:[void 0,void 0,0],MUR:[void 0,"Rs",2],MXN:["MX$","$"],MYR:[void 0,"RM"],NAD:[void 0,"$"],NGN:[void 0,"₦"],NIO:[void 0,"C$"],NOK:[void 0,"kr",2],NPR:[void 0,"Rs"],NZD:["NZ$","$"],OMR:[void 0,void 0,3],PHP:[void 0,"₱"],PKR:[void 0,"Rs",2],PLN:[void 0,"zł"],PYG:[void 0,"₲",0],RON:[void 0,"lei"],RSD:[void 0,void 0,0],RUB:[void 0,"₽"],RUR:[void 0,"р."],RWF:[void 0,"RF",0],SBD:[void 0,"$"],SEK:[void 0,"kr",2],SGD:[void 0,"$"],SHP:[void 0,"£"],SLL:[void 0,void 0,0],SOS:[void 0,void 0,0],SRD:[void 0,"$"],SSP:[void 0,"£"],STD:[void 0,void 0,0],STN:[void 0,"Db"],SYP:[void 0,"£",0],THB:[void 0,"฿"],TMM:[void 0,void 0,0],TND:[void 0,void 0,3],TOP:[void 0,"T$"],TRL:[void 0,void 0,0],TRY:[void 0,"₺"],TTD:[void 0,"$"],TWD:["NT$","$",2],TZS:[void 0,void 0,2],UAH:[void 0,"₴"],UGX:[void 0,void 0,0],USD:["$"],UYI:[void 0,void 0,0],UYU:[void 0,"$"],UYW:[void 0,void 0,4],UZS:[void 0,void 0,2],VEF:[void 0,"Bs",2],VND:["₫",void 0,0],VUV:[void 0,void 0,0],XAF:["FCFA",void 0,0],XCD:["EC$","$"],XOF:["CFA",void 0,0],XPF:["CFPF",void 0,0],XXX:["¤"],YER:[void 0,void 0,0],ZAR:[void 0,"R"],ZMK:[void 0,void 0,0],ZMW:[void 0,"ZK"],ZWD:[void 0,void 0,0]};
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */var A,F,x,M,k,S,O;function V(e,t){return R(Object(o.G)(e)[o.F.DateFormat],t)}function T(e,t){return R(Object(o.G)(e)[o.F.TimeFormat],t)}function I(e,t){return R(Object(o.G)(e)[o.F.DateTimeFormat],t)}function P(e,t){const n=Object(o.G)(e),r=n[o.F.NumberSymbols][t];if(void 0===r){if(t===S.CurrencyDecimal)return n[o.F.NumberSymbols][S.Decimal];if(t===S.CurrencyGroup)return n[o.F.NumberSymbols][S.Group]}return r}function N(e,t){return Object(o.G)(e)[o.F.NumberFormats][t]}!function(e){e[e.Decimal=0]="Decimal",e[e.Percent=1]="Percent",e[e.Currency=2]="Currency",e[e.Scientific=3]="Scientific"}(A||(A={})),function(e){e[e.Zero=0]="Zero",e[e.One=1]="One",e[e.Two=2]="Two",e[e.Few=3]="Few",e[e.Many=4]="Many",e[e.Other=5]="Other"}(F||(F={})),function(e){e[e.Format=0]="Format",e[e.Standalone=1]="Standalone"}(x||(x={})),function(e){e[e.Narrow=0]="Narrow",e[e.Abbreviated=1]="Abbreviated",e[e.Wide=2]="Wide",e[e.Short=3]="Short"}(M||(M={})),function(e){e[e.Short=0]="Short",e[e.Medium=1]="Medium",e[e.Long=2]="Long",e[e.Full=3]="Full"}(k||(k={})),function(e){e[e.Decimal=0]="Decimal",e[e.Group=1]="Group",e[e.List=2]="List",e[e.PercentSign=3]="PercentSign",e[e.PlusSign=4]="PlusSign",e[e.MinusSign=5]="MinusSign",e[e.Exponential=6]="Exponential",e[e.SuperscriptingExponent=7]="SuperscriptingExponent",e[e.PerMille=8]="PerMille",e[e[1/0]=9]="Infinity",e[e.NaN=10]="NaN",e[e.TimeSeparator=11]="TimeSeparator",e[e.CurrencyDecimal=12]="CurrencyDecimal",e[e.CurrencyGroup=13]="CurrencyGroup"}(S||(S={})),function(e){e[e.Sunday=0]="Sunday",e[e.Monday=1]="Monday",e[e.Tuesday=2]="Tuesday",e[e.Wednesday=3]="Wednesday",e[e.Thursday=4]="Thursday",e[e.Friday=5]="Friday",e[e.Saturday=6]="Saturday"}(O||(O={}));const j=o.I;function B(e){if(!e[o.F.ExtraData])throw new Error(`Missing extra locale data for the locale "${e[o.F.LocaleId]}". Use "registerLocaleData" to load new data. See the "I18n guide" on angular.io to know more.`)}function R(e,t){for(let n=t;n>-1;n--)if(void 0!==e[n])return e[n];throw new Error("Locale data API: locale data undefined")}function L(e){const[t,n]=e.split(":");return{hours:+t,minutes:+n}}function H(e,t,n="en"){const r=function(e){return Object(o.G)(e)[o.F.Currencies]}(n)[e]||E[e]||[],s=r[1];return"narrow"===t&&"string"==typeof s?s:r[0]||e}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const $=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/,G={},U=/((?:[^GyMLwWdEabBhHmsSzZO']+)|(?:'(?:[^']|'')*')|(?:G{1,5}|y{1,4}|M{1,5}|L{1,5}|w{1,2}|W{1}|d{1,2}|E{1,6}|a{1,5}|b{1,5}|B{1,5}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|S{1,3}|z{1,4}|Z{1,5}|O{1,4}))([\s\S]*)/;var z,Z,W;function q(e,t,n,r){let s=function(e){if(re(e))return e;if("number"==typeof e&&!isNaN(e))return new Date(e);if("string"==typeof e){e=e.trim();const t=parseFloat(e);if(!isNaN(e-t))return new Date(t);if(/^(\d{4}-\d{1,2}-\d{1,2})$/.test(e)){const[t,n,r]=e.split("-").map(e=>+e);return new Date(t,n-1,r)}let n;if(n=e.match($))return function(e){const t=new Date(0);let n=0,r=0;const o=e[8]?t.setUTCFullYear:t.setFullYear,s=e[8]?t.setUTCHours:t.setHours;e[9]&&(n=Number(e[9]+e[10]),r=Number(e[9]+e[11]));o.call(t,Number(e[1]),Number(e[2])-1,Number(e[3]));const i=Number(e[4]||0)-n,a=Number(e[5]||0)-r,u=Number(e[6]||0),l=Math.round(1e3*parseFloat("0."+(e[7]||0)));return s.call(t,i,a,u,l),t}(n)}const t=new Date(e);if(!re(t))throw new Error(`Unable to convert "${e}" into a date`);return t}(e);t=function e(t,n){const r=function(e){return Object(o.G)(e)[o.F.LocaleId]}(t);if(G[r]=G[r]||{},G[r][n])return G[r][n];let s="";switch(n){case"shortDate":s=V(t,k.Short);break;case"mediumDate":s=V(t,k.Medium);break;case"longDate":s=V(t,k.Long);break;case"fullDate":s=V(t,k.Full);break;case"shortTime":s=T(t,k.Short);break;case"mediumTime":s=T(t,k.Medium);break;case"longTime":s=T(t,k.Long);break;case"fullTime":s=T(t,k.Full);break;case"short":const n=e(t,"shortTime"),r=e(t,"shortDate");s=K(I(t,k.Short),[n,r]);break;case"medium":const o=e(t,"mediumTime"),i=e(t,"mediumDate");s=K(I(t,k.Medium),[o,i]);break;case"long":const a=e(t,"longTime"),u=e(t,"longDate");s=K(I(t,k.Long),[a,u]);break;case"full":const l=e(t,"fullTime"),c=e(t,"fullDate");s=K(I(t,k.Full),[l,c])}s&&(G[r][n]=s);return s}(n,t)||t;let i,a=[];for(;t;){if(i=U.exec(t),!i){a.push(t);break}{a=a.concat(i.slice(1));const e=a.pop();if(!e)break;t=e}}let u=s.getTimezoneOffset();r&&(u=ne(r,u),s=function(e,t,n){const r=n?-1:1,o=e.getTimezoneOffset(),s=ne(t,o);return function(e,t){return(e=new Date(e.getTime())).setMinutes(e.getMinutes()+t),e}(e,r*(s-o))}(s,r,!0));let l="";return a.forEach(e=>{const t=function(e){if(te[e])return te[e];let t;switch(e){case"G":case"GG":case"GGG":t=J(W.Eras,M.Abbreviated);break;case"GGGG":t=J(W.Eras,M.Wide);break;case"GGGGG":t=J(W.Eras,M.Narrow);break;case"y":t=Q(Z.FullYear,1,0,!1,!0);break;case"yy":t=Q(Z.FullYear,2,0,!0,!0);break;case"yyy":t=Q(Z.FullYear,3,0,!1,!0);break;case"yyyy":t=Q(Z.FullYear,4,0,!1,!0);break;case"M":case"L":t=Q(Z.Month,1,1);break;case"MM":case"LL":t=Q(Z.Month,2,1);break;case"MMM":t=J(W.Months,M.Abbreviated);break;case"MMMM":t=J(W.Months,M.Wide);break;case"MMMMM":t=J(W.Months,M.Narrow);break;case"LLL":t=J(W.Months,M.Abbreviated,x.Standalone);break;case"LLLL":t=J(W.Months,M.Wide,x.Standalone);break;case"LLLLL":t=J(W.Months,M.Narrow,x.Standalone);break;case"w":t=ee(1);break;case"ww":t=ee(2);break;case"W":t=ee(1,!0);break;case"d":t=Q(Z.Date,1);break;case"dd":t=Q(Z.Date,2);break;case"E":case"EE":case"EEE":t=J(W.Days,M.Abbreviated);break;case"EEEE":t=J(W.Days,M.Wide);break;case"EEEEE":t=J(W.Days,M.Narrow);break;case"EEEEEE":t=J(W.Days,M.Short);break;case"a":case"aa":case"aaa":t=J(W.DayPeriods,M.Abbreviated);break;case"aaaa":t=J(W.DayPeriods,M.Wide);break;case"aaaaa":t=J(W.DayPeriods,M.Narrow);break;case"b":case"bb":case"bbb":t=J(W.DayPeriods,M.Abbreviated,x.Standalone,!0);break;case"bbbb":t=J(W.DayPeriods,M.Wide,x.Standalone,!0);break;case"bbbbb":t=J(W.DayPeriods,M.Narrow,x.Standalone,!0);break;case"B":case"BB":case"BBB":t=J(W.DayPeriods,M.Abbreviated,x.Format,!0);break;case"BBBB":t=J(W.DayPeriods,M.Wide,x.Format,!0);break;case"BBBBB":t=J(W.DayPeriods,M.Narrow,x.Format,!0);break;case"h":t=Q(Z.Hours,1,-12);break;case"hh":t=Q(Z.Hours,2,-12);break;case"H":t=Q(Z.Hours,1);break;case"HH":t=Q(Z.Hours,2);break;case"m":t=Q(Z.Minutes,1);break;case"mm":t=Q(Z.Minutes,2);break;case"s":t=Q(Z.Seconds,1);break;case"ss":t=Q(Z.Seconds,2);break;case"S":t=Q(Z.FractionalSeconds,1);break;case"SS":t=Q(Z.FractionalSeconds,2);break;case"SSS":t=Q(Z.FractionalSeconds,3);break;case"Z":case"ZZ":case"ZZZ":t=X(z.Short);break;case"ZZZZZ":t=X(z.Extended);break;case"O":case"OO":case"OOO":case"z":case"zz":case"zzz":t=X(z.ShortGMT);break;case"OOOO":case"ZZZZ":case"zzzz":t=X(z.Long);break;default:return null}return te[e]=t,t}(e);l+=t?t(s,n,u):"''"===e?"'":e.replace(/(^'|'$)/g,"").replace(/''/g,"'")}),l}function K(e,t){return t&&(e=e.replace(/\{([^}]+)}/g,(function(e,n){return null!=t&&n in t?t[n]:e}))),e}function Y(e,t,n="-",r,o){let s="";(e<0||o&&e<=0)&&(o?e=1-e:(e=-e,s=n));let i=String(e);for(;i.length<t;)i="0"+i;return r&&(i=i.substr(i.length-t)),s+i}function Q(e,t,n=0,r=!1,o=!1){return function(s,i){let a=function(e,t){switch(e){case Z.FullYear:return t.getFullYear();case Z.Month:return t.getMonth();case Z.Date:return t.getDate();case Z.Hours:return t.getHours();case Z.Minutes:return t.getMinutes();case Z.Seconds:return t.getSeconds();case Z.FractionalSeconds:return t.getMilliseconds();case Z.Day:return t.getDay();default:throw new Error(`Unknown DateType value "${e}".`)}}(e,s);if((n>0||a>-n)&&(a+=n),e===Z.Hours)0===a&&-12===n&&(a=12);else if(e===Z.FractionalSeconds)return u=t,Y(a,3).substr(0,u);var u;const l=P(i,S.MinusSign);return Y(a,t,l,r,o)}}function J(e,t,n=x.Format,r=!1){return function(s,i){return function(e,t,n,r,s,i){switch(n){case W.Months:return function(e,t,n){const r=Object(o.G)(e),s=R([r[o.F.MonthsFormat],r[o.F.MonthsStandalone]],t);return R(s,n)}(t,s,r)[e.getMonth()];case W.Days:return function(e,t,n){const r=Object(o.G)(e),s=R([r[o.F.DaysFormat],r[o.F.DaysStandalone]],t);return R(s,n)}(t,s,r)[e.getDay()];case W.DayPeriods:const a=e.getHours(),u=e.getMinutes();if(i){const e=function(e){const t=Object(o.G)(e);return B(t),(t[o.F.ExtraData][2]||[]).map(e=>"string"==typeof e?L(e):[L(e[0]),L(e[1])])}(t),n=function(e,t,n){const r=Object(o.G)(e);B(r);const s=R([r[o.F.ExtraData][0],r[o.F.ExtraData][1]],t)||[];return R(s,n)||[]}(t,s,r),i=e.findIndex(e=>{if(Array.isArray(e)){const[t,n]=e,r=a>=t.hours&&u>=t.minutes,o=a<n.hours||a===n.hours&&u<n.minutes;if(t.hours<n.hours){if(r&&o)return!0}else if(r||o)return!0}else if(e.hours===a&&e.minutes===u)return!0;return!1});if(-1!==i)return n[i]}return function(e,t,n){const r=Object(o.G)(e),s=R([r[o.F.DayPeriodsFormat],r[o.F.DayPeriodsStandalone]],t);return R(s,n)}(t,s,r)[a<12?0:1];case W.Eras:return function(e,t){return R(Object(o.G)(e)[o.F.Eras],t)}(t,r)[e.getFullYear()<=0?0:1];default:throw new Error("unexpected translation type "+n)}}(s,i,e,t,n,r)}}function X(e){return function(t,n,r){const o=-1*r,s=P(n,S.MinusSign),i=o>0?Math.floor(o/60):Math.ceil(o/60);switch(e){case z.Short:return(o>=0?"+":"")+Y(i,2,s)+Y(Math.abs(o%60),2,s);case z.ShortGMT:return"GMT"+(o>=0?"+":"")+Y(i,1,s);case z.Long:return"GMT"+(o>=0?"+":"")+Y(i,2,s)+":"+Y(Math.abs(o%60),2,s);case z.Extended:return 0===r?"Z":(o>=0?"+":"")+Y(i,2,s)+":"+Y(Math.abs(o%60),2,s);default:throw new Error(`Unknown zone width "${e}"`)}}}!function(e){e[e.Short=0]="Short",e[e.ShortGMT=1]="ShortGMT",e[e.Long=2]="Long",e[e.Extended=3]="Extended"}(z||(z={})),function(e){e[e.FullYear=0]="FullYear",e[e.Month=1]="Month",e[e.Date=2]="Date",e[e.Hours=3]="Hours",e[e.Minutes=4]="Minutes",e[e.Seconds=5]="Seconds",e[e.FractionalSeconds=6]="FractionalSeconds",e[e.Day=7]="Day"}(Z||(Z={})),function(e){e[e.DayPeriods=0]="DayPeriods",e[e.Days=1]="Days",e[e.Months=2]="Months",e[e.Eras=3]="Eras"}(W||(W={}));function ee(e,t=!1){return function(n,r){let o;if(t){const e=new Date(n.getFullYear(),n.getMonth(),1).getDay()-1,t=n.getDate();o=1+Math.floor((t+e)/7)}else{const e=(s=n,new Date(s.getFullYear(),s.getMonth(),s.getDate()+(4-s.getDay()))),t=function(e){const t=new Date(e,0,1).getDay();return new Date(e,0,1+(t<=4?4:11)-t)}(e.getFullYear()),r=e.getTime()-t.getTime();o=1+Math.round(r/6048e5)}var s;return Y(o,e,P(r,S.MinusSign))}}const te={};function ne(e,t){e=e.replace(/:/g,"");const n=Date.parse("Jan 01, 1970 00:00:00 "+e)/6e4;return isNaN(n)?t:n}function re(e){return e instanceof Date&&!isNaN(e.valueOf())}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const oe=/^(\d+)?\.((\d+)(-(\d+))?)?$/;function se(e,t,n,r,o,s,i=!1){let a="",u=!1;if(isFinite(e)){let l=function(e){let t,n,r,o,s,i=Math.abs(e)+"",a=0;(n=i.indexOf("."))>-1&&(i=i.replace(".",""));(r=i.search(/e/i))>0?(n<0&&(n=r),n+=+i.slice(r+1),i=i.substring(0,r)):n<0&&(n=i.length);for(r=0;"0"===i.charAt(r);r++);if(r===(s=i.length))t=[0],n=1;else{for(s--;"0"===i.charAt(s);)s--;for(n-=r,t=[],o=0;r<=s;r++,o++)t[o]=Number(i.charAt(r))}n>22&&(t=t.splice(0,21),a=n-1,n=1);return{digits:t,exponent:a,integerLen:n}}(e);i&&(l=function(e){if(0===e.digits[0])return e;const t=e.digits.length-e.integerLen;e.exponent?e.exponent+=2:(0===t?e.digits.push(0,0):1===t&&e.digits.push(0),e.integerLen+=2);return e}(l));let c=t.minInt,h=t.minFrac,d=t.maxFrac;if(s){const e=s.match(oe);if(null===e)throw new Error(s+" is not a valid digit info");const t=e[1],n=e[3],r=e[5];null!=t&&(c=ue(t)),null!=n&&(h=ue(n)),null!=r?d=ue(r):null!=n&&h>d&&(d=h)}!function(e,t,n){if(t>n)throw new Error(`The minimum number of digits after fraction (${t}) is higher than the maximum (${n}).`);let r=e.digits,o=r.length-e.integerLen;const s=Math.min(Math.max(t,o),n);let i=s+e.integerLen,a=r[i];if(i>0){r.splice(Math.max(e.integerLen,i));for(let e=i;e<r.length;e++)r[e]=0}else{o=Math.max(0,o),e.integerLen=1,r.length=Math.max(1,i=s+1),r[0]=0;for(let e=1;e<i;e++)r[e]=0}if(a>=5)if(i-1<0){for(let t=0;t>i;t--)r.unshift(0),e.integerLen++;r.unshift(1),e.integerLen++}else r[i-1]++;for(;o<Math.max(0,s);o++)r.push(0);let u=0!==s;const l=t+e.integerLen,c=r.reduceRight((function(e,t,n,r){return t+=e,r[n]=t<10?t:t-10,u&&(0===r[n]&&n>=l?r.pop():u=!1),t>=10?1:0}),0);c&&(r.unshift(c),e.integerLen++)}(l,h,d);let p=l.digits,f=l.integerLen;const g=l.exponent;let y=[];for(u=p.every(e=>!e);f<c;f++)p.unshift(0);for(;f<0;f++)p.unshift(0);f>0?y=p.splice(f,p.length):(y=p,p=[0]);const m=[];for(p.length>=t.lgSize&&m.unshift(p.splice(-t.lgSize,p.length).join(""));p.length>t.gSize;)m.unshift(p.splice(-t.gSize,p.length).join(""));p.length&&m.unshift(p.join("")),a=m.join(P(n,r)),y.length&&(a+=P(n,o)+y.join("")),g&&(a+=P(n,S.Exponential)+"+"+g)}else a=P(n,S.Infinity);return a=e<0&&!u?t.negPre+a+t.negSuf:t.posPre+a+t.posSuf,a}function ie(e,t,n,r,o){const s=ae(N(t,A.Currency),P(t,S.MinusSign));s.minFrac=function(e){let t;const n=E[e];return n&&(t=n[2]),"number"==typeof t?t:2}(r),s.maxFrac=s.minFrac;return se(e,s,t,S.CurrencyGroup,S.CurrencyDecimal,o).replace("¤",n).replace("¤","").trim()}function ae(e,t="-"){const n={minInt:1,minFrac:0,maxFrac:0,posPre:"",posSuf:"",negPre:"",negSuf:"",gSize:0,lgSize:0},r=e.split(";"),o=r[0],s=r[1],i=-1!==o.indexOf(".")?o.split("."):[o.substring(0,o.lastIndexOf("0")+1),o.substring(o.lastIndexOf("0")+1)],a=i[0],u=i[1]||"";n.posPre=a.substr(0,a.indexOf("#"));for(let e=0;e<u.length;e++){const t=u.charAt(e);"0"===t?n.minFrac=n.maxFrac=e+1:"#"===t?n.maxFrac=e+1:n.posSuf+=t}const l=a.split(",");if(n.gSize=l[1]?l[1].length:0,n.lgSize=l[2]||l[1]?(l[2]||l[1]).length:0,s){const e=o.length-n.posPre.length-n.posSuf.length,t=s.indexOf("#");n.negPre=s.substr(0,t).replace(/'/g,""),n.negSuf=s.substr(t+e).replace(/'/g,"")}else n.negPre=t+n.posPre,n.negSuf=n.posSuf;return n}function ue(e){const t=parseInt(e);if(isNaN(t))throw new Error("Invalid integer literal when parsing "+e);return t}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class le{}function ce(e,t,n,r){let o="="+e;if(t.indexOf(o)>-1)return o;if(o=n.getPluralCategory(e,r),t.indexOf(o)>-1)return o;if(t.indexOf("other")>-1)return"other";throw new Error(`No plural message found for value "${e}"`)}class he extends le{constructor(e){super(),this.locale=e}getPluralCategory(e,t){switch(j(t||this.locale)(e)){case F.Zero:return"zero";case F.One:return"one";case F.Two:return"two";case F.Few:return"few";case F.Many:return"many";default:return"other"}}}he.decorators=[{type:o.l}],he.ctorParameters=()=>[{type:String,decorators:[{type:o.k,args:[o.r]}]}]
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */;
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class de{constructor(e,t,n,r){this._iterableDiffers=e,this._keyValueDiffers=t,this._ngEl=n,this._renderer=r,this._iterableDiffer=null,this._keyValueDiffer=null,this._initialClasses=[],this._rawClass=null}set klass(e){this._removeClasses(this._initialClasses),this._initialClasses="string"==typeof e?e.split(/\s+/):[],this._applyClasses(this._initialClasses),this._applyClasses(this._rawClass)}set ngClass(e){this._removeClasses(this._rawClass),this._applyClasses(this._initialClasses),this._iterableDiffer=null,this._keyValueDiffer=null,this._rawClass="string"==typeof e?e.split(/\s+/):e,this._rawClass&&(Object(o.J)(this._rawClass)?this._iterableDiffer=this._iterableDiffers.find(this._rawClass).create():this._keyValueDiffer=this._keyValueDiffers.find(this._rawClass).create())}ngDoCheck(){if(this._iterableDiffer){const e=this._iterableDiffer.diff(this._rawClass);e&&this._applyIterableChanges(e)}else if(this._keyValueDiffer){const e=this._keyValueDiffer.diff(this._rawClass);e&&this._applyKeyValueChanges(e)}}_applyKeyValueChanges(e){e.forEachAddedItem(e=>this._toggleClass(e.key,e.currentValue)),e.forEachChangedItem(e=>this._toggleClass(e.key,e.currentValue)),e.forEachRemovedItem(e=>{e.previousValue&&this._toggleClass(e.key,!1)})}_applyIterableChanges(e){e.forEachAddedItem(e=>{if("string"!=typeof e.item)throw new Error("NgClass can only toggle CSS classes expressed as strings, got "+Object(o.N)(e.item));this._toggleClass(e.item,!0)}),e.forEachRemovedItem(e=>this._toggleClass(e.item,!1))}_applyClasses(e){e&&(Array.isArray(e)||e instanceof Set?e.forEach(e=>this._toggleClass(e,!0)):Object.keys(e).forEach(t=>this._toggleClass(t,!!e[t])))}_removeClasses(e){e&&(Array.isArray(e)||e instanceof Set?e.forEach(e=>this._toggleClass(e,!1)):Object.keys(e).forEach(e=>this._toggleClass(e,!1)))}_toggleClass(e,t){(e=e.trim())&&e.split(/\s+/g).forEach(e=>{t?this._renderer.addClass(this._ngEl.nativeElement,e):this._renderer.removeClass(this._ngEl.nativeElement,e)})}}de.decorators=[{type:o.f,args:[{selector:"[ngClass]"}]}],de.ctorParameters=()=>[{type:o.p},{type:o.q},{type:o.g},{type:o.x}],de.propDecorators={klass:[{type:o.o,args:["class"]}],ngClass:[{type:o.o,args:["ngClass"]}]};
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class pe{constructor(e){this._viewContainerRef=e,this._componentRef=null,this._moduleRef=null}ngOnChanges(e){if(this._viewContainerRef.clear(),this._componentRef=null,this.ngComponentOutlet){const t=this.ngComponentOutletInjector||this._viewContainerRef.parentInjector;if(e.ngComponentOutletNgModuleFactory)if(this._moduleRef&&this._moduleRef.destroy(),this.ngComponentOutletNgModuleFactory){const e=t.get(o.t);this._moduleRef=this.ngComponentOutletNgModuleFactory.create(e.injector)}else this._moduleRef=null;const n=(this._moduleRef?this._moduleRef.componentFactoryResolver:t.get(o.d)).resolveComponentFactory(this.ngComponentOutlet);this._componentRef=this._viewContainerRef.createComponent(n,this._viewContainerRef.length,t,this.ngComponentOutletContent)}}ngOnDestroy(){this._moduleRef&&this._moduleRef.destroy()}}pe.decorators=[{type:o.f,args:[{selector:"[ngComponentOutlet]"}]}],pe.ctorParameters=()=>[{type:o.C}],pe.propDecorators={ngComponentOutlet:[{type:o.o}],ngComponentOutletInjector:[{type:o.o}],ngComponentOutletContent:[{type:o.o}],ngComponentOutletNgModuleFactory:[{type:o.o}]};
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class fe{constructor(e,t,n,r){this.$implicit=e,this.ngForOf=t,this.index=n,this.count=r}get first(){return 0===this.index}get last(){return this.index===this.count-1}get even(){return this.index%2==0}get odd(){return!this.even}}class ge{constructor(e,t,n){this._viewContainer=e,this._template=t,this._differs=n,this._ngForOf=null,this._ngForOfDirty=!0,this._differ=null}set ngForOf(e){this._ngForOf=e,this._ngForOfDirty=!0}set ngForTrackBy(e){Object(o.E)()&&null!=e&&"function"!=typeof e&&console&&console.warn&&console.warn(`trackBy must be a function, but received ${JSON.stringify(e)}. See https://angular.io/api/common/NgForOf#change-propagation for more information.`),this._trackByFn=e}get ngForTrackBy(){return this._trackByFn}set ngForTemplate(e){e&&(this._template=e)}ngDoCheck(){if(this._ngForOfDirty){this._ngForOfDirty=!1;const t=this._ngForOf;if(!this._differ&&t)try{this._differ=this._differs.find(t).create(this.ngForTrackBy)}catch(n){throw new Error(`Cannot find a differ supporting object '${t}' of type '${e=t,e.name||typeof e}'. NgFor only supports binding to Iterables such as Arrays.`)}}var e;
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */if(this._differ){const e=this._differ.diff(this._ngForOf);e&&this._applyChanges(e)}}_applyChanges(e){const t=[];e.forEachOperation((e,n,r)=>{if(null==e.previousIndex){const n=this._viewContainer.createEmbeddedView(this._template,new fe(null,this._ngForOf,-1,-1),null===r?void 0:r),o=new ye(e,n);t.push(o)}else if(null==r)this._viewContainer.remove(null===n?void 0:n);else if(null!==n){const o=this._viewContainer.get(n);this._viewContainer.move(o,r);const s=new ye(e,o);t.push(s)}});for(let e=0;e<t.length;e++)this._perViewChange(t[e].view,t[e].record);for(let e=0,t=this._viewContainer.length;e<t;e++){const n=this._viewContainer.get(e);n.context.index=e,n.context.count=t,n.context.ngForOf=this._ngForOf}e.forEachIdentityChange(e=>{this._viewContainer.get(e.currentIndex).context.$implicit=e.item})}_perViewChange(e,t){e.context.$implicit=t.item}static ngTemplateContextGuard(e,t){return!0}}ge.decorators=[{type:o.f,args:[{selector:"[ngFor][ngForOf]"}]}],ge.ctorParameters=()=>[{type:o.C},{type:o.A},{type:o.p}],ge.propDecorators={ngForOf:[{type:o.o}],ngForTrackBy:[{type:o.o}],ngForTemplate:[{type:o.o}]};class ye{constructor(e,t){this.record=e,this.view=t}}class me{constructor(e,t){this._viewContainer=e,this._context=new _e,this._thenTemplateRef=null,this._elseTemplateRef=null,this._thenViewRef=null,this._elseViewRef=null,this._thenTemplateRef=t}set ngIf(e){this._context.$implicit=this._context.ngIf=e,this._updateView()}set ngIfThen(e){ve("ngIfThen",e),this._thenTemplateRef=e,this._thenViewRef=null,this._updateView()}set ngIfElse(e){ve("ngIfElse",e),this._elseTemplateRef=e,this._elseViewRef=null,this._updateView()}_updateView(){this._context.$implicit?this._thenViewRef||(this._viewContainer.clear(),this._elseViewRef=null,this._thenTemplateRef&&(this._thenViewRef=this._viewContainer.createEmbeddedView(this._thenTemplateRef,this._context))):this._elseViewRef||(this._viewContainer.clear(),this._thenViewRef=null,this._elseTemplateRef&&(this._elseViewRef=this._viewContainer.createEmbeddedView(this._elseTemplateRef,this._context)))}static ngTemplateContextGuard(e,t){return!0}}me.decorators=[{type:o.f,args:[{selector:"[ngIf]"}]}],me.ctorParameters=()=>[{type:o.C},{type:o.A}],me.propDecorators={ngIf:[{type:o.o}],ngIfThen:[{type:o.o}],ngIfElse:[{type:o.o}]};class _e{constructor(){this.$implicit=null,this.ngIf=null}}function ve(e,t){if(!!(t&&!t.createEmbeddedView))throw new Error(`${e} must be a TemplateRef, but received '${Object(o.N)(t)}'.`)}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class De{constructor(e,t){this._viewContainerRef=e,this._templateRef=t,this._created=!1}create(){this._created=!0,this._viewContainerRef.createEmbeddedView(this._templateRef)}destroy(){this._created=!1,this._viewContainerRef.clear()}enforceState(e){e&&!this._created?this.create():!e&&this._created&&this.destroy()}}class be{constructor(){this._defaultUsed=!1,this._caseCount=0,this._lastCaseCheckIndex=0,this._lastCasesMatched=!1}set ngSwitch(e){this._ngSwitch=e,0===this._caseCount&&this._updateDefaultCases(!0)}_addCase(){return this._caseCount++}_addDefault(e){this._defaultViews||(this._defaultViews=[]),this._defaultViews.push(e)}_matchCase(e){const t=e==this._ngSwitch;return this._lastCasesMatched=this._lastCasesMatched||t,this._lastCaseCheckIndex++,this._lastCaseCheckIndex===this._caseCount&&(this._updateDefaultCases(!this._lastCasesMatched),this._lastCaseCheckIndex=0,this._lastCasesMatched=!1),t}_updateDefaultCases(e){if(this._defaultViews&&e!==this._defaultUsed){this._defaultUsed=e;for(let t=0;t<this._defaultViews.length;t++){this._defaultViews[t].enforceState(e)}}}}be.decorators=[{type:o.f,args:[{selector:"[ngSwitch]"}]}],be.propDecorators={ngSwitch:[{type:o.o}]};class Ce{constructor(e,t,n){this.ngSwitch=n,n._addCase(),this._view=new De(e,t)}ngDoCheck(){this._view.enforceState(this.ngSwitch._matchCase(this.ngSwitchCase))}}Ce.decorators=[{type:o.f,args:[{selector:"[ngSwitchCase]"}]}],Ce.ctorParameters=()=>[{type:o.C},{type:o.A},{type:be,decorators:[{type:o.j}]}],Ce.propDecorators={ngSwitchCase:[{type:o.o}]};class we{constructor(e,t,n){n._addDefault(new De(e,t))}}we.decorators=[{type:o.f,args:[{selector:"[ngSwitchDefault]"}]}],we.ctorParameters=()=>[{type:o.C},{type:o.A},{type:be,decorators:[{type:o.j}]}]
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */;class Ee{constructor(e){this._localization=e,this._caseViews={}}set ngPlural(e){this._switchValue=e,this._updateView()}addCase(e,t){this._caseViews[e]=t}_updateView(){this._clearViews();const e=Object.keys(this._caseViews),t=ce(this._switchValue,e,this._localization);this._activateView(this._caseViews[t])}_clearViews(){this._activeView&&this._activeView.destroy()}_activateView(e){e&&(this._activeView=e,this._activeView.create())}}Ee.decorators=[{type:o.f,args:[{selector:"[ngPlural]"}]}],Ee.ctorParameters=()=>[{type:le}],Ee.propDecorators={ngPlural:[{type:o.o}]};class Ae{constructor(e,t,n,r){this.value=e;const o=!isNaN(Number(e));r.addCase(o?"="+e:e,new De(n,t))}}Ae.decorators=[{type:o.f,args:[{selector:"[ngPluralCase]"}]}],Ae.ctorParameters=()=>[{type:String,decorators:[{type:o.a,args:["ngPluralCase"]}]},{type:o.A},{type:o.C},{type:Ee,decorators:[{type:o.j}]}]
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */;class Fe{constructor(e,t,n){this._ngEl=e,this._differs=t,this._renderer=n,this._ngStyle=null,this._differ=null}set ngStyle(e){this._ngStyle=e,!this._differ&&e&&(this._differ=this._differs.find(e).create())}ngDoCheck(){if(this._differ){const e=this._differ.diff(this._ngStyle);e&&this._applyChanges(e)}}_setStyle(e,t){const[n,r]=e.split(".");null!=(t=null!=t&&r?`${t}${r}`:t)?this._renderer.setStyle(this._ngEl.nativeElement,n,t):this._renderer.removeStyle(this._ngEl.nativeElement,n)}_applyChanges(e){e.forEachRemovedItem(e=>this._setStyle(e.key,null)),e.forEachAddedItem(e=>this._setStyle(e.key,e.currentValue)),e.forEachChangedItem(e=>this._setStyle(e.key,e.currentValue))}}Fe.decorators=[{type:o.f,args:[{selector:"[ngStyle]"}]}],Fe.ctorParameters=()=>[{type:o.g},{type:o.q},{type:o.x}],Fe.propDecorators={ngStyle:[{type:o.o,args:["ngStyle"]}]};
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class xe{constructor(e){this._viewContainerRef=e,this._viewRef=null,this.ngTemplateOutletContext=null,this.ngTemplateOutlet=null}ngOnChanges(e){if(this._shouldRecreateView(e)){const e=this._viewContainerRef;this._viewRef&&e.remove(e.indexOf(this._viewRef)),this._viewRef=this.ngTemplateOutlet?e.createEmbeddedView(this.ngTemplateOutlet,this.ngTemplateOutletContext):null}else this._viewRef&&this.ngTemplateOutletContext&&this._updateExistingContext(this.ngTemplateOutletContext)}_shouldRecreateView(e){const t=e.ngTemplateOutletContext;return!!e.ngTemplateOutlet||t&&this._hasContextShapeChanged(t)}_hasContextShapeChanged(e){const t=Object.keys(e.previousValue||{}),n=Object.keys(e.currentValue||{});if(t.length===n.length){for(let e of n)if(-1===t.indexOf(e))return!0;return!1}return!0}_updateExistingContext(e){for(let t of Object.keys(e))this._viewRef.context[t]=this.ngTemplateOutletContext[t]}}xe.decorators=[{type:o.f,args:[{selector:"[ngTemplateOutlet]"}]}],xe.ctorParameters=()=>[{type:o.C}],xe.propDecorators={ngTemplateOutletContext:[{type:o.o}],ngTemplateOutlet:[{type:o.o}]};
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function Me(e,t){return Error(`InvalidPipeArgument: '${t}' for pipe '${Object(o.N)(e)}'`)}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const ke=new class{createSubscription(e,t){return e.then(t,e=>{throw e})}dispose(e){}onDestroy(e){}},Se=new class{createSubscription(e,t){return e.subscribe({next:t,error:e=>{throw e}})}dispose(e){e.unsubscribe()}onDestroy(e){e.unsubscribe()}};class Oe{constructor(e){this._ref=e,this._latestValue=null,this._subscription=null,this._obj=null,this._strategy=null}ngOnDestroy(){this._subscription&&this._dispose()}transform(e){return this._obj?e!==this._obj?(this._dispose(),this.transform(e)):this._latestValue:(e&&this._subscribe(e),this._latestValue)}_subscribe(e){this._obj=e,this._strategy=this._selectStrategy(e),this._subscription=this._strategy.createSubscription(e,t=>this._updateLatestValue(e,t))}_selectStrategy(e){if(Object(o.L)(e))return ke;if(Object(o.K)(e))return Se;throw Me(Oe,e)}_dispose(){this._strategy.dispose(this._subscription),this._latestValue=null,this._subscription=null,this._obj=null}_updateLatestValue(e,t){e===this._obj&&(this._latestValue=t,this._ref.markForCheck())}}Oe.decorators=[{type:o.w,args:[{name:"async",pure:!1}]}],Oe.ctorParameters=()=>[{type:o.b}]
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */;class Ve{transform(e){if(!e)return e;if("string"!=typeof e)throw Me(Ve,e);return e.toLowerCase()}}Ve.decorators=[{type:o.w,args:[{name:"lowercase"}]}];const Te=/(?:[A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312E\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEA\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF40\uDF42-\uDF49\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE83\uDE86-\uDE89\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46]|\uD808[\uDC00-\uDF99]|\uD809[\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F\uDFE0\uDFE1]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D])\S*/g;class Ie{transform(e){if(!e)return e;if("string"!=typeof e)throw Me(Ie,e);return e.replace(Te,e=>e[0].toUpperCase()+e.substr(1).toLowerCase())}}Ie.decorators=[{type:o.w,args:[{name:"titlecase"}]}];class Pe{transform(e){if(!e)return e;if("string"!=typeof e)throw Me(Pe,e);return e.toUpperCase()}}Pe.decorators=[{type:o.w,args:[{name:"uppercase"}]}];
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class Ne{constructor(e){this.locale=e}transform(e,t="mediumDate",n,r){if(null==e||""===e||e!=e)return null;try{return q(e,t,r||this.locale,n)}catch(e){throw Me(Ne,e.message)}}}Ne.decorators=[{type:o.w,args:[{name:"date",pure:!0}]}],Ne.ctorParameters=()=>[{type:String,decorators:[{type:o.k,args:[o.r]}]}]
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */;const je=/#/g;class Be{constructor(e){this._localization=e}transform(e,t,n){if(null==e)return"";if("object"!=typeof t||null===t)throw Me(Be,t);return t[ce(e,Object.keys(t),this._localization,n)].replace(je,e.toString())}}Be.decorators=[{type:o.w,args:[{name:"i18nPlural",pure:!0}]}],Be.ctorParameters=()=>[{type:le}]
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */;class Re{transform(e,t){if(null==e)return"";if("object"!=typeof t||"string"!=typeof e)throw Me(Re,t);return t.hasOwnProperty(e)?t[e]:t.hasOwnProperty("other")?t.other:""}}Re.decorators=[{type:o.w,args:[{name:"i18nSelect",pure:!0}]}];
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class Le{transform(e){return JSON.stringify(e,null,2)}}Le.decorators=[{type:o.w,args:[{name:"json",pure:!1}]}];class He{constructor(e){this.differs=e,this.keyValues=[]}transform(e,t=$e){if(!e||!(e instanceof Map)&&"object"!=typeof e)return null;this.differ||(this.differ=this.differs.find(e).create());const n=this.differ.diff(e);return n&&(this.keyValues=[],n.forEachItem(e=>{
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var t,n;this.keyValues.push((t=e.key,n=e.currentValue,{key:t,value:n}))}),this.keyValues.sort(t)),this.keyValues}}function $e(e,t){const n=e.key,r=t.key;if(n===r)return 0;if(void 0===n)return 1;if(void 0===r)return-1;if(null===n)return 1;if(null===r)return-1;if("string"==typeof n&&"string"==typeof r)return n<r?-1:1;if("number"==typeof n&&"number"==typeof r)return n-r;if("boolean"==typeof n&&"boolean"==typeof r)return n<r?-1:1;const o=String(n),s=String(r);return o==s?0:o<s?-1:1}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */He.decorators=[{type:o.w,args:[{name:"keyvalue",pure:!1}]}],He.ctorParameters=()=>[{type:o.q}];class Ge{constructor(e){this._locale=e}transform(e,t,n){if(Ze(e))return null;n=n||this._locale;try{return function(e,t,n){return se(e,ae(N(t,A.Decimal),P(t,S.MinusSign)),t,S.Group,S.Decimal,n)}(We(e),n,t)}catch(e){throw Me(Ge,e.message)}}}Ge.decorators=[{type:o.w,args:[{name:"number"}]}],Ge.ctorParameters=()=>[{type:String,decorators:[{type:o.k,args:[o.r]}]}];class Ue{constructor(e){this._locale=e}transform(e,t,n){if(Ze(e))return null;n=n||this._locale;try{return function(e,t,n){return se(e,ae(N(t,A.Percent),P(t,S.MinusSign)),t,S.Group,S.Decimal,n,!0).replace(new RegExp("%","g"),P(t,S.PercentSign))}(We(e),n,t)}catch(e){throw Me(Ue,e.message)}}}Ue.decorators=[{type:o.w,args:[{name:"percent"}]}],Ue.ctorParameters=()=>[{type:String,decorators:[{type:o.k,args:[o.r]}]}];class ze{constructor(e,t="USD"){this._locale=e,this._defaultCurrencyCode=t}transform(e,t,n="symbol",r,o){if(Ze(e))return null;o=o||this._locale,"boolean"==typeof n&&(console&&console.warn&&console.warn('Warning: the currency pipe has been changed in Angular v5. The symbolDisplay option (third parameter) is now a string instead of a boolean. The accepted values are "code", "symbol" or "symbol-narrow".'),n=n?"symbol":"code");let s=t||this._defaultCurrencyCode;"code"!==n&&(s="symbol"===n||"symbol-narrow"===n?H(s,"symbol"===n?"wide":"narrow",o):n);try{return ie(We(e),o,s,t,r)}catch(e){throw Me(ze,e.message)}}}function Ze(e){return null==e||""===e||e!=e}function We(e){if("string"==typeof e&&!isNaN(Number(e)-parseFloat(e)))return Number(e);if("number"!=typeof e)throw new Error(e+" is not a number");return e}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */ze.decorators=[{type:o.w,args:[{name:"currency"}]}],ze.ctorParameters=()=>[{type:String,decorators:[{type:o.k,args:[o.r]}]},{type:String,decorators:[{type:o.k,args:[o.e]}]}];class qe{transform(e,t,n){if(null==e)return e;if(!this.supports(e))throw Me(qe,e);return e.slice(t,n)}supports(e){return"string"==typeof e||Array.isArray(e)}}qe.decorators=[{type:o.w,args:[{name:"slice",pure:!1}]}];o.s;
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
new o.B("10.2.3");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class Ke{}Ke.ɵprov=Object(o.O)({token:Ke,providedIn:"root",factory:()=>new Ye(Object(o.P)(a),window,Object(o.P)(o.h))});class Ye{constructor(e,t,n){this.document=e,this.window=t,this.errorHandler=n,this.offset=()=>[0,0]}setOffset(e){Array.isArray(e)?this.offset=()=>e:this.offset=e}getScrollPosition(){return this.supportsScrolling()?[this.window.scrollX,this.window.scrollY]:[0,0]}scrollToPosition(e){this.supportsScrolling()&&this.window.scrollTo(e[0],e[1])}scrollToAnchor(e){if(this.supportsScrolling()){const t=this.document.getElementById(e)||this.document.getElementsByName(e)[0];t&&this.scrollToElement(t)}}setHistoryScrollRestoration(e){if(this.supportScrollRestoration()){const t=this.window.history;t&&t.scrollRestoration&&(t.scrollRestoration=e)}}scrollToElement(e){const t=e.getBoundingClientRect(),n=t.left+this.window.pageXOffset,r=t.top+this.window.pageYOffset,o=this.offset();this.window.scrollTo(n-o[0],r-o[1])}supportScrollRestoration(){try{if(!this.window||!this.window.scrollTo)return!1;const e=Qe(this.window.history)||Qe(Object.getPrototypeOf(this.window.history));return!(!e||!e.writable&&!e.set)}catch(e){return!1}}supportsScrolling(){try{return!!this.window.scrollTo}catch(e){return!1}}}function Qe(e){return Object.getOwnPropertyDescriptor(e,"scrollRestoration")}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var Je=n(2),Xe=n(20),et=n(21),tt=n(13),nt=n(22);function rt(e,t){return new Je.a((function(n){var r=e.length;if(0!==r)for(var o=new Array(r),s=0,i=0,a=function(a){var u=Object(nt.a)(e[a]),l=!1;n.add(u.subscribe({next:function(e){l||(l=!0,i++),o[a]=e},error:function(e){return n.error(e)},complete:function(){++s!==r&&l||(i===r&&n.next(t?t.reduce((function(e,t,n){return e[t]=o[n],e}),{}):o),n.complete())}}))},u=0;u<r;u++)a(u);else n.complete()}))}
/**
 * @license Angular v10.2.3
 * (c) 2010-2020 Google LLC. https://angular.io/
 * License: MIT
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const ot=new o.m("NgValueAccessor"),st={provide:ot,useExisting:Object(o.D)(()=>it),multi:!0};
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class it{constructor(e,t){this._renderer=e,this._elementRef=t,this.onChange=e=>{},this.onTouched=()=>{}}writeValue(e){this._renderer.setProperty(this._elementRef.nativeElement,"checked",e)}registerOnChange(e){this.onChange=e}registerOnTouched(e){this.onTouched=e}setDisabledState(e){this._renderer.setProperty(this._elementRef.nativeElement,"disabled",e)}}it.decorators=[{type:o.f,args:[{selector:"input[type=checkbox][formControlName],input[type=checkbox][formControl],input[type=checkbox][ngModel]",host:{"(change)":"onChange($event.target.checked)","(blur)":"onTouched()"},providers:[st]}]}],it.ctorParameters=()=>[{type:o.x},{type:o.g}]
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */;const at={provide:ot,useExisting:Object(o.D)(()=>lt),multi:!0};const ut=new o.m("CompositionEventMode");class lt{constructor(e,t,n){this._renderer=e,this._elementRef=t,this._compositionMode=n,this.onChange=e=>{},this.onTouched=()=>{},this._composing=!1,null==this._compositionMode&&(this._compositionMode=!function(){const e=i()?i().getUserAgent():"";return/android (\d+)/.test(e.toLowerCase())}())}writeValue(e){const t=null==e?"":e;this._renderer.setProperty(this._elementRef.nativeElement,"value",t)}registerOnChange(e){this.onChange=e}registerOnTouched(e){this.onTouched=e}setDisabledState(e){this._renderer.setProperty(this._elementRef.nativeElement,"disabled",e)}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}}lt.decorators=[{type:o.f,args:[{selector:"input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]",host:{"(input)":"$any(this)._handleInput($event.target.value)","(blur)":"onTouched()","(compositionstart)":"$any(this)._compositionStart()","(compositionend)":"$any(this)._compositionEnd($event.target.value)"},providers:[at]}]}],lt.ctorParameters=()=>[{type:o.x},{type:o.g},{type:Boolean,decorators:[{type:o.u},{type:o.k,args:[ut]}]}]
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */;class ct{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}reset(e){this.control&&this.control.reset(e)}hasError(e,t){return!!this.control&&this.control.hasError(e,t)}getError(e,t){return this.control?this.control.getError(e,t):null}}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class ht extends ct{get formDirective(){return null}get path(){return null}}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function dt(){if("undefined"==typeof ngDevMode||ngDevMode)throw new Error("unimplemented")}class pt extends ct{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null,this._rawValidators=[],this._rawAsyncValidators=[]}get validator(){return dt()}get asyncValidator(){return dt()}}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class ft{constructor(e){this._cd=e}get ngClassUntouched(){return!!this._cd.control&&this._cd.control.untouched}get ngClassTouched(){return!!this._cd.control&&this._cd.control.touched}get ngClassPristine(){return!!this._cd.control&&this._cd.control.pristine}get ngClassDirty(){return!!this._cd.control&&this._cd.control.dirty}get ngClassValid(){return!!this._cd.control&&this._cd.control.valid}get ngClassInvalid(){return!!this._cd.control&&this._cd.control.invalid}get ngClassPending(){return!!this._cd.control&&this._cd.control.pending}}const gt={"[class.ng-untouched]":"ngClassUntouched","[class.ng-touched]":"ngClassTouched","[class.ng-pristine]":"ngClassPristine","[class.ng-dirty]":"ngClassDirty","[class.ng-valid]":"ngClassValid","[class.ng-invalid]":"ngClassInvalid","[class.ng-pending]":"ngClassPending"};class yt extends ft{constructor(e){super(e)}}yt.decorators=[{type:o.f,args:[{selector:"[formControlName],[ngModel],[formControl]",host:gt}]}],yt.ctorParameters=()=>[{type:pt,decorators:[{type:o.y}]}];class mt extends ft{constructor(e){super(e)}}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function _t(e){return null==e||0===e.length}function vt(e){return null!=e&&"number"==typeof e.length}mt.decorators=[{type:o.f,args:[{selector:"[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]",host:gt}]}],mt.ctorParameters=()=>[{type:ht,decorators:[{type:o.y}]}];const Dt=new o.m("NgValidators"),bt=new o.m("NgAsyncValidators"),Ct=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;class wt{static min(e){return t=>{if(_t(t.value)||_t(e))return null;const n=parseFloat(t.value);return!isNaN(n)&&n<e?{min:{min:e,actual:t.value}}:null}}static max(e){return t=>{if(_t(t.value)||_t(e))return null;const n=parseFloat(t.value);return!isNaN(n)&&n>e?{max:{max:e,actual:t.value}}:null}}static required(e){return _t(e.value)?{required:!0}:null}static requiredTrue(e){return!0===e.value?null:{required:!0}}static email(e){return _t(e.value)||Ct.test(e.value)?null:{email:!0}}static minLength(e){return t=>_t(t.value)||!vt(t.value)?null:t.value.length<e?{minlength:{requiredLength:e,actualLength:t.value.length}}:null}static maxLength(e){return t=>vt(t.value)&&t.value.length>e?{maxlength:{requiredLength:e,actualLength:t.value.length}}:null}static pattern(e){if(!e)return wt.nullValidator;let t,n;return"string"==typeof e?(n="","^"!==e.charAt(0)&&(n+="^"),n+=e,"$"!==e.charAt(e.length-1)&&(n+="$"),t=new RegExp(n)):(n=e.toString(),t=e),e=>{if(_t(e.value))return null;const r=e.value;return t.test(r)?null:{pattern:{requiredPattern:n,actualValue:r}}}}static nullValidator(e){return null}static compose(e){if(!e)return null;const t=e.filter(Et);return 0==t.length?null:function(e){return Ft(xt(e,t))}}static composeAsync(e){if(!e)return null;const t=e.filter(Et);return 0==t.length?null:function(e){return function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];if(1===e.length){var n=e[0];if(Object(Xe.a)(n))return rt(n,null);if(Object(tt.a)(n)&&Object.getPrototypeOf(n)===Object.prototype){var r=Object.keys(n);return rt(r.map((function(e){return n[e]})),r)}}if("function"==typeof e[e.length-1]){var o=e.pop();return rt(e=1===e.length&&Object(Xe.a)(e[0])?e[0]:e,null).pipe(Object(et.a)((function(e){return o.apply(void 0,e)})))}return rt(e,null)}(xt(e,t).map(At)).pipe(Object(et.a)(Ft))}}}function Et(e){return null!=e}function At(e){const t=Object(o.L)(e)?Object(nt.a)(e):e;if(!Object(o.K)(t)&&("undefined"==typeof ngDevMode||ngDevMode))throw new Error("Expected validator to return Promise or Observable.");return t}function Ft(e){let t={};return e.forEach(e=>{t=null!=e?Object.assign(Object.assign({},t),e):t}),0===Object.keys(t).length?null:t}function xt(e,t){return t.map(t=>t(e))}function Mt(e){return e.map(e=>function(e){return!e.validate}(e)?e:t=>e.validate(t))}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const kt={provide:ot,useExisting:Object(o.D)(()=>St),multi:!0};class St{constructor(e,t){this._renderer=e,this._elementRef=t,this.onChange=e=>{},this.onTouched=()=>{}}writeValue(e){const t=null==e?"":e;this._renderer.setProperty(this._elementRef.nativeElement,"value",t)}registerOnChange(e){this.onChange=t=>{e(""==t?null:parseFloat(t))}}registerOnTouched(e){this.onTouched=e}setDisabledState(e){this._renderer.setProperty(this._elementRef.nativeElement,"disabled",e)}}St.decorators=[{type:o.f,args:[{selector:"input[type=number][formControlName],input[type=number][formControl],input[type=number][ngModel]",host:{"(input)":"onChange($event.target.value)","(blur)":"onTouched()"},providers:[kt]}]}],St.ctorParameters=()=>[{type:o.x},{type:o.g}]
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */;const Ot={provide:ot,useExisting:Object(o.D)(()=>Tt),multi:!0};class Vt{constructor(){this._accessors=[]}add(e,t){this._accessors.push([e,t])}remove(e){for(let t=this._accessors.length-1;t>=0;--t)if(this._accessors[t][1]===e)return void this._accessors.splice(t,1)}select(e){this._accessors.forEach(t=>{this._isSameGroup(t,e)&&t[1]!==e&&t[1].fireUncheck(e.value)})}_isSameGroup(e,t){return!!e[0].control&&(e[0]._parent===t._control._parent&&e[1].name===t.name)}}Vt.decorators=[{type:o.l}];class Tt{constructor(e,t,n,r){this._renderer=e,this._elementRef=t,this._registry=n,this._injector=r,this.onChange=()=>{},this.onTouched=()=>{}}ngOnInit(){this._control=this._injector.get(pt),this._checkName(),this._registry.add(this._control,this)}ngOnDestroy(){this._registry.remove(this)}writeValue(e){this._state=e===this.value,this._renderer.setProperty(this._elementRef.nativeElement,"checked",this._state)}registerOnChange(e){this._fn=e,this.onChange=()=>{e(this.value),this._registry.select(this)}}fireUncheck(e){this.writeValue(e)}registerOnTouched(e){this.onTouched=e}setDisabledState(e){this._renderer.setProperty(this._elementRef.nativeElement,"disabled",e)}_checkName(){this.name&&this.formControlName&&this.name!==this.formControlName&&("undefined"==typeof ngDevMode||ngDevMode)&&function(){throw new Error('\n      If you define both a name and a formControlName attribute on your radio button, their values\n      must match. Ex: <input type="radio" formControlName="food" name="food">\n    ')}(),!this.name&&this.formControlName&&(this.name=this.formControlName)}}Tt.decorators=[{type:o.f,args:[{selector:"input[type=radio][formControlName],input[type=radio][formControl],input[type=radio][ngModel]",host:{"(change)":"onChange()","(blur)":"onTouched()"},providers:[Ot]}]}],Tt.ctorParameters=()=>[{type:o.x},{type:o.g},{type:Vt},{type:o.n}],Tt.propDecorators={name:[{type:o.o}],formControlName:[{type:o.o}],value:[{type:o.o}]};
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const It={provide:ot,useExisting:Object(o.D)(()=>Pt),multi:!0};class Pt{constructor(e,t){this._renderer=e,this._elementRef=t,this.onChange=e=>{},this.onTouched=()=>{}}writeValue(e){this._renderer.setProperty(this._elementRef.nativeElement,"value",parseFloat(e))}registerOnChange(e){this.onChange=t=>{e(""==t?null:parseFloat(t))}}registerOnTouched(e){this.onTouched=e}setDisabledState(e){this._renderer.setProperty(this._elementRef.nativeElement,"disabled",e)}}Pt.decorators=[{type:o.f,args:[{selector:"input[type=range][formControlName],input[type=range][formControl],input[type=range][ngModel]",host:{"(change)":"onChange($event.target.value)","(input)":"onChange($event.target.value)","(blur)":"onTouched()"},providers:[It]}]}],Pt.ctorParameters=()=>[{type:o.x},{type:o.g}]
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */;const Nt='\n    <div [formGroup]="myGroup">\n      <input formControlName="firstName">\n    </div>\n\n    In your class:\n\n    this.myGroup = new FormGroup({\n       firstName: new FormControl()\n    });',jt='\n    <div [formGroup]="myGroup">\n       <div formGroupName="person">\n          <input formControlName="firstName">\n       </div>\n    </div>\n\n    In your class:\n\n    this.myGroup = new FormGroup({\n       person: new FormGroup({ firstName: new FormControl() })\n    });',Bt='\n    <div [formGroup]="myGroup">\n      <div formArrayName="cities">\n        <div *ngFor="let city of cityArray.controls; index as i">\n          <input [formControlName]="i">\n        </div>\n      </div>\n    </div>\n\n    In your class:\n\n    this.cityArray = new FormArray([new FormControl(\'SF\')]);\n    this.myGroup = new FormGroup({\n      cities: this.cityArray\n    });',Rt='\n    <form>\n       <div ngModelGroup="person">\n          <input [(ngModel)]="person.name" name="firstName">\n       </div>\n    </form>',Lt='\n    <div [formGroup]="myGroup">\n       <input formControlName="firstName">\n       <input [(ngModel)]="showMoreControls" [ngModelOptions]="{standalone: true}">\n    </div>\n  ';
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class Ht{static controlParentException(){throw new Error("formControlName must be used with a parent formGroup directive.  You'll want to add a formGroup\n       directive and pass it an existing FormGroup instance (you can create one in your class).\n\n      Example:\n\n      "+Nt)}static ngModelGroupException(){throw new Error(`formControlName cannot be used with an ngModelGroup parent. It is only compatible with parents\n       that also have a "form" prefix: formGroupName, formArrayName, or formGroup.\n\n       Option 1:  Update the parent to be formGroupName (reactive form strategy)\n\n        ${jt}\n\n        Option 2: Use ngModel instead of formControlName (template-driven strategy)\n\n        ${Rt}`)}static missingFormException(){throw new Error("formGroup expects a FormGroup instance. Please pass one in.\n\n       Example:\n\n       "+Nt)}static groupParentException(){throw new Error("formGroupName must be used with a parent formGroup directive.  You'll want to add a formGroup\n      directive and pass it an existing FormGroup instance (you can create one in your class).\n\n      Example:\n\n      "+jt)}static arrayParentException(){throw new Error("formArrayName must be used with a parent formGroup directive.  You'll want to add a formGroup\n       directive and pass it an existing FormGroup instance (you can create one in your class).\n\n        Example:\n\n        "+Bt)}static disabledAttrWarning(){console.warn("\n      It looks like you're using the disabled attribute with a reactive form directive. If you set disabled to true\n      when you set up this control in your component class, the disabled attribute will actually be set in the DOM for\n      you. We recommend using this approach to avoid 'changed after checked' errors.\n\n      Example:\n      form = new FormGroup({\n        first: new FormControl({value: 'Nancy', disabled: true}, Validators.required),\n        last: new FormControl('Drew', Validators.required)\n      });\n    ")}static ngModelWarning(e){console.warn(`\n    It looks like you're using ngModel on the same form field as ${e}.\n    Support for using the ngModel input property and ngModelChange event with\n    reactive form directives has been deprecated in Angular v6 and will be removed\n    in a future version of Angular.\n\n    For more information on this, see our API docs here:\n    https://angular.io/api/forms/${"formControl"===e?"FormControlDirective":"FormControlName"}#use-with-ngmodel\n    `)}}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const $t={provide:ot,useExisting:Object(o.D)(()=>Ut),multi:!0};function Gt(e,t){return null==e?""+t:(t&&"object"==typeof t&&(t="Object"),`${e}: ${t}`.slice(0,50))}class Ut{constructor(e,t){this._renderer=e,this._elementRef=t,this._optionMap=new Map,this._idCounter=0,this.onChange=e=>{},this.onTouched=()=>{},this._compareWith=Object.is}set compareWith(e){if("function"!=typeof e&&("undefined"==typeof ngDevMode||ngDevMode))throw new Error("compareWith must be a function, but received "+JSON.stringify(e));this._compareWith=e}writeValue(e){this.value=e;const t=this._getOptionId(e);null==t&&this._renderer.setProperty(this._elementRef.nativeElement,"selectedIndex",-1);const n=Gt(t,e);this._renderer.setProperty(this._elementRef.nativeElement,"value",n)}registerOnChange(e){this.onChange=t=>{this.value=this._getOptionValue(t),e(this.value)}}registerOnTouched(e){this.onTouched=e}setDisabledState(e){this._renderer.setProperty(this._elementRef.nativeElement,"disabled",e)}_registerOption(){return(this._idCounter++).toString()}_getOptionId(e){for(const t of Array.from(this._optionMap.keys()))if(this._compareWith(this._optionMap.get(t),e))return t;return null}_getOptionValue(e){const t=function(e){return e.split(":")[0]}(e);return this._optionMap.has(t)?this._optionMap.get(t):e}}Ut.decorators=[{type:o.f,args:[{selector:"select:not([multiple])[formControlName],select:not([multiple])[formControl],select:not([multiple])[ngModel]",host:{"(change)":"onChange($event.target.value)","(blur)":"onTouched()"},providers:[$t]}]}],Ut.ctorParameters=()=>[{type:o.x},{type:o.g}],Ut.propDecorators={compareWith:[{type:o.o}]};class zt{constructor(e,t,n){this._element=e,this._renderer=t,this._select=n,this._select&&(this.id=this._select._registerOption())}set ngValue(e){null!=this._select&&(this._select._optionMap.set(this.id,e),this._setElementValue(Gt(this.id,e)),this._select.writeValue(this._select.value))}set value(e){this._setElementValue(e),this._select&&this._select.writeValue(this._select.value)}_setElementValue(e){this._renderer.setProperty(this._element.nativeElement,"value",e)}ngOnDestroy(){this._select&&(this._select._optionMap.delete(this.id),this._select.writeValue(this._select.value))}}zt.decorators=[{type:o.f,args:[{selector:"option"}]}],zt.ctorParameters=()=>[{type:o.g},{type:o.x},{type:Ut,decorators:[{type:o.u},{type:o.j}]}],zt.propDecorators={ngValue:[{type:o.o,args:["ngValue"]}],value:[{type:o.o,args:["value"]}]};
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const Zt={provide:ot,useExisting:Object(o.D)(()=>qt),multi:!0};function Wt(e,t){return null==e?""+t:("string"==typeof t&&(t=`'${t}'`),t&&"object"==typeof t&&(t="Object"),`${e}: ${t}`.slice(0,50))}class qt{constructor(e,t){this._renderer=e,this._elementRef=t,this._optionMap=new Map,this._idCounter=0,this.onChange=e=>{},this.onTouched=()=>{},this._compareWith=Object.is}set compareWith(e){if("function"!=typeof e&&("undefined"==typeof ngDevMode||ngDevMode))throw new Error("compareWith must be a function, but received "+JSON.stringify(e));this._compareWith=e}writeValue(e){let t;if(this.value=e,Array.isArray(e)){const n=e.map(e=>this._getOptionId(e));t=(e,t)=>{e._setSelected(n.indexOf(t.toString())>-1)}}else t=(e,t)=>{e._setSelected(!1)};this._optionMap.forEach(t)}registerOnChange(e){this.onChange=t=>{const n=[];if(void 0!==t.selectedOptions){const e=t.selectedOptions;for(let t=0;t<e.length;t++){const r=e.item(t),o=this._getOptionValue(r.value);n.push(o)}}else{const e=t.options;for(let t=0;t<e.length;t++){const r=e.item(t);if(r.selected){const e=this._getOptionValue(r.value);n.push(e)}}}this.value=n,e(n)}}registerOnTouched(e){this.onTouched=e}setDisabledState(e){this._renderer.setProperty(this._elementRef.nativeElement,"disabled",e)}_registerOption(e){const t=(this._idCounter++).toString();return this._optionMap.set(t,e),t}_getOptionId(e){for(const t of Array.from(this._optionMap.keys()))if(this._compareWith(this._optionMap.get(t)._value,e))return t;return null}_getOptionValue(e){const t=function(e){return e.split(":")[0]}(e);return this._optionMap.has(t)?this._optionMap.get(t)._value:e}}qt.decorators=[{type:o.f,args:[{selector:"select[multiple][formControlName],select[multiple][formControl],select[multiple][ngModel]",host:{"(change)":"onChange($event.target)","(blur)":"onTouched()"},providers:[Zt]}]}],qt.ctorParameters=()=>[{type:o.x},{type:o.g}],qt.propDecorators={compareWith:[{type:o.o}]};class Kt{constructor(e,t,n){this._element=e,this._renderer=t,this._select=n,this._select&&(this.id=this._select._registerOption(this))}set ngValue(e){null!=this._select&&(this._value=e,this._setElementValue(Wt(this.id,e)),this._select.writeValue(this._select.value))}set value(e){this._select?(this._value=e,this._setElementValue(Wt(this.id,e)),this._select.writeValue(this._select.value)):this._setElementValue(e)}_setElementValue(e){this._renderer.setProperty(this._element.nativeElement,"value",e)}_setSelected(e){this._renderer.setProperty(this._element.nativeElement,"selected",e)}ngOnDestroy(){this._select&&(this._select._optionMap.delete(this.id),this._select.writeValue(this._select.value))}}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function Yt(e,t){return[...t.path,e]}function Qt(e,t){("undefined"==typeof ngDevMode||ngDevMode)&&(e||tn(t,"Cannot find control with"),t.valueAccessor||tn(t,"No value accessor for form control with")),e.validator=wt.compose([e.validator,t.validator]),e.asyncValidator=wt.composeAsync([e.asyncValidator,t.asyncValidator]),t.valueAccessor.writeValue(e.value),function(e,t){t.valueAccessor.registerOnChange(n=>{e._pendingValue=n,e._pendingChange=!0,e._pendingDirty=!0,"change"===e.updateOn&&Xt(e,t)})}(e,t),function(e,t){e.registerOnChange((e,n)=>{t.valueAccessor.writeValue(e),n&&t.viewToModelUpdate(e)})}(e,t),function(e,t){t.valueAccessor.registerOnTouched(()=>{e._pendingTouched=!0,"blur"===e.updateOn&&e._pendingChange&&Xt(e,t),"submit"!==e.updateOn&&e.markAsTouched()})}(e,t),t.valueAccessor.setDisabledState&&e.registerOnDisabledChange(e=>{t.valueAccessor.setDisabledState(e)}),t._rawValidators.forEach(t=>{t.registerOnValidatorChange&&t.registerOnValidatorChange(()=>e.updateValueAndValidity())}),t._rawAsyncValidators.forEach(t=>{t.registerOnValidatorChange&&t.registerOnValidatorChange(()=>e.updateValueAndValidity())})}function Jt(e,t){const n=()=>{("undefined"==typeof ngDevMode||ngDevMode)&&function(e){tn(e,"There is no FormControl instance attached to form control element with")}(t)};t.valueAccessor.registerOnChange(n),t.valueAccessor.registerOnTouched(n),t._rawValidators.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(null)}),t._rawAsyncValidators.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(null)}),e&&e._clearChangeFns()}function Xt(e,t){e._pendingDirty&&e.markAsDirty(),e.setValue(e._pendingValue,{emitModelToViewChange:!1}),t.viewToModelUpdate(e._pendingValue),e._pendingChange=!1}function en(e,t){null!=e||"undefined"!=typeof ngDevMode&&!ngDevMode||tn(t,"Cannot find control with"),e.validator=wt.compose([e.validator,t.validator]),e.asyncValidator=wt.composeAsync([e.asyncValidator,t.asyncValidator])}function tn(e,t){let n;throw n=e.path.length>1?`path: '${e.path.join(" -> ")}'`:e.path[0]?`name: '${e.path}'`:"unspecified name attribute",new Error(`${t} ${n}`)}function nn(e){return null!=e?wt.compose(Mt(e)):null}function rn(e){return null!=e?wt.composeAsync(Mt(e)):null}function on(e,t){if(!e.hasOwnProperty("model"))return!1;const n=e.model;return!!n.isFirstChange()||!Object.is(t,n.currentValue)}Kt.decorators=[{type:o.f,args:[{selector:"option"}]}],Kt.ctorParameters=()=>[{type:o.g},{type:o.x},{type:qt,decorators:[{type:o.u},{type:o.j}]}],Kt.propDecorators={ngValue:[{type:o.o,args:["ngValue"]}],value:[{type:o.o,args:["value"]}]};const sn=[it,Pt,St,Ut,qt,Tt];function an(e,t){e._syncPendingControls(),t.forEach(e=>{const t=e.control;"submit"===t.updateOn&&t._pendingChange&&(e.viewToModelUpdate(t._pendingValue),t._pendingChange=!1)})}function un(e,t){if(!t)return null;Array.isArray(t)||"undefined"!=typeof ngDevMode&&!ngDevMode||tn(e,"Value accessor was not provided as an array for form control with");let n=void 0,r=void 0,o=void 0;return t.forEach(t=>{var s;t.constructor===lt?n=t:(s=t,sn.some(e=>s.constructor===e)?(r&&("undefined"==typeof ngDevMode||ngDevMode)&&tn(e,"More than one built-in value accessor matches form control with"),r=t):(o&&("undefined"==typeof ngDevMode||ngDevMode)&&tn(e,"More than one custom value accessor matches form control with"),o=t))}),o||(r||(n||(("undefined"==typeof ngDevMode||ngDevMode)&&tn(e,"No valid value accessor for form control with"),null)))}function ln(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}function cn(e,t,n,r){Object(o.E)()&&"never"!==r&&((null!==r&&"once"!==r||t._ngModelWarningSentOnce)&&("always"!==r||n._ngModelWarningSent)||(("undefined"==typeof ngDevMode||ngDevMode)&&Ht.ngModelWarning(e),t._ngModelWarningSentOnce=!0,n._ngModelWarningSent=!0))}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function hn(e){return(gn(e)?e.validators:e)||null}function dn(e){return Array.isArray(e)?nn(e):e||null}function pn(e,t){return(gn(t)?t.asyncValidators:e)||null}function fn(e){return Array.isArray(e)?rn(e):e||null}function gn(e){return null!=e&&!Array.isArray(e)&&"object"==typeof e}class yn{constructor(e,t){this._hasOwnPendingAsyncValidator=!1,this._onCollectionChange=()=>{},this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._rawValidators=e,this._rawAsyncValidators=t,this._composedValidatorFn=dn(this._rawValidators),this._composedAsyncValidatorFn=fn(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get valid(){return"VALID"===this.status}get invalid(){return"INVALID"===this.status}get pending(){return"PENDING"==this.status}get disabled(){return"DISABLED"===this.status}get enabled(){return"DISABLED"!==this.status}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._rawValidators=e,this._composedValidatorFn=dn(e)}setAsyncValidators(e){this._rawAsyncValidators=e,this._composedAsyncValidatorFn=fn(e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){this.touched=!0,this._parent&&!e.onlySelf&&this._parent.markAsTouched(e)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(e=>e.markAllAsTouched())}markAsUntouched(e={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(e=>{e.markAsUntouched({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}markAsDirty(e={}){this.pristine=!1,this._parent&&!e.onlySelf&&this._parent.markAsDirty(e)}markAsPristine(e={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(e=>{e.markAsPristine({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}markAsPending(e={}){this.status="PENDING",!1!==e.emitEvent&&this.statusChanges.emit(this.status),this._parent&&!e.onlySelf&&this._parent.markAsPending(e)}disable(e={}){const t=this._parentMarkedDirty(e.onlySelf);this.status="DISABLED",this.errors=null,this._forEachChild(t=>{t.disable(Object.assign(Object.assign({},e),{onlySelf:!0}))}),this._updateValue(),!1!==e.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(Object.assign(Object.assign({},e),{skipPristineCheck:t})),this._onDisabledChange.forEach(e=>e(!0))}enable(e={}){const t=this._parentMarkedDirty(e.onlySelf);this.status="VALID",this._forEachChild(t=>{t.enable(Object.assign(Object.assign({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(Object.assign(Object.assign({},e),{skipPristineCheck:t})),this._onDisabledChange.forEach(e=>e(!1))}_updateAncestors(e){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(e){this._parent=e}updateValueAndValidity(e={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),"VALID"!==this.status&&"PENDING"!==this.status||this._runAsyncValidator(e.emitEvent)),!1!==e.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(e)}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(t=>t._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?"DISABLED":"VALID"}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e){if(this.asyncValidator){this.status="PENDING",this._hasOwnPendingAsyncValidator=!0;const t=At(this.asyncValidator(this));this._asyncValidationSubscription=t.subscribe(t=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(t,{emitEvent:e})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(e,t={}){this.errors=e,this._updateControlsErrors(!1!==t.emitEvent)}get(e){return function(e,t,n){if(null==t)return null;if(Array.isArray(t)||(t=t.split(n)),Array.isArray(t)&&0===t.length)return null;let r=e;return t.forEach(e=>{r=r instanceof _n?r.controls.hasOwnProperty(e)?r.controls[e]:null:r instanceof vn&&r.at(e)||null}),r}(this,e,".")}getError(e,t){const n=t?this.get(t):this;return n&&n.errors?n.errors[e]:null}hasError(e,t){return!!this.getError(e,t)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(e)}_initObservables(){this.valueChanges=new o.i,this.statusChanges=new o.i}_calculateStatus(){return this._allControlsDisabled()?"DISABLED":this.errors?"INVALID":this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus("PENDING")?"PENDING":this._anyControlsHaveStatus("INVALID")?"INVALID":"VALID"}_anyControlsHaveStatus(e){return this._anyControls(t=>t.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e={}){this.pristine=!this._anyControlsDirty(),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}_updateTouched(e={}){this.touched=this._anyControlsTouched(),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}_isBoxedValue(e){return"object"==typeof e&&null!==e&&2===Object.keys(e).length&&"value"in e&&"disabled"in e}_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){gn(e)&&null!=e.updateOn&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){const t=this._parent&&this._parent.dirty;return!e&&t&&!this._parent._anyControlsDirty()}}class mn extends yn{constructor(e=null,t,n){super(hn(t),pn(n,t)),this._onChange=[],this._applyFormState(e),this._setUpdateStrategy(t),this.updateValueAndValidity({onlySelf:!0,emitEvent:!1}),this._initObservables()}setValue(e,t={}){this.value=this._pendingValue=e,this._onChange.length&&!1!==t.emitModelToViewChange&&this._onChange.forEach(e=>e(this.value,!1!==t.emitViewToModelChange)),this.updateValueAndValidity(t)}patchValue(e,t={}){this.setValue(e,t)}reset(e=null,t={}){this._applyFormState(e),this.markAsPristine(t),this.markAsUntouched(t),this.setValue(this.value,t),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_clearChangeFns(){this._onChange=[],this._onDisabledChange=[],this._onCollectionChange=()=>{}}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_forEachChild(e){}_syncPendingControls(){return!("submit"!==this.updateOn||(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),!this._pendingChange))&&(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0)}_applyFormState(e){this._isBoxedValue(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}}class _n extends yn{constructor(e,t,n){super(hn(t),pn(n,t)),this.controls=e,this._initObservables(),this._setUpdateStrategy(t),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!1})}registerControl(e,t){return this.controls[e]?this.controls[e]:(this.controls[e]=t,t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange),t)}addControl(e,t){this.registerControl(e,t),this.updateValueAndValidity(),this._onCollectionChange()}removeControl(e){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],this.updateValueAndValidity(),this._onCollectionChange()}setControl(e,t){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],t&&this.registerControl(e,t),this.updateValueAndValidity(),this._onCollectionChange()}contains(e){return this.controls.hasOwnProperty(e)&&this.controls[e].enabled}setValue(e,t={}){this._checkAllValuesPresent(e),Object.keys(e).forEach(n=>{this._throwIfControlMissing(n),this.controls[n].setValue(e[n],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t)}patchValue(e,t={}){Object.keys(e).forEach(n=>{this.controls[n]&&this.controls[n].patchValue(e[n],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t)}reset(e={},t={}){this._forEachChild((n,r)=>{n.reset(e[r],{onlySelf:!0,emitEvent:t.emitEvent})}),this._updatePristine(t),this._updateTouched(t),this.updateValueAndValidity(t)}getRawValue(){return this._reduceChildren({},(e,t,n)=>(e[n]=t instanceof mn?t.value:t.getRawValue(),e))}_syncPendingControls(){let e=this._reduceChildren(!1,(e,t)=>!!t._syncPendingControls()||e);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_throwIfControlMissing(e){if(!Object.keys(this.controls).length)throw new Error("\n        There are no form controls registered with this group yet. If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ");if(!this.controls[e])throw new Error(`Cannot find form control with name: ${e}.`)}_forEachChild(e){Object.keys(this.controls).forEach(t=>e(this.controls[t],t))}_setUpControls(){this._forEachChild(e=>{e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(e){for(const t of Object.keys(this.controls)){const n=this.controls[t];if(this.contains(t)&&e(n))return!0}return!1}_reduceValue(){return this._reduceChildren({},(e,t,n)=>((t.enabled||this.disabled)&&(e[n]=t.value),e))}_reduceChildren(e,t){let n=e;return this._forEachChild((e,r)=>{n=t(n,e,r)}),n}_allControlsDisabled(){for(const e of Object.keys(this.controls))if(this.controls[e].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_checkAllValuesPresent(e){this._forEachChild((t,n)=>{if(void 0===e[n])throw new Error(`Must supply a value for form control with name: '${n}'.`)})}}class vn extends yn{constructor(e,t,n){super(hn(t),pn(n,t)),this.controls=e,this._initObservables(),this._setUpdateStrategy(t),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!1})}at(e){return this.controls[e]}push(e){this.controls.push(e),this._registerControl(e),this.updateValueAndValidity(),this._onCollectionChange()}insert(e,t){this.controls.splice(e,0,t),this._registerControl(t),this.updateValueAndValidity()}removeAt(e){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),this.controls.splice(e,1),this.updateValueAndValidity()}setControl(e,t){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),this.controls.splice(e,1),t&&(this.controls.splice(e,0,t),this._registerControl(t)),this.updateValueAndValidity(),this._onCollectionChange()}get length(){return this.controls.length}setValue(e,t={}){this._checkAllValuesPresent(e),e.forEach((e,n)=>{this._throwIfControlMissing(n),this.at(n).setValue(e,{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t)}patchValue(e,t={}){e.forEach((e,n)=>{this.at(n)&&this.at(n).patchValue(e,{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t)}reset(e=[],t={}){this._forEachChild((n,r)=>{n.reset(e[r],{onlySelf:!0,emitEvent:t.emitEvent})}),this._updatePristine(t),this._updateTouched(t),this.updateValueAndValidity(t)}getRawValue(){return this.controls.map(e=>e instanceof mn?e.value:e.getRawValue())}clear(){this.controls.length<1||(this._forEachChild(e=>e._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity())}_syncPendingControls(){let e=this.controls.reduce((e,t)=>!!t._syncPendingControls()||e,!1);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_throwIfControlMissing(e){if(!this.controls.length)throw new Error("\n        There are no form controls registered with this array yet. If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ");if(!this.at(e))throw new Error("Cannot find form control at index "+e)}_forEachChild(e){this.controls.forEach((t,n)=>{e(t,n)})}_updateValue(){this.value=this.controls.filter(e=>e.enabled||this.disabled).map(e=>e.value)}_anyControls(e){return this.controls.some(t=>t.enabled&&e(t))}_setUpControls(){this._forEachChild(e=>this._registerControl(e))}_checkAllValuesPresent(e){this._forEachChild((t,n)=>{if(void 0===e[n])throw new Error(`Must supply a value for form control at index: ${n}.`)})}_allControlsDisabled(){for(const e of this.controls)if(e.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(e){e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)}}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const Dn={provide:ht,useExisting:Object(o.D)(()=>Cn)},bn=Promise.resolve(null);class Cn extends ht{constructor(e,t){super(),this.submitted=!1,this._directives=[],this.ngSubmit=new o.i,this.form=new _n({},nn(e),rn(t))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(e){bn.then(()=>{const t=this._findContainer(e.path);e.control=t.registerControl(e.name,e.control),Qt(e.control,e),e.control.updateValueAndValidity({emitEvent:!1}),this._directives.push(e)})}getControl(e){return this.form.get(e.path)}removeControl(e){bn.then(()=>{const t=this._findContainer(e.path);t&&t.removeControl(e.name),ln(this._directives,e)})}addFormGroup(e){bn.then(()=>{const t=this._findContainer(e.path),n=new _n({});en(n,e),t.registerControl(e.name,n),n.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(e){bn.then(()=>{const t=this._findContainer(e.path);t&&t.removeControl(e.name)})}getFormGroup(e){return this.form.get(e.path)}updateModel(e,t){bn.then(()=>{this.form.get(e.path).setValue(t)})}setValue(e){this.control.setValue(e)}onSubmit(e){return this.submitted=!0,an(this.form,this._directives),this.ngSubmit.emit(e),!1}onReset(){this.resetForm()}resetForm(e){this.form.reset(e),this.submitted=!1}_setUpdateStrategy(){this.options&&null!=this.options.updateOn&&(this.form._updateOn=this.options.updateOn)}_findContainer(e){return e.pop(),e.length?this.form.get(e):this.form}}Cn.decorators=[{type:o.f,args:[{selector:"form:not([ngNoForm]):not([formGroup]),ng-form,[ngForm]",providers:[Dn],host:{"(submit)":"onSubmit($event)","(reset)":"onReset()"},outputs:["ngSubmit"],exportAs:"ngForm"}]}],Cn.ctorParameters=()=>[{type:Array,decorators:[{type:o.u},{type:o.y},{type:o.k,args:[Dt]}]},{type:Array,decorators:[{type:o.u},{type:o.y},{type:o.k,args:[bt]}]}],Cn.propDecorators={options:[{type:o.o,args:["ngFormOptions"]}]};
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class wn extends ht{ngOnInit(){this._checkParentType(),this.formDirective.addFormGroup(this)}ngOnDestroy(){this.formDirective&&this.formDirective.removeFormGroup(this)}get control(){return this.formDirective.getFormGroup(this)}get path(){return Yt(null==this.name?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}get validator(){return nn(this._validators)}get asyncValidator(){return rn(this._asyncValidators)}_checkParentType(){}}wn.decorators=[{type:o.f}];
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class En{static modelParentException(){throw new Error(`\n      ngModel cannot be used to register form controls with a parent formGroup directive.  Try using\n      formGroup's partner directive "formControlName" instead.  Example:\n\n      ${Nt}\n\n      Or, if you'd like to avoid registering this form control, indicate that it's standalone in ngModelOptions:\n\n      Example:\n\n      ${Lt}`)}static formGroupNameException(){throw new Error(`\n      ngModel cannot be used to register form controls with a parent formGroupName or formArrayName directive.\n\n      Option 1: Use formControlName instead of ngModel (reactive strategy):\n\n      ${jt}\n\n      Option 2:  Update ngModel's parent be ngModelGroup (template-driven strategy):\n\n      ${Rt}`)}static missingNameException(){throw new Error('If ngModel is used within a form tag, either the name attribute must be set or the form\n      control must be defined as \'standalone\' in ngModelOptions.\n\n      Example 1: <input [(ngModel)]="person.firstName" name="first">\n      Example 2: <input [(ngModel)]="person.firstName" [ngModelOptions]="{standalone: true}">')}static modelGroupParentException(){throw new Error(`\n      ngModelGroup cannot be used with a parent formGroup directive.\n\n      Option 1: Use formGroupName instead of ngModelGroup (reactive strategy):\n\n      ${jt}\n\n      Option 2:  Use a regular form tag instead of the formGroup directive (template-driven strategy):\n\n      ${Rt}`)}}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const An={provide:ht,useExisting:Object(o.D)(()=>Fn)};class Fn extends wn{constructor(e,t,n){super(),this._parent=e,this._validators=t,this._asyncValidators=n}_checkParentType(){this._parent instanceof Fn||this._parent instanceof Cn||"undefined"!=typeof ngDevMode&&!ngDevMode||En.modelGroupParentException()}}Fn.decorators=[{type:o.f,args:[{selector:"[ngModelGroup]",providers:[An],exportAs:"ngModelGroup"}]}],Fn.ctorParameters=()=>[{type:ht,decorators:[{type:o.j},{type:o.z}]},{type:Array,decorators:[{type:o.u},{type:o.y},{type:o.k,args:[Dt]}]},{type:Array,decorators:[{type:o.u},{type:o.y},{type:o.k,args:[bt]}]}],Fn.propDecorators={name:[{type:o.o,args:["ngModelGroup"]}]};
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const xn={provide:pt,useExisting:Object(o.D)(()=>kn)},Mn=Promise.resolve(null);class kn extends pt{constructor(e,t,n,r){super(),this.control=new mn,this._registered=!1,this.update=new o.i,this._parent=e,this._rawValidators=t||[],this._rawAsyncValidators=n||[],this.valueAccessor=un(this,r)}ngOnChanges(e){this._checkForErrors(),this._registered||this._setUpControl(),"isDisabled"in e&&this._updateDisabled(e),on(e,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._parent?Yt(this.name,this._parent):[this.name]}get formDirective(){return this._parent?this._parent.formDirective:null}get validator(){return nn(this._rawValidators)}get asyncValidator(){return rn(this._rawAsyncValidators)}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&null!=this.options.updateOn&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!(!this.options||!this.options.standalone)}_setUpStandalone(){Qt(this.control,this),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){("undefined"==typeof ngDevMode||ngDevMode)&&(!(this._parent instanceof Fn)&&this._parent instanceof wn?En.formGroupNameException():this._parent instanceof Fn||this._parent instanceof Cn||En.modelParentException())}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),this._isStandalone()||this.name||"undefined"!=typeof ngDevMode&&!ngDevMode||En.missingNameException()}_updateValue(e){Mn.then(()=>{this.control.setValue(e,{emitViewToModelChange:!1})})}_updateDisabled(e){const t=e.isDisabled.currentValue,n=""===t||t&&"false"!==t;Mn.then(()=>{n&&!this.control.disabled?this.control.disable():!n&&this.control.disabled&&this.control.enable()})}}kn.decorators=[{type:o.f,args:[{selector:"[ngModel]:not([formControlName]):not([formControl])",providers:[xn],exportAs:"ngModel"}]}],kn.ctorParameters=()=>[{type:ht,decorators:[{type:o.u},{type:o.j}]},{type:Array,decorators:[{type:o.u},{type:o.y},{type:o.k,args:[Dt]}]},{type:Array,decorators:[{type:o.u},{type:o.y},{type:o.k,args:[bt]}]},{type:Array,decorators:[{type:o.u},{type:o.y},{type:o.k,args:[ot]}]}],kn.propDecorators={name:[{type:o.o}],isDisabled:[{type:o.o,args:["disabled"]}],model:[{type:o.o,args:["ngModel"]}],options:[{type:o.o,args:["ngModelOptions"]}],update:[{type:o.v,args:["ngModelChange"]}]};
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class Sn{}Sn.decorators=[{type:o.f,args:[{selector:"form:not([ngNoForm]):not([ngNativeValidate])",host:{novalidate:""}}]}];
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const On=new o.m("NgModelWithFormControlWarning"),Vn={provide:pt,useExisting:Object(o.D)(()=>Tn)};class Tn extends pt{constructor(e,t,n,r){super(),this._ngModelWarningConfig=r,this.update=new o.i,this._ngModelWarningSent=!1,this._rawValidators=e||[],this._rawAsyncValidators=t||[],this.valueAccessor=un(this,n)}set isDisabled(e){("undefined"==typeof ngDevMode||ngDevMode)&&Ht.disabledAttrWarning()}ngOnChanges(e){this._isControlChanged(e)&&(Qt(this.form,this),this.control.disabled&&this.valueAccessor.setDisabledState&&this.valueAccessor.setDisabledState(!0),this.form.updateValueAndValidity({emitEvent:!1})),on(e,this.viewModel)&&(cn("formControl",Tn,this,this._ngModelWarningConfig),this.form.setValue(this.model),this.viewModel=this.model)}get path(){return[]}get validator(){return nn(this._rawValidators)}get asyncValidator(){return rn(this._rawAsyncValidators)}get control(){return this.form}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}_isControlChanged(e){return e.hasOwnProperty("form")}}Tn._ngModelWarningSentOnce=!1,Tn.decorators=[{type:o.f,args:[{selector:"[formControl]",providers:[Vn],exportAs:"ngForm"}]}],Tn.ctorParameters=()=>[{type:Array,decorators:[{type:o.u},{type:o.y},{type:o.k,args:[Dt]}]},{type:Array,decorators:[{type:o.u},{type:o.y},{type:o.k,args:[bt]}]},{type:Array,decorators:[{type:o.u},{type:o.y},{type:o.k,args:[ot]}]},{type:String,decorators:[{type:o.u},{type:o.k,args:[On]}]}],Tn.propDecorators={form:[{type:o.o,args:["formControl"]}],isDisabled:[{type:o.o,args:["disabled"]}],model:[{type:o.o,args:["ngModel"]}],update:[{type:o.v,args:["ngModelChange"]}]};
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const In={provide:ht,useExisting:Object(o.D)(()=>Pn)};class Pn extends ht{constructor(e,t){super(),this._validators=e,this._asyncValidators=t,this.submitted=!1,this.directives=[],this.form=null,this.ngSubmit=new o.i}ngOnChanges(e){this._checkFormPresent(),e.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations())}get formDirective(){return this}get control(){return this.form}get path(){return[]}addControl(e){const t=this.form.get(e.path);return Qt(t,e),t.updateValueAndValidity({emitEvent:!1}),this.directives.push(e),t}getControl(e){return this.form.get(e.path)}removeControl(e){ln(this.directives,e)}addFormGroup(e){const t=this.form.get(e.path);en(t,e),t.updateValueAndValidity({emitEvent:!1})}removeFormGroup(e){}getFormGroup(e){return this.form.get(e.path)}addFormArray(e){const t=this.form.get(e.path);en(t,e),t.updateValueAndValidity({emitEvent:!1})}removeFormArray(e){}getFormArray(e){return this.form.get(e.path)}updateModel(e,t){this.form.get(e.path).setValue(t)}onSubmit(e){return this.submitted=!0,an(this.form,this.directives),this.ngSubmit.emit(e),!1}onReset(){this.resetForm()}resetForm(e){this.form.reset(e),this.submitted=!1}_updateDomValue(){this.directives.forEach(e=>{const t=this.form.get(e.path);e.control!==t&&(Jt(e.control,e),t&&Qt(t,e),e.control=t)}),this.form._updateTreeValidity({emitEvent:!1})}_updateRegistrations(){this.form._registerOnCollectionChange(()=>this._updateDomValue()),this._oldForm&&this._oldForm._registerOnCollectionChange(()=>{}),this._oldForm=this.form}_updateValidators(){const e=nn(this._validators);this.form.validator=wt.compose([this.form.validator,e]);const t=rn(this._asyncValidators);this.form.asyncValidator=wt.composeAsync([this.form.asyncValidator,t])}_checkFormPresent(){this.form||"undefined"!=typeof ngDevMode&&!ngDevMode||Ht.missingFormException()}}Pn.decorators=[{type:o.f,args:[{selector:"[formGroup]",providers:[In],host:{"(submit)":"onSubmit($event)","(reset)":"onReset()"},exportAs:"ngForm"}]}],Pn.ctorParameters=()=>[{type:Array,decorators:[{type:o.u},{type:o.y},{type:o.k,args:[Dt]}]},{type:Array,decorators:[{type:o.u},{type:o.y},{type:o.k,args:[bt]}]}],Pn.propDecorators={form:[{type:o.o,args:["formGroup"]}],ngSubmit:[{type:o.v}]};
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const Nn={provide:ht,useExisting:Object(o.D)(()=>jn)};class jn extends wn{constructor(e,t,n){super(),this._parent=e,this._validators=t,this._asyncValidators=n}_checkParentType(){Ln(this._parent)&&("undefined"==typeof ngDevMode||ngDevMode)&&Ht.groupParentException()}}jn.decorators=[{type:o.f,args:[{selector:"[formGroupName]",providers:[Nn]}]}],jn.ctorParameters=()=>[{type:ht,decorators:[{type:o.u},{type:o.j},{type:o.z}]},{type:Array,decorators:[{type:o.u},{type:o.y},{type:o.k,args:[Dt]}]},{type:Array,decorators:[{type:o.u},{type:o.y},{type:o.k,args:[bt]}]}],jn.propDecorators={name:[{type:o.o,args:["formGroupName"]}]};const Bn={provide:ht,useExisting:Object(o.D)(()=>Rn)};class Rn extends ht{constructor(e,t,n){super(),this._parent=e,this._validators=t,this._asyncValidators=n}ngOnInit(){this._checkParentType(),this.formDirective.addFormArray(this)}ngOnDestroy(){this.formDirective&&this.formDirective.removeFormArray(this)}get control(){return this.formDirective.getFormArray(this)}get formDirective(){return this._parent?this._parent.formDirective:null}get path(){return Yt(null==this.name?this.name:this.name.toString(),this._parent)}get validator(){return nn(this._validators)}get asyncValidator(){return rn(this._asyncValidators)}_checkParentType(){Ln(this._parent)&&("undefined"==typeof ngDevMode||ngDevMode)&&Ht.arrayParentException()}}function Ln(e){return!(e instanceof jn||e instanceof Pn||e instanceof Rn)}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */Rn.decorators=[{type:o.f,args:[{selector:"[formArrayName]",providers:[Bn]}]}],Rn.ctorParameters=()=>[{type:ht,decorators:[{type:o.u},{type:o.j},{type:o.z}]},{type:Array,decorators:[{type:o.u},{type:o.y},{type:o.k,args:[Dt]}]},{type:Array,decorators:[{type:o.u},{type:o.y},{type:o.k,args:[bt]}]}],Rn.propDecorators={name:[{type:o.o,args:["formArrayName"]}]};const Hn={provide:pt,useExisting:Object(o.D)(()=>$n)};class $n extends pt{constructor(e,t,n,r,s){super(),this._ngModelWarningConfig=s,this._added=!1,this.update=new o.i,this._ngModelWarningSent=!1,this._parent=e,this._rawValidators=t||[],this._rawAsyncValidators=n||[],this.valueAccessor=un(this,r)}set isDisabled(e){("undefined"==typeof ngDevMode||ngDevMode)&&Ht.disabledAttrWarning()}ngOnChanges(e){this._added||this._setUpControl(),on(e,this.viewModel)&&(cn("formControlName",$n,this,this._ngModelWarningConfig),this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}get path(){return Yt(null==this.name?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}get validator(){return nn(this._rawValidators)}get asyncValidator(){return rn(this._rawAsyncValidators)}_checkParentType(){("undefined"==typeof ngDevMode||ngDevMode)&&(!(this._parent instanceof jn)&&this._parent instanceof wn?Ht.ngModelGroupException():this._parent instanceof jn||this._parent instanceof Pn||this._parent instanceof Rn||Ht.controlParentException())}_setUpControl(){this._checkParentType(),this.control=this.formDirective.addControl(this),this.control.disabled&&this.valueAccessor.setDisabledState&&this.valueAccessor.setDisabledState(!0),this._added=!0}}$n._ngModelWarningSentOnce=!1,$n.decorators=[{type:o.f,args:[{selector:"[formControlName]",providers:[Hn]}]}],$n.ctorParameters=()=>[{type:ht,decorators:[{type:o.u},{type:o.j},{type:o.z}]},{type:Array,decorators:[{type:o.u},{type:o.y},{type:o.k,args:[Dt]}]},{type:Array,decorators:[{type:o.u},{type:o.y},{type:o.k,args:[bt]}]},{type:Array,decorators:[{type:o.u},{type:o.y},{type:o.k,args:[ot]}]},{type:String,decorators:[{type:o.u},{type:o.k,args:[On]}]}],$n.propDecorators={name:[{type:o.o,args:["formControlName"]}],isDisabled:[{type:o.o,args:["disabled"]}],model:[{type:o.o,args:["ngModel"]}],update:[{type:o.v,args:["ngModelChange"]}]};
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const Gn={provide:Dt,useExisting:Object(o.D)(()=>zn),multi:!0},Un={provide:Dt,useExisting:Object(o.D)(()=>Zn),multi:!0};class zn{constructor(){this._required=!1}get required(){return this._required}set required(e){this._required=null!=e&&!1!==e&&""+e!="false",this._onChange&&this._onChange()}validate(e){return this.required?wt.required(e):null}registerOnValidatorChange(e){this._onChange=e}}zn.decorators=[{type:o.f,args:[{selector:":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]",providers:[Gn],host:{"[attr.required]":'required ? "" : null'}}]}],zn.propDecorators={required:[{type:o.o}]};class Zn extends zn{validate(e){return this.required?wt.requiredTrue(e):null}}Zn.decorators=[{type:o.f,args:[{selector:"input[type=checkbox][required][formControlName],input[type=checkbox][required][formControl],input[type=checkbox][required][ngModel]",providers:[Un],host:{"[attr.required]":'required ? "" : null'}}]}];const Wn={provide:Dt,useExisting:Object(o.D)(()=>qn),multi:!0};class qn{constructor(){this._enabled=!1}set email(e){this._enabled=""===e||!0===e||"true"===e,this._onChange&&this._onChange()}validate(e){return this._enabled?wt.email(e):null}registerOnValidatorChange(e){this._onChange=e}}qn.decorators=[{type:o.f,args:[{selector:"[email][formControlName],[email][formControl],[email][ngModel]",providers:[Wn]}]}],qn.propDecorators={email:[{type:o.o}]};const Kn={provide:Dt,useExisting:Object(o.D)(()=>Yn),multi:!0};class Yn{constructor(){this._validator=wt.nullValidator}ngOnChanges(e){"minlength"in e&&(this._createValidator(),this._onChange&&this._onChange())}validate(e){return null==this.minlength?null:this._validator(e)}registerOnValidatorChange(e){this._onChange=e}_createValidator(){this._validator=wt.minLength("number"==typeof this.minlength?this.minlength:parseInt(this.minlength,10))}}Yn.decorators=[{type:o.f,args:[{selector:"[minlength][formControlName],[minlength][formControl],[minlength][ngModel]",providers:[Kn],host:{"[attr.minlength]":"minlength ? minlength : null"}}]}],Yn.propDecorators={minlength:[{type:o.o}]};const Qn={provide:Dt,useExisting:Object(o.D)(()=>Jn),multi:!0};class Jn{constructor(){this._validator=wt.nullValidator}ngOnChanges(e){"maxlength"in e&&(this._createValidator(),this._onChange&&this._onChange())}validate(e){return null!=this.maxlength?this._validator(e):null}registerOnValidatorChange(e){this._onChange=e}_createValidator(){this._validator=wt.maxLength("number"==typeof this.maxlength?this.maxlength:parseInt(this.maxlength,10))}}Jn.decorators=[{type:o.f,args:[{selector:"[maxlength][formControlName],[maxlength][formControl],[maxlength][ngModel]",providers:[Qn],host:{"[attr.maxlength]":"maxlength ? maxlength : null"}}]}],Jn.propDecorators={maxlength:[{type:o.o}]};const Xn={provide:Dt,useExisting:Object(o.D)(()=>er),multi:!0};class er{constructor(){this._validator=wt.nullValidator}ngOnChanges(e){"pattern"in e&&(this._createValidator(),this._onChange&&this._onChange())}validate(e){return this._validator(e)}registerOnValidatorChange(e){this._onChange=e}_createValidator(){this._validator=wt.pattern(this.pattern)}}er.decorators=[{type:o.f,args:[{selector:"[pattern][formControlName],[pattern][formControl],[pattern][ngModel]",providers:[Xn],host:{"[attr.pattern]":"pattern ? pattern : null"}}]}],er.propDecorators={pattern:[{type:o.o}]};
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const tr=[Sn,zt,Kt,lt,St,Pt,it,Ut,qt,Tt,yt,mt,zn,Yn,Jn,er,Zn,qn],nr=[Tn,Pn,$n,jn,Rn];class rr{}rr.decorators=[{type:o.s,args:[{declarations:tr,exports:tr}]}];class or{group(e,t=null){const n=this._reduceControls(e);let r=null,o=null,s=void 0;return null!=t&&(!
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function(e){return void 0!==e.asyncValidators||void 0!==e.validators||void 0!==e.updateOn}(t)?(r=null!=t.validator?t.validator:null,o=null!=t.asyncValidator?t.asyncValidator:null):(r=null!=t.validators?t.validators:null,o=null!=t.asyncValidators?t.asyncValidators:null,s=null!=t.updateOn?t.updateOn:void 0)),new _n(n,{asyncValidators:o,updateOn:s,validators:r})}control(e,t,n){return new mn(e,t,n)}array(e,t,n){const r=e.map(e=>this._createControl(e));return new vn(r,t,n)}_reduceControls(e){const t={};return Object.keys(e).forEach(n=>{t[n]=this._createControl(e[n])}),t}_createControl(e){if(e instanceof mn||e instanceof _n||e instanceof vn)return e;if(Array.isArray(e)){const t=e[0],n=e.length>1?e[1]:null,r=e.length>2?e[2]:null;return this.control(t,n,r)}return this.control(e)}}or.decorators=[{type:o.l}];
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
new o.B("10.2.3");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */o.s;class sr{static withConfig(e){return{ngModule:sr,providers:[{provide:On,useValue:e.warnOnNgModelWithFormControl}]}}}sr.decorators=[{type:o.s,args:[{declarations:[nr],providers:[or,Vt],exports:[rr,nr]}]}];
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var ir=n(1),ar=n(4),ur=function(e){function t(t,n){var r=e.call(this,t,n)||this;return r.scheduler=t,r.work=n,r.pending=!1,r}return ir.a(t,e),t.prototype.schedule=function(e,t){if(void 0===t&&(t=0),this.closed)return this;this.state=e;var n=this.id,r=this.scheduler;return null!=n&&(this.id=this.recycleAsyncId(r,n,t)),this.pending=!0,this.delay=t,this.id=this.id||this.requestAsyncId(r,this.id,t),this},t.prototype.requestAsyncId=function(e,t,n){return void 0===n&&(n=0),setInterval(e.flush.bind(e,this),n)},t.prototype.recycleAsyncId=function(e,t,n){if(void 0===n&&(n=0),null!==n&&this.delay===n&&!1===this.pending)return t;clearInterval(t)},t.prototype.execute=function(e,t){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;var n=this._execute(e,t);if(n)return n;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))},t.prototype._execute=function(e,t){var n=!1,r=void 0;try{this.work(e)}catch(e){n=!0,r=!!e&&e||new Error(e)}if(n)return this.unsubscribe(),r},t.prototype._unsubscribe=function(){var e=this.id,t=this.scheduler,n=t.actions,r=n.indexOf(this);this.work=null,this.state=null,this.pending=!1,this.scheduler=null,-1!==r&&n.splice(r,1),null!=e&&(this.id=this.recycleAsyncId(t,e,null)),this.delay=null},t}(function(e){function t(t,n){return e.call(this)||this}return ir.a(t,e),t.prototype.schedule=function(e,t){return void 0===t&&(t=0),this},t}(n(3).a)),lr=function(){function e(t,n){void 0===n&&(n=e.now),this.SchedulerAction=t,this.now=n}return e.prototype.schedule=function(e,t,n){return void 0===t&&(t=0),new this.SchedulerAction(this,e).schedule(n,t)},e.now=function(){return Date.now()},e}(),cr=new(function(e){function t(n,r){void 0===r&&(r=lr.now);var o=e.call(this,n,(function(){return t.delegate&&t.delegate!==o?t.delegate.now():r()}))||this;return o.actions=[],o.active=!1,o.scheduled=void 0,o}return ir.a(t,e),t.prototype.schedule=function(n,r,o){return void 0===r&&(r=0),t.delegate&&t.delegate!==this?t.delegate.schedule(n,r,o):e.prototype.schedule.call(this,n,r,o)},t.prototype.flush=function(e){var t=this.actions;if(this.active)t.push(e);else{var n;this.active=!0;do{if(n=e.execute(e.state,e.delay))break}while(e=t.shift());if(this.active=!1,n){for(;e=t.shift();)e.unsubscribe();throw n}}},t}(lr))(ur);function hr(e,t){return void 0===t&&(t=cr),function(n){return n.lift(new dr(e,t))}}var dr=function(){function e(e,t){this.dueTime=e,this.scheduler=t}return e.prototype.call=function(e,t){return t.subscribe(new pr(e,this.dueTime,this.scheduler))},e}(),pr=function(e){function t(t,n,r){var o=e.call(this,t)||this;return o.dueTime=n,o.scheduler=r,o.debouncedSubscription=null,o.lastValue=null,o.hasValue=!1,o}return ir.a(t,e),t.prototype._next=function(e){this.clearDebounce(),this.lastValue=e,this.hasValue=!0,this.add(this.debouncedSubscription=this.scheduler.schedule(fr,this.dueTime,this))},t.prototype._complete=function(){this.debouncedNext(),this.destination.complete()},t.prototype.debouncedNext=function(){if(this.clearDebounce(),this.hasValue){var e=this.lastValue;this.lastValue=null,this.hasValue=!1,this.destination.next(e)}},t.prototype.clearDebounce=function(){var e=this.debouncedSubscription;null!==e&&(this.remove(e),e.unsubscribe(),this.debouncedSubscription=null)},t}(ar.a);function fr(e){e.debouncedNext()}function gr(e){return t=>{const n=t.get(e);console.log({control:n});const r=t.get("confirm"+(e.charAt(0).toUpperCase()+e.slice(1)));return n.pristine||r.pristine||n.value===r.value?null:{match:!0}}}let yr=class{constructor(e,t,n,r){this.fb=e,this.router=t,this.route=n,this.userService=r,this.validationMessage={emailMessage:"",passwordMessage:""},this.validationMessages={email:{required:"Please enter your email address",email:"Please enter a valid email address"},password:{minlength:"Please enter a valid password. It has to be at least 8 characters."}}}ngOnInit(){this.registerForm=this.fb.group({firstName:["",[wt.required,wt.minLength(3)]],lastName:["",[wt.required,wt.maxLength(50)]],emailGroup:this.fb.group({email:["",[wt.required,wt.email]],confirmEmail:["",wt.required]},{validator:gr("email")}),passwordGroup:this.fb.group({password:["",[wt.required,wt.minLength(8)]],confirmPassword:["",wt.required]},{validator:gr("password")})});const e=this.registerForm.get("emailGroup.email");e.valueChanges.pipe(hr(1e3)).subscribe(t=>this.setMessage("email",e));const t=this.registerForm.get("passwordGroup.password");t.valueChanges.pipe(hr(1e3)).subscribe(e=>this.setMessage("password",t))}populateTestData(){this.registerForm.patchValue({firstName:"Alex",lastName:"Christiaens",emailGroup:{email:"alexandra.christiaens@student.howest.be",confirmEmail:"alexandra.christiaens@student.howest.be"},passwordGroup:{password:"Azerty*2020",confirmPassword:"Azerty*2020"}})}register(){if(console.log(this.registerForm),console.log("Saved: "+JSON.stringify(this.registerForm.value)),this.registerForm.valid)if(console.log({registerformdirty:this.registerForm.dirty}),this.registerForm.dirty){this.user=this.initializeUser(),console.log({user:this.user}),this.user.firstName=this.registerForm.get("firstName").value,this.user.lastName=this.registerForm.get("lastName").value,this.user.email=this.registerForm.get("emailGroup.email").value,this.user.password=this.registerForm.get("passwordGroup.password").value,console.log({user:this.user});var e=this.userService.registerUser(this.user).subscribe({next:()=>this.onSaveComplete(),error:e=>{this.errorMessage=e,this.validationMessage.emailMessage=e}});console.log({result:e}),console.log({error:this.errorMessage})}else this.registerForm.reset(),console.log("dashboard laden")}setMessage(e,t){this.validationMessage.emailMessage="",this.validationMessage.passwordMessage="",console.log({formgroup:e}),console.log({control:t}),(t.touched||t.dirty&&t.errors)&&(console.log({errors:t.errors}),this.validationMessage[e+"Message"]=Object.keys(t.errors).map(t=>this.validationMessages[e][t]).join(""),console.log({emailMessage:this.validationMessage[e+"Message"]}))}initializeUser(){return{firstName:"",lastName:"",email:"",password:""}}onSaveComplete(){this.registerForm.reset(),console.log("geregistreerd")}};yr=Object(r.a)([Object(o.c)({selector:"app-register",templateUrl:"./register.component.html",styleUrls:["./register.component.scss"]})],yr)}]);