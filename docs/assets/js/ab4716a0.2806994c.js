"use strict";(self.webpackChunkodra_website=self.webpackChunkodra_website||[]).push([[12933],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(h,o(o({ref:t},c),{},{components:n})):r.createElement(h,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},71550:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const i={sidebar_position:4,description:"Detailed explanation of the Flipper contract"},o="Flipper Internals",l={unversionedId:"basics/flipper-internals",id:"version-0.5.0/basics/flipper-internals",title:"Flipper Internals",description:"Detailed explanation of the Flipper contract",source:"@site/versioned_docs/version-0.5.0/basics/04-flipper-internals.md",sourceDirName:"basics",slug:"/basics/flipper-internals",permalink:"/docs/0.5.0/basics/flipper-internals",draft:!1,tags:[],version:"0.5.0",lastUpdatedAt:1691663853,formattedLastUpdatedAt:"Aug 10, 2023",sidebarPosition:4,frontMatter:{sidebar_position:4,description:"Detailed explanation of the Flipper contract"},sidebar:"tutorialSidebar",previous:{title:"Odra.toml",permalink:"/docs/0.5.0/basics/odra-toml"},next:{title:"Storage interaction",permalink:"/docs/0.5.0/basics/storage-interaction"}},s={},p=[{value:"Header",id:"header",level:2},{value:"Struct",id:"struct",level:2},{value:"Impl",id:"impl",level:2},{value:"Tests",id:"tests",level:2},{value:"What&#39;s next",id:"whats-next",level:2}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"flipper-internals"},"Flipper Internals"),(0,a.kt)("p",null,"In this article, we take a deep dive into the code shown in the\n",(0,a.kt)("a",{parentName:"p",href:"/docs/0.5.0/getting-started/flipper"},"Flipper example"),", where we will explain in more detail all\nthe Odra-specific sections of the code."),(0,a.kt)("h2",{id:"header"},"Header"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust",metastring:'title="flipper.rs"',title:'"flipper.rs"'},"use odra::Variable;\n")),(0,a.kt)("p",null,"Pretty straightforward. Odra wraps the code of the specific blockchains SDKs into its own implementation\nthat can be reused between targets. In the above case, we're importing ",(0,a.kt)("inlineCode",{parentName:"p"},"Variable"),", which is responsible\nfor storing simple values on the blockchain's storage."),(0,a.kt)("h2",{id:"struct"},"Struct"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust",metastring:'title="flipper.rs"',title:'"flipper.rs"'},"/// A module definition. Each module struct consists of Variables and Mappings\n/// or/and other modules.\n#[odra::module]\npub struct Flipper {\n    /// The module itself does not store the value,\n    /// it's a proxy that writes/reads value to/from the host.\n    value: Variable<bool>,\n}\n")),(0,a.kt)("p",null,"In Odra, all contracts are also modules, which can be reused between contracts. That's why we need\nto mark the struct with the ",(0,a.kt)("inlineCode",{parentName:"p"},"#[odra::module]")," macro. In the struct definition itself, we state all\nthe fields of the contract. Those fields can be regular Rust data types, however - those will not\nbe persisted on the blockchain. They can also be Odra modules - defined in your project or coming\nfrom Odra itself. Finally, to make the data persistent on the blockchain, you can use something like\n",(0,a.kt)("inlineCode",{parentName:"p"},"Variable<T>")," showed above. To learn more about storage interaction, take a look at the\n",(0,a.kt)("a",{parentName:"p",href:"/docs/0.5.0/basics/storage-interaction"},"next article"),"."),(0,a.kt)("h2",{id:"impl"},"Impl"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust",metastring:'title="flipper.rs"',title:'"flipper.rs"'},"/// Module implementation.\n///\n/// To generate entrypoints,\n/// an implementation block must be marked as #[odra::module].\n#[odra::module]\nimpl Flipper {\n    /// Odra constructor.\n    ///\n    /// Initializes the contract with the value of value.\n    #[odra(init)]\n    pub fn initial_settings(&mut self) {\n        self.value.set(false);\n    }\n    ...\n")),(0,a.kt)("p",null,"Similarly to the struct, we mark the ",(0,a.kt)("inlineCode",{parentName:"p"},"impl")," section with the ",(0,a.kt)("inlineCode",{parentName:"p"},"#[odra::module]")," macro. Odra will take all\n",(0,a.kt)("inlineCode",{parentName:"p"},"pub")," functions from this section and create contract endpoints from them. So, if you wish to have\nfunctions that are not available for calling outside the contract, do not make them public. Alternatively,\nyou can create a separate ",(0,a.kt)("inlineCode",{parentName:"p"},"impl")," section without the macro - all functions defined there, even marked\nwith ",(0,a.kt)("inlineCode",{parentName:"p"},"pub")," will be not callable."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"#[odra(init)]")," macro marks the constructor of the contract. This function will be limited to only\nto a single call, all further calls to it will result in an error."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust",metastring:'title="flipper.rs"',title:'"flipper.rs"'},"    ...\n    /// Replaces the current value with the passed argument.\n    pub fn set(&mut self, value: bool) {\n        self.value.set(value);\n    }\n\n    /// Replaces the current value with the opposite value.\n    pub fn flip(&mut self) {\n        self.value.set(!self.get());\n    }\n    ...\n")),(0,a.kt)("p",null,"The endpoints above show you how to interact with the simplest type of storage - ",(0,a.kt)("inlineCode",{parentName:"p"},"Variable<T>"),". The data\nsaved there using ",(0,a.kt)("inlineCode",{parentName:"p"},"set")," function will be persisted in the blockchain."),(0,a.kt)("h2",{id:"tests"},"Tests"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust",metastring:'title="flipper.rs"',title:'"flipper.rs"'},"#[cfg(test)]\nmod tests {\n    use crate::flipper::FlipperDeployer;\n\n    #[test]\n    fn flipping() {\n        // To test a module we need to deploy it using autogenerated Deployer. \n        let mut contract = FlipperDeployer::initial_settings();\n        assert!(!contract.get());\n        contract.flip();\n        assert!(contract.get());\n    }\n    ...\n")),(0,a.kt)("p",null,"You can write tests in any way you prefer and know in Rust. In the example above we are deploying the\ncontract using ",(0,a.kt)("inlineCode",{parentName:"p"},"FlipperDeployer")," - a piece of code generated automatically thanks to the macros.\nThe contract will be deployed on the VM you chose while running ",(0,a.kt)("inlineCode",{parentName:"p"},"cargo odra test"),"."),(0,a.kt)("h2",{id:"whats-next"},"What's next"),(0,a.kt)("p",null,"Now let's take a look at the different types of storage that Odra provides and how to use them."))}u.isMDXComponent=!0}}]);