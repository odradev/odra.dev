"use strict";(self.webpackChunkodra_website=self.webpackChunkodra_website||[]).push([[75894],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=l(n),m=a,v=u["".concat(c,".").concat(m)]||u[m]||p[m]||s;return n?r.createElement(v,o(o({ref:t},d),{},{components:n})):r.createElement(v,o({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var l=2;l<s;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},69707:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const s={sidebar_position:9,description:"Creating and emitting Events"},o="Events",i={unversionedId:"basics/events",id:"version-0.3.1/basics/events",title:"Events",description:"Creating and emitting Events",source:"@site/versioned_docs/version-0.3.1/basics/09-events.md",sourceDirName:"basics",slug:"/basics/events",permalink:"/docs/0.3.1/basics/events",draft:!1,tags:[],version:"0.3.1",lastUpdatedAt:1687775506,formattedLastUpdatedAt:"Jun 26, 2023",sidebarPosition:9,frontMatter:{sidebar_position:9,description:"Creating and emitting Events"},sidebar:"tutorialSidebar",previous:{title:"Errors",permalink:"/docs/0.3.1/basics/errors"},next:{title:"Cross calls",permalink:"/docs/0.3.1/basics/cross-calls"}},c={},l=[{value:"Testing events",id:"testing-events",level:2},{value:"What&#39;s next",id:"whats-next",level:2}],d={toc:l};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"events"},"Events"),(0,a.kt)("p",null,"Different blockchains implement events in different ways. Odra lets you forget about it by introducing\nOdra Events. Take a look:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust",metastring:'title="examples/src/docs/events.rs"',title:'"examples/src/docs/events.rs"'},"use odra::{Event, contract_env};\nuse odra::types::{Address, BlockTime, event::OdraEvent};\n\n#[odra::module(events = [PartyStarted])]\npub struct PartyContract {\n}\n\n#[derive(Event, PartialEq, Eq, Debug)]\npub struct PartyStarted {\n    pub caller: Address,\n    pub block_time: BlockTime,\n}\n\n#[odra::module]\nimpl PartyContract {\n    #[odra(init)]\n    pub fn init(&self) {\n        PartyStarted {\n            caller: contract_env::caller(),\n            block_time: contract_env::get_block_time(),\n        }.emit();\n    }\n}\n")),(0,a.kt)("p",null,"We defined a new contract, which emits an event called ",(0,a.kt)("inlineCode",{parentName:"p"},"PartyStarted")," when the contract is deployed.\nTo define an event, we derive an ",(0,a.kt)("inlineCode",{parentName:"p"},"Event")," macro like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust",metastring:'title="examples/src/docs/events.rs"',title:'"examples/src/docs/events.rs"'},"#[derive(Event, PartialEq, Eq, Debug)]\npub struct PartyStarted {\n    pub caller: Address,\n    pub block_time: BlockTime,\n}\n")),(0,a.kt)("p",null,"Among other things, it adds an ",(0,a.kt)("inlineCode",{parentName:"p"},"emit()")," function to the struct, which allows you to emit the event simply\nas that:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust",metastring:'title="examples/src/docs/events.rs"',title:'"examples/src/docs/events.rs"'},"PartyStarted {\n    caller: contract_env::caller(),\n    block_time: contract_env::get_block_time(),\n}.emit();\n")),(0,a.kt)("p",null,"Some backends may need to know all the events at compilation time to register them once the contract is deployed. To register events, add an ",(0,a.kt)("inlineCode",{parentName:"p"},"events")," attribute to the struct's ",(0,a.kt)("inlineCode",{parentName:"p"},"#[odra::module]")," macro. "),(0,a.kt)("p",null,"The event collection process is recursive; if your module consists of other modules, and they have already registered their events, you don't need to add them to the parent module."),(0,a.kt)("h2",{id:"testing-events"},"Testing events"),(0,a.kt)("p",null,"Odra's ",(0,a.kt)("inlineCode",{parentName:"p"},"test_env")," comes with a handy macro ",(0,a.kt)("inlineCode",{parentName:"p"},"assert_events!")," which lets you easily test the events that a given contract has emitted:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust",metastring:'title="examples/src/docs/events.rs"',title:'"examples/src/docs/events.rs"'},"use odra::{assert_events, test_env};\nuse crate::docs::events::PartyStarted;\nuse super::PartyContractDeployer;\n\n#[test]\nfn test_party() {\n    let party_contract = PartyContractDeployer::init();\n    assert_events!(\n        party_contract,\n        PartyStarted {\n            caller: test_env::get_account(0),\n            block_time: 0,\n        }\n    );\n}\n")),(0,a.kt)("h2",{id:"whats-next"},"What's next"),(0,a.kt)("p",null,"Read the next article to learn how to call other contracts from the contract context."))}p.isMDXComponent=!0}}]);