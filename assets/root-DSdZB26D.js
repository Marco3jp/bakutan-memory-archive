import{r as n,j as e}from"./jsx-runtime-Qx4uyPea.js";import{l as p,n as x,o as y,p as f,_ as j,M as S,L as w,O as g,S as k}from"./components-DgBabXgl.js";/**
 * @remix-run/react v2.15.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */let a="positions";function v({getKey:r,...l}){let{isSpaMode:c}=p(),o=x(),u=y();f({getKey:r,storageKey:a});let m=n.useMemo(()=>{if(!r)return null;let t=r(o,u);return t!==o.key?t:null},[]);if(c)return null;let d=((t,h)=>{if(!window.history.state||!window.history.state.key){let s=Math.random().toString(32).slice(2);window.history.replaceState({key:s},"")}try{let i=JSON.parse(sessionStorage.getItem(t)||"{}")[h||window.history.state.key];typeof i=="number"&&window.scrollTo(0,i)}catch(s){console.error(s),sessionStorage.removeItem(t)}}).toString();return n.createElement("script",j({},l,{suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:`(${d})(${JSON.stringify(a)}, ${JSON.stringify(m)})`}}))}const M="/bakutan-memory-archive/assets/favicon-DqTo5yjB.ico";function L(){return e.jsxs("html",{lang:"ja",children:[e.jsxs("head",{children:[e.jsx("meta",{charSet:"utf-8"}),e.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),e.jsx(S,{}),e.jsx("link",{rel:"icon",href:M}),e.jsx(w,{}),e.jsx("title",{children:"bakutan memory archive"})]}),e.jsxs("body",{children:[e.jsx(g,{}),e.jsx(v,{}),e.jsx(k,{})]})]})}export{L as default};
