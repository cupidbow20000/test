import{u as B,r as i,j as t,H as C,be as L,t as s,d as T,c as _,o as I,X as D,bf as g,k as m,bg as R,U as $,aT as z,bh as P,B as w,a8 as M,T as V,q as W,L as E}from"./assets/index-BDcs8OaA.js";import{S as F}from"./x-sCoUT-.js";import{T as N}from"./V7rr6QXu.js";import{g as h,u as G,a as O,S as K}from"./-Kbu4JQb.js";import{n as j}from"./5KTCd7VM.js";import"./lTzDYV02.js";import"./qKy98dVq.js";import"./tX9VNdav.js";import"./0Xwqv7fW.js";import"./ZLekcFwQ.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[n]="7996e88e-0936-4ba2-b5a0-8e77b124520a",o._sentryDebugIdIdentifier="sentry-dbid-7996e88e-0936-4ba2-b5a0-8e77b124520a")}catch{}})();const Q=o=>{const{setWatchList:n,nodeWatchList:a}=B(),l=i.useCallback(e=>{if(!a.includes(e))n([e,...a]);else{const u=a.filter(p=>p!==e);n(u)}},[n,a]);return i.useMemo(()=>[{id:"Bookmark",Header:()=>t.jsx(C,{className:"group-hover:text-dark-typo-primary",color:"secondary",iconName:"refresh",onClick:o,size:12}),align:"center",disableSortBy:!0,accessor:e=>e,Cell:({cell:{value:e}})=>{const r=a.includes(e.node_address);return t.jsx(L,{className:"w-fit m-auto",content:r?s("views.nodes.removeFromList"):s("views.nodes.addToWatch"),children:t.jsx(C,{color:r?"pink":"secondary",iconHoverHighlight:!1,iconName:r?"heartFilled":"heart",onClick:u=>{l(e.node_address),u.stopPropagation(),u.preventDefault()},size:16})})}},{id:"Address",Header:()=>s("common.address"),align:"center",accessor:e=>e.node_address,disableSortBy:!0,Cell:({cell:{value:e}})=>t.jsx(T,{className:"!px-2 justify-items-start",onClick:r=>{_(e),r.stopPropagation(),r.preventDefault()},rightIcon:t.jsx(I,{name:"copy",size:16}),tooltip:s("common.copy"),tooltipClasses:"mx-auto w-fit",transform:"none",variant:"borderlessTint",children:D(e,6,4)})},{id:"Version",Header:()=>s("views.nodes.version"),accessor:"version"},{id:"IP",Header:()=>"IP",accessor:"ip_address",minScreenSize:g.md,disableSortBy:!0},{id:"Rewards",Header:()=>s("views.nodes.rewards"),accessor:e=>new m(e.current_award).div(1e8),Cell:({cell:{value:e}})=>e.toCurrency(""),minScreenSize:g.md,sortType:h("Rewards")},{id:"Slash",Header:()=>s("views.nodes.slash"),accessor:e=>new m(e.slash_points),Cell:({cell:{value:e}})=>e.toCurrency(""),minScreenSize:g.md,sortType:h("Slash")},{id:"Bond",Header:()=>s("views.nodes.bond"),accessor:e=>new m(e.total_bond).div(1e8),Cell:({cell:{value:e}})=>e.toCurrency(""),sortType:h("Bond")},{id:"ActiveBlock",Header:()=>"Active Block",accessor:e=>new m(e.active_block_height),Cell:({cell:{value:e}})=>e.toCurrency(""),minScreenSize:g.md,sortType:h("ActiveBlock")}],[o,a,l])},X=()=>{const o=G(),{data:n}=R(),{totalBond:a,totalActiveBond:l,totalStandbyBond:d,bondingAPYLabel:e}=O(),r=i.useMemo(()=>[{iconName:"chartPie",color:"yellow",label:s("views.nodes.totalBond"),value:`${o(a.getValue("string"))} (${a.toAbbreviation(1)} ᚱ)`,tooltip:s("views.nodes.detail.totalBond")},{iconName:"lightning",color:"pink",label:s("views.nodes.detail.activeBond"),value:`${o(l.getValue("string"))} (${l.toAbbreviation(1)} ᚱ)`,tooltip:s("views.nodes.detail.activeBondTooltip")},{iconName:"wifi",color:"red",label:s("views.nodes.detail.standbyBond"),value:`${o(d.getValue("string"))} (${d.toAbbreviation(1)} ᚱ)`,tooltip:s("views.nodes.detail.standbyBondTooltip")},{iconName:"chartArea",color:"purple",label:s("views.nodes.detail.bondingAPY"),value:e},{iconName:"chartArea2",color:"green",label:s("views.nodes.detail.dailyBondRewards"),value:`${o(new m({value:n?.blockRewards?.bondReward||"0",decimal:8}).mul(14400).getValue("string"))} `},{iconName:"fire",color:"blueLight",label:s("views.nodes.detail.nextChurnHeight"),value:new m(n?.nextChurnHeight||0).getValue("number").toFixed(1)}],[o,a,l,d,e,n]);return t.jsx(K,{scrollable:!0,itemWidth:265,list:r})},k=[{id:"Bond",desc:!0}],Y=()=>{const o=$(),{nodeWatchList:n}=B(),[a,l]=i.useState(0),[d,e]=i.useState(""),{data:r,refetch:u,isLoading:p,isFetching:x}=z(),f=Q(u),b=i.useMemo(()=>r||[],[r]),A=i.useCallback(c=>{e(c.target.value)},[]),v=i.useMemo(()=>b.filter(c=>n.includes(c.node_address)),[n,b]),H=i.useMemo(()=>{const c=b.filter(y=>y.status===j[a]);return d?c.filter(y=>y.node_address.toLowerCase().includes(d.toLowerCase())):c},[b,d,a]),S=i.useCallback(({original:c})=>{o(P(c.node_address))},[o]);return t.jsxs(w,{col:!0,children:[t.jsx(M,{content:s("views.nodes.description"),keywords:" THUNDERChain, Nodes, Overview, Management, DEFI, DEX",title:s("views.nodes.title")}),t.jsx(X,{}),v?.length>0&&t.jsxs(w,{col:!0,className:"mt-4 mb-4",children:[t.jsx(V,{className:"mb-2 text-light-typo-primary dark:text-dark-typo-primary",children:`${s("views.nodes.watchList")} (${v.length})`}),t.jsx(N,{sortable:!0,columns:f,data:v,initialSort:k,loading:p||x,onRowClick:S})]}),t.jsxs(w,{col:!0,align:"start",className:"md:my-8 gap-4 !my-4 flex-grow lg:flex-row lg:justify-between",justify:"between",children:[t.jsxs(w,{alignCenter:!0,justify:"between",children:[t.jsx("div",{className:"mx-2.5",children:t.jsx(W,{border:"rounded",icon:"search",onChange:A,placeholder:"Search node address",value:d})}),t.jsx(E,{className:"no-underline",to:"/node-manager",children:t.jsx(T,{size:"sm",variant:"outlineSecondary",children:s("common.manage")})})]}),t.jsx("div",{className:"flex mx-[10px]",children:t.jsx(F,{activeIndex:a,onChange:l,options:j})})]}),t.jsx(N,{sortable:!0,columns:f,data:H,initialSort:k,loading:p||x,onRowClick:S})]})},ie=Y;export{ie as default};
