"use strict";(self.webpackChunkproducts=self.webpackChunkproducts||[]).push([[808],{808:(e,s,t)=>{t.r(s),t.d(s,{default:()=>c});var l=t(43),a=t(402),r=t(579);const c=()=>{const e=new a.qw({id:"inan-rjsf-dongdocreate-mrlmk"}),[s,t]=(0,l.useState)([]),[c,n]=(0,l.useState)(!0),[d,i]=(0,l.useState)(null);(0,l.useEffect)((()=>{o()}),[]);const o=async()=>{try{const s="getAllUserBill",l=await e.currentUser.callFunction(s);t(l),n(!1)}catch(s){console.error("Error fetching bills:",s),n(!1)}};return(0,r.jsx)("div",{className:"container mx-auto p-4",children:c?(0,r.jsx)("p",{className:"text-center",children:"Loading..."}):(0,r.jsx)("ul",{className:"divide-y divide-gray-300",children:s.map(((e,s)=>{var t,l,a;return(0,r.jsxs)("li",{className:"py-4",children:[(0,r.jsx)("button",{className:"text-blue-600 underline focus:outline-none",onClick:()=>(e=>{i(d===e?null:e)})(e),children:d===e?"Hide Details":"Show Details"}),(0,r.jsxs)("p",{className:"text-lg font-semibold",children:["User: ",e.user]}),(0,r.jsxs)("p",{className:"text-sm text-gray-500",children:["UserId: ",e.userId]}),(0,r.jsxs)("p",{className:"text-sm text-gray-500",children:["Date: ",new Date(e.date).toLocaleString()]}),d===e&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("p",{className:"text-green-700 font-bold",children:["Total Value: ",null===e||void 0===e||null===(t=e.cart)||void 0===t?void 0:t.totalValue]}),(0,r.jsx)("ul",{className:"pl-4",children:null===e||void 0===e||null===(l=e.cart)||void 0===l||null===(a=l.products)||void 0===a?void 0:a.map(((e,s)=>(0,r.jsxs)("li",{className:"py-2",children:[(0,r.jsxs)("p",{className:"text-sm font-semibold",children:["Product Name: ",e.productName]}),(0,r.jsxs)("p",{className:"text-xs text-gray-500",children:["Product Type: ",e.productType]})]},s)))})]})]},s)}))})})}}}]);
//# sourceMappingURL=808.3cdd72b8.chunk.js.map