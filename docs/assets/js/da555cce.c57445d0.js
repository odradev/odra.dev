"use strict";(self.webpackChunkodra_website=self.webpackChunkodra_website||[]).push([[85228],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(a),m=r,g=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return a?n.createElement(g,i(i({ref:t},p),{},{components:a})):n.createElement(g,i({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},7275:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const o={sidebar_position:1,description:"A tool for managing Odra projects"},i="Cargo Odra",l={unversionedId:"basics/cargo-odra",id:"version-0.6.0/basics/cargo-odra",title:"Cargo Odra",description:"A tool for managing Odra projects",source:"@site/versioned_docs/version-0.6.0/basics/01-cargo-odra.md",sourceDirName:"basics",slug:"/basics/cargo-odra",permalink:"/docs/0.6.0/basics/cargo-odra",draft:!1,tags:[],version:"0.6.0",lastUpdatedAt:1699367878,formattedLastUpdatedAt:"Nov 7, 2023",sidebarPosition:1,frontMatter:{sidebar_position:1,description:"A tool for managing Odra projects"},sidebar:"tutorialSidebar",previous:{title:"Basics",permalink:"/docs/0.6.0/category/basics"},next:{title:"Directory structure",permalink:"/docs/0.6.0/basics/directory-structure"}},s={},c=[{value:"Managing projects",id:"managing-projects",level:2},{value:"Generating code",id:"generating-code",level:2},{value:"Testing",id:"testing",level:2},{value:"Building code",id:"building-code",level:2},{value:"Updating dependencies",id:"updating-dependencies",level:2},{value:"What&#39;s next",id:"whats-next",level:2}],p={toc:c};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"cargo-odra"},"Cargo Odra"),(0,r.kt)("p",null,"If you followed the ",(0,r.kt)("a",{parentName:"p",href:"/docs/0.6.0/getting-started/installation"},"Installation")," tutorial properly,\nyou should already be set up with the Cargo Odra tool. It is an executable that will help you with\nmanaging your smart contracts project, testing and running them on multiple backends (blockchains)."),(0,r.kt)("p",null,"Let's take a look at all the possibilities that Cargo Odra gives you."),(0,r.kt)("h2",{id:"managing-projects"},"Managing projects"),(0,r.kt)("p",null,"Two commands will help you create a new project. The first one is ",(0,r.kt)("inlineCode",{parentName:"p"},"cargo odra new"),".\nYou need to pass one parameter, namely ",(0,r.kt)("inlineCode",{parentName:"p"},"--name {PROJECT_NAME}"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cargo odra new --name my-project\n")),(0,r.kt)("p",null,"This will create a new project in the ",(0,r.kt)("inlineCode",{parentName:"p"},"my_project")," folder and name it ",(0,r.kt)("inlineCode",{parentName:"p"},"my_project"),". You can see it\nfor yourself, for example by taking a look into a ",(0,r.kt)("inlineCode",{parentName:"p"},"Cargo.toml")," file created in your project's folder:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-toml"},'[package]\nname = "my_project"\nversion = "0.1.0"\nedition = "2021"\n')),(0,r.kt)("p",null,"The project is created using the template located in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/odradev/odra"},"Odra's main repository"),".\nBy default it uses ",(0,r.kt)("inlineCode",{parentName:"p"},"full")," template, if you want, you can use minimalistic ",(0,r.kt)("inlineCode",{parentName:"p"},"blank")," by running:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cargo odra new -t blank --name my-project\n")),(0,r.kt)("p",null,"By default, the latest release of Odra will be used for the template and as a dependency.\nYou can pass a source of Odra you want to use, by using ",(0,r.kt)("inlineCode",{parentName:"p"},"-s")," parameter:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cargo odra new -n my-project -s ../odra # will use local folder of odra\ncargo odra new -n my-project -s release/0.5.0 # will use github branch, e.g. if you want to test new release\ncargo odra new -n my-project -s 0.3.1 # will use a version released on crates.io\n")),(0,r.kt)("p",null,"The second way of creating a project is by using ",(0,r.kt)("inlineCode",{parentName:"p"},"init")," command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cargo odra init --name my-project\n")),(0,r.kt)("p",null,"It works in the same way as ",(0,r.kt)("inlineCode",{parentName:"p"},"new"),", but instead of creating a new folder, it will create a project\nin the current, empty directory."),(0,r.kt)("h2",{id:"generating-code"},"Generating code"),(0,r.kt)("p",null,"If you want to quickly create a new contract code, you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"generate")," command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cargo odra generate -c counter \n")),(0,r.kt)("p",null,"This will create a new file ",(0,r.kt)("inlineCode",{parentName:"p"},"src/counter.rs")," with sample code, add appropriate ",(0,r.kt)("inlineCode",{parentName:"p"},"use")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"mod")," sections\nto ",(0,r.kt)("inlineCode",{parentName:"p"},"src/lib.rs")," and update the ",(0,r.kt)("inlineCode",{parentName:"p"},"Odra.toml")," file accordingly. To learn more about ",(0,r.kt)("inlineCode",{parentName:"p"},"Odra.toml")," file,\nvisit ",(0,r.kt)("a",{parentName:"p",href:"/docs/0.6.0/basics/odra-toml"},"Odra.toml"),"."),(0,r.kt)("h2",{id:"testing"},"Testing"),(0,r.kt)("p",null,"Most used command during the development of your project should be this one:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cargo odra test\n")),(0,r.kt)("p",null,"It will run your tests against Odra's MockVM. It is substantially faster than virtual machines\nprovided by blockchains developers and implements all the features Odra uses."),(0,r.kt)("p",null,'When you want to run tests against a "real" VM, just provide the name of the backend using ',(0,r.kt)("inlineCode",{parentName:"p"},"-b"),"\noption:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cargo odra test -b casper\n")),(0,r.kt)("p",null,"In the example above, Cargo Odra will build the project, the Casper builder, generate the wasm files,\nspin up CasperVM instance, deploy the contracts onto it and run the tests against it. Pretty neat.\nKeep in mind that this is a lot slower than MockVM and you cannot use the debugger.\nThis is why MockVM was created and should be your first choice when developing contracts.\nOf course, testing all of your code against a blockchain VM is a must in the end."),(0,r.kt)("p",null,"If you want to run only some of the tests, you can pass arguments to the ",(0,r.kt)("inlineCode",{parentName:"p"},"cargo test")," command\n(which is run in the background obviously):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cargo odra test -- this-will-be-passed-to-cargo-test\n")),(0,r.kt)("p",null,"If you want to run tests which names contain the word ",(0,r.kt)("inlineCode",{parentName:"p"},"two"),", you can execute:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cargo odra test -- two\n")),(0,r.kt)("p",null,"Of course, you can do the same when using the backend:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cargo odra test -b casper -- two\n")),(0,r.kt)("h2",{id:"building-code"},"Building code"),(0,r.kt)("p",null,"You can also build the code itself and generate the output contracts without running the tests.\nTo do so, simply run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cargo odra build -b casper\n")),(0,r.kt)("p",null,"Where ",(0,r.kt)("inlineCode",{parentName:"p"},"casper")," is the name of the backend we are using in this example. If the build process\nfinishes successfully, wasm files will be located in ",(0,r.kt)("inlineCode",{parentName:"p"},"wasm")," folder."),(0,r.kt)("h2",{id:"updating-dependencies"},"Updating dependencies"),(0,r.kt)("p",null,"You will learn later, that the project using Odra contains more than one Rust project - your own and\none or more builders. To run ",(0,r.kt)("inlineCode",{parentName:"p"},"cargo update")," on all of them at once instead of traversing all the folders\nyou can use this command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cargo odra update\n")),(0,r.kt)("h2",{id:"whats-next"},"What's next"),(0,r.kt)("p",null,"In the next section, we will take a look at all the files and directories that ",(0,r.kt)("inlineCode",{parentName:"p"},"cargo odra")," created\nfor us and explain their purpose."))}d.isMDXComponent=!0}}]);