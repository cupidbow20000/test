import{d as o}from"./xrvJovm6.js";import{r as t}from"./assets/index-BDcs8OaA.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="acdbc6f4-b39e-42fd-a878-e2d14c9c4b2f",e._sentryDebugIdIdentifier="sentry-dbid-acdbc6f4-b39e-42fd-a878-e2d14c9c4b2f")}catch{}})();function b(e,n=0,r){return t.useCallback(o(e,n,r),[e,n,r])}function y(e,n=0,r){const c=t.useRef(e),[s,u]=t.useState(e),d=b(f=>u(f),n,r);return t.useEffect(()=>{if(e!==c.current)return d(e),c.current=e,d.cancel},[e]),s}export{y as a,b as u};