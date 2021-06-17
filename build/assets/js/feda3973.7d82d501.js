/*! For license information please see feda3973.7d82d501.js.LICENSE.txt */
(self.webpackChunkopentezos=self.webpackChunkopentezos||[]).push([[4507],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),m=i,d=p["".concat(c,".").concat(m)]||p[m]||g[m]||o;return n?r.createElement(d,a(a({ref:t},u),{},{components:n})):r.createElement(d,a({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3919:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return i}})},4996:function(e,t,n){"use strict";n.d(t,{C:function(){return o},Z:function(){return a}});var r=n(2263),i=n(3919);function o(){var e=(0,r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var o=void 0===r?{}:r,a=o.forcePrependBaseUrl,s=void 0!==a&&a,c=o.absolute,l=void 0!==c&&c;if(!n)return n;if(n.startsWith("#"))return n;if((0,i.b)(n))return n;if(s)return t+n;var u=n.startsWith(t)?n:t+n.replace(/^\//,"");return l?e+u:u}(o,n,e,t)}}}function a(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},2924:function(e,t,n){"use strict";var r=n(7294).createContext(void 0);t.Z=r},5350:function(e,t,n){"use strict";var r=n(7294),i=n(2924);t.Z=function(){var e=(0,r.useContext)(i.Z);if(null==e)throw new Error("`useThemeContext` is used outside of `Layout` Component. See https://docusaurus.io/docs/api/themes/configuration#usethemecontext.");return e}},3594:function(e,t,n){"use strict";n.d(t,{Z:function(){return f}});var r=n(7294),i=n(5697),o=n.n(i),a=n(3919),s=n(4184),c=n.n(s),l="root_1Xw6",u="disabled_wasc",g="overlay_33Re",p="children_1_FY",m="hasRoundedCorners_3EvO",d="hasShadow_t4g5",h=function(e){var t,n=e.children,i=e.className,o=e.hasShadow,s=e.hasRoundedCorners,h=e.overlay,f=e.to,v=e.onClick;return r.createElement("a",{className:c()(l,(t={},t[u]=void 0===f,t[d]=o,t[m]=s,t)),href:f,target:(0,a.Z)(f)?"_self":"_blank"},r.createElement("div",{className:c()(p,i),onClick:v},n),h&&r.createElement("div",{className:g},r.createElement("p",null,h)))};h.propTypes={onClick:o().func,className:o().string,hasShadow:o().bool,hasRoundedCorners:o().bool,overlay:o().string,to:o().string},h.defaultProps={hasRoundedCorners:!0,hasShadow:!0};var f=h},495:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(7294),i=n(5697),o=n.n(i),a={"large-tablet-breakpoint-query":"(min-width: calc(1024 * 1px))","mobile-breakpoint-max-query":"(max-width: calc( (420 - 1) * 1px ))",root:"root_3CJ0",rowOf2:"rowOf2_2EXQ",rowOf4:"rowOf4_3pU6"},s=function(e){var t=e.cardsPerRow,n=e.children,i=e.title;return r.createElement(r.Fragment,null,i&&r.createElement("h2",null,i),r.createElement("div",{className:a.root+" "+a["rowOf"+t]},n))};s.propTypes={cardsPerRow:o().number,title:o().string},s.defaultProps={cardsPerRow:3};var c=s},5197:function(e,t,n){"use strict";n.d(t,{Z:function(){return v}});var r,i=n(7294),o=n(5697),a=n.n(o),s=n(3594),c=n(9902),l="root_2lEe",u="contents_21WY",g="circleOverlay_23XL",p="image_3n2e",m="textContainer_d_6i",d="title_7Kea",h="description_2G7r",f=function(e){var t=e.description,n=e.icon,r=e.iconDark,o=e.overlay,a=e.title,f=e.to;return i.createElement(s.Z,{className:l,overlay:o,to:f},i.createElement("div",{className:g}),i.createElement("div",{className:u},i.createElement(c.Z,{className:p,imageLight:n,imageDark:r}),i.createElement("div",{className:m},i.createElement("span",{className:d},a),i.createElement("p",{className:h},t))))};f.propTypes=((r={description:a().string,icon:a().string.isRequired,iconDark:a().string,overlay:a().string}).overlay=a().string,r.title=a().string.isRequired,r.to=a().string,r);var v=f},7705:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(7294),i="root_2W3B",o=function(e){var t=e.children;return r.createElement("div",{className:i},t)}},9902:function(e,t,n){"use strict";var r=n(2122),i=n(9756),o=n(7294),a=n(5697),s=n.n(a),c=n(4996),l=n(5350),u=0,g=function(e){var t=e.children,n=e.className,a=e.imageDark,s=e.imageDarkHover,g=e.imageLight,p=e.imageLightHover,m=e.tag,d=(0,i.Z)(e,["children","className","imageDark","imageDarkHover","imageLight","imageLightHover","tag"]),h=(0,o.useState)(!1),f=h[0],v=h[1],b=[a,s,g,p],y=function(e,t){var n=e[0],r=e[1],i=e[2],o=e[3];if(!i)return"";var a=(0,l.Z)().isDarkTheme,s=a&&n?n:i,u=a&&r?r:o;u=u||s;var g=t?u:s;return(0,c.Z)(g)}(b,f),E=y?{backgroundImage:"url('"+y+"')"}:{},k=b.filter((function(e){return e})).map((function(e){return(0,c.Z)(e)}));return(0,o.useEffect)((function(){var e=k.map((function(e){var t=new Image;return t.src=e,t}));window.preloadedImages=window.preloadedImages||[],window.preloadedImages[u++]=e}),[]),o.createElement(m,(0,r.Z)({className:n,onMouseEnter:function(){return v(!0)},onMouseLeave:function(){return v(!1)},style:E},d),t)};g.propTypes={children:s().oneOfType([s().element,s().string]),imageDark:s().string,imageDarkHover:s().string,imageLight:s().string,imageLightHover:s().string,tag:s().oneOfType([s().string,s().func])},g.defaultProps={tag:"div"},t.Z=g},4655:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return S},frontMatter:function(){return D},metadata:function(){return O},toc:function(){return P}});var r=n(2122),i=n(9756),o=n(7294),a=n(3905),s=n(3552),c=(n(7705),n(495)),l=n(5197),u=n(5697),g=n.n(u),p=n(3594),m=n(9902),d=n(4184),h=n.n(d),f="root_1r-n",v="image_1-hF",b="smaller_vHjJ",y="title_2lmF",E="bolded_3lOl",k=function(e){var t,n,r=e.bolded,i=e.icon,a=e.iconDark,s=e.overlay,c=e.smallerImage,l=e.title,u=e.to,g=e.onClick;return o.createElement(p.Z,{className:f,overlay:s,to:u,onClick:g},o.createElement(m.Z,{className:h()(v,(t={},t[b]=c,t)),imageLight:i,imageDark:a}),o.createElement("span",{className:h()(y,(n={},n[E]=r,n))},l))};k.propTypes={onClick:g().func,bolded:g().bool,icon:g().string.isRequired,iconDark:g().string,overlay:g().string,smallerImage:g().bool,title:g().string.isRequired,to:g().string};var L=k,w={ALL:"All",SMARTPY_DEV:"Developer (SmartPy)",LIGO_DEV:"Developer (LIGO)",SCIENTIST:"Scientist",C_LEVEL:"C Level",STARTUPPER:"Startupper"},T=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={path:w.ALL},n}return(0,s.Z)(t,e),t.prototype.render=function(){var e=this;return console.log(this.state.path),o.createElement("div",null,o.createElement("h2",null,"Available paths"),o.createElement(c.Z,null,Object.keys(w).map((function(t,n){return o.createElement(L,{key:t,onClick:function(){return e.setState({path:w[t]})},icon:"img/icons/"+t+"-light.svg",iconDark:"img/icons/"+t+"-dark.svg",title:w[t],bolded:e.state.path===w[t]})}))),o.createElement("h2",null,"Modules in path"),o.createElement(c.Z,null,[w.ALL,w.SMARTPY_DEV,w.LIGO_DEV,w.SCIENTIST,w.C_LEVEL,w.STARTUPPER].includes(this.state.path)&&o.createElement(l.Z,{description:"What is a blockchain and how it works.",icon:"img/icons/blockchain-big-light.svg",iconDark:"img/icons/blockchain-big-dark.svg",title:"Blockchain Basics",to:"/blockchain-basics"}),[w.ALL,w.SMARTPY_DEV,w.LIGO_DEV,w.SCIENTIST,w.C_LEVEL,w.STARTUPPER].includes(this.state.path)&&o.createElement(l.Z,{description:"What is Tezos and how it works.",icon:"img/icons/tezos-big-light.svg",iconDark:"img/icons/tezos-big-dark.svg",title:"Tezos Basics",to:"/tezos-basics"}),[w.ALL,w.SMARTPY_DEV,w.LIGO_DEV,w.SCIENTIST].includes(this.state.path)&&o.createElement(l.Z,{description:"How to deploy your own Tezos node.",icon:"img/icons/node-big-light.svg",iconDark:"img/icons/node-big-dark.svg",title:"Deploy a node",to:"/deploy-a-node"}),[w.ALL,w.SMARTPY_DEV,w.LIGO_DEV].includes(this.state.path)&&o.createElement(l.Z,{description:"Learn to use and interact with a Tezos explorer.",icon:"img/icons/explorer-big-light.svg",iconDark:"img/icons/explorer-big-dark.svg",title:"How to use an Explorer",to:"/explorer"}),[w.ALL,w.SMARTPY_DEV].includes(this.state.path)&&o.createElement(l.Z,{description:"Learn the basics of the SmartPy smart contract language.",icon:"img/icons/smartpy-big-light.svg",iconDark:"img/icons/smartpy-big-dark.svg",title:"SmartPy",to:"/smartpy"}),[w.ALL,w.LIGO_DEV].includes(this.state.path)&&o.createElement(l.Z,{description:"Learn the basics of the LIGO smart contract language.",icon:"img/icons/ligo-big-light.svg",iconDark:"img/icons/ligo-big-dark.svg",title:"LIGO",to:"/ligo"}),[w.ALL,w.SCIENTIST].includes(this.state.path)&&o.createElement(l.Z,{description:"Learn the basics of the native Tezos smart contract language.",icon:"img/icons/michelson-big-light.svg",iconDark:"img/icons/michelson-big-dark.svg",title:"Michelson",to:"/michelson"}),[w.ALL,w.SMARTPY_DEV,w.LIGO_DEV,w.STARTUPPER].includes(this.state.path)&&o.createElement(l.Z,{description:"Everything you need to build your first Tezos Dapp.",icon:"img/icons/dapp-big-light.svg",iconDark:"img/icons/dapp-big-dark.svg",title:"Build a Dapp",to:"/dapp"}),[w.ALL,w.SMARTPY_DEV,w.LIGO_DEV,w.SCIENTIST,w.C_LEVEL,w.STARTUPPER].includes(this.state.path)&&o.createElement(l.Z,{description:"What is baking and how it works.",icon:"img/icons/baking-big-light.svg",iconDark:"img/icons/baking-big-dark.svg",title:"Baking",to:"/baking"}),[w.ALL,w.SMARTPY_DEV,w.LIGO_DEV,w.STARTUPPER].includes(this.state.path)&&o.createElement(l.Z,{description:"How to deploy your own bakers.",icon:"img/icons/baker-big-light.svg",iconDark:"img/icons/baker-big-dark.svg",title:"Deploy Bakers",to:"/baker"}),[w.ALL,w.SMARTPY_DEV,w.LIGO_DEV,w.C_LEVEL,w.STARTUPPER].includes(this.state.path)&&o.createElement(l.Z,{description:"Automated market maker, stablecoins, flash loans, synthetics, etc.",icon:"img/icons/defi-big-light.svg",iconDark:"img/icons/defi-big-dark.svg",title:"DeFi",to:"/defi"}),[w.ALL,w.SCIENTIST].includes(this.state.path)&&o.createElement(l.Z,{description:"Introduction to the concepts of formal verifications.",icon:"img/icons/formal-big-light.svg",iconDark:"img/icons/formal-big-dark.svg",title:"Formal Verification",to:"/formal-verification"}),[w.ALL].includes(this.state.path)&&o.createElement(l.Z,{description:"Create your own private Tezos network.",icon:"img/icons/private-big-light.svg",iconDark:"img/icons/private-big-dark.svg",title:"Private Blockchain",to:"/private"}),[w.ALL,w.SMARTPY_DEV,w.LIGO_DEV].includes(this.state.path)&&o.createElement(l.Z,{description:"Contribute to the Tezos ecosystem.",icon:"img/icons/contribute-big-light.svg",iconDark:"img/icons/contribute-big-dark.svg",title:"How to contribute",to:"/contribute"})))},t}(o.Component),D={id:"paths",disable_pagination:!0,title:"Paths",slug:"/paths",authors:"Aymeric Bethencourt"},O={unversionedId:"welcome/paths",id:"welcome/paths",isDocsHomePage:!1,title:"Paths",description:"Choose your own path",source:"@site/docs/welcome/paths.md",sourceDirName:"welcome",slug:"/paths",permalink:"/paths",editUrl:"https://github.com/octo-technology/OpenTezos/tree/main/docs/welcome/paths.md",version:"current",lastUpdatedBy:"AymericBethencourt",lastUpdatedAt:1623407844,formattedLastUpdatedAt:"6/11/2021",frontMatter:{id:"paths",disable_pagination:!0,title:"Paths",slug:"/paths",authors:"Aymeric Bethencourt"},sidebar:"docs",previous:{title:"Welcome to OpenTezos",permalink:"/"},next:{title:"Introduction",permalink:"/blockchain-basics"}},P=[{value:"Choose your own path",id:"choose-your-own-path",children:[]}],_={toc:P};function S(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},_,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"choose-your-own-path"},"Choose your own path"),(0,a.kt)("p",null,"OpenTezos is a complete encyclopedia of Tezos, with more than 700 pages. Depending on your interests, you may not want to read everything. Here you can select a profile and be guided toward the only modules on that path."),(0,a.kt)(T,{mdxType:"Paths"}))}S.isMDXComponent=!0},4184:function(e,t){var n;!function(){"use strict";var r={}.hasOwnProperty;function i(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)){if(n.length){var a=i.apply(null,n);a&&e.push(a)}}else if("object"===o)if(n.toString===Object.prototype.toString)for(var s in n)r.call(n,s)&&n[s]&&e.push(s);else e.push(n.toString())}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0===(n=function(){return i}.apply(t,[]))||(e.exports=n)}()}}]);