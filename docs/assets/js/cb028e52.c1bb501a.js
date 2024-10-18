"use strict";(self.webpackChunkodra_website=self.webpackChunkodra_website||[]).push([[3899],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=d(n),h=a,m=u["".concat(s,".").concat(h)]||u[h]||p[h]||o;return n?r.createElement(m,i(i({ref:t},l),{},{components:n})):r.createElement(m,i({ref:t},l))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var d=2;d<o;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},77386:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var r=n(87462),a=(n(67294),n(3905));const o={sidebar_position:2},i="OdraVM",c={unversionedId:"backends/odra-vm",id:"version-1.2.0/backends/odra-vm",title:"OdraVM",description:"The OdraVM is a simple implementation of a mock backend with a minimal set of features that allows testing",source:"@site/versioned_docs/version-1.2.0/backends/02-odra-vm.md",sourceDirName:"backends",slug:"/backends/odra-vm",permalink:"/docs/1.2.0/backends/odra-vm",draft:!1,tags:[],version:"1.2.0",lastUpdatedAt:1722339748,formattedLastUpdatedAt:"Jul 30, 2024",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"What is a backend?",permalink:"/docs/1.2.0/backends/what-is-a-backend"},next:{title:"Casper",permalink:"/docs/1.2.0/backends/casper"}},s={},d=[{value:"Usage",id:"usage",level:2},{value:"Architecture",id:"architecture",level:2},{value:"Execution",id:"execution",level:2}],l={toc:d};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"odravm"},"OdraVM"),(0,a.kt)("p",null,"The OdraVM is a simple implementation of a mock backend with a minimal set of features that allows testing\nthe code written in Odra without compiling the contract to the target architecture and spinning up the\nblockchain."),(0,a.kt)("p",null,"Thanks to OdraVM tests run a lot faster than other backends. You can even debug the code in real time -\nsimply use your IDE's debug functionality."),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,"The OdraVM is the default backend for Odra framework, so each time you run"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cargo odra test\n")),(0,a.kt)("p",null,"You are running your code against it."),(0,a.kt)("h2",{id:"architecture"},"Architecture"),(0,a.kt)("p",null,"OdraVM consists of two main parts: the ",(0,a.kt)("inlineCode",{parentName:"p"},"Contract Register")," and the ",(0,a.kt)("inlineCode",{parentName:"p"},"State"),"."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"Contract Register")," is a list of contracts deployed onto the OdraVM, identified by an ",(0,a.kt)("inlineCode",{parentName:"p"},"Address"),"."),(0,a.kt)("p",null,"Contracts and Test Env functions can modify the ",(0,a.kt)("inlineCode",{parentName:"p"},"State")," of the OdraVM."),(0,a.kt)("p",null,'Contrary to the "real" backend, which holds the whole history of the blockchain,\nthe OdraVM ',(0,a.kt)("inlineCode",{parentName:"p"},"State")," holds only the current state of the OdraVM.\nThanks to this and the fact that we do not need the blockchain itself,\nOdraVM starts instantly and runs the tests in the native speed."),(0,a.kt)("h2",{id:"execution"},"Execution"),(0,a.kt)("p",null,"When the OdraVM backend is enabled, the ",(0,a.kt)("inlineCode",{parentName:"p"},"#[odra::module]")," attribute is responsible for converting\nyour ",(0,a.kt)("inlineCode",{parentName:"p"},"pub")," functions into a list of Entrypoints, which are put into a ",(0,a.kt)("inlineCode",{parentName:"p"},"Contract Container"),".\nWhen the contract is deployed, its Container registered into a Registry under an address.\nDuring the contract call, OdraVM finds an Entrypoint and executes the code."),(0,a.kt)("mermaid",{value:"graph TD;\n    id1[[Odra code]]--\x3eid2[Contract Container];\n    id2[Contract Container]--\x3eid3((Contract Registry))\n    id3((Contract Registry))--\x3eid4[(OdraVM Execution)]"}))}p.isMDXComponent=!0}}]);