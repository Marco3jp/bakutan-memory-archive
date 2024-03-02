import{r as n,j as e}from"./jsx-runtime-iDN_6-uG.js";import{u as p,h as x,j as y,k as S,n as j,M as f,L as w,O as g,S as k}from"./components-xKLyvRr5.js";/**
 * @remix-run/react v2.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */let a="positions";function M({getKey:r,...l}){let{isSpaMode:c}=p(),o=x(),u=y();S({getKey:r,storageKey:a});let d=n.useMemo(()=>{if(!r)return null;let t=r(o,u);return t!==o.key?t:null},[]);if(c)return null;let m=((t,h)=>{if(!window.history.state||!window.history.state.key){let s=Math.random().toString(32).slice(2);window.history.replaceState({key:s},"")}try{let i=JSON.parse(sessionStorage.getItem(t)||"{}")[h||window.history.state.key];typeof i=="number"&&window.scrollTo(0,i)}catch(s){console.error(s),sessionStorage.removeItem(t)}}).toString();return n.createElement("script",j({},l,{suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:`(${m})(${JSON.stringify(a)}, ${JSON.stringify(d)})`}}))}function L(){return e.jsxs("html",{lang:"en",children:[e.jsxs("head",{children:[e.jsx("meta",{charSet:"utf-8"}),e.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),e.jsx(f,{}),e.jsx(w,{}),e.jsx("title",{children:"bakutan memory archive"})]}),e.jsxs("body",{children:[e.jsx(g,{}),e.jsx(M,{}),e.jsx(k,{})]})]})}export{L as default};
