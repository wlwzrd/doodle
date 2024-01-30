(()=>{var e={823:(e,t,n)=>{const r=n(427);e.exports=r},427:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>s});var r=n(258),o=n.n(r);const s=e=>{const{children:t,color:n,onClick:r,disabled:s}=e,i=`button button--${n}`;return o().createElement("button",{className:i,onClick:r,disabled:s},t)}},573:(e,t,n)=>{const r=n(96);e.exports=r},96:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>s});var r=n(258),o=n.n(r);const s=e=>{const{onSubmit:t,children:n,novalidate:r}=e;return o().createElement("form",{onSubmit:t,className:"form",noValidate:r},n)}},258:e=>{"use strict";e.exports=require("react")}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var s=t[r]={exports:{}};return e[r](s,s.exports,n),s.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var r={};(()=>{"use strict";n.r(r),n.d(r,{default:()=>ut});var e={};n.r(e),n.d(e,{hasBrowserEnv:()=>Oe,hasStandardBrowserEnv:()=>Se,hasStandardBrowserWebWorkerEnv:()=>ve});var t=n(573),o=n.n(t),s=n(258),i=n.n(s);const a=e=>{const{value:t,onChange:n,placeholder:r,label:o,regex:s,name:a,required:c}=e;return i().createElement("label",{className:"text-input"},i().createElement("span",null,o),i().createElement("input",{type:"text",onChange:e=>{new RegExp(s)?.test(e.target.value)&&n(e.target.value)},value:t,placeholder:r,pattern:s,name:a,required:c}))},c=e=>{const{onChange:t,name:n,required:r}=e;return i().createElement("label",{className:"upload",onDrop:e=>{e.preventDefault();const t=e.dataTransfer.files;e.target.querySelector("input").files=t},onDragOver:e=>{e.preventDefault()}},i().createElement("span",{className:"upload-title"},"Drop your image here"),"or",i().createElement("input",{type:"file",id:"images",accept:"image/*",name:n,required:r}))};var l=n(823),u=n.n(l);const f=e=>{const{children:t,alignItems:n}=e,r=n?`card--${n}`:"";return i().createElement("div",{className:`card ${r}`},t)},d=e=>{const{children:t,component:n}=e;return{h1:i().createElement("h1",null,t),h2:i().createElement("h2",null,t),h3:i().createElement("h3",null,t),h4:i().createElement("h4",null,t),p:i().createElement("p",null,t)}[n]},p=e=>{const{src:t,alt:n}=e;return React.createElement("img",{src:t,alt:n,className:"image"})},h=e=>{const{action:t,img:n,text:r}=e;return i().createElement(f,{alignItems:"center"},i().createElement(p,{src:n}),i().createElement(d,{component:"h3"},r),t)};var m=n(427);const g=e=>{const{results:t}=e;return i().createElement("div",{className:"results-grid"},t&&t.map(((e,t)=>i().createElement(h,{key:t,action:i().createElement(m.default,{onClick:()=>(e=>{let t=document.createElement("a");t.href=e,t.target="_blank",t.click()})(e.details)},"Details"),img:e.img,text:e.name}))))},y=s.createContext({}),b=!0;function w({baseColor:e,highlightColor:t,width:n,height:r,borderRadius:o,circle:s,direction:i,duration:a,enableAnimation:c=b}){const l={};return"rtl"===i&&(l["--animation-direction"]="reverse"),"number"==typeof a&&(l["--animation-duration"]=`${a}s`),c||(l["--pseudo-element-display"]="none"),"string"!=typeof n&&"number"!=typeof n||(l.width=n),"string"!=typeof r&&"number"!=typeof r||(l.height=r),"string"!=typeof o&&"number"!=typeof o||(l.borderRadius=o),s&&(l.borderRadius="50%"),void 0!==e&&(l["--base-color"]=e),void 0!==t&&(l["--highlight-color"]=t),l}function E({count:e=1,wrapper:t,className:n,containerClassName:r,containerTestId:o,circle:i=!1,style:a,...c}){var l,u,f;const d=s.useContext(y),p={...c};for(const[e,t]of Object.entries(c))void 0===t&&delete p[e];const h={...d,...p,circle:i},m={...a,...w(h)};let g="react-loading-skeleton";n&&(g+=` ${n}`);const E=null!==(l=h.inline)&&void 0!==l&&l,O=[],S=Math.ceil(e);for(let t=0;t<S;t++){let n=m;if(S>e&&t===S-1){const t=null!==(u=n.width)&&void 0!==u?u:"100%",r=e%1,o="number"==typeof t?t*r:`calc(${t} * ${r})`;n={...n,width:o}}const r=s.createElement("span",{className:g,style:n,key:t},"‌");E?O.push(r):O.push(s.createElement(s.Fragment,{key:t},r,s.createElement("br",null)))}return s.createElement("span",{className:r,"data-testid":o,"aria-live":"polite","aria-busy":null!==(f=h.enableAnimation)&&void 0!==f?f:b},t?O.map(((e,n)=>s.createElement(t,{key:n},e))):O)}const O={ZipCodeRead:92371,result_details:["https://www.shutterstock.com/image-photo/scruffy-adult-blue-gold-yorkshire-260nw-2189496389.jpg","https://www.shutterstock.com/image-photo/scruffy-adult-blue-gold-yorkshire-260nw-2189496389.jpg","https://www.shutterstock.com/image-photo/scruffy-adult-blue-gold-yorkshire-260nw-2189496389.jpg","https://www.shutterstock.com/image-photo/scruffy-adult-blue-gold-yorkshire-260nw-2189496389.jpg","https://www.shutterstock.com/image-photo/scruffy-adult-blue-gold-yorkshire-260nw-2189496389.jpg"],result_imgs:["https://www.shutterstock.com/image-photo/scruffy-adult-blue-gold-yorkshire-260nw-2189496389.jpg","https://www.shutterstock.com/image-photo/scruffy-adult-blue-gold-yorkshire-260nw-2189496389.jpg","https://www.shutterstock.com/image-photo/scruffy-adult-blue-gold-yorkshire-260nw-2189496389.jpg","https://www.shutterstock.com/image-photo/scruffy-adult-blue-gold-yorkshire-260nw-2189496389.jpg","https://www.shutterstock.com/image-photo/scruffy-adult-blue-gold-yorkshire-260nw-2189496389.jpg"]};function S(e,t){return function(){return e.apply(t,arguments)}}const{toString:R}=Object.prototype,{getPrototypeOf:v}=Object,A=(T=Object.create(null),e=>{const t=R.call(e);return T[t]||(T[t]=t.slice(8,-1).toLowerCase())});var T;const j=e=>(e=e.toLowerCase(),t=>A(t)===e),N=e=>t=>typeof t===e,{isArray:x}=Array,C=N("undefined"),k=j("ArrayBuffer"),P=N("string"),_=N("function"),F=N("number"),D=e=>null!==e&&"object"==typeof e,U=e=>{if("object"!==A(e))return!1;const t=v(e);return!(null!==t&&t!==Object.prototype&&null!==Object.getPrototypeOf(t)||Symbol.toStringTag in e||Symbol.iterator in e)},B=j("Date"),L=j("File"),q=j("Blob"),I=j("FileList"),z=j("URLSearchParams");function M(e,t,{allOwnKeys:n=!1}={}){if(null==e)return;let r,o;if("object"!=typeof e&&(e=[e]),x(e))for(r=0,o=e.length;r<o;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),s=o.length;let i;for(r=0;r<s;r++)i=o[r],t.call(null,e[i],i,e)}}function H(e,t){t=t.toLowerCase();const n=Object.keys(e);let r,o=n.length;for(;o-- >0;)if(r=n[o],t===r.toLowerCase())return r;return null}const J="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:global,W=e=>!C(e)&&e!==J,$=(V="undefined"!=typeof Uint8Array&&v(Uint8Array),e=>V&&e instanceof V);var V;const K=j("HTMLFormElement"),G=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),X=j("RegExp"),Q=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};M(n,((n,o)=>{let s;!1!==(s=t(n,o,e))&&(r[o]=s||n)})),Object.defineProperties(e,r)},Z="abcdefghijklmnopqrstuvwxyz",Y="0123456789",ee={DIGIT:Y,ALPHA:Z,ALPHA_DIGIT:Z+Z.toUpperCase()+Y},te=j("AsyncFunction"),ne={isArray:x,isArrayBuffer:k,isBuffer:function(e){return null!==e&&!C(e)&&null!==e.constructor&&!C(e.constructor)&&_(e.constructor.isBuffer)&&e.constructor.isBuffer(e)},isFormData:e=>{let t;return e&&("function"==typeof FormData&&e instanceof FormData||_(e.append)&&("formdata"===(t=A(e))||"object"===t&&_(e.toString)&&"[object FormData]"===e.toString()))},isArrayBufferView:function(e){let t;return t="undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&k(e.buffer),t},isString:P,isNumber:F,isBoolean:e=>!0===e||!1===e,isObject:D,isPlainObject:U,isUndefined:C,isDate:B,isFile:L,isBlob:q,isRegExp:X,isFunction:_,isStream:e=>D(e)&&_(e.pipe),isURLSearchParams:z,isTypedArray:$,isFileList:I,forEach:M,merge:function e(){const{caseless:t}=W(this)&&this||{},n={},r=(r,o)=>{const s=t&&H(n,o)||o;U(n[s])&&U(r)?n[s]=e(n[s],r):U(r)?n[s]=e({},r):x(r)?n[s]=r.slice():n[s]=r};for(let e=0,t=arguments.length;e<t;e++)arguments[e]&&M(arguments[e],r);return n},extend:(e,t,n,{allOwnKeys:r}={})=>(M(t,((t,r)=>{n&&_(t)?e[r]=S(t,n):e[r]=t}),{allOwnKeys:r}),e),trim:e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),stripBOM:e=>(65279===e.charCodeAt(0)&&(e=e.slice(1)),e),inherits:(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},toFlatObject:(e,t,n,r)=>{let o,s,i;const a={};if(t=t||{},null==e)return t;do{for(o=Object.getOwnPropertyNames(e),s=o.length;s-- >0;)i=o[s],r&&!r(i,e,t)||a[i]||(t[i]=e[i],a[i]=!0);e=!1!==n&&v(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},kindOf:A,kindOfTest:j,endsWith:(e,t,n)=>{e=String(e),(void 0===n||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return-1!==r&&r===n},toArray:e=>{if(!e)return null;if(x(e))return e;let t=e.length;if(!F(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},forEachEntry:(e,t)=>{const n=(e&&e[Symbol.iterator]).call(e);let r;for(;(r=n.next())&&!r.done;){const n=r.value;t.call(e,n[0],n[1])}},matchAll:(e,t)=>{let n;const r=[];for(;null!==(n=e.exec(t));)r.push(n);return r},isHTMLForm:K,hasOwnProperty:G,hasOwnProp:G,reduceDescriptors:Q,freezeMethods:e=>{Q(e,((t,n)=>{if(_(e)&&-1!==["arguments","caller","callee"].indexOf(n))return!1;const r=e[n];_(r)&&(t.enumerable=!1,"writable"in t?t.writable=!1:t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")}))}))},toObjectSet:(e,t)=>{const n={},r=e=>{e.forEach((e=>{n[e]=!0}))};return x(e)?r(e):r(String(e).split(t)),n},toCamelCase:e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,(function(e,t,n){return t.toUpperCase()+n})),noop:()=>{},toFiniteNumber:(e,t)=>(e=+e,Number.isFinite(e)?e:t),findKey:H,global:J,isContextDefined:W,ALPHABET:ee,generateString:(e=16,t=ee.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n},isSpecCompliantForm:function(e){return!!(e&&_(e.append)&&"FormData"===e[Symbol.toStringTag]&&e[Symbol.iterator])},toJSONObject:e=>{const t=new Array(10),n=(e,r)=>{if(D(e)){if(t.indexOf(e)>=0)return;if(!("toJSON"in e)){t[r]=e;const o=x(e)?[]:{};return M(e,((e,t)=>{const s=n(e,r+1);!C(s)&&(o[t]=s)})),t[r]=void 0,o}}return e};return n(e,0)},isAsyncFn:te,isThenable:e=>e&&(D(e)||_(e))&&_(e.then)&&_(e.catch)};function re(e,t,n,r,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),o&&(this.response=o)}ne.inherits(re,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:ne.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const oe=re.prototype,se={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach((e=>{se[e]={value:e}})),Object.defineProperties(re,se),Object.defineProperty(oe,"isAxiosError",{value:!0}),re.from=(e,t,n,r,o,s)=>{const i=Object.create(oe);return ne.toFlatObject(e,i,(function(e){return e!==Error.prototype}),(e=>"isAxiosError"!==e)),re.call(i,e.message,t,n,r,o),i.cause=e,i.name=e.name,s&&Object.assign(i,s),i};const ie=re;function ae(e){return ne.isPlainObject(e)||ne.isArray(e)}function ce(e){return ne.endsWith(e,"[]")?e.slice(0,-2):e}function le(e,t,n){return e?e.concat(t).map((function(e,t){return e=ce(e),!n&&t?"["+e+"]":e})).join(n?".":""):t}const ue=ne.toFlatObject(ne,{},null,(function(e){return/^is[A-Z]/.test(e)})),fe=function(e,t,n){if(!ne.isObject(e))throw new TypeError("target must be an object");t=t||new FormData;const r=(n=ne.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,(function(e,t){return!ne.isUndefined(t[e])}))).metaTokens,o=n.visitor||l,s=n.dots,i=n.indexes,a=(n.Blob||"undefined"!=typeof Blob&&Blob)&&ne.isSpecCompliantForm(t);if(!ne.isFunction(o))throw new TypeError("visitor must be a function");function c(e){if(null===e)return"";if(ne.isDate(e))return e.toISOString();if(!a&&ne.isBlob(e))throw new ie("Blob is not supported. Use a Buffer instead.");return ne.isArrayBuffer(e)||ne.isTypedArray(e)?a&&"function"==typeof Blob?new Blob([e]):Buffer.from(e):e}function l(e,n,o){let a=e;if(e&&!o&&"object"==typeof e)if(ne.endsWith(n,"{}"))n=r?n:n.slice(0,-2),e=JSON.stringify(e);else if(ne.isArray(e)&&function(e){return ne.isArray(e)&&!e.some(ae)}(e)||(ne.isFileList(e)||ne.endsWith(n,"[]"))&&(a=ne.toArray(e)))return n=ce(n),a.forEach((function(e,r){!ne.isUndefined(e)&&null!==e&&t.append(!0===i?le([n],r,s):null===i?n:n+"[]",c(e))})),!1;return!!ae(e)||(t.append(le(o,n,s),c(e)),!1)}const u=[],f=Object.assign(ue,{defaultVisitor:l,convertValue:c,isVisitable:ae});if(!ne.isObject(e))throw new TypeError("data must be an object");return function e(n,r){if(!ne.isUndefined(n)){if(-1!==u.indexOf(n))throw Error("Circular reference detected in "+r.join("."));u.push(n),ne.forEach(n,(function(n,s){!0===(!(ne.isUndefined(n)||null===n)&&o.call(t,n,ne.isString(s)?s.trim():s,r,f))&&e(n,r?r.concat(s):[s])})),u.pop()}}(e),t};function de(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,(function(e){return t[e]}))}function pe(e,t){this._pairs=[],e&&fe(e,this,t)}const he=pe.prototype;he.append=function(e,t){this._pairs.push([e,t])},he.toString=function(e){const t=e?function(t){return e.call(this,t,de)}:de;return this._pairs.map((function(e){return t(e[0])+"="+t(e[1])}),"").join("&")};const me=pe;function ge(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function ye(e,t,n){if(!t)return e;const r=n&&n.encode||ge,o=n&&n.serialize;let s;if(s=o?o(t,n):ne.isURLSearchParams(t)?t.toString():new me(t,n).toString(r),s){const t=e.indexOf("#");-1!==t&&(e=e.slice(0,t)),e+=(-1===e.indexOf("?")?"?":"&")+s}return e}const be=class{constructor(){this.handlers=[]}use(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){ne.forEach(this.handlers,(function(t){null!==t&&e(t)}))}},we={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Ee={isBrowser:!0,classes:{URLSearchParams:"undefined"!=typeof URLSearchParams?URLSearchParams:me,FormData:"undefined"!=typeof FormData?FormData:null,Blob:"undefined"!=typeof Blob?Blob:null},protocols:["http","https","file","blob","url","data"]},Oe="undefined"!=typeof window&&"undefined"!=typeof document,Se=(Re="undefined"!=typeof navigator&&navigator.product,Oe&&["ReactNative","NativeScript","NS"].indexOf(Re)<0);var Re;const ve="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&"function"==typeof self.importScripts,Ae={...e,...Ee},Te=function(e){function t(e,n,r,o){let s=e[o++];if("__proto__"===s)return!0;const i=Number.isFinite(+s),a=o>=e.length;return s=!s&&ne.isArray(r)?r.length:s,a?(ne.hasOwnProp(r,s)?r[s]=[r[s],n]:r[s]=n,!i):(r[s]&&ne.isObject(r[s])||(r[s]=[]),t(e,n,r[s],o)&&ne.isArray(r[s])&&(r[s]=function(e){const t={},n=Object.keys(e);let r;const o=n.length;let s;for(r=0;r<o;r++)s=n[r],t[s]=e[s];return t}(r[s])),!i)}if(ne.isFormData(e)&&ne.isFunction(e.entries)){const n={};return ne.forEachEntry(e,((e,r)=>{t(function(e){return ne.matchAll(/\w+|\[(\w*)]/g,e).map((e=>"[]"===e[0]?"":e[1]||e[0]))}(e),r,n,0)})),n}return null},je={transitional:we,adapter:["xhr","http"],transformRequest:[function(e,t){const n=t.getContentType()||"",r=n.indexOf("application/json")>-1,o=ne.isObject(e);if(o&&ne.isHTMLForm(e)&&(e=new FormData(e)),ne.isFormData(e))return r?JSON.stringify(Te(e)):e;if(ne.isArrayBuffer(e)||ne.isBuffer(e)||ne.isStream(e)||ne.isFile(e)||ne.isBlob(e))return e;if(ne.isArrayBufferView(e))return e.buffer;if(ne.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let s;if(o){if(n.indexOf("application/x-www-form-urlencoded")>-1)return function(e,t){return fe(e,new Ae.classes.URLSearchParams,Object.assign({visitor:function(e,t,n,r){return Ae.isNode&&ne.isBuffer(e)?(this.append(t,e.toString("base64")),!1):r.defaultVisitor.apply(this,arguments)}},t))}(e,this.formSerializer).toString();if((s=ne.isFileList(e))||n.indexOf("multipart/form-data")>-1){const t=this.env&&this.env.FormData;return fe(s?{"files[]":e}:e,t&&new t,this.formSerializer)}}return o||r?(t.setContentType("application/json",!1),function(e,t,n){if(ne.isString(e))try{return(0,JSON.parse)(e),ne.trim(e)}catch(e){if("SyntaxError"!==e.name)throw e}return(0,JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){const t=this.transitional||je.transitional,n=t&&t.forcedJSONParsing,r="json"===this.responseType;if(e&&ne.isString(e)&&(n&&!this.responseType||r)){const n=!(t&&t.silentJSONParsing)&&r;try{return JSON.parse(e)}catch(e){if(n){if("SyntaxError"===e.name)throw ie.from(e,ie.ERR_BAD_RESPONSE,this,null,this.response);throw e}}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Ae.classes.FormData,Blob:Ae.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};ne.forEach(["delete","get","head","post","put","patch"],(e=>{je.headers[e]={}}));const Ne=je,xe=ne.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Ce=Symbol("internals");function ke(e){return e&&String(e).trim().toLowerCase()}function Pe(e){return!1===e||null==e?e:ne.isArray(e)?e.map(Pe):String(e)}function _e(e,t,n,r,o){return ne.isFunction(r)?r.call(this,t,n):(o&&(t=n),ne.isString(t)?ne.isString(r)?-1!==t.indexOf(r):ne.isRegExp(r)?r.test(t):void 0:void 0)}class Fe{constructor(e){e&&this.set(e)}set(e,t,n){const r=this;function o(e,t,n){const o=ke(t);if(!o)throw new Error("header name must be a non-empty string");const s=ne.findKey(r,o);(!s||void 0===r[s]||!0===n||void 0===n&&!1!==r[s])&&(r[s||t]=Pe(e))}const s=(e,t)=>ne.forEach(e,((e,n)=>o(e,n,t)));return ne.isPlainObject(e)||e instanceof this.constructor?s(e,t):ne.isString(e)&&(e=e.trim())&&!/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim())?s((e=>{const t={};let n,r,o;return e&&e.split("\n").forEach((function(e){o=e.indexOf(":"),n=e.substring(0,o).trim().toLowerCase(),r=e.substring(o+1).trim(),!n||t[n]&&xe[n]||("set-cookie"===n?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)})),t})(e),t):null!=e&&o(t,e,n),this}get(e,t){if(e=ke(e)){const n=ne.findKey(this,e);if(n){const e=this[n];if(!t)return e;if(!0===t)return function(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}(e);if(ne.isFunction(t))return t.call(this,e,n);if(ne.isRegExp(t))return t.exec(e);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=ke(e)){const n=ne.findKey(this,e);return!(!n||void 0===this[n]||t&&!_e(0,this[n],n,t))}return!1}delete(e,t){const n=this;let r=!1;function o(e){if(e=ke(e)){const o=ne.findKey(n,e);!o||t&&!_e(0,n[o],o,t)||(delete n[o],r=!0)}}return ne.isArray(e)?e.forEach(o):o(e),r}clear(e){const t=Object.keys(this);let n=t.length,r=!1;for(;n--;){const o=t[n];e&&!_e(0,this[o],o,e,!0)||(delete this[o],r=!0)}return r}normalize(e){const t=this,n={};return ne.forEach(this,((r,o)=>{const s=ne.findKey(n,o);if(s)return t[s]=Pe(r),void delete t[o];const i=e?function(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,((e,t,n)=>t.toUpperCase()+n))}(o):String(o).trim();i!==o&&delete t[o],t[i]=Pe(r),n[i]=!0})),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const t=Object.create(null);return ne.forEach(this,((n,r)=>{null!=n&&!1!==n&&(t[r]=e&&ne.isArray(n)?n.join(", "):n)})),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map((([e,t])=>e+": "+t)).join("\n")}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){const n=new this(e);return t.forEach((e=>n.set(e))),n}static accessor(e){const t=(this[Ce]=this[Ce]={accessors:{}}).accessors,n=this.prototype;function r(e){const r=ke(e);t[r]||(function(e,t){const n=ne.toCamelCase(" "+t);["get","set","has"].forEach((r=>{Object.defineProperty(e,r+n,{value:function(e,n,o){return this[r].call(this,t,e,n,o)},configurable:!0})}))}(n,e),t[r]=!0)}return ne.isArray(e)?e.forEach(r):r(e),this}}Fe.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),ne.reduceDescriptors(Fe.prototype,(({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(e){this[n]=e}}})),ne.freezeMethods(Fe);const De=Fe;function Ue(e,t){const n=this||Ne,r=t||n,o=De.from(r.headers);let s=r.data;return ne.forEach(e,(function(e){s=e.call(n,s,o.normalize(),t?t.status:void 0)})),o.normalize(),s}function Be(e){return!(!e||!e.__CANCEL__)}function Le(e,t,n){ie.call(this,null==e?"canceled":e,ie.ERR_CANCELED,t,n),this.name="CanceledError"}ne.inherits(Le,ie,{__CANCEL__:!0});const qe=Le,Ie=Ae.hasStandardBrowserEnv?{write(e,t,n,r,o,s){const i=[e+"="+encodeURIComponent(t)];ne.isNumber(n)&&i.push("expires="+new Date(n).toGMTString()),ne.isString(r)&&i.push("path="+r),ne.isString(o)&&i.push("domain="+o),!0===s&&i.push("secure"),document.cookie=i.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read:()=>null,remove(){}};function ze(e,t){return e&&!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)?function(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}(e,t):t}const Me=Ae.hasStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),t=document.createElement("a");let n;function r(n){let r=n;return e&&(t.setAttribute("href",r),r=t.href),t.setAttribute("href",r),{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:"/"===t.pathname.charAt(0)?t.pathname:"/"+t.pathname}}return n=r(window.location.href),function(e){const t=ne.isString(e)?r(e):e;return t.protocol===n.protocol&&t.host===n.host}}():function(){return!0};function He(e,t){let n=0;const r=function(e,t){e=e||10;const n=new Array(e),r=new Array(e);let o,s=0,i=0;return t=void 0!==t?t:1e3,function(a){const c=Date.now(),l=r[i];o||(o=c),n[s]=a,r[s]=c;let u=i,f=0;for(;u!==s;)f+=n[u++],u%=e;if(s=(s+1)%e,s===i&&(i=(i+1)%e),c-o<t)return;const d=l&&c-l;return d?Math.round(1e3*f/d):void 0}}(50,250);return o=>{const s=o.loaded,i=o.lengthComputable?o.total:void 0,a=s-n,c=r(a);n=s;const l={loaded:s,total:i,progress:i?s/i:void 0,bytes:a,rate:c||void 0,estimated:c&&i&&s<=i?(i-s)/c:void 0,event:o};l[t?"download":"upload"]=!0,e(l)}}const Je={http:null,xhr:"undefined"!=typeof XMLHttpRequest&&function(e){return new Promise((function(t,n){let r=e.data;const o=De.from(e.headers).normalize();let s,i,{responseType:a,withXSRFToken:c}=e;function l(){e.cancelToken&&e.cancelToken.unsubscribe(s),e.signal&&e.signal.removeEventListener("abort",s)}if(ne.isFormData(r))if(Ae.hasStandardBrowserEnv||Ae.hasStandardBrowserWebWorkerEnv)o.setContentType(!1);else if(!1!==(i=o.getContentType())){const[e,...t]=i?i.split(";").map((e=>e.trim())).filter(Boolean):[];o.setContentType([e||"multipart/form-data",...t].join("; "))}let u=new XMLHttpRequest;if(e.auth){const t=e.auth.username||"",n=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.set("Authorization","Basic "+btoa(t+":"+n))}const f=ze(e.baseURL,e.url);function d(){if(!u)return;const r=De.from("getAllResponseHeaders"in u&&u.getAllResponseHeaders());!function(e,t,n){const r=n.config.validateStatus;n.status&&r&&!r(n.status)?t(new ie("Request failed with status code "+n.status,[ie.ERR_BAD_REQUEST,ie.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n)):e(n)}((function(e){t(e),l()}),(function(e){n(e),l()}),{data:a&&"text"!==a&&"json"!==a?u.response:u.responseText,status:u.status,statusText:u.statusText,headers:r,config:e,request:u}),u=null}if(u.open(e.method.toUpperCase(),ye(f,e.params,e.paramsSerializer),!0),u.timeout=e.timeout,"onloadend"in u?u.onloadend=d:u.onreadystatechange=function(){u&&4===u.readyState&&(0!==u.status||u.responseURL&&0===u.responseURL.indexOf("file:"))&&setTimeout(d)},u.onabort=function(){u&&(n(new ie("Request aborted",ie.ECONNABORTED,e,u)),u=null)},u.onerror=function(){n(new ie("Network Error",ie.ERR_NETWORK,e,u)),u=null},u.ontimeout=function(){let t=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const r=e.transitional||we;e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),n(new ie(t,r.clarifyTimeoutError?ie.ETIMEDOUT:ie.ECONNABORTED,e,u)),u=null},Ae.hasStandardBrowserEnv&&(c&&ne.isFunction(c)&&(c=c(e)),c||!1!==c&&Me(f))){const t=e.xsrfHeaderName&&e.xsrfCookieName&&Ie.read(e.xsrfCookieName);t&&o.set(e.xsrfHeaderName,t)}void 0===r&&o.setContentType(null),"setRequestHeader"in u&&ne.forEach(o.toJSON(),(function(e,t){u.setRequestHeader(t,e)})),ne.isUndefined(e.withCredentials)||(u.withCredentials=!!e.withCredentials),a&&"json"!==a&&(u.responseType=e.responseType),"function"==typeof e.onDownloadProgress&&u.addEventListener("progress",He(e.onDownloadProgress,!0)),"function"==typeof e.onUploadProgress&&u.upload&&u.upload.addEventListener("progress",He(e.onUploadProgress)),(e.cancelToken||e.signal)&&(s=t=>{u&&(n(!t||t.type?new qe(null,e,u):t),u.abort(),u=null)},e.cancelToken&&e.cancelToken.subscribe(s),e.signal&&(e.signal.aborted?s():e.signal.addEventListener("abort",s)));const p=function(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}(f);p&&-1===Ae.protocols.indexOf(p)?n(new ie("Unsupported protocol "+p+":",ie.ERR_BAD_REQUEST,e)):u.send(r||null)}))}};ne.forEach(Je,((e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch(e){}Object.defineProperty(e,"adapterName",{value:t})}}));const We=e=>`- ${e}`,$e=e=>ne.isFunction(e)||null===e||!1===e,Ve=e=>{e=ne.isArray(e)?e:[e];const{length:t}=e;let n,r;const o={};for(let s=0;s<t;s++){let t;if(n=e[s],r=n,!$e(n)&&(r=Je[(t=String(n)).toLowerCase()],void 0===r))throw new ie(`Unknown adapter '${t}'`);if(r)break;o[t||"#"+s]=r}if(!r){const e=Object.entries(o).map((([e,t])=>`adapter ${e} `+(!1===t?"is not supported by the environment":"is not available in the build")));let n=t?e.length>1?"since :\n"+e.map(We).join("\n"):" "+We(e[0]):"as no adapter specified";throw new ie("There is no suitable adapter to dispatch the request "+n,"ERR_NOT_SUPPORT")}return r};function Ke(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new qe(null,e)}function Ge(e){return Ke(e),e.headers=De.from(e.headers),e.data=Ue.call(e,e.transformRequest),-1!==["post","put","patch"].indexOf(e.method)&&e.headers.setContentType("application/x-www-form-urlencoded",!1),Ve(e.adapter||Ne.adapter)(e).then((function(t){return Ke(e),t.data=Ue.call(e,e.transformResponse,t),t.headers=De.from(t.headers),t}),(function(t){return Be(t)||(Ke(e),t&&t.response&&(t.response.data=Ue.call(e,e.transformResponse,t.response),t.response.headers=De.from(t.response.headers))),Promise.reject(t)}))}const Xe=e=>e instanceof De?e.toJSON():e;function Qe(e,t){t=t||{};const n={};function r(e,t,n){return ne.isPlainObject(e)&&ne.isPlainObject(t)?ne.merge.call({caseless:n},e,t):ne.isPlainObject(t)?ne.merge({},t):ne.isArray(t)?t.slice():t}function o(e,t,n){return ne.isUndefined(t)?ne.isUndefined(e)?void 0:r(void 0,e,n):r(e,t,n)}function s(e,t){if(!ne.isUndefined(t))return r(void 0,t)}function i(e,t){return ne.isUndefined(t)?ne.isUndefined(e)?void 0:r(void 0,e):r(void 0,t)}function a(n,o,s){return s in t?r(n,o):s in e?r(void 0,n):void 0}const c={url:s,method:s,data:s,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,withXSRFToken:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:a,headers:(e,t)=>o(Xe(e),Xe(t),!0)};return ne.forEach(Object.keys(Object.assign({},e,t)),(function(r){const s=c[r]||o,i=s(e[r],t[r],r);ne.isUndefined(i)&&s!==a||(n[r]=i)})),n}const Ze={};["object","boolean","number","function","string","symbol"].forEach(((e,t)=>{Ze[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}}));const Ye={};Ze.transitional=function(e,t,n){function r(e,t){return"[Axios v1.6.7] Transitional option '"+e+"'"+t+(n?". "+n:"")}return(n,o,s)=>{if(!1===e)throw new ie(r(o," has been removed"+(t?" in "+t:"")),ie.ERR_DEPRECATED);return t&&!Ye[o]&&(Ye[o]=!0,console.warn(r(o," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(n,o,s)}};const et={assertOptions:function(e,t,n){if("object"!=typeof e)throw new ie("options must be an object",ie.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let o=r.length;for(;o-- >0;){const s=r[o],i=t[s];if(i){const t=e[s],n=void 0===t||i(t,s,e);if(!0!==n)throw new ie("option "+s+" must be "+n,ie.ERR_BAD_OPTION_VALUE)}else if(!0!==n)throw new ie("Unknown option "+s,ie.ERR_BAD_OPTION)}},validators:Ze},tt=et.validators;class nt{constructor(e){this.defaults=e,this.interceptors={request:new be,response:new be}}async request(e,t){try{return await this._request(e,t)}catch(e){if(e instanceof Error){let t;Error.captureStackTrace?Error.captureStackTrace(t={}):t=new Error;const n=t.stack?t.stack.replace(/^.+\n/,""):"";e.stack?n&&!String(e.stack).endsWith(n.replace(/^.+\n.+\n/,""))&&(e.stack+="\n"+n):e.stack=n}throw e}}_request(e,t){"string"==typeof e?(t=t||{}).url=e:t=e||{},t=Qe(this.defaults,t);const{transitional:n,paramsSerializer:r,headers:o}=t;void 0!==n&&et.assertOptions(n,{silentJSONParsing:tt.transitional(tt.boolean),forcedJSONParsing:tt.transitional(tt.boolean),clarifyTimeoutError:tt.transitional(tt.boolean)},!1),null!=r&&(ne.isFunction(r)?t.paramsSerializer={serialize:r}:et.assertOptions(r,{encode:tt.function,serialize:tt.function},!0)),t.method=(t.method||this.defaults.method||"get").toLowerCase();let s=o&&ne.merge(o.common,o[t.method]);o&&ne.forEach(["delete","get","head","post","put","patch","common"],(e=>{delete o[e]})),t.headers=De.concat(s,o);const i=[];let a=!0;this.interceptors.request.forEach((function(e){"function"==typeof e.runWhen&&!1===e.runWhen(t)||(a=a&&e.synchronous,i.unshift(e.fulfilled,e.rejected))}));const c=[];let l;this.interceptors.response.forEach((function(e){c.push(e.fulfilled,e.rejected)}));let u,f=0;if(!a){const e=[Ge.bind(this),void 0];for(e.unshift.apply(e,i),e.push.apply(e,c),u=e.length,l=Promise.resolve(t);f<u;)l=l.then(e[f++],e[f++]);return l}u=i.length;let d=t;for(f=0;f<u;){const e=i[f++],t=i[f++];try{d=e(d)}catch(e){t.call(this,e);break}}try{l=Ge.call(this,d)}catch(e){return Promise.reject(e)}for(f=0,u=c.length;f<u;)l=l.then(c[f++],c[f++]);return l}getUri(e){return ye(ze((e=Qe(this.defaults,e)).baseURL,e.url),e.params,e.paramsSerializer)}}ne.forEach(["delete","get","head","options"],(function(e){nt.prototype[e]=function(t,n){return this.request(Qe(n||{},{method:e,url:t,data:(n||{}).data}))}})),ne.forEach(["post","put","patch"],(function(e){function t(t){return function(n,r,o){return this.request(Qe(o||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:n,data:r}))}}nt.prototype[e]=t(),nt.prototype[e+"Form"]=t(!0)}));const rt=nt;class ot{constructor(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");let t;this.promise=new Promise((function(e){t=e}));const n=this;this.promise.then((e=>{if(!n._listeners)return;let t=n._listeners.length;for(;t-- >0;)n._listeners[t](e);n._listeners=null})),this.promise.then=e=>{let t;const r=new Promise((e=>{n.subscribe(e),t=e})).then(e);return r.cancel=function(){n.unsubscribe(t)},r},e((function(e,r,o){n.reason||(n.reason=new qe(e,r,o),t(n.reason))}))}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}static source(){let e;return{token:new ot((function(t){e=t})),cancel:e}}}const st=ot,it={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(it).forEach((([e,t])=>{it[t]=e}));const at=it,ct=function e(t){const n=new rt(t),r=S(rt.prototype.request,n);return ne.extend(r,rt.prototype,n,{allOwnKeys:!0}),ne.extend(r,n,null,{allOwnKeys:!0}),r.create=function(n){return e(Qe(t,n))},r}(Ne);ct.Axios=rt,ct.CanceledError=qe,ct.CancelToken=st,ct.isCancel=Be,ct.VERSION="1.6.7",ct.toFormData=fe,ct.AxiosError=ie,ct.Cancel=ct.CanceledError,ct.all=function(e){return Promise.all(e)},ct.spread=function(e){return function(t){return e.apply(null,t)}},ct.isAxiosError=function(e){return ne.isObject(e)&&!0===e.isAxiosError},ct.mergeConfig=Qe,ct.AxiosHeaders=De,ct.formToJSON=e=>Te(ne.isHTMLForm(e)?new FormData(e):e),ct.getAdapter=Ve,ct.HttpStatusCode=at,ct.default=ct;const lt=ct,ut=e=>{const[t,n]=(0,s.useState)(null),[r,i]=(0,s.useState)(!1),[l,f]=(0,s.useState)(!1);return React.createElement("div",{className:"search-pet"},React.createElement(o(),{onSubmit:async e=>{if(e.preventDefault(),n(null),f(!0),""!==e.target.zipcode.value&&""!==e.target.file.value){i(!0);const r=new FormData;r.append("zipcode",e.target.zipcode.value),r.append("file",e.target.file.files[0]);let o=await(t=e.target,lt.post("https://doodles234.azurewebsites.net/predictwithupload",t).then((e=>e.data)).catch((e=>{console.log(e)})));setTimeout((()=>{let e=[];try{o.result_imgs.forEach(((t,n)=>{e.push({img:t,name:"Adopt-a-pet",details:O.result_details[n]})}))}catch(t){O.result_imgs.forEach(((t,n)=>{e.push({img:t,name:"Adopt-a-pet",details:O.result_details[n]})}))}n(e),f(!1)}),5e3)}else f(!1);var t},novalidate:!0},React.createElement(a,{placeholder:"Please enter your zipcode",regex:"(^\\d{5}$)",onChange:()=>console.log("Cambió"),name:"zipcode",required:!0}),React.createElement(c,{name:"file",required:!0}),React.createElement(u(),{disabled:l},"Good Luck!")),t&&React.createElement(g,{results:t}),!t&&r&&React.createElement(E,{className:"search-pet--skeleton"},React.createElement(g,null)))}})(),module.exports=r})();