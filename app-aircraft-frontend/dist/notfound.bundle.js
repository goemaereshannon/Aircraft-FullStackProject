!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/div/",n(n.s=32)}([function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return w})),n.d(t,"b",(function(){return _o})),n.d(t,"c",(function(){return Is})),n.d(t,"d",(function(){return Fi})),n.d(t,"e",(function(){return Ws})),n.d(t,"f",(function(){return Ds})),n.d(t,"g",(function(){return Bi})),n.d(t,"h",(function(){return vn})),n.d(t,"i",(function(){return Ms})),n.d(t,"j",(function(){return b})),n.d(t,"k",(function(){return y})),n.d(t,"l",(function(){return Oo})),n.d(t,"m",(function(){return oe})),n.d(t,"n",(function(){return Vo})),n.d(t,"o",(function(){return Ss})),n.d(t,"p",(function(){return as})),n.d(t,"q",(function(){return us})),n.d(t,"r",(function(){return Us})),n.d(t,"s",(function(){return Ps})),n.d(t,"t",(function(){return be})),n.d(t,"u",(function(){return _})),n.d(t,"v",(function(){return js})),n.d(t,"w",(function(){return Ts})),n.d(t,"x",(function(){return Wi})),n.d(t,"y",(function(){return v})),n.d(t,"z",(function(){return m})),n.d(t,"A",(function(){return fs})),n.d(t,"B",(function(){return Qi})),n.d(t,"C",(function(){return gs})),n.d(t,"D",(function(){return A})),n.d(t,"E",(function(){return wn})),n.d(t,"F",(function(){return Ni})),n.d(t,"G",(function(){return Si})),n.d(t,"H",(function(){return ji})),n.d(t,"I",(function(){return Oi})),n.d(t,"J",(function(){return bi})),n.d(t,"K",(function(){return Ci})),n.d(t,"L",(function(){return xi})),n.d(t,"M",(function(){return Ti})),n.d(t,"N",(function(){return S})),n.d(t,"O",(function(){return k})),n.d(t,"P",(function(){return pe}));var r=n(12),o=n(3),i=n(2),s=n(26),a=n(27);
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
 */const c="__annotations__",l="__parameters__",d="__prop__metadata__";function h(e,t,n,r,o){return u(()=>{const i=f(t);function s(...e){if(this instanceof s)return i.call(this,...e),this;const t=new s(...e);return function(n){o&&o(n,...e);return(n.hasOwnProperty(c)?n[c]:Object.defineProperty(n,c,{value:[]})[c]).push(t),r&&r(n),n}}return n&&(s.prototype=Object.create(n.prototype)),s.prototype.ngMetadataName=e,s.annotationCls=s,s})}function f(e){return function(...t){if(e){const n=e(...t);for(const e in n)this[e]=n[e]}}}function p(e,t,n){return u(()=>{const r=f(t);function o(...e){if(this instanceof o)return r.apply(this,e),this;const t=new o(...e);return n.annotation=t,n;function n(e,n,r){const o=e.hasOwnProperty(l)?e[l]:Object.defineProperty(e,l,{value:[]})[l];for(;o.length<=r;)o.push(null);return(o[r]=o[r]||[]).push(t),e}}return n&&(o.prototype=Object.create(n.prototype)),o.prototype.ngMetadataName=e,o.annotationCls=o,o})}function g(e,t,n,r){return u(()=>{const o=f(t);function i(...e){if(this instanceof i)return o.apply(this,e),this;const t=new i(...e);return function(n,o){const i=n.constructor,s=i.hasOwnProperty(d)?i[d]:Object.defineProperty(i,d,{value:{}})[d];s[o]=s.hasOwnProperty(o)&&s[o]||[],s[o].unshift(t),r&&r(n,o,...e)}}return n&&(i.prototype=Object.create(n.prototype)),i.prototype.ngMetadataName=e,i.annotationCls=i,i})}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const y=p("Inject",e=>({token:e})),_=p("Optional"),v=p("Self"),m=p("SkipSelf"),b=p("Host"),w=p("Attribute",e=>({attributeName:e}));
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var x;
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function C(e){for(let t in e)if(e[t]===C)return t;throw Error("Could not find renamed property on target object.")}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function k(e){return{token:e.token,providedIn:e.providedIn||null,factory:e.factory,value:void 0}}!function(e){e[e.Default=0]="Default",e[e.Host=1]="Host",e[e.Self=2]="Self",e[e.SkipSelf=4]="SkipSelf",e[e.Optional=8]="Optional"}(x||(x={}));function E(e){return{factory:e.factory,providers:e.providers||[],imports:e.imports||[]}}function M(e){return D(e,e[I])||D(e,e[T])}function D(e,t){return t&&t.token===e?t:null}const I=C({"ɵprov":C}),T=(C({"ɵinj":C}),C({"ɵprovFallback":C}),C({ngInjectableDef:C}));C({ngInjectorDef:C});
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function S(e){if("string"==typeof e)return e;if(Array.isArray(e))return"["+e.map(S).join(", ")+"]";if(null==e)return""+e;if(e.overriddenName)return""+e.overriddenName;if(e.name)return""+e.name;const t=e.toString();if(null==t)return""+t;const n=t.indexOf("\n");return-1===n?t:t.substring(0,n)}function j(e,t){return null==e||""===e?null===t?"":t:null==t||""===t?e:e+" "+t}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const O=C({__forward_ref__:C});function A(e){return e.__forward_ref__=A,e.toString=function(){return S(this())},e}function N(e){return P(e)?e():e}function P(e){return"function"==typeof e&&e.hasOwnProperty(O)&&e.__forward_ref__===A}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const V="undefined"!=typeof globalThis&&globalThis,R="undefined"!=typeof window&&window,H="undefined"!=typeof self&&"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&self,F=V||void 0!==e&&e||R||H;
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var L,$,B;!function(e){e[e.Token=0]="Token",e[e.Attribute=1]="Attribute",e[e.ChangeDetectorRef=2]="ChangeDetectorRef",e[e.Invalid=3]="Invalid"}(L||(L={})),function(e){e[e.Directive=0]="Directive",e[e.Component=1]="Component",e[e.Injectable=2]="Injectable",e[e.Pipe=3]="Pipe",e[e.NgModule=4]="NgModule"}($||($={})),function(e){e[e.Emulated=0]="Emulated",e[e.Native=1]="Native",e[e.None=2]="None",e[e.ShadowDom=3]="ShadowDom"}(B||(B={}));
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const Z=C({"ɵcmp":C}),z=(C({"ɵdir":C}),C({"ɵpipe":C}),C({"ɵmod":C}),C({"ɵloc":C}),C({"ɵfac":C})),U=C({__NG_ELEMENT_ID__:C});function W(){return!("undefined"!=typeof ngDevMode&&!ngDevMode)&&("object"!=typeof ngDevMode&&
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function(){const e="undefined"!=typeof location?location.toString():"",t={namedConstructors:-1!=e.indexOf("ngDevMode=namedConstructors"),firstCreatePass:0,tNode:0,tView:0,rendererCreateTextNode:0,rendererSetText:0,rendererCreateElement:0,rendererAddEventListener:0,rendererSetAttribute:0,rendererRemoveAttribute:0,rendererSetProperty:0,rendererSetClassName:0,rendererAddClass:0,rendererRemoveClass:0,rendererSetStyle:0,rendererRemoveStyle:0,rendererDestroy:0,rendererDestroyNode:0,rendererMoveNode:0,rendererRemoveNode:0,rendererAppendChild:0,rendererInsertBefore:0,rendererCreateComment:0},n=-1===e.indexOf("ngDevMode=false");F.ngDevMode=n&&t}(),"undefined"!=typeof ngDevMode&&!!ngDevMode)}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function q(e,t){"number"!=typeof e&&te(t,typeof e,"number","===")}function K(e,t){"string"!=typeof e&&te(t,null===e?"null":typeof e,"string","===")}function Q(e,t,n){e!=t&&te(n,e,t,"==")}function Y(e,t,n){e==t&&te(n,e,t,"!=")}function G(e,t,n){e!==t&&te(n,e,t,"===")}function J(e,t,n){e<t||te(n,e,t,"<")}function X(e,t,n){e>t||te(n,e,t,">")}function ee(e,t){null==e&&te(t,e,null,"!=")}function te(e,t,n,r){throw new Error("ASSERTION ERROR: "+e+(null==r?"":` [Expected=> ${n} ${r} ${t} <=Actual]`))}function ne(e){Q("undefined"!=typeof Node&&e instanceof Node||"object"==typeof e&&null!=e&&"WebWorkerRenderNode"===e.constructor.name,!0,"The provided value must be an instance of a DOM Node but got "+S(e))}function re(e,t){const n=e?e.length:0;J(t,n,`Index expected to be less than ${n} but got ${t}`)}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class oe{constructor(e,t){this._desc=e,this.ngMetadataName="InjectionToken",this.ɵprov=void 0,"number"==typeof t?this.__NG_ELEMENT_ID__=t:void 0!==t&&(this.ɵprov=k({token:this,providedIn:t.providedIn||"root",factory:t.factory}))}toString(){return"InjectionToken "+this._desc}}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const ie=new oe("INJECTOR",-1),se={},ae=/\n/gm,ue=C({provide:String,useValue:C});let ce,le=void 0;function de(e){const t=le;return le=e,t}function he(e){const t=ce;return ce=e,t}function fe(e,t=x.Default){if(void 0===le)throw new Error("inject() must be called from an injection context");return null===le?ge(e,void 0,t):le.get(e,t&x.Optional?null:void 0,t)}function pe(e,t=x.Default){return(ce||fe)(N(e),t)}function ge(e,t,n){const r=M(e);if(r&&"root"==r.providedIn)return void 0===r.value?r.value=r.factory():r.value;if(n&x.Optional)return null;if(void 0!==t)return t;throw new Error(`Injector: NOT_FOUND [${S(e)}]`)}function ye(e){const t=[];for(let n=0;n<e.length;n++){const r=N(e[n]);if(Array.isArray(r)){if(0===r.length)throw new Error("Arguments array must have arguments.");let e=void 0,n=x.Default;for(let t=0;t<r.length;t++){const o=r[t];o instanceof _||"Optional"===o.ngMetadataName||o===_?n|=x.Optional:o instanceof m||"SkipSelf"===o.ngMetadataName||o===m?n|=x.SkipSelf:o instanceof v||"Self"===o.ngMetadataName||o===v?n|=x.Self:e=o instanceof y||o===y?o.token:o}t.push(pe(e,n))}else t.push(pe(r))}return t}class _e{get(e,t=se){if(t===se){const t=new Error(`NullInjectorError: No provider for ${S(e)}!`);throw t.name="NullInjectorError",t}return t}}function ve(e,t,n,r){const o=e.ngTempTokenPath;throw t.__source&&o.unshift(t.__source),e.message=me("\n"+e.message,o,n,r),e.ngTokenPath=o,e.ngTempTokenPath=null,e}function me(e,t,n,r=null){e=e&&"\n"===e.charAt(0)&&"ɵ"==e.charAt(1)?e.substr(2):e;let o=S(t);if(Array.isArray(t))o=t.map(S).join(" -> ");else if("object"==typeof t){let e=[];for(let n in t)if(t.hasOwnProperty(n)){let r=t[n];e.push(n+":"+("string"==typeof r?JSON.stringify(r):S(r)))}o=`{${e.join(", ")}}`}return`${n}${r?"("+r+")":""}[${o}]: ${e.replace(ae,"\n  ")}`}
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
class be{}function we(e,t){const n=[];for(let r=0;r<e;r++)n.push(t);return n}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var xe,Ce,ke;!function(e){e[e.OnPush=0]="OnPush",e[e.Default=1]="Default"}(xe||(xe={})),function(e){e[e.CheckOnce=0]="CheckOnce",e[e.Checked=1]="Checked",e[e.CheckAlways=2]="CheckAlways",e[e.Detached=3]="Detached",e[e.Errored=4]="Errored",e[e.Destroyed=5]="Destroyed"}(Ce||(Ce={})),function(e){e[e.Emulated=0]="Emulated",e[e.Native=1]="Native",e[e.None=2]="None",e[e.ShadowDom=3]="ShadowDom"}(ke||(ke={}));
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const Ee={},Me=[];("undefined"==typeof ngDevMode||ngDevMode)&&W()&&(Object.freeze(Ee),Object.freeze(Me))
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */;function De(e){return e[Z]||null}function Ie(e,t){const n=e.hasOwnProperty(z);if(!n&&!0===t&&ngDevMode)throw new Error(`Type ${S(e)} does not have 'ɵfac' property.`);return n?e[z]:null}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const Te=["Root","Component","Embedded"];
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function Se(e){return Array.isArray(e)&&"object"==typeof e[1]}function je(e){return Array.isArray(e)&&!0===e[1]}function Oe(e){return 2==(2&e.flags)}function Ae(e){return null!==e.template}function Ne(e){return 0!=(512&e[2])}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function Pe(e,t){Ve(e,t[1])}function Ve(e,t){ee(e,"TNode must be defined"),e.hasOwnProperty("tView_")&&Q(e.tView_,t,"This TNode does not belong to this TView.")}function Re(e,t="Type passed in is not ComponentType, it does not have 'ɵcmp' property."){De(e)||te(t)}function He(e){ee(e,"LContainer must be defined"),Q(je(e),!0,"Expecting LContainer")}function Fe(e){e&&Q(Se(e),!0,"Expecting LView or undefined or null")}function Le(e){ee(e,"LView must be defined"),Q(Se(e),!0,"Expecting LView")}function $e(e,t){Q(e.firstCreatePass,!0,t||"Should only be called in first create pass.")}function Be(e,t){Ze(e[1].expandoStartIndex,e.length,t)}function Ze(e,t,n){e<=n&&n<t||te(`Index out of range (expecting ${e} <= ${n} < ${t})`)}function ze(e,t){Be(e,t),Be(e,t+8),q(e[t+0],"injectorIndex should point to a bloom filter"),q(e[t+1],"injectorIndex should point to a bloom filter"),q(e[t+2],"injectorIndex should point to a bloom filter"),q(e[t+3],"injectorIndex should point to a bloom filter"),q(e[t+4],"injectorIndex should point to a bloom filter"),q(e[t+5],"injectorIndex should point to a bloom filter"),q(e[t+6],"injectorIndex should point to a bloom filter"),q(e[t+7],"injectorIndex should point to a bloom filter"),q(e[t+8],"injectorIndex should point to parent injector")}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function Ue(e){return"string"==typeof e?e:null==e?"":""+e}function We(e){return"function"==typeof e?e.name||e.toString():"object"==typeof e&&null!=e&&"function"==typeof e.type?e.type.name||e.type.toString():Ue(e)}const qe=("undefined"!=typeof requestAnimationFrame&&requestAnimationFrame||setTimeout).bind(F);function Ke(e,t){const n=t?`. Dependency path: ${t.join(" > ")} > ${e}`:"";throw new Error(`Circular dependency in DI detected for ${e}${n}`)}function Qe(e,t){const n=t?" in "+t:"";throw new Error(`No provider for ${We(e)} found${n}`)}
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
 */function Ge(){return Je}function Je(e){return e.type.prototype.ngOnChanges&&(e.setInput=et),Xe}function Xe(){const e=tt(this),t=null==e?void 0:e.current;if(t){const n=e.previous;if(n===Ee)e.previous=t;else for(let e in t)n[e]=t[e];e.current=null,this.ngOnChanges(t)}}function et(e,t,n,r){const o=tt(e)||function(e,t){return e.__ngSimpleChanges__=t}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */(e,{previous:Ee,current:null}),i=o.current||(o.current={}),s=o.previous,a=this.declaredInputs[n],u=s[a];i[a]=new Ye(u&&u.currentValue,t,s===Ee),e[r]=t}Ge.ngInherit=!0;function tt(e){return e.__ngSimpleChanges__||null}
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
 */var ot;function it(e){return!!e.listen}!function(e){e[e.Important=1]="Important",e[e.DashCase=2]="DashCase"}(ot||(ot={}));const st={createRenderer:(e,t)=>rt()};
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function at(e){for(;Array.isArray(e);)e=e[0];return e}function ut(e,t){ngDevMode&&Pe(e,t),ngDevMode&&re(t,e.index);const n=at(t[e.index]);return ngDevMode&&!it(t[11])&&ne(n),n}function ct(e,t){return ngDevMode&&X(t,-1,"wrong index for TNode"),ngDevMode&&J(t,e.data.length,"wrong index for TNode"),e.data[t+20]}function lt(e,t){ngDevMode&&re(t,e);const n=t[e];return Se(n)?n:n[0]}function dt(e){return ngDevMode&&ee(e,"Target expected"),e.__ngContext__||null}function ht(e){const t=dt(e);return t?Array.isArray(t)?t:t.lView:null}function ft(e){return 4==(4&e[2])}function pt(e){return 128==(128&e[2])}function gt(e){e[18]=0}function yt(e,t){e[5]+=t;let n=e,r=e[3];for(;null!==r&&(1===t&&1===n[5]||-1===t&&0===n[5]);)r[5]+=t,n=r,r=r[3]}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const _t={lFrame:jt(null),bindingsEnabled:!0,isInCheckNoChangesMode:!1};function vt(){return _t.lFrame.tView}function mt(){return _t.lFrame.currentTNode}function bt(e,t){ngDevMode&&Ve(e,_t.lFrame.tView),_t.lFrame.currentTNode=e,_t.lFrame.isParent=t}function wt(){return _t.lFrame.isParent}function xt(){return _t.isInCheckNoChangesMode}function Ct(e){_t.isInCheckNoChangesMode=e}function kt(e){return _t.lFrame.bindingIndex=e}function Et(e,t){const n=_t.lFrame;n.bindingIndex=n.bindingRootIndex=e,Mt(t)}function Mt(e){_t.lFrame.currentDirectiveIndex=e}function Dt(e){_t.lFrame.currentQueryIndex=e}function It(e,t){ngDevMode&&Fe(e);const n=St();_t.lFrame=n,n.currentTNode=t,n.lView=e}function Tt(e){ngDevMode&&Fe(e);const t=St();ngDevMode&&(Q(t.isParent,!0,"Expected clean LFrame"),Q(t.lView,null,"Expected clean LFrame"),Q(t.tView,null,"Expected clean LFrame"),Q(t.selectedIndex,0,"Expected clean LFrame"),Q(t.elementDepthCount,0,"Expected clean LFrame"),Q(t.currentDirectiveIndex,-1,"Expected clean LFrame"),Q(t.currentNamespace,null,"Expected clean LFrame"),Q(t.bindingRootIndex,-1,"Expected clean LFrame"),Q(t.currentQueryIndex,0,"Expected clean LFrame"));const n=e[1];_t.lFrame=t,ngDevMode&&n.firstChild&&Ve(n.firstChild,n),t.currentTNode=n.firstChild,t.lView=e,t.tView=n,t.contextLView=e,t.bindingIndex=n.bindingStartIndex}function St(){const e=_t.lFrame,t=null===e?null:e.child;return null===t?jt(e):t}function jt(e){const t={currentTNode:null,isParent:!0,lView:null,tView:null,selectedIndex:0,contextLView:null,elementDepthCount:0,currentNamespace:null,currentDirectiveIndex:-1,bindingRootIndex:-1,bindingIndex:-1,currentQueryIndex:0,parent:e,child:null};return null!==e&&(e.child=t),t}function Ot(){const e=_t.lFrame;return _t.lFrame=e.parent,e.currentTNode=null,e.lView=null,e}const At=Ot;function Nt(){const e=Ot();e.isParent=!0,e.tView=null,e.selectedIndex=0,e.contextLView=null,e.elementDepthCount=0,e.currentDirectiveIndex=-1,e.currentNamespace=null,e.bindingRootIndex=-1,e.bindingIndex=-1,e.currentQueryIndex=0}function Pt(){return _t.lFrame.selectedIndex}function Vt(e){_t.lFrame.selectedIndex=e}function Rt(e,t){ngDevMode&&$e(e);for(let n=t.directiveStart,r=t.directiveEnd;n<r;n++){const t=e.data[n].type.prototype,{ngAfterContentInit:r,ngAfterContentChecked:o,ngAfterViewInit:i,ngAfterViewChecked:s,ngOnDestroy:a}=t;r&&(e.contentHooks||(e.contentHooks=[])).push(-n,r),o&&((e.contentHooks||(e.contentHooks=[])).push(n,o),(e.contentCheckHooks||(e.contentCheckHooks=[])).push(n,o)),i&&(e.viewHooks||(e.viewHooks=[])).push(-n,i),s&&((e.viewHooks||(e.viewHooks=[])).push(n,s),(e.viewCheckHooks||(e.viewCheckHooks=[])).push(n,s)),null!=a&&(e.destroyHooks||(e.destroyHooks=[])).push(n,a)}}function Ht(e,t,n){$t(e,t,3,n)}function Ft(e,t,n,r){ngDevMode&&Y(n,3,"Init pre-order hooks should not be called more than once"),(3&e[2])===n&&$t(e,t,n,r)}function Lt(e,t){ngDevMode&&Y(t,3,"Init hooks phase should not be incremented after all init hooks have been run.");let n=e[2];(3&n)===t&&(n&=2047,n+=1,e[2]=n)}function $t(e,t,n,r){ngDevMode&&Q(xt(),!1,"Hooks should never be run when in check no changes mode.");const o=null!=r?r:-1;let i=0;for(let s=void 0!==r?65535&e[18]:0;s<t.length;s++){if("number"==typeof t[s+1]){if(i=t[s],null!=r&&i>=r)break}else{t[s]<0&&(e[18]+=65536),(i<o||-1==o)&&(Bt(e,n,t,s),e[18]=(4294901760&e[18])+s+2),s++}}}function Bt(e,t,n,r){const o=n[r]<0,i=n[r+1],s=e[o?-n[r]:n[r]];if(o){e[2]>>11<e[18]>>16&&(3&e[2])===t&&(e[2]+=2048,i.call(s))}else i.call(s)}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class Zt{constructor(e,t,n){this.factory=e,this.resolving=!1,ngDevMode&&ee(e,"Factory not specified"),ngDevMode&&Q(typeof e,"function","Expected factory function."),this.canSeeViewProviders=t,this.injectImpl=n}}const zt=["Container","Projection","Element","ElementContainer","IcuContainer"];function Ut(e,t,n){ee(e,"should be called with a TNode");Q(t.some(t=>e.type===t),!0,null!=n?n:`Should be one of ${t.map(Wt).join(", ")} but got ${Wt(e.type)}`)}function Wt(e){return zt[e]||"<unknown>"}function qt(e,t,n){const r=it(e);let o=0;for(;o<n.length;){const i=n[o];if("number"==typeof i){if(0!==i)break;o++;const s=n[o++],a=n[o++],u=n[o++];ngDevMode&&ngDevMode.rendererSetAttribute++,r?e.setAttribute(t,a,u,s):t.setAttributeNS(s,a,u)}else{const s=i,a=n[++o];ngDevMode&&ngDevMode.rendererSetAttribute++,Kt(s)?r&&e.setProperty(t,s,a):r?e.setAttribute(t,s,a):t.setAttribute(s,a),o++}}return o}function Kt(e){return 64===e.charCodeAt(0)}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function Qt(e){return-1!==e}function Yt(e){ngDevMode&&q(e,"Number expected"),ngDevMode&&Y(e,-1,"Not a valid state.");return ngDevMode&&X(32767&e,20,"Parent injector must be pointing past HEADER_OFFSET."),32767&e}function Gt(e,t){let n=e>>16;let r=t;for(;n>0;)r=r[15],n--;return r}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */let Jt=!0;function Xt(e){const t=Jt;return Jt=e,t}let en=0;function tn(e,t){const n=rn(e,t);if(-1!==n)return n;const r=t[1];r.firstCreatePass&&(e.injectorIndex=t.length,nn(r.data,e),nn(t,null),nn(r.blueprint,null));const o=on(e,t),i=e.injectorIndex;if(Qt(o)){const e=Yt(o),n=Gt(o,t),r=n[1].data;for(let o=0;o<8;o++)t[i+o]=n[e+o]|r[e+o]}return t[i+8]=o,i}function nn(e,t){e.push(0,0,0,0,0,0,0,0,t)}function rn(e,t){return-1===e.injectorIndex||e.parent&&e.parent.injectorIndex===e.injectorIndex||null===t[e.injectorIndex+8]?-1:(ngDevMode&&re(t,e.injectorIndex),e.injectorIndex)}function on(e,t){if(e.parent&&-1!==e.parent.injectorIndex)return e.parent.injectorIndex;let n=0,r=null,o=t;for(;null!==o;){const e=o[1],t=e.type;if(2===t?(ngDevMode&&ee(e.declTNode,"Embedded TNodes should have declaration parents."),r=e.declTNode):1===t?r=o[6]:(ngDevMode&&Q(e.type,0,"Root type expected"),r=null),null===r)return-1;if(ngDevMode&&r&&Pe(r,o[15]),n++,o=o[15],-1!==r.injectorIndex)return r.injectorIndex|n<<16}return-1}function sn(e,t,n){!function(e,t,n){let r;ngDevMode&&Q(t.firstCreatePass,!0,"expected firstCreatePass to be true"),"string"==typeof n?r=n.charCodeAt(0)||0:n.hasOwnProperty(U)&&(r=n[U]),null==r&&(r=n[U]=en++);const o=255&r,i=1<<o,s=128&o,a=64&o,u=32&o,c=t.data;s?a?u?c[e+7]|=i:c[e+6]|=i:u?c[e+5]|=i:c[e+4]|=i:a?u?c[e+3]|=i:c[e+2]|=i:u?c[e+1]|=i:c[e]|=i}(e,t,n)}function an(e,t,n,r=x.Default,o){if(null!==e){const o=function(e){if(ngDevMode&&ee(e,"token must be defined"),"string"==typeof e)return e.charCodeAt(0)||0;const t=e.hasOwnProperty(U)?e[U]:void 0;return"number"==typeof t&&t>0?255&t:t}(n);if("function"==typeof o){It(t,e);try{const e=o();if(null!=e||r&x.Optional)return e;Qe(n)}finally{At()}}else if("number"==typeof o){if(-1===o)return new pn(e,t);let i=null,s=rn(e,t),a=-1,u=r&x.Host?t[16][6]:null;for((-1===s||r&x.SkipSelf)&&(a=-1===s?on(e,t):t[s+8],-1!==a&&fn(r,!1)?(i=t[1],s=Yt(a),t=Gt(a,t)):s=-1);-1!==s;){ngDevMode&&ze(t,s);const e=t[1];if(ngDevMode&&Pe(e.data[s+8],t),hn(o,s,e.data)){const e=cn(s,t,n,i,r,u);if(e!==un)return e}a=t[s+8],-1!==a&&fn(r,t[1].data[s+8]===u)&&hn(o,s,t)?(i=e,s=Yt(a),t=Gt(a,t)):s=-1}}}if(r&x.Optional&&void 0===o&&(o=null),0==(r&(x.Self|x.Host))){const e=t[9],i=he(void 0);try{return e?e.get(n,o,r&x.Optional):ge(n,o,r&x.Optional)}finally{he(i)}}if(r&x.Optional)return o;Qe(n,"NodeInjector")}const un={};function cn(e,t,n,r,o,i){const s=t[1],a=s.data[e+8],u=ln(a,s,n,null==r?Oe(a)&&Jt:r!=s&&2===a.type,o&x.Host&&i===a);return null!==u?dn(t,s,u,a):un}function ln(e,t,n,r,o){const i=e.providerIndexes,s=t.data,a=1048575&i,u=e.directiveStart,c=e.directiveEnd,l=i>>20,d=o?a+l:c;for(let e=r?a:a+l;e<d;e++){const t=s[e];if(e<u&&n===t||e>=u&&t.type===n)return e}if(o){const e=s[u];if(e&&Ae(e)&&e.type===n)return u}return null}function dn(e,t,n,r){let o=e[n];const i=t.data;if(o instanceof Zt){const s=o;s.resolving&&Ke(We(i[n]));const a=Xt(s.canSeeViewProviders);s.resolving=!0;const u=s.injectImpl?he(s.injectImpl):null;It(e,r);try{o=e[n]=s.factory(void 0,i,e,r),t.firstCreatePass&&n>=r.directiveStart&&(ngDevMode&&function(e){void 0!==e.type&&null!=e.selectors&&void 0!==e.inputs||te("Expected a DirectiveDef/ComponentDef and this object does not seem to have the expected shape.")}(i[n]),
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function(e,t,n){ngDevMode&&$e(n);const{ngOnChanges:r,ngOnInit:o,ngDoCheck:i}=t.type.prototype;if(r){const r=Je(t);(n.preOrderHooks||(n.preOrderHooks=[])).push(e,r),(n.preOrderCheckHooks||(n.preOrderCheckHooks=[])).push(e,r)}o&&(n.preOrderHooks||(n.preOrderHooks=[])).push(0-e,o),i&&((n.preOrderHooks||(n.preOrderHooks=[])).push(e,i),(n.preOrderCheckHooks||(n.preOrderCheckHooks=[])).push(e,i))}(n,i[n],t))}finally{null!==u&&he(u),Xt(a),s.resolving=!1,At()}}return o}function hn(e,t,n){const r=1<<e,o=64&e,i=32&e;let s;return s=128&e?o?i?n[t+7]:n[t+6]:i?n[t+5]:n[t+4]:o?i?n[t+3]:n[t+2]:i?n[t+1]:n[t],!!(s&r)}function fn(e,t){return!(e&x.Self||e&x.Host&&t)}class pn{constructor(e,t){this._tNode=e,this._lView=t}get(e,t){return an(this._tNode,this._lView,e,void 0,t)}}function gn(e){return e.ngDebugContext}function yn(e){return e.ngOriginalError}function _n(e,...t){e.error(...t)}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class vn{constructor(){this._console=console}handleError(e){const t=this._findOriginalError(e),n=this._findContext(e),r=function(e){return e.ngErrorLogger||_n}(e);r(this._console,"ERROR",e),t&&r(this._console,"ORIGINAL ERROR",t),n&&r(this._console,"ERROR CONTEXT",n)}_findContext(e){return e?gn(e)?gn(e):this._findContext(yn(e)):null}_findOriginalError(e){let t=yn(e);for(;t&&yn(t);)t=yn(t);return t}}
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
let mn=!0,bn=!1;function wn(){return bn=!0,mn}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function xn(e){const t={};for(const n of e.split(","))t[n]=!0;return t}function Cn(...e){const t={};for(const n of e)for(const e in n)n.hasOwnProperty(e)&&(t[e]=!0);return t}const kn=xn("area,br,col,hr,img,wbr"),En=xn("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),Mn=xn("rp,rt"),Dn=Cn(Mn,En),In=Cn(En,xn("address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul")),Tn=Cn(Mn,xn("a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video")),Sn=(Cn(kn,In,Tn,Dn),xn("background,cite,href,itemtype,longdesc,poster,src,xlink:href")),jn=xn("srcset"),On=xn("abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width"),An=xn("aria-activedescendant,aria-atomic,aria-autocomplete,aria-busy,aria-checked,aria-colcount,aria-colindex,aria-colspan,aria-controls,aria-current,aria-describedby,aria-details,aria-disabled,aria-dropeffect,aria-errormessage,aria-expanded,aria-flowto,aria-grabbed,aria-haspopup,aria-hidden,aria-invalid,aria-keyshortcuts,aria-label,aria-labelledby,aria-level,aria-live,aria-modal,aria-multiline,aria-multiselectable,aria-orientation,aria-owns,aria-placeholder,aria-posinset,aria-pressed,aria-readonly,aria-relevant,aria-required,aria-roledescription,aria-rowcount,aria-rowindex,aria-rowspan,aria-selected,aria-setsize,aria-sort,aria-valuemax,aria-valuemin,aria-valuenow,aria-valuetext");Cn(Sn,jn,On,An),xn("script,style,template");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var Nn;
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
 */!function(e){e[e.NONE=0]="NONE",e[e.HTML=1]="HTML",e[e.STYLE=2]="STYLE",e[e.SCRIPT=3]="SCRIPT",e[e.URL=4]="URL",e[e.RESOURCE_URL=5]="RESOURCE_URL"}(Nn||(Nn={}));function Vn(e,t){e.__ngContext__=t}function Rn(e){return 0==(1&e)}function Hn(e,t){return e?":not("+t.trim()+")":t}function Fn(e){let t=e[0],n=1,r=2,o="",i=!1;for(;n<e.length;){let s=e[n];if("string"==typeof s)if(2&r){const t=e[++n];o+="["+s+(t.length>0?'="'+t+'"':"")+"]"}else 8&r?o+="."+s:4&r&&(o+=" "+s);else""===o||Rn(s)||(t+=Hn(i,o),o=""),r=s,i=i||!Rn(r);n++}return""!==o&&(t+=Hn(i,o)),t}
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
 */function $n(e){ngDevMode&&Le(e);const t=e[3];return je(t)?t[3]:t}function Bn(e){return zn(e[13])}function Zn(e){return zn(e[4])}function zn(e){for(;null!==e&&!je(e);)e=e[4];return e}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function Un(e,t,n,r){if(ngDevMode&&X(n,-1,"Invalid index"),ngDevMode&&re(t,n+20),!r){if(3==(3&t[2])){const r=e.preOrderCheckHooks;null!==r&&Ht(t,r,n)}else{const r=e.preOrderHooks;null!==r&&Ft(t,r,0,n)}}Vt(n)}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function Wn(e){return ngDevMode&&q(e,"expected number"),e>>17&32767}function qn(e){return ngDevMode&&q(e,"expected number"),2==(2&e)}function Kn(e){return ngDevMode&&q(e,"expected number"),(131068&e)>>2}function Qn(e){return ngDevMode&&q(e,"expected number"),1==(1&e)}
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
const Gn=("undefined"==typeof ngDevMode||!!ngDevMode)&&W();let Jn,Xn,er;function tr(e){return function(e,t){switch(e){case 0:return void 0===er&&(er=new(Pn("LRootView"))),er;case 1:void 0===Jn&&(Jn=new Map);let e=Jn.get(t);return void 0===e&&(e=new(Pn("LComponentView"+nr(t))),Jn.set(t,e)),e;case 2:void 0===Xn&&(Xn=new Map);let n=Xn.get(t);return void 0===n&&(n=new(Pn("LEmbeddedView"+nr(t))),Xn.set(t,n)),n}throw new Error("unreachable code")}(e.type,e.template&&e.template.name).concat(e.blueprint)}function nr(e){if(null==e)return"";const t=e.lastIndexOf("_Template");return"_"+(-1===t?e:e.substr(0,t))}const rr=class{constructor(e,t,n,r,o,i,s,a,u,c,l,d,h,f,p,g,y,_,v,m,b,w,x,C,k,E,M,D,I,T,S){this.tView_=e,this.type=t,this.index=n,this.injectorIndex=r,this.directiveStart=o,this.directiveEnd=i,this.directiveStylingLast=s,this.propertyBindings=a,this.flags=u,this.providerIndexes=c,this.tagName=l,this.attrs=d,this.mergedAttrs=h,this.localNames=f,this.initialInputs=p,this.inputs=g,this.outputs=y,this.tViews=_,this.next=v,this.projectionNext=m,this.child=b,this.parent=w,this.projection=x,this.styles=C,this.stylesWithoutHost=k,this.residualStyles=E,this.classes=M,this.classesWithoutHost=D,this.residualClasses=I,this.classBindings=T,this.styleBindings=S}debugNodeInjectorPath(e){const t=[];let n=rn(this,e);for(ngDevMode&&ze(e,n);-1!==n;){const r=e[1].data[n+8];t.push(_r(r,e));const o=e[n+8];-1===o?n=-1:(n=Yt(o),e=Gt(o,e))}return t}get type_(){return zt[this.type]||`TNodeType.?${this.type}?`}get flags_(){const e=[];return 16&this.flags&&e.push("TNodeFlags.hasClassInput"),8&this.flags&&e.push("TNodeFlags.hasContentQuery"),32&this.flags&&e.push("TNodeFlags.hasStyleInput"),128&this.flags&&e.push("TNodeFlags.hasHostBindings"),2&this.flags&&e.push("TNodeFlags.isComponentHost"),1&this.flags&&e.push("TNodeFlags.isDirectiveHost"),64&this.flags&&e.push("TNodeFlags.isDetached"),4&this.flags&&e.push("TNodeFlags.isProjected"),e.join("|")}get template_(){const e=[];if(e.push("<",this.tagName||this.type_),this.attrs)for(let t=0;t<this.attrs.length;){const n=this.attrs[t++];if("number"==typeof n)break;const r=this.attrs[t++];e.push(" ",n,'="',r,'"')}return e.push(">"),ir(this.child,e),e.push("</",this.tagName||this.type_,">"),e.join("")}get styleBindings_(){return or(this,!1)}get classBindings_(){return or(this,!0)}get providerIndexStart_(){return 1048575&this.providerIndexes}get providerIndexEnd_(){return this.providerIndexStart_+(this.providerIndexes>>>20)}};function or(e,t){const n=e.tView_.data,r=[],o=t?e.classBindings:e.styleBindings,i=Wn(o),s=Kn(o);let a=0!==s,u=a?s:i;for(;0!==u;){const e=n[u],t=n[u+1];r.unshift({key:e,index:u,isTemplate:a,prevDuplicate:qn(t),nextDuplicate:Qn(t),nextIndex:Kn(t),prevIndex:Wn(t)}),u===i&&(a=!1),u=Wn(t)}return r.push((t?e.residualClasses:e.residualStyles)||null),r}function ir(e,t){for(;e;)t.push(e.template_),e=e.next}const sr=Gn&&Pn("TViewData")||null;let ar;const ur=Gn&&Pn("LViewBlueprint")||null,cr=(Gn&&Pn("MatchesArray"),Gn&&Pn("TViewComponents")||null),lr=(Gn&&Pn("TNodeLocalNames"),Gn&&Pn("TNodeInitialInputs"),Gn&&Pn("TNodeInitialData"),Gn&&Pn("LCleanup")||null),dr=Gn&&Pn("TCleanup")||null;function hr(e){if(e){const t=e.debug;return ee(t,"Object does not have a debug representation."),t}return e}function fr(e,t=!1){const n=at(e);if(n)switch(n.nodeType){case Node.TEXT_NODE:return n.textContent;case Node.COMMENT_NODE:return`\x3c!--${n.textContent}--\x3e`;case Node.ELEMENT_NODE:const e=n.outerHTML;if(t)return e;{const t=">"+n.innerHTML+"<";return e.split(t)[0]+">"}}return null}class pr{constructor(e){this._raw_lView=e}get flags(){const e=this._raw_lView[2];return{__raw__flags__:e,initPhaseState:3&e,creationMode:!!(4&e),firstViewPass:!!(8&e),checkAlways:!!(16&e),dirty:!!(64&e),attached:!!(128&e),destroyed:!!(256&e),isRoot:!!(512&e),indexWithinInitPhase:e>>11}}get parent(){return hr(this._raw_lView[3])}get hostHTML(){return fr(this._raw_lView[0],!0)}get html(){return(this.nodes||[]).map(e=>fr(e.native,!0)).join("")}get context(){return this._raw_lView[8]}get nodes(){const e=this._raw_lView;return yr(e[1].firstChild,e)}get tView(){return this._raw_lView[1]}get cleanup(){return this._raw_lView[7]}get injector(){return this._raw_lView[9]}get rendererFactory(){return this._raw_lView[10]}get renderer(){return this._raw_lView[11]}get sanitizer(){return this._raw_lView[12]}get childHead(){return hr(this._raw_lView[13])}get next(){return hr(this._raw_lView[4])}get childTail(){return hr(this._raw_lView[14])}get declarationView(){return hr(this._raw_lView[15])}get queries(){return this._raw_lView[19]}get tHost(){return this._raw_lView[6]}get decls(){return gr(this.tView,this._raw_lView,20,this.tView.bindingStartIndex)}get vars(){const e=this.tView;return gr(e,this._raw_lView,e.bindingStartIndex,e.i18nStartIndex)}get i18n(){const e=this.tView;return gr(e,this._raw_lView,e.i18nStartIndex,e.expandoStartIndex)}get expando(){this.tView;return gr(this.tView,this._raw_lView,this.tView.expandoStartIndex,this._raw_lView.length)}get childViews(){const e=[];let t=this.childHead;for(;t;)e.push(t),t=t.next;return e}}function gr(e,t,n,r){let o=[];for(let i=n;i<r;i++)o.push({index:i,t:e.data[i],l:t[i]});return{start:n,end:r,length:r-n,content:o}}function yr(e,t){if(e){const n=[];let r=e;for(;r;)n.push(_r(r,t)),r=r.next;return n}return[]}function _r(e,t){const n=at(t[e.index]),r=[],o=[],i=t[1];for(let n=e.directiveStart;n<e.directiveEnd;n++){const e=i.data[n];r.push(e.type),o.push(t[n])}return{html:fr(n),type:zt[e.type],native:n,children:yr(e.child,t),factories:r,instances:o,injector:vr(e,i,t)}}function vr(e,t,n){const r=[];for(let n=e.providerIndexStart_;n<e.providerIndexEnd_;n++)r.push(t.data[n]);const o=[];for(let n=e.providerIndexEnd_;n<e.directiveEnd;n++)o.push(t.data[n]);return{bloom:br(n,e.injectorIndex),cumulativeBloom:br(t.data,e.injectorIndex),providers:o,viewProviders:r,parentInjectorIndex:n[e.providerIndexStart_-1]}}function mr(e,t){const n=e[t];if("number"!=typeof n)return"????????";const r="00000000"+n.toString(2);return r.substring(r.length-8)}function br(e,t){return`${mr(e,t+7)}_${mr(e,t+6)}_${mr(e,t+5)}_${mr(e,t+4)}_${mr(e,t+3)}_${mr(e,t+2)}_${mr(e,t+1)}_${mr(e,t+0)}`}const wr=Promise.resolve(null);function xr(e,t){const n=e.contentQueries;if(null!==n)for(let r=0;r<n.length;r+=2){const o=n[r],i=n[r+1];if(-1!==i){const n=e.data[i];ngDevMode&&ee(n.contentQueries,"contentQueries function should be defined"),Dt(o),n.contentQueries(2,t[i],i)}}}function Cr(e,t,n){return it(t)?t.createElement(e,n):null===n?t.createElement(e):t.createElementNS(n,e)}function kr(e,t,n,r,o,i,s,a,u,c){const l=ngDevMode?tr(t):t.blueprint.slice();return l[0]=o,l[2]=140|r,gt(l),ngDevMode&&t.declTNode&&e&&Pe(t.declTNode,e),l[3]=l[15]=e,l[8]=n,l[10]=s||e&&e[10],ngDevMode&&ee(l[10],"RendererFactory is required"),l[11]=a||e&&e[11],ngDevMode&&ee(l[11],"Renderer is required"),l[12]=u||e&&e[12]||null,l[9]=c||e&&e[9]||null,l[6]=i,ngDevMode&&Q(2!=t.type||null!==e,!0,"Embedded views must have parentLView"),l[16]=2==t.type?e[16]:l,ngDevMode&&function(e){Yn(e,new pr(e))}(l),l}function Er(e,t,n,r,o){const i=t+20,s=e.data[i]||function(e,t,n,r,o){const i=mt(),s=wt(),a=s?i:i&&i.parent,u=e.data[t]=function(e,t,n,r,o,i){ngDevMode&&ngDevMode.tNode++;let s=t?t.injectorIndex:-1;const a=ngDevMode?new rr(e,n,r,s,-1,-1,-1,null,0,0,o,i,null,null,void 0,null,null,null,null,null,null,t,null,null,null,void 0,null,null,void 0,0,0):{type:n,index:r,injectorIndex:s,directiveStart:-1,directiveEnd:-1,directiveStylingLast:-1,propertyBindings:null,flags:0,providerIndexes:0,tagName:o,attrs:i,mergedAttrs:null,localNames:null,initialInputs:void 0,inputs:null,outputs:null,tViews:null,next:null,projectionNext:null,child:null,parent:t,projection:null,styles:null,stylesWithoutHost:null,residualStyles:void 0,classes:null,classesWithoutHost:null,residualClasses:void 0,classBindings:0,styleBindings:0};ngDevMode&&Object.seal(a);return a}(e,a,n,t,r,o);null===e.firstChild&&(e.firstChild=u);null!==i&&(s&&null==i.child&&null!==u.parent?i.child=u:s||(i.next=u));return u}(e,i,n,r,o);return bt(s,!0),s}function Mr(e,t,n){ngDevMode&&Q(ft(t),!0,"Should be run in creation mode"),Tt(t);try{const r=e.viewQuery;null!==r&&Qr(1,r,n);const o=e.template;null!==o&&Tr(e,t,o,1,n),e.firstCreatePass&&(e.firstCreatePass=!1),e.staticContentQueries&&xr(e,t),e.staticViewQueries&&Qr(2,e.viewQuery,n);const i=e.components;null!==i&&function(e,t){for(let n=0;n<t.length;n++)Zr(e,t[n])}(t,i)}catch(t){throw e.firstCreatePass&&(e.incompleteFirstPass=!0),t}finally{t[2]&=-5,Nt()}}function Dr(e,t,n,r){ngDevMode&&Q(ft(t),!1,"Should be run in update mode");const o=t[2];if(256==(256&o))return;Tt(t);const i=xt();try{gt(t),kt(e.bindingStartIndex),null!==n&&Tr(e,t,n,2,r);const s=3==(3&o);if(!i)if(s){const n=e.preOrderCheckHooks;null!==n&&Ht(t,n,null)}else{const n=e.preOrderHooks;null!==n&&Ft(t,n,0,null),Lt(t,0)}if(function(e){for(let t=Bn(e);null!==t;t=Zn(t)){if(!t[2])continue;const e=t[9];ngDevMode&&ee(e,"Transplanted View flags set but missing MOVED_VIEWS");for(let t=0;t<e.length;t++){const n=e[t],r=n[3];ngDevMode&&He(r),0==(1024&n[2])&&yt(r,1),n[2]|=1024}}}(t),function(e){for(let t=Bn(e);null!==t;t=Zn(t))for(let e=10;e<t.length;e++){const n=t[e],r=n[1];ngDevMode&&ee(r,"TView must be allocated"),pt(n)&&Dr(r,n,r.template,n[8])}}(t),null!==e.contentQueries&&xr(e,t),!i)if(s){const n=e.contentCheckHooks;null!==n&&Ht(t,n)}else{const n=e.contentHooks;null!==n&&Ft(t,n,1),Lt(t,1)}!function(e,t){ngDevMode&&G(e,t[1],"`LView` is not associated with the `TView`!");try{const n=e.expandoInstructions;if(null!==n){let r=e.expandoStartIndex,o=-1,i=-1;for(let e=0;e<n.length;e++){const s=n[e];if("number"==typeof s)if(s<=0){i=0-s,Vt(i);r+=9+n[++e],o=r}else r+=s;else{if(null!==s){ngDevMode&&J(o,1048576,"Reached the max number of host bindings"),Et(r,o);s(2,t[o])}o++}}}}finally{Vt(-1)}}(e,t);const a=e.components;null!==a&&function(e,t){for(let n=0;n<t.length;n++)Br(e,t[n])}(t,a);const u=e.viewQuery;if(null!==u&&Qr(2,u,r),!i)if(s){const n=e.viewCheckHooks;null!==n&&Ht(t,n)}else{const n=e.viewHooks;null!==n&&Ft(t,n,2),Lt(t,2)}!0===e.firstUpdatePass&&(e.firstUpdatePass=!1),i||(t[2]&=-73),1024&t[2]&&(t[2]&=-1025,yt(t[3],-1))}finally{Nt()}}function Ir(e,t,n,r){const o=t[10],i=!xt(),s=ft(t);try{i&&!s&&o.begin&&o.begin(),s&&Mr(e,t,r),Dr(e,t,n,r)}finally{i&&!s&&o.end&&o.end()}}function Tr(e,t,n,r,o){const i=Pt();try{Vt(-1),2&r&&t.length>20&&Un(e,t,0,xt()),n(r,o)}finally{Vt(i)}}function Sr(e){const t=e.tView;if(null===t||t.incompleteFirstPass){const t=null;return e.tView=jr(1,t,e.template,e.decls,e.vars,e.directiveDefs,e.pipeDefs,e.viewQuery,e.schemas,e.consts)}return t}function jr(e,t,n,r,o,i,s,a,u,c){ngDevMode&&ngDevMode.tView++;const l=20+r,d=l+o,h=function(e,t){const n=ngDevMode?new ur:[];for(let r=0;r<t;r++)n.push(r<e?null:Ln);return n}(l,d),f="function"==typeof c?c():c,p=h[1]=ngDevMode?new class{constructor(e,t,n,r,o,i,s,a,u,c,l,d,h,f,p,g,y,_,v,m,b,w,x,C,k,E,M,D,I,T,S,j){this.type=e,this.blueprint=t,this.template=n,this.queries=r,this.viewQuery=o,this.declTNode=i,this.data=s,this.bindingStartIndex=a,this.expandoStartIndex=u,this.expandoInstructions=c,this.firstCreatePass=l,this.firstUpdatePass=d,this.staticViewQueries=h,this.staticContentQueries=f,this.preOrderHooks=p,this.preOrderCheckHooks=g,this.contentHooks=y,this.contentCheckHooks=_,this.viewHooks=v,this.viewCheckHooks=m,this.destroyHooks=b,this.cleanup=w,this.contentQueries=x,this.components=C,this.directiveRegistry=k,this.pipeRegistry=E,this.firstChild=M,this.schemas=D,this.consts=I,this.incompleteFirstPass=T,this._decls=S,this._vars=j}get template_(){const e=[];return ir(this.firstChild,e),e.join("")}get type_(){return Te[this.type]||`TViewType.?${this.type}?`}get i18nStartIndex(){return 20+this._decls+this._vars}}(e,h,n,null,a,t,(g=h,void 0===ar&&(ar=new sr),ar.concat(g)).fill(null,l),l,d,null,!0,!0,!1,!1,null,null,null,null,null,null,null,null,null,null,"function"==typeof i?i():i,"function"==typeof s?s():s,null,u,f,!1,r,o):{type:e,blueprint:h,template:n,queries:null,viewQuery:a,declTNode:t,data:h.slice().fill(null,l),bindingStartIndex:l,expandoStartIndex:d,expandoInstructions:null,firstCreatePass:!0,firstUpdatePass:!0,staticViewQueries:!1,staticContentQueries:!1,preOrderHooks:null,preOrderCheckHooks:null,contentHooks:null,contentCheckHooks:null,viewHooks:null,viewCheckHooks:null,destroyHooks:null,cleanup:null,contentQueries:null,components:null,directiveRegistry:"function"==typeof i?i():i,pipeRegistry:"function"==typeof s?s():s,firstChild:null,schemas:u,consts:f,incompleteFirstPass:!1};var g;return ngDevMode&&Object.seal(p),p}function Or(e,t){return new Error(`Renderer: ${e} [${We(t)}]`)}function Ar(e,t,n){if(it(e)){const r=n===ke.ShadowDom;return e.selectRootElement(t,r)}let r="string"==typeof t?e.querySelector(t):t;return ngDevMode&&function(e,t){if(!e)throw Or("string"==typeof t?"Host node with selector not found:":"Host node is required:",t)}(r,t),r.textContent="",r}function Nr(e,t,n,r){const o=Gr(t);o.push(n),e.firstCreatePass&&function(e){return e.cleanup||(e.cleanup=ngDevMode?new dr:[])}(e).push(r,o.length-1)}function Pr(e,t){ngDevMode&&$e(e);const n=e.expandoInstructions;n.push(t.hostBindings);0!==t.hostVars&&n.push(t.hostVars)}function Vr(e,t,n){ngDevMode&&$e(e),ngDevMode&&G(e,t[1],"`LView` must be associated with `TView`!");for(let r=0;r<n;r++)t.push(Ln),e.blueprint.push(Ln),e.data.push(null)}function Rr(e,t){null!==e.hostBindings&&e.hostBindings(1,t)}function Hr(e,t,n){ngDevMode&&Q(e.firstCreatePass,!0,"Expando block should only be generated on first create pass.");const r=20-t.index,o=1048575&t.providerIndexes,i=e.data.length-o;(e.expandoInstructions||(e.expandoInstructions=[])).push(r,i,n)}function Fr(e,t){ngDevMode&&$e(e),t.flags|=2,(e.components||(e.components=ngDevMode?new cr:[])).push(t.index)}function Lr(e,t,n){ngDevMode&&Y(n,e.directiveEnd-e.directiveStart,"Reached the max number of directives"),e.flags|=1,e.directiveStart=t,e.directiveEnd=t+n,e.providerIndexes=t}function $r(e,t,n){e.data.push(n);const r=n.factory||(n.factory=Ie(n.type,!0)),o=new Zt(r,Ae(n),null);e.blueprint.push(o),t.push(o)}("undefined"==typeof ngDevMode||ngDevMode)&&W()&&Pn("LContainer");function Br(e,t){ngDevMode&&Q(ft(e),!1,"Should be run in update mode");const n=lt(t,e);if(pt(n)){const e=n[1];80&n[2]?Dr(e,n,e.template,n[8]):n[5]>0&&function e(t){for(let n=Bn(t);null!==n;n=Zn(n))for(let t=10;t<n.length;t++){const r=n[t];if(1024&r[2]){const e=r[1];ngDevMode&&ee(e,"TView must be allocated"),Dr(e,r,e.template,r[8])}else r[5]>0&&e(r)}const n=t[1].components;if(null!==n)for(let r=0;r<n.length;r++){const o=lt(n[r],t);pt(o)&&o[5]>0&&e(o)}}(n)}}function Zr(e,t){ngDevMode&&Q(ft(e),!0,"Should be run in creation mode");const n=lt(t,e),r=n[1];!function(e,t){for(let n=t.length;n<e.blueprint.length;n++)t.push(e.blueprint[n])}(r,n),Mr(r,n,n[8])}function zr(e,t){return e[13]?e[14][4]=t:e[13]=t,e[14]=t,t}function Ur(e){for(;e;){e[2]|=64;const t=$n(e);if(Ne(e)&&!t)return e;e=t}return null}function Wr(e){for(let t=0;t<e.components.length;t++){const n=e.components[t],r=ht(n),o=r[1];Ir(o,r,o.template,n)}}function qr(e,t,n){const r=t[10];r.begin&&r.begin();try{Dr(e,t,e.template,n)}catch(e){throw Jr(t,e),e}finally{r.end&&r.end()}}function Kr(e){Wr(e[8])}function Qr(e,t,n){ngDevMode&&ee(t,"View queries function to execute must be defined."),Dt(0),t(e,n)}const Yr=wr;function Gr(e){return e[7]||(e[7]=ngDevMode?new lr:[])}function Jr(e,t){const n=e[9],r=n?n.get(vn,null):null;r&&r.handleError(t)}function Xr(e,t,n,r,o){if(null!=r){let i,s=!1;je(r)?i=r:Se(r)&&(s=!0,ngDevMode&&ee(r[0],"HOST must be defined for a component LView"),r=r[0]);const a=at(r);ngDevMode&&!it(t)&&ne(a),0===e&&null!==n?null==o?oo(t,n,a):ro(t,n,a,o||null):1===e&&null!==n?ro(t,n,a,o||null):2===e?so(t,a,s):3===e&&(ngDevMode&&ngDevMode.rendererDestroyNode++,t.destroyNode(a)),null!=i&&function(e,t,n,r,o){ngDevMode&&He(n);const i=n[7],s=at(n);i!==s&&Xr(t,e,r,i,o);for(let o=10;o<n.length;o++){const s=n[o];uo(s[1],s,e,t,r,i)}}(t,e,i,n,o)}}function eo(e,t){ngDevMode&&He(e),ngDevMode&&ee(e[9],"A projected view should belong to a non-empty projected views collection");const n=e[9],r=n.indexOf(t),o=t[3];ngDevMode&&He(o),1024&t[2]&&(t[2]&=-1025,yt(o,-1)),n.splice(r,1)}function to(e,t){if(!(256&t[2])){const n=t[11];it(n)&&n.destroyNode&&uo(e,t,n,3,null,null),function(e){let t=e[13];if(!t)return no(e[1],e);for(;t;){let n=null;if(Se(t))n=t[13];else{ngDevMode&&He(t);const e=t[10];e&&(n=e)}if(!n){for(;t&&!t[4]&&t!==e;)Se(t)&&no(t[1],t),t=t[3];null===t&&(t=e),Se(t)&&no(t[1],t),n=t&&t[4]}t=n}}(t)}}function no(e,t){if(!(256&t[2])){t[2]&=-129,t[2]|=256,function(e,t){let n;if(null!=e&&null!=(n=e.destroyHooks))for(let e=0;e<n.length;e+=2){const r=t[n[e]];if(!(r instanceof Zt)){const t=n[e+1];if(Array.isArray(t))for(let e=0;e<t.length;e+=2)t[e+1].call(r[t[e]]);else t.call(r)}}}(e,t),function(e,t){const n=e.cleanup;if(null!==n){const e=t[7];for(let r=0;r<n.length-1;r+=2)if("string"==typeof n[r]){const o=n[r+1],i="function"==typeof o?o(t):at(t[o]),s=e[n[r+2]],a=n[r+3];"boolean"==typeof a?i.removeEventListener(n[r],s,a):a>=0?e[a]():e[-a].unsubscribe(),r+=2}else{const t=e[n[r+1]];n[r].call(t)}t[7]=null}}(e,t),1===t[1].type&&it(t[11])&&(ngDevMode&&ngDevMode.rendererDestroy++,t[11].destroy());const n=t[17];if(null!==n&&je(t[3])){n!==t[3]&&eo(n,t);const r=t[19];null!==r&&r.detachView(e)}}}function ro(e,t,n,r){ngDevMode&&ngDevMode.rendererInsertBefore++,it(e)?e.insertBefore(t,n,r):t.insertBefore(n,r,!0)}function oo(e,t,n){ngDevMode&&ngDevMode.rendererAppendChild++,ngDevMode&&ee(t,"parent node must be defined"),it(e)?e.appendChild(t,n):t.appendChild(n)}function io(e,t){return it(e)?e.parentNode(t):t.parentNode}function so(e,t,n){const r=io(e,t);r&&function(e,t,n,r){it(e)?e.removeChild(t,n,r):t.removeChild(n)}(e,r,t,n)}function ao(e,t,n,r,o,i,s){for(;null!=n;){ngDevMode&&Pe(n,r),ngDevMode&&Ut(n,[0,2,3,1,4]);const a=r[n.index],u=n.type;s&&0===t&&(a&&Vn(at(a),r),n.flags|=4),64!=(64&n.flags)&&(3===u||4===u?(ao(e,t,n.child,r,o,i,!1),Xr(t,e,o,a,i)):1===u?co(e,t,r,n,o,i):(ngDevMode&&Ut(n,[2,0]),Xr(t,e,o,a,i))),n=s?n.projectionNext:n.next}}function uo(e,t,n,r,o,i){ao(n,r,e.firstChild,t,o,i,!1)}function co(e,t,n,r,o,i){const s=n[16],a=s[6];ngDevMode&&Q(typeof r.projection,"number","expecting projection index");const u=a.projection[r.projection];if(Array.isArray(u))for(let n=0;n<u.length;n++){Xr(t,e,o,u[n],i)}else{ao(e,t,u,s[3],o,i,!0)}}function lo(e,t,n){ngDevMode&&K(n,"'newValue' should be a string"),it(e)?e.setAttribute(t,"style",n):t.style.cssText=n,ngDevMode&&ngDevMode.rendererSetStyle++}function ho(e,t,n){ngDevMode&&K(n,"'newValue' should be a string"),it(e)?""===n?e.removeAttribute(t,"class"):e.setAttribute(t,"class",n):t.className=n,ngDevMode&&ngDevMode.rendererSetClassName++}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class fo{constructor(e,t){this._lView=e,this._cdRefInjectingView=t,this._appRef=null,this._viewContainerRef=null}get rootNodes(){const e=this._lView,t=e[1];return function e(t,n,r,o,i=!1){for(;null!==r;){ngDevMode&&Ut(r,[2,0,1,3,4]);const s=n[r.index];if(null!==s&&o.push(at(s)),je(s))for(let t=10;t<s.length;t++){const n=s[t],r=n[1].firstChild;null!==r&&e(n[1],n,r,o)}const a=r.type;if(3===a||4===a)e(t,n,r.child,o);else if(1===a){const t=n[16],i=t[6],s=r.projection;ngDevMode&&ee(i.projection,"Components with projection nodes (<ng-content>) must have projection slots defined.");const a=i.projection[s];if(Array.isArray(a))o.push(...a);else{const n=$n(t);ngDevMode&&ee(n,"Component views should always have a parent view (component's host view)"),e(n[1],n,a,o,!0)}}r=i?r.projectionNext:r.next}return o}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */(t,e,t.firstChild,[])}get context(){return this._lView[8]}get destroyed(){return 256==(256&this._lView[2])}destroy(){if(this._appRef)this._appRef.detachView(this);else if(this._viewContainerRef){const e=this._viewContainerRef.indexOf(this);e>-1&&this._viewContainerRef.detach(e),this._viewContainerRef=null}to(this._lView[1],this._lView)}onDestroy(e){Nr(this._lView[1],this._lView,null,e)}markForCheck(){Ur(this._cdRefInjectingView||this._lView)}detach(){this._lView[2]&=-129}reattach(){this._lView[2]|=128}detectChanges(){qr(this._lView[1],this._lView,this.context)}checkNoChanges(){!function(e,t,n){Ct(!0);try{qr(e,t,n)}finally{Ct(!1)}}(this._lView[1],this._lView,this.context)}attachToViewContainerRef(e){if(this._appRef)throw new Error("This view is already attached directly to the ApplicationRef!");this._viewContainerRef=e}detachFromAppRef(){var e,t;this._appRef=null,e=this._lView[1],t=this._lView,uo(e,t,t[11],2,null,null)}attachToAppRef(e){if(this._viewContainerRef)throw new Error("This view is already attached to a ViewContainer!");this._appRef=e}}class po extends fo{constructor(e){super(e),this._view=e}detectChanges(){Kr(this._view)}checkNoChanges(){!function(e){Ct(!0);try{Kr(e)}finally{Ct(!1)}}(this._view)}get context(){return null}}let go;function yo(e,t,n){return go||(go=class extends e{}),new go(ut(t,n))}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class _o{}_o.__NG_ELEMENT_ID__=()=>mo();const vo=(...e)=>{},mo=vo,bo=Function;function wo(e){return"function"==typeof e}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const xo=/^function\s+\S+\(\)\s*{[\s\S]+\.apply\(this,\s*(arguments|[^()]+\(arguments\))\)/,Co=/^class\s+[A-Za-z\d$_]*\s*extends\s+[^{]+{/,ko=/^class\s+[A-Za-z\d$_]*\s*extends\s+[^{]+{[\s\S]*constructor\s*\(/,Eo=/^class\s+[A-Za-z\d$_]*\s*extends\s+[^{]+{[\s\S]*constructor\s*\(\)\s*{\s*super\(\.\.\.arguments\)/;class Mo{constructor(e){this._reflect=e||F.Reflect}isReflectionEnabled(){return!0}factory(e){return(...t)=>new e(...t)}_zipTypesAndAnnotations(e,t){let n;n=we(void 0===e?t.length:e.length);for(let r=0;r<n.length;r++)void 0===e?n[r]=[]:e[r]&&e[r]!=Object?n[r]=[e[r]]:n[r]=[],t&&null!=t[r]&&(n[r]=n[r].concat(t[r]));return n}_ownParameters(e,t){if(function(e){return xo.test(e)||Eo.test(e)||Co.test(e)&&!ko.test(e)}(e.toString()))return null;if(e.parameters&&e.parameters!==t.parameters)return e.parameters;const n=e.ctorParameters;if(n&&n!==t.ctorParameters){const e="function"==typeof n?n():n,t=e.map(e=>e&&e.type),r=e.map(e=>e&&Do(e.decorators));return this._zipTypesAndAnnotations(t,r)}const r=e.hasOwnProperty(l)&&e[l],o=this._reflect&&this._reflect.getOwnMetadata&&this._reflect.getOwnMetadata("design:paramtypes",e);return o||r?this._zipTypesAndAnnotations(o,r):we(e.length)}parameters(e){if(!wo(e))return[];const t=Io(e);let n=this._ownParameters(e,t);return n||t===Object||(n=this.parameters(t)),n||[]}_ownAnnotations(e,t){if(e.annotations&&e.annotations!==t.annotations){let t=e.annotations;return"function"==typeof t&&t.annotations&&(t=t.annotations),t}return e.decorators&&e.decorators!==t.decorators?Do(e.decorators):e.hasOwnProperty(c)?e[c]:null}annotations(e){if(!wo(e))return[];const t=Io(e),n=this._ownAnnotations(e,t)||[];return(t!==Object?this.annotations(t):[]).concat(n)}_ownPropMetadata(e,t){if(e.propMetadata&&e.propMetadata!==t.propMetadata){let t=e.propMetadata;return"function"==typeof t&&t.propMetadata&&(t=t.propMetadata),t}if(e.propDecorators&&e.propDecorators!==t.propDecorators){const t=e.propDecorators,n={};return Object.keys(t).forEach(e=>{n[e]=Do(t[e])}),n}return e.hasOwnProperty(d)?e[d]:null}propMetadata(e){if(!wo(e))return{};const t=Io(e),n={};if(t!==Object){const e=this.propMetadata(t);Object.keys(e).forEach(t=>{n[t]=e[t]})}const r=this._ownPropMetadata(e,t);return r&&Object.keys(r).forEach(e=>{const t=[];n.hasOwnProperty(e)&&t.push(...n[e]),t.push(...r[e]),n[e]=t}),n}ownPropMetadata(e){return wo(e)&&this._ownPropMetadata(e,Io(e))||{}}hasLifecycleHook(e,t){return e instanceof bo&&t in e.prototype}guards(e){return{}}getter(e){return new Function("o","return o."+e+";")}setter(e){return new Function("o","v","return o."+e+" = v;")}method(e){return new Function("o","args",`if (!o.${e}) throw new Error('"${e}" is undefined');\n        return o.${e}.apply(o, args);`)}importUri(e){return"object"==typeof e&&e.filePath?e.filePath:"./"+S(e)}resourceUri(e){return"./"+S(e)}resolveIdentifier(e,t,n,r){return r}resolveEnum(e,t){return e[t]}}function Do(e){return e?e.map(e=>new(0,e.type.annotationCls)(...e.args?e.args:[])):[]}function Io(e){const t=e.prototype?Object.getPrototypeOf(e.prototype):null;return(t?t.constructor:null)||Object}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */C({provide:String,useValue:C});
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const To=C({provide:String,useValue:C}),So=[];function jo(e,t){if(!t){const t=(new Mo).parameters(e);return()=>new e(...ye(t))}if(To in t){const e=t;return()=>e.useValue}if(t.useExisting){const e=t;return()=>pe(N(e.useExisting))}if(t.useFactory){const e=t;return()=>e.useFactory(...ye(e.deps||So))}if(t.useClass){const n=t;let r=t.deps;if(!r){const t=new Mo;r=t.parameters(e)}return()=>new(N(n.useClass))(...ye(r))}{let n=t.deps;if(!n){const t=new Mo;n=t.parameters(e)}return()=>new e(...ye(n))}}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const Oo=h("Injectable",void 0,void 0,void 0,(e,t)=>Ao(e,t));const Ao=function(e,t){t&&void 0!==t.providedIn&&!M(e)&&(e.ɵprov=k({token:e,providedIn:t.providedIn,factory:jo(e,t)}))},No=new oe("Set Injector scope.");const Po=
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function(e,t,n){return new $o(e,t,n)};class Vo{static create(e,t){return Array.isArray(e)?Po(e,t,""):Po(e.providers,e.parent,e.name||"")}}Vo.THROW_IF_NOT_FOUND=se,Vo.NULL=new _e,Vo.ɵprov=k({token:Vo,providedIn:"any",factory:()=>pe(ie)}),Vo.__NG_ELEMENT_ID__=-1;const Ro=function(e){return e},Ho=[],Fo=Ro,Lo=function(){return Array.prototype.slice.call(arguments)};class $o{constructor(e,t=Vo.NULL,n=null){this.parent=t,this.source=n;const r=this._records=new Map;r.set(Vo,{token:Vo,fn:Ro,deps:Ho,value:this,useNew:!1}),r.set(ie,{token:ie,fn:Ro,deps:Ho,value:this,useNew:!1}),this.scope=function e(t,n){let r=null;if(n)if(n=N(n),Array.isArray(n))for(let o=0;o<n.length;o++)r=e(t,n[o])||r;else{if("function"==typeof n)throw Uo("Function/Class not supported",n);if(!n||"object"!=typeof n||!n.provide)throw Uo("Unexpected provider",n);{let e=N(n.provide);const o=Bo(n);if(!0===n.multi){let r=t.get(e);if(r){if(r.fn!==Lo)throw Zo(e)}else t.set(e,r={token:n.provide,deps:[],useNew:!1,fn:Lo,value:Ho});e=n,r.deps.push({token:e,options:6})}const i=t.get(e);if(i&&i.fn==Lo)throw Zo(e);e===No&&(r=o.value),t.set(e,o)}}return r}(r,e)}get(e,t,n=x.Default){const r=this._records;let o=r.get(e);if(void 0===o){const t=M(e);if(t){const n=t&&t.providedIn;("any"===n||null!=n&&n===this.scope)&&r.set(e,o=Bo({provide:e,useFactory:t.factory,deps:Ho}))}void 0===o&&r.set(e,null)}let i=de(this);try{return zo(e,o,r,this.parent,t,n)}catch(t){return ve(t,e,"StaticInjectorError",this.source)}finally{de(i)}}toString(){const e=[];return this._records.forEach((t,n)=>e.push(S(n))),`StaticInjector[${e.join(", ")}]`}}function Bo(e){const t=function(e){let t=Ho;const n=e.deps;if(n&&n.length){t=[];for(let e=0;e<n.length;e++){let r=6,o=N(n[e]);if(Array.isArray(o))for(let e=0,t=o;e<t.length;e++){const n=t[e];n instanceof _||n==_?r|=1:n instanceof m||n==m?r&=-3:n instanceof v||n==v?r&=-5:o=n instanceof y?n.token:N(n)}t.push({token:o,options:r})}}else if(e.useExisting){const n=N(e.useExisting);t=[{token:n,options:6}]}else if(!n&&!(ue in e))throw Uo("'deps' required",e);return t}(e);let n=Ro,r=Ho,o=!1,i=N(e.provide);if(ue in e)r=e.useValue;else if(e.useFactory)n=e.useFactory;else if(e.useExisting);else if(e.useClass)o=!0,n=N(e.useClass);else{if("function"!=typeof i)throw Uo("StaticProvider does not have [useValue|useFactory|useExisting|useClass] or [provide] is not newable",e);o=!0,n=i}return{deps:t,fn:n,useNew:o,value:r}}function Zo(e){return Uo("Cannot mix multi providers and regular providers",e)}function zo(e,t,n,r,o,i){try{return function(e,t,n,r,o,i){let s;if(!t||i&x.SkipSelf)s=i&x.Self?i&x.Optional?Vo.NULL.get(e,void 0!==o?o:null):Vo.NULL.get(e,o):r.get(e,o,x.Default);else{if(s=t.value,s==Fo)throw Error("ɵCircular dependency");if(s===Ho){t.value=Fo;let e=void 0,o=t.useNew,i=t.fn,a=t.deps,u=Ho;if(a.length){u=[];for(let e=0;e<a.length;e++){const t=a[e],o=t.options,i=2&o?n.get(t.token):void 0;u.push(zo(t.token,i,n,i||4&o?r:Vo.NULL,1&o?null:Vo.THROW_IF_NOT_FOUND,x.Default))}}t.value=s=o?new i(...u):i.apply(e,u)}}return s}(e,t,n,r,o,i)}catch(n){n instanceof Error||(n=new Error(n));throw(n.ngTempTokenPath=n.ngTempTokenPath||[]).unshift(e),t&&t.value==Fo&&(t.value=Ho),n}}function Uo(e,t){return new Error(me(e,t,"StaticInjectorError"))}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function Wo(e){if(e.length>1){return" ("+function(e){const t=[];for(let n=0;n<e.length;++n){if(t.indexOf(e[n])>-1)return t.push(e[n]),t;t.push(e[n])}return t}(e.slice().reverse()).map(e=>S(e.token)).join(" -> ")+")"}return""}function qo(e,t,n,r){const o=[t],i=n(o),s=r?function(e,t){const n=`${e} caused by: ${t instanceof Error?t.message:t}`,r=Error(n);return r.ngOriginalError=t,r}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */(i,r):Error(i);return s.addKey=Ko,s.keys=o,s.injectors=[e],s.constructResolvingMessage=n,s.ngOriginalError=r,s}function Ko(e,t){this.injectors.push(e),this.keys.push(t),this.message=this.constructResolvingMessage(this.keys)}function Qo(e,t){const n=[];for(let e=0,r=t.length;e<r;e++){const r=t[e];r&&0!=r.length?n.push(r.map(S).join(" ")):n.push("?")}return Error("Cannot resolve all parameters for '"+S(e)+"'("+n.join(", ")+"). Make sure that all the parameters are decorated with Inject or have valid type annotations and that '"+S(e)+"' is decorated with Injectable.")}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class Yo{constructor(e,t){if(this.token=e,this.id=t,!e)throw new Error("Token must be defined!");this.displayName=S(this.token)}static get(e){return Go.get(N(e))}static get numberOfKeys(){return Go.numberOfKeys}}const Go=new class{constructor(){this._allKeys=new Map}get(e){if(e instanceof Yo)return e;if(this._allKeys.has(e))return this._allKeys.get(e);const t=new Yo(e,Yo.numberOfKeys);return this._allKeys.set(e,t),t}get numberOfKeys(){return this._allKeys.size}};
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
const Jo=new class{constructor(e){this.reflectionCapabilities=e}updateCapabilities(e){this.reflectionCapabilities=e}factory(e){return this.reflectionCapabilities.factory(e)}parameters(e){return this.reflectionCapabilities.parameters(e)}annotations(e){return this.reflectionCapabilities.annotations(e)}propMetadata(e){return this.reflectionCapabilities.propMetadata(e)}hasLifecycleHook(e,t){return this.reflectionCapabilities.hasLifecycleHook(e,t)}getter(e){return this.reflectionCapabilities.getter(e)}setter(e){return this.reflectionCapabilities.setter(e)}method(e){return this.reflectionCapabilities.method(e)}importUri(e){return this.reflectionCapabilities.importUri(e)}resourceUri(e){return this.reflectionCapabilities.resourceUri(e)}resolveIdentifier(e,t,n,r){return this.reflectionCapabilities.resolveIdentifier(e,t,n,r)}resolveEnum(e,t){return this.reflectionCapabilities.resolveEnum(e,t)}}(new Mo);
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class Xo{constructor(e,t,n){this.key=e,this.optional=t,this.visibility=n}static fromKey(e){return new Xo(e,!1,null)}}const ei=[];class ti{constructor(e,t,n){this.key=e,this.resolvedFactories=t,this.multiProvider=n,this.resolvedFactory=this.resolvedFactories[0]}}class ni{constructor(e,t){this.factory=e,this.dependencies=t}}function ri(e){let t,n;if(e.useClass){const r=N(e.useClass);t=Jo.factory(r),n=si(r)}else e.useExisting?(t=e=>e,n=[Xo.fromKey(Yo.get(e.useExisting))]):e.useFactory?(t=e.useFactory,n=function(e,t){if(t){const n=t.map(e=>[e]);return t.map(t=>ai(e,t,n))}return si(e)}(e.useFactory,e.deps)):(t=()=>e.useValue,n=ei);return new ni(t,n)}function oi(e){return new ti(Yo.get(e.provide),[ri(e)],e.multi||!1)}function ii(e){const t=function(e,t){for(let n=0;n<e.length;n++){const r=e[n],o=t.get(r.key.id);if(o){if(r.multiProvider!==o.multiProvider)throw Error(`Cannot mix multi providers and regular providers, got: ${o} ${r}`);if(r.multiProvider)for(let e=0;e<r.resolvedFactories.length;e++)o.resolvedFactories.push(r.resolvedFactories[e]);else t.set(r.key.id,r)}else{let e;e=r.multiProvider?new ti(r.key,r.resolvedFactories.slice(),r.multiProvider):r,t.set(r.key.id,e)}}return t}(function e(t,n){return t.forEach(t=>{if(t instanceof bo)n.push({provide:t,useClass:t});else if(t&&"object"==typeof t&&void 0!==t.provide)n.push(t);else{if(!Array.isArray(t))throw Error("Invalid provider - only instances of Provider and Type are allowed, got: "+t);e(t,n)}}),n}(e,[]).map(oi),new Map);return Array.from(t.values())}function si(e){const t=Jo.parameters(e);if(!t)return[];if(t.some(e=>null==e))throw Qo(e,t);return t.map(n=>ai(e,n,t))}function ai(e,t,n){let r=null,o=!1;if(!Array.isArray(t))return ui(t instanceof y?t.token:t,o,null);let i=null;for(let e=0;e<t.length;++e){const n=t[e];n instanceof bo?r=n:n instanceof y?r=n.token:n instanceof _?o=!0:n instanceof v||n instanceof m?i=n:n instanceof oe&&(r=n)}if(r=N(r),null!=r)return ui(r,o,i);throw Qo(e,n)}function ui(e,t,n){return new Xo(Yo.get(e),t,n)}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const ci={};class li{static resolve(e){return ii(e)}static resolveAndCreate(e,t){const n=li.resolve(e);return li.fromResolvedProviders(n,t)}static fromResolvedProviders(e,t){return new di(e,t)}}class di{constructor(e,t){this._constructionCounter=0,this._providers=e,this.parent=t||null;const n=e.length;this.keyIds=[],this.objs=[];for(let t=0;t<n;t++)this.keyIds[t]=e[t].key.id,this.objs[t]=ci}get(e,t=se){return this._getByKey(Yo.get(e),null,t)}resolveAndCreateChild(e){const t=li.resolve(e);return this.createChildFromResolved(t)}createChildFromResolved(e){const t=new di(e);return t.parent=this,t}resolveAndInstantiate(e){return this.instantiateResolved(li.resolve([e])[0])}instantiateResolved(e){return this._instantiateProvider(e)}getProviderAtIndex(e){if(e<0||e>=this._providers.length)throw function(e){return Error(`Index ${e} is out-of-bounds.`)}(e);return this._providers[e]}_new(e){if(this._constructionCounter++>this._getMaxNumberOfObjects())throw t=this,n=e.key,qo(t,n,(function(e){return"Cannot instantiate cyclic dependency!"+Wo(e)}));var t,n;return this._instantiateProvider(e)}_getMaxNumberOfObjects(){return this.objs.length}_instantiateProvider(e){if(e.multiProvider){const t=[];for(let n=0;n<e.resolvedFactories.length;++n)t[n]=this._instantiate(e,e.resolvedFactories[n]);return t}return this._instantiate(e,e.resolvedFactories[0])}_instantiate(e,t){const n=t.factory;let r,o;try{r=t.dependencies.map(e=>this._getByReflectiveDependency(e))}catch(t){throw t.addKey&&t.addKey(this,e.key),t}try{o=n(...r)}catch(t){throw i=this,s=t,t.stack,a=e.key,qo(i,a,(function(e){const t=S(e[0].token);return`${s.message}: Error during instantiation of ${t}!${Wo(e)}.`}),s)}var i,s,a;return o}_getByReflectiveDependency(e){return this._getByKey(e.key,e.visibility,e.optional?null:se)}_getByKey(e,t,n){return e===di.INJECTOR_KEY?this:t instanceof v?this._getByKeySelf(e,n):this._getByKeyDefault(e,n,t)}_getObjByKeyId(e){for(let t=0;t<this.keyIds.length;t++)if(this.keyIds[t]===e)return this.objs[t]===ci&&(this.objs[t]=this._new(this._providers[t])),this.objs[t];return ci}_throwOrNull(e,t){if(t!==se)return t;throw function(e,t){return qo(e,t,(function(e){return`No provider for ${S(e[0].token)}!${Wo(e)}`}))}(this,e)}_getByKeySelf(e,t){const n=this._getObjByKeyId(e.id);return n!==ci?n:this._throwOrNull(e,t)}_getByKeyDefault(e,t,n){let r;for(r=n instanceof m?this.parent:this;r instanceof di;){const t=r,n=t._getObjByKeyId(e.id);if(n!==ci)return n;r=t.parent}return null!==r?r.get(e.token,t):this._throwOrNull(e,t)}get displayName(){return`ReflectiveInjector(providers: [${function(e,t){const n=[];for(let r=0;r<e._providers.length;++r)n[r]=t(e.getProviderAtIndex(r));return n}
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
 */(this,e=>' "'+e.key.displayName+'" ').join(", ")}])`}toString(){return this.displayName}}di.INJECTOR_KEY=Yo.get(Vo);new oe("AnalyzeForEntryComponents");class hi{}g("ContentChildren",(e,t={})=>Object.assign({selector:e,first:!1,isViewQuery:!1,descendants:!1},t),hi),g("ContentChild",(e,t={})=>Object.assign({selector:e,first:!0,isViewQuery:!1,descendants:!0},t),hi),g("ViewChildren",(e,t={})=>Object.assign({selector:e,first:!1,isViewQuery:!0,descendants:!0},t),hi),g("ViewChild",(e,t)=>Object.assign({selector:e,first:!0,isViewQuery:!0,descendants:!0},t),hi);new Map;new Set;
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function fi(e,t,n){ngDevMode&&$e(vt(),"Expecting to be called in first template pass only");let r=n?e.styles:null,o=n?e.classes:null,i=0;if(null!==t)for(let e=0;e<t.length;e++){const n=t[e];if("number"==typeof n)i=n;else if(1==i)o=j(o,n);else if(2==i){r=j(r,n+": "+t[++e]+";")}}n?e.styles=r:e.stylesWithoutHost=r,n?e.classes=o:e.classesWithoutHost=o}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function pi(e,t,n,r,o,i){const s=n[1];ngDevMode&&re(n,20),n[20]=e;const a=Er(s,0,2,null,null),u=a.mergedAttrs=t.hostAttrs;null!==u&&(fi(a,u,!0),null!==e&&(qt(o,e,u),null!==a.classes&&ho(o,e,a.classes),null!==a.styles&&lo(o,e,a.styles)));const c=r.createRenderer(e,t),l=kr(n,Sr(t),null,t.onPush?64:16,n[20],a,r,c,i||null,null);return s.firstCreatePass&&(sn(tn(a,n),s,t.type),Fr(s,a),Lr(a,n.length,1)),zr(n,l),n[20]=l}function gi(e,t,n,r,o){const i=n[1],s=function(e,t,n){const r=mt();e.firstCreatePass&&(n.providersResolver&&n.providersResolver(n),Hr(e,r,1),$r(e,t,n));const o=dn(t,e,t.length-1,r);Vn(o,t);const i=ut(r,t);return i&&Vn(i,t),o}(i,n,t);r.components.push(s),e[8]=s,o&&o.forEach(e=>e(s,t)),t.contentQueries&&t.contentQueries(1,s,n.length-1);const a=mt();if(ngDevMode&&ee(a,"tNode should have been already created"),i.firstCreatePass&&(null!==t.hostBindings||null!==t.hostAttrs)){Vt(a.index-20);const e=n[1];Pr(e,t),Vr(e,n,t.hostVars),Rr(t,s)}return s}function yi(e,t){return{components:[],scheduler:e||qe,clean:Yr,playerHandler:t||null,flags:0}}function _i(e,t){const n=ht(e)[1],r=n.data.length-1;Rt(n,{directiveStart:r,directiveEnd:r+1})}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
let vi=null;function mi(){if(!vi){const e=F.Symbol;if(e&&e.iterator)vi=e.iterator;else{const e=Object.getOwnPropertyNames(Map.prototype);for(let t=0;t<e.length;++t){const n=e[t];"entries"!==n&&"size"!==n&&Map.prototype[n]===Map.prototype.entries&&(vi=n)}}}return vi}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function bi(e){return!!wi(e)&&(Array.isArray(e)||!(e instanceof Map)&&mi()in e)}function wi(e){return null!==e&&("function"==typeof e||"object"==typeof e)}
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
function xi(e){return!!e&&"function"==typeof e.then}function Ci(e){return!!e&&"function"==typeof e.subscribe}
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
const ki={},Ei=[];("undefined"==typeof ngDevMode||ngDevMode)&&W()&&(Object.freeze(ki),Object.freeze(Ei))
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
"undefined"==typeof ngI18nClosureMode&&(F.ngI18nClosureMode="undefined"!=typeof goog&&"function"==typeof goog.getMsg);
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const Mi=void 0;var Di=["en",[["a","p"],["AM","PM"],Mi],[["AM","PM"],Mi,Mi],[["S","M","T","W","T","F","S"],["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],["Su","Mo","Tu","We","Th","Fr","Sa"]],Mi,[["J","F","M","A","M","J","J","A","S","O","N","D"],["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],["January","February","March","April","May","June","July","August","September","October","November","December"]],Mi,[["B","A"],["BC","AD"],["Before Christ","Anno Domini"]],0,[6,0],["M/d/yy","MMM d, y","MMMM d, y","EEEE, MMMM d, y"],["h:mm a","h:mm:ss a","h:mm:ss a z","h:mm:ss a zzzz"],["{1}, {0}",Mi,"{1} 'at' {0}",Mi],[".",",",";","%","+","-","E","×","‰","∞","NaN",":"],["#,##0.###","#,##0%","¤#,##0.00","#E0"],"USD","$","US Dollar",{},"ltr",function(e){let t=Math.floor(Math.abs(e)),n=e.toString().replace(/^[^.]*\.?/,"").length;return 1===t&&0===n?1:5}];
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */let Ii={};function Ti(e,t,n){"string"!=typeof t&&(n=t,t=e[Ni.LocaleId]),t=t.toLowerCase().replace(/_/g,"-"),Ii[t]=e,n&&(Ii[t][Ni.ExtraData]=n)}function Si(e){const t=function(e){return e.toLowerCase().replace(/_/g,"-")}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */(e);let n=Ai(t);if(n)return n;const r=t.split("-")[0];if(n=Ai(r),n)return n;if("en"===r)return Di;throw new Error(`Missing locale data for the locale "${e}".`)}function ji(e){return Si(e)[Ni.CurrencyCode]||null}function Oi(e){return Si(e)[Ni.PluralCase]}function Ai(e){return e in Ii||(Ii[e]=F.ng&&F.ng.common&&F.ng.common.locales&&F.ng.common.locales[e]),Ii[e]}var Ni;!function(e){e[e.LocaleId=0]="LocaleId",e[e.DayPeriodsFormat=1]="DayPeriodsFormat",e[e.DayPeriodsStandalone=2]="DayPeriodsStandalone",e[e.DaysFormat=3]="DaysFormat",e[e.DaysStandalone=4]="DaysStandalone",e[e.MonthsFormat=5]="MonthsFormat",e[e.MonthsStandalone=6]="MonthsStandalone",e[e.Eras=7]="Eras",e[e.FirstDayOfWeek=8]="FirstDayOfWeek",e[e.WeekendRange=9]="WeekendRange",e[e.DateFormat=10]="DateFormat",e[e.TimeFormat=11]="TimeFormat",e[e.DateTimeFormat=12]="DateTimeFormat",e[e.NumberSymbols=13]="NumberSymbols",e[e.NumberFormats=14]="NumberFormats",e[e.CurrencyCode=15]="CurrencyCode",e[e.CurrencySymbol=16]="CurrencySymbol",e[e.CurrencyName=17]="CurrencyName",e[e.Currencies=18]="Currencies",e[e.Directionality=19]="Directionality",e[e.PluralCase=20]="PluralCase",e[e.ExtraData=21]="ExtraData"}(Ni||(Ni={}));
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class Pi{}class Vi{}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function Ri(e){const t=Error(`No component factory found for ${S(e)}. Did you add it to @NgModule.entryComponents?`);return t[Hi]=e,t}const Hi="ngComponent";class Fi{}Fi.NULL=new class{resolveComponentFactory(e){throw Ri(e)}};class Li extends Vi{constructor(e,t){super(),this.factory=e,this.ngModule=t,this.selector=e.selector,this.componentType=e.componentType,this.ngContentSelectors=e.ngContentSelectors,this.inputs=e.inputs,this.outputs=e.outputs}create(e,t,n,r){return this.factory.create(e,t,n,r||this.ngModule)}}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function $i(...e){}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class Bi{constructor(e){this.nativeElement=e}}Bi.__NG_ELEMENT_ID__=()=>Zi(Bi);const Zi=$i;new oe("Renderer2Interceptor");class zi{}var Ui;!function(e){e[e.Important=1]="Important",e[e.DashCase=2]="DashCase"}(Ui||(Ui={}));class Wi{}Wi.__NG_ELEMENT_ID__=()=>qi();const qi=$i;
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class Ki{}Ki.ɵprov=k({token:Ki,providedIn:"root",factory:()=>null});
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class Qi{constructor(e){this.full=e,this.major=e.split(".")[0],this.minor=e.split(".")[1],this.patch=e.split(".").slice(2).join(".")}}const Yi=new Qi("10.2.3");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class Gi{constructor(){}supports(e){return bi(e)}create(e){return new Xi(e)}}const Ji=(e,t)=>t;class Xi{constructor(e){this.length=0,this._linkedRecords=null,this._unlinkedRecords=null,this._previousItHead=null,this._itHead=null,this._itTail=null,this._additionsHead=null,this._additionsTail=null,this._movesHead=null,this._movesTail=null,this._removalsHead=null,this._removalsTail=null,this._identityChangesHead=null,this._identityChangesTail=null,this._trackByFn=e||Ji}forEachItem(e){let t;for(t=this._itHead;null!==t;t=t._next)e(t)}forEachOperation(e){let t=this._itHead,n=this._removalsHead,r=0,o=null;for(;t||n;){const i=!n||t&&t.currentIndex<rs(n,r,o)?t:n,s=rs(i,r,o),a=i.currentIndex;if(i===n)r--,n=n._nextRemoved;else if(t=t._next,null==i.previousIndex)r++;else{o||(o=[]);const e=s-r,t=a-r;if(e!=t){for(let n=0;n<e;n++){const r=n<o.length?o[n]:o[n]=0,i=r+n;t<=i&&i<e&&(o[n]=r+1)}o[i.previousIndex]=t-e}}s!==a&&e(i,s,a)}}forEachPreviousItem(e){let t;for(t=this._previousItHead;null!==t;t=t._nextPrevious)e(t)}forEachAddedItem(e){let t;for(t=this._additionsHead;null!==t;t=t._nextAdded)e(t)}forEachMovedItem(e){let t;for(t=this._movesHead;null!==t;t=t._nextMoved)e(t)}forEachRemovedItem(e){let t;for(t=this._removalsHead;null!==t;t=t._nextRemoved)e(t)}forEachIdentityChange(e){let t;for(t=this._identityChangesHead;null!==t;t=t._nextIdentityChange)e(t)}diff(e){if(null==e&&(e=[]),!bi(e))throw new Error(`Error trying to diff '${S(e)}'. Only arrays and iterables are allowed`);return this.check(e)?this:null}onDestroy(){}check(e){this._reset();let t,n,r,o=this._itHead,i=!1;if(Array.isArray(e)){this.length=e.length;for(let t=0;t<this.length;t++)n=e[t],r=this._trackByFn(t,n),null!==o&&Object.is(o.trackById,r)?(i&&(o=this._verifyReinsertion(o,n,r,t)),Object.is(o.item,n)||this._addIdentityChange(o,n)):(o=this._mismatch(o,n,r,t),i=!0),o=o._next}else t=0,function(e,t){if(Array.isArray(e))for(let n=0;n<e.length;n++)t(e[n]);else{const n=e[mi()]();let r;for(;!(r=n.next()).done;)t(r.value)}}(e,e=>{r=this._trackByFn(t,e),null!==o&&Object.is(o.trackById,r)?(i&&(o=this._verifyReinsertion(o,e,r,t)),Object.is(o.item,e)||this._addIdentityChange(o,e)):(o=this._mismatch(o,e,r,t),i=!0),o=o._next,t++}),this.length=t;return this._truncate(o),this.collection=e,this.isDirty}get isDirty(){return null!==this._additionsHead||null!==this._movesHead||null!==this._removalsHead||null!==this._identityChangesHead}_reset(){if(this.isDirty){let e;for(e=this._previousItHead=this._itHead;null!==e;e=e._next)e._nextPrevious=e._next;for(e=this._additionsHead;null!==e;e=e._nextAdded)e.previousIndex=e.currentIndex;for(this._additionsHead=this._additionsTail=null,e=this._movesHead;null!==e;e=e._nextMoved)e.previousIndex=e.currentIndex;this._movesHead=this._movesTail=null,this._removalsHead=this._removalsTail=null,this._identityChangesHead=this._identityChangesTail=null}}_mismatch(e,t,n,r){let o;return null===e?o=this._itTail:(o=e._prev,this._remove(e)),null!==(e=null===this._linkedRecords?null:this._linkedRecords.get(n,r))?(Object.is(e.item,t)||this._addIdentityChange(e,t),this._moveAfter(e,o,r)):null!==(e=null===this._unlinkedRecords?null:this._unlinkedRecords.get(n,null))?(Object.is(e.item,t)||this._addIdentityChange(e,t),this._reinsertAfter(e,o,r)):e=this._addAfter(new es(t,n),o,r),e}_verifyReinsertion(e,t,n,r){let o=null===this._unlinkedRecords?null:this._unlinkedRecords.get(n,null);return null!==o?e=this._reinsertAfter(o,e._prev,r):e.currentIndex!=r&&(e.currentIndex=r,this._addToMoves(e,r)),e}_truncate(e){for(;null!==e;){const t=e._next;this._addToRemovals(this._unlink(e)),e=t}null!==this._unlinkedRecords&&this._unlinkedRecords.clear(),null!==this._additionsTail&&(this._additionsTail._nextAdded=null),null!==this._movesTail&&(this._movesTail._nextMoved=null),null!==this._itTail&&(this._itTail._next=null),null!==this._removalsTail&&(this._removalsTail._nextRemoved=null),null!==this._identityChangesTail&&(this._identityChangesTail._nextIdentityChange=null)}_reinsertAfter(e,t,n){null!==this._unlinkedRecords&&this._unlinkedRecords.remove(e);const r=e._prevRemoved,o=e._nextRemoved;return null===r?this._removalsHead=o:r._nextRemoved=o,null===o?this._removalsTail=r:o._prevRemoved=r,this._insertAfter(e,t,n),this._addToMoves(e,n),e}_moveAfter(e,t,n){return this._unlink(e),this._insertAfter(e,t,n),this._addToMoves(e,n),e}_addAfter(e,t,n){return this._insertAfter(e,t,n),null===this._additionsTail?this._additionsTail=this._additionsHead=e:this._additionsTail=this._additionsTail._nextAdded=e,e}_insertAfter(e,t,n){const r=null===t?this._itHead:t._next;return e._next=r,e._prev=t,null===r?this._itTail=e:r._prev=e,null===t?this._itHead=e:t._next=e,null===this._linkedRecords&&(this._linkedRecords=new ns),this._linkedRecords.put(e),e.currentIndex=n,e}_remove(e){return this._addToRemovals(this._unlink(e))}_unlink(e){null!==this._linkedRecords&&this._linkedRecords.remove(e);const t=e._prev,n=e._next;return null===t?this._itHead=n:t._next=n,null===n?this._itTail=t:n._prev=t,e}_addToMoves(e,t){return e.previousIndex===t||(null===this._movesTail?this._movesTail=this._movesHead=e:this._movesTail=this._movesTail._nextMoved=e),e}_addToRemovals(e){return null===this._unlinkedRecords&&(this._unlinkedRecords=new ns),this._unlinkedRecords.put(e),e.currentIndex=null,e._nextRemoved=null,null===this._removalsTail?(this._removalsTail=this._removalsHead=e,e._prevRemoved=null):(e._prevRemoved=this._removalsTail,this._removalsTail=this._removalsTail._nextRemoved=e),e}_addIdentityChange(e,t){return e.item=t,null===this._identityChangesTail?this._identityChangesTail=this._identityChangesHead=e:this._identityChangesTail=this._identityChangesTail._nextIdentityChange=e,e}}class es{constructor(e,t){this.item=e,this.trackById=t,this.currentIndex=null,this.previousIndex=null,this._nextPrevious=null,this._prev=null,this._next=null,this._prevDup=null,this._nextDup=null,this._prevRemoved=null,this._nextRemoved=null,this._nextAdded=null,this._nextMoved=null,this._nextIdentityChange=null}}class ts{constructor(){this._head=null,this._tail=null}add(e){null===this._head?(this._head=this._tail=e,e._nextDup=null,e._prevDup=null):(this._tail._nextDup=e,e._prevDup=this._tail,e._nextDup=null,this._tail=e)}get(e,t){let n;for(n=this._head;null!==n;n=n._nextDup)if((null===t||t<=n.currentIndex)&&Object.is(n.trackById,e))return n;return null}remove(e){const t=e._prevDup,n=e._nextDup;return null===t?this._head=n:t._nextDup=n,null===n?this._tail=t:n._prevDup=t,null===this._head}}class ns{constructor(){this.map=new Map}put(e){const t=e.trackById;let n=this.map.get(t);n||(n=new ts,this.map.set(t,n)),n.add(e)}get(e,t){const n=e,r=this.map.get(n);return r?r.get(e,t):null}remove(e){const t=e.trackById;return this.map.get(t).remove(e)&&this.map.delete(t),e}get isEmpty(){return 0===this.map.size}clear(){this.map.clear()}}function rs(e,t,n){const r=e.previousIndex;if(null===r)return r;let o=0;return n&&r<n.length&&(o=n[r]),r+t+o}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class os{constructor(){}supports(e){return e instanceof Map||wi(e)}create(){return new is}}class is{constructor(){this._records=new Map,this._mapHead=null,this._appendAfter=null,this._previousMapHead=null,this._changesHead=null,this._changesTail=null,this._additionsHead=null,this._additionsTail=null,this._removalsHead=null,this._removalsTail=null}get isDirty(){return null!==this._additionsHead||null!==this._changesHead||null!==this._removalsHead}forEachItem(e){let t;for(t=this._mapHead;null!==t;t=t._next)e(t)}forEachPreviousItem(e){let t;for(t=this._previousMapHead;null!==t;t=t._nextPrevious)e(t)}forEachChangedItem(e){let t;for(t=this._changesHead;null!==t;t=t._nextChanged)e(t)}forEachAddedItem(e){let t;for(t=this._additionsHead;null!==t;t=t._nextAdded)e(t)}forEachRemovedItem(e){let t;for(t=this._removalsHead;null!==t;t=t._nextRemoved)e(t)}diff(e){if(e){if(!(e instanceof Map||wi(e)))throw new Error(`Error trying to diff '${S(e)}'. Only maps and objects are allowed`)}else e=new Map;return this.check(e)?this:null}onDestroy(){}check(e){this._reset();let t=this._mapHead;if(this._appendAfter=null,this._forEach(e,(e,n)=>{if(t&&t.key===n)this._maybeAddToChanges(t,e),this._appendAfter=t,t=t._next;else{const r=this._getOrCreateRecordForKey(n,e);t=this._insertBeforeOrAppend(t,r)}}),t){t._prev&&(t._prev._next=null),this._removalsHead=t;for(let e=t;null!==e;e=e._nextRemoved)e===this._mapHead&&(this._mapHead=null),this._records.delete(e.key),e._nextRemoved=e._next,e.previousValue=e.currentValue,e.currentValue=null,e._prev=null,e._next=null}return this._changesTail&&(this._changesTail._nextChanged=null),this._additionsTail&&(this._additionsTail._nextAdded=null),this.isDirty}_insertBeforeOrAppend(e,t){if(e){const n=e._prev;return t._next=e,t._prev=n,e._prev=t,n&&(n._next=t),e===this._mapHead&&(this._mapHead=t),this._appendAfter=e,e}return this._appendAfter?(this._appendAfter._next=t,t._prev=this._appendAfter):this._mapHead=t,this._appendAfter=t,null}_getOrCreateRecordForKey(e,t){if(this._records.has(e)){const n=this._records.get(e);this._maybeAddToChanges(n,t);const r=n._prev,o=n._next;return r&&(r._next=o),o&&(o._prev=r),n._next=null,n._prev=null,n}const n=new ss(e);return this._records.set(e,n),n.currentValue=t,this._addToAdditions(n),n}_reset(){if(this.isDirty){let e;for(this._previousMapHead=this._mapHead,e=this._previousMapHead;null!==e;e=e._next)e._nextPrevious=e._next;for(e=this._changesHead;null!==e;e=e._nextChanged)e.previousValue=e.currentValue;for(e=this._additionsHead;null!=e;e=e._nextAdded)e.previousValue=e.currentValue;this._changesHead=this._changesTail=null,this._additionsHead=this._additionsTail=null,this._removalsHead=null}}_maybeAddToChanges(e,t){Object.is(t,e.currentValue)||(e.previousValue=e.currentValue,e.currentValue=t,this._addToChanges(e))}_addToAdditions(e){null===this._additionsHead?this._additionsHead=this._additionsTail=e:(this._additionsTail._nextAdded=e,this._additionsTail=e)}_addToChanges(e){null===this._changesHead?this._changesHead=this._changesTail=e:(this._changesTail._nextChanged=e,this._changesTail=e)}_forEach(e,t){e instanceof Map?e.forEach(t):Object.keys(e).forEach(n=>t(e[n],n))}}class ss{constructor(e){this.key=e,this.previousValue=null,this.currentValue=null,this._nextPrevious=null,this._next=null,this._prev=null,this._nextAdded=null,this._nextRemoved=null,this._nextChanged=null}}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class as{constructor(e){this.factories=e}static create(e,t){if(null!=t){const n=t.factories.slice();e=e.concat(n)}return new as(e)}static extend(e){return{provide:as,useFactory:t=>{if(!t)throw new Error("Cannot extend IterableDiffers without a parent injector");return as.create(e,t)},deps:[[as,new m,new _]]}}find(e){const t=this.factories.find(t=>t.supports(e));if(null!=t)return t;throw new Error(`Cannot find a differ supporting object '${e}' of type '${n=e,n.name||typeof n}'`);var n;
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */}}as.ɵprov=k({token:as,providedIn:"root",factory:()=>new as([new Gi])});class us{constructor(e){this.factories=e}static create(e,t){if(t){const n=t.factories.slice();e=e.concat(n)}return new us(e)}static extend(e){return{provide:us,useFactory:t=>{if(!t)throw new Error("Cannot extend KeyValueDiffers without a parent injector");return us.create(e,t)},deps:[[us,new m,new _]]}}find(e){const t=this.factories.find(t=>t.supports(e));if(t)return t;throw new Error(`Cannot find a differ supporting object '${e}'`)}}us.ɵprov=k({token:us,providedIn:"root",factory:()=>new us([new os])});
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const cs=[new os],ls=[new Gi],ds=new as(ls),hs=new us(cs);
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class fs{}fs.__NG_ELEMENT_ID__=()=>ps(fs,Bi);const ps=$i;
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class gs{}gs.__NG_ELEMENT_ID__=()=>ys(gs,Bi);const ys=$i;const _s=new Map;
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function vs(e){let t=_s.get(e);return t||(t=S(e)+"_"+_s.size,_s.set(e,t)),t}new WeakMap;vs(Vo),vs(ie),vs(be);
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
vs(Wi),vs(Bi),vs(gs),vs(fs),vs(_o),vs(Vo),vs(ie);const ms={};
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class bs extends Fi{constructor(e){super(),this.ngModule=e}resolveComponentFactory(e){ngDevMode&&Re(e);const t=De(e);return new Cs(t,this.ngModule)}}function ws(e){const t=[];for(let n in e)if(e.hasOwnProperty(n)){const r=e[n];t.push({propName:r,templateName:n})}return t}const xs=new oe("SCHEDULER_TOKEN",{providedIn:"root",factory:()=>qe});class Cs extends Vi{constructor(e,t){super(),this.componentDef=e,this.ngModule=t,this.componentType=e.type,this.selector=e.selectors.map(Fn).join(","),this.ngContentSelectors=e.ngContentSelectors?e.ngContentSelectors:[],this.isBoundToModule=!!t}get inputs(){return ws(this.componentDef.inputs)}get outputs(){return ws(this.componentDef.outputs)}create(e,t,n,r){const o=(r=r||this.ngModule)?function(e,t){return{get:(n,r,o)=>{const i=e.get(n,ms,o);return i!==ms||r===ms?i:t.get(n,r,o)}}}(e,r.injector):e,i=o.get(zi,st),s=o.get(Ki,null),a=i.createRenderer(null,this.componentDef),u=this.componentDef.selectors[0][0]||"div",c=n?Ar(a,n,this.componentDef.encapsulation):Cr(u,i.createRenderer(null,this.componentDef),function(e){const t=e.toLowerCase();return"svg"===t?"http://www.w3.org/2000/svg":"math"===t?"http://www.w3.org/1998/MathML/":null}(u)),l=this.componentDef.onPush?576:528,d=yi(),h=jr(0,null,null,1,0,null,null,null,null,null),f=kr(null,h,d,l,null,null,i,a,s,o);let p,g;Tt(f);try{const e=pi(c,this.componentDef,f,i,a);if(c)if(n)qt(a,c,["ng-version",Yi.full]);else{const{attrs:e,classes:t}=function(e){const t=[],n=[];let r=1,o=2;for(;r<e.length;){let i=e[r];if("string"==typeof i)2===o?""!==i&&t.push(i,e[++r]):8===o&&n.push(i);else{if(!Rn(o))break;o=i}r++}return{attrs:t,classes:n}}(this.componentDef.selectors[0]);e&&qt(a,c,e),t&&t.length>0&&ho(a,c,t.join(" "))}if(g=ct(h,0),void 0!==t){const e=g.projection=[];for(let n=0;n<this.ngContentSelectors.length;n++){const r=t[n];e.push(null!=r?Array.from(r):null)}}p=gi(e,this.componentDef,f,d,[_i]),Mr(h,f,null)}finally{Nt()}return new ks(this.componentType,p,yo(Bi,g,f),f,g)}}new bs;class ks extends Pi{constructor(e,t,n,r,o){super(),this.location=n,this._rootLView=r,this._tNode=o,this.destroyCbs=[],this.instance=t,this.hostView=this.changeDetectorRef=new po(r),this.componentType=e}get injector(){return new pn(this._tNode,this._rootLView)}destroy(){this.destroyCbs&&(this.destroyCbs.forEach(e=>e()),this.destroyCbs=null,!this.hostView.destroyed&&this.hostView.destroy())}onDestroy(e){this.destroyCbs&&this.destroyCbs.push(e)}}
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
class Es extends r.a{constructor(e=!1){super(),this.__isAsync=e}emit(e){super.next(e)}subscribe(e,t,n){let r,i=e=>null,s=()=>null;e&&"object"==typeof e?(r=this.__isAsync?t=>{setTimeout(()=>e.next(t))}:t=>{e.next(t)},e.error&&(i=this.__isAsync?t=>{setTimeout(()=>e.error(t))}:t=>{e.error(t)}),e.complete&&(s=this.__isAsync?()=>{setTimeout(()=>e.complete())}:()=>{e.complete()})):(r=this.__isAsync?t=>{setTimeout(()=>e(t))}:t=>{e(t)},t&&(i=this.__isAsync?e=>{setTimeout(()=>t(e))}:e=>{t(e)}),n&&(s=this.__isAsync?()=>{setTimeout(()=>n())}:()=>{n()}));const a=super.subscribe(r,i,s);return e instanceof o.a&&e.add(a),a}}const Ms=Es;
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
const Ds=h("Directive",(e={})=>e,void 0,void 0,(e,t)=>As(e,t)),Is=h("Component",(e={})=>Object.assign({changeDetection:xe.Default},e),Ds,void 0,(e,t)=>Os(e,t)),Ts=h("Pipe",e=>Object.assign({pure:!0},e),void 0,void 0,(e,t)=>Ns(e,t)),Ss=g("Input",e=>({bindingPropertyName:e})),js=g("Output",e=>({bindingPropertyName:e})),Os=(g("HostBinding",e=>({hostPropertyName:e})),g("HostListener",(e,t)=>({eventName:e,args:t})),$i),As=$i,Ns=$i,Ps=h("NgModule",e=>e,void 0,void 0,(e,t)=>Vs(e,t));const Vs=function(e,t){let n=t&&t.imports||[];t&&t.exports&&(n=[...n,t.exports]),e.ɵinj=E({factory:jo(e,{useClass:e}),providers:t&&t.providers,imports:n})},Rs=new oe("Application Initializer");class Hs{constructor(e){this.appInits=e,this.initialized=!1,this.done=!1,this.donePromise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}runInitializers(){if(this.initialized)return;const e=[],t=()=>{this.done=!0,this.resolve()};if(this.appInits)for(let t=0;t<this.appInits.length;t++){const n=this.appInits[t]();xi(n)&&e.push(n)}Promise.all(e).then(()=>{t()}).catch(e=>{this.reject(e)}),0===e.length&&t(),this.initialized=!0}}Hs.decorators=[{type:Oo}],Hs.ctorParameters=()=>[{type:Array,decorators:[{type:y,args:[Rs]},{type:_}]}]
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */;const Fs={provide:new oe("AppId"),useFactory:function(){return`${Ls()}${Ls()}${Ls()}`},deps:[]};function Ls(){return String.fromCharCode(97+Math.floor(25*Math.random()))}const $s=new oe("Platform Initializer"),Bs=new oe("Platform ID"),Zs=new oe("appBootstrapListener");new oe("Application Packages Root URL");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class zs{log(e){console.log(e)}warn(e){console.warn(e)}}zs.decorators=[{type:Oo}];
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const Us=new oe("LocaleId"),Ws=new oe("DefaultCurrencyCode");new oe("Translations"),new oe("TranslationsFormat");var qs;!function(e){e[e.Error=0]="Error",e[e.Warning=1]="Warning",e[e.Ignore=2]="Ignore"}(qs||(qs={}));function Ks(){throw new Error("Runtime compiler is not loaded")}const Qs=Ks,Ys=Ks,Gs=Ks,Js=Ks;class Xs{constructor(){this.compileModuleSync=Qs,this.compileModuleAsync=Ys,this.compileModuleAndAllComponentsSync=Gs,this.compileModuleAndAllComponentsAsync=Js}clearCache(){}clearCacheFor(e){}getModuleId(e){}}Xs.decorators=[{type:Oo}];new oe("compilerOptions");class ea{}
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
class ra{constructor({enableLongStackTrace:e=!1,shouldCoalesceEventChangeDetection:t=!1}){if(this.hasPendingMacrotasks=!1,this.hasPendingMicrotasks=!1,this.isStable=!0,this.onUnstable=new Ms(!1),this.onMicrotaskEmpty=new Ms(!1),this.onStable=new Ms(!1),this.onError=new Ms(!1),"undefined"==typeof Zone)throw new Error("In this configuration Angular requires Zone.js");Zone.assertZonePatched();const n=this;n._nesting=0,n._outer=n._inner=Zone.current,Zone.wtfZoneSpec&&(n._inner=n._inner.fork(Zone.wtfZoneSpec)),Zone.TaskTrackingZoneSpec&&(n._inner=n._inner.fork(new Zone.TaskTrackingZoneSpec)),e&&Zone.longStackTraceZoneSpec&&(n._inner=n._inner.fork(Zone.longStackTraceZoneSpec)),n.shouldCoalesceEventChangeDetection=t,n.lastRequestAnimationFrameId=-1,n.nativeRequestAnimationFrame=function(){let e=F.requestAnimationFrame,t=F.cancelAnimationFrame;if("undefined"!=typeof Zone&&e&&t){const n=e[Zone.__symbol__("OriginalDelegate")];n&&(e=n);const r=t[Zone.__symbol__("OriginalDelegate")];r&&(t=r)}return{nativeRequestAnimationFrame:e,nativeCancelAnimationFrame:t}}().nativeRequestAnimationFrame,function(e){const t=!!e.shouldCoalesceEventChangeDetection&&e.nativeRequestAnimationFrame&&(()=>{!function(e){if(-1!==e.lastRequestAnimationFrameId)return;e.lastRequestAnimationFrameId=e.nativeRequestAnimationFrame.call(F,()=>{e.fakeTopEventTask||(e.fakeTopEventTask=Zone.root.scheduleEventTask("fakeTopEventTask",()=>{e.lastRequestAnimationFrameId=-1,aa(e),sa(e)},void 0,()=>{},()=>{})),e.fakeTopEventTask.invoke()}),aa(e)}(e)});e._inner=e._inner.fork({name:"angular",properties:{isAngularZone:!0,maybeDelayChangeDetection:t},onInvokeTask:(n,r,o,i,s,a)=>{try{return ua(e),n.invokeTask(o,i,s,a)}finally{t&&"eventTask"===i.type&&t(),ca(e)}},onInvoke:(t,n,r,o,i,s,a)=>{try{return ua(e),t.invoke(r,o,i,s,a)}finally{ca(e)}},onHasTask:(t,n,r,o)=>{t.hasTask(r,o),n===r&&("microTask"==o.change?(e._hasPendingMicrotasks=o.microTask,aa(e),sa(e)):"macroTask"==o.change&&(e.hasPendingMacrotasks=o.macroTask))},onHandleError:(t,n,r,o)=>(t.handleError(r,o),e.runOutsideAngular(()=>e.onError.emit(o)),!1)})}(n)}static isInAngularZone(){return!0===Zone.current.get("isAngularZone")}static assertInAngularZone(){if(!ra.isInAngularZone())throw new Error("Expected to be in Angular Zone, but it is not!")}static assertNotInAngularZone(){if(ra.isInAngularZone())throw new Error("Expected to not be in Angular Zone, but it is!")}run(e,t,n){return this._inner.run(e,t,n)}runTask(e,t,n,r){const o=this._inner,i=o.scheduleEventTask("NgZoneEvent: "+r,e,ia,oa,oa);try{return o.runTask(i,t,n)}finally{o.cancelTask(i)}}runGuarded(e,t,n){return this._inner.runGuarded(e,t,n)}runOutsideAngular(e){return this._outer.run(e)}}function oa(){}const ia={};function sa(e){if(0==e._nesting&&!e.hasPendingMicrotasks&&!e.isStable)try{e._nesting++,e.onMicrotaskEmpty.emit(null)}finally{if(e._nesting--,!e.hasPendingMicrotasks)try{e.runOutsideAngular(()=>e.onStable.emit(null))}finally{e.isStable=!0}}}function aa(e){e._hasPendingMicrotasks||e.shouldCoalesceEventChangeDetection&&-1!==e.lastRequestAnimationFrameId?e.hasPendingMicrotasks=!0:e.hasPendingMicrotasks=!1}function ua(e){e._nesting++,e.isStable&&(e.isStable=!1,e.onUnstable.emit(null))}function ca(e){e._nesting--,sa(e)}class la{constructor(){this.hasPendingMicrotasks=!1,this.hasPendingMacrotasks=!1,this.isStable=!0,this.onUnstable=new Ms,this.onMicrotaskEmpty=new Ms,this.onStable=new Ms,this.onError=new Ms}run(e,t,n){return e.apply(t,n)}runGuarded(e,t,n){return e.apply(t,n)}runOutsideAngular(e){return e()}runTask(e,t,n,r){return e.apply(t,n)}}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class da{constructor(e){this._ngZone=e,this._pendingCount=0,this._isZoneStable=!0,this._didWork=!1,this._callbacks=[],this.taskTrackingZone=null,this._watchAngularEvents(),e.run(()=>{this.taskTrackingZone="undefined"==typeof Zone?null:Zone.current.get("TaskTrackingZone")})}_watchAngularEvents(){this._ngZone.onUnstable.subscribe({next:()=>{this._didWork=!0,this._isZoneStable=!1}}),this._ngZone.runOutsideAngular(()=>{this._ngZone.onStable.subscribe({next:()=>{ra.assertNotInAngularZone(),na(()=>{this._isZoneStable=!0,this._runCallbacksIfReady()})}})})}increasePendingRequestCount(){return this._pendingCount+=1,this._didWork=!0,this._pendingCount}decreasePendingRequestCount(){if(this._pendingCount-=1,this._pendingCount<0)throw new Error("pending async requests below zero");return this._runCallbacksIfReady(),this._pendingCount}isStable(){return this._isZoneStable&&0===this._pendingCount&&!this._ngZone.hasPendingMacrotasks}_runCallbacksIfReady(){if(this.isStable())na(()=>{for(;0!==this._callbacks.length;){let e=this._callbacks.pop();clearTimeout(e.timeoutId),e.doneCb(this._didWork)}this._didWork=!1});else{let e=this.getPendingTasks();this._callbacks=this._callbacks.filter(t=>!t.updateCb||!t.updateCb(e)||(clearTimeout(t.timeoutId),!1)),this._didWork=!0}}getPendingTasks(){return this.taskTrackingZone?this.taskTrackingZone.macroTasks.map(e=>({source:e.source,creationLocation:e.creationLocation,data:e.data})):[]}addCallback(e,t,n){let r=-1;t&&t>0&&(r=setTimeout(()=>{this._callbacks=this._callbacks.filter(e=>e.timeoutId!==r),e(this._didWork,this.getPendingTasks())},t)),this._callbacks.push({doneCb:e,timeoutId:r,updateCb:n})}whenStable(e,t,n){if(n&&!this.taskTrackingZone)throw new Error('Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/dist/task-tracking.js" loaded?');this.addCallback(e,t,n),this._runCallbacksIfReady()}getPendingRequestCount(){return this._pendingCount}findProviders(e,t,n){return[]}}da.decorators=[{type:Oo}],da.ctorParameters=()=>[{type:ra}];class ha{constructor(){this._applications=new Map,pa.addToWindow(this)}registerApplication(e,t){this._applications.set(e,t)}unregisterApplication(e){this._applications.delete(e)}unregisterAllApplications(){this._applications.clear()}getTestability(e){return this._applications.get(e)||null}getAllTestabilities(){return Array.from(this._applications.values())}getAllRootElements(){return Array.from(this._applications.keys())}findTestabilityInTree(e,t=!0){return pa.findTestabilityInTree(this,e,t)}}ha.decorators=[{type:Oo}],ha.ctorParameters=()=>[];let fa,pa=new class{addToWindow(e){}findTestabilityInTree(e,t,n){return null}},ga=function(e,t,n){const r=e.get(ea);return r.createCompiler([t]).compileModuleAsync(n)};
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */let ya=function(){},_a=function(e){return e instanceof Li};const va=new oe("AllowMultipleToken");function ma(){return fa&&!fa.destroyed?fa:null}class ba{constructor(e){this._injector=e,this._modules=[],this._destroyListeners=[],this._destroyed=!1}bootstrapModuleFactory(e,t){const n=function(e,t){let n;n="noop"===e?new la:("zone.js"===e?void 0:e)||new ra({enableLongStackTrace:wn(),shouldCoalesceEventChangeDetection:t});return n}(t?t.ngZone:void 0,t&&t.ngZoneEventCoalescing||!1),r=[{provide:ra,useValue:n}];return n.run(()=>{const t=Vo.create({providers:r,parent:this.injector,name:e.moduleType.name}),o=e.create(t),i=o.injector.get(vn,null);if(!i)throw new Error("No ErrorHandler. Is platform module (BrowserModule) included?");return o.onDestroy(()=>Ca(this._modules,o)),n.runOutsideAngular(()=>n.onError.subscribe({next:e=>{i.handleError(e)}})),function(e,t,n){try{const r=n();return xi(r)?r.catch(n=>{throw t.runOutsideAngular(()=>e.handleError(n)),n}):r}catch(n){throw t.runOutsideAngular(()=>e.handleError(n)),n}}(i,n,()=>{const e=o.injector.get(Hs);return e.runInitializers(),e.donePromise.then(()=>(this._moduleDoBootstrap(o),o))})})}bootstrapModule(e,t=[]){const n=wa({},t);return ga(this.injector,n,e).then(e=>this.bootstrapModuleFactory(e,n))}_moduleDoBootstrap(e){const t=e.injector.get(xa);if(e._bootstrapComponents.length>0)e._bootstrapComponents.forEach(e=>t.bootstrap(e));else{if(!e.instance.ngDoBootstrap)throw new Error(`The module ${S(e.instance.constructor)} was bootstrapped, but it does not declare "@NgModule.bootstrap" components nor a "ngDoBootstrap" method. Please define one of these.`);e.instance.ngDoBootstrap(t)}this._modules.push(e)}onDestroy(e){this._destroyListeners.push(e)}get injector(){return this._injector}destroy(){if(this._destroyed)throw new Error("The platform has already been destroyed!");this._modules.slice().forEach(e=>e.destroy()),this._destroyListeners.forEach(e=>e()),this._destroyed=!0}get destroyed(){return this._destroyed}}function wa(e,t){return e=Array.isArray(t)?t.reduce(wa,e):Object.assign(Object.assign({},e),t)}ba.decorators=[{type:Oo}],ba.ctorParameters=()=>[{type:Vo}];class xa{constructor(e,t,n,r,o,u){this._zone=e,this._console=t,this._injector=n,this._exceptionHandler=r,this._componentFactoryResolver=o,this._initStatus=u,this._bootstrapListeners=[],this._views=[],this._runningTick=!1,this._enforceNoNewChanges=!1,this._stable=!0,this.componentTypes=[],this.components=[],this._enforceNoNewChanges=wn(),this._zone.onMicrotaskEmpty.subscribe({next:()=>{this._zone.run(()=>{this.tick()})}});const c=new i.a(e=>{this._stable=this._zone.isStable&&!this._zone.hasPendingMacrotasks&&!this._zone.hasPendingMicrotasks,this._zone.runOutsideAngular(()=>{e.next(this._stable),e.complete()})}),l=new i.a(e=>{let t;this._zone.runOutsideAngular(()=>{t=this._zone.onStable.subscribe(()=>{ra.assertNotInAngularZone(),na(()=>{this._stable||this._zone.hasPendingMacrotasks||this._zone.hasPendingMicrotasks||(this._stable=!0,e.next(!0))})})});const n=this._zone.onUnstable.subscribe(()=>{ra.assertInAngularZone(),this._stable&&(this._stable=!1,this._zone.runOutsideAngular(()=>{e.next(!1)}))});return()=>{t.unsubscribe(),n.unsubscribe()}});this.isStable=Object(s.a)(c,l.pipe(Object(a.a)()))}bootstrap(e,t){if(!this._initStatus.done)throw new Error("Cannot bootstrap as there are still asynchronous initializers running. Bootstrap components in the `ngDoBootstrap` method of the root module.");let n;n=e instanceof Vi?e:this._componentFactoryResolver.resolveComponentFactory(e),this.componentTypes.push(n.componentType);const r=_a(n)?void 0:this._injector.get(be),o=t||n.selector,i=n.create(Vo.NULL,[],o,r);i.onDestroy(()=>{this._unloadComponent(i)});const s=i.injector.get(da,null);return s&&i.injector.get(ha).registerApplication(i.location.nativeElement,s),this._loadComponent(i),wn()&&this._console.log("Angular is running in development mode. Call enableProdMode() to enable production mode."),i}tick(){if(this._runningTick)throw new Error("ApplicationRef.tick is called recursively");try{this._runningTick=!0;for(let e of this._views)e.detectChanges();if(this._enforceNoNewChanges)for(let e of this._views)e.checkNoChanges()}catch(e){this._zone.runOutsideAngular(()=>this._exceptionHandler.handleError(e))}finally{this._runningTick=!1}}attachView(e){const t=e;this._views.push(t),t.attachToAppRef(this)}detachView(e){const t=e;Ca(this._views,t),t.detachFromAppRef()}_loadComponent(e){this.attachView(e.hostView),this.tick(),this.components.push(e);this._injector.get(Zs,[]).concat(this._bootstrapListeners).forEach(t=>t(e))}_unloadComponent(e){this.detachView(e.hostView),Ca(this.components,e)}ngOnDestroy(){this._views.slice().forEach(e=>e.destroy())}get viewCount(){return this._views.length}}function Ca(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}xa.decorators=[{type:Oo}],xa.ctorParameters=()=>[{type:ra},{type:zs},{type:Vo},{type:vn},{type:Fi},{type:Hs}];class ka{}const Ea={factoryPathPrefix:"",factoryPathSuffix:".ngfactory"};class Ma{constructor(e,t){this._compiler=e,this._config=t||Ea}load(e){return this._compiler instanceof Xs?this.loadFactory(e):this.loadAndCompile(e)}loadAndCompile(e){let[t,r]=e.split("#");return void 0===r&&(r="default"),n(23)(t).then(e=>e[r]).then(e=>Da(e,t,r)).then(e=>this._compiler.compileModuleAsync(e))}loadFactory(e){let[t,r]=e.split("#"),o="NgFactory";return void 0===r&&(r="default",o=""),n(23)(this._config.factoryPathPrefix+t+this._config.factoryPathSuffix).then(e=>e[r+o]).then(e=>Da(e,t,r))}}function Da(e,t,n){if(!e)throw new Error(`Cannot find '${n}' in '${t}'`);return e}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */Ma.decorators=[{type:Oo}],Ma.ctorParameters=()=>[{type:Xs},{type:ka,decorators:[{type:_}]}];new Map;!function(e,t,n=[]){const r="Platform: "+t,o=new oe(r)}(null,"core",[{provide:Bs,useValue:"unknown"},{provide:ba,deps:[Vo]},{provide:ha,deps:[]},{provide:zs,deps:[]}]);const Ia=[{provide:xa,useClass:xa,deps:[ra,zs,Vo,vn,Fi,Hs]},{provide:xs,deps:[ra],useFactory:function(e){let t=[];return e.onStable.subscribe(()=>{for(;t.length;)t.pop()()}),function(e){t.push(e)}}},{provide:Hs,useClass:Hs,deps:[[new _,Rs]]},{provide:Xs,useClass:Xs,deps:[]},Fs,{provide:as,useFactory:
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function(){return ds},deps:[]},{provide:us,useFactory:function(){return hs},deps:[]},{provide:Us,useFactory:function(e){return e=e||("undefined"!=typeof ngI18nClosureMode&&ngI18nClosureMode&&"undefined"!=typeof goog&&"en"!==goog.LOCALE?goog.LOCALE:"en-US")},deps:[[new y(Us),new _,new m]]},{provide:Ws,useValue:"USD"}];class Ta{constructor(e){}}var Sa;Ta.decorators=[{type:Ps,args:[{providers:Ia}]}],Ta.ctorParameters=()=>[{type:xa}]
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */,function(e){e[e.CreateViewNodes=0]="CreateViewNodes",e[e.CheckNoChanges=1]="CheckNoChanges",e[e.CheckNoChangesProjectedViews=2]="CheckNoChangesProjectedViews",e[e.CheckAndUpdate=3]="CheckAndUpdate",e[e.CheckAndUpdateProjectedViews=4]="CheckAndUpdateProjectedViews",e[e.Destroy=5]="Destroy"}(Sa||(Sa={}));new Map,new Map,new Map;var ja;!function(e){e[e.create=0]="create",e[e.detectChanges=1]="detectChanges",e[e.checkNoChanges=2]="checkNoChanges",e[e.destroy=3]="destroy",e[e.handleEvent=4]="handleEvent"}(ja||(ja={}));
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
"undefined"!=typeof ngDevMode&&ngDevMode&&(F.$localize=F.$localize||function(){throw new Error("It looks like your application or one of its dependencies is using i18n.\nAngular 9 introduced a global `$localize()` function that needs to be loaded.\nPlease run `ng add @angular/localize` from the Angular CLI.\n(For non-CLI projects, add `import '@angular/localize/init';` to your `polyfills.ts` file.\nFor server-side rendering applications add the import to your `main.server.ts` file.)")});
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
var r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)};function o(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}},function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n(4);var o=n(9),i=n(10);var s=n(6),a=n(14);function u(e){return 0===e.length?a.a:1===e.length?e[0]:function(t){return e.reduce((function(e,t){return t(e)}),t)}}var c=n(5),l=function(){function e(e){this._isScalar=!1,e&&(this._subscribe=e)}return e.prototype.lift=function(t){var n=new e;return n.source=this,n.operator=t,n},e.prototype.subscribe=function(e,t,n){var s=this.operator,a=function(e,t,n){if(e){if(e instanceof r.a)return e;if(e[o.a])return e[o.a]()}return e||t||n?new r.a(e,t,n):new r.a(i.a)}(e,t,n);if(s?a.add(s.call(a,this.source)):a.add(this.source||c.a.useDeprecatedSynchronousErrorHandling&&!a.syncErrorThrowable?this._subscribe(a):this._trySubscribe(a)),c.a.useDeprecatedSynchronousErrorHandling&&a.syncErrorThrowable&&(a.syncErrorThrowable=!1,a.syncErrorThrown))throw a.syncErrorValue;return a},e.prototype._trySubscribe=function(e){try{return this._subscribe(e)}catch(t){c.a.useDeprecatedSynchronousErrorHandling&&(e.syncErrorThrown=!0,e.syncErrorValue=t),!function(e){for(;e;){var t=e,n=t.closed,o=t.destination,i=t.isStopped;if(n||i)return!1;e=o&&o instanceof r.a?o:null}return!0}(e)?console.warn(t):e.error(t)}},e.prototype.forEach=function(e,t){var n=this;return new(t=d(t))((function(t,r){var o;o=n.subscribe((function(t){try{e(t)}catch(e){r(e),o&&o.unsubscribe()}}),r,t)}))},e.prototype._subscribe=function(e){var t=this.source;return t&&t.subscribe(e)},e.prototype[s.a]=function(){return this},e.prototype.pipe=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return 0===e.length?this:u(e)(this)},e.prototype.toPromise=function(e){var t=this;return new(e=d(e))((function(e,n){var r;t.subscribe((function(e){return r=e}),(function(e){return n(e)}),(function(){return e(r)}))}))},e.create=function(t){return new e(t)},e}();function d(e){if(e||(e=c.a.Promise||Promise),!e)throw new Error("no Promise impl found");return e}},function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(20),o=n(13),i=n(11),s=function(){function e(e){return Error.call(this),this.message=e?e.length+" errors occurred during unsubscription:\n"+e.map((function(e,t){return t+1+") "+e.toString()})).join("\n  "):"",this.name="UnsubscriptionError",this.errors=e,this}return e.prototype=Object.create(Error.prototype),e}(),a=function(){function e(e){this.closed=!1,this._parentOrParents=null,this._subscriptions=null,e&&(this._ctorUnsubscribe=!0,this._unsubscribe=e)}var t;return e.prototype.unsubscribe=function(){var t;if(!this.closed){var n=this._parentOrParents,a=this._ctorUnsubscribe,c=this._unsubscribe,l=this._subscriptions;if(this.closed=!0,this._parentOrParents=null,this._subscriptions=null,n instanceof e)n.remove(this);else if(null!==n)for(var d=0;d<n.length;++d){n[d].remove(this)}if(Object(i.a)(c)){a&&(this._unsubscribe=void 0);try{c.call(this)}catch(e){t=e instanceof s?u(e.errors):[e]}}if(Object(r.a)(l)){d=-1;for(var h=l.length;++d<h;){var f=l[d];if(Object(o.a)(f))try{f.unsubscribe()}catch(e){t=t||[],e instanceof s?t=t.concat(u(e.errors)):t.push(e)}}}if(t)throw new s(t)}},e.prototype.add=function(t){var n=t;if(!t)return e.EMPTY;switch(typeof t){case"function":n=new e(t);case"object":if(n===this||n.closed||"function"!=typeof n.unsubscribe)return n;if(this.closed)return n.unsubscribe(),n;if(!(n instanceof e)){var r=n;(n=new e)._subscriptions=[r]}break;default:throw new Error("unrecognized teardown "+t+" added to Subscription.")}var o=n._parentOrParents;if(null===o)n._parentOrParents=this;else if(o instanceof e){if(o===this)return n;n._parentOrParents=[o,this]}else{if(-1!==o.indexOf(this))return n;o.push(this)}var i=this._subscriptions;return null===i?this._subscriptions=[n]:i.push(n),n},e.prototype.remove=function(e){var t=this._subscriptions;if(t){var n=t.indexOf(e);-1!==n&&t.splice(n,1)}},e.EMPTY=((t=new e).closed=!0,t),e}();function u(e){return e.reduce((function(e,t){return e.concat(t instanceof s?t.errors:t)}),[])}},function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n(1),o=n(11),i=n(10),s=n(3),a=n(9),u=n(5),c=n(7),l=function(e){function t(n,r,o){var s=e.call(this)||this;switch(s.syncErrorValue=null,s.syncErrorThrown=!1,s.syncErrorThrowable=!1,s.isStopped=!1,arguments.length){case 0:s.destination=i.a;break;case 1:if(!n){s.destination=i.a;break}if("object"==typeof n){n instanceof t?(s.syncErrorThrowable=n.syncErrorThrowable,s.destination=n,n.add(s)):(s.syncErrorThrowable=!0,s.destination=new d(s,n));break}default:s.syncErrorThrowable=!0,s.destination=new d(s,n,r,o)}return s}return r.a(t,e),t.prototype[a.a]=function(){return this},t.create=function(e,n,r){var o=new t(e,n,r);return o.syncErrorThrowable=!1,o},t.prototype.next=function(e){this.isStopped||this._next(e)},t.prototype.error=function(e){this.isStopped||(this.isStopped=!0,this._error(e))},t.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},t.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,e.prototype.unsubscribe.call(this))},t.prototype._next=function(e){this.destination.next(e)},t.prototype._error=function(e){this.destination.error(e),this.unsubscribe()},t.prototype._complete=function(){this.destination.complete(),this.unsubscribe()},t.prototype._unsubscribeAndRecycle=function(){var e=this._parentOrParents;return this._parentOrParents=null,this.unsubscribe(),this.closed=!1,this.isStopped=!1,this._parentOrParents=e,this},t}(s.a),d=function(e){function t(t,n,r,s){var a,u=e.call(this)||this;u._parentSubscriber=t;var c=u;return Object(o.a)(n)?a=n:n&&(a=n.next,r=n.error,s=n.complete,n!==i.a&&(c=Object.create(n),Object(o.a)(c.unsubscribe)&&u.add(c.unsubscribe.bind(c)),c.unsubscribe=u.unsubscribe.bind(u))),u._context=c,u._next=a,u._error=r,u._complete=s,u}return r.a(t,e),t.prototype.next=function(e){if(!this.isStopped&&this._next){var t=this._parentSubscriber;u.a.useDeprecatedSynchronousErrorHandling&&t.syncErrorThrowable?this.__tryOrSetError(t,this._next,e)&&this.unsubscribe():this.__tryOrUnsub(this._next,e)}},t.prototype.error=function(e){if(!this.isStopped){var t=this._parentSubscriber,n=u.a.useDeprecatedSynchronousErrorHandling;if(this._error)n&&t.syncErrorThrowable?(this.__tryOrSetError(t,this._error,e),this.unsubscribe()):(this.__tryOrUnsub(this._error,e),this.unsubscribe());else if(t.syncErrorThrowable)n?(t.syncErrorValue=e,t.syncErrorThrown=!0):Object(c.a)(e),this.unsubscribe();else{if(this.unsubscribe(),n)throw e;Object(c.a)(e)}}},t.prototype.complete=function(){var e=this;if(!this.isStopped){var t=this._parentSubscriber;if(this._complete){var n=function(){return e._complete.call(e._context)};u.a.useDeprecatedSynchronousErrorHandling&&t.syncErrorThrowable?(this.__tryOrSetError(t,n),this.unsubscribe()):(this.__tryOrUnsub(n),this.unsubscribe())}else this.unsubscribe()}},t.prototype.__tryOrUnsub=function(e,t){try{e.call(this._context,t)}catch(e){if(this.unsubscribe(),u.a.useDeprecatedSynchronousErrorHandling)throw e;Object(c.a)(e)}},t.prototype.__tryOrSetError=function(e,t,n){if(!u.a.useDeprecatedSynchronousErrorHandling)throw new Error("bad call");try{t.call(this._context,n)}catch(t){return u.a.useDeprecatedSynchronousErrorHandling?(e.syncErrorValue=t,e.syncErrorThrown=!0,!0):(Object(c.a)(t),!0)}return!1},t.prototype._unsubscribe=function(){var e=this._parentSubscriber;this._context=null,this._parentSubscriber=null,e.unsubscribe()},t}(l)},function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=!1,o={Promise:void 0,set useDeprecatedSynchronousErrorHandling(e){e&&(new Error).stack;r=e},get useDeprecatedSynchronousErrorHandling(){return r}}},function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r=function(){return"function"==typeof Symbol&&Symbol.observable||"@@observable"}()},function(e,t,n){"use strict";function r(e){setTimeout((function(){throw e}),0)}n.d(t,"a",(function(){return r}))},function(e,t,n){"use strict";function r(){return"function"==typeof Symbol&&Symbol.iterator?Symbol.iterator:"@@iterator"}n.d(t,"a",(function(){return o}));var o=r()},function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r=function(){return"function"==typeof Symbol?Symbol("rxSubscriber"):"@@rxSubscriber_"+Math.random()}()},function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(5),o=n(7),i={closed:!0,next:function(e){},error:function(e){if(r.a.useDeprecatedSynchronousErrorHandling)throw e;Object(o.a)(e)},complete:function(){}}},function(e,t,n){"use strict";function r(e){return"function"==typeof e}n.d(t,"a",(function(){return r}))},function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return d}));var r=n(1),o=n(2),i=n(4),s=n(3),a=function(){function e(){return Error.call(this),this.message="object unsubscribed",this.name="ObjectUnsubscribedError",this}return e.prototype=Object.create(Error.prototype),e}(),u=function(e){function t(t,n){var r=e.call(this)||this;return r.subject=t,r.subscriber=n,r.closed=!1,r}return r.a(t,e),t.prototype.unsubscribe=function(){if(!this.closed){this.closed=!0;var e=this.subject,t=e.observers;if(this.subject=null,t&&0!==t.length&&!e.isStopped&&!e.closed){var n=t.indexOf(this.subscriber);-1!==n&&t.splice(n,1)}}},t}(s.a),c=n(9),l=function(e){function t(t){var n=e.call(this,t)||this;return n.destination=t,n}return r.a(t,e),t}(i.a),d=function(e){function t(){var t=e.call(this)||this;return t.observers=[],t.closed=!1,t.isStopped=!1,t.hasError=!1,t.thrownError=null,t}return r.a(t,e),t.prototype[c.a]=function(){return new l(this)},t.prototype.lift=function(e){var t=new h(this,this);return t.operator=e,t},t.prototype.next=function(e){if(this.closed)throw new a;if(!this.isStopped)for(var t=this.observers,n=t.length,r=t.slice(),o=0;o<n;o++)r[o].next(e)},t.prototype.error=function(e){if(this.closed)throw new a;this.hasError=!0,this.thrownError=e,this.isStopped=!0;for(var t=this.observers,n=t.length,r=t.slice(),o=0;o<n;o++)r[o].error(e);this.observers.length=0},t.prototype.complete=function(){if(this.closed)throw new a;this.isStopped=!0;for(var e=this.observers,t=e.length,n=e.slice(),r=0;r<t;r++)n[r].complete();this.observers.length=0},t.prototype.unsubscribe=function(){this.isStopped=!0,this.closed=!0,this.observers=null},t.prototype._trySubscribe=function(t){if(this.closed)throw new a;return e.prototype._trySubscribe.call(this,t)},t.prototype._subscribe=function(e){if(this.closed)throw new a;return this.hasError?(e.error(this.thrownError),s.a.EMPTY):this.isStopped?(e.complete(),s.a.EMPTY):(this.observers.push(e),new u(this,e))},t.prototype.asObservable=function(){var e=new o.a;return e.source=this,e},t.create=function(e,t){return new h(e,t)},t}(o.a),h=function(e){function t(t,n){var r=e.call(this)||this;return r.destination=t,r.source=n,r}return r.a(t,e),t.prototype.next=function(e){var t=this.destination;t&&t.next&&t.next(e)},t.prototype.error=function(e){var t=this.destination;t&&t.error&&this.destination.error(e)},t.prototype.complete=function(){var e=this.destination;e&&e.complete&&this.destination.complete()},t.prototype._subscribe=function(e){return this.source?this.source.subscribe(e):s.a.EMPTY},t}(d)},function(e,t,n){"use strict";function r(e){return null!==e&&"object"==typeof e}n.d(t,"a",(function(){return r}))},function(e,t,n){"use strict";function r(e){return e}n.d(t,"a",(function(){return r}))},function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r=function(e){return e&&"number"==typeof e.length&&"function"!=typeof e}},function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r=function(e){return function(t){for(var n=0,r=e.length;n<r&&!t.closed;n++)t.next(e[n]);t.complete()}}},function(e,t,n){"use strict";function r(e){return!!e&&"function"!=typeof e.subscribe&&"function"==typeof e.then}n.d(t,"a",(function(){return r}))},function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(2),o=n(3);function i(e,t){return new r.a((function(n){var r=new o.a,i=0;return r.add(t.schedule((function(){i!==e.length?(n.next(e[i++]),n.closed||r.add(this.schedule())):n.complete()}))),r}))}},function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n(16),o=n(7),i=n(8),s=n(6),a=n(15),u=n(17),c=n(13),l=function(e){if(e&&"function"==typeof e[s.a])return l=e,function(e){var t=l[s.a]();if("function"!=typeof t.subscribe)throw new TypeError("Provided object does not correctly implement Symbol.observable");return t.subscribe(e)};if(Object(a.a)(e))return Object(r.a)(e);if(Object(u.a)(e))return n=e,function(e){return n.then((function(t){e.closed||(e.next(t),e.complete())}),(function(t){return e.error(t)})).then(null,o.a),e};if(e&&"function"==typeof e[i.a])return t=e,function(e){for(var n=t[i.a]();;){var r=void 0;try{r=n.next()}catch(t){return e.error(t),e}if(r.done){e.complete();break}if(e.next(r.value),e.closed)break}return"function"==typeof n.return&&e.add((function(){n.return&&n.return()})),e};var t,n,l,d=Object(c.a)(e)?"an invalid object":"'"+e+"'";throw new TypeError("You provided "+d+" where a stream was expected. You can provide an Observable, Promise, Array, or Iterable.")}},function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r=function(){return Array.isArray||function(e){return e&&"number"==typeof e.length}}()},function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(1),o=n(4);function i(e,t){return function(n){if("function"!=typeof e)throw new TypeError("argument is not a function. Are you looking for `mapTo()`?");return n.lift(new s(e,t))}}var s=function(){function e(e,t){this.project=e,this.thisArg=t}return e.prototype.call=function(e,t){return t.subscribe(new a(e,this.project,this.thisArg))},e}(),a=function(e){function t(t,n,r){var o=e.call(this,t)||this;return o.project=n,o.count=0,o.thisArg=r||o,o}return r.a(t,e),t.prototype._next=function(e){var t;try{t=this.project.call(this.thisArg,e,this.count++)}catch(e){return void this.destination.error(e)}this.destination.next(t)},t}(o.a)},function(e,t,n){"use strict";n.d(t,"a",(function(){return h}));var r=n(2),o=n(19),i=n(3),s=n(6);var a=n(18),u=n(8);var c=n(17),l=n(15);function d(e,t){if(null!=e){if(function(e){return e&&"function"==typeof e[s.a]}(e))return function(e,t){return new r.a((function(n){var r=new i.a;return r.add(t.schedule((function(){var o=e[s.a]();r.add(o.subscribe({next:function(e){r.add(t.schedule((function(){return n.next(e)})))},error:function(e){r.add(t.schedule((function(){return n.error(e)})))},complete:function(){r.add(t.schedule((function(){return n.complete()})))}}))}))),r}))}(e,t);if(Object(c.a)(e))return function(e,t){return new r.a((function(n){var r=new i.a;return r.add(t.schedule((function(){return e.then((function(e){r.add(t.schedule((function(){n.next(e),r.add(t.schedule((function(){return n.complete()})))})))}),(function(e){r.add(t.schedule((function(){return n.error(e)})))}))}))),r}))}(e,t);if(Object(l.a)(e))return Object(a.a)(e,t);if(function(e){return e&&"function"==typeof e[u.a]}(e)||"string"==typeof e)return function(e,t){if(!e)throw new Error("Iterable cannot be null");return new r.a((function(n){var r,o=new i.a;return o.add((function(){r&&"function"==typeof r.return&&r.return()})),o.add(t.schedule((function(){r=e[u.a](),o.add(t.schedule((function(){if(!n.closed){var e,t;try{var o=r.next();e=o.value,t=o.done}catch(e){return void n.error(e)}t?n.complete():(n.next(e),this.schedule())}})))}))),o}))}(e,t)}throw new TypeError((null!==e&&typeof e||e)+" is not observable")}function h(e,t){return t?d(e,t):e instanceof r.a?e:new r.a(Object(o.a)(e))}},function(e,t){function n(e){return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}))}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id=23},function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));function r(e,t,n,r){var o,i=arguments.length,s=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,n,s):o(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s}Object.create;Object.create},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var r=n(2);function o(e){return e&&"function"==typeof e.schedule}var i=n(1),s=n(21),a=n(22),u=n(4),c=n(19),l=function(e){function t(t){var n=e.call(this)||this;return n.parent=t,n}return i.a(t,e),t.prototype._next=function(e){this.parent.notifyNext(e)},t.prototype._error=function(e){this.parent.notifyError(e),this.unsubscribe()},t.prototype._complete=function(){this.parent.notifyComplete(),this.unsubscribe()},t}(u.a),d=(u.a,function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return i.a(t,e),t.prototype.notifyNext=function(e){this.destination.next(e)},t.prototype.notifyError=function(e){this.destination.error(e)},t.prototype.notifyComplete=function(){this.destination.complete()},t}(u.a));u.a;function h(e,t,n){return void 0===n&&(n=Number.POSITIVE_INFINITY),"function"==typeof t?function(r){return r.pipe(h((function(n,r){return Object(a.a)(e(n,r)).pipe(Object(s.a)((function(e,o){return t(n,e,r,o)})))}),n))}:("number"==typeof t&&(n=t),function(t){return t.lift(new f(e,n))})}var f=function(){function e(e,t){void 0===t&&(t=Number.POSITIVE_INFINITY),this.project=e,this.concurrent=t}return e.prototype.call=function(e,t){return t.subscribe(new p(e,this.project,this.concurrent))},e}(),p=function(e){function t(t,n,r){void 0===r&&(r=Number.POSITIVE_INFINITY);var o=e.call(this,t)||this;return o.project=n,o.concurrent=r,o.hasCompleted=!1,o.buffer=[],o.active=0,o.index=0,o}return i.a(t,e),t.prototype._next=function(e){this.active<this.concurrent?this._tryNext(e):this.buffer.push(e)},t.prototype._tryNext=function(e){var t,n=this.index++;try{t=this.project(e,n)}catch(e){return void this.destination.error(e)}this.active++,this._innerSub(t)},t.prototype._innerSub=function(e){var t=new l(this),n=this.destination;n.add(t);var o=function(e,t){if(!t.closed)return e instanceof r.a?e.subscribe(t):Object(c.a)(e)(t)}(e,t);o!==t&&n.add(o)},t.prototype._complete=function(){this.hasCompleted=!0,0===this.active&&0===this.buffer.length&&this.destination.complete(),this.unsubscribe()},t.prototype.notifyNext=function(e){this.destination.next(e)},t.prototype.notifyComplete=function(){var e=this.buffer;this.active--,e.length>0?this._next(e.shift()):0===this.active&&this.hasCompleted&&this.destination.complete()},t}(d),g=n(14);function y(e){return void 0===e&&(e=Number.POSITIVE_INFINITY),h(g.a,e)}var _=n(16),v=n(18);function m(e,t){return t?Object(v.a)(e,t):new r.a(Object(_.a)(e))}function b(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n=Number.POSITIVE_INFINITY,i=null,s=e[e.length-1];return o(s)?(i=e.pop(),e.length>1&&"number"==typeof e[e.length-1]&&(n=e.pop())):"number"==typeof s&&(n=e.pop()),null===i&&1===e.length&&e[0]instanceof r.a?e[0]:y(n)(m(e,i))}},function(e,t,n){"use strict";n.d(t,"a",(function(){return y}));var r=n(1),o=n(12),i=n(2),s=n(4),a=n(3);function u(){return function(e){return e.lift(new c(e))}}var c=function(){function e(e){this.connectable=e}return e.prototype.call=function(e,t){var n=this.connectable;n._refCount++;var r=new l(e,n),o=t.subscribe(r);return r.closed||(r.connection=n.connect()),o},e}(),l=function(e){function t(t,n){var r=e.call(this,t)||this;return r.connectable=n,r}return r.a(t,e),t.prototype._unsubscribe=function(){var e=this.connectable;if(e){this.connectable=null;var t=e._refCount;if(t<=0)this.connection=null;else if(e._refCount=t-1,t>1)this.connection=null;else{var n=this.connection,r=e._connection;this.connection=null,!r||n&&r!==n||r.unsubscribe()}}else this.connection=null},t}(s.a),d=function(e){function t(t,n){var r=e.call(this)||this;return r.source=t,r.subjectFactory=n,r._refCount=0,r._isComplete=!1,r}return r.a(t,e),t.prototype._subscribe=function(e){return this.getSubject().subscribe(e)},t.prototype.getSubject=function(){var e=this._subject;return e&&!e.isStopped||(this._subject=this.subjectFactory()),this._subject},t.prototype.connect=function(){var e=this._connection;return e||(this._isComplete=!1,(e=this._connection=new a.a).add(this.source.subscribe(new f(this.getSubject(),this))),e.closed&&(this._connection=null,e=a.a.EMPTY)),e},t.prototype.refCount=function(){return u()(this)},t}(i.a),h=function(){var e=d.prototype;return{operator:{value:null},_refCount:{value:0,writable:!0},_subject:{value:null,writable:!0},_connection:{value:null,writable:!0},_subscribe:{value:e._subscribe},_isComplete:{value:e._isComplete,writable:!0},getSubject:{value:e.getSubject},connect:{value:e.connect},refCount:{value:e.refCount}}}(),f=function(e){function t(t,n){var r=e.call(this,t)||this;return r.connectable=n,r}return r.a(t,e),t.prototype._error=function(t){this._unsubscribe(),e.prototype._error.call(this,t)},t.prototype._complete=function(){this.connectable._isComplete=!0,this._unsubscribe(),e.prototype._complete.call(this)},t.prototype._unsubscribe=function(){var e=this.connectable;if(e){this.connectable=null;var t=e._connection;e._refCount=0,e._subject=null,e._connection=null,t&&t.unsubscribe()}},t}(o.b);s.a;var p=function(){function e(e,t){this.subjectFactory=e,this.selector=t}return e.prototype.call=function(e,t){var n=this.selector,r=this.subjectFactory(),o=n(r).subscribe(e);return o.add(t.subscribe(r)),o},e}();function g(){return new o.a}function y(){return function(e){return u()((t=g,function(e){var r;if(r="function"==typeof t?t:function(){return t},"function"==typeof n)return e.lift(new p(r,n));var o=Object.create(e,h);return o.source=e,o.subjectFactory=r,o})(e));var t,n}}},,,,,function(e,t,n){"use strict";n.r(t),n.d(t,"PageNotFoundComponent",(function(){return i}));var r=n(24),o=n(0);let i=class{constructor(e){this.router=e}ngOnInit(){}bringBackToRoute(){this.router.navigate(["/flight/discover"])}};i=Object(r.a)([Object(o.c)({selector:"app-page-not-found",templateUrl:"./page-not-found.component.html",styleUrls:["./page-not-found.component.scss"]})],i)}]);