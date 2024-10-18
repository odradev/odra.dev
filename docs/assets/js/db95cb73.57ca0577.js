"use strict";(self.webpackChunkodra_website=self.webpackChunkodra_website||[]).push([[16828],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=d(n),m=r,y=c["".concat(l,".").concat(m)]||c[m]||u[m]||i;return n?a.createElement(y,o(o({ref:t},p),{},{components:n})):a.createElement(y,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var d=2;d<i;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},9370:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var a=n(87462),r=(n(67294),n(3905));const i={},o="Storage Layout",s={unversionedId:"advanced/storage-layout",id:"version-1.0.0/advanced/storage-layout",title:"Storage Layout",description:"Odra's innovative modular design necessitates a unique storage layout. This",source:"@site/versioned_docs/version-1.0.0/advanced/04-storage-layout.md",sourceDirName:"advanced",slug:"/advanced/storage-layout",permalink:"/docs/1.0.0/advanced/storage-layout",draft:!1,tags:[],version:"1.0.0",lastUpdatedAt:1716473940,formattedLastUpdatedAt:"May 23, 2024",sidebarPosition:4,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Attributes",permalink:"/docs/1.0.0/advanced/attributes"},next:{title:"Memory allocators",permalink:"/docs/1.0.0/advanced/using-different-allocator"}},l={},d=[{value:"Casper VM Perspective",id:"casper-vm-perspective",level:2},{value:"Odra Perspective",id:"odra-perspective",level:2},{value:"Key generation.",id:"key-generation",level:2},{value:"Value serialization",id:"value-serialization",level:2}],p={toc:d};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"storage-layout"},"Storage Layout"),(0,r.kt)("p",null,"Odra's innovative modular design necessitates a unique storage layout. This\narticle explains step-by-step Odra's storage layout."),(0,r.kt)("h2",{id:"casper-vm-perspective"},"Casper VM Perspective"),(0,r.kt)("p",null,"The Casper Execution Engine (VM) enables the storage of data in named keys or\ndictionaries. However, a smart contract has a limited number of named keys,\nmaking it unsuitable for storing substantial data volumes. Odra resolves this\nissue by storing all user-generated data in a dictionary called ",(0,r.kt)("inlineCode",{parentName:"p"},"state"),". This\ndictionary operates as a key-value store, where keys are strings with a maximum\nlength of 64 characters, and values are arbitrary byte arrays."),(0,r.kt)("p",null,"Here is an example of what the interface for reading and writing data could look\nlike:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"pub trait CasperStorage {\n    fn read(key: &str) -> Option<Vec<u8>>;\n    fn write(key: &str, value: Vec<u8>);\n}\n")),(0,r.kt)("h2",{id:"odra-perspective"},"Odra Perspective"),(0,r.kt)("p",null,"Odra was conceived with modularity and code reusability in mind. Additionally,\nwe aimed to streamline storage definition through the struct object. Consider\nthis straightforward storage definition:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"#[odra::module]\npub struct Token {\n    name: Var<String>,\n    balances: Mapping<Address, U256>\n}\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Token")," structure contains two fields: ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," of type ",(0,r.kt)("inlineCode",{parentName:"p"},"String")," and\n",(0,r.kt)("inlineCode",{parentName:"p"},"balances"),", which functions as a key-value store with ",(0,r.kt)("inlineCode",{parentName:"p"},"Address")," as keys and\n",(0,r.kt)("inlineCode",{parentName:"p"},"U256")," as values."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Token")," module can be reused in another module, as demonstrated in a more\ncomplex example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"#[odra::module]\npub struct Loans {\n    lenders: SubModule<Token>,\n    borrowers: SubModule<Token>,\n}\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Loans")," module has two fields: ",(0,r.kt)("inlineCode",{parentName:"p"},"lenders")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"borrowers"),", both of which have\nthe same storage layout as defined by the ",(0,r.kt)("inlineCode",{parentName:"p"},"Token")," module. Odra guarantees that\n",(0,r.kt)("inlineCode",{parentName:"p"},"lenders")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"borrowers")," are stored under distinct keys within the storage\ndictionary."),(0,r.kt)("p",null,"Both ",(0,r.kt)("inlineCode",{parentName:"p"},"Token")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Loans")," serve as examples to show how Odra's storage layout\noperates."),(0,r.kt)("h2",{id:"key-generation"},"Key generation."),(0,r.kt)("p",null,"Every element of a module (",(0,r.kt)("inlineCode",{parentName:"p"},"struct"),") with N elements is associated with an index\nranging from 0 to N-1, represented as a u8 with a maximum of 256 elements. If an\nelement of a module is another module (",(0,r.kt)("inlineCode",{parentName:"p"},"SubModule<...>"),"), the associated index\nserves as a prefix for the indexes of the inner module."),(0,r.kt)("p",null,"While this may initially appear complex, it is easily understood through an\nexample. In the example, indexes are presented as bytes, reflecting the actual\nimplementation."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Loans {\n    lenders: Token {   // prefix: 0x0001\n        name: 1,       //    key: 0x0001_0001\n        balances: 2    //    key: 0x0001_0010\n    },\n    borrowers: Token { // prefix: 0x0010\n        name: 1,       //    key: 0x0010_0001\n        balances: 2    //    key: 0x0010_0010\n    }\n}\n")),(0,r.kt)("p",null,"Additionally, it's worth mentioning how ",(0,r.kt)("inlineCode",{parentName:"p"},"Mapping"),"'s keys are used in the\n",(0,r.kt)("inlineCode",{parentName:"p"},"storage"),". They are simply concatenated with the index of the module, as\ndemonstrated in the example."),(0,r.kt)("p",null,"For instance, triggering ",(0,r.kt)("inlineCode",{parentName:"p"},"borrowers.balances.get(0x1234abcd)")," would result in a\nkey:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"0x0001_0001_1234_abcd\n")),(0,r.kt)("p",null,"Finally, the key must be hashed to fit within the 64-character limit and then\nencoded in hexadecimal format."),(0,r.kt)("h2",{id:"value-serialization"},"Value serialization"),(0,r.kt)("p",null,"Before being stored in the storage, each value is serialized into bytes using\nthe ",(0,r.kt)("inlineCode",{parentName:"p"},"CLType")," serialization method and subsequently encapsulated with Casper's\n",(0,r.kt)("inlineCode",{parentName:"p"},"Bytes")," types."))}u.isMDXComponent=!0}}]);