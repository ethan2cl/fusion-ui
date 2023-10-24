import{i as M,a as S,b as _,u as V,w as z,c as P}from"./size.402f4081.js";import{am as U,ad as D,a7 as E,e as b,g as N,d as R,ag as O,f as A,l as j,h as H,v as I,o as v,c as x,F as X,M as q,X as W,b as t,n as f,x as $,a4 as Y,ah as G,C as J,a6 as K,D as Q}from"./framework.f521ec0a.js";import{c as C}from"./index.f0bda0f8.js";const pe=e=>!e&&e!==0||U(e)&&e.length===0||D(e)&&!Object.keys(e).length,Z=e=>E(e)?!Number.isNaN(Number(e)):!1;function w(e,u="px"){const s=M(e)||Z(e);return!s&&!e?"":s?`${e}${u}`:(E(e),e)}const ee=(e,u)=>{const s=S(e.color,"var(--md-sys-color-primary)");return b(()=>C`
      & .${u.e("span")} {
        background-color: ${s.value};
      }
    `)},se=(e,u)=>{const s=S(e.color),o=N(),{disabled:r}=(o==null?void 0:o.attrs)||{};return b(()=>{const a=e.modelValue?s.value||"var(--md-sys-color-primary)":"#fff",l=e.modelValue?s.value||"var(--md-sys-color-primary)":"#605959",y=e.modelValue?s.value||"var(--md-sys-color-primary)":"#000";return C`
      opacity: ${r===""?.5:1};
      --fn-switch-color: ${s.value||"var(--md-sys-color-primary)"};
      --fn-switch--track-color: ${y};
      --fn-switch--dot-color: ${a};
      --fn-switch--dot-hover-color: ${l};
      & .${u.e("icon")} {
        color: ${s.value||"var(--md-sys-color-primary)"};
      }
    `})},te="update:modelValue",oe=_({color:{type:[String,Function],default:"var(--fn-sys-color-ripple)"},center:{type:Boolean,default:!1}}),re=R({__name:"index",props:oe,setup(e,{expose:u}){var k;const s=e,o=O([]),r=A(600),a=(k=N())==null?void 0:k.parent,l=V("ripple"),y=ee(s,l);let m=null,n=null;const d=c=>{const p=c.currentTarget,i=p.getBoundingClientRect(),g=Math.max(p.clientWidth,p.clientHeight),F=g/2,L=s.center?0:c.clientX-i.left-F,T=s.center?0:c.clientY-i.top-F;o.push({x:L,y:T,size:g})},h=()=>{m&&(clearTimeout(m),m=null)};return j(()=>{o.length>0&&(h(),m=setTimeout(()=>{o.length=0,h()},r.value*4))}),H(()=>{var c,p,i;a&&(n=(c=a.proxy)==null?void 0:c.$el.addEventListener("mousedown",d),window.getComputedStyle((p=a.proxy)==null?void 0:p.$el).position==="static"&&((i=a.proxy)==null||i.$el.classList.add(C`
        position: relative;
      `)))}),I(()=>{var c;h(),n&&((c=a==null?void 0:a.proxy)==null||c.$el.removeEventListener(n),n=null)}),u({addRipple:d}),(c,p)=>(v(),x("span",{class:f([t(l).b(),t(y)])},[(v(!0),x(X,null,q(o,(i,g)=>(v(),x("span",{key:`ripple_${g}`,style:W({top:t(w)(i.y),left:t(w)(i.x),width:t(w)(i.size),height:t(w)(i.size)}),class:f([[t(l).e("span")],"pressed-state-layer"])},null,6))),128))],2))}}),B=z(re,"FnRipple");B.name="FnRipple";const ne=B,ae=_({modelValue:{type:Boolean,required:!0},color:{type:[String,Function],default:"primary"},size:{type:String,value:P,default:"medium"},enableRipple:{type:Boolean,default:!0}}),le=R({__name:"index",props:ae,emits:["update:modelValue"],setup(e,{emit:u}){const s=e,o=N(),r=V("switch"),a=se(s,r),l=b({get(){return s.modelValue},set(n){u(te,n)}}),y=b(()=>{const{size:n}=s,{disabled:d}=(o==null?void 0:o.attrs)||{};return[r.b(),r.m(n),d===""?r.m("disabled"):""]}),m=b(()=>{const{disabled:n}=(o==null?void 0:o.attrs)||{};return[n===""?r.m("disabled"):r.m("enabled"),l.value?r.m("active"):""]});return(n,d)=>(v(),x("span",{class:f([...t(y),t(a)])},[$("div",{class:f([t(r).e(`overlay--${s.size}`),t(m)])},[$("div",{class:f([t(r).e(`dot--${s.size}`)])},null,2),Y($("input",J(n.$attrs,{"onUpdate:modelValue":d[0]||(d[0]=h=>K(l)?l.value=h:null),class:[t(r).e("input")],type:"checkbox"}),null,16),[[G,t(l)]]),Q(t(ne),{color:s.color,center:""},null,8,["color"])],2),$("div",{class:f([t(r).e("track")])},null,2)],2))}}),ce=z(le,"FnCheckbox");ce.name="FnSwitchNew";export{ce as F,te as U,w as a,ne as b,pe as i};
