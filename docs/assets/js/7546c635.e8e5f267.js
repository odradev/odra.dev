"use strict";(self.webpackChunkodra_website=self.webpackChunkodra_website||[]).push([[64733],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),d=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=d(n),f=a,m=p["".concat(c,".").concat(f)]||p[f]||u[f]||o;return n?r.createElement(m,l(l({ref:t},s),{},{components:n})):r.createElement(m,l({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var d=2;d<o;d++)l[d]=n[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},60773:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var r=n(87462),a=(n(67294),n(3905));const o={},l="Memory allocators",i={unversionedId:"advanced/using-different-allocator",id:"version-0.9.1/advanced/using-different-allocator",title:"Memory allocators",description:"When compiling contracts to wasm, your code needs to be no-std.",source:"@site/versioned_docs/version-0.9.1/advanced/05-using-different-allocator.md",sourceDirName:"advanced",slug:"/advanced/using-different-allocator",permalink:"/docs/0.9.1/advanced/using-different-allocator",draft:!1,tags:[],version:"0.9.1",lastUpdatedAt:1713174573,formattedLastUpdatedAt:"Apr 15, 2024",sidebarPosition:5,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Storage Layout",permalink:"/docs/0.9.1/advanced/storage-layout"},next:{title:"Building contracts manually",permalink:"/docs/0.9.1/advanced/building-manually"}},c={},d=[{value:"Using a different allocator",id:"using-a-different-allocator",level:2}],s={toc:d};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"memory-allocators"},"Memory allocators"),(0,a.kt)("p",null,"When compiling contracts to wasm, your code needs to be ",(0,a.kt)("inlineCode",{parentName:"p"},"no-std"),".\nThis means that instead of using the standard library, the ",(0,a.kt)("inlineCode",{parentName:"p"},"core"),"\ncrate will be linked to your code. This crate does not contain\na memory allocator."),(0,a.kt)("p",null,"Happily, Odra automatically enables allocator - from our tests\nthe one developed by ",(0,a.kt)("a",{parentName:"p",href:"https://docs.rs/ink_allocator/latest/ink_allocator/"},"ink!"),"\nseems to be the best."),(0,a.kt)("h2",{id:"using-a-different-allocator"},"Using a different allocator"),(0,a.kt)("p",null,"If the default allocator does not suit your needs, or you use a crate that\nalready provides an allocator, you can disable the default allocator by enabling\nthe ",(0,a.kt)("inlineCode",{parentName:"p"},"disable-allocator")," feature in the ",(0,a.kt)("inlineCode",{parentName:"p"},"odra")," dependency in your project:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-toml"},'[dependencies]\nodra = { path = "../odra", features = ["disable-allocator"] }\n')),(0,a.kt)("p",null,"If you want to have a better control over the features that are enabled\nduring the building and tests, see the next article on ",(0,a.kt)("a",{parentName:"p",href:"/docs/0.9.1/advanced/building-manually"},"building manually"),"."))}u.isMDXComponent=!0}}]);