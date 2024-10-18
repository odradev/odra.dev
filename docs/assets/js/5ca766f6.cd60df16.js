"use strict";(self.webpackChunkodra_website=self.webpackChunkodra_website||[]).push([[73538],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(n),d=o,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},91669:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=n(87462),o=(n(67294),n(3905));const a={sidebar_position:6,description:"How to get information from the Host"},i="Host Communication",s={unversionedId:"basics/communicating-with-host",id:"version-0.6.0/basics/communicating-with-host",title:"Host Communication",description:"How to get information from the Host",source:"@site/versioned_docs/version-0.6.0/basics/06-communicating-with-host.md",sourceDirName:"basics",slug:"/basics/communicating-with-host",permalink:"/docs/0.6.0/basics/communicating-with-host",draft:!1,tags:[],version:"0.6.0",lastUpdatedAt:1699367878,formattedLastUpdatedAt:"Nov 7, 2023",sidebarPosition:6,frontMatter:{sidebar_position:6,description:"How to get information from the Host"},sidebar:"tutorialSidebar",previous:{title:"Storage interaction",permalink:"/docs/0.6.0/basics/storage-interaction"},next:{title:"Testing",permalink:"/docs/0.6.0/basics/testing"}},c={},l=[{value:"What&#39;s next",id:"whats-next",level:2}],p={toc:l};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"host-communication"},"Host Communication"),(0,o.kt)("p",null,"One of the things that your contract will probably do is to query the host for some information -\nwhat is the current time? Who called me? Following example shows how to do this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust",metastring:'title="examples/src/features/host_functions.rs"',title:'"examples/src/features/host_functions.rs"'},"use odra::Variable;\nuse odra::types::{BlockTime, Address};\n\n#[odra::module]\npub struct HostContract {\n    name: Variable<String>,\n    created_at: Variable<BlockTime>,\n    created_by: Variable<Address>,\n}\n\n#[odra::module]\nimpl HostContract {\n    #[odra(init)]\n    pub fn init(&mut self, name: String) {\n        self.name.set(name);\n        self.created_at.set(odra::contract_env::get_block_time());\n        self.created_by.set(odra::contract_env::caller())\n    }\n\n    pub fn name(&self) -> String {\n        self.name.get_or_default()\n    }\n}\n")),(0,o.kt)("p",null,"As you can see, we are calling functions from ",(0,o.kt)("inlineCode",{parentName:"p"},"odra::contract_env"),". ",(0,o.kt)("inlineCode",{parentName:"p"},"get_block_time()")," will return\nthe current block time wrapped in Odra type ",(0,o.kt)("inlineCode",{parentName:"p"},"BlockTime"),". ",(0,o.kt)("inlineCode",{parentName:"p"},"caller()")," will return an Odra ",(0,o.kt)("inlineCode",{parentName:"p"},"Address")," of\na caller (this can be an external caller or another contract)."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"You will learn more functions that Odra exposes from host and types it uses in further articles.")),(0,o.kt)("h2",{id:"whats-next"},"What's next"),(0,o.kt)("p",null,"In the next article, we'll dive into testing your contracts with Odra, so you can check that the code\nwe presented in fact works!"))}u.isMDXComponent=!0}}]);