"use strict";(self.webpackChunkodra_website=self.webpackChunkodra_website||[]).push([[84296],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>g});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),c=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},l=function(e){var n=c(e.components);return a.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=c(t),g=r,m=u["".concat(p,".").concat(g)]||u[g]||d[g]||i;return t?a.createElement(m,o(o({ref:n},l),{},{components:t})):a.createElement(m,o({ref:n},l))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=u;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},29490:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=t(87462),r=(t(67294),t(3905));const i={},o="Advanced Storage Concepts",s={unversionedId:"advanced/advanced-storage",id:"version-0.6.0/advanced/advanced-storage",title:"Advanced Storage Concepts",description:"The Odra Framework provides advanced storage interaction capabilities that extend beyond the basic storage interaction. This document will focus on the Mapping and Sequence modules, which are key components of the advanced storage interaction in Odra.",source:"@site/versioned_docs/version-0.6.0/advanced/03-advanced-storage.md",sourceDirName:"advanced",slug:"/advanced/advanced-storage",permalink:"/docs/0.6.0/advanced/advanced-storage",draft:!1,tags:[],version:"0.6.0",lastUpdatedAt:1699367878,formattedLastUpdatedAt:"Nov 7, 2023",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Delegate",permalink:"/docs/0.6.0/advanced/delegate"},next:{title:"Attributes",permalink:"/docs/0.6.0/advanced/attributes"}},p={},c=[{value:"Recap and Basic Concepts",id:"recap-and-basic-concepts",level:2},{value:"Advanced Storage Concepts",id:"advanced-storage-concepts-1",level:2},{value:"Sequence",id:"sequence",level:3},{value:"Advanced Mapping",id:"advanced-mapping",level:3},{value:"AdvancedStorage Contract",id:"advancedstorage-contract",level:2},{value:"Conclusion",id:"conclusion",level:2}],l={toc:c};function d(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"advanced-storage-concepts"},"Advanced Storage Concepts"),(0,r.kt)("p",null,"The Odra Framework provides advanced storage interaction capabilities that extend beyond the basic storage interaction. This document will focus on the ",(0,r.kt)("inlineCode",{parentName:"p"},"Mapping")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Sequence")," modules, which are key components of the advanced storage interaction in Odra."),(0,r.kt)("h2",{id:"recap-and-basic-concepts"},"Recap and Basic Concepts"),(0,r.kt)("p",null,"Before we delve into the advanced features, let's recap some basic storage concepts in Odra. In the realm of basic storage interaction, Odra provides several types for interacting with contract storage, including ",(0,r.kt)("inlineCode",{parentName:"p"},"Variable"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Mapping"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"List"),". These types enable contracts to store and retrieve data in a structured manner. The Variable type is used to store a single value, while the List and Mapping types store collections of values."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Variable"),": A Variable in Odra is a fundamental building block used for storing single values. Each Variable is uniquely identified by its name in the contract."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Mapping"),": Mapping in Odra serves as a key-value storage system. It stores an association of unique keys to values, and the value can be retrieved using the key."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"List"),": Built on top of the Variable and Mapping building blocks, List in Odra allows storing an ordered collection of values that can be iterated over."),(0,r.kt)("p",null,"If you need a refresher on these topics, please refer to our ",(0,r.kt)("a",{parentName:"p",href:"/docs/0.6.0/basics/storage-interaction"},"guide")," on basic storage in Odra."),(0,r.kt)("h2",{id:"advanced-storage-concepts-1"},"Advanced Storage Concepts"),(0,r.kt)("h3",{id:"sequence"},"Sequence"),(0,r.kt)("p",null,"The Sequence in Odra is a basic module that holds a ",(0,r.kt)("inlineCode",{parentName:"p"},"Variable")," which keeps track of the current value. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"pub struct Sequence<T>\nwhere\n    T: Num + One + OdraType\n{\n    value: Variable<T>\n}\n")),(0,r.kt)("p",null,"The Sequence module provides functions ",(0,r.kt)("inlineCode",{parentName:"p"},"get_current_value")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"next_value")," to get the current value and increment the value respectively."),(0,r.kt)("h3",{id:"advanced-mapping"},"Advanced Mapping"),(0,r.kt)("p",null,"In Odra, the Mapping is a key-value storage system where the key is associated with a value. However, the value of the Mapping can be another Mapping. This concept is referred to as nested mapping. Moreover, the value of the Mapping can be an Odra module, introducing a greater level of complexity and utility."),(0,r.kt)("p",null,"Let's consider the following example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust",metastring:'title="examples/src/features/storage/mapping.rs"',title:'"examples/src/features/storage/mapping.rs"'},"use odra::{map, types::U256, Mapping, UnwrapOrRevert};\n\nuse crate::owned_token::OwnedToken;\n\n#[odra::module]\npub struct NestedMapping {\n    strings: Mapping<String, Mapping<u32, Mapping<String, String>>>,\n    tokens: Mapping<String, Mapping<u32, Mapping<String, OwnedToken>>>\n}\n\n#[odra::module]\nimpl NestedMapping {\n\n    ...\n\n    pub fn set_token(\n        &mut self,\n        key1: String,\n        key2: u32,\n        key3: String,\n        token_name: String,\n        decimals: u8,\n        symbol: String,\n        initial_supply: &U256\n    ) {\n        self.tokens\n            .get_instance(&key1)\n            .get_instance(&key2)\n            .get_instance(&key3)\n            .init(token_name, symbol, decimals, initial_supply);\n    }\n\n    pub fn get_string_api(\n        &self, \n        key1: String, \n        key2: u32, \n        key3: String\n    ) -> String {\n        let mapping = self.strings.get_instance(&key1).get_instance(&key2);\n        mapping.get(&key3).unwrap_or_revert()\n    }\n\n    pub fn total_supply(\n        &self, \n        key1: String, \n        key2: u32, \n        key3: String\n    ) -> U256 {\n        self.tokens\n            .get_instance(&key1)\n            .get_instance(&key2)\n            .get_instance(&key3)\n            .total_supply()\n    }\n}\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Accessing Odra Modules and Mapping is a bit different from accessing regular values like strings or numbers. "),(0,r.kt)("p",{parentName:"admonition"},"Instead of using the ",(0,r.kt)("inlineCode",{parentName:"p"},"get()")," function, call ",(0,r.kt)("inlineCode",{parentName:"p"},"get_instance()"),", which sets the correct namespace for nested modules.")),(0,r.kt)("p",null,"If the terminal value is deeply nested, a long chain of ",(0,r.kt)("inlineCode",{parentName:"p"},"get_instance()")," calls is required."),(0,r.kt)("p",null,"To keep the codebase consistent, a ",(0,r.kt)("inlineCode",{parentName:"p"},"map!")," macro can be used:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust",metastring:'title="examples/src/features/storage/mapping.rs"',title:'"examples/src/features/storage/mapping.rs"'},"...\n\npub fn set_string(&mut self, key1: String, key2: u32, key3: String, value: String) {\n    map!(self.strings[key1][key2][key3] = value);\n}\n\npub fn get_string_macro(\n    &self, \n    key1: String, \n    key2: u32, \n    key3: String\n) -> String {\n    map!(self.strings[key1][key2][key3])\n}\n\n")),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"The terminal value must not be an Odra Module.")),(0,r.kt)("h2",{id:"advancedstorage-contract"},"AdvancedStorage Contract"),(0,r.kt)("p",null,"The given code snippet showcases the ",(0,r.kt)("inlineCode",{parentName:"p"},"AdvancedStorage")," contract that incorporates these storage concepts."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"use odra::{Sequence, Mapping};\nuse crate::modules::Token;\n\n#[odra::module]\npub struct AdvancedStorage {\n    my_sequence: Sequence<u32>,\n    my_mapping: Mapping<String, Mapping<String, Token>>,\n}\n\nimpl AdvancedStorage {\n    pub fn get_sequence_current_value(&self) -> u32 {\n        self.my_sequence.get_current_value()\n    }\n\n    pub fn next_sequence_value(&mut self) -> u32 {\n        self.my_sequence.next_value()\n    }\n\n    pub fn set_in_mapping(&mut self, outer_key: String, inner_key: String, value: Token) {\n        let inner_mapping = self.my_mapping.get_instance(&outer_key);\n        inner_mapping.set(&inner_key, value);\n    }\n\n    pub fn get_from_mapping(&self, outer_key: String, inner_key: String) -> Option<Token> {\n        let inner_mapping = self.my_mapping.get_instance(&outer_key);\n        inner_mapping.get(&inner_key)\n    }\n}\n")),(0,r.kt)("h2",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,"Advanced storage features in Odra offer robust options for managing contract state. Understanding these concepts can help developers design and implement more efficient and flexible smart contracts."))}d.isMDXComponent=!0}}]);