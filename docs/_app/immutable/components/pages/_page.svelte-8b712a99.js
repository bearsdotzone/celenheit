import{S as Q,i as R,s as V,k as _,a as C,q as J,I as W,l as f,h as s,c as F,m as A,r as K,n,G as i,b as L,J as P,K as q,L as S,B as O,M as X}from"../../chunks/index-1307ed6c.js";function Y(o){let d,l,t,a,p,B,u,N,h,v,I,E,m,T,b,y,g,j,c,G,w;return{c(){d=_("meta"),l=C(),t=_("span"),a=_("label"),p=J("Celenheit"),B=C(),u=_("input"),N=C(),h=_("span"),v=_("label"),I=J("Celsius"),E=C(),m=_("input"),T=C(),b=_("span"),y=_("label"),g=J("Fahrenheit"),j=C(),c=_("input"),this.h()},l(e){const r=W("svelte-urkyuj",document.head);d=f(r,"META",{name:!0,content:!0}),r.forEach(s),l=F(e),t=f(e,"SPAN",{class:!0});var U=A(t);a=f(U,"LABEL",{for:!0});var z=A(a);p=K(z,"Celenheit"),z.forEach(s),B=F(U),u=f(U,"INPUT",{inputmode:!0,name:!0,type:!0}),U.forEach(s),N=F(e),h=f(e,"SPAN",{class:!0});var k=A(h);v=f(k,"LABEL",{for:!0});var D=A(v);I=K(D,"Celsius"),D.forEach(s),E=F(k),m=f(k,"INPUT",{inputmode:!0,name:!0,type:!0}),k.forEach(s),T=F(e),b=f(e,"SPAN",{class:!0});var M=A(b);y=f(M,"LABEL",{for:!0});var H=A(y);g=K(H,"Fahrenheit"),H.forEach(s),j=F(M),c=f(M,"INPUT",{inputmode:!0,name:!0,type:!0}),M.forEach(s),this.h()},h(){document.title="Celenheit Calculator",n(d,"name","description"),n(d,"content","Celenheit Calculator"),n(a,"for","celenheit"),n(u,"inputmode","numeric"),n(u,"name","celenheit"),n(u,"type","number"),n(t,"class","svelte-seeq5v"),n(v,"for","celsius"),n(m,"inputmode","numeric"),n(m,"name","celsius"),n(m,"type","number"),n(h,"class","svelte-seeq5v"),n(y,"for","fahrenheit"),n(c,"inputmode","numeric"),n(c,"name","fahrenheit"),n(c,"type","number"),n(b,"class","svelte-seeq5v")},m(e,r){i(document.head,d),L(e,l,r),L(e,t,r),i(t,a),i(a,p),i(t,B),i(t,u),P(u,o[0]),L(e,N,r),L(e,h,r),i(h,v),i(v,I),i(h,E),i(h,m),P(m,o[1]),L(e,T,r),L(e,b,r),i(b,y),i(y,g),i(b,j),i(b,c),P(c,o[2]),G||(w=[q(u,"input",o[3]),q(u,"change",o[4]),q(m,"input",o[5]),q(m,"change",o[6]),q(c,"input",o[7]),q(c,"change",o[8])],G=!0)},p(e,[r]){r&1&&S(u.value)!==e[0]&&P(u,e[0]),r&2&&S(m.value)!==e[1]&&P(m,e[1]),r&4&&S(c.value)!==e[2]&&P(c,e[2])},i:O,o:O,d(e){s(d),e&&s(l),e&&s(t),e&&s(N),e&&s(h),e&&s(T),e&&s(b),G=!1,X(w)}}}function Z(o,d,l){let t=0,a=0,p=32;function B(){t=S(this.value),l(0,t)}const u=E=>{l(1,a=Number((t/(45/17)).toFixed(1))),l(2,p=Number((t/(25/17)+32).toFixed(0)))};function N(){a=S(this.value),l(1,a)}const h=E=>{l(0,t=Number((a*(45/17)).toFixed(1))),l(2,p=Number((a*1.8+32).toFixed(0)))};function v(){p=S(this.value),l(2,p)}return[t,a,p,B,u,N,h,v,E=>{l(0,t=Number(((p-32)*(25/17)).toFixed(1))),l(1,a=Number(((p-32)/1.8).toFixed(1)))}]}class $ extends Q{constructor(d){super(),R(this,d,Z,Y,V,{})}}export{$ as default};
