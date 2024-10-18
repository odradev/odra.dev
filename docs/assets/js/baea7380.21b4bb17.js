"use strict";(self.webpackChunkodra_website=self.webpackChunkodra_website||[]).push([[77678],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),c=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(i.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(t),m=a,f=d["".concat(i,".").concat(m)]||d[m]||u[m]||s;return t?r.createElement(f,o(o({ref:n},p),{},{components:t})):r.createElement(f,o({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var s=t.length,o=new Array(s);o[0]=d;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<s;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},24082:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var r=t(87462),a=(t(67294),t(3905));const s={sidebar_position:3},o="ERC-20",l={unversionedId:"tutorials/erc20",id:"version-1.3.0/tutorials/erc20",title:"ERC-20",description:"It's time for something that every smart contract developer has done at least once. Let's try to implement Erc20 standard. Of course, we are going to use the Odra Framework.",source:"@site/versioned_docs/version-1.3.0/tutorials/erc20.md",sourceDirName:"tutorials",slug:"/tutorials/erc20",permalink:"/docs/1.3.0/tutorials/erc20",draft:!1,tags:[],version:"1.3.0",lastUpdatedAt:1727085590,formattedLastUpdatedAt:"Sep 23, 2024",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Ownable",permalink:"/docs/1.3.0/tutorials/ownable"},next:{title:"OwnedToken",permalink:"/docs/1.3.0/tutorials/owned-token"}},i={},c=[{value:"Framework features",id:"framework-features",level:2},{value:"Code",id:"code",level:2},{value:"Module definition",id:"module-definition",level:2},{value:"Metadata",id:"metadata",level:3},{value:"Core",id:"core",level:3},{value:"Test",id:"test",level:3},{value:"What&#39;s next",id:"whats-next",level:2}],p={toc:c};function u(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"erc-20"},"ERC-20"),(0,a.kt)("p",null,"It's time for something that every smart contract developer has done at least once. Let's try to implement ",(0,a.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-20"},"Erc20")," standard. Of course, we are going to use the Odra Framework. "),(0,a.kt)("p",null,"The ERC-20 standard establishes a uniform specification for fungible tokens. This implies that each token shares attributes that make it indistinguishable from another token of the same type and value."),(0,a.kt)("h2",{id:"framework-features"},"Framework features"),(0,a.kt)("p",null,"A module we will write in a minute, will help you master a few Odra features:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Advanced storage using key-value pairs,"),(0,a.kt)("li",{parentName:"ul"},"Odra types such as ",(0,a.kt)("inlineCode",{parentName:"li"},"Address"),","),(0,a.kt)("li",{parentName:"ul"},"Advanced event assertion.")),(0,a.kt)("h2",{id:"code"},"Code"),(0,a.kt)("p",null,"Our module features a considerably more complex storage layout compared to the previous example. "),(0,a.kt)("p",null,"It is designed to store the following data:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Immutable metadata - name, symbol, and decimals."),(0,a.kt)("li",{parentName:"ol"},"Total supply."),(0,a.kt)("li",{parentName:"ol"},"Balances of individual users."),(0,a.kt)("li",{parentName:"ol"},"Allowances, essentially indicating who is permitted to spend tokens on behalf of another user.")),(0,a.kt)("h2",{id:"module-definition"},"Module definition"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust",metastring:"title=erc20.rs showLineNumbers",title:"erc20.rs",showLineNumbers:!0},"use odra::prelude::*;\nuse odra::{Address, casper_types::U256, Mapping, Var};\n\n#[odra::module(events = [Transfer, Approval])]\npub struct Erc20 {\n    decimals: Var<u8>,\n    symbol: Var<String>,\n    name: Var<String>,\n    total_supply: Var<U256>,\n    balances: Mapping<Address, U256>,\n    allowances: Mapping<(Address, Address), U256>\n}\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"L10")," - For the first time, we need to store key-value pairs. In order to do that, we use ",(0,a.kt)("inlineCode",{parentName:"li"},"Mapping"),". The name is taken after Solidity's native type ",(0,a.kt)("inlineCode",{parentName:"li"},"mapping"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"L11")," - Odra does not allows nested ",(0,a.kt)("inlineCode",{parentName:"li"},"Mapping"),"s as Solidity does. Instead, you can create a compound key using a tuple of keys.")),(0,a.kt)("h3",{id:"metadata"},"Metadata"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust",metastring:"title=erc20.rs showLineNumbers",title:"erc20.rs",showLineNumbers:!0},"#[odra::module]\nimpl Erc20 {\n    pub fn init(&mut self, name: String, symbol: String, decimals: u8, initial_supply: U256) {\n        let caller = self.env().caller();\n        self.name.set(name);\n        self.symbol.set(symbol);\n        self.decimals.set(decimals);\n        self.mint(&caller, &initial_supply);\n    }\n\n    pub fn name(&self) -> String {\n        self.name.get_or_default()\n    }\n\n    pub fn symbol(&self) -> String {\n        self.symbol.get_or_default()\n    }\n\n    pub fn decimals(&self) -> u8 {\n        self.decimals.get_or_default()\n    }\n\n    pub fn total_supply(&self) -> U256 {\n        self.total_supply.get_or_default()\n    }\n}\n\nimpl Erc20 {\n   pub fn mint(&mut self, address: &Address, amount: &U256) {\n        self.balances.add(address, *amount);\n        self.total_supply.add(*amount);\n        \n        self.env().emit_event(Transfer {\n            from: None,\n            to: Some(*address),\n            amount: *amount\n        });\n    }\n}\n\n#[odra::event]\npub struct Transfer {\n    pub from: Option<Address>,\n    pub to: Option<Address>,\n    pub amount: U256\n}\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"L1")," - The first ",(0,a.kt)("inlineCode",{parentName:"li"},"impl")," block, marked as a module, contains functions defined in the ERC-20 standard."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"L3-L9")," - A constructor sets the token metadata and mints the initial supply."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"L28")," - The second ",(0,a.kt)("inlineCode",{parentName:"li"},"impl")," is not an Odra module; in other words, these functions will not be part of the contract's public interface."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"L29-L38")," - The ",(0,a.kt)("inlineCode",{parentName:"li"},"mint")," function is public, so, like in regular Rust code, it will be accessible from the outside. ",(0,a.kt)("inlineCode",{parentName:"li"},"mint()")," uses the notation ",(0,a.kt)("inlineCode",{parentName:"li"},"self.balances.add(address, *amount);"),", which is syntactic sugar for:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"use odra::UnwrapOrRevert;\n\nlet current_balance = self.balances.get(address).unwrap_or_default();\nlet new_balance = <U256 as OverflowingAdd>::overflowing_add(current_balance, current_balance).unwrap_or_revert(&self.env());\nself.balances.set(address, new_balance);\n")),(0,a.kt)("h3",{id:"core"},"Core"),(0,a.kt)("p",null,"To ensure comprehensive functionality, let's implement the remaining features such as ",(0,a.kt)("inlineCode",{parentName:"p"},"transfer"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"transfer_from"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"approve"),". Since they do not introduce any new concepts, we will present them without additional remarks."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust",metastring:"showLineNumbers title=erc20.rs",showLineNumbers:!0,title:"erc20.rs"},"#[odra::module]\nimpl Erc20 {\n    ...\n\n    pub fn transfer(&mut self, recipient: &Address, amount: &U256) {\n        let caller = self.env().caller();\n        self.raw_transfer(&caller, recipient, amount);\n    }\n\n    pub fn transfer_from(&mut self, owner: &Address, recipient: &Address, amount: &U256) {\n        let spender = self.env().caller();\n        self.spend_allowance(owner, &spender, amount);\n        self.raw_transfer(owner, recipient, amount);\n    }\n\n    pub fn approve(&mut self, spender: &Address, amount: &U256) {\n        let owner = self.env().caller();\n        self.allowances.set(&(owner, *spender), *amount);\n        self.env().emit_event(Approval {\n            owner,\n            spender: *spender,\n            value: *amount\n        });\n    }\n\n    pub fn balance_of(&self, address: &Address) -> U256 {\n        self.balances.get_or_default(&address)\n    }\n\n    pub fn allowance(&self, owner: &Address, spender: &Address) -> U256 {\n        self.allowances.get_or_default(&(*owner, *spender))\n    }\n}\n\nimpl Erc20 {\n    ...\n\n    fn raw_transfer(&mut self, owner: &Address, recipient: &Address, amount: &U256) {\n        let owner_balance = self.balances.get_or_default(&owner);\n        if *amount > owner_balance {\n            self.env().revert(Error::InsufficientBalance)\n        }\n        self.balances.set(owner, owner_balance - *amount);\n        self.balances.add(recipient, *amount);\n        self.env().emit_event(Transfer {\n            from: Some(*owner),\n            to: Some(*recipient),\n            amount: *amount\n        });\n    }\n\n    fn spend_allowance(&mut self, owner: &Address, spender: &Address, amount: &U256) {\n        let allowance = self.allowance(owner, spender);\n        if allowance < *amount {\n            self.env().revert(Error::InsufficientAllowance)\n        }\n        let new_allowance = allowance - *amount;\n        self.allowances\n            .set(&(*owner, *spender), new_allowance);\n        self.env().emit_event(Approval {\n            owner: *owner,\n            spender: *spender,\n            value: allowance - *amount\n        });\n    }\n}\n\n#[odra::event]\npub struct Approval {\n    pub owner: Address,\n    pub spender: Address,\n    pub value: U256\n}\n\n#[odra::odra_error]\npub enum Error {\n    InsufficientBalance = 1,\n    InsufficientAllowance = 2,\n}\n")),(0,a.kt)("p",null,"Now, compare the code we have written, with ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC20/ERC20.sol"},"Open Zeppelin code"),". Out of 10, how Solidity-ish is our implementation?"),(0,a.kt)("h3",{id:"test"},"Test"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust",metastring:"title=erc20.rs showLineNumbers",title:"erc20.rs",showLineNumbers:!0},'#[cfg(test)]\npub mod tests {\n    use super::*;\n    use odra::{casper_types::U256, host::{Deployer, HostEnv, HostRef}};\n\n    const NAME: &str = "Plascoin";\n    const SYMBOL: &str = "PLS";\n    const DECIMALS: u8 = 10;\n    const INITIAL_SUPPLY: u32 = 10_000;\n\n    fn setup() -> (HostEnv, Erc20HostRef) {\n        let env = odra_test::env();\n        (\n            env.clone(),\n            Erc20::deploy(\n                &env,\n                Erc20InitArgs {\n                    symbol: SYMBOL.to_string(),\n                    name: NAME.to_string(),\n                    decimals: DECIMALS,\n                    initial_supply: INITIAL_SUPPLY.into()\n                }\n            )\n        )\n    }\n\n    #[test]\n    fn initialization() {\n        // When deploy a contract with the initial supply.\n        let (env, erc20) = setup();\n\n        // Then the contract has the metadata set.\n        assert_eq!(erc20.symbol(), SYMBOL.to_string());\n        assert_eq!(erc20.name(), NAME.to_string());\n        assert_eq!(erc20.decimals(), DECIMALS);\n\n        // Then the total supply is updated.\n        assert_eq!(erc20.total_supply(), INITIAL_SUPPLY.into());\n\n        // Then a Transfer event was emitted.\n        assert!(env.emitted_event(\n            &erc20,\n            &Transfer {\n                from: None,\n                to: Some(env.get_account(0)),\n                amount: INITIAL_SUPPLY.into()\n            }\n        ));\n    }\n\n    #[test]\n    fn transfer_works() {\n        // Given a new contract.\n        let (env, mut erc20) = setup();\n\n        // When transfer tokens to a recipient.\n        let sender = env.get_account(0);\n        let recipient = env.get_account(1);\n        let amount = 1_000.into();\n        erc20.transfer(&recipient, &amount);\n\n        // Then the sender balance is deducted.\n        assert_eq!(\n            erc20.balance_of(&sender),\n            U256::from(INITIAL_SUPPLY) - amount\n        );\n\n        // Then the recipient balance is updated.\n        assert_eq!(erc20.balance_of(&recipient), amount);\n\n        // Then Transfer event was emitted.\n        assert!(env.emitted_event(\n            &erc20,\n            &Transfer {\n                from: Some(sender),\n                to: Some(recipient),\n                amount\n            }\n        ));\n    }\n\n    #[test]\n    fn transfer_error() {\n        // Given a new contract.\n        let (env, mut erc20) = setup();\n\n        // When the transfer amount exceeds the sender balance.\n        let recipient = env.get_account(1);\n        let amount = U256::from(INITIAL_SUPPLY) + U256::one();\n\n        // Then an error occurs.\n        assert!(erc20.try_transfer(&recipient, &amount).is_err());\n    }\n\n    #[test]\n    fn transfer_from_and_approval_work() {\n        let (env, mut erc20) = setup();\n\n        let (owner, recipient, spender) =\n            (env.get_account(0), env.get_account(1), env.get_account(2));\n        let approved_amount = 3_000.into();\n        let transfer_amount = 1_000.into();\n\n        assert_eq!(erc20.balance_of(&owner), U256::from(INITIAL_SUPPLY));\n\n        // Owner approves Spender.\n        erc20.approve(&spender, &approved_amount);\n\n        // Allowance was recorded.\n        assert_eq!(erc20.allowance(&owner, &spender), approved_amount);\n        assert!(env.emitted_event(\n            &erc20,\n            &Approval {\n                owner,\n                spender,\n                value: approved_amount\n            }\n        ));\n\n        // Spender transfers tokens from Owner to Recipient.\n        env.set_caller(spender);\n        erc20.transfer_from(&owner, &recipient, &transfer_amount);\n\n        // Tokens are transferred and allowance decremented.\n        assert_eq!(\n            erc20.balance_of(&owner),\n            U256::from(INITIAL_SUPPLY) - transfer_amount\n        );\n        assert_eq!(erc20.balance_of(&recipient), transfer_amount);\n        assert!(env.emitted_event(\n            &erc20,\n            &Approval {\n                owner,\n                spender,\n                value: approved_amount - transfer_amount\n            }\n        ));\n        assert!(env.emitted_event(\n            &erc20,\n            &Transfer {\n                from: Some(owner),\n                to: Some(recipient),\n                amount: transfer_amount\n            }\n        ));\n        // assert!(env.emitted(erc20.address(), "Transfer"));\n    }\n\n    #[test]\n    fn transfer_from_error() {\n        // Given a new instance.\n        let (env, mut erc20) = setup();\n\n        // When the spender\'s allowance is zero.\n        let (owner, spender, recipient) =\n            (env.get_account(0), env.get_account(1), env.get_account(2));\n        let amount = 1_000.into();\n        env.set_caller(spender);\n\n        // Then transfer fails.\n        assert_eq!(\n            erc20.try_transfer_from(&owner, &recipient, &amount),\n            Err(Error::InsufficientAllowance.into())\n        );\n    }\n}\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"L146")," - Alternatively, if you don't want to check the entire event, you may assert only its type.")),(0,a.kt)("h2",{id:"whats-next"},"What's next"),(0,a.kt)("p",null,"Having two modules: ",(0,a.kt)("inlineCode",{parentName:"p"},"Ownable")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Erc20"),", let's combine them, and create an ERC-20 on steroids."))}u.isMDXComponent=!0}}]);