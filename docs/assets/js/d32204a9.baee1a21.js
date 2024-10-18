"use strict";(self.webpackChunkodra_website=self.webpackChunkodra_website||[]).push([[32720],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>c});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=d(n),c=r,w=m["".concat(s,".").concat(c)]||m[c]||p[c]||i;return n?a.createElement(w,o(o({ref:t},u),{},{components:n})):a.createElement(w,o({ref:t},u))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},61425:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var a=n(87462),r=(n(67294),n(3905));const i={sidebar_position:1},o="Ownable",l={unversionedId:"tutorials/ownable",id:"version-1.3.0/tutorials/ownable",title:"Ownable",description:"In this tutorial, we will write a simple module that allows us to set its owner. Later, it can be reused to limit access to the contract's critical features.",source:"@site/versioned_docs/version-1.3.0/tutorials/ownable.md",sourceDirName:"tutorials",slug:"/tutorials/ownable",permalink:"/docs/1.3.0/tutorials/ownable",draft:!1,tags:[],version:"1.3.0",lastUpdatedAt:1727085590,formattedLastUpdatedAt:"Sep 23, 2024",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Tutorials",permalink:"/docs/1.3.0/category/tutorials"},next:{title:"ERC-20",permalink:"/docs/1.3.0/tutorials/erc20"}},s={},d=[{value:"Framework features",id:"framework-features",level:2},{value:"Code",id:"code",level:2},{value:"Define a module",id:"define-a-module",level:3},{value:"Init the module",id:"init-the-module",level:3},{value:"Features implementation",id:"features-implementation",level:3},{value:"Test",id:"test",level:3},{value:"Summary",id:"summary",level:2},{value:"What&#39;s next",id:"whats-next",level:2}],u={toc:d};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"ownable"},"Ownable"),(0,r.kt)("p",null,"In this tutorial, we will write a simple module that allows us to set its owner. Later, it can be reused to limit access to the contract's critical features."),(0,r.kt)("h2",{id:"framework-features"},"Framework features"),(0,r.kt)("p",null,"A module we will write in a minute, will help you master a few Odra features:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"storing a single value,"),(0,r.kt)("li",{parentName:"ul"},"defining a constructor,"),(0,r.kt)("li",{parentName:"ul"},"error handling,"),(0,r.kt)("li",{parentName:"ul"},"defining and emitting ",(0,r.kt)("inlineCode",{parentName:"li"},"events"),"."),(0,r.kt)("li",{parentName:"ul"},"registering a contact in a test environment,"),(0,r.kt)("li",{parentName:"ul"},"interactions with the test environment,"),(0,r.kt)("li",{parentName:"ul"},"assertions (value, events, errors assertions).")),(0,r.kt)("h2",{id:"code"},"Code"),(0,r.kt)("p",null,"Before we write any code, we define functionalities we would like to implement."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Module has an initializer that should be called once. "),(0,r.kt)("li",{parentName:"ol"},"Only the current owner can set a new owner."),(0,r.kt)("li",{parentName:"ol"},"Read the current owner."),(0,r.kt)("li",{parentName:"ol"},"A function that fails if called by a non-owner account.")),(0,r.kt)("h3",{id:"define-a-module"},"Define a module"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust",metastring:"title=ownable.rs showLineNumbers",title:"ownable.rs",showLineNumbers:!0},"use odra::prelude::*;\nuse odra::{Address, Var};\n\n#[odra::module(events = [OwnershipChanged])]\npub struct Ownable {\n    owner: Var<Option<Address>>\n}\n")),(0,r.kt)("p",null,"That was easy, but it is crucial to understand the basics before we move on."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"L4")," - Firstly, we need to create a struct called ",(0,r.kt)("inlineCode",{parentName:"li"},"Ownable")," and apply ",(0,r.kt)("inlineCode",{parentName:"li"},"#[odra::module(events = [OwnershipChanged])]")," attribute to it. The ",(0,r.kt)("inlineCode",{parentName:"li"},"events")," attribute is optional but informs the Odra toolchain about the events that will be emitted by the module and includes them in the contract's metadata. ",(0,r.kt)("inlineCode",{parentName:"li"},"OwnershipChanged")," is a type that will be defined later."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"L6")," - Then we can define the layout of our module. It is extremely simple - just a single state value. What is most important is that you can never leave a raw type; you must always wrap it with ",(0,r.kt)("inlineCode",{parentName:"li"},"Var"),".")),(0,r.kt)("h3",{id:"init-the-module"},"Init the module"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust",metastring:"title=ownable.rs showLineNumbers",title:"ownable.rs",showLineNumbers:!0},"#[odra::module]\nimpl Ownable {\n    pub fn init(&mut self, owner: Address) {\n        if self.owner.get_or_default().is_some() {\n            self.env().revert(Error::OwnerIsAlreadyInitialized)\n        }\n\n        self.owner.set(Some(owner));\n        \n        self.env().emit_event(OwnershipChanged {\n            prev_owner: None,\n            new_owner: owner\n        });\n    }\n}\n\n#[odra::odra_error]\npub enum Error {\n    OwnerIsAlreadyInitialized = 1,\n}\n\n#[odra::event]\npub struct OwnershipChanged {\n    pub prev_owner: Option<Address>,\n    pub new_owner: Address\n}\n")),(0,r.kt)("p",null,"Ok, we have done a couple of things, let's analyze them one by one:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"L1")," - The ",(0,r.kt)("inlineCode",{parentName:"li"},"impl")," should be an Odra module, so add ",(0,r.kt)("inlineCode",{parentName:"li"},"#[odra::module]"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"L3")," - The ",(0,r.kt)("inlineCode",{parentName:"li"},"init")," function is a constructor. This matters if we would like to deploy the ",(0,r.kt)("inlineCode",{parentName:"li"},"Ownable")," module as a standalone contract."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"L17-L20")," - Before we set a new owner, we must assert there was no owner before and raise an error otherwise. For that purpose, we defined an ",(0,r.kt)("inlineCode",{parentName:"li"},"Error")," enum. Notice that the ",(0,r.kt)("inlineCode",{parentName:"li"},"#[odra::odra_error]")," attribute is applied to the enum. It generates, among others, the required ",(0,r.kt)("inlineCode",{parentName:"li"},"Into<odra::OdraError>")," binding."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"L4-L6")," - If the owner has been set already, we call ",(0,r.kt)("inlineCode",{parentName:"li"},"ContractEnv::revert()")," function with an ",(0,r.kt)("inlineCode",{parentName:"li"},"Error::OwnerIsAlreadyInitialized")," argument. "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"L8")," - Then we write the owner passed as an argument to the storage. To do so, we call the ",(0,r.kt)("inlineCode",{parentName:"li"},"set()")," on ",(0,r.kt)("inlineCode",{parentName:"li"},"Var"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"L22-L26")," - Once the owner is set, we would like to inform the outside world. The first step is to define an event struct. The struct annotated with ",(0,r.kt)("inlineCode",{parentName:"li"},"#[odra::event]")," attribute."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"L10")," - Finally, call ",(0,r.kt)("inlineCode",{parentName:"li"},"ContractEnv::emit_event()")," passing the ",(0,r.kt)("inlineCode",{parentName:"li"},"OwnershipChanged")," instance to the function. Hence, we set the first owner, we set the ",(0,r.kt)("inlineCode",{parentName:"li"},"prev_owner")," value to ",(0,r.kt)("inlineCode",{parentName:"li"},"None"),". ")),(0,r.kt)("h3",{id:"features-implementation"},"Features implementation"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust",metastring:"title=ownable.rs showLineNumbers",title:"ownable.rs",showLineNumbers:!0},"#[odra::module]\nimpl Ownable {\n    ...\n\n    pub fn ensure_ownership(&self, address: &Address) {\n        if Some(address) != self.owner.get_or_default().as_ref() {\n            self.env().revert(Error::NotOwner)\n        }\n    }\n\n    pub fn change_ownership(&mut self, new_owner: &Address) {\n        self.ensure_ownership(&self.env().caller());\n        let current_owner = self.get_owner();\n        self.owner.set(Some(*new_owner));\n        self.env().emit_event(OwnershipChanged {\n            prev_owner: Some(current_owner),\n            new_owner: *new_owner\n        });\n    }\n\n    pub fn get_owner(&self) -> Address {\n        match self.owner.get_or_default() {\n            Some(owner) => owner,\n            None => self.env().revert(Error::OwnerIsNotInitialized)\n        }\n    }\n}\n\n#[odra::odra_error]\npub enum Error {\n    NotOwner = 1,\n    OwnerIsAlreadyInitialized = 2,\n    OwnerIsNotInitialized = 3,\n}\n")),(0,r.kt)("p",null,"The above implementation relies on the concepts we have already used in this tutorial, so it should be easy for you to get along."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"L7,L31")," - ",(0,r.kt)("inlineCode",{parentName:"li"},"ensure_ownership()")," reads the current owner and reverts if it does not match the input ",(0,r.kt)("inlineCode",{parentName:"li"},"Address"),". Also, we need to update our ",(0,r.kt)("inlineCode",{parentName:"li"},"Error")," enum by adding a new variant ",(0,r.kt)("inlineCode",{parentName:"li"},"NotOwner"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"L11")," - The function defined above can be reused in the ",(0,r.kt)("inlineCode",{parentName:"li"},"change_ownership()")," implementation. We pass to it the current caller, using the ",(0,r.kt)("inlineCode",{parentName:"li"},"ContractEnv::caller()")," function. Then we update the state and emit ",(0,r.kt)("inlineCode",{parentName:"li"},"OwnershipChanged"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"L21,L33")," - Lastly, a getter function. Read the owner from storage, if the getter is called on an uninitialized module, it should revert with a new ",(0,r.kt)("inlineCode",{parentName:"li"},"Error")," variant ",(0,r.kt)("inlineCode",{parentName:"li"},"OwnerIsNotInitialized"),". There is one worth-mentioning subtlety: ",(0,r.kt)("inlineCode",{parentName:"li"},"Var::get()")," function returns ",(0,r.kt)("inlineCode",{parentName:"li"},"Option<T>"),". If the type implements the ",(0,r.kt)("inlineCode",{parentName:"li"},"Default")," trait, you can call the ",(0,r.kt)("inlineCode",{parentName:"li"},"get_or_default()")," function, and the contract does not fail even if the value is not initialized. As the ",(0,r.kt)("inlineCode",{parentName:"li"},"owner")," is of type ",(0,r.kt)("inlineCode",{parentName:"li"},"Option<Address>")," the ",(0,r.kt)("inlineCode",{parentName:"li"},"Var::get()")," would return ",(0,r.kt)("inlineCode",{parentName:"li"},"Option<Option<Address>>"),", we use ",(0,r.kt)("inlineCode",{parentName:"li"},"Var::get_or_default()")," instead.")),(0,r.kt)("h3",{id:"test"},"Test"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust",metastring:"title=ownable.rs showLineNumbers",title:"ownable.rs",showLineNumbers:!0},"#[cfg(test)]\nmod tests {\n    use super::*;\n    use odra::host::{Deployer, HostEnv, HostRef};\n\n    fn setup() -> (OwnableHostRef, HostEnv, Address) {\n        let env: HostEnv = odra_test::env();\n        let init_args = OwnableInitArgs {\n            owner: env.get_account(0)\n        };\n        (Ownable::deploy(&env, init_args), env.clone(), env.get_account(0))\n    }\n\n    #[test]\n    fn initialization_works() {\n        let (ownable, env, owner) = setup();\n        assert_eq!(ownable.get_owner(), owner);\n       \n        env.emitted_event(\n            &ownable,\n            &OwnershipChanged {\n                prev_owner: None,\n                new_owner: owner\n            }\n        );\n    }\n\n    #[test]\n    fn owner_can_change_ownership() {\n        let (mut ownable, env, owner) = setup();\n        let new_owner = env.get_account(1);\n        \n        env.set_caller(owner);\n        ownable.change_ownership(&new_owner);\n        assert_eq!(ownable.get_owner(), new_owner);\n\n        env.emitted_event(\n            &ownable,\n            &OwnershipChanged {\n                prev_owner: Some(owner),\n                new_owner\n            }\n        );\n    }\n\n    #[test]\n    fn non_owner_cannot_change_ownership() {\n        let (mut ownable, env, _) = setup();\n        let new_owner = env.get_account(1);\n        ownable.change_ownership(&new_owner);\n        \n        assert_eq!(\n            ownable.try_change_ownership(&new_owner), \n            Err(Error::NotOwner.into())\n        );\n    }\n}\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"L6")," - Each test case starts with the same initialization process, so for convenience, we have defined the ",(0,r.kt)("inlineCode",{parentName:"li"},"setup()")," function, which we call in the first statement of each test. Take a look at the signature: ",(0,r.kt)("inlineCode",{parentName:"li"},"fn setup() -> (OwnableHostRef, HostEnv, Address)"),". ",(0,r.kt)("inlineCode",{parentName:"li"},"OwnableHostRef")," is a contract reference generated by Odra. This reference allows us to call all the defined entrypoints, namely: ",(0,r.kt)("inlineCode",{parentName:"li"},"ensure_ownership()"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"change_ownership()"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"get_owner()"),", but not ",(0,r.kt)("inlineCode",{parentName:"li"},"init()"),", which is a constructor."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"L7-L11")," - The starting point of every test is getting an instance of ",(0,r.kt)("inlineCode",{parentName:"li"},"HostEnv")," by calling ",(0,r.kt)("inlineCode",{parentName:"li"},"odra_test::env()"),". Our function returns a triple: a contract ref, an env, and an address (the initial owner). Odra's ",(0,r.kt)("inlineCode",{parentName:"li"},"#[odra::module]")," attribute implements a ",(0,r.kt)("inlineCode",{parentName:"li"},"odra::host::Deployer")," for ",(0,r.kt)("inlineCode",{parentName:"li"},"Ownable"),", and ",(0,r.kt)("inlineCode",{parentName:"li"},"OwnableInitArgs")," that we pass as the second argument of the ",(0,r.kt)("inlineCode",{parentName:"li"},"odra::host::Deployer::deploy()")," function. Lastly, the module needs an owner. The easiest way is to take one from the ",(0,r.kt)("inlineCode",{parentName:"li"},"HostEnv"),". We choose the address of first account (which is the default one). "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"L14")," - It is time to define the first test. As you see, it is a regular Rust test."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"L16-17")," - Using the ",(0,r.kt)("inlineCode",{parentName:"li"},"setup()")," function, we get the owner and a reference (in this test, we don't use the env, so we ignore it). We make a standard assertion, comparing the owner we know with the value returned from the contract.",(0,r.kt)("admonition",{parentName:"li",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"You may have noticed, we use here the term ",(0,r.kt)("inlineCode",{parentName:"p"},"module")," interchangeably with ",(0,r.kt)("inlineCode",{parentName:"p"},"contract"),". The reason is once we deploy our module onto a virtual blockchain it may be considered a contract."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"L19-25")," - On the contract, only the ",(0,r.kt)("inlineCode",{parentName:"li"},"init()")," function has been called, so we expect one event to have been emitted. To assert that, let's use ",(0,r.kt)("inlineCode",{parentName:"li"},"HostEnv"),". To get the env, we call ",(0,r.kt)("inlineCode",{parentName:"li"},"env()")," on the contract, then call ",(0,r.kt)("inlineCode",{parentName:"li"},"HostEnv::emitted_event"),". As the first argument, pass the contract you want to read events from, followed by an event as you expect it to have occurred."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"L31")," - Because we know the initial owner is the 0th account, we must select a different account. It could be any index from 1 to 19 - the ",(0,r.kt)("inlineCode",{parentName:"li"},"HostEnv")," predefines 20 accounts."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"L33")," - As mentioned, the default is the 0th account, if you want to change the executor, call the ",(0,r.kt)("inlineCode",{parentName:"li"},"HostEnv::set_caller()")," function. ",(0,r.kt)("admonition",{parentName:"li",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The caller switch applies only the next contract interaction, the second call will be done as the default account."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"L46-55")," -  If a non-owner account tries to change ownership, we expect it to fail. To capture the error, call ",(0,r.kt)("inlineCode",{parentName:"li"},"HostEnv::try_change_ownership()")," instead of ",(0,r.kt)("inlineCode",{parentName:"li"},"HostEnv::change_ownership()"),". ",(0,r.kt)("inlineCode",{parentName:"li"},"HostEnv")," provides try_ functions for each contract's entrypoint. The ",(0,r.kt)("inlineCode",{parentName:"li"},"try")," functions return ",(0,r.kt)("inlineCode",{parentName:"li"},"OdraResult")," (an alias for ",(0,r.kt)("inlineCode",{parentName:"li"},"Result<T, OdraError>"),") instead of panicking and halting the execution. In our case, we expect the contract to revert with the ",(0,r.kt)("inlineCode",{parentName:"li"},"Error::NotOwner")," error. To compare the error, we use the ",(0,r.kt)("inlineCode",{parentName:"li"},"Error::into()")," function, which converts the error into the ",(0,r.kt)("inlineCode",{parentName:"li"},"OdraError")," type.")),(0,r.kt)("h2",{id:"summary"},"Summary"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Ownable")," module is ready, and we can test it against any defined backend. Theoretically it can be deployed as a standalone contract, but in upcoming tutorials you will see how to use it to compose a more complex contract."),(0,r.kt)("h2",{id:"whats-next"},"What's next"),(0,r.kt)("p",null,"In the next tutorial we will implement a ERC20 standard."))}p.isMDXComponent=!0}}]);