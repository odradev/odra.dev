"use strict";(self.webpackChunkodra_website=self.webpackChunkodra_website||[]).push([[95866],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(r),m=o,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||a;return r?n.createElement(f,s(s({ref:t},c),{},{components:r})):n.createElement(f,s({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var u=2;u<a;u++)s[u]=r[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},83948:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var n=r(87462),o=(r(67294),r(3905));const a={sidebar_position:11,description:"Divide your code into modules"},s="Modules",i={unversionedId:"basics/modules",id:"version-0.7.0/basics/modules",title:"Modules",description:"Divide your code into modules",source:"@site/versioned_docs/version-0.7.0/basics/11-modules.md",sourceDirName:"basics",slug:"/basics/modules",permalink:"/docs/0.7.0/basics/modules",draft:!1,tags:[],version:"0.7.0",lastUpdatedAt:1699367878,formattedLastUpdatedAt:"Nov 7, 2023",sidebarPosition:11,frontMatter:{sidebar_position:11,description:"Divide your code into modules"},sidebar:"tutorialSidebar",previous:{title:"Cross calls",permalink:"/docs/0.7.0/basics/cross-calls"},next:{title:"Native token",permalink:"/docs/0.7.0/basics/native-token"}},l={},u=[{value:"Testing",id:"testing",level:2},{value:"What&#39;s next",id:"whats-next",level:2}],c={toc:u};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"modules"},"Modules"),(0,o.kt)("p",null,"Simply put, modules in Odra let you reuse your code between contracts or even projects. Every contract you\nwrite is also a module, thanks to a macro ",(0,o.kt)("inlineCode",{parentName:"p"},"#[odra::module]"),'. This means that we can easily rewrite our math\nexample from the previous article, to use a single contract, but still separate our "math" code:'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust",metastring:'title="examples/src/features/modules.rs"',title:'"examples/src/features/modules.rs"'},"use crate::features::cross_calls::MathEngine;\n\n#[odra::module]\npub struct ModulesContract {\n    pub math_engine: MathEngine,\n}\n\n#[odra::module]\nimpl ModulesContract {\n    pub fn add_using_module(&self) -> u32 {\n        self.math_engine.add(3, 5)\n    }\n}\n")),(0,o.kt)("p",null,"Note that we didn't need to rewrite the MathEngine - we are using the contract from cross calls example as\na module!"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"To see how modules can be used in a real-world scenario, check out the ERC20 example in the main odra repository!")),(0,o.kt)("h2",{id:"testing"},"Testing"),(0,o.kt)("p",null,"As we don't need to hold addresses, the test is really simple:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust",metastring:'title="examples/src/features/modules.rs"',title:'"examples/src/features/modules.rs"'},"use super::ModulesContractDeployer;\n\n#[test]\nfn test_modules() {\n    let modules_contract = ModulesContractDeployer::default();\n    assert_eq!(modules_contract.add_using_module(), 8);\n}\n")),(0,o.kt)("h2",{id:"whats-next"},"What's next"),(0,o.kt)("p",null,"We will see how to handle native token transfers."))}d.isMDXComponent=!0}}]);