import{u as v,_ as b,a as g,w as R}from"./plugin-vue_export-helper.c2a911ee.js";import{e as l,d as _,a3 as y,o as V,c as z,D as u,n as m,b as o,A as F,a4 as k,a5 as x,x as C,C as $,a6 as N}from"./framework.ac0b83b1.js";import{u as E,F as S,a as h}from"./index.1875b7cc.js";import{c as w,a as B,U as D,i as A}from"./size.bbb9954b.js";const P=(a,r)=>{const e=v(a,"color","var(--md-sys-color-primary)"),n=E(a,"color","var(--md-sys-color-primary-rgb)");return l(()=>w`
      --fn-radio-color: ${e.value};
      --fn-radio-color-rgb: ${n.value};
      & .${r.e("icon")} {
        color: ${e.value};
      }
    `)},U={modelValue:{type:[String,Number,Boolean],required:!0},size:{type:String,value:B,default:"medium"},color:{type:[String,Function],default:"primary"}},I=_({__name:"index",props:U,emits:["update:modelValue"],setup(a,{emit:r}){const e=a,n=y(),s=g("radio"),d=P(e,s),i=l({get(){return e.modelValue},set(t){r(D,t)}}),p=l(()=>e.modelValue===n.value?"mdi:radiobox-marked":"mdi:radiobox-blank");return(t,c)=>(V(),z("span",{class:m([o(s).b(),o(s).m(e.size),o(d)])},[u(o(S),{class:m([o(s).e("icon")]),icon:o(p),size:o(A)[e.size]},null,8,["class","icon","size"]),F(" eslint-disable vue/html-self-closing "),k(C("input",$(t.$attrs,{"onUpdate:modelValue":c[0]||(c[0]=f=>N(i)?i.value=f:null),class:[o(s).e("input")],type:"radio"}),null,16),[[x,o(i)]]),u(o(h),{color:e.color,center:""},null,8,["color"])],2))}});var M=b(I,[["__file","/home/runner/work/fusion-ui/fusion-ui/packages/components/radio/src/index.vue"]]);const T=R(M,"FnRadio");T.name="FnRadio";export{T as F};
