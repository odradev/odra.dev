"use strict";(self.webpackChunkodra_website=self.webpackChunkodra_website||[]).push([[8923],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>f});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=a.createContext({}),d=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=d(e.components);return a.createElement(i.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(t),f=r,m=u["".concat(i,".").concat(f)]||u[f]||p[f]||l;return t?a.createElement(m,o(o({ref:n},c),{},{components:t})):a.createElement(m,o({ref:n},c))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=u;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var d=2;d<l;d++)o[d]=t[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},49614:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>s,toc:()=>d});var a=t(87462),r=(t(67294),t(3905));const l={slug:"2023-02-27-openai-writes-erc20-in-odra",title:"OpenAI writes ERC20 in Odra",authors:["zie1ony"],image:"./twitter-card.png"},o=void 0,s={permalink:"/blog/2023-02-27-openai-writes-erc20-in-odra",source:"@site/blog/2023-02-27-openai-writes-erc20-in-odra/index.md",title:"OpenAI writes ERC20 in Odra",description:"OpenAI can write Odra smart contracts.",date:"2023-02-27T00:00:00.000Z",formattedDate:"February 27, 2023",tags:[],readingTime:3.785,hasTruncateMarker:!0,authors:[{name:"Maciej Zieli\u0144ski",title:"CTO",url:"https://github.com/zie1ony",key:"zie1ony"}],frontMatter:{slug:"2023-02-27-openai-writes-erc20-in-odra",title:"OpenAI writes ERC20 in Odra",authors:["zie1ony"],image:"./twitter-card.png"},prevItem:{title:"It's all about the community!",permalink:"/blog/its-all-about-the-community"},nextItem:{title:"Odra + CosmWasm",permalink:"/blog/odra-cosmwasm"}},i={image:t(901).Z,authorsImageUrls:[void 0]},d=[{value:"OpenAI",id:"openai",level:2},{value:"DaVinci Edit",id:"davinci-edit",level:2},{value:"ERC20 by AI",id:"erc20-by-ai",level:2},{value:"What is next?",id:"what-is-next",level:2}],c={toc:d};function p(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"OpenAI can write Odra smart contracts.\nThis is how."),(0,r.kt)("h2",{id:"openai"},"OpenAI"),(0,r.kt)("p",null,"OpenAI already proved that AI can code.\nGithub Copilot is used by more and more developers.\nMany times it is mind-blowing how accurate it is.\nIt would be great if one of the OpenAI models could simply work after writing:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Q: Write the ERC20 smart contract.\n\nA: use odra::{Mapping, Variable}...\n")),(0,r.kt)("p",null,"So far OpenAI hasn't indexed Odra. I even asked ChatGPT."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Q: Do you know what is the Odra Framework for writing smart contracts?\n   Response in one sentence. Use Yoda style.\n\nA: Aware of an Odra Framework for writing smart contracts, I am not.\n")),(0,r.kt)("p",null,"Soon (year or two) it will happen and Odra will be supported out of the box,\nsimply because it is available on GitHub."),(0,r.kt)("h2",{id:"davinci-edit"},"DaVinci Edit"),(0,r.kt)("p",null,"OpenAI gives us a great tool called ",(0,r.kt)("a",{parentName:"p",href:"https://openai.com/blog/gpt-3-edit-insert/"},"Edit"),".\nIt uses the same technology Github Copiled it based on called ",(0,r.kt)("a",{parentName:"p",href:"https://openai.com/blog/openai-codex/"},"Codex"),",\nOpenAI gives us access to the model ",(0,r.kt)("inlineCode",{parentName:"p"},"code-davinci-edit-001"),".\nIt allows you to paste in the code and ask for changes.\nSee more examples like rewriting Fibonacci to a recursive version ",(0,r.kt)("a",{parentName:"p",href:"https://platform.openai.com/docs/guides/code/editing-code"},"here"),". "),(0,r.kt)("p",null,"But it doesn't know Odra.\nLuckily this is not a problem.\nI have found a nice trick that allows producing the code I want.\nWe simply have to present all the features of Odra and ask a good question."),(0,r.kt)("h2",{id:"erc20-by-ai"},"ERC20 by AI"),(0,r.kt)("p",null,"The goal is to bend AI to write the ERC20 token using Odra.\nThe Edit query needs two elements:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"source code,"),(0,r.kt)("li",{parentName:"ul"},"text that describes what should be changed. ")),(0,r.kt)("p",null,"As the input source code I wrote the code that uses all the features ERC20 would use.\nI need ",(0,r.kt)("inlineCode",{parentName:"p"},"odra::module"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Variable"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Mapping"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"caller()"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Address"),",\nconstructor, and errors."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust",metastring:"title=flipper.rs",title:"flipper.rs"},"use odra::{Variable, types::Address, contract_env, Mapping, execution_error};\n\n#[odra::module]\npub struct Flipper {\n    value: Variable<bool>,\n    flips_count: Variable<u32>,\n    owner: Variable<Address>,\n    messages: Mapping<(Address, Address), String>\n}\n\n#[odra::module]\nimpl Flipper {\n    #[odra(init)]\n    pub fn init(&mut self, owner: Address) {\n        self.value.set(false);\n        self.owner.set(owner);\n    }\n\n    pub fn set(&mut self, value: bool) {\n        self.value.set(value);\n    }\n\n    pub fn flip(&mut self) {\n        self.value.set(!self.get_value());\n        self.flips_count.set(self.flips_count.get_or_default());\n    }\n\n    pub fn get_value(&self) -> bool {\n        self.value.get_or_default()\n    }\n    \n    pub fn get_owner(&self) -> Option<Address> {\n        self.owner.get()\n    }\n\n    pub fn set_message(&mut self, recipient: Address, msg: String) {\n        let sender = contract_env::caller();\n        let current_msg = self.messages.get(&(sender, recipient));\n        match current_msg {\n            Some(_) => contract_env::revert(Error::MessageAlreadyDefined),\n            None => self.messages.set(&(sender, recipient), msg)\n        }\n    }\n\n    pub fn get_message(&self, sender: Address, recipient: Address) -> String {\n        self.messages.get_or_default(&(sender, recipient))\n    }\n}\n\nexecution_error! {\n    pub enum Error {\n        MessageAlreadyDefined => 1,\n        NotAnMessageSender => 2,\n    }\n}\n")),(0,r.kt)("p",null,"ChatGPT knows what the ERC20 is, so the kind request for changes is simple."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Q: Implement another smart contract called ERC20.\n   Balances should be of type U256.\n")),(0,r.kt)("p",null,"This is the result."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust",metastring:'title="ERC20 contract in Odra generated by OpenAI"',title:'"ERC20',contract:!0,in:!0,Odra:!0,generated:!0,by:!0,'OpenAI"':!0},"use odra::{Variable, types::Address, contract_env, Mapping, execution_error, U256};\n\n#[odra::module]\npub struct ERC20 {\n    name: Variable<String>,\n    symbol: Variable<String>,\n    decimals: Variable<u8>,\n    total_supply: Variable<U256>,\n    balances: Mapping<Address, U256>,\n    allowed: Mapping<(Address, Address), U256>\n}\n\n#[odra::module]\nimpl ERC20 {\n    #[odra(init)]\n    pub fn init(&mut self, name: String, symbol: String, decimals: u8, total_supply: U256) {\n        self.name.set(name);\n        self.symbol.set(symbol);\n        self.decimals.set(decimals);\n        self.total_supply.set(total_supply);\n        self.balances.set(&contract_env::caller(), total_supply);\n    }\n\n    pub fn total_supply(&self) -> U256 {\n        self.total_supply.get_or_default()\n    }\n\n    pub fn balance_of(&self, owner: Address) -> U256 {\n        self.balances.get_or_default(&owner)\n    }\n\n    pub fn transfer(&mut self, to: Address, value: U256) {\n        let from = contract_env::caller();\n        let from_balance = self.balances.get_or_default(&from);\n        let to_balance = self.balances.get_or_default(&to);\n        if from_balance < value {\n            contract_env::revert(Error::InsufficientBalance);\n        }\n        self.balances.set(&from, from_balance - value);\n        self.balances.set(&to, to_balance + value);\n    }\n\n    pub fn transfer_from(&mut self, from: Address, to: Address, value: U256) {\n        let caller = contract_env::caller();\n        let from_balance = self.balances.get_or_default(&from);\n        let to_balance = self.balances.get_or_default(&to);\n        let allowed = self.allowed.get_or_default(&(from, caller));\n        if from_balance < value {\n            contract_env::revert(Error::InsufficientBalance);\n        }\n        if allowed < value {\n            contract_env::revert(Error::InsufficientAllowance);\n        }\n        self.balances.set(&from, from_balance - value);\n        self.balances.set(&to, to_balance + value);\n        self.allowed.set(&(from, caller), allowed - value);\n    }\n\n    pub fn approve(&mut self, spender: Address, value: U256) {\n        let owner = contract_env::caller();\n        self.allowed.set(&(owner, spender), value);\n    }\n\n    pub fn allowance(&self, owner: Address, spender: Address) -> U256 {\n        self.allowed.get_or_default(&(owner, spender))\n    }\n}\n\nexecution_error! {\n    pub enum Error {\n        InsufficientBalance => 1,\n        InsufficientAllowance => 2,\n    }\n}\n")),(0,r.kt)("p",null,"Wow!"),(0,r.kt)("h2",{id:"what-is-next"},"What is next?"),(0,r.kt)("p",null,"AI already understands smart contracts.\nIt had to read a lot of Solidity code.\nI checked and it knows Uniswap and Compound source code.\nMost interesting is that AI was able to implement a concept it already knew\nfrom another programming language in the unseen Rust framework.\nAt some point, we will be able to translate all the Solidity code to Odra.\nOr maybe we will not have to..."),(0,r.kt)("p",null,"It is hard to imagine how good it will be in 2025 and beyond."))}p.isMDXComponent=!0},901:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/twitter-card-0f7e768e63da0acd629609954ba26f62.png"}}]);