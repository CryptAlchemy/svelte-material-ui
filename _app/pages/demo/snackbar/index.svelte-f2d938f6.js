var Je=Object.defineProperty;var Ne=Object.getOwnPropertySymbols;var ye=Object.prototype.hasOwnProperty,xe=Object.prototype.propertyIsEnumerable;var De=(a,e,n)=>e in a?Je(a,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):a[e]=n,Ae=(a,e)=>{for(var n in e||(e={}))ye.call(e,n)&&De(a,n,e[n]);if(Ne)for(var n of Ne(e))xe.call(e,n)&&De(a,n,e[n]);return a};import{S as y,i as x,s as ee,P as et,C as H,e as V,c as G,a as K,d as m,Z as ge,g as h,H as w,_ as Ie,I as Oe,Q as tt,R as nt,T as st,z as oe,$ as ve,q as g,o as k,a0 as at,a1 as ke,a2 as rt,r as lt,v as ot,a3 as Xe,M as Q,w as T,k as N,x as S,m as D,y as E,B as A,t as I,h as O,b as ie,j as re,N as it,O as ct,A as ue,l as J,n as $e,p as me,U as ft,G as ut}from"../../../chunks/index-30f0de65.js";import{D as fe}from"../../../chunks/Demo-e6e6f5b9.js";import{_ as $t,a as we,M as mt,c as be,u as Le,f as _t,d as he,p as pt}from"../../../chunks/useActions-23126cd3.js";import{p as X,e as Re}from"../../../chunks/prefixFilter-0866cfc5.js";import{c as dt,D as gt}from"../../../chunks/Ripple-5fd6e49b.js";import{L as W}from"../../../chunks/index-85a52a40.js";import{B as z}from"../../../chunks/Button-ec6b767e.js";import{I as Te}from"../../../chunks/IconButton-922cc448.js";import{T as bt}from"../../../chunks/Textfield-6d40fc15.js";import"../../../chunks/index-dbcd02f8.js";import"../../../chunks/index-c646bcc2.js";import"../../../chunks/ContextFragment-0901ca24.js";import"../../../chunks/NotchedOutline-43c8e50e.js";/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Y={CLOSING:"mdc-snackbar--closing",OPEN:"mdc-snackbar--open",OPENING:"mdc-snackbar--opening"},Se={ACTION_SELECTOR:".mdc-snackbar__action",ARIA_LIVE_LABEL_TEXT_ATTR:"data-mdc-snackbar-label-text",CLOSED_EVENT:"MDCSnackbar:closed",CLOSING_EVENT:"MDCSnackbar:closing",DISMISS_SELECTOR:".mdc-snackbar__dismiss",LABEL_SELECTOR:".mdc-snackbar__label",OPENED_EVENT:"MDCSnackbar:opened",OPENING_EVENT:"MDCSnackbar:opening",REASON_ACTION:"action",REASON_DISMISS:"dismiss",SURFACE_SELECTOR:".mdc-snackbar__surface"},j={DEFAULT_AUTO_DISMISS_TIMEOUT_MS:5e3,INDETERMINATE:-1,MAX_AUTO_DISMISS_TIMEOUT_MS:1e4,MIN_AUTO_DISMISS_TIMEOUT_MS:4e3,SNACKBAR_ANIMATION_CLOSE_TIME_MS:75,SNACKBAR_ANIMATION_OPEN_TIME_MS:150,ARIA_LIVE_DELAY_MS:1e3};/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var ht=j.ARIA_LIVE_DELAY_MS,Ue=Se.ARIA_LIVE_LABEL_TEXT_ATTR;function kt(a,e){e===void 0&&(e=a);var n=a.getAttribute("aria-live"),t=e.textContent.trim();!t||!n||(a.setAttribute("aria-live","off"),e.textContent="",e.innerHTML='<span style="display: inline-block; width: 0; height: 1px;">&nbsp;</span>',e.setAttribute(Ue,t),setTimeout(function(){a.setAttribute("aria-live",n),e.removeAttribute(Ue),e.textContent=t},ht))}/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Pe=Y.OPENING,Be=Y.OPEN,Fe=Y.CLOSING,Tt=Se.REASON_ACTION,Ce=Se.REASON_DISMISS,St=function(a){$t(e,a);function e(n){var t=a.call(this,we(we({},e.defaultAdapter),n))||this;return t.opened=!1,t.animationFrame=0,t.animationTimer=0,t.autoDismissTimer=0,t.autoDismissTimeoutMs=j.DEFAULT_AUTO_DISMISS_TIMEOUT_MS,t.closeOnEscape=!0,t}return Object.defineProperty(e,"cssClasses",{get:function(){return Y},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return Se},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return j},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},announce:function(){},notifyClosed:function(){},notifyClosing:function(){},notifyOpened:function(){},notifyOpening:function(){},removeClass:function(){}}},enumerable:!1,configurable:!0}),e.prototype.destroy=function(){this.clearAutoDismissTimer(),cancelAnimationFrame(this.animationFrame),this.animationFrame=0,clearTimeout(this.animationTimer),this.animationTimer=0,this.adapter.removeClass(Pe),this.adapter.removeClass(Be),this.adapter.removeClass(Fe)},e.prototype.open=function(){var n=this;this.clearAutoDismissTimer(),this.opened=!0,this.adapter.notifyOpening(),this.adapter.removeClass(Fe),this.adapter.addClass(Pe),this.adapter.announce(),this.runNextAnimationFrame(function(){n.adapter.addClass(Be),n.animationTimer=setTimeout(function(){var t=n.getTimeoutMs();n.handleAnimationTimerEnd(),n.adapter.notifyOpened(),t!==j.INDETERMINATE&&(n.autoDismissTimer=setTimeout(function(){n.close(Ce)},t))},j.SNACKBAR_ANIMATION_OPEN_TIME_MS)})},e.prototype.close=function(n){var t=this;n===void 0&&(n=""),this.opened&&(cancelAnimationFrame(this.animationFrame),this.animationFrame=0,this.clearAutoDismissTimer(),this.opened=!1,this.adapter.notifyClosing(n),this.adapter.addClass(Y.CLOSING),this.adapter.removeClass(Y.OPEN),this.adapter.removeClass(Y.OPENING),clearTimeout(this.animationTimer),this.animationTimer=setTimeout(function(){t.handleAnimationTimerEnd(),t.adapter.notifyClosed(n)},j.SNACKBAR_ANIMATION_CLOSE_TIME_MS))},e.prototype.isOpen=function(){return this.opened},e.prototype.getTimeoutMs=function(){return this.autoDismissTimeoutMs},e.prototype.setTimeoutMs=function(n){var t=j.MIN_AUTO_DISMISS_TIMEOUT_MS,r=j.MAX_AUTO_DISMISS_TIMEOUT_MS,s=j.INDETERMINATE;if(n===j.INDETERMINATE||n<=r&&n>=t)this.autoDismissTimeoutMs=n;else throw new Error(`
        timeoutMs must be an integer in the range `+t+"\u2013"+r+`
        (or `+s+" to disable), but got '"+n+"'")},e.prototype.getCloseOnEscape=function(){return this.closeOnEscape},e.prototype.setCloseOnEscape=function(n){this.closeOnEscape=n},e.prototype.handleKeyDown=function(n){var t=n.key==="Escape"||n.keyCode===27;t&&this.getCloseOnEscape()&&this.close(Ce)},e.prototype.handleActionButtonClick=function(n){this.close(Tt)},e.prototype.handleActionIconClick=function(n){this.close(Ce)},e.prototype.clearAutoDismissTimer=function(){clearTimeout(this.autoDismissTimer),this.autoDismissTimer=0},e.prototype.handleAnimationTimerEnd=function(){this.animationTimer=0,this.adapter.removeClass(Y.OPENING),this.adapter.removeClass(Y.CLOSING)},e.prototype.runNextAnimationFrame=function(n){var t=this;cancelAnimationFrame(this.animationFrame),this.animationFrame=requestAnimationFrame(function(){t.animationFrame=0,clearTimeout(t.animationTimer),t.animationTimer=setTimeout(n,0)})},e}(mt);function Et(a){let e,n,t,r,s,l,o,i,$;const d=a[25].default,c=et(d,a,a[24],null);let _=[{class:t=be({[a[4]]:!0,"mdc-snackbar__surface":!0})},{role:"status"},{"aria-relevant":"additions"},X(a[12],"surface$")],M={};for(let b=0;b<_.length;b+=1)M=H(M,_[b]);let f=[{class:s=be(Ae({[a[1]]:!0,"mdc-snackbar":!0,"mdc-snackbar--stacked":a[2]==="stacked","mdc-snackbar--leading":a[3]},a[8]))},Re(a[12],["surface$"])],u={};for(let b=0;b<f.length;b+=1)u=H(u,f[b]);return{c(){e=V("aside"),n=V("div"),c&&c.c(),this.h()},l(b){e=G(b,"ASIDE",{class:!0});var C=K(e);n=G(C,"DIV",{class:!0,role:!0,"aria-relevant":!0});var F=K(n);c&&c.l(F),F.forEach(m),C.forEach(m),this.h()},h(){ge(n,M),ge(e,u)},m(b,C){h(b,e,C),w(e,n),c&&c.m(n,null),a[26](e),o=!0,i||($=[Ie(r=Le.call(null,n,a[5])),Oe(n,"click",a[10]),Ie(l=Le.call(null,e,a[0])),Ie(a[9].call(null,e)),Oe(e,"SMUISnackbar:closed",a[11]),Oe(e,"keydown",a[27])],i=!0)},p(b,C){c&&c.p&&(!o||C[0]&16777216)&&tt(c,d,b,b[24],o?st(d,b[24],C,null):nt(b[24]),null),ge(n,M=oe(_,[(!o||C[0]&16&&t!==(t=be({[b[4]]:!0,"mdc-snackbar__surface":!0})))&&{class:t},{role:"status"},{"aria-relevant":"additions"},C[0]&4096&&X(b[12],"surface$")])),r&&ve(r.update)&&C[0]&32&&r.update.call(null,b[5]),ge(e,u=oe(f,[(!o||C[0]&270&&s!==(s=be(Ae({[b[1]]:!0,"mdc-snackbar":!0,"mdc-snackbar--stacked":b[2]==="stacked","mdc-snackbar--leading":b[3]},b[8]))))&&{class:s},C[0]&4096&&Re(b[12],["surface$"])])),l&&ve(l.update)&&C[0]&1&&l.update.call(null,b[0])},i(b){o||(g(c,b),o=!0)},o(b){k(c,b),o=!1},d(b){b&&m(e),c&&c.d(b),a[26](null),i=!1,at($)}}}let Ve=Promise.resolve();function At(a,e,n){const t=["use","class","variant","leading","timeoutMs","closeOnEscape","labelText","actionButtonText","surface$class","surface$use","open","forceOpen","close","isOpen","getLabelElement","getActionButtonElement","getElement"];let r=ke(e,t),{$$slots:s={},$$scope:l}=e;const{closest:o}=pt,i=_t(rt());let $=()=>{};function d(p){return p===$}let{use:c=[]}=e,{class:_=""}=e,{variant:M=""}=e,{leading:f=!1}=e,{timeoutMs:u=5e3}=e,{closeOnEscape:b=!0}=e,{labelText:C=$}=e,{actionButtonText:F=$}=e,{surface$class:q=""}=e,{surface$use:le=[]}=e,B,L,U={},Z,v=new Promise(p=>Z=p);lt("SMUI:label:context","snackbar"),ot(()=>(n(6,L=new St({addClass:P,announce:()=>kt(de()),notifyClosed:p=>he(ae(),"SMUISnackbar:closed",p?{reason:p}:{},void 0,!0),notifyClosing:p=>he(ae(),"SMUISnackbar:closing",p?{reason:p}:{},void 0,!0),notifyOpened:()=>he(ae(),"SMUISnackbar:opened",void 0,void 0,!0),notifyOpening:()=>he(ae(),"SMUISnackbar:opening",void 0,void 0,!0),removeClass:R})),L.init(),()=>{L.destroy()}));function P(p){U[p]||n(8,U[p]=!0,U)}function R(p){(!(p in U)||U[p])&&n(8,U[p]=!1,U)}function te(p){const Me=p.target;L&&(o(Me,".mdc-snackbar__action")?L.handleActionButtonClick(p):o(Me,".mdc-snackbar__dismiss")&&L.handleActionIconClick(p))}function ne(){Z(),v=new Promise(p=>Z=p)}function se(){Ve=Ve.then(()=>(L.open(),v))}function pe(){return L.open()}function ze(p){return L.close(p)}function Ye(){return L.isOpen()}function de(){var p;return(p=ae().querySelector(".mdc-snackbar__label"))!==null&&p!==void 0?p:document.createElement("div")}function Ee(){var p;return(p=ae().querySelector(".mdc-snackbar__action"))!==null&&p!==void 0?p:document.createElement("button")}function ae(){return B}function Qe(p){Q[p?"unshift":"push"](()=>{B=p,n(7,B)})}const Ze=p=>L&&L.handleKeyDown(p);return a.$$set=p=>{e=H(H({},e),Xe(p)),n(12,r=ke(e,t)),"use"in p&&n(0,c=p.use),"class"in p&&n(1,_=p.class),"variant"in p&&n(2,M=p.variant),"leading"in p&&n(3,f=p.leading),"timeoutMs"in p&&n(13,u=p.timeoutMs),"closeOnEscape"in p&&n(14,b=p.closeOnEscape),"labelText"in p&&n(15,C=p.labelText),"actionButtonText"in p&&n(16,F=p.actionButtonText),"surface$class"in p&&n(4,q=p.surface$class),"surface$use"in p&&n(5,le=p.surface$use),"$$scope"in p&&n(24,l=p.$$scope)},a.$$.update=()=>{a.$$.dirty[0]&8256&&L&&L.getTimeoutMs()!==u&&L.setTimeoutMs(u),a.$$.dirty[0]&16448&&L&&L.getCloseOnEscape()!==b&&L.setCloseOnEscape(b),a.$$.dirty[0]&32832&&L&&!d(C)&&de().textContent!==C&&(de().textContent=C),a.$$.dirty[0]&65600&&L&&!d(F)&&Ee().textContent!==F&&(Ee().textContent=F)},[c,_,M,f,q,le,L,B,U,i,te,ne,r,u,b,C,F,se,pe,ze,Ye,de,Ee,ae,l,s,Qe,Ze]}class ce extends y{constructor(e){super(),x(this,e,At,Et,ee,{use:0,class:1,variant:2,leading:3,timeoutMs:13,closeOnEscape:14,labelText:15,actionButtonText:16,surface$class:4,surface$use:5,open:17,forceOpen:18,close:19,isOpen:20,getLabelElement:21,getActionButtonElement:22,getElement:23},null,[-1,-1])}get open(){return this.$$.ctx[17]}get forceOpen(){return this.$$.ctx[18]}get close(){return this.$$.ctx[19]}get isOpen(){return this.$$.ctx[20]}get getLabelElement(){return this.$$.ctx[21]}get getActionButtonElement(){return this.$$.ctx[22]}get getElement(){return this.$$.ctx[23]}}var _e=dt({class:"mdc-snackbar__actions",props:{"aria-atomic":"true"},contexts:{"SMUI:button:context":"snackbar:actions","SMUI:icon-button:context":"snackbar:actions","SMUI:label:context":void 0},component:gt});function It(a){let e;return{c(){e=I("This is a snackbar.")},l(n){e=O(n,"This is a snackbar.")},m(n,t){h(n,e,t)},d(n){n&&m(e)}}}function Ot(a){let e;return{c(){e=I("close")},l(n){e=O(n,"close")},m(n,t){h(n,e,t)},d(n){n&&m(e)}}}function Ct(a){let e,n;return e=new Te({props:{class:"material-icons",title:"Dismiss",$$slots:{default:[Ot]},$$scope:{ctx:a}}}),{c(){T(e.$$.fragment)},l(t){S(e.$$.fragment,t)},m(t,r){E(e,t,r),n=!0},p(t,r){const s={};r&64&&(s.$$scope={dirty:r,ctx:t}),e.$set(s)},i(t){n||(g(e.$$.fragment,t),n=!0)},o(t){k(e.$$.fragment,t),n=!1},d(t){A(e,t)}}}function Mt(a){let e,n,t,r;return e=new W({props:{$$slots:{default:[It]},$$scope:{ctx:a}}}),t=new _e({props:{$$slots:{default:[Ct]},$$scope:{ctx:a}}}),{c(){T(e.$$.fragment),n=N(),T(t.$$.fragment)},l(s){S(e.$$.fragment,s),n=D(s),S(t.$$.fragment,s)},m(s,l){E(e,s,l),h(s,n,l),E(t,s,l),r=!0},p(s,l){const o={};l&64&&(o.$$scope={dirty:l,ctx:s}),e.$set(o);const i={};l&64&&(i.$$scope={dirty:l,ctx:s}),t.$set(i)},i(s){r||(g(e.$$.fragment,s),g(t.$$.fragment,s),r=!0)},o(s){k(e.$$.fragment,s),k(t.$$.fragment,s),r=!1},d(s){A(e,s),s&&m(n),A(t,s)}}}function Nt(a){let e;return{c(){e=I("This is a snackbar.")},l(n){e=O(n,"This is a snackbar.")},m(n,t){h(n,e,t)},d(n){n&&m(e)}}}function Dt(a){let e,n;return e=new W({props:{$$slots:{default:[Nt]},$$scope:{ctx:a}}}),{c(){T(e.$$.fragment)},l(t){S(e.$$.fragment,t)},m(t,r){E(e,t,r),n=!0},p(t,r){const s={};r&64&&(s.$$scope={dirty:r,ctx:t}),e.$set(s)},i(t){n||(g(e.$$.fragment,t),n=!0)},o(t){k(e.$$.fragment,t),n=!1},d(t){A(e,t)}}}function vt(a){let e;return{c(){e=I("Open Snackbar With Dismiss")},l(n){e=O(n,"Open Snackbar With Dismiss")},m(n,t){h(n,e,t)},d(n){n&&m(e)}}}function wt(a){let e,n;return e=new W({props:{$$slots:{default:[vt]},$$scope:{ctx:a}}}),{c(){T(e.$$.fragment)},l(t){S(e.$$.fragment,t)},m(t,r){E(e,t,r),n=!0},p(t,r){const s={};r&64&&(s.$$scope={dirty:r,ctx:t}),e.$set(s)},i(t){n||(g(e.$$.fragment,t),n=!0)},o(t){k(e.$$.fragment,t),n=!1},d(t){A(e,t)}}}function Lt(a){let e;return{c(){e=I("Open Snackbar Without Dismiss")},l(n){e=O(n,"Open Snackbar Without Dismiss")},m(n,t){h(n,e,t)},d(n){n&&m(e)}}}function Rt(a){let e,n;return e=new W({props:{$$slots:{default:[Lt]},$$scope:{ctx:a}}}),{c(){T(e.$$.fragment)},l(t){S(e.$$.fragment,t)},m(t,r){E(e,t,r),n=!0},p(t,r){const s={};r&64&&(s.$$scope={dirty:r,ctx:t}),e.$set(s)},i(t){n||(g(e.$$.fragment,t),n=!0)},o(t){k(e.$$.fragment,t),n=!1},d(t){A(e,t)}}}function Ut(a){let e,n,t,r,s,l,o,i,$={$$slots:{default:[Mt]},$$scope:{ctx:a}};e=new ce({props:$}),a[2](e);let d={$$slots:{default:[Dt]},$$scope:{ctx:a}};return t=new ce({props:d}),a[3](t),s=new z({props:{$$slots:{default:[wt]},$$scope:{ctx:a}}}),s.$on("click",a[4]),o=new z({props:{$$slots:{default:[Rt]},$$scope:{ctx:a}}}),o.$on("click",a[5]),{c(){T(e.$$.fragment),n=N(),T(t.$$.fragment),r=N(),T(s.$$.fragment),l=N(),T(o.$$.fragment)},l(c){S(e.$$.fragment,c),n=D(c),S(t.$$.fragment,c),r=D(c),S(s.$$.fragment,c),l=D(c),S(o.$$.fragment,c)},m(c,_){E(e,c,_),h(c,n,_),E(t,c,_),h(c,r,_),E(s,c,_),h(c,l,_),E(o,c,_),i=!0},p(c,[_]){const M={};_&64&&(M.$$scope={dirty:_,ctx:c}),e.$set(M);const f={};_&64&&(f.$$scope={dirty:_,ctx:c}),t.$set(f);const u={};_&64&&(u.$$scope={dirty:_,ctx:c}),s.$set(u);const b={};_&64&&(b.$$scope={dirty:_,ctx:c}),o.$set(b)},i(c){i||(g(e.$$.fragment,c),g(t.$$.fragment,c),g(s.$$.fragment,c),g(o.$$.fragment,c),i=!0)},o(c){k(e.$$.fragment,c),k(t.$$.fragment,c),k(s.$$.fragment,c),k(o.$$.fragment,c),i=!1},d(c){a[2](null),A(e,c),c&&m(n),a[3](null),A(t,c),c&&m(r),A(s,c),c&&m(l),A(o,c)}}}function Pt(a,e,n){let t,r;function s($){Q[$?"unshift":"push"](()=>{t=$,n(0,t)})}function l($){Q[$?"unshift":"push"](()=>{r=$,n(1,r)})}return[t,r,s,l,()=>t.open(),()=>r.open()]}class Bt extends y{constructor(e){super(),x(this,e,Pt,Ut,ee,{})}}function Ft(a){let e;return{c(){e=I("This is a leading snackbar.")},l(n){e=O(n,"This is a leading snackbar.")},m(n,t){h(n,e,t)},d(n){n&&m(e)}}}function Vt(a){let e;return{c(){e=I("Action")},l(n){e=O(n,"Action")},m(n,t){h(n,e,t)},d(n){n&&m(e)}}}function Gt(a){let e,n;return e=new z({props:{$$slots:{default:[Vt]},$$scope:{ctx:a}}}),{c(){T(e.$$.fragment)},l(t){S(e.$$.fragment,t)},m(t,r){E(e,t,r),n=!0},p(t,r){const s={};r&32&&(s.$$scope={dirty:r,ctx:t}),e.$set(s)},i(t){n||(g(e.$$.fragment,t),n=!0)},o(t){k(e.$$.fragment,t),n=!1},d(t){A(e,t)}}}function Kt(a){let e,n,t,r;return e=new W({props:{$$slots:{default:[Ft]},$$scope:{ctx:a}}}),t=new _e({props:{$$slots:{default:[Gt]},$$scope:{ctx:a}}}),{c(){T(e.$$.fragment),n=N(),T(t.$$.fragment)},l(s){S(e.$$.fragment,s),n=D(s),S(t.$$.fragment,s)},m(s,l){E(e,s,l),h(s,n,l),E(t,s,l),r=!0},p(s,l){const o={};l&32&&(o.$$scope={dirty:l,ctx:s}),e.$set(o);const i={};l&32&&(i.$$scope={dirty:l,ctx:s}),t.$set(i)},i(s){r||(g(e.$$.fragment,s),g(t.$$.fragment,s),r=!0)},o(s){k(e.$$.fragment,s),k(t.$$.fragment,s),r=!1},d(s){A(e,s),s&&m(n),A(t,s)}}}function Wt(a){let e;return{c(){e=I("Open Snackbar")},l(n){e=O(n,"Open Snackbar")},m(n,t){h(n,e,t)},d(n){n&&m(e)}}}function qt(a){let e,n;return e=new W({props:{$$slots:{default:[Wt]},$$scope:{ctx:a}}}),{c(){T(e.$$.fragment)},l(t){S(e.$$.fragment,t)},m(t,r){E(e,t,r),n=!0},p(t,r){const s={};r&32&&(s.$$scope={dirty:r,ctx:t}),e.$set(s)},i(t){n||(g(e.$$.fragment,t),n=!0)},o(t){k(e.$$.fragment,t),n=!1},d(t){A(e,t)}}}function jt(a){let e,n,t,r,s,l,o,i,$={leading:!0,$$slots:{default:[Kt]},$$scope:{ctx:a}};return e=new ce({props:$}),a[3](e),e.$on("SMUISnackbar:closed",a[2]),t=new z({props:{$$slots:{default:[qt]},$$scope:{ctx:a}}}),t.$on("click",a[4]),{c(){T(e.$$.fragment),n=N(),T(t.$$.fragment),r=N(),s=V("pre"),l=I("Closed Reason: "),o=I(a[1]),this.h()},l(d){S(e.$$.fragment,d),n=D(d),S(t.$$.fragment,d),r=D(d),s=G(d,"PRE",{class:!0});var c=K(s);l=O(c,"Closed Reason: "),o=O(c,a[1]),c.forEach(m),this.h()},h(){ie(s,"class","status")},m(d,c){E(e,d,c),h(d,n,c),E(t,d,c),h(d,r,c),h(d,s,c),w(s,l),w(s,o),i=!0},p(d,[c]){const _={};c&32&&(_.$$scope={dirty:c,ctx:d}),e.$set(_);const M={};c&32&&(M.$$scope={dirty:c,ctx:d}),t.$set(M),(!i||c&2)&&re(o,d[1])},i(d){i||(g(e.$$.fragment,d),g(t.$$.fragment,d),i=!0)},o(d){k(e.$$.fragment,d),k(t.$$.fragment,d),i=!1},d(d){a[3](null),A(e,d),d&&m(n),A(t,d),d&&m(r),d&&m(s)}}}function Ht(a,e,n){let t,r="nothing yet";function s(i){var $;n(1,r=($=i.detail.reason)!=null?$:"Undefined.")}function l(i){Q[i?"unshift":"push"](()=>{t=i,n(0,t)})}return[t,r,s,l,()=>t.open()]}class Xt extends y{constructor(e){super(),x(this,e,Ht,jt,ee,{})}}function zt(a){let e;return{c(){e=I("This is a stacked snackbar. Use it when you have really long text.")},l(n){e=O(n,"This is a stacked snackbar. Use it when you have really long text.")},m(n,t){h(n,e,t)},d(n){n&&m(e)}}}function Yt(a){let e;return{c(){e=I("Something")},l(n){e=O(n,"Something")},m(n,t){h(n,e,t)},d(n){n&&m(e)}}}function Qt(a){let e;return{c(){e=I("Another")},l(n){e=O(n,"Another")},m(n,t){h(n,e,t)},d(n){n&&m(e)}}}function Zt(a){let e;return{c(){e=I("close")},l(n){e=O(n,"close")},m(n,t){h(n,e,t)},d(n){n&&m(e)}}}function Jt(a){let e,n,t,r,s,l;return e=new z({props:{$$slots:{default:[Yt]},$$scope:{ctx:a}}}),e.$on("click",a[4]),t=new z({props:{$$slots:{default:[Qt]},$$scope:{ctx:a}}}),t.$on("click",a[5]),s=new Te({props:{class:"material-icons",title:"Dismiss",$$slots:{default:[Zt]},$$scope:{ctx:a}}}),s.$on("click",a[6]),{c(){T(e.$$.fragment),n=N(),T(t.$$.fragment),r=N(),T(s.$$.fragment)},l(o){S(e.$$.fragment,o),n=D(o),S(t.$$.fragment,o),r=D(o),S(s.$$.fragment,o)},m(o,i){E(e,o,i),h(o,n,i),E(t,o,i),h(o,r,i),E(s,o,i),l=!0},p(o,i){const $={};i&512&&($.$$scope={dirty:i,ctx:o}),e.$set($);const d={};i&512&&(d.$$scope={dirty:i,ctx:o}),t.$set(d);const c={};i&512&&(c.$$scope={dirty:i,ctx:o}),s.$set(c)},i(o){l||(g(e.$$.fragment,o),g(t.$$.fragment,o),g(s.$$.fragment,o),l=!0)},o(o){k(e.$$.fragment,o),k(t.$$.fragment,o),k(s.$$.fragment,o),l=!1},d(o){A(e,o),o&&m(n),A(t,o),o&&m(r),A(s,o)}}}function yt(a){let e,n,t,r;return e=new W({props:{$$slots:{default:[zt]},$$scope:{ctx:a}}}),t=new _e({props:{$$slots:{default:[Jt]},$$scope:{ctx:a}}}),{c(){T(e.$$.fragment),n=N(),T(t.$$.fragment)},l(s){S(e.$$.fragment,s),n=D(s),S(t.$$.fragment,s)},m(s,l){E(e,s,l),h(s,n,l),E(t,s,l),r=!0},p(s,l){const o={};l&512&&(o.$$scope={dirty:l,ctx:s}),e.$set(o);const i={};l&516&&(i.$$scope={dirty:l,ctx:s}),t.$set(i)},i(s){r||(g(e.$$.fragment,s),g(t.$$.fragment,s),r=!0)},o(s){k(e.$$.fragment,s),k(t.$$.fragment,s),r=!1},d(s){A(e,s),s&&m(n),A(t,s)}}}function xt(a){let e;return{c(){e=I("Open Snackbar")},l(n){e=O(n,"Open Snackbar")},m(n,t){h(n,e,t)},d(n){n&&m(e)}}}function en(a){let e,n;return e=new W({props:{$$slots:{default:[xt]},$$scope:{ctx:a}}}),{c(){T(e.$$.fragment)},l(t){S(e.$$.fragment,t)},m(t,r){E(e,t,r),n=!0},p(t,r){const s={};r&512&&(s.$$scope={dirty:r,ctx:t}),e.$set(s)},i(t){n||(g(e.$$.fragment,t),n=!0)},o(t){k(e.$$.fragment,t),n=!1},d(t){A(e,t)}}}function tn(a){let e,n,t,r,s,l,o,i,$,d,c,_,M={variant:"stacked",$$slots:{default:[yt]},$$scope:{ctx:a}};return e=new ce({props:M}),a[7](e),e.$on("SMUISnackbar:closed",a[3]),t=new z({props:{$$slots:{default:[en]},$$scope:{ctx:a}}}),t.$on("click",a[8]),{c(){T(e.$$.fragment),n=N(),T(t.$$.fragment),r=N(),s=V("pre"),l=I("Closed Reason: "),o=I(a[1]),i=N(),$=V("pre"),d=I("Action: "),c=I(a[2]),this.h()},l(f){S(e.$$.fragment,f),n=D(f),S(t.$$.fragment,f),r=D(f),s=G(f,"PRE",{class:!0});var u=K(s);l=O(u,"Closed Reason: "),o=O(u,a[1]),u.forEach(m),i=D(f),$=G(f,"PRE",{class:!0});var b=K($);d=O(b,"Action: "),c=O(b,a[2]),b.forEach(m),this.h()},h(){ie(s,"class","status"),ie($,"class","status")},m(f,u){E(e,f,u),h(f,n,u),E(t,f,u),h(f,r,u),h(f,s,u),w(s,l),w(s,o),h(f,i,u),h(f,$,u),w($,d),w($,c),_=!0},p(f,[u]){const b={};u&516&&(b.$$scope={dirty:u,ctx:f}),e.$set(b);const C={};u&512&&(C.$$scope={dirty:u,ctx:f}),t.$set(C),(!_||u&2)&&re(o,f[1]),(!_||u&4)&&re(c,f[2])},i(f){_||(g(e.$$.fragment,f),g(t.$$.fragment,f),_=!0)},o(f){k(e.$$.fragment,f),k(t.$$.fragment,f),_=!1},d(f){a[7](null),A(e,f),f&&m(n),A(t,f),f&&m(r),f&&m(s),f&&m(i),f&&m($)}}}function nn(a,e,n){let t,r="nothing yet",s="nothing yet";function l(_){var M;n(1,r=(M=_.detail.reason)!=null?M:"Undefined.")}const o=()=>n(2,s="Something"),i=()=>n(2,s="Another"),$=()=>n(2,s="Dismissed");function d(_){Q[_?"unshift":"push"](()=>{t=_,n(0,t)})}return[t,r,s,l,o,i,$,d,()=>t.open()]}class sn extends y{constructor(e){super(),x(this,e,nn,tn,ee,{})}}function an(a){let e;return{c(){e=I("close")},l(n){e=O(n,"close")},m(n,t){h(n,e,t)},d(n){n&&m(e)}}}function rn(a){let e,n;return e=new Te({props:{class:"material-icons",title:"Dismiss",$$slots:{default:[an]},$$scope:{ctx:a}}}),{c(){T(e.$$.fragment)},l(t){S(e.$$.fragment,t)},m(t,r){E(e,t,r),n=!0},p(t,r){const s={};r&32&&(s.$$scope={dirty:r,ctx:t}),e.$set(s)},i(t){n||(g(e.$$.fragment,t),n=!0)},o(t){k(e.$$.fragment,t),n=!1},d(t){A(e,t)}}}function ln(a){let e,n,t,r;return e=new W({}),t=new _e({props:{$$slots:{default:[rn]},$$scope:{ctx:a}}}),{c(){T(e.$$.fragment),n=N(),T(t.$$.fragment)},l(s){S(e.$$.fragment,s),n=D(s),S(t.$$.fragment,s)},m(s,l){E(e,s,l),h(s,n,l),E(t,s,l),r=!0},p(s,l){const o={};l&32&&(o.$$scope={dirty:l,ctx:s}),t.$set(o)},i(s){r||(g(e.$$.fragment,s),g(t.$$.fragment,s),r=!0)},o(s){k(e.$$.fragment,s),k(t.$$.fragment,s),r=!1},d(s){A(e,s),s&&m(n),A(t,s)}}}function on(a){let e;return{c(){e=I("Open Snackbar")},l(n){e=O(n,"Open Snackbar")},m(n,t){h(n,e,t)},d(n){n&&m(e)}}}function cn(a){let e,n;return e=new W({props:{$$slots:{default:[on]},$$scope:{ctx:a}}}),{c(){T(e.$$.fragment)},l(t){S(e.$$.fragment,t)},m(t,r){E(e,t,r),n=!0},p(t,r){const s={};r&32&&(s.$$scope={dirty:r,ctx:t}),e.$set(s)},i(t){n||(g(e.$$.fragment,t),n=!0)},o(t){k(e.$$.fragment,t),n=!1},d(t){A(e,t)}}}function fn(a){let e,n,t,r,s,l,o,i={labelText:a[1],timeoutMs:-1,$$slots:{default:[ln]},$$scope:{ctx:a}};e=new ce({props:i}),a[2](e);function $(c){a[3](c)}let d={label:"Dynamic Text",required:!0};return a[1]!==void 0&&(d.value=a[1]),t=new bt({props:d}),Q.push(()=>it(t,"value",$)),l=new z({props:{$$slots:{default:[cn]},$$scope:{ctx:a}}}),l.$on("click",a[4]),{c(){T(e.$$.fragment),n=N(),T(t.$$.fragment),s=N(),T(l.$$.fragment)},l(c){S(e.$$.fragment,c),n=D(c),S(t.$$.fragment,c),s=D(c),S(l.$$.fragment,c)},m(c,_){E(e,c,_),h(c,n,_),E(t,c,_),h(c,s,_),E(l,c,_),o=!0},p(c,[_]){const M={};_&2&&(M.labelText=c[1]),_&32&&(M.$$scope={dirty:_,ctx:c}),e.$set(M);const f={};!r&&_&2&&(r=!0,f.value=c[1],ct(()=>r=!1)),t.$set(f);const u={};_&32&&(u.$$scope={dirty:_,ctx:c}),l.$set(u)},i(c){o||(g(e.$$.fragment,c),g(t.$$.fragment,c),g(l.$$.fragment,c),o=!0)},o(c){k(e.$$.fragment,c),k(t.$$.fragment,c),k(l.$$.fragment,c),o=!1},d(c){a[2](null),A(e,c),c&&m(n),A(t,c),c&&m(s),A(l,c)}}}function un(a,e,n){let t,r="This is a snackbar with dynamic text.";function s(i){Q[i?"unshift":"push"](()=>{t=i,n(0,t)})}function l(i){r=i,n(1,r)}return[t,r,s,l,()=>t&&t.open()]}class $n extends y{constructor(e){super(),x(this,e,un,fn,ee,{})}}function Ge(a,e,n){const t=a.slice();return t[11]=e[n],t}function Ke(a){let e,n;const t=[{labelText:a[1].label},a[1]&&a[1].props||{},X(a[4],"snackbar$")];let r={$$slots:{default:[dn]},$$scope:{ctx:a}};for(let s=0;s<t.length;s+=1)r=H(r,t[s]);return e=new ce({props:r}),a[10](e),e.$on("SMUISnackbar:closed",a[2]),{c(){T(e.$$.fragment)},l(s){S(e.$$.fragment,s)},m(s,l){E(e,s,l),n=!0},p(s,l){const o=l&18?oe(t,[l&2&&{labelText:s[1].label},l&2&&ue(s[1]&&s[1].props||{}),l&16&&ue(X(s[4],"snackbar$"))]):{};l&16402&&(o.$$scope={dirty:l,ctx:s}),e.$set(o)},i(s){n||(g(e.$$.fragment,s),n=!0)},o(s){k(e.$$.fragment,s),n=!1},d(s){a[10](null),A(e,s)}}}function We(a){let e,n;return e=new _e({props:{$$slots:{default:[pn]},$$scope:{ctx:a}}}),{c(){T(e.$$.fragment)},l(t){S(e.$$.fragment,t)},m(t,r){E(e,t,r),n=!0},p(t,r){const s={};r&16402&&(s.$$scope={dirty:r,ctx:t}),e.$set(s)},i(t){n||(g(e.$$.fragment,t),n=!0)},o(t){k(e.$$.fragment,t),n=!1},d(t){A(e,t)}}}function qe(a){let e,n,t=a[1].actions,r=[];for(let l=0;l<t.length;l+=1)r[l]=je(Ge(a,t,l));const s=l=>k(r[l],1,1,()=>{r[l]=null});return{c(){for(let l=0;l<r.length;l+=1)r[l].c();e=J()},l(l){for(let o=0;o<r.length;o+=1)r[o].l(l);e=J()},m(l,o){for(let i=0;i<r.length;i+=1)r[i].m(l,o);h(l,e,o),n=!0},p(l,o){if(o&18){t=l[1].actions;let i;for(i=0;i<t.length;i+=1){const $=Ge(l,t,i);r[i]?(r[i].p($,o),g(r[i],1)):(r[i]=je($),r[i].c(),g(r[i],1),r[i].m(e.parentNode,e))}for($e(),i=t.length;i<r.length;i+=1)s(i);me()}},i(l){if(!n){for(let o=0;o<t.length;o+=1)g(r[o]);n=!0}},o(l){r=r.filter(Boolean);for(let o=0;o<r.length;o+=1)k(r[o]);n=!1},d(l){ft(r,l),l&&m(e)}}}function mn(a){let e=a[11].text+"",n;return{c(){n=I(e)},l(t){n=O(t,e)},m(t,r){h(t,n,r)},p(t,r){r&2&&e!==(e=t[11].text+"")&&re(n,e)},d(t){t&&m(n)}}}function je(a){let e,n;const t=[X(a[4],"action$")];function r(...l){return a[9](a[11],...l)}let s={$$slots:{default:[mn]},$$scope:{ctx:a}};for(let l=0;l<t.length;l+=1)s=H(s,t[l]);return e=new z({props:s}),e.$on("click",r),{c(){T(e.$$.fragment)},l(l){S(e.$$.fragment,l)},m(l,o){E(e,l,o),n=!0},p(l,o){a=l;const i=o&16?oe(t,[ue(X(a[4],"action$"))]):{};o&16386&&(i.$$scope={dirty:o,ctx:a}),e.$set(i)},i(l){n||(g(e.$$.fragment,l),n=!0)},o(l){k(e.$$.fragment,l),n=!1},d(l){A(e,l)}}}function He(a){let e,n;const t=[{title:a[1].dismissTitle||"Dismiss"},X(a[4],"dismiss$")];let r={$$slots:{default:[_n]},$$scope:{ctx:a}};for(let s=0;s<t.length;s+=1)r=H(r,t[s]);return e=new Te({props:r}),e.$on("click",a[3]),{c(){T(e.$$.fragment)},l(s){S(e.$$.fragment,s)},m(s,l){E(e,s,l),n=!0},p(s,l){const o=l&18?oe(t,[l&2&&{title:s[1].dismissTitle||"Dismiss"},l&16&&ue(X(s[4],"dismiss$"))]):{};l&16386&&(o.$$scope={dirty:l,ctx:s}),e.$set(o)},i(s){n||(g(e.$$.fragment,s),n=!0)},o(s){k(e.$$.fragment,s),n=!1},d(s){A(e,s)}}}function _n(a){let e=(a[1].dismissText||"close")+"",n;return{c(){n=I(e)},l(t){n=O(t,e)},m(t,r){h(t,n,r)},p(t,r){r&2&&e!==(e=(t[1].dismissText||"close")+"")&&re(n,e)},d(t){t&&m(n)}}}function pn(a){let e,n,t,r=a[1].actions&&qe(a),s=a[1].dismissButton&&He(a);return{c(){r&&r.c(),e=N(),s&&s.c(),n=J()},l(l){r&&r.l(l),e=D(l),s&&s.l(l),n=J()},m(l,o){r&&r.m(l,o),h(l,e,o),s&&s.m(l,o),h(l,n,o),t=!0},p(l,o){l[1].actions?r?(r.p(l,o),o&2&&g(r,1)):(r=qe(l),r.c(),g(r,1),r.m(e.parentNode,e)):r&&($e(),k(r,1,1,()=>{r=null}),me()),l[1].dismissButton?s?(s.p(l,o),o&2&&g(s,1)):(s=He(l),s.c(),g(s,1),s.m(n.parentNode,n)):s&&($e(),k(s,1,1,()=>{s=null}),me())},i(l){t||(g(r),g(s),t=!0)},o(l){k(r),k(s),t=!1},d(l){r&&r.d(l),l&&m(e),s&&s.d(l),l&&m(n)}}}function dn(a){let e,n,t,r;const s=[X(a[4],"label$")];let l={};for(let i=0;i<s.length;i+=1)l=H(l,s[i]);e=new W({props:l});let o=(a[1].actions||a[1].dismissButton)&&We(a);return{c(){T(e.$$.fragment),n=N(),o&&o.c(),t=J()},l(i){S(e.$$.fragment,i),n=D(i),o&&o.l(i),t=J()},m(i,$){E(e,i,$),h(i,n,$),o&&o.m(i,$),h(i,t,$),r=!0},p(i,$){const d=$&16?oe(s,[ue(X(i[4],"label$"))]):{};e.$set(d),i[1].actions||i[1].dismissButton?o?(o.p(i,$),$&2&&g(o,1)):(o=We(i),o.c(),g(o,1),o.m(t.parentNode,t)):o&&($e(),k(o,1,1,()=>{o=null}),me())},i(i){r||(g(e.$$.fragment,i),g(o),r=!0)},o(i){k(e.$$.fragment,i),k(o),r=!1},d(i){A(e,i),i&&m(n),o&&o.d(i),i&&m(t)}}}function gn(a){let e,n,t=a[1]&&Ke(a);return{c(){t&&t.c(),e=J()},l(r){t&&t.l(r),e=J()},m(r,s){t&&t.m(r,s),h(r,e,s),n=!0},p(r,[s]){r[1]?t?(t.p(r,s),s&2&&g(t,1)):(t=Ke(r),t.c(),g(t,1),t.m(e.parentNode,e)):t&&($e(),k(t,1,1,()=>{t=null}),me())},i(r){n||(g(t),n=!0)},o(r){k(t),n=!1},d(r){t&&t.d(r),r&&m(e)}}}function bn(a,e){a.onClick&&a.onClick(e)}function hn(a,e,n){const t=["push","getElement"];let r=ke(e,t),s,l=[],o,i=!1;function $(u){o!=null&&o.onClose&&o.onClose(u),l.splice(0,1),n(7,l),n(1,o=void 0)}function d(u){o!=null&&o.onDismiss&&o.onDismiss(u)}function c(u){l.push(u),n(7,l)}function _(){return s.getElement()}const M=(u,b)=>bn(u,b);function f(u){Q[u?"unshift":"push"](()=>{s=u,n(0,s)})}return a.$$set=u=>{e=H(H({},e),Xe(u)),n(4,r=ke(e,t))},a.$$.update=()=>{a.$$.dirty&130&&l.length&&!o&&(n(1,o=l[0]),n(8,i=!0)),a.$$.dirty&257&&s&&i&&!s.isOpen()&&(s.open(),n(8,i=!1))},[s,o,$,d,r,c,_,l,i,M,f]}class kn extends y{constructor(e){super(),x(this,e,hn,gn,ee,{push:5,getElement:6})}get push(){return this.$$.ctx[5]}get getElement(){return this.$$.ctx[6]}}function Tn(a){let e;return{c(){e=I("Push a New Snackbar")},l(n){e=O(n,"Push a New Snackbar")},m(n,t){h(n,e,t)},d(n){n&&m(e)}}}function Sn(a){let e,n;return e=new W({props:{$$slots:{default:[Tn]},$$scope:{ctx:a}}}),{c(){T(e.$$.fragment)},l(t){S(e.$$.fragment,t)},m(t,r){E(e,t,r),n=!0},p(t,r){const s={};r&32&&(s.$$scope={dirty:r,ctx:t}),e.$set(s)},i(t){n||(g(e.$$.fragment,t),n=!0)},o(t){k(e.$$.fragment,t),n=!1},d(t){A(e,t)}}}function En(a){let e,n,t,r,s,l,o,i,$,d,c,_,M={dismiss$class:"material-icons"};return e=new kn({props:M}),a[4](e),t=new z({props:{$$slots:{default:[Sn]},$$scope:{ctx:a}}}),t.$on("click",a[3]),{c(){T(e.$$.fragment),n=N(),T(t.$$.fragment),r=N(),s=V("pre"),l=I("Closed Reason: "),o=I(a[1]),i=N(),$=V("pre"),d=I("Action: "),c=I(a[2]),this.h()},l(f){S(e.$$.fragment,f),n=D(f),S(t.$$.fragment,f),r=D(f),s=G(f,"PRE",{class:!0});var u=K(s);l=O(u,"Closed Reason: "),o=O(u,a[1]),u.forEach(m),i=D(f),$=G(f,"PRE",{class:!0});var b=K($);d=O(b,"Action: "),c=O(b,a[2]),b.forEach(m),this.h()},h(){ie(s,"class","status"),ie($,"class","status")},m(f,u){E(e,f,u),h(f,n,u),E(t,f,u),h(f,r,u),h(f,s,u),w(s,l),w(s,o),h(f,i,u),h(f,$,u),w($,d),w($,c),_=!0},p(f,[u]){const b={};e.$set(b);const C={};u&32&&(C.$$scope={dirty:u,ctx:f}),t.$set(C),(!_||u&2)&&re(o,f[1]),(!_||u&4)&&re(c,f[2])},i(f){_||(g(e.$$.fragment,f),g(t.$$.fragment,f),_=!0)},o(f){k(e.$$.fragment,f),k(t.$$.fragment,f),_=!1},d(f){a[4](null),A(e,f),f&&m(n),A(t,f),f&&m(r),f&&m(s),f&&m(i),f&&m($)}}}let An=0;function In(a,e,n){let t,r="nothing yet",s="nothing yet";function l(){t.push({props:{variant:"stacked"},label:"This is a snackbar generated by the kitchen. Here's a counter: "+An++,actions:[{onClick:()=>n(2,s="Something"),text:"Something"},{onClick:()=>n(2,s="Another"),text:"Another"}],dismissButton:!0,onDismiss:()=>n(2,s="Dismissed"),onClose:i=>{var $;n(1,r=($=i.detail.reason)!=null?$:"Undefined.")}})}function o(i){Q[i?"unshift":"push"](()=>{t=i,n(0,t)})}return[t,r,s,l,o]}class On extends y{constructor(e){super(),x(this,e,In,En,ee,{})}}function Cn(a){let e;return{c(){e=I("Leading with action")},l(n){e=O(n,"Leading with action")},m(n,t){h(n,e,t)},d(n){n&&m(e)}}}function Mn(a){let e;return{c(){e=I("Stacked with action")},l(n){e=O(n,"Stacked with action")},m(n,t){h(n,e,t)},d(n){n&&m(e)}}}function Nn(a){let e;return{c(){e=I("Using dynamic text")},l(n){e=O(n,"Using dynamic text")},m(n,t){h(n,e,t)},d(n){n&&m(e)}}}function Dn(a){let e;return{c(){e=I('The "Kitchen" Snackbar generator')},l(n){e=O(n,'The "Kitchen" Snackbar generator')},m(n,t){h(n,e,t)},d(n){n&&m(e)}}}function vn(a){let e,n,t,r,s,l,o,i,$,d,c,_,M,f,u,b,C,F,q,le,B,L,U,Z;return u=new fe({props:{component:Bt,file:"snackbar/_Simple.svelte"}}),C=new fe({props:{component:Xt,file:"snackbar/_LeadingWithAction.svelte",$$slots:{default:[Cn]},$$scope:{ctx:a}}}),q=new fe({props:{component:sn,file:"snackbar/_StackedWithAction.svelte",$$slots:{default:[Mn]},$$scope:{ctx:a}}}),B=new fe({props:{component:$n,file:"snackbar/_DynamicText.svelte",$$slots:{default:[Nn]},$$scope:{ctx:a}}}),U=new fe({props:{component:On,file:"snackbar/_Kitchen.svelte",$$slots:{default:[Dn]},$$scope:{ctx:a}}}),{c(){e=N(),n=V("section"),t=V("h2"),r=I("Snackbar"),s=N(),l=V("h5"),o=I("Installation"),i=N(),$=V("pre"),d=I("npm i -D @smui/snackbar"),c=N(),_=V("h5"),M=I("Demos"),f=N(),T(u.$$.fragment),b=N(),T(C.$$.fragment),F=N(),T(q.$$.fragment),le=N(),T(B.$$.fragment),L=N(),T(U.$$.fragment),this.h()},l(v){ut('[data-svelte="svelte-xrs0g7"]',document.head).forEach(m),e=D(v),n=G(v,"SECTION",{});var R=K(n);t=G(R,"H2",{});var te=K(t);r=O(te,"Snackbar"),te.forEach(m),s=D(R),l=G(R,"H5",{});var ne=K(l);o=O(ne,"Installation"),ne.forEach(m),i=D(R),$=G(R,"PRE",{class:!0});var se=K($);d=O(se,"npm i -D @smui/snackbar"),se.forEach(m),c=D(R),_=G(R,"H5",{});var pe=K(_);M=O(pe,"Demos"),pe.forEach(m),f=D(R),S(u.$$.fragment,R),b=D(R),S(C.$$.fragment,R),F=D(R),S(q.$$.fragment,R),le=D(R),S(B.$$.fragment,R),L=D(R),S(U.$$.fragment,R),R.forEach(m),this.h()},h(){document.title="Snackbar - SMUI",ie($,"class","demo-spaced")},m(v,P){h(v,e,P),h(v,n,P),w(n,t),w(t,r),w(n,s),w(n,l),w(l,o),w(n,i),w(n,$),w($,d),w(n,c),w(n,_),w(_,M),w(n,f),E(u,n,null),w(n,b),E(C,n,null),w(n,F),E(q,n,null),w(n,le),E(B,n,null),w(n,L),E(U,n,null),Z=!0},p(v,[P]){const R={};P&1&&(R.$$scope={dirty:P,ctx:v}),C.$set(R);const te={};P&1&&(te.$$scope={dirty:P,ctx:v}),q.$set(te);const ne={};P&1&&(ne.$$scope={dirty:P,ctx:v}),B.$set(ne);const se={};P&1&&(se.$$scope={dirty:P,ctx:v}),U.$set(se)},i(v){Z||(g(u.$$.fragment,v),g(C.$$.fragment,v),g(q.$$.fragment,v),g(B.$$.fragment,v),g(U.$$.fragment,v),Z=!0)},o(v){k(u.$$.fragment,v),k(C.$$.fragment,v),k(q.$$.fragment,v),k(B.$$.fragment,v),k(U.$$.fragment,v),Z=!1},d(v){v&&m(e),v&&m(n),A(u),A(C),A(q),A(B),A(U)}}}class Xn extends y{constructor(e){super(),x(this,e,null,vn,ee,{})}}export{Xn as default};
