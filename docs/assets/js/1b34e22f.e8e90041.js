"use strict";(self.webpackChunkodra_website=self.webpackChunkodra_website||[]).push([[73785],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>g});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(a),g=r,m=d["".concat(s,".").concat(g)]||d[g]||u[g]||o;return a?n.createElement(m,l(l({ref:t},p),{},{components:a})):n.createElement(m,l({ref:t},p))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},55309:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const o={sidebar_position:1},l="Installation",i={unversionedId:"getting-started/installation",id:"version-0.2.0/getting-started/installation",title:"Installation",description:"Hello fellow Odra user! This page will guide you through the installation process.",source:"@site/versioned_docs/version-0.2.0/getting-started/installation.md",sourceDirName:"getting-started",slug:"/getting-started/installation",permalink:"/docs/0.2.0/getting-started/installation",draft:!1,tags:[],version:"0.2.0",lastUpdatedAt:1688045346,formattedLastUpdatedAt:"Jun 29, 2023",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"defaultSidebar",previous:{title:"Getting started",permalink:"/docs/0.2.0/category/getting-started"},next:{title:"Flipper example",permalink:"/docs/0.2.0/getting-started/flipper"}},s={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Installing Cargo Odra",id:"installing-cargo-odra",level:2},{value:"Creating a new Odra project",id:"creating-a-new-odra-project",level:2},{value:"What&#39;s next?",id:"whats-next",level:2}],p={toc:c};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"installation"},"Installation"),(0,r.kt)("p",null,"Hello fellow Odra user! This page will guide you through the installation process."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"To start working with Odra, you need to have the following installed on your machine:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Rust toolchain installed (see ",(0,r.kt)("a",{parentName:"li",href:"https://rustup.rs/"},"rustup.rs"),")"),(0,r.kt)("li",{parentName:"ul"},"wasmstrip tool installed (see ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/WebAssembly/wabt"},"wabt"),")")),(0,r.kt)("p",null,"We do not provide exact commands for installing these tools, as they are different for different operating systems.\nPlease refer to the documentation of the tools themselves."),(0,r.kt)("p",null,"With Rust toolchain ready, you can add a new target:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"rustup target add wasm32-unknown-unknown\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"wasm32-unknown-uknown")," is a target that will be used by Odra to compile your smart contracts to WASM files.")),(0,r.kt)("h2",{id:"installing-cargo-odra"},"Installing Cargo Odra"),(0,r.kt)("p",null,"Cargo Odra is a helpful tool that will help you to build and test your smart contracts.\nIt is not required to use Odra, but the documentation will assume that you have it installed."),(0,r.kt)("p",null,"To install it, simply execute the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cargo install cargo-odra\n")),(0,r.kt)("p",null,"To check if it was installed correctly and see available commands, type:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cargo odra --help\n")),(0,r.kt)("p",null,"If everything went fine, we can proceed to the next step."),(0,r.kt)("h2",{id:"creating-a-new-odra-project"},"Creating a new Odra project"),(0,r.kt)("p",null,"To create a new project, simply execute:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cargo odra new --name my-project && cd my-project\n")),(0,r.kt)("p",null,'This will create a new folder called "my-project" and initialize Odra there. Cargo Odra\nwill create a sample contract for you in src directory. You can run the tests of this contract\nby executing:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cargo odra test\n")),(0,r.kt)("p",null,"This will run tests using Odra's internal MockVM. You can run those tests against a real backend, to do so\nwe need to add a new backend. Let's use CasperVM:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cargo odra backend add -p casper\n")),(0,r.kt)("p",null,"Now we can run the tests against it:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cargo odra test -b casper\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Congratulations!")," Now you are ready to create contracts using Odra framework! If you had any problems during\nthe installation process, feel free to ask for help on our ",(0,r.kt)("a",{parentName:"p",href:"https://discord.com/invite/Mm5ABc9P8k"},"Discord"),"."),(0,r.kt)("h2",{id:"whats-next"},"What's next?"),(0,r.kt)("p",null,"If you want to see the code that you just tested, continue to the description of ",(0,r.kt)("a",{parentName:"p",href:"flipper"},"Flipper example"),"."))}u.isMDXComponent=!0}}]);