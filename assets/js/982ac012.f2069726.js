"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[983],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>u});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var o=n.createContext({}),d=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},s=function(e){var t=d(e.components);return n.createElement(o.Provider,{value:t},e.children)},m="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,l=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=d(a),k=i,u=m["".concat(o,".").concat(k)]||m[k]||f[k]||l;return a?n.createElement(u,r(r({ref:t},s),{},{components:a})):n.createElement(u,r({ref:t},s))}));function u(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=a.length,r=new Array(l);r[0]=k;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[m]="string"==typeof e?e:i,r[1]=p;for(var d=2;d<l;d++)r[d]=a[d];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},5375:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var n=a(7462),i=(a(7294),a(3905));const l={},r="API",p={unversionedId:"api/README",id:"api/README",title:"API",description:"Classes",source:"@site/docs/api/README.md",sourceDirName:"api",slug:"/api/",permalink:"/reliable-fetch/docs/api/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Chaos",permalink:"/reliable-fetch/docs/examples/chaos"},next:{title:"Class: ReliableFetch",permalink:"/reliable-fetch/docs/api/classes/ReliableFetch"}},o={},d=[{value:"Classes",id:"classes",level:2},{value:"Interfaces",id:"interfaces",level:2},{value:"Type Aliases",id:"type-aliases",level:2},{value:"Backoff",id:"backoff",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"EventName",id:"eventname",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"Jitter",id:"jitter",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"ReliableFetchFunction",id:"reliablefetchfunction",level:3},{value:"Type declaration",id:"type-declaration",level:4},{value:"Parameters",id:"parameters",level:5},{value:"Returns",id:"returns",level:5},{value:"Defined in",id:"defined-in-3",level:4},{value:"ReliableRequestInfo",id:"reliablerequestinfo",level:3},{value:"Defined in",id:"defined-in-4",level:4},{value:"ReliableRequestInit",id:"reliablerequestinit",level:3},{value:"Defined in",id:"defined-in-5",level:4},{value:"Functions",id:"functions",level:2},{value:"default",id:"default",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-6",level:4},{value:"fetchChaos",id:"fetchchaos",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-7",level:4},{value:"fetchHedge",id:"fetchhedge",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-3",level:4},{value:"Defined in",id:"defined-in-8",level:4},{value:"fetchRetry",id:"fetchretry",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-4",level:4},{value:"Defined in",id:"defined-in-9",level:4},{value:"fetchTimeout",id:"fetchtimeout",level:3},{value:"Parameters",id:"parameters-5",level:4},{value:"Returns",id:"returns-5",level:4},{value:"Defined in",id:"defined-in-10",level:4}],s={toc:d};function m(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"api"},"API"),(0,i.kt)("h2",{id:"classes"},"Classes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/reliable-fetch/docs/api/classes/ReliableFetch"},"ReliableFetch"))),(0,i.kt)("h2",{id:"interfaces"},"Interfaces"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/reliable-fetch/docs/api/interfaces/BaseConfig"},"BaseConfig")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/reliable-fetch/docs/api/interfaces/ChaosConfig"},"ChaosConfig")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/reliable-fetch/docs/api/interfaces/ChaosDownConfig"},"ChaosDownConfig")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/reliable-fetch/docs/api/interfaces/ChaosSlowConfig"},"ChaosSlowConfig")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/reliable-fetch/docs/api/interfaces/EventListenerFunction"},"EventListenerFunction")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/reliable-fetch/docs/api/interfaces/HedgeConfig"},"HedgeConfig")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/reliable-fetch/docs/api/interfaces/RetryConfig"},"RetryConfig")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/reliable-fetch/docs/api/interfaces/TimeoutConfig"},"TimeoutConfig"))),(0,i.kt)("h2",{id:"type-aliases"},"Type Aliases"),(0,i.kt)("h3",{id:"backoff"},"Backoff"),(0,i.kt)("p",null,"\u01ac ",(0,i.kt)("strong",{parentName:"p"},"Backoff"),": ",(0,i.kt)("inlineCode",{parentName:"p"},'"constant"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"exponential"')),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/hachibu/reliable-fetch/blob/main/src/types/Backoff.ts#L1"},"types/Backoff.ts:1")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"eventname"},"EventName"),(0,i.kt)("p",null,"\u01ac ",(0,i.kt)("strong",{parentName:"p"},"EventName"),": ",(0,i.kt)("inlineCode",{parentName:"p"},'"timeout"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"retry"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"hedge"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"chaos:down"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"chaos:slow"')),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/hachibu/reliable-fetch/blob/main/src/types/EventName.ts#L1"},"types/EventName.ts:1")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"jitter"},"Jitter"),(0,i.kt)("p",null,"\u01ac ",(0,i.kt)("strong",{parentName:"p"},"Jitter"),": ",(0,i.kt)("inlineCode",{parentName:"p"},'"none"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"full"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"equal"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"decorrelated"')),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/hachibu/reliable-fetch/blob/main/src/types/Jitter.ts#L1"},"types/Jitter.ts:1")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"reliablefetchfunction"},"ReliableFetchFunction"),(0,i.kt)("p",null,"\u01ac ",(0,i.kt)("strong",{parentName:"p"},"ReliableFetchFunction"),": (",(0,i.kt)("inlineCode",{parentName:"p"},"input"),": ",(0,i.kt)("a",{parentName:"p",href:"/reliable-fetch/docs/api/#reliablerequestinfo"},(0,i.kt)("inlineCode",{parentName:"a"},"ReliableRequestInfo")),", ",(0,i.kt)("inlineCode",{parentName:"p"},"init?"),": ",(0,i.kt)("a",{parentName:"p",href:"/reliable-fetch/docs/api/#reliablerequestinit"},(0,i.kt)("inlineCode",{parentName:"a"},"ReliableRequestInit")),") => ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"Response"),">"),(0,i.kt)("h4",{id:"type-declaration"},"Type declaration"),(0,i.kt)("p",null,"\u25b8 (",(0,i.kt)("inlineCode",{parentName:"p"},"input"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"init?"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"Response"),">"),(0,i.kt)("h5",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"input")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/reliable-fetch/docs/api/#reliablerequestinfo"},(0,i.kt)("inlineCode",{parentName:"a"},"ReliableRequestInfo")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"init?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/reliable-fetch/docs/api/#reliablerequestinit"},(0,i.kt)("inlineCode",{parentName:"a"},"ReliableRequestInit")))))),(0,i.kt)("h5",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"Response"),">"),(0,i.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/hachibu/reliable-fetch/blob/main/src/types/ReliableFetchFunction.ts#L4"},"types/ReliableFetchFunction.ts:4")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"reliablerequestinfo"},"ReliableRequestInfo"),(0,i.kt)("p",null,"\u01ac ",(0,i.kt)("strong",{parentName:"p"},"ReliableRequestInfo"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"RequestInfo")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"URL")),(0,i.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/hachibu/reliable-fetch/blob/main/src/types/ReliableRequestInfo.ts#L1"},"types/ReliableRequestInfo.ts:1")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"reliablerequestinit"},"ReliableRequestInit"),(0,i.kt)("p",null,"\u01ac ",(0,i.kt)("strong",{parentName:"p"},"ReliableRequestInit"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"RequestInit")," & ",(0,i.kt)("inlineCode",{parentName:"p"},"Partial"),"<",(0,i.kt)("a",{parentName:"p",href:"/reliable-fetch/docs/api/interfaces/BaseConfig"},(0,i.kt)("inlineCode",{parentName:"a"},"BaseConfig")),">"," & ",(0,i.kt)("inlineCode",{parentName:"p"},"Partial"),"<",(0,i.kt)("a",{parentName:"p",href:"/reliable-fetch/docs/api/interfaces/ChaosConfig"},(0,i.kt)("inlineCode",{parentName:"a"},"ChaosConfig")),">"," & ",(0,i.kt)("inlineCode",{parentName:"p"},"Partial"),"<",(0,i.kt)("a",{parentName:"p",href:"/reliable-fetch/docs/api/interfaces/HedgeConfig"},(0,i.kt)("inlineCode",{parentName:"a"},"HedgeConfig")),">"," & ",(0,i.kt)("inlineCode",{parentName:"p"},"Partial"),"<",(0,i.kt)("a",{parentName:"p",href:"/reliable-fetch/docs/api/interfaces/RetryConfig"},(0,i.kt)("inlineCode",{parentName:"a"},"RetryConfig")),">"," & ",(0,i.kt)("inlineCode",{parentName:"p"},"Partial"),"<",(0,i.kt)("a",{parentName:"p",href:"/reliable-fetch/docs/api/interfaces/TimeoutConfig"},(0,i.kt)("inlineCode",{parentName:"a"},"TimeoutConfig")),">"),(0,i.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/hachibu/reliable-fetch/blob/main/src/types/ReliableRequestInit.ts#L9"},"types/ReliableRequestInit.ts:9")),(0,i.kt)("h2",{id:"functions"},"Functions"),(0,i.kt)("h3",{id:"default"},"default"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"default"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"url"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"init?"),"): ",(0,i.kt)("a",{parentName:"p",href:"/reliable-fetch/docs/api/classes/ReliableFetch"},(0,i.kt)("inlineCode",{parentName:"a"},"ReliableFetch"))),(0,i.kt)("h4",{id:"parameters-1"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"url")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/reliable-fetch/docs/api/#reliablerequestinfo"},(0,i.kt)("inlineCode",{parentName:"a"},"ReliableRequestInfo")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"init?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/reliable-fetch/docs/api/#reliablerequestinit"},(0,i.kt)("inlineCode",{parentName:"a"},"ReliableRequestInit")))))),(0,i.kt)("h4",{id:"returns-1"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/reliable-fetch/docs/api/classes/ReliableFetch"},(0,i.kt)("inlineCode",{parentName:"a"},"ReliableFetch"))),(0,i.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/hachibu/reliable-fetch/blob/main/src/index.ts#L95"},"index.ts:95")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"fetchchaos"},"fetchChaos"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"fetchChaos"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"input"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"init?"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"Response"),">"),(0,i.kt)("h4",{id:"parameters-2"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"input")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/reliable-fetch/docs/api/#reliablerequestinfo"},(0,i.kt)("inlineCode",{parentName:"a"},"ReliableRequestInfo")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"init?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/reliable-fetch/docs/api/#reliablerequestinit"},(0,i.kt)("inlineCode",{parentName:"a"},"ReliableRequestInit")))))),(0,i.kt)("h4",{id:"returns-2"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"Response"),">"),(0,i.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/hachibu/reliable-fetch/blob/main/src/types/ReliableFetchFunction.ts#L4"},"types/ReliableFetchFunction.ts:4")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"fetchhedge"},"fetchHedge"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"fetchHedge"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"input"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"init?"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"Response"),">"),(0,i.kt)("h4",{id:"parameters-3"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"input")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/reliable-fetch/docs/api/#reliablerequestinfo"},(0,i.kt)("inlineCode",{parentName:"a"},"ReliableRequestInfo")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"init?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/reliable-fetch/docs/api/#reliablerequestinit"},(0,i.kt)("inlineCode",{parentName:"a"},"ReliableRequestInit")))))),(0,i.kt)("h4",{id:"returns-3"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"Response"),">"),(0,i.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/hachibu/reliable-fetch/blob/main/src/types/ReliableFetchFunction.ts#L4"},"types/ReliableFetchFunction.ts:4")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"fetchretry"},"fetchRetry"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"fetchRetry"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"input"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"init?"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"Response"),">"),(0,i.kt)("h4",{id:"parameters-4"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"input")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/reliable-fetch/docs/api/#reliablerequestinfo"},(0,i.kt)("inlineCode",{parentName:"a"},"ReliableRequestInfo")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"init?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/reliable-fetch/docs/api/#reliablerequestinit"},(0,i.kt)("inlineCode",{parentName:"a"},"ReliableRequestInit")))))),(0,i.kt)("h4",{id:"returns-4"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"Response"),">"),(0,i.kt)("h4",{id:"defined-in-9"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/hachibu/reliable-fetch/blob/main/src/types/ReliableFetchFunction.ts#L4"},"types/ReliableFetchFunction.ts:4")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"fetchtimeout"},"fetchTimeout"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"fetchTimeout"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"input"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"init?"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"Response"),">"),(0,i.kt)("h4",{id:"parameters-5"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"input")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/reliable-fetch/docs/api/#reliablerequestinfo"},(0,i.kt)("inlineCode",{parentName:"a"},"ReliableRequestInfo")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"init?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/reliable-fetch/docs/api/#reliablerequestinit"},(0,i.kt)("inlineCode",{parentName:"a"},"ReliableRequestInit")))))),(0,i.kt)("h4",{id:"returns-5"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"Response"),">"),(0,i.kt)("h4",{id:"defined-in-10"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/hachibu/reliable-fetch/blob/main/src/types/ReliableFetchFunction.ts#L4"},"types/ReliableFetchFunction.ts:4")))}m.isMDXComponent=!0}}]);