(()=>{var e={};e.id=987,e.ids=[987],e.modules={846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},9121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},9294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},3033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},9428:e=>{"use strict";e.exports=require("buffer")},5511:e=>{"use strict";e.exports=require("crypto")},4735:e=>{"use strict";e.exports=require("events")},1645:e=>{"use strict";e.exports=require("net")},3873:e=>{"use strict";e.exports=require("path")},9771:e=>{"use strict";e.exports=require("process")},7910:e=>{"use strict";e.exports=require("stream")},1204:e=>{"use strict";e.exports=require("string_decoder")},6136:e=>{"use strict";e.exports=require("timers")},4631:e=>{"use strict";e.exports=require("tls")},9551:e=>{"use strict";e.exports=require("url")},8354:e=>{"use strict";e.exports=require("util")},4075:e=>{"use strict";e.exports=require("zlib")},7247:(e,r,s)=>{"use strict";s.r(r),s.d(r,{GlobalError:()=>i.a,__next_app__:()=>u,pages:()=>d,routeModule:()=>p,tree:()=>c});var t=s(260),a=s(8203),l=s(5155),i=s.n(l),n=s(7292),o={};for(let e in n)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>n[e]);s.d(r,o);let c=["",{children:["services",{children:["[service_id]",{products:["__PAGE__",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,5437)),"C:\\Users\\RENDANI\\Documents\\Development\\generators\\Nextjs\\bigr-energy\\src\\app\\services\\[service_id]\\@products\\page.jsx"]}]},{layout:[()=>Promise.resolve().then(s.bind(s,5354)),"C:\\Users\\RENDANI\\Documents\\Development\\generators\\Nextjs\\bigr-energy\\src\\app\\services\\[service_id]\\@products\\layout.jsx"]}],search:["__PAGE__",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,7905)),"C:\\Users\\RENDANI\\Documents\\Development\\generators\\Nextjs\\bigr-energy\\src\\app\\services\\[service_id]\\@search\\page.jsx"]}]},{}],children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,5718)),"C:\\Users\\RENDANI\\Documents\\Development\\generators\\Nextjs\\bigr-energy\\src\\app\\services\\[service_id]\\page.jsx"]}]},{layout:[()=>Promise.resolve().then(s.bind(s,9077)),"C:\\Users\\RENDANI\\Documents\\Development\\generators\\Nextjs\\bigr-energy\\src\\app\\services\\[service_id]\\layout.jsx"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,440))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(s.bind(s,8180)),"C:\\Users\\RENDANI\\Documents\\Development\\generators\\Nextjs\\bigr-energy\\src\\app\\layout.jsx"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,9937,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,440))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],d=["C:\\Users\\RENDANI\\Documents\\Development\\generators\\Nextjs\\bigr-energy\\src\\app\\services\\[service_id]\\@products\\page.jsx","C:\\Users\\RENDANI\\Documents\\Development\\generators\\Nextjs\\bigr-energy\\src\\app\\services\\[service_id]\\@search\\page.jsx","C:\\Users\\RENDANI\\Documents\\Development\\generators\\Nextjs\\bigr-energy\\src\\app\\services\\[service_id]\\page.jsx"],u={require:s,loadChunk:()=>Promise.resolve()},p=new t.AppPageRouteModule({definition:{kind:a.RouteKind.APP_PAGE,page:"/services/[service_id]/page",pathname:"/services/[service_id]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},7399:(e,r,s)=>{Promise.resolve().then(s.bind(s,9727))},543:(e,r,s)=>{Promise.resolve().then(s.bind(s,3491))},3491:(e,r,s)=>{"use strict";s.d(r,{default:()=>n});var t=s(5512),a=s(6008),l=s(9334),i=s(8009);let n=({service_id:e,context:r})=>{let s=(0,l.useRouter)(),[n,o]=(0,i.useState)(r.brands_all),[c,d]=(0,i.useState)(r.categories_all),[u,p]=(0,i.useState)("All"),[x,g]=(0,i.useState)("All"),[v,m]=(0,i.useState)("");(0,i.useEffect)(()=>{"all"===e?(o(r.brands_all),d(r.categories_all)):"1"==e?(o(r.brands_1),d(r.categories_1)):"2"==e?(o(r.brands_2),d(r.categories_2)):"3"==e&&(o(r.brands_3),d(r.categories_3))},[e]);let h=e=>{e.preventDefault();let r=e.target.value;g("All"),p(r)};return(0,i.useEffect)(()=>{"All"===u&&"All"===x?s.push(`/services/${e}`):"All"===u&&s.push(`/services/${e}`)},[u,x]),(0,t.jsx)("div",{children:(0,t.jsxs)("div",{className:"sticky top-0 min-h-full flex flex-col gap-4",children:[(0,t.jsx)("h1",{className:"text-3xl font-bold text-center ",children:"Filter"}),n[0]&&(0,t.jsxs)("div",{className:"w-full",children:[(0,t.jsx)("label",{className:"block text-sm font-medium text-gray-700 mb-1",htmlFor:"make-filter",children:"Filter by Brand"}),(0,t.jsxs)("div",{className:"relative inline-block w-full",children:[(0,t.jsxs)("select",{className:"block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500",value:u,onChange:e=>h(e),children:[(0,t.jsx)("option",{value:"All",children:"All"}),n.map((e,r)=>(0,t.jsx)("option",{value:e.brand_id,children:e.brand_name},r))]}),(0,t.jsx)("div",{className:"pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700",children:(0,t.jsx)("svg",{className:"fill-current h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",children:(0,t.jsx)("path",{d:"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"})})})]})]}),c[0]&&(0,t.jsxs)("div",{className:"w-full",children:[(0,t.jsx)("label",{className:"block text-sm font-medium text-gray-700 mb-1",htmlFor:"make-filter",children:"Filter by Category"}),(0,t.jsxs)("div",{className:"relative inline-block w-full",children:[(0,t.jsxs)("select",{className:"block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500",onChange:e=>g(e.target.value),value:x,children:[(0,t.jsx)("option",{value:"All",children:"All"}),c.map((e,r)=>(0,t.jsx)("option",{value:e.category_id,children:e.category},r))]}),(0,t.jsx)("div",{className:"pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700",children:(0,t.jsx)("svg",{className:"fill-current h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",children:(0,t.jsx)("path",{d:"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"})})})]})]}),"All"!==u||"All"!==x?(0,t.jsx)(a.default,{href:(()=>{let r=`/services/${e}`;return"All"!==u&&"All"!==x?r=`/services/${e}/search/brand/${u}/category/${x}`:"All"!==u&&"All"===x?r=`/services/${e}/search/brand/${u}`:"All"===u&&"All"!==x&&(r=`/services/${e}/search/category/${x}`),r})(),className:`${"All"!==u||"All"!==x?"bg-yellow-500 hover:bg-yellow-600 text-black":"bg-gray-300 text-white"} px-8 py-3 rounded-md font-semibold transition text-center`,children:"Search"}):(0,t.jsx)("button",{className:`${"All"!==u||"All"!==x?"bg-yellow-500 hover:bg-yellow-600 text-black":"bg-gray-300 text-white"} px-8 py-3 rounded-md font-semibold transition text-center`,children:"Search"})]})})}},5437:(e,r,s)=>{"use strict";s.r(r),s.d(r,{default:()=>i});var t=s(2740),a=s(2062);s(6301);var l=s(9097);let i=async({params:e})=>{let{service_id:r}=await e,s=[],[i]=await (0,a.Wu)();if("all"===r){let[e]=await (0,a.oH)();s=e}else{let[e]=await (0,a.Y$)(r);s=e}return(0,t.jsxs)("div",{className:" md:col-span-3 h-full overflow-y-auto  p-4",children:[(0,t.jsx)("h1",{className:"text-3xl font-bold text-center ",children:"all"==r?"All Products":i[r-1].service_name}),(0,t.jsx)(l.default,{products:s})]})}},7905:(e,r,s)=>{"use strict";s.r(r),s.d(r,{default:()=>n});var t=s(2740);s(6301);var a=s(2062),l=s(9727);let i=async()=>{let[e]=await (0,a._R)(),[r]=await (0,a.A6)(1),[s]=await (0,a.A6)(2),[t]=await (0,a.A6)(3),[l]=await (0,a.gX)(),[i]=await (0,a.Go)(1),[n]=await (0,a.Go)(2),[o]=await (0,a.Go)(3);return{brands_all:e,brands_1:r,brands_2:s,brands_3:t,categories_all:l,categories_1:i,categories_2:n,categories_3:o}},n=async({params:e})=>{let r=await i(),{service_id:s}=await e;return(0,t.jsx)(l.default,{service_id:s,context:r})}},5718:(e,r,s)=>{"use strict";s.r(r),s.d(r,{default:()=>a});var t=s(2740);s(6301);let a=()=>(0,t.jsx)("div",{children:"how did you get here?"})},9727:(e,r,s)=>{"use strict";s.d(r,{default:()=>t});let t=(0,s(6760).registerClientReference)(function(){throw Error("Attempted to call the default export of \"C:\\\\Users\\\\RENDANI\\\\Documents\\\\Development\\\\generators\\\\Nextjs\\\\bigr-energy\\\\src\\\\components\\\\Aside.jsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"C:\\Users\\RENDANI\\Documents\\Development\\generators\\Nextjs\\bigr-energy\\src\\components\\Aside.jsx","default")}};var r=require("../../../webpack-runtime.js");r.C(e);var s=e=>r(r.s=e),t=r.X(0,[989,803,3,865],()=>s(7247));module.exports=t})();