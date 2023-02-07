"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1532],{3905:(e,r,n)=>{n.d(r,{Zo:()=>p,kt:()=>v});var t=n(7294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function s(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function a(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?s(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},s=Object.keys(e);for(t=0;t<s.length;t++)n=s[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)n=s[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=t.createContext({}),c=function(e){var r=t.useContext(i),n=r;return e&&(n="function"==typeof e?e(r):a(a({},r),e)),n},p=function(e){var r=c(e.components);return t.createElement(i.Provider,{value:r},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},g=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,s=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),g=o,v=m["".concat(i,".").concat(g)]||m[g]||u[g]||s;return n?t.createElement(v,a(a({ref:r},p),{},{components:n})):t.createElement(v,a({ref:r},p))}));function v(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var s=n.length,a=new Array(s);a[0]=g;var l={};for(var i in r)hasOwnProperty.call(r,i)&&(l[i]=r[i]);l.originalType=e,l[m]="string"==typeof e?e:o,a[1]=l;for(var c=2;c<s;c++)a[c]=n[c];return t.createElement.apply(null,a)}return t.createElement.apply(null,n)}g.displayName="MDXCreateElement"},6140:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>i,contentTitle:()=>a,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var t=n(7462),o=(n(7294),n(3905));const s={sidebar_position:4,id:"JavaScript\uff1aPromise\u8fdb\u9636\u77e5\u8bc6",title:"JavaScript\uff1aPromise\u8fdb\u9636\u77e5\u8bc6",authors:"duxinyues",tags:["JavaScript"]},a=void 0,l={permalink:"/blog/javascript/JavaScript202204",editUrl:"https://github.com/duxinyues/docusaurus/blob/main/blog/javascript/JavaScript202204.md",source:"@site/blog/javascript/JavaScript202204.md",title:"JavaScript\uff1aPromise\u8fdb\u9636\u77e5\u8bc6",description:"Promise",date:"2022-12-08T12:09:12.000Z",formattedDate:"2022\u5e7412\u67088\u65e5",tags:[{label:"JavaScript",permalink:"/blog/tags/java-script"}],readingTime:13.59,hasTruncateMarker:!1,authors:[{name:"\u8bfb\u5fc3\u60a6",title:"\u524d\u7aef\u5f00\u53d1\u653b\u57ce\u72ee",url:"https://github.com/duxinyues/",email:"yongyuan253015@gmail.com",imageURL:"https://avatars.githubusercontent.com/u/29058884?v=4",key:"duxinyues"}],frontMatter:{sidebar_position:4,id:"JavaScript\uff1aPromise\u8fdb\u9636\u77e5\u8bc6",title:"JavaScript\uff1aPromise\u8fdb\u9636\u77e5\u8bc6",authors:"duxinyues",tags:["JavaScript"]},prevItem:{title:"JavaScript\uff1aWebSocket\u57fa\u672c\u4f7f\u7528\u65b9\u6cd5",permalink:"/blog/javascript/JavaScript202203"},nextItem:{title:"JavaScript\uff1aDOM\u64cd\u4f5c\u7684\u6027\u80fd\u4f18\u5316",permalink:"/blog/javascript/JavaScript202208"}},i={authorsImageUrls:[void 0]},c=[{value:"Promise",id:"promise",level:2},{value:"Promise\u9759\u6001\u65b9\u6cd5",id:"promise\u9759\u6001\u65b9\u6cd5",level:2},{value:"Promise.all()\u51fd\u6570",id:"promiseall\u51fd\u6570",level:5},{value:"Promise.race \u51fd\u6570",id:"promiserace-\u51fd\u6570",level:5},{value:"Promise.any\u51fd\u6570",id:"promiseany\u51fd\u6570",level:5}],p={toc:c};function m(e){let{components:r,...n}=e;return(0,o.kt)("wrapper",(0,t.Z)({},p,n,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"promise"},"Promise"),(0,o.kt)("p",null,"Promise\u5c31\u662fES6\u65b0\u589e\u7684\u4e00\u4e2a\u7528\u4e8e\u89e3\u51b3\u5f02\u6b65\u7f16\u7a0b\u7684\u65b9\u6848\u3002\u4ee5\u524d\uff0c\u6211\u4eec\u5728\u5904\u7406\u5f02\u6b65\u7684\u65f6\u5019\uff0c\u90fd\u662f\u5728\u56de\u8c03\u51fd\u6570\u5185\u505a\u5904\u7406\u7684\u3002\u6bd4\u5982Ajax\u8bf7\u6c42\uff0c\u662f\u5728success\u5c5e\u6027\u91cc\u9762\u505a\u5f02\u6b65\u5904\u7406\u7684\uff0c\u90a3\u4e48\u5982\u679c\u5728\u4e00\u4e2a\u8bf7\u6c42\u4e2d\u9700\u8981\u6267\u884c\u8bfb\u4e2a\u5f02\u6b65\u8bf7\u6c42\uff0c\u7b2c\u4e8c\u4e2a\u8bf7\u6c42\u662f\u4f9d\u8d56\u4e8e\u7b2c\u4e00\u4e2a\u8bf7\u6c42\u7684\u7ed3\u679c\uff0c\u8fd9\u6837\u5c31\u5bfc\u81f4\u4ee3\u7801\u5d4c\u5957\u5f88\u6df1\uff0c\u53ef\u8bfb\u6027\u5dee\u3001\u5f88\u96be\u7ef4\u62a4\u5e76\u4e14\u96be\u4ee5\u590d\u7528\u3002"),(0,o.kt)("p",null,"\u90a3\u4e48Promise\u6b63\u597d\u53ef\u4ee5\u89e3\u51b3\u8fd9\u6837\u7684\u95ee\u9898\uff0cPromise\u67093\u79cd\u72b6\u6001\uff1apending\u3001fulfilled\u548crejected\u3002Promise\u5728\u521b\u5efa\u9636\u6bb5\u662f\u5c5e\u4e8epending\u72b6\u6001\uff0c\u63a5\u7740\u72b6\u6001\u53ea\u80fd\u6709\u4e24\u79cd\u4e00\u4e2a\u6570fulfilled\u6216\u8005rejected\uff0c\u72b6\u6001\u6539\u53d8\u540e\u5c31\u4e0d\u80fd\u518d\u53d1\u751f\u53d8\u5316\u4e86\uff0c\u4f8b\u5982\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const promise = new Promise((resolve, rejected) => {\n    // \u5f02\u6b65\u8bf7\u6c42\u5904\u7406\n    if (/\u5f02\u6b65\u8bf7\u6c42/) {\n        resolve();\n    } else {\n        rejected();\n    }\n})\n")),(0,o.kt)("p",null,"\u5f02\u6b65\u8bf7\u6c42\u6210\u529f\uff0c\u5219\u6267\u884cresolve\u51fd\u6570\uff0c\u5426\u5219\u6267\u884crejected\u51fd\u6570\uff0cresolve\u548crejected\u51fd\u6570\u53ef\u4ee5\u4f20\u53c2\u6570\uff0c\u4f5c\u4e3a\u540e\u9762.then\u51fd\u6570\u6216\u8005catch\u51fd\u6570\u7684\u6570\u636e\u6e90\u3002"),(0,o.kt)("p",null,"Promise\u5728\u521b\u5efa\u540e\u7acb\u5373\u8c03\u7528\uff0c\u7136\u540e\u7b49\u5f85\u6267\u884cresolve\u6216\u8005\u662frejected\u51fd\u6570\u6765\u786e\u5b9aPromise\u7684\u6700\u7ec8\u72b6\u6001\uff0c\u6bd4\u5982\u4e0b\u9762\u4ee3\u7801\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'const promise = new Promise((resolve, rejected) => {\n    console.log("Promise");\n    resolve();\n})\n\npromise.then(() => {\n    console.log("resolve")\n});\n\nconsole.log("hello")\n')),(0,o.kt)("p",null,"\u7ed3\u679c\u5c31\u662fPromise\uff0chello\uff0cresolve\u3002\u56e0\u4e3aPromise\u521b\u5efa\u540e\u4f1a\u7acb\u5373\u6267\u884c\uff0c\u8f93\u51faPromise\uff1b\u7136\u540e\u662f\u6267\u884cresolve\u51fd\u6570\uff0c\u8fd9\u6837\u5c31\u4f1a\u89e6\u53d1then\u51fd\u6570\u91cc\u9762\u7684\u56de\u8c03\u51fd\u6570\uff0c\u4f46\u662f\u5b83\u9700\u8981\u7b49\u5f85\u5f53\u524d\u7ebf\u7a0b\u4ee3\u7801\u6267\u884c\u5b8c\u6bd5\u540e\u518d\u6267\u884c\uff0c\u7f29\u56de\u8df3\u8fc7\uff0c\u5148\u6267\u884c\u540e\u9762\u7684\u4ee3\u7801\uff0c\u8f93\u51fahello\uff0c\u6700\u540e\u6267\u884cthen\u7684\u56de\u8c03\u51fd\u6570\uff0c\u8f93\u51faresolve\u3002"),(0,o.kt)("p",null,"then\u51fd\u6570\uff0c\u8fd4\u56de\u7684\u662f\u4e00\u4e2aPromise\u5bf9\u8c61\u5b9e\u4f8b\uff0c\u6240\u4ee5\u53ef\u4ee5\u901a\u8fc7\u94fe\u5f0f\u8c03\u7528then\u51fd\u6570\uff0c\u5728\u4e0a\u4e00\u4e2athen\u51fd\u6570\u5185return\u7684\u503c\u662f\u4e0b\u4e00\u4e2athen\u51fd\u6570\u63a5\u6536\u7684\u6570\u636e\uff0c\u6bd4\u5982\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const promise = new Promise((resolve, rejected) => {\n    resolve(1);\n})\n\npromise.then((res) => {\n    console.log(res);\n    return 2;\n}).then(res => {\n    console.log(res);\n    return 3;\n}).then(res => {\n    console.log(res)\n})\n")),(0,o.kt)("p",null,"\u7ed3\u679c\u5c31\u662f\u4e00\u6b21\u6253\u53701\uff0c2\uff0c3\u3002\u8fd9\u6837\u5c31\u662f\u53ef\u4ee5\u89e3\u51b3\u5f02\u6b65\u56de\u8c03\u5730\u72f1\u7684\u95ee\u9898\u3002"),(0,o.kt)("p",null,"catch\u51fd\u6570\uff0c\u662fPromise\u6267\u884c\u5931\u8d25\u7684\u56de\u8c03\u3002\u5982\u679c\u6211\u4eec\u5728Promise\u4e2d\u624b\u52a8\u629b\u51fa\u4e00\u4e2a\u5f02\u5e38\uff0c\u6765\u6d4b\u8bd5catch\u51fd\u6570\uff0c\u4ee3\u7801\u5982\u4e0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'const promise1 = new Promise((resolve, rejected) => {\n    try {\n        throw new Error("\u6d4b\u8bd5");\n    } catch (error) {\n        rejected(error)\n    }\n})\n\npromise1.catch(err=>{\n    console.log(err); // Error: \u6d4b\u8bd5\n})\n')),(0,o.kt)("p",null,"\u7136\u800cPromise\u5728\u6267\u884c\u4e2d\uff0c\u5982\u679c\u51fa\u73b0\u5f02\u5e38\u5c31\u4f1a\u81ea\u52a8\u629b\u51fa\uff0c\u8fd9\u6837\u4e0a\u9762\u7684\u4ee3\u7801\u53ef\u4ee5\u6539\u4e3a\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'const promise1 = new Promise((resolve, rejected) => {\n    throw new Error("\u6d4b\u8bd5");\n})\n\npromise1.catch(err=>{\n    console.log(err); // Error: \u6d4b\u8bd5\n})\n')),(0,o.kt)("p",null,"\u4f46\u662f\u9700\u8981\u6ce8\u610f\uff0cPromise\u7684\u72b6\u6001\u4e00\u65e6\u53d8\u5473fulfilled\u6210\u529f\u72b6\u6001\uff0c\u7136\u540e\u518d\u629b\u51fa\u5f02\u5e38\uff0c\u662f\u4e0d\u80fd\u89e6\u53d1catch\u7684\uff0c\u56e0\u4e3a\u524d\u9762\u5df2\u7ecf\u8bf4\u8fc7\u4e86Promise\u7684\u72b6\u6001\u53ea\u8981\u53d1\u751f\u53d8\u5316\u540e\u5c31\u4e0d\u80fd\u518d\u6b21\u66f4\u6539\u3002"),(0,o.kt)("h2",{id:"promise\u9759\u6001\u65b9\u6cd5"},"Promise\u9759\u6001\u65b9\u6cd5"),(0,o.kt)("h5",{id:"promiseall\u51fd\u6570"},"Promise.all()\u51fd\u6570"),(0,o.kt)("p",null,"\u5c06\u591a\u4e2aPromise\u5bf9\u8c61\u5b9e\u4f8b\u5305\u88c5\u6210\u4e3a\u4e00\u4e2aPromise\u5b9e\u4f8b\uff0c\u53c2\u6570\u662f\u4e00\u4e2a\u6570\u7ec4\uff0c\u8fd9\u4e2aPromise\u7684\u72b6\u6001\u662f\u7531\u6240\u6709\u4f20\u5165Promise\u5bf9\u8c61\u6765\u51b3\u5b9a\uff0c\u5f53\u6240\u6709\u7684Promise\u7684\u72b6\u6001\u4e3afulfilled\uff0c\u8fd9\u4e2a\u65b0\u7684Promise\u7684\u72b6\u6001\u624d\u662ffulfilled\u72b6\u6001\uff0c\u5982\u679c\u6709\u4e00\u4e2apromise\u7684\u72b6\u6001\u4e3arejected\uff0c\u90a3\u4e48\u8fd9\u4e2a\u65b0Promise\u7684\u72b6\u6001\u5c31\u662freject\u3002"),(0,o.kt)("p",null,"\u73b0\u5728\u4f7f\u7528\u4e00\u6bb5\u4ee3\u7801\u6765\u7406\u89e3\u4e0a\u9762\u7684\u63cf\u8ff0\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const p1 = new Promise((resolve, reject) => {\n    resolve(\"success\")\n})\n\nconst p2 = new Promise((resolve, reject) => {\n    resolve(1)\n})\n\nconst p = Promise.all([p1, p2]);\np.then(res => {\n    console.log(res);\n}).catch(err => {\n    console.log(err)\n})\n// [ 'success', 1 ]\n")),(0,o.kt)("p",null,"\u5982\u679cp1\uff0cp2\u4e2d\u5df2\u7ecf\u5b9a\u4e49\u4e86\u5bf9\u5e94\u7684catch\uff0c\u5f53\u6709\u4e00\u4e2apromise\u72b6\u6001\u53d8\u4e3areject\u7684\u8bdd\uff0cpromise.all\u4e0d\u4f1a\u89e6\u53d1catch\u51fd\u6570\u4e86\uff0c\u6bd4\u5982\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'const p1 = new Promise((resolve, reject) => {\n    resolve("success")\n}).then(res => res).catch(err => err)\n\nconst p2 = new Promise((resolve, reject) => {\n    throw new Error("\u62a5\u9519")\n}).then(res => res).catch(err => err)\n\nconst p = Promise.all([p1, p2]);\np.then(res => {\n    console.log(res)\n}).catch(err => {\n    console.log(err)\n})\n// [ \'success\',  Error: \u62a5\u9519 ]\n')),(0,o.kt)("h5",{id:"promiserace-\u51fd\u6570"},"Promise.race \u51fd\u6570"),(0,o.kt)("p",null,"\u901a\u8fc7race\u65b9\u6cd5\u6765\u5408\u5e76\u591a\u4e2apromise\uff0c\u90a3\u4e48\u8fd9\u4e2apromise\u72b6\u6001\u662f\u6700\u5148\u66f4\u65b0\u72b6\u6001\u7684promise\u7684\u72b6\u6001\uff0c\u6bd4\u5982\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'const p1 = new Promise((resolve, reject) => {\n}).then(res => res).catch(err => err)\n\nconst p2 = new Promise((resolve, reject) => {\n    reject("\u5931\u8d25\u4e86")\n}).then(res => res).catch(err => err)\nconst race = Promise.race([p1, p2]);\nrace.then(res => {\n    console.log(res)\n}).catch(err => {\n    console.log(err)\n}) // \u5931\u8d25\u4e86\n')),(0,o.kt)("h5",{id:"promiseany\u51fd\u6570"},"Promise.any\u51fd\u6570"),(0,o.kt)("p",null,"\u4f20\u5165\u4e00\u4e2a\u53ef\u8fed\u4ee3\u7684\u53c2\u6570\uff0c\u5982\u6570\u7ec4\u3002\n\u7ed3\u679c\u4e3a\uff1a\n1\u3001\u6240\u6709promise\u72b6\u6001\u90fd\u4e3a\u6210\u529f\uff0c\u8fd4\u56de\u7684\u662f\u7b2c\u4e00\u4e2apromise\u7684\u6210\u529f\u72b6\u6001"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"//1.\u83b7\u53d6\u8f6e\u64ad\u6570\u636e\u5217\u8868\n\nfunction getBannerList() {\n    return new Promise((resolve, reject) => {\n        resolve('banner')\n    })\n}\n\n//2.\u83b7\u53d6\u5e97\u94fa\u5217\u8868\n\nfunction getStoreList() {\n    return new Promise((resolve, reject) => {\n        resolve('store')\n    })\n}\n\n//3.\u83b7\u53d6\u5206\u7c7b\u5217\u8868\n\nfunction getCategoryList() {\n    return new Promise((resolve, reject) => {\n        resolve(\"\u5931\u8d25\u4e86\")\n    })\n}\n\nfunction initLoad() {\n\n    Promise.any([getBannerList(), getStoreList(), getCategoryList()])\n\n        .then(res => {\n\n            console.log(res)\n\n        }).catch(err => {\n\n            console.log(err)\n\n        })\n\n}\ninitLoad(); // banner\n\n")),(0,o.kt)("p",null,"2\u3001\u6709\u4e00\u4e2apromise\u7684\u72b6\u6001\u4e3a\u5931\u8d25\uff0c\u90a3\u4e48\u5c31\u8fd4\u56de\u7b2c\u4e00\u4e2a\u72b6\u6001\u4e3a\u6210\u529f\u7684promise\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"//1.\u83b7\u53d6\u8f6e\u64ad\u6570\u636e\u5217\u8868\n\nfunction getBannerList() {\n    return new Promise((resolve, reject) => {\n        reject('banner')\n    })\n}\n\n//2.\u83b7\u53d6\u5e97\u94fa\u5217\u8868\n\nfunction getStoreList() {\n    return new Promise((resolve, reject) => {\n        resolve('store')\n    })\n}\n\n//3.\u83b7\u53d6\u5206\u7c7b\u5217\u8868\n\nfunction getCategoryList() {\n    return new Promise((resolve, reject) => {\n        resolve(\"\u5931\u8d25\u4e86\")\n    })\n}\n\nfunction initLoad() {\n\n    Promise.any([getBannerList(), getStoreList(), getCategoryList()])\n\n        .then(res => {\n\n            console.log(res)\n\n        }).catch(err => {\n\n            console.log(err)\n\n        })\n\n}\ninitLoad(); // store\n")),(0,o.kt)("p",null,"3\u3001\u6240\u6709promise\u72b6\u6001\u4e3a\u5931\u8d25\u7684\uff0c\u90a3\u4e48\u8fd4\u56de\u7684\u662f","[AggregateError: All promises were rejected]","\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"//1.\u83b7\u53d6\u8f6e\u64ad\u6570\u636e\u5217\u8868\n\nfunction getBannerList() {\n    return new Promise((resolve, reject) => {\n        reject('banner')\n    })\n}\n\n//2.\u83b7\u53d6\u5e97\u94fa\u5217\u8868\n\nfunction getStoreList() {\n    return new Promise((resolve, reject) => {\n        reject('store')\n    })\n}\n\n//3.\u83b7\u53d6\u5206\u7c7b\u5217\u8868\n\nfunction getCategoryList() {\n    return new Promise((resolve, reject) => {\n        reject(\"\u5931\u8d25\u4e86\")\n    })\n}\n\nfunction initLoad() {\n\n    Promise.any([getBannerList(), getStoreList(), getCategoryList()])\n\n        .then(res => {\n\n            console.log(res)\n\n        }).catch(err => {\n\n            console.log(err)\n\n        })\n\n}\ninitLoad(); // [AggregateError: All promises were rejected]\n\n")))}m.isMDXComponent=!0}}]);