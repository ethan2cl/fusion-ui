import{i as M,a as S,b as _,u as V,w as z,c as P}from"./size.2bea1461.js";import{an as U,ad as D,a7 as E,e as b,g as x,d as R,ag as O,f as A,l as j,h as H,v as I,o as v,c as N,F as X,M as q,X as W,b as s,n as f,x as g,a4 as Y,ai as G,C as J,a6 as K,D as Q}from"./framework.ac0b83b1.js";import{c as C}from"./index.79ebabd9.js";const pe=e=>!e&&e!==0||U(e)&&e.length===0||D(e)&&!Object.keys(e).length,Z=e=>E(e)?!Number.isNaN(Number(e)):!1;function w(e,u="px"){const t=M(e)||Z(e);return!t&&!e?"":t?`${e}${u}`:(E(e),e)}const ee=(e,u)=>{const t=S(e.color,"var(--md-sys-color-primary)");return b(()=>C`
      --fn-ripple--duration: ${e.duration}ms;
      & .${u.e("span")} {
        background-color: ${t.value};
      }
    `)},te=(e,u)=>{const t=S(e.color),o=x(),{disabled:r}=(o==null?void 0:o.attrs)||{};return b(()=>{const a=e.modelValue?t.value||"var(--md-sys-color-primary)":"#fff",l=e.modelValue?t.value||"var(--md-sys-color-primary)":"#605959",y=e.modelValue?t.value||"var(--md-sys-color-primary)":"#000";return C`
      opacity: ${r===""?.5:1};
      --fn-switch-color: ${t.value||"var(--md-sys-color-primary)"};
      --fn-switch--track-color: ${y};
      --fn-switch--dot-color: ${a};
      --fn-switch--dot-hover-color: ${l};
      & .${u.e("icon")} {
        color: ${t.value||"var(--md-sys-color-primary)"};
      }
    `})},se="update:modelValue",oe=_({color:{type:[String,Function],default:"var(--fn-sys-color-ripple)"},center:{type:Boolean,default:!1},duration:{type:Number,default:600}}),re=R({__name:"index",props:oe,setup(e,{expose:u}){var k;const t=e,o=O([]),r=A(t.duration),a=(k=x())==null?void 0:k.parent,l=V("ripple"),y=ee(t,l);let m=null,n=null;const d=c=>{const p=c.currentTarget,i=p.getBoundingClientRect(),$=Math.min(p.clientWidth,p.clientHeight),F=$/2,L=t.center?0:c.clientX-i.left-F,T=t.center?0:c.clientY-i.top-F;o.push({x:L,y:T,size:$})},h=()=>{m&&(clearTimeout(m),m=null)};return j(()=>{o.length>0&&(h(),m=setTimeout(()=>{o.length=0,h()},r.value*4))}),H(()=>{var c,p,i;a&&(n=(c=a.proxy)==null?void 0:c.$el.addEventListener("mousedown",d),window.getComputedStyle((p=a.proxy)==null?void 0:p.$el).position==="static"&&((i=a.proxy)==null||i.$el.classList.add(C`
        position: relative;
      `)))}),I(()=>{var c;h(),n&&((c=a==null?void 0:a.proxy)==null||c.$el.removeEventListener(n),n=null)}),u({addRipple:d}),(c,p)=>(v(),N("span",{class:f([s(l).b(),s(y)])},[(v(!0),N(X,null,q(o,(i,$)=>(v(),N("span",{key:`ripple_${$}`,style:W({top:s(w)(i.y),left:s(w)(i.x),width:s(w)(i.size),height:s(w)(i.size)}),class:f([[s(l).e("span")],"pressed-state-layer"])},null,6))),128))],2))}}),B=z(re,"FnRipple");B.name="FnRipple";const ne=B,ae=_({modelValue:{type:Boolean,required:!0},color:{type:[String,Function],default:"primary"},size:{type:String,value:P,default:"medium"},enableRipple:{type:Boolean,default:!0}}),le=R({__name:"index",props:ae,emits:["update:modelValue"],setup(e,{emit:u}){const t=e,o=x(),r=V("switch-new"),a=te(t,r),l=b({get(){return t.modelValue},set(n){u(se,n)}}),y=b(()=>{const{size:n}=t,{disabled:d}=(o==null?void 0:o.attrs)||{};return[r.b(),r.m(n),d===""?r.m("disabled"):""]}),m=b(()=>{const{disabled:n}=(o==null?void 0:o.attrs)||{};return[n===""?r.m("disabled"):r.m("enabled"),l.value?r.m("active"):""]});return(n,d)=>(v(),N("span",{class:f([...s(y),s(a)])},[g("div",{class:f([s(r).e(`overlay--${t.size}`),s(m)])},[g("div",{class:f([s(r).e(`dot--${t.size}`)])},null,2),Y(g("input",J(n.$attrs,{"onUpdate:modelValue":d[0]||(d[0]=h=>K(l)?l.value=h:null),class:[s(r).e("input")],type:"checkbox"}),null,16),[[G,s(l)]]),Q(s(ne),{color:t.color,duration:1200,center:""},null,8,["color"])],2),g("div",{class:f([s(r).e("track")])},null,2)],2))}}),ce=z(le,"FnCheckbox");ce.name="FnSwitchNew";export{ce as F,se as U,w as a,ne as b,pe as i};
