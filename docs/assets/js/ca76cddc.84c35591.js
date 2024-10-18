"use strict";(self.webpackChunkodra_website=self.webpackChunkodra_website||[]).push([[44191],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(n),m=a,v=u["".concat(c,".").concat(m)]||u[m]||d[m]||s;return n?r.createElement(v,o(o({ref:t},p),{},{components:n})):r.createElement(v,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var l=2;l<s;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},46486:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const s={sidebar_position:9,description:"Creating and emitting Events"},o="Events",i={unversionedId:"basics/events",id:"basics/events",title:"Events",description:"Creating and emitting Events",source:"@site/docs/basics/09-events.md",sourceDirName:"basics",slug:"/basics/events",permalink:"/docs/next/basics/events",draft:!1,tags:[],version:"current",lastUpdatedAt:1729243621,formattedLastUpdatedAt:"Oct 18, 2024",sidebarPosition:9,frontMatter:{sidebar_position:9,description:"Creating and emitting Events"},sidebar:"tutorialSidebar",previous:{title:"Errors",permalink:"/docs/next/basics/errors"},next:{title:"Casper Contract Schema",permalink:"/docs/next/basics/casper-contract-schema"}},c={},l=[{value:"Testing events",id:"testing-events",level:2},{value:"What&#39;s next",id:"whats-next",level:2}],p={toc:l};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"events"},"Events"),(0,a.kt)("p",null,"In the EVM world events are stored as logs within the blockchain's transaction receipts. These logs can be accessed by external applications or other smart contracts to monitor and react to specific events. Casper does not support events natively, however, Odra mimics this feature. Take a look:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust",metastring:'title="examples/src/features/events.rs"',title:'"examples/src/features/events.rs"'},"use odra::prelude::*;\n\n#[odra::module(events = [PartyStarted])]\npub struct PartyContract;\n\n#[odra::event]\npub struct PartyStarted {\n    pub caller: Address,\n    pub block_time: u64\n}\n\n#[odra::module]\nimpl PartyContract {\n    pub fn init(&self) {\n        self.env().emit_event(PartyStarted {\n            caller: self.env().caller(),\n            block_time: self.env().get_block_time()\n        });\n    }\n}\n")),(0,a.kt)("p",null,"We defined a new contract, which emits an event called ",(0,a.kt)("inlineCode",{parentName:"p"},"PartyStarted")," when the contract is deployed.\nTo define an event, add the ",(0,a.kt)("inlineCode",{parentName:"p"},"#[odra::event]")," attribute like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust",metastring:'title="examples/src/features/events.rs"',title:'"examples/src/features/events.rs"'},"#[odra::event]\npub struct PartyStarted {\n    pub caller: Address,\n    pub block_time: u64,\n}\n")),(0,a.kt)("p",null,"To emit an event, we use the ",(0,a.kt)("inlineCode",{parentName:"p"},"emit_event")," function from the ",(0,a.kt)("inlineCode",{parentName:"p"},"ContractEnv"),", passing the event as an argument:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust",metastring:'title="examples/src/features/events.rs"',title:'"examples/src/features/events.rs"'},"self.env().emit_event(PartyStarted {\n    caller: self.env().caller(),\n    block_time: self.env().get_block_time()\n});\n")),(0,a.kt)("p",null,"To determine all the events at compilation time to register them once the contract is deployed. To register events, add an ",(0,a.kt)("inlineCode",{parentName:"p"},"events")," inner attribute to the struct's ",(0,a.kt)("inlineCode",{parentName:"p"},"#[odra::module]")," attribute. The registered events will also be present in the contract ",(0,a.kt)("a",{parentName:"p",href:"./casper-contract-schema"},(0,a.kt)("inlineCode",{parentName:"a"},"schema")),"."),(0,a.kt)("p",null,"The event collection process is recursive; if your module consists of other modules, and they have already registered their events, you don't need to add them to the parent module."),(0,a.kt)("h2",{id:"testing-events"},"Testing events"),(0,a.kt)("p",null,"Odra's ",(0,a.kt)("inlineCode",{parentName:"p"},"HostEnv")," comes with a few functions which lets you easily test the events that a given contract has emitted:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust",metastring:'title="examples/src/features/events.rs"',title:'"examples/src/features/events.rs"'},'use super::{PartyContract, PartyStarted};\nuse odra::host::{Deployer, HostEnv, NoArgs};\n\n#[test]\nfn test_party() {\n    let test_env: HostEnv = odra_test::env();\n    let party_contract = PartyContract::deploy(&test_env, NoArgs);\n    test_env.emitted_event(\n        &party_contract,\n        &PartyStarted {\n            caller: test_env.get_account(0),\n            block_time: 0\n        }\n    );\n    // If you do not want to check the exact event, you can use `emitted` function\n    test_env.emitted(&party_contract, "PartyStarted");\n    // You can also check how many events were emitted.\n    assert_eq!(test_env.events_count(&party_contract), 1);\n}\n')),(0,a.kt)("p",null,"To explore more event testing functions, check the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.rs/odra/1.1.0/odra/host/struct.HostEnv.html"},(0,a.kt)("inlineCode",{parentName:"a"},"HostEnv"))," documentation."),(0,a.kt)("h2",{id:"whats-next"},"What's next"),(0,a.kt)("p",null,"Read the next article to learn how to call other contracts from the contract context."))}d.isMDXComponent=!0}}]);