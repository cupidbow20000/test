import{r as s,e as f,j as e,B as C,T as $,t as o,u as Ae,ae as Me,$ as Ee,aX as ke,aY as $e,aZ as Z,_ as se,b0 as Ie,b1 as Ne,a1 as te,U as Pe,a4 as Re,bt as _e,v as De,K as Fe,bu as Oe,g as _,k as Ve,bv as We,be as G,o as Y,X as Le,bw as q,bx as He,by as Be,d as J,x as Ue}from"./assets/index-BDcs8OaA.js";import{a as ze,A as Q}from"./u_4jEEiW.js";import{G as Ke}from"./CFwsQoKA.js";import{I as ee}from"./nlzjmGkJ.js";import{C as Xe}from"./y5ax0GID.js";import{P as D}from"./4bNlJGqv.js";import{P as Ze}from"./gLsK49VX.js";import{V as Ge}from"./bwNrJKc_.js";import{u as Ye}from"./-RWyXF4h.js";import{u as qe}from"./kn1s7jTN.js";import{u as Je}from"./aF5kppaH.js";import{u as Qe}from"./ZLekcFwQ.js";import"./8bNoHJzy.js";import"./6QZjTHo4.js";import"./tX9VNdav.js";import"./uJJRkjMC.js";import"./dPAOcghz.js";import"./xirfvWJJ.js";import"./xrvJovm6.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},i=new Error().stack;i&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[i]="d0c635fe-db5a-499f-bbfc-4f882d235579",a._sentryDebugIdIdentifier="sentry-dbid-d0c635fe-db5a-499f-bbfc-4f882d235579")}catch{}})();const es=({memo:a,setMemo:i})=>{const{poolAssets:m}=Qe(),[t]=s.useState("deposit"),[c,l]=s.useState(f),d=s.useMemo(()=>m.map(u=>({asset:u})),[m]),p=s.useCallback(({target:{value:u}})=>{i(u)},[i]);return e.jsxs(C,{col:!0,className:"self-stretch gap-1",flex:1,children:[e.jsx(C,{className:"self-stretch px-1.5",children:e.jsx($,{children:o("common.msgDeposit")})}),t==="swap"&&e.jsxs(C,{alignCenter:!0,className:"px-1.5",justify:"between",children:[e.jsxs($,{textStyle:"caption",children:[o("views.send.outputAsset"),":"]}),e.jsx(ze,{assets:d,onSelect:l,selected:c})]}),e.jsx(D,{onChange:p,title:o("common.memo"),value:a})]})},ss="",ts=()=>{const{customSendVisible:a}=Ae(),[i,m]=s.useState(""),[t,c]=s.useState(!1),{data:l}=Me([f]),d=s.useMemo(()=>l[f.ticker]?.price_usd||0,[l]);s.useEffect(()=>{a||c(!1)},[a]);const p=[{label:o("views.send.toggleCustomTxForm"),status:t,onClick:()=>c(u=>!u)}];return{customRecipient:ss,customMemo:i,setCustomMemo:m,customTxEnabled:t,switchCustomTxEnabledMenu:p,showCustomTxToggle:a,customFeeRune:`0.02 ${f.symbol}`,customFeeUsd:(d*.02).toFixed(2)}},ns=({sendAsset:a,recipientAddress:i,memo:m,setIsOpenConfirmModal:t,from:c,customTxEnabled:l=!1})=>{const d=Ee();return s.useCallback(async()=>{if(t(!1),a&&(l||a.getValue("bigint")>0)){const u=ke(),b=`${o("txManager.send")} ${a.toSignificant(6)} ${a.isSynthetic?"Synth ":""}${a.ticker}`;d($e({id:u,from:i,inChain:a.chain,type:l?Z.TC_DEPOSIT:Z.TC_SEND,label:b}));const{transfer:I,deposit:x}=await(await se(()=>import("./G7qcxkrX.js"),__vite__mapDeps([0,1,2]))).getSwapKitClient();try{const h=l?await x({assetValue:a,recipient:i,memo:m,from:c}):await I({assetValue:a,recipient:i,memo:m,from:c});h&&d(Ie({id:u,txid:h}))}catch(h){console.error(h),d(Ne({id:u,status:"error"})),te(o("notification.sendTxFailed"),h?.toString())}}},[t,a,d,i,m,c,l])},as="0xe9495f24fF1E8DD8E803B6717Fb9264683CdD7bC",os=()=>{const a=Pe(),{assetParam:i}=Re(),[m]=_e(),[t,c]=s.useState(f),l=s.useCallback(n=>{c(g=>g.set(n))},[]),d=s.useMemo(()=>t.getValue("string"),[t]),[p,u]=s.useState(t.set(0)),[b,I]=s.useState(""),[x,h]=s.useState(m.get("recipient")||""),[N,F]=s.useState(""),[ne,P]=s.useState(!1),{wallet:y,getWallet:O,getWalletAddress:ae}=De(),{setIsConnectModalOpen:oe}=Fe(),{getMaxBalance:A}=qe(),{inputAssetUSDPrice:V,inputFee:W,feeInUSD:ie,isLoading:L}=Je({type:"transfer",inputAsset:t}),{customMemo:H,customRecipient:ce,setCustomMemo:re,customTxEnabled:r,switchCustomTxEnabledMenu:le,showCustomTxToggle:de,customFeeRune:ue,customFeeUsd:me}=ts(),w=r?ce:x,R=r?H:b,M=r?me:ie,E=r?ue:`${W.getValue("string")} ${W.ticker}`,pe=ns({setIsOpenConfirmModal:P,sendAsset:t,recipientAddress:w,memo:R,from:y?ae(t.chain):void 0,customTxEnabled:r});s.useEffect(()=>{u(void 0),A(t).then(n=>u(n))},[A,t]);const{loading:he,TNS:S}=Ye(x),T=s.useMemo(()=>S?.entries?S.entries.find(({chain:n})=>n===t.chain)?.address:"",[S,t.chain]);s.useEffect(()=>{S&&T&&(F(S.thorname),h(T))},[S,T]),s.useEffect(()=>{(async()=>{if(r)return c(f);if(!i)c(f);else{const[g,K,k]=i.split("."),ve=g===_.THUNDERChain&&k?`${g}.${K}/${k}`:i,X=Ue.fromStringSync(ve);c(X||f)}})()},[i,r]);const j=s.useMemo(()=>t&&!!O(t.chain),[t,O]),B=s.useMemo(()=>{const n=[];return y&&Object.keys(y).forEach(g=>{y[g]?.balance.forEach(k=>{n.push(k)})}),n},[y]),[fe,ge]=s.useState([]);s.useEffect(()=>{Promise.all(B.map(n=>A(n,!0).then(g=>({asset:n,balance:g})))).then(n=>{ge(n)})},[A,B]);const xe=s.useCallback(n=>{h(""),a(Oe(n))},[a]),U=s.useMemo(()=>t.chain===_.Ethereum&&x.toLocaleLowerCase()===as.toLocaleLowerCase(),[t,x]),z=s.useCallback(n=>{l(j&&p&&n.gt(p)?p.getValue("string"):n.getValue("string"))},[j,p,l]),Ce=s.useCallback(({target:{value:n}})=>{h(n),F("")},[]),Se=s.useCallback(({target:{value:n}})=>{I(n)},[]),be=s.useCallback(()=>{P(!1)},[]),ye=s.useCallback(async()=>{const{validateAddress:n}=await(await se(()=>import("./G7qcxkrX.js"),__vite__mapDeps([0,1,2]))).getSwapKitClient();!r&&!n({chain:t.chain,address:w})?te(o("notification.invalidChainAddy",{chain:t.chain})):P(!0)},[r,t.chain,w]),v=s.useMemo(()=>({asset:t,value:new Ve({value:d,decimal:t.decimal}),balance:j?p:void 0,usdPrice:parseFloat(d)*V}),[V,j,p,d,t]),we=s.useMemo(()=>[{label:o("common.transactionFee"),value:L?e.jsx(We,{}):e.jsxs(C,{center:!0,className:"gap-2",children:[e.jsx($,{textStyle:"caption",children:`${E} (${M})`}),e.jsx(G,{content:o("views.send.txFeeTooltip"),children:e.jsx(Y,{color:"secondary",name:"infoCircle",size:20})})]})}],[L,E,M]),Te=s.useMemo(()=>[{label:o("common.send"),value:`${t?.toSignificant(6)} ${t.ticker}`},{label:o("common.recipient"),value:r?o("common.msgDeposit"):Le(w,6)},{label:o("common.memo"),value:R},{label:o("common.transactionFee"),value:e.jsxs(C,{center:!0,className:"gap-2",children:[e.jsx($,{variant:"caption",children:`${E} (${M})`}),e.jsx(G,{content:o("views.send.txFeeTooltip"),children:e.jsx(Y,{color:"secondary",name:"infoCircle",size:20})})]})}],[t,r,w,R,E,M]),je=s.useMemo(()=>`${o("common.recipientAddress")}${T&&N?` - ${N}.${t.chain}`:""}`,[T,t.chain,N]);return e.jsxs(Ze,{description:o("views.send.description"),header:e.jsx(Ge,{actionsComponent:e.jsx(Ke,{}),title:o("common.send")}),keywords:"Wallet, Tokens, THUNDERSwap, THUNDERChain, DEFI, DEX",title:o("views.send.title"),children:[e.jsx("div",{className:"relative self-stretch md:w-full",children:r?e.jsx(Q,{hideZeroPrice:!0,singleAsset:!0,onValueChange:z,selectedAsset:v}):e.jsx(Q,{hideZeroPrice:!0,assets:fe,onAssetChange:xe,onValueChange:z,selectedAsset:v})}),!r&&e.jsxs(e.Fragment,{children:[U&&e.jsx(q,{className:"m-auto !pt-2 !pb-1 !px-2",content:"Sending funds to this address will likely result in a loss of funds. Users should deposit using the 'depositWithExpiry' method on Etherscan.",contentClassName:"py-0",title:"Warning",type:"warn"}),e.jsx(D,{loading:he,onChange:Ce,placeholder:`THUNDERName / ${v.asset.isSynthetic||v.asset.chain===_.THUNDERChain?f.chain:He(v.asset.chain)} ${o("common.address")}`,title:je,value:x}),b&&e.jsx(q,{className:"m-auto !pt-2 !pb-1 !px-2",content:"Sending funds to an address with a custom memo is offered as a convenience tool and should only be used by advanced users knowing precisely what they are doing. THUNDERSwap is not responsible for any loss of funds using this functionality.",contentClassName:"py-0",title:"Warning",type:"warn"}),e.jsx(D,{collapsible:!0,onChange:Se,title:o("common.memo"),value:b})]}),de&&e.jsx(C,{className:"self-stretch",flex:1,children:e.jsx(Be,{className:"mx-0.5",items:le})}),r&&e.jsx(es,{memo:H,setMemo:re}),e.jsx(ee,{horizontalInset:!0,items:we}),e.jsx(C,{center:!0,className:"w-full pt-5",children:j?e.jsx(J,{stretch:!0,disabled:U,onClick:ye,size:"lg",variant:"fancy",children:o("common.send")}):e.jsx(J,{stretch:!0,onClick:()=>oe(!0),size:"lg",variant:"fancy",children:o("common.connectWallet")})}),e.jsx(Xe,{inputAssets:[t],isOpened:ne,onClose:be,onConfirm:pe,children:e.jsx(ee,{items:Te})})]})},As=os;export{As as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["G7qcxkrX.js","assets/index-BDcs8OaA.js","assets/index-PWKo4Vxk.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
