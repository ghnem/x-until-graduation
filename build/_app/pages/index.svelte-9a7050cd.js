import{S as t,i as e,s as r,e as a,c as n,a as s,d as o,b as l,H as c,f as i,k as h,n as d,F as u,G as m,I as f,z as p,t as g,g as y,h as $,J as v,j as E,m as w,o as D,v as A,r as T,w as G}from"../chunks/vendor-c0f903fd.js";const k=new Date(2017,8,24,0,0).getTime(),M=new Date(2022,7,1,0,0).getTime(),x=(t,e=0)=>[...Array(t).keys()].map((t=>t+e));function I(t,e,r){const a=t.slice();return a[5]=e[r],a[7]=r,a}function b(t){let e,r,c;return{c(){e=a("h2"),r=g("X = Days = "),c=g(t[0]),this.h()},l(a){e=n(a,"H2",{class:!0});var l=s(e);r=y(l,"X = Days = "),c=y(l,t[0]),l.forEach(o),this.h()},h(){l(e,"class","svelte-1mco9mg")},m(t,a){i(t,e,a),u(e,r),u(e,c)},p(t,e){1&e&&$(c,t[0])},d(t){t&&o(e)}}}function X(t){let e,r;return{c(){e=a("h2"),r=g("X = Days = Already Graduated 🥳"),this.h()},l(t){e=n(t,"H2",{class:!0});var a=s(e);r=y(a,"X = Days = Already Graduated 🥳"),a.forEach(o),this.h()},h(){l(e,"class","svelte-1mco9mg")},m(t,a){i(t,e,a),u(e,r)},p:m,d(t){t&&o(e)}}}function W(t){let e,r;function h(...e){return t[3](t[7],...e)}function d(...e){return t[4](t[7],...e)}return{c(){e=a("div"),this.h()},l(t){e=n(t,"DIV",{"data-tooltip":!0,class:!0}),s(e).forEach(o),this.h()},h(){l(e,"data-tooltip",t[5]),l(e,"class",r=c(`${t[2].length-t[7]<=t[0]?"not-yet":""} ${[0,1,2,3,4].some(h)?"left":""} ${[1,2,3,4].some(d)?"right":""} \n        `)+" svelte-1mco9mg")},m(t,r){i(t,e,r)},p(a,n){t=a,1&n&&r!==(r=c(`${t[2].length-t[7]<=t[0]?"not-yet":""} ${[0,1,2,3,4].some(h)?"left":""} ${[1,2,3,4].some(d)?"right":""} \n        `)+" svelte-1mco9mg")&&l(e,"class",r)},d(t){t&&o(e)}}}function F(t){let e,r,c;function p(t,e){return t[1]?X:b}let g=p(t),y=g(t),$=t[2],v=[];for(let a=0;a<$.length;a+=1)v[a]=W(I(t,$,a));return{c(){e=a("section"),y.c(),r=h(),c=a("div");for(let t=0;t<v.length;t+=1)v[t].c();this.h()},l(t){e=n(t,"SECTION",{id:!0,class:!0});var a=s(e);y.l(a),r=d(a),c=n(a,"DIV",{id:!0,class:!0});var l=s(c);for(let e=0;e<v.length;e+=1)v[e].l(l);l.forEach(o),a.forEach(o),this.h()},h(){l(c,"id","days-grid"),l(c,"class","svelte-1mco9mg"),l(e,"id","days"),l(e,"class","svelte-1mco9mg")},m(t,a){i(t,e,a),y.m(e,null),u(e,r),u(e,c);for(let e=0;e<v.length;e+=1)v[e].m(c,null)},p(t,[a]){if(g===(g=p(t))&&y?y.p(t,a):(y.d(1),y=g(t),y&&(y.c(),y.m(e,r))),5&a){let e;for($=t[2],e=0;e<$.length;e+=1){const r=I(t,$,e);v[e]?v[e].p(r,a):(v[e]=W(r),v[e].c(),v[e].m(c,null))}for(;e<v.length;e+=1)v[e].d(1);v.length=$.length}},i:m,o:m,d(t){t&&o(e),y.d(),f(v,t)}}}function H(t,e,r){const a=x((M-k)/864e5).map((t=>new Date(k+864e5*t).toDateString()));let{remainingDays:n=0}=e,{alreadyGradudated:s=!1}=e;p((()=>{const t=(new Date).getTime();r(0,n=Math.floor((M-t)/864e5)),r(1,s=n<0),r(0,n=s?0:n)}));return t.$$set=t=>{"remainingDays"in t&&r(0,n=t.remainingDays),"alreadyGradudated"in t&&r(1,s=t.alreadyGradudated)},[n,s,a,(t,e)=>(t-e)%30==0,(t,e)=>(t+e)%30==0]}class N extends t{constructor(t){super(),e(this,t,H,F,r,{totalNumberOfDays:2,remainingDays:0,alreadyGradudated:1})}get totalNumberOfDays(){return this.$$.ctx[2]}}function O(t){let e,r,c,f,p,v,E,w,D,A,T,G,k;return{c(){e=a("footer"),r=a("p"),c=g("© Copyright "),f=g(t[0]),p=g(", All rights reserved."),v=h(),E=a("div"),w=g("Favicon made by "),D=a("a"),A=g("Vectors Market"),T=g("\n\t\tfrom "),G=a("a"),k=g("www.flaticon.com"),this.h()},l(a){e=n(a,"FOOTER",{class:!0});var l=s(e);r=n(l,"P",{});var i=s(r);c=y(i,"© Copyright "),f=y(i,t[0]),p=y(i,", All rights reserved."),i.forEach(o),v=d(l),E=n(l,"DIV",{});var h=s(E);w=y(h,"Favicon made by "),D=n(h,"A",{href:!0,title:!0,class:!0});var u=s(D);A=y(u,"Vectors Market"),u.forEach(o),T=y(h,"\n\t\tfrom "),G=n(h,"A",{href:!0,title:!0,class:!0});var m=s(G);k=y(m,"www.flaticon.com"),m.forEach(o),h.forEach(o),l.forEach(o),this.h()},h(){l(D,"href","https://www.flaticon.com/authors/vectors-market"),l(D,"title","Vectors Market"),l(D,"class","svelte-19mg3y"),l(G,"href","https://www.flaticon.com/"),l(G,"title","Flaticon"),l(G,"class","svelte-19mg3y"),l(e,"class","svelte-19mg3y")},m(t,a){i(t,e,a),u(e,r),u(r,c),u(r,f),u(r,p),u(e,v),u(e,E),u(E,w),u(E,D),u(D,A),u(E,T),u(E,G),u(G,k)},p(t,[e]){1&e&&$(f,t[0])},i:m,o:m,d(t){t&&o(e)}}}function S(t,e,r){let{year:a=(new Date).getFullYear()}=e;return t.$$set=t=>{"year"in t&&r(0,a=t.year)},[a]}class V extends t{constructor(t){super(),e(this,t,S,O,r,{year:0})}}function j(t){let e,r,c,h=t[1].toFixed(2)+"";return{c(){e=a("h2"),r=g(h),c=g("% has passed!"),this.h()},l(t){e=n(t,"H2",{class:!0});var a=s(e);r=y(a,h),c=y(a,"% has passed!"),a.forEach(o),this.h()},h(){l(e,"class","svelte-9ui0oy")},m(t,a){i(t,e,a),u(e,r),u(e,c)},p(t,e){2&e&&h!==(h=t[1].toFixed(2)+"")&&$(r,h)},d(t){t&&o(e)}}}function C(t){let e,r;return{c(){e=a("h2"),r=g("Already Graduated 🥳"),this.h()},l(t){e=n(t,"H2",{class:!0});var a=s(e);r=y(a,"Already Graduated 🥳"),a.forEach(o),this.h()},h(){l(e,"class","svelte-9ui0oy")},m(t,a){i(t,e,a),u(e,r)},p:m,d(t){t&&o(e)}}}function z(t){let e,r,c,f;function p(t,e){return t[0]?C:j}let g=p(t),y=g(t);return{c(){e=a("section"),y.c(),r=h(),c=a("div"),f=a("span"),this.h()},l(t){e=n(t,"SECTION",{class:!0});var a=s(e);y.l(a),r=d(a),c=n(a,"DIV",{class:!0});var l=s(c);f=n(l,"SPAN",{style:!0,class:!0}),s(f).forEach(o),l.forEach(o),a.forEach(o),this.h()},h(){v(f,"width",t[1]+"%"),l(f,"class","svelte-9ui0oy"),l(c,"class","meter svelte-9ui0oy"),l(e,"class","svelte-9ui0oy")},m(t,a){i(t,e,a),y.m(e,null),u(e,r),u(e,c),u(c,f)},p(t,[a]){g===(g=p(t))&&y?y.p(t,a):(y.d(1),y=g(t),y&&(y.c(),y.m(e,r))),2&a&&v(f,"width",t[1]+"%")},i:m,o:m,d(t){t&&o(e),y.d()}}}function U(t,e,r){let{alreadyGradudated:a=!1}=e,{progress:n=0}=e;return p((()=>{const t=(new Date).getTime();r(0,a=t>M),r(1,n=a?100:100*(1-(M-t)/(M-k)))})),t.$$set=t=>{"alreadyGradudated"in t&&r(0,a=t.alreadyGradudated),"progress"in t&&r(1,n=t.progress)},[a,n]}class P extends t{constructor(t){super(),e(this,t,U,z,r,{alreadyGradudated:0,progress:1})}}function J(t,e,r){const a=t.slice();return a[3]=e[r],a[5]=r,a}function L(t){let e,r,c;return{c(){e=a("h2"),r=g("X = Weeks = "),c=g(t[0]),this.h()},l(a){e=n(a,"H2",{class:!0});var l=s(e);r=y(l,"X = Weeks = "),c=y(l,t[0]),l.forEach(o),this.h()},h(){l(e,"class","svelte-1ruj5n0")},m(t,a){i(t,e,a),u(e,r),u(e,c)},p(t,e){1&e&&$(c,t[0])},d(t){t&&o(e)}}}function R(t){let e,r;return{c(){e=a("h2"),r=g("X = Weeks = Already Graduated 🥳"),this.h()},l(t){e=n(t,"H2",{class:!0});var a=s(e);r=y(a,"X = Weeks = Already Graduated 🥳"),a.forEach(o),this.h()},h(){l(e,"class","svelte-1ruj5n0")},m(t,a){i(t,e,a),u(e,r)},p:m,d(t){t&&o(e)}}}function Y(t){let e,r;return{c(){e=a("div"),this.h()},l(t){e=n(t,"DIV",{"data-tooltip":!0,class:!0}),s(e).forEach(o),this.h()},h(){l(e,"data-tooltip",((t,e)=>{const r=t+6048e5*e,a=r+5184e5;return`From ${new Date(r).toDateString()} to ${new Date(a).toDateString()}`})(k,t[5])),l(e,"class",r=c(`${t[2].length-t[5]<=t[0]?"not-yet":""} ${t[5]%30==0||(t[5]-1)%30==0||(t[5]-2)%30==0||(t[5]-3)%30==0||(t[5]-4)%30==0?"left":""} ${(t[5]+1)%30==0||(t[5]+2)%30==0||(t[5]+3)%30==0||(t[5]+4)%30==0?"right":""}`)+" svelte-1ruj5n0")},m(t,r){i(t,e,r)},p(t,a){1&a&&r!==(r=c(`${t[2].length-t[5]<=t[0]?"not-yet":""} ${t[5]%30==0||(t[5]-1)%30==0||(t[5]-2)%30==0||(t[5]-3)%30==0||(t[5]-4)%30==0?"left":""} ${(t[5]+1)%30==0||(t[5]+2)%30==0||(t[5]+3)%30==0||(t[5]+4)%30==0?"right":""}`)+" svelte-1ruj5n0")&&l(e,"class",r)},d(t){t&&o(e)}}}function q(t){let e,r,c;function p(t,e){return t[1]?R:L}let g=p(t),y=g(t),$=t[2],v=[];for(let a=0;a<$.length;a+=1)v[a]=Y(J(t,$,a));return{c(){e=a("section"),y.c(),r=h(),c=a("div");for(let t=0;t<v.length;t+=1)v[t].c();this.h()},l(t){e=n(t,"SECTION",{id:!0,class:!0});var a=s(e);y.l(a),r=d(a),c=n(a,"DIV",{id:!0,class:!0});var l=s(c);for(let e=0;e<v.length;e+=1)v[e].l(l);l.forEach(o),a.forEach(o),this.h()},h(){l(c,"id","weeks-grid"),l(c,"class","svelte-1ruj5n0"),l(e,"id","weeks"),l(e,"class","svelte-1ruj5n0")},m(t,a){i(t,e,a),y.m(e,null),u(e,r),u(e,c);for(let e=0;e<v.length;e+=1)v[e].m(c,null)},p(t,[a]){if(g===(g=p(t))&&y?y.p(t,a):(y.d(1),y=g(t),y&&(y.c(),y.m(e,r))),5&a){let e;for($=t[2],e=0;e<$.length;e+=1){const r=J(t,$,e);v[e]?v[e].p(r,a):(v[e]=Y(r),v[e].c(),v[e].m(c,null))}for(;e<v.length;e+=1)v[e].d(1);v.length=$.length}},i:m,o:m,d(t){t&&o(e),y.d(),f(v,t)}}}function B(t,e,r){const a=x(Math.ceil((M-k)/6048e5));let{remainingWeeks:n=0}=e,{alreadyGradudated:s=!1}=e;return p((()=>{const t=(new Date).getTime();r(0,n=Math.ceil((M-t)/6048e5)),r(1,s=n<0),r(0,n=s?0:n)})),t.$$set=t=>{"remainingWeeks"in t&&r(0,n=t.remainingWeeks),"alreadyGradudated"in t&&r(1,s=t.alreadyGradudated)},[n,s,a]}class K extends t{constructor(t){super(),e(this,t,B,q,r,{totalNumberOfWeeks:2,remainingWeeks:0,alreadyGradudated:1})}get totalNumberOfWeeks(){return this.$$.ctx[2]}}function Q(t){let e,r,c,f,p,$,v,k,M,x,I,b,X,W,F,H,O,S,j,C,z,U,J,L,R,Y,q,B,Q,Z,_,tt,et,rt,at,nt,st,ot,lt,ct,it,ht,dt,ut,mt,ft;return lt=new P({}),it=new N({}),dt=new K({}),mt=new V({}),{c(){e=a("head"),r=a("title"),c=g(t[0]),f=h(),p=a("meta"),$=h(),v=a("meta"),k=h(),M=a("meta"),x=h(),I=a("meta"),b=h(),X=a("meta"),W=h(),F=a("meta"),H=h(),O=a("meta"),S=h(),j=a("meta"),C=h(),z=a("meta"),U=h(),J=a("meta"),L=h(),R=a("meta"),Y=h(),q=a("meta"),B=h(),Q=a("meta"),Z=h(),_=a("main"),tt=a("h1"),et=g("X Until Graduation"),rt=h(),at=a("p"),nt=g(t[1]),st=g(" 🏃‍♂️"),ot=h(),E(lt.$$.fragment),ct=h(),E(it.$$.fragment),ht=h(),E(dt.$$.fragment),ut=h(),E(mt.$$.fragment),this.h()},l(a){e=n(a,"HEAD",{});var l=s(e);r=n(l,"TITLE",{});var i=s(r);c=y(i,t[0]),i.forEach(o),f=d(l),p=n(l,"META",{name:!0,content:!0}),$=d(l),v=n(l,"META",{property:!0,content:!0}),k=d(l),M=n(l,"META",{property:!0,content:!0}),x=d(l),I=n(l,"META",{property:!0,content:!0}),b=d(l),X=n(l,"META",{property:!0,content:!0}),W=d(l),F=n(l,"META",{property:!0,content:!0}),H=d(l),O=n(l,"META",{property:!0,content:!0}),S=d(l),j=n(l,"META",{property:!0,content:!0}),C=d(l),z=n(l,"META",{property:!0,content:!0}),U=d(l),J=n(l,"META",{property:!0,content:!0}),L=d(l),R=n(l,"META",{property:!0,content:!0}),Y=d(l),q=n(l,"META",{property:!0,content:!0}),B=d(l),Q=n(l,"META",{property:!0,content:!0}),l.forEach(o),Z=d(a),_=n(a,"MAIN",{class:!0});var h=s(_);tt=n(h,"H1",{class:!0});var u=s(tt);et=y(u,"X Until Graduation"),u.forEach(o),rt=d(h),at=n(h,"P",{class:!0});var m=s(at);nt=y(m,t[1]),st=y(m," 🏃‍♂️"),m.forEach(o),ot=d(h),w(lt.$$.fragment,h),ct=d(h),w(it.$$.fragment,h),ht=d(h),w(dt.$$.fragment,h),h.forEach(o),ut=d(a),w(mt.$$.fragment,a),this.h()},h(){l(p,"name","description"),l(p,"content",t[1]),l(v,"property","og:title"),l(v,"content",t[0]),l(M,"property","og:url"),l(M,"content",t[3]),l(I,"property","og:type"),l(I,"content","website"),l(X,"property","og:description"),l(X,"content",t[1]),l(F,"property","og:image"),l(F,"content",t[4]),l(O,"property","og:image:alt"),l(O,"content",t[2]),l(j,"property","twitter:card"),l(j,"content",t[2]),l(z,"property","twitter:url"),l(z,"content",t[3]),l(J,"property","twitter:title"),l(J,"content",t[0]),l(R,"property","twitter:description"),l(R,"content",t[1]),l(q,"property","twitter:image"),l(q,"content",t[4]),l(Q,"property","twitter:image:alt"),l(Q,"content","Image description for accessibility"),l(tt,"class","svelte-1hazoy1"),l(at,"class","svelte-1hazoy1"),l(_,"class","svelte-1hazoy1")},m(t,a){i(t,e,a),u(e,r),u(r,c),u(e,f),u(e,p),u(e,$),u(e,v),u(e,k),u(e,M),u(e,x),u(e,I),u(e,b),u(e,X),u(e,W),u(e,F),u(e,H),u(e,O),u(e,S),u(e,j),u(e,C),u(e,z),u(e,U),u(e,J),u(e,L),u(e,R),u(e,Y),u(e,q),u(e,B),u(e,Q),i(t,Z,a),i(t,_,a),u(_,tt),u(tt,et),u(_,rt),u(_,at),u(at,nt),u(at,st),u(_,ot),D(lt,_,null),u(_,ct),D(it,_,null),u(_,ht),D(dt,_,null),i(t,ut,a),D(mt,t,a),ft=!0},p:m,i(t){ft||(A(lt.$$.fragment,t),A(it.$$.fragment,t),A(dt.$$.fragment,t),A(mt.$$.fragment,t),ft=!0)},o(t){T(lt.$$.fragment,t),T(it.$$.fragment,t),T(dt.$$.fragment,t),T(mt.$$.fragment,t),ft=!1},d(t){t&&o(e),t&&o(Z),t&&o(_),G(lt),G(it),G(dt),t&&o(ut),G(mt,t)}}}function Z(t,e,r){return["X Until Graduation","The number of days, and weeks until the 2022 class of CSE Minya University graduate.","Graduation hat on top of books","https://demos.abdulrhmnghanem.tech/x-until-graduation/","/x-until-graduation/education.png"]}export default class extends t{constructor(t){super(),e(this,t,Z,Q,r,{title:0,description:1,altDescription:2,url:3,img:4})}get title(){return this.$$.ctx[0]}get description(){return this.$$.ctx[1]}get altDescription(){return this.$$.ctx[2]}get url(){return this.$$.ctx[3]}get img(){return this.$$.ctx[4]}}
