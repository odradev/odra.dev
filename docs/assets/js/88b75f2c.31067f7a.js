"use strict";(self.webpackChunkodra_website=self.webpackChunkodra_website||[]).push([[96075],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),d=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=d(e.components);return a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=d(t),m=r,f=p["".concat(s,".").concat(m)]||p[m]||u[m]||o;return t?a.createElement(f,l(l({ref:n},c),{},{components:t})):a.createElement(f,l({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=p;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var d=2;d<o;d++)l[d]=t[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},68306:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var a=t(87462),r=(t(67294),t(3905));const o={},l="Delegate",i={unversionedId:"advanced/delegate",id:"version-0.7.0/advanced/delegate",title:"Delegate",description:"Managing boilerplate code can often lead to code that is cumbersome and challenging to comprehend. The Odra library introduces a solution to this issue with its Delegate feature. As the name implies, the Delegate feature permits the delegation of function calls to child modules, effectively minimizing the redundancy of boilerplate code and maintaining a lean and orderly parent module.",source:"@site/versioned_docs/version-0.7.0/advanced/02-delegate.md",sourceDirName:"advanced",slug:"/advanced/delegate",permalink:"/docs/0.7.0/advanced/delegate",draft:!1,tags:[],version:"0.7.0",lastUpdatedAt:1699367878,formattedLastUpdatedAt:"Nov 7, 2023",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Module reusing",permalink:"/docs/0.7.0/advanced/using"},next:{title:"Advanced Storage Concepts",permalink:"/docs/0.7.0/advanced/advanced-storage"}},s={},d=[{value:"Overview",id:"overview",level:2},{value:"Code Examples",id:"code-examples",level:2}],c={toc:d};function u(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"delegate"},"Delegate"),(0,r.kt)("p",null,"Managing boilerplate code can often lead to code that is cumbersome and challenging to comprehend. The Odra library introduces a solution to this issue with its Delegate feature. As the name implies, the Delegate feature permits the delegation of function calls to child modules, effectively minimizing the redundancy of boilerplate code and maintaining a lean and orderly parent module."),(0,r.kt)("p",null,"The main advantage of this feature is that it allows you to inherit the default behavior of child modules seamlessly, making your contracts more readable."),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"To utilize the delegate feature in your contract, use the ",(0,r.kt)("inlineCode",{parentName:"p"},"delegate!")," macro provided by Odra. This macro allows you to list the functions you wish to delegate to the child modules. By using the ",(0,r.kt)("inlineCode",{parentName:"p"},"delegate!")," macro, your parent module remains clean and easy to understand."),(0,r.kt)("p",null,"You can delegate functions to as many child modules as you like. The functions will be available as if they were implemented in the parent module itself."),(0,r.kt)("h2",{id:"code-examples"},"Code Examples"),(0,r.kt)("p",null,"Consider the following basic example for better understanding:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"use odra::{\n    contract_env,\n    types::{Address, U256}\n};\n\nuse crate::{erc20::Erc20, ownable::Ownable};\n\n#[odra::module]\npub struct OwnedToken {\n    ownable: Ownable,\n    erc20: Erc20\n}\n\n#[odra::module]\nimpl OwnedToken {\n    #[odra(init)]\n    pub fn init(&mut self, name: String, symbol: String, decimals: u8, initial_supply: U256) {\n        let deployer = contract_env::caller();\n        self.ownable.init(deployer);\n        self.erc20.init(name, symbol, decimals, initial_supply);\n    }\n\n    delegate! {\n        to self.erc20 {\n            pub fn transfer(&mut self, recipient: Address, amount: U256);\n            pub fn transfer_from(&mut self, owner: Address, recipient: Address, amount: U256);\n            pub fn approve(&mut self, spender: Address, amount: U256);\n            pub fn name(&self) -> String;\n            pub fn symbol(&self) -> String;\n            pub fn decimals(&self) -> u8;\n            pub fn total_supply(&self) -> U256;\n            pub fn balance_of(&self, owner: Address) -> U256;\n            pub fn allowance(&self, owner: Address, spender: Address) -> U256;\n        }\n\n        to self.ownable {\n            pub fn get_owner(&self) -> Address;\n            pub fn change_ownership(&mut self, new_owner: Address);\n        }\n    }\n\n    pub fn mint(&mut self, address: Address, amount: U256) {\n        self.ownable.ensure_ownership(contract_env::caller());\n        self.erc20.mint(address, amount);\n    }\n}\n")),(0,r.kt)("p",null,"This ",(0,r.kt)("inlineCode",{parentName:"p"},"OwnedToken")," contract includes two modules: ",(0,r.kt)("inlineCode",{parentName:"p"},"Erc20")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Ownable"),". We delegate various functions from both modules using the ",(0,r.kt)("inlineCode",{parentName:"p"},"delegate!")," macro. As a result, the contract retains its succinctness without compromising on functionality."),(0,r.kt)("p",null,"The above example basically merges the functionalities of modules and adds some control over the minting process. But you can use delegation to build more complex contracts, cherry-picking just a few module functionalities."),(0,r.kt)("p",null,"Let's take a look at another example."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"use odra::{\n    contract_env,\n    types::{Address, U256}\n};\n\nuse crate::{erc20::Erc20, ownable::Ownable, exchange::Exchange};\n\n#[odra::module]\npub struct DeFiPlatform {\n    ownable: Ownable,\n    erc20: Erc20,\n    exchange: Exchange\n}\n\n#[odra::module]\nimpl DeFiPlatform {\n    #[odra(init)]\n    pub fn init(&mut self, name: String, symbol: String, decimals: u8, initial_supply: U256, exchange_rate: u64) {\n        let deployer = contract_env::caller();\n        self.ownable.init(deployer);\n        self.erc20.init(name, symbol, decimals, initial_supply);\n        self.exchange.init(exchange_rate);\n    }\n\n    delegate! {\n        to self.erc20 {\n            pub fn transfer(&mut self, recipient: Address, amount: U256);\n            pub fn balance_of(&self, owner: Address) -> U256;\n        }\n\n        to self.ownable {\n            pub fn get_owner(&self) -> Address;\n        }\n\n        to self.exchange {\n            pub fn swap(&mut self, sender: Address, recipient: Address);\n            pub fn set_exchange_rate(&mut self, new_rate: u64);\n        }\n    }\n\n    pub fn mint(&mut self, address: Address, amount: U256) {\n        self.ownable.ensure_ownership(contract_env::caller());\n        self.erc20.mint(address, amount);\n    }\n}\n")),(0,r.kt)("p",null,"In this ",(0,r.kt)("inlineCode",{parentName:"p"},"DeFiPlatform")," contract, we include ",(0,r.kt)("inlineCode",{parentName:"p"},"Erc20"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Ownable"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"Exchange")," modules. By delegating functions from these modules, the parent contract becomes a powerhouse of functionality while retaining its readability and structure."),(0,r.kt)("p",null,"Remember, the possibilities are endless with Odra's. By leveraging this feature, you can write cleaner, more efficient, and modular smart contracts."))}u.isMDXComponent=!0}}]);