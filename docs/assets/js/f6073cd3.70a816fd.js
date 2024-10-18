"use strict";(self.webpackChunkodra_website=self.webpackChunkodra_website||[]).push([[84888],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>u});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),l=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=l(e.components);return a.createElement(c.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(t),u=r,h=p["".concat(c,".").concat(u)]||p[u]||m[u]||i;return t?a.createElement(h,o(o({ref:n},d),{},{components:t})):a.createElement(h,o({ref:n},d))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=p;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=t[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},40035:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var a=t(87462),r=(t(67294),t(3905));const i={sidebar_position:10,description:"Casper Contract Schema"},o="Casper Contract Schema",s={unversionedId:"basics/casper-contract-schema",id:"version-1.3.0/basics/casper-contract-schema",title:"Casper Contract Schema",description:"Casper Contract Schema",source:"@site/versioned_docs/version-1.3.0/basics/13-casper-contract-schema.md",sourceDirName:"basics",slug:"/basics/casper-contract-schema",permalink:"/docs/1.3.0/basics/casper-contract-schema",draft:!1,tags:[],version:"1.3.0",lastUpdatedAt:1727085590,formattedLastUpdatedAt:"Sep 23, 2024",sidebarPosition:10,frontMatter:{sidebar_position:10,description:"Casper Contract Schema"},sidebar:"tutorialSidebar",previous:{title:"Events",permalink:"/docs/1.3.0/basics/events"},next:{title:"Cross calls",permalink:"/docs/1.3.0/basics/cross-calls"}},c={},l=[{value:"Odra and CCS",id:"odra-and-ccs",level:2},{value:"Generating the Schema",id:"generating-the-schema",level:2},{value:"Schema Output",id:"schema-output",level:2},{value:"Schema Fields",id:"schema-fields",level:2}],d={toc:l};function m(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"casper-contract-schema"},"Casper Contract Schema"),(0,r.kt)("p",null," Working in collaboration with the Casper Association we designed the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/odradev/casper-contract-schema"},"Casper Contract Schema")," (CCS). This a standardize description of smart contracts. This is a crucial step enhancing tool development and increasing ecosystem interoperability."),(0,r.kt)("h2",{id:"odra-and-ccs"},"Odra and CCS"),(0,r.kt)("p",null,"There is almost nothing you need to do to use CCS in your Odra project. The only thing to be taken care of is using odra attributes namely: ",(0,r.kt)("inlineCode",{parentName:"p"},"module"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"event"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"odra_error")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"odra_type"),". The schema will be generated for you and available in the ",(0,r.kt)("inlineCode",{parentName:"p"},"resources")," directory."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"If you forget to register events and errors in the module attribute, the definition remains valid; however, the errors and events will not be incorporated into the schema.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust",metastring:'showLineNumbers title="src/contract.rs"',showLineNumbers:!0,title:'"src/contract.rs"'},'use odra::prelude::*;\nuse odra::{Address, Var};\n\n#[odra::module(\n    // the name of the contract, default is the module name\n    name = "MyContract",\n    // the version of the contract, default is the version of the crate\n    version = "0.1.0",   \n     // events that the contract can emit, collected recursively if submodules are used\n    events = [          \n        Created,\n        Updated\n    ],\n    // the error enum the contract can revert with, collected recursively if submodules are used\n    errors = MyErrors   \n)]\npub struct MyContract {\n    name: Var<String>,\n    owner: Var<Address>,\n}\n\n#[odra::module]\nimpl MyContract {\n    /// Initializes the contract, sets the name and owner and emits an event\n    pub fn init(&mut self, name: String, owner: Address) {\n        self.name.set(name.clone());\n        self.owner.set(owner.clone());\n        self.env().emit_event(Created { name });\n    }\n\n    /// Updates the name of the contract and emits an event\n    pub fn update(&mut self, name: String) {\n        self.name.set(name.clone());\n        self.env().emit_event(Updated { name });\n    }\n\n    /// Returns the data of the contract\n    pub fn get_data(&self) -> Data {\n        Data {\n            name: self.name.get_or_default(),\n            owner: self.owner.get_or_revert_with(MyErrors::InvalidOwner),\n        }\n    }\n}\n\n// The struct will we visible in the schema in the types section\n#[odra::odra_type]\npub struct Data {\n    name: String,\n    owner: Address,\n}\n\n// The enum variants will we visible in the schema in the errors section\n#[odra::odra_error]\npub enum MyErrors {\n    /// The owner is invalid\n    InvalidOwner,\n    /// The name is invalid\n    InvalidName,\n}\n\n// The struct will we visible in the schema in the types and events section\n#[odra::event]\npub struct Updated {\n    name: String,\n}\n\n// The struct will we visible in the schema in the types section and events section\n#[odra::event]\npub struct Created {\n    name: String,\n}\n')),(0,r.kt)("h2",{id:"generating-the-schema"},"Generating the Schema"),(0,r.kt)("p",null,"To generate the schema run the following ",(0,r.kt)("inlineCode",{parentName:"p"},"cargo-odra")," command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cargo odra schema # or pass -c flag to generate the schema for a specific contract\n")),(0,r.kt)("h2",{id:"schema-output"},"Schema Output"),(0,r.kt)("p",null,"The generated schema will be available in the ",(0,r.kt)("inlineCode",{parentName:"p"},"resources")," directory. The schema is a JSON file that contains all the information about the contract. Here is an example of the generated schema:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'showLineNumbers title="resources/my_contract_schema.json"',showLineNumbers:!0,title:'"resources/my_contract_schema.json"'},'{\n  "casper_contract_schema_version": 1,\n  "toolchain": "rustc 1.77.0-nightly (5bd5d214e 2024-01-25)",\n  "authors": [],\n  "repository": null,\n  "homepage": null,\n  "contract_name": "MyContract",\n  "contract_version": "0.1.0",\n  "types": [\n    {\n      "struct": {\n        "name": "Created",\n        "description": null,\n        "members": [\n          {\n            "name": "name",\n            "description": null,\n            "ty": "String"\n          }\n        ]\n      }\n    },\n    {\n      "struct": {\n        "name": "Data",\n        "description": null,\n        "members": [\n          {\n            "name": "name",\n            "description": null,\n            "ty": "String"\n          },\n          {\n            "name": "owner",\n            "description": null,\n            "ty": "Key"\n          }\n        ]\n      }\n    },\n    {\n      "struct": {\n        "name": "Updated",\n        "description": null,\n        "members": [\n          {\n            "name": "name",\n            "description": null,\n            "ty": "String"\n          }\n        ]\n      }\n    }\n  ],\n  "errors": [\n    {\n      "name": "InvalidName",\n      "description": "The name is invalid",\n      "discriminant": 1\n    },\n    {\n      "name": "InvalidOwner",\n      "description": "The owner is invalid",\n      "discriminant": 0\n    }\n  ],\n  "entry_points": [\n    {\n      "name": "update",\n      "description": "Updates the name of the contract and emits an event",\n      "is_mutable": true,\n      "arguments": [\n        {\n          "name": "name",\n          "description": null,\n          "ty": "String",\n          "optional": false\n        }\n      ],\n      "return_ty": "Unit",\n      "is_contract_context": true,\n      "access": "public"\n    },\n    {\n      "name": "get_data",\n      "description": "Returns the data of the contract",\n      "is_mutable": false,\n      "arguments": [],\n      "return_ty": "Data",\n      "is_contract_context": true,\n      "access": "public"\n    }\n  ],\n  "events": [\n    {\n      "name": "Created",\n      "ty": "Created"\n    },\n    {\n      "name": "Updated",\n      "ty": "Updated"\n    }\n  ],\n  "call": {\n    "wasm_file_name": "MyContract.wasm",\n    "description": "Initializes the contract, sets the name and owner and emits an event",\n    "arguments": [\n      {\n        "name": "odra_cfg_package_hash_key_name",\n        "description": "The arg name for the package hash key name.",\n        "ty": "String",\n        "optional": false\n      },\n      {\n        "name": "odra_cfg_allow_key_override",\n        "description": "The arg name for the allow key override.",\n        "ty": "Bool",\n        "optional": false\n      },\n      {\n        "name": "odra_cfg_is_upgradable",\n        "description": "The arg name for the contract upgradeability setting.",\n        "ty": "Bool",\n        "optional": false\n      },\n      {\n        "name": "name",\n        "description": null,\n        "ty": "String",\n        "optional": false\n      },\n      {\n        "name": "owner",\n        "description": null,\n        "ty": "Key",\n        "optional": false\n      }\n    ]\n  }\n}\n')),(0,r.kt)("h2",{id:"schema-fields"},"Schema Fields"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"casper_contract_schema_version")," is the version of the schema.\n",(0,r.kt)("inlineCode",{parentName:"li"},"toolchain")," is the version of the Rust compiler used to compile the contract."),(0,r.kt)("li",{parentName:"ul"},"Fields ",(0,r.kt)("inlineCode",{parentName:"li"},"authors"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"repository"),", and ",(0,r.kt)("inlineCode",{parentName:"li"},"homepage")," are optional and can be set in the ",(0,r.kt)("inlineCode",{parentName:"li"},"Cargo.toml")," file."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"contract_name")," is the name of the contract - by default is the module name, may be overriden by the module attribute."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"contract_version")," denotes the version of the contract, defaulting to the version specified in the ",(0,r.kt)("inlineCode",{parentName:"li"},"Cargo.toml")," file, but can be overridden by the ",(0,r.kt)("inlineCode",{parentName:"li"},"module")," attribute."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"types")," comprises a list of custom structs and enums defined within the contract. Each struct or enum includes a name, description (not currently supported, with the value set to ",(0,r.kt)("inlineCode",{parentName:"li"},"null"),"), and a list of members."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"errors")," is a list of error enums defined within the contract. Each error includes a name, description (the first line of the variant documentation), and a discriminant."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"entry_points")," is a list of contract functions that can be called from the outside. Each entry point includes a name, description (not currently supported, with the value set to ",(0,r.kt)("inlineCode",{parentName:"li"},"null"),"), whether the function is mutable, a list of arguments, the return type, whether the function is called in the contract context, and the access level."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"events")," is a list of events that the contract can emit. Each event includes a name and the type (earlier defined in ",(0,r.kt)("inlineCode",{parentName:"li"},"types"),") of the event."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"call")," section provides details regarding the contract's ",(0,r.kt)("inlineCode",{parentName:"li"},"call")," function, which executes upon contract deployment. It includes the name of the Wasm file, a description (reflecting the constructor's description, typically the ",(0,r.kt)("inlineCode",{parentName:"li"},"init")," function), and a list of arguments. These arguments are a combination of Odra configuration arguments and constructor arguments.")))}m.isMDXComponent=!0}}]);