"use strict";(self.webpackChunkodra_website=self.webpackChunkodra_website||[]).push([[52411],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=l(r),f=o,d=m["".concat(s,".").concat(f)]||m[f]||u[f]||a;return r?n.createElement(d,i(i({ref:t},p),{},{components:r})):n.createElement(d,i({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},60007:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var n=r(87462),o=(r(67294),r(3905));const a={slug:"evm-at-risc0",title:"EVM at Risc0",authors:["zie1ony"],image:"https://github.com/odradev.png"},i=void 0,c={permalink:"/blog/evm-at-risc0",source:"@site/blog/2023-02-13-evm-at-risc0.md",title:"EVM at Risc0",description:"Let's run Solidity code inside SputnikVM inside Risc0.",date:"2023-02-13T00:00:00.000Z",formattedDate:"February 13, 2023",tags:[],readingTime:3.97,hasTruncateMarker:!0,authors:[{name:"Maciej Zieli\u0144ski",title:"CTO",url:"https://github.com/zie1ony",key:"zie1ony"}],frontMatter:{slug:"evm-at-risc0",title:"EVM at Risc0",authors:["zie1ony"],image:"https://github.com/odradev.png"},prevItem:{title:"Odra + CosmWasm",permalink:"/blog/odra-cosmwasm"},nextItem:{title:"Zero Knowledge on Casper",permalink:"/blog/casper-zk-risc0"}},s={authorsImageUrls:[void 0]},l=[],p={toc:l};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Let's run Solidity code inside ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/rust-blockchain/evm/"},"SputnikVM")," inside ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/risc0/risc0"},"Risc0"),"."))}u.isMDXComponent=!0}}]);