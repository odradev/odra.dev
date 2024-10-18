"use strict";(self.webpackChunkodra_website=self.webpackChunkodra_website||[]).push([[54589],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=l(n),m=r,f=u["".concat(c,".").concat(m)]||u[m]||p[m]||o;return n?a.createElement(f,s(s({ref:t},d),{},{components:n})):a.createElement(f,s({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},23588:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var a=n(87462),r=(n(67294),n(3905));const o={sidebar_position:12,description:"How to deposit, withdraw and transfer"},s="Native token",i={unversionedId:"basics/native-token",id:"version-0.4.0/basics/native-token",title:"Native token",description:"How to deposit, withdraw and transfer",source:"@site/versioned_docs/version-0.4.0/basics/12-native-token.md",sourceDirName:"basics",slug:"/basics/native-token",permalink:"/docs/0.4.0/basics/native-token",draft:!1,tags:[],version:"0.4.0",lastUpdatedAt:1688045346,formattedLastUpdatedAt:"Jun 29, 2023",sidebarPosition:12,frontMatter:{sidebar_position:12,description:"How to deposit, withdraw and transfer"},sidebar:"tutorialSidebar",previous:{title:"Modules",permalink:"/docs/0.4.0/basics/modules"},next:{title:"Advanced",permalink:"/docs/0.4.0/category/advanced"}},c={},l=[{value:"Testing",id:"testing",level:2}],d={toc:l};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"native-token"},"Native token"),(0,r.kt)("p",null,"Different blockchains come with different implementations of their native tokens. Odra wraps it all for you\nin easy-to-use code. Let's write a simple example of a public wallet - a contract where anyone can deposit\ntheir funds and anyone can withdraw them:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust",metastring:'title="examples/src/docs/native_token.rs"',title:'"examples/src/docs/native_token.rs"'},"use odra::types::Balance;\nuse odra::contract_env;\n\n#[odra::module]\npub struct PublicWallet {\n}\n\n#[odra::module]\nimpl PublicWallet {\n    #[odra(payable)]\n    pub fn deposit(&mut self) {\n    }\n\n    pub fn withdraw(&mut self, amount: Balance) {\n        contract_env::transfer_tokens(contract_env::caller(), amount);\n    }\n}\n")),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"The code above works, but is dangerous and unfinished - besides allowing you to lose your funds to anyone, it doesn't make\nany checks. To keep the code simple, we skipped the part, where the contract checks if the transfer is\neven possible."),(0,r.kt)("p",{parentName:"admonition"},"To see a more reasonable example, check out ",(0,r.kt)("inlineCode",{parentName:"p"},"examples/src/tlw.rs")," in the odra main repository.")),(0,r.kt)("p",null,"You can see a new macro used here: ",(0,r.kt)("inlineCode",{parentName:"p"},"#[odra(payable)]")," - it will add all the code needed for a function to\nbe able to receive the funds. Additionally, we are using a new function from contract_env - ",(0,r.kt)("inlineCode",{parentName:"p"},"transfer_tokens"),".\nIt does exactly what you are expecting it to do - it will transfer native tokens from the contract to the\nspecified address."),(0,r.kt)("p",null,"We are also using the ",(0,r.kt)("inlineCode",{parentName:"p"},"Balance")," - an Odra type that wraps around the type that the underlying blockchain uses\nfor counting tokens."),(0,r.kt)("h2",{id:"testing"},"Testing"),(0,r.kt)("p",null,"To be able to test how many tokens a contract (or any address) has, ",(0,r.kt)("inlineCode",{parentName:"p"},"test_env")," comes with a function -\n",(0,r.kt)("inlineCode",{parentName:"p"},"token_balance"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust",metastring:'title="examples/src/docs/native_token.rs"',title:'"examples/src/docs/native_token.rs"'},"use odra::types::Balance;\nuse odra::test_env;\nuse super::PublicWalletDeployer;\n\n#[test]\nfn test_modules() {\n    let mut my_contract = PublicWalletDeployer::default();\n    assert_eq!(test_env::token_balance(my_contract.address()), Balance::zero());\n\n    my_contract.with_tokens(Balance::from(100)).deposit();\n    assert_eq!(test_env::token_balance(my_contract.address()), Balance::from(100));\n\n    my_contract.withdraw(Balance::from(25));\n    assert_eq!(test_env::token_balance(my_contract.address()), Balance::from(75));\n}\n")))}p.isMDXComponent=!0}}]);