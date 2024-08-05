"use strict";(self.webpackChunkcaswaf_website=self.webpackChunkcaswaf_website||[]).push([[171],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=p(r),f=a,m=c["".concat(u,".").concat(f)]||c[f]||d[f]||o;return r?n.createElement(m,l(l({ref:t},s),{},{components:r})):n.createElement(m,l({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=f;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[c]="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},9878:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const o={title:"WAF Rule",description:"Learn how to config WAF rules in CasWAF.",keywords:["caswaf"],authors:["casbin"]},l=void 0,i={unversionedId:"waf-rule",id:"waf-rule",title:"WAF Rule",description:"Learn how to config WAF rules in CasWAF.",source:"@site/docs/waf-rule.mdx",sourceDirName:".",slug:"/waf-rule",permalink:"/zh/docs/waf-rule",draft:!1,editUrl:"https://github.com/casbin/caswaf-website/edit/master/docs/waf-rule.mdx",tags:[],version:"current",frontMatter:{title:"WAF Rule",description:"Learn how to config WAF rules in CasWAF.",keywords:["caswaf"],authors:["casbin"]},sidebar:"tutorialSidebar",previous:{title:"User-Agent Rule",permalink:"/zh/docs/ua-rule"}},u={},p=[{value:"WAF Expression properties",id:"waf-expression-properties",level:2},{value:"Supported disruptive actions",id:"supported-disruptive-actions",level:2}],s={toc:p},c="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(c,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"CasWAF use coraza WAF as the WAF engine, you can follow the ",(0,a.kt)("a",{parentName:"p",href:"https://coraza.io/docs/seclang/"},"coraza seclang documents")," to write your WAF rules."),(0,a.kt)("h2",{id:"waf-expression-properties"},"WAF Expression properties"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Value"),": The value of the rule. It should be a valid coraza WAF rule.")),(0,a.kt)("h2",{id:"supported-disruptive-actions"},"Supported disruptive actions"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Seclang action"),(0,a.kt)("th",{parentName:"tr",align:null},"CasWAF action"),(0,a.kt)("th",{parentName:"tr",align:null},"Status code"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"allow"),(0,a.kt)("td",{parentName:"tr",align:null},"Allow"),(0,a.kt)("td",{parentName:"tr",align:null},"200")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"block"),(0,a.kt)("td",{parentName:"tr",align:null},"Block"),(0,a.kt)("td",{parentName:"tr",align:null},"403")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"deny"),(0,a.kt)("td",{parentName:"tr",align:null},"Deny"),(0,a.kt)("td",{parentName:"tr",align:null},"403")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"drop"),(0,a.kt)("td",{parentName:"tr",align:null},"Drop"),(0,a.kt)("td",{parentName:"tr",align:null},"400")))),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"We recommend that you have a good understanding of the coraza WAF rules before you write your own rules.")))}d.isMDXComponent=!0}}]);