"use strict";(self.webpackChunkodra_website=self.webpackChunkodra_website||[]).push([[68492],{3905:(e,r,n)=>{n.d(r,{Zo:()=>u,kt:()=>m});var t=n(67294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function s(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function i(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=t.createContext({}),c=function(e){var r=t.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):s(s({},r),e)),n},u=function(e){var r=c(e.components);return t.createElement(l.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},d=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return n?t.createElement(f,s(s({ref:r},u),{},{components:n})):t.createElement(f,s({ref:r},u))}));function m(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return t.createElement.apply(null,s)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85051:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var t=n(87462),a=(n(67294),n(3905));const o={sidebar_position:8,description:"Causing and handling errors"},s="Errors",i={unversionedId:"basics/errors",id:"version-0.7.0/basics/errors",title:"Errors",description:"Causing and handling errors",source:"@site/versioned_docs/version-0.7.0/basics/08-errors.md",sourceDirName:"basics",slug:"/basics/errors",permalink:"/docs/0.7.0/basics/errors",draft:!1,tags:[],version:"0.7.0",lastUpdatedAt:1699367878,formattedLastUpdatedAt:"Nov 7, 2023",sidebarPosition:8,frontMatter:{sidebar_position:8,description:"Causing and handling errors"},sidebar:"tutorialSidebar",previous:{title:"Testing",permalink:"/docs/0.7.0/basics/testing"},next:{title:"Events",permalink:"/docs/0.7.0/basics/events"}},l={},c=[{value:"Testing errors",id:"testing-errors",level:2},{value:"What&#39;s next",id:"whats-next",level:2}],u={toc:c};function p(e){let{components:r,...n}=e;return(0,a.kt)("wrapper",(0,t.Z)({},u,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"errors"},"Errors"),(0,a.kt)("p",null,"Odra comes with tools that allow you to throw, handle and test for errors in execution. Take a look at the\nfollowing example of a simple owned contract:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust",metastring:'title="examples/src/features/handling_errors.rs"',title:'"examples/src/features/handling_errors.rs"'},"use odra::{execution_error, Variable, UnwrapOrRevert};\nuse odra::types::Address;\n\n#[odra::module]\npub struct OwnedContract {\n    name: Variable<String>,\n    owner: Variable<Address>,\n}\n\nexecution_error! {\n    pub enum Error {\n        OwnerNotSet => 1,\n        NotAnOwner => 2,\n    }\n}\n\n\n#[odra::module]\nimpl OwnedContract {\n    #[odra(init)]\n    pub fn init(&mut self, name: String) {\n        self.name.set(name);\n        self.owner.set(odra::contract_env::caller())\n    }\n\n    pub fn name(&self) -> String {\n        self.name.get_or_default()\n    }\n\n    pub fn owner(&self) -> Address {\n        self.owner.get().unwrap_or_revert_with(Error::OwnerNotSet)\n    }\n\n    pub fn change_name(&mut self, name: String) {\n        let caller = odra::contract_env::caller();\n        if caller != self.owner() {\n            odra::contract_env::revert(Error::NotAnOwner)\n        }\n\n        self.name.set(name);\n    }\n}\n")),(0,a.kt)("p",null,"Firstly, we are using ",(0,a.kt)("inlineCode",{parentName:"p"},"execution_error!")," macro to define our own set of Errors that our contract will\nthrow. Then, you can use those errors in your code - for example, instead of unwrapping Options, you can use\n",(0,a.kt)("inlineCode",{parentName:"p"},"unwrap_or_revert_with")," and pass an error as an argument:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust",metastring:'title="examples/src/features/handling_errors.rs"',title:'"examples/src/features/handling_errors.rs"'},"self.owner.get().unwrap_or_revert_with(Error::OwnerNotSet)\n")),(0,a.kt)("p",null,"You and the users of your contract will be thankful for a meaningful error message!"),(0,a.kt)("p",null,"You can also throw the error directly, by using ",(0,a.kt)("inlineCode",{parentName:"p"},"revert"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust",metastring:'title="examples/src/features/handling_errors.rs"',title:'"examples/src/features/handling_errors.rs"'},"odra::contract_env::revert(Error::NotAnOwner)\n")),(0,a.kt)("h2",{id:"testing-errors"},"Testing errors"),(0,a.kt)("p",null,"Okay, but how about testing it? We've already mentioned a function - ",(0,a.kt)("inlineCode",{parentName:"p"},"assert_exception"),". This is how you will\nuse it:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust",metastring:'title="examples/src/features/handling_errors.rs"',title:'"examples/src/features/handling_errors.rs"'},'use super::{OwnedContractDeployer, OwnedContractRef};\nuse super::Error;\n\n#[test]\nfn test_owner_error() {\n    let owner = odra::test_env::get_account(0);\n    let not_an_owner = odra::test_env::get_account(1);\n\n    odra::test_env::set_caller(owner);\n    let mut owned_contract = OwnedContractDeployer::init("OwnedContract".to_string());\n\n    odra::test_env::set_caller(not_an_owner);\n    odra::test_env::assert_exception(Error::NotAnOwner, || {\n        owned_contract.change_name("NewName".to_string());\n    })\n}\n')),(0,a.kt)("p",null,"In the example above, because we are calling the ",(0,a.kt)("inlineCode",{parentName:"p"},"change_name"),' method as an address which is not an "owner",\nwe are expecting that "NotAnOwner" error will be thrown.'),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Here we are creating another reference to the already deployed contract using ",(0,a.kt)("inlineCode",{parentName:"p"},"OwnedContractRef::at()")," and passing to it\nits Address. Note that ",(0,a.kt)("inlineCode",{parentName:"p"},"OwnedContractDeployer::init()")," returns the same type.")),(0,a.kt)("h2",{id:"whats-next"},"What's next"),(0,a.kt)("p",null,"We will learn how to emit and test events using Odra."))}p.isMDXComponent=!0}}]);