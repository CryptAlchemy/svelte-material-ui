import{S as G,i as N,s as J,w as d,x as v,y as I,q as _,o as g,B as b,e as T,t as U,c as j,a as L,h as D,d as m,f as V,g as w,H as S,E as se,k as C,m as A,b as X,j as ie,M as z,N as ne,O as re,_ as me,$ as pe,l as ue,U as _e,G as ge}from"../../../chunks/index-30f0de65.js";import{D as Q}from"../../../chunks/Demo-e6e6f5b9.js";import{a as Y}from"../../../chunks/MenuSurface-adb8055e.js";import{L as he,I as W,S as de,T as Z}from"../../../chunks/index-4c98f2db.js";import{T as ce}from"../../../chunks/Textfield-6d40fc15.js";import{B as ae}from"../../../chunks/Button-ec6b767e.js";import{A as ve}from"../../../chunks/Anchor-f212292a.js";import{I as Ie,a as be,b as Se,c as we}from"../../../chunks/Supporting-ed124121.js";import"../../../chunks/index-85a52a40.js";import"../../../chunks/useActions-23126cd3.js";import"../../../chunks/Ripple-5fd6e49b.js";import"../../../chunks/IconButton-922cc448.js";import"../../../chunks/index-dbcd02f8.js";import"../../../chunks/prefixFilter-0866cfc5.js";import"../../../chunks/index-c646bcc2.js";import"../../../chunks/ContextFragment-0901ca24.js";import"../../../chunks/NotchedOutline-43c8e50e.js";function Me(a){let e,n;return{c(){e=T("p"),n=U(`This is a menu surface. It's similar to a menu. It is more versatile, but
    requires more configuration. It can contain more than just a list, like rich
    popover content, forms, images, etc.`),this.h()},l(t){e=j(t,"P",{style:!0});var r=L(e);n=D(r,`This is a menu surface. It's similar to a menu. It is more versatile, but
    requires more configuration. It can contain more than just a list, like rich
    popover content, forms, images, etc.`),r.forEach(m),this.h()},h(){V(e,"margin","1em")},m(t,r){w(t,e,r),S(e,n)},p:se,d(t){t&&m(e)}}}function Ee(a){let e,n;return e=new Y({props:{static:!0,style:"max-width: 350px;",$$slots:{default:[Me]},$$scope:{ctx:a}}}),{c(){d(e.$$.fragment)},l(t){v(e.$$.fragment,t)},m(t,r){I(e,t,r),n=!0},p(t,[r]){const s={};r&1&&(s.$$scope={dirty:r,ctx:t}),e.$set(s)},i(t){n||(_(e.$$.fragment,t),n=!0)},o(t){g(e.$$.fragment,t),n=!1},d(t){b(e,t)}}}class ke extends G{constructor(e){super(),N(this,e,null,Ee,J,{})}}function Ce(a){let e;return{c(){e=U("Cut")},l(n){e=D(n,"Cut")},m(n,t){w(n,e,t)},d(n){n&&m(e)}}}function Ae(a){let e,n;return e=new Z({props:{$$slots:{default:[Ce]},$$scope:{ctx:a}}}),{c(){d(e.$$.fragment)},l(t){v(e.$$.fragment,t)},m(t,r){I(e,t,r),n=!0},p(t,r){const s={};r&32&&(s.$$scope={dirty:r,ctx:t}),e.$set(s)},i(t){n||(_(e.$$.fragment,t),n=!0)},o(t){g(e.$$.fragment,t),n=!1},d(t){b(e,t)}}}function Ue(a){let e;return{c(){e=U("Copy")},l(n){e=D(n,"Copy")},m(n,t){w(n,e,t)},d(n){n&&m(e)}}}function De(a){let e,n;return e=new Z({props:{$$slots:{default:[Ue]},$$scope:{ctx:a}}}),{c(){d(e.$$.fragment)},l(t){v(e.$$.fragment,t)},m(t,r){I(e,t,r),n=!0},p(t,r){const s={};r&32&&(s.$$scope={dirty:r,ctx:t}),e.$set(s)},i(t){n||(_(e.$$.fragment,t),n=!0)},o(t){g(e.$$.fragment,t),n=!1},d(t){b(e,t)}}}function Oe(a){let e;return{c(){e=U("Paste")},l(n){e=D(n,"Paste")},m(n,t){w(n,e,t)},d(n){n&&m(e)}}}function Te(a){let e,n;return e=new Z({props:{$$slots:{default:[Oe]},$$scope:{ctx:a}}}),{c(){d(e.$$.fragment)},l(t){v(e.$$.fragment,t)},m(t,r){I(e,t,r),n=!0},p(t,r){const s={};r&32&&(s.$$scope={dirty:r,ctx:t}),e.$set(s)},i(t){n||(_(e.$$.fragment,t),n=!0)},o(t){g(e.$$.fragment,t),n=!1},d(t){b(e,t)}}}function je(a){let e;return{c(){e=U("Delete")},l(n){e=D(n,"Delete")},m(n,t){w(n,e,t)},d(n){n&&m(e)}}}function Le(a){let e,n;return e=new Z({props:{$$slots:{default:[je]},$$scope:{ctx:a}}}),{c(){d(e.$$.fragment)},l(t){v(e.$$.fragment,t)},m(t,r){I(e,t,r),n=!0},p(t,r){const s={};r&32&&(s.$$scope={dirty:r,ctx:t}),e.$set(s)},i(t){n||(_(e.$$.fragment,t),n=!0)},o(t){g(e.$$.fragment,t),n=!1},d(t){b(e,t)}}}function qe(a){let e,n,t,r,s,$,o,f,i,k;return e=new W({props:{$$slots:{default:[Ae]},$$scope:{ctx:a}}}),e.$on("SMUI:action",a[1]),t=new W({props:{$$slots:{default:[De]},$$scope:{ctx:a}}}),t.$on("SMUI:action",a[2]),s=new W({props:{$$slots:{default:[Te]},$$scope:{ctx:a}}}),s.$on("SMUI:action",a[3]),o=new de({}),i=new W({props:{$$slots:{default:[Le]},$$scope:{ctx:a}}}),i.$on("SMUI:action",a[4]),{c(){d(e.$$.fragment),n=C(),d(t.$$.fragment),r=C(),d(s.$$.fragment),$=C(),d(o.$$.fragment),f=C(),d(i.$$.fragment)},l(l){v(e.$$.fragment,l),n=A(l),v(t.$$.fragment,l),r=A(l),v(s.$$.fragment,l),$=A(l),v(o.$$.fragment,l),f=A(l),v(i.$$.fragment,l)},m(l,u){I(e,l,u),w(l,n,u),I(t,l,u),w(l,r,u),I(s,l,u),w(l,$,u),I(o,l,u),w(l,f,u),I(i,l,u),k=!0},p(l,u){const p={};u&32&&(p.$$scope={dirty:u,ctx:l}),e.$set(p);const c={};u&32&&(c.$$scope={dirty:u,ctx:l}),t.$set(c);const h={};u&32&&(h.$$scope={dirty:u,ctx:l}),s.$set(h);const O={};u&32&&(O.$$scope={dirty:u,ctx:l}),i.$set(O)},i(l){k||(_(e.$$.fragment,l),_(t.$$.fragment,l),_(s.$$.fragment,l),_(o.$$.fragment,l),_(i.$$.fragment,l),k=!0)},o(l){g(e.$$.fragment,l),g(t.$$.fragment,l),g(s.$$.fragment,l),g(o.$$.fragment,l),g(i.$$.fragment,l),k=!1},d(l){b(e,l),l&&m(n),b(t,l),l&&m(r),b(s,l),l&&m($),b(o,l),l&&m(f),b(i,l)}}}function Pe(a){let e,n;return e=new he({props:{$$slots:{default:[qe]},$$scope:{ctx:a}}}),{c(){d(e.$$.fragment)},l(t){v(e.$$.fragment,t)},m(t,r){I(e,t,r),n=!0},p(t,r){const s={};r&33&&(s.$$scope={dirty:r,ctx:t}),e.$set(s)},i(t){n||(_(e.$$.fragment,t),n=!0)},o(t){g(e.$$.fragment,t),n=!1},d(t){b(e,t)}}}function Be(a){let e,n,t,r,s,$;return e=new Y({props:{static:!0,$$slots:{default:[Pe]},$$scope:{ctx:a}}}),{c(){d(e.$$.fragment),n=C(),t=T("pre"),r=U("Clicked: "),s=U(a[0]),this.h()},l(o){v(e.$$.fragment,o),n=A(o),t=j(o,"PRE",{class:!0});var f=L(t);r=D(f,"Clicked: "),s=D(f,a[0]),f.forEach(m),this.h()},h(){X(t,"class","status")},m(o,f){I(e,o,f),w(o,n,f),w(o,t,f),S(t,r),S(t,s),$=!0},p(o,[f]){const i={};f&33&&(i.$$scope={dirty:f,ctx:o}),e.$set(i),(!$||f&1)&&ie(s,o[0])},i(o){$||(_(e.$$.fragment,o),$=!0)},o(o){g(e.$$.fragment,o),$=!1},d(o){b(e,o),o&&m(n),o&&m(t)}}}function He(a,e,n){let t="nothing yet";return[t,()=>n(0,t="Cut"),()=>n(0,t="Copy"),()=>n(0,t="Paste"),()=>n(0,t="Delete")]}class Ve extends G{constructor(e){super(),N(this,e,He,Be,J,{})}}function xe(a){let e;return{c(){e=U("Open Menu Surface")},l(n){e=D(n,"Open Menu Surface")},m(n,t){w(n,e,t)},d(n){n&&m(e)}}}function Re(a){let e;return{c(){e=U("Submit")},l(n){e=D(n,"Submit")},m(n,t){w(n,e,t)},d(n){n&&m(e)}}}function ze(a){let e,n,t,r,s,$,o,f,i;function k(c){a[4](c)}let l={label:"Name"};a[1]!==void 0&&(l.value=a[1]),n=new ce({props:l}),z.push(()=>ne(n,"value",k));function u(c){a[5](c)}let p={label:"Email",type:"email"};return a[2]!==void 0&&(p.value=a[2]),s=new ce({props:p}),z.push(()=>ne(s,"value",u)),f=new ae({props:{style:"margin-top: 1em;",$$slots:{default:[Re]},$$scope:{ctx:a}}}),f.$on("click",a[6]),{c(){e=T("div"),d(n.$$.fragment),r=C(),d(s.$$.fragment),o=C(),d(f.$$.fragment),this.h()},l(c){e=j(c,"DIV",{style:!0});var h=L(e);v(n.$$.fragment,h),r=A(h),v(s.$$.fragment,h),o=A(h),v(f.$$.fragment,h),h.forEach(m),this.h()},h(){V(e,"margin","1em"),V(e,"display","flex"),V(e,"flex-direction","column"),V(e,"align-items","flex-end")},m(c,h){w(c,e,h),I(n,e,null),S(e,r),I(s,e,null),S(e,o),I(f,e,null),i=!0},p(c,h){const O={};!t&&h&2&&(t=!0,O.value=c[1],re(()=>t=!1)),n.$set(O);const q={};!$&&h&4&&($=!0,q.value=c[2],re(()=>$=!1)),s.$set(q);const x={};h&256&&(x.$$scope={dirty:h,ctx:c}),f.$set(x)},i(c){i||(_(n.$$.fragment,c),_(s.$$.fragment,c),_(f.$$.fragment,c),i=!0)},o(c){g(n.$$.fragment,c),g(s.$$.fragment,c),g(f.$$.fragment,c),i=!1},d(c){c&&m(e),b(n),b(s),b(f)}}}function Fe(a){let e,n,t,r,s;n=new ae({props:{$$slots:{default:[xe]},$$scope:{ctx:a}}}),n.$on("click",a[3]);let $={anchorCorner:"BOTTOM_LEFT",$$slots:{default:[ze]},$$scope:{ctx:a}};return r=new Y({props:$}),a[7](r),{c(){e=T("div"),d(n.$$.fragment),t=C(),d(r.$$.fragment),this.h()},l(o){e=j(o,"DIV",{style:!0});var f=L(e);v(n.$$.fragment,f),t=A(f),v(r.$$.fragment,f),f.forEach(m),this.h()},h(){V(e,"min-width","100px")},m(o,f){w(o,e,f),I(n,e,null),S(e,t),I(r,e,null),s=!0},p(o,[f]){const i={};f&256&&(i.$$scope={dirty:f,ctx:o}),n.$set(i);const k={};f&263&&(k.$$scope={dirty:f,ctx:o}),r.$set(k)},i(o){s||(_(n.$$.fragment,o),_(r.$$.fragment,o),s=!0)},o(o){g(n.$$.fragment,o),g(r.$$.fragment,o),s=!1},d(o){o&&m(e),b(n),a[7](null),b(r)}}}function Ge(a,e,n){let t,r="",s="";const $=()=>t.setOpen(!0);function o(l){r=l,n(1,r)}function f(l){s=l,n(2,s)}const i=()=>t.setOpen(!1);function k(l){z[l?"unshift":"push"](()=>{t=l,n(0,t)})}return[t,r,s,$,o,f,i,k]}class Ne extends G{constructor(e){super(),N(this,e,Ge,Fe,J,{})}}function Je(a,e,n){const t=a.slice();return t[9]=e[n],t[11]=n,t}function Ke(a){let e;return{c(){e=U("Open Menu Surface")},l(n){e=D(n,"Open Menu Surface")},m(n,t){w(n,e,t)},d(n){n&&m(e)}}}function Qe(a){let e,n;return e=new we({props:{src:"https://place-hold.it/100x100?text=Image%20"+(a[11]+1)+"&fontsize=18",alt:"Image "+(a[11]+1)}}),{c(){d(e.$$.fragment)},l(t){v(e.$$.fragment,t)},m(t,r){I(e,t,r),n=!0},p:se,i(t){n||(_(e.$$.fragment,t),n=!0)},o(t){g(e.$$.fragment,t),n=!1},d(t){b(e,t)}}}function We(a){let e,n,t;return e=new Se({props:{$$slots:{default:[Qe]},$$scope:{ctx:a}}}),{c(){d(e.$$.fragment),n=C()},l(r){v(e.$$.fragment,r),n=A(r)},m(r,s){I(e,r,s),w(r,n,s),t=!0},p(r,s){const $={};s&4096&&($.$$scope={dirty:s,ctx:r}),e.$set($)},i(r){t||(_(e.$$.fragment,r),t=!0)},o(r){g(e.$$.fragment,r),t=!1},d(r){b(e,r),r&&m(n)}}}function Xe(a){let e,n;return e=new be({props:{$$slots:{default:[We]},$$scope:{ctx:a}}}),{c(){d(e.$$.fragment)},l(t){v(e.$$.fragment,t)},m(t,r){I(e,t,r),n=!0},p(t,r){const s={};r&4096&&(s.$$scope={dirty:r,ctx:t}),e.$set(s)},i(t){n||(_(e.$$.fragment,t),n=!0)},o(t){g(e.$$.fragment,t),n=!1},d(t){b(e,t)}}}function Ye(a){let e,n,t=Array(4),r=[];for(let s=0;s<t.length;s+=1)r[s]=Xe(Je(a,t,s));return{c(){for(let s=0;s<r.length;s+=1)r[s].c();e=ue()},l(s){for(let $=0;$<r.length;$+=1)r[$].l(s);e=ue()},m(s,$){for(let o=0;o<r.length;o+=1)r[o].m(s,$);w(s,e,$),n=!0},p:se,i(s){if(!n){for(let $=0;$<t.length;$+=1)_(r[$]);n=!0}},o(s){r=r.filter(Boolean);for(let $=0;$<r.length;$+=1)g(r[$]);n=!1},d(s){_e(r,s),s&&m(e)}}}function Ze(a){let e,n;return e=new Ie({props:{class:"menu-surface-image-list",$$slots:{default:[Ye]},$$scope:{ctx:a}}}),{c(){d(e.$$.fragment)},l(t){v(e.$$.fragment,t)},m(t,r){I(e,t,r),n=!0},p(t,r){const s={};r&4096&&(s.$$scope={dirty:r,ctx:t}),e.$set(s)},i(t){n||(_(e.$$.fragment,t),n=!0)},o(t){g(e.$$.fragment,t),n=!1},d(t){b(e,t)}}}function ye(a){let e,n,t,r,s,$,o,f,i,k;n=new ae({props:{$$slots:{default:[Ke]},$$scope:{ctx:a}}}),n.$on("click",a[3]);function l(p){a[5](p)}let u={anchor:!1,$$slots:{default:[Ze]},$$scope:{ctx:a}};return a[1]!==void 0&&(u.anchorElement=a[1]),r=new Y({props:u}),a[4](r),z.push(()=>ne(r,"anchorElement",l)),{c(){e=T("div"),d(n.$$.fragment),t=C(),d(r.$$.fragment),this.h()},l(p){e=j(p,"DIV",{class:!0});var c=L(e);v(n.$$.fragment,c),t=A(c),v(r.$$.fragment,c),c.forEach(m),this.h()},h(){X(e,"class",$=Object.keys(a[2]).join(" "))},m(p,c){w(p,e,c),I(n,e,null),S(e,t),I(r,e,null),a[8](e),f=!0,i||(k=me(o=ve.call(null,e,{addClass:a[6],removeClass:a[7]})),i=!0)},p(p,[c]){const h={};c&4096&&(h.$$scope={dirty:c,ctx:p}),n.$set(h);const O={};c&4096&&(O.$$scope={dirty:c,ctx:p}),!s&&c&2&&(s=!0,O.anchorElement=p[1],re(()=>s=!1)),r.$set(O),(!f||c&4&&$!==($=Object.keys(p[2]).join(" ")))&&X(e,"class",$),o&&pe(o.update)&&c&4&&o.update.call(null,{addClass:p[6],removeClass:p[7]})},i(p){f||(_(n.$$.fragment,p),_(r.$$.fragment,p),f=!0)},o(p){g(n.$$.fragment,p),g(r.$$.fragment,p),f=!1},d(p){p&&m(e),b(n),a[4](null),b(r),a[8](null),i=!1,k()}}}function et(a,e,n){let t,r,s={};const $=()=>t.setOpen(!0);function o(u){z[u?"unshift":"push"](()=>{t=u,n(0,t)})}function f(u){r=u,n(1,r)}const i=u=>{s[u]||n(2,s[u]=!0,s)},k=u=>{s[u]&&(delete s[u],n(2,s))};function l(u){z[u?"unshift":"push"](()=>{r=u,n(1,r)})}return[t,r,s,$,o,f,i,k,l]}class tt extends G{constructor(e){super(),N(this,e,et,ye,J,{})}}function nt(a){let e;return{c(){e=U("Anchored automatically, corner set to bottom-left")},l(n){e=D(n,"Anchored automatically, corner set to bottom-left")},m(n,t){w(n,e,t)},d(n){n&&m(e)}}}function rt(a){let e;return{c(){e=U("Anchored manually")},l(n){e=D(n,"Anchored manually")},m(n,t){w(n,e,t)},d(n){n&&m(e)}}}function st(a){let e,n,t,r,s,$,o,f,i,k,l,u,p,c,h,O,q,x,P,y,B,ee,R,te,K;return h=new Q({props:{component:ke,file:"menu-surface/_Simple.svelte"}}),q=new Q({props:{component:Ve,file:"menu-surface/_Static.svelte"}}),P=new Q({props:{component:Ne,file:"menu-surface/_Anchored.svelte",$$slots:{default:[nt]},$$scope:{ctx:a}}}),B=new Q({props:{component:tt,files:["menu-surface/_ManualAnchor.svelte","menu-surface/_ManualAnchor.scss"],$$slots:{default:[rt]},$$scope:{ctx:a}}}),{c(){e=C(),n=T("section"),t=T("h2"),r=U("Menu Surface"),s=C(),$=T("h5"),o=U("Installation"),f=C(),i=T("pre"),k=U("npm i -D @smui/menu-surface"),l=C(),u=T("h5"),p=U("Demos"),c=C(),d(h.$$.fragment),O=C(),d(q.$$.fragment),x=C(),d(P.$$.fragment),y=C(),d(B.$$.fragment),ee=C(),R=T("div"),te=U("Long div for scrolling..."),this.h()},l(M){ge('[data-svelte="svelte-1fjtwlq"]',document.head).forEach(m),e=A(M),n=j(M,"SECTION",{});var E=L(n);t=j(E,"H2",{});var F=L(t);r=D(F,"Menu Surface"),F.forEach(m),s=A(E),$=j(E,"H5",{});var le=L($);o=D(le,"Installation"),le.forEach(m),f=A(E),i=j(E,"PRE",{class:!0});var oe=L(i);k=D(oe,"npm i -D @smui/menu-surface"),oe.forEach(m),l=A(E),u=j(E,"H5",{});var fe=L(u);p=D(fe,"Demos"),fe.forEach(m),c=A(E),v(h.$$.fragment,E),O=A(E),v(q.$$.fragment,E),x=A(E),v(P.$$.fragment,E),y=A(E),v(B.$$.fragment,E),ee=A(E),R=j(E,"DIV",{style:!0});var $e=L(R);te=D($e,"Long div for scrolling..."),$e.forEach(m),E.forEach(m),this.h()},h(){document.title="Menu Surface - SMUI",X(i,"class","demo-spaced"),V(R,"padding-top","200px")},m(M,H){w(M,e,H),w(M,n,H),S(n,t),S(t,r),S(n,s),S(n,$),S($,o),S(n,f),S(n,i),S(i,k),S(n,l),S(n,u),S(u,p),S(n,c),I(h,n,null),S(n,O),I(q,n,null),S(n,x),I(P,n,null),S(n,y),I(B,n,null),S(n,ee),S(n,R),S(R,te),K=!0},p(M,[H]){const E={};H&1&&(E.$$scope={dirty:H,ctx:M}),P.$set(E);const F={};H&1&&(F.$$scope={dirty:H,ctx:M}),B.$set(F)},i(M){K||(_(h.$$.fragment,M),_(q.$$.fragment,M),_(P.$$.fragment,M),_(B.$$.fragment,M),K=!0)},o(M){g(h.$$.fragment,M),g(q.$$.fragment,M),g(P.$$.fragment,M),g(B.$$.fragment,M),K=!1},d(M){M&&m(e),M&&m(n),b(h),b(q),b(P),b(B)}}}class St extends G{constructor(e){super(),N(this,e,null,st,J,{})}}export{St as default};
