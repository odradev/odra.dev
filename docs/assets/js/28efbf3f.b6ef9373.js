"use strict";(self.webpackChunkodra_website=self.webpackChunkodra_website||[]).push([[42240],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,h=p["".concat(l,".").concat(m)]||p[m]||u[m]||o;return n?r.createElement(h,s(s({ref:t},d),{},{components:n})):r.createElement(h,s({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},65114:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={sidebar_position:7,description:"How to write tests in Odra"},s="Testing",i={unversionedId:"basics/testing",id:"version-0.2.0/basics/testing",title:"Testing",description:"How to write tests in Odra",source:"@site/versioned_docs/version-0.2.0/basics/07-testing.md",sourceDirName:"basics",slug:"/basics/testing",permalink:"/docs/0.2.0/basics/testing",draft:!1,tags:[],version:"0.2.0",lastUpdatedAt:1687764750,formattedLastUpdatedAt:"Jun 26, 2023",sidebarPosition:7,frontMatter:{sidebar_position:7,description:"How to write tests in Odra"},sidebar:"defaultSidebar",previous:{title:"Host Communication",permalink:"/docs/0.2.0/basics/communicating-with-host"},next:{title:"Errors",permalink:"/docs/0.2.0/basics/errors"}},l={},c=[{value:"Test env",id:"test-env",level:2},{value:"Deployer",id:"deployer",level:2},{value:"What&#39;s next",id:"whats-next",level:2}],d={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"testing"},"Testing"),(0,a.kt)("p",null,"Thanks to the Odra framework, you can test your code in any way you are used to. This means you can write\nregular Rust unit and integration tests. Have a look at how we test the Dog Contract we created in the\nprevious article:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust",metastring:'title="examples/src/docs/list.rs"',title:'"examples/src/docs/list.rs"'},'use odra::{Variable, List};\n\n#[cfg(test)]\nmod tests {\n    use super::DogContract3Deployer;\n\n    #[test]\n    fn init_test() {\n        let mut dog_contract = DogContract3Deployer::init("Mantus".to_string());\n        assert_eq!(dog_contract.walks_amount(), 0);\n        assert_eq!(dog_contract.walks_total_length(), 0);\n        dog_contract.walk_the_dog(5);\n        dog_contract.walk_the_dog(10);\n        assert_eq!(dog_contract.walks_amount(), 2);\n        assert_eq!(dog_contract.walks_total_length(), 15);\n    }\n}\n')),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"#[odra(module)]")," macro created a Deployer code for us, which will deploy the contract on the\nVM:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust",metastring:'title="examples/src/docs/list.rs"',title:'"examples/src/docs/list.rs"'},'let mut dog_contract = DogContract3Deployer::init("Mantus".to_string());\n')),(0,a.kt)("p",null,"From now on, we can use ",(0,a.kt)("inlineCode",{parentName:"p"},"dog_contract")," to interact with our deployed contract - in particular, all\n",(0,a.kt)("inlineCode",{parentName:"p"},"pub")," functions from the impl section that was annotated with a macro are available to us:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust",metastring:'title="examples/src/docs/list.rs"',title:'"examples/src/docs/list.rs"'},"// Impl\npub fn walk_the_dog(&mut self, length: u32) {\n    self.walks.push(length);\n}\n\n...\n\n// Test\ndog_contract.walk_the_dog(5);\n")),(0,a.kt)("h2",{id:"test-env"},"Test env"),(0,a.kt)("p",null,"Odra gives us some additional functions that we can use to communicate with the host (outside the contract context)\nand to configure how the contracts are deployed and called. Let's revisit the example from the previous\narticle about host communication and implement the tests that prove it works:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust",metastring:'title="examples/src/docs/testing.rs"',title:'"examples/src/docs/testing.rs"'},'#[cfg(test)]\nmod tests {\n    use super::TestingContractDeployer;\n\n    #[test]\n    fn test_env() {\n        let testing_contract = TestingContractDeployer::init("MyContract".to_string());\n        let creator = testing_contract.created_by();\n        odra::test_env::set_caller(odra::test_env::get_account(1));\n        let testing_contract2 = TestingContractDeployer::init("MyContract2".to_string());\n        let creator2 = testing_contract2.created_by();\n        assert!(creator != creator2);\n    }\n}\n')),(0,a.kt)("p",null,"In the code above, we are deploying two instances of the same contract, but we're using ",(0,a.kt)("inlineCode",{parentName:"p"},"odra::test_env::set_caller"),"\nto change the caller - so the Address which is deploying the contract. This changes the result of the ",(0,a.kt)("inlineCode",{parentName:"p"},"odra::contract_env::caller()"),"\nthe function we are calling inside the contract."),(0,a.kt)("p",null,"Each test env comes with a set of functions that will let you write better tests:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"fn set_caller(address: Address)")," - you've seen it in action just now"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"fn token_balance(address: Address) -> Balance")," - it returns the balance of the account associated with the given address"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"fn advance_block_time_by(seconds: BlockTime)")," - it increases the current value of block_time"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"fn get_account(n: usize) -> Address")," - it returns an nth address that was prepared for you by Odra in advance;\nby default, you start with the 0th account"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"fn assert_exception<F, E>(err: E, block: F)")," - it executes the ",(0,a.kt)("inlineCode",{parentName:"li"},"block")," code and expects ",(0,a.kt)("inlineCode",{parentName:"li"},"err")," to happen"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"fn get_event<T: MockVMType + OdraEvent>(address: Address, index: i32) -> Result<T, EventError>")," - returns\nthe event emitted by the contract")),(0,a.kt)("p",null,"Again, we'll see those used in the next articles."),(0,a.kt)("h2",{id:"deployer"},"Deployer"),(0,a.kt)("p",null,"You may be wondering what is the ",(0,a.kt)("inlineCode",{parentName:"p"},"TestingContractDeployer")," and where did it come from.\nIt is a piece of code generated automatically for you, thanks to the ",(0,a.kt)("inlineCode",{parentName:"p"},"#[odra::module]")," macro.\nIf you used the ",(0,a.kt)("inlineCode",{parentName:"p"},"#[odra(init)]")," on one of the methods, it will be the constructor of your contract.\nOdra will make sure that it is called only once, so you can use it to initialize your data structures etc."),(0,a.kt)("p",null,"If you do not provide the init method, you can deploy the contract using ",(0,a.kt)("inlineCode",{parentName:"p"},"::default()")," method.\nIn the end, you will get a ",(0,a.kt)("inlineCode",{parentName:"p"},"Ref")," instance (in our case the ",(0,a.kt)("inlineCode",{parentName:"p"},"TestingContractRef"),") which reimplements all\nthe methods you defined in the contract, but executes them on a blockchain!"),(0,a.kt)("p",null,"To learn more about the ",(0,a.kt)("inlineCode",{parentName:"p"},"Ref")," contract, visit the ",(0,a.kt)("a",{parentName:"p",href:"/docs/0.2.0/basics/cross-calls"},"Cross calls")," article."),(0,a.kt)("h2",{id:"whats-next"},"What's next"),(0,a.kt)("p",null,"We take a look at how Odra handles errors!"))}u.isMDXComponent=!0}}]);