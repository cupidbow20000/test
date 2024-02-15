import{dk as z,r as m,dl as xt,j as h,co as R,cp as F,cG as bt,cj as yt,dm as St,cF as ge,cm as Ke,cI as wt,cJ as Pt,bk as kt,a7 as V,T as Q,cK as j,k as Et,be as xe,o as Tt,dn as Ct,d as Le}from"./assets/index-BDcs8OaA.js";import{I as _t}from"./nlzjmGkJ.js";import{C as It}from"./y5ax0GID.js";import{u as jt}from"./FUKZW4Fx.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="dc570aaf-59a7-471b-bc83-b36d660485d4",e._sentryDebugIdIdentifier="sentry-dbid-dc570aaf-59a7-471b-bc83-b36d660485d4")}catch{}})();const Xe=1/60*1e3,Rt=typeof performance<"u"?()=>performance.now():()=>Date.now(),qe=typeof window<"u"?e=>window.requestAnimationFrame(e):e=>setTimeout(()=>e(Rt()),Xe);function Mt(e){let t=[],n=[],r=0,s=!1,f=!1;const a=new WeakSet,p={schedule:(i,l=!1,u=!1)=>{const c=u&&s,v=c?t:n;return l&&a.add(i),v.indexOf(i)===-1&&(v.push(i),c&&s&&(r=t.length)),i},cancel:i=>{const l=n.indexOf(i);l!==-1&&n.splice(l,1),a.delete(i)},process:i=>{if(s){f=!0;return}if(s=!0,[t,n]=[n,t],n.length=0,r=t.length,r)for(let l=0;l<r;l++){const u=t[l];u(i),a.has(u)&&(p.schedule(u),e())}s=!1,f&&(f=!1,p.process(i))}};return p}const Nt=40;let ke=!0,Y=!1,Ee=!1;const A={delta:0,timestamp:0},K=["read","update","preRender","render","postRender"],re=K.reduce((e,t)=>(e[t]=Mt(()=>Y=!0),e),{}),Dt=K.reduce((e,t)=>{const n=re[t];return e[t]=(r,s=!1,f=!1)=>(Y||zt(),n.schedule(r,s,f)),e},{}),Vt=K.reduce((e,t)=>(e[t]=re[t].cancel,e),{});K.reduce((e,t)=>(e[t]=()=>re[t].process(A),e),{});const $t=e=>re[e].process(A),Ge=e=>{Y=!1,A.delta=ke?Xe:Math.max(Math.min(e-A.timestamp,Nt),1),A.timestamp=e,Ee=!0,K.forEach($t),Ee=!1,Y&&(ke=!1,qe(Ge))},zt=()=>{Y=!0,ke=!0,Ee||qe(Ge)},Ue=()=>A;function At(e){const{value:t,defaultValue:n,onChange:r,shouldUpdate:s=(v,g)=>v!==g}=e,f=z(r),a=z(s),[p,i]=m.useState(n),l=t!==void 0,u=l?t:p,c=z(v=>{const E=typeof v=="function"?v(u):v;a(u,E)&&(l||i(E),f(E))},[l,f,u,a]);return[u,c]}function Ft(e){const t=parseFloat(e);return typeof t!="number"||Number.isNaN(t)?0:t}function Bt(e,t){let n=Ft(e);const r=10**(t??10);return n=Math.round(n*r)/r,t?n.toFixed(t):n.toString()}function Lt(e){if(!Number.isFinite(e))return 0;let t=1,n=0;for(;Math.round(e*t)/t!==e;)t*=10,n+=1;return n}function We(e,t,n){return(e-t)*100/(n-t)}function Ut(e,t,n){return(n-t)*e+t}function Oe(e,t,n){const r=Math.round((e-t)/n)*n+t,s=Lt(n);return Bt(r,s)}function be(e,t,n){return e==null?e:(n<t&&console.warn("clamp: max cannot be less than min"),Math.min(Math.max(e,t),n))}function Wt(e,t){return Array.isArray(e)?e.map(n=>n===null?null:t(n)):xt(e)?Object.keys(e).reduce((n,r)=>(n[r]=t(e[r]),n),{}):e!=null?t(e):null}var Je=e=>h.jsx(R.div,{className:"chakra-stack__item",...e,__css:{display:"inline-block",flex:"0 0 auto",minWidth:0,...e.__css}});Je.displayName="StackItem";function Ot(e){const{spacing:t,direction:n}=e,r={column:{my:t,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},"column-reverse":{my:t,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},row:{mx:t,my:0,borderLeftWidth:"1px",borderBottomWidth:0},"row-reverse":{mx:t,my:0,borderLeftWidth:"1px",borderBottomWidth:0}};return{"&":Wt(n,s=>r[s])}}var Qe=F((e,t)=>{const{isInline:n,direction:r,align:s,justify:f,spacing:a="0.5rem",wrap:p,children:i,divider:l,className:u,shouldWrapChildren:c,...v}=e,g=n?"row":r??"column",E=m.useMemo(()=>Ot({spacing:a,direction:g}),[a,g]),x=!!l,w=!c&&!x,M=m.useMemo(()=>{const N=bt(i);return w?N:N.map((I,q)=>{const L=typeof I.key<"u"?I.key:q,G=q+1===N.length,U=c?h.jsx(Je,{children:I},L):I;if(!x)return U;const S=m.cloneElement(l,{__css:E}),ie=G?null:S;return h.jsxs(m.Fragment,{children:[U,ie]},L)})},[l,E,x,w,c,i]),B=yt("chakra-stack",u);return h.jsx(R.div,{ref:t,display:"flex",alignItems:s,justifyContent:f,flexDirection:g,flexWrap:p,gap:x?void 0:a,className:B,...v,children:M})});Qe.displayName="Stack";var $=e=>e?"":void 0,ye=e=>e?!0:void 0,X=(...e)=>e.filter(Boolean).join(" ");function Se(...e){return function(n){e.some(r=>(r?.(n),n?.defaultPrevented))}}function In(e){return{root:`slider-root-${e}`,getThumb:t=>`slider-thumb-${e}-${t}`,getInput:t=>`slider-input-${e}-${t}`,track:`slider-track-${e}`,innerTrack:`slider-filled-track-${e}`,getMarker:t=>`slider-marker-${e}-${t}`,output:`slider-output-${e}`}}function Z(e){const{orientation:t,vertical:n,horizontal:r}=e;return t==="vertical"?n:r}var te={width:0,height:0},ee=e=>e||te;function Ht(e){const{orientation:t,thumbPercents:n,thumbRects:r,isReversed:s}=e,f=x=>{var w;const M=(w=r[x])!=null?w:te;return{position:"absolute",userSelect:"none",WebkitUserSelect:"none",MozUserSelect:"none",msUserSelect:"none",touchAction:"none",...Z({orientation:t,vertical:{bottom:`calc(${n[x]}% - ${M.height/2}px)`},horizontal:{left:`calc(${n[x]}% - ${M.width/2}px)`}})}},a=t==="vertical"?r.reduce((x,w)=>ee(x).height>ee(w).height?x:w,te):r.reduce((x,w)=>ee(x).width>ee(w).width?x:w,te),p={position:"relative",touchAction:"none",WebkitTapHighlightColor:"rgba(0,0,0,0)",userSelect:"none",outline:0,...Z({orientation:t,vertical:a?{paddingLeft:a.width/2,paddingRight:a.width/2}:{},horizontal:a?{paddingTop:a.height/2,paddingBottom:a.height/2}:{}})},i={position:"absolute",...Z({orientation:t,vertical:{left:"50%",transform:"translateX(-50%)",height:"100%"},horizontal:{top:"50%",transform:"translateY(-50%)",width:"100%"}})},l=n.length===1,u=[0,s?100-n[0]:n[0]],c=l?u:n;let v=c[0];!l&&s&&(v=100-v);const g=Math.abs(c[c.length-1]-c[0]),E={...i,...Z({orientation:t,vertical:s?{height:`${g}%`,top:`${v}%`}:{height:`${g}%`,bottom:`${v}%`},horizontal:s?{width:`${g}%`,right:`${v}%`}:{width:`${g}%`,left:`${v}%`}})};return{trackStyle:i,innerTrackStyle:E,rootStyle:p,getThumbStyle:f}}function Yt(e){const{isReversed:t,direction:n,orientation:r}=e;return n==="ltr"||r==="vertical"?t:!t}function Kt(e,t,n,r){return e.addEventListener(t,n,r),()=>{e.removeEventListener(t,n,r)}}function Xt(e){const t=Gt(e);return typeof t.PointerEvent<"u"&&e instanceof t.PointerEvent?e.pointerType==="mouse":e instanceof t.MouseEvent}function Ze(e){return!!e.touches}function qt(e){return Ze(e)&&e.touches.length>1}function Gt(e){var t;return(t=e.view)!=null?t:window}function Jt(e,t="page"){const n=e.touches[0]||e.changedTouches[0];return{x:n[`${t}X`],y:n[`${t}Y`]}}function Qt(e,t="page"){return{x:e[`${t}X`],y:e[`${t}Y`]}}function et(e,t="page"){return Ze(e)?Jt(e,t):Qt(e,t)}function Zt(e){return t=>{const n=Xt(t);(!n||n&&t.button===0)&&e(t)}}function en(e,t=!1){function n(s){e(s,{point:et(s)})}return t?Zt(n):n}function ne(e,t,n,r){return Kt(e,t,en(n,t==="pointerdown"),r)}var tn=Object.defineProperty,nn=(e,t,n)=>t in e?tn(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,k=(e,t,n)=>(nn(e,typeof t!="symbol"?t+"":t,n),n),rn=class{constructor(e,t,n){k(this,"history",[]),k(this,"startEvent",null),k(this,"lastEvent",null),k(this,"lastEventInfo",null),k(this,"handlers",{}),k(this,"removeListeners",()=>{}),k(this,"threshold",3),k(this,"win"),k(this,"updatePoint",()=>{if(!(this.lastEvent&&this.lastEventInfo))return;const p=we(this.lastEventInfo,this.history),i=this.startEvent!==null,l=ln(p.offset,{x:0,y:0})>=this.threshold;if(!i&&!l)return;const{timestamp:u}=Ue();this.history.push({...p.point,timestamp:u});const{onStart:c,onMove:v}=this.handlers;i||(c?.(this.lastEvent,p),this.startEvent=this.lastEvent),v?.(this.lastEvent,p)}),k(this,"onPointerMove",(p,i)=>{this.lastEvent=p,this.lastEventInfo=i,Dt.update(this.updatePoint,!0)}),k(this,"onPointerUp",(p,i)=>{const l=we(i,this.history),{onEnd:u,onSessionEnd:c}=this.handlers;c?.(p,l),this.end(),!(!u||!this.startEvent)&&u?.(p,l)});var r;if(this.win=(r=e.view)!=null?r:window,qt(e))return;this.handlers=t,n&&(this.threshold=n),e.stopPropagation(),e.preventDefault();const s={point:et(e)},{timestamp:f}=Ue();this.history=[{...s.point,timestamp:f}];const{onSessionStart:a}=t;a?.(e,we(s,this.history)),this.removeListeners=an(ne(this.win,"pointermove",this.onPointerMove),ne(this.win,"pointerup",this.onPointerUp),ne(this.win,"pointercancel",this.onPointerUp))}updateHandlers(e){this.handlers=e}end(){var e;(e=this.removeListeners)==null||e.call(this),Vt.update(this.updatePoint)}};function He(e,t){return{x:e.x-t.x,y:e.y-t.y}}function we(e,t){return{point:e.point,delta:He(e.point,t[t.length-1]),offset:He(e.point,t[0]),velocity:on(t,.1)}}var sn=e=>e*1e3;function on(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null;const s=e[e.length-1];for(;n>=0&&(r=e[n],!(s.timestamp-r.timestamp>sn(t)));)n--;if(!r)return{x:0,y:0};const f=(s.timestamp-r.timestamp)/1e3;if(f===0)return{x:0,y:0};const a={x:(s.x-r.x)/f,y:(s.y-r.y)/f};return a.x===1/0&&(a.x=0),a.y===1/0&&(a.y=0),a}function an(...e){return t=>e.reduce((n,r)=>r(n),t)}function Pe(e,t){return Math.abs(e-t)}function Ye(e){return"x"in e&&"y"in e}function ln(e,t){if(typeof e=="number"&&typeof t=="number")return Pe(e,t);if(Ye(e)&&Ye(t)){const n=Pe(e.x,t.x),r=Pe(e.y,t.y);return Math.sqrt(n**2+r**2)}return 0}function tt(e){const t=m.useRef(null);return t.current=e,t}function cn(e,t){const{onPan:n,onPanStart:r,onPanEnd:s,onPanSessionStart:f,onPanSessionEnd:a,threshold:p}=t,i=!!(n||r||s||f||a),l=m.useRef(null),u=tt({onSessionStart:f,onSessionEnd:a,onStart:r,onMove:n,onEnd(c,v){l.current=null,s?.(c,v)}});m.useEffect(()=>{var c;(c=l.current)==null||c.updateHandlers(u.current)}),m.useEffect(()=>{const c=e.current;if(!c||!i)return;function v(g){l.current=new rn(g,u.current,p)}return ne(c,"pointerdown",v)},[e,i,u,p]),m.useEffect(()=>()=>{var c;(c=l.current)==null||c.end(),l.current=null},[])}function un(e,t){if(!e){t(void 0);return}t({width:e.offsetWidth,height:e.offsetHeight});const n=e.ownerDocument.defaultView??window,r=new n.ResizeObserver(s=>{if(!Array.isArray(s)||!s.length)return;const[f]=s;let a,p;if("borderBoxSize"in f){const i=f.borderBoxSize,l=Array.isArray(i)?i[0]:i;a=l.inlineSize,p=l.blockSize}else a=e.offsetWidth,p=e.offsetHeight;t({width:a,height:p})});return r.observe(e,{box:"border-box"}),()=>r.unobserve(e)}var dn=globalThis?.document?m.useLayoutEffect:m.useEffect;function fn(e,t){var n,r;if(!e||!e.parentElement)return;const s=(r=(n=e.ownerDocument)==null?void 0:n.defaultView)!=null?r:window,f=new s.MutationObserver(()=>{t()});return f.observe(e.parentElement,{childList:!0}),()=>{f.disconnect()}}function hn({getNodes:e,observeMutation:t=!0}){const[n,r]=m.useState([]),[s,f]=m.useState(0);return dn(()=>{const a=e(),p=a.map((i,l)=>un(i,u=>{r(c=>[...c.slice(0,l),u,...c.slice(l+1)])}));if(t){const i=a[0];p.push(fn(i,()=>{f(l=>l+1)}))}return()=>{p.forEach(i=>{i?.()})}},[s]),n}function mn(e){return typeof e=="object"&&e!==null&&"current"in e}function pn(e){const[t]=hn({observeMutation:!1,getNodes(){return[mn(e)?e.current:e]}});return t}function vn(e){var t;const{min:n=0,max:r=100,onChange:s,value:f,defaultValue:a,isReversed:p,direction:i="ltr",orientation:l="horizontal",id:u,isDisabled:c,isReadOnly:v,onChangeStart:g,onChangeEnd:E,step:x=1,getAriaValueText:w,"aria-valuetext":M,"aria-label":B,"aria-labelledby":N,name:I,focusThumbOnChange:q=!0,...L}=e,G=z(g),D=z(E),U=z(w),S=Yt({isReversed:p,direction:i,orientation:l}),[ie,ae]=At({value:f,defaultValue:a??xn(n,r),onChange:s}),[le,Te]=m.useState(!1),[ce,Ce]=m.useState(!1),ue=!(c||v),de=(r-n)/10,W=x||(r-n)/100,b=be(ie,n,r),it=r-b+n,_e=We(S?it:b,n,r),J=l==="vertical",y=tt({min:n,max:r,step:x,isDisabled:c,value:b,isInteractive:ue,isReversed:S,isVertical:J,eventSource:null,focusThumbOnChange:q,orientation:l}),fe=m.useRef(null),he=m.useRef(null),Ie=m.useRef(null),at=m.useId(),je=u??at,[Re,Me]=[`slider-thumb-${je}`,`slider-track-${je}`],lt=m.useCallback(o=>{var d,O;if(!fe.current)return;const P=y.current;P.eventSource="pointer";const T=fe.current.getBoundingClientRect(),{clientX:pe,clientY:pt}=(O=(d=o.touches)==null?void 0:d[0])!=null?O:o,vt=J?T.bottom-pt:pe-T.left,gt=J?T.height:T.width;let ve=vt/gt;S&&(ve=1-ve);let H=Ut(ve,P.min,P.max);return P.step&&(H=parseFloat(Oe(H,P.min,P.step))),H=be(H,P.min,P.max),H},[J,S,y]),C=m.useCallback(o=>{const d=y.current;d.isInteractive&&(o=parseFloat(Oe(o,d.min,W)),o=be(o,d.min,d.max),ae(o))},[W,ae,y]),_=m.useMemo(()=>({stepUp(o=W){const d=S?b-o:b+o;C(d)},stepDown(o=W){const d=S?b+o:b-o;C(d)},reset(){C(a||0)},stepTo(o){C(o)}}),[C,S,b,W,a]),Ne=m.useCallback(o=>{const d=y.current,P={ArrowRight:()=>_.stepUp(),ArrowUp:()=>_.stepUp(),ArrowLeft:()=>_.stepDown(),ArrowDown:()=>_.stepDown(),PageUp:()=>_.stepUp(de),PageDown:()=>_.stepDown(de),Home:()=>C(d.min),End:()=>C(d.max)}[o.key];P&&(o.preventDefault(),o.stopPropagation(),P(o),d.eventSource="keyboard")},[_,C,de,y]),De=(t=U?.(b))!=null?t:M,me=pn(he),{getThumbStyle:Ve,rootStyle:$e,trackStyle:ze,innerTrackStyle:Ae}=m.useMemo(()=>{const o=y.current,d=me??{width:0,height:0};return Ht({isReversed:S,orientation:o.orientation,thumbRects:[d],thumbPercents:[_e]})},[S,me,_e,y]),Fe=m.useCallback(()=>{y.current.focusThumbOnChange&&setTimeout(()=>{var d;return(d=he.current)==null?void 0:d.focus()})},[y]);St(()=>{const o=y.current;Fe(),o.eventSource==="keyboard"&&D?.(o.value)},[b,D]);function Be(o){const d=lt(o);d!=null&&d!==y.current.value&&ae(d)}cn(Ie,{onPanSessionStart(o){const d=y.current;d.isInteractive&&(Te(!0),Fe(),Be(o),G?.(d.value))},onPanSessionEnd(){const o=y.current;o.isInteractive&&(Te(!1),D?.(o.value))},onPan(o){y.current.isInteractive&&Be(o)}});const ct=m.useCallback((o={},d=null)=>({...o,...L,ref:ge(d,Ie),tabIndex:-1,"aria-disabled":ye(c),"data-focused":$(ce),style:{...o.style,...$e}}),[L,c,ce,$e]),ut=m.useCallback((o={},d=null)=>({...o,ref:ge(d,fe),id:Me,"data-disabled":$(c),style:{...o.style,...ze}}),[c,Me,ze]),dt=m.useCallback((o={},d=null)=>({...o,ref:d,style:{...o.style,...Ae}}),[Ae]),ft=m.useCallback((o={},d=null)=>({...o,ref:ge(d,he),role:"slider",tabIndex:ue?0:void 0,id:Re,"data-active":$(le),"aria-valuetext":De,"aria-valuemin":n,"aria-valuemax":r,"aria-valuenow":b,"aria-orientation":l,"aria-disabled":ye(c),"aria-readonly":ye(v),"aria-label":B,"aria-labelledby":B?void 0:N,style:{...o.style,...Ve(0)},onKeyDown:Se(o.onKeyDown,Ne),onFocus:Se(o.onFocus,()=>Ce(!0)),onBlur:Se(o.onBlur,()=>Ce(!1))}),[ue,Re,le,De,n,r,b,l,c,v,B,N,Ve,Ne]),ht=m.useCallback((o,d=null)=>{const O=!(o.value<n||o.value>r),P=b>=o.value,T=We(o.value,n,r),pe={position:"absolute",pointerEvents:"none",...gn({orientation:l,vertical:{bottom:S?`${100-T}%`:`${T}%`},horizontal:{left:S?`${100-T}%`:`${T}%`}})};return{...o,ref:d,role:"presentation","aria-hidden":!0,"data-disabled":$(c),"data-invalid":$(!O),"data-highlighted":$(P),style:{...o.style,...pe}}},[c,S,r,n,l,b]),mt=m.useCallback((o={},d=null)=>({...o,ref:d,type:"hidden",value:b,name:I}),[I,b]);return{state:{value:b,isFocused:ce,isDragging:le},actions:_,getRootProps:ct,getTrackProps:ut,getInnerTrackProps:dt,getThumbProps:ft,getMarkerProps:ht,getInputProps:mt}}function gn(e){const{orientation:t,vertical:n,horizontal:r}=e;return t==="vertical"?n:r}function xn(e,t){return t<e?e:e+(t-e)/2}var[bn,se]=Ke({name:"SliderContext",hookName:"useSliderContext",providerName:"<Slider />"}),[yn,oe]=Ke({name:"SliderStylesContext",hookName:"useSliderStyles",providerName:"<Slider />"}),nt=F((e,t)=>{var n;const r={...e,orientation:(n=e?.orientation)!=null?n:"horizontal"},s=wt("Slider",r),f=Pt(r),{direction:a}=kt();f.direction=a;const{getInputProps:p,getRootProps:i,...l}=vn(f),u=i(),c=p({},t);return h.jsx(bn,{value:l,children:h.jsx(yn,{value:s,children:h.jsxs(R.div,{...u,className:X("chakra-slider",r.className),__css:s.container,children:[r.children,h.jsx("input",{...c})]})})})});nt.displayName="Slider";var rt=F((e,t)=>{const{getThumbProps:n}=se(),r=oe(),s=n(e,t);return h.jsx(R.div,{...s,className:X("chakra-slider__thumb",e.className),__css:r.thumb})});rt.displayName="SliderThumb";var st=F((e,t)=>{const{getTrackProps:n}=se(),r=oe(),s=n(e,t);return h.jsx(R.div,{...s,className:X("chakra-slider__track",e.className),__css:r.track})});st.displayName="SliderTrack";var ot=F((e,t)=>{const{getInnerTrackProps:n}=se(),r=oe(),s=n(e,t);return h.jsx(R.div,{...s,className:X("chakra-slider__filled-track",e.className),__css:r.filledTrack})});ot.displayName="SliderFilledTrack";var Sn=F((e,t)=>{const{getMarkerProps:n}=se(),r=oe(),s=n(e,t);return h.jsx(R.div,{...s,className:X("chakra-slider__marker",e.className),__css:r.mark})});Sn.displayName="SliderMark";const wn=({balance:e,setApproveAmount:t})=>{const[n,r]=m.useState(!1),[s,f]=m.useState(!1),a=e?.getValue("number")||0,i=a*3+1,l=10**Math.round(Math.log10(a/100)),[u,c]=m.useState(a),v=u>=a,g=v&&u<i?"brand.btnPrimary":"brand.orange";return m.useEffect(()=>{t(i===u?void 0:u)},[i,t,u]),h.jsxs(h.Fragment,{children:[h.jsxs(V,{direction:"row",flex:1,mb:2,mt:1,children:[h.jsxs(Q,{mb:3,children:[j("views.swap.amountToApprove"),":"," ",u===i?"Infinite":new Et(u).toSignificant()," ",e.ticker]}),h.jsx(xe,{content:j("views.swap.amountToApproveExplanation"),place:"top",children:h.jsx(Tt,{className:"ml-1",color:"secondary",name:"infoCircle",size:18})})]}),h.jsx(V,{mx:2,onMouseEnter:()=>f(!0),onMouseLeave:()=>f(!1),children:h.jsxs(nt,{max:i,onChange:c,onChangeEnd:()=>r(!1),onChangeStart:()=>r(!0),size:"lg",step:l,value:u,children:[h.jsx(st,{bg:"textSecondary",boxSize:2,children:h.jsx(ot,{bg:g,boxSize:2,width:"50%"})}),h.jsx(Ct,{hasArrow:!0,bg:"bgPrimary",isOpen:s||n,label:h.jsxs(Qe,{p:1,children:[h.jsxs(V,{children:[h.jsx(Q,{textStyle:"caption-xs",variant:"secondary",children:"Amount to approve:  "}),h.jsxs(Q,{color:"textPrimary",textStyle:"caption-xs",children:[u===i?"Infinite":u," ",e.ticker]})]}),!v&&h.jsx(Q,{color:"textPrimary",textStyle:"caption-xs",children:j("views.swap.approveLessThanBalance")})]}),placement:"top",children:h.jsx(rt,{bgColor:g,boxSize:4})}),h.jsx(V,{onClick:()=>c(0),sx:{w:4,h:4,borderRadius:"50%",bg:g,position:"absolute",top:"50%",transform:"translateY(-50%)",left:"-8px"}}),h.jsx(V,{onClick:()=>c(4),sx:{w:4,h:4,borderRadius:"50%",bg:"textSecondary",position:"absolute",top:"50%",transform:"translateY(-50%)",right:"-8px"}})]})}),h.jsxs(V,{flex:1,justify:"end",mt:2,mx:-2,children:[h.jsx(xe,{content:j("views.swap.approveDefaultExplanation"),children:h.jsx(Le,{mr:2,onClick:()=>c(a),size:"xs",variant:"tint",children:j("common.default")})}),h.jsx(xe,{content:j("views.swap.approveInfiniteExplanation"),children:h.jsx(Le,{onClick:()=>c(i),size:"xs",textColor:"brand.orange",variant:"tint",children:j("views.swap.infinite")})})]})]})},jn=m.memo(({balance:e,inputAsset:t,handleApprove:n,setVisible:r,totalFee:s,visible:f})=>{const[a,p]=m.useState(),i=m.useCallback(()=>{r(!1),n(a)},[a,n,r]),l=jt({assetName:t.ticker,assetValue:t.toString(),fee:s});return h.jsxs(It,{inputAssets:[t],isOpened:f,onClose:()=>r(!1),onConfirm:i,children:[h.jsx(_t,{items:l}),e?.getValue("number")?h.jsx(wn,{balance:e,setApproveAmount:p}):null]})});export{jn as A,Qe as S,hn as a,cn as b,be as c,ye as d,$ as e,Se as f,Ht as g,Yt as h,In as i,X as j,nt as k,st as l,ot as m,rt as n,Z as o,Ut as p,Oe as r,At as u,We as v};
