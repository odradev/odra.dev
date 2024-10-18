"use strict";(self.webpackChunkodra_website=self.webpackChunkodra_website||[]).push([[35973],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=a.createContext({}),p=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(i.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(t),m=r,f=d["".concat(i,".").concat(m)]||d[m]||u[m]||o;return t?a.createElement(f,s(s({ref:n},c),{},{components:t})):a.createElement(f,s({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,s=new Array(o);s[0]=d;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var p=2;p<o;p++)s[p]=t[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},64021:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=t(87462),r=(t(67294),t(3905));const o={sidebar_position:3},s="ERC-20",l={unversionedId:"tutorials/erc20",id:"version-0.6.0/tutorials/erc20",title:"ERC-20",description:"It's time for something that every smart contract developer has done at least once. Let's try to implement Erc20 standard. Of course, we are going to use the Odra Framework.",source:"@site/versioned_docs/version-0.6.0/tutorials/erc20.md",sourceDirName:"tutorials",slug:"/tutorials/erc20",permalink:"/docs/0.6.0/tutorials/erc20",draft:!1,tags:[],version:"0.6.0",lastUpdatedAt:1699367878,formattedLastUpdatedAt:"Nov 7, 2023",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Ownable",permalink:"/docs/0.6.0/tutorials/ownable"},next:{title:"OwnedToken",permalink:"/docs/0.6.0/tutorials/owned-token"}},i={},p=[{value:"Framework features",id:"framework-features",level:2},{value:"Code",id:"code",level:2},{value:"Module definition",id:"module-definition",level:2},{value:"Metadata",id:"metadata",level:3},{value:"Core",id:"core",level:3},{value:"Test",id:"test",level:3},{value:"What&#39;s next",id:"whats-next",level:2}],c={toc:p};function u(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"erc-20"},"ERC-20"),(0,r.kt)("p",null,"It's time for something that every smart contract developer has done at least once. Let's try to implement ",(0,r.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-20"},"Erc20")," standard. Of course, we are going to use the Odra Framework. "),(0,r.kt)("p",null,"The ERC-20 standard establishes a uniform specification for fungible tokens. This implies that each token possesses an attribute that renders it indistinguishable from another token of the same type and value. "),(0,r.kt)("h2",{id:"framework-features"},"Framework features"),(0,r.kt)("p",null,"A module we will write in a minute, will help you master a few Odra features:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"advanced storage - key-value pairs, "),(0,r.kt)("li",{parentName:"ul"},"Odra types like ",(0,r.kt)("inlineCode",{parentName:"li"},"Address")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"Balance"),", "),(0,r.kt)("li",{parentName:"ul"},"advanced events assertion.")),(0,r.kt)("h2",{id:"code"},"Code"),(0,r.kt)("p",null,"Our module has a pretty complex storage layout in comparison to the previous example."),(0,r.kt)("p",null,"We need to store the following data:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Immutable metadata - name, symbol and decimals."),(0,r.kt)("li",{parentName:"ol"},"Total supply."),(0,r.kt)("li",{parentName:"ol"},"Users' balances."),(0,r.kt)("li",{parentName:"ol"},"Allowances - in other words: who is allowed to spend whose tokens on his/her behalf.")),(0,r.kt)("h2",{id:"module-definition"},"Module definition"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust",metastring:"showLineNumbers",showLineNumbers:!0},"#[odra::module(events = [Transfer, Approval])]\npub struct Erc20 {\n    decimals: Variable<u8>,\n    symbol: Variable<String>,\n    name: Variable<String>,\n    total_supply: Variable<Balance>,\n    balances: Mapping<Address, Balance>,\n    allowances: Mapping<Address, Mapping<Address, Balance>>\n}\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"L6")," - For the first time, we need to store key-value pairs. In order to do that, we use ",(0,r.kt)("inlineCode",{parentName:"li"},"Mapping"),". The name is taken after Solidity's native type ",(0,r.kt)("inlineCode",{parentName:"li"},"mapping"),". You may notice the ",(0,r.kt)("inlineCode",{parentName:"li"},"balances")," property maps ",(0,r.kt)("inlineCode",{parentName:"li"},"Address")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"Balance"),". If you deal with addresses or you operate on tokens, you should always choose ",(0,r.kt)("inlineCode",{parentName:"li"},"Address")," over ",(0,r.kt)("inlineCode",{parentName:"li"},"String")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"Balance")," over any numeric type. Each blockchain may handle these values differently. Using Odra types guarantees proper behavior on each target platform."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"L7")," - Odra allows nested ",(0,r.kt)("inlineCode",{parentName:"li"},"Mapping"),"s, what we utilize to store allowances.")),(0,r.kt)("h3",{id:"metadata"},"Metadata"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust",metastring:"showLineNumbers",showLineNumbers:!0},"#[odra::module]\nimpl Erc20 {\n    #[odra(init)]\n    pub fn init(&mut self, name: String, symbol: String, decimals: u8, initial_supply: &Balance) {\n        let caller = contract_env::caller();\n        self.name.set(name);\n        self.symbol.set(symbol);\n        self.decimals.set(decimals);\n        self.mint(&caller, initial_supply);\n    }\n\n    pub fn name(&self) -> String {\n        self.name.get_or_default()\n    }\n\n    pub fn symbol(&self) -> String {\n        self.symbol.get_or_default()\n    }\n\n    pub fn decimals(&self) -> u8 {\n        self.decimals.get_or_default()\n    }\n\n    pub fn total_supply(&self) -> Balance {\n        self.total_supply.get_or_default()\n    }\n}\n\nimpl Erc20 {\n    pub fn mint(&mut self, address: &Address, amount: &Balance) {\n        self.balances.add(address, *amount);\n        self.total_supply.add(amount);\n        Transfer {\n            from: None,\n            to: Some(*address),\n            amount: *amount\n        }\n        .emit();\n    }\n}\n\n#[derive(Event, PartialEq, Eq, Debug)]\npub struct Transfer {\n    pub from: Option<Address>,\n    pub to: Option<Address>,\n    pub amount: Balance\n}\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"L1")," - The first ",(0,r.kt)("inlineCode",{parentName:"li"},"impl")," block, marked as a module, contains functions defined in the ERC-20 standard."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"L3-L10")," - A constructor sets the token metadata and mints the initial supply."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"L12-L14")," - Getter functions are straightforward, but there is one worth-mentioning subtleness. In the ",(0,r.kt)("inlineCode",{parentName:"li"},"Ownable")," example, we used the ",(0,r.kt)("inlineCode",{parentName:"li"},"get()")," function returning an ",(0,r.kt)("inlineCode",{parentName:"li"},"Option<T>"),". If the type implements ",(0,r.kt)("inlineCode",{parentName:"li"},"Default")," trait, you can call ",(0,r.kt)("inlineCode",{parentName:"li"},"get_or_default()")," function and the contract does not fail even if the value is not initialized."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"L29")," - The second ",(0,r.kt)("inlineCode",{parentName:"li"},"impl")," is not an odra module, in other words these function will not be a part of contract's ABI."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"L30-L39")," - Mint function is public, so like in a regular rust code will be accessible from the outside. ",(0,r.kt)("inlineCode",{parentName:"li"},"mint()")," use notation ",(0,r.kt)("inlineCode",{parentName:"li"},"self.balances.add(&address, amount);"),", which it is syntactic sugar for:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"let current_balance = self.balances.get(&address).unwrap_or_default();\nlet new_balance = current_balance.overflowing_add(current_balance).unwrap_or_revert();\nself.balances.set(&address, new_balance);\n")),(0,r.kt)("h3",{id:"core"},"Core"),(0,r.kt)("p",null,"For the sake of completeness, let's implement the remaining functionalities like ",(0,r.kt)("inlineCode",{parentName:"p"},"transfer"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"transfer_from"),", or ",(0,r.kt)("inlineCode",{parentName:"p"},"approve"),". They are not introducing any new concepts, so we leave them without additional remarks."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust",metastring:"title=erc20.rs",title:"erc20.rs"},"#[odra::module]\nimpl Erc20 {\n    ...\n    pub fn transfer(&mut self, recipient: &Address, amount: &Balance) {\n        let caller = contract_env::caller();\n        self.raw_transfer(&caller, recipient, amount);\n    }\n\n    pub fn transfer_from(&mut self, owner: &Address, recipient: &Address, amount: &Balance) {\n        let spender = contract_env::caller();\n        self.spend_allowance(owner, &spender, amount);\n        self.raw_transfer(owner, recipient, amount);\n    }\n\n    pub fn approve(&mut self, spender: &Address, amount: &Balance) {\n        let owner = contract_env::caller();\n        self.allowances.get_instance(&owner).set(spender, *amount);\n        Approval {\n            owner,\n            spender: *spender,\n            value: *amount\n        }\n        .emit();\n    }\n\n    pub fn balance_of(&self, address: &Address) -> Balance {\n        self.balances.get_or_default(&address)\n    }\n\n    pub fn allowance(&self, owner: &Address, spender: &Address) -> Balance {\n        self.allowances.get_instance(owner).get_or_default(spender)\n    }\n}\n\nimpl Erc20 {\n    ...\n\n    fn raw_transfer(&mut self, owner: &Address, recipient: &Address, amount: &Balance) {\n        let owner_balance = self.balances.get_or_default(&owner);\n        if *amount > owner_balance {\n            contract_env::revert(Error::InsufficientBalance)\n        }\n        self.balances.set(owner, owner_balance - *amount);\n        self.balances.add(recipient, *amount);\n        Transfer {\n            from: Some(*owner),\n            to: Some(*recipient),\n            amount: *amount\n        }\n        .emit();\n    }\n\n    fn spend_allowance(&mut self, owner: &Address, spender: &Address, amount: &Balance) {\n        let allowance = self.allowances.get_instance(owner).get_or_default(spender);\n        if allowance < *amount {\n            contract_env::revert(Error::InsufficientAllowance)\n        }\n        let new_allowance = allowance - *amount;\n        self.allowances\n            .get_instance(owner)\n            .set(spender, new_allowance);\n        Approval {\n            owner: *owner,\n            spender: *spender,\n            value: allowance - *amount\n        }\n        .emit();\n    }\n}\n\n#[derive(Event, PartialEq, Eq, Debug)]\npub struct Approval {\n    pub owner: Address,\n    pub spender: Address,\n    pub value: U256\n}\n\nexecution_error! {\n    pub enum Error {\n        InsufficientBalance => 1,\n        InsufficientAllowance => 2,\n    }\n}\n")),(0,r.kt)("p",null,"Now, compare the code we have written, with ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC20/ERC20.sol"},"Open Zeppelin code"),". Out of 10, how Solidity-ish is our implementation?"),(0,r.kt)("h3",{id:"test"},"Test"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust",metastring:"title=erc20.rs showLineNumbers",title:"erc20.rs",showLineNumbers:!0},'#[cfg(test)]\npub mod tests {\n    use super::{Approval, Erc20Deployer, Erc20Ref, Error, Transfer};\n    use odra::{assert_events, test_env, types::U256};\n\n    pub const NAME: &str = "Plascoin";\n    pub const SYMBOL: &str = "PLS";\n    pub const DECIMALS: u8 = 10;\n    pub const INITIAL_SUPPLY: u32 = 10_000;\n\n    pub fn setup() -> Erc20Ref {\n        Erc20Deployer::init(\n            String::from(NAME),\n            String::from(SYMBOL),\n            DECIMALS,\n            INITIAL_SUPPLY.into()\n        )\n    }\n\n    #[test]\n    fn initialization() {\n        let erc20 = setup();\n\n        assert_eq!(&erc20.symbol(), SYMBOL);\n        assert_eq!(&erc20.name(), NAME);\n        assert_eq!(erc20.decimals(), DECIMALS);\n        assert_eq!(erc20.total_supply(), INITIAL_SUPPLY.into());\n        assert_events!(\n            erc20,\n            Transfer {\n                from: None,\n                to: Some(test_env::get_account(0)),\n                amount: INITIAL_SUPPLY.into()\n            }\n        );\n    }\n\n    #[test]\n    fn transfer_works() {\n        let mut erc20 = setup();\n        let (sender, recipient) = (test_env::get_account(0), test_env::get_account(1));\n        let amount = 1_000.into();\n\n        erc20.transfer(&recipient, &amount);\n\n        assert_eq!(\n            erc20.balance_of(&sender),\n            U256::from(INITIAL_SUPPLY) - amount\n        );\n        assert_eq!(erc20.balance_of(&recipient), amount);\n        assert_events!(\n            erc20,\n            Transfer {\n                from: Some(sender),\n                to: Some(recipient),\n                amount\n            }\n        );\n    }\n\n    #[test]\n    fn transfer_error() {\n        let mut erc20 = setup();\n        let recipient = test_env::get_account(1);\n        let amount = U256::from(INITIAL_SUPPLY) + U256::from(1);\n\n        test_env::assert_exception(Error::InsufficientBalance, || {\n            erc20.transfer(&recipient, &amount)\n        });\n    }\n\n    #[test]\n    fn transfer_from_and_approval_work() {\n        let mut erc20 = setup();\n        let (owner, recipient, spender) = (\n            test_env::get_account(0),\n            test_env::get_account(1),\n            test_env::get_account(2)\n        );\n        let approved_amount = 3_000.into();\n        let transfer_amount = 1_000.into();\n\n        // Owner approves Spender.\n        erc20.approve(&spender, &approved_amount);\n\n        // Allowance was recorded.\n        assert_eq!(erc20.allowance(&owner, &spender), approved_amount);\n        assert_events!(\n            erc20,\n            Approval {\n                owner,\n                spender,\n                value: approved_amount\n            }\n        );\n\n        // Spender transfers tokens from Owner to Recipient.\n        test_env::set_caller(spender);\n        erc20.transfer_from(&owner, &recipient, &transfer_amount);\n\n        // Tokens are transferred and allowance decremented.\n        assert_eq!(\n            erc20.balance_of(&owner),\n            U256::from(INITIAL_SUPPLY) - transfer_amount\n        );\n        assert_eq!(erc20.balance_of(&recipient), transfer_amount);\n        assert_events!(\n            erc20,\n            Approval {\n                owner,\n                spender,\n                value: approved_amount - transfer_amount\n            },\n            Transfer {\n                from: Some(owner),\n                to: Some(recipient),\n                amount: transfer_amount\n            }\n        );\n        \n        assert_events!(erc20, Approval, Transfer);\n    }\n\n    #[test]\n    fn transfer_from_error() {\n        let mut erc20 = setup();\n        let (owner, spender) = (test_env::get_account(0), test_env::get_account(1));\n        let amount = 1_000.into();\n\n        test_env::set_caller(spender);\n        test_env::assert_exception(Error::InsufficientAllowance, || {\n            erc20.transfer_from(&owner, &spender, &amount)\n        });\n    }\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"L111-123")," - ",(0,r.kt)("inlineCode",{parentName:"li"},"assert_events!()")," macro accepts multiple events. You must pass them in the order they were emitted. "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"L125")," - Alternatively, if you don't want to check the entire event, you may assert only its type.")),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"You can not mix both approaches, you pass full events or types only.")),(0,r.kt)("h2",{id:"whats-next"},"What's next"),(0,r.kt)("p",null,"Having two modules: ",(0,r.kt)("inlineCode",{parentName:"p"},"Ownable")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Erc20"),", let's combine them, and create an ERC-20 on steroids."))}u.isMDXComponent=!0}}]);