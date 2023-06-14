/*! For license information please see main.js.LICENSE.txt */
(()=>{"use strict";var t={424:(t,e,s)=>{s.d(e,{Z:()=>l});var i=s(81),n=s.n(i),r=s(645),o=s.n(r)()(n());o.push([t.id,"@import url(https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap);"]),o.push([t.id,":root {\n  background-color: #161616;\n  margin: 0;\n  padding: 0;\n}\n* {\n  color: #fff;\n  font-family: Inter, sans-serif; \n}\n",""]);const l=o},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var s="",i=void 0!==e[5];return e[4]&&(s+="@supports (".concat(e[4],") {")),e[2]&&(s+="@media ".concat(e[2]," {")),i&&(s+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),s+=t(e),i&&(s+="}"),e[2]&&(s+="}"),e[4]&&(s+="}"),s})).join("")},e.i=function(t,s,i,n,r){"string"==typeof t&&(t=[[null,t,void 0]]);var o={};if(i)for(var l=0;l<this.length;l++){var a=this[l][0];null!=a&&(o[a]=!0)}for(var c=0;c<t.length;c++){var d=[].concat(t[c]);i&&o[d[0]]||(void 0!==r&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=r),s&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=s):d[2]=s),n&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=n):d[4]="".concat(n)),e.push(d))}},e}},81:t=>{t.exports=function(t){return t[1]}},548:(t,e,s)=>{s.r(e),s.d(e,{default:()=>y});var i=s(379),n=s.n(i),r=s(795),o=s.n(r),l=s(569),a=s.n(l),c=s(565),d=s.n(c),h=s(216),u=s.n(h),p=s(589),v=s.n(p),f=s(424),m={};m.styleTagTransform=v(),m.setAttributes=d(),m.insert=a().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=u();n()(f.Z,m);const y=f.Z&&f.Z.locals?f.Z.locals:void 0},379:t=>{var e=[];function s(t){for(var s=-1,i=0;i<e.length;i++)if(e[i].identifier===t){s=i;break}return s}function i(t,i){for(var r={},o=[],l=0;l<t.length;l++){var a=t[l],c=i.base?a[0]+i.base:a[0],d=r[c]||0,h="".concat(c," ").concat(d);r[c]=d+1;var u=s(h),p={css:a[1],media:a[2],sourceMap:a[3],supports:a[4],layer:a[5]};if(-1!==u)e[u].references++,e[u].updater(p);else{var v=n(p,i);i.byIndex=l,e.splice(l,0,{identifier:h,updater:v,references:1})}o.push(h)}return o}function n(t,e){var s=e.domAPI(e);s.update(t);return function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;s.update(t=e)}else s.remove()}}t.exports=function(t,n){var r=i(t=t||[],n=n||{});return function(t){t=t||[];for(var o=0;o<r.length;o++){var l=s(r[o]);e[l].references--}for(var a=i(t,n),c=0;c<r.length;c++){var d=s(r[c]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}r=a}}},569:t=>{var e={};t.exports=function(t,s){var i=function(t){if(void 0===e[t]){var s=document.querySelector(t);if(window.HTMLIFrameElement&&s instanceof window.HTMLIFrameElement)try{s=s.contentDocument.head}catch(t){s=null}e[t]=s}return e[t]}(t);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(s)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,s)=>{t.exports=function(t){var e=s.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){var e=t.insertStyleElement(t);return{update:function(s){!function(t,e,s){var i="";s.supports&&(i+="@supports (".concat(s.supports,") {")),s.media&&(i+="@media ".concat(s.media," {"));var n=void 0!==s.layer;n&&(i+="@layer".concat(s.layer.length>0?" ".concat(s.layer):""," {")),i+=s.css,n&&(i+="}"),s.media&&(i+="}"),s.supports&&(i+="}");var r=s.sourceMap;r&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleTagTransform(i,t,e.options)}(e,t,s)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}},618:function(t,e,s){var i=this&&this.__decorate||function(t,e,s,i){var n,r=arguments.length,o=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,s,i);else for(var l=t.length-1;l>=0;l--)(n=t[l])&&(o=(r<3?n(o):r>3?n(e,s,o):n(e,s))||o);return r>3&&o&&Object.defineProperty(e,s,o),o},n=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};Object.defineProperty(e,"__esModule",{value:!0}),e.StopwatchButton=void 0;const r=s(897),o=s(595);let l=class extends r.LitElement{constructor(){super(...arguments),this.name="",this.render=()=>r.html`<button class="${this.name.toLowerCase()}">${this.name}</button>`}};l.styles=r.css`
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
	`,i([(0,o.property)({type:String}),n("design:type",String)],l.prototype,"name",void 0),l=i([(0,o.customElement)("stopwatch-button")],l),e.StopwatchButton=l},517:function(t,e,s){var i=this&&this.__decorate||function(t,e,s,i){var n,r=arguments.length,o=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,s,i);else for(var l=t.length-1;l>=0;l--)(n=t[l])&&(o=(r<3?n(o):r>3?n(e,s,o):n(e,s))||o);return r>3&&o&&Object.defineProperty(e,s,o),o};Object.defineProperty(e,"__esModule",{value:!0}),e.KeyboardShortcuts=void 0;const n=s(897),r=s(595);let o=class extends n.LitElement{constructor(){super(...arguments),this.shortcuts=[{shortcut:"Space",description:"Start/Stop"},{shortcut:"L",description:"Lap"},{shortcut:"Shift + R",description:"Reset"}],this.render=()=>{const t=this.shortcuts.map((t=>n.html`
				<div class="shortcut">
					<kbd>${t.shortcut}</kbd> -
					<div>${t.description}</div>
				</div>
			`));return n.html`
			<h4>Keyboard Shortcuts</h4>
			${t}
		`}}};o.styles=n.css`
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
	`,o=i([(0,r.customElement)("keyboard-shortcuts")],o),e.KeyboardShortcuts=o},6:function(t,e,s){var i=this&&this.__decorate||function(t,e,s,i){var n,r=arguments.length,o=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,s,i);else for(var l=t.length-1;l>=0;l--)(n=t[l])&&(o=(r<3?n(o):r>3?n(e,s,o):n(e,s))||o);return r>3&&o&&Object.defineProperty(e,s,o),o},n=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};Object.defineProperty(e,"__esModule",{value:!0}),e.LapItem=void 0;const r=s(897),o=s(595);let l=class extends r.LitElement{constructor(){super(...arguments),this.time="",this.number=0,this.render=()=>r.html`
		<div>
			<span class="number">${this.number}</span>
			<span class="time">${this.time}</span>
		</div>
	`}};l.styles=r.css`
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
	`,i([(0,o.property)({type:String}),n("design:type",String)],l.prototype,"time",void 0),i([(0,o.property)({type:Number}),n("design:type",Number)],l.prototype,"number",void 0),l=i([(0,o.customElement)("lap-item")],l),e.LapItem=l},977:function(t,e,s){var i=this&&this.__decorate||function(t,e,s,i){var n,r=arguments.length,o=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,s,i);else for(var l=t.length-1;l>=0;l--)(n=t[l])&&(o=(r<3?n(o):r>3?n(e,s,o):n(e,s))||o);return r>3&&o&&Object.defineProperty(e,s,o),o},n=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};Object.defineProperty(e,"__esModule",{value:!0}),e.Laps=void 0;const r=s(897),o=s(595),l=s(920);s(6);let a=class extends r.LitElement{constructor(){super(),this.createLap=t=>{this.laps.push(t),this.lapsContainer=this.laps.map((t=>r.html`<lap-item time="${t.time}" number="${t.number}" />`)),this.startingNumber++,this.laps.length>7&&(this.style.overflowY="scroll",setTimeout((()=>{this.scroll({top:9**20,behavior:"smooth"})}),2))},this.resetAll=()=>{this.style.overflowY="",this.startingNumber=1,this.laps.length=0,this.lapsContainer=r.html`<div></div>`},this.laps=[],this.startingNumber=1,this.render=()=>r.html`
		<div>
			<h3>Laps</h3>
			<hr />
			<div>${this.lapsContainer}</div>
		</div>
	`,this.style.overflowY="",window.addEventListener("downloadlaps",(()=>(0,l.downloadCsv)(this.laps))),window.addEventListener("lap",(t=>{t.detail.reset?this.resetAll():this.createLap({time:t.detail.time,number:this.startingNumber})}))}};a.styles=r.css`
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
	`,i([(0,o.property)(),n("design:type",Object)],a.prototype,"lapsContainer",void 0),a=i([(0,o.customElement)("laps-container"),n("design:paramtypes",[])],a),e.Laps=a},839:function(t,e,s){var i=this&&this.__decorate||function(t,e,s,i){var n,r=arguments.length,o=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,s,i);else for(var l=t.length-1;l>=0;l--)(n=t[l])&&(o=(r<3?n(o):r>3?n(e,s,o):n(e,s))||o);return r>3&&o&&Object.defineProperty(e,s,o),o},n=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};Object.defineProperty(e,"__esModule",{value:!0}),e.Stopwatch=void 0;const r=s(897),o=s(595);s(618);let l=class extends r.LitElement{constructor(){super(),this.nothing=t=>{},this.doubleZeroes=t=>(t<10?"0":"")+t,this.isStarted=!1,this.milliseconds=0,this.seconds=0,this.minutes=0,this.hours=0,this.start=()=>{this.intervalId||(this.isStarted=!0,this.intervalId=setInterval((()=>{this.milliseconds++,this.updateTime(this.milliseconds)}),10))},this.stop=()=>{this.isStarted&&(this.isStarted=!1,clearInterval(this.intervalId),delete this.intervalId)},this.lap=t=>{this.isStarted&&window.dispatchEvent(new CustomEvent("lap",{detail:{time:t}}))},this.reset=()=>{this.stop(),this.milliseconds=0,this.seconds=0,this.minutes=0,this.hours=0,window.dispatchEvent(new CustomEvent("lap",{detail:{reset:!0}}))},this.getLapTime=()=>{const t=this.doubleZeroes(this.hours),e=this.doubleZeroes(this.minutes),s=this.doubleZeroes(this.seconds),i=this.doubleZeroes(this.milliseconds);return{hours:t,minutes:e,seconds:s,milliseconds:i,time:`${t}:${e}:${s}.${i}`}},window.onbeforeunload=()=>{if(this.isStarted)return""},window.onkeypress=t=>{switch(t.key){case" ":(this.isStarted?this.stop:this.start)();break;case"l":(this.isStarted?this.lap:this.nothing)(this.getLapTime().time);break;case"R":this.reset()}}}updateTime(t){t>99&&(this.milliseconds=0,this.seconds++),this.seconds>59&&(this.minutes++,this.seconds=0),this.minutes>59&&(this.hours++,this.minutes=0),this.hours>23&&(this.stop(),setTimeout((()=>{alert("It's over!")}),100))}render(){const{hours:t,minutes:e,seconds:s,milliseconds:i,time:n}=this.getLapTime();return r.html`
			<div>
				<div class="time-display">
					${t}:${e}:${s}.${i}
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
						@click="${()=>this.lap(n)}"
					></stopwatch-button>
					<stopwatch-button
						name="Reset"
						@click="${this.reset}"
					></stopwatch-button>
				</div>
			</div>
		`}};l.styles=r.css`
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
	`,i([(0,o.property)(),n("design:type",Boolean)],l.prototype,"isStarted",void 0),i([(0,o.property)(),n("design:type",Number)],l.prototype,"milliseconds",void 0),i([(0,o.property)(),n("design:type",Number)],l.prototype,"seconds",void 0),i([(0,o.property)(),n("design:type",Number)],l.prototype,"minutes",void 0),i([(0,o.property)(),n("design:type",Number)],l.prototype,"hours",void 0),l=i([(0,o.customElement)("stop-watch"),n("design:paramtypes",[])],l),e.Stopwatch=l},519:function(t,e,s){var i=this&&this.__decorate||function(t,e,s,i){var n,r=arguments.length,o=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,s,i);else for(var l=t.length-1;l>=0;l--)(n=t[l])&&(o=(r<3?n(o):r>3?n(e,s,o):n(e,s))||o);return r>3&&o&&Object.defineProperty(e,s,o),o};Object.defineProperty(e,"__esModule",{value:!0}),e.MainElement=void 0;const n=s(897),r=s(595);s(839),s(977),s(618),s(517),s(548);let o=class extends n.LitElement{constructor(){super(...arguments),this.render=()=>n.html`
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
	`}};o.styles=n.css`
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
	`,o=i([(0,r.customElement)("main-element")],o),e.MainElement=o},920:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.downloadCsv=void 0;e.downloadCsv=t=>{if(t.length){let e="";for(let s of t){const{time:t,number:i}=s;e+=`${i}, ${t}\n`}const s=new Blob([e],{type:"text/plain"}),i=URL.createObjectURL(s),n=document.createElement("a");n.href=i,n.download="laps.csv",n.click(),n.remove()}else alert("Laps empty")}},595:(t,e,s)=>{s.r(e),s.d(e,{customElement:()=>i,eventOptions:()=>a,property:()=>r,query:()=>c,queryAll:()=>d,queryAssignedElements:()=>v,queryAssignedNodes:()=>f,queryAsync:()=>h,state:()=>o});const i=t=>e=>"function"==typeof e?((t,e)=>(customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:s,elements:i}=e;return{kind:s,elements:i,finisher(e){customElements.define(t,e)}}})(t,e),n=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(s){s.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(s){s.createProperty(e.key,t)}};function r(t){return(e,s)=>void 0!==s?((t,e,s)=>{e.constructor.createProperty(s,t)})(t,e,s):n(t,e)}function o(t){return r({...t,state:!0})}const l=({finisher:t,descriptor:e})=>(s,i)=>{var n;if(void 0===i){const i=null!==(n=s.originalKey)&&void 0!==n?n:s.key,r=null!=e?{kind:"method",placement:"prototype",key:i,descriptor:e(s.key)}:{...s,key:i};return null!=t&&(r.finisher=function(e){t(e,i)}),r}{const n=s.constructor;void 0!==e&&Object.defineProperty(s,i,e(i)),null==t||t(n,i)}};function a(t){return l({finisher:(e,s)=>{Object.assign(e.prototype[s],t)}})}function c(t,e){return l({descriptor:s=>{const i={get(){var e,s;return null!==(s=null===(e=this.renderRoot)||void 0===e?void 0:e.querySelector(t))&&void 0!==s?s:null},enumerable:!0,configurable:!0};if(e){const e="symbol"==typeof s?Symbol():"__"+s;i.get=function(){var s,i;return void 0===this[e]&&(this[e]=null!==(i=null===(s=this.renderRoot)||void 0===s?void 0:s.querySelector(t))&&void 0!==i?i:null),this[e]}}return i}})}function d(t){return l({descriptor:e=>({get(){var e,s;return null!==(s=null===(e=this.renderRoot)||void 0===e?void 0:e.querySelectorAll(t))&&void 0!==s?s:[]},enumerable:!0,configurable:!0})})}function h(t){return l({descriptor:e=>({async get(){var e;return await this.updateComplete,null===(e=this.renderRoot)||void 0===e?void 0:e.querySelector(t)},enumerable:!0,configurable:!0})})}var u;const p=null!=(null===(u=window.HTMLSlotElement)||void 0===u?void 0:u.prototype.assignedElements)?(t,e)=>t.assignedElements(e):(t,e)=>t.assignedNodes(e).filter((t=>t.nodeType===Node.ELEMENT_NODE));function v(t){const{slot:e,selector:s}=null!=t?t:{};return l({descriptor:i=>({get(){var i;const n="slot"+(e?`[name=${e}]`:":not([name])"),r=null===(i=this.renderRoot)||void 0===i?void 0:i.querySelector(n),o=null!=r?p(r,t):[];return s?o.filter((t=>t.matches(s))):o},enumerable:!0,configurable:!0})})}function f(t,e,s){let i,n=t;return"object"==typeof t?(n=t.slot,i=t):i={flatten:e},s?v({slot:n,flatten:e,selector:s}):l({descriptor:t=>({get(){var t,e;const s="slot"+(n?`[name=${n}]`:":not([name])"),r=null===(t=this.renderRoot)||void 0===t?void 0:t.querySelector(s);return null!==(e=null==r?void 0:r.assignedNodes(i))&&void 0!==e?e:[]},enumerable:!0,configurable:!0})})}},897:(t,e,s)=>{s.r(e),s.d(e,{CSSResult:()=>l,LitElement:()=>dt,ReactiveElement:()=>$,UpdatingElement:()=>ct,_$LE:()=>ut,_$LH:()=>rt,adoptStyles:()=>d,css:()=>c,defaultConverter:()=>y,getCompatibleStyle:()=>h,html:()=>B,noChange:()=>q,notEqual:()=>g,nothing:()=>Z,render:()=>V,supportsAdoptingStyleSheets:()=>n,svg:()=>z,unsafeCSS:()=>a});const i=window,n=i.ShadowRoot&&(void 0===i.ShadyCSS||i.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,r=Symbol(),o=new WeakMap;class l{constructor(t,e,s){if(this._$cssResult$=!0,s!==r)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(n&&void 0===t){const s=void 0!==e&&1===e.length;s&&(t=o.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&o.set(e,t))}return t}toString(){return this.cssText}}const a=t=>new l("string"==typeof t?t:t+"",void 0,r),c=(t,...e)=>{const s=1===t.length?t[0]:e.reduce(((e,s,i)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[i+1]),t[0]);return new l(s,t,r)},d=(t,e)=>{n?t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):e.forEach((e=>{const s=document.createElement("style"),n=i.litNonce;void 0!==n&&s.setAttribute("nonce",n),s.textContent=e.cssText,t.appendChild(s)}))},h=n?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return a(e)})(t):t;var u;const p=window,v=p.trustedTypes,f=v?v.emptyScript:"",m=p.reactiveElementPolyfillSupport,y={toAttribute(t,e){switch(e){case Boolean:t=t?f:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let s=t;switch(e){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch(t){s=null}}return s}},g=(t,e)=>e!==t&&(e==e||t==t),b={attribute:!0,type:String,converter:y,reflect:!1,hasChanged:g};class $ extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;null!==(e=this.h)&&void 0!==e||(this.h=[]),this.h.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,s)=>{const i=this._$Ep(s,e);void 0!==i&&(this._$Ev.set(i,s),t.push(i))})),t}static createProperty(t,e=b){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const s="symbol"==typeof t?Symbol():"__"+t,i=this.getPropertyDescriptor(t,s,e);void 0!==i&&Object.defineProperty(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){return{get(){return this[e]},set(i){const n=this[t];this[e]=i,this.requestUpdate(t,n,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||b}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of e)this.createProperty(s,t[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const t of s)e.unshift(h(t))}else void 0!==t&&e.push(h(t));return e}static _$Ep(t,e){const s=e.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,s;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(s=t.hostConnected)||void 0===s||s.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return d(e,this.constructor.elementStyles),e}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$EO(t,e,s=b){var i;const n=this.constructor._$Ep(t,s);if(void 0!==n&&!0===s.reflect){const r=(void 0!==(null===(i=s.converter)||void 0===i?void 0:i.toAttribute)?s.converter:y).toAttribute(e,s.type);this._$El=t,null==r?this.removeAttribute(n):this.setAttribute(n,r),this._$El=null}}_$AK(t,e){var s;const i=this.constructor,n=i._$Ev.get(t);if(void 0!==n&&this._$El!==n){const t=i.getPropertyOptions(n),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(s=t.converter)||void 0===s?void 0:s.fromAttribute)?t.converter:y;this._$El=n,this[n]=r.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,s){let i=!0;void 0!==t&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||g)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===s.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,s))):i=!1),!this.isUpdatePending&&i&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,e)=>this[e]=t)),this._$Ei=void 0);let e=!1;const s=this._$AL;try{e=this.shouldUpdate(s),e?(this.willUpdate(s),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(s)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(s)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$EO(e,this[e],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}var _;$.finalized=!0,$.elementProperties=new Map,$.elementStyles=[],$.shadowRootOptions={mode:"open"},null==m||m({ReactiveElement:$}),(null!==(u=p.reactiveElementVersions)&&void 0!==u?u:p.reactiveElementVersions=[]).push("1.4.1");const A=window,S=A.trustedTypes,w=S?S.createPolicy("lit-html",{createHTML:t=>t}):void 0,E=`lit$${(Math.random()+"").slice(9)}$`,x="?"+E,C=`<${x}>`,R=document,P=(t="")=>R.createComment(t),O=t=>null===t||"object"!=typeof t&&"function"!=typeof t,k=Array.isArray,j=t=>k(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]),N=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,L=/-->/g,T=/>/g,M=RegExp(">|[ \t\n\f\r](?:([^\\s\"'>=/]+)([ \t\n\f\r]*=[ \t\n\f\r]*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)","g"),U=/'/g,H=/"/g,I=/^(?:script|style|textarea|title)$/i,D=t=>(e,...s)=>({_$litType$:t,strings:e,values:s}),B=D(1),z=D(2),q=Symbol.for("lit-noChange"),Z=Symbol.for("lit-nothing"),K=new WeakMap,V=(t,e,s)=>{var i,n;const r=null!==(i=null==s?void 0:s.renderBefore)&&void 0!==i?i:e;let o=r._$litPart$;if(void 0===o){const t=null!==(n=null==s?void 0:s.renderBefore)&&void 0!==n?n:null;r._$litPart$=o=new Q(e.insertBefore(P(),t),t,void 0,null!=s?s:{})}return o._$AI(t),o},W=R.createTreeWalker(R,129,null,!1),Y=(t,e)=>{const s=t.length-1,i=[];let n,r=2===e?"<svg>":"",o=N;for(let e=0;e<s;e++){const s=t[e];let l,a,c=-1,d=0;for(;d<s.length&&(o.lastIndex=d,a=o.exec(s),null!==a);)d=o.lastIndex,o===N?"!--"===a[1]?o=L:void 0!==a[1]?o=T:void 0!==a[2]?(I.test(a[2])&&(n=RegExp("</"+a[2],"g")),o=M):void 0!==a[3]&&(o=M):o===M?">"===a[0]?(o=null!=n?n:N,c=-1):void 0===a[1]?c=-2:(c=o.lastIndex-a[2].length,l=a[1],o=void 0===a[3]?M:'"'===a[3]?H:U):o===H||o===U?o=M:o===L||o===T?o=N:(o=M,n=void 0);const h=o===M&&t[e+1].startsWith("/>")?" ":"";r+=o===N?s+C:c>=0?(i.push(l),s.slice(0,c)+"$lit$"+s.slice(c)+E+h):s+E+(-2===c?(i.push(void 0),e):h)}const l=r+(t[s]||"<?>")+(2===e?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==w?w.createHTML(l):l,i]};class F{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let n=0,r=0;const o=t.length-1,l=this.parts,[a,c]=Y(t,e);if(this.el=F.createElement(a,s),W.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(i=W.nextNode())&&l.length<o;){if(1===i.nodeType){if(i.hasAttributes()){const t=[];for(const e of i.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(E)){const s=c[r++];if(t.push(e),void 0!==s){const t=i.getAttribute(s.toLowerCase()+"$lit$").split(E),e=/([.?@])?(.*)/.exec(s);l.push({type:1,index:n,name:e[2],strings:t,ctor:"."===e[1]?tt:"?"===e[1]?st:"@"===e[1]?it:X})}else l.push({type:6,index:n})}for(const e of t)i.removeAttribute(e)}if(I.test(i.tagName)){const t=i.textContent.split(E),e=t.length-1;if(e>0){i.textContent=S?S.emptyScript:"";for(let s=0;s<e;s++)i.append(t[s],P()),W.nextNode(),l.push({type:2,index:++n});i.append(t[e],P())}}}else if(8===i.nodeType)if(i.data===x)l.push({type:2,index:n});else{let t=-1;for(;-1!==(t=i.data.indexOf(E,t+1));)l.push({type:7,index:n}),t+=E.length-1}n++}}static createElement(t,e){const s=R.createElement("template");return s.innerHTML=t,s}}function J(t,e,s=t,i){var n,r,o,l;if(e===q)return e;let a=void 0!==i?null===(n=s._$Cl)||void 0===n?void 0:n[i]:s._$Cu;const c=O(e)?void 0:e._$litDirective$;return(null==a?void 0:a.constructor)!==c&&(null===(r=null==a?void 0:a._$AO)||void 0===r||r.call(a,!1),void 0===c?a=void 0:(a=new c(t),a._$AT(t,s,i)),void 0!==i?(null!==(o=(l=s)._$Cl)&&void 0!==o?o:l._$Cl=[])[i]=a:s._$Cu=a),void 0!==a&&(e=J(t,a._$AS(t,e.values),a,i)),e}class G{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:s},parts:i}=this._$AD,n=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:R).importNode(s,!0);W.currentNode=n;let r=W.nextNode(),o=0,l=0,a=i[0];for(;void 0!==a;){if(o===a.index){let e;2===a.type?e=new Q(r,r.nextSibling,this,t):1===a.type?e=new a.ctor(r,a.name,a.strings,this,t):6===a.type&&(e=new nt(r,this,t)),this.v.push(e),a=i[++l]}o!==(null==a?void 0:a.index)&&(r=W.nextNode(),o++)}return n}m(t){let e=0;for(const s of this.v)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class Q{constructor(t,e,s,i){var n;this.type=2,this._$AH=Z,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$C_=null===(n=null==i?void 0:i.isConnected)||void 0===n||n}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$C_}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=J(this,t,e),O(t)?t===Z||null==t||""===t?(this._$AH!==Z&&this._$AR(),this._$AH=Z):t!==this._$AH&&t!==q&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.k(t):j(t)?this.O(t):this.$(t)}S(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}k(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}$(t){this._$AH!==Z&&O(this._$AH)?this._$AA.nextSibling.data=t:this.k(R.createTextNode(t)),this._$AH=t}T(t){var e;const{values:s,_$litType$:i}=t,n="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=F.createElement(i.h,this.options)),i);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===n)this._$AH.m(s);else{const t=new G(n,this),e=t.p(this.options);t.m(s),this.k(e),this._$AH=t}}_$AC(t){let e=K.get(t.strings);return void 0===e&&K.set(t.strings,e=new F(t)),e}O(t){k(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const n of t)i===e.length?e.push(s=new Q(this.S(P()),this.S(P()),this,this.options)):s=e[i],s._$AI(n),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var s;for(null===(s=this._$AP)||void 0===s||s.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$C_=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class X{constructor(t,e,s,i,n){this.type=1,this._$AH=Z,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=n,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=Z}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,s,i){const n=this.strings;let r=!1;if(void 0===n)t=J(this,t,e,0),r=!O(t)||t!==this._$AH&&t!==q,r&&(this._$AH=t);else{const i=t;let o,l;for(t=n[0],o=0;o<n.length-1;o++)l=J(this,i[s+o],e,o),l===q&&(l=this._$AH[o]),r||(r=!O(l)||l!==this._$AH[o]),l===Z?t=Z:t!==Z&&(t+=(null!=l?l:"")+n[o+1]),this._$AH[o]=l}r&&!i&&this.P(t)}P(t){t===Z?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class tt extends X{constructor(){super(...arguments),this.type=3}P(t){this.element[this.name]=t===Z?void 0:t}}const et=S?S.emptyScript:"";class st extends X{constructor(){super(...arguments),this.type=4}P(t){t&&t!==Z?this.element.setAttribute(this.name,et):this.element.removeAttribute(this.name)}}class it extends X{constructor(t,e,s,i,n){super(t,e,s,i,n),this.type=5}_$AI(t,e=this){var s;if((t=null!==(s=J(this,t,e,0))&&void 0!==s?s:Z)===q)return;const i=this._$AH,n=t===Z&&i!==Z||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,r=t!==Z&&(i===Z||n);n&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,s;"function"==typeof this._$AH?this._$AH.call(null!==(s=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==s?s:this.element,t):this._$AH.handleEvent(t)}}class nt{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){J(this,t)}}const rt={A:"$lit$",M:E,C:x,L:1,R:Y,D:G,V:j,I:J,H:Q,N:X,U:st,B:it,F:tt,W:nt},ot=A.litHtmlPolyfillSupport;var lt,at;null==ot||ot(F,Q),(null!==(_=A.litHtmlVersions)&&void 0!==_?_:A.litHtmlVersions=[]).push("2.3.1");const ct=$;class dt extends ${constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const s=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=s.firstChild),s}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=V(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return q}}dt.finalized=!0,dt._$litElement$=!0,null===(lt=globalThis.litElementHydrateSupport)||void 0===lt||lt.call(globalThis,{LitElement:dt});const ht=globalThis.litElementPolyfillSupport;null==ht||ht({LitElement:dt});const ut={_$AK:(t,e,s)=>{t._$AK(e,s)},_$AL:t=>t._$AL};(null!==(at=globalThis.litElementVersions)&&void 0!==at?at:globalThis.litElementVersions=[]).push("3.2.2")}},e={};function s(i){var n=e[i];if(void 0!==n)return n.exports;var r=e[i]={id:i,exports:{}};return t[i].call(r.exports,r,r.exports,s),r.exports}s.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return s.d(e,{a:e}),e},s.d=(t,e)=>{for(var i in e)s.o(e,i)&&!s.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},s.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),s.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.nc=void 0;s(519)})();