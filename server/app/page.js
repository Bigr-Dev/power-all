(()=>{var e={};e.id=974,e.ids=[974],e.modules={8303:e=>{function A(e){var A=Error("Cannot find module '"+e+"'");throw A.code="MODULE_NOT_FOUND",A}A.keys=()=>[],A.resolve=A,A.id=8303,e.exports=A},846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},9121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},9294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},3033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},9428:e=>{"use strict";e.exports=require("buffer")},5511:e=>{"use strict";e.exports=require("crypto")},4735:e=>{"use strict";e.exports=require("events")},1645:e=>{"use strict";e.exports=require("net")},3873:e=>{"use strict";e.exports=require("path")},9771:e=>{"use strict";e.exports=require("process")},7910:e=>{"use strict";e.exports=require("stream")},1204:e=>{"use strict";e.exports=require("string_decoder")},6136:e=>{"use strict";e.exports=require("timers")},4631:e=>{"use strict";e.exports=require("tls")},9551:e=>{"use strict";e.exports=require("url")},8354:e=>{"use strict";e.exports=require("util")},4075:e=>{"use strict";e.exports=require("zlib")},3639:(e,A,t)=>{"use strict";t.r(A),t.d(A,{GlobalError:()=>a.a,__next_app__:()=>d,pages:()=>c,routeModule:()=>h,tree:()=>l});var s=t(260),r=t(8203),i=t(5155),a=t.n(i),n=t(7292),o={};for(let e in n)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>n[e]);t.d(A,o);let l=["",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,2708)),"C:\\Users\\RENDANI\\Documents\\Development\\generators\\Nextjs\\bigr-energy\\src\\app\\page.jsx"],metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,440))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(t.bind(t,8180)),"C:\\Users\\RENDANI\\Documents\\Development\\generators\\Nextjs\\bigr-energy\\src\\app\\layout.jsx"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,9937,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,440))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["C:\\Users\\RENDANI\\Documents\\Development\\generators\\Nextjs\\bigr-energy\\src\\app\\page.jsx"],d={require:t,loadChunk:()=>Promise.resolve()},h=new s.AppPageRouteModule({definition:{kind:r.RouteKind.APP_PAGE,page:"/page",pathname:"/",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:l}})},3685:(e,A,t)=>{Promise.resolve().then(t.t.bind(t,3219,23)),Promise.resolve().then(t.t.bind(t,4863,23)),Promise.resolve().then(t.t.bind(t,5155,23)),Promise.resolve().then(t.t.bind(t,9350,23)),Promise.resolve().then(t.t.bind(t,6313,23)),Promise.resolve().then(t.t.bind(t,8530,23)),Promise.resolve().then(t.t.bind(t,8921,23))},6837:(e,A,t)=>{Promise.resolve().then(t.t.bind(t,6959,23)),Promise.resolve().then(t.t.bind(t,3875,23)),Promise.resolve().then(t.t.bind(t,8903,23)),Promise.resolve().then(t.t.bind(t,4178,23)),Promise.resolve().then(t.t.bind(t,6013,23)),Promise.resolve().then(t.t.bind(t,7190,23)),Promise.resolve().then(t.t.bind(t,1365,23))},394:(e,A,t)=>{Promise.resolve().then(t.t.bind(t,1066,23)),Promise.resolve().then(t.t.bind(t,5197,23)),Promise.resolve().then(t.bind(t,5159)),Promise.resolve().then(t.bind(t,3557)),Promise.resolve().then(t.bind(t,1186)),Promise.resolve().then(t.bind(t,5401)),Promise.resolve().then(t.bind(t,2676))},3442:(e,A,t)=>{Promise.resolve().then(t.t.bind(t,1902,23)),Promise.resolve().then(t.t.bind(t,7801,23)),Promise.resolve().then(t.bind(t,4479)),Promise.resolve().then(t.bind(t,5413)),Promise.resolve().then(t.bind(t,9338)),Promise.resolve().then(t.bind(t,553)),Promise.resolve().then(t.bind(t,9476))},3615:(e,A,t)=>{Promise.resolve().then(t.bind(t,9516))},1863:(e,A,t)=>{Promise.resolve().then(t.bind(t,2392))},2392:(e,A,t)=>{"use strict";t.d(A,{default:()=>l});var s=t(5512),r=t(7137),i=t(8260),a=t(7908),n=t(6008),o=t(9334);let l=()=>{let e=(0,o.usePathname)();return(0,s.jsx)("div",{className:"/"===e?"container mx-auto px-1 sticky":"  px-6 sticky",children:(0,s.jsxs)("div",{className:"flex justify-between items-center h-16",children:[(0,s.jsx)(n.default,{href:"/",className:" hover:text-yellow-500  transition",children:(0,s.jsxs)("div",{className:"flex items-center space-x-2",children:["/"!==e?(0,s.jsx)(r.A,{className:"h-5 w-5 text-yellow-500"}):(0,s.jsx)(i.A,{className:"h-8 w-8 text-yellow-500 "}),(0,s.jsx)("span",{className:"text-1xl font-bold",children:"/"===e?"Power All":"Home"})]})}),(0,s.jsx)("nav",{className:"hidden md:flex space-x-8",children:[{id:"1",name:"Solar"},{id:"2",name:"Generators"},{id:"3",name:"Fabrication"}].map(A=>{let t=e.startsWith(`/services/${A.id}`);return(0,s.jsx)(n.default,{href:`/services/${A.id}`,className:`${t&&"text-yellow-500"} hover:text-yellow-500  transition`,replace:!0,children:A.name},A.id)})}),"/"===e?(0,s.jsxs)("div",{className:"flex items-center space-x-2 hover:text-yellow-500 transition",children:[(0,s.jsx)(a.A,{className:"h-5 w-5 text-yellow-500"}),(0,s.jsx)("span",{className:"hidden md:block",children:"Partner Portal"})]}):(0,s.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,s.jsx)(i.A,{className:"h-5 w-5 text-yellow-500 "}),(0,s.jsx)("span",{className:"text-1xl font-bold",children:"Power All"})]})]})})}},1066:(e,A,t)=>{let{createProxy:s}=t(3439);e.exports=s("C:\\Users\\RENDANI\\Documents\\Development\\generators\\Nextjs\\bigr-energy\\node_modules\\next\\dist\\client\\image-component.js")},5197:(e,A,t)=>{let{createProxy:s}=t(3439);e.exports=s("C:\\Users\\RENDANI\\Documents\\Development\\generators\\Nextjs\\bigr-energy\\node_modules\\next\\dist\\client\\link.js")},2326:(e,A,t)=>{"use strict";Object.defineProperty(A,"__esModule",{value:!0}),Object.defineProperty(A,"getImgProps",{enumerable:!0,get:function(){return n}}),t(5843);let s=t(6749),r=t(2833);function i(e){return void 0!==e.default}function a(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function n(e,A){var t;let n,o,l,{src:c,sizes:d,unoptimized:h=!1,priority:g=!1,loading:u,className:m,quality:x,width:p,height:b,fill:f=!1,style:v,overrideSrc:y,onLoad:w,onLoadingComplete:E,placeholder:C="empty",blurDataURL:N,fetchPriority:j,decoding:I="async",layout:D,objectFit:Q,objectPosition:P,lazyBoundary:B,lazyRoot:M,...F}=e,{imgConf:_,showAltText:R,blurComplete:U,defaultLoader:O}=A,k=_||r.imageConfigDefault;if("allSizes"in k)n=k;else{let e=[...k.deviceSizes,...k.imageSizes].sort((e,A)=>e-A),A=k.deviceSizes.sort((e,A)=>e-A);n={...k,allSizes:e,deviceSizes:A}}if(void 0===O)throw Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config");let S=F.loader||O;delete F.loader,delete F.srcSet;let G="__next_img_default"in S;if(G){if("custom"===n.loader)throw Error('Image with src "'+c+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=S;S=A=>{let{config:t,...s}=A;return e(s)}}if(D){"fill"===D&&(f=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[D];e&&(v={...v,...e});let A={responsive:"100vw",fill:"100vw"}[D];A&&!d&&(d=A)}let T="",L=a(p),X=a(b);if((t=c)&&"object"==typeof t&&(i(t)||void 0!==t.src)){let e=i(c)?c.default:c;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(o=e.blurWidth,l=e.blurHeight,N=N||e.blurDataURL,T=e.src,!f){if(L||X){if(L&&!X){let A=L/e.width;X=Math.round(e.height*A)}else if(!L&&X){let A=X/e.height;L=Math.round(e.width*A)}}else L=e.width,X=e.height}}let W=!g&&("lazy"===u||void 0===u);(!(c="string"==typeof c?c:T)||c.startsWith("data:")||c.startsWith("blob:"))&&(h=!0,W=!1),n.unoptimized&&(h=!0),G&&c.endsWith(".svg")&&!n.dangerouslyAllowSVG&&(h=!0);let q=a(x),z=Object.assign(f?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:Q,objectPosition:P}:{},R?{}:{color:"transparent"},v),Y=U||"empty"===C?null:"blur"===C?'url("data:image/svg+xml;charset=utf-8,'+(0,s.getImageBlurSvg)({widthInt:L,heightInt:X,blurWidth:o,blurHeight:l,blurDataURL:N||"",objectFit:z.objectFit})+'")':'url("'+C+'")',K=Y?{backgroundSize:z.objectFit||"cover",backgroundPosition:z.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:Y}:{},J=function(e){let{config:A,src:t,unoptimized:s,width:r,quality:i,sizes:a,loader:n}=e;if(s)return{src:t,srcSet:void 0,sizes:void 0};let{widths:o,kind:l}=function(e,A,t){let{deviceSizes:s,allSizes:r}=e;if(t){let e=/(^|\s)(1?\d?\d)vw/g,A=[];for(let s;s=e.exec(t);s)A.push(parseInt(s[2]));if(A.length){let e=.01*Math.min(...A);return{widths:r.filter(A=>A>=s[0]*e),kind:"w"}}return{widths:r,kind:"w"}}return"number"!=typeof A?{widths:s,kind:"w"}:{widths:[...new Set([A,2*A].map(e=>r.find(A=>A>=e)||r[r.length-1]))],kind:"x"}}(A,r,a),c=o.length-1;return{sizes:a||"w"!==l?a:"100vw",srcSet:o.map((e,s)=>n({config:A,src:t,quality:i,width:e})+" "+("w"===l?e:s+1)+l).join(", "),src:n({config:A,src:t,quality:i,width:o[c]})}}({config:n,src:c,unoptimized:h,width:L,quality:q,sizes:d,loader:S});return{props:{...F,loading:W?"lazy":u,fetchPriority:j,width:L,height:X,decoding:I,className:m,style:{...z,...K},sizes:J.sizes,srcSet:J.srcSet,src:y||J.src},meta:{unoptimized:h,priority:g,placeholder:C,fill:f}}}},6749:(e,A)=>{"use strict";function t(e){let{widthInt:A,heightInt:t,blurWidth:s,blurHeight:r,blurDataURL:i,objectFit:a}=e,n=s?40*s:A,o=r?40*r:t,l=n&&o?"viewBox='0 0 "+n+" "+o+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+l+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(l?"none":"contain"===a?"xMidYMid":"cover"===a?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+i+"'/%3E%3C/svg%3E"}Object.defineProperty(A,"__esModule",{value:!0}),Object.defineProperty(A,"getImageBlurSvg",{enumerable:!0,get:function(){return t}})},2833:(e,A)=>{"use strict";Object.defineProperty(A,"__esModule",{value:!0}),function(e,A){for(var t in A)Object.defineProperty(e,t,{enumerable:!0,get:A[t]})}(A,{VALID_LOADERS:function(){return t},imageConfigDefault:function(){return s}});let t=["default","imgix","cloudinary","akamai","custom"],s={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"],dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"attachment",localPatterns:void 0,remotePatterns:[],unoptimized:!1}},8516:(e,A,t)=>{"use strict";Object.defineProperty(A,"__esModule",{value:!0}),function(e,A){for(var t in A)Object.defineProperty(e,t,{enumerable:!0,get:A[t]})}(A,{default:function(){return o},getImageProps:function(){return n}});let s=t(3264),r=t(2326),i=t(1066),a=s._(t(6352));function n(e){let{props:A}=(0,r.getImgProps)(e,{defaultLoader:a.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,t]of Object.entries(A))void 0===t&&delete A[e];return{props:A}}let o=i.Image},6352:(e,A)=>{"use strict";function t(e){let{config:A,src:t,width:s,quality:r}=e;return A.path+"?url="+encodeURIComponent(t)+"&w="+s+"&q="+(r||75)}Object.defineProperty(A,"__esModule",{value:!0}),Object.defineProperty(A,"default",{enumerable:!0,get:function(){return s}}),t.__next_img_default=!0;let s=t},5843:(e,A)=>{"use strict";Object.defineProperty(A,"__esModule",{value:!0}),Object.defineProperty(A,"warnOnce",{enumerable:!0,get:function(){return t}});let t=e=>{}},8180:(e,A,t)=>{"use strict";t.r(A),t.d(A,{default:()=>c,metadata:()=>l});var s=t(2740),r=t(5111),i=t.n(r),a=t(5062),n=t.n(a);t(1135);var o=t(9516);let l={title:"Power-All",description:"Generated by create next app"};function c({children:e}){return(0,s.jsx)("html",{lang:"en",children:(0,s.jsx)("body",{className:`${i().variable} ${n().variable} antialiased`,children:(0,s.jsx)("div",{className:"h-screen",children:(0,s.jsxs)("div",{className:"flex flex-col h-screen overflow-hidden",children:[(0,s.jsx)("div",{className:"flex-shrink-0",children:(0,s.jsx)("header",{style:{backgroundColor:"#18181b",color:"white",boxShadow:" 0px 0px 15px 0px rgba(255, 255, 255, 0.07)",zIndex:999},children:(0,s.jsx)(o.default,{})})}),(0,s.jsx)("div",{className:"flex-grow overflow-y-auto custom-scrollbar scrollbar-gutter",children:e}),(0,s.jsx)("div",{className:"flex-shrink-0",children:(0,s.jsx)("footer",{className:"bg-zinc-900 text-white py-6  z-index: 999; ",children:(0,s.jsx)("div",{className:"container mx-auto px-4 text-center",children:(0,s.jsx)("p",{children:"\xa9 2024 PowerGen Solutions. All rights reserved."})})})})]})})})})}},2708:(e,A,t)=>{"use strict";t.r(A),t.d(A,{default:()=>B});var s=t(2740),r=t(6301);let i=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),a=(...e)=>e.filter((e,A,t)=>!!e&&""!==e.trim()&&t.indexOf(e)===A).join(" ").trim();var n={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let o=(0,r.forwardRef)(({color:e="currentColor",size:A=24,strokeWidth:t=2,absoluteStrokeWidth:s,className:i="",children:o,iconNode:l,...c},d)=>(0,r.createElement)("svg",{ref:d,...n,width:A,height:A,stroke:e,strokeWidth:s?24*Number(t)/Number(A):t,className:a("lucide",i),...c},[...l.map(([e,A])=>(0,r.createElement)(e,A)),...Array.isArray(o)?o:[o]])),l=(e,A)=>{let t=(0,r.forwardRef)(({className:t,...s},n)=>(0,r.createElement)(o,{ref:n,iconNode:A,className:a(`lucide-${i(e)}`,t),...s}));return t.displayName=`${e}`,t},c=l("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]),d=l("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]),h=l("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]),g=l("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]),u=()=>(0,s.jsx)("section",{id:"contact",className:"py-20 bg-zinc-900 text-white",children:(0,s.jsx)("div",{className:"container mx-auto px-4",children:(0,s.jsxs)("div",{className:"grid md:grid-cols-2 gap-16",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("h2",{className:"text-4xl font-bold mb-8",children:"Get in Touch"}),(0,s.jsxs)("div",{className:"space-y-6",children:[(0,s.jsxs)("div",{className:"flex items-start space-x-4",children:[(0,s.jsx)(c,{className:"w-6 h-6 text-yellow-500 flex-shrink-0"}),(0,s.jsxs)("div",{children:[(0,s.jsx)("h3",{className:"font-semibold mb-1",children:"Location"}),(0,s.jsxs)("p",{className:"text-gray-300",children:["123 Power Avenue",(0,s.jsx)("br",{}),"Industrial District",(0,s.jsx)("br",{}),"Houston, TX 77001"]})]})]}),(0,s.jsxs)("div",{className:"flex items-start space-x-4",children:[(0,s.jsx)(d,{className:"w-6 h-6 text-yellow-500 flex-shrink-0"}),(0,s.jsxs)("div",{children:[(0,s.jsx)("h3",{className:"font-semibold mb-1",children:"Phone"}),(0,s.jsx)("p",{className:"text-gray-300",children:"1-800-POWERGEN"})]})]}),(0,s.jsxs)("div",{className:"flex items-start space-x-4",children:[(0,s.jsx)(h,{className:"w-6 h-6 text-yellow-500 flex-shrink-0"}),(0,s.jsxs)("div",{children:[(0,s.jsx)("h3",{className:"font-semibold mb-1",children:"Email"}),(0,s.jsx)("p",{className:"text-gray-300",children:"sales@powergen-solutions.com"})]})]}),(0,s.jsxs)("div",{className:"flex items-start space-x-4",children:[(0,s.jsx)(g,{className:"w-6 h-6 text-yellow-500 flex-shrink-0"}),(0,s.jsxs)("div",{children:[(0,s.jsx)("h3",{className:"font-semibold mb-1",children:"Hours"}),(0,s.jsxs)("p",{className:"text-gray-300",children:["Monday - Friday: 8:00 AM - 6:00 PM",(0,s.jsx)("br",{}),"Saturday: 9:00 AM - 2:00 PM"]})]})]})]})]}),(0,s.jsx)("div",{children:(0,s.jsxs)("form",{className:"bg-white text-black rounded-lg p-8",children:[(0,s.jsx)("h3",{className:"text-2xl font-bold mb-6",children:"Request Information"}),(0,s.jsxs)("div",{className:"space-y-4",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("label",{className:"block text-sm font-medium mb-1",children:"Name"}),(0,s.jsx)("input",{type:"text",className:"w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-yellow-500"})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("label",{className:"block text-sm font-medium mb-1",children:"Email"}),(0,s.jsx)("input",{type:"email",className:"w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-yellow-500"})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("label",{className:"block text-sm font-medium mb-1",children:"Generator Size"}),(0,s.jsxs)("select",{className:"w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-yellow-500",children:[(0,s.jsx)("option",{children:"10kW - 100kW"}),(0,s.jsx)("option",{children:"100kW - 1000kW"}),(0,s.jsx)("option",{children:"1000kW - 3000kW"})]})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("label",{className:"block text-sm font-medium mb-1",children:"Message"}),(0,s.jsx)("textarea",{rows:4,className:"w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-yellow-500"})]}),(0,s.jsx)("button",{type:"submit",className:"w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 rounded-md transition",children:"Send Message"})]})]})})]})})}),m=l("Factory",[["path",{d:"M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",key:"159hny"}],["path",{d:"M17 18h1",key:"uldtlt"}],["path",{d:"M12 18h1",key:"s9uhes"}],["path",{d:"M7 18h1",key:"1neino"}]]),x=l("Wrench",[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",key:"cbrjhi"}]]),p=l("CircleCheckBig",[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);var b=t(1186),f=t(8516),v=t.n(f);let y=()=>(0,s.jsx)("section",{id:"fabrication",className:"py-20 bg-gray-50",children:(0,s.jsxs)("div",{className:"container mx-auto px-4",children:[(0,s.jsx)("h2",{className:"text-4xl font-bold text-center mb-16",children:"Fabrication Excellence"}),(0,s.jsxs)("div",{className:"grid md:grid-cols-2 gap-16 items-center",children:[(0,s.jsx)("div",{children:(0,s.jsx)(v(),{src:b.default,alt:"Manufacturing facility",className:"rounded-lg shadow-xl"})}),(0,s.jsxs)("div",{className:"space-y-8",children:[(0,s.jsxs)("div",{className:"flex items-start space-x-4",children:[(0,s.jsx)(m,{className:"w-8 h-8 text-yellow-500 flex-shrink-0"}),(0,s.jsxs)("div",{children:[(0,s.jsx)("h3",{className:"text-xl font-bold mb-2",children:"State-of-the-Art Facility"}),(0,s.jsx)("p",{className:"text-gray-600",children:"Our 500,000 sq ft facility equipped with advanced manufacturing technology ensures precision and quality in every generator we produce."})]})]}),(0,s.jsxs)("div",{className:"flex items-start space-x-4",children:[(0,s.jsx)(x,{className:"w-8 h-8 text-yellow-500 flex-shrink-0"}),(0,s.jsxs)("div",{children:[(0,s.jsx)("h3",{className:"text-xl font-bold mb-2",children:"Expert Assembly"}),(0,s.jsx)("p",{className:"text-gray-600",children:"Skilled technicians with decades of experience ensure every component is assembled to the highest standards."})]})]}),(0,s.jsxs)("div",{className:"flex items-start space-x-4",children:[(0,s.jsx)(p,{className:"w-8 h-8 text-yellow-500 flex-shrink-0"}),(0,s.jsxs)("div",{children:[(0,s.jsx)("h3",{className:"text-xl font-bold mb-2",children:"Quality Control"}),(0,s.jsx)("p",{className:"text-gray-600",children:"Rigorous testing protocols and quality checks at every stage of production guarantee reliability and performance."})]})]})]})]})]})});var w=t(5401),E=t(5197),C=t.n(E);let N=()=>(0,s.jsxs)("div",{className:"relative h-[600px] flex items-center",children:[(0,s.jsxs)("div",{className:"absolute inset-0",children:[(0,s.jsx)(v(),{src:w.default,priority:!0,alt:"Industrial generator facility",className:"w-full h-full object-cover"}),(0,s.jsx)("div",{className:"absolute inset-0 bg-black/50"})]}),(0,s.jsx)("div",{className:"container mx-auto px-4 relative z-10",children:(0,s.jsxs)("div",{className:"max-w-3xl",children:[(0,s.jsx)("h1",{className:"text-5xl font-bold text-white mb-6",children:"Powering Africa's Future Industries"}),(0,s.jsx)("p",{className:"text-xl text-gray-200 mb-8 text-justify",children:"We ensure your business meets the growing demand for efficient and sustainable power on a continental scale. We design, fabricate, assemble generator sets based on your business needs, providing your business with a turnkey,plug and power solution."}),(0,s.jsxs)("div",{className:"flex space-x-4",children:[(0,s.jsx)(C(),{href:"/services/all",state:{title:"Browse Products"},className:"bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-3 rounded-md font-semibold transition",children:"Search for Products"}),(0,s.jsx)("a",{href:"#",className:"border-2 border-white text-white hover:bg-white hover:text-black px-8 py-3 rounded-md font-semibold transition",children:"Become a Partner"})]})]})})]});var j=t(2676),I=t(3557),D=t(5159),Q=t(2062);let P=async({params:e})=>{let[A]=await (0,Q.Wu)(),t=e=>`/services/${e}`;return(0,s.jsx)("section",{className:"py-20  bg-white ",children:(0,s.jsxs)("div",{className:"container mx-auto px-4",children:[(0,s.jsx)("h2",{className:"text-4xl font-bold text-center mb-16",children:"Power Solutions"}),(0,s.jsx)("div",{className:"grid md:grid-cols-3 gap-8",children:A.map(e=>(0,s.jsx)(C(),{href:t(e.id),children:(0,s.jsxs)("div",{className:" bg-gray-50 rounded-lg shadow-lg overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-105",children:[(0,s.jsx)(v(),{src:1===e.id&&j.default||2===e.id&&I.default||3===e.id&&D.default,alt:e.service_name,className:"bg-white  w-full h-48 object-cover rounded-t-lg shadow-sm"}),(0,s.jsxs)("div",{className:"p-6  ",children:[(0,s.jsx)("h3",{className:"text-l font-bold mb-2",children:e.service_name}),(0,s.jsx)("p",{className:"text-gray-600 text-pretty",children:e.description})]})]})},e.id))})]})})},B=async()=>(0,s.jsx)("div",{className:"min-h-screen",children:(0,s.jsxs)("main",{children:[(0,s.jsx)(N,{}),(0,s.jsx)(P,{}),(0,s.jsx)(y,{}),(0,s.jsx)(u,{})]})})},9516:(e,A,t)=>{"use strict";t.d(A,{default:()=>s});let s=(0,t(6760).registerClientReference)(function(){throw Error("Attempted to call the default export of \"C:\\\\Users\\\\RENDANI\\\\Documents\\\\Development\\\\generators\\\\Nextjs\\\\bigr-energy\\\\src\\\\components\\\\Header.jsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"C:\\Users\\RENDANI\\Documents\\Development\\generators\\Nextjs\\bigr-energy\\src\\components\\Header.jsx","default")},2062:(e,A,t)=>{"use strict";t.d(A,{_R:()=>n,A6:()=>o,gX:()=>i,Go:()=>a,oH:()=>l,zb:()=>u,dJ:()=>h,dM:()=>g,Y$:()=>c,tX:()=>d,Wu:()=>r});let s=(0,t(820).createPool)({host:process.env.DB_HOST,port:process.env.DB_PORT,user:process.env.DB_USER,password:process.env.DB_PASSWORD,database:process.env.DB_DATABASE,waitForConnections:!0,connectionLimit:10,queueLimit:0});s.on("error",e=>{e?console.log("Database pool error:",e):console.log("database connected, ",process.env.HOST)}),s.on("connection",e=>{console.log("database connected, ",process.env.DB_PORT)});let r=async()=>{try{return await s.query("SELECT * FROM services;")}catch(e){throw console.log("error",e),e}},i=async()=>{let e=`
  SELECT DISTINCT 
    c.id AS category_id, 
    c.category 
  FROM categories c
  JOIN services_categories sc ON c.id = sc.category_id
  JOIN services s ON sc.service_id = s.id;
  `;try{return await s.query(e)}catch(e){throw console.log("error",e),e}},a=async e=>{let A=`
  SELECT DISTINCT 
    c.id AS category_id, 
    c.category 
  FROM categories c
  JOIN services_categories sc ON c.id = sc.category_id
  JOIN services s ON sc.service_id = s.id
  WHERE s.id = ?; 
`;try{return await s.query(A,[e])}catch(e){throw console.log("error",e),e}},n=async()=>{let e=`
  SELECT DISTINCT 
    b.id AS brand_id, 
    b.brand_name, 
    b.description 
  FROM brands b
  JOIN brands_services_categories bsc ON b.id = bsc.brand_id
  JOIN services s ON bsc.service_id = s.id;
`;try{return await s.query(e)}catch(e){throw console.log("error",e),e}},o=async e=>{let A=`
  SELECT DISTINCT 
    b.id AS brand_id, 
    b.brand_name, 
    b.description 
  FROM brands b
  JOIN brands_services_categories bsc ON b.id = bsc.brand_id
  JOIN services s ON bsc.service_id = s.id
  WHERE s.id = ?;
`;try{return await s.query(A,[e])}catch(e){throw console.log("error",e),e}},l=async()=>{let e=`
  SELECT 
    p.name, 
    p.description, 
    p.feature,
    b.brand_name, 
    s.service_name, 
    c.category
  FROM products p
  JOIN brands b ON p.brand_id = b.id
  JOIN services s ON p.service_id = s.id
  JOIN categories c ON p.category_id = c.id;
  `;try{return await s.query(e)}catch(e){throw console.log("error",e),e}},c=async e=>{let A=`
  SELECT 
    p.name, 
    p.description, 
    p.feature,
    b.brand_name, 
    s.service_name, 
    c.category
  FROM products p
  JOIN brands b ON p.brand_id = b.id
  JOIN services s ON p.service_id = s.id
  JOIN categories c ON p.category_id = c.id
  WHERE s.id = ?;
`;try{return await s.query(A,[e])}catch(e){throw console.log("error",e),e}},d=async e=>{let A=`
  SELECT 
    p.name, 
    p.description, 
    p.feature,
    b.brand_name, 
    s.service_name, 
    c.category
  FROM products p
  JOIN brands b ON p.brand_id = b.id
  JOIN services s ON p.service_id = s.id
  JOIN categories c ON p.category_id = c.id
  WHERE b.id = ?;
  `;try{return await s.query(A,[e])}catch(e){throw console.log("error",e),e}},h=async e=>{let A=`
  SELECT 
    p.name, 
    p.description, 
    p.feature, 
    b.brand_name, 
    s.service_name
  FROM products p
  JOIN brands b ON p.brand_id = b.id
  JOIN services s ON p.service_id = s.id
  JOIN categories c ON p.category_id = c.id
  WHERE c.id = ?
  ORDER BY p.name;
  `;try{return await s.query(A,[e])}catch(e){throw console.error("Error in GET_PRODUCT_BY_CATEGORY_ID:",e),e}},g=async(e,A)=>{let t=`
  SELECT 
    p.name, 
    p.description, 
    p.feature, 
    b.brand_name, 
    s.service_name
  FROM products p
  JOIN brands b ON p.brand_id = b.id
  JOIN services s ON p.service_id = s.id
  JOIN categories c ON p.category_id = c.id
  WHERE s.id = ? 
  AND c.id = ?
  ORDER BY p.name;
  `;try{return await s.query(t,[e,A])}catch(e){throw console.log("error",e),e}},u=async(e,A)=>{let t=`
    SELECT 
    p.name, 
    p.description, 
    p.feature, 
    b.brand_name, 
    s.service_name
  FROM products p
  JOIN brands b ON p.brand_id = b.id
  JOIN services s ON p.service_id = s.id
  JOIN categories c ON p.category_id = c.id
  WHERE b.id = ? 
  AND c.id = ?
  ORDER BY p.name;
  `;try{return await s.query(t,[e,A])}catch(e){throw console.log("error",e),e}}},5159:(e,A,t)=>{"use strict";t.r(A),t.d(A,{default:()=>s});let s={src:"/_next/static/media/fuel_cooling.dc682f60.jpg",height:225,width:225,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/2wBDAQoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/wgARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAACqA//EACAQAAEDAgcAAAAAAAAAAAAAAAIBAwQAUQUREhMhQWH/2gAIAQEAAT8AkDiKS2SZJNsXubaO8/bV/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAgEBPwB//8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAwEBPwB//9k=",blurWidth:8,blurHeight:8}},4479:(e,A,t)=>{"use strict";t.r(A),t.d(A,{default:()=>s});let s={src:"/_next/static/media/fuel_cooling.dc682f60.jpg",height:225,width:225,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/2wBDAQoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/wgARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAACqA//EACAQAAEDAgcAAAAAAAAAAAAAAAIBAwQAUQUREhMhQWH/2gAIAQEAAT8AkDiKS2SZJNsXubaO8/bV/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAgEBPwB//8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAwEBPwB//9k=",blurWidth:8,blurHeight:8}},3557:(e,A,t)=>{"use strict";t.r(A),t.d(A,{default:()=>s});let s={src:"/_next/static/media/heavy_duty2.4f31d965.jpg",height:4248,width:5664,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/2wBDAQoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/wgARCAAGAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAL/xAAUAQEAAAAAAAAAAAAAAAAAAAAC/9oADAMBAAIQAxAAAACgT//EAB0QAAIBBAMAAAAAAAAAAAAAAAEDAgAEBRIGIZH/2gAIAQEAAT8AsuS5FqGNDtejMQ0iR7X/xAAXEQADAQAAAAAAAAAAAAAAAAAAAQJR/9oACAECAQE/AHVaf//EABYRAQEBAAAAAAAAAAAAAAAAAAECAP/aAAgBAwEBPwCJGBd//9k=",blurWidth:8,blurHeight:6}},5413:(e,A,t)=>{"use strict";t.r(A),t.d(A,{default:()=>s});let s={src:"/_next/static/media/heavy_duty2.4f31d965.jpg",height:4248,width:5664,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/2wBDAQoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/wgARCAAGAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAL/xAAUAQEAAAAAAAAAAAAAAAAAAAAC/9oADAMBAAIQAxAAAACgT//EAB0QAAIBBAMAAAAAAAAAAAAAAAEDAgAEBRIGIZH/2gAIAQEAAT8AsuS5FqGNDtejMQ0iR7X/xAAXEQADAQAAAAAAAAAAAAAAAAAAAQJR/9oACAECAQE/AHVaf//EABYRAQEBAAAAAAAAAAAAAAAAAAECAP/aAAgBAwEBPwCJGBd//9k=",blurWidth:8,blurHeight:6}},1186:(e,A,t)=>{"use strict";t.r(A),t.d(A,{default:()=>s});let s={src:"/_next/static/media/hero_bg3.50b2c7b2.png",height:720,width:1260,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAARVBMVEVldXpLW1wlLy+LoamClp1SYGRcZ2h4jZRhdHs/U1uEfGxdWE1rfoVJS0UqRFBXbndueXl1iIk6TlMxQUOTl5BFXGaZq7FiBHSNAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMElEQVR4nAXBhwEAIAgDsCoo4N7/n2oCFyCkviJq4cetI0S5kGWwdPKgbZjISdn5Dx0JAVxCasLuAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:5}},9338:(e,A,t)=>{"use strict";t.r(A),t.d(A,{default:()=>s});let s={src:"/_next/static/media/hero_bg3.50b2c7b2.png",height:720,width:1260,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAARVBMVEVldXpLW1wlLy+LoamClp1SYGRcZ2h4jZRhdHs/U1uEfGxdWE1rfoVJS0UqRFBXbndueXl1iIk6TlMxQUOTl5BFXGaZq7FiBHSNAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMElEQVR4nAXBhwEAIAgDsCoo4N7/n2oCFyCkviJq4cetI0S5kGWwdPKgbZjISdn5Dx0JAVxCasLuAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:5}},5401:(e,A,t)=>{"use strict";t.r(A),t.d(A,{default:()=>s});let s={src:"/_next/static/media/night.150625a9.jpg",height:2007,width:3011,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/2wBDAQoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/wgARCAAFAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAUAQEAAAAAAAAAAAAAAAAAAAAC/9oADAMBAAIQAxAAAACbAP8A/8QAGhAAAgIDAAAAAAAAAAAAAAAAAQMAAhESMf/aAAgBAQABPwAPWF4KKm2vZ//EABURAQEAAAAAAAAAAAAAAAAAAAEA/9oACAECAQE/AAv/xAAWEQEBAQAAAAAAAAAAAAAAAAABACH/2gAIAQMBAT8AVy//2Q==",blurWidth:8,blurHeight:5}},553:(e,A,t)=>{"use strict";t.r(A),t.d(A,{default:()=>s});let s={src:"/_next/static/media/night.150625a9.jpg",height:2007,width:3011,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/2wBDAQoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/wgARCAAFAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAUAQEAAAAAAAAAAAAAAAAAAAAC/9oADAMBAAIQAxAAAACbAP8A/8QAGhAAAgIDAAAAAAAAAAAAAAAAAQMAAhESMf/aAAgBAQABPwAPWF4KKm2vZ//EABURAQEAAAAAAAAAAAAAAAAAAAEA/9oACAECAQE/AAv/xAAWEQEBAQAAAAAAAAAAAAAAAAABACH/2gAIAQMBAT8AVy//2Q==",blurWidth:8,blurHeight:5}},2676:(e,A,t)=>{"use strict";t.r(A),t.d(A,{default:()=>s});let s={src:"/_next/static/media/solar.0160c8b5.jpg",height:2628,width:3967,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/2wBDAQoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/wgARCAAFAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAVAQEBAAAAAAAAAAAAAAAAAAABA//aAAwDAQACEAMQAAAApgZ//8QAGRAAAgMBAAAAAAAAAAAAAAAAASEAAgOB/9oACAEBAAE/AMrIIHk//8QAFxEAAwEAAAAAAAAAAAAAAAAAAAISUf/aAAgBAgEBPwCm0//EABgRAAIDAAAAAAAAAAAAAAAAAAABAhJS/9oACAEDAQE/AKQyj//Z",blurWidth:8,blurHeight:5}},9476:(e,A,t)=>{"use strict";t.r(A),t.d(A,{default:()=>s});let s={src:"/_next/static/media/solar.0160c8b5.jpg",height:2628,width:3967,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/2wBDAQoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/wgARCAAFAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAVAQEBAAAAAAAAAAAAAAAAAAABA//aAAwDAQACEAMQAAAApgZ//8QAGRAAAgMBAAAAAAAAAAAAAAAAASEAAgOB/9oACAEBAAE/AMrIIHk//8QAFxEAAwEAAAAAAAAAAAAAAAAAAAISUf/aAAgBAgEBPwCm0//EABgRAAIDAAAAAAAAAAAAAAAAAAABAhJS/9oACAEDAQE/AKQyj//Z",blurWidth:8,blurHeight:5}},440:(e,A,t)=>{"use strict";t.r(A),t.d(A,{default:()=>r});var s=t(8077);let r=async e=>[{type:"image/x-icon",sizes:"16x16",url:(0,s.fillMetadataSegment)(".",await e.params,"favicon.ico")+""}]},1135:()=>{}};var A=require("../webpack-runtime.js");A.C(e);var t=e=>A(A.s=e),s=A.X(0,[989,803,3],()=>t(3639));module.exports=s})();