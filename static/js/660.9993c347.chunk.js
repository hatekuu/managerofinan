"use strict";(self.webpackChunkproducts=self.webpackChunkproducts||[]).push([[660],{8660:(l,n,e)=>{e.r(n),e.d(n,{default:()=>c});var s=e(5043),i=e(3402),d=e(6244),o=e(443),r=e(579);const t=l=>{let{jsonData:n}=l;const[e,i]=(0,s.useState)({}),d=l=>{i((n=>({...n,[l]:!n[l]})))};return(0,r.jsx)(r.Fragment,{children:n?(0,r.jsx)("div",{className:"overflow-x-auto",children:(0,r.jsxs)("table",{className:"table-auto w-full",children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{className:"bg-gray-200",children:[(0,r.jsx)("th",{className:"px-4 py-2",children:"\u0110\u01a1n h\xe0ng"}),(0,r.jsx)("th",{className:"px-4 py-2",children:"Ng\xe0y mua"}),(0,r.jsx)("th",{className:"px-4 py-2",children:"Gi\u1edd mua"}),(0,r.jsx)("th",{className:"px-4 py-2",children:"Ng\u01b0\u1eddi mua"}),(0,r.jsx)("th",{className:"px-4 py-2",children:"ID ng\u01b0\u1eddi mua"})]})}),(0,r.jsx)("tbody",{children:null===n||void 0===n?void 0:n.map(((l,n)=>{var i,o,t,a,c,u;return(0,r.jsxs)(s.Fragment,{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("button",{onClick:()=>d(n),className:"mt-4 form-text py-2 px-4 rounded",children:e[n]?"\u1ea8n":"Chi ti\u1ebft"})}),(0,r.jsxs)("td",{className:"border px-4 py-2",children:[null===l||void 0===l||null===(i=l.date)||void 0===i?void 0:i.day,"/",null===l||void 0===l||null===(o=l.date)||void 0===o?void 0:o.month,"/",null===l||void 0===l||null===(t=l.date)||void 0===t?void 0:t.year]}),(0,r.jsxs)("td",{className:"border px-4 py-2",children:[null===l||void 0===l||null===(a=l.date)||void 0===a?void 0:a.hour,".",null===l||void 0===l||null===(c=l.date)||void 0===c?void 0:c.period]}),(0,r.jsx)("td",{className:"border px-4 py-2",children:null===l||void 0===l?void 0:l.user}),(0,r.jsx)("td",{className:"border px-4 py-2",children:null===l||void 0===l?void 0:l.userId})]}),e[n]&&(0,r.jsx)("tr",{children:(0,r.jsx)("td",{colSpan:"5",children:(0,r.jsx)("div",{className:"fixed inset-0 z-10 flex justify-center items-center bg-black bg-opacity-50",children:(0,r.jsxs)("div",{className:"bg-white p-8 rounded-lg",children:[(0,r.jsx)("h2",{className:"text-2xl font-semibold mb-4",children:"Chi ti\u1ebft \u0111\u01a1n h\xe0ng"}),(0,r.jsx)("ul",{children:null===l||void 0===l||null===(u=l.cart)||void 0===u?void 0:u.map(((l,n)=>(0,r.jsxs)("li",{className:"border p-4 mb-2",children:[(0,r.jsxs)("p",{className:"font-semibold",children:["T\xean s\u1ea3n ph\u1ea9m: ",l.productName]}),(0,r.jsxs)("p",{children:["Lo\u1ea1i s\u1ea3n ph\u1ea9m: ",l.productType]}),(0,r.jsxs)("p",{children:["S\u1ed1 l\u01b0\u1ee3ng: ",l.quantity]}),(0,r.jsxs)("p",{children:["Gi\xe1 b\xe1n: ",l.sellingPrice]})]},n)))}),(0,r.jsx)("button",{onClick:()=>d(n),className:"mt-4 form-text py-2 px-4 rounded",children:"\u0110\xf3ng"})]})})})})]},n)}))})]})}):(0,r.jsx)("div",{className:"text-center",children:"Kh\xf4ng c\xf3 d\u1eef li\u1ec7u \u0111\u01a1n h\xe0ng trong th\u1eddi gian n\xe0y"})})};var a=e(3216);const c=()=>{const[l,n]=(0,s.useState)(!1),[e,c]=(0,s.useState)(""),[u,v]=(0,s.useState)(),[h,x]=(0,s.useState)({}),m=new i.qw({id:"inan-rjsf-dongdocreate-mrlmk"}),p=(0,a.Zp)();(0,s.useEffect)((()=>{j()}),[]);const j=async()=>{try{var l,n;null!==(l=m.currentUser)&&void 0!==l&&l.accessToken||p("/managerofinan/login"),await(null===m||void 0===m||null===(n=m.currentUser)||void 0===n?void 0:n.refreshAccessToken()),v(null===m||void 0===m?void 0:m.currentUser)}catch(s){var e;null!==(e=m.currentUser)&&void 0!==e&&e.accessToken||p("/managerofinan/login")}};(0,s.useEffect)((()=>{y()}),[]);const y=async()=>{try{var l,n,e,s,i,d,o,r,t,a;const u="UseModule",h=["Bill_Module",null===m||void 0===m||null===(l=m.currentUser)||void 0===l?void 0:l.id];await(null===m||void 0===m||null===(n=m.currentUser)||void 0===n?void 0:n.callFunction(u,...h));const p=await(null===m||void 0===m||null===(e=m.currentUser)||void 0===e?void 0:e.callFunction("BillJsonForm"));c(null===(s=p[0])||void 0===s||null===(i=s.public)||void 0===i||null===(d=i.output)||void 0===d||null===(o=d.jsonData)||void 0===o?void 0:o.product),x(null===(r=p[0])||void 0===r||null===(t=r.public)||void 0===t||null===(a=t.input)||void 0===a?void 0:a.jsonSchema),console.log(p),v(m.currentUser)}catch(u){console.log(u)}};return(0,r.jsx)(r.Fragment,{children:u?(0,r.jsxs)("div",{className:"container mx-auto px-4 py-8",children:[(0,r.jsx)("div",{className:"containers",children:l?h&&(0,r.jsx)(d.Ay,{schema:h,onSubmit:async l=>{var e;let{formData:s}=l;const i=[s,null===m||void 0===m||null===(e=m.currentUser)||void 0===e?void 0:e.id];try{await m.currentUser.callFunction("updateoption",...i),y(),n(!1)}catch(d){console.log(d)}},validator:o.Ay}):(0,r.jsx)("div",{className:"form-text",onClick:()=>{n(!0)},children:"\u1ea4n v\xe0o \u0111\xe2y \u0111\u1ec3 m\u1edf form"})}),(0,r.jsx)(t,{jsonData:e})]}):(0,r.jsx)("div",{children:" \u0110\u0103ng nh\u1eadp \u0111\xe3 nh\xe9!"})})}}}]);
//# sourceMappingURL=660.9993c347.chunk.js.map