"use strict";(self.webpackChunkcaswaf_website=self.webpackChunkcaswaf_website||[]).push([[698],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(r),f=a,m=p["".concat(l,".").concat(f)]||p[f]||d[f]||o;return r?n.createElement(m,i(i({ref:t},c),{},{components:r})):n.createElement(m,i({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},1482:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const o={title:"User-Agent Rule",description:"Learn how to config User-Agent rules in CasWAF.",keywords:["caswaf"],authors:["casbin"]},i=void 0,s={unversionedId:"ua-rule",id:"ua-rule",title:"User-Agent Rule",description:"Learn how to config User-Agent rules in CasWAF.",source:"@site/docs/ua-rule.mdx",sourceDirName:".",slug:"/ua-rule",permalink:"/docs/ua-rule",draft:!1,editUrl:"https://github.com/casbin/caswaf-website/edit/master/docs/ua-rule.mdx",tags:[],version:"current",frontMatter:{title:"User-Agent Rule",description:"Learn how to config User-Agent rules in CasWAF.",keywords:["caswaf"],authors:["casbin"]},sidebar:"tutorialSidebar",previous:{title:"IP Rule",permalink:"/docs/ip-rule"},next:{title:"WAF Rule",permalink:"/docs/waf-rule"}},l={},u=[{value:"User-Agent Expression properties",id:"user-agent-expression-properties",level:2}],c={toc:u},p="wrapper";function d(e){let{components:t,...o}=e;return(0,a.kt)(p,(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"CasWAF provides a User-Agent rule feature to help you control the access of your website. You can add User-Agent rules to allow or block specific User-Agents."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"ua-rule",src:r(1240).Z,width:"2560",height:"632"})),(0,a.kt)("h2",{id:"user-agent-expression-properties"},"User-Agent Expression properties"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Name"),": The name of the expression. It is used to identify the rule and have no effect on the rule itself."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Operator"),": The operator of the expression. It can be set to ",(0,a.kt)("inlineCode",{parentName:"li"},"equals"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"does not equals"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"contains"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"does not contain")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"regex match"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Value"),": The value of the expression. It can be set to any string. The default value is your current User-Agent. If you are using ",(0,a.kt)("inlineCode",{parentName:"li"},"regex match"),", the value should be a regular expression.")))}d.isMDXComponent=!0},1240:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/ua-rule-f3ada5d6b81b0daa6c4d315663002ef2.jpg"}}]);