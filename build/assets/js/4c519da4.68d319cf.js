(self.webpackChunkopentezos=self.webpackChunkopentezos||[]).push([[2668],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||r;return n?a.createElement(f,i(i({ref:t},c),{},{components:n})):a.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9596:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return s},default:function(){return c}});var a=n(2122),o=n(9756),r=(n(7294),n(3905)),i={id:"temple",disable_pagination:!0,title:"Temple Wallet"},l={unversionedId:"dapp/temple",id:"dapp/temple",isDocsHomePage:!1,title:"Temple Wallet",description:"Dapp users need to have both addresses and the associated private keys of these addresses.",source:"@site/docs/dapp/temple.md",sourceDirName:"dapp",slug:"/dapp/temple",permalink:"/dapp/temple",editUrl:"https://github.com/octo-technology/OpenTezos/tree/main/docs/dapp/temple.md",version:"current",lastUpdatedBy:"Theotime-Akeare",lastUpdatedAt:1623418963,formattedLastUpdatedAt:"6/11/2021",frontMatter:{id:"temple",disable_pagination:!0,title:"Temple Wallet"},sidebar:"docs",previous:{title:"Taquito",permalink:"/dapp/taquito"},next:{title:"Build a dapp - basics",permalink:"/dapp/basics"}},s=[],p={toc:s};function c(e){var t=e.components,i=(0,o.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,a.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Dapp users need to have both addresses and the associated private keys of these addresses.\nThey want to be able to securely store their private keys, easily use and manage their addresses, and easily use the different dapps.\nAll of this can be performed by some tools called wallets.\nThey can be desktop applications, browser plugins, hardware or smart contracts..."),(0,r.kt)("p",null,"In the case of dapps, the best option is to opt for a browser plugin.\nThese are easy to find and to install.\nThey provide developers with a library that can be used in their dapp to connect with the user wallet."),(0,r.kt)("p",null,"In this chapter, we'll introduce you to the Temple Wallet, developed and maintained by ",(0,r.kt)("em",{parentName:"p"},"Madfish solutions"),".\nThis first part is a tutorial about how to install and use a Temple Wallet."),(0,r.kt)("h1",{id:"installation"},"Installation"),(0,r.kt)("p",null,"The Temple wallet plugin can be downloaded from here:"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://templewallet.com/download"},"https://templewallet.com/download")),(0,r.kt)("p",null,"Choose your browser and add Temple to your plugins.\nYou will have the choice to import an existing wallet, or to create a new one."),(0,r.kt)("p",null,"Let's create a new wallet, choose a password and save the mnemonic phrase."),(0,r.kt)("p",null,"You'll get to the main page:"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(6538).Z,title:"Temple main page"})),(0,r.kt)("p",null,"You should end up with an account that is activated but not funded."),(0,r.kt)("h1",{id:"faucet-import"},"Faucet import"),(0,r.kt)("p",null,"Let's import a faucet for the Florence network.\nFirst, download a faucet json from ",(0,r.kt)("a",{parentName:"p",href:"https://faucet.tzalpha.net/"},"https://faucet.tzalpha.net/")),(0,r.kt)("p",null,'Then, open the Temple Wallet.\nClick on the network dropdown bar (first spot), select Florence network.\nThen click on your account thumbnail (second dot), then "Import account" and finally "Faucet file".'),(0,r.kt)("p",null,"You can load your json file.\nOnce the activation is confirmed, you will automatically be redirected to the Temple main page, with your activated account."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(7204).Z,title:"Temple main page"})),(0,r.kt)("h1",{id:"send-a-transaction"},"Send a transaction"),(0,r.kt)("p",null,'Now that we have an account with some funds from the faucet, let\'s send some of them to our first account.\nClick on "Send".'),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(4891).Z,title:"Temple send page"})),(0,r.kt)("p",null,"You can send funds to any address by manually filling the recipient.\nOr you can choose from one of your addresses by clicking on the list at the bottom of the page (third spot)"),(0,r.kt)("p",null,"Send 100 XTZ (or another amount) to your first account.\nA confirmation page will pop up.\nYou can review some information on this page: transaction amount, receiver and fees."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(4960).Z,title:"Temple send page"})),(0,r.kt)("p",null,'All the transaction information can be found under the "Raw" tab:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "branch": "BMBg53qGc5xM42Dd3ymNV6pV1KJCJmL73T6aGfmdEmrBL6ajnfS",\n  "contents": [\n    {\n      "kind": "reveal",\n      "source": "tz1cLMENL1FJYMBJ3WPg5UQAEFobdVPFrdpH",\n      "fee": "1420",\n      "counter": "162232",\n      "gas_limit": "10600",\n      "storage_limit": "0",\n      "public_key": "edpkvVNoJuAADKX3pYskzfXLpn8gBAnQjjcGQjQf22Amf9Kh4kfbnx"\n    },\n    {\n      "kind": "transaction",\n      "source": "tz1cLMENL1FJYMBJ3WPg5UQAEFobdVPFrdpH",\n      "fee": "507",\n      "counter": "162233",\n      "gas_limit": "1527",\n      "storage_limit": "257",\n      "amount": "100000000",\n      "destination": "tz1beoZXxjqsXGoZnwW4TZD3MWGFpLHRxeFN"\n    }\n  ]\n}\n')),(0,r.kt)("p",null,"Once the transaction is confirmed, you can switch to your first account (by clicking on the top-right thumbnail) and observe that your account balance has indeed increased to 100 XTZ"),(0,r.kt)("h1",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,"Temple Wallet is a user-friendly wallet for Tezos. Within a few clicks, a transaction can be sent to any address.\nAnother benefit of using a wallet is the possibility of interacting with Dapps, this will be detailed in the next chapter."))}c.isMDXComponent=!0},6538:function(e,t,n){"use strict";t.Z=n.p+"assets/images/temple1-c72e11f6393297d83bc082c85947387f.png"},7204:function(e,t,n){"use strict";t.Z=n.p+"assets/images/temple2-fa69bfaab3efde2c1c1e14de7970bab4.png"},4891:function(e,t,n){"use strict";t.Z=n.p+"assets/images/temple3-11e01186d01a67d3ae6cfb1c57df78ca.png"},4960:function(e,t,n){"use strict";t.Z=n.p+"assets/images/temple4-ca5344bb286c5fbd6aed74d26eb5b51f.png"}}]);