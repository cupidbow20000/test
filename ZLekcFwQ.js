import{C as S,r as c,x as u}from"./assets/index-BDcs8OaA.js";(function(){try{var s=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(s._sentryDebugIds=s._sentryDebugIds||{},s._sentryDebugIds[t]="fcf5c61c-3d15-479d-89de-33122bef6186",s._sentryDebugIdIdentifier="sentry-dbid-fcf5c61c-3d15-479d-89de-33122bef6186")}catch{}})();const m=s=>{const{data:t=[],isFetching:i}=S(s),[d,r]=c.useMemo(()=>t.reduce((e,{status:p,asset:f})=>{const[g,b]=f.split("."),o=u.fromStringSync(f),n=u.fromStringSync(`${g}/${b}`),l=p.toLowerCase()==="staged";return l&&o&&(o.type=`Staged - ${o.type}`),l&&n&&(n.type=`Staged - ${n.type}`),o&&e[0].push(o),n&&e[1].push(n),e},[[],[]])??[[],[]],[t]),[y,a]=c.useMemo(()=>[d.filter(({type:e})=>!e.includes("Staged"))??[],r.filter(({type:e})=>!e.includes("Staged"))??[]],[d,r]);return{allPoolAssets:d,allSynthAssets:r,pools:t,poolsLoading:i,synthAssets:a,poolAssets:y}};export{m as u};
