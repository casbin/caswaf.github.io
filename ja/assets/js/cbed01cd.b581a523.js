"use strict";(self.webpackChunkcaswaf_website=self.webpackChunkcaswaf_website||[]).push([[674],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var a=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,i=function(e,t){if(null==e)return{};var r,a,i={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=a.createContext({}),s=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,i=e.mdxType,n=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(r),f=i,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||n;return r?a.createElement(m,o(o({ref:t},p),{},{components:r})):a.createElement(m,o({ref:t},p))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=r.length,o=new Array(n);o[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[d]="string"==typeof e?e:i,o[1]=c;for(var s=2;s<n;s++)o[s]=r[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},7494:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>n,metadata:()=>c,toc:()=>s});var a=r(7462),i=(r(7294),r(3905));const n={title:"Cert List",description:"Learn how to add your server's certificates in CasWAF.",keywords:["caswaf"],authors:["casbin"]},o=void 0,c={unversionedId:"cert",id:"cert",title:"Cert List",description:"Learn how to add your server's certificates in CasWAF.",source:"@site/docs/cert.mdx",sourceDirName:".",slug:"/cert",permalink:"/ja/docs/cert",draft:!1,editUrl:"https://crowdin.com/project/caswaf-website/ja",tags:[],version:"current",frontMatter:{title:"Cert List",description:"Learn how to add your server's certificates in CasWAF.",keywords:["caswaf"],authors:["casbin"]},sidebar:"tutorialSidebar",previous:{title:"Certs",permalink:"/ja/docs/category/certs"}},l={},s=[{value:"Cert properties",id:"cert-properties",level:2},{value:"Manage Certificates",id:"manage-certificates",level:2},{value:"Add a cert",id:"add-a-cert",level:2},{value:"Edit cert",id:"edit-cert",level:2}],p={toc:s},d="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"If your website supports HTTPS access, you need to configure an SSL certificate in CasWAF to enable it to establish a secure connection with your server as a reverse proxy."),(0,i.kt)("p",null,"This section will provide a detailed explanation of the properties and usage of ",(0,i.kt)("inlineCode",{parentName:"p"},"Cert"),"."),(0,i.kt)("h2",{id:"cert-properties"},"Cert properties"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Name"),": The name of the certificate."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Display name"),": The display name of the certificate."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Type"),": The type of the certificate. This field is usually set to ",(0,i.kt)("inlineCode",{parentName:"li"},"SSL")," since SSL is the most commonly used option."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Crypto algorithm"),": The crypto algorithm of the certificate. It can be set to ",(0,i.kt)("inlineCode",{parentName:"li"},"RSA")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"ECC")," which is depend on algorithm your certificate used."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Expire time"),": The expire time of the certificate. This field will be automatically filled in when you set certificate and private key."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Certificate"),": The certificate content.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The certificate is a public key that has been authenticated by a Certificate Authority (CA)."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Private key"),": The private key content.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The private key is a secret key that is used to encrypt and decrypt data.")))),(0,i.kt)("h2",{id:"manage-certificates"},"Manage Certificates"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"certs",src:r(5615).Z,width:"3016",height:"700"})),(0,i.kt)("p",null,"In the Certs page, you will see all certs you have created. You can create, edit, delete and view the cert details. But now we don't have any certs."),(0,i.kt)("h2",{id:"add-a-cert"},"Add a cert"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"addcert",src:r(4778).Z,width:"3018",height:"596"})),(0,i.kt)("p",null,"Just click the ",(0,i.kt)("inlineCode",{parentName:"p"},"Add")," button, you will create a cert. The created cert will have some default information that you can modify."),(0,i.kt)("h2",{id:"edit-cert"},"Edit cert"),(0,i.kt)("p",null,"After you create a site, you can click the ",(0,i.kt)("inlineCode",{parentName:"p"},"edit")," button to edit the site."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"editcert",src:r(9193).Z,width:"3024",height:"1422"})),(0,i.kt)("p",null,"Each field's meaning is as described above, and you can freely modify them according to the actual situation of your website."),(0,i.kt)("p",null,"After you have completed the modifications, you only need to click the ",(0,i.kt)("inlineCode",{parentName:"p"},"Save")," button to save your settings."))}u.isMDXComponent=!0},4778:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/addcert-4bfc82aff50fef236d99dcac9b7d36ad.png"},5615:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/certs-a41bb4cef7f4cb1563ca46f0a48aedec.png"},9193:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/editcert-bbc01a66f9b162f535d0165eb2ec4767.png"}}]);