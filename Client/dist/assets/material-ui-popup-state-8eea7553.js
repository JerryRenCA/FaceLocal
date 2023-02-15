import{p}from"./prop-types-4d501b15.js";import{r as c}from"./react-728330cd.js";function v(n){if(typeof window>"u")return n;const t=c.useRef(null);return c.useLayoutEffect(()=>{t.current=n}),c.useCallback((...u)=>{var s;(s=t.current)===null||s===void 0||s.call(t,...u)},[])}const N={};function U(n,t){N[n]||(N[n]=!0,console.error("[material-ui-popup-state] WARNING",t))}const M={isOpen:!1,setAnchorElUsed:!1,anchorEl:void 0,anchorPosition:void 0,hovered:!1,focused:!1,_openEventType:null,_childPopupState:null,_deferNextOpen:!1,_deferNextClose:!1};function q({parentPopupState:n,popupId:t,variant:u,disableAutoFocus:s}){const d=c.useRef(!0);c.useEffect(()=>(d.current=!0,()=>{d.current=!1}),[]);const[f,a]=c.useState(M),i=c.useCallback(o=>{d.current&&a(o)},[]),y=c.useCallback(o=>i(e=>({...e,setAnchorElUsed:!0,anchorEl:o??void 0})),[]),R=v(o=>(f.isOpen?b(o):E(o),f)),E=v(o=>{const e=o instanceof Element?void 0:o,r=o instanceof Element?o:(o==null?void 0:o.currentTarget)instanceof Element?o.currentTarget:void 0;if((e==null?void 0:e.type)==="touchstart"){i(l=>({...l,_deferNextOpen:!0}));return}const C=e==null?void 0:e.clientX,T=e==null?void 0:e.clientY,B=typeof C=="number"&&typeof T=="number"?{left:C,top:T}:void 0,P=l=>{if(!o&&!l.setAnchorElUsed&&U("missingEventOrAnchorEl","eventOrAnchorEl should be defined if setAnchorEl is not used"),n){if(!n.isOpen)return l;setTimeout(()=>n._setChildPopupState(m))}const g={...l,isOpen:!0,anchorPosition:B,hovered:(e==null?void 0:e.type)==="mouseover"||l.hovered,focused:(e==null?void 0:e.type)==="focus"||l.focused,_openEventType:e==null?void 0:e.type};return e!=null&&e.currentTarget?l.setAnchorElUsed||(g.anchorEl=e==null?void 0:e.currentTarget):r&&(g.anchorEl=r),g};i(l=>l._deferNextOpen?(setTimeout(()=>i(P),0),{...l,_deferNextOpen:!1}):P(l))}),h=o=>{const{_childPopupState:e}=o;return setTimeout(()=>{e==null||e.close(),n==null||n._setChildPopupState(null)}),{...o,isOpen:!1,hovered:!1,focused:!1}},b=v(o=>{const e=o instanceof Element?void 0:o;if((e==null?void 0:e.type)==="touchstart"){i(r=>({...r,_deferNextClose:!0}));return}i(r=>r._deferNextClose?(setTimeout(()=>i(h),0),{...r,_deferNextClose:!1}):h(r))}),S=c.useCallback((o,e)=>{o?E(e):b(e)},[]),k=v(o=>{const{relatedTarget:e}=o;i(r=>r.hovered&&!(e instanceof Element&&_(e,m))?r.focused?{...r,hovered:!1}:h(r):r)}),w=v(o=>{if(!o)return;const{relatedTarget:e}=o;i(r=>r.focused&&!(e instanceof Element&&_(e,m))?r.hovered?{...r,focused:!1}:h(r):r)}),F=c.useCallback(o=>i(e=>({...e,_childPopupState:o})),[]),m={...f,setAnchorEl:y,popupId:t,variant:u,open:E,close:b,toggle:R,setOpen:S,onBlur:w,onMouseLeave:k,disableAutoFocus:s??Boolean(f.hovered||f.focused),_setChildPopupState:F};return m}function A({isOpen:n,popupId:t,variant:u}){return{...u==="popover"?{"aria-haspopup":!0,"aria-controls":n&&t!=null?t:void 0}:u==="popper"?{"aria-describedby":n&&t!=null?t:void 0}:void 0}}function X(n){return{...A(n),onClick:n.open,onTouchStart:n.open}}function Y({isOpen:n,anchorEl:t,anchorPosition:u,close:s,popupId:d,onMouseLeave:f,disableAutoFocus:a,_openEventType:i}){return{id:d,anchorEl:t,anchorPosition:u,anchorReference:i==="contextmenu"?"anchorPosition":"anchorEl",open:n,onClose:s,onMouseLeave:f,...a&&{autoFocus:!1,disableAutoFocusItem:!0,disableAutoFocus:!0,disableEnforceFocus:!0,disableRestoreFocus:!0}}}function I(n,{popupId:t}){if(!t)return null;const u=typeof n.getRootNode=="function"?n.getRootNode():document;return typeof u.getElementById=="function"?u.getElementById(t):null}function _(n,t){const{anchorEl:u,_childPopupState:s}=t;return x(u,n)||x(I(n,t),n)||s!=null&&_(n,s)}function x(n,t){if(!n)return!1;for(;t;){if(t===n)return!0;t=t.parentElement}return!1}function L({children:n,popupId:t,variant:u,parentPopupState:s,disableAutoFocus:d}){const f=q({popupId:t,variant:u,parentPopupState:s,disableAutoFocus:d}),a=n(f);return a??null}L.propTypes={children:p.func.isRequired,popupId:p.string,variant:p.oneOf(["popover","popper"]).isRequired,parentPopupState:p.object,disableAutoFocus:p.bool};export{L as P,Y as a,X as b};
