"use strict";(self.webpackChunkodra_website=self.webpackChunkodra_website||[]).push([[17746],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>c});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=p(a),c=r,f=m["".concat(l,".").concat(c)]||m[c]||d[c]||s;return a?n.createElement(f,i(i({ref:t},u),{},{components:a})):n.createElement(f,i({ref:t},u))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,i=new Array(s);i[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<s;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},38830:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const s={sidebar_position:5,description:"How to write data into blockchain's storage"},i="Storage interaction",o={unversionedId:"basics/storage-interaction",id:"version-1.3.0/basics/storage-interaction",title:"Storage interaction",description:"How to write data into blockchain's storage",source:"@site/versioned_docs/version-1.3.0/basics/05-storage-interaction.md",sourceDirName:"basics",slug:"/basics/storage-interaction",permalink:"/docs/1.3.0/basics/storage-interaction",draft:!1,tags:[],version:"1.3.0",lastUpdatedAt:1727085590,formattedLastUpdatedAt:"Sep 23, 2024",sidebarPosition:5,frontMatter:{sidebar_position:5,description:"How to write data into blockchain's storage"},sidebar:"tutorialSidebar",previous:{title:"Flipper Internals",permalink:"/docs/1.3.0/basics/flipper-internals"},next:{title:"Host Communication",permalink:"/docs/1.3.0/basics/communicating-with-host"}},l={},p=[{value:"Var",id:"var",level:2},{value:"Mapping",id:"mapping",level:2},{value:"List",id:"list",level:2},{value:"Custom Types",id:"custom-types",level:2},{value:"What&#39;s next",id:"whats-next",level:2}],u={toc:p};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"storage-interaction"},"Storage interaction"),(0,r.kt)("p",null,"The Odra framework implements multiple types of data that can be stored on the blockchain. Let's go\nthrough all of them and explain their pros and cons."),(0,r.kt)("h2",{id:"var"},"Var"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Var")," is the simplest storage type available in the Odra framework. It serializes the data and stores it under a single key in the blockchain storage. To use it, just wrap your\nvariable in the ",(0,r.kt)("inlineCode",{parentName:"p"},"Var"),' type. Let\'s look at a "real world" example of a contract that represents a dog:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust",metastring:'title="examples/src/features/storage/variable.rs"',title:'"examples/src/features/storage/variable.rs"'},"use odra::prelude::*;\nuse odra::Var;\n\n#[odra::module]\npub struct DogContract {\n    barks: Var<bool>,\n    weight: Var<u32>,\n    name: Var<String>,\n    walks: Var<Vec<u32>>,\n}\n")),(0,r.kt)("p",null,"You can see the ",(0,r.kt)("inlineCode",{parentName:"p"},"Var")," wrapping the data. Even complex types like ",(0,r.kt)("inlineCode",{parentName:"p"},"Vec")," can be wrapped (with some caveats)!"),(0,r.kt)("p",null,"Let's make this contract usable, by providing a constructor and some getter functions:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust",metastring:'title="examples/src/features/storage/variable.rs"',title:'"examples/src/features/storage/variable.rs"'},"#[odra::module]\nimpl DogContract {\n    pub fn init(&mut self, barks: bool, weight: u32, name: String) {\n        self.barks.set(barks);\n        self.weight.set(weight);\n        self.name.set(name);\n        self.walks.set(Vec::<u32>::default());\n    }\n\n    pub fn barks(&self) -> bool {\n        self.barks.get_or_default()\n    }\n\n    pub fn weight(&self) -> u32 {\n        self.weight.get_or_default()\n    }\n\n    pub fn name(&self) -> String {\n        self.name.get_or_default()\n    }\n\n    pub fn walks_amount(&self) -> u32 {\n        let walks = self.walks.get_or_default();\n        walks.len() as u32\n    }\n\n    pub fn walks_total_length(&self) -> u32 {\n        let walks = self.walks.get_or_default();\n        walks.iter().sum()\n    }\n}\n")),(0,r.kt)("p",null,"As you can see, you can access the data, by using ",(0,r.kt)("inlineCode",{parentName:"p"},"get_or_default")," function:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust",metastring:'title="examples/src/features/storage/variable.rs"',title:'"examples/src/features/storage/variable.rs"'},"...\nself.barks.get_or_default()\n...\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Keep in mind that using ",(0,r.kt)("inlineCode",{parentName:"p"},"get()")," will result in an Option that you'll need to unwrap - the variable\ndoesn't have to be initialized!")),(0,r.kt)("p",null,"To modify the data, use the ",(0,r.kt)("inlineCode",{parentName:"p"},"set()")," function:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust",metastring:'title="examples/src/features/storage/variable.rs"',title:'"examples/src/features/storage/variable.rs"'},"self.barks.set(barks);\n")),(0,r.kt)("p",null,"A ",(0,r.kt)("inlineCode",{parentName:"p"},"Var")," is easy to use and efficient for simple data types. One of its downsides is that it\nserializes the data as a whole, so when you're using complex types like ",(0,r.kt)("inlineCode",{parentName:"p"},"Vec")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"HashMap"),",\neach time you ",(0,r.kt)("inlineCode",{parentName:"p"},"get")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"set")," the whole data is read and written to the blockchain storage."),(0,r.kt)("p",null,"In the example above, if we want to see how many walks our dog had, we would use the function:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust",metastring:'title="examples/src/features/storage/variable.rs"',title:'"examples/src/features/storage/variable.rs"'},"pub fn walks_amount(&self) -> usize {\n    let walks = self.walks.get_or_default();\n    walks.len()\n}\n")),(0,r.kt)("p",null,"But to do so, we need to extract the whole serialized vector from the storage, which would inefficient,\nespecially for larger sets of data."),(0,r.kt)("p",null,"To tackle this issue following two types were created."),(0,r.kt)("h2",{id:"mapping"},"Mapping"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Mapping")," is used to store and access data as key-value pairs. To define a ",(0,r.kt)("inlineCode",{parentName:"p"},"Mapping"),", you need to\npass two values - the key type and the value type. Let's look at the variation of the Dog contract, that\nuses ",(0,r.kt)("inlineCode",{parentName:"p"},"Mapping")," to store information about our dog's friends and how many times they visited:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust",metastring:'title="examples/src/features/storage/mapping.rs"',title:'"examples/src/features/storage/mapping.rs"'},"use odra::prelude::*;\nuse odra::{Mapping, Var};\n\n#[odra::module]\npub struct DogContract2 {\n    name: Var<String>,\n    friends: Mapping<String, u32>,\n}\n")),(0,r.kt)("p",null,"In the example above, our key is a String (it is a name of the friend) and we are storing u32 values\n(amount of visits). To read and write values from and into a ",(0,r.kt)("inlineCode",{parentName:"p"},"Mapping")," we use a similar approach\nto the one shown in the Vars section with one difference - we need to pass a key:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust",metastring:'title="examples/src/features/storage/mapping.rs"',title:'"examples/src/features/storage/mapping.rs"'},"pub fn visit(&mut self, friend_name: String) {\n    let visits = self.visits(friend_name.clone());\n    self.friends.set(&friend_name, visits + 1);\n}\n\npub fn visits(&self, friend_name: String) -> u32 {\n    self.friends.get_or_default(&friend_name)\n}\n")),(0,r.kt)("p",null,"The biggest improvement over a ",(0,r.kt)("inlineCode",{parentName:"p"},"Var")," is that we can model functionality of a ",(0,r.kt)("inlineCode",{parentName:"p"},"HashMap")," using ",(0,r.kt)("inlineCode",{parentName:"p"},"Mapping"),".\nThe amount of data written to and read from the storage is minimal. However, we cannot iterate over ",(0,r.kt)("inlineCode",{parentName:"p"},"Mapping"),".\nWe could implement such behavior by using a numeric type key and saving the length of the set in a\nseparate variable. Thankfully Odra comes with a prepared solution - the ",(0,r.kt)("inlineCode",{parentName:"p"},"List")," type."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"If you take a look into List implementation in Odra, you'll see that in fact it is just a Mapping with\na Var working together:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-rust",metastring:'title="core/src/list.rs"',title:'"core/src/list.rs"'},"use odra::{List, Var};\n\npub struct List<T> {\n    values: Mapping<u32, T>,\n    index: Var<u32>\n}\n"))),(0,r.kt)("h2",{id:"list"},"List"),(0,r.kt)("p",null,"Going back to our DogContract example - let's revisit the walk case. This time, instead of ",(0,r.kt)("inlineCode",{parentName:"p"},"Vec"),",\nwe'll use the list:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust",metastring:'title="examples/src/features/storage/list.rs"',title:'"examples/src/features/storage/list.rs"'},"use odra::{prelude::*, List, Var};\n\n#[odra::module]\npub struct DogContract3 {\n    name: Var<String>,\n    walks: List<u32>,\n}\n")),(0,r.kt)("p",null,"As you can see, the notation is very similar to the ",(0,r.kt)("inlineCode",{parentName:"p"},"Vec"),". To understand the usage, take a look\nat the reimplementation of the functions with an additional function that takes our dog for a walk\n(it writes the data to the storage):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust",metastring:'title="examples/src/features/storage/list.rs"',title:'"examples/src/features/storage/list.rs"'},"#[odra::module]\nimpl DogContract3 {\n    pub fn init(&mut self, name: String) {\n        self.name.set(name);\n    }\n\n    pub fn name(&self) -> String {\n        self.name.get_or_default()\n    }\n\n    pub fn walks_amount(&self) -> u32 {\n        self.walks.len()\n    }\n\n    pub fn walks_total_length(&self) -> u32 {\n        self.walks.iter().sum()\n    }\n\n    pub fn walk_the_dog(&mut self, length: u32) {\n        self.walks.push(length);\n    }\n}\n")),(0,r.kt)("p",null,"Now, we can know how many walks our dog had without loading the whole vector from the storage.\nWe need to do this to sum the length of all the walks, but the Odra framework cannot (yet) handle all\nthe cases for you."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"All of the above examples, alongside the tests, are available in the Odra repository in the ",(0,r.kt)("inlineCode",{parentName:"p"},"examples/src/features/")," folder.")),(0,r.kt)("h2",{id:"custom-types"},"Custom Types"),(0,r.kt)("p",null,"By default you can store only built-in types like numbers, Options, Results, Strings, Vectors."),(0,r.kt)("p",null,"Implementing custom types is straightforward, your type must add ",(0,r.kt)("inlineCode",{parentName:"p"},"#[odra::odra_type]")," attribute. Let's see how to implement a ",(0,r.kt)("inlineCode",{parentName:"p"},"Dog")," type: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"use odra::Address;\n\n#[odra::odra_type]\npub struct Dog {\n    pub name: String,\n    pub age: u8,\n    pub owner: Option<Address>\n}\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"#[odra_type]")," is applicable to named field structs and enums. It generates serialization, deserialization and schema code for your type.\n",(0,r.kt)("inlineCode",{parentName:"p"},"CLType")," of a custom type is ",(0,r.kt)("inlineCode",{parentName:"p"},"CLType::Any"),", except for an unit-only enum, which is ",(0,r.kt)("inlineCode",{parentName:"p"},"CLType::U8"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust",metastring:'title="unit_only_enum.rs"',title:'"unit_only_enum.rs"'},"enum Enum {\n    Foo = 3,\n    Bar = 2,\n    Baz = 1,\n}\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Each custom typed field of your struct must be marked with the ",(0,r.kt)("inlineCode",{parentName:"p"},"#[odra::odra_type]")," attribute .")),(0,r.kt)("h2",{id:"whats-next"},"What's next"),(0,r.kt)("p",null,"In the next article, we'll see how to query the host for information about the world and our contract."))}d.isMDXComponent=!0}}]);