import{r as o,a as L}from"./react-728330cd.js";import"./leaflet-08cdb987.js";import{r as E}from"./react-dom-1caf2c99.js";function s(e,n){const t=o.useRef(n);o.useEffect(function(){n!==t.current&&e.attributionControl!=null&&(t.current!=null&&e.attributionControl.removeAttribution(t.current),n!=null&&e.attributionControl.addAttribution(n)),t.current=n},[e,n])}const R=1;function j(e){return Object.freeze({__version:R,map:e})}function A(e,n){return Object.freeze({...e,...n})}const l=o.createContext(null),O=l.Provider;function d(){const e=o.useContext(l);if(e==null)throw new Error("No context provided: useLeafletContext() can only be used in a descendant of <MapContainer>");return e}function x(e){function n(t,r){const{instance:u,context:c}=e(t).current;return o.useImperativeHandle(r,()=>u),t.children==null?null:L.createElement(O,{value:c},t.children)}return o.forwardRef(n)}function b(e){function n(t,r){const[u,c]=o.useState(!1),{instance:a}=e(t,c).current;o.useImperativeHandle(r,()=>a),o.useEffect(function(){u&&a.update()},[a,u,t.children]);const i=a._contentNode;return i?E.createPortal(t.children,i):null}return o.forwardRef(n)}function H(e){function n(t,r){const{instance:u}=e(t).current;return o.useImperativeHandle(r,()=>u),null}return o.forwardRef(n)}function m(e,n){const t=o.useRef();o.useEffect(function(){return n!=null&&e.instance.on(n),t.current=n,function(){t.current!=null&&e.instance.off(t.current),t.current=null}},[e,n])}function y(e,n){const t=e.pane??n.pane;return t?{...e,pane:t}:e}function I(e,n){return function(r,u){const c=d(),a=e(y(r,c),c);return s(c.map,r.attribution),m(a.current,r.eventHandlers),n(a.current,c,r,u),a}}function D(e,n,t){return Object.freeze({instance:e,context:n,container:t})}function f(e,n){return n==null?function(r,u){const c=o.useRef();return c.current||(c.current=e(r,u)),c}:function(r,u){const c=o.useRef();c.current||(c.current=e(r,u));const a=o.useRef(r),{instance:i}=c.current;return o.useEffect(function(){a.current!==r&&(n(i,r,a.current),a.current=r)},[i,r,u]),c}}function w(e,n){o.useEffect(function(){return(n.layerContainer??n.map).addLayer(e.instance),function(){var c;(c=n.layerContainer)==null||c.removeLayer(e.instance),n.map.removeLayer(e.instance)}},[n,e])}function v(e){return function(t){const r=d(),u=e(y(t,r),r);return s(r.map,t.attribution),m(u.current,t.eventHandlers),w(u.current,r),u}}function P(e,n){const t=f(e,n),r=v(t);return x(r)}function _(e,n){const t=f(e),r=I(t,n);return b(r)}function k(e,n){const t=f(e,n),r=v(t);return H(r)}function T(e,n,t){const{opacity:r,zIndex:u}=n;r!=null&&r!==t.opacity&&e.setOpacity(r),u!=null&&u!==t.zIndex&&e.setZIndex(u)}export{O as L,P as a,D as b,j as c,_ as d,A as e,k as f,T as g,d as u,y as w};
