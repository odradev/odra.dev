"use strict";(self.webpackChunkodra_website=self.webpackChunkodra_website||[]).push([[34050],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=l(n),h=a,m=u["".concat(s,".").concat(h)]||u[h]||p[h]||o;return n?r.createElement(m,i(i({ref:t},d),{},{components:n})):r.createElement(m,i({ref:t},d))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},48265:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const o={sidebar_position:2},i="MockVM",c={unversionedId:"backends/mock-vm",id:"version-0.6.0/backends/mock-vm",title:"MockVM",description:"The MockVM is a simple implementation of a mock backend with a minimal set of features that allows testing",source:"@site/versioned_docs/version-0.6.0/backends/02-mock-vm.md",sourceDirName:"backends",slug:"/backends/mock-vm",permalink:"/docs/0.6.0/backends/mock-vm",draft:!1,tags:[],version:"0.6.0",lastUpdatedAt:1699367878,formattedLastUpdatedAt:"Nov 7, 2023",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"What is a backend?",permalink:"/docs/0.6.0/backends/what-is-a-backend"},next:{title:"Casper",permalink:"/docs/0.6.0/backends/casper"}},s={},l=[{value:"Usage",id:"usage",level:2},{value:"Architecture",id:"architecture",level:2},{value:"Execution",id:"execution",level:2}],d={toc:l};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"mockvm"},"MockVM"),(0,a.kt)("p",null,"The MockVM is a simple implementation of a mock backend with a minimal set of features that allows testing\nthe code written in Odra without compiling the contract to the target architecture and spinning up the\nblockchain."),(0,a.kt)("p",null,"Thanks to MockVM tests run a lot faster than other backends and debugging is a lot simpler."),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,"The MockVM is the default backend for Odra framework, so each time you run"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cargo odra test\n")),(0,a.kt)("p",null,"You are running your code against it."),(0,a.kt)("h2",{id:"architecture"},"Architecture"),(0,a.kt)("p",null,"MockVM consists of two main parts: the ",(0,a.kt)("inlineCode",{parentName:"p"},"Contract Register")," and the ",(0,a.kt)("inlineCode",{parentName:"p"},"State"),"."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"Contract Register")," is just a list of contracts deployed onto the MockVM, identified by an ",(0,a.kt)("inlineCode",{parentName:"p"},"Address"),".\nEach time we call the contract, we call its instance stored in the ",(0,a.kt)("inlineCode",{parentName:"p"},"Contract Register"),"."),(0,a.kt)("p",null,"Contracts and Test Env functions can modify the ",(0,a.kt)("inlineCode",{parentName:"p"},"State")," of the MockVM."),(0,a.kt)("p",null,'Contrary to the "real" backend, which holds the whole history of the blockchain,\nthe MockVM ',(0,a.kt)("inlineCode",{parentName:"p"},"State")," holds only the current state of the MockVM.\nThanks to this and the fact that we do not need the blockchain itself,\nMockVM starts instantly and runs the tests in the native speed."),(0,a.kt)("h2",{id:"execution"},"Execution"),(0,a.kt)("p",null,"When the MockVM backend is enabled, the ",(0,a.kt)("inlineCode",{parentName:"p"},"#[odra::module]")," macro is responsible for converting\nyour ",(0,a.kt)("inlineCode",{parentName:"p"},"pub")," functions into a list of Entrypoints, which are put into a Contract Container.\nWhen the contract is deployed, its Container registered into a Registry under an address.\nDuring the contract call, MockVM finds an Entrypoint and executes the code."),(0,a.kt)("mermaid",{value:"graph TD;\n    id1[[Odra code]]--\x3eid2[Contract Container];\n    id2[Contract Container]--\x3eid3((Contract Registry))\n    id3((Contract Registry))--\x3eid4[(MockVM Execution)]"}))}p.isMDXComponent=!0}}]);