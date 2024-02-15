import{r as e,j as r,q as j,t as c,Z as D,_ as k,bc as C,B as _,h as S,bd as L,T as K,d as M}from"./assets/index-BDcs8OaA.js";(function(){try{var s=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(s._sentryDebugIds=s._sentryDebugIds||{},s._sentryDebugIds[o]="989eca03-43ae-41b6-941b-54faa641e65f",s._sentryDebugIdIdentifier="sentry-dbid-989eca03-43ae-41b6-941b-54faa641e65f")}catch{}})();const R=e.memo(({error:s,onChange:o,value:d,onKeyDown:a,...n})=>r.jsx(j,{stretch:!0,border:"rounded",error:s?c("validation.invalidPassword"):void 0,icon:"lock",onChange:o,onKeyDown:a,placeholder:c("common.password"),type:"password",value:d,...n})),T=60*1e3,B=({buttonDisabled:s,children:o,inputAssets:d,isOpened:a,onClose:n,onConfirm:f})=>{const{keystore:m,signingRequired:x,phrase:p}=D(),[v,i]=e.useState(!1),[w,l]=e.useState(!1),[u,y]=e.useState(""),b=e.useMemo(()=>x(d),[d,x]);e.useEffect(()=>{let t;return a&&(t=setTimeout(()=>{n()},T)),()=>{clearTimeout(t)}},[a,n]),e.useEffect(()=>{y(""),i(!1),l(!1)},[a]);const g=e.useCallback(()=>{!f||!a||f()},[f,a]),E=e.useCallback(()=>{n&&(y(""),i(!1),l(!1),n())},[n]),h=e.useCallback(async()=>{const{decryptFromKeystore:t}=await k(()=>import("./Hc5z36AZ.js"),__vite__mapDeps([0,1,2]));if(!b)return g();if(m){if(!u)return i(!0);l(!0);try{await t(m,u)===p?g():i(!0)}catch{i(!0)}l(!1)}},[b,m,u,g,p]),P=e.useCallback(t=>{t.code==="Enter"&&!w&&h()},[h,w]);return r.jsx(C,{isOpened:a,onClose:E,title:c("common.confirm"),children:r.jsxs(_,{col:!0,className:S("gap-y-4 md:min-w-[350px]",{"min-w-[350px]":L}),children:[o&&r.jsx("div",{children:o}),b&&r.jsxs(_,{py:2,children:[r.jsx(R,{onChange:({target:t})=>y(t.value),onKeyDown:P,value:u}),v&&r.jsx(K,{className:"ml-2",fontWeight:"medium",textStyle:"caption",variant:"orange",children:c("views.walletModal.wrongPassword")})]}),r.jsx(M,{stretch:!0,disabled:s,loading:w,onClick:h,size:"md",variant:"fancy",children:c("common.confirm")})]})})};export{B as C};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["Hc5z36AZ.js","assets/index-BDcs8OaA.js","assets/index-PWKo4Vxk.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
