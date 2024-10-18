"use strict";(self.webpackChunkodra_website=self.webpackChunkodra_website||[]).push([[90366],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=l(n),g=a,f=d["".concat(c,".").concat(g)]||d[g]||p[g]||s;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var l=2;l<s;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9555:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const s={},i="Signatures",o={unversionedId:"advanced/signatures",id:"version-0.7.0/advanced/signatures",title:"Signatures",description:"As each backend can use a different scheme for generating key pairs,",source:"@site/versioned_docs/version-0.7.0/advanced/05-signatures.md",sourceDirName:"advanced",slug:"/advanced/signatures",permalink:"/docs/0.7.0/advanced/signatures",draft:!1,tags:[],version:"0.7.0",lastUpdatedAt:1699367878,formattedLastUpdatedAt:"Nov 7, 2023",sidebarPosition:5,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Attributes",permalink:"/docs/0.7.0/advanced/attributes"},next:{title:"Backends",permalink:"/docs/0.7.0/category/backends"}},c={},l=[{value:"Signature verification",id:"signature-verification",level:2},{value:"Testing",id:"testing",level:2},{value:"ECRecover",id:"ecrecover",level:2}],u={toc:l};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"signatures"},"Signatures"),(0,a.kt)("p",null,"As each backend can use a different scheme for generating key pairs,\nOdra Framework provides a generic function for signature verification inside the contract context.\nThanks to this, you can write your code once, without worrying about underlying cryptography."),(0,a.kt)("h2",{id:"signature-verification"},"Signature verification"),(0,a.kt)("p",null,"Signature verification is conducted by a function in ",(0,a.kt)("inlineCode",{parentName:"p"},"contract_env"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"pub fn verify_signature(message: &Bytes, signature: &Bytes, public_key: &PublicKey) -> bool;\n")),(0,a.kt)("p",null,"Here's the simplest example of this function used in a contract:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust",metastring:"title=examples/src/features/signature_verifier.rs",title:"examples/src/features/signature_verifier.rs"},"#[odra::module]\nimpl SignatureVerifier {\n    pub fn verify_signature(\n        &self,\n        message: &Bytes,\n        signature: &Bytes,\n        public_key: &PublicKey\n    ) -> bool {\n        contract_env::verify_signature(message, signature, public_key)\n    }\n}\n")),(0,a.kt)("h2",{id:"testing"},"Testing"),(0,a.kt)("p",null,"Besides the above function in the contract context, Odra provides corresponding functions in the ",(0,a.kt)("inlineCode",{parentName:"p"},"test_env"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"pub fn sign_message(message: &Bytes, address: &Address) -> Bytes;\n\npub fn public_key(address: &Address) -> PublicKey;\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"sign_message")," will return a signed message. The signing itself will be performed using a private key\nof an account behind the ",(0,a.kt)("inlineCode",{parentName:"p"},"address"),"."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"public_key")," returns the PublicKey of an ",(0,a.kt)("inlineCode",{parentName:"p"},"address")," account."),(0,a.kt)("p",null,"Thanks to those, you can write generic tests, that will work with all backends, despite differences\nin signature schemes they use."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust",metastring:"title=examples/src/features/signature_verifier.rs",title:"examples/src/features/signature_verifier.rs"},'#[test]\nfn signature_verification_works() {\n    let message = "Message to be signed";\n    let message_bytes = &Bytes::from(message.as_bytes().to_vec());\n    let account = test_env::get_account(0);\n\n    let signature = test_env::sign_message(message_bytes, &account);\n\n    let public_key = test_env::public_key(&account);\n\n    let signature_verifier = SignatureVerifierDeployer::default();\n    assert!(signature_verifier.verify_signature(message_bytes, &signature, &public_key));\n}\n')),(0,a.kt)("p",null,"If you want, you can also test signatures that were created outside Odra.\nHowever, you will need to prepare separate tests for each backend:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust",metastring:"title=examples/src/features/signature_verifier.rs",title:"examples/src/features/signature_verifier.rs"},'/// The following test checks that the signature verification works with the signature produced\n/// by the casper wallet.\n#[test]\n#[cfg(feature = "casper")]\nfn verify_signature_casper_wallet() {\n    use odra::casper::casper_types::bytesrepr::FromBytes;\n    // Casper Wallet for the message "Ahoj przygodo!" signed using SECP256K1 key\n    // produces the following signature:\n    // 1e87e186238fa1df9c222b387a79910388c6ef56285924c7e4f6d7e77ed1d6c61815312cf66a5318db204c693b79e020b1d392dafe8c1b3841e1f6b4c41ca0fa\n    // Casper Wallet adds "Casper Message:\\n" prefix to the message:\n    let message = "Casper Message:\\nAhoj przygodo!";\n    let message_bytes = &Bytes::from(message.as_bytes().to_vec());\n\n    // Depending on the type of the key, we need to prefix the signature with a tag:\n    // 0x01 for ED25519\n    // 0x02 for SECP256K1\n    let signature_hex = "021e87e186238fa1df9c222b387a79910388c6ef56285924c7e4f6d7e77ed1d6c61815312cf66a5318db204c693b79e020b1d392dafe8c1b3841e1f6b4c41ca0fa";\n    let signature: [u8; 65] = hex::decode(signature_hex).unwrap().try_into().unwrap();\n    let signature_bytes = &Bytes::from(signature.to_vec());\n\n    // Similar to the above, the public key is tagged:\n    let public_key_hex = "02036d9b880e44254afaf34330e57703a63aec53b5918d4470059b67a4a906350105";\n    let public_key_decoded = hex::decode(public_key_hex).unwrap();\n    let (public_key, _) = odra::casper::casper_types::crypto::PublicKey::from_bytes(\n        public_key_decoded.as_slice()\n    )\n    .unwrap();\n\n    let signature_verifier = SignatureVerifierDeployer::default();\n    assert!(signature_verifier.verify_signature(message_bytes, signature_bytes, &public_key));\n}\n')),(0,a.kt)("h2",{id:"ecrecover"},"ECRecover"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/odradev/odra-proposal#odra-standard-library"},"Odra Standard Library"),"\npart of the original Odra Proposal mentioned ECRecover as one of the functions that will be\nimplemented by the Odra Framework. We decided to add signatures verification instead."),(0,a.kt)("p",null,"The reasoning behind this decision is that the ECRecover works only with one type of signature.\nOdra tries to be backend-agnostic, which implies that it should also be signature-type-agnostic.\nThis was possible to achieve when implementing generic signature verification, but not with ECRecover."),(0,a.kt)("p",null,"In short, the implementation of ECRecover would not depend on the backend, pushing it into some kind of\nutils library, and those already exist, for example in\n",(0,a.kt)("a",{parentName:"p",href:"https://docs.rs/solana-program/latest/solana_program/secp256k1_recover/index.html#"},"solana_program"),"\ncrate."))}p.isMDXComponent=!0}}]);