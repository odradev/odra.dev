"use strict";(self.webpackChunkodra_website=self.webpackChunkodra_website||[]).push([[14353],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),f=a,m=d["".concat(i,".").concat(f)]||d[f]||u[f]||o;return n?r.createElement(m,l(l({ref:t},c),{},{components:n})):r.createElement(m,l({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},53902:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const o={sidebar_position:2},l="Flipper example",s={unversionedId:"getting-started/flipper",id:"version-1.2.0/getting-started/flipper",title:"Flipper example",description:"To quickly start working with Odra, take a look at the following code sample. If you followed the",source:"@site/versioned_docs/version-1.2.0/getting-started/flipper.md",sourceDirName:"getting-started",slug:"/getting-started/flipper",permalink:"/docs/1.2.0/getting-started/flipper",draft:!1,tags:[],version:"1.2.0",lastUpdatedAt:1722339748,formattedLastUpdatedAt:"Jul 30, 2024",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Installation",permalink:"/docs/1.2.0/getting-started/installation"},next:{title:"Basics",permalink:"/docs/1.2.0/category/basics"}},i={},p=[{value:"Let&#39;s flip",id:"lets-flip",level:2},{value:"Testing",id:"testing",level:2},{value:"What&#39;s next",id:"whats-next",level:2}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"flipper-example"},"Flipper example"),(0,a.kt)("p",null,"To quickly start working with Odra, take a look at the following code sample. If you followed the\n",(0,a.kt)("a",{parentName:"p",href:"/docs/1.2.0/getting-started/installation"},"Installation")," tutorial, you should have this file already at ",(0,a.kt)("inlineCode",{parentName:"p"},"src/flipper.rs"),"."),(0,a.kt)("p",null,"For further explanation of how this code works, see ",(0,a.kt)("a",{parentName:"p",href:"/docs/1.2.0/basics/flipper-internals"},"Flipper Internals"),"."),(0,a.kt)("h2",{id:"lets-flip"},"Let's flip"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust",metastring:'title="flipper.rs" showLineNumbers',title:'"flipper.rs"',showLineNumbers:!0},"use odra::Var;\n\n/// A module definition. Each module struct consists Vars and Mappings\n/// or/and another modules.\n#[odra::module]\npub struct Flipper {\n    /// The module itself does not store the value, \n    /// it's a proxy that writes/reads value to/from the host.\n    value: Var<bool>,\n}\n\n/// Module implementation.\n///\n/// To generate entrypoints,\n/// an implementation block must be marked as #[odra::module].\n#[odra::module]\nimpl Flipper {\n    /// Odra constructor, must be named `init`.\n    ///\n    /// Initializes the contract with the value of value.\n    pub fn init(&mut self) {\n        self.value.set(false);\n    }\n\n    /// Replaces the current value with the passed argument.\n    pub fn set(&mut self, value: bool) {\n        self.value.set(value);\n    }\n\n    /// Replaces the current value with the opposite value.\n    pub fn flip(&mut self) {\n        self.value.set(!self.get());\n    }\n\n    /// Retrieves value from the storage. \n    /// If the value has never been set, the default value is returned.\n    pub fn get(&self) -> bool {\n        self.value.get_or_default()\n    }\n}\n\n#[cfg(test)]\nmod tests {\n    use crate::flipper::FlipperHostRef;\n    use odra::host::{Deployer, NoArgs};\n\n    #[test]\n    fn flipping() {\n        let env = odra_test::env();\n        // To test a module we need to deploy it. Autogenerated `FlipperHostRef`\n        // implements `Deployer` trait, so we can use it to deploy the module.\n        let mut contract = FlipperHostRef::deploy(&env, NoArgs);\n        assert!(!contract.get());\n        contract.flip();\n        assert!(contract.get());\n    }\n\n    #[test]\n    fn test_two_flippers() {\n        let env = odra_test::env();\n        let mut contract1 = FlipperHostRef::deploy(&env, NoArgs);\n        let contract2 = FlipperHostRef::deploy(&env, NoArgs);\n        assert!(!contract1.get());\n        assert!(!contract2.get());\n        contract1.flip();\n        assert!(contract1.get());\n        assert!(!contract2.get());\n    }\n}\n")),(0,a.kt)("h2",{id:"testing"},"Testing"),(0,a.kt)("p",null,"To run the tests, execute the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cargo odra test # or add the `-b casper` flag to run tests on the CasperVM\n")),(0,a.kt)("h2",{id:"whats-next"},"What's next"),(0,a.kt)("p",null,"In the next category of articles, we will go through basic concepts of Odra."))}u.isMDXComponent=!0}}]);