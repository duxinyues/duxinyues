"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8256],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),d=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(i.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=d(n),g=a,m=s["".concat(i,".").concat(g)]||s[g]||u[g]||o;return n?r.createElement(m,l(l({ref:t},p),{},{components:n})):r.createElement(m,l({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=g;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[s]="string"==typeof e?e:a,l[1]=c;for(var d=2;d<o;d++)l[d]=n[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},9392:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>s,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:7,id:"JavaScript\uff1aEncoding\u548c\u539f\u751f\u62d6\u653e\u4e8b\u4ef6",title:"JavaScript\uff1aEncoding\u548c\u539f\u751f\u62d6\u653e\u4e8b\u4ef6",authors:"duxinyues",tags:["JavaScript"]},l=void 0,c={permalink:"/blog/javascript/JavaScript202207",editUrl:"https://github.com/duxinyues/docusaurus/blob/main/blog/javascript/JavaScript202207.md",source:"@site/blog/javascript/JavaScript202207.md",title:"JavaScript\uff1aEncoding\u548c\u539f\u751f\u62d6\u653e\u4e8b\u4ef6",description:"Encoding \u662f\u7528\u4e8e\u5b9e\u73b0\u5b57\u7b26\u4e32\u548c\u5b9a\u578b\u6570\u7ec4\u4e4b\u95f4\u7684\u8f6c\u6362\uff0c\u6709\u56db\u4e2a\u7528\u4e8e\u6267\u884c\u8f6c\u6362\u7684\u5168\u5c40\u7c7b\uff1aTextEncoder\u3001TextEncoderStream\u3001TextDecoder\u548cTextDecoderStream\u3002",date:"2022-12-05T13:31:53.000Z",formattedDate:"2022\u5e7412\u67085\u65e5",tags:[{label:"JavaScript",permalink:"/blog/tags/java-script"}],readingTime:9.66,hasTruncateMarker:!1,authors:[{name:"\u8bfb\u5fc3\u60a6",title:"\u524d\u7aef\u5f00\u53d1\u653b\u57ce\u72ee",url:"https://github.com/duxinyues/",email:"yongyuan253015@gmail.com",imageURL:"https://avatars.githubusercontent.com/u/29058884?v=4",key:"duxinyues"}],frontMatter:{sidebar_position:7,id:"JavaScript\uff1aEncoding\u548c\u539f\u751f\u62d6\u653e\u4e8b\u4ef6",title:"JavaScript\uff1aEncoding\u548c\u539f\u751f\u62d6\u653e\u4e8b\u4ef6",authors:"duxinyues",tags:["JavaScript"]},prevItem:{title:"JavaScript\uff1a\u6765\u4e00\u6ce2Promise\u7528\u6cd5\u5b9e\u4f8b\uff0c\u53ef\u80fd\u662f\u9762\u8bd5\u9898\u5427",permalink:"/blog/javascript/JavaScript202211"},nextItem:{title:"JavaScript\uff1aFile API\u548cBlob API",permalink:"/blog/javascript/JavaScript202205"}},i={authorsImageUrls:[void 0]},d=[{value:"\u6587\u672c\u7f16\u7801",id:"\u6587\u672c\u7f16\u7801",level:2},{value:"\u6279\u91cf\u7f16\u7801",id:"\u6279\u91cf\u7f16\u7801",level:5},{value:"\u6587\u672c\u89e3\u7801",id:"\u6587\u672c\u89e3\u7801",level:2},{value:"\u6279\u91cf\u89e3\u7801",id:"\u6279\u91cf\u89e3\u7801",level:5},{value:"\u62d6\u653e\u4e8b\u4ef6",id:"\u62d6\u653e\u4e8b\u4ef6",level:2},{value:"\u5b9a\u4e49\u653e\u7f6e\u533a\u57df",id:"\u5b9a\u4e49\u653e\u7f6e\u533a\u57df",level:2},{value:"\u53ef\u62d6\u52a8\u80fd\u529b",id:"\u53ef\u62d6\u52a8\u80fd\u529b",level:2}],p={toc:d};function s(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Encoding \u662f\u7528\u4e8e\u5b9e\u73b0\u5b57\u7b26\u4e32\u548c\u5b9a\u578b\u6570\u7ec4\u4e4b\u95f4\u7684\u8f6c\u6362\uff0c\u6709\u56db\u4e2a\u7528\u4e8e\u6267\u884c\u8f6c\u6362\u7684\u5168\u5c40\u7c7b\uff1aTextEncoder\u3001TextEncoderStream\u3001TextDecoder\u548cTextDecoderStream\u3002"),(0,a.kt)("h2",{id:"\u6587\u672c\u7f16\u7801"},"\u6587\u672c\u7f16\u7801"),(0,a.kt)("p",null,"Encoding\u63d0\u4f9b\u4e86\u4e24\u79cd\u5b57\u7b26\u4e32\u8f6c\u6362\u4e3a\u5b9a\u578b\u6570\u7ec4\u4e8c\u8fdb\u5236\u683c\u5f0f\u7684\u65b9\u6cd5\uff1a",(0,a.kt)("strong",{parentName:"p"},"\u6279\u91cf\u7f16\u7801\u548c\u6d41\u7f16\u7801"),"\u3002\u628a\u5b57\u7b26\u4e32\u8f6c\u6362\u4e3a\u5b9a\u578b\u6570\u7ec4\u7684\u65f6\u5019\uff0c\u7f16\u7801\u5668\u59cb\u7ec8\u4f7f\u7528\u7684\u662fUTF-8\u3002"),(0,a.kt)("h5",{id:"\u6279\u91cf\u7f16\u7801"},"\u6279\u91cf\u7f16\u7801"),(0,a.kt)("p",null,"\u6279\u91cf\u7f16\u7801\uff0c\u6307\u7684\u662fJavaScript\u5f15\u64ce\u4f1a\u540c\u6b65\u7f16\u7801\u6574\u4e2a\u5b57\u7b26\u4e32\uff0c\u5bf9\u5f88\u957f\u7684\u5b57\u7b26\u4e32\uff0c\u82b1\u8d39\u65f6\u95f4\u6bd4\u8f83\u957f\u3002"),(0,a.kt)("p",null,"\u6279\u91cf\u7f16\u7801\u662f\u901a\u8fc7TextEncoding\u7684\u5b9e\u4f8b\u6765\u5b8c\u6210\u7684\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"const  textEncoder =  new  TextEncoder()"),"\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"const textEncoder = new TextEncoder();\nconst text = textEncoder.encode(\"foo\");\n\nconsole.log('====================================');\nconsole.log(text);\nconsole.log('====================================');\n")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/1946bb8e312949beb88cff1831b0e395.png",alt:"\u5728\u8fd9\u91cc\u63d2\u5165\u56fe\u7247\u63cf\u8ff0"})),(0,a.kt)("p",null,"\u5176\u4e2df\u7684UTF-8\u7f16\u7801\u662f0x66\uff0c\u5341\u8fdb\u5236\u4e3a102\u3002"),(0,a.kt)("p",null,"\u7f16\u7801\u5668\u8fd8\u6709\u4e00\u4e2a\u65b9\u6cd5\u662fencodeInto()\u65b9\u6cd5\uff0c\u63a5\u6536\u4e00\u4e2a\u5b57\u7b26\u4e32\u548c\u76ee\u6807Unit8Array\uff0c\u8fd4\u56de\u4e00\u4e2a\u5bf9\u8c61\uff0c\u8be5\u5bf9\u8c61\u542b\u6709read\u548cwriten\u5c5e\u6027\uff0c\u8868\u793a\u6210\u529f\u4ece\u6e90\u5b57\u7b26\u4e32\u4e2d\u8bfb\u53d6\u591a\u5c11\u5b57\u7b26\u548c\u5411\u76ee\u6807\u6570\u7ec4\u5199\u5165\u591a\u5c11\u5b57\u7b26\u3002\u5982\u679c\u7a7a\u95f4\u4e0d\u591f\uff0c\u7f16\u7801\u5c31\u4f1a\u63d0\u524d\u7ec8\u6b62\uff0c\u6bd4\u5982\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"const textEncoder = new TextEncoder();\nconst fooArr = new Uint8Array(3);\nconst barArr = new Uint8Array(2);\nconst fooResult = textEncoder.encodeInto('foo', fooArr);\nconst barResult = textEncoder.encodeInto('bar', barArr);\nconsole.log(fooArr);     // Uint8Array(3) [102, 111, 111]\nconsole.log(fooResult); // {read: 3, written: 3}\nconsole.log(barArr);     // Uint8Array(2) [98, 97]\nconsole.log(barResult); // {read: 2, written: 2}\n")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/da048bf9a04f43358f590e7d6794cda4.png",alt:"\u5728\u8fd9\u91cc\u63d2\u5165\u56fe\u7247\u63cf\u8ff0"})),(0,a.kt)("h2",{id:"\u6587\u672c\u89e3\u7801"},"\u6587\u672c\u89e3\u7801"),(0,a.kt)("p",null,"Encoding \u63d0\u4f9b\u4e86\u4e24\u79cd\u5b9a\u578b\u6570\u7ec4\u8f6c\u6362\u4e3a\u5b57\u7b26\u4e32\u7684\u65b9\u5f0f\uff1a\u6279\u91cf\u89e3\u7801\u548c\u6d41\u89e3\u7801\u3002"),(0,a.kt)("h5",{id:"\u6279\u91cf\u89e3\u7801"},"\u6279\u91cf\u89e3\u7801"),(0,a.kt)("p",null,"JavaScript\u5f15\u64ce\u4f1a\u540c\u6b65\u89e3\u7801\u6574\u4e2a\u5b57\u7b26\u4e32\uff0c\u5bf9\u4e8e\u5f88\u957f\u7684\u5b57\u7b26\u4e32\uff0c\u4e5f\u662f\u4f1a\u82b1\u8d39\u5f88\u957f\u65f6\u95f4\u7684\u3002\u6279\u91cf\u89e3\u7801\u662f\u901a\u8fc7TextDecoder\u7684\u5b9e\u4f8b\u6765\u5b8c\u6210\u7684\u3002\u6bd4\u5982\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'const textEncoder = new TextEncoder();\nconst  textDecoder = new TextDecoder();\nconst encodeText = textEncoder.encode("foo");\nconst decoderText = textDecoder.decode(encodeText);\nconsole.log("\u89e3\u7801\uff1a",decoderText); // \u89e3\u7801\uff1afoo\n')),(0,a.kt)("h2",{id:"\u62d6\u653e\u4e8b\u4ef6"},"\u62d6\u653e\u4e8b\u4ef6"),(0,a.kt)("p",null,"\u5f53\u4e00\u4e2a\u5143\u7d20\u88ab\u62d6\u653e\u7684\u65f6\u5019\uff0c\u4f1a\u89e6\u53d1\u4ee5\u4e0b\u51e0\u4e2a\u4e8b\u4ef6\uff1adragstart\u3001drag\u3001dragend\u3002\u6309\u4f4f\u9f20\u6807\u952e\u4e0d\u653e\u5f00\uff0c\u88ab\u62d6\u52a8\u7684\u5143\u7d20\u4e0a\u5c31\u4f1a\u89e6\u53d1dragstart\u4e8b\u4ef6\uff1b\u4e4b\u540e\u53ea\u8981\u76ee\u6807\u5143\u7d20\u8fd8\u88ab\u62d6\u52a8\u5c31\u4f1a\u4e00\u76f4\u89e6\u53d1\u7684drag\u4e8b\u4ef6\uff1b\u62d6\u52a8\u505c\u6b62\u540e\uff0c\u5c31\u89e6\u53d1dragend\u4e8b\u4ef6\u3002"),(0,a.kt)("p",null," \u5728\u628a\u5143\u7d20\u653e\u5230\u4e00\u4e2a\u6709\u6548\u7684\u653e\u7f6e\u76ee\u6807\u4e0a\u7684\u65f6\u5019\uff0c\u4f1a\u4f9d\u6b21\u53d1\u751f\u4ee5\u4e0b\u4e8b\u4ef6\uff1adragenter\u3001dragover\u3001dragleave\u6216\u8005drop\u3002"),(0,a.kt)("p",null,"\u5143\u7d20\u62d6\u52a8\u5230\u653e\u7f6e\u76ee\u6807\u4e0a\u7684\u65f6\u5019\uff0c\u5c31\u89e6\u53d1dragenter\u4e8b\u4ef6\uff0c\u4e4b\u540e\u7acb\u5373\u89e6\u53d1dragover\u4e8b\u4ef6\uff0c\u5e76\u4e14\u5143\u7d20\u5728\u653e\u7f6e\u533a\u57df\u8303\u56f4\u5185\u88ab\u62d6\u52a8\u7684\u8fc7\u7a0b\u4e2ddragover\u4e8b\u4ef6\u4e00\u76f4\u5728\u89e6\u53d1\uff0c\u53ea\u6709\u5728\u5143\u7d20\u88ab\u62d6\u52a8\u5230\u653e\u7f6e\u533a\u57df\u5916\u9762\u7684\u65f6\u5019\uff0cdragover\u624d\u4f1a\u505c\u6b62\u89e6\u53d1\uff0c\u7136\u540e\u89e6\u53d1dragleave\u4e8b\u4ef6\u3002\u5982\u679c\u88ab\u62d6\u52a8\u5143\u7d20\u88ab\u653e\u5230\u76ee\u6807\u4e0a\uff0c\u90a3\u4e48\u5c31\u4f1a\u89e6\u53d1drop\u4e8b\u4ef6\u800c\u4e0d\u662fdragleave\u3002"),(0,a.kt)("h2",{id:"\u5b9a\u4e49\u653e\u7f6e\u533a\u57df"},"\u5b9a\u4e49\u653e\u7f6e\u533a\u57df"),(0,a.kt)("p",null,"\u5f53\u6211\u4eec\u628a\u4e00\u4e2a\u5143\u7d20\u62d6\u52a8\u5230\u65e0\u6548\u653e\u7f6e\u533a\u57df\u4e0a\u7684\u65f6\u5019\uff0c\u5c31\u4f1a\u770b\u5230\u4e00\u4e2a\u7279\u6b8a\u7684\u5149\u6807\uff0c\u8868\u793a\u4e0d\u80fd\u653e\u4e0b\u3002\u901a\u8fc7dragenter\u548cdragover\u4e8b\u4ef6\u7684\u9ed8\u8ba4\u884c\u4e3a\uff0c\u5c31\u53ef\u4ee5\u628a\u8ba4\u53ef\u5143\u7d20\u8f6c\u6362\u4e3a\u6709\u6548\u7684\u653e\u7f6e\u533a\u57df\u3002\u4ee3\u7801\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'<!DOCTYPE html>\n<html lang="en">\n\n<head>\n    <meta charset="UTF-8">\n    <meta http-equiv="X-UA-Compatible" content="IE=edge">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>\u539f\u751f\u62d6\u653e\u4e8b\u4ef6</title>\n    <style>\n        #droptarget {\n            width: 100px;\n            height: 100px;\n            border: 1px solid red;\n        }\n    </style>\n</head>\n\n<body>\n    <div id="droptarget"></div>\n\n    <script>\n        let dropTarget = document.getElementById("droptarget");\n        dropTarget.addEventListener("dragover", (event) => {\n            event.preventDefault();\n        });\n\n        dropTarget.addEventListener("dragenter", (event) => {\n            event.preventDefault();\n        })\n    <\/script>\n</body>\n</html>\n')),(0,a.kt)("h2",{id:"\u53ef\u62d6\u52a8\u80fd\u529b"},"\u53ef\u62d6\u52a8\u80fd\u529b"),(0,a.kt)("p",null,"\u4e00\u822c\u60c5\u51b5\u4e0b\uff0c\u56fe\u7247\u3001\u94fe\u63a5\u548c\u6587\u672c\u662f\u53ef\u4ee5\u62d6\u52a8\u7684\u3002\u5176\u4e2d\u6587\u672c\u662f\u5728\u88ab\u9009\u4e2d\u540e\u624d\u53ef\u4ee5\u62d6\u52a8\u3002\u5982\u679c\u60f3\u8ba9\u5176\u4ed6\u5143\u7d20\u53d8\u5f97\u53ef\u4ee5\u62d6\u52a8\uff0c\u90a3\u4e48\u5c31\u9700\u8981\u5728\u8be5\u5143\u7d20\u4e0a\u5b9a\u4e49\u4e00\u4e2adraggable\uff0c\u8868\u793a\u662f\u53ef\u4ee5\u62d6\u52a8\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u8981\u8bbe\u7f6e\u56fe\u7247\u6216\u8005\u94fe\u63a5\u7981\u6b62\u62d6\u52a8\uff0c\u5219\u76f4\u63a5\u5728\u5143\u7d20\u7684draggable\u5c5e\u6027\u8bbe\u7f6e\u4e3afalse\u5373\u53ef\u3002"),(0,a.kt)("p",null,"\u6548\u679c\u5982\u56fe\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/3483dee9ac534f5888b3a86a58066999.png",alt:"\u5728\u8fd9\u91cc\u63d2\u5165\u56fe\u7247\u63cf\u8ff0"}),"\n",(0,a.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/4ccd758a88764d32bdd32242802dd9e4.png",alt:"\u5728\u8fd9\u91cc\u63d2\u5165\u56fe\u7247\u63cf\u8ff0"})),(0,a.kt)("p",null,"\u8fd9\u6837\u6211\u4eec\u5c31\u53ef\u4ee5\u5728\u4e0d\u540c\u7684\u4e8b\u4ef6\u4e2d\uff0c\u7f16\u5199\u5bf9\u5e94\u7684\u903b\u8f91\u3002"))}s.isMDXComponent=!0}}]);