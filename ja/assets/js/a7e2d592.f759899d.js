"use strict";(self.webpackChunkcaswaf_website=self.webpackChunkcaswaf_website||[]).push([[523],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(r),d=o,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||a;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[m]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2479:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=r(7462),o=(r(7294),r(3905));const a={title:"Core Concepts",description:"Core concepts of CasWAF",keywords:["caswaf"],authors:["casbin"]},i=void 0,s={unversionedId:"core-concepts",id:"core-concepts",title:"Core Concepts",description:"Core concepts of CasWAF",source:"@site/docs/core-concepts.mdx",sourceDirName:".",slug:"/core-concepts",permalink:"/ja/docs/core-concepts",draft:!1,editUrl:"https://crowdin.com/project/caswaf-website/ja",tags:[],version:"current",frontMatter:{title:"Core Concepts",description:"Core concepts of CasWAF",keywords:["caswaf"],authors:["casbin"]},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/ja/docs/overview"},next:{title:"Installation",permalink:"/ja/docs/installation"}},c={},l=[{value:"Site",id:"site",level:2},{value:"Cert",id:"cert",level:2}],p={toc:l},m="wrapper";function u(e){let{components:t,...r}=e;return(0,o.kt)(m,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"As CasWAF's administrator, you should get familiar with at least 2 core concepts: ",(0,o.kt)("inlineCode",{parentName:"p"},"Site"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Cert"),"."),(0,o.kt)("h2",{id:"site"},"Site"),(0,o.kt)("p",null,"In CasWAF, ",(0,o.kt)("inlineCode",{parentName:"p"},"Site")," is representing the real applications or websites you wish to protect. Each Site is associated with specific domain names or IP addresses, and you can configure multiple Sites according to different needs to ensure comprehensive security protection for all your applications."),(0,o.kt)("p",null,"The Site class definition is shown as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'type Site struct {\n    Owner       string `xorm:"varchar(100) notnull pk" json:"owner"`\n    Name        string `xorm:"varchar(100) notnull pk" json:"name"`\n    CreatedTime string `xorm:"varchar(100)" json:"createdTime"`\n    DisplayName string `xorm:"varchar(100)" json:"displayName"`\n\n    Domain   string `xorm:"varchar(100)" json:"domain"`\n    Host     string `xorm:"varchar(100)" json:"host"`\n    SslMode  string `xorm:"varchar(100)" json:"sslMode"`\n    SslCert  string `xorm:"varchar(100)" json:"sslCert"`\n    PublicIp string `xorm:"varchar(100)" json:"publicIp"`\n    Node     string `xorm:"varchar(100)" json:"node"`\n    IsSelf   bool   `json:"isSelf"`\n\n    CasdoorApplication string `xorm:"varchar(100)" json:"casdoorApplication"`\n\n    SslCertObj     *Cert                `xorm:"-" json:"sslCertObj"`\n    ApplicationObj *casdoor.Application `xorm:"-" json:"applicationObj"`\n}\n')),(0,o.kt)("h2",{id:"cert"},"Cert"),(0,o.kt)("p",null,"In CasWAF, ",(0,o.kt)("inlineCode",{parentName:"p"},"Cert")," is representing the certificates used for HTTPS authentication. By configuring Cert, CasWAF can establish secure encrypted connections between itself and the clients, ensuring the confidentiality and integrity of data and preventing information leakage and tampering attacks."),(0,o.kt)("p",null,"The Cert class definition is shown as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'type Cert struct {\n    Owner       string `xorm:"varchar(100) notnull pk" json:"owner"`\n    Name        string `xorm:"varchar(100) notnull pk" json:"name"`\n    CreatedTime string `xorm:"varchar(100)" json:"createdTime"`\n    DisplayName string `xorm:"varchar(100)" json:"displayName"`\n\n    Type            string `xorm:"varchar(100)" json:"type"`\n    CryptoAlgorithm string `xorm:"varchar(100)" json:"cryptoAlgorithm"`\n    ExpireTime      string `xorm:"varchar(100)" json:"expireTime"`\n\n    Certificate string `xorm:"mediumtext" json:"certificate"`\n    PrivateKey  string `xorm:"mediumtext" json:"privateKey"`\n}\n')))}u.isMDXComponent=!0}}]);