"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1444],{3905:(t,e,n)=>{n.d(e,{Zo:()=>i,kt:()=>g});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var c=a.createContext({}),l=function(t){var e=a.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):s(s({},e),t)),n},i=function(t){var e=l(t.components);return a.createElement(c.Provider,{value:e},t.children)},u="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,c=t.parentName,i=p(t,["components","mdxType","originalType","parentName"]),u=l(n),d=r,g=u["".concat(c,".").concat(d)]||u[d]||m[d]||o;return n?a.createElement(g,s(s({ref:e},i),{},{components:n})):a.createElement(g,s({ref:e},i))}));function g(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,s=new Array(o);s[0]=d;var p={};for(var c in e)hasOwnProperty.call(e,c)&&(p[c]=e[c]);p.originalType=t,p[u]="string"==typeof t?t:r,s[1]=p;for(var l=2;l<o;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5557:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:0,id:"React\uff1a\u6570\u636e\u6d41",title:"React\uff1a\u6570\u636e\u6d41",authors:"duxinyues",tags:["react"]},s=void 0,p={permalink:"/blog/react/react",editUrl:"https://github.com/duxinyues/docusaurus/blob/main/blog/react/react.md",source:"@site/blog/react/react.md",title:"React\uff1a\u6570\u636e\u6d41",description:"props\u548cState",date:"2023-02-05T14:09:00.000Z",formattedDate:"2023\u5e742\u67085\u65e5",tags:[{label:"react",permalink:"/blog/tags/react"}],readingTime:22.01,hasTruncateMarker:!1,authors:[{name:"\u8bfb\u5fc3\u60a6",title:"\u524d\u7aef\u5f00\u53d1\u653b\u57ce\u72ee",url:"https://github.com/duxinyues/",email:"yongyuan253015@gmail.com",imageURL:"https://avatars.githubusercontent.com/u/29058884?v=4",key:"duxinyues"}],frontMatter:{sidebar_position:0,id:"React\uff1a\u6570\u636e\u6d41",title:"React\uff1a\u6570\u636e\u6d41",authors:"duxinyues",tags:["react"]},prevItem:{title:"\u8fed\u4ee3\u4e0e\u6d41\u7a0b\u63a7\u5236",permalink:"/blog/javascript/javascript202304"},nextItem:{title:"\u7406\u89e3\u865a\u62dfDOM\u3001innerHTML\u548cJavaScript\u64cd\u4f5cDOM",permalink:"/blog/javascript/JavaScript202302"}},c={authorsImageUrls:[void 0]},l=[{value:"props\u548cState",id:"props\u548cstate",level:2},{value:"\u7ec4\u4ef6\u901a\u4fe1",id:"\u7ec4\u4ef6\u901a\u4fe1",level:2},{value:"\u590d\u6742\u72b6\u6001\u7ba1\u7406\u7684\u89e3\u51b3\u65b9\u6848",id:"\u590d\u6742\u72b6\u6001\u7ba1\u7406\u7684\u89e3\u51b3\u65b9\u6848",level:2}],i={toc:l};function u(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},i,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"props\u548cstate"},"props\u548cState"),(0,r.kt)("p",null,"\u7ec4\u4ef6\u7684props\uff0c\u53ef\u4ee5\u7406\u89e3\u4e3a\u7ec4\u4ef6\u7684\u53c2\u6570\uff0c\u7ec4\u4ef6\u63a5\u6536\u53c2\u6570\u540e\uff0c\u8fd4\u56de\u4e00\u4e2a\u7528\u6765\u63cf\u8ff0\u9875\u9762\u5185\u5bb9\u7684\u865a\u62dfDOM\u3002"),(0,r.kt)("p",null,"\u865a\u62dfDOM\u5176\u5b9e\u5c31\u662f\u4e00\u4e2a\u5bf9\u8c61\uff0c\u7528\u6765\u63cf\u8ff0\u771f\u5b9eDOM\u7684\uff0c\u90a3\u4e48\u5728\u5f00\u53d1\u8fc7\u7a0b\u4e2d\uff0c\u6211\u4eec\u662f\u4f7f\u7528JSX\u6765\u5b8c\u6210\u865a\u62dfDOM\u7684\u6784\u5efa\u3002\u6bd4\u5982\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'import React from "react";\nclass Comm extends React.Component {\n\n   \n    componentDidMount() {\n        console.log(\'componentDidMount\')\n    }\n\n    shouldComponentUpdate() {\n        console.log("shouldComponentUpdate")\n        return true\n    }\n    componentDidUpdate() {\n        console.log("componentDidUpdate")\n    }\n    componentWillUnmount() {\n        console.log("componentWillUnmount")\n    }\n    changeText() {\n        this.setState({\n            text: new Date().getTime()\n        })\n    }\n    render() {\n        return <React.Fragment>\n            <button onClick={this.changeText}>\u6309\u94ae</button>\n        </React.Fragment>\n    }\n}\n\nexport default Comm;\n')),(0,r.kt)("p",null,"\u5728React\u7ec4\u4ef7\u4e2d\uff0cProps\u53ef\u4ee5\u662f\u4ece\u7236\u7ec4\u4ef6\u5411\u5b50\u7ec4\u4ef6\u4f20\u9012\u3002\u8fd9\u4e2a\u5f88\u597d\u7406\u89e3\uff0c\u56e0\u4e3a\u5b50\u7ec4\u4ef6\u662f\u5728\u7236\u7ec4\u4ef6\u4e2d\u8c03\u7528\u7684\uff0c\u5728\u8c03\u7528\u5b50\u7ec4\u4ef6\u7684\u65f6\u5019\uff0c\u4f20\u9012\u7684\u53c2\u6570\u81ea\u7136\u662f\u5411\u5b50\u7ec4\u4ef6\u4f20\u9012\u4e86\u3002"),(0,r.kt)("p",null,"\u6bd4\u5982\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'import React from "react";\n\nclass Comm extends React.Component {\n    constructor(props) {\n        super(props);\n    }\n    componentDidMount() {\n        console.log(\'componentDidMount\')\n    }\n\n    shouldComponentUpdate() {\n        console.log("shouldComponentUpdate")\n        return true\n    }\n    componentDidUpdate() {\n        console.log("componentDidUpdate")\n    }\n    componentWillUnmount() {\n        console.log("componentWillUnmount")\n    }\n    changeText = () => {\n        this.setState({\n            data: new Date().getTime()\n        })\n    }\n    state = {\n        data: 9\n    }\n    render() {\n        return <React.Fragment>\n            <Children data={this.state.data} />\n            <button onClick={this.changeText}>\u6309\u94ae</button>\n        </React.Fragment>\n    }\n}\n\nfunction Children({ data }) {\n    return <div>\n        <div>\u8fd9\u662f\u5b50\u7ec4\u4ef6\u7684:{data}</div>\n    </div>\n}\n')),(0,r.kt)("p",null,"\u8fd9\u5176\u4e2d\u7684props\u662f\u4e0d\u53ef\u53d8\u7684\uff0c\u7136\u800cReact\u7684\u6838\u5fc3\u7406\u5ff5\u5c31\u662f\u901a\u8fc7\u6570\u636e\u9a71\u52a8UI\u6e32\u67d3\u3002\u6240\u4ee5\u60f3\u8981\u66f4\u65b0\u7ec4\u4ef6\uff0c\u53ea\u80fd\u901a\u8fc7\u72b6\u6001state\u3002"),(0,r.kt)("p",null,"React\u628a\u7ec4\u4ef6\u770b\u6210\u662f\u4e00\u4e2a\u72b6\u6001\u673a\uff0c\u901a\u8fc7\u548c\u7528\u6237\u7684\u4ea4\u4e92\uff0c\u5b9e\u73b0\u4e0d\u540c\u7684\u72b6\u6001\uff0c\u7136\u540e\u6e32\u67d3UI\uff0c\u8ba9\u7528\u6237\u754c\u9762\u548c\u6570\u636e\u4fdd\u6301\u4e00\u81f4\uff0c\u6240\u4ee5\u7ec4\u4ef6\u7684\u72b6\u6001\u66f4\u65b0\u540e\uff0cReact\u5c31\u91cd\u65b0\u6e32\u67d3\u5bf9\u5e94\u7684\u7ec4\u4ef6\uff0c\u4e0d\u7528\u64cd\u4f5cDOM\u3002"),(0,r.kt)("p",null,"\u5982\u4e0a\u9762\u7684\u4ee3\u7801\u4e2d\uff0c\u5c31\u662f\u901a\u8fc7\u4fee\u6539state\u6765\u66f4\u65b0\u7ec4\u4ef6\u7684\uff0c\u5728\u4fee\u6539state\u7684\u65f6\u5019\uff0c\u4f7f\u7528\u4f7f\u7528React\u7ec4\u4ef6\u5185\u7f6e\u7684\u65b9\u6cd5setState\uff0c\u63a5\u6536\u4e00\u4e2a\u5bf9\u8c61\uff0c\u8fd9\u4e2a\u5bf9\u8c61\u7684key\u5c31\u662f\u9700\u8981\u66f4\u65b0\u7684state\uff0c\u5bf9\u8c61\u7684\u503c\u5c31\u662fstate\u66f4\u65b0\u540e\u7684\u503c\u3002"),(0,r.kt)("p",null,"\u5982\u679csetState\u63a5\u6536\u7684\u662f\u4e00\u4e2a\u51fd\u6570\uff0c\u90a3\u4e48\u8fd9\u4e2a\u51fd\u6570\u6709\u4e24\u4e2a\u53c2\u6570\uff0c\u7b2c\u4e00\u4e2a\u53c2\u6570\u662f\u5f53\u524d\u7684state\uff0c\u7b2c\u4e8c\u4e2a\u53c2\u6570\u662f\u5f53\u524d\u7684props\u3002\u6bd4\u5982\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"}," this.setState((state, props) => {\n            console.log(state, props)\n            return {\n                data: new Date().getTime()\n            }\n        })\n")),(0,r.kt)("p",null,"\u6ce8\u610f\u51e0\u70b9\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u5728\u66f4\u65b0state\u7684\u65f6\u5019\uff0c\u4e0d\u80fd\u76f4\u63a5\u4fee\u6539state\uff0c\u56e0\u4e3a\u76f4\u63a5\u4fee\u6539\uff0c\u5b9e\u9645\u4e0a\u662f\u7ed9\u7ec4\u4ef6\u7684State\u91cd\u65b0\u8d4b\u503c\uff0c\u4e0d\u80fd\u89e6\u53d1\u7ec4\u4ef6\u6e32\u67d3\uff1b"),(0,r.kt)("li",{parentName:"ol"},"\u66f4\u65b0State\u662f\u5f02\u6b65\u7684\uff0c\u90a3\u4e48setState\u7684\u65f6\u5019\uff0c\u53ef\u80fd\u4e0d\u4f1a\u7acb\u5373\u4fee\u6539state\u7684\u503c\uff0c\u6240\u4ee5\u5728\u66f4\u65b0state\u7684\u65f6\u5019\u4e0d\u8981\u4f9d\u8d56\u524d\u4e00\u4e2astate\u6765\u5bf9\u4e0b\u4e00\u4e2astate\u7684\u66f4\u6539\uff0c\u6bd4\u5982\u6709\u8fd9\u6837\u7684\u4ee3\u7801\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"    changeText = () => {\n        this.setState({\n            data: this.state.data + 2\n        })\n        this.setState({\n            data: this.state.data + 2\n        })\n        this.setState({\n            data: this.state.data + 2\n        })\n    }\n")),(0,r.kt)("p",null,"\u5bf9state\u8fdb\u884c3\u6b21\u8fde\u7eed\u66f4\u65b0\uff0c\u4f46\u662f\u5b9e\u9645\u4e0a\u662f\u53ea\u8fdb\u884c\u4e00\u6b21\u66f4\u65b0\u8fd0\u7b97\u3002\u56e0\u4e3a\u5728\u540c\u4e00\u4e2a\u5468\u671f\u5185\u8fdb\u884c\u591a\u6b21\u52a02\u7684\u64cd\u4f5c\uff0c\u76f8\u5f53\u4e8e\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"let obj = { data: 0 };\nconst sss = Object.assign({}, { data: obj.data + 2 }, { data: obj.data + 2 }, { data: obj.data + 2 })\n\n")),(0,r.kt)("p",null,"\u6700\u540e\u7684sss\u7684\u7ed3\u679c\u662f{data:2}"),(0,r.kt)("p",null,"\u6240\u4ee5\u9047\u5230\u8fd9\u6837\u7684\u573a\u666f\u7684\u65f6\u5019\uff0c\u6211\u4eec\u53ef\u4ee5\u5411setState\u51fd\u6570\u4f20\u5165\u4e00\u4e2a\u51fd\u6570\uff0c\u5728\u51fd\u6570\u6765\u5904\u7406\u4e4b\u524d\u7684\u5f02\u6b65\u7ed3\u679c\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"changeText = () => {\n        this.setState((state) => {\n            return {\n                data: state.data + 2\n            }\n        })\n        this.setState((state) => {\n            return {\n                data: state.data + 2\n            }\n        })\n        this.setState((state) => {\n            return {\n                data: state.data + 2\n            }\n        })\n    }\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"\u5728\u8c03\u7528setState\u7684\u65f6\u5019\uff0cReact\u4f1a\u628a\u63d0\u4f9b\u7684\u5bf9\u8c61\u5408\u5e76\u5230\u5f53\u524d\u7684state\u4e2d\uff0c\u4f46\u662f\u53ea\u4f1a\u66f4\u65b0\u4fee\u6539\u7684\u72b6\u6001\uff0c\u5176\u4ed6\u72b6\u6001\u4e0d\u53d8\u3002")),(0,r.kt)("h2",{id:"\u7ec4\u4ef6\u901a\u4fe1"},"\u7ec4\u4ef6\u901a\u4fe1"),(0,r.kt)("p",null,"\u7ec4\u4ef6\u4e4b\u95f4\u7684\u901a\u4fe1\u662f\u901a\u8fc7props\u5c5e\u6027\u6765\u5b8c\u6210\uff0c\u5728\u524d\u9762\u7684\u4ee3\u7801\u4e2d\uff0c\u6211\u4eec\u77e5\u9053\u7236\u7ec4\u4ef6\u901a\u8fc7props\u76f4\u63a5\u5411\u5b50\u7ec4\u4ef6\u4f20\u9012\u6570\u636e\uff0c\u7ec4\u4ef6\u672c\u8eab\u662f\u901a\u8fc7state\u6765\u7ef4\u62a4\u81ea\u8eab\u7684\u72b6\u6001\uff0c\u90a3\u4e48\u5982\u679c\u5b50\u7ec4\u4ef6\u60f3\u8981\u5411\u7236\u7ec4\u4ef6\u4f20\u9012\u6570\u636e\u5462\uff1f"),(0,r.kt)("p",null,"\u4e5f\u662f\u901a\u8fc7props\uff0c\u56e0\u4e3aprops\u53ef\u4ee5\u4f20\u9012\u51fd\u6570\uff0c\u90a3\u5b50\u7ec4\u4ef6\u8c03\u7528\u7236\u7ec4\u4ef6\u4f20\u9012\u8fc7\u6765\u7684\u51fd\u6570\u3002\u7531\u4e8e\u8fd9\u4e2a\u51fd\u6570\u662f\u5728\u7236\u7ec4\u4ef6\u5185\u90e8\u5b9a\u4e49\u7684\uff0c\u7236\u7ec4\u4ef6\u5c31\u53ef\u4ee5\u5728\u51fd\u6570\u88ab\u8c03\u7528\u7684\u65f6\u5019\u63a5\u6536\u5e76\u4e14\u4fee\u6539\u7684\u81ea\u8eab\u7684\u72b6\u6001\u3002"),(0,r.kt)("p",null,"\u73b0\u5728\u4fee\u6539\u4e00\u4e0b\u524d\u9762\u4ee3\u7801\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"function Children({ data ,changeText}) {\n    return <div>\n        <div>\u8fd9\u662f\u5b50\u7ec4\u4ef6\u7684:{data}\n        <button onClick={()=>changeText()}>\u4fee\u6539</button>\n        </div>\n    </div>\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"    render() {\n        return <React.Fragment>\n            <p>\u7236\u7ec4\u4ef6\uff1a{this.state.data}</p>\n            <Children data={this.state.data} changeText={this.changeText}/>\n            <button onClick={this.changeText} >\u6309\u94ae</button>\n        </React.Fragment>\n    }\n")),(0,r.kt)("p",null,"\u73b0\u5728\u5c31\u53ef\u5728\u5b50\u7ec4\u4ef6\u4e2d\u4fee\u6539\u7236\u7ec4\u4ef6\u7684\u6570\u636e\u4e86\u3002"),(0,r.kt)("h2",{id:"\u590d\u6742\u72b6\u6001\u7ba1\u7406\u7684\u89e3\u51b3\u65b9\u6848"},"\u590d\u6742\u72b6\u6001\u7ba1\u7406\u7684\u89e3\u51b3\u65b9\u6848"),(0,r.kt)("p",null,"\u524d\u9762\u4ecb\u7ecd\u4e86\u7ec4\u4ef6\u57fa\u672c\u7684\u901a\u4fe1\u65b9\u5f0f\uff0c\u5f53\u9879\u76ee\u7684\u4e1a\u52a1\u903b\u8f91\u6bd4\u8f83\u590d\u6742\u7684\u65f6\u5019\uff0c\u90a3\u4e48\u8fd9\u6837\u7684\u901a\u4fe1\u65b9\u6cd5\u5c31\u4e0d\u5408\u9002\u4e86\u3002\u6bd4\u5982\u73b0\u5728\u6709\u8fd9\u6837\u7684\u7ec4\u4ef6\u7ed3\u6784\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/2e8adc6ab1a243fa93cf6e313964a8d6.png",alt:"\u5728\u8fd9\u91cc\u63d2\u5165\u56fe\u7247\u63cf\u8ff0"})),(0,r.kt)("p",null,"\u73b0\u5728\u7ec4\u4ef6E\u548c\u7ec4\u4ef6F\u901a\u4fe1\uff0c\u6309\u7167\u4e4b\u524d\u7684\u65b9\u5f0f\uff0c\u5c31\u662f\u7ec4\u4ef6E\u628a\u72b6\u6001\u4f20\u7ed9\u7ec4\u4ef6B\uff0c\u7ec4\u4ef6B\u518d\u628a\u72b6\u6001\u4f20\u7ed9\u7ec4\u4ef6A\uff0cA\u518d\u4f20\u7ed9C\uff0c\u6700\u540eC\u4f20\u7ed9\u7ec4\u4ef6F\u3002\u8fd9\u6837\u7ec4\u4ef6\u5c42\u7ea7\u7ed3\u6784\u7b80\u5355\u7684\u8bdd\uff0c\u53ef\u4ee5\u8fd9\u6837\u505a\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u7ec4\u4ef6\u5c42\u7ea7\u7ed3\u6784\u8db3\u591f\u590d\u6742\u4e86\uff0c\u5c31\u9700\u8981\u5199\u5927\u91cf\u7684\u901a\u4fe1\u903b\u8f91\u4ee3\u7801\uff0c\u4f46\u662f\u6574\u4e2a\u901a\u4fe1\u8fc7\u7a0b\u4e2d\uff0c\u7ec4\u4ef6B\u3001A\u548cC\u4ec5\u4ec5\u662f\u627f\u62c5\u901a\u9053\u7684\u4f5c\u7528\u3002"),(0,r.kt)("p",null,"React\u63d0\u4f9b\u4e86\u4e00\u4e2a\u6bd4\u8f83\u9ad8\u7ea7\u7684\u6570\u636e\u7ba1\u7406\u65b9\u5f0f\u2014\u2014Context\u4e0a\u4e0b\u6587\uff0c\u4f46\u662fContext\u4e5f\u4f1a\u6709\u4e00\u4e9b\u95ee\u9898\u7684\uff0c\u6bd4\u5982Context\u7684\u4fee\u6539\u4e0d\u592a\u65b9\u4fbf\u3002"),(0,r.kt)("p",null,"  \u8fd8\u6709\u4e00\u4e2a\u65b9\u6cd5\u5c31\u662fRedux\uff0cRedux\u662fJavaScript\u72b6\u6001\u5bb9\u5668\uff0c\u63d0\u4f9b\u53ef\u9884\u6d4b\u7684\u72b6\u6001\u7ba1\u7406\u3002\n\u4e00\u4e2aRedux\u5e94\u7528\u4e2d\uff0c\u6240\u6709\u7684State\u90fd\u662f\u4ee5\u4e00\u4e2a\u5bf9\u8c61\u6811\u7684\u5f62\u5f0f\u5b58\u50a8\u5728\u552f\u4e00\u7684store\u4e2d\u3002"),(0,r.kt)("p",null,"\u6539\u53d8state\uff0c\u53ea\u80fd\u901a\u8fc7\u89e6\u53d1action\uff0caction\u662f\u4e00\u4e2a\u63cf\u8ff0\u53d1\u751f\u4ec0\u4e48\u4e8b\u7684\u5bf9\u8c61\uff0c\u4e3a\u4e86\u63cf\u8ff0action\u5982\u4f55\u6539\u53d8state\uff0c\u8fd8\u9700\u8981\u5199reducers\u3002"),(0,r.kt)("p",null,"\u73b0\u5728\u5148\u6765\u5b9a\u4e49\u4e00\u4e0bstore\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import {legacy_createStore,applyMiddleware,compose}  from 'redux';\nimport thunk from 'redux-thunk';\nimport { persistStore, persistReducer } from \"redux-persist\";\nimport storage from \"redux-persist/lib/storage\";\nimport reducers from './reducers';\nconst storageConfig = {\n  key: \"root\",\n  storage,\n};\nconst  middleware = [thunk];\n\nconst composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;\nconst configStore = persistReducer(storageConfig,reducers);\nexport let store = legacy_createStore(configStore,composeEnhancers(\n  applyMiddleware(...middleware)\n));\nexport let persistor = persistStore(store);\n")),(0,r.kt)("p",null,"\u8fd9\u91cc\u9762\u5305\u542b\u4e86\u6570\u636e\u6301\u4e45\u5316\u4fdd\u5b58\uff0c\u8fd9\u4e2a\u53ef\u4ee5\u4e0d\u7528\u7ba1\u3002\u901a\u8fc7createStore\u65b9\u6cd5\u6765\u521b\u5efastore\u7684\uff0c\u8fd9\u91cc\u56e0\u4e3a\u7248\u672c\u6bd4\u8f83\u65b0\uff0c\u7528\u7684\u662flegacy_createStore\u3002"),(0,r.kt)("p",null,"\u5728\u5e94\u7528\u7684\u5165\u53e3\u6587\u4ef6index.js\u6216\u8005\u662fapp.jsx\uff0c\u6211\u8fd9\u91cc\u662findex.jsx\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import ReactDOM from 'react-dom/client';\nimport './index.css';\nimport App from './App';\nimport reportWebVitals from './reportWebVitals';\nimport { Provider } from 'react-redux';\nimport { BrowserRouter } from \"react-router-dom\";\nimport { store, persistor } from \"./store\";\nconst { PersistGate } = require('redux-persist/integration/react')\nconst root = ReactDOM.createRoot(\n  document.getElementById('root') as HTMLElement\n);\nroot.render(\n  <Provider store={store}>\n    <PersistGate loading={null} persistor={persistor}>\n      <BrowserRouter>\n        <App />\n      </BrowserRouter>\n    </PersistGate>\n  </Provider>\n);\n// If you want to start measuring performance in your app, pass a function\n// to log results (for example: reportWebVitals(console.log))\n// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals\nreportWebVitals();\n\n")),(0,r.kt)("p",null,"\u4f7f\u7528reac-redux\u81ea\u5e26\u7684Provider \u7ec4\u4ef6\u6765\u5305\u88f9\u5e94\u7528\u7684\u9876\u7ea7\u7ec4\u4ef6\u3002"),(0,r.kt)("p",null,"reducer\u4ee3\u7801\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'import { combineReducers } from "redux";\nimport menuReducer from "./menu";\nconst reducers = combineReducers({\n    menus: menuReducer,\n});\n\nexport default reducers\n')),(0,r.kt)("p",null,"\u8fd9\u91cc\u4f7f\u7528\u4e86combineReducers\u51fd\u6570\u628a\u591a\u4e2areducer\u7ec4\u5408\u8d77\u6765\uff0c\u73b0\u5728\u53ea\u6709\u4e00\u4e2amenu\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const menuState = [\n    {\n        title: "\u7ec4\u4ef6",\n        key: "component",\n        router: null,\n        children: [\n            // { title: "\u8868\u683c", key: \'table\', router: "/components/table" },\n            { title: "React", key: \'react\', router: "/components/react" }\n        ]\n    },\n    {\n        title: "Echarts",\n        key: "1",\n        router: null,\n        children: [\n            { title: "dashboard", key: \'1-1\', router: "/components/dashboard", component: "Dashboard" },\n            { title: "\u67f1\u72b6\u56fe", key: \'1-2\', router: "/components/barEcharts", component: "Bar" },\n            { title: "\u6761\u5f62\u56fe", key: \'1-3\', router: "/components/rowBar", component: "RowBar" },\n            { title: "\u6247\u5f62\u56fe", key: \'1-4\', router: "/components/radialPolar", component: "RadialPolar" },\n            { title: "\u6570\u5b66\u51fd\u6570", key: \'1-5\', router: "/components/Sin", component: "Sin" },\n            { title: "\u6563\u70b9\u56fe", key: \'1-6\', router: "/components/ScatterChart", component: "ScatterChart" },\n        ]\n    },\n  \n    {\n        title: "\u53ef\u89c6\u5316",\n        key: "visualization",\n        router: null,\n        children: [\n            { title: "\u53ef\u89c6\u53161", key: \'visualization-1\', router: "/app1", component: "Modal" },\n        ]\n    },\n    \n];\nexport default function menuReducer(state = menuState, action: any) {\n    switch (action.type) {\n        case "UPDATE_CONFIG":\n            return {\n                config: action.value\n            };\n        default:\n            return state\n    }\n}\n')),(0,r.kt)("p",null,"\u5728Comm\u7ec4\u4ef6\u4e2d\u4ecestore\u4e2d\u8ba2\u9605\u5bf9\u5e94\u7684state\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const mapStateToProps = (state) => {\n    return { menus: state.menus }\n}\n\nconst mapDispatchToProps = (dispatch) => {\n    return {\n        changeMenu: () => dispatch({ type: 'UPDATE_CONFIG', value: [] })\n    }\n}\nexport default connect(mapStateToProps, mapDispatchToProps)(Comm);\n")),(0,r.kt)("p",null,"\u5728Comm\u7ec4\u4ef6\u7684componentDidMount\u751f\u547d\u5468\u671f\u51fd\u6570\u4e2d\u6253\u5370\u8ba2\u9605\u7684state\uff0c\u6548\u679c\u5982\u56fe\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/4ebb800c1e7540fa85259f87e3fe2560.png",alt:"\u5728\u8fd9\u91cc\u63d2\u5165\u56fe\u7247\u63cf\u8ff0"})),(0,r.kt)("p",null,"mapDispatchToProps\u65b9\u6cd5\u4e2d\uff0c\u5c06dispatch\u4f20\u5230\u7ec4\u4ef6\u4e2d\u5e76\u4e14\uff0c\u5728\u7ec4\u4ef6\u4e2d\u53ea\u8981\u89e6\u53d1\u5bf9\u5e94\u7684dispatch\uff0c\u5c31\u53ef\u4ee5\u4fee\u6539store\u7684state\u4e86\uff0cComm\u7ec4\u4ef6\u5b8c\u6574\u4ee3\u7801\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'import React from "react";\nimport { connect } from "react-redux";\nclass Comm extends React.Component {\n    constructor(props) {\n        super(props);\n    }\n    componentDidMount() {\n        console.log(\'componentDidMount\', this.props)\n    }\n\n    shouldComponentUpdate() {\n        console.log("shouldComponentUpdate")\n        return true\n    }\n    componentDidUpdate() {\n        console.log("componentDidUpdate")\n    }\n    componentWillUnmount() {\n        console.log("componentWillUnmount")\n    }\n    changeText = () => {\n        this.setState((state) => {\n            return {\n                data: state.data + 2\n            }\n        })\n        this.setState((state) => {\n            return {\n                data: state.data + 2\n            }\n        })\n        this.setState((state) => {\n            return {\n                data: state.data + 2\n            }\n        })\n        this.props.changeMenu()\n        console.log("this.props", this.props)\n    }\n    state = {\n        data: 9\n    }\n    render() {\n        return <React.Fragment>\n            <p>\u7236\u7ec4\u4ef6\uff1a{this.state.data}</p>\n            <Children data={this.state.data} changeText={this.changeText} />\n            <button onClick={this.changeText} >\u6309\u94ae</button>\n        </React.Fragment>\n    }\n}\n\nfunction Children({ data, changeText }) {\n    return <div>\n        <div>\u8fd9\u662f\u5b50\u7ec4\u4ef6\u7684:{data}\n            <button onClick={() => changeText()}>\u4fee\u6539</button>\n        </div>\n    </div>\n}\nconst mapStateToProps = (state) => {\n    return { menus: state.menus }\n}\n\nconst mapDispatchToProps = (dispatch) => {\n    return {\n        changeMenu: () => dispatch({ type: \'UPDATE_CONFIG\', value: [] })\n    }\n}\nexport default connect(mapStateToProps, mapDispatchToProps)(Comm);\n')),(0,r.kt)("p",null,"\u8fd9\u5c31\u662f\u7ec4\u4ef6\u7684\u6570\u636e\u6d41\u3002"))}u.isMDXComponent=!0}}]);