(()=>{var e={823:(e,t,n)=>{const r=n(427);e.exports=r},427:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>s});var r=n(258),o=n.n(r);const s=e=>{const{children:t,color:n,onClick:r,disabled:s}=e,i=`button button--${n}`;return o().createElement("button",{className:i,onClick:r,disabled:s},t)}},573:(e,t,n)=>{const r=n(96);e.exports=r},96:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>s});var r=n(258),o=n.n(r);const s=e=>{const{onSubmit:t,children:n,novalidate:r}=e;return o().createElement("form",{onSubmit:t,className:"form",noValidate:r},n)}},258:e=>{"use strict";e.exports=require("react")}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var s=t[r]={exports:{}};return e[r](s,s.exports,n),s.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var r={};(()=>{"use strict";n.r(r),n.d(r,{default:()=>it});var e={};n.r(e),n.d(e,{hasBrowserEnv:()=>ye,hasStandardBrowserEnv:()=>be,hasStandardBrowserWebWorkerEnv:()=>Ee});var t=n(573),o=n.n(t),s=n(258),i=n.n(s);const a=e=>{const{value:t,onChange:n,placeholder:r,label:o,regex:s,name:a,required:c}=e;return i().createElement("label",{className:"text-input"},i().createElement("span",null,o),i().createElement("input",{type:"text",onChange:e=>{new RegExp(s)?.test(e.target.value)&&n(e.target.value)},value:t,placeholder:r,pattern:s,name:a,required:c}))},c=e=>{const{onChange:t,name:n,required:r}=e;return i().createElement("label",{className:"upload",onDrop:e=>{e.preventDefault();const t=e.dataTransfer.files;e.target.querySelector("input").files=t},onDragOver:e=>{e.preventDefault()}},i().createElement("span",{className:"upload-title"},"Drop your image here"),"or",i().createElement("input",{type:"file",id:"images",accept:"image/*",name:n,required:r}))};var l=n(823),u=n.n(l);const f=e=>{const{children:t,alignItems:n}=e,r=n?`card--${n}`:"";return i().createElement("div",{className:`card ${r}`},t)},d=e=>{const{children:t,component:n}=e;return{h1:i().createElement("h1",null,t),h2:i().createElement("h2",null,t),h3:i().createElement("h3",null,t),h4:i().createElement("h4",null,t),p:i().createElement("p",null,t)}[n]},p=e=>{const{src:t,alt:n}=e;return React.createElement("img",{src:t,alt:n,className:"image"})},h=e=>{const{action:t,img:n,text:r}=e;return i().createElement(f,{alignItems:"center"},i().createElement(p,{src:n}),i().createElement(d,{component:"h3"},r),t)};var m=n(427);const g=e=>{const{results:t}=e;return i().createElement("div",{className:"results-grid"},t&&t.map(((e,t)=>i().createElement(h,{key:t,action:i().createElement(m.default,{onClick:()=>(e.details,void console.log("Click"))},"Details"),img:e.img,text:e.name}))))},y={ZipCodeRead:92371,result_details:["https://www.shutterstock.com/image-photo/scruffy-adult-blue-gold-yorkshire-260nw-2189496389.jpg","https://www.shutterstock.com/image-photo/scruffy-adult-blue-gold-yorkshire-260nw-2189496389.jpg","https://www.shutterstock.com/image-photo/scruffy-adult-blue-gold-yorkshire-260nw-2189496389.jpg","https://www.shutterstock.com/image-photo/scruffy-adult-blue-gold-yorkshire-260nw-2189496389.jpg","https://www.shutterstock.com/image-photo/scruffy-adult-blue-gold-yorkshire-260nw-2189496389.jpg"],result_imgs:["https://www.shutterstock.com/image-photo/scruffy-adult-blue-gold-yorkshire-260nw-2189496389.jpg","https://www.shutterstock.com/image-photo/scruffy-adult-blue-gold-yorkshire-260nw-2189496389.jpg","https://www.shutterstock.com/image-photo/scruffy-adult-blue-gold-yorkshire-260nw-2189496389.jpg","https://www.shutterstock.com/image-photo/scruffy-adult-blue-gold-yorkshire-260nw-2189496389.jpg","https://www.shutterstock.com/image-photo/scruffy-adult-blue-gold-yorkshire-260nw-2189496389.jpg"]};function b(e,t){return function(){return e.apply(t,arguments)}}const{toString:w}=Object.prototype,{getPrototypeOf:E}=Object,O=(S=Object.create(null),e=>{const t=w.call(e);return S[t]||(S[t]=t.slice(8,-1).toLowerCase())});var S;const R=e=>(e=e.toLowerCase(),t=>O(t)===e),v=e=>t=>typeof t===e,{isArray:A}=Array,T=v("undefined"),j=R("ArrayBuffer"),x=v("string"),N=v("function"),C=v("number"),P=e=>null!==e&&"object"==typeof e,k=e=>{if("object"!==O(e))return!1;const t=E(e);return!(null!==t&&t!==Object.prototype&&null!==Object.getPrototypeOf(t)||Symbol.toStringTag in e||Symbol.iterator in e)},_=R("Date"),D=R("File"),F=R("Blob"),U=R("FileList"),B=R("URLSearchParams");function L(e,t,{allOwnKeys:n=!1}={}){if(null==e)return;let r,o;if("object"!=typeof e&&(e=[e]),A(e))for(r=0,o=e.length;r<o;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),s=o.length;let i;for(r=0;r<s;r++)i=o[r],t.call(null,e[i],i,e)}}function q(e,t){t=t.toLowerCase();const n=Object.keys(e);let r,o=n.length;for(;o-- >0;)if(r=n[o],t===r.toLowerCase())return r;return null}const z="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:global,I=e=>!T(e)&&e!==z,M=(H="undefined"!=typeof Uint8Array&&E(Uint8Array),e=>H&&e instanceof H);var H;const J=R("HTMLFormElement"),W=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),V=R("RegExp"),K=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};L(n,((n,o)=>{let s;!1!==(s=t(n,o,e))&&(r[o]=s||n)})),Object.defineProperties(e,r)},$="abcdefghijklmnopqrstuvwxyz",G="0123456789",X={DIGIT:G,ALPHA:$,ALPHA_DIGIT:$+$.toUpperCase()+G},Q=R("AsyncFunction"),Z={isArray:A,isArrayBuffer:j,isBuffer:function(e){return null!==e&&!T(e)&&null!==e.constructor&&!T(e.constructor)&&N(e.constructor.isBuffer)&&e.constructor.isBuffer(e)},isFormData:e=>{let t;return e&&("function"==typeof FormData&&e instanceof FormData||N(e.append)&&("formdata"===(t=O(e))||"object"===t&&N(e.toString)&&"[object FormData]"===e.toString()))},isArrayBufferView:function(e){let t;return t="undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&j(e.buffer),t},isString:x,isNumber:C,isBoolean:e=>!0===e||!1===e,isObject:P,isPlainObject:k,isUndefined:T,isDate:_,isFile:D,isBlob:F,isRegExp:V,isFunction:N,isStream:e=>P(e)&&N(e.pipe),isURLSearchParams:B,isTypedArray:M,isFileList:U,forEach:L,merge:function e(){const{caseless:t}=I(this)&&this||{},n={},r=(r,o)=>{const s=t&&q(n,o)||o;k(n[s])&&k(r)?n[s]=e(n[s],r):k(r)?n[s]=e({},r):A(r)?n[s]=r.slice():n[s]=r};for(let e=0,t=arguments.length;e<t;e++)arguments[e]&&L(arguments[e],r);return n},extend:(e,t,n,{allOwnKeys:r}={})=>(L(t,((t,r)=>{n&&N(t)?e[r]=b(t,n):e[r]=t}),{allOwnKeys:r}),e),trim:e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),stripBOM:e=>(65279===e.charCodeAt(0)&&(e=e.slice(1)),e),inherits:(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},toFlatObject:(e,t,n,r)=>{let o,s,i;const a={};if(t=t||{},null==e)return t;do{for(o=Object.getOwnPropertyNames(e),s=o.length;s-- >0;)i=o[s],r&&!r(i,e,t)||a[i]||(t[i]=e[i],a[i]=!0);e=!1!==n&&E(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},kindOf:O,kindOfTest:R,endsWith:(e,t,n)=>{e=String(e),(void 0===n||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return-1!==r&&r===n},toArray:e=>{if(!e)return null;if(A(e))return e;let t=e.length;if(!C(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},forEachEntry:(e,t)=>{const n=(e&&e[Symbol.iterator]).call(e);let r;for(;(r=n.next())&&!r.done;){const n=r.value;t.call(e,n[0],n[1])}},matchAll:(e,t)=>{let n;const r=[];for(;null!==(n=e.exec(t));)r.push(n);return r},isHTMLForm:J,hasOwnProperty:W,hasOwnProp:W,reduceDescriptors:K,freezeMethods:e=>{K(e,((t,n)=>{if(N(e)&&-1!==["arguments","caller","callee"].indexOf(n))return!1;const r=e[n];N(r)&&(t.enumerable=!1,"writable"in t?t.writable=!1:t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")}))}))},toObjectSet:(e,t)=>{const n={},r=e=>{e.forEach((e=>{n[e]=!0}))};return A(e)?r(e):r(String(e).split(t)),n},toCamelCase:e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,(function(e,t,n){return t.toUpperCase()+n})),noop:()=>{},toFiniteNumber:(e,t)=>(e=+e,Number.isFinite(e)?e:t),findKey:q,global:z,isContextDefined:I,ALPHABET:X,generateString:(e=16,t=X.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n},isSpecCompliantForm:function(e){return!!(e&&N(e.append)&&"FormData"===e[Symbol.toStringTag]&&e[Symbol.iterator])},toJSONObject:e=>{const t=new Array(10),n=(e,r)=>{if(P(e)){if(t.indexOf(e)>=0)return;if(!("toJSON"in e)){t[r]=e;const o=A(e)?[]:{};return L(e,((e,t)=>{const s=n(e,r+1);!T(s)&&(o[t]=s)})),t[r]=void 0,o}}return e};return n(e,0)},isAsyncFn:Q,isThenable:e=>e&&(P(e)||N(e))&&N(e.then)&&N(e.catch)};function Y(e,t,n,r,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),o&&(this.response=o)}Z.inherits(Y,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:Z.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const ee=Y.prototype,te={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach((e=>{te[e]={value:e}})),Object.defineProperties(Y,te),Object.defineProperty(ee,"isAxiosError",{value:!0}),Y.from=(e,t,n,r,o,s)=>{const i=Object.create(ee);return Z.toFlatObject(e,i,(function(e){return e!==Error.prototype}),(e=>"isAxiosError"!==e)),Y.call(i,e.message,t,n,r,o),i.cause=e,i.name=e.name,s&&Object.assign(i,s),i};const ne=Y;function re(e){return Z.isPlainObject(e)||Z.isArray(e)}function oe(e){return Z.endsWith(e,"[]")?e.slice(0,-2):e}function se(e,t,n){return e?e.concat(t).map((function(e,t){return e=oe(e),!n&&t?"["+e+"]":e})).join(n?".":""):t}const ie=Z.toFlatObject(Z,{},null,(function(e){return/^is[A-Z]/.test(e)})),ae=function(e,t,n){if(!Z.isObject(e))throw new TypeError("target must be an object");t=t||new FormData;const r=(n=Z.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,(function(e,t){return!Z.isUndefined(t[e])}))).metaTokens,o=n.visitor||l,s=n.dots,i=n.indexes,a=(n.Blob||"undefined"!=typeof Blob&&Blob)&&Z.isSpecCompliantForm(t);if(!Z.isFunction(o))throw new TypeError("visitor must be a function");function c(e){if(null===e)return"";if(Z.isDate(e))return e.toISOString();if(!a&&Z.isBlob(e))throw new ne("Blob is not supported. Use a Buffer instead.");return Z.isArrayBuffer(e)||Z.isTypedArray(e)?a&&"function"==typeof Blob?new Blob([e]):Buffer.from(e):e}function l(e,n,o){let a=e;if(e&&!o&&"object"==typeof e)if(Z.endsWith(n,"{}"))n=r?n:n.slice(0,-2),e=JSON.stringify(e);else if(Z.isArray(e)&&function(e){return Z.isArray(e)&&!e.some(re)}(e)||(Z.isFileList(e)||Z.endsWith(n,"[]"))&&(a=Z.toArray(e)))return n=oe(n),a.forEach((function(e,r){!Z.isUndefined(e)&&null!==e&&t.append(!0===i?se([n],r,s):null===i?n:n+"[]",c(e))})),!1;return!!re(e)||(t.append(se(o,n,s),c(e)),!1)}const u=[],f=Object.assign(ie,{defaultVisitor:l,convertValue:c,isVisitable:re});if(!Z.isObject(e))throw new TypeError("data must be an object");return function e(n,r){if(!Z.isUndefined(n)){if(-1!==u.indexOf(n))throw Error("Circular reference detected in "+r.join("."));u.push(n),Z.forEach(n,(function(n,s){!0===(!(Z.isUndefined(n)||null===n)&&o.call(t,n,Z.isString(s)?s.trim():s,r,f))&&e(n,r?r.concat(s):[s])})),u.pop()}}(e),t};function ce(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,(function(e){return t[e]}))}function le(e,t){this._pairs=[],e&&ae(e,this,t)}const ue=le.prototype;ue.append=function(e,t){this._pairs.push([e,t])},ue.toString=function(e){const t=e?function(t){return e.call(this,t,ce)}:ce;return this._pairs.map((function(e){return t(e[0])+"="+t(e[1])}),"").join("&")};const fe=le;function de(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function pe(e,t,n){if(!t)return e;const r=n&&n.encode||de,o=n&&n.serialize;let s;if(s=o?o(t,n):Z.isURLSearchParams(t)?t.toString():new fe(t,n).toString(r),s){const t=e.indexOf("#");-1!==t&&(e=e.slice(0,t)),e+=(-1===e.indexOf("?")?"?":"&")+s}return e}const he=class{constructor(){this.handlers=[]}use(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){Z.forEach(this.handlers,(function(t){null!==t&&e(t)}))}},me={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},ge={isBrowser:!0,classes:{URLSearchParams:"undefined"!=typeof URLSearchParams?URLSearchParams:fe,FormData:"undefined"!=typeof FormData?FormData:null,Blob:"undefined"!=typeof Blob?Blob:null},protocols:["http","https","file","blob","url","data"]},ye="undefined"!=typeof window&&"undefined"!=typeof document,be=(we="undefined"!=typeof navigator&&navigator.product,ye&&["ReactNative","NativeScript","NS"].indexOf(we)<0);var we;const Ee="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&"function"==typeof self.importScripts,Oe={...e,...ge},Se=function(e){function t(e,n,r,o){let s=e[o++];if("__proto__"===s)return!0;const i=Number.isFinite(+s),a=o>=e.length;return s=!s&&Z.isArray(r)?r.length:s,a?(Z.hasOwnProp(r,s)?r[s]=[r[s],n]:r[s]=n,!i):(r[s]&&Z.isObject(r[s])||(r[s]=[]),t(e,n,r[s],o)&&Z.isArray(r[s])&&(r[s]=function(e){const t={},n=Object.keys(e);let r;const o=n.length;let s;for(r=0;r<o;r++)s=n[r],t[s]=e[s];return t}(r[s])),!i)}if(Z.isFormData(e)&&Z.isFunction(e.entries)){const n={};return Z.forEachEntry(e,((e,r)=>{t(function(e){return Z.matchAll(/\w+|\[(\w*)]/g,e).map((e=>"[]"===e[0]?"":e[1]||e[0]))}(e),r,n,0)})),n}return null},Re={transitional:me,adapter:["xhr","http"],transformRequest:[function(e,t){const n=t.getContentType()||"",r=n.indexOf("application/json")>-1,o=Z.isObject(e);if(o&&Z.isHTMLForm(e)&&(e=new FormData(e)),Z.isFormData(e))return r?JSON.stringify(Se(e)):e;if(Z.isArrayBuffer(e)||Z.isBuffer(e)||Z.isStream(e)||Z.isFile(e)||Z.isBlob(e))return e;if(Z.isArrayBufferView(e))return e.buffer;if(Z.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let s;if(o){if(n.indexOf("application/x-www-form-urlencoded")>-1)return function(e,t){return ae(e,new Oe.classes.URLSearchParams,Object.assign({visitor:function(e,t,n,r){return Oe.isNode&&Z.isBuffer(e)?(this.append(t,e.toString("base64")),!1):r.defaultVisitor.apply(this,arguments)}},t))}(e,this.formSerializer).toString();if((s=Z.isFileList(e))||n.indexOf("multipart/form-data")>-1){const t=this.env&&this.env.FormData;return ae(s?{"files[]":e}:e,t&&new t,this.formSerializer)}}return o||r?(t.setContentType("application/json",!1),function(e,t,n){if(Z.isString(e))try{return(0,JSON.parse)(e),Z.trim(e)}catch(e){if("SyntaxError"!==e.name)throw e}return(0,JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){const t=this.transitional||Re.transitional,n=t&&t.forcedJSONParsing,r="json"===this.responseType;if(e&&Z.isString(e)&&(n&&!this.responseType||r)){const n=!(t&&t.silentJSONParsing)&&r;try{return JSON.parse(e)}catch(e){if(n){if("SyntaxError"===e.name)throw ne.from(e,ne.ERR_BAD_RESPONSE,this,null,this.response);throw e}}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Oe.classes.FormData,Blob:Oe.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};Z.forEach(["delete","get","head","post","put","patch"],(e=>{Re.headers[e]={}}));const ve=Re,Ae=Z.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Te=Symbol("internals");function je(e){return e&&String(e).trim().toLowerCase()}function xe(e){return!1===e||null==e?e:Z.isArray(e)?e.map(xe):String(e)}function Ne(e,t,n,r,o){return Z.isFunction(r)?r.call(this,t,n):(o&&(t=n),Z.isString(t)?Z.isString(r)?-1!==t.indexOf(r):Z.isRegExp(r)?r.test(t):void 0:void 0)}class Ce{constructor(e){e&&this.set(e)}set(e,t,n){const r=this;function o(e,t,n){const o=je(t);if(!o)throw new Error("header name must be a non-empty string");const s=Z.findKey(r,o);(!s||void 0===r[s]||!0===n||void 0===n&&!1!==r[s])&&(r[s||t]=xe(e))}const s=(e,t)=>Z.forEach(e,((e,n)=>o(e,n,t)));return Z.isPlainObject(e)||e instanceof this.constructor?s(e,t):Z.isString(e)&&(e=e.trim())&&!/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim())?s((e=>{const t={};let n,r,o;return e&&e.split("\n").forEach((function(e){o=e.indexOf(":"),n=e.substring(0,o).trim().toLowerCase(),r=e.substring(o+1).trim(),!n||t[n]&&Ae[n]||("set-cookie"===n?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)})),t})(e),t):null!=e&&o(t,e,n),this}get(e,t){if(e=je(e)){const n=Z.findKey(this,e);if(n){const e=this[n];if(!t)return e;if(!0===t)return function(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}(e);if(Z.isFunction(t))return t.call(this,e,n);if(Z.isRegExp(t))return t.exec(e);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=je(e)){const n=Z.findKey(this,e);return!(!n||void 0===this[n]||t&&!Ne(0,this[n],n,t))}return!1}delete(e,t){const n=this;let r=!1;function o(e){if(e=je(e)){const o=Z.findKey(n,e);!o||t&&!Ne(0,n[o],o,t)||(delete n[o],r=!0)}}return Z.isArray(e)?e.forEach(o):o(e),r}clear(e){const t=Object.keys(this);let n=t.length,r=!1;for(;n--;){const o=t[n];e&&!Ne(0,this[o],o,e,!0)||(delete this[o],r=!0)}return r}normalize(e){const t=this,n={};return Z.forEach(this,((r,o)=>{const s=Z.findKey(n,o);if(s)return t[s]=xe(r),void delete t[o];const i=e?function(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,((e,t,n)=>t.toUpperCase()+n))}(o):String(o).trim();i!==o&&delete t[o],t[i]=xe(r),n[i]=!0})),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const t=Object.create(null);return Z.forEach(this,((n,r)=>{null!=n&&!1!==n&&(t[r]=e&&Z.isArray(n)?n.join(", "):n)})),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map((([e,t])=>e+": "+t)).join("\n")}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){const n=new this(e);return t.forEach((e=>n.set(e))),n}static accessor(e){const t=(this[Te]=this[Te]={accessors:{}}).accessors,n=this.prototype;function r(e){const r=je(e);t[r]||(function(e,t){const n=Z.toCamelCase(" "+t);["get","set","has"].forEach((r=>{Object.defineProperty(e,r+n,{value:function(e,n,o){return this[r].call(this,t,e,n,o)},configurable:!0})}))}(n,e),t[r]=!0)}return Z.isArray(e)?e.forEach(r):r(e),this}}Ce.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),Z.reduceDescriptors(Ce.prototype,(({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(e){this[n]=e}}})),Z.freezeMethods(Ce);const Pe=Ce;function ke(e,t){const n=this||ve,r=t||n,o=Pe.from(r.headers);let s=r.data;return Z.forEach(e,(function(e){s=e.call(n,s,o.normalize(),t?t.status:void 0)})),o.normalize(),s}function _e(e){return!(!e||!e.__CANCEL__)}function De(e,t,n){ne.call(this,null==e?"canceled":e,ne.ERR_CANCELED,t,n),this.name="CanceledError"}Z.inherits(De,ne,{__CANCEL__:!0});const Fe=De,Ue=Oe.hasStandardBrowserEnv?{write(e,t,n,r,o,s){const i=[e+"="+encodeURIComponent(t)];Z.isNumber(n)&&i.push("expires="+new Date(n).toGMTString()),Z.isString(r)&&i.push("path="+r),Z.isString(o)&&i.push("domain="+o),!0===s&&i.push("secure"),document.cookie=i.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read:()=>null,remove(){}};function Be(e,t){return e&&!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)?function(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}(e,t):t}const Le=Oe.hasStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),t=document.createElement("a");let n;function r(n){let r=n;return e&&(t.setAttribute("href",r),r=t.href),t.setAttribute("href",r),{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:"/"===t.pathname.charAt(0)?t.pathname:"/"+t.pathname}}return n=r(window.location.href),function(e){const t=Z.isString(e)?r(e):e;return t.protocol===n.protocol&&t.host===n.host}}():function(){return!0};function qe(e,t){let n=0;const r=function(e,t){e=e||10;const n=new Array(e),r=new Array(e);let o,s=0,i=0;return t=void 0!==t?t:1e3,function(a){const c=Date.now(),l=r[i];o||(o=c),n[s]=a,r[s]=c;let u=i,f=0;for(;u!==s;)f+=n[u++],u%=e;if(s=(s+1)%e,s===i&&(i=(i+1)%e),c-o<t)return;const d=l&&c-l;return d?Math.round(1e3*f/d):void 0}}(50,250);return o=>{const s=o.loaded,i=o.lengthComputable?o.total:void 0,a=s-n,c=r(a);n=s;const l={loaded:s,total:i,progress:i?s/i:void 0,bytes:a,rate:c||void 0,estimated:c&&i&&s<=i?(i-s)/c:void 0,event:o};l[t?"download":"upload"]=!0,e(l)}}const ze={http:null,xhr:"undefined"!=typeof XMLHttpRequest&&function(e){return new Promise((function(t,n){let r=e.data;const o=Pe.from(e.headers).normalize();let s,i,{responseType:a,withXSRFToken:c}=e;function l(){e.cancelToken&&e.cancelToken.unsubscribe(s),e.signal&&e.signal.removeEventListener("abort",s)}if(Z.isFormData(r))if(Oe.hasStandardBrowserEnv||Oe.hasStandardBrowserWebWorkerEnv)o.setContentType(!1);else if(!1!==(i=o.getContentType())){const[e,...t]=i?i.split(";").map((e=>e.trim())).filter(Boolean):[];o.setContentType([e||"multipart/form-data",...t].join("; "))}let u=new XMLHttpRequest;if(e.auth){const t=e.auth.username||"",n=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.set("Authorization","Basic "+btoa(t+":"+n))}const f=Be(e.baseURL,e.url);function d(){if(!u)return;const r=Pe.from("getAllResponseHeaders"in u&&u.getAllResponseHeaders());!function(e,t,n){const r=n.config.validateStatus;n.status&&r&&!r(n.status)?t(new ne("Request failed with status code "+n.status,[ne.ERR_BAD_REQUEST,ne.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n)):e(n)}((function(e){t(e),l()}),(function(e){n(e),l()}),{data:a&&"text"!==a&&"json"!==a?u.response:u.responseText,status:u.status,statusText:u.statusText,headers:r,config:e,request:u}),u=null}if(u.open(e.method.toUpperCase(),pe(f,e.params,e.paramsSerializer),!0),u.timeout=e.timeout,"onloadend"in u?u.onloadend=d:u.onreadystatechange=function(){u&&4===u.readyState&&(0!==u.status||u.responseURL&&0===u.responseURL.indexOf("file:"))&&setTimeout(d)},u.onabort=function(){u&&(n(new ne("Request aborted",ne.ECONNABORTED,e,u)),u=null)},u.onerror=function(){n(new ne("Network Error",ne.ERR_NETWORK,e,u)),u=null},u.ontimeout=function(){let t=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const r=e.transitional||me;e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),n(new ne(t,r.clarifyTimeoutError?ne.ETIMEDOUT:ne.ECONNABORTED,e,u)),u=null},Oe.hasStandardBrowserEnv&&(c&&Z.isFunction(c)&&(c=c(e)),c||!1!==c&&Le(f))){const t=e.xsrfHeaderName&&e.xsrfCookieName&&Ue.read(e.xsrfCookieName);t&&o.set(e.xsrfHeaderName,t)}void 0===r&&o.setContentType(null),"setRequestHeader"in u&&Z.forEach(o.toJSON(),(function(e,t){u.setRequestHeader(t,e)})),Z.isUndefined(e.withCredentials)||(u.withCredentials=!!e.withCredentials),a&&"json"!==a&&(u.responseType=e.responseType),"function"==typeof e.onDownloadProgress&&u.addEventListener("progress",qe(e.onDownloadProgress,!0)),"function"==typeof e.onUploadProgress&&u.upload&&u.upload.addEventListener("progress",qe(e.onUploadProgress)),(e.cancelToken||e.signal)&&(s=t=>{u&&(n(!t||t.type?new Fe(null,e,u):t),u.abort(),u=null)},e.cancelToken&&e.cancelToken.subscribe(s),e.signal&&(e.signal.aborted?s():e.signal.addEventListener("abort",s)));const p=function(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}(f);p&&-1===Oe.protocols.indexOf(p)?n(new ne("Unsupported protocol "+p+":",ne.ERR_BAD_REQUEST,e)):u.send(r||null)}))}};Z.forEach(ze,((e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch(e){}Object.defineProperty(e,"adapterName",{value:t})}}));const Ie=e=>`- ${e}`,Me=e=>Z.isFunction(e)||null===e||!1===e,He=e=>{e=Z.isArray(e)?e:[e];const{length:t}=e;let n,r;const o={};for(let s=0;s<t;s++){let t;if(n=e[s],r=n,!Me(n)&&(r=ze[(t=String(n)).toLowerCase()],void 0===r))throw new ne(`Unknown adapter '${t}'`);if(r)break;o[t||"#"+s]=r}if(!r){const e=Object.entries(o).map((([e,t])=>`adapter ${e} `+(!1===t?"is not supported by the environment":"is not available in the build")));let n=t?e.length>1?"since :\n"+e.map(Ie).join("\n"):" "+Ie(e[0]):"as no adapter specified";throw new ne("There is no suitable adapter to dispatch the request "+n,"ERR_NOT_SUPPORT")}return r};function Je(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Fe(null,e)}function We(e){return Je(e),e.headers=Pe.from(e.headers),e.data=ke.call(e,e.transformRequest),-1!==["post","put","patch"].indexOf(e.method)&&e.headers.setContentType("application/x-www-form-urlencoded",!1),He(e.adapter||ve.adapter)(e).then((function(t){return Je(e),t.data=ke.call(e,e.transformResponse,t),t.headers=Pe.from(t.headers),t}),(function(t){return _e(t)||(Je(e),t&&t.response&&(t.response.data=ke.call(e,e.transformResponse,t.response),t.response.headers=Pe.from(t.response.headers))),Promise.reject(t)}))}const Ve=e=>e instanceof Pe?e.toJSON():e;function Ke(e,t){t=t||{};const n={};function r(e,t,n){return Z.isPlainObject(e)&&Z.isPlainObject(t)?Z.merge.call({caseless:n},e,t):Z.isPlainObject(t)?Z.merge({},t):Z.isArray(t)?t.slice():t}function o(e,t,n){return Z.isUndefined(t)?Z.isUndefined(e)?void 0:r(void 0,e,n):r(e,t,n)}function s(e,t){if(!Z.isUndefined(t))return r(void 0,t)}function i(e,t){return Z.isUndefined(t)?Z.isUndefined(e)?void 0:r(void 0,e):r(void 0,t)}function a(n,o,s){return s in t?r(n,o):s in e?r(void 0,n):void 0}const c={url:s,method:s,data:s,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,withXSRFToken:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:a,headers:(e,t)=>o(Ve(e),Ve(t),!0)};return Z.forEach(Object.keys(Object.assign({},e,t)),(function(r){const s=c[r]||o,i=s(e[r],t[r],r);Z.isUndefined(i)&&s!==a||(n[r]=i)})),n}const $e={};["object","boolean","number","function","string","symbol"].forEach(((e,t)=>{$e[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}}));const Ge={};$e.transitional=function(e,t,n){function r(e,t){return"[Axios v1.6.7] Transitional option '"+e+"'"+t+(n?". "+n:"")}return(n,o,s)=>{if(!1===e)throw new ne(r(o," has been removed"+(t?" in "+t:"")),ne.ERR_DEPRECATED);return t&&!Ge[o]&&(Ge[o]=!0,console.warn(r(o," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(n,o,s)}};const Xe={assertOptions:function(e,t,n){if("object"!=typeof e)throw new ne("options must be an object",ne.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let o=r.length;for(;o-- >0;){const s=r[o],i=t[s];if(i){const t=e[s],n=void 0===t||i(t,s,e);if(!0!==n)throw new ne("option "+s+" must be "+n,ne.ERR_BAD_OPTION_VALUE)}else if(!0!==n)throw new ne("Unknown option "+s,ne.ERR_BAD_OPTION)}},validators:$e},Qe=Xe.validators;class Ze{constructor(e){this.defaults=e,this.interceptors={request:new he,response:new he}}async request(e,t){try{return await this._request(e,t)}catch(e){if(e instanceof Error){let t;Error.captureStackTrace?Error.captureStackTrace(t={}):t=new Error;const n=t.stack?t.stack.replace(/^.+\n/,""):"";e.stack?n&&!String(e.stack).endsWith(n.replace(/^.+\n.+\n/,""))&&(e.stack+="\n"+n):e.stack=n}throw e}}_request(e,t){"string"==typeof e?(t=t||{}).url=e:t=e||{},t=Ke(this.defaults,t);const{transitional:n,paramsSerializer:r,headers:o}=t;void 0!==n&&Xe.assertOptions(n,{silentJSONParsing:Qe.transitional(Qe.boolean),forcedJSONParsing:Qe.transitional(Qe.boolean),clarifyTimeoutError:Qe.transitional(Qe.boolean)},!1),null!=r&&(Z.isFunction(r)?t.paramsSerializer={serialize:r}:Xe.assertOptions(r,{encode:Qe.function,serialize:Qe.function},!0)),t.method=(t.method||this.defaults.method||"get").toLowerCase();let s=o&&Z.merge(o.common,o[t.method]);o&&Z.forEach(["delete","get","head","post","put","patch","common"],(e=>{delete o[e]})),t.headers=Pe.concat(s,o);const i=[];let a=!0;this.interceptors.request.forEach((function(e){"function"==typeof e.runWhen&&!1===e.runWhen(t)||(a=a&&e.synchronous,i.unshift(e.fulfilled,e.rejected))}));const c=[];let l;this.interceptors.response.forEach((function(e){c.push(e.fulfilled,e.rejected)}));let u,f=0;if(!a){const e=[We.bind(this),void 0];for(e.unshift.apply(e,i),e.push.apply(e,c),u=e.length,l=Promise.resolve(t);f<u;)l=l.then(e[f++],e[f++]);return l}u=i.length;let d=t;for(f=0;f<u;){const e=i[f++],t=i[f++];try{d=e(d)}catch(e){t.call(this,e);break}}try{l=We.call(this,d)}catch(e){return Promise.reject(e)}for(f=0,u=c.length;f<u;)l=l.then(c[f++],c[f++]);return l}getUri(e){return pe(Be((e=Ke(this.defaults,e)).baseURL,e.url),e.params,e.paramsSerializer)}}Z.forEach(["delete","get","head","options"],(function(e){Ze.prototype[e]=function(t,n){return this.request(Ke(n||{},{method:e,url:t,data:(n||{}).data}))}})),Z.forEach(["post","put","patch"],(function(e){function t(t){return function(n,r,o){return this.request(Ke(o||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:n,data:r}))}}Ze.prototype[e]=t(),Ze.prototype[e+"Form"]=t(!0)}));const Ye=Ze;class et{constructor(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");let t;this.promise=new Promise((function(e){t=e}));const n=this;this.promise.then((e=>{if(!n._listeners)return;let t=n._listeners.length;for(;t-- >0;)n._listeners[t](e);n._listeners=null})),this.promise.then=e=>{let t;const r=new Promise((e=>{n.subscribe(e),t=e})).then(e);return r.cancel=function(){n.unsubscribe(t)},r},e((function(e,r,o){n.reason||(n.reason=new Fe(e,r,o),t(n.reason))}))}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}static source(){let e;return{token:new et((function(t){e=t})),cancel:e}}}const tt=et,nt={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(nt).forEach((([e,t])=>{nt[t]=e}));const rt=nt,ot=function e(t){const n=new Ye(t),r=b(Ye.prototype.request,n);return Z.extend(r,Ye.prototype,n,{allOwnKeys:!0}),Z.extend(r,n,null,{allOwnKeys:!0}),r.create=function(n){return e(Ke(t,n))},r}(ve);ot.Axios=Ye,ot.CanceledError=Fe,ot.CancelToken=tt,ot.isCancel=_e,ot.VERSION="1.6.7",ot.toFormData=ae,ot.AxiosError=ne,ot.Cancel=ot.CanceledError,ot.all=function(e){return Promise.all(e)},ot.spread=function(e){return function(t){return e.apply(null,t)}},ot.isAxiosError=function(e){return Z.isObject(e)&&!0===e.isAxiosError},ot.mergeConfig=Ke,ot.AxiosHeaders=Pe,ot.formToJSON=e=>Se(Z.isHTMLForm(e)?new FormData(e):e),ot.getAdapter=He,ot.HttpStatusCode=rt,ot.default=ot;const st=ot,it=e=>{const[t,n]=(0,s.useState)(null),[r,i]=(0,s.useState)(!1),[l,f]=(0,s.useState)(!1);return React.createElement("div",{className:"search-pet"},React.createElement(o(),{onSubmit:async e=>{if(e.preventDefault(),n(null),f(!0),""!==e.target.zipcode.value&&""!==e.target.file.value){i(!0);const r=new FormData;r.append("zipcode",e.target.zipcode.value),r.append("file",e.target.file.files[0]);let o=await(t=e.target,st.post("https://doodles234.azurewebsites.net/predictwithupload",t).then((e=>e.data)).catch((e=>{console.log(e)})));setTimeout((()=>{let e=[];try{o.result_imgs.forEach(((t,n)=>{e.push({img:t,name:"Adopt-a-pet",details:y.result_details[n]})}))}catch(t){y.result_imgs.forEach(((t,n)=>{e.push({img:t,name:"Adopt-a-pet",details:y.result_details[n]})}))}n(e),f(!1)}),5e3)}else f(!1);var t},novalidate:!0},React.createElement(a,{placeholder:"Please enter your zipcode",regex:"(^\\d{5}$)",onChange:()=>console.log("Cambió"),name:"zipcode",required:!0}),React.createElement(c,{name:"file",required:!0}),React.createElement(u(),{disabled:l},"Good Luck!")),t&&React.createElement(g,{results:t}))}})(),module.exports=r})();