"use strict";(self.webpackChunkcaswaf_website=self.webpackChunkcaswaf_website||[]).push([[752],{3905:(e,t,i)=>{i.d(t,{Zo:()=>p,kt:()=>h});var a=i(7294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,a,n=function(e,t){if(null==e)return{};var i,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)i=r[a],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)i=r[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var i=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(i),m=n,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||r;return i?a.createElement(h,o(o({ref:t},p),{},{components:i})):a.createElement(h,o({ref:t},p))}));function h(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=i.length,o=new Array(r);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:n,o[1]=s;for(var c=2;c<r;c++)o[c]=i[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,i)}m.displayName="MDXCreateElement"},8639:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=i(7462),n=(i(7294),i(3905));const r={title:"Site List",description:"Learn how to configure your site in CasWAF.",keywords:["caswaf"],authors:["casbin"]},o=void 0,s={unversionedId:"site",id:"site",title:"Site List",description:"Learn how to configure your site in CasWAF.",source:"@site/docs/site.mdx",sourceDirName:".",slug:"/site",permalink:"/zh/docs/site",draft:!1,editUrl:"https://github.com/casbin/caswaf-website/edit/master/docs/site.mdx",tags:[],version:"current",frontMatter:{title:"Site List",description:"Learn how to configure your site in CasWAF.",keywords:["caswaf"],authors:["casbin"]},sidebar:"tutorialSidebar",previous:{title:"Sites",permalink:"/zh/docs/category/sites"},next:{title:"Certs",permalink:"/zh/docs/category/certs"}},l={},c=[{value:"Site properties",id:"site-properties",level:2},{value:"Usage",id:"usage",level:2},{value:"Manage sites",id:"manage-sites",level:3},{value:"Add a site",id:"add-a-site",level:3},{value:"Edit site",id:"edit-site",level:3}],p={toc:c},d="wrapper";function u(e){let{components:t,...r}=e;return(0,n.kt)(d,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Site")," is representing the real applications or websites you wish to protect."),(0,n.kt)("p",null,"This section will provide a detailed explanation of the properties and usage of ",(0,n.kt)("inlineCode",{parentName:"p"},"Site"),"."),(0,n.kt)("h2",{id:"site-properties"},"Site properties"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Name"),": The name of the site."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"DisplayName"),": The display name of the site."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Domain"),": The domain of the site.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"e.g. ",(0,n.kt)("inlineCode",{parentName:"li"},"blog.example.com")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Host"),": The host of the site.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"e.g. ",(0,n.kt)("inlineCode",{parentName:"li"},"localhost:8080")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Public IP (Optional)"),": The public IP of the site (if available)."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Node (Optional)"),": The name of the host on which the site is deployed."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"SSL mode"),": The SSL mode of the site. It can be ",(0,n.kt)("inlineCode",{parentName:"li"},"HTTP")," or ",(0,n.kt)("inlineCode",{parentName:"li"},"HTTPS and HTTP")," or ",(0,n.kt)("inlineCode",{parentName:"li"},"HTTPS Only"),".",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"HTTP"),": The site is not using SSL. Users can access the site ",(0,n.kt)("strong",{parentName:"li"},"only")," via HTTP."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"HTTPS and HTTP"),": The site is using SSL and HTTP. Users can access the site via ",(0,n.kt)("strong",{parentName:"li"},"both")," HTTP and HTTPS."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"HTTPS Only"),": The site is using SSL only. Users can access the site ",(0,n.kt)("strong",{parentName:"li"},"only")," via HTTPS. If users access the site via HTTP, they will be redirected to HTTPS."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"SSL cert"),": The SSL certificate of the site. User can select the SSL certificate from the dropdown list.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"About how to add SSL certificate, please refer to ",(0,n.kt)("a",{parentName:"li",href:"/docs/cert"},"SSL Certificates"),"."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Casdoor app"),": If yor site need OAuth login, you can select the Casdoor app from the dropdown list.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"CasWAF uses Casdoor as the OAuth server. So you need to register your site as a Casdoor app first."),(0,n.kt)("li",{parentName:"ul"},"About how to add Casdoor app, please refer to ",(0,n.kt)("a",{parentName:"li",href:"/docs/casdoor-sso"},"Casdoor SSO"),".")))),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("h3",{id:"manage-sites"},"Manage sites"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"overview",src:i(4309).Z,width:"3024",height:"826"})),(0,n.kt)("p",null,"In the Sites page, you will see all sites you have created. You can create, edit, delete and view the site details. But now we don't have any sites."),(0,n.kt)("h3",{id:"add-a-site"},"Add a site"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"add",src:i(8740).Z,width:"3024",height:"538"})),(0,n.kt)("p",null,"Just click the ",(0,n.kt)("inlineCode",{parentName:"p"},"Add")," button, you will create a site. The created Site will have some default information that you can modify."),(0,n.kt)("h3",{id:"edit-site"},"Edit site"),(0,n.kt)("p",null,"After you create a site, you can click the ",(0,n.kt)("inlineCode",{parentName:"p"},"edit")," button to edit the site."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"edit",src:i(9285).Z,width:"3024",height:"1202"})),(0,n.kt)("p",null,"Each field's meaning is as described above, and you can freely modify them according to the actual situation of your website."),(0,n.kt)("p",null,"After you have completed the modifications, you only need to click the ",(0,n.kt)("inlineCode",{parentName:"p"},"Save")," button to save your settings."))}u.isMDXComponent=!0},8740:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/addsite-cbba40d8cac9ee1d0ecad17f9a624213.png"},9285:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/editsite-3e2834ec2f5220aa9c370d1ec0791c03.png"},4309:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/sites-aa8cc188f302cd44c061d62656d85f11.png"}}]);