"use strict";(self.webpackChunkcaswaf_website=self.webpackChunkcaswaf_website||[]).push([[579],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(r),d=o,m=u["".concat(l,".").concat(d)]||u[d]||f[d]||i;return r?n.createElement(m,a(a({ref:t},c),{},{components:r})):n.createElement(m,a({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4277:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>f,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=r(7462),o=(r(7294),r(3905));const i={title:"IP Rule",description:"Learn how to config IP rules in CasWAF.",keywords:["caswaf"],authors:["casbin"]},a=void 0,s={unversionedId:"ip-rule",id:"ip-rule",title:"IP Rule",description:"Learn how to config IP rules in CasWAF.",source:"@site/docs/ip-rule.mdx",sourceDirName:".",slug:"/ip-rule",permalink:"/ko/docs/ip-rule",draft:!1,editUrl:"https://github.com/casbin/caswaf-website/edit/master/docs/ip-rule.mdx",tags:[],version:"current",frontMatter:{title:"IP Rule",description:"Learn how to config IP rules in CasWAF.",keywords:["caswaf"],authors:["casbin"]},sidebar:"tutorialSidebar",previous:{title:"Rule List",permalink:"/ko/docs/rule"},next:{title:"User-Agent Rule",permalink:"/ko/docs/ua-rule"}},l={},p=[{value:"IP Expression properties",id:"ip-expression-properties",level:2}],c={toc:p},u="wrapper";function f(e){let{components:t,...i}=e;return(0,o.kt)(u,(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"CasWAF provides a powerful IP rule feature to help you control the access of your website. You can add IP rules to allow or block specific IP addresses or IP ranges (CIDR only)."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"ip-rule",src:r(9831).Z,width:"2560",height:"687"})),(0,o.kt)("h2",{id:"ip-expression-properties"},"IP Expression properties"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Name"),": The name of the expression. It is used to identify the rule and have no effect on the rule itself."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Operator"),": The operator of the expression. It can be set to ",(0,o.kt)("inlineCode",{parentName:"li"},"is in")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"is not in"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Value"),": The value of the expression. It can be set to IPv4 or IPv6 addresses or CIDR ranges (even mixed).")))}f.isMDXComponent=!0},9831:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/ip-rule-2a391be8d51a9ff0be9d8bcbe28588f1.jpg"}}]);