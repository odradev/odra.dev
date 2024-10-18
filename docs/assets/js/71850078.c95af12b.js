"use strict";(self.webpackChunkodra_website=self.webpackChunkodra_website||[]).push([[61653],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),l=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=l(e.components);return a.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(t),m=r,g=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return t?a.createElement(g,i(i({ref:n},p),{},{components:t})):a.createElement(g,i({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=u;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=t[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},27292:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=t(87462),r=(t(67294),t(3905));const o={},i="Advanced Storage Concepts",s={unversionedId:"advanced/advanced-storage",id:"version-1.3.0/advanced/advanced-storage",title:"Advanced Storage Concepts",description:"The Odra Framework provides advanced storage interaction capabilities that extend beyond the basic storage interaction. This document will focus on the Mapping and Sequence modules, which are key components of the advanced storage interaction in Odra.",source:"@site/versioned_docs/version-1.3.0/advanced/02-advanced-storage.md",sourceDirName:"advanced",slug:"/advanced/advanced-storage",permalink:"/docs/1.3.0/advanced/advanced-storage",draft:!1,tags:[],version:"1.3.0",lastUpdatedAt:1727085590,formattedLastUpdatedAt:"Sep 23, 2024",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Delegate",permalink:"/docs/1.3.0/advanced/delegate"},next:{title:"Attributes",permalink:"/docs/1.3.0/advanced/attributes"}},c={},l=[{value:"Recap and Basic Concepts",id:"recap-and-basic-concepts",level:2},{value:"Advanced Storage Concepts",id:"advanced-storage-concepts-1",level:2},{value:"Sequence",id:"sequence",level:3},{value:"Advanced Mapping",id:"advanced-mapping",level:3},{value:"AdvancedStorage Contract",id:"advancedstorage-contract",level:2},{value:"Conclusion",id:"conclusion",level:2}],p={toc:l};function d(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"advanced-storage-concepts"},"Advanced Storage Concepts"),(0,r.kt)("p",null,"The Odra Framework provides advanced storage interaction capabilities that extend beyond the basic storage interaction. This document will focus on the ",(0,r.kt)("inlineCode",{parentName:"p"},"Mapping")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Sequence")," modules, which are key components of the advanced storage interaction in Odra."),(0,r.kt)("h2",{id:"recap-and-basic-concepts"},"Recap and Basic Concepts"),(0,r.kt)("p",null,"Before we delve into the advanced features, let's recap some basic storage concepts in Odra. In the realm of basic storage interaction, Odra provides several types for interacting with contract storage, including ",(0,r.kt)("inlineCode",{parentName:"p"},"Var"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Mapping"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"List"),". These types enable contracts to store and retrieve data in a structured manner. The Var type is used to store a single value, while the List and Mapping types store collections of values."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Var"),": A Var in Odra is a fundamental building block used for storing single values. Each Var is uniquely identified by its name in the contract."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Mapping"),": Mapping in Odra serves as a key-value storage system. It stores an association of unique keys to values, and the value can be retrieved using the key."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"List"),": Built on top of the Var and Mapping building blocks, List in Odra allows storing an ordered collection of values that can be iterated over."),(0,r.kt)("p",null,"If you need a refresher on these topics, please refer to our ",(0,r.kt)("a",{parentName:"p",href:"/docs/1.3.0/basics/storage-interaction"},"guide")," on basic storage in Odra."),(0,r.kt)("h2",{id:"advanced-storage-concepts-1"},"Advanced Storage Concepts"),(0,r.kt)("h3",{id:"sequence"},"Sequence"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Sequence")," in Odra is a basic module that stores a single value in the storage that can be read or incremented. Internally, holds a ",(0,r.kt)("inlineCode",{parentName:"p"},"Var")," which keeps track of the current value. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"pub struct Sequence<T>\nwhere\n    T: Num + One + ToBytes + FromBytes + CLTyped\n{\n    value: Var<T>\n}\n")),(0,r.kt)("p",null,"The Sequence module provides functions ",(0,r.kt)("inlineCode",{parentName:"p"},"get_current_value")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"next_value")," to get the current value and increment the value respectively."),(0,r.kt)("h3",{id:"advanced-mapping"},"Advanced Mapping"),(0,r.kt)("p",null,"In Odra, a ",(0,r.kt)("inlineCode",{parentName:"p"},"Mapping")," is a key-value storage system where the key is associated with a value.\nIn previous examples, the value of the ",(0,r.kt)("inlineCode",{parentName:"p"},"Mapping")," typically comprised a standard serializable type (such as number, string, or bool) or a custom type marked with the ",(0,r.kt)("inlineCode",{parentName:"p"},"#[odra::odra_type]")," attribute."),(0,r.kt)("p",null,"However, there are more advanced scenarios where the value of the Mapping represents a module itself. This approach is beneficial when managing a collection of modules, each maintaining its unique state."),(0,r.kt)("p",null,"Let's consider the following example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust",metastring:'title="examples/src/features/storage/mapping.rs"',title:'"examples/src/features/storage/mapping.rs"'},"use odra::{casper_types::U256, Mapping, UnwrapOrRevert};\nuse odra::prelude::*;\nuse crate::owned_token::OwnedToken;\n\n#[odra::module]\npub struct Mappings {\n    strings: Mapping<(String, u32, String), String>,\n    tokens: Mapping<String, OwnedToken>\n}\n\n#[odra::module]\nimpl Mappings {\n\n    ...\n\n    pub fn total_supply(&mut self, token_name: String) -> U256 {\n        self.tokens.module(&token_name).total_supply()\n    }\n\n    pub fn get_string_api(\n        &self, \n        key1: String, \n        key2: u32, \n        key3: String\n    ) -> String {\n        let opt_string = self.strings.get(&(key1, key2, key3));\n        opt_string.unwrap_or_revert(&self.env())\n    }\n}\n")),(0,r.kt)("p",null,"As you can see, a ",(0,r.kt)("inlineCode",{parentName:"p"},"Mapping")," key can consist of a tuple of values, not limited to a single value."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Accessing Odra modules differs from accessing regular values such as strings or numbers."),(0,r.kt)("p",{parentName:"admonition"},"Firstly, within a ",(0,r.kt)("inlineCode",{parentName:"p"},"Mapping"),", you don't encapsulate the module with ",(0,r.kt)("inlineCode",{parentName:"p"},"Submodule"),"."),(0,r.kt)("p",{parentName:"admonition"},"Secondly, rather than utilizing the ",(0,r.kt)("inlineCode",{parentName:"p"},"Mapping::get()")," function, call ",(0,r.kt)("inlineCode",{parentName:"p"},"Mapping::module()"),", which returns ",(0,r.kt)("inlineCode",{parentName:"p"},"SubModule<T>")," and sets the appropriate namespace for nested modules.")),(0,r.kt)("h2",{id:"advancedstorage-contract"},"AdvancedStorage Contract"),(0,r.kt)("p",null,"The given code snippet showcases the ",(0,r.kt)("inlineCode",{parentName:"p"},"AdvancedStorage")," contract that incorporates these storage concepts."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"use odra::{Address, casper_types::U512, Sequence, Mapping};\nuse odra::prelude::*;\nuse crate::modules::Token;\n\n#[odra::module]\npub struct AdvancedStorage {\n    counter: Sequence<u32>,\n    tokens: Mapping<(String, String), Token>,\n}\n\nimpl AdvancedStorage {\n    pub fn current_value(&self) -> u32 {\n        self.counter.get_current_value()\n    }\n\n    pub fn increment_and_get(&mut self) -> u32 {\n        self.counter.next_value()\n    }\n\n    pub fn balance_of(&mut self, token_name: String, creator: String, address: Address) -> U512 {\n        let token = self.tokens.module(&(token_name, creator));\n        token.balance_of(&address)\n    }\n\n    pub fn mint(&self, token_name: String, creator: String, amount: U512, to: Address) {\n        let mut token = self.tokens.module(&(token_name, creator));\n        token.mint(amount, to);\n    }\n}\n")),(0,r.kt)("h2",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,"Advanced storage features in Odra offer robust options for managing contract state. Two key takeaways from this document are:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Odra offers a Sequence module, enabling contracts to store and increment a single value."),(0,r.kt)("li",{parentName:"ol"},"Mappings support composite keys expressed as tuples and can store modules as values.")),(0,r.kt)("p",null,"Understanding these concepts can help developers design and implement more efficient and flexible smart contracts."))}d.isMDXComponent=!0}}]);