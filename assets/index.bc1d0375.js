(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function e(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(i){if(i.ep)return;i.ep=!0;const o=e(i);fetch(i.href,o)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const k=window,X=k.ShadowRoot&&(k.ShadyCSS===void 0||k.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,tt=Symbol(),st=new WeakMap;class mt{constructor(t,e,s){if(this._$cssResult$=!0,s!==tt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(X&&t===void 0){const s=e!==void 0&&e.length===1;s&&(t=st.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&st.set(e,t))}return t}toString(){return this.cssText}}const At=r=>new mt(typeof r=="string"?r:r+"",void 0,tt),C=(r,...t)=>{const e=r.length===1?r[0]:t.reduce((s,i,o)=>s+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+r[o+1],r[0]);return new mt(e,r,tt)},wt=(r,t)=>{X?r.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{const s=document.createElement("style"),i=k.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=e.cssText,r.appendChild(s)})},it=X?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return At(e)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Z;const D=window,rt=D.trustedTypes,St=rt?rt.emptyScript:"",ot=D.reactiveElementPolyfillSupport,F={toAttribute(r,t){switch(t){case Boolean:r=r?St:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let e=r;switch(t){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch{e=null}}return e}},$t=(r,t)=>t!==r&&(t==t||r==r),K={attribute:!0,type:String,converter:F,reflect:!1,hasChanged:$t};class b extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;(e=this.h)!==null&&e!==void 0||(this.h=[]),this.h.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,s)=>{const i=this._$Ep(s,e);i!==void 0&&(this._$Ev.set(i,s),t.push(i))}),t}static createProperty(t,e=K){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const s=typeof t=="symbol"?Symbol():"__"+t,i=this.getPropertyDescriptor(t,s,e);i!==void 0&&Object.defineProperty(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){return{get(){return this[e]},set(i){const o=this[t];this[e]=i,this.requestUpdate(t,o,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||K}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,s=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const i of s)this.createProperty(i,e[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const i of s)e.unshift(it(i))}else t!==void 0&&e.push(it(t));return e}static _$Ep(t,e){const s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,s;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((s=t.hostConnected)===null||s===void 0||s.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return wt(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var s;return(s=e.hostConnected)===null||s===void 0?void 0:s.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var s;return(s=e.hostDisconnected)===null||s===void 0?void 0:s.call(e)})}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$EO(t,e,s=K){var i;const o=this.constructor._$Ep(t,s);if(o!==void 0&&s.reflect===!0){const n=(((i=s.converter)===null||i===void 0?void 0:i.toAttribute)!==void 0?s.converter:F).toAttribute(e,s.type);this._$El=t,n==null?this.removeAttribute(o):this.setAttribute(o,n),this._$El=null}}_$AK(t,e){var s;const i=this.constructor,o=i._$Ev.get(t);if(o!==void 0&&this._$El!==o){const n=i.getPropertyOptions(o),d=typeof n.converter=="function"?{fromAttribute:n.converter}:((s=n.converter)===null||s===void 0?void 0:s.fromAttribute)!==void 0?n.converter:F;this._$El=o,this[o]=d.fromAttribute(e,n.type),this._$El=null}}requestUpdate(t,e,s){let i=!0;t!==void 0&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||$t)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),s.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,s))):i=!1),!this.isUpdatePending&&i&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((i,o)=>this[o]=i),this._$Ei=void 0);let e=!1;const s=this._$AL;try{e=this.shouldUpdate(s),e?(this.willUpdate(s),(t=this._$ES)===null||t===void 0||t.forEach(i=>{var o;return(o=i.hostUpdate)===null||o===void 0?void 0:o.call(i)}),this.update(s)):this._$Ek()}catch(i){throw e=!1,this._$Ek(),i}e&&this._$AE(s)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(s=>{var i;return(i=s.hostUpdated)===null||i===void 0?void 0:i.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,s)=>this._$EO(s,this[s],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}b.finalized=!0,b.elementProperties=new Map,b.elementStyles=[],b.shadowRootOptions={mode:"open"},ot==null||ot({ReactiveElement:b}),((Z=D.reactiveElementVersions)!==null&&Z!==void 0?Z:D.reactiveElementVersions=[]).push("1.4.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var W;const I=window,w=I.trustedTypes,nt=w?w.createPolicy("lit-html",{createHTML:r=>r}):void 0,_=`lit$${(Math.random()+"").slice(9)}$`,ft="?"+_,Et=`<${ft}>`,S=document,U=(r="")=>S.createComment(r),L=r=>r===null||typeof r!="object"&&typeof r!="function",_t=Array.isArray,xt=r=>_t(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",N=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,lt=/-->/g,ht=/>/g,y=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),at=/'/g,dt=/"/g,gt=/^(?:script|style|textarea|title)$/i,Ct=r=>(t,...e)=>({_$litType$:r,strings:t,values:e}),$=Ct(1),E=Symbol.for("lit-noChange"),p=Symbol.for("lit-nothing"),ct=new WeakMap,Pt=(r,t,e)=>{var s,i;const o=(s=e==null?void 0:e.renderBefore)!==null&&s!==void 0?s:t;let n=o._$litPart$;if(n===void 0){const d=(i=e==null?void 0:e.renderBefore)!==null&&i!==void 0?i:null;o._$litPart$=n=new R(t.insertBefore(U(),d),d,void 0,e!=null?e:{})}return n._$AI(r),n},A=S.createTreeWalker(S,129,null,!1),Ot=(r,t)=>{const e=r.length-1,s=[];let i,o=t===2?"<svg>":"",n=N;for(let l=0;l<e;l++){const h=r[l];let m,a,c=-1,u=0;for(;u<h.length&&(n.lastIndex=u,a=n.exec(h),a!==null);)u=n.lastIndex,n===N?a[1]==="!--"?n=lt:a[1]!==void 0?n=ht:a[2]!==void 0?(gt.test(a[2])&&(i=RegExp("</"+a[2],"g")),n=y):a[3]!==void 0&&(n=y):n===y?a[0]===">"?(n=i!=null?i:N,c=-1):a[1]===void 0?c=-2:(c=n.lastIndex-a[2].length,m=a[1],n=a[3]===void 0?y:a[3]==='"'?dt:at):n===dt||n===at?n=y:n===lt||n===ht?n=N:(n=y,i=void 0);const M=n===y&&r[l+1].startsWith("/>")?" ":"";o+=n===N?h+Et:c>=0?(s.push(m),h.slice(0,c)+"$lit$"+h.slice(c)+_+M):h+_+(c===-2?(s.push(void 0),l):M)}const d=o+(r[e]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return[nt!==void 0?nt.createHTML(d):d,s]};class T{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let o=0,n=0;const d=t.length-1,l=this.parts,[h,m]=Ot(t,e);if(this.el=T.createElement(h,s),A.currentNode=this.el.content,e===2){const a=this.el.content,c=a.firstChild;c.remove(),a.append(...c.childNodes)}for(;(i=A.nextNode())!==null&&l.length<d;){if(i.nodeType===1){if(i.hasAttributes()){const a=[];for(const c of i.getAttributeNames())if(c.endsWith("$lit$")||c.startsWith(_)){const u=m[n++];if(a.push(c),u!==void 0){const M=i.getAttribute(u.toLowerCase()+"$lit$").split(_),j=/([.?@])?(.*)/.exec(u);l.push({type:1,index:o,name:j[2],strings:M,ctor:j[1]==="."?Ut:j[1]==="?"?Tt:j[1]==="@"?Ht:V})}else l.push({type:6,index:o})}for(const c of a)i.removeAttribute(c)}if(gt.test(i.tagName)){const a=i.textContent.split(_),c=a.length-1;if(c>0){i.textContent=w?w.emptyScript:"";for(let u=0;u<c;u++)i.append(a[u],U()),A.nextNode(),l.push({type:2,index:++o});i.append(a[c],U())}}}else if(i.nodeType===8)if(i.data===ft)l.push({type:2,index:o});else{let a=-1;for(;(a=i.data.indexOf(_,a+1))!==-1;)l.push({type:7,index:o}),a+=_.length-1}o++}}static createElement(t,e){const s=S.createElement("template");return s.innerHTML=t,s}}function x(r,t,e=r,s){var i,o,n,d;if(t===E)return t;let l=s!==void 0?(i=e._$Cl)===null||i===void 0?void 0:i[s]:e._$Cu;const h=L(t)?void 0:t._$litDirective$;return(l==null?void 0:l.constructor)!==h&&((o=l==null?void 0:l._$AO)===null||o===void 0||o.call(l,!1),h===void 0?l=void 0:(l=new h(r),l._$AT(r,e,s)),s!==void 0?((n=(d=e)._$Cl)!==null&&n!==void 0?n:d._$Cl=[])[s]=l:e._$Cu=l),l!==void 0&&(t=x(r,l._$AS(r,t.values),l,s)),t}class Nt{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:s},parts:i}=this._$AD,o=((e=t==null?void 0:t.creationScope)!==null&&e!==void 0?e:S).importNode(s,!0);A.currentNode=o;let n=A.nextNode(),d=0,l=0,h=i[0];for(;h!==void 0;){if(d===h.index){let m;h.type===2?m=new R(n,n.nextSibling,this,t):h.type===1?m=new h.ctor(n,h.name,h.strings,this,t):h.type===6&&(m=new Rt(n,this,t)),this.v.push(m),h=i[++l]}d!==(h==null?void 0:h.index)&&(n=A.nextNode(),d++)}return o}m(t){let e=0;for(const s of this.v)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class R{constructor(t,e,s,i){var o;this.type=2,this._$AH=p,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$C_=(o=i==null?void 0:i.isConnected)===null||o===void 0||o}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$C_}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=x(this,t,e),L(t)?t===p||t==null||t===""?(this._$AH!==p&&this._$AR(),this._$AH=p):t!==this._$AH&&t!==E&&this.$(t):t._$litType$!==void 0?this.T(t):t.nodeType!==void 0?this.k(t):xt(t)?this.O(t):this.$(t)}S(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}k(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}$(t){this._$AH!==p&&L(this._$AH)?this._$AA.nextSibling.data=t:this.k(S.createTextNode(t)),this._$AH=t}T(t){var e;const{values:s,_$litType$:i}=t,o=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=T.createElement(i.h,this.options)),i);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===o)this._$AH.m(s);else{const n=new Nt(o,this),d=n.p(this.options);n.m(s),this.k(d),this._$AH=n}}_$AC(t){let e=ct.get(t.strings);return e===void 0&&ct.set(t.strings,e=new T(t)),e}O(t){_t(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const o of t)i===e.length?e.push(s=new R(this.S(U()),this.S(U()),this,this.options)):s=e[i],s._$AI(o),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var s;for((s=this._$AP)===null||s===void 0||s.call(this,!1,!0,e);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var e;this._$AM===void 0&&(this._$C_=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}}class V{constructor(t,e,s,i,o){this.type=1,this._$AH=p,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=o,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=p}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,s,i){const o=this.strings;let n=!1;if(o===void 0)t=x(this,t,e,0),n=!L(t)||t!==this._$AH&&t!==E,n&&(this._$AH=t);else{const d=t;let l,h;for(t=o[0],l=0;l<o.length-1;l++)h=x(this,d[s+l],e,l),h===E&&(h=this._$AH[l]),n||(n=!L(h)||h!==this._$AH[l]),h===p?t=p:t!==p&&(t+=(h!=null?h:"")+o[l+1]),this._$AH[l]=h}n&&!i&&this.P(t)}P(t){t===p?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t!=null?t:"")}}class Ut extends V{constructor(){super(...arguments),this.type=3}P(t){this.element[this.name]=t===p?void 0:t}}const Lt=w?w.emptyScript:"";class Tt extends V{constructor(){super(...arguments),this.type=4}P(t){t&&t!==p?this.element.setAttribute(this.name,Lt):this.element.removeAttribute(this.name)}}class Ht extends V{constructor(t,e,s,i,o){super(t,e,s,i,o),this.type=5}_$AI(t,e=this){var s;if((t=(s=x(this,t,e,0))!==null&&s!==void 0?s:p)===E)return;const i=this._$AH,o=t===p&&i!==p||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,n=t!==p&&(i===p||o);o&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,s;typeof this._$AH=="function"?this._$AH.call((s=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&s!==void 0?s:this.element,t):this._$AH.handleEvent(t)}}class Rt{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){x(this,t)}}const pt=I.litHtmlPolyfillSupport;pt==null||pt(T,R),((W=I.litHtmlVersions)!==null&&W!==void 0?W:I.litHtmlVersions=[]).push("2.3.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var q,Y;class v extends b{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const s=super.createRenderRoot();return(t=(e=this.renderOptions).renderBefore)!==null&&t!==void 0||(e.renderBefore=s.firstChild),s}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Pt(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return E}}v.finalized=!0,v._$litElement$=!0,(q=globalThis.litElementHydrateSupport)===null||q===void 0||q.call(globalThis,{LitElement:v});const ut=globalThis.litElementPolyfillSupport;ut==null||ut({LitElement:v});((Y=globalThis.litElementVersions)!==null&&Y!==void 0?Y:globalThis.litElementVersions=[]).push("3.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const P=r=>t=>typeof t=="function"?((e,s)=>(customElements.define(e,s),s))(r,t):((e,s)=>{const{kind:i,elements:o}=s;return{kind:i,elements:o,finisher(n){customElements.define(e,n)}}})(r,t);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Mt=(r,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(e){e.createProperty(t.key,r)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(e){e.createProperty(t.key,r)}};function f(r){return(t,e)=>e!==void 0?((s,i,o)=>{i.constructor.createProperty(o,s)})(r,t,e):Mt(r,t)}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var J;((J=window.HTMLSlotElement)===null||J===void 0?void 0:J.prototype.assignedElements)!=null;class vt extends Event{constructor(t,e){super(t);const{time:s,reset:i}=e;this.time=s,this.reset=i||!1}}var jt=Object.defineProperty,kt=Object.getOwnPropertyDescriptor,yt=(r,t,e,s)=>{for(var i=s>1?void 0:s?kt(t,e):t,o=r.length-1,n;o>=0;o--)(n=r[o])&&(i=(s?n(t,e,i):n(i))||i);return s&&i&&jt(t,e,i),i};let z=class extends v{constructor(){super(),this.name="",this.render=()=>$`<button class="${this.name.toLowerCase()}">${this.name}</button>`}};z.styles=C`
    :host button {
      font-family: Inter, sans-serif;
      padding: 10px 20px;
      border-style: none;
      border-radius: 1rem;
      transition: filter 100ms;
      box-shadow: 0.2rem 0.2rem 1px 1px rgba(0, 0, 0, 0.7);
    }
    :host button:active {
      transform: translateY(2px);
    }
    :host button:hover {
      filter: brightness(0.75);
    }
  `;yt([f({type:String})],z.prototype,"name",2);z=yt([P("stopwatch-button")],z);var Dt=Object.defineProperty,It=Object.getOwnPropertyDescriptor,O=(r,t,e,s)=>{for(var i=s>1?void 0:s?It(t,e):t,o=r.length-1,n;o>=0;o--)(n=r[o])&&(i=(s?n(t,e,i):n(i))||i);return s&&i&&Dt(t,e,i),i};let g=class extends v{constructor(){super(),this.nothing=r=>{},this.doubleZeroes=r=>(r<10?"0":"")+r,this.isStarted=!1,this.milliseconds=0,this.seconds=0,this.minutes=0,this.hours=0,this.start=()=>{this.intervalId||(this.isStarted=!0,this.intervalId=setInterval(()=>{this.milliseconds++,this.updateTime(this.milliseconds)},10))},this.stop=()=>{this.isStarted&&(this.isStarted=!1,clearInterval(this.intervalId),delete this.intervalId)},this.lap=r=>void(this.isStarted?window.dispatchEvent(new vt("lap",{time:r})):null),this.reset=()=>{this.stop(),this.milliseconds=0,this.seconds=0,this.minutes=0,this.hours=0,window.dispatchEvent(new vt("lap",{reset:!0}))},this.getLapTime=()=>{const r=this.doubleZeroes(this.hours),t=this.doubleZeroes(this.minutes),e=this.doubleZeroes(this.seconds),s=this.doubleZeroes(this.milliseconds);return{hours:r,minutes:t,seconds:e,milliseconds:s,time:`${r}:${t}:${e}.${s}`}},window.onbeforeunload=()=>{if(this.isStarted)return""},window.onkeypress=r=>{switch(r.key){case" ":(this.isStarted?this.stop:this.start)();break;case"l":(this.isStarted?this.lap:this.nothing)(this.getLapTime().time);break;case"R":this.reset();break}}}updateTime(r){r>99&&(this.milliseconds=0,this.seconds++),this.seconds>60&&(this.minutes++,this.seconds=0),this.minutes>60&&(this.hours++,this.minutes=0),this.hours>25&&this.stop()}render(){const{hours:r,minutes:t,seconds:e,milliseconds:s,time:i}=this.getLapTime();return $`
      <div>
        <div class="time-display">
          ${r}:${t}:${e}.${s}
        </div>
        <div class="buttons">
          <stopwatch-button
            name="${this.isStarted?"Started":"Start"}"
            @click="${this.start}"
            id="start"
          ></stopwatch-button>
          <stopwatch-button
            name="Stop"
            @click="${this.stop}"
          ></stopwatch-button>
          <stopwatch-button
            name="Lap"
            class="lap-button"
            @click="${()=>this.lap(i)}"
          ></stopwatch-button>
          <stopwatch-button
            name="Reset"
            @click="${this.reset}"
          ></stopwatch-button>
        </div>
      </div>
    `}};g.styles=C`
    :host div {
      justify-content: center;
    }
    :host .buttons {
      display: flex;
      gap: 1rem;
      width: 100%;
    }
    :host div .time-display {
      text-align: center;
      margin: 5rem 0;
      font-size: 2rem;
    }
    :host stopwatch-button [name="Start"] {
      padding: 4rem;
    }
    @media only screen and (max-width: 790px) {
      .lap-button {
        display: none;
      }
    }
  `;O([f()],g.prototype,"isStarted",2);O([f()],g.prototype,"milliseconds",2);O([f()],g.prototype,"seconds",2);O([f()],g.prototype,"minutes",2);O([f()],g.prototype,"hours",2);g=O([P("stop-watch")],g);const zt=r=>{let t="";for(let o of r){const{time:n,number:d}=o;t+=`${d}, ${n}
`}const e=new Blob([t],{type:"text/plain"}),s=URL.createObjectURL(e),i=document.createElement("a");i.href=s,i.download="laps.csv",document.body.appendChild(i),i.click(),document.body.removeChild(i)};var Bt=Object.defineProperty,Vt=Object.getOwnPropertyDescriptor,et=(r,t,e,s)=>{for(var i=s>1?void 0:s?Vt(t,e):t,o=r.length-1,n;o>=0;o--)(n=r[o])&&(i=(s?n(t,e,i):n(i))||i);return s&&i&&Bt(t,e,i),i};let H=class extends v{constructor(){super(...arguments),this.time="",this.number=0,this.render=()=>$`
    <div>
      <span class="number">${this.number}</span>
      <span class="time">${this.time}</span>
    </div>
  `}};H.styles=C`
    :host div {
      display: flex;
      width: 85%;
      background-color: #232323;
      border-radius: 1rem;
      padding: 10px 1rem;
      column-gap: 1rem;
      justify-content: space-between;
      align-items: center;
    }
    :host div .time {
      margin-right: 2rem;
    }
    :host div .number {
      padding: 3px 8px;
      background-color: #545454;
      border-radius: 1rem;
    }
  `;et([f({type:String})],H.prototype,"time",2);et([f({type:Number})],H.prototype,"number",2);H=et([P("lap-item")],H);var Zt=Object.defineProperty,Kt=Object.getOwnPropertyDescriptor,bt=(r,t,e,s)=>{for(var i=s>1?void 0:s?Kt(t,e):t,o=r.length-1,n;o>=0;o--)(n=r[o])&&(i=(s?n(t,e,i):n(i))||i);return s&&i&&Zt(t,e,i),i};let B=class extends v{constructor(){super(),this.createLap=r=>{this.laps.push(r),this.lapsContainer=this.laps.map(t=>$`<lap-item time="${t.time}" number="${t.number}" />`),this.startingNumber++,this.laps.length>7&&(this.style.overflowY="scroll",setTimeout(()=>{this.scroll({top:9**20,behavior:"smooth"})},2))},this.resetAll=()=>{this.style.overflowY="",this.startingNumber=1,this.laps.length=0,this.lapsContainer=$`<div></div>`},this.laps=[],this.startingNumber=1,this.render=()=>$`
    <div>
      <h3>Laps</h3>
      <hr />
      <div>${this.lapsContainer}</div>
    </div>
  `,this.style.overflowY="",window.addEventListener("downloadlaps",()=>zt(this.laps)),window.addEventListener("lap",r=>{r.reset?this.resetAll():this.createLap({time:r.time,number:this.startingNumber})})}};B.styles=C`
    :host {
      --gray: rgba(255, 255, 255, 0.3);
      border: 2px solid var(--gray);
      height: 88%;
      border-radius: 0.5rem;
      padding: 1rem 2rem;
      width: 230px;
    }
    :host hr {
      border: 0.5px solid var(--gray);
      border-radius: 50%;
      margin-bottom: 1rem;
    }
    :host div div {
      display: grid;
      gap: 0.5rem;
    }
    :host::-webkit-scrollbar {
      width: 8px;
      background-color: #232323;
      border-radius: 2rem;
      display: block;
    }
    :host::-webkit-scrollbar-thumb {
      border-radius: 2rem;
      background-color: white;
    }
  `;bt([f()],B.prototype,"lapsContainer",2);B=bt([P("laps-container")],B);var Wt=Object.defineProperty,qt=Object.getOwnPropertyDescriptor,Yt=(r,t,e,s)=>{for(var i=s>1?void 0:s?qt(t,e):t,o=r.length-1,n;o>=0;o--)(n=r[o])&&(i=(s?n(t,e,i):n(i))||i);return s&&i&&Wt(t,e,i),i};let G=class extends v{constructor(){super(...arguments),this.shortcuts=[{shortcut:"Space",description:"Start/Stop"},{shortcut:"L",description:"Lap"},{shortcut:"Shift + R",description:"Reset"}],this.render=()=>{const r=this.shortcuts.map(t=>$`
        <div class="shortcut">
          <kbd>${t.shortcut}</kbd> - <div>${t.description}</div>
        </div>
      `);return $`
      <h4>Keyboard Shortcuts</h4>
      ${r}
    `}}};G.styles=C`
    :host {
      position: absolute;
      margin-left: 1rem;
      display: grid;
      padding: 1rem;
      background-color: #303030;
      border-radius: 1.25rem;
      row-gap: 0.75rem;
    }
    :host kbd {
      padding: 4px 9px;
      background-color: #656565;
      font-weight: bold;
      border-radius: 1rem;
    }
    :host .shortcut {
      display: flex;
      align-items: center;
      column-gap: 1rem;
    }
    :host h4 {
      margin-top: unset;
    }
    @media only screen and (max-width: 1044px) {
      :host {
        visibility: hidden;
      }
    }
  `;G=Yt([P("keyboard-shortcuts")],G);var Jt=Object.defineProperty,Ft=Object.getOwnPropertyDescriptor,Gt=(r,t,e,s)=>{for(var i=s>1?void 0:s?Ft(t,e):t,o=r.length-1,n;o>=0;o--)(n=r[o])&&(i=(s?n(t,e,i):n(i))||i);return s&&i&&Jt(t,e,i),i};let Q=class extends v{constructor(){super(...arguments),this.render=()=>$`
    <h2>Stopwatch</h2>
    <div>
      <div class="root">
        <img
          src="https://cdn-icons-png.flaticon.com/512/1584/1584892.png"
          height="300"
        />
        <stop-watch />
      </div>
      <div class="laps">
        <laps-container></laps-container>
        <stopwatch-button
          name="Download CSV"
          @click="${()=>dispatchEvent(new Event("downloadlaps"))}"
        />
      </div>
    </div>
  `}};Q.styles=C`
    :host div {
      display: flex;
      justify-content: center;
      height: 84vh;
      align-items: center;
      column-gap: 8vw;
    }
    :host div .root {
      display: grid;
      width: 25%;
      height: 80vh;
      justify-content: center;
      align-items: center;
    }
    :host div .root img {
      filter: invert(1);
      justify-self: center;
    }
    :host h2 {
      text-align: center;
    }
    :host div .laps {
      display: grid;
      height: 100%;
      grid-template-rows: 90% 10%;
    }
    :host div .laps stopwatch-button {
      padding: 11px;
      position: relative;
      border-radius: 1.5rem;
      justify-self: center;
    }
    @media only screen and (max-width: 790px) {
      :host div .laps {
        display: none;
      }
    }
  `;Q=Gt([P("main-element")],Q);
