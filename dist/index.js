"use strict";var v=Object.create;var s=Object.defineProperty;var T=Object.getOwnPropertyDescriptor;var k=Object.getOwnPropertyNames;var q=Object.getPrototypeOf,H=Object.prototype.hasOwnProperty;var I=(e,t)=>{for(var o in t)s(e,o,{get:t[o],enumerable:!0})},C=(e,t,o,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of k(t))!H.call(e,n)&&n!==o&&s(e,n,{get:()=>t[n],enumerable:!(r=T(t,n))||r.enumerable});return e};var b=(e,t,o)=>(o=e!=null?v(q(e)):{},C(t||!e||!e.__esModule?s(o,"default",{value:e,enumerable:!0}):o,e)),B=e=>C(s({},"__esModule",{value:!0}),e);var A={};I(A,{ReliableFetch:()=>p,default:()=>D,fetchChaos:()=>l,fetchHedge:()=>u,fetchRetry:()=>h,fetchTimeout:()=>m});module.exports=B(A);var R=b(require("crypto")),f=()=>R.default.randomInt(0,1e10)/1e10,g=(e,t)=>f()*(t-e)+e,w=(e,t)=>{let o=setTimeout(e,t);return{id:o,cancel:()=>clearTimeout(o)}},d=(e,t,o)=>{switch(o){case"constant":e=e;break;case"exponential":e=Math.pow(2,t)*e;break}return e},c=(e,t)=>{switch(t){case"naive":e+=g(0,e*.2);break;case"equal":e=e/2+g(0,e/2);break;case"full":e=g(0,e);break}return e};var x=require("timers/promises"),P=async(e,t)=>{let o={rate:1-(t?.rate??0),down:{status:t?.down?.status??500},slow:{delay:t?.slow?.delay??0,jitter:t?.slow?.jitter??"none"}},r=!!t?.down,n=!!t?.slow;if(o.rate<0||o.rate>1)throw new RangeError("rate: should be between 0 and 1");if(r&&f()>o.rate){let i=o.down.status;return t?.eventEmitter?.emit("chaos:down",i),new Response(null,{status:i})}if(n&&f()>o.rate){let i=c(o.slow.delay,o.slow.jitter);await(0,x.setTimeout)(i),t?.eventEmitter?.emit("chaos:slow",i)}return fetch(e,t)},l=P;var J=async(e,t)=>{let o={timeout:t?.timeout??1e4},r=new AbortController,{cancel:n}=w(()=>{r.abort(),t?.eventEmitter?.emit("timeout")},o.timeout);return fetch(e,{...t,signal:r.signal}).finally(n)},m=J;var N=async(e,t)=>{let o={timeout:t?.timeout??1e4},r;try{r=await m(e,{...t,...o})}catch(n){if(n instanceof Error&&n.name!=="AbortError")throw n;t?.eventEmitter?.emit("hedge"),r=await fetch(e,t)}return r},u=N;var y=require("timers/promises");var W=async(e,t)=>{let o={delay:t?.delay??100,maxDelay:t?.maxDelay??1e4,attempts:t?.attempts??1,maxAttempts:t?.maxAttempts??10,backoff:t?.backoff??"constant",jitter:t?.jitter??"none"},r;try{return await fetch(e,t)}catch(i){r=i}let n=Math.min(o.attempts,o.maxAttempts);for(let i=1;i<=n;i++){let a=o.delay;a=d(a,i,o.backoff),a=c(a,o.jitter),a=Math.min(a,o.maxDelay),o.delay=a,await(0,y.setTimeout)(a),t?.eventEmitter?.emit("retry",i,a);try{return await fetch(e,t)}catch(E){r=E}}throw r},h=W;var F=b(require("events")),p=class{constructor(t,o={}){this.input=t;this.init=o;this.init.eventEmitter=new F.default}on(t,o){let{eventEmitter:r}=this.init;return r&&r.on(t,o),this}timeout(t){return m(this.input,{...this.init,...t})}hedge(t){return u(this.input,{...this.init,...t})}chaos(t){return l(this.input,{...this.init,...t})}retry(t){return h(this.input,{...this.init,...t})}},j=(e,t)=>new p(e,t),D=j;0&&(module.exports={ReliableFetch,fetchChaos,fetchHedge,fetchRetry,fetchTimeout});
//# sourceMappingURL=index.js.map
