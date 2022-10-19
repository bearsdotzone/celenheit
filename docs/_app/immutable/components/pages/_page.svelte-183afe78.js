import{S as Q,i as R,s as V,k as _,a as C,q as J,I as W,l as f,h as u,c as F,m as A,r as K,n as t,G as i,b as L,J as P,K as q,L as S,B as O,M as X}from"../../chunks/index-1307ed6c.js";function Y(h){let d,a,n,l,m,B,s,N,c,v,I,E,p,T,b,y,g,j,o,G,w;return{c(){d=_("meta"),a=C(),n=_("span"),l=_("label"),m=J("Celenheit"),B=C(),s=_("input"),N=C(),c=_("span"),v=_("label"),I=J("Celsius"),E=C(),p=_("input"),T=C(),b=_("span"),y=_("label"),g=J("Fahrenheit"),j=C(),o=_("input"),this.h()},l(e){const r=W("svelte-urkyuj",document.head);d=f(r,"META",{name:!0,content:!0}),r.forEach(u),a=F(e),n=f(e,"SPAN",{class:!0});var U=A(n);l=f(U,"LABEL",{for:!0});var z=A(l);m=K(z,"Celenheit"),z.forEach(u),B=F(U),s=f(U,"INPUT",{inputmode:!0,pattern:!0,name:!0,type:!0}),U.forEach(u),N=F(e),c=f(e,"SPAN",{class:!0});var k=A(c);v=f(k,"LABEL",{for:!0});var D=A(v);I=K(D,"Celsius"),D.forEach(u),E=F(k),p=f(k,"INPUT",{inputmode:!0,pattern:!0,name:!0,type:!0}),k.forEach(u),T=F(e),b=f(e,"SPAN",{class:!0});var M=A(b);y=f(M,"LABEL",{for:!0});var H=A(y);g=K(H,"Fahrenheit"),H.forEach(u),j=F(M),o=f(M,"INPUT",{inputmode:!0,pattern:!0,name:!0,type:!0}),M.forEach(u),this.h()},h(){document.title="Celenheit Calculator",t(d,"name","description"),t(d,"content","Celenheit Calculator"),t(l,"for","celenheit"),t(s,"inputmode","numeric"),t(s,"pattern","[0-9]*"),t(s,"name","celenheit"),t(s,"type","number"),t(n,"class","svelte-seeq5v"),t(v,"for","celsius"),t(p,"inputmode","numeric"),t(p,"pattern","[0-9]*"),t(p,"name","celsius"),t(p,"type","number"),t(c,"class","svelte-seeq5v"),t(y,"for","fahrenheit"),t(o,"inputmode","numeric"),t(o,"pattern","[0-9]*"),t(o,"name","fahrenheit"),t(o,"type","number"),t(b,"class","svelte-seeq5v")},m(e,r){i(document.head,d),L(e,a,r),L(e,n,r),i(n,l),i(l,m),i(n,B),i(n,s),P(s,h[0]),L(e,N,r),L(e,c,r),i(c,v),i(v,I),i(c,E),i(c,p),P(p,h[1]),L(e,T,r),L(e,b,r),i(b,y),i(y,g),i(b,j),i(b,o),P(o,h[2]),G||(w=[q(s,"input",h[3]),q(s,"change",h[4]),q(p,"input",h[5]),q(p,"change",h[6]),q(o,"input",h[7]),q(o,"change",h[8])],G=!0)},p(e,[r]){r&1&&S(s.value)!==e[0]&&P(s,e[0]),r&2&&S(p.value)!==e[1]&&P(p,e[1]),r&4&&S(o.value)!==e[2]&&P(o,e[2])},i:O,o:O,d(e){u(d),e&&u(a),e&&u(n),e&&u(N),e&&u(c),e&&u(T),e&&u(b),G=!1,X(w)}}}function Z(h,d,a){let n=0,l=0,m=32;function B(){n=S(this.value),a(0,n)}const s=E=>{a(1,l=Number((n/(45/17)).toFixed(1))),a(2,m=Number((n/(25/17)+32).toFixed(0)))};function N(){l=S(this.value),a(1,l)}const c=E=>{a(0,n=Number((l*(45/17)).toFixed(1))),a(2,m=Number((l*1.8+32).toFixed(0)))};function v(){m=S(this.value),a(2,m)}return[n,l,m,B,s,N,c,v,E=>{a(0,n=Number(((m-32)*(25/17)).toFixed(1))),a(1,l=Number(((m-32)/1.8).toFixed(1)))}]}class $ extends Q{constructor(d){super(),R(this,d,Z,Y,V,{})}}export{$ as default};