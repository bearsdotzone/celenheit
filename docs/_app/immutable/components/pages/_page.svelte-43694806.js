import{S as se,i as ae,s as ue,k as h,a as j,q as I,I as re,l as c,h as t,c as F,m as q,r as L,n as l,D as s,b,J as A,K as N,L as T,B as le,M as ne}from"../../chunks/index-5b7b55b0.js";function oe(n){let C,u,r,_,p,o,m,B,y,D,S,U,i,V,f,k,G,O,v,w,E,x,Q,R,d,M,P,W,X,Y;return{c(){C=h("meta"),u=j(),r=h("h2"),_=I("Celenheit Calculator"),p=j(),o=h("div"),m=h("label"),B=I("Celenheit (Ch or "),y=h("span"),D=I("\u{1F40F}"),S=I(")"),U=j(),i=h("input"),V=j(),f=h("div"),k=h("label"),G=I("Celsius (\xB0C)"),O=j(),v=h("input"),w=j(),E=h("div"),x=h("label"),Q=I("Fahrenheit (\xB0F)"),R=j(),d=h("input"),M=j(),P=h("p"),W=I("Click the ram to copy it to your clipboard."),this.h()},l(e){const a=re("svelte-urkyuj",document.head);C=c(a,"META",{name:!0,content:!0}),a.forEach(t),u=F(e),r=c(e,"H2",{});var Z=q(r);_=L(Z,"Celenheit Calculator"),Z.forEach(t),p=F(e),o=c(e,"DIV",{class:!0});var H=q(o);m=c(H,"LABEL",{for:!0,class:!0});var J=q(m);B=L(J,"Celenheit (Ch or "),y=c(J,"SPAN",{});var g=q(y);D=L(g,"\u{1F40F}"),g.forEach(t),S=L(J,")"),J.forEach(t),U=F(H),i=c(H,"INPUT",{name:!0,type:!0,class:!0}),H.forEach(t),V=F(e),f=c(e,"DIV",{class:!0});var K=q(f);k=c(K,"LABEL",{for:!0,class:!0});var $=q(k);G=L($,"Celsius (\xB0C)"),$.forEach(t),O=F(K),v=c(K,"INPUT",{name:!0,type:!0,class:!0}),K.forEach(t),w=F(e),E=c(e,"DIV",{class:!0});var z=q(E);x=c(z,"LABEL",{for:!0,class:!0});var ee=q(x);Q=L(ee,"Fahrenheit (\xB0F)"),ee.forEach(t),R=F(z),d=c(z,"INPUT",{name:!0,type:!0,class:!0}),z.forEach(t),M=F(e),P=c(e,"P",{});var te=q(P);W=L(te,"Click the ram to copy it to your clipboard."),te.forEach(t),this.h()},h(){document.title="Celenheit Calculator",l(C,"name","description"),l(C,"content","Celenheit Calculator"),l(m,"for","celenheit"),l(m,"class","svelte-xoqhuj"),l(i,"name","celenheit"),l(i,"type","number"),l(i,"class","svelte-xoqhuj"),l(o,"class","box svelte-xoqhuj"),l(k,"for","celsius"),l(k,"class","svelte-xoqhuj"),l(v,"name","celsius"),l(v,"type","number"),l(v,"class","svelte-xoqhuj"),l(f,"class","box svelte-xoqhuj"),l(x,"for","fahrenheit"),l(x,"class","svelte-xoqhuj"),l(d,"name","fahrenheit"),l(d,"type","number"),l(d,"class","svelte-xoqhuj"),l(E,"class","box svelte-xoqhuj")},m(e,a){s(document.head,C),b(e,u,a),b(e,r,a),s(r,_),b(e,p,a),b(e,o,a),s(o,m),s(m,B),s(m,y),s(y,D),s(m,S),s(o,U),s(o,i),A(i,n[0]),b(e,V,a),b(e,f,a),s(f,k),s(k,G),s(f,O),s(f,v),A(v,n[1]),b(e,w,a),b(e,E,a),s(E,x),s(x,Q),s(E,R),s(E,d),A(d,n[2]),b(e,M,a),b(e,P,a),s(P,W),X||(Y=[N(y,"keypress",n[4]),N(y,"click",n[5]),N(i,"input",n[6]),N(i,"change",n[7]),N(v,"input",n[8]),N(v,"change",n[9]),N(d,"input",n[10]),N(d,"change",n[11])],X=!0)},p(e,[a]){a&1&&T(i.value)!==e[0]&&A(i,e[0]),a&2&&T(v.value)!==e[1]&&A(v,e[1]),a&4&&T(d.value)!==e[2]&&A(d,e[2])},i:le,o:le,d(e){t(C),e&&t(u),e&&t(r),e&&t(p),e&&t(o),e&&t(V),e&&t(f),e&&t(w),e&&t(E),e&&t(M),e&&t(P),X=!1,ne(Y)}}}function ie(n,C,u){let r=0,_=0,p=32;const o=async()=>{await navigator.clipboard.writeText("\u{1F40F}")},m=()=>o(),B=()=>o();function y(){r=T(this.value),u(0,r)}const D=f=>{u(1,_=Number((r/(45/17)).toFixed(1))),u(2,p=Number((r/(25/17)+32).toFixed(0)))};function S(){_=T(this.value),u(1,_)}const U=f=>{u(0,r=Number((_*(45/17)).toFixed(1))),u(2,p=Number((_*1.8+32).toFixed(0)))};function i(){p=T(this.value),u(2,p)}return[r,_,p,o,m,B,y,D,S,U,i,f=>{u(0,r=Number(((p-32)*(25/17)).toFixed(1))),u(1,_=Number(((p-32)/1.8).toFixed(1)))}]}class ce extends se{constructor(C){super(),ae(this,C,ie,oe,ue,{})}}export{ce as default};
