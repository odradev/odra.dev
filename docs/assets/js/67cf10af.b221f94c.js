"use strict";(self.webpackChunkodra_website=self.webpackChunkodra_website||[]).push([[49168],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>m});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=u(t),m=o,f=p["".concat(s,".").concat(m)]||p[m]||c[m]||a;return t?r.createElement(f,l(l({ref:n},d),{},{components:t})):r.createElement(f,l({ref:n},d))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=p;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var u=2;u<a;u++)l[u]=t[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},85243:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var r=t(87462),o=(t(67294),t(3905));const a={sidebar_position:3},l="OwnedToken",i={unversionedId:"tutorials/owned-token",id:"tutorials/owned-token",title:"OwnedToken",description:"This tutorial shows the great power of the modularization-focused design of the Odra Framework. We are going to use the modules we built in the last two tutorials to build a new one.",source:"@site/docs/tutorials/owned-token.md",sourceDirName:"tutorials",slug:"/tutorials/owned-token",permalink:"/docs/next/tutorials/owned-token",draft:!1,tags:[],version:"current",lastUpdatedAt:1729243621,formattedLastUpdatedAt:"Oct 18, 2024",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"ERC-20",permalink:"/docs/next/tutorials/erc20"},next:{title:"Access Control",permalink:"/docs/next/tutorials/access-control"}},s={},u=[{value:"Code",id:"code",level:2},{value:"Module definition",id:"module-definition",level:3},{value:"Delegation",id:"delegation",level:3},{value:"Summary",id:"summary",level:2}],d={toc:u};function c(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"ownedtoken"},"OwnedToken"),(0,o.kt)("p",null,"This tutorial shows the great power of the modularization-focused design of the Odra Framework. We are going to use the modules we built in the last two tutorials to build a new one."),(0,o.kt)("h2",{id:"code"},"Code"),(0,o.kt)("p",null,"What should our module be capable of?"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Conform the Erc20 interface."),(0,o.kt)("li",{parentName:"ol"},"Allow only the module owner to mint tokens."),(0,o.kt)("li",{parentName:"ol"},"Enable the current owner to designate a new owner.")),(0,o.kt)("h3",{id:"module-definition"},"Module definition"),(0,o.kt)("p",null,"Let's define a module called ",(0,o.kt)("inlineCode",{parentName:"p"},"OwnedToken")," that is a composition of ",(0,o.kt)("inlineCode",{parentName:"p"},"Ownable")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Erc20")," modules."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust",metastring:"title=owned_token.rs showLineNumbers",title:"owned_token.rs",showLineNumbers:!0},"use crate::{erc20::Erc20, ownable::Ownable};\nuse odra::prelude::*;\n\n#[odra::module]\npub struct OwnedToken {\n    ownable: SubModule<Ownable>,\n    erc20: SubModule<Erc20>\n}\n")),(0,o.kt)("p",null,"As you can see, we do not need any storage definition - we just take advantage of the already-defined modules!"),(0,o.kt)("h3",{id:"delegation"},"Delegation"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust",metastring:"title=owned_token.rs showLineNumbers",title:"owned_token.rs",showLineNumbers:!0},"...\nuse odra::casper_types::U256;\n...\n\n#[odra::module]\nimpl OwnedToken {\n    pub fn init(&mut self, name: String, symbol: String, decimals: u8, initial_supply: U256) {\n        let deployer = self.env().caller();\n        self.ownable.init(deployer);\n        self.erc20.init(name, symbol, decimals, initial_supply);\n    }\n\n    pub fn name(&self) -> String {\n        self.erc20.name()\n    }\n\n    pub fn symbol(&self) -> String {\n        self.erc20.symbol()\n    }\n\n    pub fn decimals(&self) -> u8 {\n        self.erc20.decimals()\n    }\n\n    pub fn total_supply(&self) -> U256 {\n        self.erc20.total_supply()\n    }\n\n    pub fn balance_of(&self, address: &Address) -> U256 {\n        self.erc20.balance_of(address)\n    }\n\n    pub fn allowance(&self, owner: &Address, spender: &Address) -> U256 {\n        self.erc20.allowance(owner, spender)\n    }\n\n    pub fn transfer(&mut self, recipient: &Address, amount: &U256) {\n        self.erc20.transfer(recipient, amount);\n    }\n\n    pub fn transfer_from(&mut self, owner: &Address, recipient: &Address, amount: &U256) {\n        self.erc20.transfer_from(owner, recipient, amount);\n    }\n\n    pub fn approve(&mut self, spender: &Address, amount: &U256) {\n        self.erc20.approve(spender, amount);\n    }\n\n    pub fn get_owner(&self) -> Address {\n        self.ownable.get_owner()\n    }\n\n    pub fn change_ownership(&mut self, new_owner: &Address) {\n        self.ownable.change_ownership(new_owner);\n    }\n\n    pub fn mint(&mut self, address: &Address, amount: &U256) {\n        self.ownable.ensure_ownership(&self.env().caller());\n        self.erc20.mint(address, amount);\n    }\n}\n")),(0,o.kt)("p",null,"Easy. However, there are a few worth mentioning subtleness:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"L9-L10")," - A constructor is an excellent place to initialize both modules at once."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"L13-L15")," - Most of the entrypoints do not need any modification, so we simply delegate them to the ",(0,o.kt)("inlineCode",{parentName:"li"},"erc20")," module."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"L49-L51")," - The same is done with the ",(0,o.kt)("inlineCode",{parentName:"li"},"ownable")," module."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"L57-L60")," - Minting should not be unconditional, we need some control over it. First, using ",(0,o.kt)("inlineCode",{parentName:"li"},"ownable")," we make sure the ",(0,o.kt)("inlineCode",{parentName:"li"},"caller")," really is indeed the owner.")),(0,o.kt)("h2",{id:"summary"},"Summary"),(0,o.kt)("p",null,"The Odra Framework encourages a modularized design of your smart contracts. You can encapsulate features in smaller units and test them in isolation, ensuring your project is easy to maintain. Finally, unleash their full potential by combining modules. You do not need any magic bindings for that."))}c.isMDXComponent=!0}}]);