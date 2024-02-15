import{j as e,B as n,d as y,o as b,t as c,r as d,bV as R,_ as Z,s as ee,cK as se,ct as te,T as m,bx as D,h as f,cM as x,U as W,aU as re,ac as I,bf as S,bu as P,c8 as L,x as k,aS as H,cx as z,a9 as B,c0 as O,m as ae,p as ne,b$ as oe,v as le,u as E,aQ as ie,q as ce,cN as de,a8 as me}from"./assets/index-BDcs8OaA.js";import{u as ue}from"./PQMoyBaT.js";import{P as he,a as pe,S as M,b as F,u as $,C as K,W as Q}from"./w-Z_W1-0.js";import{T as xe}from"./V7rr6QXu.js";import{u as A}from"./tX9VNdav.js";import{C as ge}from"./9dmfkY9x.js";import"./js8T8Wro.js";import"./D3jIKMmL.js";import"./lTzDYV02.js";import"./0Xwqv7fW.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[t]="291e4263-9a7e-425a-83f6-84dded0004d4",r._sentryDebugIdIdentifier="sentry-dbid-291e4263-9a7e-425a-83f6-84dded0004d4")}catch{}})();const q=({isLoading:r,isConnected:t,handleRefreshChain:a,toggleConnect:l})=>e.jsx(n,{className:"gap-2",children:t?e.jsxs(e.Fragment,{children:[e.jsx(y,{className:"px-3",leftIcon:e.jsx(b,{color:"primaryBtn",name:"refresh",size:16,spin:r}),onClick:a,tooltip:c("common.refresh"),variant:"outlinePrimary"}),e.jsx(y,{className:"px-3",leftIcon:e.jsx(b,{color:"orange",name:"disconnect",size:16}),onClick:l,tooltip:c("common.disconnect"),variant:"outlineWarn"})]}):e.jsx(y,{disabled:r,onClick:l,variant:t?"outlinePrimary":"primary",children:e.jsx(n,{center:!0,className:"gap-x-2",children:c("common.connect")})})}),U=({chain:r,chainWallet:t,balance:a})=>{const[l,o]=d.useState(!1),i=()=>{o(!1)},u=d.useCallback(async()=>{t?.walletType===R.KEYSTORE&&o(!0);const{getAddress:s}=await(await Z(()=>import("./G7qcxkrX.js"),__vite__mapDeps([0,1,2]))).getSwapKitClient();t?.walletType===R.LEDGER&&ee(se("notification.verifyLedgerAddy"),s(r),{duration:20*1e3})},[t?.walletType,r]);return e.jsxs(n,{center:!0,className:"space-x-1",children:[!!t&&e.jsx(te,{onClick:u,size:16,walletType:t?.walletType}),e.jsx(m,{children:D(r,!0)}),!!t&&e.jsx(m,{fontWeight:"semibold",variant:"primaryBtn",children:a}),e.jsx(he,{isOpen:l,onCancel:i})]})},V=d.memo(({asset:r,mode:t,sparkline:a})=>{const{label:l,values:o}=pe(r,a);return e.jsx(n,{center:!0,className:f("opacity-0 w-[99%] transition-opacity duration-500",{"!opacity-100":o.length>0,"!-my-[20px] lg:w-[100px] xl:w-[320px]":t===x.LIST}),style:{height:t===x.CARD?100:80},children:o.length>0&&e.jsx(ge,{hideLabel:!0,labels:[l],values:o})})}),je=(r,t,a)=>{const l=A(),o=W(),{isLgActive:i}=re();return d.useMemo(()=>[{id:"asset",Header:()=>c("common.asset"),disableSortBy:!0,accessor:s=>s,Cell:({cell:{value:s}})=>e.jsx(I,{asset:s,hasChainIcon:!1,size:40})},{id:"name",Header:()=>"",disableSortBy:!0,minScreenSize:S.md,accessor:s=>s,Cell:({cell:{value:s}})=>e.jsxs(n,{col:!0,className:"pl-4",justify:"between",children:[e.jsx(m,{children:s.ticker}),e.jsx(m,{variant:"secondary",children:s.type})]})},{id:"amount",Header:()=>c("common.amount"),align:"right",accessor:s=>s.toFixed(2),Cell:({cell:{value:s}})=>e.jsx(m,{fontWeight:"bold",children:r?s:"-"})},{id:"price",Header:()=>c("common.usdPrice"),align:"right",minScreenSize:S.md,accessor:s=>a[s.toString()]?.price_usd||0,Cell:({cell:{value:s}})=>e.jsx(m,{fontWeight:"bold",children:l(s)}),sortType:"basic"},{id:"price24h",Header:()=>"24h%",align:"right",accessor:s=>a[s.toString()]?.cg?.price_change_percentage_24h_usd||0,minScreenSize:S.md,Cell:({cell:{value:s}})=>e.jsxs(m,{fontWeight:"bold",variant:s>=0?"green":"red",children:[s.toFixed(2),"%"]}),sortType:"basic"},{id:"chart",Header:()=>c("views.wallet.chart7d"),minScreenSize:S.lg,align:"center",disableSortBy:!0,accessor:s=>s,Cell:({cell:{value:s}})=>e.jsx(V,{asset:s,mode:x.LIST,sparkline:a[s.toString()]?.cg?.sparkline_in_7d})},{accessor:s=>s,id:"actions",Header:()=>"",align:"right",disableSortBy:!0,Cell:({cell:{value:s}})=>e.jsxs(n,{row:!0,className:"gap-2",justify:"end",children:[e.jsx(y,{leftIcon:e.jsx(b,{className:"rotate-180 group-hover:!text-light-typo-primary dark:group-hover:!text-dark-typo-primary",color:"secondary",name:"receive",size:20}),onClick:()=>o(P(s)),variant:"tint",children:i?c("common.send"):null}),e.jsx(M,{address:r,chain:t,openComponent:e.jsx(y,{disabled:!r,leftIcon:e.jsx(b,{className:"group-hover:!text-light-typo-primary dark:group-hover:!text-dark-typo-primary",color:"secondary",name:"receive",size:20}),tooltip:r?c("views.wallet.showQRCode"):c("views.walletModal.notConnected"),variant:"tint",children:i?c("common.receive"):null})}),e.jsx(y,{leftIcon:e.jsx(b,{className:"group-hover:!text-light-typo-primary dark:group-hover:!text-dark-typo-primary",color:"secondary",name:"swap",size:20}),onClick:()=>o(L(s)),variant:"tint",children:i?c("common.swap"):null})]})}],[r,a,l,i,t,o])},ye=d.memo(({priceData:r,chainInfo:t,chain:a,chainAddress:l})=>{const[o,i]=d.useState(!1),u=k.fromChainOrSignature(a),s=t.filter(j=>!j.eq(u)),p=t.find(j=>j.eq(u))||k.fromChainOrSignature(u.chain,0),g=d.useCallback(()=>{i(j=>!j)},[]),w=je(l,a,r),h=o?[p,...s]:[p];return e.jsxs(n,{col:!0,className:"transition-all",children:[e.jsx(xe,{columns:w,data:h,hasShadow:!1,sortable:h.length>1}),!!s.length&&e.jsx(y,{leftIcon:e.jsx(H,{isActive:o}),onClick:g,variant:"tint",children:o?c("views.wallet.hideTokens"):c("views.wallet.showAllTokens")})]})}),fe=d.memo(({thornames:r,chain:t})=>{const a=z(),{chainWalletLoading:l,accountBalance:o,chainAddress:i,chainInfo:u,priceData:s,setIsConnectModalOpen:p,chainWallet:g}=F(t),{handleRefreshChain:w}=$(t),h=d.useCallback(()=>{i?a({type:"disconnectByChain",payload:t}):p(!0)},[t,i,p,a]);return e.jsx(B,{className:f("overflow-hidden",O),children:e.jsxs(n,{col:!0,className:"w-full min-w-fit",flex:1,children:[e.jsxs(n,{alignCenter:!0,row:!0,className:"pb-2 border-0 border-b border-solid border-light-gray-light dark:border-dark-border-primary",justify:"between",children:[e.jsxs(n,{className:"flex-wrap flex-1 gap-3",justify:"between",children:[e.jsx(U,{balance:o,chain:t,chainWallet:g}),i&&e.jsxs(n,{alignCenter:!0,className:"!mr-4",children:[r.map(j=>e.jsx(K,{address:j,type:"full"},j)),e.jsx(Q,{address:i,chain:t})]})]}),e.jsx(q,{handleRefreshChain:w,isConnected:!!i,isLoading:l,toggleConnect:h})]}),e.jsx(ye,{chain:t,chainAddress:i,chainInfo:u,priceData:s})]})})}),T=d.memo(({className:r,label:t,onClick:a,icon:l,disabled:o,tooltip:i})=>e.jsxs(n,{center:!0,col:!0,className:"group gap-y-2",children:[e.jsx(y,{className:"!w-12 px-0",disabled:o,leftIcon:e.jsx(b,{className:f("group-hover:!text-light-typo-primary dark:group-hover:!text-dark-typo-primary min-w-[20px]",r),color:"secondary",name:l,size:20}),onClick:a,size:"md",tooltip:i,variant:"tint"}),e.jsx(m,{className:"group-hover:!text-light-typo-primary dark:group-hover:!text-dark-typo-primary",fontWeight:"medium",textStyle:"caption",variant:"secondary",children:t})]})),we=d.memo(({assetValue:r,priceData:t})=>{const a=A(2,""),{currentPrice:l,priceChangePercentage24h:o}=d.useMemo(()=>{const{price_usd:s,cg:p}=t?.[r.toString()]||{};return{currentPrice:s||0,priceChangePercentage24h:p?.price_change_percentage_24h_usd||0}},[r,t]),i=r.getValue("number"),u=`${r.toSignificant(6)} (${a(i*l)})`;return e.jsxs(n,{className:"px-3 py-2 border-0 border-b border-solid border-light-gray-light dark:border-dark-border-primary",justify:"between",children:[e.jsxs(n,{children:[e.jsx(I,{asset:r,hasChainIcon:!1}),e.jsxs(n,{col:!0,className:"pl-2",children:[e.jsx(m,{children:r.ticker}),e.jsx(m,{fontWeight:"semibold",textStyle:"caption",variant:"secondary",children:u})]})]}),e.jsxs(n,{col:!0,align:"end",children:[e.jsx(m,{children:a(l)}),e.jsxs(m,{fontWeight:"semibold",textStyle:"caption",variant:o>=0?"green":"red",children:[o?.toFixed(2),"%"]})]})]})}),be=d.memo(({thornames:r,chain:t})=>{const{isActive:a,contentRef:l,toggle:o,maxHeightStyle:i}=ae(),u=A(),s=W(),p=z(),{sigAssetPriceInfo:g,accountBalance:w,chainAddress:h,chainInfo:j,priceData:N,setIsConnectModalOpen:_,chainWallet:G,chainWalletLoading:X}=F(t),{handleRefreshChain:Y}=$(t),C=k.fromChainOrSignature(t),J=d.useCallback(()=>{h?p({type:"disconnectByChain",payload:t}):_(!0)},[t,h,_,p]);return e.jsx(B,{className:f("overflow-hidden",O),children:e.jsxs(n,{col:!0,className:"w-full",children:[e.jsxs(n,{row:!0,className:"pb-4 border-0 border-b-2 border-solid border-light-gray-light dark:border-dark-border-primary",justify:"between",children:[e.jsx(U,{balance:w,chain:t,chainWallet:G}),e.jsx(q,{handleRefreshChain:Y,isConnected:!!h,isLoading:!!X,toggleConnect:J})]}),e.jsxs(n,{alignCenter:!0,className:"mt-3",justify:"between",children:[e.jsxs(n,{children:[e.jsx(I,{hasShadow:!0,asset:C,size:40}),e.jsxs(n,{col:!0,className:"ml-2",children:[e.jsx(m,{children:C.ticker}),e.jsx(m,{fontWeight:"medium",textStyle:"caption-xs",variant:"secondary",children:C.type})]})]}),h&&e.jsxs(n,{alignCenter:!0,children:[e.jsxs(n,{col:!0,children:[e.jsx(n,{alignCenter:!0,row:!0,children:r.length>0&&e.jsx(n,{onClick:o,children:e.jsx(H,{isActive:a})})}),e.jsx("div",{className:ne,ref:l,style:i,children:e.jsx(n,{col:!0,align:"start",children:r.map(v=>e.jsx(K,{address:v,type:"full"},v))})})]}),e.jsx(Q,{address:h,chain:t})]})]}),e.jsxs(n,{center:!0,col:!0,className:"mt-2",children:[e.jsx(n,{alignCenter:!0,flex:1,justify:"between",children:e.jsx(m,{fontWeight:"semibold",textStyle:"h3",children:u(g?.price_usd)})}),e.jsxs(m,{fontWeight:"semibold",textStyle:"caption",variant:(g?.cg?.price_change_percentage_24h_usd||0)>=0?"green":"red",children:[g?.cg?.price_change_percentage_24h_usd?.toFixed(2),"%"]})]}),e.jsx(V,{asset:C,mode:x.CARD,sparkline:g?.cg?.sparkline_in_7d}),e.jsxs(n,{center:!0,className:"pb-4 border-0 border-b-2 border-solid gap-x-6 border-light-gray-light dark:border-dark-border-primary",children:[e.jsx(T,{className:"rotate-180",icon:"receive",label:c("common.send"),onClick:()=>s(P(C))}),e.jsx(M,{address:h,chain:t,openComponent:e.jsx(T,{disabled:!h,icon:"receive",label:c("common.receive"),tooltip:h?c("views.wallet.showQRCode"):c("views.walletModal.notConnected")})}),e.jsx(T,{icon:"swap",label:c("common.swap"),onClick:()=>s(L(C))})]}),e.jsx(n,{className:"h-24 md:h-36",children:j.length>0?e.jsx(n,{col:!0,className:"!-mb-6",flex:1,children:e.jsx(oe,{children:j.map(v=>e.jsx(we,{assetValue:v,priceData:N},v.ticker))})}):e.jsx(n,{center:!0,flex:1,children:e.jsx(m,{textStyle:"subtitle2",variant:"secondary",children:c("views.wallet.noDataToShow")})})})]})})}),Ce=d.memo(({onlyConnected:r,keyword:t})=>{const{getWalletAddress:a}=le(),{walletViewMode:l}=E(),o=ue(),i=d.useMemo(()=>ie.filter(s=>{const p=k.fromChainOrSignature(s),g=t.toLowerCase();return[p.chain.toLowerCase(),p.symbol.toLowerCase(),D(s,!0).toLowerCase()].some(h=>h.includes(g))&&(r?!!a(s):!0)}),[a,t,r]),u=d.useCallback(s=>{const p=a(s);return o&&p?o.reduce((g,{entries:w=[],thorname:h})=>(w.find(N=>N.address===p)&&g.push(`${h}.${s.toLowerCase()}`),g),[]):[]},[a,o]);return e.jsx(n,{col:!0,className:f({"gap-1.5 flex-1":l===x.LIST,"grid w-full grid-cols-1 gap-2.5 lg:grid-cols-2 xl:grid-cols-3 md:flex-row":l===x.CARD}),children:i.map(s=>l===x.CARD?e.jsx(be,{chain:s,thornames:u(s)},s):e.jsx(fe,{chain:s,thornames:u(s)},s))})}),ve=d.memo(({setOnlyConnected:r,onlyConnected:t,walletViewMode:a,setWalletViewMode:l,keyword:o,setKeyword:i})=>e.jsxs(n,{alignCenter:!0,className:"w-full px-1.5 flex-wrap gap-2",justify:"between",children:[e.jsx(ce,{border:"rounded",icon:"search",onChange:u=>i(u.target.value),placeholder:c("views.wallet.search"),value:o}),e.jsxs(n,{alignCenter:!0,className:"space-x-6",children:[e.jsxs(n,{center:!0,className:"gap-x-2 rounded-2xl",children:[e.jsx(m,{textStyle:"caption",children:c("views.wallet.showOnlyConnectedChains")}),e.jsx(de,{checked:t,onChange:r})]}),e.jsxs(n,{center:!0,children:[e.jsx(y,{className:f("pl-3 pr-3 !rounded-r-none",{"!bg-opacity-90 dark:!bg-opacity-50":a===x.CARD}),leftIcon:e.jsx(b,{className:f({"!text-white !stroke-white":a===x.CARD}),name:"grid",size:20}),onClick:()=>l(x.CARD),tooltip:c("views.wallet.gridView"),variant:a===x.CARD?"primary":"outlineTint"}),e.jsx(y,{className:f("pl-2 pr-3 !rounded-l-none",{"!bg-opacity-90 dark:!bg-opacity-50":a===x.LIST}),leftIcon:e.jsx(b,{className:f({"!text-white !stroke-white":a===x.LIST}),name:"list",size:20}),onClick:()=>l(x.LIST),tooltip:c("views.wallet.listView"),variant:a===x.LIST?"primary":"outlineTint"})]})]})]})),Se=()=>{const{walletViewMode:r,setWalletViewMode:t}=E(),[a,l]=d.useState(""),[o,i]=d.useState(!1);return e.jsxs(n,{col:!0,className:"w-full",children:[e.jsx(me,{content:"Manage you tokens in your custodial wallet on THUNDERSwap",keywords:"Wallet, Tokens, THUNDERSwap, THUNDERChain, DEFI, DEX",title:c("views.wallet.wallet")}),e.jsx(ve,{keyword:a,onlyConnected:o,setKeyword:l,setOnlyConnected:i,setWalletViewMode:t,walletViewMode:r}),e.jsx(n,{className:"w-full mt-4",children:e.jsx(Ce,{keyword:a,onlyConnected:o})})]})},Le=Se;export{Le as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["G7qcxkrX.js","assets/index-BDcs8OaA.js","assets/index-PWKo4Vxk.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
