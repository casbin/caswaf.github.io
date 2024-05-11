"use strict";(self.webpackChunkcaswaf_website=self.webpackChunkcaswaf_website||[]).push([[523],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(n),u=o,f=m["".concat(c,".").concat(u)]||m[u]||d[u]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[m]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2479:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const a={title:"Core Concepts",description:"Core concepts of CasWAF",keywords:["caswaf"],authors:["casbin"]},i=void 0,s={unversionedId:"core-concepts",id:"core-concepts",title:"Core Concepts",description:"Core concepts of CasWAF",source:"@site/docs/core-concepts.mdx",sourceDirName:".",slug:"/core-concepts",permalink:"/zh/docs/core-concepts",draft:!1,editUrl:"https://github.com/casbin/caswaf-website/edit/master/docs/core-concepts.mdx",tags:[],version:"current",frontMatter:{title:"Core Concepts",description:"Core concepts of CasWAF",keywords:["caswaf"],authors:["casbin"]},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/zh/docs/overview"},next:{title:"Installation",permalink:"/zh/docs/installation"}},c={},l=[{value:"Site",id:"site",level:2},{value:"Cert",id:"cert",level:2}],p={toc:l},m="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(m,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"As CasWAF's administrator, you should get familiar with at least 2 core concepts: ",(0,o.kt)("inlineCode",{parentName:"p"},"Site"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Cert"),"."),(0,o.kt)("h2",{id:"site"},"Site"),(0,o.kt)("p",null,"In CasWAF, ",(0,o.kt)("inlineCode",{parentName:"p"},"Site")," is representing the real applications or websites you wish to protect. Each Site is associated with specific domain names or IP addresses, and you can configure multiple Sites according to different needs to ensure comprehensive security protection for all your applications."),(0,o.kt)("p",null,"The Site class definition is shown as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'type Site struct {\n    Owner       string `xorm:"varchar(100) notnull pk" json:"owner"`\n    Name        string `xorm:"varchar(100) notnull pk" json:"name"`\n    CreatedTime string `xorm:"varchar(100)" json:"createdTime"`\n    UpdatedTime string `xorm:"varchar(100)" json:"updatedTime"`\n    DisplayName string `xorm:"varchar(100)" json:"displayName"`\n\n    Tag          string     `xorm:"varchar(100)" json:"tag"`\n    Domain       string     `xorm:"varchar(100)" json:"domain"`\n    OtherDomains []string   `xorm:"varchar(500)" json:"otherDomains"`\n    NeedRedirect bool       `json:"needRedirect"`\n    EnableWaf    bool       `json:"enableWaf"`\n    Waf          coraza.WAF `xorm:"-" json:"-"`\n    Challenges   []string   `xorm:"mediumtext" json:"challenges"`\n    Host         string     `xorm:"varchar(100)" json:"host"`\n    Port         int        `json:"port"`\n    SslMode      string     `xorm:"varchar(100)" json:"sslMode"`\n    SslCert      string     `xorm:"-" json:"sslCert"`\n    PublicIp     string     `xorm:"varchar(100)" json:"publicIp"`\n    Node         string     `xorm:"varchar(100)" json:"node"`\n    IsSelf       bool       `json:"isSelf"`\n    Status       string     `xorm:"varchar(100)" json:"status"`\n    Nodes        []*Node    `xorm:"mediumtext" json:"nodes"`\n\n    CasdoorApplication string                  `xorm:"varchar(100)" json:"casdoorApplication"`\n    ApplicationObj     *casdoorsdk.Application `xorm:"-" json:"applicationObj"`\n}\n')),(0,o.kt)("h2",{id:"cert"},"Cert"),(0,o.kt)("p",null,"In CasWAF, ",(0,o.kt)("inlineCode",{parentName:"p"},"Cert")," is representing the certificates used for HTTPS authentication. By configuring Cert, CasWAF can establish secure encrypted connections between itself and the clients, ensuring the confidentiality and integrity of data and preventing information leakage and tampering attacks."),(0,o.kt)("p",null,"The Cert class definition is shown as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'type Cert struct {\n    Owner       string `xorm:"varchar(100) notnull pk" json:"owner"`\n    Name        string `xorm:"varchar(100) notnull pk" json:"name"`\n    CreatedTime string `xorm:"varchar(100)" json:"createdTime"`\n    DisplayName string `xorm:"varchar(100)" json:"displayName"`\n\n    Type            string `xorm:"varchar(100)" json:"type"`\n    CryptoAlgorithm string `xorm:"varchar(100)" json:"cryptoAlgorithm"`\n    ExpireTime      string `xorm:"varchar(100)" json:"expireTime"`\n\n    Certificate string `xorm:"mediumtext" json:"certificate"`\n    PrivateKey  string `xorm:"mediumtext" json:"privateKey"`\n}\n')))}d.isMDXComponent=!0}}]);