(self.webpackChunkopentezos=self.webpackChunkopentezos||[]).push([[5142],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return m},kt:function(){return d}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=i,h=u["".concat(s,".").concat(d)]||u[d]||c[d]||o;return n?a.createElement(h,r(r({ref:t},m),{},{components:n})):a.createElement(h,r({ref:t},m))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var p=2;p<o;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},947:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return r},metadata:function(){return l},toc:function(){return s},default:function(){return m}});var a=n(2122),i=n(9756),o=(n(7294),n(3905)),r={id:"examples",title:"Examples",authors:"Frank Hillard"},l={unversionedId:"michelson/examples",id:"michelson/examples",isDocsHomePage:!1,title:"Examples",description:"Example 1: Modulo with LOOP and IF",source:"@site/docs/michelson/examples.md",sourceDirName:"michelson",slug:"/michelson/examples",permalink:"/michelson/examples",editUrl:"https://github.com/octo-technology/OpenTezos/tree/main/docs/michelson/examples.md",version:"current",lastUpdatedBy:"AymericBethencourt",lastUpdatedAt:1622492036,formattedLastUpdatedAt:"5/31/2021",frontMatter:{id:"examples",title:"Examples",authors:"Frank Hillard"},sidebar:"docs",previous:{title:"Tutorial",permalink:"/michelson/tutorial"},next:{title:"Instructions Reference",permalink:"/michelson/instructions-reference"}},s=[{value:"Example 1: Modulo with <code>LOOP</code> and <code>IF</code>",id:"example-1-modulo-with-loop-and-if",children:[]},{value:"Example 2: Maximum of a list with <code>ITER</code> and <code>CMPLE</code>",id:"example-2-maximum-of-a-list-with-iter-and-cmple",children:[]},{value:"Example 3: Executing a lambda with <code>EXEC</code> and <code>LAMBDA</code>",id:"example-3-executing-a-lambda-with-exec-and-lambda",children:[]},{value:"Example 4: Computing a sum with <code>LOOP_LEFT</code>",id:"example-4-computing-a-sum-with-loop_left",children:[]},{value:"Example 5 : Computing a factorial with <code>LOOP_LEFT</code>",id:"example-5--computing-a-factorial-with-loop_left",children:[]}],p={toc:s};function m(e){var t=e.components,r=(0,i.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"example-1-modulo-with-loop-and-if"},"Example 1: Modulo with ",(0,o.kt)("inlineCode",{parentName:"h3"},"LOOP")," and ",(0,o.kt)("inlineCode",{parentName:"h3"},"IF")),(0,o.kt)("p",null,"Let's illustrate the following Michelson instructions: ",(0,o.kt)("inlineCode",{parentName:"p"},"LOOP"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"DIP"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"DUP"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"SWAP"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"PUSH"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"CMPLE"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"IF"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"SUB"),". The example below computes the ",(0,o.kt)("em",{parentName:"p"},"modulo")," between two numbers (e.g. 7 % 5 = 2)."),(0,o.kt)("p",null,"The idea is to repetitively subtract the divisor from the dividend. Once the dividend is smaller than the divisor, we have successfully computed the remainder."),(0,o.kt)("p",null,"The following smart contract takes a pair of integers and computes the ",(0,o.kt)("em",{parentName:"p"},"modulo")," of these two integers (using a ",(0,o.kt)("inlineCode",{parentName:"p"},"LOOP")," instruction)."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"parameter (pair int int) ;\nstorage int ;\ncode { CAR ;\n       DUP ;\n       UNPAIR ;\n       COMPARE ;\n       GT ;\n       DIP { UNPAIR } ;\n       LOOP { DIP { DUP } ;\n              DUP ;\n              DIP { SWAP } ;\n              CMPLE ;\n              IF\n                     { PUSH bool False }\n                     { DIP { DUP } ; SUB ; PUSH bool True } ; } ;\n       DIP { DROP } ;\n       NIL operation ;\n       PAIR }\n")),(0,o.kt)("p",null,"Now, let's simulate the execution of this snippet of code. For this example, the initial stack is initialized with 7 and 5 (in order to compute 7 % 5)."),(0,o.kt)("p",null,"Notice that the ",(0,o.kt)("inlineCode",{parentName:"p"},"LOOP")," instruction stops when it is given a ",(0,o.kt)("inlineCode",{parentName:"p"},"False")," condition (it appears in red in the diagram below). In our example, the condition is initialized to ",(0,o.kt)("inlineCode",{parentName:"p"},"True")," because 7 is greater than 5 (and the ",(0,o.kt)("em",{parentName:"p"},"modulo")," needs to be computed)."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(3184).Z})),(0,o.kt)("small",{className:"figure"},"FIGURE 1: Illustration of the _Modulo_ example"),(0,o.kt)("p",null,'The execution of the "loop_example.tz" smart contract can be simulated with the following command:'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"tezos-client run script loop_example.tz on storage '0' and input '(Pair 7 5)'\n")),(0,o.kt)("h3",{id:"example-2-maximum-of-a-list-with-iter-and-cmple"},"Example 2: Maximum of a list with ",(0,o.kt)("inlineCode",{parentName:"h3"},"ITER")," and ",(0,o.kt)("inlineCode",{parentName:"h3"},"CMPLE")),(0,o.kt)("p",null,"Let's illustrate the following Michelson instructions: ",(0,o.kt)("inlineCode",{parentName:"p"},"CAR"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"CDR"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"ITER"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"DIP"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"DUP"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"DROP"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"SWAP"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"CMPLE"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"IF"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"NONE"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"SOME"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"IF_NONE"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"option"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"list"),". The following snippet of code computes the maximum of a list of integers."),(0,o.kt)("p",null,"The idea is to repetitively take an element from the list and compare it with the maximum computed so far. Once the list is processed, the stack contains the biggest integer of the list."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"parameter (list int) ;\nstorage (option int) ;\ncode { CAR ;\n       DIP { NONE int } ;\n       ITER { SWAP ;\n              IF_NONE\n                { SOME }\n                { DIP { DUP } ;\n                  DUP ;\n                  DIP { SWAP } ;\n                  CMPLE;\n                  IF { DROP } { DIP { DROP } };\n                  SOME\n                }\n            } ;\n       NIL operation ;\n       PAIR }\n")),(0,o.kt)("p",null,"Notice that the storage stores an ",(0,o.kt)("inlineCode",{parentName:"p"},"option int"),". Indeed, if the given list is empty, then there is no maximum."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(4138).Z})),(0,o.kt)("small",{className:"figure"},"FIGURE 2: Illustration of the _Maximum of a list_ example"),(0,o.kt)("p",null,"Notice, in red in the diagram above, that the ",(0,o.kt)("inlineCode",{parentName:"p"},"ITER")," instruction is called recursively on each element of the given list of integers."),(0,o.kt)("p",null,"If you have setup a Tezos node, you can use the tezos-client program to simulate your smart contract (max_list.tz) with the following command. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"tezos-client run script max_list.tz on storage 'None' and input '{1;2;5;3;7;2;15;4}'\n")),(0,o.kt)("h3",{id:"example-3-executing-a-lambda-with-exec-and-lambda"},"Example 3: Executing a lambda with ",(0,o.kt)("inlineCode",{parentName:"h3"},"EXEC")," and ",(0,o.kt)("inlineCode",{parentName:"h3"},"LAMBDA")),(0,o.kt)("p",null,"Let's illustrate the following Michelson instructions: ",(0,o.kt)("inlineCode",{parentName:"p"},"EXEC"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"LAMBDA"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"SWAP"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"PUSH"),". The following snippet of code takes an integer and increments it using a ",(0,o.kt)("em",{parentName:"p"},"lambda"),"."),(0,o.kt)("p",null,"The idea is to define a lambda function (which increments an integer) and execute the function. Once the function has been applied, the result is returned as a new storage state."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"parameter int ;\nstorage int ;\ncode { CAR ;\n       LAMBDA int int { PUSH int 1 ; ADD } ;\n       SWAP ;\n       EXEC ;\n       NIL operation ;\n       PAIR }\n")),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(625).Z})),(0,o.kt)("small",{className:"figure"},"FIGURE 3: Illustration of the execution of a lambda"),(0,o.kt)("h3",{id:"example-4-computing-a-sum-with-loop_left"},"Example 4: Computing a sum with ",(0,o.kt)("inlineCode",{parentName:"h3"},"LOOP_LEFT")),(0,o.kt)("p",null,"The following smart contract illustrates the ",(0,o.kt)("inlineCode",{parentName:"p"},"LOOP_LEFT")," instruction usage. It takes an integer as the parameter and computes the sum from zero to the given integer."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"parameter int ;\nstorage int ;\ncode { CAR ; PUSH int 0 ; SWAP ; PAIR ;\n       LEFT int ;\n       LOOP_LEFT {   DUP ;\n                     CAR ;\n                     DUP ;\n                     PUSH int 1 ;\n                     SWAP ;\n                     SUB ;\n                     DIP { SWAP ; CDR ; ADD };\n                     DUP ;\n                     GT ;\n                     IF\n                            { PAIR ; LEFT int }\n                            { DROP ; RIGHT (pair int int) }  } ;\n       NIL operation ;\n       PAIR }\n")),(0,o.kt)("p",null,"Let's breakdown the execution of this smart contract. In our example, storage is only used to store the result of the execution. The diagram below shows how the sum of integers from 0 to 5 is computed."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(8632).Z})),(0,o.kt)("small",{className:"figure"},"FIGURE 4: Illustration of the `LOOP_LEFT` instruction"),(0,o.kt)("h3",{id:"example-5--computing-a-factorial-with-loop_left"},"Example 5 : Computing a factorial with ",(0,o.kt)("inlineCode",{parentName:"h3"},"LOOP_LEFT")),(0,o.kt)("p",null,"Let's illustrate the following Michelson instructions: ",(0,o.kt)("inlineCode",{parentName:"p"},"LOOP_LEFT"),". The following snippet of code takes an integer and computes a factorial of the given integer; the result is saved in storage."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"parameter int ;\nstorage int ;\ncode { PUSH int 1 ;\n       SWAP ;\n       CAR ;\n       PAIR ;\n       LEFT int ;\n       LOOP_LEFT\n            { DUP ;\n              CAR ;\n              SWAP ;\n              CDR ;\n              PUSH int 0 ;\n              DIG 2 ;\n              DUP ;\n              DUG 3 ;\n              COMPARE ;\n              GT ;\n              IF {   SWAP ;\n                     DUP ;\n                     DUG 2 ;\n                     SWAP ;\n                     MUL ;\n                     PUSH int 1 ;\n                     DIG 2 ;\n                     SUB ;\n                     PAIR ;\n                     LEFT int }\n                 { SWAP ; DROP ; RIGHT (pair int int) } } ;\n       NIL operation ;\n       PAIR }\n")))}m.isMDXComponent=!0},625:function(e,t,n){"use strict";t.Z=n.p+"assets/images/michelson_example_lambdaexec_execution-1708b688c6c433b239827c11b061aedb.svg"},8632:function(e,t,n){"use strict";t.Z=n.p+"assets/images/michelson_example_loopleft_execution-0105d8f4faafe4d9a32e156cab935e6e.svg"},4138:function(e,t,n){"use strict";t.Z=n.p+"assets/images/michelson_example_maxlist_execution-1e1e4b07f1ff4d11809d785207c2ce68.svg"},3184:function(e,t,n){"use strict";t.Z=n.p+"assets/images/michelson_example_modulo_execution-b7aaddbf1ce4ce9543cd364ceddd5803.svg"}}]);