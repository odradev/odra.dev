"use strict";(self.webpackChunkodra_website=self.webpackChunkodra_website||[]).push([[5452],{3905:(e,n,r)=>{r.d(n,{Zo:()=>c,kt:()=>m});var t=r(67294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=t.createContext({}),d=function(e){var n=t.useContext(i),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},c=function(e){var n=d(e.components);return t.createElement(i.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},p=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(r),m=o,f=p["".concat(i,".").concat(m)]||p[m]||u[m]||a;return r?t.createElement(f,l(l({ref:n},c),{},{components:r})):t.createElement(f,l({ref:n},c))}));function m(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=p;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,l[1]=s;for(var d=2;d<a;d++)l[d]=r[d];return t.createElement.apply(null,l)}return t.createElement.apply(null,r)}p.displayName="MDXCreateElement"},57699:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var t=r(87462),o=(r(67294),r(3905));const a={sidebar_position:4},l="Access Control",s={unversionedId:"tutorials/access-control",id:"version-1.3.0/tutorials/access-control",title:"Access Control",description:"In a previous tutorial, we introduced the Ownable module, which serves the purpose of securing access to specific contract features. While it establishes a fundamental security layer, there are numerous scenarios where this level of security is insufficient,",source:"@site/versioned_docs/version-1.3.0/tutorials/access-control.md",sourceDirName:"tutorials",slug:"/tutorials/access-control",permalink:"/docs/1.3.0/tutorials/access-control",draft:!1,tags:[],version:"1.3.0",lastUpdatedAt:1727085590,formattedLastUpdatedAt:"Sep 23, 2024",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"OwnedToken",permalink:"/docs/1.3.0/tutorials/owned-token"},next:{title:"Pausable",permalink:"/docs/1.3.0/tutorials/pauseable"}},i={},d=[{value:"Code",id:"code",level:2},{value:"Project Structure",id:"project-structure",level:3},{value:"Events and Errors",id:"events-and-errors",level:3},{value:"Module",id:"module",level:3}],c={toc:d};function u(e){let{components:n,...r}=e;return(0,o.kt)("wrapper",(0,t.Z)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"access-control"},"Access Control"),(0,o.kt)("p",null,"In a previous tutorial, we introduced the ",(0,o.kt)("a",{parentName:"p",href:"/docs/1.3.0/tutorials/ownable"},(0,o.kt)("inlineCode",{parentName:"a"},"Ownable"))," module, which serves the purpose of securing access to specific contract features. While it establishes a fundamental security layer, there are numerous scenarios where this level of security is insufficient, "),(0,o.kt)("p",null,"In this article we design and implement a more fine-grained access control layer."),(0,o.kt)("h2",{id:"code"},"Code"),(0,o.kt)("p",null,"Before we start writing code, we list the functionalities of our access control layer."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"A ",(0,o.kt)("inlineCode",{parentName:"li"},"Role")," type is used across the module."),(0,o.kt)("li",{parentName:"ol"},"A ",(0,o.kt)("inlineCode",{parentName:"li"},"Role")," can be assigned to many ",(0,o.kt)("inlineCode",{parentName:"li"},"Address"),"es."),(0,o.kt)("li",{parentName:"ol"},"Each ",(0,o.kt)("inlineCode",{parentName:"li"},"Role")," may have a corresponding admin role."),(0,o.kt)("li",{parentName:"ol"},"Only an admin can grant/revoke a ",(0,o.kt)("inlineCode",{parentName:"li"},"Role"),"."),(0,o.kt)("li",{parentName:"ol"},"A ",(0,o.kt)("inlineCode",{parentName:"li"},"Role")," can be renounced."),(0,o.kt)("li",{parentName:"ol"},"A ",(0,o.kt)("inlineCode",{parentName:"li"},"Role")," cannot be renounced on someone's behalf."),(0,o.kt)("li",{parentName:"ol"},"Each action triggers an event."),(0,o.kt)("li",{parentName:"ol"},"Unauthorized access stops contract execution.")),(0,o.kt)("h3",{id:"project-structure"},"Project Structure"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plaintext"},"access-control\n\u251c\u2500\u2500 src\n\u2502   \u251c\u2500\u2500 access\n\u2502   \u2502   \u251c\u2500\u2500 access_control.rs\n\u2502   \u2502   \u251c\u2500\u2500 events.rs\n\u2502   \u2502   \u2514\u2500\u2500 errors.rs\n\u2502   \u2514\u2500\u2500 lib.rs\n|\u2500\u2500 build.rs\n|\u2500\u2500 Cargo.toml\n\u2514\u2500\u2500 Odra.toml\n")),(0,o.kt)("h3",{id:"events-and-errors"},"Events and Errors"),(0,o.kt)("p",null,"There are three actions that can be performed concerning a ",(0,o.kt)("inlineCode",{parentName:"p"},"Role"),": granting, revoking, and altering the admin role. Let us establish standard Odra events for each of these actions."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust",metastring:"title=events.rs showLineNumbers",title:"events.rs",showLineNumbers:!0},"use odra::prelude::*;\nuse odra::Address;\nuse super::access_control::Role;\n\n#[odra::event]\npub struct RoleGranted {\n    pub role: Role,\n    pub address: Address,\n    pub sender: Address\n}\n\n#[odra::event]\npub struct RoleRevoked {\n    pub role: Role,\n    pub address: Address,\n    pub sender: Address\n}\n\n#[odra::event]\npub struct RoleAdminChanged {\n    pub role: Role,\n    pub previous_admin_role: Role,\n    pub new_admin_role: Role\n}\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"L5-L17")," - to describe the grant or revoke actions, our events specify the ",(0,o.kt)("inlineCode",{parentName:"li"},"Role"),", and ",(0,o.kt)("inlineCode",{parentName:"li"},"Address"),"es indicating who receives or loses access and who provides or withdraws it."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"L19-L24")," - the event describing the admin role change, requires the subject ",(0,o.kt)("inlineCode",{parentName:"li"},"Role"),", the previous and the current admin ",(0,o.kt)("inlineCode",{parentName:"li"},"Role"),".")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust",metastring:"title=errors.rs",title:"errors.rs"},"#[odra::odra_error]\npub enum Error {\n    MissingRole = 20_000,\n    RoleRenounceForAnotherAddress = 20_001,\n}\n")),(0,o.kt)("p",null,"Errors definition is straightforward - there are only two invalid states: "),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"An action is triggered by an unauthorized actor."),(0,o.kt)("li",{parentName:"ol"},"The caller is attempting to resign the Role on someone's behalf.  ")),(0,o.kt)("h3",{id:"module"},"Module"),(0,o.kt)("p",null,"Now, we are stepping into the most interesting part: the module definition and implementation."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust",metastring:"title=access_control.rs showLineNumbers",title:"access_control.rs",showLineNumbers:!0},"use super::events::*;\nuse super::errors::Error;\nuse odra::prelude::*;\nuse odra::{Address, Mapping};\n\npub type Role = [u8; 32];\n\npub const DEFAULT_ADMIN_ROLE: Role = [0u8; 32];\n\n#[odra::module(events = [RoleAdminChanged, RoleGranted, RoleRevoked])]\npub struct AccessControl {\n    roles: Mapping<(Role, Address), bool>,\n    role_admin: Mapping<Role, Role>\n}\n\n#[odra::module]\nimpl AccessControl {\n    pub fn has_role(&self, role: &Role, address: &Address) -> bool {\n        self.roles.get_or_default(&(*role, *address))\n    }\n\n    pub fn get_role_admin(&self, role: &Role) -> Role {\n        let admin_role = self.role_admin.get(role);\n        if let Some(admin) = admin_role {\n            admin\n        } else {\n            DEFAULT_ADMIN_ROLE\n        }\n    }\n\n    pub fn grant_role(&mut self, role: &Role, address: &Address) {\n        self.check_role(&self.get_role_admin(role), &self.env().caller());\n        self.unchecked_grant_role(role, address);\n    }\n\n    pub fn revoke_role(&mut self, role: &Role, address: &Address) {\n        self.check_role(&self.get_role_admin(role), &self.env().caller());\n        self.unchecked_revoke_role(role, address);\n    }\n\n    pub fn renounce_role(&mut self, role: &Role, address: &Address) {\n        if address != &self.env().caller() {\n            self.env().revert(Error::RoleRenounceForAnotherAddress);\n        }\n        self.unchecked_revoke_role(role, address);\n    }\n}\n\nimpl AccessControl {\n    pub fn check_role(&self, role: &Role, address: &Address) {\n        if !self.has_role(role, address) {\n            self.env().revert(Error::MissingRole);\n        }\n    }\n\n    pub fn set_admin_role(&mut self, role: &Role, admin_role: &Role) {\n        let previous_admin_role = self.get_role_admin(role);\n        self.role_admin.set(role, *admin_role);\n        self.env().emit_event(RoleAdminChanged {\n            role: *role,\n            previous_admin_role,\n            new_admin_role: *admin_role\n        });\n    }\n\n    pub fn unchecked_grant_role(&mut self, role: &Role, address: &Address) {\n        if !self.has_role(role, address) {\n            self.roles.set(&(*role, *address), true);\n            self.env().emit_event(RoleGranted {\n                role: *role,\n                address: *address,\n                sender: self.env().caller()\n            });\n        }\n    }\n\n    pub fn unchecked_revoke_role(&mut self, role: &Role, address: &Address) {\n        if self.has_role(role, address) {\n            self.roles.set(&(*role, *address), false);\n            self.env().emit_event(RoleRevoked {\n                role: *role,\n                address: *address,\n                sender: self.env().caller()\n            });\n        }\n    }\n}\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"L6")," - Firstly, we need the ",(0,o.kt)("inlineCode",{parentName:"li"},"Role")," type. It is simply an alias for a 32-byte array."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"L8")," - The default role is an array filled with zeros."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"L10-L13")," - The storage consists of two mappings:")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"roles")," - a nested mapping that stores information about whether a certain Role is granted to a given ",(0,o.kt)("inlineCode",{parentName:"li"},"Address"),"."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"role_admin")," - each ",(0,o.kt)("inlineCode",{parentName:"li"},"Role")," can have a single admin ",(0,o.kt)("inlineCode",{parentName:"li"},"Role"),".")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"L18-L20")," - This is a simple check to determine if a ",(0,o.kt)("inlineCode",{parentName:"li"},"Role")," has been granted to a given ",(0,o.kt)("inlineCode",{parentName:"li"},"Address"),". It is an exposed entry point and an important building block widely used throughout the entire module."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"L49")," - This is a non-exported block containing helper functions."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"L50-L54")," - The ",(0,o.kt)("inlineCode",{parentName:"li"},"check_role()")," function serves as a guard function. Before a ",(0,o.kt)("inlineCode",{parentName:"li"},"Role")," is granted or revoked, we must ensure that the caller is allowed to do so. For this purpose, the function reads the roles mapping. If the role has not been granted to the address, the contract reverts with ",(0,o.kt)("inlineCode",{parentName:"li"},"Error::MissingRole"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"L56-L64")," - The ",(0,o.kt)("inlineCode",{parentName:"li"},"set_admin_role()")," function simply updates the role_admin mapping and emits the ",(0,o.kt)("inlineCode",{parentName:"li"},"RoleAdminChanged")," event."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"L66-L86")," - The ",(0,o.kt)("inlineCode",{parentName:"li"},"unchecked_grant_role()")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"unchecked_revoke_role()")," functions are mirror functions that update the roles mapping and post ",(0,o.kt)("inlineCode",{parentName:"li"},"RoleGranted")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"RoleRevoked")," events. If the role is already granted, ",(0,o.kt)("inlineCode",{parentName:"li"},"unchecked_grant_role()")," has no effect (the opposite check is made in the case of revoking a role)."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"L22-L29")," - The ",(0,o.kt)("inlineCode",{parentName:"li"},"get_role_admin()")," entry point reads the role_admin. If there is no admin role for a given role, it returns the default role."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"L31-L46")," - This is a combination of ",(0,o.kt)("inlineCode",{parentName:"li"},"check_role()")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"unchecked_*_role()"),". Entry points fail on unauthorized access.")))}u.isMDXComponent=!0}}]);