import{a4 as g,f,b as y,g as v,h as C,i as p,j as S,k as w}from"./framework.8c39f4f9.js";const P=["primary","onPrimary","primaryContainer","onPrimaryContainer","secondary","onSecondary","secondaryContainer","onSecondaryContainer","tertiary","onTertiary","tertiaryContainer","onTertiaryContainer","error","onError","errorContainer","onErrorContainer","background","onBackground","surface","onSurface","surfaceVariant","onSurfaceVariant","outline","outlineVariant","shadow","scrim","inverseSurface","inverseOnSurface","inversePrimary","success","onSuccess","successContainer","onSuccessContainer","warning","onWarning","warningContainer","onWarningContainer","info","onInfo","infoContainer","onInfoContainer"],b=["0","10","20","30","40","50","60","70","90","95","99","100"];var l;const m=typeof window<"u",k=n=>typeof n=="number",I=n=>typeof n=="string",V=()=>{};m&&((l=window==null?void 0:window.navigator)!=null&&l.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function c(n){return typeof n=="function"?n():y(n)}function O(n){return n}function h(n){return S()?(w(n),!0):!1}function j(n,t=!0){v()?C(n):t?n():p(n)}function x(n,t,i={}){const{immediate:u=!0}=i,r=f(!1);let e=null;function o(){e&&(clearTimeout(e),e=null)}function s(){r.value=!1,o()}function a(...d){o(),r.value=!0,e=setTimeout(()=>{r.value=!1,e=null,n(...d)},c(t))}return u&&(r.value=!0,m&&a()),h(s),{isPending:r,start:a,stop:s}}function z(n=!1,t={}){const{truthyValue:i=!0,falsyValue:u=!1}=t,r=g(n),e=f(n);function o(s){if(arguments.length)return e.value=s,e.value;{const a=c(i);return e.value=e.value===a?c(u):a,e.value}}return r?o:[e,o]}const A=["small","medium","large"],D={small:"20",medium:"24",large:"28"};export{b as a,I as b,A as c,j as d,O as e,m as f,h as g,D as h,k as i,z as j,V as n,c as r,P as t,x as u};