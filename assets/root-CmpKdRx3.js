import{o as p,p as x,q as y,t as S,r as n,_ as f,n as e,M as j,L as w,O as g,S as k}from"./components-DYI7IJ3_.js";/**
 * @remix-run/react v2.15.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */let a="positions";function v({getKey:r,...l}){let{isSpaMode:c}=p(),o=x(),u=y();S({getKey:r,storageKey:a});let d=n.useMemo(()=>{if(!r)return null;let t=r(o,u);return t!==o.key?t:null},[]);if(c)return null;let h=((t,m)=>{if(!window.history.state||!window.history.state.key){let s=Math.random().toString(32).slice(2);window.history.replaceState({key:s},"")}try{let i=JSON.parse(sessionStorage.getItem(t)||"{}")[m||window.history.state.key];typeof i=="number"&&window.scrollTo(0,i)}catch(s){console.error(s),sessionStorage.removeItem(t)}}).toString();return n.createElement("script",f({},l,{suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:`(${h})(${JSON.stringify(a)}, ${JSON.stringify(d)})`}}))}const M="/bakutan-memory-archive/assets/favicon-DqTo5yjB.ico";function b(){return e.jsxs("html",{lang:"ja",children:[e.jsxs("head",{children:[e.jsx("meta",{charSet:"utf-8"}),e.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),e.jsx(j,{}),e.jsx("link",{rel:"icon",href:M}),e.jsx(w,{}),e.jsx("title",{children:"bakutan memory archive"})]}),e.jsxs("body",{children:[e.jsx(g,{}),e.jsx(v,{}),e.jsx(k,{})]})]})}export{b as default};
