(self.webpackChunkopentezos=self.webpackChunkopentezos||[]).push([[3287],{3905:function(e,M,t){"use strict";t.d(M,{Zo:function(){return u},kt:function(){return T}});var a=t(7294);function n(e,M,t){return M in e?Object.defineProperty(e,M,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[M]=t,e}function N(e,M){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);M&&(a=a.filter((function(M){return Object.getOwnPropertyDescriptor(e,M).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var M=1;M<arguments.length;M++){var t=null!=arguments[M]?arguments[M]:{};M%2?N(Object(t),!0).forEach((function(M){n(e,M,t[M])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):N(Object(t)).forEach((function(M){Object.defineProperty(e,M,Object.getOwnPropertyDescriptor(t,M))}))}return e}function c(e,M){if(null==e)return{};var t,a,n=function(e,M){if(null==e)return{};var t,a,n={},N=Object.keys(e);for(a=0;a<N.length;a++)t=N[a],M.indexOf(t)>=0||(n[t]=e[t]);return n}(e,M);if(Object.getOwnPropertySymbols){var N=Object.getOwnPropertySymbols(e);for(a=0;a<N.length;a++)t=N[a],M.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var r=a.createContext({}),D=function(e){var M=a.useContext(r),t=M;return e&&(t="function"==typeof e?e(M):i(i({},M),e)),t},u=function(e){var M=D(e.components);return a.createElement(r.Provider,{value:M},e.children)},j={inlineCode:"code",wrapper:function(e){var M=e.children;return a.createElement(a.Fragment,{},M)}},I=a.forwardRef((function(e,M){var t=e.components,n=e.mdxType,N=e.originalType,r=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),I=D(t),T=n,o=I["".concat(r,".").concat(T)]||I[T]||j[T]||N;return t?a.createElement(o,i(i({ref:M},u),{},{components:t})):a.createElement(o,i({ref:M},u))}));function T(e,M){var t=arguments,n=M&&M.mdxType;if("string"==typeof e||n){var N=t.length,i=new Array(N);i[0]=I;var c={};for(var r in M)hasOwnProperty.call(M,r)&&(c[r]=M[r]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var D=2;D<N;D++)i[D]=t[D];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}I.displayName="MDXCreateElement"},3933:function(e,M,t){"use strict";t.d(M,{Z:function(){return N}});var a=t(7294),n={button:"button_2UxY"},N=function(e){var M=e.children;return a.createElement("div",{className:n.root},M)}},5164:function(e,M,t){"use strict";t.d(M,{Z:function(){return N}});var a=t(3552),n=t(7294),N=function(e){function M(M){var t;return(t=e.call(this,M)||this).state={userName:"",sucess:void 0},t}(0,a.Z)(M,e);var t=M.prototype;return t.handleSubmit=function(e){var M=this;e.preventDefault();var t=0,a=0;this.props.children.forEach((function(e){"ExamCheckbox"===e.props.mdxType&&(t+=1,"true"===e.props.isCorrect!=!!M.state[e.props.name]&&(a+=1))})),parseInt(a/t*100)<=10?this.setState({success:!0}):this.setState({success:!1})},t.handleChange=function(e){var M;e.preventDefault();var t=e.target,a="checkbox"===t.type?t.checked:t.value,n=t.name;this.setState(((M={})[n]=a,M))},t.handleNameChange=function(e){e.preventDefault(),this.setState({userName:e.target.value})},t.render=function(){var e=this;return n.createElement("form",{onSubmit:function(M){return e.handleSubmit(M)}},this.props.children.map((function(M){return M.props&&"ExamCheckbox"===M.props.mdxType?n.createElement("div",{key:M.props.name},n.createElement("label",null,n.createElement("input",{className:"exam-checkbox",name:M.props.name,type:"checkbox",checked:!!e.state[M.props.name],onChange:function(M){return e.handleChange(M)}}),M.props.children),n.createElement("br",null)):M.props&&"h3"===M.props.mdxType?n.createElement("div",{key:M.props.children},n.createElement("br",null),n.createElement("br",null),M):M})),n.createElement("br",null),n.createElement("br",null),this.state.success?n.createElement("div",{className:"green"},"Congrats, your pdf certificate has been sent!"):n.createElement("div",null,!1===this.state.success&&n.createElement("div",{className:"red"},"Sorry, you made too many mistakes, please try again."),n.createElement("label",null,"Your name:",n.createElement("input",{type:"text",value:this.state.name,onChange:function(M){return e.handleNameChange(M)},className:"exam-name"})),n.createElement("input",{type:"submit",value:"Submit",className:"exam-submit"})))},M}(n.Component)},6523:function(e,M,t){"use strict";t.r(M),t.d(M,{frontMatter:function(){return r},metadata:function(){return D},toc:function(){return u},default:function(){return I}});var a=t(2122),n=t(9756),N=(t(7294),t(3905)),i=t(5164),c=t(3933),r={id:"exam",title:"Exam",authors:"Frank Hillard"},D={unversionedId:"michelson/exam",id:"michelson/exam",isDocsHomePage:!1,title:"Exam",description:"Question 1",source:"@site/docs/michelson/exam.md",sourceDirName:"michelson",slug:"/michelson/exam",permalink:"/michelson/exam",editUrl:"https://github.com/octo-technology/OpenTezos/tree/main/docs/michelson/exam.md",version:"current",lastUpdatedBy:"AymericBethencourt",lastUpdatedAt:1623413479,formattedLastUpdatedAt:"6/11/2021",frontMatter:{id:"exam",title:"Exam",authors:"Frank Hillard"},sidebar:"docs",previous:{title:"Instructions Reference",permalink:"/michelson/instructions-reference"},next:{title:"Take away",permalink:"/michelson/take-away"}},u=[{value:"Question 1",id:"question-1",children:[]},{value:"Question 2",id:"question-2",children:[]},{value:"Question 3",id:"question-3",children:[]},{value:"Question 4",id:"question-4",children:[]},{value:"Question 5",id:"question-5",children:[]},{value:"Question 6",id:"question-6",children:[]},{value:"Question 7",id:"question-7",children:[]},{value:"Question 8",id:"question-8",children:[]},{value:"Question 9",id:"question-9",children:[]},{value:"Question 10",id:"question-10",children:[]}],j={toc:u};function I(e){var M=e.components,r=(0,n.Z)(e,["components"]);return(0,N.kt)("wrapper",(0,a.Z)({},j,r,{components:M,mdxType:"MDXLayout"}),(0,N.kt)(i.Z,{moduleName:"DeFi",mdxType:"ExamForm"},(0,N.kt)("h3",{id:"question-1"},"Question 1"),(0,N.kt)("p",null,"Which notions are defined inside the smart contract?"),(0,N.kt)(c.Z,{name:"00",isCorrect:"true",mdxType:"ExamCheckbox"},"The type definition of the storage"),(0,N.kt)(c.Z,{name:"01",isCorrect:"false",mdxType:"ExamCheckbox"},"The balance of the contract"),(0,N.kt)(c.Z,{name:"02",isCorrect:"false",mdxType:"ExamCheckbox"},"The initial value of the storage"),(0,N.kt)(c.Z,{name:"03",isCorrect:"false",mdxType:"ExamCheckbox"},"The value of the entrypoint and its related parameters"),(0,N.kt)(c.Z,{name:"04",isCorrect:"true",mdxType:"ExamCheckbox"},"The type definition of the entrypoint"),(0,N.kt)(c.Z,{name:"05",isCorrect:"false",mdxType:"ExamCheckbox"},"The size of the storage"),(0,N.kt)(c.Z,{name:"06",isCorrect:"true",mdxType:"ExamCheckbox"},"The code of the smart contract"),(0,N.kt)(c.Z,{name:"07",isCorrect:"false",mdxType:"ExamCheckbox"},"The list of users allowed to call the smart contract"),(0,N.kt)("h3",{id:"question-2"},"Question 2"),(0,N.kt)("p",null,"What is returned by the execution of a smart contract?"),(0,N.kt)(c.Z,{name:"10",isCorrect:"false",mdxType:"ExamCheckbox"},"The current storage state when invoking the smart contract"),(0,N.kt)(c.Z,{name:"11",isCorrect:"true",mdxType:"ExamCheckbox"},"The modified storage state after invoking the smart contract"),(0,N.kt)(c.Z,{name:"12",isCorrect:"false",mdxType:"ExamCheckbox"},"The entrypoint that has been called (and its related parameters)"),(0,N.kt)(c.Z,{name:"13",isCorrect:"true",mdxType:"ExamCheckbox"},"The list of emitted operations produced by the execution of the smart contract"),(0,N.kt)(c.Z,{name:"14",isCorrect:"false",mdxType:"ExamCheckbox"},"The balance of the contract"),(0,N.kt)(c.Z,{name:"15",isCorrect:"false",mdxType:"ExamCheckbox"},"The size of the storage"),(0,N.kt)(c.Z,{name:"16",isCorrect:"false",mdxType:"ExamCheckbox"},"The code of the smart contract"),(0,N.kt)(c.Z,{name:"17",isCorrect:"false",mdxType:"ExamCheckbox"},"The list of users allowed to call the smart contract"),(0,N.kt)("h3",{id:"question-3"},"Question 3"),(0,N.kt)("p",null,"Consider the following Michelson smart contract:"),(0,N.kt)("pre",null,(0,N.kt)("code",{parentName:"pre",className:"language-js"},"parameter nat;\nstorage nat;\ncode { DUP; CAR; DIP { CDR }; ADD; NIL operation; PAIR }\n")),(0,N.kt)("p",null,"What is the stack at the beginning of the execution (considering parameter value is 2 and storage value is 5)?"),(0,N.kt)("p",null,"Check the right answer."),(0,N.kt)(c.Z,{name:"20",isCorrect:"false",mdxType:"ExamCheckbox"},"nat 2 , nat 5"),"![](../../static/img/michelson/QCM_3_response_A.svg)",(0,N.kt)(c.Z,{name:"21",isCorrect:"false",mdxType:"ExamCheckbox"},"nat 5, nat 2"),"![](../../static/img/michelson/QCM_3_response_B.svg)",(0,N.kt)(c.Z,{name:"22",isCorrect:"true",mdxType:"ExamCheckbox"},"(PAIR (nat 2) (nat 5))"),(0,N.kt)("p",null,(0,N.kt)("img",{src:t(3129).Z})),(0,N.kt)(c.Z,{name:"23",isCorrect:"false",mdxType:"ExamCheckbox"},"(PAIR (nat 5) (nat 2))"),"![](../../static/img/michelson/QCM_3_response_D.svg)",(0,N.kt)("h3",{id:"question-4"},"Question 4"),(0,N.kt)("p",null,"Consider the following Michelson smart contract."),(0,N.kt)("pre",null,(0,N.kt)("code",{parentName:"pre",className:"language-js"},"parameter nat;\nstorage nat;\ncode { DUP; CAR; DIP { CDR }; ADD; NIL operation; PAIR }\n")),(0,N.kt)("p",null,"Considering that the parameter value is 1 and that the storage value is 1, what will be the output of the execution? "),(0,N.kt)(c.Z,{name:"30",isCorrect:"false",mdxType:"ExamCheckbox"},"2"),(0,N.kt)(c.Z,{name:"31",isCorrect:"false",mdxType:"ExamCheckbox"},"[ PAIR (1 1) ]"),(0,N.kt)(c.Z,{name:"32",isCorrect:"false",mdxType:"ExamCheckbox"},"Pair (1 1)"),(0,N.kt)(c.Z,{name:"33",isCorrect:"true",mdxType:"ExamCheckbox"},"Pair ([], 2)"),(0,N.kt)(c.Z,{name:"34",isCorrect:"false",mdxType:"ExamCheckbox"},"Pair (2, [])"),(0,N.kt)("h3",{id:"question-5"},"Question 5"),(0,N.kt)("p",null,"Consider the following Michelson smart contract:"),(0,N.kt)("pre",null,(0,N.kt)("code",{parentName:"pre",className:"language-js"},"parameter (or (pair %assign address nat) (nat %global)) ;\nstorage (pair (big_map %owners address nat) (nat %value)) ;\ncode { DUP ;\n       CDR ;\n       SWAP ;\n       CAR ;\n       IF_LEFT\n            { SWAP ;\n              DUP ;\n              CDR ;\n              DUG 2 ;\n              CAR ;\n              SWAP ;\n              UNPAIR ;\n              DIP { SOME };\n              UPDATE ;\n              PAIR ;\n              NIL operation ;\n              PAIR\n            }\n            { SWAP ; CAR ; PAIR ; NIL operation ; PAIR } }\n")),(0,N.kt)("p",null,"What are the possible invocations of this smart contract?"),(0,N.kt)(c.Z,{name:"40",isCorrect:"false",mdxType:"ExamCheckbox"},'`(Pair (Pair "tz1b7tUupMgCNw2cCLpKTkSD1NZzB5TkP2sv" 7) 23)`'),(0,N.kt)(c.Z,{name:"41",isCorrect:"false",mdxType:"ExamCheckbox"},"`Left 30`"),(0,N.kt)(c.Z,{name:"42",isCorrect:"false",mdxType:"ExamCheckbox"},'`Left "tz1b7tUupMgCNw2cCLpKTkSD1NZzB5TkP2sv" 7`'),(0,N.kt)(c.Z,{name:"43",isCorrect:"true",mdxType:"ExamCheckbox"},"`Right 45`"),(0,N.kt)(c.Z,{name:"44",isCorrect:"false",mdxType:"ExamCheckbox"},"`Right Right 12`"),(0,N.kt)(c.Z,{name:"45",isCorrect:"false",mdxType:"ExamCheckbox"},'`Left Left "tz1b7tUupMgCNw2cCLpKTkSD1NZzB5TkP2sv"`'),(0,N.kt)(c.Z,{name:"46",isCorrect:"true",mdxType:"ExamCheckbox"},'`Left (Pair "tz1b7tUupMgCNw2cCLpKTkSD1NZzB5TkP2sv" 7)` '),(0,N.kt)(c.Z,{name:"47",isCorrect:"false",mdxType:"ExamCheckbox"},'`Left (Pair "tz1b7tUupMgCNw2cCLpKTkSD1NZzB5TkP2sv" (Pair 7 23))`'),(0,N.kt)(c.Z,{name:"48",isCorrect:"false",mdxType:"ExamCheckbox"},'`Right (Pair "tz1b7tUupMgCNw2cCLpKTkSD1NZzB5TkP2sv" 23)`'),(0,N.kt)(c.Z,{name:"49",isCorrect:"false",mdxType:"ExamCheckbox"},'`(Pair (Left "tz1b7tUupMgCNw2cCLpKTkSD1NZzB5TkP2sv") (Right 23))`'),(0,N.kt)(c.Z,{name:"410",isCorrect:"false",mdxType:"ExamCheckbox"},'`Left (Pair (Left "tz1b7tUupMgCNw2cCLpKTkSD1NZzB5TkP2sv") (Right 23))`'),(0,N.kt)("h3",{id:"question-6"},"Question 6"),(0,N.kt)("p",null,"Consider the following Michelson smart contract storage:"),(0,N.kt)("pre",null,(0,N.kt)("code",{parentName:"pre",className:"language-js"},"storage (pair (pair  (set %participants nat) (pair (nat %age) (string %name))) (pair (big_map %owners address nat) (nat %value)));\n")),(0,N.kt)("p",null,"Notice that the storage is composed of nested pairs.\nLet's consider that the storage is the top element of the stack.\nWhich instruction can be used to retrieve the ",(0,N.kt)("inlineCode",{parentName:"p"},"big_map")," part of the storage?"),(0,N.kt)(c.Z,{name:"50",isCorrect:"false",mdxType:"ExamCheckbox"},"CDR"),(0,N.kt)(c.Z,{name:"51",isCorrect:"false",mdxType:"ExamCheckbox"},"CAR"),(0,N.kt)(c.Z,{name:"52",isCorrect:"true",mdxType:"ExamCheckbox"},"CDAR"),(0,N.kt)(c.Z,{name:"53",isCorrect:"false",mdxType:"ExamCheckbox"},"CADR"),(0,N.kt)(c.Z,{name:"54",isCorrect:"false",mdxType:"ExamCheckbox"},"CAAR"),(0,N.kt)(c.Z,{name:"55",isCorrect:"false",mdxType:"ExamCheckbox"},"CADAR"),(0,N.kt)(c.Z,{name:"56",isCorrect:"false",mdxType:"ExamCheckbox"},"CADDR"),(0,N.kt)("h3",{id:"question-7"},"Question 7"),(0,N.kt)("p",null,"Consider the following smart contract that allows to increment or decrement an integer counter:"),(0,N.kt)("pre",null,(0,N.kt)("code",{parentName:"pre",className:"language-js"},"parameter (or (int %increment) (int %decrement)) ;\nstorage int ;\ncode {\n       DUP ;\n       CDR ;\n       SWAP ;\n       CAR ;\n       XXXXX \n              { SWAP ; SUB }\n              { ADD } ;\n       NIL operation ;\n       PAIR }\n")),(0,N.kt)("p",null,"The XXXXX instruction must be replaced by a conditional instruction. Which instruction should be used?"),(0,N.kt)(c.Z,{name:"60",isCorrect:"false",mdxType:"ExamCheckbox"},"IF"),(0,N.kt)(c.Z,{name:"61",isCorrect:"false",mdxType:"ExamCheckbox"},"IF_SOME"),(0,N.kt)(c.Z,{name:"62",isCorrect:"false",mdxType:"ExamCheckbox"},"IF_NONE"),(0,N.kt)(c.Z,{name:"63",isCorrect:"false",mdxType:"ExamCheckbox"},"IF_CONS"),(0,N.kt)(c.Z,{name:"64",isCorrect:"false",mdxType:"ExamCheckbox"},"IFCMPEQ"),(0,N.kt)(c.Z,{name:"65",isCorrect:"false",mdxType:"ExamCheckbox"},"IF_LEFT"),(0,N.kt)(c.Z,{name:"66",isCorrect:"true",mdxType:"ExamCheckbox"},"IF_RIGHT"),(0,N.kt)("h3",{id:"question-8"},"Question 8"),(0,N.kt)("p",null,"The following contract is incomplete:"),(0,N.kt)("pre",null,(0,N.kt)("code",{parentName:"pre",className:"language-js"},"parameter (or (pair %assign string nat) (string %remove)) ;\nstorage (big_map string nat) ;\ncode { DUP ;\n       CDR ;\n       SWAP ;\n       CAR ;\n       IF_LEFT\n          { UNPAIR ; DIP { SOME } }\n          { XXXXXXX };\n       UPDATE ;\n       NIL operation ;\n       PAIR\n     }\n")),(0,N.kt)("p",null,"Notice that the storage is a ",(0,N.kt)("em",{parentName:"p"},"big","_","map"),' and that the parameter allows two possible invocations: "assign" and "remove".'),(0,N.kt)("p",null,'The "assign" entrypoint takes two arguments ( a "key" as a ',(0,N.kt)("em",{parentName:"p"},"string"),' and a "value" as a ',(0,N.kt)("em",{parentName:"p"},"nat"),") set in a ",(0,N.kt)("em",{parentName:"p"},"pair"),'. The goal of the "assign" entrypoint is to modify the storage (the ',(0,N.kt)("em",{parentName:"p"},"big","_","map"),') by assigning the given "value" to the given "key". '),(0,N.kt)("p",null,'The "remove" entrypoint takes a single argument (a "key" as a ',(0,N.kt)("em",{parentName:"p"},"string"),'). The goal of the "remove" entrypoint is to modify the storage by removing the given "key" from the ',(0,N.kt)("em",{parentName:"p"},"big","_","map"),". "),(0,N.kt)("p",null,'Complete the missing "XXXXXXX" sequence of instructions according to the previously-mentioned statements.'),(0,N.kt)(c.Z,{name:"70",isCorrect:"false",mdxType:"ExamCheckbox"},"UNPAIR ; SOME"),(0,N.kt)(c.Z,{name:"71",isCorrect:"false",mdxType:"ExamCheckbox"},"UNPAIR ; NONE"),(0,N.kt)(c.Z,{name:"72",isCorrect:"false",mdxType:"ExamCheckbox"},"UNPAIR ; DIP &lcub; SOME null &rcub;"),(0,N.kt)(c.Z,{name:"73",isCorrect:"false",mdxType:"ExamCheckbox"},"UNPAIR ; DIP &lcub; NONE &rcub;"),(0,N.kt)(c.Z,{name:"74",isCorrect:"false",mdxType:"ExamCheckbox"},"SWAP ; DIP &lcub; SOME &rcub;"),(0,N.kt)(c.Z,{name:"75",isCorrect:"false",mdxType:"ExamCheckbox"},"PAIR ; DIP &lcub; SOME &rcub;"),(0,N.kt)(c.Z,{name:"76",isCorrect:"false",mdxType:"ExamCheckbox"},"DIP &lcub; NONE &rcub;"),(0,N.kt)(c.Z,{name:"77",isCorrect:"false",mdxType:"ExamCheckbox"},"DIP &lcub; NONE null &rcub;"),(0,N.kt)(c.Z,{name:"78",isCorrect:"true",mdxType:"ExamCheckbox"},"DIP &lcub; NONE nat &rcub;"),(0,N.kt)(c.Z,{name:"79",isCorrect:"false",mdxType:"ExamCheckbox"},"DIP &lcub; NONE unit &rcub;"),(0,N.kt)(c.Z,{name:"710",isCorrect:"false",mdxType:"ExamCheckbox"},"DIP &lcub; SOME &rcub;"),(0,N.kt)(c.Z,{name:"711",isCorrect:"false",mdxType:"ExamCheckbox"},"DIP &lcub; SOME nat &rcub;"),(0,N.kt)(c.Z,{name:"712",isCorrect:"false",mdxType:"ExamCheckbox"},"DIP &lcub; SOME null &rcub;"),(0,N.kt)("h3",{id:"question-9"},"Question 9"),(0,N.kt)("p",null,'Consider the following "QCM_9.tz" smart contract.'),(0,N.kt)("pre",null,(0,N.kt)("code",{parentName:"pre",className:"language-js"},"parameter int ;\nstorage (pair (set int) bool) ;\ncode {\n       DUP ; CDAR ; SWAP ; CAR ; DIP { DUP } ;\n       MEM ;\n       SWAP ;\n       PAIR ;\n       NIL operation ;\n       PAIR }\n")),(0,N.kt)("p",null,"We invoke this contract with the following command:"),(0,N.kt)("pre",null,(0,N.kt)("code",{parentName:"pre",className:"language-js"},"tezos-client run script QCM_9.tz on storage 'Pair {1;2;3;4} True' and input '5'\n")),(0,N.kt)("p",null,"Notice that this command defines the initial storage state as ",(0,N.kt)("inlineCode",{parentName:"p"},"Pair {1;2;3;4} True")," and the parameter as ",(0,N.kt)("inlineCode",{parentName:"p"},"5"),"."),(0,N.kt)("p",null,"What is the resulting storage state?"),(0,N.kt)(c.Z,{name:"80",isCorrect:"false",mdxType:"ExamCheckbox"},"Pair &lcub;1;2;3;4;5&rcub; True"),(0,N.kt)(c.Z,{name:"81",isCorrect:"false",mdxType:"ExamCheckbox"},"Pair &lcub;5;1;2;3;4&rcub; True"),(0,N.kt)(c.Z,{name:"82",isCorrect:"false",mdxType:"ExamCheckbox"},"Pair &lcub;1;2;3;4;5&rcub; False"),(0,N.kt)(c.Z,{name:"83",isCorrect:"false",mdxType:"ExamCheckbox"},"Pair &lcub;5;1;2;3;4&rcub; False"),(0,N.kt)(c.Z,{name:"84",isCorrect:"true",mdxType:"ExamCheckbox"},"Pair &lcub;1;2;3;4&rcub; False"),(0,N.kt)(c.Z,{name:"85",isCorrect:"false",mdxType:"ExamCheckbox"},"Pair &lcub;1;2;3;4&rcub; True"),(0,N.kt)("h3",{id:"question-10"},"Question 10"),(0,N.kt)("p",null,'Consider the following "QCM_10.tz" smart contract:'),(0,N.kt)("pre",null,(0,N.kt)("code",{parentName:"pre",className:"language-js"},"parameter unit ;\nstorage (map string nat) ;\ncode {\n       CDR ;\n       MAP {  CDR ;\n              DUP ;\n              PUSH nat 2 ;\n              SWAP ;\n              EDIV ;\n              IF_NONE\n                     { FAIL }\n                     { CDR ;\n                       INT ;\n                       IFEQ\n                            {}\n                            { PUSH nat 2; MUL}\n                     }\n           } ;\n       NIL operation ;\n       PAIR }\n")),(0,N.kt)("p",null,"We invoke this contract with the following command:"),(0,N.kt)("pre",null,(0,N.kt)("code",{parentName:"pre",className:"language-js"},'tezos-client run script QCM_10.tz on storage \'{ Elt "alice" 1; Elt "bob" 2; Elt "carin" 3 }\' and input \'Unit\'\n')),(0,N.kt)("p",null,"Notice that this command defines the initial storage state as ",(0,N.kt)("inlineCode",{parentName:"p"},'{ Elt "alice" 1; Elt "bob" 2; Elt "carin" 3 }')," and the parameter as ",(0,N.kt)("inlineCode",{parentName:"p"},"Unit"),"."),(0,N.kt)("p",null,(0,N.kt)("img",{src:t(3990).Z})),(0,N.kt)("p",null,"What is the resulting storage state ?"),(0,N.kt)(c.Z,{name:"90",isCorrect:"false",mdxType:"ExamCheckbox"},'&lcub; Elt "alice" 1; Elt "bob" 2; Elt "carin" 3 &rcub;'),"![](../../static/img/michelson/QCM_10_123.svg)",(0,N.kt)(c.Z,{name:"91",isCorrect:"false",mdxType:"ExamCheckbox"},'&lcub; Elt "alice" 1; Elt "bob" 4; Elt "carin" 3 &rcub;'),"![](../../static/img/michelson/QCM_10_143.svg)",(0,N.kt)(c.Z,{name:"92",isCorrect:"false",mdxType:"ExamCheckbox"},'&lcub; Elt "alice" 1; Elt "bob" 4; Elt "carin" 6 &rcub;'),"![](../../static/img/michelson/QCM_10_146.svg)",(0,N.kt)(c.Z,{name:"93",isCorrect:"false",mdxType:"ExamCheckbox"},'&lcub; Elt "alice" 1; Elt "bob" 2; Elt "carin" 6 &rcub;'),"![](../../static/img/michelson/QCM_10_126.svg)",(0,N.kt)(c.Z,{name:"94",isCorrect:"false",mdxType:"ExamCheckbox"},'&lcub; Elt "alice" 2; Elt "bob" 2; Elt "carin" 3 &rcub;'),"![](../../static/img/michelson/QCM_10_223.svg)",(0,N.kt)(c.Z,{name:"95",isCorrect:"false",mdxType:"ExamCheckbox"},'&lcub; Elt "alice" 2; Elt "bob" 4; Elt "carin" 3 &rcub;'),"![](../../static/img/michelson/QCM_10_243.svg)",(0,N.kt)(c.Z,{name:"96",isCorrect:"true",mdxType:"ExamCheckbox"},'&lcub; Elt "alice" 2; Elt "bob" 2; Elt "carin" 6 &rcub;'),(0,N.kt)("p",null,(0,N.kt)("img",{src:t(7054).Z})),(0,N.kt)(c.Z,{name:"97",isCorrect:"false",mdxType:"ExamCheckbox"},'&lcub; Elt "alice" 2; Elt "bob" 4; Elt "carin" 6 &rcub;'),"![](../../static/img/michelson/QCM_10_246.svg)"))}I.isMDXComponent=!0},3990:function(e,M,t){"use strict";M.Z=t.p+"assets/images/QCM_10_123-ec38cf9ee8f50cf52d93893f26908879.svg"},7054:function(e,M,t){"use strict";M.Z=t.p+"assets/images/QCM_10_226-a95a65962fc839d578f41853b4e5d032.svg"},3129:function(e,M){"use strict";M.Z="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjMzIiBoZWlnaHQ9IjY3IiB2aWV3Qm94PSIwIDAgMjMzIDY3IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8ZyBmaWx0ZXI9InVybCgjZmlsdGVyMF9kKSI+CjxwYXRoIGQ9Ik0wIDhDMCAzLjU4MTcyIDMuNTgxNzIgMCA4IDBIMjIxQzIyNS40MTggMCAyMjkgMy41ODE3MiAyMjkgOFY0MEgwVjhaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNOCAwLjVIMjIxQzIyNS4xNDIgMC41IDIyOC41IDMuODU3ODcgMjI4LjUgOFYzOS41SDAuNVY4QzAuNSAzLjg1Nzg2IDMuODU3ODYgMC41IDggMC41WiIgc3Ryb2tlPSIjNTQ1MkY2Ii8+CjwvZz4KPGcgZmlsdGVyPSJ1cmwoI2ZpbHRlcjFfZCkiPgo8cGF0aCBkPSJNMCAzOUgyMjlWNTVDMjI5IDU5LjQxODMgMjI1LjQxOCA2MyAyMjEgNjNIOC4wMDAwMUMzLjU4MTczIDYzIDAgNTkuNDE4MyAwIDU1VjM5WiIgZmlsbD0iI0VFRUVGRiIvPgo8cGF0aCBkPSJNMC41IDM5LjVIMjI4LjVWNTVDMjI4LjUgNTkuMTQyMSAyMjUuMTQyIDYyLjUgMjIxIDYyLjVIOC4wMDAwMUMzLjg1Nzg3IDYyLjUgMC41IDU5LjE0MjEgMC41IDU1VjM5LjVaIiBzdHJva2U9IiM1NDUyRjYiLz4KPC9nPgo8cGF0aCBkPSJNNTMuMzEyNSAyMC43NzM0VjI1SDUxLjMzNTlWMTMuNjI1SDU1LjY4NzVDNTYuOTU4MyAxMy42MjUgNTcuOTY2MSAxMy45NTU3IDU4LjcxMDkgMTQuNjE3MkM1OS40NjA5IDE1LjI3ODYgNTkuODM1OSAxNi4xNTM2IDU5LjgzNTkgMTcuMjQyMkM1OS44MzU5IDE4LjM1NjggNTkuNDY4OCAxOS4yMjQgNTguNzM0NCAxOS44NDM4QzU4LjAwNTIgMjAuNDYzNSA1Ni45ODE4IDIwLjc3MzQgNTUuNjY0MSAyMC43NzM0SDUzLjMxMjVaTTUzLjMxMjUgMTkuMTg3NUg1NS42ODc1QzU2LjM5MDYgMTkuMTg3NSA1Ni45MjcxIDE5LjAyMzQgNTcuMjk2OSAxOC42OTUzQzU3LjY2NjcgMTguMzYyIDU3Ljg1MTYgMTcuODgyOCA1Ny44NTE2IDE3LjI1NzhDNTcuODUxNiAxNi42NDMyIDU3LjY2NDEgMTYuMTUzNiA1Ny4yODkxIDE1Ljc4OTFDNTYuOTE0MSAxNS40MTkzIDU2LjM5ODQgMTUuMjI5MiA1NS43NDIyIDE1LjIxODhINTMuMzEyNVYxOS4xODc1Wk02Ni41NDY5IDIyLjM1MTZINjIuMTQwNkw2MS4yMTg4IDI1SDU5LjE2NDFMNjMuNDYwOSAxMy42MjVINjUuMjM0NEw2OS41MzkxIDI1SDY3LjQ3NjZMNjYuNTQ2OSAyMi4zNTE2Wk02Mi42OTUzIDIwLjc1NzhINjUuOTkyMkw2NC4zNDM4IDE2LjAzOTFMNjIuNjk1MyAyMC43NTc4Wk03Mi45MjE5IDI1SDcwLjk1MzFWMTMuNjI1SDcyLjkyMTlWMjVaTTc5LjUzMTIgMjAuNjE3Mkg3Ny4zMjgxVjI1SDc1LjM1MTZWMTMuNjI1SDc5LjM1MTZDODAuNjY0MSAxMy42MjUgODEuNjc3MSAxMy45MTkzIDgyLjM5MDYgMTQuNTA3OEM4My4xMDQyIDE1LjA5NjQgODMuNDYwOSAxNS45NDc5IDgzLjQ2MDkgMTcuMDYyNUM4My40NjA5IDE3LjgyMjkgODMuMjc2IDE4LjQ2MDkgODIuOTA2MiAxOC45NzY2QzgyLjU0MTcgMTkuNDg3IDgyLjAzMTIgMTkuODgwMiA4MS4zNzUgMjAuMTU2Mkw4My45Mjk3IDI0Ljg5ODRWMjVIODEuODEyNUw3OS41MzEyIDIwLjYxNzJaTTc3LjMyODEgMTkuMDMxMkg3OS4zNTk0QzgwLjAyNiAxOS4wMzEyIDgwLjU0NjkgMTguODY0NiA4MC45MjE5IDE4LjUzMTJDODEuMjk2OSAxOC4xOTI3IDgxLjQ4NDQgMTcuNzMxOCA4MS40ODQ0IDE3LjE0ODRDODEuNDg0NCAxNi41MzkxIDgxLjMwOTkgMTYuMDY3NyA4MC45NjA5IDE1LjczNDRDODAuNjE3MiAxNS40MDEgODAuMTAxNiAxNS4yMjkyIDc5LjQxNDEgMTUuMjE4OEg3Ny4zMjgxVjE5LjAzMTJaTTg5LjE2NDEgMjAuMzc1Qzg5LjE2NDEgMTkuMTcxOSA4OS4zMjU1IDE4LjAzMTIgODkuNjQ4NCAxNi45NTMxQzg5Ljk3MTQgMTUuODY5OCA5MC40NDUzIDE0LjkwMzYgOTEuMDcwMyAxNC4wNTQ3QzkxLjY5NTMgMTMuMjAwNSA5Mi4zNTY4IDEyLjYwMTYgOTMuMDU0NyAxMi4yNTc4TDkzLjQyOTcgMTMuMzY3MkM5Mi42OTUzIDEzLjkyNDUgOTIuMDk5IDE0Ljc3NiA5MS42NDA2IDE1LjkyMTlDOTEuMTg3NSAxNy4wNjI1IDkwLjk0MDEgMTguMzY5OCA5MC44OTg0IDE5Ljg0MzhMOTAuODkwNiAyMC41MTU2QzkwLjg5MDYgMjIuMDkzOCA5MS4xMTIgMjMuNTAyNiA5MS41NTQ3IDI0Ljc0MjJDOTIuMDAyNiAyNS45NzY2IDkyLjYyNzYgMjYuOTE2NyA5My40Mjk3IDI3LjU2MjVMOTMuMDU0NyAyOC42MTcyQzkyLjM1NjggMjguMjczNCA5MS42OTI3IDI3LjY3MTkgOTEuMDYyNSAyNi44MTI1QzkwLjQzNzUgMjUuOTU4MyA4OS45NjM1IDI0Ljk5NDggODkuNjQwNiAyMy45MjE5Qzg5LjMyMjkgMjIuODQzOCA4OS4xNjQxIDIxLjY2MTUgODkuMTY0MSAyMC4zNzVaTTk2LjQ3NjYgMTYuNTQ2OUw5Ni41MzEyIDE3LjUyMzRDOTcuMTU2MiAxNi43NjgyIDk3Ljk3NjYgMTYuMzkwNiA5OC45OTIyIDE2LjM5MDZDMTAwLjc1MyAxNi4zOTA2IDEwMS42NDggMTcuMzk4NCAxMDEuNjggMTkuNDE0MVYyNUg5OS43ODEyVjE5LjUyMzRDOTkuNzgxMiAxOC45ODcgOTkuNjY0MSAxOC41OTExIDk5LjQyOTcgMTguMzM1OUM5OS4yMDA1IDE4LjA3NTUgOTguODIyOSAxNy45NDUzIDk4LjI5NjkgMTcuOTQ1M0M5Ny41MzEyIDE3Ljk0NTMgOTYuOTYwOSAxOC4yOTE3IDk2LjU4NTkgMTguOTg0NFYyNUg5NC42ODc1VjE2LjU0NjlIOTYuNDc2NlpNMTA4LjY3MiAyNUMxMDguNTg5IDI0LjgzODUgMTA4LjUxNiAyNC41NzU1IDEwOC40NTMgMjQuMjEwOUMxMDcuODQ5IDI0Ljg0MTEgMTA3LjEwOSAyNS4xNTYyIDEwNi4yMzQgMjUuMTU2MkMxMDUuMzg1IDI1LjE1NjIgMTA0LjY5MyAyNC45MTQxIDEwNC4xNTYgMjQuNDI5N0MxMDMuNjIgMjMuOTQ1MyAxMDMuMzUyIDIzLjM0NjQgMTAzLjM1MiAyMi42MzI4QzEwMy4zNTIgMjEuNzMxOCAxMDMuNjg1IDIxLjA0MTcgMTA0LjM1MiAyMC41NjI1QzEwNS4wMjMgMjAuMDc4MSAxMDUuOTgyIDE5LjgzNTkgMTA3LjIyNyAxOS44MzU5SDEwOC4zOTFWMTkuMjgxMkMxMDguMzkxIDE4Ljg0MzggMTA4LjI2OCAxOC40OTQ4IDEwOC4wMjMgMTguMjM0NEMxMDcuNzc5IDE3Ljk2ODggMTA3LjQwNiAxNy44MzU5IDEwNi45MDYgMTcuODM1OUMxMDYuNDc0IDE3LjgzNTkgMTA2LjEyIDE3Ljk0NTMgMTA1Ljg0NCAxOC4xNjQxQzEwNS41NjggMTguMzc3NiAxMDUuNDMgMTguNjUxIDEwNS40MyAxOC45ODQ0SDEwMy41MzFDMTAzLjUzMSAxOC41MjA4IDEwMy42ODUgMTguMDg4NSAxMDMuOTkyIDE3LjY4NzVDMTA0LjI5OSAxNy4yODEyIDEwNC43MTYgMTYuOTYzNSAxMDUuMjQyIDE2LjczNDRDMTA1Ljc3MyAxNi41MDUyIDEwNi4zNjUgMTYuMzkwNiAxMDcuMDE2IDE2LjM5MDZDMTA4LjAwNSAxNi4zOTA2IDEwOC43OTQgMTYuNjQwNiAxMDkuMzgzIDE3LjE0MDZDMTA5Ljk3MSAxNy42MzU0IDExMC4yNzMgMTguMzMzMyAxMTAuMjg5IDE5LjIzNDRWMjMuMDQ2OUMxMTAuMjg5IDIzLjgwNzMgMTEwLjM5NiAyNC40MTQxIDExMC42MDkgMjQuODY3MlYyNUgxMDguNjcyWk0xMDYuNTg2IDIzLjYzMjhDMTA2Ljk2MSAyMy42MzI4IDEwNy4zMTIgMjMuNTQxNyAxMDcuNjQxIDIzLjM1OTRDMTA3Ljk3NCAyMy4xNzcxIDEwOC4yMjQgMjIuOTMyMyAxMDguMzkxIDIyLjYyNVYyMS4wMzEySDEwNy4zNjdDMTA2LjY2NCAyMS4wMzEyIDEwNi4xMzUgMjEuMTUzNiAxMDUuNzgxIDIxLjM5ODRDMTA1LjQyNyAyMS42NDMyIDEwNS4yNSAyMS45ODk2IDEwNS4yNSAyMi40Mzc1QzEwNS4yNSAyMi44MDIxIDEwNS4zNyAyMy4wOTM4IDEwNS42MDkgMjMuMzEyNUMxMDUuODU0IDIzLjUyNiAxMDYuMTggMjMuNjMyOCAxMDYuNTg2IDIzLjYzMjhaTTExNC42NTYgMTQuNDkyMlYxNi41NDY5SDExNi4xNDhWMTcuOTUzMUgxMTQuNjU2VjIyLjY3MTlDMTE0LjY1NiAyMi45OTQ4IDExNC43MTkgMjMuMjI5MiAxMTQuODQ0IDIzLjM3NUMxMTQuOTc0IDIzLjUxNTYgMTE1LjIwMyAyMy41ODU5IDExNS41MzEgMjMuNTg1OUMxMTUuNzUgMjMuNTg1OSAxMTUuOTcxIDIzLjU1OTkgMTE2LjE5NSAyMy41MDc4VjI0Ljk3NjZDMTE1Ljc2MyAyNS4wOTY0IDExNS4zNDYgMjUuMTU2MiAxMTQuOTQ1IDI1LjE1NjJDMTEzLjQ4NyAyNS4xNTYyIDExMi43NTggMjQuMzUxNiAxMTIuNzU4IDIyLjc0MjJWMTcuOTUzMUgxMTEuMzY3VjE2LjU0NjlIMTEyLjc1OFYxNC40OTIySDExNC42NTZaTTEyOS4xMTcgMjVIMTIxLjQ2OVYyMy42OTUzTDEyNS4yNTggMTkuNTYyNUMxMjUuODA1IDE4Ljk1MzEgMTI2LjE5MyAxOC40NDUzIDEyNi40MjIgMTguMDM5MUMxMjYuNjU2IDE3LjYyNzYgMTI2Ljc3MyAxNy4yMTYxIDEyNi43NzMgMTYuODA0N0MxMjYuNzczIDE2LjI2MyAxMjYuNjIgMTUuODI1NSAxMjYuMzEyIDE1LjQ5MjJDMTI2LjAxIDE1LjE1ODkgMTI1LjYwMiAxNC45OTIyIDEyNS4wODYgMTQuOTkyMkMxMjQuNDcxIDE0Ljk5MjIgMTIzLjk5NSAxNS4xNzk3IDEyMy42NTYgMTUuNTU0N0MxMjMuMzE4IDE1LjkyOTcgMTIzLjE0OCAxNi40NDI3IDEyMy4xNDggMTcuMDkzOEgxMjEuMjVDMTIxLjI1IDE2LjQwMSAxMjEuNDA2IDE1Ljc3ODYgMTIxLjcxOSAxNS4yMjY2QzEyMi4wMzYgMTQuNjY5MyAxMjIuNDg3IDE0LjIzNyAxMjMuMDcgMTMuOTI5N0MxMjMuNjU5IDEzLjYyMjQgMTI0LjMzNiAxMy40Njg4IDEyNS4xMDIgMTMuNDY4OEMxMjYuMjA2IDEzLjQ2ODggMTI3LjA3NiAxMy43NDc0IDEyNy43MTEgMTQuMzA0N0MxMjguMzUyIDE0Ljg1NjggMTI4LjY3MiAxNS42MjI0IDEyOC42NzIgMTYuNjAxNkMxMjguNjcyIDE3LjE2OTMgMTI4LjUxIDE3Ljc2NTYgMTI4LjE4OCAxOC4zOTA2QzEyNy44NyAxOS4wMTA0IDEyNy4zNDYgMTkuNzE2MSAxMjYuNjE3IDIwLjUwNzhMMTIzLjgzNiAyMy40ODQ0SDEyOS4xMTdWMjVaTTEzMC45NTMgMjcuNTYyNUwxMjkuOTMgMjYuOTUzMUMxMzAuMjMyIDI2LjQ3OTIgMTMwLjQzOCAyNi4wNjUxIDEzMC41NDcgMjUuNzEwOUMxMzAuNjYxIDI1LjM2MiAxMzAuNzIxIDI1LjAwNTIgMTMwLjcyNyAyNC42NDA2VjIzLjE2NDFIMTMyLjQzOEwxMzIuNDMgMjQuNTMxMkMxMzIuNDI0IDI1LjA4MzMgMTMyLjI4NCAyNS42MzU0IDEzMi4wMDggMjYuMTg3NUMxMzEuNzM3IDI2Ljc0NDggMTMxLjM4NSAyNy4yMDMxIDEzMC45NTMgMjcuNTYyNVpNMTM5Ljk0NSAxNi41NDY5TDE0MCAxNy41MjM0QzE0MC42MjUgMTYuNzY4MiAxNDEuNDQ1IDE2LjM5MDYgMTQyLjQ2MSAxNi4zOTA2QzE0NC4yMjEgMTYuMzkwNiAxNDUuMTE3IDE3LjM5ODQgMTQ1LjE0OCAxOS40MTQxVjI1SDE0My4yNVYxOS41MjM0QzE0My4yNSAxOC45ODcgMTQzLjEzMyAxOC41OTExIDE0Mi44OTggMTguMzM1OUMxNDIuNjY5IDE4LjA3NTUgMTQyLjI5MiAxNy45NDUzIDE0MS43NjYgMTcuOTQ1M0MxNDEgMTcuOTQ1MyAxNDAuNDMgMTguMjkxNyAxNDAuMDU1IDE4Ljk4NDRWMjVIMTM4LjE1NlYxNi41NDY5SDEzOS45NDVaTTE1Mi4xNDEgMjVDMTUyLjA1NyAyNC44Mzg1IDE1MS45ODQgMjQuNTc1NSAxNTEuOTIyIDI0LjIxMDlDMTUxLjMxOCAyNC44NDExIDE1MC41NzggMjUuMTU2MiAxNDkuNzAzIDI1LjE1NjJDMTQ4Ljg1NCAyNS4xNTYyIDE0OC4xNjEgMjQuOTE0MSAxNDcuNjI1IDI0LjQyOTdDMTQ3LjA4OSAyMy45NDUzIDE0Ni44MiAyMy4zNDY0IDE0Ni44MiAyMi42MzI4QzE0Ni44MiAyMS43MzE4IDE0Ny4xNTQgMjEuMDQxNyAxNDcuODIgMjAuNTYyNUMxNDguNDkyIDIwLjA3ODEgMTQ5LjQ1MSAxOS44MzU5IDE1MC42OTUgMTkuODM1OUgxNTEuODU5VjE5LjI4MTJDMTUxLjg1OSAxOC44NDM4IDE1MS43MzcgMTguNDk0OCAxNTEuNDkyIDE4LjIzNDRDMTUxLjI0NyAxNy45Njg4IDE1MC44NzUgMTcuODM1OSAxNTAuMzc1IDE3LjgzNTlDMTQ5Ljk0MyAxNy44MzU5IDE0OS41ODkgMTcuOTQ1MyAxNDkuMzEyIDE4LjE2NDFDMTQ5LjAzNiAxOC4zNzc2IDE0OC44OTggMTguNjUxIDE0OC44OTggMTguOTg0NEgxNDdDMTQ3IDE4LjUyMDggMTQ3LjE1NCAxOC4wODg1IDE0Ny40NjEgMTcuNjg3NUMxNDcuNzY4IDE3LjI4MTIgMTQ4LjE4NSAxNi45NjM1IDE0OC43MTEgMTYuNzM0NEMxNDkuMjQyIDE2LjUwNTIgMTQ5LjgzMyAxNi4zOTA2IDE1MC40ODQgMTYuMzkwNkMxNTEuNDc0IDE2LjM5MDYgMTUyLjI2MyAxNi42NDA2IDE1Mi44NTIgMTcuMTQwNkMxNTMuNDQgMTcuNjM1NCAxNTMuNzQyIDE4LjMzMzMgMTUzLjc1OCAxOS4yMzQ0VjIzLjA0NjlDMTUzLjc1OCAyMy44MDczIDE1My44NjUgMjQuNDE0MSAxNTQuMDc4IDI0Ljg2NzJWMjVIMTUyLjE0MVpNMTUwLjA1NSAyMy42MzI4QzE1MC40MyAyMy42MzI4IDE1MC43ODEgMjMuNTQxNyAxNTEuMTA5IDIzLjM1OTRDMTUxLjQ0MyAyMy4xNzcxIDE1MS42OTMgMjIuOTMyMyAxNTEuODU5IDIyLjYyNVYyMS4wMzEySDE1MC44MzZDMTUwLjEzMyAyMS4wMzEyIDE0OS42MDQgMjEuMTUzNiAxNDkuMjUgMjEuMzk4NEMxNDguODk2IDIxLjY0MzIgMTQ4LjcxOSAyMS45ODk2IDE0OC43MTkgMjIuNDM3NUMxNDguNzE5IDIyLjgwMjEgMTQ4LjgzOSAyMy4wOTM4IDE0OS4wNzggMjMuMzEyNUMxNDkuMzIzIDIzLjUyNiAxNDkuNjQ4IDIzLjYzMjggMTUwLjA1NSAyMy42MzI4Wk0xNTguMTI1IDE0LjQ5MjJWMTYuNTQ2OUgxNTkuNjE3VjE3Ljk1MzFIMTU4LjEyNVYyMi42NzE5QzE1OC4xMjUgMjIuOTk0OCAxNTguMTg4IDIzLjIyOTIgMTU4LjMxMiAyMy4zNzVDMTU4LjQ0MyAyMy41MTU2IDE1OC42NzIgMjMuNTg1OSAxNTkgMjMuNTg1OUMxNTkuMjE5IDIzLjU4NTkgMTU5LjQ0IDIzLjU1OTkgMTU5LjY2NCAyMy41MDc4VjI0Ljk3NjZDMTU5LjIzMiAyNS4wOTY0IDE1OC44MTUgMjUuMTU2MiAxNTguNDE0IDI1LjE1NjJDMTU2Ljk1NiAyNS4xNTYyIDE1Ni4yMjcgMjQuMzUxNiAxNTYuMjI3IDIyLjc0MjJWMTcuOTUzMUgxNTQuODM2VjE2LjU0NjlIMTU2LjIyN1YxNC40OTIySDE1OC4xMjVaTTE2NS40NDUgMTkuMzU5NEwxNjYuMDYyIDEzLjYyNUgxNzIuMTcyVjE1LjI2NTZIMTY3LjY0MUwxNjcuMzI4IDE3Ljk4NDRDMTY3Ljg1NCAxNy42ODIzIDE2OC40NDggMTcuNTMxMiAxNjkuMTA5IDE3LjUzMTJDMTcwLjE5MyAxNy41MzEyIDE3MS4wMzQgMTcuODc3NiAxNzEuNjMzIDE4LjU3MDNDMTcyLjIzNyAxOS4yNjMgMTcyLjUzOSAyMC4xOTUzIDE3Mi41MzkgMjEuMzY3MkMxNzIuNTM5IDIyLjUyMzQgMTcyLjIwNiAyMy40NDUzIDE3MS41MzkgMjQuMTMyOEMxNzAuODcyIDI0LjgxNTEgMTY5Ljk1OCAyNS4xNTYyIDE2OC43OTcgMjUuMTU2MkMxNjcuNzU1IDI1LjE1NjIgMTY2Ljg5MSAyNC44NjIgMTY2LjIwMyAyNC4yNzM0QzE2NS41MjEgMjMuNjc5NyAxNjUuMTUxIDIyLjg5ODQgMTY1LjA5NCAyMS45Mjk3SDE2Ni45M0MxNjcuMDAzIDIyLjQ4MTggMTY3LjIwMSAyMi45MDYyIDE2Ny41MjMgMjMuMjAzMUMxNjcuODQ2IDIzLjQ5NDggMTY4LjI2OCAyMy42NDA2IDE2OC43ODkgMjMuNjQwNkMxNjkuMzcyIDIzLjY0MDYgMTY5LjgyNiAyMy40MzIzIDE3MC4xNDggMjMuMDE1NkMxNzAuNDc3IDIyLjU5OSAxNzAuNjQxIDIyLjAzMTIgMTcwLjY0MSAyMS4zMTI1QzE3MC42NDEgMjAuNjE5OCAxNzAuNDYxIDIwLjA3MjkgMTcwLjEwMiAxOS42NzE5QzE2OS43NDIgMTkuMjY1NiAxNjkuMjQ3IDE5LjA2MjUgMTY4LjYxNyAxOS4wNjI1QzE2OC4yNzMgMTkuMDYyNSAxNjcuOTgyIDE5LjEwOTQgMTY3Ljc0MiAxOS4yMDMxQzE2Ny41MDMgMTkuMjkxNyAxNjcuMjQyIDE5LjQ2ODggMTY2Ljk2MSAxOS43MzQ0TDE2NS40NDUgMTkuMzU5NFpNMTc3LjgxMiAyMC41QzE3Ny44MTIgMjEuNjU2MiAxNzcuNjU0IDIyLjc3MzQgMTc3LjMzNiAyMy44NTE2QzE3Ny4wMTggMjQuOTI0NSAxNzYuNTM2IDI1LjkwMSAxNzUuODkxIDI2Ljc4MTJDMTc1LjI0NSAyNy42NjY3IDE3NC41NyAyOC4yNzg2IDE3My44NjcgMjguNjE3MkwxNzMuNDkyIDI3LjU2MjVDMTc0LjI3MyAyNi45NTgzIDE3NC44OTEgMjYuMDM2NSAxNzUuMzQ0IDI0Ljc5NjlDMTc1LjgwMiAyMy41NTIxIDE3Ni4wMzEgMjIuMTMyOCAxNzYuMDMxIDIwLjUzOTFWMjAuMzU5NEMxNzYuMDMxIDE4LjkxMTUgMTc1LjgzMyAxNy41OTM4IDE3NS40MzggMTYuNDA2MkMxNzUuMDQyIDE1LjIxMzUgMTc0LjQ3NCAxNC4yNTc4IDE3My43MzQgMTMuNTM5MUwxNzMuNDkyIDEzLjMyMDNMMTczLjg2NyAxMi4yNTc4QzE3NC41MzQgMTIuNTgwNyAxNzUuMTggMTMuMTUzNiAxNzUuODA1IDEzLjk3NjZDMTc2LjQzIDE0Ljc5OTUgMTc2LjkwOSAxNS43MjE0IDE3Ny4yNDIgMTYuNzQyMkMxNzcuNTc2IDE3Ljc1NzggMTc3Ljc2MyAxOC44MDczIDE3Ny44MDUgMTkuODkwNkwxNzcuODEyIDIwLjVaIiBmaWxsPSIjNTQ1MkY2Ii8+CjxkZWZzPgo8ZmlsdGVyIGlkPSJmaWx0ZXIwX2QiIHg9IjAiIHk9IjAiIHdpZHRoPSIyMzMiIGhlaWdodD0iNDQiIGZpbHRlclVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzPSJzUkdCIj4KPGZlRmxvb2QgZmxvb2Qtb3BhY2l0eT0iMCIgcmVzdWx0PSJCYWNrZ3JvdW5kSW1hZ2VGaXgiLz4KPGZlQ29sb3JNYXRyaXggaW49IlNvdXJjZUFscGhhIiB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMTI3IDAiLz4KPGZlT2Zmc2V0IGR4PSI0IiBkeT0iNCIvPgo8ZmVDb2xvck1hdHJpeCB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMCAwIDAgMCAwLjY3NDkwOCAwIDAgMCAwIDAuNjYyMDgzIDAgMCAwIDAgMC45NDU4MzMgMCAwIDAgMSAwIi8+CjxmZUJsZW5kIG1vZGU9Im5vcm1hbCIgaW4yPSJCYWNrZ3JvdW5kSW1hZ2VGaXgiIHJlc3VsdD0iZWZmZWN0MV9kcm9wU2hhZG93Ii8+CjxmZUJsZW5kIG1vZGU9Im5vcm1hbCIgaW49IlNvdXJjZUdyYXBoaWMiIGluMj0iZWZmZWN0MV9kcm9wU2hhZG93IiByZXN1bHQ9InNoYXBlIi8+CjwvZmlsdGVyPgo8ZmlsdGVyIGlkPSJmaWx0ZXIxX2QiIHg9IjAiIHk9IjM5IiB3aWR0aD0iMjMzIiBoZWlnaHQ9IjI4IiBmaWx0ZXJVbml0cz0idXNlclNwYWNlT25Vc2UiIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0ic1JHQiI+CjxmZUZsb29kIGZsb29kLW9wYWNpdHk9IjAiIHJlc3VsdD0iQmFja2dyb3VuZEltYWdlRml4Ii8+CjxmZUNvbG9yTWF0cml4IGluPSJTb3VyY2VBbHBoYSIgdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDEyNyAwIi8+CjxmZU9mZnNldCBkeD0iNCIgZHk9IjQiLz4KPGZlQ29sb3JNYXRyaXggdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAgMCAwIDAgMC42NzQ5MDggMCAwIDAgMCAwLjY2MjA4MyAwIDAgMCAwIDAuOTQ1ODMzIDAgMCAwIDEgMCIvPgo8ZmVCbGVuZCBtb2RlPSJub3JtYWwiIGluMj0iQmFja2dyb3VuZEltYWdlRml4IiByZXN1bHQ9ImVmZmVjdDFfZHJvcFNoYWRvdyIvPgo8ZmVCbGVuZCBtb2RlPSJub3JtYWwiIGluPSJTb3VyY2VHcmFwaGljIiBpbjI9ImVmZmVjdDFfZHJvcFNoYWRvdyIgcmVzdWx0PSJzaGFwZSIvPgo8L2ZpbHRlcj4KPC9kZWZzPgo8L3N2Zz4K"}}]);