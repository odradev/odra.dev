"use strict";(self.webpackChunkodra_website=self.webpackChunkodra_website||[]).push([[21887],{47619:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"0.5.0","label":"0.5.0","banner":"unmaintained","badge":true,"noIndex":false,"className":"docs-version-0.5.0","isLast":false,"docsSidebars":{"tutorialSidebar":[{"type":"link","label":"Odra framework","href":"/docs/0.5.0/","docId":"intro"},{"type":"category","label":"Getting started","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Installation","href":"/docs/0.5.0/getting-started/installation","docId":"getting-started/installation"},{"type":"link","label":"Flipper example","href":"/docs/0.5.0/getting-started/flipper","docId":"getting-started/flipper"}],"href":"/docs/0.5.0/category/getting-started"},{"type":"category","label":"Basics","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Cargo Odra","href":"/docs/0.5.0/basics/cargo-odra","docId":"basics/cargo-odra"},{"type":"link","label":"Directory structure","href":"/docs/0.5.0/basics/directory-structure","docId":"basics/directory-structure"},{"type":"link","label":"Odra.toml","href":"/docs/0.5.0/basics/odra-toml","docId":"basics/odra-toml"},{"type":"link","label":"Flipper Internals","href":"/docs/0.5.0/basics/flipper-internals","docId":"basics/flipper-internals"},{"type":"link","label":"Storage interaction","href":"/docs/0.5.0/basics/storage-interaction","docId":"basics/storage-interaction"},{"type":"link","label":"Host Communication","href":"/docs/0.5.0/basics/communicating-with-host","docId":"basics/communicating-with-host"},{"type":"link","label":"Testing","href":"/docs/0.5.0/basics/testing","docId":"basics/testing"},{"type":"link","label":"Errors","href":"/docs/0.5.0/basics/errors","docId":"basics/errors"},{"type":"link","label":"Events","href":"/docs/0.5.0/basics/events","docId":"basics/events"},{"type":"link","label":"Cross calls","href":"/docs/0.5.0/basics/cross-calls","docId":"basics/cross-calls"},{"type":"link","label":"Modules","href":"/docs/0.5.0/basics/modules","docId":"basics/modules"},{"type":"link","label":"Native token","href":"/docs/0.5.0/basics/native-token","docId":"basics/native-token"}],"href":"/docs/0.5.0/category/basics"},{"type":"category","label":"Advanced","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Module reusing","href":"/docs/0.5.0/advanced/using","docId":"advanced/using"},{"type":"link","label":"Delegate","href":"/docs/0.5.0/advanced/delegate","docId":"advanced/delegate"},{"type":"link","label":"Advanced Storage Concepts","href":"/docs/0.5.0/advanced/advanced-storage","docId":"advanced/advanced-storage"},{"type":"link","label":"Attributes","href":"/docs/0.5.0/advanced/attributes","docId":"advanced/attributes"},{"type":"link","label":"Signatures","href":"/docs/0.5.0/advanced/signatures","docId":"advanced/signatures"}],"href":"/docs/0.5.0/category/advanced"},{"type":"category","label":"Backends","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"What is a backend?","href":"/docs/0.5.0/backends/what-is-a-backend","docId":"backends/what-is-a-backend"},{"type":"link","label":"MockVM","href":"/docs/0.5.0/backends/mock-vm","docId":"backends/mock-vm"},{"type":"link","label":"Casper","href":"/docs/0.5.0/backends/casper","docId":"backends/casper"}],"href":"/docs/0.5.0/category/backends"},{"type":"category","label":"Examples","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"odra-examples","href":"/docs/0.5.0/examples/odra-examples","docId":"examples/odra-examples"},{"type":"link","label":"Using odra-modules","href":"/docs/0.5.0/examples/using-odra-modules","docId":"examples/using-odra-modules"}],"href":"/docs/0.5.0/category/examples"},{"type":"category","label":"Tutorials","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Ownable","href":"/docs/0.5.0/tutorials/ownable","docId":"tutorials/ownable"},{"type":"link","label":"ERC-20","href":"/docs/0.5.0/tutorials/erc20","docId":"tutorials/erc20"},{"type":"link","label":"OwnedToken","href":"/docs/0.5.0/tutorials/owned-token","docId":"tutorials/owned-token"}],"href":"/docs/0.5.0/category/tutorials"}]},"docs":{"advanced/advanced-storage":{"id":"advanced/advanced-storage","title":"Advanced Storage Concepts","description":"The Odra Framework provides advanced storage interaction capabilities that extend beyond the basic storage interaction. This document will focus on the Mapping and Sequence modules, which are key components of the advanced storage interaction in Odra.","sidebar":"tutorialSidebar"},"advanced/attributes":{"id":"advanced/attributes","title":"Attributes","description":"Smart contract developers with Ethereum background are familiar with Solidity\'s concept of modifiers in Solidity - a feature that allows developers to embed common checks into function definitions in a readable and reusable manner. These are essentially prerequisites for function execution.","sidebar":"tutorialSidebar"},"advanced/delegate":{"id":"advanced/delegate","title":"Delegate","description":"Managing boilerplate code can often lead to code that is cumbersome and challenging to comprehend. The Odra library introduces a solution to this issue with its Delegate feature. As the name implies, the Delegate feature permits the delegation of function calls to child modules, effectively minimizing the redundancy of boilerplate code and maintaining a lean and orderly parent module.","sidebar":"tutorialSidebar"},"advanced/signatures":{"id":"advanced/signatures","title":"Signatures","description":"As each backend can use a different scheme for generating key pairs,","sidebar":"tutorialSidebar"},"advanced/using":{"id":"advanced/using","title":"Module reusing","description":"This feature of the Odra Framework is designed to enhance the reusability and modularity of your smart contracts. It empowers developers to reuse modules and override custom namespaces. This guide provides an in-depth look at the module reusing feature, complete with practical code examples.","sidebar":"tutorialSidebar"},"backends/casper":{"id":"backends/casper","title":"Casper","description":"The Casper backend allows you to compile your contracts into WASM files which can be deployed","sidebar":"tutorialSidebar"},"backends/mock-vm":{"id":"backends/mock-vm","title":"MockVM","description":"The MockVM is a simple implementation of a mock backend with a minimal set of features that allows testing","sidebar":"tutorialSidebar"},"backends/what-is-a-backend":{"id":"backends/what-is-a-backend","title":"What is a backend?","description":"You can think of a backend as a target platform for your smart contract.","sidebar":"tutorialSidebar"},"basics/cargo-odra":{"id":"basics/cargo-odra","title":"Cargo Odra","description":"A tool for managing Odra projects","sidebar":"tutorialSidebar"},"basics/communicating-with-host":{"id":"basics/communicating-with-host","title":"Host Communication","description":"How to get information from the Host","sidebar":"tutorialSidebar"},"basics/cross-calls":{"id":"basics/cross-calls","title":"Cross calls","description":"Contracts calling contracts","sidebar":"tutorialSidebar"},"basics/directory-structure":{"id":"basics/directory-structure","title":"Directory structure","description":"Files and folders in the Odra project","sidebar":"tutorialSidebar"},"basics/errors":{"id":"basics/errors","title":"Errors","description":"Causing and handling errors","sidebar":"tutorialSidebar"},"basics/events":{"id":"basics/events","title":"Events","description":"Creating and emitting Events","sidebar":"tutorialSidebar"},"basics/flipper-internals":{"id":"basics/flipper-internals","title":"Flipper Internals","description":"Detailed explanation of the Flipper contract","sidebar":"tutorialSidebar"},"basics/modules":{"id":"basics/modules","title":"Modules","description":"Divide your code into modules","sidebar":"tutorialSidebar"},"basics/native-token":{"id":"basics/native-token","title":"Native token","description":"How to deposit, withdraw and transfer","sidebar":"tutorialSidebar"},"basics/odra-toml":{"id":"basics/odra-toml","title":"Odra.toml","description":"Odra\'s configuration file","sidebar":"tutorialSidebar"},"basics/storage-interaction":{"id":"basics/storage-interaction","title":"Storage interaction","description":"How to write data into blockchain\'s storage","sidebar":"tutorialSidebar"},"basics/testing":{"id":"basics/testing","title":"Testing","description":"How to write tests in Odra","sidebar":"tutorialSidebar"},"examples/odra-examples":{"id":"examples/odra-examples","title":"odra-examples","description":"Odra repository provides rich source learning materials. We want to ensure you would feel comfortable with the framework from day one and make the learning curve as flat as possible. Are you a Solidity developer? Are you a Casper developer? Are you new to smart contracts development? To learn Odra from its creators, look at the examples in the Odra main repository.","sidebar":"tutorialSidebar"},"examples/using-odra-modules":{"id":"examples/using-odra-modules","title":"Using odra-modules","description":"Besides the Odra framework, you can attach to your project odra-module - a set of plug-and-play modules.","sidebar":"tutorialSidebar"},"getting-started/flipper":{"id":"getting-started/flipper","title":"Flipper example","description":"To quickly start working with Odra, take a look at the following code sample. If you followed the","sidebar":"tutorialSidebar"},"getting-started/installation":{"id":"getting-started/installation","title":"Installation","description":"Hello fellow Odra user! This page will guide you through the installation process.","sidebar":"tutorialSidebar"},"intro":{"id":"intro","title":"Odra framework","description":"Odra Docs","sidebar":"tutorialSidebar"},"tutorials/erc20":{"id":"tutorials/erc20","title":"ERC-20","description":"It\'s time for something that every smart contract developer has done at least once. Let\'s try to implement Erc20 standard. Of course, we are going to use the Odra Framework.","sidebar":"tutorialSidebar"},"tutorials/ownable":{"id":"tutorials/ownable","title":"Ownable","description":"In this tutorial, we will write a simple module that allows us to set its owner. Later, it can be reused to limit access to the contract\'s critical features.","sidebar":"tutorialSidebar"},"tutorials/owned-token":{"id":"tutorials/owned-token","title":"OwnedToken","description":"This tutorial shows the great power of the modularization-focused design of the Odra Framework. We are going to use the modules we built in the last two tutorials to build a new one.","sidebar":"tutorialSidebar"}}}')}}]);