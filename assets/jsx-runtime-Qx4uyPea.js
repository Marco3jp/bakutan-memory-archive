function N(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const u in r)if(u!=="default"&&!(u in e)){const f=Object.getOwnPropertyDescriptor(r,u);f&&Object.defineProperty(e,u,f.get?f:{enumerable:!0,get:()=>r[u]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}function U(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var j={exports:{}},h={},g={exports:{}},o={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var y=Symbol.for("react.element"),V=Symbol.for("react.portal"),q=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),z=Symbol.for("react.profiler"),B=Symbol.for("react.provider"),H=Symbol.for("react.context"),W=Symbol.for("react.forward_ref"),J=Symbol.for("react.suspense"),Y=Symbol.for("react.memo"),G=Symbol.for("react.lazy"),w=Symbol.iterator;function K(e){return e===null||typeof e!="object"?null:(e=w&&e[w]||e["@@iterator"],typeof e=="function"?e:null)}var x={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,P={};function p(e,t,n){this.props=e,this.context=t,this.refs=P,this.updater=n||x}p.prototype.isReactComponent={};p.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};p.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function I(){}I.prototype=p.prototype;function S(e,t,n){this.props=e,this.context=t,this.refs=P,this.updater=n||x}var E=S.prototype=new I;E.constructor=S;C(E,p.prototype);E.isPureReactComponent=!0;var O=Array.isArray,T=Object.prototype.hasOwnProperty,R={current:null},D={key:!0,ref:!0,__self:!0,__source:!0};function A(e,t,n){var r,u={},f=null,c=null;if(t!=null)for(r in t.ref!==void 0&&(c=t.ref),t.key!==void 0&&(f=""+t.key),t)T.call(t,r)&&!D.hasOwnProperty(r)&&(u[r]=t[r]);var s=arguments.length-2;if(s===1)u.children=n;else if(1<s){for(var i=Array(s),a=0;a<s;a++)i[a]=arguments[a+2];u.children=i}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)u[r]===void 0&&(u[r]=s[r]);return{$$typeof:y,type:e,key:f,ref:c,props:u,_owner:R.current}}function Q(e,t){return{$$typeof:y,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function b(e){return typeof e=="object"&&e!==null&&e.$$typeof===y}function X(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var $=/\/+/g;function v(e,t){return typeof e=="object"&&e!==null&&e.key!=null?X(""+e.key):t.toString(36)}function _(e,t,n,r,u){var f=typeof e;(f==="undefined"||f==="boolean")&&(e=null);var c=!1;if(e===null)c=!0;else switch(f){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case y:case V:c=!0}}if(c)return c=e,u=u(c),e=r===""?"."+v(c,0):r,O(u)?(n="",e!=null&&(n=e.replace($,"$&/")+"/"),_(u,t,n,"",function(a){return a})):u!=null&&(b(u)&&(u=Q(u,n+(!u.key||c&&c.key===u.key?"":(""+u.key).replace($,"$&/")+"/")+e)),t.push(u)),1;if(c=0,r=r===""?".":r+":",O(e))for(var s=0;s<e.length;s++){f=e[s];var i=r+v(f,s);c+=_(f,t,n,i,u)}else if(i=K(e),typeof i=="function")for(e=i.call(e),s=0;!(f=e.next()).done;)f=f.value,i=r+v(f,s++),c+=_(f,t,n,i,u);else if(f==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return c}function d(e,t,n){if(e==null)return e;var r=[],u=0;return _(e,r,"","",function(f){return t.call(n,f,u++)}),r}function Z(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var l={current:null},m={transition:null},ee={ReactCurrentDispatcher:l,ReactCurrentBatchConfig:m,ReactCurrentOwner:R};function F(){throw Error("act(...) is not supported in production builds of React.")}o.Children={map:d,forEach:function(e,t,n){d(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return d(e,function(){t++}),t},toArray:function(e){return d(e,function(t){return t})||[]},only:function(e){if(!b(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};o.Component=p;o.Fragment=q;o.Profiler=z;o.PureComponent=S;o.StrictMode=M;o.Suspense=J;o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ee;o.act=F;o.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=C({},e.props),u=e.key,f=e.ref,c=e._owner;if(t!=null){if(t.ref!==void 0&&(f=t.ref,c=R.current),t.key!==void 0&&(u=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(i in t)T.call(t,i)&&!D.hasOwnProperty(i)&&(r[i]=t[i]===void 0&&s!==void 0?s[i]:t[i])}var i=arguments.length-2;if(i===1)r.children=n;else if(1<i){s=Array(i);for(var a=0;a<i;a++)s[a]=arguments[a+2];r.children=s}return{$$typeof:y,type:e.type,key:u,ref:f,props:r,_owner:c}};o.createContext=function(e){return e={$$typeof:H,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:B,_context:e},e.Consumer=e};o.createElement=A;o.createFactory=function(e){var t=A.bind(null,e);return t.type=e,t};o.createRef=function(){return{current:null}};o.forwardRef=function(e){return{$$typeof:W,render:e}};o.isValidElement=b;o.lazy=function(e){return{$$typeof:G,_payload:{_status:-1,_result:e},_init:Z}};o.memo=function(e,t){return{$$typeof:Y,type:e,compare:t===void 0?null:t}};o.startTransition=function(e){var t=m.transition;m.transition={};try{e()}finally{m.transition=t}};o.unstable_act=F;o.useCallback=function(e,t){return l.current.useCallback(e,t)};o.useContext=function(e){return l.current.useContext(e)};o.useDebugValue=function(){};o.useDeferredValue=function(e){return l.current.useDeferredValue(e)};o.useEffect=function(e,t){return l.current.useEffect(e,t)};o.useId=function(){return l.current.useId()};o.useImperativeHandle=function(e,t,n){return l.current.useImperativeHandle(e,t,n)};o.useInsertionEffect=function(e,t){return l.current.useInsertionEffect(e,t)};o.useLayoutEffect=function(e,t){return l.current.useLayoutEffect(e,t)};o.useMemo=function(e,t){return l.current.useMemo(e,t)};o.useReducer=function(e,t,n){return l.current.useReducer(e,t,n)};o.useRef=function(e){return l.current.useRef(e)};o.useState=function(e){return l.current.useState(e)};o.useSyncExternalStore=function(e,t,n){return l.current.useSyncExternalStore(e,t,n)};o.useTransition=function(){return l.current.useTransition()};o.version="18.3.1";g.exports=o;var k=g.exports;const te=U(k),ie=N({__proto__:null,default:te},[k]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var re=k,ne=Symbol.for("react.element"),ue=Symbol.for("react.fragment"),oe=Object.prototype.hasOwnProperty,fe=re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ce={key:!0,ref:!0,__self:!0,__source:!0};function L(e,t,n){var r,u={},f=null,c=null;n!==void 0&&(f=""+n),t.key!==void 0&&(f=""+t.key),t.ref!==void 0&&(c=t.ref);for(r in t)oe.call(t,r)&&!ce.hasOwnProperty(r)&&(u[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)u[r]===void 0&&(u[r]=t[r]);return{$$typeof:ne,type:e,key:f,ref:c,props:u,_owner:fe.current}}h.Fragment=ue;h.jsx=L;h.jsxs=L;j.exports=h;var se=j.exports;export{ie as R,te as a,U as g,se as j,k as r};
