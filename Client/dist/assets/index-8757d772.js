import{j as e,c as a,d as ze,B as y,F as Ie,f as Me,g as be,h as Ae,A as ye,i as _e,I as F,k as Ue,T as z,l as Re,m as we,n as Q,o as Oe,p as Be,q as ee,r as Ve,M as We,t as h,u as W,v as P,w as je,x as Se,y as qe,z as He,D as Je,E as U,G as Ke,H as Ye,J as Ze,K as Xe,L as Ge,N as R,O as he,P as Qe,Q as De,R as et,U as tt,s as rt,V as at,W as lt,X as it,Y as nt,Z as st,_ as me,$ as T,a0 as ot,a1 as dt,a2 as ct,a3 as ut,C as ht,a4 as mt,a5 as pt,a6 as ft,a7 as gt,a8 as vt,a9 as xt,aa as te}from"./@mui-f7a756da.js";import{u as bt,S as yt}from"./notistack-69dda909.js";import{r as c,a as S}from"./react-728330cd.js";import{c as wt}from"./react-dom-1caf2c99.js";import{L as C,B as St}from"./react-router-dom-ddb5f63e.js";import{F as d}from"./tailwind-styled-components-0ba88b5d.js";import{i as Ct,g as Nt,a as Et,b as Pt,o as kt,A as j,K as Lt,u as Ft,s as Ce,O as Tt,c as $t,d as pe,U as zt,e as It,f as Mt,h as At}from"./@firebase-24f50eea.js";import"./firebase-44082fe0.js";import{l as fe}from"./leaflet-08cdb987.js";import{M as Ne,T as Ee,u as _t,a as re,P as ae}from"./react-leaflet-09ee73f6.js";import{P as Ut,b as Rt,a as Ot}from"./material-ui-popup-state-8eea7553.js";import{n as Bt}from"./@emotion-fe3977d9.js";import{g as ge,a as g,f as E,b as Vt,d as Wt}from"./date-fns-943e1535.js";import{v as q}from"./validator-baf863ef.js";import{a as le,d as jt,e as w}from"./react-router-a89ba10b.js";import"./react-is-1aacdabe.js";import"./@babel-8760ff86.js";import"./react-transition-group-d522d3d2.js";import"./clsx-1229b3e0.js";import"./@popperjs-0e7ee0a2.js";import"./hoist-non-react-statics-691fe6cb.js";import"./scheduler-04ce0582.js";import"./@remix-run-cb584dee.js";import"./tailwind-merge-5722ff6e.js";import"./tslib-4b8363ab.js";import"./idb-f62f60ab.js";import"./@react-leaflet-ff7df424.js";import"./prop-types-4d501b15.js";import"./stylis-581c9ed0.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function l(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(i){if(i.ep)return;i.ep=!0;const o=l(i);fetch(i.href,o)}})();const qt=d.div` min-h-[20rem] flex justify-center items-center bg-gray-500 text-white`,Ht=d.div`grid grid-cols-4 w-[60rem] `,M=d.div``,A=d.div` uppercase py-4 text-lg`,v=d.div`py-1`,Jt=()=>e(qt,{children:a(Ht,{children:[a(M,{children:[e(A,{children:"StoreForm"}),e(v,{children:"About"}),e(v,{children:"Join Us"}),e(v,{children:"Membership"}),e(v,{children:"Advertise"})]}),a(M,{children:[e(A,{children:"StoreForm"}),e(v,{children:"About"}),e(v,{children:"Join Us"}),e(v,{children:"Membership"}),e(v,{children:"Advertise"})]}),a(M,{children:[e(A,{children:"StoreForm"}),e(v,{children:"About"}),e(v,{children:"Join Us"}),e(v,{children:"Membership"}),e(v,{children:"Advertise"})]}),a(M,{children:[e(A,{children:"Thanks"}),e(v,{children:e("a",{href:"https://icons8.com/",children:"ICONS8"})}),e(v,{children:"Join Us"}),e(v,{children:"Membership"}),e(v,{children:"Advertise"})]})]})}),Kt={apiKey:"AIzaSyBuXVcV4H1TkoEO9YxHoXLw0f19n3-n-Z0",authDomain:"face-local-web-front-end.firebaseapp.com",projectId:"face-local-web-front-end",storageBucket:"face-local-web-front-end.appspot.com",messagingSenderId:"959087378986",appId:"1:959087378986:web:0ccff23d77d554b3d4f953",measurementId:"G-YKCRBQQJKL"},ie=Ct(Kt);Nt(ie);const I=Et(),Yt=Pt(ie),H=kt(ie),J="users",B={name:"",createdAt:null,profileIcon:"",location:""},Pe=async(t,r,l)=>{const s=j(H,J,t),i=r,o={};o[i]=l,await Lt(s,o)},Zt=async(t,r,l)=>{j(H,J,t);const s=r,i={};i[s]=l,I.currentUser&&await Ft(I.currentUser,i)},Xt=async t=>{try{const r=await Ce(I,t.email,t.password),l=j(H,J,r.user.uid),i=(await Tt(l)).data();return{userCredential:r,userCollection:i}}catch{return{userCollection:B,userCredential:null}}},Gt=async t=>{try{const r=await $t(I,t.email,t.password),l=pe(),s={...B,name:t.name,createdAt:pe()};return await zt(j(H,J,r.user.uid),s),{userCredential:r,userCollection:s}}catch{return{userCollection:B,userCredential:null}}},Qt=async t=>{const r=await Ce(I,t.email,t.oldPassword);return console.log(r),r===void 0},ke="userAuthInfo",ne={userCredential:null,userCollection:B},K=()=>{const t=localStorage.getItem(ke),r=JSON.parse(t);return r&&r.userCredential?{user:r,isLogin:r.uid!==""}:{user:ne,isLogin:!1}},Dt=(t,r)=>{switch(r.authActionType){case 0:{if(r.payload)return JSON.stringify(r.payload),{user:{...r.payload},isLogin:!0};throw new Error("No user info in payload")}case 2:{if(r.payload)return JSON.stringify(r.payload),{user:{...r.payload},isLogin:!0};throw new Error("No user info in payload")}default:return{user:{...ne},isLogin:!1}}},er=t=>{const[r,l]=c.useReducer(Dt,t);return{state:r,dispatch:l,login:n=>l({authActionType:0,payload:n}),logout:()=>l({authActionType:1,payload:ne}),update:n=>l({authActionType:2,payload:n})}},tr={state:K(),dispatch:()=>{},login:()=>{},logout:()=>{},update:()=>{}},k=c.createContext(tr),rr=({children:t})=>e(k.Provider,{value:er(K()),children:t}),ar=d.div` border-2 grow rounded-md pl-1 flex overflow-hidden  bg-white text-black`,lr=d.div` `,ir=()=>a(ar,{children:[e(ze,{className:"my-auto "}),e("input",{type:"text",className:"grow outline-none px-3"}),e(lr,{children:e(y,{variant:"contained",children:"Search"})})]});d.div`w-[80vw] h-[80vh]`;const D={lat:44.65107,lng:-63.582687},nr=({flyto:t,handleFlytoEnd:r,setFlyto:l})=>a(Ne,{style:{height:"80vh"},center:[44.65107,-63.582687],zoom:13,scrollWheelZoom:!1,children:[e(Ee,{attribution:'© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),e(sr,{flyto:t,handleFlytoEnd:r,setFlyto:l}),e(or,{})]});function sr({flyto:t,handleFlytoEnd:r,setFlyto:l}){const[s,i]=c.useState(new fe.LatLng(D.lat,D.lng)),[o,n]=c.useState(!1),u=_t({locationfound(f){i(f.latlng),u.flyTo(f.latlng,u.getZoom()),r(),n(!0)}});t&&u.locate();var m=new fe.Icon({iconUrl:"/vite.svg",iconSize:[20,20],iconAnchor:[10,20],popupAnchor:[0,-20]});return s===null?null:e(re,{position:s,icon:m,draggable:!o,children:e(ae,{children:a("div",{className:"flex flex-col items-center",children:[a("div",{className:" text-base pb-2",children:["Your location. ",a("span",{children:[!o&&"Not"," Auto-located!"]})]}),e(y,{fullWidth:!0,variant:"text",onClick:()=>{l(!0)},children:"Location"})]})})})}function or(){const[t,r]=c.useState(!1),[l,s]=c.useState(D),i=c.useRef(null),o=c.useMemo(()=>({dragend(){const u=i.current;u&&s(u.getLatLng())}}),[]),n=c.useCallback(()=>{r(u=>!u)},[]);return e(re,{draggable:t,eventHandlers:o,position:l,ref:i,children:e(ae,{minWidth:90,children:a("span",{className:"flex flex-col justify-center items-center",children:[e("span",{className:"text-lg pb-1 border-b-[2px] self-stretch text-center font-mono",children:"Location"}),e(Ie,{control:e(Me,{draggable:!0,onClick:n,sx:{fontSize:"small"}}),label:"Movable"})]})})})}const dr=[{title:"First"},{title:"Second"}],cr=d.div`flex flex-col`;function ur(){const[t,r]=c.useState(!1),[l,s]=c.useState(!1),[i,o]=c.useState("Halifax"),n=()=>{r(!1)},u=()=>{r(!t)},m=p=>{s(p)},f=()=>s(!1);return a("div",{children:[e(y,{variant:"outlined",startIcon:e(be,{}),onClick:u,children:i}),e(Ae,{sx:{color:"#fff",zIndex:p=>p.zIndex.drawer+1},open:t,children:a(cr,{children:[e("div",{className:"bg-white text-black rounded-tl-md rounded-tr-md ",children:e(ye,{options:dr.map(p=>p.title),freeSolo:!0,id:"clear-on-escape",clearOnEscape:!0,renderInput:p=>a(_e,{direction:"row",spacing:0,children:[e(F,{color:"primary","aria-label":"Search...",children:e(Ue,{})}),e(z,{...p,label:"Search ...",variant:"standard"})]}),sx:{paddingX:2,paddingTop:1}})}),a("div",{className:"w-[80vw] h-[80vh] relative",children:[e("div",{className:"absolute right-[1rem] z-[1000] top-4 bg-slate-50  border-black rounded-md",children:e(hr,{handleClose:n,handleFlyto:m})}),e(nr,{flyto:l,handleFlytoEnd:f,setFlyto:s}),l&&e("div",{className:"absolute z-[1001] left-1/2 top-1/2",children:e(Re,{sx:{display:"flex"},children:e(we,{color:"secondary",size:"60px"})})})]})]})})]})}const hr=({handleClose:t,handleFlyto:r})=>e(Q,{orientation:"vertical","aria-label":"map buttons",variant:"outlined",sx:{width:"100%"},children:[e(y,{sx:{paddingY:1,width:10},onClick:()=>r(!0),children:e(Oe,{fontSize:"small",color:"primary"})},"one"),e(y,{sx:{paddingY:1,width:10},onClick:t,children:e(Be,{fontSize:"small",color:"primary"})},"two")]});d.div``;const mr=({profileIcon:t,name:r})=>e(Ut,{variant:"popover",popupId:"demo-popup-menu",children:l=>a(c.Fragment,{children:[e(y,{variant:"text",...Rt(l),children:e(ee,{sx:{bgcolor:Ve[500],width:28,height:28},src:t,children:r})}),a(We,{...Ot(l),children:[a(h,{onClick:l.close,children:[e(C,{to:"/user/profile",children:"Profile"})," "]}),a(h,{onClick:l.close,children:[e(C,{to:"/user/password",children:"Change Password"})," "]}),e(h,{onClick:l.close,children:"Logout"})]})]})}),pr=d.div`flex justify-center border-b-[1px] border-gray-800 `,fr=d.div`flex gap-4 justify-between  my-4  items-center`,gr=d.div`text-3xl font-satisfy font-extrabold text-blue-900 `,vr=()=>e(pr,{children:a(fr,{children:[e(gr,{style:{textShadow:"#069 1px 0 10px"},children:e(C,{to:"/",children:"StoreForm - in CI/CD ing"})}),e(ir,{}),e(ur,{}),e(xr,{})]})}),xr=()=>{const t=c.useContext(k),r=()=>{t.logout()};return a("div",{children:[!t.state.isLogin&&e(W,{children:a(Q,{variant:"text","aria-label":"text button group",children:[e(y,{children:e(C,{to:"register",className:"  hover:text-purple-500 font-bold",children:"Register"})}),e(y,{children:e(C,{to:"login",className:"  hover:text-purple-500 font-bold",children:"Sign In"})})]})}),t.state.isLogin&&a(Q,{variant:"text","aria-label":"text button group",children:[e(mr,{profileIcon:t.state.user.userCollection.profileIcon,name:t.state.user.userCollection.name}),e(y,{children:e(C,{to:"/",className:"  hover:text-purple-500 ",children:e(P,{title:"Home",arrow:!0,children:e(je,{})})})}),e(y,{children:e(C,{to:"/event/post",className:"  hover:text-purple-500 ",children:e(P,{title:"Post",arrow:!0,children:e(Se,{})})})}),e(y,{onClick:r,className:"  hover:text-purple-500 ",children:e(P,{title:"Logout",arrow:!0,children:e(qe,{})})})]})]})},br=d.div`bg-red-600 text-sm flex `,yr=d.div`grow text-center`,wr=d.button` mr-4 hover:text-white`,Sr=()=>{const[t,r]=c.useState(!0);return e(br,{children:t&&a(W,{children:[e(yr,{children:"Notification infomation"}),e(wr,{onClick:l=>r(!1),children:"X"})]})})},Cr=d.div``,Nr=()=>e(Cr,{children:"ListEvent"}),Er=d.div`flex flex-col`,Pr=d.div`flex justify-center`,L=Bt(({className:t,...r})=>e(P,{...r,classes:{popper:t}}))(({theme:t})=>({[`& .${He.tooltip}`]:{backgroundColor:"#f5f5f9",color:"rgba(0, 0, 0, 0.87)",maxWidth:220,fontSize:16,border:"1px solid #dadde9"}})),x=(t,r=!0)=>{let l=E(t,"yyyy / MM / dd");const s=Vt(new Date,-1),i=Wt(t,s);switch(i){case 0:l="Today";break;case 1:l="Tomorrow";break;default:r&&(l=`${i} days later`);break}return l},ve=({title:t="Start Time",startDate:r=new Date})=>{const l={day:0,time:ge(r)%12*2,ampm:ge(r)>12?1:0},[s,i]=S.useState(l),o=(n,u)=>{u==0&&i({...s,day:Number.parseInt(n.target.value)}),u==1&&i({...s,time:Number.parseInt(n.target.value)}),u==2&&i({...s,ampm:Number.parseInt(n.target.value)})};return a(Er,{children:[a("div",{children:[e(Je,{sx:{color:"action.active",mr:1,mb:.5}}),e("span",{className:" text-gray-600",children:t})]}),a(Pr,{children:[a(U,{variant:"standard",sx:{m:1,minWidth:120,fontSize:15,height:25},id:"demo-simple-select-standard",value:s.day.toString(),onChange:n=>o(n,0),label:"Date",className:"text-center",children:[e(h,{value:0,sx:{fontSize:15},children:e(L,{placement:"right",title:a(S.Fragment,{children:[e("div",{className:"text-gray-400",children:x(g(r,0))}),e("em",{className:"text-gray-600",children:E(g(r,0),"yyyy-MM-dd EEEE")})]}),children:e("button",{children:x(g(r,0))})})}),e(h,{value:1,sx:{fontSize:15},children:e(L,{placement:"right",title:a(S.Fragment,{children:[e("div",{className:"text-gray-400",children:x(g(r,1))}),e("em",{className:"text-gray-600",children:E(g(r,1),"yyyy-MM-dd EEEE")})]}),children:e("button",{children:x(g(r,1))})})}),e(h,{value:2,sx:{fontSize:15},children:e(L,{placement:"right",title:a(S.Fragment,{children:[e("div",{className:"text-gray-400",children:x(g(r,2))}),e("em",{className:"text-gray-600",children:E(g(r,2),"yyyy-MM-dd EEEE")})]}),children:e("button",{children:x(g(r,2),!1)})})}),e(h,{value:3,sx:{fontSize:15},children:e(L,{placement:"right",title:a(S.Fragment,{children:[e("div",{className:"text-gray-400",children:x(g(r,3))}),e("em",{className:"text-gray-600",children:E(g(r,3),"yyyy-MM-dd EEEE")})]}),children:e("button",{children:x(g(r,3),!1)})})}),e(h,{value:4,sx:{fontSize:15},children:e(L,{placement:"right",title:a(S.Fragment,{children:[e("div",{className:"text-gray-400",children:x(g(r,4))}),e("em",{className:"text-gray-600",children:E(g(r,4),"yyyy-MM-dd EEEE")})]}),children:e("button",{children:x(g(r,4),!1)})})}),e(h,{value:5,sx:{fontSize:15},children:e(L,{placement:"right",title:a(S.Fragment,{children:[e("div",{className:"text-gray-400",children:x(g(r,5))}),e("em",{className:"text-gray-600",children:E(g(r,5),"yyyy-MM-dd EEEE")})]}),children:e("button",{children:x(g(r,5),!1)})})}),e(h,{value:6,sx:{fontSize:15},children:e(L,{placement:"right",title:a("div",{children:[e("div",{className:"text-gray-400",children:x(g(r,6))}),e("em",{className:"text-gray-600",children:E(g(r,6),"yyyy-MM-dd EEEE")})]}),children:e("button",{children:x(g(r,6),!1)})})})]}),a(U,{variant:"standard",sx:{m:1,minWidth:65,fontSize:15,height:25},labelId:"demo-simple-select-standard-label",id:"demo-simple-select-standard",value:s.time.toString(),onChange:n=>o(n,1),label:"Date",className:"text-center",children:[e(h,{value:0,sx:{fontSize:15},children:"0:00"}),e(h,{value:1,sx:{fontSize:15},children:"0:30"}),e(h,{value:2,sx:{fontSize:15},children:"1:00"}),e(h,{value:3,sx:{fontSize:15},children:"1:30"}),e(h,{value:4,sx:{fontSize:15},children:"2:00"}),e(h,{value:5,sx:{fontSize:15},children:"2:30"}),e(h,{value:6,sx:{fontSize:15},children:"3:00"}),e(h,{value:7,sx:{fontSize:15},children:"3:30"}),e(h,{value:8,sx:{fontSize:15},children:"4:00"}),e(h,{value:9,sx:{fontSize:15},children:"4:30"}),e(h,{value:10,sx:{fontSize:15},children:"5:00"}),e(h,{value:11,sx:{fontSize:15},children:"5:30"}),e(h,{value:12,sx:{fontSize:15},children:"6:00"}),e(h,{value:13,sx:{fontSize:15},children:"6:30"}),e(h,{value:14,sx:{fontSize:15},children:"7:00"}),e(h,{value:15,sx:{fontSize:15},children:"7:30"}),e(h,{value:16,sx:{fontSize:15},children:"8:00"}),e(h,{value:17,sx:{fontSize:15},children:"8:30"}),e(h,{value:18,sx:{fontSize:15},children:"9:00"}),e(h,{value:19,sx:{fontSize:15},children:"9:30"}),e(h,{value:20,sx:{fontSize:15},children:"10:00"}),e(h,{value:21,sx:{fontSize:15},children:"10:30"}),e(h,{value:22,sx:{fontSize:15},children:"11:00"}),e(h,{value:23,sx:{fontSize:15},children:"11:30"})]}),a(U,{variant:"standard",sx:{m:1,minWidth:50,fontSize:15,height:25},labelId:"demo-simple-select-standard-label",id:"demo-simple-select-standard",value:s.ampm.toString(),onChange:n=>o(n,2),label:"Date",className:"text-center",children:[e(h,{value:0,sx:{fontSize:15},children:"AM"}),e(h,{value:1,sx:{fontSize:15},children:"PM"})]})]})]})},kr=e(Ye,{fontSize:"small"}),Lr=e(Ze,{fontSize:"small"});function Fr(){return e(ye,{multiple:!0,id:"checkboxes-tags",options:Tr,disableCloseOnSelect:!0,getOptionLabel:t=>t.title,renderOption:(t,r,{selected:l})=>a("li",{...t,children:[e(Ke,{icon:kr,checkedIcon:Lr,style:{marginRight:8},checked:l}),r.title]}),style:{width:500},renderInput:t=>e(z,{...t,label:"Description tags",placeholder:""})})}const Tr=[{title:"tag1",year:1994},{title:"tag2",year:1972},{title:"tag3",year:1974},{title:"aTag1",year:2008},{title:"aTag2",year:2008},{title:"aTag3",year:2008}],$r=d.div`w-full`,zr=({title:t,subTitles:r})=>{const[l,s]=c.useState(0);return e($r,{children:a(Xe,{fullWidth:!0,variant:"standard",sx:{m:1,minWidth:120,paddingRight:1},children:[e(Ge,{id:"demo-simple-select-standard-label",children:t}),e(U,{fullWidth:!0,labelId:"demo-simple-select-standard-label",id:"demo-simple-select-standard",value:l,onChange:o=>{s(Number.parseInt(o.target.value))},label:"Age",sx:{textAlign:"center"},children:r.map((o,n)=>e(h,{value:n,sx:{fontSize:15},children:o},n))})]})})},Ir=d.div`mt-[-8px]`,Mr=()=>a(Ir,{children:[a(R,{sx:{display:"flex",alignItems:"flex-end"},children:[e(P,{title:"Address of the event.",arrow:!0,children:e(be,{sx:{color:"action.active",fontSize:40,pb:1}})}),e(zr,{title:"Location",subTitles:["opt0","opt1","opt2"]})]}),e("div",{className:" mt-[-8px]",children:a(Ne,{style:{height:"20rem",width:""},center:[44.65107,-63.582687],zoom:13,scrollWheelZoom:!1,children:[e(Ee,{attribution:'© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),e(re,{position:[44.65107,-63.582687],draggable:!0,autoPanOnFocus:!0,children:a(ae,{children:["Halifax. ",e("br",{})," A beautiful city."]})})]})})]}),Ar=d.div`flex justify-center items-center`,_r=d.form`w-[35rem] border-2 my-8 min-h-[30rem] rounded-lg`,Ur=d.div`m-4 text-center text-3xl font-playfair `,N=d.div`m-4`,Rr=[{img:"https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",title:"Breakfast"},{img:"https://images.unsplash.com/photo-1551782450-a2132b4ba21d",title:"Burger"}],Or=()=>e(Ar,{children:a(_r,{children:[e(Ur,{children:"New"}),e(N,{children:a(R,{sx:{display:"flex",alignItems:"flex-end"},children:[e(he,{sx:{color:"action.active",mr:1,mb:3.3}}),e(z,{fullWidth:!0,id:"input-with-sx",label:"Title*",variant:"standard",helperText:"Title of your post. Length: 6 - 30 characters."})]})}),e(N,{children:a(R,{sx:{display:"flex",alignItems:"flex-end"},children:[e(he,{sx:{color:"action.active",mr:1,mb:3.3}}),e(z,{fullWidth:!0,id:"input-with-sx",label:"Subtitle (optional)",variant:"standard",helperText:"More information about this post. Length: 0 - 50 characters."})]})}),a(N,{children:[a(R,{sx:{display:"flex",alignItems:"flex-end"},children:[e(Qe,{sx:{color:"action.active",mr:1,mb:4.3}}),e(Fr,{})]}),e("label",{className:"text-xs text-gray-500 pl-8",children:"Tags for this event. 1 tag at least."})]}),e(N,{children:e("div",{children:e(ve,{title:"Start Time"})})}),e(N,{children:e("div",{className:" ",children:e(ve,{title:"End Time"})})}),e(N,{children:e(Mr,{})}),a(N,{className:"flex  flex-col justify-center items-center",children:[a(F,{color:"primary","aria-label":"upload picture",component:"label",children:[e("input",{hidden:!0,accept:"image/*",type:"file"}),e(P,{title:"Upload 1 or 2 pictures about this event.",arrow:!0,children:e(De,{})})]}),e("div",{className:" w-full",children:e(et,{cols:2,children:Rr.map(t=>e(tt,{children:e("img",{src:`${t.img}?w=164&h=164&fit=crop&auto=format`,srcSet:`${t.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`,alt:t.title,loading:"lazy"})},t.img))})})]}),e(N,{children:e(y,{fullWidth:!0,variant:"contained",endIcon:e(Se,{}),children:"Submit"})})]})}),Br=d.div`h-[20rem] bg-black bg-bg-puppy-2 bg-cover bg-no-repeat bg-center bg-blend-difference`,Vr=()=>e(Br,{}),Wr=d.div``,jr=()=>e(Wr,{children:["Products","Event","Products","Event"].map((r,l)=>e(qr,{title:r},l))}),qr=({title:t})=>e("div",{children:t}),Hr=rt(t=>{const{expand:r,...l}=t;return e(F,{...l})})(({theme:t,expand:r})=>({transform:r?"rotate(180deg)":"rotate(0deg)",marginLeft:"auto",transition:t.transitions.create("transform",{duration:t.transitions.duration.shortest})}));function $(){const[t,r]=c.useState(!1),l=()=>{r(!t)};return a(at,{sx:{maxWidth:445},children:[e(lt,{avatar:e(ee,{sx:{bgcolor:it[500]},"aria-label":"recipe",children:"R"}),action:e(F,{"aria-label":"settings",children:e(nt,{})}),title:"Best icecream with berries",subheader:"Feb 9, 2023"}),e(st,{component:"img",height:"194",image:"/images/dish-1.jpg",alt:"Paella dish"}),e(me,{children:e(T,{variant:"body2",color:"text.secondary",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ipsam ipsum quasi ad adipisci minus cum, enim, doloremque aliquid possimus modi ea eum optio perferendis repellendus alias quod nulla pariatur!"})}),a(ot,{disableSpacing:!0,children:[e(F,{"aria-label":"add to favorites",children:e(dt,{})}),e(F,{"aria-label":"share",children:e(ct,{})}),e(Hr,{expand:t,onClick:l,"aria-expanded":t,"aria-label":"show more",children:e(ut,{})})]}),e(ht,{in:t,timeout:"auto",unmountOnExit:!0,children:a(me,{children:[e(T,{paragraph:!0,children:"Lorem:"}),e(T,{paragraph:!0,children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Id atque minima voluptatibus voluptates, voluptatum quidem?"}),e(T,{paragraph:!0,children:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam sunt sequi rem itaque quis explicabo quasi illo doloremque suscipit, pariatur, saepe odit aliquam sint laboriosam minima distinctio non, nam mollitia!"}),e(T,{paragraph:!0,children:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore similique illo quasi voluptas ex recusandae id, ad fugiat laborum quo!"}),e(T,{children:"Lorem ipsum dolor sit amet."})]})})]})}const Jr=d.div`grid grid-cols-2 gap-4 my-8`;d.div``;const Kr=()=>a(Jr,{className:"",children:[e($,{}),e($,{}),e($,{}),e($,{}),e($,{}),e($,{})]}),Yr=d.div``,Zr=()=>e(Yr,{children:"RightSidePanel"}),Xr=d.div`h-16 m-auto`,_=d.button`w-[10rem] hover:text-red-500`,Gr=()=>e(Xr,{className:" align-middle font-satisfy text-2xl font-bold border-y-[1px] border-gray-800 ",children:a("div",{className:"flex justify-center h-full",children:[e(_,{children:"hot"}),e(_,{children:"happening"}),e(_,{children:"incoming"}),e(_,{children:"alert"})]})}),Qr=d.div``,Dr=d.div`grid grid-cols-10 w-4/5`,ea=()=>a(Qr,{children:[e(Vr,{}),e(Gr,{}),e("div",{className:"flex justify-center",children:a(Dr,{children:[e(jr,{}),e("div",{className:" col-span-8",children:e(Kr,{})}),e(Zr,{})]})})]}),ta=d.div``,ra=d.div`flex items-center`,G=({title:t,value:r,uid:l,readonly:s,colName:i,collectionName:o})=>{const[n,u]=c.useState("");S.useState(!1);const{enqueueSnackbar:m}=bt(),f=c.useRef(null),p=()=>{f.current&&u(f.current.value)},b=c.useContext(k);return e(ta,{children:a(ra,{children:[e("div",{className:"grow",children:e(z,{inputRef:f,fullWidth:!0,id:"standard-basic",label:t,variant:"standard",disabled:s,defaultValue:r,onChange:p})}),e("div",{className:" self-end",children:e(P,{title:s?"":"Update",sx:{opacity:s?0:100,cursor:s?"default":"pointer"},children:e(W,{children:e(y,{size:"small",onClick:()=>{Pe(l,i,n);const Z=i,X=K().user,ue=X.userCollection;ue[Z]=n;const $e={...X,userCollection:{...ue}};X&&b.update($e),m("Update successfully!",{variant:"success"})},sx:{opacity:s?0:100,cursor:s?"default":"pointer"},children:e(mt,{})})})})})]})})},aa=(t,r,l)=>{const s=It(Yt,"images/rivers.jpg"),i=Mt(s,t);i.on("state_changed",o=>{const n=o.bytesTransferred/o.totalBytes*100;l(n)},o=>{},()=>{At(i.snapshot.ref).then(o=>{r(o)})})},la=d.div`flex justify-center items-center`,ia=d.div`border-2 my-12 w-[30rem] rounded-lg p-8 grid grid-cols-1 gap-3`,na=d.div`text-3xl py-4`,sa=()=>{var f;const[t,r]=c.useState(),[l,s]=c.useState(0),[i,o]=c.useState(""),n=p=>{p.target.files&&r(p.target.files[0])};c.useEffect(()=>{t&&aa(t,o,s)},[t]);const u=c.useContext(k),m=(f=u.state.user.userCredential)==null?void 0:f.user.uid;return c.useEffect(()=>{if(i){const p="profileIcon",b=K().user,Y=b.userCollection;Y[p]=i;const Z={...b,userCollection:{...Y}};b&&u.update(Z),Pe(m,"profileIcon",i)}},[i]),e(la,{children:a(ia,{children:[a("div",{className:"flex justify-center items-center",children:[e(na,{children:"Profile"}),a(F,{color:"primary","aria-label":"upload avatar",component:"label",children:[e("input",{hidden:!0,accept:"image/*",type:"file",onChange:n}),e(P,{title:"Upload profile photo",children:a("div",{className:"relative",children:[e(ee,{sx:{bgcolor:pt[500],margin:1},alt:"Avatar",src:u.state.user.userCollection.profileIcon}),l!=0&&l!=100&&e("div",{className:"absolute top-2 left-2",children:e(we,{color:"info",variant:"determinate",value:l})})]})})]})]}),e(G,{title:"Name",value:u.state.user.userCollection.name,colName:"name",uid:m}),e(G,{title:"Email",readonly:!0,value:u.state.user.userCredential?u.state.user.userCredential.user.email:"",colName:"email",uid:m}),e(G,{title:"Location",value:u.state.user.userCollection.location,colName:"location",uid:m})]})})},xe=({passwordVal:t})=>{const r=[" At least 8 characters"," 1 uppercase"," 1 lowercase"," 1 symbol"," 1 number"],l=/^[A-Z]$/,s=/^[a-z]$/,i=/^[-#!$@£%^&*()_+|~=`{}\[\]:";'<>?,.\/ ]$/,o=/^[0-9]$/,n=[!1,!1,!1,!1];Array.from(t).forEach(m=>{n[0]||(n[0]=l.test(m)),n[1]||(n[1]=s.test(m)),n[2]||(n[2]=i.test(m)),n[3]||(n[3]=o.test(m))});const u=[q.isLength(t,{min:8}),...n];return e("div",{children:r.map((m,f)=>{const p=u[f]?" text-green-600":"text-red-600",b=u[f]?"✓":"✘";return a("div",{children:[a("div",{className:p,children:[b," ",m]})," "]},f)})})},oa=({passwordVal:t,rePasswordVal:r})=>{const l=["- Passwords do NOT match"],s=[t===r];return e("div",{children:l.map((i,o)=>{const n=s[o]?" text-green-600":"text-red-600",u=s[o]?"✓":"✘";return a("div",{children:[a("div",{className:n,children:[u," ",i]})," "]},o)})})},da=t=>q.isLength(t,{max:20,min:6}),ca=t=>q.isEmail(t),Le=t=>q.isStrongPassword(t),Fe=(t,r)=>t===r,ua=d.div`border-[1px] h-14 rounded-lg flex items-center justify-between p-1`,ha=d.input`grow outline-none`,se=({fieldContent:t,userInfo:r,setUserInfo:l})=>{const[s,i]=c.useState(!1),o=p=>{l(b=>t.updateField(b,p.target.value))},n=c.useRef(null),u=c.useRef(null);c.useEffect(()=>{const p=t.fieldname;n.current&&(n.current.style.position=r[p]||t.readonly?"relative":"absolute",n.current.style.fontSize=r[p]||t.readonly?"0.75rem":"1rem",n.current.style.color=r[p]||t.readonly?"gray":"black"),t.fieldname!="rePassword"?i(r[p]!=""&&!t.validateField(r[p])):i(r[p]!=""&&r.password!==r.rePassword),u.current&&t.valSet&&(u.current.value=t.valSet)},[r]);const[m,f]=c.useState(!1);return a("div",{className:"my-4 ",children:[a(ua,{children:[e(t.icon,{className:"align-middle px-1 text-gray-500",fontSize:"large"}),e("div",{className:"block grow pl-2",children:a("div",{className:"flex flex-col","aria-required":!0,children:[e("label",{className:"text-base duration-200 capitalize relative 0.75rem text-gray-600",htmlFor:t.fieldname,ref:n,children:t.fieldTitle}),e(ha,{ref:u,type:!m&&t.fieldVisibleSettable?"password":"text",required:!0,id:t.fieldname,onChange:o})]})}),t.fieldVisibleSettable&&e("div",{className:"mr-2 cursor-pointer text-gray-400",onClick:p=>f(b=>!b),children:m?e(ft,{}):e(gt,{})})]}),a(W,{children:[e("div",{className:"text-sm pl-4 pt-1  ",children:t.fieldInfo}),s&&a("div",{className:"text-sm pl-4 pt-1 text-red-600",children:[t.fieldname==="password"&&e(xe,{passwordVal:r[t.fieldname]}),t.fieldname==="oldPassword"&&e(xe,{passwordVal:r[t.fieldname]}),t.fieldname==="rePassword"&&e(oa,{passwordVal:r.password,rePasswordVal:r.rePassword}),t.fieldname!=="password"&&t.fieldname!=="rePassword"&&t.fieldname!=="oldPassword"&&t.fieldErr.map((p,b)=>e("div",{children:p},b))]})]})]})},oe={name:"",email:"",password:"",oldPassword:"",rePassword:""},ma={fieldname:"name",fieldTitle:"name",readonly:!1,valSet:"",fieldInfo:"- Name will be displayed on your profile.",fieldErr:["- Name length between 6 to 20."],fieldVisibleSettable:!1,icon:vt,updateField:(t,r)=>({...t,name:r}),validateField:da},de={fieldname:"email",fieldTitle:"email",readonly:!1,valSet:"",fieldInfo:"- Email will be used for login.",fieldErr:["- Email address is invalid."],fieldVisibleSettable:!1,icon:xt,updateField:(t,r)=>({...t,email:r}),validateField:ca},ce={fieldname:"password",fieldTitle:"password",readonly:!1,valSet:"",fieldInfo:"",fieldErr:[],fieldVisibleSettable:!0,icon:te,updateField:(t,r)=>({...t,password:r}),validateField:Le},pa={fieldname:"oldPassword",fieldTitle:"OLd Password",readonly:!1,valSet:"",fieldInfo:"",fieldErr:[],fieldVisibleSettable:!0,icon:te,updateField:(t,r)=>({...t,oldPassword:r}),validateField:Le},Te={fieldname:"rePassword",fieldTitle:"Comfirm Password",readonly:!1,valSet:"",fieldInfo:"",fieldErr:[],fieldVisibleSettable:!0,icon:te,updateField:(t,r)=>({...t,rePassword:r}),validateField:()=>!0},O=[ma,de,ce,Te],fa=t=>!(!O[0].validateField(t.name)||!O[1].validateField(t.email)||!O[2].validateField(t.password)||!Fe(t.password,t.rePassword)),ga=[de,ce],V=[{...de,readonly:!0,fieldInfo:""},pa,{...ce,fieldTitle:"New Password"},Te],va=t=>!(!V[1].validateField(t.oldPassword)||!V[2].validateField(t.password)||!Fe(t.password,t.rePassword)),xa=d.div``,ba=d.div`my-4 mx-auto w-[45rem] border-2 rounded-lg px-6 pt-12 bg-white text-black`,ya=()=>{const[t,r]=c.useState(oe),[l,s]=c.useState(!1),[i,o]=c.useState(!1);c.useEffect(()=>{s(va(t))},[t]),le();const n=c.useContext(k),u=async()=>{if(n.state.user.userCredential){const m=await Qt(t);console.log("test old P",m),Zt(n.state.user.userCredential.user.uid,"password",t.password)}};return n.state.user.userCredential&&(V[0].valSet=n.state.user.userCredential.user.email),e(xa,{children:a(ba,{children:[e("div",{className:"text-3xl",children:"Password Change"}),V.map((m,f)=>e(se,{fieldContent:m,setUserInfo:r,userInfo:t},m.fieldname)),i&&e("div",{children:i}),e("button",{className:" disabled:text-gray-400 bg-primary-purple w-full my-2 h-12 rounded-lg text-white hover:bg-primary-purple-lighter",disabled:!l,onClick:u,children:"Change Password"})]})})},wa=d.div`pt-4 py-4 `,Sa=d.div`my-4 mx-auto w-[45rem] border-2 rounded-lg px-6 pt-12 bg-white text-black`,Ca=()=>{const[t,r]=c.useState(oe),[l,s]=c.useState(!1),[i,o]=c.useState(!1);c.useEffect(()=>{s(fa(t))},[t]);const n=le(),u=c.useContext(k),m=async()=>{var p;const f=await Gt(t);(p=f.userCredential)!=null&&p.user.uid?n("/"):o(!0),u.login(f)};return e(wa,{children:a(Sa,{children:[e("div",{className:"text-3xl",children:"Register"}),O.map((f,p)=>e(se,{fieldContent:f,setUserInfo:r,userInfo:t},f.fieldname)),i&&e("div",{children:i}),a("div",{className:"text-sm text-center hover:[&>a]:text-purple-600",children:["By clicking Register, you agree to our ",e("a",{href:"",children:"Terms of Use"})," and",e("a",{href:"",children:" Privacy Policy"})]}),e("button",{className:" disabled:text-gray-400 bg-primary-purple w-full my-2 h-12 rounded-lg text-white hover:bg-primary-purple-lighter",disabled:!l,onClick:m,children:"Create Account"}),a("div",{className:"text-sm text-center mb-4",children:["Already have an account? ",e(C,{to:"/login",className:"hover:text-purple-600",children:"Sign in!"})]})]})})},Na=d.div`py-4`,Ea=d.div`py-4 mx-auto w-[45rem] border-2 rounded-lg px-6 pt-12 bg-white text-black`,Pa=()=>{const[t,r]=c.useState(oe),[l,s]=c.useState(!1),i=le(),o=c.useContext(k);return e(Na,{children:e(Ea,{children:a("form",{onSubmit:async u=>{var f;u.preventDefault();const m=await Xt(t);console.log("login:",m),(f=m.userCredential)!=null&&f.user?(o.login(m),i("/")):s(!0)},children:[e("div",{className:"text-3xl",children:"Login"}),ga.map((u,m)=>e(se,{fieldContent:u,setUserInfo:r,userInfo:t},u.fieldname)),l&&e("div",{className:"pl-4 pb-2 mt-[-8px] text-red-700 text-sm",children:"Email address and password combination is incorrect."}),a("div",{children:[e("label",{htmlFor:"keepsignin",className:"pl-4 align-middle block text-sm pb-4 text-blue-400",children:"Test User: 'online2jerry@gmail.com'; Pwd: '####Ab12'"}),e("input",{type:"checkbox",name:"",id:"keepsignin",className:"w-4 h-4 ml-4 align-middle"}),e("label",{htmlFor:"keepsignin",className:"pl-2 align-middle",children:"Keep me signed in"})]}),a("div",{className:"hover:[&>div>a]:text-purple-800 hover:[&>div>a]:font-bold flex text-sm pl-2",children:[e("div",{className:"p-2",children:e("a",{href:"",children:"Forgot password?"})}),e("div",{className:"p-2 ",children:e(C,{to:"/register",children:"No account? Register free."})})]}),e("button",{type:"submit",className:" bg-primary-purple w-full my-2 h-12 rounded-lg text-white hover:bg-primary-purple-lighter",children:"Login"})]})})})};function ka(){const t=c.useContext(k);return console.log("len:",localStorage.length),c.useEffect(()=>{localStorage.setItem(ke,JSON.stringify(t.state.user)),console.log(t.state.user.userCollection)},[t.state]),e("div",{className:"",children:a(St,{children:[e(Sr,{}),e(vr,{}),a(jt,{children:[a(w,{path:"/",children:[e(w,{index:!0,element:e(ea,{})}),e(w,{path:"login",element:e(Pa,{})}),e(w,{path:"register",element:e(Ca,{})}),e(w,{path:"user/profile",element:e(sa,{})}),e(w,{path:"user/password",element:e(ya,{})})]}),a(w,{path:"/event",children:[e(w,{index:!0,element:e(Nr,{})}),e(w,{path:"post",element:e(Or,{})})]})]}),e(Jt,{})]})})}wt.createRoot(document.getElementById("root")).render(e(S.StrictMode,{children:e(rr,{children:e(yt,{maxSnack:3,children:e(ka,{})})})}));
