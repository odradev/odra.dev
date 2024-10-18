"use strict";(self.webpackChunkodra_website=self.webpackChunkodra_website||[]).push([[98938],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),h=c(n),u=o,m=h["".concat(s,".").concat(u)]||h[u]||p[u]||r;return n?a.createElement(m,i(i({ref:t},d),{},{components:n})):a.createElement(m,i({ref:t},d))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},89282:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var a=n(87462),o=(n(67294),n(3905));const r={sidebar_position:3},i="Livenet",l={unversionedId:"backends/livenet",id:"version-1.1.0/backends/livenet",title:"Livenet",description:"The Livenet backend let us deploy and test the contracts on the real blockchain. It can be a local",source:"@site/versioned_docs/version-1.1.0/backends/04-livenet.md",sourceDirName:"backends",slug:"/backends/livenet",permalink:"/docs/1.1.0/backends/livenet",draft:!1,tags:[],version:"1.1.0",lastUpdatedAt:1718618013,formattedLastUpdatedAt:"Jun 17, 2024",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Casper",permalink:"/docs/1.1.0/backends/casper"},next:{title:"Examples",permalink:"/docs/1.1.0/category/examples"}},s={},c=[{value:"Setup",id:"setup",level:2},{value:"Usage",id:"usage",level:2},{value:"How Livenet backend works",id:"how-livenet-backend-works",level:2},{value:"Multiple environments",id:"multiple-environments",level:2}],d={toc:c};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"livenet"},"Livenet"),(0,o.kt)("p",null,"The Livenet backend let us deploy and test the contracts on the real blockchain. It can be a local\ntest node, a testnet or even the mainnet. It is possible and even recommended using the Livenet backend\nto handle the deployment of your contracts to the real blockchain."),(0,o.kt)("p",null,"Furthermore, it is implemented in a similarly to Casper or OdraVM,\nhowever, it uses a real blockchain to deploy contracts and store the state.\nThis lets us use Odra to deploy and test contracts on a real blockchain, but\non the other hand, it comes with some limitations on what can be done in the tests."),(0,o.kt)("p",null,"The main differences between Livenet and e.g. CasperVM backend are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Real CSPR tokens are used to deploy and call contracts. This also means that we need to\npay for each contract deployment and each contract call. Of course, we can use the ",(0,o.kt)("a",{parentName:"li",href:"https://testnet.cspr.live/tools/faucet"},"faucet"),"\nto get some tokens for testing purposes, but we still need to specify the amount needed\nfor each action."),(0,o.kt)("li",{parentName:"ul"},"The contract state is stored on the real blockchain, so we can't just reset the state -\nwe can redeploy the contract, but we can't remove the old one."),(0,o.kt)("li",{parentName:"ul"},"Because of the above, we can load the existing contracts and use them in the tests."),(0,o.kt)("li",{parentName:"ul"},"We have no control over the block time. This means that for example, ",(0,o.kt)("inlineCode",{parentName:"li"},"advance_block_time")," function\nis implemented by waiting for the real time to pass.")),(0,o.kt)("p",null,"This is also a cause for the fact that the Livenet backend cannot be (yet) used for running\nthe regular Odra tests. Instead, we can create integration tests or binaries which will\nuse a slightly different workflow to test the contracts."),(0,o.kt)("h2",{id:"setup"},"Setup"),(0,o.kt)("p",null,"To use Livenet backend, we need to provide Odra with some information - the network address, our private\nkey and the name of the chain we want to use. Optionally, we can add multiple private keys to use\nmore than one account in our tests. Those values are passed using environment variables. We can use .env\nfile to store them - let's take a look at an example .env file, created from the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/odradev/odra/blob/release/1.1.0/examples/.env.sample"},".env.sample")," file from\nexamples folder:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-env"},"# Path to the secret key of the account that will be used\n# to deploy the contracts.\n# We're using .keys folder so we don't accidentally commit\n# the secret key to the repository.\nODRA_CASPER_LIVENET_SECRET_KEY_PATH=.keys/secret_key.pem\n\n# RPC address of the node that will be used to deploy the contracts.\nODRA_CASPER_LIVENET_NODE_ADDRESS=localhost:7777\n\n# Chain name of the network. Known values:\n# - integration-test\nODRA_CASPER_LIVENET_CHAIN_NAME=integration-test\n\n# Paths to the secret keys of the additional accounts.\n# Main secret key will be 0th account.\nODRA_CASPER_LIVENET_KEY_1=.keys/secret_key_1.pem\nODRA_CASPER_LIVENET_KEY_2=.keys/secret_key_2.pem\n\n# If using CSPR.cloud, you can set the auth token here.\n# CSPR_CLOUD_AUTH_TOKEN=\n")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"CSPR.cloud is a service that provides mainnet and testnet Casper nodes on demand.")),(0,o.kt)("p",null,"With the proper value in place, we can write our tests or deploy scenarios. In the examples, we can find\na simple binary that deploys a contract and calls it. The test is located in the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/odradev/odra/blob/release/1.1.0/examples/bin/erc20_on_livenet.rs"},"erc20_on_livenet.rs")," file.\nLet's go through the code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'fn main() {\n    // Similar to the OdraVM backend, we need to initialize\n    // the environment:\n    let env = odra_casper_livenet_env::env();\n\n    // Most of the for the host env works the same as in the\n    // OdraVM backend.\n    let owner = env.caller();\n    // Addresses are the real addresses on the blockchain,\n    // so we need to provide them\n    // if we did not import their secret keys.\n    let recipient = \n        "hash-2c4a6ce0da5d175e9638ec0830e01dd6cf5f4b1fbb0724f7d2d9de12b1e0f840";\n    let recipient = Address::from_str(recipient).unwrap();\n\n    // Arguments for the contract init method.\n    let name = String::from("Plascoin");\n    let symbol = String::from("PLS");\n    let decimals = 10u8;\n    let initial_supply: U256 = U256::from(10_000);\n    \n    // The main difference between other backends - we need to specify\n    // the gas limit for each action.\n    // The limit will be used for every consecutive action\n    // until we change it.\n    env.set_gas(100_000_000_000u64);\n    \n    // Deploy the contract. The API is the same as in the OdraVM backend.\n    let init_args = Erc20InitArgs {\n        name,\n        symbol,\n        decimals,\n        initial_supply: Some(initial_supply)\n    };\n    let mut token = Erc20HostRef::deploy(env, init_args);\n    \n    // We can now use the contract as we would in the OdraVM backend.\n    println!("Token address: {}", token.address().to_string());\n\n    // Uncomment to load existing contract.\n    // let address = "hash-d26fcbd2106e37be975d2045c580334a6d7b9d0a241c2358a4db970dfd516945";\n    // let address = Address::from_str(address).unwrap();\n    // We use the Livenet-specific `load` method to load the contract\n    // that is already deployed.\n    // let mut token = Erc20Deployer::load(env, address);\n\n    // Non-mutable calls are free! Neat, huh? More on that later.\n    println!("Token name: {}", token.name());\n\n    // The next call is mutable, but the cost is lower that the deployment,\n    // so we change the amount of gas\n    env.set_gas(3_000_000_000u64);\n    token.transfer(recipient, U256::from(1000));\n\n    println!("Owner\'s balance: {:?}", token.balance_of(owner));\n    println!("Recipient\'s balance: {:?}", token.balance_of(recipient));\n}\n')),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"The above example is a rust binary, not a test. Note that it is also added as a section of the\n",(0,o.kt)("inlineCode",{parentName:"p"},"Cargo.toml")," file:"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-toml"},'[bin]\nname = "erc20_on_livenet"\npath = "src/bin/erc20_on_livenet.rs"\nrequired-features = ["livenet"]\ntest = false\n'))),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,"To run the above code, we simply need to run the binary with the ",(0,o.kt)("inlineCode",{parentName:"p"},"livenet")," feature enabled:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cargo run --bin erc20_on_livenet --features=livenet\n")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Before executing the binary, make sure you built a wasm file.")),(0,o.kt)("p",null,"A part of a sample output should look like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'...\n\ud83d\udc81  INFO : Calling "hash-d26fcbd210..." with entrypoint "transfer".\n\ud83d\ude44  WAIT : Waiting 15s for "65b1a5d21...".\n\ud83d\ude44  WAIT : Waiting 15s for "65b1a5d21...".\n\ud83d\udc81  INFO : Deploy "65b1a5d21..." successfully executed.\nOwner\'s balance: 4004\nRecipient\'s balance: 4000\n')),(0,o.kt)("p",null,"Those logs are a result of the last 4 lines of the above listing.\nEach deployment or a call to the blockchain will be noted and will take some time to execute.\nWe can see that the ",(0,o.kt)("inlineCode",{parentName:"p"},"transfer")," call took over 15 seconds to execute. But calling ",(0,o.kt)("inlineCode",{parentName:"p"},"balance_of")," was nearly instant\nand cost us nothing. How it is possible?"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"You can see the deployment on ",(0,o.kt)("a",{parentName:"p",href:"http://cspr.live/"},"http://cspr.live/")," - the transfer from the example\ncan be seen ",(0,o.kt)("a",{parentName:"p",href:"https://integration.cspr.live/deploy/65b1a5d21174a62c675f89683aba995c453b942c705b404a1f8bbf6f0f6de32a"},"here"),".")),(0,o.kt)("h2",{id:"how-livenet-backend-works"},"How Livenet backend works"),(0,o.kt)("p",null,"All calls of entrypoints executed on a Casper blockchain cost gas - even if they do not change the state.\nIt is possible however to query the state of the blockchain for free."),(0,o.kt)("p",null,"This principle is used in the Livenet backend - all calls that do not change the state of the blockchain are really executed offline - the only thing that is requested from the\nnode is the current state. This is why the ",(0,o.kt)("inlineCode",{parentName:"p"},"balance_of")," call was almost instant and free."),(0,o.kt)("p",null,"Basically, if the entrypoint function is not mutable or does not make a call to an unknown external contract\n(see ",(0,o.kt)("a",{parentName:"p",href:"/docs/1.1.0/basics/cross-calls"},"Cross Calls"),"), it is executed offline and\nnode is used for the state query only. However, the Livenet needs to know the connection between the contracts\nand the code, so make sure to deploy or load already deployed contracts"),(0,o.kt)("h2",{id:"multiple-environments"},"Multiple environments"),(0,o.kt)("p",null,"It is possible to have multiple environments for the Livenet backend. This is useful if we want to easily switch between multiple accounts,\nmultiple nodes or even multiple chains."),(0,o.kt)("p",null,"To do this, simply create a new ",(0,o.kt)("inlineCode",{parentName:"p"},".env")," file with a different prefix - for example, ",(0,o.kt)("inlineCode",{parentName:"p"},"integration.env")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"mainnet.env"),".\nThen, pass the ",(0,o.kt)("inlineCode",{parentName:"p"},"ODRA_CASPER_LIVENET_ENV")," variable with value either ",(0,o.kt)("inlineCode",{parentName:"p"},"integration")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"mainnet")," to select which file\nhas to be used first. If your ",(0,o.kt)("inlineCode",{parentName:"p"},"integration.env")," file has a value that IS present in the ",(0,o.kt)("inlineCode",{parentName:"p"},".env")," file, it will\noverride the value from the ",(0,o.kt)("inlineCode",{parentName:"p"},".env")," file."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"ODRA_CASPER_LIVENET_ENV=integration cargo run --bin erc20_on_livenet --features=livenet\n")),(0,o.kt)("p",null,"To sum up - this command will firstly load the ",(0,o.kt)("inlineCode",{parentName:"p"},"integration.env")," file and then load the missing values from ",(0,o.kt)("inlineCode",{parentName:"p"},".env")," file."))}p.isMDXComponent=!0}}]);