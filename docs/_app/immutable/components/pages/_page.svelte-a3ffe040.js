import{S as se,i as ae,s as ne,k as c,a as w,q as L,I as re,l as f,h as l,c as x,m as E,r as P,n as t,D as s,b as C,J as T,K as F,L as B,B as le,M as ue}from"../../chunks/index-5b7b55b0.js";function ie(i){let k,n,r,m,h,o,d,D,v,S,U,V,u,q,p,N,G,O,_,M,y,I,Q,R,b,j,A,W,X,Y;return{c(){k=c("meta"),n=w(),r=c("h2"),m=L("Celenheit Calculator"),h=w(),o=c("div"),d=c("label"),D=L("Celenheit (Ch or "),v=c("span"),S=L("\u{1F40F}"),U=L(")"),V=w(),u=c("input"),q=w(),p=c("div"),N=c("label"),G=L("Celsius (\xB0C)"),O=w(),_=c("input"),M=w(),y=c("div"),I=c("label"),Q=L("Fahrenheit (\xB0F)"),R=w(),b=c("input"),j=w(),A=c("p"),W=L("Click the ram to copy it to your clipboard."),this.h()},l(e){const a=re("svelte-urkyuj",document.head);k=f(a,"META",{name:!0,content:!0}),a.forEach(l),n=x(e),r=f(e,"H2",{});var Z=E(r);m=P(Z,"Celenheit Calculator"),Z.forEach(l),h=x(e),o=f(e,"DIV",{class:!0});var H=E(o);d=f(H,"LABEL",{for:!0,class:!0});var J=E(d);D=P(J,"Celenheit (Ch or "),v=f(J,"SPAN",{role:!0,tabindex:!0});var g=E(v);S=P(g,"\u{1F40F}"),g.forEach(l),U=P(J,")"),J.forEach(l),V=x(H),u=f(H,"INPUT",{id:!0,name:!0,type:!0,class:!0}),H.forEach(l),q=x(e),p=f(e,"DIV",{class:!0});var K=E(p);N=f(K,"LABEL",{for:!0,class:!0});var $=E(N);G=P($,"Celsius (\xB0C)"),$.forEach(l),O=x(K),_=f(K,"INPUT",{name:!0,type:!0,id:!0,class:!0}),K.forEach(l),M=x(e),y=f(e,"DIV",{class:!0});var z=E(y);I=f(z,"LABEL",{for:!0,class:!0});var ee=E(I);Q=P(ee,"Fahrenheit (\xB0F)"),ee.forEach(l),R=x(z),b=f(z,"INPUT",{name:!0,type:!0,id:!0,class:!0}),z.forEach(l),j=x(e),A=f(e,"P",{});var te=E(A);W=P(te,"Click the ram to copy it to your clipboard."),te.forEach(l),this.h()},h(){document.title="Celenheit Calculator",t(k,"name","description"),t(k,"content","Celenheit Calculator"),t(v,"role","button"),t(v,"tabindex","0"),t(d,"for","celenheit"),t(d,"class","svelte-1nxfbkw"),t(u,"id","celenheit"),t(u,"name","celenheit"),t(u,"type","number"),t(u,"class","svelte-1nxfbkw"),t(o,"class","box svelte-1nxfbkw"),t(N,"for","celsius"),t(N,"class","svelte-1nxfbkw"),t(_,"name","celsius"),t(_,"type","number"),t(_,"id","celsius"),t(_,"class","svelte-1nxfbkw"),t(p,"class","box svelte-1nxfbkw"),t(I,"for","fahrenheit"),t(I,"class","svelte-1nxfbkw"),t(b,"name","fahrenheit"),t(b,"type","number"),t(b,"id","fahrenheit"),t(b,"class","svelte-1nxfbkw"),t(y,"class","box svelte-1nxfbkw")},m(e,a){s(document.head,k),C(e,n,a),C(e,r,a),s(r,m),C(e,h,a),C(e,o,a),s(o,d),s(d,D),s(d,v),s(v,S),s(d,U),s(o,V),s(o,u),T(u,i[0]),C(e,q,a),C(e,p,a),s(p,N),s(N,G),s(p,O),s(p,_),T(_,i[1]),C(e,M,a),C(e,y,a),s(y,I),s(I,Q),s(y,R),s(y,b),T(b,i[2]),C(e,j,a),C(e,A,a),s(A,W),X||(Y=[F(v,"keypress",i[4]),F(v,"click",i[5]),F(u,"input",i[6]),F(u,"change",i[7]),F(_,"input",i[8]),F(_,"change",i[9]),F(b,"input",i[10]),F(b,"change",i[11])],X=!0)},p(e,[a]){a&1&&B(u.value)!==e[0]&&T(u,e[0]),a&2&&B(_.value)!==e[1]&&T(_,e[1]),a&4&&B(b.value)!==e[2]&&T(b,e[2])},i:le,o:le,d(e){l(k),e&&l(n),e&&l(r),e&&l(h),e&&l(o),e&&l(q),e&&l(p),e&&l(M),e&&l(y),e&&l(j),e&&l(A),X=!1,ue(Y)}}}function oe(i,k,n){let r=0,m=0,h=32;const o=async()=>{await navigator.clipboard.writeText("\u{1F40F}")},d=()=>o(),D=()=>o();function v(){r=B(this.value),n(0,r)}const S=p=>{n(1,m=Number((r/(45/17)).toFixed(1))),n(2,h=Number((r/(25/17)+32).toFixed(0)))};function U(){m=B(this.value),n(1,m)}const V=p=>{n(0,r=Number((m*(45/17)).toFixed(1))),n(2,h=Number((m*1.8+32).toFixed(0)))};function u(){h=B(this.value),n(2,h)}return[r,m,h,o,d,D,v,S,U,V,u,p=>{n(0,r=Number(((h-32)*(25/17)).toFixed(1))),n(1,m=Number(((h-32)/1.8).toFixed(1)))}]}class fe extends se{constructor(k){super(),ae(this,k,oe,ie,ne,{})}}export{fe as default};