"use strict";(self.webpackChunkodra_website=self.webpackChunkodra_website||[]).push([[87250],{81938:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"0.9.0","label":"0.9.0","banner":"unmaintained","badge":true,"noIndex":false,"className":"docs-version-0.9.0","isLast":false,"docsSidebars":{"tutorialSidebar":[{"type":"link","label":"Odra framework","href":"/docs/0.9.0/","docId":"intro"},{"type":"category","label":"Getting started","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Installation","href":"/docs/0.9.0/getting-started/installation","docId":"getting-started/installation"},{"type":"link","label":"Flipper example","href":"/docs/0.9.0/getting-started/flipper","docId":"getting-started/flipper"}],"href":"/docs/0.9.0/category/getting-started"},{"type":"category","label":"Basics","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Cargo Odra","href":"/docs/0.9.0/basics/cargo-odra","docId":"basics/cargo-odra"},{"type":"link","label":"Directory structure","href":"/docs/0.9.0/basics/directory-structure","docId":"basics/directory-structure"},{"type":"link","label":"Odra.toml","href":"/docs/0.9.0/basics/odra-toml","docId":"basics/odra-toml"},{"type":"link","label":"Flipper Internals","href":"/docs/0.9.0/basics/flipper-internals","docId":"basics/flipper-internals"},{"type":"link","label":"Storage interaction","href":"/docs/0.9.0/basics/storage-interaction","docId":"basics/storage-interaction"},{"type":"link","label":"Host Communication","href":"/docs/0.9.0/basics/communicating-with-host","docId":"basics/communicating-with-host"},{"type":"link","label":"Testing","href":"/docs/0.9.0/basics/testing","docId":"basics/testing"},{"type":"link","label":"Errors","href":"/docs/0.9.0/basics/errors","docId":"basics/errors"},{"type":"link","label":"Events","href":"/docs/0.9.0/basics/events","docId":"basics/events"},{"type":"link","label":"Casper Contract Schema","href":"/docs/0.9.0/basics/casper-contract-schema","docId":"basics/casper-contract-schema"},{"type":"link","label":"Cross calls","href":"/docs/0.9.0/basics/cross-calls","docId":"basics/cross-calls"},{"type":"link","label":"Modules","href":"/docs/0.9.0/basics/modules","docId":"basics/modules"},{"type":"link","label":"Native token","href":"/docs/0.9.0/basics/native-token","docId":"basics/native-token"}],"href":"/docs/0.9.0/category/basics"},{"type":"category","label":"Advanced","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Delegate","href":"/docs/0.9.0/advanced/delegate","docId":"advanced/delegate"},{"type":"link","label":"Advanced Storage Concepts","href":"/docs/0.9.0/advanced/advanced-storage","docId":"advanced/advanced-storage"},{"type":"link","label":"Attributes","href":"/docs/0.9.0/advanced/attributes","docId":"advanced/attributes"},{"type":"link","label":"Storage Layout","href":"/docs/0.9.0/advanced/storage-layout","docId":"advanced/storage-layout"},{"type":"link","label":"Memory allocators","href":"/docs/0.9.0/advanced/using-different-allocator","docId":"advanced/using-different-allocator"},{"type":"link","label":"Building contracts manually","href":"/docs/0.9.0/advanced/building-manually","docId":"advanced/building-manually"}],"href":"/docs/0.9.0/category/advanced"},{"type":"category","label":"Backends","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"What is a backend?","href":"/docs/0.9.0/backends/what-is-a-backend","docId":"backends/what-is-a-backend"},{"type":"link","label":"OdraVM","href":"/docs/0.9.0/backends/odra-vm","docId":"backends/odra-vm"},{"type":"link","label":"Casper","href":"/docs/0.9.0/backends/casper","docId":"backends/casper"},{"type":"link","label":"Livenet","href":"/docs/0.9.0/backends/livenet","docId":"backends/livenet"}],"href":"/docs/0.9.0/category/backends"},{"type":"category","label":"Examples","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"odra-examples","href":"/docs/0.9.0/examples/odra-examples","docId":"examples/odra-examples"},{"type":"link","label":"Using odra-modules","href":"/docs/0.9.0/examples/using-odra-modules","docId":"examples/using-odra-modules"}],"href":"/docs/0.9.0/category/examples"},{"type":"category","label":"Tutorials","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Ownable","href":"/docs/0.9.0/tutorials/ownable","docId":"tutorials/ownable"},{"type":"link","label":"ERC-20","href":"/docs/0.9.0/tutorials/erc20","docId":"tutorials/erc20"},{"type":"link","label":"OwnedToken","href":"/docs/0.9.0/tutorials/owned-token","docId":"tutorials/owned-token"},{"type":"link","label":"Access Control","href":"/docs/0.9.0/tutorials/access-control","docId":"tutorials/access-control"},{"type":"link","label":"Pausable","href":"/docs/0.9.0/tutorials/pauseable","docId":"tutorials/pauseable"},{"type":"link","label":"Build, Deploy and Read the State of a Contract","href":"/docs/0.9.0/tutorials/build-deploy-read","docId":"tutorials/build-deploy-read"}],"href":"/docs/0.9.0/category/tutorials"},{"type":"category","label":"Migrations","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Migration guide to v0.8.0","href":"/docs/0.9.0/migrations/to-0.8.0","docId":"migrations/to-0.8.0"},{"type":"link","label":"Migration guide to v0.9.0","href":"/docs/0.9.0/migrations/to-0.9.0","docId":"migrations/to-0.9.0"}],"href":"/docs/0.9.0/category/migrations"}]},"docs":{"advanced/advanced-storage":{"id":"advanced/advanced-storage","title":"Advanced Storage Concepts","description":"The Odra Framework provides advanced storage interaction capabilities that extend beyond the basic storage interaction. This document will focus on the Mapping and Sequence modules, which are key components of the advanced storage interaction in Odra.","sidebar":"tutorialSidebar"},"advanced/attributes":{"id":"advanced/attributes","title":"Attributes","description":"Smart contract developers with Ethereum background are familiar with Solidity\'s concept of modifiers in Solidity - a feature that","sidebar":"tutorialSidebar"},"advanced/building-manually":{"id":"advanced/building-manually","title":"Building contracts manually","description":"cargo odra is a great tool to build and test your contracts, but sometimes","sidebar":"tutorialSidebar"},"advanced/delegate":{"id":"advanced/delegate","title":"Delegate","description":"Managing boilerplate code can often lead to code that is cumbersome and challenging to comprehend. The Odra library introduces a solution to this issue with its Delegate feature. As the name implies, the Delegate feature permits the delegation of function calls to child modules, effectively minimizing the redundancy of boilerplate code and maintaining a lean and orderly parent module.","sidebar":"tutorialSidebar"},"advanced/storage-layout":{"id":"advanced/storage-layout","title":"Storage Layout","description":"Odra\'s innovative modular design necessitates a unique storage layout. This","sidebar":"tutorialSidebar"},"advanced/using-different-allocator":{"id":"advanced/using-different-allocator","title":"Memory allocators","description":"When compiling contracts to wasm, your code needs to be no-std.","sidebar":"tutorialSidebar"},"backends/casper":{"id":"backends/casper","title":"Casper","description":"The Casper backend allows you to compile your contracts into WASM files which can be deployed","sidebar":"tutorialSidebar"},"backends/livenet":{"id":"backends/livenet","title":"Livenet","description":"The Livenet backend let us deploy and test the contracts on the real blockchain. It can be a local","sidebar":"tutorialSidebar"},"backends/odra-vm":{"id":"backends/odra-vm","title":"OdraVM","description":"The OdraVM is a simple implementation of a mock backend with a minimal set of features that allows testing","sidebar":"tutorialSidebar"},"backends/what-is-a-backend":{"id":"backends/what-is-a-backend","title":"What is a backend?","description":"You can think of a backend as a target platform for your smart contract.","sidebar":"tutorialSidebar"},"basics/cargo-odra":{"id":"basics/cargo-odra","title":"Cargo Odra","description":"A tool for managing Odra projects","sidebar":"tutorialSidebar"},"basics/casper-contract-schema":{"id":"basics/casper-contract-schema","title":"Casper Contract Schema","description":"Casper Contract Schema","sidebar":"tutorialSidebar"},"basics/communicating-with-host":{"id":"basics/communicating-with-host","title":"Host Communication","description":"How to get information from the Host","sidebar":"tutorialSidebar"},"basics/cross-calls":{"id":"basics/cross-calls","title":"Cross calls","description":"Contracts calling contracts","sidebar":"tutorialSidebar"},"basics/directory-structure":{"id":"basics/directory-structure","title":"Directory structure","description":"Files and folders in the Odra project","sidebar":"tutorialSidebar"},"basics/errors":{"id":"basics/errors","title":"Errors","description":"Causing and handling errors","sidebar":"tutorialSidebar"},"basics/events":{"id":"basics/events","title":"Events","description":"Creating and emitting Events","sidebar":"tutorialSidebar"},"basics/flipper-internals":{"id":"basics/flipper-internals","title":"Flipper Internals","description":"Detailed explanation of the Flipper contract","sidebar":"tutorialSidebar"},"basics/modules":{"id":"basics/modules","title":"Modules","description":"Divide your code into modules","sidebar":"tutorialSidebar"},"basics/native-token":{"id":"basics/native-token","title":"Native token","description":"How to deposit, withdraw and transfer","sidebar":"tutorialSidebar"},"basics/odra-toml":{"id":"basics/odra-toml","title":"Odra.toml","description":"Odra\'s configuration file","sidebar":"tutorialSidebar"},"basics/storage-interaction":{"id":"basics/storage-interaction","title":"Storage interaction","description":"How to write data into blockchain\'s storage","sidebar":"tutorialSidebar"},"basics/testing":{"id":"basics/testing","title":"Testing","description":"How to write tests in Odra","sidebar":"tutorialSidebar"},"examples/odra-examples":{"id":"examples/odra-examples","title":"odra-examples","description":"Odra repository provides rich source learning materials. We want to ensure you would feel comfortable with the framework from day one and make the learning curve as flat as possible. Are you a Solidity developer? Are you a Casper developer? Are you new to smart contracts development? To learn Odra from its creators, look at the examples in the [Odra main repository].","sidebar":"tutorialSidebar"},"examples/using-odra-modules":{"id":"examples/using-odra-modules","title":"Using odra-modules","description":"Besides the Odra framework, you can attach to your project odra-module - a set of plug-and-play modules.","sidebar":"tutorialSidebar"},"getting-started/flipper":{"id":"getting-started/flipper","title":"Flipper example","description":"To quickly start working with Odra, take a look at the following code sample. If you followed the","sidebar":"tutorialSidebar"},"getting-started/installation":{"id":"getting-started/installation","title":"Installation","description":"Hello fellow Odra user! This page will guide you through the installation process.","sidebar":"tutorialSidebar"},"intro":{"id":"intro","title":"Odra framework","description":"Odra Docs","sidebar":"tutorialSidebar"},"migrations/to-0.8.0":{"id":"migrations/to-0.8.0","title":"Migration guide to v0.8.0","description":"Migration guide to v0.8.0","sidebar":"tutorialSidebar"},"migrations/to-0.9.0":{"id":"migrations/to-0.9.0","title":"Migration guide to v0.9.0","description":"Migration guide to v0.9.0","sidebar":"tutorialSidebar"},"tutorials/access-control":{"id":"tutorials/access-control","title":"Access Control","description":"In a previous tutorial, we introduced the Ownable module, which serves the purpose of securing access to specific contract features. While it establishes a fundamental security layer, there are numerous scenarios where this level of security is insufficient,","sidebar":"tutorialSidebar"},"tutorials/build-deploy-read":{"id":"tutorials/build-deploy-read","title":"Build, Deploy and Read the State of a Contract","description":"In this guide, we will show the full path from creating a contract, deploying it and reading the state.","sidebar":"tutorialSidebar"},"tutorials/erc20":{"id":"tutorials/erc20","title":"ERC-20","description":"It\'s time for something that every smart contract developer has done at least once. Let\'s try to implement Erc20 standard. Of course, we are going to use the Odra Framework.","sidebar":"tutorialSidebar"},"tutorials/ownable":{"id":"tutorials/ownable","title":"Ownable","description":"In this tutorial, we will write a simple module that allows us to set its owner. Later, it can be reused to limit access to the contract\'s critical features.","sidebar":"tutorialSidebar"},"tutorials/owned-token":{"id":"tutorials/owned-token","title":"OwnedToken","description":"This tutorial shows the great power of the modularization-focused design of the Odra Framework. We are going to use the modules we built in the last two tutorials to build a new one.","sidebar":"tutorialSidebar"},"tutorials/pauseable":{"id":"tutorials/pauseable","title":"Pausable","description":"The Pausable module is like your smart contract\'s safety switch. It lets authorized users temporarily pause certain features if needed. It\'s a great way to boost security, but it\'s not meant to be used on its own. Think of it as an extra tool in your access control toolbox, giving you more control to manage your smart contract safely and efficiently.","sidebar":"tutorialSidebar"}}}')}}]);