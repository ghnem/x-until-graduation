import{S as e,i as t,s as a,e as s,c as r,a as l,d as n,b as c,H as h,f as i,k as d,n as o,F as f,G as u,I as m,z as g,t as y,g as v,h as $,J as p,j as w,m as E,o as D,v as G,r as k,w as A}from"../chunks/vendor-c0f903fd.js";const I=(e,t=0)=>[...Array(e).keys()].map((e=>e+t)),q=new Date("2017-09-24").getTime(),x=new Date("2022-08-01").getTime();function W(e,t,a){const s=e.slice();return s[3]=t[a],s[5]=a,s}function X(e){let t,a,h;return{c(){t=s("h2"),a=y("X = Days = "),h=y(e[0]),this.h()},l(s){t=r(s,"H2",{class:!0});var c=l(t);a=v(c,"X = Days = "),h=v(c,e[0]),c.forEach(n),this.h()},h(){c(t,"class","svelte-qle7ds")},m(e,s){i(e,t,s),f(t,a),f(t,h)},p(e,t){1&t&&$(h,e[0])},d(e){e&&n(t)}}}function N(e){let t,a;return{c(){t=s("h2"),a=y("X = Days = Already Graduated 🥳"),this.h()},l(e){t=r(e,"H2",{class:!0});var s=l(t);a=v(s,"X = Days = Already Graduated 🥳"),s.forEach(n),this.h()},h(){c(t,"class","svelte-qle7ds")},m(e,s){i(e,t,s),f(t,a)},p:u,d(e){e&&n(t)}}}function O(e){let t,a;return{c(){t=s("div"),this.h()},l(e){t=r(e,"DIV",{class:!0}),l(t).forEach(n),this.h()},h(){c(t,"class",a=h(e[2].length-e[5]<=e[0]?"not-yet":"")+" svelte-qle7ds")},m(e,a){i(e,t,a)},p(e,s){1&s&&a!==(a=h(e[2].length-e[5]<=e[0]?"not-yet":"")+" svelte-qle7ds")&&c(t,"class",a)},d(e){e&&n(t)}}}function T(e){let t,a,h;function g(e,t){return e[1]?N:X}let y=g(e),v=y(e),$=e[2],p=[];for(let s=0;s<$.length;s+=1)p[s]=O(W(e,$,s));return{c(){t=s("section"),v.c(),a=d(),h=s("div");for(let e=0;e<p.length;e+=1)p[e].c();this.h()},l(e){t=r(e,"SECTION",{id:!0,class:!0});var s=l(t);v.l(s),a=o(s),h=r(s,"DIV",{id:!0,class:!0});var c=l(h);for(let t=0;t<p.length;t+=1)p[t].l(c);c.forEach(n),s.forEach(n),this.h()},h(){c(h,"id","days-grid"),c(h,"class","svelte-qle7ds"),c(t,"id","days"),c(t,"class","svelte-qle7ds")},m(e,s){i(e,t,s),v.m(t,null),f(t,a),f(t,h);for(let t=0;t<p.length;t+=1)p[t].m(h,null)},p(e,[s]){if(y===(y=g(e))&&v?v.p(e,s):(v.d(1),v=y(e),v&&(v.c(),v.m(t,a))),5&s){let t;for($=e[2],t=0;t<$.length;t+=1){const a=W(e,$,t);p[t]?p[t].p(a,s):(p[t]=O(a),p[t].c(),p[t].m(h,null))}for(;t<p.length;t+=1)p[t].d(1);p.length=$.length}},i:u,o:u,d(e){e&&n(t),v.d(),m(p,e)}}}function V(e,t,a){const s=I((x-q)/864e5);let{remainingDays:r=0}=t,{alreadyGradudated:l=!1}=t;return g((()=>{const e=(new Date).getTime();a(0,r=Math.floor((x-e)/864e5)),a(1,l=r<0),a(0,r=l?0:r)})),e.$$set=e=>{"remainingDays"in e&&a(0,r=e.remainingDays),"alreadyGradudated"in e&&a(1,l=e.alreadyGradudated)},[r,l,s]}class F extends e{constructor(e){super(),t(this,e,V,T,a,{totalNumberOfDays:2,remainingDays:0,alreadyGradudated:1})}get totalNumberOfDays(){return this.$$.ctx[2]}}function H(e){let t,a,h,m,g,p,w,E,D,G,k,A,I;return{c(){t=s("footer"),a=s("p"),h=y("© Copyright "),m=y(e[0]),g=y(", All rights reserved."),p=d(),w=s("div"),E=y("Favicon made by "),D=s("a"),G=y("Vectors Market"),k=y("\n\t\tfrom "),A=s("a"),I=y("www.flaticon.com"),this.h()},l(s){t=r(s,"FOOTER",{class:!0});var c=l(t);a=r(c,"P",{});var i=l(a);h=v(i,"© Copyright "),m=v(i,e[0]),g=v(i,", All rights reserved."),i.forEach(n),p=o(c),w=r(c,"DIV",{});var d=l(w);E=v(d,"Favicon made by "),D=r(d,"A",{href:!0,title:!0,class:!0});var f=l(D);G=v(f,"Vectors Market"),f.forEach(n),k=v(d,"\n\t\tfrom "),A=r(d,"A",{href:!0,title:!0,class:!0});var u=l(A);I=v(u,"www.flaticon.com"),u.forEach(n),d.forEach(n),c.forEach(n),this.h()},h(){c(D,"href","https://www.flaticon.com/authors/vectors-market"),c(D,"title","Vectors Market"),c(D,"class","svelte-19mg3y"),c(A,"href","https://www.flaticon.com/"),c(A,"title","Flaticon"),c(A,"class","svelte-19mg3y"),c(t,"class","svelte-19mg3y")},m(e,s){i(e,t,s),f(t,a),f(a,h),f(a,m),f(a,g),f(t,p),f(t,w),f(w,E),f(w,D),f(D,G),f(w,k),f(w,A),f(A,I)},p(e,[t]){1&t&&$(m,e[0])},i:u,o:u,d(e){e&&n(t)}}}function b(e,t,a){let{year:s=(new Date).getFullYear()}=t;return e.$$set=e=>{"year"in e&&a(0,s=e.year)},[s]}class M extends e{constructor(e){super(),t(this,e,b,H,a,{year:0})}}function C(e){let t,a,h,d=e[1].toFixed(2)+"";return{c(){t=s("h2"),a=y(d),h=y("% has passed!"),this.h()},l(e){t=r(e,"H2",{class:!0});var s=l(t);a=v(s,d),h=v(s,"% has passed!"),s.forEach(n),this.h()},h(){c(t,"class","svelte-1wc1qh7")},m(e,s){i(e,t,s),f(t,a),f(t,h)},p(e,t){2&t&&d!==(d=e[1].toFixed(2)+"")&&$(a,d)},d(e){e&&n(t)}}}function S(e){let t,a;return{c(){t=s("h2"),a=y("Already Graduated 🥳"),this.h()},l(e){t=r(e,"H2",{class:!0});var s=l(t);a=v(s,"Already Graduated 🥳"),s.forEach(n),this.h()},h(){c(t,"class","svelte-1wc1qh7")},m(e,s){i(e,t,s),f(t,a)},p:u,d(e){e&&n(t)}}}function z(e){let t,a,h,m;function g(e,t){return e[0]?S:C}let y=g(e),v=y(e);return{c(){t=s("section"),v.c(),a=d(),h=s("div"),m=s("span"),this.h()},l(e){t=r(e,"SECTION",{});var s=l(t);v.l(s),a=o(s),h=r(s,"DIV",{class:!0});var c=l(h);m=r(c,"SPAN",{style:!0,class:!0}),l(m).forEach(n),c.forEach(n),s.forEach(n),this.h()},h(){p(m,"width",e[1]+"%"),c(m,"class","svelte-1wc1qh7"),c(h,"class","meter svelte-1wc1qh7")},m(e,s){i(e,t,s),v.m(t,null),f(t,a),f(t,h),f(h,m)},p(e,[s]){y===(y=g(e))&&v?v.p(e,s):(v.d(1),v=y(e),v&&(v.c(),v.m(t,a))),2&s&&p(m,"width",e[1]+"%")},i:u,o:u,d(e){e&&n(t),v.d()}}}function j(e,t,a){let{alreadyGradudated:s=!1}=t,{progress:r=0}=t;return g((()=>{const e=(new Date).getTime();a(0,s=e>x),a(1,r=s?100:100*(1-(x-e)/(x-q)))})),e.$$set=e=>{"alreadyGradudated"in e&&a(0,s=e.alreadyGradudated),"progress"in e&&a(1,r=e.progress)},[s,r]}class P extends e{constructor(e){super(),t(this,e,j,z,a,{alreadyGradudated:0,progress:1})}}function U(e,t,a){const s=e.slice();return s[3]=t[a],s[5]=a,s}function J(e){let t,a,h;return{c(){t=s("h2"),a=y("X = Weeks = "),h=y(e[0]),this.h()},l(s){t=r(s,"H2",{class:!0});var c=l(t);a=v(c,"X = Weeks = "),h=v(c,e[0]),c.forEach(n),this.h()},h(){c(t,"class","svelte-45ayly")},m(e,s){i(e,t,s),f(t,a),f(t,h)},p(e,t){1&t&&$(h,e[0])},d(e){e&&n(t)}}}function R(e){let t,a;return{c(){t=s("h2"),a=y("X = Weeks = Already Graduated 🥳"),this.h()},l(e){t=r(e,"H2",{class:!0});var s=l(t);a=v(s,"X = Weeks = Already Graduated 🥳"),s.forEach(n),this.h()},h(){c(t,"class","svelte-45ayly")},m(e,s){i(e,t,s),f(t,a)},p:u,d(e){e&&n(t)}}}function Y(e){let t,a;return{c(){t=s("div"),this.h()},l(e){t=r(e,"DIV",{class:!0}),l(t).forEach(n),this.h()},h(){c(t,"class",a=h(e[2].length-e[5]<=e[0]?"not-yet":"")+" svelte-45ayly")},m(e,a){i(e,t,a)},p(e,s){1&s&&a!==(a=h(e[2].length-e[5]<=e[0]?"not-yet":"")+" svelte-45ayly")&&c(t,"class",a)},d(e){e&&n(t)}}}function B(e){let t,a,h;function g(e,t){return e[1]?R:J}let y=g(e),v=y(e),$=e[2],p=[];for(let s=0;s<$.length;s+=1)p[s]=Y(U(e,$,s));return{c(){t=s("section"),v.c(),a=d(),h=s("div");for(let e=0;e<p.length;e+=1)p[e].c();this.h()},l(e){t=r(e,"SECTION",{id:!0,class:!0});var s=l(t);v.l(s),a=o(s),h=r(s,"DIV",{id:!0,class:!0});var c=l(h);for(let t=0;t<p.length;t+=1)p[t].l(c);c.forEach(n),s.forEach(n),this.h()},h(){c(h,"id","weeks-grid"),c(h,"class","svelte-45ayly"),c(t,"id","weeks"),c(t,"class","svelte-45ayly")},m(e,s){i(e,t,s),v.m(t,null),f(t,a),f(t,h);for(let t=0;t<p.length;t+=1)p[t].m(h,null)},p(e,[s]){if(y===(y=g(e))&&v?v.p(e,s):(v.d(1),v=y(e),v&&(v.c(),v.m(t,a))),5&s){let t;for($=e[2],t=0;t<$.length;t+=1){const a=U(e,$,t);p[t]?p[t].p(a,s):(p[t]=Y(a),p[t].c(),p[t].m(h,null))}for(;t<p.length;t+=1)p[t].d(1);p.length=$.length}},i:u,o:u,d(e){e&&n(t),v.d(),m(p,e)}}}function K(e,t,a){const s=I(Math.ceil((x-q)/6048e5));let{remainingWeeks:r=0}=t,{alreadyGradudated:l=!1}=t;return g((()=>{const e=(new Date).getTime();a(0,r=Math.ceil((x-e)/6048e5)),a(1,l=r<0),a(0,r=l?0:r)})),e.$$set=e=>{"remainingWeeks"in e&&a(0,r=e.remainingWeeks),"alreadyGradudated"in e&&a(1,l=e.alreadyGradudated)},[r,l,s]}class L extends e{constructor(e){super(),t(this,e,K,B,a,{totalNumberOfWeeks:2,remainingWeeks:0,alreadyGradudated:1})}get totalNumberOfWeeks(){return this.$$.ctx[2]}}function Q(e){let t,a,h,m,g,$,p,I,q,x,W,X;return g=new P({}),p=new F({}),q=new L({}),W=new M({}),{c(){t=s("main"),a=s("h1"),h=y("X Until Graduation"),m=d(),w(g.$$.fragment),$=d(),w(p.$$.fragment),I=d(),w(q.$$.fragment),x=d(),w(W.$$.fragment),this.h()},l(e){t=r(e,"MAIN",{class:!0});var s=l(t);a=r(s,"H1",{class:!0});var c=l(a);h=v(c,"X Until Graduation"),c.forEach(n),m=o(s),E(g.$$.fragment,s),$=o(s),E(p.$$.fragment,s),I=o(s),E(q.$$.fragment,s),s.forEach(n),x=o(e),E(W.$$.fragment,e),this.h()},h(){c(a,"class","svelte-1grzy29"),c(t,"class","svelte-1grzy29")},m(e,s){i(e,t,s),f(t,a),f(a,h),f(t,m),D(g,t,null),f(t,$),D(p,t,null),f(t,I),D(q,t,null),i(e,x,s),D(W,e,s),X=!0},p:u,i(e){X||(G(g.$$.fragment,e),G(p.$$.fragment,e),G(q.$$.fragment,e),G(W.$$.fragment,e),X=!0)},o(e){k(g.$$.fragment,e),k(p.$$.fragment,e),k(q.$$.fragment,e),k(W.$$.fragment,e),X=!1},d(e){e&&n(t),A(g),A(p),A(q),e&&n(x),A(W,e)}}}export default class extends e{constructor(e){super(),t(this,e,null,Q,a,{})}}
