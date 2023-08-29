import{a5 as H,f as p,b as w,g as D,h as N,i as V,j as W,k as U,w as R,d as G,e as _,o as y,y as K,z as X,a3 as q,x as I,n as J,X as Y,c as x,A as T,a as Z,t as ee,a4 as te,T as ne,a6 as se,a7 as oe,a8 as C}from"./framework.08f3efe0.js";function Pe(e,n){return e.install=t=>{t.component(n,e)},e}const ae=(e,n)=>(e.install=t=>{e._context=t._context,t.config.globalProperties[n]=e},e);var z;const h=typeof window<"u",Se=e=>typeof e=="number",re=e=>typeof e=="string",g=()=>{};h&&((z=window==null?void 0:window.navigator)!=null&&z.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function m(e){return typeof e=="function"?e():w(e)}function ie(e){return e}function b(e){return W()?(U(e),!0):!1}function le(e,n=!0){D()?N(e):n?e():V(e)}function $(e,n,t={}){const{immediate:s=!0}=t,a=p(!1);let o=null;function r(){o&&(clearTimeout(o),o=null)}function l(){a.value=!1,r()}function i(...v){r(),a.value=!0,o=setTimeout(()=>{a.value=!1,o=null,e(...v)},m(n))}return s&&(a.value=!0,h&&i()),b(l),{isPending:a,start:i,stop:l}}function Ae(e=!1,n={}){const{truthyValue:t=!0,falsyValue:s=!1}=n,a=H(e),o=p(e);function r(l){if(arguments.length)return o.value=l,o.value;{const i=m(t);return o.value=o.value===i?m(s):i,o.value}}return a?r:[o,r]}function k(e){var n;const t=m(e);return(n=t==null?void 0:t.$el)!=null?n:t}const Q=h?window:void 0,ue=h?window.navigator:void 0;function ce(...e){let n,t,s,a;if(re(e[0])?([t,s,a]=e,n=Q):[n,t,s,a]=e,!n)return g;let o=g;const r=R(()=>k(n),i=>{o(),i&&(i.addEventListener(t,s,a),o=()=>{i.removeEventListener(t,s,a),o=g})},{immediate:!0,flush:"post"}),l=()=>{r(),o()};return b(l),l}function j(e,n=!1){const t=p(),s=()=>t.value=!!e();return s(),le(s,n),t}function Ne(e={}){const{navigator:n=ue,read:t=!1,source:s,copiedDuring:a=1500}=e,o=["copy","cut"],r=j(()=>n&&"clipboard"in n),l=p(""),i=p(!1),v=$(()=>i.value=!1,a);function f(){n.clipboard.readText().then(c=>{l.value=c})}if(r.value&&t)for(const c of o)ce(c,f);async function u(c=m(s)){r.value&&c!=null&&(await n.clipboard.writeText(c),l.value=c,i.value=!0,v.start())}return{isSupported:r,text:l,copied:i,copy:u}}const L=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},M="__vueuse_ssr_handlers__";L[M]=L[M]||{};var B=Object.getOwnPropertySymbols,fe=Object.prototype.hasOwnProperty,de=Object.prototype.propertyIsEnumerable,pe=(e,n)=>{var t={};for(var s in e)fe.call(e,s)&&n.indexOf(s)<0&&(t[s]=e[s]);if(e!=null&&B)for(var s of B(e))n.indexOf(s)<0&&de.call(e,s)&&(t[s]=e[s]);return t};function ve(e,n,t={}){const s=t,{window:a=Q}=s,o=pe(s,["window"]);let r;const l=j(()=>a&&"ResizeObserver"in a),i=()=>{r&&(r.disconnect(),r=void 0)},v=R(()=>k(e),u=>{i(),l.value&&a&&u&&(r=new ResizeObserver(n),r.observe(u,o))},{immediate:!0,flush:"post"}),f=()=>{i(),v()};return b(f),{isSupported:l,stop:f}}var E;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(E||(E={}));var ge=Object.defineProperty,P=Object.getOwnPropertySymbols,me=Object.prototype.hasOwnProperty,we=Object.prototype.propertyIsEnumerable,S=(e,n,t)=>n in e?ge(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,he=(e,n)=>{for(var t in n||(n={}))me.call(n,t)&&S(e,t,n[t]);if(P)for(var t of P(n))we.call(n,t)&&S(e,t,n[t]);return e};const ye={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};he({linear:ie},ye);const be=["id"],Oe={class:"message-content"},_e=["innerHTML"],Ie=G({__name:"index",props:{message:{},duration:{default:2e3},id:{},showIcon:{type:Boolean,default:!0},offset:{default:20},closeBtn:{type:Boolean,default:!1},type:{default:"info"}},emits:["destroy"],setup(e,{expose:n}){const t=e,s=p(!1),a=p(0),o=p();let r=g;function l(){t.duration!==0&&({stop:r}=$(()=>{s.value=!1,r=g},t.duration))}N(()=>{l(),s.value=!0}),ve(o,()=>{a.value=o.value.getBoundingClientRect().height});const i=_(()=>Te(t.id)+t.offset),v=_(()=>a.value+i.value);return n({bottom:v,lastOffset:i,visible:s}),(f,u)=>(y(),K(ne,{name:"fn-message-fade",onAfterLeave:u[2]||(u[2]=c=>f.$emit("destroy"))},{default:X(()=>[q(I("div",{id:f.id,ref_key:"elRef",ref:o,class:J(["fn-message",[`is-${f.type}`]]),style:Y({top:`${i.value}px`}),onMouseenter:u[1]||(u[1]=(...c)=>w(r)&&w(r)(...c)),onMouseleave:l},[I("div",Oe,[t.showIcon?(y(),x("i",{key:0,innerHTML:w(Me)(t.type)},null,8,_e)):T("",!0),Z(" "+ee(f.message),1)]),f.closeBtn?(y(),x("div",{key:0,class:"close-btn",onClick:u[0]||(u[0]=c=>s.value=!1)}," × ")):T("",!0)],46,be),[[te,s.value]])]),_:1}))}}),d=se([]);let A=1;function F(e){const n=document.createElement("div"),t=`fn-message-${A}`,s=oe(Ie,{...e,id:t,onDestroy:()=>{xe(t),C(null,n)}},()=>e.message);C(s,n),document.body.appendChild(n.firstElementChild);const a={id:t,vnode:s,component:s.component,props:e,close:()=>{s.component.exposed.visible.value=!1}};return d.push(a),A++,a}function xe(e){const n=d.findIndex(t=>t.id===e);n!==-1&&(d[n].close(),d.splice(n,1))}const Te=e=>{const n=d.findIndex(s=>s.id===e),t=d[n-1];return t?t.component.exposed.bottom.value:0};function Ce(e){return function(n,t){return F({...t,type:e,message:n})}}function ze(){for(const e of d)e.close();d.splice(0,d.length)}const Le=new Map([["success",`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2-circle" viewBox="0 0 16 16">
  <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"/>
  <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"/>
</svg>`],["warning",`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-exclamation-triangle" viewBox="0 0 16 16">
  <path d="M7.938 2.016A.13.13 0 0 1 8.002 2a.13.13 0 0 1 .063.016.146.146 0 0 1 .054.057l6.857 11.667c.036.06.035.124.002.183a.163.163 0 0 1-.054.06.116.116 0 0 1-.066.017H1.146a.115.115 0 0 1-.066-.017.163.163 0 0 1-.054-.06.176.176 0 0 1 .002-.183L7.884 2.073a.147.147 0 0 1 .054-.057zm1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566z"/>
  <path d="M7.002 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 5.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995z"/>
</svg>`],["danger",`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
</svg>`],["info",`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-info-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
</svg>`]]);function Me(e){return Le.get(e)}const Be=["info","success","warning","danger"],O=F;for(const e of Be)O[e]=Ce(e);O.closeAll=ze;const Re=ae(O,"$message");export{Re as F,Ae as a,Se as i,Ne as u,Pe as w};
