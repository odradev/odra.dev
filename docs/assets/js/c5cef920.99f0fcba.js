"use strict";(self.webpackChunkodra_website=self.webpackChunkodra_website||[]).push([[88590],{3905:(e,r,n)=>{n.d(r,{Zo:()=>p,kt:()=>m});var t=n(67294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function s(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function i(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=t.createContext({}),c=function(e){var r=t.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):s(s({},r),e)),n},p=function(e){var r=c(e.components);return t.createElement(l.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},u=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(n),m=o,w=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return n?t.createElement(w,s(s({ref:r},p),{},{components:n})):t.createElement(w,s({ref:r},p))}));function m(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=u;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=n[c];return t.createElement.apply(null,s)}return t.createElement.apply(null,n)}u.displayName="MDXCreateElement"},62467:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var t=n(87462),o=(n(67294),n(3905));const a={sidebar_position:8,description:"Causing and handling errors"},s="Errors",i={unversionedId:"basics/errors",id:"version-0.3.0/basics/errors",title:"Errors",description:"Causing and handling errors",source:"@site/versioned_docs/version-0.3.0/basics/08-errors.md",sourceDirName:"basics",slug:"/basics/errors",permalink:"/docs/0.3.0/basics/errors",draft:!1,tags:[],version:"0.3.0",lastUpdatedAt:1687764750,formattedLastUpdatedAt:"Jun 26, 2023",sidebarPosition:8,frontMatter:{sidebar_position:8,description:"Causing and handling errors"},sidebar:"defaultSidebar",previous:{title:"Testing",permalink:"/docs/0.3.0/basics/testing"},next:{title:"Events",permalink:"/docs/0.3.0/basics/events"}},l={},c=[{value:"Testing errors",id:"testing-errors",level:2},{value:"What&#39;s next",id:"whats-next",level:2}],p={toc:c};function d(e){let{components:r,...n}=e;return(0,o.kt)("wrapper",(0,t.Z)({},p,n,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"errors"},"Errors"),(0,o.kt)("p",null,"Odra comes with tools that allow you to throw, handle and test for errors in execution. Take a look at the\nfollowing example of a simple owned contract:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust",metastring:'title="examples/src/docs/errors.rs"',title:'"examples/src/docs/errors.rs"'},"use odra::{execution_error, Variable, UnwrapOrRevert};\nuse odra::types::Address;\n\n#[odra::module]\npub struct OwnedContract {\n    name: Variable<String>,\n    owner: Variable<Address>,\n}\n\nexecution_error! {\n    pub enum Error {\n        OwnerNotSet => 1,\n        NotAnOwner => 2,\n    }\n}\n\n\n#[odra::module]\nimpl OwnedContract {\n    #[odra(init)]\n    pub fn init(&mut self, name: String) {\n        self.name.set(name);\n        self.owner.set(odra::contract_env::caller())\n    }\n\n    pub fn name(&self) -> String {\n        self.name.get_or_default()\n    }\n\n    pub fn owner(&self) -> Address {\n        self.owner.get().unwrap_or_revert_with(Error::OwnerNotSet)\n    }\n\n    pub fn change_name(&mut self, name: String) {\n        let caller = odra::contract_env::caller();\n        if caller != self.owner() {\n            odra::contract_env::revert(Error::NotAnOwner)\n        }\n\n        self.name.set(name);\n    }\n}\n")),(0,o.kt)("p",null,"Firstly, we are using ",(0,o.kt)("inlineCode",{parentName:"p"},"execution_error!")," macro to define our own set of Errors that our contract will\nthrow. Then, you can use those errors in your code - for example, instead of unwrapping Options, you can use\n",(0,o.kt)("inlineCode",{parentName:"p"},"unwrap_or_revert_with")," and pass an error as an argument:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust",metastring:'title="examples/src/docs/errors.rs"',title:'"examples/src/docs/errors.rs"'},"self.owner.get().unwrap_or_revert_with(Error::OwnerNotSet)\n")),(0,o.kt)("p",null,"You and the users of your contract will be thankful for a meaningful error message!"),(0,o.kt)("p",null,"You can also throw the error directly, by using ",(0,o.kt)("inlineCode",{parentName:"p"},"revert"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust",metastring:'title="examples/src/docs/errors.rs"',title:'"examples/src/docs/errors.rs"'},"odra::contract_env::revert(Error::NotAnOwner)\n")),(0,o.kt)("h2",{id:"testing-errors"},"Testing errors"),(0,o.kt)("p",null,"Okay, but how about testing it? We've already mentioned a function - ",(0,o.kt)("inlineCode",{parentName:"p"},"assert_exception"),". This is how you will\nuse it:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust",metastring:'title="examples/src/docs/errors.rs"',title:'"examples/src/docs/errors.rs"'},'use super::{OwnedContractDeployer, OwnedContractRef};\nuse super::Error;\n\n#[test]\nfn test_owner_error() {\n    let owner = odra::test_env::get_account(0);\n    let not_an_owner = odra::test_env::get_account(1);\n\n    odra::test_env::set_caller(owner);\n    let mut owned_contract = OwnedContractDeployer::init("OwnedContract".to_string());\n\n    odra::test_env::set_caller(not_an_owner);\n    odra::test_env::assert_exception(Error::NotAnOwner, || {\n        let mut owned_contract = OwnedContractRef::at(owned_contract.address());\n        owned_contract.change_name("NewName".to_string());\n    })\n}\n')),(0,o.kt)("p",null,"In the example above, because we are calling the ",(0,o.kt)("inlineCode",{parentName:"p"},"change_name"),' method as an address which is not an "owner",\nwe are expecting that "NotAnOwner" error will be thrown.'),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Here we are creating another reference to the already deployed contract using ",(0,o.kt)("inlineCode",{parentName:"p"},"OwnedContractRef::at()")," and passing to it\nits Address. Note that ",(0,o.kt)("inlineCode",{parentName:"p"},"OwnedContractDeployer::init()")," returns the same type.")),(0,o.kt)("h2",{id:"whats-next"},"What's next"),(0,o.kt)("p",null,"We will learn how to emit and test events using Odra."))}d.isMDXComponent=!0}}]);