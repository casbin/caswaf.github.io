"use strict";(self.webpackChunkcaswaf_website=self.webpackChunkcaswaf_website||[]).push([[81],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),p=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(r),h=n,m=u["".concat(l,".").concat(h)]||u[h]||d[h]||o;return r?a.createElement(m,i(i({ref:t},c),{},{components:r})):a.createElement(m,i({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:n,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},4826:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=r(7462),n=(r(7294),r(3905));const o={title:"Overview",description:"CasWAF Overview",keywords:["caswaf"],authors:["casbin"]},i=void 0,s={unversionedId:"overview",id:"overview",title:"Overview",description:"CasWAF Overview",source:"@site/docs/overview.mdx",sourceDirName:".",slug:"/overview",permalink:"/ko/docs/overview",draft:!1,editUrl:"https://github.com/casbin/caswaf-website/edit/master/docs/overview.mdx",tags:[],version:"current",frontMatter:{title:"Overview",description:"CasWAF Overview",keywords:["caswaf"],authors:["casbin"]},sidebar:"tutorialSidebar",previous:{title:"The Basics",permalink:"/ko/docs/category/the-basics"},next:{title:"Core Concepts",permalink:"/ko/docs/core-concepts"}},l={},p=[{value:"CasWAF features",id:"caswaf-features",level:2},{value:"How it works",id:"how-it-works",level:2},{value:"Reverse proxy",id:"reverse-proxy",level:3},{value:"OAuth proxy",id:"oauth-proxy",level:3},{value:"Online Demo",id:"online-demo",level:2},{value:"Architecture",id:"architecture",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"CasWAF is an open-source Web Application Firewall (WAF) software developed by Go and React."),(0,n.kt)("h2",{id:"caswaf-features"},"CasWAF features"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Front-end and back-end separate architecture, developed by Golang, CasWAF provides web-based managing UI and supports multiple languages(Chinese, English).")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Databases. CasWAF supports mainstream databases: MySQL, PostgreSQL, SQL Server, etc.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Casdoor SSO. CasWAF uses ",(0,n.kt)("a",{parentName:"p",href:"https://casdoor.org/"},"Casdoor")," as the Identity Provider (IdP) for OAuth login.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Reverse proxy. CasWAF supports reverse proxy, which can be used as a reverse proxy server to protect the backend server.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"OAuth proxy. CasWAF supports OAuth login, which can be integrated with the existing OAuth system such as ",(0,n.kt)("a",{parentName:"p",href:"https://casdoor.org/"},"Casdoor"),"."))),(0,n.kt)("h2",{id:"how-it-works"},"How it works"),(0,n.kt)("p",null,"CasWAF has both reverse proxy and OAuth proxy functionalities. If you haven't configured OAuth for your website, it will function solely as a reverse proxy server."),(0,n.kt)("h3",{id:"reverse-proxy"},"Reverse proxy"),(0,n.kt)("p",null,"CasWAF appears externally as a reverse proxy server, providing an additional layer of security for your web servers and applications."),(0,n.kt)("p",null,"It sits between the users and web servers, acting as an intermediary, receiving requests from users, and forwarding them to the target web servers."),(0,n.kt)("h3",{id:"oauth-proxy"},"OAuth proxy"),(0,n.kt)("p",null,"CasWAF OAuth proxy acts as an Identity Provider (IdP) and collaborates with your application to perform authentication and authorization through the OAuth protocol."),(0,n.kt)("p",null,"When a user attempts to access a resource that requires authentication, CasWAF will redirect the user to the real Identity Provider (IdP)."),(0,n.kt)("p",null,"Subsequently, the OAuth proxy will guide the user to the configured Identity Provider (e.g., Google, Facebook, or an internal authentication service within the company) for authentication."),(0,n.kt)("p",null,"In CasWAF, we use ",(0,n.kt)("a",{parentName:"p",href:"https://casdoor.org/"},"Casdoor")," as the Identity Provider (IdP). More information of Casdoor SSO can be found ",(0,n.kt)("a",{parentName:"p",href:"/docs/casdoor-sso"},"here"),"."),(0,n.kt)("h2",{id:"online-demo"},"Online Demo"),(0,n.kt)("p",null,"Here is an online demo:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Deployed site: ",(0,n.kt)("a",{parentName:"li",href:"https://waf.casbin.com/"},"https://waf.casbin.com/"))),(0,n.kt)("p",null,"Global admin login:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Username: ",(0,n.kt)("inlineCode",{parentName:"li"},"admin")),(0,n.kt)("li",{parentName:"ul"},"Password: ",(0,n.kt)("inlineCode",{parentName:"li"},"123"))),(0,n.kt)("h2",{id:"architecture"},"Architecture"),(0,n.kt)("p",null,"Caswaf contains 2 parts:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Language"),(0,n.kt)("th",{parentName:"tr",align:null},"Source code"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Frontend"),(0,n.kt)("td",{parentName:"tr",align:null},"Web frontend UI for CasWAF"),(0,n.kt)("td",{parentName:"tr",align:null},"Javascript + React"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/casbin/caswaf/tree/master/web"},"https://github.com/casbin/caswaf/tree/master/web"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Backend"),(0,n.kt)("td",{parentName:"tr",align:null},"RESTful API backend for CAsWAF"),(0,n.kt)("td",{parentName:"tr",align:null},"Golang + Beego + MySQL"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/casbin/caswaf"},"https://github.com/casbin/caswaf"))))))}d.isMDXComponent=!0}}]);