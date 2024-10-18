"use strict";(self.webpackChunkodra_website=self.webpackChunkodra_website||[]).push([[41906],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(n),f=a,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||o;return n?r.createElement(m,l(l({ref:t},u),{},{components:n})):r.createElement(m,l({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},27107:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={},l="Attributes",i={unversionedId:"advanced/attributes",id:"version-0.8.1/advanced/attributes",title:"Attributes",description:"Smart contract developers with Ethereum background are familiar with Solidity's concept of modifiers in Solidity - a feature that",source:"@site/versioned_docs/version-0.8.1/advanced/03-attributes.md",sourceDirName:"advanced",slug:"/advanced/attributes",permalink:"/docs/0.8.1/advanced/attributes",draft:!1,tags:[],version:"0.8.1",lastUpdatedAt:1709886222,formattedLastUpdatedAt:"Mar 8, 2024",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Advanced Storage Concepts",permalink:"/docs/0.8.1/advanced/advanced-storage"},next:{title:"Storage Layout",permalink:"/docs/0.8.1/advanced/storage-layout"}},s={},c=[{value:"Payable",id:"payable",level:2},{value:"Example",id:"example",level:3},{value:"Non Reentrant",id:"non-reentrant",level:2},{value:"Example",id:"example-1",level:3},{value:"Mixing attributes",id:"mixing-attributes",level:2}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"attributes"},"Attributes"),(0,a.kt)("p",null,"Smart contract developers with Ethereum background are familiar with Solidity's concept of modifiers in Solidity - a feature that\nallows developers to embed common checks into function definitions in a readable and reusable manner.\nThese are essentially prerequisites for function execution."),(0,a.kt)("p",null,"Odra defines a few attributes that can be applied to functions to equip them with superpowers."),(0,a.kt)("h2",{id:"payable"},"Payable"),(0,a.kt)("p",null,"When writing a smart contract, you need to make sure that money can be both sent to and extracted from the contract. The 'payable' attribute helps wit this. Any function, except for a constructor, with the ",(0,a.kt)("inlineCode",{parentName:"p"},"#[odra(payable)]")," attribute can send and take money in the form of native tokens. "),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust",metastring:"title=examples/src/contracts/tlw.rs",title:"examples/src/contracts/tlw.rs"},"#[odra(payable)]\npub fn deposit(&mut self) {\n    // Extract values\n    let caller: Address = self.env().caller();\n    let amount: U256 = self.env().attached_value();\n    let current_block_time: u64 = self.env().get_block_time();\n\n    // Multiple lock check\n    if self.balances.get(&caller).is_some() {\n        self.env.revert(Error::CannotLockTwice)\n    }\n\n    // Update state, emit event\n    self.balances.set(&caller, amount);\n    self.lock_expiration_map\n        .set(&caller, current_block_time + self.lock_duration());\n    self.env()\n      .emit_event(Deposit {\n        address: caller,\n        amount\n    });\n}\n")),(0,a.kt)("p",null,"If you try to send tokens to a non-payable function, the transaction will be automatically rejected."),(0,a.kt)("h2",{id:"non-reentrant"},"Non Reentrant"),(0,a.kt)("p",null,"Reentrancy attacks in smart contracts exploit the possibility of a function being called multiple times before its initial execution is completed, leading to the repeated unauthorized withdrawal of funds. "),(0,a.kt)("p",null,"To prevent such attacks, developers should ensure that all effects on the contract's state and balance checks occur before calling external contracts. "),(0,a.kt)("p",null,"They can also use reentrancy guards to block recursive calls to sensitive functions."),(0,a.kt)("p",null,"In Odra you can just apply the ",(0,a.kt)("inlineCode",{parentName:"p"},"#[odra(non_reentrant)]")," attribute to your function."),(0,a.kt)("h3",{id:"example-1"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"#[odra::module]\npub struct NonReentrantCounter {\n    counter: Var<u32>\n}\n\n#[odra::module]\nimpl NonReentrantCounter {\n    #[odra(non_reentrant)]\n    pub fn count_ref_recursive(&mut self, n: u32) {\n        if n > 0 {\n            self.count();\n            ReentrancyMockRef::new(self.env(), self.env().self_address()).count_ref_recursive(n - 1);\n        }\n    }\n}\n\nimpl NonReentrantCounter {\n    fn count(&mut self) {\n        let c = self.counter.get_or_default();\n        self.counter.set(c + 1);\n    }\n}\n\n#[cfg(test)]\nmod test {\n    use super::*;\n    use odra::{host::{Deployer, NoArgs}, ExecutionError};\n\n    #[test]\n    fn ref_recursion_not_allowed() {\n        let test_env = odra_test::env();\n        let mut contract = NonReentrantCounterHostRef::deploy(&test_env, NoArgs);\n\n        let result = contract.count_ref_recursive(11);\n        assert_eq!(result, ExecutionError::ReentrantCall.into());\n    }\n}\n")),(0,a.kt)("h2",{id:"mixing-attributes"},"Mixing attributes"),(0,a.kt)("p",null,"A function can accept more than one attribute. The only exclusion is a constructor cannot be payable.\nTo apply multiple attributes, you can write:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"#[odra(payable, non_reentrant)]\nfn deposit() {\n  // your logic...\n}\n")),(0,a.kt)("p",null,"or "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"#[odra(payable)]\n#[odra(non_reentrant)]\nfn deposit() {\n  // your logic...\n}\n")),(0,a.kt)("p",null,"In both cases attributes order does not matter."))}p.isMDXComponent=!0}}]);