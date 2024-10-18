"use strict";(self.webpackChunkodra_website=self.webpackChunkodra_website||[]).push([[17552],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>c});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),u=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=u(e.components);return a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=u(t),c=r,w=m["".concat(s,".").concat(c)]||m[c]||p[c]||i;return t?a.createElement(w,o(o({ref:n},d),{},{components:t})):a.createElement(w,o({ref:n},d))}));function c(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=t[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},1754:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var a=t(87462),r=(t(67294),t(3905));const i={sidebar_position:1},o="Ownable",l={unversionedId:"tutorials/ownable",id:"version-0.5.0/tutorials/ownable",title:"Ownable",description:"In this tutorial, we will write a simple module that allows us to set its owner. Later, it can be reused to limit access to the contract's critical features.",source:"@site/versioned_docs/version-0.5.0/tutorials/ownable.md",sourceDirName:"tutorials",slug:"/tutorials/ownable",permalink:"/docs/0.5.0/tutorials/ownable",draft:!1,tags:[],version:"0.5.0",lastUpdatedAt:1691663853,formattedLastUpdatedAt:"Aug 10, 2023",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Tutorials",permalink:"/docs/0.5.0/category/tutorials"},next:{title:"ERC-20",permalink:"/docs/0.5.0/tutorials/erc20"}},s={},u=[{value:"Framework features",id:"framework-features",level:2},{value:"Code",id:"code",level:2},{value:"Define a module",id:"define-a-module",level:3},{value:"Init the module",id:"init-the-module",level:3},{value:"Features implementation",id:"features-implementation",level:3},{value:"Test",id:"test",level:3},{value:"Summary",id:"summary",level:2},{value:"What&#39;s next",id:"whats-next",level:2}],d={toc:u};function p(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"ownable"},"Ownable"),(0,r.kt)("p",null,"In this tutorial, we will write a simple module that allows us to set its owner. Later, it can be reused to limit access to the contract's critical features."),(0,r.kt)("h2",{id:"framework-features"},"Framework features"),(0,r.kt)("p",null,"A module we will write in a minute, will help you master a few Odra features:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"storing a single value,"),(0,r.kt)("li",{parentName:"ul"},"defining constructors,"),(0,r.kt)("li",{parentName:"ul"},"error handling,"),(0,r.kt)("li",{parentName:"ul"},"defining and emitting ",(0,r.kt)("inlineCode",{parentName:"li"},"events"),"."),(0,r.kt)("li",{parentName:"ul"},"registering a contact in a test environment,"),(0,r.kt)("li",{parentName:"ul"},"interactions with the test environment,"),(0,r.kt)("li",{parentName:"ul"},"assertions (value, events, errors assertions).")),(0,r.kt)("h2",{id:"code"},"Code"),(0,r.kt)("p",null,"Before we write any code, we define functionalities we would like to implement."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Module has an initializer that should be called once. "),(0,r.kt)("li",{parentName:"ol"},"Only the current owner can set a new owner."),(0,r.kt)("li",{parentName:"ol"},"Read the current owner."),(0,r.kt)("li",{parentName:"ol"},"A function that fails if called by a non-owner account.")),(0,r.kt)("h3",{id:"define-a-module"},"Define a module"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust",metastring:"showLineNumbers",showLineNumbers:!0},"use odra::{types::Address, Variable};\n\n#[odra::module]\npub struct Ownable {\n    owner: Variable<Address>\n}\n")),(0,r.kt)("p",null,"That was easy, but it is crucial to understand the basic before we move on."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"L3")," - Firstly, we need create a struct called ",(0,r.kt)("inlineCode",{parentName:"li"},"Ownable")," and apply ",(0,r.kt)("inlineCode",{parentName:"li"},"#[odra::module]")," to it above."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"L5")," - Then we can define a layout of our module. That is extremely simple - just a single state value. What is most important you can never leave a raw type, you must always wrap it with ",(0,r.kt)("inlineCode",{parentName:"li"},"Variable"),".")),(0,r.kt)("h3",{id:"init-the-module"},"Init the module"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust",metastring:"showLineNumbers",showLineNumbers:!0},"use odra::{\n    execution_error, contract_env, Event, types::{Address, event::OdraEvent}\n};\n...\n\n#[odra::module]\nimpl Ownable {\n    #[odra(init)]\n    pub fn init(&mut self, owner: &Address) {\n        if self.owner.get().is_some() {\n            contract_env::revert(Error::OwnerIsAlreadyInitialized)\n        }\n\n        self.owner.set(*owner);\n        \n        OwnershipChanged {\n            prev_owner: None,\n            new_owner: *owner\n        }\n        .emit();\n    }\n}\n\nexecution_error! {\n    pub enum Error {\n        OwnerIsNotInitialized => 1,\n    }\n}\n\n#[derive(Event, Debug, PartialEq, Eq)]\npub struct OwnershipChanged {\n    pub prev_owner: Option<Address>,\n    pub new_owner: Address\n}\n")),(0,r.kt)("p",null,"Ok, we have done a couple of things, let's analyze them one by one:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"L5")," - The ",(0,r.kt)("inlineCode",{parentName:"li"},"impl")," should be an odra module, so add ",(0,r.kt)("inlineCode",{parentName:"li"},"#[odra::module]"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"L7")," - The ",(0,r.kt)("inlineCode",{parentName:"li"},"init")," function is marked as ",(0,r.kt)("inlineCode",{parentName:"li"},"#[odra(init)]")," making it a constructor. It matters if we would like to deploy the ",(0,r.kt)("inlineCode",{parentName:"li"},"Ownable")," module as a standalone contract."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"L23")," - Before we set a new owner, we must assert there was no owner before and raise an error otherwise. For that purpose we defined an ",(0,r.kt)("inlineCode",{parentName:"li"},"Error")," enum. Notice that the ",(0,r.kt)("inlineCode",{parentName:"li"},"Error")," enum is defined inside the ",(0,r.kt)("inlineCode",{parentName:"li"},"execution_error")," macro. It generates, among others, the required ",(0,r.kt)("inlineCode",{parentName:"li"},"Into<ExecutionError>")," binding."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"L9-L11")," - If the owner has been set already, we call ",(0,r.kt)("inlineCode",{parentName:"li"},"contract_env::revert()")," function. As an argument we pass ",(0,r.kt)("inlineCode",{parentName:"li"},"Error::OwnerIsNotInitialized"),". "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"L13")," - Then we write the owner passed as an argument to the storage. To do so we call the ",(0,r.kt)("inlineCode",{parentName:"li"},"set()")," on ",(0,r.kt)("inlineCode",{parentName:"li"},"Variable"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"L29-L33")," - Once the owner is set, we would like to inform the outside world. First step is to define an event struct. The struct must derive from ",(0,r.kt)("inlineCode",{parentName:"li"},"odra::Event"),". We highly recommend to derive ",(0,r.kt)("inlineCode",{parentName:"li"},"Debug"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"PartialEq")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"Eq")," for testing purpose."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"L23")," - Finally, we create the ",(0,r.kt)("inlineCode",{parentName:"li"},"OwnershipChanged")," struct and call ",(0,r.kt)("inlineCode",{parentName:"li"},"emit()")," function on it (import ",(0,r.kt)("inlineCode",{parentName:"li"},"odra::types::event::OdraEvent")," trait). Hence we set the first owner, we set the ",(0,r.kt)("inlineCode",{parentName:"li"},"prev_owner")," value to ",(0,r.kt)("inlineCode",{parentName:"li"},"None"),".")),(0,r.kt)("h3",{id:"features-implementation"},"Features implementation"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust",metastring:"showLineNumbers",showLineNumbers:!0},"#[odra::module]\nimpl Ownable {\n    ...\n\n    pub fn ensure_ownership(&self, address: &Address) {\n        if Some(address) != self.owner.get().as_ref() {\n            contract_env::revert(Error::NotOwner)\n        }\n    }\n\n    pub fn change_ownership(&mut self, new_owner: &Address) {\n        self.ensure_ownership(&contract_env::caller());\n        let current_owner = self.get_owner();\n        self.owner.set(*new_owner);\n        OwnershipChanged {\n            prev_owner: Some(current_owner),\n            new_owner: *new_owner\n        }\n        .emit();\n    }\n\n    pub fn get_owner(&self) -> Address {\n        match self.owner.get() {\n            Some(owner) => owner,\n            None => contract_env::revert(Error::OwnerIsNotInitialized)\n        }\n    }\n}\n\nexecution_error! {\n    pub enum Error {\n        NotOwner => 1,\n        OwnerIsAlreadyInitialized => 2,\n        OwnerIsNotInitialized => 3,\n    }\n}\n")),(0,r.kt)("p",null,"The above implementation relies on the concepts we have already used in this tutorial, so it should easy for you to get along."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"L5,L32")," - ",(0,r.kt)("inlineCode",{parentName:"li"},"ensure_ownership()")," is reads the current owner, and reverts if is does not match the input ",(0,r.kt)("inlineCode",{parentName:"li"},"Address"),". Also we need to update our ",(0,r.kt)("inlineCode",{parentName:"li"},"Error")," enum adding a new variant ",(0,r.kt)("inlineCode",{parentName:"li"},"NotOwner"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"L11")," - The function defined above can be reused in ",(0,r.kt)("inlineCode",{parentName:"li"},"change_ownership()")," implementation. We pass to it the current caller, using the ",(0,r.kt)("inlineCode",{parentName:"li"},"contract_env::caller()")," function. The we update the state, and emit ",(0,r.kt)("inlineCode",{parentName:"li"},"OwnershipChanged"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"L22,L34")," - Lastly, a getter function. As the ",(0,r.kt)("inlineCode",{parentName:"li"},"Variable")," ",(0,r.kt)("inlineCode",{parentName:"li"},"get()")," function returns an ",(0,r.kt)("inlineCode",{parentName:"li"},"Option"),", we need to handle a possible error. If someone call the getter on uninitialized module, it should revert with a new ",(0,r.kt)("inlineCode",{parentName:"li"},"Error")," variant ",(0,r.kt)("inlineCode",{parentName:"li"},"OwnerIsNotInitialized"),".")),(0,r.kt)("h3",{id:"test"},"Test"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust",metastring:"showLineNumbers",showLineNumbers:!0},"#[cfg(test)]\nmod tests {\n    use super::*;\n    use odra::{assert_events, test_env};\n\n    fn setup() -> (Address, OwnableRef) {\n        let owner = test_env::get_account(0);\n        let ownable = OwnableDeployer::init(owner);\n        (owner, ownable)\n    }\n\n    #[test]\n    fn initialization_works() {\n        let (owner, ownable) = setup();\n        assert_eq!(ownable.get_owner(), owner);\n       \n        assert_events!(\n            ownable,\n            OwnershipChanged {\n                prev_owner: None,\n                new_owner: owner\n            }\n        );\n    }\n\n    #[test]\n    fn owner_can_change_ownership() {\n        let (owner, mut ownable) = setup();\n        let new_owner = test_env::get_account(1);\n        \n        test_env::set_caller(owner);\n        ownable.change_ownership(&new_owner);\n        assert_eq!(ownable.get_owner(), new_owner);\n        assert_events!(\n            ownable,\n            OwnershipChanged {\n                prev_owner: Some(owner),\n                new_owner\n            }\n        );\n    }\n\n    #[test]\n    fn non_owner_cannot_change_ownership() {\n        let (_, mut ownable) = setup();\n        let new_owner = test_env::get_account(1);\n        ownable.change_ownership(&new_owner);\n        \n        test_env::assert_exception(Error::NotOwner, || {\n            ownable.change_ownership(&new_owner);\n        });\n    }\n}\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"L6")," - Each test case starts with the same initialization process, so for convenience, we defined the ",(0,r.kt)("inlineCode",{parentName:"li"},"setup()")," function we call as the first statement in each test. Take a look at the signature ",(0,r.kt)("inlineCode",{parentName:"li"},"fn setup() -> (Address, OwnableRef)"),". ",(0,r.kt)("inlineCode",{parentName:"li"},"OwnableRef")," is a contract reference generated by Odra. This reference allows us call all the defined entrypoints namely: ",(0,r.kt)("inlineCode",{parentName:"li"},"ensure_ownership()"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"change_ownership()"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"get_owner()"),", but not ",(0,r.kt)("inlineCode",{parentName:"li"},"init()")," which is a constructor."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"L7")," - Now, the module needs an owner, the easiest way is to take one from the ",(0,r.kt)("inlineCode",{parentName:"li"},"test_env"),". We choose the address of first account (which is the default one)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"L8")," - Odra created for us ",(0,r.kt)("inlineCode",{parentName:"li"},"OwnableDeployer")," struct which implements all constructor functions. In this case there is just one function - ",(0,r.kt)("inlineCode",{parentName:"li"},"init()")," which corresponds the function we have implemented in the module."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"L12")," - It is time to define the first test. As you see, it is a regular rust test."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"L14-15")," - Using the ",(0,r.kt)("inlineCode",{parentName:"li"},"setup()")," function we get the owner, and a reference. We make a standard assertion comparing the owner we know, with the value returned from the contract.",(0,r.kt)("admonition",{parentName:"li",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"You may have noticed, we use here the term ",(0,r.kt)("inlineCode",{parentName:"p"},"module")," interchangeably with ",(0,r.kt)("inlineCode",{parentName:"p"},"contract"),". The reason is once we deploy our module onto a virtual blockchain it may be considered a contract."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"L17-23")," - On the contract, only the ",(0,r.kt)("inlineCode",{parentName:"li"},"init()")," function has been called, so we expect one event has been emitted. To assert that, let's use Odra's macro ",(0,r.kt)("inlineCode",{parentName:"li"},"assert_events"),". As the first argument, pass the contract you want to read events from, followed by as many events as you expect have occurred."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"L30")," - Because we know the initial owner is the 0-th account, we must select a different account. It could be any index from 1 to 19 - the ",(0,r.kt)("inlineCode",{parentName:"li"},"test env")," predefines 20 accounts."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"L32")," - As mentioned, the default is the 0-th account, if you want to change the executor call the ",(0,r.kt)("inlineCode",{parentName:"li"},"test_env::set_caller()")," function. ",(0,r.kt)("admonition",{parentName:"li",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The caller switch applies only the next contract interaction, the second call will be done as the default account."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"L49-55")," - If a non-owner account tries to change ownership we expect it to fail. To capture the error, call ",(0,r.kt)("inlineCode",{parentName:"li"},"test_env::assert_exception()")," with the error you expect and a failing block of code.")),(0,r.kt)("h2",{id:"summary"},"Summary"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Ownable")," module is ready, and we can test it against any defined backend. Theoretically it can be deployed as a standalone contract, but in upcoming tutorials you will see how to use it to compose a more complex contract."),(0,r.kt)("h2",{id:"whats-next"},"What's next"),(0,r.kt)("p",null,"In the next tutorial we will implement a ERC20 standard."))}p.isMDXComponent=!0}}]);