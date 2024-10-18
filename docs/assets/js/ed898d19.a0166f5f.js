"use strict";(self.webpackChunkodra_website=self.webpackChunkodra_website||[]).push([[30659],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,v=p["".concat(s,".").concat(m)]||p[m]||c[m]||o;return n?a.createElement(v,l(l({ref:t},d),{},{components:n})):a.createElement(v,l({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},65822:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var a=n(87462),r=(n(67294),n(3905));const o={},l="Module reusing",i={unversionedId:"advanced/using",id:"version-0.6.0/advanced/using",title:"Module reusing",description:"This feature of the Odra Framework is designed to enhance the reusability and modularity of your smart contracts. It empowers developers to reuse modules and override custom namespaces. This guide provides an in-depth look at the module reusing feature, complete with practical code examples.",source:"@site/versioned_docs/version-0.6.0/advanced/01-using.md",sourceDirName:"advanced",slug:"/advanced/using",permalink:"/docs/0.6.0/advanced/using",draft:!1,tags:[],version:"0.6.0",lastUpdatedAt:1699367878,formattedLastUpdatedAt:"Nov 7, 2023",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Advanced",permalink:"/docs/0.6.0/category/advanced"},next:{title:"Delegate",permalink:"/docs/0.6.0/advanced/delegate"}},s={},u=[{value:"Conceptual Overview",id:"conceptual-overview",level:2},{value:"Usage",id:"usage",level:2}],d={toc:u};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"module-reusing"},"Module reusing"),(0,r.kt)("p",null,"This feature of the Odra Framework is designed to enhance the reusability and modularity of your smart contracts. It empowers developers to reuse modules and override custom namespaces. This guide provides an in-depth look at the module reusing feature, complete with practical code examples."),(0,r.kt)("h2",{id:"conceptual-overview"},"Conceptual Overview"),(0,r.kt)("p",null,"By default, each instance of a module has its own namespace, ensuring each internal value has a unique storage key."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'#[odra::module]\nstruct Contract {\n    value: Variable<u8>, // the default namespace would be "value"\n    module: Module\n}\n\n#[odra::module]\nstruct Module {\n    secret: Variable<String> // the default namespace would be "module_secret"\n}\n')),(0,r.kt)("p",null,"While this isolation often proves useful, there are scenarios where shared storage is beneficial."),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null," Odra generates an array of keys, prefixing the storage key of child modules with the parent namespace, like in the example above. But what if you want to reuse the same instance of a module? Add a ",(0,r.kt)("inlineCode",{parentName:"p"},"#[odra(using)]"),' attribute to a module to override the default behavior. This is information for the module "Do not prefix storage keys for the given module." so effectively, the child and the parent use the same module instance.'),(0,r.kt)("p",null,"Let's illustrate it with a simple example. The example provided below introduces some additional complexity by featuring deeper module nesting."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'use odra::Variable;\n\n#[odra::module]\npub struct SharedStorage {\n    pub value: Variable<String>\n}\n\n#[odra::module]\npub struct MyStorage {\n    pub shared: SharedStorage,\n    pub version: Variable<u8>\n}\n\n#[odra::module]\npub struct ComposableContract {\n    pub shared: SharedStorage,\n    #[odra(using = "shared")]\n    pub storage: MyStorage\n}\n\n#[odra::module]\nimpl ComposableContract {\n    #[odra(init)]\n    pub fn init(&mut self, version: u8, value: String) {\n        self.storage.version.set(version);\n        self.shared.value.set(value);\n    }\n\n    pub fn get_value(&self) -> String {\n        self.shared.value.get_or_default()\n    }\n\n    pub fn get_value_via_storage(&self) -> String {\n        self.storage.shared.value.get_or_default()\n    }\n}\n\n#[cfg(test)]\nmod test {\n    use crate::composer::ComplexContractDeployer;\n\n    #[test]\n    fn t() {\n        let shared_value = "shared_value".to_string();\n        let extra_value: u32 = 314;\n        let token = ComplexContractDeployer::init(1, shared_value.clone(), extra_value);\n\n        assert_eq!(token.get_value(), shared_value);\n        assert_eq!(token.get_value_via_storage(), shared_value);\n        assert_eq!(token.get_extra_value(), extra_value);\n    }\n}\n')),(0,r.kt)("p",null,"In this example, we've introduced a new module, ",(0,r.kt)("inlineCode",{parentName:"p"},"MoreStorage"),", which nests ",(0,r.kt)("inlineCode",{parentName:"p"},"MyStorage")," and includes an extra value. The ",(0,r.kt)("inlineCode",{parentName:"p"},"ComplexContract")," contains ",(0,r.kt)("inlineCode",{parentName:"p"},"SharedStorage")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"MoreStorage"),", creating a deeper nesting. Our test ensures that values can be successfully retrieved from different storage levels."),(0,r.kt)("p",null,"If we had used the default behavior, would have been created (so, they would no longer be shared), each having distinct namespaces:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"On the contract level - ",(0,r.kt)("inlineCode",{parentName:"li"},"contract_shared_value"),"."),(0,r.kt)("li",{parentName:"ol"},"On the ",(0,r.kt)("inlineCode",{parentName:"li"},"MyStorage")," module level - ",(0,r.kt)("inlineCode",{parentName:"li"},"contract_more_storage_shared_value"),".")),(0,r.kt)("p",null,"This example showcases how you can effectively use the module reusing feature to build intricate and efficient smart contracts."))}c.isMDXComponent=!0}}]);