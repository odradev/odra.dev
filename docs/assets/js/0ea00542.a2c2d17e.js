"use strict";(self.webpackChunkodra_website=self.webpackChunkodra_website||[]).push([[56388],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||s;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var c=2;c<s;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},56716:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const s={sidebar_position:3},o="Casper",i={unversionedId:"backends/casper",id:"version-0.3.0/backends/casper",title:"Casper",description:"The Casper backend allows you to compile your contracts into WASM files which can be deployed",source:"@site/versioned_docs/version-0.3.0/backends/03-casper.md",sourceDirName:"backends",slug:"/backends/casper",permalink:"/docs/0.3.0/backends/casper",draft:!1,tags:[],version:"0.3.0",lastUpdatedAt:1687764750,formattedLastUpdatedAt:"Jun 26, 2023",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"defaultSidebar",previous:{title:"MockVM",permalink:"/docs/0.3.0/backends/mock-vm"},next:{title:"Examples",permalink:"/docs/0.3.0/category/examples"}},l={},c=[{value:"Types",id:"types",level:2},{value:"Contract Env",id:"contract-env",level:2},{value:"Events",id:"events",level:3},{value:"Payable",id:"payable",level:3},{value:"Revert",id:"revert",level:3},{value:"Context",id:"context",level:3},{value:"Test Env",id:"test-env",level:2},{value:"Usage",id:"usage",level:2},{value:"Constructors",id:"constructors",level:2},{value:"Execution",id:"execution",level:2}],p={toc:c};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"casper"},"Casper"),(0,r.kt)("p",null,"The Casper backend allows you to compile your contracts into WASM files which can be deployed\nonto ",(0,r.kt)("a",{parentName:"p",href:"https://casper.network/"},"Casper Blockchain"),"\nand lets you to easily run them against ",(0,r.kt)("a",{parentName:"p",href:"https://crates.io/crates/casper-execution-engine"},"Casper's Execution Engine")," locally."),(0,r.kt)("h2",{id:"types"},"Types"),(0,r.kt)("p",null,"A struct to be written into the storage must implement ",(0,r.kt)("inlineCode",{parentName:"p"},"OdraType")," which is defined as follow:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"pub trait OdraType: \n    casper_types::CLTyped + \n    casper_types::bytesrepr::ToBytes + \n    casper_types::bytesrepr::FromBytes {}\n")),(0,r.kt)("p",null,"The other exposed types are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"CallArgs")," - wraps around casper's ",(0,r.kt)("a",{parentName:"li",href:"https://docs.rs/casper-types/latest/casper_types/runtime_args/struct.RuntimeArgs.html"},(0,r.kt)("inlineCode",{parentName:"a"},"RuntimeArgs")),";"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Balance")," - U512 type alias;"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"BlockTime")," - u64 type alias;"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Address")," - an enum that encapsulates casper's ",(0,r.kt)("a",{parentName:"li",href:"https://docs.rs/casper-types/latest/casper_types/account/struct.AccountHash.html"},(0,r.kt)("inlineCode",{parentName:"a"},"AccountHash"))," and ",(0,r.kt)("a",{parentName:"li",href:"https://docs.rs/casper-types/latest/casper_types/struct.ContractPackageHash.html"},(0,r.kt)("inlineCode",{parentName:"a"},"ContractPackageHash")))),(0,r.kt)("h2",{id:"contract-env"},"Contract Env"),(0,r.kt)("p",null,"As with any other backend, Casper Backend must implement the same features, but some do not have native support. Let's take a closer look at how Odra overcomes these hindrances."),(0,r.kt)("h3",{id:"events"},"Events"),(0,r.kt)("p",null,"An event is not a first-class citizen in Casper like in Ethereum, so Odra mimics it. As you've\nalready learned from the ",(0,r.kt)("a",{parentName:"p",href:"/docs/0.3.0/basics/events"},"events article"),", in Odra you emit an event, similarly, you would do it in ",(0,r.kt)("a",{parentName:"p",href:"https://docs.soliditylang.org/en/v0.8.15/contracts.html#example"},"Solidity"),"."),(0,r.kt)("p",null,"Under the hood, Odra integrates with ","[Casper Event Standard]"," and creates a few ",(0,r.kt)("a",{parentName:"p",href:"https://docs.rs/casper-types/latest/casper_types/struct.URef.html"},(0,r.kt)("inlineCode",{parentName:"a"},"URef"),"s")," in the global state when a contract is being installed:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"__events")," - a dictionary that stores events' data."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"__events_length")," - the evens count."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"__events_ces_version")," - the version of ",(0,r.kt)("inlineCode",{parentName:"li"},"Casper Event Standard"),". "),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"__events_schema")," -  a dictionary that stores event schemas.")),(0,r.kt)("p",null,"Besides that, all the events the contract emits are registered - events schemas are written to the storage under the ",(0,r.kt)("inlineCode",{parentName:"p"},"__events_schema")," key."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Don't forget to expose events in the module using ",(0,r.kt)("inlineCode",{parentName:"p"},"#[odra::module(events = [...])]"),". ")),(0,r.kt)("p",null,"So, ",(0,r.kt)("inlineCode",{parentName:"p"},"Events")," are nothing different from any other data stored by a contract."),(0,r.kt)("p",null,"A struct to be an event must implement ",(0,r.kt)("inlineCode",{parentName:"p"},"SerializableEvent")," which is defined as follow:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"pub trait SerializableEvent: \n    odra_types::event::OdraEvent + \n    casper_types::CLTyped + \n    casper_types::bytesrepr::ToBytes + \n    casper_types::bytesrepr::FromBytes {}\n")),(0,r.kt)("h3",{id:"payable"},"Payable"),(0,r.kt)("p",null,"The first Odra idiom is a ",(0,r.kt)("inlineCode",{parentName:"p"},"Contract Main Purse"),". It is a purse associated with a contract. The purse is created lazily - when the first transfer to the contract occurs, a proper ",(0,r.kt)("inlineCode",{parentName:"p"},"URef")," and a purse are created and stored under the ",(0,r.kt)("inlineCode",{parentName:"p"},"__contract_main_purse")," key."),(0,r.kt)("p",null,"Casper does not allow direct transfers from an account to a contract, so Odra comes up with the second idiom - a ",(0,r.kt)("inlineCode",{parentName:"p"},"Cargo Purse"),". It is a one-time-use purse proxy between an account and a contract. First, motes go from the account to the cargo purse and then to the contract's main purse."),(0,r.kt)("p",null,"Behind the scenes, Odra handles an account-contract transfer via a cargo purse when a function is marked as payable.\nIf under the way something goes wrong with the transfer, the contract reverts."),(0,r.kt)("p",null,"The transferred amount can be read inside the contract by calling ",(0,r.kt)("inlineCode",{parentName:"p"},"contract_env::attached_value()"),"."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Odra expects the ",(0,r.kt)("inlineCode",{parentName:"p"},"cargo_purse")," runtime argument to be attached to a contract call.")),(0,r.kt)("h3",{id:"revert"},"Revert"),(0,r.kt)("p",null,"In Casper, we can stop the execution pretty straightforwardly - call the ",(0,r.kt)("inlineCode",{parentName:"p"},"runtime::revert()"),".\nOdra adds an extra abstraction layer - in a contract ",(0,r.kt)("inlineCode",{parentName:"p"},"ExecutionError"),"s are defined, which ultimately are transformed into Casper's ",(0,r.kt)("a",{parentName:"p",href:"https://docs.rs/casper-types/latest/casper_types/enum.ApiError.html"},(0,r.kt)("inlineCode",{parentName:"a"},"ApiError::User")),"."),(0,r.kt)("h3",{id:"context"},"Context"),(0,r.kt)("p",null,"Casper equips developers with very low-level tooling, which can be cumbersome for newcomers.\nIf you want to check who called the contract or its address, you can not do it off-hand - you must analyze the call stack."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"contract_env::self_address()")," function takes the first element of the callstack (",(0,r.kt)("a",{parentName:"p",href:"https://docs.rs/casper-contract/latest/casper_contract/contract_api/runtime/fn.get_call_stack.html"},(0,r.kt)("inlineCode",{parentName:"a"},"runtime::get_call_stack()")),") and casts it to ",(0,r.kt)("inlineCode",{parentName:"p"},"Address"),"."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"contract_env::caller()")," function takes the second element of the call stack (",(0,r.kt)("inlineCode",{parentName:"p"},"runtime::get_call_stack()"),") and casts it to ",(0,r.kt)("inlineCode",{parentName:"p"},"Address"),"."),(0,r.kt)("p",null,"As mentioned in the ","[Payable]"," section, to store CSPR, each contract creates its purse. To read the contract balance, you call ",(0,r.kt)("inlineCode",{parentName:"p"},"contract_env::self_balance"),", which checks the balance of the purse stored under ",(0,r.kt)("inlineCode",{parentName:"p"},"__contract_main_purse"),"."),(0,r.kt)("h2",{id:"test-env"},"Test Env"),(0,r.kt)("p",null,"Test environment allows you to test wasm contracts before you deploy them onto the testnet or livenet. It is built on top of the ",(0,r.kt)("inlineCode",{parentName:"p"},"Casper Execution Engine"),"."),(0,r.kt)("p",null,"In your test, you can freely switch execution context by setting as a caller (",(0,r.kt)("inlineCode",{parentName:"p"},"test_env::set_caller()"),") one of the 20 predefined accounts. Each account possesses the default amount of ",(0,r.kt)("inlineCode",{parentName:"p"},"Motes")," (100_000_000_000_000_000)."),(0,r.kt)("p",null,"The Test Env internally keeps track of the current ",(0,r.kt)("inlineCode",{parentName:"p"},"block time"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"error")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"attached value"),"."),(0,r.kt)("p",null,"Each test is executed on a fresh instance of the Test Env."),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"Name of the Casper backend in Odra is ",(0,r.kt)("inlineCode",{parentName:"p"},"casper"),", so to run the tests against it, simply pass it as a ",(0,r.kt)("inlineCode",{parentName:"p"},"-b"),"\nparameter:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cargo odra test -b casper\n")),(0,r.kt)("p",null,"If you want to just generate a wasm file, simply run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cargo odra build -b casper\n")),(0,r.kt)("h2",{id:"constructors"},"Constructors"),(0,r.kt)("p",null,"Let's define a basic Odra module that includes a constructor:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"#[odra::module]\nstruct Counter {\n    value: Variable<u32>\n}\n\n#[odra::module]\nimpl Counter {\n    #[odra(init)]\n    pub initialize(&mut self, value: u32) {\n        self.value.set(value);\n    }\n}\n")),(0,r.kt)("p",null,"Read more about constructors ",(0,r.kt)("a",{parentName:"p",href:"/docs/0.3.0/advanced/attributes#init"},"here"),"."),(0,r.kt)("p",null,"To deploy your contract with a constructor using ",(0,r.kt)("inlineCode",{parentName:"p"},"casper-client"),", you need to pass the ",(0,r.kt)("inlineCode",{parentName:"p"},"constructor")," argument with a value of ",(0,r.kt)("inlineCode",{parentName:"p"},"initialize"),"  - this represents the name of the constructor function. Additionally, you need to pass the ",(0,r.kt)("inlineCode",{parentName:"p"},"value")," argument, which sets the arbitrary initial value for the counter."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'casper-client put-deploy \\\n  --node-address [NODE_ADDRESS] \\\n  --chain-name casper-test \\\n  --secret-key [PATH_TO_YOUR_KEY]/secret_key.pem \\\n  --payment-amount 5000000000000 \\\n  --session-path ./wasm/counter.wasm \\\n  --session-arg "constructor:string:\'initialize\'" \\\n  --session-arg "value:u32:42" \n')),(0,r.kt)("p",null,"For a more in-depth tutorial, please refer to the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.casper.network/writing-contracts/"},"Casper's 'Writing On-Chain Code'"),"."),(0,r.kt)("h2",{id:"execution"},"Execution"),(0,r.kt)("p",null,"First thing Odra does with your code, is similar to the one used in ",(0,r.kt)("a",{parentName:"p",href:"/docs/0.3.0/backends/mock-vm"},"MockVM")," -\na list of entrypoints is generated, thanks to the ",(0,r.kt)("inlineCode",{parentName:"p"},"#[odra::module]")," macro."),(0,r.kt)("mermaid",{value:"graph TD;\n    id1[[Odra code]]--\x3eid2[IR];\n    id2[IR]--\x3eid3((WASM))\n    id3((WASM))--\x3eid4[(Local Casper\\nExecution Engine)]\n    id3((WASM))--\x3eid5[(Casper Network)]"}))}d.isMDXComponent=!0}}]);