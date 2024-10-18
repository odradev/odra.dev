"use strict";(self.webpackChunkodra_website=self.webpackChunkodra_website||[]).push([[46145],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=o,f=p["".concat(i,".").concat(m)]||p[m]||d[m]||s;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,a=new Array(s);a[0]=p;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<s;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},99314:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const s={sidebar_position:11,description:"Divide your code into modules"},a="Modules",l={unversionedId:"basics/modules",id:"version-0.2.0/basics/modules",title:"Modules",description:"Divide your code into modules",source:"@site/versioned_docs/version-0.2.0/basics/11-modules.md",sourceDirName:"basics",slug:"/basics/modules",permalink:"/docs/0.2.0/basics/modules",draft:!1,tags:[],version:"0.2.0",lastUpdatedAt:1687764750,formattedLastUpdatedAt:"Jun 26, 2023",sidebarPosition:11,frontMatter:{sidebar_position:11,description:"Divide your code into modules"},sidebar:"defaultSidebar",previous:{title:"Cross calls",permalink:"/docs/0.2.0/basics/cross-calls"},next:{title:"Native token",permalink:"/docs/0.2.0/basics/native-token"}},i={},c=[{value:"Testing",id:"testing",level:2},{value:"What&#39;s next",id:"whats-next",level:2}],u={toc:c};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"modules"},"Modules"),(0,o.kt)("p",null,"Simply put, modules in Odra let you reuse your code between contracts or even projects. Every contract you\nwrite is also a module, thanks to a macro ",(0,o.kt)("inlineCode",{parentName:"p"},"#[odra::module]"),'. This means that we can easily rewrite our math\nexample from the previous article, to use a single contract, but still separate our "math" code:'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust",metastring:'title="examples/src/docs/modules.rs"',title:'"examples/src/docs/modules.rs"'},"use crate::docs::cross_calls::MathEngine;\n\n#[odra::module]\npub struct ModulesContract {\n    pub math_engine: MathEngine,\n}\n\n#[odra::module]\nimpl ModulesContract {\n    pub fn add_using_module(&self) -> u32 {\n        self.math_engine.add(3, 5)\n    }\n}\n")),(0,o.kt)("p",null,"Note that we didn't need to rewrite the MathEngine - we are using the contract from cross calls example as\na module!"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"To see how modules can be used in a real-world scenario, check out the ERC20 example in the main odra repository!")),(0,o.kt)("h2",{id:"testing"},"Testing"),(0,o.kt)("p",null,"As we don't need to hold addresses, the test is really simple:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust",metastring:'title="examples/src/docs/modules.rs"',title:'"examples/src/docs/modules.rs"'},"use super::ModulesContractDeployer;\n\n#[test]\nfn test_modules() {\n    let modules_contract = ModulesContractDeployer::default();\n    assert_eq!(modules_contract.add_using_module(), 8);\n}\n")),(0,o.kt)("h2",{id:"whats-next"},"What's next"),(0,o.kt)("p",null,"We will see how to handle native token transfers."))}d.isMDXComponent=!0}}]);