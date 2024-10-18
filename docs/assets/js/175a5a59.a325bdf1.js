"use strict";(self.webpackChunkodra_website=self.webpackChunkodra_website||[]).push([[63024],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(a),m=r,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return a?n.createElement(h,s(s({ref:t},c),{},{components:a})):n.createElement(h,s({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var p=2;p<o;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},78496:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const o={sidebar_position:3},s="Casper",i={unversionedId:"backends/casper",id:"version-0.8.1/backends/casper",title:"Casper",description:"The Casper backend allows you to compile your contracts into WASM files which can be deployed",source:"@site/versioned_docs/version-0.8.1/backends/03-casper.md",sourceDirName:"backends",slug:"/backends/casper",permalink:"/docs/0.8.1/backends/casper",draft:!1,tags:[],version:"0.8.1",lastUpdatedAt:1711464534,formattedLastUpdatedAt:"Mar 26, 2024",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"OdraVM",permalink:"/docs/0.8.1/backends/odra-vm"},next:{title:"Livenet",permalink:"/docs/0.8.1/backends/livenet"}},l={},p=[{value:"Contract Env",id:"contract-env",level:2},{value:"Events",id:"events",level:3},{value:"Payable",id:"payable",level:3},{value:"Revert",id:"revert",level:3},{value:"Context",id:"context",level:3},{value:"Test Env",id:"test-env",level:2},{value:"Usage",id:"usage",level:2},{value:"Deploying a contract to Casper network",id:"deploying-a-contract-to-casper-network",level:2},{value:"WASM arguments",id:"wasm-arguments",level:3},{value:"Example: Deploy Counter",id:"example-deploy-counter",level:3},{value:"Example: Deploy ERC721",id:"example-deploy-erc721",level:3},{value:"Example: Deploy ERC1155",id:"example-deploy-erc1155",level:3},{value:"Sending CSPR to a contract",id:"sending-cspr-to-a-contract",level:2},{value:"Using proxy_caller.wasm",id:"using-proxy_callerwasm",level:3},{value:"Execution",id:"execution",level:2}],c={toc:p};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"casper"},"Casper"),(0,r.kt)("p",null,"The Casper backend allows you to compile your contracts into WASM files which can be deployed\nonto ",(0,r.kt)("a",{parentName:"p",href:"https://casper.network/"},"Casper Blockchain"),"\nand lets you to easily run them against ",(0,r.kt)("a",{parentName:"p",href:"https://crates.io/crates/casper-execution-engine"},"Casper's Execution Engine")," locally."),(0,r.kt)("h2",{id:"contract-env"},"Contract Env"),(0,r.kt)("p",null,"As with any other backend, Casper Backend must implement the same features, but some do not have native support. Let's take a closer look at how Odra overcomes these hindrances."),(0,r.kt)("h3",{id:"events"},"Events"),(0,r.kt)("p",null,"An event is not a first-class citizen in Casper like in Ethereum, so Odra mimics it. As you've\nalready learned from the ",(0,r.kt)("a",{parentName:"p",href:"/docs/0.8.1/basics/events"},"events article"),", in Odra you emit an event, similarly, you would do it in ",(0,r.kt)("a",{parentName:"p",href:"https://docs.soliditylang.org/en/v0.8.15/contracts.html#example"},"Solidity"),"."),(0,r.kt)("p",null,"Under the hood, Odra integrates with ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/make-software/casper-event-standard"},"Casper Event Standard")," and creates a few ",(0,r.kt)("a",{parentName:"p",href:"https://docs.rs/casper-types/latest/casper_types/struct.URef.html"},(0,r.kt)("inlineCode",{parentName:"a"},"URef"),"s")," in the global state when a contract is being installed:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"__events")," - a dictionary that stores events' data."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"__events_length")," - the evens count."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"__events_ces_version")," - the version of ",(0,r.kt)("inlineCode",{parentName:"li"},"Casper Event Standard"),". "),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"__events_schema")," -  a dictionary that stores event schemas.")),(0,r.kt)("p",null,"Besides that, all the events the contract emits are registered - events schemas are written to the storage under the ",(0,r.kt)("inlineCode",{parentName:"p"},"__events_schema")," key."),(0,r.kt)("p",null,"So, ",(0,r.kt)("inlineCode",{parentName:"p"},"Events")," are nothing different from any other data stored by a contract."),(0,r.kt)("p",null,"A struct to be an event must implement traits defined by ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/make-software/casper-event-standard"},"Casper Event Standard"),", thankfully you can derive them using ",(0,r.kt)("inlineCode",{parentName:"p"},"#[derive(Event)]"),"."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Don't forget to expose events in the module using ",(0,r.kt)("inlineCode",{parentName:"p"},"#[odra::module(events = [...])]"),". ")),(0,r.kt)("h3",{id:"payable"},"Payable"),(0,r.kt)("p",null,"The first Odra idiom is a ",(0,r.kt)("inlineCode",{parentName:"p"},"Contract Main Purse"),". It is a purse associated with a contract. The purse is created lazily - when the first transfer to the contract occurs, a proper ",(0,r.kt)("inlineCode",{parentName:"p"},"URef")," and a purse are created and stored under the ",(0,r.kt)("inlineCode",{parentName:"p"},"__contract_main_purse")," key."),(0,r.kt)("p",null,"Casper does not allow direct transfers from an account to a contract, so Odra comes up with the second idiom - a ",(0,r.kt)("inlineCode",{parentName:"p"},"Cargo Purse"),". It is a one-time-use purse proxy between an account and a contract. First, motes go from the account to the cargo purse and then to the contract's main purse."),(0,r.kt)("p",null,"Behind the scenes, Odra handles an account-contract transfer via a cargo purse when a function is marked as payable.\nIf under the way something goes wrong with the transfer, the contract reverts."),(0,r.kt)("p",null,"The transferred amount can be read inside the contract by calling ",(0,r.kt)("inlineCode",{parentName:"p"},"self.env().attached_value()"),"."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Odra expects the ",(0,r.kt)("inlineCode",{parentName:"p"},"cargo_purse")," runtime argument to be attached to a contract call.\nIn case of its absence, the ",(0,r.kt)("inlineCode",{parentName:"p"},"contract_env::attached_value()")," returns zero.")),(0,r.kt)("h3",{id:"revert"},"Revert"),(0,r.kt)("p",null,"In Casper, we can stop the execution pretty straightforwardly - call the ",(0,r.kt)("inlineCode",{parentName:"p"},"runtime::revert()"),".\nOdra adds an extra abstraction layer - in a contract ",(0,r.kt)("inlineCode",{parentName:"p"},"ExecutionError"),"s are defined, which ultimately are transformed into Casper's ",(0,r.kt)("a",{parentName:"p",href:"https://docs.rs/casper-types/latest/casper_types/enum.ApiError.html"},(0,r.kt)("inlineCode",{parentName:"a"},"ApiError::User")),"."),(0,r.kt)("h3",{id:"context"},"Context"),(0,r.kt)("p",null,"Casper equips developers with very low-level tooling, which can be cumbersome for newcomers.\nIf you want to check who called the contract or its address, you can not do it off-hand - you must analyze the call stack."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"self.env().self_address()")," function takes the first element of the callstack (",(0,r.kt)("a",{parentName:"p",href:"https://docs.rs/casper-contract/latest/casper_contract/contract_api/runtime/fn.get_call_stack.html"},(0,r.kt)("inlineCode",{parentName:"a"},"runtime::get_call_stack()")),") and casts it to ",(0,r.kt)("inlineCode",{parentName:"p"},"Address"),"."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"self.env().caller()")," function takes the second element of the call stack (",(0,r.kt)("inlineCode",{parentName:"p"},"runtime::get_call_stack()"),") and casts it to ",(0,r.kt)("inlineCode",{parentName:"p"},"Address"),"."),(0,r.kt)("p",null,"As mentioned in the ","[Payable]"," section, to store CSPR, each contract creates its purse. To read the contract balance,\nyou call ",(0,r.kt)("inlineCode",{parentName:"p"},"self.env().self_balance()"),", which checks the balance of the purse stored under ",(0,r.kt)("inlineCode",{parentName:"p"},"__contract_main_purse"),"."),(0,r.kt)("h2",{id:"test-env"},"Test Env"),(0,r.kt)("p",null,"Test environment allows you to test wasm contracts before you deploy them onto the testnet or livenet. It is built on top of the ",(0,r.kt)("inlineCode",{parentName:"p"},"Casper Execution Engine"),"."),(0,r.kt)("p",null,"In your test, you can freely switch execution context by setting as a caller (",(0,r.kt)("inlineCode",{parentName:"p"},"test_env::set_caller()"),") one of the 20 predefined accounts. Each account possesses the default amount of ",(0,r.kt)("inlineCode",{parentName:"p"},"Motes")," (100_000_000_000_000_000)."),(0,r.kt)("p",null,"The Test Env internally keeps track of the current ",(0,r.kt)("inlineCode",{parentName:"p"},"block time"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"error")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"attached value"),"."),(0,r.kt)("p",null,"Each test is executed on a fresh instance of the Test Env."),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"Name of the Casper backend in Odra is ",(0,r.kt)("inlineCode",{parentName:"p"},"casper"),", so to run the tests against it, simply pass it as a ",(0,r.kt)("inlineCode",{parentName:"p"},"-b"),"\nparameter:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cargo odra test -b casper\n")),(0,r.kt)("p",null,"If you want to just generate a wasm file, simply run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cargo odra build -b casper\n")),(0,r.kt)("h2",{id:"deploying-a-contract-to-casper-network"},"Deploying a contract to Casper network"),(0,r.kt)("p",null,"There would be no point in writing a contract if you couldn't deploy it to the blockchain.\nYou can do it in two ways: provided by the Casper itself: using the ",(0,r.kt)("inlineCode",{parentName:"p"},"casper-client")," tool\nor using the Odra's Livenet integration."),(0,r.kt)("p",null,"Let's explore the first option to better understand the process."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"If you wish, you can skip the following section and jump to the ",(0,r.kt)("a",{parentName:"p",href:"/docs/0.8.1/backends/livenet"},"Livenet integration"),".")),(0,r.kt)("h3",{id:"wasm-arguments"},"WASM arguments"),(0,r.kt)("p",null,"When deploying a new contract you can pass some arguments to it.\nEvery contract written in Odra expects those arguments to be set:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"odra_cfg_package_hash_key_name")," - ",(0,r.kt)("inlineCode",{parentName:"li"},"String")," type. The key under which the package hash of the contract will be stored."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"odra_cfg_allow_key_override")," - ",(0,r.kt)("inlineCode",{parentName:"li"},"Bool")," type. If ",(0,r.kt)("inlineCode",{parentName:"li"},"true")," and the key specified in ",(0,r.kt)("inlineCode",{parentName:"li"},"odra_cfg_package_hash_key_name")," already exists, it will be overwritten."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"odra_cfg_is_upgradable")," - ",(0,r.kt)("inlineCode",{parentName:"li"},"Bool")," type. If ",(0,r.kt)("inlineCode",{parentName:"li"},"true"),", the contract will be deployed as upgradable.")),(0,r.kt)("p",null,"Additionally, if required by the contract, you can pass constructor arguments."),(0,r.kt)("p",null,"When working with the test env via ",(0,r.kt)("inlineCode",{parentName:"p"},"cargo odra")," or when using\n",(0,r.kt)("a",{parentName:"p",href:"/docs/0.8.1/backends/livenet"},"Livenet integration")," this is handled automatically. However, if you rather use\n",(0,r.kt)("inlineCode",{parentName:"p"},"casper-client")," directly, you have to pass them manually:"),(0,r.kt)("h3",{id:"example-deploy-counter"},"Example: Deploy Counter"),(0,r.kt)("p",null,"To deploy your contract with a constructor using ",(0,r.kt)("inlineCode",{parentName:"p"},"casper-client"),", you need to pass the above arguments.\nAdditionally, you need to pass the ",(0,r.kt)("inlineCode",{parentName:"p"},"value")," argument, which sets the arbitrary initial value for the counter."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'casper-client put-deploy \\\n  --node-address [NODE_ADDRESS] \\\n  --chain-name casper-test \\\n  --secret-key [PATH_TO_YOUR_KEY]/secret_key.pem \\\n  --payment-amount 5000000000000 \\\n  --session-path ./wasm/counter.wasm \\\n  --session-arg "odra_cfg_package_hash_key_name:string:\'counter_package_hash\'" \\\n  --session-arg "odra_cfg_allow_key_override:bool:\'true\'" \\\n  --session-arg "odra_cfg_is_upgradable:bool:\'true\'" \\\n  --session-arg "value:u32:42" \n')),(0,r.kt)("p",null,"For a more in-depth tutorial, please refer to the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.casper.network/writing-contracts/"},"Casper's 'Writing On-Chain Code'"),"."),(0,r.kt)("h3",{id:"example-deploy-erc721"},"Example: Deploy ERC721"),(0,r.kt)("p",null,"Odra comes with a standard ERC721 token implementation.\nClone the main Odra repo and navigate to the ",(0,r.kt)("inlineCode",{parentName:"p"},"modules")," directory."),(0,r.kt)("p",null,"Firstly contract needs to be compiled."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cargo odra build -b casper -c erc721_token\n")),(0,r.kt)("p",null,"It produces the ",(0,r.kt)("inlineCode",{parentName:"p"},"erc721_token.wasm")," file in the ",(0,r.kt)("inlineCode",{parentName:"p"},"wasm")," directory."),(0,r.kt)("p",null,"Now it's time to deploy the contract."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client put-deploy \\\n  --node-address [NODE_ADDRESS] \\\n  --chain-name casper-test \\\n  --secret-key [PATH_TO_YOUR_KEY]/secret_key.pem \\\n  --payment-amount 300000000000 \\\n  --session-path ./wasm/erc721_token.wasm \\\n  --session-arg \"odra_cfg_package_hash_key_name:string:'my_nft'\" \\\n  --session-arg \"odra_cfg_allow_key_override:bool:'false'\" \\\n  --session-arg \"odra_cfg_is_upgradable:bool:'true'\" \\\n  --session-arg \"name:string:'MyNFT'\" \\\n  --session-arg \"symbol:string:'NFT'\" \\\n  --session-arg \"base_uri:string:'https://example.com/'\"\n")),(0,r.kt)("p",null,"It's done.\nThe contract is deployed and ready to use.\nYour account is the owner of the contract and you can mint and burn tokens.\nFor more details see the code of the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/odradev/odra/blob/release/0.8.1/modules/src/erc721_token.rs"},"ERC721")," module."),(0,r.kt)("p",null,"To obtain the package hash of the contract search for ",(0,r.kt)("inlineCode",{parentName:"p"},"my_nft")," key\nin your account's named keys."),(0,r.kt)("h3",{id:"example-deploy-erc1155"},"Example: Deploy ERC1155"),(0,r.kt)("p",null,"The process is similar to the one described in the previous section."),(0,r.kt)("p",null,"Contract compilation:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cargo odra build -b casper -c erc1155_token\n")),(0,r.kt)("p",null,"Contract deployment:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client put-deploy \\\n  --node-address [NODE_ADDRESS] \\\n  --chain-name casper-test \\\n  --secret-key [PATH_TO_YOUR_KEY]/secret_key.pem \\\n  --payment-amount 300000000000 \\\n  --session-path ./wasm/erc1155_token.wasm \\\n  --session-arg \"odra_cfg_package_hash_key_name:string:'my_tokens'\" \\\n  --session-arg \"odra_cfg_allow_key_override:bool:'false'\" \\\n  --session-arg \"odra_cfg_is_upgradable:bool:'true'\" \\\n  --session-arg \"odra_cfg_constructor:string:'init'\" \\\n")),(0,r.kt)("p",null,"As previously, your account is the owner and can mint and burn tokens.\nFor more details see the code of the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/odradev/odra/blob/release/0.8.1/modules/src/erc1155_token.rs"},"ERC1155")," module."),(0,r.kt)("h2",{id:"sending-cspr-to-a-contract"},"Sending CSPR to a contract"),(0,r.kt)("p",null,"Defining payable entry points is described in ",(0,r.kt)("a",{parentName:"p",href:"/docs/0.8.1/basics/native-token"},"Native Token")," section."),(0,r.kt)("p",null,"What is happening under the hood is that Odra creates a new ",(0,r.kt)("inlineCode",{parentName:"p"},"cargo_purse")," argument for each payable\nentry point. The ",(0,r.kt)("inlineCode",{parentName:"p"},"cargo_purse")," needs to be top-upped with CSPR before calling the contract.\nWhen a contract adds CSPR to another contract call, Odra handles it for you.\nThe problem arises when you want to call an entry point and attach CSPR as an account.\nThe only way of doing that is by executing code in the sessions context, that\ntop-ups the ",(0,r.kt)("inlineCode",{parentName:"p"},"cargo_purse")," and then calls the contract."),(0,r.kt)("p",null,"Odra provides a generic ",(0,r.kt)("inlineCode",{parentName:"p"},"proxy_caller.wasm")," that does exactly that.\nYou can build it by yourself from the main Odra repository, or use the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/odradev/odra/blob/release/0.8.1/odra-casper/test-vm/resources/proxy_caller.wasm"},"proxy_caller.wasm"),"\nwe maintain."),(0,r.kt)("h3",{id:"using-proxy_callerwasm"},"Using proxy_caller.wasm"),(0,r.kt)("p",null,"To use the ",(0,r.kt)("inlineCode",{parentName:"p"},"proxy_caller.wasm")," you need to attach the following arguments:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"contract_package_hash")," - ",(0,r.kt)("inlineCode",{parentName:"li"},"BytesArray(32)")," type. The package hash of the contract you want to call.\nResult of ",(0,r.kt)("inlineCode",{parentName:"li"},"to_bytes")," on ",(0,r.kt)("a",{parentName:"li",href:"https://docs.rs/casper-types/latest/casper_types/contracts/struct.ContractPackageHash.html"},"CasperPackageHash"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"entry_point")," - ",(0,r.kt)("inlineCode",{parentName:"li"},"String")," type. The name of the entry point you want to call."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"args")," - ",(0,r.kt)("inlineCode",{parentName:"li"},"Bytes")," type. It is a serialized ",(0,r.kt)("a",{parentName:"li",href:"https://docs.rs/casper-types/latest/casper_types/runtime_args/struct.RuntimeArgs.html"},"RuntimeArgs")," with the arguments you want to pass\nto the entry point. To be specific it is the result of ",(0,r.kt)("inlineCode",{parentName:"li"},"to_bytes")," method wrapped with ",(0,r.kt)("a",{parentName:"li",href:"https://docs.rs/casper-types/latest/casper_types/bytesrepr/struct.Bytes.html"},"Bytes")," type."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"attached_value"),". ",(0,r.kt)("inlineCode",{parentName:"li"},"U512")," type. The amount of CSPR you want to attach to the call."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"amount"),". ",(0,r.kt)("inlineCode",{parentName:"li"},"U512")," type. Should be the same value as ",(0,r.kt)("inlineCode",{parentName:"li"},"attached_value")," if not ",(0,r.kt)("inlineCode",{parentName:"li"},"None"),".\nIt is a special Casper argument that enables the access to account's main purse.")),(0,r.kt)("p",null,"Currently ",(0,r.kt)("inlineCode",{parentName:"p"},"casper-client")," doesn't allow building such arguments.\nYou have to build it using your SDK."),(0,r.kt)("h2",{id:"execution"},"Execution"),(0,r.kt)("p",null,"First thing Odra does with your code, is similar to the one used in ",(0,r.kt)("a",{parentName:"p",href:"/docs/0.8.1/backends/odra-vm"},"OdraVM")," -\na list of entrypoints is generated, thanks to the ",(0,r.kt)("inlineCode",{parentName:"p"},"#[odra::module]")," macro."),(0,r.kt)("mermaid",{value:"graph TD;\n    id1[[Odra code]]--\x3eid2[IR];\n    id2[IR]--\x3eid3((WASM))\n    id3((WASM))--\x3eid4[(Local Casper\\nExecution Engine)]\n    id3((WASM))--\x3eid5[(Casper Network)]"}))}d.isMDXComponent=!0}}]);