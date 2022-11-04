"use strict";var T=Object.create;var c=Object.defineProperty;var k=Object.getOwnPropertyDescriptor;var q=Object.getOwnPropertyNames;var H=Object.getPrototypeOf,I=Object.prototype.hasOwnProperty;var N=(t,e)=>{for(var o in e)c(t,o,{get:e[o],enumerable:!0})},d=(t,e,o,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of q(e))!I.call(t,r)&&r!==o&&c(t,r,{get:()=>e[r],enumerable:!(n=k(e,r))||n.enumerable});return t};var b=(t,e,o)=>(o=t!=null?T(H(t)):{},d(e||!t||!t.__esModule?c(o,"default",{value:t,enumerable:!0}):o,t)),P=t=>d(c({},"__esModule",{value:!0}),t);var L={};N(L,{ReliableFetch:()=>g,default:()=>S,fetchChaos:()=>u,fetchHedge:()=>h,fetchRetry:()=>p,fetchTimeout:()=>m});module.exports=P(L);var R=b(require("crypto")),f=()=>R.default.randomInt(0,1e10)/1e10,C=(t,e)=>f()*(e-t)+t,w=(t,e)=>{let o=setTimeout(t,e);return{id:o,cancel:()=>clearTimeout(o)}},l=(t,e)=>{switch(e){case"naive":t+=C(0,t*.2);break;case"equal":t=t/2+C(0,t/2);break;case"full":t=C(0,t);break}return t};var y=require("timers/promises"),J=async(t,e)=>{let o={rate:1-(e?.rate??0),down:{status:e?.down?.status??500},slow:{delay:e?.slow?.delay??0,jitter:e?.slow?.jitter??"none"}},n=!!e?.down,r=!!e?.slow;if(o.rate<0||o.rate>1)throw new RangeError("rate: should be between 0 and 1");if(n&&f()>o.rate){let i=o.down.status;return e?.eventEmitter?.emit("chaos:down",i),new Response(null,{status:i})}if(r&&f()>o.rate){let i=l(o.slow.delay,o.slow.jitter);await(0,y.setTimeout)(i),e?.eventEmitter?.emit("chaos:slow",i)}return fetch(t,e)},u=J;var j=async(t,e)=>{let o={timeout:e?.timeout??1e4},n=new AbortController,{cancel:r}=w(()=>{n.abort(),e?.eventEmitter?.emit("timeout")},o.timeout);return fetch(t,{...e,signal:n.signal}).finally(r)},m=j;var D=async(t,e)=>{let o={timeout:e?.timeout??1e4},n;try{n=await m(t,{...e,...o})}catch(r){if(r instanceof Error&&r.name!=="AbortError")throw r;e?.eventEmitter?.emit("hedge"),n=await fetch(t,e)}return n},h=D;var x=require("timers/promises");var A=async(t,e)=>{let o={delay:e?.delay??100,maxDelay:e?.maxDelay??1e4,attempts:e?.attempts??1,maxAttempts:e?.maxAttempts??10,backoff:e?.backoff??"constant",jitter:e?.jitter??"none"},n=[],r=[],i=Math.min(o.attempts,o.maxAttempts);try{return await fetch(t,e)}catch(a){n.push(a)}for(let a=0;a<i;a++){let E=a+1,s=Math.min(o.delay,o.maxDelay);r.push(s),e?.eventEmitter?.emit("retry",a+1,s);try{return await fetch(t,e)}catch(v){n.push(v)}switch(await(0,x.setTimeout)(s),o.backoff){case"exponential":o.delay=Math.pow(2,E)*s;break;case"fibonacci":r.length>1&&(o.delay=r[r.length-2]+r[r.length-1]);break}o.delay=l(o.delay,o.jitter)}throw n.at(-1)},p=A;var F=b(require("events")),g=class{constructor(e,o={}){this.input=e;this.init=o;this.init.eventEmitter=new F.default}on(e,o){let{eventEmitter:n}=this.init;return n&&n.on(e,o),this}timeout(e){return m(this.input,{...this.init,...e})}hedge(e){return h(this.input,{...this.init,...e})}chaos(e){return u(this.input,{...this.init,...e})}retry(e){return p(this.input,{...this.init,...e})}},B=(t,e)=>new g(t,e),S=B;0&&(module.exports={ReliableFetch,fetchChaos,fetchHedge,fetchRetry,fetchTimeout});
//# sourceMappingURL=index.js.map
